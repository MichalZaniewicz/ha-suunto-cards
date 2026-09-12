function e(e,t,a,i){var s,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,a,n):s(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new r(a,e,i)},o=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,v=g?g.emptyScript:"",y=h.reactiveElementPolyfillSupport,_=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},b=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);s?.call(this,t),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(a)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:f).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i;const r=s.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,a,i=!1,s){if(void 0!==e){const r=this.constructor;if(!1===i&&(s=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??b)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[_("elementProperties")]=new Map,k[_("finalized")]=new Map,y?.({ReactiveElement:k}),(h.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=e=>e,z=x.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+T,E=`<${A}>`,N=document,j=()=>N.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,R="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,V=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,q=/"/g,O=/^(?:script|style|textarea|title)$/i,B=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),I=B(1),W=B(2),K=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),U=new WeakMap,Z=N.createTreeWalker(N,129);function J(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Y=(e,t)=>{const a=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=P;for(let t=0;t<a;t++){const a=e[t];let o,l,c=-1,d=0;for(;d<a.length&&(n.lastIndex=d,l=n.exec(a),null!==l);)d=n.lastIndex,n===P?"!--"===l[1]?n=F:void 0!==l[1]?n=V:void 0!==l[2]?(O.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=s??P,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?H:'"'===l[3]?q:L):n===q||n===L?n=H:n===F||n===V?n=P:(n=H,s=void 0);const u=n===H&&e[t+1].startsWith("/>")?" ":"";r+=n===P?a+E:c>=0?(i.push(o),a.slice(0,c)+C+a.slice(c)+T+u):a+T+(-2===c?t:u)}return[J(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[l,c]=Y(e,t);if(this.el=X.createElement(l,a),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Z.nextNode())&&o.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(C)){const t=c[r++],a=i.getAttribute(e).split(T),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:n[2],strings:a,ctor:"."===n[1]?ie:"?"===n[1]?se:"@"===n[1]?re:ae}),i.removeAttribute(e)}else e.startsWith(T)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(O.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=z?z.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],j()),Z.nextNode(),o.push({type:2,index:++s});i.append(e[t],j())}}}else if(8===i.nodeType)if(i.data===A)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)o.push({type:7,index:s}),e+=T.length-1}s++}}static createElement(e,t){const a=N.createElement("template");return a.innerHTML=e,a}}function Q(e,t,a=e,i){if(t===K)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const r=M(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);Z.currentNode=i;let s=Z.nextNode(),r=0,n=0,o=a[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new te(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new ne(s,this,e)),this._$AV.push(t),o=a[++n]}r!==o?.index&&(s=Z.nextNode(),r++)}return Z.currentNode=N,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),M(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=X.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new X(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new te(this.O(j()),this.O(j()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=G}_$AI(e,t=this,a,i){const s=this.strings;let r=!1;if(void 0===s)e=Q(this,e,t,0),r=!M(e)||e!==this._$AH&&e!==K,r&&(this._$AH=e);else{const i=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=Q(this,i[a+n],t,n),o===K&&(o=this._$AH[n]),r||=!M(o)||o!==this._$AH[n],o===G?e=G:e!==G&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class se extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class re extends ae{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??G)===K)return;const a=this._$AH,i=e===G&&a!==G||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==G&&(a===G||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const oe=x.litHtmlPolyfillSupport;oe?.(X,te),(x.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new te(t.insertBefore(j(),e),e,void 0,a??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b},me=(e=pe,t,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];t.call(this,a),this.requestUpdate(i,s,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,a)=>"object"==typeof a?me(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return he({...e,state:!0,attribute:!1})}var ve,ye;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ve||(ve={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ye||(ye={}));var _e=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s};const fe="suunto_app";class be extends Error{constructor(e,t){super(e),this.code=e,this.deviceId=t}}function we(e){const t=new Set;for(const a of Object.values(e.entities??{}))a.platform===fe&&a.device_id&&t.add(a.device_id);return[...t]}function ke(e,t){const a=we(e);if(t){if(!a.includes(t))throw new be("device_missing",t);return t}if(1===a.length)return a[0];if(0===a.length)throw new be("no_device");throw new be("multiple_devices")}function xe(e,t){const a={};for(const i of Object.values(e.entities??{}))i.device_id===t&&i.platform===fe&&i.translation_key&&(a[i.translation_key]=i.entity_id);return a}const $e={"stat.distance":"Distance","stat.duration":"Duration","stat.avg_speed":"Avg speed","stat.avg_pace":"Avg pace","stat.avg_hr":"Avg HR","stat.max_hr":"Max HR","stat.training_effect":"Training effect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Feeling","stat.energy":"Energy","stat.time":"Time","stat.workouts":"Workouts","stat.steps":"Steps","stat.heart_rate":"Heart rate","stat.quality":"Quality","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Resting HR","stat.resting_hr_delta":"Resting HR ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stress level","stat.recovery_window":"Recovery time","stat.ctl":"CTL · fitness","stat.atl":"ATL · fatigue","stat.tsb":"TSB · form","stat.readiness":"Readiness","stat.recovery_balance":"Recovery balance","stat.training_suggestion":"Today's suggestion","stat.volume":"Volume","stat.intensity":"Intensity","stat.consistency":"Consistency","stat.recovery":"Recovery","stat.variety":"Variety","card.hr_zones.title":"Heart Rate Zones","card.hr_zones.last_workout":"Last workout","card.sleep_readiness.title":"Sleep & Readiness","card.sleep_readiness.subtitle_no_wake":"{duration} slept","card.sleep_readiness.subtitle_with_wake":"{duration} slept · woke {time}","card.recovery.title":"Recovery","card.training_load.title":"Training Load","card.training_load.subtitle_fallback":"Fitness (CTL) trend","card.week_stats.title":"This Week & Lifetime","card.week_stats.subtitle":"Last 7 days","card.week_stats.lifetime_title":"Lifetime by activity","card.today.title":"Today","card.today.subtitle":"Live from your watch","card.training_status.title":"Training Status","card.training_profile.title":"Training Profile","card.training_profile.subtitle":"Your training, at a glance","card.heart_rate.title":"Heart Rate","empty.last_workout.title":"No recent workout","empty.last_workout.subtitle":"Sync your watch with the Suunto app to see it here.","empty.hr_zones.title":"No zone data","empty.hr_zones.subtitle":"Your next outdoor workout with a heart-rate strap will fill this in.","empty.sleep_readiness.title":"No sleep data yet","empty.sleep_readiness.subtitle":"Wear your watch to bed to see it here.","empty.recovery.title":"No recovery data yet","empty.training_load.title":"Building your training load","empty.training_load.subtitle":"Needs a bit of workout history to compute - check back after a few sessions.","empty.week_stats.title":"No workout history yet","empty.today.title":"No live data yet","empty.training_status.title":"Not enough data yet","empty.training_status.subtitle":"Needs a bit of training history to compute.","empty.training_profile.title":"Not enough data yet","empty.training_profile.subtitle":"Needs a few more sensors reporting to compute your profile.","empty.heart_rate.title":"No live heart rate yet","empty.loading":"Loading...","empty.generic_error":"Could not load Suunto data.","error.no_device":"No Suunto device found - is the suunto_app integration set up?","error.multiple_devices":'Multiple Suunto devices found - set "device_id" in the card configuration.',"error.device_missing":'Configured device "{device}" has no suunto_app entities.',"band.readiness.great":"Great","band.readiness.fair":"Fair","band.readiness.low":"Low","band.recovery.well":"Well recovered","band.recovery.partial":"Partially recovered","band.recovery.low":"Low recovery","band.recovery.fully":"Fully recovered","band.recovery.recovering":"Recovering · {time} left","band.hrv.low":"HRV low","band.hrv.high":"HRV high","band.hrv.balanced":"HRV balanced","band.form.fresh":"Fresh","band.form.neutral":"Neutral","band.form.fatigued":"Fatigued","band.form.very_fatigued":"Very fatigued","band.acwr.safe":"Safe zone","band.acwr.low":"Low load","band.acwr.high":"High load - injury risk","band.suggestion.hard":"Go for it","band.suggestion.moderate":"Moderate effort","band.suggestion.easy":"Take it easy","band.suggestion.rest":"Rest day","chip.workout_logged_today":"Workout logged today","chip.workout_today":"Workout today","chip.recovering":"Recovering","chip.nap":"{minutes} min nap","chip.nap_earlier":"{minutes} min nap (earlier)","chip.workouts_30d":"{count} workouts in the last 30 days","chip.acwr":"ACWR {value} · {label}","profile.summary":"Strongest on {strong} · lightest on {light}","chip.more_activity_one":"+{count} more activity type","chip.more_activity_other":"+{count} more activity types","chip.unusual_recovery":"Unusual recovery","chip.days_since_one":"{count} day since last workout","chip.days_since_other":"{count} days since last workout","achievement.count_one":"{count} achievement","achievement.count_other":"{count} achievements","achievement.rank":"Rank #{rank} on this route","label.zone":"Zone {n}","label.deep":"Deep","label.light":"Light","label.rem":"REM","editor.auto_detect":"This card auto-detects your Suunto device - no configuration needed.","editor.pick_device":"Multiple Suunto devices were found - pick which one this card should read.","editor.device_label":"Suunto device","editor.units_label":"Units","editor.units_metric":"Metric (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Compact mode","editor.days_label":"Trend window (days)","card.lifetime.title":"Lifetime Totals","card.lifetime.subtitle":"Since you started","stat.active_days":"Active days","empty.lifetime.title":"No lifetime data yet","card.recent_workouts.title":"Recent Workouts","empty.recent_workouts.title":"No recent workouts","card.elevation.title":"Elevation & Climbing","stat.ascent":"Ascent","stat.descent":"Descent","stat.ascent_time":"Ascent time","stat.descent_time":"Descent time","stat.min_altitude":"Min altitude","stat.max_altitude":"Max altitude","stat.ascent_rate":"Ascent rate","empty.elevation.title":"No elevation data","empty.elevation.subtitle":"Only outdoor workouts with a barometer record this.","card.location.title":"Start Location","location.open_in_maps":"Open in Maps","empty.location.title":"No location data","empty.location.subtitle":"Indoor workouts have no GPS start point.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Fitness age","fitness.measured":"Measured {time} · {activity}","empty.fitness.title":"No fitness data yet","empty.fitness.subtitle":"Suunto computes this from running or walking workouts only.","card.pmc.title":"Performance Management","card.pmc.subtitle":"90-day trend","card.recovery_trends.title":"Recovery Trends","card.recovery_trends.subtitle":"{days}-day baseline","empty.recovery_trends.title":"No recovery trend data yet","card.weekly_volume.title":"Weekly Volume","card.weekly_volume.subtitle":"Last 12 weeks","empty.weekly_volume.title":"No weekly volume data yet","stat.average":"Average","stat.total":"Total","card.hr_curve.title":"Heart Rate Curve","card.hr_curve.subtitle":"Last 24 hours","stat.hr_now":"Now","stat.hr_min":"Today's min","stat.hr_max":"Today's max","empty.hr_curve.title":"No live HR data yet","empty.hr_curve.subtitle":"Wear your watch and sync to see today's curve here.","card.sleep_trends.title":"Sleep Trends","card.sleep_trends.subtitle":"Last {days} nights","empty.sleep_trends.title":"No sleep trend data yet","card.weekly_goal.title":"Weekly Goal","card.weekly_goal.subtitle":"{value} of {goal} km","empty.weekly_goal.title":"No weekly distance yet","editor.goal_label":"Weekly goal (km)","card.streak.title":"Activity Streak","card.streak.subtitle":"Last 14 days","streak.window_count_one":"{count} active day","streak.window_count_other":"{count} active days","streak.days_one":"{count} day streak","streak.days_other":"{count} days streak","streak.none":"No active streak - get moving today","empty.streak.title":"No workout history yet","just_finished.title":"Nice work!","just_finished.idle.title":"Waiting for your next workout","just_finished.idle.subtitle":"This lights up right after your watch syncs a new one.","empty.just_finished.title":"No recent workout","card.activity_trends.title":"Activity Trends","card.activity_trends.subtitle":"Last 14 days","empty.activity_trends.title":"No activity trend data yet","card.recovery_balance_trend.title":"Recovery Balance Trend","card.recovery_balance_trend.subtitle":"Last 14 days","empty.recovery_balance_trend.title":"No recovery trend data yet","card.readiness_trend.title":"Readiness Trend","card.readiness_trend.subtitle":"Last 30 days","empty.readiness_trend.title":"No readiness trend data yet","stat.cadence":"Cadence","stat.stride_length":"Stride","stat.pct_hrmax":"% of max HR","stat.sleep_avg_hr":"Sleep avg HR","stat.sleep_min_hr":"Sleep min HR","chip.bedtime":"Bedtime {time}","card.activity_calendar.title":"Activity Calendar","card.activity_calendar.subtitle":"Last 6 weeks","empty.activity_calendar.title":"No workout history yet","activity_calendar.active_days_one":"{count} active day","activity_calendar.active_days_other":"{count} active days","card.workout_comparison.title":"Workout Comparison","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Not enough matching workouts yet","empty.workout_comparison.subtitle":"Do the same activity twice to see a comparison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Duration ({delta})","stat.avg_hr_delta":"Avg HR ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"By The Numbers","card.milestones.subtitle":"Since you started","empty.milestones.title":"No lifetime data yet","stat.earth_laps":"Earth laps","stat.marathons":"Marathons","stat.moon_pct":"% to the Moon","stat.burgers":"Burgers","card.athlete_profile.title":"Training Personality","empty.athlete_profile.title":"Not enough data yet","personality.activity.cycling":"Cyclist","personality.activity.running":"Runner","personality.activity.trekking":"Hiker","personality.activity.walking":"Walker","personality.activity.gym":"Strength Athlete","personality.activity.swim":"Swimmer","personality.activity.ski":"Skier","personality.activity.row":"Rower","personality.activity.other":"Multi-Sport Athlete","personality.schedule.weekend":"Weekend Warrior","personality.schedule.weekday":"Weekday Regular","personality.schedule.balanced":"Balanced Scheduler","personality.time.morning":"Early Bird","personality.time.afternoon":"Midday Mover","personality.time.evening":"Evening Athlete","personality.time.night":"Night Owl","card.pace_trend.title":"Pace Trend","card.pace_trend.subtitle":"{activity} · last {count} sessions","empty.pace_trend.title":"Not enough matching workouts yet","empty.pace_trend.subtitle":"Do the same activity a few times to see a trend.","pace_trend.faster":"Getting faster","pace_trend.slower":"Getting slower","pace_trend.steady":"Holding steady","card.lap_splits.title":"Lap Splits","empty.lap_splits.title":"No lap data","empty.lap_splits.subtitle":"Not every workout has laps - your next one with them will fill this in.","stat.laps":"Laps","stat.fastest_lap":"Fastest lap","label.lap":"Lap {n}","card.training_effect_trend.title":"Training Effect Trend","empty.training_effect_trend.title":"No training effect data yet","achievements.badge.around_globe":"Around the Globe","achievements.badge.century_club":"Century Club - 100 workouts","achievements.badge.consistency_king":"Consistency King - 14-day streak","achievements.badge.iron_will":"Iron Will - 30-day streak","achievements.badge.days_100":"100 Active Days","achievements.badge.distance_1000":"1,000 km Club","achievements.badge.distance_5000":"5,000 km Club","achievements.badge.elite_engine":"Elite Engine - VO2max 55+","achievements.badge.energy_100k":"100,000 kcal Burned","achievements.badge.energy_1m":"1,000,000 kcal Burned","achievements.badge.full_year":"Full Year Active","achievements.badge.hours_100":"100 Hours","achievements.badge.hours_500":"500 Hours","achievements.badge.jack_of_all_trades":"Jack of All Trades - 5+ sports","achievements.badge.multi_sport":"Multi-Sport Athlete - 3+ sports","achievements.badge.solid_engine":"Solid Engine - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ workouts","achievements.badge.workouts_1000":"1,000 Workouts","achievements.badge.workouts_250":"250 Workouts","achievements.badge.workouts_500":"500 Workouts","achievements.category.days":"Active days","achievements.category.distance":"Distance","achievements.category.energy":"Energy","achievements.category.fitness":"Fitness level","achievements.category.records":"Personal records","achievements.category.time":"Training time","achievements.category.variety":"Variety","achievements.category.workouts":"Workouts logged","card.achievements.subtitle":"{unlocked} of {total} unlocked","card.achievements.title":"Achievements","achievements.next":"Next: {name} ({pct}%)","class.rest":"+{pct}% other activities","class.tag":"{activity}-focused build","empty.achievements.subtitle":"Log a few workouts to start unlocking badges.","empty.achievements.title":"No achievements yet","empty.class.subtitle":"Log a few workouts to reveal your class.","empty.class.title":"Not enough data yet","empty.level.subtitle":"Your first synced workout starts the climb.","empty.level.title":"No lifetime data yet","empty.player.subtitle":"Needs a bit of training history to compute your stats.","empty.player.title":"Not enough data yet","level.label":"LEVEL","level.source":"{count} workouts logged","level.subtitle":"Powered by your lifetime training load","level.title.grinder":"Endurance Grinder","level.title.legend":"Living Legend","level.title.novice":"Fresh Recruit","level.title.veteran":"Seasoned Veteran","level.xp_to_next":"{xp} XP to Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity} Specialist","player.help.title":"What these mean","player.help.sta":"STA · Stamina, from your Fitness (CTL): how much steady training load you can handle","player.help.pwr":"PWR · Power, from the average intensity (TSS) of your recent sessions","player.help.rec":"REC · Recovery, your current Readiness score","player.help.con":"CON · Consistency, workouts logged in the last 30 days","player.help.end":"END · Endurance, from your estimated VO2max","player.help.frm":"FRM · Form, from your current Training Stress Balance (TSB)","player.help.disclaimer":"Heuristic ratings computed from your own data - not an official Suunto metric.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendary","player.tier.silver":"Silver","records.climb":"Biggest climb","records.distance":"Farthest workout","records.pace":"Fastest pace","records.session":"Hardest session","records.streak":"Longest streak","records.streak_days_one":"{count} day","records.streak_days_other":"{count} days","records.workout":"Longest workout","class.name.cycling":"Endurance Warrior","class.name.running":"Sprinter","class.name.trekking":"Trailblazer","class.name.walking":"Wanderer","class.name.gym":"Strength Berserker","class.name.swim":"Tidecaller","class.name.ski":"Frostrunner","class.name.row":"Oarsman","class.name.other":"All-Rounder","class.flavor.cycling":"Built for long, steady efforts over raw speed. Every other sport is cross-training for the engine.","class.flavor.running":"Quick off the mark and built for tempo. Distance is a means to an end.","class.flavor.trekking":"At home on rough terrain, covering ground for hours at a time.","class.flavor.walking":"Steady, low-impact miles add up - consistency over intensity.","class.flavor.gym":"Raw power over distance. Strength sessions come first.","class.flavor.swim":"Endurance forged in the water, stroke by stroke.","class.flavor.ski":"Speed and rhythm across snow and cold.","class.flavor.row":"Rhythmic power, pulled one stroke at a time.","class.flavor.other":"No single sport dominates - a genuinely balanced mix.","card.next_milestone.title":"Next Milestone","card.next_milestone.subtitle":"Lifetime distance","empty.next_milestone.title":"No lifetime distance yet","next_milestone.remaining_label":"to go","next_milestone.target":"to {target} km lifetime - {pct}% there","next_milestone.workouts_one":"{count} workout to {target} lifetime","next_milestone.workouts_other":"{count} workouts to {target} lifetime","next_milestone.eta_one":"at {pace} km/week - about {weeks} week to go","next_milestone.eta_other":"at {pace} km/week - about {weeks} weeks to go","card.story.title":"Your Suunto Story","card.story.subtitle":"Since your first workout","empty.story.title":"No lifetime data yet","story.top_activity":"{activity} - your main activity","story.top_activity_share":"{count} workouts - {pct}% of your history","story.record_subtitle":"Your all-time personal record","card.sleep_clock.title":"Sleep Clock","card.sleep_clock.subtitle":"Last night","empty.sleep_clock.title":"No sleep data yet","empty.sleep_clock.subtitle":"Wear your watch to bed to see it here.","sleep_clock.quality":"{pct}% sleep quality","card.sleep_rhythm.title":"Sleep Rhythm","card.sleep_rhythm.subtitle":"Last 7 nights","empty.sleep_rhythm.title":"Not enough sleep history yet","empty.sleep_rhythm.subtitle":"Needs a few nights of data to show a pattern.","sleep_rhythm.avg_bedtime":"Avg bedtime {time}","sleep_rhythm.avg_wake":"Avg wake {time}","sleep_rhythm.spread":"{minutes} min spread","sleep_rhythm.legend_normal":"Typical night","sleep_rhythm.legend_outlier":"{minutes}+ min off average","card.route.title":"Route","empty.route.title":"No route data","empty.route.subtitle":"Indoor workouts have no GPS track.","route.pace_slower":"Slower","route.pace_faster":"Faster","card.month_story.title":"This Month","empty.month_story.title":"No workouts yet this month","story.share_month":"{count} workouts - {pct}% of this month","story.record_subtitle_month":"Your record this month","card.year_story.title":"This Year","empty.year_story.title":"No workouts yet this year","story.share_year":"{count} workouts - {pct}% of this year","story.record_subtitle_year":"Your record this year","card.best_efforts.title":"Best Efforts","card.best_efforts.subtitle":"{count} of {total} recorded","empty.best_efforts.title":"No best efforts yet","empty.best_efforts.subtitle":"Recorded from running workouts going forward, not retroactively.","best_efforts.not_yet":"Not yet recorded","distance.half_marathon":"Half Marathon","distance.marathon":"Marathon","card.steps_today.title":"Steps Today","card.steps_today.subtitle":"Goal: {goal} steps","empty.steps_today.title":"No step data yet","editor.steps_goal_label":"Daily goal (steps)","steps_today.goal_pct":"{pct}% of daily goal","steps_today.vs_avg_up":"+{pct}% vs your 7-day average ({avg})","steps_today.vs_avg_down":"-{pct}% vs your 7-day average ({avg})","card.steps_trend.title":"Steps Trend","card.steps_trend.subtitle":"Last 14 days","empty.steps_trend.title":"No step history yet","steps_trend.legend_met":"Goal met","steps_trend.legend_below":"Below goal","steps_trend.days_at_goal":"Days at goal","card.month_records.title":"This Month's Records","card.month_records.subtitle":"{count} of {total} set this month","empty.month_records.title":"No records yet this month","empty.month_records.subtitle":"Personal bests for this month will appear here.","card.year_records.title":"This Year's Records","card.year_records.subtitle":"{count} of {total} set this year","empty.year_records.title":"No records yet this year","empty.year_records.subtitle":"Personal bests for this year will appear here.","card.running_dynamics.title":"Running Dynamics","card.running_dynamics.subtitle":"{activity} - last {count} workouts","empty.running_dynamics.title":"Not enough data yet","empty.running_dynamics.subtitle":"Needs a few recent foot-based workouts with cadence data.","card.weekly_steps_goal.title":"Weekly Steps Goal","card.weekly_steps_goal.subtitle":"{value} of {goal} steps","empty.weekly_steps_goal.title":"No step data yet","editor.weekly_steps_goal_label":"Weekly goal (steps)","card.goals_overview.title":"Goals Overview","card.goals_overview.subtitle":"This week","empty.goals_overview.title":"No goal data yet","card.week_compare.title":"This Week vs Last Week","card.week_compare.subtitle":"Rolling 7-day totals","empty.week_compare.title":"Not enough history yet","empty.week_compare.subtitle":"Check back in about a week for a comparison.","week_compare.legend_now":"This week","week_compare.legend_prev":"Last week"},ze={en:$e,pl:{"stat.distance":"Dystans","stat.duration":"Czas trwania","stat.avg_speed":"Śr. prędkość","stat.avg_pace":"Śr. tempo","stat.avg_hr":"Śr. tętno","stat.max_hr":"Maks. tętno","stat.training_effect":"Efekt treningowy","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Samopoczucie","stat.energy":"Energia","stat.time":"Czas","stat.workouts":"Treningi","stat.steps":"Kroki","stat.heart_rate":"Tętno","stat.quality":"Jakość","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Tętno spocz.","stat.resting_hr_delta":"Spocz. ({delta})","stat.spo2":"SpO2","stat.stress_level":"Poziom stresu","stat.recovery_window":"Czas regeneracji","stat.ctl":"CTL · forma","stat.atl":"ATL · zmęczenie","stat.tsb":"TSB · forma","stat.readiness":"Gotowość","stat.recovery_balance":"Bilans regeneracji","stat.training_suggestion":"Sugestia na dziś","stat.volume":"Objętość","stat.intensity":"Intensywność","stat.consistency":"Regularność","stat.recovery":"Regeneracja","stat.variety":"Różnorodność","card.hr_zones.title":"Strefy tętna","card.hr_zones.last_workout":"Ostatni trening","card.sleep_readiness.title":"Sen i gotowość","card.sleep_readiness.subtitle_no_wake":"{duration} snu","card.sleep_readiness.subtitle_with_wake":"{duration} snu · pobudka {time}","card.recovery.title":"Regeneracja","card.training_load.title":"Obciążenie treningowe","card.training_load.subtitle_fallback":"Trend formy (CTL)","card.week_stats.title":"Ten tydzień i statystyki życiowe","card.week_stats.subtitle":"Ostatnie 7 dni","card.week_stats.lifetime_title":"Statystyki życiowe wg dyscypliny","card.today.title":"Dziś","card.today.subtitle":"Na żywo z zegarka","card.training_status.title":"Status treningowy","card.training_profile.title":"Profil treningowy","card.training_profile.subtitle":"Twój trening w pigułce","card.heart_rate.title":"Tętno","empty.last_workout.title":"Brak ostatniego treningu","empty.last_workout.subtitle":"Zsynchronizuj zegarek z aplikacją Suunto, aby zobaczyć go tutaj.","empty.hr_zones.title":"Brak danych o strefach","empty.hr_zones.subtitle":"Twój następny trening na zewnątrz z pasem do pomiaru tętna uzupełni te dane.","empty.sleep_readiness.title":"Brak jeszcze danych o śnie","empty.sleep_readiness.subtitle":"Noś zegarek podczas snu, aby zobaczyć dane tutaj.","empty.recovery.title":"Brak jeszcze danych o regeneracji","empty.training_load.title":"Obliczanie obciążenia treningowego","empty.training_load.subtitle":"Potrzebna jest historia treningów do wyliczenia - sprawdź ponownie po kilku sesjach.","empty.week_stats.title":"Brak jeszcze historii treningów","empty.today.title":"Brak jeszcze danych na żywo","empty.training_status.title":"Za mało danych","empty.training_status.subtitle":"Potrzeba trochę historii treningów, żeby to wyliczyć.","empty.training_profile.title":"Za mało danych","empty.training_profile.subtitle":"Potrzeba więcej danych z czujników, żeby wyliczyć profil.","empty.heart_rate.title":"Brak jeszcze danych o tętnie","empty.loading":"Wczytywanie...","empty.generic_error":"Nie udało się wczytać danych Suunto.","error.no_device":"Nie znaleziono urządzenia Suunto - czy integracja suunto_app jest skonfigurowana?","error.multiple_devices":'Znaleziono wiele urządzeń Suunto - ustaw "device_id" w konfiguracji karty.',"error.device_missing":'Skonfigurowane urządzenie "{device}" nie ma encji suunto_app.',"band.readiness.great":"Świetna","band.readiness.fair":"Przeciętna","band.readiness.low":"Niska","band.recovery.well":"Dobrze zregenerowany","band.recovery.partial":"Częściowo zregenerowany","band.recovery.low":"Niska regeneracja","band.recovery.fully":"W pełni zregenerowany","band.recovery.recovering":"Regeneracja · pozostało {time}","band.hrv.low":"HRV niskie","band.hrv.high":"HRV wysokie","band.hrv.balanced":"HRV wyrównane","band.form.fresh":"Wypoczęty","band.form.neutral":"Neutralna","band.form.fatigued":"Zmęczony","band.form.very_fatigued":"Bardzo zmęczony","band.acwr.safe":"Strefa bezpieczna","band.acwr.low":"Niskie obciążenie","band.acwr.high":"Wysokie obciążenie - ryzyko kontuzji","band.suggestion.hard":"Dawaj mocno","band.suggestion.moderate":"Umiarkowany wysiłek","band.suggestion.easy":"Trenuj lekko","band.suggestion.rest":"Dzień odpoczynku","chip.workout_logged_today":"Trening zarejestrowany dziś","chip.workout_today":"Trening dziś","chip.recovering":"Regeneracja","chip.nap":"{minutes} min drzemki","chip.nap_earlier":"{minutes} min drzemki (wcześniej)","chip.workouts_30d":"{count} treningów w ciągu ostatnich 30 dni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Najmocniej: {strong} · najsłabiej: {light}","chip.more_activity_one":"+{count} inna dyscyplina","chip.more_activity_other":"+{count} inne dyscypliny","chip.unusual_recovery":"Nietypowa regeneracja","chip.days_since_one":"{count} dzień od ostatniego treningu","chip.days_since_other":"{count} dni od ostatniego treningu","achievement.count_one":"{count} osiągnięcie","achievement.count_other":"{count} osiągnięcia","achievement.rank":"Miejsce #{rank} na tej trasie","label.zone":"Strefa {n}","label.deep":"Głęboki","label.light":"Płytki","label.rem":"REM","editor.auto_detect":"Ta karta automatycznie wykrywa Twoje urządzenie Suunto - konfiguracja nie jest potrzebna.","editor.pick_device":"Znaleziono wiele urządzeń Suunto - wybierz, z którego ta karta ma korzystać.","editor.device_label":"Urządzenie Suunto","editor.units_label":"Jednostki","editor.units_metric":"Metryczne (km)","editor.units_imperial":"Imperialne (mi)","editor.compact_label":"Tryb kompaktowy","editor.days_label":"Okno trendu (dni)","card.lifetime.title":"Statystyki życiowe","card.lifetime.subtitle":"Od początku","stat.active_days":"Aktywne dni","empty.lifetime.title":"Brak jeszcze danych życiowych","card.recent_workouts.title":"Ostatnie treningi","empty.recent_workouts.title":"Brak ostatnich treningów","card.elevation.title":"Przewyższenia i podejścia","stat.ascent":"Podejście","stat.descent":"Zejście","stat.ascent_time":"Czas podejścia","stat.descent_time":"Czas zejścia","stat.min_altitude":"Wys. min.","stat.max_altitude":"Wys. maks.","stat.ascent_rate":"Tempo podejścia","empty.elevation.title":"Brak danych o przewyższeniach","empty.elevation.subtitle":"Rejestrują to tylko treningi na zewnątrz z barometrem.","card.location.title":"Lokalizacja startu","location.open_in_maps":"Otwórz w Mapach","empty.location.title":"Brak danych lokalizacji","empty.location.subtitle":"Treningi w pomieszczeniu nie mają punktu startu GPS.","card.fitness.title":"Sprawność","stat.vo2max":"VO2max","stat.estimated_vo2max":"Szac. VO2max","stat.fitness_age":"Wiek fizyczny","fitness.measured":"Zmierzono {time} · {activity}","empty.fitness.title":"Brak jeszcze danych o sprawności","empty.fitness.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","card.pmc.title":"Zarządzanie formą","card.pmc.subtitle":"Trend 90-dniowy","card.recovery_trends.title":"Trendy regeneracji","card.recovery_trends.subtitle":"Poziom bazowy {days} dni","empty.recovery_trends.title":"Brak jeszcze danych o trendach regeneracji","card.weekly_volume.title":"Wolumen tygodniowy","card.weekly_volume.subtitle":"Ostatnie 12 tygodni","empty.weekly_volume.title":"Brak jeszcze danych o wolumenie tygodniowym","stat.average":"Średnia","stat.total":"Suma","card.hr_curve.title":"Krzywa tętna","card.hr_curve.subtitle":"Ostatnie 24 godziny","stat.hr_now":"Teraz","stat.hr_min":"Min. dzisiaj","stat.hr_max":"Maks. dzisiaj","empty.hr_curve.title":"Brak jeszcze danych o tętnie na żywo","empty.hr_curve.subtitle":"Noś zegarek i zsynchronizuj go, aby zobaczyć tu dzisiejszą krzywą.","card.sleep_trends.title":"Trendy snu","card.sleep_trends.subtitle":"Ostatnie {days} nocy","empty.sleep_trends.title":"Brak jeszcze danych o trendach snu","card.weekly_goal.title":"Cel tygodniowy","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Brak jeszcze danych o dystansie tygodniowym","editor.goal_label":"Cel tygodniowy (km)","card.streak.title":"Seria aktywności","card.streak.subtitle":"Ostatnie 14 dni","streak.window_count_one":"{count} aktywny dzień","streak.window_count_other":"{count} aktywne dni","streak.days_one":"{count} dzień serii","streak.days_other":"{count} dni serii","streak.none":"Brak aktywnej serii - zacznij dziś","empty.streak.title":"Brak jeszcze historii treningów","just_finished.title":"Świetna robota!","just_finished.idle.title":"Czekanie na kolejny trening","just_finished.idle.subtitle":"Ta karta zaświeci się zaraz po synchronizacji nowego treningu.","empty.just_finished.title":"Brak ostatniego treningu","card.activity_trends.title":"Trendy aktywności","card.activity_trends.subtitle":"Ostatnie 14 dni","empty.activity_trends.title":"Brak jeszcze danych o trendach aktywności","card.recovery_balance_trend.title":"Trend bilansu regeneracji","card.recovery_balance_trend.subtitle":"Ostatnie 14 dni","empty.recovery_balance_trend.title":"Brak jeszcze danych o trendzie regeneracji","card.readiness_trend.title":"Trend gotowości","card.readiness_trend.subtitle":"Ostatnie 30 dni","empty.readiness_trend.title":"Brak jeszcze danych o trendzie gotowości","stat.cadence":"Kadencja","stat.stride_length":"Długość kroku","stat.pct_hrmax":"% tętna maks.","stat.sleep_avg_hr":"Śr. tętno snu","stat.sleep_min_hr":"Min. tętno snu","chip.bedtime":"Zaśnięcie {time}","card.activity_calendar.title":"Kalendarz aktywności","card.activity_calendar.subtitle":"Ostatnie 6 tygodni","empty.activity_calendar.title":"Brak jeszcze historii treningów","activity_calendar.active_days_one":"{count} aktywny dzień","activity_calendar.active_days_other":"{count} aktywne dni","card.workout_comparison.title":"Porównanie treningów","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.workout_comparison.subtitle":"Wykonaj tę samą aktywność dwa razy, aby zobaczyć porównanie.","stat.distance_delta":"Dystans ({delta})","stat.duration_delta":"Czas trwania ({delta})","stat.avg_hr_delta":"Śr. tętno ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"W liczbach","card.milestones.subtitle":"Od początku","empty.milestones.title":"Brak jeszcze danych życiowych","stat.earth_laps":"Okrążeń Ziemi","stat.marathons":"Maratonów","stat.moon_pct":"% drogi na Księżyc","stat.burgers":"Burgerów","card.athlete_profile.title":"Osobowość treningowa","empty.athlete_profile.title":"Brak jeszcze wystarczających danych","personality.activity.cycling":"Kolarz","personality.activity.running":"Biegacz","personality.activity.trekking":"Piechur","personality.activity.walking":"Spacerowicz","personality.activity.gym":"Siłacz","personality.activity.swim":"Pływak","personality.activity.ski":"Narciarz","personality.activity.row":"Wioślarz","personality.activity.other":"Wielosportowiec","personality.schedule.weekend":"Wojownik weekendu","personality.schedule.weekday":"Regularny w tygodniu","personality.schedule.balanced":"Zbalansowany harmonogram","personality.time.morning":"Ranny ptaszek","personality.time.afternoon":"Popołudniowiec","personality.time.evening":"Wieczorny sportowiec","personality.time.night":"Nocny marek","card.pace_trend.title":"Trend tempa","card.pace_trend.subtitle":"{activity} · ostatnie {count} sesji","empty.pace_trend.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.pace_trend.subtitle":"Wykonaj tę samą aktywność kilka razy, aby zobaczyć trend.","pace_trend.faster":"Przyspieszasz","pace_trend.slower":"Zwalniasz","pace_trend.steady":"Stabilne tempo","card.lap_splits.title":"Czasy Okrążeń","empty.lap_splits.title":"Brak danych o okrążeniach","empty.lap_splits.subtitle":"Nie każdy trening ma okrążenia - uzupełni się przy najbliższym, który je ma.","stat.laps":"Okrążenia","stat.fastest_lap":"Najszybsze okrążenie","label.lap":"Okrążenie {n}","card.training_effect_trend.title":"Trend Efektu Treningowego","empty.training_effect_trend.title":"Brak jeszcze danych o efekcie treningowym","achievements.badge.around_globe":"Dookoła świata","achievements.badge.century_club":"Klub Setki - 100 treningów","achievements.badge.consistency_king":"Król Regularności - seria 14 dni","achievements.badge.iron_will":"Żelazna Wola - seria 30 dni","achievements.badge.days_100":"100 aktywnych dni","achievements.badge.distance_1000":"Klub 1000 km","achievements.badge.distance_5000":"Klub 5000 km","achievements.badge.elite_engine":"Elitarny silnik - VO2max 55+","achievements.badge.energy_100k":"Spalone 100 000 kcal","achievements.badge.energy_1m":"Spalony 1 000 000 kcal","achievements.badge.full_year":"Cały rok aktywności","achievements.badge.hours_100":"100 godzin","achievements.badge.hours_500":"500 godzin","achievements.badge.jack_of_all_trades":"Wszechstronny sportowiec - 5+ dyscyplin","achievements.badge.multi_sport":"Sportowiec wielodyscyplinowy - 3+ dyscypliny","achievements.badge.solid_engine":"Solidny silnik - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treningów","achievements.badge.workouts_1000":"1000 treningów","achievements.badge.workouts_250":"250 treningów","achievements.badge.workouts_500":"500 treningów","achievements.category.days":"Aktywne dni","achievements.category.distance":"Dystans","achievements.category.energy":"Energia","achievements.category.fitness":"Poziom wydolności","achievements.category.records":"Rekordy osobiste","achievements.category.time":"Czas treningowy","achievements.category.variety":"Różnorodność","achievements.category.workouts":"Zarejestrowane treningi","card.achievements.subtitle":"{unlocked} z {total} odblokowanych","card.achievements.title":"Osiągnięcia","achievements.next":"Następne: {name} ({pct}%)","class.rest":"+{pct}% inne aktywności","class.tag":"{activity} - profil treningowy","empty.achievements.subtitle":"Zarejestruj kilka treningów, aby zacząć odblokowywać odznaki.","empty.achievements.title":"Brak osiągnięć","empty.class.subtitle":"Zarejestruj kilka treningów, aby odkryć swoją klasę.","empty.class.title":"Za mało danych","empty.level.subtitle":"Pierwszy zsynchronizowany trening zaczyna wspinaczkę.","empty.level.title":"Brak danych życiowych","empty.player.subtitle":"Potrzeba trochę historii treningów, aby obliczyć statystyki.","empty.player.title":"Za mało danych","level.label":"POZIOM","level.source":"{count} zarejestrowanych treningów","level.subtitle":"Napędzane Twoim całkowitym obciążeniem treningowym","level.title.grinder":"Wytrwały Zawodnik","level.title.legend":"Żywa Legenda","level.title.novice":"Świeży Rekrut","level.title.veteran":"Doświadczony Weteran","level.xp_to_next":"{xp} XP do poz. {level}","level.xp_total":"{xp} XP","player.archetype":"Specjalista: {activity}","player.help.title":"Co to oznacza","player.help.sta":"STA · Wytrzymałość, z Formy (CTL): jak duże stałe obciążenie treningowe jesteś w stanie znieść","player.help.pwr":"PWR · Moc, ze średniej intensywności (TSS) ostatnich treningów","player.help.rec":"REC · Regeneracja, Twój aktualny wynik Gotowości","player.help.con":"CON · Regularność, liczba treningów w ostatnich 30 dniach","player.help.end":"END · Wytrwałość, z szacowanego VO2max","player.help.frm":"FRM · Forma, z aktualnego bilansu obciążenia treningowego (TSB)","player.help.disclaimer":"Wskaźniki heurystyczne liczone z Twoich danych - nie oficjalna metryka Suunto.","player.tier.bronze":"Brąz","player.tier.gold":"Złoto","player.tier.legendary":"Legendarny","player.tier.silver":"Srebro","records.climb":"Największe podejście","records.distance":"Najdłuższy dystans","records.pace":"Najszybsze tempo","records.session":"Najcięższy trening","records.streak":"Najdłuższa seria","records.streak_days_one":"{count} dzień","records.streak_days_other":"{count} dni","records.workout":"Najdłuższy trening","class.name.cycling":"Wojownik Wytrzymałości","class.name.running":"Sprinter","class.name.trekking":"Zdobywca Szlaków","class.name.walking":"Wędrowiec","class.name.gym":"Berserker Siły","class.name.swim":"Władca Fal","class.name.ski":"Biegacz Mrozu","class.name.row":"Wioślarz","class.name.other":"Wszechstronny","class.flavor.cycling":"Stworzony do długich, równych wysiłków, nie do surowej szybkości. Każdy inny sport to trening uzupełniający.","class.flavor.running":"Szybki start i tempo ponad wszystko. Dystans jest tylko środkiem do celu.","class.flavor.trekking":"Czuje się jak w domu na trudnym terenie, pokonując kilometry godzinami.","class.flavor.walking":"Równe, mało obciążające kilometry sumują się - regularność ponad intensywność.","class.flavor.gym":"Surowa siła ponad dystans. Treningi siłowe są na pierwszym miejscu.","class.flavor.swim":"Wytrzymałość hartowana w wodzie, ruch po ruchu.","class.flavor.ski":"Szybkość i rytm na śniegu i mrozie.","class.flavor.row":"Rytmiczna siła, pociągnięcie po pociągnięciu.","class.flavor.other":"Żaden sport nie dominuje - naprawdę zrównoważona mieszanka.","card.next_milestone.title":"Do następnego celu","card.next_milestone.subtitle":"Dystans życiowy","empty.next_milestone.title":"Brak jeszcze dystansu życiowego","next_milestone.remaining_label":"zostało","next_milestone.target":"do {target} km życiowych - {pct}% drogi","next_milestone.workouts_one":"{count} trening do {target} w karierze","next_milestone.workouts_other":"{count} treningów do {target} w karierze","next_milestone.eta_one":"przy {pace} km/tydz. - około {weeks} tydzień zostało","next_milestone.eta_other":"przy {pace} km/tydz. - około {weeks} tygodni zostało","card.story.title":"Twoja historia z Suunto","card.story.subtitle":"Od pierwszego treningu","empty.story.title":"Brak jeszcze danych życiowych","story.top_activity":"{activity} - Twoja główna aktywność","story.top_activity_share":"{count} treningów - {pct}% Twojej historii","story.record_subtitle":"Twój rekord życiowy","card.sleep_clock.title":"Zegar snu","card.sleep_clock.subtitle":"Ostatnia noc","empty.sleep_clock.title":"Brak jeszcze danych o śnie","empty.sleep_clock.subtitle":"Załóż zegarek na noc, żeby to zobaczyć.","sleep_clock.quality":"{pct}% jakości snu","card.sleep_rhythm.title":"Rytm snu","card.sleep_rhythm.subtitle":"Ostatnie 7 nocy","empty.sleep_rhythm.title":"Za mało jeszcze historii snu","empty.sleep_rhythm.subtitle":"Potrzeba kilku nocy danych, żeby pokazać wzorzec.","sleep_rhythm.avg_bedtime":"Śr. początek snu {time}","sleep_rhythm.avg_wake":"Śr. pobudka {time}","sleep_rhythm.spread":"Rozrzut {minutes} min","sleep_rhythm.legend_normal":"Zwykła noc","sleep_rhythm.legend_outlier":"Odstaje {minutes}+ min od średniej","card.route.title":"Trasa","empty.route.title":"Brak danych o trasie","empty.route.subtitle":"Treningi w pomieszczeniu nie mają zapisu GPS.","route.pace_slower":"Wolniej","route.pace_faster":"Szybciej","card.month_story.title":"Ten miesiąc","empty.month_story.title":"Brak jeszcze treningów w tym miesiącu","story.share_month":"{count} treningów - {pct}% tego miesiąca","story.record_subtitle_month":"Twój rekord tego miesiąca","card.year_story.title":"Ten rok","empty.year_story.title":"Brak jeszcze treningów w tym roku","story.share_year":"{count} treningów - {pct}% tego roku","story.record_subtitle_year":"Twój rekord tego roku","card.best_efforts.title":"Rekordy na dystansach","card.best_efforts.subtitle":"{count} z {total} zdobyte","empty.best_efforts.title":"Brak jeszcze rekordów na dystansach","empty.best_efforts.subtitle":"Liczone od biegowych treningów od teraz, nie wstecz.","best_efforts.not_yet":"Jeszcze nie zdobyto","distance.half_marathon":"Półmaraton","distance.marathon":"Maraton","card.steps_today.title":"Kroki dzisiaj","card.steps_today.subtitle":"Cel: {goal} kroków","empty.steps_today.title":"Brak jeszcze danych o krokach","editor.steps_goal_label":"Dzienny cel (kroki)","steps_today.goal_pct":"{pct}% dziennego celu","steps_today.vs_avg_up":"+{pct}% vs Twoja 7-dniowa średnia ({avg})","steps_today.vs_avg_down":"-{pct}% vs Twoja 7-dniowa średnia ({avg})","card.steps_trend.title":"Trend kroków","card.steps_trend.subtitle":"Ostatnie 14 dni","empty.steps_trend.title":"Brak jeszcze historii kroków","steps_trend.legend_met":"Cel osiągnięty","steps_trend.legend_below":"Poniżej celu","steps_trend.days_at_goal":"Dni z celem","card.month_records.title":"Rekordy miesiąca","card.month_records.subtitle":"{count} z {total} pobitych w tym miesiącu","empty.month_records.title":"Brak jeszcze rekordów w tym miesiącu","empty.month_records.subtitle":"Tutaj pojawią się Twoje rekordy z tego miesiąca.","card.year_records.title":"Rekordy roku","card.year_records.subtitle":"{count} z {total} pobitych w tym roku","empty.year_records.title":"Brak jeszcze rekordów w tym roku","empty.year_records.subtitle":"Tutaj pojawią się Twoje rekordy z tego roku.","card.running_dynamics.title":"Dynamika biegu","card.running_dynamics.subtitle":"{activity} - ostatnie {count} treningów","empty.running_dynamics.title":"Za mało danych","empty.running_dynamics.subtitle":"Potrzeba kilku ostatnich treningów biegowych z danymi kadencji.","card.weekly_steps_goal.title":"Cel tygodniowy: kroki","card.weekly_steps_goal.subtitle":"{value} z {goal} kroków","empty.weekly_steps_goal.title":"Brak jeszcze danych o krokach","editor.weekly_steps_goal_label":"Cel tygodniowy (kroki)","card.goals_overview.title":"Podsumowanie celów","card.goals_overview.subtitle":"Ten tydzień","empty.goals_overview.title":"Brak jeszcze danych o celach","card.week_compare.title":"Ten tydzień vs poprzedni","card.week_compare.subtitle":"Sumy z ostatnich 7 dni","empty.week_compare.title":"Za mało historii","empty.week_compare.subtitle":"Wróć za około tydzień, żeby zobaczyć porównanie.","week_compare.legend_now":"Ten tydzień","week_compare.legend_prev":"Poprzedni tydzień"},de:{"stat.distance":"Distanz","stat.duration":"Dauer","stat.avg_speed":"Ø-Geschwindigkeit","stat.avg_pace":"Ø-Pace","stat.avg_hr":"Ø-Puls","stat.max_hr":"Max. Puls","stat.training_effect":"Trainingseffekt","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gefühl","stat.energy":"Energie","stat.time":"Zeit","stat.workouts":"Workouts","stat.steps":"Schritte","stat.heart_rate":"Herzfrequenz","stat.quality":"Qualität","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Ruhepuls","stat.resting_hr_delta":"Ruhepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresslevel","stat.recovery_window":"Erholungszeit","stat.ctl":"CTL · Fitness","stat.atl":"ATL · Ermüdung","stat.tsb":"TSB · Form","stat.readiness":"Bereitschaft","stat.recovery_balance":"Erholungsbalance","stat.training_suggestion":"Empfehlung für heute","stat.volume":"Umfang","stat.intensity":"Intensität","stat.consistency":"Konstanz","stat.recovery":"Erholung","stat.variety":"Vielfalt","card.hr_zones.title":"Herzfrequenzzonen","card.hr_zones.last_workout":"Letztes Training","card.sleep_readiness.title":"Schlaf & Bereitschaft","card.sleep_readiness.subtitle_no_wake":"{duration} geschlafen","card.sleep_readiness.subtitle_with_wake":"{duration} geschlafen · aufgewacht um {time}","card.recovery.title":"Erholung","card.training_load.title":"Trainingsbelastung","card.training_load.subtitle_fallback":"Fitness-Trend (CTL)","card.week_stats.title":"Diese Woche & Gesamt","card.week_stats.subtitle":"Letzte 7 Tage","card.week_stats.lifetime_title":"Gesamt nach Sportart","card.today.title":"Heute","card.today.subtitle":"Live von deiner Uhr","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofil","card.training_profile.subtitle":"Dein Training auf einen Blick","card.heart_rate.title":"Herzfrequenz","empty.last_workout.title":"Kein aktuelles Training","empty.last_workout.subtitle":"Synchronisiere deine Uhr mit der Suunto-App, um es hier zu sehen.","empty.hr_zones.title":"Keine Zonendaten","empty.hr_zones.subtitle":"Dein nächstes Outdoor-Training mit Brustgurt füllt das hier aus.","empty.sleep_readiness.title":"Noch keine Schlafdaten","empty.sleep_readiness.subtitle":"Trage deine Uhr beim Schlafen, um sie hier zu sehen.","empty.recovery.title":"Noch keine Erholungsdaten","empty.training_load.title":"Trainingsbelastung wird berechnet","empty.training_load.subtitle":"Benötigt etwas Trainingshistorie zur Berechnung - schau nach ein paar Einheiten wieder vorbei.","empty.week_stats.title":"Noch keine Trainingshistorie","empty.today.title":"Noch keine Live-Daten","empty.training_status.title":"Noch nicht genug Daten","empty.training_status.subtitle":"Braucht etwas Trainingshistorie zur Berechnung.","empty.training_profile.title":"Noch nicht genug Daten","empty.training_profile.subtitle":"Braucht mehr Sensordaten, um dein Profil zu berechnen.","empty.heart_rate.title":"Noch keine Herzfrequenzdaten","empty.loading":"Wird geladen...","empty.generic_error":"Suunto-Daten konnten nicht geladen werden.","error.no_device":"Kein Suunto-Gerät gefunden - ist die suunto_app-Integration eingerichtet?","error.multiple_devices":'Mehrere Suunto-Geräte gefunden - lege "device_id" in der Kartenkonfiguration fest.',"error.device_missing":'Konfiguriertes Gerät "{device}" hat keine suunto_app-Entitäten.',"band.readiness.great":"Sehr gut","band.readiness.fair":"Mittel","band.readiness.low":"Niedrig","band.recovery.well":"Gut erholt","band.recovery.partial":"Teilweise erholt","band.recovery.low":"Geringe Erholung","band.recovery.fully":"Vollständig erholt","band.recovery.recovering":"Erholung läuft · {time} verbleibend","band.hrv.low":"HRV niedrig","band.hrv.high":"HRV hoch","band.hrv.balanced":"HRV ausgeglichen","band.form.fresh":"Frisch","band.form.neutral":"Neutral","band.form.fatigued":"Ermüdet","band.form.very_fatigued":"Sehr ermüdet","band.acwr.safe":"Sicherer Bereich","band.acwr.low":"Geringe Belastung","band.acwr.high":"Hohe Belastung - Verletzungsrisiko","band.suggestion.hard":"Vollgas","band.suggestion.moderate":"Moderate Belastung","band.suggestion.easy":"Locker angehen","band.suggestion.rest":"Ruhetag","chip.workout_logged_today":"Heute Training erfasst","chip.workout_today":"Training heute","chip.recovering":"Erholung","chip.nap":"{minutes} Min. Nickerchen","chip.nap_earlier":"{minutes} Min. Nickerchen (früher)","chip.workouts_30d":"{count} Trainings in den letzten 30 Tagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Am stärksten: {strong} · am schwächsten: {light}","chip.more_activity_one":"+{count} weitere Sportart","chip.more_activity_other":"+{count} weitere Sportarten","chip.unusual_recovery":"Ungewöhnliche Erholung","chip.days_since_one":"{count} Tag seit dem letzten Training","chip.days_since_other":"{count} Tage seit dem letzten Training","achievement.count_one":"{count} Erfolg","achievement.count_other":"{count} Erfolge","achievement.rank":"Platz #{rank} auf dieser Strecke","label.zone":"Zone {n}","label.deep":"Tiefschlaf","label.light":"Leichtschlaf","label.rem":"REM","editor.auto_detect":"Diese Karte erkennt dein Suunto-Gerät automatisch - keine Konfiguration nötig.","editor.pick_device":"Mehrere Suunto-Geräte gefunden - wähle aus, welches diese Karte verwenden soll.","editor.device_label":"Suunto-Gerät","editor.units_label":"Einheiten","editor.units_metric":"Metrisch (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Kompaktmodus","editor.days_label":"Trendfenster (Tage)","card.lifetime.title":"Gesamtstatistik","card.lifetime.subtitle":"Seit Beginn","stat.active_days":"Aktive Tage","empty.lifetime.title":"Noch keine Gesamtdaten","card.recent_workouts.title":"Letzte Trainings","empty.recent_workouts.title":"Keine letzten Trainings","card.elevation.title":"Höhenmeter & Aufstieg","stat.ascent":"Aufstieg","stat.descent":"Abstieg","stat.ascent_time":"Aufstiegszeit","stat.descent_time":"Abstiegszeit","stat.min_altitude":"Min. Höhe","stat.max_altitude":"Max. Höhe","stat.ascent_rate":"Aufstiegsrate","empty.elevation.title":"Keine Höhendaten","empty.elevation.subtitle":"Nur Outdoor-Trainings mit Barometer erfassen dies.","card.location.title":"Startort","location.open_in_maps":"In Karten öffnen","empty.location.title":"Keine Standortdaten","empty.location.subtitle":"Indoor-Trainings haben keinen GPS-Startpunkt.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitnessalter","fitness.measured":"Gemessen {time} · {activity}","empty.fitness.title":"Noch keine Fitnessdaten","empty.fitness.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","card.pmc.title":"Leistungsmanagement","card.pmc.subtitle":"90-Tage-Trend","card.recovery_trends.title":"Erholungstrends","card.recovery_trends.subtitle":"{days}-Tage-Basiswert","empty.recovery_trends.title":"Noch keine Erholungstrend-Daten","card.weekly_volume.title":"Wöchentliches Volumen","card.weekly_volume.subtitle":"Letzte 12 Wochen","empty.weekly_volume.title":"Noch keine Daten zum wöchentlichen Volumen","stat.average":"Durchschnitt","stat.total":"Gesamt","card.hr_curve.title":"Herzfrequenz-Kurve","card.hr_curve.subtitle":"Letzte 24 Stunden","stat.hr_now":"Jetzt","stat.hr_min":"Tagesminimum","stat.hr_max":"Tagesmaximum","empty.hr_curve.title":"Noch keine Live-Herzfrequenzdaten","empty.hr_curve.subtitle":"Trage deine Uhr und synchronisiere sie, um die heutige Kurve hier zu sehen.","card.sleep_trends.title":"Schlaftrends","card.sleep_trends.subtitle":"Letzte {days} Nächte","empty.sleep_trends.title":"Noch keine Schlaftrend-Daten","card.weekly_goal.title":"Wochenziel","card.weekly_goal.subtitle":"{value} von {goal} km","empty.weekly_goal.title":"Noch keine wöchentliche Distanz","editor.goal_label":"Wochenziel (km)","card.streak.title":"Aktivitätsserie","card.streak.subtitle":"Letzte 14 Tage","streak.window_count_one":"{count} aktiver Tag","streak.window_count_other":"{count} aktive Tage","streak.days_one":"{count} Tag in Folge","streak.days_other":"{count} Tage in Folge","streak.none":"Keine aktive Serie - starte heute","empty.streak.title":"Noch keine Trainingshistorie","just_finished.title":"Gut gemacht!","just_finished.idle.title":"Warten auf dein nächstes Training","just_finished.idle.subtitle":"Diese Karte leuchtet auf, sobald deine Uhr ein neues Training synchronisiert.","empty.just_finished.title":"Kein aktuelles Training","card.activity_trends.title":"Aktivitätstrends","card.activity_trends.subtitle":"Letzte 14 Tage","empty.activity_trends.title":"Noch keine Aktivitätstrend-Daten","card.recovery_balance_trend.title":"Erholungsbalance-Trend","card.recovery_balance_trend.subtitle":"Letzte 14 Tage","empty.recovery_balance_trend.title":"Noch keine Erholungstrend-Daten","card.readiness_trend.title":"Bereitschaftstrend","card.readiness_trend.subtitle":"Letzte 30 Tage","empty.readiness_trend.title":"Noch keine Bereitschaftstrend-Daten","stat.cadence":"Trittfrequenz","stat.stride_length":"Schrittlänge","stat.pct_hrmax":"% der max. Herzfrequenz","stat.sleep_avg_hr":"Ø-Puls","stat.sleep_min_hr":"Min-Puls","chip.bedtime":"Zubettgehen {time}","card.activity_calendar.title":"Aktivitätskalender","card.activity_calendar.subtitle":"Letzte 6 Wochen","empty.activity_calendar.title":"Noch keine Trainingshistorie","activity_calendar.active_days_one":"{count} aktiver Tag","activity_calendar.active_days_other":"{count} aktive Tage","card.workout_comparison.title":"Trainingsvergleich","card.workout_comparison.vs":"vs. {time}","empty.workout_comparison.title":"Noch nicht genug passende Trainings","empty.workout_comparison.subtitle":"Mach die gleiche Aktivität zweimal, um einen Vergleich zu sehen.","stat.distance_delta":"Distanz ({delta})","stat.duration_delta":"Dauer ({delta})","stat.avg_hr_delta":"Ø-Puls ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"In Zahlen","card.milestones.subtitle":"Seit Beginn","empty.milestones.title":"Noch keine Gesamtdaten","stat.earth_laps":"Erdumrundungen","stat.marathons":"Marathons","stat.moon_pct":"% zum Mond","stat.burgers":"Burger","card.athlete_profile.title":"Trainingspersönlichkeit","empty.athlete_profile.title":"Noch nicht genug Daten","personality.activity.cycling":"Radfahrer","personality.activity.running":"Läufer","personality.activity.trekking":"Wanderer","personality.activity.walking":"Spaziergänger","personality.activity.gym":"Kraftsportler","personality.activity.swim":"Schwimmer","personality.activity.ski":"Skifahrer","personality.activity.row":"Ruderer","personality.activity.other":"Allrounder","personality.schedule.weekend":"Wochenendkrieger","personality.schedule.weekday":"Wochentags-Stammgast","personality.schedule.balanced":"Ausgewogener Planer","personality.time.morning":"Frühaufsteher","personality.time.afternoon":"Mittagsaktiver","personality.time.evening":"Abendsportler","personality.time.night":"Nachteule","card.pace_trend.title":"Pace-Trend","card.pace_trend.subtitle":"{activity} · letzte {count} Einheiten","empty.pace_trend.title":"Noch nicht genug passende Trainings","empty.pace_trend.subtitle":"Mach die gleiche Aktivität ein paar Mal, um einen Trend zu sehen.","pace_trend.faster":"Wird schneller","pace_trend.slower":"Wird langsamer","pace_trend.steady":"Konstantes Tempo","card.lap_splits.title":"Rundenzeiten","empty.lap_splits.title":"Keine Rundendaten","empty.lap_splits.subtitle":"Nicht jedes Training hat Runden - das nächste mit Rundendaten füllt das hier auf.","stat.laps":"Runden","stat.fastest_lap":"Schnellste Runde","label.lap":"Runde {n}","card.training_effect_trend.title":"Trainingseffekt-Trend","empty.training_effect_trend.title":"Noch keine Trainingseffekt-Daten","achievements.badge.around_globe":"Einmal um die Welt","achievements.badge.century_club":"Hundert-Club - 100 Trainings","achievements.badge.consistency_king":"König der Beständigkeit - 14-Tage-Serie","achievements.badge.iron_will":"Eiserner Wille - 30-Tage-Serie","achievements.badge.days_100":"100 aktive Tage","achievements.badge.distance_1000":"1.000-km-Club","achievements.badge.distance_5000":"5.000-km-Club","achievements.badge.elite_engine":"Elite-Motor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrannt","achievements.badge.energy_1m":"1.000.000 kcal verbrannt","achievements.badge.full_year":"Ganzjährig aktiv","achievements.badge.hours_100":"100 Stunden","achievements.badge.hours_500":"500 Stunden","achievements.badge.jack_of_all_trades":"Allrounder - 5+ Sportarten","achievements.badge.multi_sport":"Multisport-Athlet - 3+ Sportarten","achievements.badge.solid_engine":"Solider Motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ Trainings","achievements.badge.workouts_1000":"1.000 Trainings","achievements.badge.workouts_250":"250 Trainings","achievements.badge.workouts_500":"500 Trainings","achievements.category.days":"Aktive Tage","achievements.category.distance":"Distanz","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnesslevel","achievements.category.records":"Persönliche Rekorde","achievements.category.time":"Trainingszeit","achievements.category.variety":"Vielfalt","achievements.category.workouts":"Erfasste Trainings","card.achievements.subtitle":"{unlocked} von {total} freigeschaltet","card.achievements.title":"Erfolge","achievements.next":"Nächstes: {name} ({pct}%)","class.rest":"+{pct}% andere Aktivitäten","class.tag":"Fokus: {activity}","empty.achievements.subtitle":"Erfasse ein paar Trainings, um Abzeichen freizuschalten.","empty.achievements.title":"Noch keine Erfolge","empty.class.subtitle":"Erfasse ein paar Trainings, um deine Klasse zu enthüllen.","empty.class.title":"Noch nicht genug Daten","empty.level.subtitle":"Dein erstes synchronisiertes Training startet den Aufstieg.","empty.level.title":"Noch keine Lebenszeitdaten","empty.player.subtitle":"Braucht etwas Trainingshistorie, um deine Werte zu berechnen.","empty.player.title":"Noch nicht genug Daten","level.label":"LEVEL","level.source":"{count} Trainings erfasst","level.subtitle":"Angetrieben von deiner gesamten Trainingsbelastung","level.title.grinder":"Ausdauer-Malocher","level.title.legend":"Lebende Legende","level.title.novice":"Frischer Rekrut","level.title.veteran":"Erfahrener Veteran","level.xp_to_next":"{xp} XP bis Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-Spezialist","player.help.title":"Was das bedeutet","player.help.sta":"STA · Ausdauer, aus deiner Fitness (CTL): wie viel gleichmäßige Trainingsbelastung du verkraftest","player.help.pwr":"PWR · Power, aus der durchschnittlichen Intensität (TSS) deiner letzten Einheiten","player.help.rec":"REC · Erholung, dein aktueller Readiness-Wert","player.help.con":"CON · Beständigkeit, Trainings der letzten 30 Tage","player.help.end":"END · Ausdauer, aus deinem geschätzten VO2max","player.help.frm":"FRM · Form, aus deiner aktuellen Trainingsbelastungsbilanz (TSB)","player.help.disclaimer":"Heuristische Werte aus deinen eigenen Daten - keine offizielle Suunto-Metrik.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendär","player.tier.silver":"Silber","records.climb":"Größter Anstieg","records.distance":"Weitestes Training","records.pace":"Schnellstes Tempo","records.session":"Härteste Einheit","records.streak":"Längste Serie","records.streak_days_one":"{count} Tag","records.streak_days_other":"{count} Tage","records.workout":"Längstes Training","class.name.cycling":"Ausdauerkrieger","class.name.running":"Sprinter","class.name.trekking":"Pfadfinder","class.name.walking":"Wanderer","class.name.gym":"Kraft-Berserker","class.name.swim":"Flutenrufer","class.name.ski":"Frostläufer","class.name.row":"Ruderer","class.name.other":"Allrounder","class.flavor.cycling":"Gemacht für lange, gleichmäßige Belastung statt roher Geschwindigkeit. Alles andere ist Ergänzungstraining.","class.flavor.running":"Schnell weg und auf Tempo ausgelegt. Distanz ist nur Mittel zum Zweck.","class.flavor.trekking":"Zuhause im schwierigen Gelände, stundenlang unterwegs.","class.flavor.walking":"Stetige, gelenkschonende Kilometer summieren sich - Beständigkeit vor Intensität.","class.flavor.gym":"Rohe Kraft vor Distanz. Krafttraining steht an erster Stelle.","class.flavor.swim":"Ausdauer im Wasser geschmiedet, Zug für Zug.","class.flavor.ski":"Geschwindigkeit und Rhythmus auf Schnee und Kälte.","class.flavor.row":"Rhythmische Kraft, Schlag für Schlag.","class.flavor.other":"Keine Sportart dominiert - eine wirklich ausgewogene Mischung.","card.next_milestone.title":"Nächstes Ziel","card.next_milestone.subtitle":"Lebenszeit-Distanz","empty.next_milestone.title":"Noch keine Lebenszeit-Distanz","next_milestone.remaining_label":"verbleibend","next_milestone.target":"bis {target} km Lebenszeit - {pct}% geschafft","next_milestone.workouts_one":"{count} Training bis {target} insgesamt","next_milestone.workouts_other":"{count} Trainings bis {target} insgesamt","next_milestone.eta_one":"bei {pace} km/Woche - noch etwa {weeks} Woche","next_milestone.eta_other":"bei {pace} km/Woche - noch etwa {weeks} Wochen","card.story.title":"Deine Suunto-Geschichte","card.story.subtitle":"Seit deinem ersten Training","empty.story.title":"Noch keine Lebenszeitdaten","story.top_activity":"{activity} - deine Hauptaktivität","story.top_activity_share":"{count} Trainings - {pct}% deiner Geschichte","story.record_subtitle":"Dein Allzeitrekord","card.sleep_clock.title":"Schlafuhr","card.sleep_clock.subtitle":"Letzte Nacht","empty.sleep_clock.title":"Noch keine Schlafdaten","empty.sleep_clock.subtitle":"Trage deine Uhr nachts, um es hier zu sehen.","sleep_clock.quality":"{pct}% Schlafqualität","card.sleep_rhythm.title":"Schlafrhythmus","card.sleep_rhythm.subtitle":"Letzte 7 Nächte","empty.sleep_rhythm.title":"Noch nicht genug Schlafhistorie","empty.sleep_rhythm.subtitle":"Braucht ein paar Nächte an Daten, um ein Muster zu zeigen.","sleep_rhythm.avg_bedtime":"Ø-Schlafenszeit {time}","sleep_rhythm.avg_wake":"Ø-Aufwachzeit {time}","sleep_rhythm.spread":"{minutes} Min. Streuung","sleep_rhythm.legend_normal":"Typische Nacht","sleep_rhythm.legend_outlier":"{minutes}+ Min. vom Durchschnitt abweichend","card.route.title":"Route","empty.route.title":"Keine Streckendaten","empty.route.subtitle":"Indoor-Trainings haben keine GPS-Aufzeichnung.","route.pace_slower":"Langsamer","route.pace_faster":"Schneller","card.month_story.title":"Dieser Monat","empty.month_story.title":"Noch keine Trainings diesen Monat","story.share_month":"{count} Trainings - {pct}% dieses Monats","story.record_subtitle_month":"Dein Rekord diesen Monat","card.year_story.title":"Dieses Jahr","empty.year_story.title":"Noch keine Trainings dieses Jahr","story.share_year":"{count} Trainings - {pct}% dieses Jahres","story.record_subtitle_year":"Dein Rekord dieses Jahr","card.best_efforts.title":"Bestleistungen","card.best_efforts.subtitle":"{count} von {total} erreicht","empty.best_efforts.title":"Noch keine Bestleistungen","empty.best_efforts.subtitle":"Wird ab jetzt aus Lauftrainings erfasst, nicht rückwirkend.","best_efforts.not_yet":"Noch nicht erreicht","distance.half_marathon":"Halbmarathon","distance.marathon":"Marathon","card.steps_today.title":"Schritte heute","card.steps_today.subtitle":"Ziel: {goal} Schritte","empty.steps_today.title":"Noch keine Schrittdaten","editor.steps_goal_label":"Tagesziel (Schritte)","steps_today.goal_pct":"{pct}% des Tagesziels","steps_today.vs_avg_up":"+{pct}% ggü. deinem 7-Tage-Durchschnitt ({avg})","steps_today.vs_avg_down":"-{pct}% ggü. deinem 7-Tage-Durchschnitt ({avg})","card.steps_trend.title":"Schritttrend","card.steps_trend.subtitle":"Letzte 14 Tage","empty.steps_trend.title":"Noch kein Schrittverlauf","steps_trend.legend_met":"Ziel erreicht","steps_trend.legend_below":"Unter Ziel","steps_trend.days_at_goal":"Tage mit Ziel","card.month_records.title":"Rekorde des Monats","card.month_records.subtitle":"{count} von {total} in diesem Monat aufgestellt","empty.month_records.title":"Noch keine Rekorde diesen Monat","empty.month_records.subtitle":"Deine persönlichen Bestleistungen dieses Monats erscheinen hier.","card.year_records.title":"Rekorde des Jahres","card.year_records.subtitle":"{count} von {total} in diesem Jahr aufgestellt","empty.year_records.title":"Noch keine Rekorde dieses Jahr","empty.year_records.subtitle":"Deine persönlichen Bestleistungen dieses Jahres erscheinen hier.","card.running_dynamics.title":"Lauf-Dynamik","card.running_dynamics.subtitle":"{activity} - letzte {count} Einheiten","empty.running_dynamics.title":"Noch nicht genug Daten","empty.running_dynamics.subtitle":"Benötigt ein paar aktuelle Lauf-Einheiten mit Kadenzdaten.","card.weekly_steps_goal.title":"Wochenziel: Schritte","card.weekly_steps_goal.subtitle":"{value} von {goal} Schritten","empty.weekly_steps_goal.title":"Noch keine Schrittdaten","editor.weekly_steps_goal_label":"Wochenziel (Schritte)","card.goals_overview.title":"Zielübersicht","card.goals_overview.subtitle":"Diese Woche","empty.goals_overview.title":"Noch keine Zieldaten","card.week_compare.title":"Diese Woche vs. letzte Woche","card.week_compare.subtitle":"Gleitende 7-Tage-Summen","empty.week_compare.title":"Noch nicht genug Verlauf","empty.week_compare.subtitle":"Schau in etwa einer Woche für einen Vergleich vorbei.","week_compare.legend_now":"Diese Woche","week_compare.legend_prev":"Letzte Woche"},pt:{"stat.distance":"Distância","stat.duration":"Duração","stat.avg_speed":"Vel. média","stat.avg_pace":"Ritmo médio","stat.avg_hr":"FC média","stat.max_hr":"FC máx.","stat.training_effect":"Efeito do treino","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensação","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Treinos","stat.steps":"Passos","stat.heart_rate":"Frequência cardíaca","stat.quality":"Qualidade","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repouso","stat.resting_hr_delta":"FC repouso ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nível de stress","stat.recovery_window":"Tempo de recuperação","stat.ctl":"CTL · condição","stat.atl":"ATL · fadiga","stat.tsb":"TSB · forma","stat.readiness":"Prontidão","stat.recovery_balance":"Equilíbrio de recuperação","stat.training_suggestion":"Sugestão de hoje","stat.volume":"Volume","stat.intensity":"Intensidade","stat.consistency":"Consistência","stat.recovery":"Recuperação","stat.variety":"Variedade","card.hr_zones.title":"Zonas de Frequência Cardíaca","card.hr_zones.last_workout":"Último treino","card.sleep_readiness.title":"Sono e Prontidão","card.sleep_readiness.subtitle_no_wake":"{duration} de sono","card.sleep_readiness.subtitle_with_wake":"{duration} de sono · acordou às {time}","card.recovery.title":"Recuperação","card.training_load.title":"Carga de Treino","card.training_load.subtitle_fallback":"Tendência de condição (CTL)","card.week_stats.title":"Esta Semana e Histórico Total","card.week_stats.subtitle":"Últimos 7 dias","card.week_stats.lifetime_title":"Total por atividade","card.today.title":"Hoje","card.today.subtitle":"Ao vivo do teu relógio","card.training_status.title":"Estado de treino","card.training_profile.title":"Perfil de treino","card.training_profile.subtitle":"O teu treino num relance","card.heart_rate.title":"Frequência cardíaca","empty.last_workout.title":"Sem treino recente","empty.last_workout.subtitle":"Sincroniza o teu relógio com a app Suunto para o veres aqui.","empty.hr_zones.title":"Sem dados de zonas","empty.hr_zones.subtitle":"O teu próximo treino ao ar livre com cinta cardíaca vai preencher isto.","empty.sleep_readiness.title":"Ainda sem dados de sono","empty.sleep_readiness.subtitle":"Usa o relógio para dormir para veres isto aqui.","empty.recovery.title":"Ainda sem dados de recuperação","empty.training_load.title":"A calcular a carga de treino","empty.training_load.subtitle":"Precisa de algum histórico de treinos para calcular - volta a verificar após algumas sessões.","empty.week_stats.title":"Ainda sem histórico de treinos","empty.today.title":"Ainda sem dados em direto","empty.training_status.title":"Ainda não há dados suficientes","empty.training_status.subtitle":"Precisa de algum histórico de treino para calcular.","empty.training_profile.title":"Ainda não há dados suficientes","empty.training_profile.subtitle":"Precisa de mais dados dos sensores para calcular o teu perfil.","empty.heart_rate.title":"Ainda sem dados de frequência cardíaca","empty.loading":"A carregar...","empty.generic_error":"Não foi possível carregar os dados Suunto.","error.no_device":"Nenhum dispositivo Suunto encontrado - a integração suunto_app está configurada?","error.multiple_devices":'Foram encontrados vários dispositivos Suunto - define "device_id" na configuração do cartão.',"error.device_missing":'O dispositivo configurado "{device}" não tem entidades suunto_app.',"band.readiness.great":"Ótima","band.readiness.fair":"Razoável","band.readiness.low":"Baixa","band.recovery.well":"Bem recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baixa recuperação","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"A recuperar · faltam {time}","band.hrv.low":"HRV baixa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Descansado","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muito fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baixa","band.acwr.high":"Carga alta - risco de lesão","band.suggestion.hard":"Vai com tudo","band.suggestion.moderate":"Esforço moderado","band.suggestion.easy":"Vá com calma","band.suggestion.rest":"Dia de descanso","chip.workout_logged_today":"Treino registado hoje","chip.workout_today":"Treino hoje","chip.recovering":"A recuperar","chip.nap":"{minutes} min de sesta","chip.nap_earlier":"{minutes} min de sesta (mais cedo)","chip.workouts_30d":"{count} treinos nos últimos 30 dias","chip.acwr":"ACWR {value} · {label}","profile.summary":"Mais forte em {strong} · mais fraco em {light}","chip.more_activity_one":"+{count} outra modalidade","chip.more_activity_other":"+{count} outras modalidades","chip.unusual_recovery":"Recuperação incomum","chip.days_since_one":"{count} dia desde o último treino","chip.days_since_other":"{count} dias desde o último treino","achievement.count_one":"{count} conquista","achievement.count_other":"{count} conquistas","achievement.rank":"Posição #{rank} nesta rota","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Leve","label.rem":"REM","editor.auto_detect":"Este cartão deteta automaticamente o teu dispositivo Suunto - não é necessária configuração.","editor.pick_device":"Foram encontrados vários dispositivos Suunto - escolhe qual este cartão deve usar.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unidades","editor.units_metric":"Métrico (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Modo compacto","editor.days_label":"Janela de tendência (dias)","card.lifetime.title":"Totais Vitalícios","card.lifetime.subtitle":"Desde o início","stat.active_days":"Dias ativos","empty.lifetime.title":"Ainda sem dados vitalícios","card.recent_workouts.title":"Treinos Recentes","empty.recent_workouts.title":"Sem treinos recentes","card.elevation.title":"Altitude e Subidas","stat.ascent":"Subida","stat.descent":"Descida","stat.ascent_time":"Tempo subida","stat.descent_time":"Tempo descida","stat.min_altitude":"Altitude mín.","stat.max_altitude":"Altitude máx.","stat.ascent_rate":"Taxa de subida","empty.elevation.title":"Sem dados de altitude","empty.elevation.subtitle":"Só os treinos ao ar livre com barómetro registam isto.","card.location.title":"Localização de Início","location.open_in_maps":"Abrir no Maps","empty.location.title":"Sem dados de localização","empty.location.subtitle":"Os treinos em interiores não têm ponto de início GPS.","card.fitness.title":"Condição Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Idade física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Ainda sem dados de condição física","empty.fitness.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","card.pmc.title":"Gestão de Desempenho","card.pmc.subtitle":"Tendência de 90 dias","card.recovery_trends.title":"Tendências de Recuperação","card.recovery_trends.subtitle":"Referência de {days} dias","empty.recovery_trends.title":"Ainda sem dados de tendências de recuperação","card.weekly_volume.title":"Volume Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Ainda sem dados de volume semanal","stat.average":"Média","stat.total":"Total","card.hr_curve.title":"Curva de Frequência Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Agora","stat.hr_min":"Mín. de hoje","stat.hr_max":"Máx. de hoje","empty.hr_curve.title":"Ainda sem dados de FC em direto","empty.hr_curve.subtitle":"Usa e sincroniza o teu relógio para veres aqui a curva de hoje.","card.sleep_trends.title":"Tendências de Sono","card.sleep_trends.subtitle":"Últimas {days} noites","empty.sleep_trends.title":"Ainda sem dados de tendências de sono","card.weekly_goal.title":"Meta Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Ainda sem distância semanal","editor.goal_label":"Meta semanal (km)","card.streak.title":"Sequência de Atividade","card.streak.subtitle":"Últimos 14 dias","streak.window_count_one":"{count} dia ativo","streak.window_count_other":"{count} dias ativos","streak.days_one":"{count} dia de sequência","streak.days_other":"{count} dias de sequência","streak.none":"Sem sequência ativa - começa hoje","empty.streak.title":"Ainda sem histórico de treinos","just_finished.title":"Bom trabalho!","just_finished.idle.title":"À espera do teu próximo treino","just_finished.idle.subtitle":"Este cartão acende assim que o teu relógio sincronizar um treino novo.","empty.just_finished.title":"Sem treino recente","card.activity_trends.title":"Tendências de Atividade","card.activity_trends.subtitle":"Últimos 14 dias","empty.activity_trends.title":"Ainda sem dados de tendências de atividade","card.recovery_balance_trend.title":"Tendência do Equilíbrio de Recuperação","card.recovery_balance_trend.subtitle":"Últimos 14 dias","empty.recovery_balance_trend.title":"Ainda sem dados de tendências de recuperação","card.readiness_trend.title":"Tendência de Prontidão","card.readiness_trend.subtitle":"Últimos 30 dias","empty.readiness_trend.title":"Ainda sem dados de tendências de prontidão","stat.cadence":"Cadência","stat.stride_length":"Comprimento da passada","stat.pct_hrmax":"% da FC máx.","stat.sleep_avg_hr":"FC média sono","stat.sleep_min_hr":"FC mín. sono","chip.bedtime":"Deitou-se {time}","card.activity_calendar.title":"Calendário de Atividade","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Ainda sem histórico de treinos","activity_calendar.active_days_one":"{count} dia ativo","activity_calendar.active_days_other":"{count} dias ativos","card.workout_comparison.title":"Comparação de Treinos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ainda sem treinos suficientes para comparar","empty.workout_comparison.subtitle":"Faz a mesma atividade duas vezes para veres uma comparação.","stat.distance_delta":"Distância ({delta})","stat.duration_delta":"Duração ({delta})","stat.avg_hr_delta":"FC média ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"Em Números","card.milestones.subtitle":"Desde que começaste","empty.milestones.title":"Ainda sem dados totais","stat.earth_laps":"Voltas à Terra","stat.marathons":"Maratonas","stat.moon_pct":"% até à Lua","stat.burgers":"Hambúrgueres","card.athlete_profile.title":"Personalidade de Treino","empty.athlete_profile.title":"Ainda sem dados suficientes","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Caminhante","personality.activity.walking":"Andarilho","personality.activity.gym":"Atleta de Força","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remador","personality.activity.other":"Multidesportivo","personality.schedule.weekend":"Guerreiro de Fim de Semana","personality.schedule.weekday":"Regular da Semana","personality.schedule.balanced":"Horário Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Ativo à Tarde","personality.time.evening":"Atleta da Noite","personality.time.night":"Coruja Noturna","card.pace_trend.title":"Tendência de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sessões","empty.pace_trend.title":"Ainda sem treinos suficientes para comparar","empty.pace_trend.subtitle":"Faz a mesma atividade algumas vezes para veres uma tendência.","pace_trend.faster":"A ficar mais rápido","pace_trend.slower":"A ficar mais lento","pace_trend.steady":"Ritmo estável","card.lap_splits.title":"Tempos de Volta","empty.lap_splits.title":"Sem dados de voltas","empty.lap_splits.subtitle":"Nem todos os treinos têm voltas - o próximo que tiver vai preencher isto.","stat.laps":"Voltas","stat.fastest_lap":"Volta mais rápida","label.lap":"Volta {n}","card.training_effect_trend.title":"Tendência do Efeito de Treino","empty.training_effect_trend.title":"Ainda sem dados de efeito de treino","achievements.badge.around_globe":"Volta ao mundo","achievements.badge.century_club":"Clube da Centena - 100 treinos","achievements.badge.consistency_king":"Rei da Constância - sequência de 14 dias","achievements.badge.iron_will":"Vontade de Ferro - sequência de 30 dias","achievements.badge.days_100":"100 dias ativos","achievements.badge.distance_1000":"Clube dos 1000 km","achievements.badge.distance_5000":"Clube dos 5000 km","achievements.badge.elite_engine":"Motor de elite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal queimadas","achievements.badge.energy_1m":"1.000.000 kcal queimadas","achievements.badge.full_year":"Ano inteiro ativo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Pau para toda obra - 5+ modalidades","achievements.badge.multi_sport":"Atleta multimodalidade - 3+ modalidades","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treinos","achievements.badge.workouts_1000":"1000 treinos","achievements.badge.workouts_250":"250 treinos","achievements.badge.workouts_500":"500 treinos","achievements.category.days":"Dias ativos","achievements.category.distance":"Distância","achievements.category.energy":"Energia","achievements.category.fitness":"Nível de forma física","achievements.category.records":"Recordes pessoais","achievements.category.time":"Tempo de treino","achievements.category.variety":"Variedade","achievements.category.workouts":"Treinos registados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Conquistas","achievements.next":"Próximo: {name} ({pct}%)","class.rest":"+{pct}% outras atividades","class.tag":"Foco: {activity}","empty.achievements.subtitle":"Regista alguns treinos para começar a desbloquear emblemas.","empty.achievements.title":"Ainda sem conquistas","empty.class.subtitle":"Regista alguns treinos para revelar a tua classe.","empty.class.title":"Ainda sem dados suficientes","empty.level.subtitle":"O teu primeiro treino sincronizado inicia a subida.","empty.level.title":"Ainda sem dados totais","empty.player.subtitle":"Precisa de algum histórico de treino para calcular as tuas estatísticas.","empty.player.title":"Ainda sem dados suficientes","level.label":"NÍVEL","level.source":"{count} treinos registados","level.subtitle":"Alimentado pela tua carga de treino total","level.title.grinder":"Batalhador de Resistência","level.title.legend":"Lenda Viva","level.title.novice":"Recruta Novato","level.title.veteran":"Veterano Experiente","level.xp_to_next":"{xp} XP até o Nv {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista em {activity}","player.help.title":"O que isto significa","player.help.sta":"STA · Resistência, da tua Forma (CTL): quanta carga de treino constante consegues aguentar","player.help.pwr":"PWR · Potência, da intensidade média (TSS) das tuas sessões recentes","player.help.rec":"REC · Recuperação, a tua pontuação atual de Prontidão","player.help.con":"CON · Constância, treinos registados nos últimos 30 dias","player.help.end":"END · Resistência, do teu VO2max estimado","player.help.frm":"FRM · Forma, do teu balanço atual de carga de treino (TSB)","player.help.disclaimer":"Valores heurísticos calculados a partir dos teus próprios dados - não é uma métrica oficial da Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Ouro","player.tier.legendary":"Lendário","player.tier.silver":"Prata","records.climb":"Maior subida","records.distance":"Treino mais longo (distância)","records.pace":"Ritmo mais rápido","records.session":"Sessão mais dura","records.streak":"Sequência mais longa","records.streak_days_one":"{count} dia","records.streak_days_other":"{count} dias","records.workout":"Treino mais longo","class.name.cycling":"Guerreiro da Resistência","class.name.running":"Velocista","class.name.trekking":"Desbravador","class.name.walking":"Andarilho","class.name.gym":"Berserker da Força","class.name.swim":"Senhor das Marés","class.name.ski":"Corredor do Gelo","class.name.row":"Remador","class.name.other":"Pau para toda obra","class.flavor.cycling":"Feito para esforços longos e constantes, não para velocidade pura. Qualquer outro desporto é treino complementar.","class.flavor.running":"Rápido na saída e focado no ritmo. A distância é apenas um meio.","class.flavor.trekking":"Em casa em terreno difícil, percorrendo quilómetros durante horas.","class.flavor.walking":"Quilómetros constantes e de baixo impacto que se somam - constância acima de intensidade.","class.flavor.gym":"Força bruta antes da distância. As sessões de força vêm primeiro.","class.flavor.swim":"Resistência forjada na água, braçada a braçada.","class.flavor.ski":"Velocidade e ritmo na neve e no frio.","class.flavor.row":"Força rítmica, remada a remada.","class.flavor.other":"Nenhum desporto domina - uma mistura verdadeiramente equilibrada.","card.next_milestone.title":"Próxima Meta","card.next_milestone.subtitle":"Distância acumulada","empty.next_milestone.title":"Ainda sem distância acumulada","next_milestone.remaining_label":"restantes","next_milestone.target":"até {target} km acumulados - {pct}% do caminho","next_milestone.workouts_one":"{count} treino até {target} no total","next_milestone.workouts_other":"{count} treinos até {target} no total","next_milestone.eta_one":"a {pace} km/semana - cerca de {weeks} semana","next_milestone.eta_other":"a {pace} km/semana - cerca de {weeks} semanas","card.story.title":"A Tua História Suunto","card.story.subtitle":"Desde o teu primeiro treino","empty.story.title":"Ainda sem dados acumulados","story.top_activity":"{activity} - a tua atividade principal","story.top_activity_share":"{count} treinos - {pct}% da tua história","story.record_subtitle":"O teu recorde pessoal de sempre","card.sleep_clock.title":"Relógio do Sono","card.sleep_clock.subtitle":"Noite passada","empty.sleep_clock.title":"Ainda sem dados de sono","empty.sleep_clock.subtitle":"Usa o teu relógio à noite para ver isto aqui.","sleep_clock.quality":"{pct}% de qualidade do sono","card.sleep_rhythm.title":"Ritmo do Sono","card.sleep_rhythm.subtitle":"Últimas 7 noites","empty.sleep_rhythm.title":"Ainda sem histórico de sono suficiente","empty.sleep_rhythm.subtitle":"Precisa de algumas noites de dados para mostrar um padrão.","sleep_rhythm.avg_bedtime":"Hora média de deitar {time}","sleep_rhythm.avg_wake":"Hora média de acordar {time}","sleep_rhythm.spread":"Variação de {minutes} min","sleep_rhythm.legend_normal":"Noite típica","sleep_rhythm.legend_outlier":"{minutes}+ min fora da média","card.route.title":"Rota","empty.route.title":"Sem dados de rota","empty.route.subtitle":"Treinos indoor não têm registo de GPS.","route.pace_slower":"Mais lento","route.pace_faster":"Mais rápido","card.month_story.title":"Este Mês","empty.month_story.title":"Ainda sem treinos este mês","story.share_month":"{count} treinos - {pct}% deste mês","story.record_subtitle_month":"O seu recorde este mês","card.year_story.title":"Este Ano","empty.year_story.title":"Ainda sem treinos este ano","story.share_year":"{count} treinos - {pct}% deste ano","story.record_subtitle_year":"O seu recorde este ano","card.best_efforts.title":"Melhores Marcas","card.best_efforts.subtitle":"{count} de {total} conseguidas","empty.best_efforts.title":"Ainda sem melhores marcas","empty.best_efforts.subtitle":"Registadas a partir de treinos de corrida a partir de agora, não retroativamente.","best_efforts.not_yet":"Ainda não conseguido","distance.half_marathon":"Meia Maratona","distance.marathon":"Maratona","card.steps_today.title":"Passos Hoje","card.steps_today.subtitle":"Meta: {goal} passos","empty.steps_today.title":"Ainda sem dados de passos","editor.steps_goal_label":"Meta diária (passos)","steps_today.goal_pct":"{pct}% da meta diária","steps_today.vs_avg_up":"+{pct}% em relação à sua média de 7 dias ({avg})","steps_today.vs_avg_down":"-{pct}% em relação à sua média de 7 dias ({avg})","card.steps_trend.title":"Tendência de Passos","card.steps_trend.subtitle":"Últimos 14 dias","empty.steps_trend.title":"Ainda sem histórico de passos","steps_trend.legend_met":"Meta atingida","steps_trend.legend_below":"Abaixo da meta","steps_trend.days_at_goal":"Dias com meta","card.month_records.title":"Recordes do Mês","card.month_records.subtitle":"{count} de {total} alcançados este mês","empty.month_records.title":"Ainda sem recordes este mês","empty.month_records.subtitle":"Seus melhores resultados deste mês aparecerão aqui.","card.year_records.title":"Recordes do Ano","card.year_records.subtitle":"{count} de {total} alcançados este ano","empty.year_records.title":"Ainda sem recordes este ano","empty.year_records.subtitle":"Seus melhores resultados deste ano aparecerão aqui.","card.running_dynamics.title":"Dinâmica de Corrida","card.running_dynamics.subtitle":"{activity} - últimos {count} treinos","empty.running_dynamics.title":"Ainda sem dados suficientes","empty.running_dynamics.subtitle":"Requer alguns treinos de corrida recentes com dados de cadência.","card.weekly_steps_goal.title":"Meta Semanal de Passos","card.weekly_steps_goal.subtitle":"{value} de {goal} passos","empty.weekly_steps_goal.title":"Ainda sem dados de passos","editor.weekly_steps_goal_label":"Meta semanal (passos)","card.goals_overview.title":"Resumo de Metas","card.goals_overview.subtitle":"Esta semana","empty.goals_overview.title":"Ainda sem dados de metas","card.week_compare.title":"Esta Semana vs Semana Passada","card.week_compare.subtitle":"Totais móveis de 7 dias","empty.week_compare.title":"Ainda sem histórico suficiente","empty.week_compare.subtitle":"Volte em cerca de uma semana para ver a comparação.","week_compare.legend_now":"Esta semana","week_compare.legend_prev":"Semana passada"},fr:{"stat.distance":"Distance","stat.duration":"Durée","stat.avg_speed":"Vitesse moy.","stat.avg_pace":"Allure moy.","stat.avg_hr":"FC moy.","stat.max_hr":"FC max","stat.training_effect":"Effet d'entraînement","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Ressenti","stat.energy":"Énergie","stat.time":"Temps","stat.workouts":"Séances","stat.steps":"Pas","stat.heart_rate":"Fréquence cardiaque","stat.quality":"Qualité","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repos","stat.resting_hr_delta":"FC repos ({delta})","stat.spo2":"SpO2","stat.stress_level":"Niveau de stress","stat.recovery_window":"Temps de récupération","stat.ctl":"CTL · forme","stat.atl":"ATL · fatigue","stat.tsb":"TSB · forme","stat.readiness":"Préparation","stat.recovery_balance":"Équilibre de récupération","stat.training_suggestion":"Suggestion du jour","stat.volume":"Volume","stat.intensity":"Intensité","stat.consistency":"Régularité","stat.recovery":"Récupération","stat.variety":"Variété","card.hr_zones.title":"Zones de Fréquence Cardiaque","card.hr_zones.last_workout":"Dernière séance","card.sleep_readiness.title":"Sommeil et Préparation","card.sleep_readiness.subtitle_no_wake":"{duration} de sommeil","card.sleep_readiness.subtitle_with_wake":"{duration} de sommeil · réveil à {time}","card.recovery.title":"Récupération","card.training_load.title":"Charge d'Entraînement","card.training_load.subtitle_fallback":"Tendance de forme (CTL)","card.week_stats.title":"Cette Semaine et Cumul Total","card.week_stats.subtitle":"7 derniers jours","card.week_stats.lifetime_title":"Cumul par activité","card.today.title":"Aujourd'hui","card.today.subtitle":"En direct de ta montre","card.training_status.title":"État d'entraînement","card.training_profile.title":"Profil d'entraînement","card.training_profile.subtitle":"Ton entraînement en un coup d'œil","card.heart_rate.title":"Fréquence cardiaque","empty.last_workout.title":"Aucune séance récente","empty.last_workout.subtitle":"Synchronise ta montre avec l'appli Suunto pour la voir ici.","empty.hr_zones.title":"Aucune donnée de zone","empty.hr_zones.subtitle":"Ta prochaine séance en extérieur avec ceinture cardiaque remplira ceci.","empty.sleep_readiness.title":"Pas encore de données de sommeil","empty.sleep_readiness.subtitle":"Porte ta montre pour dormir afin de le voir ici.","empty.recovery.title":"Pas encore de données de récupération","empty.training_load.title":"Calcul de la charge d'entraînement","empty.training_load.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé - reviens après quelques séances.","empty.week_stats.title":"Pas encore d'historique d'entraînement","empty.today.title":"Pas encore de données en direct","empty.training_status.title":"Pas encore assez de données","empty.training_status.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé.","empty.training_profile.title":"Pas encore assez de données","empty.training_profile.subtitle":"Nécessite plus de données de capteurs pour calculer ton profil.","empty.heart_rate.title":"Pas encore de données de fréquence cardiaque","empty.loading":"Chargement...","empty.generic_error":"Impossible de charger les données Suunto.","error.no_device":"Aucun appareil Suunto trouvé - l'intégration suunto_app est-elle configurée ?","error.multiple_devices":'Plusieurs appareils Suunto trouvés - définis "device_id" dans la configuration de la carte.',"error.device_missing":"L'appareil configuré \"{device}\" n'a aucune entité suunto_app.","band.readiness.great":"Excellente","band.readiness.fair":"Correcte","band.readiness.low":"Faible","band.recovery.well":"Bien récupéré","band.recovery.partial":"Partiellement récupéré","band.recovery.low":"Faible récupération","band.recovery.fully":"Entièrement récupéré","band.recovery.recovering":"Récupération · {time} restant","band.hrv.low":"HRV basse","band.hrv.high":"HRV élevée","band.hrv.balanced":"HRV équilibrée","band.form.fresh":"Frais","band.form.neutral":"Neutre","band.form.fatigued":"Fatigué","band.form.very_fatigued":"Très fatigué","band.acwr.safe":"Zone sûre","band.acwr.low":"Charge faible","band.acwr.high":"Charge élevée - risque de blessure","band.suggestion.hard":"Foncez","band.suggestion.moderate":"Effort modéré","band.suggestion.easy":"Y aller doucement","band.suggestion.rest":"Jour de repos","chip.workout_logged_today":"Séance enregistrée aujourd'hui","chip.workout_today":"Séance aujourd'hui","chip.recovering":"Récupération","chip.nap":"{minutes} min de sieste","chip.nap_earlier":"{minutes} min de sieste (plus tôt)","chip.workouts_30d":"{count} séances au cours des 30 derniers jours","chip.acwr":"ACWR {value} · {label}","profile.summary":"Le plus fort en {strong} · le plus faible en {light}","chip.more_activity_one":"+{count} autre activité","chip.more_activity_other":"+{count} autres activités","chip.unusual_recovery":"Récupération inhabituelle","chip.days_since_one":"{count} jour depuis la dernière séance","chip.days_since_other":"{count} jours depuis la dernière séance","achievement.count_one":"{count} exploit","achievement.count_other":"{count} exploits","achievement.rank":"Rang #{rank} sur cet itinéraire","label.zone":"Zone {n}","label.deep":"Profond","label.light":"Léger","label.rem":"REM","editor.auto_detect":"Cette carte détecte automatiquement ton appareil Suunto - aucune configuration nécessaire.","editor.pick_device":"Plusieurs appareils Suunto trouvés - choisis celui que cette carte doit utiliser.","editor.device_label":"Appareil Suunto","editor.units_label":"Unités","editor.units_metric":"Métrique (km)","editor.units_imperial":"Impérial (mi)","editor.compact_label":"Mode compact","editor.days_label":"Fenêtre de tendance (jours)","card.lifetime.title":"Cumul Total","card.lifetime.subtitle":"Depuis le début","stat.active_days":"Jours actifs","empty.lifetime.title":"Pas encore de cumul total","card.recent_workouts.title":"Séances Récentes","empty.recent_workouts.title":"Aucune séance récente","card.elevation.title":"Dénivelé et Montées","stat.ascent":"Montée","stat.descent":"Descente","stat.ascent_time":"Temps montée","stat.descent_time":"Temps descente","stat.min_altitude":"Altitude min.","stat.max_altitude":"Altitude max.","stat.ascent_rate":"Vitesse ascensionnelle","empty.elevation.title":"Aucune donnée d'altitude","empty.elevation.subtitle":"Seules les séances en extérieur avec un altimètre enregistrent ceci.","card.location.title":"Lieu de Départ","location.open_in_maps":"Ouvrir dans Maps","empty.location.title":"Aucune donnée de localisation","empty.location.subtitle":"Les séances en intérieur n'ont pas de point de départ GPS.","card.fitness.title":"Forme Physique","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Âge physique","fitness.measured":"Mesuré {time} · {activity}","empty.fitness.title":"Pas encore de données de forme physique","empty.fitness.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","card.pmc.title":"Gestion de la Performance","card.pmc.subtitle":"Tendance sur 90 jours","card.recovery_trends.title":"Tendances de Récupération","card.recovery_trends.subtitle":"Référence sur {days} jours","empty.recovery_trends.title":"Pas encore de données de tendances de récupération","card.weekly_volume.title":"Volume Hebdomadaire","card.weekly_volume.subtitle":"12 dernières semaines","empty.weekly_volume.title":"Pas encore de données de volume hebdomadaire","stat.average":"Moyenne","stat.total":"Total","card.hr_curve.title":"Courbe de Fréquence Cardiaque","card.hr_curve.subtitle":"Dernières 24 heures","stat.hr_now":"Maintenant","stat.hr_min":"Min. du jour","stat.hr_max":"Max. du jour","empty.hr_curve.title":"Pas encore de données de FC en direct","empty.hr_curve.subtitle":"Porte et synchronise ta montre pour voir la courbe du jour ici.","card.sleep_trends.title":"Tendances de Sommeil","card.sleep_trends.subtitle":"{days} dernières nuits","empty.sleep_trends.title":"Pas encore de données de tendances de sommeil","card.weekly_goal.title":"Objectif Hebdomadaire","card.weekly_goal.subtitle":"{value} sur {goal} km","empty.weekly_goal.title":"Pas encore de distance hebdomadaire","editor.goal_label":"Objectif hebdomadaire (km)","card.streak.title":"Série d'Activité","card.streak.subtitle":"14 derniers jours","streak.window_count_one":"{count} jour actif","streak.window_count_other":"{count} jours actifs","streak.days_one":"{count} jour de série","streak.days_other":"{count} jours de série","streak.none":"Aucune série active - bouge aujourd'hui","empty.streak.title":"Pas encore d'historique d'entraînement","just_finished.title":"Bien joué !","just_finished.idle.title":"En attente de ta prochaine séance","just_finished.idle.subtitle":"Cette carte s'allume dès que ta montre synchronise une nouvelle séance.","empty.just_finished.title":"Aucune séance récente","card.activity_trends.title":"Tendances d'Activité","card.activity_trends.subtitle":"14 derniers jours","empty.activity_trends.title":"Pas encore de données de tendances d'activité","card.recovery_balance_trend.title":"Tendance de l'Équilibre de Récupération","card.recovery_balance_trend.subtitle":"14 derniers jours","empty.recovery_balance_trend.title":"Pas encore de données de tendances de récupération","card.readiness_trend.title":"Tendance de Préparation","card.readiness_trend.subtitle":"30 derniers jours","empty.readiness_trend.title":"Pas encore de données de tendances de préparation","stat.cadence":"Cadence","stat.stride_length":"Longueur de foulée","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC moy. som.","stat.sleep_min_hr":"FC min. som.","chip.bedtime":"Coucher {time}","card.activity_calendar.title":"Calendrier d'Activité","card.activity_calendar.subtitle":"6 dernières semaines","empty.activity_calendar.title":"Pas encore d'historique d'entraînement","activity_calendar.active_days_one":"{count} jour actif","activity_calendar.active_days_other":"{count} jours actifs","card.workout_comparison.title":"Comparaison de Séances","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Pas encore assez de séances similaires","empty.workout_comparison.subtitle":"Fais la même activité deux fois pour voir une comparaison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Durée ({delta})","stat.avg_hr_delta":"FC moy. ({delta})","stat.pace_delta":"Allure ({delta})","card.milestones.title":"En Chiffres","card.milestones.subtitle":"Depuis le début","empty.milestones.title":"Pas encore de données cumulées","stat.earth_laps":"Tours de la Terre","stat.marathons":"Marathons","stat.moon_pct":"% jusqu'à la Lune","stat.burgers":"Burgers","card.athlete_profile.title":"Personnalité Sportive","empty.athlete_profile.title":"Pas encore assez de données","personality.activity.cycling":"Cycliste","personality.activity.running":"Coureur","personality.activity.trekking":"Randonneur","personality.activity.walking":"Marcheur","personality.activity.gym":"Athlète de Force","personality.activity.swim":"Nageur","personality.activity.ski":"Skieur","personality.activity.row":"Rameur","personality.activity.other":"Multisportif","personality.schedule.weekend":"Guerrier du Week-end","personality.schedule.weekday":"Régulier en Semaine","personality.schedule.balanced":"Planning Équilibré","personality.time.morning":"Lève-tôt","personality.time.afternoon":"Actif l'Après-midi","personality.time.evening":"Athlète du Soir","personality.time.night":"Oiseau de Nuit","card.pace_trend.title":"Tendance d'Allure","card.pace_trend.subtitle":"{activity} · {count} dernières séances","empty.pace_trend.title":"Pas encore assez de séances similaires","empty.pace_trend.subtitle":"Fais la même activité plusieurs fois pour voir une tendance.","pace_trend.faster":"S'améliore","pace_trend.slower":"Ralentit","pace_trend.steady":"Stable","card.lap_splits.title":"Temps par Tour","empty.lap_splits.title":"Aucune donnée de tour","empty.lap_splits.subtitle":"Tous les entraînements n'ont pas de tours - le prochain qui en a remplira ceci.","stat.laps":"Tours","stat.fastest_lap":"Tour le plus rapide","label.lap":"Tour {n}","card.training_effect_trend.title":"Tendance de l'Effet d'Entraînement","empty.training_effect_trend.title":"Pas encore de données d'effet d'entraînement","achievements.badge.around_globe":"Tour du monde","achievements.badge.century_club":"Club du Centenaire - 100 entraînements","achievements.badge.consistency_king":"Roi de la Régularité - série de 14 jours","achievements.badge.iron_will":"Volonté de Fer - série de 30 jours","achievements.badge.days_100":"100 jours actifs","achievements.badge.distance_1000":"Club des 1000 km","achievements.badge.distance_5000":"Club des 5000 km","achievements.badge.elite_engine":"Moteur d'élite - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal brûlées","achievements.badge.energy_1m":"1 000 000 kcal brûlées","achievements.badge.full_year":"Actif toute l'année","achievements.badge.hours_100":"100 heures","achievements.badge.hours_500":"500 heures","achievements.badge.jack_of_all_trades":"Touche-à-tout - 5+ sports","achievements.badge.multi_sport":"Athlète multisport - 3+ sports","achievements.badge.solid_engine":"Moteur solide - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entraînements","achievements.badge.workouts_1000":"1000 entraînements","achievements.badge.workouts_250":"250 entraînements","achievements.badge.workouts_500":"500 entraînements","achievements.category.days":"Jours actifs","achievements.category.distance":"Distance","achievements.category.energy":"Énergie","achievements.category.fitness":"Niveau de forme","achievements.category.records":"Records personnels","achievements.category.time":"Temps d'entraînement","achievements.category.variety":"Variété","achievements.category.workouts":"Entraînements enregistrés","card.achievements.subtitle":"{unlocked} sur {total} débloqués","card.achievements.title":"Succès","achievements.next":"Prochain : {name} ({pct}%)","class.rest":"+{pct}% autres activités","class.tag":"Orientation : {activity}","empty.achievements.subtitle":"Enregistrez quelques séances pour débloquer des badges.","empty.achievements.title":"Aucun succès pour l'instant","empty.class.subtitle":"Enregistrez quelques séances pour révéler votre classe.","empty.class.title":"Pas encore assez de données","empty.level.subtitle":"Votre première séance synchronisée lance l'ascension.","empty.level.title":"Pas encore de données cumulées","empty.player.subtitle":"Nécessite un peu d'historique d'entraînement pour calculer vos stats.","empty.player.title":"Pas encore assez de données","level.label":"NIVEAU","level.source":"{count} entraînements enregistrés","level.subtitle":"Alimenté par votre charge d'entraînement cumulée","level.title.grinder":"Bosseur d'Endurance","level.title.legend":"Légende Vivante","level.title.novice":"Recrue Fraîche","level.title.veteran":"Vétéran Aguerri","level.xp_to_next":"{xp} XP avant Niv {level}","level.xp_total":"{xp} XP","player.archetype":"Spécialiste {activity}","player.help.title":"Ce que cela signifie","player.help.sta":"STA · Endurance, d'après votre Forme (CTL) : la charge d'entraînement régulière que vous pouvez supporter","player.help.pwr":"PWR · Puissance, d'après l'intensité moyenne (TSS) de vos séances récentes","player.help.rec":"REC · Récupération, votre score de Disponibilité actuel","player.help.con":"CON · Régularité, entraînements enregistrés sur les 30 derniers jours","player.help.end":"END · Endurance, d'après votre VO2max estimé","player.help.frm":"FRM · Forme, d'après votre balance de charge d'entraînement actuelle (TSB)","player.help.disclaimer":"Valeurs heuristiques calculées à partir de vos propres données - pas une métrique officielle Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Or","player.tier.legendary":"Légendaire","player.tier.silver":"Argent","records.climb":"Plus grande ascension","records.distance":"Entraînement le plus long (distance)","records.pace":"Allure la plus rapide","records.session":"Séance la plus dure","records.streak":"Plus longue série","records.streak_days_one":"{count} jour","records.streak_days_other":"{count} jours","records.workout":"Entraînement le plus long","class.name.cycling":"Guerrier de l'Endurance","class.name.running":"Sprinteur","class.name.trekking":"Éclaireur","class.name.walking":"Vagabond","class.name.gym":"Berserker de la Force","class.name.swim":"Maître des Marées","class.name.ski":"Coureur du Givre","class.name.row":"Rameur","class.name.other":"Touche-à-tout","class.flavor.cycling":"Conçu pour des efforts longs et réguliers plutôt que la vitesse pure. Tout autre sport n'est qu'un complément.","class.flavor.running":"Rapide au départ et centré sur le tempo. La distance n'est qu'un moyen.","class.flavor.trekking":"À l'aise sur terrain difficile, avalant les kilomètres pendant des heures.","class.flavor.walking":"Des kilomètres réguliers et peu traumatisants qui s'accumulent - la régularité prime sur l'intensité.","class.flavor.gym":"La force brute avant la distance. Les séances de force passent en premier.","class.flavor.swim":"Une endurance forgée dans l'eau, brasse après brasse.","class.flavor.ski":"Vitesse et rythme sur la neige et le froid.","class.flavor.row":"Une force rythmée, coup après coup.","class.flavor.other":"Aucun sport ne domine - un mélange vraiment équilibré.","card.next_milestone.title":"Prochain Objectif","card.next_milestone.subtitle":"Distance cumulée","empty.next_milestone.title":"Pas encore de distance cumulée","next_milestone.remaining_label":"restants","next_milestone.target":"jusqu'à {target} km cumulés - {pct}% du chemin","next_milestone.workouts_one":"{count} séance jusqu'à {target} au total","next_milestone.workouts_other":"{count} séances jusqu'à {target} au total","next_milestone.eta_one":"à {pace} km/semaine - encore environ {weeks} semaine","next_milestone.eta_other":"à {pace} km/semaine - encore environ {weeks} semaines","card.story.title":"Ton Histoire Suunto","card.story.subtitle":"Depuis ta première séance","empty.story.title":"Pas encore de données cumulées","story.top_activity":"{activity} - ton activité principale","story.top_activity_share":"{count} séances - {pct}% de ton historique","story.record_subtitle":"Ton record personnel absolu","card.sleep_clock.title":"Horloge du Sommeil","card.sleep_clock.subtitle":"Cette nuit","empty.sleep_clock.title":"Pas encore de données de sommeil","empty.sleep_clock.subtitle":"Porte ta montre la nuit pour le voir ici.","sleep_clock.quality":"{pct}% de qualité de sommeil","card.sleep_rhythm.title":"Rythme de Sommeil","card.sleep_rhythm.subtitle":"7 dernières nuits","empty.sleep_rhythm.title":"Pas encore assez d'historique de sommeil","empty.sleep_rhythm.subtitle":"Il faut quelques nuits de données pour montrer une tendance.","sleep_rhythm.avg_bedtime":"Coucher moyen {time}","sleep_rhythm.avg_wake":"Réveil moyen {time}","sleep_rhythm.spread":"Écart de {minutes} min","sleep_rhythm.legend_normal":"Nuit typique","sleep_rhythm.legend_outlier":"{minutes}+ min d'écart par rapport à la moyenne","card.route.title":"Itinéraire","empty.route.title":"Aucune donnée d'itinéraire","empty.route.subtitle":"Les séances en intérieur n'ont pas de trace GPS.","route.pace_slower":"Plus lent","route.pace_faster":"Plus rapide","card.month_story.title":"Ce Mois-ci","empty.month_story.title":"Pas encore d'entraînements ce mois-ci","story.share_month":"{count} entraînements - {pct}% de ce mois-ci","story.record_subtitle_month":"Votre record ce mois-ci","card.year_story.title":"Cette Année","empty.year_story.title":"Pas encore d'entraînements cette année","story.share_year":"{count} entraînements - {pct}% de cette année","story.record_subtitle_year":"Votre record cette année","card.best_efforts.title":"Meilleures Performances","card.best_efforts.subtitle":"{count} sur {total} réalisées","empty.best_efforts.title":"Pas encore de meilleures performances","empty.best_efforts.subtitle":"Enregistrées à partir des entraînements de course à partir de maintenant, pas rétroactivement.","best_efforts.not_yet":"Pas encore réalisé","distance.half_marathon":"Semi-marathon","distance.marathon":"Marathon","card.steps_today.title":"Pas Aujourd'hui","card.steps_today.subtitle":"Objectif : {goal} pas","empty.steps_today.title":"Pas encore de données de pas","editor.steps_goal_label":"Objectif quotidien (pas)","steps_today.goal_pct":"{pct}% de l'objectif quotidien","steps_today.vs_avg_up":"+{pct}% par rapport à votre moyenne sur 7 jours ({avg})","steps_today.vs_avg_down":"-{pct}% par rapport à votre moyenne sur 7 jours ({avg})","card.steps_trend.title":"Tendance des Pas","card.steps_trend.subtitle":"Les 14 derniers jours","empty.steps_trend.title":"Pas encore d'historique de pas","steps_trend.legend_met":"Objectif atteint","steps_trend.legend_below":"En dessous de l'objectif","steps_trend.days_at_goal":"Jours avec objectif","card.month_records.title":"Records du Mois","card.month_records.subtitle":"{count} sur {total} établis ce mois-ci","empty.month_records.title":"Pas encore de records ce mois-ci","empty.month_records.subtitle":"Vos meilleures performances de ce mois apparaîtront ici.","card.year_records.title":"Records de l'Année","card.year_records.subtitle":"{count} sur {total} établis cette année","empty.year_records.title":"Pas encore de records cette année","empty.year_records.subtitle":"Vos meilleures performances de cette année apparaîtront ici.","card.running_dynamics.title":"Dynamique de Course","card.running_dynamics.subtitle":"{activity} - {count} dernières séances","empty.running_dynamics.title":"Pas encore assez de données","empty.running_dynamics.subtitle":"Nécessite quelques séances de course récentes avec des données de cadence.","card.weekly_steps_goal.title":"Objectif Hebdo : Pas","card.weekly_steps_goal.subtitle":"{value} sur {goal} pas","empty.weekly_steps_goal.title":"Pas encore de données de pas","editor.weekly_steps_goal_label":"Objectif hebdomadaire (pas)","card.goals_overview.title":"Aperçu des objectifs","card.goals_overview.subtitle":"Cette semaine","empty.goals_overview.title":"Pas encore de données d'objectif","card.week_compare.title":"Cette semaine vs la semaine dernière","card.week_compare.subtitle":"Totaux glissants sur 7 jours","empty.week_compare.title":"Pas encore assez d'historique","empty.week_compare.subtitle":"Revenez dans environ une semaine pour voir une comparaison.","week_compare.legend_now":"Cette semaine","week_compare.legend_prev":"Semaine dernière"},es:{"stat.distance":"Distancia","stat.duration":"Duración","stat.avg_speed":"Vel. media","stat.avg_pace":"Ritmo medio","stat.avg_hr":"FC media","stat.max_hr":"FC máx.","stat.training_effect":"Efecto del entrenamiento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensación","stat.energy":"Energía","stat.time":"Tiempo","stat.workouts":"Entrenamientos","stat.steps":"Pasos","stat.heart_rate":"Frecuencia cardíaca","stat.quality":"Calidad","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC reposo","stat.resting_hr_delta":"FC reposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nivel de estrés","stat.recovery_window":"Tiempo de recuperación","stat.ctl":"CTL · forma","stat.atl":"ATL · fatiga","stat.tsb":"TSB · forma","stat.readiness":"Preparación","stat.recovery_balance":"Equilibrio de recuperación","stat.training_suggestion":"Sugerencia de hoy","stat.volume":"Volumen","stat.intensity":"Intensidad","stat.consistency":"Constancia","stat.recovery":"Recuperación","stat.variety":"Variedad","card.hr_zones.title":"Zonas de Frecuencia Cardíaca","card.hr_zones.last_workout":"Último entrenamiento","card.sleep_readiness.title":"Sueño y Preparación","card.sleep_readiness.subtitle_no_wake":"{duration} de sueño","card.sleep_readiness.subtitle_with_wake":"{duration} de sueño · despertar a las {time}","card.recovery.title":"Recuperación","card.training_load.title":"Carga de Entrenamiento","card.training_load.subtitle_fallback":"Tendencia de forma (CTL)","card.week_stats.title":"Esta Semana y Total Histórico","card.week_stats.subtitle":"Últimos 7 días","card.week_stats.lifetime_title":"Total por actividad","card.today.title":"Hoy","card.today.subtitle":"En vivo desde tu reloj","card.training_status.title":"Estado de entrenamiento","card.training_profile.title":"Perfil de entrenamiento","card.training_profile.subtitle":"Tu entrenamiento de un vistazo","card.heart_rate.title":"Frecuencia cardíaca","empty.last_workout.title":"Sin entrenamiento reciente","empty.last_workout.subtitle":"Sincroniza tu reloj con la app Suunto para verlo aquí.","empty.hr_zones.title":"Sin datos de zonas","empty.hr_zones.subtitle":"Tu próximo entrenamiento al aire libre con banda de frecuencia cardíaca completará esto.","empty.sleep_readiness.title":"Aún sin datos de sueño","empty.sleep_readiness.subtitle":"Usa tu reloj para dormir para verlo aquí.","empty.recovery.title":"Aún sin datos de recuperación","empty.training_load.title":"Calculando la carga de entrenamiento","empty.training_load.subtitle":"Necesita algo de historial de entrenamientos para calcularse - vuelve a comprobarlo tras algunas sesiones.","empty.week_stats.title":"Aún sin historial de entrenamientos","empty.today.title":"Aún sin datos en vivo","empty.training_status.title":"Aún no hay suficientes datos","empty.training_status.subtitle":"Necesita algo de historial de entrenamiento para calcularlo.","empty.training_profile.title":"Aún no hay suficientes datos","empty.training_profile.subtitle":"Necesita más datos de sensores para calcular tu perfil.","empty.heart_rate.title":"Aún sin datos de frecuencia cardíaca","empty.loading":"Cargando...","empty.generic_error":"No se pudieron cargar los datos de Suunto.","error.no_device":"No se encontró ningún dispositivo Suunto - ¿está configurada la integración suunto_app?","error.multiple_devices":'Se encontraron varios dispositivos Suunto - define "device_id" en la configuración de la tarjeta.',"error.device_missing":'El dispositivo configurado "{device}" no tiene entidades suunto_app.',"band.readiness.great":"Excelente","band.readiness.fair":"Aceptable","band.readiness.low":"Baja","band.recovery.well":"Bien recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baja recuperación","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"Recuperando · quedan {time}","band.hrv.low":"HRV baja","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muy fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baja","band.acwr.high":"Carga alta - riesgo de lesión","band.suggestion.hard":"A por ello","band.suggestion.moderate":"Esfuerzo moderado","band.suggestion.easy":"Tómatelo con calma","band.suggestion.rest":"Día de descanso","chip.workout_logged_today":"Entrenamiento registrado hoy","chip.workout_today":"Entrenamiento hoy","chip.recovering":"Recuperando","chip.nap":"{minutes} min de siesta","chip.nap_earlier":"{minutes} min de siesta (antes)","chip.workouts_30d":"{count} entrenamientos en los últimos 30 días","chip.acwr":"ACWR {value} · {label}","profile.summary":"Más fuerte en {strong} · más débil en {light}","chip.more_activity_one":"+{count} actividad más","chip.more_activity_other":"+{count} actividades más","chip.unusual_recovery":"Recuperación inusual","chip.days_since_one":"{count} día desde el último entrenamiento","chip.days_since_other":"{count} días desde el último entrenamiento","achievement.count_one":"{count} logro","achievement.count_other":"{count} logros","achievement.rank":"Puesto #{rank} en esta ruta","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Ligero","label.rem":"REM","editor.auto_detect":"Esta tarjeta detecta automáticamente tu dispositivo Suunto - no se necesita configuración.","editor.pick_device":"Se encontraron varios dispositivos Suunto - elige cuál debe usar esta tarjeta.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unidades","editor.units_metric":"Métrico (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Modo compacto","editor.days_label":"Ventana de tendencia (días)","card.lifetime.title":"Totales Históricos","card.lifetime.subtitle":"Desde el inicio","stat.active_days":"Días activos","empty.lifetime.title":"Aún sin totales históricos","card.recent_workouts.title":"Entrenamientos Recientes","empty.recent_workouts.title":"Sin entrenamientos recientes","card.elevation.title":"Altitud y Ascensos","stat.ascent":"Ascenso","stat.descent":"Descenso","stat.ascent_time":"T. ascenso","stat.descent_time":"T. descenso","stat.min_altitude":"Altitud mín.","stat.max_altitude":"Altitud máx.","stat.ascent_rate":"Velocidad de ascenso","empty.elevation.title":"Sin datos de altitud","empty.elevation.subtitle":"Solo los entrenamientos al aire libre con altímetro registran esto.","card.location.title":"Ubicación de Inicio","location.open_in_maps":"Abrir en Maps","empty.location.title":"Sin datos de ubicación","empty.location.subtitle":"Los entrenamientos en interiores no tienen punto de inicio GPS.","card.fitness.title":"Forma Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Edad física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Aún sin datos de forma física","empty.fitness.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","card.pmc.title":"Gestión del Rendimiento","card.pmc.subtitle":"Tendencia de 90 días","card.recovery_trends.title":"Tendencias de Recuperación","card.recovery_trends.subtitle":"Referencia de {days} días","empty.recovery_trends.title":"Aún sin datos de tendencias de recuperación","card.weekly_volume.title":"Volumen Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Aún sin datos de volumen semanal","stat.average":"Media","stat.total":"Total","card.hr_curve.title":"Curva de Frecuencia Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Ahora","stat.hr_min":"Mín. de hoy","stat.hr_max":"Máx. de hoy","empty.hr_curve.title":"Aún sin datos de FC en vivo","empty.hr_curve.subtitle":"Usa y sincroniza tu reloj para ver aquí la curva de hoy.","card.sleep_trends.title":"Tendencias de Sueño","card.sleep_trends.subtitle":"Últimas {days} noches","empty.sleep_trends.title":"Aún sin datos de tendencias de sueño","card.weekly_goal.title":"Objetivo Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Aún sin distancia semanal","editor.goal_label":"Objetivo semanal (km)","card.streak.title":"Racha de Actividad","card.streak.subtitle":"Últimos 14 días","streak.window_count_one":"{count} día activo","streak.window_count_other":"{count} días activos","streak.days_one":"{count} día de racha","streak.days_other":"{count} días de racha","streak.none":"Sin racha activa - muévete hoy","empty.streak.title":"Aún sin historial de entrenamientos","just_finished.title":"¡Buen trabajo!","just_finished.idle.title":"Esperando tu próximo entrenamiento","just_finished.idle.subtitle":"Esta tarjeta se activa en cuanto tu reloj sincronice un entrenamiento nuevo.","empty.just_finished.title":"Sin entrenamiento reciente","card.activity_trends.title":"Tendencias de Actividad","card.activity_trends.subtitle":"Últimos 14 días","empty.activity_trends.title":"Aún sin datos de tendencias de actividad","card.recovery_balance_trend.title":"Tendencia del Equilibrio de Recuperación","card.recovery_balance_trend.subtitle":"Últimos 14 días","empty.recovery_balance_trend.title":"Aún sin datos de tendencias de recuperación","card.readiness_trend.title":"Tendencia de Preparación","card.readiness_trend.subtitle":"Últimos 30 días","empty.readiness_trend.title":"Aún sin datos de tendencias de preparación","stat.cadence":"Cadencia","stat.stride_length":"Longitud de zancada","stat.pct_hrmax":"% de FC máx.","stat.sleep_avg_hr":"FC med. sueño","stat.sleep_min_hr":"FC mín. sueño","chip.bedtime":"Acostado {time}","card.activity_calendar.title":"Calendario de Actividad","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Aún sin historial de entrenamientos","activity_calendar.active_days_one":"{count} día activo","activity_calendar.active_days_other":"{count} días activos","card.workout_comparison.title":"Comparación de Entrenamientos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Aún no hay suficientes entrenamientos similares","empty.workout_comparison.subtitle":"Haz la misma actividad dos veces para ver una comparación.","stat.distance_delta":"Distancia ({delta})","stat.duration_delta":"Duración ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"En Números","card.milestones.subtitle":"Desde que empezaste","empty.milestones.title":"Aún sin datos históricos","stat.earth_laps":"Vueltas a la Tierra","stat.marathons":"Maratones","stat.moon_pct":"% hasta la Luna","stat.burgers":"Hamburguesas","card.athlete_profile.title":"Personalidad Deportiva","empty.athlete_profile.title":"Aún no hay suficientes datos","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Excursionista","personality.activity.walking":"Caminante","personality.activity.gym":"Atleta de Fuerza","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remero","personality.activity.other":"Multideportista","personality.schedule.weekend":"Guerrero de Fin de Semana","personality.schedule.weekday":"Regular Entre Semana","personality.schedule.balanced":"Horario Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Activo por la Tarde","personality.time.evening":"Atleta Vespertino","personality.time.night":"Búho Nocturno","card.pace_trend.title":"Tendencia de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sesiones","empty.pace_trend.title":"Aún no hay suficientes entrenamientos similares","empty.pace_trend.subtitle":"Haz la misma actividad varias veces para ver una tendencia.","pace_trend.faster":"Mejorando el ritmo","pace_trend.slower":"Perdiendo ritmo","pace_trend.steady":"Ritmo estable","card.lap_splits.title":"Tiempos por Vuelta","empty.lap_splits.title":"Sin datos de vueltas","empty.lap_splits.subtitle":"No todos los entrenamientos tienen vueltas - el próximo que las tenga completará esto.","stat.laps":"Vueltas","stat.fastest_lap":"Vuelta más rápida","label.lap":"Vuelta {n}","card.training_effect_trend.title":"Tendencia del Efecto de Entrenamiento","empty.training_effect_trend.title":"Aún sin datos de efecto de entrenamiento","achievements.badge.around_globe":"Vuelta al mundo","achievements.badge.century_club":"Club del Centenar - 100 entrenamientos","achievements.badge.consistency_king":"Rey de la Constancia - racha de 14 días","achievements.badge.iron_will":"Voluntad de Hierro - racha de 30 días","achievements.badge.days_100":"100 días activos","achievements.badge.distance_1000":"Club de los 1000 km","achievements.badge.distance_5000":"Club de los 5000 km","achievements.badge.elite_engine":"Motor de élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal quemadas","achievements.badge.energy_1m":"1.000.000 kcal quemadas","achievements.badge.full_year":"Todo un año activo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Todoterreno - 5+ deportes","achievements.badge.multi_sport":"Atleta multideporte - 3+ deportes","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entrenamientos","achievements.badge.workouts_1000":"1000 entrenamientos","achievements.badge.workouts_250":"250 entrenamientos","achievements.badge.workouts_500":"500 entrenamientos","achievements.category.days":"Días activos","achievements.category.distance":"Distancia","achievements.category.energy":"Energía","achievements.category.fitness":"Nivel de forma física","achievements.category.records":"Récords personales","achievements.category.time":"Tiempo de entrenamiento","achievements.category.variety":"Variedad","achievements.category.workouts":"Entrenamientos registrados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Logros","achievements.next":"Siguiente: {name} ({pct}%)","class.rest":"+{pct}% otras actividades","class.tag":"Enfoque: {activity}","empty.achievements.subtitle":"Registra algunos entrenamientos para empezar a desbloquear insignias.","empty.achievements.title":"Aún no hay logros","empty.class.subtitle":"Registra algunos entrenamientos para revelar tu clase.","empty.class.title":"Aún no hay suficientes datos","empty.level.subtitle":"Tu primer entrenamiento sincronizado inicia el ascenso.","empty.level.title":"Aún no hay datos de por vida","empty.player.subtitle":"Necesita algo de historial de entrenamiento para calcular tus estadísticas.","empty.player.title":"Aún no hay suficientes datos","level.label":"NIVEL","level.source":"{count} entrenamientos registrados","level.subtitle":"Impulsado por tu carga de entrenamiento total","level.title.grinder":"Currante de Resistencia","level.title.legend":"Leyenda Viviente","level.title.novice":"Recluta Novato","level.title.veteran":"Veterano Curtido","level.xp_to_next":"{xp} XP para Nvl {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista en {activity}","player.help.title":"Qué significa esto","player.help.sta":"STA · Resistencia, de tu Forma física (CTL): cuánta carga de entrenamiento constante puedes soportar","player.help.pwr":"PWR · Potencia, de la intensidad media (TSS) de tus sesiones recientes","player.help.rec":"REC · Recuperación, tu puntuación actual de Preparación","player.help.con":"CON · Constancia, entrenamientos registrados en los últimos 30 días","player.help.end":"END · Resistencia aeróbica, de tu VO2max estimado","player.help.frm":"FRM · Forma, de tu balance actual de carga de entrenamiento (TSB)","player.help.disclaimer":"Valores heurísticos calculados con tus propios datos - no es una métrica oficial de Suunto.","player.tier.bronze":"Bronce","player.tier.gold":"Oro","player.tier.legendary":"Legendario","player.tier.silver":"Plata","records.climb":"Mayor subida","records.distance":"Entrenamiento más largo (distancia)","records.pace":"Ritmo más rápido","records.session":"Sesión más dura","records.streak":"Racha más larga","records.streak_days_one":"{count} día","records.streak_days_other":"{count} días","records.workout":"Entrenamiento más largo","class.name.cycling":"Guerrero de Resistencia","class.name.running":"Velocista","class.name.trekking":"Explorador de Senderos","class.name.walking":"Vagabundo","class.name.gym":"Berserker de Fuerza","class.name.swim":"Señor de las Mareas","class.name.ski":"Corredor de Escarcha","class.name.row":"Remero","class.name.other":"Todoterreno","class.flavor.cycling":"Hecho para esfuerzos largos y constantes, no para la velocidad pura. Cualquier otro deporte es entrenamiento complementario.","class.flavor.running":"Rápido de salida y centrado en el ritmo. La distancia es solo un medio para un fin.","class.flavor.trekking":"Como en casa en terreno difícil, cubriendo kilómetros durante horas.","class.flavor.walking":"Los kilómetros constantes y de bajo impacto se acumulan - constancia sobre intensidad.","class.flavor.gym":"Fuerza bruta antes que distancia. Las sesiones de fuerza van primero.","class.flavor.swim":"Resistencia forjada en el agua, brazada a brazada.","class.flavor.ski":"Velocidad y ritmo sobre nieve y frío.","class.flavor.row":"Fuerza rítmica, remada a remada.","class.flavor.other":"Ningún deporte domina - una mezcla verdaderamente equilibrada.","card.next_milestone.title":"Próxima Meta","card.next_milestone.subtitle":"Distancia acumulada","empty.next_milestone.title":"Aún sin distancia acumulada","next_milestone.remaining_label":"restantes","next_milestone.target":"hasta {target} km acumulados - {pct}% del camino","next_milestone.workouts_one":"{count} entrenamiento hasta {target} en total","next_milestone.workouts_other":"{count} entrenamientos hasta {target} en total","next_milestone.eta_one":"a {pace} km/semana - unas {weeks} semana","next_milestone.eta_other":"a {pace} km/semana - unas {weeks} semanas","card.story.title":"Tu Historia con Suunto","card.story.subtitle":"Desde tu primer entrenamiento","empty.story.title":"Aún sin datos acumulados","story.top_activity":"{activity} - tu actividad principal","story.top_activity_share":"{count} entrenamientos - {pct}% de tu historial","story.record_subtitle":"Tu récord personal de siempre","card.sleep_clock.title":"Reloj de Sueño","card.sleep_clock.subtitle":"Anoche","empty.sleep_clock.title":"Aún sin datos de sueño","empty.sleep_clock.subtitle":"Usa tu reloj por la noche para verlo aquí.","sleep_clock.quality":"{pct}% de calidad de sueño","card.sleep_rhythm.title":"Ritmo de Sueño","card.sleep_rhythm.subtitle":"Últimas 7 noches","empty.sleep_rhythm.title":"Aún no hay suficiente historial de sueño","empty.sleep_rhythm.subtitle":"Necesita algunas noches de datos para mostrar un patrón.","sleep_rhythm.avg_bedtime":"Hora media de acostarse {time}","sleep_rhythm.avg_wake":"Hora media de despertar {time}","sleep_rhythm.spread":"Variación de {minutes} min","sleep_rhythm.legend_normal":"Noche típica","sleep_rhythm.legend_outlier":"{minutes}+ min fuera del promedio","card.route.title":"Ruta","empty.route.title":"Sin datos de ruta","empty.route.subtitle":"Los entrenamientos en interior no tienen registro GPS.","route.pace_slower":"Más lento","route.pace_faster":"Más rápido","card.month_story.title":"Este Mes","empty.month_story.title":"Aún sin entrenamientos este mes","story.share_month":"{count} entrenamientos - {pct}% de este mes","story.record_subtitle_month":"Tu récord este mes","card.year_story.title":"Este Año","empty.year_story.title":"Aún sin entrenamientos este año","story.share_year":"{count} entrenamientos - {pct}% de este año","story.record_subtitle_year":"Tu récord este año","card.best_efforts.title":"Mejores Marcas","card.best_efforts.subtitle":"{count} de {total} conseguidas","empty.best_efforts.title":"Aún sin mejores marcas","empty.best_efforts.subtitle":"Se registran desde entrenamientos de carrera a partir de ahora, no retroactivamente.","best_efforts.not_yet":"Aún no conseguido","distance.half_marathon":"Media Maratón","distance.marathon":"Maratón","card.steps_today.title":"Pasos Hoy","card.steps_today.subtitle":"Objetivo: {goal} pasos","empty.steps_today.title":"Aún sin datos de pasos","editor.steps_goal_label":"Objetivo diario (pasos)","steps_today.goal_pct":"{pct}% del objetivo diario","steps_today.vs_avg_up":"+{pct}% vs tu media de 7 días ({avg})","steps_today.vs_avg_down":"-{pct}% vs tu media de 7 días ({avg})","card.steps_trend.title":"Tendencia de Pasos","card.steps_trend.subtitle":"Últimos 14 días","empty.steps_trend.title":"Aún sin historial de pasos","steps_trend.legend_met":"Objetivo cumplido","steps_trend.legend_below":"Por debajo del objetivo","steps_trend.days_at_goal":"Días con objetivo","card.month_records.title":"Récords del Mes","card.month_records.subtitle":"{count} de {total} logrados este mes","empty.month_records.title":"Aún sin récords este mes","empty.month_records.subtitle":"Tus mejores marcas de este mes aparecerán aquí.","card.year_records.title":"Récords del Año","card.year_records.subtitle":"{count} de {total} logrados este año","empty.year_records.title":"Aún sin récords este año","empty.year_records.subtitle":"Tus mejores marcas de este año aparecerán aquí.","card.running_dynamics.title":"Dinámica de Carrera","card.running_dynamics.subtitle":"{activity} - últimos {count} entrenamientos","empty.running_dynamics.title":"Aún no hay suficientes datos","empty.running_dynamics.subtitle":"Necesita algunos entrenamientos recientes a pie con datos de cadencia.","card.weekly_steps_goal.title":"Meta Semanal de Pasos","card.weekly_steps_goal.subtitle":"{value} de {goal} pasos","empty.weekly_steps_goal.title":"Aún sin datos de pasos","editor.weekly_steps_goal_label":"Meta semanal (pasos)","card.goals_overview.title":"Resumen de Metas","card.goals_overview.subtitle":"Esta semana","empty.goals_overview.title":"Aún sin datos de metas","card.week_compare.title":"Esta Semana vs la Semana Pasada","card.week_compare.subtitle":"Totales móviles de 7 días","empty.week_compare.title":"Aún no hay suficiente historial","empty.week_compare.subtitle":"Vuelve en aproximadamente una semana para ver una comparación.","week_compare.legend_now":"Esta semana","week_compare.legend_prev":"Semana pasada"},it:{"stat.distance":"Distanza","stat.duration":"Durata","stat.avg_speed":"Vel. media","stat.avg_pace":"Passo medio","stat.avg_hr":"FC media","stat.max_hr":"FC max","stat.training_effect":"Effetto allenamento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensazione","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Allenamenti","stat.steps":"Passi","stat.heart_rate":"Frequenza cardiaca","stat.quality":"Qualità","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC riposo","stat.resting_hr_delta":"FC riposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Livello di stress","stat.recovery_window":"Tempo di recupero","stat.ctl":"CTL · forma","stat.atl":"ATL · affaticamento","stat.tsb":"TSB · forma","stat.readiness":"Prontezza","stat.recovery_balance":"Equilibrio di recupero","stat.training_suggestion":"Suggerimento di oggi","stat.volume":"Volume","stat.intensity":"Intensità","stat.consistency":"Costanza","stat.recovery":"Recupero","stat.variety":"Varietà","card.hr_zones.title":"Zone di Frequenza Cardiaca","card.hr_zones.last_workout":"Ultimo allenamento","card.sleep_readiness.title":"Sonno e Prontezza","card.sleep_readiness.subtitle_no_wake":"{duration} di sonno","card.sleep_readiness.subtitle_with_wake":"{duration} di sonno · sveglia alle {time}","card.recovery.title":"Recupero","card.training_load.title":"Carico di Allenamento","card.training_load.subtitle_fallback":"Andamento forma (CTL)","card.week_stats.title":"Questa Settimana e Totale","card.week_stats.subtitle":"Ultimi 7 giorni","card.week_stats.lifetime_title":"Totale per attività","card.today.title":"Oggi","card.today.subtitle":"In diretta dall'orologio","card.training_status.title":"Stato dell'allenamento","card.training_profile.title":"Profilo di allenamento","card.training_profile.subtitle":"Il tuo allenamento a colpo d'occhio","card.heart_rate.title":"Frequenza cardiaca","empty.last_workout.title":"Nessun allenamento recente","empty.last_workout.subtitle":"Sincronizza l'orologio con l'app Suunto per vederlo qui.","empty.hr_zones.title":"Nessun dato sulle zone","empty.hr_zones.subtitle":"Il tuo prossimo allenamento all'aperto con fascia cardio completerà questi dati.","empty.sleep_readiness.title":"Ancora nessun dato sul sonno","empty.sleep_readiness.subtitle":"Indossa l'orologio per dormire per vederlo qui.","empty.recovery.title":"Ancora nessun dato sul recupero","empty.training_load.title":"Calcolo del carico di allenamento","empty.training_load.subtitle":"Serve un po' di storico allenamenti per calcolarlo - ricontrolla dopo qualche sessione.","empty.week_stats.title":"Ancora nessuno storico allenamenti","empty.today.title":"Ancora nessun dato in tempo reale","empty.training_status.title":"Dati non ancora sufficienti","empty.training_status.subtitle":"Serve un po' di cronologia di allenamento per calcolarlo.","empty.training_profile.title":"Dati non ancora sufficienti","empty.training_profile.subtitle":"Servono più dati dai sensori per calcolare il tuo profilo.","empty.heart_rate.title":"Ancora nessun dato sulla frequenza cardiaca","empty.loading":"Caricamento...","empty.generic_error":"Impossibile caricare i dati Suunto.","error.no_device":"Nessun dispositivo Suunto trovato - l'integrazione suunto_app è configurata?","error.multiple_devices":'Trovati più dispositivi Suunto - imposta "device_id" nella configurazione della scheda.',"error.device_missing":'Il dispositivo configurato "{device}" non ha entità suunto_app.',"band.readiness.great":"Ottima","band.readiness.fair":"Discreta","band.readiness.low":"Bassa","band.recovery.well":"Ben recuperato","band.recovery.partial":"Parzialmente recuperato","band.recovery.low":"Basso recupero","band.recovery.fully":"Completamente recuperato","band.recovery.recovering":"Recupero in corso · {time} rimanenti","band.hrv.low":"HRV bassa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV bilanciata","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Affaticato","band.form.very_fatigued":"Molto affaticato","band.acwr.safe":"Zona sicura","band.acwr.low":"Carico basso","band.acwr.high":"Carico alto - rischio di infortunio","band.suggestion.hard":"Dai il massimo","band.suggestion.moderate":"Sforzo moderato","band.suggestion.easy":"Vacci piano","band.suggestion.rest":"Giorno di riposo","chip.workout_logged_today":"Allenamento registrato oggi","chip.workout_today":"Allenamento oggi","chip.recovering":"In recupero","chip.nap":"{minutes} min di pisolino","chip.nap_earlier":"{minutes} min di pisolino (prima)","chip.workouts_30d":"{count} allenamenti negli ultimi 30 giorni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Punto forte: {strong} · punto debole: {light}","chip.more_activity_one":"+{count} altra attività","chip.more_activity_other":"+{count} altre attività","chip.unusual_recovery":"Recupero insolito","chip.days_since_one":"{count} giorno dall'ultimo allenamento","chip.days_since_other":"{count} giorni dall'ultimo allenamento","achievement.count_one":"{count} traguardo","achievement.count_other":"{count} traguardi","achievement.rank":"Posizione #{rank} su questo percorso","label.zone":"Zona {n}","label.deep":"Profondo","label.light":"Leggero","label.rem":"REM","editor.auto_detect":"Questa scheda rileva automaticamente il tuo dispositivo Suunto - nessuna configurazione necessaria.","editor.pick_device":"Trovati più dispositivi Suunto - scegli quale deve usare questa scheda.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unità","editor.units_metric":"Metrico (km)","editor.units_imperial":"Imperiale (mi)","editor.compact_label":"Modalità compatta","editor.days_label":"Finestra tendenza (giorni)","card.lifetime.title":"Totali di Sempre","card.lifetime.subtitle":"Dall'inizio","stat.active_days":"Giorni attivi","empty.lifetime.title":"Ancora nessun totale","card.recent_workouts.title":"Allenamenti Recenti","empty.recent_workouts.title":"Nessun allenamento recente","card.elevation.title":"Altitudine e Salite","stat.ascent":"Salita","stat.descent":"Discesa","stat.ascent_time":"Tempo salita","stat.descent_time":"Tempo discesa","stat.min_altitude":"Altitudine min.","stat.max_altitude":"Altitudine max.","stat.ascent_rate":"Velocità di salita","empty.elevation.title":"Nessun dato sull'altitudine","empty.elevation.subtitle":"Solo gli allenamenti all'aperto con altimetro registrano questi dati.","card.location.title":"Posizione di Partenza","location.open_in_maps":"Apri in Maps","empty.location.title":"Nessun dato sulla posizione","empty.location.subtitle":"Gli allenamenti al chiuso non hanno un punto di partenza GPS.","card.fitness.title":"Forma Fisica","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max stim.","stat.fitness_age":"Età fisica","fitness.measured":"Misurato {time} · {activity}","empty.fitness.title":"Ancora nessun dato sulla forma fisica","empty.fitness.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","card.pmc.title":"Gestione delle Prestazioni","card.pmc.subtitle":"Andamento di 90 giorni","card.recovery_trends.title":"Tendenze di Recupero","card.recovery_trends.subtitle":"Riferimento di {days} giorni","empty.recovery_trends.title":"Ancora nessun dato sulle tendenze di recupero","card.weekly_volume.title":"Volume Settimanale","card.weekly_volume.subtitle":"Ultime 12 settimane","empty.weekly_volume.title":"Ancora nessun dato sul volume settimanale","stat.average":"Media","stat.total":"Totale","card.hr_curve.title":"Curva della Frequenza Cardiaca","card.hr_curve.subtitle":"Ultime 24 ore","stat.hr_now":"Ora","stat.hr_min":"Min. di oggi","stat.hr_max":"Max. di oggi","empty.hr_curve.title":"Ancora nessun dato di FC in tempo reale","empty.hr_curve.subtitle":"Indossa e sincronizza l'orologio per vedere qui la curva di oggi.","card.sleep_trends.title":"Andamento del Sonno","card.sleep_trends.subtitle":"Ultime {days} notti","empty.sleep_trends.title":"Ancora nessun dato sull'andamento del sonno","card.weekly_goal.title":"Obiettivo Settimanale","card.weekly_goal.subtitle":"{value} di {goal} km","empty.weekly_goal.title":"Ancora nessuna distanza settimanale","editor.goal_label":"Obiettivo settimanale (km)","card.streak.title":"Serie di Attività","card.streak.subtitle":"Ultimi 14 giorni","streak.window_count_one":"{count} giorno attivo","streak.window_count_other":"{count} giorni attivi","streak.days_one":"{count} giorno di serie","streak.days_other":"{count} giorni di serie","streak.none":"Nessuna serie attiva - inizia oggi","empty.streak.title":"Ancora nessuno storico allenamenti","just_finished.title":"Ottimo lavoro!","just_finished.idle.title":"In attesa del tuo prossimo allenamento","just_finished.idle.subtitle":"Questa scheda si attiva appena l'orologio sincronizza un nuovo allenamento.","empty.just_finished.title":"Nessun allenamento recente","card.activity_trends.title":"Andamento dell'Attività","card.activity_trends.subtitle":"Ultimi 14 giorni","empty.activity_trends.title":"Ancora nessun dato sull'andamento dell'attività","card.recovery_balance_trend.title":"Andamento dell'Equilibrio di Recupero","card.recovery_balance_trend.subtitle":"Ultimi 14 giorni","empty.recovery_balance_trend.title":"Ancora nessun dato sull'andamento del recupero","card.readiness_trend.title":"Andamento della Prontezza","card.readiness_trend.subtitle":"Ultimi 30 giorni","empty.readiness_trend.title":"Ancora nessun dato sull'andamento della prontezza","stat.cadence":"Cadenza","stat.stride_length":"Lunghezza del passo","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC med. sonno","stat.sleep_min_hr":"FC min. sonno","chip.bedtime":"A letto alle {time}","card.activity_calendar.title":"Calendario delle Attività","card.activity_calendar.subtitle":"Ultime 6 settimane","empty.activity_calendar.title":"Ancora nessuno storico allenamenti","activity_calendar.active_days_one":"{count} giorno attivo","activity_calendar.active_days_other":"{count} giorni attivi","card.workout_comparison.title":"Confronto Allenamenti","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ancora non abbastanza allenamenti simili","empty.workout_comparison.subtitle":"Fai la stessa attività due volte per vedere un confronto.","stat.distance_delta":"Distanza ({delta})","stat.duration_delta":"Durata ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Passo ({delta})","card.milestones.title":"In Numeri","card.milestones.subtitle":"Da quando hai iniziato","empty.milestones.title":"Ancora nessun dato totale","stat.earth_laps":"Giri della Terra","stat.marathons":"Maratone","stat.moon_pct":"% verso la Luna","stat.burgers":"Hamburger","card.athlete_profile.title":"Personalità Sportiva","empty.athlete_profile.title":"Ancora non abbastanza dati","personality.activity.cycling":"Ciclista","personality.activity.running":"Corridore","personality.activity.trekking":"Escursionista","personality.activity.walking":"Camminatore","personality.activity.gym":"Atleta di Forza","personality.activity.swim":"Nuotatore","personality.activity.ski":"Sciatore","personality.activity.row":"Vogatore","personality.activity.other":"Multisportivo","personality.schedule.weekend":"Guerriero del Weekend","personality.schedule.weekday":"Regolare in Settimana","personality.schedule.balanced":"Programma Equilibrato","personality.time.morning":"Mattiniero","personality.time.afternoon":"Attivo di Pomeriggio","personality.time.evening":"Atleta della Sera","personality.time.night":"Nottambulo","card.pace_trend.title":"Andamento del Passo","card.pace_trend.subtitle":"{activity} · ultime {count} sessioni","empty.pace_trend.title":"Ancora non abbastanza allenamenti simili","empty.pace_trend.subtitle":"Fai la stessa attività alcune volte per vedere un andamento.","pace_trend.faster":"In miglioramento","pace_trend.slower":"In rallentamento","pace_trend.steady":"Passo stabile","card.lap_splits.title":"Tempi sul Giro","empty.lap_splits.title":"Nessun dato sui giri","empty.lap_splits.subtitle":"Non tutti gli allenamenti hanno giri - il prossimo che li avrà completerà questi dati.","stat.laps":"Giri","stat.fastest_lap":"Giro più veloce","label.lap":"Giro {n}","card.training_effect_trend.title":"Andamento dell'Effetto Allenamento","empty.training_effect_trend.title":"Ancora nessun dato sull'effetto allenamento","achievements.badge.around_globe":"Giro del mondo","achievements.badge.century_club":"Club del Centinaio - 100 allenamenti","achievements.badge.consistency_king":"Re della Costanza - serie di 14 giorni","achievements.badge.iron_will":"Volontà di Ferro - serie di 30 giorni","achievements.badge.days_100":"100 giorni attivi","achievements.badge.distance_1000":"Club dei 1000 km","achievements.badge.distance_5000":"Club dei 5000 km","achievements.badge.elite_engine":"Motore d'élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal bruciate","achievements.badge.energy_1m":"1.000.000 kcal bruciate","achievements.badge.full_year":"Attivo tutto l'anno","achievements.badge.hours_100":"100 ore","achievements.badge.hours_500":"500 ore","achievements.badge.jack_of_all_trades":"Tuttofare - 5+ sport","achievements.badge.multi_sport":"Atleta multisport - 3+ sport","achievements.badge.solid_engine":"Motore solido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ allenamenti","achievements.badge.workouts_1000":"1000 allenamenti","achievements.badge.workouts_250":"250 allenamenti","achievements.badge.workouts_500":"500 allenamenti","achievements.category.days":"Giorni attivi","achievements.category.distance":"Distanza","achievements.category.energy":"Energia","achievements.category.fitness":"Livello di forma","achievements.category.records":"Record personali","achievements.category.time":"Tempo di allenamento","achievements.category.variety":"Varietà","achievements.category.workouts":"Allenamenti registrati","card.achievements.subtitle":"{unlocked} di {total} sbloccati","card.achievements.title":"Obiettivi","achievements.next":"Prossimo: {name} ({pct}%)","class.rest":"+{pct}% altre attività","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registra qualche allenamento per iniziare a sbloccare i badge.","empty.achievements.title":"Ancora nessun obiettivo","empty.class.subtitle":"Registra qualche allenamento per rivelare la tua classe.","empty.class.title":"Dati ancora insufficienti","empty.level.subtitle":"Il tuo primo allenamento sincronizzato avvia la scalata.","empty.level.title":"Ancora nessun dato complessivo","empty.player.subtitle":"Serve un po' di storico allenamenti per calcolare le tue statistiche.","empty.player.title":"Dati ancora insufficienti","level.label":"LIVELLO","level.source":"{count} allenamenti registrati","level.subtitle":"Alimentato dal tuo carico di allenamento complessivo","level.title.grinder":"Instancabile di Resistenza","level.title.legend":"Leggenda Vivente","level.title.novice":"Recluta Fresca","level.title.veteran":"Veterano Navigato","level.xp_to_next":"{xp} XP al Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"Specialista {activity}","player.help.title":"Cosa significano","player.help.sta":"STA · Resistenza, dalla tua Forma (CTL): quanto carico di allenamento costante riesci a sostenere","player.help.pwr":"PWR · Potenza, dall'intensità media (TSS) delle tue sessioni recenti","player.help.rec":"REC · Recupero, il tuo punteggio attuale di Prontezza","player.help.con":"CON · Costanza, allenamenti registrati negli ultimi 30 giorni","player.help.end":"END · Resistenza, dal tuo VO2max stimato","player.help.frm":"FRM · Forma, dal tuo bilancio attuale di carico di allenamento (TSB)","player.help.disclaimer":"Valori euristici calcolati dai tuoi dati - non una metrica ufficiale Suunto.","player.tier.bronze":"Bronzo","player.tier.gold":"Oro","player.tier.legendary":"Leggendario","player.tier.silver":"Argento","records.climb":"Salita più impegnativa","records.distance":"Allenamento più lungo (distanza)","records.pace":"Ritmo più veloce","records.session":"Sessione più dura","records.streak":"Serie più lunga","records.streak_days_one":"{count} giorno","records.streak_days_other":"{count} giorni","records.workout":"Allenamento più lungo","class.name.cycling":"Guerriero della Resistenza","class.name.running":"Velocista","class.name.trekking":"Esploratore di Sentieri","class.name.walking":"Vagabondo","class.name.gym":"Berserker della Forza","class.name.swim":"Signore delle Maree","class.name.ski":"Corridore del Gelo","class.name.row":"Vogatore","class.name.other":"Tuttofare","class.flavor.cycling":"Costruito per sforzi lunghi e costanti, non per la velocità pura. Ogni altro sport è allenamento complementare.","class.flavor.running":"Scatto rapido e concentrato sul ritmo. La distanza è solo un mezzo.","class.flavor.trekking":"A suo agio su terreni difficili, macinando chilometri per ore.","class.flavor.walking":"Chilometri costanti e a basso impatto che si accumulano - la costanza prima dell'intensità.","class.flavor.gym":"Forza bruta prima della distanza. Le sessioni di forza vengono prima di tutto.","class.flavor.swim":"Resistenza forgiata in acqua, bracciata dopo bracciata.","class.flavor.ski":"Velocità e ritmo su neve e freddo.","class.flavor.row":"Forza ritmica, colpo dopo colpo.","class.flavor.other":"Nessuno sport domina - un mix davvero equilibrato.","card.next_milestone.title":"Prossimo Traguardo","card.next_milestone.subtitle":"Distanza totale","empty.next_milestone.title":"Ancora nessuna distanza totale","next_milestone.remaining_label":"mancanti","next_milestone.target":"a {target} km totali - {pct}% del percorso","next_milestone.workouts_one":"{count} allenamento a {target} totali","next_milestone.workouts_other":"{count} allenamenti a {target} totali","next_milestone.eta_one":"a {pace} km/settimana - circa {weeks} settimana","next_milestone.eta_other":"a {pace} km/settimana - circa {weeks} settimane","card.story.title":"La Tua Storia Suunto","card.story.subtitle":"Dal tuo primo allenamento","empty.story.title":"Ancora nessun dato totale","story.top_activity":"{activity} - la tua attività principale","story.top_activity_share":"{count} allenamenti - {pct}% della tua storia","story.record_subtitle":"Il tuo record personale assoluto","card.sleep_clock.title":"Orologio del Sonno","card.sleep_clock.subtitle":"Stanotte","empty.sleep_clock.title":"Ancora nessun dato sul sonno","empty.sleep_clock.subtitle":"Indossa l'orologio di notte per vederlo qui.","sleep_clock.quality":"{pct}% di qualità del sonno","card.sleep_rhythm.title":"Ritmo del Sonno","card.sleep_rhythm.subtitle":"Ultime 7 notti","empty.sleep_rhythm.title":"Ancora poca cronologia del sonno","empty.sleep_rhythm.subtitle":"Servono alcune notti di dati per mostrare uno schema.","sleep_rhythm.avg_bedtime":"Media addormentamento {time}","sleep_rhythm.avg_wake":"Media risveglio {time}","sleep_rhythm.spread":"Variazione di {minutes} min","sleep_rhythm.legend_normal":"Notte tipica","sleep_rhythm.legend_outlier":"{minutes}+ min di scostamento dalla media","card.route.title":"Percorso","empty.route.title":"Nessun dato sul percorso","empty.route.subtitle":"Gli allenamenti indoor non hanno una traccia GPS.","route.pace_slower":"Più lento","route.pace_faster":"Più veloce","card.month_story.title":"Questo Mese","empty.month_story.title":"Ancora nessun allenamento questo mese","story.share_month":"{count} allenamenti - {pct}% di questo mese","story.record_subtitle_month":"Il tuo record di questo mese","card.year_story.title":"Quest'Anno","empty.year_story.title":"Ancora nessun allenamento quest'anno","story.share_year":"{count} allenamenti - {pct}% di quest'anno","story.record_subtitle_year":"Il tuo record di quest'anno","card.best_efforts.title":"Migliori Prestazioni","card.best_efforts.subtitle":"{count} su {total} ottenute","empty.best_efforts.title":"Ancora nessuna migliore prestazione","empty.best_efforts.subtitle":"Registrate dagli allenamenti di corsa da ora in poi, non retroattivamente.","best_efforts.not_yet":"Non ancora ottenuto","distance.half_marathon":"Mezza Maratona","distance.marathon":"Maratona","card.steps_today.title":"Passi Oggi","card.steps_today.subtitle":"Obiettivo: {goal} passi","empty.steps_today.title":"Ancora nessun dato sui passi","editor.steps_goal_label":"Obiettivo giornaliero (passi)","steps_today.goal_pct":"{pct}% dell'obiettivo giornaliero","steps_today.vs_avg_up":"+{pct}% rispetto alla tua media di 7 giorni ({avg})","steps_today.vs_avg_down":"-{pct}% rispetto alla tua media di 7 giorni ({avg})","card.steps_trend.title":"Andamento Passi","card.steps_trend.subtitle":"Ultimi 14 giorni","empty.steps_trend.title":"Ancora nessuno storico dei passi","steps_trend.legend_met":"Obiettivo raggiunto","steps_trend.legend_below":"Sotto l'obiettivo","steps_trend.days_at_goal":"Giorni con obiettivo","card.month_records.title":"Record del Mese","card.month_records.subtitle":"{count} su {total} stabiliti questo mese","empty.month_records.title":"Ancora nessun record questo mese","empty.month_records.subtitle":"I tuoi migliori risultati di questo mese appariranno qui.","card.year_records.title":"Record dell'Anno","card.year_records.subtitle":"{count} su {total} stabiliti quest'anno","empty.year_records.title":"Ancora nessun record quest'anno","empty.year_records.subtitle":"I tuoi migliori risultati di quest'anno appariranno qui.","card.running_dynamics.title":"Dinamica della Corsa","card.running_dynamics.subtitle":"{activity} - ultimi {count} allenamenti","empty.running_dynamics.title":"Dati ancora insufficienti","empty.running_dynamics.subtitle":"Servono alcuni allenamenti di corsa recenti con dati sulla cadenza.","card.weekly_steps_goal.title":"Obiettivo Settimanale: Passi","card.weekly_steps_goal.subtitle":"{value} di {goal} passi","empty.weekly_steps_goal.title":"Ancora nessun dato sui passi","editor.weekly_steps_goal_label":"Obiettivo settimanale (passi)","card.goals_overview.title":"Panoramica Obiettivi","card.goals_overview.subtitle":"Questa settimana","empty.goals_overview.title":"Ancora nessun dato sugli obiettivi","card.week_compare.title":"Questa Settimana vs Settimana Scorsa","card.week_compare.subtitle":"Totali mobili su 7 giorni","empty.week_compare.title":"Ancora non abbastanza storico","empty.week_compare.subtitle":"Torna tra circa una settimana per un confronto.","week_compare.legend_now":"Questa settimana","week_compare.legend_prev":"Settimana scorsa"},nl:{"stat.distance":"Afstand","stat.duration":"Duur","stat.avg_speed":"Gem. snelheid","stat.avg_pace":"Gem. tempo","stat.avg_hr":"Gem. hartslag","stat.max_hr":"Max. hartslag","stat.training_effect":"Trainingseffect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gevoel","stat.energy":"Energie","stat.time":"Tijd","stat.workouts":"Work-outs","stat.steps":"Stappen","stat.heart_rate":"Hartslag","stat.quality":"Kwaliteit","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Rustpols","stat.resting_hr_delta":"Rustpols ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stressniveau","stat.recovery_window":"Hersteltijd","stat.ctl":"CTL · fitheid","stat.atl":"ATL · vermoeidheid","stat.tsb":"TSB · vorm","stat.readiness":"Gereedheid","stat.recovery_balance":"Herstelbalans","stat.training_suggestion":"Advies voor vandaag","stat.volume":"Volume","stat.intensity":"Intensiteit","stat.consistency":"Consistentie","stat.recovery":"Herstel","stat.variety":"Variatie","card.hr_zones.title":"Hartslagzones","card.hr_zones.last_workout":"Laatste training","card.sleep_readiness.title":"Slaap & Gereedheid","card.sleep_readiness.subtitle_no_wake":"{duration} geslapen","card.sleep_readiness.subtitle_with_wake":"{duration} geslapen · wakker om {time}","card.recovery.title":"Herstel","card.training_load.title":"Trainingsbelasting","card.training_load.subtitle_fallback":"Fitheidstrend (CTL)","card.week_stats.title":"Deze Week & Totaal","card.week_stats.subtitle":"Laatste 7 dagen","card.week_stats.lifetime_title":"Totaal per activiteit","card.today.title":"Vandaag","card.today.subtitle":"Live vanaf je horloge","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofiel","card.training_profile.subtitle":"Jouw training in één oogopslag","card.heart_rate.title":"Hartslag","empty.last_workout.title":"Geen recente training","empty.last_workout.subtitle":"Synchroniseer je horloge met de Suunto-app om het hier te zien.","empty.hr_zones.title":"Geen zonegegevens","empty.hr_zones.subtitle":"Je volgende buitentraining met hartslagband vult dit aan.","empty.sleep_readiness.title":"Nog geen slaapgegevens","empty.sleep_readiness.subtitle":"Draag je horloge tijdens het slapen om dit hier te zien.","empty.recovery.title":"Nog geen herstelgegevens","empty.training_load.title":"Trainingsbelasting wordt berekend","empty.training_load.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen - kijk later nog eens na een paar trainingen.","empty.week_stats.title":"Nog geen traininggeschiedenis","empty.today.title":"Nog geen live gegevens","empty.training_status.title":"Nog niet genoeg gegevens","empty.training_status.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen.","empty.training_profile.title":"Nog niet genoeg gegevens","empty.training_profile.subtitle":"Heeft meer sensorgegevens nodig om je profiel te berekenen.","empty.heart_rate.title":"Nog geen hartslaggegevens","empty.loading":"Laden...","empty.generic_error":"Suunto-gegevens konden niet worden geladen.","error.no_device":"Geen Suunto-apparaat gevonden - is de suunto_app-integratie ingesteld?","error.multiple_devices":'Meerdere Suunto-apparaten gevonden - stel "device_id" in de kaartconfiguratie in.',"error.device_missing":'Geconfigureerd apparaat "{device}" heeft geen suunto_app-entiteiten.',"band.readiness.great":"Uitstekend","band.readiness.fair":"Redelijk","band.readiness.low":"Laag","band.recovery.well":"Goed hersteld","band.recovery.partial":"Gedeeltelijk hersteld","band.recovery.low":"Laag herstel","band.recovery.fully":"Volledig hersteld","band.recovery.recovering":"Aan het herstellen · {time} resterend","band.hrv.low":"HRV laag","band.hrv.high":"HRV hoog","band.hrv.balanced":"HRV in balans","band.form.fresh":"Fris","band.form.neutral":"Neutraal","band.form.fatigued":"Vermoeid","band.form.very_fatigued":"Erg vermoeid","band.acwr.safe":"Veilige zone","band.acwr.low":"Lage belasting","band.acwr.high":"Hoge belasting - blessurerisico","band.suggestion.hard":"Ga ervoor","band.suggestion.moderate":"Gematigde inspanning","band.suggestion.easy":"Rustig aan","band.suggestion.rest":"Rustdag","chip.workout_logged_today":"Training vandaag geregistreerd","chip.workout_today":"Training vandaag","chip.recovering":"Herstellen","chip.nap":"{minutes} min dutje","chip.nap_earlier":"{minutes} min dutje (eerder)","chip.workouts_30d":"{count} trainingen in de laatste 30 dagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Sterkst in {strong} · zwakst in {light}","chip.more_activity_one":"+{count} andere activiteit","chip.more_activity_other":"+{count} andere activiteiten","chip.unusual_recovery":"Afwijkend herstel","chip.days_since_one":"{count} dag sinds laatste training","chip.days_since_other":"{count} dagen sinds laatste training","achievement.count_one":"{count} prestatie","achievement.count_other":"{count} prestaties","achievement.rank":"Positie #{rank} op deze route","label.zone":"Zone {n}","label.deep":"Diep","label.light":"Licht","label.rem":"REM","editor.auto_detect":"Deze kaart detecteert automatisch je Suunto-apparaat - geen configuratie nodig.","editor.pick_device":"Meerdere Suunto-apparaten gevonden - kies welke deze kaart moet gebruiken.","editor.device_label":"Suunto-apparaat","editor.units_label":"Eenheden","editor.units_metric":"Metrisch (km)","editor.units_imperial":"Imperiaal (mi)","editor.compact_label":"Compacte modus","editor.days_label":"Trendvenster (dagen)","card.lifetime.title":"Totalen Aller Tijden","card.lifetime.subtitle":"Sinds het begin","stat.active_days":"Actieve dagen","empty.lifetime.title":"Nog geen totalen","card.recent_workouts.title":"Recente Trainingen","empty.recent_workouts.title":"Geen recente trainingen","card.elevation.title":"Hoogtemeters & Klimmen","stat.ascent":"Stijging","stat.descent":"Daling","stat.ascent_time":"Stijgtijd","stat.descent_time":"Daaltijd","stat.min_altitude":"Min. hoogte","stat.max_altitude":"Max. hoogte","stat.ascent_rate":"Stijgsnelheid","empty.elevation.title":"Geen hoogtegegevens","empty.elevation.subtitle":"Alleen buitentrainingen met een barometer registreren dit.","card.location.title":"Startlocatie","location.open_in_maps":"Openen in Maps","empty.location.title":"Geen locatiegegevens","empty.location.subtitle":"Binnentrainingen hebben geen GPS-startpunt.","card.fitness.title":"Fitheid","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitheidsleeftijd","fitness.measured":"Gemeten {time} · {activity}","empty.fitness.title":"Nog geen fitheidsgegevens","empty.fitness.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","card.pmc.title":"Prestatiebeheer","card.pmc.subtitle":"90-dagen trend","card.recovery_trends.title":"Hersteltrends","card.recovery_trends.subtitle":"{days}-dagen basiswaarde","empty.recovery_trends.title":"Nog geen hersteltrendgegevens","card.weekly_volume.title":"Wekelijks Volume","card.weekly_volume.subtitle":"Laatste 12 weken","empty.weekly_volume.title":"Nog geen gegevens over wekelijks volume","stat.average":"Gemiddeld","stat.total":"Totaal","card.hr_curve.title":"Hartslagcurve","card.hr_curve.subtitle":"Laatste 24 uur","stat.hr_now":"Nu","stat.hr_min":"Min. vandaag","stat.hr_max":"Max. vandaag","empty.hr_curve.title":"Nog geen live hartslaggegevens","empty.hr_curve.subtitle":"Draag en synchroniseer je horloge om de curve van vandaag hier te zien.","card.sleep_trends.title":"Slaaptrends","card.sleep_trends.subtitle":"Laatste {days} nachten","empty.sleep_trends.title":"Nog geen slaaptrendgegevens","card.weekly_goal.title":"Weekdoel","card.weekly_goal.subtitle":"{value} van {goal} km","empty.weekly_goal.title":"Nog geen wekelijkse afstand","editor.goal_label":"Weekdoel (km)","card.streak.title":"Activiteitenreeks","card.streak.subtitle":"Laatste 14 dagen","streak.window_count_one":"{count} actieve dag","streak.window_count_other":"{count} actieve dagen","streak.days_one":"{count} dag op rij","streak.days_other":"{count} dagen op rij","streak.none":"Geen actieve reeks - kom vandaag in beweging","empty.streak.title":"Nog geen traininggeschiedenis","just_finished.title":"Goed gedaan!","just_finished.idle.title":"Wachten op je volgende training","just_finished.idle.subtitle":"Deze kaart licht op zodra je horloge een nieuwe training synchroniseert.","empty.just_finished.title":"Geen recente training","card.activity_trends.title":"Activiteitstrends","card.activity_trends.subtitle":"Laatste 14 dagen","empty.activity_trends.title":"Nog geen activiteitstrendgegevens","card.recovery_balance_trend.title":"Herstelbalanstrend","card.recovery_balance_trend.subtitle":"Laatste 14 dagen","empty.recovery_balance_trend.title":"Nog geen hersteltrendgegevens","card.readiness_trend.title":"Gereedheidstrend","card.readiness_trend.subtitle":"Laatste 30 dagen","empty.readiness_trend.title":"Nog geen gereedheidstrendgegevens","stat.cadence":"Cadans","stat.stride_length":"Paslengte","stat.pct_hrmax":"% van max. hartslag","stat.sleep_avg_hr":"Gem. slaappols","stat.sleep_min_hr":"Min. slaappols","chip.bedtime":"Naar bed {time}","card.activity_calendar.title":"Activiteitenkalender","card.activity_calendar.subtitle":"Laatste 6 weken","empty.activity_calendar.title":"Nog geen traininggeschiedenis","activity_calendar.active_days_one":"{count} actieve dag","activity_calendar.active_days_other":"{count} actieve dagen","card.workout_comparison.title":"Trainingsvergelijking","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Nog niet genoeg vergelijkbare trainingen","empty.workout_comparison.subtitle":"Doe dezelfde activiteit twee keer om een vergelijking te zien.","stat.distance_delta":"Afstand ({delta})","stat.duration_delta":"Duur ({delta})","stat.avg_hr_delta":"Gem. hartslag ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"In Cijfers","card.milestones.subtitle":"Sinds je begon","empty.milestones.title":"Nog geen totaalgegevens","stat.earth_laps":"Rondjes om de aarde","stat.marathons":"Marathons","stat.moon_pct":"% naar de maan","stat.burgers":"Hamburgers","card.athlete_profile.title":"Trainingspersoonlijkheid","empty.athlete_profile.title":"Nog niet genoeg gegevens","personality.activity.cycling":"Fietser","personality.activity.running":"Hardloper","personality.activity.trekking":"Wandelaar","personality.activity.walking":"Loper","personality.activity.gym":"Krachtsporter","personality.activity.swim":"Zwemmer","personality.activity.ski":"Skiër","personality.activity.row":"Roeier","personality.activity.other":"Multisporter","personality.schedule.weekend":"Weekendkrijger","personality.schedule.weekday":"Doordeweekse Sporter","personality.schedule.balanced":"Gebalanceerd Schema","personality.time.morning":"Vroege Vogel","personality.time.afternoon":"Middagsporter","personality.time.evening":"Avondsporter","personality.time.night":"Nachtuil","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · laatste {count} sessies","empty.pace_trend.title":"Nog niet genoeg vergelijkbare trainingen","empty.pace_trend.subtitle":"Doe dezelfde activiteit een paar keer om een trend te zien.","pace_trend.faster":"Wordt sneller","pace_trend.slower":"Wordt langzamer","pace_trend.steady":"Stabiel tempo","card.lap_splits.title":"Rondetijden","empty.lap_splits.title":"Geen rondegegevens","empty.lap_splits.subtitle":"Niet elke training heeft ronden - de volgende met ronden vult dit aan.","stat.laps":"Ronden","stat.fastest_lap":"Snelste ronde","label.lap":"Ronde {n}","card.training_effect_trend.title":"Trainingseffecttrend","empty.training_effect_trend.title":"Nog geen trainingseffectgegevens","achievements.badge.around_globe":"Rond de wereld","achievements.badge.century_club":"Eeuwclub - 100 trainingen","achievements.badge.consistency_king":"Koning van Consistentie - reeks van 14 dagen","achievements.badge.iron_will":"IJzeren Wil - reeks van 30 dagen","achievements.badge.days_100":"100 actieve dagen","achievements.badge.distance_1000":"1000 km-club","achievements.badge.distance_5000":"5000 km-club","achievements.badge.elite_engine":"Elitemotor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrand","achievements.badge.energy_1m":"1.000.000 kcal verbrand","achievements.badge.full_year":"Heel het jaar actief","achievements.badge.hours_100":"100 uur","achievements.badge.hours_500":"500 uur","achievements.badge.jack_of_all_trades":"Manusje-van-alles - 5+ sporten","achievements.badge.multi_sport":"Multisportatleet - 3+ sporten","achievements.badge.solid_engine":"Solide motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ trainingen","achievements.badge.workouts_1000":"1000 trainingen","achievements.badge.workouts_250":"250 trainingen","achievements.badge.workouts_500":"500 trainingen","achievements.category.days":"Actieve dagen","achievements.category.distance":"Afstand","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnessniveau","achievements.category.records":"Persoonlijke records","achievements.category.time":"Trainingstijd","achievements.category.variety":"Variatie","achievements.category.workouts":"Geregistreerde trainingen","card.achievements.subtitle":"{unlocked} van {total} ontgrendeld","card.achievements.title":"Prestaties","achievements.next":"Volgende: {name} ({pct}%)","class.rest":"+{pct}% andere activiteiten","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registreer een paar trainingen om badges te ontgrendelen.","empty.achievements.title":"Nog geen prestaties","empty.class.subtitle":"Registreer een paar trainingen om je klasse te onthullen.","empty.class.title":"Nog niet genoeg gegevens","empty.level.subtitle":"Je eerste gesynchroniseerde training start de klim.","empty.level.title":"Nog geen totaalgegevens","empty.player.subtitle":"Heeft wat trainingsgeschiedenis nodig om je stats te berekenen.","empty.player.title":"Nog niet genoeg gegevens","level.label":"NIVEAU","level.source":"{count} trainingen geregistreerd","level.subtitle":"Aangedreven door je totale trainingsbelasting","level.title.grinder":"Uithoudingswerker","level.title.legend":"Levende Legende","level.title.novice":"Verse Rekruut","level.title.veteran":"Doorgewinterde Veteraan","level.xp_to_next":"{xp} XP tot Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-specialist","player.help.title":"Wat dit betekent","player.help.sta":"STA · Uithoudingsvermogen, uit je Fitheid (CTL): hoeveel gestage trainingsbelasting je aankunt","player.help.pwr":"PWR · Kracht, uit de gemiddelde intensiteit (TSS) van je recente trainingen","player.help.rec":"REC · Herstel, je huidige Readiness-score","player.help.con":"CON · Consistentie, trainingen van de afgelopen 30 dagen","player.help.end":"END · Uithoudingsvermogen, uit je geschatte VO2max","player.help.frm":"FRM · Vorm, uit je huidige trainingsbelastingsbalans (TSB)","player.help.disclaimer":"Heuristische waarden berekend uit je eigen data - geen officiële Suunto-metriek.","player.tier.bronze":"Brons","player.tier.gold":"Goud","player.tier.legendary":"Legendarisch","player.tier.silver":"Zilver","records.climb":"Grootste klim","records.distance":"Verste training","records.pace":"Snelste tempo","records.session":"Zwaarste sessie","records.streak":"Langste reeks","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dagen","records.workout":"Langste training","class.name.cycling":"Uithoudingskrijger","class.name.running":"Sprinter","class.name.trekking":"Padvinder","class.name.walking":"Zwerver","class.name.gym":"Krachtberserker","class.name.swim":"Getijroeper","class.name.ski":"Vorstloper","class.name.row":"Roeier","class.name.other":"Manusje-van-alles","class.flavor.cycling":"Gemaakt voor lange, gestage inspanningen in plaats van pure snelheid. Elke andere sport is aanvullende training.","class.flavor.running":"Snel weg en gericht op tempo. Afstand is slechts een middel.","class.flavor.trekking":"Thuis op ruig terrein, uren achtereen kilometers makend.","class.flavor.walking":"Gestage, schokvrije kilometers tellen op - consistentie boven intensiteit.","class.flavor.gym":"Rauwe kracht boven afstand. Krachttraining staat voorop.","class.flavor.swim":"Uithoudingsvermogen gesmeed in het water, slag voor slag.","class.flavor.ski":"Snelheid en ritme op sneeuw en kou.","class.flavor.row":"Ritmische kracht, haal voor haal.","class.flavor.other":"Geen enkele sport domineert - een echt evenwichtige mix.","card.next_milestone.title":"Volgende Mijlpaal","card.next_milestone.subtitle":"Totale afstand","empty.next_milestone.title":"Nog geen totale afstand","next_milestone.remaining_label":"te gaan","next_milestone.target":"naar {target} km totaal - {pct}% onderweg","next_milestone.workouts_one":"{count} training naar {target} totaal","next_milestone.workouts_other":"{count} trainingen naar {target} totaal","next_milestone.eta_one":"bij {pace} km/week - nog ongeveer {weeks} week","next_milestone.eta_other":"bij {pace} km/week - nog ongeveer {weeks} weken","card.story.title":"Jouw Suunto Verhaal","card.story.subtitle":"Sinds je eerste training","empty.story.title":"Nog geen totale gegevens","story.top_activity":"{activity} - jouw belangrijkste activiteit","story.top_activity_share":"{count} trainingen - {pct}% van je geschiedenis","story.record_subtitle":"Jouw record aller tijden","card.sleep_clock.title":"Slaapklok","card.sleep_clock.subtitle":"Afgelopen nacht","empty.sleep_clock.title":"Nog geen slaapgegevens","empty.sleep_clock.subtitle":"Draag je horloge 's nachts om dit hier te zien.","sleep_clock.quality":"{pct}% slaapkwaliteit","card.sleep_rhythm.title":"Slaapritme","card.sleep_rhythm.subtitle":"Laatste 7 nachten","empty.sleep_rhythm.title":"Nog niet genoeg slaapgeschiedenis","empty.sleep_rhythm.subtitle":"Heeft een paar nachten aan gegevens nodig om een patroon te tonen.","sleep_rhythm.avg_bedtime":"Gem. bedtijd {time}","sleep_rhythm.avg_wake":"Gem. wektijd {time}","sleep_rhythm.spread":"{minutes} min spreiding","sleep_rhythm.legend_normal":"Typische nacht","sleep_rhythm.legend_outlier":"{minutes}+ min afwijkend van gemiddelde","card.route.title":"Route","empty.route.title":"Geen routegegevens","empty.route.subtitle":"Indoor trainingen hebben geen GPS-track.","route.pace_slower":"Langzamer","route.pace_faster":"Sneller","card.month_story.title":"Deze Maand","empty.month_story.title":"Nog geen trainingen deze maand","story.share_month":"{count} trainingen - {pct}% van deze maand","story.record_subtitle_month":"Jouw record deze maand","card.year_story.title":"Dit Jaar","empty.year_story.title":"Nog geen trainingen dit jaar","story.share_year":"{count} trainingen - {pct}% van dit jaar","story.record_subtitle_year":"Jouw record dit jaar","card.best_efforts.title":"Beste Prestaties","card.best_efforts.subtitle":"{count} van {total} behaald","empty.best_efforts.title":"Nog geen beste prestaties","empty.best_efforts.subtitle":"Vanaf nu bijgehouden bij hardlooptrainingen, niet met terugwerkende kracht.","best_efforts.not_yet":"Nog niet behaald","distance.half_marathon":"Halve Marathon","distance.marathon":"Marathon","card.steps_today.title":"Stappen Vandaag","card.steps_today.subtitle":"Doel: {goal} stappen","empty.steps_today.title":"Nog geen stappengegevens","editor.steps_goal_label":"Dagelijks doel (stappen)","steps_today.goal_pct":"{pct}% van dagelijks doel","steps_today.vs_avg_up":"+{pct}% t.o.v. je 7-daags gemiddelde ({avg})","steps_today.vs_avg_down":"-{pct}% t.o.v. je 7-daags gemiddelde ({avg})","card.steps_trend.title":"Stappentrend","card.steps_trend.subtitle":"Laatste 14 dagen","empty.steps_trend.title":"Nog geen stappengeschiedenis","steps_trend.legend_met":"Doel behaald","steps_trend.legend_below":"Onder doel","steps_trend.days_at_goal":"Dagen met doel","card.month_records.title":"Records van de Maand","card.month_records.subtitle":"{count} van {total} behaald deze maand","empty.month_records.title":"Nog geen records deze maand","empty.month_records.subtitle":"Je persoonlijke records van deze maand verschijnen hier.","card.year_records.title":"Records van het Jaar","card.year_records.subtitle":"{count} van {total} behaald dit jaar","empty.year_records.title":"Nog geen records dit jaar","empty.year_records.subtitle":"Je persoonlijke records van dit jaar verschijnen hier.","card.running_dynamics.title":"Loopdynamiek","card.running_dynamics.subtitle":"{activity} - laatste {count} trainingen","empty.running_dynamics.title":"Nog niet genoeg gegevens","empty.running_dynamics.subtitle":"Vereist een paar recente hardlooptrainingen met cadansgegevens.","card.weekly_steps_goal.title":"Weekdoel: Stappen","card.weekly_steps_goal.subtitle":"{value} van {goal} stappen","empty.weekly_steps_goal.title":"Nog geen stapgegevens","editor.weekly_steps_goal_label":"Weekdoel (stappen)","card.goals_overview.title":"Doelenoverzicht","card.goals_overview.subtitle":"Deze week","empty.goals_overview.title":"Nog geen doelgegevens","card.week_compare.title":"Deze Week vs Vorige Week","card.week_compare.subtitle":"Voortschrijdende 7-daagse totalen","empty.week_compare.title":"Nog niet genoeg geschiedenis","empty.week_compare.subtitle":"Kom over ongeveer een week terug voor een vergelijking.","week_compare.legend_now":"Deze week","week_compare.legend_prev":"Vorige week"}};function Se(e,t,a){let i=function(e){const t=e?.language??"en",a=t.split("-")[0]?.toLowerCase();return ze[a]??$e}(e)[t]??$e[t];if(a)for(const[e,t]of Object.entries(a))i=i.replace(`{${e}}`,String(t));return i}function Ce(e,t,a,i,s){return Se(e,1===t?a:i,{count:t,...s})}const Te=new Set(["custom:suunto-last-workout-card","custom:suunto-last-workout-tile-card","custom:suunto-lifetime-card","custom:suunto-week-stats-card","custom:suunto-week-compare-card"]),Ae=new Set(["custom:suunto-last-workout-card","custom:suunto-sleep-readiness-card"]),Ee={"custom:suunto-recovery-trends-card":30,"custom:suunto-sleep-trends-card":30},Ne=[14,30,60,90];let je=class extends ce{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return G;const e=we(this.hass),t=this._config.type,a=Te.has(t),i=Ae.has(t),s=Ee[t];return I`
      ${e.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              .includeDeviceClasses=${void 0}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
            <div class="hint">${Se(this.hass,"editor.pick_device")}</div>
          `:I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}
      ${a?I`
            <label class="field">
              <span>${Se(this.hass,"editor.units_label")}</span>
              <select .value=${this._config.units??"metric"} @change=${this._unitsChanged}>
                <option value="metric">${Se(this.hass,"editor.units_metric")}</option>
                <option value="imperial">${Se(this.hass,"editor.units_imperial")}</option>
              </select>
            </label>
          `:G}
      ${void 0!==s?I`
            <label class="field">
              <span>${Se(this.hass,"editor.days_label")}</span>
              <select .value=${String(this._config.days??s)} @change=${this._daysChanged}>
                ${Ne.map(e=>I`<option value=${e}>${e}</option>`)}
              </select>
            </label>
          `:G}
      ${i?I`
            <label class="field checkbox">
              <span>${Se(this.hass,"editor.compact_label")}</span>
              <input
                type="checkbox"
                .checked=${this._config.compact??!1}
                @change=${this._compactChanged}
              />
            </label>
          `:G}
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_unitsChanged(e){if(!this._config)return;const t=e.target.value;this._emit({...this._config,units:"imperial"===t?"imperial":"metric"})}_daysChanged(e){if(!this._config)return;const t=Number(e.target.value);this._emit({...this._config,days:Number.isFinite(t)&&t>0?t:void 0})}_compactChanged(e){if(!this._config)return;const t=e.target.checked;this._emit({...this._config,compact:t||void 0})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};je.styles=n`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
    .field {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 2px 2px;
      font-size: 0.9rem;
    }
    .field.checkbox {
      justify-content: flex-start;
    }
    .field select {
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
    .field.checkbox input {
      order: -1;
      margin-right: 8px;
    }
  `,e([he({attribute:!1})],je.prototype,"hass",void 0),e([ge()],je.prototype,"_config",void 0),je=e([ue("suunto-device-editor")],je);class Me extends ce{_syncTheme(){this.classList.toggle("dark",Boolean(this.hass?.themes?.darkMode))}_resolveEntities(){if(!this.hass)return{error:this._message("mdi:alert-circle-outline",Se(this.hass,"empty.loading"))};try{const e=ke(this.hass,this._configuredDeviceId);return{map:xe(this.hass,e)}}catch(e){return{error:this._message("mdi:alert-circle-outline",this._configErrorMessage(e))}}}_configErrorMessage(e){return e instanceof be?"device_missing"===e.code?Se(this.hass,"error.device_missing",{device:e.deviceId??""}):"multiple_devices"===e.code?Se(this.hass,"error.multiple_devices"):Se(this.hass,"error.no_device"):Se(this.hass,"empty.generic_error")}_message(e,t,a){return I`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${e}></ha-icon>
          <div class="t1">${t}</div>
          ${a?I`<div class="t2">${a}</div>`:G}
        </div>
      </ha-card>
    `}}e([he({attribute:!1})],Me.prototype,"hass",void 0);const De=n`
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
`,Re=n`
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
`;function Pe(e){return I`
    <div class="bar">
      ${e.map(e=>I`<div
            class="seg"
            style="flex-grow:${e.flexGrow};background:${e.colorVar}"
            title=${e.title??""}
          ></div>`)}
    </div>
  `}function Fe(e,t,a=64,i=6){const s=Math.max(0,Math.min(100,e)),r=(a-i)/2,n=2*Math.PI*r,o=a/2;return I`
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
  `}function Ve(e,t,a=300,i=56){if(e.length<2)return G;const s=e.map(e=>e.v),r=Math.min(...s),n=Math.max(...s)-r||1,o=.12*i,l=i-2*o,c=a/(e.length-1),d=e.map((e,t)=>[t*c,o+l-(e.v-r)/n*l]),u=d.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),p=`${u} L${a},${i} L0,${i} Z`,[m,h]=d[d.length-1];return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${p} fill=${t} fill-opacity="0.14" stroke="none"></path>
      <path d=${u} fill="none" stroke=${t} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${m} cy=${h} r="3" fill=${t}></circle>
    </svg>
  `}function He(e){const t=e.map(e=>e.v),a=Math.min(...t);return{min:a,span:Math.max(...t)-a||1}}function Le(e,t=300,a=70,i=!0){const s=e.filter(e=>e.points.length>=2);if(0===s.length)return G;const r=.1*a,n=a-2*r,o=i?He(s.flatMap(e=>e.points)):void 0,l=s.map(e=>{const{min:a,span:i}=o??He(e.points),s=t/(e.points.length-1),l=e.points.map((e,t)=>[t*s,r+n-(e.v-a)/i*n]),c=l.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),[d,u]=l[l.length-1];return W`
      <path
        d=${c}
        fill="none"
        stroke=${e.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${d} cy=${u} r="3" fill=${e.colorVar}></circle>
    `});return I`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="none" class="sparkline">
      ${l}
    </svg>
  `}function qe(e,t=300,a=160){if(e.length<2)return G;const i=e.reduce((e,t)=>e+t.lat,0)/e.length*(Math.PI/180),s=Math.cos(i)||1,r=e.map(e=>e.lon*s),n=e.map(e=>-e.lat),o=Math.min(...r),l=Math.min(...n),c=Math.max(...r)-o||1e-6,d=Math.max(...n)-l||1e-6,u=t-28,p=a-28,m=Math.min(u/c,p/d),h=14+(u-c*m)/2,g=14+(p-d*m)/2,v=e=>[h+(e.lon*s-o)*m,g+(-e.lat-l)*m],y=e.map(e=>e.speedKmh),_=Math.min(...y),f=Math.max(...y),b=e.slice(1).map((t,a)=>{const[i,s]=v(e[a]),[r,n]=v(t),o=function(e,t,a){const i=a-t;if(i<.5)return"var(--sc-amber)";const s=(e-t)/i;return`var(--sc-sev-${Math.min(5,Math.max(1,Math.ceil(5*s)||1))})`}(t.speedKmh,_,f);return W`<line x1=${i.toFixed(1)} y1=${s.toFixed(1)} x2=${r.toFixed(1)} y2=${n.toFixed(1)} stroke=${o} stroke-width="4" stroke-linecap="round"></line>`}),[w,k]=v(e[0]),[x,$]=v(e[e.length-1]);return I`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="xMidYMid meet" class="route-schematic">
      ${b}
      <circle cx=${w} cy=${k} r="5.5" fill="var(--sc-good)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
      <circle cx=${x} cy=${$} r="5.5" fill="var(--sc-bad)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
    </svg>
  `}function Oe(e,t,a=300,i=70){if(0===e.length)return G;const s=Math.max(...e.map(e=>e.value),1e-4),r=(a-4*(e.length-1))/e.length,n=e.map((e,a)=>{const n=Math.max(e.value/s*i,2);return W`
      <rect x=${a*(r+4)} y=${i-n} width=${r} height=${n} rx="2" fill=${e.colorVar??t}>
        <title>${e.label??e.value}</title>
      </rect>
    `});return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      ${n}
    </svg>
  `}const Be=new Set(["unknown","unavailable",""]),Ie=50;let We=class extends Me{static getConfigElement(){return document.createElement("suunto-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-goal-card",goal_km:Ie}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||Be.has(i.state))return this._message("mdi:target",Se(a,"empty.weekly_goal.title"));const r=this._config.goal_km??Ie,n=Number(i.state),o=r>0?n/r*100:0,l=o>=100?"var(--sc-good)":"var(--sc-amber)";return I`
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
            ${Fe(o,l,64,7)}
            <div class="ring-value" style="color:${l}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};We.styles=[De,Re,n`
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
    `],e([ge()],We.prototype,"_config",void 0),We=e([ue("suunto-weekly-goal-card")],We);let Ke=class extends ce{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return G;const e=we(this.hass);return I`
      ${e.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${Se(this.hass,"editor.goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1"
          .value=${String(this._config.goal_km??Ie)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_goalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_km:a})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};async function Ge(e,t,a,i="mean"){const s=new Date,r=new Date(s.getTime()-36e5*a),n=await e.callWS({type:"recorder/statistics_during_period",start_time:r.toISOString(),end_time:s.toISOString(),statistic_ids:[t],period:"hour",types:["mean","min","max","sum"]});return(n?.[t]??[]).map(e=>({t:e.start,v:Number(e[i])})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v))}function Ue(e){const t=[...e].sort((e,t)=>e.t-t.t),a=new Map;for(let e=1;e<t.length;e++){const i=t[e].v-t[e-1].v;if(!Number.isFinite(i)||i<0)continue;const s=new Date(t[e].t).toDateString();a.set(s,(a.get(s)??0)+i)}return[...a.entries()].map(([e,t])=>({t:new Date(e).getTime(),v:t})).sort((e,t)=>e.t-t.t)}function Ze(e){const t=new Map;for(const a of e){const e=new Date(a.t).toDateString(),i=t.get(e)??{sum:0,count:0};i.sum+=a.v,i.count+=1,t.set(e,i)}return[...t.entries()].map(([e,{sum:t,count:a}])=>({t:new Date(e).getTime(),v:t/a})).sort((e,t)=>e.t-t.t)}async function Je(e){const t=Ue(await Ge(e,"suunto_app:steps",192,"sum")),a=(new Date).toDateString(),i=t.filter(e=>new Date(e.t).toDateString()!==a).slice(-6);return i.reduce((e,t)=>e+t.v,0)}async function Ye(e,t,a){if(0===t.length)return{};const i=new Date,s=new Date(i.getTime()-864e5*a),r=await e.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${t.join(",")}&end_time=${i.toISOString()}`),n={};return t.forEach((e,t)=>{n[e]=(r[t]??[]).map(e=>({state:e.state,lastChanged:new Date(e.last_updated??e.last_changed).getTime()}))}),n}function Xe(e){if(e>=60){const t=Math.floor(e/60),a=Math.round(e%60);return{value:`${t}:${String(a).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(e)),unit:"min"}}function Qe(e){const t=Math.round(60*e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}Ke.styles=n`
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
  `,e([he({attribute:!1})],Ke.prototype,"hass",void 0),e([ge()],Ke.prototype,"_config",void 0),Ke=e([ue("suunto-goal-editor")],Ke);const et=1.609344;function tt(e,t="metric",a=1){return"imperial"===t?{value:(e/et).toFixed(a),unit:"mi"}:{value:e.toFixed(a),unit:"km"}}function at(e,t="metric",a=1){return"imperial"===t?{value:(e/et).toFixed(a),unit:"mph"}:{value:e.toFixed(a),unit:"km/h"}}function it(e,t="metric"){return"imperial"===t?{value:Qe(e*et),unit:"/mi"}:{value:Qe(e),unit:"/km"}}function st(e,t){return new Intl.DateTimeFormat(t,{hour:"numeric",minute:"2-digit"}).format(e)}function rt(e,t=0){const a=Number(e.toFixed(t));return 0===a?"±0":a>0?`+${a}`:String(a)}const nt=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function ot(e,t){const a=(e.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(const[e,t]of nt)if(Math.abs(a)>=t)return i.format(Math.round(a/t),e);return i.format(Math.round(a/60),"minute")}const lt=new Set(["unknown","unavailable",""]),ct=1e4;let dt=class extends Me{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-steps-today-card",goal_steps:ct}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{const e=Ue(await Ge(this.hass,"suunto_app:steps",192,"sum")),t=(new Date).toDateString(),a=e.filter(e=>new Date(e.t).toDateString()!==t),i=a.slice(-7);this._weekAverage=i.length?i.reduce((e,t)=>e+t.v,0)/i.length:void 0}catch{this._weekAverage=void 0}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="daily_steps"]?a.states[t[s]]:void 0;var s;if(!i||lt.has(i.state))return this._message("mdi:shoe-print",Se(a,"empty.steps_today.title"));const r=this._config.goal_steps??ct,n=Number(i.state),o=r>0?n/r*100:0,l=o>=100?"var(--sc-good)":"var(--sc-amber)",c=this._weekAverage&&this._weekAverage>0?(n-this._weekAverage)/this._weekAverage*100:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.steps_today.title")}</div>
            <div class="subtitle">${Se(a,"card.steps_today.subtitle",{goal:r.toLocaleString(a.language)})}</div>
          </div>
        </div>

        <div class="hero-row">
          <div>
            <div class="hero-num">
              ${Math.round(n).toLocaleString(a.language)}<span class="unit">${Se(a,"stat.steps")}</span>
            </div>
            <div class="hero-sub">${Se(a,"steps_today.goal_pct",{pct:Math.round(o)})}</div>
          </div>
          <div class="ring-wrap">
            ${Fe(o,l,76,7)}
            <div class="ring-value" style="color:${l}">${Math.round(o)}%</div>
          </div>
        </div>

        ${void 0!==c?I`
              <div class="avg-chip ${c>=0?"up":""}">
                <ha-icon icon=${c>=0?"mdi:trending-up":"mdi:trending-down"}></ha-icon>
                <span>
                  ${Se(a,c>=0?"steps_today.vs_avg_up":"steps_today.vs_avg_down",{pct:Math.abs(Math.round(c)),avg:Math.round(this._weekAverage??0).toLocaleString(a.language)})}
                </span>
              </div>
            `:G}
      </ha-card>
    `}};dt.styles=[De,Re,n`
      .hero-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
      }
      .hero-num {
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 5px;
      }
      .hero-num .unit {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .ring-wrap {
        position: relative;
        width: 76px;
        height: 76px;
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
      .avg-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--divider-color);
        border-radius: 9px;
        padding: 9px 12px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .avg-chip ha-icon {
        --mdc-icon-size: 14px;
        flex: none;
      }
      .avg-chip.up {
        color: var(--sc-good);
      }
    `],e([ge()],dt.prototype,"_config",void 0),e([ge()],dt.prototype,"_weekAverage",void 0),dt=e([ue("suunto-steps-today-card")],dt);let ut=class extends ce{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return G;const e=we(this.hass);return I`
      ${e.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${Se(this.hass,"editor.steps_goal_label")}</span>
        <input
          type="number"
          min="1"
          step="500"
          .value=${String(this._config.goal_steps??ct)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_goalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_steps:a})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};ut.styles=n`
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
  `,e([he({attribute:!1})],ut.prototype,"hass",void 0),e([ge()],ut.prototype,"_config",void 0),ut=e([ue("suunto-steps-goal-editor")],ut);const pt=new Set(["unknown","unavailable",""]),mt=7e4;let ht=class extends Me{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-weekly-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-steps-goal-card",goal_steps:mt}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._priorDaysTotal=await Je(this.hass)}catch{this._priorDaysTotal=void 0}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="daily_steps"]?a.states[t[s]]:void 0;var s;if(!i||pt.has(i.state))return this._message("mdi:target",Se(a,"empty.weekly_steps_goal.title"));const r=this._config.goal_steps??mt,n=(this._priorDaysTotal??0)+Number(i.state),o=r>0?n/r*100:0,l=o>=100?"var(--sc-good)":"var(--sc-amber)";return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.weekly_steps_goal.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.weekly_steps_goal.subtitle",{value:Math.round(n).toLocaleString(a.language),goal:r.toLocaleString(a.language)})}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${Fe(o,l,64,7)}
            <div class="ring-value" style="color:${l}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};ht.styles=[De,Re,n`
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
    `],e([ge()],ht.prototype,"_config",void 0),e([ge()],ht.prototype,"_priorDaysTotal",void 0),ht=e([ue("suunto-weekly-steps-goal-card")],ht);let gt=class extends ce{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return G;const e=we(this.hass);return I`
      ${e.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${Se(this.hass,"editor.weekly_steps_goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1000"
          .value=${String(this._config.goal_steps??mt)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_goalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_steps:a})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};gt.styles=n`
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
  `,e([he({attribute:!1})],gt.prototype,"hass",void 0),e([ge()],gt.prototype,"_config",void 0),gt=e([ue("suunto-weekly-steps-goal-editor")],gt);let vt=class extends ce{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return G;const e=we(this.hass);return I`
      ${e.length>1?I`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id??""}
              .label=${Se(this.hass,"editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `:I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${Se(this.hass,"editor.goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1"
          .value=${String(this._config.goal_km??Ie)}
          @change=${this._distanceGoalChanged}
        />
      </label>
      <label class="goal-field">
        <span>${Se(this.hass,"editor.weekly_steps_goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1000"
          .value=${String(this._config.goal_steps??mt)}
          @change=${this._stepsGoalChanged}
        />
      </label>
      <label class="goal-field">
        <span>${Se(this.hass,"editor.units_label")}</span>
        <select .value=${this._config.units??"metric"} @change=${this._unitsChanged}>
          <option value="metric">${Se(this.hass,"editor.units_metric")}</option>
          <option value="imperial">${Se(this.hass,"editor.units_imperial")}</option>
        </select>
      </label>
    `}_unitsChanged(e){if(!this._config)return;const t=e.target.value;this._emit({...this._config,units:"imperial"===t?"imperial":"metric"})}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_distanceGoalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_km:a})}_stepsGoalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_steps:a})}_emit(e){this._config=e,_e(this,"config-changed",{config:e})}};vt.styles=n`
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
    .goal-field input,
    .goal-field select {
      width: 90px;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
  `,e([he({attribute:!1})],vt.prototype,"hass",void 0),e([ge()],vt.prototype,"_config",void 0),vt=e([ue("suunto-goals-overview-editor")],vt);const yt=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function _t(e){if(e)for(const[t,a]of yt)if(t.test(e))return a;return"mdi:run-fast"}const ft={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};const bt=new Set(["unknown","unavailable",""]);let wt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=this._config.units??"metric",r=this._config.compact??!1,n=i("last_activity");if(!n||bt.has(n.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"),Se(a,"empty.last_workout.subtitle"));const o=i("last_workout_start"),l=i("last_distance"),c=i("last_duration"),d=i("last_avg_hr"),u=i("last_max_hr"),p=i("last_avg_pace"),m=i("last_avg_speed"),h=i("last_pte"),g=i("last_epoc"),v=i("last_feeling"),y=i("last_tss"),_=i("last_cal_per_km"),f=i("last_cadence"),b=i("last_pct_hrmax"),w=i("last_stride"),k=i("last_workout_weather"),x=i("last_workout_tags"),$=i("last_workout_achievements"),z=l&&!bt.has(l.state)?Number(l.state):void 0,S=c&&!bt.has(c.state)?Xe(Number(c.state)):void 0,C=p&&!bt.has(p.state)?Number(p.state):void 0,T=m&&!bt.has(m.state)?Number(m.state):void 0,A=void 0===C&&void 0!==T,E=d&&!bt.has(d.state)?Number(d.state):void 0,N=u&&!bt.has(u.state)?Number(u.state):void 0,j=v&&!bt.has(v.state)?Number(v.state):void 0,M=h&&!bt.has(h.state)?Number(h.state):void 0,D=$&&!bt.has($.state)?Number($.state):0,R=w&&!bt.has(w.state)?Number(w.state):void 0,P=y&&!bt.has(y.state)?Number(y.state):void 0,F=g&&!bt.has(g.state)?Number(g.state):void 0,V=_&&!bt.has(_.state)?Number(_.state):void 0,H=f&&!bt.has(f.state)?Number(f.state):void 0,L=b&&!bt.has(b.state)?Number(b.state):void 0;return I`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${_t(n.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${n.state}</div>
            <div class="subtitle">
              ${o?I`${ot(new Date(o.state),a.language)} ·
                  ${st(new Date(o.state),a.language)}`:""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${void 0!==z?(()=>{const e=tt(z/1e3,s);return this._stat(e.value,e.unit,Se(a,"stat.distance"))})():G}
          ${S?this._stat(S.value,S.unit,Se(a,"stat.duration")):G}
          ${void 0!==C?(()=>{const e=it(C,s);return this._stat(e.value,e.unit,Se(a,"stat.avg_pace"))})():A?(()=>{const e=at(T,s);return this._stat(e.value,e.unit,Se(a,"stat.avg_speed"))})():G}
          ${void 0!==E?this._stat(String(Math.round(E)),"bpm",Se(a,"stat.avg_hr"),!0):G}
          ${void 0!==N?this._stat(String(Math.round(N)),"bpm",Se(a,"stat.max_hr"),!0):G}
          ${void 0!==M?I`
                <div class="stat">
                  <div class="stat-value">${M.toFixed(1)}</div>
                  <div class="stat-label">${Se(a,"stat.training_effect")}</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(e=>I`<i class=${e<=Math.round(M)?`on s${e}`:""}></i>`)}
                  </div>
                </div>
              `:G}
        </div>

        ${r||void 0===P&&void 0===F&&void 0===j&&void 0===V&&void 0===H&&void 0===L&&void 0===R?G:I`
              <hr />
              <div class="secondary">
                ${void 0!==P?this._secondary(String(Math.round(P)),Se(a,"stat.tss")):G}
                ${void 0!==F?this._secondary(F.toFixed(1),Se(a,"stat.epoc")):G}
                ${void 0!==j?I`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(e=>I`<i class=${e<=j?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">${Se(a,"stat.feeling")}</div>
                      </div>
                    `:G}
                ${void 0!==V?this._secondary(`${Math.round(V)}`,Se(a,"stat.energy"),"kcal/km"):G}
                ${void 0!==H?this._secondary(String(Math.round(H)),Se(a,"stat.cadence"),"rpm"):G}
                ${void 0!==L?this._secondary(String(Math.round(L)),Se(a,"stat.pct_hrmax"),"%"):G}
                ${void 0!==R?this._secondary(R.toFixed(2),Se(a,"stat.stride_length"),"m"):G}
              </div>
            `}
        ${r||!k||bt.has(k.state)?G:I`
              <div class="weather">
                <ha-icon .icon=${function(e){const t=e?.slice(0,2);return t&&ft[t]||"mdi:weather-cloudy"}(k.attributes.icon_code)}></ha-icon>
                <strong>${k.state}°C</strong>
                ${k.attributes.condition?I`<span class="sep">·</span><span class="cond">${k.attributes.condition}</span>`:G}
                ${void 0!==k.attributes.wind_speed_kmh?I`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(k.attributes.wind_speed_kmh)} km/h</span>
                    `:G}
              </div>
            `}
        ${!r&&(x&&!bt.has(x.state)||D>0)?I`
              <div class="footer">
                ${x&&!bt.has(x.state)?I`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${x.state}</span>`:G}
                ${D>0?I`
                      <span
                        class="chip accent"
                        title=${$?.attributes.route_ranking?Se(a,"achievement.rank",{rank:$.attributes.route_ranking}):""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${function(e,t,a){if(Array.isArray(t)&&t.length){const e=t[0];if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e,a=t.name??t.title??t.type;if("string"==typeof a)return a}}return Ce(e,a,"achievement.count_one","achievement.count_other")}(a,$?.attributes.achievements,D)}
                      </span>
                    `:G}
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a,i=!1){return I`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}_secondary(e,t,a){return I`
      <div class="sec-item">
        <div class="sec-value">${e}${a?I` <span class="sec-unit">${a}</span>`:G}</div>
        <div class="sec-label">${t}</div>
      </div>
    `}_openMoreInfo(e){e&&_e(this,"hass-more-info",{entityId:e})}};wt.styles=[De,Re,n`
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
    `],e([ge()],wt.prototype,"_config",void 0),wt=e([ue("suunto-last-workout-card")],wt);const kt=e=>`var(--sc-zone-${e})`;let xt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=[];for(let e=0;e<=5;e++){const s=t[`last_zone${e}`],r=s?a.states[s]:void 0;r&&!Number.isNaN(Number(r.state))&&i.push({n:e,minutes:Number(r.state),lower:r.attributes.lower_limit_bpm,upper:r.attributes.upper_limit_bpm})}const s=i.reduce((e,t)=>e+t.minutes,0);if(0===i.length||s<=0)return this._message("mdi:heart-pulse",Se(a,"empty.hr_zones.title"),Se(a,"empty.hr_zones.subtitle"));const r=t.last_workout_start,n=r?a.states[r]:void 0,o=Se(a,"card.hr_zones.last_workout");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_zones.title")}</div>
            <div class="subtitle">
              ${n?`${o} · ${ot(new Date(n.state),a.language)}`:o}
            </div>
          </div>
        </div>

        ${Pe(i.map(e=>({flexGrow:e.minutes,colorVar:kt(e.n),title:Se(a,"label.zone",{n:e.n})})))}

        <div class="rows">
          ${i.map(e=>{const t=Xe(e.minutes),i=Math.round(e.minutes/s*100);return I`
              <div class="row">
                <i class="dot" style="background:${kt(e.n)}"></i>
                <span class="zone-label">${Se(a,"label.zone",{n:e.n})}</span>
                <span class="bpm">${r=e.lower,n=e.upper,void 0!==r&&void 0!==n?`${r}-${n} bpm`:void 0!==r?`${r}+ bpm`:void 0!==n?`<${n} bpm`:""}</span>
                <span class="time">${t.value} ${t.unit}</span>
                <span class="pct">${i}%</span>
              </div>
            `;var r,n})}
        </div>
      </ha-card>
    `}};xt.styles=[De,Re,n`
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
    `],e([ge()],xt.prototype,"_config",void 0),xt=e([ue("suunto-hr-zones-card")],xt);const $t=new Set(["unknown","unavailable",""]);let zt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=this._config.compact??!1,r=i("sleep_duration");if(!r||$t.has(r.state))return this._message("mdi:sleep",Se(a,"empty.sleep_readiness.title"),Se(a,"empty.sleep_readiness.subtitle"));const n=i("wake_time"),o=i("sleep_deep"),l=i("sleep_light"),c=i("sleep_rem"),d=i("sleep_quality"),u=i("sleep_spo2"),p=i("sleep_hrv"),m=i("hrv_baseline"),h=i("hrv_status"),g=i("resting_hr"),v=i("resting_hr_baseline"),y=i("readiness"),_=i("nap_duration"),f=i("sleep_avg_hr"),b=i("sleep_min_hr"),w=i("sleep_time"),k=i("unusual_recovery"),x=y&&!$t.has(y.state)?Number(y.state):void 0,$=void 0!==x?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,x):void 0,z=p&&m&&!$t.has(m.state)?Number(p.state)-Number(m.state):void 0,S=g&&v&&!$t.has(v.state)?Number(g.state)-Number(v.state):void 0,C=[o&&!$t.has(o.state)?{flexGrow:Number(o.state),colorVar:"var(--sc-sleep-deep)",title:Se(a,"label.deep")}:void 0,l&&!$t.has(l.state)?{flexGrow:Number(l.state),colorVar:"var(--sc-sleep-light)",title:Se(a,"label.light")}:void 0,c&&!$t.has(c.state)?{flexGrow:Number(c.state),colorVar:"var(--sc-sleep-rem)",title:Se(a,"label.rem")}:void 0].filter(e=>void 0!==e),T=Xe(60*Number(r.state)),A=_&&!$t.has(_.state)?Number(_.state):void 0,E=!!_?.attributes.date&&function(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}(new Date(_.attributes.date)),N={duration:`${T.value} ${T.unit}`};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_readiness.title")}</div>
            <div class="subtitle">
              ${n?Se(a,"card.sleep_readiness.subtitle_with_wake",{...N,time:st(new Date(n.state),a.language)}):Se(a,"card.sleep_readiness.subtitle_no_wake",N)}
            </div>
          </div>
        </div>

        ${void 0!==x&&$?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${Fe(x,$.colorVar,60,6)}
                  <div class="ring-value" style="color:${$.colorVar}">${Math.round(x)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${Se(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${$.colorVar}">${$.label}</div>
                </div>
              </div>
            `:G}

        <div class="stats">
          ${d?this._stat(String(Math.round(Number(d.state))),"%",Se(a,"stat.quality")):G}
          ${p?this._stat(String(Math.round(Number(p.state))),"ms",void 0!==z?Se(a,"stat.hrv_delta",{delta:rt(z)}):Se(a,"stat.hrv"),void 0!==z?z>=0?"good":"bad":void 0):G}
          ${g?this._stat(String(Math.round(Number(g.state))),"bpm",void 0!==S?Se(a,"stat.resting_hr_delta",{delta:rt(S)}):Se(a,"stat.resting_hr"),void 0!==S?S<=0?"good":"bad":void 0):G}
          ${!s&&u?this._stat(String(Math.round(Number(u.state))),"%",Se(a,"stat.spo2")):G}
          ${!s&&f?this._stat(String(Math.round(Number(f.state))),"bpm",Se(a,"stat.sleep_avg_hr")):G}
          ${!s&&b?this._stat(String(Math.round(Number(b.state))),"bpm",Se(a,"stat.sleep_min_hr")):G}
        </div>

        ${!s&&C.length?I`
              <div class="stages">
                ${Pe(C)}
                <div class="stage-legend">
                  ${C.map(e=>{const t=Xe(e.flexGrow);return I`
                      <span class="legend-item">
                        <i class="dot" style="background:${e.colorVar}"></i>${e.title} ${t.value}${"h"===t.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:G}

        ${!s&&(h&&!$t.has(h.state)||A||w&&!$t.has(w.state)||"on"===k?.state)?I`
              <div class="footer">
                ${"on"===k?.state?I`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</span>`:G}
                ${h&&!$t.has(h.state)?(()=>{const e=function(e,t){return"low"===t?{colorVar:"var(--sc-warn)",label:Se(e,"band.hrv.low")}:"high"===t?{colorVar:"var(--sc-pulse)",label:Se(e,"band.hrv.high")}:{colorVar:"var(--sc-good)",label:Se(e,"band.hrv.balanced")}}(a,h.state);return I`<span class="chip" style="color:${e.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${e.label}</span
                      >`})():G}
                ${A?I`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${Se(a,E?"chip.nap":"chip.nap_earlier",{minutes:A})}
                    </span>`:G}
                ${w&&!$t.has(w.state)?I`<span class="chip">
                      <ha-icon icon="mdi:bed-clock"></ha-icon>${Se(a,"chip.bedtime",{time:st(new Date(w.state),a.language)})}
                    </span>`:G}
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};zt.styles=[De,Re,n`
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
    `],e([ge()],zt.prototype,"_config",void 0),zt=e([ue("suunto-sleep-readiness-card")],zt);const St=new Set(["unknown","unavailable",""]);let Ct=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||St.has(s.state))return this._message("mdi:battery-heart-variant",Se(a,"empty.recovery.title"));const r=i("is_recovering"),n=i("recovery_until"),o=i("recovery_time"),l=i("stress_state"),c=i("workout_today"),d=i("unusual_recovery"),u=Number(s.state),p=function(e,t){return t>=60?{colorVar:"var(--sc-good)",label:Se(e,"band.recovery.well")}:t>=30?{colorVar:"var(--sc-warn)",label:Se(e,"band.recovery.partial")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.recovery.low")}}(a,u),m="on"===r?.state;let h=Se(a,"band.recovery.fully");if(m&&n&&!St.has(n.state)){const e=new Date(n.state).getTime()-Date.now();if(e>0){const t=Xe(e/6e4);h=Se(a,"band.recovery.recovering",{time:`${t.value} ${t.unit}`})}}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery.title")}</div>
            <div class="subtitle">${h}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${Fe(u,p.colorVar,60,6)}
            <div class="ring-value" style="color:${p.colorVar}">${Math.round(u)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${Se(a,"stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${p.colorVar}">${p.label}</div>
          </div>
        </div>

        ${l||o?I`
              <div class="stats">
                ${l&&!St.has(l.state)?this._stat(l.state,"",Se(a,"stat.stress_level")):G}
                ${o&&!St.has(o.state)?this._stat(Number(o.state).toFixed(1),"h",Se(a,"stat.recovery_window")):G}
              </div>
            `:G}
        ${"on"===c?.state||"on"===d?.state?I`
              <div class="footer">
                ${"on"===c?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_logged_today")}</span>`:G}
                ${"on"===d?.state?I`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</span>`:G}
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ct.styles=[De,Re,n`
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
    `],e([ge()],Ct.prototype,"_config",void 0),Ct=e([ue("suunto-recovery-card")],Ct);const Tt=new Set(["unknown","unavailable",""]);let At=class extends Me{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.fitness_ctl;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{this._history=await Ge(this.hass,t,720,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||Tt.has(s.state))return this._message("mdi:arm-flex",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=i("acwr"),l=n&&!Tt.has(n.state)?Number(n.state):void 0,c=void 0!==l?function(e,t){return t>5?{colorVar:"var(--sc-good)",label:Se(e,"band.form.fresh")}:t<-20?{colorVar:"var(--sc-bad)",label:Se(e,"band.form.very_fatigued")}:t<-5?{colorVar:"var(--sc-warn)",label:Se(e,"band.form.fatigued")}:{colorVar:"var(--sc-pulse)",label:Se(e,"band.form.neutral")}}(a,l):void 0,d=o&&!Tt.has(o.state)?Number(o.state):void 0,u=void 0!==d?function(e,t){return t>1.3?{colorVar:"var(--sc-bad)",label:Se(e,"band.acwr.high")}:t<.8?{colorVar:"var(--sc-warn)",label:Se(e,"band.acwr.low")}:{colorVar:"var(--sc-good)",label:Se(e,"band.acwr.safe")}}(a,d):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_load.title")}</div>
            <div class="subtitle">${c?c.label:Se(a,"card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${Ve(this._history,"var(--sc-amber)")}

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):G}
          ${void 0!==l?this._stat(rt(l,1),Se(a,"stat.tsb"),c?.colorVar):G}
        </div>

        ${void 0!==d&&u?I`
              <div class="footer">
                <span class="chip" style="color:${u.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${Se(a,"chip.acwr",{value:d.toFixed(2),label:u.label})}
                </span>
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value" style=${a?`color:${a}`:""}>${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};At.styles=[De,Re,n`
      .footer {
        display: flex;
      }
    `],e([ge()],At.prototype,"_config",void 0),e([ge()],At.prototype,"_history",void 0),At=e([ue("suunto-training-load-card")],At);const Et=new Set(["unknown","unavailable",""]),Nt=["var(--sc-amber)","var(--sc-pulse)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let jt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("weekly_time"),n=i("workouts_7d"),o=i("workouts_30d"),l=i("lifetime_by_activity");if(!s&&!l)return this._message("mdi:calendar-week",Se(a,"empty.week_stats.title"));const c=(l?.attributes.activities??[]).slice().sort((e,t)=>t.distance_km-e.distance_km),d=c.slice(0,5),u=c.length-d.length,p=this._config.units??"metric";return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.week_stats.title")}</div>
            <div class="subtitle">${Se(a,"card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${s||r||n?I`
              <div class="stats">
                ${s&&!Et.has(s.state)?(()=>{const e=tt(Number(s.state),p);return this._stat(e.value,e.unit,Se(a,"stat.distance"))})():G}
                ${r&&!Et.has(r.state)?this._stat(Number(r.state).toFixed(1),"h",Se(a,"stat.time")):G}
                ${n&&!Et.has(n.state)?this._stat(n.state,"",Se(a,"stat.workouts")):G}
              </div>
            `:G}

        ${d.length?I`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${Se(a,"card.week_stats.lifetime_title")}</div>
                ${Pe(d.map((e,t)=>({flexGrow:e.distance_km,colorVar:Nt[t%Nt.length],title:e.activity})))}
                <div class="rows">
                  ${d.map((e,t)=>{const a=Nt[t%Nt.length];return I`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${a} 18%, transparent);color:${a}"
                        >
                          <ha-icon .icon=${_t(e.activity)}></ha-icon>
                        </div>
                        <span class="name">${e.activity}</span>
                        <span class="count">${e.workouts}×</span>
                        <span class="dist">${(()=>{const t=tt(e.distance_km,p,0);return`${t.value} ${t.unit}`})()}</span>
                      </div>
                    `})}
                  ${u>0?I`<div class="row muted">
                        ${Ce(a,u,"chip.more_activity_one","chip.more_activity_other")}
                      </div>`:G}
                </div>
              </div>
            `:G}
        ${o&&!Et.has(o.state)?I`<div class="footer"><span class="chip">${Se(a,"chip.workouts_30d",{count:o.state})}</span></div>`:G}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};jt.styles=[De,Re,n`
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
    `],e([ge()],jt.prototype,"_config",void 0),jt=e([ue("suunto-week-stats-card")],jt);const Mt=new Set(["unknown","unavailable",""]);let Dt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps"),r=i("daily_energy"),n=i("current_hr"),o=i("workout_today"),l=i("is_recovering"),c=i("training_suggestion"),d=i("days_since_last_workout");if(!s&&!r&&!n)return this._message("mdi:pulse",Se(a,"empty.today.title"));const u=n&&!Mt.has(n.state)?Math.round(Number(n.state)):void 0,p=c&&!Mt.has(c.state)?c.state:void 0,m=p?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:Se(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:Se(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:Se(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:Se(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,p):void 0,h=d&&!Mt.has(d.state)?Number(d.state):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.today.title")}</div>
            <div class="subtitle">${Se(a,"card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${s&&!Mt.has(s.state)?this._stat(Number(s.state).toLocaleString(a.language),"",Se(a,"stat.steps")):G}
          ${r&&!Mt.has(r.state)?this._stat(Math.round(Number(r.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):G}
          ${void 0!==u?I`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${u}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${Se(a,"stat.heart_rate")}</div>
                </div>
              `:G}
        </div>

        ${"on"===o?.state||"on"===l?.state||m||void 0!==h&&h>0?I`
              <div class="footer">
                ${"on"===o?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_today")}</span>`:G}
                ${"on"===l?.state?I`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${Se(a,"chip.recovering")}</span>`:G}
                ${m?I`<span class="chip" style="color:${m.colorVar}"
                      ><ha-icon icon="${m.icon}"></ha-icon>${m.label}</span
                    >`:G}
                ${void 0!==h&&h>0?I`<span class="chip"
                      ><ha-icon icon="mdi:calendar-clock-outline"></ha-icon>${Ce(a,h,"chip.days_since_one","chip.days_since_other")}</span
                    >`:G}
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Dt.styles=[De,Re,n`
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
    `],e([ge()],Dt.prototype,"_config",void 0),Dt=e([ue("suunto-today-card")],Dt);const Rt=new Set(["unknown","unavailable",""]);let Pt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lifetime-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance"),r=i("lifetime_time"),n=i("lifetime_energy"),o=i("lifetime_workouts"),l=i("lifetime_days");return!s||Rt.has(s.state)?this._message("mdi:trophy-variant",Se(a,"empty.lifetime.title")):I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.lifetime.title")}</div>
            <div class="subtitle">${Se(a,"card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${(()=>{const e=tt(Number(s.state),this._config.units??"metric",0);return this._stat(e.value,e.unit,Se(a,"stat.distance"))})()}
          ${r?this._stat(Number(r.state).toFixed(0),"h",Se(a,"stat.time")):G}
          ${n?this._stat(Math.round(Number(n.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):G}
          ${o?this._stat(o.state,"",Se(a,"stat.workouts")):G}
          ${l?this._stat(l.state,"",Se(a,"stat.active_days")):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Pt.styles=[De,Re,n`
    `],e([ge()],Pt.prototype,"_config",void 0),Pt=e([ue("suunto-lifetime-card")],Pt);let Ft=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recent-workouts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];return s&&0!==r.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recent_workouts.title")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map(e=>{const t=null!==e.duration_min?Xe(e.duration_min):void 0;return I`
              <div class="workout-row">
                <div class="icon-badge tiny"><ha-icon .icon=${_t(e.activity)}></ha-icon></div>
                <div class="name-block">
                  <div class="name">${e.activity??"-"}</div>
                  <div class="date">
                    ${e.start?ot(new Date(e.start),a.language):""}
                  </div>
                </div>
                <div class="row-stats">
                  ${null!==e.distance_km?I`<span>${e.distance_km} km</span>`:G}
                  ${null!==e.distance_km&&t?I`<span class="sep">·</span>`:G}
                  ${t?I`<span>${t.value} ${t.unit}</span>`:G}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:format-list-bulleted",Se(a,"empty.recent_workouts.title"))}};Ft.styles=[De,Re,n`
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
    `],e([ge()],Ft.prototype,"_config",void 0),Ft=e([ue("suunto-recent-workouts-card")],Ft);const Vt=new Set(["unknown","unavailable",""]);let Ht=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-elevation-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_ascent"),r=i("last_descent");if((!s||Vt.has(s.state))&&(!r||Vt.has(r.state)))return this._message("mdi:image-filter-hdr",Se(a,"empty.elevation.title"),Se(a,"empty.elevation.subtitle"));const n=i("last_ascent_time"),o=i("last_descent_time"),l=i("last_min_altitude"),c=i("last_max_altitude"),d=i("last_ascent_rate"),u=i("last_workout_start");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:image-filter-hdr"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.elevation.title")}</div>
            <div class="subtitle">
              ${u?`${Se(a,"card.hr_zones.last_workout")} · ${ot(new Date(u.state),a.language)}`:Se(a,"card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats">
          ${s&&!Vt.has(s.state)?this._stat(Math.round(Number(s.state)).toString(),"m",Se(a,"stat.ascent")):G}
          ${r&&!Vt.has(r.state)?this._stat(Math.round(Number(r.state)).toString(),"m",Se(a,"stat.descent")):G}
          ${n&&!Vt.has(n.state)?(()=>{const e=Xe(Number(n.state));return this._stat(e.value,e.unit,Se(a,"stat.ascent_time"))})():G}
          ${o&&!Vt.has(o.state)?(()=>{const e=Xe(Number(o.state));return this._stat(e.value,e.unit,Se(a,"stat.descent_time"))})():G}
          ${l&&!Vt.has(l.state)?this._stat(Math.round(Number(l.state)).toString(),"m",Se(a,"stat.min_altitude")):G}
          ${c&&!Vt.has(c.state)?this._stat(Math.round(Number(c.state)).toString(),"m",Se(a,"stat.max_altitude")):G}
        </div>

        ${d&&!Vt.has(d.state)?I`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${Se(a,"stat.ascent_rate")}: ${Math.round(Number(d.state))} m/h
                </span>
              </div>
            `:G}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ht.styles=[De,Re,n`
      .footer {
        display: flex;
      }
    `],e([ge()],Ht.prototype,"_config",void 0),Ht=e([ue("suunto-elevation-card")],Ht);const Lt=new Set(["unknown","unavailable",""]);let qt=class extends Me{constructor(){super(...arguments),this._mapLoading=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-location-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),r=s?.attributes.latitude,n=s?.attributes.longitude,o=t.last_workout_location;if(!s||Lt.has(s.state)||void 0===r||void 0===n)return this._message("mdi:map-marker",Se(a,"empty.location.title"),Se(a,"empty.location.subtitle"));const l=i("last_activity"),c=i("last_workout_start"),d=`https://www.google.com/maps?q=${r},${n}`,u=_t(l?.state);return o&&this._ensureMapElement(o,u),this._mapEl&&(this._mapEl.hass=a),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.location.title")}</div>
            <div class="subtitle">
              ${l?I`${l.state}`:G}
              ${l&&c?I`<span class="sep">·</span>`:G}
              ${c?ot(new Date(c.state),a.language):G}
            </div>
          </div>
        </div>

        ${this._mapEl&&this._mapKey===`${o}:${u}`?I`<div class="map-wrap">${this._mapEl}</div>`:G}

        <div class="footer-row">
          <div class="coords">${Number(r).toFixed(5)}, ${Number(n).toFixed(5)}</div>
          <a class="chip accent link" href=${d} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${Se(a,"location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `}async _ensureMapElement(e,t){const a=`${e}:${t}`;if(this._mapEl&&this._mapKey===a||this._mapLoading)return;const i={type:"map",auto_fit:!0,default_zoom:14,aspect_ratio:"16:9",entities:[{entity:e,icon:t}]},s=window.loadCardHelpers;if(!s){if(!customElements.get("hui-map-card"))return;try{const e=document.createElement("hui-map-card");e.setConfig(i),this._mapKey=a,this._mapEl=e}catch{}return}this._mapLoading=!0;try{const e=(await s()).createCardElement(i);this._mapKey=a,this._mapEl=e}catch{}finally{this._mapLoading=!1}}};qt.styles=[De,Re,n`
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
    `],e([ge()],qt.prototype,"_config",void 0),e([ge()],qt.prototype,"_mapEl",void 0),qt=e([ue("suunto-location-card")],qt);const Ot=new Set(["unknown","unavailable",""]);let Bt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("vo2max");if(!s||Ot.has(s.state))return this._message("mdi:lungs",Se(a,"empty.fitness.title"),Se(a,"empty.fitness.subtitle"));const r=i("estimated_vo2max"),n=i("fitness_age"),o=s.attributes.measured_at,l=s.attributes.measured_from;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.fitness.title")}</div>
            <div class="subtitle">
              ${o?Se(a,"fitness.measured",{time:ot(new Date(o),a.language),activity:l??""}):G}
            </div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",Se(a,"stat.vo2max"))}
          ${r&&!Ot.has(r.state)?this._stat(Number(r.state).toFixed(1),"ml/kg/min",Se(a,"stat.estimated_vo2max")):G}
          ${n&&!Ot.has(n.state)?this._stat(String(Math.round(Number(n.state))),"",Se(a,"stat.fitness_age")):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Bt.styles=[De,Re,n`
    `],e([ge()],Bt.prototype,"_config",void 0),Bt=e([ue("suunto-fitness-card")],Bt);const It=new Set(["unknown","unavailable",""]);let Wt=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-tile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 1}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity");if(!s||It.has(s.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),l=i("last_avg_hr"),c=i("last_avg_pace"),d=i("last_avg_speed"),u=this._config.units??"metric",p=[];if(n&&!It.has(n.state)){const e=tt(Number(n.state)/1e3,u);p.push(I`${e.value} ${e.unit}`)}if(o&&!It.has(o.state)){const e=Xe(Number(o.state));p.push(I`${e.value} ${e.unit}`)}if(c&&!It.has(c.state)){const e=it(Number(c.state),u);p.push(I`${e.value}${e.unit}`)}else if(d&&!It.has(d.state)){const e=at(Number(d.state),u);p.push(I`${e.value} ${e.unit}`)}return l&&!It.has(l.state)&&p.push(I`${Math.round(Number(l.state))} bpm`),I`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${_t(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">${r?ot(new Date(r.state),a.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${p.length?I`
              <div class="compact-stats">
                ${p.map((e,t)=>I`${t>0?I`<span class="sep">·</span>`:G}${e}`)}
              </div>
            `:G}
      </ha-card>
    `}_openMoreInfo(e){e&&_e(this,"hass-more-info",{entityId:e})}};Wt.styles=[De,Re,n`
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
    `],e([ge()],Wt.prototype,"_config",void 0),Wt=e([ue("suunto-last-workout-tile-card")],Wt);const Kt=new Set(["unknown","unavailable",""]);let Gt=class extends Me{constructor(){super(...arguments),this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pmc-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.fitness_ctl;if(!a)return;const i=t.fatigue_atl,s=t.form_tsb,r=[a,i,s].filter(e=>Boolean(e)).join(","),n=Date.now();if(!(r===this._historyKey&&n-this._historyFetchedAt<6e5)){this._historyKey=r,this._historyFetchedAt=n;try{const e=this.hass,[t,r,n]=await Promise.all([Ge(e,a,2160,"mean"),i?Ge(e,i,2160,"mean"):Promise.resolve([]),s?Ge(e,s,2160,"mean"):Promise.resolve([])]);this._ctlHistory=t,this._atlHistory=r,this._tsbHistory=n}catch{this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||Kt.has(s.state))return this._message("mdi:chart-timeline-variant",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=[{points:this._ctlHistory,colorVar:"var(--sc-pulse)"}];return this._atlHistory.length&&o.push({points:this._atlHistory,colorVar:"var(--sc-bad)"}),this._tsbHistory.length&&o.push({points:this._tsbHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.pmc.title")}</div>
            <div class="subtitle">${Se(a,"card.pmc.subtitle")}</div>
          </div>
        </div>

        ${Le(o,300,80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${Se(a,"stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.tsb")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r&&!Kt.has(r.state)?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):G}
          ${n&&!Kt.has(n.state)?this._stat(rt(Number(n.state),1),Se(a,"stat.tsb")):G}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Gt.styles=[De,Re,n`
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
    `],e([ge()],Gt.prototype,"_config",void 0),e([ge()],Gt.prototype,"_ctlHistory",void 0),e([ge()],Gt.prototype,"_atlHistory",void 0),e([ge()],Gt.prototype,"_tsbHistory",void 0),Gt=e([ue("suunto-pmc-card")],Gt);const Ut=new Set(["unknown","unavailable",""]);let Zt=class extends Me{constructor(){super(...arguments),this._rhrHistory=[],this._hrvHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.resting_hr,i=t.sleep_hrv;if(!a&&!i)return;const s=this._config?.days??30,r=`${[a,i].filter(e=>Boolean(e)).join(",")}:${s}`,n=Date.now();if(!(r===this._historyKey&&n-this._historyFetchedAt<6e5)){this._historyKey=r,this._historyFetchedAt=n;try{const e=this.hass,[t,r]=await Promise.all([a?Ge(e,a,24*s,"mean"):Promise.resolve([]),i?Ge(e,i,24*s,"mean"):Promise.resolve([])]);this._rhrHistory=t,this._hrvHistory=r}catch{this._rhrHistory=[],this._hrvHistory=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("resting_hr"),r=i("sleep_hrv"),n=s&&!Ut.has(s.state),o=r&&!Ut.has(r.state);if(!n&&!o)return this._message("mdi:heart-pulse",Se(a,"empty.recovery_trends.title"));const l=i("resting_hr_baseline"),c=i("hrv_baseline"),d=n&&l&&!Ut.has(l.state)?Number(s.state)-Number(l.state):void 0,u=o&&c&&!Ut.has(c.state)?Number(r.state)-Number(c.state):void 0,p=[];return this._rhrHistory.length&&p.push({points:this._rhrHistory,colorVar:"var(--sc-pulse)"}),this._hrvHistory.length&&p.push({points:this._hrvHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.recovery_trends.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${Le(p,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.hrv")}</span>
        </div>

        <div class="stats">
          ${n?this._stat(String(Math.round(Number(s.state))),"bpm",void 0!==d?Se(a,"stat.resting_hr_delta",{delta:rt(d)}):Se(a,"stat.resting_hr"),void 0!==d?d<=0?"good":"bad":void 0):G}
          ${o?this._stat(String(Math.round(Number(r.state))),"ms",void 0!==u?Se(a,"stat.hrv_delta",{delta:rt(u)}):Se(a,"stat.hrv"),void 0!==u?u>=0?"good":"bad":void 0):G}
        </div>
      </ha-card>
    `}_stat(e,t,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Zt.styles=[De,Re,n`
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
    `],e([ge()],Zt.prototype,"_config",void 0),e([ge()],Zt.prototype,"_rhrHistory",void 0),e([ge()],Zt.prototype,"_hrvHistory",void 0),Zt=e([ue("suunto-recovery-trends-card")],Zt);const Jt=new Set(["unknown","unavailable",""]);let Yt=class extends Me{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-volume-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.weekly_distance;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{this._history=await Ge(this.hass,t,2016,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||Jt.has(i.state))return this._message("mdi:chart-bar",Se(a,"empty.weekly_volume.title"));const r=function(e,t){const a=[...e].sort((e,t)=>e.t-t.t),i=Date.now(),s=[];for(let e=t-1;e>=0;e--){const t=i-7*e*864e5,r=t-6048e5,n=a.filter(e=>e.t>r&&e.t<=t),o=n[n.length-1];s.push({value:o?o.v:0,weekEndMs:t})}return s}(this._history,12),n=r.map(e=>({value:e.value,label:`${new Date(e.weekEndMs).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${e.value.toFixed(1)} km`})),o=r.reduce((e,t)=>e+t.value,0),l=o/12;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.weekly_volume.title")}</div>
            <div class="subtitle">${Se(a,"card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${Oe(n,"var(--sc-amber)",300,80)}

        <div class="stats">
          ${this._stat(Number(i.state).toFixed(1),"km",Se(a,"stat.distance"))}
          ${this._stat(l.toFixed(1),"km",Se(a,"stat.average"))}
          ${this._stat(o.toFixed(0),"km",Se(a,"stat.total"))}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Yt.styles=[De,Re,n`
    `],e([ge()],Yt.prototype,"_config",void 0),e([ge()],Yt.prototype,"_history",void 0),Yt=e([ue("suunto-weekly-volume-card")],Yt);const Xt=new Set(["unknown","unavailable",""]);let Qt=class extends Me{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-curve-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await Ge(this.hass,"suunto_app:hr",26,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="current_hr"]?a.states[t[s]]:void 0;var s;if(!i||Xt.has(i.state))return this._message("mdi:chart-bell-curve",Se(a,"empty.hr_curve.title"),Se(a,"empty.hr_curve.subtitle"));const r=this._history.map(e=>e.v),n=r.length?Math.min(...r):void 0,o=r.length?Math.max(...r):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-bell-curve"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_curve.title")}</div>
            <div class="subtitle">${Se(a,"card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${Ve(this._history,"var(--sc-pulse)")}

        <div class="stats">
          ${this._stat(String(Math.round(Number(i.state))),"bpm",Se(a,"stat.hr_now"))}
          ${void 0!==n?this._stat(String(Math.round(n)),"bpm",Se(a,"stat.hr_min")):G}
          ${void 0!==o?this._stat(String(Math.round(o)),"bpm",Se(a,"stat.hr_max")):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat hr">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Qt.styles=[De,Re,n`
    `],e([ge()],Qt.prototype,"_config",void 0),e([ge()],Qt.prototype,"_history",void 0),Qt=e([ue("suunto-hr-curve-card")],Qt);const ea=new Set(["unknown","unavailable",""]);let ta=class extends Me{constructor(){super(...arguments),this._durationHistory=[],this._qualityHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??30,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Ge(this.hass,"suunto_app:sleep_duration",i,"mean"),Ge(this.hass,"suunto_app:sleep_quality",i,"mean")]);this._durationHistory=e,this._qualityHistory=t}catch{this._durationHistory=[],this._qualityHistory=[]}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||ea.has(s.state))return this._message("mdi:power-sleep",Se(a,"empty.sleep_trends.title"));const r=i("sleep_quality"),n=[];this._durationHistory.length&&n.push({points:this._durationHistory,colorVar:"var(--sc-pulse)"}),this._qualityHistory.length&&n.push({points:this._qualityHistory,colorVar:"var(--sc-amber)"});const o=Xe(60*Number(s.state));return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:power-sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.sleep_trends.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${Le(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.duration")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.quality")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${o.value} ${o.unit}`,Se(a,"stat.duration"))}
          ${r&&!ea.has(r.state)?this._stat(`${Math.round(Number(r.state))}%`,Se(a,"stat.quality")):G}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};ta.styles=[De,Re,n`
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
    `],e([ge()],ta.prototype,"_config",void 0),e([ge()],ta.prototype,"_durationHistory",void 0),e([ge()],ta.prototype,"_qualityHistory",void 0),ta=e([ue("suunto-sleep-trends-card")],ta);let aa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-streak-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:fire",Se(a,"empty.streak.title"));const{streak:n,activeDates:o}=function(e){const t=new Set(e.map(e=>e.start).filter(e=>Boolean(e)).map(e=>new Date(e).toDateString())),a=new Date;t.has(a.toDateString())||a.setDate(a.getDate()-1);let i=0;for(;t.has(a.toDateString());)i++,a.setDate(a.getDate()-1);return{streak:i,activeDates:t}}(r),l=[];let c=0;const d=new Date;d.setDate(d.getDate()-13);for(let e=0;e<14;e++){const e=o.has(d.toDateString());e&&c++,l.push(I`<span
          class="dot"
          style="background:${e?"var(--sc-amber)":"var(--divider-color)"}"
        ></span>`),d.setDate(d.getDate()+1)}return I`
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
            ${n>0?Ce(a,n,"streak.days_one","streak.days_other"):Se(a,"streak.none")}
          </div>
        </div>

        <div class="week-dots">${l}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${Ce(a,c,"streak.window_count_one","streak.window_count_other")}
          </span>
        </div>
      </ha-card>
    `}};aa.styles=[De,Re,n`
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
    `],e([ge()],aa.prototype,"_config",void 0),aa=e([ue("suunto-streak-card")],aa);const ia=new Set(["unknown","unavailable",""]);let sa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-just-finished-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity"),r=i("last_workout_start");if(!s||ia.has(s.state)||!r)return this._message("mdi:party-popper",Se(a,"empty.just_finished.title"));const n=new Date(r.last_changed),o=Date.now()-n.getTime();if(!(Number.isFinite(o)&&o>=0&&o<216e5))return this._message("mdi:party-popper",Se(a,"just_finished.idle.title"),Se(a,"just_finished.idle.subtitle"));const l=i("last_distance"),c=i("last_duration"),d=i("last_avg_hr"),u=i("last_tss"),p=l&&!ia.has(l.state)?Number(l.state):void 0,m=c&&!ia.has(c.state)?Xe(Number(c.state)):void 0,h=d&&!ia.has(d.state)?Number(d.state):void 0,g=u&&!ia.has(u.state)?Number(u.state):void 0;return I`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon icon="mdi:party-popper"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"just_finished.title")}</div>
            <div class="subtitle">
              <span class="activity">${s.state}</span> · ${ot(n,a.language)}
            </div>
          </div>
        </div>

        <div class="stats">
          ${void 0!==p?this._stat((p/1e3).toFixed(1),"km",Se(a,"stat.distance")):G}
          ${m?this._stat(m.value,m.unit,Se(a,"stat.duration")):G}
          ${void 0!==h?this._stat(String(Math.round(h)),"bpm",Se(a,"stat.avg_hr")):G}
          ${void 0!==g?this._stat(g.toFixed(0),"",Se(a,"stat.tss")):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:G}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};sa.styles=[De,Re,n`
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
    `],e([ge()],sa.prototype,"_config",void 0),sa=e([ue("suunto-just-finished-card")],sa);const ra=new Set(["unknown","unavailable",""]);let na=class extends Me{constructor(){super(...arguments),this._stepsHistory=[],this._energyHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([Ge(this.hass,"suunto_app:steps",336,"sum"),Ge(this.hass,"suunto_app:energy",336,"sum")]);this._stepsHistory=Ue(e),this._energyHistory=Ue(t)}catch{this._stepsHistory=[],this._energyHistory=[]}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps");if(!s||ra.has(s.state))return this._message("mdi:shoe-print",Se(a,"empty.activity_trends.title"));const r=i("daily_energy"),n=[];return this._stepsHistory.length&&n.push({points:this._stepsHistory,colorVar:"var(--sc-pulse)"}),this._energyHistory.length&&n.push({points:this._energyHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.activity_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.activity_trends.subtitle")}</div>
          </div>
        </div>

        ${Le(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.steps")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.energy")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(s.state)).toLocaleString(a.language),Se(a,"stat.steps"))}
          ${r&&!ra.has(r.state)?this._stat(`${Math.round(Number(r.state))} kcal`,Se(a,"stat.energy")):G}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};na.styles=[De,Re,n`
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
    `],e([ge()],na.prototype,"_config",void 0),e([ge()],na.prototype,"_stepsHistory",void 0),e([ge()],na.prototype,"_energyHistory",void 0),na=e([ue("suunto-activity-trends-card")],na);const oa=new Set(["unknown","unavailable",""]);let la=class extends Me{constructor(){super(...arguments),this._balanceHistory=[],this._stressHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-balance-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([Ge(this.hass,"suunto_app:recovery_balance",336,"mean"),Ge(this.hass,"suunto_app:stress",336,"mean")]);this._balanceHistory=Ze(e),this._stressHistory=Ze(t)}catch{this._balanceHistory=[],this._stressHistory=[]}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||oa.has(s.state))return this._message("mdi:heart-flash",Se(a,"empty.recovery_balance_trend.title"));const r=i("stress_state"),n=[];return this._balanceHistory.length&&n.push({points:this._balanceHistory,colorVar:"var(--sc-pulse)"}),this._stressHistory.length&&n.push({points:this._stressHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-flash"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery_balance_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.recovery_balance_trend.subtitle")}</div>
          </div>
        </div>

        ${Le(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.recovery_balance")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.stress_level")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${Math.round(Number(s.state))}%`,Se(a,"stat.recovery_balance"))}
          ${r&&!oa.has(r.state)?this._stat(r.state,Se(a,"stat.stress_level")):G}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};la.styles=[De,Re,n`
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
    `],e([ge()],la.prototype,"_config",void 0),e([ge()],la.prototype,"_balanceHistory",void 0),e([ge()],la.prototype,"_stressHistory",void 0),la=e([ue("suunto-recovery-balance-trend-card")],la);const ca=new Set(["unknown","unavailable",""]);let da=class extends Me{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-readiness-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await Ge(this.hass,"suunto_app:readiness",720,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="readiness"]?a.states[t[s]]:void 0;var s;if(!i||ca.has(i.state))return this._message("mdi:gauge",Se(a,"empty.readiness_trend.title"));const r=Number(i.state),n=function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,r);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.readiness_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${Ve(this._history,n.colorVar)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value" style="color:${n.colorVar}">${Math.round(r)}</div>
            <div class="stat-label">${n.label}</div>
          </div>
        </div>
      </ha-card>
    `}};da.styles=[De,Re,n`
      .stat-value {
        font-size: 1.4rem;
      }
    `],e([ge()],da.prototype,"_config",void 0),e([ge()],da.prototype,"_history",void 0),da=e([ue("suunto-readiness-trend-card")],da);function ua(e){return e<=0?0:1===e?1:2===e?2:3}let pa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-calendar-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:calendar-month",Se(a,"empty.activity_calendar.title"));const n=function(e){const t=new Map;for(const a of e){if(!a.start)continue;const e=new Date(a.start).toDateString();t.set(e,(t.get(e)??0)+1)}return t}(r),o=new Date,l=(o.getDay()+6)%7,c=new Date(o);c.setDate(o.getDate()-l-35);let d=0;const u=[],p=new Date(c);for(let e=0;e<42;e++){const e=n.get(p.toDateString())??0;e>0&&d++;const t=ua(e);u.push(I`<span
          class="cell level-${t}"
          title=${p.toLocaleDateString(a.language)}
        ></span>`),p.setDate(p.getDate()+1)}return I`
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
            ${Ce(a,d,"activity_calendar.active_days_one","activity_calendar.active_days_other")}
          </span>
        </div>
      </ha-card>
    `}};function ma(e){const t=Math.round(60*e);if(0===t)return"±0:00";const a=t>0?"+":"-",i=Math.abs(t);return`${a}${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}pa.styles=[De,Re,n`
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
    `],e([ge()],pa.prototype,"_config",void 0),pa=e([ue("suunto-activity-calendar-card")],pa);let ha=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-workout-comparison-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(e){const t=e[0];if(!t?.activity)return;const a=e.slice(1).find(e=>e.activity===t.activity);return a?{current:t,previous:a}:void 0}(r):void 0;if(!n)return this._message("mdi:compare",Se(a,"empty.workout_comparison.title"),Se(a,"empty.workout_comparison.subtitle"));const{current:o,previous:l}=n,c=null!==o.distance_km&&null!==l.distance_km?o.distance_km-l.distance_km:void 0,d=null!==o.duration_min&&null!==l.duration_min?o.duration_min-l.duration_min:void 0,u=null!==o.avg_hr&&null!==l.avg_hr?o.avg_hr-l.avg_hr:void 0,p=o.distance_km&&o.duration_min?o.duration_min/o.distance_km:void 0,m=l.distance_km&&l.duration_min?l.duration_min/l.distance_km:void 0,h=void 0!==p&&void 0!==m?p-m:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${_t(o.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.workout_comparison.title")}</div>
            <div class="subtitle">
              <span class="activity">${o.activity}</span> ·
              ${Se(a,"card.workout_comparison.vs",{time:l.start?ot(new Date(l.start),a.language):""})}
            </div>
          </div>
        </div>

        <div class="stats">
          ${null!==o.distance_km?this._stat(o.distance_km.toFixed(1),"km",void 0!==c?Se(a,"stat.distance_delta",{delta:rt(c,1)}):Se(a,"stat.distance")):G}
          ${null!==o.duration_min?(()=>{const e=Xe(o.duration_min);return this._stat(e.value,e.unit,void 0!==d?Se(a,"stat.duration_delta",{delta:rt(d,0)+" min"}):Se(a,"stat.duration"))})():G}
          ${null!==o.avg_hr?this._stat(String(Math.round(o.avg_hr)),"bpm",void 0!==u?Se(a,"stat.avg_hr_delta",{delta:rt(u,0)}):Se(a,"stat.avg_hr")):G}
          ${void 0!==p?this._stat(`${Math.floor(p)}:${String(Math.round(p%1*60)).padStart(2,"0")}`,"/km",void 0!==h?Se(a,"stat.pace_delta",{delta:ma(h)}):Se(a,"stat.avg_pace")):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ha.styles=[De,Re,n`
      .activity {
        text-transform: capitalize;
      }
      /* These 4 stats are fixed once a comparison pair exists (all derived
         from the same two records) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([ge()],ha.prototype,"_config",void 0),ha=e([ue("suunto-workout-comparison-card")],ha);const ga=new Set(["unknown","unavailable",""]);let va=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-milestones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||ga.has(s.state))return this._message("mdi:earth",Se(a,"empty.milestones.title"));const r=i("lifetime_energy"),n=Number(s.state),o=n/40075,l=n/42.195,c=n/384400*100,d=r&&!ga.has(r.state)?Number(r.state)/550:void 0;return I`
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
          ${this._stat(l.toFixed(0),Se(a,"stat.marathons"))}
          ${this._stat(`${c.toFixed(1)}%`,Se(a,"stat.moon_pct"))}
          ${void 0!==d?this._stat(d.toFixed(0),Se(a,"stat.burgers")):G}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};va.styles=[De,Re,n`
      /* 4 stats always arrive together (same lifetime snapshot) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([ge()],va.prototype,"_config",void 0),va=e([ue("suunto-milestones-card")],va);const ya=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];let _a=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-athlete-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.lifetime_by_activity,s=i?a.states[i]:void 0,r=s?.attributes.activities??[],n=t.workouts_recent,o=n?a.states[n]:void 0,l=o?.attributes.workouts??[];if(0===r.length||0===l.length)return this._message("mdi:account-star",Se(a,"empty.athlete_profile.title"));const c=[...r].sort((e,t)=>t.workouts-e.workouts)[0].activity,d=function(e){for(const[t,a]of ya)if(t.test(e))return a;return"personality.activity.other"}(c),u=function(e){const t=e.filter(e=>Boolean(e.start)),a=t.filter(e=>{const t=new Date(e.start).getDay();return 0===t||6===t}).length,i=a/t.length;return i>=.6?"personality.schedule.weekend":i<=.25?"personality.schedule.weekday":"personality.schedule.balanced"}(l),p=function(e){const t={morning:0,afternoon:0,evening:0,night:0};for(const a of e){if(!a.start)continue;const e=new Date(a.start).getHours();e>=5&&e<12?t.morning++:e>=12&&e<18?t.afternoon++:e>=18&&e<23?t.evening++:t.night++}const a=Object.entries(t).sort((e,t)=>t[1]-e[1])[0][0];return{morning:{key:"personality.time.morning",icon:"mdi:weather-sunset-up"},afternoon:{key:"personality.time.afternoon",icon:"mdi:weather-sunny"},evening:{key:"personality.time.evening",icon:"mdi:weather-sunset"},night:{key:"personality.time.night",icon:"mdi:weather-night"}}[a]}(l);return I`
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
          <span class="chip accent"><ha-icon .icon=${_t(c)}></ha-icon>${Se(a,d)}</span>
          <span class="chip accent"><ha-icon icon="mdi:calendar-weekend"></ha-icon>${Se(a,u)}</span>
          <span class="chip accent"><ha-icon .icon=${p.icon}></ha-icon>${Se(a,p.key)}</span>
        </div>
      </ha-card>
    `}};_a.styles=[De,Re,n`
      .traits {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],e([ge()],_a.prototype,"_config",void 0),_a=e([ue("suunto-athlete-profile-card")],_a);let fa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pace-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(e){const t=e[0]?.activity;if(!t)return;const a=e.filter(e=>e.activity===t&&e.start&&e.distance_km&&e.duration_min).map(e=>({t:new Date(e.start).getTime(),v:e.duration_min/e.distance_km})).sort((e,t)=>e.t-t.t);if(a.length<2)return;const i=Math.ceil(a.length/2),s=a.slice(0,i),r=a.slice(i).length?a.slice(i):a.slice(-1),n=e=>e.reduce((e,t)=>e+t.v,0)/e.length,o=n(s),l=(n(r)-o)/o,c=l<-.03?"faster":l>.03?"slower":"steady";return{activity:t,points:a,latestPace:a[a.length-1].v,direction:c}}(r):void 0;if(!n)return this._message("mdi:speedometer",Se(a,"empty.pace_trend.title"),Se(a,"empty.pace_trend.subtitle"));const o="faster"===n.direction?{colorVar:"var(--sc-good)",label:Se(a,"pace_trend.faster")}:"slower"===n.direction?{colorVar:"var(--sc-warn)",label:Se(a,"pace_trend.slower")}:{colorVar:"var(--sc-pulse)",label:Se(a,"pace_trend.steady")};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${_t(n.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.pace_trend.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.pace_trend.subtitle",{activity:n.activity,count:n.points.length})}
            </div>
          </div>
        </div>

        ${Ve(n.points,o.colorVar)}

        <div class="footer">
          <div class="stat">
            <div class="stat-value">${Qe(n.latestPace)}<span class="unit">/km</span></div>
            <div class="stat-label">${Se(a,"stat.avg_pace")}</div>
          </div>
          <span class="chip" style="color:${o.colorVar}">${o.label}</span>
        </div>
      </ha-card>
    `}};fa.styles=[De,Re,n`
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
    `],e([ge()],fa.prototype,"_config",void 0),fa=e([ue("suunto-pace-trend-card")],fa);let ba=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lap-splits-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.last_workout_laps,s=i?a.states[i]:void 0,r=s?.attributes.laps??[];if(!s||0===r.length)return this._message("mdi:flag-checkered",Se(a,"empty.lap_splits.title"),Se(a,"empty.lap_splits.subtitle"));const n=function(e){const t=e.map((e,t)=>({i:t,pace:e.pace_min_km})).filter(e=>null!==e.pace&&e.pace>0);return t.length>0?t.reduce((e,t)=>t.pace<e.pace?t:e).i:e.reduce((t,a,i)=>a.duration_minutes<e[t].duration_minutes?i:t,0)}(r),o=null!==r[n].pace_min_km&&r[n].pace_min_km>0?`${Qe(r[n].pace_min_km)}/km`:(()=>{const e=Xe(r[n].duration_minutes);return`${e.value} ${e.unit}`})(),l=r.map((e,t)=>{const i=Xe(e.duration_minutes),s=Se(a,"label.lap",{n:e.lap});return{value:e.duration_minutes,label:e.pace_min_km&&e.pace_min_km>0?`${s} · ${Qe(e.pace_min_km)}/km`:`${s} · ${i.value}${i.unit}`,colorVar:t===n?"var(--sc-good)":void 0}}),c=t.last_workout_start,d=c?a.states[c]:void 0,u=Se(a,"card.hr_zones.last_workout");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.lap_splits.title")}</div>
            <div class="subtitle">
              ${d?`${u} · ${ot(new Date(d.state),a.language)}`:u}
            </div>
          </div>
        </div>

        ${Oe(l,"var(--sc-pulse)",300,70)}

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
          ${r.map((e,t)=>{const a=Xe(e.duration_minutes);return I`
              <div class="lap-row">
                <div class="lap-number ${t===n?"fastest":""}">${e.lap}</div>
                <div class="lap-meta">
                  ${null!==e.distance_km?I`<span>${e.distance_km.toFixed(2)} km</span><span class="sep">·</span>`:G}
                  <span>${a.value} ${a.unit}</span>
                </div>
                <div class="lap-value">
                  ${null!==e.pace_min_km&&e.pace_min_km>0?I`${Qe(e.pace_min_km)}<span class="unit">/km</span>`:I`${a.value}<span class="unit">${a.unit}</span>`}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};ba.styles=[De,Re,n`
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
    `],e([ge()],ba.prototype,"_config",void 0),ba=e([ue("suunto-lap-splits-card")],ba);const wa=new Set(["unknown","unavailable",""]);let ka=class extends Me{constructor(){super(...arguments),this._pteHistory=[],this._epocHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-effect-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([Ge(this.hass,"suunto_app:pte",720,"mean"),Ge(this.hass,"suunto_app:epoc",720,"mean")]);this._pteHistory=e,this._epocHistory=t}catch{this._pteHistory=[],this._epocHistory=[]}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_pte");if(!s||wa.has(s.state))return this._message("mdi:lightning-bolt",Se(a,"empty.training_effect_trend.title"));const r=i("last_epoc"),n=[];return this._pteHistory.length&&n.push({points:this._pteHistory,colorVar:"var(--sc-pulse)"}),this._epocHistory.length&&n.push({points:this._epocHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lightning-bolt"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_effect_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${Le(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.training_effect")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.epoc")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),Se(a,"stat.training_effect"))}
          ${r&&!wa.has(r.state)?this._stat(Number(r.state).toFixed(0),Se(a,"stat.epoc"),"ml/kg"):G}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${a?I`<span class="unit">${a}</span>`:G}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};ka.styles=[De,Re,n`
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
    `],e([ge()],ka.prototype,"_config",void 0),e([ge()],ka.prototype,"_pteHistory",void 0),e([ge()],ka.prototype,"_epocHistory",void 0),ka=e([ue("suunto-training-effect-trend-card")],ka);const xa=new Set(["unknown","unavailable",""]);let $a=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-status-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("readiness"),r=i("training_suggestion"),n=i("unusual_recovery"),o=s&&!xa.has(s.state)?Number(s.state):void 0,l=r&&!xa.has(r.state)?r.state:void 0;if(void 0===o&&void 0===l)return this._message("mdi:compass-outline",Se(a,"empty.training_status.title"),Se(a,"empty.training_status.subtitle"));const c=void 0!==o?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,o):void 0,d=void 0!==l?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:Se(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:Se(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:Se(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:Se(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,l):void 0,u="on"===n?.state;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:compass-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_status.title")}</div>
            <div class="subtitle">${d?.label??c?.label??""}</div>
          </div>
        </div>

        ${u?I`<div class="alert"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${Se(a,"chip.unusual_recovery")}</div>`:G}

        ${d?I`
              <div class="suggestion-row">
                <div class="suggestion-badge" style="background:${d.colorVar}22; color:${d.colorVar}">
                  <ha-icon icon="${d.icon}"></ha-icon>
                </div>
                <div class="suggestion-text">
                  <div class="suggestion-label">${Se(a,"stat.training_suggestion")}</div>
                  <div class="suggestion-value" style="color:${d.colorVar}">${d.label}</div>
                </div>
              </div>
            `:G}

        ${void 0!==o&&c?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${Fe(o,c.colorVar,52,6)}
                  <div class="ring-value" style="color:${c.colorVar}">${Math.round(o)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${Se(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${c.colorVar}">${c.label}</div>
                </div>
              </div>
            `:G}
      </ha-card>
    `}};$a.styles=[De,Re,n`
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
    `],e([ge()],$a.prototype,"_config",void 0),$a=e([ue("suunto-training-status-card")],$a);const za=new Set(["unknown","unavailable",""]);function Sa(e){return Math.max(0,Math.min(100,e))}function Ca(e,t,a,i){const s=(i-90)*Math.PI/180;return[e+a*Math.cos(s),t+a*Math.sin(s)]}let Ta=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("lifetime_distance"),n=i("lifetime_days"),o=i("acwr"),l=i("workouts_7d"),c=i("readiness"),d=i("workouts_recent"),u=d?.attributes.workouts??[],p=[s,o,l,c].some(e=>e&&!za.has(e.state));if(!p&&0===u.length)return this._message("mdi:radar",Se(a,"empty.training_profile.title"),Se(a,"empty.training_profile.subtitle"));const m=e=>e&&!za.has(e.state)?Number(e.state):0,h=m(r),g=m(n),v=g>0?h/g*7:0,y=v>0?Sa(m(s)/(1.4*v)*100):0,_=Sa(m(o)/1.5*100),f=Sa(m(l)/7*100),b=Sa(m(c)),w=new Set(u.map(e=>e.activity).filter(Boolean)).size,k=Sa(w/5*100),x=[{label:Se(a,"stat.volume"),value:y},{label:Se(a,"stat.intensity"),value:_},{label:Se(a,"stat.consistency"),value:f},{label:Se(a,"stat.recovery"),value:b},{label:Se(a,"stat.variety"),value:k}],$=[...x].sort((e,t)=>t.value-e.value)[0],z=[...x].sort((e,t)=>e.value-t.value)[0],S=130,C=128,T=360/x.length,A=[.25,.5,.75,1].map(e=>{const t=x.map((t,a)=>Ca(S,C,84*e,T*a).join(",")).join(" ");return W`<polygon class="radar-grid" points=${t}></polygon>`}),E=x.map((e,t)=>{const[a,i]=Ca(S,C,84,T*t);return W`<line class="radar-axis" x1=${S} y1=${C} x2=${a} y2=${i}></line>`}),N=x.map((e,t)=>Ca(S,C,84*e.value/100,T*t)),j=W`<polygon class="radar-fill" points=${N.map(e=>e.join(",")).join(" ")}></polygon>`,M=N.map(([e,t])=>W`<circle class="radar-vertex" cx=${e} cy=${t} r="3.2"></circle>`),D=x.map((e,t)=>{const a=T*t,[i,s]=Ca(S,C,104.16,a);let r="middle";return a>10&&a<170&&(r="start"),a>190&&a<350&&(r="end"),W`
        <text class="radar-label" x=${i} y=${s-5} text-anchor=${r}>${e.label}</text>
        <text class="radar-value" x=${i} y=${s+7} text-anchor=${r}>${Math.round(e.value)}</text>
      `});return I`
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
            ${A}${E}${j}${M}${D}
          </svg>
        </div>

        <div class="radar-summary">
          ${Se(a,"profile.summary",{strong:$.label,light:z.label})}
        </div>
      </ha-card>
    `}};Ta.styles=[De,Re,n`
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
    `],e([ge()],Ta.prototype,"_config",void 0),Ta=e([ue("suunto-training-profile-card")],Ta);const Aa=new Set(["unknown","unavailable",""]),Ea=100,Na=[[0,0],[26,0],[32,-3],[38,0],[44,0],[47,5],[50,-22],[53,8],[56,-2],[60,0],[66,0],[70,-5],[74,0],[100,0]],ja=300;let Ma=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-heart-rate-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.current_hr?a.states[t.current_hr]:void 0;if(!i||Aa.has(i.state))return this._message("mdi:heart-pulse",Se(a,"empty.heart_rate.title"));const s=Math.round(Number(i.state)),r=60/s,n=[];for(let e=0;e<=ja;e+=10)n.push(W`<line class="hr-grid-line ${e%50==0?"major":""}" x1=${e} y1="0" x2=${e} y2=${64}></line>`);for(let e=0;e<=64;e+=10)n.push(W`<line class="hr-grid-line ${e%50==0?"major":""}" x1="0" y1=${e} x2=${ja} y2=${e}></line>`);return I`
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
          <svg class="hr-strip" viewBox="0 0 ${ja} ${64}" preserveAspectRatio="none">
            ${n}
            <path
              class="hr-trace hr-scroll"
              d=${function(){const e=[];for(let t=Math.floor(-1)*Ea;t<=400;t+=Ea)for(const[a,i]of Na)e.push(`${t+a},${32+i}`);return"M"+e.join(" L")}()}
              style="animation-duration:${r}s; --drift-distance:-${Ea}px"
            ></path>
            <text class="hr-corner-value" x="6" y="58">${s} bpm</text>
          </svg>
        </div>
      </ha-card>
    `}};Ma.styles=[De,Re,n`
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
    `],e([ge()],Ma.prototype,"_config",void 0),Ma=e([ue("suunto-heart-rate-card")],Ma);const Da=new Set(["unknown","unavailable",""]),Ra=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];function Pa(e){if(e)for(const[t,a]of Ra)if(t.test(e))return a;return"personality.activity.other"}function Fa(e){return Math.max(0,Math.min(99,Math.round(e)))}let Va=class extends Me{constructor(){super(...arguments),this._showHelp=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-player-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl"),r=i("readiness"),n=i("workouts_30d"),o=i("form_tsb"),l=i("estimated_vo2max")??i("vo2max"),c=i("workouts_recent"),d=i("lifetime_by_activity"),u=[s,r,n].some(e=>e&&!Da.has(e.state));if(!u)return this._message("mdi:cards",Se(a,"empty.player.title"),Se(a,"empty.player.subtitle"));const p=e=>e&&!Da.has(e.state)?Number(e.state):0,m=c?.attributes.workouts??[],h=m.map(e=>e.tss).filter(e=>"number"==typeof e),g=h.length?h.reduce((e,t)=>e+t,0)/h.length:0,v=[{code:"STA",value:Fa(p(s)/100*99),helpKey:"player.help.sta"},{code:"PWR",value:Fa(g/150*99),helpKey:"player.help.pwr"},{code:"REC",value:Fa(p(r)),helpKey:"player.help.rec"},{code:"CON",value:Fa(p(n)/20*99),helpKey:"player.help.con"},{code:"END",value:Fa((p(l)-20)/40*99),helpKey:"player.help.end"},{code:"FRM",value:Fa((p(o)+30)/50*99),helpKey:"player.help.frm"}],y=Fa(v.reduce((e,t)=>e+t.value,0)/v.length),_=function(e){return e>=85?{key:"player.tier.legendary",colorVar:"var(--player-legendary)"}:e>=70?{key:"player.tier.gold",colorVar:"var(--player-gold)"}:e>=50?{key:"player.tier.silver",colorVar:"var(--player-silver)"}:{key:"player.tier.bronze",colorVar:"var(--player-bronze)"}}(y),f=[...d?.attributes.activities??[]].sort((e,t)=>t.workouts-e.workouts)[0],b=f?.activity??m[0]?.activity;let w="";try{const e=ke(a,this._configuredDeviceId);w=a.devices?.[e]?.name_by_user||a.devices?.[e]?.name||""}catch{}return I`
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
              <span class="dot"><ha-icon .icon=${_t(b)}></ha-icon></span>
              ${b??""}
            </div>
          </div>
        </div>

        <div class="pc-avatar-wrap">
          <div class="pc-avatar"><ha-icon .icon=${_t(b)}></ha-icon></div>
        </div>
        ${w?I`<div class="pc-name">${w}</div>`:G}
        <div class="pc-archetype">${Se(a,"player.archetype",{activity:Se(a,Pa(b))})}</div>

        <div class="pc-stats">
          ${v.map(e=>I`
              <div class="pc-stat">
                <span class="k">${e.code}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${e.value}%"></div></div>
                <span class="v">${e.value}</span>
              </div>
            `)}
        </div>

        ${this._showHelp?I`
              <div
                class="pc-help-overlay"
                @click=${()=>{this._showHelp=!1}}
              >
                <div class="pc-help-title">${Se(a,"player.help.title")}</div>
                ${v.map(e=>{const[t,i]=Se(a,e.helpKey).split(" · ");return I`<div class="pc-help-row"><b>${t}</b> · ${i}</div>`})}
                <div class="pc-help-disclaimer">${Se(a,"player.help.disclaimer")}</div>
              </div>
            `:G}
      </ha-card>
    `}};Va.styles=[De,Re,n`
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
    `],e([ge()],Va.prototype,"_config",void 0),e([ge()],Va.prototype,"_showHelp",void 0),Va=e([ue("suunto-player-card")],Va);const Ha=new Set(["unknown","unavailable",""]);function La(e,t){const a=a=>t[a]?e.states[t[a]]:void 0,i=a("lifetime_workouts"),s=a("lifetime_distance");if(!i&&!s)return null;const r=a("lifetime_time"),n=a("lifetime_days"),o=a("lifetime_energy"),l=a("lifetime_by_activity"),c=a("estimated_vo2max")??a("vo2max"),d=a("training_records"),u=(p=e.language,e=>Math.round(e).toLocaleString(p));var p;const m=function(e){return t=>`${Math.round(t).toLocaleString(e)} km`}(e.language),h=e=>e&&!Ha.has(e.state)?Number(e.state):0,g=l?.attributes.activities??[],v=g.filter(e=>e.workouts>0).length,y=[...g].sort((e,t)=>t.workouts-e.workouts)[0],_=d&&!Ha.has(d.state)?Number(d.state):0,f=h(i),b=h(s),w=h(r),k=h(n),x=h(o),$=h(c),z=[{headingKey:"achievements.category.workouts",badges:[{icon:"💯",nameKey:"achievements.badge.century_club",unlocked:f>=100,current:f,target:100,format:u},{icon:"🎖️",nameKey:"achievements.badge.workouts_250",unlocked:f>=250,current:f,target:250,format:u},{icon:"🏅",nameKey:"achievements.badge.workouts_500",unlocked:f>=500,current:f,target:500,format:u},{icon:"👑",nameKey:"achievements.badge.workouts_1000",unlocked:f>=1e3,current:f,target:1e3,format:u}]},{headingKey:"achievements.category.distance",badges:[{icon:"🚴",nameKey:"achievements.badge.distance_1000",unlocked:b>=1e3,current:b,target:1e3,format:m},{icon:"🗺️",nameKey:"achievements.badge.distance_5000",unlocked:b>=5e3,current:b,target:5e3,format:m},{icon:"🌍",nameKey:"achievements.badge.around_globe",unlocked:b>=40075,current:b,target:40075,format:m}]},{headingKey:"achievements.category.time",badges:[{icon:"⏱️",nameKey:"achievements.badge.hours_100",unlocked:w>=100,current:w,target:100,format:u},{icon:"⌛",nameKey:"achievements.badge.hours_500",unlocked:w>=500,current:w,target:500,format:u}]},{headingKey:"achievements.category.days",badges:[{icon:"📅",nameKey:"achievements.badge.days_100",unlocked:k>=100,current:k,target:100,format:u},{icon:"🗓️",nameKey:"achievements.badge.full_year",unlocked:k>=365,current:k,target:365,format:u}]},{headingKey:"achievements.category.energy",badges:[{icon:"🔥",nameKey:"achievements.badge.energy_100k",unlocked:x>=1e5,current:x,target:1e5,format:u},{icon:"☄️",nameKey:"achievements.badge.energy_1m",unlocked:x>=1e6,current:x,target:1e6,format:u}]},{headingKey:"achievements.category.variety",badges:[{icon:"🎽",nameKey:"achievements.badge.multi_sport",unlocked:v>=3,current:v,target:3,format:u},{icon:"🧭",nameKey:"achievements.badge.jack_of_all_trades",unlocked:v>=5,current:v,target:5,format:u},...y?[{icon:"⭐",nameKey:"achievements.badge.specialist",nameVars:{activity:y.activity},unlocked:y.workouts>=100,current:y.workouts,target:100,format:u}]:[]]},{headingKey:"achievements.category.fitness",badges:[{icon:"💪",nameKey:"achievements.badge.solid_engine",unlocked:$>=40,current:$,target:40,format:u},{icon:"⚡",nameKey:"achievements.badge.elite_engine",unlocked:$>=55,current:$,target:55,format:u},{icon:"🔥",nameKey:"achievements.badge.consistency_king",unlocked:_>=14,current:_,target:14,format:u},{icon:"🛡️",nameKey:"achievements.badge.iron_will",unlocked:_>=30,current:_,target:30,format:u}]}],S=z.flatMap(e=>e.badges);return{groups:z,allBadges:S,unlockedCount:S.filter(e=>e.unlocked).length}}function qa(e,t,a="training_records"){const i=t[a]?e.states[t[a]]:void 0,s=i&&!Ha.has(i.state)?Number(i.state):0,r=i?.attributes??{};return[{icon:"🔥",labelKey:"records.streak",entry:s>0?{value:s}:void 0,render:t=>Ce(e,t.value,"records.streak_days_one","records.streak_days_other")},{icon:"⚡",labelKey:"records.pace",entry:r.fastest_pace_min_km,render:e=>`${Qe(e.value)} /km`},{icon:"🏔️",labelKey:"records.climb",entry:r.biggest_climb_m,render:e=>`${Math.round(e.value)} m`},{icon:"⏳",labelKey:"records.workout",entry:r.longest_workout_min,render:e=>{const t=Xe(e.value);return`${t.value} ${t.unit}`}},{icon:"📏",labelKey:"records.distance",entry:r.farthest_workout_km,render:e=>`${e.value} km`},{icon:"🥵",labelKey:"records.session",entry:r.hardest_workout_tss,render:e=>`${e.value} TSS`}]}let Oa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-achievements-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 6}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=La(a,t);if(!i)return this._message("mdi:trophy-outline",Se(a,"empty.achievements.title"),Se(a,"empty.achievements.subtitle"));const{groups:s,allBadges:r,unlockedCount:n}=i,o=qa(a,t);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.achievements.title")}</div>
            <div class="subtitle">${Se(a,"card.achievements.subtitle",{unlocked:n,total:r.length})}</div>
          </div>
        </div>

        <div class="ach-list">
          ${s.map(e=>e.badges.length?I`
                  ${function(e,t){return I`<div class="cat">${Se(e,t)}</div>`}(a,e.headingKey)}
                  ${e.badges.map(e=>this._badgeRow(a,e))}
                `:G)}
          ${o.some(e=>e.entry)?I`
                <div class="cat">${Se(a,"achievements.category.records")}</div>
                ${o.filter(e=>e.entry).map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
              `:G}
        </div>
      </ha-card>
    `}_badgeRow(e,t){const a=Math.max(0,Math.min(100,t.current/t.target*100));return I`
      <div class="arow ${t.unlocked?"unlocked":"locked"}">
        <div class="ic">${t.icon}</div>
        <div class="info">
          <div class="name">${Se(e,t.nameKey,t.nameVars)}</div>
          ${t.unlocked?G:I`
                <div class="prog-track"><div class="prog-fill" style="width:${a}%"></div></div>
                <div class="prog-text">${t.format(t.current)} / ${t.format(t.target)}</div>
              `}
        </div>
        ${t.unlocked?I`<div class="check">✓</div>`:G}
      </div>
    `}_recordRow(e,t,a,i,s){const r=i.start_time?ot(new Date(i.start_time),e.language):void 0;return I`
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
    `}};Oa.styles=[De,Re,n`
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
    `],e([ge()],Oa.prototype,"_config",void 0),Oa=e([ue("suunto-achievements-card")],Oa);const Ba={"achievements.badge.century_club":"100","achievements.badge.workouts_250":"250","achievements.badge.workouts_500":"500","achievements.badge.workouts_1000":"1000","achievements.badge.distance_1000":"1000 km","achievements.badge.distance_5000":"5000 km","achievements.badge.around_globe":"Globe","achievements.badge.hours_100":"100 h","achievements.badge.hours_500":"500 h","achievements.badge.days_100":"100 d","achievements.badge.full_year":"365 d","achievements.badge.energy_100k":"100k","achievements.badge.energy_1m":"1M","achievements.badge.multi_sport":"3+","achievements.badge.jack_of_all_trades":"5+","achievements.badge.specialist":"100+","achievements.badge.solid_engine":"VO2 40+","achievements.badge.elite_engine":"VO2 55+","achievements.badge.consistency_king":"14d","achievements.badge.iron_will":"30d"};let Ia=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-achievements-compact-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=La(a,t);if(!i)return this._message("mdi:trophy-outline",Se(a,"empty.achievements.title"),Se(a,"empty.achievements.subtitle"));const{allBadges:s,unlockedCount:r}=i,n=s.length?Math.round(r/s.length*100):0,o=[...s].filter(e=>!e.unlocked).sort((e,t)=>t.current/t.target-e.current/e.target)[0],l=2*Math.PI*16,c=l*(1-n/100);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.achievements.title")}</div>
            <div class="subtitle">${Se(a,"card.achievements.subtitle",{unlocked:r,total:s.length})}</div>
          </div>
          <div class="ring-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r=${16} class="ring-track"></circle>
              <circle cx="20" cy="20" r=${16} class="ring-fill" stroke-dasharray=${l} stroke-dashoffset=${c}></circle>
            </svg>
            <div class="ring-pct">${n}%</div>
          </div>
        </div>

        <div class="badge-grid">${s.map(e=>this._badge(a,e))}</div>

        ${o?I`
              <div class="footer">
                <span class="chip">
                  <span class="bi">${o.icon}</span>
                  ${Se(a,"achievements.next",{name:Se(a,o.nameKey,o.nameVars),pct:Math.round(o.current/o.target*100)})}
                </span>
              </div>
            `:G}
      </ha-card>
    `}_badge(e,t){return I`
      <div class="badge ${t.unlocked?"unlocked":"locked"}" title=${Se(e,t.nameKey,t.nameVars)}>
        ${t.unlocked?G:I`<span class="lock-pin">🔒</span>`}
        <span class="bi">${t.icon}</span>
        <span class="bl">${Ba[t.nameKey]??Se(e,t.nameKey,t.nameVars)}</span>
      </div>
    `}};Ia.styles=[De,Re,n`
      .header {
        align-items: center;
      }
      .ring-wrap {
        position: relative;
        width: 40px;
        height: 40px;
        flex: none;
        margin-left: auto;
      }
      .ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-track {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 5;
      }
      .ring-fill {
        fill: none;
        stroke: var(--sc-amber);
        stroke-width: 5;
        stroke-linecap: round;
      }
      .ring-pct {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.66rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .badge-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .badge {
        aspect-ratio: 1;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        position: relative;
        text-align: center;
        padding: 4px 3px;
      }
      .badge.unlocked {
        background: var(--sc-amber-bg);
        border: 1px solid color-mix(in srgb, var(--sc-amber) 40%, transparent);
      }
      .badge.locked {
        background: var(--sc-chip-bg);
        border: 1px solid var(--divider-color);
      }
      .badge .bi {
        font-size: 1.15rem;
      }
      .badge.locked .bi {
        opacity: 0.3;
        filter: grayscale(1);
      }
      .badge .bl {
        font-size: 0.56rem;
        font-weight: 600;
        line-height: 1.1;
      }
      .badge.locked .bl {
        color: var(--secondary-text-color);
      }
      .badge .lock-pin {
        position: absolute;
        top: 3px;
        right: 3px;
        font-size: 0.55rem;
        opacity: 0.6;
      }
      .footer {
        display: flex;
      }
      .footer .bi {
        font-size: 0.9rem;
      }
    `],e([ge()],Ia.prototype,"_config",void 0),Ia=e([ue("suunto-achievements-compact-card")],Ia);const Wa=new Set(["unknown","unavailable",""]);function Ka(e){return 500*e*e}let Ga=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-level-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_energy"),r=i("lifetime_workouts");if(!s||Wa.has(s.state))return this._message("mdi:trophy-award",Se(a,"empty.level.title"),Se(a,"empty.level.subtitle"));const n=r&&!Wa.has(r.state)?Number(r.state):0,o=Math.round(Number(s.state)/10),l=function(e){return Math.floor(Math.sqrt(e/500))}(o),c=Ka(l),d=Ka(l+1),u=Math.max(0,Math.min(1,(o-c)/(d-c))),p=d-o,m=2*Math.PI*56;return I`
      <ha-card class="static level-card">
        <div class="lvl-ring-wrap">
          <svg width="128" height="128" viewBox="0 0 128 128">
            ${W`<circle cx="64" cy="64" r=${56} class="ring-track"></circle>`}
            ${W`<circle cx="64" cy="64" r=${56} class="ring-fill" stroke-dasharray=${m} stroke-dashoffset=${m*(1-u)}></circle>`}
          </svg>
          <div class="lvl-center">
            <div class="n">${l}</div>
            <div class="l">${Se(a,"level.label")}</div>
          </div>
        </div>
        <div class="lvl-title">${Se(a,function(e){return e>=500?"level.title.legend":e>=200?"level.title.veteran":e>=50?"level.title.grinder":"level.title.novice"}(n))}</div>
        <div class="lvl-sub">${Se(a,"level.subtitle")}</div>
        <div class="xp-bar-wrap">
          <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${100*u}%"></div></div>
          <div class="xp-labels">
            <span>${Se(a,"level.xp_total",{xp:o.toLocaleString(a.language)})}</span>
            <span>${Se(a,"level.xp_to_next",{xp:p.toLocaleString(a.language),level:l+1})}</span>
          </div>
        </div>
        <div class="lvl-source">${Se(a,"level.source",{count:n.toLocaleString(a.language)})}</div>
      </ha-card>
    `}};Ga.styles=[De,Re,n`
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
    `],e([ge()],Ga.prototype,"_config",void 0),Ga=e([ue("suunto-level-card")],Ga);const Ua=[[/cycl|bik/i,"cycling"],[/run/i,"running"],[/trek|hik/i,"trekking"],[/walk/i,"walking"],[/gym|strength|weight/i,"gym"],[/swim/i,"swim"],[/ski/i,"ski"],[/row/i,"row"]];const Za={cycling:"var(--sc-pulse)",running:"var(--sc-bad)",trekking:"var(--sc-good)",walking:"var(--sc-zone-1)",gym:"var(--sc-zone-4)",swim:"var(--sc-sleep-light)",ski:"var(--sc-sleep-deep)",row:"var(--sc-sleep-rem)",other:"var(--sc-amber)"},Ja=["var(--sc-pulse)","var(--sc-amber)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let Ya=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-class-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="lifetime_by_activity"]?a.states[t[s]]:void 0;var s;const r=i?.attributes.activities??[],n=r.reduce((e,t)=>e+t.workouts,0);if(!i||0===n)return this._message("mdi:sword-cross",Se(a,"empty.class.title"),Se(a,"empty.class.subtitle"));const o=[...r].sort((e,t)=>t.workouts-e.workouts).filter(e=>e.workouts>0),l=o[0],c=function(e){if(e)for(const[t,a]of Ua)if(t.test(e))return a;return"other"}(l?.activity),d=Za[c],u=o.slice(0,5),p=o.slice(5).reduce((e,t)=>e+t.workouts,0);return I`
      <ha-card class="static" style="--class-accent:${d}">
        <div class="class-emblem"><ha-icon .icon=${_t(l?.activity)}></ha-icon></div>
        <div class="class-name">${Se(a,`class.name.${c}`)}</div>
        <div class="class-tag">${Se(a,"class.tag",{activity:l?.activity??""})}</div>
        <div class="class-flavor">${Se(a,`class.flavor.${c}`)}</div>
        <div class="class-build">
          ${u.map((e,t)=>{const a=Math.round(e.workouts/n*100);return I`
              <div class="cb-row">
                <span class="cn">${e.activity}</span>
                <div class="ct"><div class="cf" style="width:${a}%;background:${0===t?d:Ja[t%Ja.length]}"></div></div>
                <span class="cp">${a}%</span>
              </div>
            `})}
          ${p>0?I`<div class="cb-rest">${Se(a,"class.rest",{pct:Math.round(p/n*100)})}</div>`:G}
        </div>
      </ha-card>
    `}};Ya.styles=[De,Re,n`
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
    `],e([ge()],Ya.prototype,"_config",void 0),Ya=e([ue("suunto-class-card")],Ya);const Xa=new Set(["unknown","unavailable",""]);let Qa=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-next-milestone-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||Xa.has(s.state))return this._message("mdi:flag-checkered",Se(a,"empty.next_milestone.title"));const r=Number(s.state),n=function(e){const t=e<1e4?1e3:5e3;return(Math.floor(e/t)+1)*t}(r),o=n-r,l=r/n*100,c=i("lifetime_workouts"),d=c&&!Xa.has(c.state)?Number(c.state):void 0,u=void 0!==d?function(e){const t=e<500?50:100;return(Math.floor(e/t)+1)*t}(d):void 0,p=void 0!==d&&void 0!==u?u-d:void 0,m=i("weekly_distance"),h=m&&!Xa.has(m.state)?Number(m.state):void 0,g=h&&h>0?Math.max(1,Math.ceil(o/h)):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.next_milestone.title")}</div>
            <div class="subtitle">${Se(a,"card.next_milestone.subtitle")}</div>
          </div>
        </div>

        <div class="milestone-row">
          <div class="ring-wrap">
            ${Fe(l,"var(--sc-amber)",96,9)}
            <div class="ring-center">
              <div class="big">${Math.round(o).toLocaleString(a.language)}<span class="unit">km</span></div>
              <div class="small">${Se(a,"next_milestone.remaining_label")}</div>
            </div>
          </div>
          <div class="milestone-side">
            <div class="milestone-target">
              ${Se(a,"next_milestone.target",{target:n.toLocaleString(a.language),pct:l.toFixed(0)})}
            </div>
            ${void 0!==p&&void 0!==u?I`
                  <div class="sub-milestone">
                    <ha-icon icon="mdi:trophy-outline"></ha-icon>
                    <div class="txt">
                      ${Ce(a,p,"next_milestone.workouts_one","next_milestone.workouts_other",{target:u})}
                    </div>
                  </div>
                `:G}
            ${void 0!==g&&void 0!==h?I`
                  <div class="chip accent">
                    <ha-icon icon="mdi:trending-up"></ha-icon>
                    ${Ce(a,g,"next_milestone.eta_one","next_milestone.eta_other",{pace:h.toFixed(0),weeks:g})}
                  </div>
                `:G}
          </div>
        </div>
      </ha-card>
    `}};Qa.styles=[De,Re,n`
      .milestone-row {
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .ring-wrap {
        position: relative;
        flex: none;
        width: 96px;
        height: 96px;
      }
      .ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1px;
      }
      .ring-center .big {
        font-size: 1.1rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.05;
        display: flex;
        align-items: baseline;
        gap: 2px;
      }
      .ring-center .big .unit {
        font-size: 0.62rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .ring-center .small {
        font-size: 0.64rem;
        color: var(--secondary-text-color);
      }
      .milestone-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
      }
      .milestone-target {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
      }
      .sub-milestone {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .sub-milestone ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 16px;
      }
      .sub-milestone .txt {
        font-size: 0.78rem;
        line-height: 1.3;
      }
    `],e([ge()],Qa.prototype,"_config",void 0),Qa=e([ue("suunto-next-milestone-card")],Qa);const ei=new Set(["unknown","unavailable",""]);let ti=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||ei.has(s.state))return this._message("mdi:book-open-page-variant",Se(a,"empty.story.title"));const r=i("lifetime_time"),n=i("lifetime_workouts"),o=i("lifetime_days"),l=i("lifetime_by_activity"),c=[...l?.attributes.activities??[]].sort((e,t)=>t.workouts-e.workouts)[0],d=n&&!ei.has(n.state)?Number(n.state):void 0,u=c&&d?Math.round(c.workouts/d*100):void 0,p=i("training_records"),m=p&&!ei.has(p.state)?Number(p.state):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:book-open-page-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.story.title")}</div>
            <div class="subtitle">${Se(a,"card.story.subtitle")}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${Se(a,"stat.distance")}</div>
          </div>
          ${r&&!ei.has(r.state)?I`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(r.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${Se(a,"stat.time")}</div>
                </div>
              `:G}
          ${void 0!==d?I`
                <div class="story-tile">
                  <div class="num">${d.toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.workouts")}</div>
                </div>
              `:G}
          ${o&&!ei.has(o.state)?I`
                <div class="story-tile">
                  <div class="num">${Number(o.state).toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.active_days")}</div>
                </div>
              `:G}
        </div>

        ${c?I`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${Se(a,"story.top_activity",{activity:c.activity})}</div>
                  <div class="t2">
                    ${void 0!==u?Se(a,"story.top_activity_share",{count:c.workouts,pct:u}):G}
                  </div>
                </div>
              </div>
            `:G}
        ${void 0!==m?I`
              <div class="story-block">
                <ha-icon icon="mdi:trophy-variant"></ha-icon>
                <div>
                  <div class="t1">
                    ${Se(a,"records.streak")}:
                    ${Ce(a,m,"records.streak_days_one","records.streak_days_other",{count:m})}
                  </div>
                  <div class="t2">${Se(a,"story.record_subtitle")}</div>
                </div>
              </div>
            `:G}
      </ha-card>
    `}};ti.styles=[De,Re,n`
      .story-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .story-tile {
        background: var(--divider-color);
        border-radius: 10px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .story-tile .num {
        font-size: 1.4rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .story-tile .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .story-tile .lab {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .story-block {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .story-block ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 18px;
      }
      .story-block .t1 {
        font-size: 0.82rem;
        font-weight: 600;
      }
      .story-block .t2 {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],ti.prototype,"_config",void 0),ti=e([ue("suunto-story-card")],ti);const ai=new Set(["unknown","unavailable",""]),ii=208,si=104,ri=78;function ni(e,t){const a=e*Math.PI/180;return[si+t*Math.sin(a),si-t*Math.cos(a)]}let oi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-clock-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("wake_time"),r=i("sleep_duration");if(!s||ai.has(s.state)||!r||ai.has(r.state))return this._message("mdi:sleep",Se(a,"empty.sleep_clock.title"),Se(a,"empty.sleep_clock.subtitle"));const n=new Date(s.state),o=Number(r.state);if(Number.isNaN(n.getTime())||!Number.isFinite(o)||o<=0)return this._message("mdi:sleep",Se(a,"empty.sleep_clock.title"),Se(a,"empty.sleep_clock.subtitle"));const l=new Date(n.getTime()-36e5*o),c=i("sleep_deep"),d=i("sleep_light"),u=i("sleep_rem"),p=c&&!ai.has(c.state)?Number(c.state):0,m=d&&!ai.has(d.state)?Number(d.state):0,h=u&&!ai.has(u.state)?Number(u.state):0,g=p+m+h>0?[{colorVar:"var(--sc-sleep-deep)",minutes:p},{colorVar:"var(--sc-sleep-light)",minutes:m},{colorVar:"var(--sc-sleep-rem)",minutes:h}].filter(e=>e.minutes>0):[{colorVar:"var(--sc-sleep-light)",minutes:60*o}],v=(60*l.getHours()+l.getMinutes())/1440*360,y=60*o/1440*360,_=g.reduce((e,t)=>e+t.minutes,0);let f=v;const b=g.map(e=>{const t=e.minutes/_*y,a=function(e,t){const[a,i]=ni(e,ri),[s,r]=ni(t,ri),n=t-e>180?1:0;return`M ${a.toFixed(2)} ${i.toFixed(2)} A 78 78 0 ${n} 1 ${s.toFixed(2)} ${r.toFixed(2)}`}(f,f+t);return f+=t,{d:a,colorVar:e.colorVar}}),w=i("sleep_quality"),k=w&&!ai.has(w.state)?Math.round(Number(w.state)):void 0,x=Xe(60*o),$=ni(v,96),z=ni(v+y,96);return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_clock.title")}</div>
            <div class="subtitle">${Se(a,"card.sleep_clock.subtitle")}</div>
          </div>
        </div>

        <div class="clock-wrap">
          <svg viewBox="0 0 ${ii} ${ii}">
            <circle cx=${si} cy=${si} r=${ri} fill="none" stroke="var(--divider-color)" stroke-width=${15} />
            ${b.map(e=>W`<path d=${e.d} fill="none" stroke=${e.colorVar} stroke-width=${15} />`)}
            ${[0,90,180,270].map(e=>{const[t,a]=ni(e,80),[i,s]=ni(e,86);return W`<line x1=${t.toFixed(1)} y1=${a.toFixed(1)} x2=${i.toFixed(1)} y2=${s.toFixed(1)} stroke="var(--secondary-text-color)" stroke-width="1.5" />`})}
            ${[{angle:0,label:"0"},{angle:90,label:"6"},{angle:180,label:"12"},{angle:270,label:"18"}].map(({angle:e,label:t})=>{const[a,i]=ni(e,100);return W`<text x=${a.toFixed(1)} y=${i.toFixed(1)} text-anchor="middle" dominant-baseline="middle" font-size="10" fill="var(--secondary-text-color)">${t}</text>`})}
          </svg>
          <div class="clock-center">
            <div class="big">${x.value}<span class="unit">${x.unit}</span></div>
            ${void 0!==k?I`<div class="small">${Se(a,"sleep_clock.quality",{pct:k})}</div>`:G}
          </div>
          <div class="clock-tag" style="left:${$[0].toFixed(0)}px;top:${$[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${st(l,a.language)}
          </div>
          <div class="clock-tag" style="left:${z[0].toFixed(0)}px;top:${z[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${st(n,a.language)}
          </div>
        </div>

        <div class="legend">
          ${p>0?I`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-deep)"></i>${Se(a,"label.deep")} &middot; ${Xe(p).value}${Xe(p).unit}</span>`:G}
          ${m>0?I`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-light)"></i>${Se(a,"label.light")} &middot; ${Xe(m).value}${Xe(m).unit}</span>`:G}
          ${h>0?I`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-rem)"></i>${Se(a,"label.rem")} &middot; ${Xe(h).value}${Xe(h).unit}</span>`:G}
        </div>
      </ha-card>
    `}};oi.styles=[De,Re,n`
      .clock-wrap {
        position: relative;
        width: ${ii}px;
        height: ${ii}px;
        margin: 0 auto;
      }
      .clock-wrap svg {
        width: ${ii}px;
        height: ${ii}px;
        display: block;
      }
      .clock-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 2px;
        pointer-events: none;
      }
      .clock-center .big {
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.05;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .clock-center .unit {
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .clock-center .small {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .clock-tag {
        position: absolute;
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--card-background-color);
        padding: 1px 5px;
        border-radius: 5px;
      }
      .legend {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.74rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],oi.prototype,"_config",void 0),oi=e([ue("suunto-sleep-clock-card")],oi);const li=new Set(["unknown","unavailable",""]),ci=960;function di(e){return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`}function ui(e){const t=new Map;for(const a of e){if(li.has(a.state))continue;const e=di(new Date(a.lastChanged)),i=t.get(e);(!i||a.lastChanged>i.lastChanged)&&t.set(e,a)}return t}function pi(e){const t=60*(e.getHours()-20)+e.getMinutes();return t<0?t+1440:t}let mi=class extends Me{constructor(){super(...arguments),this._nights=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-rhythm-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.wake_time,i=t.sleep_duration;if(!a||!i)return;const s=`${a},${i}`,r=Date.now();if(!(s===this._historyKey&&r-this._historyFetchedAt<18e5)){this._historyKey=s,this._historyFetchedAt=r;try{const e=this.hass,t=await Ye(e,[a,i],9);this._nights=this._buildNights(t[a]??[],t[i]??[])}catch{this._nights=[]}}}_buildNights(e,t){const a=ui(e),i=ui(t),s=[];for(const[e,t]of a){const a=i.get(e);if(!a)continue;const r=new Date(t.state),n=Number(a.state);Number.isNaN(r.getTime())||!Number.isFinite(n)||n<=0||s.push({wake:r,bedtime:new Date(r.getTime()-36e5*n)})}return s.sort((e,t)=>e.bedtime.getTime()-t.bedtime.getTime()),s.slice(-7)}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const t=this.hass;if(this._nights.length<2)return this._message("mdi:chart-timeline-variant",Se(t,"empty.sleep_rhythm.title"),Se(t,"empty.sleep_rhythm.subtitle"));const a=this._nights.map(e=>pi(e.bedtime)),i=a.reduce((e,t)=>e+t,0)/a.length,s=a.reduce((e,t)=>e+(t-i)**2,0)/a.length,r=Math.round(Math.sqrt(s)),n=this._nights.reduce((e,t)=>e+(60*t.wake.getHours()+t.wake.getMinutes()),0)/this._nights.length,o=(1200+i)%1440,l=e=>{const t=new Date;return t.setHours(0,0,0,0),t.setMinutes(Math.round(e)),t};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(t,"card.sleep_rhythm.title")}</div>
            <div class="subtitle">${Se(t,"card.sleep_rhythm.subtitle")}</div>
          </div>
        </div>

        <div class="rhythm-chart">
          ${this._nights.map(e=>{const a=pi(e.bedtime),s=pi(e.wake)-a,r=a/ci*100,n=(s<0?s+1440:s)/ci*100,o=Math.abs(a-i)>30;return I`
              <div class="rhythm-row">
                <div class="rhythm-day">${(e=>new Intl.DateTimeFormat(t.language,{weekday:"short"}).format(e))(e.bedtime)}</div>
                <div class="rhythm-track">
                  <div class="rhythm-avgline" style="left:${i/ci*100}%"></div>
                  <div class="rhythm-bar ${o?"late":""}" style="left:${r}%;width:${n}%"></div>
                </div>
              </div>
            `})}
          <div class="rhythm-axis">
            ${Array.from({length:9},(e,t)=>2*t).map(e=>I`<span style="left:${60*e/ci*100}%">${(20+e)%24}</span>`)}
          </div>
        </div>

        <div class="rhythm-stats">
          <span class="chip">${Se(t,"sleep_rhythm.avg_bedtime",{time:st(l(o),t.language)})}</span>
          <span class="chip">${Se(t,"sleep_rhythm.avg_wake",{time:st(l(n),t.language)})}</span>
          <span class="chip accent">${Se(t,"sleep_rhythm.spread",{minutes:r})}</span>
        </div>

        <div class="legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(t,"sleep_rhythm.legend_normal")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(t,"sleep_rhythm.legend_outlier",{minutes:30})}</span>
        </div>
      </ha-card>
    `}};mi.styles=[De,Re,n`
      .rhythm-chart {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .rhythm-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .rhythm-day {
        width: 30px;
        flex: none;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
      .rhythm-track {
        position: relative;
        flex: 1;
        height: 14px;
        background: var(--divider-color);
        border-radius: 4px;
      }
      .rhythm-bar {
        position: absolute;
        top: 0;
        bottom: 0;
        border-radius: 4px;
        background: var(--sc-pulse);
      }
      .rhythm-bar.late {
        background: var(--sc-amber);
      }
      .rhythm-avgline {
        position: absolute;
        top: -3px;
        bottom: -3px;
        width: 0;
        border-left: 1.5px dashed var(--secondary-text-color);
        opacity: 0.55;
      }
      .rhythm-axis {
        display: flex;
        position: relative;
        height: 14px;
        margin-left: 38px;
      }
      .rhythm-axis span {
        position: absolute;
        transform: translateX(-50%);
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
      .rhythm-stats {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.74rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],mi.prototype,"_config",void 0),e([ge()],mi.prototype,"_nights",void 0),mi=e([ue("suunto-sleep-rhythm-card")],mi);const hi=new Set(["unknown","unavailable",""]);let gi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-route-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),r=s?.attributes.route,n=(r??[]).map(([e,t,a])=>({lat:e,lon:t,speedKmh:a}));if(!s||hi.has(s.state)||n.length<2)return this._message("mdi:map-marker-path",Se(a,"empty.route.title"),Se(a,"empty.route.subtitle"));const o=i("last_activity"),l=i("last_workout_start"),c=i("last_distance"),d=i("last_duration"),u=i("last_avg_pace"),p=c&&!hi.has(c.state)?c:void 0,m=d&&!hi.has(d.state)?d:void 0,h=u&&!hi.has(u.state)?u:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker-path"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.route.title")}</div>
            <div class="subtitle">
              ${o?I`${o.state}`:G}
              ${o&&l?I`<span class="sep">·</span>`:G}
              ${l?ot(new Date(l.state),a.language):G}
            </div>
          </div>
        </div>

        <div class="route-frame">${qe(n)}</div>

        <div class="pace-legend">
          <span class="end-label">${Se(a,"route.pace_slower")}</span>
          <span class="bar"></span>
          <span class="end-label">${Se(a,"route.pace_faster")}</span>
        </div>

        <div class="stats">
          ${p?I`<div class="stat">
                <div class="stat-label">${Se(a,"stat.distance")}</div>
                <div class="stat-value">${(Number(p.state)/1e3).toFixed(1)}<span class="unit">km</span></div>
              </div>`:G}
          ${m?(()=>{const e=Xe(Number(m.state));return I`<div class="stat">
                  <div class="stat-label">${Se(a,"stat.duration")}</div>
                  <div class="stat-value">${e.value}<span class="unit">${e.unit}</span></div>
                </div>`})():G}
          ${h?I`<div class="stat">
                <div class="stat-label">${Se(a,"stat.avg_pace")}</div>
                <div class="stat-value">${Qe(Number(h.state))}<span class="unit">/km</span></div>
              </div>`:G}
        </div>
      </ha-card>
    `}};gi.styles=[De,Re,n`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }

      .route-frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 10px;
        background: var(--sc-amber-bg);
        overflow: hidden;
      }
      :host(.dark) .route-frame {
        background: rgba(245, 180, 78, 0.08);
      }
      .route-frame .route-schematic {
        width: 100%;
        height: 100%;
        display: block;
      }

      .pace-legend {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .pace-legend .bar {
        flex: 1;
        height: 5px;
        border-radius: 999px;
        background: linear-gradient(
          90deg,
          var(--sc-sev-1) 0%,
          var(--sc-sev-2) 25%,
          var(--sc-sev-3) 50%,
          var(--sc-sev-4) 75%,
          var(--sc-sev-5) 100%
        );
      }
      .pace-legend .end-label {
        font-size: 0.62rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        flex: none;
      }
    `],e([ge()],gi.prototype,"_config",void 0),gi=e([ue("suunto-route-card")],gi);const vi=new Set(["unknown","unavailable",""]);let yi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-month-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("month_distance");if(!s||vi.has(s.state))return this._message("mdi:calendar-month",Se(a,"empty.month_story.title"));const r=i("month_time"),n=i("month_energy"),o=i("month_workouts"),l=i("month_active_days"),c=o?.attributes.main_activity,d=o?.attributes.main_activity_workouts,u=o?.attributes.main_activity_pct,p=o&&!vi.has(o.state)?Number(o.state):void 0,m=i("training_records_month"),h=m&&!vi.has(m.state)?Number(m.state):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-month"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.month_story.title")}</div>
            <div class="subtitle">${(new Date).toLocaleDateString(a.language,{month:"long",year:"numeric"})}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${Se(a,"stat.distance")}</div>
          </div>
          ${r&&!vi.has(r.state)?I`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(r.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${Se(a,"stat.time")}</div>
                </div>
              `:G}
          ${n&&!vi.has(n.state)?I`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(n.state)).toLocaleString(a.language)}<span class="unit">kcal</span></div>
                  <div class="lab">${Se(a,"stat.energy")}</div>
                </div>
              `:G}
          ${void 0!==p?I`
                <div class="story-tile">
                  <div class="num">${p.toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.workouts")}</div>
                </div>
              `:G}
          ${l&&!vi.has(l.state)?I`
                <div class="story-tile">
                  <div class="num">${Number(l.state).toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.active_days")}</div>
                </div>
              `:G}
        </div>

        ${c?I`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${Se(a,"story.top_activity",{activity:c})}</div>
                  <div class="t2">
                    ${void 0!==d&&void 0!==u?Se(a,"story.share_month",{count:d,pct:u}):G}
                  </div>
                </div>
              </div>
            `:G}
        ${void 0!==h?I`
              <div class="story-block">
                <ha-icon icon="mdi:trophy"></ha-icon>
                <div>
                  <div class="t1">
                    ${Se(a,"records.streak")}:
                    ${Ce(a,h,"records.streak_days_one","records.streak_days_other",{count:h})}
                  </div>
                  <div class="t2">${Se(a,"story.record_subtitle_month")}</div>
                </div>
              </div>
            `:G}
      </ha-card>
    `}};yi.styles=[De,Re,n`
      .story-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      /* A tile count that renders odd (some tiles hide when a sensor is
         unavailable) would otherwise leave a lone tile in its own half-empty
         row - span it full-width instead, whichever tile ends up last. */
      .story-tile:nth-last-child(1):nth-child(odd) {
        grid-column: 1 / -1;
      }
      .story-tile {
        background: var(--divider-color);
        border-radius: 10px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .story-tile .num {
        font-size: 1.4rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .story-tile .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .story-tile .lab {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .story-block {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .story-block ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 18px;
      }
      .story-block .t1 {
        font-size: 0.82rem;
        font-weight: 600;
      }
      .story-block .t2 {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],yi.prototype,"_config",void 0),yi=e([ue("suunto-month-story-card")],yi);const _i=new Set(["unknown","unavailable",""]);let fi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-year-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("year_distance");if(!s||_i.has(s.state))return this._message("mdi:calendar-star",Se(a,"empty.year_story.title"));const r=i("year_time"),n=i("year_energy"),o=i("year_workouts"),l=i("year_active_days"),c=o?.attributes.main_activity,d=o?.attributes.main_activity_workouts,u=o?.attributes.main_activity_pct,p=o&&!_i.has(o.state)?Number(o.state):void 0,m=i("training_records_year"),h=m&&!_i.has(m.state)?Number(m.state):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-star"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.year_story.title")}</div>
            <div class="subtitle">${(new Date).toLocaleDateString(a.language,{year:"numeric"})}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${Se(a,"stat.distance")}</div>
          </div>
          ${r&&!_i.has(r.state)?I`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(r.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${Se(a,"stat.time")}</div>
                </div>
              `:G}
          ${n&&!_i.has(n.state)?I`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(n.state)).toLocaleString(a.language)}<span class="unit">kcal</span></div>
                  <div class="lab">${Se(a,"stat.energy")}</div>
                </div>
              `:G}
          ${void 0!==p?I`
                <div class="story-tile">
                  <div class="num">${p.toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.workouts")}</div>
                </div>
              `:G}
          ${l&&!_i.has(l.state)?I`
                <div class="story-tile">
                  <div class="num">${Number(l.state).toLocaleString(a.language)}</div>
                  <div class="lab">${Se(a,"stat.active_days")}</div>
                </div>
              `:G}
        </div>

        ${c?I`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${Se(a,"story.top_activity",{activity:c})}</div>
                  <div class="t2">
                    ${void 0!==d&&void 0!==u?Se(a,"story.share_year",{count:d,pct:u}):G}
                  </div>
                </div>
              </div>
            `:G}
        ${void 0!==h?I`
              <div class="story-block">
                <ha-icon icon="mdi:trophy-variant"></ha-icon>
                <div>
                  <div class="t1">
                    ${Se(a,"records.streak")}:
                    ${Ce(a,h,"records.streak_days_one","records.streak_days_other",{count:h})}
                  </div>
                  <div class="t2">${Se(a,"story.record_subtitle_year")}</div>
                </div>
              </div>
            `:G}
      </ha-card>
    `}};fi.styles=[De,Re,n`
      .story-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      /* A tile count that renders odd (some tiles hide when a sensor is
         unavailable) would otherwise leave a lone tile in its own half-empty
         row - span it full-width instead, whichever tile ends up last. */
      .story-tile:nth-last-child(1):nth-child(odd) {
        grid-column: 1 / -1;
      }
      .story-tile {
        background: var(--divider-color);
        border-radius: 10px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .story-tile .num {
        font-size: 1.4rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .story-tile .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .story-tile .lab {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .story-block {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .story-block ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 18px;
      }
      .story-block .t1 {
        font-size: 0.82rem;
        font-weight: 600;
      }
      .story-block .t2 {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],fi.prototype,"_config",void 0),fi=e([ue("suunto-year-story-card")],fi);const bi=[{key:"1k",km:1,label:"1K"},{key:"5k",km:5,label:"5K"},{key:"10k",km:10,label:"10K"},{key:"half_marathon",km:21.0975,label:{translationKey:"distance.half_marathon"}},{key:"marathon",km:42.195,label:{translationKey:"distance.marathon"}}];let wi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-best-efforts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.best_efforts?a.states[t.best_efforts]:void 0;if(!i)return this._message("mdi:speedometer",Se(a,"empty.best_efforts.title"),Se(a,"empty.best_efforts.subtitle"));const s=Number(i.state)||0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:speedometer"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.best_efforts.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.best_efforts.subtitle",{count:s,total:bi.length})}
            </div>
          </div>
        </div>

        <div class="effort-list">
          ${bi.map(e=>{const t=i.attributes[`${e.key}_seconds`],s="string"==typeof e.label?e.label:Se(a,e.label.translationKey);if(!t)return I`
                <div class="effort-row empty">
                  <div class="effort-dist">${s}</div>
                  <div class="effort-main">
                    <div class="effort-time">&mdash;:&mdash;&mdash;</div>
                    <div class="effort-meta">${Se(a,"best_efforts.not_yet")}</div>
                  </div>
                  <div class="effort-pace">&mdash;<span class="u">/km</span></div>
                </div>
              `;const r=t.value/60/e.km;return I`
              <div class="effort-row">
                <div class="effort-dist">${s}</div>
                <div class="effort-main">
                  <div class="effort-time">${function(e){const t=Math.round(e),a=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60;return a>0?`${a}:${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${i}:${String(s).padStart(2,"0")}`}(t.value)}</div>
                  <div class="effort-meta">
                    ${t.activity??""}
                    ${t.activity&&t.start_time?I`<span class="sep">·</span>`:G}
                    ${t.start_time?ot(new Date(t.start_time),a.language):G}
                  </div>
                </div>
                <div class="effort-pace">${Qe(r)}<span class="u">/km</span></div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};wi.styles=[De,Re,n`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      .effort-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .effort-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .effort-row.empty {
        opacity: 0.55;
      }
      .effort-dist {
        width: 4.6em;
        flex: none;
        font-size: 0.95rem;
        font-weight: 600;
      }
      .effort-main {
        flex: 1;
        min-width: 0;
      }
      .effort-time {
        font-variant-numeric: tabular-nums;
        font-size: 1rem;
        font-weight: 600;
      }
      .effort-meta {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        margin-top: 1px;
      }
      .effort-pace {
        font-variant-numeric: tabular-nums;
        font-size: 0.78rem;
        color: var(--sc-amber);
        flex: none;
        text-align: right;
      }
      .effort-pace .u {
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
    `],e([ge()],wi.prototype,"_config",void 0),wi=e([ue("suunto-best-efforts-card")],wi);const ki=new Set(["unknown","unavailable",""]);let xi=class extends Me{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-steps-trend-card",goal_steps:ct}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=Ue(await Ge(this.hass,"suunto_app:steps",336,"sum"))}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="daily_steps"]?a.states[t[s]]:void 0;var s;if(!i||ki.has(i.state))return this._message("mdi:chart-bar",Se(a,"empty.steps_trend.title"));const r=this._config.goal_steps??ct,n=this._history.map(e=>({value:e.v,colorVar:e.v>=r?"var(--sc-good)":"var(--sc-amber)",label:`${new Date(e.t).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${Math.round(e.v).toLocaleString(a.language)}`})),o=this._history.filter(e=>e.v>=r).length,l=this._history.length?this._history.reduce((e,t)=>e+t.v,0)/this._history.length:0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.steps_trend.title")}</div>
            <div class="subtitle">${Se(a,"card.steps_trend.subtitle")}</div>
          </div>
        </div>

        ${Oe(n,"var(--sc-amber)",300,80)}

        <div class="chart-legend">
          <span><i class="dot" style="background:var(--sc-good)"></i>${Se(a,"steps_trend.legend_met")}</span>
          <span><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"steps_trend.legend_below")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(i.state)).toLocaleString(a.language),Se(a,"stat.steps"))}
          ${this._stat(Math.round(l).toLocaleString(a.language),Se(a,"stat.average"))}
          ${this._stat(String(o),Se(a,"steps_trend.days_at_goal"))}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};xi.styles=[De,Re,n`
      .chart-legend {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
      .chart-legend .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 4px;
      }
    `],e([ge()],xi.prototype,"_config",void 0),e([ge()],xi.prototype,"_history",void 0),xi=e([ue("suunto-steps-trend-card")],xi);let $i=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-month-records-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=qa(a,t,"training_records_month").filter(e=>e.entry);return i.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:medal-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.month_records.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.month_records.subtitle",{count:i.length,total:6})}
            </div>
          </div>
        </div>

        <div class="rec-list">
          ${i.map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
        </div>
      </ha-card>
    `:this._message("mdi:medal-outline",Se(a,"empty.month_records.title"),Se(a,"empty.month_records.subtitle"))}_recordRow(e,t,a,i,s){const r=i.start_time?ot(new Date(i.start_time),e.language):void 0;return I`
      <div class="rrow">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${Se(e,a)}</div>
          <div class="meta">${i.activity?`${i.activity} · `:""}${r??""}</div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};$i.styles=[De,Re,n`
      .rec-list {
        display: flex;
        flex-direction: column;
      }
      .rrow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .rrow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        background: var(--sc-amber-bg);
      }
      .rrow .info {
        flex: 1;
        min-width: 0;
      }
      .rrow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .rrow .meta {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }
      .rrow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `],e([ge()],$i.prototype,"_config",void 0),$i=e([ue("suunto-month-records-card")],$i);let zi=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-year-records-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=qa(a,t,"training_records_year").filter(e=>e.entry);return i.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-award"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.year_records.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.year_records.subtitle",{count:i.length,total:6})}
            </div>
          </div>
        </div>

        <div class="rec-list">
          ${i.map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
        </div>
      </ha-card>
    `:this._message("mdi:trophy-award",Se(a,"empty.year_records.title"),Se(a,"empty.year_records.subtitle"))}_recordRow(e,t,a,i,s){const r=i.start_time?ot(new Date(i.start_time),e.language):void 0;return I`
      <div class="rrow">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${Se(e,a)}</div>
          <div class="meta">${i.activity?`${i.activity} · `:""}${r??""}</div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};zi.styles=[De,Re,n`
      .rec-list {
        display: flex;
        flex-direction: column;
      }
      .rrow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .rrow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        background: var(--sc-amber-bg);
      }
      .rrow .info {
        flex: 1;
        min-width: 0;
      }
      .rrow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .rrow .meta {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }
      .rrow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `],e([ge()],zi.prototype,"_config",void 0),zi=e([ue("suunto-year-records-card")],zi);let Si=class extends Me{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-running-dynamics-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[],n=s?function(e){const t=e[0]?.activity;if(!t)return;const a=e.filter(e=>e.activity===t&&e.start&&null!=e.cadence_spm&&null!=e.stride_length_m).map(e=>({t:new Date(e.start).getTime(),cadence:e.cadence_spm,stride:e.stride_length_m})).sort((e,t)=>e.t-t.t);return a.length<2?void 0:{activity:t,cadencePoints:a.map(e=>({t:e.t,v:e.cadence})),stridePoints:a.map(e=>({t:e.t,v:e.stride})),latestCadence:a[a.length-1].cadence,latestStride:a[a.length-1].stride}}(r):void 0;if(!n)return this._message("mdi:run",Se(a,"empty.running_dynamics.title"),Se(a,"empty.running_dynamics.subtitle"));const o=[{points:n.cadencePoints,colorVar:"var(--sc-pulse)"},{points:n.stridePoints,colorVar:"var(--sc-amber)"}];return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${_t(n.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.running_dynamics.title")}</div>
            <div class="subtitle">
              ${Se(a,"card.running_dynamics.subtitle",{activity:n.activity,count:n.cadencePoints.length})}
            </div>
          </div>
        </div>

        ${Le(o,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.cadence")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.stride_length")}</span>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${Math.round(n.latestCadence)}<span class="unit">spm</span></div>
            <div class="stat-label">${Se(a,"stat.cadence")}</div>
          </div>
          <div class="stat">
            <div class="stat-value">${n.latestStride.toFixed(2)}<span class="unit">m</span></div>
            <div class="stat-label">${Se(a,"stat.stride_length")}</div>
          </div>
        </div>
      </ha-card>
    `}};Si.styles=[De,Re,n`
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
    `],e([ge()],Si.prototype,"_config",void 0),Si=e([ue("suunto-running-dynamics-card")],Si);const Ci=new Set(["unknown","unavailable",""]);let Ti=class extends Me{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-goals-overview-editor")}static getStubConfig(){return{type:"custom:suunto-goals-overview-card",goal_km:Ie,goal_steps:mt}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._priorDaysSteps=await Je(this.hass)}catch{this._priorDaysSteps=void 0}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("daily_steps"),n=this._config.units??"metric",o=[];if(s&&!Ci.has(s.state)){const e=this._config.goal_km??Ie,t=Number(s.state),i=tt(t,n),r=tt(e,n,0);o.push({key:"distance",icon:"mdi:map-marker-distance",label:Se(a,"stat.distance"),value:t,goal:e,valueLabel:`${i.value} / ${r.value} ${r.unit}`})}if(r&&!Ci.has(r.state)){const e=this._config.goal_steps??mt,t=(this._priorDaysSteps??0)+Number(r.state);o.push({key:"steps",icon:"mdi:shoe-print",label:Se(a,"stat.steps"),value:t,goal:e,valueLabel:`${Math.round(t).toLocaleString(a.language)} / ${e.toLocaleString(a.language)}`})}return o.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.goals_overview.title")}</div>
            <div class="subtitle">${Se(a,"card.goals_overview.subtitle")}</div>
          </div>
        </div>

        <div class="goals-row">
          ${o.map(e=>{const t=e.goal>0?e.value/e.goal*100:0,a=t>=100?"var(--sc-good)":"var(--sc-amber)";return I`
              <div class="goal">
                <div class="ring-wrap">
                  ${Fe(t,a,84,8)}
                  <div class="ring-pct" style="color:${a}">${Math.round(t)}%</div>
                </div>
                <div class="goal-label"><ha-icon icon=${e.icon}></ha-icon>${e.label}</div>
                <div class="goal-value">${e.valueLabel}</div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:target",Se(a,"empty.goals_overview.title"))}};Ti.styles=[De,Re,n`
      .goals-row {
        display: flex;
        gap: 20px;
      }
      .goal {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      .ring-wrap {
        position: relative;
        width: 84px;
        height: 84px;
        flex: none;
      }
      .ring-pct {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .goal-label {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .goal-label ha-icon {
        --mdc-icon-size: 15px;
      }
      .goal-value {
        font-size: 0.8rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
    `],e([ge()],Ti.prototype,"_config",void 0),e([ge()],Ti.prototype,"_priorDaysSteps",void 0),Ti=e([ue("suunto-goals-overview-card")],Ti);const Ai=new Set(["unknown","unavailable",""]);function Ei(e,t){let a;for(const i of e)Ai.has(i.state)||i.lastChanged>t||(!a||i.lastChanged>a.lastChanged)&&(a=i);return a?Number(a.state):void 0}let Ni=class extends Me{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-compare-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.weekly_distance,i=t.weekly_time,s=t.workouts_7d;if(!a&&!i&&!s)return;const r=[a,i,s].filter(e=>Boolean(e)),n=r.join(","),o=Date.now();if(!(n===this._historyKey&&o-this._historyFetchedAt<18e5)){this._historyKey=n,this._historyFetchedAt=o;try{const e=this.hass,t=await Ye(e,r,9),n=o-6048e5;this._prevDistance=a?Ei(t[a]??[],n):void 0,this._prevTime=i?Ei(t[i]??[],n):void 0,this._prevWorkouts=s?Ei(t[s]??[],n):void 0}catch{this._prevDistance=void 0,this._prevTime=void 0,this._prevWorkouts=void 0}}}render(){if(!this._config||!this.hass)return G;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("weekly_time"),n=i("workouts_7d"),o=this._config.units??"metric",l=[];if(s&&!Ai.has(s.state)&&void 0!==this._prevDistance){const e=Number(s.state),t=tt(e,o),i=tt(this._prevDistance,o);l.push({key:"distance",label:Se(a,"stat.distance"),now:e,prev:this._prevDistance,formatNow:`${t.value} ${t.unit}`,formatPrev:`${i.value} ${i.unit}`,formatDelta:this._pctDelta(e,this._prevDistance)})}if(r&&!Ai.has(r.state)&&void 0!==this._prevTime){const e=Number(r.state);l.push({key:"time",label:Se(a,"stat.time"),now:e,prev:this._prevTime,formatNow:`${e.toFixed(1)} h`,formatPrev:`${this._prevTime.toFixed(1)} h`,formatDelta:this._pctDelta(e,this._prevTime)})}if(n&&!Ai.has(n.state)&&void 0!==this._prevWorkouts){const e=Number(n.state);l.push({key:"workouts",label:Se(a,"stat.workouts"),now:e,prev:this._prevWorkouts,formatNow:String(e),formatPrev:String(this._prevWorkouts),formatDelta:this._absDelta(e,this._prevWorkouts)})}return l.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:calendar-sync"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.week_compare.title")}</div>
            <div class="subtitle">${Se(a,"card.week_compare.subtitle")}</div>
          </div>
        </div>

        <div class="rows">
          ${l.map(e=>{const t=Math.max(e.now,e.prev,1e-4),a=e.now/t*100,i=e.prev/t*100,s=e.now>e.prev?"good":e.now<e.prev?"bad":"";return I`
              <div class="row">
                <div class="row-label">${e.label}</div>
                <div class="bars">
                  <div class="track"><div class="fill now" style="width:${a}%"></div></div>
                  <div class="track"><div class="fill prev" style="width:${i}%"></div></div>
                  <div class="vals"><span>${e.formatNow}</span><span>${e.formatPrev}</span></div>
                </div>
                <div class="delta ${s}">${e.formatDelta}</div>
              </div>
            `})}
        </div>

        <div class="legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"week_compare.legend_now")}</span>
          <span class="legend-item"><i class="dot muted"></i>${Se(a,"week_compare.legend_prev")}</span>
        </div>
      </ha-card>
    `:this._message("mdi:calendar-sync",Se(a,"empty.week_compare.title"),Se(a,"empty.week_compare.subtitle"))}_pctDelta(e,t){if(t<=0)return e>0?"+100%":"±0%";const a=Math.round((e-t)/t*100);return 0===a?"±0%":a>0?`+${a}%`:`${a}%`}_absDelta(e,t){const a=Math.round(e-t);return 0===a?"±0":a>0?`+${a}`:String(a)}};Ni.styles=[De,Re,n`
      .rows {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .row {
        display: grid;
        grid-template-columns: 70px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .row-label {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
      }
      .bars {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .track {
        height: 6px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .fill {
        height: 100%;
        border-radius: 4px;
      }
      .fill.now {
        background: var(--sc-pulse);
      }
      .fill.prev {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
      .vals {
        display: flex;
        justify-content: space-between;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .delta {
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 52px;
        text-align: right;
      }
      .delta.good {
        color: var(--sc-good);
      }
      .delta.bad {
        color: var(--sc-bad);
      }
      .legend {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        padding-top: 6px;
        border-top: 1px solid var(--divider-color);
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }
      .dot.muted {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
    `],e([ge()],Ni.prototype,"_config",void 0),e([ge()],Ni.prototype,"_prevDistance",void 0),e([ge()],Ni.prototype,"_prevTime",void 0),e([ge()],Ni.prototype,"_prevWorkouts",void 0),Ni=e([ue("suunto-week-compare-card")],Ni),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0},{type:"suunto-lifetime-card",name:"Suunto - Lifetime Totals",description:"Total distance, time, energy, workouts and active days since you started.",preview:!0},{type:"suunto-recent-workouts-card",name:"Suunto - Recent Workouts",description:"A scrollable log of your last 15 workouts - activity, distance and duration.",preview:!0},{type:"suunto-elevation-card",name:"Suunto - Elevation & Climbing",description:"Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",preview:!0},{type:"suunto-location-card",name:"Suunto - Start Location",description:"Where your last workout started, with a one-tap link to open it in Maps.",preview:!0},{type:"suunto-fitness-card",name:"Suunto - Fitness",description:"VO2max, estimated VO2max and fitness age, with when they were last measured.",preview:!0},{type:"suunto-last-workout-tile-card",name:"Suunto - Last Workout (compact)",description:"A single-row summary of your last workout, for denser dashboards.",preview:!0},{type:"suunto-pmc-card",name:"Suunto - Performance Management",description:"CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",preview:!0},{type:"suunto-recovery-trends-card",name:"Suunto - Recovery Trends",description:"Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",preview:!0},{type:"suunto-weekly-volume-card",name:"Suunto - Weekly Volume",description:"A 12-week bar chart of your training distance, with the average and total.",preview:!0},{type:"suunto-hr-curve-card",name:"Suunto - Heart Rate Curve",description:"Today's 24/7 heart rate curve, from your watch's continuous heart rate tracking.",preview:!0},{type:"suunto-sleep-trends-card",name:"Suunto - Sleep Trends",description:"Sleep duration and quality over the last 30 nights.",preview:!0},{type:"suunto-weekly-goal-card",name:"Suunto - Weekly Goal",description:"This week's distance against a target you set.",preview:!0},{type:"suunto-streak-card",name:"Suunto - Activity Streak",description:"How many consecutive days you've been active.",preview:!0},{type:"suunto-just-finished-card",name:"Suunto - Just Finished",description:"Lights up right after your watch syncs a new workout, then goes quiet again.",preview:!0},{type:"suunto-activity-trends-card",name:"Suunto - Activity Trends",description:"Daily steps and energy over the last 14 days.",preview:!0},{type:"suunto-recovery-balance-trend-card",name:"Suunto - Recovery Balance Trend",description:"Recovery balance and stress level over the last 14 days.",preview:!0},{type:"suunto-readiness-trend-card",name:"Suunto - Readiness Trend",description:"Your readiness score over the last 30 days.",preview:!0},{type:"suunto-activity-calendar-card",name:"Suunto - Activity Calendar",description:"A GitHub-style heatmap of your active days over the last 6 weeks.",preview:!0},{type:"suunto-workout-comparison-card",name:"Suunto - Workout Comparison",description:"Your last workout vs the previous one of the same activity, side by side.",preview:!0},{type:"suunto-milestones-card",name:"Suunto - By The Numbers",description:"Your lifetime distance and energy converted into fun equivalents.",preview:!0},{type:"suunto-athlete-profile-card",name:"Suunto - Training Personality",description:"Your dominant sport, schedule pattern and time-of-day, computed from your history.",preview:!0},{type:"suunto-pace-trend-card",name:"Suunto - Pace Trend",description:"Whether your pace is improving over your recent same-activity workouts.",preview:!0},{type:"suunto-lap-splits-card",name:"Suunto - Lap Splits",description:"Per-lap duration, distance and pace from your last workout, with the fastest lap highlighted.",preview:!0},{type:"suunto-training-effect-trend-card",name:"Suunto - Training Effect Trend",description:"Peak training effect and peak EPOC over the last 30 days.",preview:!0},{type:"suunto-training-status-card",name:"Suunto - Training Status",description:"Today's training suggestion and readiness in one place, with an unusual-recovery warning.",preview:!0},{type:"suunto-training-profile-card",name:"Suunto - Training Profile",description:"A five-axis radar of volume, intensity, consistency, recovery and variety, at a glance.",preview:!0},{type:"suunto-heart-rate-card",name:"Suunto - Heart Rate",description:"A clinical-monitor-style ECG trace, its beat paced by your actual current heart rate.",preview:!0},{type:"suunto-player-card",name:"Suunto - Player Card",description:"A FIFA-style trading card: an overall rating, tier and 6 stat bars computed from your training data.",preview:!0},{type:"suunto-achievements-card",name:"Suunto - Achievements",description:"20 unlockable badges plus your all-time personal records - fastest pace, biggest climb and more.",preview:!0},{type:"suunto-achievements-compact-card",name:"Suunto - Achievements (compact)",description:"The same 20 badges as a dense icon grid - no progress bars or category headers, fits without scrolling.",preview:!0},{type:"suunto-level-card",name:"Suunto - Level & XP",description:"A game-style level and XP bar powered by your lifetime training load.",preview:!0},{type:"suunto-class-card",name:"Suunto - Class",description:"An RPG character class derived from your training mix, with the build breakdown behind it.",preview:!0},{type:"suunto-next-milestone-card",name:"Suunto - Next Milestone",description:"A countdown to your next round-number lifetime distance, plus a workout-count milestone and pace-based ETA.",preview:!0},{type:"suunto-story-card",name:"Suunto - Your Suunto Story",description:"A lifetime retrospective: totals, your main activity, and your longest streak in one narrative card.",preview:!0},{type:"suunto-sleep-clock-card",name:"Suunto - Sleep Clock",description:"Last night's sleep as a 24h clock dial, from bedtime to wake, split into deep/light/REM.",preview:!0},{type:"suunto-sleep-rhythm-card",name:"Suunto - Sleep Rhythm",description:"Your last 7 nights' bedtime and wake time on a shared axis - how regular your sleep schedule really is.",preview:!0},{type:"suunto-route-card",name:"Suunto - Route",description:"Your last workout's route as a line colored by pace, from a warm fast segment to a cool slow one.",preview:!0},{type:"suunto-month-story-card",name:"Suunto - This Month",description:"Distance, time, workouts and active days for the current calendar month, plus your main activity and streak.",preview:!0},{type:"suunto-year-story-card",name:"Suunto - This Year",description:"The same totals as This Month, scoped to the current calendar year - a running year in review.",preview:!0},{type:"suunto-best-efforts-card",name:"Suunto - Best Efforts",description:"Your fastest 1K, 5K, 10K, half marathon and marathon efforts, tracked from running workouts.",preview:!0},{type:"suunto-steps-today-card",name:"Suunto - Steps Today",description:"Today's steps against a daily goal you set, with a ring and a comparison to your own 7-day average.",preview:!0},{type:"suunto-steps-trend-card",name:"Suunto - Steps Trend",description:"Daily steps over the last 14 days as a bar chart, colored by whether each day hit your goal.",preview:!0},{type:"suunto-month-records-card",name:"Suunto - Month Records",description:"This month's personal bests - fastest pace, biggest climb, longest workout and more.",preview:!0},{type:"suunto-year-records-card",name:"Suunto - Year Records",description:"This year's personal bests - the same records as Month Records, scoped to the calendar year.",preview:!0},{type:"suunto-running-dynamics-card",name:"Suunto - Running Dynamics",description:"Cadence and stride length across your recent same-activity workouts.",preview:!0},{type:"suunto-weekly-steps-goal-card",name:"Suunto - Weekly Steps Goal",description:"Your rolling 7-day step total against a weekly target you set.",preview:!0},{type:"suunto-goals-overview-card",name:"Suunto - Goals Overview",description:"Your weekly distance and step goals as two rings in one card.",preview:!0},{type:"suunto-week-compare-card",name:"Suunto - Week Compare",description:"This week's distance, time and workouts against last week's.",preview:!0}),console.info("%c SUUNTO-CARDS %c 55 cards loaded ","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
