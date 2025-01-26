/*! For license information please see 916.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857,916],{4106:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(6798),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".base-modal__title-container[data-v-1f1ef0be]{align-items:center;display:flex;justify-content:flex-start;margin-bottom:4px}.base-modal__title-container--centered[data-v-1f1ef0be]{justify-content:center}.base-modal__title[data-v-1f1ef0be]{color:var(--dark);font-size:20px;font-weight:700;margin:0}.base-modal__subtitle[data-v-1f1ef0be]{color:var(--gray);font-size:14px;margin-bottom:24px;margin-top:4px}.base-modal__subtitle--centered[data-v-1f1ef0be]{text-align:center}",""]);const i=o},8763:(t,e,r)=>{r.d(e,{A:()=>i});var n=r(6798),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".skip-google-site-kit-modal__footer[data-v-3f425cd4]{display:flex;justify-content:flex-end;margin-top:24px}",""]);const i=o},5857:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(9726),o={class:"base-modal"},i={key:1,class:"base-modal__title"};const a=(0,n.pM)({__name:"BaseModal",props:{title:{},subtitle:{},titleIcon:{},titleAlignment:{default:"left"}},setup:function(t){return function(t,e){var r=(0,n.g2)("HIcon");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("span",{class:(0,n.C4)(["base-modal__title-container",{"base-modal__title-container--centered":"centered"===t.titleAlignment}])},[t.titleIcon?((0,n.uX)(),(0,n.Wv)(r,{key:0,class:"h-mr-8",name:t.titleIcon.name,color:t.titleIcon.color},null,8,["name","color"])):(0,n.Q3)("",!0),t.title?((0,n.uX)(),(0,n.CE)("h2",i,(0,n.v_)(t.title),1)):(0,n.Q3)("",!0)],2),t.subtitle?((0,n.uX)(),(0,n.CE)("p",{key:0,class:(0,n.C4)(["base-modal__subtitle",{"base-modal__subtitle--centered":"centered"===t.titleAlignment}])},(0,n.v_)(t.subtitle),3)):(0,n.Q3)("",!0),(0,n.RG)(t.$slots,"default")])}}});var c=r(100),l=r.n(c),u=r(4106),s={insert:"head",singleton:!1};l()(u.A,s);u.A.locals;const f=(0,r(6262).A)(a,[["__scopeId","data-v-1f1ef0be"]])},6916:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(9726),o=r(5857),i=r(611),a=r(6259),c=r(3679);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function _(){}function b(){}function w(){}var x={};f(x,a,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(N([])));L&&L!==r&&n.call(L,a)&&(x=L);var E=w.prototype=_.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=d(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=A(c,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=d(e,r,n);if("normal"===u.type){if(o=n.done?g:v,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return b.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),f(E,s,"Generator"),f(E,a,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function s(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var f={class:"skip-google-site-kit-modal__footer"};const h=(0,n.pM)({__name:"SkipGoogleSiteKitModal",props:{data:{}},setup:function(t){var e=t,r=(0,c.hS)().closeModal,l=(0,n.KR)(!1),h=function(){var t,n=(t=u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.data.onConfirm){t.next=5;break}return l.value=!0,t.next=4,e.data.onConfirm();case 4:l.value=!1;case 5:r();case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return function(t,e){return(0,n.uX)(),(0,n.Wv)(o.default,{"title-icon":{name:"ic-error-24",color:"danger"},title:(0,n.R1)(i.T)("hostinger_easy_onboarding_are_you_sure"),subtitle:(0,n.R1)(i.T)("hostinger_easy_onboarding_google_site_kit_not_needed")},{default:(0,n.k6)((function(){return[(0,n.Lk)("div",f,[(0,n.bF)((0,n.R1)(a.BN),{class:"h-mr-16",onClick:(0,n.R1)(r),size:"small","is-disabled":l.value,variant:"text"},{default:(0,n.k6)((function(){return[(0,n.eW)((0,n.v_)((0,n.R1)(i.T)("hostinger_easy_onboarding_set_up_site_kit")),1)]})),_:1},8,["onClick","is-disabled"]),(0,n.bF)((0,n.R1)(a.BN),{onClick:h,"is-loading":l.value,size:"small"},{default:(0,n.k6)((function(){return[(0,n.eW)((0,n.v_)((0,n.R1)(i.T)("hostinger_easy_onboarding_yes_skip_step")),1)]})),_:1},8,["is-loading"])])]})),_:1},8,["title","subtitle"])}}});var d=r(100),p=r.n(d),v=r(8763),y={insert:"head",singleton:!1};p()(v.A,y);v.A.locals;const g=(0,r(6262).A)(h,[["__scopeId","data-v-3f425cd4"]])}}]);