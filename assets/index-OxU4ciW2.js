(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function dx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var tc={exports:{}},Ci={};var d0;function hx(){if(d0)return Ci;d0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,g){var p=null;if(g!==void 0&&(p=""+g),d.key!==void 0&&(p=""+d.key),"key"in d){g={};for(var v in d)v!=="key"&&(g[v]=d[v])}else g=d;return d=g.ref,{$$typeof:l,type:u,key:p,ref:d!==void 0?d:null,props:g}}return Ci.Fragment=s,Ci.jsx=c,Ci.jsxs=c,Ci}var h0;function mx(){return h0||(h0=1,tc.exports=hx()),tc.exports}var o=mx(),nc={exports:{}},ae={};var m0;function gx(){if(m0)return ae;m0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),U=Symbol.iterator;function L(j){return j===null||typeof j!="object"?null:(j=U&&j[U]||j["@@iterator"],typeof j=="function"?j:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Q(j,O,K){this.props=j,this.context=O,this.refs=X,this.updater=K||q}Q.prototype.isReactComponent={},Q.prototype.setState=function(j,O){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,O,"setState")},Q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function G(){}G.prototype=Q.prototype;function H(j,O,K){this.props=j,this.context=O,this.refs=X,this.updater=K||q}var F=H.prototype=new G;F.constructor=H,Y(F,Q.prototype),F.isPureReactComponent=!0;var P=Array.isArray;function J(){}var N={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function be(j,O,K){var Z=K.ref;return{$$typeof:l,type:j,key:O,ref:Z!==void 0?Z:null,props:K}}function ue(j,O){return be(j.type,O,j.props)}function Ue(j){return typeof j=="object"&&j!==null&&j.$$typeof===l}function Me(j){var O={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(K){return O[K]})}var gt=/\/+/g;function ot(j,O){return typeof j=="object"&&j!==null&&j.key!=null?Me(""+j.key):O.toString(36)}function pt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(J,J):(j.status="pending",j.then(function(O){j.status==="pending"&&(j.status="fulfilled",j.value=O)},function(O){j.status==="pending"&&(j.status="rejected",j.reason=O)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function B(j,O,K,Z,ne){var re=typeof j;(re==="undefined"||re==="boolean")&&(j=null);var pe=!1;if(j===null)pe=!0;else switch(re){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(j.$$typeof){case l:case s:pe=!0;break;case w:return pe=j._init,B(pe(j._payload),O,K,Z,ne)}}if(pe)return ne=ne(j),pe=Z===""?"."+ot(j,0):Z,P(ne)?(K="",pe!=null&&(K=pe.replace(gt,"$&/")+"/"),B(ne,O,K,"",function(Wt){return Wt})):ne!=null&&(Ue(ne)&&(ne=ue(ne,K+(ne.key==null||j&&j.key===ne.key?"":(""+ne.key).replace(gt,"$&/")+"/")+pe)),O.push(ne)),1;pe=0;var qe=Z===""?".":Z+":";if(P(j))for(var we=0;we<j.length;we++)Z=j[we],re=qe+ot(Z,we),pe+=B(Z,O,K,re,ne);else if(we=L(j),typeof we=="function")for(j=we.call(j),we=0;!(Z=j.next()).done;)Z=Z.value,re=qe+ot(Z,we++),pe+=B(Z,O,K,re,ne);else if(re==="object"){if(typeof j.then=="function")return B(pt(j),O,K,Z,ne);throw O=String(j),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return pe}function V(j,O,K){if(j==null)return j;var Z=[],ne=0;return B(j,Z,"","",function(re){return O.call(K,re,ne++)}),Z}function ee(j){if(j._status===-1){var O=j._result;O=O(),O.then(function(K){(j._status===0||j._status===-1)&&(j._status=1,j._result=K)},function(K){(j._status===0||j._status===-1)&&(j._status=2,j._result=K)}),j._status===-1&&(j._status=0,j._result=O)}if(j._status===1)return j._result.default;throw j._result}var ce=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},xe={map:V,forEach:function(j,O,K){V(j,function(){O.apply(this,arguments)},K)},count:function(j){var O=0;return V(j,function(){O++}),O},toArray:function(j){return V(j,function(O){return O})||[]},only:function(j){if(!Ue(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ae.Activity=_,ae.Children=xe,ae.Component=Q,ae.Fragment=c,ae.Profiler=d,ae.PureComponent=H,ae.StrictMode=u,ae.Suspense=b,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ae.__COMPILER_RUNTIME={__proto__:null,c:function(j){return N.H.useMemoCache(j)}},ae.cache=function(j){return function(){return j.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(j,O,K){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Z=Y({},j.props),ne=j.key;if(O!=null)for(re in O.key!==void 0&&(ne=""+O.key),O)!ie.call(O,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&O.ref===void 0||(Z[re]=O[re]);var re=arguments.length-2;if(re===1)Z.children=K;else if(1<re){for(var pe=Array(re),qe=0;qe<re;qe++)pe[qe]=arguments[qe+2];Z.children=pe}return be(j.type,ne,Z)},ae.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:g,_context:j},j},ae.createElement=function(j,O,K){var Z,ne={},re=null;if(O!=null)for(Z in O.key!==void 0&&(re=""+O.key),O)ie.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ne[Z]=O[Z]);var pe=arguments.length-2;if(pe===1)ne.children=K;else if(1<pe){for(var qe=Array(pe),we=0;we<pe;we++)qe[we]=arguments[we+2];ne.children=qe}if(j&&j.defaultProps)for(Z in pe=j.defaultProps,pe)ne[Z]===void 0&&(ne[Z]=pe[Z]);return be(j,re,ne)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(j){return{$$typeof:v,render:j}},ae.isValidElement=Ue,ae.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:ee}},ae.memo=function(j,O){return{$$typeof:x,type:j,compare:O===void 0?null:O}},ae.startTransition=function(j){var O=N.T,K={};N.T=K;try{var Z=j(),ne=N.S;ne!==null&&ne(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(J,ce)}catch(re){ce(re)}finally{O!==null&&K.types!==null&&(O.types=K.types),N.T=O}},ae.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ae.use=function(j){return N.H.use(j)},ae.useActionState=function(j,O,K){return N.H.useActionState(j,O,K)},ae.useCallback=function(j,O){return N.H.useCallback(j,O)},ae.useContext=function(j){return N.H.useContext(j)},ae.useDebugValue=function(){},ae.useDeferredValue=function(j,O){return N.H.useDeferredValue(j,O)},ae.useEffect=function(j,O){return N.H.useEffect(j,O)},ae.useEffectEvent=function(j){return N.H.useEffectEvent(j)},ae.useId=function(){return N.H.useId()},ae.useImperativeHandle=function(j,O,K){return N.H.useImperativeHandle(j,O,K)},ae.useInsertionEffect=function(j,O){return N.H.useInsertionEffect(j,O)},ae.useLayoutEffect=function(j,O){return N.H.useLayoutEffect(j,O)},ae.useMemo=function(j,O){return N.H.useMemo(j,O)},ae.useOptimistic=function(j,O){return N.H.useOptimistic(j,O)},ae.useReducer=function(j,O,K){return N.H.useReducer(j,O,K)},ae.useRef=function(j){return N.H.useRef(j)},ae.useState=function(j){return N.H.useState(j)},ae.useSyncExternalStore=function(j,O,K){return N.H.useSyncExternalStore(j,O,K)},ae.useTransition=function(){return N.H.useTransition()},ae.version="19.2.3",ae}var g0;function Wc(){return g0||(g0=1,nc.exports=gx()),nc.exports}var M=Wc();const Ct=dx(M);var ac={exports:{}},Mi={},lc={exports:{}},ic={};var p0;function px(){return p0||(p0=1,(function(l){function s(B,V){var ee=B.length;B.push(V);e:for(;0<ee;){var ce=ee-1>>>1,xe=B[ce];if(0<d(xe,V))B[ce]=V,B[ee]=xe,ee=ce;else break e}}function c(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var V=B[0],ee=B.pop();if(ee!==V){B[0]=ee;e:for(var ce=0,xe=B.length,j=xe>>>1;ce<j;){var O=2*(ce+1)-1,K=B[O],Z=O+1,ne=B[Z];if(0>d(K,ee))Z<xe&&0>d(ne,K)?(B[ce]=ne,B[Z]=ee,ce=Z):(B[ce]=K,B[O]=ee,ce=O);else if(Z<xe&&0>d(ne,ee))B[ce]=ne,B[Z]=ee,ce=Z;else break e}}return V}function d(B,V){var ee=B.sortIndex-V.sortIndex;return ee!==0?ee:B.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var b=[],x=[],w=1,_=null,U=3,L=!1,q=!1,Y=!1,X=!1,Q=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var V=c(x);V!==null;){if(V.callback===null)u(x);else if(V.startTime<=B)u(x),V.sortIndex=V.expirationTime,s(b,V);else break;V=c(x)}}function P(B){if(Y=!1,F(B),!q)if(c(b)!==null)q=!0,J||(J=!0,Me());else{var V=c(x);V!==null&&pt(P,V.startTime-B)}}var J=!1,N=-1,ie=5,be=-1;function ue(){return X?!0:!(l.unstable_now()-be<ie)}function Ue(){if(X=!1,J){var B=l.unstable_now();be=B;var V=!0;try{e:{q=!1,Y&&(Y=!1,G(N),N=-1),L=!0;var ee=U;try{t:{for(F(B),_=c(b);_!==null&&!(_.expirationTime>B&&ue());){var ce=_.callback;if(typeof ce=="function"){_.callback=null,U=_.priorityLevel;var xe=ce(_.expirationTime<=B);if(B=l.unstable_now(),typeof xe=="function"){_.callback=xe,F(B),V=!0;break t}_===c(b)&&u(b),F(B)}else u(b);_=c(b)}if(_!==null)V=!0;else{var j=c(x);j!==null&&pt(P,j.startTime-B),V=!1}}break e}finally{_=null,U=ee,L=!1}V=void 0}}finally{V?Me():J=!1}}}var Me;if(typeof H=="function")Me=function(){H(Ue)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,ot=gt.port2;gt.port1.onmessage=Ue,Me=function(){ot.postMessage(null)}}else Me=function(){Q(Ue,0)};function pt(B,V){N=Q(function(){B(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(B){switch(U){case 1:case 2:case 3:var V=3;break;default:V=U}var ee=U;U=V;try{return B()}finally{U=ee}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=U;U=B;try{return V()}finally{U=ee}},l.unstable_scheduleCallback=function(B,V,ee){var ce=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ee+xe,B={id:w++,callback:V,priorityLevel:B,startTime:ee,expirationTime:xe,sortIndex:-1},ee>ce?(B.sortIndex=ee,s(x,B),c(b)===null&&B===c(x)&&(Y?(G(N),N=-1):Y=!0,pt(P,ee-ce))):(B.sortIndex=xe,s(b,B),q||L||(q=!0,J||(J=!0,Me()))),B},l.unstable_shouldYield=ue,l.unstable_wrapCallback=function(B){var V=U;return function(){var ee=U;U=V;try{return B.apply(this,arguments)}finally{U=ee}}}})(ic)),ic}var b0;function bx(){return b0||(b0=1,lc.exports=px()),lc.exports}var rc={exports:{}},at={};var x0;function xx(){if(x0)return at;x0=1;var l=Wc();function s(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)x+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(b,x,w){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:b,containerInfo:x,implementation:w}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(b,x){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return g(b,x,null,w)},at.flushSync=function(b){var x=p.T,w=u.p;try{if(p.T=null,u.p=2,b)return b()}finally{p.T=x,u.p=w,u.d.f()}},at.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(b,x))},at.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},at.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var w=x.as,_=v(w,x.crossOrigin),U=typeof x.integrity=="string"?x.integrity:void 0,L=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;w==="style"?u.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:_,integrity:U,fetchPriority:L}):w==="script"&&u.d.X(b,{crossOrigin:_,integrity:U,fetchPriority:L,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},at.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var w=v(x.as,x.crossOrigin);u.d.M(b,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(b)},at.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var w=x.as,_=v(w,x.crossOrigin);u.d.L(b,w,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},at.preloadModule=function(b,x){if(typeof b=="string")if(x){var w=v(x.as,x.crossOrigin);u.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(b)},at.requestFormReset=function(b){u.d.r(b)},at.unstable_batchedUpdates=function(b,x){return b(x)},at.useFormState=function(b,x,w){return p.H.useFormState(b,x,w)},at.useFormStatus=function(){return p.H.useHostTransitionStatus()},at.version="19.2.3",at}var y0;function yx(){if(y0)return rc.exports;y0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),rc.exports=xx(),rc.exports}var v0;function vx(){if(v0)return Mi;v0=1;var l=bx(),s=Wc(),c=yx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(g(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return b(i),e;if(r===a)return b(i),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),H=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case X:return"StrictMode";case P:return"Suspense";case J:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case H:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return ot(e(t))}catch{}}return null}var pt=Array.isArray,B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ce=[],xe=-1;function j(e){return{current:e}}function O(e){0>xe||(e.current=ce[xe],ce[xe]=null,xe--)}function K(e,t){xe++,ce[xe]=e.current,e.current=t}var Z=j(null),ne=j(null),re=j(null),pe=j(null);function qe(e,t){switch(K(re,t),K(ne,e),K(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?km(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=km(t),e=Nm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Z),K(Z,e)}function we(){O(Z),O(ne),O(re)}function Wt(e){e.memoizedState!==null&&K(pe,e);var t=Z.current,n=Nm(t,e.type);t!==n&&(K(ne,e),K(Z,n))}function Ft(e){ne.current===e&&(O(Z),O(ne)),pe.current===e&&(O(pe),wi._currentValue=ee)}var bt,Ma;function Rt(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",Ma=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+Ma}var Pt=!1;function Lo(e,t){if(!e||Pt)return"";Pt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(C){var A=C}Reflect.construct(e,[],k)}else{try{k.call()}catch(C){A=C}e.call(k.prototype)}}else{try{throw Error()}catch(C){A=C}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var y=f.split(`
`),T=h.split(`
`);for(i=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===y.length||i===T.length)for(a=y.length-1,i=T.length-1;1<=a&&0<=i&&y[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(y[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||y[a]!==T[i]){var R=`
`+y[a].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=a&&0<=i);break}}}finally{Pt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Rt(n):""}function Vp(e,t){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==t&&t!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return Lo(e.type,!1);case 11:return Lo(e.type.render,!1);case 1:return Lo(e.type,!0);case 31:return Rt("Activity");default:return""}}function df(e){try{var t="",n=null;do t+=Vp(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Go=Object.prototype.hasOwnProperty,Yo=l.unstable_scheduleCallback,qo=l.unstable_cancelCallback,Kp=l.unstable_shouldYield,Qp=l.unstable_requestPaint,xt=l.unstable_now,Xp=l.unstable_getCurrentPriorityLevel,hf=l.unstable_ImmediatePriority,mf=l.unstable_UserBlockingPriority,qi=l.unstable_NormalPriority,Zp=l.unstable_LowPriority,gf=l.unstable_IdlePriority,Jp=l.log,$p=l.unstable_setDisableYieldValue,Ul=null,yt=null;function Mn(e){if(typeof Jp=="function"&&$p(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ul,e)}catch{}}var vt=Math.clz32?Math.clz32:Pp,Wp=Math.log,Fp=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Wp(e)/Fp|0)|0}var Vi=256,Ki=262144,Qi=4194304;function ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=ra(a):(f&=h,f!==0?i=ra(f):n||(n=h&~e,n!==0&&(i=ra(n))))):(h=a&~r,h!==0?i=ra(h):f!==0?i=ra(f):n||(n=a&~e,n!==0&&(i=ra(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function Hl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ip(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(){var e=Qi;return Qi<<=1,(Qi&62914560)===0&&(Qi=4194304),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function e1(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,y=e.expirationTimes,T=e.hiddenUpdates;for(n=f&~n;0<n;){var R=31-vt(n),k=1<<R;h[R]=0,y[R]=-1;var A=T[R];if(A!==null)for(T[R]=null,R=0;R<A.length;R++){var C=A[R];C!==null&&(C.lane&=-536870913)}n&=~k}a!==0&&bf(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function bf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function xf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function yf(e,t){var n=t&-t;return n=(n&42)!==0?1:Ko(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vf(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:i0(e.type))}function Sf(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Rn=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Rn,st="__reactProps$"+Rn,Ra="__reactContainer$"+Rn,Xo="__reactEvents$"+Rn,t1="__reactListeners$"+Rn,n1="__reactHandles$"+Rn,jf="__reactResources$"+Rn,Gl="__reactMarker$"+Rn;function Zo(e){delete e[Pe],delete e[st],delete e[Xo],delete e[t1],delete e[n1]}function Ba(e){var t=e[Pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ra]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vm(e);e!==null;){if(n=e[Pe])return n;e=Vm(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){if(e=e[Pe]||e[Ra]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Da(e){var t=e[jf];return t||(t=e[jf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Gl]=!0}var zf=new Set,_f={};function oa(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(_f[e]=t,e=0;e<t.length;e++)zf.add(t[e])}var a1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wf={},Ef={};function l1(e){return Go.call(Ef,e)?!0:Go.call(wf,e)?!1:a1.test(e)?Ef[e]=!0:(wf[e]=!0,!1)}function Zi(e,t,n){if(l1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ji(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function rn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i1(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){if(!e._valueTracker){var t=Tf(e)?"checked":"value";e._valueTracker=i1(e,t,""+e[t])}}function Af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Tf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var r1=/[\n"\\]/g;function Ot(e){return e.replace(r1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $o(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Wo(e,f,Bt(t)):n!=null?Wo(e,f,Bt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Bt(h):e.removeAttribute("name")}function Cf(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Jo(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Jo(e)}function Wo(e,t,n){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Na(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mf(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function Rf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(pt(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Jo(e)}function Ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var o1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||o1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Of(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Bf(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Bf(e,r,t[r])}function Fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var s1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return u1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function on(){}var Po=null;function Io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,La=null;function Df(e){var t=Oa(e);if(t&&(e=t.stateNode)){var n=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if($o(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[st]||null;if(!i)throw Error(u(90));$o(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Af(a)}break e;case"textarea":Mf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Na(e,!!n.multiple,t,!1)}}}var es=!1;function kf(e,t,n){if(es)return e(t,n);es=!0;try{var a=e(t);return a}finally{if(es=!1,(Ha!==null||La!==null)&&(Ur(),Ha&&(t=Ha,e=La,La=Ha=null,Df(t),e)))for(t=0;t<e.length;t++)Df(e[t])}}function ql(e,t){var n=e.stateNode;if(n===null)return null;var a=n[st]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=!1;if(sn)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{ts=!1}var Bn=null,ns=null,Fi=null;function Nf(){if(Fi)return Fi;var e,t=ns,n=t.length,a,i="value"in Bn?Bn.value:Bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Fi=i.slice(e,1<a?1-a:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Uf(){return!1}function ut(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ii:Uf,this.isPropagationStopped=Uf,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=ut(sa),Kl=_({},sa,{view:0,detail:0}),c1=ut(Kl),as,ls,Ql,tr=_({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ql&&(Ql&&e.type==="mousemove"?(as=e.screenX-Ql.screenX,ls=e.screenY-Ql.screenY):ls=as=0,Ql=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Hf=ut(tr),f1=_({},tr,{dataTransfer:0}),d1=ut(f1),h1=_({},Kl,{relatedTarget:0}),is=ut(h1),m1=_({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),g1=ut(m1),p1=_({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b1=ut(p1),x1=_({},sa,{data:0}),Lf=ut(x1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=S1[e])?!!t[e]:!1}function rs(){return j1}var z1=_({},Kl,{key:function(e){if(e.key){var t=y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_1=ut(z1),w1=_({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ut(w1),E1=_({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),T1=ut(E1),A1=_({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=ut(A1),M1=_({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=ut(M1),B1=_({},sa,{newState:0,oldState:0}),O1=ut(B1),D1=[9,13,27,32],os=sn&&"CompositionEvent"in window,Xl=null;sn&&"documentMode"in document&&(Xl=document.documentMode);var k1=sn&&"TextEvent"in window&&!Xl,Yf=sn&&(!os||Xl&&8<Xl&&11>=Xl),qf=" ",Vf=!1;function Kf(e,t){switch(e){case"keyup":return D1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function N1(e,t){switch(e){case"compositionend":return Qf(t);case"keypress":return t.which!==32?null:(Vf=!0,qf);case"textInput":return e=t.data,e===qf&&Vf?null:e;default:return null}}function U1(e,t){if(Ga)return e==="compositionend"||!os&&Kf(e,t)?(e=Nf(),Fi=ns=Bn=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H1[e.type]:t==="textarea"}function Zf(e,t,n,a){Ha?La?La.push(a):La=[a]:Ha=a,t=Kr(t,"onChange"),0<t.length&&(n=new er("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Zl=null,Jl=null;function L1(e){Cm(e,0)}function nr(e){var t=Yl(e);if(Af(t))return e}function Jf(e,t){if(e==="change")return t}var $f=!1;if(sn){var ss;if(sn){var us="oninput"in document;if(!us){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),us=typeof Wf.oninput=="function"}ss=us}else ss=!1;$f=ss&&(!document.documentMode||9<document.documentMode)}function Ff(){Zl&&(Zl.detachEvent("onpropertychange",Pf),Jl=Zl=null)}function Pf(e){if(e.propertyName==="value"&&nr(Jl)){var t=[];Zf(t,Jl,e,Io(e)),kf(L1,t)}}function G1(e,t,n){e==="focusin"?(Ff(),Zl=t,Jl=n,Zl.attachEvent("onpropertychange",Pf)):e==="focusout"&&Ff()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nr(Jl)}function q1(e,t){if(e==="click")return nr(t)}function V1(e,t){if(e==="input"||e==="change")return nr(t)}function K1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:K1;function $l(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Go.call(t,i)||!St(e[i],t[i]))return!1}return!0}function If(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=If(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=If(n)}}function td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Q1=sn&&"documentMode"in document&&11>=document.documentMode,Ya=null,fs=null,Wl=null,ds=!1;function ad(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||Ya==null||Ya!==$i(a)||(a=Ya,"selectionStart"in a&&cs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wl&&$l(Wl,a)||(Wl=a,a=Kr(fs,"onSelect"),0<a.length&&(t=new er("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ya)))}function ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qa={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},hs={},ld={};sn&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function ca(e){if(hs[e])return hs[e];if(!qa[e])return e;var t=qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return hs[e]=t[n];return e}var id=ca("animationend"),rd=ca("animationiteration"),od=ca("animationstart"),X1=ca("transitionrun"),Z1=ca("transitionstart"),J1=ca("transitioncancel"),sd=ca("transitionend"),ud=new Map,ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ms.push("scrollEnd");function Kt(e,t){ud.set(e,t),oa(t,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Va=0,gs=0;function lr(){for(var e=Va,t=gs=Va=0;t<e;){var n=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var r=Dt[t];if(Dt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&cd(n,i,r)}}function ir(e,t,n,a){Dt[Va++]=e,Dt[Va++]=t,Dt[Va++]=n,Dt[Va++]=a,gs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ps(e,t,n,a){return ir(e,t,n,a),rr(e)}function fa(e,t){return ir(e,null,null,t),rr(e)}function cd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-vt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function rr(e){if(50<xi)throw xi=0,wu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ka={};function $1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,a){return new $1(e,t,n,a)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function un(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function or(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")bs(e)&&(f=1);else if(typeof e=="string")f=ex(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=jt(31,n,t,i),e.elementType=be,e.lanes=r,e;case Y:return da(n.children,i,r,t);case X:f=8,i|=24;break;case Q:return e=jt(12,n,t,i|2),e.elementType=Q,e.lanes=r,e;case P:return e=jt(13,n,t,i),e.elementType=P,e.lanes=r,e;case J:return e=jt(19,n,t,i),e.elementType=J,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:f=10;break e;case G:f=9;break e;case F:f=11;break e;case N:f=14;break e;case ie:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=jt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function da(e,t,n,a){return e=jt(7,e,a,t),e.lanes=n,e}function xs(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function dd(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function ys(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hd=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var n=hd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:df(t)},hd.set(e,t),t)}return{value:e,source:t,stack:df(t)}}var Qa=[],Xa=0,sr=null,Fl=0,Nt=[],Ut=0,On=null,It=1,en="";function cn(e,t){Qa[Xa++]=Fl,Qa[Xa++]=sr,sr=e,Fl=t}function md(e,t,n){Nt[Ut++]=It,Nt[Ut++]=en,Nt[Ut++]=On,On=e;var a=It;e=en;var i=32-vt(a)-1;a&=~(1<<i),n+=1;var r=32-vt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,It=1<<32-vt(t)+i|n<<i|a,en=r+e}else It=1<<r|n<<i|a,en=e}function vs(e){e.return!==null&&(cn(e,1),md(e,1,0))}function Ss(e){for(;e===sr;)sr=Qa[--Xa],Qa[Xa]=null,Fl=Qa[--Xa],Qa[Xa]=null;for(;e===On;)On=Nt[--Ut],Nt[Ut]=null,en=Nt[--Ut],Nt[Ut]=null,It=Nt[--Ut],Nt[Ut]=null}function gd(e,t){Nt[Ut++]=It,Nt[Ut++]=en,Nt[Ut++]=On,It=t.id,en=t.overflow,On=e}var Ie=null,Re=null,ge=!1,Dn=null,Ht=!1,js=Error(u(519));function kn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(kt(t,e)),js}function pd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Pe]=e,t[st]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<vi.length;n++)de(vi[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Cf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Rf(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Om(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||kn(e,!0)}function bd(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:Ie=Ie.return}}function Za(e){if(e!==Ie)return!1;if(!ge)return bd(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gu(e.type,e.memoizedProps)),n=!n),n&&Re&&kn(e),bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=qm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=qm(e)}else t===27?(t=Re,$n(e.type)?(e=Qu,Qu=null,Re=e):Re=t):Re=Ie?Gt(e.stateNode.nextSibling):null;return!0}function ha(){Re=Ie=null,ge=!1}function zs(){var e=Dn;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),Dn=null),e}function Pl(e){Dn===null?Dn=[e]:Dn.push(e)}var _s=j(null),ma=null,fn=null;function Nn(e,t,n){K(_s,t._currentValue),t._currentValue=n}function dn(e){e._currentValue=_s.current,O(_s)}function ws(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Es(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var y=0;y<t.length;y++)if(h.context===t[y]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ws(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ws(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ja(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var h=i.type;St(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===pe.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}i=i.return}e!==null&&Es(t,e,n,a),t.flags|=262144}function ur(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ma=e,fn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return xd(ma,e)}function cr(e,t){return ma===null&&ga(e),xd(e,t)}function xd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fn===null){if(e===null)throw Error(u(308));fn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fn=fn.next=t;return n}var W1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},F1=l.unstable_scheduleCallback,P1=l.unstable_NormalPriority,Ve={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ts(){return{controller:new W1,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&F1(P1,function(){e.controller.abort()})}var ei=null,As=0,$a=0,Wa=null;function I1(e,t){if(ei===null){var n=ei=[];As=0,$a=Ru(),Wa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return As++,t.then(yd,yd),t}function yd(){if(--As===0&&ei!==null){Wa!==null&&(Wa.status="fulfilled");var e=ei;ei=null,$a=0,Wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function eb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var vd=B.S;B.S=function(e,t){am=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I1(e,t),vd!==null&&vd(e,t)};var pa=j(null);function Cs(){var e=pa.current;return e!==null?e:Ce.pooledCache}function fr(e,t){t===null?K(pa,pa.current):K(pa,t.pool)}function Sd(){var e=Cs();return e===null?null:{parent:Ve._currentValue,pool:e}}var Fa=Error(u(460)),Ms=Error(u(474)),dr=Error(u(542)),hr={then:function(){}};function jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wd(e),e;default:if(typeof t.status=="string")t.then(on,on);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wd(e),e}throw xa=t,Fa}}function ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xa=n,Fa):n}}var xa=null;function _d(){if(xa===null)throw Error(u(459));var e=xa;return xa=null,e}function wd(e){if(e===Fa||e===dr)throw Error(u(483))}var Pa=null,ti=0;function mr(e){var t=ti;return ti+=1,Pa===null&&(Pa=[]),zd(Pa,e,t)}function ni(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gr(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ed(e){function t(z,S){if(e){var E=z.deletions;E===null?(z.deletions=[S],z.flags|=16):E.push(S)}}function n(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function a(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function i(z,S){return z=un(z,S),z.index=0,z.sibling=null,z}function r(z,S,E){return z.index=E,e?(E=z.alternate,E!==null?(E=E.index,E<S?(z.flags|=67108866,S):E):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function h(z,S,E,D){return S===null||S.tag!==6?(S=xs(E,z.mode,D),S.return=z,S):(S=i(S,E),S.return=z,S)}function y(z,S,E,D){var I=E.type;return I===Y?R(z,S,E.props.children,D,E.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&ba(I)===S.type)?(S=i(S,E.props),ni(S,E),S.return=z,S):(S=or(E.type,E.key,E.props,null,z.mode,D),ni(S,E),S.return=z,S)}function T(z,S,E,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=ys(E,z.mode,D),S.return=z,S):(S=i(S,E.children||[]),S.return=z,S)}function R(z,S,E,D,I){return S===null||S.tag!==7?(S=da(E,z.mode,D,I),S.return=z,S):(S=i(S,E),S.return=z,S)}function k(z,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=xs(""+S,z.mode,E),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case L:return E=or(S.type,S.key,S.props,null,z.mode,E),ni(E,S),E.return=z,E;case q:return S=ys(S,z.mode,E),S.return=z,S;case ie:return S=ba(S),k(z,S,E)}if(pt(S)||Me(S))return S=da(S,z.mode,E,null),S.return=z,S;if(typeof S.then=="function")return k(z,mr(S),E);if(S.$$typeof===H)return k(z,cr(z,S),E);gr(z,S)}return null}function A(z,S,E,D){var I=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return I!==null?null:h(z,S,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case L:return E.key===I?y(z,S,E,D):null;case q:return E.key===I?T(z,S,E,D):null;case ie:return E=ba(E),A(z,S,E,D)}if(pt(E)||Me(E))return I!==null?null:R(z,S,E,D,null);if(typeof E.then=="function")return A(z,S,mr(E),D);if(E.$$typeof===H)return A(z,S,cr(z,E),D);gr(z,E)}return null}function C(z,S,E,D,I){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return z=z.get(E)||null,h(S,z,""+D,I);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return z=z.get(D.key===null?E:D.key)||null,y(S,z,D,I);case q:return z=z.get(D.key===null?E:D.key)||null,T(S,z,D,I);case ie:return D=ba(D),C(z,S,E,D,I)}if(pt(D)||Me(D))return z=z.get(E)||null,R(S,z,D,I,null);if(typeof D.then=="function")return C(z,S,E,mr(D),I);if(D.$$typeof===H)return C(z,S,E,cr(S,D),I);gr(S,D)}return null}function $(z,S,E,D){for(var I=null,ye=null,W=S,oe=S=0,me=null;W!==null&&oe<E.length;oe++){W.index>oe?(me=W,W=null):me=W.sibling;var ve=A(z,W,E[oe],D);if(ve===null){W===null&&(W=me);break}e&&W&&ve.alternate===null&&t(z,W),S=r(ve,S,oe),ye===null?I=ve:ye.sibling=ve,ye=ve,W=me}if(oe===E.length)return n(z,W),ge&&cn(z,oe),I;if(W===null){for(;oe<E.length;oe++)W=k(z,E[oe],D),W!==null&&(S=r(W,S,oe),ye===null?I=W:ye.sibling=W,ye=W);return ge&&cn(z,oe),I}for(W=a(W);oe<E.length;oe++)me=C(W,z,oe,E[oe],D),me!==null&&(e&&me.alternate!==null&&W.delete(me.key===null?oe:me.key),S=r(me,S,oe),ye===null?I=me:ye.sibling=me,ye=me);return e&&W.forEach(function(ea){return t(z,ea)}),ge&&cn(z,oe),I}function te(z,S,E,D){if(E==null)throw Error(u(151));for(var I=null,ye=null,W=S,oe=S=0,me=null,ve=E.next();W!==null&&!ve.done;oe++,ve=E.next()){W.index>oe?(me=W,W=null):me=W.sibling;var ea=A(z,W,ve.value,D);if(ea===null){W===null&&(W=me);break}e&&W&&ea.alternate===null&&t(z,W),S=r(ea,S,oe),ye===null?I=ea:ye.sibling=ea,ye=ea,W=me}if(ve.done)return n(z,W),ge&&cn(z,oe),I;if(W===null){for(;!ve.done;oe++,ve=E.next())ve=k(z,ve.value,D),ve!==null&&(S=r(ve,S,oe),ye===null?I=ve:ye.sibling=ve,ye=ve);return ge&&cn(z,oe),I}for(W=a(W);!ve.done;oe++,ve=E.next())ve=C(W,z,oe,ve.value,D),ve!==null&&(e&&ve.alternate!==null&&W.delete(ve.key===null?oe:ve.key),S=r(ve,S,oe),ye===null?I=ve:ye.sibling=ve,ye=ve);return e&&W.forEach(function(fx){return t(z,fx)}),ge&&cn(z,oe),I}function Ae(z,S,E,D){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case L:e:{for(var I=E.key;S!==null;){if(S.key===I){if(I=E.type,I===Y){if(S.tag===7){n(z,S.sibling),D=i(S,E.props.children),D.return=z,z=D;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ie&&ba(I)===S.type){n(z,S.sibling),D=i(S,E.props),ni(D,E),D.return=z,z=D;break e}n(z,S);break}else t(z,S);S=S.sibling}E.type===Y?(D=da(E.props.children,z.mode,D,E.key),D.return=z,z=D):(D=or(E.type,E.key,E.props,null,z.mode,D),ni(D,E),D.return=z,z=D)}return f(z);case q:e:{for(I=E.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(z,S.sibling),D=i(S,E.children||[]),D.return=z,z=D;break e}else{n(z,S);break}else t(z,S);S=S.sibling}D=ys(E,z.mode,D),D.return=z,z=D}return f(z);case ie:return E=ba(E),Ae(z,S,E,D)}if(pt(E))return $(z,S,E,D);if(Me(E)){if(I=Me(E),typeof I!="function")throw Error(u(150));return E=I.call(E),te(z,S,E,D)}if(typeof E.then=="function")return Ae(z,S,mr(E),D);if(E.$$typeof===H)return Ae(z,S,cr(z,E),D);gr(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(z,S.sibling),D=i(S,E),D.return=z,z=D):(n(z,S),D=xs(E,z.mode,D),D.return=z,z=D),f(z)):n(z,S)}return function(z,S,E,D){try{ti=0;var I=Ae(z,S,E,D);return Pa=null,I}catch(W){if(W===Fa||W===dr)throw W;var ye=jt(29,W,null,z.mode);return ye.lanes=D,ye.return=z,ye}}}var ya=Ed(!0),Td=Ed(!1),Un=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Se&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=rr(e),cd(e,null,n),t}return ir(e,a,t,n),rr(e)}function ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,xf(e,n)}}function Os(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ds=!1;function li(){if(Ds){var e=Wa;if(e!==null)throw e}}function ii(e,t,n,a){Ds=!1;var i=e.updateQueue;Un=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var y=h,T=y.next;y.next=null,f===null?r=T:f.next=T,f=y;var R=e.alternate;R!==null&&(R=R.updateQueue,h=R.lastBaseUpdate,h!==f&&(h===null?R.firstBaseUpdate=T:h.next=T,R.lastBaseUpdate=y))}if(r!==null){var k=i.baseState;f=0,R=T=y=null,h=r;do{var A=h.lane&-536870913,C=A!==h.lane;if(C?(he&A)===A:(a&A)===A){A!==0&&A===$a&&(Ds=!0),R!==null&&(R=R.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var $=e,te=h;A=t;var Ae=n;switch(te.tag){case 1:if($=te.payload,typeof $=="function"){k=$.call(Ae,k,A);break e}k=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=te.payload,A=typeof $=="function"?$.call(Ae,k,A):$,A==null)break e;k=_({},k,A);break e;case 2:Un=!0}}A=h.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},R===null?(T=R=C,y=k):R=R.next=C,f|=A;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;C=h,h=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);R===null&&(y=k),i.baseState=y,i.firstBaseUpdate=T,i.lastBaseUpdate=R,r===null&&(i.shared.lanes=0),Kn|=f,e.lanes=f,e.memoizedState=k}}function Ad(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ad(n[e],t)}var Ia=j(null),pr=j(0);function Md(e,t){e=Sn,K(pr,e),K(Ia,t),Sn=e|t.baseLanes}function ks(){K(pr,Sn),K(Ia,Ia.current)}function Ns(){Sn=pr.current,O(Ia),O(pr)}var zt=j(null),Lt=null;function Gn(e){var t=e.alternate;K(Ge,Ge.current&1),K(zt,e),Lt===null&&(t===null||Ia.current!==null||t.memoizedState!==null)&&(Lt=e)}function Us(e){K(Ge,Ge.current),K(zt,e),Lt===null&&(Lt=e)}function Rd(e){e.tag===22?(K(Ge,Ge.current),K(zt,e),Lt===null&&(Lt=e)):Yn()}function Yn(){K(Ge,Ge.current),K(zt,zt.current)}function _t(e){O(zt),Lt===e&&(Lt=null),O(Ge)}var Ge=j(0);function br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Vu(n)||Ku(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hn=0,le=null,Ee=null,Ke=null,xr=!1,el=!1,va=!1,yr=0,ri=0,tl=null,tb=0;function He(){throw Error(u(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Ls(e,t,n,a,i,r){return hn=r,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?mh:eu,va=!1,r=n(a,i),va=!1,el&&(r=Od(t,n,a,i)),Bd(e),r}function Bd(e){B.H=ui;var t=Ee!==null&&Ee.next!==null;if(hn=0,Ke=Ee=le=null,xr=!1,ri=0,tl=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&ur(e)&&(Qe=!0))}function Od(e,t,n,a){le=e;var i=0;do{if(el&&(tl=null),ri=0,el=!1,25<=i)throw Error(u(301));if(i+=1,Ke=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=gh,r=t(n,a)}while(el);return r}function nb(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?oi(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(le.flags|=1024),t}function Gs(){var e=yr!==0;return yr=0,e}function Ys(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qs(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}hn=0,Ke=Ee=le=null,el=!1,ri=yr=0,tl=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?le.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ye(){if(Ee===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ke===null?le.memoizedState:Ke.next;if(t!==null)Ke=t,Ee=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ke===null?le.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(e){var t=ri;return ri+=1,tl===null&&(tl=[]),e=zd(tl,e,t),t=le,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?mh:eu),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oi(e);if(e.$$typeof===H)return et(e)}throw Error(u(438,String(e)))}function Vs(e){var t=null,n=le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vr(),le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ue;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Ye();return Ks(t,Ee,e)}function Ks(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,y=null,T=t,R=!1;do{var k=T.lane&-536870913;if(k!==T.lane?(he&k)===k:(hn&k)===k){var A=T.revertLane;if(A===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),k===$a&&(R=!0);else if((hn&A)===A){T=T.next,A===$a&&(R=!0);continue}else k={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(h=y=k,f=r):y=y.next=k,le.lanes|=A,Kn|=A;k=T.action,va&&n(r,k),r=T.hasEagerState?T.eagerState:n(r,k)}else A={lane:k,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},y===null?(h=y=A,f=r):y=y.next=A,le.lanes|=k,Kn|=k;T=T.next}while(T!==null&&T!==t);if(y===null?f=r:y.next=h,!St(r,e.memoizedState)&&(Qe=!0,R&&(n=Wa,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=y,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qs(e){var t=Ye(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);St(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Dd(e,t,n){var a=le,i=Ye(),r=ge;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!St((Ee||i).memoizedState,n);if(f&&(i.memoizedState=n,Qe=!0),i=i.queue,Js(Ud.bind(null,a,i,e),[e]),i.getSnapshot!==t||f||Ke!==null&&Ke.memoizedState.tag&1){if(a.flags|=2048,nl(9,{destroy:void 0},Nd.bind(null,a,i,n,t),null),Ce===null)throw Error(u(349));r||(hn&127)!==0||kd(a,t,n)}return n}function kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t=vr(),le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nd(e,t,n,a){t.value=n,t.getSnapshot=a,Hd(t)&&Ld(e)}function Ud(e,t,n){return n(function(){Hd(t)&&Ld(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Ld(e){var t=fa(e,2);t!==null&&mt(t,e,2)}function Xs(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),va){Mn(!0);try{n()}finally{Mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function Gd(e,t,n,a){return e.baseState=n,Ks(e,Ee,typeof a=="function"?a:mn)}function ab(e,t,n,a,i){if(wr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};B.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Yd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Yd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=B.T,f={};B.T=f;try{var h=n(i,a),y=B.S;y!==null&&y(f,h),qd(e,t,h)}catch(T){Zs(e,t,T)}finally{r!==null&&f.types!==null&&(r.types=f.types),B.T=r}}else try{r=n(i,a),qd(e,t,r)}catch(T){Zs(e,t,T)}}function qd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Vd(e,t,a)},function(a){return Zs(e,t,a)}):Vd(e,t,n)}function Vd(e,t,n){t.status="fulfilled",t.value=n,Kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function Zs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Kd(t),t=t.next;while(t!==a)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Xd(e,t){if(ge){var n=Ce.formState;if(n!==null){e:{var a=le;if(ge){if(Re){t:{for(var i=Re,r=Ht;i.nodeType!==8;){if(!r){i=null;break t}if(i=Gt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Re=Gt(i.nextSibling),a=i.data==="F!";break e}}kn(a)}a=!1}a&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=a,n=fh.bind(null,le,a),a.dispatch=n,a=Xs(!1),r=Is.bind(null,le,!1,a.queue),a=it(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=ab.bind(null,le,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Zd(e){var t=Ye();return Jd(t,Ee,e)}function Jd(e,t,n){if(t=Ks(e,t,Qd)[0],e=jr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=oi(t)}catch(f){throw f===Fa?dr:f}else a=t;t=Ye();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(le.flags|=2048,nl(9,{destroy:void 0},lb.bind(null,i,n),null)),[a,r,e]}function lb(e,t){e.action=t}function $d(e){var t=Ye(),n=Ee;if(n!==null)return Jd(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function nl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=le.updateQueue,t===null&&(t=vr(),le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Wd(){return Ye().memoizedState}function zr(e,t,n,a){var i=it();le.flags|=e,i.memoizedState=nl(1|t,{destroy:void 0},n,a===void 0?null:a)}function _r(e,t,n,a){var i=Ye();a=a===void 0?null:a;var r=i.memoizedState.inst;Ee!==null&&a!==null&&Hs(a,Ee.memoizedState.deps)?i.memoizedState=nl(t,r,n,a):(le.flags|=e,i.memoizedState=nl(1|t,r,n,a))}function Fd(e,t){zr(8390656,8,e,t)}function Js(e,t){_r(2048,8,e,t)}function ib(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=vr(),le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Pd(e){var t=Ye().memoizedState;return ib({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Id(e,t){return _r(4,2,e,t)}function eh(e,t){return _r(4,4,e,t)}function th(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nh(e,t,n){n=n!=null?n.concat([e]):null,_r(4,4,th.bind(null,t,e),n)}function $s(){}function ah(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Hs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function lh(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Hs(t,a[1]))return a[0];if(a=e(),va){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[a,t],a}function Ws(e,t,n){return n===void 0||(hn&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=im(),le.lanes|=e,Kn|=e,n)}function ih(e,t,n,a){return St(n,t)?n:Ia.current!==null?(e=Ws(e,n,a),St(e,t)||(Qe=!0),e):(hn&42)===0||(hn&1073741824)!==0&&(he&261930)===0?(Qe=!0,e.memoizedState=n):(e=im(),le.lanes|=e,Kn|=e,t)}function rh(e,t,n,a,i){var r=V.p;V.p=r!==0&&8>r?r:8;var f=B.T,h={};B.T=h,Is(e,!1,t,n);try{var y=i(),T=B.S;if(T!==null&&T(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=eb(y,a);si(e,t,R,Tt(e))}else si(e,t,a,Tt(e))}catch(k){si(e,t,{then:function(){},status:"rejected",reason:k},Tt())}finally{V.p=r,f!==null&&h.types!==null&&(f.types=h.types),B.T=f}}function rb(){}function Fs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=oh(e).queue;rh(e,i,t,ee,n===null?rb:function(){return sh(e),n(a)})}function oh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sh(e){var t=oh(e);t.next===null&&(t=e.alternate.memoizedState),si(e,t.next.queue,{},Tt())}function Ps(){return et(wi)}function uh(){return Ye().memoizedState}function ch(){return Ye().memoizedState}function ob(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tt();e=Hn(n);var a=Ln(t,e,n);a!==null&&(mt(a,t,n),ai(a,t,n)),t={cache:Ts()},e.payload=t;return}t=t.return}}function sb(e,t,n){var a=Tt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wr(e)?dh(t,n):(n=ps(e,t,n,a),n!==null&&(mt(n,e,a),hh(n,t,a)))}function fh(e,t,n){var a=Tt();si(e,t,n,a)}function si(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wr(e))dh(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,St(h,f))return ir(e,t,i,0),Ce===null&&lr(),!1}catch{}if(n=ps(e,t,i,a),n!==null)return mt(n,e,a),hh(n,t,a),!0}return!1}function Is(e,t,n,a){if(a={lane:2,revertLane:Ru(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wr(e)){if(t)throw Error(u(479))}else t=ps(e,n,a,2),t!==null&&mt(t,e,2)}function wr(e){var t=e.alternate;return e===le||t!==null&&t===le}function dh(e,t){el=xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,xf(e,n)}}var ui={readContext:et,use:Sr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};ui.useEffectEvent=He;var mh={readContext:et,use:Sr,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Fd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zr(4194308,4,th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){zr(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var a=e();if(va){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=it();if(n!==void 0){var i=n(t);if(va){Mn(!0);try{n(t)}finally{Mn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=sb.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Xs(e);var t=e.queue,n=fh.bind(null,le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$s,useDeferredValue:function(e,t){var n=it();return Ws(n,e,t)},useTransition:function(){var e=Xs(!1);return e=rh.bind(null,le,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=le,i=it();if(ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ce===null)throw Error(u(349));(he&127)!==0||kd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Fd(Ud.bind(null,a,r,e),[e]),a.flags|=2048,nl(9,{destroy:void 0},Nd.bind(null,a,r,n,t),null),n},useId:function(){var e=it(),t=Ce.identifierPrefix;if(ge){var n=en,a=It;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=tb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ps,useFormState:Xd,useActionState:Xd,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,le,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return it().memoizedState=ob.bind(null,le)},useEffectEvent:function(e){var t=it(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},eu={readContext:et,use:Sr,useCallback:ah,useContext:et,useEffect:Js,useImperativeHandle:nh,useInsertionEffect:Id,useLayoutEffect:eh,useMemo:lh,useReducer:jr,useRef:Wd,useState:function(){return jr(mn)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Ye();return ih(n,Ee.memoizedState,e,t)},useTransition:function(){var e=jr(mn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:oi(e),t]},useSyncExternalStore:Dd,useId:uh,useHostTransitionStatus:Ps,useFormState:Zd,useActionState:Zd,useOptimistic:function(e,t){var n=Ye();return Gd(n,Ee,e,t)},useMemoCache:Vs,useCacheRefresh:ch};eu.useEffectEvent=Pd;var gh={readContext:et,use:Sr,useCallback:ah,useContext:et,useEffect:Js,useImperativeHandle:nh,useInsertionEffect:Id,useLayoutEffect:eh,useMemo:lh,useReducer:Qs,useRef:Wd,useState:function(){return Qs(mn)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Ye();return Ee===null?Ws(n,e,t):ih(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Qs(mn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:oi(e),t]},useSyncExternalStore:Dd,useId:uh,useHostTransitionStatus:Ps,useFormState:$d,useActionState:$d,useOptimistic:function(e,t){var n=Ye();return Ee!==null?Gd(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:ch};gh.useEffectEvent=Pd;function tu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Tt(),i=Hn(a);i.payload=t,n!=null&&(i.callback=n),t=Ln(e,i,a),t!==null&&(mt(t,e,a),ai(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Tt(),i=Hn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ln(e,i,a),t!==null&&(mt(t,e,a),ai(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,n),t!==null&&(mt(t,e,n),ai(t,e,n))}};function ph(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!$l(n,a)||!$l(i,r):!0}function bh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&nu.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function xh(e){ar(e)}function yh(e){console.error(e)}function vh(e){ar(e)}function Er(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Sh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function au(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){Er(e,t)},n}function jh(e){return e=Hn(e),e.tag=3,e}function zh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Sh(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Sh(t,n,a),typeof i!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function ub(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,i,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Lt===null?Hr():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===hr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Au(e,a,i)),!1;case 22:return n.flags|=65536,a===hr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Au(e,a,i)),!1}throw Error(u(435,n.tag))}return Au(e,a,i),Hr(),!1}if(ge)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==js&&(e=Error(u(422),{cause:a}),Pl(kt(e,n)))):(a!==js&&(t=Error(u(423),{cause:a}),Pl(kt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=kt(a,n),i=au(e.stateNode,a,i),Os(e,i),Le!==4&&(Le=2)),!1;var r=Error(u(520),{cause:a});if(r=kt(r,n),bi===null?bi=[r]:bi.push(r),Le!==4&&(Le=2),t===null)return!0;a=kt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=au(n.stateNode,a,e),Os(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=jh(i),zh(i,e,n,a),Os(n,i),!1}n=n.return}while(n!==null);return!1}var lu=Error(u(461)),Qe=!1;function tt(e,t,n,a){t.child=e===null?Td(t,null,n,a):ya(t,e.child,n,a)}function _h(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return ga(t),a=Ls(e,t,n,f,r,i),h=Gs(),e!==null&&!Qe?(Ys(e,t,i),gn(e,t,i)):(ge&&h&&vs(t),t.flags|=1,tt(e,t,a,i),t.child)}function wh(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!bs(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Eh(e,t,r,a,i)):(e=or(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!du(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:$l,n(f,a)&&e.ref===t.ref)return gn(e,t,i)}return t.flags|=1,e=un(r,a),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if($l(r,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=r,du(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,gn(e,t,i)}return iu(e,t,n,a,i)}function Th(e,t,n,a){var i=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,t.child=null;return Ah(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fr(t,r!==null?r.cachePool:null),r!==null?Md(t,r):ks(),Rd(t);else return a=t.lanes=536870912,Ah(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(fr(t,r.cachePool),Md(t,r),Yn(),t.memoizedState=null):(e!==null&&fr(t,null),ks(),Yn());return tt(e,t,i,n),t.child}function ci(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ah(e,t,n,a,i){var r=Cs();return r=r===null?null:{parent:Ve._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&fr(t,null),ks(),Rd(t),e!==null&&Ja(e,t,a,!0),t.childLanes=i,null}function Tr(e,t){return t=Cr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ch(e,t,n){return ya(t,e.child,null,n),e=Tr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function cb(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(a.mode==="hidden")return e=Tr(t,a),t.lanes=536870912,ci(null,e);if(Us(t),(e=Re)?(e=Ym(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:On!==null?{id:It,overflow:en}:null,retryLane:536870912,hydrationErrors:null},n=dd(e),n.return=t,t.child=n,Ie=t,Re=null)):e=null,e===null)throw kn(t);return t.lanes=536870912,null}return Tr(t,a)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(Us(t),i)if(t.flags&256)t.flags&=-257,t=Ch(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Qe||Ja(e,t,n,!1),i=(n&e.childLanes)!==0,Qe||i){if(a=Ce,a!==null&&(f=yf(a,n),f!==0&&f!==r.retryLane))throw r.retryLane=f,fa(e,f),mt(a,e,f),lu;Hr(),t=Ch(e,t,n)}else e=r.treeContext,Re=Gt(f.nextSibling),Ie=t,ge=!0,Dn=null,Ht=!1,e!==null&&gd(t,e),t=Tr(t,a),t.flags|=4096;return t}return e=un(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function iu(e,t,n,a,i){return ga(t),n=Ls(e,t,n,a,void 0,i),a=Gs(),e!==null&&!Qe?(Ys(e,t,i),gn(e,t,i)):(ge&&a&&vs(t),t.flags|=1,tt(e,t,n,i),t.child)}function Mh(e,t,n,a,i,r){return ga(t),t.updateQueue=null,n=Od(t,a,n,i),Bd(e),a=Gs(),e!==null&&!Qe?(Ys(e,t,r),gn(e,t,r)):(ge&&a&&vs(t),t.flags|=1,tt(e,t,n,r),t.child)}function Rh(e,t,n,a,i){if(ga(t),t.stateNode===null){var r=Ka,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=nu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Rs(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Ka,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(tu(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&nu.enqueueReplaceState(r,r.state,null),ii(t,a,r,i),li(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,y=Sa(n,h);r.props=y;var T=r.context,R=n.contextType;f=Ka,typeof R=="object"&&R!==null&&(f=et(R));var k=n.getDerivedStateFromProps;R=typeof k=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,R||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||T!==f)&&bh(t,r,a,f),Un=!1;var A=t.memoizedState;r.state=A,ii(t,a,r,i),li(),T=t.memoizedState,h||A!==T||Un?(typeof k=="function"&&(tu(t,n,k,a),T=t.memoizedState),(y=Un||ph(t,n,y,a,A,T,f))?(R||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=T),r.props=a,r.state=T,r.context=f,a=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Bs(e,t),f=t.memoizedProps,R=Sa(n,f),r.props=R,k=t.pendingProps,A=r.context,T=n.contextType,y=Ka,typeof T=="object"&&T!==null&&(y=et(T)),h=n.getDerivedStateFromProps,(T=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==k||A!==y)&&bh(t,r,a,y),Un=!1,A=t.memoizedState,r.state=A,ii(t,a,r,i),li();var C=t.memoizedState;f!==k||A!==C||Un||e!==null&&e.dependencies!==null&&ur(e.dependencies)?(typeof h=="function"&&(tu(t,n,h,a),C=t.memoizedState),(R=Un||ph(t,n,R,a,A,C,y)||e!==null&&e.dependencies!==null&&ur(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,C,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,C,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),r.props=a,r.state=C,r.context=y,a=R):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Ar(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ya(t,e.child,null,i),t.child=ya(t,null,n,i)):tt(e,t,n,i),t.memoizedState=r.state,e=t.child):e=gn(e,t,i),e}function Bh(e,t,n,a){return ha(),t.flags|=256,tt(e,t,n,a),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ou(e){return{baseLanes:e,cachePool:Sd()}}function su(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Oh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Gn(t):Yn(),(e=Re)?(e=Ym(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:On!==null?{id:It,overflow:en}:null,retryLane:536870912,hydrationErrors:null},n=dd(e),n.return=t,t.child=n,Ie=t,Re=null)):e=null,e===null)throw kn(t);return Ku(e)?t.lanes=32:t.lanes=536870912,null}var h=a.children;return a=a.fallback,i?(Yn(),i=t.mode,h=Cr({mode:"hidden",children:h},i),a=da(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,a=t.child,a.memoizedState=ou(n),a.childLanes=su(e,f,n),t.memoizedState=ru,ci(null,a)):(Gn(t),uu(t,h))}var y=e.memoizedState;if(y!==null&&(h=y.dehydrated,h!==null)){if(r)t.flags&256?(Gn(t),t.flags&=-257,t=cu(e,t,n)):t.memoizedState!==null?(Yn(),t.child=e.child,t.flags|=128,t=null):(Yn(),h=a.fallback,i=t.mode,a=Cr({mode:"visible",children:a.children},i),h=da(h,i,n,null),h.flags|=2,a.return=t,h.return=t,a.sibling=h,t.child=a,ya(t,e.child,null,n),a=t.child,a.memoizedState=ou(n),a.childLanes=su(e,f,n),t.memoizedState=ru,t=ci(null,a));else if(Gn(t),Ku(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var T=f.dgst;f=T,a=Error(u(419)),a.stack="",a.digest=f,Pl({value:a,source:null,stack:null}),t=cu(e,t,n)}else if(Qe||Ja(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=Ce,f!==null&&(a=yf(f,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,fa(e,a),mt(f,e,a),lu;Vu(h)||Hr(),t=cu(e,t,n)}else Vu(h)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Re=Gt(h.nextSibling),Ie=t,ge=!0,Dn=null,Ht=!1,e!==null&&gd(t,e),t=uu(t,a.children),t.flags|=4096);return t}return i?(Yn(),h=a.fallback,i=t.mode,y=e.child,T=y.sibling,a=un(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,T!==null?h=un(T,h):(h=da(h,i,n,null),h.flags|=2),h.return=t,a.return=t,a.sibling=h,t.child=a,ci(null,a),a=t.child,h=e.child.memoizedState,h===null?h=ou(n):(i=h.cachePool,i!==null?(y=Ve._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=Sd(),h={baseLanes:h.baseLanes|n,cachePool:i}),a.memoizedState=h,a.childLanes=su(e,f,n),t.memoizedState=ru,ci(e.child,a)):(Gn(t),n=e.child,e=n.sibling,n=un(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function uu(e,t){return t=Cr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cr(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function cu(e,t,n){return ya(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ws(e.return,t,n)}function fu(e,t,n,a,i,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:r}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=i,f.treeForkCount=r)}function kh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var f=Ge.current,h=(f&2)!==0;if(h?(f=f&1|2,t.flags|=128):f&=1,K(Ge,f),tt(e,t,a,n),a=ge?Fl:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dh(e,n,t);else if(e.tag===19)Dh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&br(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fu(t,!1,i,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&br(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fu(t,!0,n,null,r,a);break;case"together":fu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function du(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ur(e)))}function fb(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Nn(t,Ve,e.memoizedState.cache),ha();break;case 27:case 5:Wt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Us(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Oh(e,t,n):(Gn(t),e=gn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ja(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return kh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Ge,Ge.current),a)break;return null;case 22:return t.lanes=0,Th(e,t,n,t.pendingProps);case 24:Nn(t,Ve,e.memoizedState.cache)}return gn(e,t,n)}function Nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!du(e,n)&&(t.flags&128)===0)return Qe=!1,fb(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(t.flags&1048576)!==0&&md(t,Fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")bs(e)?(a=Sa(e,a),t.tag=1,t=Rh(null,t,e,a,n)):(t.tag=0,t=iu(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===F){t.tag=11,t=_h(null,t,e,a,n);break e}else if(i===N){t.tag=14,t=wh(null,t,e,a,n);break e}}throw t=ot(e)||e,Error(u(306,t,""))}}return t;case 0:return iu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Sa(a,t.pendingProps),Rh(e,t,a,i,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,Bs(e,t),ii(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Nn(t,Ve,a),a!==r.cache&&Es(t,[Ve],n,!0),li(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Bh(e,t,a,n);break e}else if(a!==i){i=kt(Error(u(424)),t),Pl(i),t=Bh(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Gt(e.firstChild),Ie=t,ge=!0,Dn=null,Ht=!0,n=Td(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ha(),a===i){t=gn(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=Zm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=Qr(re.current).createElement(n),a[Pe]=t,a[st]=e,nt(a,n,e),We(a),t.stateNode=a):t.memoizedState=Zm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wt(t),e===null&&ge&&(a=t.stateNode=Km(t.type,t.pendingProps,re.current),Ie=t,Ht=!0,i=Re,$n(t.type)?(Qu=i,Re=Gt(a.firstChild)):Re=i),tt(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=a=Re)&&(a=Yb(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,Ie=t,Re=Gt(a.firstChild),Ht=!1,i=!0):i=!1),i||kn(t)),Wt(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Gu(i,r)?a=null:f!==null&&Gu(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Ls(e,t,nb,null,null,n),wi._currentValue=i),Ar(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Re)&&(n=qb(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,Ie=t,Re=null,e=!0):e=!1),e||kn(t)),null;case 13:return Oh(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ya(t,null,a,n):tt(e,t,a,n),t.child;case 11:return _h(e,t,t.type,t.pendingProps,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Nn(t,t.type,a.value),tt(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,ga(t),i=et(i),a=a(i),t.flags|=1,tt(e,t,a,n),t.child;case 14:return wh(e,t,t.type,t.pendingProps,n);case 15:return Eh(e,t,t.type,t.pendingProps,n);case 19:return kh(e,t,n);case 31:return cb(e,t,n);case 22:return Th(e,t,n,t.pendingProps);case 24:return ga(t),a=et(Ve),e===null?(i=Cs(),i===null&&(i=Ce,r=Ts(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},Rs(t),Nn(t,Ve,i)):((e.lanes&n)!==0&&(Bs(e,t),ii(t,null,null,n),li()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Nn(t,Ve,a)):(a=r.cache,Nn(t,Ve,a),a!==i.cache&&Es(t,[Ve],n,!0))),tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function pn(e){e.flags|=4}function hu(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw xa=hr,Ms}else e.flags&=-16777217}function Uh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pm(t))if(um())e.flags|=8192;else throw xa=hr,Ms}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pf():536870912,e.lanes|=t,rl|=t)}function fi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function db(e,t,n){var a=t.pendingProps;switch(Ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),dn(Ve),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Za(t)?pn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zs())),Be(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(pn(t),r!==null?(Be(t),Uh(t,r)):(Be(t),hu(t,i,null,a,n))):r?r!==e.memoizedState?(pn(t),Be(t),Uh(t,r)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&pn(t),Be(t),hu(t,i,e,a,n)),null;case 27:if(Ft(t),n=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Be(t),null}e=Z.current,Za(t)?pd(t):(e=Km(i,a,n),t.stateNode=e,pn(t))}return Be(t),null;case 5:if(Ft(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(r=Z.current,Za(t))pd(t);else{var f=Qr(re.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(i,{is:a.is}):f.createElement(i)}}r[Pe]=t,r[st]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=r;e:switch(nt(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&pn(t)}}return Be(t),hu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=re.current,Za(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ie,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Om(e.nodeValue,n)),e||kn(t,!0)}else e=Qr(e).createTextNode(a),e[Pe]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Za(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Pe]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Pe]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Mr(t,t.updateQueue),Be(t),null);case 4:return we(),e===null&&ku(t.stateNode.containerInfo),Be(t),null;case 10:return dn(t.type),Be(t),null;case 19:if(O(Ge),a=t.memoizedState,a===null)return Be(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)fi(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=br(e),r!==null){for(t.flags|=128,fi(a,!1),e=r.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fd(n,e),n=n.sibling;return K(Ge,Ge.current&1|2),ge&&cn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xt()>kr&&(t.flags|=128,i=!0,fi(a,!1),t.lanes=4194304)}else{if(!i)if(e=br(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),fi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ge)return Be(t),null}else 2*xt()-a.renderingStartTime>kr&&n!==536870912&&(t.flags|=128,i=!0,fi(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xt(),e.sibling=null,n=Ge.current,K(Ge,i?n&1|2:n&1),ge&&cn(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return _t(t),Ns(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Mr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&O(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),dn(Ve),Be(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function hb(e,t){switch(Ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(Ve),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ft(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(u(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ge),null;case 4:return we(),null;case 10:return dn(t.type),null;case 22:case 23:return _t(t),Ns(),e!==null&&O(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return dn(Ve),null;case 25:return null;default:return null}}function Hh(e,t){switch(Ss(t),t.tag){case 3:dn(Ve),we();break;case 26:case 27:case 5:Ft(t);break;case 4:we();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:O(Ge);break;case 10:dn(t.type);break;case 22:case 23:_t(t),Ns(),e!==null&&O(pa);break;case 24:dn(Ve)}}function di(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){_e(t,t.return,h)}}function qn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var y=n,T=h;try{T()}catch(R){_e(i,y,R)}}}a=a.next}while(a!==r)}}catch(R){_e(t,t.return,R)}}function Lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(a){_e(e,e.return,a)}}}function Gh(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function hi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){_e(e,t,i)}}function tn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){_e(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){_e(e,t,i)}else n.current=null}function Yh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){_e(e,e.return,i)}}function mu(e,t,n){try{var a=e.stateNode;kb(a,e.type,n,t),a[st]=t}catch(i){_e(e,e.return,i)}}function qh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$n(e.type)||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(a!==4&&(a===27&&$n(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&$n(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Vh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);nt(t,a,n),t[Pe]=e,t[st]=n}catch(r){_e(e,e.return,r)}}var bn=!1,Xe=!1,bu=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function mb(e,t){if(e=e.containerInfo,Hu=Pr,e=nd(e),cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,y=-1,T=0,R=0,k=e,A=null;t:for(;;){for(var C;k!==n||i!==0&&k.nodeType!==3||(h=f+i),k!==r||a!==0&&k.nodeType!==3||(y=f+a),k.nodeType===3&&(f+=k.nodeValue.length),(C=k.firstChild)!==null;)A=k,k=C;for(;;){if(k===e)break t;if(A===n&&++T===i&&(h=f),A===r&&++R===a&&(y=f),(C=k.nextSibling)!==null)break;k=A,A=k.parentNode}k=C}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:e,selectionRange:n},Pr=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var $=Sa(n.type,i);e=a.getSnapshotBeforeUpdate($,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(te){_e(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Qh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:yn(e,n),a&4&&di(5,n);break;case 1:if(yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var i=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&Lh(n),a&512&&hi(n,n.return);break;case 3:if(yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&Vh(n);case 26:case 5:yn(e,n),t===null&&a&4&&Yh(n),a&512&&hi(n,n.return);break;case 12:yn(e,n);break;case 31:yn(e,n),a&4&&Jh(e,n);break;case 13:yn(e,n),a&4&&$h(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=zb.bind(null,n),Vb(e,n))));break;case 22:if(a=n.memoizedState!==null||bn,!a){t=t!==null&&t.memoizedState!==null||Xe,i=bn;var r=Xe;bn=a,(Xe=t)&&!r?vn(e,n,(n.subtreeFlags&8772)!==0):yn(e,n),bn=i,Xe=r}break;case 30:break;default:yn(e,n)}}function Xh(e){var t=e.alternate;t!==null&&(e.alternate=null,Xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ct=!1;function xn(e,t,n){for(n=n.child;n!==null;)Zh(e,t,n),n=n.sibling}function Zh(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 26:Xe||tn(n,t),xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||tn(n,t);var a=De,i=ct;$n(n.type)&&(De=n.stateNode,ct=!1),xn(e,t,n),ji(n.stateNode),De=a,ct=i;break;case 5:Xe||tn(n,t);case 6:if(a=De,i=ct,De=null,xn(e,t,n),De=a,ct=i,De!==null)if(ct)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{De.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:De!==null&&(ct?(e=De,Lm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ml(e)):Lm(De,n.stateNode));break;case 4:a=De,i=ct,De=n.stateNode.containerInfo,ct=!0,xn(e,t,n),De=a,ct=i;break;case 0:case 11:case 14:case 15:qn(2,n,t),Xe||qn(4,n,t),xn(e,t,n);break;case 1:Xe||(tn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gh(n,t,a)),xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:Xe=(a=Xe)||n.memoizedState!==null,xn(e,t,n),Xe=a;break;default:xn(e,t,n)}}function Jh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(n){_e(t,t.return,n)}}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(n){_e(t,t.return,n)}}function gb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kh),t;default:throw Error(u(435,e.tag))}}function Br(e,t){var n=gb(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=_b.bind(null,e,a);a.then(i,i)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if($n(h.type)){De=h.stateNode,ct=!1;break e}break;case 5:De=h.stateNode,ct=!1;break e;case 3:case 4:De=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(De===null)throw Error(u(160));Zh(r,f,i),De=null,ct=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}var Qt=null;function Wh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),a&4&&(qn(3,e,e.return),di(3,e),qn(5,e,e.return));break;case 1:ft(t,e),dt(e),a&512&&(Xe||n===null||tn(n,n.return)),a&64&&bn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Qt;if(ft(t,e),dt(e),a&512&&(Xe||n===null||tn(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Gl]||r[Pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),nt(r,a,n),r[Pe]=e,We(r),a=r;break e;case"link":var f=Wm("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),nt(r,a,n),i.head.appendChild(r);break;case"meta":if(f=Wm("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),nt(r,a,n),i.head.appendChild(r);break;default:throw Error(u(468,a))}r[Pe]=e,We(r),a=r}e.stateNode=a}else Fm(i,e.type,e.stateNode);else e.stateNode=$m(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Fm(i,e.type,e.stateNode):$m(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mu(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),dt(e),a&512&&(Xe||n===null||tn(n,n.return)),n!==null&&a&4&&mu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),dt(e),a&512&&(Xe||n===null||tn(n,n.return)),e.flags&32){i=e.stateNode;try{Ua(i,"")}catch($){_e(e,e.return,$)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,mu(e,i,n!==null?n.memoizedProps:i)),a&1024&&(bu=!0);break;case 6:if(ft(t,e),dt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch($){_e(e,e.return,$)}}break;case 3:if(Jr=null,i=Qt,Qt=Xr(t.containerInfo),ft(t,e),Qt=i,dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch($){_e(e,e.return,$)}bu&&(bu=!1,Fh(e));break;case 4:a=Qt,Qt=Xr(e.stateNode.containerInfo),ft(t,e),dt(e),Qt=a;break;case 12:ft(t,e),dt(e);break;case 31:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Br(e,a)));break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dr=xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Br(e,a)));break;case 22:i=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,T=bn,R=Xe;if(bn=T||i,Xe=R||y,ft(t,e),Xe=R,bn=T,dt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||y||bn||Xe||ja(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(r=y.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=y.stateNode;var k=y.memoizedProps.style,A=k!=null&&k.hasOwnProperty("display")?k.display:null;h.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch($){_e(y,y.return,$)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch($){_e(y,y.return,$)}}}else if(t.tag===18){if(n===null){y=t;try{var C=y.stateNode;i?Gm(C,!0):Gm(y.stateNode,!1)}catch($){_e(y,y.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Br(e,n))));break;case 19:ft(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Br(e,a)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(qh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,r=gu(e);Rr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(Ua(f,""),n.flags&=-33);var h=gu(e);Rr(e,h,f);break;case 3:case 4:var y=n.stateNode.containerInfo,T=gu(e);pu(e,T,y);break;default:throw Error(u(161))}}catch(R){_e(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qh(e,t.alternate,t),t=t.sibling}function ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),ja(t);break;case 1:tn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gh(t,t.return,n),ja(t);break;case 27:ji(t.stateNode);case 26:case 5:tn(t,t.return),ja(t);break;case 22:t.memoizedState===null&&ja(t);break;case 30:ja(t);break;default:ja(t)}e=e.sibling}}function vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:vn(i,r,n),di(4,r);break;case 1:if(vn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){_e(a,a.return,T)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Ad(y[i],h)}catch(T){_e(a,a.return,T)}}n&&f&64&&Lh(r),hi(r,r.return);break;case 27:Vh(r);case 26:case 5:vn(i,r,n),n&&a===null&&f&4&&Yh(r),hi(r,r.return);break;case 12:vn(i,r,n);break;case 31:vn(i,r,n),n&&f&4&&Jh(i,r);break;case 13:vn(i,r,n),n&&f&4&&$h(i,r);break;case 22:r.memoizedState===null&&vn(i,r,n),hi(r,r.return);break;case 30:break;default:vn(i,r,n)}t=t.sibling}}function xu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function Xt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ph(e,t,n,a),t=t.sibling}function Ph(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,n,a),i&2048&&di(9,t);break;case 1:Xt(e,t,n,a);break;case 3:Xt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(i&2048){Xt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){_e(t,t.return,y)}}else Xt(e,t,n,a);break;case 31:Xt(e,t,n,a);break;case 13:Xt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Xt(e,t,n,a):mi(e,t):r._visibility&2?Xt(e,t,n,a):(r._visibility|=2,al(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&xu(f,t);break;case 24:Xt(e,t,n,a),i&2048&&yu(t.alternate,t);break;default:Xt(e,t,n,a)}}function al(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,f=t,h=n,y=a,T=f.flags;switch(f.tag){case 0:case 11:case 15:al(r,f,h,y,i),di(8,f);break;case 23:break;case 22:var R=f.stateNode;f.memoizedState!==null?R._visibility&2?al(r,f,h,y,i):mi(r,f):(R._visibility|=2,al(r,f,h,y,i)),i&&T&2048&&xu(f.alternate,f);break;case 24:al(r,f,h,y,i),i&&T&2048&&yu(f.alternate,f);break;default:al(r,f,h,y,i)}t=t.sibling}}function mi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:mi(n,a),i&2048&&xu(a.alternate,a);break;case 24:mi(n,a),i&2048&&yu(a.alternate,a);break;default:mi(n,a)}t=t.sibling}}var gi=8192;function ll(e,t,n){if(e.subtreeFlags&gi)for(e=e.child;e!==null;)Ih(e,t,n),e=e.sibling}function Ih(e,t,n){switch(e.tag){case 26:ll(e,t,n),e.flags&gi&&e.memoizedState!==null&&tx(n,Qt,e.memoizedState,e.memoizedProps);break;case 5:ll(e,t,n);break;case 3:case 4:var a=Qt;Qt=Xr(e.stateNode.containerInfo),ll(e,t,n),Qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=gi,gi=16777216,ll(e,t,n),gi=a):ll(e,t,n));break;default:ll(e,t,n)}}function em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,nm(a,e)}em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&qn(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Or(e)):pi(e);break;default:pi(e)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,nm(a,e)}em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),Or(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Or(t));break;default:Or(t)}e=e.sibling}}function nm(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Il(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var i=a.sibling,r=a.return;if(Xh(a),a===n){Fe=null;break e}if(i!==null){i.return=r,Fe=i;break e}Fe=r}}}var pb={getCacheForType:function(e){var t=et(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return et(Ve).controller.signal}},bb=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ce=null,fe=null,he=0,ze=0,wt=null,Vn=!1,il=!1,vu=!1,Sn=0,Le=0,Kn=0,za=0,Su=0,Et=0,rl=0,bi=null,ht=null,ju=!1,Dr=0,am=0,kr=1/0,Nr=null,Qn=null,Je=0,Xn=null,ol=null,jn=0,zu=0,_u=null,lm=null,xi=0,wu=null;function Tt(){return(Se&2)!==0&&he!==0?he&-he:B.T!==null?Ru():vf()}function im(){if(Et===0)if((he&536870912)===0||ge){var e=Ki;Ki<<=1,(Ki&3932160)===0&&(Ki=262144),Et=e}else Et=536870912;return e=zt.current,e!==null&&(e.flags|=32),Et}function mt(e,t,n){(e===Ce&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(sl(e,0),Zn(e,he,Et,!1)),Ll(e,n),((Se&2)===0||e!==Ce)&&(e===Ce&&((Se&2)===0&&(za|=n),Le===4&&Zn(e,he,Et,!1)),nn(e))}function rm(e,t,n){if((Se&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Hl(e,t),i=a?vb(e,t):Tu(e,t,!0),r=a;do{if(i===0){il&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!xb(n)){i=Tu(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=bi;var y=h.current.memoizedState.isDehydrated;if(y&&(sl(h,f).flags|=256),f=Tu(h,f,!1),f!==2){if(vu&&!y){h.errorRecoveryDisabledLanes|=r,za|=r,i=4;break e}r=ht,ht=i,r!==null&&(ht===null?ht=r:ht.push.apply(ht,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){sl(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,Et,!Vn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Dr+300-xt(),10<i)){if(Zn(a,t,Et,!Vn),Xi(a,0,!0)!==0)break e;jn=t,a.timeoutHandle=Um(om.bind(null,a,n,ht,Nr,ju,t,Et,za,rl,Vn,r,"Throttled",-0,0),i);break e}om(a,n,ht,Nr,ju,t,Et,za,rl,Vn,r,null,-0,0)}}break}while(!0);nn(e)}function om(e,t,n,a,i,r,f,h,y,T,R,k,A,C){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Ih(t,r,k);var $=(r&62914560)===r?Dr-xt():(r&4194048)===r?am-xt():0;if($=nx(k,$),$!==null){jn=r,e.cancelPendingCommit=$(gm.bind(null,e,t,r,n,a,i,f,h,y,R,k,null,A,C)),Zn(e,r,f,!T);return}}gm(e,t,r,n,a,i,f,h,y)}function xb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!St(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t&=~Su,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-vt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&bf(e,n,t)}function Ur(){return(Se&6)===0?(yi(0),!1):!0}function Eu(){if(fe!==null){if(ze===0)var e=fe.return;else e=fe,fn=ma=null,qs(e),Pa=null,ti=0,e=fe;for(;e!==null;)Hh(e.alternate,e),e=e.return;fe=null}}function sl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,Eu(),Ce=e,fe=n=un(e.current,null),he=t,ze=0,wt=null,Vn=!1,il=Hl(e,t),vu=!1,rl=Et=Su=za=Kn=Le=0,ht=bi=null,ju=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-vt(a),r=1<<i;t|=e[i],a&=~r}return Sn=t,lr(),n}function sm(e,t){le=null,B.H=ui,t===Fa||t===dr?(t=_d(),ze=3):t===Ms?(t=_d(),ze=4):ze=t===lu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,fe===null&&(Le=1,Er(e,kt(t,e.current)))}function um(){var e=zt.current;return e===null?!0:(he&4194048)===he?Lt===null:(he&62914560)===he||(he&536870912)!==0?e===Lt:!1}function cm(){var e=B.H;return B.H=ui,e===null?ui:e}function fm(){var e=B.A;return B.A=pb,e}function Hr(){Le=4,Vn||(he&4194048)!==he&&zt.current!==null||(il=!0),(Kn&134217727)===0&&(za&134217727)===0||Ce===null||Zn(Ce,he,Et,!1)}function Tu(e,t,n){var a=Se;Se|=2;var i=cm(),r=fm();(Ce!==e||he!==t)&&(Nr=null,sl(e,t)),t=!1;var f=Le;e:do try{if(ze!==0&&fe!==null){var h=fe,y=wt;switch(ze){case 8:Eu(),f=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var T=ze;if(ze=0,wt=null,ul(e,h,y,T),n&&il){f=0;break e}break;default:T=ze,ze=0,wt=null,ul(e,h,y,T)}}yb(),f=Le;break}catch(R){sm(e,R)}while(!0);return t&&e.shellSuspendCounter++,fn=ma=null,Se=a,B.H=i,B.A=r,fe===null&&(Ce=null,he=0,lr()),f}function yb(){for(;fe!==null;)dm(fe)}function vb(e,t){var n=Se;Se|=2;var a=cm(),i=fm();Ce!==e||he!==t?(Nr=null,kr=xt()+500,sl(e,t)):il=Hl(e,t);e:do try{if(ze!==0&&fe!==null){t=fe;var r=wt;t:switch(ze){case 1:ze=0,wt=null,ul(e,t,r,1);break;case 2:case 9:if(jd(r)){ze=0,wt=null,hm(t);break}t=function(){ze!==2&&ze!==9||Ce!==e||(ze=7),nn(e)},r.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:jd(r)?(ze=0,wt=null,hm(t)):(ze=0,wt=null,ul(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(f?Pm(f):h.stateNode.complete){ze=0,wt=null;var y=h.sibling;if(y!==null)fe=y;else{var T=h.return;T!==null?(fe=T,Lr(T)):fe=null}break t}}ze=0,wt=null,ul(e,t,r,5);break;case 6:ze=0,wt=null,ul(e,t,r,6);break;case 8:Eu(),Le=6;break e;default:throw Error(u(462))}}Sb();break}catch(R){sm(e,R)}while(!0);return fn=ma=null,B.H=a,B.A=i,Se=n,fe!==null?0:(Ce=null,he=0,lr(),Le)}function Sb(){for(;fe!==null&&!Kp();)dm(fe)}function dm(e){var t=Nh(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Lr(e):fe=t}function hm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Mh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Mh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:qs(t);default:Hh(n,t),t=fe=fd(t,Sn),t=Nh(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Lr(e):fe=t}function ul(e,t,n,a){fn=ma=null,qs(t),Pa=null,ti=0;var i=t.return;try{if(ub(e,i,t,n,he)){Le=1,Er(e,kt(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Le=1,Er(e,kt(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:il||(he&536870912)!==0?e=!1:(Vn=e=!0,(a===2||a===9||a===3||a===6)&&(a=zt.current,a!==null&&a.tag===13&&(a.flags|=16384))),mm(t,e)):Lr(t)}function Lr(e){var t=e;do{if((t.flags&32768)!==0){mm(t,Vn);return}e=t.return;var n=db(t.alternate,t,Sn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Le===0&&(Le=5)}function mm(e,t){do{var n=hb(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Le=6,fe=null}function gm(e,t,n,a,i,r,f,h,y){e.cancelPendingCommit=null;do Gr();while(Je!==0);if((Se&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=gs,e1(e,n,r,f,h,y),e===Ce&&(fe=Ce=null,he=0),ol=t,Xn=e,jn=n,zu=r,_u=i,lm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wb(qi,function(){return vm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,i=V.p,V.p=2,f=Se,Se|=4;try{mb(e,t,n)}finally{Se=f,V.p=i,B.T=a}}Je=1,pm(),bm(),xm()}}function pm(){if(Je===1){Je=0;var e=Xn,t=ol,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=Se;Se|=4;try{Wh(t,e);var r=Lu,f=nd(e.containerInfo),h=r.focusedElem,y=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&td(h.ownerDocument.documentElement,h)){if(y!==null&&cs(h)){var T=y.start,R=y.end;if(R===void 0&&(R=T),"selectionStart"in h)h.selectionStart=T,h.selectionEnd=Math.min(R,h.value.length);else{var k=h.ownerDocument||document,A=k&&k.defaultView||window;if(A.getSelection){var C=A.getSelection(),$=h.textContent.length,te=Math.min(y.start,$),Ae=y.end===void 0?te:Math.min(y.end,$);!C.extend&&te>Ae&&(f=Ae,Ae=te,te=f);var z=ed(h,te),S=ed(h,Ae);if(z&&S&&(C.rangeCount!==1||C.anchorNode!==z.node||C.anchorOffset!==z.offset||C.focusNode!==S.node||C.focusOffset!==S.offset)){var E=k.createRange();E.setStart(z.node,z.offset),C.removeAllRanges(),te>Ae?(C.addRange(E),C.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),C.addRange(E))}}}}for(k=[],C=h;C=C.parentNode;)C.nodeType===1&&k.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<k.length;h++){var D=k[h];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Pr=!!Hu,Lu=Hu=null}finally{Se=i,V.p=a,B.T=n}}e.current=t,Je=2}}function bm(){if(Je===2){Je=0;var e=Xn,t=ol,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=Se;Se|=4;try{Qh(e,t.alternate,t)}finally{Se=i,V.p=a,B.T=n}}Je=3}}function xm(){if(Je===4||Je===3){Je=0,Qp();var e=Xn,t=ol,n=jn,a=lm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,ol=Xn=null,ym(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Qn=null),Qo(n),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,i=V.p,V.p=2,B.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{B.T=t,V.p=i}}(jn&3)!==0&&Gr(),nn(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===wu?xi++:(xi=0,wu=e):xi=0,yi(0)}}function ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function Gr(){return pm(),bm(),xm(),vm()}function vm(){if(Je!==5)return!1;var e=Xn,t=zu;zu=0;var n=Qo(jn),a=B.T,i=V.p;try{V.p=32>n?32:n,B.T=null,n=_u,_u=null;var r=Xn,f=jn;if(Je=0,ol=Xn=null,jn=0,(Se&6)!==0)throw Error(u(331));var h=Se;if(Se|=4,tm(r.current),Ph(r,r.current,f,n),Se=h,yi(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ul,r)}catch{}return!0}finally{V.p=i,B.T=a,ym(e,t)}}function Sm(e,t,n){t=kt(n,t),t=au(e.stateNode,t,2),e=Ln(e,t,2),e!==null&&(Ll(e,2),nn(e))}function _e(e,t,n){if(e.tag===3)Sm(e,e,n);else for(;t!==null;){if(t.tag===3){Sm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qn===null||!Qn.has(a))){e=kt(n,e),n=jh(2),a=Ln(t,n,2),a!==null&&(zh(n,a,t,e),Ll(a,2),nn(a));break}}t=t.return}}function Au(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new bb;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(vu=!0,i.add(n),e=jb.bind(null,e,t,n),t.then(e,e))}function jb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(he&n)===n&&(Le===4||Le===3&&(he&62914560)===he&&300>xt()-Dr?(Se&2)===0&&sl(e,0):Su|=n,rl===he&&(rl=0)),nn(e)}function jm(e,t){t===0&&(t=pf()),e=fa(e,t),e!==null&&(Ll(e,t),nn(e))}function zb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jm(e,n)}function _b(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),jm(e,n)}function wb(e,t){return Yo(e,t)}var Yr=null,cl=null,Cu=!1,qr=!1,Mu=!1,Jn=0;function nn(e){e!==cl&&e.next===null&&(cl===null?Yr=cl=e:cl=cl.next=e),qr=!0,Cu||(Cu=!0,Tb())}function yi(e,t){if(!Mu&&qr){Mu=!0;do for(var n=!1,a=Yr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-vt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Em(a,r))}else r=he,r=Xi(a,a===Ce?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Hl(a,r)||(n=!0,Em(a,r));a=a.next}while(n);Mu=!1}}function Eb(){zm()}function zm(){qr=Cu=!1;var e=0;Jn!==0&&Ub()&&(e=Jn);for(var t=xt(),n=null,a=Yr;a!==null;){var i=a.next,r=_m(a,t);r===0?(a.next=null,n===null?Yr=i:n.next=i,i===null&&(cl=n)):(n=a,(e!==0||(r&3)!==0)&&(qr=!0)),a=i}Je!==0&&Je!==5||yi(e),Jn!==0&&(Jn=0)}function _m(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-vt(r),h=1<<f,y=i[f];y===-1?((h&n)===0||(h&a)!==0)&&(i[f]=Ip(h,t)):y<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ce,n=he,n=Xi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Hl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&qo(a),Qo(n)){case 2:case 8:n=mf;break;case 32:n=qi;break;case 268435456:n=gf;break;default:n=qi}return a=wm.bind(null,e),n=Yo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&qo(a),e.callbackPriority=2,e.callbackNode=null,2}function wm(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var a=he;return a=Xi(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rm(e,a,t),_m(e,xt()),e.callbackNode!=null&&e.callbackNode===n?wm.bind(null,e):null)}function Em(e,t){if(Gr())return null;rm(e,t,!0)}function Tb(){Lb(function(){(Se&6)!==0?Yo(hf,Eb):zm()})}function Ru(){if(Jn===0){var e=$a;e===0&&(e=Vi,Vi<<=1,(Vi&261888)===0&&(Vi=256)),Jn=e}return Jn}function Tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function Am(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ab(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Tm((i[st]||null).action),f=a.submitter;f&&(t=(t=f[st]||null)?Tm(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new er("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Jn!==0){var y=f?Am(i,f):new FormData(i);Fs(n,{pending:!0,data:y,method:i.method,action:r},null,y)}}else typeof r=="function"&&(h.preventDefault(),y=f?Am(i,f):new FormData(i),Fs(n,{pending:!0,data:y,method:i.method,action:r},r,y))},currentTarget:i}]})}}for(var Bu=0;Bu<ms.length;Bu++){var Ou=ms[Bu],Cb=Ou.toLowerCase(),Mb=Ou[0].toUpperCase()+Ou.slice(1);Kt(Cb,"on"+Mb)}Kt(id,"onAnimationEnd"),Kt(rd,"onAnimationIteration"),Kt(od,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(X1,"onTransitionRun"),Kt(Z1,"onTransitionStart"),Kt(J1,"onTransitionCancel"),Kt(sd,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function Cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],y=h.instance,T=h.currentTarget;if(h=h.listener,y!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=T;try{r(i)}catch(R){ar(R)}i.currentTarget=null,r=y}else for(f=0;f<a.length;f++){if(h=a[f],y=h.instance,T=h.currentTarget,h=h.listener,y!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=T;try{r(i)}catch(R){ar(R)}i.currentTarget=null,r=y}}}}function de(e,t){var n=t[Xo];n===void 0&&(n=t[Xo]=new Set);var a=e+"__bubble";n.has(a)||(Mm(t,e,2,!1),n.add(a))}function Du(e,t,n){var a=0;t&&(a|=4),Mm(n,e,a,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function ku(e){if(!e[Vr]){e[Vr]=!0,zf.forEach(function(n){n!=="selectionchange"&&(Rb.has(n)||Du(n,!1,e),Du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Du("selectionchange",!1,t))}}function Mm(e,t,n,a){switch(i0(t)){case 2:var i=ix;break;case 8:i=rx;break;default:i=Wu}n=i.bind(null,t,n,e),i=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Nu(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var y=f.tag;if((y===3||y===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Ba(h),f===null)return;if(y=f.tag,y===5||y===6||y===26||y===27){a=r=f;continue e}h=h.parentNode}}a=a.return}kf(function(){var T=r,R=Io(n),k=[];e:{var A=ud.get(e);if(A!==void 0){var C=er,$=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":C=_1;break;case"focusin":$="focus",C=is;break;case"focusout":$="blur",C=is;break;case"beforeblur":case"afterblur":C=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=T1;break;case id:case rd:case od:C=g1;break;case sd:C=C1;break;case"scroll":case"scrollend":C=c1;break;case"wheel":C=R1;break;case"copy":case"cut":case"paste":C=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Gf;break;case"toggle":case"beforetoggle":C=O1}var te=(t&4)!==0,Ae=!te&&(e==="scroll"||e==="scrollend"),z=te?A!==null?A+"Capture":null:A;te=[];for(var S=T,E;S!==null;){var D=S;if(E=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||E===null||z===null||(D=ql(S,z),D!=null&&te.push(Si(S,D,E))),Ae)break;S=S.return}0<te.length&&(A=new C(A,$,null,n,R),k.push({event:A,listeners:te}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&n!==Po&&($=n.relatedTarget||n.fromElement)&&(Ba($)||$[Ra]))break e;if((C||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,C?($=n.relatedTarget||n.toElement,C=T,$=$?Ba($):null,$!==null&&(Ae=g($),te=$.tag,$!==Ae||te!==5&&te!==27&&te!==6)&&($=null)):(C=null,$=T),C!==$)){if(te=Hf,D="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(te=Gf,D="onPointerLeave",z="onPointerEnter",S="pointer"),Ae=C==null?A:Yl(C),E=$==null?A:Yl($),A=new te(D,S+"leave",C,n,R),A.target=Ae,A.relatedTarget=E,D=null,Ba(R)===T&&(te=new te(z,S+"enter",$,n,R),te.target=E,te.relatedTarget=Ae,D=te),Ae=D,C&&$)t:{for(te=Bb,z=C,S=$,E=0,D=z;D;D=te(D))E++;D=0;for(var I=S;I;I=te(I))D++;for(;0<E-D;)z=te(z),E--;for(;0<D-E;)S=te(S),D--;for(;E--;){if(z===S||S!==null&&z===S.alternate){te=z;break t}z=te(z),S=te(S)}te=null}else te=null;C!==null&&Rm(k,A,C,te,!1),$!==null&&Ae!==null&&Rm(k,Ae,$,te,!0)}}e:{if(A=T?Yl(T):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var ye=Jf;else if(Xf(A))if($f)ye=V1;else{ye=Y1;var W=G1}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Fo(T.elementType)&&(ye=Jf):ye=q1;if(ye&&(ye=ye(e,T))){Zf(k,ye,n,R);break e}W&&W(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&Wo(A,"number",A.value)}switch(W=T?Yl(T):window,e){case"focusin":(Xf(W)||W.contentEditable==="true")&&(Ya=W,fs=T,Wl=null);break;case"focusout":Wl=fs=Ya=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,ad(k,n,R);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":ad(k,n,R)}var oe;if(os)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Ga?Kf(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Yf&&n.locale!=="ko"&&(Ga||me!=="onCompositionStart"?me==="onCompositionEnd"&&Ga&&(oe=Nf()):(Bn=R,ns="value"in Bn?Bn.value:Bn.textContent,Ga=!0)),W=Kr(T,me),0<W.length&&(me=new Lf(me,e,null,n,R),k.push({event:me,listeners:W}),oe?me.data=oe:(oe=Qf(n),oe!==null&&(me.data=oe)))),(oe=k1?N1(e,n):U1(e,n))&&(me=Kr(T,"onBeforeInput"),0<me.length&&(W=new Lf("onBeforeInput","beforeinput",null,n,R),k.push({event:W,listeners:me}),W.data=oe)),Ab(k,e,T,n,R)}Cm(k,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=ql(e,n),i!=null&&a.unshift(Si(e,i,r)),i=ql(e,t),i!=null&&a.push(Si(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Bb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rm(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,y=h.alternate,T=h.stateNode;if(h=h.tag,y!==null&&y===a)break;h!==5&&h!==26&&h!==27||T===null||(y=T,i?(T=ql(n,r),T!=null&&f.unshift(Si(n,T,y))):i||(T=ql(n,r),T!=null&&f.push(Si(n,T,y)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Ob=/\r\n?/g,Db=/\u0000|\uFFFD/g;function Bm(e){return(typeof e=="string"?e:""+e).replace(Ob,`
`).replace(Db,"")}function Om(e,t){return t=Bm(t),Bm(e)===t}function Te(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ua(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,n,a);break;case"style":Of(e,a,r);break;case"data":if(t!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Wi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=on);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Zi(e,"popover",a);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Zi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=s1.get(n)||n,Zi(e,n,a))}}function Uu(e,t,n,a,i,r){switch(n){case"style":Of(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&Ua(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=on);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[st]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Zi(e,n,a)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,r,f,n,null)}}i&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,y=null,T=null;for(a in n)if(n.hasOwnProperty(a)){var R=n[a];if(R!=null)switch(a){case"name":i=R;break;case"type":f=R;break;case"checked":y=R;break;case"defaultChecked":T=R;break;case"value":r=R;break;case"defaultValue":h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:Te(e,t,a,R,n,null)}}Cf(e,r,h,y,T,f,i,!1);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Te(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?Na(e,!!a,t,!1):n!=null&&Na(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Te(e,t,f,h,n,null)}Rf(e,a,i,r);return;case"option":for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null)&&(y==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Te(e,t,y,a,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<vi.length;a++)de(vi[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(a=n[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,T,a,n,null)}return;default:if(Fo(t)){for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!==void 0&&Uu(e,t,R,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Te(e,t,h,a,n,null))}function kb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,y=null,T=null,R=null;for(C in n){var k=n[C];if(n.hasOwnProperty(C)&&k!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":y=k;default:a.hasOwnProperty(C)||Te(e,t,C,null,a,k)}}for(var A in a){var C=a[A];if(k=n[A],a.hasOwnProperty(A)&&(C!=null||k!=null))switch(A){case"type":r=C;break;case"name":i=C;break;case"checked":T=C;break;case"defaultChecked":R=C;break;case"value":f=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==k&&Te(e,t,A,C,a,k)}}$o(e,f,h,y,T,R,r,i);return;case"select":C=f=h=A=null;for(r in n)if(y=n[r],n.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":C=y;default:a.hasOwnProperty(r)||Te(e,t,r,null,a,y)}for(i in a)if(r=a[i],y=n[i],a.hasOwnProperty(i)&&(r!=null||y!=null))switch(i){case"value":A=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==y&&Te(e,t,i,r,a,y)}t=h,n=f,a=C,A!=null?Na(e,!!n,A,!1):!!a!=!!n&&(t!=null?Na(e,!!n,t,!0):Na(e,!!n,n?[]:"",!1));return;case"textarea":C=A=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Te(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Te(e,t,f,i,a,r)}Mf(e,A,C);return;case"option":for(var $ in n)A=n[$],n.hasOwnProperty($)&&A!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:Te(e,t,$,null,a,A));for(y in a)A=a[y],C=n[y],a.hasOwnProperty(y)&&A!==C&&(A!=null||C!=null)&&(y==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Te(e,t,y,A,a,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)A=n[te],n.hasOwnProperty(te)&&A!=null&&!a.hasOwnProperty(te)&&Te(e,t,te,null,a,A);for(T in a)if(A=a[T],C=n[T],a.hasOwnProperty(T)&&A!==C&&(A!=null||C!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:Te(e,t,T,A,a,C)}return;default:if(Fo(t)){for(var Ae in n)A=n[Ae],n.hasOwnProperty(Ae)&&A!==void 0&&!a.hasOwnProperty(Ae)&&Uu(e,t,Ae,void 0,a,A);for(R in a)A=a[R],C=n[R],!a.hasOwnProperty(R)||A===C||A===void 0&&C===void 0||Uu(e,t,R,A,a,C);return}}for(var z in n)A=n[z],n.hasOwnProperty(z)&&A!=null&&!a.hasOwnProperty(z)&&Te(e,t,z,null,a,A);for(k in a)A=a[k],C=n[k],!a.hasOwnProperty(k)||A===C||A==null&&C==null||Te(e,t,k,A,a,C)}function Dm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],r=i.transferSize,f=i.initiatorType,h=i.duration;if(r&&h&&Dm(f)){for(f=0,h=i.responseEnd,a+=1;a<n.length;a++){var y=n[a],T=y.startTime;if(T>h)break;var R=y.transferSize,k=y.initiatorType;R&&Dm(k)&&(y=y.responseEnd,f+=R*(y<h?1:(h-T)/(y-T)))}if(--a,t+=8*(r+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hu=null,Lu=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function km(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=null;function Ub(){var e=window.event;return e&&e.type==="popstate"?e===Yu?!1:(Yu=e,!0):(Yu=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,Hb=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,Lb=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(e){return Hm.resolve(null).then(e).catch(Gb)}:Um;function Gb(e){setTimeout(function(){throw e})}function $n(e){return e==="head"}function Lm(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),ml(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ji(n);for(var r=n.firstChild;r;){var f=r.nextSibling,h=r.nodeName;r[Gl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=f}}else n==="body"&&ji(e.ownerDocument.body);n=i}while(n);ml(t)}function Gm(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Zo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Yb(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function qb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function Ym(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function Ku(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qu=null;function qm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Km(e,t,n){switch(t=Qr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zo(e)}var Yt=new Map,Qm=new Set;function Xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=V.d;V.d={f:Kb,r:Qb,D:Xb,C:Zb,L:Jb,m:$b,X:Fb,S:Wb,M:Pb};function Kb(){var e=zn.f(),t=Ur();return e||t}function Qb(e){var t=Oa(e);t!==null&&t.tag===5&&t.type==="form"?sh(t):zn.r(e)}var fl=typeof document>"u"?null:document;function Xm(e,t,n){var a=fl;if(a&&typeof t=="string"&&t){var i=Ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Qm.has(i)||(Qm.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function Xb(e){zn.D(e),Xm("dns-prefetch",e,null)}function Zb(e,t){zn.C(e,t),Xm("preconnect",e,t)}function Jb(e,t,n){zn.L(e,t,n);var a=fl;if(a&&e&&t){var i='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ot(n.imageSizes)+'"]')):i+='[href="'+Ot(e)+'"]';var r=i;switch(t){case"style":r=dl(e);break;case"script":r=hl(e)}Yt.has(r)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(zi(r))||t==="script"&&a.querySelector(_i(r))||(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function $b(e,t){zn.m(e,t);var n=fl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hl(e)}if(!Yt.has(r)&&(e=_({rel:"modulepreload",href:e},t),Yt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_i(r)))return}a=n.createElement("link"),nt(a,"link",e),We(a),n.head.appendChild(a)}}}function Wb(e,t,n){zn.S(e,t,n);var a=fl;if(a&&e){var i=Da(a).hoistableStyles,r=dl(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(zi(r)))h.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(r))&&Xu(e,n);var y=f=a.createElement("link");We(y),nt(y,"link",e),y._p=new Promise(function(T,R){y.onload=T,y.onerror=R}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Zr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function Fb(e,t){zn.X(e,t);var n=fl;if(n&&e){var a=Da(n).hoistableScripts,i=hl(e),r=a.get(i);r||(r=n.querySelector(_i(i)),r||(e=_({src:e,async:!0},t),(t=Yt.get(i))&&Zu(e,t),r=n.createElement("script"),We(r),nt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Pb(e,t){zn.M(e,t);var n=fl;if(n&&e){var a=Da(n).hoistableScripts,i=hl(e),r=a.get(i);r||(r=n.querySelector(_i(i)),r||(e=_({src:e,async:!0,type:"module"},t),(t=Yt.get(i))&&Zu(e,t),r=n.createElement("script"),We(r),nt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Zm(e,t,n,a){var i=(i=re.current)?Xr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=dl(n.href),n=Da(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=dl(n.href);var r=Da(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(zi(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),r||Ib(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(n),n=Da(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+Ot(e)+'"'}function zi(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ib(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",n),We(t),e.head.appendChild(t))}function hl(e){return'[src="'+Ot(e)+'"]'}function _i(e){return"script[async]"+e}function $m(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(a)return t.instance=a,We(a),a;var i=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),nt(a,"style",i),Zr(a,n.precedence,e),t.instance=a;case"stylesheet":i=dl(n.href);var r=e.querySelector(zi(i));if(r)return t.state.loading|=4,t.instance=r,We(r),r;a=Jm(n),(i=Yt.get(i))&&Xu(a,i),r=(e.ownerDocument||e).createElement("link"),We(r);var f=r;return f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),nt(r,"link",a),t.state.loading|=4,Zr(r,n.precedence,e),t.instance=r;case"script":return r=hl(n.src),(i=e.querySelector(_i(r)))?(t.instance=i,We(i),i):(a=n,(i=Yt.get(r))&&(a=_({},n),Zu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),We(i),nt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Zr(a,n.precedence,e));return t.instance}function Zr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Jr=null;function Wm(e,t,n){if(Jr===null){var a=new Map,i=Jr=new Map;i.set(n,a)}else i=Jr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[Gl]||r[Pe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function Fm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ex(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tx(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=dl(a.href),r=t.querySelector(zi(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$r.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,We(r);return}r=t.ownerDocument||t,a=Jm(a),(i=Yt.get(i))&&Xu(a,i),r=r.createElement("link"),We(r);var f=r;f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),nt(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=$r.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ju=0;function nx(e,t){return e.stylesheets&&e.count===0&&Fr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Fr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ju===0&&(Ju=62500*Nb());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ju?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function $r(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function Fr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(ax,e),Wr=null,$r.call(e))}function ax(e,t){if(!(t.state.loading&4)){var n=Wr.get(e);if(n)var a=n.get(null);else{n=new Map,Wr.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=$r.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:H,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function lx(e,t,n,a,i,r,f,h,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.hiddenUpdates=Vo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Im(e,t,n,a,i,r,f,h,y,T,R,k){return e=new lx(e,t,n,f,y,T,R,k,h),t=1,r===!0&&(t|=24),r=jt(3,null,null,t),e.current=r,r.stateNode=e,t=Ts(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Rs(r),e}function e0(e){return e?(e=Ka,e):Ka}function t0(e,t,n,a,i,r){i=e0(i),a.context===null?a.context=i:a.pendingContext=i,a=Hn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Ln(e,a,t),n!==null&&(mt(n,e,t),ai(n,e,t))}function n0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){n0(e,t),(e=e.alternate)&&n0(e,t)}function a0(e){if(e.tag===13||e.tag===31){var t=fa(e,67108864);t!==null&&mt(t,e,67108864),$u(e,67108864)}}function l0(e){if(e.tag===13||e.tag===31){var t=Tt();t=Ko(t);var n=fa(e,t);n!==null&&mt(n,e,t),$u(e,t)}}var Pr=!0;function ix(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=2,Wu(e,t,n,a)}finally{V.p=r,B.T=i}}function rx(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=8,Wu(e,t,n,a)}finally{V.p=r,B.T=i}}function Wu(e,t,n,a){if(Pr){var i=Fu(a);if(i===null)Nu(e,t,a,Ir,n),r0(e,a);else if(sx(i,e,t,n,a))a.stopPropagation();else if(r0(e,a),t&4&&-1<ox.indexOf(e)){for(;i!==null;){var r=Oa(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=ra(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var y=1<<31-vt(f);h.entanglements[1]|=y,f&=~y}nn(r),(Se&6)===0&&(kr=xt()+500,yi(0))}}break;case 31:case 13:h=fa(r,2),h!==null&&mt(h,r,2),Ur(),$u(r,2)}if(r=Fu(a),r===null&&Nu(e,t,a,Ir,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else Nu(e,t,a,null,n)}}function Fu(e){return e=Io(e),Pu(e)}var Ir=null;function Pu(e){if(Ir=null,e=Ba(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ir=e,null}function i0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xp()){case hf:return 2;case mf:return 8;case qi:case Zp:return 32;case gf:return 268435456;default:return 32}default:return 32}}var Iu=!1,Wn=null,Fn=null,Pn=null,Ei=new Map,Ti=new Map,In=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function Ai(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&a0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sx(e,t,n,a,i){switch(t){case"focusin":return Wn=Ai(Wn,e,t,n,a,i),!0;case"dragenter":return Fn=Ai(Fn,e,t,n,a,i),!0;case"mouseover":return Pn=Ai(Pn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return Ei.set(r,Ai(Ei.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Ti.set(r,Ai(Ti.get(r)||null,e,t,n,a,i)),!0}return!1}function o0(e){var t=Ba(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Sf(e.priority,function(){l0(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Sf(e.priority,function(){l0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Po=a,n.target.dispatchEvent(a),Po=null}else return t=Oa(n),t!==null&&a0(t),e.blockedOn=n,!1;t.shift()}return!0}function s0(e,t,n){eo(e)&&n.delete(t)}function ux(){Iu=!1,Wn!==null&&eo(Wn)&&(Wn=null),Fn!==null&&eo(Fn)&&(Fn=null),Pn!==null&&eo(Pn)&&(Pn=null),Ei.forEach(s0),Ti.forEach(s0)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ux)))}var no=null;function u0(e){no!==e&&(no=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){no===e&&(no=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Pu(a||n)===null)continue;break}var r=Oa(n);r!==null&&(e.splice(t,3),t-=3,Fs(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ml(e){function t(y){return to(y,e)}Wn!==null&&to(Wn,e),Fn!==null&&to(Fn,e),Pn!==null&&to(Pn,e),Ei.forEach(t),Ti.forEach(t);for(var n=0;n<In.length;n++){var a=In[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<In.length&&(n=In[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&In.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[st]||null;if(typeof r=="function")f||u0(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[st]||null)h=f.formAction;else if(Pu(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),u0(n)}}}function c0(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ec(e){this._internalRoot=e}ao.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Tt();t0(n,a,e,t,null,null)},ao.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;t0(e.current,2,null,e,null,null),Ur(),t[Ra]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&o0(e)}};var f0=s.version;if(f0!=="19.2.3")throw Error(u(527,f0,"19.2.3"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var cx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Ul=lo.inject(cx),yt=lo}catch{}}return Mi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",i=xh,r=yh,f=vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Im(e,1,!1,null,null,n,a,null,i,r,f,c0),e[Ra]=t.current,ku(e),new ec(t)},Mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,i="",r=xh,f=yh,h=vh,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=Im(e,1,!0,t,n??null,a,i,y,r,f,h,c0),t.context=e0(null),n=t.current,a=Tt(),a=Ko(a),i=Hn(a),i.callback=null,Ln(n,i,a),n=a,t.current.lanes=n,Ll(t,n),nn(t),e[Ra]=t.current,ku(e),new ao(t)},Mi.version="19.2.3",Mi}var S0;function Sx(){if(S0)return ac.exports;S0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),ac.exports=vx(),ac.exports}var jx=Sx(),lt=function(){return lt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(s[g]=c[g])}return s},lt.apply(this,arguments)};function _o(l,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,g;u<d;u++)(g||!(u in s))&&(g||(g=Array.prototype.slice.call(s,0,u)),g[u]=s[u]);return l.concat(g||Array.prototype.slice.call(s))}var Oe="-ms-",Ni="-moz-",je="-webkit-",ag="comm",Mo="rule",Fc="decl",zx="@import",_x="@namespace",lg="@keyframes",wx="@layer",ig=Math.abs,Pc=String.fromCharCode,Yc=Object.assign;function Ex(l,s){return $e(l,0)^45?(((s<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function rg(l){return l.trim()}function wn(l,s){return(l=s.exec(l))?l[0]:l}function se(l,s,c){return l.replace(s,c)}function bo(l,s,c){return l.indexOf(s,c)}function $e(l,s){return l.charCodeAt(s)|0}function Ea(l,s,c){return l.slice(s,c)}function Jt(l){return l.length}function og(l){return l.length}function Oi(l,s){return s.push(l),l}function Tx(l,s){return l.map(s).join("")}function j0(l,s){return l.filter(function(c){return!wn(c,s)})}var Ro=1,Ml=1,sg=0,qt=0,Ze=0,Ol="";function Bo(l,s,c,u,d,g,p,v){return{value:l,root:s,parent:c,type:u,props:d,children:g,line:Ro,column:Ml,length:p,return:"",siblings:v}}function la(l,s){return Yc(Bo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function gl(l){for(;l.root;)l=la(l.root,{children:[l]});Oi(l,l.siblings)}function Ax(){return Ze}function Cx(){return Ze=qt>0?$e(Ol,--qt):0,Ml--,Ze===10&&(Ml=1,Ro--),Ze}function $t(){return Ze=qt<sg?$e(Ol,qt++):0,Ml++,Ze===10&&(Ml=1,Ro++),Ze}function ia(){return $e(Ol,qt)}function xo(){return qt}function Oo(l,s){return Ea(Ol,l,s)}function Ui(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mx(l){return Ro=Ml=1,sg=Jt(Ol=l),qt=0,[]}function Rx(l){return Ol="",l}function oc(l){return rg(Oo(qt-1,qc(l===91?l+2:l===40?l+1:l)))}function Bx(l){for(;(Ze=ia())&&Ze<33;)$t();return Ui(l)>2||Ui(Ze)>3?"":" "}function Ox(l,s){for(;--s&&$t()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return Oo(l,xo()+(s<6&&ia()==32&&$t()==32))}function qc(l){for(;$t();)switch(Ze){case l:return qt;case 34:case 39:l!==34&&l!==39&&qc(Ze);break;case 40:l===41&&qc(l);break;case 92:$t();break}return qt}function Dx(l,s){for(;$t()&&l+Ze!==57;)if(l+Ze===84&&ia()===47)break;return"/*"+Oo(s,qt-1)+"*"+Pc(l===47?l:$t())}function kx(l){for(;!Ui(ia());)$t();return Oo(l,qt)}function Nx(l){return Rx(yo("",null,null,null,[""],l=Mx(l),0,[0],l))}function yo(l,s,c,u,d,g,p,v,b){for(var x=0,w=0,_=p,U=0,L=0,q=0,Y=1,X=1,Q=1,G=0,H="",F=d,P=g,J=u,N=H;X;)switch(q=G,G=$t()){case 40:if(q!=108&&$e(N,_-1)==58){bo(N+=se(oc(G),"&","&\f"),"&\f",ig(x?v[x-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:N+=oc(G);break;case 9:case 10:case 13:case 32:N+=Bx(q);break;case 92:N+=Ox(xo()-1,7);continue;case 47:switch(ia()){case 42:case 47:Oi(Ux(Dx($t(),xo()),s,c,b),b),(Ui(q||1)==5||Ui(ia()||1)==5)&&Jt(N)&&Ea(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*Y:v[x++]=Jt(N)*Q;case 125*Y:case 59:case 0:switch(G){case 0:case 125:X=0;case 59+w:Q==-1&&(N=se(N,/\f/g,"")),L>0&&(Jt(N)-_||Y===0&&q===47)&&Oi(L>32?_0(N+";",u,c,_-1,b):_0(se(N," ","")+";",u,c,_-2,b),b);break;case 59:N+=";";default:if(Oi(J=z0(N,s,c,x,w,d,v,H,F=[],P=[],_,g),g),G===123)if(w===0)yo(N,s,J,J,F,g,_,v,P);else{switch(U){case 99:if($e(N,3)===110)break;case 108:if($e(N,2)===97)break;default:w=0;case 100:case 109:case 115:}w?yo(l,J,J,u&&Oi(z0(l,J,J,0,0,d,v,H,d,F=[],_,P),P),d,P,_,v,u?F:P):yo(N,J,J,J,[""],P,0,v,P)}}x=w=L=0,Y=Q=1,H=N="",_=p;break;case 58:_=1+Jt(N),L=q;default:if(Y<1){if(G==123)--Y;else if(G==125&&Y++==0&&Cx()==125)continue}switch(N+=Pc(G),G*Y){case 38:Q=w>0?1:(N+="\f",-1);break;case 44:v[x++]=(Jt(N)-1)*Q,Q=1;break;case 64:ia()===45&&(N+=oc($t())),U=ia(),w=_=Jt(H=N+=kx(xo())),G++;break;case 45:q===45&&Jt(N)==2&&(Y=0)}}return g}function z0(l,s,c,u,d,g,p,v,b,x,w,_){for(var U=d-1,L=d===0?g:[""],q=og(L),Y=0,X=0,Q=0;Y<u;++Y)for(var G=0,H=Ea(l,U+1,U=ig(X=p[Y])),F=l;G<q;++G)(F=rg(X>0?L[G]+" "+H:se(H,/&\f/g,L[G])))&&(b[Q++]=F);return Bo(l,s,c,d===0?Mo:v,b,x,w,_)}function Ux(l,s,c,u){return Bo(l,s,c,ag,Pc(Ax()),Ea(l,2,-2),0,u)}function _0(l,s,c,u,d){return Bo(l,s,c,Fc,Ea(l,0,u),Ea(l,u+1,-1),u,d)}function ug(l,s,c){switch(Ex(l,s)){case 5103:return je+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return je+l+l;case 4855:return je+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return Ni+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return je+l+Ni+l+Oe+l+l;case 5936:switch($e(l,s+11)){case 114:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return je+l+Oe+se(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return je+l+Oe+l+l;case 6165:return je+l+Oe+"flex-"+l+l;case 5187:return je+l+se(l,/(\w+).+(:[^]+)/,je+"box-$1$2"+Oe+"flex-$1$2")+l;case 5443:return je+l+Oe+"flex-item-"+se(l,/flex-|-self/g,"")+(wn(l,/flex-|baseline/)?"":Oe+"grid-row-"+se(l,/flex-|-self/g,""))+l;case 4675:return je+l+Oe+"flex-line-pack"+se(l,/align-content|flex-|-self/g,"")+l;case 5548:return je+l+Oe+se(l,"shrink","negative")+l;case 5292:return je+l+Oe+se(l,"basis","preferred-size")+l;case 6060:return je+"box-"+se(l,"-grow","")+je+l+Oe+se(l,"grow","positive")+l;case 4554:return je+se(l,/([^-])(transform)/g,"$1"+je+"$2")+l;case 6187:return se(se(se(l,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),l,"")+l;case 5495:case 3959:return se(l,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return se(se(l,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Oe+"flex-pack:$3"),/space-between/,"justify")+je+l+l;case 4200:if(!wn(l,/flex-|baseline/))return Oe+"grid-column-align"+Ea(l,s)+l;break;case 2592:case 3360:return Oe+se(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,wn(u.props,/grid-\w+-end/)})?~bo(l+(c=c[s].value),"span",0)?l:Oe+se(l,"-start","")+l+Oe+"grid-row-span:"+(~bo(c,"span",0)?wn(c,/\d+/):+wn(c,/\d+/)-+wn(l,/\d+/))+";":Oe+se(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return wn(u.props,/grid-\w+-start/)})?l:Oe+se(se(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return se(l,/(.+)-inline(.+)/,je+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(l)-1-s>6)switch($e(l,s+1)){case 109:if($e(l,s+4)!==45)break;case 102:return se(l,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+Ni+($e(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~bo(l,"stretch",0)?ug(se(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return se(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,g,p,v,b,x){return Oe+d+":"+g+x+(p?Oe+d+"-span:"+(v?b:+b-+g)+x:"")+l});case 4949:if($e(l,s+6)===121)return se(l,":",":"+je)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return se(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+($e(l,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Oe+"$2box$3")+l;case 100:return se(l,":",":"+Oe)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(l,"scroll-","scroll-snap-")+l}return l}function wo(l,s){for(var c="",u=0;u<l.length;u++)c+=s(l[u],u,l,s)||"";return c}function Hx(l,s,c,u){switch(l.type){case wx:if(l.children.length)break;case zx:case _x:case Fc:return l.return=l.return||l.value;case ag:return"";case lg:return l.return=l.value+"{"+wo(l.children,u)+"}";case Mo:if(!Jt(l.value=l.props.join(",")))return""}return Jt(c=wo(l.children,u))?l.return=l.value+"{"+c+"}":""}function Lx(l){var s=og(l);return function(c,u,d,g){for(var p="",v=0;v<s;v++)p+=l[v](c,u,d,g)||"";return p}}function Gx(l){return function(s){s.root||(s=s.return)&&l(s)}}function Yx(l,s,c,u){if(l.length>-1&&!l.return)switch(l.type){case Fc:l.return=ug(l.value,l.length,c);return;case lg:return wo([la(l,{value:se(l.value,"@","@"+je)})],u);case Mo:if(l.length)return Tx(c=l.props,function(d){switch(wn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gl(la(l,{props:[se(d,/:(read-\w+)/,":"+Ni+"$1")]})),gl(la(l,{props:[d]})),Yc(l,{props:j0(c,u)});break;case"::placeholder":gl(la(l,{props:[se(d,/:(plac\w+)/,":"+je+"input-$1")]})),gl(la(l,{props:[se(d,/:(plac\w+)/,":"+Ni+"$1")]})),gl(la(l,{props:[se(d,/:(plac\w+)/,Oe+"input-$1")]})),gl(la(l,{props:[d]})),Yc(l,{props:j0(c,u)});break}return""})}}var qx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Rl=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",cg="active",fg="data-styled-version",Do="6.3.8",Ic=`/*!sc*/
`,Eo=typeof window<"u"&&typeof document<"u",Ta=Ct.createContext===void 0,Vx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),ko=Object.freeze([]),Bl=Object.freeze({});function Kx(l,s,c){return c===void 0&&(c=Bl),l.theme!==c.theme&&l.theme||s||c.theme}var dg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Qx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xx=/(^-|-$)/g;function w0(l){return l.replace(Qx,"-").replace(Xx,"")}var Zx=/(a)(d)/gi,E0=function(l){return String.fromCharCode(l+(l>25?39:97))};function Vc(l){var s,c="";for(s=Math.abs(l);s>52;s=s/52|0)c=E0(s%52)+c;return(E0(s%52)+c).replace(Zx,"$1-$2")}var sc,Tl=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},hg=function(l){return Tl(5381,l)};function Jx(l){return Vc(hg(l)>>>0)}function $x(l){return l.displayName||l.name||"Component"}function uc(l){return typeof l=="string"&&!0}var mg=typeof Symbol=="function"&&Symbol.for,gg=mg?Symbol.for("react.memo"):60115,Wx=mg?Symbol.for("react.forward_ref"):60112,Fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Px={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ix=((sc={})[Wx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sc[gg]=pg,sc);function T0(l){return("type"in(s=l)&&s.type.$$typeof)===gg?pg:"$$typeof"in l?Ix[l.$$typeof]:Fx;var s}var ey=Object.defineProperty,ty=Object.getOwnPropertyNames,A0=Object.getOwnPropertySymbols,ny=Object.getOwnPropertyDescriptor,ay=Object.getPrototypeOf,C0=Object.prototype;function bg(l,s,c){if(typeof s!="string"){if(C0){var u=ay(s);u&&u!==C0&&bg(l,u,c)}var d=ty(s);A0&&(d=d.concat(A0(s)));for(var g=T0(l),p=T0(s),v=0;v<d.length;++v){var b=d[v];if(!(b in Px||c&&c[b]||p&&b in p||g&&b in g)){var x=ny(s,b);try{ey(l,b,x)}catch{}}}}return l}function Aa(l){return typeof l=="function"}function ef(l){return typeof l=="object"&&"styledComponentId"in l}function _a(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function M0(l,s){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function Hi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Kc(l,s,c){if(c===void 0&&(c=!1),!c&&!Hi(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)l[u]=Kc(l[u],s[u]);else if(Hi(s))for(var u in s)l[u]=Kc(l[u],s[u]);return l}function tf(l,s){Object.defineProperty(l,"toString",{value:s})}function Ca(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var ly=(function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,g=d;s>=g;)if((g<<=1)<0)throw Ca(16,"".concat(s));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var p=d;p<g;p++)this.groupSizes[p]=0}for(var v=this.indexOfGroup(s+1),b=(p=0,c.length);p<b;p++)this.tag.insertRule(v,c[p])&&(this.groupSizes[s]++,v++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var g=u;g<d;g++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),g=d+u,p=d;p<g;p++)c+="".concat(this.tag.getRule(p)).concat(Ic);return c},l})(),vo=new Map,To=new Map,So=1,Di=function(l){if(vo.has(l))return vo.get(l);for(;To.has(So);)So++;var s=So++;return vo.set(l,s),To.set(s,l),s},iy=function(l,s){So=s+1,vo.set(l,s),To.set(s,l)},ry="style[".concat(Rl,"][").concat(fg,'="').concat(Do,'"]'),oy=new RegExp("^".concat(Rl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sy=function(l,s,c){for(var u,d=c.split(","),g=0,p=d.length;g<p;g++)(u=d[g])&&l.registerName(s,u)},uy=function(l,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(Ic),d=[],g=0,p=u.length;g<p;g++){var v=u[g].trim();if(v){var b=v.match(oy);if(b){var x=0|parseInt(b[1],10),w=b[2];x!==0&&(iy(w,x),sy(l,w,b[3]),l.getTag().insertRules(x,d)),d.length=0}else d.push(v)}}},R0=function(l){for(var s=document.querySelectorAll(ry),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(Rl)!==cg&&(uy(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function cy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xg=function(l){var s=document.head,c=l||s,u=document.createElement("style"),d=(function(v){var b=Array.from(v.querySelectorAll("style[".concat(Rl,"]")));return b[b.length-1]})(c),g=d!==void 0?d.nextSibling:null;u.setAttribute(Rl,cg),u.setAttribute(fg,Do);var p=cy();return p&&u.setAttribute("nonce",p),c.insertBefore(u,g),u},fy=(function(){function l(s){this.element=xg(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,g=u.length;d<g;d++){var p=u[d];if(p.ownerNode===c)return p}throw Ca(17)})(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l})(),dy=(function(){function l(s){this.element=xg(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l})(),hy=(function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l})(),B0=Eo,my={isServer:!Eo,useCSSOMInjection:!Vx},yg=(function(){function l(s,c,u){s===void 0&&(s=Bl),c===void 0&&(c={});var d=this;this.options=lt(lt({},my),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&Eo&&B0&&(B0=!1,R0(this)),tf(this,function(){return(function(g){for(var p=g.getTag(),v=p.length,b="",x=function(_){var U=(function(Q){return To.get(Q)})(_);if(U===void 0)return"continue";var L=g.names.get(U),q=p.getGroup(_);if(L===void 0||!L.size||q.length===0)return"continue";var Y="".concat(Rl,".g").concat(_,'[id="').concat(U,'"]'),X="";L!==void 0&&L.forEach(function(Q){Q.length>0&&(X+="".concat(Q,","))}),b+="".concat(q).concat(Y,'{content:"').concat(X,'"}').concat(Ic)},w=0;w<v;w++)x(w);return b})(d)})}return l.registerId=function(s){return Di(s)},l.prototype.rehydrate=function(){!this.server&&Eo&&R0(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(lt(lt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new hy(d):u?new fy(d):new dy(d)})(this.options),new ly(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(Di(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},l.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(Di(s),u)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(Di(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l})(),gy=/&/g,Al=47;function O0(l){if(l.indexOf("}")===-1)return!1;for(var s=l.length,c=0,u=0,d=!1,g=0;g<s;g++){var p=l.charCodeAt(g);if(u!==0||d||p!==Al||l.charCodeAt(g+1)!==42)if(d)p===42&&l.charCodeAt(g+1)===Al&&(d=!1,g++);else if(p!==34&&p!==39||g!==0&&l.charCodeAt(g-1)===92){if(u===0){if(p===123)c++;else if(p===125&&--c<0)return!0}}else u===0?u=p:u===p&&(u=0);else d=!0,g++}return c!==0||u!==0}function vg(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=vg(c.children,s)),c})}function py(l){var s,c,u,d=Bl,g=d.options,p=g===void 0?Bl:g,v=d.plugins,b=v===void 0?ko:v,x=function(U,L,q){return q.startsWith(c)&&q.endsWith(c)&&q.replaceAll(c,"").length>0?".".concat(s):U},w=b.slice();w.push(function(U){U.type===Mo&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(gy,c).replace(u,x))}),p.prefix&&w.push(Yx),w.push(Hx);var _=function(U,L,q,Y){L===void 0&&(L=""),q===void 0&&(q=""),Y===void 0&&(Y="&"),s=Y,c=L,u=new RegExp("\\".concat(c,"\\b"),"g");var X=(function(H){if(!O0(H))return H;for(var F=H.length,P="",J=0,N=0,ie=0,be=!1,ue=0;ue<F;ue++){var Ue=H.charCodeAt(ue);if(ie!==0||be||Ue!==Al||H.charCodeAt(ue+1)!==42)if(be)Ue===42&&H.charCodeAt(ue+1)===Al&&(be=!1,ue++);else if(Ue!==34&&Ue!==39||ue!==0&&H.charCodeAt(ue-1)===92){if(ie===0)if(Ue===123)N++;else if(Ue===125){if(--N<0){for(var Me=ue+1;Me<F;){var gt=H.charCodeAt(Me);if(gt===59||gt===10)break;Me++}Me<F&&H.charCodeAt(Me)===59&&Me++,N=0,ue=Me-1,J=Me;continue}N===0&&(P+=H.substring(J,ue+1),J=ue+1)}else Ue===59&&N===0&&(P+=H.substring(J,ue+1),J=ue+1)}else ie===0?ie=Ue:ie===Ue&&(ie=0);else be=!0,ue++}if(J<F){var ot=H.substring(J);O0(ot)||(P+=ot)}return P})((function(H){if(H.indexOf("//")===-1)return H;for(var F=H.length,P=[],J=0,N=0,ie=0,be=0;N<F;){var ue=H.charCodeAt(N);if(ue!==34&&ue!==39||N!==0&&H.charCodeAt(N-1)===92)if(ie===0)if(ue===40&&N>=3&&(32|H.charCodeAt(N-1))==108&&(32|H.charCodeAt(N-2))==114&&(32|H.charCodeAt(N-3))==117)be=1,N++;else if(be>0)ue===41?be--:ue===40&&be++,N++;else if(ue===Al&&N+1<F&&H.charCodeAt(N+1)===Al){for(N>J&&P.push(H.substring(J,N));N<F&&H.charCodeAt(N)!==10;)N++;J=N}else N++;else N++;else ie===0?ie=ue:ie===ue&&(ie=0),N++}return J===0?H:(J<F&&P.push(H.substring(J)),P.join(""))})(U)),Q=Nx(q||L?"".concat(q," ").concat(L," { ").concat(X," }"):X);p.namespace&&(Q=vg(Q,p.namespace));var G=[];return wo(Q,Lx(w.concat(Gx(function(H){return G.push(H)})))),G};return _.hash=b.length?b.reduce(function(U,L){return L.name||Ca(15),Tl(U,L.name)},5381).toString():"",_}var by=new yg,Qc=py(),Xc={shouldForwardProp:void 0,styleSheet:by,stylis:Qc},Sg=Ta?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(Xc)}}:Ct.createContext(Xc);Sg.Consumer;Ta||Ct.createContext(void 0);function D0(){return Ta?Xc:Ct.useContext(Sg)}var xy=(function(){function l(s,c){var u=this;this.inject=function(d,g){g===void 0&&(g=Qc);var p=u.name+g.hash;d.hasNameForId(u.id,p)||d.insertRules(u.id,p,g(u.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,tf(this,function(){throw Ca(12,String(u.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=Qc),this.name+s.hash},l})();function yy(l,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||l in qx||l.startsWith("--")?String(s).trim():"".concat(s,"px")}var vy=function(l){return l>="A"&&l<="Z"};function k0(l){for(var s="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;vy(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var jg=function(l){return l==null||l===!1||l===""},zg=function(l){var s=[];for(var c in l){var u=l[c];l.hasOwnProperty(c)&&!jg(u)&&(Array.isArray(u)&&u.isCss||Aa(u)?s.push("".concat(k0(c),":"),u,";"):Hi(u)?s.push.apply(s,_o(_o(["".concat(c," {")],zg(u),!1),["}"],!1)):s.push("".concat(k0(c),": ").concat(yy(c,u),";")))}return s};function wa(l,s,c,u){if(jg(l))return[];if(ef(l))return[".".concat(l.styledComponentId)];if(Aa(l)){if(!Aa(g=l)||g.prototype&&g.prototype.isReactComponent||!s)return[l];var d=l(s);return wa(d,s,c,u)}var g;return l instanceof xy?c?(l.inject(c,u),[l.getName(u)]):[l]:Hi(l)?zg(l):Array.isArray(l)?Array.prototype.concat.apply(ko,l.map(function(p){return wa(p,s,c,u)})):[l.toString()]}function Sy(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(Aa(c)&&!ef(c))return!1}return!0}var jy=hg(Do),zy=(function(){function l(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Sy(s),this.componentId=c,this.baseHash=Tl(jy,c),this.baseStyle=u,yg.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=_a(d,this.staticRulesId);else{var g=M0(wa(this.rules,s,c,u)),p=Vc(Tl(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,p)){var v=u(g,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,v)}d=_a(d,p),this.staticRulesId=p}else{for(var b=Tl(this.baseHash,u.hash),x="",w=0;w<this.rules.length;w++){var _=this.rules[w];if(typeof _=="string")x+=_;else if(_){var U=M0(wa(_,s,c,u));b=Tl(b,U+w),x+=U}}if(x){var L=Vc(b>>>0);if(!c.hasNameForId(this.componentId,L)){var q=u(x,".".concat(L),void 0,this.componentId);c.insertRules(this.componentId,L,q)}d=_a(d,L)}}return{className:d,css:typeof window>"u"?c.getTag().getGroup(Di(this.componentId)):""}},l})(),Ao=Ta?{Provider:function(l){return l.children},Consumer:function(l){return(0,l.children)(void 0)}}:Ct.createContext(void 0);Ao.Consumer;function _y(l){if(Ta)return l.children;var s=Ct.useContext(Ao),c=Ct.useMemo(function(){return(function(u,d){if(!u)throw Ca(14);if(Aa(u)){var g=u(d);return g}if(Array.isArray(u)||typeof u!="object")throw Ca(8);return d?lt(lt({},d),u):u})(l.theme,s)},[l.theme,s]);return l.children?Ct.createElement(Ao.Provider,{value:c},l.children):null}var cc={};function wy(l,s,c){var u=ef(l),d=l,g=!uc(l),p=s.attrs,v=p===void 0?ko:p,b=s.componentId,x=b===void 0?(function(F,P){var J=typeof F!="string"?"sc":w0(F);cc[J]=(cc[J]||0)+1;var N="".concat(J,"-").concat(Jx(Do+J+cc[J]));return P?"".concat(P,"-").concat(N):N})(s.displayName,s.parentComponentId):b,w=s.displayName,_=w===void 0?(function(F){return uc(F)?"styled.".concat(F):"Styled(".concat($x(F),")")})(l):w,U=s.displayName&&s.componentId?"".concat(w0(s.displayName),"-").concat(s.componentId):s.componentId||x,L=u&&d.attrs?d.attrs.concat(v).filter(Boolean):v,q=s.shouldForwardProp;if(u&&d.shouldForwardProp){var Y=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;q=function(F,P){return Y(F,P)&&X(F,P)}}else q=Y}var Q=new zy(c,U,u?d.componentStyle:void 0);function G(F,P){return(function(J,N,ie){var be=J.attrs,ue=J.componentStyle,Ue=J.defaultProps,Me=J.foldedComponentIds,gt=J.styledComponentId,ot=J.target,pt=Ta?void 0:Ct.useContext(Ao),B=D0(),V=J.shouldForwardProp||B.shouldForwardProp,ee=Kx(N,pt,Ue)||Bl,ce=(function(qe,we,Wt){for(var Ft,bt=lt(lt({},we),{className:void 0,theme:Wt}),Ma=0;Ma<qe.length;Ma+=1){var Rt=Aa(Ft=qe[Ma])?Ft(bt):Ft;for(var Pt in Rt)Pt==="className"?bt.className=_a(bt.className,Rt[Pt]):Pt==="style"?bt.style=lt(lt({},bt.style),Rt[Pt]):bt[Pt]=Rt[Pt]}return"className"in we&&typeof we.className=="string"&&(bt.className=_a(bt.className,we.className)),bt})(be,N,ee),xe=ce.as||ot,j={};for(var O in ce)ce[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&ce.theme===ee||(O==="forwardedAs"?j.as=ce.forwardedAs:V&&!V(O,xe)||(j[O]=ce[O]));var K=(function(qe,we){var Wt=D0(),Ft=qe.generateAndInjectStyles(we,Wt.styleSheet,Wt.stylis);return Ft})(ue,ce),Z=K.className,ne=K.css,re=_a(Me,gt);Z&&(re+=" "+Z),ce.className&&(re+=" "+ce.className),j[uc(xe)&&!dg.has(xe)?"class":"className"]=re,ie&&(j.ref=ie);var pe=M.createElement(xe,j);return Ta&&ne?Ct.createElement(Ct.Fragment,null,Ct.createElement("style",{precedence:"styled-components",href:"sc-".concat(gt,"-").concat(Z),children:ne}),pe):pe})(H,F,P)}G.displayName=_;var H=Ct.forwardRef(G);return H.attrs=L,H.componentStyle=Q,H.displayName=_,H.shouldForwardProp=q,H.foldedComponentIds=u?_a(d.foldedComponentIds,d.styledComponentId):"",H.styledComponentId=U,H.target=u?d.target:l,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=u?(function(P){for(var J=[],N=1;N<arguments.length;N++)J[N-1]=arguments[N];for(var ie=0,be=J;ie<be.length;ie++)Kc(P,be[ie],!0);return P})({},d.defaultProps,F):F}}),tf(H,function(){return".".concat(H.styledComponentId)}),g&&bg(H,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function N0(l,s){for(var c=[l[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],l[u+1]);return c}var U0=function(l){return Object.assign(l,{isCss:!0})};function Ey(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(Aa(l)||Hi(l))return U0(wa(N0(ko,_o([l],s,!0))));var u=l;return s.length===0&&u.length===1&&typeof u[0]=="string"?wa(u):U0(wa(N0(u,s)))}function Zc(l,s,c){if(c===void 0&&(c=Bl),!s)throw Ca(1,s);var u=function(d){for(var g=[],p=1;p<arguments.length;p++)g[p-1]=arguments[p];return l(s,c,Ey.apply(void 0,_o([d],g,!1)))};return u.attrs=function(d){return Zc(l,s,lt(lt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Zc(l,s,lt(lt({},c),d))},u}var _g=function(l){return Zc(wy,l)},m=_g;dg.forEach(function(l){m[l]=_g(l)});var H0="popstate";function Ty(l={}){function s(u,d){let{pathname:g,search:p,hash:v}=u.location;return Jc("",{pathname:g,search:p,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Li(d)}return Cy(s,c,null,l)}function Ne(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Vt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Ay(){return Math.random().toString(36).substring(2,10)}function L0(l,s){return{usr:l.state,key:l.key,idx:s}}function Jc(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?Dl(s):s,state:c,key:s&&s.key||u||Ay()}}function Li({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Dl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function Cy(l,s,c,u={}){let{window:d=document.defaultView,v5Compat:g=!1}=u,p=d.history,v="POP",b=null,x=w();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function w(){return(p.state||{idx:null}).idx}function _(){v="POP";let X=w(),Q=X==null?null:X-x;x=X,b&&b({action:v,location:Y.location,delta:Q})}function U(X,Q){v="PUSH";let G=Jc(Y.location,X,Q);x=w()+1;let H=L0(G,x),F=Y.createHref(G);try{p.pushState(H,"",F)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(F)}g&&b&&b({action:v,location:Y.location,delta:1})}function L(X,Q){v="REPLACE";let G=Jc(Y.location,X,Q);x=w();let H=L0(G,x),F=Y.createHref(G);p.replaceState(H,"",F),g&&b&&b({action:v,location:Y.location,delta:0})}function q(X){return My(X)}let Y={get action(){return v},get location(){return l(d,p)},listen(X){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(H0,_),b=X,()=>{d.removeEventListener(H0,_),b=null}},createHref(X){return s(d,X)},createURL:q,encodeLocation(X){let Q=q(X);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:L,go(X){return p.go(X)}};return Y}function My(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Li(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function wg(l,s,c="/"){return Ry(l,s,c,!1)}function Ry(l,s,c,u){let d=typeof s=="string"?Dl(s):s,g=An(d.pathname||"/",c);if(g==null)return null;let p=Eg(l);By(p);let v=null;for(let b=0;v==null&&b<p.length;++b){let x=Vy(g);v=Yy(p[b],x,u)}return v}function Eg(l,s=[],c=[],u="",d=!1){let g=(p,v,b=d,x)=>{let w={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(u)&&b)return;Ne(w.relativePath.startsWith(u),`Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(u.length)}let _=Tn([u,w.relativePath]),U=c.concat(w);p.children&&p.children.length>0&&(Ne(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Eg(p.children,s,U,_,b)),!(p.path==null&&!p.index)&&s.push({path:_,score:Ly(_,p.index),routesMeta:U})};return l.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))g(p,v);else for(let b of Tg(p.path))g(p,v,!0,b)}),s}function Tg(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(u.length===0)return d?[g,""]:[g];let p=Tg(u.join("/")),v=[];return v.push(...p.map(b=>b===""?g:[g,b].join("/"))),d&&v.push(...p),v.map(b=>l.startsWith("/")&&b===""?"/":b)}function By(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:Gy(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Oy=/^:[\w-]+$/,Dy=3,ky=2,Ny=1,Uy=10,Hy=-2,G0=l=>l==="*";function Ly(l,s){let c=l.split("/"),u=c.length;return c.some(G0)&&(u+=Hy),s&&(u+=ky),c.filter(d=>!G0(d)).reduce((d,g)=>d+(Oy.test(g)?Dy:g===""?Ny:Uy),u)}function Gy(l,s){return l.length===s.length&&l.slice(0,-1).every((u,d)=>u===s[d])?l[l.length-1]-s[s.length-1]:0}function Yy(l,s,c=!1){let{routesMeta:u}=l,d={},g="/",p=[];for(let v=0;v<u.length;++v){let b=u[v],x=v===u.length-1,w=g==="/"?s:s.slice(g.length)||"/",_=Co({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},w),U=b.route;if(!_&&x&&c&&!u[u.length-1].route.index&&(_=Co({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!_)return null;Object.assign(d,_.params),p.push({params:d,pathname:Tn([g,_.pathname]),pathnameBase:Zy(Tn([g,_.pathnameBase])),route:U}),_.pathnameBase!=="/"&&(g=Tn([g,_.pathnameBase]))}return p}function Co(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=qy(l.path,l.caseSensitive,l.end),d=s.match(c);if(!d)return null;let g=d[0],p=g.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:u.reduce((x,{paramName:w,isOptional:_},U)=>{if(w==="*"){let q=v[U]||"";p=g.slice(0,g.length-q.length).replace(/(.)\/+$/,"$1")}const L=v[U];return _&&!L?x[w]=void 0:x[w]=(L||"").replace(/%2F/g,"/"),x},{}),pathname:g,pathnameBase:p,pattern:l}}function qy(l,s=!1,c=!0){Vt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,b)=>(u.push({paramName:v,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function Vy(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Vt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function An(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}var Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ky=l=>Ag.test(l);function Qy(l,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?Dl(l):l,g;if(c)if(Ky(c))g=c;else{if(c.includes("//")){let p=c;c=c.replace(/\/\/+/g,"/"),Vt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${c}`)}c.startsWith("/")?g=Y0(c.substring(1),"/"):g=Y0(c,s)}else g=s;return{pathname:g,search:Jy(u),hash:$y(d)}}function Y0(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function fc(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xy(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function nf(l){let s=Xy(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function af(l,s,c,u=!1){let d;typeof l=="string"?d=Dl(l):(d={...l},Ne(!d.pathname||!d.pathname.includes("?"),fc("?","pathname","search",d)),Ne(!d.pathname||!d.pathname.includes("#"),fc("#","pathname","hash",d)),Ne(!d.search||!d.search.includes("#"),fc("#","search","hash",d)));let g=l===""||d.pathname==="",p=g?"/":d.pathname,v;if(p==null)v=c;else{let _=s.length-1;if(!u&&p.startsWith("..")){let U=p.split("/");for(;U[0]==="..";)U.shift(),_-=1;d.pathname=U.join("/")}v=_>=0?s[_]:"/"}let b=Qy(d,v),x=p&&p!=="/"&&p.endsWith("/"),w=(g||p===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(x||w)&&(b.pathname+="/"),b}var Tn=l=>l.join("/").replace(/\/\/+/g,"/"),Zy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Jy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,$y=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Wy=class{constructor(l,s,c,u=!1){this.status=l,this.statusText=s||"",this.internal=u,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Fy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Py(l){return l.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mg(l,s){let c=l;if(typeof c!="string"||!Ag.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let u=c,d=!1;if(Cg)try{let g=new URL(window.location.href),p=c.startsWith("//")?new URL(g.protocol+c):new URL(c),v=An(p.pathname,s);p.origin===g.origin&&v!=null?c=v+p.search+p.hash:d=!0}catch{Vt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rg=["POST","PUT","PATCH","DELETE"];new Set(Rg);var Iy=["GET",...Rg];new Set(Iy);var kl=M.createContext(null);kl.displayName="DataRouter";var No=M.createContext(null);No.displayName="DataRouterState";var ev=M.createContext(!1),Bg=M.createContext({isTransitioning:!1});Bg.displayName="ViewTransition";var tv=M.createContext(new Map);tv.displayName="Fetchers";var nv=M.createContext(null);nv.displayName="Await";var Mt=M.createContext(null);Mt.displayName="Navigation";var Gi=M.createContext(null);Gi.displayName="Location";var ln=M.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var lf=M.createContext(null);lf.displayName="RouteError";var Og="REACT_ROUTER_ERROR",av="REDIRECT",lv="ROUTE_ERROR_RESPONSE";function iv(l){if(l.startsWith(`${Og}:${av}:{`))try{let s=JSON.parse(l.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function rv(l){if(l.startsWith(`${Og}:${lv}:{`))try{let s=JSON.parse(l.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Wy(s.status,s.statusText,s.data)}catch{}}function ov(l,{relative:s}={}){Ne(Nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=M.useContext(Mt),{hash:d,pathname:g,search:p}=Yi(l,{relative:s}),v=g;return c!=="/"&&(v=g==="/"?c:Tn([c,g])),u.createHref({pathname:v,search:p,hash:d})}function Nl(){return M.useContext(Gi)!=null}function Cn(){return Ne(Nl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Gi).location}var Dg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kg(l){M.useContext(Mt).static||M.useLayoutEffect(l)}function Ng(){let{isDataRoute:l}=M.useContext(ln);return l?vv():sv()}function sv(){Ne(Nl(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(kl),{basename:s,navigator:c}=M.useContext(Mt),{matches:u}=M.useContext(ln),{pathname:d}=Cn(),g=JSON.stringify(nf(u)),p=M.useRef(!1);return kg(()=>{p.current=!0}),M.useCallback((b,x={})=>{if(Vt(p.current,Dg),!p.current)return;if(typeof b=="number"){c.go(b);return}let w=af(b,JSON.parse(g),d,x.relative==="path");l==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Tn([s,w.pathname])),(x.replace?c.replace:c.push)(w,x.state,x)},[s,c,g,d,l])}M.createContext(null);function Yi(l,{relative:s}={}){let{matches:c}=M.useContext(ln),{pathname:u}=Cn(),d=JSON.stringify(nf(c));return M.useMemo(()=>af(l,JSON.parse(d),u,s==="path"),[l,d,u,s])}function uv(l,s){return Ug(l,s)}function Ug(l,s,c,u,d){Ne(Nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=M.useContext(Mt),{matches:p}=M.useContext(ln),v=p[p.length-1],b=v?v.params:{},x=v?v.pathname:"/",w=v?v.pathnameBase:"/",_=v&&v.route;{let G=_&&_.path||"";Lg(x,!_||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let U=Cn(),L;if(s){let G=typeof s=="string"?Dl(s):s;Ne(w==="/"||G.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${G.pathname}" was given in the \`location\` prop.`),L=G}else L=U;let q=L.pathname||"/",Y=q;if(w!=="/"){let G=w.replace(/^\//,"").split("/");Y="/"+q.replace(/^\//,"").split("/").slice(G.length).join("/")}let X=wg(l,{pathname:Y});Vt(_||X!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Vt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=mv(X&&X.map(G=>Object.assign({},G,{params:Object.assign({},b,G.params),pathname:Tn([w,g.encodeLocation?g.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?w:Tn([w,g.encodeLocation?g.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),p,c,u,d);return s&&Q?M.createElement(Gi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},Q):Q}function cv(){let l=yv(),s=Fy(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},g={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),c?M.createElement("pre",{style:d},c):null,p)}var fv=M.createElement(cv,null),Hg=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){this.props.onError?this.props.onError(l,s):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const c=rv(l.digest);c&&(l=c)}let s=l!==void 0?M.createElement(ln.Provider,{value:this.props.routeContext},M.createElement(lf.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?M.createElement(dv,{error:l},s):s}};Hg.contextType=ev;var dc=new WeakMap;function dv({children:l,error:s}){let{basename:c}=M.useContext(Mt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let u=iv(s.digest);if(u){let d=dc.get(s);if(d)throw d;let g=Mg(u.location,c);if(Cg&&!dc.get(s))if(g.isExternal||u.reloadDocument)window.location.href=g.absoluteURL||g.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:u.replace}));throw dc.set(s,p),p}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g.absoluteURL||g.to}`})}}return l}function hv({routeContext:l,match:s,children:c}){let u=M.useContext(kl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(ln.Provider,{value:l},c)}function mv(l,s=[],c=null,u=null,d=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let g=l,p=c?.errors;if(p!=null){let w=g.findIndex(_=>_.route.id&&p?.[_.route.id]!==void 0);Ne(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),g=g.slice(0,Math.min(g.length,w+1))}let v=!1,b=-1;if(c)for(let w=0;w<g.length;w++){let _=g[w];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(b=w),_.route.id){let{loaderData:U,errors:L}=c,q=_.route.loader&&!U.hasOwnProperty(_.route.id)&&(!L||L[_.route.id]===void 0);if(_.route.lazy||q){v=!0,b>=0?g=g.slice(0,b+1):g=[g[0]];break}}}let x=c&&u?(w,_)=>{u(w,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Py(c.matches),errorInfo:_})}:void 0;return g.reduceRight((w,_,U)=>{let L,q=!1,Y=null,X=null;c&&(L=p&&_.route.id?p[_.route.id]:void 0,Y=_.route.errorElement||fv,v&&(b<0&&U===0?(Lg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,X=null):b===U&&(q=!0,X=_.route.hydrateFallbackElement||null)));let Q=s.concat(g.slice(0,U+1)),G=()=>{let H;return L?H=Y:q?H=X:_.route.Component?H=M.createElement(_.route.Component,null):_.route.element?H=_.route.element:H=w,M.createElement(hv,{match:_,routeContext:{outlet:w,matches:Q,isDataRoute:c!=null},children:H})};return c&&(_.route.ErrorBoundary||_.route.errorElement||U===0)?M.createElement(Hg,{location:c.location,revalidation:c.revalidation,component:Y,error:L,children:G(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:x}):G()},null)}function rf(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gv(l){let s=M.useContext(kl);return Ne(s,rf(l)),s}function pv(l){let s=M.useContext(No);return Ne(s,rf(l)),s}function bv(l){let s=M.useContext(ln);return Ne(s,rf(l)),s}function of(l){let s=bv(l),c=s.matches[s.matches.length-1];return Ne(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function xv(){return of("useRouteId")}function yv(){let l=M.useContext(lf),s=pv("useRouteError"),c=of("useRouteError");return l!==void 0?l:s.errors?.[c]}function vv(){let{router:l}=gv("useNavigate"),s=of("useNavigate"),c=M.useRef(!1);return kg(()=>{c.current=!0}),M.useCallback(async(d,g={})=>{Vt(c.current,Dg),c.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:s,...g}))},[l,s])}var q0={};function Lg(l,s,c){!s&&!q0[l]&&(q0[l]=!0,Vt(!1,c))}M.memo(Sv);function Sv({routes:l,future:s,state:c,onError:u}){return Ug(l,void 0,c,u,s)}function V0({to:l,replace:s,state:c,relative:u}){Ne(Nl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(Mt);Vt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(ln),{pathname:p}=Cn(),v=Ng(),b=af(l,nf(g),p,u==="path"),x=JSON.stringify(b);return M.useEffect(()=>{v(JSON.parse(x),{replace:s,state:c,relative:u})},[v,x,u,s,c]),null}function wl(l){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jv({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:g=!1,unstable_useTransitions:p}){Ne(!Nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),b=M.useMemo(()=>({basename:v,navigator:d,static:g,unstable_useTransitions:p,future:{}}),[v,d,g,p]);typeof c=="string"&&(c=Dl(c));let{pathname:x="/",search:w="",hash:_="",state:U=null,key:L="default"}=c,q=M.useMemo(()=>{let Y=An(x,v);return Y==null?null:{location:{pathname:Y,search:w,hash:_,state:U,key:L},navigationType:u}},[v,x,w,_,U,L,u]);return Vt(q!=null,`<Router basename="${v}"> is not able to match the URL "${x}${w}${_}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:M.createElement(Mt.Provider,{value:b},M.createElement(Gi.Provider,{children:s,value:q}))}function zv({children:l,location:s}){return uv($c(l),s)}function $c(l,s=[]){let c=[];return M.Children.forEach(l,(u,d)=>{if(!M.isValidElement(u))return;let g=[...s,d];if(u.type===M.Fragment){c.push.apply(c,$c(u.props.children,g));return}Ne(u.type===wl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=$c(u.props.children,g)),c.push(p)}),c}var jo="get",zo="application/x-www-form-urlencoded";function Uo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function _v(l){return Uo(l)&&l.tagName.toLowerCase()==="button"}function wv(l){return Uo(l)&&l.tagName.toLowerCase()==="form"}function Ev(l){return Uo(l)&&l.tagName.toLowerCase()==="input"}function Tv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Av(l,s){return l.button===0&&(!s||s==="_self")&&!Tv(l)}var io=null;function Cv(){if(io===null)try{new FormData(document.createElement("form"),0),io=!1}catch{io=!0}return io}var Mv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hc(l){return l!=null&&!Mv.has(l)?(Vt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zo}"`),null):l}function Rv(l,s){let c,u,d,g,p;if(wv(l)){let v=l.getAttribute("action");u=v?An(v,s):null,c=l.getAttribute("method")||jo,d=hc(l.getAttribute("enctype"))||zo,g=new FormData(l)}else if(_v(l)||Ev(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||v.getAttribute("action");if(u=b?An(b,s):null,c=l.getAttribute("formmethod")||v.getAttribute("method")||jo,d=hc(l.getAttribute("formenctype"))||hc(v.getAttribute("enctype"))||zo,g=new FormData(v,l),!Cv()){let{name:x,type:w,value:_}=l;if(w==="image"){let U=x?`${x}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else x&&g.append(x,_)}}else{if(Uo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=jo,u=null,d=zo,p=l}return g&&d==="text/plain"&&(p=g,g=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:g,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Bv(l,s,c,u){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:s&&An(d.pathname,s)==="/"?d.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function Ov(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Dv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function kv(l,s,c){let u=await Promise.all(l.map(async d=>{let g=s.routes[d.route.id];if(g){let p=await Ov(g,c);return p.links?p.links():[]}return[]}));return Lv(u.flat(1).filter(Dv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function K0(l,s,c,u,d,g){let p=(b,x)=>c[x]?b.route.id!==c[x].route.id:!0,v=(b,x)=>c[x].pathname!==b.pathname||c[x].route.path?.endsWith("*")&&c[x].params["*"]!==b.params["*"];return g==="assets"?s.filter((b,x)=>p(b,x)||v(b,x)):g==="data"?s.filter((b,x)=>{let w=u.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(p(b,x)||v(b,x))return!0;if(b.route.shouldRevalidate){let _=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Nv(l,s,{includeHydrateFallback:c}={}){return Uv(l.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function Uv(l){return[...new Set(l)]}function Hv(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function Lv(l,s){let c=new Set;return new Set(s),l.reduce((u,d)=>{let g=JSON.stringify(Hv(d));return c.has(g)||(c.add(g),u.push({key:g,link:d})),u},[])}function Gg(){let l=M.useContext(kl);return sf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Gv(){let l=M.useContext(No);return sf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var uf=M.createContext(void 0);uf.displayName="FrameworkContext";function Yg(){let l=M.useContext(uf);return sf(l,"You must render this element inside a <HydratedRouter> element"),l}function Yv(l,s){let c=M.useContext(uf),[u,d]=M.useState(!1),[g,p]=M.useState(!1),{onFocus:v,onBlur:b,onMouseEnter:x,onMouseLeave:w,onTouchStart:_}=s,U=M.useRef(null);M.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let Y=Q=>{Q.forEach(G=>{p(G.isIntersecting)})},X=new IntersectionObserver(Y,{threshold:.5});return U.current&&X.observe(U.current),()=>{X.disconnect()}}},[l]),M.useEffect(()=>{if(u){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let L=()=>{d(!0)},q=()=>{d(!1),p(!1)};return c?l!=="intent"?[g,U,{}]:[g,U,{onFocus:Ri(v,L),onBlur:Ri(b,q),onMouseEnter:Ri(x,L),onMouseLeave:Ri(w,q),onTouchStart:Ri(_,L)}]:[!1,U,{}]}function Ri(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function qv({page:l,...s}){let{router:c}=Gg(),u=M.useMemo(()=>wg(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?M.createElement(Kv,{page:l,matches:u,...s}):null}function Vv(l){let{manifest:s,routeModules:c}=Yg(),[u,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return kv(l,s,c).then(p=>{g||d(p)}),()=>{g=!0}},[l,s,c]),u}function Kv({page:l,matches:s,...c}){let u=Cn(),{future:d,manifest:g,routeModules:p}=Yg(),{basename:v}=Gg(),{loaderData:b,matches:x}=Gv(),w=M.useMemo(()=>K0(l,s,x,g,u,"data"),[l,s,x,g,u]),_=M.useMemo(()=>K0(l,s,x,g,u,"assets"),[l,s,x,g,u]),U=M.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let Y=new Set,X=!1;if(s.forEach(G=>{let H=g.routes[G.route.id];!H||!H.hasLoader||(!w.some(F=>F.route.id===G.route.id)&&G.route.id in b&&p[G.route.id]?.shouldRevalidate||H.hasClientLoader?X=!0:Y.add(G.route.id))}),Y.size===0)return[];let Q=Bv(l,v,d.unstable_trailingSlashAwareDataRequests,"data");return X&&Y.size>0&&Q.searchParams.set("_routes",s.filter(G=>Y.has(G.route.id)).map(G=>G.route.id).join(",")),[Q.pathname+Q.search]},[v,d.unstable_trailingSlashAwareDataRequests,b,u,g,w,s,l,p]),L=M.useMemo(()=>Nv(_,g),[_,g]),q=Vv(_);return M.createElement(M.Fragment,null,U.map(Y=>M.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...c})),L.map(Y=>M.createElement("link",{key:Y,rel:"modulepreload",href:Y,...c})),q.map(({key:Y,link:X})=>M.createElement("link",{key:Y,nonce:c.nonce,...X})))}function Qv(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xv&&(window.__reactRouterVersion="7.12.0")}catch{}function Zv({basename:l,children:s,unstable_useTransitions:c,window:u}){let d=M.useRef();d.current==null&&(d.current=Ty({window:u,v5Compat:!0}));let g=d.current,[p,v]=M.useState({action:g.action,location:g.location}),b=M.useCallback(x=>{c===!1?v(x):M.startTransition(()=>v(x))},[c]);return M.useLayoutEffect(()=>g.listen(b),[g,b]),M.createElement(jv,{basename:l,children:s,location:p.location,navigationType:p.action,navigator:g,unstable_useTransitions:c})}var qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ho=M.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:g,replace:p,state:v,target:b,to:x,preventScrollReset:w,viewTransition:_,unstable_defaultShouldRevalidate:U,...L},q){let{basename:Y,unstable_useTransitions:X}=M.useContext(Mt),Q=typeof x=="string"&&qg.test(x),G=Mg(x,Y);x=G.to;let H=ov(x,{relative:d}),[F,P,J]=Yv(u,L),N=Fv(x,{replace:p,state:v,target:b,preventScrollReset:w,relative:d,viewTransition:_,unstable_defaultShouldRevalidate:U,unstable_useTransitions:X});function ie(ue){s&&s(ue),ue.defaultPrevented||N(ue)}let be=M.createElement("a",{...L,...J,href:G.absoluteURL||H,onClick:G.isExternal||g?s:ie,ref:Qv(q,P),target:b,"data-discover":!Q&&c==="render"?"true":void 0});return F&&!Q?M.createElement(M.Fragment,null,be,M.createElement(qv,{page:H})):be});Ho.displayName="Link";var Jv=M.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:g,to:p,viewTransition:v,children:b,...x},w){let _=Yi(p,{relative:x.relative}),U=Cn(),L=M.useContext(No),{navigator:q,basename:Y}=M.useContext(Mt),X=L!=null&&n2(_)&&v===!0,Q=q.encodeLocation?q.encodeLocation(_).pathname:_.pathname,G=U.pathname,H=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;c||(G=G.toLowerCase(),H=H?H.toLowerCase():null,Q=Q.toLowerCase()),H&&Y&&(H=An(H,Y)||H);const F=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let P=G===Q||!d&&G.startsWith(Q)&&G.charAt(F)==="/",J=H!=null&&(H===Q||!d&&H.startsWith(Q)&&H.charAt(Q.length)==="/"),N={isActive:P,isPending:J,isTransitioning:X},ie=P?s:void 0,be;typeof u=="function"?be=u(N):be=[u,P?"active":null,J?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let ue=typeof g=="function"?g(N):g;return M.createElement(Ho,{...x,"aria-current":ie,className:be,ref:w,style:ue,to:p,viewTransition:v},typeof b=="function"?b(N):b)});Jv.displayName="NavLink";var $v=M.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:g,method:p=jo,action:v,onSubmit:b,relative:x,preventScrollReset:w,viewTransition:_,unstable_defaultShouldRevalidate:U,...L},q)=>{let{unstable_useTransitions:Y}=M.useContext(Mt),X=e2(),Q=t2(v,{relative:x}),G=p.toLowerCase()==="get"?"get":"post",H=typeof v=="string"&&qg.test(v),F=P=>{if(b&&b(P),P.defaultPrevented)return;P.preventDefault();let J=P.nativeEvent.submitter,N=J?.getAttribute("formmethod")||p,ie=()=>X(J||P.currentTarget,{fetcherKey:s,method:N,navigate:c,replace:d,state:g,relative:x,preventScrollReset:w,viewTransition:_,unstable_defaultShouldRevalidate:U});Y&&c!==!1?M.startTransition(()=>ie()):ie()};return M.createElement("form",{ref:q,method:G,action:Q,onSubmit:u?b:F,...L,"data-discover":!H&&l==="render"?"true":void 0})});$v.displayName="Form";function Wv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vg(l){let s=M.useContext(kl);return Ne(s,Wv(l)),s}function Fv(l,{target:s,replace:c,state:u,preventScrollReset:d,relative:g,viewTransition:p,unstable_defaultShouldRevalidate:v,unstable_useTransitions:b}={}){let x=Ng(),w=Cn(),_=Yi(l,{relative:g});return M.useCallback(U=>{if(Av(U,s)){U.preventDefault();let L=c!==void 0?c:Li(w)===Li(_),q=()=>x(l,{replace:L,state:u,preventScrollReset:d,relative:g,viewTransition:p,unstable_defaultShouldRevalidate:v});b?M.startTransition(()=>q()):q()}},[w,x,_,c,u,s,l,d,g,p,v,b])}var Pv=0,Iv=()=>`__${String(++Pv)}__`;function e2(){let{router:l}=Vg("useSubmit"),{basename:s}=M.useContext(Mt),c=xv(),u=l.fetch,d=l.navigate;return M.useCallback(async(g,p={})=>{let{action:v,method:b,encType:x,formData:w,body:_}=Rv(g,s);if(p.navigate===!1){let U=p.fetcherKey||Iv();await u(U,c,p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:_,formMethod:p.method||b,formEncType:p.encType||x,flushSync:p.flushSync})}else await d(p.action||v,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:_,formMethod:p.method||b,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,d,s,c])}function t2(l,{relative:s}={}){let{basename:c}=M.useContext(Mt),u=M.useContext(ln);Ne(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),g={...Yi(l||".",{relative:s})},p=Cn();if(l==null){g.search=p.search;let v=new URLSearchParams(g.search),b=v.getAll("index");if(b.some(w=>w==="")){v.delete("index"),b.filter(_=>_).forEach(_=>v.append("index",_));let w=v.toString();g.search=w?`?${w}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:Tn([c,g.pathname])),Li(g)}function n2(l,{relative:s}={}){let c=M.useContext(Bg);Ne(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Vg("useViewTransitionState"),d=Yi(l,{relative:s});if(!c.isTransitioning)return!1;let g=An(c.currentLocation.pathname,u)||c.currentLocation.pathname,p=An(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Co(d.pathname,p)!=null||Co(d.pathname,g)!=null}const a2="/assets/logo-Hzr1jdtX.png",l2=m.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,i2=m.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,r2=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,o2=m.img`
  height: 40px;
  width: auto;
`,s2=m.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,u2=m.div`
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
`,mc=m(Ho)`
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
`,c2=m.button`
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
`;function f2(){const l=Cn(),[s,c]=M.useState(!1);return o.jsx(l2,{children:o.jsxs(i2,{children:[o.jsx(mc,{to:"/",onClick:()=>c(!1),children:o.jsxs(r2,{children:[o.jsx(o2,{src:a2,alt:"SCKW Logo"}),o.jsx(s2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),o.jsxs(c2,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(d=>!d),children:["Menü",o.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),o.jsxs(u2,{id:"mobile-nav",$open:s,children:[o.jsx(mc,{to:"/sponsoring",$active:l.pathname==="/sponsoring"||l.pathname==="/sponsoring-v2",onClick:()=>c(!1),children:"🤝 Sponsoring"}),o.jsx(mc,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),!1]})]})})}const d2=m.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,gc=m.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,h2=m(Ho)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,m2=m.div`
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
`,g2=m.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function cf(){return o.jsx(d2,{children:o.jsxs(m2,{children:[o.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(gc,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),o.jsxs(g2,{"aria-label":"Rechtliches",children:[o.jsx(h2,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),o.jsx(gc,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),o.jsx(gc,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const an=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"15.000 €/Jahr","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"12.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"9.500 €/Jahr","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"5.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"2.000 €/Jahr","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Ab 100 € (Spende)","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"800 €/Jahr","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"150 €/pro Spiel","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"500 €/5 Spiele","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Pro Leistung","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Pro Leistung","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),p2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,b2=m.div`
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
`,x2=m.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,y2=m.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,v2=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,S2=m.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,j2=m.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,z2=m.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,_2=m.li`
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
`,w2=m.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,E2=m.span`
  flex: 1;
`,T2=m.a`
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
`,A2=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,C2=m.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,M2=m.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,R2=m.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,B2=m.a`
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
`,O2="sponsoring@sckw.de";function Cl({packages:l}){const s=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=p=>{const v=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},u=p=>{const v=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),b=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${O2}?subject=${b}&body=${x}`},d=p=>{const v=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},g=l.filter(p=>!p.title.includes("Platz-Renovierung"));return o.jsx(p2,{children:g.map((p,v)=>{const{isFullyBooked:b}=d(p),x=s(p.status),w=x==="vergeben"||b,_=b?"vergeben":x,U=p.keyBenefits||[];return o.jsxs(b2,{isVergeben:w,children:[o.jsxs(x2,{children:[o.jsx(y2,{children:c(p.title)}),o.jsx(v2,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!w&&o.jsx(S2,{children:p.price}),o.jsx(j2,{status:_,children:_==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),w&&p.sponsors&&p.sponsors.length>0?o.jsxs(A2,{children:[p.sponsors[0].image&&o.jsx(C2,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),o.jsx(M2,{children:p.sponsors[0].name}),o.jsxs(R2,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&o.jsx(B2,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):o.jsx(z2,{children:U.map((L,q)=>o.jsxs(_2,{isHighlight:L.highlight,children:[o.jsx(w2,{children:L.icon}),o.jsx(E2,{children:L.text})]},q))}),o.jsx(T2,{href:w?void 0:u(p.title),isVergeben:w,children:w?"Vergeben":"Jetzt anfragen"})]},v)})})}const D2=m.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,k2=m.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,N2=m.button`
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
`,U2=m.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,H2=m.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,L2=m.div`
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
`,G2=m.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Y2=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function q2(){const[l,s]=M.useState([]),c=d=>{s(g=>g.includes(d)?g.filter(p=>p!==d):[...g,d])},u=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(g))};return o.jsx(D2,{children:Y2.map(d=>{const g=l.includes(d.id);return o.jsxs(k2,{children:[o.jsxs(N2,{isOpen:g,onClick:()=>c(d.id),onKeyDown:p=>u(p,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(G2,{children:d.icon}),d.title]}),o.jsx(U2,{isOpen:g,children:"▼"})]}),o.jsx(H2,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(L2,{children:d.content})})]},d.id)})})}const Kg="/assets/cheerleading_0-DQQGXi0R.jpg",Qg="/assets/cheerleading_1-NkLBARmH.jpg",Xg="/assets/cheerleading_2-CrezcZYL.jpg",Zg="/assets/cheerleading_3-GN5rPHNN.jpg",Jg="/assets/1-ClVWb4ei.png",$g="/assets/10-Bwp2eIye.png",Wg="/assets/11-W061sOUI.png",Fg="/assets/12-TjJyzl8L.png",Pg="/assets/13-ChUUCdQQ.png",Ig="/assets/14-BVhdRr98.png",ep="/assets/2-CcfgIQYe.png",tp="/assets/3-DYiPkVd7.png",np="/assets/4-1upoqVoS.png",ap="/assets/5-D0tadXAC.png",lp="/assets/6-NJ4ELm_j.png",ip="/assets/7-BXo4_Bcj.png",rp="/assets/8-BbOqEnj_.png",op="/assets/9-CIK0gi9o.png",sp="/assets/herren_0-BVVgyt1l.jpg",up="/assets/herren_1-B8ywOnNy.jpg",cp="/assets/herren_10-DPVQsg9B.jpg",fp="/assets/herren_11-wfWG62H3.jpg",dp="/assets/herren_12-DEJSN2zG.jpg",hp="/assets/herren_13-F52vdukE.jpg",mp="/assets/herren_14-Cq9hoKfG.jpg",gp="/assets/herren_15-aYIFGauG.jpg",pp="/assets/herren_16-NYI2EaEN.jpg",bp="/assets/herren_17-B_52ysA2.jpg",xp="/assets/herren_18-DbwjVNKJ.jpg",yp="/assets/herren_19-BduD_J85.png",vp="/assets/herren_2--jFuixBF.jpg",Sp="/assets/herren_3-BPz1zlkG.jpg",jp="/assets/herren_4-BZRrQaFr.jpg",zp="/assets/herren_5-D-QrfY2P.jpg",_p="/assets/herren_6-DWQvi6Am.jpg",wp="/assets/herren_7-BXO6B8Bt.jpg",Ep="/assets/herren_8-Cg4rdr7T.jpg",Tp="/assets/herren_9-DoLnTdRG.jpg",Ap="/assets/IMG-team-BGcF1agj.png",Cp="/assets/IMG_5349-CpvIVKhM.jpg",Mp="/assets/IMG_5369-DQ4CSwdg.jpg",Rp="/assets/IMG_5421-BBzniIEN.jpg",Bp="/assets/IMG_5442-D2PgutWB.jpg",Op="/assets/IMG_5952-B9VW6Qie.jpg",Dp="/assets/Unbenann324t-IPGo6eoQ.png",kp="/assets/image0-DDrU5aZn.jpeg",Np="/assets/image11-BNM8hTkT.jpeg",Up="/assets/image8-BUnedp9U.jpeg",V2="/assets/grafhardenberg-Di5cVggE.png",K2="/assets/horta-DydWIGV7.png",Q2="/assets/logans-BgpKwKYA.png",X2="/assets/ricobet-DsVC-eZt.png",Z2="/assets/rothaus-DqkKD9yW.png",J2="/assets/tasty-B2pSa1rE.png",$2="/assets/cabin-window-B83r_CDB.jpg",W2="/assets/outside-9-xz17qL.jpg",F2="/assets/shower-B75caJ-F.jpg",P2="/assets/sitting-area-D7khB3Gw.jpg",I2="/assets/toilet-BpMHYbhh.jpg",eS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Kg,"../assets/gallery/cheerleading/cheerleading_1.jpg":Qg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Xg,"../assets/gallery/cheerleading/cheerleading_3.jpg":Zg,"../assets/gallery/damen/1.png":Jg,"../assets/gallery/damen/10.png":$g,"../assets/gallery/damen/11.png":Wg,"../assets/gallery/damen/12.png":Fg,"../assets/gallery/damen/13.png":Pg,"../assets/gallery/damen/14.png":Ig,"../assets/gallery/damen/2.png":ep,"../assets/gallery/damen/3.png":tp,"../assets/gallery/damen/4.png":np,"../assets/gallery/damen/5.png":ap,"../assets/gallery/damen/6.png":lp,"../assets/gallery/damen/7.png":ip,"../assets/gallery/damen/8.png":rp,"../assets/gallery/damen/9.png":op,"../assets/gallery/herren/herren_0.jpg":sp,"../assets/gallery/herren/herren_1.jpg":up,"../assets/gallery/herren/herren_10.jpg":cp,"../assets/gallery/herren/herren_11.jpg":fp,"../assets/gallery/herren/herren_12.jpg":dp,"../assets/gallery/herren/herren_13.jpg":hp,"../assets/gallery/herren/herren_14.jpg":mp,"../assets/gallery/herren/herren_15.jpg":gp,"../assets/gallery/herren/herren_16.jpg":pp,"../assets/gallery/herren/herren_17.jpg":bp,"../assets/gallery/herren/herren_18.jpg":xp,"../assets/gallery/herren/herren_19.png":yp,"../assets/gallery/herren/herren_2.jpg":vp,"../assets/gallery/herren/herren_3.jpg":Sp,"../assets/gallery/herren/herren_4.jpg":jp,"../assets/gallery/herren/herren_5.jpg":zp,"../assets/gallery/herren/herren_6.jpg":_p,"../assets/gallery/herren/herren_7.jpg":wp,"../assets/gallery/herren/herren_8.jpg":Ep,"../assets/gallery/herren/herren_9.jpg":Tp,"../assets/gallery/jfv/IMG-team.png":Ap,"../assets/gallery/jfv/IMG_5349.jpg":Cp,"../assets/gallery/jfv/IMG_5369.jpg":Mp,"../assets/gallery/jfv/IMG_5421.jpg":Rp,"../assets/gallery/jfv/IMG_5442.jpg":Bp,"../assets/gallery/jfv/IMG_5952.jpg":Op,"../assets/gallery/jfv/Unbenann324t.png":Dp,"../assets/gallery/jfv/image0.jpeg":kp,"../assets/gallery/jfv/image11.jpeg":Np,"../assets/gallery/jfv/image8.jpeg":Up}),tS=Object.assign({"../assets/sponsors/grafhardenberg.png":V2,"../assets/sponsors/horta.png":K2,"../assets/sponsors/logans.png":Q2,"../assets/sponsors/ricobet.png":X2,"../assets/sponsors/rothaus.png":Z2,"../assets/sponsors/tasty.png":J2}),nS=Object.assign({"../assets/renovation/cabin-window.jpg":$2,"../assets/renovation/outside.jpg":W2,"../assets/renovation/shower.jpg":F2,"../assets/renovation/sitting-area.jpg":P2,"../assets/renovation/toilet.jpg":I2}),Hp=l=>l.split("/").pop()?.toLowerCase()||"",aS=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function lS(l){const s=[...l];for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[s[c],s[u]]=[s[u],s[c]]}return s}const Lp=()=>{const l={};Object.entries(eS).forEach(([u,d])=>{const g=aS(u);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(u=>{l[u]=lS(l[u])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(u=>{l[u]&&(s[u]=l[u])}),Object.keys(l).forEach(u=>{c.includes(u.toLowerCase())||(s[u]=l[u])}),s},iS=()=>{const l={};return Object.entries(tS).forEach(([s,c])=>{const u=Hp(s);l[u]=c}),l},Gp=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(nS).forEach(([s,c])=>{const u=Hp(s);u.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):u.includes("outside")||u.includes("cabin-window")?u.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):u.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(u.includes("toilet")||u.includes("shower")||u.includes("wash"))&&(u.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):u.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},En=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Kg,"../assets/gallery/cheerleading/cheerleading_1.jpg":Qg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Xg,"../assets/gallery/cheerleading/cheerleading_3.jpg":Zg,"../assets/gallery/damen/1.png":Jg,"../assets/gallery/damen/10.png":$g,"../assets/gallery/damen/11.png":Wg,"../assets/gallery/damen/12.png":Fg,"../assets/gallery/damen/13.png":Pg,"../assets/gallery/damen/14.png":Ig,"../assets/gallery/damen/2.png":ep,"../assets/gallery/damen/3.png":tp,"../assets/gallery/damen/4.png":np,"../assets/gallery/damen/5.png":ap,"../assets/gallery/damen/6.png":lp,"../assets/gallery/damen/7.png":ip,"../assets/gallery/damen/8.png":rp,"../assets/gallery/damen/9.png":op,"../assets/gallery/herren/herren_0.jpg":sp,"../assets/gallery/herren/herren_1.jpg":up,"../assets/gallery/herren/herren_10.jpg":cp,"../assets/gallery/herren/herren_11.jpg":fp,"../assets/gallery/herren/herren_12.jpg":dp,"../assets/gallery/herren/herren_13.jpg":hp,"../assets/gallery/herren/herren_14.jpg":mp,"../assets/gallery/herren/herren_15.jpg":gp,"../assets/gallery/herren/herren_16.jpg":pp,"../assets/gallery/herren/herren_17.jpg":bp,"../assets/gallery/herren/herren_18.jpg":xp,"../assets/gallery/herren/herren_19.png":yp,"../assets/gallery/herren/herren_2.jpg":vp,"../assets/gallery/herren/herren_3.jpg":Sp,"../assets/gallery/herren/herren_4.jpg":jp,"../assets/gallery/herren/herren_5.jpg":zp,"../assets/gallery/herren/herren_6.jpg":_p,"../assets/gallery/herren/herren_7.jpg":wp,"../assets/gallery/herren/herren_8.jpg":Ep,"../assets/gallery/herren/herren_9.jpg":Tp,"../assets/gallery/jfv/IMG-team.png":Ap,"../assets/gallery/jfv/IMG_5349.jpg":Cp,"../assets/gallery/jfv/IMG_5369.jpg":Mp,"../assets/gallery/jfv/IMG_5421.jpg":Rp,"../assets/gallery/jfv/IMG_5442.jpg":Bp,"../assets/gallery/jfv/IMG_5952.jpg":Op,"../assets/gallery/jfv/Unbenann324t.png":Dp,"../assets/gallery/jfv/image0.jpeg":kp,"../assets/gallery/jfv/image11.jpeg":Np,"../assets/gallery/jfv/image8.jpeg":Up})).find(([u])=>u.includes(l));return c?c[1]:""},ff=(l,s)=>En(`${l}/${l}_${s}.jpg`);Lp(),iS(),Gp();function rS(){const l=Lp(),[s,c]=M.useState(null);return M.useEffect(()=>{if(!s)return;const u=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[s]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([u,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(oS,{children:u.toUpperCase()}),o.jsx(sS,{children:d.map((g,p)=>o.jsx(uS,{src:g,alt:`Bild ${p+1} aus ${u}`,onClick:()=>c({folder:u,idx:p}),style:{cursor:"pointer"}},p))}),s&&s.folder===u&&o.jsx(cS,{onClick:()=>c(null),children:o.jsxs(fS,{onClick:g=>g.stopPropagation(),children:[o.jsx(dS,{src:d[s.idx],alt:`Großansicht aus ${u}`}),o.jsx(hS,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},u))]})}const oS=m.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,sS=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,uS=m.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,cS=m.div`
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
`,fS=m.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,dS=m.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,hS=m.button`
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
`,mS=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,gS=m.div`
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
`,pS=m.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,bS=m.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,xS=m.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,yS=m.div`
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
`,vS=m.a`
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
`;function pc({icon:l,title:s,description:c,packages:u,buttonHref:d,buttonText:g}){return o.jsxs(gS,{children:[o.jsx(pS,{children:l}),o.jsx(bS,{children:s}),o.jsx(xS,{children:c}),o.jsx(yS,{children:u.map((p,v)=>o.jsxs("div",{children:[p,v<u.length-1&&o.jsx("br",{})]},v))}),o.jsx(vS,{href:d,children:g})]})}const SS=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,jS=m.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,zS=m.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,_S=m.p`
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
`;function Yp({headline:l,description:s,contactInfos:c}){const u=d=>{d.preventDefault();const g=d.currentTarget,p=new FormData(g);if(String(p.get("website")||"").trim()!=="")return;const b=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),w=String(p.get("email")||"").trim(),_=String(p.get("phone")||"").trim(),U={};if(b||(U.firstName="Bitte Vornamen angeben"),x||(U.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)||(U.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(_)||(U.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(U).length>0){const L=Object.keys(U)[0],q=g.querySelector(`[name="${L}"]`);q&&q.focus(),alert(Object.values(U).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),g.reset()};return o.jsx(wS,{id:"kontakt",children:o.jsxs(ES,{children:[o.jsx(US,{children:l}),o.jsx(HS,{children:s}),o.jsx(SS,{children:c.map((d,g)=>o.jsxs(jS,{children:[o.jsxs(zS,{children:[d.icon," ",d.title]}),o.jsx(_S,{$isEmail:d.isEmail,children:d.isEmail?o.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},g))}),o.jsxs(TS,{children:[o.jsx(AS,{children:"Kontakt aufnehmen"}),o.jsx(CS,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),o.jsxs(MS,{noValidate:!0,onSubmit:u,children:[o.jsxs(bc,{children:[o.jsxs(ki,{children:[o.jsx("label",{htmlFor:"firstName",children:"Vorname"}),o.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),o.jsxs(ki,{children:[o.jsx("label",{htmlFor:"lastName",children:"Nachname"}),o.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),o.jsxs(bc,{children:[o.jsxs(ki,{children:[o.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),o.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),o.jsxs(ki,{children:[o.jsx("label",{htmlFor:"phone",children:"Telefon"}),o.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),o.jsx(bc,{children:o.jsxs(RS,{children:[o.jsx("label",{htmlFor:"email",children:"E-Mail"}),o.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),o.jsxs(BS,{"aria-hidden":"true",tabIndex:-1,children:[o.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),o.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),o.jsxs(OS,{children:[o.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),o.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",o.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),o.jsxs(DS,{children:[o.jsx(kS,{type:"submit",children:"Absenden"}),o.jsxs(NS,{children:["Alternativ:"," ",o.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const wS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,ES=m.div`
  max-width: 1000px;
  margin: 0 auto;
`,TS=m.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,AS=m.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,CS=m.p`
  margin: 0 0 1rem 0;
  color: #555;
`,MS=m.form`
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
`,bc=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,ki=m.div`
  display: flex;
  flex-direction: column;
`,RS=m(ki)`
  grid-column: 1 / -1;
`,BS=m.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,OS=m.div`
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
`,DS=m.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,kS=m.button`
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
`,NS=m.span`
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
`,US=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,HS=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,LS=m.section`
  background: url("${ff("herren",4)}") center/cover;
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
`,GS=m.h1`
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
`,YS=m.h2`
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
`,Q0=m.a`
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
`,qS=m.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,VS=m.main`
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
`,Bi=m.h2`
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
`,KS=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,QS=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,XS=m.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,ZS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,JS=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,$S=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,X0=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Z0=m.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,J0=m.ul`
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
`,WS=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,FS=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,PS=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,IS=m.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,e5=m.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,t5=m.ul`
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
`,xc=m.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,yc=m.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,vc=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Sc=m.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,jc=m.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,zc=m.div`
  font-size: 0.98rem;
  color: #666;
`,n5=m.div`
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
`,a5=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,l5=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,i5=m.a`
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
`,r5=m.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,o5=m.div`
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
`,s5=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,u5=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,c5=m.a`
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
`,f5=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,d5=m.h3`
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
`,h5=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,m5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,$0=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,W0=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,F0=m.table`
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
`,g5=m.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,p5=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,b5=m.ul`
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
`,x5=m.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,y5=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,v5=m.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,S5=m.a`
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
`;function j5(){return o.jsxs(o.Fragment,{children:[o.jsx(LS,{children:o.jsxs(KS,{children:[o.jsx(GS,{children:"SC Konstanz-Wollmatingen"}),o.jsx(YS,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),o.jsxs(qS,{children:[o.jsx(Q0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),o.jsx(Q0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),o.jsxs(VS,{children:[o.jsx(Bi,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),o.jsx(QS,{children:o.jsx(XS,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),o.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[o.jsx(r5,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),o.jsxs(mS,{role:"region","aria-label":"Sponsoring-Kategorien",children:[o.jsx(pc,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),o.jsx(pc,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),o.jsx(pc,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),o.jsxs("section",{"aria-labelledby":"premium-pakete",children:[o.jsx(Bi,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),o.jsx(Cl,{packages:an.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[o.jsx(Bi,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),o.jsx(Cl,{packages:an.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"starter-pakete",children:[o.jsx(Bi,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),o.jsx(Cl,{packages:an.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),o.jsxs(o5,{children:[o.jsx(s5,{children:"⚽ Ballspende-Beispiel ansehen"}),o.jsx(u5,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),o.jsx(c5,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),o.jsxs(ZS,{children:[o.jsx(JS,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsxs($S,{children:[o.jsxs(X0,{children:[o.jsx(Z0,{children:"📊 Erreichte Reichweite"}),o.jsxs(J0,{children:[o.jsx("li",{children:"15+ Heimspiele pro Saison"}),o.jsx("li",{children:"200+ Zuschauer pro Spiel"}),o.jsx("li",{children:"2.500+ Instagram Follower"}),o.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),o.jsxs(X0,{children:[o.jsx(Z0,{children:"🏆 Sportlicher Erfolg"}),o.jsxs(J0,{children:[o.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),o.jsx("li",{children:"2. Mannschaften pro Abteilung"}),o.jsx("li",{children:"Cheerleading-Team aktiv"}),o.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),o.jsx(Bi,{children:"Zusätzliche Werbemöglichkeiten"}),o.jsxs(WS,{children:[o.jsx(FS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs(PS,{children:[o.jsxs(IS,{children:[o.jsxs(vc,{children:[o.jsx(Sc,{children:"1 Seite (Farbe)"}),o.jsx(jc,{children:"1.000 €"}),o.jsx(zc,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(vc,{children:[o.jsx(Sc,{children:"1/2 Seite (Farbe)"}),o.jsx(jc,{children:"500 €"}),o.jsx(zc,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(vc,{children:[o.jsx(Sc,{children:"1/4 Seite (Farbe)"}),o.jsx(jc,{children:"250 €"}),o.jsx(zc,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(e5,{children:o.jsxs(t5,{children:[o.jsxs(xc,{children:[o.jsx(yc,{}),"15 Ausgaben pro Saison"]}),o.jsxs(xc,{children:[o.jsx(yc,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(xc,{children:[o.jsx(yc,{}),"Digitale Version (Social Media & Website)"]})]})})]}),o.jsxs(n5,{children:[o.jsx(a5,{children:"📖 Aktuelle Ausgabe als Beispiel"}),o.jsx(l5,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),o.jsx(i5,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),o.jsxs(f5,{children:[o.jsx(d5,{children:"Werbeflächen auf dem Vereinsbus"}),o.jsx(h5,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),o.jsxs(m5,{children:[o.jsxs($0,{children:[o.jsx(W0,{children:"Premium-Flächen"}),o.jsxs(F0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche (100×80 cm)"}),o.jsx("td",{children:"Sehr hoch"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentüren (links/rechts)"}),o.jsx("td",{children:"Hoch"}),o.jsx("td",{children:"je 900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Hintere Seitenflächen"}),o.jsx("td",{children:"Mittel-hoch"}),o.jsx("td",{children:"je 600 €"})]})]})]})]}),o.jsxs($0,{children:[o.jsx(W0,{children:"Standard-Flächen"}),o.jsxs(F0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),o.jsx("td",{children:"Mittel"}),o.jsx("td",{children:"400 € je Seite"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Frontstoßstange"}),o.jsx("td",{children:"Gering-mittel"}),o.jsx("td",{children:"250 €"})]})]})]})]})]}),o.jsxs(g5,{children:[o.jsx(p5,{children:"Zusatzoptionen:"}),o.jsxs(b5,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),o.jsxs(x5,{children:[o.jsx(y5,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),o.jsx(v5,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),o.jsx(S5,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),o.jsx(q2,{}),o.jsx(Yp,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),o.jsx(rS,{})]}),o.jsx(cf,{})]})}const z5=m.div`
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
`,_5=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,w5=m.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,E5=m.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,T5=m.div`
  display: grid;
  grid-template-columns: 140px 1fr 100px;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,A5=m.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;
  }
`,C5=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,M5=m.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,R5=m.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,B5=m.div`
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
`,O5=m.div`
  font-size: 1.3rem;
  font-weight: 900;
  color: #e10073;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`,D5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,_c=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,wc=m.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:l})=>l};
  flex-shrink: 0;
`,k5=m.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,qp=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:En("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:En("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:En("herren/herren_16")}],N5=Math.max(...qp.map(l=>l.value));function U5(){return o.jsxs(z5,{children:[o.jsx(_5,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),o.jsx(w5,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),o.jsx(E5,{children:qp.map(l=>o.jsxs(T5,{children:[o.jsx(A5,{src:l.image,alt:l.label}),o.jsxs(C5,{children:[o.jsxs(M5,{children:[l.icon," ",l.label]}),o.jsx(R5,{children:o.jsx(B5,{$percent:l.value/N5*100,$gradient:l.gradient})})]}),o.jsxs(O5,{children:[(l.value/1e3).toFixed(0),"k"]})]},l.label))}),o.jsxs(D5,{children:[o.jsxs(_c,{children:[o.jsx(wc,{$color:"#9ca3af"}),o.jsx("span",{children:"Aktuell (Winterpause)"})]}),o.jsxs(_c,{children:[o.jsx(wc,{$color:"#e10073"}),o.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),o.jsxs(_c,{children:[o.jsx(wc,{$color:"#ff6b9d"}),o.jsx("span",{children:"Prognose kommende Saison"})]})]}),o.jsxs(k5,{children:[o.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const H5=m.div`
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`,L5=m.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`,P0=m.th`
  background: ${l=>l.isVergeben?"#f8f9fa":"#e10073"};
  color: ${l=>l.isVergeben?"#666":"#fff"};
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  border: 1px solid #dee2e6;
  position: relative;

  &:first-child {
    background: #f8f9fa;
    color: #222;
    font-weight: 800;
    text-align: left;
    min-width: 200px;
  }
`,rt=m.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${l=>l.isVergeben?"#f8f9fa":"#fff"};
  color: ${l=>l.isVergeben?"#999":"#222"};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.4;

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
`,G5=m.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,Y5=m.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${l=>l.isVergeben?"#f8f9fa":"#fff"};
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 700;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${l=>!l.isVergeben&&`
    color: #e10073;
  `}

  ${l=>l.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,q5=m.a`
  display: inline-block;
  background: ${l=>l.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s ease;
  pointer-events: ${l=>l.isVergeben?"none":"auto"};
  border: ${l=>l.isVergeben?"2px solid #ccc":"2px solid #e10073"};

  &:hover {
    background: ${l=>l.isVergeben?"#ccc":"#b8005a"};
    border-color: ${l=>l.isVergeben?"#ccc":"#b8005a"};
    transform: ${l=>l.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${l=>l.isVergeben?"none":"0 3px 8px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${l=>l.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }
`,V5=m.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,K5=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`,Q5="sponsoring@sckw.de";function X5({packages:l}){const s=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=p=>{const v=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},u=p=>{const v=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),b=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Q5}?subject=${b}&body=${x}`},d=p=>{const v=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},g=p=>{const v=p.benefits.find(x=>{const w=x.toLowerCase();return w.includes("social media")||w.includes("instagram")});if(!v)return"-";const b=v.toLowerCase();return b.includes("premium")||b.includes("allen")?"ÜBERALL":b.includes("sehr präsent")?"Sehr präsent":b.includes("regelmässig")||b.includes("regelmäßig")?"Regelmäßig":b.includes("prominent")?"Prominent":b.includes("basis")?"Basis":b.includes("post/monat")?"Post/Monat":b.includes("2x")&&b.includes("pro spiel")?"2x/Spiel":b.includes("1x")&&b.includes("pro spiel")?"1x/Spiel":b.includes("erwähnung")?"Erwähnung":"Standard"};return o.jsx(H5,{children:o.jsxs(L5,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(P0,{children:"Paket"}),l.map((p,v)=>{const{isFullyBooked:b}=d(p),w=s(p.status)==="vergeben"||b;return o.jsx(P0,{isVergeben:w,children:o.jsxs(K5,{children:[o.jsx(V5,{children:c(p.title)}),p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()]})},v)})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx(rt,{children:"Preis"}),l.map((p,v)=>{const{isFullyBooked:b}=d(p),w=s(p.status)==="vergeben"||b;return o.jsx(Y5,{isVergeben:w,children:w?"Vergeben":p.price},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Status"}),l.map((p,v)=>{const{isFullyBooked:b}=d(p),x=s(p.status),w=b?"vergeben":x;return o.jsx(rt,{children:o.jsx(G5,{status:w,children:w==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Trikot"}),l.map((p,v)=>{const b=p.benefits.find(x=>x.includes("Trikot"));return o.jsx(rt,{isHighlight:!!b,children:b?b.replace("Trikot","").trim():"-"},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Banner"}),l.map((p,v)=>{const b=p.benefits.find(x=>x.includes("Banner"));return o.jsx(rt,{children:b||"-"},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Stadionmagazin"}),l.map((p,v)=>{const b=p.benefits.find(x=>x.includes("Stadionmagazin"));return o.jsx(rt,{children:b?b.replace("im Stadionmagazin","").trim():"-"},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Social Media"}),l.map((p,v)=>{const b=g(p),x=b==="ÜBERALL"||b==="Sehr präsent";return o.jsx(rt,{isHighlight:x,children:b==="-"?"-":b==="ÜBERALL"?"⭐ ÜBERALL":`✅ ${b}`},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Website"}),l.map((p,v)=>{const b=p.benefits.find(x=>x.includes("Website")||x.includes("Startseite"));return o.jsx(rt,{children:b?"✅ Ja":"-"},v)})]}),o.jsxs("tr",{children:[o.jsx(rt,{children:"Kontakt"}),l.map((p,v)=>{const{isFullyBooked:b}=d(p),w=s(p.status)==="vergeben"||b;return o.jsx(rt,{children:o.jsx(q5,{href:w?void 0:u(p.title),isVergeben:w,children:w?"Vergeben":"Anfragen"})},v)})]})]})]})})}const Z5=m.div`
  margin-top: 2.5rem;
`,J5=m.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,$5=m.button`
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
`,W5=m.div`
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
`,F5=m.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,P5=an.filter(l=>["15.000 €/Jahr","12.000 €/Jahr","9.500 €/Jahr"].includes(l.price)),I5=an.filter(l=>["5.000 €/Jahr","2.000 €/Jahr","800 €/Jahr"].includes(l.price)),ej=an.filter(l=>["150 €/pro Spiel","500 €/5 Spiele"].includes(l.price));function tj(){const[l,s]=M.useState("premium"),c=[{key:"premium",label:"🏆 Premium",packages:P5},{key:"lokal",label:"🏢 Lokal",packages:I5},{key:"starter",label:"🌟 Starter",packages:ej}],u=c.find(d=>d.key===l);return o.jsxs(Z5,{children:[o.jsx(J5,{children:c.map(d=>o.jsx($5,{$active:l===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),o.jsxs(W5,{children:[u&&o.jsx(X5,{packages:u.packages}),o.jsxs(F5,{children:[l==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",l==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",l==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const nj=m.div`
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
`,aj=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,lj=m.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,ij=m.table`
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

  tr:hover td {
    background: #fff6fa;

    &:first-child {
      background: #ffe6f2;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    th,
    td {
      padding: 0.65rem 0.5rem;
    }
  }
`,Zt=m.td`
  font-weight: 700;
  color: #e10073;
`,rj=m.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function oj(){return o.jsxs(nj,{children:[o.jsx(aj,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),o.jsx(lj,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),o.jsxs(ij,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Leistung / Erfolg"}),o.jsx("th",{children:"Starter"}),o.jsx("th",{children:"Premium"}),o.jsx("th",{children:"Kombi (Beispiel)"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Pro Tor"}),o.jsx(Zt,{children:"100 €"}),o.jsx(Zt,{children:"200 €"}),o.jsx(Zt,{children:"3.000 € Fix + 150 €/Tor"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Pro Punkt"}),o.jsx(Zt,{children:"150 €"}),o.jsx(Zt,{children:"250 €"}),o.jsx(Zt,{children:"3.000 € Fix + 200 €/Punkt"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Pro Zu-Null-Spiel"}),o.jsx(Zt,{children:"300 €"}),o.jsx(Zt,{children:"500 €"}),o.jsx(Zt,{children:"3.000 € Fix + 400 €/Zu-Null"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Pro Sieg"}),o.jsx("td",{children:"-"}),o.jsx(Zt,{children:"800 €"}),o.jsx(Zt,{children:"3.000 € Fix + 600 €/Sieg"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Erwartete Kosten/Saison"}),o.jsx("td",{children:"~5.000-8.000 €"}),o.jsx("td",{children:"~12.000-18.000 €"}),o.jsx("td",{children:"~9.000-12.000 €"})]})]})]}),o.jsx(rj,{children:"Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege, 10 Zu-Null-Spiele pro Saison (Landesliga). Bei Aufstieg in die Verbandsliga steigen Erfolgsrate + Kosten."})]})}const sj=m.div`
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
`,uj=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,cj=m.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,fj=m.table`
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

  tr:hover td {
    background: #fff6fa;

    &:first-child {
      background: #ffe6f2;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th,
    td {
      padding: 0.6rem 0.45rem;
    }
  }
`,dj=m.tr`
  td {
    background: #fff6fa !important;
    font-weight: 600;
  }
`,hj=m.div`
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
`,mj=m.div`
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
`;function gj(){return o.jsxs(sj,{children:[o.jsx(uj,{children:"👤 Spielerpatenschaften (diskret)"}),o.jsx(cj,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),o.jsxs(fj,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Merkmal"}),o.jsx("th",{children:"Bronze"}),o.jsx("th",{children:"Silber"}),o.jsx("th",{children:"Gold"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fix-Betrag/Saison"}),o.jsx("td",{children:"1.200 €"}),o.jsx("td",{children:"2.000 €"}),o.jsx("td",{children:"3.000 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Performance-Bonus (optional)"}),o.jsx("td",{children:"-"}),o.jsx("td",{children:"+50 €/Erfolg (max. 30)"}),o.jsx("td",{children:"+100 €/Erfolg (max. 30)"})]}),o.jsxs(dj,{children:[o.jsx("td",{children:"Max. Kosten/Saison"}),o.jsx("td",{children:"1.200 €"}),o.jsx("td",{children:"3.500 €"}),o.jsx("td",{children:"6.000 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Willkommens-Story (mit Foto)"}),o.jsx("td",{children:"✅ Ja"}),o.jsx("td",{children:"✅ Ja"}),o.jsx("td",{children:"✅ Ja"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Erwähnung bei Tor/Assist"}),o.jsx("td",{children:"✅ Immer"}),o.jsx("td",{children:"✅ Immer + dediziert"}),o.jsx("td",{children:"✅ Immer + Premium"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Stories/Monat"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"2-3"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Dedizierte Posts/Saison"}),o.jsx("td",{children:"-"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"2"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Event mit Spieler"}),o.jsx("td",{children:"-"}),o.jsx("td",{children:"-"}),o.jsx("td",{children:"✅ 1x/Jahr"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Website-Präsenz"}),o.jsx("td",{children:"Logo"}),o.jsx("td",{children:"Logo prominent"}),o.jsx("td",{children:"Logo + Spieler-Profil"})]})]})]}),o.jsxs(mj,{children:[o.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),o.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',o.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',o.jsx("em",{children:"[Foto vom Torjubel]"})]}),o.jsxs(hj,{children:[o.jsx("strong",{children:"💡 Diskrete Handhabung:"}),` Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen. Bei der Willkommens-Story gibt's ein gemeinsames Foto - danach wird bei jedem Erfolg Ihr Name erwähnt. `,o.jsx("strong",{children:"Ideal für echte Fans!"})]})]})}const pj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`,bj=m.a`
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
`,xj=m.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
`,yj=m.div`
  font-size: 0.85rem;
  color: #333;
  font-weight: 600;
  line-height: 1.3;
`,vj=m.div`
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
`,Sj=m.div`
  text-align: center;
  padding: 3rem 1.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;function jj(){const l=an.find(d=>d.title.includes("Bandenwerbung")),s=l?.sponsors||[],u=(l?.maxSponsors||30)-s.length;return s.length===0?o.jsx(Sj,{children:"Aktuell noch keine Bandenwerbung-Partner vorhanden. Seien Sie einer der Ersten und sichern Sie sich Ihre Werbefläche!"}):o.jsxs(pj,{children:[s.map((d,g)=>o.jsxs(bj,{href:d.website||"#",target:"_blank",rel:"noopener noreferrer",children:[d.image&&o.jsx(xj,{src:`/sponsors/${d.image}`,alt:d.name}),o.jsx(yj,{children:d.name})]},g)),u>0&&Array.from({length:Math.min(u,6)}).map((d,g)=>o.jsx(vj,{children:"Noch verfügbar"},`placeholder-${g}`))]})}const _n=m.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,El=m.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,ro=m(El)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,ta=m.div`
  text-align: center;
  margin-bottom: 2.5rem;
`,na=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,aa=m.p`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
`,zj=m.section`
  background: #0b0b0d;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3rem 0 2rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,_j=m.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.9);
`,wj=m.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2;
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.45);
`,Ej=m.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 1rem;
`,Tj=m.h1`
  color: white;
  font-size: clamp(2.2rem, 9vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Aj=m.p`
  color: white;
  font-size: clamp(1.05rem, 4vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.6;
  opacity: 0.95;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,Cj=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    max-width: 720px;
  }
`,Mj=m.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,Rj=m.div`
  font-size: clamp(1.2rem, 4vw, 1.6rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`,Bj=m.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Oj=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,I0=m.a`
  display: inline-block;
  background: ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.1)"};
  color: ${({$primary:l})=>l?"#e10073":"white"};
  font-weight: 700;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.3)"};
  min-width: 200px;
  text-align: center;
`,Dj=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,oo=m.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,so=m.div`
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,uo=m.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`,kj=m.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 16px;
  padding: 1.5rem;
  margin: 2rem auto 0;
  max-width: 900px;
  text-align: center;
  color: #444;
  line-height: 1.6;
`,Nj=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ec=m.div`
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
`,Tc=m.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Ac=m.div`
  padding: 1.5rem 1.25rem 2rem;
`,Cc=m.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,Mc=m.p`
  font-size: 0.98rem;
  color: #555;
  line-height: 1.6;
`,co=m.div`
  margin-top: 2.5rem;
`,fo=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: left;
`,ho=m.p`
  font-size: 0.98rem;
  color: #666;
  max-width: 860px;
  margin: 0.75rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
`,Uj=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Rc=m.div`
  background: white;
  border-radius: 14px;
  padding: 1.25rem 1rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 600;
`,Hj=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Bc=m.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,Oc=m.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,Dc=m.div`
  padding: 1.25rem 1rem 1.5rem;
`,kc=m.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,Nc=m.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,eg=m.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,Lj=m.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,tg=m.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,Gj=m.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    text-align: left;
    padding: 0.5rem 0.4rem;
    color: #555;
    font-weight: 700;
    border-bottom: 1px solid #ececec;
  }

  td {
    padding: 0.5rem 0.4rem;
    border-bottom: 1px solid #f2f2f2;
    color: #333;
  }
`,Yj=m.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,qj=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,mo=m.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,go=m.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
`,po=m.p`
  margin: 0;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
`,Vj=[{value:"250.000",label:"Reichweite / 90 Tage"},{value:"32.000",label:"Reichweite / 30 Tage"},{value:"50-80k",label:"Monat im Spielbetrieb"},{value:"500-800k",label:"Saisonreichweite"}],Kj=an.filter(l=>["15.000 €/Jahr","12.000 €/Jahr","9.500 €/Jahr"].includes(l.price)),Qj=an.filter(l=>["5.000 €/Jahr","2.000 €/Jahr","800 €/Jahr"].includes(l.price)),Xj=an.filter(l=>["150 €/pro Spiel","500 €/5 Spiele"].includes(l.price));function Zj(){const l=[En("herren/herren_6"),En("herren/herren_16"),En("herren/herren_5"),En("herren/herren_14")].filter(Boolean),[s,c]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const u=setInterval(()=>{c(d=>(d+1)%l.length)},6e3);return()=>clearInterval(u)},[l.length]),o.jsxs(o.Fragment,{children:[o.jsxs(zj,{children:[l.map((u,d)=>o.jsx(_j,{$bg:u,$active:d===s},d)),o.jsx(wj,{}),o.jsxs(Ej,{children:[o.jsx(Tj,{children:"Sponsoring, das messbar wirkt"}),o.jsxs(Aj,{children:["In der Winterpause erzielen wir bereits"," ",o.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",o.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),o.jsx(Cj,{children:Vj.map(u=>o.jsxs(Mj,{children:[o.jsx(Rj,{children:u.value}),o.jsx(Bj,{children:u.label})]},u.label))}),o.jsxs(Oj,{children:[o.jsx(I0,{href:"#kontakt",$primary:!0,onClick:u=>{u.preventDefault();const d=document.getElementById("kontakt");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),o.jsx(I0,{href:"#pakete",children:"Pakete ansehen"})]})]})]}),o.jsx(ro,{children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Warum sich Sponsoring bei uns lohnt"}),o.jsx(aa,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),o.jsxs(Nj,{children:[o.jsxs(Ec,{children:[o.jsx(Tc,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),o.jsxs(Ac,{children:[o.jsx(Cc,{children:"Sichtbarkeit, die bleibt"}),o.jsx(Mc,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),o.jsxs(Ec,{children:[o.jsx(Tc,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),o.jsxs(Ac,{children:[o.jsx(Cc,{children:"Ihre Kunden sind hier"}),o.jsx(Mc,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),o.jsxs(Ec,{children:[o.jsx(Tc,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),o.jsxs(Ac,{children:[o.jsx(Cc,{children:"Doppelte Wirkung"}),o.jsx(Mc,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),o.jsx(El,{id:"pakete",children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Finden Sie Ihr perfektes Paket"}),o.jsx(aa,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, faire Preise, sofort anfragbar."})]}),o.jsxs(co,{children:[o.jsx(fo,{children:"Premium-Partnerschaften"}),o.jsx(Cl,{packages:Kj})]}),o.jsxs(co,{children:[o.jsx(fo,{children:"Pakete im Vergleich"}),o.jsx(tj,{})]}),o.jsx(oj,{}),o.jsx(gj,{}),o.jsxs(co,{children:[o.jsx(fo,{children:"Lokale Werbemöglichkeiten"}),o.jsx(Cl,{packages:Qj}),o.jsx(ho,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),o.jsxs(co,{children:[o.jsx(fo,{children:"Starter & Spieltag"}),o.jsx(Cl,{packages:Xj})]})]})}),o.jsx(ro,{id:"reichweite",children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"So viele Menschen erreichen Sie"}),o.jsx(aa,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),o.jsxs(Dj,{children:[o.jsxs(oo,{children:[o.jsx(so,{children:"32.000"}),o.jsx(uo,{children:"Reichweite / 30 Tage"})]}),o.jsxs(oo,{children:[o.jsx(so,{children:"250.000"}),o.jsx(uo,{children:"Reichweite / 90 Tage"})]}),o.jsxs(oo,{children:[o.jsx(so,{children:"50-80k"}),o.jsx(uo,{children:"Pro Monat in Saison"})]}),o.jsxs(oo,{children:[o.jsx(so,{children:"500-800k"}),o.jsx(uo,{children:"Saisonreichweite (konservativ)"})]})]}),o.jsxs(kj,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",o.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),o.jsx(El,{children:o.jsx(_n,{children:o.jsx(U5,{})})}),o.jsx(El,{children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Was Sie auf Social Media bekommen"}),o.jsx(aa,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),o.jsxs(Uj,{children:[o.jsx(Rc,{children:"📱 Feed-Posts mit Ihrem Logo"}),o.jsx(Rc,{children:"📸 Stories & Erwähnungen"}),o.jsx(Rc,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),o.jsx(ho,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),o.jsx(ro,{id:"buswerbung",children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Mobile Werbung auf unserem Vereinsbus"}),o.jsx(aa,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),o.jsxs(Lj,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[o.jsxs("div",{style:{background:"#f8f9fa",borderRadius:12,padding:"2rem",marginBottom:"1.5rem",textAlign:"center"},children:[o.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚌"}),o.jsx("div",{style:{color:"#999",fontSize:"0.95rem"},children:"Foto des Vereinsbusses folgt in Kürze"})]}),o.jsx(tg,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),o.jsxs(Gj,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Fläche"}),o.jsx("th",{children:"Größe (ca.)"}),o.jsx("th",{children:"Preis/Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Motorhaube"}),o.jsx("td",{children:"120 x 40 cm"}),o.jsx("td",{children:"900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche groß"}),o.jsx("td",{children:"100 x 80 cm"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitenfläche groß (links)"}),o.jsx("td",{children:"200 x 80 cm"}),o.jsx("td",{children:"900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitenfläche groß (rechts)"}),o.jsx("td",{children:"200 x 80 cm"}),o.jsx("td",{children:"900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentür links"}),o.jsx("td",{children:"80 x 60 cm"}),o.jsx("td",{children:"700 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentür rechts"}),o.jsx("td",{children:"80 x 60 cm"}),o.jsx("td",{children:"700 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (umlaufend)"}),o.jsx("td",{children:"15 cm Höhe"}),o.jsx("td",{children:"500 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Heckstreifen"}),o.jsx("td",{children:"100 x 20 cm"}),o.jsx("td",{children:"400 €"})]})]})]}),o.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[o.jsx(tg,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),o.jsxs(Yj,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"}),o.jsx("li",{children:"Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"})]})]})]}),o.jsx(ho,{children:"Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!"})]})}),o.jsx(El,{children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Ihre Marke in Aktion"}),o.jsx(aa,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),o.jsxs(Hj,{children:[o.jsxs(Bc,{children:[o.jsx(Oc,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),o.jsxs(Dc,{children:[o.jsx(kc,{children:"Stadionmagazin"}),o.jsx(Nc,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),o.jsx(eg,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),o.jsxs(Bc,{children:[o.jsx(Oc,{src:En("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),o.jsxs(Dc,{children:[o.jsx(kc,{children:"Bandenwerbung"}),o.jsx(Nc,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),o.jsxs(Bc,{children:[o.jsx(Oc,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),o.jsxs(Dc,{children:[o.jsx(kc,{children:"Ballspende"}),o.jsx(Nc,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),o.jsx(eg,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),o.jsx(ro,{children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"Diese Unternehmen vertrauen uns bereits"}),o.jsx(aa,{children:"Starke Partner am Spielfeldrand - werden Sie Teil dieser Erfolgsgeschichte!"})]}),o.jsx(jj,{}),o.jsxs(ho,{children:["Noch ",o.jsx("strong",{children:"verfügbare Plätze"})," für Bandenwerbung. Sichern Sie sich jetzt Ihre Werbefläche am Spielfeldrand!"]})]})}),o.jsx(El,{children:o.jsxs(_n,{children:[o.jsxs(ta,{children:[o.jsx(na,{children:"In 4 Schritten zum Sponsoring-Start"}),o.jsx(aa,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),o.jsxs(qj,{children:[o.jsxs(mo,{children:[o.jsx(go,{children:"1. Kontakt"}),o.jsx(po,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),o.jsxs(mo,{children:[o.jsx(go,{children:"2. Bedarf"}),o.jsx(po,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),o.jsxs(mo,{children:[o.jsx(go,{children:"3. Angebot"}),o.jsx(po,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),o.jsxs(mo,{children:[o.jsx(go,{children:"4. Umsetzung"}),o.jsx(po,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),o.jsx(Yp,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`}]}),o.jsx(cf,{})]})}const Jj=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],$j=m.section`
  background: url("${ff("herren",1)}") center/cover;
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
`,Wj=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,Fj=m.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Pj=m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,Ij=m.main`
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
`,e3=m.section`
  margin-bottom: 4rem;
`,t3=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,n3=m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,a3=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,l3=m.div`
  text-align: center;
  margin-bottom: 3rem;
`,i3=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,r3=m.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,o3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,s3=m.div`
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
`,u3=m.div`
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
`,c3=m.div`
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
`,f3=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,d3=m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,h3=m.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,m3=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,g3=m.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,p3=m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,b3=m.button`
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
`,x3=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,y3=m.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,v3=m.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,S3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,pl=m.div`
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
`,ng=m.div`
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
`,bl=m.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,xl=m.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,yl=m.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,vl=m.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,ke=m.li`
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
`,Sl=m.button`
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
`,j3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,z3=m.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,_3=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,w3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Uc=m.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Hc=m.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Lc=m.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Gc=m.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,E3=m.a`
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
`,T3=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,A3=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,C3=m.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,jl=m.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,zl=m.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,_l=m.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function M3(){return o.jsxs(o.Fragment,{children:[o.jsx($j,{children:o.jsxs(Wj,{children:[o.jsx(Fj,{children:"SCKW Jobbörse"}),o.jsx(Pj,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(Ij,{children:[o.jsxs(e3,{children:[o.jsx(t3,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(n3,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(a3,{children:[o.jsxs(l3,{children:[o.jsx(i3,{children:"So könnte es aussehen"}),o.jsx(r3,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(o3,{children:Jj.map(l=>o.jsxs(s3,{children:[l.isExample&&o.jsx(u3,{children:"MUSTER"}),o.jsx(c3,{children:o.jsx(f3,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),o.jsx(d3,{children:l.title}),o.jsx(h3,{children:l.company}),o.jsx(m3,{children:l.tags.map((s,c)=>o.jsx(g3,{children:s},c))}),o.jsx(p3,{children:l.description}),o.jsx(b3,{children:"Mehr erfahren"})]},l.id))})]}),o.jsxs(x3,{children:[o.jsx(y3,{children:"Preise für Stellenausschreibungen"}),o.jsx(v3,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(S3,{children:[o.jsxs(pl,{children:[o.jsx(bl,{children:"Basis"}),o.jsx(xl,{children:"149 €"}),o.jsx(yl,{children:"netto / Anzeige"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(ke,{children:"Firmenlogo und Link"}),o.jsx(ke,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(ke,{children:"Bewerbermanagement"})]}),o.jsx(Sl,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(pl,{className:"popular",children:[o.jsx(ng,{children:"BELIEBT"}),o.jsx(bl,{children:"Standard"}),o.jsx(xl,{children:"229 €"}),o.jsx(yl,{children:"netto / Anzeige"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"Alle Basis-Features"}),o.jsx(ke,{children:"1 Social Media Post"}),o.jsx(ke,{children:"Instagram + Facebook Reichweite"}),o.jsx(ke,{children:"Newsletter-Erwähnung"})]}),o.jsx(Sl,{children:"Standard wählen"})]}),o.jsxs(pl,{children:[o.jsx(bl,{children:"Boosted"}),o.jsx(xl,{children:"349 €"}),o.jsx(yl,{children:"netto / Anzeige"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"Alle Standard-Features"}),o.jsx(ke,{children:"Instagram Story"}),o.jsx(ke,{children:"Stadionmagazin-Erwähnung"}),o.jsx(ke,{children:"Prioritäre Platzierung"})]}),o.jsx(Sl,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(j3,{children:[o.jsxs(pl,{children:[o.jsx(bl,{children:"Job Flat SMALL"}),o.jsx(xl,{children:"799 €"}),o.jsx(yl,{children:"netto / Jahr"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(ke,{children:"6 Social Media Posts"}),o.jsx(ke,{children:"Website-Präsenz"}),o.jsx(ke,{children:"Newsletter-Integration"})]}),o.jsx(Sl,{className:"secondary",children:"Small Flat"})]}),o.jsxs(pl,{className:"popular",children:[o.jsx(ng,{children:"EMPFOHLEN"}),o.jsx(bl,{children:"Job Flat MEDIUM"}),o.jsx(xl,{children:"1.199 €"}),o.jsx(yl,{children:"netto / Jahr"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(ke,{children:"Stadionmagazin-Präsenz"}),o.jsx(ke,{children:"Social Media Posts"}),o.jsx(ke,{children:"Stories & Highlights"})]}),o.jsx(Sl,{children:"Medium Flat"})]}),o.jsxs(pl,{children:[o.jsx(bl,{children:"Job Flat PARTNER"}),o.jsx(xl,{children:"1.499 €"}),o.jsx(yl,{children:"netto / Jahr"}),o.jsxs(vl,{children:[o.jsx(ke,{children:"Unbegrenzte Anzeigen"}),o.jsx(ke,{children:"Erwähnung bei Heimspielen"}),o.jsx(ke,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(ke,{children:"Prioritärer Support"})]}),o.jsx(Sl,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(z3,{children:[o.jsx(_3,{children:"➕ Zusatzoptionen"}),o.jsxs(w3,{children:[o.jsxs(Uc,{children:[o.jsx(Hc,{children:"Social Story"}),o.jsx(Lc,{children:"39 €"}),o.jsx(Gc,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(Uc,{children:[o.jsx(Hc,{children:"Designservice"}),o.jsx(Lc,{children:"59 €"}),o.jsx(Gc,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(Uc,{children:[o.jsx(Hc,{children:"Stadionmagazin"}),o.jsx(Lc,{children:"99 €"}),o.jsx(Gc,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(E3,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(T3,{children:[o.jsx(A3,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(C3,{children:[o.jsxs(jl,{children:[o.jsx(zl,{children:"🏠"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(jl,{children:[o.jsx(zl,{children:"👥"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(jl,{children:[o.jsx(zl,{children:"💰"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(jl,{children:[o.jsx(zl,{children:"📈"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(jl,{children:[o.jsx(zl,{children:"⚡"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(jl,{children:[o.jsx(zl,{children:"🤲"}),o.jsxs(_l,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(cf,{})]})}m.div`
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
`;m.div`
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
`;m.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;m.div`
  margin-bottom: 1.5rem;
`;m.div`
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
`;m.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;m.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`;m.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;m.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;m.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;m.div`
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
`;m.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;m.div`
  flex: 1;
`;m.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;m.span`
  font-weight: 600;
  color: #374151;
`;m.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`;m.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;m.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`;m.button`
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
`;m.div`
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
`;m.section`
  background: url("${ff("herren",18)}") center/cover;
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
`;m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;m.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`;m.main`
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
`;m.section`
  margin-bottom: 4rem;
`;m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`;m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;m.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`;m.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;m.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`;m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`;m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;m.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;m.div`
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
`;m.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;m.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`;m.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;m.div`
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
`;m.div`
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
`;m.div`
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
`;m.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;m.button`
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
`;m.button`
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
`;m.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`;m.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`;m.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`;m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;m.div`
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
`;m.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`;m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;m.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;m.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`;m.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;m.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`;m.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;m.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`;m.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`;m.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;m.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;m.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;m.a`
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
`;m.div`
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
`;m.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;m.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;m.button`
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
`;m.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;m.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;m.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;m.button`
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
`;m.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;Gp();const R3=!1;function B3(){return o.jsxs(Zv,{children:[o.jsx(f2,{}),o.jsxs(zv,{children:[o.jsx(wl,{path:"/",element:o.jsx(V0,{to:"/sponsoring",replace:!0})}),o.jsx(wl,{path:"/sponsoring",element:o.jsx(Zj,{})}),o.jsx(wl,{path:"/sponsoring-v2",element:o.jsx(V0,{to:"/sponsoring",replace:!0})}),o.jsx(wl,{path:"/sponsoring-v1",element:o.jsx(j5,{})}),o.jsx(wl,{path:"/jobs",element:o.jsx(M3,{})}),R3]})]})}const O3={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");jx.createRoot(document.getElementById("root")).render(o.jsx(M.StrictMode,{children:o.jsx(_y,{theme:O3,children:o.jsx(B3,{})})}));
