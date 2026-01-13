function mE(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Qp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pf={exports:{}},Wo={},Nf={exports:{}},yt={};var gv;function gE(){if(gv)return yt;gv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=m&&U[m]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function S(U,G,ge){this.props=U,this.context=G,this.refs=E,this.updater=ge||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,G){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,G,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(U,G,ge){this.props=U,this.context=G,this.refs=E,this.updater=ge||y}var P=R.prototype=new x;P.constructor=R,w(P,S.prototype),P.isPureReactComponent=!0;var N=Array.isArray,C=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(U,G,ge){var de,Le={},Te=null,re=null;if(G!=null)for(de in G.ref!==void 0&&(re=G.ref),G.key!==void 0&&(Te=""+G.key),G)C.call(G,de)&&!F.hasOwnProperty(de)&&(Le[de]=G[de]);var he=arguments.length-2;if(he===1)Le.children=ge;else if(1<he){for(var _e=Array(he),$e=0;$e<he;$e++)_e[$e]=arguments[$e+2];Le.children=_e}if(U&&U.defaultProps)for(de in he=U.defaultProps,he)Le[de]===void 0&&(Le[de]=he[de]);return{$$typeof:n,type:U,key:Te,ref:re,props:Le,_owner:I.current}}function A(U,G){return{$$typeof:n,type:U.type,key:G,ref:U.ref,props:U.props,_owner:U._owner}}function L(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function z(U){var G={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ge){return G[ge]})}var ne=/\/+/g;function j(U,G){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):G.toString(36)}function J(U,G,ge,de,Le){var Te=typeof U;(Te==="undefined"||Te==="boolean")&&(U=null);var re=!1;if(U===null)re=!0;else switch(Te){case"string":case"number":re=!0;break;case"object":switch(U.$$typeof){case n:case e:re=!0}}if(re)return re=U,Le=Le(re),U=de===""?"."+j(re,0):de,N(Le)?(ge="",U!=null&&(ge=U.replace(ne,"$&/")+"/"),J(Le,G,ge,"",function($e){return $e})):Le!=null&&(L(Le)&&(Le=A(Le,ge+(!Le.key||re&&re.key===Le.key?"":(""+Le.key).replace(ne,"$&/")+"/")+U)),G.push(Le)),1;if(re=0,de=de===""?".":de+":",N(U))for(var he=0;he<U.length;he++){Te=U[he];var _e=de+j(Te,he);re+=J(Te,G,ge,_e,Le)}else if(_e=g(U),typeof _e=="function")for(U=_e.call(U),he=0;!(Te=U.next()).done;)Te=Te.value,_e=de+j(Te,he++),re+=J(Te,G,ge,_e,Le);else if(Te==="object")throw G=String(U),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return re}function le(U,G,ge){if(U==null)return U;var de=[],Le=0;return J(U,de,"","",function(Te){return G.call(ge,Te,Le++)}),de}function Q(U){if(U._status===-1){var G=U._result;G=G(),G.then(function(ge){(U._status===0||U._status===-1)&&(U._status=1,U._result=ge)},function(ge){(U._status===0||U._status===-1)&&(U._status=2,U._result=ge)}),U._status===-1&&(U._status=0,U._result=G)}if(U._status===1)return U._result.default;throw U._result}var H={current:null},k={transition:null},ie={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:k,ReactCurrentOwner:I};return yt.Children={map:le,forEach:function(U,G,ge){le(U,function(){G.apply(this,arguments)},ge)},count:function(U){var G=0;return le(U,function(){G++}),G},toArray:function(U){return le(U,function(G){return G})||[]},only:function(U){if(!L(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},yt.Component=S,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=R,yt.StrictMode=r,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,yt.cloneElement=function(U,G,ge){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var de=w({},U.props),Le=U.key,Te=U.ref,re=U._owner;if(G!=null){if(G.ref!==void 0&&(Te=G.ref,re=I.current),G.key!==void 0&&(Le=""+G.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(_e in G)C.call(G,_e)&&!F.hasOwnProperty(_e)&&(de[_e]=G[_e]===void 0&&he!==void 0?he[_e]:G[_e])}var _e=arguments.length-2;if(_e===1)de.children=ge;else if(1<_e){he=Array(_e);for(var $e=0;$e<_e;$e++)he[$e]=arguments[$e+2];de.children=he}return{$$typeof:n,type:U.type,key:Le,ref:Te,props:de,_owner:re}},yt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},yt.createElement=V,yt.createFactory=function(U){var G=V.bind(null,U);return G.type=U,G},yt.createRef=function(){return{current:null}},yt.forwardRef=function(U){return{$$typeof:u,render:U}},yt.isValidElement=L,yt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:Q}},yt.memo=function(U,G){return{$$typeof:h,type:U,compare:G===void 0?null:G}},yt.startTransition=function(U){var G=k.transition;k.transition={};try{U()}finally{k.transition=G}},yt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},yt.useCallback=function(U,G){return H.current.useCallback(U,G)},yt.useContext=function(U){return H.current.useContext(U)},yt.useDebugValue=function(){},yt.useDeferredValue=function(U){return H.current.useDeferredValue(U)},yt.useEffect=function(U,G){return H.current.useEffect(U,G)},yt.useId=function(){return H.current.useId()},yt.useImperativeHandle=function(U,G,ge){return H.current.useImperativeHandle(U,G,ge)},yt.useInsertionEffect=function(U,G){return H.current.useInsertionEffect(U,G)},yt.useLayoutEffect=function(U,G){return H.current.useLayoutEffect(U,G)},yt.useMemo=function(U,G){return H.current.useMemo(U,G)},yt.useReducer=function(U,G,ge){return H.current.useReducer(U,G,ge)},yt.useRef=function(U){return H.current.useRef(U)},yt.useState=function(U){return H.current.useState(U)},yt.useSyncExternalStore=function(U,G,ge){return H.current.useSyncExternalStore(U,G,ge)},yt.useTransition=function(){return H.current.useTransition()},yt.version="18.2.0",yt}var vv;function ku(){return vv||(vv=1,Nf.exports=gE()),Nf.exports}var xv;function vE(){if(xv)return Wo;xv=1;var n=ku(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,m={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)r.call(d,p)&&!o.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:y,props:m,_owner:a.current}}return Wo.Fragment=t,Wo.jsx=c,Wo.jsxs=c,Wo}var yv;function xE(){return yv||(yv=1,Pf.exports=vE()),Pf.exports}var M=xE(),$=ku();const Zy=Qp($),yE=mE({__proto__:null,default:Zy},[$]);var jc={},Lf={exports:{}},ri={},Df={exports:{}},If={};var _v;function _E(){return _v||(_v=1,(function(n){function e(k,ie){var U=k.length;k.push(ie);e:for(;0<U;){var G=U-1>>>1,ge=k[G];if(0<a(ge,ie))k[G]=ie,k[U]=ge,U=G;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ie=k[0],U=k.pop();if(U!==ie){k[0]=U;e:for(var G=0,ge=k.length,de=ge>>>1;G<de;){var Le=2*(G+1)-1,Te=k[Le],re=Le+1,he=k[re];if(0>a(Te,U))re<ge&&0>a(he,Te)?(k[G]=he,k[re]=U,G=re):(k[G]=Te,k[Le]=U,G=Le);else if(re<ge&&0>a(he,U))k[G]=he,k[re]=U,G=re;else break e}}return ie}function a(k,ie){var U=k.sortIndex-ie.sortIndex;return U!==0?U:k.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,m=null,g=3,y=!1,w=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var ie=t(h);ie!==null;){if(ie.callback===null)r(h);else if(ie.startTime<=k)r(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function N(k){if(E=!1,P(k),!w)if(t(d)!==null)w=!0,Q(C);else{var ie=t(h);ie!==null&&H(N,ie.startTime-k)}}function C(k,ie){w=!1,E&&(E=!1,x(V),V=-1),y=!0;var U=g;try{for(P(ie),m=t(d);m!==null&&(!(m.expirationTime>ie)||k&&!z());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var ge=G(m.expirationTime<=ie);ie=n.unstable_now(),typeof ge=="function"?m.callback=ge:m===t(d)&&r(d),P(ie)}else r(d);m=t(d)}if(m!==null)var de=!0;else{var Le=t(h);Le!==null&&H(N,Le.startTime-ie),de=!1}return de}finally{m=null,g=U,y=!1}}var I=!1,F=null,V=-1,A=5,L=-1;function z(){return!(n.unstable_now()-L<A)}function ne(){if(F!==null){var k=n.unstable_now();L=k;var ie=!0;try{ie=F(!0,k)}finally{ie?j():(I=!1,F=null)}}else I=!1}var j;if(typeof R=="function")j=function(){R(ne)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,le=J.port2;J.port1.onmessage=ne,j=function(){le.postMessage(null)}}else j=function(){S(ne,0)};function Q(k){F=k,I||(I=!0,j())}function H(k,ie){V=S(function(){k(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){w||y||(w=!0,Q(C))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(k){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var U=g;g=ie;try{return k()}finally{g=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,ie){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var U=g;g=k;try{return ie()}finally{g=U}},n.unstable_scheduleCallback=function(k,ie,U){var G=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?G+U:G):U=G,k){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=U+ge,k={id:p++,callback:ie,priorityLevel:k,startTime:U,expirationTime:ge,sortIndex:-1},U>G?(k.sortIndex=U,e(h,k),t(d)===null&&k===t(h)&&(E?(x(V),V=-1):E=!0,H(N,U-G))):(k.sortIndex=ge,e(d,k),w||y||(w=!0,Q(C))),k},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(k){var ie=g;return function(){var U=g;g=ie;try{return k.apply(this,arguments)}finally{g=U}}}})(If)),If}var Sv;function SE(){return Sv||(Sv=1,Df.exports=_E()),Df.exports}var Mv;function ME(){if(Mv)return ri;Mv=1;var n=ku(),e=SE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function o(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(a[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return d.call(m,i)?!0:d.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function y(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function w(i,s,l,f){if(s===null||typeof s>"u"||y(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,l,f,v,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,R);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,R);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,R);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,f){var v=S.hasOwnProperty(s)?S[s]:null;(v!==null?v.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(w(s,l,v,f)&&(l=null),f||v===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):v.mustUseProperty?i[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,f=v.attributeNamespace,l===null?i.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var N=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),z=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),k=Symbol.iterator;function ie(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var U=Object.assign,G;function ge(i){if(G===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);G=s&&s[1]||""}return`
`+G+i}var de=!1;function Le(i,s){if(!i||de)return"";de=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ce){var f=ce}Reflect.construct(i,[],s)}else{try{s.call()}catch(ce){f=ce}i.call(s.prototype)}else{try{throw Error()}catch(ce){f=ce}i()}}catch(ce){if(ce&&f&&typeof ce.stack=="string"){for(var v=ce.stack.split(`
`),_=f.stack.split(`
`),b=v.length-1,B=_.length-1;1<=b&&0<=B&&v[b]!==_[B];)B--;for(;1<=b&&0<=B;b--,B--)if(v[b]!==_[B]){if(b!==1||B!==1)do if(b--,B--,0>B||v[b]!==_[B]){var W=`
`+v[b].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=b&&0<=B);break}}}finally{de=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ge(i):""}function Te(i){switch(i.tag){case 5:return ge(i.type);case 16:return ge("Lazy");case 13:return ge("Suspense");case 19:return ge("SuspenseList");case 0:case 2:case 15:return i=Le(i.type,!1),i;case 11:return i=Le(i.type.render,!1),i;case 1:return i=Le(i.type,!0),i;default:return""}}function re(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case I:return"Portal";case A:return"Profiler";case V:return"StrictMode";case j:return"Suspense";case J:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case L:return(i._context.displayName||"Context")+".Provider";case ne:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case le:return s=i.displayName||null,s!==null?s:re(i.type)||"Memo";case Q:s=i._payload,i=i._init;try{return re(i(s))}catch{}}return null}function he(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(s);case 8:return s===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function $e(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ze(i){var s=$e(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return v.call(this)},set:function(b){f=""+b,_.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ft(i){i._valueTracker||(i._valueTracker=ze(i))}function Pt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=$e(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function pt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Qe(i,s){var l=s.checked;return U({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function mt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=_e(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function lt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function kt(i,s){lt(i,s);var l=_e(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Xt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Xt(i,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function X(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Xt(i,s,l){(s!=="number"||pt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var _t=Array.isArray;function Et(i,s,l,f){if(i=i.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<i.length;l++)v=s.hasOwnProperty("$"+i[l].value),i[l].selected!==v&&(i[l].selected=v),v&&f&&(i[l].defaultSelected=!0)}else{for(l=""+_e(l),s=null,v=0;v<i.length;v++){if(i[v].value===l){i[v].selected=!0,f&&(i[v].defaultSelected=!0);return}s!==null||i[v].disabled||(s=i[v])}s!==null&&(s.selected=!0)}}function Ye(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function O(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(_t(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:_e(l)}}function T(i,s){var l=_e(s.value),f=_e(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function K(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Ze=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,v){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,v)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(i){st.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),je[s]=je[i]})});function we(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||je.hasOwnProperty(i)&&je[i]?(""+s).trim():s+"px"}function Ne(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=we(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,v):i[l]=v}}var We=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(i,s){if(s){if(We[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Re(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function Y(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ie=null,Ee=null,Ue=null;function Se(i){if(i=Po(i)){if(typeof Ie!="function")throw Error(t(280));var s=i.stateNode;s&&(s=ic(s),Ie(i.stateNode,i.type,s))}}function me(i){Ee?Ue?Ue.push(i):Ue=[i]:Ee=i}function Pe(){if(Ee){var i=Ee,s=Ue;if(Ue=Ee=null,Se(i),s)for(i=0;i<s.length;i++)Se(s[i])}}function at(i,s){return i(s)}function Ft(){}var Tt=!1;function oi(i,s,l){if(Tt)return i(s,l);Tt=!0;try{return at(i,s,l)}finally{Tt=!1,(Ee!==null||Ue!==null)&&(Ft(),Pe())}}function Gn(i,s){var l=i.stateNode;if(l===null)return null;var f=ic(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var lo=!1;if(u)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){lo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{lo=!1}function co(i,s,l,f,v,_,b,B,W){var ce=Array.prototype.slice.call(arguments,3);try{s.apply(l,ce)}catch(ye){this.onError(ye)}}var hs=!1,ps=null,ms=!1,Ai=null,uo={onError:function(i){hs=!0,ps=i}};function Fl(i,s,l,f,v,_,b,B,W){hs=!1,ps=null,co.apply(uo,arguments)}function Ol(i,s,l,f,v,_,b,B,W){if(Fl.apply(this,arguments),hs){if(hs){var ce=ps;hs=!1,ps=null}else throw Error(t(198));ms||(ms=!0,Ai=ce)}}function mi(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fo(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function gs(i){if(mi(i)!==i)throw Error(t(188))}function kl(i){var s=i.alternate;if(!s){if(s=mi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var v=l.return;if(v===null)break;var _=v.alternate;if(_===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===_.child){for(_=v.child;_;){if(_===l)return gs(v),i;if(_===f)return gs(v),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=_;else{for(var b=!1,B=v.child;B;){if(B===l){b=!0,l=v,f=_;break}if(B===f){b=!0,f=v,l=_;break}B=B.sibling}if(!b){for(B=_.child;B;){if(B===l){b=!0,l=_,f=v;break}if(B===f){b=!0,f=_,l=v;break}B=B.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ho(i){return i=kl(i),i!==null?Bl(i):null}function Bl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Bl(i);if(s!==null)return s;i=i.sibling}return null}var Vl=e.unstable_scheduleCallback,zl=e.unstable_cancelCallback,Ju=e.unstable_shouldYield,Qu=e.unstable_requestPaint,Zt=e.unstable_now,D=e.unstable_getCurrentPriorityLevel,Z=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,oe=e.unstable_NormalPriority,te=e.unstable_LowPriority,De=e.unstable_IdlePriority,Oe=null,Ce=null;function Ge(i){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Oe,i,void 0,(i.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:gt,rt=Math.log,et=Math.LN2;function gt(i){return i>>>=0,i===0?32:31-(rt(i)/et|0)|0}var bt=64,Vt=4194304;function Bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Nt(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,v=i.suspendedLanes,_=i.pingedLanes,b=l&268435455;if(b!==0){var B=b&~v;B!==0?f=Bt(B):(_&=b,_!==0&&(f=Bt(_)))}else b=l&~v,b!==0?f=Bt(b):_!==0&&(f=Bt(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&v)===0&&(v=f&-f,_=s&-s,v>=_||v===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Be(s),v=1<<l,f|=i[l],s&=~v;return f}function tt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,v=i.expirationTimes,_=i.pendingLanes;0<_;){var b=31-Be(_),B=1<<b,W=v[b];W===-1?((B&l)===0||(B&f)!==0)&&(v[b]=tt(B,s)):W<=s&&(i.expiredLanes|=B),_&=~B}}function St(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nn(){var i=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),i}function ji(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function un(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Be(s),i[s]=l}function vs(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var v=31-Be(l),_=1<<v;s[v]=0,f[v]=-1,i[v]=-1,l&=~_}}function Ut(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Be(l),v=1<<f;v&s|i[f]&s&&(i[f]|=s),l&=~v}}var ut=0;function Wn(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var xn,yn,$s,Hi,Zm,ed=!1,jl=[],Nr=null,Lr=null,Dr=null,po=new Map,mo=new Map,Ir=[],OM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jm(i,s){switch(i){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":po.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(s.pointerId)}}function go(i,s,l,f,v,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[v]},s!==null&&(s=Po(s),s!==null&&yn(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),i)}function kM(i,s,l,f,v){switch(s){case"focusin":return Nr=go(Nr,i,s,l,f,v),!0;case"dragenter":return Lr=go(Lr,i,s,l,f,v),!0;case"mouseover":return Dr=go(Dr,i,s,l,f,v),!0;case"pointerover":var _=v.pointerId;return po.set(_,go(po.get(_)||null,i,s,l,f,v)),!0;case"gotpointercapture":return _=v.pointerId,mo.set(_,go(mo.get(_)||null,i,s,l,f,v)),!0}return!1}function Qm(i){var s=xs(i.target);if(s!==null){var l=mi(s);if(l!==null){if(s=l.tag,s===13){if(s=fo(l),s!==null){i.blockedOn=s,Zm(i.priority,function(){$s(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Hl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=nd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);dt=f,l.target.dispatchEvent(f),dt=null}else return s=Po(l),s!==null&&yn(s),i.blockedOn=l,!1;s.shift()}return!0}function eg(i,s,l){Hl(i)&&l.delete(s)}function BM(){ed=!1,Nr!==null&&Hl(Nr)&&(Nr=null),Lr!==null&&Hl(Lr)&&(Lr=null),Dr!==null&&Hl(Dr)&&(Dr=null),po.forEach(eg),mo.forEach(eg)}function vo(i,s){i.blockedOn===s&&(i.blockedOn=null,ed||(ed=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,BM)))}function xo(i){function s(v){return vo(v,i)}if(0<jl.length){vo(jl[0],i);for(var l=1;l<jl.length;l++){var f=jl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Nr!==null&&vo(Nr,i),Lr!==null&&vo(Lr,i),Dr!==null&&vo(Dr,i),po.forEach(s),mo.forEach(s),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Qm(l),l.blockedOn===null&&Ir.shift()}var Ks=N.ReactCurrentBatchConfig,Gl=!0;function VM(i,s,l,f){var v=ut,_=Ks.transition;Ks.transition=null;try{ut=1,td(i,s,l,f)}finally{ut=v,Ks.transition=_}}function zM(i,s,l,f){var v=ut,_=Ks.transition;Ks.transition=null;try{ut=4,td(i,s,l,f)}finally{ut=v,Ks.transition=_}}function td(i,s,l,f){if(Gl){var v=nd(i,s,l,f);if(v===null)yd(i,s,f,Wl,l),Jm(i,f);else if(kM(v,i,s,l,f))f.stopPropagation();else if(Jm(i,f),s&4&&-1<OM.indexOf(i)){for(;v!==null;){var _=Po(v);if(_!==null&&xn(_),_=nd(i,s,l,f),_===null&&yd(i,s,f,Wl,l),_===v)break;v=_}v!==null&&f.stopPropagation()}else yd(i,s,f,null,l)}}var Wl=null;function nd(i,s,l,f){if(Wl=null,i=Y(f),i=xs(i),i!==null)if(s=mi(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fo(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Wl=i,null}function tg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D()){case Z:return 1;case ue:return 4;case oe:case te:return 16;case De:return 536870912;default:return 16}default:return 16}}var Ur=null,id=null,Xl=null;function ng(){if(Xl)return Xl;var i,s=id,l=s.length,f,v="value"in Ur?Ur.value:Ur.textContent,_=v.length;for(i=0;i<l&&s[i]===v[i];i++);var b=l-i;for(f=1;f<=b&&s[l-f]===v[_-f];f++);return Xl=v.slice(i,1<f?1-f:void 0)}function Yl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ql(){return!0}function ig(){return!1}function li(i){function s(l,f,v,_,b){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(_):_[B]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ql:ig,this.isPropagationStopped=ig,this}return U(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),s}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=li(Zs),yo=U({},Zs,{view:0,detail:0}),jM=li(yo),sd,ad,_o,$l=U({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==_o&&(_o&&i.type==="mousemove"?(sd=i.screenX-_o.screenX,ad=i.screenY-_o.screenY):ad=sd=0,_o=i),sd)},movementY:function(i){return"movementY"in i?i.movementY:ad}}),rg=li($l),HM=U({},$l,{dataTransfer:0}),GM=li(HM),WM=U({},yo,{relatedTarget:0}),od=li(WM),XM=U({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),YM=li(XM),qM=U({},Zs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),$M=li(qM),KM=U({},Zs,{data:0}),sg=li(KM),ZM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ew(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=QM[i])?!!s[i]:!1}function ld(){return ew}var tw=U({},yo,{key:function(i){if(i.key){var s=ZM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Yl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?JM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(i){return i.type==="keypress"?Yl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Yl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),nw=li(tw),iw=U({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=li(iw),rw=U({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),sw=li(rw),aw=U({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ow=li(aw),lw=U({},$l,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),cw=li(lw),uw=[9,13,27,32],cd=u&&"CompositionEvent"in window,So=null;u&&"documentMode"in document&&(So=document.documentMode);var dw=u&&"TextEvent"in window&&!So,og=u&&(!cd||So&&8<So&&11>=So),lg=" ",cg=!1;function ug(i,s){switch(i){case"keyup":return uw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Js=!1;function fw(i,s){switch(i){case"compositionend":return dg(s);case"keypress":return s.which!==32?null:(cg=!0,lg);case"textInput":return i=s.data,i===lg&&cg?null:i;default:return null}}function hw(i,s){if(Js)return i==="compositionend"||!cd&&ug(i,s)?(i=ng(),Xl=id=Ur=null,Js=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return og&&s.locale!=="ko"?null:s.data;default:return null}}var pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!pw[i.type]:s==="textarea"}function hg(i,s,l,f){me(f),s=ec(s,"onChange"),0<s.length&&(l=new rd("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Mo=null,wo=null;function mw(i){Ng(i,0)}function Kl(i){var s=ia(i);if(Pt(s))return i}function gw(i,s){if(i==="change")return s}var pg=!1;if(u){var ud;if(u){var dd="oninput"in document;if(!dd){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),dd=typeof mg.oninput=="function"}ud=dd}else ud=!1;pg=ud&&(!document.documentMode||9<document.documentMode)}function gg(){Mo&&(Mo.detachEvent("onpropertychange",vg),wo=Mo=null)}function vg(i){if(i.propertyName==="value"&&Kl(wo)){var s=[];hg(s,wo,i,Y(i)),oi(mw,s)}}function vw(i,s,l){i==="focusin"?(gg(),Mo=s,wo=l,Mo.attachEvent("onpropertychange",vg)):i==="focusout"&&gg()}function xw(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Kl(wo)}function yw(i,s){if(i==="click")return Kl(s)}function _w(i,s){if(i==="input"||i==="change")return Kl(s)}function Sw(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ci=typeof Object.is=="function"?Object.is:Sw;function Eo(i,s){if(Ci(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(s,v)||!Ci(i[v],s[v]))return!1}return!0}function xg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function yg(i,s){var l=xg(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xg(l)}}function _g(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?_g(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Sg(){for(var i=window,s=pt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=pt(i.document)}return s}function fd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Mw(i){var s=Sg(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&_g(l.ownerDocument.documentElement,l)){if(f!==null&&fd(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var v=l.textContent.length,_=Math.min(f.start,v);f=f.end===void 0?_:Math.min(f.end,v),!i.extend&&_>f&&(v=f,f=_,_=v),v=yg(l,_);var b=yg(l,f);v&&b&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var ww=u&&"documentMode"in document&&11>=document.documentMode,Qs=null,hd=null,To=null,pd=!1;function Mg(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pd||Qs==null||Qs!==pt(f)||(f=Qs,"selectionStart"in f&&fd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),To&&Eo(To,f)||(To=f,f=ec(hd,"onSelect"),0<f.length&&(s=new rd("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Qs)))}function Zl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ea={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},md={},wg={};u&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Jl(i){if(md[i])return md[i];if(!ea[i])return i;var s=ea[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in wg)return md[i]=s[l];return i}var Eg=Jl("animationend"),Tg=Jl("animationiteration"),bg=Jl("animationstart"),Ag=Jl("transitionend"),Cg=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(i,s){Cg.set(i,s),o(s,[i])}for(var gd=0;gd<Rg.length;gd++){var vd=Rg[gd],Ew=vd.toLowerCase(),Tw=vd[0].toUpperCase()+vd.slice(1);Fr(Ew,"on"+Tw)}Fr(Eg,"onAnimationEnd"),Fr(Tg,"onAnimationIteration"),Fr(bg,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Ag,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Pg(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Ol(f,s,void 0,i),i.currentTarget=null}function Ng(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],v=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var b=f.length-1;0<=b;b--){var B=f[b],W=B.instance,ce=B.currentTarget;if(B=B.listener,W!==_&&v.isPropagationStopped())break e;Pg(v,B,ce),_=W}else for(b=0;b<f.length;b++){if(B=f[b],W=B.instance,ce=B.currentTarget,B=B.listener,W!==_&&v.isPropagationStopped())break e;Pg(v,B,ce),_=W}}}if(ms)throw i=Ai,ms=!1,Ai=null,i}function jt(i,s){var l=s[Td];l===void 0&&(l=s[Td]=new Set);var f=i+"__bubble";l.has(f)||(Lg(s,i,2,!1),l.add(f))}function xd(i,s,l){var f=0;s&&(f|=4),Lg(l,i,f,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ao(i){if(!i[Ql]){i[Ql]=!0,r.forEach(function(l){l!=="selectionchange"&&(bw.has(l)||xd(l,!1,i),xd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,xd("selectionchange",!1,s))}}function Lg(i,s,l,f){switch(tg(s)){case 1:var v=VM;break;case 4:v=zM;break;default:v=td}l=v.bind(null,s,l,i),v=void 0,!lo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),f?v!==void 0?i.addEventListener(s,l,{capture:!0,passive:v}):i.addEventListener(s,l,!0):v!==void 0?i.addEventListener(s,l,{passive:v}):i.addEventListener(s,l,!1)}function yd(i,s,l,f,v){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var B=f.stateNode.containerInfo;if(B===v||B.nodeType===8&&B.parentNode===v)break;if(b===4)for(b=f.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===v||W.nodeType===8&&W.parentNode===v))return;b=b.return}for(;B!==null;){if(b=xs(B),b===null)return;if(W=b.tag,W===5||W===6){f=_=b;continue e}B=B.parentNode}}f=f.return}oi(function(){var ce=_,ye=Y(l),Me=[];e:{var xe=Cg.get(i);if(xe!==void 0){var ke=rd,Xe=i;switch(i){case"keypress":if(Yl(l)===0)break e;case"keydown":case"keyup":ke=nw;break;case"focusin":Xe="focus",ke=od;break;case"focusout":Xe="blur",ke=od;break;case"beforeblur":case"afterblur":ke=od;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=GM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=sw;break;case Eg:case Tg:case bg:ke=YM;break;case Ag:ke=ow;break;case"scroll":ke=jM;break;case"wheel":ke=cw;break;case"copy":case"cut":case"paste":ke=$M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=ag}var Ke=(s&4)!==0,an=!Ke&&i==="scroll",ee=Ke?xe!==null?xe+"Capture":null:xe;Ke=[];for(var q=ce,se;q!==null;){se=q;var be=se.stateNode;if(se.tag===5&&be!==null&&(se=be,ee!==null&&(be=Gn(q,ee),be!=null&&Ke.push(Co(q,be,se)))),an)break;q=q.return}0<Ke.length&&(xe=new ke(xe,Xe,null,l,ye),Me.push({event:xe,listeners:Ke}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",xe&&l!==dt&&(Xe=l.relatedTarget||l.fromElement)&&(xs(Xe)||Xe[or]))break e;if((ke||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(Xe=l.relatedTarget||l.toElement,ke=ce,Xe=Xe?xs(Xe):null,Xe!==null&&(an=mi(Xe),Xe!==an||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=ce),ke!==Xe)){if(Ke=rg,be="onMouseLeave",ee="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=ag,be="onPointerLeave",ee="onPointerEnter",q="pointer"),an=ke==null?xe:ia(ke),se=Xe==null?xe:ia(Xe),xe=new Ke(be,q+"leave",ke,l,ye),xe.target=an,xe.relatedTarget=se,be=null,xs(ye)===ce&&(Ke=new Ke(ee,q+"enter",Xe,l,ye),Ke.target=se,Ke.relatedTarget=an,be=Ke),an=be,ke&&Xe)t:{for(Ke=ke,ee=Xe,q=0,se=Ke;se;se=ta(se))q++;for(se=0,be=ee;be;be=ta(be))se++;for(;0<q-se;)Ke=ta(Ke),q--;for(;0<se-q;)ee=ta(ee),se--;for(;q--;){if(Ke===ee||ee!==null&&Ke===ee.alternate)break t;Ke=ta(Ke),ee=ta(ee)}Ke=null}else Ke=null;ke!==null&&Dg(Me,xe,ke,Ke,!1),Xe!==null&&an!==null&&Dg(Me,an,Xe,Ke,!0)}}e:{if(xe=ce?ia(ce):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var Je=gw;else if(fg(xe))if(pg)Je=_w;else{Je=xw;var nt=vw}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Je=yw);if(Je&&(Je=Je(i,ce))){hg(Me,Je,l,ye);break e}nt&&nt(i,xe,ce),i==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&Xt(xe,"number",xe.value)}switch(nt=ce?ia(ce):window,i){case"focusin":(fg(nt)||nt.contentEditable==="true")&&(Qs=nt,hd=ce,To=null);break;case"focusout":To=hd=Qs=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,Mg(Me,l,ye);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":Mg(Me,l,ye)}var it;if(cd)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Js?ug(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(og&&l.locale!=="ko"&&(Js||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Js&&(it=ng()):(Ur=ye,id="value"in Ur?Ur.value:Ur.textContent,Js=!0)),nt=ec(ce,ot),0<nt.length&&(ot=new sg(ot,i,null,l,ye),Me.push({event:ot,listeners:nt}),it?ot.data=it:(it=dg(l),it!==null&&(ot.data=it)))),(it=dw?fw(i,l):hw(i,l))&&(ce=ec(ce,"onBeforeInput"),0<ce.length&&(ye=new sg("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:ce}),ye.data=it))}Ng(Me,s)})}function Co(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ec(i,s){for(var l=s+"Capture",f=[];i!==null;){var v=i,_=v.stateNode;v.tag===5&&_!==null&&(v=_,_=Gn(i,l),_!=null&&f.unshift(Co(i,_,v)),_=Gn(i,s),_!=null&&f.push(Co(i,_,v))),i=i.return}return f}function ta(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Dg(i,s,l,f,v){for(var _=s._reactName,b=[];l!==null&&l!==f;){var B=l,W=B.alternate,ce=B.stateNode;if(W!==null&&W===f)break;B.tag===5&&ce!==null&&(B=ce,v?(W=Gn(l,_),W!=null&&b.unshift(Co(l,W,B))):v||(W=Gn(l,_),W!=null&&b.push(Co(l,W,B)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var Aw=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function Ig(i){return(typeof i=="string"?i:""+i).replace(Aw,`
`).replace(Cw,"")}function tc(i,s,l){if(s=Ig(s),Ig(i)!==s&&l)throw Error(t(425))}function nc(){}var _d=null,Sd=null;function Md(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(i){return Ug.resolve(null).then(i).catch(Nw)}:wd;function Nw(i){setTimeout(function(){throw i})}function Ed(i,s){var l=s,f=0;do{var v=l.nextSibling;if(i.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){i.removeChild(v),xo(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);xo(s)}function Or(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Fg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var na=Math.random().toString(36).slice(2),Gi="__reactFiber$"+na,Ro="__reactProps$"+na,or="__reactContainer$"+na,Td="__reactEvents$"+na,Lw="__reactListeners$"+na,Dw="__reactHandles$"+na;function xs(i){var s=i[Gi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[or]||l[Gi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Fg(i);i!==null;){if(l=i[Gi])return l;i=Fg(i)}return s}i=l,l=i.parentNode}return null}function Po(i){return i=i[Gi]||i[or],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ia(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function ic(i){return i[Ro]||null}var bd=[],ra=-1;function kr(i){return{current:i}}function Ht(i){0>ra||(i.current=bd[ra],bd[ra]=null,ra--)}function zt(i,s){ra++,bd[ra]=i.current,i.current=s}var Br={},Ln=kr(Br),Qn=kr(!1),ys=Br;function sa(i,s){var l=i.type.contextTypes;if(!l)return Br;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var v={},_;for(_ in l)v[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=v),v}function ei(i){return i=i.childContextTypes,i!=null}function rc(){Ht(Qn),Ht(Ln)}function Og(i,s,l){if(Ln.current!==Br)throw Error(t(168));zt(Ln,s),zt(Qn,l)}function kg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in s))throw Error(t(108,he(i)||"Unknown",v));return U({},l,f)}function sc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Br,ys=Ln.current,zt(Ln,i),zt(Qn,Qn.current),!0}function Bg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=kg(i,s,ys),f.__reactInternalMemoizedMergedChildContext=i,Ht(Qn),Ht(Ln),zt(Ln,i)):Ht(Qn),zt(Qn,l)}var lr=null,ac=!1,Ad=!1;function Vg(i){lr===null?lr=[i]:lr.push(i)}function Iw(i){ac=!0,Vg(i)}function Vr(){if(!Ad&&lr!==null){Ad=!0;var i=0,s=ut;try{var l=lr;for(ut=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}lr=null,ac=!1}catch(v){throw lr!==null&&(lr=lr.slice(i+1)),Vl(Z,Vr),v}finally{ut=s,Ad=!1}}return null}var aa=[],oa=0,oc=null,lc=0,gi=[],vi=0,_s=null,cr=1,ur="";function Ss(i,s){aa[oa++]=lc,aa[oa++]=oc,oc=i,lc=s}function zg(i,s,l){gi[vi++]=cr,gi[vi++]=ur,gi[vi++]=_s,_s=i;var f=cr;i=ur;var v=32-Be(f)-1;f&=~(1<<v),l+=1;var _=32-Be(s)+v;if(30<_){var b=v-v%5;_=(f&(1<<b)-1).toString(32),f>>=b,v-=b,cr=1<<32-Be(s)+v|l<<v|f,ur=_+i}else cr=1<<_|l<<v|f,ur=i}function Cd(i){i.return!==null&&(Ss(i,1),zg(i,1,0))}function Rd(i){for(;i===oc;)oc=aa[--oa],aa[oa]=null,lc=aa[--oa],aa[oa]=null;for(;i===_s;)_s=gi[--vi],gi[vi]=null,ur=gi[--vi],gi[vi]=null,cr=gi[--vi],gi[vi]=null}var ci=null,ui=null,Yt=!1,Ri=null;function jg(i,s){var l=Si(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Hg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ci=i,ui=Or(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ci=i,ui=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=_s!==null?{id:cr,overflow:ur}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Si(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ci=i,ui=null,!0):!1;default:return!1}}function Pd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Nd(i){if(Yt){var s=ui;if(s){var l=s;if(!Hg(i,s)){if(Pd(i))throw Error(t(418));s=Or(l.nextSibling);var f=ci;s&&Hg(i,s)?jg(f,l):(i.flags=i.flags&-4097|2,Yt=!1,ci=i)}}else{if(Pd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,ci=i}}}function Gg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ci=i}function cc(i){if(i!==ci)return!1;if(!Yt)return Gg(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Md(i.type,i.memoizedProps)),s&&(s=ui)){if(Pd(i))throw Wg(),Error(t(418));for(;s;)jg(i,s),s=Or(s.nextSibling)}if(Gg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ui=Or(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ui=null}}else ui=ci?Or(i.stateNode.nextSibling):null;return!0}function Wg(){for(var i=ui;i;)i=Or(i.nextSibling)}function la(){ui=ci=null,Yt=!1}function Ld(i){Ri===null?Ri=[i]:Ri.push(i)}var Uw=N.ReactCurrentBatchConfig;function Pi(i,s){if(i&&i.defaultProps){s=U({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}var uc=kr(null),dc=null,ca=null,Dd=null;function Id(){Dd=ca=dc=null}function Ud(i){var s=uc.current;Ht(uc),i._currentValue=s}function Fd(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function ua(i,s){dc=i,Dd=ca=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ti=!0),i.firstContext=null)}function xi(i){var s=i._currentValue;if(Dd!==i)if(i={context:i,memoizedValue:s,next:null},ca===null){if(dc===null)throw Error(t(308));ca=i,dc.dependencies={lanes:0,firstContext:i}}else ca=ca.next=i;return s}var Ms=null;function Od(i){Ms===null?Ms=[i]:Ms.push(i)}function Xg(i,s,l,f){var v=s.interleaved;return v===null?(l.next=l,Od(s)):(l.next=v.next,v.next=l),s.interleaved=l,dr(i,f)}function dr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var zr=!1;function kd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function fr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function jr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(At&2)!==0){var v=f.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s,dr(i,l)}return v=f.interleaved,v===null?(s.next=s,Od(f)):(s.next=v.next,v.next=s),f.interleaved=s,dr(i,l)}function fc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Ut(i,l)}}function qg(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?v=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?v=_=s:_=_.next=s}else v=_=s;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function hc(i,s,l,f){var v=i.updateQueue;zr=!1;var _=v.firstBaseUpdate,b=v.lastBaseUpdate,B=v.shared.pending;if(B!==null){v.shared.pending=null;var W=B,ce=W.next;W.next=null,b===null?_=ce:b.next=ce,b=W;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==b&&(B===null?ye.firstBaseUpdate=ce:B.next=ce,ye.lastBaseUpdate=W))}if(_!==null){var Me=v.baseState;b=0,ye=ce=W=null,B=_;do{var xe=B.lane,ke=B.eventTime;if((f&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Xe=i,Ke=B;switch(xe=s,ke=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){Me=Xe.call(ke,Me,xe);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,xe=typeof Xe=="function"?Xe.call(ke,Me,xe):Xe,xe==null)break e;Me=U({},Me,xe);break e;case 2:zr=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,xe=v.effects,xe===null?v.effects=[B]:xe.push(B))}else ke={eventTime:ke,lane:xe,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(ce=ye=ke,W=Me):ye=ye.next=ke,b|=xe;if(B=B.next,B===null){if(B=v.shared.pending,B===null)break;xe=B,B=xe.next,xe.next=null,v.lastBaseUpdate=xe,v.shared.pending=null}}while(!0);if(ye===null&&(W=Me),v.baseState=W,v.firstBaseUpdate=ce,v.lastBaseUpdate=ye,s=v.shared.interleaved,s!==null){v=s;do b|=v.lane,v=v.next;while(v!==s)}else _===null&&(v.shared.lanes=0);Ts|=b,i.lanes=b,i.memoizedState=Me}}function $g(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var Kg=new n.Component().refs;function Bd(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:U({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pc={isMounted:function(i){return(i=i._reactInternals)?mi(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Yn(),v=Xr(i),_=fr(f,v);_.payload=s,l!=null&&(_.callback=l),s=jr(i,_,v),s!==null&&(Di(s,i,v,f),fc(s,i,v))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Yn(),v=Xr(i),_=fr(f,v);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=jr(i,_,v),s!==null&&(Di(s,i,v,f),fc(s,i,v))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Yn(),f=Xr(i),v=fr(l,f);v.tag=2,s!=null&&(v.callback=s),s=jr(i,v,f),s!==null&&(Di(s,i,f,l),fc(s,i,f))}};function Zg(i,s,l,f,v,_,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,b):s.prototype&&s.prototype.isPureReactComponent?!Eo(l,f)||!Eo(v,_):!0}function Jg(i,s,l){var f=!1,v=Br,_=s.contextType;return typeof _=="object"&&_!==null?_=xi(_):(v=ei(s)?ys:Ln.current,f=s.contextTypes,_=(f=f!=null)?sa(i,v):Br),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=_),s}function Qg(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&pc.enqueueReplaceState(s,s.state,null)}function Vd(i,s,l,f){var v=i.stateNode;v.props=l,v.state=i.memoizedState,v.refs=Kg,kd(i);var _=s.contextType;typeof _=="object"&&_!==null?v.context=xi(_):(_=ei(s)?ys:Ln.current,v.context=sa(i,_)),v.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Bd(i,s,_,l),v.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&pc.enqueueReplaceState(v,v.state,null),hc(i,l,v,f),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function No(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var v=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var B=v.refs;B===Kg&&(B=v.refs={}),b===null?delete B[_]:B[_]=b},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function mc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function e0(i){var s=i._init;return s(i._payload)}function t0(i){function s(ee,q){if(i){var se=ee.deletions;se===null?(ee.deletions=[q],ee.flags|=16):se.push(q)}}function l(ee,q){if(!i)return null;for(;q!==null;)s(ee,q),q=q.sibling;return null}function f(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function v(ee,q){return ee=qr(ee,q),ee.index=0,ee.sibling=null,ee}function _(ee,q,se){return ee.index=se,i?(se=ee.alternate,se!==null?(se=se.index,se<q?(ee.flags|=2,q):se):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function b(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function B(ee,q,se,be){return q===null||q.tag!==6?(q=Ef(se,ee.mode,be),q.return=ee,q):(q=v(q,se),q.return=ee,q)}function W(ee,q,se,be){var Je=se.type;return Je===F?ye(ee,q,se.props.children,be,se.key):q!==null&&(q.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Q&&e0(Je)===q.type)?(be=v(q,se.props),be.ref=No(ee,q,se),be.return=ee,be):(be=Ic(se.type,se.key,se.props,null,ee.mode,be),be.ref=No(ee,q,se),be.return=ee,be)}function ce(ee,q,se,be){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=Tf(se,ee.mode,be),q.return=ee,q):(q=v(q,se.children||[]),q.return=ee,q)}function ye(ee,q,se,be,Je){return q===null||q.tag!==7?(q=Rs(se,ee.mode,be,Je),q.return=ee,q):(q=v(q,se),q.return=ee,q)}function Me(ee,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Ef(""+q,ee.mode,se),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case C:return se=Ic(q.type,q.key,q.props,null,ee.mode,se),se.ref=No(ee,null,q),se.return=ee,se;case I:return q=Tf(q,ee.mode,se),q.return=ee,q;case Q:var be=q._init;return Me(ee,be(q._payload),se)}if(_t(q)||ie(q))return q=Rs(q,ee.mode,se,null),q.return=ee,q;mc(ee,q)}return null}function xe(ee,q,se,be){var Je=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:B(ee,q,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return se.key===Je?W(ee,q,se,be):null;case I:return se.key===Je?ce(ee,q,se,be):null;case Q:return Je=se._init,xe(ee,q,Je(se._payload),be)}if(_t(se)||ie(se))return Je!==null?null:ye(ee,q,se,be,null);mc(ee,se)}return null}function ke(ee,q,se,be,Je){if(typeof be=="string"&&be!==""||typeof be=="number")return ee=ee.get(se)||null,B(q,ee,""+be,Je);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case C:return ee=ee.get(be.key===null?se:be.key)||null,W(q,ee,be,Je);case I:return ee=ee.get(be.key===null?se:be.key)||null,ce(q,ee,be,Je);case Q:var nt=be._init;return ke(ee,q,se,nt(be._payload),Je)}if(_t(be)||ie(be))return ee=ee.get(se)||null,ye(q,ee,be,Je,null);mc(q,be)}return null}function Xe(ee,q,se,be){for(var Je=null,nt=null,it=q,ot=q=0,Mn=null;it!==null&&ot<se.length;ot++){it.index>ot?(Mn=it,it=null):Mn=it.sibling;var Lt=xe(ee,it,se[ot],be);if(Lt===null){it===null&&(it=Mn);break}i&&it&&Lt.alternate===null&&s(ee,it),q=_(Lt,q,ot),nt===null?Je=Lt:nt.sibling=Lt,nt=Lt,it=Mn}if(ot===se.length)return l(ee,it),Yt&&Ss(ee,ot),Je;if(it===null){for(;ot<se.length;ot++)it=Me(ee,se[ot],be),it!==null&&(q=_(it,q,ot),nt===null?Je=it:nt.sibling=it,nt=it);return Yt&&Ss(ee,ot),Je}for(it=f(ee,it);ot<se.length;ot++)Mn=ke(it,ee,ot,se[ot],be),Mn!==null&&(i&&Mn.alternate!==null&&it.delete(Mn.key===null?ot:Mn.key),q=_(Mn,q,ot),nt===null?Je=Mn:nt.sibling=Mn,nt=Mn);return i&&it.forEach(function($r){return s(ee,$r)}),Yt&&Ss(ee,ot),Je}function Ke(ee,q,se,be){var Je=ie(se);if(typeof Je!="function")throw Error(t(150));if(se=Je.call(se),se==null)throw Error(t(151));for(var nt=Je=null,it=q,ot=q=0,Mn=null,Lt=se.next();it!==null&&!Lt.done;ot++,Lt=se.next()){it.index>ot?(Mn=it,it=null):Mn=it.sibling;var $r=xe(ee,it,Lt.value,be);if($r===null){it===null&&(it=Mn);break}i&&it&&$r.alternate===null&&s(ee,it),q=_($r,q,ot),nt===null?Je=$r:nt.sibling=$r,nt=$r,it=Mn}if(Lt.done)return l(ee,it),Yt&&Ss(ee,ot),Je;if(it===null){for(;!Lt.done;ot++,Lt=se.next())Lt=Me(ee,Lt.value,be),Lt!==null&&(q=_(Lt,q,ot),nt===null?Je=Lt:nt.sibling=Lt,nt=Lt);return Yt&&Ss(ee,ot),Je}for(it=f(ee,it);!Lt.done;ot++,Lt=se.next())Lt=ke(it,ee,ot,Lt.value,be),Lt!==null&&(i&&Lt.alternate!==null&&it.delete(Lt.key===null?ot:Lt.key),q=_(Lt,q,ot),nt===null?Je=Lt:nt.sibling=Lt,nt=Lt);return i&&it.forEach(function(pE){return s(ee,pE)}),Yt&&Ss(ee,ot),Je}function an(ee,q,se,be){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case C:e:{for(var Je=se.key,nt=q;nt!==null;){if(nt.key===Je){if(Je=se.type,Je===F){if(nt.tag===7){l(ee,nt.sibling),q=v(nt,se.props.children),q.return=ee,ee=q;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Q&&e0(Je)===nt.type){l(ee,nt.sibling),q=v(nt,se.props),q.ref=No(ee,nt,se),q.return=ee,ee=q;break e}l(ee,nt);break}else s(ee,nt);nt=nt.sibling}se.type===F?(q=Rs(se.props.children,ee.mode,be,se.key),q.return=ee,ee=q):(be=Ic(se.type,se.key,se.props,null,ee.mode,be),be.ref=No(ee,q,se),be.return=ee,ee=be)}return b(ee);case I:e:{for(nt=se.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){l(ee,q.sibling),q=v(q,se.children||[]),q.return=ee,ee=q;break e}else{l(ee,q);break}else s(ee,q);q=q.sibling}q=Tf(se,ee.mode,be),q.return=ee,ee=q}return b(ee);case Q:return nt=se._init,an(ee,q,nt(se._payload),be)}if(_t(se))return Xe(ee,q,se,be);if(ie(se))return Ke(ee,q,se,be);mc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,q!==null&&q.tag===6?(l(ee,q.sibling),q=v(q,se),q.return=ee,ee=q):(l(ee,q),q=Ef(se,ee.mode,be),q.return=ee,ee=q),b(ee)):l(ee,q)}return an}var da=t0(!0),n0=t0(!1),Lo={},Wi=kr(Lo),Do=kr(Lo),Io=kr(Lo);function ws(i){if(i===Lo)throw Error(t(174));return i}function zd(i,s){switch(zt(Io,s),zt(Do,i),zt(Wi,Lo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ve(s,i)}Ht(Wi),zt(Wi,s)}function fa(){Ht(Wi),Ht(Do),Ht(Io)}function i0(i){ws(Io.current);var s=ws(Wi.current),l=ve(s,i.type);s!==l&&(zt(Do,i),zt(Wi,l))}function jd(i){Do.current===i&&(Ht(Wi),Ht(Do))}var Jt=kr(0);function gc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Hd=[];function Gd(){for(var i=0;i<Hd.length;i++)Hd[i]._workInProgressVersionPrimary=null;Hd.length=0}var vc=N.ReactCurrentDispatcher,Wd=N.ReactCurrentBatchConfig,Es=0,Qt=null,dn=null,_n=null,xc=!1,Uo=!1,Fo=0,Fw=0;function Dn(){throw Error(t(321))}function Xd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ci(i[l],s[l]))return!1;return!0}function Yd(i,s,l,f,v,_){if(Es=_,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vc.current=i===null||i.memoizedState===null?Vw:zw,i=l(f,v),Uo){_=0;do{if(Uo=!1,Fo=0,25<=_)throw Error(t(301));_+=1,_n=dn=null,s.updateQueue=null,vc.current=jw,i=l(f,v)}while(Uo)}if(vc.current=Sc,s=dn!==null&&dn.next!==null,Es=0,_n=dn=Qt=null,xc=!1,s)throw Error(t(300));return i}function qd(){var i=Fo!==0;return Fo=0,i}function Xi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Qt.memoizedState=_n=i:_n=_n.next=i,_n}function yi(){if(dn===null){var i=Qt.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var s=_n===null?Qt.memoizedState:_n.next;if(s!==null)_n=s,dn=i;else{if(i===null)throw Error(t(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},_n===null?Qt.memoizedState=_n=i:_n=_n.next=i}return _n}function Oo(i,s){return typeof s=="function"?s(i):s}function $d(i){var s=yi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=dn,v=f.baseQueue,_=l.pending;if(_!==null){if(v!==null){var b=v.next;v.next=_.next,_.next=b}f.baseQueue=v=_,l.pending=null}if(v!==null){_=v.next,f=f.baseState;var B=b=null,W=null,ce=_;do{var ye=ce.lane;if((Es&ye)===ye)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),f=ce.hasEagerState?ce.eagerState:i(f,ce.action);else{var Me={lane:ye,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(B=W=Me,b=f):W=W.next=Me,Qt.lanes|=ye,Ts|=ye}ce=ce.next}while(ce!==null&&ce!==_);W===null?b=f:W.next=B,Ci(f,s.memoizedState)||(ti=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=W,l.lastRenderedState=f}if(i=l.interleaved,i!==null){v=i;do _=v.lane,Qt.lanes|=_,Ts|=_,v=v.next;while(v!==i)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Kd(i){var s=yi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,v=l.pending,_=s.memoizedState;if(v!==null){l.pending=null;var b=v=v.next;do _=i(_,b.action),b=b.next;while(b!==v);Ci(_,s.memoizedState)||(ti=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function r0(){}function s0(i,s){var l=Qt,f=yi(),v=s(),_=!Ci(f.memoizedState,v);if(_&&(f.memoizedState=v,ti=!0),f=f.queue,Zd(l0.bind(null,l,f,i),[i]),f.getSnapshot!==s||_||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,ko(9,o0.bind(null,l,f,v,s),void 0,null),Sn===null)throw Error(t(349));(Es&30)!==0||a0(l,s,v)}return v}function a0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function o0(i,s,l,f){s.value=l,s.getSnapshot=f,c0(s)&&u0(i)}function l0(i,s,l){return l(function(){c0(s)&&u0(i)})}function c0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ci(i,l)}catch{return!0}}function u0(i){var s=dr(i,1);s!==null&&Di(s,i,1,-1)}function d0(i){var s=Xi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:i},s.queue=i,i=i.dispatch=Bw.bind(null,Qt,i),[s.memoizedState,i]}function ko(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function f0(){return yi().memoizedState}function yc(i,s,l,f){var v=Xi();Qt.flags|=i,v.memoizedState=ko(1|s,l,void 0,f===void 0?null:f)}function _c(i,s,l,f){var v=yi();f=f===void 0?null:f;var _=void 0;if(dn!==null){var b=dn.memoizedState;if(_=b.destroy,f!==null&&Xd(f,b.deps)){v.memoizedState=ko(s,l,_,f);return}}Qt.flags|=i,v.memoizedState=ko(1|s,l,_,f)}function h0(i,s){return yc(8390656,8,i,s)}function Zd(i,s){return _c(2048,8,i,s)}function p0(i,s){return _c(4,2,i,s)}function m0(i,s){return _c(4,4,i,s)}function g0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function v0(i,s,l){return l=l!=null?l.concat([i]):null,_c(4,4,g0.bind(null,s,i),l)}function Jd(){}function x0(i,s){var l=yi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Xd(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function y0(i,s){var l=yi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Xd(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function _0(i,s,l){return(Es&21)===0?(i.baseState&&(i.baseState=!1,ti=!0),i.memoizedState=l):(Ci(l,s)||(l=Nn(),Qt.lanes|=l,Ts|=l,i.baseState=!0),s)}function Ow(i,s){var l=ut;ut=l!==0&&4>l?l:4,i(!0);var f=Wd.transition;Wd.transition={};try{i(!1),s()}finally{ut=l,Wd.transition=f}}function S0(){return yi().memoizedState}function kw(i,s,l){var f=Xr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},M0(i))w0(s,l);else if(l=Xg(i,s,l,f),l!==null){var v=Yn();Di(l,i,f,v),E0(l,s,f)}}function Bw(i,s,l){var f=Xr(i),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(M0(i))w0(s,v);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,B=_(b,l);if(v.hasEagerState=!0,v.eagerState=B,Ci(B,b)){var W=s.interleaved;W===null?(v.next=v,Od(s)):(v.next=W.next,W.next=v),s.interleaved=v;return}}catch{}l=Xg(i,s,v,f),l!==null&&(v=Yn(),Di(l,i,f,v),E0(l,s,f))}}function M0(i){var s=i.alternate;return i===Qt||s!==null&&s===Qt}function w0(i,s){Uo=xc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function E0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Ut(i,l)}}var Sc={readContext:xi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Vw={readContext:xi,useCallback:function(i,s){return Xi().memoizedState=[i,s===void 0?null:s],i},useContext:xi,useEffect:h0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,yc(4194308,4,g0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return yc(4194308,4,i,s)},useInsertionEffect:function(i,s){return yc(4,2,i,s)},useMemo:function(i,s){var l=Xi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Xi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=kw.bind(null,Qt,i),[f.memoizedState,i]},useRef:function(i){var s=Xi();return i={current:i},s.memoizedState=i},useState:d0,useDebugValue:Jd,useDeferredValue:function(i){return Xi().memoizedState=i},useTransition:function(){var i=d0(!1),s=i[0];return i=Ow.bind(null,i[1]),Xi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Qt,v=Xi();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Sn===null)throw Error(t(349));(Es&30)!==0||a0(f,s,l)}v.memoizedState=l;var _={value:l,getSnapshot:s};return v.queue=_,h0(l0.bind(null,f,_,i),[i]),f.flags|=2048,ko(9,o0.bind(null,f,_,l,s),void 0,null),l},useId:function(){var i=Xi(),s=Sn.identifierPrefix;if(Yt){var l=ur,f=cr;l=(f&~(1<<32-Be(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Fo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Fw++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},zw={readContext:xi,useCallback:x0,useContext:xi,useEffect:Zd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:y0,useReducer:$d,useRef:f0,useState:function(){return $d(Oo)},useDebugValue:Jd,useDeferredValue:function(i){var s=yi();return _0(s,dn.memoizedState,i)},useTransition:function(){var i=$d(Oo)[0],s=yi().memoizedState;return[i,s]},useMutableSource:r0,useSyncExternalStore:s0,useId:S0,unstable_isNewReconciler:!1},jw={readContext:xi,useCallback:x0,useContext:xi,useEffect:Zd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:y0,useReducer:Kd,useRef:f0,useState:function(){return Kd(Oo)},useDebugValue:Jd,useDeferredValue:function(i){var s=yi();return dn===null?s.memoizedState=i:_0(s,dn.memoizedState,i)},useTransition:function(){var i=Kd(Oo)[0],s=yi().memoizedState;return[i,s]},useMutableSource:r0,useSyncExternalStore:s0,useId:S0,unstable_isNewReconciler:!1};function ha(i,s){try{var l="",f=s;do l+=Te(f),f=f.return;while(f);var v=l}catch(_){v=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:v,digest:null}}function Qd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function ef(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Hw=typeof WeakMap=="function"?WeakMap:Map;function T0(i,s,l){l=fr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Cc||(Cc=!0,gf=f),ef(i,s)},l}function b0(i,s,l){l=fr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var v=s.value;l.payload=function(){return f(v)},l.callback=function(){ef(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){ef(i,s),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function A0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new Hw;var v=new Set;f.set(s,v)}else v=f.get(s),v===void 0&&(v=new Set,f.set(s,v));v.has(l)||(v.add(l),i=iE.bind(null,i,s,l),s.then(i,i))}function C0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function R0(i,s,l,f,v){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=fr(-1,1),s.tag=2,jr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var Gw=N.ReactCurrentOwner,ti=!1;function Xn(i,s,l,f){s.child=i===null?n0(s,null,l,f):da(s,i.child,l,f)}function P0(i,s,l,f,v){l=l.render;var _=s.ref;return ua(s,v),f=Yd(i,s,l,f,_,v),l=qd(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,hr(i,s,v)):(Yt&&l&&Cd(s),s.flags|=1,Xn(i,s,f,v),s.child)}function N0(i,s,l,f,v){if(i===null){var _=l.type;return typeof _=="function"&&!wf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,L0(i,s,_,f,v)):(i=Ic(l.type,null,f,s,s.mode,v),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&v)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:Eo,l(b,f)&&i.ref===s.ref)return hr(i,s,v)}return s.flags|=1,i=qr(_,f),i.ref=s.ref,i.return=s,s.child=i}function L0(i,s,l,f,v){if(i!==null){var _=i.memoizedProps;if(Eo(_,f)&&i.ref===s.ref)if(ti=!1,s.pendingProps=f=_,(i.lanes&v)!==0)(i.flags&131072)!==0&&(ti=!0);else return s.lanes=i.lanes,hr(i,s,v)}return tf(i,s,l,f,v)}function D0(i,s,l){var f=s.pendingProps,v=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(ma,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,zt(ma,di),di|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,zt(ma,di),di|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,zt(ma,di),di|=f;return Xn(i,s,v,l),s.child}function I0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function tf(i,s,l,f,v){var _=ei(l)?ys:Ln.current;return _=sa(s,_),ua(s,v),l=Yd(i,s,l,f,_,v),f=qd(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,hr(i,s,v)):(Yt&&f&&Cd(s),s.flags|=1,Xn(i,s,l,v),s.child)}function U0(i,s,l,f,v){if(ei(l)){var _=!0;sc(s)}else _=!1;if(ua(s,v),s.stateNode===null)wc(i,s),Jg(s,l,f),Vd(s,l,f,v),f=!0;else if(i===null){var b=s.stateNode,B=s.memoizedProps;b.props=B;var W=b.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=xi(ce):(ce=ei(l)?ys:Ln.current,ce=sa(s,ce));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==f||W!==ce)&&Qg(s,b,f,ce),zr=!1;var xe=s.memoizedState;b.state=xe,hc(s,f,b,v),W=s.memoizedState,B!==f||xe!==W||Qn.current||zr?(typeof ye=="function"&&(Bd(s,l,ye,f),W=s.memoizedState),(B=zr||Zg(s,l,B,f,xe,W,ce))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=W),b.props=f,b.state=W,b.context=ce,f=B):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,Yg(i,s),B=s.memoizedProps,ce=s.type===s.elementType?B:Pi(s.type,B),b.props=ce,Me=s.pendingProps,xe=b.context,W=l.contextType,typeof W=="object"&&W!==null?W=xi(W):(W=ei(l)?ys:Ln.current,W=sa(s,W));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Me||xe!==W)&&Qg(s,b,f,W),zr=!1,xe=s.memoizedState,b.state=xe,hc(s,f,b,v);var Xe=s.memoizedState;B!==Me||xe!==Xe||Qn.current||zr?(typeof ke=="function"&&(Bd(s,l,ke,f),Xe=s.memoizedState),(ce=zr||Zg(s,l,ce,f,xe,Xe,W)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,Xe,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,Xe,W)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Xe),b.props=f,b.state=Xe,b.context=W,f=ce):(typeof b.componentDidUpdate!="function"||B===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),f=!1)}return nf(i,s,l,f,_,v)}function nf(i,s,l,f,v,_){I0(i,s);var b=(s.flags&128)!==0;if(!f&&!b)return v&&Bg(s,l,!1),hr(i,s,_);f=s.stateNode,Gw.current=s;var B=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&b?(s.child=da(s,i.child,null,_),s.child=da(s,null,B,_)):Xn(i,s,B,_),s.memoizedState=f.state,v&&Bg(s,l,!0),s.child}function F0(i){var s=i.stateNode;s.pendingContext?Og(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Og(i,s.context,!1),zd(i,s.containerInfo)}function O0(i,s,l,f,v){return la(),Ld(v),s.flags|=256,Xn(i,s,l,f),s.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(i){return{baseLanes:i,cachePool:null,transitions:null}}function k0(i,s,l){var f=s.pendingProps,v=Jt.current,_=!1,b=(s.flags&128)!==0,B;if((B=b)||(B=i!==null&&i.memoizedState===null?!1:(v&2)!==0),B?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),zt(Jt,v&1),i===null)return Nd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,i=f.fallback,_?(f=s.mode,_=s.child,b={mode:"hidden",children:b},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=Uc(b,f,0,null),i=Rs(i,f,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=sf(l),s.memoizedState=rf,i):af(s,b));if(v=i.memoizedState,v!==null&&(B=v.dehydrated,B!==null))return Ww(i,s,b,f,B,v,l);if(_){_=f.fallback,b=s.mode,v=i.child,B=v.sibling;var W={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==v?(f=s.child,f.childLanes=0,f.pendingProps=W,s.deletions=null):(f=qr(v,W),f.subtreeFlags=v.subtreeFlags&14680064),B!==null?_=qr(B,_):(_=Rs(_,b,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,b=i.child.memoizedState,b=b===null?sf(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=i.childLanes&~l,s.memoizedState=rf,f}return _=i.child,i=_.sibling,f=qr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function af(i,s){return s=Uc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Mc(i,s,l,f){return f!==null&&Ld(f),da(s,i.child,null,l),i=af(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Ww(i,s,l,f,v,_,b){if(l)return s.flags&256?(s.flags&=-257,f=Qd(Error(t(422))),Mc(i,s,b,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,v=s.mode,f=Uc({mode:"visible",children:f.children},v,0,null),_=Rs(_,v,b,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&da(s,i.child,null,b),s.child.memoizedState=sf(b),s.memoizedState=rf,_);if((s.mode&1)===0)return Mc(i,s,b,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var B=f.dgst;return f=B,_=Error(t(419)),f=Qd(_,f,void 0),Mc(i,s,b,f)}if(B=(b&i.childLanes)!==0,ti||B){if(f=Sn,f!==null){switch(b&-b){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|b))!==0?0:v,v!==0&&v!==_.retryLane&&(_.retryLane=v,dr(i,v),Di(f,i,v,-1))}return Mf(),f=Qd(Error(t(421))),Mc(i,s,b,f)}return v.data==="$?"?(s.flags|=128,s.child=i.child,s=rE.bind(null,i),v._reactRetry=s,null):(i=_.treeContext,ui=Or(v.nextSibling),ci=s,Yt=!0,Ri=null,i!==null&&(gi[vi++]=cr,gi[vi++]=ur,gi[vi++]=_s,cr=i.id,ur=i.overflow,_s=s),s=af(s,f.children),s.flags|=4096,s)}function B0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Fd(i.return,s,l)}function of(i,s,l,f,v){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=v)}function V0(i,s,l){var f=s.pendingProps,v=f.revealOrder,_=f.tail;if(Xn(i,s,f.children,l),f=Jt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&B0(i,l,s);else if(i.tag===19)B0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(zt(Jt,f),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)i=l.alternate,i!==null&&gc(i)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),of(s,!1,v,l,_);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(i=v.alternate,i!==null&&gc(i)===null){s.child=v;break}i=v.sibling,v.sibling=l,l=v,v=i}of(s,!0,l,null,_);break;case"together":of(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function hr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ts|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=qr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=qr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function Xw(i,s,l){switch(s.tag){case 3:F0(s),la();break;case 5:i0(s);break;case 1:ei(s.type)&&sc(s);break;case 4:zd(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,v=s.memoizedProps.value;zt(uc,f._currentValue),f._currentValue=v;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(zt(Jt,Jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?k0(i,s,l):(zt(Jt,Jt.current&1),i=hr(i,s,l),i!==null?i.sibling:null);zt(Jt,Jt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return V0(i,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(Jt,Jt.current),f)break;return null;case 22:case 23:return s.lanes=0,D0(i,s,l)}return hr(i,s,l)}var z0,lf,j0,H0;z0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},lf=function(){},j0=function(i,s,l,f){var v=i.memoizedProps;if(v!==f){i=s.stateNode,ws(Wi.current);var _=null;switch(l){case"input":v=Qe(i,v),f=Qe(i,f),_=[];break;case"select":v=U({},v,{value:void 0}),f=U({},f,{value:void 0}),_=[];break;case"textarea":v=Ye(i,v),f=Ye(i,f),_=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=nc)}qe(l,f);var b;l=null;for(ce in v)if(!f.hasOwnProperty(ce)&&v.hasOwnProperty(ce)&&v[ce]!=null)if(ce==="style"){var B=v[ce];for(b in B)B.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?_||(_=[]):(_=_||[]).push(ce,null));for(ce in f){var W=f[ce];if(B=v?.[ce],f.hasOwnProperty(ce)&&W!==B&&(W!=null||B!=null))if(ce==="style")if(B){for(b in B)!B.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in W)W.hasOwnProperty(b)&&B[b]!==W[b]&&(l||(l={}),l[b]=W[b])}else l||(_||(_=[]),_.push(ce,l)),l=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(_=_||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&jt("scroll",i),_||B===W||(_=[])):(_=_||[]).push(ce,W))}l&&(_=_||[]).push("style",l);var ce=_;(s.updateQueue=ce)&&(s.flags|=4)}},H0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Bo(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function In(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function Yw(i,s,l){var f=s.pendingProps;switch(Rd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(s),null;case 1:return ei(s.type)&&rc(),In(s),null;case 3:return f=s.stateNode,fa(),Ht(Qn),Ht(Ln),Gd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(cc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ri!==null&&(yf(Ri),Ri=null))),lf(i,s),In(s),null;case 5:jd(s);var v=ws(Io.current);if(l=s.type,i!==null&&s.stateNode!=null)j0(i,s,l,f,v),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return In(s),null}if(i=ws(Wi.current),cc(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[Gi]=s,f[Ro]=_,i=(s.mode&1)!==0,l){case"dialog":jt("cancel",f),jt("close",f);break;case"iframe":case"object":case"embed":jt("load",f);break;case"video":case"audio":for(v=0;v<bo.length;v++)jt(bo[v],f);break;case"source":jt("error",f);break;case"img":case"image":case"link":jt("error",f),jt("load",f);break;case"details":jt("toggle",f);break;case"input":mt(f,_),jt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},jt("invalid",f);break;case"textarea":O(f,_),jt("invalid",f)}qe(l,_),v=null;for(var b in _)if(_.hasOwnProperty(b)){var B=_[b];b==="children"?typeof B=="string"?f.textContent!==B&&(_.suppressHydrationWarning!==!0&&tc(f.textContent,B,i),v=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(_.suppressHydrationWarning!==!0&&tc(f.textContent,B,i),v=["children",""+B]):a.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&jt("scroll",f)}switch(l){case"input":ft(f),X(f,_,!0);break;case"textarea":ft(f),K(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=nc)}f=v,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=b.createElement(l,{is:f.is}):(i=b.createElement(l),l==="select"&&(b=i,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):i=b.createElementNS(i,l),i[Gi]=s,i[Ro]=f,z0(i,s,!1,!1),s.stateNode=i;e:{switch(b=Re(l,f),l){case"dialog":jt("cancel",i),jt("close",i),v=f;break;case"iframe":case"object":case"embed":jt("load",i),v=f;break;case"video":case"audio":for(v=0;v<bo.length;v++)jt(bo[v],i);v=f;break;case"source":jt("error",i),v=f;break;case"img":case"image":case"link":jt("error",i),jt("load",i),v=f;break;case"details":jt("toggle",i),v=f;break;case"input":mt(i,f),v=Qe(i,f),jt("invalid",i);break;case"option":v=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},v=U({},f,{value:void 0}),jt("invalid",i);break;case"textarea":O(i,f),v=Ye(i,f),jt("invalid",i);break;default:v=f}qe(l,v),B=v;for(_ in B)if(B.hasOwnProperty(_)){var W=B[_];_==="style"?Ne(i,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ze(i,W)):_==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&Ae(i,W):typeof W=="number"&&Ae(i,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?W!=null&&_==="onScroll"&&jt("scroll",i):W!=null&&P(i,_,W,b))}switch(l){case"input":ft(i),X(i,f,!1);break;case"textarea":ft(i),K(i);break;case"option":f.value!=null&&i.setAttribute("value",""+_e(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?Et(i,!!f.multiple,_,!1):f.defaultValue!=null&&Et(i,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=nc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return In(s),null;case 6:if(i&&s.stateNode!=null)H0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=ws(Io.current),ws(Wi.current),cc(s)){if(f=s.stateNode,l=s.memoizedProps,f[Gi]=s,(_=f.nodeValue!==l)&&(i=ci,i!==null))switch(i.tag){case 3:tc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&tc(f.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Gi]=s,s.stateNode=f}return In(s),null;case 13:if(Ht(Jt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&ui!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Wg(),la(),s.flags|=98560,_=!1;else if(_=cc(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Gi]=s}else la(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;In(s),_=!1}else Ri!==null&&(yf(Ri),Ri=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Jt.current&1)!==0?fn===0&&(fn=3):Mf())),s.updateQueue!==null&&(s.flags|=4),In(s),null);case 4:return fa(),lf(i,s),i===null&&Ao(s.stateNode.containerInfo),In(s),null;case 10:return Ud(s.type._context),In(s),null;case 17:return ei(s.type)&&rc(),In(s),null;case 19:if(Ht(Jt),_=s.memoizedState,_===null)return In(s),null;if(f=(s.flags&128)!==0,b=_.rendering,b===null)if(f)Bo(_,!1);else{if(fn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=gc(i),b!==null){for(s.flags|=128,Bo(_,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,i=f,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,i=b.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return zt(Jt,Jt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Zt()>ga&&(s.flags|=128,f=!0,Bo(_,!1),s.lanes=4194304)}else{if(!f)if(i=gc(b),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Bo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Yt)return In(s),null}else 2*Zt()-_.renderingStartTime>ga&&l!==1073741824&&(s.flags|=128,f=!0,Bo(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Zt(),s.sibling=null,l=Jt.current,zt(Jt,f?l&1|2:l&1),s):(In(s),null);case 22:case 23:return Sf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(di&1073741824)!==0&&(In(s),s.subtreeFlags&6&&(s.flags|=8192)):In(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function qw(i,s){switch(Rd(s),s.tag){case 1:return ei(s.type)&&rc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return fa(),Ht(Qn),Ht(Ln),Gd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return jd(s),null;case 13:if(Ht(Jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));la()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht(Jt),null;case 4:return fa(),null;case 10:return Ud(s.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Ec=!1,Un=!1,$w=typeof WeakSet=="function"?WeakSet:Set,He=null;function pa(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){tn(i,s,f)}else l.current=null}function cf(i,s,l){try{l()}catch(f){tn(i,s,f)}}var G0=!1;function Kw(i,s){if(_d=Gl,i=Sg(),fd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,B=-1,W=-1,ce=0,ye=0,Me=i,xe=null;t:for(;;){for(var ke;Me!==l||v!==0&&Me.nodeType!==3||(B=b+v),Me!==_||f!==0&&Me.nodeType!==3||(W=b+f),Me.nodeType===3&&(b+=Me.nodeValue.length),(ke=Me.firstChild)!==null;)xe=Me,Me=ke;for(;;){if(Me===i)break t;if(xe===l&&++ce===v&&(B=b),xe===_&&++ye===f&&(W=b),(ke=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=ke}l=B===-1||W===-1?null:{start:B,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(Sd={focusedElem:i,selectionRange:l},Gl=!1,He=s;He!==null;)if(s=He,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,He=i;else for(;He!==null;){s=He;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,an=Xe.memoizedState,ee=s.stateNode,q=ee.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Pi(s.type,Ke),an);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){tn(s,s.return,be)}if(i=s.sibling,i!==null){i.return=s.return,He=i;break}He=s.return}return Xe=G0,G0=!1,Xe}function Vo(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&i)===i){var _=v.destroy;v.destroy=void 0,_!==void 0&&cf(s,l,_)}v=v.next}while(v!==f)}}function Tc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function uf(i){var s=i.ref;if(s!==null){var l=i.stateNode;i.tag,i=l,typeof s=="function"?s(i):s.current=i}}function W0(i){var s=i.alternate;s!==null&&(i.alternate=null,W0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Gi],delete s[Ro],delete s[Td],delete s[Lw],delete s[Dw])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function X0(i){return i.tag===5||i.tag===3||i.tag===4}function Y0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||X0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function df(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=nc));else if(f!==4&&(i=i.child,i!==null))for(df(i,s,l),i=i.sibling;i!==null;)df(i,s,l),i=i.sibling}function ff(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ff(i,s,l),i=i.sibling;i!==null;)ff(i,s,l),i=i.sibling}var En=null,Ni=!1;function Hr(i,s,l){for(l=l.child;l!==null;)q0(i,s,l),l=l.sibling}function q0(i,s,l){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Oe,l)}catch{}switch(l.tag){case 5:Un||pa(l,s);case 6:var f=En,v=Ni;En=null,Hr(i,s,l),En=f,Ni=v,En!==null&&(Ni?(i=En,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(Ni?(i=En,l=l.stateNode,i.nodeType===8?Ed(i.parentNode,l):i.nodeType===1&&Ed(i,l),xo(i)):Ed(En,l.stateNode));break;case 4:f=En,v=Ni,En=l.stateNode.containerInfo,Ni=!0,Hr(i,s,l),En=f,Ni=v;break;case 0:case 11:case 14:case 15:if(!Un&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var _=v,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&cf(l,s,b),v=v.next}while(v!==f)}Hr(i,s,l);break;case 1:if(!Un&&(pa(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){tn(l,s,B)}Hr(i,s,l);break;case 21:Hr(i,s,l);break;case 22:l.mode&1?(Un=(f=Un)||l.memoizedState!==null,Hr(i,s,l),Un=f):Hr(i,s,l);break;default:Hr(i,s,l)}}function $0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new $w),s.forEach(function(f){var v=sE.bind(null,i,f);l.has(f)||(l.add(f),f.then(v,v))})}}function Li(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var _=i,b=s,B=b;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Ni=!1;break e;case 3:En=B.stateNode.containerInfo,Ni=!0;break e;case 4:En=B.stateNode.containerInfo,Ni=!0;break e}B=B.return}if(En===null)throw Error(t(160));q0(_,b,v),En=null,Ni=!1;var W=v.alternate;W!==null&&(W.return=null),v.return=null}catch(ce){tn(v,s,ce)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)K0(s,i),s=s.sibling}function K0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Li(s,i),Yi(i),f&4){try{Vo(3,i,i.return),Tc(3,i)}catch(Ke){tn(i,i.return,Ke)}try{Vo(5,i,i.return)}catch(Ke){tn(i,i.return,Ke)}}break;case 1:Li(s,i),Yi(i),f&512&&l!==null&&pa(l,l.return);break;case 5:if(Li(s,i),Yi(i),f&512&&l!==null&&pa(l,l.return),i.flags&32){var v=i.stateNode;try{Ae(v,"")}catch(Ke){tn(i,i.return,Ke)}}if(f&4&&(v=i.stateNode,v!=null)){var _=i.memoizedProps,b=l!==null?l.memoizedProps:_,B=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{B==="input"&&_.type==="radio"&&_.name!=null&&lt(v,_),Re(B,b);var ce=Re(B,_);for(b=0;b<W.length;b+=2){var ye=W[b],Me=W[b+1];ye==="style"?Ne(v,Me):ye==="dangerouslySetInnerHTML"?Ze(v,Me):ye==="children"?Ae(v,Me):P(v,ye,Me,ce)}switch(B){case"input":kt(v,_);break;case"textarea":T(v,_);break;case"select":var xe=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!_.multiple;var ke=_.value;ke!=null?Et(v,!!_.multiple,ke,!1):xe!==!!_.multiple&&(_.defaultValue!=null?Et(v,!!_.multiple,_.defaultValue,!0):Et(v,!!_.multiple,_.multiple?[]:"",!1))}v[Ro]=_}catch(Ke){tn(i,i.return,Ke)}}break;case 6:if(Li(s,i),Yi(i),f&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,_=i.memoizedProps;try{v.nodeValue=_}catch(Ke){tn(i,i.return,Ke)}}break;case 3:if(Li(s,i),Yi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{xo(s.containerInfo)}catch(Ke){tn(i,i.return,Ke)}break;case 4:Li(s,i),Yi(i);break;case 13:Li(s,i),Yi(i),v=i.child,v.flags&8192&&(_=v.memoizedState!==null,v.stateNode.isHidden=_,!_||v.alternate!==null&&v.alternate.memoizedState!==null||(mf=Zt())),f&4&&$0(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Un=(ce=Un)||ye,Li(s,i),Un=ce):Li(s,i),Yi(i),f&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!ye&&(i.mode&1)!==0)for(He=i,ye=i.child;ye!==null;){for(Me=He=ye;He!==null;){switch(xe=He,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:Vo(4,xe,xe.return);break;case 1:pa(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=xe,l=xe.return;try{s=f,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ke){tn(f,l,Ke)}}break;case 5:pa(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Q0(Me);continue}}ke!==null?(ke.return=xe,He=ke):Q0(Me)}ye=ye.sibling}e:for(ye=null,Me=i;;){if(Me.tag===5){if(ye===null){ye=Me;try{v=Me.stateNode,ce?(_=v.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(B=Me.stateNode,W=Me.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=we("display",b))}catch(Ke){tn(i,i.return,Ke)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ce?"":Me.memoizedProps}catch(Ke){tn(i,i.return,Ke)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Li(s,i),Yi(i),f&4&&$0(i);break;case 21:break;default:Li(s,i),Yi(i)}}function Yi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(X0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(Ae(v,""),f.flags&=-33);var _=Y0(i);ff(i,_,v);break;case 3:case 4:var b=f.stateNode.containerInfo,B=Y0(i);df(i,B,b);break;default:throw Error(t(161))}}catch(W){tn(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Zw(i,s,l){He=i,Z0(i)}function Z0(i,s,l){for(var f=(i.mode&1)!==0;He!==null;){var v=He,_=v.child;if(v.tag===22&&f){var b=v.memoizedState!==null||Ec;if(!b){var B=v.alternate,W=B!==null&&B.memoizedState!==null||Un;B=Ec;var ce=Un;if(Ec=b,(Un=W)&&!ce)for(He=v;He!==null;)b=He,W=b.child,b.tag===22&&b.memoizedState!==null?ev(v):W!==null?(W.return=b,He=W):ev(v);for(;_!==null;)He=_,Z0(_),_=_.sibling;He=v,Ec=B,Un=ce}J0(i)}else(v.subtreeFlags&8772)!==0&&_!==null?(_.return=v,He=_):J0(i)}}function J0(i){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Un||Tc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Un)if(l===null)f.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:Pi(s.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&$g(s,_,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}$g(s,b,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ce=s.alternate;if(ce!==null){var ye=ce.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&xo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||s.flags&512&&uf(s)}catch(xe){tn(s,s.return,xe)}}if(s===i){He=null;break}if(l=s.sibling,l!==null){l.return=s.return,He=l;break}He=s.return}}function Q0(i){for(;He!==null;){var s=He;if(s===i){He=null;break}var l=s.sibling;if(l!==null){l.return=s.return,He=l;break}He=s.return}}function ev(i){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Tc(4,s)}catch(W){tn(s,l,W)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var v=s.return;try{f.componentDidMount()}catch(W){tn(s,v,W)}}var _=s.return;try{uf(s)}catch(W){tn(s,_,W)}break;case 5:var b=s.return;try{uf(s)}catch(W){tn(s,b,W)}}}catch(W){tn(s,s.return,W)}if(s===i){He=null;break}var B=s.sibling;if(B!==null){B.return=s.return,He=B;break}He=s.return}}var Jw=Math.ceil,bc=N.ReactCurrentDispatcher,hf=N.ReactCurrentOwner,_i=N.ReactCurrentBatchConfig,At=0,Sn=null,on=null,Tn=0,di=0,ma=kr(0),fn=0,zo=null,Ts=0,Ac=0,pf=0,jo=null,ni=null,mf=0,ga=1/0,pr=null,Cc=!1,gf=null,Gr=null,Rc=!1,Wr=null,Pc=0,Ho=0,vf=null,Nc=-1,Lc=0;function Yn(){return(At&6)!==0?Zt():Nc!==-1?Nc:Nc=Zt()}function Xr(i){return(i.mode&1)===0?1:(At&2)!==0&&Tn!==0?Tn&-Tn:Uw.transition!==null?(Lc===0&&(Lc=Nn()),Lc):(i=ut,i!==0||(i=window.event,i=i===void 0?16:tg(i.type)),i)}function Di(i,s,l,f){if(50<Ho)throw Ho=0,vf=null,Error(t(185));un(i,l,f),((At&2)===0||i!==Sn)&&(i===Sn&&((At&2)===0&&(Ac|=l),fn===4&&Yr(i,Tn)),ii(i,f),l===1&&At===0&&(s.mode&1)===0&&(ga=Zt()+500,ac&&Vr()))}function ii(i,s){var l=i.callbackNode;It(i,s);var f=Nt(i,i===Sn?Tn:0);if(f===0)l!==null&&zl(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&zl(l),s===1)i.tag===0?Iw(nv.bind(null,i)):Vg(nv.bind(null,i)),Pw(function(){(At&6)===0&&Vr()}),l=null;else{switch(Wn(f)){case 1:l=Z;break;case 4:l=ue;break;case 16:l=oe;break;case 536870912:l=De;break;default:l=oe}l=uv(l,tv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function tv(i,s){if(Nc=-1,Lc=0,(At&6)!==0)throw Error(t(327));var l=i.callbackNode;if(va()&&i.callbackNode!==l)return null;var f=Nt(i,i===Sn?Tn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Dc(i,f);else{s=f;var v=At;At|=2;var _=rv();(Sn!==i||Tn!==s)&&(pr=null,ga=Zt()+500,As(i,s));do try{tE();break}catch(B){iv(i,B)}while(!0);Id(),bc.current=_,At=v,on!==null?s=0:(Sn=null,Tn=0,s=fn)}if(s!==0){if(s===2&&(v=St(i),v!==0&&(f=v,s=xf(i,v))),s===1)throw l=zo,As(i,0),Yr(i,f),ii(i,Zt()),l;if(s===6)Yr(i,f);else{if(v=i.current.alternate,(f&30)===0&&!Qw(v)&&(s=Dc(i,f),s===2&&(_=St(i),_!==0&&(f=_,s=xf(i,_))),s===1))throw l=zo,As(i,0),Yr(i,f),ii(i,Zt()),l;switch(i.finishedWork=v,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Cs(i,ni,pr);break;case 3:if(Yr(i,f),(f&130023424)===f&&(s=mf+500-Zt(),10<s)){if(Nt(i,0)!==0)break;if(v=i.suspendedLanes,(v&f)!==f){Yn(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=wd(Cs.bind(null,i,ni,pr),s);break}Cs(i,ni,pr);break;case 4:if(Yr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,v=-1;0<f;){var b=31-Be(f);_=1<<b,b=s[b],b>v&&(v=b),f&=~_}if(f=v,f=Zt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Jw(f/1960))-f,10<f){i.timeoutHandle=wd(Cs.bind(null,i,ni,pr),f);break}Cs(i,ni,pr);break;case 5:Cs(i,ni,pr);break;default:throw Error(t(329))}}}return ii(i,Zt()),i.callbackNode===l?tv.bind(null,i):null}function xf(i,s){var l=jo;return i.current.memoizedState.isDehydrated&&(As(i,s).flags|=256),i=Dc(i,s),i!==2&&(s=ni,ni=l,s!==null&&yf(s)),i}function yf(i){ni===null?ni=i:ni.push.apply(ni,i)}function Qw(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],_=v.getSnapshot;v=v.value;try{if(!Ci(_(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Yr(i,s){for(s&=~pf,s&=~Ac,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Be(s),f=1<<l;i[l]=-1,s&=~f}}function nv(i){if((At&6)!==0)throw Error(t(327));va();var s=Nt(i,0);if((s&1)===0)return ii(i,Zt()),null;var l=Dc(i,s);if(i.tag!==0&&l===2){var f=St(i);f!==0&&(s=f,l=xf(i,f))}if(l===1)throw l=zo,As(i,0),Yr(i,s),ii(i,Zt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Cs(i,ni,pr),ii(i,Zt()),null}function _f(i,s){var l=At;At|=1;try{return i(s)}finally{At=l,At===0&&(ga=Zt()+500,ac&&Vr())}}function bs(i){Wr!==null&&Wr.tag===0&&(At&6)===0&&va();var s=At;At|=1;var l=_i.transition,f=ut;try{if(_i.transition=null,ut=1,i)return i()}finally{ut=f,_i.transition=l,At=s,(At&6)===0&&Vr()}}function Sf(){di=ma.current,Ht(ma)}function As(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Rw(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(Rd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&rc();break;case 3:fa(),Ht(Qn),Ht(Ln),Gd();break;case 5:jd(f);break;case 4:fa();break;case 13:Ht(Jt);break;case 19:Ht(Jt);break;case 10:Ud(f.type._context);break;case 22:case 23:Sf()}l=l.return}if(Sn=i,on=i=qr(i.current,null),Tn=di=s,fn=0,zo=null,pf=Ac=Ts=0,ni=jo=null,Ms!==null){for(s=0;s<Ms.length;s++)if(l=Ms[s],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,_=l.pending;if(_!==null){var b=_.next;_.next=v,f.next=b}l.pending=f}Ms=null}return i}function iv(i,s){do{var l=on;try{if(Id(),vc.current=Sc,xc){for(var f=Qt.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}xc=!1}if(Es=0,_n=dn=Qt=null,Uo=!1,Fo=0,hf.current=null,l===null||l.return===null){fn=1,zo=s,on=null;break}e:{var _=i,b=l.return,B=l,W=s;if(s=Tn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,ye=B,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=C0(b);if(ke!==null){ke.flags&=-257,R0(ke,b,B,_,s),ke.mode&1&&A0(_,ce,s),s=ke,W=ce;var Xe=s.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(W),s.updateQueue=Ke}else Xe.add(W);break e}else{if((s&1)===0){A0(_,ce,s),Mf();break e}W=Error(t(426))}}else if(Yt&&B.mode&1){var an=C0(b);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),R0(an,b,B,_,s),Ld(ha(W,B));break e}}_=W=ha(W,B),fn!==4&&(fn=2),jo===null?jo=[_]:jo.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ee=T0(_,W,s);qg(_,ee);break e;case 1:B=W;var q=_.type,se=_.stateNode;if((_.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Gr===null||!Gr.has(se)))){_.flags|=65536,s&=-s,_.lanes|=s;var be=b0(_,B,s);qg(_,be);break e}}_=_.return}while(_!==null)}av(l)}catch(Je){s=Je,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function rv(){var i=bc.current;return bc.current=Sc,i===null?Sc:i}function Mf(){(fn===0||fn===3||fn===2)&&(fn=4),Sn===null||(Ts&268435455)===0&&(Ac&268435455)===0||Yr(Sn,Tn)}function Dc(i,s){var l=At;At|=2;var f=rv();(Sn!==i||Tn!==s)&&(pr=null,As(i,s));do try{eE();break}catch(v){iv(i,v)}while(!0);if(Id(),At=l,bc.current=f,on!==null)throw Error(t(261));return Sn=null,Tn=0,fn}function eE(){for(;on!==null;)sv(on)}function tE(){for(;on!==null&&!Ju();)sv(on)}function sv(i){var s=cv(i.alternate,i,di);i.memoizedProps=i.pendingProps,s===null?av(i):on=s,hf.current=null}function av(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Yw(l,s,di),l!==null){on=l;return}}else{if(l=qw(l,s),l!==null){l.flags&=32767,on=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{fn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=i}while(s!==null);fn===0&&(fn=5)}function Cs(i,s,l){var f=ut,v=_i.transition;try{_i.transition=null,ut=1,nE(i,s,l,f)}finally{_i.transition=v,ut=f}return null}function nE(i,s,l,f){do va();while(Wr!==null);if((At&6)!==0)throw Error(t(327));l=i.finishedWork;var v=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(vs(i,_),i===Sn&&(on=Sn=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Rc||(Rc=!0,uv(oe,function(){return va(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=_i.transition,_i.transition=null;var b=ut;ut=1;var B=At;At|=4,hf.current=null,Kw(i,l),K0(l,i),Mw(Sd),Gl=!!_d,Sd=_d=null,i.current=l,Zw(l),Qu(),At=B,ut=b,_i.transition=_}else i.current=l;if(Rc&&(Rc=!1,Wr=i,Pc=v),_=i.pendingLanes,_===0&&(Gr=null),Ge(l.stateNode),ii(i,Zt()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)v=s[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(Cc)throw Cc=!1,i=gf,gf=null,i;return(Pc&1)!==0&&i.tag!==0&&va(),_=i.pendingLanes,(_&1)!==0?i===vf?Ho++:(Ho=0,vf=i):Ho=0,Vr(),null}function va(){if(Wr!==null){var i=Wn(Pc),s=_i.transition,l=ut;try{if(_i.transition=null,ut=16>i?16:i,Wr===null)var f=!1;else{if(i=Wr,Wr=null,Pc=0,(At&6)!==0)throw Error(t(331));var v=At;for(At|=4,He=i.current;He!==null;){var _=He,b=_.child;if((He.flags&16)!==0){var B=_.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ce=B[W];for(He=ce;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:Vo(8,ye,_)}var Me=ye.child;if(Me!==null)Me.return=ye,He=Me;else for(;He!==null;){ye=He;var xe=ye.sibling,ke=ye.return;if(W0(ye),ye===ce){He=null;break}if(xe!==null){xe.return=ke,He=xe;break}He=ke}}}var Xe=_.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var an=Ke.sibling;Ke.sibling=null,Ke=an}while(Ke!==null)}}He=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,He=b;else e:for(;He!==null;){if(_=He,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Vo(9,_,_.return)}var ee=_.sibling;if(ee!==null){ee.return=_.return,He=ee;break e}He=_.return}}var q=i.current;for(He=q;He!==null;){b=He;var se=b.child;if((b.subtreeFlags&2064)!==0&&se!==null)se.return=b,He=se;else e:for(b=q;He!==null;){if(B=He,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Tc(9,B)}}catch(Je){tn(B,B.return,Je)}if(B===b){He=null;break e}var be=B.sibling;if(be!==null){be.return=B.return,He=be;break e}He=B.return}}if(At=v,Vr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Oe,i)}catch{}f=!0}return f}finally{ut=l,_i.transition=s}}return!1}function ov(i,s,l){s=ha(l,s),s=T0(i,s,1),i=jr(i,s,1),s=Yn(),i!==null&&(un(i,1,s),ii(i,s))}function tn(i,s,l){if(i.tag===3)ov(i,i,l);else for(;s!==null;){if(s.tag===3){ov(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Gr===null||!Gr.has(f))){i=ha(l,i),i=b0(s,i,1),s=jr(s,i,1),i=Yn(),s!==null&&(un(s,1,i),ii(s,i));break}}s=s.return}}function iE(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Yn(),i.pingedLanes|=i.suspendedLanes&l,Sn===i&&(Tn&l)===l&&(fn===4||fn===3&&(Tn&130023424)===Tn&&500>Zt()-mf?As(i,0):pf|=l),ii(i,s)}function lv(i,s){s===0&&((i.mode&1)===0?s=1:(s=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var l=Yn();i=dr(i,s),i!==null&&(un(i,s,l),ii(i,l))}function rE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),lv(i,l)}function sE(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,v=i.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),lv(i,l)}var cv;cv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Qn.current)ti=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ti=!1,Xw(i,s,l);ti=(i.flags&131072)!==0}else ti=!1,Yt&&(s.flags&1048576)!==0&&zg(s,lc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;wc(i,s),i=s.pendingProps;var v=sa(s,Ln.current);ua(s,l),v=Yd(null,s,f,i,v,l);var _=qd();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ei(f)?(_=!0,sc(s)):_=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,kd(s),v.updater=pc,s.stateNode=v,v._reactInternals=s,Vd(s,f,i,l),s=nf(null,s,f,!0,_,l)):(s.tag=0,Yt&&_&&Cd(s),Xn(null,s,v,l),s=s.child),s;case 16:f=s.elementType;e:{switch(wc(i,s),i=s.pendingProps,v=f._init,f=v(f._payload),s.type=f,v=s.tag=oE(f),i=Pi(f,i),v){case 0:s=tf(null,s,f,i,l);break e;case 1:s=U0(null,s,f,i,l);break e;case 11:s=P0(null,s,f,i,l);break e;case 14:s=N0(null,s,f,Pi(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Pi(f,v),tf(i,s,f,v,l);case 1:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Pi(f,v),U0(i,s,f,v,l);case 3:e:{if(F0(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,v=_.element,Yg(i,s),hc(s,f,null,l);var b=s.memoizedState;if(f=b.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){v=ha(Error(t(423)),s),s=O0(i,s,f,l,v);break e}else if(f!==v){v=ha(Error(t(424)),s),s=O0(i,s,f,l,v);break e}else for(ui=Or(s.stateNode.containerInfo.firstChild),ci=s,Yt=!0,Ri=null,l=n0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(la(),f===v){s=hr(i,s,l);break e}Xn(i,s,f,l)}s=s.child}return s;case 5:return i0(s),i===null&&Nd(s),f=s.type,v=s.pendingProps,_=i!==null?i.memoizedProps:null,b=v.children,Md(f,v)?b=null:_!==null&&Md(f,_)&&(s.flags|=32),I0(i,s),Xn(i,s,b,l),s.child;case 6:return i===null&&Nd(s),null;case 13:return k0(i,s,l);case 4:return zd(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=da(s,null,f,l):Xn(i,s,f,l),s.child;case 11:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Pi(f,v),P0(i,s,f,v,l);case 7:return Xn(i,s,s.pendingProps,l),s.child;case 8:return Xn(i,s,s.pendingProps.children,l),s.child;case 12:return Xn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,v=s.pendingProps,_=s.memoizedProps,b=v.value,zt(uc,f._currentValue),f._currentValue=b,_!==null)if(Ci(_.value,b)){if(_.children===v.children&&!Qn.current){s=hr(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var B=_.dependencies;if(B!==null){b=_.child;for(var W=B.firstContext;W!==null;){if(W.context===f){if(_.tag===1){W=fr(-1,l&-l),W.tag=2;var ce=_.updateQueue;if(ce!==null){ce=ce.shared;var ye=ce.pending;ye===null?W.next=W:(W.next=ye.next,ye.next=W),ce.pending=W}}_.lanes|=l,W=_.alternate,W!==null&&(W.lanes|=l),Fd(_.return,l,s),B.lanes|=l;break}W=W.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,B=b.alternate,B!==null&&(B.lanes|=l),Fd(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Xn(i,s,v.children,l),s=s.child}return s;case 9:return v=s.type,f=s.pendingProps.children,ua(s,l),v=xi(v),f=f(v),s.flags|=1,Xn(i,s,f,l),s.child;case 14:return f=s.type,v=Pi(f,s.pendingProps),v=Pi(f.type,v),N0(i,s,f,v,l);case 15:return L0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Pi(f,v),wc(i,s),s.tag=1,ei(f)?(i=!0,sc(s)):i=!1,ua(s,l),Jg(s,f,v),Vd(s,f,v,l),nf(null,s,f,!0,i,l);case 19:return V0(i,s,l);case 22:return D0(i,s,l)}throw Error(t(156,s.tag))};function uv(i,s){return Vl(i,s)}function aE(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(i,s,l,f){return new aE(i,s,l,f)}function wf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function oE(i){if(typeof i=="function")return wf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ne)return 11;if(i===le)return 14}return 2}function qr(i,s){var l=i.alternate;return l===null?(l=Si(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ic(i,s,l,f,v,_){var b=2;if(f=i,typeof i=="function")wf(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case F:return Rs(l.children,v,_,s);case V:b=8,v|=8;break;case A:return i=Si(12,l,s,v|2),i.elementType=A,i.lanes=_,i;case j:return i=Si(13,l,s,v),i.elementType=j,i.lanes=_,i;case J:return i=Si(19,l,s,v),i.elementType=J,i.lanes=_,i;case H:return Uc(l,v,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case L:b=10;break e;case z:b=9;break e;case ne:b=11;break e;case le:b=14;break e;case Q:b=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Si(b,l,s,v),s.elementType=i,s.type=f,s.lanes=_,s}function Rs(i,s,l,f){return i=Si(7,i,f,s),i.lanes=l,i}function Uc(i,s,l,f){return i=Si(22,i,f,s),i.elementType=H,i.lanes=l,i.stateNode={isHidden:!1},i}function Ef(i,s,l){return i=Si(6,i,null,s),i.lanes=l,i}function Tf(i,s,l){return s=Si(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function lE(i,s,l,f,v){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function bf(i,s,l,f,v,_,b,B,W){return i=new lE(i,s,l,B,W),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Si(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(_),i}function cE(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function dv(i){if(!i)return Br;i=i._reactInternals;e:{if(mi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ei(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ei(l))return kg(i,l,s)}return s}function fv(i,s,l,f,v,_,b,B,W){return i=bf(l,f,!0,i,v,_,b,B,W),i.context=dv(null),l=i.current,f=Yn(),v=Xr(l),_=fr(f,v),_.callback=s??null,jr(l,_,v),i.current.lanes=v,un(i,v,f),ii(i,f),i}function Fc(i,s,l,f){var v=s.current,_=Yn(),b=Xr(v);return l=dv(l),s.context===null?s.context=l:s.pendingContext=l,s=fr(_,b),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=jr(v,s,b),i!==null&&(Di(i,v,b,_),fc(i,v,b)),b}function Oc(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function hv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Af(i,s){hv(i,s),(i=i.alternate)&&hv(i,s)}function uE(){return null}var pv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Cf(i){this._internalRoot=i}kc.prototype.render=Cf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Fc(i,s,null,null)},kc.prototype.unmount=Cf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;bs(function(){Fc(null,i,null,null)}),s[or]=null}};function kc(i){this._internalRoot=i}kc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Hi();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ir.length&&s!==0&&s<Ir[l].priority;l++);Ir.splice(l,0,i),l===0&&Qm(i)}};function Rf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Bc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function mv(){}function dE(i,s,l,f,v){if(v){if(typeof f=="function"){var _=f;f=function(){var ce=Oc(b);_.call(ce)}}var b=fv(s,f,i,0,null,!1,!1,"",mv);return i._reactRootContainer=b,i[or]=b.current,Ao(i.nodeType===8?i.parentNode:i),bs(),b}for(;v=i.lastChild;)i.removeChild(v);if(typeof f=="function"){var B=f;f=function(){var ce=Oc(W);B.call(ce)}}var W=bf(i,0,!1,null,null,!1,!1,"",mv);return i._reactRootContainer=W,i[or]=W.current,Ao(i.nodeType===8?i.parentNode:i),bs(function(){Fc(s,W,l,f)}),W}function Vc(i,s,l,f,v){var _=l._reactRootContainer;if(_){var b=_;if(typeof v=="function"){var B=v;v=function(){var W=Oc(b);B.call(W)}}Fc(s,b,i,v)}else b=dE(l,s,i,v,f);return Oc(b)}xn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Bt(s.pendingLanes);l!==0&&(Ut(s,l|1),ii(s,Zt()),(At&6)===0&&(ga=Zt()+500,Vr()))}break;case 13:bs(function(){var f=dr(i,1);if(f!==null){var v=Yn();Di(f,i,1,v)}}),Af(i,1)}},yn=function(i){if(i.tag===13){var s=dr(i,134217728);if(s!==null){var l=Yn();Di(s,i,134217728,l)}Af(i,134217728)}},$s=function(i){if(i.tag===13){var s=Xr(i),l=dr(i,s);if(l!==null){var f=Yn();Di(l,i,s,f)}Af(i,s)}},Hi=function(){return ut},Zm=function(i,s){var l=ut;try{return ut=i,s()}finally{ut=l}},Ie=function(i,s,l){switch(s){case"input":if(kt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var v=ic(f);if(!v)throw Error(t(90));Pt(f),kt(f,v)}}}break;case"textarea":T(i,l);break;case"select":s=l.value,s!=null&&Et(i,!!l.multiple,s,!1)}},at=_f,Ft=bs;var fE={usingClientEntryPoint:!1,Events:[Po,ia,ic,me,Pe,_f]},Go={findFiberByHostInstance:xs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hE={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ho(i),i===null?null:i.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||uE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{Oe=zc.inject(hE),Ce=zc}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE,ri.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(s))throw Error(t(200));return cE(i,s,null,l)},ri.createRoot=function(i,s){if(!Rf(i))throw Error(t(299));var l=!1,f="",v=pv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=bf(i,1,!1,null,null,l,!1,f,v),i[or]=s.current,Ao(i.nodeType===8?i.parentNode:i),new Cf(s)},ri.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ho(s),i=i===null?null:i.stateNode,i},ri.flushSync=function(i){return bs(i)},ri.hydrate=function(i,s,l){if(!Bc(s))throw Error(t(200));return Vc(null,i,s,!0,l)},ri.hydrateRoot=function(i,s,l){if(!Rf(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,_="",b=pv;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=fv(s,null,i,1,l??null,v,!1,_,b),i[or]=s.current,Ao(i),f)for(i=0;i<f.length;i++)l=f[i],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new kc(s)},ri.render=function(i,s,l){if(!Bc(s))throw Error(t(200));return Vc(null,i,s,!1,l)},ri.unmountComponentAtNode=function(i){if(!Bc(i))throw Error(t(40));return i._reactRootContainer?(bs(function(){Vc(null,null,i,!1,function(){i._reactRootContainer=null,i[or]=null})}),!0):!1},ri.unstable_batchedUpdates=_f,ri.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!Bc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Vc(i,s,l,!1,f)},ri.version="18.2.0-next-9e3b772b8-20220608",ri}var wv;function Jy(){if(wv)return Lf.exports;wv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Lf.exports=ME(),Lf.exports}var Ev;function wE(){if(Ev)return jc;Ev=1;var n=Jy();return jc.createRoot=n.createRoot,jc.hydrateRoot=n.hydrateRoot,jc}var EE=wE();const TE=Qp(EE);Jy();function ll(){return ll=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ll.apply(this,arguments)}var ss;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ss||(ss={}));const Tv="popstate";function bE(n){n===void 0&&(n={});function e(r,a){let{pathname:o,search:c,hash:u}=r.location;return Lh("",{pathname:o,search:c,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Au(a)}return CE(e,t,null,n)}function sn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function em(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AE(){return Math.random().toString(36).substr(2,8)}function bv(n,e){return{usr:n.state,key:n.key,idx:e}}function Lh(n,e,t,r){return t===void 0&&(t=null),ll({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Qa(e):e,{state:t,key:e&&e.key||r||AE()})}function Au(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function CE(n,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,c=a.history,u=ss.Pop,d=null,h=p();h==null&&(h=0,c.replaceState(ll({},c.state,{idx:h}),""));function p(){return(c.state||{idx:null}).idx}function m(){u=ss.Pop;let S=p(),x=S==null?null:S-h;h=S,d&&d({action:u,location:E.location,delta:x})}function g(S,x){u=ss.Push;let R=Lh(E.location,S,x);h=p()+1;let P=bv(R,h),N=E.createHref(R);try{c.pushState(P,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}o&&d&&d({action:u,location:E.location,delta:1})}function y(S,x){u=ss.Replace;let R=Lh(E.location,S,x);h=p();let P=bv(R,h),N=E.createHref(R);c.replaceState(P,"",N),o&&d&&d({action:u,location:E.location,delta:0})}function w(S){let x=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof S=="string"?S:Au(S);return R=R.replace(/ $/,"%20"),sn(x,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,x)}let E={get action(){return u},get location(){return n(a,c)},listen(S){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Tv,m),d=S,()=>{a.removeEventListener(Tv,m),d=null}},createHref(S){return e(a,S)},createURL:w,encodeLocation(S){let x=w(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:y,go(S){return c.go(S)}};return E}var Av;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Av||(Av={}));function RE(n,e,t){return t===void 0&&(t="/"),PE(n,e,t)}function PE(n,e,t,r){let a=typeof e=="string"?Qa(e):e,o=Ga(a.pathname||"/",t);if(o==null)return null;let c=Qy(n);NE(c);let u=null;for(let d=0;u==null&&d<c.length;++d){let h=jE(o);u=VE(c[d],h)}return u}function Qy(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(o,c,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};d.relativePath.startsWith("/")&&(sn(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=os([r,d.relativePath]),p=t.concat(d);o.children&&o.children.length>0&&(sn(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Qy(o.children,e,p,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:kE(h,o.index),routesMeta:p})};return n.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))a(o,c);else for(let d of e_(o.path))a(o,c,d)}),e}function e_(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let c=e_(r.join("/")),u=[];return u.push(...c.map(d=>d===""?o:[o,d].join("/"))),a&&u.push(...c),u.map(d=>n.startsWith("/")&&d===""?"/":d)}function NE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:BE(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const LE=/^:[\w-]+$/,DE=3,IE=2,UE=1,FE=10,OE=-2,Cv=n=>n==="*";function kE(n,e){let t=n.split("/"),r=t.length;return t.some(Cv)&&(r+=OE),e&&(r+=IE),t.filter(a=>!Cv(a)).reduce((a,o)=>a+(LE.test(o)?DE:o===""?UE:FE),r)}function BE(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function VE(n,e,t){let{routesMeta:r}=n,a={},o="/",c=[];for(let u=0;u<r.length;++u){let d=r[u],h=u===r.length-1,p=o==="/"?e:e.slice(o.length)||"/",m=Dh({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),g=d.route;if(!m)return null;Object.assign(a,m.params),c.push({params:a,pathname:os([o,m.pathname]),pathnameBase:YE(os([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=os([o,m.pathnameBase]))}return c}function Dh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=zE(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],c=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((h,p,m)=>{let{paramName:g,isOptional:y}=p;if(g==="*"){let E=u[m]||"";c=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const w=u[m];return y&&!w?h[g]=void 0:h[g]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:c,pattern:n}}function zE(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),em(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d)=>(r.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function jE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return em(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ga(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const HE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GE=n=>HE.test(n);function WE(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Qa(n):n,o;if(t)if(GE(t))o=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),em(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?o=Rv(t.substring(1),"/"):o=Rv(t,e)}else o=e;return{pathname:o,search:qE(r),hash:$E(a)}}function Rv(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Uf(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function t_(n,e){let t=XE(n);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function n_(n,e,t,r){r===void 0&&(r=!1);let a;typeof n=="string"?a=Qa(n):(a=ll({},n),sn(!a.pathname||!a.pathname.includes("?"),Uf("?","pathname","search",a)),sn(!a.pathname||!a.pathname.includes("#"),Uf("#","pathname","hash",a)),sn(!a.search||!a.search.includes("#"),Uf("#","search","hash",a)));let o=n===""||a.pathname==="",c=o?"/":a.pathname,u;if(c==null)u=t;else{let m=e.length-1;if(!r&&c.startsWith("..")){let g=c.split("/");for(;g[0]==="..";)g.shift(),m-=1;a.pathname=g.join("/")}u=m>=0?e[m]:"/"}let d=WE(a,u),h=c&&c!=="/"&&c.endsWith("/"),p=(o||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}const os=n=>n.join("/").replace(/\/\/+/g,"/"),YE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),qE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$E=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function KE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const i_=["post","put","patch","delete"];new Set(i_);const ZE=["get",...i_];new Set(ZE);function cl(){return cl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},cl.apply(this,arguments)}const Bu=$.createContext(null),r_=$.createContext(null),us=$.createContext(null),Vu=$.createContext(null),ds=$.createContext({outlet:null,matches:[],isDataRoute:!1}),s_=$.createContext(null);function JE(n,e){let{relative:t}=e===void 0?{}:e;Sl()||sn(!1);let{basename:r,navigator:a}=$.useContext(us),{hash:o,pathname:c,search:u}=zu(n,{relative:t}),d=c;return r!=="/"&&(d=c==="/"?r:os([r,c])),a.createHref({pathname:d,search:u,hash:o})}function Sl(){return $.useContext(Vu)!=null}function Rr(){return Sl()||sn(!1),$.useContext(Vu).location}function a_(n){$.useContext(us).static||$.useLayoutEffect(n)}function o_(){let{isDataRoute:n}=$.useContext(ds);return n?f1():QE()}function QE(){Sl()||sn(!1);let n=$.useContext(Bu),{basename:e,future:t,navigator:r}=$.useContext(us),{matches:a}=$.useContext(ds),{pathname:o}=Rr(),c=JSON.stringify(t_(a,t.v7_relativeSplatPath)),u=$.useRef(!1);return a_(()=>{u.current=!0}),$.useCallback(function(h,p){if(p===void 0&&(p={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let m=n_(h,JSON.parse(c),o,p.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:os([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,c,o,n])}function e1(){let{matches:n}=$.useContext(ds),e=n[n.length-1];return e?e.params:{}}function zu(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=$.useContext(us),{matches:a}=$.useContext(ds),{pathname:o}=Rr(),c=JSON.stringify(t_(a,r.v7_relativeSplatPath));return $.useMemo(()=>n_(n,JSON.parse(c),o,t==="path"),[n,c,o,t])}function t1(n,e){return n1(n,e)}function n1(n,e,t,r){Sl()||sn(!1);let{navigator:a}=$.useContext(us),{matches:o}=$.useContext(ds),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let d=c?c.pathnameBase:"/";c&&c.route;let h=Rr(),p;if(e){var m;let S=typeof e=="string"?Qa(e):e;d==="/"||(m=S.pathname)!=null&&m.startsWith(d)||sn(!1),p=S}else p=h;let g=p.pathname||"/",y=g;if(d!=="/"){let S=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=RE(n,{pathname:y}),E=o1(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:os([d,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?d:os([d,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,t,r);return e&&E?$.createElement(Vu.Provider,{value:{location:cl({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:ss.Pop}},E):E}function i1(){let n=d1(),e=KE(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:a},t):null,null)}const r1=$.createElement(i1,null);class s1 extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?$.createElement(ds.Provider,{value:this.props.routeContext},$.createElement(s_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(n){let{routeContext:e,match:t,children:r}=n,a=$.useContext(Bu);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(ds.Provider,{value:e},r)}function o1(n,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var o;if(!t)return null;if(t.errors)n=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,u=(a=t)==null?void 0:a.errors;if(u!=null){let p=c.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);p>=0||sn(!1),c=c.slice(0,Math.min(c.length,p+1))}let d=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<c.length;p++){let m=c[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:y}=t,w=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){d=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((p,m,g)=>{let y,w=!1,E=null,S=null;t&&(y=u&&m.route.id?u[m.route.id]:void 0,E=m.route.errorElement||r1,d&&(h<0&&g===0?(h1("route-fallback"),w=!0,S=null):h===g&&(w=!0,S=m.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,g+1)),R=()=>{let P;return y?P=E:w?P=S:m.route.Component?P=$.createElement(m.route.Component,null):m.route.element?P=m.route.element:P=p,$.createElement(a1,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:t!=null},children:P})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?$.createElement(s1,{location:t.location,revalidation:t.revalidation,component:E,error:y,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):R()},null)}var l_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(l_||{}),c_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(c_||{});function l1(n){let e=$.useContext(Bu);return e||sn(!1),e}function c1(n){let e=$.useContext(r_);return e||sn(!1),e}function u1(n){let e=$.useContext(ds);return e||sn(!1),e}function u_(n){let e=u1(),t=e.matches[e.matches.length-1];return t.route.id||sn(!1),t.route.id}function d1(){var n;let e=$.useContext(s_),t=c1(),r=u_();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function f1(){let{router:n}=l1(l_.UseNavigateStable),e=u_(c_.UseNavigateStable),t=$.useRef(!1);return a_(()=>{t.current=!0}),$.useCallback(function(a,o){o===void 0&&(o={}),t.current&&(typeof a=="number"?n.navigate(a):n.navigate(a,cl({fromRouteId:e},o)))},[n,e])}const Pv={};function h1(n,e,t){Pv[n]||(Pv[n]=!0)}function p1(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function is(n){sn(!1)}function m1(n){let{basename:e="/",children:t=null,location:r,navigationType:a=ss.Pop,navigator:o,static:c=!1,future:u}=n;Sl()&&sn(!1);let d=e.replace(/^\/*/,"/"),h=$.useMemo(()=>({basename:d,navigator:o,static:c,future:cl({v7_relativeSplatPath:!1},u)}),[d,u,o,c]);typeof r=="string"&&(r=Qa(r));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:w="default"}=r,E=$.useMemo(()=>{let S=Ga(p,d);return S==null?null:{location:{pathname:S,search:m,hash:g,state:y,key:w},navigationType:a}},[d,p,m,g,y,w,a]);return E==null?null:$.createElement(us.Provider,{value:h},$.createElement(Vu.Provider,{children:t,value:E}))}function g1(n){let{children:e,location:t}=n;return t1(Ih(e),t)}new Promise(()=>{});function Ih(n,e){e===void 0&&(e=[]);let t=[];return $.Children.forEach(n,(r,a)=>{if(!$.isValidElement(r))return;let o=[...e,a];if(r.type===$.Fragment){t.push.apply(t,Ih(r.props.children,o));return}r.type!==is&&sn(!1),!r.props.index||!r.props.children||sn(!1);let c={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Ih(r.props.children,o)),t.push(c)}),t}function Cu(){return Cu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Cu.apply(this,arguments)}function d_(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function v1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function x1(n,e){return n.button===0&&(!e||e==="_self")&&!v1(n)}function Uh(n){return n===void 0&&(n=""),new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let r=n[t];return e.concat(Array.isArray(r)?r.map(a=>[t,a]):[[t,r]])},[]))}function y1(n,e){let t=Uh(n);return e&&e.forEach((r,a)=>{t.has(a)||e.getAll(a).forEach(o=>{t.append(a,o)})}),t}const _1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],S1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],M1="6";try{window.__reactRouterVersion=M1}catch{}const w1=$.createContext({isTransitioning:!1}),E1="startTransition",Nv=yE[E1];function T1(n){let{basename:e,children:t,future:r,window:a}=n,o=$.useRef();o.current==null&&(o.current=bE({window:a,v5Compat:!0}));let c=o.current,[u,d]=$.useState({action:c.action,location:c.location}),{v7_startTransition:h}=r||{},p=$.useCallback(m=>{h&&Nv?Nv(()=>d(m)):d(m)},[d,h]);return $.useLayoutEffect(()=>c.listen(p),[c,p]),$.useEffect(()=>p1(r),[r]),$.createElement(m1,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:c,future:r})}const b1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kn=$.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:o,replace:c,state:u,target:d,to:h,preventScrollReset:p,viewTransition:m}=e,g=d_(e,_1),{basename:y}=$.useContext(us),w,E=!1;if(typeof h=="string"&&A1.test(h)&&(w=h,b1))try{let P=new URL(window.location.href),N=h.startsWith("//")?new URL(P.protocol+h):new URL(h),C=Ga(N.pathname,y);N.origin===P.origin&&C!=null?h=C+N.search+N.hash:E=!0}catch{}let S=JE(h,{relative:a}),x=R1(h,{replace:c,state:u,target:d,preventScrollReset:p,relative:a,viewTransition:m});function R(P){r&&r(P),P.defaultPrevented||x(P)}return $.createElement("a",Cu({},g,{href:w||S,onClick:E||o?r:R,ref:t,target:d}))}),f_=$.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:c=!1,style:u,to:d,viewTransition:h,children:p}=e,m=d_(e,S1),g=zu(d,{relative:m.relative}),y=Rr(),w=$.useContext(r_),{navigator:E,basename:S}=$.useContext(us),x=w!=null&&N1(g)&&h===!0,R=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,P=y.pathname,N=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(P=P.toLowerCase(),N=N?N.toLowerCase():null,R=R.toLowerCase()),N&&S&&(N=Ga(N,S)||N);const C=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let I=P===R||!c&&P.startsWith(R)&&P.charAt(C)==="/",F=N!=null&&(N===R||!c&&N.startsWith(R)&&N.charAt(R.length)==="/"),V={isActive:I,isPending:F,isTransitioning:x},A=I?r:void 0,L;typeof o=="function"?L=o(V):L=[o,I?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let z=typeof u=="function"?u(V):u;return $.createElement(Kn,Cu({},m,{"aria-current":A,className:L,ref:t,style:z,to:d,viewTransition:h}),typeof p=="function"?p(V):p)});var Fh;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Fh||(Fh={}));var Lv;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Lv||(Lv={}));function C1(n){let e=$.useContext(Bu);return e||sn(!1),e}function R1(n,e){let{target:t,replace:r,state:a,preventScrollReset:o,relative:c,viewTransition:u}=e===void 0?{}:e,d=o_(),h=Rr(),p=zu(n,{relative:c});return $.useCallback(m=>{if(x1(m,t)){m.preventDefault();let g=r!==void 0?r:Au(h)===Au(p);d(n,{replace:g,state:a,preventScrollReset:o,relative:c,viewTransition:u})}},[h,d,p,r,a,t,n,o,c,u])}function P1(n){let e=$.useRef(Uh(n)),t=$.useRef(!1),r=Rr(),a=$.useMemo(()=>y1(r.search,t.current?null:e.current),[r.search]),o=o_(),c=$.useCallback((u,d)=>{const h=Uh(typeof u=="function"?u(a):u);t.current=!0,o("?"+h,d)},[o,a]);return[a,c]}function N1(n,e){e===void 0&&(e={});let t=$.useContext(w1);t==null&&sn(!1);let{basename:r}=C1(Fh.useViewTransitionState),a=zu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Ga(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=Ga(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Dh(a.pathname,c)!=null||Dh(a.pathname,o)!=null}const L1="modulepreload",D1=function(n){return"/"+n},Dv={},tm=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let d=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");a=d(t.map(h=>{if(h=D1(h),h in Dv)return;Dv[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":L1,p||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),p)return new Promise((y,w)=>{g.addEventListener("load",y),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return a.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},I1=$.lazy(()=>tm(()=>import("./Hero-CpN1VPOb.js"),[])),U1=$.lazy(()=>tm(()=>import("./Skills-VBp0B85H.js"),[])),F1=$.lazy(()=>tm(()=>import("./Projects-DWcny9hZ.js"),[])),Ff=({height:n="min-h-[60vh]"})=>M.jsx("div",{className:`w-full ${n} flex items-center justify-center`,children:M.jsx("div",{className:"h-10 w-10 rounded-full border border-white/20 border-t-white animate-spin"})});function O1(){return M.jsxs("main",{className:"w-full overflow-x-hidden",children:[M.jsx($.Suspense,{fallback:M.jsx(Ff,{height:"min-h-screen"}),children:M.jsx(I1,{})}),M.jsx($.Suspense,{fallback:M.jsx(Ff,{}),children:M.jsx(U1,{})}),M.jsx($.Suspense,{fallback:M.jsx(Ff,{}),children:M.jsx(F1,{})})]})}function k1(){return M.jsx("footer",{className:"mt-20 ",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-8",children:[M.jsxs("div",{className:"text-center md:text-left",children:[M.jsxs("h3",{className:"text-white font-semibold text-lg tracking-wide",children:["Kunal",M.jsx("span",{className:"text-white/60",children:".dev"})]}),M.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-sm leading-relaxed",children:"Building scalable CMS platforms, dashboards & production web systems."})]}),M.jsxs("div",{className:"flex flex-wrap justify-center md:justify-end gap-6 text-sm",children:[M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/",children:"Home"}),M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/about",children:"About"}),M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/skills",children:"Skills"}),M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/projects",children:"Projects"}),M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/blogs",children:"Blogs"}),M.jsx(Kn,{className:"text-white/70 hover:text-white transition",to:"/contact",children:"Contact"})]})]}),M.jsxs("div",{className:"mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm",children:[M.jsxs("p",{className:"text-gray-500 text-center sm:text-left",children:["© ",new Date().getFullYear()," Kunal Gupta. All rights reserved."]}),M.jsxs("div",{className:"flex items-center gap-6",children:[M.jsx("a",{href:"https://github.com/Kunal-666",target:"_blank",rel:"noreferrer",className:"text-white/60 hover:text-white transition",children:"GitHub"}),M.jsx("a",{href:"https://www.linkedin.com/in/kunal-gupta-webdev",target:"_blank",rel:"noreferrer",className:"text-white/60 hover:text-white transition",children:"LinkedIn"}),M.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-white/60 hover:text-white transition",children:"Back to top ↑"})]})]})]})})}const B1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V1=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Iv=n=>{const e=V1(n);return e.charAt(0).toUpperCase()+e.slice(1)},h_=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),z1=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var j1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const H1=$.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:c,...u},d)=>$.createElement("svg",{ref:d,...j1,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:h_("lucide",a),...!o&&!z1(u)&&{"aria-hidden":"true"},...u},[...c.map(([h,p])=>$.createElement(h,p)),...Array.isArray(o)?o:[o]]));const p_=(n,e)=>{const t=$.forwardRef(({className:r,...a},o)=>$.createElement(H1,{ref:o,iconNode:e,className:h_(`lucide-${B1(Iv(n))}`,`lucide-${n}`,r),...a}));return t.displayName=Iv(n),t};const G1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],W1=p_("menu",G1);const X1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Uv=p_("x",X1);function Y1(){const[n,e]=$.useState(!1),t=Rr(),r=$.useRef(null);return $.useEffect(()=>{e(!1)},[t.pathname]),$.useEffect(()=>{function a(o){n&&r.current&&!r.current.contains(o.target)&&e(!1)}return window.addEventListener("mousedown",a),()=>window.removeEventListener("mousedown",a)},[n]),M.jsxs("nav",{className:"fixed top-0 w-full z-50",children:[M.jsx("div",{className:"backdrop-blur-md bg-black/15 ",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white",children:[M.jsxs(Kn,{to:"/",className:"font-bold text-lg tracking-wide",children:["Kunal",M.jsx("span",{className:"text-white/70",children:".dev"})]}),M.jsxs("div",{className:"hidden md:flex items-center gap-7 text-sm font-medium",children:[M.jsx(xa,{to:"/",children:"Home"}),M.jsx(xa,{to:"/about",children:"About"}),M.jsx(xa,{to:"/skills",children:"Skills"}),M.jsx(xa,{to:"/projects",children:"Projects"}),M.jsx(xa,{to:"/blogs",children:"Blogs"}),M.jsx(xa,{to:"/contact",children:"Contact"})]}),M.jsx("button",{onClick:()=>e(a=>!a),className:"md:hidden p-2 rounded-lg hover:bg-white/10 transition","aria-label":"Toggle Menu",children:n?M.jsx(Uv,{size:24}):M.jsx(W1,{size:24})})]})}),n&&M.jsxs("div",{className:"md:hidden fixed inset-0 z-50",children:[M.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),M.jsxs("div",{ref:r,className:`absolute top-0 right-0 h-full w-[78%] max-w-xs\r
                       bg-black/70 backdrop-blur-xl border-l border-white/10\r
                       px-6 py-6 animate-slideIn`,children:[M.jsxs("div",{className:"flex items-center justify-between mb-6",children:[M.jsx("div",{className:"text-white font-bold text-lg tracking-wide",children:"Menu"}),M.jsx("button",{onClick:()=>e(!1),className:"p-2 rounded-lg hover:bg-white/10 transition","aria-label":"Close Menu",children:M.jsx(Uv,{size:22})})]}),M.jsxs("div",{className:"flex flex-col gap-5 text-white",children:[M.jsx(ya,{to:"/",children:"Home"}),M.jsx(ya,{to:"/about",children:"About"}),M.jsx(ya,{to:"/skills",children:"Skills"}),M.jsx(ya,{to:"/projects",children:"Projects"}),M.jsx(ya,{to:"/blogs",children:"Blogs"}),M.jsx(ya,{to:"/contact",children:"Contact"})]}),M.jsxs("div",{className:"mt-10 text-xs text-white/40",children:["© ",new Date().getFullYear()," Kunal Gupta"]})]})]}),M.jsx("style",{children:`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 220ms ease-out;
          }
        `})]})}function xa({to:n,children:e}){return M.jsx(f_,{to:n,className:({isActive:t})=>`relative transition ${t?"text-white":"text-white/70 hover:text-white"}`,children:({isActive:t})=>M.jsxs(M.Fragment,{children:[e,M.jsx("span",{className:`absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300
              ${t?"w-full bg-white":"w-0 bg-white/70 group-hover:w-full"}
            `})]})})}function ya({to:n,children:e}){return M.jsx(f_,{to:n,className:({isActive:t})=>`text-lg font-medium transition flex items-center justify-between
         ${t?"text-white":"text-white/70 hover:text-white"}`,children:({isActive:t})=>M.jsxs(M.Fragment,{children:[M.jsx("span",{children:e}),M.jsx("span",{className:`h-2 w-2 rounded-full transition ${t?"bg-white":"bg-white/20"}`})]})})}const nm=$.createContext({});function im(n){const e=$.useRef(null);return e.current===null&&(e.current=n()),e.current}const rm=typeof window<"u",m_=rm?$.useLayoutEffect:$.useEffect,ju=$.createContext(null);function sm(n,e){n.indexOf(e)===-1&&n.push(e)}function am(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const wr=(n,e,t)=>t>e?e:t<n?n:t;let om=()=>{};const Er={},g_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function v_(n){return typeof n=="object"&&n!==null}const x_=n=>/^0[^.\s]+$/u.test(n);function lm(n){let e;return()=>(e===void 0&&(e=n()),e)}const bi=n=>n,q1=(n,e)=>t=>e(n(t)),Ml=(...n)=>n.reduce(q1),ul=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class cm{constructor(){this.subscriptions=[]}add(e){return sm(this.subscriptions,e),()=>am(this.subscriptions,e)}notify(e,t,r){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](e,t,r);else for(let o=0;o<a;o++){const c=this.subscriptions[o];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tr=n=>n*1e3,Ti=n=>n/1e3;function y_(n,e){return e?n*(1e3/e):0}const __=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,$1=1e-7,K1=12;function Z1(n,e,t,r,a){let o,c,u=0;do c=e+(t-e)/2,o=__(c,r,a)-n,o>0?t=c:e=c;while(Math.abs(o)>$1&&++u<K1);return c}function wl(n,e,t,r){if(n===e&&t===r)return bi;const a=o=>Z1(o,0,1,n,t);return o=>o===0||o===1?o:__(a(o),e,r)}const S_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,M_=n=>e=>1-n(1-e),w_=wl(.33,1.53,.69,.99),um=M_(w_),E_=S_(um),T_=n=>(n*=2)<1?.5*um(n):.5*(2-Math.pow(2,-10*(n-1))),dm=n=>1-Math.sin(Math.acos(n)),b_=M_(dm),A_=S_(dm),J1=wl(.42,0,1,1),Q1=wl(0,0,.58,1),C_=wl(.42,0,.58,1),eT=n=>Array.isArray(n)&&typeof n[0]!="number",R_=n=>Array.isArray(n)&&typeof n[0]=="number",tT={linear:bi,easeIn:J1,easeInOut:C_,easeOut:Q1,circIn:dm,circInOut:A_,circOut:b_,backIn:um,backInOut:E_,backOut:w_,anticipate:T_},nT=n=>typeof n=="string",Fv=n=>{if(R_(n)){om(n.length===4);const[e,t,r,a]=n;return wl(e,t,r,a)}else if(nT(n))return tT[n];return n},Hc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iT(n,e){let t=new Set,r=new Set,a=!1,o=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(u)}const h={schedule:(p,m=!1,g=!1)=>{const w=g&&a?t:r;return m&&c.add(p),w.has(p)||w.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(u=p,a){o=!0;return}a=!0,[t,r]=[r,t],t.forEach(d),t.clear(),a=!1,o&&(o=!1,h.process(p))}};return h}const rT=40;function P_(n,e){let t=!1,r=!0;const a={delta:0,timestamp:0,isProcessing:!1},o=()=>t=!0,c=Hc.reduce((P,N)=>(P[N]=iT(o),P),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:m,preRender:g,render:y,postRender:w}=c,E=()=>{const P=Er.useManualTiming?a.timestamp:performance.now();t=!1,Er.useManualTiming||(a.delta=r?1e3/60:Math.max(Math.min(P-a.timestamp,rT),1)),a.timestamp=P,a.isProcessing=!0,u.process(a),d.process(a),h.process(a),p.process(a),m.process(a),g.process(a),y.process(a),w.process(a),a.isProcessing=!1,t&&e&&(r=!1,n(E))},S=()=>{t=!0,r=!0,a.isProcessing||n(E)};return{schedule:Hc.reduce((P,N)=>{const C=c[N];return P[N]=(I,F=!1,V=!1)=>(t||S(),C.schedule(I,F,V)),P},{}),cancel:P=>{for(let N=0;N<Hc.length;N++)c[Hc[N]].cancel(P)},state:a,steps:c}}const{schedule:$t,cancel:ls,state:bn,steps:Of}=P_(typeof requestAnimationFrame<"u"?requestAnimationFrame:bi,!0);let vu;function sT(){vu=void 0}const si={now:()=>(vu===void 0&&si.set(bn.isProcessing||Er.useManualTiming?bn.timestamp:performance.now()),vu),set:n=>{vu=n,queueMicrotask(sT)}},N_=n=>e=>typeof e=="string"&&e.startsWith(n),L_=N_("--"),aT=N_("var(--"),fm=n=>aT(n)?oT.test(n.split("/*")[0].trim()):!1,oT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,eo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},dl={...eo,transform:n=>wr(0,1,n)},Gc={...eo,default:1},nl=n=>Math.round(n*1e5)/1e5,hm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lT(n){return n==null}const cT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pm=(n,e)=>t=>!!(typeof t=="string"&&cT.test(t)&&t.startsWith(n)||e&&!lT(t)&&Object.prototype.hasOwnProperty.call(t,e)),D_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[a,o,c,u]=r.match(hm);return{[n]:parseFloat(a),[e]:parseFloat(o),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},uT=n=>wr(0,255,n),kf={...eo,transform:n=>Math.round(uT(n))},js={test:pm("rgb","red"),parse:D_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+kf.transform(n)+", "+kf.transform(e)+", "+kf.transform(t)+", "+nl(dl.transform(r))+")"};function dT(n){let e="",t="",r="",a="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),a=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),a=n.substring(4,5),e+=e,t+=t,r+=r,a+=a),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:a?parseInt(a,16)/255:1}}const Oh={test:pm("#"),parse:dT,transform:js.transform},El=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),rs=El("deg"),nr=El("%"),Ve=El("px"),fT=El("vh"),hT=El("vw"),Ov={...nr,parse:n=>nr.parse(n)/100,transform:n=>nr.transform(n*100)},Fa={test:pm("hsl","hue"),parse:D_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+nr.transform(nl(e))+", "+nr.transform(nl(t))+", "+nl(dl.transform(r))+")"},cn={test:n=>js.test(n)||Oh.test(n)||Fa.test(n),parse:n=>js.test(n)?js.parse(n):Fa.test(n)?Fa.parse(n):Oh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?js.transform(n):Fa.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},pT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mT(n){return isNaN(n)&&typeof n=="string"&&(n.match(hm)?.length||0)+(n.match(pT)?.length||0)>0}const I_="number",U_="color",gT="var",vT="var(",kv="${}",xT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fl(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},a=[];let o=0;const u=e.replace(xT,d=>(cn.test(d)?(r.color.push(o),a.push(U_),t.push(cn.parse(d))):d.startsWith(vT)?(r.var.push(o),a.push(gT),t.push(d)):(r.number.push(o),a.push(I_),t.push(parseFloat(d))),++o,kv)).split(kv);return{values:t,split:u,indexes:r,types:a}}function F_(n){return fl(n).values}function O_(n){const{split:e,types:t}=fl(n),r=e.length;return a=>{let o="";for(let c=0;c<r;c++)if(o+=e[c],a[c]!==void 0){const u=t[c];u===I_?o+=nl(a[c]):u===U_?o+=cn.transform(a[c]):o+=a[c]}return o}}const yT=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n;function _T(n){const e=F_(n);return O_(n)(e.map(yT))}const cs={test:mT,parse:F_,createTransformer:O_,getAnimatableNone:_T};function Bf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function ST({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let a=0,o=0,c=0;if(!e)a=o=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;a=Bf(d,u,n+1/3),o=Bf(d,u,n),c=Bf(d,u,n-1/3)}return{red:Math.round(a*255),green:Math.round(o*255),blue:Math.round(c*255),alpha:r}}function Ru(n,e){return t=>t>0?e:n}const en=(n,e,t)=>n+(e-n)*t,Vf=(n,e,t)=>{const r=n*n,a=t*(e*e-r)+r;return a<0?0:Math.sqrt(a)},MT=[Oh,js,Fa],wT=n=>MT.find(e=>e.test(n));function Bv(n){const e=wT(n);if(!e)return!1;let t=e.parse(n);return e===Fa&&(t=ST(t)),t}const Vv=(n,e)=>{const t=Bv(n),r=Bv(e);if(!t||!r)return Ru(n,e);const a={...t};return o=>(a.red=Vf(t.red,r.red,o),a.green=Vf(t.green,r.green,o),a.blue=Vf(t.blue,r.blue,o),a.alpha=en(t.alpha,r.alpha,o),js.transform(a))},kh=new Set(["none","hidden"]);function ET(n,e){return kh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function TT(n,e){return t=>en(n,e,t)}function mm(n){return typeof n=="number"?TT:typeof n=="string"?fm(n)?Ru:cn.test(n)?Vv:CT:Array.isArray(n)?k_:typeof n=="object"?cn.test(n)?Vv:bT:Ru}function k_(n,e){const t=[...n],r=t.length,a=n.map((o,c)=>mm(o)(o,e[c]));return o=>{for(let c=0;c<r;c++)t[c]=a[c](o);return t}}function bT(n,e){const t={...n,...e},r={};for(const a in t)n[a]!==void 0&&e[a]!==void 0&&(r[a]=mm(n[a])(n[a],e[a]));return a=>{for(const o in r)t[o]=r[o](a);return t}}function AT(n,e){const t=[],r={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const o=e.types[a],c=n.indexes[o][r[o]],u=n.values[c]??0;t[a]=u,r[o]++}return t}const CT=(n,e)=>{const t=cs.createTransformer(e),r=fl(n),a=fl(e);return r.indexes.var.length===a.indexes.var.length&&r.indexes.color.length===a.indexes.color.length&&r.indexes.number.length>=a.indexes.number.length?kh.has(n)&&!a.values.length||kh.has(e)&&!r.values.length?ET(n,e):Ml(k_(AT(r,a),a.values),t):Ru(n,e)};function B_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?en(n,e,t):mm(n)(n,e)}const RT=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>$t.update(e,t),stop:()=>ls(e),now:()=>bn.isProcessing?bn.timestamp:si.now()}},V_=(n,e,t=10)=>{let r="";const a=Math.max(Math.round(e/t),2);for(let o=0;o<a;o++)r+=Math.round(n(o/(a-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Pu=2e4;function gm(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Pu;)e+=t,r=n.next(e);return e>=Pu?1/0:e}function PT(n,e=100,t){const r=t({...n,keyframes:[0,e]}),a=Math.min(gm(r),Pu);return{type:"keyframes",ease:o=>r.next(a*o).value/e,duration:Ti(a)}}const NT=5;function z_(n,e,t){const r=Math.max(e-NT,0);return y_(t-n(r),e-r)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zf=.001;function LT({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:r=nn.mass}){let a,o,c=1-e;c=wr(nn.minDamping,nn.maxDamping,c),n=wr(nn.minDuration,nn.maxDuration,Ti(n)),c<1?(a=h=>{const p=h*c,m=p*n,g=p-t,y=Bh(h,c),w=Math.exp(-m);return zf-g/y*w},o=h=>{const m=h*c*n,g=m*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,w=Math.exp(-m),E=Bh(Math.pow(h,2),c);return(-a(h)+zf>0?-1:1)*((g-y)*w)/E}):(a=h=>{const p=Math.exp(-h*n),m=(h-t)*n+1;return-zf+p*m},o=h=>{const p=Math.exp(-h*n),m=(t-h)*(n*n);return p*m});const u=5/n,d=IT(a,o,u);if(n=tr(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const DT=12;function IT(n,e,t){let r=t;for(let a=1;a<DT;a++)r=r-n(r)/e(r);return r}function Bh(n,e){return n*Math.sqrt(1-e*e)}const UT=["duration","bounce"],FT=["stiffness","damping","mass"];function zv(n,e){return e.some(t=>n[t]!==void 0)}function OT(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!zv(n,FT)&&zv(n,UT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),a=r*r,o=2*wr(.05,1,1-(n.bounce||0))*Math.sqrt(a);e={...e,mass:nn.mass,stiffness:a,damping:o}}else{const t=LT(n);e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function Nu(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:a}=t;const o=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:o},{stiffness:d,damping:h,mass:p,duration:m,velocity:g,isResolvedFromDuration:y}=OT({...t,velocity:-Ti(t.velocity||0)}),w=g||0,E=h/(2*Math.sqrt(d*p)),S=c-o,x=Ti(Math.sqrt(d/p)),R=Math.abs(S)<5;r||(r=R?nn.restSpeed.granular:nn.restSpeed.default),a||(a=R?nn.restDelta.granular:nn.restDelta.default);let P;if(E<1){const C=Bh(x,E);P=I=>{const F=Math.exp(-E*x*I);return c-F*((w+E*x*S)/C*Math.sin(C*I)+S*Math.cos(C*I))}}else if(E===1)P=C=>c-Math.exp(-x*C)*(S+(w+x*S)*C);else{const C=x*Math.sqrt(E*E-1);P=I=>{const F=Math.exp(-E*x*I),V=Math.min(C*I,300);return c-F*((w+E*x*S)*Math.sinh(V)+C*S*Math.cosh(V))/C}}const N={calculatedDuration:y&&m||null,next:C=>{const I=P(C);if(y)u.done=C>=m;else{let F=C===0?w:0;E<1&&(F=C===0?tr(w):z_(P,C,I));const V=Math.abs(F)<=r,A=Math.abs(c-I)<=a;u.done=V&&A}return u.value=u.done?c:I,u},toString:()=>{const C=Math.min(gm(N),Pu),I=V_(F=>N.next(C*F).value,C,30);return C+"ms "+I},toTransition:()=>{}};return N}Nu.applyToOptions=n=>{const e=PT(n,100,Nu);return n.ease=e.ease,n.duration=tr(e.duration),n.type="keyframes",n};function Vh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const m=n[0],g={done:!1,value:m},y=V=>u!==void 0&&V<u||d!==void 0&&V>d,w=V=>u===void 0?d:d===void 0||Math.abs(u-V)<Math.abs(d-V)?u:d;let E=t*e;const S=m+E,x=c===void 0?S:c(S);x!==S&&(E=x-m);const R=V=>-E*Math.exp(-V/r),P=V=>x+R(V),N=V=>{const A=R(V),L=P(V);g.done=Math.abs(A)<=h,g.value=g.done?x:L};let C,I;const F=V=>{y(g.value)&&(C=V,I=Nu({keyframes:[g.value,w(g.value)],velocity:z_(P,V,g.value),damping:a,stiffness:o,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:V=>{let A=!1;return!I&&C===void 0&&(A=!0,N(V),F(V)),C!==void 0&&V>=C?I.next(V-C):(!A&&N(V),g)}}}function kT(n,e,t){const r=[],a=t||Er.mix||B_,o=n.length-1;for(let c=0;c<o;c++){let u=a(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||bi:e;u=Ml(d,u)}r.push(u)}return r}function BT(n,e,{clamp:t=!0,ease:r,mixer:a}={}){const o=n.length;if(om(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[o-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=kT(e,r,a),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let m=0;if(d>1)for(;m<n.length-2&&!(p<n[m+1]);m++);const g=ul(n[m],n[m+1],p);return u[m](g)};return t?p=>h(wr(n[0],n[o-1],p)):h}function VT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const a=ul(0,e,r);n.push(en(t,1,a))}}function zT(n){const e=[0];return VT(e,n.length-1),e}function jT(n,e){return n.map(t=>t*e)}function HT(n,e){return n.map(()=>e||C_).splice(0,n.length-1)}function il({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const a=eT(r)?r.map(Fv):Fv(r),o={done:!1,value:e[0]},c=jT(t&&t.length===e.length?t:zT(e),n),u=BT(c,e,{ease:Array.isArray(a)?a:HT(e,a)});return{calculatedDuration:n,next:d=>(o.value=u(d),o.done=d>=n,o)}}const GT=n=>n!==null;function vm(n,{repeat:e,repeatType:t="loop"},r,a=1){const o=n.filter(GT),u=a<0||e&&t!=="loop"&&e%2===1?0:o.length-1;return!u||r===void 0?o[u]:r}const WT={decay:Vh,inertia:Vh,tween:il,keyframes:il,spring:Nu};function j_(n){typeof n.type=="string"&&(n.type=WT[n.type])}class xm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const XT=n=>n/100;class ym extends xm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==si.now()&&this.tick(si.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;j_(e);const{type:t=il,repeat:r=0,repeatDelay:a=0,repeatType:o,velocity:c=0}=e;let{keyframes:u}=e;const d=t||il;d!==il&&typeof u[0]!="number"&&(this.mixKeyframes=Ml(XT,B_(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});o==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=gm(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+a,this.totalDuration=this.resolvedDuration*(r+1)-a,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:a,mixKeyframes:o,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:m,repeatType:g,repeatDelay:y,type:w,onUpdate:E,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-a/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const x=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?x<0:x>a;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let P=this.currentTime,N=r;if(m){const V=Math.min(this.currentTime,a)/u;let A=Math.floor(V),L=V%1;!L&&V>=1&&(L=1),L===1&&A--,A=Math.min(A,m+1),A%2&&(g==="reverse"?(L=1-L,y&&(L-=y/u)):g==="mirror"&&(N=c)),P=wr(0,1,L)*u}const C=R?{done:!1,value:p[0]}:N.next(P);o&&(C.value=o(C.value));let{done:I}=C;!R&&d!==null&&(I=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&w!==Vh&&(C.value=vm(p,this.options,S,this.speed)),E&&E(C.value),F&&this.finish(),C}then(e,t){return this.finished.then(e,t)}get duration(){return Ti(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ti(e)}get time(){return Ti(this.currentTime)}set time(e){e=tr(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(si.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ti(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=RT,startTime:t}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(si.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function YT(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Hs=n=>n*180/Math.PI,zh=n=>{const e=Hs(Math.atan2(n[1],n[0]));return jh(e)},qT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:zh,rotateZ:zh,skewX:n=>Hs(Math.atan(n[1])),skewY:n=>Hs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},jh=n=>(n=n%360,n<0&&(n+=360),n),jv=zh,Hv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Gv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),$T={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Hv,scaleY:Gv,scale:n=>(Hv(n)+Gv(n))/2,rotateX:n=>jh(Hs(Math.atan2(n[6],n[5]))),rotateY:n=>jh(Hs(Math.atan2(-n[2],n[0]))),rotateZ:jv,rotate:jv,skewX:n=>Hs(Math.atan(n[4])),skewY:n=>Hs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Hh(n){return n.includes("scale")?1:0}function Gh(n,e){if(!n||n==="none")return Hh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,a;if(t)r=$T,a=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=qT,a=u}if(!a)return Hh(e);const o=r[e],c=a[1].split(",").map(ZT);return typeof o=="function"?o(c):c[o]}const KT=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Gh(t,e)};function ZT(n){return parseFloat(n.trim())}const to=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],no=new Set(to),Wv=n=>n===eo||n===Ve,JT=new Set(["x","y","z"]),QT=to.filter(n=>!JT.has(n));function eb(n){const e=[];return QT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ws={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Gh(e,"x"),y:(n,{transform:e})=>Gh(e,"y")};Ws.translateX=Ws.x;Ws.translateY=Ws.y;const Xs=new Set;let Wh=!1,Xh=!1,Yh=!1;function H_(){if(Xh){const n=Array.from(Xs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const a=eb(r);a.length&&(t.set(r,a),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const a=t.get(r);a&&a.forEach(([o,c])=>{r.getValue(o)?.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Xh=!1,Wh=!1,Xs.forEach(n=>n.complete(Yh)),Xs.clear()}function G_(){Xs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Xh=!0)})}function tb(){Yh=!0,G_(),H_(),Yh=!1}class _m{constructor(e,t,r,a,o,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=a,this.element=o,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Xs.add(this),Wh||(Wh=!0,$t.read(G_),$t.resolveKeyframes(H_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:a}=this;if(e[0]===null){const o=a?.get(),c=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),a&&o===void 0&&a.set(e[0])}YT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Xs.delete(this)}cancel(){this.state==="scheduled"&&(Xs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nb=n=>n.startsWith("--");function ib(n,e,t){nb(e)?n.style.setProperty(e,t):n.style[e]=t}const rb=lm(()=>window.ScrollTimeline!==void 0),sb={};function ab(n,e){const t=lm(n);return()=>sb[e]??t()}const W_=ab(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qo=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Xv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qo([0,.65,.55,1]),circOut:Qo([.55,0,1,.45]),backIn:Qo([.31,.01,.66,-.59]),backOut:Qo([.33,1.53,.69,.99])};function X_(n,e){if(n)return typeof n=="function"?W_()?V_(n,e):"ease-out":R_(n)?Qo(n):Array.isArray(n)?n.map(t=>X_(t,e)||Xv.easeOut):Xv[n]}function ob(n,e,t,{delay:r=0,duration:a=300,repeat:o=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const m=X_(u,a);Array.isArray(m)&&(p.easing=m);const g={delay:r,duration:a,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:o+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function Y_(n){return typeof n=="function"&&"applyToOptions"in n}function lb({type:n,...e}){return Y_(n)&&W_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class cb extends xm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:a,pseudoElement:o,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!o,this.allowFlatten=c,this.options=e,om(typeof e.type!="string");const h=lb(e);this.animation=ob(t,r,a,h,o),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const p=vm(a,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(p):ib(t,r,p),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Ti(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ti(e)}get time(){return Ti(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=tr(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&rb()?(this.animation.timeline=e,bi):t(this)}}const q_={anticipate:T_,backInOut:E_,circInOut:A_};function ub(n){return n in q_}function db(n){typeof n.ease=="string"&&ub(n.ease)&&(n.ease=q_[n.ease])}const Yv=10;class fb extends cb{constructor(e){db(e),j_(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:a,element:o,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new ym({...c,autoplay:!1}),d=tr(this.finishedTime??this.time);t.setWithVelocity(u.sample(d-Yv).value,u.sample(d).value,Yv),u.stop()}}const qv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(cs.test(n)||n==="0")&&!n.startsWith("url("));function hb(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function pb(n,e,t,r){const a=n[0];if(a===null)return!1;if(e==="display"||e==="visibility")return!0;const o=n[n.length-1],c=qv(a,e),u=qv(o,e);return!c||!u?!1:hb(n)||(t==="spring"||Y_(t))&&r}function qh(n){n.duration=0,n.type="keyframes"}const mb=new Set(["opacity","clipPath","filter","transform"]),gb=lm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vb(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:a,damping:o,type:c}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return gb()&&t&&mb.has(t)&&(t!=="transform"||!h)&&!d&&!r&&a!=="mirror"&&o!==0&&c!=="inertia"}const xb=40;class yb extends xm{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...m}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=si.now();const g={autoplay:e,delay:t,type:r,repeat:a,repeatDelay:o,repeatType:c,name:d,motionValue:h,element:p,...m},y=p?.KeyframeResolver||_m;this.keyframeResolver=new y(u,(w,E,S)=>this.onKeyframesResolved(w,E,g,!S),d,h,p),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,a){this.keyframeResolver=void 0;const{name:o,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=si.now(),pb(e,o,c,u)||((Er.instantAnimations||!d)&&p?.(vm(e,r,t)),e[0]=e[e.length-1],qh(r),r.repeat=0);const g={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>xb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},y=!h&&vb(g)?new fb({...g,element:g.motionValue.owner.current}):new ym(g);y.finished.then(()=>this.notifyFinished()).catch(bi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),tb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const _b=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Sb(n){const e=_b.exec(n);if(!e)return[,];const[,t,r,a]=e;return[`--${t??r}`,a]}function $_(n,e,t=1){const[r,a]=Sb(n);if(!r)return;const o=window.getComputedStyle(e).getPropertyValue(r);if(o){const c=o.trim();return g_(c)?parseFloat(c):c}return fm(a)?$_(a,e,t+1):a}function Sm(n,e){return n?.[e]??n?.default??n}const K_=new Set(["width","height","top","left","right","bottom",...to]),Mb={test:n=>n==="auto",parse:n=>n},Z_=n=>e=>e.test(n),J_=[eo,Ve,nr,rs,hT,fT,Mb],$v=n=>J_.find(Z_(n));function wb(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||x_(n):!0}const Eb=new Set(["brightness","contrast","saturate","opacity"]);function Tb(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(hm)||[];if(!r)return n;const a=t.replace(r,"");let o=Eb.has(e)?1:0;return r!==t&&(o*=100),e+"("+o+a+")"}const bb=/\b([a-z-]*)\(.*?\)/gu,$h={...cs,getAnimatableNone:n=>{const e=n.match(bb);return e?e.map(Tb).join(" "):n}},Kv={...eo,transform:Math.round},Ab={rotate:rs,rotateX:rs,rotateY:rs,rotateZ:rs,scale:Gc,scaleX:Gc,scaleY:Gc,scaleZ:Gc,skew:rs,skewX:rs,skewY:rs,distance:Ve,translateX:Ve,translateY:Ve,translateZ:Ve,x:Ve,y:Ve,z:Ve,perspective:Ve,transformPerspective:Ve,opacity:dl,originX:Ov,originY:Ov,originZ:Ve},Mm={borderWidth:Ve,borderTopWidth:Ve,borderRightWidth:Ve,borderBottomWidth:Ve,borderLeftWidth:Ve,borderRadius:Ve,radius:Ve,borderTopLeftRadius:Ve,borderTopRightRadius:Ve,borderBottomRightRadius:Ve,borderBottomLeftRadius:Ve,width:Ve,maxWidth:Ve,height:Ve,maxHeight:Ve,top:Ve,right:Ve,bottom:Ve,left:Ve,inset:Ve,insetBlock:Ve,insetBlockStart:Ve,insetBlockEnd:Ve,insetInline:Ve,insetInlineStart:Ve,insetInlineEnd:Ve,padding:Ve,paddingTop:Ve,paddingRight:Ve,paddingBottom:Ve,paddingLeft:Ve,paddingBlock:Ve,paddingBlockStart:Ve,paddingBlockEnd:Ve,paddingInline:Ve,paddingInlineStart:Ve,paddingInlineEnd:Ve,margin:Ve,marginTop:Ve,marginRight:Ve,marginBottom:Ve,marginLeft:Ve,marginBlock:Ve,marginBlockStart:Ve,marginBlockEnd:Ve,marginInline:Ve,marginInlineStart:Ve,marginInlineEnd:Ve,backgroundPositionX:Ve,backgroundPositionY:Ve,...Ab,zIndex:Kv,fillOpacity:dl,strokeOpacity:dl,numOctaves:Kv},Cb={...Mm,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:$h,WebkitFilter:$h},Q_=n=>Cb[n];function eS(n,e){let t=Q_(n);return t!==$h&&(t=cs),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Rb=new Set(["auto","none","0"]);function Pb(n,e,t){let r=0,a;for(;r<n.length&&!a;){const o=n[r];typeof o=="string"&&!Rb.has(o)&&fl(o).values.length&&(a=n[r]),r++}if(a&&t)for(const o of e)n[o]=eS(t,a)}class Nb extends _m{constructor(e,t,r,a,o){super(e,t,r,a,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),fm(h))){const p=$_(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!K_.has(r)||e.length!==2)return;const[a,o]=e,c=$v(a),u=$v(o);if(c!==u)if(Wv(c)&&Wv(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else Ws[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let a=0;a<e.length;a++)(e[a]===null||wb(e[a]))&&r.push(a);r.length&&Pb(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ws[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const a=t[t.length-1];a!==void 0&&e.getValue(r,a).jump(a,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const a=e.getValue(t);a&&a.jump(this.measuredOrigin,!1);const o=r.length-1,c=r[o];r[o]=Ws[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([u,d])=>{e.getValue(u).set(d)}),this.resolveNoneKeyframes()}}function Lb(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const a=t?.[n]??r.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}const tS=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function nS(n){return v_(n)&&"offsetHeight"in n}const Zv=30,Db=n=>!isNaN(parseFloat(n)),Jv={current:void 0};class Ib{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const a=si.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=si.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Db(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new cm);const r=this.events[e].add(t);return e==="change"?()=>{r(),$t.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Jv.current&&Jv.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=si.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Zv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Zv);return y_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wa(n,e){return new Ib(n,e)}const{schedule:wm}=P_(queueMicrotask,!1),ki={x:!1,y:!1};function iS(){return ki.x||ki.y}function Ub(n){return n==="x"||n==="y"?ki[n]?null:(ki[n]=!0,()=>{ki[n]=!1}):ki.x||ki.y?null:(ki.x=ki.y=!0,()=>{ki.x=ki.y=!1})}function rS(n,e){const t=Lb(n),r=new AbortController,a={passive:!0,...e,signal:r.signal};return[t,a,()=>r.abort()]}function Qv(n){return!(n.pointerType==="touch"||iS())}function Fb(n,e,t={}){const[r,a,o]=rS(n,t),c=u=>{if(!Qv(u))return;const{target:d}=u,h=e(d,u);if(typeof h!="function"||!d)return;const p=m=>{Qv(m)&&(h(m),d.removeEventListener("pointerleave",p))};d.addEventListener("pointerleave",p,a)};return r.forEach(u=>{u.addEventListener("pointerenter",c,a)}),o}const sS=(n,e)=>e?n===e?!0:sS(n,e.parentElement):!1,Em=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ob=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kb(n){return Ob.has(n.tagName)||n.tabIndex!==-1}const xu=new WeakSet;function ex(n){return e=>{e.key==="Enter"&&n(e)}}function jf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Bb=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=ex(()=>{if(xu.has(t))return;jf(t,"down");const a=ex(()=>{jf(t,"up")}),o=()=>jf(t,"cancel");t.addEventListener("keyup",a,e),t.addEventListener("blur",o,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function tx(n){return Em(n)&&!iS()}function Vb(n,e,t={}){const[r,a,o]=rS(n,t),c=u=>{const d=u.currentTarget;if(!tx(u))return;xu.add(d);const h=e(d,u),p=(y,w)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),xu.has(d)&&xu.delete(d),tx(y)&&typeof h=="function"&&h(y,{success:w})},m=y=>{p(y,d===window||d===document||t.useGlobalTarget||sS(d,y.target))},g=y=>{p(y,!1)};window.addEventListener("pointerup",m,a),window.addEventListener("pointercancel",g,a)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,a),nS(u)&&(u.addEventListener("focus",h=>Bb(h,a)),!kb(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),o}function aS(n){return v_(n)&&"ownerSVGElement"in n}function zb(n){return aS(n)&&n.tagName==="svg"}const Vn=n=>!!(n&&n.getVelocity),jb=[...J_,cn,cs],Hb=n=>jb.find(Z_(n)),Tm=$.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function nx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Gb(...n){return e=>{let t=!1;const r=n.map(a=>{const o=nx(a,e);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():nx(n[a],null)}}}}function Wb(...n){return $.useCallback(Gb(...n),n)}class Xb extends $.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=t.offsetParent,a=nS(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Yb({children:n,isPresent:e,anchorX:t,root:r}){const a=$.useId(),o=$.useRef(null),c=$.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=$.useContext(Tm),d=Wb(o,n?.ref);return $.useInsertionEffect(()=>{const{width:h,height:p,top:m,left:g,right:y}=c.current;if(e||!o.current||!h||!p)return;const w=t==="left"?`left: ${g}`:`right: ${y}`;o.current.dataset.motionPopId=a;const E=document.createElement("style");u&&(E.nonce=u);const S=r??document.head;return S.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{S.contains(E)&&S.removeChild(E)}},[e]),M.jsx(Xb,{isPresent:e,childRef:o,sizeRef:c,children:$.cloneElement(n,{ref:d})})}const qb=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:a,presenceAffectsLayout:o,mode:c,anchorX:u,root:d})=>{const h=im($b),p=$.useId();let m=!0,g=$.useMemo(()=>(m=!1,{id:p,initial:e,isPresent:t,custom:a,onExitComplete:y=>{h.set(y,!0);for(const w of h.values())if(!w)return;r&&r()},register:y=>(h.set(y,!1),()=>h.delete(y))}),[t,h,r]);return o&&m&&(g={...g}),$.useMemo(()=>{h.forEach((y,w)=>h.set(w,!1))},[t]),$.useEffect(()=>{!t&&!h.size&&r&&r()},[t]),c==="popLayout"&&(n=M.jsx(Yb,{isPresent:t,anchorX:u,root:d,children:n})),M.jsx(ju.Provider,{value:g,children:n})};function $b(){return new Map}function oS(n=!0){const e=$.useContext(ju);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:a}=e,o=$.useId();$.useEffect(()=>{if(n)return a(o)},[n]);const c=$.useCallback(()=>n&&r&&r(o),[o,r,n]);return!t&&r?[!1,c]:[!0]}const Wc=n=>n.key||"";function ix(n){const e=[];return $.Children.forEach(n,t=>{$.isValidElement(t)&&e.push(t)}),e}const Hu=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:a=!0,mode:o="sync",propagate:c=!1,anchorX:u="left",root:d})=>{const[h,p]=oS(c),m=$.useMemo(()=>ix(n),[n]),g=c&&!h?[]:m.map(Wc),y=$.useRef(!0),w=$.useRef(m),E=im(()=>new Map),[S,x]=$.useState(m),[R,P]=$.useState(m);m_(()=>{y.current=!1,w.current=m;for(let I=0;I<R.length;I++){const F=Wc(R[I]);g.includes(F)?E.delete(F):E.get(F)!==!0&&E.set(F,!1)}},[R,g.length,g.join("-")]);const N=[];if(m!==S){let I=[...m];for(let F=0;F<R.length;F++){const V=R[F],A=Wc(V);g.includes(A)||(I.splice(F,0,V),N.push(V))}return o==="wait"&&N.length&&(I=N),P(ix(I)),x(m),null}const{forceRender:C}=$.useContext(nm);return M.jsx(M.Fragment,{children:R.map(I=>{const F=Wc(I),V=c&&!h?!1:m===R||g.includes(F),A=()=>{if(E.has(F))E.set(F,!0);else return;let L=!0;E.forEach(z=>{z||(L=!1)}),L&&(C?.(),P(w.current),c&&p?.(),r&&r())};return M.jsx(qb,{isPresent:V,initial:!y.current||t?void 0:!1,custom:e,presenceAffectsLayout:a,mode:o,root:d,onExitComplete:V?void 0:A,anchorX:u,children:I},F)})})},lS=$.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xa={};for(const n in rx)Xa[n]={isEnabled:e=>rx[n].some(t=>!!e[t])};function Kb(n){for(const e in n)Xa[e]={...Xa[e],...n[e]}}const Zb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Zb.has(n)}let cS=n=>!Lu(n);function Jb(n){typeof n=="function"&&(cS=e=>e.startsWith("on")?!Lu(e):n(e))}try{Jb(require("@emotion/is-prop-valid").default)}catch{}function Qb(n,e,t){const r={};for(const a in n)a==="values"&&typeof n.values=="object"||(cS(a)||t===!0&&Lu(a)||!e&&!Lu(a)||n.draggable&&a.startsWith("onDrag"))&&(r[a]=n[a]);return r}const Gu=$.createContext({});function Wu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function hl(n){return typeof n=="string"||Array.isArray(n)}const bm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Am=["initial",...bm];function Xu(n){return Wu(n.animate)||Am.some(e=>hl(n[e]))}function uS(n){return!!(Xu(n)||n.variants)}function eA(n,e){if(Xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||hl(t)?t:void 0,animate:hl(r)?r:void 0}}return n.inherit!==!1?e:{}}function tA(n){const{initial:e,animate:t}=eA(n,$.useContext(Gu));return $.useMemo(()=>({initial:e,animate:t}),[sx(e),sx(t)])}function sx(n){return Array.isArray(n)?n.join(" "):n}function ax(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Xo={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ve.test(n))n=parseFloat(n);else return n;const t=ax(n,e.target.x),r=ax(n,e.target.y);return`${t}% ${r}%`}},nA={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,a=cs.parse(n);if(a.length>5)return r;const o=cs.createTransformer(n),c=typeof a[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;a[0+c]/=u,a[1+c]/=d;const h=en(u,d,.5);return typeof a[2+c]=="number"&&(a[2+c]/=h),typeof a[3+c]=="number"&&(a[3+c]/=h),o(a)}},Kh={borderRadius:{...Xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xo,borderTopRightRadius:Xo,borderBottomLeftRadius:Xo,borderBottomRightRadius:Xo,boxShadow:nA};function dS(n,{layout:e,layoutId:t}){return no.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Kh[n]||n==="opacity")}const iA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rA=to.length;function sA(n,e,t){let r="",a=!0;for(let o=0;o<rA;o++){const c=to[o],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=tS(u,Mm[c]);if(!d){a=!1;const p=iA[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,a?"":r):a&&(r="none"),r}function Cm(n,e,t){const{style:r,vars:a,transformOrigin:o}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(no.has(d)){c=!0;continue}else if(L_(d)){a[d]=h;continue}else{const p=tS(h,Mm[d]);d.startsWith("origin")?(u=!0,o[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=sA(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=o;r.transformOrigin=`${d} ${h} ${p}`}}const Rm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fS(n,e,t){for(const r in e)!Vn(e[r])&&!dS(r,t)&&(n[r]=e[r])}function aA({transformTemplate:n},e){return $.useMemo(()=>{const t=Rm();return Cm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function oA(n,e){const t=n.style||{},r={};return fS(r,t,n),Object.assign(r,aA(n,e)),r}function lA(n,e){const t={},r=oA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const cA={offset:"stroke-dashoffset",array:"stroke-dasharray"},uA={offset:"strokeDashoffset",array:"strokeDasharray"};function dA(n,e,t=1,r=0,a=!0){n.pathLength=1;const o=a?cA:uA;n[o.offset]=Ve.transform(-r);const c=Ve.transform(e),u=Ve.transform(t);n[o.array]=`${c} ${u}`}const fA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hS(n,{attrX:e,attrY:t,attrScale:r,pathLength:a,pathSpacing:o=1,pathOffset:c=0,...u},d,h,p){if(Cm(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:g}=n;m.transform&&(g.transform=m.transform,delete m.transform),(g.transform||m.transformOrigin)&&(g.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),g.transform&&(g.transformBox=p?.transformBox??"fill-box",delete m.transformBox);for(const y of fA)m[y]!==void 0&&(g[y]=m[y],delete m[y]);e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),a!==void 0&&dA(m,a,o,c,!1)}const pS=()=>({...Rm(),attrs:{}}),mS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function hA(n,e,t,r){const a=$.useMemo(()=>{const o=pS();return hS(o,e,mS(r),n.transformTemplate,n.style),{...o.attrs,style:{...o.style}}},[e]);if(n.style){const o={};fS(o,n.style,n),a.style={...o,...a.style}}return a}const pA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pm(n){return typeof n!="string"||n.includes("-")?!1:!!(pA.indexOf(n)>-1||/[A-Z]/u.test(n))}function mA(n,e,t,{latestValues:r},a,o=!1,c){const d=(c??Pm(n)?hA:lA)(e,r,a,n),h=Qb(e,typeof n=="string",o),p=n!==$.Fragment?{...h,...d,ref:t}:{},{children:m}=e,g=$.useMemo(()=>Vn(m)?m.get():m,[m]);return $.createElement(n,{...p,children:g})}function ox(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Nm(n,e,t,r){if(typeof e=="function"){const[a,o]=ox(r);e=e(t!==void 0?t:n.custom,a,o)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[a,o]=ox(r);e=e(t!==void 0?t:n.custom,a,o)}return e}function yu(n){return Vn(n)?n.get():n}function gA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,a){return{latestValues:vA(t,r,a,n),renderState:e()}}function vA(n,e,t,r){const a={},o=r(n,{});for(const g in o)a[g]=yu(o[g]);let{initial:c,animate:u}=n;const d=Xu(n),h=uS(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const m=p?u:c;if(m&&typeof m!="boolean"&&!Wu(m)){const g=Array.isArray(m)?m:[m];for(let y=0;y<g.length;y++){const w=Nm(n,g[y]);if(w){const{transitionEnd:E,transition:S,...x}=w;for(const R in x){let P=x[R];if(Array.isArray(P)){const N=p?P.length-1:0;P=P[N]}P!==null&&(a[R]=P)}for(const R in E)a[R]=E[R]}}}return a}const gS=n=>(e,t)=>{const r=$.useContext(Gu),a=$.useContext(ju),o=()=>gA(n,e,r,a);return t?o():im(o)};function Lm(n,e,t){const{style:r}=n,a={};for(const o in r)(Vn(r[o])||e.style&&Vn(e.style[o])||dS(o,n)||t?.getValue(o)?.liveStyle!==void 0)&&(a[o]=r[o]);return a}const xA=gS({scrapeMotionValuesFromProps:Lm,createRenderState:Rm});function vS(n,e,t){const r=Lm(n,e,t);for(const a in n)if(Vn(n[a])||Vn(e[a])){const o=to.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;r[o]=n[a]}return r}const yA=gS({scrapeMotionValuesFromProps:vS,createRenderState:pS}),_A=Symbol.for("motionComponentSymbol");function Oa(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function SA(n,e,t){return $.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Oa(t)&&(t.current=r))},[e])}const Dm=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),MA="framerAppearId",xS="data-"+Dm(MA),yS=$.createContext({});function wA(n,e,t,r,a,o){const{visualElement:c}=$.useContext(Gu),u=$.useContext(lS),d=$.useContext(ju),h=$.useContext(Tm).reducedMotion,p=$.useRef(null);r=r||u.renderer,!p.current&&r&&(p.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h,isSVG:o}));const m=p.current,g=$.useContext(yS);m&&!m.projection&&a&&(m.type==="html"||m.type==="svg")&&EA(p.current,t,a,g);const y=$.useRef(!1);$.useInsertionEffect(()=>{m&&y.current&&m.update(t,d)});const w=t[xS],E=$.useRef(!!w&&!window.MotionHandoffIsComplete?.(w)&&window.MotionHasOptimisedAnimation?.(w));return m_(()=>{m&&(y.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),E.current&&m.animationState&&m.animationState.animateChanges())}),$.useEffect(()=>{m&&(!E.current&&m.animationState&&m.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(w)}),E.current=!1),m.enteringChildren=void 0)}),m}function EA(n,e,t,r){const{layoutId:a,layout:o,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:_S(n.parent)),n.projection.setOptions({layoutId:a,layout:o,alwaysMeasureLayout:!!c||u&&Oa(u),visualElement:n,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:d,layoutRoot:h})}function _S(n){if(n)return n.options.allowProjection!==!1?n.projection:_S(n.parent)}function Hf(n,{forwardMotionProps:e=!1,type:t}={},r,a){r&&Kb(r);const o=t?t==="svg":Pm(n),c=o?yA:xA;function u(h,p){let m;const g={...$.useContext(Tm),...h,layoutId:TA(h)},{isStatic:y}=g,w=tA(h),E=c(h,y);if(!y&&rm){bA();const S=AA(g);m=S.MeasureLayout,w.visualElement=wA(n,E,g,a,S.ProjectionNode,o)}return M.jsxs(Gu.Provider,{value:w,children:[m&&w.visualElement?M.jsx(m,{visualElement:w.visualElement,...g}):null,mA(n,h,SA(E,w.visualElement,p),E,y,e,o)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=$.forwardRef(u);return d[_A]=n,d}function TA({layoutId:n}){const e=$.useContext(nm).id;return e&&n!==void 0?e+"-"+n:n}function bA(n,e){$.useContext(lS).strict}function AA(n){const{drag:e,layout:t}=Xa;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function CA(n,e){if(typeof Proxy>"u")return Hf;const t=new Map,r=(o,c)=>Hf(o,c,n,e),a=(o,c)=>r(o,c);return new Proxy(a,{get:(o,c)=>c==="create"?r:(t.has(c)||t.set(c,Hf(c,void 0,n,e)),t.get(c))})}function SS({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function RA({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function PA(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Gf(n){return n===void 0||n===1}function Zh({scale:n,scaleX:e,scaleY:t}){return!Gf(n)||!Gf(e)||!Gf(t)}function Os(n){return Zh(n)||MS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function MS(n){return lx(n.x)||lx(n.y)}function lx(n){return n&&n!=="0%"}function Du(n,e,t){const r=n-t,a=e*r;return t+a}function cx(n,e,t,r,a){return a!==void 0&&(n=Du(n,a,r)),Du(n,t,r)+e}function Jh(n,e=0,t=1,r,a){n.min=cx(n.min,e,t,r,a),n.max=cx(n.max,e,t,r,a)}function wS(n,{x:e,y:t}){Jh(n.x,e.translate,e.scale,e.originPoint),Jh(n.y,t.translate,t.scale,t.originPoint)}const ux=.999999999999,dx=1.0000000000001;function NA(n,e,t,r=!1){const a=t.length;if(!a)return;e.x=e.y=1;let o,c;for(let u=0;u<a;u++){o=t[u],c=o.projectionDelta;const{visualElement:d}=o.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Ba(n,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,wS(n,c)),r&&Os(o.latestValues)&&Ba(n,o.latestValues))}e.x<dx&&e.x>ux&&(e.x=1),e.y<dx&&e.y>ux&&(e.y=1)}function ka(n,e){n.min=n.min+e,n.max=n.max+e}function fx(n,e,t,r,a=.5){const o=en(n.min,n.max,a);Jh(n,e,t,o,r)}function Ba(n,e){fx(n.x,e.x,e.scaleX,e.scale,e.originX),fx(n.y,e.y,e.scaleY,e.scale,e.originY)}function ES(n,e){return SS(PA(n.getBoundingClientRect(),e))}function LA(n,e,t){const r=ES(n,t),{scroll:a}=e;return a&&(ka(r.x,a.offset.x),ka(r.y,a.offset.y)),r}const hx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Va=()=>({x:hx(),y:hx()}),px=()=>({min:0,max:0}),hn=()=>({x:px(),y:px()}),Qh={current:null},TS={current:!1};function DA(){if(TS.current=!0,!!rm)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Qh.current=n.matches;n.addEventListener("change",e),e()}else Qh.current=!1}const IA=new WeakMap;function UA(n,e,t){for(const r in e){const a=e[r],o=t[r];if(Vn(a))n.addValue(r,a);else if(Vn(o))n.addValue(r,Wa(a,{owner:n}));else if(o!==a)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(a):c.hasAnimated||c.set(a)}else{const c=n.getStaticValue(r);n.addValue(r,Wa(c!==void 0?c:a,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const mx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class FA{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:a,blockInitialAnimation:o,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=_m,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=si.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,$t.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=c;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=a,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=Xu(t),this.isVariantNode=uS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const g in m){const y=m[g];d[g]!==void 0&&Vn(y)&&y.set(d[g])}}mount(e){this.current=e,IA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),TS.current||DA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qh.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ls(this.notifyUpdate),ls(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=no.has(e);r&&this.onBindTransform&&this.onBindTransform();const a=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&$t.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{a(),o&&o(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Xa){const t=Xa[e];if(!t)continue;const{isEnabled:r,Feature:a}=t;if(!this.features[e]&&a&&r(this.props)&&(this.features[e]=new a(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):hn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<mx.length;r++){const a=mx[r];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const o="on"+a,c=e[o];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=UA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Wa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(g_(r)||x_(r))?r=parseFloat(r):!Hb(r)&&cs.test(t)&&(r=eS(e,t)),this.setBaseTarget(e,Vn(r)?r.get():r)),Vn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const o=Nm(this.props,t,this.presenceContext?.custom);o&&(r=o[e])}if(t&&r!==void 0)return r;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Vn(a)?a:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new cm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){wm.render(this.render)}}class bS extends FA{constructor(){super(...arguments),this.KeyframeResolver=Nb}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Vn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function AS(n,{style:e,vars:t},r,a){const o=n.style;let c;for(c in e)o[c]=e[c];a?.applyProjectionStyles(o,r);for(c in t)o.setProperty(c,t[c])}function OA(n){return window.getComputedStyle(n)}class kA extends bS{constructor(){super(...arguments),this.type="html",this.renderInstance=AS}readValueFromInstance(e,t){if(no.has(t))return this.projection?.isProjecting?Hh(t):KT(e,t);{const r=OA(e),a=(L_(t)?r.getPropertyValue(t):r[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ES(e,t)}build(e,t,r){Cm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Lm(e,t,r)}}const CS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function BA(n,e,t,r){AS(n,e,void 0,r);for(const a in e.attrs)n.setAttribute(CS.has(a)?a:Dm(a),e.attrs[a])}class VA extends bS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=hn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(no.has(t)){const r=Q_(t);return r&&r.default||0}return t=CS.has(t)?t:Dm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return vS(e,t,r)}build(e,t,r){hS(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,a){BA(e,t,r,a)}mount(e){this.isSVGTag=mS(e.tagName),super.mount(e)}}const zA=(n,e)=>e.isSVG??Pm(n)?new VA(e):new kA(e,{allowProjection:n!==$.Fragment});function za(n,e,t){const r=n.getProps();return Nm(r,e,t!==void 0?t:r.custom,n)}const ep=n=>Array.isArray(n);function jA(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Wa(t))}function HA(n){return ep(n)?n[n.length-1]||0:n}function GA(n,e){const t=za(n,e);let{transitionEnd:r={},transition:a={},...o}=t||{};o={...o,...r};for(const c in o){const u=HA(o[c]);jA(n,c,u)}}function WA(n){return!!(Vn(n)&&n.add)}function tp(n,e){const t=n.getValue("willChange");if(WA(t))return t.add(e);if(!t&&Er.WillChange){const r=new Er.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function RS(n){return n.props[xS]}const XA=n=>n!==null;function YA(n,{repeat:e,repeatType:t="loop"},r){const a=n.filter(XA),o=e&&t!=="loop"&&e%2===1?0:a.length-1;return a[o]}const qA={type:"spring",stiffness:500,damping:25,restSpeed:10},$A=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),KA={type:"keyframes",duration:.8},ZA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},JA=(n,{keyframes:e})=>e.length>2?KA:no.has(n)?n.startsWith("scale")?$A(e[1]):qA:ZA;function QA({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:a,repeat:o,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Im=(n,e,t,r={},a,o)=>c=>{const u=Sm(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-tr(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:o?void 0:a};QA(u)||Object.assign(p,JA(n,p)),p.duration&&(p.duration=tr(p.duration)),p.repeatDelay&&(p.repeatDelay=tr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(qh(p),p.delay===0&&(m=!0)),(Er.instantAnimations||Er.skipAnimations)&&(m=!0,qh(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,m&&!o&&e.get()!==void 0){const g=YA(p.keyframes,u);if(g!==void 0){$t.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new ym(p):new yb(p)};function eC({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function PS(n,e,{delay:t=0,transitionOverride:r,type:a}={}){let{transition:o=n.getDefaultTransition(),transitionEnd:c,...u}=e;r&&(o=r);const d=[],h=a&&n.animationState&&n.animationState.getState()[a];for(const p in u){const m=n.getValue(p,n.latestValues[p]??null),g=u[p];if(g===void 0||h&&eC(h,p))continue;const y={delay:t,...Sm(o||{},p)},w=m.get();if(w!==void 0&&!m.isAnimating&&!Array.isArray(g)&&g===w&&!y.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const x=RS(n);if(x){const R=window.MotionHandoffAnimation(x,p,$t);R!==null&&(y.startTime=R,E=!0)}}tp(n,p),m.start(Im(p,m,g,n.shouldReduceMotion&&K_.has(p)?{type:!1}:y,n,E));const S=m.animation;S&&d.push(S)}return c&&Promise.all(d).then(()=>{$t.update(()=>{c&&GA(n,c)})}),d}function NS(n,e,t,r=0,a=1){const o=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(o,c):a===1?o*r:u-o*r}function np(n,e,t={}){const r=za(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(a=t.transitionOverride);const o=r?()=>Promise.all(PS(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:p,staggerDirection:m}=a;return tC(n,e,d,h,p,m,t)}:()=>Promise.resolve(),{when:u}=a;if(u){const[d,h]=u==="beforeChildren"?[o,c]:[c,o];return d().then(()=>h())}else return Promise.all([o(),c(t.delay)])}function tC(n,e,t=0,r=0,a=0,o=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(np(d,e,{...c,delay:t+(typeof r=="function"?0:r)+NS(n.variantChildren,d,r,a,o)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function nC(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const a=e.map(o=>np(n,o,t));r=Promise.all(a)}else if(typeof e=="string")r=np(n,e,t);else{const a=typeof e=="function"?za(n,e,t.custom):e;r=Promise.all(PS(n,a,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function LS(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const iC=Am.length;function DS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?DS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<iC;t++){const r=Am[t],a=n.props[r];(hl(a)||a===!1)&&(e[r]=a)}return e}const rC=[...bm].reverse(),sC=bm.length;function aC(n){return e=>Promise.all(e.map(({animation:t,options:r})=>nC(n,t,r)))}function oC(n){let e=aC(n),t=gx(),r=!0;const a=d=>(h,p)=>{const m=za(n,p,d==="exit"?n.presenceContext?.custom:void 0);if(m){const{transition:g,transitionEnd:y,...w}=m;h={...h,...w,...y}}return h};function o(d){e=d(n)}function c(d){const{props:h}=n,p=DS(n.parent)||{},m=[],g=new Set;let y={},w=1/0;for(let S=0;S<sC;S++){const x=rC[S],R=t[x],P=h[x]!==void 0?h[x]:p[x],N=hl(P),C=x===d?R.isActive:null;C===!1&&(w=S);let I=P===p[x]&&P!==h[x]&&N;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),R.protectedKeys={...y},!R.isActive&&C===null||!P&&!R.prevProp||Wu(P)||typeof P=="boolean")continue;const F=lC(R.prevProp,P);let V=F||x===d&&R.isActive&&!I&&N||S>w&&N,A=!1;const L=Array.isArray(P)?P:[P];let z=L.reduce(a(x),{});C===!1&&(z={});const{prevResolvedValues:ne={}}=R,j={...ne,...z},J=H=>{V=!0,g.has(H)&&(A=!0,g.delete(H)),R.needsAnimating[H]=!0;const k=n.getValue(H);k&&(k.liveStyle=!1)};for(const H in j){const k=z[H],ie=ne[H];if(y.hasOwnProperty(H))continue;let U=!1;ep(k)&&ep(ie)?U=!LS(k,ie):U=k!==ie,U?k!=null?J(H):g.add(H):k!==void 0&&g.has(H)?J(H):R.protectedKeys[H]=!0}R.prevProp=P,R.prevResolvedValues=z,R.isActive&&(y={...y,...z}),r&&n.blockInitialAnimation&&(V=!1);const le=I&&F;V&&(!le||A)&&m.push(...L.map(H=>{const k={type:x};if(typeof H=="string"&&r&&!le&&n.manuallyAnimateOnMount&&n.parent){const{parent:ie}=n,U=za(ie,H);if(ie.enteringChildren&&U){const{delayChildren:G}=U.transition||{};k.delay=NS(ie.enteringChildren,n,G)}}return{animation:H,options:k}}))}if(g.size){const S={};if(typeof h.initial!="boolean"){const x=za(n,Array.isArray(h.initial)?h.initial[0]:h.initial);x&&x.transition&&(S.transition=x.transition)}g.forEach(x=>{const R=n.getBaseTarget(x),P=n.getValue(x);P&&(P.liveStyle=!0),S[x]=R??null}),m.push({animation:S})}let E=!!m.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(m):Promise.resolve()}function u(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(m=>m.animationState?.setActive(d,h)),t[d].isActive=h;const p=c(d);for(const m in t)t[m].protectedKeys={};return p}return{animateChanges:c,setActive:u,setAnimateFunction:o,getState:()=>t,reset:()=>{t=gx()}}}function lC(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!LS(e,n):!1}function Ps(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gx(){return{animate:Ps(!0),whileInView:Ps(),whileHover:Ps(),whileTap:Ps(),whileDrag:Ps(),whileFocus:Ps(),exit:Ps()}}class fs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class cC extends fs{constructor(e){super(e),e.animationState||(e.animationState=oC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let uC=0;class dC extends fs{constructor(){super(...arguments),this.id=uC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const a=this.node.animationState.setActive("exit",!e);t&&!e&&a.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const fC={animation:{Feature:cC},exit:{Feature:dC}};function pl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Tl(n){return{point:{x:n.pageX,y:n.pageY}}}const hC=n=>e=>Em(e)&&n(e,Tl(e));function rl(n,e,t,r){return pl(n,e,hC(t),r)}const IS=1e-4,pC=1-IS,mC=1+IS,US=.01,gC=0-US,vC=0+US;function Zn(n){return n.max-n.min}function xC(n,e,t){return Math.abs(n-e)<=t}function vx(n,e,t,r=.5){n.origin=r,n.originPoint=en(e.min,e.max,n.origin),n.scale=Zn(t)/Zn(e),n.translate=en(t.min,t.max,n.origin)-n.originPoint,(n.scale>=pC&&n.scale<=mC||isNaN(n.scale))&&(n.scale=1),(n.translate>=gC&&n.translate<=vC||isNaN(n.translate))&&(n.translate=0)}function sl(n,e,t,r){vx(n.x,e.x,t.x,r?r.originX:void 0),vx(n.y,e.y,t.y,r?r.originY:void 0)}function xx(n,e,t){n.min=t.min+e.min,n.max=n.min+Zn(e)}function yC(n,e,t){xx(n.x,e.x,t.x),xx(n.y,e.y,t.y)}function yx(n,e,t){n.min=e.min-t.min,n.max=n.min+Zn(e)}function Iu(n,e,t){yx(n.x,e.x,t.x),yx(n.y,e.y,t.y)}function Ei(n){return[n("x"),n("y")]}const FS=({current:n})=>n?n.ownerDocument.defaultView:null,_x=(n,e)=>Math.abs(n-e);function _C(n,e){const t=_x(n.x,e.x),r=_x(n.y,e.y);return Math.sqrt(t**2+r**2)}class OS{constructor(e,t,{transformPagePoint:r,contextWindow:a=window,dragSnapToOrigin:o=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Xf(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,w=_C(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!w)return;const{point:E}=g,{timestamp:S}=bn;this.history.push({...E,timestamp:S});const{onStart:x,onMove:R}=this.handlers;y||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Wf(y,this.transformPagePoint),$t.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:w,onSessionEnd:E,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Xf(g.type==="pointercancel"?this.lastMoveEventInfo:Wf(y,this.transformPagePoint),this.history);this.startEvent&&w&&w(g,x),E&&E(g,x)},!Em(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=a||window;const u=Tl(e),d=Wf(u,this.transformPagePoint),{point:h}=d,{timestamp:p}=bn;this.history=[{...h,timestamp:p}];const{onSessionStart:m}=t;m&&m(e,Xf(d,this.history)),this.removeListeners=Ml(rl(this.contextWindow,"pointermove",this.handlePointerMove),rl(this.contextWindow,"pointerup",this.handlePointerUp),rl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ls(this.updatePoint)}}function Wf(n,e){return e?{point:e(n.point)}:n}function Sx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Xf({point:n},e){return{point:n,delta:Sx(n,kS(e)),offset:Sx(n,SC(e)),velocity:MC(e,.1)}}function SC(n){return n[0]}function kS(n){return n[n.length-1]}function MC(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const a=kS(n);for(;t>=0&&(r=n[t],!(a.timestamp-r.timestamp>tr(e)));)t--;if(!r)return{x:0,y:0};const o=Ti(a.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const c={x:(a.x-r.x)/o,y:(a.y-r.y)/o};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function wC(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?en(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?en(t,n,r.max):Math.min(n,t)),n}function Mx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function EC(n,{top:e,left:t,bottom:r,right:a}){return{x:Mx(n.x,t,a),y:Mx(n.y,e,r)}}function wx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function TC(n,e){return{x:wx(n.x,e.x),y:wx(n.y,e.y)}}function bC(n,e){let t=.5;const r=Zn(n),a=Zn(e);return a>r?t=ul(e.min,e.max-r,n.min):r>a&&(t=ul(n.min,n.max-a,e.min)),wr(0,1,t)}function AC(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const ip=.35;function CC(n=ip){return n===!1?n=0:n===!0&&(n=ip),{x:Ex(n,"left","right"),y:Ex(n,"top","bottom")}}function Ex(n,e,t){return{min:Tx(n,e),max:Tx(n,t)}}function Tx(n,e){return typeof n=="number"?n:n[e]||0}const RC=new WeakMap;class PC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=hn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Tl(m).point)},c=(m,g)=>{const{drag:y,dragPropagation:w,onDragStart:E}=this.getProps();if(y&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ub(y),!this.openDragLock))return;this.latestPointerEvent=m,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ei(x=>{let R=this.getAxisMotionValue(x).get()||0;if(nr.test(R)){const{projection:P}=this.visualElement;if(P&&P.layout){const N=P.layout.layoutBox[x];N&&(R=Zn(N)*(parseFloat(R)/100))}}this.originPoint[x]=R}),E&&$t.postRender(()=>E(m,g)),tp(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(m,g)=>{this.latestPointerEvent=m,this.latestPanInfo=g;const{dragPropagation:y,dragDirectionLock:w,onDirectionLock:E,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=g;if(w&&this.currentDirection===null){this.currentDirection=NC(x),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",g.point,x),this.updateAxis("y",g.point,x),this.visualElement.render(),S&&S(m,g)},d=(m,g)=>{this.latestPointerEvent=m,this.latestPanInfo=g,this.stop(m,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>Ei(m=>this.getAnimationState(m)==="paused"&&this.getAxisMotionValue(m).animation?.play()),{dragSnapToOrigin:p}=this.getProps();this.panSession=new OS(e,{onSessionStart:o,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:FS(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,a=t||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!a||!r)return;const{velocity:c}=a;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&$t.postRender(()=>u(r,a))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:a}=this.getProps();if(!r||!Xc(e,a,this.currentDirection))return;const o=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=wC(c,this.constraints[e],this.elastic[e])),o.set(c)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,a=this.constraints;e&&Oa(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=EC(r.layoutBox,e):this.constraints=!1,this.elastic=CC(t),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ei(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=AC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Oa(e))return!1;const r=e.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const o=LA(r,a.root,this.visualElement.getTransformPagePoint());let c=TC(a.layout.layoutBox,o);if(t){const u=t(RA(c));this.hasMutatedConstraints=!!u,u&&(c=SS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:a,dragTransition:o,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ei(p=>{if(!Xc(p,t,this.currentDirection))return;let m=d&&d[p]||{};c&&(m={min:0,max:0});const g=a?200:1e6,y=a?40:1e7,w={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...m};return this.startAxisValueAnimation(p,w)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return tp(this.visualElement,e),r.start(Im(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ei(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ei(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),a=r[t];return a||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Ei(t=>{const{drag:r}=this.getProps();if(!Xc(t,r,this.currentDirection))return;const{projection:a}=this.visualElement,o=this.getAxisMotionValue(t);if(a&&a.layout){const{min:c,max:u}=a.layout.layoutBox[t],d=o.get()||0;o.set(e[t]-en(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Oa(t)||!r||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Ei(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();a[c]=bC({min:d,max:d},this.constraints[c])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ei(c=>{if(!Xc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(en(d,h,a[c]))})}addListeners(){if(!this.visualElement.current)return;RC.set(this.visualElement,this);const e=this.visualElement.current,t=rl(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Oa(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,o=a.addEventListener("measure",r);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),$t.read(r);const c=pl(window,"resize",()=>this.scalePositionWithinConstraints()),u=a.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(Ei(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=d[p].translate,m.set(m.get()+d[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),o(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:a=!1,dragConstraints:o=!1,dragElastic:c=ip,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:a,dragConstraints:o,dragElastic:c,dragMomentum:u}}}function Xc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function NC(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class LC extends fs{constructor(e){super(e),this.removeGroupControls=bi,this.removeListeners=bi,this.controls=new PC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||bi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const bx=n=>(e,t)=>{n&&$t.postRender(()=>n(e,t))};class DC extends fs{constructor(){super(...arguments),this.removePointerDownListener=bi}onPointerDown(e){this.session=new OS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:FS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:a}=this.node.getProps();return{onSessionStart:bx(e),onStart:bx(t),onMove:r,onEnd:(o,c)=>{delete this.session,a&&$t.postRender(()=>a(o,c))}}}mount(){this.removePointerDownListener=rl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _u={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Yf=!1;class IC extends $.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:a}=this.props,{projection:o}=e;o&&(t.group&&t.group.add(o),r&&r.register&&a&&r.register(o),Yf&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),_u.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:a,isPresent:o}=this.props,{projection:c}=r;return c&&(c.isPresent=o,Yf=!0,a||e.layoutDependency!==t||t===void 0||e.isPresent!==o?c.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?c.promote():c.relegate()||$t.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),wm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:a}=e;Yf=!0,a&&(a.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(a),r&&r.deregister&&r.deregister(a))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function BS(n){const[e,t]=oS(),r=$.useContext(nm);return M.jsx(IC,{...n,layoutGroup:r,switchLayoutGroup:$.useContext(yS),isPresent:e,safeToRemove:t})}function UC(n,e,t){const r=Vn(n)?n:Wa(n);return r.start(Im("",r,e,t)),r.animation}const FC=(n,e)=>n.depth-e.depth;class OC{constructor(){this.children=[],this.isDirty=!1}add(e){sm(this.children,e),this.isDirty=!0}remove(e){am(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(FC),this.isDirty=!1,this.children.forEach(e)}}function kC(n,e){const t=si.now(),r=({timestamp:a})=>{const o=a-t;o>=e&&(ls(r),n(o-e))};return $t.setup(r,!0),()=>ls(r)}const VS=["TopLeft","TopRight","BottomLeft","BottomRight"],BC=VS.length,Ax=n=>typeof n=="string"?parseFloat(n):n,Cx=n=>typeof n=="number"||Ve.test(n);function VC(n,e,t,r,a,o){a?(n.opacity=en(0,t.opacity??1,zC(r)),n.opacityExit=en(e.opacity??1,0,jC(r))):o&&(n.opacity=en(e.opacity??1,t.opacity??1,r));for(let c=0;c<BC;c++){const u=`border${VS[c]}Radius`;let d=Rx(e,u),h=Rx(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Cx(d)===Cx(h)?(n[u]=Math.max(en(Ax(d),Ax(h),r),0),(nr.test(h)||nr.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=en(e.rotate||0,t.rotate||0,r))}function Rx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const zC=zS(0,.5,b_),jC=zS(.5,.95,bi);function zS(n,e,t){return r=>r<n?0:r>e?1:t(ul(n,e,r))}function Px(n,e){n.min=e.min,n.max=e.max}function Ii(n,e){Px(n.x,e.x),Px(n.y,e.y)}function Nx(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Lx(n,e,t,r,a){return n-=e,n=Du(n,1/t,r),a!==void 0&&(n=Du(n,1/a,r)),n}function HC(n,e=0,t=1,r=.5,a,o=n,c=n){if(nr.test(e)&&(e=parseFloat(e),e=en(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=en(o.min,o.max,r);n===o&&(u-=e),n.min=Lx(n.min,e,t,u,a),n.max=Lx(n.max,e,t,u,a)}function Dx(n,e,[t,r,a],o,c){HC(n,e[t],e[r],e[a],e.scale,o,c)}const GC=["x","scaleX","originX"],WC=["y","scaleY","originY"];function Ix(n,e,t,r){Dx(n.x,e,GC,t?t.x:void 0,r?r.x:void 0),Dx(n.y,e,WC,t?t.y:void 0,r?r.y:void 0)}function Ux(n){return n.translate===0&&n.scale===1}function jS(n){return Ux(n.x)&&Ux(n.y)}function Fx(n,e){return n.min===e.min&&n.max===e.max}function XC(n,e){return Fx(n.x,e.x)&&Fx(n.y,e.y)}function Ox(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function HS(n,e){return Ox(n.x,e.x)&&Ox(n.y,e.y)}function kx(n){return Zn(n.x)/Zn(n.y)}function Bx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class YC{constructor(){this.members=[]}add(e){sm(this.members,e),e.scheduleRender()}remove(e){if(am(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(a=>e===a);if(t===0)return!1;let r;for(let a=t;a>=0;a--){const o=this.members[a];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:a}=e.options;a===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function qC(n,e,t){let r="";const a=n.x.translate/e.x,o=n.y.translate/e.y,c=t?.z||0;if((a||o||c)&&(r=`translate3d(${a}px, ${o}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:m,rotateY:g,skewX:y,skewY:w}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),m&&(r+=`rotateX(${m}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),w&&(r+=`skewY(${w}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const qf=["","X","Y","Z"],$C=1e3;let KC=0;function $f(n,e,t,r){const{latestValues:a}=e;a[n]&&(t[n]=a[n],e.setStaticValue(n,0),r&&(r[n]=0))}function GS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=RS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:a,layoutId:o}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",$t,!(a||o))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&GS(r)}function WS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:a}){return class{constructor(c={},u=e?.()){this.id=KC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(QC),this.nodes.forEach(iR),this.nodes.forEach(rR),this.nodes.forEach(eR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new OC)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new cm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=aS(c)&&!zb(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,m=0;const g=()=>this.root.updateBlockedByResize=!1;$t.read(()=>{m=window.innerWidth}),n(c,()=>{const y=window.innerWidth;y!==m&&(m=y,this.root.updateBlockedByResize=!0,p&&p(),p=kC(g,250),_u.hasAnimatedSinceResize&&(_u.hasAnimatedSinceResize=!1,this.nodes.forEach(jx)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||h.getDefaultTransition()||cR,{onLayoutAnimationStart:E,onLayoutAnimationComplete:S}=h.getProps(),x=!this.targetLayout||!HS(this.targetLayout,y),R=!m&&g;if(this.options.layoutRoot||this.resumeFrom||R||m&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...Sm(w,"layout"),onPlay:E,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(p,R)}else m||jx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ls(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sR),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&GS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nR),this.nodes.forEach(ZC),this.nodes.forEach(JC)):this.nodes.forEach(zx),this.clearAllSnapshots();const u=si.now();bn.delta=wr(0,1e3/60,u-bn.timestamp),bn.timestamp=u,bn.isProcessing=!0,Of.update.process(bn),Of.preRender.process(bn),Of.render.process(bn),bn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(tR),this.sharedNodes.forEach(aR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zn(this.snapshot.measuredBox.x)&&!Zn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=hn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!jS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Os(this.latestValues)||p)&&(a(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),uR(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return hn();const u=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(dR))){const{scroll:h}=this.root;h&&(ka(u.x,h.offset.x),ka(u.y,h.offset.y))}return u}removeElementScroll(c){const u=hn();if(Ii(u,c),this.scroll?.wasRoot)return u;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:p,options:m}=h;h!==this.root&&p&&m.layoutScroll&&(p.wasRoot&&Ii(u,c),ka(u.x,p.offset.x),ka(u.y,p.offset.y))}return u}applyTransform(c,u=!1){const d=hn();Ii(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ba(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Os(p.latestValues)&&Ba(d,p.latestValues)}return Os(this.latestValues)&&Ba(d,this.latestValues),d}removeTransform(c){const u=hn();Ii(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Os(h.latestValues))continue;Zh(h.latestValues)&&h.updateSnapshot();const p=hn(),m=h.measurePageBox();Ii(p,m),Ix(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Os(this.latestValues)&&Ix(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:m}=this.options;if(!this.layout||!(p||m))return;this.resolvedRelativeTargetAt=bn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=hn(),this.targetWithTransforms=hn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ii(this.target,this.layout.layoutBox),wS(this.target,this.targetDelta)):Ii(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zh(this.parent.latestValues)||MS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=hn(),this.relativeTargetOrigin=hn(),Iu(this.relativeTargetOrigin,u,d),Ii(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===bn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ii(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,g=this.treeScale.y;NA(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=hn());const{target:y}=c;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nx(this.prevProjectionDelta.x,this.projectionDelta.x),Nx(this.prevProjectionDelta.y,this.projectionDelta.y)),sl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==g||!Bx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Va(),this.projectionDelta=Va(),this.projectionDeltaWithTransform=Va()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},m=Va();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=hn(),y=d?d.source:void 0,w=this.layout?this.layout.source:void 0,E=y!==w,S=this.getStack(),x=!S||S.members.length<=1,R=!!(E&&!x&&this.options.crossfade===!0&&!this.path.some(lR));this.animationProgress=0;let P;this.mixTargetDelta=N=>{const C=N/1e3;Hx(m.x,c.x,C),Hx(m.y,c.y,C),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Iu(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oR(this.relativeTarget,this.relativeTargetOrigin,g,C),P&&XC(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=hn()),Ii(P,this.relativeTarget)),E&&(this.animationValues=p,VC(p,h,this.latestValues,C,R,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ls(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$t.update(()=>{_u.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Wa(0)),this.currentAnimation=UC(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($C),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&XS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||hn();const m=Zn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+m;const g=Zn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ii(u,d),Ba(u,p),sl(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new YC),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&$f("z",c,h,this.animationValues);for(let p=0;p<qf.length;p++)$f(`rotate${qf[p]}`,c,h,this.animationValues),$f(`skew${qf[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=yu(u?.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=yu(u?.pointerEvents)||""),this.hasProjected&&!Os(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let m=qC(this.projectionDeltaWithTransform,this.treeScale,p);d&&(m=d(p,m)),c.transform=m;const{x:g,y}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in Kh){if(p[w]===void 0)continue;const{correct:E,applyTo:S,isCSSVariable:x}=Kh[w],R=m==="none"?p[w]:E(p[w],h);if(S){const P=S.length;for(let N=0;N<P;N++)c[S[N]]=R}else x?this.options.visualElement.renderState.vars[w]=R:c[w]=R}this.options.layoutId&&(c.pointerEvents=h===this?yu(u?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Vx),this.root.sharedNodes.clear()}}}function ZC(n){n.updateLayout()}function JC(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:a}=n.options,o=e.source!==n.layout.source;a==="size"?Ei(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],g=Zn(m);m.min=t[p].min,m.max=m.min+g}):XS(a,e.layoutBox,t)&&Ei(p=>{const m=o?e.measuredBox[p]:e.layoutBox[p],g=Zn(t[p]);m.max=m.min+g,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+g)});const c=Va();sl(c,t,e.layoutBox);const u=Va();o?sl(u,n.applyTransform(r,!0),e.measuredBox):sl(u,t,e.layoutBox);const d=!jS(c);let h=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:g}=p;if(m&&g){const y=hn();Iu(y,e.layoutBox,m.layoutBox);const w=hn();Iu(w,t,g.layoutBox),HS(y,w)||(h=!0),p.options.layoutRoot&&(n.relativeTarget=w,n.relativeTargetOrigin=y,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function QC(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function eR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function tR(n){n.clearSnapshot()}function Vx(n){n.clearMeasurements()}function zx(n){n.isLayoutDirty=!1}function nR(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function jx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function iR(n){n.resolveTargetDelta()}function rR(n){n.calcProjection()}function sR(n){n.resetSkewAndRotation()}function aR(n){n.removeLeadSnapshot()}function Hx(n,e,t){n.translate=en(e.translate,0,t),n.scale=en(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Gx(n,e,t,r){n.min=en(e.min,t.min,r),n.max=en(e.max,t.max,r)}function oR(n,e,t,r){Gx(n.x,e.x,t.x,r),Gx(n.y,e.y,t.y,r)}function lR(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const cR={duration:.45,ease:[.4,0,.1,1]},Wx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Xx=Wx("applewebkit/")&&!Wx("chrome/")?Math.round:bi;function Yx(n){n.min=Xx(n.min),n.max=Xx(n.max)}function uR(n){Yx(n.x),Yx(n.y)}function XS(n,e,t){return n==="position"||n==="preserve-aspect"&&!xC(kx(e),kx(t),.2)}function dR(n){return n!==n.root&&n.scroll?.wasRoot}const fR=WS({attachResizeListener:(n,e)=>pl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kf={current:void 0},YS=WS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Kf.current){const n=new fR({});n.mount(window),n.setOptions({layoutScroll:!0}),Kf.current=n}return Kf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),hR={pan:{Feature:DC},drag:{Feature:LC,ProjectionNode:YS,MeasureLayout:BS}};function qx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const a="onHover"+t,o=r[a];o&&$t.postRender(()=>o(e,Tl(e)))}class pR extends fs{mount(){const{current:e}=this.node;e&&(this.unmount=Fb(e,(t,r)=>(qx(this.node,r,"Start"),a=>qx(this.node,a,"End"))))}unmount(){}}class mR extends fs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ml(pl(this.node.current,"focus",()=>this.onFocus()),pl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $x(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const a="onTap"+(t==="End"?"":t),o=r[a];o&&$t.postRender(()=>o(e,Tl(e)))}class gR extends fs{mount(){const{current:e}=this.node;e&&(this.unmount=Vb(e,(t,r)=>($x(this.node,r,"Start"),(a,{success:o})=>$x(this.node,a,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const rp=new WeakMap,Zf=new WeakMap,vR=n=>{const e=rp.get(n.target);e&&e(n)},xR=n=>{n.forEach(vR)};function yR({root:n,...e}){const t=n||document;Zf.has(t)||Zf.set(t,{});const r=Zf.get(t),a=JSON.stringify(e);return r[a]||(r[a]=new IntersectionObserver(xR,{root:n,...e})),r[a]}function _R(n,e,t){const r=yR(e);return rp.set(n,t),r.observe(n),()=>{rp.delete(n),r.unobserve(n)}}const SR={some:0,all:1};class MR extends fs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:a="some",once:o}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof a=="number"?a:SR[a]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,o&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),g=h?p:m;g&&g(d)};return _R(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(wR(e,t))&&this.startObserver()}unmount(){}}function wR({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const ER={inView:{Feature:MR},tap:{Feature:gR},focus:{Feature:mR},hover:{Feature:pR}},TR={layout:{ProjectionNode:YS,MeasureLayout:BS}},bR={...fC,...ER,...hR,...TR},xt=CA(bR,zA),BI=[{title:"Kunal Gupta",role:"Full Stack Developer",description:"I build scalable CMS platforms, dashboards, and modern web applications."},{title:"CMS & Dashboard",role:"React • PHP • Node.js",description:"Experienced in admin panels, admission systems, and enterprise CMS."},{title:"Problem Solver",role:"Clean Architecture & Performance",description:"Focused on maintainable code and real-world problem solving."}],Kr={frontend:["React","Tailwind CSS","HTML","CSS","JavaScript"],backend:["PHP","Laravel","Node.js","Express","REST APIs"],database:["MySQL","MongoDB"],tools:["Git","GitHub","Vite","Postman"]},Kx=[{title:"Travel Agency CMS",category:"CMS",description:"A dynamic CMS platform for managing tours, packages, and customer inquiries.",highlights:["Custom admin panel for content management","SEO-friendly public pages","Integrated inquiry and contact workflows"],tech:["PHP","Bootstrap","JavaScript"],github:"#",live:"#",image:"../images/p3.png"},{title:"MovieStream – React Movie Discovery Platform",category:"React",description:"A modern movie browsing platform built with React, Firebase, and Tailwind CSS — focused on fast discovery, smooth UI, and real-time features.",highlights:["Authentication with Firebase (Login / Signup / Protected Routes)","Responsive UI with Tailwind + smooth navigation experience","Firebase Firestore integration for user data (bookmarks / favorites)"],tech:["React","Firebase","Tailwind CSS"],github:"#",live:"https://moviestream.rf.gd/",image:"../images/p1.png"},{title:"College Management System",category:"CMS",description:"A full-scale CMS for managing admissions, students, staff, and academic workflows.",highlights:["Designed merit-based admission logic","Built admin, student, and staff dashboards","Handled authentication and role-based access"],tech:["React","PHP","Laravel","MySQL"],github:"#",live:"#",image:"../images/p4.png"},{title:"Pizza Delivery System – E-commerce CMS",category:"CMS",description:"A complete online food ordering system with cart, user accounts, order tracking, and an admin dashboard for full management.",highlights:["Customer side: menu browsing, cart, login/signup, and order placing","Admin panel: manage orders, items, categories, users, and site settings","Dashboard analytics: orders/users/items statistics + top-selling chart"],tech:["PHP","MySQL","Bootstrap","JavaScript"],github:"#",live:"#",image:"../images/p5.png"},{title:"Space Portfolio – Animated UI Experience",category:"React",description:"A premium personal portfolio experience with animated space visuals, smooth page transitions, and reusable component design.",highlights:["Planet-based hero animations (Solar System / Earth / Jupiter / Saturn / Mars)","Framer Motion page transitions + micro-interactions","Responsive layout optimized for desktop + mobile"],tech:["React","Tailwind CSS","Framer Motion","Vite"],github:"#",live:"#",image:"../images/p6.png"},{title:"WordPress Client Websites (20+ Delivered)",category:"WordPress",description:"Built and deployed 20+ WordPress websites for organizations and businesses, including education, healthcare, services, and associations.",highlights:["Theme customization + Elementor-based UI building","Speed optimization (caching, image compression, Core Web Vitals)","SEO setup, security hardening, and deployment"],tech:["WordPress","Elementor","WPBakery","PHP","SEO","Performance Optimization"],github:null,live:null,image:"../images/wordpress.png",featuredLinks:[{name:"Indian Optometric Association",url:"https://ioaindia.com"},{name:"Vindhyachal Jagran Party",url:"https://vindhyachaljagranparty.com"},{name:"SRM Ayurvedic College & Hospital",url:"https://ayurvediccollegebareilly.in"},{name:"JPG Technosoft",url:"https://jpgtechnosoft.com"}],note:"+ 15 more WordPress websites delivered (available on request)."}];const Um="182",AR=0,Zx=1,CR=2,Su=1,RR=2,el=3,Tr=0,mn=1,Ki=2,Sr=0,ja=1,Zi=2,Jx=3,Qx=4,PR=5,Bs=100,NR=101,LR=102,DR=103,IR=104,UR=200,FR=201,OR=202,kR=203,sp=204,ap=205,BR=206,VR=207,zR=208,jR=209,HR=210,GR=211,WR=212,XR=213,YR=214,op=0,lp=1,cp=2,Ya=3,up=4,dp=5,fp=6,hp=7,qS=0,qR=1,$R=2,ir=0,$S=1,KS=2,ZS=3,qs=4,JS=5,QS=6,eM=7,tM=300,Ys=301,qa=302,pp=303,mp=304,Yu=306,Uu=1e3,Ji=1001,gp=1002,Cn=1003,KR=1004,Yc=1005,Wt=1006,Jf=1007,zn=1008,pi=1009,nM=1010,iM=1011,ml=1012,Fm=1013,sr=1014,Qi=1015,br=1016,Om=1017,km=1018,gl=1020,rM=35902,sM=35899,aM=1021,oM=1022,zi=1023,Ar=1026,Gs=1027,lM=1028,Bm=1029,$a=1030,Vm=1031,zm=1033,Mu=33776,wu=33777,Eu=33778,Tu=33779,vp=35840,xp=35841,yp=35842,_p=35843,Sp=36196,Mp=37492,wp=37496,Ep=37488,Tp=37489,bp=37490,Ap=37491,Cp=37808,Rp=37809,Pp=37810,Np=37811,Lp=37812,Dp=37813,Ip=37814,Up=37815,Fp=37816,Op=37817,kp=37818,Bp=37819,Vp=37820,zp=37821,jp=36492,Hp=36494,Gp=36495,Wp=36283,Xp=36284,Yp=36285,qp=36286,ZR=3200,cM=0,JR=1,Bi="",Gt="srgb",Ka="srgb-linear",Fu="linear",Ot="srgb",_a=7680,ey=519,QR=512,eP=513,tP=514,jm=515,nP=516,iP=517,Hm=518,rP=519,ty=35044,ny="300 es",er=2e3,Ou=2001;function uM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sP(){const n=vl("canvas");return n.style.display="block",n}const iy={};function ry(...n){const e="THREE."+n.shift();console.log(e,...n)}function ct(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function xl(...n){const e=n.join(" ");e in iy||(iy[e]=!0,ct(...n))}function aP(n,e,t){return new Promise(function(r,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}class io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sy=1234567;const al=Math.PI/180,yl=180/Math.PI;function ro(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Gm(n,e){return(n%e+e)%e}function oP(n,e,t,r,a){return r+(n-e)*(a-r)/(t-e)}function lP(n,e,t){return n!==e?(t-n)/(e-n):0}function ol(n,e,t){return(1-t)*n+t*e}function cP(n,e,t,r){return ol(n,e,1-Math.exp(-t*r))}function uP(n,e=1){return e-Math.abs(Gm(n,e*2)-e)}function dP(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fP(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hP(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pP(n,e){return n+Math.random()*(e-n)}function mP(n){return n*(.5-Math.random())}function gP(n){n!==void 0&&(sy=n);let e=sy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vP(n){return n*al}function xP(n){return n*yl}function yP(n){return(n&n-1)===0&&n!==0}function _P(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function SP(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function MP(n,e,t,r,a){const o=Math.cos,c=Math.sin,u=o(t/2),d=c(t/2),h=o((e+r)/2),p=c((e+r)/2),m=o((e-r)/2),g=c((e-r)/2),y=o((r-e)/2),w=c((r-e)/2);switch(a){case"XYX":n.set(u*p,d*m,d*g,u*h);break;case"YZY":n.set(d*g,u*p,d*m,u*h);break;case"ZXZ":n.set(d*m,d*g,u*p,u*h);break;case"XZX":n.set(u*p,d*w,d*y,u*h);break;case"YXY":n.set(d*y,u*p,d*w,u*h);break;case"ZYZ":n.set(d*w,d*y,u*p,u*h);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ai={DEG2RAD:al,RAD2DEG:yl,generateUUID:ro,clamp:Mt,euclideanModulo:Gm,mapLinear:oP,inverseLerp:lP,lerp:ol,damp:cP,pingpong:uP,smoothstep:dP,smootherstep:fP,randInt:hP,randFloat:pP,randFloatSpread:mP,seededRandom:gP,degToRad:vP,radToDeg:xP,isPowerOfTwo:yP,ceilPowerOfTwo:_P,floorPowerOfTwo:SP,setQuaternionFromProperEuler:MP,normalize:qn,denormalize:Ua};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*r-c*a+e.x,this.y=o*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,o,c,u){let d=r[a+0],h=r[a+1],p=r[a+2],m=r[a+3],g=o[c+0],y=o[c+1],w=o[c+2],E=o[c+3];if(u<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u>=1){e[t+0]=g,e[t+1]=y,e[t+2]=w,e[t+3]=E;return}if(m!==E||d!==g||h!==y||p!==w){let S=d*g+h*y+p*w+m*E;S<0&&(g=-g,y=-y,w=-w,E=-E,S=-S);let x=1-u;if(S<.9995){const R=Math.acos(S),P=Math.sin(R);x=Math.sin(x*R)/P,u=Math.sin(u*R)/P,d=d*x+g*u,h=h*x+y*u,p=p*x+w*u,m=m*x+E*u}else{d=d*x+g*u,h=h*x+y*u,p=p*x+w*u,m=m*x+E*u;const R=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=R,h*=R,p*=R,m*=R}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,a,o,c){const u=r[a],d=r[a+1],h=r[a+2],p=r[a+3],m=o[c],g=o[c+1],y=o[c+2],w=o[c+3];return e[t]=u*w+p*m+d*y-h*g,e[t+1]=d*w+p*g+h*m-u*y,e[t+2]=h*w+p*y+u*g-d*m,e[t+3]=p*w-u*m-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(a/2),m=u(o/2),g=d(r/2),y=d(a/2),w=d(o/2);switch(c){case"XYZ":this._x=g*p*m+h*y*w,this._y=h*y*m-g*p*w,this._z=h*p*w+g*y*m,this._w=h*p*m-g*y*w;break;case"YXZ":this._x=g*p*m+h*y*w,this._y=h*y*m-g*p*w,this._z=h*p*w-g*y*m,this._w=h*p*m+g*y*w;break;case"ZXY":this._x=g*p*m-h*y*w,this._y=h*y*m+g*p*w,this._z=h*p*w+g*y*m,this._w=h*p*m-g*y*w;break;case"ZYX":this._x=g*p*m-h*y*w,this._y=h*y*m+g*p*w,this._z=h*p*w-g*y*m,this._w=h*p*m+g*y*w;break;case"YZX":this._x=g*p*m+h*y*w,this._y=h*y*m+g*p*w,this._z=h*p*w-g*y*m,this._w=h*p*m-g*y*w;break;case"XZY":this._x=g*p*m-h*y*w,this._y=h*y*m-g*p*w,this._z=h*p*w+g*y*m,this._w=h*p*m+g*y*w;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],o=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=r+u+m;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(o-h)*y,this._z=(c-a)*y}else if(r>u&&r>m){const y=2*Math.sqrt(1+r-u-m);this._w=(p-d)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(o+h)/y}else if(u>m){const y=2*Math.sqrt(1+u-r-m);this._w=(o-h)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+m-r-u);this._w=(c-a)/y,this._x=(o+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,o=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+a*h-o*d,this._y=a*p+c*d+o*u-r*h,this._z=o*p+c*h+r*d-a*u,this._w=c*p-r*u-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,a=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,a=-a,o=-o,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ay.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ay.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*a,this.y=o[1]*t+o[4]*r+o[7]*a,this.z=o[2]*t+o[5]*r+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*r+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*r+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,o=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*r),p=2*(u*t-o*a),m=2*(o*r-c*t);return this.x=t+d*h+c*m-u*p,this.y=r+d*p+u*h-o*m,this.z=a+d*m+o*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*a,this.y=o[1]*t+o[5]*r+o[9]*a,this.z=o[2]*t+o[6]*r+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-o*u,this.y=o*c-r*d,this.z=r*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new ae,ay=new bl;class ht{constructor(e,t,r,a,o,c,u,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,u,d,h)}set(e,t,r,a,o,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],m=r[7],g=r[2],y=r[5],w=r[8],E=a[0],S=a[3],x=a[6],R=a[1],P=a[4],N=a[7],C=a[2],I=a[5],F=a[8];return o[0]=c*E+u*R+d*C,o[3]=c*S+u*P+d*I,o[6]=c*x+u*N+d*F,o[1]=h*E+p*R+m*C,o[4]=h*S+p*P+m*I,o[7]=h*x+p*N+m*F,o[2]=g*E+y*R+w*C,o[5]=g*S+y*P+w*I,o[8]=g*x+y*N+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*o*p+r*u*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,g=u*d-p*o,y=h*o-c*d,w=t*m+r*g+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=m*E,e[1]=(a*h-p*r)*E,e[2]=(u*r-a*c)*E,e[3]=g*E,e[4]=(p*t-a*d)*E,e[5]=(a*o-u*t)*E,e[6]=y*E,e[7]=(r*d-h*t)*E,e[8]=(c*t-r*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new ht,oy=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ly=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wP(){const n={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ot&&(a.r=Mr(a.r),a.g=Mr(a.g),a.b=Mr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(a.r=Ha(a.r),a.g=Ha(a.g),a.b=Ha(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bi?Fu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ka]:{primaries:e,whitePoint:r,transfer:Fu,toXYZ:oy,fromXYZ:ly,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:oy,fromXYZ:ly,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const Ct=wP();function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sa;class EP{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Sa===void 0&&(Sa=vl("canvas")),Sa.width=e.width,Sa.height=e.height;const a=Sa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Sa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Mr(o[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TP=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TP++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(th(a[c].image)):o.push(th(a[c]))}else o=th(a);r.url=o}return t||(e.images[this.uuid]=r),r}}function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?EP.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let bP=0;const nh=new ae;class jn extends io{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,r=Ji,a=Ji,o=Wt,c=zn,u=zi,d=pi,h=jn.DEFAULT_ANISOTROPY,p=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bP++}),this.uuid=ro(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uu:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case gp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uu:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case gp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=tM;jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,a=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,o;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],y=d[5],w=d[9],E=d[2],S=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-E)<.01&&Math.abs(w-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+E)<.1&&Math.abs(w+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,N=(y+1)/2,C=(x+1)/2,I=(p+g)/4,F=(m+E)/4,V=(w+S)/4;return P>N&&P>C?P<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(P),a=I/r,o=F/r):N>C?N<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),r=I/a,o=V/a):C<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(C),r=F/o,a=V/o),this.set(r,a,o,t),this}let R=Math.sqrt((S-w)*(S-w)+(m-E)*(m-E)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(S-w)/R,this.y=(m-E)/R,this.z=(g-p)/R,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AP extends io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const a={width:e,height:t,depth:r.depth},o=new jn(a);this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Wm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends AP{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class dM extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CP extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ui):Ui.fromBufferAttribute(o,c),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qc.copy(r.boundingBox)),qc.applyMatrix4(e.matrixWorld),this.union(qc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),$c.subVectors(this.max,Yo),Ma.subVectors(e.a,Yo),wa.subVectors(e.b,Yo),Ea.subVectors(e.c,Yo),Zr.subVectors(wa,Ma),Jr.subVectors(Ea,wa),Ns.subVectors(Ma,Ea);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Ns.z,Ns.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Ns.z,0,-Ns.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Ns.y,Ns.x,0];return!ih(t,Ma,wa,Ea,$c)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,Ma,wa,Ea,$c))?!1:(Kc.crossVectors(Zr,Jr),t=[Kc.x,Kc.y,Kc.z],ih(t,Ma,wa,Ea,$c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ui=new ae,qc=new Al,Ma=new ae,wa=new ae,Ea=new ae,Zr=new ae,Jr=new ae,Ns=new ae,Yo=new ae,$c=new ae,Kc=new ae,Ls=new ae;function ih(n,e,t,r,a){for(let o=0,c=n.length-3;o<=c;o+=3){Ls.fromArray(n,o);const u=a.x*Math.abs(Ls.x)+a.y*Math.abs(Ls.y)+a.z*Math.abs(Ls.z),d=e.dot(Ls),h=t.dot(Ls),p=r.dot(Ls);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const RP=new Al,qo=new ae,rh=new ae;class qu{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):RP.setFromPoints(e).getCenter(r);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(rh)),this.expandByPoint(qo.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gr=new ae,sh=new ae,Zc=new ae,Qr=new ae,ah=new ae,Jc=new ae,oh=new ae;class fM{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){sh.copy(e).add(t).multiplyScalar(.5),Zc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(sh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Zc),u=Qr.dot(this.direction),d=-Qr.dot(Zc),h=Qr.lengthSq(),p=Math.abs(1-c*c);let m,g,y,w;if(p>0)if(m=c*d-u,g=c*u-d,w=o*p,m>=0)if(g>=-w)if(g<=w){const E=1/p;m*=E,g*=E,y=m*(m+c*g+2*u)+g*(c*m+g+2*d)+h}else g=o,m=Math.max(0,-(c*g+u)),y=-m*m+g*(g+2*d)+h;else g=-o,m=Math.max(0,-(c*g+u)),y=-m*m+g*(g+2*d)+h;else g<=-w?(m=Math.max(0,-(-c*o+u)),g=m>0?-o:Math.min(Math.max(-o,-d),o),y=-m*m+g*(g+2*d)+h):g<=w?(m=0,g=Math.min(Math.max(-o,-d),o),y=g*(g+2*d)+h):(m=Math.max(0,-(c*o+u)),g=m>0?o:Math.min(Math.max(-o,-d),o),y=-m*m+g*(g+2*d)+h);else g=c>0?-o:o,m=Math.max(0,-(c*g+u)),y=-m*m+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(sh).addScaledVector(Zc,g),y}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const r=gr.dot(this.direction),a=gr.dot(gr)-r*r,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,o,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),r>d||u>a)||((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,r,a,o){ah.subVectors(t,e),Jc.subVectors(r,e),oh.crossVectors(ah,Jc);let c=this.direction.dot(oh),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Qr.subVectors(this.origin,e);const d=u*this.direction.dot(Jc.crossVectors(Qr,Jc));if(d<0)return null;const h=u*this.direction.dot(ah.cross(Qr));if(h<0||d+h>c)return null;const p=-u*Qr.dot(oh);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,r,a,o,c,u,d,h,p,m,g,y,w,E,S){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,u,d,h,p,m,g,y,w,E,S)}set(e,t,r,a,o,c,u,d,h,p,m,g,y,w,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=o,x[5]=c,x[9]=u,x[13]=d,x[2]=h,x[6]=p,x[10]=m,x[14]=g,x[3]=y,x[7]=w,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Ta.setFromMatrixColumn(e,0).length(),o=1/Ta.setFromMatrixColumn(e,1).length(),c=1/Ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,o=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=c*p,y=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=y+w*h,t[5]=g-E*h,t[9]=-u*d,t[2]=E-g*h,t[6]=w+y*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,y=d*m,w=h*p,E=h*m;t[0]=g+E*u,t[4]=w*u-y,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=E+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,y=d*m,w=h*p,E=h*m;t[0]=g-E*u,t[4]=-c*m,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=E-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,y=c*m,w=u*p,E=u*m;t[0]=d*p,t[4]=w*h-y,t[8]=g*h+E,t[1]=d*m,t[5]=E*h+g,t[9]=y*h-w,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,y=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=E-g*m,t[8]=w*m+y,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*m+w,t[10]=g-E*m}else if(e.order==="XZY"){const g=c*d,y=c*h,w=u*d,E=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+E,t[5]=c*p,t[9]=y*m-w,t[2]=w*m-y,t[6]=u*p,t[10]=E*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PP,e,NP)}lookAt(e,t,r){const a=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),es.crossVectors(r,fi),es.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),es.crossVectors(r,fi)),es.normalize(),Qc.crossVectors(fi,es),a[0]=es.x,a[4]=Qc.x,a[8]=fi.x,a[1]=es.y,a[5]=Qc.y,a[9]=fi.y,a[2]=es.z,a[6]=Qc.z,a[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],m=r[5],g=r[9],y=r[13],w=r[2],E=r[6],S=r[10],x=r[14],R=r[3],P=r[7],N=r[11],C=r[15],I=a[0],F=a[4],V=a[8],A=a[12],L=a[1],z=a[5],ne=a[9],j=a[13],J=a[2],le=a[6],Q=a[10],H=a[14],k=a[3],ie=a[7],U=a[11],G=a[15];return o[0]=c*I+u*L+d*J+h*k,o[4]=c*F+u*z+d*le+h*ie,o[8]=c*V+u*ne+d*Q+h*U,o[12]=c*A+u*j+d*H+h*G,o[1]=p*I+m*L+g*J+y*k,o[5]=p*F+m*z+g*le+y*ie,o[9]=p*V+m*ne+g*Q+y*U,o[13]=p*A+m*j+g*H+y*G,o[2]=w*I+E*L+S*J+x*k,o[6]=w*F+E*z+S*le+x*ie,o[10]=w*V+E*ne+S*Q+x*U,o[14]=w*A+E*j+S*H+x*G,o[3]=R*I+P*L+N*J+C*k,o[7]=R*F+P*z+N*le+C*ie,o[11]=R*V+P*ne+N*Q+C*U,o[15]=R*A+P*j+N*H+C*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],o=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],y=e[14],w=e[3],E=e[7],S=e[11],x=e[15],R=d*y-h*g,P=u*y-h*m,N=u*g-d*m,C=c*y-h*p,I=c*g-d*p,F=c*m-u*p;return t*(E*R-S*P+x*N)-r*(w*R-S*C+x*I)+a*(w*P-E*C+x*F)-o*(w*N-E*I+S*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],y=e[11],w=e[12],E=e[13],S=e[14],x=e[15],R=m*S*h-E*g*h+E*d*y-u*S*y-m*d*x+u*g*x,P=w*g*h-p*S*h-w*d*y+c*S*y+p*d*x-c*g*x,N=p*E*h-w*m*h+w*u*y-c*E*y-p*u*x+c*m*x,C=w*m*d-p*E*d-w*u*g+c*E*g+p*u*S-c*m*S,I=t*R+r*P+a*N+o*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=R*F,e[1]=(E*g*o-m*S*o-E*a*y+r*S*y+m*a*x-r*g*x)*F,e[2]=(u*S*o-E*d*o+E*a*h-r*S*h-u*a*x+r*d*x)*F,e[3]=(m*d*o-u*g*o-m*a*h+r*g*h+u*a*y-r*d*y)*F,e[4]=P*F,e[5]=(p*S*o-w*g*o+w*a*y-t*S*y-p*a*x+t*g*x)*F,e[6]=(w*d*o-c*S*o-w*a*h+t*S*h+c*a*x-t*d*x)*F,e[7]=(c*g*o-p*d*o+p*a*h-t*g*h-c*a*y+t*d*y)*F,e[8]=N*F,e[9]=(w*m*o-p*E*o-w*r*y+t*E*y+p*r*x-t*m*x)*F,e[10]=(c*E*o-w*u*o+w*r*h-t*E*h-c*r*x+t*u*x)*F,e[11]=(p*u*o-c*m*o-p*r*h+t*m*h+c*r*y-t*u*y)*F,e[12]=C*F,e[13]=(p*E*a-w*m*a+w*r*g-t*E*g-p*r*S+t*m*S)*F,e[14]=(w*u*a-c*E*a-w*r*d+t*E*d+c*r*S-t*u*S)*F,e[15]=(c*m*a-p*u*a+p*r*d-t*m*d-c*r*g+t*u*g)*F,this}scale(e){const t=this.elements,r=e.x,a=e.y,o=e.z;return t[0]*=r,t[4]*=a,t[8]*=o,t[1]*=r,t[5]*=a,t[9]*=o,t[2]*=r,t[6]*=a,t[10]*=o,t[3]*=r,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),o=1-r,c=e.x,u=e.y,d=e.z,h=o*c,p=o*u;return this.set(h*c+r,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+r,p*d-a*c,0,h*d-a*u,p*d+a*c,o*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,o,c){return this.set(1,r,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,h=o+o,p=c+c,m=u+u,g=o*h,y=o*p,w=o*m,E=c*p,S=c*m,x=u*m,R=d*h,P=d*p,N=d*m,C=r.x,I=r.y,F=r.z;return a[0]=(1-(E+x))*C,a[1]=(y+N)*C,a[2]=(w-P)*C,a[3]=0,a[4]=(y-N)*I,a[5]=(1-(g+x))*I,a[6]=(S+R)*I,a[7]=0,a[8]=(w+P)*F,a[9]=(S-R)*F,a[10]=(1-(g+E))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let o=Ta.set(a[0],a[1],a[2]).length();const c=Ta.set(a[4],a[5],a[6]).length(),u=Ta.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),Fi.copy(this);const h=1/o,p=1/c,m=1/u;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=p,Fi.elements[5]*=p,Fi.elements[6]*=p,Fi.elements[8]*=m,Fi.elements[9]*=m,Fi.elements[10]*=m,t.setFromRotationMatrix(Fi),r.x=o,r.y=c,r.z=u,this}makePerspective(e,t,r,a,o,c,u=er,d=!1){const h=this.elements,p=2*o/(t-e),m=2*o/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let w,E;if(d)w=o/(c-o),E=c*o/(c-o);else if(u===er)w=-(c+o)/(c-o),E=-2*c*o/(c-o);else if(u===Ou)w=-c/(c-o),E=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,o,c,u=er,d=!1){const h=this.elements,p=2/(t-e),m=2/(r-a),g=-(t+e)/(t-e),y=-(r+a)/(r-a);let w,E;if(d)w=1/(c-o),E=c/(c-o);else if(u===er)w=-2/(c-o),E=-(c+o)/(c-o);else if(u===Ou)w=-1/(c-o),E=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=w,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ta=new ae,Fi=new Kt,PP=new ae(0,0,0),NP=new ae(1,1,1),es=new ae,Qc=new ae,fi=new ae,cy=new Kt,uy=new bl;class ar{constructor(e=0,t=0,r=0,a=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],m=a[2],g=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cy,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uy.setFromEuler(this),this.setFromQuaternion(uy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class hM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LP=0;const dy=new ae,ba=new bl,vr=new Kt,eu=new ae,$o=new ae,DP=new ae,IP=new bl,fy=new ae(1,0,0),hy=new ae(0,1,0),py=new ae(0,0,1),my={type:"added"},UP={type:"removed"},Aa={type:"childadded",child:null},lh={type:"childremoved",child:null};class Rn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LP++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ae,t=new ar,r=new bl,a=new ae(1,1,1);function o(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ht}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.multiply(ba),this}rotateOnWorldAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.premultiply(ba),this}rotateX(e){return this.rotateOnAxis(fy,e)}rotateY(e){return this.rotateOnAxis(hy,e)}rotateZ(e){return this.rotateOnAxis(py,e)}translateOnAxis(e,t){return dy.copy(e).applyQuaternion(this.quaternion),this.position.add(dy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fy,e)}translateY(e){return this.translateOnAxis(hy,e)}translateZ(e){return this.translateOnAxis(py,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?eu.copy(e):eu.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt($o,eu,this.up):vr.lookAt(eu,$o,this.up),this.quaternion.setFromRotationMatrix(vr),a&&(vr.extractRotation(a.matrixWorld),ba.setFromRotationMatrix(vr),this.quaternion.premultiply(ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(my),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UP),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(my),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,DP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,IP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];o(e.shapes,m)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(e.materials,this.material[d]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),g=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Rn.DEFAULT_UP=new ae(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new ae,xr=new ae,ch=new ae,yr=new ae,Ca=new ae,Ra=new ae,gy=new ae,uh=new ae,dh=new ae,fh=new ae,hh=new rn,ph=new rn,mh=new rn;class Vi{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Oi.subVectors(e,t),a.cross(Oi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,r,a,o){Oi.subVectors(a,t),xr.subVectors(r,t),ch.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(xr),d=Oi.dot(ch),h=xr.dot(xr),p=xr.dot(ch),m=c*h-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,y=(h*d-u*p)*g,w=(c*p-u*d)*g;return o.set(1-y-w,w,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,a,o,c,u,d){return this.getBarycoord(e,t,r,a,yr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,yr.x),d.addScaledVector(c,yr.y),d.addScaledVector(u,yr.z),d)}static getInterpolatedAttribute(e,t,r,a,o,c){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(hh,o.x),c.addScaledVector(ph,o.y),c.addScaledVector(mh,o.z),c}static isFrontFacing(e,t,r,a){return Oi.subVectors(r,t),xr.subVectors(e,t),Oi.cross(xr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Oi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,o){return Vi.getInterpolation(e,this.a,this.b,this.c,t,r,a,o)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,o=this.c;let c,u;Ca.subVectors(a,r),Ra.subVectors(o,r),uh.subVectors(e,r);const d=Ca.dot(uh),h=Ra.dot(uh);if(d<=0&&h<=0)return t.copy(r);dh.subVectors(e,a);const p=Ca.dot(dh),m=Ra.dot(dh);if(p>=0&&m<=p)return t.copy(a);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(Ca,c);fh.subVectors(e,o);const y=Ca.dot(fh),w=Ra.dot(fh);if(w>=0&&y<=w)return t.copy(o);const E=y*h-d*w;if(E<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(r).addScaledVector(Ra,u);const S=p*w-y*m;if(S<=0&&m-p>=0&&y-w>=0)return gy.subVectors(o,a),u=(m-p)/(m-p+(y-w)),t.copy(a).addScaledVector(gy,u);const x=1/(S+E+g);return c=E*x,u=g*x,t.copy(r).addScaledVector(Ca,c).addScaledVector(Ra,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},tu={h:0,s:0,l:0};function gh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Ct.workingColorSpace){if(e=Gm(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,c=2*r-o;this.r=gh(c,o,e+1/3),this.g=gh(c,o,e),this.b=gh(c,o,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=Gt){function r(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const r=pM[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ct.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(On.copy(this),t);const r=On.r,a=On.g,o=On.b,c=Math.max(r,a,o),u=Math.min(r,a,o);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case r:d=(a-o)/m+(a<o?6:0);break;case a:d=(o-r)/m+2;break;case o:d=(r-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Gt){Ct.workingToColorSpace(On.copy(this),e);const t=On.r,r=On.g,a=On.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(tu);const r=ol(ts.h,tu.h,t),a=ol(ts.s,tu.s,t),o=ol(ts.l,tu.l,t);return this.setHSL(r,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*a,this.g=o[1]*t+o[4]*r+o[7]*a,this.b=o[2]*t+o[5]*r+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new wt;wt.NAMES=pM;let FP=0;class so extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FP++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=ja,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=ap,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ey,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sp&&(r.blendSrc=this.blendSrc),this.blendDst!==ap&&(r.blendDst=this.blendDst),this.blendEquation!==Bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ey&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_a&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_a&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_a&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(r.textures=o),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mM extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=qS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new ae,nu=new Rt;let OP=0;class Jn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ty,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)nu.fromBufferAttribute(this,t),nu.applyMatrix3(e),this.setXY(t,nu.x,nu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),a=qn(a,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ty&&(e.usage=this.usage),e}}class gM extends Jn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class vM extends Jn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends Jn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let kP=0;const Mi=new Kt,vh=new Rn,Pa=new ae,hi=new Al,Ko=new Al,wn=new ae;class Pn extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uM(e)?vM:gM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ht().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,r){return Mi.makeTranslation(e,t,r),this.applyMatrix4(Mi),this}scale(e,t,r){return Mi.makeScale(e,t,r),this.applyMatrix4(Mi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Ko.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(hi.min,Ko.min),hi.expandByPoint(wn),wn.addVectors(hi.max,Ko.max),hi.expandByPoint(wn)):(hi.expandByPoint(Ko.min),hi.expandByPoint(Ko.max))}hi.getCenter(r);let a=0;for(let o=0,c=e.count;o<c;o++)wn.fromBufferAttribute(e,o),a=Math.max(a,r.distanceToSquared(wn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)wn.fromBufferAttribute(u,h),d&&(Pa.fromBufferAttribute(e,h),wn.add(Pa)),a=Math.max(a,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let V=0;V<r.count;V++)u[V]=new ae,d[V]=new ae;const h=new ae,p=new ae,m=new ae,g=new Rt,y=new Rt,w=new Rt,E=new ae,S=new ae;function x(V,A,L){h.fromBufferAttribute(r,V),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,L),g.fromBufferAttribute(o,V),y.fromBufferAttribute(o,A),w.fromBufferAttribute(o,L),p.sub(h),m.sub(h),y.sub(g),w.sub(g);const z=1/(y.x*w.y-w.x*y.y);isFinite(z)&&(E.copy(p).multiplyScalar(w.y).addScaledVector(m,-y.y).multiplyScalar(z),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(z),u[V].add(E),u[A].add(E),u[L].add(E),d[V].add(S),d[A].add(S),d[L].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let V=0,A=R.length;V<A;++V){const L=R[V],z=L.start,ne=L.count;for(let j=z,J=z+ne;j<J;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new ae,N=new ae,C=new ae,I=new ae;function F(V){C.fromBufferAttribute(a,V),I.copy(C);const A=u[V];P.copy(A),P.sub(C.multiplyScalar(C.dot(A))).normalize(),N.crossVectors(I,A);const z=N.dot(d[V])<0?-1:1;c.setXYZW(V,P.x,P.y,P.z,z)}for(let V=0,A=R.length;V<A;++V){const L=R[V],z=L.start,ne=L.count;for(let j=z,J=z+ne;j<J;j+=3)F(e.getX(j+0)),F(e.getX(j+1)),F(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const a=new ae,o=new ae,c=new ae,u=new ae,d=new ae,h=new ae,p=new ae,m=new ae;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),E=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,w),o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),u.fromBufferAttribute(r,w),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),u.add(p),d.add(p),h.add(p),r.setXYZ(w,u.x,u.y,u.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(d.length*p);let y=0,w=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?y=d[E]*u.data.stride+u.offset:y=d[E]*p;for(let x=0;x<p;x++)g[w++]=h[y++]}return new Jn(g,p,m)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,r=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,r);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=e(g,r);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(a[d]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,y=m.length;g<y;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vy=new Kt,Ds=new fM,iu=new qu,xy=new ae,ru=new ae,su=new ae,au=new ae,xh=new ae,ou=new ae,yy=new ae,lu=new ae;class qt extends Rn{constructor(e=new Pn,t=new mM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){ou.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=u[d],m=o[d];p!==0&&(xh.fromBufferAttribute(m,e),c?ou.addScaledVector(xh,p):ou.addScaledVector(xh.sub(t),p))}t.add(ou)}return t}raycast(e,t){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(o),Ds.copy(e.ray).recast(e.near),!(iu.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(iu,xy)===null||Ds.origin.distanceToSquared(xy)>(e.far-e.near)**2))&&(vy.copy(o).invert(),Ds.copy(e.ray).applyMatrix4(vy),!(r.boundingBox!==null&&Ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,r){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const S=g[w],x=c[S.materialIndex],R=Math.max(S.start,y.start),P=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let N=R,C=P;N<C;N+=3){const I=u.getX(N),F=u.getX(N+1),V=u.getX(N+2);a=cu(this,x,e,r,h,p,m,I,F,V),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=w,x=E;S<x;S+=3){const R=u.getX(S),P=u.getX(S+1),N=u.getX(S+2);a=cu(this,c,e,r,h,p,m,R,P,N),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,E=g.length;w<E;w++){const S=g[w],x=c[S.materialIndex],R=Math.max(S.start,y.start),P=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let N=R,C=P;N<C;N+=3){const I=N,F=N+1,V=N+2;a=cu(this,x,e,r,h,p,m,I,F,V),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=w,x=E;S<x;S+=3){const R=S,P=S+1,N=S+2;a=cu(this,c,e,r,h,p,m,R,P,N),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function BP(n,e,t,r,a,o,c,u){let d;if(e.side===mn?d=r.intersectTriangle(c,o,a,!0,u):d=r.intersectTriangle(a,o,c,e.side===Tr,u),d===null)return null;lu.copy(u),lu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(lu);return h<t.near||h>t.far?null:{distance:h,point:lu.clone(),object:n}}function cu(n,e,t,r,a,o,c,u,d,h){n.getVertexPosition(u,ru),n.getVertexPosition(d,su),n.getVertexPosition(h,au);const p=BP(n,e,t,r,ru,su,au,yy);if(p){const m=new ae;Vi.getBarycoord(yy,ru,su,au,m),a&&(p.uv=Vi.getInterpolatedAttribute(a,u,d,h,m,new Rt)),o&&(p.uv1=Vi.getInterpolatedAttribute(o,u,d,h,m,new Rt)),c&&(p.normal=Vi.getInterpolatedAttribute(c,u,d,h,m,new ae),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new ae,materialIndex:0};Vi.getNormal(ru,su,au,g.normal),p.face=g,p.barycoord=m}return p}class Cl extends Pn{constructor(e=1,t=1,r=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],p=[],m=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,c,o,0),w("z","y","x",1,-1,r,t,-e,c,o,1),w("x","z","y",1,1,e,r,t,a,c,2),w("x","z","y",1,-1,e,r,-t,a,c,3),w("x","y","z",1,-1,e,t,r,a,o,4),w("x","y","z",-1,-1,e,t,-r,a,o,5),this.setIndex(d),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(p,3)),this.setAttribute("uv",new Hn(m,2));function w(E,S,x,R,P,N,C,I,F,V,A){const L=N/F,z=C/V,ne=N/2,j=C/2,J=I/2,le=F+1,Q=V+1;let H=0,k=0;const ie=new ae;for(let U=0;U<Q;U++){const G=U*z-j;for(let ge=0;ge<le;ge++){const de=ge*L-ne;ie[E]=de*R,ie[S]=G*P,ie[x]=J,h.push(ie.x,ie.y,ie.z),ie[E]=0,ie[S]=0,ie[x]=I>0?1:-1,p.push(ie.x,ie.y,ie.z),m.push(ge/F),m.push(1-U/V),H+=1}}for(let U=0;U<V;U++)for(let G=0;G<F;G++){const ge=g+G+le*U,de=g+G+le*(U+1),Le=g+(G+1)+le*(U+1),Te=g+(G+1)+le*U;d.push(ge,de,Te),d.push(de,Le,Te),k+=6}u.addGroup(y,k,A),y+=k,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const a=n[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function $n(n){const e={};for(let t=0;t<n.length;t++){const r=Za(n[t]);for(const a in r)e[a]=r[a]}return e}function VP(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const zP={clone:Za,merge:$n};var jP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jP,this.fragmentShader=HP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=VP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class yM extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new ae,_y=new Rt,Sy=new Rt;class kn extends yM{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,_y,Sy),t.subVectors(Sy,_y)}setViewOffset(e,t,r,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(al*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Na=-90,La=1;class GP extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new kn(Na,La,e,t);a.layers=this.layers,this.add(a);const o=new kn(Na,La,e,t);o.layers=this.layers,this.add(o);const c=new kn(Na,La,e,t);c.layers=this.layers,this.add(c);const u=new kn(Na,La,e,t);u.layers=this.layers,this.add(u);const d=new kn(Na,La,e,t);d.layers=this.layers,this.add(d);const h=new kn(Na,La,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,o,c,u,d]=t;for(const h of t)this.remove(h);if(e===er)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ou)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,o),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,u),e.setRenderTarget(r,3,a),e.render(t,d),e.setRenderTarget(r,4,a),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(t,p),e.setRenderTarget(m,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class _M extends jn{constructor(e=[],t=Ys,r,a,o,c,u,d,h,p){super(e,t,r,a,o,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new _M(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Cl(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:Za(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mn,blending:Sr});o.uniforms.tEquirect.value=t;const c=new qt(a,o),u=t.minFilter;return t.minFilter===zn&&(t.minFilter=Wt),new GP(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(o)}}class _r extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WP={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),y=.02,w=.005;h.inputState.pinching&&g>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(WP)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _r;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Rl extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class XP extends jn{constructor(e=null,t=1,r=1,a,o,c,u,d,h=Cn,p=Cn,m,g){super(null,c,u,d,h,p,a,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new ae,YP=new ae,qP=new ht;class ks{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=_h.subVectors(r,t).cross(YP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_h),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||qP.getNormalMatrix(e),a=this.coplanarPoint(_h).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new qu,$P=new Rt(.5,.5),uu=new ae;class Xm{constructor(e=new ks,t=new ks,r=new ks,a=new ks,o=new ks,c=new ks){this.planes=[e,t,r,a,o,c]}set(e,t,r,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=er,r=!1){const a=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],m=o[5],g=o[6],y=o[7],w=o[8],E=o[9],S=o[10],x=o[11],R=o[12],P=o[13],N=o[14],C=o[15];if(a[0].setComponents(h-c,y-p,x-w,C-R).normalize(),a[1].setComponents(h+c,y+p,x+w,C+R).normalize(),a[2].setComponents(h+u,y+m,x+E,C+P).normalize(),a[3].setComponents(h-u,y-m,x-E,C-P).normalize(),r)a[4].setComponents(d,g,S,N).normalize(),a[5].setComponents(h-d,y-g,x-S,C-N).normalize();else if(a[4].setComponents(h-d,y-g,x-S,C-N).normalize(),t===er)a[5].setComponents(h+d,y+g,x+S,C+N).normalize();else if(t===Ou)a[5].setComponents(d,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=$P.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(uu.x=a.normal.x>0?e.max.x:e.min.x,uu.y=a.normal.y>0?e.max.y:e.min.y,uu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ao extends so{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const My=new Kt,$p=new fM,du=new qu,fu=new ae;class Pl extends Rn{constructor(e=new Pn,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(a),du.radius+=o,e.ray.intersectsSphere(du)===!1)return;My.copy(a).invert(),$p.copy(e.ray).applyMatrix4(My);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=r.index,m=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let w=g,E=y;w<E;w++){const S=h.getX(w);fu.fromBufferAttribute(m,S),wy(fu,S,d,a,e,t,this)}}else{const g=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let w=g,E=y;w<E;w++)fu.fromBufferAttribute(m,w),wy(fu,w,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function wy(n,e,t,r,a,o,c){const u=$p.distanceSqToPoint(n);if(u<t){const d=new ae;$p.closestPointToPoint(n,d),d.applyMatrix4(r);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class _l extends jn{constructor(e,t,r=sr,a,o,c,u=Cn,d=Cn,h,p=Ar,m=1){if(p!==Ar&&p!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,a,o,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class KP extends _l{constructor(e,t=sr,r=Ys,a,o,c=Cn,u=Cn,d,h=Ar){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,r,a,o,c,u,d,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class MM extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $u extends Pn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(r),d=Math.floor(a),h=u+1,p=d+1,m=e/u,g=t/d,y=[],w=[],E=[],S=[];for(let x=0;x<p;x++){const R=x*g-c;for(let P=0;P<h;P++){const N=P*m-o;w.push(N,-R,0),E.push(0,0,1),S.push(P/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<u;R++){const P=R+h*x,N=R+h*(x+1),C=R+1+h*(x+1),I=R+1+h*x;y.push(P,N,I),y.push(N,C,I)}this.setIndex(y),this.setAttribute("position",new Hn(w,3)),this.setAttribute("normal",new Hn(E,3)),this.setAttribute("uv",new Hn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ym extends Pn{constructor(e=.5,t=1,r=32,a=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:o,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const u=[],d=[],h=[],p=[];let m=e;const g=(t-e)/a,y=new ae,w=new Rt;for(let E=0;E<=a;E++){for(let S=0;S<=r;S++){const x=o+S/r*c;y.x=m*Math.cos(x),y.y=m*Math.sin(x),d.push(y.x,y.y,y.z),h.push(0,0,1),w.x=(y.x/t+1)/2,w.y=(y.y/t+1)/2,p.push(w.x,w.y)}m+=g}for(let E=0;E<a;E++){const S=E*(r+1);for(let x=0;x<r;x++){const R=x+S,P=R,N=R+r+1,C=R+r+2,I=R+1;u.push(P,N,I),u.push(N,C,I)}}this.setIndex(u),this.setAttribute("position",new Hn(d,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ym(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bn extends Pn{constructor(e=1,t=32,r=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+u,Math.PI);let h=0;const p=[],m=new ae,g=new ae,y=[],w=[],E=[],S=[];for(let x=0;x<=r;x++){const R=[],P=x/r;let N=0;x===0&&c===0?N=.5/t:x===r&&d===Math.PI&&(N=-.5/t);for(let C=0;C<=t;C++){const I=C/t;m.x=-e*Math.cos(a+I*o)*Math.sin(c+P*u),m.y=e*Math.cos(c+P*u),m.z=e*Math.sin(a+I*o)*Math.sin(c+P*u),w.push(m.x,m.y,m.z),g.copy(m).normalize(),E.push(g.x,g.y,g.z),S.push(I+N,1-P),R.push(h++)}p.push(R)}for(let x=0;x<r;x++)for(let R=0;R<t;R++){const P=p[x][R+1],N=p[x][R],C=p[x+1][R],I=p[x+1][R+1];(x!==0||c>0)&&y.push(P,N,I),(x!==r-1||d<Math.PI)&&y.push(N,C,I)}this.setIndex(y),this.setAttribute("position",new Hn(w,3)),this.setAttribute("normal",new Hn(E,3)),this.setAttribute("uv",new Hn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ZP extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ja extends so{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cM,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JP extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QP extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class e2{constructor(e,t,r){const a=this;let o=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const y=h[m],w=h[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const t2=new e2;class qm{constructor(e){this.manager=e!==void 0?e:t2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,o){r.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Da=new WeakMap;class n2 extends qm{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Sh.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let m=Da.get(c);m===void 0&&(m=[],Da.set(c,m)),m.push({onLoad:t,onError:a})}return c}const u=vl("img");function d(){p(),t&&t(this);const m=Da.get(this)||[];for(let g=0;g<m.length;g++){const y=m[g];y.onLoad&&y.onLoad(this)}Da.delete(this),o.manager.itemEnd(e)}function h(m){p(),a&&a(m),Sh.remove(`image:${e}`);const g=Da.get(this)||[];for(let y=0;y<g.length;y++){const w=g[y];w.onError&&w.onError(m)}Da.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Sh.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class Nl extends qm{constructor(e){super(e)}load(e,t,r,a){const o=new jn,c=new n2(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},r,a),o}}class wM extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Mh=new Kt,Ey=new ae,Ty=new ae;class i2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xm,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ey.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ey),Ty.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ty),t.updateMatrixWorld(),Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $m extends yM{constructor(e=-1,t=1,r=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-e,c=r+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r2 extends i2{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends wM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new r2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ll extends wM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s2 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function by(n,e,t,r){const a=a2(r);switch(t){case aM:return n*e;case lM:return n*e/a.components*a.byteLength;case Bm:return n*e/a.components*a.byteLength;case $a:return n*e*2/a.components*a.byteLength;case Vm:return n*e*2/a.components*a.byteLength;case oM:return n*e*3/a.components*a.byteLength;case zi:return n*e*4/a.components*a.byteLength;case zm:return n*e*4/a.components*a.byteLength;case Mu:case wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xp:case _p:return Math.max(n,16)*Math.max(e,8)/4;case vp:case yp:return Math.max(n,8)*Math.max(e,8)/2;case Sp:case Mp:case Ep:case Tp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wp:case bp:case Ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Np:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jp:case Hp:case Gp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wp:case Xp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yp:case qp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a2(n){switch(n){case pi:case nM:return{byteLength:1,components:1};case ml:case iM:case br:return{byteLength:2,components:1};case Om:case km:return{byteLength:2,components:4};case sr:case Fm:case Qi:return{byteLength:4,components:1};case rM:case sM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);function EM(){let n=null,e=!1,t=null,r=null;function a(o,c){t(o,c),r=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function o2(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function r(u,d,h){const p=d.array,m=d.updateRanges;if(n.bindBuffer(h,u),m.length===0)n.bufferSubData(h,0,p);else{m.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<m.length;y++){const w=m[g],E=m[y];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++g,m[g]=E)}m.length=g+1;for(let y=0,w=m.length;y<w;y++){const E=m[y];n.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var l2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k2="gl_FragColor = linearToOutputTexel( gl_FragColor );",B2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,G3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_N=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ON=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:l2,alphahash_pars_fragment:c2,alphamap_fragment:u2,alphamap_pars_fragment:d2,alphatest_fragment:f2,alphatest_pars_fragment:h2,aomap_fragment:p2,aomap_pars_fragment:m2,batching_pars_vertex:g2,batching_vertex:v2,begin_vertex:x2,beginnormal_vertex:y2,bsdfs:_2,iridescence_fragment:S2,bumpmap_pars_fragment:M2,clipping_planes_fragment:w2,clipping_planes_pars_fragment:E2,clipping_planes_pars_vertex:T2,clipping_planes_vertex:b2,color_fragment:A2,color_pars_fragment:C2,color_pars_vertex:R2,color_vertex:P2,common:N2,cube_uv_reflection_fragment:L2,defaultnormal_vertex:D2,displacementmap_pars_vertex:I2,displacementmap_vertex:U2,emissivemap_fragment:F2,emissivemap_pars_fragment:O2,colorspace_fragment:k2,colorspace_pars_fragment:B2,envmap_fragment:V2,envmap_common_pars_fragment:z2,envmap_pars_fragment:j2,envmap_pars_vertex:H2,envmap_physical_pars_fragment:e3,envmap_vertex:G2,fog_vertex:W2,fog_pars_vertex:X2,fog_fragment:Y2,fog_pars_fragment:q2,gradientmap_pars_fragment:$2,lightmap_pars_fragment:K2,lights_lambert_fragment:Z2,lights_lambert_pars_fragment:J2,lights_pars_begin:Q2,lights_toon_fragment:t3,lights_toon_pars_fragment:n3,lights_phong_fragment:i3,lights_phong_pars_fragment:r3,lights_physical_fragment:s3,lights_physical_pars_fragment:a3,lights_fragment_begin:o3,lights_fragment_maps:l3,lights_fragment_end:c3,logdepthbuf_fragment:u3,logdepthbuf_pars_fragment:d3,logdepthbuf_pars_vertex:f3,logdepthbuf_vertex:h3,map_fragment:p3,map_pars_fragment:m3,map_particle_fragment:g3,map_particle_pars_fragment:v3,metalnessmap_fragment:x3,metalnessmap_pars_fragment:y3,morphinstance_vertex:_3,morphcolor_vertex:S3,morphnormal_vertex:M3,morphtarget_pars_vertex:w3,morphtarget_vertex:E3,normal_fragment_begin:T3,normal_fragment_maps:b3,normal_pars_fragment:A3,normal_pars_vertex:C3,normal_vertex:R3,normalmap_pars_fragment:P3,clearcoat_normal_fragment_begin:N3,clearcoat_normal_fragment_maps:L3,clearcoat_pars_fragment:D3,iridescence_pars_fragment:I3,opaque_fragment:U3,packing:F3,premultiplied_alpha_fragment:O3,project_vertex:k3,dithering_fragment:B3,dithering_pars_fragment:V3,roughnessmap_fragment:z3,roughnessmap_pars_fragment:j3,shadowmap_pars_fragment:H3,shadowmap_pars_vertex:G3,shadowmap_vertex:W3,shadowmask_pars_fragment:X3,skinbase_vertex:Y3,skinning_pars_vertex:q3,skinning_vertex:$3,skinnormal_vertex:K3,specularmap_fragment:Z3,specularmap_pars_fragment:J3,tonemapping_fragment:Q3,tonemapping_pars_fragment:eN,transmission_fragment:tN,transmission_pars_fragment:nN,uv_pars_fragment:iN,uv_pars_vertex:rN,uv_vertex:sN,worldpos_vertex:aN,background_vert:oN,background_frag:lN,backgroundCube_vert:cN,backgroundCube_frag:uN,cube_vert:dN,cube_frag:fN,depth_vert:hN,depth_frag:pN,distance_vert:mN,distance_frag:gN,equirect_vert:vN,equirect_frag:xN,linedashed_vert:yN,linedashed_frag:_N,meshbasic_vert:SN,meshbasic_frag:MN,meshlambert_vert:wN,meshlambert_frag:EN,meshmatcap_vert:TN,meshmatcap_frag:bN,meshnormal_vert:AN,meshnormal_frag:CN,meshphong_vert:RN,meshphong_frag:PN,meshphysical_vert:NN,meshphysical_frag:LN,meshtoon_vert:DN,meshtoon_frag:IN,points_vert:UN,points_frag:FN,shadow_vert:ON,shadow_frag:kN,sprite_vert:BN,sprite_frag:VN},Fe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},$i={basic:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:$n([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:$n([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new wt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:$n([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:$n([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:$n([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:$n([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:$n([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:$n([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:$n([Fe.common,Fe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:$n([Fe.lights,Fe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};$i.physical={uniforms:$n([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const hu={r:0,b:0,g:0},Us=new ar,zN=new Kt;function jN(n,e,t,r,a,o,c){const u=new wt(0);let d=o===!0?0:1,h,p,m=null,g=0,y=null;function w(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?t:e).get(N)),N}function E(P){let N=!1;const C=w(P);C===null?x(u,d):C&&C.isColor&&(x(C,1),N=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(n.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(P,N){const C=w(N);C&&(C.isCubeTexture||C.mapping===Yu)?(p===void 0&&(p=new qt(new Cl(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Za($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Us.copy(N.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zN.makeRotationFromEuler(Us)),p.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Ot,(m!==C||g!==C.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,m=C,g=C.version,y=n.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new qt(new $u(2,2),new pn({name:"BackgroundMaterial",uniforms:Za($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||g!==C.version||y!==n.toneMapping)&&(h.material.needsUpdate=!0,m=C,g=C.version,y=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function x(P,N){P.getRGB(hu,xM(n)),r.buffers.color.setClear(hu.r,hu.g,hu.b,N,c)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,N=1){u.set(P),d=N,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,x(u,d)},render:E,addToRenderList:S,dispose:R}}function HN(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},a=g(null);let o=a,c=!1;function u(L,z,ne,j,J){let le=!1;const Q=m(j,ne,z);o!==Q&&(o=Q,h(o.object)),le=y(L,j,ne,J),le&&w(L,j,ne,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,N(L,z,ne,j),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.createVertexArray()}function h(L){return n.bindVertexArray(L)}function p(L){return n.deleteVertexArray(L)}function m(L,z,ne){const j=ne.wireframe===!0;let J=r[L.id];J===void 0&&(J={},r[L.id]=J);let le=J[z.id];le===void 0&&(le={},J[z.id]=le);let Q=le[j];return Q===void 0&&(Q=g(d()),le[j]=Q),Q}function g(L){const z=[],ne=[],j=[];for(let J=0;J<t;J++)z[J]=0,ne[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:j,object:L,attributes:{},index:null}}function y(L,z,ne,j){const J=o.attributes,le=z.attributes;let Q=0;const H=ne.getAttributes();for(const k in H)if(H[k].location>=0){const U=J[k];let G=le[k];if(G===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),U===void 0||U.attribute!==G||G&&U.data!==G.data)return!0;Q++}return o.attributesNum!==Q||o.index!==j}function w(L,z,ne,j){const J={},le=z.attributes;let Q=0;const H=ne.getAttributes();for(const k in H)if(H[k].location>=0){let U=le[k];U===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(U=L.instanceColor));const G={};G.attribute=U,U&&U.data&&(G.data=U.data),J[k]=G,Q++}o.attributes=J,o.attributesNum=Q,o.index=j}function E(){const L=o.newAttributes;for(let z=0,ne=L.length;z<ne;z++)L[z]=0}function S(L){x(L,0)}function x(L,z){const ne=o.newAttributes,j=o.enabledAttributes,J=o.attributeDivisors;ne[L]=1,j[L]===0&&(n.enableVertexAttribArray(L),j[L]=1),J[L]!==z&&(n.vertexAttribDivisor(L,z),J[L]=z)}function R(){const L=o.newAttributes,z=o.enabledAttributes;for(let ne=0,j=z.length;ne<j;ne++)z[ne]!==L[ne]&&(n.disableVertexAttribArray(ne),z[ne]=0)}function P(L,z,ne,j,J,le,Q){Q===!0?n.vertexAttribIPointer(L,z,ne,J,le):n.vertexAttribPointer(L,z,ne,j,J,le)}function N(L,z,ne,j){E();const J=j.attributes,le=ne.getAttributes(),Q=z.defaultAttributeValues;for(const H in le){const k=le[H];if(k.location>=0){let ie=J[H];if(ie===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ie!==void 0){const U=ie.normalized,G=ie.itemSize,ge=e.get(ie);if(ge===void 0)continue;const de=ge.buffer,Le=ge.type,Te=ge.bytesPerElement,re=Le===n.INT||Le===n.UNSIGNED_INT||ie.gpuType===Fm;if(ie.isInterleavedBufferAttribute){const he=ie.data,_e=he.stride,$e=ie.offset;if(he.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)x(k.location+ze,he.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ze=0;ze<k.locationSize;ze++)S(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ze=0;ze<k.locationSize;ze++)P(k.location+ze,G/k.locationSize,Le,U,_e*Te,($e+G/k.locationSize*ze)*Te,re)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)x(k.location+he,ie.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<k.locationSize;he++)S(k.location+he);n.bindBuffer(n.ARRAY_BUFFER,de);for(let he=0;he<k.locationSize;he++)P(k.location+he,G/k.locationSize,Le,U,G*Te,G/k.locationSize*he*Te,re)}}else if(Q!==void 0){const U=Q[H];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(k.location,U);break;case 3:n.vertexAttrib3fv(k.location,U);break;case 4:n.vertexAttrib4fv(k.location,U);break;default:n.vertexAttrib1fv(k.location,U)}}}}R()}function C(){V();for(const L in r){const z=r[L];for(const ne in z){const j=z[ne];for(const J in j)p(j[J].object),delete j[J];delete z[ne]}delete r[L]}}function I(L){if(r[L.id]===void 0)return;const z=r[L.id];for(const ne in z){const j=z[ne];for(const J in j)p(j[J].object),delete j[J];delete z[ne]}delete r[L.id]}function F(L){for(const z in r){const ne=r[z];if(ne[L.id]===void 0)continue;const j=ne[L.id];for(const J in j)p(j[J].object),delete j[J];delete ne[L.id]}}function V(){A(),c=!0,o!==a&&(o=a,h(o.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:V,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function GN(n,e,t){let r;function a(h){r=h}function o(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,m){m!==0&&(n.drawArraysInstanced(r,h,p,m),t.update(p,r,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w];t.update(y,r,1)}function d(h,p,m,g){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)c(h[w],p[w],g[w]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,m);let w=0;for(let E=0;E<m;E++)w+=p[E]*g[E];t.update(w,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function WN(n,e,t,r){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==zi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const V=F===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==pi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Qi&&!V)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ct("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),N=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:N,maxSamples:C,samples:I}}function XN(n){const e=this;let t=null,r=0,a=!1,o=!1;const c=new ks,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const y=m.length!==0||g||r!==0||a;return a=g,r=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,y){const w=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,x=n.get(m);if(!a||w===null||w.length===0||o&&!S)o?p(null):h();else{const R=o?0:r,P=R*4;let N=x.clippingState||null;d.value=N,N=p(w,g,P,y);for(let C=0;C!==P;++C)N[C]=t[C];x.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(m,g,y,w){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=d.value,w!==!0||S===null){const x=y+E*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,N=y;P!==E;++P,N+=4)c.copy(m[P]).applyMatrix4(R,u),c.normal.toArray(S,N),S[N+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function YN(n){let e=new WeakMap;function t(c,u){return u===pp?c.mapping=Ys:u===mp&&(c.mapping=qa),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===pp||u===mp)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new SM(d.height);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const as=4,Ay=[.125,.215,.35,.446,.526,.582],Vs=20,qN=256,Zo=new $m,Cy=new wt;let wh=null,Eh=0,Th=0,bh=!1;const $N=new ae;class Ry{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,o={}){const{size:c=256,position:u=$N}=o;wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,a,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ny(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Eh,Th),this._renderer.xr.enabled=bh,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:br,format:zi,colorSpace:Ka,depthBuffer:!1},a=Py(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Py(e,t,r);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KN(o)),this._blurMaterial=JN(o,e,t),this._ggxMaterial=ZN(o,e,t)}return a}_compileMaterial(e){const t=new qt(new Pn,e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,r,a,o){const d=new kn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,y=m.toneMapping;m.getClearColor(Cy),m.toneMapping=ir,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Cl,new mM({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let x=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,x=!0):(S.color.copy(Cy),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(d.up.set(0,h[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[P],o.y,o.z)):N===1?(d.up.set(0,0,h[P]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[P],o.z)):(d.up.set(0,h[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[P]));const C=this._cubeSize;Ia(a,N*C,P>2?C:0,C,C),m.setRenderTarget(a),x&&m.render(E,d),m.render(e,d)}m.toneMapping=y,m.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ys||e.mapping===qa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ny());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Ia(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Zo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),g=0+h*1.25,y=m*g,{_lodMax:w}=this,E=this._sizeLods[r],S=3*E*(r>w-as?r-w+as:0),x=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=w-t,Ia(o,S,x,3*E,2*E),a.setRenderTarget(o),a.render(u,Zo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=w-r,Ia(e,S,x,3*E,2*E),a.setRenderTarget(e),a.render(u,Zo)}_blur(e,t,r,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",o),this._halfBlur(c,e,r,r,a,"longitudinal",o)}_halfBlur(e,t,r,a,o,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[a];m.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,w=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Vs-1),E=o/w,S=isFinite(o)?1+Math.floor(p*E):Vs;S>Vs&&ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Vs}`);const x=[];let R=0;for(let F=0;F<Vs;++F){const V=F/E,A=Math.exp(-V*V/2);x.push(A),F===0?R+=A:F<S&&(R+=2*A)}for(let F=0;F<x.length;F++)x[F]=x[F]/R;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:P}=this;g.dTheta.value=w,g.mipInt.value=P-r;const N=this._sizeLods[a],C=3*N*(a>P-as?a-P+as:0),I=4*(this._cubeSize-N);Ia(t,C,I,3*N,2*N),d.setRenderTarget(t),d.render(m,Zo)}}function KN(n){const e=[],t=[],r=[];let a=n;const o=n-as+1+Ay.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let d=1/u;c>n-as?d=Ay[c-n+as-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,w=6,E=3,S=2,x=1,R=new Float32Array(E*w*y),P=new Float32Array(S*w*y),N=new Float32Array(x*w*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,V=I>2?0:-1,A=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];R.set(A,E*w*I),P.set(g,S*w*I);const L=[I,I,I,I,I,I];N.set(L,x*w*I)}const C=new Pn;C.setAttribute("position",new Jn(R,E)),C.setAttribute("uv",new Jn(P,S)),C.setAttribute("faceIndex",new Jn(N,x)),r.push(new qt(C,null)),a>as&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Py(n,e,t){const r=new rr(n,e,t);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ia(n,e,t,r,a){n.viewport.set(e,t,r,a),n.scissor.set(e,t,r,a)}function ZN(n,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function JN(n,e,t){const r=new Float32Array(Vs),a=new ae(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ny(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ly(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QN(n){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const d=u.mapping,h=d===pp||d===mp,p=d===Ys||d===qa;if(h||p){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new Ry(n)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&a(y)?(t===null&&(t=new Ry(n)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function eL(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=n.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&xl("WebGLRenderer: "+r+" extension not supported."),a}}}function tL(n,e,t,r){const a={},o=new WeakMap;function c(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",c),delete a[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const y in g)e.update(g[y],n.ARRAY_BUFFER)}function h(m){const g=[],y=m.index,w=m.attributes.position;let E=0;if(y!==null){const R=y.array;E=y.version;for(let P=0,N=R.length;P<N;P+=3){const C=R[P+0],I=R[P+1],F=R[P+2];g.push(C,I,I,F,F,C)}}else if(w!==void 0){const R=w.array;E=w.version;for(let P=0,N=R.length/3-1;P<N;P+=3){const C=P+0,I=P+1,F=P+2;g.push(C,I,I,F,F,C)}}else return;const S=new(uM(g)?vM:gM)(g,1);S.version=E;const x=o.get(m);x&&e.remove(x),o.set(m,S)}function p(m){const g=o.get(m);if(g){const y=m.index;y!==null&&g.version<y.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function nL(n,e,t){let r;function a(g){r=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,y){n.drawElements(r,y,o,g*c),t.update(y,r,1)}function h(g,y,w){w!==0&&(n.drawElementsInstanced(r,y,o,g*c,w),t.update(y,r,w))}function p(g,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,o,g,0,w);let S=0;for(let x=0;x<w;x++)S+=y[x];t.update(S,r,1)}function m(g,y,w,E){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)h(g[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,o,g,0,E,0,w);let x=0;for(let R=0;R<w;R++)x+=y[R]*E[R];t.update(x,r,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function iL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function rL(n,e,t){const r=new WeakMap,a=new rn;function o(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==m){let A=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",A)};g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),w===!0&&(P=2),E===!0&&(P=3);let N=u.attributes.position.count*P,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*C*4*m),F=new dM(I,N,C,m);F.type=Qi,F.needsUpdate=!0;const V=P*4;for(let L=0;L<m;L++){const z=S[L],ne=x[L],j=R[L],J=N*C*4*L;for(let le=0;le<z.count;le++){const Q=le*V;y===!0&&(a.fromBufferAttribute(z,le),I[J+Q+0]=a.x,I[J+Q+1]=a.y,I[J+Q+2]=a.z,I[J+Q+3]=0),w===!0&&(a.fromBufferAttribute(ne,le),I[J+Q+4]=a.x,I[J+Q+5]=a.y,I[J+Q+6]=a.z,I[J+Q+7]=0),E===!0&&(a.fromBufferAttribute(j,le),I[J+Q+8]=a.x,I[J+Q+9]=a.y,I[J+Q+10]=a.z,I[J+Q+11]=j.itemSize===4?a.w:1)}}g={count:m,texture:F,size:new Rt(N,C)},r.set(u,g),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let y=0;for(let E=0;E<h.length;E++)y+=h[E];const w=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function sL(n,e,t,r){let a=new WeakMap;function o(d){const h=r.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return m}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const aL={[$S]:"LINEAR_TONE_MAPPING",[KS]:"REINHARD_TONE_MAPPING",[ZS]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[QS]:"AGX_TONE_MAPPING",[eM]:"NEUTRAL_TONE_MAPPING",[JS]:"CUSTOM_TONE_MAPPING"};function oL(n,e,t,r,a){const o=new rr(e,t,{type:n,depthBuffer:r,stencilBuffer:a}),c=new rr(e,t,{type:br,depthBuffer:!1,stencilBuffer:!1}),u=new Pn;u.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const d=new ZP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new qt(u,d),p=new $m(-1,1,1,-1,0,1);let m=null,g=null,y=!1,w,E=null,S=[],x=!1;this.setSize=function(R,P){o.setSize(R,P),c.setSize(R,P);for(let N=0;N<S.length;N++){const C=S[N];C.setSize&&C.setSize(R,P)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const P=o.width,N=o.height;for(let C=0;C<S.length;C++){const I=S[C];I.setSize&&I.setSize(P,N)}},this.begin=function(R,P){if(y||R.toneMapping===ir&&S.length===0)return!1;if(E=P,P!==null){const N=P.width,C=P.height;(o.width!==N||o.height!==C)&&this.setSize(N,C)}return x===!1&&R.setRenderTarget(o),w=R.toneMapping,R.toneMapping=ir,!0},this.hasRenderPass=function(){return x},this.end=function(R,P){R.toneMapping=w,y=!0;let N=o,C=c;for(let I=0;I<S.length;I++){const F=S[I];if(F.enabled!==!1&&(F.render(R,C,N,P),F.needsSwap!==!1)){const V=N;N=C,C=V}}if(m!==R.outputColorSpace||g!==R.toneMapping){m=R.outputColorSpace,g=R.toneMapping,d.defines={},Ct.getTransfer(m)===Ot&&(d.defines.SRGB_TRANSFER="");const I=aL[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=N.texture,R.setRenderTarget(E),R.render(h,p),E=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),c.dispose(),u.dispose(),d.dispose()}}const TM=new jn,Kp=new _l(1,1),bM=new dM,AM=new CP,CM=new _M,Dy=[],Iy=[],Uy=new Float32Array(16),Fy=new Float32Array(9),Oy=new Float32Array(4);function oo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const a=e*t;let o=Dy[a];if(o===void 0&&(o=new Float32Array(a),Dy[a]=o),e!==0){r.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(o,u)}return o}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Zu(n,e){let t=Iy[e];t===void 0&&(t=new Int32Array(e),Iy[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function lL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function uL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function dL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function fL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;Oy.set(r),n.uniformMatrix2fv(this.addr,!1,Oy),vn(t,r)}}function hL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;Fy.set(r),n.uniformMatrix3fv(this.addr,!1,Fy),vn(t,r)}}function pL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,r))return;Uy.set(r),n.uniformMatrix4fv(this.addr,!1,Uy),vn(t,r)}}function mL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function vL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function xL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function yL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function SL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function ML(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function wL(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?(Kp.compareFunction=t.isReversedDepthBuffer()?Hm:jm,o=Kp):o=TM,t.setTexture2D(e||o,a)}function EL(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||AM,a)}function TL(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||CM,a)}function bL(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||bM,a)}function AL(n){switch(n){case 5126:return lL;case 35664:return cL;case 35665:return uL;case 35666:return dL;case 35674:return fL;case 35675:return hL;case 35676:return pL;case 5124:case 35670:return mL;case 35667:case 35671:return gL;case 35668:case 35672:return vL;case 35669:case 35673:return xL;case 5125:return yL;case 36294:return _L;case 36295:return SL;case 36296:return ML;case 35678:case 36198:case 36298:case 36306:case 35682:return wL;case 35679:case 36299:case 36307:return EL;case 35680:case 36300:case 36308:case 36293:return TL;case 36289:case 36303:case 36311:case 36292:return bL}}function CL(n,e){n.uniform1fv(this.addr,e)}function RL(n,e){const t=oo(e,this.size,2);n.uniform2fv(this.addr,t)}function PL(n,e){const t=oo(e,this.size,3);n.uniform3fv(this.addr,t)}function NL(n,e){const t=oo(e,this.size,4);n.uniform4fv(this.addr,t)}function LL(n,e){const t=oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function DL(n,e){const t=oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IL(n,e){const t=oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UL(n,e){n.uniform1iv(this.addr,e)}function FL(n,e){n.uniform2iv(this.addr,e)}function OL(n,e){n.uniform3iv(this.addr,e)}function kL(n,e){n.uniform4iv(this.addr,e)}function BL(n,e){n.uniform1uiv(this.addr,e)}function VL(n,e){n.uniform2uiv(this.addr,e)}function zL(n,e){n.uniform3uiv(this.addr,e)}function jL(n,e){n.uniform4uiv(this.addr,e)}function HL(n,e,t){const r=this.cache,a=e.length,o=Zu(t,a);gn(r,o)||(n.uniform1iv(this.addr,o),vn(r,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Kp:c=TM;for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c,o[u])}function GL(n,e,t){const r=this.cache,a=e.length,o=Zu(t,a);gn(r,o)||(n.uniform1iv(this.addr,o),vn(r,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||AM,o[c])}function WL(n,e,t){const r=this.cache,a=e.length,o=Zu(t,a);gn(r,o)||(n.uniform1iv(this.addr,o),vn(r,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||CM,o[c])}function XL(n,e,t){const r=this.cache,a=e.length,o=Zu(t,a);gn(r,o)||(n.uniform1iv(this.addr,o),vn(r,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||bM,o[c])}function YL(n){switch(n){case 5126:return CL;case 35664:return RL;case 35665:return PL;case 35666:return NL;case 35674:return LL;case 35675:return DL;case 35676:return IL;case 5124:case 35670:return UL;case 35667:case 35671:return FL;case 35668:case 35672:return OL;case 35669:case 35673:return kL;case 5125:return BL;case 36294:return VL;case 36295:return zL;case 36296:return jL;case 35678:case 36198:case 36298:case 36306:case 35682:return HL;case 35679:case 36299:case 36307:return GL;case 35680:case 36300:case 36308:case 36293:return WL;case 36289:case 36303:case 36311:case 36292:return XL}}class qL{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=AL(t.type)}}class $L{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YL(t.type)}}class KL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],r)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function ky(n,e){n.seq.push(e),n.map[e.id]=e}function ZL(n,e,t){const r=n.name,a=r.length;for(Ah.lastIndex=0;;){const o=Ah.exec(r),c=Ah.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){ky(t,h===void 0?new qL(u,n,e):new $L(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new KL(u),ky(t,m)),t=m}}}class bu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);ZL(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,r,a){const o=this.map[t];o!==void 0&&o.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function By(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const JL=37297;let QL=0;function eD(n,e){const t=n.split(`
`),r=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const Vy=new ht;function tD(n){Ct._getMatrix(Vy,Ct.workingColorSpace,n);const e=`mat3( ${Vy.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Fu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zy(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+eD(n.getShaderSource(e),u)}else return o}function nD(n,e){const t=tD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iD={[$S]:"Linear",[KS]:"Reinhard",[ZS]:"Cineon",[qs]:"ACESFilmic",[QS]:"AgX",[eM]:"Neutral",[JS]:"Custom"};function rD(n,e){const t=iD[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pu=new ae;function sD(){Ct.getLuminanceCoefficients(pu);const n=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function oD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function lD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=n.getActiveAttrib(e,a),c=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function tl(n){return n!==""}function jy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(n){return n.replace(cD,dD)}const uD=new Map;function dD(n,e){let t=vt[e];if(t===void 0){const r=uD.get(e);if(r!==void 0)t=vt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zp(t)}const fD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gy(n){return n.replace(fD,hD)}function hD(n,e,t,r){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Wy(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pD={[Su]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function mD(n){return pD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gD={[Ys]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function vD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xD={[qa]:"ENVMAP_MODE_REFRACTION"};function yD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _D={[qS]:"ENVMAP_BLENDING_MULTIPLY",[qR]:"ENVMAP_BLENDING_MIX",[$R]:"ENVMAP_BLENDING_ADD"};function SD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_D[n.combine]||"ENVMAP_BLENDING_NONE"}function MD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wD(n,e,t,r){const a=n.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=mD(t),h=vD(t),p=yD(t),m=SD(t),g=MD(t),y=aD(t),w=oD(o),E=a.createProgram();let S,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(tl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(tl).join(`
`),x.length>0&&(x+=`
`)):(S=[Wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),x=[Wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?vt.tonemapping_pars_fragment:"",t.toneMapping!==ir?rD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,nD("linearToOutputTexel",t.outputColorSpace),sD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tl).join(`
`)),c=Zp(c),c=jy(c,t),c=Hy(c,t),u=Zp(u),u=jy(u,t),u=Hy(u,t),c=Gy(c),u=Gy(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===ny?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ny?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=R+S+c,N=R+x+u,C=By(a,a.VERTEX_SHADER,P),I=By(a,a.FRAGMENT_SHADER,N);a.attachShader(E,C),a.attachShader(E,I),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function F(z){if(n.debug.checkShaderErrors){const ne=a.getProgramInfoLog(E)||"",j=a.getShaderInfoLog(C)||"",J=a.getShaderInfoLog(I)||"",le=ne.trim(),Q=j.trim(),H=J.trim();let k=!0,ie=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,C,I);else{const U=zy(a,C,"vertex"),G=zy(a,I,"fragment");Dt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+U+`
`+G)}else le!==""?ct("WebGLProgram: Program Info Log:",le):(Q===""||H==="")&&(ie=!1);ie&&(z.diagnostics={runnable:k,programLog:le,vertexShader:{log:Q,prefix:S},fragmentShader:{log:H,prefix:x}})}a.deleteShader(C),a.deleteShader(I),V=new bu(a,E),A=lD(a,E)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(E,JL)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QL++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=I,this}let ED=0;class TD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new bD(e),t.set(e,r)),r}}class bD{constructor(e){this.id=ED++,this.code=e,this.usedTimes=0}}function AD(n,e,t,r,a,o,c){const u=new hM,d=new TD,h=new Set,p=[],m=new Map,g=a.logarithmicDepthBuffer;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return h.add(A),A===0?"uv":`uv${A}`}function S(A,L,z,ne,j){const J=ne.fog,le=j.geometry,Q=A.isMeshStandardMaterial?ne.environment:null,H=(A.isMeshStandardMaterial?t:e).get(A.envMap||Q),k=H&&H.mapping===Yu?H.image.height:null,ie=w[A.type];A.precision!==null&&(y=a.getMaxPrecision(A.precision),y!==A.precision&&ct("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const U=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,G=U!==void 0?U.length:0;let ge=0;le.morphAttributes.position!==void 0&&(ge=1),le.morphAttributes.normal!==void 0&&(ge=2),le.morphAttributes.color!==void 0&&(ge=3);let de,Le,Te,re;if(ie){const Tt=$i[ie];de=Tt.vertexShader,Le=Tt.fragmentShader}else de=A.vertexShader,Le=A.fragmentShader,d.update(A),Te=d.getVertexShaderID(A),re=d.getFragmentShaderID(A);const he=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),$e=j.isInstancedMesh===!0,ze=j.isBatchedMesh===!0,ft=!!A.map,Pt=!!A.matcap,pt=!!H,Qe=!!A.aoMap,mt=!!A.lightMap,lt=!!A.bumpMap,kt=!!A.normalMap,X=!!A.displacementMap,Xt=!!A.emissiveMap,_t=!!A.metalnessMap,Et=!!A.roughnessMap,Ye=A.anisotropy>0,O=A.clearcoat>0,T=A.dispersion>0,K=A.iridescence>0,pe=A.sheen>0,ve=A.transmission>0,fe=Ye&&!!A.anisotropyMap,Ze=O&&!!A.clearcoatMap,Ae=O&&!!A.clearcoatNormalMap,je=O&&!!A.clearcoatRoughnessMap,st=K&&!!A.iridescenceMap,we=K&&!!A.iridescenceThicknessMap,Ne=pe&&!!A.sheenColorMap,We=pe&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Re=!!A.specularColorMap,dt=!!A.specularIntensityMap,Y=ve&&!!A.transmissionMap,Ie=ve&&!!A.thicknessMap,Ee=!!A.gradientMap,Ue=!!A.alphaMap,Se=A.alphaTest>0,me=!!A.alphaHash,Pe=!!A.extensions;let at=ir;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=n.toneMapping);const Ft={shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:de,fragmentShader:Le,defines:A.defines,customVertexShaderID:Te,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:ze,batchingColor:ze&&j._colorsTexture!==null,instancing:$e,instancingColor:$e&&j.instanceColor!==null,instancingMorph:$e&&j.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ka,alphaToCoverage:!!A.alphaToCoverage,map:ft,matcap:Pt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:k,aoMap:Qe,lightMap:mt,bumpMap:lt,normalMap:kt,displacementMap:X,emissiveMap:Xt,normalMapObjectSpace:kt&&A.normalMapType===JR,normalMapTangentSpace:kt&&A.normalMapType===cM,metalnessMap:_t,roughnessMap:Et,anisotropy:Ye,anisotropyMap:fe,clearcoat:O,clearcoatMap:Ze,clearcoatNormalMap:Ae,clearcoatRoughnessMap:je,dispersion:T,iridescence:K,iridescenceMap:st,iridescenceThicknessMap:we,sheen:pe,sheenColorMap:Ne,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Re,specularIntensityMap:dt,transmission:ve,transmissionMap:Y,thicknessMap:Ie,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===ja&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:me,combine:A.combine,mapUv:ft&&E(A.map.channel),aoMapUv:Qe&&E(A.aoMap.channel),lightMapUv:mt&&E(A.lightMap.channel),bumpMapUv:lt&&E(A.bumpMap.channel),normalMapUv:kt&&E(A.normalMap.channel),displacementMapUv:X&&E(A.displacementMap.channel),emissiveMapUv:Xt&&E(A.emissiveMap.channel),metalnessMapUv:_t&&E(A.metalnessMap.channel),roughnessMapUv:Et&&E(A.roughnessMap.channel),anisotropyMapUv:fe&&E(A.anisotropyMap.channel),clearcoatMapUv:Ze&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(A.sheenRoughnessMap.channel),specularMapUv:qe&&E(A.specularMap.channel),specularColorMapUv:Re&&E(A.specularColorMap.channel),specularIntensityMapUv:dt&&E(A.specularIntensityMap.channel),transmissionMapUv:Y&&E(A.transmissionMap.channel),thicknessMapUv:Ie&&E(A.thicknessMap.channel),alphaMapUv:Ue&&E(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(kt||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!le.attributes.uv&&(ft||Ue),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:j.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ge,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:ft&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===Ot,decodeVideoTextureEmissive:Xt&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===Ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ki,flipSided:A.side===mn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ft.vertexUv1s=h.has(1),Ft.vertexUv2s=h.has(2),Ft.vertexUv3s=h.has(3),h.clear(),Ft}function x(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)L.push(z),L.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(R(L,A),P(L,A),L.push(n.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function R(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function P(A,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),A.push(u.mask)}function N(A){const L=w[A.type];let z;if(L){const ne=$i[L];z=zP.clone(ne.uniforms)}else z=A.uniforms;return z}function C(A,L){let z=m.get(L);return z!==void 0?++z.usedTimes:(z=new wD(n,L,A,o),p.push(z),m.set(L,z)),z}function I(A){if(--A.usedTimes===0){const L=p.indexOf(A);p[L]=p[p.length-1],p.pop(),m.delete(A.cacheKey),A.destroy()}}function F(A){d.remove(A)}function V(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:C,releaseProgram:I,releaseShaderCache:F,programs:p,dispose:V}}function CD(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function a(c,u,d){n.get(c)[u]=d}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:o}}function RD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yy(){const n=[];let e=0;const t=[],r=[],a=[];function o(){e=0,t.length=0,r.length=0,a.length=0}function c(m,g,y,w,E,S){let x=n[e];return x===void 0?(x={id:m.id,object:m,geometry:g,material:y,groupOrder:w,renderOrder:m.renderOrder,z:E,group:S},n[e]=x):(x.id=m.id,x.object=m,x.geometry=g,x.material=y,x.groupOrder=w,x.renderOrder=m.renderOrder,x.z=E,x.group=S),e++,x}function u(m,g,y,w,E,S){const x=c(m,g,y,w,E,S);y.transmission>0?r.push(x):y.transparent===!0?a.push(x):t.push(x)}function d(m,g,y,w,E,S){const x=c(m,g,y,w,E,S);y.transmission>0?r.unshift(x):y.transparent===!0?a.unshift(x):t.unshift(x)}function h(m,g){t.length>1&&t.sort(m||RD),r.length>1&&r.sort(g||Xy),a.length>1&&a.sort(g||Xy)}function p(){for(let m=e,g=n.length;m<g;m++){const y=n[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:o,push:u,unshift:d,finish:p,sort:h}}function PD(){let n=new WeakMap;function e(r,a){const o=n.get(r);let c;return o===void 0?(c=new Yy,n.set(r,[c])):a>=o.length?(c=new Yy,o.push(c)):c=o[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function ND(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new wt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function LD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DD=0;function ID(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UD(n){const e=new ND,t=LD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const a=new ae,o=new Kt,c=new Kt;function u(h){let p=0,m=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,w=0,E=0,S=0,x=0,R=0,P=0,N=0,C=0,I=0,F=0;h.sort(ID);for(let A=0,L=h.length;A<L;A++){const z=h[A],ne=z.color,j=z.intensity,J=z.distance;let le=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===$a?le=z.shadow.map.texture:le=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=ne.r*j,m+=ne.g*j,g+=ne.b*j;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(z.sh.coefficients[Q],j);F++}else if(z.isDirectionalLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,k=t.get(z);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=le,r.directionalShadowMatrix[y]=z.shadow.matrix,R++}r.directional[y]=Q,y++}else if(z.isSpotLight){const Q=e.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(ne).multiplyScalar(j),Q.distance=J,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,r.spot[E]=Q;const H=z.shadow;if(z.map&&(r.spotLightMap[C]=z.map,C++,H.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[E]=H.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.spotShadow[E]=k,r.spotShadowMap[E]=le,N++}E++}else if(z.isRectAreaLight){const Q=e.get(z);Q.color.copy(ne).multiplyScalar(j),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=Q,S++}else if(z.isPointLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const H=z.shadow,k=t.get(z);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=le,r.pointShadowMatrix[w]=z.shadow.matrix,P++}r.point[w]=Q,w++}else if(z.isHemisphereLight){const Q=e.get(z);Q.skyColor.copy(z.color).multiplyScalar(j),Q.groundColor.copy(z.groundColor).multiplyScalar(j),r.hemi[x]=Q,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const V=r.hash;(V.directionalLength!==y||V.pointLength!==w||V.spotLength!==E||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==R||V.numPointShadows!==P||V.numSpotShadows!==N||V.numSpotMaps!==C||V.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=S,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+C-I,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,V.directionalLength=y,V.pointLength=w,V.spotLength=E,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=R,V.numPointShadows=P,V.numSpotShadows=N,V.numSpotMaps=C,V.numLightProbes=F,r.version=DD++)}function d(h,p){let m=0,g=0,y=0,w=0,E=0;const S=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const P=h[x];if(P.isDirectionalLight){const N=r.directional[m];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),m++}else if(P.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),c.identity(),o.copy(P.matrixWorld),o.premultiply(S),c.extractRotation(o),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),w++}else if(P.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const N=r.hemi[E];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:r}}function qy(n){const e=new UD(n),t=[],r=[];function a(p){h.camera=p,t.length=0,r.length=0}function o(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function FD(n){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new qy(n),e.set(a,[u])):o>=c.length?(u=new qy(n),c.push(u)):u=c[o],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const OD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BD=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],VD=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],$y=new Kt,Jo=new ae,Ch=new ae;function zD(n,e,t){let r=new Xm;const a=new Rt,o=new Rt,c=new rn,u=new JP,d=new QP,h={},p=t.maxTextureSize,m={[Tr]:mn,[mn]:Tr,[Ki]:Ki},g=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:OD,fragmentShader:kD}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new Pn;w.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qt(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let x=this.type;this.render=function(I,F,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;I.type===RR&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Su);const A=n.getRenderTarget(),L=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Sr),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const j=x!==this.type;j&&F.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(le=>le.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,le=I.length;J<le;J++){const Q=I[J],H=Q.shadow;if(H===void 0){ct("WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const k=H.getFrameExtents();if(a.multiply(k),o.copy(H.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/k.x),a.x=o.x*k.x,H.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/k.y),a.y=o.y*k.y,H.mapSize.y=o.y)),H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===el){if(Q.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new rr(a.x,a.y,{format:$a,type:br,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),H.map.texture.name=Q.name+".shadowMap",H.map.depthTexture=new _l(a.x,a.y,Qi),H.map.depthTexture.name=Q.name+".shadowMapDepth",H.map.depthTexture.format=Ar,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{Q.isPointLight?(H.map=new SM(a.x),H.map.depthTexture=new KP(a.x,sr)):(H.map=new rr(a.x,a.y),H.map.depthTexture=new _l(a.x,a.y,sr)),H.map.depthTexture.name=Q.name+".shadowMap",H.map.depthTexture.format=Ar;const U=n.state.buffers.depth.getReversed();this.type===Su?(H.map.depthTexture.compareFunction=U?Hm:jm,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const ie=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ie;U++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,U),n.clear();else{U===0&&(n.setRenderTarget(H.map),n.clear());const G=H.getViewport(U);c.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),ne.viewport(c)}if(Q.isPointLight){const G=H.camera,ge=H.matrix,de=Q.distance||G.far;de!==G.far&&(G.far=de,G.updateProjectionMatrix()),Jo.setFromMatrixPosition(Q.matrixWorld),G.position.copy(Jo),Ch.copy(G.position),Ch.add(BD[U]),G.up.copy(VD[U]),G.lookAt(Ch),G.updateMatrixWorld(),ge.makeTranslation(-Jo.x,-Jo.y,-Jo.z),$y.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H._frustum.setFromProjectionMatrix($y,G.coordinateSystem,G.reversedDepth)}else H.updateMatrices(Q);r=H.getFrustum(),N(F,V,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===el&&R(H,V),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(A,L,z)};function R(I,F){const V=e.update(E);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new rr(a.x,a.y,{format:$a,type:br})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,V,g,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,V,y,E,null)}function P(I,F,V,A){let L=null;const z=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)L=z;else if(L=V.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ne=L.uuid,j=F.uuid;let J=h[ne];J===void 0&&(J={},h[ne]=J);let le=J[j];le===void 0&&(le=L.clone(),J[j]=le,F.addEventListener("dispose",C)),L=le}if(L.visible=F.visible,L.wireframe=F.wireframe,A===el?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:m[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,V.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ne=n.properties.get(L);ne.light=V}return L}function N(I,F,V,A,L){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&L===el)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const j=e.update(I),J=I.material;if(Array.isArray(J)){const le=j.groups;for(let Q=0,H=le.length;Q<H;Q++){const k=le[Q],ie=J[k.materialIndex];if(ie&&ie.visible){const U=P(I,ie,A,L);I.onBeforeShadow(n,I,F,V,j,U,k),n.renderBufferDirect(V,null,j,U,I,k),I.onAfterShadow(n,I,F,V,j,U,k)}}}else if(J.visible){const le=P(I,J,A,L);I.onBeforeShadow(n,I,F,V,j,le,null),n.renderBufferDirect(V,null,j,le,I,null),I.onAfterShadow(n,I,F,V,j,le,null)}}const ne=I.children;for(let j=0,J=ne.length;j<J;j++)N(ne[j],F,V,A,L)}function C(I){I.target.removeEventListener("dispose",C);for(const V in h){const A=h[V],L=I.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const jD={[op]:lp,[cp]:fp,[up]:hp,[Ya]:dp,[lp]:op,[fp]:cp,[hp]:up,[dp]:Ya};function HD(n,e){function t(){let Y=!1;const Ie=new rn;let Ee=null;const Ue=new rn(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!Y&&(n.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){Y=Se},setClear:function(Se,me,Pe,at,Ft){Ft===!0&&(Se*=at,me*=at,Pe*=at),Ie.set(Se,me,Pe,at),Ue.equals(Ie)===!1&&(n.clearColor(Se,me,Pe,at),Ue.copy(Ie))},reset:function(){Y=!1,Ee=null,Ue.set(-1,0,0,0)}}}function r(){let Y=!1,Ie=!1,Ee=null,Ue=null,Se=null;return{setReversed:function(me){if(Ie!==me){const Pe=e.get("EXT_clip_control");me?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ie=me;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return Ie},setTest:function(me){me?he(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(me){Ee!==me&&!Y&&(n.depthMask(me),Ee=me)},setFunc:function(me){if(Ie&&(me=jD[me]),Ue!==me){switch(me){case op:n.depthFunc(n.NEVER);break;case lp:n.depthFunc(n.ALWAYS);break;case cp:n.depthFunc(n.LESS);break;case Ya:n.depthFunc(n.LEQUAL);break;case up:n.depthFunc(n.EQUAL);break;case dp:n.depthFunc(n.GEQUAL);break;case fp:n.depthFunc(n.GREATER);break;case hp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=me}},setLocked:function(me){Y=me},setClear:function(me){Se!==me&&(Ie&&(me=1-me),n.clearDepth(me),Se=me)},reset:function(){Y=!1,Ee=null,Ue=null,Se=null,Ie=!1}}}function a(){let Y=!1,Ie=null,Ee=null,Ue=null,Se=null,me=null,Pe=null,at=null,Ft=null;return{setTest:function(Tt){Y||(Tt?he(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!Y&&(n.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,oi,Gn){(Ee!==Tt||Ue!==oi||Se!==Gn)&&(n.stencilFunc(Tt,oi,Gn),Ee=Tt,Ue=oi,Se=Gn)},setOp:function(Tt,oi,Gn){(me!==Tt||Pe!==oi||at!==Gn)&&(n.stencilOp(Tt,oi,Gn),me=Tt,Pe=oi,at=Gn)},setLocked:function(Tt){Y=Tt},setClear:function(Tt){Ft!==Tt&&(n.clearStencil(Tt),Ft=Tt)},reset:function(){Y=!1,Ie=null,Ee=null,Ue=null,Se=null,me=null,Pe=null,at=null,Ft=null}}}const o=new t,c=new r,u=new a,d=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,y=[],w=null,E=!1,S=null,x=null,R=null,P=null,N=null,C=null,I=null,F=new wt(0,0,0),V=0,A=!1,L=null,z=null,ne=null,j=null,J=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,H=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),Q=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Q=H>=2);let ie=null,U={};const G=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),de=new rn().fromArray(G),Le=new rn().fromArray(ge);function Te(Y,Ie,Ee,Ue){const Se=new Uint8Array(4),me=n.createTexture();n.bindTexture(Y,me),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Ee;Pe++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ie+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return me}const re={};re[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(n.DEPTH_TEST),c.setFunc(Ya),lt(!1),kt(Zx),he(n.CULL_FACE),Qe(Sr);function he(Y){p[Y]!==!0&&(n.enable(Y),p[Y]=!0)}function _e(Y){p[Y]!==!1&&(n.disable(Y),p[Y]=!1)}function $e(Y,Ie){return m[Y]!==Ie?(n.bindFramebuffer(Y,Ie),m[Y]=Ie,Y===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ie),Y===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ze(Y,Ie){let Ee=y,Ue=!1;if(Y){Ee=g.get(Ie),Ee===void 0&&(Ee=[],g.set(Ie,Ee));const Se=Y.textures;if(Ee.length!==Se.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Pe=Se.length;me<Pe;me++)Ee[me]=n.COLOR_ATTACHMENT0+me;Ee.length=Se.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function ft(Y){return w!==Y?(n.useProgram(Y),w=Y,!0):!1}const Pt={[Bs]:n.FUNC_ADD,[NR]:n.FUNC_SUBTRACT,[LR]:n.FUNC_REVERSE_SUBTRACT};Pt[DR]=n.MIN,Pt[IR]=n.MAX;const pt={[UR]:n.ZERO,[FR]:n.ONE,[OR]:n.SRC_COLOR,[sp]:n.SRC_ALPHA,[HR]:n.SRC_ALPHA_SATURATE,[zR]:n.DST_COLOR,[BR]:n.DST_ALPHA,[kR]:n.ONE_MINUS_SRC_COLOR,[ap]:n.ONE_MINUS_SRC_ALPHA,[jR]:n.ONE_MINUS_DST_COLOR,[VR]:n.ONE_MINUS_DST_ALPHA,[GR]:n.CONSTANT_COLOR,[WR]:n.ONE_MINUS_CONSTANT_COLOR,[XR]:n.CONSTANT_ALPHA,[YR]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(Y,Ie,Ee,Ue,Se,me,Pe,at,Ft,Tt){if(Y===Sr){E===!0&&(_e(n.BLEND),E=!1);return}if(E===!1&&(he(n.BLEND),E=!0),Y!==PR){if(Y!==S||Tt!==A){if((x!==Bs||N!==Bs)&&(n.blendEquation(n.FUNC_ADD),x=Bs,N=Bs),Tt)switch(Y){case ja:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case Jx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Y);break}R=null,P=null,C=null,I=null,F.set(0,0,0),V=0,S=Y,A=Tt}return}Se=Se||Ie,me=me||Ee,Pe=Pe||Ue,(Ie!==x||Se!==N)&&(n.blendEquationSeparate(Pt[Ie],Pt[Se]),x=Ie,N=Se),(Ee!==R||Ue!==P||me!==C||Pe!==I)&&(n.blendFuncSeparate(pt[Ee],pt[Ue],pt[me],pt[Pe]),R=Ee,P=Ue,C=me,I=Pe),(at.equals(F)===!1||Ft!==V)&&(n.blendColor(at.r,at.g,at.b,Ft),F.copy(at),V=Ft),S=Y,A=!1}function mt(Y,Ie){Y.side===Ki?_e(n.CULL_FACE):he(n.CULL_FACE);let Ee=Y.side===mn;Ie&&(Ee=!Ee),lt(Ee),Y.blending===ja&&Y.transparent===!1?Qe(Sr):Qe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Ue=Y.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Xt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(Y){L!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),L=Y)}function kt(Y){Y!==AR?(he(n.CULL_FACE),Y!==z&&(Y===Zx?n.cullFace(n.BACK):Y===CR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),z=Y}function X(Y){Y!==ne&&(Q&&n.lineWidth(Y),ne=Y)}function Xt(Y,Ie,Ee){Y?(he(n.POLYGON_OFFSET_FILL),(j!==Ie||J!==Ee)&&(n.polygonOffset(Ie,Ee),j=Ie,J=Ee)):_e(n.POLYGON_OFFSET_FILL)}function _t(Y){Y?he(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Et(Y){Y===void 0&&(Y=n.TEXTURE0+le-1),ie!==Y&&(n.activeTexture(Y),ie=Y)}function Ye(Y,Ie,Ee){Ee===void 0&&(ie===null?Ee=n.TEXTURE0+le-1:Ee=ie);let Ue=U[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},U[Ee]=Ue),(Ue.type!==Y||Ue.texture!==Ie)&&(ie!==Ee&&(n.activeTexture(Ee),ie=Ee),n.bindTexture(Y,Ie||re[Y]),Ue.type=Y,Ue.texture=Ie)}function O(){const Y=U[ie];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function pe(){try{n.texSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function ve(){try{n.texSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ze(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ae(){try{n.texStorage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function je(){try{n.texStorage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function st(){try{n.texImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function we(){try{n.texImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ne(Y){de.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function We(Y){Le.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),Le.copy(Y))}function qe(Y,Ie){let Ee=h.get(Ie);Ee===void 0&&(Ee=new WeakMap,h.set(Ie,Ee));let Ue=Ee.get(Y);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ie,Y.name),Ee.set(Y,Ue))}function Re(Y,Ie){const Ue=h.get(Ie).get(Y);d.get(Ie)!==Ue&&(n.uniformBlockBinding(Ie,Ue,Y.__bindingPointIndex),d.set(Ie,Ue))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ie=null,U={},m={},g=new WeakMap,y=[],w=null,E=!1,S=null,x=null,R=null,P=null,N=null,C=null,I=null,F=new wt(0,0,0),V=0,A=!1,L=null,z=null,ne=null,j=null,J=null,de.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:he,disable:_e,bindFramebuffer:$e,drawBuffers:ze,useProgram:ft,setBlending:Qe,setMaterial:mt,setFlipSided:lt,setCullFace:kt,setLineWidth:X,setPolygonOffset:Xt,setScissorTest:_t,activeTexture:Et,bindTexture:Ye,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:st,texImage3D:we,updateUBOMapping:qe,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:je,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:Ne,viewport:We,reset:dt}}function GD(n,e,t,r,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,p=new WeakMap;let m;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,T){return y?new OffscreenCanvas(O,T):vl("canvas")}function E(O,T,K){let pe=1;const ve=Ye(O);if((ve.width>K||ve.height>K)&&(pe=K/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(pe*ve.width),Ze=Math.floor(pe*ve.height);m===void 0&&(m=w(fe,Ze));const Ae=T?w(fe,Ze):m;return Ae.width=fe,Ae.height=Ze,Ae.getContext("2d").drawImage(O,0,0,fe,Ze),ct("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ze+")."),Ae}else return"data"in O&&ct("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){n.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(O,T,K,pe,ve=!1){if(O!==null){if(n[O]!==void 0)return n[O];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=T;if(T===n.RED&&(K===n.FLOAT&&(fe=n.R32F),K===n.HALF_FLOAT&&(fe=n.R16F),K===n.UNSIGNED_BYTE&&(fe=n.R8)),T===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.R8UI),K===n.UNSIGNED_SHORT&&(fe=n.R16UI),K===n.UNSIGNED_INT&&(fe=n.R32UI),K===n.BYTE&&(fe=n.R8I),K===n.SHORT&&(fe=n.R16I),K===n.INT&&(fe=n.R32I)),T===n.RG&&(K===n.FLOAT&&(fe=n.RG32F),K===n.HALF_FLOAT&&(fe=n.RG16F),K===n.UNSIGNED_BYTE&&(fe=n.RG8)),T===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RG8UI),K===n.UNSIGNED_SHORT&&(fe=n.RG16UI),K===n.UNSIGNED_INT&&(fe=n.RG32UI),K===n.BYTE&&(fe=n.RG8I),K===n.SHORT&&(fe=n.RG16I),K===n.INT&&(fe=n.RG32I)),T===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),K===n.UNSIGNED_INT&&(fe=n.RGB32UI),K===n.BYTE&&(fe=n.RGB8I),K===n.SHORT&&(fe=n.RGB16I),K===n.INT&&(fe=n.RGB32I)),T===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),K===n.UNSIGNED_INT&&(fe=n.RGBA32UI),K===n.BYTE&&(fe=n.RGBA8I),K===n.SHORT&&(fe=n.RGBA16I),K===n.INT&&(fe=n.RGBA32I)),T===n.RGB&&(K===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),T===n.RGBA){const Ze=ve?Fu:Ct.getTransfer(pe);K===n.FLOAT&&(fe=n.RGBA32F),K===n.HALF_FLOAT&&(fe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(fe=Ze===Ot?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(O,T){let K;return O?T===null||T===sr||T===gl?K=n.DEPTH24_STENCIL8:T===Qi?K=n.DEPTH32F_STENCIL8:T===ml&&(K=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sr||T===gl?K=n.DEPTH_COMPONENT24:T===Qi?K=n.DEPTH_COMPONENT32F:T===ml&&(K=n.DEPTH_COMPONENT16),K}function C(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Cn&&O.minFilter!==Wt?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function I(O){const T=O.target;T.removeEventListener("dispose",I),V(T),T.isVideoTexture&&p.delete(T)}function F(O){const T=O.target;T.removeEventListener("dispose",F),L(T)}function V(O){const T=r.get(O);if(T.__webglInit===void 0)return;const K=O.source,pe=g.get(K);if(pe){const ve=pe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&A(O),Object.keys(pe).length===0&&g.delete(K)}r.remove(O)}function A(O){const T=r.get(O);n.deleteTexture(T.__webglTexture);const K=O.source,pe=g.get(K);delete pe[T.__cacheKey],c.memory.textures--}function L(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ve=0;ve<T.__webglFramebuffer[pe].length;ve++)n.deleteFramebuffer(T.__webglFramebuffer[pe][ve]);else n.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)n.deleteFramebuffer(T.__webglFramebuffer[pe]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=O.textures;for(let pe=0,ve=K.length;pe<ve;pe++){const fe=r.get(K[pe]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(K[pe])}r.remove(O)}let z=0;function ne(){z=0}function j(){const O=z;return O>=a.maxTextures&&ct("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),z+=1,O}function J(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function le(O,T){const K=r.get(O);if(O.isVideoTexture&&_t(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){const pe=O.image;if(pe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{re(K,O,T);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+T)}function Q(O,T){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){re(K,O,T);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+T)}function H(O,T){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){re(K,O,T);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+T)}function k(O,T){const K=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&K.__version!==O.version){he(K,O,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+T)}const ie={[Uu]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[gp]:n.MIRRORED_REPEAT},U={[Cn]:n.NEAREST,[KR]:n.NEAREST_MIPMAP_NEAREST,[Yc]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},G={[QR]:n.NEVER,[rP]:n.ALWAYS,[eP]:n.LESS,[jm]:n.LEQUAL,[tP]:n.EQUAL,[Hm]:n.GEQUAL,[nP]:n.GREATER,[iP]:n.NOTEQUAL};function ge(O,T){if(T.type===Qi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wt||T.magFilter===Jf||T.magFilter===Yc||T.magFilter===zn||T.minFilter===Wt||T.minFilter===Jf||T.minFilter===Yc||T.minFilter===zn)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,ie[T.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,ie[T.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,ie[T.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,U[T.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,G[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==Yc&&T.minFilter!==zn||T.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function de(O,T){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",I));const pe=T.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const fe=J(T);if(fe!==O.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ve[fe].usedTimes++;const Ze=ve[O.__cacheKey];Ze!==void 0&&(ve[O.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(T)),O.__cacheKey=fe,O.__webglTexture=ve[fe].texture}return K}function Le(O,T,K){return Math.floor(Math.floor(O/K)/T)}function Te(O,T,K,pe){const fe=O.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,K,pe,T.data);else{fe.sort((we,Ne)=>we.start-Ne.start);let Ze=0;for(let we=1;we<fe.length;we++){const Ne=fe[Ze],We=fe[we],qe=Ne.start+Ne.count,Re=Le(We.start,T.width,4),dt=Le(Ne.start,T.width,4);We.start<=qe+1&&Re===dt&&Le(We.start+We.count-1,T.width,4)===Re?Ne.count=Math.max(Ne.count,We.start+We.count-Ne.start):(++Ze,fe[Ze]=We)}fe.length=Ze+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),je=n.getParameter(n.UNPACK_SKIP_PIXELS),st=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let we=0,Ne=fe.length;we<Ne;we++){const We=fe[we],qe=Math.floor(We.start/4),Re=Math.ceil(We.count/4),dt=qe%T.width,Y=Math.floor(qe/T.width),Ie=Re,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,dt,Y,Ie,Ee,K,pe,T.data)}O.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,st)}}function re(O,T,K){let pe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=n.TEXTURE_3D);const ve=de(O,T),fe=T.source;t.bindTexture(pe,O.__webglTexture,n.TEXTURE0+K);const Ze=r.get(fe);if(fe.version!==Ze.__version||ve===!0){t.activeTexture(n.TEXTURE0+K);const Ae=Ct.getPrimaries(Ct.workingColorSpace),je=T.colorSpace===Bi?null:Ct.getPrimaries(T.colorSpace),st=T.colorSpace===Bi||Ae===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let we=E(T.image,!1,a.maxTextureSize);we=Et(T,we);const Ne=o.convert(T.format,T.colorSpace),We=o.convert(T.type);let qe=P(T.internalFormat,Ne,We,T.colorSpace,T.isVideoTexture);ge(pe,T);let Re;const dt=T.mipmaps,Y=T.isVideoTexture!==!0,Ie=Ze.__version===void 0||ve===!0,Ee=fe.dataReady,Ue=C(T,we);if(T.isDepthTexture)qe=N(T.format===Gs,T.type),Ie&&(Y?t.texStorage2D(n.TEXTURE_2D,1,qe,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,qe,we.width,we.height,0,Ne,We,null));else if(T.isDataTexture)if(dt.length>0){Y&&Ie&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,dt[0].width,dt[0].height);for(let Se=0,me=dt.length;Se<me;Se++)Re=dt[Se],Y?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Re.width,Re.height,Ne,We,Re.data):t.texImage2D(n.TEXTURE_2D,Se,qe,Re.width,Re.height,0,Ne,We,Re.data);T.generateMipmaps=!1}else Y?(Ie&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,we.width,we.height),Ee&&Te(T,we,Ne,We)):t.texImage2D(n.TEXTURE_2D,0,qe,we.width,we.height,0,Ne,We,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Y&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,qe,dt[0].width,dt[0].height,we.depth);for(let Se=0,me=dt.length;Se<me;Se++)if(Re=dt[Se],T.format!==zi)if(Ne!==null)if(Y){if(Ee)if(T.layerUpdates.size>0){const Pe=by(Re.width,Re.height,T.format,T.type);for(const at of T.layerUpdates){const Ft=Re.data.subarray(at*Pe/Re.data.BYTES_PER_ELEMENT,(at+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,at,Re.width,Re.height,1,Ne,Ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,we.depth,Ne,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,qe,Re.width,Re.height,we.depth,0,Re.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,we.depth,Ne,We,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,qe,Re.width,Re.height,we.depth,0,Ne,We,Re.data)}else{Y&&Ie&&t.texStorage2D(n.TEXTURE_2D,Ue,qe,dt[0].width,dt[0].height);for(let Se=0,me=dt.length;Se<me;Se++)Re=dt[Se],T.format!==zi?Ne!==null?Y?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,qe,Re.width,Re.height,0,Re.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Re.width,Re.height,Ne,We,Re.data):t.texImage2D(n.TEXTURE_2D,Se,qe,Re.width,Re.height,0,Ne,We,Re.data)}else if(T.isDataArrayTexture)if(Y){if(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,qe,we.width,we.height,we.depth),Ee)if(T.layerUpdates.size>0){const Se=by(we.width,we.height,T.format,T.type);for(const me of T.layerUpdates){const Pe=we.data.subarray(me*Se/we.data.BYTES_PER_ELEMENT,(me+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Ne,We,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ne,We,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,we.width,we.height,we.depth,0,Ne,We,we.data);else if(T.isData3DTexture)Y?(Ie&&t.texStorage3D(n.TEXTURE_3D,Ue,qe,we.width,we.height,we.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ne,We,we.data)):t.texImage3D(n.TEXTURE_3D,0,qe,we.width,we.height,we.depth,0,Ne,We,we.data);else if(T.isFramebufferTexture){if(Ie)if(Y)t.texStorage2D(n.TEXTURE_2D,Ue,qe,we.width,we.height);else{let Se=we.width,me=we.height;for(let Pe=0;Pe<Ue;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,qe,Se,me,0,Ne,We,null),Se>>=1,me>>=1}}else if(dt.length>0){if(Y&&Ie){const Se=Ye(dt[0]);t.texStorage2D(n.TEXTURE_2D,Ue,qe,Se.width,Se.height)}for(let Se=0,me=dt.length;Se<me;Se++)Re=dt[Se],Y?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ne,We,Re):t.texImage2D(n.TEXTURE_2D,Se,qe,Ne,We,Re);T.generateMipmaps=!1}else if(Y){if(Ie){const Se=Ye(we);t.texStorage2D(n.TEXTURE_2D,Ue,qe,Se.width,Se.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,We,we)}else t.texImage2D(n.TEXTURE_2D,0,qe,Ne,We,we);S(T)&&x(pe),Ze.__version=fe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function he(O,T,K){if(T.image.length!==6)return;const pe=de(O,T),ve=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+K);const fe=r.get(ve);if(ve.version!==fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+K);const Ze=Ct.getPrimaries(Ct.workingColorSpace),Ae=T.colorSpace===Bi?null:Ct.getPrimaries(T.colorSpace),je=T.colorSpace===Bi||Ze===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const st=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let me=0;me<6;me++)!st&&!we?Ne[me]=E(T.image[me],!0,a.maxCubemapSize):Ne[me]=we?T.image[me].image:T.image[me],Ne[me]=Et(T,Ne[me]);const We=Ne[0],qe=o.convert(T.format,T.colorSpace),Re=o.convert(T.type),dt=P(T.internalFormat,qe,Re,T.colorSpace),Y=T.isVideoTexture!==!0,Ie=fe.__version===void 0||pe===!0,Ee=ve.dataReady;let Ue=C(T,We);ge(n.TEXTURE_CUBE_MAP,T);let Se;if(st){Y&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,dt,We.width,We.height);for(let me=0;me<6;me++){Se=Ne[me].mipmaps;for(let Pe=0;Pe<Se.length;Pe++){const at=Se[Pe];T.format!==zi?qe!==null?Y?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,0,0,at.width,at.height,qe,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,dt,at.width,at.height,0,at.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,0,0,at.width,at.height,qe,Re,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,dt,at.width,at.height,0,qe,Re,at.data)}}}else{if(Se=T.mipmaps,Y&&Ie){Se.length>0&&Ue++;const me=Ye(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,dt,me.width,me.height)}for(let me=0;me<6;me++)if(we){Y?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne[me].width,Ne[me].height,qe,Re,Ne[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Ne[me].width,Ne[me].height,0,qe,Re,Ne[me].data);for(let Pe=0;Pe<Se.length;Pe++){const Ft=Se[Pe].image[me].image;Y?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,0,0,Ft.width,Ft.height,qe,Re,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,dt,Ft.width,Ft.height,0,qe,Re,Ft.data)}}else{Y?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,qe,Re,Ne[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,qe,Re,Ne[me]);for(let Pe=0;Pe<Se.length;Pe++){const at=Se[Pe];Y?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,0,0,qe,Re,at.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,dt,qe,Re,at.image[me])}}}S(T)&&x(n.TEXTURE_CUBE_MAP),fe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function _e(O,T,K,pe,ve,fe){const Ze=o.convert(K.format,K.colorSpace),Ae=o.convert(K.type),je=P(K.internalFormat,Ze,Ae,K.colorSpace),st=r.get(T),we=r.get(K);if(we.__renderTarget=T,!st.__hasExternalTextures){const Ne=Math.max(1,T.width>>fe),We=Math.max(1,T.height>>fe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,je,Ne,We,T.depth,0,Ze,Ae,null):t.texImage2D(ve,fe,je,Ne,We,0,Ze,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ve,we.__webglTexture,0,X(T)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ve,we.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(O,T,K){if(n.bindRenderbuffer(n.RENDERBUFFER,O),T.depthBuffer){const pe=T.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=N(T.stencilBuffer,ve),Ze=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X(T),fe,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,X(T),fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ze,n.RENDERBUFFER,O)}else{const pe=T.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],Ze=o.convert(fe.format,fe.colorSpace),Ae=o.convert(fe.type),je=P(fe.internalFormat,Ze,Ae,fe.colorSpace);Xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X(T),je,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,X(T),je,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,je,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(O,T,K){const pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),ge(n.TEXTURE_CUBE_MAP,T.depthTexture);const st=o.convert(T.depthTexture.format),we=o.convert(T.depthTexture.type);let Ne;T.depthTexture.format===Ar?Ne=n.DEPTH_COMPONENT24:T.depthTexture.format===Gs&&(Ne=n.DEPTH24_STENCIL8);for(let We=0;We<6;We++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ne,T.width,T.height,0,st,we,null)}}else le(T.depthTexture,0);const fe=ve.__webglTexture,Ze=X(T),Ae=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,je=T.depthTexture.format===Gs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ar)Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,je,Ae,fe,0,Ze):n.framebufferTexture2D(n.FRAMEBUFFER,je,Ae,fe,0);else if(T.depthTexture.format===Gs)Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,je,Ae,fe,0,Ze):n.framebufferTexture2D(n.FRAMEBUFFER,je,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function ft(O){const T=r.get(O),K=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=pe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let pe=0;pe<6;pe++)ze(T.__webglFramebuffer[pe],O,pe);else{const pe=O.texture.mipmaps;pe&&pe.length>0?ze(T.__webglFramebuffer[0],O,0):ze(T.__webglFramebuffer,O,0)}else if(K){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=n.createRenderbuffer(),$e(T.__webglDepthbuffer[pe],O,!1);else{const ve=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),$e(T.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(O,T,K){const pe=r.get(O);T!==void 0&&_e(pe.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&ft(O)}function pt(O){const T=O.texture,K=r.get(O),pe=r.get(T);O.addEventListener("dispose",F);const ve=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Ze=ve.length>1;if(Ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=T.version,c.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let je=0;je<T.mipmaps.length;je++)K.__webglFramebuffer[Ae][je]=n.createFramebuffer()}else K.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Ze)for(let Ae=0,je=ve.length;Ae<je;Ae++){const st=r.get(ve[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),c.memory.textures++)}if(O.samples>0&&Xt(O)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const je=ve[Ae];K.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const st=o.convert(je.format,je.colorSpace),we=o.convert(je.type),Ne=P(je.internalFormat,st,we,je.colorSpace,O.isXRRenderTarget===!0),We=X(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ne,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(K.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ge(n.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)_e(K.__webglFramebuffer[Ae][je],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je);else _e(K.__webglFramebuffer[Ae],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ae=0,je=ve.length;Ae<je;Ae++){const st=ve[Ae],we=r.get(st);let Ne=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,we.__webglTexture),ge(Ne,st),_e(K.__webglFramebuffer,O,st,n.COLOR_ATTACHMENT0+Ae,Ne,0),S(st)&&x(Ne)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ge(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)_e(K.__webglFramebuffer[je],O,T,n.COLOR_ATTACHMENT0,Ae,je);else _e(K.__webglFramebuffer,O,T,n.COLOR_ATTACHMENT0,Ae,0);S(T)&&x(Ae),t.unbindTexture()}O.depthBuffer&&ft(O)}function Qe(O){const T=O.textures;for(let K=0,pe=T.length;K<pe;K++){const ve=T[K];if(S(ve)){const fe=R(O),Ze=r.get(ve).__webglTexture;t.bindTexture(fe,Ze),x(fe),t.unbindTexture()}}}const mt=[],lt=[];function kt(O){if(O.samples>0){if(Xt(O)===!1){const T=O.textures,K=O.width,pe=O.height;let ve=n.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ze=r.get(O),Ae=T.length>1;if(Ae)for(let st=0;st<T.length;st++)t.bindFramebuffer(n.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const je=O.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let st=0;st<T.length;st++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ze.__webglColorRenderbuffer[st]);const we=r.get(T[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,K,pe,0,0,K,pe,ve,n.NEAREST),d===!0&&(mt.length=0,lt.length=0,mt.push(n.COLOR_ATTACHMENT0+st),O.depthBuffer&&O.resolveDepthBuffer===!1&&(mt.push(fe),lt.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let st=0;st<T.length;st++){t.bindFramebuffer(n.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,Ze.__webglColorRenderbuffer[st]);const we=r.get(T[st]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const T=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function X(O){return Math.min(a.maxSamples,O.samples)}function Xt(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _t(O){const T=c.render.frame;p.get(O)!==T&&(p.set(O,T),O.update())}function Et(O,T){const K=O.colorSpace,pe=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==Ka&&K!==Bi&&(Ct.getTransfer(K)===Ot?(pe!==zi||ve!==pi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",K)),T}function Ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=ne,this.setTexture2D=le,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Pt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WD(n,e){function t(r,a=Bi){let o;const c=Ct.getTransfer(a);if(r===pi)return n.UNSIGNED_BYTE;if(r===Om)return n.UNSIGNED_SHORT_4_4_4_4;if(r===km)return n.UNSIGNED_SHORT_5_5_5_1;if(r===rM)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===sM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===nM)return n.BYTE;if(r===iM)return n.SHORT;if(r===ml)return n.UNSIGNED_SHORT;if(r===Fm)return n.INT;if(r===sr)return n.UNSIGNED_INT;if(r===Qi)return n.FLOAT;if(r===br)return n.HALF_FLOAT;if(r===aM)return n.ALPHA;if(r===oM)return n.RGB;if(r===zi)return n.RGBA;if(r===Ar)return n.DEPTH_COMPONENT;if(r===Gs)return n.DEPTH_STENCIL;if(r===lM)return n.RED;if(r===Bm)return n.RED_INTEGER;if(r===$a)return n.RG;if(r===Vm)return n.RG_INTEGER;if(r===zm)return n.RGBA_INTEGER;if(r===Mu||r===wu||r===Eu||r===Tu)if(c===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Mu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Mu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vp||r===xp||r===yp||r===_p)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_p)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sp||r===Mp||r===wp||r===Ep||r===Tp||r===bp||r===Ap)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Sp||r===Mp)return c===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===wp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ep)return o.COMPRESSED_R11_EAC;if(r===Tp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===bp)return o.COMPRESSED_RG11_EAC;if(r===Ap)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cp||r===Rp||r===Pp||r===Np||r===Lp||r===Dp||r===Ip||r===Up||r===Fp||r===Op||r===kp||r===Bp||r===Vp||r===zp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Cp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Np)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ip)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Up)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zp)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jp||r===Hp||r===Gp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===jp)return c===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wp||r===Xp||r===Yp||r===qp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wp)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const XD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new MM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new pn({vertexShader:XD,fragmentShader:YD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new $u(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $D extends io{constructor(e,t){super();const r=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,g=null,y=null,w=null;const E=typeof XRWebGLBinding<"u",S=new qD,x={},R=t.getContextAttributes();let P=null,N=null;const C=[],I=[],F=new Rt;let V=null;const A=new kn;A.viewport=new rn;const L=new kn;L.viewport=new rn;const z=[A,L],ne=new s2;let j=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=C[re];return he===void 0&&(he=new yh,C[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=C[re];return he===void 0&&(he=new yh,C[re]=he),he.getGripSpace()},this.getHand=function(re){let he=C[re];return he===void 0&&(he=new yh,C[re]=he),he.getHandSpace()};function le(re){const he=I.indexOf(re.inputSource);if(he===-1)return;const _e=C[he];_e!==void 0&&(_e.update(re.inputSource,re.frame,h||c),_e.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){a.removeEventListener("select",le),a.removeEventListener("selectstart",le),a.removeEventListener("selectend",le),a.removeEventListener("squeeze",le),a.removeEventListener("squeezestart",le),a.removeEventListener("squeezeend",le),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",H);for(let re=0;re<C.length;re++){const he=I[re];he!==null&&(I[re]=null,C[re].disconnect(he))}j=null,J=null,S.reset();for(const re in x)delete x[re];e.setRenderTarget(P),y=null,g=null,m=null,a=null,N=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",le),a.addEventListener("selectstart",le),a.addEventListener("selectend",le),a.addEventListener("squeeze",le),a.addEventListener("squeezestart",le),a.addEventListener("squeezeend",le),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",H),R.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(F),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,$e=null,ze=null;R.depth&&(ze=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=R.stencil?Gs:Ar,$e=R.stencil?gl:sr);const ft={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(ft),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new rr(g.textureWidth,g.textureHeight,{format:zi,type:pi,depthTexture:new _l(g.textureWidth,g.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,_e),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new rr(y.framebufferWidth,y.framebufferHeight,{format:zi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),Te.setContext(a),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(re){for(let he=0;he<re.removed.length;he++){const _e=re.removed[he],$e=I.indexOf(_e);$e>=0&&(I[$e]=null,C[$e].disconnect(_e))}for(let he=0;he<re.added.length;he++){const _e=re.added[he];let $e=I.indexOf(_e);if($e===-1){for(let ft=0;ft<C.length;ft++)if(ft>=I.length){I.push(_e),$e=ft;break}else if(I[ft]===null){I[ft]=_e,$e=ft;break}if($e===-1)break}const ze=C[$e];ze&&ze.connect(_e)}}const k=new ae,ie=new ae;function U(re,he,_e){k.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);const $e=k.distanceTo(ie),ze=he.projectionMatrix.elements,ft=_e.projectionMatrix.elements,Pt=ze[14]/(ze[10]-1),pt=ze[14]/(ze[10]+1),Qe=(ze[9]+1)/ze[5],mt=(ze[9]-1)/ze[5],lt=(ze[8]-1)/ze[0],kt=(ft[8]+1)/ft[0],X=Pt*lt,Xt=Pt*kt,_t=$e/(-lt+kt),Et=_t*-lt;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Et),re.translateZ(_t),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ze[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ye=Pt+_t,O=pt+_t,T=X-Et,K=Xt+($e-Et),pe=Qe*pt/O*Ye,ve=mt*pt/O*Ye;re.projectionMatrix.makePerspective(T,K,pe,ve,Ye,O),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function G(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let he=re.near,_e=re.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),ne.near=L.near=A.near=he,ne.far=L.far=A.far=_e,(j!==ne.near||J!==ne.far)&&(a.updateRenderState({depthNear:ne.near,depthFar:ne.far}),j=ne.near,J=ne.far),ne.layers.mask=re.layers.mask|6,A.layers.mask=ne.layers.mask&3,L.layers.mask=ne.layers.mask&5;const $e=re.parent,ze=ne.cameras;G(ne,$e);for(let ft=0;ft<ze.length;ft++)G(ze[ft],$e);ze.length===2?U(ne,A,L):ne.projectionMatrix.copy(A.projectionMatrix),ge(re,ne,$e)};function ge(re,he,_e){_e===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(_e.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=yl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(re){d=re,g!==null&&(g.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(re){return x[re]};let de=null;function Le(re,he){if(p=he.getViewerPose(h||c),w=he,p!==null){const _e=p.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let $e=!1;_e.length!==ne.cameras.length&&(ne.cameras.length=0,$e=!0);for(let pt=0;pt<_e.length;pt++){const Qe=_e[pt];let mt=null;if(y!==null)mt=y.getViewport(Qe);else{const kt=m.getViewSubImage(g,Qe);mt=kt.viewport,pt===0&&(e.setRenderTargetTextures(N,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(N))}let lt=z[pt];lt===void 0&&(lt=new kn,lt.layers.enable(pt),lt.viewport=new rn,z[pt]=lt),lt.matrix.fromArray(Qe.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Qe.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(mt.x,mt.y,mt.width,mt.height),pt===0&&(ne.matrix.copy(lt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),$e===!0&&ne.cameras.push(lt)}const ze=a.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){m=r.getBinding();const pt=m.getDepthInformation(_e[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,a.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),m=r.getBinding();for(let pt=0;pt<_e.length;pt++){const Qe=_e[pt].camera;if(Qe){let mt=x[Qe];mt||(mt=new MM,x[Qe]=mt);const lt=m.getCameraImage(Qe);mt.sourceTexture=lt}}}}for(let _e=0;_e<C.length;_e++){const $e=I[_e],ze=C[_e];$e!==null&&ze!==void 0&&ze.update($e,he,h||c)}de&&de(re,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Te=new EM;Te.setAnimationLoop(Le),this.setAnimationLoop=function(re){de=re},this.dispose=function(){}}}const Fs=new ar,KD=new Kt;function ZD(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,xM(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,R,P,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),m(S,x)):x.isMeshPhongMaterial?(o(S,x),p(S,x)):x.isMeshStandardMaterial?(o(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,N)):x.isMeshMatcapMaterial?(o(S,x),w(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),E(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,R,P):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===mn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===mn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=e.get(x),P=R.envMap,N=R.envMapRotation;P&&(S.envMap.value=P,Fs.copy(N),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),S.envMapRotation.value.setFromMatrix4(KD.makeRotationFromEuler(Fs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===mn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const R=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function JD(n,e,t,r){let a={},o={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){const N=P.program;r.uniformBlockBinding(R,N)}function h(R,P){let N=a[R.id];N===void 0&&(w(R),N=p(R),a[R.id]=N,R.addEventListener("dispose",S));const C=P.program;r.updateUBOMapping(R,C);const I=e.render.frame;o[R.id]!==I&&(g(R),o[R.id]=I)}function p(R){const P=m();R.__bindingPointIndex=P;const N=n.createBuffer(),C=R.__size,I=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,N),N}function m(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const P=a[R.id],N=R.uniforms,C=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let I=0,F=N.length;I<F;I++){const V=Array.isArray(N[I])?N[I]:[N[I]];for(let A=0,L=V.length;A<L;A++){const z=V[A];if(y(z,I,A,C)===!0){const ne=z.__offset,j=Array.isArray(z.value)?z.value:[z.value];let J=0;for(let le=0;le<j.length;le++){const Q=j[le],H=E(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,ne+J,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,J),J+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(R,P,N,C){const I=R.value,F=P+"_"+N;if(C[F]===void 0)return typeof I=="number"||typeof I=="boolean"?C[F]=I:C[F]=I.clone(),!0;{const V=C[F];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return C[F]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function w(R){const P=R.uniforms;let N=0;const C=16;for(let F=0,V=P.length;F<V;F++){const A=Array.isArray(P[F])?P[F]:[P[F]];for(let L=0,z=A.length;L<z;L++){const ne=A[L],j=Array.isArray(ne.value)?ne.value:[ne.value];for(let J=0,le=j.length;J<le;J++){const Q=j[J],H=E(Q),k=N%C,ie=k%H.boundary,U=k+ie;N+=ie,U!==0&&C-U<H.storage&&(N+=C-U),ne.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=N,N+=H.storage}}}const I=N%C;return I>0&&(N+=C-I),R.__size=N,R.__cache={},this}function E(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",R),P}function S(R){const P=R.target;P.removeEventListener("dispose",S);const N=c.indexOf(P.__bindingPointIndex);c.splice(N,1),n.deleteBuffer(a[P.id]),delete a[P.id],delete o[P.id]}function x(){for(const R in a)n.deleteBuffer(a[R]);c=[],a={},o={}}return{bind:d,update:h,dispose:x}}const QD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function eI(){return qi===null&&(qi=new XP(QD,16,16,$a,br),qi.name="DFG_LUT",qi.minFilter=Wt,qi.magFilter=Wt,qi.wrapS=Ji,qi.wrapT=Ji,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class Il{constructor(e={}){const{canvas:t=sP(),context:r=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:y=pi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const E=y,S=new Set([zm,Vm,Bm]),x=new Set([pi,sr,ml,gl,Om,km]),R=new Uint32Array(4),P=new Int32Array(4);let N=null,C=null;const I=[],F=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Gt;let z=0,ne=0,j=null,J=-1,le=null;const Q=new rn,H=new rn;let k=null;const ie=new wt(0);let U=0,G=t.width,ge=t.height,de=1,Le=null,Te=null;const re=new rn(0,0,G,ge),he=new rn(0,0,G,ge);let _e=!1;const $e=new Xm;let ze=!1,ft=!1;const Pt=new Kt,pt=new ae,Qe=new rn,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function kt(){return j===null?de:1}let X=r;function Xt(D,Z){return t.getContext(D,Z)}try{const D={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Um}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),X===null){const Z="webgl2";if(X=Xt(Z,D),X===null)throw Xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Dt("WebGLRenderer: "+D.message),D}let _t,Et,Ye,O,T,K,pe,ve,fe,Ze,Ae,je,st,we,Ne,We,qe,Re,dt,Y,Ie,Ee,Ue,Se;function me(){_t=new eL(X),_t.init(),Ee=new WD(X,_t),Et=new WN(X,_t,e,Ee),Ye=new HD(X,_t),Et.reversedDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),O=new iL(X),T=new CD,K=new GD(X,_t,Ye,T,Et,Ee,O),pe=new YN(A),ve=new QN(A),fe=new o2(X),Ue=new HN(X,fe),Ze=new tL(X,fe,O,Ue),Ae=new sL(X,Ze,fe,O),dt=new rL(X,Et,K),We=new XN(T),je=new AD(A,pe,ve,_t,Et,Ue,We),st=new ZD(A,T),we=new PD,Ne=new FD(_t),Re=new jN(A,pe,ve,Ye,Ae,w,d),qe=new zD(A,Ae,Et),Se=new JD(X,O,Et,Ye),Y=new GN(X,_t,O),Ie=new nL(X,_t,O),O.programs=je.programs,A.capabilities=Et,A.extensions=_t,A.properties=T,A.renderLists=we,A.shadowMap=qe,A.state=Ye,A.info=O}me(),E!==pi&&(V=new oL(E,t.width,t.height,a,o));const Pe=new $D(A,X);this.xr=Pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=_t.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=_t.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(D){D!==void 0&&(de=D,this.setSize(G,ge,!1))},this.getSize=function(D){return D.set(G,ge)},this.setSize=function(D,Z,ue=!0){if(Pe.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,ge=Z,t.width=Math.floor(D*de),t.height=Math.floor(Z*de),ue===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(G*de,ge*de).floor()},this.setDrawingBufferSize=function(D,Z,ue){G=D,ge=Z,de=ue,t.width=Math.floor(D*ue),t.height=Math.floor(Z*ue),this.setViewport(0,0,D,Z)},this.setEffects=function(D){if(E===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Z=0;Z<D.length;Z++)if(D[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Q)},this.getViewport=function(D){return D.copy(re)},this.setViewport=function(D,Z,ue,oe){D.isVector4?re.set(D.x,D.y,D.z,D.w):re.set(D,Z,ue,oe),Ye.viewport(Q.copy(re).multiplyScalar(de).round())},this.getScissor=function(D){return D.copy(he)},this.setScissor=function(D,Z,ue,oe){D.isVector4?he.set(D.x,D.y,D.z,D.w):he.set(D,Z,ue,oe),Ye.scissor(H.copy(he).multiplyScalar(de).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(D){Ye.setScissorTest(_e=D)},this.setOpaqueSort=function(D){Le=D},this.setTransparentSort=function(D){Te=D},this.getClearColor=function(D){return D.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,ue=!0){let oe=0;if(D){let te=!1;if(j!==null){const De=j.texture.format;te=S.has(De)}if(te){const De=j.texture.type,Oe=x.has(De),Ce=Re.getClearColor(),Ge=Re.getClearAlpha(),Be=Ce.r,rt=Ce.g,et=Ce.b;Oe?(R[0]=Be,R[1]=rt,R[2]=et,R[3]=Ge,X.clearBufferuiv(X.COLOR,0,R)):(P[0]=Be,P[1]=rt,P[2]=et,P[3]=Ge,X.clearBufferiv(X.COLOR,0,P))}else oe|=X.COLOR_BUFFER_BIT}Z&&(oe|=X.DEPTH_BUFFER_BIT),ue&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),Re.dispose(),we.dispose(),Ne.dispose(),T.dispose(),pe.dispose(),ve.dispose(),Ae.dispose(),Ue.dispose(),Se.dispose(),je.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ps),Pe.removeEventListener("sessionend",ms),Ai.stop()};function at(D){D.preventDefault(),ry("WebGLRenderer: Context Lost."),L=!0}function Ft(){ry("WebGLRenderer: Context Restored."),L=!1;const D=O.autoReset,Z=qe.enabled,ue=qe.autoUpdate,oe=qe.needsUpdate,te=qe.type;me(),O.autoReset=D,qe.enabled=Z,qe.autoUpdate=ue,qe.needsUpdate=oe,qe.type=te}function Tt(D){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function oi(D){const Z=D.target;Z.removeEventListener("dispose",oi),Gn(Z)}function Gn(D){lo(D),T.remove(D)}function lo(D){const Z=T.get(D).programs;Z!==void 0&&(Z.forEach(function(ue){je.releaseProgram(ue)}),D.isShaderMaterial&&je.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ue,oe,te,De){Z===null&&(Z=mt);const Oe=te.isMesh&&te.matrixWorld.determinant()<0,Ce=Bl(D,Z,ue,oe,te);Ye.setMaterial(oe,Oe);let Ge=ue.index,Be=1;if(oe.wireframe===!0){if(Ge=Ze.getWireframeAttribute(ue),Ge===void 0)return;Be=2}const rt=ue.drawRange,et=ue.attributes.position;let gt=rt.start*Be,bt=(rt.start+rt.count)*Be;De!==null&&(gt=Math.max(gt,De.start*Be),bt=Math.min(bt,(De.start+De.count)*Be)),Ge!==null?(gt=Math.max(gt,0),bt=Math.min(bt,Ge.count)):et!=null&&(gt=Math.max(gt,0),bt=Math.min(bt,et.count));const Vt=bt-gt;if(Vt<0||Vt===1/0)return;Ue.setup(te,oe,Ce,ue,Ge);let Bt,Nt=Y;if(Ge!==null&&(Bt=fe.get(Ge),Nt=Ie,Nt.setIndex(Bt)),te.isMesh)oe.wireframe===!0?(Ye.setLineWidth(oe.wireframeLinewidth*kt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(te.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),Ye.setLineWidth(tt*kt()),te.isLineSegments?Nt.setMode(X.LINES):te.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else te.isPoints?Nt.setMode(X.POINTS):te.isSprite&&Nt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const tt=te._multiDrawStarts,It=te._multiDrawCounts,St=te._multiDrawCount,Nn=Ge?fe.get(Ge).bytesPerElement:1,ji=T.get(oe).currentProgram.getUniforms();for(let un=0;un<St;un++)ji.setValue(X,"_gl_DrawID",un),Nt.render(tt[un]/Nn,It[un])}else if(te.isInstancedMesh)Nt.renderInstances(gt,Vt,te.count);else if(ue.isInstancedBufferGeometry){const tt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,It=Math.min(ue.instanceCount,tt);Nt.renderInstances(gt,Vt,It)}else Nt.render(gt,Vt)};function Pr(D,Z,ue){D.transparent===!0&&D.side===Ki&&D.forceSinglePass===!1?(D.side=mn,D.needsUpdate=!0,gs(D,Z,ue),D.side=Tr,D.needsUpdate=!0,gs(D,Z,ue),D.side=Ki):gs(D,Z,ue)}this.compile=function(D,Z,ue=null){ue===null&&(ue=D),C=Ne.get(ue),C.init(Z),F.push(C),ue.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),D!==ue&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const oe=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const Ce=De[Oe];Pr(Ce,ue,te),oe.add(Ce)}else Pr(De,ue,te),oe.add(De)}),C=F.pop(),oe},this.compileAsync=function(D,Z,ue=null){const oe=this.compile(D,Z,ue);return new Promise(te=>{function De(){if(oe.forEach(function(Oe){T.get(Oe).currentProgram.isReady()&&oe.delete(Oe)}),oe.size===0){te(D);return}setTimeout(De,10)}_t.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let co=null;function hs(D){co&&co(D)}function ps(){Ai.stop()}function ms(){Ai.start()}const Ai=new EM;Ai.setAnimationLoop(hs),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(D){co=D,Pe.setAnimationLoop(D),D===null?Ai.stop():Ai.start()},Pe.addEventListener("sessionstart",ps),Pe.addEventListener("sessionend",ms),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ue=Pe.enabled===!0&&Pe.isPresenting===!0,oe=V!==null&&(j===null||ue)&&V.begin(A,j);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Z),Z=Pe.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Z,j),C=Ne.get(D,F.length),C.init(Z),F.push(C),Pt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$e.setFromProjectionMatrix(Pt,er,Z.reversedDepth),ft=this.localClippingEnabled,ze=We.init(this.clippingPlanes,ft),N=we.get(D,I.length),N.init(),I.push(N),Pe.enabled===!0&&Pe.isPresenting===!0){const Oe=A.xr.getDepthSensingMesh();Oe!==null&&uo(Oe,Z,-1/0,A.sortObjects)}uo(D,Z,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(Le,Te),lt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,lt&&Re.addToRenderList(N,D),this.info.render.frame++,ze===!0&&We.beginShadows();const te=C.state.shadowsArray;if(qe.render(te,D,Z),ze===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&V.hasRenderPass())===!1){const Oe=N.opaque,Ce=N.transmissive;if(C.setupLights(),Z.isArrayCamera){const Ge=Z.cameras;if(Ce.length>0)for(let Be=0,rt=Ge.length;Be<rt;Be++){const et=Ge[Be];Ol(Oe,Ce,D,et)}lt&&Re.render(D);for(let Be=0,rt=Ge.length;Be<rt;Be++){const et=Ge[Be];Fl(N,D,et,et.viewport)}}else Ce.length>0&&Ol(Oe,Ce,D,Z),lt&&Re.render(D),Fl(N,D,Z)}j!==null&&ne===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),oe&&V.end(A),D.isScene===!0&&D.onAfterRender(A,D,Z),Ue.resetDefaultState(),J=-1,le=null,F.pop(),F.length>0?(C=F[F.length-1],ze===!0&&We.setGlobalState(A.clippingPlanes,C.state.camera)):C=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function uo(D,Z,ue,oe){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||$e.intersectsSprite(D)){oe&&Qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Pt);const Oe=Ae.update(D),Ce=D.material;Ce.visible&&N.push(D,Oe,Ce,ue,Qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||$e.intersectsObject(D))){const Oe=Ae.update(D),Ce=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Qe.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Qe.copy(Oe.boundingSphere.center)),Qe.applyMatrix4(D.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ce)){const Ge=Oe.groups;for(let Be=0,rt=Ge.length;Be<rt;Be++){const et=Ge[Be],gt=Ce[et.materialIndex];gt&&gt.visible&&N.push(D,Oe,gt,ue,Qe.z,et)}}else Ce.visible&&N.push(D,Oe,Ce,ue,Qe.z,null)}}const De=D.children;for(let Oe=0,Ce=De.length;Oe<Ce;Oe++)uo(De[Oe],Z,ue,oe)}function Fl(D,Z,ue,oe){const{opaque:te,transmissive:De,transparent:Oe}=D;C.setupLightsView(ue),ze===!0&&We.setGlobalState(A.clippingPlanes,ue),oe&&Ye.viewport(Q.copy(oe)),te.length>0&&mi(te,Z,ue),De.length>0&&mi(De,Z,ue),Oe.length>0&&mi(Oe,Z,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ol(D,Z,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[oe.id]===void 0){const gt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[oe.id]=new rr(1,1,{generateMipmaps:!0,type:gt?br:pi,minFilter:zn,samples:Et.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const De=C.state.transmissionRenderTarget[oe.id],Oe=oe.viewport||Q;De.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);const Ce=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(ie),U=A.getClearAlpha(),U<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Re.render(ue);const rt=A.toneMapping;A.toneMapping=ir;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),C.setupLightsView(oe),ze===!0&&We.setGlobalState(A.clippingPlanes,oe),mi(D,ue,oe),K.updateMultisampleRenderTarget(De),K.updateRenderTargetMipmap(De),_t.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let bt=0,Vt=Z.length;bt<Vt;bt++){const Bt=Z[bt],{object:Nt,geometry:tt,material:It,group:St}=Bt;if(It.side===Ki&&Nt.layers.test(oe.layers)){const Nn=It.side;It.side=mn,It.needsUpdate=!0,fo(Nt,ue,oe,tt,It,St),It.side=Nn,It.needsUpdate=!0,gt=!0}}gt===!0&&(K.updateMultisampleRenderTarget(De),K.updateRenderTargetMipmap(De))}A.setRenderTarget(Ce,Ge,Be),A.setClearColor(ie,U),et!==void 0&&(oe.viewport=et),A.toneMapping=rt}function mi(D,Z,ue){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,De=D.length;te<De;te++){const Oe=D[te],{object:Ce,geometry:Ge,group:Be}=Oe;let rt=Oe.material;rt.allowOverride===!0&&oe!==null&&(rt=oe),Ce.layers.test(ue.layers)&&fo(Ce,Z,ue,Ge,rt,Be)}}function fo(D,Z,ue,oe,te,De){D.onBeforeRender(A,Z,ue,oe,te,De),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(A,Z,ue,oe,D,De),te.transparent===!0&&te.side===Ki&&te.forceSinglePass===!1?(te.side=mn,te.needsUpdate=!0,A.renderBufferDirect(ue,Z,oe,te,D,De),te.side=Tr,te.needsUpdate=!0,A.renderBufferDirect(ue,Z,oe,te,D,De),te.side=Ki):A.renderBufferDirect(ue,Z,oe,te,D,De),D.onAfterRender(A,Z,ue,oe,te,De)}function gs(D,Z,ue){Z.isScene!==!0&&(Z=mt);const oe=T.get(D),te=C.state.lights,De=C.state.shadowsArray,Oe=te.state.version,Ce=je.getParameters(D,te.state,De,Z,ue),Ge=je.getProgramCacheKey(Ce);let Be=oe.programs;oe.environment=D.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(D.isMeshStandardMaterial?ve:pe).get(D.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,Be===void 0&&(D.addEventListener("dispose",oi),Be=new Map,oe.programs=Be);let rt=Be.get(Ge);if(rt!==void 0){if(oe.currentProgram===rt&&oe.lightsStateVersion===Oe)return ho(D,Ce),rt}else Ce.uniforms=je.getUniforms(D),D.onBeforeCompile(Ce,A),rt=je.acquireProgram(Ce,Ge),Be.set(Ge,rt),oe.uniforms=Ce.uniforms;const et=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(et.clippingPlanes=We.uniform),ho(D,Ce),oe.needsLights=zl(D),oe.lightsStateVersion=Oe,oe.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMap.value=te.state.directionalShadowMap,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotShadowMap.value=te.state.spotShadowMap,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMap.value=te.state.pointShadowMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),oe.currentProgram=rt,oe.uniformsList=null,rt}function kl(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=bu.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function ho(D,Z){const ue=T.get(D);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function Bl(D,Z,ue,oe,te){Z.isScene!==!0&&(Z=mt),K.resetTextureUnits();const De=Z.fog,Oe=oe.isMeshStandardMaterial?Z.environment:null,Ce=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ka,Ge=(oe.isMeshStandardMaterial?ve:pe).get(oe.envMap||Oe),Be=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,rt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ue.morphAttributes.position,gt=!!ue.morphAttributes.normal,bt=!!ue.morphAttributes.color;let Vt=ir;oe.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Vt=A.toneMapping);const Bt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Nt=Bt!==void 0?Bt.length:0,tt=T.get(oe),It=C.state.lights;if(ze===!0&&(ft===!0||D!==le)){const xn=D===le&&oe.id===J;We.setState(oe,D,xn)}let St=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==It.state.version||tt.outputColorSpace!==Ce||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==Ge||oe.fog===!0&&tt.fog!==De||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==We.numPlanes||tt.numIntersection!==We.numIntersection)||tt.vertexAlphas!==Be||tt.vertexTangents!==rt||tt.morphTargets!==et||tt.morphNormals!==gt||tt.morphColors!==bt||tt.toneMapping!==Vt||tt.morphTargetsCount!==Nt)&&(St=!0):(St=!0,tt.__version=oe.version);let Nn=tt.currentProgram;St===!0&&(Nn=gs(oe,Z,te));let ji=!1,un=!1,vs=!1;const Ut=Nn.getUniforms(),ut=tt.uniforms;if(Ye.useProgram(Nn.program)&&(ji=!0,un=!0,vs=!0),oe.id!==J&&(J=oe.id,un=!0),ji||le!==D){Ye.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ut.setValue(X,"projectionMatrix",D.projectionMatrix),Ut.setValue(X,"viewMatrix",D.matrixWorldInverse);const yn=Ut.map.cameraPosition;yn!==void 0&&yn.setValue(X,pt.setFromMatrixPosition(D.matrixWorld)),Et.logarithmicDepthBuffer&&Ut.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ut.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),le!==D&&(le=D,un=!0,vs=!0)}if(tt.needsLights&&(It.state.directionalShadowMap.length>0&&Ut.setValue(X,"directionalShadowMap",It.state.directionalShadowMap,K),It.state.spotShadowMap.length>0&&Ut.setValue(X,"spotShadowMap",It.state.spotShadowMap,K),It.state.pointShadowMap.length>0&&Ut.setValue(X,"pointShadowMap",It.state.pointShadowMap,K)),te.isSkinnedMesh){Ut.setOptional(X,te,"bindMatrix"),Ut.setOptional(X,te,"bindMatrixInverse");const xn=te.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ut.setValue(X,"boneTexture",xn.boneTexture,K))}te.isBatchedMesh&&(Ut.setOptional(X,te,"batchingTexture"),Ut.setValue(X,"batchingTexture",te._matricesTexture,K),Ut.setOptional(X,te,"batchingIdTexture"),Ut.setValue(X,"batchingIdTexture",te._indirectTexture,K),Ut.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ut.setValue(X,"batchingColorTexture",te._colorsTexture,K));const Wn=ue.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&dt.update(te,ue,Nn),(un||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,Ut.setValue(X,"receiveShadow",te.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(ut.envMap.value=Ge,ut.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(ut.envMapIntensity.value=Z.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=eI()),un&&(Ut.setValue(X,"toneMappingExposure",A.toneMappingExposure),tt.needsLights&&Vl(ut,vs),De&&oe.fog===!0&&st.refreshFogUniforms(ut,De),st.refreshMaterialUniforms(ut,oe,de,ge,C.state.transmissionRenderTarget[D.id]),bu.upload(X,kl(tt),ut,K)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(bu.upload(X,kl(tt),ut,K),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ut.setValue(X,"center",te.center),Ut.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ut.setValue(X,"normalMatrix",te.normalMatrix),Ut.setValue(X,"modelMatrix",te.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const xn=oe.uniformsGroups;for(let yn=0,$s=xn.length;yn<$s;yn++){const Hi=xn[yn];Se.update(Hi,Nn),Se.bind(Hi,Nn)}}return Nn}function Vl(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function zl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(D,Z,ue){const oe=T.get(D);oe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=Z,T.get(D.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const ue=T.get(D);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0};const Ju=X.createFramebuffer();this.setRenderTarget=function(D,Z=0,ue=0){j=D,z=Z,ne=ue;let oe=null,te=!1,De=!1;if(D){const Ce=T.get(D);if(Ce.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),Q.copy(D.viewport),H.copy(D.scissor),k=D.scissorTest,Ye.viewport(Q),Ye.scissor(H),Ye.setScissorTest(k),J=-1;return}else if(Ce.__webglFramebuffer===void 0)K.setupRenderTarget(D);else if(Ce.__hasExternalTextures)K.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const rt=D.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&T.has(rt)&&(D.width!==rt.image.width||D.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(D)}}const Ge=D.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const Be=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Be[Z])?oe=Be[Z][ue]:oe=Be[Z],te=!0):D.samples>0&&K.useMultisampledRTT(D)===!1?oe=T.get(D).__webglMultisampledFramebuffer:Array.isArray(Be)?oe=Be[ue]:oe=Be,Q.copy(D.viewport),H.copy(D.scissor),k=D.scissorTest}else Q.copy(re).multiplyScalar(de).floor(),H.copy(he).multiplyScalar(de).floor(),k=_e;if(ue!==0&&(oe=Ju),Ye.bindFramebuffer(X.FRAMEBUFFER,oe)&&Ye.drawBuffers(D,oe),Ye.viewport(Q),Ye.scissor(H),Ye.setScissorTest(k),te){const Ce=T.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce.__webglTexture,ue)}else if(De){const Ce=Z;for(let Ge=0;Ge<D.textures.length;Ge++){const Be=T.get(D.textures[Ge]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ge,Be.__webglTexture,ue,Ce)}}else if(D!==null&&ue!==0){const Ce=T.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,ue)}J=-1},this.readRenderTargetPixels=function(D,Z,ue,oe,te,De,Oe,Ce=0){if(!(D&&D.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const Be=D.textures[Ce],rt=Be.format,et=Be.type;if(!Et.textureFormatReadable(rt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(et)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-oe&&ue>=0&&ue<=D.height-te&&(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),X.readPixels(Z,ue,oe,te,Ee.convert(rt),Ee.convert(et),De))}finally{const Be=j!==null?T.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(D,Z,ue,oe,te,De,Oe,Ce=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(Z>=0&&Z<=D.width-oe&&ue>=0&&ue<=D.height-te){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);const Be=D.textures[Ce],rt=Be.format,et=Be.type;if(!Et.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.bufferData(X.PIXEL_PACK_BUFFER,De.byteLength,X.STREAM_READ),D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),X.readPixels(Z,ue,oe,te,Ee.convert(rt),Ee.convert(et),0);const bt=j!==null?T.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,bt);const Vt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await aP(X,Vt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,De),X.deleteBuffer(gt),X.deleteSync(Vt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,ue=0){const oe=Math.pow(2,-ue),te=Math.floor(D.image.width*oe),De=Math.floor(D.image.height*oe),Oe=Z!==null?Z.x:0,Ce=Z!==null?Z.y:0;K.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,Oe,Ce,te,De),Ye.unbindTexture()};const Qu=X.createFramebuffer(),Zt=X.createFramebuffer();this.copyTextureToTexture=function(D,Z,ue=null,oe=null,te=0,De=null){De===null&&(te!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=te,te=0):De=0);let Oe,Ce,Ge,Be,rt,et,gt,bt,Vt;const Bt=D.isCompressedTexture?D.mipmaps[De]:D.image;if(ue!==null)Oe=ue.max.x-ue.min.x,Ce=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,Be=ue.min.x,rt=ue.min.y,et=ue.isBox3?ue.min.z:0;else{const Wn=Math.pow(2,-te);Oe=Math.floor(Bt.width*Wn),Ce=Math.floor(Bt.height*Wn),D.isDataArrayTexture?Ge=Bt.depth:D.isData3DTexture?Ge=Math.floor(Bt.depth*Wn):Ge=1,Be=0,rt=0,et=0}oe!==null?(gt=oe.x,bt=oe.y,Vt=oe.z):(gt=0,bt=0,Vt=0);const Nt=Ee.convert(Z.format),tt=Ee.convert(Z.type);let It;Z.isData3DTexture?(K.setTexture3D(Z,0),It=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(K.setTexture2DArray(Z,0),It=X.TEXTURE_2D_ARRAY):(K.setTexture2D(Z,0),It=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const St=X.getParameter(X.UNPACK_ROW_LENGTH),Nn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ji=X.getParameter(X.UNPACK_SKIP_PIXELS),un=X.getParameter(X.UNPACK_SKIP_ROWS),vs=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Bt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Bt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,rt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,et);const Ut=D.isDataArrayTexture||D.isData3DTexture,ut=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const Wn=T.get(D),xn=T.get(Z),yn=T.get(Wn.__renderTarget),$s=T.get(xn.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Hi=0;Hi<Ge;Hi++)Ut&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(D).__webglTexture,te,et+Hi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(Z).__webglTexture,De,Vt+Hi)),X.blitFramebuffer(Be,rt,Oe,Ce,gt,bt,Oe,Ce,X.DEPTH_BUFFER_BIT,X.NEAREST);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||T.has(D)){const Wn=T.get(D),xn=T.get(Z);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,Qu),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,Zt);for(let yn=0;yn<Ge;yn++)Ut?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Wn.__webglTexture,te,et+yn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Wn.__webglTexture,te),ut?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,xn.__webglTexture,De,Vt+yn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,xn.__webglTexture,De),te!==0?X.blitFramebuffer(Be,rt,Oe,Ce,gt,bt,Oe,Ce,X.COLOR_BUFFER_BIT,X.NEAREST):ut?X.copyTexSubImage3D(It,De,gt,bt,Vt+yn,Be,rt,Oe,Ce):X.copyTexSubImage2D(It,De,gt,bt,Be,rt,Oe,Ce);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ut?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(It,De,gt,bt,Vt,Oe,Ce,Ge,Nt,tt,Bt.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(It,De,gt,bt,Vt,Oe,Ce,Ge,Nt,Bt.data):X.texSubImage3D(It,De,gt,bt,Vt,Oe,Ce,Ge,Nt,tt,Bt):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,De,gt,bt,Oe,Ce,Nt,tt,Bt.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,De,gt,bt,Bt.width,Bt.height,Nt,Bt.data):X.texSubImage2D(X.TEXTURE_2D,De,gt,bt,Oe,Ce,Nt,tt,Bt);X.pixelStorei(X.UNPACK_ROW_LENGTH,St),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ji),X.pixelStorei(X.UNPACK_SKIP_ROWS,un),X.pixelStorei(X.UNPACK_SKIP_IMAGES,vs),De===0&&Z.generateMipmaps&&X.generateMipmap(It),Ye.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&K.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?K.setTextureCube(D,0):D.isData3DTexture?K.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?K.setTexture2DArray(D,0):K.setTexture2D(D,0),Ye.unbindTexture()},this.resetState=function(){z=0,ne=0,j=null,Ye.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function tI(){const n=$.useRef(null);return $.useEffect(()=>{const e=n.current;if(!e)return;const t=new Rl,r=new kn(40,e.clientWidth/e.clientHeight,.1,2e3);r.position.set(0,0,3.95);const a=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),"outputColorSpace"in a?a.outputColorSpace=Gt:a.outputEncoding=void 0,a.toneMapping=qs,a.toneMappingExposure=1.05,e.appendChild(a.domElement);const o=new Cr(16777215,2.25);o.position.set(7,2,4),t.add(o);const c=new Cr(11192319,.12);c.position.set(-6,-2.5,6),t.add(c),t.add(new Ll(724246,.22));const u=new Nl,d=a.capabilities.getMaxAnisotropy(),h=u.load("/textures/jupiter.jpg",j=>{"colorSpace"in j?j.colorSpace=Gt:j.encoding=void 0,j.wrapS=Uu,j.wrapT=Ji,j.repeat.set(1,1),j.anisotropy=Math.min(d,8),j.minFilter=zn,j.magFilter=Wt,console.log("✅ jupiter texture loaded")},void 0,()=>console.log("❌ jupiter texture failed"));h.generateMipmaps=!0,h.minFilter=zn,h.magFilter=Wt;const p=new _r;t.add(p),p.rotation.z=ai.degToRad(3.1),p.scale.set(.88,.88,.88);const m=new Bn(1.2,196,196),g=new Ja({map:h,roughness:.95,metalness:0});g.onBeforeCompile=j=>{j.uniforms.uTime={value:0},j.fragmentShader=`
        uniform float uTime;
      `+j.fragmentShader,j.fragmentShader=j.fragmentShader.replace("#include <map_fragment>",`
        #ifdef USE_MAP
  vec2 uv = vMapUv;

  // scroll + wobble
  uv.x = fract(uv.x + uTime * 0.012);
  uv.x = fract(uv.x + sin((uv.y * 12.0) + (uTime * 0.8)) * 0.0025);

  // --- Seam Fix (blend left/right edges) ---
  float seamWidth = 0.008; // 👈 tweak (0.004 - 0.02)
  float seam = smoothstep(1.0 - seamWidth, 1.0, uv.x) +
               (1.0 - smoothstep(0.0, seamWidth, uv.x));

  vec4 texA = texture2D(map, uv);
  vec4 texB = texture2D(map, vec2(fract(uv.x + seamWidth), uv.y));

  vec4 texelColor = mix(texA, texB, clamp(seam, 0.0, 1.0));

  // gamma sRGB -> linear
  texelColor.rgb = pow(texelColor.rgb, vec3(2.2));

  diffuseColor *= texelColor;
#endif

        `),g.userData.shader=j};const y=new qt(m,g);p.add(y);const w=new qt(new Bn(1.06,128,128),new pn({transparent:!0,depthWrite:!1,side:mn,blending:Zi,uniforms:{uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
          varying vec3 vNormalW;
          varying vec3 vPosW;
          void main() {
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vPosW = wp.xyz;
            vNormalW = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          uniform vec3 uSunDir;
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vNormalW;
          varying vec3 vPosW;
          void main() {
            vec3 N = normalize(vNormalW);
            vec3 V = normalize(cameraPosition - vPosW);
            vec3 L = normalize(uSunDir);

            float fresnel = pow(1.0 - max(dot(V, N), 0.0), 2.7);
            float NdotL = max(dot(N, L), 0.0);
            float litMask = smoothstep(0.08, 0.55, NdotL);

            float glow = fresnel * litMask * uIntensity;
            gl_FragColor = vec4(uColor, glow);
          }
        `}));p.add(w);const E=new Pn,S=1200,x=new Float32Array(S*3);for(let j=0;j<S;j++){const J=38+Math.random()*30,le=Math.random()*Math.PI*2,Q=Math.acos(2*Math.random()-1);x[j*3]=J*Math.sin(Q)*Math.cos(le),x[j*3+1]=J*Math.sin(Q)*Math.sin(le),x[j*3+2]=J*Math.cos(Q)}E.setAttribute("position",new Jn(x,3));const R=new Pl(E,new ao({color:16777215,size:.045,transparent:!0,opacity:.6,depthWrite:!1}));t.add(R);let P=!1,N={x:0,y:0},C=0,I=0;const F=j=>{P=!0,N={x:j.clientX,y:j.clientY},C=0,I=0,e.setPointerCapture(j.pointerId)},V=j=>{if(!P)return;const J=j.clientX-N.x,le=j.clientY-N.y;C=J*.001,I=le*.001,p.rotation.y+=J*.004,p.rotation.x+=le*.004,p.rotation.x=ai.clamp(p.rotation.x,-.75,.75),N={x:j.clientX,y:j.clientY}},A=()=>P=!1;e.addEventListener("pointerdown",F),e.addEventListener("pointermove",V),e.addEventListener("pointerup",A),e.addEventListener("pointerleave",A),e.addEventListener("pointercancel",A);const L=new Dl,z=()=>{requestAnimationFrame(z);const j=L.getElapsedTime();y.rotation.y+=.00155,p.rotation.y+=16e-5,p.rotation.z=ai.degToRad(3.1)+Math.sin(j*.16)*.002,P||(p.rotation.y+=C,p.rotation.x+=I,C*=.92,I*=.92),g.userData.shader&&(g.userData.shader.uniforms.uTime.value=j),a.render(t,r)};z();const ne=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",ne),()=>{window.removeEventListener("resize",ne),e.removeEventListener("pointerdown",F),e.removeEventListener("pointermove",V),e.removeEventListener("pointerup",A),e.removeEventListener("pointerleave",A),e.removeEventListener("pointercancel",A),t.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material.forEach(J=>J.dispose()):j.material.dispose())}),a.dispose(),a.domElement&&e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),M.jsx("div",{className:"w-full flex items-center justify-center py-6",children:M.jsx("div",{className:`\r
          relative\r
          w-[320px] h-[320px]\r
          md:w-[560px] md:h-[560px]\r
          rounded-full overflow-hidden\r
   \r
        `,children:M.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}})})})}function nI(){return M.jsxs("section",{className:"relative min-h-screen overflow-hidden px-5 sm:px-10 md:px-24 lg:px-36 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20",children:[M.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center",children:[M.jsx("div",{className:"order-1 lg:order-1",children:M.jsxs(xt.div,{className:"mb-10 sm:mb-14 md:mb-24",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"Skills & Tools"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg",children:"A system-oriented view of how I design, build, and maintain scalable, production-ready CMS platforms and dashboards."})]})}),M.jsx("div",{className:"order-2 lg:order-2 flex justify-center lg:justify-end",children:M.jsx("div",{className:"w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none",children:M.jsx(tI,{})})})]}),M.jsx("div",{className:"mt-14 sm:mt-16 md:mt-20",children:M.jsxs("div",{className:"grid lg:grid-cols-3 gap-10 lg:gap-16 items-start",children:[M.jsx("div",{className:"lg:col-span-2",children:M.jsxs("div",{className:"space-y-14 sm:space-y-20 md:space-y-24",children:[M.jsx(mu,{index:1,title:"Frontend Engineering",description:"User-facing interfaces focused on clarity, performance, and accessibility.",items:Kr.frontend}),M.jsx(Rh,{}),M.jsx(mu,{index:2,title:"Backend & APIs",description:"Business logic, authentication, and secure API design.",items:Kr.backend}),M.jsx(Rh,{}),M.jsx(mu,{index:3,title:"Databases",description:"Data modeling for performance, scalability, and long-term maintainability.",items:Kr.database}),M.jsx(Rh,{}),M.jsx(mu,{index:4,title:"Tools & Workflow",description:"Tools that support clean code, testing, collaboration, and deployment.",items:Kr.tools})]})}),M.jsx("div",{className:"lg:col-span-1",children:M.jsxs("div",{className:"sticky top-28 space-y-6",children:[M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Skill Summary"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"My primary focus is building scalable CMS platforms and dashboards with clean architecture, strong UI structure, and secure APIs."}),M.jsxs("div",{className:"mt-5 space-y-3 text-sm text-gray-300",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Frontend"}),M.jsxs("span",{children:[Kr.frontend.length,"+ skills"]})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Backend"}),M.jsxs("span",{children:[Kr.backend.length,"+ skills"]})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Databases"}),M.jsxs("span",{children:[Kr.database.length,"+ tools"]})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Workflow"}),M.jsxs("span",{children:[Kr.tools.length,"+ tools"]})]})]}),M.jsx("div",{className:"mt-6",children:M.jsx("a",{href:"/contact",className:"w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Hire / Collaborate"})})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Currently improving"}),M.jsxs("ul",{className:"mt-4 space-y-3 text-sm text-gray-300 list-disc list-inside",children:[M.jsx("li",{children:"System design for enterprise apps"}),M.jsx("li",{children:"Performance optimization & caching"}),M.jsx("li",{children:"Clean API design patterns"})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Want details?"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"I can walk through architecture decisions, project structure, and real implementation details during interviews."}),M.jsxs("div",{className:"mt-6 flex gap-3",children:[M.jsx("a",{href:"/projects",className:"flex-1 inline-flex items-center justify-center px-4 py-3 rounded-lg border border-white/15 bg-white/[0.04] text-white font-medium hover:bg-white/[0.08] transition",children:"View Projects"}),M.jsx("a",{href:"/contact",className:"flex-1 inline-flex items-center justify-center px-4 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Contact"})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Capability Matrix"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"Skills are tools — here’s what I can reliably build and deliver in production."}),M.jsxs("div",{className:"mt-6 space-y-5",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm",children:[M.jsx("span",{className:"text-white/85 font-medium",children:"CMS & Admin Systems"}),M.jsx("span",{className:"text-white/40",children:"Strong"})]}),M.jsx("div",{className:"h-2 rounded-full bg-white/10 overflow-hidden",children:M.jsx("div",{className:"h-full w-[92%] rounded-full bg-white/60"})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm",children:[M.jsx("span",{className:"text-white/85 font-medium",children:"Dashboards & UI Architecture"}),M.jsx("span",{className:"text-white/40",children:"Strong"})]}),M.jsx("div",{className:"h-2 rounded-full bg-white/10 overflow-hidden",children:M.jsx("div",{className:"h-full w-[88%] rounded-full bg-white/55"})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm",children:[M.jsx("span",{className:"text-white/85 font-medium",children:"Backend APIs & Auth"}),M.jsx("span",{className:"text-white/40",children:"Pro"})]}),M.jsx("div",{className:"h-2 rounded-full bg-white/10 overflow-hidden",children:M.jsx("div",{className:"h-full w-[82%] rounded-full bg-white/50"})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm",children:[M.jsx("span",{className:"text-white/85 font-medium",children:"Database Design"}),M.jsx("span",{className:"text-white/40",children:"Good"})]}),M.jsx("div",{className:"h-2 rounded-full bg-white/10 overflow-hidden",children:M.jsx("div",{className:"h-full w-[76%] rounded-full bg-white/45"})})]})]})]})]})})]})})]})}function Rh(){return M.jsxs("div",{className:"relative h-px w-full overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0 bg-white/10"}),M.jsx(xt.div,{className:"absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent",animate:{x:["-40%","120%"]},transition:{duration:3,repeat:1/0,ease:"linear"}})]})}function mu({title:n,description:e,items:t,index:r}){return M.jsxs(xt.div,{className:"grid md:grid-cols-3 gap-10 items-start",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:r*.05,ease:"easeOut"},children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[M.jsxs("span",{className:"text-xs text-white/40 tracking-widest",children:["LAYER ",r]}),M.jsx("div",{className:"h-px w-10 bg-white/20"})]}),M.jsx("h3",{className:"text-xl font-semibold text-white",children:n}),M.jsx("p",{className:"text-gray-300 text-sm mt-3 leading-relaxed max-w-sm",children:e})]}),M.jsx("div",{className:"md:col-span-2 flex flex-wrap gap-3",children:t.map(a=>M.jsx(xt.span,{whileHover:{scale:1.06,boxShadow:"0 0 14px rgba(255,255,255,0.18)"},transition:{type:"spring",stiffness:220,damping:18},className:`\r
              px-3 py-1.5 text-sm\r
              rounded-md\r
              border border-white/10\r
              bg-white/[0.035]\r
              text-gray-200\r
              backdrop-blur\r
            `,children:a},a))})]})}function iI(){const n=$.useRef(null);return $.useEffect(()=>{const e=n.current;if(!e)return;const t=new Rl,r=new kn(40,e.clientWidth/e.clientHeight,.1,1e3);r.position.set(0,0,3.05);const a=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=Gt,a.toneMapping=qs,a.toneMappingExposure=1.05,e.appendChild(a.domElement);const o=new Cr(16777215,2.15);o.position.set(6,1.2,3.6),t.add(o);const c=new Cr(9417727,.18);c.position.set(-4,-2,6),t.add(c),t.add(new Ll(724246,.26));const u=new Nl,d=u.load("/textures/moon.jpg");d.colorSpace=Gt;const h=u.load("/textures/moon_bump.jpg");h.colorSpace=Bi;const p=a.capabilities.getMaxAnisotropy();[d,h].forEach(H=>{H.anisotropy=Math.min(p,8),H.minFilter=zn,H.magFilter=Wt,H.needsUpdate=!0});const m=new _r;t.add(m);const g=new Bn(1,192,192),y=new Ja({map:d,displacementMap:h,displacementScale:.022,displacementBias:-.005,bumpMap:h,bumpScale:.028,roughness:1,metalness:0}),w=new qt(g,y);m.add(w);const E=new Bn(1.09,192,192),S=new pn({transparent:!0,depthWrite:!1,side:mn,blending:Zi,uniforms:{uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
        varying vec3 vNormalW;
        varying vec3 vPosW;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vPosW = worldPos.xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);

          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        uniform vec3 uColor;
        uniform vec3 uWarm;
        uniform float uIntensity;

        varying vec3 vNormalW;
        varying vec3 vPosW;

        void main() {
          vec3 N = normalize(vNormalW);
          vec3 V = normalize(cameraPosition - vPosW);
          vec3 L = normalize(uSunDir);

          // fresnel rim
          float fresnel = pow(1.0 - max(dot(V, N), 0.0), 2.5);

          // glow only near light side edge
          float NdotL = dot(N, L);
          float litMask = smoothstep(0.10, 0.55, NdotL);

          // soften far edge
          float glow = fresnel * litMask * uIntensity;

          vec3 color = mix(uWarm, uColor, litMask);

          gl_FragColor = vec4(color, glow * 0.85);
        }
      `}),x=new qt(E,S);m.add(x);const R=new Pn,P=1100,N=new Float32Array(P*3);for(let H=0;H<P;H++){const k=35+Math.random()*25,ie=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1);N[H*3+0]=k*Math.sin(U)*Math.cos(ie),N[H*3+1]=k*Math.sin(U)*Math.sin(ie),N[H*3+2]=k*Math.cos(U)}R.setAttribute("position",new Jn(N,3));const C=new ao({color:16777215,size:.045,transparent:!0,opacity:.6,depthWrite:!1}),I=new Pl(R,C);t.add(I);let F=!1,V={x:0,y:0},A=0,L=0;const z=H=>{F=!0,V={x:H.clientX,y:H.clientY},A=0,L=0,e.setPointerCapture(H.pointerId)},ne=H=>{if(!F)return;const k=H.clientX-V.x,ie=H.clientY-V.y;A=k*9e-4,L=ie*9e-4,m.rotation.y+=k*.004,m.rotation.x+=ie*.004,m.rotation.x=ai.clamp(m.rotation.x,-.75,.75),V={x:H.clientX,y:H.clientY}},j=()=>{F=!1};e.addEventListener("pointerdown",z),e.addEventListener("pointermove",ne),e.addEventListener("pointerup",j),e.addEventListener("pointerleave",j),e.addEventListener("pointercancel",j);const J=new Dl,le=()=>{requestAnimationFrame(le);const H=J.getElapsedTime();w.rotation.y+=25e-5,m.rotation.z=Math.sin(H*.15)*.008,F||(m.rotation.y+=A,m.rotation.x+=L,A*=.92,L*=.92),I.rotation.y+=5e-5,S.uniforms.uSunDir.value.copy(o.position).normalize(),a.render(t,r)};le();const Q=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",Q),()=>{window.removeEventListener("resize",Q),e.removeEventListener("pointerdown",z),e.removeEventListener("pointermove",ne),e.removeEventListener("pointerup",j),e.removeEventListener("pointerleave",j),e.removeEventListener("pointercancel",j),t.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.dispose()):H.material.dispose())}),a.dispose(),a.domElement&&e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),M.jsx("div",{className:"w-full flex items-center justify-center py-6",children:M.jsxs("div",{className:`\r
          relative\r
          w-[320px] h-[320px]\r
          md:w-[560px] md:h-[560px]\r
          rounded-full overflow-hidden\r
          \r
        `,children:[M.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}}),M.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.70) 78%, rgba(0,0,0,0.96) 100%)"}}),M.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 30%, transparent 64%)"}})]})})}const rI=["All","React","CMS","WordPress"];function sI(){const[n,e]=$.useState("All"),t=$.useMemo(()=>n==="All"?Kx:Kx.filter(r=>r.category===n),[n]);return M.jsxs("section",{id:"projects",className:"py-24 px-6 max-w-7xl mx-auto",children:[M.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center",children:[M.jsx("div",{className:"order-1 lg:order-1",children:M.jsxs(xt.div,{className:"mb-10 sm:mb-14 md:mb-24 max-w-3xl",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"Projects"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg",children:"A selection of systems and applications I’ve built, focusing on real-world workflows, maintainability, and scalable architecture."})]})}),M.jsx("div",{className:"order-2 lg:order-2 flex justify-center lg:justify-end",children:M.jsx("div",{className:"w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none",children:M.jsx(iI,{})})})]}),M.jsxs("div",{className:"mb-12",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white",children:"Selected Projects"}),M.jsx("p",{className:"text-gray-400 mt-4 max-w-2xl",children:"A few systems and applications I’ve built, focusing on CMS architecture, dashboards, and modern product UI."})]}),M.jsx("div",{className:"mb-16 flex flex-wrap gap-3",children:rI.map(r=>M.jsx("button",{onClick:()=>e(r),className:`
              px-4 py-2 rounded-lg text-sm font-medium transition
              border border-white/10
              ${n===r?"bg-white text-black border-white":"bg-white/[0.04] text-white hover:bg-white/[0.07] hover:border-white/20"}
            `,children:r},r))}),M.jsx("div",{className:"space-y-20",children:t.map((r,a)=>M.jsx(aI,{project:r,reverse:a%2!==0},r.title))})]})}function aI({project:n,reverse:e}){return M.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[M.jsxs("div",{className:e?"md:order-2":"md:order-1",children:[M.jsx("div",{className:"inline-flex items-center gap-2 mb-3",children:M.jsx("span",{className:"text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-white/80",children:n.category})}),M.jsx("h3",{className:"text-2xl font-semibold text-white",children:n.title}),M.jsx("p",{className:"text-gray-300 mt-4 leading-relaxed",children:n.description}),n.highlights&&M.jsx("ul",{className:"mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside",children:n.highlights.map(t=>M.jsx("li",{children:t},t))}),M.jsx("div",{className:"flex flex-wrap gap-3 mt-6",children:n.tech.map(t=>M.jsx("span",{className:"px-3 py-1 text-sm border border-white/15 rounded-md bg-black/40 text-gray-200",children:t},t))}),n.featuredLinks&&M.jsxs("div",{className:"mt-6 space-y-2",children:[M.jsx("p",{className:"text-xs text-white/50 tracking-widest",children:"FEATURED WORDPRESS WORK"}),M.jsx("div",{className:"flex flex-wrap gap-3",children:n.featuredLinks.map(t=>M.jsxs("a",{href:t.url,target:"_blank",rel:"noreferrer",className:`\r
                    text-sm\r
                    px-3 py-1.5 rounded-md\r
                    border border-white/10\r
                    bg-white/[0.03]\r
                    hover:bg-white/[0.07]\r
                    hover:border-white/20\r
                    transition\r
                  `,children:[t.name," ↗"]},t.url))}),n.note&&M.jsx("p",{className:"text-xs text-white/40 mt-2",children:n.note})]}),M.jsxs("div",{className:"flex gap-6 mt-6 text-sm",children:[n.github&&n.github!=="#"&&M.jsx("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"underline hover:text-white",children:"GitHub"}),n.live&&n.live!=="#"&&M.jsx("a",{href:n.live,target:"_blank",rel:"noreferrer",className:"underline hover:text-white",children:"Live Demo"})]})]}),M.jsx("div",{className:`
          group rounded-2xl border border-white/10
          bg-white/[0.03] backdrop-blur
          h-44 sm:h-56 md:h-64
          overflow-hidden relative
          transition
          hover:border-white/20
          ${e?"md:order-1":"md:order-2"}
        `,style:{backgroundImage:`url(${n.image})`,backgroundSize:"cover",backgroundPosition:"center"},children:M.jsx("div",{className:"absolute inset-0 bg-black/35 group-hover:bg-black/15 transition"})})]})}const zs=[{id:1,cover:"../blogs/b5.png",title:"Designing Scalable CMS Architecture",excerpt:"How I approach building CMS platforms that remain maintainable as features, users, and data grow.",skills:["System Design","PHP","MySQL","Architecture"],readTime:"6 min read",date:"Jan 2026",content:[{type:"p",text:"When a CMS is small, everything feels easy: a few CRUD pages, a login panel, and some settings. The real challenge begins when requirements grow — more modules, more roles, more data, and more logic that must remain consistent over time."},{type:"h2",text:"1) Start with Clear Boundaries"},{type:"p",text:"The biggest mistake in CMS systems is mixing responsibilities everywhere. Admin UI directly touching database logic. Business logic scattered inside controllers. Authentication checks repeated on every page. Instead, I design the system in layers: Presentation → Services → Data Access."},{type:"ul",items:["Presentation Layer: routes + controllers + UI","Service Layer: business rules, workflows, validation","Repository/Data Layer: database queries and models"]},{type:"h2",text:"2) Think in Modules"},{type:"p",text:"A CMS is not a single app — it’s multiple mini apps inside one system: Admissions, Students, Faculty, Payments, Reports, Settings. I create separate modules with their own routes, controllers, and views. This prevents feature growth from turning into chaos."},{type:"h2",text:"3) Stable Data Models"},{type:"p",text:"Scalable CMS systems need stable tables and predictable relationships. I prefer designing schemas that support auditing and future reporting: separate tables for status history, role assignments, approval logs, and metadata."},{type:"blockquote",text:"If the schema is clean, scaling features becomes easier. If the schema is messy, every feature becomes expensive."},{type:"h2",text:"Conclusion"},{type:"p",text:"A scalable CMS is not about writing more code — it’s about writing code that stays stable as change happens. My goal is always modular structure, strong boundaries, and predictable data flow."}]},{id:2,cover:"../blogs/b6.png",title:"React Component Design for Long-Term Maintainability",excerpt:"Patterns and decisions I use to keep React codebases predictable, reusable, and easy to extend.",skills:["React","Component Architecture","Performance"],readTime:"5 min read",date:"Jan 2026",content:[{type:"p",text:"Most React projects start clean. But over time, components become too large, prop drilling becomes painful, and UI logic becomes difficult to reason about. Maintainability becomes more important than speed."},{type:"h2",text:"1) Prefer Composition over Monster Components"},{type:"p",text:"I avoid building large components that handle everything. Instead I split them into small reusable pieces: Header, Filters, List, Card, Pagination, EmptyState. This makes code easier to test and easier to extend."},{type:"h2",text:"2) Keep State Close to Where It’s Used"},{type:"p",text:"One common mistake is storing all state at the top. This makes components tightly coupled. My rule: local UI state stays local, shared state goes to context/store only if needed."},{type:"ul",items:["Local: modal open/close, input values, toggles","Shared: auth session, cart data, app theme, global filters"]},{type:"h2",text:"3) Reuse UI Patterns"},{type:"p",text:"In dashboards and CMS systems, UI repeats. I create reusable components like <StatCard />, <Table />, <Badge />, <Modal />. This improves consistency and makes UI development faster."},{type:"h2",text:"Conclusion"},{type:"p",text:"Maintainability is a design decision. When components are predictable and modular, React projects scale smoothly even when requirements change."}]},{id:3,cover:"../blogs/b7.png",title:"Handling Complex Admission Workflows in CMS Systems",excerpt:"Lessons learned while building merit-based admission systems with validation, audit logs, and role-based access.",skills:["CMS","Business Logic","Auth","Databases"],readTime:"7 min read",date:"Jan 2026",content:[{type:"p",text:"Admission systems seem simple on paper: students apply, admin verifies, and seats are allocated. But real-world workflows involve multiple roles, deadlines, validations, and audit requirements."},{type:"h2",text:"1) Define Status Flow Clearly"},{type:"p",text:"Instead of random statuses, I define explicit workflow states: Draft → Submitted → Verified → Approved → Rejected. Each transition should be valid and logged."},{type:"h2",text:"2) Audit Logs Are Mandatory"},{type:"p",text:"For admissions, logs are important: who verified what, what changed, and when. I maintain separate logs table rather than overwriting history."},{type:"ul",items:["Status change logs","Document verification logs","Admin action tracking"]},{type:"h2",text:"3) Role Based Access Control"},{type:"p",text:"Not everyone should access everything. Staff can verify documents, admin can approve applications, super-admin can configure seat limits and reports."},{type:"blockquote",text:"If roles aren’t defined properly early, security becomes an afterthought."},{type:"h2",text:"Conclusion"},{type:"p",text:"Complex workflows become manageable when modeled as real systems: explicit state machines, clear permission layers, and consistent audit logging."}]},{id:4,cover:"../blogs/b8.png",title:"Why Clean Backend Logic Matters More Than Features",excerpt:"Thoughts on avoiding tightly coupled logic and designing APIs that survive requirement changes.",skills:["Backend","APIs","Node.js","PHP"],readTime:"4 min read",date:"Jan 2026",content:[{type:"p",text:"Fast development often leads to backend code that works today but breaks tomorrow. The more features you add, the more fragile the system becomes if backend logic isn’t structured cleanly."},{type:"h2",text:"1) Avoid Tight Coupling"},{type:"p",text:"A backend should not depend on UI assumptions. I keep APIs stable and build service functions that can be reused across multiple endpoints."},{type:"h2",text:"2) Validation Should Be Centralized"},{type:"p",text:"Validation scattered everywhere leads to inconsistencies. I keep validation in one place: request validators or service-level checks."},{type:"h2",text:"3) Predictable Error Handling"},{type:"p",text:"I use consistent API responses with clear error codes/messages. This makes frontend integration easier and debugging faster."},{type:"ul",items:["200: success","400: validation error","401: unauthorized","403: forbidden","500: server error"]},{type:"h2",text:"Conclusion"},{type:"p",text:"Clean backend logic is the foundation of scalable software. Features can be added anytime, but architecture debt becomes very expensive."}]}];function oI(){const n=$.useRef(null);return $.useEffect(()=>{const e=n.current;if(!e)return;const t=new Rl,r=new kn(40,e.clientWidth/e.clientHeight,.1,2e3);r.position.set(0,0,4.9);const a=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=Gt,a.toneMapping=qs,a.toneMappingExposure=1.05,e.appendChild(a.domElement);const o=new Cr(16777215,2.35);o.position.set(7,2,4),t.add(o);const c=new Cr(11192319,.16);c.position.set(-6,-2.5,6),t.add(c),t.add(new Ll(724246,.26));const u=new Nl,d=a.capabilities.getMaxAnisotropy(),h=u.load("/textures/saturn_map.jpg",de=>{de.colorSpace=Gt,de.anisotropy=Math.min(d,8),de.minFilter=zn,de.magFilter=Wt,console.log("✅ saturn loaded")},void 0,()=>console.log("❌ saturn failed")),p=u.load("/textures/saturn_ring.png",de=>{de.colorSpace=Gt,de.anisotropy=Math.min(d,8),de.minFilter=zn,de.magFilter=Wt,console.log("✅ ring loaded")},void 0,()=>console.log("❌ ring failed")),m=new _r;t.add(m),m.scale.set(.78,.78,.78),m.rotation.z=ai.degToRad(26.7);const g=1,y=1.25,w=2.25,E=new Bn(g,164,164),S=new Ja({map:h,roughness:.95,metalness:0});S.userData.__patched||(S.userData.__patched=!0,S.onBeforeCompile=de=>{de.uniforms.uSunDir={value:o.position.clone().normalize()},de.uniforms.uRingTex={value:p},de.uniforms.uRingInner={value:y},de.uniforms.uRingOuter={value:w},de.uniforms.uShadowStrength={value:.68},de.uniforms.uShadowSoft={value:.12},de.uniforms.uInvSaturnGroup={value:new Kt},de.vertexShader=`varying vec3 vWorldPos;
`+de.vertexShader,de.vertexShader=de.vertexShader.replace("#include <worldpos_vertex>",`
          vec4 wp = modelMatrix * vec4(transformed, 1.0);
          vWorldPos = wp.xyz;

          #if defined( USE_INSTANCING )
            wp = instanceMatrix * wp;
          #endif

          #if defined( USE_BATCHING )
            wp = batchingMatrix * wp;
          #endif

          vec4 worldPosition = wp;
          `),de.fragmentShader=`
          uniform vec3 uSunDir;
          uniform sampler2D uRingTex;
          uniform float uRingInner;
          uniform float uRingOuter;
          uniform float uShadowStrength;
          uniform float uShadowSoft;
          uniform mat4 uInvSaturnGroup;
          varying vec3 vWorldPos;
          `+de.fragmentShader,de.fragmentShader=de.fragmentShader.replace("#include <output_fragment>",`
          // ===== ring shadow projection =====
          vec3 localPos = (uInvSaturnGroup * vec4(vWorldPos, 1.0)).xyz;
          vec3 sunLocal = normalize((uInvSaturnGroup * vec4(uSunDir, 0.0)).xyz);

          float shadow = 0.0;
          float denom = sunLocal.y;

          if (abs(denom) > 0.0001) {
            float t = -localPos.y / denom;
            vec3 hit = localPos + sunLocal * t;

            float r = length(hit.xz);

            float inSoft = smoothstep(uRingInner - uShadowSoft, uRingInner + uShadowSoft, r);
            float outSoft = 1.0 - smoothstep(uRingOuter - uShadowSoft, uRingOuter + uShadowSoft, r);

            float mask = clamp(inSoft * outSoft, 0.0, 1.0);

            if (mask > 0.001) {
              float u = (r - uRingInner) / (uRingOuter - uRingInner);
              float v = atan(hit.z, hit.x) / (2.0 * 3.14159265) + 0.5;
              vec4 ringSample = texture2D(uRingTex, vec2(u, v));
              shadow = ringSample.a * mask;
            }
          }

          shadow = clamp(shadow, 0.0, 1.0);
          shadow = pow(shadow, 1.2) * uShadowStrength;

          outgoingLight *= (1.0 - shadow);

          gl_FragColor = vec4(outgoingLight, diffuseColor.a);
          `),S.userData.shader=de});const x=new qt(E,S);m.add(x);const R=new Ym(y,w,320),P=R.attributes.position,N=new ae,C=[];for(let de=0;de<P.count;de++){N.fromBufferAttribute(P,de);const Le=N.length(),Te=Math.atan2(N.y,N.x),re=(Le-y)/(w-y),he=(Te+Math.PI)/(Math.PI*2);C.push(re,he)}R.setAttribute("uv",new Hn(C,2));const I=new Ja({map:p,transparent:!0,opacity:.95,side:Ki,depthWrite:!1,roughness:1,metalness:0,emissive:new wt("#ffffff"),emissiveIntensity:.2}),F=new qt(R,I);F.rotation.x=ai.degToRad(90),m.add(F);const V=new qt(new Bn(1.07,128,128),new pn({transparent:!0,depthWrite:!1,side:mn,blending:Zi,uniforms:{uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
          varying vec3 vNormalW;
          varying vec3 vPosW;
          void main(){
            vec4 wp = modelMatrix * vec4(position,1.0);
            vPosW = wp.xyz;
            vNormalW = normalize(mat3(modelMatrix)*normal);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          uniform vec3 uSunDir;
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vNormalW;
          varying vec3 vPosW;
          void main(){
            vec3 N = normalize(vNormalW);
            vec3 V = normalize(cameraPosition - vPosW);
            vec3 L = normalize(uSunDir);

            float fresnel = pow(1.0 - max(dot(V,N),0.0), 2.6);
            float NdotL = max(dot(N,L),0.0);
            float litMask = smoothstep(0.08, 0.55, NdotL);

            float glow = fresnel * litMask * uIntensity;
            gl_FragColor = vec4(uColor, glow);
          }
        `}));m.add(V);const A=new Pn,L=1100,z=new Float32Array(L*3);for(let de=0;de<L;de++){const Le=40+Math.random()*25,Te=Math.random()*Math.PI*2,re=Math.acos(2*Math.random()-1);z[de*3]=Le*Math.sin(re)*Math.cos(Te),z[de*3+1]=Le*Math.sin(re)*Math.sin(Te),z[de*3+2]=Le*Math.cos(re)}A.setAttribute("position",new Jn(z,3));const ne=new Pl(A,new ao({color:16777215,size:.045,transparent:!0,opacity:.6,depthWrite:!1}));t.add(ne);let j=!1,J={x:0,y:0},le=0,Q=0;const H=de=>{j=!0,J={x:de.clientX,y:de.clientY},le=0,Q=0,e.setPointerCapture(de.pointerId)},k=de=>{if(!j)return;const Le=de.clientX-J.x,Te=de.clientY-J.y;le=Le*.001,Q=Te*.001,m.rotation.y+=Le*.004,m.rotation.x+=Te*.004,m.rotation.x=ai.clamp(m.rotation.x,-.75,.75),J={x:de.clientX,y:de.clientY}},ie=()=>j=!1;e.addEventListener("pointerdown",H),e.addEventListener("pointermove",k),e.addEventListener("pointerup",ie),e.addEventListener("pointerleave",ie),e.addEventListener("pointercancel",ie);const U=new Dl,G=()=>{requestAnimationFrame(G);const de=U.getElapsedTime();x.rotation.y+=.0012,F.rotation.z+=35e-5,m.rotation.y+=25e-5,m.rotation.z=ai.degToRad(26.7)+Math.sin(de*.16)*.004,j||(m.rotation.y+=le,m.rotation.x+=Q,le*=.92,Q*=.92),S.userData.shader&&(S.userData.shader.uniforms.uSunDir.value.copy(o.position).normalize(),m.updateMatrixWorld(!0),S.userData.shader.uniforms.uInvSaturnGroup.value.copy(m.matrixWorld).invert()),a.render(t,r)};G();const ge=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",ge),()=>{window.removeEventListener("resize",ge),e.removeEventListener("pointerdown",H),e.removeEventListener("pointermove",k),e.removeEventListener("pointerup",ie),e.removeEventListener("pointerleave",ie),e.removeEventListener("pointercancel",ie),t.traverse(de=>{de.geometry&&de.geometry.dispose(),de.material&&(Array.isArray(de.material)?de.material.forEach(Le=>Le.dispose()):de.material.dispose())}),a.dispose(),a.domElement&&e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),M.jsx("div",{className:"w-full flex items-center justify-center py-6",children:M.jsx("div",{className:`\r
          relative\r
          w-[320px] h-[320px]\r
          md:w-[560px] md:h-[560px]\r
        \r
        `,children:M.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}})})})}function gu(n=""){const e=n.match(/\d+/);return e?Number(e[0]):0}function lI(n,e,t){return Math.min(Math.max(n,e),t)}function cI(){const[n,e]=P1(),t=n.get("q")||"",r=n.get("tag")||"All",a=n.get("sort")||"latest",o=Number(n.get("page")||1),[c,u]=$.useState(t),[d,h]=$.useState(r),[p,m]=$.useState(a),[g,y]=$.useState(o),w=4,E=$.useMemo(()=>{const C=new Set;return zs.forEach(I=>I.skills.forEach(F=>C.add(F))),["All",...Array.from(C)]},[]);$.useEffect(()=>{const C={};c.trim()&&(C.q=c.trim()),d!=="All"&&(C.tag=d),p!=="latest"&&(C.sort=p),g>1&&(C.page=String(g)),e(C,{replace:!0})},[c,d,p,g,e]),$.useEffect(()=>{const C=n.get("q")||"",I=n.get("tag")||"All",F=n.get("sort")||"latest",V=Number(n.get("page")||1);C!==c&&u(C),I!==d&&h(I),F!==p&&m(F),V!==g&&y(V)},[n]);const S=$.useMemo(()=>{const C=c.trim().toLowerCase();let I=zs.filter(F=>{const V=d==="All"||F.skills.includes(d),A=C===""||F.title.toLowerCase().includes(C)||F.excerpt.toLowerCase().includes(C)||F.skills.some(L=>L.toLowerCase().includes(C));return V&&A});return I=[...I].sort((F,V)=>p==="latest"?V.id-F.id:p==="shortest"?gu(F.readTime)-gu(V.readTime):p==="longest"?gu(V.readTime)-gu(F.readTime):p==="az"?F.title.localeCompare(V.title):0),I},[c,d,p]),x=Math.max(1,Math.ceil(S.length/w));$.useEffect(()=>{y(C=>lI(C,1,x))},[x]);const R=$.useMemo(()=>{const C=(g-1)*w;return S.slice(C,C+w)},[S,g]);$.useEffect(()=>{y(1)},[c,d,p]);const P=$.useMemo(()=>{const C=[];if(d!=="All"&&C.push({label:d,type:"tag",onRemove:()=>h("All")}),c.trim()&&C.push({label:`Search: "${c.trim()}"`,type:"query",onRemove:()=>u("")}),p!=="latest"){const I=p==="shortest"?"Shortest":p==="longest"?"Longest":p==="az"?"A–Z":"Latest";C.push({label:`Sort: ${I}`,type:"sort",onRemove:()=>m("latest")})}return C},[d,c,p]),N=()=>{h("All"),u(""),m("latest"),y(1)};return M.jsxs("section",{className:"relative min-h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20",children:[M.jsxs("div",{className:"absolute inset-0 -z-10 pointer-events-none",children:[M.jsx("div",{className:"absolute top-1/4 left-[-20%] sm:left-[-12%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-indigo-500/10 blur-[140px]"}),M.jsx("div",{className:"absolute bottom-1/4 right-[-20%] sm:right-[-12%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-purple-500/10 blur-[140px]"})]}),M.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-10 md:px-24 lg:px-8",children:[M.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center",children:[M.jsx("div",{className:"order-1",children:M.jsxs(xt.div,{className:"mb-10 sm:mb-14 md:mb-20 max-w-3xl",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"Writing & Engineering Notes"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg",children:"Short essays and technical notes based on real projects I’ve built — focused on architecture, maintainability, and practical decision-making."})]})}),M.jsx("div",{className:"order-2 flex justify-center lg:justify-end",children:M.jsx("div",{className:"w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none",children:M.jsx(oI,{})})})]}),M.jsxs("div",{className:"mb-10 space-y-6",children:[M.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between",children:[M.jsxs("div",{className:"relative w-full lg:max-w-md",children:[M.jsx("input",{value:c,onChange:C=>u(C.target.value),placeholder:"Search blogs...",className:`\r
                  w-full rounded-xl bg-white/[0.04]\r
                  border border-white/10 px-4 py-3\r
                  text-sm sm:text-base text-white\r
                  placeholder:text-white/40\r
                  focus:outline-none focus:border-white/25\r
                `}),c&&M.jsx("button",{onClick:()=>u(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition",children:"✕"})]}),M.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between lg:justify-end w-full",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"text-xs sm:text-sm text-white/40",children:"Sort:"}),M.jsxs("select",{value:p,onChange:C=>m(C.target.value),className:` w-full sm:w-auto  rounded-lg\r
                            bg-white/[0.04]  border border-white/10\r
                            px-3 py-2 pr-10 text-sm text-white\r
                            backdrop-blur appearance-none\r
                            focus:outline-none focus:border-white/25\r
                            hover:border-white/20 transition`,children:[M.jsx("option",{className:"bg-[#0b1220] text-white",value:"latest",children:"Latest"}),M.jsx("option",{className:"bg-[#0b1220] text-white",value:"shortest",children:"Shortest"}),M.jsx("option",{className:"bg-[#0b1220] text-white",value:"longest",children:"Longest"}),M.jsx("option",{className:"bg-[#0b1220] text-white",value:"az",children:"A–Z"})]})]}),M.jsxs("p",{className:"text-xs sm:text-sm text-white/40",children:["Showing"," ",M.jsx("span",{className:"text-white",children:S.length})," ","result",S.length!==1?"s":""]})]})]}),M.jsx("div",{className:"flex flex-wrap gap-3",children:E.map(C=>M.jsx("button",{onClick:()=>h(C),className:`
                  px-4 py-2 rounded-lg text-sm font-medium transition border
                  ${d===C?"bg-white text-black border-white":"bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"}
                `,children:C},C))}),(P.length>0||g>1)&&M.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[P.map(C=>M.jsxs("div",{className:`\r
                    flex items-center gap-2\r
                    px-3 py-1.5 rounded-full\r
                    border border-white/10\r
                    bg-white/[0.04]\r
                    text-xs sm:text-sm text-white\r
                  `,children:[M.jsx("span",{className:"text-white/90",children:C.label}),M.jsx("button",{onClick:C.onRemove,className:"text-white/60 hover:text-white transition",children:"✕"})]},C.type)),M.jsx("button",{onClick:N,className:`\r
                  px-4 py-2 rounded-full text-xs sm:text-sm\r
                  border border-white/10\r
                  bg-white/[0.02]\r
                  text-white/70\r
                  hover:text-white hover:bg-white/[0.06]\r
                  transition\r
                `,children:"Clear all"})]})]}),M.jsxs("div",{className:"mt-8",children:[M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10",children:M.jsx(Hu,{mode:"popLayout",children:R.map(C=>M.jsxs(xt.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.3,ease:"easeOut"},className:`\r
                    rounded-2xl border border-white/10\r
                    bg-gradient-to-br from-white/[0.05] to-white/[0.02]\r
                    backdrop-blur overflow-hidden flex flex-col\r
                  `,children:[M.jsxs(Kn,{to:`/blogs/${C.id}`,className:"block relative group",children:[M.jsx("img",{src:C.cover,alt:C.title,loading:"lazy",className:`\r
                        w-full h-44 sm:h-48 md:h-52 object-cover\r
                        opacity-95 transition duration-300\r
                        group-hover:opacity-100 group-hover:scale-[1.02]\r
                      `}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"})]}),M.jsxs("div",{className:"p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1",children:[M.jsxs("div",{children:[M.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-white leading-snug",children:C.title}),M.jsx("p",{className:"text-gray-300 mt-3 leading-relaxed text-sm sm:text-base",children:C.excerpt}),M.jsx("div",{className:"flex flex-wrap gap-2 mt-5",children:C.skills.map(I=>M.jsx("button",{onClick:()=>h(I),className:`\r
                              px-2.5 py-1\r
                              text-[11px] sm:text-xs\r
                              rounded-md border border-white/10\r
                              bg-white/[0.03]\r
                              text-gray-200\r
                              hover:bg-white/[0.08]\r
                              transition\r
                            `,children:I},I))})]}),M.jsxs("div",{className:"mt-6 flex items-center justify-between text-xs sm:text-sm text-white/40",children:[M.jsx("span",{children:C.readTime}),M.jsx(Kn,{to:`/blogs/${C.id}`,className:"text-white/50 hover:text-white transition",children:"Read →"})]})]})]},C.id))})}),S.length===0&&M.jsx("div",{className:"mt-16 text-center text-white/50",children:"No blogs found. Try a different keyword/tag."})]}),S.length>0&&x>1&&M.jsxs("div",{className:"mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center",children:[M.jsx("button",{onClick:()=>y(C=>Math.max(1,C-1)),disabled:g===1,className:`
                px-5 py-2 rounded-lg text-sm font-medium transition
                border border-white/10
                ${g===1?"opacity-40 cursor-not-allowed bg-white/[0.02]":"bg-white/[0.04] hover:bg-white/[0.08]"}
              `,children:"← Prev"}),M.jsx("div",{className:"flex items-center gap-2",children:Array.from({length:x}).map((C,I)=>{const F=I+1,V=F===g;return M.jsx("button",{onClick:()=>y(F),className:`
                      w-10 h-10 rounded-lg text-sm font-semibold transition
                      border
                      ${V?"bg-white text-black border-white":"bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"}
                    `,children:F},F)})}),M.jsx("button",{onClick:()=>y(C=>Math.min(x,C+1)),disabled:g===x,className:`
                px-5 py-2 rounded-lg text-sm font-medium transition
                border border-white/10
                ${g===x?"opacity-40 cursor-not-allowed bg-white/[0.02]":"bg-white/[0.04] hover:bg-white/[0.08]"}
              `,children:"Next →"})]}),M.jsx(xt.div,{className:"mt-14 sm:mt-20 md:mt-24 max-w-3xl text-gray-400 text-xs sm:text-sm leading-relaxed",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.2},children:"Writing helps me clarify design decisions and document trade-offs — the same mindset I bring to building production systems."})]})]})}class Ul{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const uI=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},An={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:uI()},Km=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},dI=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Km(n);An.publicKey=t.publicKey,An.blockHeadless=t.blockHeadless,An.storageProvider=t.storageProvider,An.blockList=t.blockList,An.limitRate=t.limitRate,An.origin=t.origin||e},RM=async(n,e,t={})=>{const r=await fetch(An.origin+n,{method:"POST",headers:t,body:e}),a=await r.text(),o=new Ul(r.status,a);if(r.ok)return o;throw o},PM=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},fI=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},NM=n=>n.webdriver||!n.languages||n.languages.length===0,LM=()=>new Ul(451,"Unavailable For Headless Browser"),hI=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},pI=n=>!n.list?.length||!n.watchVariable,mI=(n,e)=>n instanceof FormData?n.get(e):n[e],DM=(n,e)=>{if(pI(n))return!1;hI(n.list,n.watchVariable);const t=mI(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},IM=()=>new Ul(403,"Forbidden"),gI=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},vI=async(n,e,t)=>{const r=Number(await t.get(n)||0);return e-Date.now()+r},UM=async(n,e,t)=>{if(!e.throttle||!t)return!1;gI(e.throttle,e.id);const r=e.id||n;return await vI(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},FM=()=>new Ul(429,"Too Many Requests"),xI=async(n,e,t,r)=>{const a=Km(r),o=a.publicKey||An.publicKey,c=a.blockHeadless||An.blockHeadless,u=a.storageProvider||An.storageProvider,d={...An.blockList,...a.blockList},h={...An.limitRate,...a.limitRate};return c&&NM(navigator)?Promise.reject(LM()):(PM(o,n,e),fI(t),t&&DM(d,t)?Promise.reject(IM()):await UM(location.pathname,h,u)?Promise.reject(FM()):RM("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},yI=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_I=n=>typeof n=="string"?document.querySelector(n):n,SI=async(n,e,t,r)=>{const a=Km(r),o=a.publicKey||An.publicKey,c=a.blockHeadless||An.blockHeadless,u=An.storageProvider||a.storageProvider,d={...An.blockList,...a.blockList},h={...An.limitRate,...a.limitRate};if(c&&NM(navigator))return Promise.reject(LM());const p=_I(t);PM(o,n,e),yI(p);const m=new FormData(p);return DM(d,m)?Promise.reject(IM()):await UM(location.pathname,h,u)?Promise.reject(FM()):(m.append("lib_version","4.4.1"),m.append("service_id",n),m.append("template_id",e),m.append("user_id",o),RM("/api/v1.0/email/send-form",m))},MI={init:dI,send:xI,sendForm:SI,EmailJSResponseStatus:Ul};function wI(){const n=$.useRef(null);return $.useEffect(()=>{const e=n.current;if(!e)return;const t=new Rl,r=new kn(40,e.clientWidth/e.clientHeight,.1,2e3);r.position.set(0,0,3.6);const a=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),"outputColorSpace"in a?a.outputColorSpace=Gt:a.outputEncoding=void 0,a.toneMapping=qs,a.toneMappingExposure=1.05,e.appendChild(a.domElement);const o=new Cr(16777215,2.25);o.position.set(7,2.2,4.5),t.add(o);const c=new Cr(11192319,.09);c.position.set(-6,-2.5,6),t.add(c),t.add(new Ll(724246,.22));const u=new Nl,d=a.capabilities.getMaxAnisotropy(),h=u.load("/textures/mars_map.jpg",k=>{"colorSpace"in k?k.colorSpace=Gt:k.encoding=void 0,k.anisotropy=Math.min(d,8),k.minFilter=zn,k.magFilter=Wt}),p=u.load("/textures/mars_normal.jpg",k=>{"colorSpace"in k&&(k.colorSpace=Bi),k.anisotropy=Math.min(d,8),k.minFilter=zn,k.magFilter=Wt}),m=u.load("/textures/mars_bump.jpg",k=>{"colorSpace"in k&&(k.colorSpace=Bi),k.anisotropy=Math.min(d,8),k.minFilter=zn,k.magFilter=Wt}),g=new _r;t.add(g),g.rotation.z=ai.degToRad(25.2),g.scale.set(.92,.92,.92);const y=new Bn(1,196,196),w=new Ja({map:h,normalMap:p,normalScale:new Rt(.55,.55),bumpMap:m,bumpScale:.045,roughness:.98,metalness:0});w.onBeforeCompile=k=>{k.uniforms.uSunDir={value:o.position.clone().normalize()},k.uniforms.uTermSoft={value:.22},k.fragmentShader=`
        uniform vec3 uSunDir;
        uniform float uTermSoft;
      `+k.fragmentShader,k.fragmentShader=k.fragmentShader.replace("#include <lights_fragment_begin>",`
        #include <lights_fragment_begin>

        // ---- cinematic terminator softness ----
        float NdotL = dot(normalize(normal), normalize(uSunDir));
        float softTerm = smoothstep(-uTermSoft, uTermSoft, NdotL);
        reflectedLight.directDiffuse *= softTerm;
        reflectedLight.directSpecular *= softTerm;
        `),w.userData.shader=k};const E=new qt(y,w);g.add(E);const S=new qt(new Bn(1.06,128,128),new pn({transparent:!0,depthWrite:!1,side:mn,blending:Zi,uniforms:{uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
          varying vec3 vNormalW;
          varying vec3 vPosW;
          void main(){
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vPosW = wp.xyz;
            vNormalW = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          uniform vec3 uSunDir;
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vNormalW;
          varying vec3 vPosW;

          void main(){
            vec3 N = normalize(vNormalW);
            vec3 V = normalize(cameraPosition - vPosW);
            vec3 L = normalize(uSunDir);

            float fres = pow(1.0 - max(dot(V, N), 0.0), 2.9);
            float ndl  = max(dot(N, L), 0.0);

            float sunMask = smoothstep(0.06, 0.6, ndl);
            float glow = fres * sunMask * uIntensity;

            gl_FragColor = vec4(uColor, glow);
          }
        `}));g.add(S);const x=new qt(new Bn(1.03,128,128),new pn({transparent:!0,depthWrite:!1,side:Tr,blending:Zi,uniforms:{uTime:{value:0},uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormalW;
          varying vec3 vPosW;

          void main(){
            vUv = uv;
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vPosW = wp.xyz;
            vNormalW = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform vec3 uDustColor;
          uniform float uStrength;

          varying vec2 vUv;
          varying vec3 vNormalW;
          varying vec3 vPosW;

          float hash(vec2 p){
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
          }
          float noise(vec2 p){
            vec2 i = floor(p);
            vec2 f = fract(p);
            float a = hash(i);
            float b = hash(i + vec2(1.0,0.0));
            float c = hash(i + vec2(0.0,1.0));
            float d = hash(i + vec2(1.0,1.0));
            vec2 u = f*f*(3.0-2.0*f);
            return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
          }

          void main(){
            vec3 N = normalize(vNormalW);
            vec3 V = normalize(cameraPosition - vPosW);
            vec3 L = normalize(uSunDir);

            float fres = pow(1.0 - max(dot(V, N), 0.0), 4.2);
            float ndl = max(dot(N, L), 0.0);

            float horizonMask = smoothstep(0.32, 1.0, fres);
            horizonMask = pow(horizonMask, 1.6);

            float lightMask = smoothstep(0.05, 0.45, ndl);

            vec2 uv = vUv;
            uv.x += uTime * 0.02;

            // drifting atmospheric bands
            uv.y += sin(uv.x * 6.0 + uTime * 0.6) * 0.01;

            float n = noise(uv * 10.0);
            float dust = 0.6 + n * 0.4;

            float alpha = horizonMask * lightMask * dust * uStrength;

            // warm scattering on bright rim
            float warmScatter = smoothstep(0.1, 0.8, ndl) * 0.15;
            alpha += warmScatter * fres;

            gl_FragColor = vec4(uDustColor, alpha);
          }
        `}));g.add(x);const R=new qt(new Bn(1.018,196,196),new pn({transparent:!0,depthWrite:!1,blending:Zi,uniforms:{uTime:{value:0},uColor:{value:new wt("#ffb07a")},uOpacity:{value:.18}},vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormalW;
          varying vec3 vPosW;

          void main(){
            vUv = uv;
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vPosW = wp.xyz;
            vNormalW = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          uniform float uTime;
          uniform vec3 uColor;
          uniform float uOpacity;

          varying vec2 vUv;

          float bandNoise(float x){
            return sin(x) * 0.5 + sin(x*2.1) * 0.25 + sin(x*4.2) * 0.15;
          }

          void main(){
            vec2 uv = vUv;

            // only around equator-ish zone
            float band = smoothstep(0.40, 0.52, uv.y) * (1.0 - smoothstep(0.52, 0.62, uv.y));

            uv.x += uTime * 0.03;
            float flow = bandNoise(uv.x * 12.0 + uTime * 0.4);
            float detail = bandNoise(uv.x * 34.0 - uTime * 0.8);

            float storm = (flow * 0.7 + detail * 0.3);
            storm = smoothstep(0.15, 0.85, storm);

            float alpha = band * storm * uOpacity;

            gl_FragColor = vec4(uColor, alpha);
          }
        `}));g.add(R);const P=new qt(new Bn(1.002,196,196),new pn({transparent:!0,depthWrite:!1,blending:Zi,uniforms:{uColor:{value:new wt("#ffffff")},uStrength:{value:.018}},vertexShader:`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uStrength;
          varying vec2 vUv;

          void main(){
            float north = smoothstep(0.86, 0.97, vUv.y);
            float south = smoothstep(0.03, 0.14, vUv.y);

            float cap = clamp(north + south, 0.0, 1.0);
            cap = pow(cap, 2.0);

            gl_FragColor = vec4(uColor, cap * uStrength);
          }
        `}));g.add(P);const N=new Pn,C=1200,I=new Float32Array(C*3);for(let k=0;k<C;k++){const ie=38+Math.random()*30,U=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);I[k*3]=ie*Math.sin(G)*Math.cos(U),I[k*3+1]=ie*Math.sin(G)*Math.sin(U),I[k*3+2]=ie*Math.cos(G)}N.setAttribute("position",new Jn(I,3));const F=new Pl(N,new ao({color:16777215,size:.045,transparent:!0,opacity:.62,depthWrite:!1}));t.add(F);let V=!1,A={x:0,y:0},L=0,z=0;const ne=k=>{V=!0,A={x:k.clientX,y:k.clientY},L=0,z=0,e.setPointerCapture(k.pointerId)},j=k=>{if(!V)return;const ie=k.clientX-A.x,U=k.clientY-A.y;L=ie*.001,z=U*.001,g.rotation.y+=ie*.004,g.rotation.x+=U*.004,g.rotation.x=ai.clamp(g.rotation.x,-.75,.75),A={x:k.clientX,y:k.clientY}},J=()=>V=!1;e.addEventListener("pointerdown",ne),e.addEventListener("pointermove",j),e.addEventListener("pointerup",J),e.addEventListener("pointerleave",J),e.addEventListener("pointercancel",J);const le=new Dl,Q=()=>{requestAnimationFrame(Q);const k=le.getElapsedTime();E.rotation.y+=.0012,x.material.uniforms.uTime.value=k,R.material.uniforms.uTime.value=k,g.rotation.z=ai.degToRad(25.2)+Math.sin(k*.18)*.002,V||(g.rotation.y+=L,g.rotation.x+=z,L*=.92,z*=.92),w.userData.shader&&w.userData.shader.uniforms.uSunDir.value.copy(o.position).normalize(),S.material.uniforms.uSunDir.value.copy(o.position).normalize(),x.material.uniforms.uSunDir.value.copy(o.position).normalize(),a.render(t,r)};Q();const H=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H),e.removeEventListener("pointerdown",ne),e.removeEventListener("pointermove",j),e.removeEventListener("pointerup",J),e.removeEventListener("pointerleave",J),e.removeEventListener("pointercancel",J),t.traverse(k=>{k.geometry&&k.geometry.dispose(),k.material&&(Array.isArray(k.material)?k.material.forEach(ie=>ie.dispose()):k.material.dispose())}),a.dispose(),a.domElement&&e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),M.jsx("div",{className:"w-full flex items-center justify-center py-6",children:M.jsx("div",{className:`\r
          relative\r
          w-[320px] h-[320px]\r
          md:w-[560px] md:h-[560px]\r
          rounded-full overflow-hidden\r
        \r
        `,children:M.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}})})})}var wi={},Ky;function EI(){if(Ky)return wi;Ky=1;var n=wi&&wi.__createBinding||(Object.create?(function(g,y,w,E){E===void 0&&(E=w);var S=Object.getOwnPropertyDescriptor(y,w);(!S||("get"in S?!y.__esModule:S.writable||S.configurable))&&(S={enumerable:!0,get:function(){return y[w]}}),Object.defineProperty(g,E,S)}):(function(g,y,w,E){E===void 0&&(E=w),g[E]=y[w]})),e=wi&&wi.__setModuleDefault||(Object.create?(function(g,y){Object.defineProperty(g,"default",{enumerable:!0,value:y})}):function(g,y){g.default=y}),t=wi&&wi.__importStar||function(g){if(g&&g.__esModule)return g;var y={};if(g!=null)for(var w in g)w!=="default"&&Object.prototype.hasOwnProperty.call(g,w)&&n(y,g,w);return e(y,g),y};Object.defineProperty(wi,"__esModule",{value:!0}),wi.useTurnstile=void 0;const r=t(ku()),a=typeof globalThis<"u"?globalThis:window;let o=typeof a.turnstile<"u"?"ready":"unloaded",c,u;const d=new Promise((g,y)=>{u={resolve:g,reject:y},o==="ready"&&g(void 0)});{const g="cf__reactTurnstileOnLoad",y="https://challenges.cloudflare.com/turnstile/v0/api.js";c=()=>{if(o==="unloaded"){o="loading",a[g]=()=>{u.resolve(),o="ready",delete a[g]};const w=`${y}?onload=${g}&render=explicit`,E=document.createElement("script");E.src=w,E.async=!0,E.addEventListener("error",()=>{u.reject("Failed to load Turnstile."),delete a[g]}),document.head.appendChild(E)}return d}}function h({id:g,className:y,style:w,sitekey:E,action:S,cData:x,theme:R,language:P,tabIndex:N,responseField:C,responseFieldName:I,size:F,fixedSize:V,retry:A,retryInterval:L,refreshExpired:z,appearance:ne,execution:j,userRef:J,onVerify:le,onSuccess:Q,onLoad:H,onError:k,onExpire:ie,onTimeout:U,onAfterInteractive:G,onBeforeInteractive:ge,onUnsupported:de}){const Le=(0,r.useRef)(null),Te=(0,r.useState)({onVerify:le,onSuccess:Q,onLoad:H,onError:k,onExpire:ie,onTimeout:U,onAfterInteractive:G,onBeforeInteractive:ge,onUnsupported:de})[0],re=J??Le,he=V?{width:F==="compact"?"130px":F==="flexible"?"100%":"300px",height:F==="compact"?"120px":"65px",...w}:w;return(0,r.useEffect)(()=>{if(!re.current)return;let _e=!1,$e="";return(async()=>{var ze,ft;if(o!=="ready")try{await c()}catch(Qe){(ze=Te.onError)===null||ze===void 0||ze.call(Te,Qe);return}if(_e||!re.current)return;let Pt;const pt={sitekey:E,action:S,cData:x,theme:R,language:P,tabindex:N,"response-field":C,"response-field-name":I,size:F,retry:A,"retry-interval":L,"refresh-expired":z,appearance:ne,execution:j,callback:(Qe,mt)=>{var lt,kt;(lt=Te.onVerify)===null||lt===void 0||lt.call(Te,Qe,Pt),(kt=Te.onSuccess)===null||kt===void 0||kt.call(Te,Qe,mt,Pt)},"error-callback":Qe=>{var mt;return(mt=Te.onError)===null||mt===void 0?void 0:mt.call(Te,Qe,Pt)},"expired-callback":Qe=>{var mt;return(mt=Te.onExpire)===null||mt===void 0?void 0:mt.call(Te,Qe,Pt)},"timeout-callback":()=>{var Qe;return(Qe=Te.onTimeout)===null||Qe===void 0?void 0:Qe.call(Te,Pt)},"after-interactive-callback":()=>{var Qe;return(Qe=Te.onAfterInteractive)===null||Qe===void 0?void 0:Qe.call(Te,Pt)},"before-interactive-callback":()=>{var Qe;return(Qe=Te.onBeforeInteractive)===null||Qe===void 0?void 0:Qe.call(Te,Pt)},"unsupported-callback":()=>{var Qe;return(Qe=Te.onUnsupported)===null||Qe===void 0?void 0:Qe.call(Te,Pt)}};$e=window.turnstile.render(re.current,pt),Pt=p($e),(ft=Te.onLoad)===null||ft===void 0||ft.call(Te,$e,Pt)})(),()=>{_e=!0,$e&&window.turnstile.remove($e)}},[E,S,x,R,P,N,C,I,F,A,L,z,ne,j]),(0,r.useEffect)(()=>{Te.onVerify=le,Te.onSuccess=Q,Te.onLoad=H,Te.onError=k,Te.onExpire=ie,Te.onTimeout=U,Te.onAfterInteractive=G,Te.onBeforeInteractive=ge,Te.onUnsupported=de},[le,Q,H,k,ie,U,G,ge,de]),r.default.createElement("div",{ref:re,id:g,className:y,style:he})}wi.default=h;function p(g){return{execute:y=>window.turnstile.execute(g,y),reset:()=>window.turnstile.reset(g),getResponse:()=>window.turnstile.getResponse(g),isExpired:()=>window.turnstile.isExpired(g)}}function m(){const[g,y]=(0,r.useState)(o);return(0,r.useEffect)(()=>{o!=="ready"&&d.then(()=>y(o))},[]),a.turnstile}return wi.useTurnstile=m,wi}var TI=EI();const bI=Qp(TI);function AI(){const n=$.useRef(null),[e,t]=$.useState(!1),[r,a]=$.useState(""),[o,c]=$.useState(""),u=async d=>{if(d.preventDefault(),!n.current?.querySelector('input[name="company"]')?.value){if(!o){a("⚠️ Please verify the captcha first.");return}t(!0),a("");try{await MI.sendForm("default_service","template_43eyjb5",n.current,"kyH0O48pkYX1hlcak"),a("✅ Message sent successfully! I’ll reply within 24–48 hours."),n.current.reset(),c("")}catch(p){console.error(p),a("❌ Failed to send message. Please try again.")}finally{t(!1)}}};return M.jsxs("section",{className:"relative min-h-screen overflow-hidden px-5 sm:px-10 md:px-24 lg:px-36 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20",children:[M.jsxs("div",{className:"absolute inset-0 -z-10 pointer-events-none",children:[M.jsx("div",{className:"absolute top-1/4 left-[-20%] sm:left-[-12%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-indigo-500/10 blur-[140px]"}),M.jsx("div",{className:"absolute bottom-1/4 right-[-20%] sm:right-[-12%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-purple-500/10 blur-[140px]"})]}),M.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center",children:[M.jsx("div",{className:"order-1 lg:order-1",children:M.jsxs(xt.div,{className:"mb-10 sm:mb-14 md:mb-20 max-w-3xl",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"Contact"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg",children:"If you’re hiring, building a product, or looking for a reliable engineer to collaborate with — feel free to reach out."})]})}),M.jsx("div",{className:"order-2 lg:order-2 flex justify-center lg:justify-end",children:M.jsx("div",{className:"w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none",children:M.jsx(wI,{})})})]}),M.jsxs("div",{className:"mt-14 sm:mt-16 md:mt-20",children:[M.jsxs("div",{className:"grid lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-start",children:[M.jsx("div",{className:"lg:col-span-1",children:M.jsxs("div",{className:"sticky top-28 space-y-14 ",children:[M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Let’s Connect"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"I’m open to full-time roles, long-term contracts, and serious product collaborations focused on CMS platforms & dashboards."}),M.jsxs("div",{className:"mt-6",children:[M.jsx("p",{className:"text-white/40 text-xs tracking-widest uppercase",children:"What to include"}),M.jsxs("ul",{className:"mt-3 list-disc list-inside space-y-2 text-gray-300 text-sm",children:[M.jsx("li",{children:"Your product or project"}),M.jsx("li",{children:"What you’re trying to build or improve"}),M.jsx("li",{children:"The type of collaboration you’re looking for"})]})]}),M.jsx("p",{className:"text-gray-400 text-xs mt-6",children:"I typically respond within 24–48 hours."})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Quick Contact"}),M.jsxs("div",{className:"mt-4 space-y-4 text-sm text-gray-300",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-white/50 text-xs tracking-widest",children:"EMAIL"}),M.jsx("a",{href:"mailto:kg7358086@gmail.com",className:"hover:text-white transition",children:"kg7358086@gmail.com"})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-white/50 text-xs tracking-widest",children:"LINKEDIN"}),M.jsx("a",{href:"https://www.linkedin.com/in/kunal-gupta-webdev",target:"_blank",rel:"noreferrer",className:"hover:text-white transition",children:"linkedin.com/in/kunal-gupta-webdev"})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-white/50 text-xs tracking-widest",children:"GITHUB"}),M.jsx("a",{href:"https://github.com/Kunal-666",target:"_blank",rel:"noreferrer",className:"hover:text-white transition",children:"github.com/Kunal-666"})]})]})]})]})}),M.jsx("div",{className:"lg:col-span-2",children:M.jsxs(xt.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.05},className:`\r
                rounded-2xl border border-white/10\r
                bg-white/[0.05] backdrop-blur\r
                p-6 sm:p-7 md:p-8\r
              `,children:[M.jsxs("div",{className:"mb-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg sm:text-xl",children:"Send a Message"}),M.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"I’m happy to discuss work, projects, or collaborations."})]}),M.jsxs(xt.form,{ref:n,onSubmit:u,className:"space-y-5 sm:space-y-6",children:[M.jsx("input",{type:"text",name:"company",tabIndex:"-1",autoComplete:"off",className:"hidden"}),M.jsx("input",{type:"hidden",name:"turnstile_token",value:o}),M.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs sm:text-sm text-gray-400 mb-1",children:"Name"}),M.jsx("input",{type:"text",name:"from_name",required:!0,className:`\r
                        w-full rounded-lg bg-black/40\r
                        border border-white/10 px-4 py-2\r
                        text-sm text-white\r
                        focus:outline-none focus:border-white/25\r
                      `})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs sm:text-sm text-gray-400 mb-1",children:"Email"}),M.jsx("input",{type:"email",name:"from_email",required:!0,className:`\r
                        w-full rounded-lg bg-black/40\r
                        border border-white/10 px-4 py-2\r
                        text-sm text-white\r
                        focus:outline-none focus:border-white/25\r
                      `})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs sm:text-sm text-gray-400 mb-1",children:"Subject"}),M.jsx("input",{type:"text",name:"subject",required:!0,className:`\r
                      w-full rounded-lg bg-black/40\r
                      border border-white/10 px-4 py-2\r
                      text-sm text-white\r
                      focus:outline-none focus:border-white/25\r
                    `})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs sm:text-sm text-gray-400 mb-1",children:"Message"}),M.jsx("textarea",{rows:3,name:"message",required:!0,className:`\r
                      w-full rounded-lg bg-black/40\r
                      border border-white/10 px-4 py-2\r
                      text-sm text-white\r
                      resize-none\r
                      focus:outline-none focus:border-white/25\r
                    `})]}),M.jsx("div",{className:"rounded-xl border border-white/10 bg-black/30 p-3 flex justify-center",children:M.jsx("div",{className:"scale-[0.92] origin-center",children:M.jsx(bI,{sitekey:"0x4AAAAAACMO_LyR7X5u9yZi",theme:"dark",onVerify:d=>c(d),onExpire:()=>c(""),onError:()=>a("⚠️ Turnstile error. Refresh and try again.")})})}),M.jsxs("div",{className:"pt-2 space-y-3",children:[M.jsx("button",{type:"submit",disabled:e||!o,className:`
                      w-full h-12 rounded-xl font-medium transition
                      ${e||!o?"bg-white/40 text-black cursor-not-allowed":"bg-white text-black hover:bg-gray-200"}
                    `,children:e?"Sending...":"Send Message"}),r&&M.jsx("p",{className:"text-sm text-white/70 leading-relaxed",children:r})]})]})]})})]}),M.jsxs("div",{className:"rounded-2xl mt-10 border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Availability"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"Currently open to full-time roles, long-term contracts, and serious product collaborations."}),M.jsxs("div",{className:"mt-5 flex items-center gap-2 text-sm",children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]"}),M.jsx("span",{className:"text-white/80",children:"Available"})]})]}),M.jsx(xt.div,{className:"mt-10 sm:mt-14 md:mt-16 text-gray-400 text-xs sm:text-sm max-w-3xl leading-relaxed",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.25},children:"You can also reach out via LinkedIn or GitHub if that’s more convenient."})]})]})}function CI(){const n=$.useRef(null);return $.useEffect(()=>{const e=n.current;if(!e)return;const t=new Rl,r=new kn(40,e.clientWidth/e.clientHeight,.1,1e3);r.position.set(0,0,3.35);const a=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=Gt,a.toneMapping=qs,a.toneMappingExposure=1.05,e.appendChild(a.domElement);const o=new Cr(14150911,2.6);o.position.set(4.5,1.3,3.5),t.add(o),t.add(new Ll(724246,.35));const c=new Nl,u=c.load("/textures/earth_day.jpg");u.colorSpace=Gt;const d=c.load("/textures/earth_night.jpg");d.colorSpace=Gt;const h=c.load("/textures/earth_clouds.jpg");h.colorSpace=Gt;const p=a.capabilities.getMaxAnisotropy();[u,d,h].forEach(G=>{G.anisotropy=Math.min(p,8),G.minFilter=zn,G.magFilter=Wt,G.needsUpdate=!0});const m=new _r;t.add(m),m.rotation.z=ai.degToRad(23.4);const g=new Bn(1,96,96),y=new pn({uniforms:{uDayTex:{value:u},uNightTex:{value:d},uSunDir:{value:o.position.clone().normalize()},uDragNight:{value:0}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uDayTex;
        uniform sampler2D uNightTex;
        uniform vec3 uSunDir;
        uniform float uDragNight;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vec3 dayColor = texture2D(uDayTex, vUv).rgb;
          vec3 nightColor = texture2D(uNightTex, vUv).rgb;

          float NdotL = dot(normalize(vNormal), normalize(uSunDir));

          // day side mask
          float dayMask = smoothstep(-0.05, 0.35, NdotL);

          // ✅ night side (inverse of day)
          float nightMask = 1.0 - dayMask;

          // ✅ dragging expands night slightly
          float finalNight = clamp(nightMask + (0.35 * uDragNight), 0.0, 1.0);

          // ✅ boost lights
          vec3 boostedNight = clamp(nightColor * 7.8, 0.0, 2.0);

          vec3 color = mix(dayColor, boostedNight, finalNight);
          gl_FragColor = vec4(color, 1.0);
        }
      `}),w=new qt(g,y);m.add(w);const E=new Bn(1.07,96,96),S=new pn({transparent:!0,depthWrite:!1,blending:Zi,side:mn,uniforms:{uSunDir:{value:o.position.clone().normalize()}},vertexShader:`
        varying vec3 vNormalW;
        varying vec3 vPosW;

        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vPosW = worldPos.xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);

          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        uniform vec3 uColor;
        uniform float uIntensity;

        varying vec3 vNormalW;
        varying vec3 vPosW;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vPosW);

          // Fresnel rim
          float fresnel = pow(1.0 - max(dot(viewDir, vNormalW), 0.0), 2.2);

          // Sun highlight
          float sun = max(dot(normalize(vNormalW), normalize(uSunDir)), 0.0);
          float sunBoost = pow(sun, 1.5);

          float glow = fresnel * (0.35 + sunBoost * 0.55) * uIntensity;

          gl_FragColor = vec4(uColor, glow);
        }
      `}),x=new qt(E,S);m.add(x);const R=new Bn(1.016,96,96),P=new Ja({map:h,transparent:!0,opacity:.32,depthWrite:!1,roughness:1}),N=new qt(R,P);m.add(N);const C=new Pn,I=1200,F=new Float32Array(I*3);for(let G=0;G<I;G++){const ge=35+Math.random()*25,de=Math.random()*Math.PI*2,Le=Math.acos(2*Math.random()-1);F[G*3+0]=ge*Math.sin(Le)*Math.cos(de),F[G*3+1]=ge*Math.sin(Le)*Math.sin(de),F[G*3+2]=ge*Math.cos(Le)}C.setAttribute("position",new Jn(F,3));const V=new ao({color:16777215,size:.05,transparent:!0,opacity:.65,depthWrite:!1}),A=new Pl(C,V);t.add(A);let L=!1,z={x:0,y:0},ne=0,j=0,J=0;const le=G=>{ne=.8,L=!0,z={x:G.clientX,y:G.clientY},j=0,J=0,e.setPointerCapture(G.pointerId)},Q=G=>{if(!L)return;const ge=G.clientX-z.x,de=G.clientY-z.y;j=ge*9e-4,J=de*9e-4,m.rotation.y+=ge*.004,m.rotation.x+=de*.004,m.rotation.x=ai.clamp(m.rotation.x,-.75,.75),z={x:G.clientX,y:G.clientY}},H=()=>{L=!1,ne=0};e.addEventListener("pointerdown",le),e.addEventListener("pointermove",Q),e.addEventListener("pointerup",H),e.addEventListener("pointerleave",H),e.addEventListener("pointercancel",H);const k=new Dl,ie=()=>{requestAnimationFrame(ie);const G=k.getElapsedTime();w.rotation.y+=55e-5,N.rotation.y+=78e-5,m.rotation.z=ai.degToRad(23.4)+Math.sin(G*.18)*.012,L||(m.rotation.y+=j,m.rotation.x+=J,j*=.92,J*=.92),y.uniforms.uSunDir.value.copy(o.position).normalize(),y.uniforms.uDragNight.value+=(ne-y.uniforms.uDragNight.value)*.18,S.uniforms.uSunDir.value.copy(o.position).normalize(),a.render(t,r)};ie();const U=()=>{r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),e.removeEventListener("pointerdown",le),e.removeEventListener("pointermove",Q),e.removeEventListener("pointerup",H),e.removeEventListener("pointerleave",H),e.removeEventListener("pointercancel",H),t.traverse(G=>{G.geometry&&G.geometry.dispose(),G.material&&(Array.isArray(G.material)?G.material.forEach(ge=>ge.dispose()):G.material.dispose())}),a.dispose(),a.domElement&&e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),M.jsx("div",{className:"w-full flex items-center justify-center py-6",children:M.jsx("div",{className:`\r
          relative\r
          w-[320px] h-[320px]\r
          md:w-[560px] md:h-[560px]\r
          rounded-full overflow-hidden\r
          bg-transparent\r
        `,children:M.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}})})})}function RI(){return M.jsxs("section",{className:"relative min-h-screen overflow-hidden px-5 sm:px-10 md:px-24 lg:px-36 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24",children:[M.jsxs("div",{className:"absolute inset-0 -z-10 pointer-events-none",children:[M.jsx("div",{className:"absolute top-1/3 left-[-20%] sm:left-[-10%] w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-indigo-500/10 blur-[140px]"}),M.jsx("div",{className:"absolute bottom-1/4 right-[-20%] sm:right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-purple-500/10 blur-[140px]"})]}),M.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center",children:[M.jsx("div",{className:"order-1 lg:order-1",children:M.jsxs(xt.div,{className:"mb-10 sm:mb-14 md:mb-20",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"About Me"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg",children:"I’m a software engineer focused on designing and building scalable, maintainable, production-ready web systems."})]})}),M.jsx("div",{className:"order-2 lg:order-2 flex justify-center lg:justify-end",children:M.jsx("div",{className:"w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-none",children:M.jsx(CI,{})})})]}),M.jsxs("div",{className:"mt-12 sm:mt-16 md:mt-20",children:[M.jsxs("div",{className:"grid lg:grid-cols-3 gap-10 lg:gap-16 items-start",children:[M.jsxs("div",{className:"lg:col-span-2",children:[M.jsxs("div",{className:"space-y-7 sm:space-y-9 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg",children:[M.jsx(xt.p,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.05},children:"My work centers around CMS platforms, internal dashboards, and business-critical applications where structure, clarity, and long-term stability matter."}),M.jsx(xt.p,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:"Rather than focusing only on features, I focus on how software behaves over time — how data flows, components interact, and applications scale as requirements evolve."}),M.jsx(xt.p,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.15},children:"I value clean architecture, predictable behavior, and thoughtful engineering decisions that reduce complexity instead of adding to it. This mindset helps teams move faster without sacrificing reliability."}),M.jsx(xt.p,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:"I work comfortably with cross-functional teams, adapt well to distributed environments, and take clear ownership of the systems I build — from design and implementation to deployment and long-term maintenance."})]}),M.jsx(xt.div,{className:"mt-10 sm:mt-14 md:mt-16 text-gray-400 text-xs sm:text-sm",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.25},children:"Currently open to full-time roles, long-term contracts, and project-based collaborations."}),M.jsxs("div",{className:"mt-20 sm:mt-24 md:mt-28",children:[M.jsx("h2",{className:"text-lg sm:text-xl font-semibold text-white mb-8 sm:mb-12",children:"Journey"}),M.jsxs("div",{className:"relative border-l border-white/10 pl-6 sm:pl-10 space-y-10 sm:space-y-14",children:[M.jsx(Ph,{className:"relative rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur",year:"2023 – Present",title:"Full-Stack Engineering",description:"Building CMS platforms, dashboards, APIs, and modern frontend systems using React, PHP, Node.js, and SQL-based databases."}),M.jsx(Ph,{className:"relative rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur",year:"2022 – 2023",title:"Frontend Architecture & System Design",description:"Focused on component architecture, performance optimization, scalable UI patterns, and long-term maintainability."}),M.jsx(Ph,{className:"relative rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur",year:"2021 – 2022",title:"Core Programming & Backend Foundations",description:"Strengthened programming fundamentals, backend concepts, and data modeling while exploring multiple stacks."})]})]}),M.jsxs("div",{className:"mt-24 sm:mt-28 md:mt-32",children:[M.jsx(xt.h2,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},className:"text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8",children:"How I Think About Software"}),M.jsxs(xt.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1,ease:"easeOut"},className:"space-y-5 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg",children:[M.jsx("p",{children:"Good software starts with deeply understanding the problem — data flow, edge cases, and long-term maintenance matter more than quick wins."}),M.jsx("p",{children:"I prefer clarity over cleverness. Readable code and predictable behavior scale better than smart but fragile solutions."}),M.jsx("p",{children:"My goal is to build systems that other developers can understand, extend, and trust — even years later."})]})]})]}),M.jsx("div",{className:"lg:col-span-1",children:M.jsxs("div",{className:"sticky top-28 space-y-6",children:[M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Quick Summary"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"Full Stack Engineer focused on CMS platforms, dashboards, and scalable systems with clean architecture."}),M.jsxs("div",{className:"mt-5 space-y-3 text-sm text-gray-300",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Focus"}),M.jsx("span",{children:"CMS & Dashboards"})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Stack"}),M.jsx("span",{children:"React • PHP • Node"})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Location"}),M.jsx("span",{children:"India (Remote)"})]})]}),M.jsx("div",{className:"mt-6",children:M.jsx("a",{href:"/contact",className:"w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Contact Me"})})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"What I build"}),M.jsxs("ul",{className:"mt-4 space-y-3 text-sm text-gray-300 list-disc list-inside",children:[M.jsx("li",{children:"Admin Dashboards & CMS"}),M.jsx("li",{children:"Admission / Academic Portals"}),M.jsx("li",{children:"E-commerce Systems"}),M.jsx("li",{children:"APIs + Database Design"})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Core Principles"}),M.jsxs("div",{className:"mt-4 space-y-3 text-sm text-gray-300",children:[M.jsxs("div",{className:"flex items-start gap-3",children:[M.jsx("span",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400/70"}),M.jsxs("p",{children:[M.jsx("span",{className:"text-white/80 font-medium",children:"Clarity over cleverness"})," ","— readable systems scale better."]})]}),M.jsxs("div",{className:"flex items-start gap-3",children:[M.jsx("span",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400/70"}),M.jsxs("p",{children:[M.jsx("span",{className:"text-white/80 font-medium",children:"Performance matters"})," ","— optimize UX + maintain speed."]})]}),M.jsxs("div",{className:"flex items-start gap-3",children:[M.jsx("span",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-purple-400/70"}),M.jsxs("p",{children:[M.jsx("span",{className:"text-white/80 font-medium",children:"Systems mindset"})," ","— architecture + data flow first."]})]})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Tech Snapshot"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"My go-to stack for building production-ready apps:"}),M.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:["React","Tailwind","Node.js","PHP","MySQL","MongoDB","Firebase","REST APIs"].map(n=>M.jsx("span",{className:"px-2.5 py-1 text-[11px] rounded-md border border-white/10 bg-white/[0.03] text-gray-200",children:n},n))}),M.jsxs("div",{className:"mt-6 border-t border-white/10 pt-4 text-sm text-gray-300 space-y-2",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Strength"}),M.jsx("span",{children:"CMS + Dashboards"})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Style"}),M.jsx("span",{children:"Clean Architecture"})]})]})]}),M.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-6",children:[M.jsx("h3",{className:"text-white font-semibold text-lg",children:"Availability"}),M.jsx("p",{className:"text-gray-300 mt-3 text-sm leading-relaxed",children:"I’m currently open to full-time roles and long-term collaborations focused on scalable web systems."}),M.jsxs("div",{className:"mt-5 space-y-3 text-sm text-gray-300",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Status"}),M.jsxs("span",{className:"inline-flex items-center gap-2",children:[M.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 animate-pulse"}),"Available"]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Work Type"}),M.jsx("span",{children:"Remote / Hybrid"})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Response"}),M.jsx("span",{children:"24–48 hrs"})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-white/50",children:"Timezone"}),M.jsx("span",{children:"IST (UTC +5:30)"})]})]}),M.jsx("div",{className:"mt-6 border-t border-white/10 pt-4",children:M.jsx("a",{href:"/contact",className:"inline-flex items-center justify-center w-full px-5 py-3 rounded-lg border border-white/15 bg-white/[0.04] text-white font-medium hover:bg-white/[0.08] transition",children:"Start a Conversation"})})]})]})})]}),M.jsx("div",{className:"mt-24 sm:mt-28 md:mt-36",children:M.jsxs(xt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"},className:`\r
        max-w-6xl mx-auto\r
        rounded-2xl border border-white/10\r
        bg-gradient-to-br from-white/[0.05] to-white/[0.02]\r
        backdrop-blur p-6 sm:p-8 md:p-10\r
        text-center\r
      `,children:[M.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-semibold text-white",children:"Let’s Work Together"}),M.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg",children:"If you’re building a serious product, dashboard, or CMS platform and care about clean architecture and long-term maintainability, I’d love to collaborate."}),M.jsx("div",{className:"mt-6 sm:mt-8",children:M.jsx("a",{href:"/contact",className:"inline-block px-7 sm:px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Get in Touch"})})]})})]})]})}function Ph({year:n,title:e,description:t}){return M.jsxs(xt.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},className:"relative",children:[M.jsx("div",{className:"absolute -left-[11px] top-1.5 w-3 h-3 rounded-full bg-white/40"}),M.jsx("span",{className:"text-xs text-white/40 tracking-widest",children:n}),M.jsx("h3",{className:"text-lg font-medium text-white mt-2",children:e}),M.jsx("p",{className:"text-gray-300 mt-2 leading-relaxed",children:t})]})}function PI(){const{id:n}=e1(),e=zs.findIndex(o=>String(o.id)===String(n)),t=zs[e],r=e>0?zs[e-1]:null,a=e<zs.length-1?zs[e+1]:null;return t?M.jsxs("section",{className:"relative min-h-screen overflow-hidden px-6 sm:px-10 md:px-24 lg:px-36 pt-24 pb-20",children:[M.jsxs("div",{className:"absolute inset-0 -z-10 pointer-events-none",children:[M.jsx("div",{className:"absolute top-24 left-[-15%] w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[140px]"}),M.jsx("div",{className:"absolute bottom-24 right-[-15%] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[140px]"})]}),M.jsxs("div",{className:"max-w-5xl mx-auto",children:[M.jsx(Kn,{to:"/blogs",className:"inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition",children:"← Back to Blogs"}),t.cover&&M.jsxs(xt.div,{className:"mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]",initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.55,ease:"easeOut"},children:[M.jsx("div",{className:"h-52 sm:h-60 md:h-72 lg:h-96 w-full bg-cover bg-center",style:{backgroundImage:`url(${t.cover})`}}),M.jsx("div",{className:"h-px w-full bg-white/10"})]}),M.jsxs(xt.div,{className:"mt-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[M.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight",children:t.title}),M.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50",children:[t.date&&M.jsx("span",{children:t.date}),M.jsx("span",{children:"•"}),M.jsx("span",{children:t.readTime})]}),t.skills?.length>0&&M.jsx("div",{className:"flex flex-wrap gap-2 mt-5",children:t.skills.map(o=>M.jsx("span",{className:"px-2.5 py-1 text-[11px] sm:text-xs rounded-md border border-white/10 bg-white/[0.03] text-gray-200",children:o},o))})]}),M.jsx(xt.div,{className:"mt-10 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut",delay:.1},children:t.content?.map((o,c)=>M.jsx(NI,{block:o},c))}),M.jsxs("div",{className:"mt-16 grid sm:grid-cols-2 gap-4",children:[r?M.jsxs(Kn,{to:`/blogs/${r.id}`,className:`\r
                rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur\r
                p-6 hover:bg-white/[0.06] transition\r
              `,children:[M.jsx("p",{className:"text-xs text-white/50 tracking-widest",children:"PREVIOUS"}),M.jsx("h3",{className:"mt-2 text-white font-semibold leading-snug",children:r.title}),M.jsx("p",{className:"mt-2 text-sm text-gray-400 line-clamp-2",children:r.excerpt})]}):M.jsx("div",{className:"rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white/30",children:"No previous post"}),a?M.jsxs(Kn,{to:`/blogs/${a.id}`,className:`\r
                rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur\r
                p-6 hover:bg-white/[0.06] transition\r
              `,children:[M.jsx("p",{className:"text-xs text-white/50 tracking-widest",children:"NEXT"}),M.jsx("h3",{className:"mt-2 text-white font-semibold leading-snug",children:a.title}),M.jsx("p",{className:"mt-2 text-sm text-gray-400 line-clamp-2",children:a.excerpt})]}):M.jsx("div",{className:"rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white/30",children:"No next post"})]}),M.jsxs("div",{className:"mt-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 sm:p-8",children:[M.jsx("h3",{className:"text-lg font-semibold text-white",children:"Want to discuss this topic?"}),M.jsx("p",{className:"text-gray-300 mt-2 text-sm sm:text-base",children:"If you're building CMS platforms or dashboards and want to exchange ideas, feel free to reach out."}),M.jsx("div",{className:"mt-6",children:M.jsx(Kn,{to:"/contact",className:"inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Contact Me"})})]})]})]}):M.jsx("section",{className:"min-h-screen px-6 sm:px-10 md:px-24 lg:px-36 pt-28 pb-20",children:M.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[M.jsx("h1",{className:"text-2xl font-semibold text-white",children:"Blog not found"}),M.jsx("p",{className:"text-gray-400 mt-3",children:"This blog doesn’t exist or may have been removed."}),M.jsx(Kn,{to:"/blogs",className:"inline-block mt-6 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition",children:"Back to Blogs"})]})})}function NI({block:n}){return n?n.type==="h2"?M.jsx("h2",{className:"text-xl sm:text-2xl font-semibold text-white mt-10",children:n.text}):n.type==="p"?M.jsx("p",{className:"text-gray-300",children:n.text}):n.type==="ul"?M.jsx("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:n.items?.map((e,t)=>M.jsx("li",{children:e},t))}):n.type==="blockquote"?M.jsx("blockquote",{className:"border-l-4 border-white/20 pl-5 py-2 text-white/75 italic",children:n.text}):null:null}function LI(){const{pathname:n}=Rr();return $.useEffect(()=>{window.scrollTo(0,0)},[n]),null}const Jp=(n,e,t)=>Math.max(e,Math.min(t,n));function Nh({count:n=120,minSize:e=.5,maxSize:t=2.4,blur:r=0,depth:a=10,offset:o={x:0,y:0}}){const c=$.useMemo(()=>{const u=(d,h)=>Math.random()*(h-d)+d;return Array.from({length:n}).map(()=>({x:u(0,100),y:u(0,100),size:u(e,t),opacity:u(.12,.95),delay:u(0,8),duration:u(3.2,7)}))},[n,e,t]);return M.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",style:{transform:`translate(${o.x/a}px, ${o.y/a}px)`,willChange:"transform"},children:c.map((u,d)=>M.jsx(xt.span,{className:"absolute rounded-full bg-white",style:{left:`${u.x}%`,top:`${u.y}%`,width:u.size,height:u.size,opacity:u.opacity,filter:r?`blur(${r}px)`:"none"},animate:{opacity:[u.opacity,Jp(u.opacity+.45,0,1),u.opacity]},transition:{duration:u.duration,delay:u.delay,repeat:1/0,ease:"easeInOut"}},d))})}function DI(){return M.jsx(xt.div,{className:"absolute inset-0 opacity-[0.35]",animate:{backgroundPosition:["0% 0%","100% 60%","0% 0%"]},transition:{duration:90,repeat:1/0,ease:"linear"},style:{backgroundSize:"260% 260%",backgroundImage:`
          radial-gradient(circle at 25% 30%, rgba(56,189,248,0.10), transparent 55%),
          radial-gradient(circle at 70% 25%, rgba(168,85,247,0.08), transparent 55%),
          radial-gradient(circle at 55% 80%, rgba(236,72,153,0.06), transparent 60%)
        `}})}function II(){const[n,e]=$.useState({x:0,y:0}),t=$.useRef(null);return $.useEffect(()=>{const r=a=>{const o=window.innerWidth/2,c=window.innerHeight/2,u=a.clientX-o,d=a.clientY-c,h=Jp(u/10,-40,40),p=Jp(d/10,-40,40);t.current&&cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{e({x:h,y:p})})};return window.addEventListener("pointermove",r,{passive:!0}),()=>{window.removeEventListener("pointermove",r),t.current&&cancelAnimationFrame(t.current)}},[]),M.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0",style:{background:`
            radial-gradient(circle at 50% 40%, rgba(30,41,59,0.20), transparent 65%),
            linear-gradient(180deg, #00020a 0%, #000000 100%)
          `}}),M.jsx(DI,{}),M.jsx("div",{className:"absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30",style:{background:"radial-gradient(circle, rgba(56,189,248,0.30), transparent 70%)",filter:"blur(10px)"}}),M.jsx(Nh,{count:170,minSize:.4,maxSize:1.3,blur:0,depth:22,offset:n}),M.jsx(Nh,{count:70,minSize:1.1,maxSize:2.3,blur:.3,depth:14,offset:n}),M.jsx(Nh,{count:18,minSize:2,maxSize:3.3,blur:.7,depth:9,offset:n}),M.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.85) 92%)"}}),M.jsx("div",{className:"absolute inset-0 bg-black/15"})]})}function UI({loading:n}){const[e,t]=$.useState(0),r=$.useRef(null),a=$.useMemo(()=>Array.from({length:14}),[]);$.useEffect(()=>{if(!n)return;t(0);let c=0;const u=setInterval(()=>{c+=Math.floor(Math.random()*7)+3,c>=100&&(c=100),t(c),c===100&&clearInterval(u)},55);return()=>clearInterval(u)},[n]),$.useEffect(()=>{e===100&&r.current&&(r.current.currentTime=0,r.current.play().catch(()=>{}))},[e]);const o=e>=100;return M.jsx(Hu,{children:n&&M.jsxs(xt.div,{className:"fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center bg-black",initial:{opacity:1},exit:{opacity:0,scale:1.02},transition:{duration:.7,ease:"easeInOut"},children:[M.jsx("div",{className:`\r
              absolute -top-40 -right-40\r
              w-[520px] h-[520px]\r
              rounded-full pointer-events-none\r
            `,style:{background:"radial-gradient(circle at 35% 35%, rgba(255,255,255,0.22), rgba(148,163,184,0.10), transparent 65%)",filter:"blur(2px)"}}),M.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 45%, rgba(99,102,241,0.08), transparent 60%)"}}),M.jsx(xt.div,{className:"absolute inset-0",animate:o?{x:[0,-3,3,-2,2,0],y:[0,2,-2,2,-1,0]}:{x:0,y:0},transition:o?{duration:.35,ease:"easeInOut"}:{duration:.2},children:M.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center py-20 px-6",children:[M.jsxs(xt.h2,{className:"text-xl sm:text-2xl font-semibold tracking-wide text-white",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.12},children:["Kunal",M.jsx("span",{className:"text-white/60",children:".dev"})]}),M.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Initiating launch sequence..."}),M.jsxs("div",{className:"relative mt-12 h-44 w-44 flex items-end justify-center",children:[M.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-20 pointer-events-none",children:a.map((c,u)=>M.jsx(xt.span,{className:"absolute rounded-full",style:{width:3,height:3,left:`${u*7%90}%`,top:`${u*11%60}%`,background:u%3===0?"rgba(255,255,255,0.55)":u%3===1?"rgba(253,224,71,0.65)":"rgba(248,113,113,0.55)",filter:"blur(0.2px)"},animate:{y:[0,18+u%6*3],opacity:[0,.75,0],scale:[.8,1.2,.6]},transition:{duration:.65+u%5*.05,repeat:1/0,ease:"easeOut",delay:u*.03}},u))}),M.jsx(xt.div,{className:"text-6xl select-none",initial:{y:18,opacity:0},animate:o?{y:[-10,-140],opacity:[1,1,0]}:{y:[10,-6,10],opacity:1},transition:o?{duration:.85,ease:"easeInOut"}:{duration:1.3,repeat:1/0,ease:"easeInOut"},children:"🚀"}),M.jsx(xt.div,{className:"absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full",style:{background:"radial-gradient(circle, rgba(253,224,71,0.55), transparent 70%)",filter:"blur(1px)"},animate:{scale:[1,1.15,1],opacity:[.55,.9,.55]},transition:{duration:.55,repeat:1/0,ease:"easeInOut"}})]}),M.jsxs(xt.div,{className:"mt-6 text-4xl font-bold text-white",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{delay:.18},children:[e,"%"]}),M.jsx("div",{className:"mt-5 w-64 sm:w-72 h-[4px] bg-white/10 rounded-full overflow-hidden",children:M.jsx(xt.div,{className:"h-full bg-white/85",initial:{width:"0%"},animate:{width:`${e}%`},transition:{ease:"easeOut",duration:.25}})}),M.jsx("div",{className:"mt-4 text-xs text-white/35 tracking-widest",children:"SYSTEM BOOTING"})]})}),M.jsx(xt.div,{className:"absolute inset-0 pointer-events-none",initial:{opacity:0},animate:o?{opacity:1}:{opacity:0},transition:{duration:.6,ease:"easeInOut"},style:{background:"radial-gradient(circle at 50% 45%, rgba(255,255,255,0.12), rgba(0,0,0,0.92) 65%)"}})]})})}function FI({loading:n}){return M.jsx(Hu,{children:n&&M.jsxs(xt.div,{className:"fixed inset-0 z-[9998] pointer-events-none",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.18,ease:"easeOut"},children:[M.jsx("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-sm"}),M.jsx(xt.div,{className:"absolute top-0 left-0 h-[2px] w-full bg-white/10",initial:{opacity:0},animate:{opacity:1},children:M.jsx(xt.div,{className:"h-full bg-white/60",initial:{x:"-100%"},animate:{x:"100%"},transition:{duration:.55,repeat:1/0,ease:"linear"}})})]})})}function OI(){const n=Rr(),[e,t]=$.useState(!1),[r,a]=$.useState(!1);return $.useEffect(()=>{const o=localStorage.getItem("kunal_loader_seen"),c=localStorage.getItem("kunal_force_loader");if(o&&!c){t(!1);return}t(!0);const u=setTimeout(()=>{t(!1),localStorage.setItem("kunal_loader_seen","true"),localStorage.removeItem("kunal_force_loader")},1900);return()=>clearTimeout(u)},[]),$.useEffect(()=>{if(e)return;a(!0);const o=setTimeout(()=>a(!1),350);return()=>clearTimeout(o)},[n.pathname,e]),M.jsxs("div",{className:"relative min-h-screen text-white",children:[M.jsx(II,{}),M.jsx(UI,{loading:e}),M.jsx(FI,{loading:!e&&r}),!e&&M.jsxs(M.Fragment,{children:[M.jsx(Y1,{}),M.jsx(LI,{}),M.jsx("main",{className:"flex-grow",children:M.jsx(Hu,{mode:"wait",children:M.jsxs(g1,{location:n,children:[M.jsx(is,{path:"/",element:M.jsx(O1,{})}),M.jsx(is,{path:"/skills",element:M.jsx(nI,{})}),M.jsx(is,{path:"/projects",element:M.jsx(sI,{})}),M.jsx(is,{path:"/blogs",element:M.jsx(cI,{})}),M.jsx(is,{path:"/contact",element:M.jsx(AI,{})}),M.jsx(is,{path:"/about",element:M.jsx(RI,{})}),M.jsx(is,{path:"/blogs/:id",element:M.jsx(PI,{})})]},n.pathname)})}),M.jsx(k1,{})]})]})}TE.createRoot(document.getElementById("root")).render(M.jsx(Zy.StrictMode,{children:M.jsx(T1,{children:M.jsx(OI,{})})}));export{Hu as A,Kn as L,Tm as M,tm as _,Wa as a,m_ as b,ls as c,Jv as d,$t as f,BI as h,BT as i,M as j,xt as m,Kx as p,$ as r,Kr as s,im as u};
