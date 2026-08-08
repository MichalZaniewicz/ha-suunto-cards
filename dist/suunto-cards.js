function t(t,e,s,i){var a,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(r<3?a(o):r>3?a(e,s,o):a(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&a.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)},n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,v=globalThis,g=v.trustedTypes,m=g?g.emptyScript:"",f=v.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);a?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),a=e.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const r=a.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){if(void 0!==t){const r=this.constructor;if(!1===i&&(a=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??_)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==a||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,f?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=t=>t,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+C,z=`<${N}>`,M=document,T=()=>M.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,D=/>/g,V=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,j=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,G=M.createTreeWalker(M,129);function Z(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let a,r=2===e?"<svg>":3===e?"<math>":"",o=O;for(let e=0;e<s;e++){const s=t[e];let n,c,l=-1,d=0;for(;d<s.length&&(o.lastIndex=d,c=o.exec(s),null!==c);)d=o.lastIndex,o===O?"!--"===c[1]?o=U:void 0!==c[1]?o=D:void 0!==c[2]?(j.test(c[2])&&(a=RegExp("</"+c[2],"g")),o=V):void 0!==c[3]&&(o=V):o===V?">"===c[0]?(o=a??O,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?V:'"'===c[3]?F:L):o===F||o===L?o=V:o===U||o===D?o=O:(o=V,a=void 0);const h=o===V&&t[e+1].startsWith("/>")?" ":"";r+=o===O?s+z:l>=0?(i.push(n),s.slice(0,l)+E+s.slice(l)+C+h):s+C+(-2===l?e:h)}return[Z(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,r=0;const o=t.length-1,n=this.parts,[c,l]=Y(t,e);if(this.el=J.createElement(c,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&n.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[r++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:o[2],strings:s,ctor:"."===o[1]?et:"?"===o[1]?st:"@"===o[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:a}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),G.nextNode(),n.push({type:2,index:++a});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===N)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)n.push({type:7,index:a}),t+=C.length-1}a++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===B)return e;let a=void 0!==i?s._$Co?.[i]:s._$Cl;const r=R(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(t),a._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=a:s._$Cl=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);G.currentNode=i;let a=G.nextNode(),r=0,o=0,n=s[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new X(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new at(a,this,t)),this._$AV.push(e),n=s[++o]}r!==n?.index&&(a=G.nextNode(),r++)}return G.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),R(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new X(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const a=this.strings;let r=!1;if(void 0===a)t=K(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const i=t;let o,n;for(t=a[0],o=0;o<a.length-1;o++)n=K(this,i[s+o],e,o),n===B&&(n=this._$AH[o]),r||=!R(n)||n!==this._$AH[o],n===W?t=W:t!==W&&(t+=(n??"")+a[o+1]),this._$AH[o]=n}r&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===B)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,X),(x.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=s?.renderBefore??null;i._$litPart$=a=new X(e.insertBefore(T(),t),t,void 0,s??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},ht=(t=dt,e,s)=>{const{kind:i,metadata:a}=s;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const a=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,a,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const a=this[i];e.call(this,s),this.requestUpdate(i,a,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}var vt,gt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(vt||(vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(gt||(gt={}));var mt=function(t,e,s,i){i=i||{},s=null==s?{}:s;var a=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=s,t.dispatchEvent(a),a};const ft="suunto_app";class $t extends Error{}function bt(t){const e=new Set;for(const s of Object.values(t.entities??{}))s.platform===ft&&s.device_id&&e.add(s.device_id);return[...e]}function _t(t,e){const s={};for(const i of Object.values(t.entities??{}))i.device_id===e&&i.platform===ft&&i.translation_key&&(s[i.translation_key]=i.entity_id);return s}let yt=class extends nt{setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return W;return bt(this.hass).length<=1?I`<div class="hint">This card auto-detects your Suunto device - no configuration needed.</div>`:I`
      <ha-device-picker
        .hass=${this.hass}
        .value=${this._config.device_id??""}
        .label=${"Suunto device"}
        .includeDeviceClasses=${void 0}
        @value-changed=${this._deviceChanged}
      ></ha-device-picker>
      <div class="hint">Multiple Suunto devices were found - pick which one this card should read.</div>
    `}_deviceChanged(t){if(!this._config)return;const e=t.detail.value,s={...this._config,device_id:e||void 0};mt(this,"config-changed",{config:s})}};yt.styles=o`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
  `,t([ut({attribute:!1})],yt.prototype,"hass",void 0),t([pt()],yt.prototype,"_config",void 0),yt=t([lt("suunto-device-editor")],yt);class wt extends nt{_syncTheme(){this.classList.toggle("dark",Boolean(this.hass?.themes?.darkMode))}_resolveEntities(){if(!this.hass)return{error:this._message("mdi:alert-circle-outline","Loading...")};try{const t=function(t,e){const s=bt(t);if(e){if(!s.includes(e))throw new $t(`Configured device "${e}" has no suunto_app entities.`);return e}if(1===s.length)return s[0];if(0===s.length)throw new $t("No Suunto device found - is the suunto_app integration set up?");throw new $t('Multiple Suunto devices found - set "device_id" in the card configuration.')}(this.hass,this._configuredDeviceId);return{map:_t(this.hass,t)}}catch(t){return{error:this._message("mdi:alert-circle-outline",t instanceof $t?t.message:"Could not load Suunto data.")}}}_message(t,e,s){return I`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${t}></ha-icon>
          <div class="t1">${e}</div>
          ${s?I`<div class="t2">${s}</div>`:W}
        </div>
      </ha-card>
    `}}t([ut({attribute:!1})],wt.prototype,"hass",void 0);const xt=o`
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
    --sc-zone-1: #7c8790;
    --sc-zone-2: #6fb3ea;
    --sc-zone-3: #5db47f;
    --sc-zone-4: #f0954f;
    --sc-zone-5: #e05a5a;
    --sc-sleep-deep: #5b82ab;
    --sc-sleep-light: #7fb4e0;
    --sc-sleep-rem: #b89ce0;
  }
`,kt=o`
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

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    flex: none;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 8px;
  }
  .stat {
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
`,At=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function St(t){if(t)for(const[e,s]of At)if(e.test(t))return s;return"mdi:run-fast"}const Et={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};function Ct(t){if(t>=60){const e=Math.floor(t/60),s=Math.round(t%60);return{value:`${e}:${String(s).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(t)),unit:"min"}}function Nt(t,e=0){const s=Number(t.toFixed(e));return 0===s?"±0":s>0?`+${s}`:String(s)}const zt=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function Mt(t,e){const s=(t.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(e,{numeric:"auto"});for(const[t,e]of zt)if(Math.abs(s)>=e)return i.format(Math.round(s/e),t);return i.format(Math.round(s/60),"minute")}const Tt=new Set(["unknown","unavailable",""]);let Rt=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("last_activity");if(!a||Tt.has(a.state))return this._message("mdi:calendar-blank-outline","No recent workout","Sync your watch with the Suunto app to see it here.");const r=i("last_workout_start"),o=i("last_distance"),n=i("last_duration"),c=i("last_avg_hr"),l=i("last_max_hr"),d=i("last_avg_pace"),h=i("last_avg_speed"),u=i("last_pte"),p=i("last_epoc"),v=i("last_feeling"),g=i("last_tss"),m=i("last_cal_per_km"),f=i("last_workout_weather"),$=i("last_workout_tags"),b=i("last_workout_achievements"),_=n?Ct(Number(n.state)):void 0,y=void 0===d&&void 0!==h,w=v&&!Tt.has(v.state)?Number(v.state):void 0,x=u&&!Tt.has(u.state)?Number(u.state):void 0,k=b?Number(b.state):0;return I`
      <ha-card @click=${()=>this._openMoreInfo(e.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${St(a.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${a.state}</div>
            <div class="subtitle">${r?Mt(new Date(r.state),s.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${o?this._stat((Number(o.state)/1e3).toFixed(1),"km","Distance"):W}
          ${_?this._stat(_.value,_.unit,"Duration"):W}
          ${d?this._stat(function(t){const e=Math.round(60*t);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}(Number(d.state)),"/km","Avg pace"):y?this._stat(Number(h.state).toFixed(1),"km/h","Avg speed"):W}
          ${c?this._stat(String(Math.round(Number(c.state))),"bpm","Avg HR",!0):W}
          ${l?this._stat(String(Math.round(Number(l.state))),"bpm","Max HR",!0):W}
          ${void 0!==x?I`
                <div class="stat">
                  <div class="stat-value">${x.toFixed(1)}</div>
                  <div class="stat-label">Training effect</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(t=>I`<i class=${t<=Math.round(x)?`on s${t}`:""}></i>`)}
                  </div>
                </div>
              `:W}
        </div>

        ${g||p||void 0!==w||m?I`
              <hr />
              <div class="secondary">
                ${g?this._secondary(String(Math.round(Number(g.state))),"TSS"):W}
                ${p?this._secondary(Number(p.state).toFixed(1),"EPOC"):W}
                ${void 0!==w?I`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(t=>I`<i class=${t<=w?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">Feeling</div>
                      </div>
                    `:W}
                ${m?this._secondary(`${Math.round(Number(m.state))}`,"kcal/km","Energy"):W}
              </div>
            `:W}
        ${f&&!Tt.has(f.state)?I`
              <div class="weather">
                <ha-icon .icon=${function(t){const e=t?.slice(0,2);return e&&Et[e]||"mdi:weather-cloudy"}(f.attributes.icon_code)}></ha-icon>
                <strong>${f.state}°C</strong>
                ${f.attributes.condition?I`<span class="sep">·</span><span class="cond">${f.attributes.condition}</span>`:W}
                ${void 0!==f.attributes.wind_speed_kmh?I`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(f.attributes.wind_speed_kmh)} km/h</span>
                    `:W}
              </div>
            `:W}
        ${$&&!Tt.has($.state)||k>0?I`
              <div class="footer">
                ${$&&!Tt.has($.state)?I`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${$.state}</span>`:W}
                ${k>0?I`
                      <span
                        class="chip accent"
                        title=${b?.attributes.route_ranking?`Rank #${b.attributes.route_ranking} on this route`:""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${function(t,e){if(Array.isArray(t)&&t.length){const e=t[0];if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e,s=t.name??t.title??t.type;if("string"==typeof s)return s}}return`${e} achievement${1===e?"":"s"}`}(b?.attributes.achievements,k)}
                      </span>
                    `:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(t,e,s,i=!1){return I`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${s}</div>
      </div>
    `}_secondary(t,e,s){return I`
      <div class="sec-item">
        <div class="sec-value">${t}${s?W:I`<span class="sec-unit">${e}</span>`}</div>
        <div class="sec-label">${s??e}</div>
      </div>
    `}_openMoreInfo(t){t&&mt(this,"hass-more-info",{entityId:t})}};function Pt(t){return I`
    <div class="bar">
      ${t.map(t=>I`<div
            class="seg"
            style="flex-grow:${t.flexGrow};background:${t.colorVar}"
            title=${t.title??""}
          ></div>`)}
    </div>
  `}function Ht(t,e,s=64,i=6){const a=Math.max(0,Math.min(100,t)),r=(s-i)/2,o=2*Math.PI*r,n=s/2;return I`
    <svg width=${s} height=${s} viewBox="0 0 ${s} ${s}" class="ring">
      <circle
        cx=${n}
        cy=${n}
        r=${r}
        fill="none"
        stroke="var(--divider-color)"
        stroke-width=${i}
      ></circle>
      <circle
        cx=${n}
        cy=${n}
        r=${r}
        fill="none"
        stroke=${e}
        stroke-width=${i}
        stroke-linecap="round"
        stroke-dasharray=${o}
        stroke-dashoffset=${o-a/100*o}
        transform="rotate(-90 ${n} ${n})"
      ></circle>
    </svg>
  `}Rt.styles=[xt,kt,o`
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
        background: var(--sc-sev-1);
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
    `],t([pt()],Rt.prototype,"_config",void 0),Rt=t([lt("suunto-last-workout-card")],Rt);const Ot=t=>`var(--sc-zone-${t})`;let Ut=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=[];for(let t=1;t<=5;t++){const a=e[`last_zone${t}`],r=a?s.states[a]:void 0;r&&!Number.isNaN(Number(r.state))&&i.push({n:t,minutes:Number(r.state),lower:r.attributes.lower_limit_bpm,upper:r.attributes.upper_limit_bpm})}const a=i.reduce((t,e)=>t+e.minutes,0);if(0===i.length||a<=0)return this._message("mdi:heart-pulse","No zone data","Your next outdoor workout with a heart-rate strap will fill this in.");const r=e.last_workout_start,o=r?s.states[r]:void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">Heart Rate Zones</div>
            <div class="subtitle">
              ${o?`Last workout · ${Mt(new Date(o.state),s.language)}`:"Last workout"}
            </div>
          </div>
        </div>

        ${Pt(i.map(t=>({flexGrow:t.minutes,colorVar:Ot(t.n),title:`Zone ${t.n}`})))}

        <div class="rows">
          ${i.map(t=>{const e=Ct(t.minutes),s=Math.round(t.minutes/a*100);return I`
              <div class="row">
                <i class="dot" style="background:${Ot(t.n)}"></i>
                <span class="zone-label">Zone ${t.n}</span>
                <span class="bpm">${i=t.lower,r=t.upper,void 0!==i&&void 0!==r?`${i}-${r} bpm`:void 0!==i?`${i}+ bpm`:void 0!==r?`<${r} bpm`:""}</span>
                <span class="time">${e.value} ${e.unit}</span>
                <span class="pct">${s}%</span>
              </div>
            `;var i,r})}
        </div>
      </ha-card>
    `}};Ut.styles=[xt,kt,o`
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
    `],t([pt()],Ut.prototype,"_config",void 0),Ut=t([lt("suunto-hr-zones-card")],Ut);const Dt=new Set(["unknown","unavailable",""]);let Vt=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("sleep_duration");if(!a||Dt.has(a.state))return this._message("mdi:sleep","No sleep data yet","Wear your watch to bed to see it here.");const r=i("wake_time"),o=i("sleep_deep"),n=i("sleep_light"),c=i("sleep_rem"),l=i("sleep_quality"),d=i("sleep_spo2"),h=i("sleep_hrv"),u=i("hrv_baseline"),p=i("hrv_status"),v=i("resting_hr"),g=i("resting_hr_baseline"),m=i("readiness"),f=i("nap_duration"),$=m&&!Dt.has(m.state)?Number(m.state):void 0,b=void 0!==$?(_=$)>=70?{colorVar:"var(--sc-good)",label:"Great"}:_>=40?{colorVar:"var(--sc-warn)",label:"Fair"}:{colorVar:"var(--sc-bad)",label:"Low"}:void 0;var _;const y=h&&u&&!Dt.has(u.state)?Number(h.state)-Number(u.state):void 0,w=v&&g&&!Dt.has(g.state)?Number(v.state)-Number(g.state):void 0,x=[o&&!Dt.has(o.state)?{flexGrow:Number(o.state),colorVar:"var(--sc-sleep-deep)",title:"Deep"}:void 0,n&&!Dt.has(n.state)?{flexGrow:Number(n.state),colorVar:"var(--sc-sleep-light)",title:"Light"}:void 0,c&&!Dt.has(c.state)?{flexGrow:Number(c.state),colorVar:"var(--sc-sleep-rem)",title:"REM"}:void 0].filter(t=>void 0!==t),k=Ct(60*Number(a.state)),A=f&&!Dt.has(f.state)?Number(f.state):void 0,S=!!f?.attributes.date&&function(t){const e=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}(new Date(f.attributes.date));return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">Sleep &amp; Readiness</div>
            <div class="subtitle">
              ${k.value} ${k.unit} slept
              ${r?I` · woke ${E=new Date(r.state),C=s.language,new Intl.DateTimeFormat(C,{hour:"numeric",minute:"2-digit"}).format(E)}`:W}
            </div>
          </div>
        </div>

        ${void 0!==$&&b?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${Ht($,b.colorVar,60,6)}
                  <div class="ring-value" style="color:${b.colorVar}">${Math.round($)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">Readiness</div>
                  <div class="readiness-band" style="color:${b.colorVar}">${b.label}</div>
                </div>
              </div>
            `:W}

        <div class="stats">
          ${l?this._stat(String(Math.round(Number(l.state))),"%","Quality"):W}
          ${h?this._stat(String(Math.round(Number(h.state))),"ms",void 0!==y?`HRV (${Nt(y)})`:"HRV",void 0!==y?y>=0?"good":"bad":void 0):W}
          ${v?this._stat(String(Math.round(Number(v.state))),"bpm",void 0!==w?`Resting HR (${Nt(w)})`:"Resting HR",void 0!==w?w<=0?"good":"bad":void 0):W}
          ${d?this._stat(String(Math.round(Number(d.state))),"%","SpO2"):W}
        </div>

        ${x.length?I`
              <div class="stages">
                ${Pt(x)}
                <div class="stage-legend">
                  ${x.map(t=>{const e=Ct(t.flexGrow);return I`
                      <span class="legend-item">
                        <i class="dot" style="background:${t.colorVar}"></i>${t.title} ${e.value}${"h"===e.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:W}

        ${p&&!Dt.has(p.state)||A?I`
              <div class="footer">
                ${p&&!Dt.has(p.state)?(()=>{const t="low"===(e=p.state)?{colorVar:"var(--sc-warn)",label:"HRV low"}:"high"===e?{colorVar:"var(--sc-pulse)",label:"HRV high"}:{colorVar:"var(--sc-good)",label:"HRV balanced"};var e;return I`<span class="chip" style="color:${t.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${t.label}</span
                      >`})():W}
                ${A?I`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${A} min nap${S?"":" (earlier)"}
                    </span>`:W}
              </div>
            `:W}
      </ha-card>
    `;var E,C}_stat(t,e,s,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${t}<span class="unit">${e}</span></div>
        <div class="stat-label">${s}</div>
      </div>
    `}};Vt.styles=[xt,kt,o`
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
    `],t([pt()],Vt.prototype,"_config",void 0),Vt=t([lt("suunto-sleep-readiness-card")],Vt);const Lt=new Set(["unknown","unavailable",""]);let Ft=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("recovery_balance");if(!a||Lt.has(a.state))return this._message("mdi:battery-heart-variant","No recovery data yet");const r=i("is_recovering"),o=i("recovery_until"),n=i("recovery_time"),c=i("stress_state"),l=i("workout_today"),d=Number(a.state),h=(u=d)>=60?{colorVar:"var(--sc-good)",label:"Well recovered"}:u>=30?{colorVar:"var(--sc-warn)",label:"Partially recovered"}:{colorVar:"var(--sc-bad)",label:"Low recovery"};var u;let p="Fully recovered";if("on"===r?.state&&o&&!Lt.has(o.state)){const t=new Date(o.state).getTime()-Date.now();if(t>0){const e=Ct(t/6e4);p=`Recovering · ${e.value} ${e.unit} left`}}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">Recovery</div>
            <div class="subtitle">${p}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${Ht(d,h.colorVar,60,6)}
            <div class="ring-value" style="color:${h.colorVar}">${Math.round(d)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">Recovery balance</div>
            <div class="readiness-band" style="color:${h.colorVar}">${h.label}</div>
          </div>
        </div>

        ${c||n?I`
              <div class="stats two">
                ${c&&!Lt.has(c.state)?this._stat(c.state,"","Stress level"):W}
                ${n&&!Lt.has(n.state)?this._stat(Number(n.state).toFixed(1),"h","Recovery window"):W}
              </div>
            `:W}
        ${"on"===l?.state?I`<div class="footer"><span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>Workout logged today</span></div>`:W}
      </ha-card>
    `}_stat(t,e,s){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:W}</div>
        <div class="stat-label">${s}</div>
      </div>
    `}};Ft.styles=[xt,kt,o`
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
      .stats.two {
        grid-template-columns: repeat(2, 1fr);
      }
      .footer {
        display: flex;
        gap: 8px;
      }
    `],t([pt()],Ft.prototype,"_config",void 0),Ft=t([lt("suunto-recovery-card")],Ft);const jt=new Set(["unknown","unavailable",""]);let It=class extends wt{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}willUpdate(t){t.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const t=this._resolveEntities();if("error"in t||!this.hass)return;const e=t.map.fitness_ctl;if(!e)return;const s=Date.now();if(!(e===this._historyEntityId&&s-this._historyFetchedAt<6e5)){this._historyEntityId=e,this._historyFetchedAt=s;try{const t=new Date(s-2592e6).toISOString(),i=await this.hass.callApi("GET",`history/period/${t}?filter_entity_id=${e}&no_attributes`),a=(i?.[0]??[]).map(t=>({t:new Date(t.last_updated??t.last_changed??"").getTime(),v:Number(t.state)})).filter(t=>Number.isFinite(t.t)&&Number.isFinite(t.v));this._history=a}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("fitness_ctl");if(!a||jt.has(a.state))return this._message("mdi:arm-flex","Building your training load","Needs a bit of workout history to compute - check back after a few sessions.");const r=i("fatigue_atl"),o=i("form_tsb"),n=i("acwr"),c=o&&!jt.has(o.state)?Number(o.state):void 0,l=void 0!==c?function(t){return t>5?{colorVar:"var(--sc-good)",label:"Fresh"}:t<-20?{colorVar:"var(--sc-bad)",label:"Very fatigued"}:t<-5?{colorVar:"var(--sc-warn)",label:"Fatigued"}:{colorVar:"var(--sc-pulse)",label:"Neutral"}}(c):void 0,d=n&&!jt.has(n.state)?Number(n.state):void 0,h=void 0!==d?function(t){return t>1.3?{colorVar:"var(--sc-bad)",label:"High load - injury risk"}:t<.8?{colorVar:"var(--sc-warn)",label:"Low load"}:{colorVar:"var(--sc-good)",label:"Safe zone"}}(d):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">Training Load</div>
            <div class="subtitle">${l?l.label:"Fitness (CTL) trend"}</div>
          </div>
        </div>

        ${function(t,e,s=300,i=56){if(t.length<2)return W;const a=t.map(t=>t.v),r=Math.min(...a),o=Math.max(...a)-r||1,n=.12*i,c=i-2*n,l=s/(t.length-1),d=t.map((t,e)=>[e*l,n+c-(t.v-r)/o*c]),h=d.map(([t,e],s)=>`${0===s?"M":"L"}${t.toFixed(1)},${e.toFixed(1)}`).join(" "),u=`${h} L${s},${i} L0,${i} Z`,[p,v]=d[d.length-1];return I`
    <svg viewBox="0 0 ${s} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${u} fill=${e} fill-opacity="0.14" stroke="none"></path>
      <path d=${h} fill="none" stroke=${e} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${p} cy=${v} r="3" fill=${e}></circle>
    </svg>
  `}(this._history,"var(--sc-amber)")}

        <div class="stats three">
          ${this._stat(Number(a.state).toFixed(0),"CTL · fitness")}
          ${r?this._stat(Number(r.state).toFixed(0),"ATL · fatigue"):W}
          ${void 0!==c?this._stat(Nt(c,1),"TSB · form",l?.colorVar):W}
        </div>

        ${void 0!==d&&h?I`
              <div class="footer">
                <span class="chip" style="color:${h.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ACWR ${d.toFixed(2)} · ${h.label}
                </span>
              </div>
            `:W}
      </ha-card>
    `}_stat(t,e,s){return I`
      <div class="stat">
        <div class="stat-value" style=${s?`color:${s}`:""}>${t}</div>
        <div class="stat-label">${e}</div>
      </div>
    `}};It.styles=[xt,kt,o`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
      .footer {
        display: flex;
      }
    `],t([pt()],It.prototype,"_config",void 0),t([pt()],It.prototype,"_history",void 0),It=t([lt("suunto-training-load-card")],It);const Bt=new Set(["unknown","unavailable",""]),Wt=["var(--sc-amber)","var(--sc-pulse)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let qt=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("weekly_distance"),r=i("weekly_time"),o=i("workouts_7d"),n=i("workouts_30d"),c=i("lifetime_by_activity");if(!a&&!c)return this._message("mdi:calendar-week","No workout history yet");const l=(c?.attributes.activities??[]).slice().sort((t,e)=>e.distance_km-t.distance_km),d=l.slice(0,5),h=l.length-d.length;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">This Week &amp; Lifetime</div>
            <div class="subtitle">Last 7 days</div>
          </div>
        </div>

        ${a||r||o?I`
              <div class="stats three">
                ${a&&!Bt.has(a.state)?this._stat(Number(a.state).toFixed(1),"km","Distance"):W}
                ${r&&!Bt.has(r.state)?this._stat(Number(r.state).toFixed(1),"h","Time"):W}
                ${o&&!Bt.has(o.state)?this._stat(o.state,"","Workouts"):W}
              </div>
            `:W}

        ${d.length?I`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">Lifetime by activity</div>
                ${Pt(d.map((t,e)=>({flexGrow:t.distance_km,colorVar:Wt[e%Wt.length],title:t.activity})))}
                <div class="rows">
                  ${d.map((t,e)=>{const s=Wt[e%Wt.length];return I`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${s} 18%, transparent);color:${s}"
                        >
                          <ha-icon .icon=${St(t.activity)}></ha-icon>
                        </div>
                        <span class="name">${t.activity}</span>
                        <span class="count">${t.workouts}×</span>
                        <span class="dist">${t.distance_km.toFixed(0)} km</span>
                      </div>
                    `})}
                  ${h>0?I`<div class="row muted">+${h} more activity type${1===h?"":"s"}</div>`:W}
                </div>
              </div>
            `:W}
        ${n&&!Bt.has(n.state)?I`<div class="footer"><span class="chip">${n.state} workouts in the last 30 days</span></div>`:W}
      </ha-card>
    `}_stat(t,e,s){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:W}</div>
        <div class="stat-label">${s}</div>
      </div>
    `}};qt.styles=[xt,kt,o`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
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
      .icon-badge.tiny {
        width: 24px;
        height: 24px;
        border-radius: 7px;
      }
      .icon-badge.tiny ha-icon {
        --mdc-icon-size: 14px;
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
    `],t([pt()],qt.prototype,"_config",void 0),qt=t([lt("suunto-week-stats-card")],qt);const Gt=new Set(["unknown","unavailable",""]);let Zt=class extends wt{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(t){this._config=t,this._configuredDeviceId=t.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const t=this._resolveEntities();if("error"in t)return t.error;const{map:e}=t,s=this.hass,i=t=>e[t]?s.states[e[t]]:void 0,a=i("daily_steps"),r=i("daily_energy"),o=i("current_hr"),n=i("workout_today"),c=i("is_recovering");if(!a&&!r&&!o)return this._message("mdi:pulse","No live data yet");const l=o&&!Gt.has(o.state)?Math.round(Number(o.state)):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">Today</div>
            <div class="subtitle">Live from your watch</div>
          </div>
        </div>

        <div class="stats three">
          ${a&&!Gt.has(a.state)?this._stat(Number(a.state).toLocaleString(s.language),"","Steps"):W}
          ${r&&!Gt.has(r.state)?this._stat(Math.round(Number(r.state)).toLocaleString(s.language),"kcal","Energy"):W}
          ${void 0!==l?I`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${l}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">Heart rate</div>
                </div>
              `:W}
        </div>

        ${"on"===n?.state||"on"===c?.state?I`
              <div class="footer">
                ${"on"===n?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>Workout today</span>`:W}
                ${"on"===c?.state?I`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>Recovering</span>`:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(t,e,s){return I`
      <div class="stat">
        <div class="stat-value">${t}${e?I`<span class="unit">${e}</span>`:W}</div>
        <div class="stat-label">${s}</div>
      </div>
    `}};Zt.styles=[xt,kt,o`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
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
    `],t([pt()],Zt.prototype,"_config",void 0),Zt=t([lt("suunto-today-card")],Zt),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0}),console.info("%c SUUNTO-CARDS %c 7 cards loaded ","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
