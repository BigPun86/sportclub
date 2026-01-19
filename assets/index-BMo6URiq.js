(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function mx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ec={exports:{}},Ai={};var h0;function gx(){if(h0)return Ai;h0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:u,key:p,ref:d!==void 0?d:null,props:g}}return Ai.Fragment=s,Ai.jsx=c,Ai.jsxs=c,Ai}var m0;function px(){return m0||(m0=1,ec.exports=gx()),ec.exports}var o=px(),tc={exports:{}},ae={};var g0;function bx(){if(g0)return ae;g0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),U=Symbol.iterator;function L(S){return S===null||typeof S!="object"?null:(S=U&&S[U]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function K(S,O,Q){this.props=S,this.context=O,this.refs=X,this.updater=Q||q}K.prototype.isReactComponent={},K.prototype.setState=function(S,O){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,O,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function G(){}G.prototype=K.prototype;function H(S,O,Q){this.props=S,this.context=O,this.refs=X,this.updater=Q||q}var F=H.prototype=new G;F.constructor=H,Y(F,K.prototype),F.isPureReactComponent=!0;var P=Array.isArray;function J(){}var N={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function be(S,O,Q){var Z=Q.ref;return{$$typeof:l,type:S,key:O,ref:Z!==void 0?Z:null,props:Q}}function ue(S,O){return be(S.type,O,S.props)}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Me(S){var O={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return O[Q]})}var mt=/\/+/g;function rt(S,O){return typeof S=="object"&&S!==null&&S.key!=null?Me(""+S.key):O.toString(36)}function gt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(J,J):(S.status="pending",S.then(function(O){S.status==="pending"&&(S.status="fulfilled",S.value=O)},function(O){S.status==="pending"&&(S.status="rejected",S.reason=O)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function B(S,O,Q,Z,ne){var re=typeof S;(re==="undefined"||re==="boolean")&&(S=null);var pe=!1;if(S===null)pe=!0;else switch(re){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(S.$$typeof){case l:case s:pe=!0;break;case T:return pe=S._init,B(pe(S._payload),O,Q,Z,ne)}}if(pe)return ne=ne(S),pe=Z===""?"."+rt(S,0):Z,P(ne)?(Q="",pe!=null&&(Q=pe.replace(mt,"$&/")+"/"),B(ne,O,Q,"",function(Jt){return Jt})):ne!=null&&(Ue(ne)&&(ne=ue(ne,Q+(ne.key==null||S&&S.key===ne.key?"":(""+ne.key).replace(mt,"$&/")+"/")+pe)),O.push(ne)),1;pe=0;var qe=Z===""?".":Z+":";if(P(S))for(var _e=0;_e<S.length;_e++)Z=S[_e],re=qe+rt(Z,_e),pe+=B(Z,O,Q,re,ne);else if(_e=L(S),typeof _e=="function")for(S=_e.call(S),_e=0;!(Z=S.next()).done;)Z=Z.value,re=qe+rt(Z,_e++),pe+=B(Z,O,Q,re,ne);else if(re==="object"){if(typeof S.then=="function")return B(gt(S),O,Q,Z,ne);throw O=String(S),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return pe}function V(S,O,Q){if(S==null)return S;var Z=[],ne=0;return B(S,Z,"","",function(re){return O.call(Q,re,ne++)}),Z}function ee(S){if(S._status===-1){var O=S._result;O=O(),O.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=O)}if(S._status===1)return S._result.default;throw S._result}var ce=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},xe={map:V,forEach:function(S,O,Q){V(S,function(){O.apply(this,arguments)},Q)},count:function(S){var O=0;return V(S,function(){O++}),O},toArray:function(S){return V(S,function(O){return O})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ae.Activity=w,ae.Children=xe,ae.Component=K,ae.Fragment=c,ae.Profiler=d,ae.PureComponent=H,ae.StrictMode=u,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ae.__COMPILER_RUNTIME={__proto__:null,c:function(S){return N.H.useMemoCache(S)}},ae.cache=function(S){return function(){return S.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(S,O,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Z=Y({},S.props),ne=S.key;if(O!=null)for(re in O.key!==void 0&&(ne=""+O.key),O)!ie.call(O,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&O.ref===void 0||(Z[re]=O[re]);var re=arguments.length-2;if(re===1)Z.children=Q;else if(1<re){for(var pe=Array(re),qe=0;qe<re;qe++)pe[qe]=arguments[qe+2];Z.children=pe}return be(S.type,ne,Z)},ae.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:g,_context:S},S},ae.createElement=function(S,O,Q){var Z,ne={},re=null;if(O!=null)for(Z in O.key!==void 0&&(re=""+O.key),O)ie.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ne[Z]=O[Z]);var pe=arguments.length-2;if(pe===1)ne.children=Q;else if(1<pe){for(var qe=Array(pe),_e=0;_e<pe;_e++)qe[_e]=arguments[_e+2];ne.children=qe}if(S&&S.defaultProps)for(Z in pe=S.defaultProps,pe)ne[Z]===void 0&&(ne[Z]=pe[Z]);return be(S,re,ne)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:j,render:S}},ae.isValidElement=Ue,ae.lazy=function(S){return{$$typeof:T,_payload:{_status:-1,_result:S},_init:ee}},ae.memo=function(S,O){return{$$typeof:x,type:S,compare:O===void 0?null:O}},ae.startTransition=function(S){var O=N.T,Q={};N.T=Q;try{var Z=S(),ne=N.S;ne!==null&&ne(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(J,ce)}catch(re){ce(re)}finally{O!==null&&Q.types!==null&&(O.types=Q.types),N.T=O}},ae.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ae.use=function(S){return N.H.use(S)},ae.useActionState=function(S,O,Q){return N.H.useActionState(S,O,Q)},ae.useCallback=function(S,O){return N.H.useCallback(S,O)},ae.useContext=function(S){return N.H.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S,O){return N.H.useDeferredValue(S,O)},ae.useEffect=function(S,O){return N.H.useEffect(S,O)},ae.useEffectEvent=function(S){return N.H.useEffectEvent(S)},ae.useId=function(){return N.H.useId()},ae.useImperativeHandle=function(S,O,Q){return N.H.useImperativeHandle(S,O,Q)},ae.useInsertionEffect=function(S,O){return N.H.useInsertionEffect(S,O)},ae.useLayoutEffect=function(S,O){return N.H.useLayoutEffect(S,O)},ae.useMemo=function(S,O){return N.H.useMemo(S,O)},ae.useOptimistic=function(S,O){return N.H.useOptimistic(S,O)},ae.useReducer=function(S,O,Q){return N.H.useReducer(S,O,Q)},ae.useRef=function(S){return N.H.useRef(S)},ae.useState=function(S){return N.H.useState(S)},ae.useSyncExternalStore=function(S,O,Q){return N.H.useSyncExternalStore(S,O,Q)},ae.useTransition=function(){return N.H.useTransition()},ae.version="19.2.3",ae}var p0;function Fc(){return p0||(p0=1,tc.exports=bx()),tc.exports}var M=Fc();const At=mx(M);var nc={exports:{}},Ci={},ac={exports:{}},lc={};var b0;function xx(){return b0||(b0=1,(function(l){function s(B,V){var ee=B.length;B.push(V);e:for(;0<ee;){var ce=ee-1>>>1,xe=B[ce];if(0<d(xe,V))B[ce]=V,B[ee]=xe,ee=ce;else break e}}function c(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var V=B[0],ee=B.pop();if(ee!==V){B[0]=ee;e:for(var ce=0,xe=B.length,S=xe>>>1;ce<S;){var O=2*(ce+1)-1,Q=B[O],Z=O+1,ne=B[Z];if(0>d(Q,ee))Z<xe&&0>d(ne,Q)?(B[ce]=ne,B[Z]=ee,ce=Z):(B[ce]=Q,B[O]=ee,ce=O);else if(Z<xe&&0>d(ne,ee))B[ce]=ne,B[Z]=ee,ce=Z;else break e}}return V}function d(B,V){var ee=B.sortIndex-V.sortIndex;return ee!==0?ee:B.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var p=Date,j=p.now();l.unstable_now=function(){return p.now()-j}}var y=[],x=[],T=1,w=null,U=3,L=!1,q=!1,Y=!1,X=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var V=c(x);V!==null;){if(V.callback===null)u(x);else if(V.startTime<=B)u(x),V.sortIndex=V.expirationTime,s(y,V);else break;V=c(x)}}function P(B){if(Y=!1,F(B),!q)if(c(y)!==null)q=!0,J||(J=!0,Me());else{var V=c(x);V!==null&&gt(P,V.startTime-B)}}var J=!1,N=-1,ie=5,be=-1;function ue(){return X?!0:!(l.unstable_now()-be<ie)}function Ue(){if(X=!1,J){var B=l.unstable_now();be=B;var V=!0;try{e:{q=!1,Y&&(Y=!1,G(N),N=-1),L=!0;var ee=U;try{t:{for(F(B),w=c(y);w!==null&&!(w.expirationTime>B&&ue());){var ce=w.callback;if(typeof ce=="function"){w.callback=null,U=w.priorityLevel;var xe=ce(w.expirationTime<=B);if(B=l.unstable_now(),typeof xe=="function"){w.callback=xe,F(B),V=!0;break t}w===c(y)&&u(y),F(B)}else u(y);w=c(y)}if(w!==null)V=!0;else{var S=c(x);S!==null&&gt(P,S.startTime-B),V=!1}}break e}finally{w=null,U=ee,L=!1}V=void 0}}finally{V?Me():J=!1}}}var Me;if(typeof H=="function")Me=function(){H(Ue)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,rt=mt.port2;mt.port1.onmessage=Ue,Me=function(){rt.postMessage(null)}}else Me=function(){K(Ue,0)};function gt(B,V){N=K(function(){B(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(B){switch(U){case 1:case 2:case 3:var V=3;break;default:V=U}var ee=U;U=V;try{return B()}finally{U=ee}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=U;U=B;try{return V()}finally{U=ee}},l.unstable_scheduleCallback=function(B,V,ee){var ce=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ee+xe,B={id:T++,callback:V,priorityLevel:B,startTime:ee,expirationTime:xe,sortIndex:-1},ee>ce?(B.sortIndex=ee,s(x,B),c(y)===null&&B===c(x)&&(Y?(G(N),N=-1):Y=!0,gt(P,ee-ce))):(B.sortIndex=xe,s(y,B),q||L||(q=!0,J||(J=!0,Me()))),B},l.unstable_shouldYield=ue,l.unstable_wrapCallback=function(B){var V=U;return function(){var ee=U;U=V;try{return B.apply(this,arguments)}finally{U=ee}}}})(lc)),lc}var x0;function yx(){return x0||(x0=1,ac.exports=xx()),ac.exports}var ic={exports:{}},at={};var y0;function vx(){if(y0)return at;y0=1;var l=Fc();function s(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)x+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(y,x,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:y,containerInfo:x,implementation:T}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(y,x){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return g(y,x,null,T)},at.flushSync=function(y){var x=p.T,T=u.p;try{if(p.T=null,u.p=2,y)return y()}finally{p.T=x,u.p=T,u.d.f()}},at.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(y,x))},at.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},at.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var T=x.as,w=j(T,x.crossOrigin),U=typeof x.integrity=="string"?x.integrity:void 0,L=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;T==="style"?u.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:U,fetchPriority:L}):T==="script"&&u.d.X(y,{crossOrigin:w,integrity:U,fetchPriority:L,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},at.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var T=j(x.as,x.crossOrigin);u.d.M(y,{crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(y)},at.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var T=x.as,w=j(T,x.crossOrigin);u.d.L(y,T,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},at.preloadModule=function(y,x){if(typeof y=="string")if(x){var T=j(x.as,x.crossOrigin);u.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(y)},at.requestFormReset=function(y){u.d.r(y)},at.unstable_batchedUpdates=function(y,x){return y(x)},at.useFormState=function(y,x,T){return p.H.useFormState(y,x,T)},at.useFormStatus=function(){return p.H.useHostTransitionStatus()},at.version="19.2.3",at}var v0;function Sx(){if(v0)return ic.exports;v0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),ic.exports=vx(),ic.exports}var S0;function jx(){if(S0)return Ci;S0=1;var l=yx(),s=Fc(),c=Sx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(g(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return y(i),e;if(r===a)return y(i),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,m=i.child;m;){if(m===n){f=!0,n=i,a=r;break}if(m===a){f=!0,a=i,n=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===n){f=!0,n=r,a=i;break}if(m===a){f=!0,a=r,n=i;break}m=m.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),H=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case K:return"Profiler";case X:return"StrictMode";case P:return"Suspense";case J:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case H:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var gt=Array.isArray,B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ce=[],xe=-1;function S(e){return{current:e}}function O(e){0>xe||(e.current=ce[xe],ce[xe]=null,xe--)}function Q(e,t){xe++,ce[xe]=e.current,e.current=t}var Z=S(null),ne=S(null),re=S(null),pe=S(null);function qe(e,t){switch(Q(re,t),Q(ne,e),Q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nm(t),e=Um(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Z),Q(Z,e)}function _e(){O(Z),O(ne),O(re)}function Jt(e){e.memoizedState!==null&&Q(pe,e);var t=Z.current,n=Um(t,e.type);t!==n&&(Q(ne,e),Q(Z,n))}function $t(e){ne.current===e&&(O(Z),O(ne)),pe.current===e&&(O(pe),wi._currentValue=ee)}var pt,Ca;function Mt(e){if(pt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pt=t&&t[1]||"",Ca=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+e+Ca}var Wt=!1;function Ho(e,t){if(!e||Wt)return"";Wt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(C){var A=C}Reflect.construct(e,[],k)}else{try{k.call()}catch(C){A=C}e.call(k.prototype)}}else{try{throw Error()}catch(C){A=C}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var b=f.split(`
`),E=m.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===E.length)for(a=b.length-1,i=E.length-1;1<=a&&0<=i&&b[a]!==E[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==E[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==E[i]){var R=`
`+b[a].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=a&&0<=i);break}}}finally{Wt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Mt(n):""}function Kp(e,t){switch(e.tag){case 26:case 27:case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return e.child!==t&&t!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return Ho(e.type,!1);case 11:return Ho(e.type.render,!1);case 1:return Ho(e.type,!0);case 31:return Mt("Activity");default:return""}}function hf(e){try{var t="",n=null;do t+=Kp(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Lo=Object.prototype.hasOwnProperty,Go=l.unstable_scheduleCallback,Yo=l.unstable_cancelCallback,Xp=l.unstable_shouldYield,Zp=l.unstable_requestPaint,bt=l.unstable_now,Jp=l.unstable_getCurrentPriorityLevel,mf=l.unstable_ImmediatePriority,gf=l.unstable_UserBlockingPriority,Yi=l.unstable_NormalPriority,$p=l.unstable_LowPriority,pf=l.unstable_IdlePriority,Wp=l.log,Fp=l.unstable_setDisableYieldValue,Nl=null,xt=null;function An(e){if(typeof Wp=="function"&&Fp(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(Nl,e)}catch{}}var yt=Math.clz32?Math.clz32:e1,Pp=Math.log,Ip=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-(Pp(e)/Ip|0)|0}var qi=256,Vi=262144,Qi=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~r,a!==0?i=la(a):(f&=m,f!==0?i=la(f):n||(n=m&~e,n!==0&&(i=la(n))))):(m=a&~r,m!==0?i=la(m):f!==0?i=la(f):n||(n=a&~e,n!==0&&(i=la(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function Ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function t1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(){var e=Qi;return Qi<<=1,(Qi&62914560)===0&&(Qi=4194304),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function n1(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,E=e.hiddenUpdates;for(n=f&~n;0<n;){var R=31-yt(n),k=1<<R;m[R]=0,b[R]=-1;var A=E[R];if(A!==null)for(E[R]=null,R=0;R<A.length;R++){var C=A[R];C!==null&&(C.lane&=-536870913)}n&=~k}a!==0&&xf(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function xf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-yt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function yf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function vf(e,t){var n=t&-t;return n=(n&42)!==0?1:Vo(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sf(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:r0(e.type))}function jf(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Cn=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Cn,ot="__reactProps$"+Cn,Ma="__reactContainer$"+Cn,Ko="__reactEvents$"+Cn,a1="__reactListeners$"+Cn,l1="__reactHandles$"+Cn,zf="__reactResources$"+Cn,Ll="__reactMarker$"+Cn;function Xo(e){delete e[Pe],delete e[ot],delete e[Ko],delete e[a1],delete e[l1]}function Ra(e){var t=e[Pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ma]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qm(e);e!==null;){if(n=e[Pe])return n;e=Qm(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){if(e=e[Pe]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oa(e){var t=e[zf];return t||(t=e[zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Ll]=!0}var wf=new Set,_f={};function ia(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(_f[e]=t,e=0;e<t.length;e++)wf.add(t[e])}var i1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ef={},Tf={};function r1(e){return Lo.call(Tf,e)?!0:Lo.call(Ef,e)?!1:i1.test(e)?Tf[e]=!0:(Ef[e]=!0,!1)}function Xi(e,t,n){if(r1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Zi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o1(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){if(!e._valueTracker){var t=Af(e)?"checked":"value";e._valueTracker=o1(e,t,""+e[t])}}function Cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Af(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var s1=/[\n"\\]/g;function Bt(e){return e.replace(s1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jo(e,t,n,a,i,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?$o(e,f,Rt(t)):n!=null?$o(e,f,Rt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Rt(m):e.removeAttribute("name")}function Mf(e,t,n,a,i,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Zo(e);return}n=n!=null?""+Rt(n):"",t=t!=null?""+Rt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Zo(e)}function $o(e,t,n){t==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ka(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rf(e,t,n){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rt(n):""}function Bf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(gt(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Rt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Zo(e)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var u1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Of(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||u1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Df(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Of(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Of(e,r,t[r])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return f1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ln(){}var Fo=null;function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Ha=null;function kf(e){var t=Ba(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[ot]||null;if(!i)throw Error(u(90));Jo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Cf(a)}break e;case"textarea":Rf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ka(e,!!n.multiple,t,!1)}}}var Io=!1;function Nf(e,t,n){if(Io)return e(t,n);Io=!0;try{var a=e(t);return a}finally{if(Io=!1,(Ua!==null||Ha!==null)&&(Nr(),Ua&&(t=Ua,e=Ha,Ha=Ua=null,kf(t),e)))for(t=0;t<e.length;t++)kf(e[t])}}function Yl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ot]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=!1;if(rn)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){es=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{es=!1}var Mn=null,ts=null,Wi=null;function Uf(){if(Wi)return Wi;var e,t=ts,n=t.length,a,i="value"in Mn?Mn.value:Mn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Wi=i.slice(e,1<a?1-a:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Hf(){return!1}function st(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pi:Hf,this.isPropagationStopped=Hf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=st(ra),Vl=w({},ra,{view:0,detail:0}),d1=st(Vl),ns,as,Ql,er=w({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ql&&(Ql&&e.type==="mousemove"?(ns=e.screenX-Ql.screenX,as=e.screenY-Ql.screenY):as=ns=0,Ql=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Lf=st(er),h1=w({},er,{dataTransfer:0}),m1=st(h1),g1=w({},Vl,{relatedTarget:0}),ls=st(g1),p1=w({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=st(p1),x1=w({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y1=st(x1),v1=w({},ra,{data:0}),Gf=st(v1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z1[e])?!!t[e]:!1}function is(){return w1}var _1=w({},Vl,{key:function(e){if(e.key){var t=S1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=st(_1),T1=w({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=st(T1),A1=w({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),C1=st(A1),M1=w({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=st(M1),B1=w({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=st(B1),D1=w({},ra,{newState:0,oldState:0}),k1=st(D1),N1=[9,13,27,32],rs=rn&&"CompositionEvent"in window,Kl=null;rn&&"documentMode"in document&&(Kl=document.documentMode);var U1=rn&&"TextEvent"in window&&!Kl,qf=rn&&(!rs||Kl&&8<Kl&&11>=Kl),Vf=" ",Qf=!1;function Kf(e,t){switch(e){case"keyup":return N1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var La=!1;function H1(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Qf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Qf?null:e;default:return null}}function L1(e,t){if(La)return e==="compositionend"||!rs&&Kf(e,t)?(e=Uf(),Wi=ts=Mn=null,La=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var G1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G1[e.type]:t==="textarea"}function Jf(e,t,n,a){Ua?Ha?Ha.push(a):Ha=[a]:Ua=a,t=Vr(t,"onChange"),0<t.length&&(n=new Ii("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Xl=null,Zl=null;function Y1(e){Mm(e,0)}function tr(e){var t=Gl(e);if(Cf(t))return e}function $f(e,t){if(e==="change")return t}var Wf=!1;if(rn){var os;if(rn){var ss="oninput"in document;if(!ss){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),ss=typeof Ff.oninput=="function"}os=ss}else os=!1;Wf=os&&(!document.documentMode||9<document.documentMode)}function Pf(){Xl&&(Xl.detachEvent("onpropertychange",If),Zl=Xl=null)}function If(e){if(e.propertyName==="value"&&tr(Zl)){var t=[];Jf(t,Zl,e,Po(e)),Nf(Y1,t)}}function q1(e,t,n){e==="focusin"?(Pf(),Xl=t,Zl=n,Xl.attachEvent("onpropertychange",If)):e==="focusout"&&Pf()}function V1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(Zl)}function Q1(e,t){if(e==="click")return tr(t)}function K1(e,t){if(e==="input"||e==="change")return tr(t)}function X1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:X1;function Jl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Lo.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ji(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Z1=rn&&"documentMode"in document&&11>=document.documentMode,Ga=null,cs=null,$l=null,fs=!1;function ld(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fs||Ga==null||Ga!==Ji(a)||(a=Ga,"selectionStart"in a&&us(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$l&&Jl($l,a)||($l=a,a=Vr(cs,"onSelect"),0<a.length&&(t=new Ii("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ga)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ya={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},ds={},id={};rn&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function sa(e){if(ds[e])return ds[e];if(!Ya[e])return e;var t=Ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return ds[e]=t[n];return e}var rd=sa("animationend"),od=sa("animationiteration"),sd=sa("animationstart"),J1=sa("transitionrun"),$1=sa("transitionstart"),W1=sa("transitioncancel"),ud=sa("transitionend"),cd=new Map,hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hs.push("scrollEnd");function Vt(e,t){cd.set(e,t),ia(t,[e])}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],qa=0,ms=0;function ar(){for(var e=qa,t=ms=qa=0;t<e;){var n=Ot[t];Ot[t++]=null;var a=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var r=Ot[t];if(Ot[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&fd(n,i,r)}}function lr(e,t,n,a){Ot[qa++]=e,Ot[qa++]=t,Ot[qa++]=n,Ot[qa++]=a,ms|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function gs(e,t,n,a){return lr(e,t,n,a),ir(e)}function ua(e,t){return lr(e,null,null,t),ir(e)}function fd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-yt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function ir(e){if(50<bi)throw bi=0,wu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Va={};function F1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,a){return new F1(e,t,n,a)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function on(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rr(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")ps(e)&&(f=1);else if(typeof e=="string")f=nx(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=St(31,n,t,i),e.elementType=be,e.lanes=r,e;case Y:return ca(n.children,i,r,t);case X:f=8,i|=24;break;case K:return e=St(12,n,t,i|2),e.elementType=K,e.lanes=r,e;case P:return e=St(13,n,t,i),e.elementType=P,e.lanes=r,e;case J:return e=St(19,n,t,i),e.elementType=J,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:f=10;break e;case G:f=9;break e;case F:f=11;break e;case N:f=14;break e;case ie:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=St(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function ca(e,t,n,a){return e=St(7,e,a,t),e.lanes=n,e}function bs(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function hd(e){var t=St(18,null,null,0);return t.stateNode=e,t}function xs(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var md=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:hf(t)},md.set(e,t),t)}return{value:e,source:t,stack:hf(t)}}var Qa=[],Ka=0,or=null,Wl=0,kt=[],Nt=0,Rn=null,Ft=1,Pt="";function sn(e,t){Qa[Ka++]=Wl,Qa[Ka++]=or,or=e,Wl=t}function gd(e,t,n){kt[Nt++]=Ft,kt[Nt++]=Pt,kt[Nt++]=Rn,Rn=e;var a=Ft;e=Pt;var i=32-yt(a)-1;a&=~(1<<i),n+=1;var r=32-yt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Ft=1<<32-yt(t)+i|n<<i|a,Pt=r+e}else Ft=1<<r|n<<i|a,Pt=e}function ys(e){e.return!==null&&(sn(e,1),gd(e,1,0))}function vs(e){for(;e===or;)or=Qa[--Ka],Qa[Ka]=null,Wl=Qa[--Ka],Qa[Ka]=null;for(;e===Rn;)Rn=kt[--Nt],kt[Nt]=null,Pt=kt[--Nt],kt[Nt]=null,Ft=kt[--Nt],kt[Nt]=null}function pd(e,t){kt[Nt++]=Ft,kt[Nt++]=Pt,kt[Nt++]=Rn,Ft=t.id,Pt=t.overflow,Rn=e}var Ie=null,Re=null,ge=!1,Bn=null,Ut=!1,Ss=Error(u(519));function On(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Dt(t,e)),Ss}function bd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Pe]=e,t[ot]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<yi.length;n++)de(yi[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Mf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Bf(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Dm(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||On(e,!0)}function xd(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:Ie=Ie.return}}function Xa(e){if(e!==Ie)return!1;if(!ge)return xd(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lu(e.type,e.memoizedProps)),n=!n),n&&Re&&On(e),xd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Vm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Vm(e)}else t===27?(t=Re,Zn(e.type)?(e=Qu,Qu=null,Re=e):Re=t):Re=Ie?Lt(e.stateNode.nextSibling):null;return!0}function fa(){Re=Ie=null,ge=!1}function js(){var e=Bn;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),Bn=null),e}function Fl(e){Bn===null?Bn=[e]:Bn.push(e)}var zs=S(null),da=null,un=null;function Dn(e,t,n){Q(zs,t._currentValue),t._currentValue=n}function cn(e){e._currentValue=zs.current,O(zs)}function ws(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function _s(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var b=0;b<t.length;b++)if(m.context===t[b]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),ws(r.return,n,e),a||(f=null);break e}r=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ws(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Za(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var m=i.type;vt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===pe.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}i=i.return}e!==null&&_s(t,e,n,a),t.flags|=262144}function sr(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){da=e,un=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return yd(da,e)}function ur(e,t){return da===null&&ha(e),yd(e,t)}function yd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},un===null){if(e===null)throw Error(u(308));un=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else un=un.next=t;return n}var P1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},I1=l.unstable_scheduleCallback,eb=l.unstable_NormalPriority,Ve={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new P1,data:new Map,refCount:0}}function Pl(e){e.refCount--,e.refCount===0&&I1(eb,function(){e.controller.abort()})}var Il=null,Ts=0,Ja=0,$a=null;function tb(e,t){if(Il===null){var n=Il=[];Ts=0,Ja=Mu(),$a={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ts++,t.then(vd,vd),t}function vd(){if(--Ts===0&&Il!==null){$a!==null&&($a.status="fulfilled");var e=Il;Il=null,Ja=0,$a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Sd=B.S;B.S=function(e,t){lm=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tb(e,t),Sd!==null&&Sd(e,t)};var ma=S(null);function As(){var e=ma.current;return e!==null?e:Ce.pooledCache}function cr(e,t){t===null?Q(ma,ma.current):Q(ma,t.pool)}function jd(){var e=As();return e===null?null:{parent:Ve._currentValue,pool:e}}var Wa=Error(u(460)),Cs=Error(u(474)),fr=Error(u(542)),dr={then:function(){}};function zd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e;default:if(typeof t.status=="string")t.then(ln,ln);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e}throw pa=t,Wa}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(pa=n,Wa):n}}var pa=null;function _d(){if(pa===null)throw Error(u(459));var e=pa;return pa=null,e}function Ed(e){if(e===Wa||e===fr)throw Error(u(483))}var Fa=null,ei=0;function hr(e){var t=ei;return ei+=1,Fa===null&&(Fa=[]),wd(Fa,e,t)}function ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mr(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Td(e){function t(z,v){if(e){var _=z.deletions;_===null?(z.deletions=[v],z.flags|=16):_.push(v)}}function n(z,v){if(!e)return null;for(;v!==null;)t(z,v),v=v.sibling;return null}function a(z){for(var v=new Map;z!==null;)z.key!==null?v.set(z.key,z):v.set(z.index,z),z=z.sibling;return v}function i(z,v){return z=on(z,v),z.index=0,z.sibling=null,z}function r(z,v,_){return z.index=_,e?(_=z.alternate,_!==null?(_=_.index,_<v?(z.flags|=67108866,v):_):(z.flags|=67108866,v)):(z.flags|=1048576,v)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,v,_,D){return v===null||v.tag!==6?(v=bs(_,z.mode,D),v.return=z,v):(v=i(v,_),v.return=z,v)}function b(z,v,_,D){var I=_.type;return I===Y?R(z,v,_.props.children,D,_.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&ga(I)===v.type)?(v=i(v,_.props),ti(v,_),v.return=z,v):(v=rr(_.type,_.key,_.props,null,z.mode,D),ti(v,_),v.return=z,v)}function E(z,v,_,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=xs(_,z.mode,D),v.return=z,v):(v=i(v,_.children||[]),v.return=z,v)}function R(z,v,_,D,I){return v===null||v.tag!==7?(v=ca(_,z.mode,D,I),v.return=z,v):(v=i(v,_),v.return=z,v)}function k(z,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=bs(""+v,z.mode,_),v.return=z,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return _=rr(v.type,v.key,v.props,null,z.mode,_),ti(_,v),_.return=z,_;case q:return v=xs(v,z.mode,_),v.return=z,v;case ie:return v=ga(v),k(z,v,_)}if(gt(v)||Me(v))return v=ca(v,z.mode,_,null),v.return=z,v;if(typeof v.then=="function")return k(z,hr(v),_);if(v.$$typeof===H)return k(z,ur(z,v),_);mr(z,v)}return null}function A(z,v,_,D){var I=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return I!==null?null:m(z,v,""+_,D);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return _.key===I?b(z,v,_,D):null;case q:return _.key===I?E(z,v,_,D):null;case ie:return _=ga(_),A(z,v,_,D)}if(gt(_)||Me(_))return I!==null?null:R(z,v,_,D,null);if(typeof _.then=="function")return A(z,v,hr(_),D);if(_.$$typeof===H)return A(z,v,ur(z,_),D);mr(z,_)}return null}function C(z,v,_,D,I){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return z=z.get(_)||null,m(v,z,""+D,I);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return z=z.get(D.key===null?_:D.key)||null,b(v,z,D,I);case q:return z=z.get(D.key===null?_:D.key)||null,E(v,z,D,I);case ie:return D=ga(D),C(z,v,_,D,I)}if(gt(D)||Me(D))return z=z.get(_)||null,R(v,z,D,I,null);if(typeof D.then=="function")return C(z,v,_,hr(D),I);if(D.$$typeof===H)return C(z,v,_,ur(v,D),I);mr(v,D)}return null}function $(z,v,_,D){for(var I=null,ye=null,W=v,oe=v=0,me=null;W!==null&&oe<_.length;oe++){W.index>oe?(me=W,W=null):me=W.sibling;var ve=A(z,W,_[oe],D);if(ve===null){W===null&&(W=me);break}e&&W&&ve.alternate===null&&t(z,W),v=r(ve,v,oe),ye===null?I=ve:ye.sibling=ve,ye=ve,W=me}if(oe===_.length)return n(z,W),ge&&sn(z,oe),I;if(W===null){for(;oe<_.length;oe++)W=k(z,_[oe],D),W!==null&&(v=r(W,v,oe),ye===null?I=W:ye.sibling=W,ye=W);return ge&&sn(z,oe),I}for(W=a(W);oe<_.length;oe++)me=C(W,z,oe,_[oe],D),me!==null&&(e&&me.alternate!==null&&W.delete(me.key===null?oe:me.key),v=r(me,v,oe),ye===null?I=me:ye.sibling=me,ye=me);return e&&W.forEach(function(Pn){return t(z,Pn)}),ge&&sn(z,oe),I}function te(z,v,_,D){if(_==null)throw Error(u(151));for(var I=null,ye=null,W=v,oe=v=0,me=null,ve=_.next();W!==null&&!ve.done;oe++,ve=_.next()){W.index>oe?(me=W,W=null):me=W.sibling;var Pn=A(z,W,ve.value,D);if(Pn===null){W===null&&(W=me);break}e&&W&&Pn.alternate===null&&t(z,W),v=r(Pn,v,oe),ye===null?I=Pn:ye.sibling=Pn,ye=Pn,W=me}if(ve.done)return n(z,W),ge&&sn(z,oe),I;if(W===null){for(;!ve.done;oe++,ve=_.next())ve=k(z,ve.value,D),ve!==null&&(v=r(ve,v,oe),ye===null?I=ve:ye.sibling=ve,ye=ve);return ge&&sn(z,oe),I}for(W=a(W);!ve.done;oe++,ve=_.next())ve=C(W,z,oe,ve.value,D),ve!==null&&(e&&ve.alternate!==null&&W.delete(ve.key===null?oe:ve.key),v=r(ve,v,oe),ye===null?I=ve:ye.sibling=ve,ye=ve);return e&&W.forEach(function(hx){return t(z,hx)}),ge&&sn(z,oe),I}function Ae(z,v,_,D){if(typeof _=="object"&&_!==null&&_.type===Y&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case L:e:{for(var I=_.key;v!==null;){if(v.key===I){if(I=_.type,I===Y){if(v.tag===7){n(z,v.sibling),D=i(v,_.props.children),D.return=z,z=D;break e}}else if(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&ga(I)===v.type){n(z,v.sibling),D=i(v,_.props),ti(D,_),D.return=z,z=D;break e}n(z,v);break}else t(z,v);v=v.sibling}_.type===Y?(D=ca(_.props.children,z.mode,D,_.key),D.return=z,z=D):(D=rr(_.type,_.key,_.props,null,z.mode,D),ti(D,_),D.return=z,z=D)}return f(z);case q:e:{for(I=_.key;v!==null;){if(v.key===I)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(z,v.sibling),D=i(v,_.children||[]),D.return=z,z=D;break e}else{n(z,v);break}else t(z,v);v=v.sibling}D=xs(_,z.mode,D),D.return=z,z=D}return f(z);case ie:return _=ga(_),Ae(z,v,_,D)}if(gt(_))return $(z,v,_,D);if(Me(_)){if(I=Me(_),typeof I!="function")throw Error(u(150));return _=I.call(_),te(z,v,_,D)}if(typeof _.then=="function")return Ae(z,v,hr(_),D);if(_.$$typeof===H)return Ae(z,v,ur(z,_),D);mr(z,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(z,v.sibling),D=i(v,_),D.return=z,z=D):(n(z,v),D=bs(_,z.mode,D),D.return=z,z=D),f(z)):n(z,v)}return function(z,v,_,D){try{ei=0;var I=Ae(z,v,_,D);return Fa=null,I}catch(W){if(W===Wa||W===fr)throw W;var ye=St(29,W,null,z.mode);return ye.lanes=D,ye.return=z,ye}}}var ba=Td(!0),Ad=Td(!1),kn=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Se&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ir(e),fd(e,null,n),t}return lr(e,a,t,n),ir(e)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,yf(e,n)}}function Bs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Os=!1;function ai(){if(Os){var e=$a;if(e!==null)throw e}}function li(e,t,n,a){Os=!1;var i=e.updateQueue;kn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var b=m,E=b.next;b.next=null,f===null?r=E:f.next=E,f=b;var R=e.alternate;R!==null&&(R=R.updateQueue,m=R.lastBaseUpdate,m!==f&&(m===null?R.firstBaseUpdate=E:m.next=E,R.lastBaseUpdate=b))}if(r!==null){var k=i.baseState;f=0,R=E=b=null,m=r;do{var A=m.lane&-536870913,C=A!==m.lane;if(C?(he&A)===A:(a&A)===A){A!==0&&A===Ja&&(Os=!0),R!==null&&(R=R.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var $=e,te=m;A=t;var Ae=n;switch(te.tag){case 1:if($=te.payload,typeof $=="function"){k=$.call(Ae,k,A);break e}k=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=te.payload,A=typeof $=="function"?$.call(Ae,k,A):$,A==null)break e;k=w({},k,A);break e;case 2:kn=!0}}A=m.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},R===null?(E=R=C,b=k):R=R.next=C,f|=A;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;C=m,m=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);R===null&&(b=k),i.baseState=b,i.firstBaseUpdate=E,i.lastBaseUpdate=R,r===null&&(i.shared.lanes=0),qn|=f,e.lanes=f,e.memoizedState=k}}function Cd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Md(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Cd(n[e],t)}var Pa=S(null),gr=S(0);function Rd(e,t){e=yn,Q(gr,e),Q(Pa,t),yn=e|t.baseLanes}function Ds(){Q(gr,yn),Q(Pa,Pa.current)}function ks(){yn=gr.current,O(Pa),O(gr)}var jt=S(null),Ht=null;function Hn(e){var t=e.alternate;Q(Ge,Ge.current&1),Q(jt,e),Ht===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Ht=e)}function Ns(e){Q(Ge,Ge.current),Q(jt,e),Ht===null&&(Ht=e)}function Bd(e){e.tag===22?(Q(Ge,Ge.current),Q(jt,e),Ht===null&&(Ht=e)):Ln()}function Ln(){Q(Ge,Ge.current),Q(jt,jt.current)}function zt(e){O(jt),Ht===e&&(Ht=null),O(Ge)}var Ge=S(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qu(n)||Vu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fn=0,le=null,Ee=null,Qe=null,br=!1,Ia=!1,xa=!1,xr=0,ii=0,el=null,ab=0;function He(){throw Error(u(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Hs(e,t,n,a,i,r){return fn=r,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?gh:Is,xa=!1,r=n(a,i),xa=!1,Ia&&(r=Dd(t,n,a,i)),Od(e),r}function Od(e){B.H=si;var t=Ee!==null&&Ee.next!==null;if(fn=0,Qe=Ee=le=null,br=!1,ii=0,el=null,t)throw Error(u(300));e===null||Ke||(e=e.dependencies,e!==null&&sr(e)&&(Ke=!0))}function Dd(e,t,n,a){le=e;var i=0;do{if(Ia&&(el=null),ii=0,Ia=!1,25<=i)throw Error(u(301));if(i+=1,Qe=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=ph,r=t(n,a)}while(Ia);return r}function lb(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?ri(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(le.flags|=1024),t}function Ls(){var e=xr!==0;return xr=0,e}function Gs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ys(e){if(br){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}br=!1}fn=0,Qe=Ee=le=null,Ia=!1,ii=xr=0,el=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?le.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ye(){if(Ee===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Qe===null?le.memoizedState:Qe.next;if(t!==null)Qe=t,Ee=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Qe===null?le.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ri(e){var t=ii;return ii+=1,el===null&&(el=[]),e=wd(el,e,t),t=le,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?gh:Is),e}function vr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ri(e);if(e.$$typeof===H)return et(e)}throw Error(u(438,String(e)))}function qs(e){var t=null,n=le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yr(),le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ue;return t.index++,n}function dn(e,t){return typeof t=="function"?t(e):t}function Sr(e){var t=Ye();return Vs(t,Ee,e)}function Vs(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=f=null,b=null,E=t,R=!1;do{var k=E.lane&-536870913;if(k!==E.lane?(he&k)===k:(fn&k)===k){var A=E.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),k===Ja&&(R=!0);else if((fn&A)===A){E=E.next,A===Ja&&(R=!0);continue}else k={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(m=b=k,f=r):b=b.next=k,le.lanes|=A,qn|=A;k=E.action,xa&&n(r,k),r=E.hasEagerState?E.eagerState:n(r,k)}else A={lane:k,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(m=b=A,f=r):b=b.next=A,le.lanes|=k,qn|=k;E=E.next}while(E!==null&&E!==t);if(b===null?f=r:b.next=m,!vt(r,e.memoizedState)&&(Ke=!0,R&&(n=$a,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=b,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qs(e){var t=Ye(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);vt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function kd(e,t,n){var a=le,i=Ye(),r=ge;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!vt((Ee||i).memoizedState,n);if(f&&(i.memoizedState=n,Ke=!0),i=i.queue,Zs(Hd.bind(null,a,i,e),[e]),i.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,tl(9,{destroy:void 0},Ud.bind(null,a,i,n,t),null),Ce===null)throw Error(u(349));r||(fn&127)!==0||Nd(a,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t=yr(),le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ud(e,t,n,a){t.value=n,t.getSnapshot=a,Ld(t)&&Gd(e)}function Hd(e,t,n){return n(function(){Ld(t)&&Gd(e)})}function Ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Gd(e){var t=ua(e,2);t!==null&&ht(t,e,2)}function Ks(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),xa){An(!0);try{n()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t}function Yd(e,t,n,a){return e.baseState=n,Vs(e,Ee,typeof a=="function"?a:dn)}function ib(e,t,n,a,i){if(wr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};B.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,qd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function qd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=B.T,f={};B.T=f;try{var m=n(i,a),b=B.S;b!==null&&b(f,m),Vd(e,t,m)}catch(E){Xs(e,t,E)}finally{r!==null&&f.types!==null&&(r.types=f.types),B.T=r}}else try{r=n(i,a),Vd(e,t,r)}catch(E){Xs(e,t,E)}}function Vd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Qd(e,t,a)},function(a){return Xs(e,t,a)}):Qd(e,t,n)}function Qd(e,t,n){t.status="fulfilled",t.value=n,Kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qd(e,n)))}function Xs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Kd(t),t=t.next;while(t!==a)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xd(e,t){return t}function Zd(e,t){if(ge){var n=Ce.formState;if(n!==null){e:{var a=le;if(ge){if(Re){t:{for(var i=Re,r=Ut;i.nodeType!==8;){if(!r){i=null;break t}if(i=Lt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Re=Lt(i.nextSibling),a=i.data==="F!";break e}}On(a)}a=!1}a&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xd,lastRenderedState:t},n.queue=a,n=dh.bind(null,le,a),a.dispatch=n,a=Ks(!1),r=Ps.bind(null,le,!1,a.queue),a=it(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=ib.bind(null,le,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Jd(e){var t=Ye();return $d(t,Ee,e)}function $d(e,t,n){if(t=Vs(e,t,Xd)[0],e=Sr(dn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ri(t)}catch(f){throw f===Wa?fr:f}else a=t;t=Ye();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(le.flags|=2048,tl(9,{destroy:void 0},rb.bind(null,i,n),null)),[a,r,e]}function rb(e,t){e.action=t}function Wd(e){var t=Ye(),n=Ee;if(n!==null)return $d(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function tl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=le.updateQueue,t===null&&(t=yr(),le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Fd(){return Ye().memoizedState}function jr(e,t,n,a){var i=it();le.flags|=e,i.memoizedState=tl(1|t,{destroy:void 0},n,a===void 0?null:a)}function zr(e,t,n,a){var i=Ye();a=a===void 0?null:a;var r=i.memoizedState.inst;Ee!==null&&a!==null&&Us(a,Ee.memoizedState.deps)?i.memoizedState=tl(t,r,n,a):(le.flags|=e,i.memoizedState=tl(1|t,r,n,a))}function Pd(e,t){jr(8390656,8,e,t)}function Zs(e,t){zr(2048,8,e,t)}function ob(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=yr(),le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Id(e){var t=Ye().memoizedState;return ob({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function eh(e,t){return zr(4,2,e,t)}function th(e,t){return zr(4,4,e,t)}function nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){n=n!=null?n.concat([e]):null,zr(4,4,nh.bind(null,t,e),n)}function Js(){}function lh(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Us(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ih(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Us(t,a[1]))return a[0];if(a=e(),xa){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[a,t],a}function $s(e,t,n){return n===void 0||(fn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=rm(),le.lanes|=e,qn|=e,n)}function rh(e,t,n,a){return vt(n,t)?n:Pa.current!==null?(e=$s(e,n,a),vt(e,t)||(Ke=!0),e):(fn&42)===0||(fn&1073741824)!==0&&(he&261930)===0?(Ke=!0,e.memoizedState=n):(e=rm(),le.lanes|=e,qn|=e,t)}function oh(e,t,n,a,i){var r=V.p;V.p=r!==0&&8>r?r:8;var f=B.T,m={};B.T=m,Ps(e,!1,t,n);try{var b=i(),E=B.S;if(E!==null&&E(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=nb(b,a);oi(e,t,R,Et(e))}else oi(e,t,a,Et(e))}catch(k){oi(e,t,{then:function(){},status:"rejected",reason:k},Et())}finally{V.p=r,f!==null&&m.types!==null&&(f.types=m.types),B.T=f}}function sb(){}function Ws(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=sh(e).queue;oh(e,i,t,ee,n===null?sb:function(){return uh(e),n(a)})}function sh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uh(e){var t=sh(e);t.next===null&&(t=e.alternate.memoizedState),oi(e,t.next.queue,{},Et())}function Fs(){return et(wi)}function ch(){return Ye().memoizedState}function fh(){return Ye().memoizedState}function ub(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=Nn(n);var a=Un(t,e,n);a!==null&&(ht(a,t,n),ni(a,t,n)),t={cache:Es()},e.payload=t;return}t=t.return}}function cb(e,t,n){var a=Et();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wr(e)?hh(t,n):(n=gs(e,t,n,a),n!==null&&(ht(n,e,a),mh(n,t,a)))}function dh(e,t,n){var a=Et();oi(e,t,n,a)}function oi(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wr(e))hh(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,n);if(i.hasEagerState=!0,i.eagerState=m,vt(m,f))return lr(e,t,i,0),Ce===null&&ar(),!1}catch{}if(n=gs(e,t,i,a),n!==null)return ht(n,e,a),mh(n,t,a),!0}return!1}function Ps(e,t,n,a){if(a={lane:2,revertLane:Mu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wr(e)){if(t)throw Error(u(479))}else t=gs(e,n,a,2),t!==null&&ht(t,e,2)}function wr(e){var t=e.alternate;return e===le||t!==null&&t===le}function hh(e,t){Ia=br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,yf(e,n)}}var si={readContext:et,use:vr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};si.useEffectEvent=He;var gh={readContext:et,use:vr,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,jr(4194308,4,nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jr(4194308,4,e,t)},useInsertionEffect:function(e,t){jr(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var a=e();if(xa){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=it();if(n!==void 0){var i=n(t);if(xa){An(!0);try{n(t)}finally{An(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=cb.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Ks(e);var t=e.queue,n=dh.bind(null,le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){var n=it();return $s(n,e,t)},useTransition:function(){var e=Ks(!1);return e=oh.bind(null,le,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=le,i=it();if(ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ce===null)throw Error(u(349));(he&127)!==0||Nd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Pd(Hd.bind(null,a,r,e),[e]),a.flags|=2048,tl(9,{destroy:void 0},Ud.bind(null,a,r,n,t),null),n},useId:function(){var e=it(),t=Ce.identifierPrefix;if(ge){var n=Pt,a=Ft;n=(a&~(1<<32-yt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ab++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fs,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,le,!0,n),n.dispatch=t,[e,t]},useMemoCache:qs,useCacheRefresh:function(){return it().memoizedState=ub.bind(null,le)},useEffectEvent:function(e){var t=it(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Is={readContext:et,use:vr,useCallback:lh,useContext:et,useEffect:Zs,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ih,useReducer:Sr,useRef:Fd,useState:function(){return Sr(dn)},useDebugValue:Js,useDeferredValue:function(e,t){var n=Ye();return rh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Sr(dn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:kd,useId:ch,useHostTransitionStatus:Fs,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=Ye();return Yd(n,Ee,e,t)},useMemoCache:qs,useCacheRefresh:fh};Is.useEffectEvent=Id;var ph={readContext:et,use:vr,useCallback:lh,useContext:et,useEffect:Zs,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ih,useReducer:Qs,useRef:Fd,useState:function(){return Qs(dn)},useDebugValue:Js,useDeferredValue:function(e,t){var n=Ye();return Ee===null?$s(n,e,t):rh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Qs(dn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:kd,useId:ch,useHostTransitionStatus:Fs,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=Ye();return Ee!==null?Yd(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qs,useCacheRefresh:fh};ph.useEffectEvent=Id;function eu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Et(),i=Nn(a);i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,a),t!==null&&(ht(t,e,a),ni(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Et(),i=Nn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,a),t!==null&&(ht(t,e,a),ni(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),a=Nn(n);a.tag=2,t!=null&&(a.callback=t),t=Un(e,a,n),t!==null&&(ht(t,e,n),ni(t,e,n))}};function bh(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Jl(n,a)||!Jl(i,r):!0}function xh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&tu.enqueueReplaceState(t,t.state,null)}function ya(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function yh(e){nr(e)}function vh(e){console.error(e)}function Sh(e){nr(e)}function _r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function jh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function nu(e,t,n){return n=Nn(n),n.tag=3,n.payload={element:null},n.callback=function(){_r(e,t)},n}function zh(e){return e=Nn(e),e.tag=3,e}function wh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){jh(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){jh(t,n,a),typeof i!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function fb(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Za(t,n,i,!0),n=jt.current,n!==null){switch(n.tag){case 31:case 13:return Ht===null?Ur():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===dr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Tu(e,a,i)),!1;case 22:return n.flags|=65536,a===dr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Tu(e,a,i)),!1}throw Error(u(435,n.tag))}return Tu(e,a,i),Ur(),!1}if(ge)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Ss&&(e=Error(u(422),{cause:a}),Fl(Dt(e,n)))):(a!==Ss&&(t=Error(u(423),{cause:a}),Fl(Dt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Dt(a,n),i=nu(e.stateNode,a,i),Bs(e,i),Le!==4&&(Le=2)),!1;var r=Error(u(520),{cause:a});if(r=Dt(r,n),pi===null?pi=[r]:pi.push(r),Le!==4&&(Le=2),t===null)return!0;a=Dt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nu(n.stateNode,a,e),Bs(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=zh(i),wh(i,e,n,a),Bs(n,i),!1}n=n.return}while(n!==null);return!1}var au=Error(u(461)),Ke=!1;function tt(e,t,n,a){t.child=e===null?Ad(t,null,n,a):ba(t,e.child,n,a)}function _h(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var m in a)m!=="ref"&&(f[m]=a[m])}else f=a;return ha(t),a=Hs(e,t,n,f,r,i),m=Ls(),e!==null&&!Ke?(Gs(e,t,i),hn(e,t,i)):(ge&&m&&ys(t),t.flags|=1,tt(e,t,a,i),t.child)}function Eh(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!ps(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Th(e,t,r,a,i)):(e=rr(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!fu(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Jl,n(f,a)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=on(r,a),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Jl(r,a)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=a=r,fu(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,hn(e,t,i)}return lu(e,t,n,a,i)}function Ah(e,t,n,a){var i=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,t.child=null;return Ch(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cr(t,r!==null?r.cachePool:null),r!==null?Rd(t,r):Ds(),Bd(t);else return a=t.lanes=536870912,Ch(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(cr(t,r.cachePool),Rd(t,r),Ln(),t.memoizedState=null):(e!==null&&cr(t,null),Ds(),Ln());return tt(e,t,i,n),t.child}function ui(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ch(e,t,n,a,i){var r=As();return r=r===null?null:{parent:Ve._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&cr(t,null),Ds(),Bd(t),e!==null&&Za(e,t,a,!0),t.childLanes=i,null}function Er(e,t){return t=Ar({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mh(e,t,n){return ba(t,e.child,null,n),e=Er(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function db(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(a.mode==="hidden")return e=Er(t,a),t.lanes=536870912,ui(null,e);if(Ns(t),(e=Re)?(e=qm(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,Ie=t,Re=null)):e=null,e===null)throw On(t);return t.lanes=536870912,null}return Er(t,a)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(Ns(t),i)if(t.flags&256)t.flags&=-257,t=Mh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ke||Za(e,t,n,!1),i=(n&e.childLanes)!==0,Ke||i){if(a=Ce,a!==null&&(f=vf(a,n),f!==0&&f!==r.retryLane))throw r.retryLane=f,ua(e,f),ht(a,e,f),au;Ur(),t=Mh(e,t,n)}else e=r.treeContext,Re=Lt(f.nextSibling),Ie=t,ge=!0,Bn=null,Ut=!1,e!==null&&pd(t,e),t=Er(t,a),t.flags|=4096;return t}return e=on(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lu(e,t,n,a,i){return ha(t),n=Hs(e,t,n,a,void 0,i),a=Ls(),e!==null&&!Ke?(Gs(e,t,i),hn(e,t,i)):(ge&&a&&ys(t),t.flags|=1,tt(e,t,n,i),t.child)}function Rh(e,t,n,a,i,r){return ha(t),t.updateQueue=null,n=Dd(t,a,n,i),Od(e),a=Ls(),e!==null&&!Ke?(Gs(e,t,r),hn(e,t,r)):(ge&&a&&ys(t),t.flags|=1,tt(e,t,n,r),t.child)}function Bh(e,t,n,a,i){if(ha(t),t.stateNode===null){var r=Va,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=tu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Ms(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Va,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(eu(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&tu.enqueueReplaceState(r,r.state,null),li(t,a,r,i),ai(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,b=ya(n,m);r.props=b;var E=r.context,R=n.contextType;f=Va,typeof R=="object"&&R!==null&&(f=et(R));var k=n.getDerivedStateFromProps;R=typeof k=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,R||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||E!==f)&&xh(t,r,a,f),kn=!1;var A=t.memoizedState;r.state=A,li(t,a,r,i),ai(),E=t.memoizedState,m||A!==E||kn?(typeof k=="function"&&(eu(t,n,k,a),E=t.memoizedState),(b=kn||bh(t,n,b,a,A,E,f))?(R||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),r.props=a,r.state=E,r.context=f,a=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Rs(e,t),f=t.memoizedProps,R=ya(n,f),r.props=R,k=t.pendingProps,A=r.context,E=n.contextType,b=Va,typeof E=="object"&&E!==null&&(b=et(E)),m=n.getDerivedStateFromProps,(E=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==k||A!==b)&&xh(t,r,a,b),kn=!1,A=t.memoizedState,r.state=A,li(t,a,r,i),ai();var C=t.memoizedState;f!==k||A!==C||kn||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof m=="function"&&(eu(t,n,m,a),C=t.memoizedState),(R=kn||bh(t,n,R,a,A,C,b)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,C,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,C,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),r.props=a,r.state=C,r.context=b,a=R):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Tr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ba(t,e.child,null,i),t.child=ba(t,null,n,i)):tt(e,t,n,i),t.memoizedState=r.state,e=t.child):e=hn(e,t,i),e}function Oh(e,t,n,a){return fa(),t.flags|=256,tt(e,t,n,a),t.child}var iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ru(e){return{baseLanes:e,cachePool:jd()}}function ou(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_t),e}function Dh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Hn(t):Ln(),(e=Re)?(e=qm(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=hd(e),n.return=t,t.child=n,Ie=t,Re=null)):e=null,e===null)throw On(t);return Vu(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,i?(Ln(),i=t.mode,m=Ar({mode:"hidden",children:m},i),a=ca(a,i,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=ru(n),a.childLanes=ou(e,f,n),t.memoizedState=iu,ui(null,a)):(Hn(t),su(t,m))}var b=e.memoizedState;if(b!==null&&(m=b.dehydrated,m!==null)){if(r)t.flags&256?(Hn(t),t.flags&=-257,t=uu(e,t,n)):t.memoizedState!==null?(Ln(),t.child=e.child,t.flags|=128,t=null):(Ln(),m=a.fallback,i=t.mode,a=Ar({mode:"visible",children:a.children},i),m=ca(m,i,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,ba(t,e.child,null,n),a=t.child,a.memoizedState=ru(n),a.childLanes=ou(e,f,n),t.memoizedState=iu,t=ui(null,a));else if(Hn(t),Vu(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var E=f.dgst;f=E,a=Error(u(419)),a.stack="",a.digest=f,Fl({value:a,source:null,stack:null}),t=uu(e,t,n)}else if(Ke||Za(e,t,n,!1),f=(n&e.childLanes)!==0,Ke||f){if(f=Ce,f!==null&&(a=vf(f,n),a!==0&&a!==b.retryLane))throw b.retryLane=a,ua(e,a),ht(f,e,a),au;qu(m)||Ur(),t=uu(e,t,n)}else qu(m)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Lt(m.nextSibling),Ie=t,ge=!0,Bn=null,Ut=!1,e!==null&&pd(t,e),t=su(t,a.children),t.flags|=4096);return t}return i?(Ln(),m=a.fallback,i=t.mode,b=e.child,E=b.sibling,a=on(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,E!==null?m=on(E,m):(m=ca(m,i,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,ui(null,a),a=t.child,m=e.child.memoizedState,m===null?m=ru(n):(i=m.cachePool,i!==null?(b=Ve._currentValue,i=i.parent!==b?{parent:b,pool:b}:i):i=jd(),m={baseLanes:m.baseLanes|n,cachePool:i}),a.memoizedState=m,a.childLanes=ou(e,f,n),t.memoizedState=iu,ui(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=on(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function su(e,t){return t=Ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ar(e,t){return e=St(22,e,null,t),e.lanes=0,e}function uu(e,t,n){return ba(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ws(e.return,t,n)}function cu(e,t,n,a,i,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:r}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=i,f.treeForkCount=r)}function Nh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var f=Ge.current,m=(f&2)!==0;if(m?(f=f&1|2,t.flags|=128):f&=1,Q(Ge,f),tt(e,t,a,n),a=ge?Wl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kh(e,n,t);else if(e.tag===19)kh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cu(t,!1,i,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cu(t,!0,n,null,r,a);break;case"together":cu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function hb(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Dn(t,Ve,e.memoizedState.cache),fa();break;case 27:case 5:Jt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ns(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Dh(e,t,n):(Hn(t),e=hn(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Za(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Nh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Ge,Ge.current),a)break;return null;case 22:return t.lanes=0,Ah(e,t,n,t.pendingProps);case 24:Dn(t,Ve,e.memoizedState.cache)}return hn(e,t,n)}function Uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!fu(e,n)&&(t.flags&128)===0)return Ke=!1,hb(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,ge&&(t.flags&1048576)!==0&&gd(t,Wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")ps(e)?(a=ya(e,a),t.tag=1,t=Bh(null,t,e,a,n)):(t.tag=0,t=lu(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===F){t.tag=11,t=_h(null,t,e,a,n);break e}else if(i===N){t.tag=14,t=Eh(null,t,e,a,n);break e}}throw t=rt(e)||e,Error(u(306,t,""))}}return t;case 0:return lu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ya(a,t.pendingProps),Bh(e,t,a,i,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,Rs(e,t),li(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Dn(t,Ve,a),a!==r.cache&&_s(t,[Ve],n,!0),ai(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Oh(e,t,a,n);break e}else if(a!==i){i=Dt(Error(u(424)),t),Fl(i),t=Oh(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Lt(e.firstChild),Ie=t,ge=!0,Bn=null,Ut=!0,n=Ad(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),a===i){t=hn(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 26:return Tr(e,t),e===null?(n=Jm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=Qr(re.current).createElement(n),a[Pe]=t,a[ot]=e,nt(a,n,e),We(a),t.stateNode=a):t.memoizedState=Jm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jt(t),e===null&&ge&&(a=t.stateNode=Km(t.type,t.pendingProps,re.current),Ie=t,Ut=!0,i=Re,Zn(t.type)?(Qu=i,Re=Lt(a.firstChild)):Re=i),tt(e,t,t.pendingProps.children,n),Tr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=a=Re)&&(a=Vb(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,Ie=t,Re=Lt(a.firstChild),Ut=!1,i=!0):i=!1),i||On(t)),Jt(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Lu(i,r)?a=null:f!==null&&Lu(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Hs(e,t,lb,null,null,n),wi._currentValue=i),Tr(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Re)&&(n=Qb(n,t.pendingProps,Ut),n!==null?(t.stateNode=n,Ie=t,Re=null,e=!0):e=!1),e||On(t)),null;case 13:return Dh(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ba(t,null,a,n):tt(e,t,a,n),t.child;case 11:return _h(e,t,t.type,t.pendingProps,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),tt(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,ha(t),i=et(i),a=a(i),t.flags|=1,tt(e,t,a,n),t.child;case 14:return Eh(e,t,t.type,t.pendingProps,n);case 15:return Th(e,t,t.type,t.pendingProps,n);case 19:return Nh(e,t,n);case 31:return db(e,t,n);case 22:return Ah(e,t,n,t.pendingProps);case 24:return ha(t),a=et(Ve),e===null?(i=As(),i===null&&(i=Ce,r=Es(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},Ms(t),Dn(t,Ve,i)):((e.lanes&n)!==0&&(Rs(e,t),li(t,null,null,n),ai()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Dn(t,Ve,a)):(a=r.cache,Dn(t,Ve,a),a!==i.cache&&_s(t,[Ve],n,!0))),tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function mn(e){e.flags|=4}function du(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(cm())e.flags|=8192;else throw pa=dr,Cs}else e.flags&=-16777217}function Hh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Im(t))if(cm())e.flags|=8192;else throw pa=dr,Cs}function Cr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bf():536870912,e.lanes|=t,il|=t)}function ci(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function mb(e,t,n){var a=t.pendingProps;switch(vs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),cn(Ve),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,js())),Be(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(mn(t),r!==null?(Be(t),Hh(t,r)):(Be(t),du(t,i,null,a,n))):r?r!==e.memoizedState?(mn(t),Be(t),Hh(t,r)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&mn(t),Be(t),du(t,i,e,a,n)),null;case 27:if($t(t),n=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&mn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Be(t),null}e=Z.current,Xa(t)?bd(t):(e=Km(i,a,n),t.stateNode=e,mn(t))}return Be(t),null;case 5:if($t(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&mn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(r=Z.current,Xa(t))bd(t);else{var f=Qr(re.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(i,{is:a.is}):f.createElement(i)}}r[Pe]=t,r[ot]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=r;e:switch(nt(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&mn(t)}}return Be(t),du(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&mn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=re.current,Xa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ie,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Dm(e.nodeValue,n)),e||On(t,!0)}else e=Qr(e).createTextNode(a),e[Pe]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xa(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Pe]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=js(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Xa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Pe]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=js(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cr(t,t.updateQueue),Be(t),null);case 4:return _e(),e===null&&Du(t.stateNode.containerInfo),Be(t),null;case 10:return cn(t.type),Be(t),null;case 19:if(O(Ge),a=t.memoizedState,a===null)return Be(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)ci(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=pr(e),r!==null){for(t.flags|=128,ci(a,!1),e=r.updateQueue,t.updateQueue=e,Cr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dd(n,e),n=n.sibling;return Q(Ge,Ge.current&1|2),ge&&sn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&bt()>Dr&&(t.flags|=128,i=!0,ci(a,!1),t.lanes=4194304)}else{if(!i)if(e=pr(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Cr(t,e),ci(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ge)return Be(t),null}else 2*bt()-a.renderingStartTime>Dr&&n!==536870912&&(t.flags|=128,i=!0,ci(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bt(),e.sibling=null,n=Ge.current,Q(Ge,i?n&1|2:n&1),ge&&sn(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return zt(t),ks(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Cr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&O(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),cn(Ve),Be(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function gb(e,t){switch(vs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(Ve),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $t(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(u(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ge),null;case 4:return _e(),null;case 10:return cn(t.type),null;case 22:case 23:return zt(t),ks(),e!==null&&O(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return cn(Ve),null;case 25:return null;default:return null}}function Lh(e,t){switch(vs(t),t.tag){case 3:cn(Ve),_e();break;case 26:case 27:case 5:$t(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:O(Ge);break;case 10:cn(t.type);break;case 22:case 23:zt(t),ks(),e!==null&&O(ma);break;case 24:cn(Ve)}}function fi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(m){we(t,t.return,m)}}function Gn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var b=n,E=m;try{E()}catch(R){we(i,b,R)}}}a=a.next}while(a!==r)}}catch(R){we(t,t.return,R)}}function Gh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Md(t,n)}catch(a){we(e,e.return,a)}}}function Yh(e,t,n){n.props=ya(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){we(e,t,a)}}function di(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){we(e,t,i)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){we(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){we(e,t,i)}else n.current=null}function qh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){we(e,e.return,i)}}function hu(e,t,n){try{var a=e.stateNode;Ub(a,e.type,n,t),a[ot]=t}catch(i){we(e,e.return,i)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zn(e.type)||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(a!==4&&(a===27&&Zn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function Mr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Zn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Mr(e,t,n),e=e.sibling;e!==null;)Mr(e,t,n),e=e.sibling}function Qh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);nt(t,a,n),t[Pe]=e,t[ot]=n}catch(r){we(e,e.return,r)}}var gn=!1,Xe=!1,pu=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function pb(e,t){if(e=e.containerInfo,Uu=Fr,e=ad(e),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,m=-1,b=-1,E=0,R=0,k=e,A=null;t:for(;;){for(var C;k!==n||i!==0&&k.nodeType!==3||(m=f+i),k!==r||a!==0&&k.nodeType!==3||(b=f+a),k.nodeType===3&&(f+=k.nodeValue.length),(C=k.firstChild)!==null;)A=k,k=C;for(;;){if(k===e)break t;if(A===n&&++E===i&&(m=f),A===r&&++R===a&&(b=f),(C=k.nextSibling)!==null)break;k=A,A=k.parentNode}k=C}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:e,selectionRange:n},Fr=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var $=ya(n.type,i);e=a.getSnapshotBeforeUpdate($,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(te){we(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Xh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),a&4&&fi(5,n);break;case 1:if(bn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){we(n,n.return,f)}else{var i=ya(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){we(n,n.return,f)}}a&64&&Gh(n),a&512&&di(n,n.return);break;case 3:if(bn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Md(e,t)}catch(f){we(n,n.return,f)}}break;case 27:t===null&&a&4&&Qh(n);case 26:case 5:bn(e,n),t===null&&a&4&&qh(n),a&512&&di(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),a&4&&$h(e,n);break;case 13:bn(e,n),a&4&&Wh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_b.bind(null,n),Kb(e,n))));break;case 22:if(a=n.memoizedState!==null||gn,!a){t=t!==null&&t.memoizedState!==null||Xe,i=gn;var r=Xe;gn=a,(Xe=t)&&!r?xn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),gn=i,Xe=r}break;case 30:break;default:bn(e,n)}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ut=!1;function pn(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 26:Xe||It(n,t),pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||It(n,t);var a=De,i=ut;Zn(n.type)&&(De=n.stateNode,ut=!1),pn(e,t,n),Si(n.stateNode),De=a,ut=i;break;case 5:Xe||It(n,t);case 6:if(a=De,i=ut,De=null,pn(e,t,n),De=a,ut=i,De!==null)if(ut)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(r){we(n,t,r)}else try{De.removeChild(n.stateNode)}catch(r){we(n,t,r)}break;case 18:De!==null&&(ut?(e=De,Gm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hl(e)):Gm(De,n.stateNode));break;case 4:a=De,i=ut,De=n.stateNode.containerInfo,ut=!0,pn(e,t,n),De=a,ut=i;break;case 0:case 11:case 14:case 15:Gn(2,n,t),Xe||Gn(4,n,t),pn(e,t,n);break;case 1:Xe||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yh(n,t,a)),pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:Xe=(a=Xe)||n.memoizedState!==null,pn(e,t,n),Xe=a;break;default:pn(e,t,n)}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hl(e)}catch(n){we(t,t.return,n)}}}function Wh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(n){we(t,t.return,n)}}function bb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kh),t;default:throw Error(u(435,e.tag))}}function Rr(e,t){var n=bb(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=Eb.bind(null,e,a);a.then(i,i)}})}function ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Zn(m.type)){De=m.stateNode,ut=!1;break e}break;case 5:De=m.stateNode,ut=!1;break e;case 3:case 4:De=m.stateNode.containerInfo,ut=!0;break e}m=m.return}if(De===null)throw Error(u(160));Jh(r,f,i),De=null,ut=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}var Qt=null;function Fh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ft(e),a&4&&(Gn(3,e,e.return),fi(3,e),Gn(5,e,e.return));break;case 1:ct(t,e),ft(e),a&512&&(Xe||n===null||It(n,n.return)),a&64&&gn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Qt;if(ct(t,e),ft(e),a&512&&(Xe||n===null||It(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Ll]||r[Pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),nt(r,a,n),r[Pe]=e,We(r),a=r;break e;case"link":var f=Fm("link","href",i).get(a+(n.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(m,1);break t}}r=i.createElement(a),nt(r,a,n),i.head.appendChild(r);break;case"meta":if(f=Fm("meta","content",i).get(a+(n.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(m,1);break t}}r=i.createElement(a),nt(r,a,n),i.head.appendChild(r);break;default:throw Error(u(468,a))}r[Pe]=e,We(r),a=r}e.stateNode=a}else Pm(i,e.type,e.stateNode);else e.stateNode=Wm(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Pm(i,e.type,e.stateNode):Wm(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hu(e,e.memoizedProps,n.memoizedProps)}break;case 27:ct(t,e),ft(e),a&512&&(Xe||n===null||It(n,n.return)),n!==null&&a&4&&hu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ct(t,e),ft(e),a&512&&(Xe||n===null||It(n,n.return)),e.flags&32){i=e.stateNode;try{Na(i,"")}catch($){we(e,e.return,$)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,hu(e,i,n!==null?n.memoizedProps:i)),a&1024&&(pu=!0);break;case 6:if(ct(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch($){we(e,e.return,$)}}break;case 3:if(Zr=null,i=Qt,Qt=Kr(t.containerInfo),ct(t,e),Qt=i,ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{hl(t.containerInfo)}catch($){we(e,e.return,$)}pu&&(pu=!1,Ph(e));break;case 4:a=Qt,Qt=Kr(e.stateNode.containerInfo),ct(t,e),ft(e),Qt=a;break;case 12:ct(t,e),ft(e);break;case 31:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rr(e,a)));break;case 13:ct(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Or=bt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rr(e,a)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,E=gn,R=Xe;if(gn=E||i,Xe=R||b,ct(t,e),Xe=R,gn=E,ft(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||b||gn||Xe||va(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=b.stateNode;var k=b.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch($){we(b,b.return,$)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch($){we(b,b.return,$)}}}else if(t.tag===18){if(n===null){b=t;try{var C=b.stateNode;i?Ym(C,!0):Ym(b.stateNode,!1)}catch($){we(b,b.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Rr(e,n))));break;case 19:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rr(e,a)));break;case 30:break;case 21:break;default:ct(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Vh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,r=mu(e);Mr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(Na(f,""),n.flags&=-33);var m=mu(e);Mr(e,m,f);break;case 3:case 4:var b=n.stateNode.containerInfo,E=mu(e);gu(e,E,b);break;default:throw Error(u(161))}}catch(R){we(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xh(e,t.alternate,t),t=t.sibling}function va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),va(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yh(t,t.return,n),va(t);break;case 27:Si(t.stateNode);case 26:case 5:It(t,t.return),va(t);break;case 22:t.memoizedState===null&&va(t);break;case 30:va(t);break;default:va(t)}e=e.sibling}}function xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:xn(i,r,n),fi(4,r);break;case 1:if(xn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){we(a,a.return,E)}if(a=r,i=a.updateQueue,i!==null){var m=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Cd(b[i],m)}catch(E){we(a,a.return,E)}}n&&f&64&&Gh(r),di(r,r.return);break;case 27:Qh(r);case 26:case 5:xn(i,r,n),n&&a===null&&f&4&&qh(r),di(r,r.return);break;case 12:xn(i,r,n);break;case 31:xn(i,r,n),n&&f&4&&$h(i,r);break;case 13:xn(i,r,n),n&&f&4&&Wh(i,r);break;case 22:r.memoizedState===null&&xn(i,r,n),di(r,r.return);break;case 30:break;default:xn(i,r,n)}t=t.sibling}}function bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pl(n))}function xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e))}function Kt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ih(e,t,n,a),t=t.sibling}function Ih(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,n,a),i&2048&&fi(9,t);break;case 1:Kt(e,t,n,a);break;case 3:Kt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e)));break;case 12:if(i&2048){Kt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){we(t,t.return,b)}}else Kt(e,t,n,a);break;case 31:Kt(e,t,n,a);break;case 13:Kt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Kt(e,t,n,a):hi(e,t):r._visibility&2?Kt(e,t,n,a):(r._visibility|=2,nl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&bu(f,t);break;case 24:Kt(e,t,n,a),i&2048&&xu(t.alternate,t);break;default:Kt(e,t,n,a)}}function nl(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,f=t,m=n,b=a,E=f.flags;switch(f.tag){case 0:case 11:case 15:nl(r,f,m,b,i),fi(8,f);break;case 23:break;case 22:var R=f.stateNode;f.memoizedState!==null?R._visibility&2?nl(r,f,m,b,i):hi(r,f):(R._visibility|=2,nl(r,f,m,b,i)),i&&E&2048&&bu(f.alternate,f);break;case 24:nl(r,f,m,b,i),i&&E&2048&&xu(f.alternate,f);break;default:nl(r,f,m,b,i)}t=t.sibling}}function hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:hi(n,a),i&2048&&bu(a.alternate,a);break;case 24:hi(n,a),i&2048&&xu(a.alternate,a);break;default:hi(n,a)}t=t.sibling}}var mi=8192;function al(e,t,n){if(e.subtreeFlags&mi)for(e=e.child;e!==null;)em(e,t,n),e=e.sibling}function em(e,t,n){switch(e.tag){case 26:al(e,t,n),e.flags&mi&&e.memoizedState!==null&&ax(n,Qt,e.memoizedState,e.memoizedProps);break;case 5:al(e,t,n);break;case 3:case 4:var a=Qt;Qt=Kr(e.stateNode.containerInfo),al(e,t,n),Qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=mi,mi=16777216,al(e,t,n),mi=a):al(e,t,n));break;default:al(e,t,n)}}function tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,am(a,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:gi(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:gi(e);break;case 12:gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Br(e)):gi(e);break;default:gi(e)}}function Br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,am(a,e)}tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),Br(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Br(t));break;default:Br(t)}e=e.sibling}}function am(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:Gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Pl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var i=a.sibling,r=a.return;if(Zh(a),a===n){Fe=null;break e}if(i!==null){i.return=r,Fe=i;break e}Fe=r}}}var xb={getCacheForType:function(e){var t=et(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return et(Ve).controller.signal}},yb=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ce=null,fe=null,he=0,ze=0,wt=null,Yn=!1,ll=!1,yu=!1,yn=0,Le=0,qn=0,Sa=0,vu=0,_t=0,il=0,pi=null,dt=null,Su=!1,Or=0,lm=0,Dr=1/0,kr=null,Vn=null,Je=0,Qn=null,rl=null,vn=0,ju=0,zu=null,im=null,bi=0,wu=null;function Et(){return(Se&2)!==0&&he!==0?he&-he:B.T!==null?Mu():Sf()}function rm(){if(_t===0)if((he&536870912)===0||ge){var e=Vi;Vi<<=1,(Vi&3932160)===0&&(Vi=262144),_t=e}else _t=536870912;return e=jt.current,e!==null&&(e.flags|=32),_t}function ht(e,t,n){(e===Ce&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Kn(e,he,_t,!1)),Hl(e,n),((Se&2)===0||e!==Ce)&&(e===Ce&&((Se&2)===0&&(Sa|=n),Le===4&&Kn(e,he,_t,!1)),en(e))}function om(e,t,n){if((Se&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ul(e,t),i=a?jb(e,t):Eu(e,t,!0),r=a;do{if(i===0){ll&&!a&&Kn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!vb(n)){i=Eu(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=pi;var b=m.current.memoizedState.isDehydrated;if(b&&(ol(m,f).flags|=256),f=Eu(m,f,!1),f!==2){if(yu&&!b){m.errorRecoveryDisabledLanes|=r,Sa|=r,i=4;break e}r=dt,dt=i,r!==null&&(dt===null?dt=r:dt.push.apply(dt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){ol(e,0),Kn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Kn(a,t,_t,!Yn);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Or+300-bt(),10<i)){if(Kn(a,t,_t,!Yn),Ki(a,0,!0)!==0)break e;vn=t,a.timeoutHandle=Hm(sm.bind(null,a,n,dt,kr,Su,t,_t,Sa,il,Yn,r,"Throttled",-0,0),i);break e}sm(a,n,dt,kr,Su,t,_t,Sa,il,Yn,r,null,-0,0)}}break}while(!0);en(e)}function sm(e,t,n,a,i,r,f,m,b,E,R,k,A,C){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},em(t,r,k);var $=(r&62914560)===r?Or-bt():(r&4194048)===r?lm-bt():0;if($=lx(k,$),$!==null){vn=r,e.cancelPendingCommit=$(pm.bind(null,e,t,r,n,a,i,f,m,b,R,k,null,A,C)),Kn(e,r,f,!E);return}}pm(e,t,r,n,a,i,f,m,b)}function vb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!vt(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t,n,a){t&=~vu,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-yt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&xf(e,n,t)}function Nr(){return(Se&6)===0?(xi(0),!1):!0}function _u(){if(fe!==null){if(ze===0)var e=fe.return;else e=fe,un=da=null,Ys(e),Fa=null,ei=0,e=fe;for(;e!==null;)Lh(e.alternate,e),e=e.return;fe=null}}function ol(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Gb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,_u(),Ce=e,fe=n=on(e.current,null),he=t,ze=0,wt=null,Yn=!1,ll=Ul(e,t),yu=!1,il=_t=vu=Sa=qn=Le=0,dt=pi=null,Su=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-yt(a),r=1<<i;t|=e[i],a&=~r}return yn=t,ar(),n}function um(e,t){le=null,B.H=si,t===Wa||t===fr?(t=_d(),ze=3):t===Cs?(t=_d(),ze=4):ze=t===au?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,fe===null&&(Le=1,_r(e,Dt(t,e.current)))}function cm(){var e=jt.current;return e===null?!0:(he&4194048)===he?Ht===null:(he&62914560)===he||(he&536870912)!==0?e===Ht:!1}function fm(){var e=B.H;return B.H=si,e===null?si:e}function dm(){var e=B.A;return B.A=xb,e}function Ur(){Le=4,Yn||(he&4194048)!==he&&jt.current!==null||(ll=!0),(qn&134217727)===0&&(Sa&134217727)===0||Ce===null||Kn(Ce,he,_t,!1)}function Eu(e,t,n){var a=Se;Se|=2;var i=fm(),r=dm();(Ce!==e||he!==t)&&(kr=null,ol(e,t)),t=!1;var f=Le;e:do try{if(ze!==0&&fe!==null){var m=fe,b=wt;switch(ze){case 8:_u(),f=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var E=ze;if(ze=0,wt=null,sl(e,m,b,E),n&&ll){f=0;break e}break;default:E=ze,ze=0,wt=null,sl(e,m,b,E)}}Sb(),f=Le;break}catch(R){um(e,R)}while(!0);return t&&e.shellSuspendCounter++,un=da=null,Se=a,B.H=i,B.A=r,fe===null&&(Ce=null,he=0,ar()),f}function Sb(){for(;fe!==null;)hm(fe)}function jb(e,t){var n=Se;Se|=2;var a=fm(),i=dm();Ce!==e||he!==t?(kr=null,Dr=bt()+500,ol(e,t)):ll=Ul(e,t);e:do try{if(ze!==0&&fe!==null){t=fe;var r=wt;t:switch(ze){case 1:ze=0,wt=null,sl(e,t,r,1);break;case 2:case 9:if(zd(r)){ze=0,wt=null,mm(t);break}t=function(){ze!==2&&ze!==9||Ce!==e||(ze=7),en(e)},r.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:zd(r)?(ze=0,wt=null,mm(t)):(ze=0,wt=null,sl(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var m=fe;if(f?Im(f):m.stateNode.complete){ze=0,wt=null;var b=m.sibling;if(b!==null)fe=b;else{var E=m.return;E!==null?(fe=E,Hr(E)):fe=null}break t}}ze=0,wt=null,sl(e,t,r,5);break;case 6:ze=0,wt=null,sl(e,t,r,6);break;case 8:_u(),Le=6;break e;default:throw Error(u(462))}}zb();break}catch(R){um(e,R)}while(!0);return un=da=null,B.H=a,B.A=i,Se=n,fe!==null?0:(Ce=null,he=0,ar(),Le)}function zb(){for(;fe!==null&&!Xp();)hm(fe)}function hm(e){var t=Uh(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Hr(e):fe=t}function mm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Rh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Ys(t);default:Lh(n,t),t=fe=dd(t,yn),t=Uh(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Hr(e):fe=t}function sl(e,t,n,a){un=da=null,Ys(t),Fa=null,ei=0;var i=t.return;try{if(fb(e,i,t,n,he)){Le=1,_r(e,Dt(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Le=1,_r(e,Dt(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:ll||(he&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=jt.current,a!==null&&a.tag===13&&(a.flags|=16384))),gm(t,e)):Hr(t)}function Hr(e){var t=e;do{if((t.flags&32768)!==0){gm(t,Yn);return}e=t.return;var n=mb(t.alternate,t,yn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Le===0&&(Le=5)}function gm(e,t){do{var n=gb(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Le=6,fe=null}function pm(e,t,n,a,i,r,f,m,b){e.cancelPendingCommit=null;do Lr();while(Je!==0);if((Se&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=ms,n1(e,n,r,f,m,b),e===Ce&&(fe=Ce=null,he=0),rl=t,Qn=e,vn=n,ju=r,zu=i,im=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tb(Yi,function(){return Sm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,i=V.p,V.p=2,f=Se,Se|=4;try{pb(e,t,n)}finally{Se=f,V.p=i,B.T=a}}Je=1,bm(),xm(),ym()}}function bm(){if(Je===1){Je=0;var e=Qn,t=rl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=Se;Se|=4;try{Fh(t,e);var r=Hu,f=ad(e.containerInfo),m=r.focusedElem,b=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&nd(m.ownerDocument.documentElement,m)){if(b!==null&&us(m)){var E=b.start,R=b.end;if(R===void 0&&(R=E),"selectionStart"in m)m.selectionStart=E,m.selectionEnd=Math.min(R,m.value.length);else{var k=m.ownerDocument||document,A=k&&k.defaultView||window;if(A.getSelection){var C=A.getSelection(),$=m.textContent.length,te=Math.min(b.start,$),Ae=b.end===void 0?te:Math.min(b.end,$);!C.extend&&te>Ae&&(f=Ae,Ae=te,te=f);var z=td(m,te),v=td(m,Ae);if(z&&v&&(C.rangeCount!==1||C.anchorNode!==z.node||C.anchorOffset!==z.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var _=k.createRange();_.setStart(z.node,z.offset),C.removeAllRanges(),te>Ae?(C.addRange(_),C.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),C.addRange(_))}}}}for(k=[],C=m;C=C.parentNode;)C.nodeType===1&&k.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<k.length;m++){var D=k[m];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Fr=!!Uu,Hu=Uu=null}finally{Se=i,V.p=a,B.T=n}}e.current=t,Je=2}}function xm(){if(Je===2){Je=0;var e=Qn,t=rl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=Se;Se|=4;try{Xh(e,t.alternate,t)}finally{Se=i,V.p=a,B.T=n}}Je=3}}function ym(){if(Je===4||Je===3){Je=0,Zp();var e=Qn,t=rl,n=vn,a=im;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,rl=Qn=null,vm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Vn=null),Qo(n),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,i=V.p,V.p=2,B.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var m=a[f];r(m.value,{componentStack:m.stack})}}finally{B.T=t,V.p=i}}(vn&3)!==0&&Lr(),en(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===wu?bi++:(bi=0,wu=e):bi=0,xi(0)}}function vm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pl(t)))}function Lr(){return bm(),xm(),ym(),Sm()}function Sm(){if(Je!==5)return!1;var e=Qn,t=ju;ju=0;var n=Qo(vn),a=B.T,i=V.p;try{V.p=32>n?32:n,B.T=null,n=zu,zu=null;var r=Qn,f=vn;if(Je=0,rl=Qn=null,vn=0,(Se&6)!==0)throw Error(u(331));var m=Se;if(Se|=4,nm(r.current),Ih(r,r.current,f,n),Se=m,xi(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Nl,r)}catch{}return!0}finally{V.p=i,B.T=a,vm(e,t)}}function jm(e,t,n){t=Dt(n,t),t=nu(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(Hl(e,2),en(e))}function we(e,t,n){if(e.tag===3)jm(e,e,n);else for(;t!==null;){if(t.tag===3){jm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=Dt(n,e),n=zh(2),a=Un(t,n,2),a!==null&&(wh(n,a,t,e),Hl(a,2),en(a));break}}t=t.return}}function Tu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new yb;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(yu=!0,i.add(n),e=wb.bind(null,e,t,n),t.then(e,e))}function wb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(he&n)===n&&(Le===4||Le===3&&(he&62914560)===he&&300>bt()-Or?(Se&2)===0&&ol(e,0):vu|=n,il===he&&(il=0)),en(e)}function zm(e,t){t===0&&(t=bf()),e=ua(e,t),e!==null&&(Hl(e,t),en(e))}function _b(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zm(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),zm(e,n)}function Tb(e,t){return Go(e,t)}var Gr=null,ul=null,Au=!1,Yr=!1,Cu=!1,Xn=0;function en(e){e!==ul&&e.next===null&&(ul===null?Gr=ul=e:ul=ul.next=e),Yr=!0,Au||(Au=!0,Cb())}function xi(e,t){if(!Cu&&Yr){Cu=!0;do for(var n=!1,a=Gr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,m=a.pingedLanes;r=(1<<31-yt(42|e)+1)-1,r&=i&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Tm(a,r))}else r=he,r=Ki(a,a===Ce?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Ul(a,r)||(n=!0,Tm(a,r));a=a.next}while(n);Cu=!1}}function Ab(){wm()}function wm(){Yr=Au=!1;var e=0;Xn!==0&&Lb()&&(e=Xn);for(var t=bt(),n=null,a=Gr;a!==null;){var i=a.next,r=_m(a,t);r===0?(a.next=null,n===null?Gr=i:n.next=i,i===null&&(ul=n)):(n=a,(e!==0||(r&3)!==0)&&(Yr=!0)),a=i}Je!==0&&Je!==5||xi(e),Xn!==0&&(Xn=0)}function _m(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-yt(r),m=1<<f,b=i[f];b===-1?((m&n)===0||(m&a)!==0)&&(i[f]=t1(m,t)):b<=t&&(e.expiredLanes|=m),r&=~m}if(t=Ce,n=he,n=Ki(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Yo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Yo(a),Qo(n)){case 2:case 8:n=gf;break;case 32:n=Yi;break;case 268435456:n=pf;break;default:n=Yi}return a=Em.bind(null,e),n=Go(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Yo(a),e.callbackPriority=2,e.callbackNode=null,2}function Em(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var a=he;return a=Ki(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(om(e,a,t),_m(e,bt()),e.callbackNode!=null&&e.callbackNode===n?Em.bind(null,e):null)}function Tm(e,t){if(Lr())return null;om(e,t,!0)}function Cb(){Yb(function(){(Se&6)!==0?Go(mf,Ab):wm()})}function Mu(){if(Xn===0){var e=Ja;e===0&&(e=qi,qi<<=1,(qi&261888)===0&&(qi=256)),Xn=e}return Xn}function Am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function Cm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Mb(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Am((i[ot]||null).action),f=a.submitter;f&&(t=(t=f[ot]||null)?Am(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new Ii("action","action",null,a,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xn!==0){var b=f?Cm(i,f):new FormData(i);Ws(n,{pending:!0,data:b,method:i.method,action:r},null,b)}}else typeof r=="function"&&(m.preventDefault(),b=f?Cm(i,f):new FormData(i),Ws(n,{pending:!0,data:b,method:i.method,action:r},r,b))},currentTarget:i}]})}}for(var Ru=0;Ru<hs.length;Ru++){var Bu=hs[Ru],Rb=Bu.toLowerCase(),Bb=Bu[0].toUpperCase()+Bu.slice(1);Vt(Rb,"on"+Bb)}Vt(rd,"onAnimationEnd"),Vt(od,"onAnimationIteration"),Vt(sd,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(J1,"onTransitionRun"),Vt($1,"onTransitionStart"),Vt(W1,"onTransitionCancel"),Vt(ud,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yi));function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var m=a[f],b=m.instance,E=m.currentTarget;if(m=m.listener,b!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=E;try{r(i)}catch(R){nr(R)}i.currentTarget=null,r=b}else for(f=0;f<a.length;f++){if(m=a[f],b=m.instance,E=m.currentTarget,m=m.listener,b!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=E;try{r(i)}catch(R){nr(R)}i.currentTarget=null,r=b}}}}function de(e,t){var n=t[Ko];n===void 0&&(n=t[Ko]=new Set);var a=e+"__bubble";n.has(a)||(Rm(t,e,2,!1),n.add(a))}function Ou(e,t,n){var a=0;t&&(a|=4),Rm(n,e,a,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Du(e){if(!e[qr]){e[qr]=!0,wf.forEach(function(n){n!=="selectionchange"&&(Ob.has(n)||Ou(n,!1,e),Ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Ou("selectionchange",!1,t))}}function Rm(e,t,n,a){switch(r0(t)){case 2:var i=ox;break;case 8:i=sx;break;default:i=$u}n=i.bind(null,t,n,e),i=void 0,!es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ku(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var m=a.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=Ra(m),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=r=f;continue e}m=m.parentNode}}a=a.return}Nf(function(){var E=r,R=Po(n),k=[];e:{var A=cd.get(e);if(A!==void 0){var C=Ii,$=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":C=E1;break;case"focusin":$="focus",C=ls;break;case"focusout":$="blur",C=ls;break;case"beforeblur":case"afterblur":C=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=C1;break;case rd:case od:case sd:C=b1;break;case ud:C=R1;break;case"scroll":case"scrollend":C=d1;break;case"wheel":C=O1;break;case"copy":case"cut":case"paste":C=y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Yf;break;case"toggle":case"beforetoggle":C=k1}var te=(t&4)!==0,Ae=!te&&(e==="scroll"||e==="scrollend"),z=te?A!==null?A+"Capture":null:A;te=[];for(var v=E,_;v!==null;){var D=v;if(_=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||_===null||z===null||(D=Yl(v,z),D!=null&&te.push(vi(v,D,_))),Ae)break;v=v.return}0<te.length&&(A=new C(A,$,null,n,R),k.push({event:A,listeners:te}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&n!==Fo&&($=n.relatedTarget||n.fromElement)&&(Ra($)||$[Ma]))break e;if((C||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,C?($=n.relatedTarget||n.toElement,C=E,$=$?Ra($):null,$!==null&&(Ae=g($),te=$.tag,$!==Ae||te!==5&&te!==27&&te!==6)&&($=null)):(C=null,$=E),C!==$)){if(te=Lf,D="onMouseLeave",z="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(te=Yf,D="onPointerLeave",z="onPointerEnter",v="pointer"),Ae=C==null?A:Gl(C),_=$==null?A:Gl($),A=new te(D,v+"leave",C,n,R),A.target=Ae,A.relatedTarget=_,D=null,Ra(R)===E&&(te=new te(z,v+"enter",$,n,R),te.target=_,te.relatedTarget=Ae,D=te),Ae=D,C&&$)t:{for(te=Db,z=C,v=$,_=0,D=z;D;D=te(D))_++;D=0;for(var I=v;I;I=te(I))D++;for(;0<_-D;)z=te(z),_--;for(;0<D-_;)v=te(v),D--;for(;_--;){if(z===v||v!==null&&z===v.alternate){te=z;break t}z=te(z),v=te(v)}te=null}else te=null;C!==null&&Bm(k,A,C,te,!1),$!==null&&Ae!==null&&Bm(k,Ae,$,te,!0)}}e:{if(A=E?Gl(E):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var ye=$f;else if(Zf(A))if(Wf)ye=K1;else{ye=V1;var W=q1}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&Wo(E.elementType)&&(ye=$f):ye=Q1;if(ye&&(ye=ye(e,E))){Jf(k,ye,n,R);break e}W&&W(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&$o(A,"number",A.value)}switch(W=E?Gl(E):window,e){case"focusin":(Zf(W)||W.contentEditable==="true")&&(Ga=W,cs=E,$l=null);break;case"focusout":$l=cs=Ga=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,ld(k,n,R);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":ld(k,n,R)}var oe;if(rs)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else La?Kf(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(qf&&n.locale!=="ko"&&(La||me!=="onCompositionStart"?me==="onCompositionEnd"&&La&&(oe=Uf()):(Mn=R,ts="value"in Mn?Mn.value:Mn.textContent,La=!0)),W=Vr(E,me),0<W.length&&(me=new Gf(me,e,null,n,R),k.push({event:me,listeners:W}),oe?me.data=oe:(oe=Xf(n),oe!==null&&(me.data=oe)))),(oe=U1?H1(e,n):L1(e,n))&&(me=Vr(E,"onBeforeInput"),0<me.length&&(W=new Gf("onBeforeInput","beforeinput",null,n,R),k.push({event:W,listeners:me}),W.data=oe)),Mb(k,e,E,n,R)}Mm(k,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Yl(e,n),i!=null&&a.unshift(vi(e,i,r)),i=Yl(e,t),i!=null&&a.push(vi(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Db(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bm(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var m=n,b=m.alternate,E=m.stateNode;if(m=m.tag,b!==null&&b===a)break;m!==5&&m!==26&&m!==27||E===null||(b=E,i?(E=Yl(n,r),E!=null&&f.unshift(vi(n,E,b))):i||(E=Yl(n,r),E!=null&&f.push(vi(n,E,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var kb=/\r\n?/g,Nb=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(kb,`
`).replace(Nb,"")}function Dm(e,t){return t=Om(t),Om(e)===t}function Te(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Na(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Na(e,""+a);break;case"className":Zi(e,"class",a);break;case"tabIndex":Zi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,n,a);break;case"style":Df(e,a,r);break;case"data":if(t!=="object"){Zi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=$i(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=$i(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ln);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=$i(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Xi(e,"popover",a);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Xi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=c1.get(n)||n,Xi(e,n,a))}}function Nu(e,t,n,a,i,r){switch(n){case"style":Df(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Na(e,a):(typeof a=="number"||typeof a=="bigint")&&Na(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ln);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[ot]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Xi(e,n,a)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,r,f,n,null)}}i&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var m=r=f=i=null,b=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var R=n[a];if(R!=null)switch(a){case"name":i=R;break;case"type":f=R;break;case"checked":b=R;break;case"defaultChecked":E=R;break;case"value":r=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:Te(e,t,a,R,n,null)}}Mf(e,r,m,b,E,f,i,!1);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(m=n[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":a=m;default:Te(e,t,i,m,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ka(e,!!a,t,!1):n!=null&&ka(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(m=n[f],m!=null))switch(f){case"value":a=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Te(e,t,f,m,n,null)}Bf(e,a,i,r);return;case"option":for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null)&&(b==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Te(e,t,b,a,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<yi.length;a++)de(yi[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,E,a,n,null)}return;default:if(Wo(t)){for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!==void 0&&Nu(e,t,R,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Te(e,t,m,a,n,null))}function Ub(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,m=null,b=null,E=null,R=null;for(C in n){var k=n[C];if(n.hasOwnProperty(C)&&k!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=k;default:a.hasOwnProperty(C)||Te(e,t,C,null,a,k)}}for(var A in a){var C=a[A];if(k=n[A],a.hasOwnProperty(A)&&(C!=null||k!=null))switch(A){case"type":r=C;break;case"name":i=C;break;case"checked":E=C;break;case"defaultChecked":R=C;break;case"value":f=C;break;case"defaultValue":m=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==k&&Te(e,t,A,C,a,k)}}Jo(e,f,m,b,E,R,r,i);return;case"select":C=f=m=A=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":C=b;default:a.hasOwnProperty(r)||Te(e,t,r,null,a,b)}for(i in a)if(r=a[i],b=n[i],a.hasOwnProperty(i)&&(r!=null||b!=null))switch(i){case"value":A=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==b&&Te(e,t,i,r,a,b)}t=m,n=f,a=C,A!=null?ka(e,!!n,A,!1):!!a!=!!n&&(t!=null?ka(e,!!n,t,!0):ka(e,!!n,n?[]:"",!1));return;case"textarea":C=A=null;for(m in n)if(i=n[m],n.hasOwnProperty(m)&&i!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Te(e,t,m,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Te(e,t,f,i,a,r)}Rf(e,A,C);return;case"option":for(var $ in n)A=n[$],n.hasOwnProperty($)&&A!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:Te(e,t,$,null,a,A));for(b in a)A=a[b],C=n[b],a.hasOwnProperty(b)&&A!==C&&(A!=null||C!=null)&&(b==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Te(e,t,b,A,a,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)A=n[te],n.hasOwnProperty(te)&&A!=null&&!a.hasOwnProperty(te)&&Te(e,t,te,null,a,A);for(E in a)if(A=a[E],C=n[E],a.hasOwnProperty(E)&&A!==C&&(A!=null||C!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:Te(e,t,E,A,a,C)}return;default:if(Wo(t)){for(var Ae in n)A=n[Ae],n.hasOwnProperty(Ae)&&A!==void 0&&!a.hasOwnProperty(Ae)&&Nu(e,t,Ae,void 0,a,A);for(R in a)A=a[R],C=n[R],!a.hasOwnProperty(R)||A===C||A===void 0&&C===void 0||Nu(e,t,R,A,a,C);return}}for(var z in n)A=n[z],n.hasOwnProperty(z)&&A!=null&&!a.hasOwnProperty(z)&&Te(e,t,z,null,a,A);for(k in a)A=a[k],C=n[k],!a.hasOwnProperty(k)||A===C||A==null&&C==null||Te(e,t,k,A,a,C)}function km(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],r=i.transferSize,f=i.initiatorType,m=i.duration;if(r&&m&&km(f)){for(f=0,m=i.responseEnd,a+=1;a<n.length;a++){var b=n[a],E=b.startTime;if(E>m)break;var R=b.transferSize,k=b.initiatorType;R&&km(k)&&(b=b.responseEnd,f+=R*(b<m?1:(m-E)/(b-E)))}if(--a,t+=8*(r+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uu=null,Hu=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function Nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gu=null;function Lb(){var e=window.event;return e&&e.type==="popstate"?e===Gu?!1:(Gu=e,!0):(Gu=null,!1)}var Hm=typeof setTimeout=="function"?setTimeout:void 0,Gb=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(e){return Lm.resolve(null).then(e).catch(qb)}:Hm;function qb(e){setTimeout(function(){throw e})}function Zn(e){return e==="head"}function Gm(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),hl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Si(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Si(n);for(var r=n.firstChild;r;){var f=r.nextSibling,m=r.nodeName;r[Ll]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=f}}else n==="body"&&Si(e.ownerDocument.body);n=i}while(n);hl(t)}function Ym(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yu(n),Xo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vb(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Qb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lt(e.nextSibling),e===null))return null;return e}function qm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function qu(e){return e.data==="$?"||e.data==="$~"}function Vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qu=null;function Vm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Lt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Km(e,t,n){switch(t=Qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Si(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xo(e)}var Gt=new Map,Xm=new Set;function Kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=V.d;V.d={f:Xb,r:Zb,D:Jb,C:$b,L:Wb,m:Fb,X:Ib,S:Pb,M:ex};function Xb(){var e=Sn.f(),t=Nr();return e||t}function Zb(e){var t=Ba(e);t!==null&&t.tag===5&&t.type==="form"?uh(t):Sn.r(e)}var cl=typeof document>"u"?null:document;function Zm(e,t,n){var a=cl;if(a&&typeof t=="string"&&t){var i=Bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Xm.has(i)||(Xm.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function Jb(e){Sn.D(e),Zm("dns-prefetch",e,null)}function $b(e,t){Sn.C(e,t),Zm("preconnect",e,t)}function Wb(e,t,n){Sn.L(e,t,n);var a=cl;if(a&&e&&t){var i='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Bt(n.imageSizes)+'"]')):i+='[href="'+Bt(e)+'"]';var r=i;switch(t){case"style":r=fl(e);break;case"script":r=dl(e)}Gt.has(r)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Gt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ji(r))||t==="script"&&a.querySelector(zi(r))||(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function Fb(e,t){Sn.m(e,t);var n=cl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Bt(a)+'"][href="'+Bt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=dl(e)}if(!Gt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Gt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zi(r)))return}a=n.createElement("link"),nt(a,"link",e),We(a),n.head.appendChild(a)}}}function Pb(e,t,n){Sn.S(e,t,n);var a=cl;if(a&&e){var i=Oa(a).hoistableStyles,r=fl(e);t=t||"default";var f=i.get(r);if(!f){var m={loading:0,preload:null};if(f=a.querySelector(ji(r)))m.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Gt.get(r))&&Ku(e,n);var b=f=a.createElement("link");We(b),nt(b,"link",e),b._p=new Promise(function(E,R){b.onload=E,b.onerror=R}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Xr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(r,f)}}}function Ib(e,t){Sn.X(e,t);var n=cl;if(n&&e){var a=Oa(n).hoistableScripts,i=dl(e),r=a.get(i);r||(r=n.querySelector(zi(i)),r||(e=w({src:e,async:!0},t),(t=Gt.get(i))&&Xu(e,t),r=n.createElement("script"),We(r),nt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function ex(e,t){Sn.M(e,t);var n=cl;if(n&&e){var a=Oa(n).hoistableScripts,i=dl(e),r=a.get(i);r||(r=n.querySelector(zi(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Gt.get(i))&&Xu(e,t),r=n.createElement("script"),We(r),nt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Jm(e,t,n,a){var i=(i=re.current)?Kr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fl(n.href),n=Oa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fl(n.href);var r=Oa(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ji(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Gt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Gt.set(e,n),r||tx(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=dl(n),n=Oa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function fl(e){return'href="'+Bt(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function $m(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function tx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",n),We(t),e.head.appendChild(t))}function dl(e){return'[src="'+Bt(e)+'"]'}function zi(e){return"script[async]"+e}function Wm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(a)return t.instance=a,We(a),a;var i=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),nt(a,"style",i),Xr(a,n.precedence,e),t.instance=a;case"stylesheet":i=fl(n.href);var r=e.querySelector(ji(i));if(r)return t.state.loading|=4,t.instance=r,We(r),r;a=$m(n),(i=Gt.get(i))&&Ku(a,i),r=(e.ownerDocument||e).createElement("link"),We(r);var f=r;return f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),nt(r,"link",a),t.state.loading|=4,Xr(r,n.precedence,e),t.instance=r;case"script":return r=dl(n.src),(i=e.querySelector(zi(r)))?(t.instance=i,We(i),i):(a=n,(i=Gt.get(r))&&(a=w({},n),Xu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),We(i),nt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Xr(a,n.precedence,e));return t.instance}function Xr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var m=a[f];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zr=null;function Fm(e,t,n){if(Zr===null){var a=new Map,i=Zr=new Map;i.set(n,a)}else i=Zr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[Ll]||r[Pe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=a.get(f);m?m.push(r):a.set(f,[r])}}return a}function Pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Im(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ax(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=fl(a.href),r=t.querySelector(ji(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,We(r);return}r=t.ownerDocument||t,a=$m(a),(i=Gt.get(i))&&Ku(a,i),r=r.createElement("link"),We(r);var f=r;f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),nt(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Jr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zu=0;function lx(e,t){return e.stylesheets&&e.count===0&&Wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Zu===0&&(Zu=62500*Hb());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Zu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Jr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $r=null;function Wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$r=new Map,t.forEach(ix,e),$r=null,Jr.call(e))}function ix(e,t){if(!(t.state.loading&4)){var n=$r.get(e);if(n)var a=n.get(null);else{n=new Map,$r.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Jr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:H,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function rx(e,t,n,a,i,r,f,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.hiddenUpdates=qo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function e0(e,t,n,a,i,r,f,m,b,E,R,k){return e=new rx(e,t,n,f,b,E,R,k,m),t=1,r===!0&&(t|=24),r=St(3,null,null,t),e.current=r,r.stateNode=e,t=Es(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Ms(r),e}function t0(e){return e?(e=Va,e):Va}function n0(e,t,n,a,i,r){i=t0(i),a.context===null?a.context=i:a.pendingContext=i,a=Nn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Un(e,a,t),n!==null&&(ht(n,e,t),ni(n,e,t))}function a0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ju(e,t){a0(e,t),(e=e.alternate)&&a0(e,t)}function l0(e){if(e.tag===13||e.tag===31){var t=ua(e,67108864);t!==null&&ht(t,e,67108864),Ju(e,67108864)}}function i0(e){if(e.tag===13||e.tag===31){var t=Et();t=Vo(t);var n=ua(e,t);n!==null&&ht(n,e,t),Ju(e,t)}}var Fr=!0;function ox(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=2,$u(e,t,n,a)}finally{V.p=r,B.T=i}}function sx(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=8,$u(e,t,n,a)}finally{V.p=r,B.T=i}}function $u(e,t,n,a){if(Fr){var i=Wu(a);if(i===null)ku(e,t,a,Pr,n),o0(e,a);else if(cx(i,e,t,n,a))a.stopPropagation();else if(o0(e,a),t&4&&-1<ux.indexOf(e)){for(;i!==null;){var r=Ba(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=la(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var b=1<<31-yt(f);m.entanglements[1]|=b,f&=~b}en(r),(Se&6)===0&&(Dr=bt()+500,xi(0))}}break;case 31:case 13:m=ua(r,2),m!==null&&ht(m,r,2),Nr(),Ju(r,2)}if(r=Wu(a),r===null&&ku(e,t,a,Pr,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else ku(e,t,a,null,n)}}function Wu(e){return e=Po(e),Fu(e)}var Pr=null;function Fu(e){if(Pr=null,e=Ra(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pr=e,null}function r0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jp()){case mf:return 2;case gf:return 8;case Yi:case $p:return 32;case pf:return 268435456;default:return 32}default:return 32}}var Pu=!1,Jn=null,$n=null,Wn=null,_i=new Map,Ei=new Map,Fn=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o0(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ti(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Ba(t),t!==null&&l0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cx(e,t,n,a,i){switch(t){case"focusin":return Jn=Ti(Jn,e,t,n,a,i),!0;case"dragenter":return $n=Ti($n,e,t,n,a,i),!0;case"mouseover":return Wn=Ti(Wn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return _i.set(r,Ti(_i.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Ei.set(r,Ti(Ei.get(r)||null,e,t,n,a,i)),!0}return!1}function s0(e){var t=Ra(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,jf(e.priority,function(){i0(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,jf(e.priority,function(){i0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fo=a,n.target.dispatchEvent(a),Fo=null}else return t=Ba(n),t!==null&&l0(t),e.blockedOn=n,!1;t.shift()}return!0}function u0(e,t,n){Ir(e)&&n.delete(t)}function fx(){Pu=!1,Jn!==null&&Ir(Jn)&&(Jn=null),$n!==null&&Ir($n)&&($n=null),Wn!==null&&Ir(Wn)&&(Wn=null),_i.forEach(u0),Ei.forEach(u0)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Pu||(Pu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,fx)))}var to=null;function c0(e){to!==e&&(to=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){to===e&&(to=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Fu(a||n)===null)continue;break}var r=Ba(n);r!==null&&(e.splice(t,3),t-=3,Ws(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function hl(e){function t(b){return eo(b,e)}Jn!==null&&eo(Jn,e),$n!==null&&eo($n,e),Wn!==null&&eo(Wn,e),_i.forEach(t),Ei.forEach(t);for(var n=0;n<Fn.length;n++){var a=Fn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Fn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[ot]||null;if(typeof r=="function")f||c0(n);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ot]||null)m=f.formAction;else if(Fu(i)!==null)continue}else m=f.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),c0(n)}}}function f0(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Iu(e){this._internalRoot=e}no.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Et();n0(n,a,e,t,null,null)},no.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;n0(e.current,2,null,e,null,null),Nr(),t[Ma]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&s0(e)}};var d0=s.version;if(d0!=="19.2.3")throw Error(u(527,d0,"19.2.3"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var dx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Nl=ao.inject(dx),xt=ao}catch{}}return Ci.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",i=yh,r=vh,f=Sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=e0(e,1,!1,null,null,n,a,null,i,r,f,f0),e[Ma]=t.current,Du(e),new Iu(t)},Ci.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,i="",r=yh,f=vh,m=Sh,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=e0(e,1,!0,t,n??null,a,i,b,r,f,m,f0),t.context=t0(null),n=t.current,a=Et(),a=Vo(a),i=Nn(a),i.callback=null,Un(n,i,a),n=a,t.current.lanes=n,Hl(t,n),en(t),e[Ma]=t.current,Du(e),new no(t)},Ci.version="19.2.3",Ci}var j0;function zx(){if(j0)return nc.exports;j0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),nc.exports=jx(),nc.exports}var wx=zx(),lt=function(){return lt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(s[g]=c[g])}return s},lt.apply(this,arguments)};function zo(l,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,g;u<d;u++)(g||!(u in s))&&(g||(g=Array.prototype.slice.call(s,0,u)),g[u]=s[u]);return l.concat(g||Array.prototype.slice.call(s))}var Oe="-ms-",ki="-moz-",je="-webkit-",ig="comm",Co="rule",Pc="decl",_x="@import",Ex="@namespace",rg="@keyframes",Tx="@layer",og=Math.abs,Ic=String.fromCharCode,qc=Object.assign;function Ax(l,s){return $e(l,0)^45?(((s<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function sg(l){return l.trim()}function zn(l,s){return(l=s.exec(l))?l[0]:l}function se(l,s,c){return l.replace(s,c)}function po(l,s,c){return l.indexOf(s,c)}function $e(l,s){return l.charCodeAt(s)|0}function _a(l,s,c){return l.slice(s,c)}function Xt(l){return l.length}function ug(l){return l.length}function Bi(l,s){return s.push(l),l}function Cx(l,s){return l.map(s).join("")}function z0(l,s){return l.filter(function(c){return!zn(c,s)})}var Mo=1,Cl=1,cg=0,Yt=0,Ze=0,Bl="";function Ro(l,s,c,u,d,g,p,j){return{value:l,root:s,parent:c,type:u,props:d,children:g,line:Mo,column:Cl,length:p,return:"",siblings:j}}function na(l,s){return qc(Ro("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function ml(l){for(;l.root;)l=na(l.root,{children:[l]});Bi(l,l.siblings)}function Mx(){return Ze}function Rx(){return Ze=Yt>0?$e(Bl,--Yt):0,Cl--,Ze===10&&(Cl=1,Mo--),Ze}function Zt(){return Ze=Yt<cg?$e(Bl,Yt++):0,Cl++,Ze===10&&(Cl=1,Mo++),Ze}function aa(){return $e(Bl,Yt)}function bo(){return Yt}function Bo(l,s){return _a(Bl,l,s)}function Ni(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bx(l){return Mo=Cl=1,cg=Xt(Bl=l),Yt=0,[]}function Ox(l){return Bl="",l}function rc(l){return sg(Bo(Yt-1,Vc(l===91?l+2:l===40?l+1:l)))}function Dx(l){for(;(Ze=aa())&&Ze<33;)Zt();return Ni(l)>2||Ni(Ze)>3?"":" "}function kx(l,s){for(;--s&&Zt()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return Bo(l,bo()+(s<6&&aa()==32&&Zt()==32))}function Vc(l){for(;Zt();)switch(Ze){case l:return Yt;case 34:case 39:l!==34&&l!==39&&Vc(Ze);break;case 40:l===41&&Vc(l);break;case 92:Zt();break}return Yt}function Nx(l,s){for(;Zt()&&l+Ze!==57;)if(l+Ze===84&&aa()===47)break;return"/*"+Bo(s,Yt-1)+"*"+Ic(l===47?l:Zt())}function Ux(l){for(;!Ni(aa());)Zt();return Bo(l,Yt)}function Hx(l){return Ox(xo("",null,null,null,[""],l=Bx(l),0,[0],l))}function xo(l,s,c,u,d,g,p,j,y){for(var x=0,T=0,w=p,U=0,L=0,q=0,Y=1,X=1,K=1,G=0,H="",F=d,P=g,J=u,N=H;X;)switch(q=G,G=Zt()){case 40:if(q!=108&&$e(N,w-1)==58){po(N+=se(rc(G),"&","&\f"),"&\f",og(x?j[x-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:N+=rc(G);break;case 9:case 10:case 13:case 32:N+=Dx(q);break;case 92:N+=kx(bo()-1,7);continue;case 47:switch(aa()){case 42:case 47:Bi(Lx(Nx(Zt(),bo()),s,c,y),y),(Ni(q||1)==5||Ni(aa()||1)==5)&&Xt(N)&&_a(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*Y:j[x++]=Xt(N)*K;case 125*Y:case 59:case 0:switch(G){case 0:case 125:X=0;case 59+T:K==-1&&(N=se(N,/\f/g,"")),L>0&&(Xt(N)-w||Y===0&&q===47)&&Bi(L>32?_0(N+";",u,c,w-1,y):_0(se(N," ","")+";",u,c,w-2,y),y);break;case 59:N+=";";default:if(Bi(J=w0(N,s,c,x,T,d,j,H,F=[],P=[],w,g),g),G===123)if(T===0)xo(N,s,J,J,F,g,w,j,P);else{switch(U){case 99:if($e(N,3)===110)break;case 108:if($e(N,2)===97)break;default:T=0;case 100:case 109:case 115:}T?xo(l,J,J,u&&Bi(w0(l,J,J,0,0,d,j,H,d,F=[],w,P),P),d,P,w,j,u?F:P):xo(N,J,J,J,[""],P,0,j,P)}}x=T=L=0,Y=K=1,H=N="",w=p;break;case 58:w=1+Xt(N),L=q;default:if(Y<1){if(G==123)--Y;else if(G==125&&Y++==0&&Rx()==125)continue}switch(N+=Ic(G),G*Y){case 38:K=T>0?1:(N+="\f",-1);break;case 44:j[x++]=(Xt(N)-1)*K,K=1;break;case 64:aa()===45&&(N+=rc(Zt())),U=aa(),T=w=Xt(H=N+=Ux(bo())),G++;break;case 45:q===45&&Xt(N)==2&&(Y=0)}}return g}function w0(l,s,c,u,d,g,p,j,y,x,T,w){for(var U=d-1,L=d===0?g:[""],q=ug(L),Y=0,X=0,K=0;Y<u;++Y)for(var G=0,H=_a(l,U+1,U=og(X=p[Y])),F=l;G<q;++G)(F=sg(X>0?L[G]+" "+H:se(H,/&\f/g,L[G])))&&(y[K++]=F);return Ro(l,s,c,d===0?Co:j,y,x,T,w)}function Lx(l,s,c,u){return Ro(l,s,c,ig,Ic(Mx()),_a(l,2,-2),0,u)}function _0(l,s,c,u,d){return Ro(l,s,c,Pc,_a(l,0,u),_a(l,u+1,-1),u,d)}function fg(l,s,c){switch(Ax(l,s)){case 5103:return je+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return je+l+l;case 4855:return je+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return ki+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return je+l+ki+l+Oe+l+l;case 5936:switch($e(l,s+11)){case 114:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return je+l+Oe+l+l;case 6165:return je+l+Oe+"flex-"+l+l;case 5187:return je+l+se(l,/(\w+).+(:[^]+)/,je+"box-$1$2"+Oe+"flex-$1$2")+l;case 5443:return je+l+Oe+"flex-item-"+se(l,/flex-|-self/g,"")+(zn(l,/flex-|baseline/)?"":Oe+"grid-row-"+se(l,/flex-|-self/g,""))+l;case 4675:return je+l+Oe+"flex-line-pack"+se(l,/align-content|flex-|-self/g,"")+l;case 5548:return je+l+Oe+se(l,"shrink","negative")+l;case 5292:return je+l+Oe+se(l,"basis","preferred-size")+l;case 6060:return je+"box-"+se(l,"-grow","")+je+l+Oe+se(l,"grow","positive")+l;case 4554:return je+se(l,/([^-])(transform)/g,"$1"+je+"$2")+l;case 6187:return se(se(se(l,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),l,"")+l;case 5495:case 3959:return se(l,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return se(se(l,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Oe+"flex-pack:$3"),/space-between/,"justify")+je+l+l;case 4200:if(!zn(l,/flex-|baseline/))return Oe+"grid-column-align"+_a(l,s)+l;break;case 2592:case 3360:return Oe+se(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,zn(u.props,/grid-\w+-end/)})?~po(l+(c=c[s].value),"span",0)?l:Oe+se(l,"-start","")+l+Oe+"grid-row-span:"+(~po(c,"span",0)?zn(c,/\d+/):+zn(c,/\d+/)-+zn(l,/\d+/))+";":Oe+se(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return zn(u.props,/grid-\w+-start/)})?l:Oe+se(se(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return se(l,/(.+)-inline(.+)/,je+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(l)-1-s>6)switch($e(l,s+1)){case 109:if($e(l,s+4)!==45)break;case 102:return se(l,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+ki+($e(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~po(l,"stretch",0)?fg(se(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return se(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,g,p,j,y,x){return Oe+d+":"+g+x+(p?Oe+d+"-span:"+(j?y:+y-+g)+x:"")+l});case 4949:if($e(l,s+6)===121)return se(l,":",":"+je)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return se(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+($e(l,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Oe+"$2box$3")+l;case 100:return se(l,":",":"+Oe)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(l,"scroll-","scroll-snap-")+l}return l}function wo(l,s){for(var c="",u=0;u<l.length;u++)c+=s(l[u],u,l,s)||"";return c}function Gx(l,s,c,u){switch(l.type){case Tx:if(l.children.length)break;case _x:case Ex:case Pc:return l.return=l.return||l.value;case ig:return"";case rg:return l.return=l.value+"{"+wo(l.children,u)+"}";case Co:if(!Xt(l.value=l.props.join(",")))return""}return Xt(c=wo(l.children,u))?l.return=l.value+"{"+c+"}":""}function Yx(l){var s=ug(l);return function(c,u,d,g){for(var p="",j=0;j<s;j++)p+=l[j](c,u,d,g)||"";return p}}function qx(l){return function(s){s.root||(s=s.return)&&l(s)}}function Vx(l,s,c,u){if(l.length>-1&&!l.return)switch(l.type){case Pc:l.return=fg(l.value,l.length,c);return;case rg:return wo([na(l,{value:se(l.value,"@","@"+je)})],u);case Co:if(l.length)return Cx(c=l.props,function(d){switch(zn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ml(na(l,{props:[se(d,/:(read-\w+)/,":"+ki+"$1")]})),ml(na(l,{props:[d]})),qc(l,{props:z0(c,u)});break;case"::placeholder":ml(na(l,{props:[se(d,/:(plac\w+)/,":"+je+"input-$1")]})),ml(na(l,{props:[se(d,/:(plac\w+)/,":"+ki+"$1")]})),ml(na(l,{props:[se(d,/:(plac\w+)/,Oe+"input-$1")]})),ml(na(l,{props:[d]})),qc(l,{props:z0(c,u)});break}return""})}}var Qx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},Ml=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",dg="active",hg="data-styled-version",Oo="6.3.8",ef=`/*!sc*/
`,_o=typeof window<"u"&&typeof document<"u",Ea=At.createContext===void 0,Kx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),Do=Object.freeze([]),Rl=Object.freeze({});function Xx(l,s,c){return c===void 0&&(c=Rl),l.theme!==c.theme&&l.theme||s||c.theme}var mg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Zx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jx=/(^-|-$)/g;function E0(l){return l.replace(Zx,"-").replace(Jx,"")}var $x=/(a)(d)/gi,T0=function(l){return String.fromCharCode(l+(l>25?39:97))};function Qc(l){var s,c="";for(s=Math.abs(l);s>52;s=s/52|0)c=T0(s%52)+c;return(T0(s%52)+c).replace($x,"$1-$2")}var oc,El=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},gg=function(l){return El(5381,l)};function Wx(l){return Qc(gg(l)>>>0)}function Fx(l){return l.displayName||l.name||"Component"}function sc(l){return typeof l=="string"&&!0}var pg=typeof Symbol=="function"&&Symbol.for,bg=pg?Symbol.for("react.memo"):60115,Px=pg?Symbol.for("react.forward_ref"):60112,Ix={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ty=((oc={})[Px]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oc[bg]=xg,oc);function A0(l){return("type"in(s=l)&&s.type.$$typeof)===bg?xg:"$$typeof"in l?ty[l.$$typeof]:Ix;var s}var ny=Object.defineProperty,ay=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,ly=Object.getOwnPropertyDescriptor,iy=Object.getPrototypeOf,M0=Object.prototype;function yg(l,s,c){if(typeof s!="string"){if(M0){var u=iy(s);u&&u!==M0&&yg(l,u,c)}var d=ay(s);C0&&(d=d.concat(C0(s)));for(var g=A0(l),p=A0(s),j=0;j<d.length;++j){var y=d[j];if(!(y in ey||c&&c[y]||p&&y in p||g&&y in g)){var x=ly(s,y);try{ny(l,y,x)}catch{}}}}return l}function Ta(l){return typeof l=="function"}function tf(l){return typeof l=="object"&&"styledComponentId"in l}function za(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function R0(l,s){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function Ui(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Kc(l,s,c){if(c===void 0&&(c=!1),!c&&!Ui(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)l[u]=Kc(l[u],s[u]);else if(Ui(s))for(var u in s)l[u]=Kc(l[u],s[u]);return l}function nf(l,s){Object.defineProperty(l,"toString",{value:s})}function Aa(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var ry=(function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,g=d;s>=g;)if((g<<=1)<0)throw Aa(16,"".concat(s));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var p=d;p<g;p++)this.groupSizes[p]=0}for(var j=this.indexOfGroup(s+1),y=(p=0,c.length);p<y;p++)this.tag.insertRule(j,c[p])&&(this.groupSizes[s]++,j++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var g=u;g<d;g++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),g=d+u,p=d;p<g;p++)c+="".concat(this.tag.getRule(p)).concat(ef);return c},l})(),yo=new Map,Eo=new Map,vo=1,Oi=function(l){if(yo.has(l))return yo.get(l);for(;Eo.has(vo);)vo++;var s=vo++;return yo.set(l,s),Eo.set(s,l),s},oy=function(l,s){vo=s+1,yo.set(l,s),Eo.set(s,l)},sy="style[".concat(Ml,"][").concat(hg,'="').concat(Oo,'"]'),uy=new RegExp("^".concat(Ml,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cy=function(l,s,c){for(var u,d=c.split(","),g=0,p=d.length;g<p;g++)(u=d[g])&&l.registerName(s,u)},fy=function(l,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(ef),d=[],g=0,p=u.length;g<p;g++){var j=u[g].trim();if(j){var y=j.match(uy);if(y){var x=0|parseInt(y[1],10),T=y[2];x!==0&&(oy(T,x),cy(l,T,y[3]),l.getTag().insertRules(x,d)),d.length=0}else d.push(j)}}},B0=function(l){for(var s=document.querySelectorAll(sy),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(Ml)!==dg&&(fy(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function dy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(l){var s=document.head,c=l||s,u=document.createElement("style"),d=(function(j){var y=Array.from(j.querySelectorAll("style[".concat(Ml,"]")));return y[y.length-1]})(c),g=d!==void 0?d.nextSibling:null;u.setAttribute(Ml,dg),u.setAttribute(hg,Oo);var p=dy();return p&&u.setAttribute("nonce",p),c.insertBefore(u,g),u},hy=(function(){function l(s){this.element=vg(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,g=u.length;d<g;d++){var p=u[d];if(p.ownerNode===c)return p}throw Aa(17)})(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l})(),my=(function(){function l(s){this.element=vg(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l})(),gy=(function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l})(),O0=_o,py={isServer:!_o,useCSSOMInjection:!Kx},Sg=(function(){function l(s,c,u){s===void 0&&(s=Rl),c===void 0&&(c={});var d=this;this.options=lt(lt({},py),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&_o&&O0&&(O0=!1,B0(this)),nf(this,function(){return(function(g){for(var p=g.getTag(),j=p.length,y="",x=function(w){var U=(function(K){return Eo.get(K)})(w);if(U===void 0)return"continue";var L=g.names.get(U),q=p.getGroup(w);if(L===void 0||!L.size||q.length===0)return"continue";var Y="".concat(Ml,".g").concat(w,'[id="').concat(U,'"]'),X="";L!==void 0&&L.forEach(function(K){K.length>0&&(X+="".concat(K,","))}),y+="".concat(q).concat(Y,'{content:"').concat(X,'"}').concat(ef)},T=0;T<j;T++)x(T);return y})(d)})}return l.registerId=function(s){return Oi(s)},l.prototype.rehydrate=function(){!this.server&&_o&&B0(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(lt(lt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new gy(d):u?new hy(d):new my(d)})(this.options),new ry(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(Oi(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},l.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(Oi(s),u)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(Oi(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l})(),by=/&/g,Tl=47;function D0(l){if(l.indexOf("}")===-1)return!1;for(var s=l.length,c=0,u=0,d=!1,g=0;g<s;g++){var p=l.charCodeAt(g);if(u!==0||d||p!==Tl||l.charCodeAt(g+1)!==42)if(d)p===42&&l.charCodeAt(g+1)===Tl&&(d=!1,g++);else if(p!==34&&p!==39||g!==0&&l.charCodeAt(g-1)===92){if(u===0){if(p===123)c++;else if(p===125&&--c<0)return!0}}else u===0?u=p:u===p&&(u=0);else d=!0,g++}return c!==0||u!==0}function jg(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=jg(c.children,s)),c})}function xy(l){var s,c,u,d=Rl,g=d.options,p=g===void 0?Rl:g,j=d.plugins,y=j===void 0?Do:j,x=function(U,L,q){return q.startsWith(c)&&q.endsWith(c)&&q.replaceAll(c,"").length>0?".".concat(s):U},T=y.slice();T.push(function(U){U.type===Co&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(by,c).replace(u,x))}),p.prefix&&T.push(Vx),T.push(Gx);var w=function(U,L,q,Y){L===void 0&&(L=""),q===void 0&&(q=""),Y===void 0&&(Y="&"),s=Y,c=L,u=new RegExp("\\".concat(c,"\\b"),"g");var X=(function(H){if(!D0(H))return H;for(var F=H.length,P="",J=0,N=0,ie=0,be=!1,ue=0;ue<F;ue++){var Ue=H.charCodeAt(ue);if(ie!==0||be||Ue!==Tl||H.charCodeAt(ue+1)!==42)if(be)Ue===42&&H.charCodeAt(ue+1)===Tl&&(be=!1,ue++);else if(Ue!==34&&Ue!==39||ue!==0&&H.charCodeAt(ue-1)===92){if(ie===0)if(Ue===123)N++;else if(Ue===125){if(--N<0){for(var Me=ue+1;Me<F;){var mt=H.charCodeAt(Me);if(mt===59||mt===10)break;Me++}Me<F&&H.charCodeAt(Me)===59&&Me++,N=0,ue=Me-1,J=Me;continue}N===0&&(P+=H.substring(J,ue+1),J=ue+1)}else Ue===59&&N===0&&(P+=H.substring(J,ue+1),J=ue+1)}else ie===0?ie=Ue:ie===Ue&&(ie=0);else be=!0,ue++}if(J<F){var rt=H.substring(J);D0(rt)||(P+=rt)}return P})((function(H){if(H.indexOf("//")===-1)return H;for(var F=H.length,P=[],J=0,N=0,ie=0,be=0;N<F;){var ue=H.charCodeAt(N);if(ue!==34&&ue!==39||N!==0&&H.charCodeAt(N-1)===92)if(ie===0)if(ue===40&&N>=3&&(32|H.charCodeAt(N-1))==108&&(32|H.charCodeAt(N-2))==114&&(32|H.charCodeAt(N-3))==117)be=1,N++;else if(be>0)ue===41?be--:ue===40&&be++,N++;else if(ue===Tl&&N+1<F&&H.charCodeAt(N+1)===Tl){for(N>J&&P.push(H.substring(J,N));N<F&&H.charCodeAt(N)!==10;)N++;J=N}else N++;else N++;else ie===0?ie=ue:ie===ue&&(ie=0),N++}return J===0?H:(J<F&&P.push(H.substring(J)),P.join(""))})(U)),K=Hx(q||L?"".concat(q," ").concat(L," { ").concat(X," }"):X);p.namespace&&(K=jg(K,p.namespace));var G=[];return wo(K,Yx(T.concat(qx(function(H){return G.push(H)})))),G};return w.hash=y.length?y.reduce(function(U,L){return L.name||Aa(15),El(U,L.name)},5381).toString():"",w}var yy=new Sg,Xc=xy(),Zc={shouldForwardProp:void 0,styleSheet:yy,stylis:Xc},zg=Ea?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(Zc)}}:At.createContext(Zc);zg.Consumer;Ea||At.createContext(void 0);function k0(){return Ea?Zc:At.useContext(zg)}var vy=(function(){function l(s,c){var u=this;this.inject=function(d,g){g===void 0&&(g=Xc);var p=u.name+g.hash;d.hasNameForId(u.id,p)||d.insertRules(u.id,p,g(u.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,nf(this,function(){throw Aa(12,String(u.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=Xc),this.name+s.hash},l})();function Sy(l,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in Qx||l.startsWith("--")?String(s).trim():"".concat(s,"px")}var jy=function(l){return l>="A"&&l<="Z"};function N0(l){for(var s="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;jy(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var wg=function(l){return l==null||l===!1||l===""},_g=function(l){var s=[];for(var c in l){var u=l[c];l.hasOwnProperty(c)&&!wg(u)&&(Array.isArray(u)&&u.isCss||Ta(u)?s.push("".concat(N0(c),":"),u,";"):Ui(u)?s.push.apply(s,zo(zo(["".concat(c," {")],_g(u),!1),["}"],!1)):s.push("".concat(N0(c),": ").concat(Sy(c,u),";")))}return s};function wa(l,s,c,u){if(wg(l))return[];if(tf(l))return[".".concat(l.styledComponentId)];if(Ta(l)){if(!Ta(g=l)||g.prototype&&g.prototype.isReactComponent||!s)return[l];var d=l(s);return wa(d,s,c,u)}var g;return l instanceof vy?c?(l.inject(c,u),[l.getName(u)]):[l]:Ui(l)?_g(l):Array.isArray(l)?Array.prototype.concat.apply(Do,l.map(function(p){return wa(p,s,c,u)})):[l.toString()]}function zy(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(Ta(c)&&!tf(c))return!1}return!0}var wy=gg(Oo),_y=(function(){function l(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&zy(s),this.componentId=c,this.baseHash=El(wy,c),this.baseStyle=u,Sg.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=za(d,this.staticRulesId);else{var g=R0(wa(this.rules,s,c,u)),p=Qc(El(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,p)){var j=u(g,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,j)}d=za(d,p),this.staticRulesId=p}else{for(var y=El(this.baseHash,u.hash),x="",T=0;T<this.rules.length;T++){var w=this.rules[T];if(typeof w=="string")x+=w;else if(w){var U=R0(wa(w,s,c,u));y=El(y,U+T),x+=U}}if(x){var L=Qc(y>>>0);if(!c.hasNameForId(this.componentId,L)){var q=u(x,".".concat(L),void 0,this.componentId);c.insertRules(this.componentId,L,q)}d=za(d,L)}}return{className:d,css:typeof window>"u"?c.getTag().getGroup(Oi(this.componentId)):""}},l})(),To=Ea?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(void 0)}}:At.createContext(void 0);To.Consumer;function Ey(l){if(Ea)return l.children;var s=At.useContext(To),c=At.useMemo(function(){return(function(u,d){if(!u)throw Aa(14);if(Ta(u)){var g=u(d);return g}if(Array.isArray(u)||typeof u!="object")throw Aa(8);return d?lt(lt({},d),u):u})(l.theme,s)},[l.theme,s]);return l.children?At.createElement(To.Provider,{value:c},l.children):null}var uc={};function Ty(l,s,c){var u=tf(l),d=l,g=!sc(l),p=s.attrs,j=p===void 0?Do:p,y=s.componentId,x=y===void 0?(function(F,P){var J=typeof F!="string"?"sc":E0(F);uc[J]=(uc[J]||0)+1;var N="".concat(J,"-").concat(Wx(Oo+J+uc[J]));return P?"".concat(P,"-").concat(N):N})(s.displayName,s.parentComponentId):y,T=s.displayName,w=T===void 0?(function(F){return sc(F)?"styled.".concat(F):"Styled(".concat(Fx(F),")")})(l):T,U=s.displayName&&s.componentId?"".concat(E0(s.displayName),"-").concat(s.componentId):s.componentId||x,L=u&&d.attrs?d.attrs.concat(j).filter(Boolean):j,q=s.shouldForwardProp;if(u&&d.shouldForwardProp){var Y=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;q=function(F,P){return Y(F,P)&&X(F,P)}}else q=Y}var K=new _y(c,U,u?d.componentStyle:void 0);function G(F,P){return(function(J,N,ie){var be=J.attrs,ue=J.componentStyle,Ue=J.defaultProps,Me=J.foldedComponentIds,mt=J.styledComponentId,rt=J.target,gt=Ea?void 0:At.useContext(To),B=k0(),V=J.shouldForwardProp||B.shouldForwardProp,ee=Xx(N,gt,Ue)||Rl,ce=(function(qe,_e,Jt){for(var $t,pt=lt(lt({},_e),{className:void 0,theme:Jt}),Ca=0;Ca<qe.length;Ca+=1){var Mt=Ta($t=qe[Ca])?$t(pt):$t;for(var Wt in Mt)Wt==="className"?pt.className=za(pt.className,Mt[Wt]):Wt==="style"?pt.style=lt(lt({},pt.style),Mt[Wt]):pt[Wt]=Mt[Wt]}return"className"in _e&&typeof _e.className=="string"&&(pt.className=za(pt.className,_e.className)),pt})(be,N,ee),xe=ce.as||rt,S={};for(var O in ce)ce[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&ce.theme===ee||(O==="forwardedAs"?S.as=ce.forwardedAs:V&&!V(O,xe)||(S[O]=ce[O]));var Q=(function(qe,_e){var Jt=k0(),$t=qe.generateAndInjectStyles(_e,Jt.styleSheet,Jt.stylis);return $t})(ue,ce),Z=Q.className,ne=Q.css,re=za(Me,mt);Z&&(re+=" "+Z),ce.className&&(re+=" "+ce.className),S[sc(xe)&&!mg.has(xe)?"class":"className"]=re,ie&&(S.ref=ie);var pe=M.createElement(xe,S);return Ea&&ne?At.createElement(At.Fragment,null,At.createElement("style",{precedence:"styled-components",href:"sc-".concat(mt,"-").concat(Z),children:ne}),pe):pe})(H,F,P)}G.displayName=w;var H=At.forwardRef(G);return H.attrs=L,H.componentStyle=K,H.displayName=w,H.shouldForwardProp=q,H.foldedComponentIds=u?za(d.foldedComponentIds,d.styledComponentId):"",H.styledComponentId=U,H.target=u?d.target:l,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?(function(P){for(var J=[],N=1;N<arguments.length;N++)J[N-1]=arguments[N];for(var ie=0,be=J;ie<be.length;ie++)Kc(P,be[ie],!0);return P})({},d.defaultProps,F):F}}),nf(H,function(){return".".concat(H.styledComponentId)}),g&&yg(H,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function U0(l,s){for(var c=[l[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],l[u+1]);return c}var H0=function(l){return Object.assign(l,{isCss:!0})};function Ay(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(Ta(l)||Ui(l))return H0(wa(U0(Do,zo([l],s,!0))));var u=l;return s.length===0&&u.length===1&&typeof u[0]=="string"?wa(u):H0(wa(U0(u,s)))}function Jc(l,s,c){if(c===void 0&&(c=Rl),!s)throw Aa(1,s);var u=function(d){for(var g=[],p=1;p<arguments.length;p++)g[p-1]=arguments[p];return l(s,c,Ay.apply(void 0,zo([d],g,!1)))};return u.attrs=function(d){return Jc(l,s,lt(lt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Jc(l,s,lt(lt({},c),d))},u}var Eg=function(l){return Jc(Ty,l)},h=Eg;mg.forEach(function(l){h[l]=Eg(l)});var L0="popstate";function Cy(l={}){function s(u,d){let{pathname:g,search:p,hash:j}=u.location;return $c("",{pathname:g,search:p,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Hi(d)}return Ry(s,c,null,l)}function Ne(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function qt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function My(){return Math.random().toString(36).substring(2,10)}function G0(l,s){return{usr:l.state,key:l.key,idx:s}}function $c(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?Ol(s):s,state:c,key:s&&s.key||u||My()}}function Hi({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Ol(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function Ry(l,s,c,u={}){let{window:d=document.defaultView,v5Compat:g=!1}=u,p=d.history,j="POP",y=null,x=T();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function T(){return(p.state||{idx:null}).idx}function w(){j="POP";let X=T(),K=X==null?null:X-x;x=X,y&&y({action:j,location:Y.location,delta:K})}function U(X,K){j="PUSH";let G=$c(Y.location,X,K);x=T()+1;let H=G0(G,x),F=Y.createHref(G);try{p.pushState(H,"",F)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(F)}g&&y&&y({action:j,location:Y.location,delta:1})}function L(X,K){j="REPLACE";let G=$c(Y.location,X,K);x=T();let H=G0(G,x),F=Y.createHref(G);p.replaceState(H,"",F),g&&y&&y({action:j,location:Y.location,delta:0})}function q(X){return By(X)}let Y={get action(){return j},get location(){return l(d,p)},listen(X){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(L0,w),y=X,()=>{d.removeEventListener(L0,w),y=null}},createHref(X){return s(d,X)},createURL:q,encodeLocation(X){let K=q(X);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:L,go(X){return p.go(X)}};return Y}function By(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Hi(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Tg(l,s,c="/"){return Oy(l,s,c,!1)}function Oy(l,s,c,u){let d=typeof s=="string"?Ol(s):s,g=En(d.pathname||"/",c);if(g==null)return null;let p=Ag(l);Dy(p);let j=null;for(let y=0;j==null&&y<p.length;++y){let x=Ky(g);j=Vy(p[y],x,u)}return j}function Ag(l,s=[],c=[],u="",d=!1){let g=(p,j,y=d,x)=>{let T={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:j,route:p};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(u)&&y)return;Ne(T.relativePath.startsWith(u),`Absolute route path "${T.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(u.length)}let w=_n([u,T.relativePath]),U=c.concat(T);p.children&&p.children.length>0&&(Ne(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Ag(p.children,s,U,w,y)),!(p.path==null&&!p.index)&&s.push({path:w,score:Yy(w,p.index),routesMeta:U})};return l.forEach((p,j)=>{if(p.path===""||!p.path?.includes("?"))g(p,j);else for(let y of Cg(p.path))g(p,j,!0,y)}),s}function Cg(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(u.length===0)return d?[g,""]:[g];let p=Cg(u.join("/")),j=[];return j.push(...p.map(y=>y===""?g:[g,y].join("/"))),d&&j.push(...p),j.map(y=>l.startsWith("/")&&y===""?"/":y)}function Dy(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:qy(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var ky=/^:[\w-]+$/,Ny=3,Uy=2,Hy=1,Ly=10,Gy=-2,Y0=l=>l==="*";function Yy(l,s){let c=l.split("/"),u=c.length;return c.some(Y0)&&(u+=Gy),s&&(u+=Uy),c.filter(d=>!Y0(d)).reduce((d,g)=>d+(ky.test(g)?Ny:g===""?Hy:Ly),u)}function qy(l,s){return l.length===s.length&&l.slice(0,-1).every((u,d)=>u===s[d])?l[l.length-1]-s[s.length-1]:0}function Vy(l,s,c=!1){let{routesMeta:u}=l,d={},g="/",p=[];for(let j=0;j<u.length;++j){let y=u[j],x=j===u.length-1,T=g==="/"?s:s.slice(g.length)||"/",w=Ao({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},T),U=y.route;if(!w&&x&&c&&!u[u.length-1].route.index&&(w=Ao({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},T)),!w)return null;Object.assign(d,w.params),p.push({params:d,pathname:_n([g,w.pathname]),pathnameBase:$y(_n([g,w.pathnameBase])),route:U}),w.pathnameBase!=="/"&&(g=_n([g,w.pathnameBase]))}return p}function Ao(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=Qy(l.path,l.caseSensitive,l.end),d=s.match(c);if(!d)return null;let g=d[0],p=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:u.reduce((x,{paramName:T,isOptional:w},U)=>{if(T==="*"){let q=j[U]||"";p=g.slice(0,g.length-q.length).replace(/(.)\/+$/,"$1")}const L=j[U];return w&&!L?x[T]=void 0:x[T]=(L||"").replace(/%2F/g,"/"),x},{}),pathname:g,pathnameBase:p,pattern:l}}function Qy(l,s=!1,c=!0){qt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,j,y)=>(u.push({paramName:j,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function Ky(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return qt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function En(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}var Mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xy=l=>Mg.test(l);function Zy(l,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?Ol(l):l,g;if(c)if(Xy(c))g=c;else{if(c.includes("//")){let p=c;c=c.replace(/\/\/+/g,"/"),qt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${c}`)}c.startsWith("/")?g=q0(c.substring(1),"/"):g=q0(c,s)}else g=s;return{pathname:g,search:Wy(u),hash:Fy(d)}}function q0(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function cc(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jy(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function af(l){let s=Jy(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function lf(l,s,c,u=!1){let d;typeof l=="string"?d=Ol(l):(d={...l},Ne(!d.pathname||!d.pathname.includes("?"),cc("?","pathname","search",d)),Ne(!d.pathname||!d.pathname.includes("#"),cc("#","pathname","hash",d)),Ne(!d.search||!d.search.includes("#"),cc("#","search","hash",d)));let g=l===""||d.pathname==="",p=g?"/":d.pathname,j;if(p==null)j=c;else{let w=s.length-1;if(!u&&p.startsWith("..")){let U=p.split("/");for(;U[0]==="..";)U.shift(),w-=1;d.pathname=U.join("/")}j=w>=0?s[w]:"/"}let y=Zy(d,j),x=p&&p!=="/"&&p.endsWith("/"),T=(g||p===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(x||T)&&(y.pathname+="/"),y}var _n=l=>l.join("/").replace(/\/\/+/g,"/"),$y=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Wy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Fy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Py=class{constructor(l,s,c,u=!1){this.status=l,this.statusText=s||"",this.internal=u,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Iy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function ev(l){return l.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bg(l,s){let c=l;if(typeof c!="string"||!Mg.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let u=c,d=!1;if(Rg)try{let g=new URL(window.location.href),p=c.startsWith("//")?new URL(g.protocol+c):new URL(c),j=En(p.pathname,s);p.origin===g.origin&&j!=null?c=j+p.search+p.hash:d=!0}catch{qt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Og=["POST","PUT","PATCH","DELETE"];new Set(Og);var tv=["GET",...Og];new Set(tv);var Dl=M.createContext(null);Dl.displayName="DataRouter";var ko=M.createContext(null);ko.displayName="DataRouterState";var nv=M.createContext(!1),Dg=M.createContext({isTransitioning:!1});Dg.displayName="ViewTransition";var av=M.createContext(new Map);av.displayName="Fetchers";var lv=M.createContext(null);lv.displayName="Await";var Ct=M.createContext(null);Ct.displayName="Navigation";var Li=M.createContext(null);Li.displayName="Location";var nn=M.createContext({outlet:null,matches:[],isDataRoute:!1});nn.displayName="Route";var rf=M.createContext(null);rf.displayName="RouteError";var kg="REACT_ROUTER_ERROR",iv="REDIRECT",rv="ROUTE_ERROR_RESPONSE";function ov(l){if(l.startsWith(`${kg}:${iv}:{`))try{let s=JSON.parse(l.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function sv(l){if(l.startsWith(`${kg}:${rv}:{`))try{let s=JSON.parse(l.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Py(s.status,s.statusText,s.data)}catch{}}function uv(l,{relative:s}={}){Ne(kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=M.useContext(Ct),{hash:d,pathname:g,search:p}=Gi(l,{relative:s}),j=g;return c!=="/"&&(j=g==="/"?c:_n([c,g])),u.createHref({pathname:j,search:p,hash:d})}function kl(){return M.useContext(Li)!=null}function Tn(){return Ne(kl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Li).location}var Ng="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ug(l){M.useContext(Ct).static||M.useLayoutEffect(l)}function Hg(){let{isDataRoute:l}=M.useContext(nn);return l?jv():cv()}function cv(){Ne(kl(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(Dl),{basename:s,navigator:c}=M.useContext(Ct),{matches:u}=M.useContext(nn),{pathname:d}=Tn(),g=JSON.stringify(af(u)),p=M.useRef(!1);return Ug(()=>{p.current=!0}),M.useCallback((y,x={})=>{if(qt(p.current,Ng),!p.current)return;if(typeof y=="number"){c.go(y);return}let T=lf(y,JSON.parse(g),d,x.relative==="path");l==null&&s!=="/"&&(T.pathname=T.pathname==="/"?s:_n([s,T.pathname])),(x.replace?c.replace:c.push)(T,x.state,x)},[s,c,g,d,l])}M.createContext(null);function Gi(l,{relative:s}={}){let{matches:c}=M.useContext(nn),{pathname:u}=Tn(),d=JSON.stringify(af(c));return M.useMemo(()=>lf(l,JSON.parse(d),u,s==="path"),[l,d,u,s])}function fv(l,s){return Lg(l,s)}function Lg(l,s,c,u,d){Ne(kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=M.useContext(Ct),{matches:p}=M.useContext(nn),j=p[p.length-1],y=j?j.params:{},x=j?j.pathname:"/",T=j?j.pathnameBase:"/",w=j&&j.route;{let G=w&&w.path||"";Yg(x,!w||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let U=Tn(),L;if(s){let G=typeof s=="string"?Ol(s):s;Ne(T==="/"||G.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${G.pathname}" was given in the \`location\` prop.`),L=G}else L=U;let q=L.pathname||"/",Y=q;if(T!=="/"){let G=T.replace(/^\//,"").split("/");Y="/"+q.replace(/^\//,"").split("/").slice(G.length).join("/")}let X=Tg(l,{pathname:Y});qt(w||X!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),qt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=pv(X&&X.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:_n([T,g.encodeLocation?g.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?T:_n([T,g.encodeLocation?g.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),p,c,u,d);return s&&K?M.createElement(Li.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},K):K}function dv(){let l=Sv(),s=Iy(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},g={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),c?M.createElement("pre",{style:d},c):null,p)}var hv=M.createElement(dv,null),Gg=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){this.props.onError?this.props.onError(l,s):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const c=sv(l.digest);c&&(l=c)}let s=l!==void 0?M.createElement(nn.Provider,{value:this.props.routeContext},M.createElement(rf.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?M.createElement(mv,{error:l},s):s}};Gg.contextType=nv;var fc=new WeakMap;function mv({children:l,error:s}){let{basename:c}=M.useContext(Ct);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let u=ov(s.digest);if(u){let d=fc.get(s);if(d)throw d;let g=Bg(u.location,c);if(Rg&&!fc.get(s))if(g.isExternal||u.reloadDocument)window.location.href=g.absoluteURL||g.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:u.replace}));throw fc.set(s,p),p}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g.absoluteURL||g.to}`})}}return l}function gv({routeContext:l,match:s,children:c}){let u=M.useContext(Dl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(nn.Provider,{value:l},c)}function pv(l,s=[],c=null,u=null,d=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let g=l,p=c?.errors;if(p!=null){let T=g.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Ne(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),g=g.slice(0,Math.min(g.length,T+1))}let j=!1,y=-1;if(c)for(let T=0;T<g.length;T++){let w=g[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=T),w.route.id){let{loaderData:U,errors:L}=c,q=w.route.loader&&!U.hasOwnProperty(w.route.id)&&(!L||L[w.route.id]===void 0);if(w.route.lazy||q){j=!0,y>=0?g=g.slice(0,y+1):g=[g[0]];break}}}let x=c&&u?(T,w)=>{u(T,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:ev(c.matches),errorInfo:w})}:void 0;return g.reduceRight((T,w,U)=>{let L,q=!1,Y=null,X=null;c&&(L=p&&w.route.id?p[w.route.id]:void 0,Y=w.route.errorElement||hv,j&&(y<0&&U===0?(Yg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,X=null):y===U&&(q=!0,X=w.route.hydrateFallbackElement||null)));let K=s.concat(g.slice(0,U+1)),G=()=>{let H;return L?H=Y:q?H=X:w.route.Component?H=M.createElement(w.route.Component,null):w.route.element?H=w.route.element:H=T,M.createElement(gv,{match:w,routeContext:{outlet:T,matches:K,isDataRoute:c!=null},children:H})};return c&&(w.route.ErrorBoundary||w.route.errorElement||U===0)?M.createElement(Gg,{location:c.location,revalidation:c.revalidation,component:Y,error:L,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:x}):G()},null)}function of(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bv(l){let s=M.useContext(Dl);return Ne(s,of(l)),s}function xv(l){let s=M.useContext(ko);return Ne(s,of(l)),s}function yv(l){let s=M.useContext(nn);return Ne(s,of(l)),s}function sf(l){let s=yv(l),c=s.matches[s.matches.length-1];return Ne(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function vv(){return sf("useRouteId")}function Sv(){let l=M.useContext(rf),s=xv("useRouteError"),c=sf("useRouteError");return l!==void 0?l:s.errors?.[c]}function jv(){let{router:l}=bv("useNavigate"),s=sf("useNavigate"),c=M.useRef(!1);return Ug(()=>{c.current=!0}),M.useCallback(async(d,g={})=>{qt(c.current,Ng),c.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:s,...g}))},[l,s])}var V0={};function Yg(l,s,c){!s&&!V0[l]&&(V0[l]=!0,qt(!1,c))}M.memo(zv);function zv({routes:l,future:s,state:c,onError:u}){return Lg(l,void 0,c,u,s)}function Q0({to:l,replace:s,state:c,relative:u}){Ne(kl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(Ct);qt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(nn),{pathname:p}=Tn(),j=Hg(),y=lf(l,af(g),p,u==="path"),x=JSON.stringify(y);return M.useEffect(()=>{j(JSON.parse(x),{replace:s,state:c,relative:u})},[j,x,u,s,c]),null}function wl(l){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wv({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:g=!1,unstable_useTransitions:p}){Ne(!kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=l.replace(/^\/*/,"/"),y=M.useMemo(()=>({basename:j,navigator:d,static:g,unstable_useTransitions:p,future:{}}),[j,d,g,p]);typeof c=="string"&&(c=Ol(c));let{pathname:x="/",search:T="",hash:w="",state:U=null,key:L="default"}=c,q=M.useMemo(()=>{let Y=En(x,j);return Y==null?null:{location:{pathname:Y,search:T,hash:w,state:U,key:L},navigationType:u}},[j,x,T,w,U,L,u]);return qt(q!=null,`<Router basename="${j}"> is not able to match the URL "${x}${T}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:M.createElement(Ct.Provider,{value:y},M.createElement(Li.Provider,{children:s,value:q}))}function _v({children:l,location:s}){return fv(Wc(l),s)}function Wc(l,s=[]){let c=[];return M.Children.forEach(l,(u,d)=>{if(!M.isValidElement(u))return;let g=[...s,d];if(u.type===M.Fragment){c.push.apply(c,Wc(u.props.children,g));return}Ne(u.type===wl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=Wc(u.props.children,g)),c.push(p)}),c}var So="get",jo="application/x-www-form-urlencoded";function No(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Ev(l){return No(l)&&l.tagName.toLowerCase()==="button"}function Tv(l){return No(l)&&l.tagName.toLowerCase()==="form"}function Av(l){return No(l)&&l.tagName.toLowerCase()==="input"}function Cv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Mv(l,s){return l.button===0&&(!s||s==="_self")&&!Cv(l)}var lo=null;function Rv(){if(lo===null)try{new FormData(document.createElement("form"),0),lo=!1}catch{lo=!0}return lo}var Bv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dc(l){return l!=null&&!Bv.has(l)?(qt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`),null):l}function Ov(l,s){let c,u,d,g,p;if(Tv(l)){let j=l.getAttribute("action");u=j?En(j,s):null,c=l.getAttribute("method")||So,d=dc(l.getAttribute("enctype"))||jo,g=new FormData(l)}else if(Ev(l)||Av(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||j.getAttribute("action");if(u=y?En(y,s):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||So,d=dc(l.getAttribute("formenctype"))||dc(j.getAttribute("enctype"))||jo,g=new FormData(j,l),!Rv()){let{name:x,type:T,value:w}=l;if(T==="image"){let U=x?`${x}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else x&&g.append(x,w)}}else{if(No(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=So,u=null,d=jo,p=l}return g&&d==="text/plain"&&(p=g,g=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:g,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Dv(l,s,c,u){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:s&&En(d.pathname,s)==="/"?d.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function kv(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Uv(l,s,c){let u=await Promise.all(l.map(async d=>{let g=s.routes[d.route.id];if(g){let p=await kv(g,c);return p.links?p.links():[]}return[]}));return Yv(u.flat(1).filter(Nv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function K0(l,s,c,u,d,g){let p=(y,x)=>c[x]?y.route.id!==c[x].route.id:!0,j=(y,x)=>c[x].pathname!==y.pathname||c[x].route.path?.endsWith("*")&&c[x].params["*"]!==y.params["*"];return g==="assets"?s.filter((y,x)=>p(y,x)||j(y,x)):g==="data"?s.filter((y,x)=>{let T=u.routes[y.route.id];if(!T||!T.hasLoader)return!1;if(p(y,x)||j(y,x))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Hv(l,s,{includeHydrateFallback:c}={}){return Lv(l.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Lv(l){return[...new Set(l)]}function Gv(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function Yv(l,s){let c=new Set;return new Set(s),l.reduce((u,d)=>{let g=JSON.stringify(Gv(d));return c.has(g)||(c.add(g),u.push({key:g,link:d})),u},[])}function qg(){let l=M.useContext(Dl);return uf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function qv(){let l=M.useContext(ko);return uf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var cf=M.createContext(void 0);cf.displayName="FrameworkContext";function Vg(){let l=M.useContext(cf);return uf(l,"You must render this element inside a <HydratedRouter> element"),l}function Vv(l,s){let c=M.useContext(cf),[u,d]=M.useState(!1),[g,p]=M.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:x,onMouseLeave:T,onTouchStart:w}=s,U=M.useRef(null);M.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let Y=K=>{K.forEach(G=>{p(G.isIntersecting)})},X=new IntersectionObserver(Y,{threshold:.5});return U.current&&X.observe(U.current),()=>{X.disconnect()}}},[l]),M.useEffect(()=>{if(u){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let L=()=>{d(!0)},q=()=>{d(!1),p(!1)};return c?l!=="intent"?[g,U,{}]:[g,U,{onFocus:Mi(j,L),onBlur:Mi(y,q),onMouseEnter:Mi(x,L),onMouseLeave:Mi(T,q),onTouchStart:Mi(w,L)}]:[!1,U,{}]}function Mi(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function Qv({page:l,...s}){let{router:c}=qg(),u=M.useMemo(()=>Tg(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?M.createElement(Xv,{page:l,matches:u,...s}):null}function Kv(l){let{manifest:s,routeModules:c}=Vg(),[u,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return Uv(l,s,c).then(p=>{g||d(p)}),()=>{g=!0}},[l,s,c]),u}function Xv({page:l,matches:s,...c}){let u=Tn(),{future:d,manifest:g,routeModules:p}=Vg(),{basename:j}=qg(),{loaderData:y,matches:x}=qv(),T=M.useMemo(()=>K0(l,s,x,g,u,"data"),[l,s,x,g,u]),w=M.useMemo(()=>K0(l,s,x,g,u,"assets"),[l,s,x,g,u]),U=M.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let Y=new Set,X=!1;if(s.forEach(G=>{let H=g.routes[G.route.id];!H||!H.hasLoader||(!T.some(F=>F.route.id===G.route.id)&&G.route.id in y&&p[G.route.id]?.shouldRevalidate||H.hasClientLoader?X=!0:Y.add(G.route.id))}),Y.size===0)return[];let K=Dv(l,j,d.unstable_trailingSlashAwareDataRequests,"data");return X&&Y.size>0&&K.searchParams.set("_routes",s.filter(G=>Y.has(G.route.id)).map(G=>G.route.id).join(",")),[K.pathname+K.search]},[j,d.unstable_trailingSlashAwareDataRequests,y,u,g,T,s,l,p]),L=M.useMemo(()=>Hv(w,g),[w,g]),q=Kv(w);return M.createElement(M.Fragment,null,U.map(Y=>M.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...c})),L.map(Y=>M.createElement("link",{key:Y,rel:"modulepreload",href:Y,...c})),q.map(({key:Y,link:X})=>M.createElement("link",{key:Y,nonce:c.nonce,...X})))}function Zv(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jv&&(window.__reactRouterVersion="7.12.0")}catch{}function $v({basename:l,children:s,unstable_useTransitions:c,window:u}){let d=M.useRef();d.current==null&&(d.current=Cy({window:u,v5Compat:!0}));let g=d.current,[p,j]=M.useState({action:g.action,location:g.location}),y=M.useCallback(x=>{c===!1?j(x):M.startTransition(()=>j(x))},[c]);return M.useLayoutEffect(()=>g.listen(y),[g,y]),M.createElement(wv,{basename:l,children:s,location:p.location,navigationType:p.action,navigator:g,unstable_useTransitions:c})}var Qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uo=M.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:g,replace:p,state:j,target:y,to:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:U,...L},q){let{basename:Y,unstable_useTransitions:X}=M.useContext(Ct),K=typeof x=="string"&&Qg.test(x),G=Bg(x,Y);x=G.to;let H=uv(x,{relative:d}),[F,P,J]=Vv(u,L),N=Iv(x,{replace:p,state:j,target:y,preventScrollReset:T,relative:d,viewTransition:w,unstable_defaultShouldRevalidate:U,unstable_useTransitions:X});function ie(ue){s&&s(ue),ue.defaultPrevented||N(ue)}let be=M.createElement("a",{...L,...J,href:G.absoluteURL||H,onClick:G.isExternal||g?s:ie,ref:Zv(q,P),target:y,"data-discover":!K&&c==="render"?"true":void 0});return F&&!K?M.createElement(M.Fragment,null,be,M.createElement(Qv,{page:H})):be});Uo.displayName="Link";var Wv=M.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:g,to:p,viewTransition:j,children:y,...x},T){let w=Gi(p,{relative:x.relative}),U=Tn(),L=M.useContext(ko),{navigator:q,basename:Y}=M.useContext(Ct),X=L!=null&&l2(w)&&j===!0,K=q.encodeLocation?q.encodeLocation(w).pathname:w.pathname,G=U.pathname,H=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;c||(G=G.toLowerCase(),H=H?H.toLowerCase():null,K=K.toLowerCase()),H&&Y&&(H=En(H,Y)||H);const F=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let P=G===K||!d&&G.startsWith(K)&&G.charAt(F)==="/",J=H!=null&&(H===K||!d&&H.startsWith(K)&&H.charAt(K.length)==="/"),N={isActive:P,isPending:J,isTransitioning:X},ie=P?s:void 0,be;typeof u=="function"?be=u(N):be=[u,P?"active":null,J?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let ue=typeof g=="function"?g(N):g;return M.createElement(Uo,{...x,"aria-current":ie,className:be,ref:T,style:ue,to:p,viewTransition:j},typeof y=="function"?y(N):y)});Wv.displayName="NavLink";var Fv=M.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:g,method:p=So,action:j,onSubmit:y,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:U,...L},q)=>{let{unstable_useTransitions:Y}=M.useContext(Ct),X=n2(),K=a2(j,{relative:x}),G=p.toLowerCase()==="get"?"get":"post",H=typeof j=="string"&&Qg.test(j),F=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let J=P.nativeEvent.submitter,N=J?.getAttribute("formmethod")||p,ie=()=>X(J||P.currentTarget,{fetcherKey:s,method:N,navigate:c,replace:d,state:g,relative:x,preventScrollReset:T,viewTransition:w,unstable_defaultShouldRevalidate:U});Y&&c!==!1?M.startTransition(()=>ie()):ie()};return M.createElement("form",{ref:q,method:G,action:K,onSubmit:u?y:F,...L,"data-discover":!H&&l==="render"?"true":void 0})});Fv.displayName="Form";function Pv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(l){let s=M.useContext(Dl);return Ne(s,Pv(l)),s}function Iv(l,{target:s,replace:c,state:u,preventScrollReset:d,relative:g,viewTransition:p,unstable_defaultShouldRevalidate:j,unstable_useTransitions:y}={}){let x=Hg(),T=Tn(),w=Gi(l,{relative:g});return M.useCallback(U=>{if(Mv(U,s)){U.preventDefault();let L=c!==void 0?c:Hi(T)===Hi(w),q=()=>x(l,{replace:L,state:u,preventScrollReset:d,relative:g,viewTransition:p,unstable_defaultShouldRevalidate:j});y?M.startTransition(()=>q()):q()}},[T,x,w,c,u,s,l,d,g,p,j,y])}var e2=0,t2=()=>`__${String(++e2)}__`;function n2(){let{router:l}=Kg("useSubmit"),{basename:s}=M.useContext(Ct),c=vv(),u=l.fetch,d=l.navigate;return M.useCallback(async(g,p={})=>{let{action:j,method:y,encType:x,formData:T,body:w}=Ov(g,s);if(p.navigate===!1){let U=p.fetcherKey||t2();await u(U,c,p.action||j,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:w,formMethod:p.method||y,formEncType:p.encType||x,flushSync:p.flushSync})}else await d(p.action||j,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:T,body:w,formMethod:p.method||y,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,d,s,c])}function a2(l,{relative:s}={}){let{basename:c}=M.useContext(Ct),u=M.useContext(nn);Ne(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),g={...Gi(l||".",{relative:s})},p=Tn();if(l==null){g.search=p.search;let j=new URLSearchParams(g.search),y=j.getAll("index");if(y.some(T=>T==="")){j.delete("index"),y.filter(w=>w).forEach(w=>j.append("index",w));let T=j.toString();g.search=T?`?${T}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:_n([c,g.pathname])),Hi(g)}function l2(l,{relative:s}={}){let c=M.useContext(Dg);Ne(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Kg("useViewTransitionState"),d=Gi(l,{relative:s});if(!c.isTransitioning)return!1;let g=En(c.currentLocation.pathname,u)||c.currentLocation.pathname,p=En(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Ao(d.pathname,p)!=null||Ao(d.pathname,g)!=null}const i2="/assets/logo-Hzr1jdtX.png",r2=h.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,o2=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,s2=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,u2=h.img`
  height: 40px;
  width: auto;
`,c2=h.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,f2=h.div`
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
`,hc=h(Uo)`
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
`,d2=h.button`
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
`;function h2(){const l=Tn(),[s,c]=M.useState(!1);return o.jsx(r2,{children:o.jsxs(o2,{children:[o.jsx(hc,{to:"/",onClick:()=>c(!1),children:o.jsxs(s2,{children:[o.jsx(u2,{src:i2,alt:"SCKW Logo"}),o.jsx(c2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),o.jsxs(d2,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(d=>!d),children:["Menü",o.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),o.jsxs(f2,{id:"mobile-nav",$open:s,children:[o.jsx(hc,{to:"/sponsoring",$active:l.pathname==="/sponsoring"||l.pathname==="/sponsoring-v2",onClick:()=>c(!1),children:"🤝 Sponsoring"}),o.jsx(hc,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),!1]})]})})}const m2=h.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,mc=h.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,g2=h(Uo)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,p2=h.div`
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
`,b2=h.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function ff(){return o.jsx(m2,{children:o.jsxs(p2,{children:[o.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(mc,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),o.jsxs(b2,{"aria-label":"Rechtliches",children:[o.jsx(g2,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),o.jsx(mc,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),o.jsx(mc,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const tn=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"15.000 €/Jahr","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"12.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"9.500 €/Jahr","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"5.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"2.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Ab 100 € (Spende)","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"800 €/Jahr","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"150 €/pro Spiel","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"500 €/5 Spiele","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Pro Leistung","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Pro Leistung","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),x2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,y2=h.div`
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
`,v2=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,S2=h.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,j2=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,z2=h.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,w2=h.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,_2=h.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,E2=h.li`
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
`,T2=h.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,A2=h.span`
  flex: 1;
`,C2=h.a`
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
`,M2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,R2=h.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,B2=h.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,O2=h.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,D2=h.a`
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
`,k2="sponsoring@sckw.de";function Al({packages:l}){const s=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=p=>{const j=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},u=p=>{const j=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),y=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${k2}?subject=${y}&body=${x}`},d=p=>{const j=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=l.filter(p=>!p.title.includes("Platz-Renovierung"));return o.jsx(x2,{children:g.map((p,j)=>{const{isFullyBooked:y}=d(p),x=s(p.status),T=x==="vergeben"||y,w=y?"vergeben":x,U=p.keyBenefits||[];return o.jsxs(y2,{isVergeben:T,children:[o.jsxs(v2,{children:[o.jsx(S2,{children:c(p.title)}),o.jsx(j2,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!T&&o.jsx(z2,{children:p.price}),o.jsx(w2,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),T&&p.sponsors&&p.sponsors.length>0?o.jsxs(M2,{children:[p.sponsors[0].image&&o.jsx(R2,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),o.jsx(B2,{children:p.sponsors[0].name}),o.jsxs(O2,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&o.jsx(D2,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):o.jsx(_2,{children:U.map((L,q)=>o.jsxs(E2,{isHighlight:L.highlight,children:[o.jsx(T2,{children:L.icon}),o.jsx(A2,{children:L.text})]},q))}),o.jsx(C2,{href:T?void 0:u(p.title),isVergeben:T,children:T?"Vergeben":"Jetzt anfragen"})]},j)})})}const N2=h.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,U2=h.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,H2=h.button`
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
`,L2=h.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,G2=h.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,Y2=h.div`
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
`,q2=h.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,V2=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function Q2(){const[l,s]=M.useState([]),c=d=>{s(g=>g.includes(d)?g.filter(p=>p!==d):[...g,d])},u=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(g))};return o.jsx(N2,{children:V2.map(d=>{const g=l.includes(d.id);return o.jsxs(U2,{children:[o.jsxs(H2,{isOpen:g,onClick:()=>c(d.id),onKeyDown:p=>u(p,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(q2,{children:d.icon}),d.title]}),o.jsx(L2,{isOpen:g,children:"▼"})]}),o.jsx(G2,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(Y2,{children:d.content})})]},d.id)})})}const Xg="/assets/cheerleading_0-DQQGXi0R.jpg",Zg="/assets/cheerleading_1-NkLBARmH.jpg",Jg="/assets/cheerleading_2-CrezcZYL.jpg",$g="/assets/cheerleading_3-GN5rPHNN.jpg",Wg="/assets/1-ClVWb4ei.png",Fg="/assets/10-Bwp2eIye.png",Pg="/assets/11-W061sOUI.png",Ig="/assets/12-TjJyzl8L.png",ep="/assets/13-ChUUCdQQ.png",tp="/assets/14-BVhdRr98.png",np="/assets/2-CcfgIQYe.png",ap="/assets/3-DYiPkVd7.png",lp="/assets/4-1upoqVoS.png",ip="/assets/5-D0tadXAC.png",rp="/assets/6-NJ4ELm_j.png",op="/assets/7-BXo4_Bcj.png",sp="/assets/8-BbOqEnj_.png",up="/assets/9-CIK0gi9o.png",cp="/assets/herren_0-BVVgyt1l.jpg",fp="/assets/herren_1-B8ywOnNy.jpg",dp="/assets/herren_10-DPVQsg9B.jpg",hp="/assets/herren_11-wfWG62H3.jpg",mp="/assets/herren_12-DEJSN2zG.jpg",gp="/assets/herren_13-F52vdukE.jpg",pp="/assets/herren_14-Cq9hoKfG.jpg",bp="/assets/herren_15-aYIFGauG.jpg",xp="/assets/herren_16-NYI2EaEN.jpg",yp="/assets/herren_17-B_52ysA2.jpg",vp="/assets/herren_18-DbwjVNKJ.jpg",Sp="/assets/herren_19-BduD_J85.png",jp="/assets/herren_2--jFuixBF.jpg",zp="/assets/herren_3-BPz1zlkG.jpg",wp="/assets/herren_4-BZRrQaFr.jpg",_p="/assets/herren_5-D-QrfY2P.jpg",Ep="/assets/herren_6-DWQvi6Am.jpg",Tp="/assets/herren_7-BXO6B8Bt.jpg",Ap="/assets/herren_8-Cg4rdr7T.jpg",Cp="/assets/herren_9-DoLnTdRG.jpg",Mp="/assets/IMG-team-BGcF1agj.png",Rp="/assets/IMG_5349-CpvIVKhM.jpg",Bp="/assets/IMG_5369-DQ4CSwdg.jpg",Op="/assets/IMG_5421-BBzniIEN.jpg",Dp="/assets/IMG_5442-D2PgutWB.jpg",kp="/assets/IMG_5952-B9VW6Qie.jpg",Np="/assets/Unbenann324t-IPGo6eoQ.png",Up="/assets/image0-DDrU5aZn.jpeg",Hp="/assets/image11-BNM8hTkT.jpeg",Lp="/assets/image8-BUnedp9U.jpeg",K2="/assets/grafhardenberg-Di5cVggE.png",X2="/assets/horta-DydWIGV7.png",Z2="/assets/logans-BgpKwKYA.png",J2="/assets/ricobet-DsVC-eZt.png",$2="/assets/rothaus-DqkKD9yW.png",W2="/assets/tasty-B2pSa1rE.png",F2="/assets/cabin-window-B83r_CDB.jpg",P2="/assets/outside-9-xz17qL.jpg",I2="/assets/shower-B75caJ-F.jpg",e5="/assets/sitting-area-D7khB3Gw.jpg",t5="/assets/toilet-BpMHYbhh.jpg",n5=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Xg,"../assets/gallery/cheerleading/cheerleading_1.jpg":Zg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Jg,"../assets/gallery/cheerleading/cheerleading_3.jpg":$g,"../assets/gallery/damen/1.png":Wg,"../assets/gallery/damen/10.png":Fg,"../assets/gallery/damen/11.png":Pg,"../assets/gallery/damen/12.png":Ig,"../assets/gallery/damen/13.png":ep,"../assets/gallery/damen/14.png":tp,"../assets/gallery/damen/2.png":np,"../assets/gallery/damen/3.png":ap,"../assets/gallery/damen/4.png":lp,"../assets/gallery/damen/5.png":ip,"../assets/gallery/damen/6.png":rp,"../assets/gallery/damen/7.png":op,"../assets/gallery/damen/8.png":sp,"../assets/gallery/damen/9.png":up,"../assets/gallery/herren/herren_0.jpg":cp,"../assets/gallery/herren/herren_1.jpg":fp,"../assets/gallery/herren/herren_10.jpg":dp,"../assets/gallery/herren/herren_11.jpg":hp,"../assets/gallery/herren/herren_12.jpg":mp,"../assets/gallery/herren/herren_13.jpg":gp,"../assets/gallery/herren/herren_14.jpg":pp,"../assets/gallery/herren/herren_15.jpg":bp,"../assets/gallery/herren/herren_16.jpg":xp,"../assets/gallery/herren/herren_17.jpg":yp,"../assets/gallery/herren/herren_18.jpg":vp,"../assets/gallery/herren/herren_19.png":Sp,"../assets/gallery/herren/herren_2.jpg":jp,"../assets/gallery/herren/herren_3.jpg":zp,"../assets/gallery/herren/herren_4.jpg":wp,"../assets/gallery/herren/herren_5.jpg":_p,"../assets/gallery/herren/herren_6.jpg":Ep,"../assets/gallery/herren/herren_7.jpg":Tp,"../assets/gallery/herren/herren_8.jpg":Ap,"../assets/gallery/herren/herren_9.jpg":Cp,"../assets/gallery/jfv/IMG-team.png":Mp,"../assets/gallery/jfv/IMG_5349.jpg":Rp,"../assets/gallery/jfv/IMG_5369.jpg":Bp,"../assets/gallery/jfv/IMG_5421.jpg":Op,"../assets/gallery/jfv/IMG_5442.jpg":Dp,"../assets/gallery/jfv/IMG_5952.jpg":kp,"../assets/gallery/jfv/Unbenann324t.png":Np,"../assets/gallery/jfv/image0.jpeg":Up,"../assets/gallery/jfv/image11.jpeg":Hp,"../assets/gallery/jfv/image8.jpeg":Lp}),a5=Object.assign({"../assets/sponsors/grafhardenberg.png":K2,"../assets/sponsors/horta.png":X2,"../assets/sponsors/logans.png":Z2,"../assets/sponsors/ricobet.png":J2,"../assets/sponsors/rothaus.png":$2,"../assets/sponsors/tasty.png":W2}),l5=Object.assign({"../assets/renovation/cabin-window.jpg":F2,"../assets/renovation/outside.jpg":P2,"../assets/renovation/shower.jpg":I2,"../assets/renovation/sitting-area.jpg":e5,"../assets/renovation/toilet.jpg":t5}),Gp=l=>l.split("/").pop()?.toLowerCase()||"",i5=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function r5(l){const s=[...l];for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[s[c],s[u]]=[s[u],s[c]]}return s}const Yp=()=>{const l={};Object.entries(n5).forEach(([u,d])=>{const g=i5(u);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(u=>{l[u]=r5(l[u])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(u=>{l[u]&&(s[u]=l[u])}),Object.keys(l).forEach(u=>{c.includes(u.toLowerCase())||(s[u]=l[u])}),s},o5=()=>{const l={};return Object.entries(a5).forEach(([s,c])=>{const u=Gp(s);l[u]=c}),l},qp=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(l5).forEach(([s,c])=>{const u=Gp(s);u.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):u.includes("outside")||u.includes("cabin-window")?u.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):u.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(u.includes("toilet")||u.includes("shower")||u.includes("wash"))&&(u.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):u.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},wn=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Xg,"../assets/gallery/cheerleading/cheerleading_1.jpg":Zg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Jg,"../assets/gallery/cheerleading/cheerleading_3.jpg":$g,"../assets/gallery/damen/1.png":Wg,"../assets/gallery/damen/10.png":Fg,"../assets/gallery/damen/11.png":Pg,"../assets/gallery/damen/12.png":Ig,"../assets/gallery/damen/13.png":ep,"../assets/gallery/damen/14.png":tp,"../assets/gallery/damen/2.png":np,"../assets/gallery/damen/3.png":ap,"../assets/gallery/damen/4.png":lp,"../assets/gallery/damen/5.png":ip,"../assets/gallery/damen/6.png":rp,"../assets/gallery/damen/7.png":op,"../assets/gallery/damen/8.png":sp,"../assets/gallery/damen/9.png":up,"../assets/gallery/herren/herren_0.jpg":cp,"../assets/gallery/herren/herren_1.jpg":fp,"../assets/gallery/herren/herren_10.jpg":dp,"../assets/gallery/herren/herren_11.jpg":hp,"../assets/gallery/herren/herren_12.jpg":mp,"../assets/gallery/herren/herren_13.jpg":gp,"../assets/gallery/herren/herren_14.jpg":pp,"../assets/gallery/herren/herren_15.jpg":bp,"../assets/gallery/herren/herren_16.jpg":xp,"../assets/gallery/herren/herren_17.jpg":yp,"../assets/gallery/herren/herren_18.jpg":vp,"../assets/gallery/herren/herren_19.png":Sp,"../assets/gallery/herren/herren_2.jpg":jp,"../assets/gallery/herren/herren_3.jpg":zp,"../assets/gallery/herren/herren_4.jpg":wp,"../assets/gallery/herren/herren_5.jpg":_p,"../assets/gallery/herren/herren_6.jpg":Ep,"../assets/gallery/herren/herren_7.jpg":Tp,"../assets/gallery/herren/herren_8.jpg":Ap,"../assets/gallery/herren/herren_9.jpg":Cp,"../assets/gallery/jfv/IMG-team.png":Mp,"../assets/gallery/jfv/IMG_5349.jpg":Rp,"../assets/gallery/jfv/IMG_5369.jpg":Bp,"../assets/gallery/jfv/IMG_5421.jpg":Op,"../assets/gallery/jfv/IMG_5442.jpg":Dp,"../assets/gallery/jfv/IMG_5952.jpg":kp,"../assets/gallery/jfv/Unbenann324t.png":Np,"../assets/gallery/jfv/image0.jpeg":Up,"../assets/gallery/jfv/image11.jpeg":Hp,"../assets/gallery/jfv/image8.jpeg":Lp})).find(([u])=>u.includes(l));return c?c[1]:""},df=(l,s)=>wn(`${l}/${l}_${s}.jpg`);Yp(),o5(),qp();function s5(){const l=Yp(),[s,c]=M.useState(null);return M.useEffect(()=>{if(!s)return;const u=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[s]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([u,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(u5,{children:u.toUpperCase()}),o.jsx(c5,{children:d.map((g,p)=>o.jsx(f5,{src:g,alt:`Bild ${p+1} aus ${u}`,onClick:()=>c({folder:u,idx:p}),style:{cursor:"pointer"}},p))}),s&&s.folder===u&&o.jsx(d5,{onClick:()=>c(null),children:o.jsxs(h5,{onClick:g=>g.stopPropagation(),children:[o.jsx(m5,{src:d[s.idx],alt:`Großansicht aus ${u}`}),o.jsx(g5,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},u))]})}const u5=h.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,c5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,f5=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,d5=h.div`
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
`,h5=h.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,m5=h.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,g5=h.button`
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
`,p5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,b5=h.div`
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
`,x5=h.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,y5=h.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,v5=h.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,S5=h.div`
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
`,j5=h.a`
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
`;function gc({icon:l,title:s,description:c,packages:u,buttonHref:d,buttonText:g}){return o.jsxs(b5,{children:[o.jsx(x5,{children:l}),o.jsx(y5,{children:s}),o.jsx(v5,{children:c}),o.jsx(S5,{children:u.map((p,j)=>o.jsxs("div",{children:[p,j<u.length-1&&o.jsx("br",{})]},j))}),o.jsx(j5,{href:d,children:g})]})}const z5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,w5=h.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,_5=h.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,E5=h.p`
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
`;function Vp({headline:l,description:s,contactInfos:c}){const u=d=>{d.preventDefault();const g=d.currentTarget,p=new FormData(g);if(String(p.get("website")||"").trim()!=="")return;const y=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),T=String(p.get("email")||"").trim(),w=String(p.get("phone")||"").trim(),U={};if(y||(U.firstName="Bitte Vornamen angeben"),x||(U.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T)||(U.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(w)||(U.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(U).length>0){const L=Object.keys(U)[0],q=g.querySelector(`[name="${L}"]`);q&&q.focus(),alert(Object.values(U).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),g.reset()};return o.jsx(T5,{id:"kontakt",children:o.jsxs(A5,{children:[o.jsx(L5,{children:l}),o.jsx(G5,{children:s}),o.jsx(z5,{children:c.map((d,g)=>o.jsxs(w5,{children:[o.jsxs(_5,{children:[d.icon," ",d.title]}),o.jsx(E5,{$isEmail:d.isEmail,children:d.isEmail?o.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},g))}),o.jsxs(C5,{children:[o.jsx(M5,{children:"Kontakt aufnehmen"}),o.jsx(R5,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),o.jsxs(B5,{noValidate:!0,onSubmit:u,children:[o.jsxs(pc,{children:[o.jsxs(Di,{children:[o.jsx("label",{htmlFor:"firstName",children:"Vorname"}),o.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),o.jsxs(Di,{children:[o.jsx("label",{htmlFor:"lastName",children:"Nachname"}),o.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),o.jsxs(pc,{children:[o.jsxs(Di,{children:[o.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),o.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),o.jsxs(Di,{children:[o.jsx("label",{htmlFor:"phone",children:"Telefon"}),o.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),o.jsx(pc,{children:o.jsxs(O5,{children:[o.jsx("label",{htmlFor:"email",children:"E-Mail"}),o.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),o.jsxs(D5,{"aria-hidden":"true",tabIndex:-1,children:[o.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),o.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),o.jsxs(k5,{children:[o.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),o.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",o.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),o.jsxs(N5,{children:[o.jsx(U5,{type:"submit",children:"Absenden"}),o.jsxs(H5,{children:["Alternativ:"," ",o.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const T5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,A5=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,C5=h.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,M5=h.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,R5=h.p`
  margin: 0 0 1rem 0;
  color: #555;
`,B5=h.form`
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
`,pc=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Di=h.div`
  display: flex;
  flex-direction: column;
`,O5=h(Di)`
  grid-column: 1 / -1;
`,D5=h.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,k5=h.div`
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
`,N5=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,U5=h.button`
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
`,H5=h.span`
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
`,L5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,G5=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Y5=h.section`
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
`,q5=h.h1`
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
`,V5=h.h2`
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
`,X0=h.a`
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
`,Q5=h.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,K5=h.main`
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
`,Ri=h.h2`
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
`,X5=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,Z5=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,J5=h.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,$5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,W5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,F5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Z0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,J0=h.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,$0=h.ul`
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
`,P5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,I5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,eS=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,tS=h.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,nS=h.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,aS=h.ul`
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
`,bc=h.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,xc=h.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,yc=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,vc=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Sc=h.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,jc=h.div`
  font-size: 0.98rem;
  color: #666;
`,lS=h.div`
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
`,iS=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,rS=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,oS=h.a`
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
`,sS=h.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,uS=h.div`
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
`,cS=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,fS=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,dS=h.a`
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
`,hS=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,mS=h.h3`
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
`,gS=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,pS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,W0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,F0=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,P0=h.table`
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
`,bS=h.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,xS=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,yS=h.ul`
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
`,vS=h.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,SS=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,jS=h.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,zS=h.a`
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
`;function wS(){return o.jsxs(o.Fragment,{children:[o.jsx(Y5,{children:o.jsxs(X5,{children:[o.jsx(q5,{children:"SC Konstanz-Wollmatingen"}),o.jsx(V5,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),o.jsxs(Q5,{children:[o.jsx(X0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),o.jsx(X0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),o.jsxs(K5,{children:[o.jsx(Ri,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),o.jsx(Z5,{children:o.jsx(J5,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),o.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[o.jsx(sS,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),o.jsxs(p5,{role:"region","aria-label":"Sponsoring-Kategorien",children:[o.jsx(gc,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),o.jsx(gc,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),o.jsx(gc,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),o.jsxs("section",{"aria-labelledby":"premium-pakete",children:[o.jsx(Ri,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),o.jsx(Al,{packages:tn.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[o.jsx(Ri,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),o.jsx(Al,{packages:tn.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"starter-pakete",children:[o.jsx(Ri,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),o.jsx(Al,{packages:tn.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),o.jsxs(uS,{children:[o.jsx(cS,{children:"⚽ Ballspende-Beispiel ansehen"}),o.jsx(fS,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),o.jsx(dS,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),o.jsxs($5,{children:[o.jsx(W5,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsxs(F5,{children:[o.jsxs(Z0,{children:[o.jsx(J0,{children:"📊 Erreichte Reichweite"}),o.jsxs($0,{children:[o.jsx("li",{children:"15+ Heimspiele pro Saison"}),o.jsx("li",{children:"200+ Zuschauer pro Spiel"}),o.jsx("li",{children:"2.500+ Instagram Follower"}),o.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),o.jsxs(Z0,{children:[o.jsx(J0,{children:"🏆 Sportlicher Erfolg"}),o.jsxs($0,{children:[o.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),o.jsx("li",{children:"2. Mannschaften pro Abteilung"}),o.jsx("li",{children:"Cheerleading-Team aktiv"}),o.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),o.jsx(Ri,{children:"Zusätzliche Werbemöglichkeiten"}),o.jsxs(P5,{children:[o.jsx(I5,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs(eS,{children:[o.jsxs(tS,{children:[o.jsxs(yc,{children:[o.jsx(vc,{children:"1 Seite (Farbe)"}),o.jsx(Sc,{children:"1.000 €"}),o.jsx(jc,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(yc,{children:[o.jsx(vc,{children:"1/2 Seite (Farbe)"}),o.jsx(Sc,{children:"500 €"}),o.jsx(jc,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(yc,{children:[o.jsx(vc,{children:"1/4 Seite (Farbe)"}),o.jsx(Sc,{children:"250 €"}),o.jsx(jc,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(nS,{children:o.jsxs(aS,{children:[o.jsxs(bc,{children:[o.jsx(xc,{}),"15 Ausgaben pro Saison"]}),o.jsxs(bc,{children:[o.jsx(xc,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(bc,{children:[o.jsx(xc,{}),"Digitale Version (Social Media & Website)"]})]})})]}),o.jsxs(lS,{children:[o.jsx(iS,{children:"📖 Aktuelle Ausgabe als Beispiel"}),o.jsx(rS,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),o.jsx(oS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),o.jsxs(hS,{children:[o.jsx(mS,{children:"Werbeflächen auf dem Vereinsbus"}),o.jsx(gS,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),o.jsxs(pS,{children:[o.jsxs(W0,{children:[o.jsx(F0,{children:"Premium-Flächen"}),o.jsxs(P0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche (100×80 cm)"}),o.jsx("td",{children:"Sehr hoch"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentüren (links/rechts)"}),o.jsx("td",{children:"Hoch"}),o.jsx("td",{children:"je 900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Hintere Seitenflächen"}),o.jsx("td",{children:"Mittel-hoch"}),o.jsx("td",{children:"je 600 €"})]})]})]})]}),o.jsxs(W0,{children:[o.jsx(F0,{children:"Standard-Flächen"}),o.jsxs(P0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),o.jsx("td",{children:"Mittel"}),o.jsx("td",{children:"400 € je Seite"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Frontstoßstange"}),o.jsx("td",{children:"Gering-mittel"}),o.jsx("td",{children:"250 €"})]})]})]})]})]}),o.jsxs(bS,{children:[o.jsx(xS,{children:"Zusatzoptionen:"}),o.jsxs(yS,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),o.jsxs(vS,{children:[o.jsx(SS,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),o.jsx(jS,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),o.jsx(zS,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),o.jsx(Q2,{}),o.jsx(Vp,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),o.jsx(s5,{})]}),o.jsx(ff,{})]})}const _S=h.div`
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
`,ES=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,TS=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,AS=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,CS=h.div`
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
`,MS=h.img`
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
`,RS=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,BS=h.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=h.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,DS=h.div`
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
`,kS=h.div`
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
`,NS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,zc=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,wc=h.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:l})=>l};
  flex-shrink: 0;
`,US=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Qp=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:wn("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:wn("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:wn("herren/herren_16")}],HS=Math.max(...Qp.map(l=>l.value));function LS(){return o.jsxs(_S,{children:[o.jsx(ES,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),o.jsx(TS,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),o.jsx(AS,{children:Qp.map(l=>o.jsxs(CS,{children:[o.jsx(MS,{src:l.image,alt:l.label}),o.jsxs(RS,{children:[o.jsxs(BS,{children:[l.icon," ",l.label]}),o.jsx(OS,{children:o.jsx(DS,{$percent:l.value/HS*100,$gradient:l.gradient})})]}),o.jsxs(kS,{children:[(l.value/1e3).toFixed(0),"k"]})]},l.label))}),o.jsxs(NS,{children:[o.jsxs(zc,{children:[o.jsx(wc,{$color:"#9ca3af"}),o.jsx("span",{children:"Aktuell (Winterpause)"})]}),o.jsxs(zc,{children:[o.jsx(wc,{$color:"#e10073"}),o.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),o.jsxs(zc,{children:[o.jsx(wc,{$color:"#ff6b9d"}),o.jsx("span",{children:"Prognose kommende Saison"})]})]}),o.jsxs(US,{children:[o.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const GS=h.div`
  width: 100%;
  margin: 2rem 0;
`,YS=h.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,qS=h.table`
  width: 100%;
  border-collapse: collapse;
`,I0=h.th`
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
`,ja=h.td`
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
`,VS=h.td`
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
`,QS=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,KS=h.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${l=>l.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${l=>l.isVergeben?.8:1};
`,XS=h.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,ZS=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,_c=h.div`
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
`,eg=h.a`
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
`,JS="sponsoring@sckw.de";function $S({packages:l}){const s=u=>{const d=u.replace(/[^\w\s]/gi,"").trim(),g=encodeURIComponent(`Interesse am Paket "${d}"`);return`mailto:${JS}?subject=${g}`},c=u=>{const d=u.benefits.find(p=>{const j=p.toLowerCase();return j.includes("social media")||j.includes("instagram")});if(!d)return"-";const g=d.toLowerCase();return g.includes("premium")||g.includes("allen")?"ÜBERALL":g.includes("sehr präsent")?"Sehr präsent":g.includes("regelmässig")||g.includes("regelmäßig")?"Regelmäßig":"Standard"};return o.jsxs(GS,{children:[o.jsx(YS,{children:o.jsxs(qS,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(I0,{children:"Paket"}),l.map((u,d)=>o.jsx(I0,{isVergeben:u.status.includes("Vergeben"),children:u.title},d))]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx(ja,{children:"Preis"}),l.map((u,d)=>o.jsx(VS,{isVergeben:u.status.includes("Vergeben"),children:u.price},d))]}),o.jsxs("tr",{children:[o.jsx(ja,{children:"Trikot/Banner"}),l.map((u,d)=>{const g=u.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return o.jsx(ja,{children:g?"✅ Ja":"-"},d)})]}),o.jsxs("tr",{children:[o.jsx(ja,{children:"Social Media"}),l.map((u,d)=>{const g=c(u);return o.jsx(ja,{isHighlight:g==="ÜBERALL",children:g==="-"?"-":`✅ ${g}`},d)})]}),o.jsxs("tr",{children:[o.jsx(ja,{children:"Aktion"}),l.map((u,d)=>o.jsx(ja,{children:o.jsx(eg,{href:u.status.includes("Vergeben")?void 0:s(u.title),isVergeben:u.status.includes("Vergeben"),children:u.status.includes("Vergeben")?"Vergeben":"Anfragen"})},d))]})]})]})}),o.jsx(QS,{children:l.map((u,d)=>{const g=u.status.includes("Vergeben");return o.jsxs(KS,{isVergeben:g,children:[o.jsx(XS,{children:u.title}),o.jsx(ZS,{children:u.price}),o.jsxs(_c,{children:[o.jsx("span",{children:"Status"}),o.jsx("span",{children:g?"🟥 Vergeben":"🟩 Verfügbar"})]}),o.jsxs(_c,{children:[o.jsx("span",{children:"Social Media"}),o.jsx("span",{children:c(u)})]}),o.jsxs(_c,{children:[o.jsx("span",{children:"Vorteile"}),o.jsxs("span",{children:[u.benefits.length," Leistungen"]})]}),o.jsx(eg,{href:g?void 0:s(u.title),isVergeben:g,children:g?"Bereits vergeben":"Jetzt anfragen"})]},d)})})]})}const WS=h.div`
  margin-top: 2.5rem;
`,FS=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,PS=h.button`
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
`,IS=h.div`
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
`,ej=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,tj=tn.filter(l=>["15.000 €/Jahr","12.000 €/Jahr","9.500 €/Jahr"].includes(l.price)),nj=tn.filter(l=>["5.000 €/Jahr","2.000 €/Jahr","800 €/Jahr"].includes(l.price)),aj=tn.filter(l=>["150 €/pro Spiel","500 €/5 Spiele"].includes(l.price));function lj(){const[l,s]=M.useState("premium"),c=[{key:"premium",label:"🏆 Premium",packages:tj},{key:"lokal",label:"🏢 Lokal",packages:nj},{key:"starter",label:"🌟 Starter",packages:aj}],u=c.find(d=>d.key===l);return o.jsxs(WS,{children:[o.jsx(FS,{children:c.map(d=>o.jsx(PS,{$active:l===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),o.jsxs(IS,{children:[u&&o.jsx($S,{packages:u.packages}),o.jsxs(ej,{children:[l==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",l==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",l==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const ij=h.div`
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
`,rj=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,oj=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,sj=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,uj=h.table`
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
`,Ec=h.td`
  font-weight: 700;
  color: #e10073;
`,cj=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,fj=h.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,dj=h.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,hj=h.div`
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
`,mj=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function gj(){const l=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}];return o.jsxs(ij,{children:[o.jsx(rj,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),o.jsx(oj,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),o.jsx(sj,{children:o.jsxs(uj,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Leistung / Erfolg"}),o.jsx("th",{children:"Starter"}),o.jsx("th",{children:"Premium"}),o.jsx("th",{children:"Kombi (Beispiel)"})]})}),o.jsxs("tbody",{children:[l.map((s,c)=>o.jsxs("tr",{children:[o.jsx("td",{children:s.label}),o.jsx(Ec,{children:s.starter}),o.jsx(Ec,{children:s.premium}),o.jsx(Ec,{children:s.kombi})]},c)),o.jsxs("tr",{children:[o.jsx("td",{children:"Erwartete Kosten"}),o.jsx("td",{children:"~5.000 €"}),o.jsx("td",{children:"~12.000 €"}),o.jsx("td",{children:"~9.000 €"})]})]})]})}),o.jsx(cj,{children:["Starter","Premium","Kombi"].map(s=>o.jsxs(fj,{children:[o.jsx(dj,{children:s}),l.map((c,u)=>o.jsxs(hj,{children:[o.jsx("span",{children:c.label}),o.jsx("span",{children:s==="Starter"?c.starter:s==="Premium"?c.premium:c.kombi})]},u))]},s))}),o.jsx(mj,{children:"Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison."})]})}const pj=h.div`
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
`,bj=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,xj=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,yj=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,vj=h.table`
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
`,Sj=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,jj=h.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,zj=h.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,wj=h.div`
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
`,_j=h.div`
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
`,Ej=h.div`
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
`;function Tj(){const l=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return o.jsxs(pj,{children:[o.jsx(bj,{children:"👤 Spielerpatenschaften (diskret)"}),o.jsx(xj,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),o.jsx(yj,{children:o.jsxs(vj,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Merkmal"}),o.jsx("th",{children:"Bronze"}),o.jsx("th",{children:"Silber"}),o.jsx("th",{children:"Gold"})]})}),o.jsx("tbody",{children:l.map((s,c)=>o.jsxs("tr",{children:[o.jsx("td",{children:s.label}),o.jsx("td",{children:s.bronze}),o.jsx("td",{children:s.silber}),o.jsx("td",{children:s.gold})]},c))})]})}),o.jsx(Sj,{children:["Bronze","Silber","Gold"].map(s=>o.jsxs(jj,{children:[o.jsx(zj,{children:s}),l.map((c,u)=>o.jsxs(wj,{children:[o.jsx("span",{children:c.label}),o.jsx("span",{children:s==="Bronze"?c.bronze:s==="Silber"?c.silber:c.gold})]},u))]},s))}),o.jsxs(_j,{children:[o.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),o.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',o.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',o.jsx("em",{children:"[Foto vom Torjubel]"})]}),o.jsxs(Ej,{children:[o.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const Aj=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`,Cj=h.a`
  background: white;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 120px;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 24px rgba(225, 0, 115, 0.15);
  }
`,Mj=h.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
`,Rj=h.div`
  font-size: 0.85rem;
  color: #333;
  font-weight: 600;
  line-height: 1.3;
`,Bj=h.div`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px dashed #e0e0e0;
  min-height: 120px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
`,Oj=h.div`
  text-align: center;
  padding: 3rem 1.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;function Dj(){const l=tn.find(d=>d.title.includes("Bandenwerbung")),s=l?.sponsors||[],u=(l?.maxSponsors||30)-s.length;return s.length===0?o.jsx(Oj,{children:"Aktuell noch keine Bandenwerbung-Partner vorhanden. Seien Sie einer der Ersten und sichern Sie sich Ihre Werbefläche!"}):o.jsxs(Aj,{children:[s.map((d,g)=>o.jsxs(Cj,{href:d.website||"#",target:"_blank",rel:"noopener noreferrer",children:[d.image&&o.jsx(Mj,{src:`/sponsors/${d.image}`,alt:d.name}),o.jsx(Rj,{children:d.name})]},g)),u>0&&Array.from({length:Math.min(u,6)}).map((d,g)=>o.jsx(Bj,{children:"Noch verfügbar"},`placeholder-${g}`))]})}const jn=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,_l=h.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,io=h(_l)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,In=h.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,ea=h.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,ta=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,kj=h.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,Nj=h.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,Uj=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Hj=h.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Lj=h.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Gj=h.p`
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
`,Yj=h.div`
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
`,qj=h.div`
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
`,Vj=h.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Qj=h.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Kj=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,tg=h.a`
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
`,Xj=h.div`
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
`,ro=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,oo=h.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,so=h.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Zj=h.div`
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
`,Jj=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Tc=h.div`
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
`,Ac=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Cc=h.div`
  padding: 1.5rem 1.25rem 2rem;
`,Mc=h.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,Rc=h.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,uo=h.div`
  margin-top: 2.5rem;
`,co=h.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,fo=h.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,$j=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,Bc=h.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,Wj=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Oc=h.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,Dc=h.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,kc=h.div`
  padding: 1.25rem 1rem 1.5rem;
`,Nc=h.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,Uc=h.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,ng=h.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,Fj=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,ag=h.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,Pj=h.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,Ij=h.table`
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
`,e3=h.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,t3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,ho=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,mo=h.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,go=h.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,n3=[{value:"250.000",label:"Reichweite / 90 Tage"},{value:"32.000",label:"Reichweite / 30 Tage"},{value:"50-80k",label:"Monat im Spielbetrieb"},{value:"500-800k",label:"Saisonreichweite"}],a3=tn.filter(l=>["15.000 €/Jahr","12.000 €/Jahr","9.500 €/Jahr"].includes(l.price)),l3=tn.filter(l=>["5.000 €/Jahr","2.000 €/Jahr","800 €/Jahr"].includes(l.price)),i3=tn.filter(l=>["150 €/pro Spiel","500 €/5 Spiele"].includes(l.price));function r3(){const l=[wn("herren/herren_6"),wn("herren/herren_16"),wn("herren/herren_5"),wn("herren/herren_14")].filter(Boolean),[s,c]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const u=setInterval(()=>{c(d=>(d+1)%l.length)},6e3);return()=>clearInterval(u)},[l.length]),o.jsxs(o.Fragment,{children:[o.jsxs(kj,{children:[l.map((u,d)=>o.jsx(Nj,{$bg:u,$active:d===s},d)),o.jsx(Uj,{}),o.jsxs(Hj,{children:[o.jsx(Lj,{children:"Sponsoring, das messbar wirkt"}),o.jsxs(Gj,{children:["In der Winterpause erzielen wir bereits"," ",o.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",o.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),o.jsx(Yj,{children:n3.map(u=>o.jsxs(qj,{children:[o.jsx(Vj,{children:u.value}),o.jsx(Qj,{children:u.label})]},u.label))}),o.jsxs(Kj,{children:[o.jsx(tg,{href:"#kontakt",$primary:!0,onClick:u=>{u.preventDefault();const d=document.getElementById("kontakt");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),o.jsx(tg,{href:"#pakete",onClick:u=>{u.preventDefault();const d=document.getElementById("pakete");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),o.jsx(io,{children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Warum sich Sponsoring bei uns lohnt"}),o.jsx(ta,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),o.jsxs(Jj,{children:[o.jsxs(Tc,{children:[o.jsx(Ac,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),o.jsxs(Cc,{children:[o.jsx(Mc,{children:"Sichtbarkeit, die bleibt"}),o.jsx(Rc,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),o.jsxs(Tc,{children:[o.jsx(Ac,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),o.jsxs(Cc,{children:[o.jsx(Mc,{children:"Ihre Kunden sind hier"}),o.jsx(Rc,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),o.jsxs(Tc,{children:[o.jsx(Ac,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),o.jsxs(Cc,{children:[o.jsx(Mc,{children:"Doppelte Wirkung"}),o.jsx(Rc,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),o.jsx(_l,{id:"pakete",children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Finden Sie Ihr perfektes Paket"}),o.jsx(ta,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, faire Preise, sofort anfragbar."})]}),o.jsxs(uo,{children:[o.jsx(co,{children:"Premium-Partnerschaften"}),o.jsx(Al,{packages:a3})]}),o.jsxs(uo,{children:[o.jsx(co,{children:"Pakete im Vergleich"}),o.jsx(lj,{})]}),o.jsx(gj,{}),o.jsx(Tj,{}),o.jsxs(uo,{children:[o.jsx(co,{children:"Lokale Werbemöglichkeiten"}),o.jsx(Al,{packages:l3}),o.jsx(fo,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),o.jsxs(uo,{children:[o.jsx(co,{children:"Starter & Spieltag"}),o.jsx(Al,{packages:i3})]})]})}),o.jsx(io,{id:"reichweite",children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"So viele Menschen erreichen Sie"}),o.jsx(ta,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),o.jsxs(Xj,{children:[o.jsxs(ro,{children:[o.jsx(oo,{children:"32.000"}),o.jsx(so,{children:"Reichweite / 30 Tage"})]}),o.jsxs(ro,{children:[o.jsx(oo,{children:"250.000"}),o.jsx(so,{children:"Reichweite / 90 Tage"})]}),o.jsxs(ro,{children:[o.jsx(oo,{children:"50-80k"}),o.jsx(so,{children:"Pro Monat in Saison"})]}),o.jsxs(ro,{children:[o.jsx(oo,{children:"500-800k"}),o.jsx(so,{children:"Saisonreichweite (konservativ)"})]})]}),o.jsxs(Zj,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",o.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),o.jsx(_l,{children:o.jsx(jn,{children:o.jsx(LS,{})})}),o.jsx(_l,{children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Was Sie auf Social Media bekommen"}),o.jsx(ta,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),o.jsxs($j,{children:[o.jsx(Bc,{children:"📱 Feed-Posts mit Ihrem Logo"}),o.jsx(Bc,{children:"📸 Stories & Erwähnungen"}),o.jsx(Bc,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),o.jsx(fo,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),o.jsx(io,{id:"buswerbung",children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Mobile Werbung auf unserem Vereinsbus"}),o.jsx(ta,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),o.jsxs(Fj,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[o.jsxs("div",{style:{background:"#f8f9fa",borderRadius:12,padding:"2rem",marginBottom:"1.5rem",textAlign:"center"},children:[o.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚌"}),o.jsx("div",{style:{color:"#999",fontSize:"0.95rem"},children:"Foto des Vereinsbusses folgt in Kürze"})]}),o.jsx(ag,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),o.jsx(Pj,{children:o.jsxs(Ij,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Fläche"}),o.jsx("th",{children:"Größe (ca.)"}),o.jsx("th",{children:"Preis/Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Motorhaube"}),o.jsx("td",{children:"100 x 65 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"1.000 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche gesamt (Doppeltür)"}),o.jsx("td",{children:"180 x 170 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"2.000 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche pro Tür"}),o.jsx("td",{children:"80 x 160 cm"}),o.jsxs("td",{children:["je ",o.jsx("strong",{children:"1.000 €"})]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitenfläche groß (links, unter Fenstern)"}),o.jsx("td",{children:"350 x 70 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"1.500 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitenfläche groß (rechts, unter Fenstern)"}),o.jsx("td",{children:"350 x 70 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"1.500 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Schiebetür"}),o.jsx("td",{children:"130 x 150 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"1.200 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (umlaufend)"}),o.jsx("td",{children:"15-20 cm Höhe"}),o.jsx("td",{children:o.jsx("strong",{children:"800 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Heckstreifen"}),o.jsx("td",{children:"170 x 20 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"600 €"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Dachfläche (optional)"}),o.jsx("td",{children:"200 x 150 cm"}),o.jsx("td",{children:o.jsx("strong",{children:"1.000 €"})})]})]})]})}),o.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[o.jsx(ag,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),o.jsxs(e3,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"}),o.jsx("li",{children:"Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"})]})]})]}),o.jsx(fo,{children:"Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!"})]})}),o.jsx(_l,{children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Ihre Marke in Aktion"}),o.jsx(ta,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),o.jsxs(Wj,{children:[o.jsxs(Oc,{children:[o.jsx(Dc,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),o.jsxs(kc,{children:[o.jsx(Nc,{children:"Stadionmagazin"}),o.jsx(Uc,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),o.jsx(ng,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),o.jsxs(Oc,{children:[o.jsx(Dc,{src:wn("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),o.jsxs(kc,{children:[o.jsx(Nc,{children:"Bandenwerbung"}),o.jsx(Uc,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),o.jsxs(Oc,{children:[o.jsx(Dc,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),o.jsxs(kc,{children:[o.jsx(Nc,{children:"Ballspende"}),o.jsx(Uc,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),o.jsx(ng,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),o.jsx(io,{children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"Diese Unternehmen vertrauen uns bereits"}),o.jsx(ta,{children:"Starke Partner am Spielfeldrand - werden Sie Teil dieser Erfolgsgeschichte!"})]}),o.jsx(Dj,{}),o.jsxs(fo,{children:["Noch ",o.jsx("strong",{children:"verfügbare Plätze"})," für Bandenwerbung. Sichern Sie sich jetzt Ihre Werbefläche am Spielfeldrand!"]})]})}),o.jsx(_l,{children:o.jsxs(jn,{children:[o.jsxs(In,{children:[o.jsx(ea,{children:"In 4 Schritten zum Sponsoring-Start"}),o.jsx(ta,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),o.jsxs(t3,{children:[o.jsxs(ho,{children:[o.jsx(mo,{children:"1. Kontakt"}),o.jsx(go,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),o.jsxs(ho,{children:[o.jsx(mo,{children:"2. Bedarf"}),o.jsx(go,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),o.jsxs(ho,{children:[o.jsx(mo,{children:"3. Angebot"}),o.jsx(go,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),o.jsxs(ho,{children:[o.jsx(mo,{children:"4. Umsetzung"}),o.jsx(go,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),o.jsx(Vp,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`}]}),o.jsx(ff,{})]})}const o3=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],s3=h.section`
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
`,u3=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,c3=h.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,f3=h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,d3=h.main`
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
`,h3=h.section`
  margin-bottom: 4rem;
`,m3=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,g3=h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,p3=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,b3=h.div`
  text-align: center;
  margin-bottom: 3rem;
`,x3=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,y3=h.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,v3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,S3=h.div`
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
`,j3=h.div`
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
`,z3=h.div`
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
`,w3=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,_3=h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,E3=h.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,T3=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,A3=h.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,C3=h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,M3=h.button`
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
`,R3=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,B3=h.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,O3=h.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,D3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,gl=h.div`
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
`,lg=h.div`
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
`,pl=h.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,bl=h.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,xl=h.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,yl=h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,ke=h.li`
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
`,vl=h.button`
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
`,k3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,N3=h.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,U3=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,H3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Hc=h.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Lc=h.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Gc=h.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Yc=h.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,L3=h.a`
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
`,G3=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Y3=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,q3=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Sl=h.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,jl=h.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,zl=h.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function V3(){return o.jsxs(o.Fragment,{children:[o.jsx(s3,{children:o.jsxs(u3,{children:[o.jsx(c3,{children:"SCKW Jobbörse"}),o.jsx(f3,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(d3,{children:[o.jsxs(h3,{children:[o.jsx(m3,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(g3,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(p3,{children:[o.jsxs(b3,{children:[o.jsx(x3,{children:"So könnte es aussehen"}),o.jsx(y3,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(v3,{children:o3.map(l=>o.jsxs(S3,{children:[l.isExample&&o.jsx(j3,{children:"MUSTER"}),o.jsx(z3,{children:o.jsx(w3,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),o.jsx(_3,{children:l.title}),o.jsx(E3,{children:l.company}),o.jsx(T3,{children:l.tags.map((s,c)=>o.jsx(A3,{children:s},c))}),o.jsx(C3,{children:l.description}),o.jsx(M3,{children:"Mehr erfahren"})]},l.id))})]}),o.jsxs(R3,{children:[o.jsx(B3,{children:"Preise für Stellenausschreibungen"}),o.jsx(O3,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(D3,{children:[o.jsxs(gl,{children:[o.jsx(pl,{children:"Basis"}),o.jsx(bl,{children:"149 €"}),o.jsx(xl,{children:"netto / Anzeige"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(ke,{children:"Firmenlogo und Link"}),o.jsx(ke,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(ke,{children:"Bewerbermanagement"})]}),o.jsx(vl,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(gl,{className:"popular",children:[o.jsx(lg,{children:"BELIEBT"}),o.jsx(pl,{children:"Standard"}),o.jsx(bl,{children:"229 €"}),o.jsx(xl,{children:"netto / Anzeige"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"Alle Basis-Features"}),o.jsx(ke,{children:"1 Social Media Post"}),o.jsx(ke,{children:"Instagram + Facebook Reichweite"}),o.jsx(ke,{children:"Newsletter-Erwähnung"})]}),o.jsx(vl,{children:"Standard wählen"})]}),o.jsxs(gl,{children:[o.jsx(pl,{children:"Boosted"}),o.jsx(bl,{children:"349 €"}),o.jsx(xl,{children:"netto / Anzeige"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"Alle Standard-Features"}),o.jsx(ke,{children:"Instagram Story"}),o.jsx(ke,{children:"Stadionmagazin-Erwähnung"}),o.jsx(ke,{children:"Prioritäre Platzierung"})]}),o.jsx(vl,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(k3,{children:[o.jsxs(gl,{children:[o.jsx(pl,{children:"Job Flat SMALL"}),o.jsx(bl,{children:"799 €"}),o.jsx(xl,{children:"netto / Jahr"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(ke,{children:"6 Social Media Posts"}),o.jsx(ke,{children:"Website-Präsenz"}),o.jsx(ke,{children:"Newsletter-Integration"})]}),o.jsx(vl,{className:"secondary",children:"Small Flat"})]}),o.jsxs(gl,{className:"popular",children:[o.jsx(lg,{children:"EMPFOHLEN"}),o.jsx(pl,{children:"Job Flat MEDIUM"}),o.jsx(bl,{children:"1.199 €"}),o.jsx(xl,{children:"netto / Jahr"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(ke,{children:"Stadionmagazin-Präsenz"}),o.jsx(ke,{children:"Social Media Posts"}),o.jsx(ke,{children:"Stories & Highlights"})]}),o.jsx(vl,{children:"Medium Flat"})]}),o.jsxs(gl,{children:[o.jsx(pl,{children:"Job Flat PARTNER"}),o.jsx(bl,{children:"1.499 €"}),o.jsx(xl,{children:"netto / Jahr"}),o.jsxs(yl,{children:[o.jsx(ke,{children:"Unbegrenzte Anzeigen"}),o.jsx(ke,{children:"Erwähnung bei Heimspielen"}),o.jsx(ke,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(ke,{children:"Prioritärer Support"})]}),o.jsx(vl,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(N3,{children:[o.jsx(U3,{children:"➕ Zusatzoptionen"}),o.jsxs(H3,{children:[o.jsxs(Hc,{children:[o.jsx(Lc,{children:"Social Story"}),o.jsx(Gc,{children:"39 €"}),o.jsx(Yc,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(Hc,{children:[o.jsx(Lc,{children:"Designservice"}),o.jsx(Gc,{children:"59 €"}),o.jsx(Yc,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(Hc,{children:[o.jsx(Lc,{children:"Stadionmagazin"}),o.jsx(Gc,{children:"99 €"}),o.jsx(Yc,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(L3,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(G3,{children:[o.jsx(Y3,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(q3,{children:[o.jsxs(Sl,{children:[o.jsx(jl,{children:"🏠"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(Sl,{children:[o.jsx(jl,{children:"👥"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(Sl,{children:[o.jsx(jl,{children:"💰"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(Sl,{children:[o.jsx(jl,{children:"📈"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(Sl,{children:[o.jsx(jl,{children:"⚡"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(Sl,{children:[o.jsx(jl,{children:"🤲"}),o.jsxs(zl,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(ff,{})]})}h.div`
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
  width: ${l=>Math.min(l.$progress,100)}%;
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
  opacity: ${l=>l.$isActive?1:0};
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
  background: ${l=>l.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
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
`;qp();const Q3=!1;function K3(){return o.jsxs($v,{children:[o.jsx(h2,{}),o.jsxs(_v,{children:[o.jsx(wl,{path:"/",element:o.jsx(Q0,{to:"/sponsoring",replace:!0})}),o.jsx(wl,{path:"/sponsoring",element:o.jsx(r3,{})}),o.jsx(wl,{path:"/sponsoring-v2",element:o.jsx(Q0,{to:"/sponsoring",replace:!0})}),o.jsx(wl,{path:"/sponsoring-v1",element:o.jsx(wS,{})}),o.jsx(wl,{path:"/jobs",element:o.jsx(V3,{})}),Q3]})]})}const X3={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");wx.createRoot(document.getElementById("root")).render(o.jsx(M.StrictMode,{children:o.jsx(Ey,{theme:X3,children:o.jsx(K3,{})})}));
