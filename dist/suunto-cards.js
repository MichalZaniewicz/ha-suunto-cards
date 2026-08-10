function e(e,t,a,i){var s,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,a,n):s(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new r(a,e,i)},o=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,v=m.trustedTypes,g=v?v.emptyScript:"",_=m.reactiveElementPolyfillSupport,y=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);s?.call(this,t),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(a)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:f).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i;const r=s.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,a,i=!1,s){if(void 0!==e){const r=this.constructor;if(!1===i&&(s=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??b)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,_?.({ReactiveElement:k}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=e=>e,S=$.trustedTypes,z=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,T=`<${E}>`,N=document,j=()=>N.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,R="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,V=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,L=/"/g,q=/^(?:script|style|textarea|title)$/i,B=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),I=B(1),G=B(2),U=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,Z=N.createTreeWalker(N,129);function J(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const Q=(e,t)=>{const a=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=D;for(let t=0;t<a;t++){const a=e[t];let o,c,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,c=n.exec(a),null!==c);)d=n.lastIndex,n===D?"!--"===c[1]?n=F:void 0!==c[1]?n=P:void 0!==c[2]?(q.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=V):void 0!==c[3]&&(n=V):n===V?">"===c[0]?(n=s??D,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,o=c[1],n=void 0===c[3]?V:'"'===c[3]?L:O):n===L||n===O?n=V:n===F||n===P?n=D:(n=V,s=void 0);const u=n===V&&e[t+1].startsWith("/>")?" ":"";r+=n===D?a+T:l>=0?(i.push(o),a.slice(0,l)+A+a.slice(l)+C+u):a+C+(-2===l?t:u)}return[J(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[c,l]=Q(e,t);if(this.el=Y.createElement(c,a),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Z.nextNode())&&o.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=l[r++],a=i.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:n[2],strings:a,ctor:"."===n[1]?ie:"?"===n[1]?se:"@"===n[1]?re:ae}),i.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(q.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],j()),Z.nextNode(),o.push({type:2,index:++s});i.append(e[t],j())}}}else if(8===i.nodeType)if(i.data===E)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)o.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const a=N.createElement("template");return a.innerHTML=e,a}}function X(e,t,a=e,i){if(t===U)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const r=H(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);Z.currentNode=i;let s=Z.nextNode(),r=0,n=0,o=a[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new te(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new ne(s,this,e)),this._$AV.push(t),o=a[++n]}r!==o?.index&&(s=Z.nextNode(),r++)}return Z.currentNode=N,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),H(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Y.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Y(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new te(this.O(j()),this.O(j()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=W}_$AI(e,t=this,a,i){const s=this.strings;let r=!1;if(void 0===s)e=X(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==U,r&&(this._$AH=e);else{const i=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=X(this,i[a+n],t,n),o===U&&(o=this._$AH[n]),r||=!H(o)||o!==this._$AH[n],o===W?e=W:e!==W&&(e+=(o??"")+s[n+1]),this._$AH[n]=o}r&&!i&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class se extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class re extends ae{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??W)===U)return;const a=this._$AH,i=e===W&&a!==W||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==W&&(a===W||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const oe=$.litHtmlPolyfillSupport;oe?.(Y,te),($.litHtmlVersions??=[]).push("3.3.3");const ce=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new te(t.insertBefore(j(),e),e,void 0,a??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}le._$litElement$=!0,le.finalized=!0,ce.litElementHydrateSupport?.({LitElement:le});const de=ce.litElementPolyfillSupport;de?.({LitElement:le}),(ce.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b},pe=(e=he,t,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];t.call(this,a),this.requestUpdate(i,s,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return(t,a)=>"object"==typeof a?pe(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ve(e){return me({...e,state:!0,attribute:!1})}var ge,_e;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ge||(ge={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_e||(_e={}));var ye=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s};const fe="suunto_app";class be extends Error{constructor(e,t){super(e),this.code=e,this.deviceId=t}}function we(e){const t=new Set;for(const a of Object.values(e.entities??{}))a.platform===fe&&a.device_id&&t.add(a.device_id);return[...t]}function ke(e,t){const a={};for(const i of Object.values(e.entities??{}))i.device_id===t&&i.platform===fe&&i.translation_key&&(a[i.translation_key]=i.entity_id);return a}const $e={"stat.distance":"Distance","stat.duration":"Duration","stat.avg_speed":"Avg speed","stat.avg_pace":"Avg pace","stat.avg_hr":"Avg HR","stat.max_hr":"Max HR","stat.training_effect":"Training effect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Feeling","stat.energy":"Energy","stat.time":"Time","stat.workouts":"Workouts","stat.steps":"Steps","stat.heart_rate":"Heart rate","stat.quality":"Quality","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Resting HR","stat.resting_hr_delta":"Resting HR ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stress level","stat.recovery_window":"Recovery window","stat.ctl":"CTL · fitness","stat.atl":"ATL · fatigue","stat.tsb":"TSB · form","stat.readiness":"Readiness","stat.recovery_balance":"Recovery balance","card.hr_zones.title":"Heart Rate Zones","card.hr_zones.last_workout":"Last workout","card.sleep_readiness.title":"Sleep & Readiness","card.sleep_readiness.subtitle_no_wake":"{duration} slept","card.sleep_readiness.subtitle_with_wake":"{duration} slept · woke {time}","card.recovery.title":"Recovery","card.training_load.title":"Training Load","card.training_load.subtitle_fallback":"Fitness (CTL) trend","card.week_stats.title":"This Week & Lifetime","card.week_stats.subtitle":"Last 7 days","card.week_stats.lifetime_title":"Lifetime by activity","card.today.title":"Today","card.today.subtitle":"Live from your watch","empty.last_workout.title":"No recent workout","empty.last_workout.subtitle":"Sync your watch with the Suunto app to see it here.","empty.hr_zones.title":"No zone data","empty.hr_zones.subtitle":"Your next outdoor workout with a heart-rate strap will fill this in.","empty.sleep_readiness.title":"No sleep data yet","empty.sleep_readiness.subtitle":"Wear your watch to bed to see it here.","empty.recovery.title":"No recovery data yet","empty.training_load.title":"Building your training load","empty.training_load.subtitle":"Needs a bit of workout history to compute - check back after a few sessions.","empty.week_stats.title":"No workout history yet","empty.today.title":"No live data yet","empty.loading":"Loading...","empty.generic_error":"Could not load Suunto data.","error.no_device":"No Suunto device found - is the suunto_app integration set up?","error.multiple_devices":'Multiple Suunto devices found - set "device_id" in the card configuration.',"error.device_missing":'Configured device "{device}" has no suunto_app entities.',"band.readiness.great":"Great","band.readiness.fair":"Fair","band.readiness.low":"Low","band.recovery.well":"Well recovered","band.recovery.partial":"Partially recovered","band.recovery.low":"Low recovery","band.recovery.fully":"Fully recovered","band.recovery.recovering":"Recovering · {time} left","band.hrv.low":"HRV low","band.hrv.high":"HRV high","band.hrv.balanced":"HRV balanced","band.form.fresh":"Fresh","band.form.neutral":"Neutral","band.form.fatigued":"Fatigued","band.form.very_fatigued":"Very fatigued","band.acwr.safe":"Safe zone","band.acwr.low":"Low load","band.acwr.high":"High load - injury risk","chip.workout_logged_today":"Workout logged today","chip.workout_today":"Workout today","chip.recovering":"Recovering","chip.nap":"{minutes} min nap","chip.nap_earlier":"{minutes} min nap (earlier)","chip.workouts_30d":"{count} workouts in the last 30 days","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} more activity type","chip.more_activity_other":"+{count} more activity types","achievement.count_one":"{count} achievement","achievement.count_other":"{count} achievements","achievement.rank":"Rank #{rank} on this route","label.zone":"Zone {n}","label.deep":"Deep","label.light":"Light","label.rem":"REM","editor.auto_detect":"This card auto-detects your Suunto device - no configuration needed.","editor.pick_device":"Multiple Suunto devices were found - pick which one this card should read.","editor.device_label":"Suunto device","card.lifetime.title":"Lifetime Totals","card.lifetime.subtitle":"Since you started","stat.active_days":"Active days","empty.lifetime.title":"No lifetime data yet","card.recent_workouts.title":"Recent Workouts","empty.recent_workouts.title":"No recent workouts","card.elevation.title":"Elevation & Climbing","stat.ascent":"Ascent","stat.descent":"Descent","stat.ascent_time":"Ascent time","stat.descent_time":"Descent time","stat.min_altitude":"Min altitude","stat.max_altitude":"Max altitude","stat.ascent_rate":"Ascent rate","empty.elevation.title":"No elevation data","empty.elevation.subtitle":"Only outdoor workouts with a barometer record this.","card.location.title":"Start Location","location.open_in_maps":"Open in Maps","empty.location.title":"No location data","empty.location.subtitle":"Indoor workouts have no GPS start point.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Estimated VO2max","stat.fitness_age":"Fitness age","fitness.measured":"Measured {time} · {activity}","empty.fitness.title":"No fitness data yet","empty.fitness.subtitle":"Suunto computes this from running or walking workouts only.","card.pmc.title":"Performance Management","card.pmc.subtitle":"90-day trend","card.recovery_trends.title":"Recovery Trends","card.recovery_trends.subtitle":"30-day baseline","empty.recovery_trends.title":"No recovery trend data yet","card.weekly_volume.title":"Weekly Volume","card.weekly_volume.subtitle":"Last 12 weeks","empty.weekly_volume.title":"No weekly volume data yet","stat.average":"Average","stat.total":"Total","card.hr_curve.title":"Heart Rate Curve","card.hr_curve.subtitle":"Last 24 hours","stat.hr_now":"Now","stat.hr_min":"Today's min","stat.hr_max":"Today's max","empty.hr_curve.title":"No live HR data yet","empty.hr_curve.subtitle":"Wear your watch and sync to see today's curve here.","card.sleep_trends.title":"Sleep Trends","card.sleep_trends.subtitle":"Last 30 nights","empty.sleep_trends.title":"No sleep trend data yet","card.weekly_goal.title":"Weekly Goal","card.weekly_goal.subtitle":"{value} of {goal} km","empty.weekly_goal.title":"No weekly distance yet","editor.goal_label":"Weekly goal (km)","card.streak.title":"Activity Streak","streak.days_one":"{count} day streak","streak.days_other":"{count} days streak","streak.none":"No active streak - get moving today","empty.streak.title":"No workout history yet","just_finished.title":"Nice work!","just_finished.idle.title":"Waiting for your next workout","just_finished.idle.subtitle":"This lights up right after your watch syncs a new one.","empty.just_finished.title":"No recent workout"},xe={en:$e,pl:{"stat.distance":"Dystans","stat.duration":"Czas trwania","stat.avg_speed":"Śr. prędkość","stat.avg_pace":"Śr. tempo","stat.avg_hr":"Śr. tętno","stat.max_hr":"Maks. tętno","stat.training_effect":"Efekt treningowy","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Samopoczucie","stat.energy":"Energia","stat.time":"Czas","stat.workouts":"Treningi","stat.steps":"Kroki","stat.heart_rate":"Tętno","stat.quality":"Jakość","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Tętno spocz.","stat.resting_hr_delta":"Tętno spocz. ({delta})","stat.spo2":"SpO2","stat.stress_level":"Poziom stresu","stat.recovery_window":"Czas regeneracji","stat.ctl":"CTL · forma","stat.atl":"ATL · zmęczenie","stat.tsb":"TSB · forma","stat.readiness":"Gotowość","stat.recovery_balance":"Bilans regeneracji","card.hr_zones.title":"Strefy tętna","card.hr_zones.last_workout":"Ostatni trening","card.sleep_readiness.title":"Sen i gotowość","card.sleep_readiness.subtitle_no_wake":"{duration} snu","card.sleep_readiness.subtitle_with_wake":"{duration} snu · pobudka {time}","card.recovery.title":"Regeneracja","card.training_load.title":"Obciążenie treningowe","card.training_load.subtitle_fallback":"Trend formy (CTL)","card.week_stats.title":"Ten tydzień i statystyki życiowe","card.week_stats.subtitle":"Ostatnie 7 dni","card.week_stats.lifetime_title":"Statystyki życiowe wg dyscypliny","card.today.title":"Dziś","card.today.subtitle":"Na żywo z zegarka","empty.last_workout.title":"Brak ostatniego treningu","empty.last_workout.subtitle":"Zsynchronizuj zegarek z aplikacją Suunto, aby zobaczyć go tutaj.","empty.hr_zones.title":"Brak danych o strefach","empty.hr_zones.subtitle":"Twój następny trening na zewnątrz z pasem do pomiaru tętna uzupełni te dane.","empty.sleep_readiness.title":"Brak jeszcze danych o śnie","empty.sleep_readiness.subtitle":"Noś zegarek podczas snu, aby zobaczyć dane tutaj.","empty.recovery.title":"Brak jeszcze danych o regeneracji","empty.training_load.title":"Obliczanie obciążenia treningowego","empty.training_load.subtitle":"Potrzebna jest historia treningów do wyliczenia - sprawdź ponownie po kilku sesjach.","empty.week_stats.title":"Brak jeszcze historii treningów","empty.today.title":"Brak jeszcze danych na żywo","empty.loading":"Wczytywanie...","empty.generic_error":"Nie udało się wczytać danych Suunto.","error.no_device":"Nie znaleziono urządzenia Suunto - czy integracja suunto_app jest skonfigurowana?","error.multiple_devices":'Znaleziono wiele urządzeń Suunto - ustaw "device_id" w konfiguracji karty.',"error.device_missing":'Skonfigurowane urządzenie "{device}" nie ma encji suunto_app.',"band.readiness.great":"Świetna","band.readiness.fair":"Przeciętna","band.readiness.low":"Niska","band.recovery.well":"Dobrze zregenerowany","band.recovery.partial":"Częściowo zregenerowany","band.recovery.low":"Niska regeneracja","band.recovery.fully":"W pełni zregenerowany","band.recovery.recovering":"Regeneracja · pozostało {time}","band.hrv.low":"HRV niskie","band.hrv.high":"HRV wysokie","band.hrv.balanced":"HRV wyrównane","band.form.fresh":"Wypoczęty","band.form.neutral":"Neutralna","band.form.fatigued":"Zmęczony","band.form.very_fatigued":"Bardzo zmęczony","band.acwr.safe":"Strefa bezpieczna","band.acwr.low":"Niskie obciążenie","band.acwr.high":"Wysokie obciążenie - ryzyko kontuzji","chip.workout_logged_today":"Trening zarejestrowany dziś","chip.workout_today":"Trening dziś","chip.recovering":"Regeneracja","chip.nap":"{minutes} min drzemki","chip.nap_earlier":"{minutes} min drzemki (wcześniej)","chip.workouts_30d":"{count} treningów w ciągu ostatnich 30 dni","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} inna dyscyplina","chip.more_activity_other":"+{count} inne dyscypliny","achievement.count_one":"{count} osiągnięcie","achievement.count_other":"{count} osiągnięcia","achievement.rank":"Miejsce #{rank} na tej trasie","label.zone":"Strefa {n}","label.deep":"Głęboki","label.light":"Płytki","label.rem":"REM","editor.auto_detect":"Ta karta automatycznie wykrywa Twoje urządzenie Suunto - konfiguracja nie jest potrzebna.","editor.pick_device":"Znaleziono wiele urządzeń Suunto - wybierz, z którego ta karta ma korzystać.","editor.device_label":"Urządzenie Suunto","card.lifetime.title":"Statystyki życiowe","card.lifetime.subtitle":"Od początku","stat.active_days":"Aktywne dni","empty.lifetime.title":"Brak jeszcze danych życiowych","card.recent_workouts.title":"Ostatnie treningi","empty.recent_workouts.title":"Brak ostatnich treningów","card.elevation.title":"Przewyższenia i podejścia","stat.ascent":"Podejście","stat.descent":"Zejście","stat.ascent_time":"Czas podejścia","stat.descent_time":"Czas zejścia","stat.min_altitude":"Min. wysokość","stat.max_altitude":"Maks. wysokość","stat.ascent_rate":"Tempo podejścia","empty.elevation.title":"Brak danych o przewyższeniach","empty.elevation.subtitle":"Rejestrują to tylko treningi na zewnątrz z barometrem.","card.location.title":"Lokalizacja startu","location.open_in_maps":"Otwórz w Mapach","empty.location.title":"Brak danych lokalizacji","empty.location.subtitle":"Treningi w pomieszczeniu nie mają punktu startu GPS.","card.fitness.title":"Sprawność","stat.vo2max":"VO2max","stat.estimated_vo2max":"Szacowane VO2max","stat.fitness_age":"Wiek sprawnościowy","fitness.measured":"Zmierzono {time} · {activity}","empty.fitness.title":"Brak jeszcze danych o sprawności","empty.fitness.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","card.pmc.title":"Zarządzanie formą","card.pmc.subtitle":"Trend 90-dniowy","card.recovery_trends.title":"Trendy regeneracji","card.recovery_trends.subtitle":"Poziom bazowy 30 dni","empty.recovery_trends.title":"Brak jeszcze danych o trendach regeneracji","card.weekly_volume.title":"Wolumen tygodniowy","card.weekly_volume.subtitle":"Ostatnie 12 tygodni","empty.weekly_volume.title":"Brak jeszcze danych o wolumenie tygodniowym","stat.average":"Średnia","stat.total":"Suma","card.hr_curve.title":"Krzywa tętna","card.hr_curve.subtitle":"Ostatnie 24 godziny","stat.hr_now":"Teraz","stat.hr_min":"Min. dzisiaj","stat.hr_max":"Maks. dzisiaj","empty.hr_curve.title":"Brak jeszcze danych o tętnie na żywo","empty.hr_curve.subtitle":"Noś zegarek i zsynchronizuj go, aby zobaczyć tu dzisiejszą krzywą.","card.sleep_trends.title":"Trendy snu","card.sleep_trends.subtitle":"Ostatnie 30 nocy","empty.sleep_trends.title":"Brak jeszcze danych o trendach snu","card.weekly_goal.title":"Cel tygodniowy","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Brak jeszcze danych o dystansie tygodniowym","editor.goal_label":"Cel tygodniowy (km)","card.streak.title":"Seria aktywności","streak.days_one":"{count} dzień serii","streak.days_other":"{count} dni serii","streak.none":"Brak aktywnej serii - zacznij dziś","empty.streak.title":"Brak jeszcze historii treningów","just_finished.title":"Świetna robota!","just_finished.idle.title":"Czekanie na kolejny trening","just_finished.idle.subtitle":"Ta karta zaświeci się zaraz po synchronizacji nowego treningu.","empty.just_finished.title":"Brak ostatniego treningu"},de:{"stat.distance":"Distanz","stat.duration":"Dauer","stat.avg_speed":"Ø-Geschwindigkeit","stat.avg_pace":"Ø-Pace","stat.avg_hr":"Ø-Puls","stat.max_hr":"Max. Puls","stat.training_effect":"Trainingseffekt","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gefühl","stat.energy":"Energie","stat.time":"Zeit","stat.workouts":"Workouts","stat.steps":"Schritte","stat.heart_rate":"Herzfrequenz","stat.quality":"Qualität","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Ruhepuls","stat.resting_hr_delta":"Ruhepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresslevel","stat.recovery_window":"Erholungsfenster","stat.ctl":"CTL · Fitness","stat.atl":"ATL · Ermüdung","stat.tsb":"TSB · Form","stat.readiness":"Bereitschaft","stat.recovery_balance":"Erholungsbalance","card.hr_zones.title":"Herzfrequenzzonen","card.hr_zones.last_workout":"Letztes Training","card.sleep_readiness.title":"Schlaf & Bereitschaft","card.sleep_readiness.subtitle_no_wake":"{duration} geschlafen","card.sleep_readiness.subtitle_with_wake":"{duration} geschlafen · aufgewacht um {time}","card.recovery.title":"Erholung","card.training_load.title":"Trainingsbelastung","card.training_load.subtitle_fallback":"Fitness-Trend (CTL)","card.week_stats.title":"Diese Woche & Gesamt","card.week_stats.subtitle":"Letzte 7 Tage","card.week_stats.lifetime_title":"Gesamt nach Sportart","card.today.title":"Heute","card.today.subtitle":"Live von deiner Uhr","empty.last_workout.title":"Kein aktuelles Training","empty.last_workout.subtitle":"Synchronisiere deine Uhr mit der Suunto-App, um es hier zu sehen.","empty.hr_zones.title":"Keine Zonendaten","empty.hr_zones.subtitle":"Dein nächstes Outdoor-Training mit Brustgurt füllt das hier aus.","empty.sleep_readiness.title":"Noch keine Schlafdaten","empty.sleep_readiness.subtitle":"Trage deine Uhr beim Schlafen, um sie hier zu sehen.","empty.recovery.title":"Noch keine Erholungsdaten","empty.training_load.title":"Trainingsbelastung wird berechnet","empty.training_load.subtitle":"Benötigt etwas Trainingshistorie zur Berechnung - schau nach ein paar Einheiten wieder vorbei.","empty.week_stats.title":"Noch keine Trainingshistorie","empty.today.title":"Noch keine Live-Daten","empty.loading":"Wird geladen...","empty.generic_error":"Suunto-Daten konnten nicht geladen werden.","error.no_device":"Kein Suunto-Gerät gefunden - ist die suunto_app-Integration eingerichtet?","error.multiple_devices":'Mehrere Suunto-Geräte gefunden - lege "device_id" in der Kartenkonfiguration fest.',"error.device_missing":'Konfiguriertes Gerät "{device}" hat keine suunto_app-Entitäten.',"band.readiness.great":"Sehr gut","band.readiness.fair":"Mittel","band.readiness.low":"Niedrig","band.recovery.well":"Gut erholt","band.recovery.partial":"Teilweise erholt","band.recovery.low":"Geringe Erholung","band.recovery.fully":"Vollständig erholt","band.recovery.recovering":"Erholung läuft · {time} verbleibend","band.hrv.low":"HRV niedrig","band.hrv.high":"HRV hoch","band.hrv.balanced":"HRV ausgeglichen","band.form.fresh":"Frisch","band.form.neutral":"Neutral","band.form.fatigued":"Ermüdet","band.form.very_fatigued":"Sehr ermüdet","band.acwr.safe":"Sicherer Bereich","band.acwr.low":"Geringe Belastung","band.acwr.high":"Hohe Belastung - Verletzungsrisiko","chip.workout_logged_today":"Heute Training erfasst","chip.workout_today":"Training heute","chip.recovering":"Erholung","chip.nap":"{minutes} Min. Nickerchen","chip.nap_earlier":"{minutes} Min. Nickerchen (früher)","chip.workouts_30d":"{count} Trainings in den letzten 30 Tagen","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} weitere Sportart","chip.more_activity_other":"+{count} weitere Sportarten","achievement.count_one":"{count} Erfolg","achievement.count_other":"{count} Erfolge","achievement.rank":"Platz #{rank} auf dieser Strecke","label.zone":"Zone {n}","label.deep":"Tiefschlaf","label.light":"Leichtschlaf","label.rem":"REM","editor.auto_detect":"Diese Karte erkennt dein Suunto-Gerät automatisch - keine Konfiguration nötig.","editor.pick_device":"Mehrere Suunto-Geräte gefunden - wähle aus, welches diese Karte verwenden soll.","editor.device_label":"Suunto-Gerät","card.lifetime.title":"Gesamtstatistik","card.lifetime.subtitle":"Seit Beginn","stat.active_days":"Aktive Tage","empty.lifetime.title":"Noch keine Gesamtdaten","card.recent_workouts.title":"Letzte Trainings","empty.recent_workouts.title":"Keine letzten Trainings","card.elevation.title":"Höhenmeter & Aufstieg","stat.ascent":"Aufstieg","stat.descent":"Abstieg","stat.ascent_time":"Aufstiegszeit","stat.descent_time":"Abstiegszeit","stat.min_altitude":"Min. Höhe","stat.max_altitude":"Max. Höhe","stat.ascent_rate":"Aufstiegsrate","empty.elevation.title":"Keine Höhendaten","empty.elevation.subtitle":"Nur Outdoor-Trainings mit Barometer erfassen dies.","card.location.title":"Startort","location.open_in_maps":"In Karten öffnen","empty.location.title":"Keine Standortdaten","empty.location.subtitle":"Indoor-Trainings haben keinen GPS-Startpunkt.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Geschätztes VO2max","stat.fitness_age":"Fitnessalter","fitness.measured":"Gemessen {time} · {activity}","empty.fitness.title":"Noch keine Fitnessdaten","empty.fitness.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","card.pmc.title":"Leistungsmanagement","card.pmc.subtitle":"90-Tage-Trend","card.recovery_trends.title":"Erholungstrends","card.recovery_trends.subtitle":"30-Tage-Basiswert","empty.recovery_trends.title":"Noch keine Erholungstrend-Daten","card.weekly_volume.title":"Wöchentliches Volumen","card.weekly_volume.subtitle":"Letzte 12 Wochen","empty.weekly_volume.title":"Noch keine Daten zum wöchentlichen Volumen","stat.average":"Durchschnitt","stat.total":"Gesamt","card.hr_curve.title":"Herzfrequenz-Kurve","card.hr_curve.subtitle":"Letzte 24 Stunden","stat.hr_now":"Jetzt","stat.hr_min":"Tagesminimum","stat.hr_max":"Tagesmaximum","empty.hr_curve.title":"Noch keine Live-Herzfrequenzdaten","empty.hr_curve.subtitle":"Trage deine Uhr und synchronisiere sie, um die heutige Kurve hier zu sehen.","card.sleep_trends.title":"Schlaftrends","card.sleep_trends.subtitle":"Letzte 30 Nächte","empty.sleep_trends.title":"Noch keine Schlaftrend-Daten","card.weekly_goal.title":"Wochenziel","card.weekly_goal.subtitle":"{value} von {goal} km","empty.weekly_goal.title":"Noch keine wöchentliche Distanz","editor.goal_label":"Wochenziel (km)","card.streak.title":"Aktivitätsserie","streak.days_one":"{count} Tag in Folge","streak.days_other":"{count} Tage in Folge","streak.none":"Keine aktive Serie - starte heute","empty.streak.title":"Noch keine Trainingshistorie","just_finished.title":"Gut gemacht!","just_finished.idle.title":"Warten auf dein nächstes Training","just_finished.idle.subtitle":"Diese Karte leuchtet auf, sobald deine Uhr ein neues Training synchronisiert.","empty.just_finished.title":"Kein aktuelles Training"},pt:{"stat.distance":"Distância","stat.duration":"Duração","stat.avg_speed":"Vel. média","stat.avg_pace":"Ritmo médio","stat.avg_hr":"FC média","stat.max_hr":"FC máx.","stat.training_effect":"Efeito do treino","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensação","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Treinos","stat.steps":"Passos","stat.heart_rate":"Frequência cardíaca","stat.quality":"Qualidade","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repouso","stat.resting_hr_delta":"FC repouso ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nível de stress","stat.recovery_window":"Janela de recuperação","stat.ctl":"CTL · condição","stat.atl":"ATL · fadiga","stat.tsb":"TSB · forma","stat.readiness":"Prontidão","stat.recovery_balance":"Equilíbrio de recuperação","card.hr_zones.title":"Zonas de Frequência Cardíaca","card.hr_zones.last_workout":"Último treino","card.sleep_readiness.title":"Sono e Prontidão","card.sleep_readiness.subtitle_no_wake":"{duration} de sono","card.sleep_readiness.subtitle_with_wake":"{duration} de sono · acordou às {time}","card.recovery.title":"Recuperação","card.training_load.title":"Carga de Treino","card.training_load.subtitle_fallback":"Tendência de condição (CTL)","card.week_stats.title":"Esta Semana e Histórico Total","card.week_stats.subtitle":"Últimos 7 dias","card.week_stats.lifetime_title":"Total por atividade","card.today.title":"Hoje","card.today.subtitle":"Ao vivo do teu relógio","empty.last_workout.title":"Sem treino recente","empty.last_workout.subtitle":"Sincroniza o teu relógio com a app Suunto para o veres aqui.","empty.hr_zones.title":"Sem dados de zonas","empty.hr_zones.subtitle":"O teu próximo treino ao ar livre com cinta cardíaca vai preencher isto.","empty.sleep_readiness.title":"Ainda sem dados de sono","empty.sleep_readiness.subtitle":"Usa o relógio para dormir para veres isto aqui.","empty.recovery.title":"Ainda sem dados de recuperação","empty.training_load.title":"A calcular a carga de treino","empty.training_load.subtitle":"Precisa de algum histórico de treinos para calcular - volta a verificar após algumas sessões.","empty.week_stats.title":"Ainda sem histórico de treinos","empty.today.title":"Ainda sem dados em direto","empty.loading":"A carregar...","empty.generic_error":"Não foi possível carregar os dados Suunto.","error.no_device":"Nenhum dispositivo Suunto encontrado - a integração suunto_app está configurada?","error.multiple_devices":'Foram encontrados vários dispositivos Suunto - define "device_id" na configuração do cartão.',"error.device_missing":'O dispositivo configurado "{device}" não tem entidades suunto_app.',"band.readiness.great":"Ótima","band.readiness.fair":"Razoável","band.readiness.low":"Baixa","band.recovery.well":"Bem recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baixa recuperação","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"A recuperar · faltam {time}","band.hrv.low":"HRV baixa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Descansado","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muito fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baixa","band.acwr.high":"Carga alta - risco de lesão","chip.workout_logged_today":"Treino registado hoje","chip.workout_today":"Treino hoje","chip.recovering":"A recuperar","chip.nap":"{minutes} min de sesta","chip.nap_earlier":"{minutes} min de sesta (mais cedo)","chip.workouts_30d":"{count} treinos nos últimos 30 dias","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} outra modalidade","chip.more_activity_other":"+{count} outras modalidades","achievement.count_one":"{count} conquista","achievement.count_other":"{count} conquistas","achievement.rank":"Posição #{rank} nesta rota","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Leve","label.rem":"REM","editor.auto_detect":"Este cartão deteta automaticamente o teu dispositivo Suunto - não é necessária configuração.","editor.pick_device":"Foram encontrados vários dispositivos Suunto - escolhe qual este cartão deve usar.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totais Vitalícios","card.lifetime.subtitle":"Desde o início","stat.active_days":"Dias ativos","empty.lifetime.title":"Ainda sem dados vitalícios","card.recent_workouts.title":"Treinos Recentes","empty.recent_workouts.title":"Sem treinos recentes","card.elevation.title":"Altitude e Subidas","stat.ascent":"Subida","stat.descent":"Descida","stat.ascent_time":"Tempo de subida","stat.descent_time":"Tempo de descida","stat.min_altitude":"Altitude mín.","stat.max_altitude":"Altitude máx.","stat.ascent_rate":"Taxa de subida","empty.elevation.title":"Sem dados de altitude","empty.elevation.subtitle":"Só os treinos ao ar livre com barómetro registam isto.","card.location.title":"Localização de Início","location.open_in_maps":"Abrir no Maps","empty.location.title":"Sem dados de localização","empty.location.subtitle":"Os treinos em interiores não têm ponto de início GPS.","card.fitness.title":"Condição Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max estimado","stat.fitness_age":"Idade de aptidão física","fitness.measured":"Medido há {time} · {activity}","empty.fitness.title":"Ainda sem dados de condição física","empty.fitness.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","card.pmc.title":"Gestão de Desempenho","card.pmc.subtitle":"Tendência de 90 dias","card.recovery_trends.title":"Tendências de Recuperação","card.recovery_trends.subtitle":"Referência de 30 dias","empty.recovery_trends.title":"Ainda sem dados de tendências de recuperação","card.weekly_volume.title":"Volume Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Ainda sem dados de volume semanal","stat.average":"Média","stat.total":"Total","card.hr_curve.title":"Curva de Frequência Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Agora","stat.hr_min":"Mín. de hoje","stat.hr_max":"Máx. de hoje","empty.hr_curve.title":"Ainda sem dados de FC em direto","empty.hr_curve.subtitle":"Usa e sincroniza o teu relógio para veres aqui a curva de hoje.","card.sleep_trends.title":"Tendências de Sono","card.sleep_trends.subtitle":"Últimas 30 noites","empty.sleep_trends.title":"Ainda sem dados de tendências de sono","card.weekly_goal.title":"Meta Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Ainda sem distância semanal","editor.goal_label":"Meta semanal (km)","card.streak.title":"Sequência de Atividade","streak.days_one":"{count} dia de sequência","streak.days_other":"{count} dias de sequência","streak.none":"Sem sequência ativa - começa hoje","empty.streak.title":"Ainda sem histórico de treinos","just_finished.title":"Bom trabalho!","just_finished.idle.title":"À espera do teu próximo treino","just_finished.idle.subtitle":"Este cartão acende assim que o teu relógio sincronizar um treino novo.","empty.just_finished.title":"Sem treino recente"},fr:{"stat.distance":"Distance","stat.duration":"Durée","stat.avg_speed":"Vitesse moy.","stat.avg_pace":"Allure moy.","stat.avg_hr":"FC moy.","stat.max_hr":"FC max","stat.training_effect":"Effet d'entraînement","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Ressenti","stat.energy":"Énergie","stat.time":"Temps","stat.workouts":"Séances","stat.steps":"Pas","stat.heart_rate":"Fréquence cardiaque","stat.quality":"Qualité","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repos","stat.resting_hr_delta":"FC repos ({delta})","stat.spo2":"SpO2","stat.stress_level":"Niveau de stress","stat.recovery_window":"Fenêtre de récupération","stat.ctl":"CTL · forme","stat.atl":"ATL · fatigue","stat.tsb":"TSB · forme","stat.readiness":"Préparation","stat.recovery_balance":"Équilibre de récupération","card.hr_zones.title":"Zones de Fréquence Cardiaque","card.hr_zones.last_workout":"Dernière séance","card.sleep_readiness.title":"Sommeil et Préparation","card.sleep_readiness.subtitle_no_wake":"{duration} de sommeil","card.sleep_readiness.subtitle_with_wake":"{duration} de sommeil · réveil à {time}","card.recovery.title":"Récupération","card.training_load.title":"Charge d'Entraînement","card.training_load.subtitle_fallback":"Tendance de forme (CTL)","card.week_stats.title":"Cette Semaine et Cumul Total","card.week_stats.subtitle":"7 derniers jours","card.week_stats.lifetime_title":"Cumul par activité","card.today.title":"Aujourd'hui","card.today.subtitle":"En direct de ta montre","empty.last_workout.title":"Aucune séance récente","empty.last_workout.subtitle":"Synchronise ta montre avec l'appli Suunto pour la voir ici.","empty.hr_zones.title":"Aucune donnée de zone","empty.hr_zones.subtitle":"Ta prochaine séance en extérieur avec ceinture cardiaque remplira ceci.","empty.sleep_readiness.title":"Pas encore de données de sommeil","empty.sleep_readiness.subtitle":"Porte ta montre pour dormir afin de le voir ici.","empty.recovery.title":"Pas encore de données de récupération","empty.training_load.title":"Calcul de la charge d'entraînement","empty.training_load.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé - reviens après quelques séances.","empty.week_stats.title":"Pas encore d'historique d'entraînement","empty.today.title":"Pas encore de données en direct","empty.loading":"Chargement...","empty.generic_error":"Impossible de charger les données Suunto.","error.no_device":"Aucun appareil Suunto trouvé - l'intégration suunto_app est-elle configurée ?","error.multiple_devices":'Plusieurs appareils Suunto trouvés - définis "device_id" dans la configuration de la carte.',"error.device_missing":"L'appareil configuré \"{device}\" n'a aucune entité suunto_app.","band.readiness.great":"Excellente","band.readiness.fair":"Correcte","band.readiness.low":"Faible","band.recovery.well":"Bien récupéré","band.recovery.partial":"Partiellement récupéré","band.recovery.low":"Faible récupération","band.recovery.fully":"Entièrement récupéré","band.recovery.recovering":"Récupération · {time} restant","band.hrv.low":"HRV basse","band.hrv.high":"HRV élevée","band.hrv.balanced":"HRV équilibrée","band.form.fresh":"Frais","band.form.neutral":"Neutre","band.form.fatigued":"Fatigué","band.form.very_fatigued":"Très fatigué","band.acwr.safe":"Zone sûre","band.acwr.low":"Charge faible","band.acwr.high":"Charge élevée - risque de blessure","chip.workout_logged_today":"Séance enregistrée aujourd'hui","chip.workout_today":"Séance aujourd'hui","chip.recovering":"Récupération","chip.nap":"{minutes} min de sieste","chip.nap_earlier":"{minutes} min de sieste (plus tôt)","chip.workouts_30d":"{count} séances au cours des 30 derniers jours","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} autre activité","chip.more_activity_other":"+{count} autres activités","achievement.count_one":"{count} exploit","achievement.count_other":"{count} exploits","achievement.rank":"Rang #{rank} sur cet itinéraire","label.zone":"Zone {n}","label.deep":"Profond","label.light":"Léger","label.rem":"REM","editor.auto_detect":"Cette carte détecte automatiquement ton appareil Suunto - aucune configuration nécessaire.","editor.pick_device":"Plusieurs appareils Suunto trouvés - choisis celui que cette carte doit utiliser.","editor.device_label":"Appareil Suunto","card.lifetime.title":"Cumul Total","card.lifetime.subtitle":"Depuis le début","stat.active_days":"Jours actifs","empty.lifetime.title":"Pas encore de cumul total","card.recent_workouts.title":"Séances Récentes","empty.recent_workouts.title":"Aucune séance récente","card.elevation.title":"Dénivelé et Montées","stat.ascent":"Dénivelé positif","stat.descent":"Dénivelé négatif","stat.ascent_time":"Temps de montée","stat.descent_time":"Temps de descente","stat.min_altitude":"Altitude min.","stat.max_altitude":"Altitude max.","stat.ascent_rate":"Vitesse ascensionnelle","empty.elevation.title":"Aucune donnée d'altitude","empty.elevation.subtitle":"Seules les séances en extérieur avec un altimètre enregistrent ceci.","card.location.title":"Lieu de Départ","location.open_in_maps":"Ouvrir dans Maps","empty.location.title":"Aucune donnée de localisation","empty.location.subtitle":"Les séances en intérieur n'ont pas de point de départ GPS.","card.fitness.title":"Forme Physique","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max estimé","stat.fitness_age":"Âge physique","fitness.measured":"Mesuré il y a {time} · {activity}","empty.fitness.title":"Pas encore de données de forme physique","empty.fitness.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","card.pmc.title":"Gestion de la Performance","card.pmc.subtitle":"Tendance sur 90 jours","card.recovery_trends.title":"Tendances de Récupération","card.recovery_trends.subtitle":"Référence sur 30 jours","empty.recovery_trends.title":"Pas encore de données de tendances de récupération","card.weekly_volume.title":"Volume Hebdomadaire","card.weekly_volume.subtitle":"12 dernières semaines","empty.weekly_volume.title":"Pas encore de données de volume hebdomadaire","stat.average":"Moyenne","stat.total":"Total","card.hr_curve.title":"Courbe de Fréquence Cardiaque","card.hr_curve.subtitle":"Dernières 24 heures","stat.hr_now":"Maintenant","stat.hr_min":"Min. du jour","stat.hr_max":"Max. du jour","empty.hr_curve.title":"Pas encore de données de FC en direct","empty.hr_curve.subtitle":"Porte et synchronise ta montre pour voir la courbe du jour ici.","card.sleep_trends.title":"Tendances de Sommeil","card.sleep_trends.subtitle":"30 dernières nuits","empty.sleep_trends.title":"Pas encore de données de tendances de sommeil","card.weekly_goal.title":"Objectif Hebdomadaire","card.weekly_goal.subtitle":"{value} sur {goal} km","empty.weekly_goal.title":"Pas encore de distance hebdomadaire","editor.goal_label":"Objectif hebdomadaire (km)","card.streak.title":"Série d'Activité","streak.days_one":"{count} jour de série","streak.days_other":"{count} jours de série","streak.none":"Aucune série active - bouge aujourd'hui","empty.streak.title":"Pas encore d'historique d'entraînement","just_finished.title":"Bien joué !","just_finished.idle.title":"En attente de ta prochaine séance","just_finished.idle.subtitle":"Cette carte s'allume dès que ta montre synchronise une nouvelle séance.","empty.just_finished.title":"Aucune séance récente"},es:{"stat.distance":"Distancia","stat.duration":"Duración","stat.avg_speed":"Vel. media","stat.avg_pace":"Ritmo medio","stat.avg_hr":"FC media","stat.max_hr":"FC máx.","stat.training_effect":"Efecto del entrenamiento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensación","stat.energy":"Energía","stat.time":"Tiempo","stat.workouts":"Entrenamientos","stat.steps":"Pasos","stat.heart_rate":"Frecuencia cardíaca","stat.quality":"Calidad","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC reposo","stat.resting_hr_delta":"FC reposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Nivel de estrés","stat.recovery_window":"Ventana de recuperación","stat.ctl":"CTL · forma","stat.atl":"ATL · fatiga","stat.tsb":"TSB · forma","stat.readiness":"Preparación","stat.recovery_balance":"Equilibrio de recuperación","card.hr_zones.title":"Zonas de Frecuencia Cardíaca","card.hr_zones.last_workout":"Último entrenamiento","card.sleep_readiness.title":"Sueño y Preparación","card.sleep_readiness.subtitle_no_wake":"{duration} de sueño","card.sleep_readiness.subtitle_with_wake":"{duration} de sueño · despertar a las {time}","card.recovery.title":"Recuperación","card.training_load.title":"Carga de Entrenamiento","card.training_load.subtitle_fallback":"Tendencia de forma (CTL)","card.week_stats.title":"Esta Semana y Total Histórico","card.week_stats.subtitle":"Últimos 7 días","card.week_stats.lifetime_title":"Total por actividad","card.today.title":"Hoy","card.today.subtitle":"En vivo desde tu reloj","empty.last_workout.title":"Sin entrenamiento reciente","empty.last_workout.subtitle":"Sincroniza tu reloj con la app Suunto para verlo aquí.","empty.hr_zones.title":"Sin datos de zonas","empty.hr_zones.subtitle":"Tu próximo entrenamiento al aire libre con banda de frecuencia cardíaca completará esto.","empty.sleep_readiness.title":"Aún sin datos de sueño","empty.sleep_readiness.subtitle":"Usa tu reloj para dormir para verlo aquí.","empty.recovery.title":"Aún sin datos de recuperación","empty.training_load.title":"Calculando la carga de entrenamiento","empty.training_load.subtitle":"Necesita algo de historial de entrenamientos para calcularse - vuelve a comprobarlo tras algunas sesiones.","empty.week_stats.title":"Aún sin historial de entrenamientos","empty.today.title":"Aún sin datos en vivo","empty.loading":"Cargando...","empty.generic_error":"No se pudieron cargar los datos de Suunto.","error.no_device":"No se encontró ningún dispositivo Suunto - ¿está configurada la integración suunto_app?","error.multiple_devices":'Se encontraron varios dispositivos Suunto - define "device_id" en la configuración de la tarjeta.',"error.device_missing":'El dispositivo configurado "{device}" no tiene entidades suunto_app.',"band.readiness.great":"Excelente","band.readiness.fair":"Aceptable","band.readiness.low":"Baja","band.recovery.well":"Bien recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baja recuperación","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"Recuperando · quedan {time}","band.hrv.low":"HRV baja","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muy fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baja","band.acwr.high":"Carga alta - riesgo de lesión","chip.workout_logged_today":"Entrenamiento registrado hoy","chip.workout_today":"Entrenamiento hoy","chip.recovering":"Recuperando","chip.nap":"{minutes} min de siesta","chip.nap_earlier":"{minutes} min de siesta (antes)","chip.workouts_30d":"{count} entrenamientos en los últimos 30 días","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} actividad más","chip.more_activity_other":"+{count} actividades más","achievement.count_one":"{count} logro","achievement.count_other":"{count} logros","achievement.rank":"Puesto #{rank} en esta ruta","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Ligero","label.rem":"REM","editor.auto_detect":"Esta tarjeta detecta automáticamente tu dispositivo Suunto - no se necesita configuración.","editor.pick_device":"Se encontraron varios dispositivos Suunto - elige cuál debe usar esta tarjeta.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totales Históricos","card.lifetime.subtitle":"Desde el inicio","stat.active_days":"Días activos","empty.lifetime.title":"Aún sin totales históricos","card.recent_workouts.title":"Entrenamientos Recientes","empty.recent_workouts.title":"Sin entrenamientos recientes","card.elevation.title":"Altitud y Ascensos","stat.ascent":"Ascenso","stat.descent":"Descenso","stat.ascent_time":"Tiempo de ascenso","stat.descent_time":"Tiempo de descenso","stat.min_altitude":"Altitud mín.","stat.max_altitude":"Altitud máx.","stat.ascent_rate":"Velocidad de ascenso","empty.elevation.title":"Sin datos de altitud","empty.elevation.subtitle":"Solo los entrenamientos al aire libre con altímetro registran esto.","card.location.title":"Ubicación de Inicio","location.open_in_maps":"Abrir en Maps","empty.location.title":"Sin datos de ubicación","empty.location.subtitle":"Los entrenamientos en interiores no tienen punto de inicio GPS.","card.fitness.title":"Forma Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max estimado","stat.fitness_age":"Edad física","fitness.measured":"Medido hace {time} · {activity}","empty.fitness.title":"Aún sin datos de forma física","empty.fitness.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","card.pmc.title":"Gestión del Rendimiento","card.pmc.subtitle":"Tendencia de 90 días","card.recovery_trends.title":"Tendencias de Recuperación","card.recovery_trends.subtitle":"Referencia de 30 días","empty.recovery_trends.title":"Aún sin datos de tendencias de recuperación","card.weekly_volume.title":"Volumen Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Aún sin datos de volumen semanal","stat.average":"Media","stat.total":"Total","card.hr_curve.title":"Curva de Frecuencia Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Ahora","stat.hr_min":"Mín. de hoy","stat.hr_max":"Máx. de hoy","empty.hr_curve.title":"Aún sin datos de FC en vivo","empty.hr_curve.subtitle":"Usa y sincroniza tu reloj para ver aquí la curva de hoy.","card.sleep_trends.title":"Tendencias de Sueño","card.sleep_trends.subtitle":"Últimas 30 noches","empty.sleep_trends.title":"Aún sin datos de tendencias de sueño","card.weekly_goal.title":"Objetivo Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Aún sin distancia semanal","editor.goal_label":"Objetivo semanal (km)","card.streak.title":"Racha de Actividad","streak.days_one":"{count} día de racha","streak.days_other":"{count} días de racha","streak.none":"Sin racha activa - muévete hoy","empty.streak.title":"Aún sin historial de entrenamientos","just_finished.title":"¡Buen trabajo!","just_finished.idle.title":"Esperando tu próximo entrenamiento","just_finished.idle.subtitle":"Esta tarjeta se activa en cuanto tu reloj sincronice un entrenamiento nuevo.","empty.just_finished.title":"Sin entrenamiento reciente"},it:{"stat.distance":"Distanza","stat.duration":"Durata","stat.avg_speed":"Vel. media","stat.avg_pace":"Passo medio","stat.avg_hr":"FC media","stat.max_hr":"FC max","stat.training_effect":"Effetto allenamento","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Sensazione","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Allenamenti","stat.steps":"Passi","stat.heart_rate":"Frequenza cardiaca","stat.quality":"Qualità","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC riposo","stat.resting_hr_delta":"FC riposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Livello di stress","stat.recovery_window":"Finestra di recupero","stat.ctl":"CTL · forma","stat.atl":"ATL · affaticamento","stat.tsb":"TSB · forma","stat.readiness":"Prontezza","stat.recovery_balance":"Equilibrio di recupero","card.hr_zones.title":"Zone di Frequenza Cardiaca","card.hr_zones.last_workout":"Ultimo allenamento","card.sleep_readiness.title":"Sonno e Prontezza","card.sleep_readiness.subtitle_no_wake":"{duration} di sonno","card.sleep_readiness.subtitle_with_wake":"{duration} di sonno · sveglia alle {time}","card.recovery.title":"Recupero","card.training_load.title":"Carico di Allenamento","card.training_load.subtitle_fallback":"Andamento forma (CTL)","card.week_stats.title":"Questa Settimana e Totale","card.week_stats.subtitle":"Ultimi 7 giorni","card.week_stats.lifetime_title":"Totale per attività","card.today.title":"Oggi","card.today.subtitle":"In diretta dall'orologio","empty.last_workout.title":"Nessun allenamento recente","empty.last_workout.subtitle":"Sincronizza l'orologio con l'app Suunto per vederlo qui.","empty.hr_zones.title":"Nessun dato sulle zone","empty.hr_zones.subtitle":"Il tuo prossimo allenamento all'aperto con fascia cardio completerà questi dati.","empty.sleep_readiness.title":"Ancora nessun dato sul sonno","empty.sleep_readiness.subtitle":"Indossa l'orologio per dormire per vederlo qui.","empty.recovery.title":"Ancora nessun dato sul recupero","empty.training_load.title":"Calcolo del carico di allenamento","empty.training_load.subtitle":"Serve un po' di storico allenamenti per calcolarlo - ricontrolla dopo qualche sessione.","empty.week_stats.title":"Ancora nessuno storico allenamenti","empty.today.title":"Ancora nessun dato in tempo reale","empty.loading":"Caricamento...","empty.generic_error":"Impossibile caricare i dati Suunto.","error.no_device":"Nessun dispositivo Suunto trovato - l'integrazione suunto_app è configurata?","error.multiple_devices":'Trovati più dispositivi Suunto - imposta "device_id" nella configurazione della scheda.',"error.device_missing":'Il dispositivo configurato "{device}" non ha entità suunto_app.',"band.readiness.great":"Ottima","band.readiness.fair":"Discreta","band.readiness.low":"Bassa","band.recovery.well":"Ben recuperato","band.recovery.partial":"Parzialmente recuperato","band.recovery.low":"Basso recupero","band.recovery.fully":"Completamente recuperato","band.recovery.recovering":"Recupero in corso · {time} rimanenti","band.hrv.low":"HRV bassa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV bilanciata","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Affaticato","band.form.very_fatigued":"Molto affaticato","band.acwr.safe":"Zona sicura","band.acwr.low":"Carico basso","band.acwr.high":"Carico alto - rischio di infortunio","chip.workout_logged_today":"Allenamento registrato oggi","chip.workout_today":"Allenamento oggi","chip.recovering":"In recupero","chip.nap":"{minutes} min di pisolino","chip.nap_earlier":"{minutes} min di pisolino (prima)","chip.workouts_30d":"{count} allenamenti negli ultimi 30 giorni","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} altra attività","chip.more_activity_other":"+{count} altre attività","achievement.count_one":"{count} traguardo","achievement.count_other":"{count} traguardi","achievement.rank":"Posizione #{rank} su questo percorso","label.zone":"Zona {n}","label.deep":"Profondo","label.light":"Leggero","label.rem":"REM","editor.auto_detect":"Questa scheda rileva automaticamente il tuo dispositivo Suunto - nessuna configurazione necessaria.","editor.pick_device":"Trovati più dispositivi Suunto - scegli quale deve usare questa scheda.","editor.device_label":"Dispositivo Suunto","card.lifetime.title":"Totali di Sempre","card.lifetime.subtitle":"Dall'inizio","stat.active_days":"Giorni attivi","empty.lifetime.title":"Ancora nessun totale","card.recent_workouts.title":"Allenamenti Recenti","empty.recent_workouts.title":"Nessun allenamento recente","card.elevation.title":"Altitudine e Salite","stat.ascent":"Dislivello positivo","stat.descent":"Dislivello negativo","stat.ascent_time":"Tempo di salita","stat.descent_time":"Tempo di discesa","stat.min_altitude":"Altitudine min.","stat.max_altitude":"Altitudine max.","stat.ascent_rate":"Velocità di salita","empty.elevation.title":"Nessun dato sull'altitudine","empty.elevation.subtitle":"Solo gli allenamenti all'aperto con altimetro registrano questi dati.","card.location.title":"Posizione di Partenza","location.open_in_maps":"Apri in Maps","empty.location.title":"Nessun dato sulla posizione","empty.location.subtitle":"Gli allenamenti al chiuso non hanno un punto di partenza GPS.","card.fitness.title":"Forma Fisica","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max stimato","stat.fitness_age":"Età fisica","fitness.measured":"Misurato {time} fa · {activity}","empty.fitness.title":"Ancora nessun dato sulla forma fisica","empty.fitness.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","card.pmc.title":"Gestione delle Prestazioni","card.pmc.subtitle":"Andamento di 90 giorni","card.recovery_trends.title":"Tendenze di Recupero","card.recovery_trends.subtitle":"Riferimento di 30 giorni","empty.recovery_trends.title":"Ancora nessun dato sulle tendenze di recupero","card.weekly_volume.title":"Volume Settimanale","card.weekly_volume.subtitle":"Ultime 12 settimane","empty.weekly_volume.title":"Ancora nessun dato sul volume settimanale","stat.average":"Media","stat.total":"Totale","card.hr_curve.title":"Curva della Frequenza Cardiaca","card.hr_curve.subtitle":"Ultime 24 ore","stat.hr_now":"Ora","stat.hr_min":"Min. di oggi","stat.hr_max":"Max. di oggi","empty.hr_curve.title":"Ancora nessun dato di FC in tempo reale","empty.hr_curve.subtitle":"Indossa e sincronizza l'orologio per vedere qui la curva di oggi.","card.sleep_trends.title":"Andamento del Sonno","card.sleep_trends.subtitle":"Ultime 30 notti","empty.sleep_trends.title":"Ancora nessun dato sull'andamento del sonno","card.weekly_goal.title":"Obiettivo Settimanale","card.weekly_goal.subtitle":"{value} di {goal} km","empty.weekly_goal.title":"Ancora nessuna distanza settimanale","editor.goal_label":"Obiettivo settimanale (km)","card.streak.title":"Serie di Attività","streak.days_one":"{count} giorno di serie","streak.days_other":"{count} giorni di serie","streak.none":"Nessuna serie attiva - inizia oggi","empty.streak.title":"Ancora nessuno storico allenamenti","just_finished.title":"Ottimo lavoro!","just_finished.idle.title":"In attesa del tuo prossimo allenamento","just_finished.idle.subtitle":"Questa scheda si attiva appena l'orologio sincronizza un nuovo allenamento.","empty.just_finished.title":"Nessun allenamento recente"},nl:{"stat.distance":"Afstand","stat.duration":"Duur","stat.avg_speed":"Gem. snelheid","stat.avg_pace":"Gem. tempo","stat.avg_hr":"Gem. hartslag","stat.max_hr":"Max. hartslag","stat.training_effect":"Trainingseffect","stat.tss":"TSS","stat.epoc":"EPOC","stat.feeling":"Gevoel","stat.energy":"Energie","stat.time":"Tijd","stat.workouts":"Work-outs","stat.steps":"Stappen","stat.heart_rate":"Hartslag","stat.quality":"Kwaliteit","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Rusthartslag","stat.resting_hr_delta":"Rusthartslag ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stressniveau","stat.recovery_window":"Hersteltijd","stat.ctl":"CTL · fitheid","stat.atl":"ATL · vermoeidheid","stat.tsb":"TSB · vorm","stat.readiness":"Gereedheid","stat.recovery_balance":"Herstelbalans","card.hr_zones.title":"Hartslagzones","card.hr_zones.last_workout":"Laatste training","card.sleep_readiness.title":"Slaap & Gereedheid","card.sleep_readiness.subtitle_no_wake":"{duration} geslapen","card.sleep_readiness.subtitle_with_wake":"{duration} geslapen · wakker om {time}","card.recovery.title":"Herstel","card.training_load.title":"Trainingsbelasting","card.training_load.subtitle_fallback":"Fitheidstrend (CTL)","card.week_stats.title":"Deze Week & Totaal","card.week_stats.subtitle":"Laatste 7 dagen","card.week_stats.lifetime_title":"Totaal per activiteit","card.today.title":"Vandaag","card.today.subtitle":"Live vanaf je horloge","empty.last_workout.title":"Geen recente training","empty.last_workout.subtitle":"Synchroniseer je horloge met de Suunto-app om het hier te zien.","empty.hr_zones.title":"Geen zonegegevens","empty.hr_zones.subtitle":"Je volgende buitentraining met hartslagband vult dit aan.","empty.sleep_readiness.title":"Nog geen slaapgegevens","empty.sleep_readiness.subtitle":"Draag je horloge tijdens het slapen om dit hier te zien.","empty.recovery.title":"Nog geen herstelgegevens","empty.training_load.title":"Trainingsbelasting wordt berekend","empty.training_load.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen - kijk later nog eens na een paar trainingen.","empty.week_stats.title":"Nog geen traininggeschiedenis","empty.today.title":"Nog geen live gegevens","empty.loading":"Laden...","empty.generic_error":"Suunto-gegevens konden niet worden geladen.","error.no_device":"Geen Suunto-apparaat gevonden - is de suunto_app-integratie ingesteld?","error.multiple_devices":'Meerdere Suunto-apparaten gevonden - stel "device_id" in de kaartconfiguratie in.',"error.device_missing":'Geconfigureerd apparaat "{device}" heeft geen suunto_app-entiteiten.',"band.readiness.great":"Uitstekend","band.readiness.fair":"Redelijk","band.readiness.low":"Laag","band.recovery.well":"Goed hersteld","band.recovery.partial":"Gedeeltelijk hersteld","band.recovery.low":"Laag herstel","band.recovery.fully":"Volledig hersteld","band.recovery.recovering":"Aan het herstellen · {time} resterend","band.hrv.low":"HRV laag","band.hrv.high":"HRV hoog","band.hrv.balanced":"HRV in balans","band.form.fresh":"Fris","band.form.neutral":"Neutraal","band.form.fatigued":"Vermoeid","band.form.very_fatigued":"Erg vermoeid","band.acwr.safe":"Veilige zone","band.acwr.low":"Lage belasting","band.acwr.high":"Hoge belasting - blessurerisico","chip.workout_logged_today":"Training vandaag geregistreerd","chip.workout_today":"Training vandaag","chip.recovering":"Herstellen","chip.nap":"{minutes} min dutje","chip.nap_earlier":"{minutes} min dutje (eerder)","chip.workouts_30d":"{count} trainingen in de laatste 30 dagen","chip.acwr":"ACWR {value} · {label}","chip.more_activity_one":"+{count} andere activiteit","chip.more_activity_other":"+{count} andere activiteiten","achievement.count_one":"{count} prestatie","achievement.count_other":"{count} prestaties","achievement.rank":"Positie #{rank} op deze route","label.zone":"Zone {n}","label.deep":"Diep","label.light":"Licht","label.rem":"REM","editor.auto_detect":"Deze kaart detecteert automatisch je Suunto-apparaat - geen configuratie nodig.","editor.pick_device":"Meerdere Suunto-apparaten gevonden - kies welke deze kaart moet gebruiken.","editor.device_label":"Suunto-apparaat","card.lifetime.title":"Totalen Aller Tijden","card.lifetime.subtitle":"Sinds het begin","stat.active_days":"Actieve dagen","empty.lifetime.title":"Nog geen totalen","card.recent_workouts.title":"Recente Trainingen","empty.recent_workouts.title":"Geen recente trainingen","card.elevation.title":"Hoogtemeters & Klimmen","stat.ascent":"Stijging","stat.descent":"Daling","stat.ascent_time":"Stijgtijd","stat.descent_time":"Daaltijd","stat.min_altitude":"Min. hoogte","stat.max_altitude":"Max. hoogte","stat.ascent_rate":"Stijgsnelheid","empty.elevation.title":"Geen hoogtegegevens","empty.elevation.subtitle":"Alleen buitentrainingen met een barometer registreren dit.","card.location.title":"Startlocatie","location.open_in_maps":"Openen in Maps","empty.location.title":"Geen locatiegegevens","empty.location.subtitle":"Binnentrainingen hebben geen GPS-startpunt.","card.fitness.title":"Fitheid","stat.vo2max":"VO2max","stat.estimated_vo2max":"Geschat VO2max","stat.fitness_age":"Fitheidsleeftijd","fitness.measured":"Gemeten {time} geleden · {activity}","empty.fitness.title":"Nog geen fitheidsgegevens","empty.fitness.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","card.pmc.title":"Prestatiebeheer","card.pmc.subtitle":"90-dagen trend","card.recovery_trends.title":"Hersteltrends","card.recovery_trends.subtitle":"30-dagen basiswaarde","empty.recovery_trends.title":"Nog geen hersteltrendgegevens","card.weekly_volume.title":"Wekelijks Volume","card.weekly_volume.subtitle":"Laatste 12 weken","empty.weekly_volume.title":"Nog geen gegevens over wekelijks volume","stat.average":"Gemiddeld","stat.total":"Totaal","card.hr_curve.title":"Hartslagcurve","card.hr_curve.subtitle":"Laatste 24 uur","stat.hr_now":"Nu","stat.hr_min":"Min. vandaag","stat.hr_max":"Max. vandaag","empty.hr_curve.title":"Nog geen live hartslaggegevens","empty.hr_curve.subtitle":"Draag en synchroniseer je horloge om de curve van vandaag hier te zien.","card.sleep_trends.title":"Slaaptrends","card.sleep_trends.subtitle":"Laatste 30 nachten","empty.sleep_trends.title":"Nog geen slaaptrendgegevens","card.weekly_goal.title":"Weekdoel","card.weekly_goal.subtitle":"{value} van {goal} km","empty.weekly_goal.title":"Nog geen wekelijkse afstand","editor.goal_label":"Weekdoel (km)","card.streak.title":"Activiteitenreeks","streak.days_one":"{count} dag op rij","streak.days_other":"{count} dagen op rij","streak.none":"Geen actieve reeks - kom vandaag in beweging","empty.streak.title":"Nog geen traininggeschiedenis","just_finished.title":"Goed gedaan!","just_finished.idle.title":"Wachten op je volgende training","just_finished.idle.subtitle":"Deze kaart licht op zodra je horloge een nieuwe training synchroniseert.","empty.just_finished.title":"Geen recente training"}};function Se(e,t,a){let i=function(e){const t=e?.language??"en",a=t.split("-")[0]?.toLowerCase();return xe[a]??$e}(e)[t]??$e[t];if(a)for(const[e,t]of Object.entries(a))i=i.replace(`{${e}}`,String(t));return i}function ze(e,t,a,i,s){return Se(e,1===t?a:i,{count:t,...s})}let Ae=class extends le{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;return we(this.hass).length<=1?I`<div class="hint">${Se(this.hass,"editor.auto_detect")}</div>`:I`
      <ha-device-picker
        .hass=${this.hass}
        .value=${this._config.device_id??""}
        .label=${Se(this.hass,"editor.device_label")}
        .includeDeviceClasses=${void 0}
        @value-changed=${this._deviceChanged}
      ></ha-device-picker>
      <div class="hint">${Se(this.hass,"editor.pick_device")}</div>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value,a={...this._config,device_id:t||void 0};ye(this,"config-changed",{config:a})}};Ae.styles=n`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
  `,e([me({attribute:!1})],Ae.prototype,"hass",void 0),e([ve()],Ae.prototype,"_config",void 0),Ae=e([ue("suunto-device-editor")],Ae);class Ce extends le{_syncTheme(){this.classList.toggle("dark",Boolean(this.hass?.themes?.darkMode))}_resolveEntities(){if(!this.hass)return{error:this._message("mdi:alert-circle-outline",Se(this.hass,"empty.loading"))};try{const e=function(e,t){const a=we(e);if(t){if(!a.includes(t))throw new be("device_missing",t);return t}if(1===a.length)return a[0];if(0===a.length)throw new be("no_device");throw new be("multiple_devices")}(this.hass,this._configuredDeviceId);return{map:ke(this.hass,e)}}catch(e){return{error:this._message("mdi:alert-circle-outline",this._configErrorMessage(e))}}}_configErrorMessage(e){return e instanceof be?"device_missing"===e.code?Se(this.hass,"error.device_missing",{device:e.deviceId??""}):"multiple_devices"===e.code?Se(this.hass,"error.multiple_devices"):Se(this.hass,"error.no_device"):Se(this.hass,"empty.generic_error")}_message(e,t,a){return I`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${e}></ha-icon>
          <div class="t1">${t}</div>
          ${a?I`<div class="t2">${a}</div>`:W}
        </div>
      </ha-card>
    `}}e([me({attribute:!1})],Ce.prototype,"hass",void 0);const Ee=n`
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
`,Te=n`
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
`;function Ne(e){return I`
    <div class="bar">
      ${e.map(e=>I`<div
            class="seg"
            style="flex-grow:${e.flexGrow};background:${e.colorVar}"
            title=${e.title??""}
          ></div>`)}
    </div>
  `}function je(e,t,a=64,i=6){const s=Math.max(0,Math.min(100,e)),r=(a-i)/2,n=2*Math.PI*r,o=a/2;return I`
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
  `}function He(e,t,a=300,i=56){if(e.length<2)return W;const s=e.map(e=>e.v),r=Math.min(...s),n=Math.max(...s)-r||1,o=.12*i,c=i-2*o,l=a/(e.length-1),d=e.map((e,t)=>[t*l,o+c-(e.v-r)/n*c]),u=d.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),h=`${u} L${a},${i} L0,${i} Z`,[p,m]=d[d.length-1];return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${h} fill=${t} fill-opacity="0.14" stroke="none"></path>
      <path d=${u} fill="none" stroke=${t} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${p} cy=${m} r="3" fill=${t}></circle>
    </svg>
  `}function Me(e){const t=e.map(e=>e.v),a=Math.min(...t);return{min:a,span:Math.max(...t)-a||1}}function Re(e,t=300,a=70,i=!0){const s=e.filter(e=>e.points.length>=2);if(0===s.length)return W;const r=.1*a,n=a-2*r,o=i?Me(s.flatMap(e=>e.points)):void 0,c=s.map(e=>{const{min:a,span:i}=o??Me(e.points),s=t/(e.points.length-1),c=e.points.map((e,t)=>[t*s,r+n-(e.v-a)/i*n]),l=c.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),[d,u]=c[c.length-1];return G`
      <path
        d=${l}
        fill="none"
        stroke=${e.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${d} cy=${u} r="3" fill=${e.colorVar}></circle>
    `});return I`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="none" class="sparkline">
      ${c}
    </svg>
  `}const De=new Set(["unknown","unavailable",""]);let Fe=class extends Ce{static getConfigElement(){return document.createElement("suunto-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-goal-card",goal_km:50}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||De.has(i.state))return this._message("mdi:target",Se(a,"empty.weekly_goal.title"));const r=this._config.goal_km??50,n=Number(i.state),o=r>0?n/r*100:0,c=o>=100?"var(--sc-good)":"var(--sc-amber)";return I`
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
            ${je(o,c,64,7)}
            <div class="ring-value" style="color:${c}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};Fe.styles=[Ee,Te,n`
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
    `],e([ve()],Fe.prototype,"_config",void 0),Fe=e([ue("suunto-weekly-goal-card")],Fe);let Pe=class extends le{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=we(this.hass);return I`
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
          .value=${String(this._config.goal_km??50)}
          @change=${this._goalChanged}
        />
      </label>
    `}_deviceChanged(e){if(!this._config)return;const t=e.detail.value;this._emit({...this._config,device_id:t||void 0})}_goalChanged(e){if(!this._config)return;const t=Number(e.target.value),a=Number.isFinite(t)&&t>0?t:void 0;this._emit({...this._config,goal_km:a})}_emit(e){this._config=e,ye(this,"config-changed",{config:e})}};Pe.styles=n`
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
  `,e([me({attribute:!1})],Pe.prototype,"hass",void 0),e([ve()],Pe.prototype,"_config",void 0),Pe=e([ue("suunto-goal-editor")],Pe);const Ve=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function Oe(e){if(e)for(const[t,a]of Ve)if(t.test(e))return a;return"mdi:run-fast"}const Le={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};function qe(e){return(e??[]).map(e=>({t:new Date(e.last_updated??e.last_changed??"").getTime(),v:Number(e.state)})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v))}async function Be(e,t,a,i="mean"){const s=new Date,r=new Date(s.getTime()-36e5*a),n=await e.callWS({type:"recorder/statistics_during_period",start_time:r.toISOString(),end_time:s.toISOString(),statistic_ids:[t],period:"hour",types:["mean","min","max","sum"]});return(n?.[t]??[]).map(e=>({t:e.start,v:Number(e[i])})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v))}function Ie(e){if(e>=60){const t=Math.floor(e/60),a=Math.round(e%60);return{value:`${t}:${String(a).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(e)),unit:"min"}}function Ge(e){const t=Math.round(60*e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ue(e,t){return new Intl.DateTimeFormat(t,{hour:"numeric",minute:"2-digit"}).format(e)}function We(e,t=0){const a=Number(e.toFixed(t));return 0===a?"±0":a>0?`+${a}`:String(a)}const Ke=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function Ze(e,t){const a=(e.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(const[e,t]of Ke)if(Math.abs(a)>=t)return i.format(Math.round(a/t),e);return i.format(Math.round(a/60),"minute")}const Je=new Set(["unknown","unavailable",""]);let Qe=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity");if(!s||Je.has(s.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"),Se(a,"empty.last_workout.subtitle"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_max_hr"),d=i("last_avg_pace"),u=i("last_avg_speed"),h=i("last_pte"),p=i("last_epoc"),m=i("last_feeling"),v=i("last_tss"),g=i("last_cal_per_km"),_=i("last_workout_weather"),y=i("last_workout_tags"),f=i("last_workout_achievements"),b=o?Ie(Number(o.state)):void 0,w=void 0===d&&void 0!==u,k=m&&!Je.has(m.state)?Number(m.state):void 0,$=h&&!Je.has(h.state)?Number(h.state):void 0,x=f?Number(f.state):0;return I`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Oe(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">
              ${r?I`${Ze(new Date(r.state),a.language)} ·
                  ${Ue(new Date(r.state),a.language)}`:""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${n?this._stat((Number(n.state)/1e3).toFixed(1),"km",Se(a,"stat.distance")):W}
          ${b?this._stat(b.value,b.unit,Se(a,"stat.duration")):W}
          ${d?this._stat(Ge(Number(d.state)),"/km",Se(a,"stat.avg_pace")):w?this._stat(Number(u.state).toFixed(1),"km/h",Se(a,"stat.avg_speed")):W}
          ${c?this._stat(String(Math.round(Number(c.state))),"bpm",Se(a,"stat.avg_hr"),!0):W}
          ${l?this._stat(String(Math.round(Number(l.state))),"bpm",Se(a,"stat.max_hr"),!0):W}
          ${void 0!==$?I`
                <div class="stat">
                  <div class="stat-value">${$.toFixed(1)}</div>
                  <div class="stat-label">${Se(a,"stat.training_effect")}</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(e=>I`<i class=${e<=Math.round($)?`on s${e}`:""}></i>`)}
                  </div>
                </div>
              `:W}
        </div>

        ${v||p||void 0!==k||g?I`
              <hr />
              <div class="secondary">
                ${v?this._secondary(String(Math.round(Number(v.state))),Se(a,"stat.tss")):W}
                ${p?this._secondary(Number(p.state).toFixed(1),Se(a,"stat.epoc")):W}
                ${void 0!==k?I`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(e=>I`<i class=${e<=k?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">${Se(a,"stat.feeling")}</div>
                      </div>
                    `:W}
                ${g?this._secondary(`${Math.round(Number(g.state))}`,Se(a,"stat.energy"),"kcal/km"):W}
              </div>
            `:W}
        ${_&&!Je.has(_.state)?I`
              <div class="weather">
                <ha-icon .icon=${function(e){const t=e?.slice(0,2);return t&&Le[t]||"mdi:weather-cloudy"}(_.attributes.icon_code)}></ha-icon>
                <strong>${_.state}°C</strong>
                ${_.attributes.condition?I`<span class="sep">·</span><span class="cond">${_.attributes.condition}</span>`:W}
                ${void 0!==_.attributes.wind_speed_kmh?I`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(_.attributes.wind_speed_kmh)} km/h</span>
                    `:W}
              </div>
            `:W}
        ${y&&!Je.has(y.state)||x>0?I`
              <div class="footer">
                ${y&&!Je.has(y.state)?I`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${y.state}</span>`:W}
                ${x>0?I`
                      <span
                        class="chip accent"
                        title=${f?.attributes.route_ranking?Se(a,"achievement.rank",{rank:f.attributes.route_ranking}):""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${function(e,t,a){if(Array.isArray(t)&&t.length){const e=t[0];if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e,a=t.name??t.title??t.type;if("string"==typeof a)return a}}return ze(e,a,"achievement.count_one","achievement.count_other")}(a,f?.attributes.achievements,x)}
                      </span>
                    `:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a,i=!1){return I`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}_secondary(e,t,a){return I`
      <div class="sec-item">
        <div class="sec-value">${e}${a?I` <span class="sec-unit">${a}</span>`:W}</div>
        <div class="sec-label">${t}</div>
      </div>
    `}_openMoreInfo(e){e&&ye(this,"hass-more-info",{entityId:e})}};Qe.styles=[Ee,Te,n`
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
    `],e([ve()],Qe.prototype,"_config",void 0),Qe=e([ue("suunto-last-workout-card")],Qe);const Ye=e=>`var(--sc-zone-${e})`;let Xe=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=[];for(let e=1;e<=5;e++){const s=t[`last_zone${e}`],r=s?a.states[s]:void 0;r&&!Number.isNaN(Number(r.state))&&i.push({n:e,minutes:Number(r.state),lower:r.attributes.lower_limit_bpm,upper:r.attributes.upper_limit_bpm})}const s=i.reduce((e,t)=>e+t.minutes,0);if(0===i.length||s<=0)return this._message("mdi:heart-pulse",Se(a,"empty.hr_zones.title"),Se(a,"empty.hr_zones.subtitle"));const r=t.last_workout_start,n=r?a.states[r]:void 0,o=Se(a,"card.hr_zones.last_workout");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_zones.title")}</div>
            <div class="subtitle">
              ${n?`${o} · ${Ze(new Date(n.state),a.language)}`:o}
            </div>
          </div>
        </div>

        ${Ne(i.map(e=>({flexGrow:e.minutes,colorVar:Ye(e.n),title:Se(a,"label.zone",{n:e.n})})))}

        <div class="rows">
          ${i.map(e=>{const t=Ie(e.minutes),i=Math.round(e.minutes/s*100);return I`
              <div class="row">
                <i class="dot" style="background:${Ye(e.n)}"></i>
                <span class="zone-label">${Se(a,"label.zone",{n:e.n})}</span>
                <span class="bpm">${r=e.lower,n=e.upper,void 0!==r&&void 0!==n?`${r}-${n} bpm`:void 0!==r?`${r}+ bpm`:void 0!==n?`<${n} bpm`:""}</span>
                <span class="time">${t.value} ${t.unit}</span>
                <span class="pct">${i}%</span>
              </div>
            `;var r,n})}
        </div>
      </ha-card>
    `}};Xe.styles=[Ee,Te,n`
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
    `],e([ve()],Xe.prototype,"_config",void 0),Xe=e([ue("suunto-hr-zones-card")],Xe);const et=new Set(["unknown","unavailable",""]);let tt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||et.has(s.state))return this._message("mdi:sleep",Se(a,"empty.sleep_readiness.title"),Se(a,"empty.sleep_readiness.subtitle"));const r=i("wake_time"),n=i("sleep_deep"),o=i("sleep_light"),c=i("sleep_rem"),l=i("sleep_quality"),d=i("sleep_spo2"),u=i("sleep_hrv"),h=i("hrv_baseline"),p=i("hrv_status"),m=i("resting_hr"),v=i("resting_hr_baseline"),g=i("readiness"),_=i("nap_duration"),y=g&&!et.has(g.state)?Number(g.state):void 0,f=void 0!==y?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:Se(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:Se(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.readiness.low")}}(a,y):void 0,b=u&&h&&!et.has(h.state)?Number(u.state)-Number(h.state):void 0,w=m&&v&&!et.has(v.state)?Number(m.state)-Number(v.state):void 0,k=[n&&!et.has(n.state)?{flexGrow:Number(n.state),colorVar:"var(--sc-sleep-deep)",title:Se(a,"label.deep")}:void 0,o&&!et.has(o.state)?{flexGrow:Number(o.state),colorVar:"var(--sc-sleep-light)",title:Se(a,"label.light")}:void 0,c&&!et.has(c.state)?{flexGrow:Number(c.state),colorVar:"var(--sc-sleep-rem)",title:Se(a,"label.rem")}:void 0].filter(e=>void 0!==e),$=Ie(60*Number(s.state)),x=_&&!et.has(_.state)?Number(_.state):void 0,S=!!_?.attributes.date&&function(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}(new Date(_.attributes.date)),z={duration:`${$.value} ${$.unit}`};return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_readiness.title")}</div>
            <div class="subtitle">
              ${r?Se(a,"card.sleep_readiness.subtitle_with_wake",{...z,time:Ue(new Date(r.state),a.language)}):Se(a,"card.sleep_readiness.subtitle_no_wake",z)}
            </div>
          </div>
        </div>

        ${void 0!==y&&f?I`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${je(y,f.colorVar,60,6)}
                  <div class="ring-value" style="color:${f.colorVar}">${Math.round(y)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${Se(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${f.colorVar}">${f.label}</div>
                </div>
              </div>
            `:W}

        <div class="stats">
          ${l?this._stat(String(Math.round(Number(l.state))),"%",Se(a,"stat.quality")):W}
          ${u?this._stat(String(Math.round(Number(u.state))),"ms",void 0!==b?Se(a,"stat.hrv_delta",{delta:We(b)}):Se(a,"stat.hrv"),void 0!==b?b>=0?"good":"bad":void 0):W}
          ${m?this._stat(String(Math.round(Number(m.state))),"bpm",void 0!==w?Se(a,"stat.resting_hr_delta",{delta:We(w)}):Se(a,"stat.resting_hr"),void 0!==w?w<=0?"good":"bad":void 0):W}
          ${d?this._stat(String(Math.round(Number(d.state))),"%",Se(a,"stat.spo2")):W}
        </div>

        ${k.length?I`
              <div class="stages">
                ${Ne(k)}
                <div class="stage-legend">
                  ${k.map(e=>{const t=Ie(e.flexGrow);return I`
                      <span class="legend-item">
                        <i class="dot" style="background:${e.colorVar}"></i>${e.title} ${t.value}${"h"===t.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:W}

        ${p&&!et.has(p.state)||x?I`
              <div class="footer">
                ${p&&!et.has(p.state)?(()=>{const e=function(e,t){return"low"===t?{colorVar:"var(--sc-warn)",label:Se(e,"band.hrv.low")}:"high"===t?{colorVar:"var(--sc-pulse)",label:Se(e,"band.hrv.high")}:{colorVar:"var(--sc-good)",label:Se(e,"band.hrv.balanced")}}(a,p.state);return I`<span class="chip" style="color:${e.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${e.label}</span
                      >`})():W}
                ${x?I`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${Se(a,S?"chip.nap":"chip.nap_earlier",{minutes:x})}
                    </span>`:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};tt.styles=[Ee,Te,n`
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
    `],e([ve()],tt.prototype,"_config",void 0),tt=e([ue("suunto-sleep-readiness-card")],tt);const at=new Set(["unknown","unavailable",""]);let it=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||at.has(s.state))return this._message("mdi:battery-heart-variant",Se(a,"empty.recovery.title"));const r=i("is_recovering"),n=i("recovery_until"),o=i("recovery_time"),c=i("stress_state"),l=i("workout_today"),d=Number(s.state),u=function(e,t){return t>=60?{colorVar:"var(--sc-good)",label:Se(e,"band.recovery.well")}:t>=30?{colorVar:"var(--sc-warn)",label:Se(e,"band.recovery.partial")}:{colorVar:"var(--sc-bad)",label:Se(e,"band.recovery.low")}}(a,d),h="on"===r?.state;let p=Se(a,"band.recovery.fully");if(h&&n&&!at.has(n.state)){const e=new Date(n.state).getTime()-Date.now();if(e>0){const t=Ie(e/6e4);p=Se(a,"band.recovery.recovering",{time:`${t.value} ${t.unit}`})}}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery.title")}</div>
            <div class="subtitle">${p}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${je(d,u.colorVar,60,6)}
            <div class="ring-value" style="color:${u.colorVar}">${Math.round(d)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${Se(a,"stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${u.colorVar}">${u.label}</div>
          </div>
        </div>

        ${c||o?I`
              <div class="stats two">
                ${c&&!at.has(c.state)?this._stat(c.state,"",Se(a,"stat.stress_level")):W}
                ${o&&!at.has(o.state)?this._stat(Number(o.state).toFixed(1),"h",Se(a,"stat.recovery_window")):W}
              </div>
            `:W}
        ${"on"===l?.state?I`<div class="footer"><span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_logged_today")}</span></div>`:W}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};it.styles=[Ee,Te,n`
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
    `],e([ve()],it.prototype,"_config",void 0),it=e([ue("suunto-recovery-card")],it);const st=new Set(["unknown","unavailable",""]);let rt=class extends Ce{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.fitness_ctl;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{const e=new Date(a-2592e6).toISOString(),i=await this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${t}&no_attributes`),s=(i?.[0]??[]).map(e=>({t:new Date(e.last_updated??e.last_changed??"").getTime(),v:Number(e.state)})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v));this._history=s}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||st.has(s.state))return this._message("mdi:arm-flex",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=i("acwr"),c=n&&!st.has(n.state)?Number(n.state):void 0,l=void 0!==c?function(e,t){return t>5?{colorVar:"var(--sc-good)",label:Se(e,"band.form.fresh")}:t<-20?{colorVar:"var(--sc-bad)",label:Se(e,"band.form.very_fatigued")}:t<-5?{colorVar:"var(--sc-warn)",label:Se(e,"band.form.fatigued")}:{colorVar:"var(--sc-pulse)",label:Se(e,"band.form.neutral")}}(a,c):void 0,d=o&&!st.has(o.state)?Number(o.state):void 0,u=void 0!==d?function(e,t){return t>1.3?{colorVar:"var(--sc-bad)",label:Se(e,"band.acwr.high")}:t<.8?{colorVar:"var(--sc-warn)",label:Se(e,"band.acwr.low")}:{colorVar:"var(--sc-good)",label:Se(e,"band.acwr.safe")}}(a,d):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.training_load.title")}</div>
            <div class="subtitle">${l?l.label:Se(a,"card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${He(this._history,"var(--sc-amber)")}

        <div class="stats three">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):W}
          ${void 0!==c?this._stat(We(c,1),Se(a,"stat.tsb"),l?.colorVar):W}
        </div>

        ${void 0!==d&&u?I`
              <div class="footer">
                <span class="chip" style="color:${u.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${Se(a,"chip.acwr",{value:d.toFixed(2),label:u.label})}
                </span>
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value" style=${a?`color:${a}`:""}>${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};rt.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
      .footer {
        display: flex;
      }
    `],e([ve()],rt.prototype,"_config",void 0),e([ve()],rt.prototype,"_history",void 0),rt=e([ue("suunto-training-load-card")],rt);const nt=new Set(["unknown","unavailable",""]),ot=["var(--sc-amber)","var(--sc-pulse)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let ct=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),r=i("weekly_time"),n=i("workouts_7d"),o=i("workouts_30d"),c=i("lifetime_by_activity");if(!s&&!c)return this._message("mdi:calendar-week",Se(a,"empty.week_stats.title"));const l=(c?.attributes.activities??[]).slice().sort((e,t)=>t.distance_km-e.distance_km),d=l.slice(0,5),u=l.length-d.length;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.week_stats.title")}</div>
            <div class="subtitle">${Se(a,"card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${s||r||n?I`
              <div class="stats three">
                ${s&&!nt.has(s.state)?this._stat(Number(s.state).toFixed(1),"km",Se(a,"stat.distance")):W}
                ${r&&!nt.has(r.state)?this._stat(Number(r.state).toFixed(1),"h",Se(a,"stat.time")):W}
                ${n&&!nt.has(n.state)?this._stat(n.state,"",Se(a,"stat.workouts")):W}
              </div>
            `:W}

        ${d.length?I`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${Se(a,"card.week_stats.lifetime_title")}</div>
                ${Ne(d.map((e,t)=>({flexGrow:e.distance_km,colorVar:ot[t%ot.length],title:e.activity})))}
                <div class="rows">
                  ${d.map((e,t)=>{const a=ot[t%ot.length];return I`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${a} 18%, transparent);color:${a}"
                        >
                          <ha-icon .icon=${Oe(e.activity)}></ha-icon>
                        </div>
                        <span class="name">${e.activity}</span>
                        <span class="count">${e.workouts}×</span>
                        <span class="dist">${e.distance_km.toFixed(0)} km</span>
                      </div>
                    `})}
                  ${u>0?I`<div class="row muted">
                        ${ze(a,u,"chip.more_activity_one","chip.more_activity_other")}
                      </div>`:W}
                </div>
              </div>
            `:W}
        ${o&&!nt.has(o.state)?I`<div class="footer"><span class="chip">${Se(a,"chip.workouts_30d",{count:o.state})}</span></div>`:W}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ct.styles=[Ee,Te,n`
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
    `],e([ve()],ct.prototype,"_config",void 0),ct=e([ue("suunto-week-stats-card")],ct);const lt=new Set(["unknown","unavailable",""]);let dt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps"),r=i("daily_energy"),n=i("current_hr"),o=i("workout_today"),c=i("is_recovering");if(!s&&!r&&!n)return this._message("mdi:pulse",Se(a,"empty.today.title"));const l=n&&!lt.has(n.state)?Math.round(Number(n.state)):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.today.title")}</div>
            <div class="subtitle">${Se(a,"card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats three">
          ${s&&!lt.has(s.state)?this._stat(Number(s.state).toLocaleString(a.language),"",Se(a,"stat.steps")):W}
          ${r&&!lt.has(r.state)?this._stat(Math.round(Number(r.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):W}
          ${void 0!==l?I`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${l}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${Se(a,"stat.heart_rate")}</div>
                </div>
              `:W}
        </div>

        ${"on"===o?.state||"on"===c?.state?I`
              <div class="footer">
                ${"on"===o?.state?I`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${Se(a,"chip.workout_today")}</span>`:W}
                ${"on"===c?.state?I`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${Se(a,"chip.recovering")}</span>`:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};dt.styles=[Ee,Te,n`
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
    `],e([ve()],dt.prototype,"_config",void 0),dt=e([ue("suunto-today-card")],dt);const ut=new Set(["unknown","unavailable",""]);let ht=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lifetime-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance"),r=i("lifetime_time"),n=i("lifetime_energy"),o=i("lifetime_workouts"),c=i("lifetime_days");return!s||ut.has(s.state)?this._message("mdi:trophy-variant",Se(a,"empty.lifetime.title")):I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.lifetime.title")}</div>
            <div class="subtitle">${Se(a,"card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats three">
          ${this._stat(Number(s.state).toFixed(0),"km",Se(a,"stat.distance"))}
          ${r?this._stat(Number(r.state).toFixed(0),"h",Se(a,"stat.time")):W}
          ${n?this._stat(Math.round(Number(n.state)).toLocaleString(a.language),"kcal",Se(a,"stat.energy")):W}
          ${o?this._stat(o.state,"",Se(a,"stat.workouts")):W}
          ${c?this._stat(c.state,"",Se(a,"stat.active_days")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ht.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `],e([ve()],ht.prototype,"_config",void 0),ht=e([ue("suunto-lifetime-card")],ht);let pt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recent-workouts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];return s&&0!==r.length?I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recent_workouts.title")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map(e=>{const t=null!==e.duration_min?Ie(e.duration_min):void 0;return I`
              <div class="workout-row">
                <div class="icon-badge tiny"><ha-icon .icon=${Oe(e.activity)}></ha-icon></div>
                <div class="name-block">
                  <div class="name">${e.activity??"-"}</div>
                  <div class="date">
                    ${e.start?Ze(new Date(e.start),a.language):""}
                  </div>
                </div>
                <div class="row-stats">
                  ${null!==e.distance_km?I`<span>${e.distance_km} km</span>`:W}
                  ${null!==e.distance_km&&t?I`<span class="sep">·</span>`:W}
                  ${t?I`<span>${t.value} ${t.unit}</span>`:W}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:format-list-bulleted",Se(a,"empty.recent_workouts.title"))}};pt.styles=[Ee,Te,n`
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
    `],e([ve()],pt.prototype,"_config",void 0),pt=e([ue("suunto-recent-workouts-card")],pt);const mt=new Set(["unknown","unavailable",""]);let vt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-elevation-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_ascent"),r=i("last_descent");if((!s||mt.has(s.state))&&(!r||mt.has(r.state)))return this._message("mdi:image-filter-hdr",Se(a,"empty.elevation.title"),Se(a,"empty.elevation.subtitle"));const n=i("last_ascent_time"),o=i("last_descent_time"),c=i("last_min_altitude"),l=i("last_max_altitude"),d=i("last_ascent_rate"),u=i("last_workout_start");return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:image-filter-hdr"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.elevation.title")}</div>
            <div class="subtitle">
              ${u?`${Se(a,"card.hr_zones.last_workout")} · ${Ze(new Date(u.state),a.language)}`:Se(a,"card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats three">
          ${s&&!mt.has(s.state)?this._stat(Math.round(Number(s.state)).toString(),"m",Se(a,"stat.ascent")):W}
          ${r&&!mt.has(r.state)?this._stat(Math.round(Number(r.state)).toString(),"m",Se(a,"stat.descent")):W}
          ${n&&!mt.has(n.state)?(()=>{const e=Ie(Number(n.state));return this._stat(e.value,e.unit,Se(a,"stat.ascent_time"))})():W}
          ${o&&!mt.has(o.state)?(()=>{const e=Ie(Number(o.state));return this._stat(e.value,e.unit,Se(a,"stat.descent_time"))})():W}
          ${c&&!mt.has(c.state)?this._stat(Math.round(Number(c.state)).toString(),"m",Se(a,"stat.min_altitude")):W}
          ${l&&!mt.has(l.state)?this._stat(Math.round(Number(l.state)).toString(),"m",Se(a,"stat.max_altitude")):W}
        </div>

        ${d&&!mt.has(d.state)?I`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${Se(a,"stat.ascent_rate")}: ${Math.round(Number(d.state))} m/h
                </span>
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};vt.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
      .footer {
        display: flex;
      }
    `],e([ve()],vt.prototype,"_config",void 0),vt=e([ue("suunto-elevation-card")],vt);const gt=new Set(["unknown","unavailable",""]);let _t=class extends Ce{constructor(){super(...arguments),this._mapLoading=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-location-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),r=s?.attributes.latitude,n=s?.attributes.longitude,o=t.last_workout_location;if(!s||gt.has(s.state)||void 0===r||void 0===n)return this._message("mdi:map-marker",Se(a,"empty.location.title"),Se(a,"empty.location.subtitle"));const c=i("last_activity"),l=i("last_workout_start"),d=`https://www.google.com/maps?q=${r},${n}`,u=Oe(c?.state);return o&&this._ensureMapElement(o,u),this._mapEl&&(this._mapEl.hass=a),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.location.title")}</div>
            <div class="subtitle">
              ${c?I`${c.state}`:W}
              ${c&&l?I`<span class="sep">·</span>`:W}
              ${l?Ze(new Date(l.state),a.language):W}
            </div>
          </div>
        </div>

        ${this._mapEl&&this._mapKey===`${o}:${u}`?I`<div class="map-wrap">${this._mapEl}</div>`:W}

        <div class="footer-row">
          <div class="coords">${Number(r).toFixed(5)}, ${Number(n).toFixed(5)}</div>
          <a class="chip accent link" href=${d} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${Se(a,"location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `}async _ensureMapElement(e,t){const a=`${e}:${t}`;if(this._mapEl&&this._mapKey===a||this._mapLoading)return;const i={type:"map",auto_fit:!0,default_zoom:14,aspect_ratio:"16:9",entities:[{entity:e,icon:t}]},s=window.loadCardHelpers;if(!s){if(!customElements.get("hui-map-card"))return;try{const e=document.createElement("hui-map-card");e.setConfig(i),this._mapKey=a,this._mapEl=e}catch{}return}this._mapLoading=!0;try{const e=(await s()).createCardElement(i);this._mapKey=a,this._mapEl=e}catch{}finally{this._mapLoading=!1}}};_t.styles=[Ee,Te,n`
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
    `],e([ve()],_t.prototype,"_config",void 0),e([ve()],_t.prototype,"_mapEl",void 0),_t=e([ue("suunto-location-card")],_t);const yt=new Set(["unknown","unavailable",""]);let ft=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("vo2max");if(!s||yt.has(s.state))return this._message("mdi:lungs",Se(a,"empty.fitness.title"),Se(a,"empty.fitness.subtitle"));const r=i("estimated_vo2max"),n=i("fitness_age"),o=s.attributes.measured_at,c=s.attributes.measured_from;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.fitness.title")}</div>
            <div class="subtitle">
              ${o?Se(a,"fitness.measured",{time:Ze(new Date(o),a.language),activity:c??""}):W}
            </div>
          </div>
        </div>

        <div class="stats three">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",Se(a,"stat.vo2max"))}
          ${r&&!yt.has(r.state)?this._stat(Number(r.state).toFixed(1),"ml/kg/min",Se(a,"stat.estimated_vo2max")):W}
          ${n&&!yt.has(n.state)?this._stat(String(Math.round(Number(n.state))),"",Se(a,"stat.fitness_age")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ft.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `],e([ve()],ft.prototype,"_config",void 0),ft=e([ue("suunto-fitness-card")],ft);const bt=new Set(["unknown","unavailable",""]);let wt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-tile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 1}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity");if(!s||bt.has(s.state))return this._message("mdi:calendar-blank-outline",Se(a,"empty.last_workout.title"));const r=i("last_workout_start"),n=i("last_distance"),o=i("last_duration"),c=i("last_avg_hr"),l=i("last_avg_pace"),d=i("last_avg_speed"),u=[];if(n&&u.push(I`${(Number(n.state)/1e3).toFixed(1)} km`),o){const e=Ie(Number(o.state));u.push(I`${e.value} ${e.unit}`)}return l?u.push(I`${Ge(Number(l.state))}/km`):d&&u.push(I`${Number(d.state).toFixed(1)} km/h`),c&&u.push(I`${Math.round(Number(c.state))} bpm`),I`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${Oe(s.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${s.state}</div>
            <div class="subtitle">${r?Ze(new Date(r.state),a.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${u.length?I`
              <div class="compact-stats">
                ${u.map((e,t)=>I`${t>0?I`<span class="sep">·</span>`:W}${e}`)}
              </div>
            `:W}
      </ha-card>
    `}_openMoreInfo(e){e&&ye(this,"hass-more-info",{entityId:e})}};wt.styles=[Ee,Te,n`
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
    `],e([ve()],wt.prototype,"_config",void 0),wt=e([ue("suunto-last-workout-tile-card")],wt);const kt=new Set(["unknown","unavailable",""]);let $t=class extends Ce{constructor(){super(...arguments),this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pmc-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.fitness_ctl;if(!a)return;const i=t.fatigue_atl,s=t.form_tsb,r=[a,i,s].filter(e=>Boolean(e)),n=r.join(","),o=Date.now();if(!(n===this._historyKey&&o-this._historyFetchedAt<6e5)){this._historyKey=n,this._historyFetchedAt=o;try{const e=new Date(o-7776e6).toISOString(),t=await this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${r.join(",")}&no_attributes`);let a=0;this._ctlHistory=qe(t?.[a++]),this._atlHistory=i?qe(t?.[a++]):[],this._tsbHistory=s?qe(t?.[a++]):[]}catch{this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||kt.has(s.state))return this._message("mdi:chart-timeline-variant",Se(a,"empty.training_load.title"),Se(a,"empty.training_load.subtitle"));const r=i("fatigue_atl"),n=i("form_tsb"),o=[{points:this._ctlHistory,colorVar:"var(--sc-pulse)"}];return this._atlHistory.length&&o.push({points:this._atlHistory,colorVar:"var(--sc-bad)"}),this._tsbHistory.length&&o.push({points:this._tsbHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.pmc.title")}</div>
            <div class="subtitle">${Se(a,"card.pmc.subtitle")}</div>
          </div>
        </div>

        ${Re(o,300,80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${Se(a,"stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.tsb")}</span>
        </div>

        <div class="stats three">
          ${this._stat(Number(s.state).toFixed(0),Se(a,"stat.ctl"))}
          ${r&&!kt.has(r.state)?this._stat(Number(r.state).toFixed(0),Se(a,"stat.atl")):W}
          ${n&&!kt.has(n.state)?this._stat(We(Number(n.state),1),Se(a,"stat.tsb")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};$t.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
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
    `],e([ve()],$t.prototype,"_config",void 0),e([ve()],$t.prototype,"_ctlHistory",void 0),e([ve()],$t.prototype,"_atlHistory",void 0),e([ve()],$t.prototype,"_tsbHistory",void 0),$t=e([ue("suunto-pmc-card")],$t);const xt=new Set(["unknown","unavailable",""]);let St=class extends Ce{constructor(){super(...arguments),this._rhrHistory=[],this._hrvHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.resting_hr,i=t.sleep_hrv;if(!a&&!i)return;const s=[a,i].filter(e=>Boolean(e)),r=s.join(","),n=Date.now();if(!(r===this._historyKey&&n-this._historyFetchedAt<6e5)){this._historyKey=r,this._historyFetchedAt=n;try{const e=new Date(n-2592e6).toISOString(),t=await this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${s.join(",")}&no_attributes`);let r=0;this._rhrHistory=a?qe(t?.[r++]):[],this._hrvHistory=i?qe(t?.[r++]):[]}catch{this._rhrHistory=[],this._hrvHistory=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("resting_hr"),r=i("sleep_hrv"),n=s&&!xt.has(s.state),o=r&&!xt.has(r.state);if(!n&&!o)return this._message("mdi:heart-pulse",Se(a,"empty.recovery_trends.title"));const c=i("resting_hr_baseline"),l=i("hrv_baseline"),d=n&&c&&!xt.has(c.state)?Number(s.state)-Number(c.state):void 0,u=o&&l&&!xt.has(l.state)?Number(r.state)-Number(l.state):void 0,h=[];return this._rhrHistory.length&&h.push({points:this._rhrHistory,colorVar:"var(--sc-pulse)"}),this._hrvHistory.length&&h.push({points:this._hrvHistory,colorVar:"var(--sc-amber)"}),I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.recovery_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.recovery_trends.subtitle")}</div>
          </div>
        </div>

        ${Re(h,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.hrv")}</span>
        </div>

        <div class="stats two">
          ${n?this._stat(String(Math.round(Number(s.state))),"bpm",void 0!==d?Se(a,"stat.resting_hr_delta",{delta:We(d)}):Se(a,"stat.resting_hr"),void 0!==d?d<=0?"good":"bad":void 0):W}
          ${o?this._stat(String(Math.round(Number(r.state))),"ms",void 0!==u?Se(a,"stat.hrv_delta",{delta:We(u)}):Se(a,"stat.hrv"),void 0!==u?u>=0?"good":"bad":void 0):W}
        </div>
      </ha-card>
    `}_stat(e,t,a,i){return I`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};St.styles=[Ee,Te,n`
      .stats.two {
        grid-template-columns: repeat(2, 1fr);
      }
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
    `],e([ve()],St.prototype,"_config",void 0),e([ve()],St.prototype,"_rhrHistory",void 0),e([ve()],St.prototype,"_hrvHistory",void 0),St=e([ue("suunto-recovery-trends-card")],St);const zt=new Set(["unknown","unavailable",""]);let At=class extends Ce{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-volume-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.weekly_distance;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{const e=new Date(a-72576e5).toISOString(),i=await this.hass.callApi("GET",`history/period/${e}?filter_entity_id=${t}&no_attributes`);this._history=qe(i?.[0])}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||zt.has(i.state))return this._message("mdi:chart-bar",Se(a,"empty.weekly_volume.title"));const r=function(e,t){const a=[...e].sort((e,t)=>e.t-t.t),i=Date.now(),s=[];for(let e=t-1;e>=0;e--){const t=i-7*e*864e5,r=t-6048e5,n=a.filter(e=>e.t>r&&e.t<=t),o=n[n.length-1];s.push({value:o?o.v:0,weekEndMs:t})}return s}(this._history,12),n=r.map(e=>({value:e.value,label:`${new Date(e.weekEndMs).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${e.value.toFixed(1)} km`})),o=r.reduce((e,t)=>e+t.value,0),c=o/12;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.weekly_volume.title")}</div>
            <div class="subtitle">${Se(a,"card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${function(e,t,a=300,i=70){if(0===e.length)return W;const s=Math.max(...e.map(e=>e.value),1e-4),r=(a-4*(e.length-1))/e.length,n=e.map((e,a)=>{const n=Math.max(e.value/s*i,2);return G`
      <rect x=${a*(r+4)} y=${i-n} width=${r} height=${n} rx="2" fill=${t}>
        <title>${e.label??e.value}</title>
      </rect>
    `});return I`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      ${n}
    </svg>
  `}(n,"var(--sc-amber)",300,80)}

        <div class="stats three">
          ${this._stat(Number(i.state).toFixed(1),"km",Se(a,"stat.distance"))}
          ${this._stat(c.toFixed(1),"km",Se(a,"stat.average"))}
          ${this._stat(o.toFixed(0),"km",Se(a,"stat.total"))}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};At.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `],e([ve()],At.prototype,"_config",void 0),e([ve()],At.prototype,"_history",void 0),At=e([ue("suunto-weekly-volume-card")],At);const Ct=new Set(["unknown","unavailable",""]);let Et=class extends Ce{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-curve-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await Be(this.hass,"suunto_app:hr",26,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="current_hr"]?a.states[t[s]]:void 0;var s;if(!i||Ct.has(i.state))return this._message("mdi:chart-bell-curve",Se(a,"empty.hr_curve.title"),Se(a,"empty.hr_curve.subtitle"));const r=this._history.map(e=>e.v),n=r.length?Math.min(...r):void 0,o=r.length?Math.max(...r):void 0;return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-bell-curve"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.hr_curve.title")}</div>
            <div class="subtitle">${Se(a,"card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${He(this._history,"var(--sc-pulse)")}

        <div class="stats three">
          ${this._stat(String(Math.round(Number(i.state))),"bpm",Se(a,"stat.hr_now"))}
          ${void 0!==n?this._stat(String(Math.round(n)),"bpm",Se(a,"stat.hr_min")):W}
          ${void 0!==o?this._stat(String(Math.round(o)),"bpm",Se(a,"stat.hr_max")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat hr">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Et.styles=[Ee,Te,n`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `],e([ve()],Et.prototype,"_config",void 0),e([ve()],Et.prototype,"_history",void 0),Et=e([ue("suunto-hr-curve-card")],Et);const Tt=new Set(["unknown","unavailable",""]);let Nt=class extends Ce{constructor(){super(...arguments),this._durationHistory=[],this._qualityHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(e===this._historyKey&&t-this._historyFetchedAt<6e5)return;this._historyKey=e,this._historyFetchedAt=t;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:sleep_duration",720,"mean"),Be(this.hass,"suunto_app:sleep_quality",720,"mean")]);this._durationHistory=e,this._qualityHistory=t}catch{this._durationHistory=[],this._qualityHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||Tt.has(s.state))return this._message("mdi:power-sleep",Se(a,"empty.sleep_trends.title"));const r=i("sleep_quality"),n=[];this._durationHistory.length&&n.push({points:this._durationHistory,colorVar:"var(--sc-pulse)"}),this._qualityHistory.length&&n.push({points:this._qualityHistory,colorVar:"var(--sc-amber)"});const o=Ie(60*Number(s.state));return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:power-sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.sleep_trends.title")}</div>
            <div class="subtitle">${Se(a,"card.sleep_trends.subtitle")}</div>
          </div>
        </div>

        ${Re(n,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${Se(a,"stat.duration")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${Se(a,"stat.quality")}</span>
        </div>

        <div class="stats two">
          ${this._stat(`${o.value} ${o.unit}`,Se(a,"stat.duration"))}
          ${r&&!Tt.has(r.state)?this._stat(`${Math.round(Number(r.state))}%`,Se(a,"stat.quality")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return I`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Nt.styles=[Ee,Te,n`
      .stats.two {
        grid-template-columns: repeat(2, 1fr);
      }
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
    `],e([ve()],Nt.prototype,"_config",void 0),e([ve()],Nt.prototype,"_durationHistory",void 0),e([ve()],Nt.prototype,"_qualityHistory",void 0),Nt=e([ue("suunto-sleep-trends-card")],Nt);let jt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-streak-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,r=s?.attributes.workouts??[];if(!s||0===r.length)return this._message("mdi:fire",Se(a,"empty.streak.title"));const{streak:n,activeDates:o}=function(e){const t=new Set(e.map(e=>e.start).filter(e=>Boolean(e)).map(e=>new Date(e).toDateString())),a=new Date;t.has(a.toDateString())||a.setDate(a.getDate()-1);let i=0;for(;t.has(a.toDateString());)i++,a.setDate(a.getDate()-1);return{streak:i,activeDates:t}}(r),c=[],l=new Date;l.setDate(l.getDate()-6);for(let e=0;e<7;e++){const e=o.has(l.toDateString());c.push(I`<span
          class="dot"
          style="background:${e?"var(--sc-amber)":"var(--divider-color)"}"
        ></span>`),l.setDate(l.getDate()+1)}return I`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:fire"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"card.streak.title")}</div>
          </div>
        </div>

        <div class="streak-row">
          <div class="streak-value">${n}</div>
          <div class="streak-label">
            ${n>0?ze(a,n,"streak.days_one","streak.days_other"):Se(a,"streak.none")}
          </div>
        </div>

        <div class="week-dots">${c}</div>
      </ha-card>
    `}};jt.styles=[Ee,Te,n`
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
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: block;
      }
    `],e([ve()],jt.prototype,"_config",void 0),jt=e([ue("suunto-streak-card")],jt);const Ht=new Set(["unknown","unavailable",""]);let Mt=class extends Ce{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-just-finished-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity"),r=i("last_workout_start");if(!s||Ht.has(s.state)||!r)return this._message("mdi:party-popper",Se(a,"empty.just_finished.title"));const n=new Date(r.last_changed),o=Date.now()-n.getTime();if(!(Number.isFinite(o)&&o>=0&&o<216e5))return this._message("mdi:party-popper",Se(a,"just_finished.idle.title"),Se(a,"just_finished.idle.subtitle"));const c=i("last_distance"),l=i("last_duration"),d=i("last_avg_hr"),u=i("last_tss");return I`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon icon="mdi:party-popper"></ha-icon></div>
          <div class="title-block">
            <div class="title">${Se(a,"just_finished.title")}</div>
            <div class="subtitle">
              <span class="activity">${s.state}</span> · ${Ze(n,a.language)}
            </div>
          </div>
        </div>

        <div class="stats three">
          ${c?this._stat((Number(c.state)/1e3).toFixed(1),"km",Se(a,"stat.distance")):W}
          ${l?(()=>{const e=Ie(Number(l.state));return this._stat(e.value,e.unit,Se(a,"stat.duration"))})():W}
          ${d?this._stat(String(Math.round(Number(d.state))),"bpm",Se(a,"stat.avg_hr")):W}
          ${u?this._stat(Number(u.state).toFixed(0),"",Se(a,"stat.tss")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return I`
      <div class="stat">
        <div class="stat-value">${e}${t?I`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Mt.styles=[Ee,Te,n`
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
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `],e([ve()],Mt.prototype,"_config",void 0),Mt=e([ue("suunto-just-finished-card")],Mt),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0},{type:"suunto-lifetime-card",name:"Suunto - Lifetime Totals",description:"Total distance, time, energy, workouts and active days since you started.",preview:!0},{type:"suunto-recent-workouts-card",name:"Suunto - Recent Workouts",description:"A scrollable log of your last 15 workouts - activity, distance and duration.",preview:!0},{type:"suunto-elevation-card",name:"Suunto - Elevation & Climbing",description:"Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",preview:!0},{type:"suunto-location-card",name:"Suunto - Start Location",description:"Where your last workout started, with a one-tap link to open it in Maps.",preview:!0},{type:"suunto-fitness-card",name:"Suunto - Fitness",description:"VO2max, estimated VO2max and fitness age, with when they were last measured.",preview:!0},{type:"suunto-last-workout-tile-card",name:"Suunto - Last Workout (compact)",description:"A single-row summary of your last workout, for denser dashboards.",preview:!0},{type:"suunto-pmc-card",name:"Suunto - Performance Management",description:"CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",preview:!0},{type:"suunto-recovery-trends-card",name:"Suunto - Recovery Trends",description:"Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",preview:!0},{type:"suunto-weekly-volume-card",name:"Suunto - Weekly Volume",description:"A 12-week bar chart of your training distance, with the average and total.",preview:!0},{type:"suunto-hr-curve-card",name:"Suunto - Heart Rate Curve",description:"Today's 24/7 heart rate curve, from your watch's continuous heart rate tracking.",preview:!0},{type:"suunto-sleep-trends-card",name:"Suunto - Sleep Trends",description:"Sleep duration and quality over the last 30 nights.",preview:!0},{type:"suunto-weekly-goal-card",name:"Suunto - Weekly Goal",description:"This week's distance against a target you set.",preview:!0},{type:"suunto-streak-card",name:"Suunto - Activity Streak",description:"How many consecutive days you've been active.",preview:!0},{type:"suunto-just-finished-card",name:"Suunto - Just Finished",description:"Lights up right after your watch syncs a new workout, then goes quiet again.",preview:!0}),console.info("%c SUUNTO-CARDS %c 21 cards loaded ","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
