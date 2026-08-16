function e(e,t,a,i){var s,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,a,n):s(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new r(a,e,i)},o=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,m=globalThis,v=m.trustedTypes,g=v?v.emptyScript:"",y=m.reactiveElementPolyfillSupport,_=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);s?.call(this,t),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(a)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:f).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i;const r=s.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,a,i=!1,s){if(void 0!==e){const r=this.constructor;if(!1===i&&(s=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??b)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[_("elementProperties")]=new Map,k[_("finalized")]=new Map,y?.({ReactiveElement:k}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=e=>e,z=x.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,E=`<${T}>`,j=document,N=()=>j.createComment(""),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,V="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,H=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,O=/"/g,q=/^(?:script|style|textarea|title)$/i,B=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),W=B(1),G=B(2),I=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),U=new WeakMap,Z=j.createTreeWalker(j,129);function X(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const a=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=D;for(let t=0;t<a;t++){const a=e[t];let o,c,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,c=n.exec(a),null!==c);)d=n.lastIndex,n===D?"!--"===c[1]?n=F:void 0!==c[1]?n=P:void 0!==c[2]?(q.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=H):void 0!==c[3]&&(n=H):n===H?">"===c[0]?(n=s??D,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,o=c[1],n=void 0===c[3]?H:'"'===c[3]?O:L):n===O||n===L?n=H:n===F||n===P?n=D:(n=H,s=void 0);const u=n===H&&e[t+1].startsWith("/>")?" ":"";r+=n===D?a+E:l>=0?(i.push(o),a.slice(0,l)+A+a.slice(l)+C+u):a+C+(-2===l?t:u)}return[X(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Q{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[c,l]=J(e,t);if(this.el=Q.createElement(c,a),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Z.nextNode())&&o.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=l[r++],a=i.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:n[2],strings:a,ctor:"."===n[1]?ie:"?"===n[1]?se:"@"===n[1]?re:ae}),i.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(q.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=z?z.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],N()),Z.nextNode(),o.push({type:2,index:++s});i.append(e[t],N())}}}else if(8===i.nodeType)if(i.data===T)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)o.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const a=j.createElement("template");return a.innerHTML=e,a}}function Y(e,t,a=e,i){if(t===I)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const r=R(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=Y(e,s._$AS(e,t.values),s,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??j).importNode(t,!0);Z.currentNode=i;let s=Z.nextNode(),r=0,n=0,o=a[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new te(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new ne(s,this,e)),this._$AV.push(t),o=a[++n]}r!==o?.index&&(s=Z.nextNode(),r++)}return Z.currentNode=j,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),R(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==I&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Q.createElement(X(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new Q(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new te(this.O(N()),this.O(N()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=K}_$AI(e,t=this,a,i){const s=this.strings;let r=!1;if(void 0===s)e=Y(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const i=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=Y(this,i[a+n],t,n),o===I&&(o=this._$AH[n]),r||=!R(o)||o!==this._$AH[n],o===K?e=K:e!==K&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class se extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class re extends ae{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??K)===I)return;const a=this._$AH,i=e===K&&a!==K||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==K&&(a===K||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const oe=x.litHtmlPolyfillSupport;oe?.(Q,te),(x.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new te(t.insertBefore(N(),e),e,void 0,a??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}le._$litElement$=!0,le.finalized=!0,ce.litElementHydrateSupport?.({LitElement:le});const de=ce.litElementPolyfillSupport;de?.({LitElement:le}),(ce.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b},he=(e=pe,t,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];t.call(this,a),this.requestUpdate(i,s,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return(t,a)=>"object"==typeof a?he(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ve(e){return me({...e,state:!0,attribute:!1})}var ge,ye;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ge||(ge={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ye||(ye={}));var _e=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s};const fe="suunto_app";class be extends Error{constructor(e,t){super(e),this.code=e,this.deviceId=t}}function we(e){const t=new Set;for(const a of Object.values(e.entities??{}))a.platform===fe&&a.device_id&&t.add(a.device_id);return[...t]}function ke(e,t){const a=we(e);if(t){if(!a.includes(t))throw new be("device_missing",t);return t}if(1===a.length)return a[0];if(0===a.length)throw new be("no_device");throw new be("multiple_devices")}function xe(e,t){const a={};for(const i of Object.values(e.entities??{}))i.device_id===t&&i.platform===fe&&i.translation_key&&(a[i.translation_key]=i.entity_id);return a}const $e={"stat.distance":"Distance","stat.duration":"Duration","stat.avg_speed":"Avg speed","stat.avg_pace":"Avg pace","stat.avg_hr":"Avg HR","stat.max_hr":"Max HR","stat.training_effect":"Training effect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Feeling","stat.energy":"Energy","stat.time":"Time","stat.workouts":"Workouts","stat.steps":"Steps","stat.heart_rate":"Heart rate","stat.quality":"Quality","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Resting HR","stat.resting_hr_delta":"Resting HR ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stress level","stat.recovery_window":"Recovery time","stat.ctl":"CTL · fitness","stat.atl":"ATL · fatigue","stat.tsb":"TSB · form","stat.readiness":"Readiness","stat.recovery_balance":"Recovery balance","stat.training_suggestion":"Today's suggestion","stat.volume":"Volume","stat.intensity":"Intensity","stat.consistency":"Consistency","stat.recovery":"Recovery","stat.variety":"Variety","card.hr_zones.title":"Heart Rate Zones","card.hr_zones.last_workout":"Last workout","card.sleep_readiness.title":"Sleep & Readiness","card.sleep_readiness.subtitle_no_wake":"{duration} slept","card.sleep_readiness.subtitle_with_wake":"{duration} slept · woke {time}","card.recovery.title":"Recovery","card.training_load.title":"Training Load","card.training_load.subtitle_fallback":"Fitness (CTL) trend","card.week_stats.title":"This Week & Lifetime","card.week_stats.subtitle":"Last 7 days","card.week_stats.lifetime_title":"Lifetime by activity","card.today.title":"Today","card.today.subtitle":"Live from your watch","card.training_status.title":"Training Status","card.training_profile.title":"Training Profile","card.training_profile.subtitle":"Your training, at a glance","card.heart_rate.title":"Heart Rate","empty.last_workout.title":"No recent workout","empty.last_workout.subtitle":"Sync your watch with the Suunto app to see it here.","empty.hr_zones.title":"No zone data","empty.hr_zones.subtitle":"Your next outdoor workout with a heart-rate strap will fill this in.","empty.sleep_readiness.title":"No sleep data yet","empty.sleep_readiness.subtitle":"Wear your watch to bed to see it here.","empty.recovery.title":"No recovery data yet","empty.training_load.title":"Building your training load","empty.training_load.subtitle":"Needs a bit of workout history to compute - check back after a few sessions.","empty.week_stats.title":"No workout history yet","empty.today.title":"No live data yet","empty.training_status.title":"Not enough data yet","empty.training_status.subtitle":"Needs a bit of training history to compute.","empty.training_profile.title":"Not enough data yet","empty.training_profile.subtitle":"Needs a few more sensors reporting to compute your profile.","empty.heart_rate.title":"No live heart rate yet","empty.loading":"Loading...","empty.generic_error":"Could not load Suunto data.","error.no_device":"No Suunto device found - is the suunto_app integration set up?","error.multiple_devices":'Multiple Suunto devices found - set "device_id" in the card configuration.',"error.device_missing":'Configured device "{device}" has no suunto_app entities.',"band.readiness.great":"Great","band.readiness.fair":"Fair","band.readiness.low":"Low","band.recovery.well":"Well recovered","band.recovery.partial":"Partially recovered","band.recovery.low":"Low recovery","band.recovery.fully":"Fully recovered","band.recovery.recovering":"Recovering · {time} left","band.hrv.low":"HRV low","band.hrv.high":"HRV high","band.hrv.balanced":"HRV balanced","band.form.fresh":"Fresh","band.form.neutral":"Neutral","band.form.fatigued":"Fatigued","band.form.very_fatigued":"Very fatigued","band.acwr.safe":"Safe zone","band.acwr.low":"Low load","band.acwr.high":"High load - injury risk","band.suggestion.hard":"Go for it","band.suggestion.moderate":"Moderate effort","band.suggestion.easy":"Take it easy","band.suggestion.rest":"Rest day","chip.workout_logged_today":"Workout logged today","chip.workout_today":"Workout today","chip.recovering":"Recovering","chip.nap":"{minutes} min nap","chip.nap_earlier":"{minutes} min nap (earlier)","chip.workouts_30d":"{count} workouts in the last 30 days","chip.acwr":"ACWR {value} · {label}","profile.summary":"Strongest on {strong} · lightest on {light}","chip.more_activity_one":"+{count} more activity type","chip.more_activity_other":"+{count} more activity types","chip.unusual_recovery":"Unusual recovery","chip.days_since_one":"{count} day since last workout","chip.days_since_other":"{count} days since last workout","achievement.count_one":"{count} achievement","achievement.count_other":"{count} achievements","achievement.rank":"Rank #{rank} on this route","label.zone":"Zone {n}","label.deep":"Deep","label.light":"Light","label.rem":"REM","editor.auto_detect":"This card auto-detects your Suunto device - no configuration needed.","editor.pick_device":"Multiple Suunto devices were found - pick which one this card should read.","editor.device_label":"Suunto device","card.lifetime.title":"Lifetime Totals","card.lifetime.subtitle":"Since you started","stat.active_days":"Active days","empty.lifetime.title":"No lifetime data yet","card.recent_workouts.title":"Recent Workouts","empty.recent_workouts.title":"No recent workouts","card.elevation.title":"Elevation & Climbing","stat.ascent":"Ascent","stat.descent":"Descent","stat.ascent_time":"Ascent time","stat.descent_time":"Descent time","stat.min_altitude":"Min altitude","stat.max_altitude":"Max altitude","stat.ascent_rate":"Ascent rate","empty.elevation.title":"No elevation data","empty.elevation.subtitle":"Only outdoor workouts with a barometer record this.","card.location.title":"Start Location","location.open_in_maps":"Open in Maps","empty.location.title":"No location data","empty.location.subtitle":"Indoor workouts have no GPS start point.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Fitness age","fitness.measured":"Measured {time} · {activity}","empty.fitness.title":"No fitness data yet","empty.fitness.subtitle":"Suunto computes this from running or walking workouts only.","card.pmc.title":"Performance Management","card.pmc.subtitle":"90-day trend","card.recovery_trends.title":"Recovery Trends","card.recovery_trends.subtitle":"30-day baseline","empty.recovery_trends.title":"No recovery trend data yet","card.weekly_volume.title":"Weekly Volume","card.weekly_volume.subtitle":"Last 12 weeks","empty.weekly_volume.title":"No weekly volume data yet","stat.average":"Average","stat.total":"Total","card.hr_curve.title":"Heart Rate Curve","card.hr_curve.subtitle":"Last 24 hours","stat.hr_now":"Now","stat.hr_min":"Today's min","stat.hr_max":"Today's max","empty.hr_curve.title":"No live HR data yet","empty.hr_curve.subtitle":"Wear your watch and sync to see today's curve here.","card.sleep_trends.title":"Sleep Trends","card.sleep_trends.subtitle":"Last 30 nights","empty.sleep_trends.title":"No sleep trend data yet","card.weekly_goal.title":"Weekly Goal","card.weekly_goal.subtitle":"{value} of {goal} km","empty.weekly_goal.title":"No weekly distance yet","editor.goal_label":"Weekly goal (km)","card.streak.title":"Activity Streak","card.streak.subtitle":"Last 14 days","streak.window_count_one":"{count} active day","streak.window_count_other":"{count} active days","streak.days_one":"{count} day streak","streak.days_other":"{count} days streak","streak.none":"No active streak - get moving today","empty.streak.title":"No workout history yet","just_finished.title":"Nice work!","just_finished.idle.title":"Waiting for your next workout","just_finished.idle.subtitle":"This lights up right after your watch syncs a new one.","empty.just_finished.title":"No recent workout","card.activity_trends.title":"Activity Trends","card.activity_trends.subtitle":"Last 14 days","empty.activity_trends.title":"No activity trend data yet","card.recovery_balance_trend.title":"Recovery Balance Trend","card.recovery_balance_trend.subtitle":"Last 14 days","empty.recovery_balance_trend.title":"No recovery trend data yet","card.readiness_trend.title":"Readiness Trend","card.readiness_trend.subtitle":"Last 30 days","empty.readiness_trend.title":"No readiness trend data yet","stat.cadence":"Cadence","stat.pct_hrmax":"% of max HR","stat.sleep_avg_hr":"Sleep avg HR","stat.sleep_min_hr":"Sleep min HR","chip.bedtime":"Bedtime {time}","card.activity_calendar.title":"Activity Calendar","card.activity_calendar.subtitle":"Last 6 weeks","empty.activity_calendar.title":"No workout history yet","activity_calendar.active_days_one":"{count} active day","activity_calendar.active_days_other":"{count} active days","card.workout_comparison.title":"Workout Comparison","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Not enough matching workouts yet","empty.workout_comparison.subtitle":"Do the same activity twice to see a comparison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Duration ({delta})","stat.avg_hr_delta":"Avg HR ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"By The Numbers","card.milestones.subtitle":"Since you started","empty.milestones.title":"No lifetime data yet","stat.earth_laps":"Earth laps","stat.marathons":"Marathons","stat.moon_pct":"% to the Moon","stat.burgers":"Burgers","card.athlete_profile.title":"Training Personality","empty.athlete_profile.title":"Not enough data yet","personality.activity.cycling":"Cyclist","personality.activity.running":"Runner","personality.activity.trekking":"Hiker","personality.activity.walking":"Walker","personality.activity.gym":"Strength Athlete","personality.activity.swim":"Swimmer","personality.activity.ski":"Skier","personality.activity.row":"Rower","personality.activity.other":"Multi-Sport Athlete","personality.schedule.weekend":"Weekend Warrior","personality.schedule.weekday":"Weekday Regular","personality.schedule.balanced":"Balanced Scheduler","personality.time.morning":"Early Bird","personality.time.afternoon":"Midday Mover","personality.time.evening":"Evening Athlete","personality.time.night":"Night Owl","card.pace_trend.title":"Pace Trend","card.pace_trend.subtitle":"{activity} · last {count} sessions","empty.pace_trend.title":"Not enough matching workouts yet","empty.pace_trend.subtitle":"Do the same activity a few times to see a trend.","pace_trend.faster":"Getting faster","pace_trend.slower":"Getting slower","pace_trend.steady":"Holding steady","card.lap_splits.title":"Lap Splits","empty.lap_splits.title":"No lap data","empty.lap_splits.subtitle":"Not every workout has laps - your next one with them will fill this in.","stat.laps":"Laps","stat.fastest_lap":"Fastest lap","label.lap":"Lap {n}","card.training_effect_trend.title":"Training Effect Trend","empty.training_effect_trend.title":"No training effect data yet","achievements.badge.around_globe":"Around the Globe","achievements.badge.century_club":"Century Club - 100 workouts","achievements.badge.consistency_king":"Consistency King - 14-day streak","achievements.badge.days_100":"100 Active Days","achievements.badge.distance_1000":"1,000 km Club","achievements.badge.distance_5000":"5,000 km Club","achievements.badge.elite_engine":"Elite Engine - VO2max 55+","achievements.badge.energy_100k":"100,000 kcal Burned","achievements.badge.energy_1m":"1,000,000 kcal Burned","achievements.badge.full_year":"Full Year Active","achievements.badge.hours_100":"100 Hours","achievements.badge.hours_500":"500 Hours","achievements.badge.jack_of_all_trades":"Jack of All Trades - 5+ sports","achievements.badge.multi_sport":"Multi-Sport Athlete - 3+ sports","achievements.badge.solid_engine":"Solid Engine - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ workouts","achievements.badge.workouts_1000":"1,000 Workouts","achievements.badge.workouts_250":"250 Workouts","achievements.badge.workouts_500":"500 Workouts","achievements.category.days":"Active days","achievements.category.distance":"Distance","achievements.category.energy":"Energy","achievements.category.fitness":"Fitness level","achievements.category.records":"Personal records","achievements.category.time":"Training time","achievements.category.variety":"Variety","achievements.category.workouts":"Workouts logged","card.achievements.subtitle":"{unlocked} of {total} unlocked","card.achievements.title":"Achievements","class.rest":"+{pct}% other activities","class.tag":"{activity}-focused build","empty.achievements.subtitle":"Log a few workouts to start unlocking badges.","empty.achievements.title":"No achievements yet","empty.class.subtitle":"Log a few workouts to reveal your class.","empty.class.title":"Not enough data yet","empty.level.subtitle":"Your first synced workout starts the climb.","empty.level.title":"No lifetime data yet","empty.player.subtitle":"Needs a bit of training history to compute your stats.","empty.player.title":"Not enough data yet","level.label":"LEVEL","level.source":"{count} workouts logged","level.subtitle":"Powered by your lifetime training load","level.title.grinder":"Endurance Grinder","level.title.legend":"Living Legend","level.title.novice":"Fresh Recruit","level.title.veteran":"Seasoned Veteran","level.xp_to_next":"{xp} XP to Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity} Specialist","player.help.title":"What these mean","player.help.sta":"STA · Stamina, from your Fitness (CTL): how much steady training load you can handle","player.help.pwr":"PWR · Power, from the average intensity (TSS) of your recent sessions","player.help.rec":"REC · Recovery, your current Readiness score","player.help.con":"CON · Consistency, workouts logged in the last 30 days","player.help.end":"END · Endurance, from your estimated VO2max","player.help.frm":"FRM · Form, from your current Training Stress Balance (TSB)","player.help.disclaimer":"Heuristic ratings computed from your own data - not an official Suunto metric.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendary","player.tier.silver":"Silver","records.climb":"Biggest climb","records.distance":"Farthest workout","records.pace":"Fastest pace","records.session":"Hardest session","records.streak":"Longest streak","records.streak_days_one":"{count} day","records.streak_days_other":"{count} days","records.workout":"Longest workout","class.name.cycling":"Endurance Warrior","class.name.running":"Sprinter","class.name.trekking":"Trailblazer","class.name.walking":"Wanderer","class.name.gym":"Strength Berserker","class.name.swim":"Tidecaller","class.name.ski":"Frostrunner","class.name.row":"Oarsman","class.name.other":"All-Rounder","class.flavor.cycling":"Built for long, steady efforts over raw speed. Every other sport is cross-training for the engine.","class.flavor.running":"Quick off the mark and built for tempo. Distance is a means to an end.","class.flavor.trekking":"At home on rough terrain, covering ground for hours at a time.","class.flavor.walking":"Steady, low-impact miles add up - consistency over intensity.","class.flavor.gym":"Raw power over distance. Strength sessions come first.","class.flavor.swim":"Endurance forged in the water, stroke by stroke.","class.flavor.ski":"Speed and rhythm across snow and cold.","class.flavor.row":"Rhythmic power, pulled one stroke at a time.","class.flavor.other":"No single sport dominates - a genuinely balanced mix."},ze={en:$e,pl:{"stat.distance":"Dystans","stat.duration":"Czas trwania","stat.avg_speed":"Śr. prędkość","stat.avg_pace":"Śr. tempo","stat.avg_hr":"Śr. tętno","stat.max_hr":"Maks. tętno","stat.training_effect":"Efekt treningowy","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Samopoczucie","stat.energy":"Energia","stat.time":"Czas","stat.workouts":"Treningi","stat.steps":"Kroki","stat.heart_rate":"Tętno","stat.quality":"Jakość","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Tętno spocz.","stat.resting_hr_delta":"Spocz. ({delta})","stat.spo2":"SpO2","stat.stress_level":"Poziom stresu","stat.recovery_window":"Czas regeneracji","stat.ctl":"CTL · forma","stat.atl":"ATL · zmęczenie","stat.tsb":"TSB · forma","stat.readiness":"Gotowość","stat.recovery_balance":"Bilans regeneracji","stat.training_suggestion":"Sugestia na dziś","stat.volume":"Objętość","stat.intensity":"Intensywność","stat.consistency":"Regularność","stat.recovery":"Regeneracja","stat.variety":"Różnorodność","card.hr_zones.title":"Strefy tętna","card.hr_zones.last_workout":"Ostatni trening","card.sleep_readiness.title":"Sen i gotowość","card.sleep_readiness.subtitle_no_wake":"{duration} snu","card.sleep_readiness.subtitle_with_wake":"{duration} snu · pobudka {time}","card.recovery.title":"Regeneracja","card.training_load.title":"Obciążenie treningowe","card.training_load.subtitle_fallback":"Trend formy (CTL)","card.week_stats.title":"Ten tydzień i statystyki życiowe","card.week_stats.subtitle":"Ostatnie 7 dni","card.week_stats.lifetime_title":"Statystyki życiowe wg dyscypliny","card.today.title":"Dziś","card.today.subtitle":"Na żywo z zegarka","card.training_status.title":"Status treningowy","card.training_profile.title":"Profil treningowy","card.training_profile.subtitle":"Twój trening w pigułce","card.heart_rate.title":"Tętno","empty.last_workout.title":"Brak ostatniego treningu","empty.last_workout.subtitle":"Zsynchronizuj zegarek z aplikacją Suunto, aby zobaczyć go tutaj.","empty.hr_zones.title":"Brak danych o strefach","empty.hr_zones.subtitle":"Twój następny trening na zewnątrz z pasem do pomiaru tętna uzupełni te dane.","empty.sleep_readiness.title":"Brak jeszcze danych o śnie","empty.sleep_readiness.subtitle":"Noś zegarek podczas snu, aby zobaczyć dane tutaj.","empty.recovery.title":"Brak jeszcze danych o regeneracji","empty.training_load.title":"Obliczanie obciążenia treningowego","empty.training_load.subtitle":"Potrzebna jest historia treningów do wyliczenia - sprawdź ponownie po kilku sesjach.","empty.week_stats.title":"Brak jeszcze historii treningów","empty.today.title":"Brak jeszcze danych na żywo","empty.training_status.title":"Za mało danych","empty.training_status.subtitle":"Potrzeba trochę historii treningów, żeby to wyliczyć.","empty.training_profile.title":"Za mało danych","empty.training_profile.subtitle":"Potrzeba więcej danych z czujników, żeby wyliczyć profil.","empty.heart_rate.title":"Brak jeszcze danych o tętnie","empty.loading":"Wczytywanie...","empty.generic_error":"Nie udało się wczytać danych Suunto.","error.no_device":"Nie znaleziono urządzenia Suunto - czy integracja suunto_app jest skonfigurowana?","error.multiple_devices":'Znaleziono wiele urządzeń Suunto - ustaw "device_id" w konfiguracji karty.',"error.device_missing":'Skonfigurowane urządzenie "{device}" nie ma encji suunto_app.',"band.readiness.great":"Świetna","band.readiness.fair":"Przeciętna","band.readiness.low":"Niska","band.recovery.well":"Dobrze zregenerowany","band.recovery.partial":"Częściowo zregenerowany","band.recovery.low":"Niska regeneracja","band.recovery.fully":"W pełni zregenerowany","band.recovery.recovering":"Regeneracja · pozostało {time}","band.hrv.low":"HRV niskie","band.hrv.high":"HRV wysokie","band.hrv.balanced":"HRV wyrównane","band.form.fresh":"Wypoczęty","band.form.neutral":"Neutralna","band.form.fatigued":"Zmęczony","band.form.very_fatigued":"Bardzo zmęczony","band.acwr.safe":"Strefa bezpieczna","band.acwr.low":"Niskie obciążenie","band.acwr.high":"Wysokie obciążenie - ryzyko kontuzji","band.suggestion.hard":"Dawaj mocno","band.suggestion.moderate":"Umiarkowany wysiłek","band.suggestion.easy":"Trenuj lekko","band.suggestion.rest":"Dzień odpoczynku","chip.workout_logged_today":"Trening zarejestrowany dziś","chip.workout_today":"Trening dziś","chip.recovering":"Regeneracja","chip.nap":"{minutes} min drzemki","chip.nap_earlier":"{minutes} min drzemki (wcześniej)","chip.workouts_30d":"{count} treningów w ciągu ostatnich 30 dni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Najmocniej: {strong} · najsłabiej: {light}","chip.more_activity_one":"+{count} inna dyscyplina","chip.more_activity_other":"+{count} inne dyscypliny","chip.unusual_recovery":"Nietypowa regeneracja","chip.days_since_one":"{count} dzień od ostatniego treningu","chip.days_since_other":"{count} dni od ostatniego treningu","achievement.count_one":"{count} osiągnięcie","achievement.count_other":"{count} osiągnięcia","achievement.rank":"Miejsce #{rank} na tej trasie","label.zone":"Strefa {n}","label.deep":"Głęboki","label.light":"Płytki","label.rem":"REM","editor.auto_detect":"Ta karta automatycznie wykrywa Twoje urządzenie Suunto - konfiguracja nie jest potrzebna.","editor.pick_device":"Znaleziono wiele urządzeń Suunto - wybierz, z którego ta karta ma korzystać.","editor.device_label":"Urządzenie Suunto","card.lifetime.title":"Statystyki życiowe","card.lifetime.subtitle":"Od początku","stat.active_days":"Aktywne dni","empty.lifetime.title":"Brak jeszcze danych życiowych","card.recent_workouts.title":"Ostatnie treningi","empty.recent_workouts.title":"Brak ostatnich treningów","card.elevation.title":"Przewyższenia i podejścia","stat.ascent":"Podejście","stat.descent":"Zejście","stat.ascent_time":"Czas podejścia","stat.descent_time":"Czas zejścia","stat.min_altitude":"Wys. min.","stat.max_altitude":"Wys. maks.","stat.ascent_rate":"Tempo podejścia","empty.elevation.title":"Brak danych o przewyższeniach","empty.elevation.subtitle":"Rejestrują to tylko treningi na zewnątrz z barometrem.","card.location.title":"Lokalizacja startu","location.open_in_maps":"Otwórz w Mapach","empty.location.title":"Brak danych lokalizacji","empty.location.subtitle":"Treningi w pomieszczeniu nie mają punktu startu GPS.","card.fitness.title":"Sprawność","stat.vo2max":"VO2max","stat.estimated_vo2max":"Szac. VO2max","stat.fitness_age":"Wiek fizyczny","fitness.measured":"Zmierzono {time} · {activity}","empty.fitness.title":"Brak jeszcze danych o sprawności","empty.fitness.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","card.pmc.title":"Zarządzanie formą","card.pmc.subtitle":"Trend 90-dniowy","card.recovery_trends.title":"Trendy regeneracji","card.recovery_trends.subtitle":"Poziom bazowy 30 dni","empty.recovery_trends.title":"Brak jeszcze danych o trendach regeneracji","card.weekly_volume.title":"Wolumen tygodniowy","card.weekly_volume.subtitle":"Ostatnie 12 tygodni","empty.weekly_volume.title":"Brak jeszcze danych o wolumenie tygodniowym","stat.average":"Średnia","stat.total":"Suma","card.hr_curve.title":"Krzywa tętna","card.hr_curve.subtitle":"Ostatnie 24 godziny","stat.hr_now":"Teraz","stat.hr_min":"Min. dzisiaj","stat.hr_max":"Maks. dzisiaj","empty.hr_curve.title":"Brak jeszcze danych o tętnie na żywo","empty.hr_curve.subtitle":"Noś zegarek i zsynchronizuj go, aby zobaczyć tu dzisiejszą krzywą.","card.sleep_trends.title":"Trendy snu","card.sleep_trends.subtitle":"Ostatnie 30 nocy","empty.sleep_trends.title":"Brak jeszcze danych o trendach snu","card.weekly_goal.title":"Cel tygodniowy","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Brak jeszcze danych o dystansie tygodniowym","editor.goal_label":"Cel tygodniowy (km)","card.streak.title":"Seria aktywności","card.streak.subtitle":"Ostatnie 14 dni","streak.window_count_one":"{count} aktywny dzień","streak.window_count_other":"{count} aktywne dni","streak.days_one":"{count} dzień serii","streak.days_other":"{count} dni serii","streak.none":"Brak aktywnej serii - zacznij dziś","empty.streak.title":"Brak jeszcze historii treningów","just_finished.title":"Świetna robota!","just_finished.idle.title":"Czekanie na kolejny trening","just_finished.idle.subtitle":"Ta karta zaświeci się zaraz po synchronizacji nowego treningu.","empty.just_finished.title":"Brak ostatniego treningu","card.activity_trends.title":"Trendy aktywności","card.activity_trends.subtitle":"Ostatnie 14 dni","empty.activity_trends.title":"Brak jeszcze danych o trendach aktywności","card.recovery_balance_trend.title":"Trend bilansu regeneracji","card.recovery_balance_trend.subtitle":"Ostatnie 14 dni","empty.recovery_balance_trend.title":"Brak jeszcze danych o trendzie regeneracji","card.readiness_trend.title":"Trend gotowości","card.readiness_trend.subtitle":"Ostatnie 30 dni","empty.readiness_trend.title":"Brak jeszcze danych o trendzie gotowości","stat.cadence":"Kadencja","stat.pct_hrmax":"% tętna maks.","stat.sleep_avg_hr":"Śr. tętno snu","stat.sleep_min_hr":"Min. tętno snu","chip.bedtime":"Zaśnięcie {time}","card.activity_calendar.title":"Kalendarz aktywności","card.activity_calendar.subtitle":"Ostatnie 6 tygodni","empty.activity_calendar.title":"Brak jeszcze historii treningów","activity_calendar.active_days_one":"{count} aktywny dzień","activity_calendar.active_days_other":"{count} aktywne dni","card.workout_comparison.title":"Porównanie treningów","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.workout_comparison.subtitle":"Wykonaj tę samą aktywność dwa razy, aby zobaczyć porównanie.","stat.distance_delta":"Dystans ({delta})","stat.duration_delta":"Czas trwania ({delta})","stat.avg_hr_delta":"Śr. tętno ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"W liczbach","card.milestones.subtitle":"Od początku","empty.milestones.title":"Brak jeszcze danych życiowych","stat.earth_laps":"Okrążeń Ziemi","stat.marathons":"Maratonów","stat.moon_pct":"% drogi na Księżyc","stat.burgers":"Burgerów","card.athlete_profile.title":"Osobowość treningowa","empty.athlete_profile.title":"Brak jeszcze wystarczających danych","personality.activity.cycling":"Kolarz","personality.activity.running":"Biegacz","personality.activity.trekking":"Piechur","personality.activity.walking":"Spacerowicz","personality.activity.gym":"Siłacz","personality.activity.swim":"Pływak","personality.activity.ski":"Narciarz","personality.activity.row":"Wioślarz","personality.activity.other":"Wielosportowiec","personality.schedule.weekend":"Wojownik weekendu","personality.schedule.weekday":"Regularny w tygodniu","personality.schedule.balanced":"Zbalansowany harmonogram","personality.time.morning":"Ranny ptaszek","personality.time.afternoon":"Popołudniowiec","personality.time.evening":"Wieczorny sportowiec","personality.time.night":"Nocny marek","card.pace_trend.title":"Trend tempa","card.pace_trend.subtitle":"{activity} · ostatnie {count} sesji","empty.pace_trend.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.pace_trend.subtitle":"Wykonaj tę samą aktywność kilka razy, aby zobaczyć trend.","pace_trend.faster":"Przyspieszasz","pace_trend.slower":"Zwalniasz","pace_trend.steady":"Stabilne tempo","card.lap_splits.title":"Czasy Okrążeń","empty.lap_splits.title":"Brak danych o okrążeniach","empty.lap_splits.subtitle":"Nie każdy trening ma okrążenia - uzupełni się przy najbliższym, który je ma.","stat.laps":"Okrążenia","stat.fastest_lap":"Najszybsze okrążenie","label.lap":"Okrążenie {n}","card.training_effect_trend.title":"Trend Efektu Treningowego","empty.training_effect_trend.title":"Brak jeszcze danych o efekcie treningowym","achievements.badge.around_globe":"Dookoła świata","achievements.badge.century_club":"Klub Setki - 100 treningów","achievements.badge.consistency_king":"Król Regularności - seria 14 dni","achievements.badge.days_100":"100 aktywnych dni","achievements.badge.distance_1000":"Klub 1000 km","achievements.badge.distance_5000":"Klub 5000 km","achievements.badge.elite_engine":"Elitarny silnik - VO2max 55+","achievements.badge.energy_100k":"Spalone 100 000 kcal","achievements.badge.energy_1m":"Spalony 1 000 000 kcal","achievements.badge.full_year":"Cały rok aktywności","achievements.badge.hours_100":"100 godzin","achievements.badge.hours_500":"500 godzin","achievements.badge.jack_of_all_trades":"Wszechstronny sportowiec - 5+ dyscyplin","achievements.badge.multi_sport":"Sportowiec wielodyscyplinowy - 3+ dyscypliny","achievements.badge.solid_engine":"Solidny silnik - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treningów","achievements.badge.workouts_1000":"1000 treningów","achievements.badge.workouts_250":"250 treningów","achievements.badge.workouts_500":"500 treningów","achievements.category.days":"Aktywne dni","achievements.category.distance":"Dystans","achievements.category.energy":"Energia","achievements.category.fitness":"Poziom wydolności","achievements.category.records":"Rekordy osobiste","achievements.category.time":"Czas treningowy","achievements.category.variety":"Różnorodność","achievements.category.workouts":"Zarejestrowane treningi","card.achievements.subtitle":"{unlocked} z {total} odblokowanych","card.achievements.title":"Osiągnięcia","class.rest":"+{pct}% inne aktywności","class.tag":"{activity} - profil treningowy","empty.achievements.subtitle":"Zarejestruj kilka treningów, aby zacząć odblokowywać odznaki.","empty.achievements.title":"Brak osiągnięć","empty.class.subtitle":"Zarejestruj kilka treningów, aby odkryć swoją klasę.","empty.class.title":"Za mało danych","empty.level.subtitle":"Pierwszy zsynchronizowany trening zaczyna wspinaczkę.","empty.level.title":"Brak danych życiowych","empty.player.subtitle":"Potrzeba trochę historii treningów, aby obliczyć statystyki.","empty.player.title":"Za mało danych","level.label":"POZIOM","level.source":"{count} zarejestrowanych treningów","level.subtitle":"Napędzane Twoim całkowitym obciążeniem treningowym","level.title.grinder":"Wytrwały Zawodnik","level.title.legend":"Żywa Legenda","level.title.novice":"Świeży Rekrut","level.title.veteran":"Doświadczony Weteran","level.xp_to_next":"{xp} XP do poz. {level}","level.xp_total":"{xp} XP","player.archetype":"Specjalista: {activity}","player.help.title":"Co to oznacza","player.help.sta":"STA · Wytrzymałość, z Formy (CTL): jak duże stałe obciążenie treningowe jesteś w stanie znieść","player.help.pwr":"PWR · Moc, ze średniej intensywności (TSS) ostatnich treningów","player.help.rec":"REC · Regeneracja, Twój aktualny wynik Gotowości","player.help.con":"CON · Regularność, liczba treningów w ostatnich 30 dniach","player.help.end":"END · Wytrwałość, z szacowanego VO2max","player.help.frm":"FRM · Forma, z aktualnego bilansu obciążenia treningowego (TSB)","player.help.disclaimer":"Wskaźniki heurystyczne liczone z Twoich danych - nie oficjalna metryka Suunto.","player.tier.bronze":"Brąz","player.tier.gold":"Złoto","player.tier.legendary":"Legendarny","player.tier.silver":"Srebro","records.climb":"Największe podejście","records.distance":"Najdłuższy dystans","records.pace":"Najszybsze tempo","records.session":"Najcięższy trening","records.streak":"Najdłuższa seria","records.streak_days_one":"{count} dzień","records.streak_days_other":"{count} dni","records.workout":"Najdłuższy trening","class.name.cycling":"Wojownik Wytrzymałości","class.name.running":"Sprinter","class.name.trekking":"Zdobywca Szlaków","class.name.walking":"Wędrowiec","class.name.gym":"Berserker Siły","class.name.swim":"Władca Fal","class.name.ski":"Biegacz Mrozu","class.name.row":"Wioślarz","class.name.other":"Wszechstronny","class.flavor.cycling":"Stworzony do długich, równych wysiłków, nie do surowej szybkości. Każdy inny sport to trening uzupełniający.","class.flavor.running":"Szybki start i tempo ponad wszystko. Dystans jest tylko środkiem do celu.","class.flavor.trekking":"Czuje się jak w domu na trudnym terenie, pokonując kilometry godzinami.","class.flavor.walking":"Równe, mało obciążające kilometry sumują się - regularność ponad intensywność.","class.flavor.gym":"Surowa siła ponad dystans. Treningi siłowe są na pierwszym miejscu.","class.flavor.swim":"Wytrzymałość hartowana w wodzie, ruch po ruchu.","class.flavor.ski":"Szybkość i rytm na śniegu i mrozie.","class.flavor.row":"Rytmiczna siła, pociągnięcie po pociągnięciu.","class.flavor.other":"Żaden sport nie dominuje - naprawdę zrównoważona mieszanka."},de:{"stat.distance":"Distanz","stat.duration":"Dauer","stat.avg_speed":"Ø-Geschwindigkeit","stat.avg_pace":"Ø-Pace","stat.avg_hr":"Ø-Puls","stat.max_hr":"Max. Puls","stat.training_effect":"Trainingseffekt","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gefühl","stat.energy":"Energie","stat.time":"Zeit","stat.workouts":"Workouts","stat.steps":"Schritte","stat.heart_rate":"Herzfrequenz","stat.quality":"Qualität","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Ruhepuls","stat.resting_hr_delta":"Ruhepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresslevel","stat.recovery_window":"Erholungszeit","stat.ctl":"CTL · Fitness","stat.atl":"ATL · Ermüdung","stat.tsb":"TSB · Form","stat.readiness":"Bereitschaft","stat.recovery_balance":"Erholungsbalance","stat.training_suggestion":"Empfehlung für heute","stat.volume":"Umfang","stat.intensity":"Intensität","stat.consistency":"Konstanz","stat.recovery":"Erholung","stat.variety":"Vielfalt","card.hr_zones.title":"Herzfrequenzzonen","card.hr_zones.last_workout":"Letztes Training","card.sleep_readiness.title":"Schlaf & Bereitschaft","card.sleep_readiness.subtitle_no_wake":"{duration} geschlafen","card.sleep_readiness.subtitle_with_wake":"{duration} geschlafen · aufgewacht um {time}","card.recovery.title":"Erholung","card.training_load.title":"Trainingsbelastung","card.training_load.subtitle_fallback":"Fitness-Trend (CTL)","card.week_stats.title":"Diese Woche & Gesamt","card.week_stats.subtitle":"Letzte 7 Tage","card.week_stats.lifetime_title":"Gesamt nach Sportart","card.today.title":"Heute","card.today.subtitle":"Live von deiner Uhr","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofil","card.training_profile.subtitle":"Dein Training auf einen Blick","card.heart_rate.title":"Herzfrequenz","empty.last_workout.title":"Kein aktuelles Training","empty.last_workout.subtitle":"Synchronisiere deine Uhr mit der Suunto-App, um es hier zu sehen.","empty.hr_zones.title":"Keine Zonendaten","empty.hr_zones.subtitle":"Dein nächstes Outdoor-Training mit Brustgurt füllt das hier aus.","empty.sleep_readiness.title":"Noch keine Schlafdaten","empty.sleep_readiness.subtitle":"Trage deine Uhr beim Schlafen, um sie hier zu sehen.","empty.recovery.title":"Noch keine Erholungsdaten","empty.training_load.title":"Trainingsbelastung wird berechnet","empty.training_load.subtitle":"Benötigt etwas Trainingshistorie zur Berechnung - schau nach ein paar Einheiten wieder vorbei.","empty.week_stats.title":"Noch keine Trainingshistorie","empty.today.title":"Noch keine Live-Daten","empty.training_status.title":"Noch nicht genug Daten","empty.training_status.subtitle":"Braucht etwas Trainingshistorie zur Berechnung.","empty.training_profile.title":"Noch nicht genug Daten","empty.training_profile.subtitle":"Braucht mehr Sensordaten, um dein Profil zu berechnen.","empty.heart_rate.title":"Noch keine Herzfrequenzdaten","empty.loading":"Wird geladen...","empty.generic_error":"Suunto-Daten konnten nicht geladen werden.","error.no_device":"Kein Suunto-Gerät gefunden - ist die suunto_app-Integration eingerichtet?","error.multiple_devices":'Mehrere Suunto-Geräte gefunden - lege "device_id" in der Kartenkonfiguration fest.',"error.device_missing":'Konfiguriertes Gerät "{device}" hat keine suunto_app-Entitäten.',"band.readiness.great":"Sehr gut","band.readiness.fair":"Mittel","band.readiness.low":"Niedrig","band.recovery.well":"Gut erholt","band.recovery.partial":"Teilweise erholt","band.recovery.low":"Geringe Erholung","band.recovery.fully":"Vollständig erholt","band.recovery.recovering":"Erholung läuft · {time} verbleibend","band.hrv.low":"HRV niedrig","band.hrv.high":"HRV hoch","band.hrv.balanced":"HRV ausgeglichen","band.form.fresh":"Frisch","band.form.neutral":"Neutral","band.form.fatigued":"Ermüdet","band.form.very_fatigued":"Sehr ermüdet","band.acwr.safe":"Sicherer Bereich","band.acwr.low":"Geringe Belastung","band.acwr.high":"Hohe Belastung - Verletzungsrisiko","band.suggestion.hard":"Vollgas","band.suggestion.moderate":"Moderate Belastung","band.suggestion.easy":"Locker angehen","band.suggestion.rest":"Ruhetag","chip.workout_logged_today":"Heute Training erfasst","chip.workout_today":"Training heute","chip.recovering":"Erholung","chip.nap":"{minutes} Min. Nickerchen","chip.nap_earlier":"{minutes} Min. Nickerchen (früher)","chip.workouts_30d":"{count} Trainings in den letzten 30 Tagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Am stärksten: {strong} · am schwächsten: {light}","chip.more_activity_one":"+{count} weitere Sportart","chip.more_activity_other":"+{count} weitere Sportarten","chip.unusual_recovery":"Ungewöhnliche Erholung","chip.days_since_one":"{count} Tag seit dem letzten Training","chip.days_since_other":"{count} Tage seit dem letzten Training","achievement.count_one":"{count} Erfolg","achievement.count_other":"{count} Erfolge","achievement.rank":"Platz #{rank} auf dieser Strecke","label.zone":"Zone {n}","label.deep":"Tiefschlaf","label.light":"Leichtschlaf","label.rem":"REM","editor.auto_detect":"Diese Karte erkennt dein Suunto-Gerät automatisch - keine Konfiguration nötig.","editor.pick_device":"Mehrere Suunto-Geräte gefunden - wähle aus, welches diese Karte verwenden soll.","editor.device_label":"Suunto-Gerät","card.lifetime.title":"Gesamtstatistik","card.lifetime.subtitle":"Seit Beginn","stat.active_days":"Aktive Tage","empty.lifetime.title":"Noch keine Gesamtdaten","card.recent_workouts.title":"Letzte Trainings","empty.recent_workouts.title":"Keine letzten Trainings","card.elevation.title":"Höhenmeter & Aufstieg","stat.ascent":"Aufstieg","stat.descent":"Abstieg","stat.ascent_time":"Aufstiegszeit","stat.descent_time":"Abstiegszeit","stat.min_altitude":"Min. Höhe","stat.max_altitude":"Max. Höhe","stat.ascent_rate":"Aufstiegsrate","empty.elevation.title":"Keine Höhendaten","empty.elevation.subtitle":"Nur Outdoor-Trainings mit Barometer erfassen dies.","card.location.title":"Startort","location.open_in_maps":"In Karten öffnen","empty.location.title":"Keine Standortdaten","empty.location.subtitle":"Indoor-Trainings haben keinen GPS-Startpunkt.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitnessalter","fitness.measured":"Gemessen {time} · {activity}","empty.fitness.title":"Noch keine Fitnessdaten","empty.fitness.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","card.pmc.title":"Leistungsmanagement","card.pmc.subtitle":"90-Tage-Trend","card.recovery_trends.title":"Erholungstrends","card.recovery_trends.subtitle":"30-Tage-Basiswert","empty.recovery_trends.title":"Noch keine Erholungstrend-Daten","card.weekly_volume.title":"Wöchentliches Volumen","card.weekly_volume.subtitle":"Letzte 12 Wochen","empty.weekly_volume.title":"Noch keine Daten zum wöchentlichen Volumen","stat.average":"Durchschnitt","stat.total":"Gesamt","card.hr_curve.title":"Herzfrequenz-Kurve","card.hr_curve.subtitle":"Letzte 24 Stunden","stat.hr_now":"Jetzt","stat.hr_min":"Tagesminimum","stat.hr_max":"Tagesmaximum","empty.hr_curve.title":"Noch keine Live-Herzfrequenzdaten","empty.hr_curve.subtitle":"Trage deine Uhr und synchronisiere sie, um die heutige Kurve hier zu sehen.","card.sleep_trends.title":"Schlaftrends","card.sleep_trends.subtitle":"Letzte 30 Nächte","empty.sleep_trends.title":"Noch keine Schlaftrend-Daten","card.weekly_goal.title":"Wochenziel","card.weekly_goal.subtitle":"{value} von {goal} km","empty.weekly_goal.title":"Noch keine wöchentliche Distanz","editor.goal_label":"Wochenziel (km)","card.streak.title":"Aktivitätsserie","card.streak.subtitle":"Letzte 14 Tage","streak.window_count_one":"{count} aktiver Tag","streak.window_count_other":"{count} aktive Tage","streak.days_one":"{count} Tag in Folge","streak.days_other":"{count} Tage in Folge","streak.none":"Keine aktive Serie - starte heute","empty.streak.title":"Noch keine Trainingshistorie","just_finished.title":"Gut gemacht!","just_finished.idle.title":"Warten auf dein nächstes Training","just_finished.idle.subtitle":"Diese Karte leuchtet auf, sobald deine Uhr ein neues Training synchronisiert.","empty.just_finished.title":"Kein aktuelles Training","card.activity_trends.title":"Aktivitätstrends","card.activity_trends.subtitle":"Letzte 14 Tage","empty.activity_trends.title":"Noch keine Aktivitätstrend-Daten","card.recovery_balance_trend.title":"Erholungsbalance-Trend","card.recovery_balance_trend.subtitle":"Letzte 14 Tage","empty.recovery_balance_trend.title":"Noch keine Erholungstrend-Daten","card.readiness_trend.title":"Bereitschaftstrend","card.readiness_trend.subtitle":"Letzte 30 Tage","empty.readiness_trend.title":"Noch keine Bereitschaftstrend-Daten","stat.cadence":"Trittfrequenz","stat.pct_hrmax":"% der max. Herzfrequenz","stat.sleep_avg_hr":"Ø-Puls","stat.sleep_min_hr":"Min-Puls","chip.bedtime":"Zubettgehen {time}","card.activity_calendar.title":"Aktivitätskalender","card.activity_calendar.subtitle":"Letzte 6 Wochen","empty.activity_calendar.title":"Noch keine Trainingshistorie","activity_calendar.active_days_one":"{count} aktiver Tag","activity_calendar.active_days_other":"{count} aktive Tage","card.workout_comparison.title":"Trainingsvergleich","card.workout_comparison.vs":"vs. {time}","empty.workout_comparison.title":"Noch nicht genug passende Trainings","empty.workout_comparison.subtitle":"Mach die gleiche Aktivität zweimal, um einen Vergleich zu sehen.","stat.distance_delta":"Distanz ({delta})","stat.duration_delta":"Dauer ({delta})","stat.avg_hr_delta":"Ø-Puls ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"In Zahlen","card.milestones.subtitle":"Seit Beginn","empty.milestones.title":"Noch keine Gesamtdaten","stat.earth_laps":"Erdumrundungen","stat.marathons":"Marathons","stat.moon_pct":"% zum Mond","stat.burgers":"Burger","card.athlete_profile.title":"Trainingspersönlichkeit","empty.athlete_profile.title":"Noch nicht genug Daten","personality.activity.cycling":"Radfahrer","personality.activity.running":"Läufer","personality.activity.trekking":"Wanderer","personality.activity.walking":"Spaziergänger","personality.activity.gym":"Kraftsportler","personality.activity.swim":"Schwimmer","personality.activity.ski":"Skifahrer","personality.activity.row":"Ruderer","personality.activity.other":"Allrounder","personality.schedule.weekend":"Wochenendkrieger","personality.schedule.weekday":"Wochentags-Stammgast","personality.schedule.balanced":"Ausgewogener Planer","personality.time.morning":"Frühaufsteher","personality.time.afternoon":"Mittagsaktiver","personality.time.evening":"Abendsportler","personality.time.night":"Nachteule","card.pace_trend.title":"Pace-Trend","card.pace_trend.subtitle":"{activity} · letzte {count} Einheiten","empty.pace_trend.title":"Noch nicht genug passende Trainings","empty.pace_trend.subtitle":"Mach die gleiche Aktivität ein paar Mal, um einen Trend zu sehen.","pace_trend.faster":"Wird schneller","pace_trend.slower":"Wird langsamer","pace_trend.steady":"Konstantes Tempo","card.lap_splits.title":"Rundenzeiten","empty.lap_splits.title":"Keine Rundendaten","empty.lap_splits.subtitle":"Nicht jedes Training hat Runden - das nächste mit Rundendaten füllt das hier auf.","stat.laps":"Runden","stat.fastest_lap":"Schnellste Runde","label.lap":"Runde {n}","card.training_effect_trend.title":"Trainingseffekt-Trend","empty.training_effect_trend.title":"Noch keine Trainingseffekt-Daten","achievements.badge.around_globe":"Einmal um die Welt","achievements.badge.century_club":"Hundert-Club - 100 Trainings","achievements.badge.consistency_king":"König der Beständigkeit - 14-Tage-Serie","achievements.badge.days_100":"100 aktive Tage","achievements.badge.distance_1000":"1.000-km-Club","achievements.badge.distance_5000":"5.000-km-Club","achievements.badge.elite_engine":"Elite-Motor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrannt","achievements.badge.energy_1m":"1.000.000 kcal verbrannt","achievements.badge.full_year":"Ganzjährig aktiv","achievements.badge.hours_100":"100 Stunden","achievements.badge.hours_500":"500 Stunden","achievements.badge.jack_of_all_trades":"Allrounder - 5+ Sportarten","achievements.badge.multi_sport":"Multisport-Athlet - 3+ Sportarten","achievements.badge.solid_engine":"Solider Motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ Trainings","achievements.badge.workouts_1000":"1.000 Trainings","achievements.badge.workouts_250":"250 Trainings","achievements.badge.workouts_500":"500 Trainings","achievements.category.days":"Aktive Tage","achievements.category.distance":"Distanz","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnesslevel","achievements.category.records":"Persönliche Rekorde","achievements.category.time":"Trainingszeit","achievements.category.variety":"Vielfalt","achievements.category.workouts":"Erfasste Trainings","card.achievements.subtitle":"{unlocked} von {total} freigeschaltet","card.achievements.title":"Erfolge","class.rest":"+{pct}% andere Aktivitäten","class.tag":"Fokus: {activity}","empty.achievements.subtitle":"Erfasse ein paar Trainings, um Abzeichen freizuschalten.","empty.achievements.title":"Noch keine Erfolge","empty.class.subtitle":"Erfasse ein paar Trainings, um deine Klasse zu enthüllen.","empty.class.title":"Noch nicht genug Daten","empty.level.subtitle":"Dein erstes synchronisiertes Training startet den Aufstieg.","empty.level.title":"Noch keine Lebenszeitdaten","empty.player.subtitle":"Braucht etwas Trainingshistorie, um deine Werte zu berechnen.","empty.player.title":"Noch nicht genug Daten","level.label":"LEVEL","level.source":"{count} Trainings erfasst","level.subtitle":"Angetrieben von deiner gesamten Trainingsbelastung","level.title.grinder":"Ausdauer-Malocher","level.title.legend":"Lebende Legende","level.title.novice":"Frischer Rekrut","level.title.veteran":"Erfahrener Veteran","level.xp_to_next":"{xp} XP bis Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-Spezialist","player.help.title":"Was das bedeutet","player.help.sta":"STA · Ausdauer, aus deiner Fitness (CTL): wie viel gleichmäßige Trainingsbelastung du verkraftest","player.help.pwr":"PWR · Power, aus der durchschnittlichen Intensität (TSS) deiner letzten Einheiten","player.help.rec":"REC · Erholung, dein aktueller Readiness-Wert","player.help.con":"CON · Beständigkeit, Trainings der letzten 30 Tage","player.help.end":"END · Ausdauer, aus deinem geschätzten VO2max","player.help.frm":"FRM · Form, aus deiner aktuellen Trainingsbelastungsbilanz (TSB)","player.help.disclaimer":"Heuristische Werte aus deinen eigenen Daten - keine offizielle Suunto-Metrik.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendär","player.tier.silver":"Silber","records.climb":"Größter Anstieg","records.distance":"Weitestes Training","records.pace":"Schnellstes Tempo","records.session":"Härteste Einheit","records.streak":"Längste Serie","records.streak_days_one":"{count} Tag","records.streak_days_other":"{count} Tage","records.workout":"Längstes Training","class.name.cycling":"Ausdauerkrieger","class.name.running":"Sprinter","class.name.trekking":"Pfadfinder","class.name.walking":"Wanderer","class.name.gym":"Kraft-Berserker","class.name.swim":"Flutenrufer","class.name.ski":"Frostläufer","class.name.row":"Ruderer","class.name.other":"Allrounder","class.flavor.cycling":"Gemacht für lange, gleichmäßige Belastung statt roher Geschwindigkeit. Alles andere ist Ergänzungstraining.","class.flavor.running":"Schnell weg und auf Tempo ausgelegt. Distanz ist nur Mittel zum Zweck.","class.flavor.trekking":"Zuhause im schwierigen Gelände, stundenlang unterwegs.","class.flavor.walking":"Stetige, gelenkschonende Kilometer summieren sich - Beständigkeit vor Intensität.","class.flavor.gym":"Rohe Kraft vor Distanz. Krafttraining steht an erster Stelle.","class.flavor.swim":"Ausdauer im Wasser geschmiedet, Zug für Zug.","class.flavor.ski":"Geschwindigkeit und Rhythmus auf Schnee und Kälte.","class.flavor.row":"Rhythmische Kraft, Schlag für Schlag.","class.flavor.other":"Keine Sportart dominiert - eine wirklich ausgewogene Mischung."},pt:{"stat.distance":"Distância","stat.duration":"Duração","stat.avg_speed":"Vel. média","stat.avg_pace":"Ritmo médio","stat.avg_hr":"FC média","stat.max_hr":"FC máx.","stat.training_effect":"Efeito do treino","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensação","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Treinos","stat.steps":"Passos","stat.heart_rate":"Frequência cardíaca","stat.quality":"Qualidade","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repouso","stat.resting_hr_delta":"FC repouso ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nível de stress","stat.recovery_window":"Tempo de recuperação","stat.ctl":"CTL · condição","stat.atl":"ATL · fadiga","stat.tsb":"TSB · forma","stat.readiness":"Prontidão","stat.recovery_balance":"Equilíbrio de recuperação","stat.training_suggestion":"Sugestão de hoje","stat.volume":"Volume","stat.intensity":"Intensidade","stat.consistency":"Consistência","stat.recovery":"Recuperação","stat.variety":"Variedade","card.hr_zones.title":"Zonas de Frequência Cardíaca","card.hr_zones.last_workout":"Último treino","card.sleep_readiness.title":"Sono e Prontidão","card.sleep_readiness.subtitle_no_wake":"{duration} de sono","card.sleep_readiness.subtitle_with_wake":"{duration} de sono · acordou às {time}","card.recovery.title":"Recuperação","card.training_load.title":"Carga de Treino","card.training_load.subtitle_fallback":"Tendência de condição (CTL)","card.week_stats.title":"Esta Semana e Histórico Total","card.week_stats.subtitle":"Últimos 7 dias","card.week_stats.lifetime_title":"Total por atividade","card.today.title":"Hoje","card.today.subtitle":"Ao vivo do teu relógio","card.training_status.title":"Estado de treino","card.training_profile.title":"Perfil de treino","card.training_profile.subtitle":"O teu treino num relance","card.heart_rate.title":"Frequência cardíaca","empty.last_workout.title":"Sem treino recente","empty.last_workout.subtitle":"Sincroniza o teu relógio com a app Suunto para o veres aqui.","empty.hr_zones.title":"Sem dados de zonas","empty.hr_zones.subtitle":"O teu próximo treino ao ar livre com cinta cardíaca vai preencher isto.","empty.sleep_readiness.title":"Ainda sem dados de sono","empty.sleep_readiness.subtitle":"Usa o relógio para dormir para veres isto aqui.","empty.recovery.title":"Ainda sem dados de recuperação","empty.training_load.title":"A calcular a carga de treino","empty.training_load.subtitle":"Precisa de algum histórico de treinos para calcular - volta a verificar após algumas sessões.","empty.week_stats.title":"Ainda sem histórico de treinos","empty.today.title":"Ainda sem dados em direto","empty.training_status.title":"Ainda não há dados suficientes","empty.training_status.subtitle":"Precisa de algum histórico de treino para calcular.","empty.training_profile.title":"Ainda não há dados suficientes","empty.training_profile.subtitle":"Precisa de mais dados dos sensores para calcular o teu perfil.","empty.heart_rate.title":"Ainda sem dados de frequência cardíaca","empty.loading":"A carregar...","empty.generic_error":"Não foi possível carregar os dados Suunto.","error.no_device":"Nenhum dispositivo Suunto encontrado - a integração suunto_app está configurada?","error.multiple_devices":'Foram encontrados vários dispositivos Suunto - define "device_id" na configuração do cartão.',"error.device_missing":'O dispositivo configurado "{device}" não tem entidades suunto_app.',"band.readiness.great":"Ótima","band.readiness.fair":"Razoável","band.readiness.low":"Baixa","band.recovery.well":"Bem recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baixa recuperação","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"A recuperar · faltam {time}","band.hrv.low":"HRV baixa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Descansado","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muito fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baixa","band.acwr.high":"Carga alta - risco de lesão","band.suggestion.hard":"Vai com tudo","band.suggestion.moderate":"Esforço moderado","band.suggestion.easy":"Vá com calma","band.suggestion.rest":"Dia de descanso","chip.workout_logged_today":"Treino registado hoje","chip.workout_today":"Treino hoje","chip.recovering":"A recuperar","chip.nap":"{minutes} min de sesta","chip.nap_earlier":"{minutes} min de sesta (mais cedo)","chip.workouts_30d":"{count} treinos nos últimos 30 dias","chip.acwr":"ACWR {value} · {label}","profile.summary":"Mais forte em {strong} · mais fraco em {light}","chip.more_activity_one":"+{count} outra modalidade","chip.more_activity_other":"+{count} outras modalidades","chip.unusual_recovery":"Recuperação incomum","chip.days_since_one":"{count} dia desde o último treino","chip.days_since_other":"{count} dias desde o último treino","achievement.count_one":"{count} conquista","achievement.count_other":"{count} conquistas","achievement.rank":"Posição #{rank} nesta rota","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Leve","label.rem":"REM","editor.auto_detect":"Este cartão deteta automaticamente o teu dispositivo Suunto - não é necessária configuração.","editor.pick_device":"Foram encontrados vários dispositivos Suunto - escolhe qual este cartão deve usar.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totais Vitalícios","card.lifetime.subtitle":"Desde o início","stat.active_days":"Dias ativos","empty.lifetime.title":"Ainda sem dados vitalícios","card.recent_workouts.title":"Treinos Recentes","empty.recent_workouts.title":"Sem treinos recentes","card.elevation.title":"Altitude e Subidas","stat.ascent":"Subida","stat.descent":"Descida","stat.ascent_time":"Tempo subida","stat.descent_time":"Tempo descida","stat.min_altitude":"Altitude mín.","stat.max_altitude":"Altitude máx.","stat.ascent_rate":"Taxa de subida","empty.elevation.title":"Sem dados de altitude","empty.elevation.subtitle":"Só os treinos ao ar livre com barómetro registam isto.","card.location.title":"Localização de Início","location.open_in_maps":"Abrir no Maps","empty.location.title":"Sem dados de localização","empty.location.subtitle":"Os treinos em interiores não têm ponto de início GPS.","card.fitness.title":"Condição Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Idade física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Ainda sem dados de condição física","empty.fitness.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","card.pmc.title":"Gestão de Desempenho","card.pmc.subtitle":"Tendência de 90 dias","card.recovery_trends.title":"Tendências de Recuperação","card.recovery_trends.subtitle":"Referência de 30 dias","empty.recovery_trends.title":"Ainda sem dados de tendências de recuperação","card.weekly_volume.title":"Volume Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Ainda sem dados de volume semanal","stat.average":"Média","stat.total":"Total","card.hr_curve.title":"Curva de Frequência Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Agora","stat.hr_min":"Mín. de hoje","stat.hr_max":"Máx. de hoje","empty.hr_curve.title":"Ainda sem dados de FC em direto","empty.hr_curve.subtitle":"Usa e sincroniza o teu relógio para veres aqui a curva de hoje.","card.sleep_trends.title":"Tendências de Sono","card.sleep_trends.subtitle":"Últimas 30 noites","empty.sleep_trends.title":"Ainda sem dados de tendências de sono","card.weekly_goal.title":"Meta Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Ainda sem distância semanal","editor.goal_label":"Meta semanal (km)","card.streak.title":"Sequência de Atividade","card.streak.subtitle":"Últimos 14 dias","streak.window_count_one":"{count} dia ativo","streak.window_count_other":"{count} dias ativos","streak.days_one":"{count} dia de sequência","streak.days_other":"{count} dias de sequência","streak.none":"Sem sequência ativa - começa hoje","empty.streak.title":"Ainda sem histórico de treinos","just_finished.title":"Bom trabalho!","just_finished.idle.title":"À espera do teu próximo treino","just_finished.idle.subtitle":"Este cartão acende assim que o teu relógio sincronizar um treino novo.","empty.just_finished.title":"Sem treino recente","card.activity_trends.title":"Tendências de Atividade","card.activity_trends.subtitle":"Últimos 14 dias","empty.activity_trends.title":"Ainda sem dados de tendências de atividade","card.recovery_balance_trend.title":"Tendência do Equilíbrio de Recuperação","card.recovery_balance_trend.subtitle":"Últimos 14 dias","empty.recovery_balance_trend.title":"Ainda sem dados de tendências de recuperação","card.readiness_trend.title":"Tendência de Prontidão","card.readiness_trend.subtitle":"Últimos 30 dias","empty.readiness_trend.title":"Ainda sem dados de tendências de prontidão","stat.cadence":"Cadência","stat.pct_hrmax":"% da FC máx.","stat.sleep_avg_hr":"FC média sono","stat.sleep_min_hr":"FC mín. sono","chip.bedtime":"Deitou-se {time}","card.activity_calendar.title":"Calendário de Atividade","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Ainda sem histórico de treinos","activity_calendar.active_days_one":"{count} dia ativo","activity_calendar.active_days_other":"{count} dias ativos","card.workout_comparison.title":"Comparação de Treinos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ainda sem treinos suficientes para comparar","empty.workout_comparison.subtitle":"Faz a mesma atividade duas vezes para veres uma comparação.","stat.distance_delta":"Distância ({delta})","stat.duration_delta":"Duração ({delta})","stat.avg_hr_delta":"FC média ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"Em Números","card.milestones.subtitle":"Desde que começaste","empty.milestones.title":"Ainda sem dados totais","stat.earth_laps":"Voltas à Terra","stat.marathons":"Maratonas","stat.moon_pct":"% até à Lua","stat.burgers":"Hambúrgueres","card.athlete_profile.title":"Personalidade de Treino","empty.athlete_profile.title":"Ainda sem dados suficientes","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Caminhante","personality.activity.walking":"Andarilho","personality.activity.gym":"Atleta de Força","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remador","personality.activity.other":"Multidesportivo","personality.schedule.weekend":"Guerreiro de Fim de Semana","personality.schedule.weekday":"Regular da Semana","personality.schedule.balanced":"Horário Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Ativo à Tarde","personality.time.evening":"Atleta da Noite","personality.time.night":"Coruja Noturna","card.pace_trend.title":"Tendência de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sessões","empty.pace_trend.title":"Ainda sem treinos suficientes para comparar","empty.pace_trend.subtitle":"Faz a mesma atividade algumas vezes para veres uma tendência.","pace_trend.faster":"A ficar mais rápido","pace_trend.slower":"A ficar mais lento","pace_trend.steady":"Ritmo estável","card.lap_splits.title":"Tempos de Volta","empty.lap_splits.title":"Sem dados de voltas","empty.lap_splits.subtitle":"Nem todos os treinos têm voltas - o próximo que tiver vai preencher isto.","stat.laps":"Voltas","stat.fastest_lap":"Volta mais rápida","label.lap":"Volta {n}","card.training_effect_trend.title":"Tendência do Efeito de Treino","empty.training_effect_trend.title":"Ainda sem dados de efeito de treino","achievements.badge.around_globe":"Volta ao mundo","achievements.badge.century_club":"Clube da Centena - 100 treinos","achievements.badge.consistency_king":"Rei da Constância - sequência de 14 dias","achievements.badge.days_100":"100 dias ativos","achievements.badge.distance_1000":"Clube dos 1000 km","achievements.badge.distance_5000":"Clube dos 5000 km","achievements.badge.elite_engine":"Motor de elite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal queimadas","achievements.badge.energy_1m":"1.000.000 kcal queimadas","achievements.badge.full_year":"Ano inteiro ativo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Pau para toda obra - 5+ modalidades","achievements.badge.multi_sport":"Atleta multimodalidade - 3+ modalidades","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treinos","achievements.badge.workouts_1000":"1000 treinos","achievements.badge.workouts_250":"250 treinos","achievements.badge.workouts_500":"500 treinos","achievements.category.days":"Dias ativos","achievements.category.distance":"Distância","achievements.category.energy":"Energia","achievements.category.fitness":"Nível de forma física","achievements.category.records":"Recordes pessoais","achievements.category.time":"Tempo de treino","achievements.category.variety":"Variedade","achievements.category.workouts":"Treinos registados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Conquistas","class.rest":"+{pct}% outras atividades","class.tag":"Foco: {activity}","empty.achievements.subtitle":"Regista alguns treinos para começar a desbloquear emblemas.","empty.achievements.title":"Ainda sem conquistas","empty.class.subtitle":"Regista alguns treinos para revelar a tua classe.","empty.class.title":"Ainda sem dados suficientes","empty.level.subtitle":"O teu primeiro treino sincronizado inicia a subida.","empty.level.title":"Ainda sem dados totais","empty.player.subtitle":"Precisa de algum histórico de treino para calcular as tuas estatísticas.","empty.player.title":"Ainda sem dados suficientes","level.label":"NÍVEL","level.source":"{count} treinos registados","level.subtitle":"Alimentado pela tua carga de treino total","level.title.grinder":"Batalhador de Resistência","level.title.legend":"Lenda Viva","level.title.novice":"Recruta Novato","level.title.veteran":"Veterano Experiente","level.xp_to_next":"{xp} XP até o Nv {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista em {activity}","player.help.title":"O que isto significa","player.help.sta":"STA · Resistência, da tua Forma (CTL): quanta carga de treino constante consegues aguentar","player.help.pwr":"PWR · Potência, da intensidade média (TSS) das tuas sessões recentes","player.help.rec":"REC · Recuperação, a tua pontuação atual de Prontidão","player.help.con":"CON · Constância, treinos registados nos últimos 30 dias","player.help.end":"END · Resistência, do teu VO2max estimado","player.help.frm":"FRM · Forma, do teu balanço atual de carga de treino (TSB)","player.help.disclaimer":"Valores heurísticos calculados a partir dos teus próprios dados - não é uma métrica oficial da Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Ouro","player.tier.legendary":"Lendário","player.tier.silver":"Prata","records.climb":"Maior subida","records.distance":"Treino mais longo (distância)","records.pace":"Ritmo mais rápido","records.session":"Sessão mais dura","records.streak":"Sequência mais longa","records.streak_days_one":"{count} dia","records.streak_days_other":"{count} dias","records.workout":"Treino mais longo","class.name.cycling":"Guerreiro da Resistência","class.name.running":"Velocista","class.name.trekking":"Desbravador","class.name.walking":"Andarilho","class.name.gym":"Berserker da Força","class.name.swim":"Senhor das Marés","class.name.ski":"Corredor do Gelo","class.name.row":"Remador","class.name.other":"Pau para toda obra","class.flavor.cycling":"Feito para esforços longos e constantes, não para velocidade pura. Qualquer outro desporto é treino complementar.","class.flavor.running":"Rápido na saída e focado no ritmo. A distância é apenas um meio.","class.flavor.trekking":"Em casa em terreno difícil, percorrendo quilómetros durante horas.","class.flavor.walking":"Quilómetros constantes e de baixo impacto que se somam - constância acima de intensidade.","class.flavor.gym":"Força bruta antes da distância. As sessões de força vêm primeiro.","class.flavor.swim":"Resistência forjada na água, braçada a braçada.","class.flavor.ski":"Velocidade e ritmo na neve e no frio.","class.flavor.row":"Força rítmica, remada a remada.","class.flavor.other":"Nenhum desporto domina - uma mistura verdadeiramente equilibrada."},fr:{"stat.distance":"Distance","stat.duration":"Durée","stat.avg_speed":"Vitesse moy.","stat.avg_pace":"Allure moy.","stat.avg_hr":"FC moy.","stat.max_hr":"FC max","stat.training_effect":"Effet d'entraînement","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Ressenti","stat.energy":"Énergie","stat.time":"Temps","stat.workouts":"Séances","stat.steps":"Pas","stat.heart_rate":"Fréquence cardiaque","stat.quality":"Qualité","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repos","stat.resting_hr_delta":"FC repos ({delta})","stat.spo2":"SpO2","stat.stress_level":"Niveau de stress","stat.recovery_window":"Temps de récupération","stat.ctl":"CTL · forme","stat.atl":"ATL · fatigue","stat.tsb":"TSB · forme","stat.readiness":"Préparation","stat.recovery_balance":"Équilibre de récupération","stat.training_suggestion":"Suggestion du jour","stat.volume":"Volume","stat.intensity":"Intensité","stat.consistency":"Régularité","stat.recovery":"Récupération","stat.variety":"Variété","card.hr_zones.title":"Zones de Fréquence Cardiaque","card.hr_zones.last_workout":"Dernière séance","card.sleep_readiness.title":"Sommeil et Préparation","card.sleep_readiness.subtitle_no_wake":"{duration} de sommeil","card.sleep_readiness.subtitle_with_wake":"{duration} de sommeil · réveil à {time}","card.recovery.title":"Récupération","card.training_load.title":"Charge d'Entraînement","card.training_load.subtitle_fallback":"Tendance de forme (CTL)","card.week_stats.title":"Cette Semaine et Cumul Total","card.week_stats.subtitle":"7 derniers jours","card.week_stats.lifetime_title":"Cumul par activité","card.today.title":"Aujourd'hui","card.today.subtitle":"En direct de ta montre","card.training_status.title":"État d'entraînement","card.training_profile.title":"Profil d'entraînement","card.training_profile.subtitle":"Ton entraînement en un coup d'œil","card.heart_rate.title":"Fréquence cardiaque","empty.last_workout.title":"Aucune séance récente","empty.last_workout.subtitle":"Synchronise ta montre avec l'appli Suunto pour la voir ici.","empty.hr_zones.title":"Aucune donnée de zone","empty.hr_zones.subtitle":"Ta prochaine séance en extérieur avec ceinture cardiaque remplira ceci.","empty.sleep_readiness.title":"Pas encore de données de sommeil","empty.sleep_readiness.subtitle":"Porte ta montre pour dormir afin de le voir ici.","empty.recovery.title":"Pas encore de données de récupération","empty.training_load.title":"Calcul de la charge d'entraînement","empty.training_load.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé - reviens après quelques séances.","empty.week_stats.title":"Pas encore d'historique d'entraînement","empty.today.title":"Pas encore de données en direct","empty.training_status.title":"Pas encore assez de données","empty.training_status.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé.","empty.training_profile.title":"Pas encore assez de données","empty.training_profile.subtitle":"Nécessite plus de données de capteurs pour calculer ton profil.","empty.heart_rate.title":"Pas encore de données de fréquence cardiaque","empty.loading":"Chargement...","empty.generic_error":"Impossible de charger les données Suunto.","error.no_device":"Aucun appareil Suunto trouvé - l'intégration suunto_app est-elle configurée ?","error.multiple_devices":'Plusieurs appareils Suunto trouvés - définis "device_id" dans la configuration de la carte.',"error.device_missing":"L'appareil configuré \"{device}\" n'a aucune entité suunto_app.","band.readiness.great":"Excellente","band.readiness.fair":"Correcte","band.readiness.low":"Faible","band.recovery.well":"Bien récupéré","band.recovery.partial":"Partiellement récupéré","band.recovery.low":"Faible récupération","band.recovery.fully":"Entièrement récupéré","band.recovery.recovering":"Récupération · {time} restant","band.hrv.low":"HRV basse","band.hrv.high":"HRV élevée","band.hrv.balanced":"HRV équilibrée","band.form.fresh":"Frais","band.form.neutral":"Neutre","band.form.fatigued":"Fatigué","band.form.very_fatigued":"Très fatigué","band.acwr.safe":"Zone sûre","band.acwr.low":"Charge faible","band.acwr.high":"Charge élevée - risque de blessure","band.suggestion.hard":"Foncez","band.suggestion.moderate":"Effort modéré","band.suggestion.easy":"Y aller doucement","band.suggestion.rest":"Jour de repos","chip.workout_logged_today":"Séance enregistrée aujourd'hui","chip.workout_today":"Séance aujourd'hui","chip.recovering":"Récupération","chip.nap":"{minutes} min de sieste","chip.nap_earlier":"{minutes} min de sieste (plus tôt)","chip.workouts_30d":"{count} séances au cours des 30 derniers jours","chip.acwr":"ACWR {value} · {label}","profile.summary":"Le plus fort en {strong} · le plus faible en {light}","chip.more_activity_one":"+{count} autre activité","chip.more_activity_other":"+{count} autres activités","chip.unusual_recovery":"Récupération inhabituelle","chip.days_since_one":"{count} jour depuis la dernière séance","chip.days_since_other":"{count} jours depuis la dernière séance","achievement.count_one":"{count} exploit","achievement.count_other":"{count} exploits","achievement.rank":"Rang #{rank} sur cet itinéraire","label.zone":"Zone {n}","label.deep":"Profond","label.light":"Léger","label.rem":"REM","editor.auto_detect":"Cette carte détecte automatiquement ton appareil Suunto - aucune configuration nécessaire.","editor.pick_device":"Plusieurs appareils Suunto trouvés - choisis celui que cette carte doit utiliser.","editor.device_label":"Appareil Suunto","card.lifetime.title":"Cumul Total","card.lifetime.subtitle":"Depuis le début","stat.active_days":"Jours actifs","empty.lifetime.title":"Pas encore de cumul total","card.recent_workouts.title":"Séances Récentes","empty.recent_workouts.title":"Aucune séance récente","card.elevation.title":"Dénivelé et Montées","stat.ascent":"Montée","stat.descent":"Descente","stat.ascent_time":"Temps montée","stat.descent_time":"Temps descente","stat.min_altitude":"Altitude min.","stat.max_altitude":"Altitude max.","stat.ascent_rate":"Vitesse ascensionnelle","empty.elevation.title":"Aucune donnée d'altitude","empty.elevation.subtitle":"Seules les séances en extérieur avec un altimètre enregistrent ceci.","card.location.title":"Lieu de Départ","location.open_in_maps":"Ouvrir dans Maps","empty.location.title":"Aucune donnée de localisation","empty.location.subtitle":"Les séances en intérieur n'ont pas de point de départ GPS.","card.fitness.title":"Forme Physique","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Âge physique","fitness.measured":"Mesuré {time} · {activity}","empty.fitness.title":"Pas encore de données de forme physique","empty.fitness.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","card.pmc.title":"Gestion de la Performance","card.pmc.subtitle":"Tendance sur 90 jours","card.recovery_trends.title":"Tendances de Récupération","card.recovery_trends.subtitle":"Référence sur 30 jours","empty.recovery_trends.title":"Pas encore de données de tendances de récupération","card.weekly_volume.title":"Volume Hebdomadaire","card.weekly_volume.subtitle":"12 dernières semaines","empty.weekly_volume.title":"Pas encore de données de volume hebdomadaire","stat.average":"Moyenne","stat.total":"Total","card.hr_curve.title":"Courbe de Fréquence Cardiaque","card.hr_curve.subtitle":"Dernières 24 heures","stat.hr_now":"Maintenant","stat.hr_min":"Min. du jour","stat.hr_max":"Max. du jour","empty.hr_curve.title":"Pas encore de données de FC en direct","empty.hr_curve.subtitle":"Porte et synchronise ta montre pour voir la courbe du jour ici.","card.sleep_trends.title":"Tendances de Sommeil","card.sleep_trends.subtitle":"30 dernières nuits","empty.sleep_trends.title":"Pas encore de données de tendances de sommeil","card.weekly_goal.title":"Objectif Hebdomadaire","card.weekly_goal.subtitle":"{value} sur {goal} km","empty.weekly_goal.title":"Pas encore de distance hebdomadaire","editor.goal_label":"Objectif hebdomadaire (km)","card.streak.title":"Série d'Activité","card.streak.subtitle":"14 derniers jours","streak.window_count_one":"{count} jour actif","streak.window_count_other":"{count} jours actifs","streak.days_one":"{count} jour de série","streak.days_other":"{count} jours de série","streak.none":"Aucune série active - bouge aujourd'hui","empty.streak.title":"Pas encore d'historique d'entraînement","just_finished.title":"Bien joué !","just_finished.idle.title":"En attente de ta prochaine séance","just_finished.idle.subtitle":"Cette carte s'allume dès que ta montre synchronise une nouvelle séance.","empty.just_finished.title":"Aucune séance récente","card.activity_trends.title":"Tendances d'Activité","card.activity_trends.subtitle":"14 derniers jours","empty.activity_trends.title":"Pas encore de données de tendances d'activité","card.recovery_balance_trend.title":"Tendance de l'Équilibre de Récupération","card.recovery_balance_trend.subtitle":"14 derniers jours","empty.recovery_balance_trend.title":"Pas encore de données de tendances de récupération","card.readiness_trend.title":"Tendance de Préparation","card.readiness_trend.subtitle":"30 derniers jours","empty.readiness_trend.title":"Pas encore de données de tendances de préparation","stat.cadence":"Cadence","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC moy. som.","stat.sleep_min_hr":"FC min. som.","chip.bedtime":"Coucher {time}","card.activity_calendar.title":"Calendrier d'Activité","card.activity_calendar.subtitle":"6 dernières semaines","empty.activity_calendar.title":"Pas encore d'historique d'entraînement","activity_calendar.active_days_one":"{count} jour actif","activity_calendar.active_days_other":"{count} jours actifs","card.workout_comparison.title":"Comparaison de Séances","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Pas encore assez de séances similaires","empty.workout_comparison.subtitle":"Fais la même activité deux fois pour voir une comparaison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Durée ({delta})","stat.avg_hr_delta":"FC moy. ({delta})","stat.pace_delta":"Allure ({delta})","card.milestones.title":"En Chiffres","card.milestones.subtitle":"Depuis le début","empty.milestones.title":"Pas encore de données cumulées","stat.earth_laps":"Tours de la Terre","stat.marathons":"Marathons","stat.moon_pct":"% jusqu'à la Lune","stat.burgers":"Burgers","card.athlete_profile.title":"Personnalité Sportive","empty.athlete_profile.title":"Pas encore assez de données","personality.activity.cycling":"Cycliste","personality.activity.running":"Coureur","personality.activity.trekking":"Randonneur","personality.activity.walking":"Marcheur","personality.activity.gym":"Athlète de Force","personality.activity.swim":"Nageur","personality.activity.ski":"Skieur","personality.activity.row":"Rameur","personality.activity.other":"Multisportif","personality.schedule.weekend":"Guerrier du Week-end","personality.schedule.weekday":"Régulier en Semaine","personality.schedule.balanced":"Planning Équilibré","personality.time.morning":"Lève-tôt","personality.time.afternoon":"Actif l'Après-midi","personality.time.evening":"Athlète du Soir","personality.time.night":"Oiseau de Nuit","card.pace_trend.title":"Tendance d'Allure","card.pace_trend.subtitle":"{activity} · {count} dernières séances","empty.pace_trend.title":"Pas encore assez de séances similaires","empty.pace_trend.subtitle":"Fais la même activité plusieurs fois pour voir une tendance.","pace_trend.faster":"S'améliore","pace_trend.slower":"Ralentit","pace_trend.steady":"Stable","card.lap_splits.title":"Temps par Tour","empty.lap_splits.title":"Aucune donnée de tour","empty.lap_splits.subtitle":"Tous les entraînements n'ont pas de tours - le prochain qui en a remplira ceci.","stat.laps":"Tours","stat.fastest_lap":"Tour le plus rapide","label.lap":"Tour {n}","card.training_effect_trend.title":"Tendance de l'Effet d'Entraînement","empty.training_effect_trend.title":"Pas encore de données d'effet d'entraînement","achievements.badge.around_globe":"Tour du monde","achievements.badge.century_club":"Club du Centenaire - 100 entraînements","achievements.badge.consistency_king":"Roi de la Régularité - série de 14 jours","achievements.badge.days_100":"100 jours actifs","achievements.badge.distance_1000":"Club des 1000 km","achievements.badge.distance_5000":"Club des 5000 km","achievements.badge.elite_engine":"Moteur d'élite - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal brûlées","achievements.badge.energy_1m":"1 000 000 kcal brûlées","achievements.badge.full_year":"Actif toute l'année","achievements.badge.hours_100":"100 heures","achievements.badge.hours_500":"500 heures","achievements.badge.jack_of_all_trades":"Touche-à-tout - 5+ sports","achievements.badge.multi_sport":"Athlète multisport - 3+ sports","achievements.badge.solid_engine":"Moteur solide - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entraînements","achievements.badge.workouts_1000":"1000 entraînements","achievements.badge.workouts_250":"250 entraînements","achievements.badge.workouts_500":"500 entraînements","achievements.category.days":"Jours actifs","achievements.category.distance":"Distance","achievements.category.energy":"Énergie","achievements.category.fitness":"Niveau de forme","achievements.category.records":"Records personnels","achievements.category.time":"Temps d'entraînement","achievements.category.variety":"Variété","achievements.category.workouts":"Entraînements enregistrés","card.achievements.subtitle":"{unlocked} sur {total} débloqués","card.achievements.title":"Succès","class.rest":"+{pct}% autres activités","class.tag":"Orientation : {activity}","empty.achievements.subtitle":"Enregistrez quelques séances pour débloquer des badges.","empty.achievements.title":"Aucun succès pour l'instant","empty.class.subtitle":"Enregistrez quelques séances pour révéler votre classe.","empty.class.title":"Pas encore assez de données","empty.level.subtitle":"Votre première séance synchronisée lance l'ascension.","empty.level.title":"Pas encore de données cumulées","empty.player.subtitle":"Nécessite un peu d'historique d'entraînement pour calculer vos stats.","empty.player.title":"Pas encore assez de données","level.label":"NIVEAU","level.source":"{count} entraînements enregistrés","level.subtitle":"Alimenté par votre charge d'entraînement cumulée","level.title.grinder":"Bosseur d'Endurance","level.title.legend":"Légende Vivante","level.title.novice":"Recrue Fraîche","level.title.veteran":"Vétéran Aguerri","level.xp_to_next":"{xp} XP avant Niv {level}","level.xp_total":"{xp} XP","player.archetype":"Spécialiste {activity}","player.help.title":"Ce que cela signifie","player.help.sta":"STA · Endurance, d'après votre Forme (CTL) : la charge d'entraînement régulière que vous pouvez supporter","player.help.pwr":"PWR · Puissance, d'après l'intensité moyenne (TSS) de vos séances récentes","player.help.rec":"REC · Récupération, votre score de Disponibilité actuel","player.help.con":"CON · Régularité, entraînements enregistrés sur les 30 derniers jours","player.help.end":"END · Endurance, d'après votre VO2max estimé","player.help.frm":"FRM · Forme, d'après votre balance de charge d'entraînement actuelle (TSB)","player.help.disclaimer":"Valeurs heuristiques calculées à partir de vos propres données - pas une métrique officielle Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Or","player.tier.legendary":"Légendaire","player.tier.silver":"Argent","records.climb":"Plus grande ascension","records.distance":"Entraînement le plus long (distance)","records.pace":"Allure la plus rapide","records.session":"Séance la plus dure","records.streak":"Plus longue série","records.streak_days_one":"{count} jour","records.streak_days_other":"{count} jours","records.workout":"Entraînement le plus long","class.name.cycling":"Guerrier de l'Endurance","class.name.running":"Sprinteur","class.name.trekking":"Éclaireur","class.name.walking":"Vagabond","class.name.gym":"Berserker de la Force","class.name.swim":"Maître des Marées","class.name.ski":"Coureur du Givre","class.name.row":"Rameur","class.name.other":"Touche-à-tout","class.flavor.cycling":"Conçu pour des efforts longs et réguliers plutôt que la vitesse pure. Tout autre sport n'est qu'un complément.","class.flavor.running":"Rapide au départ et centré sur le tempo. La distance n'est qu'un moyen.","class.flavor.trekking":"À l'aise sur terrain difficile, avalant les kilomètres pendant des heures.","class.flavor.walking":"Des kilomètres réguliers et peu traumatisants qui s'accumulent - la régularité prime sur l'intensité.","class.flavor.gym":"La force brute avant la distance. Les séances de force passent en premier.","class.flavor.swim":"Une endurance forgée dans l'eau, brasse après brasse.","class.flavor.ski":"Vitesse et rythme sur la neige et le froid.","class.flavor.row":"Une force rythmée, coup après coup.","class.flavor.other":"Aucun sport ne domine - un mélange vraiment équilibré."},es:{"stat.distance":"Distancia","stat.duration":"Duración","stat.avg_speed":"Vel. media","stat.avg_pace":"Ritmo medio","stat.avg_hr":"FC media","stat.max_hr":"FC máx.","stat.training_effect":"Efecto del entrenamiento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensación","stat.energy":"Energía","stat.time":"Tiempo","stat.workouts":"Entrenamientos","stat.steps":"Pasos","stat.heart_rate":"Frecuencia cardíaca","stat.quality":"Calidad","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC reposo","stat.resting_hr_delta":"FC reposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nivel de estrés","stat.recovery_window":"Tiempo de recuperación","stat.ctl":"CTL · forma","stat.atl":"ATL · fatiga","stat.tsb":"TSB · forma","stat.readiness":"Preparación","stat.recovery_balance":"Equilibrio de recuperación","stat.training_suggestion":"Sugerencia de hoy","stat.volume":"Volumen","stat.intensity":"Intensidad","stat.consistency":"Constancia","stat.recovery":"Recuperación","stat.variety":"Variedad","card.hr_zones.title":"Zonas de Frecuencia Cardíaca","card.hr_zones.last_workout":"Último entrenamiento","card.sleep_readiness.title":"Sueño y Preparación","card.sleep_readiness.subtitle_no_wake":"{duration} de sueño","card.sleep_readiness.subtitle_with_wake":"{duration} de sueño · despertar a las {time}","card.recovery.title":"Recuperación","card.training_load.title":"Carga de Entrenamiento","card.training_load.subtitle_fallback":"Tendencia de forma (CTL)","card.week_stats.title":"Esta Semana y Total Histórico","card.week_stats.subtitle":"Últimos 7 días","card.week_stats.lifetime_title":"Total por actividad","card.today.title":"Hoy","card.today.subtitle":"En vivo desde tu reloj","card.training_status.title":"Estado de entrenamiento","card.training_profile.title":"Perfil de entrenamiento","card.training_profile.subtitle":"Tu entrenamiento de un vistazo","card.heart_rate.title":"Frecuencia cardíaca","empty.last_workout.title":"Sin entrenamiento reciente","empty.last_workout.subtitle":"Sincroniza tu reloj con la app Suunto para verlo aquí.","empty.hr_zones.title":"Sin datos de zonas","empty.hr_zones.subtitle":"Tu próximo entrenamiento al aire libre con banda de frecuencia cardíaca completará esto.","empty.sleep_readiness.title":"Aún sin datos de sueño","empty.sleep_readiness.subtitle":"Usa tu reloj para dormir para verlo aquí.","empty.recovery.title":"Aún sin datos de recuperación","empty.training_load.title":"Calculando la carga de entrenamiento","empty.training_load.subtitle":"Necesita algo de historial de entrenamientos para calcularse - vuelve a comprobarlo tras algunas sesiones.","empty.week_stats.title":"Aún sin historial de entrenamientos","empty.today.title":"Aún sin datos en vivo","empty.training_status.title":"Aún no hay suficientes datos","empty.training_status.subtitle":"Necesita algo de historial de entrenamiento para calcularlo.","empty.training_profile.title":"Aún no hay suficientes datos","empty.training_profile.subtitle":"Necesita más datos de sensores para calcular tu perfil.","empty.heart_rate.title":"Aún sin datos de frecuencia cardíaca","empty.loading":"Cargando...","empty.generic_error":"No se pudieron cargar los datos de Suunto.","error.no_device":"No se encontró ningún dispositivo Suunto - ¿está configurada la integración suunto_app?","error.multiple_devices":'Se encontraron varios dispositivos Suunto - define "device_id" en la configuración de la tarjeta.',"error.device_missing":'El dispositivo configurado "{device}" no tiene entidades suunto_app.',"band.readiness.great":"Excelente","band.readiness.fair":"Aceptable","band.readiness.low":"Baja","band.recovery.well":"Bien recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baja recuperación","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"Recuperando · quedan {time}","band.hrv.low":"HRV baja","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muy fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baja","band.acwr.high":"Carga alta - riesgo de lesión","band.suggestion.hard":"A por ello","band.suggestion.moderate":"Esfuerzo moderado","band.suggestion.easy":"Tómatelo con calma","band.suggestion.rest":"Día de descanso","chip.workout_logged_today":"Entrenamiento registrado hoy","chip.workout_today":"Entrenamiento hoy","chip.recovering":"Recuperando","chip.nap":"{minutes} min de siesta","chip.nap_earlier":"{minutes} min de siesta (antes)","chip.workouts_30d":"{count} entrenamientos en los últimos 30 días","chip.acwr":"ACWR {value} · {label}","profile.summary":"Más fuerte en {strong} · más débil en {light}","chip.more_activity_one":"+{count} actividad más","chip.more_activity_other":"+{count} actividades más","chip.unusual_recovery":"Recuperación inusual","chip.days_since_one":"{count} día desde el último entrenamiento","chip.days_since_other":"{count} días desde el último entrenamiento","achievement.count_one":"{count} logro","achievement.count_other":"{count} logros","achievement.rank":"Puesto #{rank} en esta ruta","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Ligero","label.rem":"REM","editor.auto_detect":"Esta tarjeta detecta automáticamente tu dispositivo Suunto - no se necesita configuración.","editor.pick_device":"Se encontraron varios dispositivos Suunto - elige cuál debe usar esta tarjeta.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totales Históricos","card.lifetime.subtitle":"Desde el inicio","stat.active_days":"Días activos","empty.lifetime.title":"Aún sin totales históricos","card.recent_workouts.title":"Entrenamientos Recientes","empty.recent_workouts.title":"Sin entrenamientos recientes","card.elevation.title":"Altitud y Ascensos","stat.ascent":"Ascenso","stat.descent":"Descenso","stat.ascent_time":"T. ascenso","stat.descent_time":"T. descenso","stat.min_altitude":"Altitud mín.","stat.max_altitude":"Altitud máx.","stat.ascent_rate":"Velocidad de ascenso","empty.elevation.title":"Sin datos de altitud","empty.elevation.subtitle":"Solo los entrenamientos al aire libre con altímetro registran esto.","card.location.title":"Ubicación de Inicio","location.open_in_maps":"Abrir en Maps","empty.location.title":"Sin datos de ubicación","empty.location.subtitle":"Los entrenamientos en interiores no tienen punto de inicio GPS.","card.fitness.title":"Forma Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Edad física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Aún sin datos de forma física","empty.fitness.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","card.pmc.title":"Gestión del Rendimiento","card.pmc.subtitle":"Tendencia de 90 días","card.recovery_trends.title":"Tendencias de Recuperación","card.recovery_trends.subtitle":"Referencia de 30 días","empty.recovery_trends.title":"Aún sin datos de tendencias de recuperación","card.weekly_volume.title":"Volumen Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Aún sin datos de volumen semanal","stat.average":"Media","stat.total":"Total","card.hr_curve.title":"Curva de Frecuencia Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Ahora","stat.hr_min":"Mín. de hoy","stat.hr_max":"Máx. de hoy","empty.hr_curve.title":"Aún sin datos de FC en vivo","empty.hr_curve.subtitle":"Usa y sincroniza tu reloj para ver aquí la curva de hoy.","card.sleep_trends.title":"Tendencias de Sueño","card.sleep_trends.subtitle":"Últimas 30 noches","empty.sleep_trends.title":"Aún sin datos de tendencias de sueño","card.weekly_goal.title":"Objetivo Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Aún sin distancia semanal","editor.goal_label":"Objetivo semanal (km)","card.streak.title":"Racha de Actividad","card.streak.subtitle":"Últimos 14 días","streak.window_count_one":"{count} día activo","streak.window_count_other":"{count} días activos","streak.days_one":"{count} día de racha","streak.days_other":"{count} días de racha","streak.none":"Sin racha activa - muévete hoy","empty.streak.title":"Aún sin historial de entrenamientos","just_finished.title":"¡Buen trabajo!","just_finished.idle.title":"Esperando tu próximo entrenamiento","just_finished.idle.subtitle":"Esta tarjeta se activa en cuanto tu reloj sincronice un entrenamiento nuevo.","empty.just_finished.title":"Sin entrenamiento reciente","card.activity_trends.title":"Tendencias de Actividad","card.activity_trends.subtitle":"Últimos 14 días","empty.activity_trends.title":"Aún sin datos de tendencias de actividad","card.recovery_balance_trend.title":"Tendencia del Equilibrio de Recuperación","card.recovery_balance_trend.subtitle":"Últimos 14 días","empty.recovery_balance_trend.title":"Aún sin datos de tendencias de recuperación","card.readiness_trend.title":"Tendencia de Preparación","card.readiness_trend.subtitle":"Últimos 30 días","empty.readiness_trend.title":"Aún sin datos de tendencias de preparación","stat.cadence":"Cadencia","stat.pct_hrmax":"% de FC máx.","stat.sleep_avg_hr":"FC med. sueño","stat.sleep_min_hr":"FC mín. sueño","chip.bedtime":"Acostado {time}","card.activity_calendar.title":"Calendario de Actividad","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Aún sin historial de entrenamientos","activity_calendar.active_days_one":"{count} día activo","activity_calendar.active_days_other":"{count} días activos","card.workout_comparison.title":"Comparación de Entrenamientos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Aún no hay suficientes entrenamientos similares","empty.workout_comparison.subtitle":"Haz la misma actividad dos veces para ver una comparación.","stat.distance_delta":"Distancia ({delta})","stat.duration_delta":"Duración ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"En Números","card.milestones.subtitle":"Desde que empezaste","empty.milestones.title":"Aún sin datos históricos","stat.earth_laps":"Vueltas a la Tierra","stat.marathons":"Maratones","stat.moon_pct":"% hasta la Luna","stat.burgers":"Hamburguesas","card.athlete_profile.title":"Personalidad Deportiva","empty.athlete_profile.title":"Aún no hay suficientes datos","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Excursionista","personality.activity.walking":"Caminante","personality.activity.gym":"Atleta de Fuerza","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remero","personality.activity.other":"Multideportista","personality.schedule.weekend":"Guerrero de Fin de Semana","personality.schedule.weekday":"Regular Entre Semana","personality.schedule.balanced":"Horario Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Activo por la Tarde","personality.time.evening":"Atleta Vespertino","personality.time.night":"Búho Nocturno","card.pace_trend.title":"Tendencia de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sesiones","empty.pace_trend.title":"Aún no hay suficientes entrenamientos similares","empty.pace_trend.subtitle":"Haz la misma actividad varias veces para ver una tendencia.","pace_trend.faster":"Mejorando el ritmo","pace_trend.slower":"Perdiendo ritmo","pace_trend.steady":"Ritmo estable","card.lap_splits.title":"Tiempos por Vuelta","empty.lap_splits.title":"Sin datos de vueltas","empty.lap_splits.subtitle":"No todos los entrenamientos tienen vueltas - el próximo que las tenga completará esto.","stat.laps":"Vueltas","stat.fastest_lap":"Vuelta más rápida","label.lap":"Vuelta {n}","card.training_effect_trend.title":"Tendencia del Efecto de Entrenamiento","empty.training_effect_trend.title":"Aún sin datos de efecto de entrenamiento","achievements.badge.around_globe":"Vuelta al mundo","achievements.badge.century_club":"Club del Centenar - 100 entrenamientos","achievements.badge.consistency_king":"Rey de la Constancia - racha de 14 días","achievements.badge.days_100":"100 días activos","achievements.badge.distance_1000":"Club de los 1000 km","achievements.badge.distance_5000":"Club de los 5000 km","achievements.badge.elite_engine":"Motor de élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal quemadas","achievements.badge.energy_1m":"1.000.000 kcal quemadas","achievements.badge.full_year":"Todo un año activo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Todoterreno - 5+ deportes","achievements.badge.multi_sport":"Atleta multideporte - 3+ deportes","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entrenamientos","achievements.badge.workouts_1000":"1000 entrenamientos","achievements.badge.workouts_250":"250 entrenamientos","achievements.badge.workouts_500":"500 entrenamientos","achievements.category.days":"Días activos","achievements.category.distance":"Distancia","achievements.category.energy":"Energía","achievements.category.fitness":"Nivel de forma física","achievements.category.records":"Récords personales","achievements.category.time":"Tiempo de entrenamiento","achievements.category.variety":"Variedad","achievements.category.workouts":"Entrenamientos registrados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Logros","class.rest":"+{pct}% otras actividades","class.tag":"Enfoque: {activity}","empty.achievements.subtitle":"Registra algunos entrenamientos para empezar a desbloquear insignias.","empty.achievements.title":"Aún no hay logros","empty.class.subtitle":"Registra algunos entrenamientos para revelar tu clase.","empty.class.title":"Aún no hay suficientes datos","empty.level.subtitle":"Tu primer entrenamiento sincronizado inicia el ascenso.","empty.level.title":"Aún no hay datos de por vida","empty.player.subtitle":"Necesita algo de historial de entrenamiento para calcular tus estadísticas.","empty.player.title":"Aún no hay suficientes datos","level.label":"NIVEL","level.source":"{count} entrenamientos registrados","level.subtitle":"Impulsado por tu carga de entrenamiento total","level.title.grinder":"Currante de Resistencia","level.title.legend":"Leyenda Viviente","level.title.novice":"Recluta Novato","level.title.veteran":"Veterano Curtido","level.xp_to_next":"{xp} XP para Nvl {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista en {activity}","player.help.title":"Qué significa esto","player.help.sta":"STA · Resistencia, de tu Forma física (CTL): cuánta carga de entrenamiento constante puedes soportar","player.help.pwr":"PWR · Potencia, de la intensidad media (TSS) de tus sesiones recientes","player.help.rec":"REC · Recuperación, tu puntuación actual de Preparación","player.help.con":"CON · Constancia, entrenamientos registrados en los últimos 30 días","player.help.end":"END · Resistencia aeróbica, de tu VO2max estimado","player.help.frm":"FRM · Forma, de tu balance actual de carga de entrenamiento (TSB)","player.help.disclaimer":"Valores heurísticos calculados con tus propios datos - no es una métrica oficial de Suunto.","player.tier.bronze":"Bronce","player.tier.gold":"Oro","player.tier.legendary":"Legendario","player.tier.silver":"Plata","records.climb":"Mayor subida","records.distance":"Entrenamiento más largo (distancia)","records.pace":"Ritmo más rápido","records.session":"Sesión más dura","records.streak":"Racha más larga","records.streak_days_one":"{count} día","records.streak_days_other":"{count} días","records.workout":"Entrenamiento más largo","class.name.cycling":"Guerrero de Resistencia","class.name.running":"Velocista","class.name.trekking":"Explorador de Senderos","class.name.walking":"Vagabundo","class.name.gym":"Berserker de Fuerza","class.name.swim":"Señor de las Mareas","class.name.ski":"Corredor de Escarcha","class.name.row":"Remero","class.name.other":"Todoterreno","class.flavor.cycling":"Hecho para esfuerzos largos y constantes, no para la velocidad pura. Cualquier otro deporte es entrenamiento complementario.","class.flavor.running":"Rápido de salida y centrado en el ritmo. La distancia es solo un medio para un fin.","class.flavor.trekking":"Como en casa en terreno difícil, cubriendo kilómetros durante horas.","class.flavor.walking":"Los kilómetros constantes y de bajo impacto se acumulan - constancia sobre intensidad.","class.flavor.gym":"Fuerza bruta antes que distancia. Las sesiones de fuerza van primero.","class.flavor.swim":"Resistencia forjada en el agua, brazada a brazada.","class.flavor.ski":"Velocidad y ritmo sobre nieve y frío.","class.flavor.row":"Fuerza rítmica, remada a remada.","class.flavor.other":"Ningún deporte domina - una mezcla verdaderamente equilibrada."},it:{"stat.distance":"Distanza","stat.duration":"Durata","stat.avg_speed":"Vel. media","stat.avg_pace":"Passo medio","stat.avg_hr":"FC media","stat.max_hr":"FC max","stat.training_effect":"Effetto allenamento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensazione","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Allenamenti","stat.steps":"Passi","stat.heart_rate":"Frequenza cardiaca","stat.quality":"Qualità","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC riposo","stat.resting_hr_delta":"FC riposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Livello di stress","stat.recovery_window":"Tempo di recupero","stat.ctl":"CTL · forma","stat.atl":"ATL · affaticamento","stat.tsb":"TSB · forma","stat.readiness":"Prontezza","stat.recovery_balance":"Equilibrio di recupero","stat.training_suggestion":"Suggerimento di oggi","stat.volume":"Volume","stat.intensity":"Intensità","stat.consistency":"Costanza","stat.recovery":"Recupero","stat.variety":"Varietà","card.hr_zones.title":"Zone di Frequenza Cardiaca","card.hr_zones.last_workout":"Ultimo allenamento","card.sleep_readiness.title":"Sonno e Prontezza","card.sleep_readiness.subtitle_no_wake":"{duration} di sonno","card.sleep_readiness.subtitle_with_wake":"{duration} di sonno · sveglia alle {time}","card.recovery.title":"Recupero","card.training_load.title":"Carico di Allenamento","card.training_load.subtitle_fallback":"Andamento forma (CTL)","card.week_stats.title":"Questa Settimana e Totale","card.week_stats.subtitle":"Ultimi 7 giorni","card.week_stats.lifetime_title":"Totale per attività","card.today.title":"Oggi","card.today.subtitle":"In diretta dall'orologio","card.training_status.title":"Stato dell'allenamento","card.training_profile.title":"Profilo di allenamento","card.training_profile.subtitle":"Il tuo allenamento a colpo d'occhio","card.heart_rate.title":"Frequenza cardiaca","empty.last_workout.title":"Nessun allenamento recente","empty.last_workout.subtitle":"Sincronizza l'orologio con l'app Suunto per vederlo qui.","empty.hr_zones.title":"Nessun dato sulle zone","empty.hr_zones.subtitle":"Il tuo prossimo allenamento all'aperto con fascia cardio completerà questi dati.","empty.sleep_readiness.title":"Ancora nessun dato sul sonno","empty.sleep_readiness.subtitle":"Indossa l'orologio per dormire per vederlo qui.","empty.recovery.title":"Ancora nessun dato sul recupero","empty.training_load.title":"Calcolo del carico di allenamento","empty.training_load.subtitle":"Serve un po' di storico allenamenti per calcolarlo - ricontrolla dopo qualche sessione.","empty.week_stats.title":"Ancora nessuno storico allenamenti","empty.today.title":"Ancora nessun dato in tempo reale","empty.training_status.title":"Dati non ancora sufficienti","empty.training_status.subtitle":"Serve un po' di cronologia di allenamento per calcolarlo.","empty.training_profile.title":"Dati non ancora sufficienti","empty.training_profile.subtitle":"Servono più dati dai sensori per calcolare il tuo profilo.","empty.heart_rate.title":"Ancora nessun dato sulla frequenza cardiaca","empty.loading":"Caricamento...","empty.generic_error":"Impossibile caricare i dati Suunto.","error.no_device":"Nessun dispositivo Suunto trovato - l'integrazione suunto_app è configurata?","error.multiple_devices":'Trovati più dispositivi Suunto - imposta "device_id" nella configurazione della scheda.',"error.device_missing":'Il dispositivo configurato "{device}" non ha entità suunto_app.',"band.readiness.great":"Ottima","band.readiness.fair":"Discreta","band.readiness.low":"Bassa","band.recovery.well":"Ben recuperato","band.recovery.partial":"Parzialmente recuperato","band.recovery.low":"Basso recupero","band.recovery.fully":"Completamente recuperato","band.recovery.recovering":"Recupero in corso · {time} rimanenti","band.hrv.low":"HRV bassa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV bilanciata","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Affaticato","band.form.very_fatigued":"Molto affaticato","band.acwr.safe":"Zona sicura","band.acwr.low":"Carico basso","band.acwr.high":"Carico alto - rischio di infortunio","band.suggestion.hard":"Dai il massimo","band.suggestion.moderate":"Sforzo moderato","band.suggestion.easy":"Vacci piano","band.suggestion.rest":"Giorno di riposo","chip.workout_logged_today":"Allenamento registrato oggi","chip.workout_today":"Allenamento oggi","chip.recovering":"In recupero","chip.nap":"{minutes} min di pisolino","chip.nap_earlier":"{minutes} min di pisolino (prima)","chip.workouts_30d":"{count} allenamenti negli ultimi 30 giorni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Punto forte: {strong} · punto debole: {light}","chip.more_activity_one":"+{count} altra attività","chip.more_activity_other":"+{count} altre attività","chip.unusual_recovery":"Recupero insolito","chip.days_since_one":"{count} giorno dall'ultimo allenamento","chip.days_since_other":"{count} giorni dall'ultimo allenamento","achievement.count_one":"{count} traguardo","achievement.count_other":"{count} traguardi","achievement.rank":"Posizione #{rank} su questo percorso","label.zone":"Zona {n}","label.deep":"Profondo","label.light":"Leggero","label.rem":"REM","editor.auto_detect":"Questa scheda rileva automaticamente il tuo dispositivo Suunto - nessuna configurazione necessaria.","editor.pick_device":"Trovati più dispositivi Suunto - scegli quale deve usare questa scheda.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totali di Sempre","card.lifetime.subtitle":"Dall'inizio","stat.active_days":"Giorni attivi","empty.lifetime.title":"Ancora nessun totale","card.recent_workouts.title":"Allenamenti Recenti","empty.recent_workouts.title":"Nessun allenamento recente","card.elevation.title":"Altitudine e Salite","stat.ascent":"Salita","stat.descent":"Discesa","stat.ascent_time":"Tempo salita","stat.descent_time":"Tempo discesa","stat.min_altitude":"Altitudine min.","stat.max_altitude":"Altitudine max.","stat.ascent_rate":"Velocità di salita","empty.elevation.title":"Nessun dato sull'altitudine","empty.elevation.subtitle":"Solo gli allenamenti all'aperto con altimetro registrano questi dati.","card.location.title":"Posizione di Partenza","location.open_in_maps":"Apri in Maps","empty.location.title":"Nessun dato sulla posizione","empty.location.subtitle":"Gli allenamenti al chiuso non hanno un punto di partenza GPS.","card.fitness.title":"Forma Fisica","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max stim.","stat.fitness_age":"Età fisica","fitness.measured":"Misurato {time} · {activity}","empty.fitness.title":"Ancora nessun dato sulla forma fisica","empty.fitness.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","card.pmc.title":"Gestione delle Prestazioni","card.pmc.subtitle":"Andamento di 90 giorni","card.recovery_trends.title":"Tendenze di Recupero","card.recovery_trends.subtitle":"Riferimento di 30 giorni","empty.recovery_trends.title":"Ancora nessun dato sulle tendenze di recupero","card.weekly_volume.title":"Volume Settimanale","card.weekly_volume.subtitle":"Ultime 12 settimane","empty.weekly_volume.title":"Ancora nessun dato sul volume settimanale","stat.average":"Media","stat.total":"Totale","card.hr_curve.title":"Curva della Frequenza Cardiaca","card.hr_curve.subtitle":"Ultime 24 ore","stat.hr_now":"Ora","stat.hr_min":"Min. di oggi","stat.hr_max":"Max. di oggi","empty.hr_curve.title":"Ancora nessun dato di FC in tempo reale","empty.hr_curve.subtitle":"Indossa e sincronizza l'orologio per vedere qui la curva di oggi.","card.sleep_trends.title":"Andamento del Sonno","card.sleep_trends.subtitle":"Ultime 30 notti","empty.sleep_trends.title":"Ancora nessun dato sull'andamento del sonno","card.weekly_goal.title":"Obiettivo Settimanale","card.weekly_goal.subtitle":"{value} di {goal} km","empty.weekly_goal.title":"Ancora nessuna distanza settimanale","editor.goal_label":"Obiettivo settimanale (km)","card.streak.title":"Serie di Attività","card.streak.subtitle":"Ultimi 14 giorni","streak.window_count_one":"{count} giorno attivo","streak.window_count_other":"{count} giorni attivi","streak.days_one":"{count} giorno di serie","streak.days_other":"{count} giorni di serie","streak.none":"Nessuna serie attiva - inizia oggi","empty.streak.title":"Ancora nessuno storico allenamenti","just_finished.title":"Ottimo lavoro!","just_finished.idle.title":"In attesa del tuo prossimo allenamento","just_finished.idle.subtitle":"Questa scheda si attiva appena l'orologio sincronizza un nuovo allenamento.","empty.just_finished.title":"Nessun allenamento recente","card.activity_trends.title":"Andamento dell'Attività","card.activity_trends.subtitle":"Ultimi 14 giorni","empty.activity_trends.title":"Ancora nessun dato sull'andamento dell'attività","card.recovery_balance_trend.title":"Andamento dell'Equilibrio di Recupero","card.recovery_balance_trend.subtitle":"Ultimi 14 giorni","empty.recovery_balance_trend.title":"Ancora nessun dato sull'andamento del recupero","card.readiness_trend.title":"Andamento della Prontezza","card.readiness_trend.subtitle":"Ultimi 30 giorni","empty.readiness_trend.title":"Ancora nessun dato sull'andamento della prontezza","stat.cadence":"Cadenza","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC med. sonno","stat.sleep_min_hr":"FC min. sonno","chip.bedtime":"A letto alle {time}","card.activity_calendar.title":"Calendario delle Attività","card.activity_calendar.subtitle":"Ultime 6 settimane","empty.activity_calendar.title":"Ancora nessuno storico allenamenti","activity_calendar.active_days_one":"{count} giorno attivo","activity_calendar.active_days_other":"{count} giorni attivi","card.workout_comparison.title":"Confronto Allenamenti","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ancora non abbastanza allenamenti simili","empty.workout_comparison.subtitle":"Fai la stessa attività due volte per vedere un confronto.","stat.distance_delta":"Distanza ({delta})","stat.duration_delta":"Durata ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Passo ({delta})","card.milestones.title":"In Numeri","card.milestones.subtitle":"Da quando hai iniziato","empty.milestones.title":"Ancora nessun dato totale","stat.earth_laps":"Giri della Terra","stat.marathons":"Maratone","stat.moon_pct":"% verso la Luna","stat.burgers":"Hamburger","card.athlete_profile.title":"Personalità Sportiva","empty.athlete_profile.title":"Ancora non abbastanza dati","personality.activity.cycling":"Ciclista","personality.activity.running":"Corridore","personality.activity.trekking":"Escursionista","personality.activity.walking":"Camminatore","personality.activity.gym":"Atleta di Forza","personality.activity.swim":"Nuotatore","personality.activity.ski":"Sciatore","personality.activity.row":"Vogatore","personality.activity.other":"Multisportivo","personality.schedule.weekend":"Guerriero del Weekend","personality.schedule.weekday":"Regolare in Settimana","personality.schedule.balanced":"Programma Equilibrato","personality.time.morning":"Mattiniero","personality.time.afternoon":"Attivo di Pomeriggio","personality.time.evening":"Atleta della Sera","personality.time.night":"Nottambulo","card.pace_trend.title":"Andamento del Passo","card.pace_trend.subtitle":"{activity} · ultime {count} sessioni","empty.pace_trend.title":"Ancora non abbastanza allenamenti simili","empty.pace_trend.subtitle":"Fai la stessa attività alcune volte per vedere un andamento.","pace_trend.faster":"In miglioramento","pace_trend.slower":"In rallentamento","pace_trend.steady":"Passo stabile","card.lap_splits.title":"Tempi sul Giro","empty.lap_splits.title":"Nessun dato sui giri","empty.lap_splits.subtitle":"Non tutti gli allenamenti hanno giri - il prossimo che li avrà completerà questi dati.","stat.laps":"Giri","stat.fastest_lap":"Giro più veloce","label.lap":"Giro {n}","card.training_effect_trend.title":"Andamento dell'Effetto Allenamento","empty.training_effect_trend.title":"Ancora nessun dato sull'effetto allenamento","achievements.badge.around_globe":"Giro del mondo","achievements.badge.century_club":"Club del Centinaio - 100 allenamenti","achievements.badge.consistency_king":"Re della Costanza - serie di 14 giorni","achievements.badge.days_100":"100 giorni attivi","achievements.badge.distance_1000":"Club dei 1000 km","achievements.badge.distance_5000":"Club dei 5000 km","achievements.badge.elite_engine":"Motore d'élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal bruciate","achievements.badge.energy_1m":"1.000.000 kcal bruciate","achievements.badge.full_year":"Attivo tutto l'anno","achievements.badge.hours_100":"100 ore","achievements.badge.hours_500":"500 ore","achievements.badge.jack_of_all_trades":"Tuttofare - 5+ sport","achievements.badge.multi_sport":"Atleta multisport - 3+ sport","achievements.badge.solid_engine":"Motore solido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ allenamenti","achievements.badge.workouts_1000":"1000 allenamenti","achievements.badge.workouts_250":"250 allenamenti","achievements.badge.workouts_500":"500 allenamenti","achievements.category.days":"Giorni attivi","achievements.category.distance":"Distanza","achievements.category.energy":"Energia","achievements.category.fitness":"Livello di forma","achievements.category.records":"Record personali","achievements.category.time":"Tempo di allenamento","achievements.category.variety":"Varietà","achievements.category.workouts":"Allenamenti registrati","card.achievements.subtitle":"{unlocked} di {total} sbloccati","card.achievements.title":"Obiettivi","class.rest":"+{pct}% altre attività","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registra qualche allenamento per iniziare a sbloccare i badge.","empty.achievements.title":"Ancora nessun obiettivo","empty.class.subtitle":"Registra qualche allenamento per rivelare la tua classe.","empty.class.title":"Dati ancora insufficienti","empty.level.subtitle":"Il tuo primo allenamento sincronizzato avvia la scalata.","empty.level.title":"Ancora nessun dato complessivo","empty.player.subtitle":"Serve un po' di storico allenamenti per calcolare le tue statistiche.","empty.player.title":"Dati ancora insufficienti","level.label":"LIVELLO","level.source":"{count} allenamenti registrati","level.subtitle":"Alimentato dal tuo carico di allenamento complessivo","level.title.grinder":"Instancabile di Resistenza","level.title.legend":"Leggenda Vivente","level.title.novice":"Recluta Fresca","level.title.veteran":"Veterano Navigato","level.xp_to_next":"{xp} XP al Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"Specialista {activity}","player.help.title":"Cosa significano","player.help.sta":"STA · Resistenza, dalla tua Forma (CTL): quanto carico di allenamento costante riesci a sostenere","player.help.pwr":"PWR · Potenza, dall'intensità media (TSS) delle tue sessioni recenti","player.help.rec":"REC · Recupero, il tuo punteggio attuale di Prontezza","player.help.con":"CON · Costanza, allenamenti registrati negli ultimi 30 giorni","player.help.end":"END · Resistenza, dal tuo VO2max stimato","player.help.frm":"FRM · Forma, dal tuo bilancio attuale di carico di allenamento (TSB)","player.help.disclaimer":"Valori euristici calcolati dai tuoi dati - non una metrica ufficiale Suunto.","player.tier.bronze":"Bronzo","player.tier.gold":"Oro","player.tier.legendary":"Leggendario","player.tier.silver":"Argento","records.climb":"Salita più impegnativa","records.distance":"Allenamento più lungo (distanza)","records.pace":"Ritmo più veloce","records.session":"Sessione più dura","records.streak":"Serie più lunga","records.streak_days_one":"{count} giorno","records.streak_days_other":"{count} giorni","records.workout":"Allenamento più lungo","class.name.cycling":"Guerriero della Resistenza","class.name.running":"Velocista","class.name.trekking":"Esploratore di Sentieri","class.name.walking":"Vagabondo","class.name.gym":"Berserker della Forza","class.name.swim":"Signore delle Maree","class.name.ski":"Corridore del Gelo","class.name.row":"Vogatore","class.name.other":"Tuttofare","class.flavor.cycling":"Costruito per sforzi lunghi e costanti, non per la velocità pura. Ogni altro sport è allenamento complementare.","class.flavor.running":"Scatto rapido e concentrato sul ritmo. La distanza è solo un mezzo.","class.flavor.trekking":"A suo agio su terreni difficili, macinando chilometri per ore.","class.flavor.walking":"Chilometri costanti e a basso impatto che si accumulano - la costanza prima dell'intensità.","class.flavor.gym":"Forza bruta prima della distanza. Le sessioni di forza vengono prima di tutto.","class.flavor.swim":"Resistenza forgiata in acqua, bracciata dopo bracciata.","class.flavor.ski":"Velocità e ritmo su neve e freddo.","class.flavor.row":"Forza ritmica, colpo dopo colpo.","class.flavor.other":"Nessuno sport domina - un mix davvero equilibrato."},nl:{"stat.distance":"Afstand","stat.duration":"Duur","stat.avg_speed":"Gem. snelheid","stat.avg_pace":"Gem. tempo","stat.avg_hr":"Gem. hartslag","stat.max_hr":"Max. hartslag","stat.training_effect":"Trainingseffect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gevoel","stat.energy":"Energie","stat.time":"Tijd","stat.workouts":"Work-outs","stat.steps":"Stappen","stat.heart_rate":"Hartslag","stat.quality":"Kwaliteit","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Rustpols","stat.resting_hr_delta":"Rustpols ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stressniveau","stat.recovery_window":"Hersteltijd","stat.ctl":"CTL · fitheid","stat.atl":"ATL · vermoeidheid","stat.tsb":"TSB · vorm","stat.readiness":"Gereedheid","stat.recovery_balance":"Herstelbalans","stat.training_suggestion":"Advies voor vandaag","stat.volume":"Volume","stat.intensity":"Intensiteit","stat.consistency":"Consistentie","stat.recovery":"Herstel","stat.variety":"Variatie","card.hr_zones.title":"Hartslagzones","card.hr_zones.last_workout":"Laatste training","card.sleep_readiness.title":"Slaap & Gereedheid","card.sleep_readiness.subtitle_no_wake":"{duration} geslapen","card.sleep_readiness.subtitle_with_wake":"{duration} geslapen · wakker om {time}","card.recovery.title":"Herstel","card.training_load.title":"Trainingsbelasting","card.training_load.subtitle_fallback":"Fitheidstrend (CTL)","card.week_stats.title":"Deze Week & Totaal","card.week_stats.subtitle":"Laatste 7 dagen","card.week_stats.lifetime_title":"Totaal per activiteit","card.today.title":"Vandaag","card.today.subtitle":"Live vanaf je horloge","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofiel","card.training_profile.subtitle":"Jouw training in één oogopslag","card.heart_rate.title":"Hartslag","empty.last_workout.title":"Geen recente training","empty.last_workout.subtitle":"Synchroniseer je horloge met de Suunto-app om het hier te zien.","empty.hr_zones.title":"Geen zonegegevens","empty.hr_zones.subtitle":"Je volgende buitentraining met hartslagband vult dit aan.","empty.sleep_readiness.title":"Nog geen slaapgegevens","empty.sleep_readiness.subtitle":"Draag je horloge tijdens het slapen om dit hier te zien.","empty.recovery.title":"Nog geen herstelgegevens","empty.training_load.title":"Trainingsbelasting wordt berekend","empty.training_load.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen - kijk later nog eens na een paar trainingen.","empty.week_stats.title":"Nog geen traininggeschiedenis","empty.today.title":"Nog geen live gegevens","empty.training_status.title":"Nog niet genoeg gegevens","empty.training_status.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen.","empty.training_profile.title":"Nog niet genoeg gegevens","empty.training_profile.subtitle":"Heeft meer sensorgegevens nodig om je profiel te berekenen.","empty.heart_rate.title":"Nog geen hartslaggegevens","empty.loading":"Laden...","empty.generic_error":"Suunto-gegevens konden niet worden geladen.","error.no_device":"Geen Suunto-apparaat gevonden - is de suunto_app-integratie ingesteld?","error.multiple_devices":'Meerdere Suunto-apparaten gevonden - stel "device_id" in de kaartconfiguratie in.',"error.device_missing":'Geconfigureerd apparaat "{device}" heeft geen suunto_app-entiteiten.',"band.readiness.great":"Uitstekend","band.readiness.fair":"Redelijk","band.readiness.low":"Laag","band.recovery.well":"Goed hersteld","band.recovery.partial":"Gedeeltelijk hersteld","band.recovery.low":"Laag herstel","band.recovery.fully":"Volledig hersteld","band.recovery.recovering":"Aan het herstellen · {time} resterend","band.hrv.low":"HRV laag","band.hrv.high":"HRV hoog","band.hrv.balanced":"HRV in balans","band.form.fresh":"Fris","band.form.neutral":"Neutraal","band.form.fatigued":"Vermoeid","band.form.very_fatigued":"Erg vermoeid","band.acwr.safe":"Veilige zone","band.acwr.low":"Lage belasting","band.acwr.high":"Hoge belasting - blessurerisico","band.suggestion.hard":"Ga ervoor","band.suggestion.moderate":"Gematigde inspanning","band.suggestion.easy":"Rustig aan","band.suggestion.rest":"Rustdag","chip.workout_logged_today":"Training vandaag geregistreerd","chip.workout_today":"Training vandaag","chip.recovering":"Herstellen","chip.nap":"{minutes} min dutje","chip.nap_earlier":"{minutes} min dutje (eerder)","chip.workouts_30d":"{count} trainingen in de laatste 30 dagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Sterkst in {strong} · zwakst in {light}","chip.more_activity_one":"+{count} andere activiteit","chip.more_activity_other":"+{count} andere activiteiten","chip.unusual_recovery":"Afwijkend herstel","chip.days_since_one":"{count} dag sinds laatste training","chip.days_since_other":"{count} dagen sinds laatste training","achievement.count_one":"{count} prestatie","achievement.count_other":"{count} prestaties","achievement.rank":"Positie #{rank} op deze route","label.zone":"Zone {n}","label.deep":"Diep","label.light":"Licht","label.rem":"REM","editor.auto_detect":"Deze kaart detecteert automatisch je Suunto-apparaat - geen configuratie nodig.","editor.pick_device":"Meerdere Suunto-apparaten gevonden - kies welke deze kaart moet gebruiken.","editor.device_label":"Suunto-apparaat","card.lifetime.title":"Totalen Aller Tijden","card.lifetime.subtitle":"Sinds het begin","stat.active_days":"Actieve dagen","empty.lifetime.title":"Nog geen totalen","card.recent_workouts.title":"Recente Trainingen","empty.recent_workouts.title":"Geen recente trainingen","card.elevation.title":"Hoogtemeters & Klimmen","stat.ascent":"Stijging","stat.descent":"Daling","stat.ascent_time":"Stijgtijd","stat.descent_time":"Daaltijd","stat.min_altitude":"Min. hoogte","stat.max_altitude":"Max. hoogte","stat.ascent_rate":"Stijgsnelheid","empty.elevation.title":"Geen hoogtegegevens","empty.elevation.subtitle":"Alleen buitentrainingen met een barometer registreren dit.","card.location.title":"Startlocatie","location.open_in_maps":"Openen in Maps","empty.location.title":"Geen locatiegegevens","empty.location.subtitle":"Binnentrainingen hebben geen GPS-startpunt.","card.fitness.title":"Fitheid","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitheidsleeftijd","fitness.measured":"Gemeten {time} · {activity}","empty.fitness.title":"Nog geen fitheidsgegevens","empty.fitness.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","card.pmc.title":"Prestatiebeheer","card.pmc.subtitle":"90-dagen trend","card.recovery_trends.title":"Hersteltrends","card.recovery_trends.subtitle":"30-dagen basiswaarde","empty.recovery_trends.title":"Nog geen hersteltrendgegevens","card.weekly_volume.title":"Wekelijks Volume","card.weekly_volume.subtitle":"Laatste 12 weken","empty.weekly_volume.title":"Nog geen gegevens over wekelijks volume","stat.average":"Gemiddeld","stat.total":"Totaal","card.hr_curve.title":"Hartslagcurve","card.hr_curve.subtitle":"Laatste 24 uur","stat.hr_now":"Nu","stat.hr_min":"Min. vandaag","stat.hr_max":"Max. vandaag","empty.hr_curve.title":"Nog geen live hartslaggegevens","empty.hr_curve.subtitle":"Draag en synchroniseer je horloge om de curve van vandaag hier te zien.","card.sleep_trends.title":"Slaaptrends","card.sleep_trends.subtitle":"Laatste 30 nachten","empty.sleep_trends.title":"Nog geen slaaptrendgegevens","card.weekly_goal.title":"Weekdoel","card.weekly_goal.subtitle":"{value} van {goal} km","empty.weekly_goal.title":"Nog geen wekelijkse afstand","editor.goal_label":"Weekdoel (km)","card.streak.title":"Activiteitenreeks","card.streak.subtitle":"Laatste 14 dagen","streak.window_count_one":"{count} actieve dag","streak.window_count_other":"{count} actieve dagen","streak.days_one":"{count} dag op rij","streak.days_other":"{count} dagen op rij","streak.none":"Geen actieve reeks - kom vandaag in beweging","empty.streak.title":"Nog geen traininggeschiedenis","just_finished.title":"Goed gedaan!","just_finished.idle.title":"Wachten op je volgende training","just_finished.idle.subtitle":"Deze kaart licht op zodra je horloge een nieuwe training synchroniseert.","empty.just_finished.title":"Geen recente training","card.activity_trends.title":"Activiteitstrends","card.activity_trends.subtitle":"Laatste 14 dagen","empty.activity_trends.title":"Nog geen activiteitstrendgegevens","card.recovery_balance_trend.title":"Herstelbalanstrend","card.recovery_balance_trend.subtitle":"Laatste 14 dagen","empty.recovery_balance_trend.title":"Nog geen hersteltrendgegevens","card.readiness_trend.title":"Gereedheidstrend","card.readiness_trend.subtitle":"Laatste 30 dagen","empty.readiness_trend.title":"Nog geen gereedheidstrendgegevens","stat.cadence":"Cadans","stat.pct_hrmax":"% van max. hartslag","stat.sleep_avg_hr":"Gem. slaappols","stat.sleep_min_hr":"Min. slaappols","chip.bedtime":"Naar bed {time}","card.activity_calendar.title":"Activiteitenkalender","card.activity_calendar.subtitle":"Laatste 6 weken","empty.activity_calendar.title":"Nog geen traininggeschiedenis","activity_calendar.active_days_one":"{count} actieve dag","activity_calendar.active_days_other":"{count} actieve dagen","card.workout_comparison.title":"Trainingsvergelijking","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Nog niet genoeg vergelijkbare trainingen","empty.workout_comparison.subtitle":"Doe dezelfde activiteit twee keer om een vergelijking te zien.","stat.distance_delta":"Afstand ({delta})","stat.duration_delta":"Duur ({delta})","stat.avg_hr_delta":"Gem. hartslag ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"In Cijfers","card.milestones.subtitle":"Sinds je begon","empty.milestones.title":"Nog geen totaalgegevens","stat.earth_laps":"Rondjes om de aarde","stat.marathons":"Marathons","stat.moon_pct":"% naar de maan","stat.burgers":"Hamburgers","card.athlete_profile.title":"Trainingspersoonlijkheid","empty.athlete_profile.title":"Nog niet genoeg gegevens","personality.activity.cycling":"Fietser","personality.activity.running":"Hardloper","personality.activity.trekking":"Wandelaar","personality.activity.walking":"Loper","personality.activity.gym":"Krachtsporter","personality.activity.swim":"Zwemmer","personality.activity.ski":"Skiër","personality.activity.row":"Roeier","personality.activity.other":"Multisporter","personality.schedule.weekend":"Weekendkrijger","personality.schedule.weekday":"Doordeweekse Sporter","personality.schedule.balanced":"Gebalanceerd Schema","personality.time.morning":"Vroege Vogel","personality.time.afternoon":"Middagsporter","personality.time.evening":"Avondsporter","personality.time.night":"Nachtuil","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · laatste {count} sessies","empty.pace_trend.title":"Nog niet genoeg vergelijkbare trainingen","empty.pace_trend.subtitle":"Doe dezelfde activiteit een paar keer om een trend te zien.","pace_trend.faster":"Wordt sneller","pace_trend.slower":"Wordt langzamer","pace_trend.steady":"Stabiel tempo","card.lap_splits.title":"Rondetijden","empty.lap_splits.title":"Geen rondegegevens","empty.lap_splits.subtitle":"Niet elke training heeft ronden - de volgende met ronden vult dit aan.","stat.laps":"Ronden","stat.fastest_lap":"Snelste ronde","label.lap":"Ronde {n}","card.training_effect_trend.title":"Trainingseffecttrend","empty.training_effect_trend.title":"Nog geen trainingseffectgegevens","achievements.badge.around_globe":"Rond de wereld","achievements.badge.century_club":"Eeuwclub - 100 trainingen","achievements.badge.consistency_king":"Koning van Consistentie - reeks van 14 dagen","achievements.badge.days_100":"100 actieve dagen","achievements.badge.distance_1000":"1000 km-club","achievements.badge.distance_5000":"5000 km-club","achievements.badge.elite_engine":"Elitemotor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrand","achievements.badge.energy_1m":"1.000.000 kcal verbrand","achievements.badge.full_year":"Heel het jaar actief","achievements.badge.hours_100":"100 uur","achievements.badge.hours_500":"500 uur","achievements.badge.jack_of_all_trades":"Manusje-van-alles - 5+ sporten","achievements.badge.multi_sport":"Multisportatleet - 3+ sporten","achievements.badge.solid_engine":"Solide motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ trainingen","achievements.badge.workouts_1000":"1000 trainingen","achievements.badge.workouts_250":"250 trainingen","achievements.badge.workouts_500":"500 trainingen","achievements.category.days":"Actieve dagen","achievements.category.distance":"Afstand","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnessniveau","achievements.category.records":"Persoonlijke records","achievements.category.time":"Trainingstijd","achievements.category.variety":"Variatie","achievements.category.workouts":"Geregistreerde trainingen","card.achievements.subtitle":"{unlocked} van {total} ontgrendeld","card.achievements.title":"Prestaties","class.rest":"+{pct}% andere activiteiten","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registreer een paar trainingen om badges te ontgrendelen.","empty.achievements.title":"Nog geen prestaties","empty.class.subtitle":"Registreer een paar trainingen om je klasse te onthullen.","empty.class.title":"Nog niet genoeg gegevens","empty.level.subtitle":"Je eerste gesynchroniseerde training start de klim.","empty.level.title":"Nog geen totaalgegevens","empty.player.subtitle":"Heeft wat trainingsgeschiedenis nodig om je stats te berekenen.","empty.player.title":"Nog niet genoeg gegevens","level.label":"NIVEAU","level.source":"{count} trainingen geregistreerd","level.subtitle":"Aangedreven door je totale trainingsbelasting","level.title.grinder":"Uithoudingswerker","level.title.legend":"Levende Legende","level.title.novice":"Verse Rekruut","level.title.veteran":"Doorgewinterde Veteraan","level.xp_to_next":"{xp} XP tot Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-specialist","player.help.title":"Wat dit betekent","player.help.sta":"STA · Uithoudingsvermogen, uit je Fitheid (CTL): hoeveel gestage trainingsbelasting je aankunt","player.help.pwr":"PWR · Kracht, uit de gemiddelde intensiteit (TSS) van je recente trainingen","player.help.rec":"REC · Herstel, je huidige Readiness-score","player.help.con":"CON · Consistentie, trainingen van de afgelopen 30 dagen","player.help.end":"END · Uithoudingsvermogen, uit je geschatte VO2max","player.help.frm":"FRM · Vorm, uit je huidige trainingsbelastingsbalans (TSB)","player.help.disclaimer":"Heuristische waarden berekend uit je eigen data - geen officiële Suunto-metriek.","player.tier.bronze":"Brons","player.tier.gold":"Goud","player.tier.legendary":"Legendarisch","player.tier.silver":"Zilver","records.climb":"Grootste klim","records.distance":"Verste training","records.pace":"Snelste tempo","records.session":"Zwaarste sessie","records.streak":"Langste reeks","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dagen","records.workout":"Langste training","class.name.cycling":"Uithoudingskrijger","class.name.running":"Sprinter","class.name.trekking":"Padvinder","class.name.walking":"Zwerver","class.name.gym":"Krachtberserker","class.name.swim":"Getijroeper","class.name.ski":"Vorstloper","class.name.row":"Roeier","class.name.other":"Manusje-van-alles","class.flavor.cycling":"Gemaakt voor lange, gestage inspanningen in plaats van pure snelheid. Elke andere sport is aanvullende training.","class.flavor.running":"Snel weg en gericht op tempo. Afstand is slechts een middel.","class.flavor.trekking":"Thuis op ruig terrein, uren achtereen kilometers makend.","class.flavor.walking":"Gestage, schokvrije kilometers tellen op - consistentie boven intensiteit.","class.flavor.gym":"Rauwe kracht boven afstand. Krachttraining staat voorop.","class.flavor.swim":"Uithoudingsvermogen gesmeed in het water, slag voor slag.","class.flavor.ski":"Snelheid en ritme op sneeuw en kou.","class.flavor.row":"Ritmische kracht, haal voor haal.","class.flavor.other":"Geen enkele sport domineert - een echt evenwichtige mix."}};function Se(e,t,a){let i=function(e){const t=e?.language??"en",a=t.split("-")[0]?.toLowerCase();return ze[a]??$e}(e)[t]??$e[t];if(a)for(const[e,t]of Object.entries(a))i=i.replace(`{${e}}`,String(t));return i}function Ae(e,t,a,i,s){return Se(e,1===t?a:i,{count:t,...s})}let Ce=class extends le{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return K;return we(this.hass).length<=1?W`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`:W`
      <ha-device-picker
        .hass=${this.hass}
        .value=${this._config.device_id??""}
        .label=${Se(this.hass,"editor.device_label")}
        .includeDeviceClasses=${void 0}
        @value-changed=${this._deviceChanged}
      ></ha-device-picker>
      <div class="hint">${Se(this.hass,"editor.pick_device")}</div>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value,a={...this._config,device_id:t||void 0};_e(this,"config-changed",{config:a})}};Ce.styles=n`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
  `,e([me({attribute:!1})],Ce.prototype,"hass",void 0),e([ve()],Ce.prototype,"_config",void 0),Ce=e([ue("suunto-device-editor")],Ce);class Te extends le{_syncTheme(){this.classList.toggle("dark",Boolean(this.hass?.themes?.darkMode))}_resolveEntities(){if(!this.hass)return{error:this._message("mdi:alert-circle-outline",Se(this.hass,"empty.loading"))};try{const e=ke(this.hass,this._configuredDeviceId);return{map:xe(this.hass,e)}}catch(e){return{error:this._message("mdi:alert-circle-outline",this._configErrorMessage(e))}}}_configErrorMessage(e){return e instanceof be?"device_missing"===e.code?Se(this.hass,"error.device_missing",{device:e.deviceId??""}):"multiple_devices"===e.code?Se(this.hass,"error.multiple_devices"):Se(this.hass,"error.no_device"):Se(this.hass,"empty.generic_error")}_message(e,t,a){return W`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${e}></ha-icon>
          <div class="t1">${t}</div>
          ${a?W`<div class="t2">${a}</div>`:K}
        </div>
      </ha-card>
    `}}e([me({attribute:!1})],Te.prototype,"hass",void 0);const Ee=n`
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
`,je=n`
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
`;function Ne(e){return W`
    <div class="bar">
      ${e.map(e=>W`<div
            class="seg"
            style="flex-grow:${e.flexGrow};background:${e.colorVar}"
            title=${e.title??""}
          ></div>`)}
    </div>
  `}function Re(e,t,a=64,i=6){const s=Math.max(0,Math.min(100,e)),r=(a-i)/2,n=2*Math.PI*r,o=a/2;return W`
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
        stroke=${t}
        stroke-width=${i}
        stroke-linecap="round"
        stroke-dasharray=${n}
        stroke-dashoffset=${n-s/100*n}
        transform="rotate(-90 ${o} ${o})"
      ></circle>
    </svg>
  `}function Me(e,t,a=300,i=56){if(e.length<2)return K;const s=e.map(e=>e.v),r=Math.min(...s),n=Math.max(...s)-r||1,o=.12*i,c=i-2*o,l=a/(e.length-1),d=e.map((e,t)=>[t*l,o+c-(e.v-r)/n*c]),u=d.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),p=`${u} L${a},${i} L0,${i} Z`,[h,m]=d[d.length-1];return W`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${p} fill=${t} fill-opacity="0.14" stroke="none"></path>
      <path d=${u} fill="none" stroke=${t} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${h} cy=${m} r="3" fill=${t}></circle>
    </svg>
  `}function Ve(e){const t=e.map(e=>e.v),a=Math.min(...t);return{min:a,span:Math.max(...t)-a||1}}function De(e,t=300,a=70,i=!0){const s=e.filter(e=>e.points.length>=2);if(0===s.length)return K;const r=.1*a,n=a-2*r,o=i?Ve(s.flatMap(e=>e.points)):void 0,c=s.map(e=>{const{min:a,span:i}=o??Ve(e.points),s=t/(e.points.length-1),c=e.points.map((e,t)=>[t*s,r+n-(e.v-a)/i*n]),l=c.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),[d,u]=c[c.length-1];return G`
      <path
        d=${l}
        fill="none"
        stroke=${e.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${d} cy=${u} r="3" fill=${e.colorVar}></circle>
    `});return W`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="none" class="sparkline">
      ${c}
    </svg>
  `}function Fe(e,t,a=300,i=70){if(0===e.length)return K;const s=Math.max(...e.map(e=>e.value),1e-4),r=(a-4*(e.length-1))/e.length,n=e.map((e,a)=>{const n=Math.max(e.value/s*i,2);return G`
      <rect x=${a*(r+4)} y=${i-n} width=${r} height=${n} rx="2" fill=${e.colorVar??t}>
        <title>${e.label??e.value}</title>
      </rect>
    `});return W`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      ${n}
    </svg>
  `}const Pe=new Set(["unknown","unavailable",""]);let He=class extends Te{static getConfigElement(){return document.createElement("suunto-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-goal-card",goal_km:50}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||Pe.has(i.state))return this._message("mdi:target",Se(a,"empty.weekly_goal.title"));const r=this._config.goal_km??50,n=Number(i.state),o=r>0?n/r*100:0,c=o>=100?"var(--sc-good)":"var(--sc-amber)";return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.weekly_goal.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.weekly_goal.subtitle",{value:n.toFixed(1),goal:r.toFixed(0)})}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${Re(o,c,64,7)}
            <div class="ring-value" style="color:${c}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};He.styles=[Ee,je,n`
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
    `],e([ve()],He.prototype,"_config",void 0),He=e([ue("suunto-weekly-goal-card")],He);let Le=class extends le{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return K;const e=we(this.hass);return W`
      ${e.length>1?W`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:W`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${Se(this.hass,"editor.goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1"
          .value=${String(this._config.goal_km??50)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_goalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_km:a})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};Le.styles=n`
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
  `,e([me({attribute:!1})],Le.prototype,"hass",void 0),e([ve()],Le.prototype,"_config",void 0),Le=e([ue("suunto-goal-editor")],Le);const Oe=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function qe(e){if(e)for(const[t,a]of Oe)if(t.test(e))return a;return"mdi:run-fast"}const Be={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};async function We(e,t,a,i="mean"){const s=new Date,r=new Date(s.getTime()-36e5*a),n=await e.callWS({type:"recorder/statistics_during_period",start_time:r.toISOString(),end_time:s.toISOString(),statistic_ids:[t],period:"hour",types:["mean","min","max","sum"]});return(n?.[t]??[]).map(e=>({t:e.start,v:Number(e[i])})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v))}function Ge(e){const t=[...e].sort((e,t)=>e.t-t.t),a=new Map;for(let e=1;e<t.length;e++){const i=t[e].v-t[e-1].v;if(!Number.isFinite(i)||i<0)continue;const s=new Date(t[e].t).toDateString();a.set(s,(a.get(s)??0)+i)}return[...a.entries()].map(([e,t])=>({t:new Date(e).getTime(),v:t})).sort((e,t)=>e.t-t.t)}function Ie(e){const t=new Map;for(const a of e){const e=new Date(a.t).toDateString(),i=t.get(e)??{sum:0,count:0};i.sum+=a.v,i.count+=1,t.set(e,i)}return[...t.entries()].map(([e,{sum:t,count:a}])=>({t:new Date(e).getTime(),v:t/a})).sort((e,t)=>e.t-t.t)}function Ke(e){if(e>=60){const t=Math.floor(e/60),a=Math.round(e%60);return{value:`${t}:${String(a).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(e)),unit:"min"}}function Ue(e){const t=Math.round(60*e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ze(e,t){return new Intl.DateTimeFormat(t,{hour:"numeric",minute:"2-digit"}).format(e)}function Xe(e,t=0){const a=Number(e.toFixed(t));return 0===a?"±0":a>0?`+${a}`:String(a)}const Je=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function Qe(e,t){const a=(e.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(const[e,t]of Je)if(Math.abs(a)>=t)return i.format(Math.round(a/t),e);return i.format(Math.round(a/60),"minute")}const Ye=new Set(["unknown","unavailable",""]);let et=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity");if(!s||Ye.has(s.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"),Se(a,"empty.last_workout.subtitle"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_max_hr"),d=i("last_avg_pace"),u=i("last_avg_speed"),p=i("last_pte"),h=i("last_epoc"),m=i("last_feeling"),v=i("last_tss"),g=i("last_cal_per_km"),y=i("last_cadence"),_=i("last_pct_hrmax"),f=i("last_workout_weather"),b=i("last_workout_tags"),w=i("last_workout_achievements"),k=o?Ke(Number(o.state)):void 0,x=void 0===d&&void 0!==u,$=m&&!Ye.has(m.state)?Number(m.state):void 0,z=p&&!Ye.has(p.state)?Number(p.state):void 0,S=w?Number(w.state):0;return W`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${qe(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">
              ${r?W`${Qe(new Date(r.state),a.language)} ·
                  ${Ze(new Date(r.state),a.language)}`:""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${n?this._stat((Number(n.state)/1e3).toFixed(1),"km",Se(a,"stat.distance")):K}
          ${k?this._stat(k.value,k.unit,Se(a,"stat.duration")):K}
          ${d?this._stat(Ue(Number(d.state)),"/km",Se(a,"stat.avg_pace")):x?this._stat(Number(u.state).toFixed(1),"km/h",Se(a,"stat.avg_speed")):K}
          ${c?this._stat(String(Math.round(Number(c.state))),"bpm",Se(a,"stat.avg_hr"),!0):K}
          ${l?this._stat(String(Math.round(Number(l.state))),"bpm",Se(a,"stat.max_hr"),!0):K}
          ${void 0!==z?W`
                <div class="stat">
                  <div class="stat-value">${z.toFixed(1)}</div>
                  <div class="stat-label">${Se(a,"stat.training_effect")}</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(e=>W`<i class=${e<=Math.round(z)?`on s${e}`:""}></i>`)}
                  </div>
                </div>
              `:K}
        </div>

        ${v||h||void 0!==$||g||y||_?W`
              <hr />
              <div class="secondary">
                ${v?this._secondary(String(Math.round(Number(v.state))),Se(a,"stat.tss")):K}
                ${h?this._secondary(Number(h.state).toFixed(1),Se(a,"stat.epoc")):K}
                ${void 0!==$?W`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(e=>W`<i class=${e<=$?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">${Se(a,"stat.feeling")}</div>
                      </div>
                    `:K}
                ${g?this._secondary(`${Math.round(Number(g.state))}`,Se(a,"stat.energy"),"kcal/km"):K}
                ${y?this._secondary(String(Math.round(Number(y.state))),Se(a,"stat.cadence"),"rpm"):K}
                ${_?this._secondary(String(Math.round(Number(_.state))),Se(a,"stat.pct_hrmax"),"%"):K}
              </div>
            `:K}
        ${f&&!Ye.has(f.state)?W`
              <div class="weather">
                <ha-icon .icon=${function(e){const t=e?.slice(0,2);return t&&Be[t]||"mdi:weather-cloudy"}(f.attributes.icon_code)}></ha-icon>
                <strong>${f.state}°C</strong>
                ${f.attributes.condition?W`<span class="sep">·</span><span class="cond">${f.attributes.condition}</span>`:K}
                ${void 0!==f.attributes.wind_speed_kmh?W`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(f.attributes.wind_speed_kmh)} km/h</span>
                    `:K}
              </div>
            `:K}
        ${b&&!Ye.has(b.state)||S>0?W`
              <div class="footer">
                ${b&&!Ye.has(b.state)?W`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${b.state}</span>`:K}
                ${S>0?W`
                      <span
                        class="chip accent"
                        title=${w?.attributes.route_ranking?Se(a,"achievement.rank",{rank:w.attributes.route_ranking}):""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${function(e,t,a){if(Array.isArray(t)&&t.length){const e=t[0];if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e,a=t.name??t.title??t.type;if("string"==typeof a)return a}}return Ae(e,a,"achievement.count_one","achievement.count_other")}(a,w?.attributes.achievements,S)}
                      </span>
                    `:K}
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a,i=!1){return W`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}_secondary(e,t,a){return W`
      <div class="sec-item">
        <div class="sec-value">${e}${a?W` <span class="sec-unit">${a}</span>`:K}</div>
        <div class="sec-label">${t}</div>
      </div>
    `}_openMoreInfo(e){e&&_e(this,"hass-more-info",{entityId:e})}};et.styles=[Ee,je,n`
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
    `],e([ve()],et.prototype,"_config",void 0),et=e([ue("suunto-last-workout-card")],et);const tt=e=>`var(--sc-zone-${e})`;let at=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=[];for(let e=0;e<=5;e++){const s=t[`last_zone${e}`],r=s?a.states[s]:void 0;r&&!Number.isNaN(Number(r.state))&&i.push({n:e,minutes:Number(r.state),lower:r.attributes.lower_limit_bpm,upper:r.attributes.upper_limit_bpm})}const s=i.reduce((e,t)=>e+t.minutes,0);if(0===i.length||s<=0)return this._message("mdi:heart-pulse",Se(a,"empty.hr_zones.title"),Se(a,"empty.hr_zones.subtitle"));const r=t.last_workout_start,n=r?a.states[r]:void 0,o=Se(a,"card.hr_zones.last_workout");return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_zones.title")}</div>
            <div class="subtitle">
              ${n?`${o} · ${Qe(new Date(n.state),a.language)}`:o}
            </div>
          </div>
        </div>

        ${Ne(i.map(e=>({flexGrow:e.minutes,colorVar:tt(e.n),title:Se(a,"label.zone",{n:e.n})})))}

        <div class="rows">
          ${i.map(e=>{const t=Ke(e.minutes),i=Math.round(e.minutes/s*100);return W`
              <div class="row">
                <i class="dot" style="background:${tt(e.n)}"></i>
                <span class="zone-label">${Se(a,"label.zone",{n:e.n})}</span>
                <span class="bpm">${r=e.lower,n=e.upper,void 0!==r&&void 0!==n?`${r}-${n} bpm`:void 0!==r?`${r}+ bpm`:void 0!==n?`<${n} bpm`:""}</span>
                <span class="time">${t.value} ${t.unit}</span>
                <span class="pct">${i}%</span>
              </div>
            `;var r,n})}
        </div>
      </ha-card>
    `}};at.styles=[Ee,je,n`
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
    `],e([ve()],at.prototype,"_config",void 0),at=e([ue("suunto-hr-zones-card")],at);const it=new Set(["unknown","unavailable",""]);let st=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||it.has(s.state))return this._message("mdi:sleep",Se(a,"empty.sleep_readiness.title"),Se(a,"empty.sleep_readiness.subtitle"));const r=i("wake_time"),n=i("sleep_deep"),o=i("sleep_light"),c=i("sleep_rem"),l=i("sleep_quality"),d=i("sleep_spo2"),u=i("sleep_hrv"),p=i("hrv_baseline"),h=i("hrv_status"),m=i("resting_hr"),v=i("resting_hr_baseline"),g=i("readiness"),y=i("nap_duration"),_=i("sleep_avg_hr"),f=i("sleep_min_hr"),b=i("sleep_time"),w=i("unusual_recovery"),k=g&&!it.has(g.state)?Number(g.state):void 0,x=void 0!==k?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,k):void 0,$=u&&p&&!it.has(p.state)?Number(u.state)-Number(p.state):void 0,z=m&&v&&!it.has(v.state)?Number(m.state)-Number(v.state):void 0,S=[n&&!it.has(n.state)?{flexGrow:Number(n.state),colorVar:"var(--sc-sleep-deep)",title:Se(a,"label.deep")}:void 0,o&&!it.has(o.state)?{flexGrow:Number(o.state),colorVar:"var(--sc-sleep-light)",title:Se(a,"label.light")}:void 0,c&&!it.has(c.state)?{flexGrow:Number(c.state),colorVar:"var(--sc-sleep-rem)",title:Se(a,"label.rem")}:void 0].filter(e=>void 0!==e),A=Ke(60*Number(s.state)),C=y&&!it.has(y.state)?Number(y.state):void 0,T=!!y?.attributes.date&&function(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}(new Date(y.attributes.date)),E={duration:`${A.value} ${A.unit}`};return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_readiness.title")}</div>
            <div class="subtitle">
              ${r?Se(a,"card.sleep_readiness.subtitle_with_wake",{...E,time:Ze(new Date(r.state),a.language)}):Se(a,"card.sleep_readiness.subtitle_no_wake",E)}
            </div>
          </div>
        </div>

        ${void 0!==k&&x?W`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${Re(k,x.colorVar,60,6)}
                  <div class="ring-value" style="color:${x.colorVar}">${Math.round(k)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${Se(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${x.colorVar}">${x.label}</div>
                </div>
              </div>
            `:K}

        <div class="stats">
          ${l?this._stat(String(Math.round(Number(l.state))),"%",Se(a,"stat.quality")):K}
          ${u?this._stat(String(Math.round(Number(u.state))),"ms",void 0!==$?Se(a,"stat.hrv_delta",{delta:Xe($)}):Se(a,"stat.hrv"),void 0!==$?$>=0?"good":"bad":void 0):K}
          ${m?this._stat(String(Math.round(Number(m.state))),"bpm",void 0!==z?Se(a,"stat.resting_hr_delta",{delta:Xe(z)}):Se(a,"stat.resting_hr"),void 0!==z?z<=0?"good":"bad":void 0):K}
          ${d?this._stat(String(Math.round(Number(d.state))),"%",Se(a,"stat.spo2")):K}
          ${_?this._stat(String(Math.round(Number(_.state))),"bpm",Se(a,"stat.sleep_avg_hr")):K}
          ${f?this._stat(String(Math.round(Number(f.state))),"bpm",Se(a,"stat.sleep_min_hr")):K}
        </div>

        ${S.length?W`
              <div class="stages">
                ${Ne(S)}
                <div class="stage-legend">
                  ${S.map(e=>{const t=Ke(e.flexGrow);return W`
                      <span class="legend-item">
                        <i class="dot" style="background:${e.colorVar}"></i>${e.title} ${t.value}${"h"===t.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:K}

        ${h&&!it.has(h.state)||C||b&&!it.has(b.state)||"on"===w?.state?W`
              <div class="footer">
                ${"on"===w?.state?W`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</span>`:K}
                ${h&&!it.has(h.state)?(()=>{const e=function(e,t){return"low"===t?{colorVar:"var(--sc-warn)",label:Se(e,"band.hrv.low")}:"high"===t?{colorVar:"var(--sc-pulse)",label:Se(e,"band.hrv.high")}:{colorVar:"var(--sc-good)",label:Se(e,"band.hrv.balanced")}}(a,h.state);return W`<span class="chip" style="color:${e.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${e.label}</span
                      >`})():K}
                ${C?W`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${Se(a,T?"chip.nap":"chip.nap_earlier",{minutes:C})}
                    </span>`:K}
                ${b&&!it.has(b.state)?W`<span class="chip">
                      <ha-icon icon="mdi:bed-clock"></ha-icon>${Se(a,"chip.bedtime",{time:Ze(new Date(b.state),a.language)})}
                    </span>`:K}
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a,i){return W`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};st.styles=[Ee,je,n`
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
    `],e([ve()],st.prototype,"_config",void 0),st=e([ue("suunto-sleep-readiness-card")],st);const rt=new Set(["unknown","unavailable",""]);let nt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||rt.has(s.state))return this._message("mdi:battery-heart-variant",Se(a,"empty.recovery.title"));const r=i("is_recovering"),n=i("recovery_until"),o=i("recovery_time"),c=i("stress_state"),l=i("workout_today"),d=i("unusual_recovery"),u=Number(s.state),p=function(e,t){return t>=60?{colorVar:"var(--sc-good)",label:Se(e,"band.recovery.well")}:t>=30?{colorVar:"var(--sc-warn)",label:Se(e,"band.recovery.partial")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.recovery.low")}}(a,u),h="on"===r?.state;let m=Se(a,"band.recovery.fully");if(h&&n&&!rt.has(n.state)){const e=new Date(n.state).getTime()-Date.now();if(e>0){const t=Ke(e/6e4);m=Se(a,"band.recovery.recovering",{time:`${t.value} ${t.unit}`})}}return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery.title")}</div>
            <div class="subtitle">${m}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${Re(u,p.colorVar,60,6)}
            <div class="ring-value" style="color:${p.colorVar}">${Math.round(u)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${Se(a,"stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${p.colorVar}">${p.label}</div>
          </div>
        </div>

        ${c||o?W`
              <div class="stats">
                ${c&&!rt.has(c.state)?this._stat(c.state,"",Se(a,"stat.stress_level")):K}
                ${o&&!rt.has(o.state)?this._stat(Number(o.state).toFixed(1),"h",Se(a,"stat.recovery_window")):K}
              </div>
            `:K}
        ${"on"===l?.state||"on"===d?.state?W`
              <div class="footer">
                ${"on"===l?.state?W`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_logged_today")}</span>`:K}
                ${"on"===d?.state?W`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</span>`:K}
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};nt.styles=[Ee,je,n`
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
    `],e([ve()],nt.prototype,"_config",void 0),nt=e([ue("suunto-recovery-card")],nt);const ot=new Set(["unknown","unavailable",""]);let ct=class extends Te{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.fitness_ctl;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{this._history=await We(this.hass,t,720,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||ot.has(s.state))return this._message("mdi:arm-flex",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=i("acwr"),c=n&&!ot.has(n.state)?Number(n.state):void 0,l=void 0!==c?function(e,t){return t>5?{colorVar:"var(--sc-good)",label:Se(e,"band.form.fresh")}:t<-20?{colorVar:"var(--sc-bad)",label:Se(e,"band.form.very_fatigued")}:t<-5?{colorVar:"var(--sc-warn)",label:Se(e,"band.form.fatigued")}:{colorVar:"var(--sc-pulse)",label:Se(e,"band.form.neutral")}}(a,c):void 0,d=o&&!ot.has(o.state)?Number(o.state):void 0,u=void 0!==d?function(e,t){return t>1.3?{colorVar:"var(--sc-bad)",label:Se(e,"band.acwr.high")}:t<.8?{colorVar:"var(--sc-warn)",label:Se(e,"band.acwr.low")}:{colorVar:"var(--sc-good)",label:Se(e,"band.acwr.safe")}}(a,d):void 0;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_load.title")}</div>
            <div class="subtitle">${l?l.label:Se(a,"card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${Me(this._history,"var(--sc-amber)")}

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):K}
          ${void 0!==c?this._stat(Xe(c,1),Se(a,"stat.tsb"),l?.colorVar):K}
        </div>

        ${void 0!==d&&u?W`
              <div class="footer">
                <span class="chip" style="color:${u.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${Se(a,"chip.acwr",{value:d.toFixed(2),label:u.label})}
                </span>
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value" style=${a?`color:${a}`:""}>${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};ct.styles=[Ee,je,n`
      .footer {
        display: flex;
      }
    `],e([ve()],ct.prototype,"_config",void 0),e([ve()],ct.prototype,"_history",void 0),ct=e([ue("suunto-training-load-card")],ct);const lt=new Set(["unknown","unavailable",""]),dt=["var(--sc-amber)","var(--sc-pulse)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let ut=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("weekly_time"),n=i("workouts_7d"),o=i("workouts_30d"),c=i("lifetime_by_activity");if(!s&&!c)return this._message("mdi:calendar-week",Se(a,"empty.week_stats.title"));const l=(c?.attributes.activities??[]).slice().sort((e,t)=>t.distance_km-e.distance_km),d=l.slice(0,5),u=l.length-d.length;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.week_stats.title")}</div>
            <div class="subtitle">${Se(a,"card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${s||r||n?W`
              <div class="stats">
                ${s&&!lt.has(s.state)?this._stat(Number(s.state).toFixed(1),"km",Se(a,"stat.distance")):K}
                ${r&&!lt.has(r.state)?this._stat(Number(r.state).toFixed(1),"h",Se(a,"stat.time")):K}
                ${n&&!lt.has(n.state)?this._stat(n.state,"",Se(a,"stat.workouts")):K}
              </div>
            `:K}

        ${d.length?W`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${Se(a,"card.week_stats.lifetime_title")}</div>
                ${Ne(d.map((e,t)=>({flexGrow:e.distance_km,colorVar:dt[t%dt.length],title:e.activity})))}
                <div class="rows">
                  ${d.map((e,t)=>{const a=dt[t%dt.length];return W`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${a} 18%, transparent);color:${a}"
                        >
                          <ha-icon .icon=${qe(e.activity)}></ha-icon>
                        </div>
                        <span class="name">${e.activity}</span>
                        <span class="count">${e.workouts}×</span>
                        <span class="dist">${e.distance_km.toFixed(0)} km</span>
                      </div>
                    `})}
                  ${u>0?W`<div class="row muted">
                        ${Ae(a,u,"chip.more_activity_one","chip.more_activity_other")}
                      </div>`:K}
                </div>
              </div>
            `:K}
        ${o&&!lt.has(o.state)?W`<div class="footer"><span class="chip">${Se(a,"chip.workouts_30d",{count:o.state})}</span></div>`:K}
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ut.styles=[Ee,je,n`
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
    `],e([ve()],ut.prototype,"_config",void 0),ut=e([ue("suunto-week-stats-card")],ut);const pt=new Set(["unknown","unavailable",""]);let ht=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps"),r=i("daily_energy"),n=i("current_hr"),o=i("workout_today"),c=i("is_recovering"),l=i("training_suggestion"),d=i("days_since_last_workout");if(!s&&!r&&!n)return this._message("mdi:pulse",Se(a,"empty.today.title"));const u=n&&!pt.has(n.state)?Math.round(Number(n.state)):void 0,p=l&&!pt.has(l.state)?l.state:void 0,h=p?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:Se(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:Se(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:Se(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:Se(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,p):void 0,m=d&&!pt.has(d.state)?Number(d.state):void 0;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.today.title")}</div>
            <div class="subtitle">${Se(a,"card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${s&&!pt.has(s.state)?this._stat(Number(s.state).toLocaleString(a.language),"",Se(a,"stat.steps")):K}
          ${r&&!pt.has(r.state)?this._stat(Math.round(Number(r.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):K}
          ${void 0!==u?W`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${u}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${Se(a,"stat.heart_rate")}</div>
                </div>
              `:K}
        </div>

        ${"on"===o?.state||"on"===c?.state||h||void 0!==m&&m>0?W`
              <div class="footer">
                ${"on"===o?.state?W`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_today")}</span>`:K}
                ${"on"===c?.state?W`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${Se(a,"chip.recovering")}</span>`:K}
                ${h?W`<span class="chip" style="color:${h.colorVar}"
                      ><ha-icon icon="${h.icon}"></ha-icon>${h.label}</span
                    >`:K}
                ${void 0!==m&&m>0?W`<span class="chip"
                      ><ha-icon icon="mdi:calendar-clock-outline"></ha-icon>${Ae(a,m,"chip.days_since_one","chip.days_since_other")}</span
                    >`:K}
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ht.styles=[Ee,je,n`
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
    `],e([ve()],ht.prototype,"_config",void 0),ht=e([ue("suunto-today-card")],ht);const mt=new Set(["unknown","unavailable",""]);let vt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lifetime-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance"),r=i("lifetime_time"),n=i("lifetime_energy"),o=i("lifetime_workouts"),c=i("lifetime_days");return!s||mt.has(s.state)?this._message("mdi:trophy-variant",Se(a,"empty.lifetime.title")):W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.lifetime.title")}</div>
            <div class="subtitle">${Se(a,"card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),"km",Se(a,"stat.distance"))}
          ${r?this._stat(Number(r.state).toFixed(0),"h",Se(a,"stat.time")):K}
          ${n?this._stat(Math.round(Number(n.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):K}
          ${o?this._stat(o.state,"",Se(a,"stat.workouts")):K}
          ${c?this._stat(c.state,"",Se(a,"stat.active_days")):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};vt.styles=[Ee,je,n`
    `],e([ve()],vt.prototype,"_config",void 0),vt=e([ue("suunto-lifetime-card")],vt);let gt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recent-workouts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];return s&&0!==r.length?W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recent_workouts.title")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map(e=>{const t=null!==e.duration_min?Ke(e.duration_min):void 0;return W`
              <div class="workout-row">
                <div class="icon-badge tiny"><ha-icon .icon=${qe(e.activity)}></ha-icon></div>
                <div class="name-block">
                  <div class="name">${e.activity??"-"}</div>
                  <div class="date">
                    ${e.start?Qe(new Date(e.start),a.language):""}
                  </div>
                </div>
                <div class="row-stats">
                  ${null!==e.distance_km?W`<span>${e.distance_km} km</span>`:K}
                  ${null!==e.distance_km&&t?W`<span class="sep">·</span>`:K}
                  ${t?W`<span>${t.value} ${t.unit}</span>`:K}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:format-list-bulleted",Se(a,"empty.recent_workouts.title"))}};gt.styles=[Ee,je,n`
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
    `],e([ve()],gt.prototype,"_config",void 0),gt=e([ue("suunto-recent-workouts-card")],gt);const yt=new Set(["unknown","unavailable",""]);let _t=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-elevation-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_ascent"),r=i("last_descent");if((!s||yt.has(s.state))&&(!r||yt.has(r.state)))return this._message("mdi:image-filter-hdr",Se(a,"empty.elevation.title"),Se(a,"empty.elevation.subtitle"));const n=i("last_ascent_time"),o=i("last_descent_time"),c=i("last_min_altitude"),l=i("last_max_altitude"),d=i("last_ascent_rate"),u=i("last_workout_start");return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:image-filter-hdr"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.elevation.title")}</div>
            <div class="subtitle">
              ${u?`${Se(a,"card.hr_zones.last_workout")} · ${Qe(new Date(u.state),a.language)}`:Se(a,"card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats">
          ${s&&!yt.has(s.state)?this._stat(Math.round(Number(s.state)).toString(),"m",Se(a,"stat.ascent")):K}
          ${r&&!yt.has(r.state)?this._stat(Math.round(Number(r.state)).toString(),"m",Se(a,"stat.descent")):K}
          ${n&&!yt.has(n.state)?(()=>{const e=Ke(Number(n.state));return this._stat(e.value,e.unit,Se(a,"stat.ascent_time"))})():K}
          ${o&&!yt.has(o.state)?(()=>{const e=Ke(Number(o.state));return this._stat(e.value,e.unit,Se(a,"stat.descent_time"))})():K}
          ${c&&!yt.has(c.state)?this._stat(Math.round(Number(c.state)).toString(),"m",Se(a,"stat.min_altitude")):K}
          ${l&&!yt.has(l.state)?this._stat(Math.round(Number(l.state)).toString(),"m",Se(a,"stat.max_altitude")):K}
        </div>

        ${d&&!yt.has(d.state)?W`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${Se(a,"stat.ascent_rate")}: ${Math.round(Number(d.state))} m/h
                </span>
              </div>
            `:K}
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};_t.styles=[Ee,je,n`
      .footer {
        display: flex;
      }
    `],e([ve()],_t.prototype,"_config",void 0),_t=e([ue("suunto-elevation-card")],_t);const ft=new Set(["unknown","unavailable",""]);let bt=class extends Te{constructor(){super(...arguments),this._mapLoading=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-location-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),r=s?.attributes.latitude,n=s?.attributes.longitude,o=t.last_workout_location;if(!s||ft.has(s.state)||void 0===r||void 0===n)return this._message("mdi:map-marker",Se(a,"empty.location.title"),Se(a,"empty.location.subtitle"));const c=i("last_activity"),l=i("last_workout_start"),d=`https://www.google.com/maps?q=${r},${n}`,u=qe(c?.state);return o&&this._ensureMapElement(o,u),this._mapEl&&(this._mapEl.hass=a),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.location.title")}</div>
            <div class="subtitle">
              ${c?W`${c.state}`:K}
              ${c&&l?W`<span class="sep">·</span>`:K}
              ${l?Qe(new Date(l.state),a.language):K}
            </div>
          </div>
        </div>

        ${this._mapEl&&this._mapKey===`${o}:${u}`?W`<div class="map-wrap">${this._mapEl}</div>`:K}

        <div class="footer-row">
          <div class="coords">${Number(r).toFixed(5)}, ${Number(n).toFixed(5)}</div>
          <a class="chip accent link" href=${d} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${Se(a,"location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `}async _ensureMapElement(e,t){const a=`${e}:${t}`;if(this._mapEl&&this._mapKey===a||this._mapLoading)return;const i={type:"map",auto_fit:!0,default_zoom:14,aspect_ratio:"16:9",entities:[{entity:e,icon:t}]},s=window.loadCardHelpers;if(!s){if(!customElements.get("hui-map-card"))return;try{const e=document.createElement("hui-map-card");e.setConfig(i),this._mapKey=a,this._mapEl=e}catch{}return}this._mapLoading=!0;try{const e=(await s()).createCardElement(i);this._mapKey=a,this._mapEl=e}catch{}finally{this._mapLoading=!1}}};bt.styles=[Ee,je,n`
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
    `],e([ve()],bt.prototype,"_config",void 0),e([ve()],bt.prototype,"_mapEl",void 0),bt=e([ue("suunto-location-card")],bt);const wt=new Set(["unknown","unavailable",""]);let kt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("vo2max");if(!s||wt.has(s.state))return this._message("mdi:lungs",Se(a,"empty.fitness.title"),Se(a,"empty.fitness.subtitle"));const r=i("estimated_vo2max"),n=i("fitness_age"),o=s.attributes.measured_at,c=s.attributes.measured_from;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.fitness.title")}</div>
            <div class="subtitle">
              ${o?Se(a,"fitness.measured",{time:Qe(new Date(o),a.language),activity:c??""}):K}
            </div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",Se(a,"stat.vo2max"))}
          ${r&&!wt.has(r.state)?this._stat(Number(r.state).toFixed(1),"ml/kg/min",Se(a,"stat.estimated_vo2max")):K}
          ${n&&!wt.has(n.state)?this._stat(String(Math.round(Number(n.state))),"",Se(a,"stat.fitness_age")):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};kt.styles=[Ee,je,n`
    `],e([ve()],kt.prototype,"_config",void 0),kt=e([ue("suunto-fitness-card")],kt);const xt=new Set(["unknown","unavailable",""]);let $t=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-tile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 1}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity");if(!s||xt.has(s.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_avg_pace"),d=i("last_avg_speed"),u=[];if(n&&u.push(W`${(Number(n.state)/1e3).toFixed(1)} km`),o){const e=Ke(Number(o.state));u.push(W`${e.value} ${e.unit}`)}return l?u.push(W`${Ue(Number(l.state))}/km`):d&&u.push(W`${Number(d.state).toFixed(1)} km/h`),c&&u.push(W`${Math.round(Number(c.state))} bpm`),W`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${qe(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">${r?Qe(new Date(r.state),a.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${u.length?W`
              <div class="compact-stats">
                ${u.map((e,t)=>W`${t>0?W`<span class="sep">·</span>`:K}${e}`)}
              </div>
            `:K}
      </ha-card>
    `}_openMoreInfo(e){e&&_e(this,"hass-more-info",{entityId:e})}};$t.styles=[Ee,je,n`
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
    `],e([ve()],$t.prototype,"_config",void 0),$t=e([ue("suunto-last-workout-tile-card")],$t);const zt=new Set(["unknown","unavailable",""]);let St=class extends Te{constructor(){super(...arguments),this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pmc-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.fitness_ctl;if(!a)return;const i=t.fatigue_atl,s=t.form_tsb,r=[a,i,s].filter(e=>Boolean(e)).join(","),n=Date.now();if(!(r===this._historyKey&&n-this._historyFetchedAt<6e5)){this._historyKey=r,this._historyFetchedAt=n;try{const e=this.hass,[t,r,n]=await Promise.all([We(e,a,2160,"mean"),i?We(e,i,2160,"mean"):Promise.resolve([]),s?We(e,s,2160,"mean"):Promise.resolve([])]);this._ctlHistory=t,this._atlHistory=r,this._tsbHistory=n}catch{this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||zt.has(s.state))return this._message("mdi:chart-timeline-variant",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=[{points:this._ctlHistory,colorVar:"var(--sc-pulse)"}];return this._atlHistory.length&&o.push({points:this._atlHistory,colorVar:"var(--sc-bad)"}),this._tsbHistory.length&&o.push({points:this._tsbHistory,colorVar:"var(--sc-amber)"}),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.pmc.title")}</div>
            <div class="subtitle">${Se(a,"card.pmc.subtitle")}</div>
          </div>
        </div>

        ${De(o,300,80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${Se(a,"stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.tsb")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r&&!zt.has(r.state)?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):K}
          ${n&&!zt.has(n.state)?this._stat(Xe(Number(n.state),1),Se(a,"stat.tsb")):K}
        </div>
      </ha-card>
    `}_stat(e,t){return W`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};St.styles=[Ee,je,n`
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
    `],e([ve()],St.prototype,"_config",void 0),e([ve()],St.prototype,"_ctlHistory",void 0),e([ve()],St.prototype,"_atlHistory",void 0),e([ve()],St.prototype,"_tsbHistory",void 0),St=e([ue("suunto-pmc-card")],St);const At=new Set(["unknown","unavailable",""]);let Ct=class extends Te{constructor(){super(...arguments),this._rhrHistory=[],this._hrvHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.resting_hr,i=t.sleep_hrv;if(!a&&!i)return;const s=[a,i].filter(e=>Boolean(e)).join(","),r=Date.now();if(!(s===this._historyKey&&r-this._historyFetchedAt<6e5)){this._historyKey=s,this._historyFetchedAt=r;try{const e=this.hass,[t,s]=await Promise.all([a?We(e,a,720,"mean"):Promise.resolve([]),i?We(e,i,720,"mean"):Promise.resolve([])]);this._rhrHistory=t,this._hrvHistory=s}catch{this._rhrHistory=[],this._hrvHistory=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("resting_hr"),r=i("sleep_hrv"),n=s&&!At.has(s.state),o=r&&!At.has(r.state);if(!n&&!o)return this._message("mdi:heart-pulse",Se(a,"empty.recovery_trends.title"));const c=i("resting_hr_baseline"),l=i("hrv_baseline"),d=n&&c&&!At.has(c.state)?Number(s.state)-Number(c.state):void 0,u=o&&l&&!At.has(l.state)?Number(r.state)-Number(l.state):void 0,p=[];return this._rhrHistory.length&&p.push({points:this._rhrHistory,colorVar:"var(--sc-pulse)"}),this._hrvHistory.length&&p.push({points:this._hrvHistory,colorVar:"var(--sc-amber)"}),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.recovery_trends.subtitle")}</div>
          </div>
        </div>

        ${De(p,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.hrv")}</span>
        </div>

        <div class="stats">
          ${n?this._stat(String(Math.round(Number(s.state))),"bpm",void 0!==d?Se(a,"stat.resting_hr_delta",{delta:Xe(d)}):Se(a,"stat.resting_hr"),void 0!==d?d<=0?"good":"bad":void 0):K}
          ${o?this._stat(String(Math.round(Number(r.state))),"ms",void 0!==u?Se(a,"stat.hrv_delta",{delta:Xe(u)}):Se(a,"stat.hrv"),void 0!==u?u>=0?"good":"bad":void 0):K}
        </div>
      </ha-card>
    `}_stat(e,t,a,i){return W`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ct.styles=[Ee,je,n`
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
    `],e([ve()],Ct.prototype,"_config",void 0),e([ve()],Ct.prototype,"_rhrHistory",void 0),e([ve()],Ct.prototype,"_hrvHistory",void 0),Ct=e([ue("suunto-recovery-trends-card")],Ct);const Tt=new Set(["unknown","unavailable",""]);let Et=class extends Te{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-volume-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.weekly_distance;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{this._history=await We(this.hass,t,2016,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||Tt.has(i.state))return this._message("mdi:chart-bar",Se(a,"empty.weekly_volume.title"));const r=function(e,t){const a=[...e].sort((e,t)=>e.t-t.t),i=Date.now(),s=[];for(let e=t-1;e>=0;e--){const t=i-7*e*864e5,r=t-6048e5,n=a.filter(e=>e.t>r&&e.t<=t),o=n[n.length-1];s.push({value:o?o.v:0,weekEndMs:t})}return s}(this._history,12),n=r.map(e=>({value:e.value,label:`${new Date(e.weekEndMs).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${e.value.toFixed(1)} km`})),o=r.reduce((e,t)=>e+t.value,0),c=o/12;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.weekly_volume.title")}</div>
            <div class="subtitle">${Se(a,"card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${Fe(n,"var(--sc-amber)",300,80)}

        <div class="stats">
          ${this._stat(Number(i.state).toFixed(1),"km",Se(a,"stat.distance"))}
          ${this._stat(c.toFixed(1),"km",Se(a,"stat.average"))}
          ${this._stat(o.toFixed(0),"km",Se(a,"stat.total"))}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Et.styles=[Ee,je,n`
    `],e([ve()],Et.prototype,"_config",void 0),e([ve()],Et.prototype,"_history",void 0),Et=e([ue("suunto-weekly-volume-card")],Et);const jt=new Set(["unknown","unavailable",""]);let Nt=class extends Te{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-curve-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await We(this.hass,"suunto_app:hr",26,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="current_hr"]?a.states[t[s]]:void 0;var s;if(!i||jt.has(i.state))return this._message("mdi:chart-bell-curve",Se(a,"empty.hr_curve.title"),Se(a,"empty.hr_curve.subtitle"));const r=this._history.map(e=>e.v),n=r.length?Math.min(...r):void 0,o=r.length?Math.max(...r):void 0;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-bell-curve"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_curve.title")}</div>
            <div class="subtitle">${Se(a,"card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${Me(this._history,"var(--sc-pulse)")}

        <div class="stats">
          ${this._stat(String(Math.round(Number(i.state))),"bpm",Se(a,"stat.hr_now"))}
          ${void 0!==n?this._stat(String(Math.round(n)),"bpm",Se(a,"stat.hr_min")):K}
          ${void 0!==o?this._stat(String(Math.round(o)),"bpm",Se(a,"stat.hr_max")):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat hr">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Nt.styles=[Ee,je,n`
    `],e([ve()],Nt.prototype,"_config",void 0),e([ve()],Nt.prototype,"_history",void 0),Nt=e([ue("suunto-hr-curve-card")],Nt);const Rt=new Set(["unknown","unavailable",""]);let Mt=class extends Te{constructor(){super(...arguments),this._durationHistory=[],this._qualityHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([We(this.hass,"suunto_app:sleep_duration",720,"mean"),We(this.hass,"suunto_app:sleep_quality",720,"mean")]);this._durationHistory=e,this._qualityHistory=t}catch{this._durationHistory=[],this._qualityHistory=[]}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||Rt.has(s.state))return this._message("mdi:power-sleep",Se(a,"empty.sleep_trends.title"));const r=i("sleep_quality"),n=[];this._durationHistory.length&&n.push({points:this._durationHistory,colorVar:"var(--sc-pulse)"}),this._qualityHistory.length&&n.push({points:this._qualityHistory,colorVar:"var(--sc-amber)"});const o=Ke(60*Number(s.state));return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:power-sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.sleep_trends.subtitle")}</div>
          </div>
        </div>

        ${De(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.duration")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.quality")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${o.value} ${o.unit}`,Se(a,"stat.duration"))}
          ${r&&!Rt.has(r.state)?this._stat(`${Math.round(Number(r.state))}%`,Se(a,"stat.quality")):K}
        </div>
      </ha-card>
    `}_stat(e,t){return W`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Mt.styles=[Ee,je,n`
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
    `],e([ve()],Mt.prototype,"_config",void 0),e([ve()],Mt.prototype,"_durationHistory",void 0),e([ve()],Mt.prototype,"_qualityHistory",void 0),Mt=e([ue("suunto-sleep-trends-card")],Mt);let Vt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-streak-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:fire",Se(a,"empty.streak.title"));const{streak:n,activeDates:o}=function(e){const t=new Set(e.map(e=>e.start).filter(e=>Boolean(e)).map(e=>new Date(e).toDateString())),a=new Date;t.has(a.toDateString())||a.setDate(a.getDate()-1);let i=0;for(;t.has(a.toDateString());)i++,a.setDate(a.getDate()-1);return{streak:i,activeDates:t}}(r),c=[];let l=0;const d=new Date;d.setDate(d.getDate()-13);for(let e=0;e<14;e++){const e=o.has(d.toDateString());e&&l++,c.push(W`<span
          class="dot"
          style="background:${e?"var(--sc-amber)":"var(--divider-color)"}"
        ></span>`),d.setDate(d.getDate()+1)}return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:fire"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.streak.title")}</div>
            <div class="subtitle">${Se(a,"card.streak.subtitle")}</div>
          </div>
        </div>

        <div class="streak-row">
          <div class="streak-value">${n}</div>
          <div class="streak-label">
            ${n>0?Ae(a,n,"streak.days_one","streak.days_other"):Se(a,"streak.none")}
          </div>
        </div>

        <div class="week-dots">${c}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${Ae(a,l,"streak.window_count_one","streak.window_count_other")}
          </span>
        </div>
      </ha-card>
    `}};Vt.styles=[Ee,je,n`
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
    `],e([ve()],Vt.prototype,"_config",void 0),Vt=e([ue("suunto-streak-card")],Vt);const Dt=new Set(["unknown","unavailable",""]);let Ft=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-just-finished-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity"),r=i("last_workout_start");if(!s||Dt.has(s.state)||!r)return this._message("mdi:party-popper",Se(a,"empty.just_finished.title"));const n=new Date(r.last_changed),o=Date.now()-n.getTime();if(!(Number.isFinite(o)&&o>=0&&o<216e5))return this._message("mdi:party-popper",Se(a,"just_finished.idle.title"),Se(a,"just_finished.idle.subtitle"));const c=i("last_distance"),l=i("last_duration"),d=i("last_avg_hr"),u=i("last_tss");return W`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon icon="mdi:party-popper"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"just_finished.title")}</div>
            <div class="subtitle">
              <span class="activity">${s.state}</span> · ${Qe(n,a.language)}
            </div>
          </div>
        </div>

        <div class="stats">
          ${c?this._stat((Number(c.state)/1e3).toFixed(1),"km",Se(a,"stat.distance")):K}
          ${l?(()=>{const e=Ke(Number(l.state));return this._stat(e.value,e.unit,Se(a,"stat.duration"))})():K}
          ${d?this._stat(String(Math.round(Number(d.state))),"bpm",Se(a,"stat.avg_hr")):K}
          ${u?this._stat(Number(u.state).toFixed(0),"",Se(a,"stat.tss")):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${t?W`<span class="unit">${t}</span>`:K}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ft.styles=[Ee,je,n`
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
    `],e([ve()],Ft.prototype,"_config",void 0),Ft=e([ue("suunto-just-finished-card")],Ft);const Pt=new Set(["unknown","unavailable",""]);let Ht=class extends Te{constructor(){super(...arguments),this._stepsHistory=[],this._energyHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([We(this.hass,"suunto_app:steps",336,"sum"),We(this.hass,"suunto_app:energy",336,"sum")]);this._stepsHistory=Ge(e),this._energyHistory=Ge(t)}catch{this._stepsHistory=[],this._energyHistory=[]}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps");if(!s||Pt.has(s.state))return this._message("mdi:shoe-print",Se(a,"empty.activity_trends.title"));const r=i("daily_energy"),n=[];return this._stepsHistory.length&&n.push({points:this._stepsHistory,colorVar:"var(--sc-pulse)"}),this._energyHistory.length&&n.push({points:this._energyHistory,colorVar:"var(--sc-amber)"}),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.activity_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.activity_trends.subtitle")}</div>
          </div>
        </div>

        ${De(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.steps")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.energy")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(s.state)).toLocaleString(a.language),Se(a,"stat.steps"))}
          ${r&&!Pt.has(r.state)?this._stat(`${Math.round(Number(r.state))} kcal`,Se(a,"stat.energy")):K}
        </div>
      </ha-card>
    `}_stat(e,t){return W`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Ht.styles=[Ee,je,n`
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
    `],e([ve()],Ht.prototype,"_config",void 0),e([ve()],Ht.prototype,"_stepsHistory",void 0),e([ve()],Ht.prototype,"_energyHistory",void 0),Ht=e([ue("suunto-activity-trends-card")],Ht);const Lt=new Set(["unknown","unavailable",""]);let Ot=class extends Te{constructor(){super(...arguments),this._balanceHistory=[],this._stressHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-balance-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([We(this.hass,"suunto_app:recovery_balance",336,"mean"),We(this.hass,"suunto_app:stress",336,"mean")]);this._balanceHistory=Ie(e),this._stressHistory=Ie(t)}catch{this._balanceHistory=[],this._stressHistory=[]}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||Lt.has(s.state))return this._message("mdi:heart-flash",Se(a,"empty.recovery_balance_trend.title"));const r=i("stress_state"),n=[];return this._balanceHistory.length&&n.push({points:this._balanceHistory,colorVar:"var(--sc-pulse)"}),this._stressHistory.length&&n.push({points:this._stressHistory,colorVar:"var(--sc-amber)"}),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-flash"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery_balance_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.recovery_balance_trend.subtitle")}</div>
          </div>
        </div>

        ${De(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.recovery_balance")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.stress_level")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${Math.round(Number(s.state))}%`,Se(a,"stat.recovery_balance"))}
          ${r&&!Lt.has(r.state)?this._stat(r.state,Se(a,"stat.stress_level")):K}
        </div>
      </ha-card>
    `}_stat(e,t){return W`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Ot.styles=[Ee,je,n`
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
    `],e([ve()],Ot.prototype,"_config",void 0),e([ve()],Ot.prototype,"_balanceHistory",void 0),e([ve()],Ot.prototype,"_stressHistory",void 0),Ot=e([ue("suunto-recovery-balance-trend-card")],Ot);const qt=new Set(["unknown","unavailable",""]);let Bt=class extends Te{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-readiness-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await We(this.hass,"suunto_app:readiness",720,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="readiness"]?a.states[t[s]]:void 0;var s;if(!i||qt.has(i.state))return this._message("mdi:gauge",Se(a,"empty.readiness_trend.title"));const r=Number(i.state),n=function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,r);return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.readiness_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${Me(this._history,n.colorVar)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value" style="color:${n.colorVar}">${Math.round(r)}</div>
            <div class="stat-label">${n.label}</div>
          </div>
        </div>
      </ha-card>
    `}};Bt.styles=[Ee,je,n`
      .stat-value {
        font-size: 1.4rem;
      }
    `],e([ve()],Bt.prototype,"_config",void 0),e([ve()],Bt.prototype,"_history",void 0),Bt=e([ue("suunto-readiness-trend-card")],Bt);function Wt(e){return e<=0?0:1===e?1:2===e?2:3}let Gt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-calendar-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:calendar-month",Se(a,"empty.activity_calendar.title"));const n=function(e){const t=new Map;for(const a of e){if(!a.start)continue;const e=new Date(a.start).toDateString();t.set(e,(t.get(e)??0)+1)}return t}(r),o=new Date,c=(o.getDay()+6)%7,l=new Date(o);l.setDate(o.getDate()-c-35);let d=0;const u=[],p=new Date(l);for(let e=0;e<42;e++){const e=n.get(p.toDateString())??0;e>0&&d++;const t=Wt(e);u.push(W`<span
          class="cell level-${t}"
          title=${p.toLocaleDateString(a.language)}
        ></span>`),p.setDate(p.getDate()+1)}return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-month"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.activity_calendar.title")}</div>
            <div class="subtitle">${Se(a,"card.activity_calendar.subtitle")}</div>
          </div>
        </div>

        <div class="cal-grid">${u}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${Ae(a,d,"activity_calendar.active_days_one","activity_calendar.active_days_other")}
          </span>
        </div>
      </ha-card>
    `}};function It(e){const t=Math.round(60*e);if(0===t)return"±0:00";const a=t>0?"+":"-",i=Math.abs(t);return`${a}${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}Gt.styles=[Ee,je,n`
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
    `],e([ve()],Gt.prototype,"_config",void 0),Gt=e([ue("suunto-activity-calendar-card")],Gt);let Kt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-workout-comparison-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(e){const t=e[0];if(!t?.activity)return;const a=e.slice(1).find(e=>e.activity===t.activity);return a?{current:t,previous:a}:void 0}(r):void 0;if(!n)return this._message("mdi:compare",Se(a,"empty.workout_comparison.title"),Se(a,"empty.workout_comparison.subtitle"));const{current:o,previous:c}=n,l=null!==o.distance_km&&null!==c.distance_km?o.distance_km-c.distance_km:void 0,d=null!==o.duration_min&&null!==c.duration_min?o.duration_min-c.duration_min:void 0,u=null!==o.avg_hr&&null!==c.avg_hr?o.avg_hr-c.avg_hr:void 0,p=o.distance_km&&o.duration_min?o.duration_min/o.distance_km:void 0,h=c.distance_km&&c.duration_min?c.duration_min/c.distance_km:void 0,m=void 0!==p&&void 0!==h?p-h:void 0;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${qe(o.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.workout_comparison.title")}</div>
            <div class="subtitle">
              <span class="activity">${o.activity}</span> ·
              ${Se(a,"card.workout_comparison.vs",{time:c.start?Qe(new Date(c.start),a.language):""})}
            </div>
          </div>
        </div>

        <div class="stats">
          ${null!==o.distance_km?this._stat(o.distance_km.toFixed(1),"km",void 0!==l?Se(a,"stat.distance_delta",{delta:Xe(l,1)}):Se(a,"stat.distance")):K}
          ${null!==o.duration_min?(()=>{const e=Ke(o.duration_min);return this._stat(e.value,e.unit,void 0!==d?Se(a,"stat.duration_delta",{delta:Xe(d,0)+" min"}):Se(a,"stat.duration"))})():K}
          ${null!==o.avg_hr?this._stat(String(Math.round(o.avg_hr)),"bpm",void 0!==u?Se(a,"stat.avg_hr_delta",{delta:Xe(u,0)}):Se(a,"stat.avg_hr")):K}
          ${void 0!==p?this._stat(`${Math.floor(p)}:${String(Math.round(p%1*60)).padStart(2,"0")}`,"/km",void 0!==m?Se(a,"stat.pace_delta",{delta:It(m)}):Se(a,"stat.avg_pace")):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Kt.styles=[Ee,je,n`
      .activity {
        text-transform: capitalize;
      }
      /* These 4 stats are fixed once a comparison pair exists (all derived
         from the same two records) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([ve()],Kt.prototype,"_config",void 0),Kt=e([ue("suunto-workout-comparison-card")],Kt);const Ut=new Set(["unknown","unavailable",""]);let Zt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-milestones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||Ut.has(s.state))return this._message("mdi:earth",Se(a,"empty.milestones.title"));const r=i("lifetime_energy"),n=Number(s.state),o=n/40075,c=n/42.195,l=n/384400*100,d=r&&!Ut.has(r.state)?Number(r.state)/550:void 0;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:earth"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.milestones.title")}</div>
            <div class="subtitle">${Se(a,"card.milestones.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(o.toFixed(2),Se(a,"stat.earth_laps"))}
          ${this._stat(c.toFixed(0),Se(a,"stat.marathons"))}
          ${this._stat(`${l.toFixed(1)}%`,Se(a,"stat.moon_pct"))}
          ${void 0!==d?this._stat(d.toFixed(0),Se(a,"stat.burgers")):K}
        </div>
      </ha-card>
    `}_stat(e,t){return W`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Zt.styles=[Ee,je,n`
      /* 4 stats always arrive together (same lifetime snapshot) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([ve()],Zt.prototype,"_config",void 0),Zt=e([ue("suunto-milestones-card")],Zt);const Xt=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];let Jt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-athlete-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.lifetime_by_activity,s=i?a.states[i]:void 0,r=s?.attributes.activities??[],n=t.workouts_recent,o=n?a.states[n]:void 0,c=o?.attributes.workouts??[];if(0===r.length||0===c.length)return this._message("mdi:account-star",Se(a,"empty.athlete_profile.title"));const l=[...r].sort((e,t)=>t.workouts-e.workouts)[0].activity,d=function(e){for(const[t,a]of Xt)if(t.test(e))return a;return"personality.activity.other"}(l),u=function(e){const t=e.filter(e=>Boolean(e.start)),a=t.filter(e=>{const t=new Date(e.start).getDay();return 0===t||6===t}).length,i=a/t.length;return i>=.6?"personality.schedule.weekend":i<=.25?"personality.schedule.weekday":"personality.schedule.balanced"}(c),p=function(e){const t={morning:0,afternoon:0,evening:0,night:0};for(const a of e){if(!a.start)continue;const e=new Date(a.start).getHours();e>=5&&e<12?t.morning++:e>=12&&e<18?t.afternoon++:e>=18&&e<23?t.evening++:t.night++}const a=Object.entries(t).sort((e,t)=>t[1]-e[1])[0][0];return{morning:{key:"personality.time.morning",icon:"mdi:weather-sunset-up"},afternoon:{key:"personality.time.afternoon",icon:"mdi:weather-sunny"},evening:{key:"personality.time.evening",icon:"mdi:weather-sunset"},night:{key:"personality.time.night",icon:"mdi:weather-night"}}[a]}(c);return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:account-star"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.athlete_profile.title")}</div>
            <div class="subtitle">
              ${Se(a,d)} · ${Se(a,u)} · ${Se(a,p.key)}
            </div>
          </div>
        </div>

        <div class="traits">
          <span class="chip accent"><ha-icon .icon=${qe(l)}></ha-icon>${Se(a,d)}</span>
          <span class="chip accent"><ha-icon icon="mdi:calendar-weekend"></ha-icon>${Se(a,u)}</span>
          <span class="chip accent"><ha-icon .icon=${p.icon}></ha-icon>${Se(a,p.key)}</span>
        </div>
      </ha-card>
    `}};Jt.styles=[Ee,je,n`
      .traits {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],e([ve()],Jt.prototype,"_config",void 0),Jt=e([ue("suunto-athlete-profile-card")],Jt);let Qt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pace-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(e){const t=e[0]?.activity;if(!t)return;const a=e.filter(e=>e.activity===t&&e.start&&e.distance_km&&e.duration_min).map(e=>({t:new Date(e.start).getTime(),v:e.duration_min/e.distance_km})).sort((e,t)=>e.t-t.t);if(a.length<2)return;const i=Math.ceil(a.length/2),s=a.slice(0,i),r=a.slice(i).length?a.slice(i):a.slice(-1),n=e=>e.reduce((e,t)=>e+t.v,0)/e.length,o=n(s),c=(n(r)-o)/o,l=c<-.03?"faster":c>.03?"slower":"steady";return{activity:t,points:a,latestPace:a[a.length-1].v,direction:l}}(r):void 0;if(!n)return this._message("mdi:speedometer",Se(a,"empty.pace_trend.title"),Se(a,"empty.pace_trend.subtitle"));const o="faster"===n.direction?{colorVar:"var(--sc-good)",label:Se(a,"pace_trend.faster")}:"slower"===n.direction?{colorVar:"var(--sc-warn)",label:Se(a,"pace_trend.slower")}:{colorVar:"var(--sc-pulse)",label:Se(a,"pace_trend.steady")};return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${qe(n.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.pace_trend.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.pace_trend.subtitle",{activity:n.activity,count:n.points.length})}
            </div>
          </div>
        </div>

        ${Me(n.points,o.colorVar)}

        <div class="footer">
          <div class="stat">
            <div class="stat-value">${Ue(n.latestPace)}<span class="unit">/km</span></div>
            <div class="stat-label">${Se(a,"stat.avg_pace")}</div>
          </div>
          <span class="chip" style="color:${o.colorVar}">${o.label}</span>
        </div>
      </ha-card>
    `}};Qt.styles=[Ee,je,n`
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
    `],e([ve()],Qt.prototype,"_config",void 0),Qt=e([ue("suunto-pace-trend-card")],Qt);let Yt=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lap-splits-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.last_workout_laps,s=i?a.states[i]:void 0,r=s?.attributes.laps??[];if(!s||0===r.length)return this._message("mdi:flag-checkered",Se(a,"empty.lap_splits.title"),Se(a,"empty.lap_splits.subtitle"));const n=function(e){const t=e.map((e,t)=>({i:t,pace:e.pace_min_km})).filter(e=>null!==e.pace&&e.pace>0);return t.length>0?t.reduce((e,t)=>t.pace<e.pace?t:e).i:e.reduce((t,a,i)=>a.duration_minutes<e[t].duration_minutes?i:t,0)}(r),o=null!==r[n].pace_min_km&&r[n].pace_min_km>0?`${Ue(r[n].pace_min_km)}/km`:(()=>{const e=Ke(r[n].duration_minutes);return`${e.value} ${e.unit}`})(),c=r.map((e,t)=>{const i=Ke(e.duration_minutes),s=Se(a,"label.lap",{n:e.lap});return{value:e.duration_minutes,label:e.pace_min_km&&e.pace_min_km>0?`${s} · ${Ue(e.pace_min_km)}/km`:`${s} · ${i.value}${i.unit}`,colorVar:t===n?"var(--sc-good)":void 0}}),l=t.last_workout_start,d=l?a.states[l]:void 0,u=Se(a,"card.hr_zones.last_workout");return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.lap_splits.title")}</div>
            <div class="subtitle">
              ${d?`${u} · ${Qe(new Date(d.state),a.language)}`:u}
            </div>
          </div>
        </div>

        ${Fe(c,"var(--sc-pulse)",300,70)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${r.length}</div>
            <div class="stat-label">${Se(a,"stat.laps")}</div>
          </div>
          <div class="stat good">
            <div class="stat-value">${o}</div>
            <div class="stat-label">${Se(a,"stat.fastest_lap")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map((e,t)=>{const a=Ke(e.duration_minutes);return W`
              <div class="lap-row">
                <div class="lap-number ${t===n?"fastest":""}">${e.lap}</div>
                <div class="lap-meta">
                  ${null!==e.distance_km?W`<span>${e.distance_km.toFixed(2)} km</span><span class="sep">·</span>`:K}
                  <span>${a.value} ${a.unit}</span>
                </div>
                <div class="lap-value">
                  ${null!==e.pace_min_km&&e.pace_min_km>0?W`${Ue(e.pace_min_km)}<span class="unit">/km</span>`:W`${a.value}<span class="unit">${a.unit}</span>`}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};Yt.styles=[Ee,je,n`
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
    `],e([ve()],Yt.prototype,"_config",void 0),Yt=e([ue("suunto-lap-splits-card")],Yt);const ea=new Set(["unknown","unavailable",""]);let ta=class extends Te{constructor(){super(...arguments),this._pteHistory=[],this._epocHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-effect-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([We(this.hass,"suunto_app:pte",720,"mean"),We(this.hass,"suunto_app:epoc",720,"mean")]);this._pteHistory=e,this._epocHistory=t}catch{this._pteHistory=[],this._epocHistory=[]}}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_pte");if(!s||ea.has(s.state))return this._message("mdi:lightning-bolt",Se(a,"empty.training_effect_trend.title"));const r=i("last_epoc"),n=[];return this._pteHistory.length&&n.push({points:this._pteHistory,colorVar:"var(--sc-pulse)"}),this._epocHistory.length&&n.push({points:this._epocHistory,colorVar:"var(--sc-amber)"}),W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lightning-bolt"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_effect_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${De(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.training_effect")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.epoc")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),Se(a,"stat.training_effect"))}
          ${r&&!ea.has(r.state)?this._stat(Number(r.state).toFixed(0),Se(a,"stat.epoc"),"ml/kg"):K}
        </div>
      </ha-card>
    `}_stat(e,t,a){return W`
      <div class="stat">
        <div class="stat-value">${e}${a?W`<span class="unit">${a}</span>`:K}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};ta.styles=[Ee,je,n`
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
    `],e([ve()],ta.prototype,"_config",void 0),e([ve()],ta.prototype,"_pteHistory",void 0),e([ve()],ta.prototype,"_epocHistory",void 0),ta=e([ue("suunto-training-effect-trend-card")],ta);const aa=new Set(["unknown","unavailable",""]);let ia=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-status-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("readiness"),r=i("training_suggestion"),n=i("unusual_recovery"),o=s&&!aa.has(s.state)?Number(s.state):void 0,c=r&&!aa.has(r.state)?r.state:void 0;if(void 0===o&&void 0===c)return this._message("mdi:compass-outline",Se(a,"empty.training_status.title"),Se(a,"empty.training_status.subtitle"));const l=void 0!==o?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,o):void 0,d=void 0!==c?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:Se(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:Se(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:Se(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:Se(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,c):void 0,u="on"===n?.state;return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:compass-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_status.title")}</div>
            <div class="subtitle">${d?.label??l?.label??""}</div>
          </div>
        </div>

        ${u?W`<div class="alert"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</div>`:K}

        ${d?W`
              <div class="suggestion-row">
                <div class="suggestion-badge" style="background:${d.colorVar}22; color:${d.colorVar}">
                  <ha-icon icon="${d.icon}"></ha-icon>
                </div>
                <div class="suggestion-text">
                  <div class="suggestion-label">${Se(a,"stat.training_suggestion")}</div>
                  <div class="suggestion-value" style="color:${d.colorVar}">${d.label}</div>
                </div>
              </div>
            `:K}

        ${void 0!==o&&l?W`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${Re(o,l.colorVar,52,6)}
                  <div class="ring-value" style="color:${l.colorVar}">${Math.round(o)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${Se(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${l.colorVar}">${l.label}</div>
                </div>
              </div>
            `:K}
      </ha-card>
    `}};ia.styles=[Ee,je,n`
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
    `],e([ve()],ia.prototype,"_config",void 0),ia=e([ue("suunto-training-status-card")],ia);const sa=new Set(["unknown","unavailable",""]);function ra(e){return Math.max(0,Math.min(100,e))}function na(e,t,a,i){const s=(i-90)*Math.PI/180;return[e+a*Math.cos(s),t+a*Math.sin(s)]}let oa=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("lifetime_distance"),n=i("lifetime_days"),o=i("acwr"),c=i("workouts_7d"),l=i("readiness"),d=i("workouts_recent"),u=d?.attributes.workouts??[],p=[s,o,c,l].some(e=>e&&!sa.has(e.state));if(!p&&0===u.length)return this._message("mdi:radar",Se(a,"empty.training_profile.title"),Se(a,"empty.training_profile.subtitle"));const h=e=>e&&!sa.has(e.state)?Number(e.state):0,m=h(r),v=h(n),g=v>0?m/v*7:0,y=g>0?ra(h(s)/(1.4*g)*100):0,_=ra(h(o)/1.5*100),f=ra(h(c)/7*100),b=ra(h(l)),w=new Set(u.map(e=>e.activity).filter(Boolean)).size,k=ra(w/5*100),x=[{label:Se(a,"stat.volume"),value:y},{label:Se(a,"stat.intensity"),value:_},{label:Se(a,"stat.consistency"),value:f},{label:Se(a,"stat.recovery"),value:b},{label:Se(a,"stat.variety"),value:k}],$=[...x].sort((e,t)=>t.value-e.value)[0],z=[...x].sort((e,t)=>e.value-t.value)[0],S=130,A=128,C=360/x.length,T=[.25,.5,.75,1].map(e=>{const t=x.map((t,a)=>na(S,A,84*e,C*a).join(",")).join(" ");return G`<polygon class="radar-grid" points=${t}></polygon>`}),E=x.map((e,t)=>{const[a,i]=na(S,A,84,C*t);return G`<line class="radar-axis" x1=${S} y1=${A} x2=${a} y2=${i}></line>`}),j=x.map((e,t)=>na(S,A,84*e.value/100,C*t)),N=G`<polygon class="radar-fill" points=${j.map(e=>e.join(",")).join(" ")}></polygon>`,R=j.map(([e,t])=>G`<circle class="radar-vertex" cx=${e} cy=${t} r="3.2"></circle>`),M=x.map((e,t)=>{const a=C*t,[i,s]=na(S,A,104.16,a);let r="middle";return a>10&&a<170&&(r="start"),a>190&&a<350&&(r="end"),G`
        <text class="radar-label" x=${i} y=${s-5} text-anchor=${r}>${e.label}</text>
        <text class="radar-value" x=${i} y=${s+7} text-anchor=${r}>${Math.round(e.value)}</text>
      `});return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:radar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_profile.title")}</div>
            <div class="subtitle">${Se(a,"card.training_profile.subtitle")}</div>
          </div>
        </div>

        <div class="radar-wrap">
          <svg class="radar-svg" viewBox="0 0 260 260">
            ${T}${E}${N}${R}${M}
          </svg>
        </div>

        <div class="radar-summary">
          ${Se(a,"profile.summary",{strong:$.label,light:z.label})}
        </div>
      </ha-card>
    `}};oa.styles=[Ee,je,n`
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
    `],e([ve()],oa.prototype,"_config",void 0),oa=e([ue("suunto-training-profile-card")],oa);const ca=new Set(["unknown","unavailable",""]),la=100,da=[[0,0],[26,0],[32,-3],[38,0],[44,0],[47,5],[50,-22],[53,8],[56,-2],[60,0],[66,0],[70,-5],[74,0],[100,0]],ua=300;let pa=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-heart-rate-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.current_hr?a.states[t.current_hr]:void 0;if(!i||ca.has(i.state))return this._message("mdi:heart-pulse",Se(a,"empty.heart_rate.title"));const s=Math.round(Number(i.state)),r=60/s,n=[];for(let e=0;e<=ua;e+=10)n.push(G`<line class="hr-grid-line ${e%50==0?"major":""}" x1=${e} y1="0" x2=${e} y2=${64}></line>`);for(let e=0;e<=64;e+=10)n.push(G`<line class="hr-grid-line ${e%50==0?"major":""}" x1="0" y1=${e} x2=${ua} y2=${e}></line>`);return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge hr-icon-badge">
            <ha-icon class="hr-beat" style="animation-duration:${r}s" icon="mdi:heart"></ha-icon>
          </div>
          <div class="title-block">
            <div class="title">${Se(a,"card.heart_rate.title")}</div>
          </div>
        </div>

        <div class="hr-strip-wrap">
          <svg class="hr-strip" viewBox="0 0 ${ua} ${64}" preserveAspectRatio="none">
            ${n}
            <path
              class="hr-trace hr-scroll"
              d=${function(){const e=[];for(let t=Math.floor(-1)*la;t<=400;t+=la)for(const[a,i]of da)e.push(`${t+a},${32+i}`);return"M"+e.join(" L")}()}
              style="animation-duration:${r}s; --drift-distance:-${la}px"
            ></path>
            <text class="hr-corner-value" x="6" y="58">${s} bpm</text>
          </svg>
        </div>
      </ha-card>
    `}};pa.styles=[Ee,je,n`
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
    `],e([ve()],pa.prototype,"_config",void 0),pa=e([ue("suunto-heart-rate-card")],pa);const ha=new Set(["unknown","unavailable",""]),ma=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];function va(e){if(e)for(const[t,a]of ma)if(t.test(e))return a;return"personality.activity.other"}function ga(e){return Math.max(0,Math.min(99,Math.round(e)))}let ya=class extends Te{constructor(){super(...arguments),this._showHelp=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-player-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl"),r=i("readiness"),n=i("workouts_30d"),o=i("form_tsb"),c=i("estimated_vo2max")??i("vo2max"),l=i("workouts_recent"),d=i("lifetime_by_activity"),u=[s,r,n].some(e=>e&&!ha.has(e.state));if(!u)return this._message("mdi:cards",Se(a,"empty.player.title"),Se(a,"empty.player.subtitle"));const p=e=>e&&!ha.has(e.state)?Number(e.state):0,h=l?.attributes.workouts??[],m=h.map(e=>e.tss).filter(e=>"number"==typeof e),v=m.length?m.reduce((e,t)=>e+t,0)/m.length:0,g=[{code:"STA",value:ga(p(s)/100*99),helpKey:"player.help.sta"},{code:"PWR",value:ga(v/150*99),helpKey:"player.help.pwr"},{code:"REC",value:ga(p(r)),helpKey:"player.help.rec"},{code:"CON",value:ga(p(n)/20*99),helpKey:"player.help.con"},{code:"END",value:ga((p(c)-20)/40*99),helpKey:"player.help.end"},{code:"FRM",value:ga((p(o)+30)/50*99),helpKey:"player.help.frm"}],y=ga(g.reduce((e,t)=>e+t.value,0)/g.length),_=function(e){return e>=85?{key:"player.tier.legendary",colorVar:"var(--player-legendary)"}:e>=70?{key:"player.tier.gold",colorVar:"var(--player-gold)"}:e>=50?{key:"player.tier.silver",colorVar:"var(--player-silver)"}:{key:"player.tier.bronze",colorVar:"var(--player-bronze)"}}(y),f=[...d?.attributes.activities??[]].sort((e,t)=>t.workouts-e.workouts)[0],b=f?.activity??h[0]?.activity;let w="";try{const e=ke(a,this._configuredDeviceId);w=a.devices?.[e]?.name_by_user||a.devices?.[e]?.name||""}catch{}return W`
      <ha-card class="static player-card" style="--tier-color:${_.colorVar}">
        <div class="pc-top">
          <div class="pc-rating">
            <div class="num">${y}</div>
            <div class="tier">${Se(a,_.key)}</div>
          </div>
          <div class="pc-top-right">
            <button
              class="pc-help-btn"
              aria-label=${Se(a,"player.help.title")}
              @click=${()=>{this._showHelp=!this._showHelp}}
            >
              <ha-icon icon="mdi:help-circle-outline"></ha-icon>
            </button>
            <div class="pc-badge">
              <span class="dot"><ha-icon .icon=${qe(b)}></ha-icon></span>
              ${b??""}
            </div>
          </div>
        </div>

        <div class="pc-avatar-wrap">
          <div class="pc-avatar"><ha-icon .icon=${qe(b)}></ha-icon></div>
        </div>
        ${w?W`<div class="pc-name">${w}</div>`:K}
        <div class="pc-archetype">${Se(a,"player.archetype",{activity:Se(a,va(b))})}</div>

        <div class="pc-stats">
          ${g.map(e=>W`
              <div class="pc-stat">
                <span class="k">${e.code}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${e.value}%"></div></div>
                <span class="v">${e.value}</span>
              </div>
            `)}
        </div>

        ${this._showHelp?W`
              <div
                class="pc-help-overlay"
                @click=${()=>{this._showHelp=!1}}
              >
                <div class="pc-help-title">${Se(a,"player.help.title")}</div>
                ${g.map(e=>{const[t,i]=Se(a,e.helpKey).split(" · ");return W`<div class="pc-help-row"><b>${t}</b> · ${i}</div>`})}
                <div class="pc-help-disclaimer">${Se(a,"player.help.disclaimer")}</div>
              </div>
            `:K}
      </ha-card>
    `}};ya.styles=[Ee,je,n`
      :host {
        --player-bronze: #b5834a;
        --player-silver: #9fabb5;
        --player-gold: #d98a1d;
        --player-legendary: #a259d9;
      }
      :host(.dark) {
        --player-bronze: #c99a63;
        --player-silver: #c3ccd3;
        --player-gold: #f5b44e;
        --player-legendary: #c084f5;
      }
      .player-card {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--tier-color) 20%, transparent), transparent 60%),
          var(--ha-card-background, var(--card-background-color));
        border: 1.5px solid color-mix(in srgb, var(--tier-color) 55%, transparent);
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--tier-color) 12%, transparent);
      }
      .pc-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .pc-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1;
      }
      .pc-rating .num {
        font-size: 2.4rem;
        font-weight: 800;
        color: var(--tier-color);
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
      }
      .pc-rating .tier {
        font-size: 0.58rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--tier-color);
        margin-top: 2px;
      }
      .pc-top-right {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .pc-help-btn {
        background: none;
        border: none;
        padding: 2px;
        margin: 0;
        cursor: pointer;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        opacity: 0.75;
      }
      .pc-help-btn:hover {
        opacity: 1;
        color: var(--tier-color);
      }
      .pc-help-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .pc-help-overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 8, 5, 0.96);
        border-radius: 16px;
        padding: 18px 20px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        cursor: pointer;
        overflow-y: auto;
      }
      .pc-help-title {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--tier-color);
        margin-bottom: 2px;
      }
      .pc-help-row {
        font-size: 0.74rem;
        color: #d8d4cc;
        line-height: 1.4;
      }
      .pc-help-row b {
        color: var(--tier-color);
        margin-right: 2px;
      }
      .pc-help-disclaimer {
        font-size: 0.64rem;
        color: #8a8478;
        margin-top: 6px;
        font-style: italic;
        line-height: 1.4;
      }
      .pc-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--sc-chip-bg);
        border-radius: 999px;
        padding: 5px 10px 5px 6px;
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }
      .pc-badge .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--tier-color) 22%, transparent);
        color: var(--tier-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pc-badge .dot ha-icon {
        --mdc-icon-size: 13px;
      }
      .pc-avatar-wrap {
        display: flex;
        justify-content: center;
        margin: 4px 0 2px;
      }
      .pc-avatar {
        width: 92px;
        height: 92px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 30%, color-mix(in srgb, var(--tier-color) 18%, transparent), transparent 75%);
        border: 2px solid color-mix(in srgb, var(--tier-color) 50%, transparent);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--tier-color);
      }
      .pc-avatar ha-icon {
        --mdc-icon-size: 38px;
      }
      .pc-name {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
      }
      .pc-archetype {
        text-align: center;
        font-size: 0.72rem;
        color: var(--tier-color);
        font-weight: 600;
        letter-spacing: 0.02em;
        margin-bottom: 4px;
      }
      .pc-stats {
        margin-top: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 18px;
        padding-top: 12px;
        border-top: 1px solid color-mix(in srgb, var(--tier-color) 20%, var(--divider-color));
      }
      .pc-stat {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .pc-stat .k {
        width: 30px;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--secondary-text-color);
      }
      .pc-stat .v {
        width: 22px;
        font-size: 0.78rem;
        font-weight: 700;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .pc-stat .bar-track {
        flex: 1;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .pc-stat .bar-fill {
        height: 100%;
        border-radius: 2px;
        background: var(--tier-color);
      }
    `],e([ve()],ya.prototype,"_config",void 0),e([ve()],ya.prototype,"_showHelp",void 0),ya=e([ue("suunto-player-card")],ya);const _a=new Set(["unknown","unavailable",""]);let fa=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-achievements-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 6}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_workouts"),r=i("lifetime_distance"),n=i("lifetime_time"),o=i("lifetime_days"),c=i("lifetime_energy"),l=i("lifetime_by_activity"),d=i("estimated_vo2max")??i("vo2max"),u=i("training_records");if(!s&&!r)return this._message("mdi:trophy-outline",Se(a,"empty.achievements.title"),Se(a,"empty.achievements.subtitle"));const p=(h=a.language,e=>Math.round(e).toLocaleString(h));var h;const m=function(e){return t=>`${Math.round(t).toLocaleString(e)} km`}(a.language),v=e=>e&&!_a.has(e.state)?Number(e.state):0,g=l?.attributes.activities??[],y=g.filter(e=>e.workouts>0).length,_=[...g].sort((e,t)=>t.workouts-e.workouts)[0],f=u&&!_a.has(u.state)?Number(u.state):0,b=[{headingKey:"achievements.category.workouts",badges:[{icon:"💯",nameKey:"achievements.badge.century_club",unlocked:v(s)>=100,current:v(s),target:100,format:p},{icon:"🎖️",nameKey:"achievements.badge.workouts_250",unlocked:v(s)>=250,current:v(s),target:250,format:p},{icon:"🏅",nameKey:"achievements.badge.workouts_500",unlocked:v(s)>=500,current:v(s),target:500,format:p},{icon:"👑",nameKey:"achievements.badge.workouts_1000",unlocked:v(s)>=1e3,current:v(s),target:1e3,format:p}]},{headingKey:"achievements.category.distance",badges:[{icon:"🚴",nameKey:"achievements.badge.distance_1000",unlocked:v(r)>=1e3,current:v(r),target:1e3,format:m},{icon:"🗺️",nameKey:"achievements.badge.distance_5000",unlocked:v(r)>=5e3,current:v(r),target:5e3,format:m},{icon:"🌍",nameKey:"achievements.badge.around_globe",unlocked:v(r)>=40075,current:v(r),target:40075,format:m}]},{headingKey:"achievements.category.time",badges:[{icon:"⏱️",nameKey:"achievements.badge.hours_100",unlocked:v(n)>=100,current:v(n),target:100,format:p},{icon:"⌛",nameKey:"achievements.badge.hours_500",unlocked:v(n)>=500,current:v(n),target:500,format:p}]},{headingKey:"achievements.category.days",badges:[{icon:"📅",nameKey:"achievements.badge.days_100",unlocked:v(o)>=100,current:v(o),target:100,format:p},{icon:"🗓️",nameKey:"achievements.badge.full_year",unlocked:v(o)>=365,current:v(o),target:365,format:p}]},{headingKey:"achievements.category.energy",badges:[{icon:"🔥",nameKey:"achievements.badge.energy_100k",unlocked:v(c)>=1e5,current:v(c),target:1e5,format:p},{icon:"☄️",nameKey:"achievements.badge.energy_1m",unlocked:v(c)>=1e6,current:v(c),target:1e6,format:p}]},{headingKey:"achievements.category.variety",badges:[{icon:"🎽",nameKey:"achievements.badge.multi_sport",unlocked:y>=3,current:y,target:3,format:p},{icon:"🧭",nameKey:"achievements.badge.jack_of_all_trades",unlocked:y>=5,current:y,target:5,format:p},..._?[{icon:"⭐",nameKey:"achievements.badge.specialist",nameVars:{activity:_.activity},unlocked:_.workouts>=100,current:_.workouts,target:100,format:p}]:[]]},{headingKey:"achievements.category.fitness",badges:[{icon:"💪",nameKey:"achievements.badge.solid_engine",unlocked:v(d)>=40,current:v(d),target:40,format:p},{icon:"⚡",nameKey:"achievements.badge.elite_engine",unlocked:v(d)>=55,current:v(d),target:55,format:p},{icon:"🔥",nameKey:"achievements.badge.consistency_king",unlocked:f>=14,current:f,target:14,format:p}]}],w=b.flatMap(e=>e.badges),k=w.filter(e=>e.unlocked).length,x=u?.attributes??{},$=[{icon:"🔥",labelKey:"records.streak",entry:f>0?{value:f}:void 0,render:e=>Ae(a,e.value,"records.streak_days_one","records.streak_days_other")},{icon:"⚡",labelKey:"records.pace",entry:x.fastest_pace_min_km,render:e=>`${Ue(e.value)} /km`},{icon:"🏔️",labelKey:"records.climb",entry:x.biggest_climb_m,render:e=>`${Math.round(e.value)} m`},{icon:"⏳",labelKey:"records.workout",entry:x.longest_workout_min,render:e=>{const t=Ke(e.value);return`${t.value} ${t.unit}`}},{icon:"📏",labelKey:"records.distance",entry:x.farthest_workout_km,render:e=>`${e.value} km`},{icon:"🥵",labelKey:"records.session",entry:x.hardest_workout_tss,render:e=>`${e.value} TSS`}];return W`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.achievements.title")}</div>
            <div class="subtitle">${Se(a,"card.achievements.subtitle",{unlocked:k,total:w.length})}</div>
          </div>
        </div>

        <div class="ach-list">
          ${b.map(e=>e.badges.length?W`
                  ${function(e,t){return W`<div class="cat">${Se(e,t)}</div>`}(a,e.headingKey)}
                  ${e.badges.map(e=>this._badgeRow(a,e))}
                `:K)}
          ${$.some(e=>e.entry)?W`
                <div class="cat">${Se(a,"achievements.category.records")}</div>
                ${$.filter(e=>e.entry).map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
              `:K}
        </div>
      </ha-card>
    `}_badgeRow(e,t){const a=Math.max(0,Math.min(100,t.current/t.target*100));return W`
      <div class="arow ${t.unlocked?"unlocked":"locked"}">
        <div class="ic">${t.icon}</div>
        <div class="info">
          <div class="name">${Se(e,t.nameKey,t.nameVars)}</div>
          ${t.unlocked?K:W`
                <div class="prog-track"><div class="prog-fill" style="width:${a}%"></div></div>
                <div class="prog-text">${t.format(t.current)} / ${t.format(t.target)}</div>
              `}
        </div>
        ${t.unlocked?W`<div class="check">✓</div>`:K}
      </div>
    `}_recordRow(e,t,a,i,s){const r=i.start_time?Qe(new Date(i.start_time),e.language):void 0;return W`
      <div class="arow record">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${Se(e,a)}</div>
          <div class="prog-text">
            ${i.activity?`${i.activity} · `:""}${r??""}
          </div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};fa.styles=[Ee,je,n`
      .ach-list {
        max-height: 480px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .cat {
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        padding: 12px 0 6px;
        border-top: 1px solid var(--divider-color);
        margin-top: 4px;
      }
      .cat:first-child {
        border-top: none;
        margin-top: 0;
        padding-top: 0;
      }
      .arow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .arow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
      }
      .arow.unlocked .ic,
      .arow.record .ic {
        background: var(--sc-amber-bg);
      }
      .arow.locked .ic {
        background: var(--sc-chip-bg);
        filter: grayscale(1);
        opacity: 0.55;
      }
      .arow .info {
        flex: 1;
        min-width: 0;
      }
      .arow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .arow.locked .name {
        color: var(--secondary-text-color);
      }
      .arow .prog-track {
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        margin-top: 4px;
        overflow: hidden;
      }
      .arow .prog-fill {
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, var(--sc-pulse), var(--sc-amber));
      }
      .arow .prog-text {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .arow .check {
        flex: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--sc-amber);
        color: var(--card-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: 800;
      }
      .arow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `],e([ve()],fa.prototype,"_config",void 0),fa=e([ue("suunto-achievements-card")],fa);const ba=new Set(["unknown","unavailable",""]);function wa(e){return 500*e*e}let ka=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-level-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_energy"),r=i("lifetime_workouts");if(!s||ba.has(s.state))return this._message("mdi:trophy-award",Se(a,"empty.level.title"),Se(a,"empty.level.subtitle"));const n=r&&!ba.has(r.state)?Number(r.state):0,o=Math.round(Number(s.state)/10),c=function(e){return Math.floor(Math.sqrt(e/500))}(o),l=wa(c),d=wa(c+1),u=Math.max(0,Math.min(1,(o-l)/(d-l))),p=d-o,h=2*Math.PI*56;return W`
      <ha-card class="static level-card">
        <div class="lvl-ring-wrap">
          <svg width="128" height="128" viewBox="0 0 128 128">
            ${G`<circle cx="64" cy="64" r=${56} class="ring-track"></circle>`}
            ${G`<circle cx="64" cy="64" r=${56} class="ring-fill" stroke-dasharray=${h} stroke-dashoffset=${h*(1-u)}></circle>`}
          </svg>
          <div class="lvl-center">
            <div class="n">${c}</div>
            <div class="l">${Se(a,"level.label")}</div>
          </div>
        </div>
        <div class="lvl-title">${Se(a,function(e){return e>=500?"level.title.legend":e>=200?"level.title.veteran":e>=50?"level.title.grinder":"level.title.novice"}(n))}</div>
        <div class="lvl-sub">${Se(a,"level.subtitle")}</div>
        <div class="xp-bar-wrap">
          <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${100*u}%"></div></div>
          <div class="xp-labels">
            <span>${Se(a,"level.xp_total",{xp:o.toLocaleString(a.language)})}</span>
            <span>${Se(a,"level.xp_to_next",{xp:p.toLocaleString(a.language),level:c+1})}</span>
          </div>
        </div>
        <div class="lvl-source">${Se(a,"level.source",{count:n.toLocaleString(a.language)})}</div>
      </ha-card>
    `}};ka.styles=[Ee,je,n`
      .level-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 20px 20px 18px;
      }
      .lvl-ring-wrap {
        position: relative;
        width: 128px;
        height: 128px;
      }
      .lvl-ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-track {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 10;
      }
      .ring-fill {
        fill: none;
        stroke: var(--sc-amber);
        stroke-width: 10;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.4s ease;
      }
      .lvl-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .lvl-center .n {
        font-size: 2.1rem;
        font-weight: 800;
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .lvl-center .l {
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        color: var(--secondary-text-color);
        font-weight: 700;
        margin-top: 2px;
      }
      .lvl-title {
        font-size: 1rem;
        font-weight: 700;
      }
      .lvl-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: -8px;
      }
      .xp-bar-wrap {
        width: 100%;
      }
      .xp-bar-track {
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .xp-bar-fill {
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(90deg, var(--sc-pulse), var(--sc-amber));
      }
      .xp-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        margin-top: 5px;
        font-variant-numeric: tabular-nums;
      }
      .lvl-source {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-align: center;
      }
    `],e([ve()],ka.prototype,"_config",void 0),ka=e([ue("suunto-level-card")],ka);const xa=[[/cycl|bik/i,"cycling"],[/run/i,"running"],[/trek|hik/i,"trekking"],[/walk/i,"walking"],[/gym|strength|weight/i,"gym"],[/swim/i,"swim"],[/ski/i,"ski"],[/row/i,"row"]];const $a={cycling:"var(--sc-pulse)",running:"var(--sc-bad)",trekking:"var(--sc-good)",walking:"var(--sc-zone-1)",gym:"var(--sc-zone-4)",swim:"var(--sc-sleep-light)",ski:"var(--sc-sleep-deep)",row:"var(--sc-sleep-rem)",other:"var(--sc-amber)"},za=["var(--sc-pulse)","var(--sc-amber)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let Sa=class extends Te{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-class-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return K;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="lifetime_by_activity"]?a.states[t[s]]:void 0;var s;const r=i?.attributes.activities??[],n=r.reduce((e,t)=>e+t.workouts,0);if(!i||0===n)return this._message("mdi:sword-cross",Se(a,"empty.class.title"),Se(a,"empty.class.subtitle"));const o=[...r].sort((e,t)=>t.workouts-e.workouts).filter(e=>e.workouts>0),c=o[0],l=function(e){if(e)for(const[t,a]of xa)if(t.test(e))return a;return"other"}(c?.activity),d=$a[l],u=o.slice(0,5),p=o.slice(5).reduce((e,t)=>e+t.workouts,0);return W`
      <ha-card class="static" style="--class-accent:${d}">
        <div class="class-emblem"><ha-icon .icon=${qe(c?.activity)}></ha-icon></div>
        <div class="class-name">${Se(a,`class.name.${l}`)}</div>
        <div class="class-tag">${Se(a,"class.tag",{activity:c?.activity??""})}</div>
        <div class="class-flavor">${Se(a,`class.flavor.${l}`)}</div>
        <div class="class-build">
          ${u.map((e,t)=>{const a=Math.round(e.workouts/n*100);return W`
              <div class="cb-row">
                <span class="cn">${e.activity}</span>
                <div class="ct"><div class="cf" style="width:${a}%;background:${0===t?d:za[t%za.length]}"></div></div>
                <span class="cp">${a}%</span>
              </div>
            `})}
          ${p>0?W`<div class="cb-rest">${Se(a,"class.rest",{pct:Math.round(p/n*100)})}</div>`:K}
        </div>
      </ha-card>
    `}};Sa.styles=[Ee,je,n`
      ha-card.static {
        padding: 20px 18px 18px;
        border-top: 3px solid var(--class-accent);
      }
      .class-emblem {
        width: 64px;
        height: 64px;
        clip-path: polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%);
        background: color-mix(in srgb, var(--class-accent) 20%, transparent);
        color: var(--class-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
      }
      .class-emblem ha-icon {
        --mdc-icon-size: 30px;
      }
      .class-name {
        font-size: 1.35rem;
        font-weight: 800;
        letter-spacing: -0.01em;
      }
      .class-tag {
        font-size: 0.74rem;
        color: var(--class-accent);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }
      .class-flavor {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }
      .class-build {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .cb-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cb-row .cn {
        width: 76px;
        flex: none;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cb-row .ct {
        flex: 1;
        height: 6px;
        border-radius: 3px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .cb-row .cf {
        height: 100%;
        border-radius: 3px;
      }
      .cb-row .cp {
        width: 32px;
        flex: none;
        text-align: right;
        font-size: 0.68rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .cb-rest {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
    `],e([ve()],Sa.prototype,"_config",void 0),Sa=e([ue("suunto-class-card")],Sa),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0},{type:"suunto-lifetime-card",name:"Suunto - Lifetime Totals",description:"Total distance, time, energy, workouts and active days since you started.",preview:!0},{type:"suunto-recent-workouts-card",name:"Suunto - Recent Workouts",description:"A scrollable log of your last 15 workouts - activity, distance and duration.",preview:!0},{type:"suunto-elevation-card",name:"Suunto - Elevation & Climbing",description:"Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",preview:!0},{type:"suunto-location-card",name:"Suunto - Start Location",description:"Where your last workout started, with a one-tap link to open it in Maps.",preview:!0},{type:"suunto-fitness-card",name:"Suunto - Fitness",description:"VO2max, estimated VO2max and fitness age, with when they were last measured.",preview:!0},{type:"suunto-last-workout-tile-card",name:"Suunto - Last Workout (compact)",description:"A single-row summary of your last workout, for denser dashboards.",preview:!0},{type:"suunto-pmc-card",name:"Suunto - Performance Management",description:"CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",preview:!0},{type:"suunto-recovery-trends-card",name:"Suunto - Recovery Trends",description:"Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",preview:!0},{type:"suunto-weekly-volume-card",name:"Suunto - Weekly Volume",description:"A 12-week bar chart of your training distance, with the average and total.",preview:!0},{type:"suunto-hr-curve-card",name:"Suunto - Heart Rate Curve",description:"Today's 24/7 heart rate curve, from your watch's continuous heart rate tracking.",preview:!0},{type:"suunto-sleep-trends-card",name:"Suunto - Sleep Trends",description:"Sleep duration and quality over the last 30 nights.",preview:!0},{type:"suunto-weekly-goal-card",name:"Suunto - Weekly Goal",description:"This week's distance against a target you set.",preview:!0},{type:"suunto-streak-card",name:"Suunto - Activity Streak",description:"How many consecutive days you've been active.",preview:!0},{type:"suunto-just-finished-card",name:"Suunto - Just Finished",description:"Lights up right after your watch syncs a new workout, then goes quiet again.",preview:!0},{type:"suunto-activity-trends-card",name:"Suunto - Activity Trends",description:"Daily steps and energy over the last 14 days.",preview:!0},{type:"suunto-recovery-balance-trend-card",name:"Suunto - Recovery Balance Trend",description:"Recovery balance and stress level over the last 14 days.",preview:!0},{type:"suunto-readiness-trend-card",name:"Suunto - Readiness Trend",description:"Your readiness score over the last 30 days.",preview:!0},{type:"suunto-activity-calendar-card",name:"Suunto - Activity Calendar",description:"A GitHub-style heatmap of your active days over the last 6 weeks.",preview:!0},{type:"suunto-workout-comparison-card",name:"Suunto - Workout Comparison",description:"Your last workout vs the previous one of the same activity, side by side.",preview:!0},{type:"suunto-milestones-card",name:"Suunto - By The Numbers",description:"Your lifetime distance and energy converted into fun equivalents.",preview:!0},{type:"suunto-athlete-profile-card",name:"Suunto - Training Personality",description:"Your dominant sport, schedule pattern and time-of-day, computed from your history.",preview:!0},{type:"suunto-pace-trend-card",name:"Suunto - Pace Trend",description:"Whether your pace is improving over your recent same-activity workouts.",preview:!0},{type:"suunto-lap-splits-card",name:"Suunto - Lap Splits",description:"Per-lap duration, distance and pace from your last workout, with the fastest lap highlighted.",preview:!0},{type:"suunto-training-effect-trend-card",name:"Suunto - Training Effect Trend",description:"Peak training effect and peak EPOC over the last 30 days.",preview:!0},{type:"suunto-training-status-card",name:"Suunto - Training Status",description:"Today's training suggestion and readiness in one place, with an unusual-recovery warning.",preview:!0},{type:"suunto-training-profile-card",name:"Suunto - Training Profile",description:"A five-axis radar of volume, intensity, consistency, recovery and variety, at a glance.",preview:!0},{type:"suunto-heart-rate-card",name:"Suunto - Heart Rate",description:"A clinical-monitor-style ECG trace, its beat paced by your actual current heart rate.",preview:!0},{type:"suunto-player-card",name:"Suunto - Player Card",description:"A FIFA-style trading card: an overall rating, tier and 6 stat bars computed from your training data.",preview:!0},{type:"suunto-achievements-card",name:"Suunto - Achievements",description:"19 unlockable badges plus your all-time personal records - fastest pace, biggest climb and more.",preview:!0},{type:"suunto-level-card",name:"Suunto - Level & XP",description:"A game-style level and XP bar powered by your lifetime training load.",preview:!0},{type:"suunto-class-card",name:"Suunto - Class",description:"An RPG character class derived from your training mix, with the build breakdown behind it.",preview:!0}),console.info("%c SUUNTO-CARDS %c 38 cards loaded ","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
