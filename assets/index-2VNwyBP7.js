(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(h){if(h.ep)return;h.ep=!0;const m=u(h);fetch(h.href,m)}})();function uy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Tu={exports:{}},Fl={};var Pg;function dy(){if(Pg)return Fl;Pg=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,h,m){var p=null;if(m!==void 0&&(p=""+m),h.key!==void 0&&(p=""+h.key),"key"in h){m={};for(var v in h)v!=="key"&&(m[v]=h[v])}else m=h;return h=m.ref,{$$typeof:l,type:c,key:p,ref:h!==void 0?h:null,props:m}}return Fl.Fragment=o,Fl.jsx=u,Fl.jsxs=u,Fl}var Ig;function fy(){return Ig||(Ig=1,Tu.exports=dy()),Tu.exports}var a=fy(),Au={exports:{}},ae={};var e0;function hy(){if(e0)return ae;e0=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),H=Symbol.iterator;function Y(S){return S===null||typeof S!="object"?null:(S=H&&S[H]||S["@@iterator"],typeof S=="function"?S:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,V={};function K(S,O,Z){this.props=S,this.context=O,this.refs=V,this.updater=Z||R}K.prototype.isReactComponent={},K.prototype.setState=function(S,O){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,O,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function q(){}q.prototype=K.prototype;function G(S,O,Z){this.props=S,this.context=O,this.refs=V,this.updater=Z||R}var J=G.prototype=new q;J.constructor=G,U(J,K.prototype),J.isPureReactComponent=!0;var I=Array.isArray;function Q(){}var _={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function fe(S,O,Z){var X=Z.ref;return{$$typeof:l,type:S,key:O,ref:X!==void 0?X:null,props:Z}}function ue(S,O){return fe(S.type,O,S.props)}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Me(S){var O={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Z){return O[Z]})}var zt=/\/+/g;function ft(S,O){return typeof S=="object"&&S!==null&&S.key!=null?Me(""+S.key):O.toString(36)}function _t(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Q,Q):(S.status="pending",S.then(function(O){S.status==="pending"&&(S.status="fulfilled",S.value=O)},function(O){S.status==="pending"&&(S.status="rejected",S.reason=O)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function D(S,O,Z,X,ie){var se=typeof S;(se==="undefined"||se==="boolean")&&(S=null);var be=!1;if(S===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(S.$$typeof){case l:case o:be=!0;break;case E:return be=S._init,D(be(S._payload),O,Z,X,ie)}}if(be)return ie=ie(S),be=X===""?"."+ft(S,0):X,I(ie)?(Z="",be!=null&&(Z=be.replace(zt,"$&/")+"/"),D(ie,O,Z,"",function(fn){return fn})):ie!=null&&(Ue(ie)&&(ie=ue(ie,Z+(ie.key==null||S&&S.key===ie.key?"":(""+ie.key).replace(zt,"$&/")+"/")+be)),O.push(ie)),1;be=0;var Ke=X===""?".":X+":";if(I(S))for(var Ee=0;Ee<S.length;Ee++)X=S[Ee],se=Ke+ft(X,Ee),be+=D(X,O,Z,se,ie);else if(Ee=Y(S),typeof Ee=="function")for(S=Ee.call(S),Ee=0;!(X=S.next()).done;)X=X.value,se=Ke+ft(X,Ee++),be+=D(X,O,Z,se,ie);else if(se==="object"){if(typeof S.then=="function")return D(_t(S),O,Z,X,ie);throw O=String(S),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return be}function $(S,O,Z){if(S==null)return S;var X=[],ie=0;return D(S,X,"","",function(se){return O.call(Z,se,ie++)}),X}function te(S){if(S._status===-1){var O=S._result;O=O(),O.then(function(Z){(S._status===0||S._status===-1)&&(S._status=1,S._result=Z)},function(Z){(S._status===0||S._status===-1)&&(S._status=2,S._result=Z)}),S._status===-1&&(S._status=0,S._result=O)}if(S._status===1)return S._result.default;throw S._result}var de=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ye={map:$,forEach:function(S,O,Z){$(S,function(){O.apply(this,arguments)},Z)},count:function(S){var O=0;return $(S,function(){O++}),O},toArray:function(S){return $(S,function(O){return O})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ae.Activity=w,ae.Children=ye,ae.Component=K,ae.Fragment=u,ae.Profiler=h,ae.PureComponent=G,ae.StrictMode=c,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,ae.__COMPILER_RUNTIME={__proto__:null,c:function(S){return _.H.useMemoCache(S)}},ae.cache=function(S){return function(){return S.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(S,O,Z){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var X=U({},S.props),ie=S.key;if(O!=null)for(se in O.key!==void 0&&(ie=""+O.key),O)!le.call(O,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&O.ref===void 0||(X[se]=O[se]);var se=arguments.length-2;if(se===1)X.children=Z;else if(1<se){for(var be=Array(se),Ke=0;Ke<se;Ke++)be[Ke]=arguments[Ke+2];X.children=be}return fe(S.type,ie,X)},ae.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},ae.createElement=function(S,O,Z){var X,ie={},se=null;if(O!=null)for(X in O.key!==void 0&&(se=""+O.key),O)le.call(O,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ie[X]=O[X]);var be=arguments.length-2;if(be===1)ie.children=Z;else if(1<be){for(var Ke=Array(be),Ee=0;Ee<be;Ee++)Ke[Ee]=arguments[Ee+2];ie.children=Ke}if(S&&S.defaultProps)for(X in be=S.defaultProps,be)ie[X]===void 0&&(ie[X]=be[X]);return fe(S,se,ie)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:v,render:S}},ae.isValidElement=Ue,ae.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:te}},ae.memo=function(S,O){return{$$typeof:x,type:S,compare:O===void 0?null:O}},ae.startTransition=function(S){var O=_.T,Z={};_.T=Z;try{var X=S(),ie=_.S;ie!==null&&ie(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Q,de)}catch(se){de(se)}finally{O!==null&&Z.types!==null&&(O.types=Z.types),_.T=O}},ae.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},ae.use=function(S){return _.H.use(S)},ae.useActionState=function(S,O,Z){return _.H.useActionState(S,O,Z)},ae.useCallback=function(S,O){return _.H.useCallback(S,O)},ae.useContext=function(S){return _.H.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S,O){return _.H.useDeferredValue(S,O)},ae.useEffect=function(S,O){return _.H.useEffect(S,O)},ae.useEffectEvent=function(S){return _.H.useEffectEvent(S)},ae.useId=function(){return _.H.useId()},ae.useImperativeHandle=function(S,O,Z){return _.H.useImperativeHandle(S,O,Z)},ae.useInsertionEffect=function(S,O){return _.H.useInsertionEffect(S,O)},ae.useLayoutEffect=function(S,O){return _.H.useLayoutEffect(S,O)},ae.useMemo=function(S,O){return _.H.useMemo(S,O)},ae.useOptimistic=function(S,O){return _.H.useOptimistic(S,O)},ae.useReducer=function(S,O,Z){return _.H.useReducer(S,O,Z)},ae.useRef=function(S){return _.H.useRef(S)},ae.useState=function(S){return _.H.useState(S)},ae.useSyncExternalStore=function(S,O,Z){return _.H.useSyncExternalStore(S,O,Z)},ae.useTransition=function(){return _.H.useTransition()},ae.version="19.2.3",ae}var t0;function Bd(){return t0||(t0=1,Au.exports=hy()),Au.exports}var k=Bd();const tt=uy(k);var Cu={exports:{}},Pl={},ku={exports:{}},Mu={};var n0;function my(){return n0||(n0=1,(function(l){function o(D,$){var te=D.length;D.push($);e:for(;0<te;){var de=te-1>>>1,ye=D[de];if(0<h(ye,$))D[de]=$,D[te]=ye,te=de;else break e}}function u(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var $=D[0],te=D.pop();if(te!==$){D[0]=te;e:for(var de=0,ye=D.length,S=ye>>>1;de<S;){var O=2*(de+1)-1,Z=D[O],X=O+1,ie=D[X];if(0>h(Z,te))X<ye&&0>h(ie,Z)?(D[de]=ie,D[X]=te,de=X):(D[de]=Z,D[O]=te,de=O);else if(X<ye&&0>h(ie,te))D[de]=ie,D[X]=te,de=X;else break e}}return $}function h(D,$){var te=D.sortIndex-$.sortIndex;return te!==0?te:D.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var y=[],x=[],E=1,w=null,H=3,Y=!1,R=!1,U=!1,V=!1,K=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function J(D){for(var $=u(x);$!==null;){if($.callback===null)c(x);else if($.startTime<=D)c(x),$.sortIndex=$.expirationTime,o(y,$);else break;$=u(x)}}function I(D){if(U=!1,J(D),!R)if(u(y)!==null)R=!0,Q||(Q=!0,Me());else{var $=u(x);$!==null&&_t(I,$.startTime-D)}}var Q=!1,_=-1,le=5,fe=-1;function ue(){return V?!0:!(l.unstable_now()-fe<le)}function Ue(){if(V=!1,Q){var D=l.unstable_now();fe=D;var $=!0;try{e:{R=!1,U&&(U=!1,q(_),_=-1),Y=!0;var te=H;try{t:{for(J(D),w=u(y);w!==null&&!(w.expirationTime>D&&ue());){var de=w.callback;if(typeof de=="function"){w.callback=null,H=w.priorityLevel;var ye=de(w.expirationTime<=D);if(D=l.unstable_now(),typeof ye=="function"){w.callback=ye,J(D),$=!0;break t}w===u(y)&&c(y),J(D)}else c(y);w=u(y)}if(w!==null)$=!0;else{var S=u(x);S!==null&&_t(I,S.startTime-D),$=!1}}break e}finally{w=null,H=te,Y=!1}$=void 0}}finally{$?Me():Q=!1}}}var Me;if(typeof G=="function")Me=function(){G(Ue)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,ft=zt.port2;zt.port1.onmessage=Ue,Me=function(){ft.postMessage(null)}}else Me=function(){K(Ue,0)};function _t(D,$){_=K(function(){D(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(D){switch(H){case 1:case 2:case 3:var $=3;break;default:$=H}var te=H;H=$;try{return D()}finally{H=te}},l.unstable_requestPaint=function(){V=!0},l.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var te=H;H=D;try{return $()}finally{H=te}},l.unstable_scheduleCallback=function(D,$,te){var de=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?de+te:de):te=de,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,D={id:E++,callback:$,priorityLevel:D,startTime:te,expirationTime:ye,sortIndex:-1},te>de?(D.sortIndex=te,o(x,D),u(y)===null&&D===u(x)&&(U?(q(_),_=-1):U=!0,_t(I,te-de))):(D.sortIndex=ye,o(y,D),R||Y||(R=!0,Q||(Q=!0,Me()))),D},l.unstable_shouldYield=ue,l.unstable_wrapCallback=function(D){var $=H;return function(){var te=H;H=$;try{return D.apply(this,arguments)}finally{H=te}}}})(Mu)),Mu}var i0;function gy(){return i0||(i0=1,ku.exports=my()),ku.exports}var Ru={exports:{}},ot={};var a0;function py(){if(a0)return ot;a0=1;var l=Bd();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)x+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(y,x,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:y,containerInfo:x,implementation:E}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ot.createPortal=function(y,x){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return m(y,x,null,E)},ot.flushSync=function(y){var x=p.T,E=c.p;try{if(p.T=null,c.p=2,y)return y()}finally{p.T=x,c.p=E,c.d.f()}},ot.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},ot.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},ot.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var E=x.as,w=v(E,x.crossOrigin),H=typeof x.integrity=="string"?x.integrity:void 0,Y=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;E==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:H,fetchPriority:Y}):E==="script"&&c.d.X(y,{crossOrigin:w,integrity:H,fetchPriority:Y,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},ot.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var E=v(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},ot.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var E=x.as,w=v(E,x.crossOrigin);c.d.L(y,E,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},ot.preloadModule=function(y,x){if(typeof y=="string")if(x){var E=v(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},ot.requestFormReset=function(y){c.d.r(y)},ot.unstable_batchedUpdates=function(y,x){return y(x)},ot.useFormState=function(y,x,E){return p.H.useFormState(y,x,E)},ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},ot.version="19.2.3",ot}var l0;function xy(){if(l0)return Ru.exports;l0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Ru.exports=py(),Ru.exports}var r0;function by(){if(r0)return Pl;r0=1;var l=gy(),o=Bd(),u=xy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return y(r),e;if(s===i)return y(r),t;s=s.sibling}throw Error(c(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,H=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),G=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var zt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case K:return"Profiler";case V:return"StrictMode";case I:return"Suspense";case Q:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case G:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ft(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ft(e(t))}catch{}}return null}var _t=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},de=[],ye=-1;function S(e){return{current:e}}function O(e){0>ye||(e.current=de[ye],de[ye]=null,ye--)}function Z(e,t){ye++,de[ye]=e.current,e.current=t}var X=S(null),ie=S(null),se=S(null),be=S(null);function Ke(e,t){switch(Z(se,t),Z(ie,e),Z(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jg(t),e=Sg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(X),Z(X,e)}function Ee(){O(X),O(ie),O(se)}function fn(e){e.memoizedState!==null&&Z(be,e);var t=X.current,n=Sg(t,e.type);t!==n&&(Z(ie,e),Z(X,n))}function hn(e){ie.current===e&&(O(X),O(ie)),be.current===e&&(O(be),Ql._currentValue=te)}var Et,Fi;function Yt(e){if(Et===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Et=t&&t[1]||"",Fi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+Fi}var mn=!1;function uo(e,t){if(!e||mn)return"";mn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(M){var C=M}Reflect.construct(e,[],L)}else{try{L.call()}catch(M){C=M}e.call(L.prototype)}}else{try{throw Error()}catch(M){C=M}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(M){if(M&&C&&typeof M.stack=="string")return[M.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var b=d.split(`
`),A=g.split(`
`);for(r=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(i===b.length||r===A.length)for(i=b.length-1,r=A.length-1;1<=i&&0<=r&&b[i]!==A[r];)r--;for(;1<=i&&0<=r;i--,r--)if(b[i]!==A[r]){if(i!==1||r!==1)do if(i--,r--,0>r||b[i]!==A[r]){var B=`
`+b[i].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=i&&0<=r);break}}}finally{mn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yt(n):""}function Vx(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return uo(e.type,!1);case 11:return uo(e.type.render,!1);case 1:return uo(e.type,!0);case 31:return Yt("Activity");default:return""}}function Fd(e){try{var t="",n=null;do t+=Vx(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fo=Object.prototype.hasOwnProperty,ho=l.unstable_scheduleCallback,mo=l.unstable_cancelCallback,Yx=l.unstable_shouldYield,qx=l.unstable_requestPaint,Tt=l.unstable_now,Kx=l.unstable_getCurrentPriorityLevel,Pd=l.unstable_ImmediatePriority,Id=l.unstable_UserBlockingPriority,hr=l.unstable_NormalPriority,$x=l.unstable_LowPriority,ef=l.unstable_IdlePriority,Zx=l.log,Qx=l.unstable_setDisableYieldValue,ll=null,At=null;function Jn(e){if(typeof Zx=="function"&&Qx(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(ll,e)}catch{}}var Ct=Math.clz32?Math.clz32:Wx,Xx=Math.log,Jx=Math.LN2;function Wx(e){return e>>>=0,e===0?32:31-(Xx(e)/Jx|0)|0}var mr=256,gr=262144,pr=4194304;function Ei(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=Ei(i):(d&=g,d!==0?r=Ei(d):n||(n=g&~e,n!==0&&(r=Ei(n))))):(g=i&~s,g!==0?r=Ei(g):d!==0?r=Ei(d):n||(n=i&~e,n!==0&&(r=Ei(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(){var e=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Px(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-Ct(n),L=1<<B;g[B]=0,b[B]=-1;var C=A[B];if(C!==null)for(A[B]=null,B=0;B<C.length;B++){var M=C[B];M!==null&&(M.lane&=-536870913)}n&=~L}i!==0&&nf(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function nf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function af(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function lf(e,t){var n=t&-t;return n=(n&42)!==0?1:po(n),(n&(e.suspendedLanes|t))!==0?0:n}function po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function sf(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Wn=Math.random().toString(36).slice(2),it="__reactFiber$"+Wn,ht="__reactProps$"+Wn,Pi="__reactContainer$"+Wn,bo="__reactEvents$"+Wn,Ix="__reactListeners$"+Wn,eb="__reactHandles$"+Wn,of="__reactResources$"+Wn,ol="__reactMarker$"+Wn;function yo(e){delete e[it],delete e[ht],delete e[bo],delete e[Ix],delete e[eb]}function Ii(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pi]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cg(e);e!==null;){if(n=e[it])return n;e=Cg(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[it]||e[Pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ta(e){var t=e[of];return t||(t=e[of]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[ol]=!0}var cf=new Set,uf={};function Ti(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(uf[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var tb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),df={},ff={};function nb(e){return fo.call(ff,e)?!0:fo.call(df,e)?!1:tb.test(e)?ff[e]=!0:(df[e]=!0,!1)}function br(e,t,n){if(nb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ib(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){if(!e._valueTracker){var t=hf(e)?"checked":"value";e._valueTracker=ib(e,t,""+e[t])}}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ab=/[\n"\\]/g;function Kt(e){return e.replace(ab,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?So(e,d,qt(t)):n!=null?So(e,d,qt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+qt(g):e.removeAttribute("name")}function gf(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vo(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),vo(e)}function So(e,t,n){t==="number"&&vr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ia(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pf(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function xf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(_t(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),vo(e)}function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||lb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&bf(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&bf(e,s,t[s])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return sb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zn(){}var zo=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,ra=null;function vf(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ht]||null;if(!r)throw Error(c(90));jo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&mf(i)}break e;case"textarea":pf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ia(e,!!n.multiple,t,!1)}}}var Eo=!1;function jf(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var i=e(t);return i}finally{if(Eo=!1,(la!==null||ra!==null)&&(os(),la&&(t=la,e=ra,ra=la=null,vf(t),e)))for(t=0;t<e.length;t++)vf(e[t])}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ht]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(_n)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){To=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{To=!1}var Fn=null,Ao=null,Sr=null;function Sf(){if(Sr)return Sr;var e,t=Ao,n=t.length,i,r="value"in Fn?Fn.value:Fn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return Sr=r.slice(e,1<i?1-i:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function wf(){return!1}function mt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:wf,this.isPropagationStopped=wf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=mt(Ai),fl=w({},Ai,{view:0,detail:0}),ob=mt(fl),Co,ko,hl,Er=w({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(Co=e.screenX-hl.screenX,ko=e.screenY-hl.screenY):ko=Co=0,hl=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),zf=mt(Er),cb=w({},Er,{dataTransfer:0}),ub=mt(cb),db=w({},fl,{relatedTarget:0}),Mo=mt(db),fb=w({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),hb=mt(fb),mb=w({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gb=mt(mb),pb=w({},Ai,{data:0}),_f=mt(pb),xb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yb[e])?!!t[e]:!1}function Ro(){return vb}var jb=w({},fl,{key:function(e){if(e.key){var t=xb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sb=mt(jb),wb=w({},Er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=mt(wb),zb=w({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),_b=mt(zb),Eb=w({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tb=mt(Eb),Ab=w({},Er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cb=mt(Ab),kb=w({},Ai,{newState:0,oldState:0}),Mb=mt(kb),Rb=[9,13,27,32],Bo=_n&&"CompositionEvent"in window,ml=null;_n&&"documentMode"in document&&(ml=document.documentMode);var Bb=_n&&"TextEvent"in window&&!ml,Tf=_n&&(!Bo||ml&&8<ml&&11>=ml),Af=" ",Cf=!1;function kf(e,t){switch(e){case"keyup":return Rb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function Db(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(Cf=!0,Af);case"textInput":return e=t.data,e===Af&&Cf?null:e;default:return null}}function Ob(e,t){if(sa)return e==="compositionend"||!Bo&&kf(e,t)?(e=Sf(),Sr=Ao=Fn=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var Nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nb[e.type]:t==="textarea"}function Bf(e,t,n,i){la?ra?ra.push(i):ra=[i]:la=i,t=gs(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gl=null,pl=null;function Hb(e){gg(e,0)}function Tr(e){var t=cl(e);if(mf(t))return e}function Df(e,t){if(e==="change")return t}var Of=!1;if(_n){var Do;if(_n){var Oo="oninput"in document;if(!Oo){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Oo=typeof Nf.oninput=="function"}Do=Oo}else Do=!1;Of=Do&&(!document.documentMode||9<document.documentMode)}function Hf(){gl&&(gl.detachEvent("onpropertychange",Lf),pl=gl=null)}function Lf(e){if(e.propertyName==="value"&&Tr(pl)){var t=[];Bf(t,pl,e,_o(e)),jf(Hb,t)}}function Lb(e,t,n){e==="focusin"?(Hf(),gl=t,pl=n,gl.attachEvent("onpropertychange",Lf)):e==="focusout"&&Hf()}function Ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tr(pl)}function Gb(e,t){if(e==="click")return Tr(t)}function Vb(e,t){if(e==="input"||e==="change")return Tr(t)}function Yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Yb;function xl(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fo.call(t,r)||!kt(e[r],t[r]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,t){var n=Uf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vr(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qb=_n&&"documentMode"in document&&11>=document.documentMode,oa=null,Ho=null,bl=null,Lo=!1;function qf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||oa==null||oa!==vr(i)||(i=oa,"selectionStart"in i&&No(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&xl(bl,i)||(bl=i,i=gs(Ho,"onSelect"),0<i.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oa)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionrun:Ci("Transition","TransitionRun"),transitionstart:Ci("Transition","TransitionStart"),transitioncancel:Ci("Transition","TransitionCancel"),transitionend:Ci("Transition","TransitionEnd")},Uo={},Kf={};_n&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ki(e){if(Uo[e])return Uo[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Uo[e]=t[n];return e}var $f=ki("animationend"),Zf=ki("animationiteration"),Qf=ki("animationstart"),Kb=ki("transitionrun"),$b=ki("transitionstart"),Zb=ki("transitioncancel"),Xf=ki("transitionend"),Jf=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function rn(e,t){Jf.set(e,t),Ti(t,[e])}var Ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],ua=0,Vo=0;function Cr(){for(var e=ua,t=Vo=ua=0;t<e;){var n=$t[t];$t[t++]=null;var i=$t[t];$t[t++]=null;var r=$t[t];$t[t++]=null;var s=$t[t];if($t[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Wf(n,r,s)}}function kr(e,t,n,i){$t[ua++]=e,$t[ua++]=t,$t[ua++]=n,$t[ua++]=i,Vo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Yo(e,t,n,i){return kr(e,t,n,i),Mr(e)}function Mi(e,t){return kr(e,null,null,t),Mr(e)}function Wf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Mr(e){if(50<Gl)throw Gl=0,Fc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var da={};function Qb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new Qb(e,t,n,i)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function En(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ff(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rr(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")qo(e)&&(d=1);else if(typeof e=="string")d=P1(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Mt(31,n,t,r),e.elementType=fe,e.lanes=s,e;case U:return Ri(n.children,r,s,t);case V:d=8,r|=24;break;case K:return e=Mt(12,n,t,r|2),e.elementType=K,e.lanes=s,e;case I:return e=Mt(13,n,t,r),e.elementType=I,e.lanes=s,e;case Q:return e=Mt(19,n,t,r),e.elementType=Q,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:d=10;break e;case q:d=9;break e;case J:d=11;break e;case _:d=14;break e;case le:d=16,i=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Mt(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ri(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function Ko(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Pf(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function $o(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var If=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=If.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fd(t)},If.set(e,t),t)}return{value:e,source:t,stack:Fd(t)}}var fa=[],ha=0,Br=null,yl=0,Qt=[],Xt=0,Pn=null,gn=1,pn="";function Tn(e,t){fa[ha++]=yl,fa[ha++]=Br,Br=e,yl=t}function eh(e,t,n){Qt[Xt++]=gn,Qt[Xt++]=pn,Qt[Xt++]=Pn,Pn=e;var i=gn;e=pn;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,gn=1<<32-Ct(t)+r|n<<r|i,pn=s+e}else gn=1<<s|n<<r|i,pn=e}function Zo(e){e.return!==null&&(Tn(e,1),eh(e,1,0))}function Qo(e){for(;e===Br;)Br=fa[--ha],fa[ha]=null,yl=fa[--ha],fa[ha]=null;for(;e===Pn;)Pn=Qt[--Xt],Qt[Xt]=null,pn=Qt[--Xt],Qt[Xt]=null,gn=Qt[--Xt],Qt[Xt]=null}function th(e,t){Qt[Xt++]=gn,Qt[Xt++]=pn,Qt[Xt++]=Pn,gn=t.id,pn=t.overflow,Pn=e}var at=null,Re=null,xe=!1,In=null,Jt=!1,Xo=Error(c(519));function ei(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(Zt(t,e)),Xo}function nh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[ht]=i,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)me(Yl[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),gf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),xf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||yg(t.textContent,n)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=zn),t=!0):t=!1,t||ei(e,!0)}function ih(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:at=at.return}}function ma(e){if(e!==at)return!1;if(!xe)return ih(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fu(e.type,e.memoizedProps)),n=!n),n&&Re&&ei(e),ih(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=Ag(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=Ag(e)}else t===27?(t=Re,mi(e.type)?(e=xu,xu=null,Re=e):Re=t):Re=at?Ft(e.stateNode.nextSibling):null;return!0}function Bi(){Re=at=null,xe=!1}function Jo(){var e=In;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),In=null),e}function vl(e){In===null?In=[e]:In.push(e)}var Wo=S(null),Di=null,An=null;function ti(e,t,n){Z(Wo,t._currentValue),t._currentValue=n}function Cn(e){e._currentValue=Wo.current,O(Wo)}function Fo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var b=0;b<t.length;b++)if(g.context===t[b]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Fo(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Fo(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ga(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var g=r.type;kt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===be.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}r=r.return}e!==null&&Po(t,e,n,i),t.flags|=262144}function Dr(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){Di=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return ah(Di,e)}function Or(e,t){return Di===null&&Oi(e),ah(e,t)}function ah(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var Xb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Jb=l.unstable_scheduleCallback,Wb=l.unstable_NormalPriority,$e={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Io(){return{controller:new Xb,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&Jb(Wb,function(){e.controller.abort()})}var Sl=null,ec=0,pa=0,xa=null;function Fb(e,t){if(Sl===null){var n=Sl=[];ec=0,pa=iu(),xa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ec++,t.then(lh,lh),t}function lh(){if(--ec===0&&Sl!==null){xa!==null&&(xa.status="fulfilled");var e=Sl;Sl=null,pa=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var rh=D.S;D.S=function(e,t){qm=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fb(e,t),rh!==null&&rh(e,t)};var Ni=S(null);function tc(){var e=Ni.current;return e!==null?e:ke.pooledCache}function Nr(e,t){t===null?Z(Ni,Ni.current):Z(Ni,t.pool)}function sh(){var e=tc();return e===null?null:{parent:$e._currentValue,pool:e}}var ba=Error(c(460)),nc=Error(c(474)),Hr=Error(c(542)),Lr={then:function(){}};function oh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ch(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zn,zn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e;default:if(typeof t.status=="string")t.then(zn,zn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e}throw Li=t,ba}}function Hi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Li=n,ba):n}}var Li=null;function uh(){if(Li===null)throw Error(c(459));var e=Li;return Li=null,e}function dh(e){if(e===ba||e===Hr)throw Error(c(483))}var ya=null,wl=0;function Ur(e){var t=wl;return wl+=1,ya===null&&(ya=[]),ch(ya,e,t)}function zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gr(e,t){throw t.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fh(e){function t(z,j){if(e){var T=z.deletions;T===null?(z.deletions=[j],z.flags|=16):T.push(j)}}function n(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function i(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function r(z,j){return z=En(z,j),z.index=0,z.sibling=null,z}function s(z,j,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<j?(z.flags|=67108866,j):T):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,j,T,N){return j===null||j.tag!==6?(j=Ko(T,z.mode,N),j.return=z,j):(j=r(j,T),j.return=z,j)}function b(z,j,T,N){var ee=T.type;return ee===U?B(z,j,T.props.children,N,T.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===le&&Hi(ee)===j.type)?(j=r(j,T.props),zl(j,T),j.return=z,j):(j=Rr(T.type,T.key,T.props,null,z.mode,N),zl(j,T),j.return=z,j)}function A(z,j,T,N){return j===null||j.tag!==4||j.stateNode.containerInfo!==T.containerInfo||j.stateNode.implementation!==T.implementation?(j=$o(T,z.mode,N),j.return=z,j):(j=r(j,T.children||[]),j.return=z,j)}function B(z,j,T,N,ee){return j===null||j.tag!==7?(j=Ri(T,z.mode,N,ee),j.return=z,j):(j=r(j,T),j.return=z,j)}function L(z,j,T){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ko(""+j,z.mode,T),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:return T=Rr(j.type,j.key,j.props,null,z.mode,T),zl(T,j),T.return=z,T;case R:return j=$o(j,z.mode,T),j.return=z,j;case le:return j=Hi(j),L(z,j,T)}if(_t(j)||Me(j))return j=Ri(j,z.mode,T,null),j.return=z,j;if(typeof j.then=="function")return L(z,Ur(j),T);if(j.$$typeof===G)return L(z,Or(z,j),T);Gr(z,j)}return null}function C(z,j,T,N){var ee=j!==null?j.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ee!==null?null:g(z,j,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Y:return T.key===ee?b(z,j,T,N):null;case R:return T.key===ee?A(z,j,T,N):null;case le:return T=Hi(T),C(z,j,T,N)}if(_t(T)||Me(T))return ee!==null?null:B(z,j,T,N,null);if(typeof T.then=="function")return C(z,j,Ur(T),N);if(T.$$typeof===G)return C(z,j,Or(z,T),N);Gr(z,T)}return null}function M(z,j,T,N,ee){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return z=z.get(T)||null,g(j,z,""+N,ee);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:return z=z.get(N.key===null?T:N.key)||null,b(j,z,N,ee);case R:return z=z.get(N.key===null?T:N.key)||null,A(j,z,N,ee);case le:return N=Hi(N),M(z,j,T,N,ee)}if(_t(N)||Me(N))return z=z.get(T)||null,B(j,z,N,ee,null);if(typeof N.then=="function")return M(z,j,T,Ur(N),ee);if(N.$$typeof===G)return M(z,j,T,Or(j,N),ee);Gr(j,N)}return null}function W(z,j,T,N){for(var ee=null,ve=null,F=j,oe=j=0,pe=null;F!==null&&oe<T.length;oe++){F.index>oe?(pe=F,F=null):pe=F.sibling;var je=C(z,F,T[oe],N);if(je===null){F===null&&(F=pe);break}e&&F&&je.alternate===null&&t(z,F),j=s(je,j,oe),ve===null?ee=je:ve.sibling=je,ve=je,F=pe}if(oe===T.length)return n(z,F),xe&&Tn(z,oe),ee;if(F===null){for(;oe<T.length;oe++)F=L(z,T[oe],N),F!==null&&(j=s(F,j,oe),ve===null?ee=F:ve.sibling=F,ve=F);return xe&&Tn(z,oe),ee}for(F=i(F);oe<T.length;oe++)pe=M(F,z,oe,T[oe],N),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?oe:pe.key),j=s(pe,j,oe),ve===null?ee=pe:ve.sibling=pe,ve=pe);return e&&F.forEach(function(yi){return t(z,yi)}),xe&&Tn(z,oe),ee}function ne(z,j,T,N){if(T==null)throw Error(c(151));for(var ee=null,ve=null,F=j,oe=j=0,pe=null,je=T.next();F!==null&&!je.done;oe++,je=T.next()){F.index>oe?(pe=F,F=null):pe=F.sibling;var yi=C(z,F,je.value,N);if(yi===null){F===null&&(F=pe);break}e&&F&&yi.alternate===null&&t(z,F),j=s(yi,j,oe),ve===null?ee=yi:ve.sibling=yi,ve=yi,F=pe}if(je.done)return n(z,F),xe&&Tn(z,oe),ee;if(F===null){for(;!je.done;oe++,je=T.next())je=L(z,je.value,N),je!==null&&(j=s(je,j,oe),ve===null?ee=je:ve.sibling=je,ve=je);return xe&&Tn(z,oe),ee}for(F=i(F);!je.done;oe++,je=T.next())je=M(F,z,oe,je.value,N),je!==null&&(e&&je.alternate!==null&&F.delete(je.key===null?oe:je.key),j=s(je,j,oe),ve===null?ee=je:ve.sibling=je,ve=je);return e&&F.forEach(function(cy){return t(z,cy)}),xe&&Tn(z,oe),ee}function Ce(z,j,T,N){if(typeof T=="object"&&T!==null&&T.type===U&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Y:e:{for(var ee=T.key;j!==null;){if(j.key===ee){if(ee=T.type,ee===U){if(j.tag===7){n(z,j.sibling),N=r(j,T.props.children),N.return=z,z=N;break e}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===le&&Hi(ee)===j.type){n(z,j.sibling),N=r(j,T.props),zl(N,T),N.return=z,z=N;break e}n(z,j);break}else t(z,j);j=j.sibling}T.type===U?(N=Ri(T.props.children,z.mode,N,T.key),N.return=z,z=N):(N=Rr(T.type,T.key,T.props,null,z.mode,N),zl(N,T),N.return=z,z=N)}return d(z);case R:e:{for(ee=T.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===T.containerInfo&&j.stateNode.implementation===T.implementation){n(z,j.sibling),N=r(j,T.children||[]),N.return=z,z=N;break e}else{n(z,j);break}else t(z,j);j=j.sibling}N=$o(T,z.mode,N),N.return=z,z=N}return d(z);case le:return T=Hi(T),Ce(z,j,T,N)}if(_t(T))return W(z,j,T,N);if(Me(T)){if(ee=Me(T),typeof ee!="function")throw Error(c(150));return T=ee.call(T),ne(z,j,T,N)}if(typeof T.then=="function")return Ce(z,j,Ur(T),N);if(T.$$typeof===G)return Ce(z,j,Or(z,T),N);Gr(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,j!==null&&j.tag===6?(n(z,j.sibling),N=r(j,T),N.return=z,z=N):(n(z,j),N=Ko(T,z.mode,N),N.return=z,z=N),d(z)):n(z,j)}return function(z,j,T,N){try{wl=0;var ee=Ce(z,j,T,N);return ya=null,ee}catch(F){if(F===ba||F===Hr)throw F;var ve=Mt(29,F,null,z.mode);return ve.lanes=N,ve.return=z,ve}}}var Ui=fh(!0),hh=fh(!1),ni=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Mr(e),Wf(e,null,n),t}return kr(e,i,t,n),Mr(e)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,af(e,n)}}function lc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rc=!1;function El(){if(rc){var e=xa;if(e!==null)throw e}}function Tl(e,t,n,i){rc=!1;var r=e.updateQueue;ni=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var b=g,A=b.next;b.next=null,d===null?s=A:d.next=A,d=b;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==d&&(g===null?B.firstBaseUpdate=A:g.next=A,B.lastBaseUpdate=b))}if(s!==null){var L=r.baseState;d=0,B=A=b=null,g=s;do{var C=g.lane&-536870913,M=C!==g.lane;if(M?(ge&C)===C:(i&C)===C){C!==0&&C===pa&&(rc=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var W=e,ne=g;C=t;var Ce=n;switch(ne.tag){case 1:if(W=ne.payload,typeof W=="function"){L=W.call(Ce,L,C);break e}L=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ne.payload,C=typeof W=="function"?W.call(Ce,L,C):W,C==null)break e;L=w({},L,C);break e;case 2:ni=!0}}C=g.callback,C!==null&&(e.flags|=64,M&&(e.flags|=8192),M=r.callbacks,M===null?r.callbacks=[C]:M.push(C))}else M={lane:C,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(A=B=M,b=L):B=B.next=M,d|=C;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;M=g,g=M.next,M.next=null,r.lastBaseUpdate=M,r.shared.pending=null}}while(!0);B===null&&(b=L),r.baseState=b,r.firstBaseUpdate=A,r.lastBaseUpdate=B,s===null&&(r.shared.lanes=0),ci|=d,e.lanes=d,e.memoizedState=L}}function mh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function gh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mh(n[e],t)}var va=S(null),Vr=S(0);function ph(e,t){e=Ln,Z(Vr,e),Z(va,t),Ln=e|t.baseLanes}function sc(){Z(Vr,Ln),Z(va,va.current)}function oc(){Ln=Vr.current,O(va),O(Vr)}var Rt=S(null),Wt=null;function li(e){var t=e.alternate;Z(Ye,Ye.current&1),Z(Rt,e),Wt===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(Wt=e)}function cc(e){Z(Ye,Ye.current),Z(Rt,e),Wt===null&&(Wt=e)}function xh(e){e.tag===22?(Z(Ye,Ye.current),Z(Rt,e),Wt===null&&(Wt=e)):ri()}function ri(){Z(Ye,Ye.current),Z(Rt,Rt.current)}function Bt(e){O(Rt),Wt===e&&(Wt=null),O(Ye)}var Ye=S(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gu(n)||pu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,re=null,Te=null,Ze=null,qr=!1,ja=!1,Gi=!1,Kr=0,Al=0,Sa=null,Ib=0;function Ge(){throw Error(c(321))}function uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function dc(e,t,n,i,r,s){return kn=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?em:Ec,Gi=!1,s=n(i,r),Gi=!1,ja&&(s=yh(t,n,i,r)),bh(e),s}function bh(e){D.H=Ml;var t=Te!==null&&Te.next!==null;if(kn=0,Ze=Te=re=null,qr=!1,Al=0,Sa=null,t)throw Error(c(300));e===null||Qe||(e=e.dependencies,e!==null&&Dr(e)&&(Qe=!0))}function yh(e,t,n,i){re=e;var r=0;do{if(ja&&(Sa=null),Al=0,ja=!1,25<=r)throw Error(c(301));if(r+=1,Ze=Te=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=tm,s=t(n,i)}while(ja);return s}function e1(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Cl(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(re.flags|=1024),t}function fc(){var e=Kr!==0;return Kr=0,e}function hc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mc(e){if(qr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qr=!1}kn=0,Ze=Te=re=null,ja=!1,Al=Kr=0,Sa=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?re.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function qe(){if(Te===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ze===null?re.memoizedState:Ze.next;if(t!==null)Ze=t,Te=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ze===null?re.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function $r(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var t=Al;return Al+=1,Sa===null&&(Sa=[]),e=ch(Sa,e,t),t=re,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?em:Ec),e}function Zr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===G)return lt(e)}throw Error(c(438,String(e)))}function gc(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=$r(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ue;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function Qr(e){var t=qe();return pc(t,Te,e)}function pc(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,b=null,A=t,B=!1;do{var L=A.lane&-536870913;if(L!==A.lane?(ge&L)===L:(kn&L)===L){var C=A.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),L===pa&&(B=!0);else if((kn&C)===C){A=A.next,C===pa&&(B=!0);continue}else L={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(g=b=L,d=s):b=b.next=L,re.lanes|=C,ci|=C;L=A.action,Gi&&n(s,L),s=A.hasEagerState?A.eagerState:n(s,L)}else C={lane:L,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(g=b=C,d=s):b=b.next=C,re.lanes|=L,ci|=L;A=A.next}while(A!==null&&A!==t);if(b===null?d=s:b.next=g,!kt(s,e.memoizedState)&&(Qe=!0,B&&(n=xa,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=b,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xc(e){var t=qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);kt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function vh(e,t,n){var i=re,r=qe(),s=xe;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!kt((Te||r).memoizedState,n);if(d&&(r.memoizedState=n,Qe=!0),r=r.queue,vc(wh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,wa(9,{destroy:void 0},Sh.bind(null,i,r,n,t),null),ke===null)throw Error(c(349));s||(kn&127)!==0||jh(i,t,n)}return n}function jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=$r(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sh(e,t,n,i){t.value=n,t.getSnapshot=i,zh(t)&&_h(e)}function wh(e,t,n){return n(function(){zh(t)&&_h(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function _h(e){var t=Mi(e,2);t!==null&&yt(t,e,2)}function bc(e){var t=ct();if(typeof e=="function"){var n=e;if(e=n(),Gi){Jn(!0);try{n()}finally{Jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function Eh(e,t,n,i){return e.baseState=n,pc(e,Te,typeof i=="function"?i:Mn)}function t1(e,t,n,i,r){if(Wr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};D.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Th(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Th(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=D.T,d={};D.T=d;try{var g=n(r,i),b=D.S;b!==null&&b(d,g),Ah(e,t,g)}catch(A){yc(e,t,A)}finally{s!==null&&d.types!==null&&(s.types=d.types),D.T=s}}else try{s=n(r,i),Ah(e,t,s)}catch(A){yc(e,t,A)}}function Ah(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ch(e,t,i)},function(i){return yc(e,t,i)}):Ch(e,t,n)}function Ch(e,t,n){t.status="fulfilled",t.value=n,kh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Th(e,n)))}function yc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,kh(t),t=t.next;while(t!==i)}e.action=null}function kh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Mh(e,t){return t}function Rh(e,t){if(xe){var n=ke.formState;if(n!==null){e:{var i=re;if(xe){if(Re){t:{for(var r=Re,s=Jt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Ft(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Re=Ft(r.nextSibling),i=r.data==="F!";break e}}ei(i)}i=!1}i&&(t=n[0])}}return n=ct(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mh,lastRenderedState:t},n.queue=i,n=Fh.bind(null,re,i),i.dispatch=n,i=bc(!1),s=_c.bind(null,re,!1,i.queue),i=ct(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=t1.bind(null,re,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Bh(e){var t=qe();return Dh(t,Te,e)}function Dh(e,t,n){if(t=pc(e,t,Mh)[0],e=Qr(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Cl(t)}catch(d){throw d===ba?Hr:d}else i=t;t=qe();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(re.flags|=2048,wa(9,{destroy:void 0},n1.bind(null,r,n),null)),[i,s,e]}function n1(e,t){e.action=t}function Oh(e){var t=qe(),n=Te;if(n!==null)return Dh(t,n,e);qe(),t=t.memoizedState,n=qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=$r(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nh(){return qe().memoizedState}function Xr(e,t,n,i){var r=ct();re.flags|=e,r.memoizedState=wa(1|t,{destroy:void 0},n,i===void 0?null:i)}function Jr(e,t,n,i){var r=qe();i=i===void 0?null:i;var s=r.memoizedState.inst;Te!==null&&i!==null&&uc(i,Te.memoizedState.deps)?r.memoizedState=wa(t,s,n,i):(re.flags|=e,r.memoizedState=wa(1|t,s,n,i))}function Hh(e,t){Xr(8390656,8,e,t)}function vc(e,t){Jr(2048,8,e,t)}function i1(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=$r(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lh(e){var t=qe().memoizedState;return i1({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Uh(e,t){return Jr(4,2,e,t)}function Gh(e,t){return Jr(4,4,e,t)}function Vh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yh(e,t,n){n=n!=null?n.concat([e]):null,Jr(4,4,Vh.bind(null,t,e),n)}function jc(){}function qh(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&uc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Kh(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&uc(t,i[1]))return i[0];if(i=e(),Gi){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[i,t],i}function Sc(e,t,n){return n===void 0||(kn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$m(),re.lanes|=e,ci|=e,n)}function $h(e,t,n,i){return kt(n,t)?n:va.current!==null?(e=Sc(e,n,i),kt(e,t)||(Qe=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(ge&261930)===0?(Qe=!0,e.memoizedState=n):(e=$m(),re.lanes|=e,ci|=e,t)}function Zh(e,t,n,i,r){var s=$.p;$.p=s!==0&&8>s?s:8;var d=D.T,g={};D.T=g,_c(e,!1,t,n);try{var b=r(),A=D.S;if(A!==null&&A(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var B=Pb(b,i);kl(e,t,B,Nt(e))}else kl(e,t,i,Nt(e))}catch(L){kl(e,t,{then:function(){},status:"rejected",reason:L},Nt())}finally{$.p=s,d!==null&&g.types!==null&&(d.types=g.types),D.T=d}}function a1(){}function wc(e,t,n,i){if(e.tag!==5)throw Error(c(476));var r=Qh(e).queue;Zh(e,r,t,te,n===null?a1:function(){return Xh(e),n(i)})}function Qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xh(e){var t=Qh(e);t.next===null&&(t=e.alternate.memoizedState),kl(e,t.next.queue,{},Nt())}function zc(){return lt(Ql)}function Jh(){return qe().memoizedState}function Wh(){return qe().memoizedState}function l1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=ii(n);var i=ai(t,e,n);i!==null&&(yt(i,t,n),_l(i,t,n)),t={cache:Io()},e.payload=t;return}t=t.return}}function r1(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Wr(e)?Ph(t,n):(n=Yo(e,t,n,i),n!==null&&(yt(n,e,i),Ih(n,t,i)))}function Fh(e,t,n){var i=Nt();kl(e,t,n,i)}function kl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wr(e))Ph(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,kt(g,d))return kr(e,t,r,0),ke===null&&Cr(),!1}catch{}if(n=Yo(e,t,r,i),n!==null)return yt(n,e,i),Ih(n,t,i),!0}return!1}function _c(e,t,n,i){if(i={lane:2,revertLane:iu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Wr(e)){if(t)throw Error(c(479))}else t=Yo(e,n,i,2),t!==null&&yt(t,e,2)}function Wr(e){var t=e.alternate;return e===re||t!==null&&t===re}function Ph(e,t){ja=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ih(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,af(e,n)}}var Ml={readContext:lt,use:Zr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Ml.useEffectEvent=Ge;var em={readContext:lt,use:Zr,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Hh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xr(4194308,4,Vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var n=ct();t=t===void 0?null:t;var i=e();if(Gi){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ct();if(n!==void 0){var r=n(t);if(Gi){Jn(!0);try{n(t)}finally{Jn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=r1.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=bc(e);var t=e.queue,n=Fh.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:jc,useDeferredValue:function(e,t){var n=ct();return Sc(n,e,t)},useTransition:function(){var e=bc(!1);return e=Zh.bind(null,re,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,r=ct();if(xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ke===null)throw Error(c(349));(ge&127)!==0||jh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Hh(wh.bind(null,i,s,e),[e]),i.flags|=2048,wa(9,{destroy:void 0},Sh.bind(null,i,s,n,t),null),n},useId:function(){var e=ct(),t=ke.identifierPrefix;if(xe){var n=pn,i=gn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ib++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zc,useFormState:Rh,useActionState:Rh,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:gc,useCacheRefresh:function(){return ct().memoizedState=l1.bind(null,re)},useEffectEvent:function(e){var t=ct(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ec={readContext:lt,use:Zr,useCallback:qh,useContext:lt,useEffect:vc,useImperativeHandle:Yh,useInsertionEffect:Uh,useLayoutEffect:Gh,useMemo:Kh,useReducer:Qr,useRef:Nh,useState:function(){return Qr(Mn)},useDebugValue:jc,useDeferredValue:function(e,t){var n=qe();return $h(n,Te.memoizedState,e,t)},useTransition:function(){var e=Qr(Mn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:vh,useId:Jh,useHostTransitionStatus:zc,useFormState:Bh,useActionState:Bh,useOptimistic:function(e,t){var n=qe();return Eh(n,Te,e,t)},useMemoCache:gc,useCacheRefresh:Wh};Ec.useEffectEvent=Lh;var tm={readContext:lt,use:Zr,useCallback:qh,useContext:lt,useEffect:vc,useImperativeHandle:Yh,useInsertionEffect:Uh,useLayoutEffect:Gh,useMemo:Kh,useReducer:xc,useRef:Nh,useState:function(){return xc(Mn)},useDebugValue:jc,useDeferredValue:function(e,t){var n=qe();return Te===null?Sc(n,e,t):$h(n,Te.memoizedState,e,t)},useTransition:function(){var e=xc(Mn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:vh,useId:Jh,useHostTransitionStatus:zc,useFormState:Oh,useActionState:Oh,useOptimistic:function(e,t){var n=qe();return Te!==null?Eh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:gc,useCacheRefresh:Wh};tm.useEffectEvent=Lh;function Tc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ac={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ii(i);r.payload=t,n!=null&&(r.callback=n),t=ai(e,r,i),t!==null&&(yt(t,e,i),_l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ii(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ai(e,r,i),t!==null&&(yt(t,e,i),_l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=ii(n);i.tag=2,t!=null&&(i.callback=t),t=ai(e,i,n),t!==null&&(yt(t,e,n),_l(t,e,n))}};function nm(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!xl(n,i)||!xl(r,s):!0}function im(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function am(e){Ar(e)}function lm(e){console.error(e)}function rm(e){Ar(e)}function Fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Cc(e,t,n){return n=ii(n),n.tag=3,n.payload={element:null},n.callback=function(){Fr(e,t)},n}function om(e){return e=ii(e),e.tag=3,e}function cm(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){sm(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){sm(t,n,i),typeof r!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function s1(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ga(t,n,r,!0),n=Rt.current,n!==null){switch(n.tag){case 31:case 13:return Wt===null?cs():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),eu(e,i,r)),!1;case 22:return n.flags|=65536,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),eu(e,i,r)),!1}throw Error(c(435,n.tag))}return eu(e,i,r),cs(),!1}if(xe)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Xo&&(e=Error(c(422),{cause:i}),vl(Zt(e,n)))):(i!==Xo&&(t=Error(c(423),{cause:i}),vl(Zt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Zt(i,n),r=Cc(e.stateNode,i,r),lc(e,r),Ve!==4&&(Ve=2)),!1;var s=Error(c(520),{cause:i});if(s=Zt(s,n),Ul===null?Ul=[s]:Ul.push(s),Ve!==4&&(Ve=2),t===null)return!0;i=Zt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Cc(n.stateNode,i,e),lc(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ui===null||!ui.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=om(r),cm(r,e,n,i),lc(n,r),!1}n=n.return}while(n!==null);return!1}var kc=Error(c(461)),Qe=!1;function rt(e,t,n,i){t.child=e===null?hh(t,null,n,i):Ui(t,e.child,n,i)}function um(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Oi(t),i=dc(e,t,n,d,s,r),g=fc(),e!==null&&!Qe?(hc(e,t,r),Rn(e,t,r)):(xe&&g&&Zo(t),t.flags|=1,rt(e,t,i,r),t.child)}function dm(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!qo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,fm(e,t,s,i,r)):(e=Rr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Lc(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(d,i)&&e.ref===t.ref)return Rn(e,t,r)}return t.flags|=1,e=En(s,i),e.ref=t.ref,e.return=t,t.child=e}function fm(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(xl(s,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=s,Lc(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Rn(e,t,r)}return Mc(e,t,n,i,r)}function hm(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return mm(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nr(t,s!==null?s.cachePool:null),s!==null?ph(t,s):sc(),xh(t);else return i=t.lanes=536870912,mm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Nr(t,s.cachePool),ph(t,s),ri(),t.memoizedState=null):(e!==null&&Nr(t,null),sc(),ri());return rt(e,t,r,n),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mm(e,t,n,i,r){var s=tc();return s=s===null?null:{parent:$e._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Nr(t,null),sc(),xh(t),e!==null&&ga(e,t,i,!0),t.childLanes=r,null}function Pr(e,t){return t=es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gm(e,t,n){return Ui(t,e.child,null,n),e=Pr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function o1(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(i.mode==="hidden")return e=Pr(t,i),t.lanes=536870912,Rl(null,e);if(cc(t),(e=Re)?(e=Tg(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Pf(e),n.return=t,t.child=n,at=t,Re=null)):e=null,e===null)throw ei(t);return t.lanes=536870912,null}return Pr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(cc(t),r)if(t.flags&256)t.flags&=-257,t=gm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qe||ga(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(i=ke,i!==null&&(d=lf(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,Mi(e,d),yt(i,e,d),kc;cs(),t=gm(e,t,n)}else e=s.treeContext,Re=Ft(d.nextSibling),at=t,xe=!0,In=null,Jt=!1,e!==null&&th(t,e),t=Pr(t,i),t.flags|=4096;return t}return e=En(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ir(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mc(e,t,n,i,r){return Oi(t),n=dc(e,t,n,i,void 0,r),i=fc(),e!==null&&!Qe?(hc(e,t,r),Rn(e,t,r)):(xe&&i&&Zo(t),t.flags|=1,rt(e,t,n,r),t.child)}function pm(e,t,n,i,r,s){return Oi(t),t.updateQueue=null,n=yh(t,i,n,r),bh(e),i=fc(),e!==null&&!Qe?(hc(e,t,s),Rn(e,t,s)):(xe&&i&&Zo(t),t.flags|=1,rt(e,t,n,s),t.child)}function xm(e,t,n,i,r){if(Oi(t),t.stateNode===null){var s=da,d=n.contextType;typeof d=="object"&&d!==null&&(s=lt(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ac,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ic(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?lt(d):da,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Tc(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Ac.enqueueReplaceState(s,s.state,null),Tl(t,i,s,r),El(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,b=Vi(n,g);s.props=b;var A=s.context,B=n.contextType;d=da,typeof B=="object"&&B!==null&&(d=lt(B));var L=n.getDerivedStateFromProps;B=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||A!==d)&&im(t,s,i,d),ni=!1;var C=t.memoizedState;s.state=C,Tl(t,i,s,r),El(),A=t.memoizedState,g||C!==A||ni?(typeof L=="function"&&(Tc(t,n,L,i),A=t.memoizedState),(b=ni||nm(t,n,b,i,C,A,d))?(B||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=A),s.props=i,s.state=A,s.context=d,i=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ac(e,t),d=t.memoizedProps,B=Vi(n,d),s.props=B,L=t.pendingProps,C=s.context,A=n.contextType,b=da,typeof A=="object"&&A!==null&&(b=lt(A)),g=n.getDerivedStateFromProps,(A=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==L||C!==b)&&im(t,s,i,b),ni=!1,C=t.memoizedState,s.state=C,Tl(t,i,s,r),El();var M=t.memoizedState;d!==L||C!==M||ni||e!==null&&e.dependencies!==null&&Dr(e.dependencies)?(typeof g=="function"&&(Tc(t,n,g,i),M=t.memoizedState),(B=ni||nm(t,n,B,i,C,M,b)||e!==null&&e.dependencies!==null&&Dr(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,M,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,M,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=M),s.props=i,s.state=M,s.context=b,i=B):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Ir(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ui(t,e.child,null,r),t.child=Ui(t,null,n,r)):rt(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Rn(e,t,r),e}function bm(e,t,n,i){return Bi(),t.flags|=256,rt(e,t,n,i),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(e){return{baseLanes:e,cachePool:sh()}}function Dc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ot),e}function ym(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?li(t):ri(),(e=Re)?(e=Tg(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=Pf(e),n.return=t,t.child=n,at=t,Re=null)):e=null,e===null)throw ei(t);return pu(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(ri(),r=t.mode,g=es({mode:"hidden",children:g},r),i=Ri(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Bc(n),i.childLanes=Dc(e,d,n),t.memoizedState=Rc,Rl(null,i)):(li(t),Oc(t,g))}var b=e.memoizedState;if(b!==null&&(g=b.dehydrated,g!==null)){if(s)t.flags&256?(li(t),t.flags&=-257,t=Nc(e,t,n)):t.memoizedState!==null?(ri(),t.child=e.child,t.flags|=128,t=null):(ri(),g=i.fallback,r=t.mode,i=es({mode:"visible",children:i.children},r),g=Ri(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Ui(t,e.child,null,n),i=t.child,i.memoizedState=Bc(n),i.childLanes=Dc(e,d,n),t.memoizedState=Rc,t=Rl(null,i));else if(li(t),pu(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var A=d.dgst;d=A,i=Error(c(419)),i.stack="",i.digest=d,vl({value:i,source:null,stack:null}),t=Nc(e,t,n)}else if(Qe||ga(e,t,n,!1),d=(n&e.childLanes)!==0,Qe||d){if(d=ke,d!==null&&(i=lf(d,n),i!==0&&i!==b.retryLane))throw b.retryLane=i,Mi(e,i),yt(d,e,i),kc;gu(g)||cs(),t=Nc(e,t,n)}else gu(g)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Ft(g.nextSibling),at=t,xe=!0,In=null,Jt=!1,e!==null&&th(t,e),t=Oc(t,i.children),t.flags|=4096);return t}return r?(ri(),g=i.fallback,r=t.mode,b=e.child,A=b.sibling,i=En(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,A!==null?g=En(A,g):(g=Ri(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Rl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Bc(n):(r=g.cachePool,r!==null?(b=$e._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=sh(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=Dc(e,d,n),t.memoizedState=Rc,Rl(e.child,i)):(li(t),n=e.child,e=n.sibling,n=En(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function es(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Nc(e,t,n){return Ui(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Fo(e.return,t,n)}function Hc(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function jm(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Ye.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,Z(Ye,d),rt(e,t,i,n),i=xe?yl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,n,t);else if(e.tag===19)vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hc(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hc(t,!0,n,null,s,i);break;case"together":Hc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ci|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Dr(e)))}function c1(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),ti(t,$e,e.memoizedState.cache),Bi();break;case 27:case 5:fn(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:ti(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(li(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ym(e,t,n):(li(t),e=Rn(e,t,n),e!==null?e.sibling:null);li(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ga(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return jm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(Ye,Ye.current),i)break;return null;case 22:return t.lanes=0,hm(e,t,n,t.pendingProps);case 24:ti(t,$e,e.memoizedState.cache)}return Rn(e,t,n)}function Sm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Lc(e,n)&&(t.flags&128)===0)return Qe=!1,c1(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,xe&&(t.flags&1048576)!==0&&eh(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Hi(t.elementType),t.type=e,typeof e=="function")qo(e)?(i=Vi(e,i),t.tag=1,t=xm(null,t,e,i,n)):(t.tag=0,t=Mc(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===J){t.tag=11,t=um(null,t,e,i,n);break e}else if(r===_){t.tag=14,t=dm(null,t,e,i,n);break e}}throw t=ft(e)||e,Error(c(306,t,""))}}return t;case 0:return Mc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Vi(i,t.pendingProps),xm(e,t,i,r,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ac(e,t),Tl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,ti(t,$e,i),i!==s.cache&&Po(t,[$e],n,!0),El(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=bm(e,t,i,n);break e}else if(i!==r){r=Zt(Error(c(424)),t),vl(r),t=bm(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Ft(e.firstChild),at=t,xe=!0,In=null,Jt=!0,n=hh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),i===r){t=Rn(e,t,n);break e}rt(e,t,i,n)}t=t.child}return t;case 26:return Ir(e,t),e===null?(n=Bg(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,i=ps(se.current).createElement(n),i[it]=t,i[ht]=e,st(i,n,e),Pe(i),t.stateNode=i):t.memoizedState=Bg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fn(t),e===null&&xe&&(i=t.stateNode=kg(t.type,t.pendingProps,se.current),at=t,Jt=!0,r=Re,mi(t.type)?(xu=r,Re=Ft(i.firstChild)):Re=r),rt(e,t,t.pendingProps.children,n),Ir(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=i=Re)&&(i=U1(i,t.type,t.pendingProps,Jt),i!==null?(t.stateNode=i,at=t,Re=Ft(i.firstChild),Jt=!1,r=!0):r=!1),r||ei(t)),fn(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,fu(r,s)?i=null:d!==null&&fu(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=dc(e,t,e1,null,null,n),Ql._currentValue=r),Ir(e,t),rt(e,t,i,n),t.child;case 6:return e===null&&xe&&((e=n=Re)&&(n=G1(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,at=t,Re=null,e=!0):e=!1),e||ei(t)),null;case 13:return ym(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ui(t,null,i,n):rt(e,t,i,n),t.child;case 11:return um(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ti(t,t.type,i.value),rt(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Oi(t),r=lt(r),i=i(r),t.flags|=1,rt(e,t,i,n),t.child;case 14:return dm(e,t,t.type,t.pendingProps,n);case 15:return fm(e,t,t.type,t.pendingProps,n);case 19:return jm(e,t,n);case 31:return o1(e,t,n);case 22:return hm(e,t,n,t.pendingProps);case 24:return Oi(t),i=lt($e),e===null?(r=tc(),r===null&&(r=ke,s=Io(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},ic(t),ti(t,$e,r)):((e.lanes&n)!==0&&(ac(e,t),Tl(t,null,null,n),El()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ti(t,$e,i)):(i=s.cache,ti(t,$e,i),i!==r.cache&&Po(t,[$e],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Bn(e){e.flags|=4}function Uc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Jm())e.flags|=8192;else throw Li=Lr,nc}else e.flags&=-16777217}function wm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(t))if(Jm())e.flags|=8192;else throw Li=Lr,nc}function ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tf():536870912,e.lanes|=t,Ta|=t)}function Bl(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function u1(e,t,n){var i=t.pendingProps;switch(Qo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Cn($e),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jo())),Be(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Bn(t),s!==null?(Be(t),wm(t,s)):(Be(t),Uc(t,r,null,i,n))):s?s!==e.memoizedState?(Bn(t),Be(t),wm(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),Be(t),Uc(t,r,e,i,n)),null;case 27:if(hn(t),n=se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=X.current,ma(t)?nh(t):(e=kg(r,i,n),t.stateNode=e,Bn(t))}return Be(t),null;case 5:if(hn(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(s=X.current,ma(t))nh(t);else{var d=ps(se.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[it]=t,s[ht]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(st(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return Be(t),Uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=se.current,ma(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=at,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||yg(e.nodeValue,n)),e||ei(t,!0)}else e=ps(e).createTextNode(i),e[it]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ma(t),n!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[it]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ma(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[it]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),r=!1}else r=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ts(t,t.updateQueue),Be(t),null);case 4:return Ee(),e===null&&su(t.stateNode.containerInfo),Be(t),null;case 10:return Cn(t.type),Be(t),null;case 19:if(O(Ye),i=t.memoizedState,i===null)return Be(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Bl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Yr(e),s!==null){for(t.flags|=128,Bl(i,!1),e=s.updateQueue,t.updateQueue=e,ts(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ff(n,e),n=n.sibling;return Z(Ye,Ye.current&1|2),xe&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>rs&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ts(t,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!xe)return Be(t),null}else 2*Tt()-i.renderingStartTime>rs&&n!==536870912&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Ye.current,Z(Ye,r?n&1|2:n&1),xe&&Tn(t,i.treeForkCount),e):(Be(t),null);case 22:case 23:return Bt(t),oc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&ts(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&O(Ni),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Cn($e),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function d1(e,t){switch(Qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn($e),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ye),null;case 4:return Ee(),null;case 10:return Cn(t.type),null;case 22:case 23:return Bt(t),oc(),e!==null&&O(Ni),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Cn($e),null;case 25:return null;default:return null}}function zm(e,t){switch(Qo(t),t.tag){case 3:Cn($e),Ee();break;case 26:case 27:case 5:hn(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:O(Ye);break;case 10:Cn(t.type);break;case 22:case 23:Bt(t),oc(),e!==null&&O(Ni);break;case 24:Cn($e)}}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){_e(t,t.return,g)}}function si(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var b=n,A=g;try{A()}catch(B){_e(r,b,B)}}}i=i.next}while(i!==s)}}catch(B){_e(t,t.return,B)}}function _m(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gh(t,n)}catch(i){_e(e,e.return,i)}}}function Em(e,t,n){n.props=Vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){_e(e,t,r)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Tm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Gc(e,t,n){try{var i=e.stateNode;B1(i,e.type,n,t),i[ht]=t}catch(r){_e(e,e.return,r)}}function Am(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mi(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zn));else if(i!==4&&(i===27&&mi(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function ns(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&mi(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}function Cm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);st(t,i,n),t[it]=e,t[ht]=n}catch(s){_e(e,e.return,s)}}var Dn=!1,Xe=!1,qc=!1,km=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function f1(e,t){if(e=e.containerInfo,uu=ws,e=Yf(e),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,b=-1,A=0,B=0,L=e,C=null;t:for(;;){for(var M;L!==n||r!==0&&L.nodeType!==3||(g=d+r),L!==s||i!==0&&L.nodeType!==3||(b=d+i),L.nodeType===3&&(d+=L.nodeValue.length),(M=L.firstChild)!==null;)C=L,L=M;for(;;){if(L===e)break t;if(C===n&&++A===r&&(g=d),C===s&&++B===i&&(b=d),(M=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=M}n=g===-1||b===-1?null:{start:g,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},ws=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var W=Vi(n.type,r);e=i.getSnapshotBeforeUpdate(W,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Mm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),i&4&&Dl(5,n);break;case 1:if(Nn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var r=Vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}i&64&&_m(n),i&512&&Ol(n,n.return);break;case 3:if(Nn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gh(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&i&4&&Cm(n);case 26:case 5:Nn(e,n),t===null&&i&4&&Tm(n),i&512&&Ol(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),i&4&&Dm(e,n);break;case 13:Nn(e,n),i&4&&Om(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=j1.bind(null,n),V1(e,n))));break;case 22:if(i=n.memoizedState!==null||Dn,!i){t=t!==null&&t.memoizedState!==null||Xe,r=Dn;var s=Xe;Dn=i,(Xe=t)&&!s?Hn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Dn=r,Xe=s}break;case 30:break;default:Nn(e,n)}}function Rm(e){var t=e.alternate;t!==null&&(e.alternate=null,Rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,gt=!1;function On(e,t,n){for(n=n.child;n!==null;)Bm(e,t,n),n=n.sibling}function Bm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 26:Xe||xn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||xn(n,t);var i=Ne,r=gt;mi(n.type)&&(Ne=n.stateNode,gt=!1),On(e,t,n),Kl(n.stateNode),Ne=i,gt=r;break;case 5:Xe||xn(n,t);case 6:if(i=Ne,r=gt,Ne=null,On(e,t,n),Ne=i,gt=r,Ne!==null)if(gt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Ne.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Ne!==null&&(gt?(e=Ne,_g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oa(e)):_g(Ne,n.stateNode));break;case 4:i=Ne,r=gt,Ne=n.stateNode.containerInfo,gt=!0,On(e,t,n),Ne=i,gt=r;break;case 0:case 11:case 14:case 15:si(2,n,t),Xe||si(4,n,t),On(e,t,n);break;case 1:Xe||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Em(n,t,i)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,On(e,t,n),Xe=i;break;default:On(e,t,n)}}function Dm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(n){_e(t,t.return,n)}}}function Om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(n){_e(t,t.return,n)}}function h1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new km),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new km),t;default:throw Error(c(435,e.tag))}}function is(e,t){var n=h1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=S1.bind(null,e,i);i.then(r,r)}})}function pt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(mi(g.type)){Ne=g.stateNode,gt=!1;break e}break;case 5:Ne=g.stateNode,gt=!1;break e;case 3:case 4:Ne=g.stateNode.containerInfo,gt=!0;break e}g=g.return}if(Ne===null)throw Error(c(160));Bm(s,d,r),Ne=null,gt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nm(t,e),t=t.sibling}var sn=null;function Nm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),xt(e),i&4&&(si(3,e,e.return),Dl(3,e),si(5,e,e.return));break;case 1:pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),i&64&&Dn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=sn;if(pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[ol]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),st(s,i,n),s[it]=e,Pe(s),i=s;break e;case"link":var d=Ng("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;case"meta":if(d=Ng("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),st(s,i,n),r.head.appendChild(s);break;default:throw Error(c(468,i))}s[it]=e,Pe(s),i=s}e.stateNode=i}else Hg(r,e.type,e.stateNode);else e.stateNode=Og(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Hg(r,e.type,e.stateNode):Og(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),n!==null&&i&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pt(t,e),xt(e),i&512&&(Xe||n===null||xn(n,n.return)),e.flags&32){r=e.stateNode;try{aa(r,"")}catch(W){_e(e,e.return,W)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Gc(e,r,n!==null?n.memoizedProps:r)),i&1024&&(qc=!0);break;case 6:if(pt(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(W){_e(e,e.return,W)}}break;case 3:if(ys=null,r=sn,sn=xs(t.containerInfo),pt(t,e),sn=r,xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(W){_e(e,e.return,W)}qc&&(qc=!1,Hm(e));break;case 4:i=sn,sn=xs(e.stateNode.containerInfo),pt(t,e),xt(e),sn=i;break;case 12:pt(t,e),xt(e);break;case 31:pt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 13:pt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ls=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 22:r=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=Dn,B=Xe;if(Dn=A||r,Xe=B||b,pt(t,e),Xe=B,Dn=A,xt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||b||Dn||Xe||Yi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=b.stateNode;var L=b.memoizedProps.style,C=L!=null&&L.hasOwnProperty("display")?L.display:null;g.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(W){_e(b,b.return,W)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(W){_e(b,b.return,W)}}}else if(t.tag===18){if(n===null){b=t;try{var M=b.stateNode;r?Eg(M,!0):Eg(b.stateNode,!1)}catch(W){_e(b,b.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,is(e,n))));break;case 19:pt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 30:break;case 21:break;default:pt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Am(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,s=Vc(e);ns(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(aa(d,""),n.flags&=-33);var g=Vc(e);ns(e,g,d);break;case 3:case 4:var b=n.stateNode.containerInfo,A=Vc(e);Yc(e,A,b);break;default:throw Error(c(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mm(e,t.alternate,t),t=t.sibling}function Yi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:si(4,t,t.return),Yi(t);break;case 1:xn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Em(t,t.return,n),Yi(t);break;case 27:Kl(t.stateNode);case 26:case 5:xn(t,t.return),Yi(t);break;case 22:t.memoizedState===null&&Yi(t);break;case 30:Yi(t);break;default:Yi(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Hn(r,s,n),Dl(4,s);break;case 1:if(Hn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){_e(i,i.return,A)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)mh(b[r],g)}catch(A){_e(i,i.return,A)}}n&&d&64&&_m(s),Ol(s,s.return);break;case 27:Cm(s);case 26:case 5:Hn(r,s,n),n&&i===null&&d&4&&Tm(s),Ol(s,s.return);break;case 12:Hn(r,s,n);break;case 31:Hn(r,s,n),n&&d&4&&Dm(r,s);break;case 13:Hn(r,s,n),n&&d&4&&Om(r,s);break;case 22:s.memoizedState===null&&Hn(r,s,n),Ol(s,s.return);break;case 30:break;default:Hn(r,s,n)}t=t.sibling}}function Kc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&jl(n))}function $c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function on(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(e,t,n,i),t=t.sibling}function Lm(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,i),r&2048&&Dl(9,t);break;case 1:on(e,t,n,i);break;case 3:on(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(r&2048){on(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){_e(t,t.return,b)}}else on(e,t,n,i);break;case 31:on(e,t,n,i);break;case 13:on(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?on(e,t,n,i):Nl(e,t):s._visibility&2?on(e,t,n,i):(s._visibility|=2,za(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Kc(d,t);break;case 24:on(e,t,n,i),r&2048&&$c(t.alternate,t);break;default:on(e,t,n,i)}}function za(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,b=i,A=d.flags;switch(d.tag){case 0:case 11:case 15:za(s,d,g,b,r),Dl(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?za(s,d,g,b,r):Nl(s,d):(B._visibility|=2,za(s,d,g,b,r)),r&&A&2048&&Kc(d.alternate,d);break;case 24:za(s,d,g,b,r),r&&A&2048&&$c(d.alternate,d);break;default:za(s,d,g,b,r)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Nl(n,i),r&2048&&Kc(i.alternate,i);break;case 24:Nl(n,i),r&2048&&$c(i.alternate,i);break;default:Nl(n,i)}t=t.sibling}}var Hl=8192;function _a(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Um(e,t,n),e=e.sibling}function Um(e,t,n){switch(e.tag){case 26:_a(e,t,n),e.flags&Hl&&e.memoizedState!==null&&I1(n,sn,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,n);break;case 3:case 4:var i=sn;sn=xs(e.stateNode.containerInfo),_a(e,t,n),sn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Hl,Hl=16777216,_a(e,t,n),Hl=i):_a(e,t,n));break;default:_a(e,t,n)}}function Gm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Ym(i,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&si(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,as(e)):Ll(e);break;default:Ll(e)}}function as(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Ym(i,e)}Gm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:si(8,t,t.return),as(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,as(t));break;default:as(t)}e=e.sibling}}function Ym(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:si(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:jl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var r=i.sibling,s=i.return;if(Rm(i),i===n){Ie=null;break e}if(r!==null){r.return=s,Ie=r;break e}Ie=s}}}var m1={getCacheForType:function(e){var t=lt($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return lt($e).controller.signal}},g1=typeof WeakMap=="function"?WeakMap:Map,Se=0,ke=null,he=null,ge=0,ze=0,Dt=null,oi=!1,Ea=!1,Zc=!1,Ln=0,Ve=0,ci=0,qi=0,Qc=0,Ot=0,Ta=0,Ul=null,bt=null,Xc=!1,ls=0,qm=0,rs=1/0,ss=null,ui=null,We=0,di=null,Aa=null,Un=0,Jc=0,Wc=null,Km=null,Gl=0,Fc=null;function Nt(){return(Se&2)!==0&&ge!==0?ge&-ge:D.T!==null?iu():rf()}function $m(){if(Ot===0)if((ge&536870912)===0||xe){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),Ot=e}else Ot=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ot}function yt(e,t,n){(e===ke&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),fi(e,ge,Ot,!1)),sl(e,n),((Se&2)===0||e!==ke)&&(e===ke&&((Se&2)===0&&(qi|=n),Ve===4&&fi(e,ge,Ot,!1)),bn(e))}function Zm(e,t,n){if((Se&6)!==0)throw Error(c(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rl(e,t),r=i?b1(e,t):Ic(e,t,!0),s=i;do{if(r===0){Ea&&!i&&fi(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!p1(n)){r=Ic(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Ul;var b=g.current.memoizedState.isDehydrated;if(b&&(Ca(g,d).flags|=256),d=Ic(g,d,!1),d!==2){if(Zc&&!b){g.errorRecoveryDisabledLanes|=s,qi|=s,r=4;break e}s=bt,bt=r,s!==null&&(bt===null?bt=s:bt.push.apply(bt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){Ca(e,0),fi(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:fi(i,t,Ot,!oi);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=ls+300-Tt(),10<r)){if(fi(i,t,Ot,!oi),xr(i,0,!0)!==0)break e;Un=t,i.timeoutHandle=wg(Qm.bind(null,i,n,bt,ss,Xc,t,Ot,qi,Ta,oi,s,"Throttled",-0,0),r);break e}Qm(i,n,bt,ss,Xc,t,Ot,qi,Ta,oi,s,null,-0,0)}}break}while(!0);bn(e)}function Qm(e,t,n,i,r,s,d,g,b,A,B,L,C,M){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},Um(t,s,L);var W=(s&62914560)===s?ls-Tt():(s&4194048)===s?qm-Tt():0;if(W=ey(L,W),W!==null){Un=s,e.cancelPendingCommit=W(tg.bind(null,e,t,s,n,i,r,d,g,b,B,L,null,C,M)),fi(e,s,d,!A);return}}tg(e,t,s,n,i,r,d,g,b)}function p1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fi(e,t,n,i){t&=~Qc,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&nf(e,n,t)}function os(){return(Se&6)===0?(Vl(0),!1):!0}function Pc(){if(he!==null){if(ze===0)var e=he.return;else e=he,An=Di=null,mc(e),ya=null,wl=0,e=he;for(;e!==null;)zm(e.alternate,e),e=e.return;he=null}}function Ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,N1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Un=0,Pc(),ke=e,he=n=En(e.current,null),ge=t,ze=0,Dt=null,oi=!1,Ea=rl(e,t),Zc=!1,Ta=Ot=Qc=qi=ci=Ve=0,bt=Ul=null,Xc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return Ln=t,Cr(),n}function Xm(e,t){re=null,D.H=Ml,t===ba||t===Hr?(t=uh(),ze=3):t===nc?(t=uh(),ze=4):ze=t===kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,he===null&&(Ve=1,Fr(e,Zt(t,e.current)))}function Jm(){var e=Rt.current;return e===null?!0:(ge&4194048)===ge?Wt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Wt:!1}function Wm(){var e=D.H;return D.H=Ml,e===null?Ml:e}function Fm(){var e=D.A;return D.A=m1,e}function cs(){Ve=4,oi||(ge&4194048)!==ge&&Rt.current!==null||(Ea=!0),(ci&134217727)===0&&(qi&134217727)===0||ke===null||fi(ke,ge,Ot,!1)}function Ic(e,t,n){var i=Se;Se|=2;var r=Wm(),s=Fm();(ke!==e||ge!==t)&&(ss=null,Ca(e,t)),t=!1;var d=Ve;e:do try{if(ze!==0&&he!==null){var g=he,b=Dt;switch(ze){case 8:Pc(),d=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var A=ze;if(ze=0,Dt=null,ka(e,g,b,A),n&&Ea){d=0;break e}break;default:A=ze,ze=0,Dt=null,ka(e,g,b,A)}}x1(),d=Ve;break}catch(B){Xm(e,B)}while(!0);return t&&e.shellSuspendCounter++,An=Di=null,Se=i,D.H=r,D.A=s,he===null&&(ke=null,ge=0,Cr()),d}function x1(){for(;he!==null;)Pm(he)}function b1(e,t){var n=Se;Se|=2;var i=Wm(),r=Fm();ke!==e||ge!==t?(ss=null,rs=Tt()+500,Ca(e,t)):Ea=rl(e,t);e:do try{if(ze!==0&&he!==null){t=he;var s=Dt;t:switch(ze){case 1:ze=0,Dt=null,ka(e,t,s,1);break;case 2:case 9:if(oh(s)){ze=0,Dt=null,Im(t);break}t=function(){ze!==2&&ze!==9||ke!==e||(ze=7),bn(e)},s.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:oh(s)?(ze=0,Dt=null,Im(t)):(ze=0,Dt=null,ka(e,t,s,7));break;case 5:var d=null;switch(he.tag){case 26:d=he.memoizedState;case 5:case 27:var g=he;if(d?Lg(d):g.stateNode.complete){ze=0,Dt=null;var b=g.sibling;if(b!==null)he=b;else{var A=g.return;A!==null?(he=A,us(A)):he=null}break t}}ze=0,Dt=null,ka(e,t,s,5);break;case 6:ze=0,Dt=null,ka(e,t,s,6);break;case 8:Pc(),Ve=6;break e;default:throw Error(c(462))}}y1();break}catch(B){Xm(e,B)}while(!0);return An=Di=null,D.H=i,D.A=r,Se=n,he!==null?0:(ke=null,ge=0,Cr(),Ve)}function y1(){for(;he!==null&&!Yx();)Pm(he)}function Pm(e){var t=Sm(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,t===null?us(e):he=t}function Im(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pm(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=pm(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:mc(t);default:zm(n,t),t=he=Ff(t,Ln),t=Sm(n,t,Ln)}e.memoizedProps=e.pendingProps,t===null?us(e):he=t}function ka(e,t,n,i){An=Di=null,mc(t),ya=null,wl=0;var r=t.return;try{if(s1(e,r,t,n,ge)){Ve=1,Fr(e,Zt(n,e.current)),he=null;return}}catch(s){if(r!==null)throw he=r,s;Ve=1,Fr(e,Zt(n,e.current)),he=null;return}t.flags&32768?(xe||i===1?e=!0:Ea||(ge&536870912)!==0?e=!1:(oi=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rt.current,i!==null&&i.tag===13&&(i.flags|=16384))),eg(t,e)):us(t)}function us(e){var t=e;do{if((t.flags&32768)!==0){eg(t,oi);return}e=t.return;var n=u1(t.alternate,t,Ln);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Ve===0&&(Ve=5)}function eg(e,t){do{var n=d1(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);Ve=6,he=null}function tg(e,t,n,i,r,s,d,g,b){e.cancelPendingCommit=null;do ds();while(We!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Vo,Px(e,n,s,d,g,b),e===ke&&(he=ke=null,ge=0),Aa=t,di=e,Un=n,Jc=s,Wc=r,Km=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,w1(hr,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,r=$.p,$.p=2,d=Se,Se|=4;try{f1(e,t,n)}finally{Se=d,$.p=r,D.T=i}}We=1,ng(),ig(),ag()}}function ng(){if(We===1){We=0;var e=di,t=Aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=$.p;$.p=2;var r=Se;Se|=4;try{Nm(t,e);var s=du,d=Yf(e.containerInfo),g=s.focusedElem,b=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Vf(g.ownerDocument.documentElement,g)){if(b!==null&&No(g)){var A=b.start,B=b.end;if(B===void 0&&(B=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(B,g.value.length);else{var L=g.ownerDocument||document,C=L&&L.defaultView||window;if(C.getSelection){var M=C.getSelection(),W=g.textContent.length,ne=Math.min(b.start,W),Ce=b.end===void 0?ne:Math.min(b.end,W);!M.extend&&ne>Ce&&(d=Ce,Ce=ne,ne=d);var z=Gf(g,ne),j=Gf(g,Ce);if(z&&j&&(M.rangeCount!==1||M.anchorNode!==z.node||M.anchorOffset!==z.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var T=L.createRange();T.setStart(z.node,z.offset),M.removeAllRanges(),ne>Ce?(M.addRange(T),M.extend(j.node,j.offset)):(T.setEnd(j.node,j.offset),M.addRange(T))}}}}for(L=[],M=g;M=M.parentNode;)M.nodeType===1&&L.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<L.length;g++){var N=L[g];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}ws=!!uu,du=uu=null}finally{Se=r,$.p=i,D.T=n}}e.current=t,We=2}}function ig(){if(We===2){We=0;var e=di,t=Aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=$.p;$.p=2;var r=Se;Se|=4;try{Mm(e,t.alternate,t)}finally{Se=r,$.p=i,D.T=n}}We=3}}function ag(){if(We===4||We===3){We=0,qx();var e=di,t=Aa,n=Un,i=Km;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Aa=di=null,lg(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ui=null),xo(n),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,r=$.p,$.p=2,D.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{D.T=t,$.p=r}}(Un&3)!==0&&ds(),bn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Fc?Gl++:(Gl=0,Fc=e):Gl=0,Vl(0)}}function lg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function ds(){return ng(),ig(),ag(),rg()}function rg(){if(We!==5)return!1;var e=di,t=Jc;Jc=0;var n=xo(Un),i=D.T,r=$.p;try{$.p=32>n?32:n,D.T=null,n=Wc,Wc=null;var s=di,d=Un;if(We=0,Aa=di=null,Un=0,(Se&6)!==0)throw Error(c(331));var g=Se;if(Se|=4,Vm(s.current),Lm(s,s.current,d,n),Se=g,Vl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ll,s)}catch{}return!0}finally{$.p=r,D.T=i,lg(e,t)}}function sg(e,t,n){t=Zt(n,t),t=Cc(e.stateNode,t,2),e=ai(e,t,2),e!==null&&(sl(e,2),bn(e))}function _e(e,t,n){if(e.tag===3)sg(e,e,n);else for(;t!==null;){if(t.tag===3){sg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ui===null||!ui.has(i))){e=Zt(n,e),n=om(2),i=ai(t,n,2),i!==null&&(cm(n,i,t,e),sl(i,2),bn(i));break}}t=t.return}}function eu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new g1;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Zc=!0,r.add(n),e=v1.bind(null,e,t,n),t.then(e,e))}function v1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(ge&n)===n&&(Ve===4||Ve===3&&(ge&62914560)===ge&&300>Tt()-ls?(Se&2)===0&&Ca(e,0):Qc|=n,Ta===ge&&(Ta=0)),bn(e)}function og(e,t){t===0&&(t=tf()),e=Mi(e,t),e!==null&&(sl(e,t),bn(e))}function j1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function S1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),og(e,n)}function w1(e,t){return ho(e,t)}var fs=null,Ma=null,tu=!1,hs=!1,nu=!1,hi=0;function bn(e){e!==Ma&&e.next===null&&(Ma===null?fs=Ma=e:Ma=Ma.next=e),hs=!0,tu||(tu=!0,_1())}function Vl(e,t){if(!nu&&hs){nu=!0;do for(var n=!1,i=fs;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,fg(i,s))}else s=ge,s=xr(i,i===ke?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||rl(i,s)||(n=!0,fg(i,s));i=i.next}while(n);nu=!1}}function z1(){cg()}function cg(){hs=tu=!1;var e=0;hi!==0&&O1()&&(e=hi);for(var t=Tt(),n=null,i=fs;i!==null;){var r=i.next,s=ug(i,t);s===0?(i.next=null,n===null?fs=r:n.next=r,r===null&&(Ma=n)):(n=i,(e!==0||(s&3)!==0)&&(hs=!0)),i=r}We!==0&&We!==5||Vl(e),hi!==0&&(hi=0)}function ug(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),g=1<<d,b=r[d];b===-1?((g&n)===0||(g&i)!==0)&&(r[d]=Fx(g,t)):b<=t&&(e.expiredLanes|=g),s&=~g}if(t=ke,n=ge,n=xr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&mo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&mo(i),xo(n)){case 2:case 8:n=Id;break;case 32:n=hr;break;case 268435456:n=ef;break;default:n=hr}return i=dg.bind(null,e),n=ho(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&mo(i),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var i=ge;return i=xr(e,e===ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Zm(e,i,t),ug(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?dg.bind(null,e):null)}function fg(e,t){if(ds())return null;Zm(e,t,!0)}function _1(){H1(function(){(Se&6)!==0?ho(Pd,z1):cg()})}function iu(){if(hi===0){var e=pa;e===0&&(e=mr,mr<<=1,(mr&261888)===0&&(mr=256)),hi=e}return hi}function hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(""+e)}function mg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function E1(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=hg((r[ht]||null).action),d=i.submitter;d&&(t=(t=d[ht]||null)?hg(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new _r("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(hi!==0){var b=d?mg(r,d):new FormData(r);wc(n,{pending:!0,data:b,method:r.method,action:s},null,b)}}else typeof s=="function"&&(g.preventDefault(),b=d?mg(r,d):new FormData(r),wc(n,{pending:!0,data:b,method:r.method,action:s},s,b))},currentTarget:r}]})}}for(var au=0;au<Go.length;au++){var lu=Go[au],T1=lu.toLowerCase(),A1=lu[0].toUpperCase()+lu.slice(1);rn(T1,"on"+A1)}rn($f,"onAnimationEnd"),rn(Zf,"onAnimationIteration"),rn(Qf,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Kb,"onTransitionRun"),rn($b,"onTransitionStart"),rn(Zb,"onTransitionCancel"),rn(Xf,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],b=g.instance,A=g.currentTarget;if(g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=A;try{s(r)}catch(B){Ar(B)}r.currentTarget=null,s=b}else for(d=0;d<i.length;d++){if(g=i[d],b=g.instance,A=g.currentTarget,g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=A;try{s(r)}catch(B){Ar(B)}r.currentTarget=null,s=b}}}}function me(e,t){var n=t[bo];n===void 0&&(n=t[bo]=new Set);var i=e+"__bubble";n.has(i)||(pg(t,e,2,!1),n.add(i))}function ru(e,t,n){var i=0;t&&(i|=4),pg(n,e,i,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function su(e){if(!e[ms]){e[ms]=!0,cf.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||ru(n,!1,e),ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,ru("selectionchange",!1,t))}}function pg(e,t,n,i){switch($g(t)){case 2:var r=iy;break;case 8:r=ay;break;default:r=Su}n=r.bind(null,t,n,e),r=void 0,!To||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ou(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=Ii(g),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){i=s=d;continue e}g=g.parentNode}}i=i.return}jf(function(){var A=s,B=_o(n),L=[];e:{var C=Jf.get(e);if(C!==void 0){var M=_r,W=e;switch(e){case"keypress":if(wr(n)===0)break e;case"keydown":case"keyup":M=Sb;break;case"focusin":W="focus",M=Mo;break;case"focusout":W="blur",M=Mo;break;case"beforeblur":case"afterblur":M=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=_b;break;case $f:case Zf:case Qf:M=hb;break;case Xf:M=Tb;break;case"scroll":case"scrollend":M=ob;break;case"wheel":M=Cb;break;case"copy":case"cut":case"paste":M=gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ef;break;case"toggle":case"beforetoggle":M=Mb}var ne=(t&4)!==0,Ce=!ne&&(e==="scroll"||e==="scrollend"),z=ne?C!==null?C+"Capture":null:C;ne=[];for(var j=A,T;j!==null;){var N=j;if(T=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||T===null||z===null||(N=ul(j,z),N!=null&&ne.push(ql(j,N,T))),Ce)break;j=j.return}0<ne.length&&(C=new M(C,W,null,n,B),L.push({event:C,listeners:ne}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",C&&n!==zo&&(W=n.relatedTarget||n.fromElement)&&(Ii(W)||W[Pi]))break e;if((M||C)&&(C=B.window===B?B:(C=B.ownerDocument)?C.defaultView||C.parentWindow:window,M?(W=n.relatedTarget||n.toElement,M=A,W=W?Ii(W):null,W!==null&&(Ce=m(W),ne=W.tag,W!==Ce||ne!==5&&ne!==27&&ne!==6)&&(W=null)):(M=null,W=A),M!==W)){if(ne=zf,N="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Ef,N="onPointerLeave",z="onPointerEnter",j="pointer"),Ce=M==null?C:cl(M),T=W==null?C:cl(W),C=new ne(N,j+"leave",M,n,B),C.target=Ce,C.relatedTarget=T,N=null,Ii(B)===A&&(ne=new ne(z,j+"enter",W,n,B),ne.target=T,ne.relatedTarget=Ce,N=ne),Ce=N,M&&W)t:{for(ne=k1,z=M,j=W,T=0,N=z;N;N=ne(N))T++;N=0;for(var ee=j;ee;ee=ne(ee))N++;for(;0<T-N;)z=ne(z),T--;for(;0<N-T;)j=ne(j),N--;for(;T--;){if(z===j||j!==null&&z===j.alternate){ne=z;break t}z=ne(z),j=ne(j)}ne=null}else ne=null;M!==null&&xg(L,C,M,ne,!1),W!==null&&Ce!==null&&xg(L,Ce,W,ne,!0)}}e:{if(C=A?cl(A):window,M=C.nodeName&&C.nodeName.toLowerCase(),M==="select"||M==="input"&&C.type==="file")var ve=Df;else if(Rf(C))if(Of)ve=Vb;else{ve=Ub;var F=Lb}else M=C.nodeName,!M||M.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&wo(A.elementType)&&(ve=Df):ve=Gb;if(ve&&(ve=ve(e,A))){Bf(L,ve,n,B);break e}F&&F(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&So(C,"number",C.value)}switch(F=A?cl(A):window,e){case"focusin":(Rf(F)||F.contentEditable==="true")&&(oa=F,Ho=A,bl=null);break;case"focusout":bl=Ho=oa=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,qf(L,n,B);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":qf(L,n,B)}var oe;if(Bo)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else sa?kf(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(Tf&&n.locale!=="ko"&&(sa||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&sa&&(oe=Sf()):(Fn=B,Ao="value"in Fn?Fn.value:Fn.textContent,sa=!0)),F=gs(A,pe),0<F.length&&(pe=new _f(pe,e,null,n,B),L.push({event:pe,listeners:F}),oe?pe.data=oe:(oe=Mf(n),oe!==null&&(pe.data=oe)))),(oe=Bb?Db(e,n):Ob(e,n))&&(pe=gs(A,"onBeforeInput"),0<pe.length&&(F=new _f("onBeforeInput","beforeinput",null,n,B),L.push({event:F,listeners:pe}),F.data=oe)),E1(L,e,A,n,B)}gg(L,t)})}function ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=ul(e,n),r!=null&&i.unshift(ql(e,r,s)),r=ul(e,t),r!=null&&i.push(ql(e,r,s))),e.tag===3)return i;e=e.return}return[]}function k1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,b=g.alternate,A=g.stateNode;if(g=g.tag,b!==null&&b===i)break;g!==5&&g!==26&&g!==27||A===null||(b=A,r?(A=ul(n,s),A!=null&&d.unshift(ql(n,A,b))):r||(A=ul(n,s),A!=null&&d.push(ql(n,A,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var M1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(M1,`
`).replace(R1,"")}function yg(e,t){return t=bg(t),bg(e)===t}function Ae(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||aa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&aa(e,""+i);break;case"className":yr(e,"class",i);break;case"tabIndex":yr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yr(e,n,i);break;case"style":yf(e,i,s);break;case"data":if(t!=="object"){yr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=zn);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":me("beforetoggle",e),me("toggle",e),br(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":br(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rb.get(n)||n,br(e,n,i))}}function cu(e,t,n,i,r,s){switch(n){case"style":yf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?aa(e,i):(typeof i=="number"||typeof i=="bigint")&&aa(e,""+i);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[ht]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):br(e,n,i)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,s,d,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var g=s=d=r=null,b=null,A=null;for(i in n)if(n.hasOwnProperty(i)){var B=n[i];if(B!=null)switch(i){case"name":r=B;break;case"type":d=B;break;case"checked":b=B;break;case"defaultChecked":A=B;break;case"value":s=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Ae(e,t,i,B,n,null)}}gf(e,s,g,b,A,d,r,!1);return;case"select":me("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:Ae(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?ia(e,!!i,t,!1):n!=null&&ia(e,!!i,n,!0);return;case"textarea":me("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ae(e,t,d,g,n,null)}xf(e,i,r,s);return;case"option":for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null)&&(b==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ae(e,t,b,i,n,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<Yl.length;i++)me(Yl[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(i=n[A],i!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,A,i,n,null)}return;default:if(wo(t)){for(B in n)n.hasOwnProperty(B)&&(i=n[B],i!==void 0&&cu(e,t,B,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ae(e,t,g,i,n,null))}function B1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,b=null,A=null,B=null;for(M in n){var L=n[M];if(n.hasOwnProperty(M)&&L!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=L;default:i.hasOwnProperty(M)||Ae(e,t,M,null,i,L)}}for(var C in i){var M=i[C];if(L=n[C],i.hasOwnProperty(C)&&(M!=null||L!=null))switch(C){case"type":s=M;break;case"name":r=M;break;case"checked":A=M;break;case"defaultChecked":B=M;break;case"value":d=M;break;case"defaultValue":g=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==L&&Ae(e,t,C,M,i,L)}}jo(e,d,g,b,A,B,s,r);return;case"select":M=d=g=C=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":M=b;default:i.hasOwnProperty(s)||Ae(e,t,s,null,i,b)}for(r in i)if(s=i[r],b=n[r],i.hasOwnProperty(r)&&(s!=null||b!=null))switch(r){case"value":C=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==b&&Ae(e,t,r,s,i,b)}t=g,n=d,i=M,C!=null?ia(e,!!n,C,!1):!!i!=!!n&&(t!=null?ia(e,!!n,t,!0):ia(e,!!n,n?[]:"",!1));return;case"textarea":M=C=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":C=r;break;case"defaultValue":M=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&Ae(e,t,d,r,i,s)}pf(e,C,M);return;case"option":for(var W in n)C=n[W],n.hasOwnProperty(W)&&C!=null&&!i.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:Ae(e,t,W,null,i,C));for(b in i)C=i[b],M=n[b],i.hasOwnProperty(b)&&C!==M&&(C!=null||M!=null)&&(b==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":Ae(e,t,b,C,i,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)C=n[ne],n.hasOwnProperty(ne)&&C!=null&&!i.hasOwnProperty(ne)&&Ae(e,t,ne,null,i,C);for(A in i)if(C=i[A],M=n[A],i.hasOwnProperty(A)&&C!==M&&(C!=null||M!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Ae(e,t,A,C,i,M)}return;default:if(wo(t)){for(var Ce in n)C=n[Ce],n.hasOwnProperty(Ce)&&C!==void 0&&!i.hasOwnProperty(Ce)&&cu(e,t,Ce,void 0,i,C);for(B in i)C=i[B],M=n[B],!i.hasOwnProperty(B)||C===M||C===void 0&&M===void 0||cu(e,t,B,C,i,M);return}}for(var z in n)C=n[z],n.hasOwnProperty(z)&&C!=null&&!i.hasOwnProperty(z)&&Ae(e,t,z,null,i,C);for(L in i)C=i[L],M=n[L],!i.hasOwnProperty(L)||C===M||C==null&&M==null||Ae(e,t,L,C,i,M)}function vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function D1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&vg(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var b=n[i],A=b.startTime;if(A>g)break;var B=b.transferSize,L=b.initiatorType;B&&vg(L)&&(b=b.responseEnd,d+=B*(b<g?1:(g-A)/(b-A)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uu=null,du=null;function ps(e){return e.nodeType===9?e:e.ownerDocument}function jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=null;function O1(){var e=window.event;return e&&e.type==="popstate"?e===hu?!1:(hu=e,!0):(hu=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(e){return zg.resolve(null).then(e).catch(L1)}:wg;function L1(e){setTimeout(function(){throw e})}function mi(e){return e==="head"}function _g(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Oa(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[ol]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Kl(e.ownerDocument.body);n=r}while(n);Oa(t)}function Eg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mu(n),yo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function U1(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function G1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function Tg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function gu(e){return e.data==="$?"||e.data==="$~"}function pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function V1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function Ag(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ft(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kg(e,t,n){switch(t=ps(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yo(e)}var Pt=new Map,Mg=new Set;function xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=$.d;$.d={f:Y1,r:q1,D:K1,C:$1,L:Z1,m:Q1,X:J1,S:X1,M:W1};function Y1(){var e=Gn.f(),t=os();return e||t}function q1(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?Xh(t):Gn.r(e)}var Ra=typeof document>"u"?null:document;function Rg(e,t,n){var i=Ra;if(i&&typeof t=="string"&&t){var r=Kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Mg.has(r)||(Mg.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),st(t,"link",e),Pe(t),i.head.appendChild(t)))}}function K1(e){Gn.D(e),Rg("dns-prefetch",e,null)}function $1(e,t){Gn.C(e,t),Rg("preconnect",e,t)}function Z1(e,t,n){Gn.L(e,t,n);var i=Ra;if(i&&e&&t){var r='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Kt(n.imageSizes)+'"]')):r+='[href="'+Kt(e)+'"]';var s=r;switch(t){case"style":s=Ba(e);break;case"script":s=Da(e)}Pt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector($l(s))||t==="script"&&i.querySelector(Zl(s))||(t=i.createElement("link"),st(t,"link",e),Pe(t),i.head.appendChild(t)))}}function Q1(e,t){Gn.m(e,t);var n=Ra;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Da(e)}if(!Pt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Pt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zl(s)))return}i=n.createElement("link"),st(i,"link",e),Pe(i),n.head.appendChild(i)}}}function X1(e,t,n){Gn.S(e,t,n);var i=Ra;if(i&&e){var r=ta(i).hoistableStyles,s=Ba(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector($l(s)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(s))&&bu(e,n);var b=d=i.createElement("link");Pe(b),st(b,"link",e),b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),b.addEventListener("load",function(){g.loading|=1}),b.addEventListener("error",function(){g.loading|=2}),g.loading|=4,bs(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function J1(e,t){Gn.X(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector(Zl(r)),s||(e=w({src:e,async:!0},t),(t=Pt.get(r))&&yu(e,t),s=n.createElement("script"),Pe(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function W1(e,t){Gn.M(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector(Zl(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Pt.get(r))&&yu(e,t),s=n.createElement("script"),Pe(s),st(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Bg(e,t,n,i){var r=(r=se.current)?xs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ba(n.href),n=ta(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var s=ta(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector($l(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),s||F1(r,e,n,d.state))),t&&i===null)throw Error(c(528,""));return d}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(n),n=ta(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ba(e){return'href="'+Kt(e)+'"'}function $l(e){return'link[rel="stylesheet"]['+e+"]"}function Dg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function F1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),st(t,"link",n),Pe(t),e.head.appendChild(t))}function Da(e){return'[src="'+Kt(e)+'"]'}function Zl(e){return"script[async]"+e}function Og(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(i)return t.instance=i,Pe(i),i;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Pe(i),st(i,"style",r),bs(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ba(n.href);var s=e.querySelector($l(r));if(s)return t.state.loading|=4,t.instance=s,Pe(s),s;i=Dg(n),(r=Pt.get(r))&&bu(i,r),s=(e.ownerDocument||e).createElement("link"),Pe(s);var d=s;return d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),st(s,"link",i),t.state.loading|=4,bs(s,n.precedence,e),t.instance=s;case"script":return s=Da(n.src),(r=e.querySelector(Zl(s)))?(t.instance=r,Pe(r),r):(i=n,(r=Pt.get(s))&&(i=w({},n),yu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pe(r),st(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bs(i,n.precedence,e));return t.instance}function bs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ys=null;function Ng(e,t,n){if(ys===null){var i=new Map,r=ys=new Map;r.set(n,i)}else r=ys,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[ol]||s[it]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function Hg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function P1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function I1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ba(i.href),s=t.querySelector($l(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Pe(s);return}s=t.ownerDocument||t,i=Dg(i),(r=Pt.get(r))&&bu(i,r),s=s.createElement("link"),Pe(s);var d=s;d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),st(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vu=0;function ey(e,t){return e.stylesheets&&e.count===0&&Ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vu===0&&(vu=62500*D1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function Ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(ty,e),js=null,vs.call(e))}function ty(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=vs.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ny(e,t,n,i,r,s,d,g,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.hiddenUpdates=go(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ug(e,t,n,i,r,s,d,g,b,A,B,L){return e=new ny(e,t,n,d,b,A,B,L,g),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Io(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ic(s),e}function Gg(e){return e?(e=da,e):da}function Vg(e,t,n,i,r,s){r=Gg(r),i.context===null?i.context=r:i.pendingContext=r,i=ii(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ai(e,i,t),n!==null&&(yt(n,e,t),_l(n,e,t))}function Yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){Yg(e,t),(e=e.alternate)&&Yg(e,t)}function qg(e){if(e.tag===13||e.tag===31){var t=Mi(e,67108864);t!==null&&yt(t,e,67108864),ju(e,67108864)}}function Kg(e){if(e.tag===13||e.tag===31){var t=Nt();t=po(t);var n=Mi(e,t);n!==null&&yt(n,e,t),ju(e,t)}}var ws=!0;function iy(e,t,n,i){var r=D.T;D.T=null;var s=$.p;try{$.p=2,Su(e,t,n,i)}finally{$.p=s,D.T=r}}function ay(e,t,n,i){var r=D.T;D.T=null;var s=$.p;try{$.p=8,Su(e,t,n,i)}finally{$.p=s,D.T=r}}function Su(e,t,n,i){if(ws){var r=wu(i);if(r===null)ou(e,t,i,zs,n),Zg(e,i);else if(ry(r,e,t,n,i))i.stopPropagation();else if(Zg(e,i),t&4&&-1<ly.indexOf(e)){for(;r!==null;){var s=ea(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Ei(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var b=1<<31-Ct(d);g.entanglements[1]|=b,d&=~b}bn(s),(Se&6)===0&&(rs=Tt()+500,Vl(0))}}break;case 31:case 13:g=Mi(s,2),g!==null&&yt(g,s,2),os(),ju(s,2)}if(s=wu(i),s===null&&ou(e,t,i,zs,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(e,t,i,null,n)}}function wu(e){return e=_o(e),zu(e)}var zs=null;function zu(e){if(zs=null,e=Ii(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zs=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kx()){case Pd:return 2;case Id:return 8;case hr:case $x:return 32;case ef:return 268435456;default:return 32}default:return 32}}var _u=!1,gi=null,pi=null,xi=null,Xl=new Map,Jl=new Map,bi=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,t){switch(e){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":Xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(t.pointerId)}}function Wl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=ea(t),t!==null&&qg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ry(e,t,n,i,r){switch(t){case"focusin":return gi=Wl(gi,e,t,n,i,r),!0;case"dragenter":return pi=Wl(pi,e,t,n,i,r),!0;case"mouseover":return xi=Wl(xi,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xl.set(s,Wl(Xl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jl.set(s,Wl(Jl.get(s)||null,e,t,n,i,r)),!0}return!1}function Qg(e){var t=Ii(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,sf(e.priority,function(){Kg(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,sf(e.priority,function(){Kg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zo=i,n.target.dispatchEvent(i),zo=null}else return t=ea(n),t!==null&&qg(t),e.blockedOn=n,!1;t.shift()}return!0}function Xg(e,t,n){_s(e)&&n.delete(t)}function sy(){_u=!1,gi!==null&&_s(gi)&&(gi=null),pi!==null&&_s(pi)&&(pi=null),xi!==null&&_s(xi)&&(xi=null),Xl.forEach(Xg),Jl.forEach(Xg)}function Es(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,sy)))}var Ts=null;function Jg(e){Ts!==e&&(Ts=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(zu(i||n)===null)continue;break}var s=ea(n);s!==null&&(e.splice(t,3),t-=3,wc(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Oa(e){function t(b){return Es(b,e)}gi!==null&&Es(gi,e),pi!==null&&Es(pi,e),xi!==null&&Es(xi,e),Xl.forEach(t),Jl.forEach(t);for(var n=0;n<bi.length;n++){var i=bi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Qg(n),n.blockedOn===null&&bi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[ht]||null;if(typeof s=="function")d||Jg(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[ht]||null)g=d.formAction;else if(zu(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),Jg(n)}}}function Wg(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Eu(e){this._internalRoot=e}As.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=Nt();Vg(n,i,e,t,null,null)},As.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vg(e.current,2,null,e,null,null),os(),t[Pi]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bi.length&&t!==0&&t<bi[n].priority;n++);bi.splice(n,0,e),n===0&&Qg(e)}};var Fg=o.version;if(Fg!=="19.2.3")throw Error(c(527,Fg,"19.2.3"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var oy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{ll=Cs.inject(oy),At=Cs}catch{}}return Pl.createRoot=function(e,t){if(!h(e))throw Error(c(299));var n=!1,i="",r=am,s=lm,d=rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Ug(e,1,!1,null,null,n,i,null,r,s,d,Wg),e[Pi]=t.current,su(e),new Eu(t)},Pl.hydrateRoot=function(e,t,n){if(!h(e))throw Error(c(299));var i=!1,r="",s=am,d=lm,g=rm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Ug(e,1,!0,t,n??null,i,r,b,s,d,g,Wg),t.context=Gg(null),n=t.current,i=Nt(),i=po(i),r=ii(i),r.callback=null,ai(n,r,i),n=i,t.current.lanes=n,sl(t,n),bn(t),e[Pi]=t.current,su(e),new As(t)},Pl.version="19.2.3",Pl}var s0;function yy(){if(s0)return Cu.exports;s0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Cu.exports=by(),Cu.exports}var vy=yy(),nt=function(){return nt=Object.assign||function(o){for(var u,c=1,h=arguments.length;c<h;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},nt.apply(this,arguments)};function rr(l,o,u){if(u||arguments.length===2)for(var c=0,h=o.length,m;c<h;c++)(m||!(c in o))&&(m||(m=Array.prototype.slice.call(o,0,c)),m[c]=o[c]);return l.concat(m||Array.prototype.slice.call(o))}var De="-ms-",lr="-moz-",we="-webkit-",Q0="comm",to="rule",Dd="decl",jy="@import",Sy="@namespace",X0="@keyframes",wy="@layer",J0=Math.abs,Od=String.fromCharCode,jd=Object.assign;function zy(l,o){return Fe(l,0)^45?(((o<<2^Fe(l,0))<<2^Fe(l,1))<<2^Fe(l,2))<<2^Fe(l,3):0}function W0(l){return l.trim()}function Kn(l,o){return(l=o.exec(l))?l[0]:l}function ce(l,o,u){return l.replace(o,u)}function Vs(l,o,u){return l.indexOf(o,u)}function Fe(l,o){return l.charCodeAt(o)|0}function Qi(l,o,u){return l.slice(o,u)}function cn(l){return l.length}function F0(l){return l.length}function ir(l,o){return o.push(l),l}function _y(l,o){return l.map(o).join("")}function o0(l,o){return l.filter(function(u){return!Kn(u,o)})}var no=1,Pa=1,P0=0,It=0,Je=0,tl="";function io(l,o,u,c,h,m,p,v){return{value:l,root:o,parent:u,type:c,props:h,children:m,line:no,column:Pa,length:p,return:"",siblings:v}}function Si(l,o){return jd(io("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function Na(l){for(;l.root;)l=Si(l.root,{children:[l]});ir(l,l.siblings)}function Ey(){return Je}function Ty(){return Je=It>0?Fe(tl,--It):0,Pa--,Je===10&&(Pa=1,no--),Je}function un(){return Je=It<P0?Fe(tl,It++):0,Pa++,Je===10&&(Pa=1,no++),Je}function wi(){return Fe(tl,It)}function Ys(){return It}function ao(l,o){return Qi(tl,l,o)}function sr(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ay(l){return no=Pa=1,P0=cn(tl=l),It=0,[]}function Cy(l){return tl="",l}function Bu(l){return W0(ao(It-1,Sd(l===91?l+2:l===40?l+1:l)))}function ky(l){for(;(Je=wi())&&Je<33;)un();return sr(l)>2||sr(Je)>3?"":" "}function My(l,o){for(;--o&&un()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return ao(l,Ys()+(o<6&&wi()==32&&un()==32))}function Sd(l){for(;un();)switch(Je){case l:return It;case 34:case 39:l!==34&&l!==39&&Sd(Je);break;case 40:l===41&&Sd(l);break;case 92:un();break}return It}function Ry(l,o){for(;un()&&l+Je!==57;)if(l+Je===84&&wi()===47)break;return"/*"+ao(o,It-1)+"*"+Od(l===47?l:un())}function By(l){for(;!sr(wi());)un();return ao(l,It)}function Dy(l){return Cy(qs("",null,null,null,[""],l=Ay(l),0,[0],l))}function qs(l,o,u,c,h,m,p,v,y){for(var x=0,E=0,w=p,H=0,Y=0,R=0,U=1,V=1,K=1,q=0,G="",J=h,I=m,Q=c,_=G;V;)switch(R=q,q=un()){case 40:if(R!=108&&Fe(_,w-1)==58){Vs(_+=ce(Bu(q),"&","&\f"),"&\f",J0(x?v[x-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:_+=Bu(q);break;case 9:case 10:case 13:case 32:_+=ky(R);break;case 92:_+=My(Ys()-1,7);continue;case 47:switch(wi()){case 42:case 47:ir(Oy(Ry(un(),Ys()),o,u,y),y),(sr(R||1)==5||sr(wi()||1)==5)&&cn(_)&&Qi(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*U:v[x++]=cn(_)*K;case 125*U:case 59:case 0:switch(q){case 0:case 125:V=0;case 59+E:K==-1&&(_=ce(_,/\f/g,"")),Y>0&&(cn(_)-w||U===0&&R===47)&&ir(Y>32?u0(_+";",c,u,w-1,y):u0(ce(_," ","")+";",c,u,w-2,y),y);break;case 59:_+=";";default:if(ir(Q=c0(_,o,u,x,E,h,v,G,J=[],I=[],w,m),m),q===123)if(E===0)qs(_,o,Q,Q,J,m,w,v,I);else{switch(H){case 99:if(Fe(_,3)===110)break;case 108:if(Fe(_,2)===97)break;default:E=0;case 100:case 109:case 115:}E?qs(l,Q,Q,c&&ir(c0(l,Q,Q,0,0,h,v,G,h,J=[],w,I),I),h,I,w,v,c?J:I):qs(_,Q,Q,Q,[""],I,0,v,I)}}x=E=Y=0,U=K=1,G=_="",w=p;break;case 58:w=1+cn(_),Y=R;default:if(U<1){if(q==123)--U;else if(q==125&&U++==0&&Ty()==125)continue}switch(_+=Od(q),q*U){case 38:K=E>0?1:(_+="\f",-1);break;case 44:v[x++]=(cn(_)-1)*K,K=1;break;case 64:wi()===45&&(_+=Bu(un())),H=wi(),E=w=cn(G=_+=By(Ys())),q++;break;case 45:R===45&&cn(_)==2&&(U=0)}}return m}function c0(l,o,u,c,h,m,p,v,y,x,E,w){for(var H=h-1,Y=h===0?m:[""],R=F0(Y),U=0,V=0,K=0;U<c;++U)for(var q=0,G=Qi(l,H+1,H=J0(V=p[U])),J=l;q<R;++q)(J=W0(V>0?Y[q]+" "+G:ce(G,/&\f/g,Y[q])))&&(y[K++]=J);return io(l,o,u,h===0?to:v,y,x,E,w)}function Oy(l,o,u,c){return io(l,o,u,Q0,Od(Ey()),Qi(l,2,-2),0,c)}function u0(l,o,u,c,h){return io(l,o,u,Dd,Qi(l,0,c),Qi(l,c+1,-1),c,h)}function I0(l,o,u){switch(zy(l,o)){case 5103:return we+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return we+l+l;case 4855:return we+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return lr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return we+l+lr+l+De+l+l;case 5936:switch(Fe(l,o+11)){case 114:return we+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return we+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return we+l+De+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return we+l+De+l+l;case 6165:return we+l+De+"flex-"+l+l;case 5187:return we+l+ce(l,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+l;case 5443:return we+l+De+"flex-item-"+ce(l,/flex-|-self/g,"")+(Kn(l,/flex-|baseline/)?"":De+"grid-row-"+ce(l,/flex-|-self/g,""))+l;case 4675:return we+l+De+"flex-line-pack"+ce(l,/align-content|flex-|-self/g,"")+l;case 5548:return we+l+De+ce(l,"shrink","negative")+l;case 5292:return we+l+De+ce(l,"basis","preferred-size")+l;case 6060:return we+"box-"+ce(l,"-grow","")+we+l+De+ce(l,"grow","positive")+l;case 4554:return we+ce(l,/([^-])(transform)/g,"$1"+we+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/space-between/,"justify")+we+l+l;case 4200:if(!Kn(l,/flex-|baseline/))return De+"grid-column-align"+Qi(l,o)+l;break;case 2592:case 3360:return De+ce(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(c,h){return o=h,Kn(c.props,/grid-\w+-end/)})?~Vs(l+(u=u[o].value),"span",0)?l:De+ce(l,"-start","")+l+De+"grid-row-span:"+(~Vs(u,"span",0)?Kn(u,/\d+/):+Kn(u,/\d+/)-+Kn(l,/\d+/))+";":De+ce(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(c){return Kn(c.props,/grid-\w+-start/)})?l:De+ce(ce(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,we+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(l)-1-o>6)switch(Fe(l,o+1)){case 109:if(Fe(l,o+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+lr+(Fe(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Vs(l,"stretch",0)?I0(ce(l,"stretch","fill-available"),o,u)+l:l}break;case 5152:case 5920:return ce(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,h,m,p,v,y,x){return De+h+":"+m+x+(p?De+h+"-span:"+(v?y:+y-+m)+x:"")+l});case 4949:if(Fe(l,o+6)===121)return ce(l,":",":"+we)+l;break;case 6444:switch(Fe(l,Fe(l,14)===45?18:11)){case 120:return ce(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Fe(l,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+l;case 100:return ce(l,":",":"+De)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(l,"scroll-","scroll-snap-")+l}return l}function Js(l,o){for(var u="",c=0;c<l.length;c++)u+=o(l[c],c,l,o)||"";return u}function Ny(l,o,u,c){switch(l.type){case wy:if(l.children.length)break;case jy:case Sy:case Dd:return l.return=l.return||l.value;case Q0:return"";case X0:return l.return=l.value+"{"+Js(l.children,c)+"}";case to:if(!cn(l.value=l.props.join(",")))return""}return cn(u=Js(l.children,c))?l.return=l.value+"{"+u+"}":""}function Hy(l){var o=F0(l);return function(u,c,h,m){for(var p="",v=0;v<o;v++)p+=l[v](u,c,h,m)||"";return p}}function Ly(l){return function(o){o.root||(o=o.return)&&l(o)}}function Uy(l,o,u,c){if(l.length>-1&&!l.return)switch(l.type){case Dd:l.return=I0(l.value,l.length,u);return;case X0:return Js([Si(l,{value:ce(l.value,"@","@"+we)})],c);case to:if(l.length)return _y(u=l.props,function(h){switch(Kn(h,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Na(Si(l,{props:[ce(h,/:(read-\w+)/,":"+lr+"$1")]})),Na(Si(l,{props:[h]})),jd(l,{props:o0(u,c)});break;case"::placeholder":Na(Si(l,{props:[ce(h,/:(plac\w+)/,":"+we+"input-$1")]})),Na(Si(l,{props:[ce(h,/:(plac\w+)/,":"+lr+"$1")]})),Na(Si(l,{props:[ce(h,/:(plac\w+)/,De+"input-$1")]})),Na(Si(l,{props:[h]})),jd(l,{props:o0(u,c)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},Ia=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",ep="active",tp="data-styled-version",lo="6.3.8",Nd=`/*!sc*/
`,Ws=typeof window<"u"&&typeof document<"u",vn=tt.createContext===void 0,Vy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),Yy={},ro=Object.freeze([]),el=Object.freeze({});function np(l,o,u){return u===void 0&&(u=el),l.theme!==u.theme&&l.theme||o||u.theme}var ip=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ky=/(^-|-$)/g;function d0(l){return l.replace(qy,"-").replace(Ky,"")}var $y=/(a)(d)/gi,f0=function(l){return String.fromCharCode(l+(l>25?39:97))};function wd(l){var o,u="";for(o=Math.abs(l);o>52;o=o/52|0)u=f0(o%52)+u;return(f0(o%52)+u).replace($y,"$1-$2")}var Du,Qa=function(l,o){for(var u=o.length;u;)l=33*l^o.charCodeAt(--u);return l},ap=function(l){return Qa(5381,l)};function lp(l){return wd(ap(l)>>>0)}function Zy(l){return l.displayName||l.name||"Component"}function Ou(l){return typeof l=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,sp=rp?Symbol.for("react.memo"):60115,Qy=rp?Symbol.for("react.forward_ref"):60112,Xy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},op={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wy=((Du={})[Qy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Du[sp]=op,Du);function h0(l){return("type"in(o=l)&&o.type.$$typeof)===sp?op:"$$typeof"in l?Wy[l.$$typeof]:Xy;var o}var Fy=Object.defineProperty,Py=Object.getOwnPropertyNames,m0=Object.getOwnPropertySymbols,Iy=Object.getOwnPropertyDescriptor,ev=Object.getPrototypeOf,g0=Object.prototype;function cp(l,o,u){if(typeof o!="string"){if(g0){var c=ev(o);c&&c!==g0&&cp(l,c,u)}var h=Py(o);m0&&(h=h.concat(m0(o)));for(var m=h0(l),p=h0(o),v=0;v<h.length;++v){var y=h[v];if(!(y in Jy||u&&u[y]||p&&y in p||m&&y in m)){var x=Iy(o,y);try{Fy(l,y,x)}catch{}}}}return l}function Xi(l){return typeof l=="function"}function Hd(l){return typeof l=="object"&&"styledComponentId"in l}function Zi(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function zd(l,o){if(l.length===0)return"";for(var u=l[0],c=1;c<l.length;c++)u+=l[c];return u}function or(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function _d(l,o,u){if(u===void 0&&(u=!1),!u&&!or(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)l[c]=_d(l[c],o[c]);else if(or(o))for(var c in o)l[c]=_d(l[c],o[c]);return l}function Ld(l,o){Object.defineProperty(l,"toString",{value:o})}function Ji(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var tv=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var u=0,c=0;c<o;c++)u+=this.groupSizes[c];return u},l.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var c=this.groupSizes,h=c.length,m=h;o>=m;)if((m<<=1)<0)throw Ji(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=h;p<m;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(o+1),y=(p=0,u.length);p<y;p++)this.tag.insertRule(v,u[p])&&(this.groupSizes[o]++,v++)},l.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],c=this.indexOfGroup(o),h=c+u;this.groupSizes[o]=0;for(var m=c;m<h;m++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var c=this.groupSizes[o],h=this.indexOfGroup(o),m=h+c,p=h;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(Nd);return u},l})(),Ks=new Map,Fs=new Map,$s=1,Xa=function(l){if(Ks.has(l))return Ks.get(l);for(;Fs.has($s);)$s++;var o=$s++;return Ks.set(l,o),Fs.set(o,l),o},nv=function(l,o){$s=o+1,Ks.set(l,o),Fs.set(o,l)},iv="style[".concat(Ia,"][").concat(tp,'="').concat(lo,'"]'),av=new RegExp("^".concat(Ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lv=function(l,o,u){for(var c,h=u.split(","),m=0,p=h.length;m<p;m++)(c=h[m])&&l.registerName(o,c)},rv=function(l,o){for(var u,c=((u=o.textContent)!==null&&u!==void 0?u:"").split(Nd),h=[],m=0,p=c.length;m<p;m++){var v=c[m].trim();if(v){var y=v.match(av);if(y){var x=0|parseInt(y[1],10),E=y[2];x!==0&&(nv(E,x),lv(l,E,y[3]),l.getTag().insertRules(x,h)),h.length=0}else h.push(v)}}},p0=function(l){for(var o=document.querySelectorAll(iv),u=0,c=o.length;u<c;u++){var h=o[u];h&&h.getAttribute(Ia)!==ep&&(rv(l,h),h.parentNode&&h.parentNode.removeChild(h))}};function sv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var up=function(l){var o=document.head,u=l||o,c=document.createElement("style"),h=(function(v){var y=Array.from(v.querySelectorAll("style[".concat(Ia,"]")));return y[y.length-1]})(u),m=h!==void 0?h.nextSibling:null;c.setAttribute(Ia,ep),c.setAttribute(tp,lo);var p=sv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},ov=(function(){function l(o){this.element=up(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,h=0,m=c.length;h<m;h++){var p=c[h];if(p.ownerNode===u)return p}throw Ji(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},l})(),cv=(function(){function l(o){this.element=up(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),uv=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),x0=Ws,dv={isServer:!Ws,useCSSOMInjection:!Vy},Ps=(function(){function l(o,u,c){o===void 0&&(o=el),u===void 0&&(u={});var h=this;this.options=nt(nt({},dv),o),this.gs=u,this.names=new Map(c),this.server=!!o.isServer,!this.server&&Ws&&x0&&(x0=!1,p0(this)),Ld(this,function(){return(function(m){for(var p=m.getTag(),v=p.length,y="",x=function(w){var H=(function(K){return Fs.get(K)})(w);if(H===void 0)return"continue";var Y=m.names.get(H),R=p.getGroup(w);if(Y===void 0||!Y.size||R.length===0)return"continue";var U="".concat(Ia,".g").concat(w,'[id="').concat(H,'"]'),V="";Y!==void 0&&Y.forEach(function(K){K.length>0&&(V+="".concat(K,","))}),y+="".concat(R).concat(U,'{content:"').concat(V,'"}').concat(Nd)},E=0;E<v;E++)x(E);return y})(h)})}return l.registerId=function(o){return Xa(o)},l.prototype.rehydrate=function(){!this.server&&Ws&&p0(this)},l.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new l(nt(nt({},this.options),o),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var c=u.useCSSOMInjection,h=u.target;return u.isServer?new uv(h):c?new ov(h):new cv(h)})(this.options),new tv(o)));var o},l.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},l.prototype.registerName=function(o,u){if(Xa(o),this.names.has(o))this.names.get(o).add(u);else{var c=new Set;c.add(u),this.names.set(o,c)}},l.prototype.insertRules=function(o,u,c){this.registerName(o,u),this.getTag().insertRules(Xa(o),c)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(Xa(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),fv=/&/g,Ja=47;function b0(l){if(l.indexOf("}")===-1)return!1;for(var o=l.length,u=0,c=0,h=!1,m=0;m<o;m++){var p=l.charCodeAt(m);if(c!==0||h||p!==Ja||l.charCodeAt(m+1)!==42)if(h)p===42&&l.charCodeAt(m+1)===Ja&&(h=!1,m++);else if(p!==34&&p!==39||m!==0&&l.charCodeAt(m-1)===92){if(c===0){if(p===123)u++;else if(p===125&&--u<0)return!0}}else c===0?c=p:c===p&&(c=0);else h=!0,m++}return u!==0||c!==0}function dp(l,o){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=dp(u.children,o)),u})}function hv(l){var o,u,c,h=el,m=h.options,p=m===void 0?el:m,v=h.plugins,y=v===void 0?ro:v,x=function(H,Y,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(o):H},E=y.slice();E.push(function(H){H.type===to&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(fv,u).replace(c,x))}),p.prefix&&E.push(Uy),E.push(Ny);var w=function(H,Y,R,U){Y===void 0&&(Y=""),R===void 0&&(R=""),U===void 0&&(U="&"),o=U,u=Y,c=new RegExp("\\".concat(u,"\\b"),"g");var V=(function(G){if(!b0(G))return G;for(var J=G.length,I="",Q=0,_=0,le=0,fe=!1,ue=0;ue<J;ue++){var Ue=G.charCodeAt(ue);if(le!==0||fe||Ue!==Ja||G.charCodeAt(ue+1)!==42)if(fe)Ue===42&&G.charCodeAt(ue+1)===Ja&&(fe=!1,ue++);else if(Ue!==34&&Ue!==39||ue!==0&&G.charCodeAt(ue-1)===92){if(le===0)if(Ue===123)_++;else if(Ue===125){if(--_<0){for(var Me=ue+1;Me<J;){var zt=G.charCodeAt(Me);if(zt===59||zt===10)break;Me++}Me<J&&G.charCodeAt(Me)===59&&Me++,_=0,ue=Me-1,Q=Me;continue}_===0&&(I+=G.substring(Q,ue+1),Q=ue+1)}else Ue===59&&_===0&&(I+=G.substring(Q,ue+1),Q=ue+1)}else le===0?le=Ue:le===Ue&&(le=0);else fe=!0,ue++}if(Q<J){var ft=G.substring(Q);b0(ft)||(I+=ft)}return I})((function(G){if(G.indexOf("//")===-1)return G;for(var J=G.length,I=[],Q=0,_=0,le=0,fe=0;_<J;){var ue=G.charCodeAt(_);if(ue!==34&&ue!==39||_!==0&&G.charCodeAt(_-1)===92)if(le===0)if(ue===40&&_>=3&&(32|G.charCodeAt(_-1))==108&&(32|G.charCodeAt(_-2))==114&&(32|G.charCodeAt(_-3))==117)fe=1,_++;else if(fe>0)ue===41?fe--:ue===40&&fe++,_++;else if(ue===Ja&&_+1<J&&G.charCodeAt(_+1)===Ja){for(_>Q&&I.push(G.substring(Q,_));_<J&&G.charCodeAt(_)!==10;)_++;Q=_}else _++;else _++;else le===0?le=ue:le===ue&&(le=0),_++}return Q===0?G:(Q<J&&I.push(G.substring(Q)),I.join(""))})(H)),K=Dy(R||Y?"".concat(R," ").concat(Y," { ").concat(V," }"):V);p.namespace&&(K=dp(K,p.namespace));var q=[];return Js(K,Hy(E.concat(Ly(function(G){return q.push(G)})))),q};return w.hash=y.length?y.reduce(function(H,Y){return Y.name||Ji(15),Qa(H,Y.name)},5381).toString():"",w}var mv=new Ps,Ed=hv(),Td={shouldForwardProp:void 0,styleSheet:mv,stylis:Ed},fp=vn?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(Td)}}:tt.createContext(Td);fp.Consumer;vn||tt.createContext(void 0);function Ad(){return vn?Td:tt.useContext(fp)}var gv=(function(){function l(o,u){var c=this;this.inject=function(h,m){m===void 0&&(m=Ed);var p=c.name+m.hash;h.hasNameForId(c.id,p)||h.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Ld(this,function(){throw Ji(12,String(c.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=Ed),this.name+o.hash},l})();function pv(l,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in Gy||l.startsWith("--")?String(o).trim():"".concat(o,"px")}var xv=function(l){return l>="A"&&l<="Z"};function y0(l){for(var o="",u=0;u<l.length;u++){var c=l[u];if(u===1&&c==="-"&&l[0]==="-")return l;xv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var hp=function(l){return l==null||l===!1||l===""},mp=function(l){var o=[];for(var u in l){var c=l[u];l.hasOwnProperty(u)&&!hp(c)&&(Array.isArray(c)&&c.isCss||Xi(c)?o.push("".concat(y0(u),":"),c,";"):or(c)?o.push.apply(o,rr(rr(["".concat(u," {")],mp(c),!1),["}"],!1)):o.push("".concat(y0(u),": ").concat(pv(u,c),";")))}return o};function zi(l,o,u,c){if(hp(l))return[];if(Hd(l))return[".".concat(l.styledComponentId)];if(Xi(l)){if(!Xi(m=l)||m.prototype&&m.prototype.isReactComponent||!o)return[l];var h=l(o);return zi(h,o,u,c)}var m;return l instanceof gv?u?(l.inject(u,c),[l.getName(c)]):[l]:or(l)?mp(l):Array.isArray(l)?Array.prototype.concat.apply(ro,l.map(function(p){return zi(p,o,u,c)})):[l.toString()]}function gp(l){for(var o=0;o<l.length;o+=1){var u=l[o];if(Xi(u)&&!Hd(u))return!1}return!0}var bv=ap(lo),yv=(function(){function l(o,u,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&gp(o),this.componentId=u,this.baseHash=Qa(bv,u),this.baseStyle=c,Ps.registerId(u)}return l.prototype.generateAndInjectStyles=function(o,u,c){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))h=Zi(h,this.staticRulesId);else{var m=zd(zi(this.rules,o,u,c)),p=wd(Qa(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var v=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,v)}h=Zi(h,p),this.staticRulesId=p}else{for(var y=Qa(this.baseHash,c.hash),x="",E=0;E<this.rules.length;E++){var w=this.rules[E];if(typeof w=="string")x+=w;else if(w){var H=zd(zi(w,o,u,c));y=Qa(y,H+E),x+=H}}if(x){var Y=wd(y>>>0);if(!u.hasNameForId(this.componentId,Y)){var R=c(x,".".concat(Y),void 0,this.componentId);u.insertRules(this.componentId,Y,R)}h=Zi(h,Y)}}return{className:h,css:typeof window>"u"?u.getTag().getGroup(Xa(this.componentId)):""}},l})(),cr=vn?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(void 0)}}:tt.createContext(void 0);cr.Consumer;function vv(l){if(vn)return l.children;var o=tt.useContext(cr),u=tt.useMemo(function(){return(function(c,h){if(!c)throw Ji(14);if(Xi(c)){var m=c(h);return m}if(Array.isArray(c)||typeof c!="object")throw Ji(8);return h?nt(nt({},h),c):c})(l.theme,o)},[l.theme,o]);return l.children?tt.createElement(cr.Provider,{value:u},l.children):null}var Nu={};function jv(l,o,u){var c=Hd(l),h=l,m=!Ou(l),p=o.attrs,v=p===void 0?ro:p,y=o.componentId,x=y===void 0?(function(J,I){var Q=typeof J!="string"?"sc":d0(J);Nu[Q]=(Nu[Q]||0)+1;var _="".concat(Q,"-").concat(lp(lo+Q+Nu[Q]));return I?"".concat(I,"-").concat(_):_})(o.displayName,o.parentComponentId):y,E=o.displayName,w=E===void 0?(function(J){return Ou(J)?"styled.".concat(J):"Styled(".concat(Zy(J),")")})(l):E,H=o.displayName&&o.componentId?"".concat(d0(o.displayName),"-").concat(o.componentId):o.componentId||x,Y=c&&h.attrs?h.attrs.concat(v).filter(Boolean):v,R=o.shouldForwardProp;if(c&&h.shouldForwardProp){var U=h.shouldForwardProp;if(o.shouldForwardProp){var V=o.shouldForwardProp;R=function(J,I){return U(J,I)&&V(J,I)}}else R=U}var K=new yv(u,H,c?h.componentStyle:void 0);function q(J,I){return(function(Q,_,le){var fe=Q.attrs,ue=Q.componentStyle,Ue=Q.defaultProps,Me=Q.foldedComponentIds,zt=Q.styledComponentId,ft=Q.target,_t=vn?void 0:tt.useContext(cr),D=Ad(),$=Q.shouldForwardProp||D.shouldForwardProp,te=np(_,_t,Ue)||el,de=(function(Ke,Ee,fn){for(var hn,Et=nt(nt({},Ee),{className:void 0,theme:fn}),Fi=0;Fi<Ke.length;Fi+=1){var Yt=Xi(hn=Ke[Fi])?hn(Et):hn;for(var mn in Yt)mn==="className"?Et.className=Zi(Et.className,Yt[mn]):mn==="style"?Et.style=nt(nt({},Et.style),Yt[mn]):Et[mn]=Yt[mn]}return"className"in Ee&&typeof Ee.className=="string"&&(Et.className=Zi(Et.className,Ee.className)),Et})(fe,_,te),ye=de.as||ft,S={};for(var O in de)de[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&de.theme===te||(O==="forwardedAs"?S.as=de.forwardedAs:$&&!$(O,ye)||(S[O]=de[O]));var Z=(function(Ke,Ee){var fn=Ad(),hn=Ke.generateAndInjectStyles(Ee,fn.styleSheet,fn.stylis);return hn})(ue,de),X=Z.className,ie=Z.css,se=Zi(Me,zt);X&&(se+=" "+X),de.className&&(se+=" "+de.className),S[Ou(ye)&&!ip.has(ye)?"class":"className"]=se,le&&(S.ref=le);var be=k.createElement(ye,S);return vn&&ie?tt.createElement(tt.Fragment,null,tt.createElement("style",{precedence:"styled-components",href:"sc-".concat(zt,"-").concat(X),children:ie}),be):be})(G,J,I)}q.displayName=w;var G=tt.forwardRef(q);return G.attrs=Y,G.componentStyle=K,G.displayName=w,G.shouldForwardProp=R,G.foldedComponentIds=c?Zi(h.foldedComponentIds,h.styledComponentId):"",G.styledComponentId=H,G.target=c?h.target:l,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?(function(I){for(var Q=[],_=1;_<arguments.length;_++)Q[_-1]=arguments[_];for(var le=0,fe=Q;le<fe.length;le++)_d(I,fe[le],!0);return I})({},h.defaultProps,J):J}}),Ld(G,function(){return".".concat(G.styledComponentId)}),m&&cp(G,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function v0(l,o){for(var u=[l[0]],c=0,h=o.length;c<h;c+=1)u.push(o[c],l[c+1]);return u}var j0=function(l){return Object.assign(l,{isCss:!0})};function pp(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(Xi(l)||or(l))return j0(zi(v0(ro,rr([l],o,!0))));var c=l;return o.length===0&&c.length===1&&typeof c[0]=="string"?zi(c):j0(zi(v0(c,o)))}function Cd(l,o,u){if(u===void 0&&(u=el),!o)throw Ji(1,o);var c=function(h){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return l(o,u,pp.apply(void 0,rr([h],m,!1)))};return c.attrs=function(h){return Cd(l,o,nt(nt({},u),{attrs:Array.prototype.concat(u.attrs,h).filter(Boolean)}))},c.withConfig=function(h){return Cd(l,o,nt(nt({},u),h))},c}var xp=function(l){return Cd(jv,l)},f=xp;ip.forEach(function(l){f[l]=xp(l)});var Sv=(function(){function l(o,u){this.rules=o,this.componentId=u,this.isStatic=gp(o),Ps.registerId(this.componentId+1)}return l.prototype.createStyles=function(o,u,c,h){var m=h(zd(zi(this.rules,u,c,h)),""),p=this.componentId+o;c.insertRules(p,p,m)},l.prototype.removeStyles=function(o,u){u.clearRules(this.componentId+o)},l.prototype.renderStyles=function(o,u,c,h){o>2&&Ps.registerId(this.componentId+o);var m=this.componentId+o;this.isStatic?c.hasNameForId(m,m)||this.createStyles(o,u,c,h):(this.removeStyles(o,c),this.createStyles(o,u,c,h))},l})();function wv(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=pp.apply(void 0,rr([l],o,!1)),h="sc-global-".concat(lp(JSON.stringify(c))),m=new Sv(c,h),p=new WeakMap,v=function(y){var x=Ad(),E=vn?void 0:tt.useContext(cr),w=p.get(x.styleSheet);if(w===void 0&&(w=x.styleSheet.allocateGSInstance(h),p.set(x.styleSheet,w)),(typeof window>"u"||!x.styleSheet.server)&&(function(V,K,q,G,J){if(m.isStatic)m.renderStyles(V,Yy,q,J);else{var I=nt(nt({},K),{theme:np(K,G,v.defaultProps)});m.renderStyles(V,I,q,J)}})(w,y,x.styleSheet,E,x.stylis),!vn){var H=tt.useRef(!0);tt.useLayoutEffect(function(){return H.current=!1,function(){H.current=!0,queueMicrotask(function(){H.current&&(m.removeStyles(w,x.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(h,'"]')).forEach(function(V){return V.remove()}))})}},[w,x.styleSheet])}if(vn){var Y=h+w,R=typeof window>"u"?x.styleSheet.getTag().getGroup(Xa(Y)):"";if(R){var U="".concat(h,"-").concat(w);return tt.createElement("style",{key:U,"data-styled-global":h,precedence:"styled-components",href:U,children:R})}}return null};return tt.memo(v)}var S0="popstate";function zv(l={}){function o(c,h){let{pathname:m,search:p,hash:v}=c.location;return kd("",{pathname:m,search:p,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function u(c,h){return typeof h=="string"?h:ur(h)}return Ev(o,u,null,l)}function Le(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Gt(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function _v(){return Math.random().toString(36).substring(2,10)}function w0(l,o){return{usr:l.state,key:l.key,idx:o}}function kd(l,o,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?nl(o):o,state:u,key:o&&o.key||c||_v()}}function ur({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function nl(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function Ev(l,o,u,c={}){let{window:h=document.defaultView,v5Compat:m=!1}=c,p=h.history,v="POP",y=null,x=E();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function E(){return(p.state||{idx:null}).idx}function w(){v="POP";let V=E(),K=V==null?null:V-x;x=V,y&&y({action:v,location:U.location,delta:K})}function H(V,K){v="PUSH";let q=kd(U.location,V,K);x=E()+1;let G=w0(q,x),J=U.createHref(q);try{p.pushState(G,"",J)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;h.location.assign(J)}m&&y&&y({action:v,location:U.location,delta:1})}function Y(V,K){v="REPLACE";let q=kd(U.location,V,K);x=E();let G=w0(q,x),J=U.createHref(q);p.replaceState(G,"",J),m&&y&&y({action:v,location:U.location,delta:0})}function R(V){return Tv(V)}let U={get action(){return v},get location(){return l(h,p)},listen(V){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(S0,w),y=V,()=>{h.removeEventListener(S0,w),y=null}},createHref(V){return o(h,V)},createURL:R,encodeLocation(V){let K=R(V);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:H,replace:Y,go(V){return p.go(V)}};return U}function Tv(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Le(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:ur(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function bp(l,o,u="/"){return Av(l,o,u,!1)}function Av(l,o,u,c){let h=typeof o=="string"?nl(o):o,m=Xn(h.pathname||"/",u);if(m==null)return null;let p=yp(l);Cv(p);let v=null;for(let y=0;v==null&&y<p.length;++y){let x=Gv(m);v=Lv(p[y],x,c)}return v}function yp(l,o=[],u=[],c="",h=!1){let m=(p,v,y=h,x)=>{let E={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&y)return;Le(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let w=$n([c,E.relativePath]),H=u.concat(E);p.children&&p.children.length>0&&(Le(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),yp(p.children,o,H,w,y)),!(p.path==null&&!p.index)&&o.push({path:w,score:Nv(w,p.index),routesMeta:H})};return l.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))m(p,v);else for(let y of vp(p.path))m(p,v,!0,y)}),o}function vp(l){let o=l.split("/");if(o.length===0)return[];let[u,...c]=o,h=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return h?[m,""]:[m];let p=vp(c.join("/")),v=[];return v.push(...p.map(y=>y===""?m:[m,y].join("/"))),h&&v.push(...p),v.map(y=>l.startsWith("/")&&y===""?"/":y)}function Cv(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Hv(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var kv=/^:[\w-]+$/,Mv=3,Rv=2,Bv=1,Dv=10,Ov=-2,z0=l=>l==="*";function Nv(l,o){let u=l.split("/"),c=u.length;return u.some(z0)&&(c+=Ov),o&&(c+=Rv),u.filter(h=>!z0(h)).reduce((h,m)=>h+(kv.test(m)?Mv:m===""?Bv:Dv),c)}function Hv(l,o){return l.length===o.length&&l.slice(0,-1).every((c,h)=>c===o[h])?l[l.length-1]-o[o.length-1]:0}function Lv(l,o,u=!1){let{routesMeta:c}=l,h={},m="/",p=[];for(let v=0;v<c.length;++v){let y=c[v],x=v===c.length-1,E=m==="/"?o:o.slice(m.length)||"/",w=Is({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},E),H=y.route;if(!w&&x&&u&&!c[c.length-1].route.index&&(w=Is({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!w)return null;Object.assign(h,w.params),p.push({params:h,pathname:$n([m,w.pathname]),pathnameBase:Kv($n([m,w.pathnameBase])),route:H}),w.pathnameBase!=="/"&&(m=$n([m,w.pathnameBase]))}return p}function Is(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=Uv(l.path,l.caseSensitive,l.end),h=o.match(u);if(!h)return null;let m=h[0],p=m.replace(/(.)\/+$/,"$1"),v=h.slice(1);return{params:c.reduce((x,{paramName:E,isOptional:w},H)=>{if(E==="*"){let R=v[H]||"";p=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const Y=v[H];return w&&!Y?x[E]=void 0:x[E]=(Y||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:l}}function Uv(l,o=!1,u=!0){Gt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],h="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,y)=>(c.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),h+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?h+="\\/*$":l!==""&&l!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),c]}function Gv(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Gt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function Xn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}var jp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vv=l=>jp.test(l);function Yv(l,o="/"){let{pathname:u,search:c="",hash:h=""}=typeof l=="string"?nl(l):l,m;if(u)if(Vv(u))m=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),Gt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?m=_0(u.substring(1),"/"):m=_0(u,o)}else m=o;return{pathname:m,search:$v(c),hash:Zv(h)}}function _0(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(h=>{h===".."?u.length>1&&u.pop():h!=="."&&u.push(h)}),u.length>1?u.join("/"):"/"}function Hu(l,o,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qv(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Ud(l){let o=qv(l);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Gd(l,o,u,c=!1){let h;typeof l=="string"?h=nl(l):(h={...l},Le(!h.pathname||!h.pathname.includes("?"),Hu("?","pathname","search",h)),Le(!h.pathname||!h.pathname.includes("#"),Hu("#","pathname","hash",h)),Le(!h.search||!h.search.includes("#"),Hu("#","search","hash",h)));let m=l===""||h.pathname==="",p=m?"/":h.pathname,v;if(p==null)v=u;else{let w=o.length-1;if(!c&&p.startsWith("..")){let H=p.split("/");for(;H[0]==="..";)H.shift(),w-=1;h.pathname=H.join("/")}v=w>=0?o[w]:"/"}let y=Yv(h,v),x=p&&p!=="/"&&p.endsWith("/"),E=(m||p===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(x||E)&&(y.pathname+="/"),y}var $n=l=>l.join("/").replace(/\/\/+/g,"/"),Kv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Zv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Qv=class{constructor(l,o,u,c=!1){this.status=l,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Xv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Jv(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Sp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wp(l,o){let u=l;if(typeof u!="string"||!jp.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,h=!1;if(Sp)try{let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u),v=Xn(p.pathname,o);p.origin===m.origin&&v!=null?u=v+p.search+p.hash:h=!0}catch{Gt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zp=["POST","PUT","PATCH","DELETE"];new Set(zp);var Wv=["GET",...zp];new Set(Wv);var il=k.createContext(null);il.displayName="DataRouter";var so=k.createContext(null);so.displayName="DataRouterState";var Fv=k.createContext(!1),_p=k.createContext({isTransitioning:!1});_p.displayName="ViewTransition";var Pv=k.createContext(new Map);Pv.displayName="Fetchers";var Iv=k.createContext(null);Iv.displayName="Await";var Vt=k.createContext(null);Vt.displayName="Navigation";var dr=k.createContext(null);dr.displayName="Location";var jn=k.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var Vd=k.createContext(null);Vd.displayName="RouteError";var Ep="REACT_ROUTER_ERROR",ej="REDIRECT",tj="ROUTE_ERROR_RESPONSE";function nj(l){if(l.startsWith(`${Ep}:${ej}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function ij(l){if(l.startsWith(`${Ep}:${tj}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Qv(o.status,o.statusText,o.data)}catch{}}function aj(l,{relative:o}={}){Le(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=k.useContext(Vt),{hash:h,pathname:m,search:p}=fr(l,{relative:o}),v=m;return u!=="/"&&(v=m==="/"?u:$n([u,m])),c.createHref({pathname:v,search:p,hash:h})}function al(){return k.useContext(dr)!=null}function Sn(){return Le(al(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(dr).location}var Tp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ap(l){k.useContext(Vt).static||k.useLayoutEffect(l)}function Yd(){let{isDataRoute:l}=k.useContext(jn);return l?xj():lj()}function lj(){Le(al(),"useNavigate() may be used only in the context of a <Router> component.");let l=k.useContext(il),{basename:o,navigator:u}=k.useContext(Vt),{matches:c}=k.useContext(jn),{pathname:h}=Sn(),m=JSON.stringify(Ud(c)),p=k.useRef(!1);return Ap(()=>{p.current=!0}),k.useCallback((y,x={})=>{if(Gt(p.current,Tp),!p.current)return;if(typeof y=="number"){u.go(y);return}let E=Gd(y,JSON.parse(m),h,x.relative==="path");l==null&&o!=="/"&&(E.pathname=E.pathname==="/"?o:$n([o,E.pathname])),(x.replace?u.replace:u.push)(E,x.state,x)},[o,u,m,h,l])}k.createContext(null);function fr(l,{relative:o}={}){let{matches:u}=k.useContext(jn),{pathname:c}=Sn(),h=JSON.stringify(Ud(u));return k.useMemo(()=>Gd(l,JSON.parse(h),c,o==="path"),[l,h,c,o])}function rj(l,o){return Cp(l,o)}function Cp(l,o,u,c,h){Le(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=k.useContext(Vt),{matches:p}=k.useContext(jn),v=p[p.length-1],y=v?v.params:{},x=v?v.pathname:"/",E=v?v.pathnameBase:"/",w=v&&v.route;{let q=w&&w.path||"";Mp(x,!w||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let H=Sn(),Y;if(o){let q=typeof o=="string"?nl(o):o;Le(E==="/"||q.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${q.pathname}" was given in the \`location\` prop.`),Y=q}else Y=H;let R=Y.pathname||"/",U=R;if(E!=="/"){let q=E.replace(/^\//,"").split("/");U="/"+R.replace(/^\//,"").split("/").slice(q.length).join("/")}let V=bp(l,{pathname:U});Gt(w||V!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),Gt(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=dj(V&&V.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:$n([E,m.encodeLocation?m.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?E:$n([E,m.encodeLocation?m.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),p,u,c,h);return o&&K?k.createElement(dr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},K):K}function sj(){let l=pj(),o=Xv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},o),u?k.createElement("pre",{style:h},u):null,p)}var oj=k.createElement(sj,null),kp=class extends k.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=ij(l.digest);u&&(l=u)}let o=l!==void 0?k.createElement(jn.Provider,{value:this.props.routeContext},k.createElement(Vd.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?k.createElement(cj,{error:l},o):o}};kp.contextType=Fv;var Lu=new WeakMap;function cj({children:l,error:o}){let{basename:u}=k.useContext(Vt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=nj(o.digest);if(c){let h=Lu.get(o);if(h)throw h;let m=wp(c.location,u);if(Sp&&!Lu.get(o))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Lu.set(o,p),p}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return l}function uj({routeContext:l,match:o,children:u}){let c=k.useContext(il);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),k.createElement(jn.Provider,{value:l},u)}function dj(l,o=[],u=null,c=null,h=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let m=l,p=u?.errors;if(p!=null){let E=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Le(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,E+1))}let v=!1,y=-1;if(u)for(let E=0;E<m.length;E++){let w=m[E];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=E),w.route.id){let{loaderData:H,errors:Y}=u,R=w.route.loader&&!H.hasOwnProperty(w.route.id)&&(!Y||Y[w.route.id]===void 0);if(w.route.lazy||R){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let x=u&&c?(E,w)=>{c(E,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Jv(u.matches),errorInfo:w})}:void 0;return m.reduceRight((E,w,H)=>{let Y,R=!1,U=null,V=null;u&&(Y=p&&w.route.id?p[w.route.id]:void 0,U=w.route.errorElement||oj,v&&(y<0&&H===0?(Mp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,V=null):y===H&&(R=!0,V=w.route.hydrateFallbackElement||null)));let K=o.concat(m.slice(0,H+1)),q=()=>{let G;return Y?G=U:R?G=V:w.route.Component?G=k.createElement(w.route.Component,null):w.route.element?G=w.route.element:G=E,k.createElement(uj,{match:w,routeContext:{outlet:E,matches:K,isDataRoute:u!=null},children:G})};return u&&(w.route.ErrorBoundary||w.route.errorElement||H===0)?k.createElement(kp,{location:u.location,revalidation:u.revalidation,component:U,error:Y,children:q(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:x}):q()},null)}function qd(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fj(l){let o=k.useContext(il);return Le(o,qd(l)),o}function hj(l){let o=k.useContext(so);return Le(o,qd(l)),o}function mj(l){let o=k.useContext(jn);return Le(o,qd(l)),o}function Kd(l){let o=mj(l),u=o.matches[o.matches.length-1];return Le(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function gj(){return Kd("useRouteId")}function pj(){let l=k.useContext(Vd),o=hj("useRouteError"),u=Kd("useRouteError");return l!==void 0?l:o.errors?.[u]}function xj(){let{router:l}=fj("useNavigate"),o=Kd("useNavigate"),u=k.useRef(!1);return Ap(()=>{u.current=!0}),k.useCallback(async(h,m={})=>{Gt(u.current,Tp),u.current&&(typeof h=="number"?await l.navigate(h):await l.navigate(h,{fromRouteId:o,...m}))},[l,o])}var E0={};function Mp(l,o,u){!o&&!E0[l]&&(E0[l]=!0,Gt(!1,u))}k.memo(bj);function bj({routes:l,future:o,state:u,onError:c}){return Cp(l,void 0,u,c,o)}function Zs({to:l,replace:o,state:u,relative:c}){Le(al(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=k.useContext(Vt);Gt(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=k.useContext(jn),{pathname:p}=Sn(),v=Yd(),y=Gd(l,Ud(m),p,c==="path"),x=JSON.stringify(y);return k.useEffect(()=>{v(JSON.parse(x),{replace:o,state:u,relative:c})},[v,x,c,o,u]),null}function qn(l){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yj({basename:l="/",children:o=null,location:u,navigationType:c="POP",navigator:h,static:m=!1,unstable_useTransitions:p}){Le(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:v,navigator:h,static:m,unstable_useTransitions:p,future:{}}),[v,h,m,p]);typeof u=="string"&&(u=nl(u));let{pathname:x="/",search:E="",hash:w="",state:H=null,key:Y="default"}=u,R=k.useMemo(()=>{let U=Xn(x,v);return U==null?null:{location:{pathname:U,search:E,hash:w,state:H,key:Y},navigationType:c}},[v,x,E,w,H,Y,c]);return Gt(R!=null,`<Router basename="${v}"> is not able to match the URL "${x}${E}${w}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:k.createElement(Vt.Provider,{value:y},k.createElement(dr.Provider,{children:o,value:R}))}function vj({children:l,location:o}){return rj(Md(l),o)}function Md(l,o=[]){let u=[];return k.Children.forEach(l,(c,h)=>{if(!k.isValidElement(c))return;let m=[...o,h];if(c.type===k.Fragment){u.push.apply(u,Md(c.props.children,m));return}Le(c.type===qn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=Md(c.props.children,m)),u.push(p)}),u}var Qs="get",Xs="application/x-www-form-urlencoded";function oo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function jj(l){return oo(l)&&l.tagName.toLowerCase()==="button"}function Sj(l){return oo(l)&&l.tagName.toLowerCase()==="form"}function wj(l){return oo(l)&&l.tagName.toLowerCase()==="input"}function zj(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function _j(l,o){return l.button===0&&(!o||o==="_self")&&!zj(l)}function Rd(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((o,u)=>{let c=l[u];return o.concat(Array.isArray(c)?c.map(h=>[u,h]):[[u,c]])},[]))}function Ej(l,o){let u=Rd(l);return o&&o.forEach((c,h)=>{u.has(h)||o.getAll(h).forEach(m=>{u.append(h,m)})}),u}var ks=null;function Tj(){if(ks===null)try{new FormData(document.createElement("form"),0),ks=!1}catch{ks=!0}return ks}var Aj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(l){return l!=null&&!Aj.has(l)?(Gt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xs}"`),null):l}function Cj(l,o){let u,c,h,m,p;if(Sj(l)){let v=l.getAttribute("action");c=v?Xn(v,o):null,u=l.getAttribute("method")||Qs,h=Uu(l.getAttribute("enctype"))||Xs,m=new FormData(l)}else if(jj(l)||wj(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||v.getAttribute("action");if(c=y?Xn(y,o):null,u=l.getAttribute("formmethod")||v.getAttribute("method")||Qs,h=Uu(l.getAttribute("formenctype"))||Uu(v.getAttribute("enctype"))||Xs,m=new FormData(v,l),!Tj()){let{name:x,type:E,value:w}=l;if(E==="image"){let H=x?`${x}.`:"";m.append(`${H}x`,"0"),m.append(`${H}y`,"0")}else x&&m.append(x,w)}}else{if(oo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Qs,c=null,h=Xs,p=l}return m&&h==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:h,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function kj(l,o,u,c){let h=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:o&&Xn(h.pathname,o)==="/"?h.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function Mj(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rj(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Bj(l,o,u){let c=await Promise.all(l.map(async h=>{let m=o.routes[h.route.id];if(m){let p=await Mj(m,u);return p.links?p.links():[]}return[]}));return Hj(c.flat(1).filter(Rj).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function T0(l,o,u,c,h,m){let p=(y,x)=>u[x]?y.route.id!==u[x].route.id:!0,v=(y,x)=>u[x].pathname!==y.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,x)=>p(y,x)||v(y,x)):m==="data"?o.filter((y,x)=>{let E=c.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(p(y,x)||v(y,x))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Dj(l,o,{includeHydrateFallback:u}={}){return Oj(l.map(c=>{let h=o.routes[c.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),u&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function Oj(l){return[...new Set(l)]}function Nj(l){let o={},u=Object.keys(l).sort();for(let c of u)o[c]=l[c];return o}function Hj(l,o){let u=new Set;return new Set(o),l.reduce((c,h)=>{let m=JSON.stringify(Nj(h));return u.has(m)||(u.add(m),c.push({key:m,link:h})),c},[])}function Rp(){let l=k.useContext(il);return $d(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Lj(){let l=k.useContext(so);return $d(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Zd=k.createContext(void 0);Zd.displayName="FrameworkContext";function Bp(){let l=k.useContext(Zd);return $d(l,"You must render this element inside a <HydratedRouter> element"),l}function Uj(l,o){let u=k.useContext(Zd),[c,h]=k.useState(!1),[m,p]=k.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:x,onMouseLeave:E,onTouchStart:w}=o,H=k.useRef(null);k.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let U=K=>{K.forEach(q=>{p(q.isIntersecting)})},V=new IntersectionObserver(U,{threshold:.5});return H.current&&V.observe(H.current),()=>{V.disconnect()}}},[l]),k.useEffect(()=>{if(c){let U=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(U)}}},[c]);let Y=()=>{h(!0)},R=()=>{h(!1),p(!1)};return u?l!=="intent"?[m,H,{}]:[m,H,{onFocus:Il(v,Y),onBlur:Il(y,R),onMouseEnter:Il(x,Y),onMouseLeave:Il(E,R),onTouchStart:Il(w,Y)}]:[!1,H,{}]}function Il(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function Gj({page:l,...o}){let{router:u}=Rp(),c=k.useMemo(()=>bp(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?k.createElement(Yj,{page:l,matches:c,...o}):null}function Vj(l){let{manifest:o,routeModules:u}=Bp(),[c,h]=k.useState([]);return k.useEffect(()=>{let m=!1;return Bj(l,o,u).then(p=>{m||h(p)}),()=>{m=!0}},[l,o,u]),c}function Yj({page:l,matches:o,...u}){let c=Sn(),{future:h,manifest:m,routeModules:p}=Bp(),{basename:v}=Rp(),{loaderData:y,matches:x}=Lj(),E=k.useMemo(()=>T0(l,o,x,m,c,"data"),[l,o,x,m,c]),w=k.useMemo(()=>T0(l,o,x,m,c,"assets"),[l,o,x,m,c]),H=k.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let U=new Set,V=!1;if(o.forEach(q=>{let G=m.routes[q.route.id];!G||!G.hasLoader||(!E.some(J=>J.route.id===q.route.id)&&q.route.id in y&&p[q.route.id]?.shouldRevalidate||G.hasClientLoader?V=!0:U.add(q.route.id))}),U.size===0)return[];let K=kj(l,v,h.unstable_trailingSlashAwareDataRequests,"data");return V&&U.size>0&&K.searchParams.set("_routes",o.filter(q=>U.has(q.route.id)).map(q=>q.route.id).join(",")),[K.pathname+K.search]},[v,h.unstable_trailingSlashAwareDataRequests,y,c,m,E,o,l,p]),Y=k.useMemo(()=>Dj(w,m),[w,m]),R=Vj(w);return k.createElement(k.Fragment,null,H.map(U=>k.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...u})),Y.map(U=>k.createElement("link",{key:U,rel:"modulepreload",href:U,...u})),R.map(({key:U,link:V})=>k.createElement("link",{key:U,nonce:u.nonce,...V})))}function qj(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Kj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kj&&(window.__reactRouterVersion="7.12.0")}catch{}function $j({basename:l,children:o,unstable_useTransitions:u,window:c}){let h=k.useRef();h.current==null&&(h.current=zv({window:c,v5Compat:!0}));let m=h.current,[p,v]=k.useState({action:m.action,location:m.location}),y=k.useCallback(x=>{u===!1?v(x):k.startTransition(()=>v(x))},[u]);return k.useLayoutEffect(()=>m.listen(y),[m,y]),k.createElement(yj,{basename:l,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:u})}var Dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,co=k.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:h,reloadDocument:m,replace:p,state:v,target:y,to:x,preventScrollReset:E,viewTransition:w,unstable_defaultShouldRevalidate:H,...Y},R){let{basename:U,unstable_useTransitions:V}=k.useContext(Vt),K=typeof x=="string"&&Dp.test(x),q=wp(x,U);x=q.to;let G=aj(x,{relative:h}),[J,I,Q]=Uj(c,Y),_=Jj(x,{replace:p,state:v,target:y,preventScrollReset:E,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:H,unstable_useTransitions:V});function le(ue){o&&o(ue),ue.defaultPrevented||_(ue)}let fe=k.createElement("a",{...Y,...Q,href:q.absoluteURL||G,onClick:q.isExternal||m?o:le,ref:qj(R,I),target:y,"data-discover":!K&&u==="render"?"true":void 0});return J&&!K?k.createElement(k.Fragment,null,fe,k.createElement(Gj,{page:G})):fe});co.displayName="Link";var Zj=k.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:h=!1,style:m,to:p,viewTransition:v,children:y,...x},E){let w=fr(p,{relative:x.relative}),H=Sn(),Y=k.useContext(so),{navigator:R,basename:U}=k.useContext(Vt),V=Y!=null&&e5(w)&&v===!0,K=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,q=H.pathname,G=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;u||(q=q.toLowerCase(),G=G?G.toLowerCase():null,K=K.toLowerCase()),G&&U&&(G=Xn(G,U)||G);const J=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let I=q===K||!h&&q.startsWith(K)&&q.charAt(J)==="/",Q=G!=null&&(G===K||!h&&G.startsWith(K)&&G.charAt(K.length)==="/"),_={isActive:I,isPending:Q,isTransitioning:V},le=I?o:void 0,fe;typeof c=="function"?fe=c(_):fe=[c,I?"active":null,Q?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let ue=typeof m=="function"?m(_):m;return k.createElement(co,{...x,"aria-current":le,className:fe,ref:E,style:ue,to:p,viewTransition:v},typeof y=="function"?y(_):y)});Zj.displayName="NavLink";var Qj=k.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:h,state:m,method:p=Qs,action:v,onSubmit:y,relative:x,preventScrollReset:E,viewTransition:w,unstable_defaultShouldRevalidate:H,...Y},R)=>{let{unstable_useTransitions:U}=k.useContext(Vt),V=Pj(),K=Ij(v,{relative:x}),q=p.toLowerCase()==="get"?"get":"post",G=typeof v=="string"&&Dp.test(v),J=I=>{if(y&&y(I),I.defaultPrevented)return;I.preventDefault();let Q=I.nativeEvent.submitter,_=Q?.getAttribute("formmethod")||p,le=()=>V(Q||I.currentTarget,{fetcherKey:o,method:_,navigate:u,replace:h,state:m,relative:x,preventScrollReset:E,viewTransition:w,unstable_defaultShouldRevalidate:H});U&&u!==!1?k.startTransition(()=>le()):le()};return k.createElement("form",{ref:R,method:q,action:K,onSubmit:c?y:J,...Y,"data-discover":!G&&l==="render"?"true":void 0})});Qj.displayName="Form";function Xj(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Op(l){let o=k.useContext(il);return Le(o,Xj(l)),o}function Jj(l,{target:o,replace:u,state:c,preventScrollReset:h,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y}={}){let x=Yd(),E=Sn(),w=fr(l,{relative:m});return k.useCallback(H=>{if(_j(H,o)){H.preventDefault();let Y=u!==void 0?u:ur(E)===ur(w),R=()=>x(l,{replace:Y,state:c,preventScrollReset:h,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:v});y?k.startTransition(()=>R()):R()}},[E,x,w,u,c,o,l,h,m,p,v,y])}function Np(l){Gt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=k.useRef(Rd(l)),u=k.useRef(!1),c=Sn(),h=k.useMemo(()=>Ej(c.search,u.current?null:o.current),[c.search]),m=Yd(),p=k.useCallback((v,y)=>{const x=Rd(typeof v=="function"?v(new URLSearchParams(h)):v);u.current=!0,m("?"+x,y)},[m,h]);return[h,p]}var Wj=0,Fj=()=>`__${String(++Wj)}__`;function Pj(){let{router:l}=Op("useSubmit"),{basename:o}=k.useContext(Vt),u=gj(),c=l.fetch,h=l.navigate;return k.useCallback(async(m,p={})=>{let{action:v,method:y,encType:x,formData:E,body:w}=Cj(m,o);if(p.navigate===!1){let H=p.fetcherKey||Fj();await c(H,u,p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:w,formMethod:p.method||y,formEncType:p.encType||x,flushSync:p.flushSync})}else await h(p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:w,formMethod:p.method||y,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,h,o,u])}function Ij(l,{relative:o}={}){let{basename:u}=k.useContext(Vt),c=k.useContext(jn);Le(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),m={...fr(l||".",{relative:o})},p=Sn();if(l==null){m.search=p.search;let v=new URLSearchParams(m.search),y=v.getAll("index");if(y.some(E=>E==="")){v.delete("index"),y.filter(w=>w).forEach(w=>v.append("index",w));let E=v.toString();m.search=E?`?${E}`:""}}return(!l||l===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:$n([u,m.pathname])),ur(m)}function e5(l,{relative:o}={}){let u=k.useContext(_p);Le(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Op("useViewTransitionState"),h=fr(l,{relative:o});if(!u.isTransitioning)return!1;let m=Xn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Xn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Is(h.pathname,p)!=null||Is(h.pathname,m)!=null}const t5="/assets/logo-BY-LKRi7.png",n5=f.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,i5=f.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,a5=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,l5=f.img`
  height: 40px;
  width: auto;
`,r5=f.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,s5=f.div`
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
`,Gu=f(co)`
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
`,o5=f.button`
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
`;function er(){const l=Sn(),[o,u]=k.useState(!1);return a.jsx(n5,{children:a.jsxs(i5,{children:[a.jsx(Gu,{to:"/",onClick:()=>u(!1),children:a.jsxs(a5,{children:[a.jsx(l5,{src:t5,alt:"SCKW Logo"}),a.jsx(r5,{children:"SC Konstanz-Wollmatingen e. V."})]})}),a.jsxs(o5,{"aria-label":"Menü öffnen/schließen","aria-expanded":o,"aria-controls":"mobile-nav",onClick:()=>u(h=>!h),children:["Menü",a.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),a.jsxs(s5,{id:"mobile-nav",$open:o,children:[a.jsx(Gu,{to:"/sponsoring",$active:l.pathname==="/sponsoring"||l.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),a.jsx(Gu,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const c5=f.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Vu=f.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,u5=f(co)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,d5=f.div`
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
`,f5=f.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Qd(){return a.jsx(c5,{children:a.jsxs(d5,{children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",a.jsx(Vu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),a.jsxs(f5,{"aria-label":"Rechtliches",children:[a.jsx(u5,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),a.jsx(Vu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),a.jsx(Vu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Zn=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),h5=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,m5=f.div`
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
`,g5=f.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,p5=f.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,x5=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,b5=f.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,y5=f.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,v5=f.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,j5=f.li`
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
`,S5=f.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,w5=f.span`
  flex: 1;
`,z5=f.a`
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
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }
`,_5=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,E5=f.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,T5=f.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,A5=f.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,C5=f.a`
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
`,k5="sponsoring@sckw.de";function Wa({packages:l}){const o=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const v=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},c=p=>{const v=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${k5}?subject=${y}&body=${x}`},h=p=>{const v=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},m=l.filter(p=>!p.title.includes("Platz-Renovierung"));return a.jsx(h5,{children:m.map((p,v)=>{const{isFullyBooked:y}=h(p),x=o(p.status),E=x==="vergeben"||y,w=y?"vergeben":x,H=p.keyBenefits||[];return a.jsxs(m5,{isVergeben:E,children:[a.jsxs(g5,{children:[a.jsx(p5,{children:u(p.title)}),a.jsx(x5,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!E&&a.jsx(b5,{children:p.price}),a.jsx(y5,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),E&&p.sponsors&&p.sponsors.length>0?a.jsxs(_5,{children:[p.sponsors[0].image&&a.jsx(E5,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),a.jsx(T5,{children:p.sponsors[0].name}),a.jsxs(A5,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&a.jsx(C5,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):a.jsx(v5,{children:H.map((Y,R)=>a.jsxs(j5,{isHighlight:Y.highlight,children:[a.jsx(S5,{children:Y.icon}),a.jsx(w5,{children:Y.text})]},R))}),a.jsx(z5,{href:E?void 0:c(p.title),isVergeben:E,children:E?"Vergeben":"Jetzt anfragen"})]},v)})})}const M5=f.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,R5=f.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,B5=f.button`
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
`,D5=f.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,O5=f.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,N5=f.div`
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
`,H5=f.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,L5=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:a.jsx(a.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function U5(){const[l,o]=k.useState([]),u=h=>{o(m=>m.includes(h)?m.filter(p=>p!==h):[...m,h])},c=(h,m)=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),u(m))};return a.jsx(M5,{children:L5.map(h=>{const m=l.includes(h.id);return a.jsxs(R5,{children:[a.jsxs(B5,{isOpen:m,onClick:()=>u(h.id),onKeyDown:p=>c(p,h.id),"aria-expanded":m,"aria-controls":`accordion-content-${h.id}`,children:[a.jsxs("span",{children:[a.jsx(H5,{children:h.icon}),h.title]}),a.jsx(D5,{isOpen:m,children:"▼"})]}),a.jsx(O5,{isOpen:m,id:`accordion-content-${h.id}`,role:"region","aria-labelledby":`accordion-header-${h.id}`,children:a.jsx(N5,{children:h.content})})]},h.id)})})}const Hp="/assets/cheerleading_0-DQQGXi0R.jpg",Lp="/assets/cheerleading_1-NkLBARmH.jpg",Up="/assets/cheerleading_2-CrezcZYL.jpg",Gp="/assets/cheerleading_3-GN5rPHNN.jpg",Vp="/assets/1-ClVWb4ei.png",Yp="/assets/10-Bwp2eIye.png",qp="/assets/11-W061sOUI.png",Kp="/assets/12-TjJyzl8L.png",$p="/assets/13-ChUUCdQQ.png",Zp="/assets/14-BVhdRr98.png",Qp="/assets/2-CcfgIQYe.png",Xp="/assets/3-DYiPkVd7.png",Jp="/assets/4-1upoqVoS.png",Wp="/assets/5-D0tadXAC.png",Fp="/assets/6-NJ4ELm_j.png",Pp="/assets/7-BXo4_Bcj.png",Ip="/assets/8-BbOqEnj_.png",ex="/assets/9-CIK0gi9o.png",tx="/assets/herren_0-BVVgyt1l.jpg",nx="/assets/herren_1-B8ywOnNy.jpg",ix="/assets/herren_10-DPVQsg9B.jpg",ax="/assets/herren_11-wfWG62H3.jpg",lx="/assets/herren_12-DEJSN2zG.jpg",rx="/assets/herren_13-F52vdukE.jpg",sx="/assets/herren_14-Cq9hoKfG.jpg",ox="/assets/herren_15-aYIFGauG.jpg",cx="/assets/herren_16-NYI2EaEN.jpg",ux="/assets/herren_17-B_52ysA2.jpg",dx="/assets/herren_18-DbwjVNKJ.jpg",fx="/assets/herren_19-BduD_J85.png",hx="/assets/herren_2--jFuixBF.jpg",mx="/assets/herren_3-BPz1zlkG.jpg",gx="/assets/herren_4-BZRrQaFr.jpg",px="/assets/herren_5-D-QrfY2P.jpg",xx="/assets/herren_6-DWQvi6Am.jpg",bx="/assets/herren_7-BXO6B8Bt.jpg",yx="/assets/herren_8-Cg4rdr7T.jpg",vx="/assets/herren_9-DoLnTdRG.jpg",jx="/assets/herren_jubel_500club-mxBrnD8H.png",Sx="/assets/IMG-team-BGcF1agj.png",wx="/assets/IMG_5349-CpvIVKhM.jpg",zx="/assets/IMG_5369-DQ4CSwdg.jpg",_x="/assets/IMG_5421-BBzniIEN.jpg",Ex="/assets/IMG_5442-D2PgutWB.jpg",Tx="/assets/IMG_5952-B9VW6Qie.jpg",Ax="/assets/Unbenann324t-IPGo6eoQ.png",Cx="/assets/image0-DDrU5aZn.jpeg",kx="/assets/image11-BNM8hTkT.jpeg",Mx="/assets/image8-BUnedp9U.jpeg",G5="/assets/grafhardenberg-Di5cVggE.png",V5="/assets/horta-DydWIGV7.png",Y5="/assets/logans-BgpKwKYA.png",q5="/assets/ricobet-DsVC-eZt.png",K5="/assets/rothaus-DqkKD9yW.png",$5="/assets/tasty-B2pSa1rE.png",Z5="/assets/cabin-window-B83r_CDB.jpg",Q5="/assets/outside-9-xz17qL.jpg",X5="/assets/shower-B75caJ-F.jpg",J5="/assets/sitting-area-D7khB3Gw.jpg",W5="/assets/toilet-BpMHYbhh.jpg",F5=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Hp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Lp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Up,"../assets/gallery/cheerleading/cheerleading_3.jpg":Gp,"../assets/gallery/damen/1.png":Vp,"../assets/gallery/damen/10.png":Yp,"../assets/gallery/damen/11.png":qp,"../assets/gallery/damen/12.png":Kp,"../assets/gallery/damen/13.png":$p,"../assets/gallery/damen/14.png":Zp,"../assets/gallery/damen/2.png":Qp,"../assets/gallery/damen/3.png":Xp,"../assets/gallery/damen/4.png":Jp,"../assets/gallery/damen/5.png":Wp,"../assets/gallery/damen/6.png":Fp,"../assets/gallery/damen/7.png":Pp,"../assets/gallery/damen/8.png":Ip,"../assets/gallery/damen/9.png":ex,"../assets/gallery/herren/herren_0.jpg":tx,"../assets/gallery/herren/herren_1.jpg":nx,"../assets/gallery/herren/herren_10.jpg":ix,"../assets/gallery/herren/herren_11.jpg":ax,"../assets/gallery/herren/herren_12.jpg":lx,"../assets/gallery/herren/herren_13.jpg":rx,"../assets/gallery/herren/herren_14.jpg":sx,"../assets/gallery/herren/herren_15.jpg":ox,"../assets/gallery/herren/herren_16.jpg":cx,"../assets/gallery/herren/herren_17.jpg":ux,"../assets/gallery/herren/herren_18.jpg":dx,"../assets/gallery/herren/herren_19.png":fx,"../assets/gallery/herren/herren_2.jpg":hx,"../assets/gallery/herren/herren_3.jpg":mx,"../assets/gallery/herren/herren_4.jpg":gx,"../assets/gallery/herren/herren_5.jpg":px,"../assets/gallery/herren/herren_6.jpg":xx,"../assets/gallery/herren/herren_7.jpg":bx,"../assets/gallery/herren/herren_8.jpg":yx,"../assets/gallery/herren/herren_9.jpg":vx,"../assets/gallery/herren/herren_jubel_500club.png":jx,"../assets/gallery/jfv/IMG-team.png":Sx,"../assets/gallery/jfv/IMG_5349.jpg":wx,"../assets/gallery/jfv/IMG_5369.jpg":zx,"../assets/gallery/jfv/IMG_5421.jpg":_x,"../assets/gallery/jfv/IMG_5442.jpg":Ex,"../assets/gallery/jfv/IMG_5952.jpg":Tx,"../assets/gallery/jfv/Unbenann324t.png":Ax,"../assets/gallery/jfv/image0.jpeg":Cx,"../assets/gallery/jfv/image11.jpeg":kx,"../assets/gallery/jfv/image8.jpeg":Mx}),P5=Object.assign({"../assets/sponsors/grafhardenberg.png":G5,"../assets/sponsors/horta.png":V5,"../assets/sponsors/logans.png":Y5,"../assets/sponsors/ricobet.png":q5,"../assets/sponsors/rothaus.png":K5,"../assets/sponsors/tasty.png":$5}),I5=Object.assign({"../assets/renovation/cabin-window.jpg":Z5,"../assets/renovation/outside.jpg":Q5,"../assets/renovation/shower.jpg":X5,"../assets/renovation/sitting-area.jpg":J5,"../assets/renovation/toilet.jpg":W5}),Rx=l=>l.split("/").pop()?.toLowerCase()||"",e2=l=>{const o=l.match(/gallery\/(.*?)\//);return o?o[1]:"Sonstige"};function t2(l){const o=[...l];for(let u=o.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[o[u],o[c]]=[o[c],o[u]]}return o}const Bx=()=>{const l={};Object.entries(F5).forEach(([c,h])=>{const m=e2(c);l[m]||(l[m]=[]),l[m].push(h)}),Object.keys(l).forEach(c=>{l[c]=t2(l[c])});const o={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{l[c]&&(o[c]=l[c])}),Object.keys(l).forEach(c=>{u.includes(c.toLowerCase())||(o[c]=l[c])}),o},n2=()=>{const l={};return Object.entries(P5).forEach(([o,u])=>{const c=Rx(o);l[c]=u}),l},Dx=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(I5).forEach(([o,u])=>{const c=Rx(o);c.includes("sitting")?l.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?l.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&l.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?l.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?l.waschkueche.push({src:u,alt:"Dusche"}):l.waschkueche.push({src:u,alt:"Waschküche"}))}),l},vt=l=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Hp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Lp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Up,"../assets/gallery/cheerleading/cheerleading_3.jpg":Gp,"../assets/gallery/damen/1.png":Vp,"../assets/gallery/damen/10.png":Yp,"../assets/gallery/damen/11.png":qp,"../assets/gallery/damen/12.png":Kp,"../assets/gallery/damen/13.png":$p,"../assets/gallery/damen/14.png":Zp,"../assets/gallery/damen/2.png":Qp,"../assets/gallery/damen/3.png":Xp,"../assets/gallery/damen/4.png":Jp,"../assets/gallery/damen/5.png":Wp,"../assets/gallery/damen/6.png":Fp,"../assets/gallery/damen/7.png":Pp,"../assets/gallery/damen/8.png":Ip,"../assets/gallery/damen/9.png":ex,"../assets/gallery/herren/herren_0.jpg":tx,"../assets/gallery/herren/herren_1.jpg":nx,"../assets/gallery/herren/herren_10.jpg":ix,"../assets/gallery/herren/herren_11.jpg":ax,"../assets/gallery/herren/herren_12.jpg":lx,"../assets/gallery/herren/herren_13.jpg":rx,"../assets/gallery/herren/herren_14.jpg":sx,"../assets/gallery/herren/herren_15.jpg":ox,"../assets/gallery/herren/herren_16.jpg":cx,"../assets/gallery/herren/herren_17.jpg":ux,"../assets/gallery/herren/herren_18.jpg":dx,"../assets/gallery/herren/herren_19.png":fx,"../assets/gallery/herren/herren_2.jpg":hx,"../assets/gallery/herren/herren_3.jpg":mx,"../assets/gallery/herren/herren_4.jpg":gx,"../assets/gallery/herren/herren_5.jpg":px,"../assets/gallery/herren/herren_6.jpg":xx,"../assets/gallery/herren/herren_7.jpg":bx,"../assets/gallery/herren/herren_8.jpg":yx,"../assets/gallery/herren/herren_9.jpg":vx,"../assets/gallery/herren/herren_jubel_500club.png":jx,"../assets/gallery/jfv/IMG-team.png":Sx,"../assets/gallery/jfv/IMG_5349.jpg":wx,"../assets/gallery/jfv/IMG_5369.jpg":zx,"../assets/gallery/jfv/IMG_5421.jpg":_x,"../assets/gallery/jfv/IMG_5442.jpg":Ex,"../assets/gallery/jfv/IMG_5952.jpg":Tx,"../assets/gallery/jfv/Unbenann324t.png":Ax,"../assets/gallery/jfv/image0.jpeg":Cx,"../assets/gallery/jfv/image11.jpeg":kx,"../assets/gallery/jfv/image8.jpeg":Mx})).find(([c])=>c.includes(l));return u?u[1]:""},Xd=(l,o)=>vt(`${l}/${l}_${o}.jpg`);Bx(),n2(),Dx();function i2(){const l=Bx(),[o,u]=k.useState(null);return k.useEffect(()=>{if(!o)return;const c=h=>{h.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[o]),a.jsxs("section",{children:[a.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([c,h])=>a.jsxs("div",{style:{marginBottom:"2.5rem"},children:[a.jsx(a2,{children:c.toUpperCase()}),a.jsx(l2,{children:h.map((m,p)=>a.jsx(r2,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),o&&o.folder===c&&a.jsx(s2,{onClick:()=>u(null),children:a.jsxs(o2,{onClick:m=>m.stopPropagation(),children:[a.jsx(c2,{src:h[o.idx],alt:`Großansicht aus ${c}`}),a.jsx(u2,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const a2=f.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,l2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,r2=f.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,s2=f.div`
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
`,o2=f.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,c2=f.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,u2=f.button`
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
`,d2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,f2=f.div`
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
`,h2=f.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,m2=f.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,g2=f.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,p2=f.div`
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
`,x2=f.a`
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
`;function Yu({icon:l,title:o,description:u,packages:c,buttonHref:h,buttonText:m}){return a.jsxs(f2,{children:[a.jsx(h2,{children:l}),a.jsx(m2,{children:o}),a.jsx(g2,{children:u}),a.jsx(p2,{children:c.map((p,v)=>a.jsxs("div",{children:[p,v<c.length-1&&a.jsx("br",{})]},v))}),a.jsx(x2,{href:h,children:m})]})}const b2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,y2=f.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,v2=f.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,j2=f.p`
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
`;function Ox({headline:l,description:o,contactInfos:u}){const c=h=>{h.preventDefault();const m=h.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const y=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),E=String(p.get("email")||"").trim(),w=String(p.get("phone")||"").trim(),H={};if(y||(H.firstName="Bitte Vornamen angeben"),x||(H.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E)||(H.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(w)||(H.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(H).length>0){const Y=Object.keys(H)[0],R=m.querySelector(`[name="${Y}"]`);R&&R.focus(),alert(Object.values(H).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return a.jsx(S2,{id:"kontakt",children:a.jsxs(w2,{children:[a.jsx(D2,{children:l}),a.jsx(O2,{children:o}),a.jsx(b2,{children:u.map((h,m)=>a.jsxs(y2,{children:[a.jsxs(v2,{children:[h.icon," ",h.title]}),a.jsx(j2,{$isEmail:h.isEmail,children:h.isEmail?a.jsx("a",{href:`mailto:${h.content}`,children:h.content}):h.content})]},m))}),a.jsxs(z2,{children:[a.jsx(_2,{children:"Kontakt aufnehmen"}),a.jsx(E2,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),a.jsxs(T2,{noValidate:!0,onSubmit:c,children:[a.jsxs(qu,{children:[a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"firstName",children:"Vorname"}),a.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"lastName",children:"Nachname"}),a.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),a.jsxs(qu,{children:[a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),a.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"phone",children:"Telefon"}),a.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),a.jsx(qu,{children:a.jsxs(A2,{children:[a.jsx("label",{htmlFor:"email",children:"E-Mail"}),a.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),a.jsxs(C2,{"aria-hidden":"true",tabIndex:-1,children:[a.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),a.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),a.jsxs(k2,{children:[a.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),a.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",a.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),a.jsxs(M2,{children:[a.jsx(R2,{type:"submit",children:"Absenden"}),a.jsxs(B2,{children:["Alternativ:"," ",a.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const S2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,w2=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,z2=f.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,_2=f.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,E2=f.p`
  margin: 0 0 1rem 0;
  color: #555;
`,T2=f.form`
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
`,qu=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,ar=f.div`
  display: flex;
  flex-direction: column;
`,A2=f(ar)`
  grid-column: 1 / -1;
`,C2=f.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,k2=f.div`
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
`,M2=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,R2=f.button`
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
`,B2=f.span`
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
`,D2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,O2=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,N2=f.section`
  background: url("${Xd("herren",4)}") center/cover;
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
`,H2=f.h1`
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
`,L2=f.h2`
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
`,A0=f.a`
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
`,U2=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,G2=f.main`
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
`,tr=f.h2`
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
`,V2=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,Y2=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,q2=f.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,K2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,$2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,Z2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,C0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,k0=f.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,M0=f.ul`
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
`,Q2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,X2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,J2=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,W2=f.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,F2=f.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,P2=f.ul`
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
`,Ku=f.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,$u=f.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Zu=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qu=f.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Xu=f.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Ju=f.div`
  font-size: 0.98rem;
  color: #666;
`,I2=f.div`
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
`,eS=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,tS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,nS=f.a`
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
`,iS=f.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,aS=f.div`
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
`,lS=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,rS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,sS=f.a`
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
`,oS=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,cS=f.h3`
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
`,uS=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,dS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,R0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,B0=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,D0=f.table`
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
`,fS=f.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,hS=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,mS=f.ul`
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
`,gS=f.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,pS=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,xS=f.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,bS=f.a`
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
`;function yS(){return a.jsxs(a.Fragment,{children:[a.jsx(N2,{children:a.jsxs(V2,{children:[a.jsx(H2,{children:"SC Konstanz-Wollmatingen"}),a.jsx(L2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),a.jsxs(U2,{children:[a.jsx(A0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),a.jsx(A0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),a.jsxs(G2,{children:[a.jsx(tr,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),a.jsx(Y2,{children:a.jsx(q2,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),a.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[a.jsx(iS,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),a.jsxs(d2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[a.jsx(Yu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),a.jsx(Yu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),a.jsx(Yu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),a.jsxs("section",{"aria-labelledby":"premium-pakete",children:[a.jsx(tr,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),a.jsx(Wa,{packages:Zn.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[a.jsx(tr,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),a.jsx(Wa,{packages:Zn.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"starter-pakete",children:[a.jsx(tr,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),a.jsx(Wa,{packages:Zn.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),a.jsxs(aS,{children:[a.jsx(lS,{children:"⚽ Ballspende-Beispiel ansehen"}),a.jsx(rS,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),a.jsx(sS,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),a.jsxs(K2,{children:[a.jsx($2,{children:"Warum SC Konstanz-Wollmatingen?"}),a.jsxs(Z2,{children:[a.jsxs(C0,{children:[a.jsx(k0,{children:"📊 Erreichte Reichweite"}),a.jsxs(M0,{children:[a.jsx("li",{children:"15+ Heimspiele pro Saison"}),a.jsx("li",{children:"200+ Zuschauer pro Spiel"}),a.jsx("li",{children:"2.500+ Instagram Follower"}),a.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),a.jsxs(C0,{children:[a.jsx(k0,{children:"🏆 Sportlicher Erfolg"}),a.jsxs(M0,{children:[a.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),a.jsx("li",{children:"2. Mannschaften pro Abteilung"}),a.jsx("li",{children:"Cheerleading-Team aktiv"}),a.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),a.jsx(tr,{children:"Zusätzliche Werbemöglichkeiten"}),a.jsxs(Q2,{children:[a.jsx(X2,{children:'Werbung im Stadionmagazin „Heimspiel"'}),a.jsxs(J2,{children:[a.jsxs(W2,{children:[a.jsxs(Zu,{children:[a.jsx(Qu,{children:"1 Seite (Farbe)"}),a.jsx(Xu,{children:"1.000 €"}),a.jsx(Ju,{children:"DIN A4 (297 × 210 mm)"})]}),a.jsxs(Zu,{children:[a.jsx(Qu,{children:"1/2 Seite (Farbe)"}),a.jsx(Xu,{children:"500 €"}),a.jsx(Ju,{children:"DIN A5 (148 × 210 mm)"})]}),a.jsxs(Zu,{children:[a.jsx(Qu,{children:"1/4 Seite (Farbe)"}),a.jsx(Xu,{children:"250 €"}),a.jsx(Ju,{children:"DIN A6 (105 × 148 mm)"})]})]}),a.jsx(F2,{children:a.jsxs(P2,{children:[a.jsxs(Ku,{children:[a.jsx($u,{}),"15 Ausgaben pro Saison"]}),a.jsxs(Ku,{children:[a.jsx($u,{}),"ca. 100 Exemplare pro Heimspiel"]}),a.jsxs(Ku,{children:[a.jsx($u,{}),"Digitale Version (Social Media & Website)"]})]})})]}),a.jsxs(I2,{children:[a.jsx(eS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),a.jsx(tS,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),a.jsx(nS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),a.jsxs(oS,{children:[a.jsx(cS,{children:"Werbeflächen auf dem Vereinsbus"}),a.jsx(uS,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),a.jsxs(dS,{children:[a.jsxs(R0,{children:[a.jsx(B0,{children:"Premium-Flächen"}),a.jsxs(D0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Heckfläche (100×80 cm)"}),a.jsx("td",{children:"Sehr hoch"}),a.jsx("td",{children:"1.200 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Seitentüren (links/rechts)"}),a.jsx("td",{children:"Hoch"}),a.jsx("td",{children:"je 900 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Hintere Seitenflächen"}),a.jsx("td",{children:"Mittel-hoch"}),a.jsx("td",{children:"je 600 €"})]})]})]})]}),a.jsxs(R0,{children:[a.jsx(B0,{children:"Standard-Flächen"}),a.jsxs(D0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),a.jsx("td",{children:"Mittel"}),a.jsx("td",{children:"400 € je Seite"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Frontstoßstange"}),a.jsx("td",{children:"Gering-mittel"}),a.jsx("td",{children:"250 €"})]})]})]})]})]}),a.jsxs(fS,{children:[a.jsx(hS,{children:"Zusatzoptionen:"}),a.jsxs(mS,{children:[a.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),a.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),a.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),a.jsxs(gS,{children:[a.jsx(pS,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),a.jsx(xS,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),a.jsx(bS,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),a.jsx(U5,{}),a.jsx(Ox,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),a.jsx(i2,{})]}),a.jsx(Qd,{})]})}const Jd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Nx=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Fa={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},vS="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Hx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Lx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Ux=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],jS="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Ut={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},SS=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],wS=f.div`
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
`,zS=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,_S=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,ES=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,TS=f.div`
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
`,AS=f.img`
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
`,CS=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,kS=f.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,MS=f.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,RS=f.div`
  background: ${({$gradient:l})=>l};
  height: 100%;
  width: ${({$percent:l})=>l}%;
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
`,BS=f.div`
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
`,DS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,Wu=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,Fu=f.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:l})=>l};
  flex-shrink: 0;
`,OS=f.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Gx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:vt("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:vt("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:vt("herren/herren_16")}],NS=Math.max(...Gx.map(l=>l.value));function HS(){return a.jsxs(wS,{children:[a.jsx(zS,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),a.jsx(_S,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),a.jsx(ES,{children:Gx.map(l=>a.jsxs(TS,{children:[a.jsx(AS,{src:l.image,alt:l.label}),a.jsxs(CS,{children:[a.jsxs(kS,{children:[l.icon," ",l.label]}),a.jsx(MS,{children:a.jsx(RS,{$percent:l.value/NS*100,$gradient:l.gradient})})]}),a.jsxs(BS,{children:[(l.value/1e3).toFixed(0),"k"]})]},l.label))}),a.jsxs(DS,{children:[a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#9ca3af"}),a.jsx("span",{children:"Aktuell (Winterpause)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#e10073"}),a.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#ff6b9d"}),a.jsx("span",{children:"Prognose kommende Saison"})]})]}),a.jsxs(OS,{children:[a.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const LS=f.div`
  width: 100%;
  margin: 2rem 0;
`,US=f.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,GS=f.table`
  width: 100%;
  border-collapse: collapse;
`,O0=f.th`
  background: ${l=>l.isVergeben?"#f8f9fa":"#e10073"};
  color: ${l=>l.isVergeben?"#666":"#fff"};
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
`,Ki=f.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${l=>l.isVergeben?"#f8f9fa":"#fff"};
  color: ${l=>l.isVergeben?"#999":"#222"};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${l=>l.isHighlight&&`
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`,VS=f.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${l=>l.isVergeben?"#f8f9fa":"#fff"};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${l=>l.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,YS=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,qS=f.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${l=>l.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${l=>l.isVergeben?.8:1};
`,KS=f.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,$S=f.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,Pu=f.div`
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
`,N0=f.a`
  display: inline-block;
  background: ${l=>l.isVergeben?"#ccc":"#e10073"};
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
  pointer-events: ${l=>l.isVergeben?"none":"auto"};
`,ZS="sponsoring@sckw.de";function QS({packages:l}){const o=c=>{const h=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${h}"`);return`mailto:${ZS}?subject=${m}`},u=c=>{const h=c.benefits.find(p=>{const v=p.toLowerCase();return v.includes("social media")||v.includes("instagram")});if(!h)return"-";const m=h.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return a.jsxs(LS,{children:[a.jsx(US,{children:a.jsxs(GS,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(O0,{children:"Paket"}),l.map((c,h)=>a.jsx(O0,{isVergeben:c.status.includes("Vergeben"),children:c.title},h))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx(Ki,{children:"Preis"}),l.map((c,h)=>a.jsx(VS,{isVergeben:c.status.includes("Vergeben"),children:c.price},h))]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Trikot/Banner"}),l.map((c,h)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return a.jsx(Ki,{children:m?"✅ Ja":"-"},h)})]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Social Media"}),l.map((c,h)=>{const m=u(c);return a.jsx(Ki,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},h)})]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Aktion"}),l.map((c,h)=>a.jsx(Ki,{children:a.jsx(N0,{href:c.status.includes("Vergeben")?void 0:o(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},h))]})]})]})}),a.jsx(YS,{children:l.map((c,h)=>{const m=c.status.includes("Vergeben");return a.jsxs(qS,{isVergeben:m,children:[a.jsx(KS,{children:c.title}),a.jsx($S,{children:c.price}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Status"}),a.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Social Media"}),a.jsx("span",{children:u(c)})]}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Vorteile"}),a.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),a.jsx(N0,{href:m?void 0:o(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},h)})})]})}const XS=f.div`
  margin-top: 2.5rem;
`,JS=f.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,WS=f.button`
  background: ${({$active:l})=>l?"#e10073":"transparent"};
  color: ${({$active:l})=>l?"white":"#666"};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({$active:l})=>l?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({$active:l})=>l?"3px solid #e10073":"3px solid transparent"};

  &:hover {
    background: ${({$active:l})=>l?"#e10073":"#f8f9fa"};
    color: ${({$active:l})=>l?"white":"#e10073"};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`,FS=f.div`
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
`,PS=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,IS=Zn.filter(l=>l.tier==="premium"),e3=Zn.filter(l=>l.tier==="lokal"),t3=Zn.filter(l=>l.tier==="starter");function n3(){const[l,o]=k.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:IS},{key:"lokal",label:"🏢 Lokal",packages:e3},{key:"starter",label:"🌟 Starter",packages:t3}],c=u.find(h=>h.key===l);return a.jsxs(XS,{children:[a.jsx(JS,{children:u.map(h=>a.jsx(WS,{$active:l===h.key,onClick:()=>o(h.key),children:h.label},h.key))}),a.jsxs(FS,{children:[c&&a.jsx(QS,{packages:c.packages}),a.jsxs(PS,{children:[l==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",l==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",l==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const i3=f.div`
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
`,a3=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,l3=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,r3=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,s3=f.table`
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
`,Iu=f.td`
  font-weight: 700;
  color: #e10073;
`,o3=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,c3=f.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,u3=f.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,d3=f.div`
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
`,f3=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function h3(){const l=Nx;return a.jsxs(i3,{children:[a.jsx(a3,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),a.jsx(l3,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a.jsx(r3,{children:a.jsxs(s3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Leistung / Erfolg"}),a.jsx("th",{children:"Starter"}),a.jsx("th",{children:"Premium"}),a.jsx("th",{children:"Kombi (Beispiel)"})]})}),a.jsxs("tbody",{children:[l.map((o,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:o.label}),a.jsx(Iu,{children:o.starter}),a.jsx(Iu,{children:o.premium}),a.jsx(Iu,{children:o.kombi})]},u)),a.jsxs("tr",{children:[a.jsx("td",{children:"Erwartete Kosten"}),a.jsx("td",{children:Fa.starter}),a.jsx("td",{children:Fa.premium}),a.jsx("td",{children:Fa.kombi})]})]})]})}),a.jsx(o3,{children:["Starter","Premium","Kombi"].map(o=>a.jsxs(c3,{children:[a.jsx(u3,{children:o}),l.map((u,c)=>a.jsxs(d3,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:o==="Starter"?u.starter:o==="Premium"?u.premium:u.kombi})]},c))]},o))}),a.jsx(f3,{children:vS})]})}const m3=f.div`
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
`,g3=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,p3=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,x3=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,b3=f.table`
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
`,y3=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,v3=f.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,j3=f.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,S3=f.div`
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
`,w3=f.div`
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
`,z3=f.div`
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
`;function _3(){const l=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return a.jsxs(m3,{children:[a.jsx(g3,{children:"👤 Spielerpatenschaften (diskret)"}),a.jsx(p3,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),a.jsx(x3,{children:a.jsxs(b3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Merkmal"}),a.jsx("th",{children:"Bronze"}),a.jsx("th",{children:"Silber"}),a.jsx("th",{children:"Gold"})]})}),a.jsx("tbody",{children:l.map((o,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:o.label}),a.jsx("td",{children:o.bronze}),a.jsx("td",{children:o.silber}),a.jsx("td",{children:o.gold})]},u))})]})}),a.jsx(y3,{children:["Bronze","Silber","Gold"].map(o=>a.jsxs(v3,{children:[a.jsx(j3,{children:o}),l.map((u,c)=>a.jsxs(S3,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:o==="Bronze"?u.bronze:o==="Silber"?u.silber:u.gold})]},c))]},o))}),a.jsxs(w3,{children:[a.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),a.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',a.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',a.jsx("em",{children:"[Foto vom Torjubel]"})]}),a.jsxs(z3,{children:[a.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const E3=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,T3=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,A3=f.a`
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
`,C3=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,k3=f.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,M3=f.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,R3=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,B3=f.a`
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
`,D3=f.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,O3=f.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,N3={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function H3(){const{hauptsponsor:l,partners:o}=N3;return a.jsxs(E3,{children:[a.jsx(T3,{children:a.jsxs(A3,{href:l.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(C3,{children:"Hauptsponsor"}),a.jsx(k3,{src:l.logo,alt:l.name}),a.jsx(M3,{children:l.name})]})}),a.jsx(R3,{children:o.map((u,c)=>a.jsxs(B3,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(D3,{src:u.logo,alt:u.name}),a.jsx(O3,{children:u.name})]},c))})]})}const yn=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Za=f.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ms=f(Za)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,Vn=f.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,vi=f.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,ji=f.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,L3=f.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,U3=f.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,G3=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,V3=f.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Y3=f.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,q3=f.p`
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
`,K3=f.div`
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
`,$3=f.div`
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
`,Z3=f.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Q3=f.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,X3=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,H0=f.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:l})=>l?"white":"transparent"};
  color: ${({$primary:l})=>l?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:l})=>l?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:l})=>l?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,J3=f.div`
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
`,Rs=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Bs=f.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Ds=f.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,W3=f.div`
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
`,F3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ed=f.div`
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
`,td=f.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,nd=f.div`
  padding: 1.5rem 1.25rem 2rem;
`,id=f.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,ad=f.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,Os=f.div`
  margin-top: 2.5rem;
`,Ns=f.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,ld=f.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,P3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,rd=f.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,I3=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,sd=f.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,od=f.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,cd=f.div`
  padding: 1.25rem 1rem 1.5rem;
`,ud=f.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,dd=f.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,L0=f.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,ew=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,U0=f.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,tw=f.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,nw=f.table`
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
`,iw=f.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,aw=f.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Hs=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Ls=f.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Us=f.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,lw=f.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,rw=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,sw=f.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,ow=f.div`
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
`,cw=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,uw=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,dw=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,fw=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,fd=f.div`
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
`,hw=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,mw=f.a`
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
`,gw=Jd,pw=Zn.filter(l=>l.tier==="premium"),xw=Zn.filter(l=>l.tier==="lokal"),bw=Zn.filter(l=>l.tier==="starter");function yw(){const l=[vt("herren/herren_6"),vt("herren/herren_16"),vt("herren/herren_5"),vt("herren/herren_14")].filter(Boolean),[o,u]=k.useState(0);return k.useEffect(()=>{if(l.length<=1)return;const c=setInterval(()=>{u(h=>(h+1)%l.length)},6e3);return()=>clearInterval(c)},[l.length]),a.jsxs(a.Fragment,{children:[a.jsxs(L3,{children:[l.map((c,h)=>a.jsx(U3,{$bg:c,$active:h===o},h)),a.jsx(G3,{}),a.jsxs(V3,{children:[a.jsx(Y3,{children:"Sponsoring, das messbar wirkt"}),a.jsxs(q3,{children:["In der Winterpause erzielen wir bereits"," ",a.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",a.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),a.jsx(K3,{children:gw.map(c=>a.jsxs($3,{children:[a.jsx(Z3,{children:c.value}),a.jsx(Q3,{children:c.label})]},c.label))}),a.jsxs(X3,{children:[a.jsx(H0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const h=document.getElementById("kontakt");h&&h.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),a.jsx(H0,{href:"#pakete",onClick:c=>{c.preventDefault();const h=document.getElementById("pakete");h&&h.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),a.jsx(Ms,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Warum sich Sponsoring bei uns lohnt"}),a.jsx(ji,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),a.jsxs(F3,{children:[a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Sichtbarkeit, die bleibt"}),a.jsx(ad,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Ihre Kunden sind hier"}),a.jsx(ad,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Doppelte Wirkung"}),a.jsx(ad,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),a.jsx(Za,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Diese Unternehmen sind bereits Partner"}),a.jsx(ji,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),a.jsx(H3,{})]})}),a.jsx(Ms,{id:"pakete",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Finden Sie Ihr perfektes Paket"}),a.jsx(ji,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Premium-Partnerschaften"}),a.jsx(Wa,{packages:pw})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Pakete im Vergleich"}),a.jsx(n3,{})]}),a.jsx(h3,{}),a.jsx(_3,{}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Lokale Werbemöglichkeiten"}),a.jsx(Wa,{packages:xw}),a.jsx(ld,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Starter & Spieltag"}),a.jsx(Wa,{packages:bw})]})]})}),a.jsx(Za,{id:"reichweite",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"So viele Menschen erreichen Sie"}),a.jsx(ji,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),a.jsxs(J3,{children:[a.jsxs(Rs,{children:[a.jsx(Bs,{children:"32.000"}),a.jsx(Ds,{children:"Reichweite / 30 Tage"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"250.000"}),a.jsx(Ds,{children:"Reichweite / 90 Tage"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"50-80k"}),a.jsx(Ds,{children:"Pro Monat in Saison"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"500-800k"}),a.jsx(Ds,{children:"Saisonreichweite (konservativ)"})]})]}),a.jsxs(W3,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",a.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),a.jsx(Ms,{children:a.jsx(yn,{children:a.jsx(HS,{})})}),a.jsx(Za,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Was Sie auf Social Media bekommen"}),a.jsx(ji,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),a.jsxs(P3,{children:[a.jsx(rd,{children:"📱 Feed-Posts mit Ihrem Logo"}),a.jsx(rd,{children:"📸 Stories & Erwähnungen"}),a.jsx(rd,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),a.jsx(ld,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),a.jsx(Ms,{id:"buswerbung",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Mobile Werbung auf unserem Vereinsbus"}),a.jsx(ji,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),a.jsxs(ew,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen mit Werbeflächen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),a.jsx(U0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),a.jsx(tw,{children:a.jsxs(nw,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Fläche"}),a.jsx("th",{children:"Größe (ca.)"}),a.jsx("th",{children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...Hx,...Lx].map(c=>a.jsxs("tr",{children:[a.jsx("td",{children:c.position}),a.jsx("td",{children:c.groesse}),a.jsx("td",{children:a.jsx("strong",{children:c.preis})})]},c.position))})]})}),a.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[a.jsx(U0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),a.jsx(iw,{children:Ux.map((c,h)=>a.jsx("li",{children:c},h))})]})]}),a.jsx(ld,{children:jS})]})}),a.jsx(Za,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Ihre Marke in Aktion"}),a.jsx(ji,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),a.jsxs(I3,{children:[a.jsxs(sd,{children:[a.jsx(od,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Stadionmagazin"}),a.jsx(dd,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),a.jsx(L0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),a.jsxs(sd,{children:[a.jsx(od,{src:vt("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Bandenwerbung"}),a.jsx(dd,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),a.jsxs(sd,{children:[a.jsx(od,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Ballspende"}),a.jsx(dd,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),a.jsx(L0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),a.jsx(lw,{id:"500club",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(rw,{children:"500 €Club"}),a.jsx(sw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),a.jsxs(ow,{children:[a.jsxs(cw,{children:[a.jsxs(dw,{children:[a.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),a.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),a.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),a.jsxs(fw,{children:[a.jsxs(fd,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(fd,{children:["Ihr ",a.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),a.jsxs(fd,{children:["Direkte Förderung von ",a.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),a.jsxs(uw,{children:[a.jsxs(hw,{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),a.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),a.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),a.jsx("br",{}),"Sparkasse Bodensee",a.jsx("br",{}),a.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),a.jsx(mw,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),a.jsx(Za,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"In 4 Schritten zum Sponsoring-Start"}),a.jsx(ji,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),a.jsxs(aw,{children:[a.jsxs(Hs,{children:[a.jsx(Ls,{children:"1. Kontakt"}),a.jsx(Us,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"2. Bedarf"}),a.jsx(Us,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"3. Angebot"}),a.jsx(Us,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"4. Umsetzung"}),a.jsx(Us,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),a.jsx(Ox,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Ut.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Ut.vollAdresse}]}),a.jsx(Qd,{})]})}function vw(){return Np(),!0}const jw=wv`
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
`,G0=f.div`
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
`,V0=f.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,Y0=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Gs=f.button`
  background: ${l=>l.$primary?"#fff":l.$active?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"};
  color: ${l=>l.$primary?"#1a365d":"#fff"};
  border: 2px solid ${l=>l.$primary?"#fff":"rgba(255,255,255,0.25)"};
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`,Sw=f.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,ww=f.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,wt=f.section`
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
`,en=f.div`
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
`,tn=f.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,nn=f.div`text-align: center; margin-bottom: 6mm;`,an=f.img`height: 20mm;`,ln=f.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,St=f.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,dt=f.h2`
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
`,P=f.li`
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
`,jt=f.ul`padding: 0; margin: 3mm 0;`,Wi=f.div`
  display: ${l=>l.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ut=f.div`margin-bottom: 4mm;`,et=f.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Lt=f.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${l=>(l.$lines||1)*8}mm;
  background: #fafafa;
`,zw=f.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Wd=f.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Qn=f.div`
  text-align: ${l=>l.$right?"right":l.$center?"center":"left"};
`;function _i(){return a.jsxs(zw,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",a.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function dn(){return a.jsxs(Wd,{children:[a.jsxs(Qn,{children:[a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),a.jsx("br",{}),"Schleyerweg 5",a.jsx("br",{}),"78467 Konstanz"]}),a.jsxs(Qn,{$center:!0,children:[Ut.email,a.jsx("br",{}),"partner.sckw.de"]}),a.jsxs(Qn,{$right:!0,children:["Sparkasse Bodensee",a.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",a.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const q0=vt("herren/herren_0"),hd=vt("herren/herren_6"),K0=vt("herren/herren_1"),_w=vt("herren/herren_14"),eo=f.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function Ew(){return a.jsx(wt,{children:a.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),a.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),a.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),a.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",a.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Jd.slice(0,2).map(l=>a.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[a.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:l.value}),a.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:l.label})]},l.label))}),a.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function Tw(){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"WARUM SCKW?"}),a.jsx(St,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Jd.map(l=>a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[a.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:l.value}),a.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:l.label})]},l.label))}),a.jsx(dt,{children:"Was Sie bei uns erreichen"}),a.jsxs(jt,{children:[a.jsx(P,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),a.jsx(P,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),a.jsx(P,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),a.jsx(P,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),a.jsx(dt,{children:"Der Verein auf einen Blick"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsxs(Oe,{children:[a.jsx("strong",{children:"Gegründet:"})," 1912"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Mitglieder:"})," 500+"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),a.jsxs("div",{children:[a.jsxs(Oe,{children:[a.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),q0&&a.jsx(eo,{src:q0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),a.jsx(dn,{})]})]})}function Aw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"HAUPTSPONSOR"}),a.jsx(St,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(jt,{children:[a.jsx(P,{children:"Trikotwerbung auf der Brust"}),a.jsx(P,{children:"Business Club Mitgliedschaft"}),a.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),a.jsx(P,{children:"1/1 seitiges Inserat im SC Magazin"}),a.jsx(P,{children:"10 Saisonkarten"}),a.jsx(P,{children:"Werbeauftritte nach Absprache"}),a.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Cw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"CO-SPONSOR"}),a.jsx(St,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(jt,{children:[a.jsx(P,{children:"Werbung auf den Trainingsanzügen"}),a.jsx(P,{children:"Business Club Mitgliedschaft"}),a.jsx(P,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),a.jsx(P,{children:"1/2 seitiges Inserat im SC Magazin"}),a.jsx(P,{children:"5 Saisonkarten"}),a.jsx(P,{children:"Werbeauftritte nach Absprache"}),a.jsx(P,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(P,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(P,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(P,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(P,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function kw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"SILBER-PARTNER"}),a.jsx(St,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),a.jsxs(jt,{children:[a.jsx(P,{children:"1 Bande (5×2 m) am Gelände"}),a.jsx(P,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),a.jsx(P,{children:"Werbeplane am Gelände"}),a.jsx(P,{children:"Vereinsplakate + Eventsichtbarkeit"}),a.jsx(P,{children:"Website: Logo auf Startseite"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),a.jsx(dt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),a.jsx(St,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),a.jsxs(jt,{children:[a.jsx(P,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),a.jsx(P,{children:"Website: Logo auf der Startseite"}),a.jsx(P,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),a.jsx(P,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Mw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"BANDENWERBUNG"}),a.jsx(St,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),a.jsx(jt,{children:a.jsx(P,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),a.jsxs(Oe,{children:[a.jsx("strong",{children:"Platzierung:"}),a.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",a.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",a.jsx("br",{}),a.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 800€ pro Saison"})]}),K0&&a.jsx(eo,{src:K0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Rw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:'WERBUNG IM „HEIMSPIEL"'}),a.jsx(St,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),a.jsxs(jt,{children:[a.jsx(P,{children:"15 Ausgaben pro Saison"}),a.jsx(P,{children:"ca. 100 Exemplare pro Heimspiel"}),a.jsx(P,{children:"Digitale Version (Social Media & Webseite)"}),a.jsx(P,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),a.jsx(P,{children:"DIN A4 Stadionmagazin"}),a.jsx(P,{children:"wird ausgelegt in diversen Arztpraxen"})]}),l&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(o=>a.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:o.size}),a.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),a.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:o.price})]},o.size))}),l&&a.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[a.jsx("strong",{children:"Maße"}),a.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",a.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",a.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Bw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"SPIELTAG-SPONSORING"}),a.jsx(St,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),a.jsx(dt,{children:"Ballspende"}),a.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),a.jsxs(jt,{children:[a.jsx(P,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),a.jsx(P,{children:"Namensnennung in der Halbzeitpause"}),a.jsx(P,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),a.jsx(P,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",a.jsx("strong",{children:"500€"})," (statt 750€)"]}),a.jsx(dt,{children:"Spielpräsentator"}),a.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),a.jsxs(jt,{children:[a.jsx(P,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),a.jsx(P,{children:"Namentliche Erwähnung im SC Magazin"}),a.jsx(P,{children:"Social Media Erwähnung am Spieltag"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 250€ pro Spiel"})]}),hd&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[a.jsx(eo,{src:hd,alt:"Action",style:{height:"48mm"}}),a.jsx(eo,{src:_w||hd,alt:"Jubel",style:{height:"48mm"}})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Dw({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"BUSWERBUNG"}),a.jsx(St,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),l&&a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...Hx,...Lx].map((o,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.position}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.groesse}),l&&a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:o.preis})]},o.position))})]}),a.jsx(dt,{children:"Zusatzoptionen"}),a.jsx(jt,{children:Ux.map((o,u)=>a.jsx(P,{children:o},u))}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Ow({showPrices:l}){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"PRÄMIEN-MODELL"}),a.jsx(St,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l&&a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),a.jsxs("tbody",{children:[Nx.map((o,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:o.label}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.starter}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.premium}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.kombi})]},o.label)),a.jsxs("tr",{style:{background:"#f0f9ff"},children:[a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.starter}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.premium}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.kombi})]})]})]}),a.jsx(dt,{children:"So funktioniert's"}),a.jsxs(jt,{children:[a.jsx(P,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),a.jsx(P,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),a.jsx(P,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),a.jsx(P,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),a.jsx(dt,{children:"Inkludierte Leistungen"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx(Oe,{children:a.jsx("strong",{children:"Starter:"})}),a.jsxs(jt,{children:[a.jsx(P,{children:"Stadionansage bei Erfolg"}),a.jsx(P,{children:"Logo auf Website"})]})]}),a.jsxs("div",{children:[a.jsx(Oe,{children:a.jsx("strong",{children:"Premium:"})}),a.jsxs(jt,{children:[a.jsx(P,{children:"+ Social Media Post bei Erfolg"}),a.jsx(P,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}const $0=vt("herren/herren_jubel_500club");function Nw(){return a.jsxs(wt,{children:[$0&&a.jsx("img",{src:$0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),a.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[a.jsx(St,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),a.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[a.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),a.jsx(dt,{children:"Ihre Vorteile"}),a.jsxs(jt,{children:[a.jsxs(P,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(P,{children:["Veröffentlichung Ihres ",a.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),a.jsx(P,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),a.jsx(dt,{children:"Zahlungsoptionen"}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),a.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(l=>a.jsxs("tr",{children:[a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:l.label}),a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:l.betrag})]},l.label))})]}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),a.jsx(dt,{children:"Spendenkonto"}),a.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[a.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),a.jsx("br",{}),"IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",a.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[a.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",a.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),a.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",a.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),a.jsx(dn,{})]})]})}function Hw(){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),a.jsxs(St,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Ut.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(ut,{children:[a.jsx(et,{children:"Vorname:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Nachname:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Firma (optional):"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Straße, Hausnummer:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[a.jsxs(ut,{children:[a.jsx(et,{children:"PLZ:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Ort:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[a.jsxs(ut,{children:[a.jsx(et,{children:"Geb.-Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Telefon:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"E-Mail:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsx(dt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:a.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),a.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),a.jsx(dt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:a.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),a.jsxs(ut,{style:{marginTop:"2mm"},children:[a.jsx(et,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),a.jsx(Lt,{$lines:1})]}),a.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[a.jsxs(ut,{children:[a.jsx(et,{children:"Konstanz, den _______________"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),a.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Unterschrift:"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),a.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[a.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",a.jsx("br",{}),a.jsx("strong",{children:"Kontakt:"})," ",Ut.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs(Wd,{style:{marginTop:"auto"},children:[a.jsx(Qn,{children:a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),a.jsx(Qn,{$center:!0,children:"500 €Club"}),a.jsx(Qn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function Lw(){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),a.jsx(St,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(l=>a.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[a.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:l.n}),a.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:l.t}),a.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:l.d})]},l.n))}),a.jsx(dt,{children:"Kontakt"}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Ut.email})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),a.jsxs("div",{style:{gridColumn:"1 / -1"},children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),a.jsxs("div",{style:{fontSize:"11pt"},children:[Ut.adresse.name," · ",Ut.adresse.strasse," · ",Ut.adresse.plz," ",Ut.adresse.ort]})]})]}),a.jsx(dt,{children:"Gesprächsleitfaden"}),a.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),a.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),a.jsx(dn,{})]})]})}function Uw(){return a.jsxs(wt,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),a.jsxs(St,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Ut.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(ut,{children:[a.jsx(et,{children:"Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ut,{children:[a.jsx(et,{children:"Gesprächsführer (Helfer):"}),a.jsx(Lt,{$lines:1})]})]}),SS.map((l,o)=>a.jsxs(ut,{children:[a.jsxs(et,{children:[l.label,":"]}),a.jsx(Lt,{$lines:l.lines})]},o)),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:a.jsxs(et,{style:{marginBottom:0},children:["☐ ",l]})},l))}),a.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:a.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[a.jsx("strong",{children:"Schnellreferenz:"})," ",Ut.email," · partner.sckw.de ·"," ",Ut.vollAdresse.replace(/\n/g," · ")]})}),a.jsxs(Wd,{style:{marginTop:"auto"},children:[a.jsx(Qn,{children:a.jsx("strong",{children:"Internes Dokument"})}),a.jsx(Qn,{$center:!0}),a.jsx(Qn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Yn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>a.jsx(Ew,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>a.jsx(Tw,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Aw,{showPrices:l})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Cw,{showPrices:l})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:l=>a.jsx(kw,{showPrices:l})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Mw,{showPrices:l})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Rw,{showPrices:l})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Bw,{showPrices:l})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Dw,{showPrices:l})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Ow,{showPrices:l})},{id:"club500",label:"500 €Club",group:"community",render:()=>a.jsx(Nw,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>a.jsx(Hw,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>a.jsx(Lw,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>a.jsx(Uw,{})}],Gw=f.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,Vw=f.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,Yw=f.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,qw=f.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,Kw=f.button`
  background: ${l=>l.$on?"#1a365d":"#f1f5f9"};
  color: ${l=>l.$on?"#fff":"#475569"};
  border: 2px solid ${l=>l.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`,md=f.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,gd=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,pd=f.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${l=>l.$checked?"#1a365d":"#e2e8f0"};
  background: ${l=>l.$checked?"#f0f4ff":"#fff"};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${l=>l.$checked?"#1a365d":"#64748b"};
  transition: all 0.15s;
  user-select: none;
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`,$w=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,$i=f.button`
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
`,Zw=f.button`
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
`,Qw=f.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Xw(){const l=vw(),[o]=Np(),u=o.get("preset"),c=o.get("view"),h=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Yn.filter(_=>_.group==="broschüre").map(_=>_.id)),[m,p]=k.useState(!0),[v,y]=k.useState(h),[x,E]=k.useState(c==="preview"?"preview":"dashboard");if(!l)return a.jsx(Zs,{to:"/",replace:!0});const w=_=>{y(le=>{const fe=new Set(le);return fe.has(_)?fe.delete(_):fe.add(_),fe})},H=()=>y(new Set(Yn.map(_=>_.id))),Y=()=>y(new Set),R=()=>y(new Set(Yn.filter(_=>_.group==="broschüre").map(_=>_.id))),U=()=>y(new Set(Yn.map(_=>_.id))),V=()=>y(new Set(["cover","why","spieltag","banden"])),K=()=>y(new Set(["cover","why","haupt","co","silber"])),q=()=>y(new Set(["club500","club500form"])),G=Yn.filter(_=>v.has(_.id)),J=Yn.filter(_=>_.group==="broschüre"),I=Yn.filter(_=>_.group==="community"),Q=Yn.filter(_=>_.group==="helfer");return x==="preview"?a.jsxs(a.Fragment,{children:[a.jsx(jw,{}),a.jsxs(G0,{children:[a.jsxs(V0,{children:["Vorschau · ",G.length," Seiten"]}),a.jsxs(Y0,{children:[a.jsx(Gs,{$active:m,onClick:()=>p(_=>!_),children:m?"Preise ✓":"Preise ✗"}),a.jsx(Gs,{onClick:()=>E("dashboard"),children:"Zurück"}),a.jsx(Gs,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),a.jsxs(Sw,{children:[a.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',a.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),a.jsx(ww,{children:G.map(_=>a.jsx("div",{children:_.render(m)},_.id))})]}):a.jsxs(a.Fragment,{children:[a.jsxs(G0,{children:[a.jsx(V0,{children:"Sponsoring-Kit · SCKW"}),a.jsx(Y0,{children:a.jsx(Gs,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),a.jsxs(Gw,{children:[a.jsx(Vw,{children:"Sponsoring-Kit zusammenstellen"}),a.jsx(Yw,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),a.jsxs(qw,{children:[a.jsx(Kw,{$on:m,onClick:()=>p(_=>!_),children:m?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),a.jsxs(Qw,{children:[v.size," von ",Yn.length," Seiten ausgewählt"]})]}),a.jsxs($w,{children:[a.jsx($i,{onClick:H,children:"Alles"}),a.jsx($i,{onClick:R,children:"Broschüre komplett"}),a.jsx($i,{onClick:U,children:"Komplett-Kit (+ Helfer)"}),a.jsx($i,{onClick:K,children:"Nur Premium-Pakete"}),a.jsx($i,{onClick:V,children:"Starter-Paket"}),a.jsx($i,{onClick:q,children:"500 €Club"}),a.jsx($i,{onClick:Y,children:"Keine"})]}),a.jsx(md,{children:"Broschüre"}),a.jsx(gd,{children:J.map(_=>a.jsxs(pd,{$checked:v.has(_.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),a.jsx(md,{children:"Community / 500 €Club"}),a.jsx(gd,{children:I.map(_=>a.jsxs(pd,{$checked:v.has(_.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),a.jsx(md,{children:"Helfer-Anhang"}),a.jsx(gd,{children:Q.map(_=>a.jsxs(pd,{$checked:v.has(_.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(_.id),onChange:()=>w(_.id)}),_.label]},_.id))}),a.jsxs(Zw,{disabled:v.size===0,onClick:()=>E("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}const Jw=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],Ww=f.section`
  background: url("${Xd("herren",1)}") center/cover;
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
`,Fw=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,Pw=f.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Iw=f.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,ez=f.main`
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
`,tz=f.section`
  margin-bottom: 4rem;
`,nz=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,iz=f.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,az=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,lz=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,rz=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,sz=f.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,oz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,cz=f.div`
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
`,uz=f.div`
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
`,dz=f.div`
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
`,fz=f.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,hz=f.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,mz=f.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,gz=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,pz=f.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,xz=f.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,bz=f.button`
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
`,yz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,vz=f.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,jz=f.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Sz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ha=f.div`
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
`,Z0=f.div`
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
`,La=f.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ua=f.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ga=f.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Va=f.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,He=f.li`
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
`,Ya=f.button`
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
`,wz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,zz=f.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,_z=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,Ez=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,xd=f.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,bd=f.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,yd=f.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,vd=f.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,Tz=f.a`
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
`,Az=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Cz=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,kz=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,qa=f.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Ka=f.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,$a=f.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function Mz(){return a.jsxs(a.Fragment,{children:[a.jsx(Ww,{children:a.jsxs(Fw,{children:[a.jsx(Pw,{children:"SCKW Jobbörse"}),a.jsx(Iw,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),a.jsxs(ez,{children:[a.jsxs(tz,{children:[a.jsx(nz,{children:"Willkommen bei der SCKW Jobbörse"}),a.jsx(iz,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),a.jsxs(az,{children:[a.jsxs(lz,{children:[a.jsx(rz,{children:"So könnte es aussehen"}),a.jsx(sz,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),a.jsx(oz,{children:Jw.map(l=>a.jsxs(cz,{children:[l.isExample&&a.jsx(uz,{children:"MUSTER"}),a.jsx(dz,{children:a.jsx(fz,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",o.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),a.jsx(hz,{children:l.title}),a.jsx(mz,{children:l.company}),a.jsx(gz,{children:l.tags.map((o,u)=>a.jsx(pz,{children:o},u))}),a.jsx(xz,{children:l.description}),a.jsx(bz,{children:"Mehr erfahren"})]},l.id))})]}),a.jsxs(yz,{children:[a.jsx(vz,{children:"Preise für Stellenausschreibungen"}),a.jsx(jz,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),a.jsxs(Sz,{children:[a.jsxs(Ha,{children:[a.jsx(La,{children:"Basis"}),a.jsx(Ua,{children:"149 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(He,{children:"30 Tage auf Website (Jobbereich)"}),a.jsx(He,{children:"Firmenlogo und Link"}),a.jsx(He,{children:"Detaillierte Stellenbeschreibung"}),a.jsx(He,{children:"Bewerbermanagement"})]}),a.jsx(Ya,{className:"secondary",children:"Basis wählen"})]}),a.jsxs(Ha,{className:"popular",children:[a.jsx(Z0,{children:"BELIEBT"}),a.jsx(La,{children:"Standard"}),a.jsx(Ua,{children:"229 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(He,{children:"Alle Basis-Features"}),a.jsx(He,{children:"1 Social Media Post"}),a.jsx(He,{children:"Instagram + Facebook Reichweite"}),a.jsx(He,{children:"Newsletter-Erwähnung"})]}),a.jsx(Ya,{children:"Standard wählen"})]}),a.jsxs(Ha,{children:[a.jsx(La,{children:"Boosted"}),a.jsx(Ua,{children:"349 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(He,{children:"Alle Standard-Features"}),a.jsx(He,{children:"Instagram Story"}),a.jsx(He,{children:"Stadionmagazin-Erwähnung"}),a.jsx(He,{children:"Prioritäre Platzierung"})]}),a.jsx(Ya,{className:"secondary",children:"Boosted wählen"})]})]}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),a.jsxs(wz,{children:[a.jsxs(Ha,{children:[a.jsx(La,{children:"Job Flat SMALL"}),a.jsx(Ua,{children:"799 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(He,{children:"Bis zu 6 Anzeigen im Jahr"}),a.jsx(He,{children:"6 Social Media Posts"}),a.jsx(He,{children:"Website-Präsenz"}),a.jsx(He,{children:"Newsletter-Integration"})]}),a.jsx(Ya,{className:"secondary",children:"Small Flat"})]}),a.jsxs(Ha,{className:"popular",children:[a.jsx(Z0,{children:"EMPFOHLEN"}),a.jsx(La,{children:"Job Flat MEDIUM"}),a.jsx(Ua,{children:"1.199 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(He,{children:"Bis zu 12 Anzeigen im Jahr"}),a.jsx(He,{children:"Stadionmagazin-Präsenz"}),a.jsx(He,{children:"Social Media Posts"}),a.jsx(He,{children:"Stories & Highlights"})]}),a.jsx(Ya,{children:"Medium Flat"})]}),a.jsxs(Ha,{children:[a.jsx(La,{children:"Job Flat PARTNER"}),a.jsx(Ua,{children:"1.499 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(He,{children:"Unbegrenzte Anzeigen"}),a.jsx(He,{children:"Erwähnung bei Heimspielen"}),a.jsx(He,{children:'"Top Partner" Sichtbarkeit'}),a.jsx(He,{children:"Prioritärer Support"})]}),a.jsx(Ya,{className:"secondary",children:"Partner Flat"})]})]}),a.jsxs(zz,{children:[a.jsx(_z,{children:"➕ Zusatzoptionen"}),a.jsxs(Ez,{children:[a.jsxs(xd,{children:[a.jsx(bd,{children:"Social Story"}),a.jsx(yd,{children:"39 €"}),a.jsx(vd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),a.jsxs(xd,{children:[a.jsx(bd,{children:"Designservice"}),a.jsx(yd,{children:"59 €"}),a.jsx(vd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),a.jsxs(xd,{children:[a.jsx(bd,{children:"Stadionmagazin"}),a.jsx(yd,{children:"99 €"}),a.jsx(vd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),a.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:a.jsx(Tz,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),a.jsxs(Az,{children:[a.jsx(Cz,{children:"🎯 Warum SCKW Jobbörse?"}),a.jsxs(kz,{children:[a.jsxs(qa,{children:[a.jsx(Ka,{children:"🏠"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"👥"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"💰"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"📈"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"⚡"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"🤲"}),a.jsxs($a,{children:[a.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),a.jsx(Qd,{})]})}f.div`
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
  width: ${l=>Math.min(l.$progress,100)}%;
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
  background: url("${Xd("herren",18)}") center/cover;
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
  opacity: ${l=>l.$isActive?1:0};
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
  background: ${l=>l.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
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
`;Dx();const nr=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],Rz=f.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,Bz=f.div`
  max-width: 1200px;
  margin: 0 auto;
`,Dz=f.div`
  text-align: center;
  margin-bottom: 2rem;
`,Oz=f.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Nz=f.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,Hz=f.select`
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
`,Lz=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Uz=f.div`
  flex: 1;
  min-width: 0;
`,Gz=f.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,Vz=f.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Yz=f.div`
  position: absolute;
  border: 2px dashed
    ${l=>l.$active?"#3b82f6":l.$hasLogo?"transparent":"rgba(255,255,255,0.4)"};
  background: ${l=>l.$active?"rgba(59,130,246,0.1)":"transparent"};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    border-color: #3b82f6;
    background: ${l=>l.$hasLogo?"transparent":"rgba(59,130,246,0.08)"};
  }
`,qz=f.span`
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  text-align: center;
  padding: 4px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Kz=f.img`
  width: ${l=>l.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
`,$z=f.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Zz=f.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,Qz=f.div`
  background: #fff;
  border: 2px solid ${l=>l.$active?"#3b82f6":"#e5e7eb"};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`,Xz=f.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,Jz=f.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Wz=f.label`
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
`,Fz=f.button`
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
`,Pz=f.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,Iz=f.input`
  display: none;
`,e6=f.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,t6=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,n6=f.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,i6=f.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,a6=f.button`
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
`;function l6(){const[l,o]=k.useState(nr[0].id),[u,c]=k.useState(null),[h,m]=k.useState([]),p=k.useRef({}),v=nr.find(R=>R.id===l)??nr[0],y=R=>h.find(U=>U.zoneId===R),x=k.useCallback((R,U)=>{if(!U)return;const V=new FileReader;V.onload=K=>{const q=K.target?.result;m(G=>[...G.filter(J=>J.zoneId!==R),{zoneId:R,dataUrl:q,scale:1}])},V.readAsDataURL(U)},[]),E=k.useCallback((R,U)=>{m(V=>V.map(K=>K.zoneId===R?{...K,scale:U}:K))},[]),w=k.useCallback(R=>{m(U=>U.filter(V=>V.zoneId!==R))},[]),H=k.useCallback(()=>{m([]),c(null)},[]),Y=R=>{c(R.id),y(R.id)||p.current[R.id]?.click()};return a.jsx(Rz,{children:a.jsxs(Bz,{children:[a.jsxs(Dz,{children:[a.jsx(Oz,{children:"Mockup Generator"}),a.jsx(Nz,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),nr.length>1&&a.jsx(Hz,{value:l,onChange:R=>{o(R.target.value),m([]),c(null)},children:nr.map(R=>a.jsx("option",{value:R.id,children:R.label},R.id))}),a.jsxs(Lz,{children:[a.jsx(Uz,{children:a.jsxs(Gz,{children:[a.jsx(Vz,{src:v.image,alt:v.label,draggable:!1}),v.zones.map(R=>{const U=y(R.id);return a.jsx(Yz,{$active:u===R.id,$hasLogo:!!U,style:{left:`${R.x}%`,top:`${R.y}%`,width:`${R.width}%`,height:`${R.height}%`},onClick:()=>Y(R),onDragOver:V=>{V.preventDefault(),c(R.id)},onDrop:V=>{V.preventDefault();const K=V.dataTransfer.files?.[0];x(R.id,K)},children:U?a.jsx(Kz,{src:U.dataUrl,alt:"Logo",draggable:!1,$scale:U.scale}):a.jsx(qz,{children:R.label})},R.id)})]})}),a.jsxs($z,{children:[a.jsx(Zz,{children:"Werbeflächen"}),v.zones.map(R=>{const U=y(R.id);return a.jsxs(Qz,{$active:u===R.id,onClick:()=>c(R.id),children:[a.jsx(Xz,{children:R.label}),a.jsxs(Jz,{children:[a.jsx(Wz,{htmlFor:`file-${R.id}`,children:U?"Ändern":"Logo hochladen"}),a.jsx(Iz,{id:`file-${R.id}`,ref:V=>{p.current[R.id]=V},type:"file",accept:"image/*",onChange:V=>x(R.id,V.target.files?.[0])}),U&&a.jsx(Fz,{onClick:V=>{V.stopPropagation(),w(R.id)},children:"Entfernen"}),U&&a.jsx(Pz,{src:U.dataUrl,alt:"Vorschau"})]}),U&&a.jsxs(t6,{children:[a.jsxs(n6,{children:[Math.round(U.scale*100),"%"]}),a.jsx(i6,{type:"range",min:"0.3",max:"3",step:"0.05",value:U.scale,onClick:V=>V.stopPropagation(),onChange:V=>{V.stopPropagation(),E(R.id,parseFloat(V.target.value))}})]}),!U&&a.jsx(e6,{children:"Klicken oder Bild hierher ziehen"})]},R.id)}),h.length>0&&a.jsx(a6,{onClick:H,children:"Alle Logos entfernen"})]})]})]})})}const r6=!1;function s6(){return a.jsx($j,{children:a.jsxs(vj,{children:[a.jsx(qn,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(Zs,{to:"/sponsoring",replace:!0})]})}),a.jsx(qn,{path:"/sponsoring",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(yw,{})]})}),a.jsx(qn,{path:"/sponsoring-v2",element:a.jsx(Zs,{to:"/sponsoring",replace:!0})}),a.jsx(qn,{path:"/sponsoring-v1",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(yS,{})]})}),a.jsx(qn,{path:"/sponsoring-handoff",element:a.jsx(Xw,{})}),a.jsx(qn,{path:"/mockup-generator",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(l6,{})]})}),a.jsx(qn,{path:"/jobs",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(Mz,{})]})}),r6,a.jsx(qn,{path:"*",element:a.jsx(Zs,{to:"/sponsoring",replace:!0})})]})})}const o6={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");vy.createRoot(document.getElementById("root")).render(a.jsx(k.StrictMode,{children:a.jsx(vv,{theme:o6,children:a.jsx(s6,{})})}));
