function t(t,e,a,i){var s,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(n=(r<3?s(n):r>3?s(e,a,n):s(e,a))||n);return r>3&&n&&Object.defineProperty(e,a,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,a=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,a,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[i+1],t[0]);return new r(a,t,i)},o=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,v=m.trustedTypes,g=v?v.emptyScript:"",_=m.reactiveElementPolyfillSupport,y=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},b=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){const{get:i,set:s}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);s?.call(this,e),this.requestUpdate(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(a)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const a of i){const i=document.createElement("style"),s=e.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:f).toAttribute(e,a.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const a=this.constructor,i=a._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=a.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=i;const r=s.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,a,i=!1,s){if(void 0!==t){const r=this.constructor;if(!1===i&&(s=this[t]),a??=r.getPropertyOptions(t),!((a.hasChanged??b)(s,e)||a.useDefault&&a.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,a))))return;this.C(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t){const{wrapped:t}=a,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,a,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,_?.({ReactiveElement:k}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=t=>t,S=$.trustedTypes,z=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+T,E=`<${C}>`,N=document,j=()=>N.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,V=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,O=/"/g,q=/^(?:script|style|textarea|title)$/i,B=t=>(e,...a)=>({_$litType$:t,strings:e,values:a}),I=B(1),G=B(2),W=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),K=new WeakMap,Z=N.createTreeWalker(N,129);function J(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}const Y=(t,e)=>{const a=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<a;e++){const a=t[e];let o,c,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,c=n.exec(a),null!==c);)d=n.lastIndex,n===R?"!--"===c[1]?n=F:void 0!==c[1]?n=P:void 0!==c[2]?(q.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=V):void 0!==c[3]&&(n=V):n===V?">"===c[0]?(n=s??R,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,o=c[1],n=void 0===c[3]?V:'"'===c[3]?O:L):n===O||n===L?n=V:n===F||n===P?n=R:(n=V,s=void 0);const u=n===V&&t[e+1].startsWith("/>")?" ":"";r+=n===R?a+E:l>=0?(i.push(o),a.slice(0,l)+A+a.slice(l)+T+u):a+T+(-2===l?e:u)}return[J(t,r+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let s=0,r=0;const n=t.length-1,o=this.parts,[c,l]=Y(t,e);if(this.el=Q.createElement(c,a),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&o.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(A)){const e=l[r++],a=i.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:n[2],strings:a,ctor:"."===n[1]?it:"?"===n[1]?st:"@"===n[1]?rt:at}),i.removeAttribute(t)}else t.startsWith(T)&&(o.push({type:6,index:s}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],j()),Z.nextNode(),o.push({type:2,index:++s});i.append(t[e],j())}}}else if(8===i.nodeType)if(i.data===C)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)o.push({type:7,index:s}),t+=T.length-1}s++}}static createElement(t,e){const a=N.createElement("template");return a.innerHTML=t,a}}function X(t,e,a=t,i){if(e===W)return e;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const r=H(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??N).importNode(e,!0);Z.currentNode=i;let s=Z.nextNode(),r=0,n=0,o=a[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new et(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new nt(s,this,t)),this._$AV.push(e),o=a[++n]}r!==o?.index&&(s=Z.nextNode(),r++)}return Z.currentNode=N,i}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),H(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=Q.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const s of t)i===e.length?e.push(a=new et(this.O(j()),this.O(j()),this,this.options)):a=e[i],a._$AI(s),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=U}_$AI(t,e=this,a,i){const s=this.strings;let r=!1;if(void 0===s)t=X(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let n,o;for(t=s[0],n=0;n<s.length-1;n++)o=X(this,i[a+n],e,n),o===W&&(o=this._$AH[n]),r||=!H(o)||o!==this._$AH[n],o===U?t=U:t!==U&&(t+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!i&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}class st extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class rt extends at{constructor(t,e,a,i,s){super(t,e,a,i,s),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??U)===W)return;const a=this._$AH,i=t===U&&a!==U||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,s=t!==U&&(a===U||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=$.litHtmlPolyfillSupport;ot?.(Q,et),($.litHtmlVersions??=[]).push("3.3.3");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,a)=>{const i=a?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=a?.renderBefore??null;i._$litPart$=s=new et(e.insertBefore(j(),t),t,void 0,a??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const dt=ct.litElementPolyfillSupport;dt?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=t=>(e,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b},pt=(t=ht,e,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(a.name,t),"accessor"===i){const{name:i}=a;return{set(a){const s=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,s,t,!0,a)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];e.call(this,a),this.requestUpdate(i,s,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,a)=>"object"==typeof a?pt(t,e,a):((t,e,a)=>{const i=e.hasOwnProperty(a);return e.constructor.createProperty(a,t),i?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(t){return mt({...t,state:!0,attribute:!1})}var gt,_t;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(_t||(_t={}));var yt=function(t,e,a,i){i=i||{},a=null==a?{}:a;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,t.dispatchEvent(s),s};const ft="suunto_app";class bt extends Error{constructor(t,e){super(t),this.code=t,this.deviceId=e}}function wt(t){const e=new Set;for(const a of Object.values(t.entities??{}))a.platform===ft&&a.device_id&&e.add(a.device_id);return[...e]}function kt(t,e){const a={};for(const i of Object.values(t.entities??{}))i.device_id===e&&i.platform===ft&&i.translation_key&&(a[i.translation_key]=i.entity_id);return a}const $t={"stat.distance":"Distance","stat.duration":"Duration","stat.avg_speed":"Avg speed","stat.avg_pace":"Avg pace","stat.avg_hr":"Avg HR","stat.max_hr":"Max HR","stat.training_effect":"Training effect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Feeling","stat.energy":"Energy","stat.time":"Time","stat.workouts":"Workouts","stat.steps":"Steps","stat.heart_rate":"Heart rate","stat.quality":"Quality","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Resting HR","stat.resting_hr_delta":"Resting HR ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stress level","stat.recovery_window":"Recovery time","stat.ctl":"CTL · fitness","stat.atl":"ATL · fatigue","stat.tsb":"TSB · form","stat.readiness":"Readiness","stat.recovery_balance":"Recovery balance","stat.training_suggestion":"Today's suggestion","stat.volume":"Volume","stat.intensity":"Intensity","stat.consistency":"Consistency","stat.recovery":"Recovery","stat.variety":"Variety","card.hr_zones.title":"Heart Rate Zones","card.hr_zones.last_workout":"Last workout","card.sleep_readiness.title":"Sleep & Readiness","card.sleep_readiness.subtitle_no_wake":"{duration} slept","card.sleep_readiness.subtitle_with_wake":"{duration} slept · woke {time}","card.recovery.title":"Recovery","card.training_load.title":"Training Load","card.training_load.subtitle_fallback":"Fitness (CTL) trend","card.week_stats.title":"This Week & Lifetime","card.week_stats.subtitle":"Last 7 days","card.week_stats.lifetime_title":"Lifetime by activity","card.today.title":"Today","card.today.subtitle":"Live from your watch","card.training_status.title":"Training Status","card.training_profile.title":"Training Profile","card.training_profile.subtitle":"Your training, at a glance","card.heart_rate.title":"Heart Rate","empty.last_workout.title":"No recent workout","empty.last_workout.subtitle":"Sync your watch with the Suunto app to see it here.","empty.hr_zones.title":"No zone data","empty.hr_zones.subtitle":"Your next outdoor workout with a heart-rate strap will fill this in.","empty.sleep_readiness.title":"No sleep data yet","empty.sleep_readiness.subtitle":"Wear your watch to bed to see it here.","empty.recovery.title":"No recovery data yet","empty.training_load.title":"Building your training load","empty.training_load.subtitle":"Needs a bit of workout history to compute - check back after a few sessions.","empty.week_stats.title":"No workout history yet","empty.today.title":"No live data yet","empty.training_status.title":"Not enough data yet","empty.training_status.subtitle":"Needs a bit of training history to compute.","empty.training_profile.title":"Not enough data yet","empty.training_profile.subtitle":"Needs a few more sensors reporting to compute your profile.","empty.heart_rate.title":"No live heart rate yet","empty.loading":"Loading...","empty.generic_error":"Could not load Suunto data.","error.no_device":"No Suunto device found - is the suunto_app integration set up?","error.multiple_devices":'Multiple Suunto devices found - set "device_id" in the card configuration.',"error.device_missing":'Configured device "{device}" has no suunto_app entities.',"band.readiness.great":"Great","band.readiness.fair":"Fair","band.readiness.low":"Low","band.recovery.well":"Well recovered","band.recovery.partial":"Partially recovered","band.recovery.low":"Low recovery","band.recovery.fully":"Fully recovered","band.recovery.recovering":"Recovering · {time} left","band.hrv.low":"HRV low","band.hrv.high":"HRV high","band.hrv.balanced":"HRV balanced","band.form.fresh":"Fresh","band.form.neutral":"Neutral","band.form.fatigued":"Fatigued","band.form.very_fatigued":"Very fatigued","band.acwr.safe":"Safe zone","band.acwr.low":"Low load","band.acwr.high":"High load - injury risk","band.suggestion.hard":"Go for it","band.suggestion.moderate":"Moderate effort","band.suggestion.easy":"Take it easy","band.suggestion.rest":"Rest day","chip.workout_logged_today":"Workout logged today","chip.workout_today":"Workout today","chip.recovering":"Recovering","chip.nap":"{minutes} min nap","chip.nap_earlier":"{minutes} min nap (earlier)","chip.workouts_30d":"{count} workouts in the last 30 days","chip.acwr":"ACWR {value} · {label}","profile.summary":"Strongest on {strong} · lightest on {light}","chip.more_activity_one":"+{count} more activity type","chip.more_activity_other":"+{count} more activity types","chip.unusual_recovery":"Unusual recovery","chip.days_since_one":"{count} day since last workout","chip.days_since_other":"{count} days since last workout","achievement.count_one":"{count} achievement","achievement.count_other":"{count} achievements","achievement.rank":"Rank #{rank} on this route","label.zone":"Zone {n}","label.deep":"Deep","label.light":"Light","label.rem":"REM","editor.auto_detect":"This card auto-detects your Suunto device - no configuration needed.","editor.pick_device":"Multiple Suunto devices were found - pick which one this card should read.","editor.device_label":"Suunto device","card.lifetime.title":"Lifetime Totals","card.lifetime.subtitle":"Since you started","stat.active_days":"Active days","empty.lifetime.title":"No lifetime data yet","card.recent_workouts.title":"Recent Workouts","empty.recent_workouts.title":"No recent workouts","card.elevation.title":"Elevation & Climbing","stat.ascent":"Ascent","stat.descent":"Descent","stat.ascent_time":"Ascent time","stat.descent_time":"Descent time","stat.min_altitude":"Min altitude","stat.max_altitude":"Max altitude","stat.ascent_rate":"Ascent rate","empty.elevation.title":"No elevation data","empty.elevation.subtitle":"Only outdoor workouts with a barometer record this.","card.location.title":"Start Location","location.open_in_maps":"Open in Maps","empty.location.title":"No location data","empty.location.subtitle":"Indoor workouts have no GPS start point.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Fitness age","fitness.measured":"Measured {time} · {activity}","empty.fitness.title":"No fitness data yet","empty.fitness.subtitle":"Suunto computes this from running or walking workouts only.","card.pmc.title":"Performance Management","card.pmc.subtitle":"90-day trend","card.recovery_trends.title":"Recovery Trends","card.recovery_trends.subtitle":"30-day baseline","empty.recovery_trends.title":"No recovery trend data yet","card.weekly_volume.title":"Weekly Volume","card.weekly_volume.subtitle":"Last 12 weeks","empty.weekly_volume.title":"No weekly volume data yet","stat.average":"Average","stat.total":"Total","card.hr_curve.title":"Heart Rate Curve","card.hr_curve.subtitle":"Last 24 hours","stat.hr_now":"Now","stat.hr_min":"Today's min","stat.hr_max":"Today's max","empty.hr_curve.title":"No live HR data yet","empty.hr_curve.subtitle":"Wear your watch and sync to see today's curve here.","card.sleep_trends.title":"Sleep Trends","card.sleep_trends.subtitle":"Last 30 nights","empty.sleep_trends.title":"No sleep trend data yet","card.weekly_goal.title":"Weekly Goal","card.weekly_goal.subtitle":"{value} of {goal} km","empty.weekly_goal.title":"No weekly distance yet","editor.goal_label":"Weekly goal (km)","card.streak.title":"Activity Streak","card.streak.subtitle":"Last 14 days","streak.window_count_one":"{count} active day","streak.window_count_other":"{count} active days","streak.days_one":"{count} day streak","streak.days_other":"{count} days streak","streak.none":"No active streak - get moving today","empty.streak.title":"No workout history yet","just_finished.title":"Nice work!","just_finished.idle.title":"Waiting for your next workout","just_finished.idle.subtitle":"This lights up right after your watch syncs a new one.","empty.just_finished.title":"No recent workout","card.activity_trends.title":"Activity Trends","card.activity_trends.subtitle":"Last 14 days","empty.activity_trends.title":"No activity trend data yet","card.recovery_balance_trend.title":"Recovery Balance Trend","card.recovery_balance_trend.subtitle":"Last 14 days","empty.recovery_balance_trend.title":"No recovery trend data yet","card.readiness_trend.title":"Readiness Trend","card.readiness_trend.subtitle":"Last 30 days","empty.readiness_trend.title":"No readiness trend data yet","stat.cadence":"Cadence","stat.pct_hrmax":"% of max HR","stat.sleep_avg_hr":"Sleep avg HR","stat.sleep_min_hr":"Sleep min HR","chip.bedtime":"Bedtime {time}","card.activity_calendar.title":"Activity Calendar","card.activity_calendar.subtitle":"Last 6 weeks","empty.activity_calendar.title":"No workout history yet","activity_calendar.active_days_one":"{count} active day","activity_calendar.active_days_other":"{count} active days","card.workout_comparison.title":"Workout Comparison","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Not enough matching workouts yet","empty.workout_comparison.subtitle":"Do the same activity twice to see a comparison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Duration ({delta})","stat.avg_hr_delta":"Avg HR ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"By The Numbers","card.milestones.subtitle":"Since you started","empty.milestones.title":"No lifetime data yet","stat.earth_laps":"Earth laps","stat.marathons":"Marathons","stat.moon_pct":"% to the Moon","stat.burgers":"Burgers","card.athlete_profile.title":"Training Personality","empty.athlete_profile.title":"Not enough data yet","personality.activity.cycling":"Cyclist","personality.activity.running":"Runner","personality.activity.trekking":"Hiker","personality.activity.walking":"Walker","personality.activity.gym":"Strength Athlete","personality.activity.swim":"Swimmer","personality.activity.ski":"Skier","personality.activity.row":"Rower","personality.activity.other":"Multi-Sport Athlete","personality.schedule.weekend":"Weekend Warrior","personality.schedule.weekday":"Weekday Regular","personality.schedule.balanced":"Balanced Scheduler","personality.time.morning":"Early Bird","personality.time.afternoon":"Midday Mover","personality.time.evening":"Evening Athlete","personality.time.night":"Night Owl","card.pace_trend.title":"Pace Trend","card.pace_trend.subtitle":"{activity} · last {count} sessions","empty.pace_trend.title":"Not enough matching workouts yet","empty.pace_trend.subtitle":"Do the same activity a few times to see a trend.","pace_trend.faster":"Getting faster","pace_trend.slower":"Getting slower","pace_trend.steady":"Holding steady","card.lap_splits.title":"Lap Splits","empty.lap_splits.title":"No lap data","empty.lap_splits.subtitle":"Not every workout has laps - your next one with them will fill this in.","stat.laps":"Laps","stat.fastest_lap":"Fastest lap","label.lap":"Lap {n}","card.training_effect_trend.title":"Training Effect Trend","empty.training_effect_trend.title":"No training effect data yet"},xt={en:$t,pl:{"stat.distance":"Dystans","stat.duration":"Czas trwania","stat.avg_speed":"Śr. prędkość","stat.avg_pace":"Śr. tempo","stat.avg_hr":"Śr. tętno","stat.max_hr":"Maks. tętno","stat.training_effect":"Efekt treningowy","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Samopoczucie","stat.energy":"Energia","stat.time":"Czas","stat.workouts":"Treningi","stat.steps":"Kroki","stat.heart_rate":"Tętno","stat.quality":"Jakość","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Tętno spocz.","stat.resting_hr_delta":"Spocz. ({delta})","stat.spo2":"SpO2","stat.stress_level":"Poziom stresu","stat.recovery_window":"Czas regeneracji","stat.ctl":"CTL · forma","stat.atl":"ATL · zmęczenie","stat.tsb":"TSB · forma","stat.readiness":"Gotowość","stat.recovery_balance":"Bilans regeneracji","stat.training_suggestion":"Sugestia na dziś","stat.volume":"Objętość","stat.intensity":"Intensywność","stat.consistency":"Regularność","stat.recovery":"Regeneracja","stat.variety":"Różnorodność","card.hr_zones.title":"Strefy tętna","card.hr_zones.last_workout":"Ostatni trening","card.sleep_readiness.title":"Sen i gotowość","card.sleep_readiness.subtitle_no_wake":"{duration} snu","card.sleep_readiness.subtitle_with_wake":"{duration} snu · pobudka {time}","card.recovery.title":"Regeneracja","card.training_load.title":"Obciążenie treningowe","card.training_load.subtitle_fallback":"Trend formy (CTL)","card.week_stats.title":"Ten tydzień i statystyki życiowe","card.week_stats.subtitle":"Ostatnie 7 dni","card.week_stats.lifetime_title":"Statystyki życiowe wg dyscypliny","card.today.title":"Dziś","card.today.subtitle":"Na żywo z zegarka","card.training_status.title":"Status treningowy","card.training_profile.title":"Profil treningowy","card.training_profile.subtitle":"Twój trening w pigułce","card.heart_rate.title":"Tętno","empty.last_workout.title":"Brak ostatniego treningu","empty.last_workout.subtitle":"Zsynchronizuj zegarek z aplikacją Suunto, aby zobaczyć go tutaj.","empty.hr_zones.title":"Brak danych o strefach","empty.hr_zones.subtitle":"Twój następny trening na zewnątrz z pasem do pomiaru tętna uzupełni te dane.","empty.sleep_readiness.title":"Brak jeszcze danych o śnie","empty.sleep_readiness.subtitle":"Noś zegarek podczas snu, aby zobaczyć dane tutaj.","empty.recovery.title":"Brak jeszcze danych o regeneracji","empty.training_load.title":"Obliczanie obciążenia treningowego","empty.training_load.subtitle":"Potrzebna jest historia treningów do wyliczenia - sprawdź ponownie po kilku sesjach.","empty.week_stats.title":"Brak jeszcze historii treningów","empty.today.title":"Brak jeszcze danych na żywo","empty.training_status.title":"Za mało danych","empty.training_status.subtitle":"Potrzeba trochę historii treningów, żeby to wyliczyć.","empty.training_profile.title":"Za mało danych","empty.training_profile.subtitle":"Potrzeba więcej danych z czujników, żeby wyliczyć profil.","empty.heart_rate.title":"Brak jeszcze danych o tętnie","empty.loading":"Wczytywanie...","empty.generic_error":"Nie udało się wczytać danych Suunto.","error.no_device":"Nie znaleziono urządzenia Suunto - czy integracja suunto_app jest skonfigurowana?","error.multiple_devices":'Znaleziono wiele urządzeń Suunto - ustaw "device_id" w konfiguracji karty.',"error.device_missing":'Skonfigurowane urządzenie "{device}" nie ma encji suunto_app.',"band.readiness.great":"Świetna","band.readiness.fair":"Przeciętna","band.readiness.low":"Niska","band.recovery.well":"Dobrze zregenerowany","band.recovery.partial":"Częściowo zregenerowany","band.recovery.low":"Niska regeneracja","band.recovery.fully":"W pełni zregenerowany","band.recovery.recovering":"Regeneracja · pozostało {time}","band.hrv.low":"HRV niskie","band.hrv.high":"HRV wysokie","band.hrv.balanced":"HRV wyrównane","band.form.fresh":"Wypoczęty","band.form.neutral":"Neutralna","band.form.fatigued":"Zmęczony","band.form.very_fatigued":"Bardzo zmęczony","band.acwr.safe":"Strefa bezpieczna","band.acwr.low":"Niskie obciążenie","band.acwr.high":"Wysokie obciążenie - ryzyko kontuzji","band.suggestion.hard":"Dawaj mocno","band.suggestion.moderate":"Umiarkowany wysiłek","band.suggestion.easy":"Trenuj lekko","band.suggestion.rest":"Dzień odpoczynku","chip.workout_logged_today":"Trening zarejestrowany dziś","chip.workout_today":"Trening dziś","chip.recovering":"Regeneracja","chip.nap":"{minutes} min drzemki","chip.nap_earlier":"{minutes} min drzemki (wcześniej)","chip.workouts_30d":"{count} treningów w ciągu ostatnich 30 dni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Najmocniej: {strong} · najsłabiej: {light}","chip.more_activity_one":"+{count} inna dyscyplina","chip.more_activity_other":"+{count} inne dyscypliny","chip.unusual_recovery":"Nietypowa regeneracja","chip.days_since_one":"{count} dzień od ostatniego treningu","chip.days_since_other":"{count} dni od ostatniego treningu","achievement.count_one":"{count} osiągnięcie","achievement.count_other":"{count} osiągnięcia","achievement.rank":"Miejsce #{rank} na tej trasie","label.zone":"Strefa {n}","label.deep":"Głęboki","label.light":"Płytki","label.rem":"REM","editor.auto_detect":"Ta karta automatycznie wykrywa Twoje urządzenie Suunto - konfiguracja nie jest potrzebna.","editor.pick_device":"Znaleziono wiele urządzeń Suunto - wybierz, z którego ta karta ma korzystać.","editor.device_label":"Urządzenie Suunto","card.lifetime.title":"Statystyki życiowe","card.lifetime.subtitle":"Od początku","stat.active_days":"Aktywne dni","empty.lifetime.title":"Brak jeszcze danych życiowych","card.recent_workouts.title":"Ostatnie treningi","empty.recent_workouts.title":"Brak ostatnich treningów","card.elevation.title":"Przewyższenia i podejścia","stat.ascent":"Podejście","stat.descent":"Zejście","stat.ascent_time":"Czas podejścia","stat.descent_time":"Czas zejścia","stat.min_altitude":"Wys. min.","stat.max_altitude":"Wys. maks.","stat.ascent_rate":"Tempo podejścia","empty.elevation.title":"Brak danych o przewyższeniach","empty.elevation.subtitle":"Rejestrują to tylko treningi na zewnątrz z barometrem.","card.location.title":"Lokalizacja startu","location.open_in_maps":"Otwórz w Mapach","empty.location.title":"Brak danych lokalizacji","empty.location.subtitle":"Treningi w pomieszczeniu nie mają punktu startu GPS.","card.fitness.title":"Sprawność","stat.vo2max":"VO2max","stat.estimated_vo2max":"Szac. VO2max","stat.fitness_age":"Wiek fizyczny","fitness.measured":"Zmierzono {time} · {activity}","empty.fitness.title":"Brak jeszcze danych o sprawności","empty.fitness.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","card.pmc.title":"Zarządzanie formą","card.pmc.subtitle":"Trend 90-dniowy","card.recovery_trends.title":"Trendy regeneracji","card.recovery_trends.subtitle":"Poziom bazowy 30 dni","empty.recovery_trends.title":"Brak jeszcze danych o trendach regeneracji","card.weekly_volume.title":"Wolumen tygodniowy","card.weekly_volume.subtitle":"Ostatnie 12 tygodni","empty.weekly_volume.title":"Brak jeszcze danych o wolumenie tygodniowym","stat.average":"Średnia","stat.total":"Suma","card.hr_curve.title":"Krzywa tętna","card.hr_curve.subtitle":"Ostatnie 24 godziny","stat.hr_now":"Teraz","stat.hr_min":"Min. dzisiaj","stat.hr_max":"Maks. dzisiaj","empty.hr_curve.title":"Brak jeszcze danych o tętnie na żywo","empty.hr_curve.subtitle":"Noś zegarek i zsynchronizuj go, aby zobaczyć tu dzisiejszą krzywą.","card.sleep_trends.title":"Trendy snu","card.sleep_trends.subtitle":"Ostatnie 30 nocy","empty.sleep_trends.title":"Brak jeszcze danych o trendach snu","card.weekly_goal.title":"Cel tygodniowy","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Brak jeszcze danych o dystansie tygodniowym","editor.goal_label":"Cel tygodniowy (km)","card.streak.title":"Seria aktywności","card.streak.subtitle":"Ostatnie 14 dni","streak.window_count_one":"{count} aktywny dzień","streak.window_count_other":"{count} aktywne dni","streak.days_one":"{count} dzień serii","streak.days_other":"{count} dni serii","streak.none":"Brak aktywnej serii - zacznij dziś","empty.streak.title":"Brak jeszcze historii treningów","just_finished.title":"Świetna robota!","just_finished.idle.title":"Czekanie na kolejny trening","just_finished.idle.subtitle":"Ta karta zaświeci się zaraz po synchronizacji nowego treningu.","empty.just_finished.title":"Brak ostatniego treningu","card.activity_trends.title":"Trendy aktywności","card.activity_trends.subtitle":"Ostatnie 14 dni","empty.activity_trends.title":"Brak jeszcze danych o trendach aktywności","card.recovery_balance_trend.title":"Trend bilansu regeneracji","card.recovery_balance_trend.subtitle":"Ostatnie 14 dni","empty.recovery_balance_trend.title":"Brak jeszcze danych o trendzie regeneracji","card.readiness_trend.title":"Trend gotowości","card.readiness_trend.subtitle":"Ostatnie 30 dni","empty.readiness_trend.title":"Brak jeszcze danych o trendzie gotowości","stat.cadence":"Kadencja","stat.pct_hrmax":"% tętna maks.","stat.sleep_avg_hr":"Śr. tętno snu","stat.sleep_min_hr":"Min. tętno snu","chip.bedtime":"Zaśnięcie {time}","card.activity_calendar.title":"Kalendarz aktywności","card.activity_calendar.subtitle":"Ostatnie 6 tygodni","empty.activity_calendar.title":"Brak jeszcze historii treningów","activity_calendar.active_days_one":"{count} aktywny dzień","activity_calendar.active_days_other":"{count} aktywne dni","card.workout_comparison.title":"Porównanie treningów","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.workout_comparison.subtitle":"Wykonaj tę samą aktywność dwa razy, aby zobaczyć porównanie.","stat.distance_delta":"Dystans ({delta})","stat.duration_delta":"Czas trwania ({delta})","stat.avg_hr_delta":"Śr. tętno ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"W liczbach","card.milestones.subtitle":"Od początku","empty.milestones.title":"Brak jeszcze danych życiowych","stat.earth_laps":"Okrążeń Ziemi","stat.marathons":"Maratonów","stat.moon_pct":"% drogi na Księżyc","stat.burgers":"Burgerów","card.athlete_profile.title":"Osobowość treningowa","empty.athlete_profile.title":"Brak jeszcze wystarczających danych","personality.activity.cycling":"Kolarz","personality.activity.running":"Biegacz","personality.activity.trekking":"Piechur","personality.activity.walking":"Spacerowicz","personality.activity.gym":"Siłacz","personality.activity.swim":"Pływak","personality.activity.ski":"Narciarz","personality.activity.row":"Wioślarz","personality.activity.other":"Wielosportowiec","personality.schedule.weekend":"Wojownik weekendu","personality.schedule.weekday":"Regularny w tygodniu","personality.schedule.balanced":"Zbalansowany harmonogram","personality.time.morning":"Ranny ptaszek","personality.time.afternoon":"Popołudniowiec","personality.time.evening":"Wieczorny sportowiec","personality.time.night":"Nocny marek","card.pace_trend.title":"Trend tempa","card.pace_trend.subtitle":"{activity} · ostatnie {count} sesji","empty.pace_trend.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.pace_trend.subtitle":"Wykonaj tę samą aktywność kilka razy, aby zobaczyć trend.","pace_trend.faster":"Przyspieszasz","pace_trend.slower":"Zwalniasz","pace_trend.steady":"Stabilne tempo","card.lap_splits.title":"Czasy Okrążeń","empty.lap_splits.title":"Brak danych o okrążeniach","empty.lap_splits.subtitle":"Nie każdy trening ma okrążenia - uzupełni się przy najbliższym, który je ma.","stat.laps":"Okrążenia","stat.fastest_lap":"Najszybsze okrążenie","label.lap":"Okrążenie {n}","card.training_effect_trend.title":"Trend Efektu Treningowego","empty.training_effect_trend.title":"Brak jeszcze danych o efekcie treningowym"},de:{"stat.distance":"Distanz","stat.duration":"Dauer","stat.avg_speed":"Ø-Geschwindigkeit","stat.avg_pace":"Ø-Pace","stat.avg_hr":"Ø-Puls","stat.max_hr":"Max. Puls","stat.training_effect":"Trainingseffekt","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gefühl","stat.energy":"Energie","stat.time":"Zeit","stat.workouts":"Workouts","stat.steps":"Schritte","stat.heart_rate":"Herzfrequenz","stat.quality":"Qualität","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Ruhepuls","stat.resting_hr_delta":"Ruhepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresslevel","stat.recovery_window":"Erholungszeit","stat.ctl":"CTL · Fitness","stat.atl":"ATL · Ermüdung","stat.tsb":"TSB · Form","stat.readiness":"Bereitschaft","stat.recovery_balance":"Erholungsbalance","stat.training_suggestion":"Empfehlung für heute","stat.volume":"Umfang","stat.intensity":"Intensität","stat.consistency":"Konstanz","stat.recovery":"Erholung","stat.variety":"Vielfalt","card.hr_zones.title":"Herzfrequenzzonen","card.hr_zones.last_workout":"Letztes Training","card.sleep_readiness.title":"Schlaf & Bereitschaft","card.sleep_readiness.subtitle_no_wake":"{duration} geschlafen","card.sleep_readiness.subtitle_with_wake":"{duration} geschlafen · aufgewacht um {time}","card.recovery.title":"Erholung","card.training_load.title":"Trainingsbelastung","card.training_load.subtitle_fallback":"Fitness-Trend (CTL)","card.week_stats.title":"Diese Woche & Gesamt","card.week_stats.subtitle":"Letzte 7 Tage","card.week_stats.lifetime_title":"Gesamt nach Sportart","card.today.title":"Heute","card.today.subtitle":"Live von deiner Uhr","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofil","card.training_profile.subtitle":"Dein Training auf einen Blick","card.heart_rate.title":"Herzfrequenz","empty.last_workout.title":"Kein aktuelles Training","empty.last_workout.subtitle":"Synchronisiere deine Uhr mit der Suunto-App, um es hier zu sehen.","empty.hr_zones.title":"Keine Zonendaten","empty.hr_zones.subtitle":"Dein nächstes Outdoor-Training mit Brustgurt füllt das hier aus.","empty.sleep_readiness.title":"Noch keine Schlafdaten","empty.sleep_readiness.subtitle":"Trage deine Uhr beim Schlafen, um sie hier zu sehen.","empty.recovery.title":"Noch keine Erholungsdaten","empty.training_load.title":"Trainingsbelastung wird berechnet","empty.training_load.subtitle":"Benötigt etwas Trainingshistorie zur Berechnung - schau nach ein paar Einheiten wieder vorbei.","empty.week_stats.title":"Noch keine Trainingshistorie","empty.today.title":"Noch keine Live-Daten","empty.training_status.title":"Noch nicht genug Daten","empty.training_status.subtitle":"Braucht etwas Trainingshistorie zur Berechnung.","empty.training_profile.title":"Noch nicht genug Daten","empty.training_profile.subtitle":"Braucht mehr Sensordaten, um dein Profil zu berechnen.","empty.heart_rate.title":"Noch keine Herzfrequenzdaten","empty.loading":"Wird geladen...","empty.generic_error":"Suunto-Daten konnten nicht geladen werden.","error.no_device":"Kein Suunto-Gerät gefunden - ist die suunto_app-Integration eingerichtet?","error.multiple_devices":'Mehrere Suunto-Geräte gefunden - lege "device_id" in der Kartenkonfiguration fest.',"error.device_missing":'Konfiguriertes Gerät "{device}" hat keine suunto_app-Entitäten.',"band.readiness.great":"Sehr gut","band.readiness.fair":"Mittel","band.readiness.low":"Niedrig","band.recovery.well":"Gut erholt","band.recovery.partial":"Teilweise erholt","band.recovery.low":"Geringe Erholung","band.recovery.fully":"Vollständig erholt","band.recovery.recovering":"Erholung läuft · {time} verbleibend","band.hrv.low":"HRV niedrig","band.hrv.high":"HRV hoch","band.hrv.balanced":"HRV ausgeglichen","band.form.fresh":"Frisch","band.form.neutral":"Neutral","band.form.fatigued":"Ermüdet","band.form.very_fatigued":"Sehr ermüdet","band.acwr.safe":"Sicherer Bereich","band.acwr.low":"Geringe Belastung","band.acwr.high":"Hohe Belastung - Verletzungsrisiko","band.suggestion.hard":"Vollgas","band.suggestion.moderate":"Moderate Belastung","band.suggestion.easy":"Locker angehen","band.suggestion.rest":"Ruhetag","chip.workout_logged_today":"Heute Training erfasst","chip.workout_today":"Training heute","chip.recovering":"Erholung","chip.nap":"{minutes} Min. Nickerchen","chip.nap_earlier":"{minutes} Min. Nickerchen (früher)","chip.workouts_30d":"{count} Trainings in den letzten 30 Tagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Am stärksten: {strong} · am schwächsten: {light}","chip.more_activity_one":"+{count} weitere Sportart","chip.more_activity_other":"+{count} weitere Sportarten","chip.unusual_recovery":"Ungewöhnliche Erholung","chip.days_since_one":"{count} Tag seit dem letzten Training","chip.days_since_other":"{count} Tage seit dem letzten Training","achievement.count_one":"{count} Erfolg","achievement.count_other":"{count} Erfolge","achievement.rank":"Platz #{rank} auf dieser Strecke","label.zone":"Zone {n}","label.deep":"Tiefschlaf","label.light":"Leichtschlaf","label.rem":"REM","editor.auto_detect":"Diese Karte erkennt dein Suunto-Gerät automatisch - keine Konfiguration nötig.","editor.pick_device":"Mehrere Suunto-Geräte gefunden - wähle aus, welches diese Karte verwenden soll.","editor.device_label":"Suunto-Gerät","card.lifetime.title":"Gesamtstatistik","card.lifetime.subtitle":"Seit Beginn","stat.active_days":"Aktive Tage","empty.lifetime.title":"Noch keine Gesamtdaten","card.recent_workouts.title":"Letzte Trainings","empty.recent_workouts.title":"Keine letzten Trainings","card.elevation.title":"Höhenmeter & Aufstieg","stat.ascent":"Aufstieg","stat.descent":"Abstieg","stat.ascent_time":"Aufstiegszeit","stat.descent_time":"Abstiegszeit","stat.min_altitude":"Min. Höhe","stat.max_altitude":"Max. Höhe","stat.ascent_rate":"Aufstiegsrate","empty.elevation.title":"Keine Höhendaten","empty.elevation.subtitle":"Nur Outdoor-Trainings mit Barometer erfassen dies.","card.location.title":"Startort","location.open_in_maps":"In Karten öffnen","empty.location.title":"Keine Standortdaten","empty.location.subtitle":"Indoor-Trainings haben keinen GPS-Startpunkt.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitnessalter","fitness.measured":"Gemessen {time} · {activity}","empty.fitness.title":"Noch keine Fitnessdaten","empty.fitness.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","card.pmc.title":"Leistungsmanagement","card.pmc.subtitle":"90-Tage-Trend","card.recovery_trends.title":"Erholungstrends","card.recovery_trends.subtitle":"30-Tage-Basiswert","empty.recovery_trends.title":"Noch keine Erholungstrend-Daten","card.weekly_volume.title":"Wöchentliches Volumen","card.weekly_volume.subtitle":"Letzte 12 Wochen","empty.weekly_volume.title":"Noch keine Daten zum wöchentlichen Volumen","stat.average":"Durchschnitt","stat.total":"Gesamt","card.hr_curve.title":"Herzfrequenz-Kurve","card.hr_curve.subtitle":"Letzte 24 Stunden","stat.hr_now":"Jetzt","stat.hr_min":"Tagesminimum","stat.hr_max":"Tagesmaximum","empty.hr_curve.title":"Noch keine Live-Herzfrequenzdaten","empty.hr_curve.subtitle":"Trage deine Uhr und synchronisiere sie, um die heutige Kurve hier zu sehen.","card.sleep_trends.title":"Schlaftrends","card.sleep_trends.subtitle":"Letzte 30 Nächte","empty.sleep_trends.title":"Noch keine Schlaftrend-Daten","card.weekly_goal.title":"Wochenziel","card.weekly_goal.subtitle":"{value} von {goal} km","empty.weekly_goal.title":"Noch keine wöchentliche Distanz","editor.goal_label":"Wochenziel (km)","card.streak.title":"Aktivitätsserie","card.streak.subtitle":"Letzte 14 Tage","streak.window_count_one":"{count} aktiver Tag","streak.window_count_other":"{count} aktive Tage","streak.days_one":"{count} Tag in Folge","streak.days_other":"{count} Tage in Folge","streak.none":"Keine aktive Serie - starte heute","empty.streak.title":"Noch keine Trainingshistorie","just_finished.title":"Gut gemacht!","just_finished.idle.title":"Warten auf dein nächstes Training","just_finished.idle.subtitle":"Diese Karte leuchtet auf, sobald deine Uhr ein neues Training synchronisiert.","empty.just_finished.title":"Kein aktuelles Training","card.activity_trends.title":"Aktivitätstrends","card.activity_trends.subtitle":"Letzte 14 Tage","empty.activity_trends.title":"Noch keine Aktivitätstrend-Daten","card.recovery_balance_trend.title":"Erholungsbalance-Trend","card.recovery_balance_trend.subtitle":"Letzte 14 Tage","empty.recovery_balance_trend.title":"Noch keine Erholungstrend-Daten","card.readiness_trend.title":"Bereitschaftstrend","card.readiness_trend.subtitle":"Letzte 30 Tage","empty.readiness_trend.title":"Noch keine Bereitschaftstrend-Daten","stat.cadence":"Trittfrequenz","stat.pct_hrmax":"% der max. Herzfrequenz","stat.sleep_avg_hr":"Ø-Puls","stat.sleep_min_hr":"Min-Puls","chip.bedtime":"Zubettgehen {time}","card.activity_calendar.title":"Aktivitätskalender","card.activity_calendar.subtitle":"Letzte 6 Wochen","empty.activity_calendar.title":"Noch keine Trainingshistorie","activity_calendar.active_days_one":"{count} aktiver Tag","activity_calendar.active_days_other":"{count} aktive Tage","card.workout_comparison.title":"Trainingsvergleich","card.workout_comparison.vs":"vs. {time}","empty.workout_comparison.title":"Noch nicht genug passende Trainings","empty.workout_comparison.subtitle":"Mach die gleiche Aktivität zweimal, um einen Vergleich zu sehen.","stat.distance_delta":"Distanz ({delta})","stat.duration_delta":"Dauer ({delta})","stat.avg_hr_delta":"Ø-Puls ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"In Zahlen","card.milestones.subtitle":"Seit Beginn","empty.milestones.title":"Noch keine Gesamtdaten","stat.earth_laps":"Erdumrundungen","stat.marathons":"Marathons","stat.moon_pct":"% zum Mond","stat.burgers":"Burger","card.athlete_profile.title":"Trainingspersönlichkeit","empty.athlete_profile.title":"Noch nicht genug Daten","personality.activity.cycling":"Radfahrer","personality.activity.running":"Läufer","personality.activity.trekking":"Wanderer","personality.activity.walking":"Spaziergänger","personality.activity.gym":"Kraftsportler","personality.activity.swim":"Schwimmer","personality.activity.ski":"Skifahrer","personality.activity.row":"Ruderer","personality.activity.other":"Allrounder","personality.schedule.weekend":"Wochenendkrieger","personality.schedule.weekday":"Wochentags-Stammgast","personality.schedule.balanced":"Ausgewogener Planer","personality.time.morning":"Frühaufsteher","personality.time.afternoon":"Mittagsaktiver","personality.time.evening":"Abendsportler","personality.time.night":"Nachteule","card.pace_trend.title":"Pace-Trend","card.pace_trend.subtitle":"{activity} · letzte {count} Einheiten","empty.pace_trend.title":"Noch nicht genug passende Trainings","empty.pace_trend.subtitle":"Mach die gleiche Aktivität ein paar Mal, um einen Trend zu sehen.","pace_trend.faster":"Wird schneller","pace_trend.slower":"Wird langsamer","pace_trend.steady":"Konstantes Tempo","card.lap_splits.title":"Rundenzeiten","empty.lap_splits.title":"Keine Rundendaten","empty.lap_splits.subtitle":"Nicht jedes Training hat Runden - das nächste mit Rundendaten füllt das hier auf.","stat.laps":"Runden","stat.fastest_lap":"Schnellste Runde","label.lap":"Runde {n}","card.training_effect_trend.title":"Trainingseffekt-Trend","empty.training_effect_trend.title":"Noch keine Trainingseffekt-Daten"},pt:{"stat.distance":"Distância","stat.duration":"Duração","stat.avg_speed":"Vel. média","stat.avg_pace":"Ritmo médio","stat.avg_hr":"FC média","stat.max_hr":"FC máx.","stat.training_effect":"Efeito do treino","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensação","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Treinos","stat.steps":"Passos","stat.heart_rate":"Frequência cardíaca","stat.quality":"Qualidade","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repouso","stat.resting_hr_delta":"FC repouso ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nível de stress","stat.recovery_window":"Tempo de recuperação","stat.ctl":"CTL · condição","stat.atl":"ATL · fadiga","stat.tsb":"TSB · forma","stat.readiness":"Prontidão","stat.recovery_balance":"Equilíbrio de recuperação","stat.training_suggestion":"Sugestão de hoje","stat.volume":"Volume","stat.intensity":"Intensidade","stat.consistency":"Consistência","stat.recovery":"Recuperação","stat.variety":"Variedade","card.hr_zones.title":"Zonas de Frequência Cardíaca","card.hr_zones.last_workout":"Último treino","card.sleep_readiness.title":"Sono e Prontidão","card.sleep_readiness.subtitle_no_wake":"{duration} de sono","card.sleep_readiness.subtitle_with_wake":"{duration} de sono · acordou às {time}","card.recovery.title":"Recuperação","card.training_load.title":"Carga de Treino","card.training_load.subtitle_fallback":"Tendência de condição (CTL)","card.week_stats.title":"Esta Semana e Histórico Total","card.week_stats.subtitle":"Últimos 7 dias","card.week_stats.lifetime_title":"Total por atividade","card.today.title":"Hoje","card.today.subtitle":"Ao vivo do teu relógio","card.training_status.title":"Estado de treino","card.training_profile.title":"Perfil de treino","card.training_profile.subtitle":"O teu treino num relance","card.heart_rate.title":"Frequência cardíaca","empty.last_workout.title":"Sem treino recente","empty.last_workout.subtitle":"Sincroniza o teu relógio com a app Suunto para o veres aqui.","empty.hr_zones.title":"Sem dados de zonas","empty.hr_zones.subtitle":"O teu próximo treino ao ar livre com cinta cardíaca vai preencher isto.","empty.sleep_readiness.title":"Ainda sem dados de sono","empty.sleep_readiness.subtitle":"Usa o relógio para dormir para veres isto aqui.","empty.recovery.title":"Ainda sem dados de recuperação","empty.training_load.title":"A calcular a carga de treino","empty.training_load.subtitle":"Precisa de algum histórico de treinos para calcular - volta a verificar após algumas sessões.","empty.week_stats.title":"Ainda sem histórico de treinos","empty.today.title":"Ainda sem dados em direto","empty.training_status.title":"Ainda não há dados suficientes","empty.training_status.subtitle":"Precisa de algum histórico de treino para calcular.","empty.training_profile.title":"Ainda não há dados suficientes","empty.training_profile.subtitle":"Precisa de mais dados dos sensores para calcular o teu perfil.","empty.heart_rate.title":"Ainda sem dados de frequência cardíaca","empty.loading":"A carregar...","empty.generic_error":"Não foi possível carregar os dados Suunto.","error.no_device":"Nenhum dispositivo Suunto encontrado - a integração suunto_app está configurada?","error.multiple_devices":'Foram encontrados vários dispositivos Suunto - define "device_id" na configuração do cartão.',"error.device_missing":'O dispositivo configurado "{device}" não tem entidades suunto_app.',"band.readiness.great":"Ótima","band.readiness.fair":"Razoável","band.readiness.low":"Baixa","band.recovery.well":"Bem recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baixa recuperação","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"A recuperar · faltam {time}","band.hrv.low":"HRV baixa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Descansado","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muito fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baixa","band.acwr.high":"Carga alta - risco de lesão","band.suggestion.hard":"Vai com tudo","band.suggestion.moderate":"Esforço moderado","band.suggestion.easy":"Vá com calma","band.suggestion.rest":"Dia de descanso","chip.workout_logged_today":"Treino registado hoje","chip.workout_today":"Treino hoje","chip.recovering":"A recuperar","chip.nap":"{minutes} min de sesta","chip.nap_earlier":"{minutes} min de sesta (mais cedo)","chip.workouts_30d":"{count} treinos nos últimos 30 dias","chip.acwr":"ACWR {value} · {label}","profile.summary":"Mais forte em {strong} · mais fraco em {light}","chip.more_activity_one":"+{count} outra modalidade","chip.more_activity_other":"+{count} outras modalidades","chip.unusual_recovery":"Recuperação incomum","chip.days_since_one":"{count} dia desde o último treino","chip.days_since_other":"{count} dias desde o último treino","achievement.count_one":"{count} conquista","achievement.count_other":"{count} conquistas","achievement.rank":"Posição #{rank} nesta rota","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Leve","label.rem":"REM","editor.auto_detect":"Este cartão deteta automaticamente o teu dispositivo Suunto - não é necessária configuração.","editor.pick_device":"Foram encontrados vários dispositivos Suunto - escolhe qual este cartão deve usar.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totais Vitalícios","card.lifetime.subtitle":"Desde o início","stat.active_days":"Dias ativos","empty.lifetime.title":"Ainda sem dados vitalícios","card.recent_workouts.title":"Treinos Recentes","empty.recent_workouts.title":"Sem treinos recentes","card.elevation.title":"Altitude e Subidas","stat.ascent":"Subida","stat.descent":"Descida","stat.ascent_time":"Tempo subida","stat.descent_time":"Tempo descida","stat.min_altitude":"Altitude mín.","stat.max_altitude":"Altitude máx.","stat.ascent_rate":"Taxa de subida","empty.elevation.title":"Sem dados de altitude","empty.elevation.subtitle":"Só os treinos ao ar livre com barómetro registam isto.","card.location.title":"Localização de Início","location.open_in_maps":"Abrir no Maps","empty.location.title":"Sem dados de localização","empty.location.subtitle":"Os treinos em interiores não têm ponto de início GPS.","card.fitness.title":"Condição Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Idade física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Ainda sem dados de condição física","empty.fitness.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","card.pmc.title":"Gestão de Desempenho","card.pmc.subtitle":"Tendência de 90 dias","card.recovery_trends.title":"Tendências de Recuperação","card.recovery_trends.subtitle":"Referência de 30 dias","empty.recovery_trends.title":"Ainda sem dados de tendências de recuperação","card.weekly_volume.title":"Volume Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Ainda sem dados de volume semanal","stat.average":"Média","stat.total":"Total","card.hr_curve.title":"Curva de Frequência Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Agora","stat.hr_min":"Mín. de hoje","stat.hr_max":"Máx. de hoje","empty.hr_curve.title":"Ainda sem dados de FC em direto","empty.hr_curve.subtitle":"Usa e sincroniza o teu relógio para veres aqui a curva de hoje.","card.sleep_trends.title":"Tendências de Sono","card.sleep_trends.subtitle":"Últimas 30 noites","empty.sleep_trends.title":"Ainda sem dados de tendências de sono","card.weekly_goal.title":"Meta Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Ainda sem distância semanal","editor.goal_label":"Meta semanal (km)","card.streak.title":"Sequência de Atividade","card.streak.subtitle":"Últimos 14 dias","streak.window_count_one":"{count} dia ativo","streak.window_count_other":"{count} dias ativos","streak.days_one":"{count} dia de sequência","streak.days_other":"{count} dias de sequência","streak.none":"Sem sequência ativa - começa hoje","empty.streak.title":"Ainda sem histórico de treinos","just_finished.title":"Bom trabalho!","just_finished.idle.title":"À espera do teu próximo treino","just_finished.idle.subtitle":"Este cartão acende assim que o teu relógio sincronizar um treino novo.","empty.just_finished.title":"Sem treino recente","card.activity_trends.title":"Tendências de Atividade","card.activity_trends.subtitle":"Últimos 14 dias","empty.activity_trends.title":"Ainda sem dados de tendências de atividade","card.recovery_balance_trend.title":"Tendência do Equilíbrio de Recuperação","card.recovery_balance_trend.subtitle":"Últimos 14 dias","empty.recovery_balance_trend.title":"Ainda sem dados de tendências de recuperação","card.readiness_trend.title":"Tendência de Prontidão","card.readiness_trend.subtitle":"Últimos 30 dias","empty.readiness_trend.title":"Ainda sem dados de tendências de prontidão","stat.cadence":"Cadência","stat.pct_hrmax":"% da FC máx.","stat.sleep_avg_hr":"FC média sono","stat.sleep_min_hr":"FC mín. sono","chip.bedtime":"Deitou-se {time}","card.activity_calendar.title":"Calendário de Atividade","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Ainda sem histórico de treinos","activity_calendar.active_days_one":"{count} dia ativo","activity_calendar.active_days_other":"{count} dias ativos","card.workout_comparison.title":"Comparação de Treinos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ainda sem treinos suficientes para comparar","empty.workout_comparison.subtitle":"Faz a mesma atividade duas vezes para veres uma comparação.","stat.distance_delta":"Distância ({delta})","stat.duration_delta":"Duração ({delta})","stat.avg_hr_delta":"FC média ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"Em Números","card.milestones.subtitle":"Desde que começaste","empty.milestones.title":"Ainda sem dados totais","stat.earth_laps":"Voltas à Terra","stat.marathons":"Maratonas","stat.moon_pct":"% até à Lua","stat.burgers":"Hambúrgueres","card.athlete_profile.title":"Personalidade de Treino","empty.athlete_profile.title":"Ainda sem dados suficientes","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Caminhante","personality.activity.walking":"Andarilho","personality.activity.gym":"Atleta de Força","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remador","personality.activity.other":"Multidesportivo","personality.schedule.weekend":"Guerreiro de Fim de Semana","personality.schedule.weekday":"Regular da Semana","personality.schedule.balanced":"Horário Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Ativo à Tarde","personality.time.evening":"Atleta da Noite","personality.time.night":"Coruja Noturna","card.pace_trend.title":"Tendência de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sessões","empty.pace_trend.title":"Ainda sem treinos suficientes para comparar","empty.pace_trend.subtitle":"Faz a mesma atividade algumas vezes para veres uma tendência.","pace_trend.faster":"A ficar mais rápido","pace_trend.slower":"A ficar mais lento","pace_trend.steady":"Ritmo estável","card.lap_splits.title":"Tempos de Volta","empty.lap_splits.title":"Sem dados de voltas","empty.lap_splits.subtitle":"Nem todos os treinos têm voltas - o próximo que tiver vai preencher isto.","stat.laps":"Voltas","stat.fastest_lap":"Volta mais rápida","label.lap":"Volta {n}","card.training_effect_trend.title":"Tendência do Efeito de Treino","empty.training_effect_trend.title":"Ainda sem dados de efeito de treino"},fr:{"stat.distance":"Distance","stat.duration":"Durée","stat.avg_speed":"Vitesse moy.","stat.avg_pace":"Allure moy.","stat.avg_hr":"FC moy.","stat.max_hr":"FC max","stat.training_effect":"Effet d'entraînement","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Ressenti","stat.energy":"Énergie","stat.time":"Temps","stat.workouts":"Séances","stat.steps":"Pas","stat.heart_rate":"Fréquence cardiaque","stat.quality":"Qualité","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repos","stat.resting_hr_delta":"FC repos ({delta})","stat.spo2":"SpO2","stat.stress_level":"Niveau de stress","stat.recovery_window":"Temps de récupération","stat.ctl":"CTL · forme","stat.atl":"ATL · fatigue","stat.tsb":"TSB · forme","stat.readiness":"Préparation","stat.recovery_balance":"Équilibre de récupération","stat.training_suggestion":"Suggestion du jour","stat.volume":"Volume","stat.intensity":"Intensité","stat.consistency":"Régularité","stat.recovery":"Récupération","stat.variety":"Variété","card.hr_zones.title":"Zones de Fréquence Cardiaque","card.hr_zones.last_workout":"Dernière séance","card.sleep_readiness.title":"Sommeil et Préparation","card.sleep_readiness.subtitle_no_wake":"{duration} de sommeil","card.sleep_readiness.subtitle_with_wake":"{duration} de sommeil · réveil à {time}","card.recovery.title":"Récupération","card.training_load.title":"Charge d'Entraînement","card.training_load.subtitle_fallback":"Tendance de forme (CTL)","card.week_stats.title":"Cette Semaine et Cumul Total","card.week_stats.subtitle":"7 derniers jours","card.week_stats.lifetime_title":"Cumul par activité","card.today.title":"Aujourd'hui","card.today.subtitle":"En direct de ta montre","card.training_status.title":"État d'entraînement","card.training_profile.title":"Profil d'entraînement","card.training_profile.subtitle":"Ton entraînement en un coup d'œil","card.heart_rate.title":"Fréquence cardiaque","empty.last_workout.title":"Aucune séance récente","empty.last_workout.subtitle":"Synchronise ta montre avec l'appli Suunto pour la voir ici.","empty.hr_zones.title":"Aucune donnée de zone","empty.hr_zones.subtitle":"Ta prochaine séance en extérieur avec ceinture cardiaque remplira ceci.","empty.sleep_readiness.title":"Pas encore de données de sommeil","empty.sleep_readiness.subtitle":"Porte ta montre pour dormir afin de le voir ici.","empty.recovery.title":"Pas encore de données de récupération","empty.training_load.title":"Calcul de la charge d'entraînement","empty.training_load.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé - reviens après quelques séances.","empty.week_stats.title":"Pas encore d'historique d'entraînement","empty.today.title":"Pas encore de données en direct","empty.training_status.title":"Pas encore assez de données","empty.training_status.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé.","empty.training_profile.title":"Pas encore assez de données","empty.training_profile.subtitle":"Nécessite plus de données de capteurs pour calculer ton profil.","empty.heart_rate.title":"Pas encore de données de fréquence cardiaque","empty.loading":"Chargement...","empty.generic_error":"Impossible de charger les données Suunto.","error.no_device":"Aucun appareil Suunto trouvé - l'intégration suunto_app est-elle configurée ?","error.multiple_devices":'Plusieurs appareils Suunto trouvés - définis "device_id" dans la configuration de la carte.',"error.device_missing":"L'appareil configuré \"{device}\" n'a aucune entité suunto_app.","band.readiness.great":"Excellente","band.readiness.fair":"Correcte","band.readiness.low":"Faible","band.recovery.well":"Bien récupéré","band.recovery.partial":"Partiellement récupéré","band.recovery.low":"Faible récupération","band.recovery.fully":"Entièrement récupéré","band.recovery.recovering":"Récupération · {time} restant","band.hrv.low":"HRV basse","band.hrv.high":"HRV élevée","band.hrv.balanced":"HRV équilibrée","band.form.fresh":"Frais","band.form.neutral":"Neutre","band.form.fatigued":"Fatigué","band.form.very_fatigued":"Très fatigué","band.acwr.safe":"Zone sûre","band.acwr.low":"Charge faible","band.acwr.high":"Charge élevée - risque de blessure","band.suggestion.hard":"Foncez","band.suggestion.moderate":"Effort modéré","band.suggestion.easy":"Y aller doucement","band.suggestion.rest":"Jour de repos","chip.workout_logged_today":"Séance enregistrée aujourd'hui","chip.workout_today":"Séance aujourd'hui","chip.recovering":"Récupération","chip.nap":"{minutes} min de sieste","chip.nap_earlier":"{minutes} min de sieste (plus tôt)","chip.workouts_30d":"{count} séances au cours des 30 derniers jours","chip.acwr":"ACWR {value} · {label}","profile.summary":"Le plus fort en {strong} · le plus faible en {light}","chip.more_activity_one":"+{count} autre activité","chip.more_activity_other":"+{count} autres activités","chip.unusual_recovery":"Récupération inhabituelle","chip.days_since_one":"{count} jour depuis la dernière séance","chip.days_since_other":"{count} jours depuis la dernière séance","achievement.count_one":"{count} exploit","achievement.count_other":"{count} exploits","achievement.rank":"Rang #{rank} sur cet itinéraire","label.zone":"Zone {n}","label.deep":"Profond","label.light":"Léger","label.rem":"REM","editor.auto_detect":"Cette carte détecte automatiquement ton appareil Suunto - aucune configuration nécessaire.","editor.pick_device":"Plusieurs appareils Suunto trouvés - choisis celui que cette carte doit utiliser.","editor.device_label":"Appareil Suunto","card.lifetime.title":"Cumul Total","card.lifetime.subtitle":"Depuis le début","stat.active_days":"Jours actifs","empty.lifetime.title":"Pas encore de cumul total","card.recent_workouts.title":"Séances Récentes","empty.recent_workouts.title":"Aucune séance récente","card.elevation.title":"Dénivelé et Montées","stat.ascent":"Montée","stat.descent":"Descente","stat.ascent_time":"Temps montée","stat.descent_time":"Temps descente","stat.min_altitude":"Altitude min.","stat.max_altitude":"Altitude max.","stat.ascent_rate":"Vitesse ascensionnelle","empty.elevation.title":"Aucune donnée d'altitude","empty.elevation.subtitle":"Seules les séances en extérieur avec un altimètre enregistrent ceci.","card.location.title":"Lieu de Départ","location.open_in_maps":"Ouvrir dans Maps","empty.location.title":"Aucune donnée de localisation","empty.location.subtitle":"Les séances en intérieur n'ont pas de point de départ GPS.","card.fitness.title":"Forme Physique","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Âge physique","fitness.measured":"Mesuré {time} · {activity}","empty.fitness.title":"Pas encore de données de forme physique","empty.fitness.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","card.pmc.title":"Gestion de la Performance","card.pmc.subtitle":"Tendance sur 90 jours","card.recovery_trends.title":"Tendances de Récupération","card.recovery_trends.subtitle":"Référence sur 30 jours","empty.recovery_trends.title":"Pas encore de données de tendances de récupération","card.weekly_volume.title":"Volume Hebdomadaire","card.weekly_volume.subtitle":"12 dernières semaines","empty.weekly_volume.title":"Pas encore de données de volume hebdomadaire","stat.average":"Moyenne","stat.total":"Total","card.hr_curve.title":"Courbe de Fréquence Cardiaque","card.hr_curve.subtitle":"Dernières 24 heures","stat.hr_now":"Maintenant","stat.hr_min":"Min. du jour","stat.hr_max":"Max. du jour","empty.hr_curve.title":"Pas encore de données de FC en direct","empty.hr_curve.subtitle":"Porte et synchronise ta montre pour voir la courbe du jour ici.","card.sleep_trends.title":"Tendances de Sommeil","card.sleep_trends.subtitle":"30 dernières nuits","empty.sleep_trends.title":"Pas encore de données de tendances de sommeil","card.weekly_goal.title":"Objectif Hebdomadaire","card.weekly_goal.subtitle":"{value} sur {goal} km","empty.weekly_goal.title":"Pas encore de distance hebdomadaire","editor.goal_label":"Objectif hebdomadaire (km)","card.streak.title":"Série d'Activité","card.streak.subtitle":"14 derniers jours","streak.window_count_one":"{count} jour actif","streak.window_count_other":"{count} jours actifs","streak.days_one":"{count} jour de série","streak.days_other":"{count} jours de série","streak.none":"Aucune série active - bouge aujourd'hui","empty.streak.title":"Pas encore d'historique d'entraînement","just_finished.title":"Bien joué !","just_finished.idle.title":"En attente de ta prochaine séance","just_finished.idle.subtitle":"Cette carte s'allume dès que ta montre synchronise une nouvelle séance.","empty.just_finished.title":"Aucune séance récente","card.activity_trends.title":"Tendances d'Activité","card.activity_trends.subtitle":"14 derniers jours","empty.activity_trends.title":"Pas encore de données de tendances d'activité","card.recovery_balance_trend.title":"Tendance de l'Équilibre de Récupération","card.recovery_balance_trend.subtitle":"14 derniers jours","empty.recovery_balance_trend.title":"Pas encore de données de tendances de récupération","card.readiness_trend.title":"Tendance de Préparation","card.readiness_trend.subtitle":"30 derniers jours","empty.readiness_trend.title":"Pas encore de données de tendances de préparation","stat.cadence":"Cadence","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC moy. som.","stat.sleep_min_hr":"FC min. som.","chip.bedtime":"Coucher {time}","card.activity_calendar.title":"Calendrier d'Activité","card.activity_calendar.subtitle":"6 dernières semaines","empty.activity_calendar.title":"Pas encore d'historique d'entraînement","activity_calendar.active_days_one":"{count} jour actif","activity_calendar.active_days_other":"{count} jours actifs","card.workout_comparison.title":"Comparaison de Séances","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Pas encore assez de séances similaires","empty.workout_comparison.subtitle":"Fais la même activité deux fois pour voir une comparaison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Durée ({delta})","stat.avg_hr_delta":"FC moy. ({delta})","stat.pace_delta":"Allure ({delta})","card.milestones.title":"En Chiffres","card.milestones.subtitle":"Depuis le début","empty.milestones.title":"Pas encore de données cumulées","stat.earth_laps":"Tours de la Terre","stat.marathons":"Marathons","stat.moon_pct":"% jusqu'à la Lune","stat.burgers":"Burgers","card.athlete_profile.title":"Personnalité Sportive","empty.athlete_profile.title":"Pas encore assez de données","personality.activity.cycling":"Cycliste","personality.activity.running":"Coureur","personality.activity.trekking":"Randonneur","personality.activity.walking":"Marcheur","personality.activity.gym":"Athlète de Force","personality.activity.swim":"Nageur","personality.activity.ski":"Skieur","personality.activity.row":"Rameur","personality.activity.other":"Multisportif","personality.schedule.weekend":"Guerrier du Week-end","personality.schedule.weekday":"Régulier en Semaine","personality.schedule.balanced":"Planning Équilibré","personality.time.morning":"Lève-tôt","personality.time.afternoon":"Actif l'Après-midi","personality.time.evening":"Athlète du Soir","personality.time.night":"Oiseau de Nuit","card.pace_trend.title":"Tendance d'Allure","card.pace_trend.subtitle":"{activity} · {count} dernières séances","empty.pace_trend.title":"Pas encore assez de séances similaires","empty.pace_trend.subtitle":"Fais la même activité plusieurs fois pour voir une tendance.","pace_trend.faster":"S'améliore","pace_trend.slower":"Ralentit","pace_trend.steady":"Stable","card.lap_splits.title":"Temps par Tour","empty.lap_splits.title":"Aucune donnée de tour","empty.lap_splits.subtitle":"Tous les entraînements n'ont pas de tours - le prochain qui en a remplira ceci.","stat.laps":"Tours","stat.fastest_lap":"Tour le plus rapide","label.lap":"Tour {n}","card.training_effect_trend.title":"Tendance de l'Effet d'Entraînement","empty.training_effect_trend.title":"Pas encore de données d'effet d'entraînement"},es:{"stat.distance":"Distancia","stat.duration":"Duración","stat.avg_speed":"Vel. media","stat.avg_pace":"Ritmo medio","stat.avg_hr":"FC media","stat.max_hr":"FC máx.","stat.training_effect":"Efecto del entrenamiento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensación","stat.energy":"Energía","stat.time":"Tiempo","stat.workouts":"Entrenamientos","stat.steps":"Pasos","stat.heart_rate":"Frecuencia cardíaca","stat.quality":"Calidad","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC reposo","stat.resting_hr_delta":"FC reposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nivel de estrés","stat.recovery_window":"Tiempo de recuperación","stat.ctl":"CTL · forma","stat.atl":"ATL · fatiga","stat.tsb":"TSB · forma","stat.readiness":"Preparación","stat.recovery_balance":"Equilibrio de recuperación","stat.training_suggestion":"Sugerencia de hoy","stat.volume":"Volumen","stat.intensity":"Intensidad","stat.consistency":"Constancia","stat.recovery":"Recuperación","stat.variety":"Variedad","card.hr_zones.title":"Zonas de Frecuencia Cardíaca","card.hr_zones.last_workout":"Último entrenamiento","card.sleep_readiness.title":"Sueño y Preparación","card.sleep_readiness.subtitle_no_wake":"{duration} de sueño","card.sleep_readiness.subtitle_with_wake":"{duration} de sueño · despertar a las {time}","card.recovery.title":"Recuperación","card.training_load.title":"Carga de Entrenamiento","card.training_load.subtitle_fallback":"Tendencia de forma (CTL)","card.week_stats.title":"Esta Semana y Total Histórico","card.week_stats.subtitle":"Últimos 7 días","card.week_stats.lifetime_title":"Total por actividad","card.today.title":"Hoy","card.today.subtitle":"En vivo desde tu reloj","card.training_status.title":"Estado de entrenamiento","card.training_profile.title":"Perfil de entrenamiento","card.training_profile.subtitle":"Tu entrenamiento de un vistazo","card.heart_rate.title":"Frecuencia cardíaca","empty.last_workout.title":"Sin entrenamiento reciente","empty.last_workout.subtitle":"Sincroniza tu reloj con la app Suunto para verlo aquí.","empty.hr_zones.title":"Sin datos de zonas","empty.hr_zones.subtitle":"Tu próximo entrenamiento al aire libre con banda de frecuencia cardíaca completará esto.","empty.sleep_readiness.title":"Aún sin datos de sueño","empty.sleep_readiness.subtitle":"Usa tu reloj para dormir para verlo aquí.","empty.recovery.title":"Aún sin datos de recuperación","empty.training_load.title":"Calculando la carga de entrenamiento","empty.training_load.subtitle":"Necesita algo de historial de entrenamientos para calcularse - vuelve a comprobarlo tras algunas sesiones.","empty.week_stats.title":"Aún sin historial de entrenamientos","empty.today.title":"Aún sin datos en vivo","empty.training_status.title":"Aún no hay suficientes datos","empty.training_status.subtitle":"Necesita algo de historial de entrenamiento para calcularlo.","empty.training_profile.title":"Aún no hay suficientes datos","empty.training_profile.subtitle":"Necesita más datos de sensores para calcular tu perfil.","empty.heart_rate.title":"Aún sin datos de frecuencia cardíaca","empty.loading":"Cargando...","empty.generic_error":"No se pudieron cargar los datos de Suunto.","error.no_device":"No se encontró ningún dispositivo Suunto - ¿está configurada la integración suunto_app?","error.multiple_devices":'Se encontraron varios dispositivos Suunto - define "device_id" en la configuración de la tarjeta.',"error.device_missing":'El dispositivo configurado "{device}" no tiene entidades suunto_app.',"band.readiness.great":"Excelente","band.readiness.fair":"Aceptable","band.readiness.low":"Baja","band.recovery.well":"Bien recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baja recuperación","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"Recuperando · quedan {time}","band.hrv.low":"HRV baja","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muy fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baja","band.acwr.high":"Carga alta - riesgo de lesión","band.suggestion.hard":"A por ello","band.suggestion.moderate":"Esfuerzo moderado","band.suggestion.easy":"Tómatelo con calma","band.suggestion.rest":"Día de descanso","chip.workout_logged_today":"Entrenamiento registrado hoy","chip.workout_today":"Entrenamiento hoy","chip.recovering":"Recuperando","chip.nap":"{minutes} min de siesta","chip.nap_earlier":"{minutes} min de siesta (antes)","chip.workouts_30d":"{count} entrenamientos en los últimos 30 días","chip.acwr":"ACWR {value} · {label}","profile.summary":"Más fuerte en {strong} · más débil en {light}","chip.more_activity_one":"+{count} actividad más","chip.more_activity_other":"+{count} actividades más","chip.unusual_recovery":"Recuperación inusual","chip.days_since_one":"{count} día desde el último entrenamiento","chip.days_since_other":"{count} días desde el último entrenamiento","achievement.count_one":"{count} logro","achievement.count_other":"{count} logros","achievement.rank":"Puesto #{rank} en esta ruta","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Ligero","label.rem":"REM","editor.auto_detect":"Esta tarjeta detecta automáticamente tu dispositivo Suunto - no se necesita configuración.","editor.pick_device":"Se encontraron varios dispositivos Suunto - elige cuál debe usar esta tarjeta.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totales Históricos","card.lifetime.subtitle":"Desde el inicio","stat.active_days":"Días activos","empty.lifetime.title":"Aún sin totales históricos","card.recent_workouts.title":"Entrenamientos Recientes","empty.recent_workouts.title":"Sin entrenamientos recientes","card.elevation.title":"Altitud y Ascensos","stat.ascent":"Ascenso","stat.descent":"Descenso","stat.ascent_time":"T. ascenso","stat.descent_time":"T. descenso","stat.min_altitude":"Altitud mín.","stat.max_altitude":"Altitud máx.","stat.ascent_rate":"Velocidad de ascenso","empty.elevation.title":"Sin datos de altitud","empty.elevation.subtitle":"Solo los entrenamientos al aire libre con altímetro registran esto.","card.location.title":"Ubicación de Inicio","location.open_in_maps":"Abrir en Maps","empty.location.title":"Sin datos de ubicación","empty.location.subtitle":"Los entrenamientos en interiores no tienen punto de inicio GPS.","card.fitness.title":"Forma Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Edad física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Aún sin datos de forma física","empty.fitness.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","card.pmc.title":"Gestión del Rendimiento","card.pmc.subtitle":"Tendencia de 90 días","card.recovery_trends.title":"Tendencias de Recuperación","card.recovery_trends.subtitle":"Referencia de 30 días","empty.recovery_trends.title":"Aún sin datos de tendencias de recuperación","card.weekly_volume.title":"Volumen Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Aún sin datos de volumen semanal","stat.average":"Media","stat.total":"Total","card.hr_curve.title":"Curva de Frecuencia Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Ahora","stat.hr_min":"Mín. de hoy","stat.hr_max":"Máx. de hoy","empty.hr_curve.title":"Aún sin datos de FC en vivo","empty.hr_curve.subtitle":"Usa y sincroniza tu reloj para ver aquí la curva de hoy.","card.sleep_trends.title":"Tendencias de Sueño","card.sleep_trends.subtitle":"Últimas 30 noches","empty.sleep_trends.title":"Aún sin datos de tendencias de sueño","card.weekly_goal.title":"Objetivo Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Aún sin distancia semanal","editor.goal_label":"Objetivo semanal (km)","card.streak.title":"Racha de Actividad","card.streak.subtitle":"Últimos 14 días","streak.window_count_one":"{count} día activo","streak.window_count_other":"{count} días activos","streak.days_one":"{count} día de racha","streak.days_other":"{count} días de racha","streak.none":"Sin racha activa - muévete hoy","empty.streak.title":"Aún sin historial de entrenamientos","just_finished.title":"¡Buen trabajo!","just_finished.idle.title":"Esperando tu próximo entrenamiento","just_finished.idle.subtitle":"Esta tarjeta se activa en cuanto tu reloj sincronice un entrenamiento nuevo.","empty.just_finished.title":"Sin entrenamiento reciente","card.activity_trends.title":"Tendencias de Actividad","card.activity_trends.subtitle":"Últimos 14 días","empty.activity_trends.title":"Aún sin datos de tendencias de actividad","card.recovery_balance_trend.title":"Tendencia del Equilibrio de Recuperación","card.recovery_balance_trend.subtitle":"Últimos 14 días","empty.recovery_balance_trend.title":"Aún sin datos de tendencias de recuperación","card.readiness_trend.title":"Tendencia de Preparación","card.readiness_trend.subtitle":"Últimos 30 días","empty.readiness_trend.title":"Aún sin datos de tendencias de preparación","stat.cadence":"Cadencia","stat.pct_hrmax":"% de FC máx.","stat.sleep_avg_hr":"FC med. sueño","stat.sleep_min_hr":"FC mín. sueño","chip.bedtime":"Acostado {time}","card.activity_calendar.title":"Calendario de Actividad","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Aún sin historial de entrenamientos","activity_calendar.active_days_one":"{count} día activo","activity_calendar.active_days_other":"{count} días activos","card.workout_comparison.title":"Comparación de Entrenamientos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Aún no hay suficientes entrenamientos similares","empty.workout_comparison.subtitle":"Haz la misma actividad dos veces para ver una comparación.","stat.distance_delta":"Distancia ({delta})","stat.duration_delta":"Duración ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"En Números","card.milestones.subtitle":"Desde que empezaste","empty.milestones.title":"Aún sin datos históricos","stat.earth_laps":"Vueltas a la Tierra","stat.marathons":"Maratones","stat.moon_pct":"% hasta la Luna","stat.burgers":"Hamburguesas","card.athlete_profile.title":"Personalidad Deportiva","empty.athlete_profile.title":"Aún no hay suficientes datos","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Excursionista","personality.activity.walking":"Caminante","personality.activity.gym":"Atleta de Fuerza","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remero","personality.activity.other":"Multideportista","personality.schedule.weekend":"Guerrero de Fin de Semana","personality.schedule.weekday":"Regular Entre Semana","personality.schedule.balanced":"Horario Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Activo por la Tarde","personality.time.evening":"Atleta Vespertino","personality.time.night":"Búho Nocturno","card.pace_trend.title":"Tendencia de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sesiones","empty.pace_trend.title":"Aún no hay suficientes entrenamientos similares","empty.pace_trend.subtitle":"Haz la misma actividad varias veces para ver una tendencia.","pace_trend.faster":"Mejorando el ritmo","pace_trend.slower":"Perdiendo ritmo","pace_trend.steady":"Ritmo estable","card.lap_splits.title":"Tiempos por Vuelta","empty.lap_splits.title":"Sin datos de vueltas","empty.lap_splits.subtitle":"No todos los entrenamientos tienen vueltas - el próximo que las tenga completará esto.","stat.laps":"Vueltas","stat.fastest_lap":"Vuelta más rápida","label.lap":"Vuelta {n}","card.training_effect_trend.title":"Tendencia del Efecto de Entrenamiento","empty.training_effect_trend.title":"Aún sin datos de efecto de entrenamiento"},it:{"stat.distance":"Distanza","stat.duration":"Durata","stat.avg_speed":"Vel. media","stat.avg_pace":"Passo medio","stat.avg_hr":"FC media","stat.max_hr":"FC max","stat.training_effect":"Effetto allenamento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensazione","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Allenamenti","stat.steps":"Passi","stat.heart_rate":"Frequenza cardiaca","stat.quality":"Qualità","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC riposo","stat.resting_hr_delta":"FC riposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Livello di stress","stat.recovery_window":"Tempo di recupero","stat.ctl":"CTL · forma","stat.atl":"ATL · affaticamento","stat.tsb":"TSB · forma","stat.readiness":"Prontezza","stat.recovery_balance":"Equilibrio di recupero","stat.training_suggestion":"Suggerimento di oggi","stat.volume":"Volume","stat.intensity":"Intensità","stat.consistency":"Costanza","stat.recovery":"Recupero","stat.variety":"Varietà","card.hr_zones.title":"Zone di Frequenza Cardiaca","card.hr_zones.last_workout":"Ultimo allenamento","card.sleep_readiness.title":"Sonno e Prontezza","card.sleep_readiness.subtitle_no_wake":"{duration} di sonno","card.sleep_readiness.subtitle_with_wake":"{duration} di sonno · sveglia alle {time}","card.recovery.title":"Recupero","card.training_load.title":"Carico di Allenamento","card.training_load.subtitle_fallback":"Andamento forma (CTL)","card.week_stats.title":"Questa Settimana e Totale","card.week_stats.subtitle":"Ultimi 7 giorni","card.week_stats.lifetime_title":"Totale per attività","card.today.title":"Oggi","card.today.subtitle":"In diretta dall'orologio","card.training_status.title":"Stato dell'allenamento","card.training_profile.title":"Profilo di allenamento","card.training_profile.subtitle":"Il tuo allenamento a colpo d'occhio","card.heart_rate.title":"Frequenza cardiaca","empty.last_workout.title":"Nessun allenamento recente","empty.last_workout.subtitle":"Sincronizza l'orologio con l'app Suunto per vederlo qui.","empty.hr_zones.title":"Nessun dato sulle zone","empty.hr_zones.subtitle":"Il tuo prossimo allenamento all'aperto con fascia cardio completerà questi dati.","empty.sleep_readiness.title":"Ancora nessun dato sul sonno","empty.sleep_readiness.subtitle":"Indossa l'orologio per dormire per vederlo qui.","empty.recovery.title":"Ancora nessun dato sul recupero","empty.training_load.title":"Calcolo del carico di allenamento","empty.training_load.subtitle":"Serve un po' di storico allenamenti per calcolarlo - ricontrolla dopo qualche sessione.","empty.week_stats.title":"Ancora nessuno storico allenamenti","empty.today.title":"Ancora nessun dato in tempo reale","empty.training_status.title":"Dati non ancora sufficienti","empty.training_status.subtitle":"Serve un po' di cronologia di allenamento per calcolarlo.","empty.training_profile.title":"Dati non ancora sufficienti","empty.training_profile.subtitle":"Servono più dati dai sensori per calcolare il tuo profilo.","empty.heart_rate.title":"Ancora nessun dato sulla frequenza cardiaca","empty.loading":"Caricamento...","empty.generic_error":"Impossibile caricare i dati Suunto.","error.no_device":"Nessun dispositivo Suunto trovato - l'integrazione suunto_app è configurata?","error.multiple_devices":'Trovati più dispositivi Suunto - imposta "device_id" nella configurazione della scheda.',"error.device_missing":'Il dispositivo configurato "{device}" non ha entità suunto_app.',"band.readiness.great":"Ottima","band.readiness.fair":"Discreta","band.readiness.low":"Bassa","band.recovery.well":"Ben recuperato","band.recovery.partial":"Parzialmente recuperato","band.recovery.low":"Basso recupero","band.recovery.fully":"Completamente recuperato","band.recovery.recovering":"Recupero in corso · {time} rimanenti","band.hrv.low":"HRV bassa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV bilanciata","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Affaticato","band.form.very_fatigued":"Molto affaticato","band.acwr.safe":"Zona sicura","band.acwr.low":"Carico basso","band.acwr.high":"Carico alto - rischio di infortunio","band.suggestion.hard":"Dai il massimo","band.suggestion.moderate":"Sforzo moderato","band.suggestion.easy":"Vacci piano","band.suggestion.rest":"Giorno di riposo","chip.workout_logged_today":"Allenamento registrato oggi","chip.workout_today":"Allenamento oggi","chip.recovering":"In recupero","chip.nap":"{minutes} min di pisolino","chip.nap_earlier":"{minutes} min di pisolino (prima)","chip.workouts_30d":"{count} allenamenti negli ultimi 30 giorni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Punto forte: {strong} · punto debole: {light}","chip.more_activity_one":"+{count} altra attività","chip.more_activity_other":"+{count} altre attività","chip.unusual_recovery":"Recupero insolito","chip.days_since_one":"{count} giorno dall'ultimo allenamento","chip.days_since_other":"{count} giorni dall'ultimo allenamento","achievement.count_one":"{count} traguardo","achievement.count_other":"{count} traguardi","achievement.rank":"Posizione #{rank} su questo percorso","label.zone":"Zona {n}","label.deep":"Profondo","label.light":"Leggero","label.rem":"REM","editor.auto_detect":"Questa scheda rileva automaticamente il tuo dispositivo Suunto - nessuna configurazione necessaria.","editor.pick_device":"Trovati più dispositivi Suunto - scegli quale deve usare questa scheda.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totali di Sempre","card.lifetime.subtitle":"Dall'inizio","stat.active_days":"Giorni attivi","empty.lifetime.title":"Ancora nessun totale","card.recent_workouts.title":"Allenamenti Recenti","empty.recent_workouts.title":"Nessun allenamento recente","card.elevation.title":"Altitudine e Salite","stat.ascent":"Salita","stat.descent":"Discesa","stat.ascent_time":"Tempo salita","stat.descent_time":"Tempo discesa","stat.min_altitude":"Altitudine min.","stat.max_altitude":"Altitudine max.","stat.ascent_rate":"Velocità di salita","empty.elevation.title":"Nessun dato sull'altitudine","empty.elevation.subtitle":"Solo gli allenamenti all'aperto con altimetro registrano questi dati.","card.location.title":"Posizione di Partenza","location.open_in_maps":"Apri in Maps","empty.location.title":"Nessun dato sulla posizione","empty.location.subtitle":"Gli allenamenti al chiuso non hanno un punto di partenza GPS.","card.fitness.title":"Forma Fisica","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max stim.","stat.fitness_age":"Età fisica","fitness.measured":"Misurato {time} · {activity}","empty.fitness.title":"Ancora nessun dato sulla forma fisica","empty.fitness.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","card.pmc.title":"Gestione delle Prestazioni","card.pmc.subtitle":"Andamento di 90 giorni","card.recovery_trends.title":"Tendenze di Recupero","card.recovery_trends.subtitle":"Riferimento di 30 giorni","empty.recovery_trends.title":"Ancora nessun dato sulle tendenze di recupero","card.weekly_volume.title":"Volume Settimanale","card.weekly_volume.subtitle":"Ultime 12 settimane","empty.weekly_volume.title":"Ancora nessun dato sul volume settimanale","stat.average":"Media","stat.total":"Totale","card.hr_curve.title":"Curva della Frequenza Cardiaca","card.hr_curve.subtitle":"Ultime 24 ore","stat.hr_now":"Ora","stat.hr_min":"Min. di oggi","stat.hr_max":"Max. di oggi","empty.hr_curve.title":"Ancora nessun dato di FC in tempo reale","empty.hr_curve.subtitle":"Indossa e sincronizza l'orologio per vedere qui la curva di oggi.","card.sleep_trends.title":"Andamento del Sonno","card.sleep_trends.subtitle":"Ultime 30 notti","empty.sleep_trends.title":"Ancora nessun dato sull'andamento del sonno","card.weekly_goal.title":"Obiettivo Settimanale","card.weekly_goal.subtitle":"{value} di {goal} km","empty.weekly_goal.title":"Ancora nessuna distanza settimanale","editor.goal_label":"Obiettivo settimanale (km)","card.streak.title":"Serie di Attività","card.streak.subtitle":"Ultimi 14 giorni","streak.window_count_one":"{count} giorno attivo","streak.window_count_other":"{count} giorni attivi","streak.days_one":"{count} giorno di serie","streak.days_other":"{count} giorni di serie","streak.none":"Nessuna serie attiva - inizia oggi","empty.streak.title":"Ancora nessuno storico allenamenti","just_finished.title":"Ottimo lavoro!","just_finished.idle.title":"In attesa del tuo prossimo allenamento","just_finished.idle.subtitle":"Questa scheda si attiva appena l'orologio sincronizza un nuovo allenamento.","empty.just_finished.title":"Nessun allenamento recente","card.activity_trends.title":"Andamento dell'Attività","card.activity_trends.subtitle":"Ultimi 14 giorni","empty.activity_trends.title":"Ancora nessun dato sull'andamento dell'attività","card.recovery_balance_trend.title":"Andamento dell'Equilibrio di Recupero","card.recovery_balance_trend.subtitle":"Ultimi 14 giorni","empty.recovery_balance_trend.title":"Ancora nessun dato sull'andamento del recupero","card.readiness_trend.title":"Andamento della Prontezza","card.readiness_trend.subtitle":"Ultimi 30 giorni","empty.readiness_trend.title":"Ancora nessun dato sull'andamento della prontezza","stat.cadence":"Cadenza","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC med. sonno","stat.sleep_min_hr":"FC min. sonno","chip.bedtime":"A letto alle {time}","card.activity_calendar.title":"Calendario delle Attività","card.activity_calendar.subtitle":"Ultime 6 settimane","empty.activity_calendar.title":"Ancora nessuno storico allenamenti","activity_calendar.active_days_one":"{count} giorno attivo","activity_calendar.active_days_other":"{count} giorni attivi","card.workout_comparison.title":"Confronto Allenamenti","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ancora non abbastanza allenamenti simili","empty.workout_comparison.subtitle":"Fai la stessa attività due volte per vedere un confronto.","stat.distance_delta":"Distanza ({delta})","stat.duration_delta":"Durata ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Passo ({delta})","card.milestones.title":"In Numeri","card.milestones.subtitle":"Da quando hai iniziato","empty.milestones.title":"Ancora nessun dato totale","stat.earth_laps":"Giri della Terra","stat.marathons":"Maratone","stat.moon_pct":"% verso la Luna","stat.burgers":"Hamburger","card.athlete_profile.title":"Personalità Sportiva","empty.athlete_profile.title":"Ancora non abbastanza dati","personality.activity.cycling":"Ciclista","personality.activity.running":"Corridore","personality.activity.trekking":"Escursionista","personality.activity.walking":"Camminatore","personality.activity.gym":"Atleta di Forza","personality.activity.swim":"Nuotatore","personality.activity.ski":"Sciatore","personality.activity.row":"Vogatore","personality.activity.other":"Multisportivo","personality.schedule.weekend":"Guerriero del Weekend","personality.schedule.weekday":"Regolare in Settimana","personality.schedule.balanced":"Programma Equilibrato","personality.time.morning":"Mattiniero","personality.time.afternoon":"Attivo di Pomeriggio","personality.time.evening":"Atleta della Sera","personality.time.night":"Nottambulo","card.pace_trend.title":"Andamento del Passo","card.pace_trend.subtitle":"{activity} · ultime {count} sessioni","empty.pace_trend.title":"Ancora non abbastanza allenamenti simili","empty.pace_trend.subtitle":"Fai la stessa attività alcune volte per vedere un andamento.","pace_trend.faster":"In miglioramento","pace_trend.slower":"In rallentamento","pace_trend.steady":"Passo stabile","card.lap_splits.title":"Tempi sul Giro","empty.lap_splits.title":"Nessun dato sui giri","empty.lap_splits.subtitle":"Non tutti gli allenamenti hanno giri - il prossimo che li avrà completerà questi dati.","stat.laps":"Giri","stat.fastest_lap":"Giro più veloce","label.lap":"Giro {n}","card.training_effect_trend.title":"Andamento dell'Effetto Allenamento","empty.training_effect_trend.title":"Ancora nessun dato sull'effetto allenamento"},nl:{"stat.distance":"Afstand","stat.duration":"Duur","stat.avg_speed":"Gem. snelheid","stat.avg_pace":"Gem. tempo","stat.avg_hr":"Gem. hartslag","stat.max_hr":"Max. hartslag","stat.training_effect":"Trainingseffect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gevoel","stat.energy":"Energie","stat.time":"Tijd","stat.workouts":"Work-outs","stat.steps":"Stappen","stat.heart_rate":"Hartslag","stat.quality":"Kwaliteit","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Rustpols","stat.resting_hr_delta":"Rustpols ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stressniveau","stat.recovery_window":"Hersteltijd","stat.ctl":"CTL · fitheid","stat.atl":"ATL · vermoeidheid","stat.tsb":"TSB · vorm","stat.readiness":"Gereedheid","stat.recovery_balance":"Herstelbalans","stat.training_suggestion":"Advies voor vandaag","stat.volume":"Volume","stat.intensity":"Intensiteit","stat.consistency":"Consistentie","stat.recovery":"Herstel","stat.variety":"Variatie","card.hr_zones.title":"Hartslagzones","card.hr_zones.last_workout":"Laatste training","card.sleep_readiness.title":"Slaap & Gereedheid","card.sleep_readiness.subtitle_no_wake":"{duration} geslapen","card.sleep_readiness.subtitle_with_wake":"{duration} geslapen · wakker om {time}","card.recovery.title":"Herstel","card.training_load.title":"Trainingsbelasting","card.training_load.subtitle_fallback":"Fitheidstrend (CTL)","card.week_stats.title":"Deze Week & Totaal","card.week_stats.subtitle":"Laatste 7 dagen","card.week_stats.lifetime_title":"Totaal per activiteit","card.today.title":"Vandaag","card.today.subtitle":"Live vanaf je horloge","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofiel","card.training_profile.subtitle":"Jouw training in één oogopslag","card.heart_rate.title":"Hartslag","empty.last_workout.title":"Geen recente training","empty.last_workout.subtitle":"Synchroniseer je horloge met de Suunto-app om het hier te zien.","empty.hr_zones.title":"Geen zonegegevens","empty.hr_zones.subtitle":"Je volgende buitentraining met hartslagband vult dit aan.","empty.sleep_readiness.title":"Nog geen slaapgegevens","empty.sleep_readiness.subtitle":"Draag je horloge tijdens het slapen om dit hier te zien.","empty.recovery.title":"Nog geen herstelgegevens","empty.training_load.title":"Trainingsbelasting wordt berekend","empty.training_load.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen - kijk later nog eens na een paar trainingen.","empty.week_stats.title":"Nog geen traininggeschiedenis","empty.today.title":"Nog geen live gegevens","empty.training_status.title":"Nog niet genoeg gegevens","empty.training_status.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen.","empty.training_profile.title":"Nog niet genoeg gegevens","empty.training_profile.subtitle":"Heeft meer sensorgegevens nodig om je profiel te berekenen.","empty.heart_rate.title":"Nog geen hartslaggegevens","empty.loading":"Laden...","empty.generic_error":"Suunto-gegevens konden niet worden geladen.","error.no_device":"Geen Suunto-apparaat gevonden - is de suunto_app-integratie ingesteld?","error.multiple_devices":'Meerdere Suunto-apparaten gevonden - stel "device_id" in de kaartconfiguratie in.',"error.device_missing":'Geconfigureerd apparaat "{device}" heeft geen suunto_app-entiteiten.',"band.readiness.great":"Uitstekend","band.readiness.fair":"Redelijk","band.readiness.low":"Laag","band.recovery.well":"Goed hersteld","band.recovery.partial":"Gedeeltelijk hersteld","band.recovery.low":"Laag herstel","band.recovery.fully":"Volledig hersteld","band.recovery.recovering":"Aan het herstellen · {time} resterend","band.hrv.low":"HRV laag","band.hrv.high":"HRV hoog","band.hrv.balanced":"HRV in balans","band.form.fresh":"Fris","band.form.neutral":"Neutraal","band.form.fatigued":"Vermoeid","band.form.very_fatigued":"Erg vermoeid","band.acwr.safe":"Veilige zone","band.acwr.low":"Lage belasting","band.acwr.high":"Hoge belasting - blessurerisico","band.suggestion.hard":"Ga ervoor","band.suggestion.moderate":"Gematigde inspanning","band.suggestion.easy":"Rustig aan","band.suggestion.rest":"Rustdag","chip.workout_logged_today":"Training vandaag geregistreerd","chip.workout_today":"Training vandaag","chip.recovering":"Herstellen","chip.nap":"{minutes} min dutje","chip.nap_earlier":"{minutes} min dutje (eerder)","chip.workouts_30d":"{count} trainingen in de laatste 30 dagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Sterkst in {strong} · zwakst in {light}","chip.more_activity_one":"+{count} andere activiteit","chip.more_activity_other":"+{count} andere activiteiten","chip.unusual_recovery":"Afwijkend herstel","chip.days_since_one":"{count} dag sinds laatste training","chip.days_since_other":"{count} dagen sinds laatste training","achievement.count_one":"{count} prestatie","achievement.count_other":"{count} prestaties","achievement.rank":"Positie #{rank} op deze route","label.zone":"Zone {n}","label.deep":"Diep","label.light":"Licht","label.rem":"REM","editor.auto_detect":"Deze kaart detecteert automatisch je Suunto-apparaat - geen configuratie nodig.","editor.pick_device":"Meerdere Suunto-apparaten gevonden - kies welke deze kaart moet gebruiken.","editor.device_label":"Suunto-apparaat","card.lifetime.title":"Totalen Aller Tijden","card.lifetime.subtitle":"Sinds het begin","stat.active_days":"Actieve dagen","empty.lifetime.title":"Nog geen totalen","card.recent_workouts.title":"Recente Trainingen","empty.recent_workouts.title":"Geen recente trainingen","card.elevation.title":"Hoogtemeters & Klimmen","stat.ascent":"Stijging","stat.descent":"Daling","stat.ascent_time":"Stijgtijd","stat.descent_time":"Daaltijd","stat.min_altitude":"Min. hoogte","stat.max_altitude":"Max. hoogte","stat.ascent_rate":"Stijgsnelheid","empty.elevation.title":"Geen hoogtegegevens","empty.elevation.subtitle":"Alleen buitentrainingen met een barometer registreren dit.","card.location.title":"Startlocatie","location.open_in_maps":"Openen in Maps","empty.location.title":"Geen locatiegegevens","empty.location.subtitle":"Binnentrainingen hebben geen GPS-startpunt.","card.fitness.title":"Fitheid","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitheidsleeftijd","fitness.measured":"Gemeten {time} · {activity}","empty.fitness.title":"Nog geen fitheidsgegevens","empty.fitness.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","card.pmc.title":"Prestatiebeheer","card.pmc.subtitle":"90-dagen trend","card.recovery_trends.title":"Hersteltrends","card.recovery_trends.subtitle":"30-dagen basiswaarde","empty.recovery_trends.title":"Nog geen hersteltrendgegevens","card.weekly_volume.title":"Wekelijks Volume","card.weekly_volume.subtitle":"Laatste 12 weken","empty.weekly_volume.title":"Nog geen gegevens over wekelijks volume","stat.average":"Gemiddeld","stat.total":"Totaal","card.hr_curve.title":"Hartslagcurve","card.hr_curve.subtitle":"Laatste 24 uur","stat.hr_now":"Nu","stat.hr_min":"Min. vandaag","stat.hr_max":"Max. vandaag","empty.hr_curve.title":"Nog geen live hartslaggegevens","empty.hr_curve.subtitle":"Draag en synchroniseer je horloge om de curve van vandaag hier te zien.","card.sleep_trends.title":"Slaaptrends","card.sleep_trends.subtitle":"Laatste 30 nachten","empty.sleep_trends.title":"Nog geen slaaptrendgegevens","card.weekly_goal.title":"Weekdoel","card.weekly_goal.subtitle":"{value} van {goal} km","empty.weekly_goal.title":"Nog geen wekelijkse afstand","editor.goal_label":"Weekdoel (km)","card.streak.title":"Activiteitenreeks","card.streak.subtitle":"Laatste 14 dagen","streak.window_count_one":"{count} actieve dag","streak.window_count_other":"{count} actieve dagen","streak.days_one":"{count} dag op rij","streak.days_other":"{count} dagen op rij","streak.none":"Geen actieve reeks - kom vandaag in beweging","empty.streak.title":"Nog geen traininggeschiedenis","just_finished.title":"Goed gedaan!","just_finished.idle.title":"Wachten op je volgende training","just_finished.idle.subtitle":"Deze kaart licht op zodra je horloge een nieuwe training synchroniseert.","empty.just_finished.title":"Geen recente training","card.activity_trends.title":"Activiteitstrends","card.activity_trends.subtitle":"Laatste 14 dagen","empty.activity_trends.title":"Nog geen activiteitstrendgegevens","card.recovery_balance_trend.title":"Herstelbalanstrend","card.recovery_balance_trend.subtitle":"Laatste 14 dagen","empty.recovery_balance_trend.title":"Nog geen hersteltrendgegevens","card.readiness_trend.title":"Gereedheidstrend","card.readiness_trend.subtitle":"Laatste 30 dagen","empty.readiness_trend.title":"Nog geen gereedheidstrendgegevens","stat.cadence":"Cadans","stat.pct_hrmax":"% van max. hartslag","stat.sleep_avg_hr":"Gem. slaappols","stat.sleep_min_hr":"Min. slaappols","chip.bedtime":"Naar bed {time}","card.activity_calendar.title":"Activiteitenkalender","card.activity_calendar.subtitle":"Laatste 6 weken","empty.activity_calendar.title":"Nog geen traininggeschiedenis","activity_calendar.active_days_one":"{count} actieve dag","activity_calendar.active_days_other":"{count} actieve dagen","card.workout_comparison.title":"Trainingsvergelijking","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Nog niet genoeg vergelijkbare trainingen","empty.workout_comparison.subtitle":"Doe dezelfde activiteit twee keer om een vergelijking te zien.","stat.distance_delta":"Afstand ({delta})","stat.duration_delta":"Duur ({delta})","stat.avg_hr_delta":"Gem. hartslag ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"In Cijfers","card.milestones.subtitle":"Sinds je begon","empty.milestones.title":"Nog geen totaalgegevens","stat.earth_laps":"Rondjes om de aarde","stat.marathons":"Marathons","stat.moon_pct":"% naar de maan","stat.burgers":"Hamburgers","card.athlete_profile.title":"Trainingspersoonlijkheid","empty.athlete_profile.title":"Nog niet genoeg gegevens","personality.activity.cycling":"Fietser","personality.activity.running":"Hardloper","personality.activity.trekking":"Wandelaar","personality.activity.walking":"Loper","personality.activity.gym":"Krachtsporter","personality.activity.swim":"Zwemmer","personality.activity.ski":"Skiër","personality.activity.row":"Roeier","personality.activity.other":"Multisporter","personality.schedule.weekend":"Weekendkrijger","personality.schedule.weekday":"Doordeweekse Sporter","personality.schedule.balanced":"Gebalanceerd Schema","personality.time.morning":"Vroege Vogel","personality.time.afternoon":"Middagsporter","personality.time.evening":"Avondsporter","personality.time.night":"Nachtuil","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · laatste {count} sessies","empty.pace_trend.title":"Nog niet genoeg vergelijkbare trainingen","empty.pace_trend.subtitle":"Doe dezelfde activiteit een paar keer om een trend te zien.","pace_trend.faster":"Wordt sneller","pace_trend.slower":"Wordt langzamer","pace_trend.steady":"Stabiel tempo","card.lap_splits.title":"Rondetijden","empty.lap_splits.title":"Geen rondegegevens","empty.lap_splits.subtitle":"Niet elke training heeft ronden - de volgende met ronden vult dit aan.","stat.laps":"Ronden","stat.fastest_lap":"Snelste ronde","label.lap":"Ronde {n}","card.training_effect_trend.title":"Trainingseffecttrend","empty.training_effect_trend.title":"Nog geen trainingseffectgegevens"}};function St(t,e,a){let i=function(t){const e=t?.language??"en",a=e.split("-")[0]?.toLowerCase();return xt[a]??$t}(t)[e]??$t[e];if(a)for(const[t,e]of Object.entries(a))i=i.replace(`{${t}}`,String(e));return i}function zt(t,e,a,i,s){return St(t,1===e?a:i,{count:e,...s})}let At=class extends lt{setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return U;return wt(this.hass).length<=1?I`<div class="hint">${St(this.hass,"editor.auto_detect")}</div>`:I`
      <ha-device-picker
        .hass=${this.hass}
        .value=${this._config.device_id??""}
        .label=${St(this.hass,"editor.device_label")}
        .includeDeviceClasses=${void 0}
        @value-changed=${this._deviceChanged}
      ></ha-device-picker>
      <div class="hint">${St(this.hass,"editor.pick_device")}</div>
    `}_deviceChanged(t){if(!this._config)return;const e=t.detail.value,a={...this._config,device_id:e||void 0};yt(this,"config-changed",{config:a})}};At.styles=n`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
  `,t([mt({attribute:!1})],At.prototype,"hass",void 0),t([vt()],At.prototype,"_config",void 0),At=t([ut("suunto-device-editor")],At);class Tt extends lt{_syncTheme(){this.classList.toggle("dark",Boolean(this.hass?.themes?.darkMode))}_resolveEntities(){if(!this.hass)return{error:this._message("mdi:alert-circle-outline",St(this.hass,"empty.loading"))};try{const t=function(t,e){const a=wt(t);if(e){if(!a.includes(e))throw new bt("device_missing",e);return e}if(1===a.length)return a[0];if(0===a.length)throw new bt("no_device");throw new bt("multiple_devices")}(this.hass,this._configuredDeviceId);return{map:kt(this.hass,t)}}catch(t){return{error:this._message("mdi:alert-circle-outline",this._configErrorMessage(t))}}}_configErrorMessage(t){return t instanceof bt?"device_missing"===t.code?St(this.hass,"error.device_missing",{device:t.deviceId??""}):"multiple_devices"===t.code?St(this.hass,"error.multiple_devices"):St(this.hass,"error.no_device"):St(this.hass,"empty.generic_error")}_message(t,e,a){return I`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${t}></ha-icon>
          <div class="t1">${e}</div>
          ${a?I`<div class="t2">${a}</div>`:U}
        </div>
      </ha-card>
    `}}t([mt({attribute:!1})],Tt.prototype,"hass",void 0);const Ct=n`
  :host {
    --sc-amber: #d98a1d;
    --sc-amber-bg: #fbeed9;
    --sc-pulse: #2e7e9e;
    --sc-pulse-bg: #e4f1f6;
    --sc-chip-bg: rgba(0, 0, 0, 0.05);
    --sc-sev-1: #b9c4cc;
    --sc-sev-2: #7fb3c9;
    --sc-sev-3: #d98a1d;
    --sc-sev-4: #e8843a;
    --sc-sev-5: #c73e3e;
    --sc-good: #4c9a6a;
    --sc-good-bg: #e5f2ea;
    --sc-warn: #d98a1d;
    --sc-warn-bg: #fbeed9;
    --sc-bad: #c73e3e;
    --sc-bad-bg: #fbe6e6;
    --sc-zone-0: #cfd6db;
    --sc-zone-1: #9aa5ad;
    --sc-zone-2: #4f90c4;
    --sc-zone-3: #4c9a6a;
    --sc-zone-4: #e0a63e;
    --sc-zone-5: #c73e3e;
    --sc-sleep-deep: #3d5a80;
    --sc-sleep-light: #6f9bd1;
    --sc-sleep-rem: #a682c9;
  }
  :host(.dark) {
    --sc-amber: #f5b44e;
    --sc-amber-bg: rgba(245, 180, 78, 0.16);
    --sc-pulse: #6fc3e8;
    --sc-pulse-bg: rgba(111, 195, 232, 0.12);
    --sc-chip-bg: rgba(255, 255, 255, 0.08);
    --sc-sev-1: #4a5157;
    --sc-sev-2: #4f90a8;
    --sc-sev-3: #f5b44e;
    --sc-sev-4: #e8843a;
    --sc-sev-5: #e05a5a;
    --sc-good: #5db47f;
    --sc-good-bg: rgba(93, 180, 127, 0.16);
    --sc-warn: #f5b44e;
    --sc-warn-bg: rgba(245, 180, 78, 0.16);
    --sc-bad: #e05a5a;
    --sc-bad-bg: rgba(224, 90, 90, 0.16);
    --sc-zone-0: #3f454a;
    --sc-zone-1: #7c8790;
    --sc-zone-2: #6fb3ea;
    --sc-zone-3: #5db47f;
    --sc-zone-4: #f0954f;
    --sc-zone-5: #e05a5a;
    --sc-sleep-deep: #5b82ab;
    --sc-sleep-light: #7fb4e0;
    --sc-sleep-rem: #b89ce0;
  }
`,Et=n`
  ha-card {
    cursor: pointer;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  ha-card.static {
    cursor: default;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .icon-badge {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--sc-amber-bg);
    color: var(--sc-amber);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }
  .icon-badge.pulse {
    background: var(--sc-pulse-bg);
    color: var(--sc-pulse);
  }
  .icon-badge.tiny {
    width: 24px;
    height: 24px;
    border-radius: 7px;
  }
  .icon-badge.tiny ha-icon {
    --mdc-icon-size: 14px;
  }
  .title-block {
    min-width: 0;
    flex: 1;
  }
  .title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }
  .subtitle {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    margin-top: 1px;
  }
  .chevron {
    color: var(--secondary-text-color);
    flex: none;
  }

  hr {
    border: none;
    border-top: 1px solid var(--divider-color);
    margin: 0;
  }

  .stat-value {
    font-variant-numeric: tabular-nums;
  }

  .bar {
    display: flex;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    background: var(--divider-color);
  }
  .seg {
    min-width: 2px;
  }

  .ring {
    flex: none;
  }

  .sparkline {
    width: 100%;
    height: 56px;
    display: block;
  }

  .scroll-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 320px;
    overflow-y: auto;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    flex: none;
  }

  /*
   * Flexbox, not CSS Grid: a grid with a fixed column count reserves that
   * many track cells per row regardless of how many stats actually render,
   * so a conditionally-hidden stat (or any count that doesn't divide evenly
   * by the column count) leaves visibly empty cells in a trailing row - the
   * "wasted space" bug found 2026-08-10. flex-wrap has no such reserved
   * cells: each row's items always grow to share exactly that row's width,
   * so a partial last row still looks intentional. flex-basis 80px is a
   * minimum, not a fixed width, so this also adapts to the card's real
   * rendered width instead of hardcoding 3-per-row.
   */
  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 8px;
  }
  .stat {
    flex: 1 1 80px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .stat-value {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.2;
    display: flex;
    align-items: baseline;
    gap: 3px;
  }
  .stat-value .unit {
    font-size: 0.68rem;
    font-weight: 500;
    color: var(--secondary-text-color);
  }
  .stat-label {
    font-size: 0.68rem;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .stat.hr .stat-value {
    color: var(--sc-pulse);
  }
  .stat.good .stat-value {
    color: var(--sc-good);
  }
  .stat.bad .stat-value {
    color: var(--sc-bad);
  }

  .secondary {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }
  .sec-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .sec-value {
    font-size: 0.85rem;
    font-weight: 600;
  }
  .sec-unit {
    font-size: 0.66rem;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .sec-label {
    font-size: 0.66rem;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--sc-chip-bg);
    color: var(--secondary-text-color);
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 0.72rem;
    font-weight: 500;
  }
  .chip ha-icon {
    --mdc-icon-size: 12px;
  }
  .chip.accent {
    background: var(--sc-amber-bg);
    color: var(--sc-amber);
  }
  .chip.good {
    background: var(--sc-good-bg);
    color: var(--sc-good);
  }
  .chip.warn {
    background: var(--sc-warn-bg);
    color: var(--sc-warn);
  }
  .chip.bad {
    background: var(--sc-bad-bg);
    color: var(--sc-bad);
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 24px 16px;
    text-align: center;
    color: var(--secondary-text-color);
  }
  .empty ha-icon {
    --mdc-icon-size: 30px;
    opacity: 0.7;
  }
  .empty .t1 {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }
  .empty .t2 {
    font-size: 0.78rem;
    max-width: 26ch;
  }
`;function Nt(t){return I`
    <div class="bar">
      ${t.map(t=>I`<div
            class="seg"
            style="flex-grow:${t.flexGrow};background:${t.colorVar}"
            title=${t.title??""}
          ></div>`)}
    </div>
  `}function jt(t,e,a=64,i=6){const s=Math.max(0,Math.min(100,t)),r=(a-i)/2,n=2*Math.PI*r,o=a/2;return I`
    <svg width=${a} height=${a} viewBox="0 0 ${a} ${a}" class="ring">
      <circle
        cx=${o}
        cy=${o}
        r=${r}
        fill="none"
        stroke="var(--divider-color)"
        stroke-width=${i}
      ></circle>
      <circle
        cx=${o}
        cy=${o}
        r=${r}
        fill="none"
        stroke=${e}
        stroke-width=${i}
        stroke-linecap="round"
        stroke-dasharray=${n}
        stroke-dashoffset=${n-s/100*n}
        transform="rotate(-90 ${o} ${o})"
      ></circle>
    </svg>
  `}function Ht(t,e,a=300,i=56){if(t.length<2)return U;const s=t.map(t=>t.v),r=Math.min(...s),n=Math.max(...s)-r||1,o=.12*i,c=i-2*o,l=a/(t.length-1),d=t.map((t,e)=>[e*l,o+c-(t.v-r)/n*c]),u=d.map(([t,e],a)=>`${0===a?"M":"L"}${t.toFixed(1)},${e.toFixed(1)}`).join(" "),h=`${u} L${a},${i} L0,${i} Z`,[p,m]=d[d.length-1];return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${h} fill=${e} fill-opacity="0.14" stroke="none"></path>
      <path d=${u} fill="none" stroke=${e} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${p} cy=${m} r="3" fill=${e}></circle>
    </svg>
  `}function Dt(t){const e=t.map(t=>t.v),a=Math.min(...e);return{min:a,span:Math.max(...e)-a||1}}function Mt(t,e=300,a=70,i=!0){const s=t.filter(t=>t.points.length>=2);if(0===s.length)return U;const r=.1*a,n=a-2*r,o=i?Dt(s.flatMap(t=>t.points)):void 0,c=s.map(t=>{const{min:a,span:i}=o??Dt(t.points),s=e/(t.points.length-1),c=t.points.map((t,e)=>[e*s,r+n-(t.v-a)/i*n]),l=c.map(([t,e],a)=>`${0===a?"M":"L"}${t.toFixed(1)},${e.toFixed(1)}`).join(" "),[d,u]=c[c.length-1];return G`
      <path
        d=${l}
        fill="none"
        stroke=${t.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${d} cy=${u} r="3" fill=${t.colorVar}></circle>
    `});return I`
    <svg viewBox="0 0 ${e} ${a}" preserveAspectRatio="none" class="sparkline">
      ${c}
    </svg>
  `}function Rt(t,e,a=300,i=70){if(0===t.length)return U;const s=Math.max(...t.map(t=>t.value),1e-4),r=(a-4*(t.length-1))/t.length,n=t.map((t,a)=>{const n=Math.max(t.value/s*i,2);return G`
      <rect x=${a*(r+4)} y=${i-n} width=${r} height=${n} rx="2" fill=${t.colorVar??e}>
        <title>${t.label??t.value}</title>
      </rect>
    `});return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      ${n}
    </svg>
  `}const Ft=new Set(["unknown","unavailable",""]);let Pt=class extends Tt{static getConfigElement(){return document.createElement("suunto-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-goal-card",goal_km:50}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e[s="weekly_distance"]?a.states[e[s]]:void 0;var s;if(!i||Ft.has(i.state))return this._message("mdi:target",St(a,"empty.weekly_goal.title"));const r=this._config.goal_km??50,n=Number(i.state),o=r>0?n/r*100:0,c=o>=100?"var(--sc-good)":"var(--sc-amber)";return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.weekly_goal.title")}</div>
            <div class="subtitle">
              ${St(a,"card.weekly_goal.subtitle",{value:n.toFixed(1),goal:r.toFixed(0)})}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${jt(o,c,64,7)}
            <div class="ring-value" style="color:${c}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};Pt.styles=[Ct,Et,n`
      .ring-row {
        display: flex;
        justify-content: center;
      }
      .ring-wrap {
        position: relative;
        width: 64px;
        height: 64px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `],t([vt()],Pt.prototype,"_config",void 0),Pt=t([ut("suunto-weekly-goal-card")],Pt);let Vt=class extends lt{setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return U;const t=wt(this.hass);return I`
      ${t.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${St(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:I`<div class="hint">${St(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${St(this.hass,"editor.goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1"
          .value=${String(this._config.goal_km??50)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(t){if(!this._config)return;const e=t.detail.value;this._emit({...this._config,device_id:e||void 0})}_goalChanged(t){if(!this._config)return;const e=Number(t.target.value),a=Number.isFinite(e)&&e>0?e:void 0;this._emit({...this._config,goal_km:a})}_emit(t){this._config=t,yt(this,"config-changed",{config:t})}};Vt.styles=n`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
    .goal-field {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 2px 2px;
      font-size: 0.9rem;
    }
    .goal-field input {
      width: 90px;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
  `,t([mt({attribute:!1})],Vt.prototype,"hass",void 0),t([vt()],Vt.prototype,"_config",void 0),Vt=t([ut("suunto-goal-editor")],Vt);const Lt=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function Ot(t){if(t)for(const[e,a]of Lt)if(e.test(t))return a;return"mdi:run-fast"}const qt={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};function Bt(t){return(t??[]).map(t=>({t:new Date(t.last_updated??t.last_changed??"").getTime(),v:Number(t.state)})).filter(t=>Number.isFinite(t.t)&&Number.isFinite(t.v))}async function It(t,e,a,i="mean"){const s=new Date,r=new Date(s.getTime()-36e5*a),n=await t.callWS({type:"recorder/statistics_during_period",start_time:r.toISOString(),end_time:s.toISOString(),statistic_ids:[e],period:"hour",types:["mean","min","max","sum"]});return(n?.[e]??[]).map(t=>({t:t.start,v:Number(t[i])})).filter(t=>Number.isFinite(t.t)&&Number.isFinite(t.v))}function Gt(t){const e=[...t].sort((t,e)=>t.t-e.t),a=new Map;for(let t=1;t<e.length;t++){const i=e[t].v-e[t-1].v;if(!Number.isFinite(i)||i<0)continue;const s=new Date(e[t].t).toDateString();a.set(s,(a.get(s)??0)+i)}return[...a.entries()].map(([t,e])=>({t:new Date(t).getTime(),v:e})).sort((t,e)=>t.t-e.t)}function Wt(t){const e=new Map;for(const a of t){const t=new Date(a.t).toDateString(),i=e.get(t)??{sum:0,count:0};i.sum+=a.v,i.count+=1,e.set(t,i)}return[...e.entries()].map(([t,{sum:e,count:a}])=>({t:new Date(t).getTime(),v:e/a})).sort((t,e)=>t.t-e.t)}function Ut(t){if(t>=60){const e=Math.floor(t/60),a=Math.round(t%60);return{value:`${e}:${String(a).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(t)),unit:"min"}}function Kt(t){const e=Math.round(60*t);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Zt(t,e){return new Intl.DateTimeFormat(e,{hour:"numeric",minute:"2-digit"}).format(t)}function Jt(t,e=0){const a=Number(t.toFixed(e));return 0===a?"±0":a>0?`+${a}`:String(a)}const Yt=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function Qt(t,e){const a=(t.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(e,{numeric:"auto"});for(const[t,e]of Yt)if(Math.abs(a)>=e)return i.format(Math.round(a/e),t);return i.format(Math.round(a/60),"minute")}const Xt=new Set(["unknown","unavailable",""]);let te=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_activity");if(!s||Xt.has(s.state))return this._message("mdi:calendar-blank-outline",St(a,"empty.last_workout.title"),St(a,"empty.last_workout.subtitle"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_max_hr"),d=i("last_avg_pace"),u=i("last_avg_speed"),h=i("last_pte"),p=i("last_epoc"),m=i("last_feeling"),v=i("last_tss"),g=i("last_cal_per_km"),_=i("last_cadence"),y=i("last_pct_hrmax"),f=i("last_workout_weather"),b=i("last_workout_tags"),w=i("last_workout_achievements"),k=o?Ut(Number(o.state)):void 0,$=void 0===d&&void 0!==u,x=m&&!Xt.has(m.state)?Number(m.state):void 0,S=h&&!Xt.has(h.state)?Number(h.state):void 0,z=w?Number(w.state):0;return I`
      <ha-card @click=${()=>this._openMoreInfo(e.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Ot(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">
              ${r?I`${Qt(new Date(r.state),a.language)} ·
                  ${Zt(new Date(r.state),a.language)}`:""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${n?this._stat((Number(n.state)/1e3).toFixed(1),"km",St(a,"stat.distance")):U}
          ${k?this._stat(k.value,k.unit,St(a,"stat.duration")):U}
          ${d?this._stat(Kt(Number(d.state)),"/km",St(a,"stat.avg_pace")):$?this._stat(Number(u.state).toFixed(1),"km/h",St(a,"stat.avg_speed")):U}
          ${c?this._stat(String(Math.round(Number(c.state))),"bpm",St(a,"stat.avg_hr"),!0):U}
          ${l?this._stat(String(Math.round(Number(l.state))),"bpm",St(a,"stat.max_hr"),!0):U}
          ${void 0!==S?I`
                <div class="stat">
                  <div class="stat-value">${S.toFixed(1)}</div>
                  <div class="stat-label">${St(a,"stat.training_effect")}</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(t=>I`<i class=${t<=Math.round(S)?`on s${t}`:""}></i>`)}
                  </div>
                </div>
              `:U}
        </div>

        ${v||p||void 0!==x||g||_||y?I`
              <hr />
              <div class="secondary">
                ${v?this._secondary(String(Math.round(Number(v.state))),St(a,"stat.tss")):U}
                ${p?this._secondary(Number(p.state).toFixed(1),St(a,"stat.epoc")):U}
                ${void 0!==x?I`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(t=>I`<i class=${t<=x?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">${St(a,"stat.feeling")}</div>
                      </div>
                    `:U}
                ${g?this._secondary(`${Math.round(Number(g.state))}`,St(a,"stat.energy"),"kcal/km"):U}
                ${_?this._secondary(String(Math.round(Number(_.state))),St(a,"stat.cadence"),"rpm"):U}
                ${y?this._secondary(String(Math.round(Number(y.state))),St(a,"stat.pct_hrmax"),"%"):U}
              </div>
            `:U}
        ${f&&!Xt.has(f.state)?I`
              <div class="weather">
                <ha-icon .icon=${function(t){const e=t?.slice(0,2);return e&&qt[e]||"mdi:weather-cloudy"}(f.attributes.icon_code)}></ha-icon>
                <strong>${f.state}°C</strong>
                ${f.attributes.condition?I`<span class="sep">·</span><span class="cond">${f.attributes.condition}</span>`:U}
                ${void 0!==f.attributes.wind_speed_kmh?I`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(f.attributes.wind_speed_kmh)} km/h</span>
                    `:U}
              </div>
            `:U}
        ${b&&!Xt.has(b.state)||z>0?I`
              <div class="footer">
                ${b&&!Xt.has(b.state)?I`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${b.state}</span>`:U}
                ${z>0?I`
                      <span
                        class="chip accent"
                        title=${w?.attributes.route_ranking?St(a,"achievement.rank",{rank:w.attributes.route_ranking}):""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${function(t,e,a){if(Array.isArray(e)&&e.length){const t=e[0];if("string"==typeof t)return t;if(t&&"object"==typeof t){const e=t,a=e.name??e.title??e.type;if("string"==typeof a)return a}}return zt(t,a,"achievement.count_one","achievement.count_other")}(a,w?.attributes.achievements,z)}
                      </span>
                    `:U}
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a,i=!1){return I`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}_secondary(t,e,a){return I`
      <div class="sec-item">
        <div class="sec-value">${t}${a?I` <span class="sec-unit">${a}</span>`:U}</div>
        <div class="sec-label">${e}</div>
      </div>
    `}_openMoreInfo(t){t&&yt(this,"hass-more-info",{entityId:t})}};te.styles=[Ct,Et,n`
      .activity {
        text-transform: capitalize;
      }

      .severity {
        display: flex;
        gap: 3px;
        margin-top: 3px;
      }
      .severity i {
        display: block;
        width: 13px;
        height: 5px;
        border-radius: 2px;
        background: var(--divider-color);
      }
      .severity i.s1 {
        background: var(--sc-sev-1);
      }
      .severity i.s2 {
        background: var(--sc-sev-2);
      }
      .severity i.s3 {
        background: var(--sc-sev-3);
      }
      .severity i.s4 {
        background: var(--sc-sev-4);
      }
      .severity i.s5 {
        background: var(--sc-sev-5);
      }

      .feeling {
        display: flex;
        gap: 3px;
        align-items: center;
        height: 18px;
      }
      .feeling i {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--divider-color);
        display: block;
      }
      .feeling i.on {
        background: var(--sc-amber);
      }

      .weather {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--sc-chip-bg);
        color: var(--sc-pulse);
        border-radius: 9px;
        padding: 8px 10px;
        font-size: 0.8rem;
      }
      .weather ha-icon {
        --mdc-icon-size: 18px;
        flex: none;
      }
      .weather strong {
        font-size: 0.88rem;
      }
      .weather .sep {
        opacity: 0.45;
      }
      .weather .cond {
        color: var(--secondary-text-color);
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],t([vt()],te.prototype,"_config",void 0),te=t([ut("suunto-last-workout-card")],te);const ee=t=>`var(--sc-zone-${t})`;let ae=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=[];for(let t=0;t<=5;t++){const s=e[`last_zone${t}`],r=s?a.states[s]:void 0;r&&!Number.isNaN(Number(r.state))&&i.push({n:t,minutes:Number(r.state),lower:r.attributes.lower_limit_bpm,upper:r.attributes.upper_limit_bpm})}const s=i.reduce((t,e)=>t+e.minutes,0);if(0===i.length||s<=0)return this._message("mdi:heart-pulse",St(a,"empty.hr_zones.title"),St(a,"empty.hr_zones.subtitle"));const r=e.last_workout_start,n=r?a.states[r]:void 0,o=St(a,"card.hr_zones.last_workout");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.hr_zones.title")}</div>
            <div class="subtitle">
              ${n?`${o} · ${Qt(new Date(n.state),a.language)}`:o}
            </div>
          </div>
        </div>

        ${Nt(i.map(t=>({flexGrow:t.minutes,colorVar:ee(t.n),title:St(a,"label.zone",{n:t.n})})))}

        <div class="rows">
          ${i.map(t=>{const e=Ut(t.minutes),i=Math.round(t.minutes/s*100);return I`
              <div class="row">
                <i class="dot" style="background:${ee(t.n)}"></i>
                <span class="zone-label">${St(a,"label.zone",{n:t.n})}</span>
                <span class="bpm">${r=t.lower,n=t.upper,void 0!==r&&void 0!==n?`${r}-${n} bpm`:void 0!==r?`${r}+ bpm`:void 0!==n?`<${n} bpm`:""}</span>
                <span class="time">${e.value} ${e.unit}</span>
                <span class="pct">${i}%</span>
              </div>
            `;var r,n})}
        </div>
      </ha-card>
    `}};ae.styles=[Ct,Et,n`
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row {
        display: grid;
        grid-template-columns: 10px 52px 1fr auto auto;
        align-items: center;
        gap: 10px;
        font-size: 0.82rem;
      }
      .zone-label {
        font-weight: 600;
      }
      .bpm {
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .time {
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .pct {
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        min-width: 3ch;
        text-align: right;
      }
    `],t([vt()],ae.prototype,"_config",void 0),ae=t([ut("suunto-hr-zones-card")],ae);const ie=new Set(["unknown","unavailable",""]);let se=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("sleep_duration");if(!s||ie.has(s.state))return this._message("mdi:sleep",St(a,"empty.sleep_readiness.title"),St(a,"empty.sleep_readiness.subtitle"));const r=i("wake_time"),n=i("sleep_deep"),o=i("sleep_light"),c=i("sleep_rem"),l=i("sleep_quality"),d=i("sleep_spo2"),u=i("sleep_hrv"),h=i("hrv_baseline"),p=i("hrv_status"),m=i("resting_hr"),v=i("resting_hr_baseline"),g=i("readiness"),_=i("nap_duration"),y=i("sleep_avg_hr"),f=i("sleep_min_hr"),b=i("sleep_time"),w=i("unusual_recovery"),k=g&&!ie.has(g.state)?Number(g.state):void 0,$=void 0!==k?function(t,e){return e>=70?{colorVar:"var(--sc-good)",label:St(t,"band.readiness.great")}:e>=40?{colorVar:"var(--sc-warn)",label:St(t,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:St(t,"band.readiness.low")}}(a,k):void 0,x=u&&h&&!ie.has(h.state)?Number(u.state)-Number(h.state):void 0,S=m&&v&&!ie.has(v.state)?Number(m.state)-Number(v.state):void 0,z=[n&&!ie.has(n.state)?{flexGrow:Number(n.state),colorVar:"var(--sc-sleep-deep)",title:St(a,"label.deep")}:void 0,o&&!ie.has(o.state)?{flexGrow:Number(o.state),colorVar:"var(--sc-sleep-light)",title:St(a,"label.light")}:void 0,c&&!ie.has(c.state)?{flexGrow:Number(c.state),colorVar:"var(--sc-sleep-rem)",title:St(a,"label.rem")}:void 0].filter(t=>void 0!==t),A=Ut(60*Number(s.state)),T=_&&!ie.has(_.state)?Number(_.state):void 0,C=!!_?.attributes.date&&function(t){const e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}(new Date(_.attributes.date)),E={duration:`${A.value} ${A.unit}`};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.sleep_readiness.title")}</div>
            <div class="subtitle">
              ${r?St(a,"card.sleep_readiness.subtitle_with_wake",{...E,time:Zt(new Date(r.state),a.language)}):St(a,"card.sleep_readiness.subtitle_no_wake",E)}
            </div>
          </div>
        </div>

        ${void 0!==k&&$?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${jt(k,$.colorVar,60,6)}
                  <div class="ring-value" style="color:${$.colorVar}">${Math.round(k)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${St(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${$.colorVar}">${$.label}</div>
                </div>
              </div>
            `:U}

        <div class="stats">
          ${l?this._stat(String(Math.round(Number(l.state))),"%",St(a,"stat.quality")):U}
          ${u?this._stat(String(Math.round(Number(u.state))),"ms",void 0!==x?St(a,"stat.hrv_delta",{delta:Jt(x)}):St(a,"stat.hrv"),void 0!==x?x>=0?"good":"bad":void 0):U}
          ${m?this._stat(String(Math.round(Number(m.state))),"bpm",void 0!==S?St(a,"stat.resting_hr_delta",{delta:Jt(S)}):St(a,"stat.resting_hr"),void 0!==S?S<=0?"good":"bad":void 0):U}
          ${d?this._stat(String(Math.round(Number(d.state))),"%",St(a,"stat.spo2")):U}
          ${y?this._stat(String(Math.round(Number(y.state))),"bpm",St(a,"stat.sleep_avg_hr")):U}
          ${f?this._stat(String(Math.round(Number(f.state))),"bpm",St(a,"stat.sleep_min_hr")):U}
        </div>

        ${z.length?I`
              <div class="stages">
                ${Nt(z)}
                <div class="stage-legend">
                  ${z.map(t=>{const e=Ut(t.flexGrow);return I`
                      <span class="legend-item">
                        <i class="dot" style="background:${t.colorVar}"></i>${t.title} ${e.value}${"h"===e.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:U}

        ${p&&!ie.has(p.state)||T||b&&!ie.has(b.state)||"on"===w?.state?I`
              <div class="footer">
                ${"on"===w?.state?I`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${St(a,"chip.unusual_recovery")}</span>`:U}
                ${p&&!ie.has(p.state)?(()=>{const t=function(t,e){return"low"===e?{colorVar:"var(--sc-warn)",label:St(t,"band.hrv.low")}:"high"===e?{colorVar:"var(--sc-pulse)",label:St(t,"band.hrv.high")}:{colorVar:"var(--sc-good)",label:St(t,"band.hrv.balanced")}}(a,p.state);return I`<span class="chip" style="color:${t.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${t.label}</span
                      >`})():U}
                ${T?I`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${St(a,C?"chip.nap":"chip.nap_earlier",{minutes:T})}
                    </span>`:U}
                ${b&&!ie.has(b.state)?I`<span class="chip">
                      <ha-icon icon="mdi:bed-clock"></ha-icon>${St(a,"chip.bedtime",{time:Zt(new Date(b.state),a.language)})}
                    </span>`:U}
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};se.styles=[Ct,Et,n`
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 60px;
        height: 60px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 1.05rem;
        font-weight: 600;
      }

      .stages {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .stage-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],t([vt()],se.prototype,"_config",void 0),se=t([ut("suunto-sleep-readiness-card")],se);const re=new Set(["unknown","unavailable",""]);let ne=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("recovery_balance");if(!s||re.has(s.state))return this._message("mdi:battery-heart-variant",St(a,"empty.recovery.title"));const r=i("is_recovering"),n=i("recovery_until"),o=i("recovery_time"),c=i("stress_state"),l=i("workout_today"),d=i("unusual_recovery"),u=Number(s.state),h=function(t,e){return e>=60?{colorVar:"var(--sc-good)",label:St(t,"band.recovery.well")}:e>=30?{colorVar:"var(--sc-warn)",label:St(t,"band.recovery.partial")}:{colorVar:"var(--sc-bad)",label:St(t,"band.recovery.low")}}(a,u),p="on"===r?.state;let m=St(a,"band.recovery.fully");if(p&&n&&!re.has(n.state)){const t=new Date(n.state).getTime()-Date.now();if(t>0){const e=Ut(t/6e4);m=St(a,"band.recovery.recovering",{time:`${e.value} ${e.unit}`})}}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.recovery.title")}</div>
            <div class="subtitle">${m}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${jt(u,h.colorVar,60,6)}
            <div class="ring-value" style="color:${h.colorVar}">${Math.round(u)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${St(a,"stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${h.colorVar}">${h.label}</div>
          </div>
        </div>

        ${c||o?I`
              <div class="stats">
                ${c&&!re.has(c.state)?this._stat(c.state,"",St(a,"stat.stress_level")):U}
                ${o&&!re.has(o.state)?this._stat(Number(o.state).toFixed(1),"h",St(a,"stat.recovery_window")):U}
              </div>
            `:U}
        ${"on"===l?.state||"on"===d?.state?I`
              <div class="footer">
                ${"on"===l?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${St(a,"chip.workout_logged_today")}</span>`:U}
                ${"on"===d?.state?I`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${St(a,"chip.unusual_recovery")}</span>`:U}
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ne.styles=[Ct,Et,n`
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 60px;
        height: 60px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 1.05rem;
        font-weight: 600;
      }
      .footer {
        display: flex;
        gap: 8px;
      }
    `],t([vt()],ne.prototype,"_config",void 0),ne=t([ut("suunto-recovery-card")],ne);const oe=new Set(["unknown","unavailable",""]);let ce=class extends Tt{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const t=this._resolveEntities();if("error"in t||!this.hass)return;const e=t.map.fitness_ctl;if(!e)return;const a=Date.now();if(!(e===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=e,this._historyFetchedAt=a;try{const t=new Date(a-2592e6).toISOString(),i=await this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${e}&no_attributes`),s=(i?.[0]??[]).map(t=>({t:new Date(t.last_updated??t.last_changed??"").getTime(),v:Number(t.state)})).filter(t=>Number.isFinite(t.t)&&Number.isFinite(t.v));this._history=s}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("fitness_ctl");if(!s||oe.has(s.state))return this._message("mdi:arm-flex",St(a,"empty.training_load.title"),St(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=i("acwr"),c=n&&!oe.has(n.state)?Number(n.state):void 0,l=void 0!==c?function(t,e){return e>5?{colorVar:"var(--sc-good)",label:St(t,"band.form.fresh")}:e<-20?{colorVar:"var(--sc-bad)",label:St(t,"band.form.very_fatigued")}:e<-5?{colorVar:"var(--sc-warn)",label:St(t,"band.form.fatigued")}:{colorVar:"var(--sc-pulse)",label:St(t,"band.form.neutral")}}(a,c):void 0,d=o&&!oe.has(o.state)?Number(o.state):void 0,u=void 0!==d?function(t,e){return e>1.3?{colorVar:"var(--sc-bad)",label:St(t,"band.acwr.high")}:e<.8?{colorVar:"var(--sc-warn)",label:St(t,"band.acwr.low")}:{colorVar:"var(--sc-good)",label:St(t,"band.acwr.safe")}}(a,d):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.training_load.title")}</div>
            <div class="subtitle">${l?l.label:St(a,"card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${Ht(this._history,"var(--sc-amber)")}

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),St(a,"stat.ctl"))}
          ${r?this._stat(Number(r.state).toFixed(0),St(a,"stat.atl")):U}
          ${void 0!==c?this._stat(Jt(c,1),St(a,"stat.tsb"),l?.colorVar):U}
        </div>

        ${void 0!==d&&u?I`
              <div class="footer">
                <span class="chip" style="color:${u.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${St(a,"chip.acwr",{value:d.toFixed(2),label:u.label})}
                </span>
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value" style=${a?`color:${a}`:""}>${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};ce.styles=[Ct,Et,n`
      .footer {
        display: flex;
      }
    `],t([vt()],ce.prototype,"_config",void 0),t([vt()],ce.prototype,"_history",void 0),ce=t([ut("suunto-training-load-card")],ce);const le=new Set(["unknown","unavailable",""]),de=["var(--sc-amber)","var(--sc-pulse)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let ue=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("weekly_distance"),r=i("weekly_time"),n=i("workouts_7d"),o=i("workouts_30d"),c=i("lifetime_by_activity");if(!s&&!c)return this._message("mdi:calendar-week",St(a,"empty.week_stats.title"));const l=(c?.attributes.activities??[]).slice().sort((t,e)=>e.distance_km-t.distance_km),d=l.slice(0,5),u=l.length-d.length;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.week_stats.title")}</div>
            <div class="subtitle">${St(a,"card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${s||r||n?I`
              <div class="stats">
                ${s&&!le.has(s.state)?this._stat(Number(s.state).toFixed(1),"km",St(a,"stat.distance")):U}
                ${r&&!le.has(r.state)?this._stat(Number(r.state).toFixed(1),"h",St(a,"stat.time")):U}
                ${n&&!le.has(n.state)?this._stat(n.state,"",St(a,"stat.workouts")):U}
              </div>
            `:U}

        ${d.length?I`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${St(a,"card.week_stats.lifetime_title")}</div>
                ${Nt(d.map((t,e)=>({flexGrow:t.distance_km,colorVar:de[e%de.length],title:t.activity})))}
                <div class="rows">
                  ${d.map((t,e)=>{const a=de[e%de.length];return I`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${a} 18%, transparent);color:${a}"
                        >
                          <ha-icon .icon=${Ot(t.activity)}></ha-icon>
                        </div>
                        <span class="name">${t.activity}</span>
                        <span class="count">${t.workouts}×</span>
                        <span class="dist">${t.distance_km.toFixed(0)} km</span>
                      </div>
                    `})}
                  ${u>0?I`<div class="row muted">
                        ${zt(a,u,"chip.more_activity_one","chip.more_activity_other")}
                      </div>`:U}
                </div>
              </div>
            `:U}
        ${o&&!le.has(o.state)?I`<div class="footer"><span class="chip">${St(a,"chip.workouts_30d",{count:o.state})}</span></div>`:U}
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ue.styles=[Ct,Et,n`
      .lifetime {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .lifetime-title {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row {
        display: grid;
        grid-template-columns: 24px 1fr auto auto;
        align-items: center;
        gap: 10px;
        font-size: 0.82rem;
      }
      .row.muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.76rem;
      }
      .name {
        text-transform: capitalize;
        font-weight: 500;
      }
      .count {
        color: var(--secondary-text-color);
      }
      .dist {
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        min-width: 5ch;
        text-align: right;
      }
      .footer {
        display: flex;
      }
    `],t([vt()],ue.prototype,"_config",void 0),ue=t([ut("suunto-week-stats-card")],ue);const he=new Set(["unknown","unavailable",""]);let pe=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("daily_steps"),r=i("daily_energy"),n=i("current_hr"),o=i("workout_today"),c=i("is_recovering"),l=i("training_suggestion"),d=i("days_since_last_workout");if(!s&&!r&&!n)return this._message("mdi:pulse",St(a,"empty.today.title"));const u=n&&!he.has(n.state)?Math.round(Number(n.state)):void 0,h=l&&!he.has(l.state)?l.state:void 0,p=h?function(t,e){switch(e){case"hard":return{colorVar:"var(--sc-good)",label:St(t,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:St(t,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:St(t,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:St(t,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,h):void 0,m=d&&!he.has(d.state)?Number(d.state):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.today.title")}</div>
            <div class="subtitle">${St(a,"card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${s&&!he.has(s.state)?this._stat(Number(s.state).toLocaleString(a.language),"",St(a,"stat.steps")):U}
          ${r&&!he.has(r.state)?this._stat(Math.round(Number(r.state)).toLocaleString(a.language),"kcal",St(a,"stat.energy")):U}
          ${void 0!==u?I`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${u}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${St(a,"stat.heart_rate")}</div>
                </div>
              `:U}
        </div>

        ${"on"===o?.state||"on"===c?.state||p||void 0!==m&&m>0?I`
              <div class="footer">
                ${"on"===o?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${St(a,"chip.workout_today")}</span>`:U}
                ${"on"===c?.state?I`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${St(a,"chip.recovering")}</span>`:U}
                ${p?I`<span class="chip" style="color:${p.colorVar}"
                      ><ha-icon icon="${p.icon}"></ha-icon>${p.label}</span
                    >`:U}
                ${void 0!==m&&m>0?I`<span class="chip"
                      ><ha-icon icon="mdi:calendar-clock-outline"></ha-icon>${zt(a,m,"chip.days_since_one","chip.days_since_other")}</span
                    >`:U}
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};pe.styles=[Ct,Et,n`
      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sc-pulse);
        display: inline-block;
        margin-right: 5px;
        animation: sc-pulse 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .live-dot {
          animation: none;
        }
      }
      @keyframes sc-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      .footer {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],t([vt()],pe.prototype,"_config",void 0),pe=t([ut("suunto-today-card")],pe);const me=new Set(["unknown","unavailable",""]);let ve=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lifetime-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("lifetime_distance"),r=i("lifetime_time"),n=i("lifetime_energy"),o=i("lifetime_workouts"),c=i("lifetime_days");return!s||me.has(s.state)?this._message("mdi:trophy-variant",St(a,"empty.lifetime.title")):I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.lifetime.title")}</div>
            <div class="subtitle">${St(a,"card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),"km",St(a,"stat.distance"))}
          ${r?this._stat(Number(r.state).toFixed(0),"h",St(a,"stat.time")):U}
          ${n?this._stat(Math.round(Number(n.state)).toLocaleString(a.language),"kcal",St(a,"stat.energy")):U}
          ${o?this._stat(o.state,"",St(a,"stat.workouts")):U}
          ${c?this._stat(c.state,"",St(a,"stat.active_days")):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ve.styles=[Ct,Et,n`
    `],t([vt()],ve.prototype,"_config",void 0),ve=t([ut("suunto-lifetime-card")],ve);let ge=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recent-workouts-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];return s&&0!==r.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.recent_workouts.title")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map(t=>{const e=null!==t.duration_min?Ut(t.duration_min):void 0;return I`
              <div class="workout-row">
                <div class="icon-badge tiny"><ha-icon .icon=${Ot(t.activity)}></ha-icon></div>
                <div class="name-block">
                  <div class="name">${t.activity??"-"}</div>
                  <div class="date">
                    ${t.start?Qt(new Date(t.start),a.language):""}
                  </div>
                </div>
                <div class="row-stats">
                  ${null!==t.distance_km?I`<span>${t.distance_km} km</span>`:U}
                  ${null!==t.distance_km&&e?I`<span class="sep">·</span>`:U}
                  ${e?I`<span>${e.value} ${e.unit}</span>`:U}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:format-list-bulleted",St(a,"empty.recent_workouts.title"))}};ge.styles=[Ct,Et,n`
      .workout-row {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .name-block {
        min-width: 0;
      }
      .name {
        font-size: 0.85rem;
        font-weight: 500;
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .date {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .row-stats {
        font-size: 0.8rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        color: var(--primary-text-color);
      }
      .row-stats .sep {
        opacity: 0.45;
        margin: 0 3px;
        font-weight: 400;
      }
    `],t([vt()],ge.prototype,"_config",void 0),ge=t([ut("suunto-recent-workouts-card")],ge);const _e=new Set(["unknown","unavailable",""]);let ye=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-elevation-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_ascent"),r=i("last_descent");if((!s||_e.has(s.state))&&(!r||_e.has(r.state)))return this._message("mdi:image-filter-hdr",St(a,"empty.elevation.title"),St(a,"empty.elevation.subtitle"));const n=i("last_ascent_time"),o=i("last_descent_time"),c=i("last_min_altitude"),l=i("last_max_altitude"),d=i("last_ascent_rate"),u=i("last_workout_start");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:image-filter-hdr"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.elevation.title")}</div>
            <div class="subtitle">
              ${u?`${St(a,"card.hr_zones.last_workout")} · ${Qt(new Date(u.state),a.language)}`:St(a,"card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats">
          ${s&&!_e.has(s.state)?this._stat(Math.round(Number(s.state)).toString(),"m",St(a,"stat.ascent")):U}
          ${r&&!_e.has(r.state)?this._stat(Math.round(Number(r.state)).toString(),"m",St(a,"stat.descent")):U}
          ${n&&!_e.has(n.state)?(()=>{const t=Ut(Number(n.state));return this._stat(t.value,t.unit,St(a,"stat.ascent_time"))})():U}
          ${o&&!_e.has(o.state)?(()=>{const t=Ut(Number(o.state));return this._stat(t.value,t.unit,St(a,"stat.descent_time"))})():U}
          ${c&&!_e.has(c.state)?this._stat(Math.round(Number(c.state)).toString(),"m",St(a,"stat.min_altitude")):U}
          ${l&&!_e.has(l.state)?this._stat(Math.round(Number(l.state)).toString(),"m",St(a,"stat.max_altitude")):U}
        </div>

        ${d&&!_e.has(d.state)?I`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${St(a,"stat.ascent_rate")}: ${Math.round(Number(d.state))} m/h
                </span>
              </div>
            `:U}
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ye.styles=[Ct,Et,n`
      .footer {
        display: flex;
      }
    `],t([vt()],ye.prototype,"_config",void 0),ye=t([ut("suunto-elevation-card")],ye);const fe=new Set(["unknown","unavailable",""]);let be=class extends Tt{constructor(){super(...arguments),this._mapLoading=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-location-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_workout_location"),r=s?.attributes.latitude,n=s?.attributes.longitude,o=e.last_workout_location;if(!s||fe.has(s.state)||void 0===r||void 0===n)return this._message("mdi:map-marker",St(a,"empty.location.title"),St(a,"empty.location.subtitle"));const c=i("last_activity"),l=i("last_workout_start"),d=`https://www.google.com/maps?q=${r},${n}`,u=Ot(c?.state);return o&&this._ensureMapElement(o,u),this._mapEl&&(this._mapEl.hass=a),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.location.title")}</div>
            <div class="subtitle">
              ${c?I`${c.state}`:U}
              ${c&&l?I`<span class="sep">·</span>`:U}
              ${l?Qt(new Date(l.state),a.language):U}
            </div>
          </div>
        </div>

        ${this._mapEl&&this._mapKey===`${o}:${u}`?I`<div class="map-wrap">${this._mapEl}</div>`:U}

        <div class="footer-row">
          <div class="coords">${Number(r).toFixed(5)}, ${Number(n).toFixed(5)}</div>
          <a class="chip accent link" href=${d} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${St(a,"location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `}async _ensureMapElement(t,e){const a=`${t}:${e}`;if(this._mapEl&&this._mapKey===a||this._mapLoading)return;const i={type:"map",auto_fit:!0,default_zoom:14,aspect_ratio:"16:9",entities:[{entity:t,icon:e}]},s=window.loadCardHelpers;if(!s){if(!customElements.get("hui-map-card"))return;try{const t=document.createElement("hui-map-card");t.setConfig(i),this._mapKey=a,this._mapEl=t}catch{}return}this._mapLoading=!0;try{const t=(await s()).createCardElement(i);this._mapKey=a,this._mapEl=t}catch{}finally{this._mapLoading=!1}}};be.styles=[Ct,Et,n`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      /* No explicit height here on purpose: forcing one from outside fought
         hui-map-card's own sizing (it rendered taller than the box we gave
         it, and overflow:hidden silently cropped it, pushing the marker -
         correctly centered within its OWN full height - out of the visible
         window). aspect_ratio in the card config now sizes it predictably
         instead, so this wrapper just clips the corners, not the content. */
      .map-wrap {
        border-radius: 10px;
        overflow: hidden;
      }
      .map-wrap > * {
        display: block;
      }
      .footer-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }
      .coords {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .chip.link {
        text-decoration: none;
        cursor: pointer;
      }
    `],t([vt()],be.prototype,"_config",void 0),t([vt()],be.prototype,"_mapEl",void 0),be=t([ut("suunto-location-card")],be);const we=new Set(["unknown","unavailable",""]);let ke=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("vo2max");if(!s||we.has(s.state))return this._message("mdi:lungs",St(a,"empty.fitness.title"),St(a,"empty.fitness.subtitle"));const r=i("estimated_vo2max"),n=i("fitness_age"),o=s.attributes.measured_at,c=s.attributes.measured_from;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.fitness.title")}</div>
            <div class="subtitle">
              ${o?St(a,"fitness.measured",{time:Qt(new Date(o),a.language),activity:c??""}):U}
            </div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",St(a,"stat.vo2max"))}
          ${r&&!we.has(r.state)?this._stat(Number(r.state).toFixed(1),"ml/kg/min",St(a,"stat.estimated_vo2max")):U}
          ${n&&!we.has(n.state)?this._stat(String(Math.round(Number(n.state))),"",St(a,"stat.fitness_age")):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ke.styles=[Ct,Et,n`
    `],t([vt()],ke.prototype,"_config",void 0),ke=t([ut("suunto-fitness-card")],ke);const $e=new Set(["unknown","unavailable",""]);let xe=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-tile-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 1}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_activity");if(!s||$e.has(s.state))return this._message("mdi:calendar-blank-outline",St(a,"empty.last_workout.title"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_avg_pace"),d=i("last_avg_speed"),u=[];if(n&&u.push(I`${(Number(n.state)/1e3).toFixed(1)} km`),o){const t=Ut(Number(o.state));u.push(I`${t.value} ${t.unit}`)}return l?u.push(I`${Kt(Number(l.state))}/km`):d&&u.push(I`${Number(d.state).toFixed(1)} km/h`),c&&u.push(I`${Math.round(Number(c.state))} bpm`),I`
      <ha-card @click=${()=>this._openMoreInfo(e.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Ot(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">${r?Qt(new Date(r.state),a.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${u.length?I`
              <div class="compact-stats">
                ${u.map((t,e)=>I`${e>0?I`<span class="sep">·</span>`:U}${t}`)}
              </div>
            `:U}
      </ha-card>
    `}_openMoreInfo(t){t&&yt(this,"hass-more-info",{entityId:t})}};xe.styles=[Ct,Et,n`
      ha-card {
        gap: 8px;
      }
      .activity {
        text-transform: capitalize;
      }
      .compact-stats {
        font-size: 0.85rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .compact-stats .sep {
        opacity: 0.45;
        font-weight: 400;
        margin: 0 6px;
      }
    `],t([vt()],xe.prototype,"_config",void 0),xe=t([ut("suunto-last-workout-tile-card")],xe);const Se=new Set(["unknown","unavailable",""]);let ze=class extends Tt{constructor(){super(...arguments),this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pmc-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const t=this._resolveEntities();if("error"in t||!this.hass)return;const{map:e}=t,a=e.fitness_ctl;if(!a)return;const i=e.fatigue_atl,s=e.form_tsb,r=[a,i,s].filter(t=>Boolean(t)),n=r.join(","),o=Date.now();if(!(n===this._historyKey&&o-this._historyFetchedAt<6e5)){this._historyKey=n,this._historyFetchedAt=o;try{const t=new Date(o-7776e6).toISOString(),e=await this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${r.join(",")}&no_attributes`);let a=0;this._ctlHistory=Bt(e?.[a++]),this._atlHistory=i?Bt(e?.[a++]):[],this._tsbHistory=s?Bt(e?.[a++]):[]}catch{this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("fitness_ctl");if(!s||Se.has(s.state))return this._message("mdi:chart-timeline-variant",St(a,"empty.training_load.title"),St(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=[{points:this._ctlHistory,colorVar:"var(--sc-pulse)"}];return this._atlHistory.length&&o.push({points:this._atlHistory,colorVar:"var(--sc-bad)"}),this._tsbHistory.length&&o.push({points:this._tsbHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.pmc.title")}</div>
            <div class="subtitle">${St(a,"card.pmc.subtitle")}</div>
          </div>
        </div>

        ${Mt(o,300,80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${St(a,"stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.tsb")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),St(a,"stat.ctl"))}
          ${r&&!Se.has(r.state)?this._stat(Number(r.state).toFixed(0),St(a,"stat.atl")):U}
          ${n&&!Se.has(n.state)?this._stat(Jt(Number(n.state),1),St(a,"stat.tsb")):U}
        </div>
      </ha-card>
    `}_stat(t,e){return I`
      <div class="stat">
        <div class="stat-value">${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};ze.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],ze.prototype,"_config",void 0),t([vt()],ze.prototype,"_ctlHistory",void 0),t([vt()],ze.prototype,"_atlHistory",void 0),t([vt()],ze.prototype,"_tsbHistory",void 0),ze=t([ut("suunto-pmc-card")],ze);const Ae=new Set(["unknown","unavailable",""]);let Te=class extends Tt{constructor(){super(...arguments),this._rhrHistory=[],this._hrvHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-trends-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const t=this._resolveEntities();if("error"in t||!this.hass)return;const{map:e}=t,a=e.resting_hr,i=e.sleep_hrv;if(!a&&!i)return;const s=[a,i].filter(t=>Boolean(t)),r=s.join(","),n=Date.now();if(!(r===this._historyKey&&n-this._historyFetchedAt<6e5)){this._historyKey=r,this._historyFetchedAt=n;try{const t=new Date(n-2592e6).toISOString(),e=await this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${s.join(",")}&no_attributes`);let r=0;this._rhrHistory=a?Bt(e?.[r++]):[],this._hrvHistory=i?Bt(e?.[r++]):[]}catch{this._rhrHistory=[],this._hrvHistory=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("resting_hr"),r=i("sleep_hrv"),n=s&&!Ae.has(s.state),o=r&&!Ae.has(r.state);if(!n&&!o)return this._message("mdi:heart-pulse",St(a,"empty.recovery_trends.title"));const c=i("resting_hr_baseline"),l=i("hrv_baseline"),d=n&&c&&!Ae.has(c.state)?Number(s.state)-Number(c.state):void 0,u=o&&l&&!Ae.has(l.state)?Number(r.state)-Number(l.state):void 0,h=[];return this._rhrHistory.length&&h.push({points:this._rhrHistory,colorVar:"var(--sc-pulse)"}),this._hrvHistory.length&&h.push({points:this._hrvHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.recovery_trends.title")}</div>
            <div class="subtitle">${St(a,"card.recovery_trends.subtitle")}</div>
          </div>
        </div>

        ${Mt(h,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.hrv")}</span>
        </div>

        <div class="stats">
          ${n?this._stat(String(Math.round(Number(s.state))),"bpm",void 0!==d?St(a,"stat.resting_hr_delta",{delta:Jt(d)}):St(a,"stat.resting_hr"),void 0!==d?d<=0?"good":"bad":void 0):U}
          ${o?this._stat(String(Math.round(Number(r.state))),"ms",void 0!==u?St(a,"stat.hrv_delta",{delta:Jt(u)}):St(a,"stat.hrv"),void 0!==u?u>=0?"good":"bad":void 0):U}
        </div>
      </ha-card>
    `}_stat(t,e,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Te.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],Te.prototype,"_config",void 0),t([vt()],Te.prototype,"_rhrHistory",void 0),t([vt()],Te.prototype,"_hrvHistory",void 0),Te=t([ut("suunto-recovery-trends-card")],Te);const Ce=new Set(["unknown","unavailable",""]);let Ee=class extends Tt{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-volume-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const t=this._resolveEntities();if("error"in t||!this.hass)return;const e=t.map.weekly_distance;if(!e)return;const a=Date.now();if(!(e===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=e,this._historyFetchedAt=a;try{const t=new Date(a-72576e5).toISOString(),i=await this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${e}&no_attributes`);this._history=Bt(i?.[0])}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e[s="weekly_distance"]?a.states[e[s]]:void 0;var s;if(!i||Ce.has(i.state))return this._message("mdi:chart-bar",St(a,"empty.weekly_volume.title"));const r=function(t,e){const a=[...t].sort((t,e)=>t.t-e.t),i=Date.now(),s=[];for(let t=e-1;t>=0;t--){const e=i-7*t*864e5,r=e-6048e5,n=a.filter(t=>t.t>r&&t.t<=e),o=n[n.length-1];s.push({value:o?o.v:0,weekEndMs:e})}return s}(this._history,12),n=r.map(t=>({value:t.value,label:`${new Date(t.weekEndMs).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${t.value.toFixed(1)} km`})),o=r.reduce((t,e)=>t+e.value,0),c=o/12;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.weekly_volume.title")}</div>
            <div class="subtitle">${St(a,"card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${Rt(n,"var(--sc-amber)",300,80)}

        <div class="stats">
          ${this._stat(Number(i.state).toFixed(1),"km",St(a,"stat.distance"))}
          ${this._stat(c.toFixed(1),"km",St(a,"stat.average"))}
          ${this._stat(o.toFixed(0),"km",St(a,"stat.total"))}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ee.styles=[Ct,Et,n`
    `],t([vt()],Ee.prototype,"_config",void 0),t([vt()],Ee.prototype,"_history",void 0),Ee=t([ut("suunto-weekly-volume-card")],Ee);const Ne=new Set(["unknown","unavailable",""]);let je=class extends Tt{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-curve-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(!(t===this._historyKey&&e-this._historyFetchedAt<6e5)){this._historyKey=t,this._historyFetchedAt=e;try{this._history=await It(this.hass,"suunto_app:hr",26,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e[s="current_hr"]?a.states[e[s]]:void 0;var s;if(!i||Ne.has(i.state))return this._message("mdi:chart-bell-curve",St(a,"empty.hr_curve.title"),St(a,"empty.hr_curve.subtitle"));const r=this._history.map(t=>t.v),n=r.length?Math.min(...r):void 0,o=r.length?Math.max(...r):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-bell-curve"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.hr_curve.title")}</div>
            <div class="subtitle">${St(a,"card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${Ht(this._history,"var(--sc-pulse)")}

        <div class="stats">
          ${this._stat(String(Math.round(Number(i.state))),"bpm",St(a,"stat.hr_now"))}
          ${void 0!==n?this._stat(String(Math.round(n)),"bpm",St(a,"stat.hr_min")):U}
          ${void 0!==o?this._stat(String(Math.round(o)),"bpm",St(a,"stat.hr_max")):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat hr">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};je.styles=[Ct,Et,n`
    `],t([vt()],je.prototype,"_config",void 0),t([vt()],je.prototype,"_history",void 0),je=t([ut("suunto-hr-curve-card")],je);const He=new Set(["unknown","unavailable",""]);let De=class extends Tt{constructor(){super(...arguments),this._durationHistory=[],this._qualityHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-trends-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(t===this._historyKey&&e-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=e;try{const[t,e]=await Promise.all([It(this.hass,"suunto_app:sleep_duration",720,"mean"),It(this.hass,"suunto_app:sleep_quality",720,"mean")]);this._durationHistory=t,this._qualityHistory=e}catch{this._durationHistory=[],this._qualityHistory=[]}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("sleep_duration");if(!s||He.has(s.state))return this._message("mdi:power-sleep",St(a,"empty.sleep_trends.title"));const r=i("sleep_quality"),n=[];this._durationHistory.length&&n.push({points:this._durationHistory,colorVar:"var(--sc-pulse)"}),this._qualityHistory.length&&n.push({points:this._qualityHistory,colorVar:"var(--sc-amber)"});const o=Ut(60*Number(s.state));return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:power-sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.sleep_trends.title")}</div>
            <div class="subtitle">${St(a,"card.sleep_trends.subtitle")}</div>
          </div>
        </div>

        ${Mt(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.duration")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.quality")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${o.value} ${o.unit}`,St(a,"stat.duration"))}
          ${r&&!He.has(r.state)?this._stat(`${Math.round(Number(r.state))}%`,St(a,"stat.quality")):U}
        </div>
      </ha-card>
    `}_stat(t,e){return I`
      <div class="stat">
        <div class="stat-value">${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};De.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],De.prototype,"_config",void 0),t([vt()],De.prototype,"_durationHistory",void 0),t([vt()],De.prototype,"_qualityHistory",void 0),De=t([ut("suunto-sleep-trends-card")],De);let Me=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-streak-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:fire",St(a,"empty.streak.title"));const{streak:n,activeDates:o}=function(t){const e=new Set(t.map(t=>t.start).filter(t=>Boolean(t)).map(t=>new Date(t).toDateString())),a=new Date;e.has(a.toDateString())||a.setDate(a.getDate()-1);let i=0;for(;e.has(a.toDateString());)i++,a.setDate(a.getDate()-1);return{streak:i,activeDates:e}}(r),c=[];let l=0;const d=new Date;d.setDate(d.getDate()-13);for(let t=0;t<14;t++){const t=o.has(d.toDateString());t&&l++,c.push(I`<span
          class="dot"
          style="background:${t?"var(--sc-amber)":"var(--divider-color)"}"
        ></span>`),d.setDate(d.getDate()+1)}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:fire"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.streak.title")}</div>
            <div class="subtitle">${St(a,"card.streak.subtitle")}</div>
          </div>
        </div>

        <div class="streak-row">
          <div class="streak-value">${n}</div>
          <div class="streak-label">
            ${n>0?zt(a,n,"streak.days_one","streak.days_other"):St(a,"streak.none")}
          </div>
        </div>

        <div class="week-dots">${c}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${zt(a,l,"streak.window_count_one","streak.window_count_other")}
          </span>
        </div>
      </ha-card>
    `}};Me.styles=[Ct,Et,n`
      .streak-row {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .streak-value {
        font-size: 2.1rem;
        font-weight: 700;
        line-height: 1;
        color: var(--sc-amber);
        font-variant-numeric: tabular-nums;
      }
      .streak-label {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
      }
      .week-dots {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: block;
      }
      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],t([vt()],Me.prototype,"_config",void 0),Me=t([ut("suunto-streak-card")],Me);const Re=new Set(["unknown","unavailable",""]);let Fe=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-just-finished-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_activity"),r=i("last_workout_start");if(!s||Re.has(s.state)||!r)return this._message("mdi:party-popper",St(a,"empty.just_finished.title"));const n=new Date(r.last_changed),o=Date.now()-n.getTime();if(!(Number.isFinite(o)&&o>=0&&o<216e5))return this._message("mdi:party-popper",St(a,"just_finished.idle.title"),St(a,"just_finished.idle.subtitle"));const c=i("last_distance"),l=i("last_duration"),d=i("last_avg_hr"),u=i("last_tss");return I`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon icon="mdi:party-popper"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"just_finished.title")}</div>
            <div class="subtitle">
              <span class="activity">${s.state}</span> · ${Qt(n,a.language)}
            </div>
          </div>
        </div>

        <div class="stats">
          ${c?this._stat((Number(c.state)/1e3).toFixed(1),"km",St(a,"stat.distance")):U}
          ${l?(()=>{const t=Ut(Number(l.state));return this._stat(t.value,t.unit,St(a,"stat.duration"))})():U}
          ${d?this._stat(String(Math.round(Number(d.state))),"bpm",St(a,"stat.avg_hr")):U}
          ${u?this._stat(Number(u.state).toFixed(0),"",St(a,"stat.tss")):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:U}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Fe.styles=[Ct,Et,n`
      ha-card.celebrate {
        border: 1px solid var(--sc-amber-bg);
      }
      .icon-badge.accent {
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
      }
      .activity {
        text-transform: capitalize;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      /* Force exactly 2 per row: these 4 stats always arrive together (same
         last-workout data), so a responsive wrap would leave a lone 4th
         stat on its own half-empty row. A fixed-count card can commit to a
         clean 2x2 in a way a card with conditionally-present stats can't. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],t([vt()],Fe.prototype,"_config",void 0),Fe=t([ut("suunto-just-finished-card")],Fe);const Pe=new Set(["unknown","unavailable",""]);let Ve=class extends Tt{constructor(){super(...arguments),this._stepsHistory=[],this._energyHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-trends-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(t===this._historyKey&&e-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=e;try{const[t,e]=await Promise.all([It(this.hass,"suunto_app:steps",336,"sum"),It(this.hass,"suunto_app:energy",336,"sum")]);this._stepsHistory=Gt(t),this._energyHistory=Gt(e)}catch{this._stepsHistory=[],this._energyHistory=[]}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("daily_steps");if(!s||Pe.has(s.state))return this._message("mdi:shoe-print",St(a,"empty.activity_trends.title"));const r=i("daily_energy"),n=[];return this._stepsHistory.length&&n.push({points:this._stepsHistory,colorVar:"var(--sc-pulse)"}),this._energyHistory.length&&n.push({points:this._energyHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.activity_trends.title")}</div>
            <div class="subtitle">${St(a,"card.activity_trends.subtitle")}</div>
          </div>
        </div>

        ${Mt(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.steps")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.energy")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(s.state)).toLocaleString(a.language),St(a,"stat.steps"))}
          ${r&&!Pe.has(r.state)?this._stat(`${Math.round(Number(r.state))} kcal`,St(a,"stat.energy")):U}
        </div>
      </ha-card>
    `}_stat(t,e){return I`
      <div class="stat">
        <div class="stat-value">${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};Ve.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],Ve.prototype,"_config",void 0),t([vt()],Ve.prototype,"_stepsHistory",void 0),t([vt()],Ve.prototype,"_energyHistory",void 0),Ve=t([ut("suunto-activity-trends-card")],Ve);const Le=new Set(["unknown","unavailable",""]);let Oe=class extends Tt{constructor(){super(...arguments),this._balanceHistory=[],this._stressHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-balance-trend-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(t===this._historyKey&&e-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=e;try{const[t,e]=await Promise.all([It(this.hass,"suunto_app:recovery_balance",336,"mean"),It(this.hass,"suunto_app:stress",336,"mean")]);this._balanceHistory=Wt(t),this._stressHistory=Wt(e)}catch{this._balanceHistory=[],this._stressHistory=[]}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("recovery_balance");if(!s||Le.has(s.state))return this._message("mdi:heart-flash",St(a,"empty.recovery_balance_trend.title"));const r=i("stress_state"),n=[];return this._balanceHistory.length&&n.push({points:this._balanceHistory,colorVar:"var(--sc-pulse)"}),this._stressHistory.length&&n.push({points:this._stressHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-flash"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.recovery_balance_trend.title")}</div>
            <div class="subtitle">${St(a,"card.recovery_balance_trend.subtitle")}</div>
          </div>
        </div>

        ${Mt(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.recovery_balance")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.stress_level")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${Math.round(Number(s.state))}%`,St(a,"stat.recovery_balance"))}
          ${r&&!Le.has(r.state)?this._stat(r.state,St(a,"stat.stress_level")):U}
        </div>
      </ha-card>
    `}_stat(t,e){return I`
      <div class="stat">
        <div class="stat-value">${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};Oe.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],Oe.prototype,"_config",void 0),t([vt()],Oe.prototype,"_balanceHistory",void 0),t([vt()],Oe.prototype,"_stressHistory",void 0),Oe=t([ut("suunto-recovery-balance-trend-card")],Oe);const qe=new Set(["unknown","unavailable",""]);let Be=class extends Tt{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-readiness-trend-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(!(t===this._historyKey&&e-this._historyFetchedAt<6e5)){this._historyKey=t,this._historyFetchedAt=e;try{this._history=await It(this.hass,"suunto_app:readiness",720,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e[s="readiness"]?a.states[e[s]]:void 0;var s;if(!i||qe.has(i.state))return this._message("mdi:gauge",St(a,"empty.readiness_trend.title"));const r=Number(i.state),n=function(t,e){return e>=70?{colorVar:"var(--sc-good)",label:St(t,"band.readiness.great")}:e>=40?{colorVar:"var(--sc-warn)",label:St(t,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:St(t,"band.readiness.low")}}(a,r);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.readiness_trend.title")}</div>
            <div class="subtitle">${St(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${Ht(this._history,n.colorVar)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value" style="color:${n.colorVar}">${Math.round(r)}</div>
            <div class="stat-label">${n.label}</div>
          </div>
        </div>
      </ha-card>
    `}};Be.styles=[Ct,Et,n`
      .stat-value {
        font-size: 1.4rem;
      }
    `],t([vt()],Be.prototype,"_config",void 0),t([vt()],Be.prototype,"_history",void 0),Be=t([ut("suunto-readiness-trend-card")],Be);function Ie(t){return t<=0?0:1===t?1:2===t?2:3}let Ge=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-calendar-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:calendar-month",St(a,"empty.activity_calendar.title"));const n=function(t){const e=new Map;for(const a of t){if(!a.start)continue;const t=new Date(a.start).toDateString();e.set(t,(e.get(t)??0)+1)}return e}(r),o=new Date,c=(o.getDay()+6)%7,l=new Date(o);l.setDate(o.getDate()-c-35);let d=0;const u=[],h=new Date(l);for(let t=0;t<42;t++){const t=n.get(h.toDateString())??0;t>0&&d++;const e=Ie(t);u.push(I`<span
          class="cell level-${e}"
          title=${h.toLocaleDateString(a.language)}
        ></span>`),h.setDate(h.getDate()+1)}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-month"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.activity_calendar.title")}</div>
            <div class="subtitle">${St(a,"card.activity_calendar.subtitle")}</div>
          </div>
        </div>

        <div class="cal-grid">${u}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${zt(a,d,"activity_calendar.active_days_one","activity_calendar.active_days_other")}
          </span>
        </div>
      </ha-card>
    `}};function We(t){const e=Math.round(60*t);if(0===e)return"±0:00";const a=e>0?"+":"-",i=Math.abs(e);return`${a}${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}Ge.styles=[Ct,Et,n`
      .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }
      .cell {
        aspect-ratio: 1;
        border-radius: 3px;
        background: var(--divider-color);
        display: block;
      }
      .cell.level-1 {
        background: color-mix(in srgb, var(--sc-amber) 35%, var(--divider-color));
      }
      .cell.level-2 {
        background: color-mix(in srgb, var(--sc-amber) 65%, var(--divider-color));
      }
      .cell.level-3 {
        background: var(--sc-amber);
      }
      .footer {
        display: flex;
      }
    `],t([vt()],Ge.prototype,"_config",void 0),Ge=t([ut("suunto-activity-calendar-card")],Ge);let Ue=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-workout-comparison-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(t){const e=t[0];if(!e?.activity)return;const a=t.slice(1).find(t=>t.activity===e.activity);return a?{current:e,previous:a}:void 0}(r):void 0;if(!n)return this._message("mdi:compare",St(a,"empty.workout_comparison.title"),St(a,"empty.workout_comparison.subtitle"));const{current:o,previous:c}=n,l=null!==o.distance_km&&null!==c.distance_km?o.distance_km-c.distance_km:void 0,d=null!==o.duration_min&&null!==c.duration_min?o.duration_min-c.duration_min:void 0,u=null!==o.avg_hr&&null!==c.avg_hr?o.avg_hr-c.avg_hr:void 0,h=o.distance_km&&o.duration_min?o.duration_min/o.distance_km:void 0,p=c.distance_km&&c.duration_min?c.duration_min/c.distance_km:void 0,m=void 0!==h&&void 0!==p?h-p:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Ot(o.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.workout_comparison.title")}</div>
            <div class="subtitle">
              <span class="activity">${o.activity}</span> ·
              ${St(a,"card.workout_comparison.vs",{time:c.start?Qt(new Date(c.start),a.language):""})}
            </div>
          </div>
        </div>

        <div class="stats">
          ${null!==o.distance_km?this._stat(o.distance_km.toFixed(1),"km",void 0!==l?St(a,"stat.distance_delta",{delta:Jt(l,1)}):St(a,"stat.distance")):U}
          ${null!==o.duration_min?(()=>{const t=Ut(o.duration_min);return this._stat(t.value,t.unit,void 0!==d?St(a,"stat.duration_delta",{delta:Jt(d,0)+" min"}):St(a,"stat.duration"))})():U}
          ${null!==o.avg_hr?this._stat(String(Math.round(o.avg_hr)),"bpm",void 0!==u?St(a,"stat.avg_hr_delta",{delta:Jt(u,0)}):St(a,"stat.avg_hr")):U}
          ${void 0!==h?this._stat(`${Math.floor(h)}:${String(Math.round(h%1*60)).padStart(2,"0")}`,"/km",void 0!==m?St(a,"stat.pace_delta",{delta:We(m)}):St(a,"stat.avg_pace")):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ue.styles=[Ct,Et,n`
      .activity {
        text-transform: capitalize;
      }
      /* These 4 stats are fixed once a comparison pair exists (all derived
         from the same two records) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],t([vt()],Ue.prototype,"_config",void 0),Ue=t([ut("suunto-workout-comparison-card")],Ue);const Ke=new Set(["unknown","unavailable",""]);let Ze=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-milestones-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("lifetime_distance");if(!s||Ke.has(s.state))return this._message("mdi:earth",St(a,"empty.milestones.title"));const r=i("lifetime_energy"),n=Number(s.state),o=n/40075,c=n/42.195,l=n/384400*100,d=r&&!Ke.has(r.state)?Number(r.state)/550:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:earth"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.milestones.title")}</div>
            <div class="subtitle">${St(a,"card.milestones.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(o.toFixed(2),St(a,"stat.earth_laps"))}
          ${this._stat(c.toFixed(0),St(a,"stat.marathons"))}
          ${this._stat(`${l.toFixed(1)}%`,St(a,"stat.moon_pct"))}
          ${void 0!==d?this._stat(d.toFixed(0),St(a,"stat.burgers")):U}
        </div>
      </ha-card>
    `}_stat(t,e){return I`
      <div class="stat">
        <div class="stat-value">${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};Ze.styles=[Ct,Et,n`
      /* 4 stats always arrive together (same lifetime snapshot) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],t([vt()],Ze.prototype,"_config",void 0),Ze=t([ut("suunto-milestones-card")],Ze);const Je=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];let Ye=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-athlete-profile-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.lifetime_by_activity,s=i?a.states[i]:void 0,r=s?.attributes.activities??[],n=e.workouts_recent,o=n?a.states[n]:void 0,c=o?.attributes.workouts??[];if(0===r.length||0===c.length)return this._message("mdi:account-star",St(a,"empty.athlete_profile.title"));const l=[...r].sort((t,e)=>e.workouts-t.workouts)[0].activity,d=function(t){for(const[e,a]of Je)if(e.test(t))return a;return"personality.activity.other"}(l),u=function(t){const e=t.filter(t=>Boolean(t.start)),a=e.filter(t=>{const e=new Date(t.start).getDay();return 0===e||6===e}).length,i=a/e.length;return i>=.6?"personality.schedule.weekend":i<=.25?"personality.schedule.weekday":"personality.schedule.balanced"}(c),h=function(t){const e={morning:0,afternoon:0,evening:0,night:0};for(const a of t){if(!a.start)continue;const t=new Date(a.start).getHours();t>=5&&t<12?e.morning++:t>=12&&t<18?e.afternoon++:t>=18&&t<23?e.evening++:e.night++}const a=Object.entries(e).sort((t,e)=>e[1]-t[1])[0][0];return{morning:{key:"personality.time.morning",icon:"mdi:weather-sunset-up"},afternoon:{key:"personality.time.afternoon",icon:"mdi:weather-sunny"},evening:{key:"personality.time.evening",icon:"mdi:weather-sunset"},night:{key:"personality.time.night",icon:"mdi:weather-night"}}[a]}(c);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:account-star"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.athlete_profile.title")}</div>
            <div class="subtitle">
              ${St(a,d)} · ${St(a,u)} · ${St(a,h.key)}
            </div>
          </div>
        </div>

        <div class="traits">
          <span class="chip accent"><ha-icon .icon=${Ot(l)}></ha-icon>${St(a,d)}</span>
          <span class="chip accent"><ha-icon icon="mdi:calendar-weekend"></ha-icon>${St(a,u)}</span>
          <span class="chip accent"><ha-icon .icon=${h.icon}></ha-icon>${St(a,h.key)}</span>
        </div>
      </ha-card>
    `}};Ye.styles=[Ct,Et,n`
      .traits {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],t([vt()],Ye.prototype,"_config",void 0),Ye=t([ut("suunto-athlete-profile-card")],Ye);let Qe=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pace-trend-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(t){const e=t[0]?.activity;if(!e)return;const a=t.filter(t=>t.activity===e&&t.start&&t.distance_km&&t.duration_min).map(t=>({t:new Date(t.start).getTime(),v:t.duration_min/t.distance_km})).sort((t,e)=>t.t-e.t);if(a.length<2)return;const i=Math.ceil(a.length/2),s=a.slice(0,i),r=a.slice(i).length?a.slice(i):a.slice(-1),n=t=>t.reduce((t,e)=>t+e.v,0)/t.length,o=n(s),c=(n(r)-o)/o,l=c<-.03?"faster":c>.03?"slower":"steady";return{activity:e,points:a,latestPace:a[a.length-1].v,direction:l}}(r):void 0;if(!n)return this._message("mdi:speedometer",St(a,"empty.pace_trend.title"),St(a,"empty.pace_trend.subtitle"));const o="faster"===n.direction?{colorVar:"var(--sc-good)",label:St(a,"pace_trend.faster")}:"slower"===n.direction?{colorVar:"var(--sc-warn)",label:St(a,"pace_trend.slower")}:{colorVar:"var(--sc-pulse)",label:St(a,"pace_trend.steady")};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Ot(n.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.pace_trend.title")}</div>
            <div class="subtitle">
              ${St(a,"card.pace_trend.subtitle",{activity:n.activity,count:n.points.length})}
            </div>
          </div>
        </div>

        ${Ht(n.points,o.colorVar)}

        <div class="footer">
          <div class="stat">
            <div class="stat-value">${Kt(n.latestPace)}<span class="unit">/km</span></div>
            <div class="stat-label">${St(a,"stat.avg_pace")}</div>
          </div>
          <span class="chip" style="color:${o.colorVar}">${o.label}</span>
        </div>
      </ha-card>
    `}};Qe.styles=[Ct,Et,n`
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
    `],t([vt()],Qe.prototype,"_config",void 0),Qe=t([ut("suunto-pace-trend-card")],Qe);let Xe=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lap-splits-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.last_workout_laps,s=i?a.states[i]:void 0,r=s?.attributes.laps??[];if(!s||0===r.length)return this._message("mdi:flag-checkered",St(a,"empty.lap_splits.title"),St(a,"empty.lap_splits.subtitle"));const n=function(t){const e=t.map((t,e)=>({i:e,pace:t.pace_min_km})).filter(t=>null!==t.pace&&t.pace>0);return e.length>0?e.reduce((t,e)=>e.pace<t.pace?e:t).i:t.reduce((e,a,i)=>a.duration_minutes<t[e].duration_minutes?i:e,0)}(r),o=null!==r[n].pace_min_km&&r[n].pace_min_km>0?`${Kt(r[n].pace_min_km)}/km`:(()=>{const t=Ut(r[n].duration_minutes);return`${t.value} ${t.unit}`})(),c=r.map((t,e)=>{const i=Ut(t.duration_minutes),s=St(a,"label.lap",{n:t.lap});return{value:t.duration_minutes,label:t.pace_min_km&&t.pace_min_km>0?`${s} · ${Kt(t.pace_min_km)}/km`:`${s} · ${i.value}${i.unit}`,colorVar:e===n?"var(--sc-good)":void 0}}),l=e.last_workout_start,d=l?a.states[l]:void 0,u=St(a,"card.hr_zones.last_workout");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.lap_splits.title")}</div>
            <div class="subtitle">
              ${d?`${u} · ${Qt(new Date(d.state),a.language)}`:u}
            </div>
          </div>
        </div>

        ${Rt(c,"var(--sc-pulse)",300,70)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${r.length}</div>
            <div class="stat-label">${St(a,"stat.laps")}</div>
          </div>
          <div class="stat good">
            <div class="stat-value">${o}</div>
            <div class="stat-label">${St(a,"stat.fastest_lap")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map((t,e)=>{const a=Ut(t.duration_minutes);return I`
              <div class="lap-row">
                <div class="lap-number ${e===n?"fastest":""}">${t.lap}</div>
                <div class="lap-meta">
                  ${null!==t.distance_km?I`<span>${t.distance_km.toFixed(2)} km</span><span class="sep">·</span>`:U}
                  <span>${a.value} ${a.unit}</span>
                </div>
                <div class="lap-value">
                  ${null!==t.pace_min_km&&t.pace_min_km>0?I`${Kt(t.pace_min_km)}<span class="unit">/km</span>`:I`${a.value}<span class="unit">${a.unit}</span>`}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};Xe.styles=[Ct,Et,n`
      .lap-row {
        display: grid;
        grid-template-columns: 22px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .lap-number {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--sc-chip-bg);
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.68rem;
        font-weight: 700;
        flex: none;
      }
      .lap-number.fastest {
        background: var(--sc-good-bg);
        color: var(--sc-good);
      }
      .lap-meta {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .lap-meta .sep {
        opacity: 0.45;
        margin: 0 4px;
      }
      .lap-value {
        font-size: 0.85rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .lap-value .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 1px;
      }
    `],t([vt()],Xe.prototype,"_config",void 0),Xe=t([ut("suunto-lap-splits-card")],Xe);const ta=new Set(["unknown","unavailable",""]);let ea=class extends Tt{constructor(){super(...arguments),this._pteHistory=[],this._epocHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-effect-trend-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const t=this._configuredDeviceId??"auto",e=Date.now();if(t===this._historyKey&&e-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=e;try{const[t,e]=await Promise.all([It(this.hass,"suunto_app:pte",720,"mean"),It(this.hass,"suunto_app:epoc",720,"mean")]);this._pteHistory=t,this._epocHistory=e}catch{this._pteHistory=[],this._epocHistory=[]}}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("last_pte");if(!s||ta.has(s.state))return this._message("mdi:lightning-bolt",St(a,"empty.training_effect_trend.title"));const r=i("last_epoc"),n=[];return this._pteHistory.length&&n.push({points:this._pteHistory,colorVar:"var(--sc-pulse)"}),this._epocHistory.length&&n.push({points:this._epocHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lightning-bolt"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.training_effect_trend.title")}</div>
            <div class="subtitle">${St(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${Mt(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${St(a,"stat.training_effect")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${St(a,"stat.epoc")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),St(a,"stat.training_effect"))}
          ${r&&!ta.has(r.state)?this._stat(Number(r.state).toFixed(0),St(a,"stat.epoc"),"ml/kg"):U}
        </div>
      </ha-card>
    `}_stat(t,e,a){return I`
      <div class="stat">
        <div class="stat-value">${t}${a?I`<span class="unit">${a}</span>`:U}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};ea.styles=[Ct,Et,n`
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],ea.prototype,"_config",void 0),t([vt()],ea.prototype,"_pteHistory",void 0),t([vt()],ea.prototype,"_epocHistory",void 0),ea=t([ut("suunto-training-effect-trend-card")],ea);const aa=new Set(["unknown","unavailable",""]);let ia=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-status-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("readiness"),r=i("training_suggestion"),n=i("unusual_recovery"),o=s&&!aa.has(s.state)?Number(s.state):void 0,c=r&&!aa.has(r.state)?r.state:void 0;if(void 0===o&&void 0===c)return this._message("mdi:compass-outline",St(a,"empty.training_status.title"),St(a,"empty.training_status.subtitle"));const l=void 0!==o?function(t,e){return e>=70?{colorVar:"var(--sc-good)",label:St(t,"band.readiness.great")}:e>=40?{colorVar:"var(--sc-warn)",label:St(t,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:St(t,"band.readiness.low")}}(a,o):void 0,d=void 0!==c?function(t,e){switch(e){case"hard":return{colorVar:"var(--sc-good)",label:St(t,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:St(t,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:St(t,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:St(t,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,c):void 0,u="on"===n?.state;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:compass-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.training_status.title")}</div>
            <div class="subtitle">${d?.label??l?.label??""}</div>
          </div>
        </div>

        ${u?I`<div class="alert"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${St(a,"chip.unusual_recovery")}</div>`:U}

        ${d?I`
              <div class="suggestion-row">
                <div class="suggestion-badge" style="background:${d.colorVar}22; color:${d.colorVar}">
                  <ha-icon icon="${d.icon}"></ha-icon>
                </div>
                <div class="suggestion-text">
                  <div class="suggestion-label">${St(a,"stat.training_suggestion")}</div>
                  <div class="suggestion-value" style="color:${d.colorVar}">${d.label}</div>
                </div>
              </div>
            `:U}

        ${void 0!==o&&l?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${jt(o,l.colorVar,52,6)}
                  <div class="ring-value" style="color:${l.colorVar}">${Math.round(o)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${St(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${l.colorVar}">${l.label}</div>
                </div>
              </div>
            `:U}
      </ha-card>
    `}};ia.styles=[Ct,Et,n`
      .alert {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--sc-bad-bg);
        color: var(--sc-bad);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 0.8rem;
        font-weight: 600;
      }
      .suggestion-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .suggestion-badge {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
      .suggestion-badge ha-icon {
        --mdc-icon-size: 22px;
      }
      .suggestion-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .suggestion-value {
        font-size: 1.15rem;
        font-weight: 700;
      }
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 52px;
        height: 52px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 0.95rem;
        font-weight: 600;
      }
    `],t([vt()],ia.prototype,"_config",void 0),ia=t([ut("suunto-training-status-card")],ia);const sa=new Set(["unknown","unavailable",""]);function ra(t){return Math.max(0,Math.min(100,t))}function na(t,e,a,i){const s=(i-90)*Math.PI/180;return[t+a*Math.cos(s),e+a*Math.sin(s)]}let oa=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-profile-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=t=>e[t]?a.states[e[t]]:void 0,s=i("weekly_distance"),r=i("lifetime_distance"),n=i("lifetime_days"),o=i("acwr"),c=i("workouts_7d"),l=i("readiness"),d=i("workouts_recent"),u=d?.attributes.workouts??[],h=[s,o,c,l].some(t=>t&&!sa.has(t.state));if(!h&&0===u.length)return this._message("mdi:radar",St(a,"empty.training_profile.title"),St(a,"empty.training_profile.subtitle"));const p=t=>t&&!sa.has(t.state)?Number(t.state):0,m=p(r),v=p(n),g=v>0?m/v*7:0,_=g>0?ra(p(s)/(1.4*g)*100):0,y=ra(p(o)/1.5*100),f=ra(p(c)/7*100),b=ra(p(l)),w=new Set(u.map(t=>t.activity).filter(Boolean)).size,k=ra(w/5*100),$=[{label:St(a,"stat.volume"),value:_},{label:St(a,"stat.intensity"),value:y},{label:St(a,"stat.consistency"),value:f},{label:St(a,"stat.recovery"),value:b},{label:St(a,"stat.variety"),value:k}],x=[...$].sort((t,e)=>e.value-t.value)[0],S=[...$].sort((t,e)=>t.value-e.value)[0],z=130,A=128,T=360/$.length,C=[.25,.5,.75,1].map(t=>{const e=$.map((e,a)=>na(z,A,84*t,T*a).join(",")).join(" ");return G`<polygon class="radar-grid" points=${e}></polygon>`}),E=$.map((t,e)=>{const[a,i]=na(z,A,84,T*e);return G`<line class="radar-axis" x1=${z} y1=${A} x2=${a} y2=${i}></line>`}),N=$.map((t,e)=>na(z,A,84*t.value/100,T*e)),j=G`<polygon class="radar-fill" points=${N.map(t=>t.join(",")).join(" ")}></polygon>`,H=N.map(([t,e])=>G`<circle class="radar-vertex" cx=${t} cy=${e} r="3.2"></circle>`),D=$.map((t,e)=>{const a=T*e,[i,s]=na(z,A,104.16,a);let r="middle";return a>10&&a<170&&(r="start"),a>190&&a<350&&(r="end"),G`
        <text class="radar-label" x=${i} y=${s-5} text-anchor=${r}>${t.label}</text>
        <text class="radar-value" x=${i} y=${s+7} text-anchor=${r}>${Math.round(t.value)}</text>
      `});return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:radar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${St(a,"card.training_profile.title")}</div>
            <div class="subtitle">${St(a,"card.training_profile.subtitle")}</div>
          </div>
        </div>

        <div class="radar-wrap">
          <svg class="radar-svg" viewBox="0 0 260 260">
            ${C}${E}${j}${H}${D}
          </svg>
        </div>

        <div class="radar-summary">
          ${St(a,"profile.summary",{strong:x.label,light:S.label})}
        </div>
      </ha-card>
    `}};oa.styles=[Ct,Et,n`
      .radar-wrap {
        display: flex;
        justify-content: center;
        padding: 4px 0 0;
      }
      .radar-svg {
        width: 100%;
        max-width: 260px;
        height: auto;
        overflow: visible;
      }
      .radar-grid {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .radar-axis {
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .radar-fill {
        fill: var(--sc-amber);
        fill-opacity: 0.22;
        stroke: var(--sc-amber);
        stroke-width: 2;
        stroke-linejoin: round;
      }
      .radar-vertex {
        fill: var(--sc-amber);
        stroke: var(--card-background-color);
        stroke-width: 2;
      }
      .radar-label {
        font-size: 8px;
        fill: var(--secondary-text-color);
      }
      .radar-value {
        font-size: 8.5px;
        font-weight: 700;
        fill: var(--primary-text-color);
      }
      .radar-summary {
        text-align: center;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
    `],t([vt()],oa.prototype,"_config",void 0),oa=t([ut("suunto-training-profile-card")],oa);const ca=new Set(["unknown","unavailable",""]),la=100,da=[[0,0],[26,0],[32,-3],[38,0],[44,0],[47,5],[50,-22],[53,8],[56,-2],[60,0],[66,0],[70,-5],[74,0],[100,0]],ua=300;let ha=class extends Tt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-heart-rate-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return U;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,a=this.hass,i=e.current_hr?a.states[e.current_hr]:void 0;if(!i||ca.has(i.state))return this._message("mdi:heart-pulse",St(a,"empty.heart_rate.title"));const s=Math.round(Number(i.state)),r=60/s,n=[];for(let t=0;t<=ua;t+=10)n.push(G`<line class="hr-grid-line ${t%50==0?"major":""}" x1=${t} y1="0" x2=${t} y2=${64}></line>`);for(let t=0;t<=64;t+=10)n.push(G`<line class="hr-grid-line ${t%50==0?"major":""}" x1="0" y1=${t} x2=${ua} y2=${t}></line>`);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge hr-icon-badge">
            <ha-icon class="hr-beat" style="animation-duration:${r}s" icon="mdi:heart"></ha-icon>
          </div>
          <div class="title-block">
            <div class="title">${St(a,"card.heart_rate.title")}</div>
          </div>
        </div>

        <div class="hr-strip-wrap">
          <svg class="hr-strip" viewBox="0 0 ${ua} ${64}" preserveAspectRatio="none">
            ${n}
            <path
              class="hr-trace hr-scroll"
              d=${function(){const t=[];for(let e=Math.floor(-1)*la;e<=400;e+=la)for(const[a,i]of da)t.push(`${e+a},${32+i}`);return"M"+t.join(" L")}()}
              style="animation-duration:${r}s; --drift-distance:-${la}px"
            ></path>
            <text class="hr-corner-value" x="6" y="58">${s} bpm</text>
          </svg>
        </div>
      </ha-card>
    `}};ha.styles=[Ct,Et,n`
      .hr-icon-badge {
        background: var(--sc-pulse-bg);
        color: var(--sc-pulse);
      }
      .hr-beat {
        transform-origin: center;
        animation-name: sc-heartbeat;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
      }
      @keyframes sc-heartbeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.16); }
        28% { transform: scale(1); }
        42% { transform: scale(1.09); }
        56% { transform: scale(1); }
        100% { transform: scale(1); }
      }
      /*
       * A real hospital monitor screen, not a chart on the card's own
       * surface - deliberately NOT theme-reactive (stays this dark
       * regardless of light/dark mode), the same way an embedded device
       * screenshot would be.
       */
      .hr-strip-wrap {
        width: 100%;
        height: 72px;
        overflow: hidden;
        border-radius: 6px;
        background: #071a12;
        padding: 3px;
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.06),
          inset 0 1px 6px rgba(0, 0, 0, 0.5);
      }
      .hr-strip {
        width: 100%;
        height: 100%;
        display: block;
      }
      .hr-grid-line {
        stroke: #16382a;
        stroke-width: 0.6;
      }
      .hr-grid-line.major {
        stroke: #1e4a37;
        stroke-width: 0.9;
      }
      .hr-trace {
        fill: none;
        stroke: #3cf28a;
        stroke-width: 1.6;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: drop-shadow(0 0 2.5px #3cf28a) drop-shadow(0 0 6px rgba(60, 242, 138, 0.55));
      }
      .hr-corner-value {
        font-size: 8px;
        font-weight: 700;
        letter-spacing: 0.03em;
        fill: #3cf28a;
        opacity: 0.85;
      }
      .hr-scroll {
        animation-name: sc-hr-scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      @keyframes sc-hr-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(var(--drift-distance, -100px)); }
      }
      @media (prefers-reduced-motion: reduce) {
        .hr-beat, .hr-scroll { animation: none !important; }
      }
    `],t([vt()],ha.prototype,"_config",void 0),ha=t([ut("suunto-heart-rate-card")],ha),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0},{type:"suunto-lifetime-card",name:"Suunto - Lifetime Totals",description:"Total distance, time, energy, workouts and active days since you started.",preview:!0},{type:"suunto-recent-workouts-card",name:"Suunto - Recent Workouts",description:"A scrollable log of your last 15 workouts - activity, distance and duration.",preview:!0},{type:"suunto-elevation-card",name:"Suunto - Elevation & Climbing",description:"Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",preview:!0},{type:"suunto-location-card",name:"Suunto - Start Location",description:"Where your last workout started, with a one-tap link to open it in Maps.",preview:!0},{type:"suunto-fitness-card",name:"Suunto - Fitness",description:"VO2max, estimated VO2max and fitness age, with when they were last measured.",preview:!0},{type:"suunto-last-workout-tile-card",name:"Suunto - Last Workout (compact)",description:"A single-row summary of your last workout, for denser dashboards.",preview:!0},{type:"suunto-pmc-card",name:"Suunto - Performance Management",description:"CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",preview:!0},{type:"suunto-recovery-trends-card",name:"Suunto - Recovery Trends",description:"Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",preview:!0},{type:"suunto-weekly-volume-card",name:"Suunto - Weekly Volume",description:"A 12-week bar chart of your training distance, with the average and total.",preview:!0},{type:"suunto-hr-curve-card",name:"Suunto - Heart Rate Curve",description:"Today's 24/7 heart rate curve, from your watch's continuous heart rate tracking.",preview:!0},{type:"suunto-sleep-trends-card",name:"Suunto - Sleep Trends",description:"Sleep duration and quality over the last 30 nights.",preview:!0},{type:"suunto-weekly-goal-card",name:"Suunto - Weekly Goal",description:"This week's distance against a target you set.",preview:!0},{type:"suunto-streak-card",name:"Suunto - Activity Streak",description:"How many consecutive days you've been active.",preview:!0},{type:"suunto-just-finished-card",name:"Suunto - Just Finished",description:"Lights up right after your watch syncs a new workout, then goes quiet again.",preview:!0},{type:"suunto-activity-trends-card",name:"Suunto - Activity Trends",description:"Daily steps and energy over the last 14 days.",preview:!0},{type:"suunto-recovery-balance-trend-card",name:"Suunto - Recovery Balance Trend",description:"Recovery balance and stress level over the last 14 days.",preview:!0},{type:"suunto-readiness-trend-card",name:"Suunto - Readiness Trend",description:"Your readiness score over the last 30 days.",preview:!0},{type:"suunto-activity-calendar-card",name:"Suunto - Activity Calendar",description:"A GitHub-style heatmap of your active days over the last 6 weeks.",preview:!0},{type:"suunto-workout-comparison-card",name:"Suunto - Workout Comparison",description:"Your last workout vs the previous one of the same activity, side by side.",preview:!0},{type:"suunto-milestones-card",name:"Suunto - By The Numbers",description:"Your lifetime distance and energy converted into fun equivalents.",preview:!0},{type:"suunto-athlete-profile-card",name:"Suunto - Training Personality",description:"Your dominant sport, schedule pattern and time-of-day, computed from your history.",preview:!0},{type:"suunto-pace-trend-card",name:"Suunto - Pace Trend",description:"Whether your pace is improving over your recent same-activity workouts.",preview:!0},{type:"suunto-lap-splits-card",name:"Suunto - Lap Splits",description:"Per-lap duration, distance and pace from your last workout, with the fastest lap highlighted.",preview:!0},{type:"suunto-training-effect-trend-card",name:"Suunto - Training Effect Trend",description:"Peak training effect and peak EPOC over the last 30 days.",preview:!0},{type:"suunto-training-status-card",name:"Suunto - Training Status",description:"Today's training suggestion and readiness in one place, with an unusual-recovery warning.",preview:!0},{type:"suunto-training-profile-card",name:"Suunto - Training Profile",description:"A five-axis radar of volume, intensity, consistency, recovery and variety, at a glance.",preview:!0},{type:"suunto-heart-rate-card",name:"Suunto - Heart Rate",description:"A clinical-monitor-style ECG trace, its beat paced by your actual current heart rate.",preview:!0}),console.info("%c SUUNTO-CARDS %c 34 cards loaded ","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
