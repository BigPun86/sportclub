(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(h){if(h.ep)return;h.ep=!0;const m=u(h);fetch(h.href,m)}})();function my(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Tu={exports:{}},Fl={};var Ig;function gy(){if(Ig)return Fl;Ig=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,h,m){var p=null;if(m!==void 0&&(p=""+m),h.key!==void 0&&(p=""+h.key),"key"in h){m={};for(var v in h)v!=="key"&&(m[v]=h[v])}else m=h;return h=m.ref,{$$typeof:l,type:c,key:p,ref:h!==void 0?h:null,props:m}}return Fl.Fragment=o,Fl.jsx=u,Fl.jsxs=u,Fl}var e0;function py(){return e0||(e0=1,Tu.exports=gy()),Tu.exports}var a=py(),Au={exports:{}},oe={};var t0;function xy(){if(t0)return oe;t0=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.iterator;function G(S){return S===null||typeof S!="object"?null:(S=O&&S[O]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,K={};function Z(S,D,Q){this.props=S,this.context=D,this.refs=K,this.updater=Q||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(S,D){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,D,"setState")},Z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function V(){}V.prototype=Z.prototype;function L(S,D,Q){this.props=S,this.context=D,this.refs=K,this.updater=Q||q}var J=L.prototype=new V;J.constructor=L,Y(J,Z.prototype),J.isPureReactComponent=!0;var P=Array.isArray;function X(){}var E={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function he(S,D,Q){var W=Q.ref;return{$$typeof:l,type:S,key:D,ref:W!==void 0?W:null,props:Q}}function U(S,D){return he(S.type,D,S.props)}function ne(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function te(S){var D={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return D[Q]})}var He=/\/+/g;function Fe(S,D){return typeof S=="object"&&S!==null&&S.key!=null?te(""+S.key):D.toString(36)}function et(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(X,X):(S.status="pending",S.then(function(D){S.status==="pending"&&(S.status="fulfilled",S.value=D)},function(D){S.status==="pending"&&(S.status="rejected",S.reason=D)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function R(S,D,Q,W,se){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var ve=!1;if(S===null)ve=!0;else switch(ue){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(S.$$typeof){case l:case o:ve=!0;break;case _:return ve=S._init,R(ve(S._payload),D,Q,W,se)}}if(ve)return se=se(S),ve=W===""?"."+Fe(S,0):W,P(se)?(Q="",ve!=null&&(Q=ve.replace(He,"$&/")+"/"),R(se,D,Q,"",function(fn){return fn})):se!=null&&(ne(se)&&(se=U(se,Q+(se.key==null||S&&S.key===se.key?"":(""+se.key).replace(He,"$&/")+"/")+ve)),D.push(se)),1;ve=0;var Ze=W===""?".":W+":";if(P(S))for(var Ae=0;Ae<S.length;Ae++)W=S[Ae],ue=Ze+Fe(W,Ae),ve+=R(W,D,Q,ue,se);else if(Ae=G(S),typeof Ae=="function")for(S=Ae.call(S),Ae=0;!(W=S.next()).done;)W=W.value,ue=Ze+Fe(W,Ae++),ve+=R(W,D,Q,ue,se);else if(ue==="object"){if(typeof S.then=="function")return R(et(S),D,Q,W,se);throw D=String(S),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ve}function $(S,D,Q){if(S==null)return S;var W=[],se=0;return R(S,W,"","",function(ue){return D.call(Q,ue,se++)}),W}function ae(S){if(S._status===-1){var D=S._result;D=D(),D.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=D)}if(S._status===1)return S._result.default;throw S._result}var me=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},je={map:$,forEach:function(S,D,Q){$(S,function(){D.apply(this,arguments)},Q)},count:function(S){var D=0;return $(S,function(){D++}),D},toArray:function(S){return $(S,function(D){return D})||[]},only:function(S){if(!ne(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return oe.Activity=w,oe.Children=je,oe.Component=Z,oe.Fragment=u,oe.Profiler=h,oe.PureComponent=L,oe.StrictMode=c,oe.Suspense=y,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,oe.__COMPILER_RUNTIME={__proto__:null,c:function(S){return E.H.useMemoCache(S)}},oe.cache=function(S){return function(){return S.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(S,D,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var W=Y({},S.props),se=S.key;if(D!=null)for(ue in D.key!==void 0&&(se=""+D.key),D)!re.call(D,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&D.ref===void 0||(W[ue]=D[ue]);var ue=arguments.length-2;if(ue===1)W.children=Q;else if(1<ue){for(var ve=Array(ue),Ze=0;Ze<ue;Ze++)ve[Ze]=arguments[Ze+2];W.children=ve}return he(S.type,se,W)},oe.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},oe.createElement=function(S,D,Q){var W,se={},ue=null;if(D!=null)for(W in D.key!==void 0&&(ue=""+D.key),D)re.call(D,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(se[W]=D[W]);var ve=arguments.length-2;if(ve===1)se.children=Q;else if(1<ve){for(var Ze=Array(ve),Ae=0;Ae<ve;Ae++)Ze[Ae]=arguments[Ae+2];se.children=Ze}if(S&&S.defaultProps)for(W in ve=S.defaultProps,ve)se[W]===void 0&&(se[W]=ve[W]);return he(S,ue,se)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(S){return{$$typeof:v,render:S}},oe.isValidElement=ne,oe.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:ae}},oe.memo=function(S,D){return{$$typeof:x,type:S,compare:D===void 0?null:D}},oe.startTransition=function(S){var D=E.T,Q={};E.T=Q;try{var W=S(),se=E.S;se!==null&&se(Q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(X,me)}catch(ue){me(ue)}finally{D!==null&&Q.types!==null&&(D.types=Q.types),E.T=D}},oe.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},oe.use=function(S){return E.H.use(S)},oe.useActionState=function(S,D,Q){return E.H.useActionState(S,D,Q)},oe.useCallback=function(S,D){return E.H.useCallback(S,D)},oe.useContext=function(S){return E.H.useContext(S)},oe.useDebugValue=function(){},oe.useDeferredValue=function(S,D){return E.H.useDeferredValue(S,D)},oe.useEffect=function(S,D){return E.H.useEffect(S,D)},oe.useEffectEvent=function(S){return E.H.useEffectEvent(S)},oe.useId=function(){return E.H.useId()},oe.useImperativeHandle=function(S,D,Q){return E.H.useImperativeHandle(S,D,Q)},oe.useInsertionEffect=function(S,D){return E.H.useInsertionEffect(S,D)},oe.useLayoutEffect=function(S,D){return E.H.useLayoutEffect(S,D)},oe.useMemo=function(S,D){return E.H.useMemo(S,D)},oe.useOptimistic=function(S,D){return E.H.useOptimistic(S,D)},oe.useReducer=function(S,D,Q){return E.H.useReducer(S,D,Q)},oe.useRef=function(S){return E.H.useRef(S)},oe.useState=function(S){return E.H.useState(S)},oe.useSyncExternalStore=function(S,D,Q){return E.H.useSyncExternalStore(S,D,Q)},oe.useTransition=function(){return E.H.useTransition()},oe.version="19.2.3",oe}var n0;function Dd(){return n0||(n0=1,Au.exports=xy()),Au.exports}var C=Dd();const at=my(C);var Cu={exports:{}},Pl={},ku={exports:{}},Mu={};var i0;function by(){return i0||(i0=1,(function(l){function o(R,$){var ae=R.length;R.push($);e:for(;0<ae;){var me=ae-1>>>1,je=R[me];if(0<h(je,$))R[me]=$,R[ae]=je,ae=me;else break e}}function u(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var $=R[0],ae=R.pop();if(ae!==$){R[0]=ae;e:for(var me=0,je=R.length,S=je>>>1;me<S;){var D=2*(me+1)-1,Q=R[D],W=D+1,se=R[W];if(0>h(Q,ae))W<je&&0>h(se,Q)?(R[me]=se,R[W]=ae,me=W):(R[me]=Q,R[D]=ae,me=D);else if(W<je&&0>h(se,ae))R[me]=se,R[W]=ae,me=W;else break e}}return $}function h(R,$){var ae=R.sortIndex-$.sortIndex;return ae!==0?ae:R.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var y=[],x=[],_=1,w=null,O=3,G=!1,q=!1,Y=!1,K=!1,Z=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function J(R){for(var $=u(x);$!==null;){if($.callback===null)c(x);else if($.startTime<=R)c(x),$.sortIndex=$.expirationTime,o(y,$);else break;$=u(x)}}function P(R){if(Y=!1,J(R),!q)if(u(y)!==null)q=!0,X||(X=!0,te());else{var $=u(x);$!==null&&et(P,$.startTime-R)}}var X=!1,E=-1,re=5,he=-1;function U(){return K?!0:!(l.unstable_now()-he<re)}function ne(){if(K=!1,X){var R=l.unstable_now();he=R;var $=!0;try{e:{q=!1,Y&&(Y=!1,V(E),E=-1),G=!0;var ae=O;try{t:{for(J(R),w=u(y);w!==null&&!(w.expirationTime>R&&U());){var me=w.callback;if(typeof me=="function"){w.callback=null,O=w.priorityLevel;var je=me(w.expirationTime<=R);if(R=l.unstable_now(),typeof je=="function"){w.callback=je,J(R),$=!0;break t}w===u(y)&&c(y),J(R)}else c(y);w=u(y)}if(w!==null)$=!0;else{var S=u(x);S!==null&&et(P,S.startTime-R),$=!1}}break e}finally{w=null,O=ae,G=!1}$=void 0}}finally{$?te():X=!1}}}var te;if(typeof L=="function")te=function(){L(ne)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Fe=He.port2;He.port1.onmessage=ne,te=function(){Fe.postMessage(null)}}else te=function(){Z(ne,0)};function et(R,$){E=Z(function(){R(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_next=function(R){switch(O){case 1:case 2:case 3:var $=3;break;default:$=O}var ae=O;O=$;try{return R()}finally{O=ae}},l.unstable_requestPaint=function(){K=!0},l.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ae=O;O=R;try{return $()}finally{O=ae}},l.unstable_scheduleCallback=function(R,$,ae){var me=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?me+ae:me):ae=me,R){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=ae+je,R={id:_++,callback:$,priorityLevel:R,startTime:ae,expirationTime:je,sortIndex:-1},ae>me?(R.sortIndex=ae,o(x,R),u(y)===null&&R===u(x)&&(Y?(V(E),E=-1):Y=!0,et(P,ae-me))):(R.sortIndex=je,o(y,R),q||G||(q=!0,X||(X=!0,te()))),R},l.unstable_shouldYield=U,l.unstable_wrapCallback=function(R){var $=O;return function(){var ae=O;O=$;try{return R.apply(this,arguments)}finally{O=ae}}}})(Mu)),Mu}var a0;function yy(){return a0||(a0=1,ku.exports=by()),ku.exports}var Ru={exports:{}},dt={};var l0;function vy(){if(l0)return dt;l0=1;var l=Dd();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)x+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(y,x,_){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:y,containerInfo:x,implementation:_}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,dt.createPortal=function(y,x){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return m(y,x,null,_)},dt.flushSync=function(y){var x=p.T,_=c.p;try{if(p.T=null,c.p=2,y)return y()}finally{p.T=x,c.p=_,c.d.f()}},dt.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},dt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},dt.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var _=x.as,w=v(_,x.crossOrigin),O=typeof x.integrity=="string"?x.integrity:void 0,G=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;_==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:O,fetchPriority:G}):_==="script"&&c.d.X(y,{crossOrigin:w,integrity:O,fetchPriority:G,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},dt.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var _=v(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},dt.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var _=x.as,w=v(_,x.crossOrigin);c.d.L(y,_,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},dt.preloadModule=function(y,x){if(typeof y=="string")if(x){var _=v(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},dt.requestFormReset=function(y){c.d.r(y)},dt.unstable_batchedUpdates=function(y,x){return y(x)},dt.useFormState=function(y,x,_){return p.H.useFormState(y,x,_)},dt.useFormStatus=function(){return p.H.useHostTransitionStatus()},dt.version="19.2.3",dt}var r0;function jy(){if(r0)return Ru.exports;r0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Ru.exports=vy(),Ru.exports}var s0;function Sy(){if(s0)return Pl;s0=1;var l=yy(),o=Dd(),u=jy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return y(r),e;if(s===i)return y(r),t;s=s.sibling}throw Error(c(188))}if(n.return!==i.return)n=r,i=s;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,i=s;break}if(g===i){d=!0,i=r,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,i=r;break}if(g===i){d=!0,i=s,n=r;break}g=g.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,O=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),L=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var He=Symbol.for("react.client.reference");function Fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===He?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Z:return"Profiler";case K:return"StrictMode";case P:return"Suspense";case X:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case L:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return t=e.displayName||null,t!==null?t:Fe(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return Fe(e(t))}catch{}}return null}var et=Array.isArray,R=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},me=[],je=-1;function S(e){return{current:e}}function D(e){0>je||(e.current=me[je],me[je]=null,je--)}function Q(e,t){je++,me[je]=e.current,e.current=t}var W=S(null),se=S(null),ue=S(null),ve=S(null);function Ze(e,t){switch(Q(ue,t),Q(se,e),Q(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sg(t),e=wg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(W),Q(W,e)}function Ae(){D(W),D(se),D(ue)}function fn(e){e.memoizedState!==null&&Q(ve,e);var t=W.current,n=wg(t,e.type);t!==n&&(Q(se,e),Q(W,n))}function hn(e){se.current===e&&(D(W),D(se)),ve.current===e&&(D(ve),Ql._currentValue=ae)}var Et,Fi;function Yt(e){if(Et===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Et=t&&t[1]||"",Fi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+Fi}var mn=!1;function uo(e,t){if(!e||mn)return"";mn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(M){var k=M}Reflect.construct(e,[],H)}else{try{H.call()}catch(M){k=M}e.call(H.prototype)}}else{try{throw Error()}catch(M){k=M}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(M){if(M&&k&&typeof M.stack=="string")return[M.stack,k.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var b=d.split(`
`),A=g.split(`
`);for(r=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(i===b.length||r===A.length)for(i=b.length-1,r=A.length-1;1<=i&&0<=r&&b[i]!==A[r];)r--;for(;1<=i&&0<=r;i--,r--)if(b[i]!==A[r]){if(i!==1||r!==1)do if(i--,r--,0>r||b[i]!==A[r]){var B=`
`+b[i].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=i&&0<=r);break}}}finally{mn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yt(n):""}function Zx(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return uo(e.type,!1);case 11:return uo(e.type.render,!1);case 1:return uo(e.type,!0);case 31:return Yt("Activity");default:return""}}function Pd(e){try{var t="",n=null;do t+=Zx(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fo=Object.prototype.hasOwnProperty,ho=l.unstable_scheduleCallback,mo=l.unstable_cancelCallback,$x=l.unstable_shouldYield,Qx=l.unstable_requestPaint,Tt=l.unstable_now,Xx=l.unstable_getCurrentPriorityLevel,Id=l.unstable_ImmediatePriority,ef=l.unstable_UserBlockingPriority,hr=l.unstable_NormalPriority,Jx=l.unstable_LowPriority,tf=l.unstable_IdlePriority,Wx=l.log,Fx=l.unstable_setDisableYieldValue,ll=null,At=null;function Jn(e){if(typeof Wx=="function"&&Fx(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(ll,e)}catch{}}var Ct=Math.clz32?Math.clz32:eb,Px=Math.log,Ix=Math.LN2;function eb(e){return e>>>=0,e===0?32:31-(Px(e)/Ix|0)|0}var mr=256,gr=262144,pr=4194304;function Ei(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?r=Ei(i):(d&=g,d!==0?r=Ei(d):n||(n=g&~e,n!==0&&(r=Ei(n))))):(g=i&~s,g!==0?r=Ei(g):d!==0?r=Ei(d):n||(n=i&~e,n!==0&&(r=Ei(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(){var e=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nb(e,t,n,i,r,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-Ct(n),H=1<<B;g[B]=0,b[B]=-1;var k=A[B];if(k!==null)for(A[B]=null,B=0;B<k.length;B++){var M=k[B];M!==null&&(M.lane&=-536870913)}n&=~H}i!==0&&af(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function af(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function rf(e,t){var n=t&-t;return n=(n&42)!==0?1:po(n),(n&(e.suspendedLanes|t))!==0?0:n}function po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function of(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Wn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Wn,gt="__reactProps$"+Wn,Pi="__reactContainer$"+Wn,bo="__reactEvents$"+Wn,ib="__reactListeners$"+Wn,ab="__reactHandles$"+Wn,cf="__reactResources$"+Wn,ol="__reactMarker$"+Wn;function yo(e){delete e[rt],delete e[gt],delete e[bo],delete e[ib],delete e[ab]}function Ii(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pi]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kg(e);e!==null;){if(n=e[rt])return n;e=kg(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[rt]||e[Pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ta(e){var t=e[cf];return t||(t=e[cf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[ol]=!0}var uf=new Set,df={};function Ti(e,t){na(e,t),na(e+"Capture",t)}function na(e,t){for(df[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var lb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ff={},hf={};function rb(e){return fo.call(hf,e)?!0:fo.call(ff,e)?!1:lb.test(e)?hf[e]=!0:(ff[e]=!0,!1)}function br(e,t,n){if(rb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){if(!e._valueTracker){var t=mf(e)?"checked":"value";e._valueTracker=sb(e,t,""+e[t])}}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=mf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ob=/[\n"\\]/g;function Kt(e){return e.replace(ob,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,n,i,r,s,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?So(e,d,qt(t)):n!=null?So(e,d,qt(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+qt(g):e.removeAttribute("name")}function pf(e,t,n,i,r,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vo(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),vo(e)}function So(e,t,n){t==="number"&&vr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ia(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function xf(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function bf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(et(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),vo(e)}function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||cb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&yf(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&yf(e,s,t[s])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),db=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return db.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zn(){}var zo=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,ra=null;function jf(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[gt]||null;if(!r)throw Error(c(90));jo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&gf(i)}break e;case"textarea":xf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ia(e,!!n.multiple,t,!1)}}}var Eo=!1;function Sf(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var i=e(t);return i}finally{if(Eo=!1,(la!==null||ra!==null)&&(os(),la&&(t=la,e=ra,ra=la=null,jf(t),e)))for(t=0;t<e.length;t++)jf(e[t])}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(_n)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){To=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{To=!1}var Fn=null,Ao=null,Sr=null;function wf(){if(Sr)return Sr;var e,t=Ao,n=t.length,i,r="value"in Fn?Fn.value:Fn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===r[s-i];i++);return Sr=r.slice(e,1<i?1-i:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function zf(){return!1}function pt(e){function t(n,i,r,s,d){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:zf,this.isPropagationStopped=zf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=pt(Ai),fl=w({},Ai,{view:0,detail:0}),fb=pt(fl),Co,ko,hl,Er=w({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(Co=e.screenX-hl.screenX,ko=e.screenY-hl.screenY):ko=Co=0,hl=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),_f=pt(Er),hb=w({},Er,{dataTransfer:0}),mb=pt(hb),gb=w({},fl,{relatedTarget:0}),Mo=pt(gb),pb=w({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),xb=pt(pb),bb=w({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yb=pt(bb),vb=w({},Ai,{data:0}),Ef=pt(vb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wb[e])?!!t[e]:!1}function Ro(){return zb}var _b=w({},fl,{key:function(e){if(e.key){var t=jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eb=pt(_b),Tb=w({},Er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=pt(Tb),Ab=w({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Cb=pt(Ab),kb=w({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mb=pt(kb),Rb=w({},Er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=pt(Rb),Db=w({},Ai,{newState:0,oldState:0}),Ob=pt(Db),Nb=[9,13,27,32],Bo=_n&&"CompositionEvent"in window,ml=null;_n&&"documentMode"in document&&(ml=document.documentMode);var Hb=_n&&"TextEvent"in window&&!ml,Af=_n&&(!Bo||ml&&8<ml&&11>=ml),Cf=" ",kf=!1;function Mf(e,t){switch(e){case"keyup":return Nb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function Lb(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(kf=!0,Cf);case"textInput":return e=t.data,e===Cf&&kf?null:e;default:return null}}function Ub(e,t){if(sa)return e==="compositionend"||!Bo&&Mf(e,t)?(e=wf(),Sr=Ao=Fn=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gb[e.type]:t==="textarea"}function Df(e,t,n,i){la?ra?ra.push(i):ra=[i]:la=i,t=gs(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gl=null,pl=null;function Vb(e){pg(e,0)}function Tr(e){var t=cl(e);if(gf(t))return e}function Of(e,t){if(e==="change")return t}var Nf=!1;if(_n){var Do;if(_n){var Oo="oninput"in document;if(!Oo){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),Oo=typeof Hf.oninput=="function"}Do=Oo}else Do=!1;Nf=Do&&(!document.documentMode||9<document.documentMode)}function Lf(){gl&&(gl.detachEvent("onpropertychange",Uf),pl=gl=null)}function Uf(e){if(e.propertyName==="value"&&Tr(pl)){var t=[];Df(t,pl,e,_o(e)),Sf(Vb,t)}}function Yb(e,t,n){e==="focusin"?(Lf(),gl=t,pl=n,gl.attachEvent("onpropertychange",Uf)):e==="focusout"&&Lf()}function qb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tr(pl)}function Kb(e,t){if(e==="click")return Tr(t)}function Zb(e,t){if(e==="input"||e==="change")return Tr(t)}function $b(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:$b;function xl(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fo.call(t,r)||!kt(e[r],t[r]))return!1}return!0}function Gf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vf(e,t){var n=Gf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gf(n)}}function Yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vr(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qb=_n&&"documentMode"in document&&11>=document.documentMode,oa=null,Ho=null,bl=null,Lo=!1;function Kf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||oa==null||oa!==vr(i)||(i=oa,"selectionStart"in i&&No(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bl&&xl(bl,i)||(bl=i,i=gs(Ho,"onSelect"),0<i.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=oa)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionrun:Ci("Transition","TransitionRun"),transitionstart:Ci("Transition","TransitionStart"),transitioncancel:Ci("Transition","TransitionCancel"),transitionend:Ci("Transition","TransitionEnd")},Uo={},Zf={};_n&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ki(e){if(Uo[e])return Uo[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zf)return Uo[e]=t[n];return e}var $f=ki("animationend"),Qf=ki("animationiteration"),Xf=ki("animationstart"),Xb=ki("transitionrun"),Jb=ki("transitionstart"),Wb=ki("transitioncancel"),Jf=ki("transitionend"),Wf=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function rn(e,t){Wf.set(e,t),Ti(t,[e])}var Ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],ua=0,Vo=0;function Cr(){for(var e=ua,t=Vo=ua=0;t<e;){var n=Zt[t];Zt[t++]=null;var i=Zt[t];Zt[t++]=null;var r=Zt[t];Zt[t++]=null;var s=Zt[t];if(Zt[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&Ff(n,r,s)}}function kr(e,t,n,i){Zt[ua++]=e,Zt[ua++]=t,Zt[ua++]=n,Zt[ua++]=i,Vo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Yo(e,t,n,i){return kr(e,t,n,i),Mr(e)}function Mi(e,t){return kr(e,null,null,t),Mr(e)}function Ff(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ct(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Mr(e){if(50<Gl)throw Gl=0,Fc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var da={};function Fb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new Fb(e,t,n,i)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function En(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rr(e,t,n,i,r,s){var d=0;if(i=e,typeof e=="function")qo(e)&&(d=1);else if(typeof e=="string")d=ny(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Mt(31,n,t,r),e.elementType=he,e.lanes=s,e;case Y:return Ri(n.children,r,s,t);case K:d=8,r|=24;break;case Z:return e=Mt(12,n,t,r|2),e.elementType=Z,e.lanes=s,e;case P:return e=Mt(13,n,t,r),e.elementType=P,e.lanes=s,e;case X:return e=Mt(19,n,t,r),e.elementType=X,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case V:d=9;break e;case J:d=11;break e;case E:d=14;break e;case re:d=16,i=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Mt(d,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ri(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function Ko(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function If(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Zo(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eh=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=eh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Pd(t)},eh.set(e,t),t)}return{value:e,source:t,stack:Pd(t)}}var fa=[],ha=0,Br=null,yl=0,Qt=[],Xt=0,Pn=null,gn=1,pn="";function Tn(e,t){fa[ha++]=yl,fa[ha++]=Br,Br=e,yl=t}function th(e,t,n){Qt[Xt++]=gn,Qt[Xt++]=pn,Qt[Xt++]=Pn,Pn=e;var i=gn;e=pn;var r=32-Ct(i)-1;i&=~(1<<r),n+=1;var s=32-Ct(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,gn=1<<32-Ct(t)+r|n<<r|i,pn=s+e}else gn=1<<s|n<<r|i,pn=e}function $o(e){e.return!==null&&(Tn(e,1),th(e,1,0))}function Qo(e){for(;e===Br;)Br=fa[--ha],fa[ha]=null,yl=fa[--ha],fa[ha]=null;for(;e===Pn;)Pn=Qt[--Xt],Qt[Xt]=null,pn=Qt[--Xt],Qt[Xt]=null,gn=Qt[--Xt],Qt[Xt]=null}function nh(e,t){Qt[Xt++]=gn,Qt[Xt++]=pn,Qt[Xt++]=Pn,gn=t.id,pn=t.overflow,Pn=e}var st=null,Be=null,ye=!1,In=null,Jt=!1,Xo=Error(c(519));function ei(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl($t(t,e)),Xo}function ih(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rt]=e,t[gt]=i,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)pe(Yl[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),pf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),bf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||vg(t.textContent,n)?(i.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),i.onScroll!=null&&pe("scroll",t),i.onScrollEnd!=null&&pe("scrollend",t),i.onClick!=null&&(t.onclick=zn),t=!0):t=!1,t||ei(e,!0)}function ah(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:st=st.return}}function ma(e){if(e!==st)return!1;if(!ye)return ah(e),ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||fu(e.type,e.memoizedProps)),n=!n),n&&Be&&ei(e),ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=Cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=Cg(e)}else t===27?(t=Be,mi(e.type)?(e=xu,xu=null,Be=e):Be=t):Be=st?Ft(e.stateNode.nextSibling):null;return!0}function Bi(){Be=st=null,ye=!1}function Jo(){var e=In;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),In=null),e}function vl(e){In===null?In=[e]:In.push(e)}var Wo=S(null),Di=null,An=null;function ti(e,t,n){Q(Wo,t._currentValue),t._currentValue=n}function Cn(e){e._currentValue=Wo.current,D(Wo)}function Fo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=r;for(var b=0;b<t.length;b++)if(g.context===t[b]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Fo(s.return,n,e),i||(d=null);break e}s=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Fo(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function ga(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var g=r.type;kt(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===ve.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ql):e=[Ql])}r=r.return}e!==null&&Po(t,e,n,i),t.flags|=262144}function Dr(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){Di=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return lh(Di,e)}function Or(e,t){return Di===null&&Oi(e),lh(e,t)}function lh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},An===null){if(e===null)throw Error(c(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return n}var Pb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ib=l.unstable_scheduleCallback,e1=l.unstable_NormalPriority,$e={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Io(){return{controller:new Pb,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&Ib(e1,function(){e.controller.abort()})}var Sl=null,ec=0,pa=0,xa=null;function t1(e,t){if(Sl===null){var n=Sl=[];ec=0,pa=iu(),xa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ec++,t.then(rh,rh),t}function rh(){if(--ec===0&&Sl!==null){xa!==null&&(xa.status="fulfilled");var e=Sl;Sl=null,pa=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var sh=R.S;R.S=function(e,t){Km=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t1(e,t),sh!==null&&sh(e,t)};var Ni=S(null);function tc(){var e=Ni.current;return e!==null?e:Re.pooledCache}function Nr(e,t){t===null?Q(Ni,Ni.current):Q(Ni,t.pool)}function oh(){var e=tc();return e===null?null:{parent:$e._currentValue,pool:e}}var ba=Error(c(460)),nc=Error(c(474)),Hr=Error(c(542)),Lr={then:function(){}};function ch(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zn,zn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fh(e),e;default:if(typeof t.status=="string")t.then(zn,zn);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fh(e),e}throw Li=t,ba}}function Hi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Li=n,ba):n}}var Li=null;function dh(){if(Li===null)throw Error(c(459));var e=Li;return Li=null,e}function fh(e){if(e===ba||e===Hr)throw Error(c(483))}var ya=null,wl=0;function Ur(e){var t=wl;return wl+=1,ya===null&&(ya=[]),uh(ya,e,t)}function zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gr(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hh(e){function t(z,j){if(e){var T=z.deletions;T===null?(z.deletions=[j],z.flags|=16):T.push(j)}}function n(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function i(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function r(z,j){return z=En(z,j),z.index=0,z.sibling=null,z}function s(z,j,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<j?(z.flags|=67108866,j):T):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,j,T,N){return j===null||j.tag!==6?(j=Ko(T,z.mode,N),j.return=z,j):(j=r(j,T),j.return=z,j)}function b(z,j,T,N){var ie=T.type;return ie===Y?B(z,j,T.props.children,N,T.key):j!==null&&(j.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===re&&Hi(ie)===j.type)?(j=r(j,T.props),zl(j,T),j.return=z,j):(j=Rr(T.type,T.key,T.props,null,z.mode,N),zl(j,T),j.return=z,j)}function A(z,j,T,N){return j===null||j.tag!==4||j.stateNode.containerInfo!==T.containerInfo||j.stateNode.implementation!==T.implementation?(j=Zo(T,z.mode,N),j.return=z,j):(j=r(j,T.children||[]),j.return=z,j)}function B(z,j,T,N,ie){return j===null||j.tag!==7?(j=Ri(T,z.mode,N,ie),j.return=z,j):(j=r(j,T),j.return=z,j)}function H(z,j,T){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ko(""+j,z.mode,T),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return T=Rr(j.type,j.key,j.props,null,z.mode,T),zl(T,j),T.return=z,T;case q:return j=Zo(j,z.mode,T),j.return=z,j;case re:return j=Hi(j),H(z,j,T)}if(et(j)||te(j))return j=Ri(j,z.mode,T,null),j.return=z,j;if(typeof j.then=="function")return H(z,Ur(j),T);if(j.$$typeof===L)return H(z,Or(z,j),T);Gr(z,j)}return null}function k(z,j,T,N){var ie=j!==null?j.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ie!==null?null:g(z,j,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case G:return T.key===ie?b(z,j,T,N):null;case q:return T.key===ie?A(z,j,T,N):null;case re:return T=Hi(T),k(z,j,T,N)}if(et(T)||te(T))return ie!==null?null:B(z,j,T,N,null);if(typeof T.then=="function")return k(z,j,Ur(T),N);if(T.$$typeof===L)return k(z,j,Or(z,T),N);Gr(z,T)}return null}function M(z,j,T,N,ie){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return z=z.get(T)||null,g(j,z,""+N,ie);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case G:return z=z.get(N.key===null?T:N.key)||null,b(j,z,N,ie);case q:return z=z.get(N.key===null?T:N.key)||null,A(j,z,N,ie);case re:return N=Hi(N),M(z,j,T,N,ie)}if(et(N)||te(N))return z=z.get(T)||null,B(j,z,N,ie,null);if(typeof N.then=="function")return M(z,j,T,Ur(N),ie);if(N.$$typeof===L)return M(z,j,T,Or(j,N),ie);Gr(j,N)}return null}function F(z,j,T,N){for(var ie=null,Se=null,I=j,de=j=0,be=null;I!==null&&de<T.length;de++){I.index>de?(be=I,I=null):be=I.sibling;var we=k(z,I,T[de],N);if(we===null){I===null&&(I=be);break}e&&I&&we.alternate===null&&t(z,I),j=s(we,j,de),Se===null?ie=we:Se.sibling=we,Se=we,I=be}if(de===T.length)return n(z,I),ye&&Tn(z,de),ie;if(I===null){for(;de<T.length;de++)I=H(z,T[de],N),I!==null&&(j=s(I,j,de),Se===null?ie=I:Se.sibling=I,Se=I);return ye&&Tn(z,de),ie}for(I=i(I);de<T.length;de++)be=M(I,z,de,T[de],N),be!==null&&(e&&be.alternate!==null&&I.delete(be.key===null?de:be.key),j=s(be,j,de),Se===null?ie=be:Se.sibling=be,Se=be);return e&&I.forEach(function(yi){return t(z,yi)}),ye&&Tn(z,de),ie}function le(z,j,T,N){if(T==null)throw Error(c(151));for(var ie=null,Se=null,I=j,de=j=0,be=null,we=T.next();I!==null&&!we.done;de++,we=T.next()){I.index>de?(be=I,I=null):be=I.sibling;var yi=k(z,I,we.value,N);if(yi===null){I===null&&(I=be);break}e&&I&&yi.alternate===null&&t(z,I),j=s(yi,j,de),Se===null?ie=yi:Se.sibling=yi,Se=yi,I=be}if(we.done)return n(z,I),ye&&Tn(z,de),ie;if(I===null){for(;!we.done;de++,we=T.next())we=H(z,we.value,N),we!==null&&(j=s(we,j,de),Se===null?ie=we:Se.sibling=we,Se=we);return ye&&Tn(z,de),ie}for(I=i(I);!we.done;de++,we=T.next())we=M(I,z,de,we.value,N),we!==null&&(e&&we.alternate!==null&&I.delete(we.key===null?de:we.key),j=s(we,j,de),Se===null?ie=we:Se.sibling=we,Se=we);return e&&I.forEach(function(hy){return t(z,hy)}),ye&&Tn(z,de),ie}function Me(z,j,T,N){if(typeof T=="object"&&T!==null&&T.type===Y&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case G:e:{for(var ie=T.key;j!==null;){if(j.key===ie){if(ie=T.type,ie===Y){if(j.tag===7){n(z,j.sibling),N=r(j,T.props.children),N.return=z,z=N;break e}}else if(j.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===re&&Hi(ie)===j.type){n(z,j.sibling),N=r(j,T.props),zl(N,T),N.return=z,z=N;break e}n(z,j);break}else t(z,j);j=j.sibling}T.type===Y?(N=Ri(T.props.children,z.mode,N,T.key),N.return=z,z=N):(N=Rr(T.type,T.key,T.props,null,z.mode,N),zl(N,T),N.return=z,z=N)}return d(z);case q:e:{for(ie=T.key;j!==null;){if(j.key===ie)if(j.tag===4&&j.stateNode.containerInfo===T.containerInfo&&j.stateNode.implementation===T.implementation){n(z,j.sibling),N=r(j,T.children||[]),N.return=z,z=N;break e}else{n(z,j);break}else t(z,j);j=j.sibling}N=Zo(T,z.mode,N),N.return=z,z=N}return d(z);case re:return T=Hi(T),Me(z,j,T,N)}if(et(T))return F(z,j,T,N);if(te(T)){if(ie=te(T),typeof ie!="function")throw Error(c(150));return T=ie.call(T),le(z,j,T,N)}if(typeof T.then=="function")return Me(z,j,Ur(T),N);if(T.$$typeof===L)return Me(z,j,Or(z,T),N);Gr(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,j!==null&&j.tag===6?(n(z,j.sibling),N=r(j,T),N.return=z,z=N):(n(z,j),N=Ko(T,z.mode,N),N.return=z,z=N),d(z)):n(z,j)}return function(z,j,T,N){try{wl=0;var ie=Me(z,j,T,N);return ya=null,ie}catch(I){if(I===ba||I===Hr)throw I;var Se=Mt(29,I,null,z.mode);return Se.lanes=N,Se.return=z,Se}}}var Ui=hh(!0),mh=hh(!1),ni=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Mr(e),Ff(e,null,n),t}return kr(e,i,t,n),Mr(e)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lf(e,n)}}function lc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var rc=!1;function El(){if(rc){var e=xa;if(e!==null)throw e}}function Tl(e,t,n,i){rc=!1;var r=e.updateQueue;ni=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var b=g,A=b.next;b.next=null,d===null?s=A:d.next=A,d=b;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==d&&(g===null?B.firstBaseUpdate=A:g.next=A,B.lastBaseUpdate=b))}if(s!==null){var H=r.baseState;d=0,B=A=b=null,g=s;do{var k=g.lane&-536870913,M=k!==g.lane;if(M?(xe&k)===k:(i&k)===k){k!==0&&k===pa&&(rc=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,le=g;k=t;var Me=n;switch(le.tag){case 1:if(F=le.payload,typeof F=="function"){H=F.call(Me,H,k);break e}H=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=le.payload,k=typeof F=="function"?F.call(Me,H,k):F,k==null)break e;H=w({},H,k);break e;case 2:ni=!0}}k=g.callback,k!==null&&(e.flags|=64,M&&(e.flags|=8192),M=r.callbacks,M===null?r.callbacks=[k]:M.push(k))}else M={lane:k,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(A=B=M,b=H):B=B.next=M,d|=k;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;M=g,g=M.next,M.next=null,r.lastBaseUpdate=M,r.shared.pending=null}}while(!0);B===null&&(b=H),r.baseState=b,r.firstBaseUpdate=A,r.lastBaseUpdate=B,s===null&&(r.shared.lanes=0),ci|=d,e.lanes=d,e.memoizedState=H}}function gh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ph(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gh(n[e],t)}var va=S(null),Vr=S(0);function xh(e,t){e=Ln,Q(Vr,e),Q(va,t),Ln=e|t.baseLanes}function sc(){Q(Vr,Ln),Q(va,va.current)}function oc(){Ln=Vr.current,D(va),D(Vr)}var Rt=S(null),Wt=null;function li(e){var t=e.alternate;Q(qe,qe.current&1),Q(Rt,e),Wt===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(Wt=e)}function cc(e){Q(qe,qe.current),Q(Rt,e),Wt===null&&(Wt=e)}function bh(e){e.tag===22?(Q(qe,qe.current),Q(Rt,e),Wt===null&&(Wt=e)):ri()}function ri(){Q(qe,qe.current),Q(Rt,Rt.current)}function Bt(e){D(Rt),Wt===e&&(Wt=null),D(qe)}var qe=S(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gu(n)||pu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,ce=null,Ce=null,Qe=null,qr=!1,ja=!1,Gi=!1,Kr=0,Al=0,Sa=null,i1=0;function Ve(){throw Error(c(321))}function uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function dc(e,t,n,i,r,s){return kn=s,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?tm:Ec,Gi=!1,s=n(i,r),Gi=!1,ja&&(s=vh(t,n,i,r)),yh(e),s}function yh(e){R.H=Ml;var t=Ce!==null&&Ce.next!==null;if(kn=0,Qe=Ce=ce=null,qr=!1,Al=0,Sa=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Dr(e)&&(Xe=!0))}function vh(e,t,n,i){ce=e;var r=0;do{if(ja&&(Sa=null),Al=0,ja=!1,25<=r)throw Error(c(301));if(r+=1,Qe=Ce=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=nm,s=t(n,i)}while(ja);return s}function a1(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Cl(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ce.flags|=1024),t}function fc(){var e=Kr!==0;return Kr=0,e}function hc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mc(e){if(qr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qr=!1}kn=0,Qe=Ce=ce=null,ja=!1,Al=Kr=0,Sa=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ke(){if(Ce===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Qe===null?ce.memoizedState:Qe.next;if(t!==null)Qe=t,Ce=e;else{if(e===null)throw ce.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var t=Al;return Al+=1,Sa===null&&(Sa=[]),e=uh(Sa,e,t),t=ce,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?tm:Ec),e}function $r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===L)return ot(e)}throw Error(c(438,String(e)))}function gc(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zr(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=U;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function Qr(e){var t=Ke();return pc(t,Ce,e)}function pc(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var g=d=null,b=null,A=t,B=!1;do{var H=A.lane&-536870913;if(H!==A.lane?(xe&H)===H:(kn&H)===H){var k=A.revertLane;if(k===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),H===pa&&(B=!0);else if((kn&k)===k){A=A.next,k===pa&&(B=!0);continue}else H={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(g=b=H,d=s):b=b.next=H,ce.lanes|=k,ci|=k;H=A.action,Gi&&n(s,H),s=A.hasEagerState?A.eagerState:n(s,H)}else k={lane:H,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(g=b=k,d=s):b=b.next=k,ce.lanes|=H,ci|=H;A=A.next}while(A!==null&&A!==t);if(b===null?d=s:b.next=g,!kt(s,e.memoizedState)&&(Xe=!0,B&&(n=xa,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=b,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xc(e){var t=Ke(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);kt(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function jh(e,t,n){var i=ce,r=Ke(),s=ye;if(s){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!kt((Ce||r).memoizedState,n);if(d&&(r.memoizedState=n,Xe=!0),r=r.queue,vc(zh.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,wa(9,{destroy:void 0},wh.bind(null,i,r,n,t),null),Re===null)throw Error(c(349));s||(kn&127)!==0||Sh(i,t,n)}return n}function Sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=Zr(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wh(e,t,n,i){t.value=n,t.getSnapshot=i,_h(t)&&Eh(e)}function zh(e,t,n){return n(function(){_h(t)&&Eh(e)})}function _h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Eh(e){var t=Mi(e,2);t!==null&&jt(t,e,2)}function bc(e){var t=ft();if(typeof e=="function"){var n=e;if(e=n(),Gi){Jn(!0);try{n()}finally{Jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function Th(e,t,n,i){return e.baseState=n,pc(e,Ce,typeof i=="function"?i:Mn)}function l1(e,t,n,i,r){if(Wr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};R.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Ah(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ah(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=R.T,d={};R.T=d;try{var g=n(r,i),b=R.S;b!==null&&b(d,g),Ch(e,t,g)}catch(A){yc(e,t,A)}finally{s!==null&&d.types!==null&&(s.types=d.types),R.T=s}}else try{s=n(r,i),Ch(e,t,s)}catch(A){yc(e,t,A)}}function Ch(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){kh(e,t,i)},function(i){return yc(e,t,i)}):kh(e,t,n)}function kh(e,t,n){t.status="fulfilled",t.value=n,Mh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ah(e,n)))}function yc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Mh(t),t=t.next;while(t!==i)}e.action=null}function Mh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rh(e,t){return t}function Bh(e,t){if(ye){var n=Re.formState;if(n!==null){e:{var i=ce;if(ye){if(Be){t:{for(var r=Be,s=Jt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Ft(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Be=Ft(r.nextSibling),i=r.data==="F!";break e}}ei(i)}i=!1}i&&(t=n[0])}}return n=ft(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rh,lastRenderedState:t},n.queue=i,n=Ph.bind(null,ce,i),i.dispatch=n,i=bc(!1),s=_c.bind(null,ce,!1,i.queue),i=ft(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=l1.bind(null,ce,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Dh(e){var t=Ke();return Oh(t,Ce,e)}function Oh(e,t,n){if(t=pc(e,t,Rh)[0],e=Qr(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Cl(t)}catch(d){throw d===ba?Hr:d}else i=t;t=Ke();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,wa(9,{destroy:void 0},r1.bind(null,r,n),null)),[i,s,e]}function r1(e,t){e.action=t}function Nh(e){var t=Ke(),n=Ce;if(n!==null)return Oh(t,n,e);Ke(),t=t.memoizedState,n=Ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Zr(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Hh(){return Ke().memoizedState}function Xr(e,t,n,i){var r=ft();ce.flags|=e,r.memoizedState=wa(1|t,{destroy:void 0},n,i===void 0?null:i)}function Jr(e,t,n,i){var r=Ke();i=i===void 0?null:i;var s=r.memoizedState.inst;Ce!==null&&i!==null&&uc(i,Ce.memoizedState.deps)?r.memoizedState=wa(t,s,n,i):(ce.flags|=e,r.memoizedState=wa(1|t,s,n,i))}function Lh(e,t){Xr(8390656,8,e,t)}function vc(e,t){Jr(2048,8,e,t)}function s1(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Zr(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Uh(e){var t=Ke().memoizedState;return s1({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Gh(e,t){return Jr(4,2,e,t)}function Vh(e,t){return Jr(4,4,e,t)}function Yh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qh(e,t,n){n=n!=null?n.concat([e]):null,Jr(4,4,Yh.bind(null,t,e),n)}function jc(){}function Kh(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&uc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Zh(e,t){var n=Ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&uc(t,i[1]))return i[0];if(i=e(),Gi){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[i,t],i}function Sc(e,t,n){return n===void 0||(kn&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$m(),ce.lanes|=e,ci|=e,n)}function $h(e,t,n,i){return kt(n,t)?n:va.current!==null?(e=Sc(e,n,i),kt(e,t)||(Xe=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(xe&261930)===0?(Xe=!0,e.memoizedState=n):(e=$m(),ce.lanes|=e,ci|=e,t)}function Qh(e,t,n,i,r){var s=$.p;$.p=s!==0&&8>s?s:8;var d=R.T,g={};R.T=g,_c(e,!1,t,n);try{var b=r(),A=R.S;if(A!==null&&A(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var B=n1(b,i);kl(e,t,B,Nt(e))}else kl(e,t,i,Nt(e))}catch(H){kl(e,t,{then:function(){},status:"rejected",reason:H},Nt())}finally{$.p=s,d!==null&&g.types!==null&&(d.types=g.types),R.T=d}}function o1(){}function wc(e,t,n,i){if(e.tag!==5)throw Error(c(476));var r=Xh(e).queue;Qh(e,r,t,ae,n===null?o1:function(){return Jh(e),n(i)})}function Xh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jh(e){var t=Xh(e);t.next===null&&(t=e.alternate.memoizedState),kl(e,t.next.queue,{},Nt())}function zc(){return ot(Ql)}function Wh(){return Ke().memoizedState}function Fh(){return Ke().memoizedState}function c1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=ii(n);var i=ai(t,e,n);i!==null&&(jt(i,t,n),_l(i,t,n)),t={cache:Io()},e.payload=t;return}t=t.return}}function u1(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Wr(e)?Ih(t,n):(n=Yo(e,t,n,i),n!==null&&(jt(n,e,i),em(n,t,i)))}function Ph(e,t,n){var i=Nt();kl(e,t,n,i)}function kl(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wr(e))Ih(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(r.hasEagerState=!0,r.eagerState=g,kt(g,d))return kr(e,t,r,0),Re===null&&Cr(),!1}catch{}if(n=Yo(e,t,r,i),n!==null)return jt(n,e,i),em(n,t,i),!0}return!1}function _c(e,t,n,i){if(i={lane:2,revertLane:iu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Wr(e)){if(t)throw Error(c(479))}else t=Yo(e,n,i,2),t!==null&&jt(t,e,2)}function Wr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ih(e,t){ja=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function em(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lf(e,n)}}var Ml={readContext:ot,use:$r,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};Ml.useEffectEvent=Ve;var tm={readContext:ot,use:$r,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Lh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xr(4194308,4,Yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var n=ft();t=t===void 0?null:t;var i=e();if(Gi){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ft();if(n!==void 0){var r=n(t);if(Gi){Jn(!0);try{n(t)}finally{Jn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=u1.bind(null,ce,e),[i.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=bc(e);var t=e.queue,n=Ph.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:jc,useDeferredValue:function(e,t){var n=ft();return Sc(n,e,t)},useTransition:function(){var e=bc(!1);return e=Qh.bind(null,ce,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ce,r=ft();if(ye){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Re===null)throw Error(c(349));(xe&127)!==0||Sh(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Lh(zh.bind(null,i,s,e),[e]),i.flags|=2048,wa(9,{destroy:void 0},wh.bind(null,i,s,n,t),null),n},useId:function(){var e=ft(),t=Re.identifierPrefix;if(ye){var n=pn,i=gn;n=(i&~(1<<32-Ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=i1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zc,useFormState:Bh,useActionState:Bh,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:gc,useCacheRefresh:function(){return ft().memoizedState=c1.bind(null,ce)},useEffectEvent:function(e){var t=ft(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ec={readContext:ot,use:$r,useCallback:Kh,useContext:ot,useEffect:vc,useImperativeHandle:qh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Zh,useReducer:Qr,useRef:Hh,useState:function(){return Qr(Mn)},useDebugValue:jc,useDeferredValue:function(e,t){var n=Ke();return $h(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Qr(Mn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:jh,useId:Wh,useHostTransitionStatus:zc,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var n=Ke();return Th(n,Ce,e,t)},useMemoCache:gc,useCacheRefresh:Fh};Ec.useEffectEvent=Uh;var nm={readContext:ot,use:$r,useCallback:Kh,useContext:ot,useEffect:vc,useImperativeHandle:qh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Zh,useReducer:xc,useRef:Hh,useState:function(){return xc(Mn)},useDebugValue:jc,useDeferredValue:function(e,t){var n=Ke();return Ce===null?Sc(n,e,t):$h(n,Ce.memoizedState,e,t)},useTransition:function(){var e=xc(Mn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:jh,useId:Wh,useHostTransitionStatus:zc,useFormState:Nh,useActionState:Nh,useOptimistic:function(e,t){var n=Ke();return Ce!==null?Th(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:gc,useCacheRefresh:Fh};nm.useEffectEvent=Uh;function Tc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ac={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ii(i);r.payload=t,n!=null&&(r.callback=n),t=ai(e,r,i),t!==null&&(jt(t,e,i),_l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),r=ii(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ai(e,r,i),t!==null&&(jt(t,e,i),_l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=ii(n);i.tag=2,t!=null&&(i.callback=t),t=ai(e,i,n),t!==null&&(jt(t,e,n),_l(t,e,n))}};function im(e,t,n,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!xl(n,i)||!xl(r,s):!0}function am(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function Vi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function lm(e){Ar(e)}function rm(e){console.error(e)}function sm(e){Ar(e)}function Fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function om(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Cc(e,t,n){return n=ii(n),n.tag=3,n.payload={element:null},n.callback=function(){Fr(e,t)},n}function cm(e){return e=ii(e),e.tag=3,e}function um(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){om(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){om(t,n,i),typeof r!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function d1(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ga(t,n,r,!0),n=Rt.current,n!==null){switch(n.tag){case 31:case 13:return Wt===null?cs():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),eu(e,i,r)),!1;case 22:return n.flags|=65536,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),eu(e,i,r)),!1}throw Error(c(435,n.tag))}return eu(e,i,r),cs(),!1}if(ye)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Xo&&(e=Error(c(422),{cause:i}),vl($t(e,n)))):(i!==Xo&&(t=Error(c(423),{cause:i}),vl($t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=$t(i,n),r=Cc(e.stateNode,i,r),lc(e,r),Ye!==4&&(Ye=2)),!1;var s=Error(c(520),{cause:i});if(s=$t(s,n),Ul===null?Ul=[s]:Ul.push(s),Ye!==4&&(Ye=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Cc(n.stateNode,i,e),lc(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ui===null||!ui.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=cm(r),um(r,e,n,i),lc(n,r),!1}n=n.return}while(n!==null);return!1}var kc=Error(c(461)),Xe=!1;function ct(e,t,n,i){t.child=e===null?mh(t,null,n,i):Ui(t,e.child,n,i)}function dm(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var d={};for(var g in i)g!=="ref"&&(d[g]=i[g])}else d=i;return Oi(t),i=dc(e,t,n,d,s,r),g=fc(),e!==null&&!Xe?(hc(e,t,r),Rn(e,t,r)):(ye&&g&&$o(t),t.flags|=1,ct(e,t,i,r),t.child)}function fm(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!qo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,hm(e,t,s,i,r)):(e=Rr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Lc(e,r)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(d,i)&&e.ref===t.ref)return Rn(e,t,r)}return t.flags|=1,e=En(s,i),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(xl(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Lc(e,r))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Rn(e,t,r)}return Mc(e,t,n,i,r)}function mm(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return gm(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nr(t,s!==null?s.cachePool:null),s!==null?xh(t,s):sc(),bh(t);else return i=t.lanes=536870912,gm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Nr(t,s.cachePool),xh(t,s),ri(),t.memoizedState=null):(e!==null&&Nr(t,null),sc(),ri());return ct(e,t,r,n),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gm(e,t,n,i,r){var s=tc();return s=s===null?null:{parent:$e._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Nr(t,null),sc(),bh(t),e!==null&&ga(e,t,i,!0),t.childLanes=r,null}function Pr(e,t){return t=es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pm(e,t,n){return Ui(t,e.child,null,n),e=Pr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function f1(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(i.mode==="hidden")return e=Pr(t,i),t.lanes=536870912,Rl(null,e);if(cc(t),(e=Be)?(e=Ag(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=If(e),n.return=t,t.child=n,st=t,Be=null)):e=null,e===null)throw ei(t);return t.lanes=536870912,null}return Pr(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(cc(t),r)if(t.flags&256)t.flags&=-257,t=pm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Xe||ga(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(i=Re,i!==null&&(d=rf(i,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,Mi(e,d),jt(i,e,d),kc;cs(),t=pm(e,t,n)}else e=s.treeContext,Be=Ft(d.nextSibling),st=t,ye=!0,In=null,Jt=!1,e!==null&&nh(t,e),t=Pr(t,i),t.flags|=4096;return t}return e=En(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ir(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Mc(e,t,n,i,r){return Oi(t),n=dc(e,t,n,i,void 0,r),i=fc(),e!==null&&!Xe?(hc(e,t,r),Rn(e,t,r)):(ye&&i&&$o(t),t.flags|=1,ct(e,t,n,r),t.child)}function xm(e,t,n,i,r,s){return Oi(t),t.updateQueue=null,n=vh(t,i,n,r),yh(e),i=fc(),e!==null&&!Xe?(hc(e,t,s),Rn(e,t,s)):(ye&&i&&$o(t),t.flags|=1,ct(e,t,n,s),t.child)}function bm(e,t,n,i,r){if(Oi(t),t.stateNode===null){var s=da,d=n.contextType;typeof d=="object"&&d!==null&&(s=ot(d)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ac,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ic(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?ot(d):da,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Tc(t,n,d,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Ac.enqueueReplaceState(s,s.state,null),Tl(t,i,s,r),El(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,b=Vi(n,g);s.props=b;var A=s.context,B=n.contextType;d=da,typeof B=="object"&&B!==null&&(d=ot(B));var H=n.getDerivedStateFromProps;B=typeof H=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||A!==d)&&am(t,s,i,d),ni=!1;var k=t.memoizedState;s.state=k,Tl(t,i,s,r),El(),A=t.memoizedState,g||k!==A||ni?(typeof H=="function"&&(Tc(t,n,H,i),A=t.memoizedState),(b=ni||im(t,n,b,i,k,A,d))?(B||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=A),s.props=i,s.state=A,s.context=d,i=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,ac(e,t),d=t.memoizedProps,B=Vi(n,d),s.props=B,H=t.pendingProps,k=s.context,A=n.contextType,b=da,typeof A=="object"&&A!==null&&(b=ot(A)),g=n.getDerivedStateFromProps,(A=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==H||k!==b)&&am(t,s,i,b),ni=!1,k=t.memoizedState,s.state=k,Tl(t,i,s,r),El();var M=t.memoizedState;d!==H||k!==M||ni||e!==null&&e.dependencies!==null&&Dr(e.dependencies)?(typeof g=="function"&&(Tc(t,n,g,i),M=t.memoizedState),(B=ni||im(t,n,B,i,k,M,b)||e!==null&&e.dependencies!==null&&Dr(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,M,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,M,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=M),s.props=i,s.state=M,s.context=b,i=B):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Ir(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ui(t,e.child,null,r),t.child=Ui(t,null,n,r)):ct(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Rn(e,t,r),e}function ym(e,t,n,i){return Bi(),t.flags|=256,ct(e,t,n,i),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(e){return{baseLanes:e,cachePool:oh()}}function Dc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ot),e}function vm(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(r?li(t):ri(),(e=Be)?(e=Ag(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pn!==null?{id:gn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=If(e),n.return=t,t.child=n,st=t,Be=null)):e=null,e===null)throw ei(t);return pu(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,r?(ri(),r=t.mode,g=es({mode:"hidden",children:g},r),i=Ri(i,r,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Bc(n),i.childLanes=Dc(e,d,n),t.memoizedState=Rc,Rl(null,i)):(li(t),Oc(t,g))}var b=e.memoizedState;if(b!==null&&(g=b.dehydrated,g!==null)){if(s)t.flags&256?(li(t),t.flags&=-257,t=Nc(e,t,n)):t.memoizedState!==null?(ri(),t.child=e.child,t.flags|=128,t=null):(ri(),g=i.fallback,r=t.mode,i=es({mode:"visible",children:i.children},r),g=Ri(g,r,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,Ui(t,e.child,null,n),i=t.child,i.memoizedState=Bc(n),i.childLanes=Dc(e,d,n),t.memoizedState=Rc,t=Rl(null,i));else if(li(t),pu(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var A=d.dgst;d=A,i=Error(c(419)),i.stack="",i.digest=d,vl({value:i,source:null,stack:null}),t=Nc(e,t,n)}else if(Xe||ga(e,t,n,!1),d=(n&e.childLanes)!==0,Xe||d){if(d=Re,d!==null&&(i=rf(d,n),i!==0&&i!==b.retryLane))throw b.retryLane=i,Mi(e,i),jt(d,e,i),kc;gu(g)||cs(),t=Nc(e,t,n)}else gu(g)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Be=Ft(g.nextSibling),st=t,ye=!0,In=null,Jt=!1,e!==null&&nh(t,e),t=Oc(t,i.children),t.flags|=4096);return t}return r?(ri(),g=i.fallback,r=t.mode,b=e.child,A=b.sibling,i=En(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,A!==null?g=En(A,g):(g=Ri(g,r,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Rl(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Bc(n):(r=g.cachePool,r!==null?(b=$e._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=oh(),g={baseLanes:g.baseLanes|n,cachePool:r}),i.memoizedState=g,i.childLanes=Dc(e,d,n),t.memoizedState=Rc,Rl(e.child,i)):(li(t),n=e.child,e=n.sibling,n=En(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function es(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Nc(e,t,n){return Ui(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Fo(e.return,t,n)}function Hc(e,t,n,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=r,d.treeForkCount=s)}function Sm(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=qe.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,Q(qe,d),ct(e,t,i,n),i=ye?yl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,n,t);else if(e.tag===19)jm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hc(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hc(t,!0,n,null,s,i);break;case"together":Hc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ci|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Dr(e)))}function h1(e,t,n){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),ti(t,$e,e.memoizedState.cache),Bi();break;case 27:case 5:fn(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:ti(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(li(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vm(e,t,n):(li(t),e=Rn(e,t,n),e!==null?e.sibling:null);li(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ga(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Sm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(qe,qe.current),i)break;return null;case 22:return t.lanes=0,mm(e,t,n,t.pendingProps);case 24:ti(t,$e,e.memoizedState.cache)}return Rn(e,t,n)}function wm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Lc(e,n)&&(t.flags&128)===0)return Xe=!1,h1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,ye&&(t.flags&1048576)!==0&&th(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Hi(t.elementType),t.type=e,typeof e=="function")qo(e)?(i=Vi(e,i),t.tag=1,t=bm(null,t,e,i,n)):(t.tag=0,t=Mc(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===J){t.tag=11,t=dm(null,t,e,i,n);break e}else if(r===E){t.tag=14,t=fm(null,t,e,i,n);break e}}throw t=Fe(e)||e,Error(c(306,t,""))}}return t;case 0:return Mc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Vi(i,t.pendingProps),bm(e,t,i,r,n);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,ac(e,t),Tl(t,i,null,n);var d=t.memoizedState;if(i=d.cache,ti(t,$e,i),i!==s.cache&&Po(t,[$e],n,!0),El(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=ym(e,t,i,n);break e}else if(i!==r){r=$t(Error(c(424)),t),vl(r),t=ym(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=Ft(e.firstChild),st=t,ye=!0,In=null,Jt=!0,n=mh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),i===r){t=Rn(e,t,n);break e}ct(e,t,i,n)}t=t.child}return t;case 26:return Ir(e,t),e===null?(n=Dg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ye||(n=t.type,e=t.pendingProps,i=ps(ue.current).createElement(n),i[rt]=t,i[gt]=e,ut(i,n,e),tt(i),t.stateNode=i):t.memoizedState=Dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fn(t),e===null&&ye&&(i=t.stateNode=Mg(t.type,t.pendingProps,ue.current),st=t,Jt=!0,r=Be,mi(t.type)?(xu=r,Be=Ft(i.firstChild)):Be=r),ct(e,t,t.pendingProps.children,n),Ir(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((r=i=Be)&&(i=q1(i,t.type,t.pendingProps,Jt),i!==null?(t.stateNode=i,st=t,Be=Ft(i.firstChild),Jt=!1,r=!0):r=!1),r||ei(t)),fn(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,fu(r,s)?i=null:d!==null&&fu(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=dc(e,t,a1,null,null,n),Ql._currentValue=r),Ir(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&ye&&((e=n=Be)&&(n=K1(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,st=t,Be=null,e=!0):e=!1),e||ei(t)),null;case 13:return vm(e,t,n);case 4:return Ze(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ui(t,null,i,n):ct(e,t,i,n),t.child;case 11:return dm(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ti(t,t.type,i.value),ct(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Oi(t),r=ot(r),i=i(r),t.flags|=1,ct(e,t,i,n),t.child;case 14:return fm(e,t,t.type,t.pendingProps,n);case 15:return hm(e,t,t.type,t.pendingProps,n);case 19:return Sm(e,t,n);case 31:return f1(e,t,n);case 22:return mm(e,t,n,t.pendingProps);case 24:return Oi(t),i=ot($e),e===null?(r=tc(),r===null&&(r=Re,s=Io(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},ic(t),ti(t,$e,r)):((e.lanes&n)!==0&&(ac(e,t),Tl(t,null,null,n),El()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),ti(t,$e,i)):(i=s.cache,ti(t,$e,i),i!==r.cache&&Po(t,[$e],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Bn(e){e.flags|=4}function Uc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Wm())e.flags|=8192;else throw Li=Lr,nc}else e.flags&=-16777217}function zm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ug(t))if(Wm())e.flags|=8192;else throw Li=Lr,nc}function ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nf():536870912,e.lanes|=t,Ta|=t)}function Bl(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function m1(e,t,n){var i=t.pendingProps;switch(Qo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Cn($e),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ma(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jo())),De(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Bn(t),s!==null?(De(t),zm(t,s)):(De(t),Uc(t,r,null,i,n))):s?s!==e.memoizedState?(Bn(t),De(t),zm(t,s)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),De(t),Uc(t,r,e,i,n)),null;case 27:if(hn(t),n=ue.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=W.current,ma(t)?ih(t):(e=Mg(r,i,n),t.stateNode=e,Bn(t))}return De(t),null;case 5:if(hn(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(s=W.current,ma(t))ih(t);else{var d=ps(ue.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[rt]=t,s[gt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ut(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return De(t),Uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ue.current,ma(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=st,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vg(e.nodeValue,n)),e||ei(t,!0)}else e=ps(e).createTextNode(i),e[rt]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ma(t),n!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[rt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ma(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[rt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),r=!1}else r=Jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ts(t,t.updateQueue),De(t),null);case 4:return Ae(),e===null&&su(t.stateNode.containerInfo),De(t),null;case 10:return Cn(t.type),De(t),null;case 19:if(D(qe),i=t.memoizedState,i===null)return De(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Bl(i,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Yr(e),s!==null){for(t.flags|=128,Bl(i,!1),e=s.updateQueue,t.updateQueue=e,ts(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pf(n,e),n=n.sibling;return Q(qe,qe.current&1|2),ye&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>rs&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ts(t,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ye)return De(t),null}else 2*Tt()-i.renderingStartTime>rs&&n!==536870912&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=qe.current,Q(qe,r?n&1|2:n&1),ye&&Tn(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return Bt(t),oc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&ts(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&D(Ni),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Cn($e),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function g1(e,t){switch(Qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn($e),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(qe),null;case 4:return Ae(),null;case 10:return Cn(t.type),null;case 22:case 23:return Bt(t),oc(),e!==null&&D(Ni),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Cn($e),null;case 25:return null;default:return null}}function _m(e,t){switch(Qo(t),t.tag){case 3:Cn($e),Ae();break;case 26:case 27:case 5:hn(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:D(qe);break;case 10:Cn(t.type);break;case 22:case 23:Bt(t),oc(),e!==null&&D(Ni);break;case 24:Cn($e)}}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,d=n.inst;i=s(),d.destroy=i}n=n.next}while(n!==r)}}catch(g){Te(t,t.return,g)}}function si(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var b=n,A=g;try{A()}catch(B){Te(r,b,B)}}}i=i.next}while(i!==s)}}catch(B){Te(t,t.return,B)}}function Em(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ph(t,n)}catch(i){Te(e,e.return,i)}}}function Tm(e,t,n){n.props=Vi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Te(e,t,i)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){Te(e,t,r)}}function xn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Te(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Am(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Te(e,e.return,r)}}function Gc(e,t,n){try{var i=e.stateNode;H1(i,e.type,n,t),i[gt]=t}catch(r){Te(e,e.return,r)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mi(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zn));else if(i!==4&&(i===27&&mi(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function ns(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&mi(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}function km(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ut(t,i,n),t[rt]=e,t[gt]=n}catch(s){Te(e,e.return,s)}}var Dn=!1,Je=!1,qc=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,nt=null;function p1(e,t){if(e=e.containerInfo,uu=ws,e=qf(e),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,b=-1,A=0,B=0,H=e,k=null;t:for(;;){for(var M;H!==n||r!==0&&H.nodeType!==3||(g=d+r),H!==s||i!==0&&H.nodeType!==3||(b=d+i),H.nodeType===3&&(d+=H.nodeValue.length),(M=H.firstChild)!==null;)k=H,H=M;for(;;){if(H===e)break t;if(k===n&&++A===r&&(g=d),k===s&&++B===i&&(b=d),(M=H.nextSibling)!==null)break;H=k,k=H.parentNode}H=M}n=g===-1||b===-1?null:{start:g,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},ws=!1,nt=t;nt!==null;)if(t=nt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nt=e;else for(;nt!==null;){switch(t=nt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var F=Vi(n.type,r);e=i.getSnapshotBeforeUpdate(F,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(le){Te(n,n.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,nt=e;break}nt=t.return}}function Rm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),i&4&&Dl(5,n);break;case 1:if(Nn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Te(n,n.return,d)}else{var r=Vi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Te(n,n.return,d)}}i&64&&Em(n),i&512&&Ol(n,n.return);break;case 3:if(Nn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ph(e,t)}catch(d){Te(n,n.return,d)}}break;case 27:t===null&&i&4&&km(n);case 26:case 5:Nn(e,n),t===null&&i&4&&Am(n),i&512&&Ol(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),i&4&&Om(e,n);break;case 13:Nn(e,n),i&4&&Nm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_1.bind(null,n),Z1(e,n))));break;case 22:if(i=n.memoizedState!==null||Dn,!i){t=t!==null&&t.memoizedState!==null||Je,r=Dn;var s=Je;Dn=i,(Je=t)&&!s?Hn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Dn=r,Je=s}break;case 30:break;default:Nn(e,n)}}function Bm(e){var t=e.alternate;t!==null&&(e.alternate=null,Bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,xt=!1;function On(e,t,n){for(n=n.child;n!==null;)Dm(e,t,n),n=n.sibling}function Dm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 26:Je||xn(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||xn(n,t);var i=Le,r=xt;mi(n.type)&&(Le=n.stateNode,xt=!1),On(e,t,n),Kl(n.stateNode),Le=i,xt=r;break;case 5:Je||xn(n,t);case 6:if(i=Le,r=xt,Le=null,On(e,t,n),Le=i,xt=r,Le!==null)if(xt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(s){Te(n,t,s)}else try{Le.removeChild(n.stateNode)}catch(s){Te(n,t,s)}break;case 18:Le!==null&&(xt?(e=Le,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oa(e)):Eg(Le,n.stateNode));break;case 4:i=Le,r=xt,Le=n.stateNode.containerInfo,xt=!0,On(e,t,n),Le=i,xt=r;break;case 0:case 11:case 14:case 15:si(2,n,t),Je||si(4,n,t),On(e,t,n);break;case 1:Je||(xn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Tm(n,t,i)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:Je=(i=Je)||n.memoizedState!==null,On(e,t,n),Je=i;break;default:On(e,t,n)}}function Om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(n){Te(t,t.return,n)}}}function Nm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(n){Te(t,t.return,n)}}function x1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mm),t;default:throw Error(c(435,e.tag))}}function is(e,t){var n=x1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=E1.bind(null,e,i);i.then(r,r)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(mi(g.type)){Le=g.stateNode,xt=!1;break e}break;case 5:Le=g.stateNode,xt=!1;break e;case 3:case 4:Le=g.stateNode.containerInfo,xt=!0;break e}g=g.return}if(Le===null)throw Error(c(160));Dm(s,d,r),Le=null,xt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hm(t,e),t=t.sibling}var sn=null;function Hm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),yt(e),i&4&&(si(3,e,e.return),Dl(3,e),si(5,e,e.return));break;case 1:bt(t,e),yt(e),i&512&&(Je||n===null||xn(n,n.return)),i&64&&Dn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=sn;if(bt(t,e),yt(e),i&512&&(Je||n===null||xn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[ol]||s[rt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),ut(s,i,n),s[rt]=e,tt(s),i=s;break e;case"link":var d=Hg("link","href",r).get(i+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;case"meta":if(d=Hg("meta","content",r).get(i+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}s=r.createElement(i),ut(s,i,n),r.head.appendChild(s);break;default:throw Error(c(468,i))}s[rt]=e,tt(s),i=s}e.stateNode=i}else Lg(r,e.type,e.stateNode);else e.stateNode=Ng(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Lg(r,e.type,e.stateNode):Ng(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),yt(e),i&512&&(Je||n===null||xn(n,n.return)),n!==null&&i&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),yt(e),i&512&&(Je||n===null||xn(n,n.return)),e.flags&32){r=e.stateNode;try{aa(r,"")}catch(F){Te(e,e.return,F)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Gc(e,r,n!==null?n.memoizedProps:r)),i&1024&&(qc=!0);break;case 6:if(bt(t,e),yt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(F){Te(e,e.return,F)}}break;case 3:if(ys=null,r=sn,sn=xs(t.containerInfo),bt(t,e),sn=r,yt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(F){Te(e,e.return,F)}qc&&(qc=!1,Lm(e));break;case 4:i=sn,sn=xs(e.stateNode.containerInfo),bt(t,e),yt(e),sn=i;break;case 12:bt(t,e),yt(e);break;case 31:bt(t,e),yt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 13:bt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ls=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 22:r=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=Dn,B=Je;if(Dn=A||r,Je=B||b,bt(t,e),Je=B,Dn=A,yt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||b||Dn||Je||Yi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=b.stateNode;var H=b.memoizedProps.style,k=H!=null&&H.hasOwnProperty("display")?H.display:null;g.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(F){Te(b,b.return,F)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(F){Te(b,b.return,F)}}}else if(t.tag===18){if(n===null){b=t;try{var M=b.stateNode;r?Tg(M,!0):Tg(b.stateNode,!1)}catch(F){Te(b,b.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,is(e,n))));break;case 19:bt(t,e),yt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,is(e,i)));break;case 30:break;case 21:break;default:bt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cm(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,s=Vc(e);ns(e,s,r);break;case 5:var d=n.stateNode;n.flags&32&&(aa(d,""),n.flags&=-33);var g=Vc(e);ns(e,g,d);break;case 3:case 4:var b=n.stateNode.containerInfo,A=Vc(e);Yc(e,A,b);break;default:throw Error(c(161))}}catch(B){Te(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rm(e,t.alternate,t),t=t.sibling}function Yi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:si(4,t,t.return),Yi(t);break;case 1:xn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Tm(t,t.return,n),Yi(t);break;case 27:Kl(t.stateNode);case 26:case 5:xn(t,t.return),Yi(t);break;case 22:t.memoizedState===null&&Yi(t);break;case 30:Yi(t);break;default:Yi(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:Hn(r,s,n),Dl(4,s);break;case 1:if(Hn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){Te(i,i.return,A)}if(i=s,r=i.updateQueue,r!==null){var g=i.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)gh(b[r],g)}catch(A){Te(i,i.return,A)}}n&&d&64&&Em(s),Ol(s,s.return);break;case 27:km(s);case 26:case 5:Hn(r,s,n),n&&i===null&&d&4&&Am(s),Ol(s,s.return);break;case 12:Hn(r,s,n);break;case 31:Hn(r,s,n),n&&d&4&&Om(r,s);break;case 13:Hn(r,s,n),n&&d&4&&Nm(r,s);break;case 22:s.memoizedState===null&&Hn(r,s,n),Ol(s,s.return);break;case 30:break;default:Hn(r,s,n)}t=t.sibling}}function Kc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&jl(n))}function Zc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function on(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Um(e,t,n,i),t=t.sibling}function Um(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,i),r&2048&&Dl(9,t);break;case 1:on(e,t,n,i);break;case 3:on(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(r&2048){on(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Te(t,t.return,b)}}else on(e,t,n,i);break;case 31:on(e,t,n,i);break;case 13:on(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?on(e,t,n,i):Nl(e,t):s._visibility&2?on(e,t,n,i):(s._visibility|=2,za(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Kc(d,t);break;case 24:on(e,t,n,i),r&2048&&Zc(t.alternate,t);break;default:on(e,t,n,i)}}function za(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,g=n,b=i,A=d.flags;switch(d.tag){case 0:case 11:case 15:za(s,d,g,b,r),Dl(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?za(s,d,g,b,r):Nl(s,d):(B._visibility|=2,za(s,d,g,b,r)),r&&A&2048&&Kc(d.alternate,d);break;case 24:za(s,d,g,b,r),r&&A&2048&&Zc(d.alternate,d);break;default:za(s,d,g,b,r)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Nl(n,i),r&2048&&Kc(i.alternate,i);break;case 24:Nl(n,i),r&2048&&Zc(i.alternate,i);break;default:Nl(n,i)}t=t.sibling}}var Hl=8192;function _a(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Gm(e,t,n),e=e.sibling}function Gm(e,t,n){switch(e.tag){case 26:_a(e,t,n),e.flags&Hl&&e.memoizedState!==null&&iy(n,sn,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,n);break;case 3:case 4:var i=sn;sn=xs(e.stateNode.containerInfo),_a(e,t,n),sn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Hl,Hl=16777216,_a(e,t,n),Hl=i):_a(e,t,n));break;default:_a(e,t,n)}}function Vm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,qm(i,e)}Vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&si(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,as(e)):Ll(e);break;default:Ll(e)}}function as(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nt=i,qm(i,e)}Vm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:si(8,t,t.return),as(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,as(t));break;default:as(t)}e=e.sibling}}function qm(e,t){for(;nt!==null;){var n=nt;switch(n.tag){case 0:case 11:case 15:si(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:jl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nt=i;else e:for(n=e;nt!==null;){i=nt;var r=i.sibling,s=i.return;if(Bm(i),i===n){nt=null;break e}if(r!==null){r.return=s,nt=r;break e}nt=s}}}var b1={getCacheForType:function(e){var t=ot($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot($e).controller.signal}},y1=typeof WeakMap=="function"?WeakMap:Map,ze=0,Re=null,ge=null,xe=0,Ee=0,Dt=null,oi=!1,Ea=!1,$c=!1,Ln=0,Ye=0,ci=0,qi=0,Qc=0,Ot=0,Ta=0,Ul=null,vt=null,Xc=!1,ls=0,Km=0,rs=1/0,ss=null,ui=null,Pe=0,di=null,Aa=null,Un=0,Jc=0,Wc=null,Zm=null,Gl=0,Fc=null;function Nt(){return(ze&2)!==0&&xe!==0?xe&-xe:R.T!==null?iu():sf()}function $m(){if(Ot===0)if((xe&536870912)===0||ye){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),Ot=e}else Ot=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ot}function jt(e,t,n){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),fi(e,xe,Ot,!1)),sl(e,n),((ze&2)===0||e!==Re)&&(e===Re&&((ze&2)===0&&(qi|=n),Ye===4&&fi(e,xe,Ot,!1)),bn(e))}function Qm(e,t,n){if((ze&6)!==0)throw Error(c(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rl(e,t),r=i?S1(e,t):Ic(e,t,!0),s=i;do{if(r===0){Ea&&!i&&fi(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!v1(n)){r=Ic(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=Ul;var b=g.current.memoizedState.isDehydrated;if(b&&(Ca(g,d).flags|=256),d=Ic(g,d,!1),d!==2){if($c&&!b){g.errorRecoveryDisabledLanes|=s,qi|=s,r=4;break e}s=vt,vt=r,s!==null&&(vt===null?vt=s:vt.push.apply(vt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){Ca(e,0),fi(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:fi(i,t,Ot,!oi);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=ls+300-Tt(),10<r)){if(fi(i,t,Ot,!oi),xr(i,0,!0)!==0)break e;Un=t,i.timeoutHandle=zg(Xm.bind(null,i,n,vt,ss,Xc,t,Ot,qi,Ta,oi,s,"Throttled",-0,0),r);break e}Xm(i,n,vt,ss,Xc,t,Ot,qi,Ta,oi,s,null,-0,0)}}break}while(!0);bn(e)}function Xm(e,t,n,i,r,s,d,g,b,A,B,H,k,M){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zn},Gm(t,s,H);var F=(s&62914560)===s?ls-Tt():(s&4194048)===s?Km-Tt():0;if(F=ay(H,F),F!==null){Un=s,e.cancelPendingCommit=F(ng.bind(null,e,t,s,n,i,r,d,g,b,B,H,null,k,M)),fi(e,s,d,!A);return}}ng(e,t,s,n,i,r,d,g,b)}function v1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kt(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fi(e,t,n,i){t&=~Qc,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-Ct(r),d=1<<s;i[s]=-1,r&=~d}n!==0&&af(e,n,t)}function os(){return(ze&6)===0?(Vl(0),!1):!0}function Pc(){if(ge!==null){if(Ee===0)var e=ge.return;else e=ge,An=Di=null,mc(e),ya=null,wl=0,e=ge;for(;e!==null;)_m(e.alternate,e),e=e.return;ge=null}}function Ca(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,G1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Un=0,Pc(),Re=e,ge=n=En(e.current,null),xe=t,Ee=0,Dt=null,oi=!1,Ea=rl(e,t),$c=!1,Ta=Ot=Qc=qi=ci=Ye=0,vt=Ul=null,Xc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ct(i),s=1<<r;t|=e[r],i&=~s}return Ln=t,Cr(),n}function Jm(e,t){ce=null,R.H=Ml,t===ba||t===Hr?(t=dh(),Ee=3):t===nc?(t=dh(),Ee=4):Ee=t===kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(Ye=1,Fr(e,$t(t,e.current)))}function Wm(){var e=Rt.current;return e===null?!0:(xe&4194048)===xe?Wt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Wt:!1}function Fm(){var e=R.H;return R.H=Ml,e===null?Ml:e}function Pm(){var e=R.A;return R.A=b1,e}function cs(){Ye=4,oi||(xe&4194048)!==xe&&Rt.current!==null||(Ea=!0),(ci&134217727)===0&&(qi&134217727)===0||Re===null||fi(Re,xe,Ot,!1)}function Ic(e,t,n){var i=ze;ze|=2;var r=Fm(),s=Pm();(Re!==e||xe!==t)&&(ss=null,Ca(e,t)),t=!1;var d=Ye;e:do try{if(Ee!==0&&ge!==null){var g=ge,b=Dt;switch(Ee){case 8:Pc(),d=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var A=Ee;if(Ee=0,Dt=null,ka(e,g,b,A),n&&Ea){d=0;break e}break;default:A=Ee,Ee=0,Dt=null,ka(e,g,b,A)}}j1(),d=Ye;break}catch(B){Jm(e,B)}while(!0);return t&&e.shellSuspendCounter++,An=Di=null,ze=i,R.H=r,R.A=s,ge===null&&(Re=null,xe=0,Cr()),d}function j1(){for(;ge!==null;)Im(ge)}function S1(e,t){var n=ze;ze|=2;var i=Fm(),r=Pm();Re!==e||xe!==t?(ss=null,rs=Tt()+500,Ca(e,t)):Ea=rl(e,t);e:do try{if(Ee!==0&&ge!==null){t=ge;var s=Dt;t:switch(Ee){case 1:Ee=0,Dt=null,ka(e,t,s,1);break;case 2:case 9:if(ch(s)){Ee=0,Dt=null,eg(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),bn(e)},s.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:ch(s)?(Ee=0,Dt=null,eg(t)):(Ee=0,Dt=null,ka(e,t,s,7));break;case 5:var d=null;switch(ge.tag){case 26:d=ge.memoizedState;case 5:case 27:var g=ge;if(d?Ug(d):g.stateNode.complete){Ee=0,Dt=null;var b=g.sibling;if(b!==null)ge=b;else{var A=g.return;A!==null?(ge=A,us(A)):ge=null}break t}}Ee=0,Dt=null,ka(e,t,s,5);break;case 6:Ee=0,Dt=null,ka(e,t,s,6);break;case 8:Pc(),Ye=6;break e;default:throw Error(c(462))}}w1();break}catch(B){Jm(e,B)}while(!0);return An=Di=null,R.H=i,R.A=r,ze=n,ge!==null?0:(Re=null,xe=0,Cr(),Ye)}function w1(){for(;ge!==null&&!$x();)Im(ge)}function Im(e){var t=wm(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,t===null?us(e):ge=t}function eg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xm(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=xm(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:mc(t);default:_m(n,t),t=ge=Pf(t,Ln),t=wm(n,t,Ln)}e.memoizedProps=e.pendingProps,t===null?us(e):ge=t}function ka(e,t,n,i){An=Di=null,mc(t),ya=null,wl=0;var r=t.return;try{if(d1(e,r,t,n,xe)){Ye=1,Fr(e,$t(n,e.current)),ge=null;return}}catch(s){if(r!==null)throw ge=r,s;Ye=1,Fr(e,$t(n,e.current)),ge=null;return}t.flags&32768?(ye||i===1?e=!0:Ea||(xe&536870912)!==0?e=!1:(oi=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rt.current,i!==null&&i.tag===13&&(i.flags|=16384))),tg(t,e)):us(t)}function us(e){var t=e;do{if((t.flags&32768)!==0){tg(t,oi);return}e=t.return;var n=m1(t.alternate,t,Ln);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function tg(e,t){do{var n=g1(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Ye=6,ge=null}function ng(e,t,n,i,r,s,d,g,b){e.cancelPendingCommit=null;do ds();while(Pe!==0);if((ze&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Vo,nb(e,n,s,d,g,b),e===Re&&(ge=Re=null,xe=0),Aa=t,di=e,Un=n,Jc=s,Wc=r,Zm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,T1(hr,function(){return sg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,r=$.p,$.p=2,d=ze,ze|=4;try{p1(e,t,n)}finally{ze=d,$.p=r,R.T=i}}Pe=1,ig(),ag(),lg()}}function ig(){if(Pe===1){Pe=0;var e=di,t=Aa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=$.p;$.p=2;var r=ze;ze|=4;try{Hm(t,e);var s=du,d=qf(e.containerInfo),g=s.focusedElem,b=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&Yf(g.ownerDocument.documentElement,g)){if(b!==null&&No(g)){var A=b.start,B=b.end;if(B===void 0&&(B=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(B,g.value.length);else{var H=g.ownerDocument||document,k=H&&H.defaultView||window;if(k.getSelection){var M=k.getSelection(),F=g.textContent.length,le=Math.min(b.start,F),Me=b.end===void 0?le:Math.min(b.end,F);!M.extend&&le>Me&&(d=Me,Me=le,le=d);var z=Vf(g,le),j=Vf(g,Me);if(z&&j&&(M.rangeCount!==1||M.anchorNode!==z.node||M.anchorOffset!==z.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var T=H.createRange();T.setStart(z.node,z.offset),M.removeAllRanges(),le>Me?(M.addRange(T),M.extend(j.node,j.offset)):(T.setEnd(j.node,j.offset),M.addRange(T))}}}}for(H=[],M=g;M=M.parentNode;)M.nodeType===1&&H.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<H.length;g++){var N=H[g];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}ws=!!uu,du=uu=null}finally{ze=r,$.p=i,R.T=n}}e.current=t,Pe=2}}function ag(){if(Pe===2){Pe=0;var e=di,t=Aa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=$.p;$.p=2;var r=ze;ze|=4;try{Rm(e,t.alternate,t)}finally{ze=r,$.p=i,R.T=n}}Pe=3}}function lg(){if(Pe===4||Pe===3){Pe=0,Qx();var e=di,t=Aa,n=Un,i=Zm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Aa=di=null,rg(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ui=null),xo(n),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,r=$.p,$.p=2,R.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var g=i[d];s(g.value,{componentStack:g.stack})}}finally{R.T=t,$.p=r}}(Un&3)!==0&&ds(),bn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Fc?Gl++:(Gl=0,Fc=e):Gl=0,Vl(0)}}function rg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function ds(){return ig(),ag(),lg(),sg()}function sg(){if(Pe!==5)return!1;var e=di,t=Jc;Jc=0;var n=xo(Un),i=R.T,r=$.p;try{$.p=32>n?32:n,R.T=null,n=Wc,Wc=null;var s=di,d=Un;if(Pe=0,Aa=di=null,Un=0,(ze&6)!==0)throw Error(c(331));var g=ze;if(ze|=4,Ym(s.current),Um(s,s.current,d,n),ze=g,Vl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ll,s)}catch{}return!0}finally{$.p=r,R.T=i,rg(e,t)}}function og(e,t,n){t=$t(n,t),t=Cc(e.stateNode,t,2),e=ai(e,t,2),e!==null&&(sl(e,2),bn(e))}function Te(e,t,n){if(e.tag===3)og(e,e,n);else for(;t!==null;){if(t.tag===3){og(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ui===null||!ui.has(i))){e=$t(n,e),n=cm(2),i=ai(t,n,2),i!==null&&(um(n,i,t,e),sl(i,2),bn(i));break}}t=t.return}}function eu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new y1;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||($c=!0,r.add(n),e=z1.bind(null,e,t,n),t.then(e,e))}function z1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(xe&n)===n&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>Tt()-ls?(ze&2)===0&&Ca(e,0):Qc|=n,Ta===xe&&(Ta=0)),bn(e)}function cg(e,t){t===0&&(t=nf()),e=Mi(e,t),e!==null&&(sl(e,t),bn(e))}function _1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cg(e,n)}function E1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),cg(e,n)}function T1(e,t){return ho(e,t)}var fs=null,Ma=null,tu=!1,hs=!1,nu=!1,hi=0;function bn(e){e!==Ma&&e.next===null&&(Ma===null?fs=Ma=e:Ma=Ma.next=e),hs=!0,tu||(tu=!0,C1())}function Vl(e,t){if(!nu&&hs){nu=!0;do for(var n=!1,i=fs;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=r&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,hg(i,s))}else s=xe,s=xr(i,i===Re?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||rl(i,s)||(n=!0,hg(i,s));i=i.next}while(n);nu=!1}}function A1(){ug()}function ug(){hs=tu=!1;var e=0;hi!==0&&U1()&&(e=hi);for(var t=Tt(),n=null,i=fs;i!==null;){var r=i.next,s=dg(i,t);s===0?(i.next=null,n===null?fs=r:n.next=r,r===null&&(Ma=n)):(n=i,(e!==0||(s&3)!==0)&&(hs=!0)),i=r}Pe!==0&&Pe!==5||Vl(e),hi!==0&&(hi=0)}function dg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ct(s),g=1<<d,b=r[d];b===-1?((g&n)===0||(g&i)!==0)&&(r[d]=tb(g,t)):b<=t&&(e.expiredLanes|=g),s&=~g}if(t=Re,n=xe,n=xr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&mo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&mo(i),xo(n)){case 2:case 8:n=ef;break;case 32:n=hr;break;case 268435456:n=tf;break;default:n=hr}return i=fg.bind(null,e),n=ho(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&mo(i),e.callbackPriority=2,e.callbackNode=null,2}function fg(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var i=xe;return i=xr(e,e===Re?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qm(e,i,t),dg(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?fg.bind(null,e):null)}function hg(e,t){if(ds())return null;Qm(e,t,!0)}function C1(){V1(function(){(ze&6)!==0?ho(Id,A1):ug()})}function iu(){if(hi===0){var e=pa;e===0&&(e=mr,mr<<=1,(mr&261888)===0&&(mr=256)),hi=e}return hi}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(""+e)}function gg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function k1(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=mg((r[gt]||null).action),d=i.submitter;d&&(t=(t=d[gt]||null)?mg(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var g=new _r("action","action",null,i,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(hi!==0){var b=d?gg(r,d):new FormData(r);wc(n,{pending:!0,data:b,method:r.method,action:s},null,b)}}else typeof s=="function"&&(g.preventDefault(),b=d?gg(r,d):new FormData(r),wc(n,{pending:!0,data:b,method:r.method,action:s},s,b))},currentTarget:r}]})}}for(var au=0;au<Go.length;au++){var lu=Go[au],M1=lu.toLowerCase(),R1=lu[0].toUpperCase()+lu.slice(1);rn(M1,"on"+R1)}rn($f,"onAnimationEnd"),rn(Qf,"onAnimationIteration"),rn(Xf,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Xb,"onTransitionRun"),rn(Jb,"onTransitionStart"),rn(Wb,"onTransitionCancel"),rn(Jf,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function pg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],b=g.instance,A=g.currentTarget;if(g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=A;try{s(r)}catch(B){Ar(B)}r.currentTarget=null,s=b}else for(d=0;d<i.length;d++){if(g=i[d],b=g.instance,A=g.currentTarget,g=g.listener,b!==s&&r.isPropagationStopped())break e;s=g,r.currentTarget=A;try{s(r)}catch(B){Ar(B)}r.currentTarget=null,s=b}}}}function pe(e,t){var n=t[bo];n===void 0&&(n=t[bo]=new Set);var i=e+"__bubble";n.has(i)||(xg(t,e,2,!1),n.add(i))}function ru(e,t,n){var i=0;t&&(i|=4),xg(n,e,i,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function su(e){if(!e[ms]){e[ms]=!0,uf.forEach(function(n){n!=="selectionchange"&&(B1.has(n)||ru(n,!1,e),ru(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,ru("selectionchange",!1,t))}}function xg(e,t,n,i){switch($g(t)){case 2:var r=sy;break;case 8:r=oy;break;default:r=Su}n=r.bind(null,t,n,e),r=void 0,!To||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ou(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=Ii(g),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){i=s=d;continue e}g=g.parentNode}}i=i.return}Sf(function(){var A=s,B=_o(n),H=[];e:{var k=Wf.get(e);if(k!==void 0){var M=_r,F=e;switch(e){case"keypress":if(wr(n)===0)break e;case"keydown":case"keyup":M=Eb;break;case"focusin":F="focus",M=Mo;break;case"focusout":F="blur",M=Mo;break;case"beforeblur":case"afterblur":M=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Cb;break;case $f:case Qf:case Xf:M=xb;break;case Jf:M=Mb;break;case"scroll":case"scrollend":M=fb;break;case"wheel":M=Bb;break;case"copy":case"cut":case"paste":M=yb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Tf;break;case"toggle":case"beforetoggle":M=Ob}var le=(t&4)!==0,Me=!le&&(e==="scroll"||e==="scrollend"),z=le?k!==null?k+"Capture":null:k;le=[];for(var j=A,T;j!==null;){var N=j;if(T=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||T===null||z===null||(N=ul(j,z),N!=null&&le.push(ql(j,N,T))),Me)break;j=j.return}0<le.length&&(k=new M(k,F,null,n,B),H.push({event:k,listeners:le}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",k&&n!==zo&&(F=n.relatedTarget||n.fromElement)&&(Ii(F)||F[Pi]))break e;if((M||k)&&(k=B.window===B?B:(k=B.ownerDocument)?k.defaultView||k.parentWindow:window,M?(F=n.relatedTarget||n.toElement,M=A,F=F?Ii(F):null,F!==null&&(Me=m(F),le=F.tag,F!==Me||le!==5&&le!==27&&le!==6)&&(F=null)):(M=null,F=A),M!==F)){if(le=_f,N="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(le=Tf,N="onPointerLeave",z="onPointerEnter",j="pointer"),Me=M==null?k:cl(M),T=F==null?k:cl(F),k=new le(N,j+"leave",M,n,B),k.target=Me,k.relatedTarget=T,N=null,Ii(B)===A&&(le=new le(z,j+"enter",F,n,B),le.target=T,le.relatedTarget=Me,N=le),Me=N,M&&F)t:{for(le=D1,z=M,j=F,T=0,N=z;N;N=le(N))T++;N=0;for(var ie=j;ie;ie=le(ie))N++;for(;0<T-N;)z=le(z),T--;for(;0<N-T;)j=le(j),N--;for(;T--;){if(z===j||j!==null&&z===j.alternate){le=z;break t}z=le(z),j=le(j)}le=null}else le=null;M!==null&&bg(H,k,M,le,!1),F!==null&&Me!==null&&bg(H,Me,F,le,!0)}}e:{if(k=A?cl(A):window,M=k.nodeName&&k.nodeName.toLowerCase(),M==="select"||M==="input"&&k.type==="file")var Se=Of;else if(Bf(k))if(Nf)Se=Zb;else{Se=qb;var I=Yb}else M=k.nodeName,!M||M.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?A&&wo(A.elementType)&&(Se=Of):Se=Kb;if(Se&&(Se=Se(e,A))){Df(H,Se,n,B);break e}I&&I(e,k,A),e==="focusout"&&A&&k.type==="number"&&A.memoizedProps.value!=null&&So(k,"number",k.value)}switch(I=A?cl(A):window,e){case"focusin":(Bf(I)||I.contentEditable==="true")&&(oa=I,Ho=A,bl=null);break;case"focusout":bl=Ho=oa=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Kf(H,n,B);break;case"selectionchange":if(Qb)break;case"keydown":case"keyup":Kf(H,n,B)}var de;if(Bo)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else sa?Mf(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(Af&&n.locale!=="ko"&&(sa||be!=="onCompositionStart"?be==="onCompositionEnd"&&sa&&(de=wf()):(Fn=B,Ao="value"in Fn?Fn.value:Fn.textContent,sa=!0)),I=gs(A,be),0<I.length&&(be=new Ef(be,e,null,n,B),H.push({event:be,listeners:I}),de?be.data=de:(de=Rf(n),de!==null&&(be.data=de)))),(de=Hb?Lb(e,n):Ub(e,n))&&(be=gs(A,"onBeforeInput"),0<be.length&&(I=new Ef("onBeforeInput","beforeinput",null,n,B),H.push({event:I,listeners:be}),I.data=de)),k1(H,e,A,n,B)}pg(H,t)})}function ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=ul(e,n),r!=null&&i.unshift(ql(e,r,s)),r=ul(e,t),r!=null&&i.push(ql(e,r,s))),e.tag===3)return i;e=e.return}return[]}function D1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,t,n,i,r){for(var s=t._reactName,d=[];n!==null&&n!==i;){var g=n,b=g.alternate,A=g.stateNode;if(g=g.tag,b!==null&&b===i)break;g!==5&&g!==26&&g!==27||A===null||(b=A,r?(A=ul(n,s),A!=null&&d.unshift(ql(n,A,b))):r||(A=ul(n,s),A!=null&&d.push(ql(n,A,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var O1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(O1,`
`).replace(N1,"")}function vg(e,t){return t=yg(t),yg(e)===t}function ke(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||aa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&aa(e,""+i);break;case"className":yr(e,"class",i);break;case"tabIndex":yr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yr(e,n,i);break;case"style":vf(e,i,s);break;case"data":if(t!=="object"){yr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ke(e,t,"name",r.name,r,null),ke(e,t,"formEncType",r.formEncType,r,null),ke(e,t,"formMethod",r.formMethod,r,null),ke(e,t,"formTarget",r.formTarget,r,null)):(ke(e,t,"encType",r.encType,r,null),ke(e,t,"method",r.method,r,null),ke(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=zn);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":pe("beforetoggle",e),pe("toggle",e),br(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":br(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ub.get(n)||n,br(e,n,i))}}function cu(e,t,n,i,r,s){switch(n){case"style":vf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?aa(e,i):(typeof i=="number"||typeof i=="bigint")&&aa(e,""+i);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!df.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[gt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):br(e,n,i)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,s,d,n,null)}}r&&ke(e,t,"srcSet",n.srcSet,n,null),i&&ke(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var g=s=d=r=null,b=null,A=null;for(i in n)if(n.hasOwnProperty(i)){var B=n[i];if(B!=null)switch(i){case"name":r=B;break;case"type":d=B;break;case"checked":b=B;break;case"defaultChecked":A=B;break;case"value":s=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:ke(e,t,i,B,n,null)}}pf(e,s,g,b,A,d,r,!1);return;case"select":pe("invalid",e),i=d=s=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":i=g;default:ke(e,t,r,g,n,null)}t=s,n=d,e.multiple=!!i,t!=null?ia(e,!!i,t,!1):n!=null&&ia(e,!!i,n,!0);return;case"textarea":pe("invalid",e),s=r=i=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":i=g;break;case"defaultValue":r=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:ke(e,t,d,g,n,null)}bf(e,i,r,s);return;case"option":for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null)&&(b==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ke(e,t,b,i,n,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(i=0;i<Yl.length;i++)pe(Yl[i],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(i=n[A],i!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,A,i,n,null)}return;default:if(wo(t)){for(B in n)n.hasOwnProperty(B)&&(i=n[B],i!==void 0&&cu(e,t,B,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&ke(e,t,g,i,n,null))}function H1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,g=null,b=null,A=null,B=null;for(M in n){var H=n[M];if(n.hasOwnProperty(M)&&H!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=H;default:i.hasOwnProperty(M)||ke(e,t,M,null,i,H)}}for(var k in i){var M=i[k];if(H=n[k],i.hasOwnProperty(k)&&(M!=null||H!=null))switch(k){case"type":s=M;break;case"name":r=M;break;case"checked":A=M;break;case"defaultChecked":B=M;break;case"value":d=M;break;case"defaultValue":g=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==H&&ke(e,t,k,M,i,H)}}jo(e,d,g,b,A,B,s,r);return;case"select":M=d=g=k=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":M=b;default:i.hasOwnProperty(s)||ke(e,t,s,null,i,b)}for(r in i)if(s=i[r],b=n[r],i.hasOwnProperty(r)&&(s!=null||b!=null))switch(r){case"value":k=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==b&&ke(e,t,r,s,i,b)}t=g,n=d,i=M,k!=null?ia(e,!!n,k,!1):!!i!=!!n&&(t!=null?ia(e,!!n,t,!0):ia(e,!!n,n?[]:"",!1));return;case"textarea":M=k=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ke(e,t,g,null,i,r)}for(d in i)if(r=i[d],s=n[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":k=r;break;case"defaultValue":M=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&ke(e,t,d,r,i,s)}xf(e,k,M);return;case"option":for(var F in n)k=n[F],n.hasOwnProperty(F)&&k!=null&&!i.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:ke(e,t,F,null,i,k));for(b in i)k=i[b],M=n[b],i.hasOwnProperty(b)&&k!==M&&(k!=null||M!=null)&&(b==="selected"?e.selected=k&&typeof k!="function"&&typeof k!="symbol":ke(e,t,b,k,i,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in n)k=n[le],n.hasOwnProperty(le)&&k!=null&&!i.hasOwnProperty(le)&&ke(e,t,le,null,i,k);for(A in i)if(k=i[A],M=n[A],i.hasOwnProperty(A)&&k!==M&&(k!=null||M!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:ke(e,t,A,k,i,M)}return;default:if(wo(t)){for(var Me in n)k=n[Me],n.hasOwnProperty(Me)&&k!==void 0&&!i.hasOwnProperty(Me)&&cu(e,t,Me,void 0,i,k);for(B in i)k=i[B],M=n[B],!i.hasOwnProperty(B)||k===M||k===void 0&&M===void 0||cu(e,t,B,k,i,M);return}}for(var z in n)k=n[z],n.hasOwnProperty(z)&&k!=null&&!i.hasOwnProperty(z)&&ke(e,t,z,null,i,k);for(H in i)k=i[H],M=n[H],!i.hasOwnProperty(H)||k===M||k==null&&M==null||ke(e,t,H,k,i,M)}function jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function L1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,d=r.initiatorType,g=r.duration;if(s&&g&&jg(d)){for(d=0,g=r.responseEnd,i+=1;i<n.length;i++){var b=n[i],A=b.startTime;if(A>g)break;var B=b.transferSize,H=b.initiatorType;B&&jg(H)&&(b=b.responseEnd,d+=B*(b<g?1:(g-A)/(b-A)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uu=null,du=null;function ps(e){return e.nodeType===9?e:e.ownerDocument}function Sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=null;function U1(){var e=window.event;return e&&e.type==="popstate"?e===hu?!1:(hu=e,!0):(hu=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,G1=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(e){return _g.resolve(null).then(e).catch(Y1)}:zg;function Y1(e){setTimeout(function(){throw e})}function mi(e){return e==="head"}function Eg(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Oa(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kl(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[ol]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&Kl(e.ownerDocument.body);n=r}while(n);Oa(t)}function Tg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mu(n),yo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function q1(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function K1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function Ag(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function gu(e){return e.data==="$?"||e.data==="$~"}function pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function Cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ft(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function kg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Mg(e,t,n){switch(t=ps(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yo(e)}var Pt=new Map,Rg=new Set;function xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=$.d;$.d={f:$1,r:Q1,D:X1,C:J1,L:W1,m:F1,X:I1,S:P1,M:ey};function $1(){var e=Gn.f(),t=os();return e||t}function Q1(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?Jh(t):Gn.r(e)}var Ra=typeof document>"u"?null:document;function Bg(e,t,n){var i=Ra;if(i&&typeof t=="string"&&t){var r=Kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Rg.has(r)||(Rg.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),ut(t,"link",e),tt(t),i.head.appendChild(t)))}}function X1(e){Gn.D(e),Bg("dns-prefetch",e,null)}function J1(e,t){Gn.C(e,t),Bg("preconnect",e,t)}function W1(e,t,n){Gn.L(e,t,n);var i=Ra;if(i&&e&&t){var r='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Kt(n.imageSizes)+'"]')):r+='[href="'+Kt(e)+'"]';var s=r;switch(t){case"style":s=Ba(e);break;case"script":s=Da(e)}Pt.has(s)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Zl(s))||t==="script"&&i.querySelector($l(s))||(t=i.createElement("link"),ut(t,"link",e),tt(t),i.head.appendChild(t)))}}function F1(e,t){Gn.m(e,t);var n=Ra;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Da(e)}if(!Pt.has(s)&&(e=w({rel:"modulepreload",href:e},t),Pt.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($l(s)))return}i=n.createElement("link"),ut(i,"link",e),tt(i),n.head.appendChild(i)}}}function P1(e,t,n){Gn.S(e,t,n);var i=Ra;if(i&&e){var r=ta(i).hoistableStyles,s=Ba(e);t=t||"default";var d=r.get(s);if(!d){var g={loading:0,preload:null};if(d=i.querySelector(Zl(s)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(s))&&bu(e,n);var b=d=i.createElement("link");tt(b),ut(b,"link",e),b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),b.addEventListener("load",function(){g.loading|=1}),b.addEventListener("error",function(){g.loading|=2}),g.loading|=4,bs(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(s,d)}}}function I1(e,t){Gn.X(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector($l(r)),s||(e=w({src:e,async:!0},t),(t=Pt.get(r))&&yu(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function ey(e,t){Gn.M(e,t);var n=Ra;if(n&&e){var i=ta(n).hoistableScripts,r=Da(e),s=i.get(r);s||(s=n.querySelector($l(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Pt.get(r))&&yu(e,t),s=n.createElement("script"),tt(s),ut(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Dg(e,t,n,i){var r=(r=ue.current)?xs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ba(n.href),n=ta(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var s=ta(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Zl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),s||ty(r,e,n,d.state))),t&&i===null)throw Error(c(528,""));return d}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(n),n=ta(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ba(e){return'href="'+Kt(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function Og(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ty(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ut(t,"link",n),tt(t),e.head.appendChild(t))}function Da(e){return'[src="'+Kt(e)+'"]'}function $l(e){return"script[async]"+e}function Ng(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(i)return t.instance=i,tt(i),i;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tt(i),ut(i,"style",r),bs(i,n.precedence,e),t.instance=i;case"stylesheet":r=Ba(n.href);var s=e.querySelector(Zl(r));if(s)return t.state.loading|=4,t.instance=s,tt(s),s;i=Og(n),(r=Pt.get(r))&&bu(i,r),s=(e.ownerDocument||e).createElement("link"),tt(s);var d=s;return d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),ut(s,"link",i),t.state.loading|=4,bs(s,n.precedence,e),t.instance=s;case"script":return s=Da(n.src),(r=e.querySelector($l(s)))?(t.instance=r,tt(r),r):(i=n,(r=Pt.get(s))&&(i=w({},n),yu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),tt(r),ut(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bs(i,n.precedence,e));return t.instance}function bs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var g=i[d];if(g.dataset.precedence===t)s=g;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ys=null;function Hg(e,t,n){if(ys===null){var i=new Map,r=ys=new Map;r.set(n,i)}else r=ys,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[ol]||s[rt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var g=i.get(d);g?g.push(s):i.set(d,[s])}}return i}function Lg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ny(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iy(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ba(i.href),s=t.querySelector(Zl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tt(s);return}s=t.ownerDocument||t,i=Og(i),(r=Pt.get(r))&&bu(i,r),s=s.createElement("link"),tt(s);var d=s;d._p=new Promise(function(g,b){d.onload=g,d.onerror=b}),ut(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vu=0;function ay(e,t){return e.stylesheets&&e.count===0&&Ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vu===0&&(vu=62500*L1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function Ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(ly,e),js=null,vs.call(e))}function ly(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=n.get(d)||i,s===i&&n.set(null,r),n.set(d,r),this.count++,i=vs.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ql={$$typeof:L,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ry(e,t,n,i,r,s,d,g,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.hiddenUpdates=go(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Gg(e,t,n,i,r,s,d,g,b,A,B,H){return e=new ry(e,t,n,d,b,A,B,H,g),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Io(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ic(s),e}function Vg(e){return e?(e=da,e):da}function Yg(e,t,n,i,r,s){r=Vg(r),i.context===null?i.context=r:i.pendingContext=r,i=ii(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ai(e,i,t),n!==null&&(jt(n,e,t),_l(n,e,t))}function qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){qg(e,t),(e=e.alternate)&&qg(e,t)}function Kg(e){if(e.tag===13||e.tag===31){var t=Mi(e,67108864);t!==null&&jt(t,e,67108864),ju(e,67108864)}}function Zg(e){if(e.tag===13||e.tag===31){var t=Nt();t=po(t);var n=Mi(e,t);n!==null&&jt(n,e,t),ju(e,t)}}var ws=!0;function sy(e,t,n,i){var r=R.T;R.T=null;var s=$.p;try{$.p=2,Su(e,t,n,i)}finally{$.p=s,R.T=r}}function oy(e,t,n,i){var r=R.T;R.T=null;var s=$.p;try{$.p=8,Su(e,t,n,i)}finally{$.p=s,R.T=r}}function Su(e,t,n,i){if(ws){var r=wu(i);if(r===null)ou(e,t,i,zs,n),Qg(e,i);else if(uy(r,e,t,n,i))i.stopPropagation();else if(Qg(e,i),t&4&&-1<cy.indexOf(e)){for(;r!==null;){var s=ea(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Ei(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var b=1<<31-Ct(d);g.entanglements[1]|=b,d&=~b}bn(s),(ze&6)===0&&(rs=Tt()+500,Vl(0))}}break;case 31:case 13:g=Mi(s,2),g!==null&&jt(g,s,2),os(),ju(s,2)}if(s=wu(i),s===null&&ou(e,t,i,zs,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(e,t,i,null,n)}}function wu(e){return e=_o(e),zu(e)}var zs=null;function zu(e){if(zs=null,e=Ii(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zs=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xx()){case Id:return 2;case ef:return 8;case hr:case Jx:return 32;case tf:return 268435456;default:return 32}default:return 32}}var _u=!1,gi=null,pi=null,xi=null,Xl=new Map,Jl=new Map,bi=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(e,t){switch(e){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":Xl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(t.pointerId)}}function Wl(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=ea(t),t!==null&&Kg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function uy(e,t,n,i,r){switch(t){case"focusin":return gi=Wl(gi,e,t,n,i,r),!0;case"dragenter":return pi=Wl(pi,e,t,n,i,r),!0;case"mouseover":return xi=Wl(xi,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xl.set(s,Wl(Xl.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jl.set(s,Wl(Jl.get(s)||null,e,t,n,i,r)),!0}return!1}function Xg(e){var t=Ii(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,of(e.priority,function(){Zg(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,of(e.priority,function(){Zg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zo=i,n.target.dispatchEvent(i),zo=null}else return t=ea(n),t!==null&&Kg(t),e.blockedOn=n,!1;t.shift()}return!0}function Jg(e,t,n){_s(e)&&n.delete(t)}function dy(){_u=!1,gi!==null&&_s(gi)&&(gi=null),pi!==null&&_s(pi)&&(pi=null),xi!==null&&_s(xi)&&(xi=null),Xl.forEach(Jg),Jl.forEach(Jg)}function Es(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,dy)))}var Ts=null;function Wg(e){Ts!==e&&(Ts=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(zu(i||n)===null)continue;break}var s=ea(n);s!==null&&(e.splice(t,3),t-=3,wc(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Oa(e){function t(b){return Es(b,e)}gi!==null&&Es(gi,e),pi!==null&&Es(pi,e),xi!==null&&Es(xi,e),Xl.forEach(t),Jl.forEach(t);for(var n=0;n<bi.length;n++){var i=bi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&bi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],d=r[gt]||null;if(typeof s=="function")d||Wg(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[gt]||null)g=d.formAction;else if(zu(r)!==null)continue}else g=d.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),Wg(n)}}}function Fg(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Eu(e){this._internalRoot=e}As.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=Nt();Yg(n,i,e,t,null,null)},As.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yg(e.current,2,null,e,null,null),os(),t[Pi]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bi.length&&t!==0&&t<bi[n].priority;n++);bi.splice(n,0,e),n===0&&Xg(e)}};var Pg=o.version;if(Pg!=="19.2.3")throw Error(c(527,Pg,"19.2.3"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{ll=Cs.inject(fy),At=Cs}catch{}}return Pl.createRoot=function(e,t){if(!h(e))throw Error(c(299));var n=!1,i="",r=lm,s=rm,d=sm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Gg(e,1,!1,null,null,n,i,null,r,s,d,Fg),e[Pi]=t.current,su(e),new Eu(t)},Pl.hydrateRoot=function(e,t,n){if(!h(e))throw Error(c(299));var i=!1,r="",s=lm,d=rm,g=sm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Gg(e,1,!0,t,n??null,i,r,b,s,d,g,Fg),t.context=Vg(null),n=t.current,i=Nt(),i=po(i),r=ii(i),r.callback=null,ai(n,r,i),n=i,t.current.lanes=n,sl(t,n),bn(t),e[Pi]=t.current,su(e),new As(t)},Pl.version="19.2.3",Pl}var o0;function wy(){if(o0)return Cu.exports;o0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Cu.exports=Sy(),Cu.exports}var zy=wy(),lt=function(){return lt=Object.assign||function(o){for(var u,c=1,h=arguments.length;c<h;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(o[m]=u[m])}return o},lt.apply(this,arguments)};function rr(l,o,u){if(u||arguments.length===2)for(var c=0,h=o.length,m;c<h;c++)(m||!(c in o))&&(m||(m=Array.prototype.slice.call(o,0,c)),m[c]=o[c]);return l.concat(m||Array.prototype.slice.call(o))}var Oe="-ms-",lr="-moz-",_e="-webkit-",F0="comm",to="rule",Od="decl",_y="@import",Ey="@namespace",P0="@keyframes",Ty="@layer",I0=Math.abs,Nd=String.fromCharCode,Sd=Object.assign;function Ay(l,o){return Ie(l,0)^45?(((o<<2^Ie(l,0))<<2^Ie(l,1))<<2^Ie(l,2))<<2^Ie(l,3):0}function ep(l){return l.trim()}function Kn(l,o){return(l=o.exec(l))?l[0]:l}function fe(l,o,u){return l.replace(o,u)}function Vs(l,o,u){return l.indexOf(o,u)}function Ie(l,o){return l.charCodeAt(o)|0}function Qi(l,o,u){return l.slice(o,u)}function cn(l){return l.length}function tp(l){return l.length}function ir(l,o){return o.push(l),l}function Cy(l,o){return l.map(o).join("")}function c0(l,o){return l.filter(function(u){return!Kn(u,o)})}var no=1,Pa=1,np=0,It=0,We=0,tl="";function io(l,o,u,c,h,m,p,v){return{value:l,root:o,parent:u,type:c,props:h,children:m,line:no,column:Pa,length:p,return:"",siblings:v}}function Si(l,o){return Sd(io("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function Na(l){for(;l.root;)l=Si(l.root,{children:[l]});ir(l,l.siblings)}function ky(){return We}function My(){return We=It>0?Ie(tl,--It):0,Pa--,We===10&&(Pa=1,no--),We}function un(){return We=It<np?Ie(tl,It++):0,Pa++,We===10&&(Pa=1,no++),We}function wi(){return Ie(tl,It)}function Ys(){return It}function ao(l,o){return Qi(tl,l,o)}function sr(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ry(l){return no=Pa=1,np=cn(tl=l),It=0,[]}function By(l){return tl="",l}function Bu(l){return ep(ao(It-1,wd(l===91?l+2:l===40?l+1:l)))}function Dy(l){for(;(We=wi())&&We<33;)un();return sr(l)>2||sr(We)>3?"":" "}function Oy(l,o){for(;--o&&un()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return ao(l,Ys()+(o<6&&wi()==32&&un()==32))}function wd(l){for(;un();)switch(We){case l:return It;case 34:case 39:l!==34&&l!==39&&wd(We);break;case 40:l===41&&wd(l);break;case 92:un();break}return It}function Ny(l,o){for(;un()&&l+We!==57;)if(l+We===84&&wi()===47)break;return"/*"+ao(o,It-1)+"*"+Nd(l===47?l:un())}function Hy(l){for(;!sr(wi());)un();return ao(l,It)}function Ly(l){return By(qs("",null,null,null,[""],l=Ry(l),0,[0],l))}function qs(l,o,u,c,h,m,p,v,y){for(var x=0,_=0,w=p,O=0,G=0,q=0,Y=1,K=1,Z=1,V=0,L="",J=h,P=m,X=c,E=L;K;)switch(q=V,V=un()){case 40:if(q!=108&&Ie(E,w-1)==58){Vs(E+=fe(Bu(V),"&","&\f"),"&\f",I0(x?v[x-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:E+=Bu(V);break;case 9:case 10:case 13:case 32:E+=Dy(q);break;case 92:E+=Oy(Ys()-1,7);continue;case 47:switch(wi()){case 42:case 47:ir(Uy(Ny(un(),Ys()),o,u,y),y),(sr(q||1)==5||sr(wi()||1)==5)&&cn(E)&&Qi(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*Y:v[x++]=cn(E)*Z;case 125*Y:case 59:case 0:switch(V){case 0:case 125:K=0;case 59+_:Z==-1&&(E=fe(E,/\f/g,"")),G>0&&(cn(E)-w||Y===0&&q===47)&&ir(G>32?d0(E+";",c,u,w-1,y):d0(fe(E," ","")+";",c,u,w-2,y),y);break;case 59:E+=";";default:if(ir(X=u0(E,o,u,x,_,h,v,L,J=[],P=[],w,m),m),V===123)if(_===0)qs(E,o,X,X,J,m,w,v,P);else{switch(O){case 99:if(Ie(E,3)===110)break;case 108:if(Ie(E,2)===97)break;default:_=0;case 100:case 109:case 115:}_?qs(l,X,X,c&&ir(u0(l,X,X,0,0,h,v,L,h,J=[],w,P),P),h,P,w,v,c?J:P):qs(E,X,X,X,[""],P,0,v,P)}}x=_=G=0,Y=Z=1,L=E="",w=p;break;case 58:w=1+cn(E),G=q;default:if(Y<1){if(V==123)--Y;else if(V==125&&Y++==0&&My()==125)continue}switch(E+=Nd(V),V*Y){case 38:Z=_>0?1:(E+="\f",-1);break;case 44:v[x++]=(cn(E)-1)*Z,Z=1;break;case 64:wi()===45&&(E+=Bu(un())),O=wi(),_=w=cn(L=E+=Hy(Ys())),V++;break;case 45:q===45&&cn(E)==2&&(Y=0)}}return m}function u0(l,o,u,c,h,m,p,v,y,x,_,w){for(var O=h-1,G=h===0?m:[""],q=tp(G),Y=0,K=0,Z=0;Y<c;++Y)for(var V=0,L=Qi(l,O+1,O=I0(K=p[Y])),J=l;V<q;++V)(J=ep(K>0?G[V]+" "+L:fe(L,/&\f/g,G[V])))&&(y[Z++]=J);return io(l,o,u,h===0?to:v,y,x,_,w)}function Uy(l,o,u,c){return io(l,o,u,F0,Nd(ky()),Qi(l,2,-2),0,c)}function d0(l,o,u,c,h){return io(l,o,u,Od,Qi(l,0,c),Qi(l,c+1,-1),c,h)}function ip(l,o,u){switch(Ay(l,o)){case 5103:return _e+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _e+l+l;case 4855:return _e+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return lr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+l+lr+l+Oe+l+l;case 5936:switch(Ie(l,o+11)){case 114:return _e+l+Oe+fe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return _e+l+Oe+fe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return _e+l+Oe+fe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return _e+l+Oe+l+l;case 6165:return _e+l+Oe+"flex-"+l+l;case 5187:return _e+l+fe(l,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Oe+"flex-$1$2")+l;case 5443:return _e+l+Oe+"flex-item-"+fe(l,/flex-|-self/g,"")+(Kn(l,/flex-|baseline/)?"":Oe+"grid-row-"+fe(l,/flex-|-self/g,""))+l;case 4675:return _e+l+Oe+"flex-line-pack"+fe(l,/align-content|flex-|-self/g,"")+l;case 5548:return _e+l+Oe+fe(l,"shrink","negative")+l;case 5292:return _e+l+Oe+fe(l,"basis","preferred-size")+l;case 6060:return _e+"box-"+fe(l,"-grow","")+_e+l+Oe+fe(l,"grow","positive")+l;case 4554:return _e+fe(l,/([^-])(transform)/g,"$1"+_e+"$2")+l;case 6187:return fe(fe(fe(l,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),l,"")+l;case 5495:case 3959:return fe(l,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return fe(fe(l,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Oe+"flex-pack:$3"),/space-between/,"justify")+_e+l+l;case 4200:if(!Kn(l,/flex-|baseline/))return Oe+"grid-column-align"+Qi(l,o)+l;break;case 2592:case 3360:return Oe+fe(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(c,h){return o=h,Kn(c.props,/grid-\w+-end/)})?~Vs(l+(u=u[o].value),"span",0)?l:Oe+fe(l,"-start","")+l+Oe+"grid-row-span:"+(~Vs(u,"span",0)?Kn(u,/\d+/):+Kn(u,/\d+/)-+Kn(l,/\d+/))+";":Oe+fe(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(c){return Kn(c.props,/grid-\w+-start/)})?l:Oe+fe(fe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return fe(l,/(.+)-inline(.+)/,_e+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(l)-1-o>6)switch(Ie(l,o+1)){case 109:if(Ie(l,o+4)!==45)break;case 102:return fe(l,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+lr+(Ie(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Vs(l,"stretch",0)?ip(fe(l,"stretch","fill-available"),o,u)+l:l}break;case 5152:case 5920:return fe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,h,m,p,v,y,x){return Oe+h+":"+m+x+(p?Oe+h+"-span:"+(v?y:+y-+m)+x:"")+l});case 4949:if(Ie(l,o+6)===121)return fe(l,":",":"+_e)+l;break;case 6444:switch(Ie(l,Ie(l,14)===45?18:11)){case 120:return fe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(Ie(l,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Oe+"$2box$3")+l;case 100:return fe(l,":",":"+Oe)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(l,"scroll-","scroll-snap-")+l}return l}function Js(l,o){for(var u="",c=0;c<l.length;c++)u+=o(l[c],c,l,o)||"";return u}function Gy(l,o,u,c){switch(l.type){case Ty:if(l.children.length)break;case _y:case Ey:case Od:return l.return=l.return||l.value;case F0:return"";case P0:return l.return=l.value+"{"+Js(l.children,c)+"}";case to:if(!cn(l.value=l.props.join(",")))return""}return cn(u=Js(l.children,c))?l.return=l.value+"{"+u+"}":""}function Vy(l){var o=tp(l);return function(u,c,h,m){for(var p="",v=0;v<o;v++)p+=l[v](u,c,h,m)||"";return p}}function Yy(l){return function(o){o.root||(o=o.return)&&l(o)}}function qy(l,o,u,c){if(l.length>-1&&!l.return)switch(l.type){case Od:l.return=ip(l.value,l.length,u);return;case P0:return Js([Si(l,{value:fe(l.value,"@","@"+_e)})],c);case to:if(l.length)return Cy(u=l.props,function(h){switch(Kn(h,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Na(Si(l,{props:[fe(h,/:(read-\w+)/,":"+lr+"$1")]})),Na(Si(l,{props:[h]})),Sd(l,{props:c0(u,c)});break;case"::placeholder":Na(Si(l,{props:[fe(h,/:(plac\w+)/,":"+_e+"input-$1")]})),Na(Si(l,{props:[fe(h,/:(plac\w+)/,":"+lr+"$1")]})),Na(Si(l,{props:[fe(h,/:(plac\w+)/,Oe+"input-$1")]})),Na(Si(l,{props:[h]})),Sd(l,{props:c0(u,c)});break}return""})}}var Ky={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},Ia=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",ap="active",lp="data-styled-version",lo="6.3.8",Hd=`/*!sc*/
`,Ws=typeof window<"u"&&typeof document<"u",vn=at.createContext===void 0,Zy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),$y={},ro=Object.freeze([]),el=Object.freeze({});function rp(l,o,u){return u===void 0&&(u=el),l.theme!==u.theme&&l.theme||o||u.theme}var sp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xy=/(^-|-$)/g;function f0(l){return l.replace(Qy,"-").replace(Xy,"")}var Jy=/(a)(d)/gi,h0=function(l){return String.fromCharCode(l+(l>25?39:97))};function zd(l){var o,u="";for(o=Math.abs(l);o>52;o=o/52|0)u=h0(o%52)+u;return(h0(o%52)+u).replace(Jy,"$1-$2")}var Du,Qa=function(l,o){for(var u=o.length;u;)l=33*l^o.charCodeAt(--u);return l},op=function(l){return Qa(5381,l)};function cp(l){return zd(op(l)>>>0)}function Wy(l){return l.displayName||l.name||"Component"}function Ou(l){return typeof l=="string"&&!0}var up=typeof Symbol=="function"&&Symbol.for,dp=up?Symbol.for("react.memo"):60115,Fy=up?Symbol.for("react.forward_ref"):60112,Py={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Iy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ev=((Du={})[Fy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Du[dp]=fp,Du);function m0(l){return("type"in(o=l)&&o.type.$$typeof)===dp?fp:"$$typeof"in l?ev[l.$$typeof]:Py;var o}var tv=Object.defineProperty,nv=Object.getOwnPropertyNames,g0=Object.getOwnPropertySymbols,iv=Object.getOwnPropertyDescriptor,av=Object.getPrototypeOf,p0=Object.prototype;function hp(l,o,u){if(typeof o!="string"){if(p0){var c=av(o);c&&c!==p0&&hp(l,c,u)}var h=nv(o);g0&&(h=h.concat(g0(o)));for(var m=m0(l),p=m0(o),v=0;v<h.length;++v){var y=h[v];if(!(y in Iy||u&&u[y]||p&&y in p||m&&y in m)){var x=iv(o,y);try{tv(l,y,x)}catch{}}}}return l}function Xi(l){return typeof l=="function"}function Ld(l){return typeof l=="object"&&"styledComponentId"in l}function $i(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function _d(l,o){if(l.length===0)return"";for(var u=l[0],c=1;c<l.length;c++)u+=l[c];return u}function or(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ed(l,o,u){if(u===void 0&&(u=!1),!u&&!or(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)l[c]=Ed(l[c],o[c]);else if(or(o))for(var c in o)l[c]=Ed(l[c],o[c]);return l}function Ud(l,o){Object.defineProperty(l,"toString",{value:o})}function Ji(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var lv=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var u=0,c=0;c<o;c++)u+=this.groupSizes[c];return u},l.prototype.insertRules=function(o,u){if(o>=this.groupSizes.length){for(var c=this.groupSizes,h=c.length,m=h;o>=m;)if((m<<=1)<0)throw Ji(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=h;p<m;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(o+1),y=(p=0,u.length);p<y;p++)this.tag.insertRule(v,u[p])&&(this.groupSizes[o]++,v++)},l.prototype.clearGroup=function(o){if(o<this.length){var u=this.groupSizes[o],c=this.indexOfGroup(o),h=c+u;this.groupSizes[o]=0;for(var m=c;m<h;m++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(o){var u="";if(o>=this.length||this.groupSizes[o]===0)return u;for(var c=this.groupSizes[o],h=this.indexOfGroup(o),m=h+c,p=h;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(Hd);return u},l})(),Ks=new Map,Fs=new Map,Zs=1,Xa=function(l){if(Ks.has(l))return Ks.get(l);for(;Fs.has(Zs);)Zs++;var o=Zs++;return Ks.set(l,o),Fs.set(o,l),o},rv=function(l,o){Zs=o+1,Ks.set(l,o),Fs.set(o,l)},sv="style[".concat(Ia,"][").concat(lp,'="').concat(lo,'"]'),ov=new RegExp("^".concat(Ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cv=function(l,o,u){for(var c,h=u.split(","),m=0,p=h.length;m<p;m++)(c=h[m])&&l.registerName(o,c)},uv=function(l,o){for(var u,c=((u=o.textContent)!==null&&u!==void 0?u:"").split(Hd),h=[],m=0,p=c.length;m<p;m++){var v=c[m].trim();if(v){var y=v.match(ov);if(y){var x=0|parseInt(y[1],10),_=y[2];x!==0&&(rv(_,x),cv(l,_,y[3]),l.getTag().insertRules(x,h)),h.length=0}else h.push(v)}}},x0=function(l){for(var o=document.querySelectorAll(sv),u=0,c=o.length;u<c;u++){var h=o[u];h&&h.getAttribute(Ia)!==ap&&(uv(l,h),h.parentNode&&h.parentNode.removeChild(h))}};function dv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mp=function(l){var o=document.head,u=l||o,c=document.createElement("style"),h=(function(v){var y=Array.from(v.querySelectorAll("style[".concat(Ia,"]")));return y[y.length-1]})(u),m=h!==void 0?h.nextSibling:null;c.setAttribute(Ia,ap),c.setAttribute(lp,lo);var p=dv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},fv=(function(){function l(o){this.element=mp(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,h=0,m=c.length;h<m;h++){var p=c[h];if(p.ownerNode===u)return p}throw Ji(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,u){try{return this.sheet.insertRule(u,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var u=this.sheet.cssRules[o];return u&&u.cssText?u.cssText:""},l})(),hv=(function(){function l(o){this.element=mp(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,u){if(o<=this.length&&o>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),mv=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,u){return o<=this.length&&(this.rules.splice(o,0,u),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),b0=Ws,gv={isServer:!Ws,useCSSOMInjection:!Zy},Ps=(function(){function l(o,u,c){o===void 0&&(o=el),u===void 0&&(u={});var h=this;this.options=lt(lt({},gv),o),this.gs=u,this.names=new Map(c),this.server=!!o.isServer,!this.server&&Ws&&b0&&(b0=!1,x0(this)),Ud(this,function(){return(function(m){for(var p=m.getTag(),v=p.length,y="",x=function(w){var O=(function(Z){return Fs.get(Z)})(w);if(O===void 0)return"continue";var G=m.names.get(O),q=p.getGroup(w);if(G===void 0||!G.size||q.length===0)return"continue";var Y="".concat(Ia,".g").concat(w,'[id="').concat(O,'"]'),K="";G!==void 0&&G.forEach(function(Z){Z.length>0&&(K+="".concat(Z,","))}),y+="".concat(q).concat(Y,'{content:"').concat(K,'"}').concat(Hd)},_=0;_<v;_++)x(_);return y})(h)})}return l.registerId=function(o){return Xa(o)},l.prototype.rehydrate=function(){!this.server&&Ws&&x0(this)},l.prototype.reconstructWithOptions=function(o,u){return u===void 0&&(u=!0),new l(lt(lt({},this.options),o),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(u){var c=u.useCSSOMInjection,h=u.target;return u.isServer?new mv(h):c?new fv(h):new hv(h)})(this.options),new lv(o)));var o},l.prototype.hasNameForId=function(o,u){return this.names.has(o)&&this.names.get(o).has(u)},l.prototype.registerName=function(o,u){if(Xa(o),this.names.has(o))this.names.get(o).add(u);else{var c=new Set;c.add(u),this.names.set(o,c)}},l.prototype.insertRules=function(o,u,c){this.registerName(o,u),this.getTag().insertRules(Xa(o),c)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(Xa(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),pv=/&/g,Ja=47;function y0(l){if(l.indexOf("}")===-1)return!1;for(var o=l.length,u=0,c=0,h=!1,m=0;m<o;m++){var p=l.charCodeAt(m);if(c!==0||h||p!==Ja||l.charCodeAt(m+1)!==42)if(h)p===42&&l.charCodeAt(m+1)===Ja&&(h=!1,m++);else if(p!==34&&p!==39||m!==0&&l.charCodeAt(m-1)===92){if(c===0){if(p===123)u++;else if(p===125&&--u<0)return!0}}else c===0?c=p:c===p&&(c=0);else h=!0,m++}return u!==0||c!==0}function gp(l,o){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(o," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(o," ")),u.props=u.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=gp(u.children,o)),u})}function xv(l){var o,u,c,h=el,m=h.options,p=m===void 0?el:m,v=h.plugins,y=v===void 0?ro:v,x=function(O,G,q){return q.startsWith(u)&&q.endsWith(u)&&q.replaceAll(u,"").length>0?".".concat(o):O},_=y.slice();_.push(function(O){O.type===to&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(pv,u).replace(c,x))}),p.prefix&&_.push(qy),_.push(Gy);var w=function(O,G,q,Y){G===void 0&&(G=""),q===void 0&&(q=""),Y===void 0&&(Y="&"),o=Y,u=G,c=new RegExp("\\".concat(u,"\\b"),"g");var K=(function(L){if(!y0(L))return L;for(var J=L.length,P="",X=0,E=0,re=0,he=!1,U=0;U<J;U++){var ne=L.charCodeAt(U);if(re!==0||he||ne!==Ja||L.charCodeAt(U+1)!==42)if(he)ne===42&&L.charCodeAt(U+1)===Ja&&(he=!1,U++);else if(ne!==34&&ne!==39||U!==0&&L.charCodeAt(U-1)===92){if(re===0)if(ne===123)E++;else if(ne===125){if(--E<0){for(var te=U+1;te<J;){var He=L.charCodeAt(te);if(He===59||He===10)break;te++}te<J&&L.charCodeAt(te)===59&&te++,E=0,U=te-1,X=te;continue}E===0&&(P+=L.substring(X,U+1),X=U+1)}else ne===59&&E===0&&(P+=L.substring(X,U+1),X=U+1)}else re===0?re=ne:re===ne&&(re=0);else he=!0,U++}if(X<J){var Fe=L.substring(X);y0(Fe)||(P+=Fe)}return P})((function(L){if(L.indexOf("//")===-1)return L;for(var J=L.length,P=[],X=0,E=0,re=0,he=0;E<J;){var U=L.charCodeAt(E);if(U!==34&&U!==39||E!==0&&L.charCodeAt(E-1)===92)if(re===0)if(U===40&&E>=3&&(32|L.charCodeAt(E-1))==108&&(32|L.charCodeAt(E-2))==114&&(32|L.charCodeAt(E-3))==117)he=1,E++;else if(he>0)U===41?he--:U===40&&he++,E++;else if(U===Ja&&E+1<J&&L.charCodeAt(E+1)===Ja){for(E>X&&P.push(L.substring(X,E));E<J&&L.charCodeAt(E)!==10;)E++;X=E}else E++;else E++;else re===0?re=U:re===U&&(re=0),E++}return X===0?L:(X<J&&P.push(L.substring(X)),P.join(""))})(O)),Z=Ly(q||G?"".concat(q," ").concat(G," { ").concat(K," }"):K);p.namespace&&(Z=gp(Z,p.namespace));var V=[];return Js(Z,Vy(_.concat(Yy(function(L){return V.push(L)})))),V};return w.hash=y.length?y.reduce(function(O,G){return G.name||Ji(15),Qa(O,G.name)},5381).toString():"",w}var bv=new Ps,Td=xv(),Ad={shouldForwardProp:void 0,styleSheet:bv,stylis:Td},pp=vn?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(Ad)}}:at.createContext(Ad);pp.Consumer;vn||at.createContext(void 0);function Cd(){return vn?Ad:at.useContext(pp)}var yv=(function(){function l(o,u){var c=this;this.inject=function(h,m){m===void 0&&(m=Td);var p=c.name+m.hash;h.hasNameForId(c.id,p)||h.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=u,Ud(this,function(){throw Ji(12,String(c.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=Td),this.name+o.hash},l})();function vv(l,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in Ky||l.startsWith("--")?String(o).trim():"".concat(o,"px")}var jv=function(l){return l>="A"&&l<="Z"};function v0(l){for(var o="",u=0;u<l.length;u++){var c=l[u];if(u===1&&c==="-"&&l[0]==="-")return l;jv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var xp=function(l){return l==null||l===!1||l===""},bp=function(l){var o=[];for(var u in l){var c=l[u];l.hasOwnProperty(u)&&!xp(c)&&(Array.isArray(c)&&c.isCss||Xi(c)?o.push("".concat(v0(u),":"),c,";"):or(c)?o.push.apply(o,rr(rr(["".concat(u," {")],bp(c),!1),["}"],!1)):o.push("".concat(v0(u),": ").concat(vv(u,c),";")))}return o};function zi(l,o,u,c){if(xp(l))return[];if(Ld(l))return[".".concat(l.styledComponentId)];if(Xi(l)){if(!Xi(m=l)||m.prototype&&m.prototype.isReactComponent||!o)return[l];var h=l(o);return zi(h,o,u,c)}var m;return l instanceof yv?u?(l.inject(u,c),[l.getName(c)]):[l]:or(l)?bp(l):Array.isArray(l)?Array.prototype.concat.apply(ro,l.map(function(p){return zi(p,o,u,c)})):[l.toString()]}function yp(l){for(var o=0;o<l.length;o+=1){var u=l[o];if(Xi(u)&&!Ld(u))return!1}return!0}var Sv=op(lo),wv=(function(){function l(o,u,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&yp(o),this.componentId=u,this.baseHash=Qa(Sv,u),this.baseStyle=c,Ps.registerId(u)}return l.prototype.generateAndInjectStyles=function(o,u,c){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,u,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))h=$i(h,this.staticRulesId);else{var m=_d(zi(this.rules,o,u,c)),p=zd(Qa(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var v=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,v)}h=$i(h,p),this.staticRulesId=p}else{for(var y=Qa(this.baseHash,c.hash),x="",_=0;_<this.rules.length;_++){var w=this.rules[_];if(typeof w=="string")x+=w;else if(w){var O=_d(zi(w,o,u,c));y=Qa(y,O+_),x+=O}}if(x){var G=zd(y>>>0);if(!u.hasNameForId(this.componentId,G)){var q=c(x,".".concat(G),void 0,this.componentId);u.insertRules(this.componentId,G,q)}h=$i(h,G)}}return{className:h,css:typeof window>"u"?u.getTag().getGroup(Xa(this.componentId)):""}},l})(),cr=vn?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(void 0)}}:at.createContext(void 0);cr.Consumer;function zv(l){if(vn)return l.children;var o=at.useContext(cr),u=at.useMemo(function(){return(function(c,h){if(!c)throw Ji(14);if(Xi(c)){var m=c(h);return m}if(Array.isArray(c)||typeof c!="object")throw Ji(8);return h?lt(lt({},h),c):c})(l.theme,o)},[l.theme,o]);return l.children?at.createElement(cr.Provider,{value:u},l.children):null}var Nu={};function _v(l,o,u){var c=Ld(l),h=l,m=!Ou(l),p=o.attrs,v=p===void 0?ro:p,y=o.componentId,x=y===void 0?(function(J,P){var X=typeof J!="string"?"sc":f0(J);Nu[X]=(Nu[X]||0)+1;var E="".concat(X,"-").concat(cp(lo+X+Nu[X]));return P?"".concat(P,"-").concat(E):E})(o.displayName,o.parentComponentId):y,_=o.displayName,w=_===void 0?(function(J){return Ou(J)?"styled.".concat(J):"Styled(".concat(Wy(J),")")})(l):_,O=o.displayName&&o.componentId?"".concat(f0(o.displayName),"-").concat(o.componentId):o.componentId||x,G=c&&h.attrs?h.attrs.concat(v).filter(Boolean):v,q=o.shouldForwardProp;if(c&&h.shouldForwardProp){var Y=h.shouldForwardProp;if(o.shouldForwardProp){var K=o.shouldForwardProp;q=function(J,P){return Y(J,P)&&K(J,P)}}else q=Y}var Z=new wv(u,O,c?h.componentStyle:void 0);function V(J,P){return(function(X,E,re){var he=X.attrs,U=X.componentStyle,ne=X.defaultProps,te=X.foldedComponentIds,He=X.styledComponentId,Fe=X.target,et=vn?void 0:at.useContext(cr),R=Cd(),$=X.shouldForwardProp||R.shouldForwardProp,ae=rp(E,et,ne)||el,me=(function(Ze,Ae,fn){for(var hn,Et=lt(lt({},Ae),{className:void 0,theme:fn}),Fi=0;Fi<Ze.length;Fi+=1){var Yt=Xi(hn=Ze[Fi])?hn(Et):hn;for(var mn in Yt)mn==="className"?Et.className=$i(Et.className,Yt[mn]):mn==="style"?Et.style=lt(lt({},Et.style),Yt[mn]):Et[mn]=Yt[mn]}return"className"in Ae&&typeof Ae.className=="string"&&(Et.className=$i(Et.className,Ae.className)),Et})(he,E,ae),je=me.as||Fe,S={};for(var D in me)me[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&me.theme===ae||(D==="forwardedAs"?S.as=me.forwardedAs:$&&!$(D,je)||(S[D]=me[D]));var Q=(function(Ze,Ae){var fn=Cd(),hn=Ze.generateAndInjectStyles(Ae,fn.styleSheet,fn.stylis);return hn})(U,me),W=Q.className,se=Q.css,ue=$i(te,He);W&&(ue+=" "+W),me.className&&(ue+=" "+me.className),S[Ou(je)&&!sp.has(je)?"class":"className"]=ue,re&&(S.ref=re);var ve=C.createElement(je,S);return vn&&se?at.createElement(at.Fragment,null,at.createElement("style",{precedence:"styled-components",href:"sc-".concat(He,"-").concat(W),children:se}),ve):ve})(L,J,P)}V.displayName=w;var L=at.forwardRef(V);return L.attrs=G,L.componentStyle=Z,L.displayName=w,L.shouldForwardProp=q,L.foldedComponentIds=c?$i(h.foldedComponentIds,h.styledComponentId):"",L.styledComponentId=O,L.target=c?h.target:l,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?(function(P){for(var X=[],E=1;E<arguments.length;E++)X[E-1]=arguments[E];for(var re=0,he=X;re<he.length;re++)Ed(P,he[re],!0);return P})({},h.defaultProps,J):J}}),Ud(L,function(){return".".concat(L.styledComponentId)}),m&&hp(L,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function j0(l,o){for(var u=[l[0]],c=0,h=o.length;c<h;c+=1)u.push(o[c],l[c+1]);return u}var S0=function(l){return Object.assign(l,{isCss:!0})};function vp(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];if(Xi(l)||or(l))return S0(zi(j0(ro,rr([l],o,!0))));var c=l;return o.length===0&&c.length===1&&typeof c[0]=="string"?zi(c):S0(zi(j0(c,o)))}function kd(l,o,u){if(u===void 0&&(u=el),!o)throw Ji(1,o);var c=function(h){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return l(o,u,vp.apply(void 0,rr([h],m,!1)))};return c.attrs=function(h){return kd(l,o,lt(lt({},u),{attrs:Array.prototype.concat(u.attrs,h).filter(Boolean)}))},c.withConfig=function(h){return kd(l,o,lt(lt({},u),h))},c}var jp=function(l){return kd(_v,l)},f=jp;sp.forEach(function(l){f[l]=jp(l)});var Ev=(function(){function l(o,u){this.rules=o,this.componentId=u,this.isStatic=yp(o),Ps.registerId(this.componentId+1)}return l.prototype.createStyles=function(o,u,c,h){var m=h(_d(zi(this.rules,u,c,h)),""),p=this.componentId+o;c.insertRules(p,p,m)},l.prototype.removeStyles=function(o,u){u.clearRules(this.componentId+o)},l.prototype.renderStyles=function(o,u,c,h){o>2&&Ps.registerId(this.componentId+o);var m=this.componentId+o;this.isStatic?c.hasNameForId(m,m)||this.createStyles(o,u,c,h):(this.removeStyles(o,c),this.createStyles(o,u,c,h))},l})();function Tv(l){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=vp.apply(void 0,rr([l],o,!1)),h="sc-global-".concat(cp(JSON.stringify(c))),m=new Ev(c,h),p=new WeakMap,v=function(y){var x=Cd(),_=vn?void 0:at.useContext(cr),w=p.get(x.styleSheet);if(w===void 0&&(w=x.styleSheet.allocateGSInstance(h),p.set(x.styleSheet,w)),(typeof window>"u"||!x.styleSheet.server)&&(function(K,Z,V,L,J){if(m.isStatic)m.renderStyles(K,$y,V,J);else{var P=lt(lt({},Z),{theme:rp(Z,L,v.defaultProps)});m.renderStyles(K,P,V,J)}})(w,y,x.styleSheet,_,x.stylis),!vn){var O=at.useRef(!0);at.useLayoutEffect(function(){return O.current=!1,function(){O.current=!0,queueMicrotask(function(){O.current&&(m.removeStyles(w,x.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(h,'"]')).forEach(function(K){return K.remove()}))})}},[w,x.styleSheet])}if(vn){var G=h+w,q=typeof window>"u"?x.styleSheet.getTag().getGroup(Xa(G)):"";if(q){var Y="".concat(h,"-").concat(w);return at.createElement("style",{key:Y,"data-styled-global":h,precedence:"styled-components",href:Y,children:q})}}return null};return at.memo(v)}var w0="popstate";function Av(l={}){function o(c,h){let{pathname:m,search:p,hash:v}=c.location;return Md("",{pathname:m,search:p,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function u(c,h){return typeof h=="string"?h:ur(h)}return kv(o,u,null,l)}function Ge(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Gt(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Cv(){return Math.random().toString(36).substring(2,10)}function z0(l,o){return{usr:l.state,key:l.key,idx:o}}function Md(l,o,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?nl(o):o,state:u,key:o&&o.key||c||Cv()}}function ur({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function nl(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function kv(l,o,u,c={}){let{window:h=document.defaultView,v5Compat:m=!1}=c,p=h.history,v="POP",y=null,x=_();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function _(){return(p.state||{idx:null}).idx}function w(){v="POP";let K=_(),Z=K==null?null:K-x;x=K,y&&y({action:v,location:Y.location,delta:Z})}function O(K,Z){v="PUSH";let V=Md(Y.location,K,Z);x=_()+1;let L=z0(V,x),J=Y.createHref(V);try{p.pushState(L,"",J)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;h.location.assign(J)}m&&y&&y({action:v,location:Y.location,delta:1})}function G(K,Z){v="REPLACE";let V=Md(Y.location,K,Z);x=_();let L=z0(V,x),J=Y.createHref(V);p.replaceState(L,"",J),m&&y&&y({action:v,location:Y.location,delta:0})}function q(K){return Mv(K)}let Y={get action(){return v},get location(){return l(h,p)},listen(K){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(w0,w),y=K,()=>{h.removeEventListener(w0,w),y=null}},createHref(K){return o(h,K)},createURL:q,encodeLocation(K){let Z=q(K);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:O,replace:G,go(K){return p.go(K)}};return Y}function Mv(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:ur(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Sp(l,o,u="/"){return Rv(l,o,u,!1)}function Rv(l,o,u,c){let h=typeof o=="string"?nl(o):o,m=Xn(h.pathname||"/",u);if(m==null)return null;let p=wp(l);Bv(p);let v=null;for(let y=0;v==null&&y<p.length;++y){let x=Kv(m);v=Yv(p[y],x,c)}return v}function wp(l,o=[],u=[],c="",h=!1){let m=(p,v,y=h,x)=>{let _={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(c)&&y)return;Ge(_.relativePath.startsWith(c),`Absolute route path "${_.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(c.length)}let w=Zn([c,_.relativePath]),O=u.concat(_);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),wp(p.children,o,O,w,y)),!(p.path==null&&!p.index)&&o.push({path:w,score:Gv(w,p.index),routesMeta:O})};return l.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))m(p,v);else for(let y of zp(p.path))m(p,v,!0,y)}),o}function zp(l){let o=l.split("/");if(o.length===0)return[];let[u,...c]=o,h=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return h?[m,""]:[m];let p=zp(c.join("/")),v=[];return v.push(...p.map(y=>y===""?m:[m,y].join("/"))),h&&v.push(...p),v.map(y=>l.startsWith("/")&&y===""?"/":y)}function Bv(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Vv(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Dv=/^:[\w-]+$/,Ov=3,Nv=2,Hv=1,Lv=10,Uv=-2,_0=l=>l==="*";function Gv(l,o){let u=l.split("/"),c=u.length;return u.some(_0)&&(c+=Uv),o&&(c+=Nv),u.filter(h=>!_0(h)).reduce((h,m)=>h+(Dv.test(m)?Ov:m===""?Hv:Lv),c)}function Vv(l,o){return l.length===o.length&&l.slice(0,-1).every((c,h)=>c===o[h])?l[l.length-1]-o[o.length-1]:0}function Yv(l,o,u=!1){let{routesMeta:c}=l,h={},m="/",p=[];for(let v=0;v<c.length;++v){let y=c[v],x=v===c.length-1,_=m==="/"?o:o.slice(m.length)||"/",w=Is({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},_),O=y.route;if(!w&&x&&u&&!c[c.length-1].route.index&&(w=Is({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},_)),!w)return null;Object.assign(h,w.params),p.push({params:h,pathname:Zn([m,w.pathname]),pathnameBase:Xv(Zn([m,w.pathnameBase])),route:O}),w.pathnameBase!=="/"&&(m=Zn([m,w.pathnameBase]))}return p}function Is(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=qv(l.path,l.caseSensitive,l.end),h=o.match(u);if(!h)return null;let m=h[0],p=m.replace(/(.)\/+$/,"$1"),v=h.slice(1);return{params:c.reduce((x,{paramName:_,isOptional:w},O)=>{if(_==="*"){let q=v[O]||"";p=m.slice(0,m.length-q.length).replace(/(.)\/+$/,"$1")}const G=v[O];return w&&!G?x[_]=void 0:x[_]=(G||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:l}}function qv(l,o=!1,u=!0){Gt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],h="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,y)=>(c.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),h+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?h+="\\/*$":l!==""&&l!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),c]}function Kv(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Gt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function Xn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}var _p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zv=l=>_p.test(l);function $v(l,o="/"){let{pathname:u,search:c="",hash:h=""}=typeof l=="string"?nl(l):l,m;if(u)if(Zv(u))m=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),Gt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?m=E0(u.substring(1),"/"):m=E0(u,o)}else m=o;return{pathname:m,search:Jv(c),hash:Wv(h)}}function E0(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(h=>{h===".."?u.length>1&&u.pop():h!=="."&&u.push(h)}),u.length>1?u.join("/"):"/"}function Hu(l,o,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Gd(l){let o=Qv(l);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Vd(l,o,u,c=!1){let h;typeof l=="string"?h=nl(l):(h={...l},Ge(!h.pathname||!h.pathname.includes("?"),Hu("?","pathname","search",h)),Ge(!h.pathname||!h.pathname.includes("#"),Hu("#","pathname","hash",h)),Ge(!h.search||!h.search.includes("#"),Hu("#","search","hash",h)));let m=l===""||h.pathname==="",p=m?"/":h.pathname,v;if(p==null)v=u;else{let w=o.length-1;if(!c&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),w-=1;h.pathname=O.join("/")}v=w>=0?o[w]:"/"}let y=$v(h,v),x=p&&p!=="/"&&p.endsWith("/"),_=(m||p===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(x||_)&&(y.pathname+="/"),y}var Zn=l=>l.join("/").replace(/\/\/+/g,"/"),Xv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Jv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Wv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Fv=class{constructor(l,o,u,c=!1){this.status=l,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Pv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Iv(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ep=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tp(l,o){let u=l;if(typeof u!="string"||!_p.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,h=!1;if(Ep)try{let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u),v=Xn(p.pathname,o);p.origin===m.origin&&v!=null?u=v+p.search+p.hash:h=!0}catch{Gt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:h,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ap=["POST","PUT","PATCH","DELETE"];new Set(Ap);var e5=["GET",...Ap];new Set(e5);var il=C.createContext(null);il.displayName="DataRouter";var so=C.createContext(null);so.displayName="DataRouterState";var t5=C.createContext(!1),Cp=C.createContext({isTransitioning:!1});Cp.displayName="ViewTransition";var n5=C.createContext(new Map);n5.displayName="Fetchers";var i5=C.createContext(null);i5.displayName="Await";var Vt=C.createContext(null);Vt.displayName="Navigation";var dr=C.createContext(null);dr.displayName="Location";var jn=C.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var Yd=C.createContext(null);Yd.displayName="RouteError";var kp="REACT_ROUTER_ERROR",a5="REDIRECT",l5="ROUTE_ERROR_RESPONSE";function r5(l){if(l.startsWith(`${kp}:${a5}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function s5(l){if(l.startsWith(`${kp}:${l5}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Fv(o.status,o.statusText,o.data)}catch{}}function o5(l,{relative:o}={}){Ge(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=C.useContext(Vt),{hash:h,pathname:m,search:p}=fr(l,{relative:o}),v=m;return u!=="/"&&(v=m==="/"?u:Zn([u,m])),c.createHref({pathname:v,search:p,hash:h})}function al(){return C.useContext(dr)!=null}function Sn(){return Ge(al(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(dr).location}var Mp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rp(l){C.useContext(Vt).static||C.useLayoutEffect(l)}function qd(){let{isDataRoute:l}=C.useContext(jn);return l?j5():c5()}function c5(){Ge(al(),"useNavigate() may be used only in the context of a <Router> component.");let l=C.useContext(il),{basename:o,navigator:u}=C.useContext(Vt),{matches:c}=C.useContext(jn),{pathname:h}=Sn(),m=JSON.stringify(Gd(c)),p=C.useRef(!1);return Rp(()=>{p.current=!0}),C.useCallback((y,x={})=>{if(Gt(p.current,Mp),!p.current)return;if(typeof y=="number"){u.go(y);return}let _=Vd(y,JSON.parse(m),h,x.relative==="path");l==null&&o!=="/"&&(_.pathname=_.pathname==="/"?o:Zn([o,_.pathname])),(x.replace?u.replace:u.push)(_,x.state,x)},[o,u,m,h,l])}C.createContext(null);function fr(l,{relative:o}={}){let{matches:u}=C.useContext(jn),{pathname:c}=Sn(),h=JSON.stringify(Gd(u));return C.useMemo(()=>Vd(l,JSON.parse(h),c,o==="path"),[l,h,c,o])}function u5(l,o){return Bp(l,o)}function Bp(l,o,u,c,h){Ge(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=C.useContext(Vt),{matches:p}=C.useContext(jn),v=p[p.length-1],y=v?v.params:{},x=v?v.pathname:"/",_=v?v.pathnameBase:"/",w=v&&v.route;{let V=w&&w.path||"";Op(x,!w||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let O=Sn(),G;if(o){let V=typeof o=="string"?nl(o):o;Ge(_==="/"||V.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${V.pathname}" was given in the \`location\` prop.`),G=V}else G=O;let q=G.pathname||"/",Y=q;if(_!=="/"){let V=_.replace(/^\//,"").split("/");Y="/"+q.replace(/^\//,"").split("/").slice(V.length).join("/")}let K=Sp(l,{pathname:Y});Gt(w||K!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Gt(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=g5(K&&K.map(V=>Object.assign({},V,{params:Object.assign({},y,V.params),pathname:Zn([_,m.encodeLocation?m.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?_:Zn([_,m.encodeLocation?m.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),p,u,c,h);return o&&Z?C.createElement(dr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},Z):Z}function d5(){let l=v5(),o=Pv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:m},"ErrorBoundary")," or"," ",C.createElement("code",{style:m},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},o),u?C.createElement("pre",{style:h},u):null,p)}var f5=C.createElement(d5,null),Dp=class extends C.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=s5(l.digest);u&&(l=u)}let o=l!==void 0?C.createElement(jn.Provider,{value:this.props.routeContext},C.createElement(Yd.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?C.createElement(h5,{error:l},o):o}};Dp.contextType=t5;var Lu=new WeakMap;function h5({children:l,error:o}){let{basename:u}=C.useContext(Vt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=r5(o.digest);if(c){let h=Lu.get(o);if(h)throw h;let m=Tp(c.location,u);if(Ep&&!Lu.get(o))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Lu.set(o,p),p}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return l}function m5({routeContext:l,match:o,children:u}){let c=C.useContext(il);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),C.createElement(jn.Provider,{value:l},u)}function g5(l,o=[],u=null,c=null,h=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let m=l,p=u?.errors;if(p!=null){let _=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Ge(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,_+1))}let v=!1,y=-1;if(u)for(let _=0;_<m.length;_++){let w=m[_];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=_),w.route.id){let{loaderData:O,errors:G}=u,q=w.route.loader&&!O.hasOwnProperty(w.route.id)&&(!G||G[w.route.id]===void 0);if(w.route.lazy||q){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let x=u&&c?(_,w)=>{c(_,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Iv(u.matches),errorInfo:w})}:void 0;return m.reduceRight((_,w,O)=>{let G,q=!1,Y=null,K=null;u&&(G=p&&w.route.id?p[w.route.id]:void 0,Y=w.route.errorElement||f5,v&&(y<0&&O===0?(Op("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,K=null):y===O&&(q=!0,K=w.route.hydrateFallbackElement||null)));let Z=o.concat(m.slice(0,O+1)),V=()=>{let L;return G?L=Y:q?L=K:w.route.Component?L=C.createElement(w.route.Component,null):w.route.element?L=w.route.element:L=_,C.createElement(m5,{match:w,routeContext:{outlet:_,matches:Z,isDataRoute:u!=null},children:L})};return u&&(w.route.ErrorBoundary||w.route.errorElement||O===0)?C.createElement(Dp,{location:u.location,revalidation:u.revalidation,component:Y,error:G,children:V(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:x}):V()},null)}function Kd(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p5(l){let o=C.useContext(il);return Ge(o,Kd(l)),o}function x5(l){let o=C.useContext(so);return Ge(o,Kd(l)),o}function b5(l){let o=C.useContext(jn);return Ge(o,Kd(l)),o}function Zd(l){let o=b5(l),u=o.matches[o.matches.length-1];return Ge(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function y5(){return Zd("useRouteId")}function v5(){let l=C.useContext(Yd),o=x5("useRouteError"),u=Zd("useRouteError");return l!==void 0?l:o.errors?.[u]}function j5(){let{router:l}=p5("useNavigate"),o=Zd("useNavigate"),u=C.useRef(!1);return Rp(()=>{u.current=!0}),C.useCallback(async(h,m={})=>{Gt(u.current,Mp),u.current&&(typeof h=="number"?await l.navigate(h):await l.navigate(h,{fromRouteId:o,...m}))},[l,o])}var T0={};function Op(l,o,u){!o&&!T0[l]&&(T0[l]=!0,Gt(!1,u))}C.memo(S5);function S5({routes:l,future:o,state:u,onError:c}){return Bp(l,void 0,u,c,o)}function $s({to:l,replace:o,state:u,relative:c}){Ge(al(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=C.useContext(Vt);Gt(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=C.useContext(jn),{pathname:p}=Sn(),v=qd(),y=Vd(l,Gd(m),p,c==="path"),x=JSON.stringify(y);return C.useEffect(()=>{v(JSON.parse(x),{replace:o,state:u,relative:c})},[v,x,c,o,u]),null}function qn(l){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function w5({basename:l="/",children:o=null,location:u,navigationType:c="POP",navigator:h,static:m=!1,unstable_useTransitions:p}){Ge(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:v,navigator:h,static:m,unstable_useTransitions:p,future:{}}),[v,h,m,p]);typeof u=="string"&&(u=nl(u));let{pathname:x="/",search:_="",hash:w="",state:O=null,key:G="default"}=u,q=C.useMemo(()=>{let Y=Xn(x,v);return Y==null?null:{location:{pathname:Y,search:_,hash:w,state:O,key:G},navigationType:c}},[v,x,_,w,O,G,c]);return Gt(q!=null,`<Router basename="${v}"> is not able to match the URL "${x}${_}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:C.createElement(Vt.Provider,{value:y},C.createElement(dr.Provider,{children:o,value:q}))}function z5({children:l,location:o}){return u5(Rd(l),o)}function Rd(l,o=[]){let u=[];return C.Children.forEach(l,(c,h)=>{if(!C.isValidElement(c))return;let m=[...o,h];if(c.type===C.Fragment){u.push.apply(u,Rd(c.props.children,m));return}Ge(c.type===qn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=Rd(c.props.children,m)),u.push(p)}),u}var Qs="get",Xs="application/x-www-form-urlencoded";function oo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function _5(l){return oo(l)&&l.tagName.toLowerCase()==="button"}function E5(l){return oo(l)&&l.tagName.toLowerCase()==="form"}function T5(l){return oo(l)&&l.tagName.toLowerCase()==="input"}function A5(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function C5(l,o){return l.button===0&&(!o||o==="_self")&&!A5(l)}function Bd(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((o,u)=>{let c=l[u];return o.concat(Array.isArray(c)?c.map(h=>[u,h]):[[u,c]])},[]))}function k5(l,o){let u=Bd(l);return o&&o.forEach((c,h)=>{u.has(h)||o.getAll(h).forEach(m=>{u.append(h,m)})}),u}var ks=null;function M5(){if(ks===null)try{new FormData(document.createElement("form"),0),ks=!1}catch{ks=!0}return ks}var R5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(l){return l!=null&&!R5.has(l)?(Gt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xs}"`),null):l}function B5(l,o){let u,c,h,m,p;if(E5(l)){let v=l.getAttribute("action");c=v?Xn(v,o):null,u=l.getAttribute("method")||Qs,h=Uu(l.getAttribute("enctype"))||Xs,m=new FormData(l)}else if(_5(l)||T5(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||v.getAttribute("action");if(c=y?Xn(y,o):null,u=l.getAttribute("formmethod")||v.getAttribute("method")||Qs,h=Uu(l.getAttribute("formenctype"))||Uu(v.getAttribute("enctype"))||Xs,m=new FormData(v,l),!M5()){let{name:x,type:_,value:w}=l;if(_==="image"){let O=x?`${x}.`:"";m.append(`${O}x`,"0"),m.append(`${O}y`,"0")}else x&&m.append(x,w)}}else{if(oo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Qs,c=null,h=Xs,p=l}return m&&h==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:h,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function D5(l,o,u,c){let h=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${c}`:h.pathname=`${h.pathname}.${c}`:h.pathname==="/"?h.pathname=`_root.${c}`:o&&Xn(h.pathname,o)==="/"?h.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${c}`,h}async function O5(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function N5(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function H5(l,o,u){let c=await Promise.all(l.map(async h=>{let m=o.routes[h.route.id];if(m){let p=await O5(m,u);return p.links?p.links():[]}return[]}));return V5(c.flat(1).filter(N5).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function A0(l,o,u,c,h,m){let p=(y,x)=>u[x]?y.route.id!==u[x].route.id:!0,v=(y,x)=>u[x].pathname!==y.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,x)=>p(y,x)||v(y,x)):m==="data"?o.filter((y,x)=>{let _=c.routes[y.route.id];if(!_||!_.hasLoader)return!1;if(p(y,x)||v(y,x))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function L5(l,o,{includeHydrateFallback:u}={}){return U5(l.map(c=>{let h=o.routes[c.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),u&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function U5(l){return[...new Set(l)]}function G5(l){let o={},u=Object.keys(l).sort();for(let c of u)o[c]=l[c];return o}function V5(l,o){let u=new Set;return new Set(o),l.reduce((c,h)=>{let m=JSON.stringify(G5(h));return u.has(m)||(u.add(m),c.push({key:m,link:h})),c},[])}function Np(){let l=C.useContext(il);return $d(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Y5(){let l=C.useContext(so);return $d(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Qd=C.createContext(void 0);Qd.displayName="FrameworkContext";function Hp(){let l=C.useContext(Qd);return $d(l,"You must render this element inside a <HydratedRouter> element"),l}function q5(l,o){let u=C.useContext(Qd),[c,h]=C.useState(!1),[m,p]=C.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:x,onMouseLeave:_,onTouchStart:w}=o,O=C.useRef(null);C.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let Y=Z=>{Z.forEach(V=>{p(V.isIntersecting)})},K=new IntersectionObserver(Y,{threshold:.5});return O.current&&K.observe(O.current),()=>{K.disconnect()}}},[l]),C.useEffect(()=>{if(c){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[c]);let G=()=>{h(!0)},q=()=>{h(!1),p(!1)};return u?l!=="intent"?[m,O,{}]:[m,O,{onFocus:Il(v,G),onBlur:Il(y,q),onMouseEnter:Il(x,G),onMouseLeave:Il(_,q),onTouchStart:Il(w,G)}]:[!1,O,{}]}function Il(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function K5({page:l,...o}){let{router:u}=Np(),c=C.useMemo(()=>Sp(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?C.createElement($5,{page:l,matches:c,...o}):null}function Z5(l){let{manifest:o,routeModules:u}=Hp(),[c,h]=C.useState([]);return C.useEffect(()=>{let m=!1;return H5(l,o,u).then(p=>{m||h(p)}),()=>{m=!0}},[l,o,u]),c}function $5({page:l,matches:o,...u}){let c=Sn(),{future:h,manifest:m,routeModules:p}=Hp(),{basename:v}=Np(),{loaderData:y,matches:x}=Y5(),_=C.useMemo(()=>A0(l,o,x,m,c,"data"),[l,o,x,m,c]),w=C.useMemo(()=>A0(l,o,x,m,c,"assets"),[l,o,x,m,c]),O=C.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let Y=new Set,K=!1;if(o.forEach(V=>{let L=m.routes[V.route.id];!L||!L.hasLoader||(!_.some(J=>J.route.id===V.route.id)&&V.route.id in y&&p[V.route.id]?.shouldRevalidate||L.hasClientLoader?K=!0:Y.add(V.route.id))}),Y.size===0)return[];let Z=D5(l,v,h.unstable_trailingSlashAwareDataRequests,"data");return K&&Y.size>0&&Z.searchParams.set("_routes",o.filter(V=>Y.has(V.route.id)).map(V=>V.route.id).join(",")),[Z.pathname+Z.search]},[v,h.unstable_trailingSlashAwareDataRequests,y,c,m,_,o,l,p]),G=C.useMemo(()=>L5(w,m),[w,m]),q=Z5(w);return C.createElement(C.Fragment,null,O.map(Y=>C.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),G.map(Y=>C.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),q.map(({key:Y,link:K})=>C.createElement("link",{key:Y,nonce:u.nonce,...K})))}function Q5(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var X5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X5&&(window.__reactRouterVersion="7.12.0")}catch{}function J5({basename:l,children:o,unstable_useTransitions:u,window:c}){let h=C.useRef();h.current==null&&(h.current=Av({window:c,v5Compat:!0}));let m=h.current,[p,v]=C.useState({action:m.action,location:m.location}),y=C.useCallback(x=>{u===!1?v(x):C.startTransition(()=>v(x))},[u]);return C.useLayoutEffect(()=>m.listen(y),[m,y]),C.createElement(w5,{basename:l,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:u})}var Lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,co=C.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:h,reloadDocument:m,replace:p,state:v,target:y,to:x,preventScrollReset:_,viewTransition:w,unstable_defaultShouldRevalidate:O,...G},q){let{basename:Y,unstable_useTransitions:K}=C.useContext(Vt),Z=typeof x=="string"&&Lp.test(x),V=Tp(x,Y);x=V.to;let L=o5(x,{relative:h}),[J,P,X]=q5(c,G),E=I5(x,{replace:p,state:v,target:y,preventScrollReset:_,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:O,unstable_useTransitions:K});function re(U){o&&o(U),U.defaultPrevented||E(U)}let he=C.createElement("a",{...G,...X,href:V.absoluteURL||L,onClick:V.isExternal||m?o:re,ref:Q5(q,P),target:y,"data-discover":!Z&&u==="render"?"true":void 0});return J&&!Z?C.createElement(C.Fragment,null,he,C.createElement(K5,{page:L})):he});co.displayName="Link";var W5=C.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:h=!1,style:m,to:p,viewTransition:v,children:y,...x},_){let w=fr(p,{relative:x.relative}),O=Sn(),G=C.useContext(so),{navigator:q,basename:Y}=C.useContext(Vt),K=G!=null&&aj(w)&&v===!0,Z=q.encodeLocation?q.encodeLocation(w).pathname:w.pathname,V=O.pathname,L=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;u||(V=V.toLowerCase(),L=L?L.toLowerCase():null,Z=Z.toLowerCase()),L&&Y&&(L=Xn(L,Y)||L);const J=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let P=V===Z||!h&&V.startsWith(Z)&&V.charAt(J)==="/",X=L!=null&&(L===Z||!h&&L.startsWith(Z)&&L.charAt(Z.length)==="/"),E={isActive:P,isPending:X,isTransitioning:K},re=P?o:void 0,he;typeof c=="function"?he=c(E):he=[c,P?"active":null,X?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let U=typeof m=="function"?m(E):m;return C.createElement(co,{...x,"aria-current":re,className:he,ref:_,style:U,to:p,viewTransition:v},typeof y=="function"?y(E):y)});W5.displayName="NavLink";var F5=C.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:h,state:m,method:p=Qs,action:v,onSubmit:y,relative:x,preventScrollReset:_,viewTransition:w,unstable_defaultShouldRevalidate:O,...G},q)=>{let{unstable_useTransitions:Y}=C.useContext(Vt),K=nj(),Z=ij(v,{relative:x}),V=p.toLowerCase()==="get"?"get":"post",L=typeof v=="string"&&Lp.test(v),J=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let X=P.nativeEvent.submitter,E=X?.getAttribute("formmethod")||p,re=()=>K(X||P.currentTarget,{fetcherKey:o,method:E,navigate:u,replace:h,state:m,relative:x,preventScrollReset:_,viewTransition:w,unstable_defaultShouldRevalidate:O});Y&&u!==!1?C.startTransition(()=>re()):re()};return C.createElement("form",{ref:q,method:V,action:Z,onSubmit:c?y:J,...G,"data-discover":!L&&l==="render"?"true":void 0})});F5.displayName="Form";function P5(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Up(l){let o=C.useContext(il);return Ge(o,P5(l)),o}function I5(l,{target:o,replace:u,state:c,preventScrollReset:h,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y}={}){let x=qd(),_=Sn(),w=fr(l,{relative:m});return C.useCallback(O=>{if(C5(O,o)){O.preventDefault();let G=u!==void 0?u:ur(_)===ur(w),q=()=>x(l,{replace:G,state:c,preventScrollReset:h,relative:m,viewTransition:p,unstable_defaultShouldRevalidate:v});y?C.startTransition(()=>q()):q()}},[_,x,w,u,c,o,l,h,m,p,v,y])}function Gp(l){Gt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=C.useRef(Bd(l)),u=C.useRef(!1),c=Sn(),h=C.useMemo(()=>k5(c.search,u.current?null:o.current),[c.search]),m=qd(),p=C.useCallback((v,y)=>{const x=Bd(typeof v=="function"?v(new URLSearchParams(h)):v);u.current=!0,m("?"+x,y)},[m,h]);return[h,p]}var ej=0,tj=()=>`__${String(++ej)}__`;function nj(){let{router:l}=Up("useSubmit"),{basename:o}=C.useContext(Vt),u=y5(),c=l.fetch,h=l.navigate;return C.useCallback(async(m,p={})=>{let{action:v,method:y,encType:x,formData:_,body:w}=B5(m,o);if(p.navigate===!1){let O=p.fetcherKey||tj();await c(O,u,p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:_,body:w,formMethod:p.method||y,formEncType:p.encType||x,flushSync:p.flushSync})}else await h(p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:_,body:w,formMethod:p.method||y,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,h,o,u])}function ij(l,{relative:o}={}){let{basename:u}=C.useContext(Vt),c=C.useContext(jn);Ge(c,"useFormAction must be used inside a RouteContext");let[h]=c.matches.slice(-1),m={...fr(l||".",{relative:o})},p=Sn();if(l==null){m.search=p.search;let v=new URLSearchParams(m.search),y=v.getAll("index");if(y.some(_=>_==="")){v.delete("index"),y.filter(w=>w).forEach(w=>v.append("index",w));let _=v.toString();m.search=_?`?${_}`:""}}return(!l||l===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Zn([u,m.pathname])),ur(m)}function aj(l,{relative:o}={}){let u=C.useContext(Cp);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Up("useViewTransitionState"),h=fr(l,{relative:o});if(!u.isTransitioning)return!1;let m=Xn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Xn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Is(h.pathname,p)!=null||Is(h.pathname,m)!=null}const lj="/assets/logo-BY-LKRi7.png",rj=f.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,sj=f.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,oj=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cj=f.img`
  height: 40px;
  width: auto;
`,uj=f.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,dj=f.div`
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
`,fj=f.button`
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
`;function er(){const l=Sn(),[o,u]=C.useState(!1);return a.jsx(rj,{children:a.jsxs(sj,{children:[a.jsx(Gu,{to:"/",onClick:()=>u(!1),children:a.jsxs(oj,{children:[a.jsx(cj,{src:lj,alt:"SCKW Logo"}),a.jsx(uj,{children:"SC Konstanz-Wollmatingen e. V."})]})}),a.jsxs(fj,{"aria-label":"Menü öffnen/schließen","aria-expanded":o,"aria-controls":"mobile-nav",onClick:()=>u(h=>!h),children:["Menü",a.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),a.jsxs(dj,{id:"mobile-nav",$open:o,children:[a.jsx(Gu,{to:"/sponsoring",$active:l.pathname==="/sponsoring"||l.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),a.jsx(Gu,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const hj=f.footer`
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
`,mj=f(co)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,gj=f.div`
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
`,pj=f.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Xd(){return a.jsx(hj,{children:a.jsxs(gj,{children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",a.jsx(Vu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),a.jsxs(pj,{"aria-label":"Rechtliches",children:[a.jsx(mj,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),a.jsx(Vu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),a.jsx(Vu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const $n=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),xj=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,bj=f.div`
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
`,yj=f.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,vj=f.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,jj=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,Sj=f.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,wj=f.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,zj=f.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,_j=f.li`
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
`,Ej=f.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,Tj=f.span`
  flex: 1;
`,Aj=f.a`
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
`,Cj=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,kj=f.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,Mj=f.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,Rj=f.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,Bj=f.a`
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
`,Dj="sponsoring@sckw.de";function Wa({packages:l}){const o=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const v=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},c=p=>{const v=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Dj}?subject=${y}&body=${x}`},h=p=>{const v=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},m=l.filter(p=>!p.title.includes("Platz-Renovierung"));return a.jsx(xj,{children:m.map((p,v)=>{const{isFullyBooked:y}=h(p),x=o(p.status),_=x==="vergeben"||y,w=y?"vergeben":x,O=p.keyBenefits||[];return a.jsxs(bj,{isVergeben:_,children:[a.jsxs(yj,{children:[a.jsx(vj,{children:u(p.title)}),a.jsx(jj,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!_&&a.jsx(Sj,{children:p.price}),a.jsx(wj,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),_&&p.sponsors&&p.sponsors.length>0?a.jsxs(Cj,{children:[p.sponsors[0].image&&a.jsx(kj,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),a.jsx(Mj,{children:p.sponsors[0].name}),a.jsxs(Rj,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&a.jsx(Bj,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):a.jsx(zj,{children:O.map((G,q)=>a.jsxs(_j,{isHighlight:G.highlight,children:[a.jsx(Ej,{children:G.icon}),a.jsx(Tj,{children:G.text})]},q))}),a.jsx(Aj,{href:_?void 0:c(p.title),isVergeben:_,children:_?"Vergeben":"Jetzt anfragen"})]},v)})})}const Oj=f.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,Nj=f.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Hj=f.button`
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
`,Lj=f.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,Uj=f.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,Gj=f.div`
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
`,Vj=f.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Yj=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",a.jsx("br",{}),a.jsx("br",{}),a.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:a.jsx(a.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function qj(){const[l,o]=C.useState([]),u=h=>{o(m=>m.includes(h)?m.filter(p=>p!==h):[...m,h])},c=(h,m)=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),u(m))};return a.jsx(Oj,{children:Yj.map(h=>{const m=l.includes(h.id);return a.jsxs(Nj,{children:[a.jsxs(Hj,{isOpen:m,onClick:()=>u(h.id),onKeyDown:p=>c(p,h.id),"aria-expanded":m,"aria-controls":`accordion-content-${h.id}`,children:[a.jsxs("span",{children:[a.jsx(Vj,{children:h.icon}),h.title]}),a.jsx(Lj,{isOpen:m,children:"▼"})]}),a.jsx(Uj,{isOpen:m,id:`accordion-content-${h.id}`,role:"region","aria-labelledby":`accordion-header-${h.id}`,children:a.jsx(Gj,{children:h.content})})]},h.id)})})}const Vp="/assets/cheerleading_0-DQQGXi0R.jpg",Yp="/assets/cheerleading_1-NkLBARmH.jpg",qp="/assets/cheerleading_2-CrezcZYL.jpg",Kp="/assets/cheerleading_3-GN5rPHNN.jpg",Zp="/assets/1-ClVWb4ei.png",$p="/assets/10-Bwp2eIye.png",Qp="/assets/11-W061sOUI.png",Xp="/assets/12-TjJyzl8L.png",Jp="/assets/13-ChUUCdQQ.png",Wp="/assets/14-BVhdRr98.png",Fp="/assets/2-CcfgIQYe.png",Pp="/assets/3-DYiPkVd7.png",Ip="/assets/4-1upoqVoS.png",ex="/assets/5-D0tadXAC.png",tx="/assets/6-NJ4ELm_j.png",nx="/assets/7-BXo4_Bcj.png",ix="/assets/8-BbOqEnj_.png",ax="/assets/9-CIK0gi9o.png",lx="/assets/herren_0-BVVgyt1l.jpg",rx="/assets/herren_1-B8ywOnNy.jpg",sx="/assets/herren_10-DPVQsg9B.jpg",ox="/assets/herren_11-wfWG62H3.jpg",cx="/assets/herren_12-DEJSN2zG.jpg",ux="/assets/herren_13-F52vdukE.jpg",dx="/assets/herren_14-Cq9hoKfG.jpg",fx="/assets/herren_15-aYIFGauG.jpg",hx="/assets/herren_16-NYI2EaEN.jpg",mx="/assets/herren_17-B_52ysA2.jpg",gx="/assets/herren_18-DbwjVNKJ.jpg",px="/assets/herren_19-BduD_J85.png",xx="/assets/herren_2--jFuixBF.jpg",bx="/assets/herren_3-BPz1zlkG.jpg",yx="/assets/herren_4-BZRrQaFr.jpg",vx="/assets/herren_5-D-QrfY2P.jpg",jx="/assets/herren_6-DWQvi6Am.jpg",Sx="/assets/herren_7-BXO6B8Bt.jpg",wx="/assets/herren_8-Cg4rdr7T.jpg",zx="/assets/herren_9-DoLnTdRG.jpg",_x="/assets/herren_jubel_500club-mxBrnD8H.png",Ex="/assets/IMG-team-BGcF1agj.png",Tx="/assets/IMG_5349-CpvIVKhM.jpg",Ax="/assets/IMG_5369-DQ4CSwdg.jpg",Cx="/assets/IMG_5421-BBzniIEN.jpg",kx="/assets/IMG_5442-D2PgutWB.jpg",Mx="/assets/IMG_5952-B9VW6Qie.jpg",Rx="/assets/Unbenann324t-IPGo6eoQ.png",Bx="/assets/image0-DDrU5aZn.jpeg",Dx="/assets/image11-BNM8hTkT.jpeg",Ox="/assets/image8-BUnedp9U.jpeg",Kj="/assets/grafhardenberg-Di5cVggE.png",Zj="/assets/horta-DydWIGV7.png",$j="/assets/logans-BgpKwKYA.png",Qj="/assets/ricobet-DsVC-eZt.png",Xj="/assets/rothaus-DqkKD9yW.png",Jj="/assets/tasty-B2pSa1rE.png",Wj="/assets/cabin-window-B83r_CDB.jpg",Fj="/assets/outside-9-xz17qL.jpg",Pj="/assets/shower-B75caJ-F.jpg",Ij="/assets/sitting-area-D7khB3Gw.jpg",e2="/assets/toilet-BpMHYbhh.jpg",t2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Vp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Yp,"../assets/gallery/cheerleading/cheerleading_2.jpg":qp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Kp,"../assets/gallery/damen/1.png":Zp,"../assets/gallery/damen/10.png":$p,"../assets/gallery/damen/11.png":Qp,"../assets/gallery/damen/12.png":Xp,"../assets/gallery/damen/13.png":Jp,"../assets/gallery/damen/14.png":Wp,"../assets/gallery/damen/2.png":Fp,"../assets/gallery/damen/3.png":Pp,"../assets/gallery/damen/4.png":Ip,"../assets/gallery/damen/5.png":ex,"../assets/gallery/damen/6.png":tx,"../assets/gallery/damen/7.png":nx,"../assets/gallery/damen/8.png":ix,"../assets/gallery/damen/9.png":ax,"../assets/gallery/herren/herren_0.jpg":lx,"../assets/gallery/herren/herren_1.jpg":rx,"../assets/gallery/herren/herren_10.jpg":sx,"../assets/gallery/herren/herren_11.jpg":ox,"../assets/gallery/herren/herren_12.jpg":cx,"../assets/gallery/herren/herren_13.jpg":ux,"../assets/gallery/herren/herren_14.jpg":dx,"../assets/gallery/herren/herren_15.jpg":fx,"../assets/gallery/herren/herren_16.jpg":hx,"../assets/gallery/herren/herren_17.jpg":mx,"../assets/gallery/herren/herren_18.jpg":gx,"../assets/gallery/herren/herren_19.png":px,"../assets/gallery/herren/herren_2.jpg":xx,"../assets/gallery/herren/herren_3.jpg":bx,"../assets/gallery/herren/herren_4.jpg":yx,"../assets/gallery/herren/herren_5.jpg":vx,"../assets/gallery/herren/herren_6.jpg":jx,"../assets/gallery/herren/herren_7.jpg":Sx,"../assets/gallery/herren/herren_8.jpg":wx,"../assets/gallery/herren/herren_9.jpg":zx,"../assets/gallery/herren/herren_jubel_500club.png":_x,"../assets/gallery/jfv/IMG-team.png":Ex,"../assets/gallery/jfv/IMG_5349.jpg":Tx,"../assets/gallery/jfv/IMG_5369.jpg":Ax,"../assets/gallery/jfv/IMG_5421.jpg":Cx,"../assets/gallery/jfv/IMG_5442.jpg":kx,"../assets/gallery/jfv/IMG_5952.jpg":Mx,"../assets/gallery/jfv/Unbenann324t.png":Rx,"../assets/gallery/jfv/image0.jpeg":Bx,"../assets/gallery/jfv/image11.jpeg":Dx,"../assets/gallery/jfv/image8.jpeg":Ox}),n2=Object.assign({"../assets/sponsors/grafhardenberg.png":Kj,"../assets/sponsors/horta.png":Zj,"../assets/sponsors/logans.png":$j,"../assets/sponsors/ricobet.png":Qj,"../assets/sponsors/rothaus.png":Xj,"../assets/sponsors/tasty.png":Jj}),i2=Object.assign({"../assets/renovation/cabin-window.jpg":Wj,"../assets/renovation/outside.jpg":Fj,"../assets/renovation/shower.jpg":Pj,"../assets/renovation/sitting-area.jpg":Ij,"../assets/renovation/toilet.jpg":e2}),Nx=l=>l.split("/").pop()?.toLowerCase()||"",a2=l=>{const o=l.match(/gallery\/(.*?)\//);return o?o[1]:"Sonstige"};function l2(l){const o=[...l];for(let u=o.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[o[u],o[c]]=[o[c],o[u]]}return o}const Hx=()=>{const l={};Object.entries(t2).forEach(([c,h])=>{const m=a2(c);l[m]||(l[m]=[]),l[m].push(h)}),Object.keys(l).forEach(c=>{l[c]=l2(l[c])});const o={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{l[c]&&(o[c]=l[c])}),Object.keys(l).forEach(c=>{u.includes(c.toLowerCase())||(o[c]=l[c])}),o},r2=()=>{const l={};return Object.entries(n2).forEach(([o,u])=>{const c=Nx(o);l[c]=u}),l},Lx=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(i2).forEach(([o,u])=>{const c=Nx(o);c.includes("sitting")?l.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?l.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&l.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?l.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?l.waschkueche.push({src:u,alt:"Dusche"}):l.waschkueche.push({src:u,alt:"Waschküche"}))}),l},St=l=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Vp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Yp,"../assets/gallery/cheerleading/cheerleading_2.jpg":qp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Kp,"../assets/gallery/damen/1.png":Zp,"../assets/gallery/damen/10.png":$p,"../assets/gallery/damen/11.png":Qp,"../assets/gallery/damen/12.png":Xp,"../assets/gallery/damen/13.png":Jp,"../assets/gallery/damen/14.png":Wp,"../assets/gallery/damen/2.png":Fp,"../assets/gallery/damen/3.png":Pp,"../assets/gallery/damen/4.png":Ip,"../assets/gallery/damen/5.png":ex,"../assets/gallery/damen/6.png":tx,"../assets/gallery/damen/7.png":nx,"../assets/gallery/damen/8.png":ix,"../assets/gallery/damen/9.png":ax,"../assets/gallery/herren/herren_0.jpg":lx,"../assets/gallery/herren/herren_1.jpg":rx,"../assets/gallery/herren/herren_10.jpg":sx,"../assets/gallery/herren/herren_11.jpg":ox,"../assets/gallery/herren/herren_12.jpg":cx,"../assets/gallery/herren/herren_13.jpg":ux,"../assets/gallery/herren/herren_14.jpg":dx,"../assets/gallery/herren/herren_15.jpg":fx,"../assets/gallery/herren/herren_16.jpg":hx,"../assets/gallery/herren/herren_17.jpg":mx,"../assets/gallery/herren/herren_18.jpg":gx,"../assets/gallery/herren/herren_19.png":px,"../assets/gallery/herren/herren_2.jpg":xx,"../assets/gallery/herren/herren_3.jpg":bx,"../assets/gallery/herren/herren_4.jpg":yx,"../assets/gallery/herren/herren_5.jpg":vx,"../assets/gallery/herren/herren_6.jpg":jx,"../assets/gallery/herren/herren_7.jpg":Sx,"../assets/gallery/herren/herren_8.jpg":wx,"../assets/gallery/herren/herren_9.jpg":zx,"../assets/gallery/herren/herren_jubel_500club.png":_x,"../assets/gallery/jfv/IMG-team.png":Ex,"../assets/gallery/jfv/IMG_5349.jpg":Tx,"../assets/gallery/jfv/IMG_5369.jpg":Ax,"../assets/gallery/jfv/IMG_5421.jpg":Cx,"../assets/gallery/jfv/IMG_5442.jpg":kx,"../assets/gallery/jfv/IMG_5952.jpg":Mx,"../assets/gallery/jfv/Unbenann324t.png":Rx,"../assets/gallery/jfv/image0.jpeg":Bx,"../assets/gallery/jfv/image11.jpeg":Dx,"../assets/gallery/jfv/image8.jpeg":Ox})).find(([c])=>c.includes(l));return u?u[1]:""},Jd=(l,o)=>St(`${l}/${l}_${o}.jpg`);Hx(),r2(),Lx();function s2(){const l=Hx(),[o,u]=C.useState(null);return C.useEffect(()=>{if(!o)return;const c=h=>{h.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[o]),a.jsxs("section",{children:[a.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([c,h])=>a.jsxs("div",{style:{marginBottom:"2.5rem"},children:[a.jsx(o2,{children:c.toUpperCase()}),a.jsx(c2,{children:h.map((m,p)=>a.jsx(u2,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),o&&o.folder===c&&a.jsx(d2,{onClick:()=>u(null),children:a.jsxs(f2,{onClick:m=>m.stopPropagation(),children:[a.jsx(h2,{src:h[o.idx],alt:`Großansicht aus ${c}`}),a.jsx(m2,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const o2=f.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,c2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,u2=f.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,d2=f.div`
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
`,f2=f.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,h2=f.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,m2=f.button`
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
`,g2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,p2=f.div`
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
`,x2=f.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,b2=f.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,y2=f.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,v2=f.div`
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
`,j2=f.a`
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
`;function Yu({icon:l,title:o,description:u,packages:c,buttonHref:h,buttonText:m}){return a.jsxs(p2,{children:[a.jsx(x2,{children:l}),a.jsx(b2,{children:o}),a.jsx(y2,{children:u}),a.jsx(v2,{children:c.map((p,v)=>a.jsxs("div",{children:[p,v<c.length-1&&a.jsx("br",{})]},v))}),a.jsx(j2,{href:h,children:m})]})}const S2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,w2=f.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,z2=f.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,_2=f.p`
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
`;function Ux({headline:l,description:o,contactInfos:u}){const c=h=>{h.preventDefault();const m=h.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const y=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),_=String(p.get("email")||"").trim(),w=String(p.get("phone")||"").trim(),O={};if(y||(O.firstName="Bitte Vornamen angeben"),x||(O.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)||(O.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(w)||(O.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(O).length>0){const G=Object.keys(O)[0],q=m.querySelector(`[name="${G}"]`);q&&q.focus(),alert(Object.values(O).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return a.jsx(E2,{id:"kontakt",children:a.jsxs(T2,{children:[a.jsx(L2,{children:l}),a.jsx(U2,{children:o}),a.jsx(S2,{children:u.map((h,m)=>a.jsxs(w2,{children:[a.jsxs(z2,{children:[h.icon," ",h.title]}),a.jsx(_2,{$isEmail:h.isEmail,children:h.isEmail?a.jsx("a",{href:`mailto:${h.content}`,children:h.content}):h.content})]},m))}),a.jsxs(A2,{children:[a.jsx(C2,{children:"Kontakt aufnehmen"}),a.jsx(k2,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),a.jsxs(M2,{noValidate:!0,onSubmit:c,children:[a.jsxs(qu,{children:[a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"firstName",children:"Vorname"}),a.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"lastName",children:"Nachname"}),a.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),a.jsxs(qu,{children:[a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),a.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),a.jsxs(ar,{children:[a.jsx("label",{htmlFor:"phone",children:"Telefon"}),a.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),a.jsx(qu,{children:a.jsxs(R2,{children:[a.jsx("label",{htmlFor:"email",children:"E-Mail"}),a.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),a.jsxs(B2,{"aria-hidden":"true",tabIndex:-1,children:[a.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),a.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),a.jsxs(D2,{children:[a.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),a.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",a.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),a.jsxs(O2,{children:[a.jsx(N2,{type:"submit",children:"Absenden"}),a.jsxs(H2,{children:["Alternativ:"," ",a.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const E2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,T2=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,A2=f.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,C2=f.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,k2=f.p`
  margin: 0 0 1rem 0;
  color: #555;
`,M2=f.form`
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
`,R2=f(ar)`
  grid-column: 1 / -1;
`,B2=f.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,D2=f.div`
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
`,O2=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,N2=f.button`
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
`,H2=f.span`
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
`,L2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,U2=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,G2=f.section`
  background: url("${Jd("herren",4)}") center/cover;
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
`,V2=f.h1`
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
`,Y2=f.h2`
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
`,C0=f.a`
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
`,q2=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,K2=f.main`
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
`,Z2=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,$2=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,Q2=f.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,X2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,J2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,W2=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,k0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,M0=f.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,R0=f.ul`
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
`,F2=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,P2=f.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,I2=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,eS=f.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,tS=f.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,nS=f.ul`
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
`,Zu=f.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,$u=f.div`
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
`,iS=f.div`
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
`,aS=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,lS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,rS=f.a`
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
`,sS=f.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,oS=f.div`
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
`,cS=f.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,uS=f.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,dS=f.a`
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
`,fS=f.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,hS=f.h3`
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
`,mS=f.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,gS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,B0=f.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,D0=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,O0=f.table`
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
`,pS=f.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,xS=f.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,bS=f.ul`
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
`,yS=f.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,vS=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,jS=f.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,SS=f.a`
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
`;function wS(){return a.jsxs(a.Fragment,{children:[a.jsx(G2,{children:a.jsxs(Z2,{children:[a.jsx(V2,{children:"SC Konstanz-Wollmatingen"}),a.jsx(Y2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),a.jsxs(q2,{children:[a.jsx(C0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),a.jsx(C0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),a.jsxs(K2,{children:[a.jsx(tr,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),a.jsx($2,{children:a.jsx(Q2,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),a.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[a.jsx(sS,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),a.jsxs(g2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[a.jsx(Yu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),a.jsx(Yu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),a.jsx(Yu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),a.jsxs("section",{"aria-labelledby":"premium-pakete",children:[a.jsx(tr,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),a.jsx(Wa,{packages:$n.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[a.jsx(tr,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),a.jsx(Wa,{packages:$n.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),a.jsxs("section",{"aria-labelledby":"starter-pakete",children:[a.jsx(tr,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),a.jsx(Wa,{packages:$n.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),a.jsxs(oS,{children:[a.jsx(cS,{children:"⚽ Ballspende-Beispiel ansehen"}),a.jsx(uS,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),a.jsx(dS,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),a.jsxs(X2,{children:[a.jsx(J2,{children:"Warum SC Konstanz-Wollmatingen?"}),a.jsxs(W2,{children:[a.jsxs(k0,{children:[a.jsx(M0,{children:"📊 Erreichte Reichweite"}),a.jsxs(R0,{children:[a.jsx("li",{children:"15+ Heimspiele pro Saison"}),a.jsx("li",{children:"200+ Zuschauer pro Spiel"}),a.jsx("li",{children:"2.500+ Instagram Follower"}),a.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),a.jsxs(k0,{children:[a.jsx(M0,{children:"🏆 Sportlicher Erfolg"}),a.jsxs(R0,{children:[a.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),a.jsx("li",{children:"2. Mannschaften pro Abteilung"}),a.jsx("li",{children:"Cheerleading-Team aktiv"}),a.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),a.jsx(tr,{children:"Zusätzliche Werbemöglichkeiten"}),a.jsxs(F2,{children:[a.jsx(P2,{children:'Werbung im Stadionmagazin „Heimspiel"'}),a.jsxs(I2,{children:[a.jsxs(eS,{children:[a.jsxs($u,{children:[a.jsx(Qu,{children:"1 Seite (Farbe)"}),a.jsx(Xu,{children:"1.000 €"}),a.jsx(Ju,{children:"DIN A4 (297 × 210 mm)"})]}),a.jsxs($u,{children:[a.jsx(Qu,{children:"1/2 Seite (Farbe)"}),a.jsx(Xu,{children:"500 €"}),a.jsx(Ju,{children:"DIN A5 (148 × 210 mm)"})]}),a.jsxs($u,{children:[a.jsx(Qu,{children:"1/4 Seite (Farbe)"}),a.jsx(Xu,{children:"250 €"}),a.jsx(Ju,{children:"DIN A6 (105 × 148 mm)"})]})]}),a.jsx(tS,{children:a.jsxs(nS,{children:[a.jsxs(Ku,{children:[a.jsx(Zu,{}),"15 Ausgaben pro Saison"]}),a.jsxs(Ku,{children:[a.jsx(Zu,{}),"ca. 100 Exemplare pro Heimspiel"]}),a.jsxs(Ku,{children:[a.jsx(Zu,{}),"Digitale Version (Social Media & Website)"]})]})})]}),a.jsxs(iS,{children:[a.jsx(aS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),a.jsx(lS,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),a.jsx(rS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),a.jsxs(fS,{children:[a.jsx(hS,{children:"Werbeflächen auf dem Vereinsbus"}),a.jsx(mS,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),a.jsxs(gS,{children:[a.jsxs(B0,{children:[a.jsx(D0,{children:"Premium-Flächen"}),a.jsxs(O0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Heckfläche (100×80 cm)"}),a.jsx("td",{children:"Sehr hoch"}),a.jsx("td",{children:"1.200 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Seitentüren (links/rechts)"}),a.jsx("td",{children:"Hoch"}),a.jsx("td",{children:"je 900 €"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Hintere Seitenflächen"}),a.jsx("td",{children:"Mittel-hoch"}),a.jsx("td",{children:"je 600 €"})]})]})]})]}),a.jsxs(B0,{children:[a.jsx(D0,{children:"Standard-Flächen"}),a.jsxs(O0,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Position"}),a.jsx("th",{children:"Sichtbarkeit"}),a.jsx("th",{children:"Preis / Jahr"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),a.jsx("td",{children:"Mittel"}),a.jsx("td",{children:"400 € je Seite"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Frontstoßstange"}),a.jsx("td",{children:"Gering-mittel"}),a.jsx("td",{children:"250 €"})]})]})]})]})]}),a.jsxs(pS,{children:[a.jsx(xS,{children:"Zusatzoptionen:"}),a.jsxs(bS,{children:[a.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),a.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),a.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),a.jsxs(yS,{children:[a.jsx(vS,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),a.jsx(jS,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),a.jsx(SS,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),a.jsx(qj,{}),a.jsx(Ux,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),a.jsx(s2,{})]}),a.jsx(Xd,{})]})}const Wd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Gx=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Fa={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},zS="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Vx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Yx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],qx=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],_S="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Ut={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},ES=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],TS=f.div`
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
`,AS=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,CS=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,kS=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,MS=f.div`
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
`,RS=f.img`
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
`,BS=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,DS=f.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=f.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,NS=f.div`
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
`,HS=f.div`
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
`,LS=f.div`
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
`,US=f.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Kx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:St("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:St("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:St("herren/herren_16")}],GS=Math.max(...Kx.map(l=>l.value));function VS(){return a.jsxs(TS,{children:[a.jsx(AS,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),a.jsx(CS,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),a.jsx(kS,{children:Kx.map(l=>a.jsxs(MS,{children:[a.jsx(RS,{src:l.image,alt:l.label}),a.jsxs(BS,{children:[a.jsxs(DS,{children:[l.icon," ",l.label]}),a.jsx(OS,{children:a.jsx(NS,{$percent:l.value/GS*100,$gradient:l.gradient})})]}),a.jsxs(HS,{children:[(l.value/1e3).toFixed(0),"k"]})]},l.label))}),a.jsxs(LS,{children:[a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#9ca3af"}),a.jsx("span",{children:"Aktuell (Winterpause)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#e10073"}),a.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),a.jsxs(Wu,{children:[a.jsx(Fu,{$color:"#ff6b9d"}),a.jsx("span",{children:"Prognose kommende Saison"})]})]}),a.jsxs(US,{children:[a.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const YS=f.div`
  width: 100%;
  margin: 2rem 0;
`,qS=f.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,KS=f.table`
  width: 100%;
  border-collapse: collapse;
`,N0=f.th`
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
`,ZS=f.td`
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
`,$S=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,QS=f.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${l=>l.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${l=>l.isVergeben?.8:1};
`,XS=f.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,JS=f.div`
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
`,H0=f.a`
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
`,WS="sponsoring@sckw.de";function FS({packages:l}){const o=c=>{const h=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${h}"`);return`mailto:${WS}?subject=${m}`},u=c=>{const h=c.benefits.find(p=>{const v=p.toLowerCase();return v.includes("social media")||v.includes("instagram")});if(!h)return"-";const m=h.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return a.jsxs(YS,{children:[a.jsx(qS,{children:a.jsxs(KS,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(N0,{children:"Paket"}),l.map((c,h)=>a.jsx(N0,{isVergeben:c.status.includes("Vergeben"),children:c.title},h))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx(Ki,{children:"Preis"}),l.map((c,h)=>a.jsx(ZS,{isVergeben:c.status.includes("Vergeben"),children:c.price},h))]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Trikot/Banner"}),l.map((c,h)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return a.jsx(Ki,{children:m?"✅ Ja":"-"},h)})]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Social Media"}),l.map((c,h)=>{const m=u(c);return a.jsx(Ki,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},h)})]}),a.jsxs("tr",{children:[a.jsx(Ki,{children:"Aktion"}),l.map((c,h)=>a.jsx(Ki,{children:a.jsx(H0,{href:c.status.includes("Vergeben")?void 0:o(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},h))]})]})]})}),a.jsx($S,{children:l.map((c,h)=>{const m=c.status.includes("Vergeben");return a.jsxs(QS,{isVergeben:m,children:[a.jsx(XS,{children:c.title}),a.jsx(JS,{children:c.price}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Status"}),a.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Social Media"}),a.jsx("span",{children:u(c)})]}),a.jsxs(Pu,{children:[a.jsx("span",{children:"Vorteile"}),a.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),a.jsx(H0,{href:m?void 0:o(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},h)})})]})}const PS=f.div`
  margin-top: 2.5rem;
`,IS=f.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,e3=f.button`
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
`,t3=f.div`
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
`,n3=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,i3=$n.filter(l=>l.tier==="premium"),a3=$n.filter(l=>l.tier==="lokal"),l3=$n.filter(l=>l.tier==="starter");function r3(){const[l,o]=C.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:i3},{key:"lokal",label:"🏢 Lokal",packages:a3},{key:"starter",label:"🌟 Starter",packages:l3}],c=u.find(h=>h.key===l);return a.jsxs(PS,{children:[a.jsx(IS,{children:u.map(h=>a.jsx(e3,{$active:l===h.key,onClick:()=>o(h.key),children:h.label},h.key))}),a.jsxs(t3,{children:[c&&a.jsx(FS,{packages:c.packages}),a.jsxs(n3,{children:[l==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",l==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",l==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const s3=f.div`
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
`,o3=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,c3=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,u3=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,d3=f.table`
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
`,f3=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,h3=f.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,m3=f.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,g3=f.div`
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
`,p3=f.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function x3(){const l=Gx;return a.jsxs(s3,{children:[a.jsx(o3,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),a.jsx(c3,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a.jsx(u3,{children:a.jsxs(d3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Leistung / Erfolg"}),a.jsx("th",{children:"Starter"}),a.jsx("th",{children:"Premium"}),a.jsx("th",{children:"Kombi (Beispiel)"})]})}),a.jsxs("tbody",{children:[l.map((o,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:o.label}),a.jsx(Iu,{children:o.starter}),a.jsx(Iu,{children:o.premium}),a.jsx(Iu,{children:o.kombi})]},u)),a.jsxs("tr",{children:[a.jsx("td",{children:"Erwartete Kosten"}),a.jsx("td",{children:Fa.starter}),a.jsx("td",{children:Fa.premium}),a.jsx("td",{children:Fa.kombi})]})]})]})}),a.jsx(f3,{children:["Starter","Premium","Kombi"].map(o=>a.jsxs(h3,{children:[a.jsx(m3,{children:o}),l.map((u,c)=>a.jsxs(g3,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:o==="Starter"?u.starter:o==="Premium"?u.premium:u.kombi})]},c))]},o))}),a.jsx(p3,{children:zS})]})}const b3=f.div`
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
`,y3=f.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,v3=f.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,j3=f.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,S3=f.table`
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
`,w3=f.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,z3=f.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,_3=f.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,E3=f.div`
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
`,T3=f.div`
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
`,A3=f.div`
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
`;function C3(){const l=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return a.jsxs(b3,{children:[a.jsx(y3,{children:"👤 Spielerpatenschaften (diskret)"}),a.jsx(v3,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),a.jsx(j3,{children:a.jsxs(S3,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Merkmal"}),a.jsx("th",{children:"Bronze"}),a.jsx("th",{children:"Silber"}),a.jsx("th",{children:"Gold"})]})}),a.jsx("tbody",{children:l.map((o,u)=>a.jsxs("tr",{children:[a.jsx("td",{children:o.label}),a.jsx("td",{children:o.bronze}),a.jsx("td",{children:o.silber}),a.jsx("td",{children:o.gold})]},u))})]})}),a.jsx(w3,{children:["Bronze","Silber","Gold"].map(o=>a.jsxs(z3,{children:[a.jsx(_3,{children:o}),l.map((u,c)=>a.jsxs(E3,{children:[a.jsx("span",{children:u.label}),a.jsx("span",{children:o==="Bronze"?u.bronze:o==="Silber"?u.silber:u.gold})]},c))]},o))}),a.jsxs(T3,{children:[a.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),a.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',a.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',a.jsx("em",{children:"[Foto vom Torjubel]"})]}),a.jsxs(A3,{children:[a.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const k3=f.div`
  max-width: 1000px;
  margin: 0 auto;
`,M3=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,R3=f.a`
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
`,B3=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,D3=f.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,O3=f.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,N3=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,H3=f.a`
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
`,L3=f.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,U3=f.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,G3={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function V3(){const{hauptsponsor:l,partners:o}=G3;return a.jsxs(k3,{children:[a.jsx(M3,{children:a.jsxs(R3,{href:l.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(B3,{children:"Hauptsponsor"}),a.jsx(D3,{src:l.logo,alt:l.name}),a.jsx(O3,{children:l.name})]})}),a.jsx(N3,{children:o.map((u,c)=>a.jsxs(H3,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(L3,{src:u.logo,alt:u.name}),a.jsx(U3,{children:u.name})]},c))})]})}const yn=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,$a=f.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ms=f($a)`
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
`,Y3=f.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,q3=f.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,K3=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Z3=f.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,$3=f.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Q3=f.p`
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
`,X3=f.div`
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
`,J3=f.div`
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
`,W3=f.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,F3=f.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,P3=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,L0=f.a`
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
`,I3=f.div`
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
`,ew=f.div`
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
`,tw=f.div`
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
`,nw=f.div`
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
`,iw=f.div`
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
`,U0=f.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,aw=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,G0=f.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,lw=f.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,rw=f.table`
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
`,sw=f.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,ow=f.div`
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
`,cw=f.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,uw=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,dw=f.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,fw=f.div`
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
`,hw=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,mw=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,gw=f.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,pw=f.div`
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
`,xw=f.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,bw=f.a`
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
`,yw=Wd,vw=$n.filter(l=>l.tier==="premium"),jw=$n.filter(l=>l.tier==="lokal"),Sw=$n.filter(l=>l.tier==="starter");function ww(){const l=[St("herren/herren_6"),St("herren/herren_16"),St("herren/herren_5"),St("herren/herren_14")].filter(Boolean),[o,u]=C.useState(0);return C.useEffect(()=>{if(l.length<=1)return;const c=setInterval(()=>{u(h=>(h+1)%l.length)},6e3);return()=>clearInterval(c)},[l.length]),a.jsxs(a.Fragment,{children:[a.jsxs(Y3,{children:[l.map((c,h)=>a.jsx(q3,{$bg:c,$active:h===o},h)),a.jsx(K3,{}),a.jsxs(Z3,{children:[a.jsx($3,{children:"Sponsoring, das messbar wirkt"}),a.jsxs(Q3,{children:["In der Winterpause erzielen wir bereits"," ",a.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",a.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),a.jsx(X3,{children:yw.map(c=>a.jsxs(J3,{children:[a.jsx(W3,{children:c.value}),a.jsx(F3,{children:c.label})]},c.label))}),a.jsxs(P3,{children:[a.jsx(L0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const h=document.getElementById("kontakt");h&&h.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),a.jsx(L0,{href:"#pakete",onClick:c=>{c.preventDefault();const h=document.getElementById("pakete");h&&h.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),a.jsx(Ms,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Warum sich Sponsoring bei uns lohnt"}),a.jsx(ji,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),a.jsxs(tw,{children:[a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Sichtbarkeit, die bleibt"}),a.jsx(ad,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Ihre Kunden sind hier"}),a.jsx(ad,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),a.jsxs(ed,{children:[a.jsx(td,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),a.jsxs(nd,{children:[a.jsx(id,{children:"Doppelte Wirkung"}),a.jsx(ad,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),a.jsx($a,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Diese Unternehmen sind bereits Partner"}),a.jsx(ji,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),a.jsx(V3,{})]})}),a.jsx(Ms,{id:"pakete",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Finden Sie Ihr perfektes Paket"}),a.jsx(ji,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Premium-Partnerschaften"}),a.jsx(Wa,{packages:vw})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Pakete im Vergleich"}),a.jsx(r3,{})]}),a.jsx(x3,{}),a.jsx(C3,{}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Lokale Werbemöglichkeiten"}),a.jsx(Wa,{packages:jw}),a.jsx(ld,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),a.jsxs(Os,{children:[a.jsx(Ns,{children:"Starter & Spieltag"}),a.jsx(Wa,{packages:Sw})]})]})}),a.jsx($a,{id:"reichweite",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"So viele Menschen erreichen Sie"}),a.jsx(ji,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),a.jsxs(I3,{children:[a.jsxs(Rs,{children:[a.jsx(Bs,{children:"32.000"}),a.jsx(Ds,{children:"Reichweite / 30 Tage"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"250.000"}),a.jsx(Ds,{children:"Reichweite / 90 Tage"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"50-80k"}),a.jsx(Ds,{children:"Pro Monat in Saison"})]}),a.jsxs(Rs,{children:[a.jsx(Bs,{children:"500-800k"}),a.jsx(Ds,{children:"Saisonreichweite (konservativ)"})]})]}),a.jsxs(ew,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",a.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),a.jsx(Ms,{children:a.jsx(yn,{children:a.jsx(VS,{})})}),a.jsx($a,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Was Sie auf Social Media bekommen"}),a.jsx(ji,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),a.jsxs(nw,{children:[a.jsx(rd,{children:"📱 Feed-Posts mit Ihrem Logo"}),a.jsx(rd,{children:"📸 Stories & Erwähnungen"}),a.jsx(rd,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),a.jsx(ld,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),a.jsx(Ms,{id:"buswerbung",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Mobile Werbung auf unserem Vereinsbus"}),a.jsx(ji,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),a.jsxs(aw,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen mit Werbeflächen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),a.jsx(G0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),a.jsx(lw,{children:a.jsxs(rw,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Fläche"}),a.jsx("th",{children:"Größe (ca.)"}),a.jsx("th",{children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...Vx,...Yx].map(c=>a.jsxs("tr",{children:[a.jsx("td",{children:c.position}),a.jsx("td",{children:c.groesse}),a.jsx("td",{children:a.jsx("strong",{children:c.preis})})]},c.position))})]})}),a.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[a.jsx(G0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),a.jsx(sw,{children:qx.map((c,h)=>a.jsx("li",{children:c},h))})]})]}),a.jsx(ld,{children:_S})]})}),a.jsx($a,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"Ihre Marke in Aktion"}),a.jsx(ji,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),a.jsxs(iw,{children:[a.jsxs(sd,{children:[a.jsx(od,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Stadionmagazin"}),a.jsx(dd,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),a.jsx(U0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),a.jsxs(sd,{children:[a.jsx(od,{src:St("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Bandenwerbung"}),a.jsx(dd,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),a.jsxs(sd,{children:[a.jsx(od,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),a.jsxs(cd,{children:[a.jsx(ud,{children:"Ballspende"}),a.jsx(dd,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),a.jsx(U0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),a.jsx(cw,{id:"500club",children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(uw,{children:"500 €Club"}),a.jsx(dw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),a.jsxs(fw,{children:[a.jsxs(hw,{children:[a.jsxs(gw,{children:[a.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),a.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),a.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),a.jsxs(pw,{children:[a.jsxs(fd,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(fd,{children:["Ihr ",a.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),a.jsxs(fd,{children:["Direkte Förderung von ",a.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),a.jsxs(mw,{children:[a.jsxs(xw,{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),a.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),a.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),a.jsx("br",{}),"Sparkasse Bodensee",a.jsx("br",{}),a.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),a.jsx(bw,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),a.jsx($a,{children:a.jsxs(yn,{children:[a.jsxs(Vn,{children:[a.jsx(vi,{children:"In 4 Schritten zum Sponsoring-Start"}),a.jsx(ji,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),a.jsxs(ow,{children:[a.jsxs(Hs,{children:[a.jsx(Ls,{children:"1. Kontakt"}),a.jsx(Us,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"2. Bedarf"}),a.jsx(Us,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"3. Angebot"}),a.jsx(Us,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),a.jsxs(Hs,{children:[a.jsx(Ls,{children:"4. Umsetzung"}),a.jsx(Us,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),a.jsx(Ux,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Ut.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Ut.vollAdresse}]}),a.jsx(Xd,{})]})}function zw(){return Gp(),!0}const _w=Tv`
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
`,V0=f.div`
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
`,Y0=f.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,q0=f.div`
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
`,Ew=f.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,Tw=f.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,_t=f.section`
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
`,zt=f.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,mt=f.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Ne=f.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,ee=f.li`
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
`,wt=f.ul`padding: 0; margin: 3mm 0;`,Wi=f.div`
  display: ${l=>l.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ht=f.div`margin-bottom: 4mm;`,it=f.label`
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
`,Aw=f.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Fd=f.div`
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
`;function _i(){return a.jsxs(Aw,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",a.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function dn(){return a.jsxs(Fd,{children:[a.jsxs(Qn,{children:[a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),a.jsx("br",{}),"Schleyerweg 5",a.jsx("br",{}),"78467 Konstanz"]}),a.jsxs(Qn,{$center:!0,children:[Ut.email,a.jsx("br",{}),"partner.sckw.de"]}),a.jsxs(Qn,{$right:!0,children:["Sparkasse Bodensee",a.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",a.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const K0=St("herren/herren_0"),hd=St("herren/herren_6"),Z0=St("herren/herren_1"),Cw=St("herren/herren_14"),eo=f.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function kw(){return a.jsx(_t,{children:a.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),a.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),a.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),a.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),a.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",a.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Wd.slice(0,2).map(l=>a.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[a.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:l.value}),a.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:l.label})]},l.label))}),a.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function Mw(){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"WARUM SCKW?"}),a.jsx(zt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Wd.map(l=>a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[a.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:l.value}),a.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:l.label})]},l.label))}),a.jsx(mt,{children:"Was Sie bei uns erreichen"}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),a.jsx(ee,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),a.jsx(ee,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),a.jsx(ee,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),a.jsx(mt,{children:"Der Verein auf einen Blick"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsxs(Ne,{children:[a.jsx("strong",{children:"Gegründet:"})," 1912"]}),a.jsxs(Ne,{children:[a.jsx("strong",{children:"Mitglieder:"})," 500+"]}),a.jsxs(Ne,{children:[a.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),a.jsxs("div",{children:[a.jsxs(Ne,{children:[a.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),a.jsxs(Ne,{children:[a.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),a.jsxs(Ne,{children:[a.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),K0&&a.jsx(eo,{src:K0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),a.jsx(dn,{})]})]})}function Rw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"HAUPTSPONSOR"}),a.jsx(zt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Trikotwerbung auf der Brust"}),a.jsx(ee,{children:"Business Club Mitgliedschaft"}),a.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),a.jsx(ee,{children:"1/1 seitiges Inserat im SC Magazin"}),a.jsx(ee,{children:"10 Saisonkarten"}),a.jsx(ee,{children:"Werbeauftritte nach Absprache"}),a.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Bw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"CO-SPONSOR"}),a.jsx(zt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Werbung auf den Trainingsanzügen"}),a.jsx(ee,{children:"Business Club Mitgliedschaft"}),a.jsx(ee,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),a.jsx(ee,{children:"1/2 seitiges Inserat im SC Magazin"}),a.jsx(ee,{children:"5 Saisonkarten"}),a.jsx(ee,{children:"Werbeauftritte nach Absprache"}),a.jsx(ee,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),a.jsx(ee,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),a.jsx(ee,{children:"Logo / Namenszug auf den Fahrzeugen"}),a.jsx(ee,{children:"Logo / Link auf der Vereinshomepage"}),a.jsx(ee,{children:"weitere Möglichkeiten nach Absprache"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Dw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"SILBER-PARTNER"}),a.jsx(zt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"1 Bande (5×2 m) am Gelände"}),a.jsx(ee,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),a.jsx(ee,{children:"Werbeplane am Gelände"}),a.jsx(ee,{children:"Vereinsplakate + Eventsichtbarkeit"}),a.jsx(ee,{children:"Website: Logo auf Startseite"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),a.jsx(mt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),a.jsx(zt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),a.jsx(ee,{children:"Website: Logo auf der Startseite"}),a.jsx(ee,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),a.jsx(ee,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Ow({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"BANDENWERBUNG"}),a.jsx(zt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),a.jsx(wt,{children:a.jsx(ee,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),a.jsxs(Ne,{children:[a.jsx("strong",{children:"Platzierung:"}),a.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",a.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",a.jsx("br",{}),a.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 800€ pro Saison"})]}),Z0&&a.jsx(eo,{src:Z0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Nw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:'WERBUNG IM „HEIMSPIEL"'}),a.jsx(zt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),a.jsxs(wt,{children:[a.jsx(ee,{children:"15 Ausgaben pro Saison"}),a.jsx(ee,{children:"ca. 100 Exemplare pro Heimspiel"}),a.jsx(ee,{children:"Digitale Version (Social Media & Webseite)"}),a.jsx(ee,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),a.jsx(ee,{children:"DIN A4 Stadionmagazin"}),a.jsx(ee,{children:"wird ausgelegt in diversen Arztpraxen"})]}),l&&a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(o=>a.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:o.size}),a.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),a.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:o.price})]},o.size))}),l&&a.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[a.jsx("strong",{children:"Maße"}),a.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",a.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",a.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Hw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"SPIELTAG-SPONSORING"}),a.jsx(zt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),a.jsx(mt,{children:"Ballspende"}),a.jsx(Ne,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),a.jsx(ee,{children:"Namensnennung in der Halbzeitpause"}),a.jsx(ee,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),a.jsx(ee,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",a.jsx("strong",{children:"500€"})," (statt 750€)"]}),a.jsx(mt,{children:"Spielpräsentator"}),a.jsx(Ne,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),a.jsx(ee,{children:"Namentliche Erwähnung im SC Magazin"}),a.jsx(ee,{children:"Social Media Erwähnung am Spieltag"})]}),a.jsxs(Wi,{$hidden:!l,children:["Beitrag: ",a.jsx("strong",{children:"ab 250€ pro Spiel"})]}),hd&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[a.jsx(eo,{src:hd,alt:"Action",style:{height:"48mm"}}),a.jsx(eo,{src:Cw||hd,alt:"Jubel",style:{height:"48mm"}})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Lw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"BUSWERBUNG"}),a.jsx(zt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),a.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),l&&a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),a.jsx("tbody",{children:[...Vx,...Yx].map((o,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.position}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.groesse}),l&&a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:o.preis})]},o.position))})]}),a.jsx(mt,{children:"Zusatzoptionen"}),a.jsx(wt,{children:qx.map((o,u)=>a.jsx(ee,{children:o},u))}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}function Uw({showPrices:l}){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{children:"PRÄMIEN-MODELL"}),a.jsx(zt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l&&a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),a.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),a.jsxs("tbody",{children:[Gx.map((o,u)=>a.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:o.label}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.starter}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.premium}),a.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:o.kombi})]},o.label)),a.jsxs("tr",{style:{background:"#f0f9ff"},children:[a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.starter}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.premium}),a.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Fa.kombi})]})]})]}),a.jsx(mt,{children:"So funktioniert's"}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),a.jsx(ee,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),a.jsx(ee,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),a.jsx(ee,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),a.jsx(mt,{children:"Inkludierte Leistungen"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx(Ne,{children:a.jsx("strong",{children:"Starter:"})}),a.jsxs(wt,{children:[a.jsx(ee,{children:"Stadionansage bei Erfolg"}),a.jsx(ee,{children:"Logo auf Website"})]})]}),a.jsxs("div",{children:[a.jsx(Ne,{children:a.jsx("strong",{children:"Premium:"})}),a.jsxs(wt,{children:[a.jsx(ee,{children:"+ Social Media Post bei Erfolg"}),a.jsx(ee,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),a.jsx(_i,{}),a.jsx(dn,{})]})]})}const $0=St("herren/herren_jubel_500club");function Gw(){return a.jsxs(_t,{children:[$0&&a.jsx("img",{src:$0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),a.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[a.jsx(zt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),a.jsxs(Ne,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[a.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),a.jsx(mt,{children:"Ihre Vorteile"}),a.jsxs(wt,{children:[a.jsxs(ee,{children:["Offizielle ",a.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),a.jsxs(ee,{children:["Veröffentlichung Ihres ",a.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),a.jsx(ee,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),a.jsx(mt,{children:"Zahlungsoptionen"}),a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),a.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),a.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(l=>a.jsxs("tr",{children:[a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:l.label}),a.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:l.betrag})]},l.label))})]}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),a.jsx(mt,{children:"Spendenkonto"}),a.jsxs(Ne,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[a.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),a.jsx("br",{}),"IBAN: ",a.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",a.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[a.jsxs(Ne,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",a.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),a.jsxs(Ne,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",a.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),a.jsx(dn,{})]})]})}function Vw(){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),a.jsxs(zt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Ut.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(ht,{children:[a.jsx(it,{children:"Vorname:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Nachname:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Firma (optional):"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Straße, Hausnummer:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[a.jsxs(ht,{children:[a.jsx(it,{children:"PLZ:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Ort:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[a.jsxs(ht,{children:[a.jsx(it,{children:"Geb.-Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Telefon:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"E-Mail:"}),a.jsx(Lt,{$lines:1})]})]}),a.jsx(mt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:a.jsxs(it,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),a.jsx(Ne,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),a.jsx(mt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:a.jsxs(it,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),a.jsxs(ht,{style:{marginTop:"2mm"},children:[a.jsx(it,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),a.jsx(Lt,{$lines:1})]}),a.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[a.jsxs(ht,{children:[a.jsx(it,{children:"Konstanz, den _______________"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),a.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Unterschrift:"}),a.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),a.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[a.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",a.jsx("br",{}),a.jsx("strong",{children:"Kontakt:"})," ",Ut.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),a.jsxs(Fd,{style:{marginTop:"auto"},children:[a.jsx(Qn,{children:a.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),a.jsx(Qn,{$center:!0,children:"500 €Club"}),a.jsx(Qn,{$right:!0,children:"partner.sckw.de"})]})]})]})}function Yw(){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),a.jsx(zt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(l=>a.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[a.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:l.n}),a.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:l.t}),a.jsx(Ne,{style:{margin:0,fontSize:"9pt"},children:l.d})]},l.n))}),a.jsx(mt,{children:"Kontakt"}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Ut.email})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),a.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),a.jsxs("div",{style:{gridColumn:"1 / -1"},children:[a.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),a.jsxs("div",{style:{fontSize:"11pt"},children:[Ut.adresse.name," · ",Ut.adresse.strasse," · ",Ut.adresse.plz," ",Ut.adresse.ort]})]})]}),a.jsx(mt,{children:"Gesprächsleitfaden"}),a.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[a.jsx(Ne,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),a.jsx(Ne,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),a.jsx(dn,{})]})]})}function qw(){return a.jsxs(_t,{children:[a.jsx(en,{}),a.jsxs(tn,{children:[a.jsx(nn,{children:a.jsx(an,{src:"/logo.svg"})}),a.jsx(ln,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),a.jsxs(zt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Ut.email," senden."]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[a.jsxs(ht,{children:[a.jsx(it,{children:"Datum:"}),a.jsx(Lt,{$lines:1})]}),a.jsxs(ht,{children:[a.jsx(it,{children:"Gesprächsführer (Helfer):"}),a.jsx(Lt,{$lines:1})]})]}),ES.map((l,o)=>a.jsxs(ht,{children:[a.jsxs(it,{children:[l.label,":"]}),a.jsx(Lt,{$lines:l.lines})]},o)),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(l=>a.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:a.jsxs(it,{style:{marginBottom:0},children:["☐ ",l]})},l))}),a.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:a.jsxs(Ne,{style:{margin:0,fontSize:"8pt"},children:[a.jsx("strong",{children:"Schnellreferenz:"})," ",Ut.email," · partner.sckw.de ·"," ",Ut.vollAdresse.replace(/\n/g," · ")]})}),a.jsxs(Fd,{style:{marginTop:"auto"},children:[a.jsx(Qn,{children:a.jsx("strong",{children:"Internes Dokument"})}),a.jsx(Qn,{$center:!0}),a.jsx(Qn,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Yn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>a.jsx(kw,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>a.jsx(Mw,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Rw,{showPrices:l})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Bw,{showPrices:l})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Dw,{showPrices:l})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Ow,{showPrices:l})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Nw,{showPrices:l})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Hw,{showPrices:l})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Lw,{showPrices:l})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:l=>a.jsx(Uw,{showPrices:l})},{id:"club500",label:"500 €Club",group:"community",render:()=>a.jsx(Gw,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>a.jsx(Vw,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>a.jsx(Yw,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>a.jsx(qw,{})}],Kw=f.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,Zw=f.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,$w=f.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,Qw=f.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,Xw=f.button`
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
`,Jw=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Zi=f.button`
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
`,Ww=f.button`
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
`,Fw=f.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Pw(){const l=zw(),[o]=Gp(),u=o.get("preset"),c=o.get("view"),h=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Yn.filter(E=>E.group==="broschüre").map(E=>E.id)),[m,p]=C.useState(!0),[v,y]=C.useState(h),[x,_]=C.useState(c==="preview"?"preview":"dashboard");if(!l)return a.jsx($s,{to:"/",replace:!0});const w=E=>{y(re=>{const he=new Set(re);return he.has(E)?he.delete(E):he.add(E),he})},O=()=>y(new Set(Yn.map(E=>E.id))),G=()=>y(new Set),q=()=>y(new Set(Yn.filter(E=>E.group==="broschüre").map(E=>E.id))),Y=()=>y(new Set(Yn.map(E=>E.id))),K=()=>y(new Set(["cover","why","spieltag","banden"])),Z=()=>y(new Set(["cover","why","haupt","co","silber"])),V=()=>y(new Set(["club500","club500form"])),L=Yn.filter(E=>v.has(E.id)),J=Yn.filter(E=>E.group==="broschüre"),P=Yn.filter(E=>E.group==="community"),X=Yn.filter(E=>E.group==="helfer");return x==="preview"?a.jsxs(a.Fragment,{children:[a.jsx(_w,{}),a.jsxs(V0,{children:[a.jsxs(Y0,{children:["Vorschau · ",L.length," Seiten"]}),a.jsxs(q0,{children:[a.jsx(Gs,{$active:m,onClick:()=>p(E=>!E),children:m?"Preise ✓":"Preise ✗"}),a.jsx(Gs,{onClick:()=>_("dashboard"),children:"Zurück"}),a.jsx(Gs,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),a.jsxs(Ew,{children:[a.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',a.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),a.jsx(Tw,{children:L.map(E=>a.jsx("div",{children:E.render(m)},E.id))})]}):a.jsxs(a.Fragment,{children:[a.jsxs(V0,{children:[a.jsx(Y0,{children:"Sponsoring-Kit · SCKW"}),a.jsx(q0,{children:a.jsx(Gs,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),a.jsxs(Kw,{children:[a.jsx(Zw,{children:"Sponsoring-Kit zusammenstellen"}),a.jsx($w,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),a.jsxs(Qw,{children:[a.jsx(Xw,{$on:m,onClick:()=>p(E=>!E),children:m?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),a.jsxs(Fw,{children:[v.size," von ",Yn.length," Seiten ausgewählt"]})]}),a.jsxs(Jw,{children:[a.jsx(Zi,{onClick:O,children:"Alles"}),a.jsx(Zi,{onClick:q,children:"Broschüre komplett"}),a.jsx(Zi,{onClick:Y,children:"Komplett-Kit (+ Helfer)"}),a.jsx(Zi,{onClick:Z,children:"Nur Premium-Pakete"}),a.jsx(Zi,{onClick:K,children:"Starter-Paket"}),a.jsx(Zi,{onClick:V,children:"500 €Club"}),a.jsx(Zi,{onClick:G,children:"Keine"})]}),a.jsx(md,{children:"Broschüre"}),a.jsx(gd,{children:J.map(E=>a.jsxs(pd,{$checked:v.has(E.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(E.id),onChange:()=>w(E.id)}),E.label]},E.id))}),a.jsx(md,{children:"Community / 500 €Club"}),a.jsx(gd,{children:P.map(E=>a.jsxs(pd,{$checked:v.has(E.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(E.id),onChange:()=>w(E.id)}),E.label]},E.id))}),a.jsx(md,{children:"Helfer-Anhang"}),a.jsx(gd,{children:X.map(E=>a.jsxs(pd,{$checked:v.has(E.id),children:[a.jsx("input",{type:"checkbox",checked:v.has(E.id),onChange:()=>w(E.id)}),E.label]},E.id))}),a.jsxs(Ww,{disabled:v.size===0,onClick:()=>_("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}const Iw=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],ez=f.section`
  background: url("${Jd("herren",1)}") center/cover;
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
`,tz=f.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,nz=f.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,iz=f.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,az=f.main`
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
`,lz=f.section`
  margin-bottom: 4rem;
`,rz=f.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,sz=f.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,oz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,cz=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,uz=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,dz=f.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,fz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,hz=f.div`
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
`,mz=f.div`
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
`,gz=f.div`
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
`,pz=f.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,xz=f.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,bz=f.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,yz=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,vz=f.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,jz=f.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Sz=f.button`
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
`,wz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,zz=f.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,_z=f.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Ez=f.div`
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
`,Q0=f.div`
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
`,Ue=f.li`
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
`,Tz=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Az=f.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,Cz=f.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,kz=f.div`
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
`,Mz=f.a`
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
`,Rz=f.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Bz=f.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,Dz=f.ul`
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
`,Za=f.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function Oz(){return a.jsxs(a.Fragment,{children:[a.jsx(ez,{children:a.jsxs(tz,{children:[a.jsx(nz,{children:"SCKW Jobbörse"}),a.jsx(iz,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),a.jsxs(az,{children:[a.jsxs(lz,{children:[a.jsx(rz,{children:"Willkommen bei der SCKW Jobbörse"}),a.jsx(sz,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),a.jsxs(oz,{children:[a.jsxs(cz,{children:[a.jsx(uz,{children:"So könnte es aussehen"}),a.jsx(dz,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),a.jsx(fz,{children:Iw.map(l=>a.jsxs(hz,{children:[l.isExample&&a.jsx(mz,{children:"MUSTER"}),a.jsx(gz,{children:a.jsx(pz,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:o=>{o.currentTarget.style.display="none",o.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",o.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),a.jsx(xz,{children:l.title}),a.jsx(bz,{children:l.company}),a.jsx(yz,{children:l.tags.map((o,u)=>a.jsx(vz,{children:o},u))}),a.jsx(jz,{children:l.description}),a.jsx(Sz,{children:"Mehr erfahren"})]},l.id))})]}),a.jsxs(wz,{children:[a.jsx(zz,{children:"Preise für Stellenausschreibungen"}),a.jsx(_z,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),a.jsxs(Ez,{children:[a.jsxs(Ha,{children:[a.jsx(La,{children:"Basis"}),a.jsx(Ua,{children:"149 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"30 Tage auf Website (Jobbereich)"}),a.jsx(Ue,{children:"Firmenlogo und Link"}),a.jsx(Ue,{children:"Detaillierte Stellenbeschreibung"}),a.jsx(Ue,{children:"Bewerbermanagement"})]}),a.jsx(Ya,{className:"secondary",children:"Basis wählen"})]}),a.jsxs(Ha,{className:"popular",children:[a.jsx(Q0,{children:"BELIEBT"}),a.jsx(La,{children:"Standard"}),a.jsx(Ua,{children:"229 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"Alle Basis-Features"}),a.jsx(Ue,{children:"1 Social Media Post"}),a.jsx(Ue,{children:"Instagram + Facebook Reichweite"}),a.jsx(Ue,{children:"Newsletter-Erwähnung"})]}),a.jsx(Ya,{children:"Standard wählen"})]}),a.jsxs(Ha,{children:[a.jsx(La,{children:"Boosted"}),a.jsx(Ua,{children:"349 €"}),a.jsx(Ga,{children:"netto / Anzeige"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"Alle Standard-Features"}),a.jsx(Ue,{children:"Instagram Story"}),a.jsx(Ue,{children:"Stadionmagazin-Erwähnung"}),a.jsx(Ue,{children:"Prioritäre Platzierung"})]}),a.jsx(Ya,{className:"secondary",children:"Boosted wählen"})]})]}),a.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),a.jsxs(Tz,{children:[a.jsxs(Ha,{children:[a.jsx(La,{children:"Job Flat SMALL"}),a.jsx(Ua,{children:"799 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"Bis zu 6 Anzeigen im Jahr"}),a.jsx(Ue,{children:"6 Social Media Posts"}),a.jsx(Ue,{children:"Website-Präsenz"}),a.jsx(Ue,{children:"Newsletter-Integration"})]}),a.jsx(Ya,{className:"secondary",children:"Small Flat"})]}),a.jsxs(Ha,{className:"popular",children:[a.jsx(Q0,{children:"EMPFOHLEN"}),a.jsx(La,{children:"Job Flat MEDIUM"}),a.jsx(Ua,{children:"1.199 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"Bis zu 12 Anzeigen im Jahr"}),a.jsx(Ue,{children:"Stadionmagazin-Präsenz"}),a.jsx(Ue,{children:"Social Media Posts"}),a.jsx(Ue,{children:"Stories & Highlights"})]}),a.jsx(Ya,{children:"Medium Flat"})]}),a.jsxs(Ha,{children:[a.jsx(La,{children:"Job Flat PARTNER"}),a.jsx(Ua,{children:"1.499 €"}),a.jsx(Ga,{children:"netto / Jahr"}),a.jsxs(Va,{children:[a.jsx(Ue,{children:"Unbegrenzte Anzeigen"}),a.jsx(Ue,{children:"Erwähnung bei Heimspielen"}),a.jsx(Ue,{children:'"Top Partner" Sichtbarkeit'}),a.jsx(Ue,{children:"Prioritärer Support"})]}),a.jsx(Ya,{className:"secondary",children:"Partner Flat"})]})]}),a.jsxs(Az,{children:[a.jsx(Cz,{children:"➕ Zusatzoptionen"}),a.jsxs(kz,{children:[a.jsxs(xd,{children:[a.jsx(bd,{children:"Social Story"}),a.jsx(yd,{children:"39 €"}),a.jsx(vd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),a.jsxs(xd,{children:[a.jsx(bd,{children:"Designservice"}),a.jsx(yd,{children:"59 €"}),a.jsx(vd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),a.jsxs(xd,{children:[a.jsx(bd,{children:"Stadionmagazin"}),a.jsx(yd,{children:"99 €"}),a.jsx(vd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),a.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:a.jsx(Mz,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),a.jsxs(Rz,{children:[a.jsx(Bz,{children:"🎯 Warum SCKW Jobbörse?"}),a.jsxs(Dz,{children:[a.jsxs(qa,{children:[a.jsx(Ka,{children:"🏠"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"👥"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"💰"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"📈"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"⚡"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),a.jsxs(qa,{children:[a.jsx(Ka,{children:"🤲"}),a.jsxs(Za,{children:[a.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),a.jsx(Xd,{})]})}f.div`
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
  background: url("${Jd("herren",18)}") center/cover;
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
`;Lx();const nr=[{id:"vereinsbus",label:"Vereinsbus",image:"/vereinsbus-voll.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],Nz=f.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,Hz=f.div`
  max-width: 1200px;
  margin: 0 auto;
`,Lz=f.div`
  text-align: center;
  margin-bottom: 2rem;
`,Uz=f.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Gz=f.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,Vz=f.select`
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
`,Yz=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,qz=f.div`
  flex: 1;
  min-width: 0;
`,Kz=f.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
  cursor: grab;
  &:active { cursor: grabbing; }
`,Zz=f.div`
  position: relative;
  transform-origin: 0 0;
`,$z=f.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Qz=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.75rem;
`,jd=f.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a365d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  &:hover { background: #f3f4f6; }
`,Xz=f.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  min-width: 48px;
  text-align: center;
`,Jz=f.div`
  position: absolute;
  border: 2px dashed
    ${l=>l.$active?"#3b82f6":l.$hasLogo?"rgba(59,130,246,0.5)":"rgba(255,255,255,0.6)"};
  background: ${l=>l.$active?"rgba(59,130,246,0.15)":l.$hasLogo?"transparent":"rgba(255,255,255,0.05)"};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-color: #3b82f6;
    background: ${l=>l.$hasLogo?"rgba(59,130,246,0.08)":"rgba(59,130,246,0.12)"};
  }
`,Wz=f.span`
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
`,Fz=f.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4%;
`,Pz=f.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Iz=f.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,e6=f.div`
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
`,t6=f.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,n6=f.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,i6=f.label`
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
`,a6=f.button`
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
`,l6=f.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,r6=f.input`
  display: none;
`,s6=f.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,o6=f.button`
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
`,X0=1,J0=4,W0=.25;function c6(){const[l,o]=C.useState(nr[0].id),[u,c]=C.useState(null),[h,m]=C.useState([]),p=C.useRef({}),[v,y]=C.useState(1),[x,_]=C.useState({x:0,y:0}),w=C.useRef(!1),O=C.useRef({x:0,y:0}),G=C.useRef({x:0,y:0}),q=C.useRef(null),Y=nr.find(U=>U.id===l)??nr[0],K=C.useCallback((U,ne,te)=>{if(te<=1)return{x:0,y:0};const He=q.current;if(!He)return{x:U,y:ne};const Fe=He.clientWidth,et=He.clientHeight,R=(Fe*te-Fe)/te,$=(et*te-et)/te;return{x:Math.max(-R,Math.min(0,U)),y:Math.max(-$,Math.min(0,ne))}},[]),Z=C.useCallback(U=>{U.preventDefault(),y(ne=>{const te=Math.max(X0,Math.min(J0,ne-U.deltaY*.002));return _(He=>K(He.x,He.y,te)),te})},[K]),V=C.useCallback(U=>{U.button!==0||U.target.closest("[data-zone]")||(w.current=!0,O.current={x:U.clientX,y:U.clientY},G.current={...x},U.currentTarget.setPointerCapture(U.pointerId))},[x]),L=C.useCallback(U=>{if(!w.current)return;const ne=(U.clientX-O.current.x)/v,te=(U.clientY-O.current.y)/v;_(K(G.current.x+ne,G.current.y+te,v))},[v,K]),J=C.useCallback(()=>{w.current=!1},[]);C.useEffect(()=>{const U=q.current;if(!U)return;const ne=te=>te.preventDefault();return U.addEventListener("wheel",ne,{passive:!1}),()=>U.removeEventListener("wheel",ne)},[]);const P=U=>h.find(ne=>ne.zoneId===U)?.dataUrl,X=C.useCallback((U,ne)=>{if(!ne)return;const te=new FileReader;te.onload=He=>{const Fe=He.target?.result;m(et=>[...et.filter(R=>R.zoneId!==U),{zoneId:U,dataUrl:Fe}])},te.readAsDataURL(ne)},[]),E=C.useCallback(U=>{m(ne=>ne.filter(te=>te.zoneId!==U))},[]),re=C.useCallback(()=>{m([]),c(null),y(1),_({x:0,y:0})},[]),he=U=>{c(U.id),P(U.id)||p.current[U.id]?.click()};return a.jsx(Nz,{children:a.jsxs(Hz,{children:[a.jsxs(Lz,{children:[a.jsx(Uz,{children:"Mockup Generator"}),a.jsx(Gz,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),nr.length>1&&a.jsx(Vz,{value:l,onChange:U=>{o(U.target.value),m([]),c(null)},children:nr.map(U=>a.jsx("option",{value:U.id,children:U.label},U.id))}),a.jsxs(Yz,{children:[a.jsxs(qz,{children:[a.jsx(Kz,{ref:q,onWheel:Z,onPointerDown:V,onPointerMove:L,onPointerUp:J,onPointerLeave:J,children:a.jsxs(Zz,{style:{transform:`scale(${v}) translate(${x.x}px, ${x.y}px)`},children:[a.jsx($z,{src:Y.image,alt:Y.label,draggable:!1}),Y.zones.map(U=>{const ne=P(U.id);return a.jsx(Jz,{"data-zone":"true",$active:u===U.id,$hasLogo:!!ne,style:{left:`${U.x}%`,top:`${U.y}%`,width:`${U.width}%`,height:`${U.height}%`},onClick:()=>he(U),onDragOver:te=>{te.preventDefault(),c(U.id)},onDrop:te=>{te.preventDefault();const He=te.dataTransfer.files?.[0];X(U.id,He)},children:ne?a.jsx(Fz,{src:ne,alt:"Logo",draggable:!1}):a.jsx(Wz,{children:U.label})},U.id)})]})}),a.jsxs(Qz,{children:[a.jsx(jd,{onClick:()=>{y(U=>{const ne=Math.max(X0,U-W0);return _(te=>K(te.x,te.y,ne)),ne})},children:"-"}),a.jsxs(Xz,{children:[Math.round(v*100),"%"]}),a.jsx(jd,{onClick:()=>{y(U=>Math.min(J0,U+W0))},children:"+"}),v!==1&&a.jsx(jd,{onClick:()=>{y(1),_({x:0,y:0})},style:{fontSize:"0.75rem",width:"auto",padding:"0 8px"},children:"Reset"})]})]}),a.jsxs(Pz,{children:[a.jsx(Iz,{children:"Werbeflächen"}),Y.zones.map(U=>{const ne=P(U.id);return a.jsxs(e6,{$active:u===U.id,onClick:()=>c(U.id),children:[a.jsx(t6,{children:U.label}),a.jsxs(n6,{children:[a.jsx(i6,{htmlFor:`file-${U.id}`,children:ne?"Ändern":"Logo hochladen"}),a.jsx(r6,{id:`file-${U.id}`,ref:te=>{p.current[U.id]=te},type:"file",accept:"image/*",onChange:te=>X(U.id,te.target.files?.[0])}),ne&&a.jsx(a6,{onClick:te=>{te.stopPropagation(),E(U.id)},children:"Entfernen"}),ne&&a.jsx(l6,{src:ne,alt:"Vorschau"})]}),!ne&&a.jsx(s6,{children:"Klicken oder Bild hierher ziehen"})]},U.id)}),h.length>0&&a.jsx(o6,{onClick:re,children:"Alle Logos entfernen"})]})]})]})})}const u6=!1;function d6(){return a.jsx(J5,{children:a.jsxs(z5,{children:[a.jsx(qn,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx($s,{to:"/sponsoring",replace:!0})]})}),a.jsx(qn,{path:"/sponsoring",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(ww,{})]})}),a.jsx(qn,{path:"/sponsoring-v2",element:a.jsx($s,{to:"/sponsoring",replace:!0})}),a.jsx(qn,{path:"/sponsoring-v1",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(wS,{})]})}),a.jsx(qn,{path:"/sponsoring-handoff",element:a.jsx(Pw,{})}),a.jsx(qn,{path:"/mockup-generator",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(c6,{})]})}),a.jsx(qn,{path:"/jobs",element:a.jsxs(a.Fragment,{children:[a.jsx(er,{}),a.jsx(Oz,{})]})}),u6,a.jsx(qn,{path:"*",element:a.jsx($s,{to:"/sponsoring",replace:!0})})]})})}const f6={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");zy.createRoot(document.getElementById("root")).render(a.jsx(C.StrictMode,{children:a.jsx(zv,{theme:f6,children:a.jsx(d6,{})})}));
