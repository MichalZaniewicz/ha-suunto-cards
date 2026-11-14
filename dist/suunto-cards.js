function e(e,t,a,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n<3?s(r):n>3?s(t,a,r):s(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new n(a,e,i)},o=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,g=globalThis,h=g.trustedTypes,_=h?h.emptyScript:"",y=g.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},f=(e,t)=>!l(e,t),k={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:f};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);s?.call(this,t),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(a)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:b).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=i;const n=s.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,a,i=!1,s){if(void 0!==e){const n=this.constructor;if(!1===i&&(s=this[e]),a??=n.getPropertyOptions(e),!((a.hasChanged??f)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},n){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,y?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,S=e=>e,$=x.trustedTypes,z=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,j="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+A,C=`<${T}>`,N=document,M=()=>N.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,R="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,V=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,O=/^(?:script|style|textarea|title)$/i,K=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),B=K(1),q=K(2),G=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),U=new WeakMap,Z=N.createTreeWalker(N,129);function J(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const X=(e,t)=>{const a=e.length-1,i=[];let s,n=2===t?"<svg>":3===t?"<math>":"",r=I;for(let t=0;t<a;t++){const a=e[t];let o,l,d=-1,c=0;for(;c<a.length&&(r.lastIndex=c,l=r.exec(a),null!==l);)c=r.lastIndex,r===I?"!--"===l[1]?r=P:void 0!==l[1]?r=V:void 0!==l[2]?(O.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=s??I,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?H:'"'===l[3]?F:L):r===F||r===L?r=H:r===P||r===V?r=I:(r=H,s=void 0);const u=r===H&&e[t+1].startsWith("/>")?" ":"";n+=r===I?a+C:d>=0?(i.push(o),a.slice(0,d)+j+a.slice(d)+A+u):a+A+(-2===d?t:u)}return[J(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[l,d]=X(e,t);if(this.el=Y.createElement(l,a),Z.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Z.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(j)){const t=d[n++],a=i.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:r[2],strings:a,ctor:"."===r[1]?ie:"?"===r[1]?se:"@"===r[1]?ne:ae}),i.removeAttribute(e)}else e.startsWith(A)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(O.test(i.tagName)){const e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],M()),Z.nextNode(),o.push({type:2,index:++s});i.append(e[t],M())}}}else if(8===i.nodeType)if(i.data===T)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)o.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,t){const a=N.createElement("template");return a.innerHTML=e,a}}function Q(e,t,a=e,i){if(t===G)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const n=E(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);Z.currentNode=i;let s=Z.nextNode(),n=0,r=0,o=a[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new te(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new re(s,this,e)),this._$AV.push(t),o=a[++r]}n!==o?.index&&(s=Z.nextNode(),n++)}return Z.currentNode=N,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),E(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Y.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new Y(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new te(this.O(M()),this.O(M()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=W}_$AI(e,t=this,a,i){const s=this.strings;let n=!1;if(void 0===s)e=Q(this,e,t,0),n=!E(e)||e!==this._$AH&&e!==G,n&&(this._$AH=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=Q(this,i[a+r],t,r),o===G&&(o=this._$AH[r]),n||=!E(o)||o!==this._$AH[r],o===W?e=W:e!==W&&(e+=(o??"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class ie extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class se extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ne extends ae{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===G)return;const a=this._$AH,i=e===W&&a!==W||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==W&&(a===W||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const oe=x.litHtmlPolyfillSupport;oe?.(Y,te),(x.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new te(t.insertBefore(M(),e),e,void 0,a??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:f},me=(e=pe,t,a)=>{const{kind:i,metadata:s}=a;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];t.call(this,a),this.requestUpdate(i,s,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return(t,a)=>"object"==typeof a?me(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return ge({...e,state:!0,attribute:!1})}var _e,ye;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(_e||(_e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ye||(ye={}));var ve=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s};const be={"stat.distance":"Distance","stat.duration":"Duration","stat.avg_speed":"Avg speed","stat.avg_pace":"Avg pace","stat.avg_hr":"Avg HR","stat.max_hr":"Max HR","stat.training_effect":"Training effect","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Feeling","stat.energy":"Energy","stat.time":"Time","stat.workouts":"Workouts","stat.steps":"Steps","stat.heart_rate":"Heart rate","stat.quality":"Quality","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Resting HR","stat.resting_hr_delta":"Resting HR ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stress state","stat.recovery_window":"Recovery time","stat.ctl":"CTL · fitness","stat.atl":"ATL · fatigue","stat.tsb":"TSB · form","stat.readiness":"Readiness","stat.recovery_balance":"Recovery balance","stat.training_suggestion":"Today's suggestion","stat.volume":"Volume","stat.intensity":"Intensity","stat.consistency":"Consistency","stat.recovery":"Recovery","stat.variety":"Variety","card.hr_zones.title":"Heart Rate Zones","card.hr_zones.last_workout":"Last workout","card.sleep_readiness.title":"Sleep & Readiness","card.sleep_readiness.subtitle_no_wake":"{duration} slept","card.sleep_readiness.subtitle_with_wake":"{duration} slept · woke {time}","card.recovery.title":"Recovery","card.training_load.title":"Training Load","card.training_load.subtitle_fallback":"Fitness (CTL) trend","card.week_stats.title":"This Week & Lifetime","card.week_stats.subtitle":"Last 7 days","card.week_stats.lifetime_title":"Lifetime by activity","card.today.title":"Today","card.today.subtitle":"Live from your watch","card.training_status.title":"Training Status","card.training_profile.title":"Training Profile","card.training_profile.subtitle":"Your training, at a glance","card.heart_rate.title":"Heart Rate","empty.last_workout.title":"No recent workout","empty.last_workout.subtitle":"Sync your watch with the Suunto app to see it here.","empty.hr_zones.title":"No zone data","empty.hr_zones.subtitle":"Your next outdoor workout with a heart-rate strap will fill this in.","empty.sleep_readiness.title":"No sleep data yet","empty.sleep_readiness.subtitle":"Wear your watch to bed to see it here.","empty.recovery.title":"No recovery data yet","empty.training_load.title":"Building your training load","empty.training_load.subtitle":"Needs a bit of workout history to compute - check back after a few sessions.","empty.week_stats.title":"No workout history yet","empty.today.title":"No live data yet","empty.training_status.title":"Not enough data yet","empty.training_status.subtitle":"Needs a bit of training history to compute.","empty.training_profile.title":"Not enough data yet","empty.training_profile.subtitle":"Needs a few more sensors reporting to compute your profile.","empty.heart_rate.title":"No live heart rate yet","empty.loading":"Loading...","empty.generic_error":"Could not load Suunto data.","error.no_device":"No Suunto device found - is the suunto_app integration set up?","error.multiple_devices":'Multiple Suunto devices found - set "device_id" in the card configuration.',"error.device_missing":'Configured device "{device}" has no suunto_app entities.',"band.readiness.great":"Great","band.readiness.fair":"Fair","band.readiness.low":"Low","band.recovery.well":"Well recovered","band.recovery.partial":"Partially recovered","band.recovery.low":"Low recovery","band.recovery.fully":"Fully recovered","band.recovery.recovering":"Recovering · {time} left","band.hrv.low":"HRV low","band.hrv.high":"HRV high","band.hrv.balanced":"HRV balanced","band.form.fresh":"Fresh","band.form.neutral":"Neutral","band.form.fatigued":"Fatigued","band.form.very_fatigued":"Very fatigued","band.acwr.safe":"Safe zone","band.acwr.low":"Low load","band.acwr.high":"High load - injury risk","band.suggestion.hard":"Go for it","band.suggestion.moderate":"Moderate effort","band.suggestion.easy":"Take it easy","band.suggestion.rest":"Rest day","chip.workout_logged_today":"Workout logged today","chip.workout_today":"Workout today","chip.recovering":"Recovering","chip.nap":"{minutes} min nap","chip.nap_earlier":"{minutes} min nap (earlier)","chip.workouts_30d":"{count} workouts in the last 30 days","chip.acwr":"ACWR {value} · {label}","profile.summary":"Strongest on {strong} · lightest on {light}","chip.more_activity_one":"+{count} more activity type","chip.more_activity_other":"+{count} more activity types","chip.unusual_recovery":"Unusual recovery","chip.days_since_one":"{count} day since last workout","chip.days_since_other":"{count} days since last workout","chip.manually_added":"Manually added","chip.sleep_stale":"No sleep from last night · night of {date}","readiness.balance_only":"Recovery balance only, no sleep","chip.no_hr":"No heart rate","card.heart_rate.measured":"Measured {time}","card.heart_rate.measured_ago":"Measured {ago} · {time}","stat.energy_active_sub":"{kcal} active","energy.total_unit":"kcal total","energy.split":"{active} active · {bmr} BMR","card.commute.title":"Commutes","card.commute.subtitle_year":"This year instead of the car","card.commute.subtitle_month":"This month instead of the car","commute.saved":"saved","commute.fuel_co2":"{fuel} l of fuel · {co2} kg less CO2","stat.rides":"Rides","stat.days":"Days","stat.avg_time":"Avg time","commute.this_month":"This month:","commute.this_year":"This year:","commute.rides_n":"{n} rides","empty.commute.title":"No commutes yet","empty.commute.subtitle":"Workouts Suunto tags as a commute show up here.","card.gear.title":"Gear","card.gear.subtitle":"Distance and service","gear.remaining":"{km} left","gear.over":"{km} over","chip.service":"Service","empty.gear.title":"No gear tracked yet","empty.gear.subtitle":"Add gear under the integration's Configure menu.","card.form_forecast.title":"Form Forecast","card.form_forecast.subtitle":"If you rest from today","stat.tomorrow":"Tomorrow","stat.peak_in":"Peak in {days} d","stat.maintenance":"Hold fitness / wk","empty.form_forecast.title":"No forecast yet","card.daily_brief.title":"Daily Brief","empty.daily_brief.title":"No brief yet","achievement.count_one":"{count} achievement","achievement.count_other":"{count} achievements","achievement.rank":"Rank #{rank} on this route","label.zone":"Zone {n}","label.deep":"Deep","label.light":"Light","label.rem":"REM","editor.auto_detect":"This card auto-detects your Suunto device - no configuration needed.","editor.pick_device":"Multiple Suunto devices were found - pick which one this card should read.","editor.device_label":"Suunto device","editor.units_label":"Units","editor.units_metric":"Metric (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Compact mode","editor.days_label":"Trend window (days)","editor.period_label":"Headline period","editor.period_year":"This year","editor.period_month":"This month","editor.goal_source_label":"Step goal from","editor.source_suunto":"Suunto app ({value})","editor.source_suunto_default":"Suunto app (no goal set, using {value})","editor.source_custom":"Custom","editor.fuel_source_label":"Fuel figures from","editor.source_integration":"Suunto integration ({litres} l/100 km, {price} per l)","editor.source_integration_unknown":"Suunto integration","editor.fuel_consumption_label":"Fuel consumption (l/100 km)","editor.fuel_price_label":"Fuel price per litre","editor.fuel_hint":"Change the integration's values under Settings > Devices & services > Suunto > Configure.","card.lifetime.title":"Lifetime Totals","card.lifetime.subtitle":"Since you started","stat.active_days":"Active days","empty.lifetime.title":"No lifetime data yet","card.recent_workouts.title":"Recent Workouts","empty.recent_workouts.title":"No recent workouts","card.elevation.title":"Elevation & Climbing","stat.ascent":"Ascent","stat.descent":"Descent","stat.ascent_time":"Ascent time","stat.descent_time":"Descent time","stat.min_altitude":"Min altitude","stat.max_altitude":"Max altitude","stat.ascent_rate":"Ascent rate","empty.elevation.title":"No elevation data","empty.elevation.subtitle":"Only outdoor workouts with a barometer record this.","card.location.title":"Start Location","location.open_in_maps":"Open in Maps","empty.location.title":"No location data","empty.location.subtitle":"Indoor workouts have no GPS start point.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Fitness age","fitness.measured":"Measured {time} · {activity}","empty.fitness.title":"No fitness data yet","empty.fitness.subtitle":"Suunto computes this from running or walking workouts only.","empty.fitness_trend.title":"No fitness data yet","empty.fitness_trend.subtitle":"Suunto computes this from running or walking workouts only.","card.pmc.title":"Performance Management","card.pmc.subtitle":"{days}-day trend","card.recovery_trends.title":"Recovery Trends","card.recovery_trends.subtitle":"{days}-day baseline","empty.recovery_trends.title":"No recovery trend data yet","card.weekly_volume.title":"Weekly Volume","card.weekly_volume.subtitle":"Last 12 weeks","empty.weekly_volume.title":"No weekly volume data yet","stat.average":"Average","stat.total":"Total","card.hr_curve.title":"Heart Rate Curve","card.hr_curve.subtitle":"Last 24 hours","stat.hr_now":"Now","stat.hr_min":"Today's min","stat.hr_max":"Today's max","empty.hr_curve.title":"No live HR data yet","empty.hr_curve.subtitle":"Wear your watch and sync to see today's curve here.","card.sleep_trends.title":"Sleep Trends","card.sleep_trends.subtitle":"Last {days} nights","empty.sleep_trends.title":"No sleep trend data yet","card.weekly_goal.title":"Weekly Goal","card.weekly_goal.subtitle":"{value} of {goal} km","empty.weekly_goal.title":"No weekly distance yet","editor.goal_label":"Weekly goal (km)","card.streak.title":"Activity Streak","card.streak.subtitle":"Last 14 days","streak.window_count_one":"{count} active day","streak.window_count_other":"{count} active days","streak.days_one":"{count} day streak","streak.days_other":"{count} days streak","streak.none":"No active streak - get moving today","empty.streak.title":"No workout history yet","just_finished.title":"Nice work!","just_finished.idle.title":"Waiting for your next workout","just_finished.idle.subtitle":"This lights up right after your watch syncs a new one.","empty.just_finished.title":"No recent workout","card.activity_trends.title":"Activity Trends","card.activity_trends.subtitle":"Last {days} days","empty.activity_trends.title":"No activity trend data yet","card.recovery_balance_trend.title":"Recovery Balance Trend","card.recovery_balance_trend.subtitle":"Last {days} days","empty.recovery_balance_trend.title":"No recovery trend data yet","card.readiness_trend.title":"Readiness Trend","card.readiness_trend.subtitle":"Last {days} days","empty.readiness_trend.title":"No readiness trend data yet","stat.cadence":"Cadence","stat.stride_length":"Stride","stat.pct_hrmax":"% of max HR","stat.sleep_avg_hr":"Sleep avg HR","stat.sleep_min_hr":"Sleep min HR","chip.bedtime":"Bedtime {time}","card.activity_calendar.title":"Activity Calendar","card.activity_calendar.subtitle":"Last 6 weeks","empty.activity_calendar.title":"No workout history yet","activity_calendar.active_days_one":"{count} active day","activity_calendar.active_days_other":"{count} active days","card.workout_comparison.title":"Workout Comparison","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Not enough matching workouts yet","empty.workout_comparison.subtitle":"Do the same activity twice to see a comparison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Duration ({delta})","stat.avg_hr_delta":"Avg HR ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"By The Numbers","card.milestones.subtitle":"Since you started","empty.milestones.title":"No lifetime data yet","stat.earth_laps":"Earth laps","stat.marathons":"Marathons","stat.moon_pct":"% to the Moon","stat.burgers":"Burgers","card.athlete_profile.title":"Training Personality","empty.athlete_profile.title":"Not enough data yet","personality.activity.cycling":"Cyclist","personality.activity.running":"Runner","personality.activity.trekking":"Hiker","personality.activity.walking":"Walker","personality.activity.gym":"Strength Athlete","personality.activity.swim":"Swimmer","personality.activity.ski":"Skier","personality.activity.row":"Rower","personality.activity.other":"Multi-Sport Athlete","personality.schedule.weekend":"Weekend Warrior","personality.schedule.weekday":"Weekday Regular","personality.schedule.balanced":"Balanced Scheduler","personality.time.morning":"Early Bird","personality.time.afternoon":"Midday Mover","personality.time.evening":"Evening Athlete","personality.time.night":"Night Owl","card.pace_trend.title":"Pace Trend","card.pace_trend.subtitle":"{activity} · last {count} sessions","empty.pace_trend.title":"Not enough matching workouts yet","empty.pace_trend.subtitle":"Do the same activity a few times to see a trend.","pace_trend.faster":"Getting faster","pace_trend.slower":"Getting slower","pace_trend.steady":"Holding steady","card.lap_splits.title":"Lap Splits","empty.lap_splits.title":"No lap data","empty.lap_splits.subtitle":"Not every workout has laps - your next one with them will fill this in.","stat.laps":"Laps","stat.fastest_lap":"Fastest lap","label.lap":"Lap {n}","card.training_effect_trend.title":"Training Effect Trend","card.fitness_trend.title":"Fitness Trend","empty.training_effect_trend.title":"No training effect data yet","achievements.badge.around_globe":"Around the Globe","achievements.badge.century_club":"Century Club - 100 workouts","achievements.badge.consistency_king":"Consistency King - 14-day streak","achievements.badge.iron_will":"Iron Will - 30-day streak","achievements.badge.days_100":"100 Active Days","achievements.badge.distance_1000":"1,000 km Club","achievements.badge.distance_5000":"5,000 km Club","achievements.badge.elite_engine":"Elite Engine - VO2max 55+","achievements.badge.energy_100k":"100,000 kcal Burned","achievements.badge.energy_1m":"1,000,000 kcal Burned","achievements.badge.full_year":"Full Year Active","achievements.badge.hours_100":"100 Hours","achievements.badge.hours_500":"500 Hours","achievements.badge.jack_of_all_trades":"Jack of All Trades - 5+ sports","achievements.badge.multi_sport":"Multi-Sport Athlete - 3+ sports","achievements.badge.solid_engine":"Solid Engine - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ workouts","achievements.badge.workouts_1000":"1,000 Workouts","achievements.badge.workouts_250":"250 Workouts","achievements.badge.workouts_500":"500 Workouts","achievements.category.days":"Active days","achievements.category.distance":"Distance","achievements.category.energy":"Energy","achievements.category.fitness":"Fitness level","achievements.category.records":"Personal records","achievements.category.time":"Training time","achievements.category.variety":"Variety","achievements.category.workouts":"Workouts logged","card.achievements.subtitle":"{unlocked} of {total} unlocked","card.achievements.title":"Achievements","achievements.next":"Next: {name} ({pct}%)","class.rest":"+{pct}% other activities","class.tag":"{activity}-focused build","empty.achievements.subtitle":"Log a few workouts to start unlocking badges.","empty.achievements.title":"No achievements yet","empty.class.subtitle":"Log a few workouts to reveal your class.","empty.class.title":"Not enough data yet","empty.level.subtitle":"Your first synced workout starts the climb.","empty.level.title":"No lifetime data yet","empty.player.subtitle":"Needs a bit of training history to compute your stats.","empty.player.title":"Not enough data yet","level.label":"LEVEL","level.source":"{count} workouts logged","level.subtitle":"Powered by your lifetime training load","level.title.grinder":"Endurance Grinder","level.title.legend":"Living Legend","level.title.novice":"Fresh Recruit","level.title.veteran":"Seasoned Veteran","level.xp_to_next":"{xp} XP to Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity} Specialist","player.help.title":"What these mean","player.help.sta":"STA · Stamina, from your Fitness (CTL): how much steady training load you can handle","player.help.pwr":"PWR · Power, from the average intensity (TSS) of your recent sessions","player.help.rec":"REC · Recovery, your current Readiness score","player.help.con":"CON · Consistency, workouts logged in the last 30 days","player.help.end":"END · Endurance, from your estimated VO2max","player.help.frm":"FRM · Form, from your current Training Stress Balance (TSB)","player.help.disclaimer":"Heuristic ratings computed from your own data - not an official Suunto metric.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendary","player.tier.silver":"Silver","records.climb":"Biggest climb","records.distance":"Farthest workout","records.pace":"Fastest pace","records.session":"Hardest session","records.streak":"Longest streak","records.streak_days_one":"{count} day","records.streak_days_other":"{count} days","records.workout":"Longest workout","class.name.cycling":"Endurance Warrior","class.name.running":"Sprinter","class.name.trekking":"Trailblazer","class.name.walking":"Wanderer","class.name.gym":"Strength Berserker","class.name.swim":"Tidecaller","class.name.ski":"Frostrunner","class.name.row":"Oarsman","class.name.other":"All-Rounder","class.flavor.cycling":"Built for long, steady efforts over raw speed. Every other sport is cross-training for the engine.","class.flavor.running":"Quick off the mark and built for tempo. Distance is a means to an end.","class.flavor.trekking":"At home on rough terrain, covering ground for hours at a time.","class.flavor.walking":"Steady, low-impact miles add up - consistency over intensity.","class.flavor.gym":"Raw power over distance. Strength sessions come first.","class.flavor.swim":"Endurance forged in the water, stroke by stroke.","class.flavor.ski":"Speed and rhythm across snow and cold.","class.flavor.row":"Rhythmic power, pulled one stroke at a time.","class.flavor.other":"No single sport dominates - a genuinely balanced mix.","card.next_milestone.title":"Next Milestone","card.next_milestone.subtitle":"Lifetime distance","empty.next_milestone.title":"No lifetime distance yet","next_milestone.remaining_label":"to go","next_milestone.target":"to {target} km lifetime - {pct}% there","next_milestone.workouts_one":"{count} workout to {target} lifetime","next_milestone.workouts_other":"{count} workouts to {target} lifetime","next_milestone.eta_one":"at {pace} km/week - about {weeks} week to go","next_milestone.eta_other":"at {pace} km/week - about {weeks} weeks to go","card.story.title":"Your Suunto Story","card.story.subtitle":"Since your first workout","empty.story.title":"No lifetime data yet","story.top_activity":"{activity} - your main activity","story.top_activity_share":"{count} workouts - {pct}% of your history","story.record_subtitle":"Your all-time personal record","card.sleep_clock.title":"Sleep Clock","card.sleep_clock.subtitle":"Last night","empty.sleep_clock.title":"No sleep data yet","empty.sleep_clock.subtitle":"Wear your watch to bed to see it here.","sleep_clock.quality":"{pct}% sleep quality","card.sleep_rhythm.title":"Sleep Rhythm","card.sleep_rhythm.subtitle":"Last 7 nights","empty.sleep_rhythm.title":"Not enough sleep history yet","empty.sleep_rhythm.subtitle":"Needs a few nights of data to show a pattern.","sleep_rhythm.avg_bedtime":"Avg bedtime {time}","sleep_rhythm.avg_wake":"Avg wake {time}","sleep_rhythm.spread":"{minutes} min spread","sleep_rhythm.legend_normal":"Typical night","sleep_rhythm.legend_outlier":"{minutes}+ min off average","card.route.title":"Route","empty.route.title":"No route data","empty.route.subtitle":"Indoor workouts have no GPS track.","route.pace_slower":"Slower","route.pace_faster":"Faster","card.month_story.title":"This Month","empty.month_story.title":"No workouts yet this month","story.share_month":"{count} workouts - {pct}% of this month","story.record_subtitle_month":"Your record this month","card.year_story.title":"This Year","empty.year_story.title":"No workouts yet this year","story.share_year":"{count} workouts - {pct}% of this year","story.record_subtitle_year":"Your record this year","card.best_efforts.title":"Best Efforts","card.best_efforts.subtitle":"{count} of {total} recorded","empty.best_efforts.title":"No best efforts yet","empty.best_efforts.subtitle":"Recorded from running workouts going forward, not retroactively.","best_efforts.not_yet":"Not yet recorded","distance.half_marathon":"Half Marathon","distance.marathon":"Marathon","card.steps_today.title":"Steps Today","card.steps_today.subtitle":"Goal: {goal} steps","empty.steps_today.title":"No step data yet","editor.steps_goal_label":"Daily goal (steps)","steps_today.goal_pct":"{pct}% of daily goal","steps_today.vs_avg_up":"+{pct}% vs your 7-day average ({avg})","steps_today.vs_avg_down":"-{pct}% vs your 7-day average ({avg})","card.steps_trend.title":"Steps Trend","card.steps_trend.subtitle":"Last {days} days","empty.steps_trend.title":"No step history yet","steps_trend.legend_met":"Goal met","steps_trend.legend_below":"Below goal","steps_trend.days_at_goal":"Days at goal","card.month_records.title":"This Month's Records","card.month_records.subtitle":"{count} of {total} set this month","empty.month_records.title":"No records yet this month","empty.month_records.subtitle":"Personal bests for this month will appear here.","card.year_records.title":"This Year's Records","card.year_records.subtitle":"{count} of {total} set this year","empty.year_records.title":"No records yet this year","empty.year_records.subtitle":"Personal bests for this year will appear here.","card.running_dynamics.title":"Running Dynamics","card.running_dynamics.subtitle":"{activity} - last {count} workouts","empty.running_dynamics.title":"Not enough data yet","empty.running_dynamics.subtitle":"Needs a few recent foot-based workouts with cadence data.","card.weekly_steps_goal.title":"Weekly Steps Goal","card.weekly_steps_goal.subtitle":"{value} of {goal} steps","empty.weekly_steps_goal.title":"No step data yet","editor.weekly_steps_goal_label":"Weekly goal (steps)","card.goals_overview.title":"Goals Overview","card.goals_overview.subtitle":"This week","empty.goals_overview.title":"No goal data yet","card.week_compare.title":"This Week vs Last Week","card.week_compare.subtitle":"Rolling 7-day totals","empty.week_compare.title":"Not enough history yet","empty.week_compare.subtitle":"Check back in about a week for a comparison.","week_compare.legend_now":"This week","week_compare.legend_prev":"Last week","card.sleep_detail.title":"Sleep Detail","card.sleep_detail.subtitle":"Last night","label.awake":"Awake","label.sleep_other":"Other sleep","sleep_detail.total_sleep":"total sleep","sleep_detail.in_bed":"{duration} in bed","sleep_detail.bedtime":"Bedtime","sleep_detail.wake":"Wake","sleep_detail.stages":"Sleep stages","sleep_detail.efficiency":"Sleep efficiency","sleep_detail.efficiency_sub":"Time asleep ÷ time in bed","sleep_detail.vitals":"Vitals","sleep_detail.insight_excellent":"{pct}% deep sleep · an excellent recovery window.","sleep_detail.insight_solid":"{pct}% deep sleep · a solid night's recovery.","sleep_detail.insight_light":"{pct}% deep sleep · lighter than usual.","editor.energy_goal_source_label":"Calorie goal from","editor.sleep_goal_source_label":"Sleep goal from","editor.training_goal_source_label":"Training time goal from","editor.energy_goal_label":"Daily goal (active kcal)","editor.sleep_goal_label":"Sleep goal (hours)","editor.training_goal_label":"Weekly goal (hours)","editor.show_goals_label":"Show goals","editor.source_suunto_none":"Suunto app (no goal set)","editor.distance_goal_hint":"The Suunto app has no distance goal, so this one is always your own.","card.daily_goals.title":"Daily Goals","card.daily_goals.subtitle":"Steps, calories and sleep","empty.daily_goals.title":"No goal data yet","stat.active_kcal":"Active kcal","stat.sleep":"Sleep","stat.training_time":"Training time","goal.of":"of {goal}","goal.energy_active_of":"{kcal} active of {goal}","sleep_goal.label":"Sleep goal","sleep_goal.short":"{value} of {goal} · {missing} short","sleep_goal.met":"{value} of {goal} · goal met","sleep_trends.nights_at_goal":"Nights at goal","sleep_trends.avg_vs_goal":"Avg vs goal","sleep_trends.legend_goal":"Goal {goal}","card.ai_insight.title":"AI Insight","empty.ai_insight.title":"AI insight is off","empty.ai_insight.subtitle":"Turn it on in the integration: Configure -> AI daily insight","empty.ai_insight.waiting":"No AI insight yet today","ai_insight.generating":"Generating the analysis","ai_insight.night":"night {night}","ai_insight.no_night":"last night not synced yet","ai_insight.no_section":"No data for this section","ai_insight.advice":"Advice for today","ai_insight.disclaimer":"Not medical advice","ai_insight.section.sleep":"Sleep","ai_insight.section.recovery":"Recovery","ai_insight.section.training":"Training","ai_insight.section.activity":"Activity","ai_insight.section_full.sleep":"Sleep","ai_insight.section_full.recovery":"Health and recovery","ai_insight.section_full.training":"Training","ai_insight.section_full.activity":"Daily activity","ai_insight.status.good":"Good","ai_insight.status.ok":"OK","ai_insight.status.caution":"Caution","ai_insight.status.rest":"Rest","strategy.title":"Training","strategy.none":"No Suunto account","strategy.none_text":"No account from the Suunto App integration was found. Add the integration under Settings > Devices & services, then reload this dashboard.","strategy.section.today":"Today","strategy.section.ai":"AI analysis","strategy.section.sleep":"Sleep","strategy.section.recovery":"Recovery","strategy.section.last_workout":"Last workout","strategy.section.load":"Load and form","strategy.section.week":"This week","strategy.section.records":"Records","strategy.section.history":"History and profile","strategy.section.gear":"Gear and commutes","card.ai_weekly.title":"AI Weekly Summary","empty.ai_weekly.subtitle":"Needs ha-suunto 1.0.38 or newer with the AI turned on: Configure -> AI","empty.ai_weekly.waiting":"No weekly AI summary yet","ai_weekly.week":"week {range}","ai_weekly.advice":"Plan for next week","editor.ai_report_label":"Report","editor.ai_report_daily":"Daily insight","editor.ai_report_weekly":"Weekly summary","editor.ai_section_label":"Section","editor.ai_single_label":"Show only this section","card.sleep_regularity.title":"Sleep Regularity","sleep_regularity.subtitle":"Last 4 weeks · {nights} nights","empty.sleep_regularity.title":"Not enough nights yet","empty.sleep_regularity.subtitle":"Needs about a week of consecutive nights with the watch on.","sleep_regularity.bed":"Avg bedtime {time}","sleep_regularity.wake":"Avg wake {time}","sleep_regularity.mid_work":"Mid-sleep, Sun-Thu nights {time}","sleep_regularity.mid_free":"Mid-sleep, Fri/Sat nights {time}","band.regularity.regular":"Regular","band.regularity.fair":"Fairly regular","band.regularity.irregular":"Irregular","chip.regularity":"Regularity {value}","chip.social_jetlag":"Social jetlag {value}","card.aerobic_decoupling.title":"Aerobic Decoupling","empty.aerobic_decoupling.title":"No long workout analysed yet","empty.aerobic_decoupling.subtitle":"Shows up after a workout of 40+ minutes with GPS and heart rate.","aerobic_decoupling.analyzed":"{minutes} min analysed","aerobic_decoupling.hint":"under 5 % = solid aerobic base","aerobic_decoupling.first_half":"1st half","aerobic_decoupling.second_half":"2nd half","aerobic_decoupling.trend":"Last {count} analysed workouts","band.decoupling.coupled":"Coupled","band.decoupling.moderate":"Moderate drift","band.decoupling.high":"High drift","stat.decoupling":"HR drift","card.personal_insights.title":"What Works For You","personal_insights.subtitle":"From your last {nights} nights","empty.personal_insights.title":"No clear patterns yet","empty.personal_insights.subtitle":"Needs a few weeks of sleep and training data. Only clear differences are shown.","personal_insights.these_nights":"these nights","personal_insights.the_rest":"the rest","personal_insights.nights_count":"{with} vs {without} nights","personal_insights.disclaimer":"Patterns in your own data, not proof of cause. A finding needs at least 4 nights or workouts on each side.","insights.cond.late_workout":"After a workout ending after {time}","insights.cond.training_day":"On training days","insights.cond.hard_day":"After your hardest training days","insights.cond.early_bed":"When you go to bed before {bedtime}","insights.cond.free_night":"On Friday and Saturday nights","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Resting HR","insights.metric.sleep":"Sleep","daily_brief.your_pattern":"Your pattern","editor.show_insight_label":"Show your strongest pattern","editor.look_section":"Appearance","editor.title":"Title","editor.icon":"Icon (e.g. mdi:star)","editor.accent_color":"Accent color (e.g. #e91e63 or teal)","editor.accent_hint":"The same color in light and dark mode. An invalid color is ignored.","editor.accent_default":"Default (amber)","editor.accent_pink":"Pink","editor.accent_purple":"Purple","editor.accent_teal":"Teal","editor.accent_green":"Green","editor.accent_blue":"Blue","editor.hide_header":"Hide header","editor.hide_icon":"Hide icon","editor.hide_subtitle":"Hide subtitle","editor.hide_legend":"Hide legend","editor.text_size":"Text size","text_size.normal":"Normal","text_size.large":"Large (115%)","text_size.larger":"Larger (130%)","text_size.largest":"Largest (150%)","editor.language":"Language","editor.language_auto":"Home Assistant's","editor.hide_sync_warning":"Hide the not-synced warning","editor.max_items":"Number of items","editor.list_height":"List height (px)","card.stress_today.title":"Stress & Recovery","stress_today.subtitle_today":"Today until {time}","stress_today.subtitle_waiting":"Yesterday · today has not synced yet","stress_today.yesterday":"Yesterday","empty.stress_today.title":"No stress data yet","empty.stress_today.subtitle":"Needs Suunto App (unofficial) 1.0.37 or newer and a synced watch.","stress.state.recovering":"Recovering","stress.state.active":"Active","stress.state.inactive":"Inactive","stress.state.stressed":"Stressed","insights.cond.hot_weather":"In heat ({temp}°C and above)","insights.cond.cold_weather":"In the cold ({temp}°C and below)","insights.metric.efficiency":"Efficiency","insights.unit.per_beat":"m/beat","personal_insights.subtitle_days":"From your last {nights} nights and {days} training days","personal_insights.these_workouts":"these workouts","personal_insights.workouts_count":"{with} vs {without} workouts","personal_insights.speed_at_hr":"{with_speed} km/h at {with_hr} bpm vs {without_speed} km/h at {without_hr} bpm","sync.at":"synced {time}","sync.yesterday":"synced yesterday {time}","chip.not_synced":"Watch not synced for {hours} h","editor.eink":"E-ink screen","eink.off":"Off","eink.bw":"Black and white","eink.gray":"4 greys","eink.red":"Black, white and red","eink.yellow":"Black, white and yellow","eink.color":"6 colours","editor.max_lines":"Max lines of text","card.whats_new.title":"What's new","card.whats_new.subtitle":"Last {days} days","whats_new.today":"Today","whats_new.yesterday":"Yesterday","whats_new.now":"Now","whats_new.empty":"Nothing new in the last {days} days","whats_new.record":"New record: {label} {value}","whats_new.record_year":"Record of the year: {label} {value}","whats_new.record_month":"Record of the month: {label} {value}","whats_new.best_effort":"Best effort {distance}: {time}","whats_new.ai_daily":"Daily AI insight","whats_new.ai_weekly":"Weekly AI summary","whats_new.gear_due":"{name}: time for a service","editor.whats_new_show":"Show","whats_new.kind.workouts":"Workouts","whats_new.kind.records":"Records and best efforts","whats_new.kind.achievements":"Route achievements","whats_new.kind.ai":"AI reports","whats_new.kind.gear":"Gear service"},fe={en:be,pl:{"stat.distance":"Dystans","stat.duration":"Czas trwania","stat.avg_speed":"Śr. prędkość","stat.avg_pace":"Śr. tempo","stat.avg_hr":"Śr. tętno","stat.max_hr":"Maks. tętno","stat.training_effect":"Efekt treningowy","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Samopoczucie","stat.energy":"Energia","stat.time":"Czas","stat.workouts":"Treningi","stat.steps":"Kroki","stat.heart_rate":"Tętno","stat.quality":"Jakość","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Tętno spocz.","stat.resting_hr_delta":"Spocz. ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stan stresu","stat.recovery_window":"Czas regeneracji","stat.ctl":"CTL · forma","stat.atl":"ATL · zmęczenie","stat.tsb":"TSB · forma","stat.readiness":"Gotowość","stat.recovery_balance":"Bilans regeneracji","stat.training_suggestion":"Sugestia na dziś","stat.volume":"Objętość","stat.intensity":"Intensywność","stat.consistency":"Regularność","stat.recovery":"Regeneracja","stat.variety":"Różnorodność","card.hr_zones.title":"Strefy tętna","card.hr_zones.last_workout":"Ostatni trening","card.sleep_readiness.title":"Sen i gotowość","card.sleep_readiness.subtitle_no_wake":"{duration} snu","card.sleep_readiness.subtitle_with_wake":"{duration} snu · pobudka {time}","card.recovery.title":"Regeneracja","card.training_load.title":"Obciążenie treningowe","card.training_load.subtitle_fallback":"Trend formy (CTL)","card.week_stats.title":"Ten tydzień i statystyki życiowe","card.week_stats.subtitle":"Ostatnie 7 dni","card.week_stats.lifetime_title":"Statystyki życiowe wg dyscypliny","card.today.title":"Dziś","card.today.subtitle":"Na żywo z zegarka","card.training_status.title":"Status treningowy","card.training_profile.title":"Profil treningowy","card.training_profile.subtitle":"Twój trening w pigułce","card.heart_rate.title":"Tętno","empty.last_workout.title":"Brak ostatniego treningu","empty.last_workout.subtitle":"Zsynchronizuj zegarek z aplikacją Suunto, aby zobaczyć go tutaj.","empty.hr_zones.title":"Brak danych o strefach","empty.hr_zones.subtitle":"Twój następny trening na zewnątrz z pasem do pomiaru tętna uzupełni te dane.","empty.sleep_readiness.title":"Brak jeszcze danych o śnie","empty.sleep_readiness.subtitle":"Noś zegarek podczas snu, aby zobaczyć dane tutaj.","empty.recovery.title":"Brak jeszcze danych o regeneracji","empty.training_load.title":"Obliczanie obciążenia treningowego","empty.training_load.subtitle":"Potrzebna jest historia treningów do wyliczenia - sprawdź ponownie po kilku sesjach.","empty.week_stats.title":"Brak jeszcze historii treningów","empty.today.title":"Brak jeszcze danych na żywo","empty.training_status.title":"Za mało danych","empty.training_status.subtitle":"Potrzeba trochę historii treningów, żeby to wyliczyć.","empty.training_profile.title":"Za mało danych","empty.training_profile.subtitle":"Potrzeba więcej danych z czujników, żeby wyliczyć profil.","empty.heart_rate.title":"Brak jeszcze danych o tętnie","empty.loading":"Wczytywanie...","empty.generic_error":"Nie udało się wczytać danych Suunto.","error.no_device":"Nie znaleziono urządzenia Suunto - czy integracja suunto_app jest skonfigurowana?","error.multiple_devices":'Znaleziono wiele urządzeń Suunto - ustaw "device_id" w konfiguracji karty.',"error.device_missing":'Skonfigurowane urządzenie "{device}" nie ma encji suunto_app.',"band.readiness.great":"Świetna","band.readiness.fair":"Przeciętna","band.readiness.low":"Niska","band.recovery.well":"Dobrze zregenerowany","band.recovery.partial":"Częściowo zregenerowany","band.recovery.low":"Niska regeneracja","band.recovery.fully":"W pełni zregenerowany","band.recovery.recovering":"Regeneracja · pozostało {time}","band.hrv.low":"HRV niskie","band.hrv.high":"HRV wysokie","band.hrv.balanced":"HRV wyrównane","band.form.fresh":"Wypoczęty","band.form.neutral":"Neutralna","band.form.fatigued":"Zmęczony","band.form.very_fatigued":"Bardzo zmęczony","band.acwr.safe":"Strefa bezpieczna","band.acwr.low":"Niskie obciążenie","band.acwr.high":"Wysokie obciążenie - ryzyko kontuzji","band.suggestion.hard":"Dawaj mocno","band.suggestion.moderate":"Umiarkowany wysiłek","band.suggestion.easy":"Trenuj lekko","band.suggestion.rest":"Dzień odpoczynku","chip.workout_logged_today":"Trening zarejestrowany dziś","chip.workout_today":"Trening dziś","chip.recovering":"Regeneracja","chip.nap":"{minutes} min drzemki","chip.nap_earlier":"{minutes} min drzemki (wcześniej)","chip.workouts_30d":"{count} treningów w ciągu ostatnich 30 dni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Najmocniej: {strong} · najsłabiej: {light}","chip.more_activity_one":"+{count} inna dyscyplina","chip.more_activity_other":"+{count} inne dyscypliny","chip.unusual_recovery":"Nietypowa regeneracja","chip.days_since_one":"{count} dzień od ostatniego treningu","chip.days_since_other":"{count} dni od ostatniego treningu","chip.manually_added":"Dodano ręcznie","chip.sleep_stale":"Brak snu z ostatniej nocy · dane z nocy {date}","readiness.balance_only":"Tylko z bilansu regeneracji, bez snu","chip.no_hr":"Bez tętna","card.heart_rate.measured":"Pomiar {time}","card.heart_rate.measured_ago":"Pomiar {ago} · {time}","stat.energy_active_sub":"{kcal} aktywnych","energy.total_unit":"kcal łącznie","energy.split":"{active} aktywne · {bmr} BMR","card.commute.title":"Dojazdy","card.commute.subtitle_year":"W tym roku zamiast samochodu","card.commute.subtitle_month":"W tym miesiącu zamiast samochodu","commute.saved":"zaoszczędzone","commute.fuel_co2":"{fuel} l paliwa · {co2} kg CO2 mniej","stat.rides":"Przejazdy","stat.days":"Dni","stat.avg_time":"Śr. czas","commute.this_month":"Ten miesiąc:","commute.this_year":"Ten rok:","commute.rides_n":"{n} przejazdów","empty.commute.title":"Brak dojazdów","empty.commute.subtitle":"Tu pojawią się treningi oznaczone przez Suunto jako dojazd.","card.gear.title":"Sprzęt","card.gear.subtitle":"Przebieg i serwis","gear.remaining":"Zostało {km}","gear.over":"Przekroczony o {km}","chip.service":"Serwis","empty.gear.title":"Brak śledzonego sprzętu","empty.gear.subtitle":"Dodaj sprzęt w menu Konfiguruj integracji.","card.form_forecast.title":"Prognoza formy","card.form_forecast.subtitle":"Jeśli od dziś odpoczywasz","stat.tomorrow":"Jutro","stat.peak_in":"Szczyt za {days} dni","stat.maintenance":"Utrzymanie / tydz.","empty.form_forecast.title":"Brak prognozy","card.daily_brief.title":"Brief dnia","empty.daily_brief.title":"Brak briefu","achievement.count_one":"{count} osiągnięcie","achievement.count_other":"{count} osiągnięcia","achievement.rank":"Miejsce #{rank} na tej trasie","label.zone":"Strefa {n}","label.deep":"Głęboki","label.light":"Płytki","label.rem":"REM","editor.auto_detect":"Ta karta automatycznie wykrywa Twoje urządzenie Suunto - konfiguracja nie jest potrzebna.","editor.pick_device":"Znaleziono wiele urządzeń Suunto - wybierz, z którego ta karta ma korzystać.","editor.device_label":"Urządzenie Suunto","editor.units_label":"Jednostki","editor.units_metric":"Metryczne (km)","editor.units_imperial":"Imperialne (mi)","editor.compact_label":"Tryb kompaktowy","editor.days_label":"Okno trendu (dni)","editor.period_label":"Główny okres","editor.period_year":"Ten rok","editor.period_month":"Ten miesiąc","editor.goal_source_label":"Cel kroków z","editor.source_suunto":"Aplikacja Suunto ({value})","editor.source_suunto_default":"Aplikacja Suunto (brak celu, używam {value})","editor.source_custom":"Własne","editor.fuel_source_label":"Dane paliwa z","editor.source_integration":"Integracja Suunto ({litres} l/100 km, {price} za l)","editor.source_integration_unknown":"Integracja Suunto","editor.fuel_consumption_label":"Spalanie (l/100 km)","editor.fuel_price_label":"Cena paliwa za litr","editor.fuel_hint":"Wartości integracji zmienisz w Ustawienia > Urządzenia i usługi > Suunto > Konfiguruj.","card.lifetime.title":"Statystyki życiowe","card.lifetime.subtitle":"Od początku","stat.active_days":"Aktywne dni","empty.lifetime.title":"Brak jeszcze danych życiowych","card.recent_workouts.title":"Ostatnie treningi","empty.recent_workouts.title":"Brak ostatnich treningów","card.elevation.title":"Przewyższenia i podejścia","stat.ascent":"Podejście","stat.descent":"Zejście","stat.ascent_time":"Czas podejścia","stat.descent_time":"Czas zejścia","stat.min_altitude":"Wys. min.","stat.max_altitude":"Wys. maks.","stat.ascent_rate":"Tempo podejścia","empty.elevation.title":"Brak danych o przewyższeniach","empty.elevation.subtitle":"Rejestrują to tylko treningi na zewnątrz z barometrem.","card.location.title":"Lokalizacja startu","location.open_in_maps":"Otwórz w Mapach","empty.location.title":"Brak danych lokalizacji","empty.location.subtitle":"Treningi w pomieszczeniu nie mają punktu startu GPS.","card.fitness.title":"Sprawność","stat.vo2max":"VO2max","stat.estimated_vo2max":"Szac. VO2max","stat.fitness_age":"Wiek fizyczny","fitness.measured":"Zmierzono {time} · {activity}","empty.fitness.title":"Brak jeszcze danych o sprawności","empty.fitness.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","empty.fitness_trend.title":"Brak jeszcze danych o sprawności","empty.fitness_trend.subtitle":"Suunto oblicza to tylko na podstawie biegania lub marszu.","card.pmc.title":"Zarządzanie formą","card.pmc.subtitle":"Trend {days}-dniowy","card.recovery_trends.title":"Trendy regeneracji","card.recovery_trends.subtitle":"Poziom bazowy {days} dni","empty.recovery_trends.title":"Brak jeszcze danych o trendach regeneracji","card.weekly_volume.title":"Wolumen tygodniowy","card.weekly_volume.subtitle":"Ostatnie 12 tygodni","empty.weekly_volume.title":"Brak jeszcze danych o wolumenie tygodniowym","stat.average":"Średnia","stat.total":"Suma","card.hr_curve.title":"Krzywa tętna","card.hr_curve.subtitle":"Ostatnie 24 godziny","stat.hr_now":"Teraz","stat.hr_min":"Min. dzisiaj","stat.hr_max":"Maks. dzisiaj","empty.hr_curve.title":"Brak jeszcze danych o tętnie na żywo","empty.hr_curve.subtitle":"Noś zegarek i zsynchronizuj go, aby zobaczyć tu dzisiejszą krzywą.","card.sleep_trends.title":"Trendy snu","card.sleep_trends.subtitle":"Ostatnie {days} nocy","empty.sleep_trends.title":"Brak jeszcze danych o trendach snu","card.weekly_goal.title":"Cel tygodniowy","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Brak jeszcze danych o dystansie tygodniowym","editor.goal_label":"Cel tygodniowy (km)","card.streak.title":"Seria aktywności","card.streak.subtitle":"Ostatnie 14 dni","streak.window_count_one":"{count} aktywny dzień","streak.window_count_other":"{count} aktywne dni","streak.days_one":"{count} dzień serii","streak.days_other":"{count} dni serii","streak.none":"Brak aktywnej serii - zacznij dziś","empty.streak.title":"Brak jeszcze historii treningów","just_finished.title":"Świetna robota!","just_finished.idle.title":"Czekanie na kolejny trening","just_finished.idle.subtitle":"Ta karta zaświeci się zaraz po synchronizacji nowego treningu.","empty.just_finished.title":"Brak ostatniego treningu","card.activity_trends.title":"Trendy aktywności","card.activity_trends.subtitle":"Ostatnie {days} dni","empty.activity_trends.title":"Brak jeszcze danych o trendach aktywności","card.recovery_balance_trend.title":"Trend bilansu regeneracji","card.recovery_balance_trend.subtitle":"Ostatnie {days} dni","empty.recovery_balance_trend.title":"Brak jeszcze danych o trendzie regeneracji","card.readiness_trend.title":"Trend gotowości","card.readiness_trend.subtitle":"Ostatnie {days} dni","empty.readiness_trend.title":"Brak jeszcze danych o trendzie gotowości","stat.cadence":"Kadencja","stat.stride_length":"Długość kroku","stat.pct_hrmax":"% tętna maks.","stat.sleep_avg_hr":"Śr. tętno snu","stat.sleep_min_hr":"Min. tętno snu","chip.bedtime":"Zaśnięcie {time}","card.activity_calendar.title":"Kalendarz aktywności","card.activity_calendar.subtitle":"Ostatnie 6 tygodni","empty.activity_calendar.title":"Brak jeszcze historii treningów","activity_calendar.active_days_one":"{count} aktywny dzień","activity_calendar.active_days_other":"{count} aktywne dni","card.workout_comparison.title":"Porównanie treningów","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.workout_comparison.subtitle":"Wykonaj tę samą aktywność dwa razy, aby zobaczyć porównanie.","stat.distance_delta":"Dystans ({delta})","stat.duration_delta":"Czas trwania ({delta})","stat.avg_hr_delta":"Śr. tętno ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"W liczbach","card.milestones.subtitle":"Od początku","empty.milestones.title":"Brak jeszcze danych życiowych","stat.earth_laps":"Okrążeń Ziemi","stat.marathons":"Maratonów","stat.moon_pct":"% drogi na Księżyc","stat.burgers":"Burgerów","card.athlete_profile.title":"Osobowość treningowa","empty.athlete_profile.title":"Brak jeszcze wystarczających danych","personality.activity.cycling":"Kolarz","personality.activity.running":"Biegacz","personality.activity.trekking":"Piechur","personality.activity.walking":"Spacerowicz","personality.activity.gym":"Siłacz","personality.activity.swim":"Pływak","personality.activity.ski":"Narciarz","personality.activity.row":"Wioślarz","personality.activity.other":"Wielosportowiec","personality.schedule.weekend":"Wojownik weekendu","personality.schedule.weekday":"Regularny w tygodniu","personality.schedule.balanced":"Zbalansowany harmonogram","personality.time.morning":"Ranny ptaszek","personality.time.afternoon":"Popołudniowiec","personality.time.evening":"Wieczorny sportowiec","personality.time.night":"Nocny marek","card.pace_trend.title":"Trend tempa","card.pace_trend.subtitle":"{activity} · ostatnie {count} sesji","empty.pace_trend.title":"Brak jeszcze wystarczającej liczby podobnych treningów","empty.pace_trend.subtitle":"Wykonaj tę samą aktywność kilka razy, aby zobaczyć trend.","pace_trend.faster":"Przyspieszasz","pace_trend.slower":"Zwalniasz","pace_trend.steady":"Stabilne tempo","card.lap_splits.title":"Czasy Okrążeń","empty.lap_splits.title":"Brak danych o okrążeniach","empty.lap_splits.subtitle":"Nie każdy trening ma okrążenia - uzupełni się przy najbliższym, który je ma.","stat.laps":"Okrążenia","stat.fastest_lap":"Najszybsze okrążenie","label.lap":"Okrążenie {n}","card.training_effect_trend.title":"Trend Efektu Treningowego","card.fitness_trend.title":"Trend Sprawności","empty.training_effect_trend.title":"Brak jeszcze danych o efekcie treningowym","achievements.badge.around_globe":"Dookoła świata","achievements.badge.century_club":"Klub Setki - 100 treningów","achievements.badge.consistency_king":"Król Regularności - seria 14 dni","achievements.badge.iron_will":"Żelazna Wola - seria 30 dni","achievements.badge.days_100":"100 aktywnych dni","achievements.badge.distance_1000":"Klub 1000 km","achievements.badge.distance_5000":"Klub 5000 km","achievements.badge.elite_engine":"Elitarny silnik - VO2max 55+","achievements.badge.energy_100k":"Spalone 100 000 kcal","achievements.badge.energy_1m":"Spalony 1 000 000 kcal","achievements.badge.full_year":"Cały rok aktywności","achievements.badge.hours_100":"100 godzin","achievements.badge.hours_500":"500 godzin","achievements.badge.jack_of_all_trades":"Wszechstronny sportowiec - 5+ dyscyplin","achievements.badge.multi_sport":"Sportowiec wielodyscyplinowy - 3+ dyscypliny","achievements.badge.solid_engine":"Solidny silnik - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treningów","achievements.badge.workouts_1000":"1000 treningów","achievements.badge.workouts_250":"250 treningów","achievements.badge.workouts_500":"500 treningów","achievements.category.days":"Aktywne dni","achievements.category.distance":"Dystans","achievements.category.energy":"Energia","achievements.category.fitness":"Poziom wydolności","achievements.category.records":"Rekordy osobiste","achievements.category.time":"Czas treningowy","achievements.category.variety":"Różnorodność","achievements.category.workouts":"Zarejestrowane treningi","card.achievements.subtitle":"{unlocked} z {total} odblokowanych","card.achievements.title":"Osiągnięcia","achievements.next":"Następne: {name} ({pct}%)","class.rest":"+{pct}% inne aktywności","class.tag":"{activity} - profil treningowy","empty.achievements.subtitle":"Zarejestruj kilka treningów, aby zacząć odblokowywać odznaki.","empty.achievements.title":"Brak osiągnięć","empty.class.subtitle":"Zarejestruj kilka treningów, aby odkryć swoją klasę.","empty.class.title":"Za mało danych","empty.level.subtitle":"Pierwszy zsynchronizowany trening zaczyna wspinaczkę.","empty.level.title":"Brak danych życiowych","empty.player.subtitle":"Potrzeba trochę historii treningów, aby obliczyć statystyki.","empty.player.title":"Za mało danych","level.label":"POZIOM","level.source":"{count} zarejestrowanych treningów","level.subtitle":"Napędzane Twoim całkowitym obciążeniem treningowym","level.title.grinder":"Wytrwały Zawodnik","level.title.legend":"Żywa Legenda","level.title.novice":"Świeży Rekrut","level.title.veteran":"Doświadczony Weteran","level.xp_to_next":"{xp} XP do poz. {level}","level.xp_total":"{xp} XP","player.archetype":"Specjalista: {activity}","player.help.title":"Co to oznacza","player.help.sta":"STA · Wytrzymałość, z Formy (CTL): jak duże stałe obciążenie treningowe jesteś w stanie znieść","player.help.pwr":"PWR · Moc, ze średniej intensywności (TSS) ostatnich treningów","player.help.rec":"REC · Regeneracja, Twój aktualny wynik Gotowości","player.help.con":"CON · Regularność, liczba treningów w ostatnich 30 dniach","player.help.end":"END · Wytrwałość, z szacowanego VO2max","player.help.frm":"FRM · Forma, z aktualnego bilansu obciążenia treningowego (TSB)","player.help.disclaimer":"Wskaźniki heurystyczne liczone z Twoich danych - nie oficjalna metryka Suunto.","player.tier.bronze":"Brąz","player.tier.gold":"Złoto","player.tier.legendary":"Legendarny","player.tier.silver":"Srebro","records.climb":"Największe podejście","records.distance":"Najdłuższy dystans","records.pace":"Najszybsze tempo","records.session":"Najcięższy trening","records.streak":"Najdłuższa seria","records.streak_days_one":"{count} dzień","records.streak_days_other":"{count} dni","records.workout":"Najdłuższy trening","class.name.cycling":"Wojownik Wytrzymałości","class.name.running":"Sprinter","class.name.trekking":"Zdobywca Szlaków","class.name.walking":"Wędrowiec","class.name.gym":"Berserker Siły","class.name.swim":"Władca Fal","class.name.ski":"Biegacz Mrozu","class.name.row":"Wioślarz","class.name.other":"Wszechstronny","class.flavor.cycling":"Stworzony do długich, równych wysiłków, nie do surowej szybkości. Każdy inny sport to trening uzupełniający.","class.flavor.running":"Szybki start i tempo ponad wszystko. Dystans jest tylko środkiem do celu.","class.flavor.trekking":"Czuje się jak w domu na trudnym terenie, pokonując kilometry godzinami.","class.flavor.walking":"Równe, mało obciążające kilometry sumują się - regularność ponad intensywność.","class.flavor.gym":"Surowa siła ponad dystans. Treningi siłowe są na pierwszym miejscu.","class.flavor.swim":"Wytrzymałość hartowana w wodzie, ruch po ruchu.","class.flavor.ski":"Szybkość i rytm na śniegu i mrozie.","class.flavor.row":"Rytmiczna siła, pociągnięcie po pociągnięciu.","class.flavor.other":"Żaden sport nie dominuje - naprawdę zrównoważona mieszanka.","card.next_milestone.title":"Do następnego celu","card.next_milestone.subtitle":"Dystans życiowy","empty.next_milestone.title":"Brak jeszcze dystansu życiowego","next_milestone.remaining_label":"zostało","next_milestone.target":"do {target} km życiowych - {pct}% drogi","next_milestone.workouts_one":"{count} trening do {target} w karierze","next_milestone.workouts_other":"{count} treningów do {target} w karierze","next_milestone.eta_one":"przy {pace} km/tydz. - około {weeks} tydzień zostało","next_milestone.eta_other":"przy {pace} km/tydz. - około {weeks} tygodni zostało","card.story.title":"Twoja historia z Suunto","card.story.subtitle":"Od pierwszego treningu","empty.story.title":"Brak jeszcze danych życiowych","story.top_activity":"{activity} - Twoja główna aktywność","story.top_activity_share":"{count} treningów - {pct}% Twojej historii","story.record_subtitle":"Twój rekord życiowy","card.sleep_clock.title":"Zegar snu","card.sleep_clock.subtitle":"Ostatnia noc","empty.sleep_clock.title":"Brak jeszcze danych o śnie","empty.sleep_clock.subtitle":"Załóż zegarek na noc, żeby to zobaczyć.","sleep_clock.quality":"{pct}% jakości snu","card.sleep_rhythm.title":"Rytm snu","card.sleep_rhythm.subtitle":"Ostatnie 7 nocy","empty.sleep_rhythm.title":"Za mało jeszcze historii snu","empty.sleep_rhythm.subtitle":"Potrzeba kilku nocy danych, żeby pokazać wzorzec.","sleep_rhythm.avg_bedtime":"Śr. początek snu {time}","sleep_rhythm.avg_wake":"Śr. pobudka {time}","sleep_rhythm.spread":"Rozrzut {minutes} min","sleep_rhythm.legend_normal":"Zwykła noc","sleep_rhythm.legend_outlier":"Odstaje {minutes}+ min od średniej","card.route.title":"Trasa","empty.route.title":"Brak danych o trasie","empty.route.subtitle":"Treningi w pomieszczeniu nie mają zapisu GPS.","route.pace_slower":"Wolniej","route.pace_faster":"Szybciej","card.month_story.title":"Ten miesiąc","empty.month_story.title":"Brak jeszcze treningów w tym miesiącu","story.share_month":"{count} treningów - {pct}% tego miesiąca","story.record_subtitle_month":"Twój rekord tego miesiąca","card.year_story.title":"Ten rok","empty.year_story.title":"Brak jeszcze treningów w tym roku","story.share_year":"{count} treningów - {pct}% tego roku","story.record_subtitle_year":"Twój rekord tego roku","card.best_efforts.title":"Rekordy na dystansach","card.best_efforts.subtitle":"{count} z {total} zdobyte","empty.best_efforts.title":"Brak jeszcze rekordów na dystansach","empty.best_efforts.subtitle":"Liczone od biegowych treningów od teraz, nie wstecz.","best_efforts.not_yet":"Jeszcze nie zdobyto","distance.half_marathon":"Półmaraton","distance.marathon":"Maraton","card.steps_today.title":"Kroki dzisiaj","card.steps_today.subtitle":"Cel: {goal} kroków","empty.steps_today.title":"Brak jeszcze danych o krokach","editor.steps_goal_label":"Dzienny cel (kroki)","steps_today.goal_pct":"{pct}% dziennego celu","steps_today.vs_avg_up":"+{pct}% vs Twoja 7-dniowa średnia ({avg})","steps_today.vs_avg_down":"-{pct}% vs Twoja 7-dniowa średnia ({avg})","card.steps_trend.title":"Trend kroków","card.steps_trend.subtitle":"Ostatnie {days} dni","empty.steps_trend.title":"Brak jeszcze historii kroków","steps_trend.legend_met":"Cel osiągnięty","steps_trend.legend_below":"Poniżej celu","steps_trend.days_at_goal":"Dni z celem","card.month_records.title":"Rekordy miesiąca","card.month_records.subtitle":"{count} z {total} pobitych w tym miesiącu","empty.month_records.title":"Brak jeszcze rekordów w tym miesiącu","empty.month_records.subtitle":"Tutaj pojawią się Twoje rekordy z tego miesiąca.","card.year_records.title":"Rekordy roku","card.year_records.subtitle":"{count} z {total} pobitych w tym roku","empty.year_records.title":"Brak jeszcze rekordów w tym roku","empty.year_records.subtitle":"Tutaj pojawią się Twoje rekordy z tego roku.","card.running_dynamics.title":"Dynamika biegu","card.running_dynamics.subtitle":"{activity} - ostatnie {count} treningów","empty.running_dynamics.title":"Za mało danych","empty.running_dynamics.subtitle":"Potrzeba kilku ostatnich treningów biegowych z danymi kadencji.","card.weekly_steps_goal.title":"Cel tygodniowy: kroki","card.weekly_steps_goal.subtitle":"{value} z {goal} kroków","empty.weekly_steps_goal.title":"Brak jeszcze danych o krokach","editor.weekly_steps_goal_label":"Cel tygodniowy (kroki)","card.goals_overview.title":"Podsumowanie celów","card.goals_overview.subtitle":"Ten tydzień","empty.goals_overview.title":"Brak jeszcze danych o celach","card.week_compare.title":"Ten tydzień vs poprzedni","card.week_compare.subtitle":"Sumy z ostatnich 7 dni","empty.week_compare.title":"Za mało historii","empty.week_compare.subtitle":"Wróć za około tydzień, żeby zobaczyć porównanie.","week_compare.legend_now":"Ten tydzień","week_compare.legend_prev":"Poprzedni tydzień","card.sleep_detail.title":"Szczegóły snu","card.sleep_detail.subtitle":"Ostatnia noc","label.awake":"Czuwanie","label.sleep_other":"Pozostały sen","sleep_detail.total_sleep":"łączny sen","sleep_detail.in_bed":"{duration} w łóżku","sleep_detail.bedtime":"Zaśnięcie","sleep_detail.wake":"Pobudka","sleep_detail.stages":"Fazy snu","sleep_detail.efficiency":"Efektywność snu","sleep_detail.efficiency_sub":"Czas snu ÷ czas w łóżku","sleep_detail.vitals":"Parametry","sleep_detail.insight_excellent":"{pct}% snu głębokiego · świetna regeneracja.","sleep_detail.insight_solid":"{pct}% snu głębokiego · solidna regeneracja.","sleep_detail.insight_light":"{pct}% snu głębokiego · lżejsza noc niż zwykle.","editor.energy_goal_source_label":"Cel kalorii z","editor.sleep_goal_source_label":"Cel snu z","editor.training_goal_source_label":"Cel czasu treningu z","editor.energy_goal_label":"Cel dzienny (aktywne kcal)","editor.sleep_goal_label":"Cel snu (godziny)","editor.training_goal_label":"Cel tygodniowy (godziny)","editor.show_goals_label":"Pokaż cele","editor.source_suunto_none":"Aplikacja Suunto (brak celu)","editor.distance_goal_hint":"Aplikacja Suunto nie ma celu dystansu, więc ten jest zawsze Twój własny.","card.daily_goals.title":"Cele dnia","card.daily_goals.subtitle":"Kroki, kalorie i sen","empty.daily_goals.title":"Brak jeszcze danych o celach","stat.active_kcal":"Aktywne kcal","stat.sleep":"Sen","stat.training_time":"Czas treningu","goal.of":"z {goal}","goal.energy_active_of":"aktywne {kcal} z {goal}","sleep_goal.label":"Cel snu","sleep_goal.short":"{value} z {goal} · brakuje {missing}","sleep_goal.met":"{value} z {goal} · cel osiągnięty","sleep_trends.nights_at_goal":"Nocy z celem","sleep_trends.avg_vs_goal":"Średnio do celu","sleep_trends.legend_goal":"Cel {goal}","card.ai_insight.title":"Analiza AI","empty.ai_insight.title":"Analiza AI jest wyłączona","empty.ai_insight.subtitle":"Włącz ją w integracji: Konfiguruj -> Codzienna analiza AI","empty.ai_insight.waiting":"Dziś jeszcze nie ma analizy AI","ai_insight.generating":"Trwa generowanie analizy","ai_insight.night":"noc {night}","ai_insight.no_night":"ostatnia noc jeszcze nie dotarła","ai_insight.no_section":"Brak danych dla tej sekcji","ai_insight.advice":"Rady na dziś","ai_insight.disclaimer":"To nie jest porada medyczna","ai_insight.section.sleep":"Sen","ai_insight.section.recovery":"Regeneracja","ai_insight.section.training":"Treningi","ai_insight.section.activity":"Aktywność","ai_insight.section_full.sleep":"Sen","ai_insight.section_full.recovery":"Zdrowie i regeneracja","ai_insight.section_full.training":"Treningi","ai_insight.section_full.activity":"Aktywność dzienna","ai_insight.status.good":"Dobrze","ai_insight.status.ok":"OK","ai_insight.status.caution":"Uwaga","ai_insight.status.rest":"Odpoczynek","strategy.title":"Treningi","strategy.none":"Brak konta Suunto","strategy.none_text":"Nie znaleziono konta z integracji Suunto App. Dodaj integrację w Ustawienia > Urządzenia i usługi, a potem odśwież ten dashboard.","strategy.section.today":"Dziś","strategy.section.ai":"Analiza AI","strategy.section.sleep":"Sen","strategy.section.recovery":"Regeneracja","strategy.section.last_workout":"Ostatni trening","strategy.section.load":"Obciążenie i forma","strategy.section.week":"Ten tydzień","strategy.section.records":"Rekordy","strategy.section.history":"Historia i profil","strategy.section.gear":"Sprzęt i dojazdy","card.ai_weekly.title":"Podsumowanie tygodnia AI","empty.ai_weekly.subtitle":"Wymaga ha-suunto 1.0.38 lub nowszego z włączonym AI: Konfiguruj -> AI","empty.ai_weekly.waiting":"Nie ma jeszcze podsumowania tygodnia","ai_weekly.week":"tydzień {range}","ai_weekly.advice":"Plan na kolejny tydzień","editor.ai_report_label":"Raport","editor.ai_report_daily":"Analiza dzienna","editor.ai_report_weekly":"Podsumowanie tygodnia","editor.ai_section_label":"Sekcja","editor.ai_single_label":"Pokaż tylko tę sekcję","card.sleep_regularity.title":"Regularność snu","sleep_regularity.subtitle":"Ostatnie 4 tygodnie · {nights} nocy","empty.sleep_regularity.title":"Za mało nocy","empty.sleep_regularity.subtitle":"Potrzeba około tygodnia kolejnych nocy z zegarkiem.","sleep_regularity.bed":"Zaśnięcie śr. {time}","sleep_regularity.wake":"Pobudka śr. {time}","sleep_regularity.mid_work":"Środek snu, noce nd-czw {time}","sleep_regularity.mid_free":"Środek snu, noce pt/sob {time}","band.regularity.regular":"Regularny","band.regularity.fair":"Dość regularny","band.regularity.irregular":"Nieregularny","chip.regularity":"Regularność {value}","chip.social_jetlag":"Społeczny jetlag {value}","card.aerobic_decoupling.title":"Dryf tętna","empty.aerobic_decoupling.title":"Brak przeanalizowanego długiego treningu","empty.aerobic_decoupling.subtitle":"Pojawi się po treningu trwającym 40+ minut z GPS i tętnem.","aerobic_decoupling.analyzed":"{minutes} min analizy","aerobic_decoupling.hint":"poniżej 5 % = solidna baza tlenowa","aerobic_decoupling.first_half":"1. połowa","aerobic_decoupling.second_half":"2. połowa","aerobic_decoupling.trend":"Ostatnich {count} przeanalizowanych treningów","band.decoupling.coupled":"Stabilne","band.decoupling.moderate":"Umiarkowany dryf","band.decoupling.high":"Duży dryf","stat.decoupling":"Dryf tętna","card.personal_insights.title":"Co ci służy","personal_insights.subtitle":"Z ostatnich {nights} nocy","empty.personal_insights.title":"Brak wyraźnych wzorców","empty.personal_insights.subtitle":"Potrzeba kilku tygodni danych o śnie i treningach. Pokazujemy tylko wyraźne różnice.","personal_insights.these_nights":"te noce","personal_insights.the_rest":"pozostałe","personal_insights.nights_count":"{with} vs {without} nocy","personal_insights.disclaimer":"Wzorce w twoich danych, a nie dowód przyczyny. Wniosek wymaga co najmniej 4 nocy lub treningów po każdej stronie.","insights.cond.late_workout":"Po treningu kończonym po {time}","insights.cond.training_day":"W dni treningowe","insights.cond.hard_day":"Po najcięższych dniach treningowych","insights.cond.early_bed":"Gdy kładziesz się przed {bedtime}","insights.cond.free_night":"W noce z piątku i soboty","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Tętno spocz.","insights.metric.sleep":"Sen","daily_brief.your_pattern":"Twój wzorzec","editor.show_insight_label":"Pokaż najmocniejszy wzorzec","editor.look_section":"Wygląd","editor.title":"Tytuł","editor.icon":"Ikona (np. mdi:star)","editor.accent_color":"Kolor akcentu (np. #e91e63 lub teal)","editor.accent_hint":"Ten sam kolor w trybie jasnym i ciemnym. Niepoprawny kolor jest pomijany.","editor.accent_default":"Domyślny (bursztynowy)","editor.accent_pink":"Różowy","editor.accent_purple":"Fioletowy","editor.accent_teal":"Morski","editor.accent_green":"Zielony","editor.accent_blue":"Niebieski","editor.hide_header":"Ukryj nagłówek","editor.hide_icon":"Ukryj ikonę","editor.hide_subtitle":"Ukryj podtytuł","editor.hide_legend":"Ukryj legendę","editor.text_size":"Rozmiar tekstu","text_size.normal":"Normalny","text_size.large":"Duży (115%)","text_size.larger":"Większy (130%)","text_size.largest":"Największy (150%)","editor.language":"Język","editor.language_auto":"Jak w Home Assistant","editor.hide_sync_warning":"Ukryj ostrzeżenie o braku synchronizacji","editor.max_items":"Liczba pozycji","editor.list_height":"Wysokość listy (px)","card.stress_today.title":"Stres i regeneracja","stress_today.subtitle_today":"Dziś do {time}","stress_today.subtitle_waiting":"Wczoraj · dzisiejsze dane jeszcze nie dotarły","stress_today.yesterday":"Wczoraj","empty.stress_today.title":"Brak danych o stresie","empty.stress_today.subtitle":"Wymaga Suunto App (unofficial) 1.0.37 lub nowszej i zsynchronizowanego zegarka.","stress.state.recovering":"Regeneracja","stress.state.active":"Aktywny","stress.state.inactive":"Nieaktywny","stress.state.stressed":"Stres","insights.cond.hot_weather":"W upale (od {temp}°C)","insights.cond.cold_weather":"W zimnie (do {temp}°C)","insights.metric.efficiency":"Wydajność","insights.unit.per_beat":"m/uderz.","personal_insights.subtitle_days":"Z ostatnich {nights} nocy i {days} dni treningowych","personal_insights.these_workouts":"te treningi","personal_insights.workouts_count":"{with} vs {without} treningów","personal_insights.speed_at_hr":"{with_speed} km/h przy {with_hr} bpm vs {without_speed} km/h przy {without_hr} bpm","sync.at":"synchronizacja {time}","sync.yesterday":"synchronizacja wczoraj {time}","chip.not_synced":"Zegarek bez synchronizacji od {hours} h","editor.eink":"Ekran e-ink","eink.off":"Wyłączony","eink.bw":"Czarno-biały","eink.gray":"4 odcienie szarości","eink.red":"Czerń, biel i czerwień","eink.yellow":"Czerń, biel i żółć","eink.color":"6 kolorów","editor.max_lines":"Maks. linii tekstu","card.whats_new.title":"Co nowego","card.whats_new.subtitle":"Ostatnie {days} dni","whats_new.today":"Dziś","whats_new.yesterday":"Wczoraj","whats_new.now":"Teraz","whats_new.empty":"Nic nowego w ostatnich {days} dniach","whats_new.record":"Nowy rekord: {label} {value}","whats_new.record_year":"Rekord roku: {label} {value}","whats_new.record_month":"Rekord miesiąca: {label} {value}","whats_new.best_effort":"Best effort {distance}: {time}","whats_new.ai_daily":"Analiza AI dnia","whats_new.ai_weekly":"Podsumowanie tygodnia AI","whats_new.gear_due":"{name}: czas na serwis","editor.whats_new_show":"Pokazuj","whats_new.kind.workouts":"Treningi","whats_new.kind.records":"Rekordy i best efforts","whats_new.kind.achievements":"Osiągnięcia na trasie","whats_new.kind.ai":"Raporty AI","whats_new.kind.gear":"Serwis sprzętu"},de:{"stat.distance":"Distanz","stat.duration":"Dauer","stat.avg_speed":"Ø-Geschwindigkeit","stat.avg_pace":"Ø-Pace","stat.avg_hr":"Ø-Puls","stat.max_hr":"Max. Puls","stat.training_effect":"Trainingseffekt","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Gefühl","stat.energy":"Energie","stat.time":"Zeit","stat.workouts":"Workouts","stat.steps":"Schritte","stat.heart_rate":"Herzfrequenz","stat.quality":"Qualität","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Ruhepuls","stat.resting_hr_delta":"Ruhepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresszustand","stat.recovery_window":"Erholungszeit","stat.ctl":"CTL · Fitness","stat.atl":"ATL · Ermüdung","stat.tsb":"TSB · Form","stat.readiness":"Bereitschaft","stat.recovery_balance":"Erholungsbalance","stat.training_suggestion":"Empfehlung für heute","stat.volume":"Umfang","stat.intensity":"Intensität","stat.consistency":"Konstanz","stat.recovery":"Erholung","stat.variety":"Vielfalt","card.hr_zones.title":"Herzfrequenzzonen","card.hr_zones.last_workout":"Letztes Training","card.sleep_readiness.title":"Schlaf & Bereitschaft","card.sleep_readiness.subtitle_no_wake":"{duration} geschlafen","card.sleep_readiness.subtitle_with_wake":"{duration} geschlafen · aufgewacht um {time}","card.recovery.title":"Erholung","card.training_load.title":"Trainingsbelastung","card.training_load.subtitle_fallback":"Fitness-Trend (CTL)","card.week_stats.title":"Diese Woche & Gesamt","card.week_stats.subtitle":"Letzte 7 Tage","card.week_stats.lifetime_title":"Gesamt nach Sportart","card.today.title":"Heute","card.today.subtitle":"Live von deiner Uhr","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofil","card.training_profile.subtitle":"Dein Training auf einen Blick","card.heart_rate.title":"Herzfrequenz","empty.last_workout.title":"Kein aktuelles Training","empty.last_workout.subtitle":"Synchronisiere deine Uhr mit der Suunto-App, um es hier zu sehen.","empty.hr_zones.title":"Keine Zonendaten","empty.hr_zones.subtitle":"Dein nächstes Outdoor-Training mit Brustgurt füllt das hier aus.","empty.sleep_readiness.title":"Noch keine Schlafdaten","empty.sleep_readiness.subtitle":"Trage deine Uhr beim Schlafen, um sie hier zu sehen.","empty.recovery.title":"Noch keine Erholungsdaten","empty.training_load.title":"Trainingsbelastung wird berechnet","empty.training_load.subtitle":"Benötigt etwas Trainingshistorie zur Berechnung - schau nach ein paar Einheiten wieder vorbei.","empty.week_stats.title":"Noch keine Trainingshistorie","empty.today.title":"Noch keine Live-Daten","empty.training_status.title":"Noch nicht genug Daten","empty.training_status.subtitle":"Braucht etwas Trainingshistorie zur Berechnung.","empty.training_profile.title":"Noch nicht genug Daten","empty.training_profile.subtitle":"Braucht mehr Sensordaten, um dein Profil zu berechnen.","empty.heart_rate.title":"Noch keine Herzfrequenzdaten","empty.loading":"Wird geladen...","empty.generic_error":"Suunto-Daten konnten nicht geladen werden.","error.no_device":"Kein Suunto-Gerät gefunden - ist die suunto_app-Integration eingerichtet?","error.multiple_devices":'Mehrere Suunto-Geräte gefunden - lege "device_id" in der Kartenkonfiguration fest.',"error.device_missing":'Konfiguriertes Gerät "{device}" hat keine suunto_app-Entitäten.',"band.readiness.great":"Sehr gut","band.readiness.fair":"Mittel","band.readiness.low":"Niedrig","band.recovery.well":"Gut erholt","band.recovery.partial":"Teilweise erholt","band.recovery.low":"Geringe Erholung","band.recovery.fully":"Vollständig erholt","band.recovery.recovering":"Erholung läuft · {time} verbleibend","band.hrv.low":"HRV niedrig","band.hrv.high":"HRV hoch","band.hrv.balanced":"HRV ausgeglichen","band.form.fresh":"Frisch","band.form.neutral":"Neutral","band.form.fatigued":"Ermüdet","band.form.very_fatigued":"Sehr ermüdet","band.acwr.safe":"Sicherer Bereich","band.acwr.low":"Geringe Belastung","band.acwr.high":"Hohe Belastung - Verletzungsrisiko","band.suggestion.hard":"Vollgas","band.suggestion.moderate":"Moderate Belastung","band.suggestion.easy":"Locker angehen","band.suggestion.rest":"Ruhetag","chip.workout_logged_today":"Heute Training erfasst","chip.workout_today":"Training heute","chip.recovering":"Erholung","chip.nap":"{minutes} Min. Nickerchen","chip.nap_earlier":"{minutes} Min. Nickerchen (früher)","chip.workouts_30d":"{count} Trainings in den letzten 30 Tagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Am stärksten: {strong} · am schwächsten: {light}","chip.more_activity_one":"+{count} weitere Sportart","chip.more_activity_other":"+{count} weitere Sportarten","chip.unusual_recovery":"Ungewöhnliche Erholung","chip.days_since_one":"{count} Tag seit dem letzten Training","chip.days_since_other":"{count} Tage seit dem letzten Training","chip.manually_added":"Manuell hinzugefügt","chip.sleep_stale":"Kein Schlaf von letzter Nacht · Nacht vom {date}","readiness.balance_only":"Nur Erholungsbilanz, ohne Schlaf","chip.no_hr":"Ohne Herzfrequenz","card.heart_rate.measured":"Gemessen {time}","card.heart_rate.measured_ago":"Gemessen {ago} · {time}","stat.energy_active_sub":"{kcal} aktiv","energy.total_unit":"kcal gesamt","energy.split":"{active} aktiv · {bmr} Grundumsatz","card.commute.title":"Pendelfahrten","card.commute.subtitle_year":"Dieses Jahr statt mit dem Auto","card.commute.subtitle_month":"Diesen Monat statt mit dem Auto","commute.saved":"gespart","commute.fuel_co2":"{fuel} l Kraftstoff · {co2} kg weniger CO2","stat.rides":"Fahrten","stat.days":"Tage","stat.avg_time":"Ø Zeit","commute.this_month":"Dieser Monat:","commute.this_year":"Dieses Jahr:","commute.rides_n":"{n} Fahrten","empty.commute.title":"Noch keine Pendelfahrten","empty.commute.subtitle":"Hier erscheinen Workouts, die Suunto als Pendeln markiert.","card.gear.title":"Ausrüstung","card.gear.subtitle":"Strecke und Wartung","gear.remaining":"Noch {km}","gear.over":"{km} überschritten","chip.service":"Wartung","empty.gear.title":"Noch keine Ausrüstung erfasst","empty.gear.subtitle":"Füge Ausrüstung im Konfigurieren-Menü der Integration hinzu.","card.form_forecast.title":"Formprognose","card.form_forecast.subtitle":"Wenn du ab heute pausierst","stat.tomorrow":"Morgen","stat.peak_in":"Spitze in {days} T","stat.maintenance":"Fitness halten / Wo.","empty.form_forecast.title":"Noch keine Prognose","card.daily_brief.title":"Tagesbriefing","empty.daily_brief.title":"Noch kein Briefing","achievement.count_one":"{count} Erfolg","achievement.count_other":"{count} Erfolge","achievement.rank":"Platz #{rank} auf dieser Strecke","label.zone":"Zone {n}","label.deep":"Tiefschlaf","label.light":"Leichtschlaf","label.rem":"REM","editor.auto_detect":"Diese Karte erkennt dein Suunto-Gerät automatisch - keine Konfiguration nötig.","editor.pick_device":"Mehrere Suunto-Geräte gefunden - wähle aus, welches diese Karte verwenden soll.","editor.device_label":"Suunto-Gerät","editor.units_label":"Einheiten","editor.units_metric":"Metrisch (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Kompaktmodus","editor.days_label":"Trendfenster (Tage)","editor.period_label":"Hauptzeitraum","editor.period_year":"Dieses Jahr","editor.period_month":"Dieser Monat","editor.goal_source_label":"Schrittziel aus","editor.source_suunto":"Suunto App ({value})","editor.source_suunto_default":"Suunto App (kein Ziel, nutze {value})","editor.source_custom":"Eigene","editor.fuel_source_label":"Kraftstoffwerte aus","editor.source_integration":"Suunto Integration ({litres} l/100 km, {price} pro l)","editor.source_integration_unknown":"Suunto Integration","editor.fuel_consumption_label":"Verbrauch (l/100 km)","editor.fuel_price_label":"Kraftstoffpreis pro Liter","editor.fuel_hint":"Die Werte der Integration änderst du unter Einstellungen > Geräte & Dienste > Suunto > Konfigurieren.","card.lifetime.title":"Gesamtstatistik","card.lifetime.subtitle":"Seit Beginn","stat.active_days":"Aktive Tage","empty.lifetime.title":"Noch keine Gesamtdaten","card.recent_workouts.title":"Letzte Trainings","empty.recent_workouts.title":"Keine letzten Trainings","card.elevation.title":"Höhenmeter & Aufstieg","stat.ascent":"Aufstieg","stat.descent":"Abstieg","stat.ascent_time":"Aufstiegszeit","stat.descent_time":"Abstiegszeit","stat.min_altitude":"Min. Höhe","stat.max_altitude":"Max. Höhe","stat.ascent_rate":"Aufstiegsrate","empty.elevation.title":"Keine Höhendaten","empty.elevation.subtitle":"Nur Outdoor-Trainings mit Barometer erfassen dies.","card.location.title":"Startort","location.open_in_maps":"In Karten öffnen","empty.location.title":"Keine Standortdaten","empty.location.subtitle":"Indoor-Trainings haben keinen GPS-Startpunkt.","card.fitness.title":"Fitness","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitnessalter","fitness.measured":"Gemessen {time} · {activity}","empty.fitness.title":"Noch keine Fitnessdaten","empty.fitness.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","empty.fitness_trend.title":"Noch keine Fitnessdaten","empty.fitness_trend.subtitle":"Suunto berechnet dies nur aus Lauf- oder Gehtrainings.","card.pmc.title":"Leistungsmanagement","card.pmc.subtitle":"{days}-Tage-Trend","card.recovery_trends.title":"Erholungstrends","card.recovery_trends.subtitle":"{days}-Tage-Basiswert","empty.recovery_trends.title":"Noch keine Erholungstrend-Daten","card.weekly_volume.title":"Wöchentliches Volumen","card.weekly_volume.subtitle":"Letzte 12 Wochen","empty.weekly_volume.title":"Noch keine Daten zum wöchentlichen Volumen","stat.average":"Durchschnitt","stat.total":"Gesamt","card.hr_curve.title":"Herzfrequenz-Kurve","card.hr_curve.subtitle":"Letzte 24 Stunden","stat.hr_now":"Jetzt","stat.hr_min":"Tagesminimum","stat.hr_max":"Tagesmaximum","empty.hr_curve.title":"Noch keine Live-Herzfrequenzdaten","empty.hr_curve.subtitle":"Trage deine Uhr und synchronisiere sie, um die heutige Kurve hier zu sehen.","card.sleep_trends.title":"Schlaftrends","card.sleep_trends.subtitle":"Letzte {days} Nächte","empty.sleep_trends.title":"Noch keine Schlaftrend-Daten","card.weekly_goal.title":"Wochenziel","card.weekly_goal.subtitle":"{value} von {goal} km","empty.weekly_goal.title":"Noch keine wöchentliche Distanz","editor.goal_label":"Wochenziel (km)","card.streak.title":"Aktivitätsserie","card.streak.subtitle":"Letzte 14 Tage","streak.window_count_one":"{count} aktiver Tag","streak.window_count_other":"{count} aktive Tage","streak.days_one":"{count} Tag in Folge","streak.days_other":"{count} Tage in Folge","streak.none":"Keine aktive Serie - starte heute","empty.streak.title":"Noch keine Trainingshistorie","just_finished.title":"Gut gemacht!","just_finished.idle.title":"Warten auf dein nächstes Training","just_finished.idle.subtitle":"Diese Karte leuchtet auf, sobald deine Uhr ein neues Training synchronisiert.","empty.just_finished.title":"Kein aktuelles Training","card.activity_trends.title":"Aktivitätstrends","card.activity_trends.subtitle":"Letzte {days} Tage","empty.activity_trends.title":"Noch keine Aktivitätstrend-Daten","card.recovery_balance_trend.title":"Erholungsbalance-Trend","card.recovery_balance_trend.subtitle":"Letzte {days} Tage","empty.recovery_balance_trend.title":"Noch keine Erholungstrend-Daten","card.readiness_trend.title":"Bereitschaftstrend","card.readiness_trend.subtitle":"Letzte {days} Tage","empty.readiness_trend.title":"Noch keine Bereitschaftstrend-Daten","stat.cadence":"Trittfrequenz","stat.stride_length":"Schrittlänge","stat.pct_hrmax":"% der max. Herzfrequenz","stat.sleep_avg_hr":"Ø-Puls","stat.sleep_min_hr":"Min-Puls","chip.bedtime":"Zubettgehen {time}","card.activity_calendar.title":"Aktivitätskalender","card.activity_calendar.subtitle":"Letzte 6 Wochen","empty.activity_calendar.title":"Noch keine Trainingshistorie","activity_calendar.active_days_one":"{count} aktiver Tag","activity_calendar.active_days_other":"{count} aktive Tage","card.workout_comparison.title":"Trainingsvergleich","card.workout_comparison.vs":"vs. {time}","empty.workout_comparison.title":"Noch nicht genug passende Trainings","empty.workout_comparison.subtitle":"Mach die gleiche Aktivität zweimal, um einen Vergleich zu sehen.","stat.distance_delta":"Distanz ({delta})","stat.duration_delta":"Dauer ({delta})","stat.avg_hr_delta":"Ø-Puls ({delta})","stat.pace_delta":"Pace ({delta})","card.milestones.title":"In Zahlen","card.milestones.subtitle":"Seit Beginn","empty.milestones.title":"Noch keine Gesamtdaten","stat.earth_laps":"Erdumrundungen","stat.marathons":"Marathons","stat.moon_pct":"% zum Mond","stat.burgers":"Burger","card.athlete_profile.title":"Trainingspersönlichkeit","empty.athlete_profile.title":"Noch nicht genug Daten","personality.activity.cycling":"Radfahrer","personality.activity.running":"Läufer","personality.activity.trekking":"Wanderer","personality.activity.walking":"Spaziergänger","personality.activity.gym":"Kraftsportler","personality.activity.swim":"Schwimmer","personality.activity.ski":"Skifahrer","personality.activity.row":"Ruderer","personality.activity.other":"Allrounder","personality.schedule.weekend":"Wochenendkrieger","personality.schedule.weekday":"Wochentags-Stammgast","personality.schedule.balanced":"Ausgewogener Planer","personality.time.morning":"Frühaufsteher","personality.time.afternoon":"Mittagsaktiver","personality.time.evening":"Abendsportler","personality.time.night":"Nachteule","card.pace_trend.title":"Pace-Trend","card.pace_trend.subtitle":"{activity} · letzte {count} Einheiten","empty.pace_trend.title":"Noch nicht genug passende Trainings","empty.pace_trend.subtitle":"Mach die gleiche Aktivität ein paar Mal, um einen Trend zu sehen.","pace_trend.faster":"Wird schneller","pace_trend.slower":"Wird langsamer","pace_trend.steady":"Konstantes Tempo","card.lap_splits.title":"Rundenzeiten","empty.lap_splits.title":"Keine Rundendaten","empty.lap_splits.subtitle":"Nicht jedes Training hat Runden - das nächste mit Rundendaten füllt das hier auf.","stat.laps":"Runden","stat.fastest_lap":"Schnellste Runde","label.lap":"Runde {n}","card.training_effect_trend.title":"Trainingseffekt-Trend","card.fitness_trend.title":"Fitness-Trend","empty.training_effect_trend.title":"Noch keine Trainingseffekt-Daten","achievements.badge.around_globe":"Einmal um die Welt","achievements.badge.century_club":"Hundert-Club - 100 Trainings","achievements.badge.consistency_king":"König der Beständigkeit - 14-Tage-Serie","achievements.badge.iron_will":"Eiserner Wille - 30-Tage-Serie","achievements.badge.days_100":"100 aktive Tage","achievements.badge.distance_1000":"1.000-km-Club","achievements.badge.distance_5000":"5.000-km-Club","achievements.badge.elite_engine":"Elite-Motor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrannt","achievements.badge.energy_1m":"1.000.000 kcal verbrannt","achievements.badge.full_year":"Ganzjährig aktiv","achievements.badge.hours_100":"100 Stunden","achievements.badge.hours_500":"500 Stunden","achievements.badge.jack_of_all_trades":"Allrounder - 5+ Sportarten","achievements.badge.multi_sport":"Multisport-Athlet - 3+ Sportarten","achievements.badge.solid_engine":"Solider Motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ Trainings","achievements.badge.workouts_1000":"1.000 Trainings","achievements.badge.workouts_250":"250 Trainings","achievements.badge.workouts_500":"500 Trainings","achievements.category.days":"Aktive Tage","achievements.category.distance":"Distanz","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnesslevel","achievements.category.records":"Persönliche Rekorde","achievements.category.time":"Trainingszeit","achievements.category.variety":"Vielfalt","achievements.category.workouts":"Erfasste Trainings","card.achievements.subtitle":"{unlocked} von {total} freigeschaltet","card.achievements.title":"Erfolge","achievements.next":"Nächstes: {name} ({pct}%)","class.rest":"+{pct}% andere Aktivitäten","class.tag":"Fokus: {activity}","empty.achievements.subtitle":"Erfasse ein paar Trainings, um Abzeichen freizuschalten.","empty.achievements.title":"Noch keine Erfolge","empty.class.subtitle":"Erfasse ein paar Trainings, um deine Klasse zu enthüllen.","empty.class.title":"Noch nicht genug Daten","empty.level.subtitle":"Dein erstes synchronisiertes Training startet den Aufstieg.","empty.level.title":"Noch keine Lebenszeitdaten","empty.player.subtitle":"Braucht etwas Trainingshistorie, um deine Werte zu berechnen.","empty.player.title":"Noch nicht genug Daten","level.label":"LEVEL","level.source":"{count} Trainings erfasst","level.subtitle":"Angetrieben von deiner gesamten Trainingsbelastung","level.title.grinder":"Ausdauer-Malocher","level.title.legend":"Lebende Legende","level.title.novice":"Frischer Rekrut","level.title.veteran":"Erfahrener Veteran","level.xp_to_next":"{xp} XP bis Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-Spezialist","player.help.title":"Was das bedeutet","player.help.sta":"STA · Ausdauer, aus deiner Fitness (CTL): wie viel gleichmäßige Trainingsbelastung du verkraftest","player.help.pwr":"PWR · Power, aus der durchschnittlichen Intensität (TSS) deiner letzten Einheiten","player.help.rec":"REC · Erholung, dein aktueller Readiness-Wert","player.help.con":"CON · Beständigkeit, Trainings der letzten 30 Tage","player.help.end":"END · Ausdauer, aus deinem geschätzten VO2max","player.help.frm":"FRM · Form, aus deiner aktuellen Trainingsbelastungsbilanz (TSB)","player.help.disclaimer":"Heuristische Werte aus deinen eigenen Daten - keine offizielle Suunto-Metrik.","player.tier.bronze":"Bronze","player.tier.gold":"Gold","player.tier.legendary":"Legendär","player.tier.silver":"Silber","records.climb":"Größter Anstieg","records.distance":"Weitestes Training","records.pace":"Schnellstes Tempo","records.session":"Härteste Einheit","records.streak":"Längste Serie","records.streak_days_one":"{count} Tag","records.streak_days_other":"{count} Tage","records.workout":"Längstes Training","class.name.cycling":"Ausdauerkrieger","class.name.running":"Sprinter","class.name.trekking":"Pfadfinder","class.name.walking":"Wanderer","class.name.gym":"Kraft-Berserker","class.name.swim":"Flutenrufer","class.name.ski":"Frostläufer","class.name.row":"Ruderer","class.name.other":"Allrounder","class.flavor.cycling":"Gemacht für lange, gleichmäßige Belastung statt roher Geschwindigkeit. Alles andere ist Ergänzungstraining.","class.flavor.running":"Schnell weg und auf Tempo ausgelegt. Distanz ist nur Mittel zum Zweck.","class.flavor.trekking":"Zuhause im schwierigen Gelände, stundenlang unterwegs.","class.flavor.walking":"Stetige, gelenkschonende Kilometer summieren sich - Beständigkeit vor Intensität.","class.flavor.gym":"Rohe Kraft vor Distanz. Krafttraining steht an erster Stelle.","class.flavor.swim":"Ausdauer im Wasser geschmiedet, Zug für Zug.","class.flavor.ski":"Geschwindigkeit und Rhythmus auf Schnee und Kälte.","class.flavor.row":"Rhythmische Kraft, Schlag für Schlag.","class.flavor.other":"Keine Sportart dominiert - eine wirklich ausgewogene Mischung.","card.next_milestone.title":"Nächstes Ziel","card.next_milestone.subtitle":"Lebenszeit-Distanz","empty.next_milestone.title":"Noch keine Lebenszeit-Distanz","next_milestone.remaining_label":"verbleibend","next_milestone.target":"bis {target} km Lebenszeit - {pct}% geschafft","next_milestone.workouts_one":"{count} Training bis {target} insgesamt","next_milestone.workouts_other":"{count} Trainings bis {target} insgesamt","next_milestone.eta_one":"bei {pace} km/Woche - noch etwa {weeks} Woche","next_milestone.eta_other":"bei {pace} km/Woche - noch etwa {weeks} Wochen","card.story.title":"Deine Suunto-Geschichte","card.story.subtitle":"Seit deinem ersten Training","empty.story.title":"Noch keine Lebenszeitdaten","story.top_activity":"{activity} - deine Hauptaktivität","story.top_activity_share":"{count} Trainings - {pct}% deiner Geschichte","story.record_subtitle":"Dein Allzeitrekord","card.sleep_clock.title":"Schlafuhr","card.sleep_clock.subtitle":"Letzte Nacht","empty.sleep_clock.title":"Noch keine Schlafdaten","empty.sleep_clock.subtitle":"Trage deine Uhr nachts, um es hier zu sehen.","sleep_clock.quality":"{pct}% Schlafqualität","card.sleep_rhythm.title":"Schlafrhythmus","card.sleep_rhythm.subtitle":"Letzte 7 Nächte","empty.sleep_rhythm.title":"Noch nicht genug Schlafhistorie","empty.sleep_rhythm.subtitle":"Braucht ein paar Nächte an Daten, um ein Muster zu zeigen.","sleep_rhythm.avg_bedtime":"Ø-Schlafenszeit {time}","sleep_rhythm.avg_wake":"Ø-Aufwachzeit {time}","sleep_rhythm.spread":"{minutes} Min. Streuung","sleep_rhythm.legend_normal":"Typische Nacht","sleep_rhythm.legend_outlier":"{minutes}+ Min. vom Durchschnitt abweichend","card.route.title":"Route","empty.route.title":"Keine Streckendaten","empty.route.subtitle":"Indoor-Trainings haben keine GPS-Aufzeichnung.","route.pace_slower":"Langsamer","route.pace_faster":"Schneller","card.month_story.title":"Dieser Monat","empty.month_story.title":"Noch keine Trainings diesen Monat","story.share_month":"{count} Trainings - {pct}% dieses Monats","story.record_subtitle_month":"Dein Rekord diesen Monat","card.year_story.title":"Dieses Jahr","empty.year_story.title":"Noch keine Trainings dieses Jahr","story.share_year":"{count} Trainings - {pct}% dieses Jahres","story.record_subtitle_year":"Dein Rekord dieses Jahr","card.best_efforts.title":"Bestleistungen","card.best_efforts.subtitle":"{count} von {total} erreicht","empty.best_efforts.title":"Noch keine Bestleistungen","empty.best_efforts.subtitle":"Wird ab jetzt aus Lauftrainings erfasst, nicht rückwirkend.","best_efforts.not_yet":"Noch nicht erreicht","distance.half_marathon":"Halbmarathon","distance.marathon":"Marathon","card.steps_today.title":"Schritte heute","card.steps_today.subtitle":"Ziel: {goal} Schritte","empty.steps_today.title":"Noch keine Schrittdaten","editor.steps_goal_label":"Tagesziel (Schritte)","steps_today.goal_pct":"{pct}% des Tagesziels","steps_today.vs_avg_up":"+{pct}% ggü. deinem 7-Tage-Durchschnitt ({avg})","steps_today.vs_avg_down":"-{pct}% ggü. deinem 7-Tage-Durchschnitt ({avg})","card.steps_trend.title":"Schritttrend","card.steps_trend.subtitle":"Letzte {days} Tage","empty.steps_trend.title":"Noch kein Schrittverlauf","steps_trend.legend_met":"Ziel erreicht","steps_trend.legend_below":"Unter Ziel","steps_trend.days_at_goal":"Tage mit Ziel","card.month_records.title":"Rekorde des Monats","card.month_records.subtitle":"{count} von {total} in diesem Monat aufgestellt","empty.month_records.title":"Noch keine Rekorde diesen Monat","empty.month_records.subtitle":"Deine persönlichen Bestleistungen dieses Monats erscheinen hier.","card.year_records.title":"Rekorde des Jahres","card.year_records.subtitle":"{count} von {total} in diesem Jahr aufgestellt","empty.year_records.title":"Noch keine Rekorde dieses Jahr","empty.year_records.subtitle":"Deine persönlichen Bestleistungen dieses Jahres erscheinen hier.","card.running_dynamics.title":"Lauf-Dynamik","card.running_dynamics.subtitle":"{activity} - letzte {count} Einheiten","empty.running_dynamics.title":"Noch nicht genug Daten","empty.running_dynamics.subtitle":"Benötigt ein paar aktuelle Lauf-Einheiten mit Kadenzdaten.","card.weekly_steps_goal.title":"Wochenziel: Schritte","card.weekly_steps_goal.subtitle":"{value} von {goal} Schritten","empty.weekly_steps_goal.title":"Noch keine Schrittdaten","editor.weekly_steps_goal_label":"Wochenziel (Schritte)","card.goals_overview.title":"Zielübersicht","card.goals_overview.subtitle":"Diese Woche","empty.goals_overview.title":"Noch keine Zieldaten","card.week_compare.title":"Diese Woche vs. letzte Woche","card.week_compare.subtitle":"Gleitende 7-Tage-Summen","empty.week_compare.title":"Noch nicht genug Verlauf","empty.week_compare.subtitle":"Schau in etwa einer Woche für einen Vergleich vorbei.","week_compare.legend_now":"Diese Woche","week_compare.legend_prev":"Letzte Woche","card.sleep_detail.title":"Schlafdetails","card.sleep_detail.subtitle":"Letzte Nacht","label.awake":"Wach","label.sleep_other":"Übriger Schlaf","sleep_detail.total_sleep":"Gesamtschlaf","sleep_detail.in_bed":"{duration} im Bett","sleep_detail.bedtime":"Zubettgehen","sleep_detail.wake":"Aufwachen","sleep_detail.stages":"Schlafphasen","sleep_detail.efficiency":"Schlafeffizienz","sleep_detail.efficiency_sub":"Schlafzeit ÷ Bettzeit","sleep_detail.vitals":"Werte","sleep_detail.insight_excellent":"{pct}% Tiefschlaf · ein hervorragendes Erholungsfenster.","sleep_detail.insight_solid":"{pct}% Tiefschlaf · eine solide Erholung.","sleep_detail.insight_light":"{pct}% Tiefschlaf · leichter als sonst.","editor.energy_goal_source_label":"Kalorienziel von","editor.sleep_goal_source_label":"Schlafziel von","editor.training_goal_source_label":"Trainingszeit-Ziel von","editor.energy_goal_label":"Tagesziel (aktive kcal)","editor.sleep_goal_label":"Schlafziel (Stunden)","editor.training_goal_label":"Wochenziel (Stunden)","editor.show_goals_label":"Ziele anzeigen","editor.source_suunto_none":"Suunto-App (kein Ziel gesetzt)","editor.distance_goal_hint":"Die Suunto-App hat kein Distanzziel, daher ist dieses immer dein eigenes.","card.daily_goals.title":"Tagesziele","card.daily_goals.subtitle":"Schritte, Kalorien und Schlaf","empty.daily_goals.title":"Noch keine Zieldaten","stat.active_kcal":"Aktive kcal","stat.sleep":"Schlaf","stat.training_time":"Trainingszeit","goal.of":"von {goal}","goal.energy_active_of":"{kcal} aktiv von {goal}","sleep_goal.label":"Schlafziel","sleep_goal.short":"{value} von {goal} · {missing} fehlen","sleep_goal.met":"{value} von {goal} · Ziel erreicht","sleep_trends.nights_at_goal":"Nächte am Ziel","sleep_trends.avg_vs_goal":"Ø zum Ziel","sleep_trends.legend_goal":"Ziel {goal}","card.ai_insight.title":"KI-Analyse","empty.ai_insight.title":"KI-Analyse ist aus","empty.ai_insight.subtitle":"In der Integration einschalten: Konfigurieren -> Tägliche KI-Analyse","empty.ai_insight.waiting":"Heute noch keine KI-Analyse","ai_insight.generating":"Analyse wird erstellt","ai_insight.night":"Nacht {night}","ai_insight.no_night":"letzte Nacht noch nicht synchronisiert","ai_insight.no_section":"Keine Daten für diesen Abschnitt","ai_insight.advice":"Tipps für heute","ai_insight.disclaimer":"Keine medizinische Beratung","ai_insight.section.sleep":"Schlaf","ai_insight.section.recovery":"Erholung","ai_insight.section.training":"Training","ai_insight.section.activity":"Aktivität","ai_insight.section_full.sleep":"Schlaf","ai_insight.section_full.recovery":"Gesundheit und Erholung","ai_insight.section_full.training":"Training","ai_insight.section_full.activity":"Tagesaktivität","ai_insight.status.good":"Gut","ai_insight.status.ok":"OK","ai_insight.status.caution":"Vorsicht","ai_insight.status.rest":"Ruhe","strategy.title":"Training","strategy.none":"Kein Suunto-Konto","strategy.none_text":"Kein Konto aus der Suunto-App-Integration gefunden. Füge die Integration unter Einstellungen > Geräte & Dienste hinzu und lade dieses Dashboard neu.","strategy.section.today":"Heute","strategy.section.ai":"KI-Analyse","strategy.section.sleep":"Schlaf","strategy.section.recovery":"Erholung","strategy.section.last_workout":"Letztes Training","strategy.section.load":"Belastung und Form","strategy.section.week":"Diese Woche","strategy.section.records":"Rekorde","strategy.section.history":"Verlauf und Profil","strategy.section.gear":"Ausrüstung und Pendeln","card.ai_weekly.title":"KI-Wochenrückblick","empty.ai_weekly.subtitle":"Braucht ha-suunto 1.0.38 oder neuer mit eingeschalteter KI: Konfigurieren -> KI","empty.ai_weekly.waiting":"Noch kein KI-Wochenrückblick","ai_weekly.week":"Woche {range}","ai_weekly.advice":"Plan für nächste Woche","editor.ai_report_label":"Bericht","editor.ai_report_daily":"Tagesanalyse","editor.ai_report_weekly":"Wochenrückblick","editor.ai_section_label":"Abschnitt","editor.ai_single_label":"Nur diesen Abschnitt zeigen","card.sleep_regularity.title":"Schlafregelmäßigkeit","sleep_regularity.subtitle":"Letzte 4 Wochen · {nights} Nächte","empty.sleep_regularity.title":"Noch nicht genug Nächte","empty.sleep_regularity.subtitle":"Braucht etwa eine Woche aufeinanderfolgender Nächte mit Uhr.","sleep_regularity.bed":"Ø Zubettgehen {time}","sleep_regularity.wake":"Ø Aufwachen {time}","sleep_regularity.mid_work":"Schlafmitte, Nächte So-Do {time}","sleep_regularity.mid_free":"Schlafmitte, Nächte Fr/Sa {time}","band.regularity.regular":"Regelmäßig","band.regularity.fair":"Ziemlich regelmäßig","band.regularity.irregular":"Unregelmäßig","chip.regularity":"Regelmäßigkeit {value}","chip.social_jetlag":"Sozialer Jetlag {value}","card.aerobic_decoupling.title":"Aerobe Entkopplung","empty.aerobic_decoupling.title":"Noch kein langes Training analysiert","empty.aerobic_decoupling.subtitle":"Erscheint nach einem Training von 40+ Minuten mit GPS und Herzfrequenz.","aerobic_decoupling.analyzed":"{minutes} Min. analysiert","aerobic_decoupling.hint":"unter 5 % = solide aerobe Basis","aerobic_decoupling.first_half":"1. Hälfte","aerobic_decoupling.second_half":"2. Hälfte","aerobic_decoupling.trend":"Letzte {count} analysierte Trainings","band.decoupling.coupled":"Gekoppelt","band.decoupling.moderate":"Mäßige Drift","band.decoupling.high":"Starke Drift","stat.decoupling":"HF-Drift","card.personal_insights.title":"Was dir guttut","personal_insights.subtitle":"Aus deinen letzten {nights} Nächten","empty.personal_insights.title":"Noch keine klaren Muster","empty.personal_insights.subtitle":"Braucht einige Wochen Schlaf- und Trainingsdaten. Nur deutliche Unterschiede werden gezeigt.","personal_insights.these_nights":"diese Nächte","personal_insights.the_rest":"der Rest","personal_insights.nights_count":"{with} vs {without} Nächte","personal_insights.disclaimer":"Muster in deinen eigenen Daten, kein Beweis für eine Ursache. Ein Befund braucht mindestens 4 Nächte oder Trainings auf jeder Seite.","insights.cond.late_workout":"Nach einem Training mit Ende nach {time}","insights.cond.training_day":"An Trainingstagen","insights.cond.hard_day":"Nach deinen härtesten Trainingstagen","insights.cond.early_bed":"Wenn du vor {bedtime} ins Bett gehst","insights.cond.free_night":"In den Nächten auf Samstag und Sonntag","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Ruhepuls","insights.metric.sleep":"Schlaf","daily_brief.your_pattern":"Dein Muster","editor.show_insight_label":"Stärkstes Muster anzeigen","editor.look_section":"Darstellung","editor.title":"Titel","editor.icon":"Symbol (z. B. mdi:star)","editor.accent_color":"Akzentfarbe (z. B. #e91e63 oder teal)","editor.accent_hint":"Dieselbe Farbe im hellen und dunklen Modus. Eine ungültige Farbe wird ignoriert.","editor.accent_default":"Standard (Bernstein)","editor.accent_pink":"Pink","editor.accent_purple":"Lila","editor.accent_teal":"Petrol","editor.accent_green":"Grün","editor.accent_blue":"Blau","editor.hide_header":"Kopfzeile ausblenden","editor.hide_icon":"Symbol ausblenden","editor.hide_subtitle":"Untertitel ausblenden","editor.hide_legend":"Legende ausblenden","editor.text_size":"Textgröße","text_size.normal":"Normal","text_size.large":"Groß (115%)","text_size.larger":"Größer (130%)","text_size.largest":"Am größten (150%)","editor.language":"Sprache","editor.language_auto":"Wie Home Assistant","editor.hide_sync_warning":"Synchronisierungswarnung ausblenden","editor.max_items":"Anzahl der Einträge","editor.list_height":"Listenhöhe (px)","card.stress_today.title":"Stress & Erholung","stress_today.subtitle_today":"Heute bis {time}","stress_today.subtitle_waiting":"Gestern · heute noch nicht synchronisiert","stress_today.yesterday":"Gestern","empty.stress_today.title":"Noch keine Stressdaten","empty.stress_today.subtitle":"Benötigt Suunto App (unofficial) 1.0.37 oder neuer und eine synchronisierte Uhr.","stress.state.recovering":"Erholung","stress.state.active":"Aktiv","stress.state.inactive":"Inaktiv","stress.state.stressed":"Gestresst","insights.cond.hot_weather":"Bei Hitze (ab {temp}°C)","insights.cond.cold_weather":"Bei Kälte (bis {temp}°C)","insights.metric.efficiency":"Effizienz","insights.unit.per_beat":"m/Schlag","personal_insights.subtitle_days":"Aus deinen letzten {nights} Nächten und {days} Trainingstagen","personal_insights.these_workouts":"diese Trainings","personal_insights.workouts_count":"{with} vs {without} Trainings","personal_insights.speed_at_hr":"{with_speed} km/h bei {with_hr} bpm vs {without_speed} km/h bei {without_hr} bpm","sync.at":"synchronisiert {time}","sync.yesterday":"synchronisiert gestern {time}","chip.not_synced":"Uhr seit {hours} h nicht synchronisiert","editor.eink":"E-Ink-Bildschirm","eink.off":"Aus","eink.bw":"Schwarz-Weiß","eink.gray":"4 Graustufen","eink.red":"Schwarz, Weiß und Rot","eink.yellow":"Schwarz, Weiß und Gelb","eink.color":"6 Farben","editor.max_lines":"Max. Textzeilen","card.whats_new.title":"Neuigkeiten","card.whats_new.subtitle":"Letzte {days} Tage","whats_new.today":"Heute","whats_new.yesterday":"Gestern","whats_new.now":"Jetzt","whats_new.empty":"Nichts Neues in den letzten {days} Tagen","whats_new.record":"Neuer Rekord: {label} {value}","whats_new.record_year":"Rekord des Jahres: {label} {value}","whats_new.record_month":"Rekord des Monats: {label} {value}","whats_new.best_effort":"Bestleistung {distance}: {time}","whats_new.ai_daily":"Tägliche KI-Analyse","whats_new.ai_weekly":"KI-Wochenrückblick","whats_new.gear_due":"{name}: Zeit für eine Wartung","editor.whats_new_show":"Anzeigen","whats_new.kind.workouts":"Trainings","whats_new.kind.records":"Rekorde und Bestleistungen","whats_new.kind.achievements":"Strecken-Erfolge","whats_new.kind.ai":"KI-Berichte","whats_new.kind.gear":"Ausrüstungswartung"},pt:{"stat.distance":"Distância","stat.duration":"Duração","stat.avg_speed":"Vel. média","stat.avg_pace":"Ritmo médio","stat.avg_hr":"FC média","stat.max_hr":"FC máx.","stat.training_effect":"Efeito do treino","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Sensação","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Treinos","stat.steps":"Passos","stat.heart_rate":"Frequência cardíaca","stat.quality":"Qualidade","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repouso","stat.resting_hr_delta":"FC repouso ({delta})","stat.spo2":"SpO2","stat.stress_level":"Estado de stress","stat.recovery_window":"Tempo de recuperação","stat.ctl":"CTL · condição","stat.atl":"ATL · fadiga","stat.tsb":"TSB · forma","stat.readiness":"Prontidão","stat.recovery_balance":"Equilíbrio de recuperação","stat.training_suggestion":"Sugestão de hoje","stat.volume":"Volume","stat.intensity":"Intensidade","stat.consistency":"Consistência","stat.recovery":"Recuperação","stat.variety":"Variedade","card.hr_zones.title":"Zonas de Frequência Cardíaca","card.hr_zones.last_workout":"Último treino","card.sleep_readiness.title":"Sono e Prontidão","card.sleep_readiness.subtitle_no_wake":"{duration} de sono","card.sleep_readiness.subtitle_with_wake":"{duration} de sono · acordou às {time}","card.recovery.title":"Recuperação","card.training_load.title":"Carga de Treino","card.training_load.subtitle_fallback":"Tendência de condição (CTL)","card.week_stats.title":"Esta Semana e Histórico Total","card.week_stats.subtitle":"Últimos 7 dias","card.week_stats.lifetime_title":"Total por atividade","card.today.title":"Hoje","card.today.subtitle":"Ao vivo do teu relógio","card.training_status.title":"Estado de treino","card.training_profile.title":"Perfil de treino","card.training_profile.subtitle":"O teu treino num relance","card.heart_rate.title":"Frequência cardíaca","empty.last_workout.title":"Sem treino recente","empty.last_workout.subtitle":"Sincroniza o teu relógio com a app Suunto para o veres aqui.","empty.hr_zones.title":"Sem dados de zonas","empty.hr_zones.subtitle":"O teu próximo treino ao ar livre com cinta cardíaca vai preencher isto.","empty.sleep_readiness.title":"Ainda sem dados de sono","empty.sleep_readiness.subtitle":"Usa o relógio para dormir para veres isto aqui.","empty.recovery.title":"Ainda sem dados de recuperação","empty.training_load.title":"A calcular a carga de treino","empty.training_load.subtitle":"Precisa de algum histórico de treinos para calcular - volta a verificar após algumas sessões.","empty.week_stats.title":"Ainda sem histórico de treinos","empty.today.title":"Ainda sem dados em direto","empty.training_status.title":"Ainda não há dados suficientes","empty.training_status.subtitle":"Precisa de algum histórico de treino para calcular.","empty.training_profile.title":"Ainda não há dados suficientes","empty.training_profile.subtitle":"Precisa de mais dados dos sensores para calcular o teu perfil.","empty.heart_rate.title":"Ainda sem dados de frequência cardíaca","empty.loading":"A carregar...","empty.generic_error":"Não foi possível carregar os dados Suunto.","error.no_device":"Nenhum dispositivo Suunto encontrado - a integração suunto_app está configurada?","error.multiple_devices":'Foram encontrados vários dispositivos Suunto - define "device_id" na configuração do cartão.',"error.device_missing":'O dispositivo configurado "{device}" não tem entidades suunto_app.',"band.readiness.great":"Ótima","band.readiness.fair":"Razoável","band.readiness.low":"Baixa","band.recovery.well":"Bem recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baixa recuperação","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"A recuperar · faltam {time}","band.hrv.low":"HRV baixa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Descansado","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muito fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baixa","band.acwr.high":"Carga alta - risco de lesão","band.suggestion.hard":"Vai com tudo","band.suggestion.moderate":"Esforço moderado","band.suggestion.easy":"Vá com calma","band.suggestion.rest":"Dia de descanso","chip.workout_logged_today":"Treino registado hoje","chip.workout_today":"Treino hoje","chip.recovering":"A recuperar","chip.nap":"{minutes} min de sesta","chip.nap_earlier":"{minutes} min de sesta (mais cedo)","chip.workouts_30d":"{count} treinos nos últimos 30 dias","chip.acwr":"ACWR {value} · {label}","profile.summary":"Mais forte em {strong} · mais fraco em {light}","chip.more_activity_one":"+{count} outra modalidade","chip.more_activity_other":"+{count} outras modalidades","chip.unusual_recovery":"Recuperação incomum","chip.days_since_one":"{count} dia desde o último treino","chip.days_since_other":"{count} dias desde o último treino","chip.manually_added":"Adicionado manualmente","chip.sleep_stale":"Sem sono da noite passada · noite de {date}","readiness.balance_only":"Apenas balanço de recuperação, sem sono","chip.no_hr":"Sem frequência cardíaca","card.heart_rate.measured":"Medido às {time}","card.heart_rate.measured_ago":"Medido {ago} · {time}","stat.energy_active_sub":"{kcal} ativas","energy.total_unit":"kcal no total","energy.split":"{active} ativas · {bmr} TMB","card.commute.title":"Deslocações","card.commute.subtitle_year":"Este ano em vez do carro","card.commute.subtitle_month":"Este mês em vez do carro","commute.saved":"poupados","commute.fuel_co2":"{fuel} l de combustível · {co2} kg de CO2 a menos","stat.rides":"Viagens","stat.days":"Dias","stat.avg_time":"Tempo médio","commute.this_month":"Este mês:","commute.this_year":"Este ano:","commute.rides_n":"{n} viagens","empty.commute.title":"Ainda sem deslocações","empty.commute.subtitle":"Os treinos que a Suunto marca como deslocação aparecem aqui.","card.gear.title":"Equipamento","card.gear.subtitle":"Distância e revisão","gear.remaining":"Faltam {km}","gear.over":"Ultrapassado em {km}","chip.service":"Revisão","empty.gear.title":"Ainda sem equipamento","empty.gear.subtitle":"Adicione equipamento no menu Configurar da integração.","card.form_forecast.title":"Previsão de forma","card.form_forecast.subtitle":"Se descansar a partir de hoje","stat.tomorrow":"Amanhã","stat.peak_in":"Pico em {days} d","stat.maintenance":"Manter / sem.","empty.form_forecast.title":"Ainda sem previsão","card.daily_brief.title":"Resumo diário","empty.daily_brief.title":"Ainda sem resumo","achievement.count_one":"{count} conquista","achievement.count_other":"{count} conquistas","achievement.rank":"Posição #{rank} nesta rota","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Leve","label.rem":"REM","editor.auto_detect":"Este cartão deteta automaticamente o teu dispositivo Suunto - não é necessária configuração.","editor.pick_device":"Foram encontrados vários dispositivos Suunto - escolhe qual este cartão deve usar.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unidades","editor.units_metric":"Métrico (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Modo compacto","editor.days_label":"Janela de tendência (dias)","editor.period_label":"Período principal","editor.period_year":"Este ano","editor.period_month":"Este mês","editor.goal_source_label":"Objetivo de passos de","editor.source_suunto":"App Suunto ({value})","editor.source_suunto_default":"App Suunto (sem objetivo, a usar {value})","editor.source_custom":"Personalizado","editor.fuel_source_label":"Dados de combustível de","editor.source_integration":"Integração Suunto ({litres} l/100 km, {price} por l)","editor.source_integration_unknown":"Integração Suunto","editor.fuel_consumption_label":"Consumo (l/100 km)","editor.fuel_price_label":"Preço do combustível por litro","editor.fuel_hint":"Altere os valores da integração em Definições > Dispositivos e serviços > Suunto > Configurar.","card.lifetime.title":"Totais Vitalícios","card.lifetime.subtitle":"Desde o início","stat.active_days":"Dias ativos","empty.lifetime.title":"Ainda sem dados vitalícios","card.recent_workouts.title":"Treinos Recentes","empty.recent_workouts.title":"Sem treinos recentes","card.elevation.title":"Altitude e Subidas","stat.ascent":"Subida","stat.descent":"Descida","stat.ascent_time":"Tempo subida","stat.descent_time":"Tempo descida","stat.min_altitude":"Altitude mín.","stat.max_altitude":"Altitude máx.","stat.ascent_rate":"Taxa de subida","empty.elevation.title":"Sem dados de altitude","empty.elevation.subtitle":"Só os treinos ao ar livre com barómetro registam isto.","card.location.title":"Localização de Início","location.open_in_maps":"Abrir no Maps","empty.location.title":"Sem dados de localização","empty.location.subtitle":"Os treinos em interiores não têm ponto de início GPS.","card.fitness.title":"Condição Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Idade física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Ainda sem dados de condição física","empty.fitness.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","empty.fitness_trend.title":"Ainda sem dados de condição física","empty.fitness_trend.subtitle":"A Suunto calcula isto apenas a partir de treinos de corrida ou caminhada.","card.pmc.title":"Gestão de Desempenho","card.pmc.subtitle":"Tendência de {days} dias","card.recovery_trends.title":"Tendências de Recuperação","card.recovery_trends.subtitle":"Referência de {days} dias","empty.recovery_trends.title":"Ainda sem dados de tendências de recuperação","card.weekly_volume.title":"Volume Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Ainda sem dados de volume semanal","stat.average":"Média","stat.total":"Total","card.hr_curve.title":"Curva de Frequência Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Agora","stat.hr_min":"Mín. de hoje","stat.hr_max":"Máx. de hoje","empty.hr_curve.title":"Ainda sem dados de FC em direto","empty.hr_curve.subtitle":"Usa e sincroniza o teu relógio para veres aqui a curva de hoje.","card.sleep_trends.title":"Tendências de Sono","card.sleep_trends.subtitle":"Últimas {days} noites","empty.sleep_trends.title":"Ainda sem dados de tendências de sono","card.weekly_goal.title":"Meta Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Ainda sem distância semanal","editor.goal_label":"Meta semanal (km)","card.streak.title":"Sequência de Atividade","card.streak.subtitle":"Últimos 14 dias","streak.window_count_one":"{count} dia ativo","streak.window_count_other":"{count} dias ativos","streak.days_one":"{count} dia de sequência","streak.days_other":"{count} dias de sequência","streak.none":"Sem sequência ativa - começa hoje","empty.streak.title":"Ainda sem histórico de treinos","just_finished.title":"Bom trabalho!","just_finished.idle.title":"À espera do teu próximo treino","just_finished.idle.subtitle":"Este cartão acende assim que o teu relógio sincronizar um treino novo.","empty.just_finished.title":"Sem treino recente","card.activity_trends.title":"Tendências de Atividade","card.activity_trends.subtitle":"Últimos {days} dias","empty.activity_trends.title":"Ainda sem dados de tendências de atividade","card.recovery_balance_trend.title":"Tendência do Equilíbrio de Recuperação","card.recovery_balance_trend.subtitle":"Últimos {days} dias","empty.recovery_balance_trend.title":"Ainda sem dados de tendências de recuperação","card.readiness_trend.title":"Tendência de Prontidão","card.readiness_trend.subtitle":"Últimos {days} dias","empty.readiness_trend.title":"Ainda sem dados de tendências de prontidão","stat.cadence":"Cadência","stat.stride_length":"Comprimento da passada","stat.pct_hrmax":"% da FC máx.","stat.sleep_avg_hr":"FC média sono","stat.sleep_min_hr":"FC mín. sono","chip.bedtime":"Deitou-se {time}","card.activity_calendar.title":"Calendário de Atividade","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Ainda sem histórico de treinos","activity_calendar.active_days_one":"{count} dia ativo","activity_calendar.active_days_other":"{count} dias ativos","card.workout_comparison.title":"Comparação de Treinos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ainda sem treinos suficientes para comparar","empty.workout_comparison.subtitle":"Faz a mesma atividade duas vezes para veres uma comparação.","stat.distance_delta":"Distância ({delta})","stat.duration_delta":"Duração ({delta})","stat.avg_hr_delta":"FC média ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"Em Números","card.milestones.subtitle":"Desde que começaste","empty.milestones.title":"Ainda sem dados totais","stat.earth_laps":"Voltas à Terra","stat.marathons":"Maratonas","stat.moon_pct":"% até à Lua","stat.burgers":"Hambúrgueres","card.athlete_profile.title":"Personalidade de Treino","empty.athlete_profile.title":"Ainda sem dados suficientes","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Caminhante","personality.activity.walking":"Andarilho","personality.activity.gym":"Atleta de Força","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remador","personality.activity.other":"Multidesportivo","personality.schedule.weekend":"Guerreiro de Fim de Semana","personality.schedule.weekday":"Regular da Semana","personality.schedule.balanced":"Horário Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Ativo à Tarde","personality.time.evening":"Atleta da Noite","personality.time.night":"Coruja Noturna","card.pace_trend.title":"Tendência de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sessões","empty.pace_trend.title":"Ainda sem treinos suficientes para comparar","empty.pace_trend.subtitle":"Faz a mesma atividade algumas vezes para veres uma tendência.","pace_trend.faster":"A ficar mais rápido","pace_trend.slower":"A ficar mais lento","pace_trend.steady":"Ritmo estável","card.lap_splits.title":"Tempos de Volta","empty.lap_splits.title":"Sem dados de voltas","empty.lap_splits.subtitle":"Nem todos os treinos têm voltas - o próximo que tiver vai preencher isto.","stat.laps":"Voltas","stat.fastest_lap":"Volta mais rápida","label.lap":"Volta {n}","card.training_effect_trend.title":"Tendência do Efeito de Treino","card.fitness_trend.title":"Tendência de Condição Física","empty.training_effect_trend.title":"Ainda sem dados de efeito de treino","achievements.badge.around_globe":"Volta ao mundo","achievements.badge.century_club":"Clube da Centena - 100 treinos","achievements.badge.consistency_king":"Rei da Constância - sequência de 14 dias","achievements.badge.iron_will":"Vontade de Ferro - sequência de 30 dias","achievements.badge.days_100":"100 dias ativos","achievements.badge.distance_1000":"Clube dos 1000 km","achievements.badge.distance_5000":"Clube dos 5000 km","achievements.badge.elite_engine":"Motor de elite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal queimadas","achievements.badge.energy_1m":"1.000.000 kcal queimadas","achievements.badge.full_year":"Ano inteiro ativo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Pau para toda obra - 5+ modalidades","achievements.badge.multi_sport":"Atleta multimodalidade - 3+ modalidades","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ treinos","achievements.badge.workouts_1000":"1000 treinos","achievements.badge.workouts_250":"250 treinos","achievements.badge.workouts_500":"500 treinos","achievements.category.days":"Dias ativos","achievements.category.distance":"Distância","achievements.category.energy":"Energia","achievements.category.fitness":"Nível de forma física","achievements.category.records":"Recordes pessoais","achievements.category.time":"Tempo de treino","achievements.category.variety":"Variedade","achievements.category.workouts":"Treinos registados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Conquistas","achievements.next":"Próximo: {name} ({pct}%)","class.rest":"+{pct}% outras atividades","class.tag":"Foco: {activity}","empty.achievements.subtitle":"Regista alguns treinos para começar a desbloquear emblemas.","empty.achievements.title":"Ainda sem conquistas","empty.class.subtitle":"Regista alguns treinos para revelar a tua classe.","empty.class.title":"Ainda sem dados suficientes","empty.level.subtitle":"O teu primeiro treino sincronizado inicia a subida.","empty.level.title":"Ainda sem dados totais","empty.player.subtitle":"Precisa de algum histórico de treino para calcular as tuas estatísticas.","empty.player.title":"Ainda sem dados suficientes","level.label":"NÍVEL","level.source":"{count} treinos registados","level.subtitle":"Alimentado pela tua carga de treino total","level.title.grinder":"Batalhador de Resistência","level.title.legend":"Lenda Viva","level.title.novice":"Recruta Novato","level.title.veteran":"Veterano Experiente","level.xp_to_next":"{xp} XP até o Nv {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista em {activity}","player.help.title":"O que isto significa","player.help.sta":"STA · Resistência, da tua Forma (CTL): quanta carga de treino constante consegues aguentar","player.help.pwr":"PWR · Potência, da intensidade média (TSS) das tuas sessões recentes","player.help.rec":"REC · Recuperação, a tua pontuação atual de Prontidão","player.help.con":"CON · Constância, treinos registados nos últimos 30 dias","player.help.end":"END · Resistência, do teu VO2max estimado","player.help.frm":"FRM · Forma, do teu balanço atual de carga de treino (TSB)","player.help.disclaimer":"Valores heurísticos calculados a partir dos teus próprios dados - não é uma métrica oficial da Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Ouro","player.tier.legendary":"Lendário","player.tier.silver":"Prata","records.climb":"Maior subida","records.distance":"Treino mais longo (distância)","records.pace":"Ritmo mais rápido","records.session":"Sessão mais dura","records.streak":"Sequência mais longa","records.streak_days_one":"{count} dia","records.streak_days_other":"{count} dias","records.workout":"Treino mais longo","class.name.cycling":"Guerreiro da Resistência","class.name.running":"Velocista","class.name.trekking":"Desbravador","class.name.walking":"Andarilho","class.name.gym":"Berserker da Força","class.name.swim":"Senhor das Marés","class.name.ski":"Corredor do Gelo","class.name.row":"Remador","class.name.other":"Pau para toda obra","class.flavor.cycling":"Feito para esforços longos e constantes, não para velocidade pura. Qualquer outro desporto é treino complementar.","class.flavor.running":"Rápido na saída e focado no ritmo. A distância é apenas um meio.","class.flavor.trekking":"Em casa em terreno difícil, percorrendo quilómetros durante horas.","class.flavor.walking":"Quilómetros constantes e de baixo impacto que se somam - constância acima de intensidade.","class.flavor.gym":"Força bruta antes da distância. As sessões de força vêm primeiro.","class.flavor.swim":"Resistência forjada na água, braçada a braçada.","class.flavor.ski":"Velocidade e ritmo na neve e no frio.","class.flavor.row":"Força rítmica, remada a remada.","class.flavor.other":"Nenhum desporto domina - uma mistura verdadeiramente equilibrada.","card.next_milestone.title":"Próxima Meta","card.next_milestone.subtitle":"Distância acumulada","empty.next_milestone.title":"Ainda sem distância acumulada","next_milestone.remaining_label":"restantes","next_milestone.target":"até {target} km acumulados - {pct}% do caminho","next_milestone.workouts_one":"{count} treino até {target} no total","next_milestone.workouts_other":"{count} treinos até {target} no total","next_milestone.eta_one":"a {pace} km/semana - cerca de {weeks} semana","next_milestone.eta_other":"a {pace} km/semana - cerca de {weeks} semanas","card.story.title":"A Tua História Suunto","card.story.subtitle":"Desde o teu primeiro treino","empty.story.title":"Ainda sem dados acumulados","story.top_activity":"{activity} - a tua atividade principal","story.top_activity_share":"{count} treinos - {pct}% da tua história","story.record_subtitle":"O teu recorde pessoal de sempre","card.sleep_clock.title":"Relógio do Sono","card.sleep_clock.subtitle":"Noite passada","empty.sleep_clock.title":"Ainda sem dados de sono","empty.sleep_clock.subtitle":"Usa o teu relógio à noite para ver isto aqui.","sleep_clock.quality":"{pct}% de qualidade do sono","card.sleep_rhythm.title":"Ritmo do Sono","card.sleep_rhythm.subtitle":"Últimas 7 noites","empty.sleep_rhythm.title":"Ainda sem histórico de sono suficiente","empty.sleep_rhythm.subtitle":"Precisa de algumas noites de dados para mostrar um padrão.","sleep_rhythm.avg_bedtime":"Hora média de deitar {time}","sleep_rhythm.avg_wake":"Hora média de acordar {time}","sleep_rhythm.spread":"Variação de {minutes} min","sleep_rhythm.legend_normal":"Noite típica","sleep_rhythm.legend_outlier":"{minutes}+ min fora da média","card.route.title":"Rota","empty.route.title":"Sem dados de rota","empty.route.subtitle":"Treinos indoor não têm registo de GPS.","route.pace_slower":"Mais lento","route.pace_faster":"Mais rápido","card.month_story.title":"Este Mês","empty.month_story.title":"Ainda sem treinos este mês","story.share_month":"{count} treinos - {pct}% deste mês","story.record_subtitle_month":"O seu recorde este mês","card.year_story.title":"Este Ano","empty.year_story.title":"Ainda sem treinos este ano","story.share_year":"{count} treinos - {pct}% deste ano","story.record_subtitle_year":"O seu recorde este ano","card.best_efforts.title":"Melhores Marcas","card.best_efforts.subtitle":"{count} de {total} conseguidas","empty.best_efforts.title":"Ainda sem melhores marcas","empty.best_efforts.subtitle":"Registadas a partir de treinos de corrida a partir de agora, não retroativamente.","best_efforts.not_yet":"Ainda não conseguido","distance.half_marathon":"Meia Maratona","distance.marathon":"Maratona","card.steps_today.title":"Passos Hoje","card.steps_today.subtitle":"Meta: {goal} passos","empty.steps_today.title":"Ainda sem dados de passos","editor.steps_goal_label":"Meta diária (passos)","steps_today.goal_pct":"{pct}% da meta diária","steps_today.vs_avg_up":"+{pct}% em relação à sua média de 7 dias ({avg})","steps_today.vs_avg_down":"-{pct}% em relação à sua média de 7 dias ({avg})","card.steps_trend.title":"Tendência de Passos","card.steps_trend.subtitle":"Últimos {days} dias","empty.steps_trend.title":"Ainda sem histórico de passos","steps_trend.legend_met":"Meta atingida","steps_trend.legend_below":"Abaixo da meta","steps_trend.days_at_goal":"Dias com meta","card.month_records.title":"Recordes do Mês","card.month_records.subtitle":"{count} de {total} alcançados este mês","empty.month_records.title":"Ainda sem recordes este mês","empty.month_records.subtitle":"Seus melhores resultados deste mês aparecerão aqui.","card.year_records.title":"Recordes do Ano","card.year_records.subtitle":"{count} de {total} alcançados este ano","empty.year_records.title":"Ainda sem recordes este ano","empty.year_records.subtitle":"Seus melhores resultados deste ano aparecerão aqui.","card.running_dynamics.title":"Dinâmica de Corrida","card.running_dynamics.subtitle":"{activity} - últimos {count} treinos","empty.running_dynamics.title":"Ainda sem dados suficientes","empty.running_dynamics.subtitle":"Requer alguns treinos de corrida recentes com dados de cadência.","card.weekly_steps_goal.title":"Meta Semanal de Passos","card.weekly_steps_goal.subtitle":"{value} de {goal} passos","empty.weekly_steps_goal.title":"Ainda sem dados de passos","editor.weekly_steps_goal_label":"Meta semanal (passos)","card.goals_overview.title":"Resumo de Metas","card.goals_overview.subtitle":"Esta semana","empty.goals_overview.title":"Ainda sem dados de metas","card.week_compare.title":"Esta Semana vs Semana Passada","card.week_compare.subtitle":"Totais móveis de 7 dias","empty.week_compare.title":"Ainda sem histórico suficiente","empty.week_compare.subtitle":"Volte em cerca de uma semana para ver a comparação.","week_compare.legend_now":"Esta semana","week_compare.legend_prev":"Semana passada","card.sleep_detail.title":"Detalhe do Sono","card.sleep_detail.subtitle":"Noite passada","label.awake":"Acordado","label.sleep_other":"Outro sono","sleep_detail.total_sleep":"sono total","sleep_detail.in_bed":"{duration} na cama","sleep_detail.bedtime":"Deitar","sleep_detail.wake":"Acordar","sleep_detail.stages":"Fases do sono","sleep_detail.efficiency":"Eficiência do sono","sleep_detail.efficiency_sub":"Tempo dormindo ÷ tempo na cama","sleep_detail.vitals":"Sinais vitais","sleep_detail.insight_excellent":"{pct}% de sono profundo · uma excelente janela de recuperação.","sleep_detail.insight_solid":"{pct}% de sono profundo · uma recuperação sólida.","sleep_detail.insight_light":"{pct}% de sono profundo · mais leve que o normal.","editor.energy_goal_source_label":"Meta de calorias de","editor.sleep_goal_source_label":"Meta de sono de","editor.training_goal_source_label":"Meta de tempo de treino de","editor.energy_goal_label":"Meta diária (kcal ativas)","editor.sleep_goal_label":"Meta de sono (horas)","editor.training_goal_label":"Meta semanal (horas)","editor.show_goals_label":"Mostrar metas","editor.source_suunto_none":"App Suunto (sem meta definida)","editor.distance_goal_hint":"A app Suunto não tem meta de distância, por isso esta é sempre a sua.","card.daily_goals.title":"Metas do dia","card.daily_goals.subtitle":"Passos, calorias e sono","empty.daily_goals.title":"Ainda sem dados de metas","stat.active_kcal":"Kcal ativas","stat.sleep":"Sono","stat.training_time":"Tempo de treino","goal.of":"de {goal}","goal.energy_active_of":"{kcal} ativas de {goal}","sleep_goal.label":"Meta de sono","sleep_goal.short":"{value} de {goal} · faltam {missing}","sleep_goal.met":"{value} de {goal} · meta atingida","sleep_trends.nights_at_goal":"Noites na meta","sleep_trends.avg_vs_goal":"Média vs meta","sleep_trends.legend_goal":"Meta {goal}","card.ai_insight.title":"Análise com IA","empty.ai_insight.title":"A análise com IA está desligada","empty.ai_insight.subtitle":"Ative-a na integração: Configurar -> Análise diária com IA","empty.ai_insight.waiting":"Ainda sem análise com IA hoje","ai_insight.generating":"A gerar a análise","ai_insight.night":"noite {night}","ai_insight.no_night":"a última noite ainda não sincronizou","ai_insight.no_section":"Sem dados para esta secção","ai_insight.advice":"Conselhos para hoje","ai_insight.disclaimer":"Não é aconselhamento médico","ai_insight.section.sleep":"Sono","ai_insight.section.recovery":"Recuperação","ai_insight.section.training":"Treino","ai_insight.section.activity":"Atividade","ai_insight.section_full.sleep":"Sono","ai_insight.section_full.recovery":"Saúde e recuperação","ai_insight.section_full.training":"Treino","ai_insight.section_full.activity":"Atividade diária","ai_insight.status.good":"Bom","ai_insight.status.ok":"OK","ai_insight.status.caution":"Cuidado","ai_insight.status.rest":"Descanso","strategy.title":"Treino","strategy.none":"Sem conta Suunto","strategy.none_text":"Não foi encontrada nenhuma conta da integração Suunto App. Adicione a integração em Definições > Dispositivos e serviços e recarregue este painel.","strategy.section.today":"Hoje","strategy.section.ai":"Análise com IA","strategy.section.sleep":"Sono","strategy.section.recovery":"Recuperação","strategy.section.last_workout":"Último treino","strategy.section.load":"Carga e forma","strategy.section.week":"Esta semana","strategy.section.records":"Recordes","strategy.section.history":"Histórico e perfil","strategy.section.gear":"Equipamento e deslocações","card.ai_weekly.title":"Resumo semanal com IA","empty.ai_weekly.subtitle":"Requer ha-suunto 1.0.38 ou mais recente com a IA ativada: Configurar -> IA","empty.ai_weekly.waiting":"Ainda não há resumo semanal com IA","ai_weekly.week":"semana {range}","ai_weekly.advice":"Plano para a próxima semana","editor.ai_report_label":"Relatório","editor.ai_report_daily":"Análise diária","editor.ai_report_weekly":"Resumo semanal","editor.ai_section_label":"Secção","editor.ai_single_label":"Mostrar só esta secção","card.sleep_regularity.title":"Regularidade do sono","sleep_regularity.subtitle":"Últimas 4 semanas · {nights} noites","empty.sleep_regularity.title":"Ainda não há noites suficientes","empty.sleep_regularity.subtitle":"É preciso cerca de uma semana de noites seguidas com o relógio.","sleep_regularity.bed":"Deitar média {time}","sleep_regularity.wake":"Acordar média {time}","sleep_regularity.mid_work":"Meio do sono, noites dom-qui {time}","sleep_regularity.mid_free":"Meio do sono, noites sex/sáb {time}","band.regularity.regular":"Regular","band.regularity.fair":"Bastante regular","band.regularity.irregular":"Irregular","chip.regularity":"Regularidade {value}","chip.social_jetlag":"Jet lag social {value}","card.aerobic_decoupling.title":"Desacoplamento aeróbico","empty.aerobic_decoupling.title":"Ainda sem treino longo analisado","empty.aerobic_decoupling.subtitle":"Aparece após um treino de 40+ minutos com GPS e frequência cardíaca.","aerobic_decoupling.analyzed":"{minutes} min analisados","aerobic_decoupling.hint":"abaixo de 5 % = boa base aeróbica","aerobic_decoupling.first_half":"1.ª metade","aerobic_decoupling.second_half":"2.ª metade","aerobic_decoupling.trend":"Últimos {count} treinos analisados","band.decoupling.coupled":"Acoplado","band.decoupling.moderate":"Deriva moderada","band.decoupling.high":"Deriva alta","stat.decoupling":"Deriva de FC","card.personal_insights.title":"O que resulta para si","personal_insights.subtitle":"Das suas últimas {nights} noites","empty.personal_insights.title":"Ainda sem padrões claros","empty.personal_insights.subtitle":"São precisas algumas semanas de dados de sono e treino. Só são mostradas diferenças claras.","personal_insights.these_nights":"estas noites","personal_insights.the_rest":"as restantes","personal_insights.nights_count":"{with} vs {without} noites","personal_insights.disclaimer":"Padrões nos seus próprios dados, não prova de causa. Um resultado precisa de pelo menos 4 noites ou treinos de cada lado.","insights.cond.late_workout":"Depois de um treino que acaba após as {time}","insights.cond.training_day":"Nos dias de treino","insights.cond.hard_day":"Depois dos seus dias mais duros","insights.cond.early_bed":"Quando se deita antes das {bedtime}","insights.cond.free_night":"Nas noites de sexta e sábado","insights.metric.hrv":"VFC","insights.metric.resting_hr":"FC em repouso","insights.metric.sleep":"Sono","daily_brief.your_pattern":"O seu padrão","editor.show_insight_label":"Mostrar o seu padrão mais forte","editor.look_section":"Aparência","editor.title":"Título","editor.icon":"Ícone (ex. mdi:star)","editor.accent_color":"Cor de destaque (ex. #e91e63 ou teal)","editor.accent_hint":"A mesma cor no modo claro e escuro. Uma cor inválida é ignorada.","editor.accent_default":"Padrão (âmbar)","editor.accent_pink":"Rosa","editor.accent_purple":"Roxo","editor.accent_teal":"Verde-azulado","editor.accent_green":"Verde","editor.accent_blue":"Azul","editor.hide_header":"Ocultar cabeçalho","editor.hide_icon":"Ocultar ícone","editor.hide_subtitle":"Ocultar subtítulo","editor.hide_legend":"Ocultar legenda","editor.text_size":"Tamanho do texto","text_size.normal":"Normal","text_size.large":"Grande (115%)","text_size.larger":"Maior (130%)","text_size.largest":"Muito grande (150%)","editor.language":"Idioma","editor.language_auto":"O do Home Assistant","editor.hide_sync_warning":"Ocultar o aviso de sincronização","editor.max_items":"Número de itens","editor.list_height":"Altura da lista (px)","card.stress_today.title":"Stress e recuperação","stress_today.subtitle_today":"Hoje até às {time}","stress_today.subtitle_waiting":"Ontem · hoje ainda não sincronizou","stress_today.yesterday":"Ontem","empty.stress_today.title":"Ainda sem dados de stress","empty.stress_today.subtitle":"Requer Suunto App (unofficial) 1.0.37 ou mais recente e um relógio sincronizado.","stress.state.recovering":"Recuperação","stress.state.active":"Ativo","stress.state.inactive":"Inativo","stress.state.stressed":"Stress","insights.cond.hot_weather":"Com calor (a partir de {temp}°C)","insights.cond.cold_weather":"Com frio (até {temp}°C)","insights.metric.efficiency":"Eficiência","insights.unit.per_beat":"m/batim.","personal_insights.subtitle_days":"Das suas últimas {nights} noites e {days} dias de treino","personal_insights.these_workouts":"estes treinos","personal_insights.workouts_count":"{with} vs {without} treinos","personal_insights.speed_at_hr":"{with_speed} km/h a {with_hr} bpm vs {without_speed} km/h a {without_hr} bpm","sync.at":"sincronizado {time}","sync.yesterday":"sincronizado ontem {time}","chip.not_synced":"Relógio sem sincronizar há {hours} h","editor.eink":"Ecrã e-ink","eink.off":"Desligado","eink.bw":"Preto e branco","eink.gray":"4 cinzentos","eink.red":"Preto, branco e vermelho","eink.yellow":"Preto, branco e amarelo","eink.color":"6 cores","editor.max_lines":"Máx. de linhas de texto","card.whats_new.title":"Novidades","card.whats_new.subtitle":"Últimos {days} dias","whats_new.today":"Hoje","whats_new.yesterday":"Ontem","whats_new.now":"Agora","whats_new.empty":"Nada de novo nos últimos {days} dias","whats_new.record":"Novo recorde: {label} {value}","whats_new.record_year":"Recorde do ano: {label} {value}","whats_new.record_month":"Recorde do mês: {label} {value}","whats_new.best_effort":"Melhor esforço {distance}: {time}","whats_new.ai_daily":"Análise diária com IA","whats_new.ai_weekly":"Resumo semanal com IA","whats_new.gear_due":"{name}: hora da manutenção","editor.whats_new_show":"Mostrar","whats_new.kind.workouts":"Treinos","whats_new.kind.records":"Recordes e melhores esforços","whats_new.kind.achievements":"Conquistas no percurso","whats_new.kind.ai":"Relatórios de IA","whats_new.kind.gear":"Manutenção do equipamento"},fr:{"stat.distance":"Distance","stat.duration":"Durée","stat.avg_speed":"Vitesse moy.","stat.avg_pace":"Allure moy.","stat.avg_hr":"FC moy.","stat.max_hr":"FC max","stat.training_effect":"Effet d'entraînement","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Ressenti","stat.energy":"Énergie","stat.time":"Temps","stat.workouts":"Séances","stat.steps":"Pas","stat.heart_rate":"Fréquence cardiaque","stat.quality":"Qualité","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC repos","stat.resting_hr_delta":"FC repos ({delta})","stat.spo2":"SpO2","stat.stress_level":"État de stress","stat.recovery_window":"Temps de récupération","stat.ctl":"CTL · forme","stat.atl":"ATL · fatigue","stat.tsb":"TSB · forme","stat.readiness":"Préparation","stat.recovery_balance":"Équilibre de récupération","stat.training_suggestion":"Suggestion du jour","stat.volume":"Volume","stat.intensity":"Intensité","stat.consistency":"Régularité","stat.recovery":"Récupération","stat.variety":"Variété","card.hr_zones.title":"Zones de Fréquence Cardiaque","card.hr_zones.last_workout":"Dernière séance","card.sleep_readiness.title":"Sommeil et Préparation","card.sleep_readiness.subtitle_no_wake":"{duration} de sommeil","card.sleep_readiness.subtitle_with_wake":"{duration} de sommeil · réveil à {time}","card.recovery.title":"Récupération","card.training_load.title":"Charge d'Entraînement","card.training_load.subtitle_fallback":"Tendance de forme (CTL)","card.week_stats.title":"Cette Semaine et Cumul Total","card.week_stats.subtitle":"7 derniers jours","card.week_stats.lifetime_title":"Cumul par activité","card.today.title":"Aujourd'hui","card.today.subtitle":"En direct de ta montre","card.training_status.title":"État d'entraînement","card.training_profile.title":"Profil d'entraînement","card.training_profile.subtitle":"Ton entraînement en un coup d'œil","card.heart_rate.title":"Fréquence cardiaque","empty.last_workout.title":"Aucune séance récente","empty.last_workout.subtitle":"Synchronise ta montre avec l'appli Suunto pour la voir ici.","empty.hr_zones.title":"Aucune donnée de zone","empty.hr_zones.subtitle":"Ta prochaine séance en extérieur avec ceinture cardiaque remplira ceci.","empty.sleep_readiness.title":"Pas encore de données de sommeil","empty.sleep_readiness.subtitle":"Porte ta montre pour dormir afin de le voir ici.","empty.recovery.title":"Pas encore de données de récupération","empty.training_load.title":"Calcul de la charge d'entraînement","empty.training_load.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé - reviens après quelques séances.","empty.week_stats.title":"Pas encore d'historique d'entraînement","empty.today.title":"Pas encore de données en direct","empty.training_status.title":"Pas encore assez de données","empty.training_status.subtitle":"Nécessite un peu d'historique d'entraînement pour être calculé.","empty.training_profile.title":"Pas encore assez de données","empty.training_profile.subtitle":"Nécessite plus de données de capteurs pour calculer ton profil.","empty.heart_rate.title":"Pas encore de données de fréquence cardiaque","empty.loading":"Chargement...","empty.generic_error":"Impossible de charger les données Suunto.","error.no_device":"Aucun appareil Suunto trouvé - l'intégration suunto_app est-elle configurée ?","error.multiple_devices":'Plusieurs appareils Suunto trouvés - définis "device_id" dans la configuration de la carte.',"error.device_missing":"L'appareil configuré \"{device}\" n'a aucune entité suunto_app.","band.readiness.great":"Excellente","band.readiness.fair":"Correcte","band.readiness.low":"Faible","band.recovery.well":"Bien récupéré","band.recovery.partial":"Partiellement récupéré","band.recovery.low":"Faible récupération","band.recovery.fully":"Entièrement récupéré","band.recovery.recovering":"Récupération · {time} restant","band.hrv.low":"HRV basse","band.hrv.high":"HRV élevée","band.hrv.balanced":"HRV équilibrée","band.form.fresh":"Frais","band.form.neutral":"Neutre","band.form.fatigued":"Fatigué","band.form.very_fatigued":"Très fatigué","band.acwr.safe":"Zone sûre","band.acwr.low":"Charge faible","band.acwr.high":"Charge élevée - risque de blessure","band.suggestion.hard":"Foncez","band.suggestion.moderate":"Effort modéré","band.suggestion.easy":"Y aller doucement","band.suggestion.rest":"Jour de repos","chip.workout_logged_today":"Séance enregistrée aujourd'hui","chip.workout_today":"Séance aujourd'hui","chip.recovering":"Récupération","chip.nap":"{minutes} min de sieste","chip.nap_earlier":"{minutes} min de sieste (plus tôt)","chip.workouts_30d":"{count} séances au cours des 30 derniers jours","chip.acwr":"ACWR {value} · {label}","profile.summary":"Le plus fort en {strong} · le plus faible en {light}","chip.more_activity_one":"+{count} autre activité","chip.more_activity_other":"+{count} autres activités","chip.unusual_recovery":"Récupération inhabituelle","chip.days_since_one":"{count} jour depuis la dernière séance","chip.days_since_other":"{count} jours depuis la dernière séance","chip.manually_added":"Ajouté manuellement","chip.sleep_stale":"Pas de sommeil pour la nuit dernière · nuit du {date}","readiness.balance_only":"Bilan de récupération seul, sans sommeil","chip.no_hr":"Sans fréquence cardiaque","card.heart_rate.measured":"Mesuré à {time}","card.heart_rate.measured_ago":"Mesuré {ago} · {time}","stat.energy_active_sub":"{kcal} actives","energy.total_unit":"kcal au total","energy.split":"{active} actives · {bmr} métabolisme de base","card.commute.title":"Trajets","card.commute.subtitle_year":"Cette année à la place de la voiture","card.commute.subtitle_month":"Ce mois à la place de la voiture","commute.saved":"économisés","commute.fuel_co2":"{fuel} l de carburant · {co2} kg de CO2 en moins","stat.rides":"Trajets","stat.days":"Jours","stat.avg_time":"Temps moy.","commute.this_month":"Ce mois :","commute.this_year":"Cette année :","commute.rides_n":"{n} trajets","empty.commute.title":"Pas encore de trajets","empty.commute.subtitle":"Les entraînements que Suunto marque comme trajet apparaissent ici.","card.gear.title":"Équipement","card.gear.subtitle":"Distance et entretien","gear.remaining":"Reste {km}","gear.over":"Dépassé de {km}","chip.service":"Entretien","empty.gear.title":"Aucun équipement suivi","empty.gear.subtitle":"Ajoutez un équipement dans le menu Configurer de l'intégration.","card.form_forecast.title":"Prévision de forme","card.form_forecast.subtitle":"Si vous vous reposez dès aujourd'hui","stat.tomorrow":"Demain","stat.peak_in":"Pic dans {days} j","stat.maintenance":"Maintien / sem.","empty.form_forecast.title":"Pas encore de prévision","card.daily_brief.title":"Brief du jour","empty.daily_brief.title":"Pas encore de brief","achievement.count_one":"{count} exploit","achievement.count_other":"{count} exploits","achievement.rank":"Rang #{rank} sur cet itinéraire","label.zone":"Zone {n}","label.deep":"Profond","label.light":"Léger","label.rem":"REM","editor.auto_detect":"Cette carte détecte automatiquement ton appareil Suunto - aucune configuration nécessaire.","editor.pick_device":"Plusieurs appareils Suunto trouvés - choisis celui que cette carte doit utiliser.","editor.device_label":"Appareil Suunto","editor.units_label":"Unités","editor.units_metric":"Métrique (km)","editor.units_imperial":"Impérial (mi)","editor.compact_label":"Mode compact","editor.days_label":"Fenêtre de tendance (jours)","editor.period_label":"Période principale","editor.period_year":"Cette année","editor.period_month":"Ce mois","editor.goal_source_label":"Objectif de pas depuis","editor.source_suunto":"App Suunto ({value})","editor.source_suunto_default":"App Suunto (pas d'objectif, {value} utilisé)","editor.source_custom":"Personnalisé","editor.fuel_source_label":"Données carburant depuis","editor.source_integration":"Intégration Suunto ({litres} l/100 km, {price} par l)","editor.source_integration_unknown":"Intégration Suunto","editor.fuel_consumption_label":"Consommation (l/100 km)","editor.fuel_price_label":"Prix du carburant au litre","editor.fuel_hint":"Modifiez les valeurs de l'intégration dans Paramètres > Appareils et services > Suunto > Configurer.","card.lifetime.title":"Cumul Total","card.lifetime.subtitle":"Depuis le début","stat.active_days":"Jours actifs","empty.lifetime.title":"Pas encore de cumul total","card.recent_workouts.title":"Séances Récentes","empty.recent_workouts.title":"Aucune séance récente","card.elevation.title":"Dénivelé et Montées","stat.ascent":"Montée","stat.descent":"Descente","stat.ascent_time":"Temps montée","stat.descent_time":"Temps descente","stat.min_altitude":"Altitude min.","stat.max_altitude":"Altitude max.","stat.ascent_rate":"Vitesse ascensionnelle","empty.elevation.title":"Aucune donnée d'altitude","empty.elevation.subtitle":"Seules les séances en extérieur avec un altimètre enregistrent ceci.","card.location.title":"Lieu de Départ","location.open_in_maps":"Ouvrir dans Maps","empty.location.title":"Aucune donnée de localisation","empty.location.subtitle":"Les séances en intérieur n'ont pas de point de départ GPS.","card.fitness.title":"Forme Physique","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Âge physique","fitness.measured":"Mesuré {time} · {activity}","empty.fitness.title":"Pas encore de données de forme physique","empty.fitness.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","empty.fitness_trend.title":"Pas encore de données de forme physique","empty.fitness_trend.subtitle":"Suunto calcule ceci uniquement à partir des séances de course ou de marche.","card.pmc.title":"Gestion de la Performance","card.pmc.subtitle":"Tendance sur {days} jours","card.recovery_trends.title":"Tendances de Récupération","card.recovery_trends.subtitle":"Référence sur {days} jours","empty.recovery_trends.title":"Pas encore de données de tendances de récupération","card.weekly_volume.title":"Volume Hebdomadaire","card.weekly_volume.subtitle":"12 dernières semaines","empty.weekly_volume.title":"Pas encore de données de volume hebdomadaire","stat.average":"Moyenne","stat.total":"Total","card.hr_curve.title":"Courbe de Fréquence Cardiaque","card.hr_curve.subtitle":"Dernières 24 heures","stat.hr_now":"Maintenant","stat.hr_min":"Min. du jour","stat.hr_max":"Max. du jour","empty.hr_curve.title":"Pas encore de données de FC en direct","empty.hr_curve.subtitle":"Porte et synchronise ta montre pour voir la courbe du jour ici.","card.sleep_trends.title":"Tendances de Sommeil","card.sleep_trends.subtitle":"{days} dernières nuits","empty.sleep_trends.title":"Pas encore de données de tendances de sommeil","card.weekly_goal.title":"Objectif Hebdomadaire","card.weekly_goal.subtitle":"{value} sur {goal} km","empty.weekly_goal.title":"Pas encore de distance hebdomadaire","editor.goal_label":"Objectif hebdomadaire (km)","card.streak.title":"Série d'Activité","card.streak.subtitle":"14 derniers jours","streak.window_count_one":"{count} jour actif","streak.window_count_other":"{count} jours actifs","streak.days_one":"{count} jour de série","streak.days_other":"{count} jours de série","streak.none":"Aucune série active - bouge aujourd'hui","empty.streak.title":"Pas encore d'historique d'entraînement","just_finished.title":"Bien joué !","just_finished.idle.title":"En attente de ta prochaine séance","just_finished.idle.subtitle":"Cette carte s'allume dès que ta montre synchronise une nouvelle séance.","empty.just_finished.title":"Aucune séance récente","card.activity_trends.title":"Tendances d'Activité","card.activity_trends.subtitle":"{days} derniers jours","empty.activity_trends.title":"Pas encore de données de tendances d'activité","card.recovery_balance_trend.title":"Tendance de l'Équilibre de Récupération","card.recovery_balance_trend.subtitle":"{days} derniers jours","empty.recovery_balance_trend.title":"Pas encore de données de tendances de récupération","card.readiness_trend.title":"Tendance de Préparation","card.readiness_trend.subtitle":"{days} derniers jours","empty.readiness_trend.title":"Pas encore de données de tendances de préparation","stat.cadence":"Cadence","stat.stride_length":"Longueur de foulée","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC moy. som.","stat.sleep_min_hr":"FC min. som.","chip.bedtime":"Coucher {time}","card.activity_calendar.title":"Calendrier d'Activité","card.activity_calendar.subtitle":"6 dernières semaines","empty.activity_calendar.title":"Pas encore d'historique d'entraînement","activity_calendar.active_days_one":"{count} jour actif","activity_calendar.active_days_other":"{count} jours actifs","card.workout_comparison.title":"Comparaison de Séances","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Pas encore assez de séances similaires","empty.workout_comparison.subtitle":"Fais la même activité deux fois pour voir une comparaison.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Durée ({delta})","stat.avg_hr_delta":"FC moy. ({delta})","stat.pace_delta":"Allure ({delta})","card.milestones.title":"En Chiffres","card.milestones.subtitle":"Depuis le début","empty.milestones.title":"Pas encore de données cumulées","stat.earth_laps":"Tours de la Terre","stat.marathons":"Marathons","stat.moon_pct":"% jusqu'à la Lune","stat.burgers":"Burgers","card.athlete_profile.title":"Personnalité Sportive","empty.athlete_profile.title":"Pas encore assez de données","personality.activity.cycling":"Cycliste","personality.activity.running":"Coureur","personality.activity.trekking":"Randonneur","personality.activity.walking":"Marcheur","personality.activity.gym":"Athlète de Force","personality.activity.swim":"Nageur","personality.activity.ski":"Skieur","personality.activity.row":"Rameur","personality.activity.other":"Multisportif","personality.schedule.weekend":"Guerrier du Week-end","personality.schedule.weekday":"Régulier en Semaine","personality.schedule.balanced":"Planning Équilibré","personality.time.morning":"Lève-tôt","personality.time.afternoon":"Actif l'Après-midi","personality.time.evening":"Athlète du Soir","personality.time.night":"Oiseau de Nuit","card.pace_trend.title":"Tendance d'Allure","card.pace_trend.subtitle":"{activity} · {count} dernières séances","empty.pace_trend.title":"Pas encore assez de séances similaires","empty.pace_trend.subtitle":"Fais la même activité plusieurs fois pour voir une tendance.","pace_trend.faster":"S'améliore","pace_trend.slower":"Ralentit","pace_trend.steady":"Stable","card.lap_splits.title":"Temps par Tour","empty.lap_splits.title":"Aucune donnée de tour","empty.lap_splits.subtitle":"Tous les entraînements n'ont pas de tours - le prochain qui en a remplira ceci.","stat.laps":"Tours","stat.fastest_lap":"Tour le plus rapide","label.lap":"Tour {n}","card.training_effect_trend.title":"Tendance de l'Effet d'Entraînement","card.fitness_trend.title":"Tendance de la Forme Physique","empty.training_effect_trend.title":"Pas encore de données d'effet d'entraînement","achievements.badge.around_globe":"Tour du monde","achievements.badge.century_club":"Club du Centenaire - 100 entraînements","achievements.badge.consistency_king":"Roi de la Régularité - série de 14 jours","achievements.badge.iron_will":"Volonté de Fer - série de 30 jours","achievements.badge.days_100":"100 jours actifs","achievements.badge.distance_1000":"Club des 1000 km","achievements.badge.distance_5000":"Club des 5000 km","achievements.badge.elite_engine":"Moteur d'élite - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal brûlées","achievements.badge.energy_1m":"1 000 000 kcal brûlées","achievements.badge.full_year":"Actif toute l'année","achievements.badge.hours_100":"100 heures","achievements.badge.hours_500":"500 heures","achievements.badge.jack_of_all_trades":"Touche-à-tout - 5+ sports","achievements.badge.multi_sport":"Athlète multisport - 3+ sports","achievements.badge.solid_engine":"Moteur solide - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entraînements","achievements.badge.workouts_1000":"1000 entraînements","achievements.badge.workouts_250":"250 entraînements","achievements.badge.workouts_500":"500 entraînements","achievements.category.days":"Jours actifs","achievements.category.distance":"Distance","achievements.category.energy":"Énergie","achievements.category.fitness":"Niveau de forme","achievements.category.records":"Records personnels","achievements.category.time":"Temps d'entraînement","achievements.category.variety":"Variété","achievements.category.workouts":"Entraînements enregistrés","card.achievements.subtitle":"{unlocked} sur {total} débloqués","card.achievements.title":"Succès","achievements.next":"Prochain : {name} ({pct}%)","class.rest":"+{pct}% autres activités","class.tag":"Orientation : {activity}","empty.achievements.subtitle":"Enregistrez quelques séances pour débloquer des badges.","empty.achievements.title":"Aucun succès pour l'instant","empty.class.subtitle":"Enregistrez quelques séances pour révéler votre classe.","empty.class.title":"Pas encore assez de données","empty.level.subtitle":"Votre première séance synchronisée lance l'ascension.","empty.level.title":"Pas encore de données cumulées","empty.player.subtitle":"Nécessite un peu d'historique d'entraînement pour calculer vos stats.","empty.player.title":"Pas encore assez de données","level.label":"NIVEAU","level.source":"{count} entraînements enregistrés","level.subtitle":"Alimenté par votre charge d'entraînement cumulée","level.title.grinder":"Bosseur d'Endurance","level.title.legend":"Légende Vivante","level.title.novice":"Recrue Fraîche","level.title.veteran":"Vétéran Aguerri","level.xp_to_next":"{xp} XP avant Niv {level}","level.xp_total":"{xp} XP","player.archetype":"Spécialiste {activity}","player.help.title":"Ce que cela signifie","player.help.sta":"STA · Endurance, d'après votre Forme (CTL) : la charge d'entraînement régulière que vous pouvez supporter","player.help.pwr":"PWR · Puissance, d'après l'intensité moyenne (TSS) de vos séances récentes","player.help.rec":"REC · Récupération, votre score de Disponibilité actuel","player.help.con":"CON · Régularité, entraînements enregistrés sur les 30 derniers jours","player.help.end":"END · Endurance, d'après votre VO2max estimé","player.help.frm":"FRM · Forme, d'après votre balance de charge d'entraînement actuelle (TSB)","player.help.disclaimer":"Valeurs heuristiques calculées à partir de vos propres données - pas une métrique officielle Suunto.","player.tier.bronze":"Bronze","player.tier.gold":"Or","player.tier.legendary":"Légendaire","player.tier.silver":"Argent","records.climb":"Plus grande ascension","records.distance":"Entraînement le plus long (distance)","records.pace":"Allure la plus rapide","records.session":"Séance la plus dure","records.streak":"Plus longue série","records.streak_days_one":"{count} jour","records.streak_days_other":"{count} jours","records.workout":"Entraînement le plus long","class.name.cycling":"Guerrier de l'Endurance","class.name.running":"Sprinteur","class.name.trekking":"Éclaireur","class.name.walking":"Vagabond","class.name.gym":"Berserker de la Force","class.name.swim":"Maître des Marées","class.name.ski":"Coureur du Givre","class.name.row":"Rameur","class.name.other":"Touche-à-tout","class.flavor.cycling":"Conçu pour des efforts longs et réguliers plutôt que la vitesse pure. Tout autre sport n'est qu'un complément.","class.flavor.running":"Rapide au départ et centré sur le tempo. La distance n'est qu'un moyen.","class.flavor.trekking":"À l'aise sur terrain difficile, avalant les kilomètres pendant des heures.","class.flavor.walking":"Des kilomètres réguliers et peu traumatisants qui s'accumulent - la régularité prime sur l'intensité.","class.flavor.gym":"La force brute avant la distance. Les séances de force passent en premier.","class.flavor.swim":"Une endurance forgée dans l'eau, brasse après brasse.","class.flavor.ski":"Vitesse et rythme sur la neige et le froid.","class.flavor.row":"Une force rythmée, coup après coup.","class.flavor.other":"Aucun sport ne domine - un mélange vraiment équilibré.","card.next_milestone.title":"Prochain Objectif","card.next_milestone.subtitle":"Distance cumulée","empty.next_milestone.title":"Pas encore de distance cumulée","next_milestone.remaining_label":"restants","next_milestone.target":"jusqu'à {target} km cumulés - {pct}% du chemin","next_milestone.workouts_one":"{count} séance jusqu'à {target} au total","next_milestone.workouts_other":"{count} séances jusqu'à {target} au total","next_milestone.eta_one":"à {pace} km/semaine - encore environ {weeks} semaine","next_milestone.eta_other":"à {pace} km/semaine - encore environ {weeks} semaines","card.story.title":"Ton Histoire Suunto","card.story.subtitle":"Depuis ta première séance","empty.story.title":"Pas encore de données cumulées","story.top_activity":"{activity} - ton activité principale","story.top_activity_share":"{count} séances - {pct}% de ton historique","story.record_subtitle":"Ton record personnel absolu","card.sleep_clock.title":"Horloge du Sommeil","card.sleep_clock.subtitle":"Cette nuit","empty.sleep_clock.title":"Pas encore de données de sommeil","empty.sleep_clock.subtitle":"Porte ta montre la nuit pour le voir ici.","sleep_clock.quality":"{pct}% de qualité de sommeil","card.sleep_rhythm.title":"Rythme de Sommeil","card.sleep_rhythm.subtitle":"7 dernières nuits","empty.sleep_rhythm.title":"Pas encore assez d'historique de sommeil","empty.sleep_rhythm.subtitle":"Il faut quelques nuits de données pour montrer une tendance.","sleep_rhythm.avg_bedtime":"Coucher moyen {time}","sleep_rhythm.avg_wake":"Réveil moyen {time}","sleep_rhythm.spread":"Écart de {minutes} min","sleep_rhythm.legend_normal":"Nuit typique","sleep_rhythm.legend_outlier":"{minutes}+ min d'écart par rapport à la moyenne","card.route.title":"Itinéraire","empty.route.title":"Aucune donnée d'itinéraire","empty.route.subtitle":"Les séances en intérieur n'ont pas de trace GPS.","route.pace_slower":"Plus lent","route.pace_faster":"Plus rapide","card.month_story.title":"Ce Mois-ci","empty.month_story.title":"Pas encore d'entraînements ce mois-ci","story.share_month":"{count} entraînements - {pct}% de ce mois-ci","story.record_subtitle_month":"Votre record ce mois-ci","card.year_story.title":"Cette Année","empty.year_story.title":"Pas encore d'entraînements cette année","story.share_year":"{count} entraînements - {pct}% de cette année","story.record_subtitle_year":"Votre record cette année","card.best_efforts.title":"Meilleures Performances","card.best_efforts.subtitle":"{count} sur {total} réalisées","empty.best_efforts.title":"Pas encore de meilleures performances","empty.best_efforts.subtitle":"Enregistrées à partir des entraînements de course à partir de maintenant, pas rétroactivement.","best_efforts.not_yet":"Pas encore réalisé","distance.half_marathon":"Semi-marathon","distance.marathon":"Marathon","card.steps_today.title":"Pas Aujourd'hui","card.steps_today.subtitle":"Objectif : {goal} pas","empty.steps_today.title":"Pas encore de données de pas","editor.steps_goal_label":"Objectif quotidien (pas)","steps_today.goal_pct":"{pct}% de l'objectif quotidien","steps_today.vs_avg_up":"+{pct}% par rapport à votre moyenne sur 7 jours ({avg})","steps_today.vs_avg_down":"-{pct}% par rapport à votre moyenne sur 7 jours ({avg})","card.steps_trend.title":"Tendance des Pas","card.steps_trend.subtitle":"Les {days} derniers jours","empty.steps_trend.title":"Pas encore d'historique de pas","steps_trend.legend_met":"Objectif atteint","steps_trend.legend_below":"En dessous de l'objectif","steps_trend.days_at_goal":"Jours avec objectif","card.month_records.title":"Records du Mois","card.month_records.subtitle":"{count} sur {total} établis ce mois-ci","empty.month_records.title":"Pas encore de records ce mois-ci","empty.month_records.subtitle":"Vos meilleures performances de ce mois apparaîtront ici.","card.year_records.title":"Records de l'Année","card.year_records.subtitle":"{count} sur {total} établis cette année","empty.year_records.title":"Pas encore de records cette année","empty.year_records.subtitle":"Vos meilleures performances de cette année apparaîtront ici.","card.running_dynamics.title":"Dynamique de Course","card.running_dynamics.subtitle":"{activity} - {count} dernières séances","empty.running_dynamics.title":"Pas encore assez de données","empty.running_dynamics.subtitle":"Nécessite quelques séances de course récentes avec des données de cadence.","card.weekly_steps_goal.title":"Objectif Hebdo : Pas","card.weekly_steps_goal.subtitle":"{value} sur {goal} pas","empty.weekly_steps_goal.title":"Pas encore de données de pas","editor.weekly_steps_goal_label":"Objectif hebdomadaire (pas)","card.goals_overview.title":"Aperçu des objectifs","card.goals_overview.subtitle":"Cette semaine","empty.goals_overview.title":"Pas encore de données d'objectif","card.week_compare.title":"Cette semaine vs la semaine dernière","card.week_compare.subtitle":"Totaux glissants sur 7 jours","empty.week_compare.title":"Pas encore assez d'historique","empty.week_compare.subtitle":"Revenez dans environ une semaine pour voir une comparaison.","week_compare.legend_now":"Cette semaine","week_compare.legend_prev":"Semaine dernière","card.sleep_detail.title":"Détail du Sommeil","card.sleep_detail.subtitle":"Cette nuit","label.awake":"Éveil","label.sleep_other":"Autre sommeil","sleep_detail.total_sleep":"sommeil total","sleep_detail.in_bed":"{duration} au lit","sleep_detail.bedtime":"Coucher","sleep_detail.wake":"Réveil","sleep_detail.stages":"Phases de sommeil","sleep_detail.efficiency":"Efficacité du sommeil","sleep_detail.efficiency_sub":"Temps de sommeil ÷ temps au lit","sleep_detail.vitals":"Constantes","sleep_detail.insight_excellent":"{pct}% de sommeil profond · une excellente fenêtre de récupération.","sleep_detail.insight_solid":"{pct}% de sommeil profond · une récupération solide.","sleep_detail.insight_light":"{pct}% de sommeil profond · plus léger que d'habitude.","editor.energy_goal_source_label":"Objectif calories depuis","editor.sleep_goal_source_label":"Objectif sommeil depuis","editor.training_goal_source_label":"Objectif temps d'entraînement depuis","editor.energy_goal_label":"Objectif quotidien (kcal actives)","editor.sleep_goal_label":"Objectif sommeil (heures)","editor.training_goal_label":"Objectif hebdomadaire (heures)","editor.show_goals_label":"Afficher les objectifs","editor.source_suunto_none":"App Suunto (aucun objectif défini)","editor.distance_goal_hint":"L'app Suunto n'a pas d'objectif de distance, celui-ci est donc toujours le vôtre.","card.daily_goals.title":"Objectifs du jour","card.daily_goals.subtitle":"Pas, calories et sommeil","empty.daily_goals.title":"Pas encore de données d'objectifs","stat.active_kcal":"Kcal actives","stat.sleep":"Sommeil","stat.training_time":"Temps d'entraînement","goal.of":"sur {goal}","goal.energy_active_of":"{kcal} actives sur {goal}","sleep_goal.label":"Objectif sommeil","sleep_goal.short":"{value} sur {goal} · il manque {missing}","sleep_goal.met":"{value} sur {goal} · objectif atteint","sleep_trends.nights_at_goal":"Nuits à l'objectif","sleep_trends.avg_vs_goal":"Moy. vs objectif","sleep_trends.legend_goal":"Objectif {goal}","card.ai_insight.title":"Analyse IA","empty.ai_insight.title":"L'analyse IA est désactivée","empty.ai_insight.subtitle":"Activez-la dans l'intégration : Configurer -> Analyse IA quotidienne","empty.ai_insight.waiting":"Pas encore d'analyse IA aujourd'hui","ai_insight.generating":"Analyse en cours","ai_insight.night":"nuit {night}","ai_insight.no_night":"nuit dernière pas encore synchronisée","ai_insight.no_section":"Pas de données pour cette section","ai_insight.advice":"Conseils du jour","ai_insight.disclaimer":"Ce n'est pas un avis médical","ai_insight.section.sleep":"Sommeil","ai_insight.section.recovery":"Récup.","ai_insight.section.training":"Entraîn.","ai_insight.section.activity":"Activité","ai_insight.section_full.sleep":"Sommeil","ai_insight.section_full.recovery":"Santé et récupération","ai_insight.section_full.training":"Entraînement","ai_insight.section_full.activity":"Activité du jour","ai_insight.status.good":"Bien","ai_insight.status.ok":"OK","ai_insight.status.caution":"Prudence","ai_insight.status.rest":"Repos","strategy.title":"Entraînement","strategy.none":"Aucun compte Suunto","strategy.none_text":"Aucun compte de l'intégration Suunto App trouvé. Ajoutez l'intégration dans Paramètres > Appareils et services, puis rechargez ce tableau de bord.","strategy.section.today":"Aujourd'hui","strategy.section.ai":"Analyse IA","strategy.section.sleep":"Sommeil","strategy.section.recovery":"Récupération","strategy.section.last_workout":"Dernier entraînement","strategy.section.load":"Charge et forme","strategy.section.week":"Cette semaine","strategy.section.records":"Records","strategy.section.history":"Historique et profil","strategy.section.gear":"Équipement et trajets","card.ai_weekly.title":"Bilan IA de la semaine","empty.ai_weekly.subtitle":"Nécessite ha-suunto 1.0.38 ou plus récent avec l'IA activée : Configurer -> IA","empty.ai_weekly.waiting":"Pas encore de bilan IA de la semaine","ai_weekly.week":"semaine {range}","ai_weekly.advice":"Plan pour la semaine prochaine","editor.ai_report_label":"Rapport","editor.ai_report_daily":"Analyse du jour","editor.ai_report_weekly":"Bilan de la semaine","editor.ai_section_label":"Section","editor.ai_single_label":"Afficher seulement cette section","card.sleep_regularity.title":"Régularité du sommeil","sleep_regularity.subtitle":"4 dernières semaines · {nights} nuits","empty.sleep_regularity.title":"Pas encore assez de nuits","empty.sleep_regularity.subtitle":"Il faut environ une semaine de nuits consécutives avec la montre.","sleep_regularity.bed":"Coucher moy. {time}","sleep_regularity.wake":"Réveil moy. {time}","sleep_regularity.mid_work":"Milieu du sommeil, nuits dim-jeu {time}","sleep_regularity.mid_free":"Milieu du sommeil, nuits ven/sam {time}","band.regularity.regular":"Régulier","band.regularity.fair":"Assez régulier","band.regularity.irregular":"Irrégulier","chip.regularity":"Régularité {value}","chip.social_jetlag":"Jetlag social {value}","card.aerobic_decoupling.title":"Découplage aérobie","empty.aerobic_decoupling.title":"Aucune longue séance analysée","empty.aerobic_decoupling.subtitle":"Apparaît après une séance de 40+ minutes avec GPS et fréquence cardiaque.","aerobic_decoupling.analyzed":"{minutes} min analysées","aerobic_decoupling.hint":"moins de 5 % = bonne base aérobie","aerobic_decoupling.first_half":"1re moitié","aerobic_decoupling.second_half":"2e moitié","aerobic_decoupling.trend":"{count} dernières séances analysées","band.decoupling.coupled":"Couplé","band.decoupling.moderate":"Dérive modérée","band.decoupling.high":"Forte dérive","stat.decoupling":"Dérive FC","card.personal_insights.title":"Ce qui vous réussit","personal_insights.subtitle":"Sur vos {nights} dernières nuits","empty.personal_insights.title":"Pas encore de tendance nette","empty.personal_insights.subtitle":"Il faut quelques semaines de données de sommeil et d'entraînement. Seules les différences nettes sont affichées.","personal_insights.these_nights":"ces nuits","personal_insights.the_rest":"les autres","personal_insights.nights_count":"{with} vs {without} nuits","personal_insights.disclaimer":"Des tendances dans vos propres données, pas une preuve de cause. Il faut au moins 4 nuits ou séances de chaque côté.","insights.cond.late_workout":"Après une séance terminée après {time}","insights.cond.training_day":"Les jours d'entraînement","insights.cond.hard_day":"Après vos journées les plus dures","insights.cond.early_bed":"Quand vous vous couchez avant {bedtime}","insights.cond.free_night":"Les nuits du vendredi et du samedi","insights.metric.hrv":"VFC","insights.metric.resting_hr":"FC au repos","insights.metric.sleep":"Sommeil","daily_brief.your_pattern":"Votre tendance","editor.show_insight_label":"Afficher votre tendance la plus nette","editor.look_section":"Apparence","editor.title":"Titre","editor.icon":"Icône (ex. mdi:star)","editor.accent_color":"Couleur d'accent (ex. #e91e63 ou teal)","editor.accent_hint":"La même couleur en mode clair et sombre. Une couleur invalide est ignorée.","editor.accent_default":"Par défaut (ambre)","editor.accent_pink":"Rose","editor.accent_purple":"Violet","editor.accent_teal":"Bleu canard","editor.accent_green":"Vert","editor.accent_blue":"Bleu","editor.hide_header":"Masquer l'en-tête","editor.hide_icon":"Masquer l'icône","editor.hide_subtitle":"Masquer le sous-titre","editor.hide_legend":"Masquer la légende","editor.text_size":"Taille du texte","text_size.normal":"Normale","text_size.large":"Grande (115%)","text_size.larger":"Plus grande (130%)","text_size.largest":"Très grande (150%)","editor.language":"Langue","editor.language_auto":"Celle de Home Assistant","editor.hide_sync_warning":"Masquer l'alerte de synchronisation","editor.max_items":"Nombre d'éléments","editor.list_height":"Hauteur de la liste (px)","card.stress_today.title":"Stress et récupération","stress_today.subtitle_today":"Aujourd'hui jusqu'à {time}","stress_today.subtitle_waiting":"Hier · aujourd'hui pas encore synchronisé","stress_today.yesterday":"Hier","empty.stress_today.title":"Pas encore de données de stress","empty.stress_today.subtitle":"Nécessite Suunto App (unofficial) 1.0.37 ou plus récent et une montre synchronisée.","stress.state.recovering":"Récupération","stress.state.active":"Actif","stress.state.inactive":"Inactif","stress.state.stressed":"Stressé","insights.cond.hot_weather":"Par forte chaleur (dès {temp}°C)","insights.cond.cold_weather":"Par temps froid (jusqu'à {temp}°C)","insights.metric.efficiency":"Efficacité","insights.unit.per_beat":"m/batt.","personal_insights.subtitle_days":"Sur vos {nights} dernières nuits et {days} jours d'entraînement","personal_insights.these_workouts":"ces séances","personal_insights.workouts_count":"{with} vs {without} séances","personal_insights.speed_at_hr":"{with_speed} km/h à {with_hr} bpm vs {without_speed} km/h à {without_hr} bpm","sync.at":"synchro {time}","sync.yesterday":"synchro hier {time}","chip.not_synced":"Montre non synchronisée depuis {hours} h","editor.eink":"Écran e-ink","eink.off":"Désactivé","eink.bw":"Noir et blanc","eink.gray":"4 gris","eink.red":"Noir, blanc et rouge","eink.yellow":"Noir, blanc et jaune","eink.color":"6 couleurs","editor.max_lines":"Lignes de texte max.","card.whats_new.title":"Quoi de neuf","card.whats_new.subtitle":"{days} derniers jours","whats_new.today":"Aujourd'hui","whats_new.yesterday":"Hier","whats_new.now":"Maintenant","whats_new.empty":"Rien de nouveau ces {days} derniers jours","whats_new.record":"Nouveau record : {label} {value}","whats_new.record_year":"Record de l'année : {label} {value}","whats_new.record_month":"Record du mois : {label} {value}","whats_new.best_effort":"Meilleur effort {distance} : {time}","whats_new.ai_daily":"Analyse IA du jour","whats_new.ai_weekly":"Bilan IA de la semaine","whats_new.gear_due":"{name} : entretien à prévoir","editor.whats_new_show":"Afficher","whats_new.kind.workouts":"Entraînements","whats_new.kind.records":"Records et meilleurs efforts","whats_new.kind.achievements":"Succès sur parcours","whats_new.kind.ai":"Rapports IA","whats_new.kind.gear":"Entretien de l'équipement"},es:{"stat.distance":"Distancia","stat.duration":"Duración","stat.avg_speed":"Vel. media","stat.avg_pace":"Ritmo medio","stat.avg_hr":"FC media","stat.max_hr":"FC máx.","stat.training_effect":"Efecto del entrenamiento","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Sensación","stat.energy":"Energía","stat.time":"Tiempo","stat.workouts":"Entrenamientos","stat.steps":"Pasos","stat.heart_rate":"Frecuencia cardíaca","stat.quality":"Calidad","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC reposo","stat.resting_hr_delta":"FC reposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Estado de estrés","stat.recovery_window":"Tiempo de recuperación","stat.ctl":"CTL · forma","stat.atl":"ATL · fatiga","stat.tsb":"TSB · forma","stat.readiness":"Preparación","stat.recovery_balance":"Equilibrio de recuperación","stat.training_suggestion":"Sugerencia de hoy","stat.volume":"Volumen","stat.intensity":"Intensidad","stat.consistency":"Constancia","stat.recovery":"Recuperación","stat.variety":"Variedad","card.hr_zones.title":"Zonas de Frecuencia Cardíaca","card.hr_zones.last_workout":"Último entrenamiento","card.sleep_readiness.title":"Sueño y Preparación","card.sleep_readiness.subtitle_no_wake":"{duration} de sueño","card.sleep_readiness.subtitle_with_wake":"{duration} de sueño · despertar a las {time}","card.recovery.title":"Recuperación","card.training_load.title":"Carga de Entrenamiento","card.training_load.subtitle_fallback":"Tendencia de forma (CTL)","card.week_stats.title":"Esta Semana y Total Histórico","card.week_stats.subtitle":"Últimos 7 días","card.week_stats.lifetime_title":"Total por actividad","card.today.title":"Hoy","card.today.subtitle":"En vivo desde tu reloj","card.training_status.title":"Estado de entrenamiento","card.training_profile.title":"Perfil de entrenamiento","card.training_profile.subtitle":"Tu entrenamiento de un vistazo","card.heart_rate.title":"Frecuencia cardíaca","empty.last_workout.title":"Sin entrenamiento reciente","empty.last_workout.subtitle":"Sincroniza tu reloj con la app Suunto para verlo aquí.","empty.hr_zones.title":"Sin datos de zonas","empty.hr_zones.subtitle":"Tu próximo entrenamiento al aire libre con banda de frecuencia cardíaca completará esto.","empty.sleep_readiness.title":"Aún sin datos de sueño","empty.sleep_readiness.subtitle":"Usa tu reloj para dormir para verlo aquí.","empty.recovery.title":"Aún sin datos de recuperación","empty.training_load.title":"Calculando la carga de entrenamiento","empty.training_load.subtitle":"Necesita algo de historial de entrenamientos para calcularse - vuelve a comprobarlo tras algunas sesiones.","empty.week_stats.title":"Aún sin historial de entrenamientos","empty.today.title":"Aún sin datos en vivo","empty.training_status.title":"Aún no hay suficientes datos","empty.training_status.subtitle":"Necesita algo de historial de entrenamiento para calcularlo.","empty.training_profile.title":"Aún no hay suficientes datos","empty.training_profile.subtitle":"Necesita más datos de sensores para calcular tu perfil.","empty.heart_rate.title":"Aún sin datos de frecuencia cardíaca","empty.loading":"Cargando...","empty.generic_error":"No se pudieron cargar los datos de Suunto.","error.no_device":"No se encontró ningún dispositivo Suunto - ¿está configurada la integración suunto_app?","error.multiple_devices":'Se encontraron varios dispositivos Suunto - define "device_id" en la configuración de la tarjeta.',"error.device_missing":'El dispositivo configurado "{device}" no tiene entidades suunto_app.',"band.readiness.great":"Excelente","band.readiness.fair":"Aceptable","band.readiness.low":"Baja","band.recovery.well":"Bien recuperado","band.recovery.partial":"Parcialmente recuperado","band.recovery.low":"Baja recuperación","band.recovery.fully":"Totalmente recuperado","band.recovery.recovering":"Recuperando · quedan {time}","band.hrv.low":"HRV baja","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV equilibrada","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Fatigado","band.form.very_fatigued":"Muy fatigado","band.acwr.safe":"Zona segura","band.acwr.low":"Carga baja","band.acwr.high":"Carga alta - riesgo de lesión","band.suggestion.hard":"A por ello","band.suggestion.moderate":"Esfuerzo moderado","band.suggestion.easy":"Tómatelo con calma","band.suggestion.rest":"Día de descanso","chip.workout_logged_today":"Entrenamiento registrado hoy","chip.workout_today":"Entrenamiento hoy","chip.recovering":"Recuperando","chip.nap":"{minutes} min de siesta","chip.nap_earlier":"{minutes} min de siesta (antes)","chip.workouts_30d":"{count} entrenamientos en los últimos 30 días","chip.acwr":"ACWR {value} · {label}","profile.summary":"Más fuerte en {strong} · más débil en {light}","chip.more_activity_one":"+{count} actividad más","chip.more_activity_other":"+{count} actividades más","chip.unusual_recovery":"Recuperación inusual","chip.days_since_one":"{count} día desde el último entrenamiento","chip.days_since_other":"{count} días desde el último entrenamiento","chip.manually_added":"Añadido manualmente","chip.sleep_stale":"Sin sueño de anoche · noche del {date}","readiness.balance_only":"Solo balance de recuperación, sin sueño","chip.no_hr":"Sin frecuencia cardiaca","card.heart_rate.measured":"Medido a las {time}","card.heart_rate.measured_ago":"Medido {ago} · {time}","stat.energy_active_sub":"{kcal} activas","energy.total_unit":"kcal en total","energy.split":"{active} activas · {bmr} TMB","card.commute.title":"Trayectos","card.commute.subtitle_year":"Este año en lugar del coche","card.commute.subtitle_month":"Este mes en lugar del coche","commute.saved":"ahorrados","commute.fuel_co2":"{fuel} l de combustible · {co2} kg menos de CO2","stat.rides":"Trayectos","stat.days":"Días","stat.avg_time":"Tiempo med.","commute.this_month":"Este mes:","commute.this_year":"Este año:","commute.rides_n":"{n} trayectos","empty.commute.title":"Aún no hay trayectos","empty.commute.subtitle":"Aquí aparecen los entrenamientos que Suunto marca como trayecto.","card.gear.title":"Equipo","card.gear.subtitle":"Distancia y revisión","gear.remaining":"Quedan {km}","gear.over":"Superado en {km}","chip.service":"Revisión","empty.gear.title":"Aún no hay equipo","empty.gear.subtitle":"Añade equipo en el menú Configurar de la integración.","card.form_forecast.title":"Previsión de forma","card.form_forecast.subtitle":"Si descansas desde hoy","stat.tomorrow":"Mañana","stat.peak_in":"Pico en {days} d","stat.maintenance":"Mantener / sem.","empty.form_forecast.title":"Aún no hay previsión","card.daily_brief.title":"Resumen diario","empty.daily_brief.title":"Aún no hay resumen","achievement.count_one":"{count} logro","achievement.count_other":"{count} logros","achievement.rank":"Puesto #{rank} en esta ruta","label.zone":"Zona {n}","label.deep":"Profundo","label.light":"Ligero","label.rem":"REM","editor.auto_detect":"Esta tarjeta detecta automáticamente tu dispositivo Suunto - no se necesita configuración.","editor.pick_device":"Se encontraron varios dispositivos Suunto - elige cuál debe usar esta tarjeta.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unidades","editor.units_metric":"Métrico (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Modo compacto","editor.days_label":"Ventana de tendencia (días)","editor.period_label":"Periodo principal","editor.period_year":"Este año","editor.period_month":"Este mes","editor.goal_source_label":"Objetivo de pasos desde","editor.source_suunto":"App Suunto ({value})","editor.source_suunto_default":"App Suunto (sin objetivo, se usa {value})","editor.source_custom":"Personalizado","editor.fuel_source_label":"Datos de combustible desde","editor.source_integration":"Integración Suunto ({litres} l/100 km, {price} por l)","editor.source_integration_unknown":"Integración Suunto","editor.fuel_consumption_label":"Consumo (l/100 km)","editor.fuel_price_label":"Precio del combustible por litro","editor.fuel_hint":"Cambia los valores de la integración en Ajustes > Dispositivos y servicios > Suunto > Configurar.","card.lifetime.title":"Totales Históricos","card.lifetime.subtitle":"Desde el inicio","stat.active_days":"Días activos","empty.lifetime.title":"Aún sin totales históricos","card.recent_workouts.title":"Entrenamientos Recientes","empty.recent_workouts.title":"Sin entrenamientos recientes","card.elevation.title":"Altitud y Ascensos","stat.ascent":"Ascenso","stat.descent":"Descenso","stat.ascent_time":"T. ascenso","stat.descent_time":"T. descenso","stat.min_altitude":"Altitud mín.","stat.max_altitude":"Altitud máx.","stat.ascent_rate":"Velocidad de ascenso","empty.elevation.title":"Sin datos de altitud","empty.elevation.subtitle":"Solo los entrenamientos al aire libre con altímetro registran esto.","card.location.title":"Ubicación de Inicio","location.open_in_maps":"Abrir en Maps","empty.location.title":"Sin datos de ubicación","empty.location.subtitle":"Los entrenamientos en interiores no tienen punto de inicio GPS.","card.fitness.title":"Forma Física","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max est.","stat.fitness_age":"Edad física","fitness.measured":"Medido {time} · {activity}","empty.fitness.title":"Aún sin datos de forma física","empty.fitness.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","empty.fitness_trend.title":"Aún sin datos de forma física","empty.fitness_trend.subtitle":"Suunto calcula esto solo a partir de entrenamientos de carrera o caminata.","card.pmc.title":"Gestión del Rendimiento","card.pmc.subtitle":"Tendencia de {days} días","card.recovery_trends.title":"Tendencias de Recuperación","card.recovery_trends.subtitle":"Referencia de {days} días","empty.recovery_trends.title":"Aún sin datos de tendencias de recuperación","card.weekly_volume.title":"Volumen Semanal","card.weekly_volume.subtitle":"Últimas 12 semanas","empty.weekly_volume.title":"Aún sin datos de volumen semanal","stat.average":"Media","stat.total":"Total","card.hr_curve.title":"Curva de Frecuencia Cardíaca","card.hr_curve.subtitle":"Últimas 24 horas","stat.hr_now":"Ahora","stat.hr_min":"Mín. de hoy","stat.hr_max":"Máx. de hoy","empty.hr_curve.title":"Aún sin datos de FC en vivo","empty.hr_curve.subtitle":"Usa y sincroniza tu reloj para ver aquí la curva de hoy.","card.sleep_trends.title":"Tendencias de Sueño","card.sleep_trends.subtitle":"Últimas {days} noches","empty.sleep_trends.title":"Aún sin datos de tendencias de sueño","card.weekly_goal.title":"Objetivo Semanal","card.weekly_goal.subtitle":"{value} de {goal} km","empty.weekly_goal.title":"Aún sin distancia semanal","editor.goal_label":"Objetivo semanal (km)","card.streak.title":"Racha de Actividad","card.streak.subtitle":"Últimos 14 días","streak.window_count_one":"{count} día activo","streak.window_count_other":"{count} días activos","streak.days_one":"{count} día de racha","streak.days_other":"{count} días de racha","streak.none":"Sin racha activa - muévete hoy","empty.streak.title":"Aún sin historial de entrenamientos","just_finished.title":"¡Buen trabajo!","just_finished.idle.title":"Esperando tu próximo entrenamiento","just_finished.idle.subtitle":"Esta tarjeta se activa en cuanto tu reloj sincronice un entrenamiento nuevo.","empty.just_finished.title":"Sin entrenamiento reciente","card.activity_trends.title":"Tendencias de Actividad","card.activity_trends.subtitle":"Últimos {days} días","empty.activity_trends.title":"Aún sin datos de tendencias de actividad","card.recovery_balance_trend.title":"Tendencia del Equilibrio de Recuperación","card.recovery_balance_trend.subtitle":"Últimos {days} días","empty.recovery_balance_trend.title":"Aún sin datos de tendencias de recuperación","card.readiness_trend.title":"Tendencia de Preparación","card.readiness_trend.subtitle":"Últimos {days} días","empty.readiness_trend.title":"Aún sin datos de tendencias de preparación","stat.cadence":"Cadencia","stat.stride_length":"Longitud de zancada","stat.pct_hrmax":"% de FC máx.","stat.sleep_avg_hr":"FC med. sueño","stat.sleep_min_hr":"FC mín. sueño","chip.bedtime":"Acostado {time}","card.activity_calendar.title":"Calendario de Actividad","card.activity_calendar.subtitle":"Últimas 6 semanas","empty.activity_calendar.title":"Aún sin historial de entrenamientos","activity_calendar.active_days_one":"{count} día activo","activity_calendar.active_days_other":"{count} días activos","card.workout_comparison.title":"Comparación de Entrenamientos","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Aún no hay suficientes entrenamientos similares","empty.workout_comparison.subtitle":"Haz la misma actividad dos veces para ver una comparación.","stat.distance_delta":"Distancia ({delta})","stat.duration_delta":"Duración ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Ritmo ({delta})","card.milestones.title":"En Números","card.milestones.subtitle":"Desde que empezaste","empty.milestones.title":"Aún sin datos históricos","stat.earth_laps":"Vueltas a la Tierra","stat.marathons":"Maratones","stat.moon_pct":"% hasta la Luna","stat.burgers":"Hamburguesas","card.athlete_profile.title":"Personalidad Deportiva","empty.athlete_profile.title":"Aún no hay suficientes datos","personality.activity.cycling":"Ciclista","personality.activity.running":"Corredor","personality.activity.trekking":"Excursionista","personality.activity.walking":"Caminante","personality.activity.gym":"Atleta de Fuerza","personality.activity.swim":"Nadador","personality.activity.ski":"Esquiador","personality.activity.row":"Remero","personality.activity.other":"Multideportista","personality.schedule.weekend":"Guerrero de Fin de Semana","personality.schedule.weekday":"Regular Entre Semana","personality.schedule.balanced":"Horario Equilibrado","personality.time.morning":"Madrugador","personality.time.afternoon":"Activo por la Tarde","personality.time.evening":"Atleta Vespertino","personality.time.night":"Búho Nocturno","card.pace_trend.title":"Tendencia de Ritmo","card.pace_trend.subtitle":"{activity} · últimas {count} sesiones","empty.pace_trend.title":"Aún no hay suficientes entrenamientos similares","empty.pace_trend.subtitle":"Haz la misma actividad varias veces para ver una tendencia.","pace_trend.faster":"Mejorando el ritmo","pace_trend.slower":"Perdiendo ritmo","pace_trend.steady":"Ritmo estable","card.lap_splits.title":"Tiempos por Vuelta","empty.lap_splits.title":"Sin datos de vueltas","empty.lap_splits.subtitle":"No todos los entrenamientos tienen vueltas - el próximo que las tenga completará esto.","stat.laps":"Vueltas","stat.fastest_lap":"Vuelta más rápida","label.lap":"Vuelta {n}","card.training_effect_trend.title":"Tendencia del Efecto de Entrenamiento","card.fitness_trend.title":"Tendencia de Forma Física","empty.training_effect_trend.title":"Aún sin datos de efecto de entrenamiento","achievements.badge.around_globe":"Vuelta al mundo","achievements.badge.century_club":"Club del Centenar - 100 entrenamientos","achievements.badge.consistency_king":"Rey de la Constancia - racha de 14 días","achievements.badge.iron_will":"Voluntad de Hierro - racha de 30 días","achievements.badge.days_100":"100 días activos","achievements.badge.distance_1000":"Club de los 1000 km","achievements.badge.distance_5000":"Club de los 5000 km","achievements.badge.elite_engine":"Motor de élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal quemadas","achievements.badge.energy_1m":"1.000.000 kcal quemadas","achievements.badge.full_year":"Todo un año activo","achievements.badge.hours_100":"100 horas","achievements.badge.hours_500":"500 horas","achievements.badge.jack_of_all_trades":"Todoterreno - 5+ deportes","achievements.badge.multi_sport":"Atleta multideporte - 3+ deportes","achievements.badge.solid_engine":"Motor sólido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ entrenamientos","achievements.badge.workouts_1000":"1000 entrenamientos","achievements.badge.workouts_250":"250 entrenamientos","achievements.badge.workouts_500":"500 entrenamientos","achievements.category.days":"Días activos","achievements.category.distance":"Distancia","achievements.category.energy":"Energía","achievements.category.fitness":"Nivel de forma física","achievements.category.records":"Récords personales","achievements.category.time":"Tiempo de entrenamiento","achievements.category.variety":"Variedad","achievements.category.workouts":"Entrenamientos registrados","card.achievements.subtitle":"{unlocked} de {total} desbloqueados","card.achievements.title":"Logros","achievements.next":"Siguiente: {name} ({pct}%)","class.rest":"+{pct}% otras actividades","class.tag":"Enfoque: {activity}","empty.achievements.subtitle":"Registra algunos entrenamientos para empezar a desbloquear insignias.","empty.achievements.title":"Aún no hay logros","empty.class.subtitle":"Registra algunos entrenamientos para revelar tu clase.","empty.class.title":"Aún no hay suficientes datos","empty.level.subtitle":"Tu primer entrenamiento sincronizado inicia el ascenso.","empty.level.title":"Aún no hay datos de por vida","empty.player.subtitle":"Necesita algo de historial de entrenamiento para calcular tus estadísticas.","empty.player.title":"Aún no hay suficientes datos","level.label":"NIVEL","level.source":"{count} entrenamientos registrados","level.subtitle":"Impulsado por tu carga de entrenamiento total","level.title.grinder":"Currante de Resistencia","level.title.legend":"Leyenda Viviente","level.title.novice":"Recluta Novato","level.title.veteran":"Veterano Curtido","level.xp_to_next":"{xp} XP para Nvl {level}","level.xp_total":"{xp} XP","player.archetype":"Especialista en {activity}","player.help.title":"Qué significa esto","player.help.sta":"STA · Resistencia, de tu Forma física (CTL): cuánta carga de entrenamiento constante puedes soportar","player.help.pwr":"PWR · Potencia, de la intensidad media (TSS) de tus sesiones recientes","player.help.rec":"REC · Recuperación, tu puntuación actual de Preparación","player.help.con":"CON · Constancia, entrenamientos registrados en los últimos 30 días","player.help.end":"END · Resistencia aeróbica, de tu VO2max estimado","player.help.frm":"FRM · Forma, de tu balance actual de carga de entrenamiento (TSB)","player.help.disclaimer":"Valores heurísticos calculados con tus propios datos - no es una métrica oficial de Suunto.","player.tier.bronze":"Bronce","player.tier.gold":"Oro","player.tier.legendary":"Legendario","player.tier.silver":"Plata","records.climb":"Mayor subida","records.distance":"Entrenamiento más largo (distancia)","records.pace":"Ritmo más rápido","records.session":"Sesión más dura","records.streak":"Racha más larga","records.streak_days_one":"{count} día","records.streak_days_other":"{count} días","records.workout":"Entrenamiento más largo","class.name.cycling":"Guerrero de Resistencia","class.name.running":"Velocista","class.name.trekking":"Explorador de Senderos","class.name.walking":"Vagabundo","class.name.gym":"Berserker de Fuerza","class.name.swim":"Señor de las Mareas","class.name.ski":"Corredor de Escarcha","class.name.row":"Remero","class.name.other":"Todoterreno","class.flavor.cycling":"Hecho para esfuerzos largos y constantes, no para la velocidad pura. Cualquier otro deporte es entrenamiento complementario.","class.flavor.running":"Rápido de salida y centrado en el ritmo. La distancia es solo un medio para un fin.","class.flavor.trekking":"Como en casa en terreno difícil, cubriendo kilómetros durante horas.","class.flavor.walking":"Los kilómetros constantes y de bajo impacto se acumulan - constancia sobre intensidad.","class.flavor.gym":"Fuerza bruta antes que distancia. Las sesiones de fuerza van primero.","class.flavor.swim":"Resistencia forjada en el agua, brazada a brazada.","class.flavor.ski":"Velocidad y ritmo sobre nieve y frío.","class.flavor.row":"Fuerza rítmica, remada a remada.","class.flavor.other":"Ningún deporte domina - una mezcla verdaderamente equilibrada.","card.next_milestone.title":"Próxima Meta","card.next_milestone.subtitle":"Distancia acumulada","empty.next_milestone.title":"Aún sin distancia acumulada","next_milestone.remaining_label":"restantes","next_milestone.target":"hasta {target} km acumulados - {pct}% del camino","next_milestone.workouts_one":"{count} entrenamiento hasta {target} en total","next_milestone.workouts_other":"{count} entrenamientos hasta {target} en total","next_milestone.eta_one":"a {pace} km/semana - unas {weeks} semana","next_milestone.eta_other":"a {pace} km/semana - unas {weeks} semanas","card.story.title":"Tu Historia con Suunto","card.story.subtitle":"Desde tu primer entrenamiento","empty.story.title":"Aún sin datos acumulados","story.top_activity":"{activity} - tu actividad principal","story.top_activity_share":"{count} entrenamientos - {pct}% de tu historial","story.record_subtitle":"Tu récord personal de siempre","card.sleep_clock.title":"Reloj de Sueño","card.sleep_clock.subtitle":"Anoche","empty.sleep_clock.title":"Aún sin datos de sueño","empty.sleep_clock.subtitle":"Usa tu reloj por la noche para verlo aquí.","sleep_clock.quality":"{pct}% de calidad de sueño","card.sleep_rhythm.title":"Ritmo de Sueño","card.sleep_rhythm.subtitle":"Últimas 7 noches","empty.sleep_rhythm.title":"Aún no hay suficiente historial de sueño","empty.sleep_rhythm.subtitle":"Necesita algunas noches de datos para mostrar un patrón.","sleep_rhythm.avg_bedtime":"Hora media de acostarse {time}","sleep_rhythm.avg_wake":"Hora media de despertar {time}","sleep_rhythm.spread":"Variación de {minutes} min","sleep_rhythm.legend_normal":"Noche típica","sleep_rhythm.legend_outlier":"{minutes}+ min fuera del promedio","card.route.title":"Ruta","empty.route.title":"Sin datos de ruta","empty.route.subtitle":"Los entrenamientos en interior no tienen registro GPS.","route.pace_slower":"Más lento","route.pace_faster":"Más rápido","card.month_story.title":"Este Mes","empty.month_story.title":"Aún sin entrenamientos este mes","story.share_month":"{count} entrenamientos - {pct}% de este mes","story.record_subtitle_month":"Tu récord este mes","card.year_story.title":"Este Año","empty.year_story.title":"Aún sin entrenamientos este año","story.share_year":"{count} entrenamientos - {pct}% de este año","story.record_subtitle_year":"Tu récord este año","card.best_efforts.title":"Mejores Marcas","card.best_efforts.subtitle":"{count} de {total} conseguidas","empty.best_efforts.title":"Aún sin mejores marcas","empty.best_efforts.subtitle":"Se registran desde entrenamientos de carrera a partir de ahora, no retroactivamente.","best_efforts.not_yet":"Aún no conseguido","distance.half_marathon":"Media Maratón","distance.marathon":"Maratón","card.steps_today.title":"Pasos Hoy","card.steps_today.subtitle":"Objetivo: {goal} pasos","empty.steps_today.title":"Aún sin datos de pasos","editor.steps_goal_label":"Objetivo diario (pasos)","steps_today.goal_pct":"{pct}% del objetivo diario","steps_today.vs_avg_up":"+{pct}% vs tu media de 7 días ({avg})","steps_today.vs_avg_down":"-{pct}% vs tu media de 7 días ({avg})","card.steps_trend.title":"Tendencia de Pasos","card.steps_trend.subtitle":"Últimos {days} días","empty.steps_trend.title":"Aún sin historial de pasos","steps_trend.legend_met":"Objetivo cumplido","steps_trend.legend_below":"Por debajo del objetivo","steps_trend.days_at_goal":"Días con objetivo","card.month_records.title":"Récords del Mes","card.month_records.subtitle":"{count} de {total} logrados este mes","empty.month_records.title":"Aún sin récords este mes","empty.month_records.subtitle":"Tus mejores marcas de este mes aparecerán aquí.","card.year_records.title":"Récords del Año","card.year_records.subtitle":"{count} de {total} logrados este año","empty.year_records.title":"Aún sin récords este año","empty.year_records.subtitle":"Tus mejores marcas de este año aparecerán aquí.","card.running_dynamics.title":"Dinámica de Carrera","card.running_dynamics.subtitle":"{activity} - últimos {count} entrenamientos","empty.running_dynamics.title":"Aún no hay suficientes datos","empty.running_dynamics.subtitle":"Necesita algunos entrenamientos recientes a pie con datos de cadencia.","card.weekly_steps_goal.title":"Meta Semanal de Pasos","card.weekly_steps_goal.subtitle":"{value} de {goal} pasos","empty.weekly_steps_goal.title":"Aún sin datos de pasos","editor.weekly_steps_goal_label":"Meta semanal (pasos)","card.goals_overview.title":"Resumen de Metas","card.goals_overview.subtitle":"Esta semana","empty.goals_overview.title":"Aún sin datos de metas","card.week_compare.title":"Esta Semana vs la Semana Pasada","card.week_compare.subtitle":"Totales móviles de 7 días","empty.week_compare.title":"Aún no hay suficiente historial","empty.week_compare.subtitle":"Vuelve en aproximadamente una semana para ver una comparación.","week_compare.legend_now":"Esta semana","week_compare.legend_prev":"Semana pasada","card.sleep_detail.title":"Detalle del Sueño","card.sleep_detail.subtitle":"Anoche","label.awake":"Despierto","label.sleep_other":"Otro sueño","sleep_detail.total_sleep":"sueño total","sleep_detail.in_bed":"{duration} en cama","sleep_detail.bedtime":"Acostarse","sleep_detail.wake":"Despertar","sleep_detail.stages":"Fases del sueño","sleep_detail.efficiency":"Eficiencia del sueño","sleep_detail.efficiency_sub":"Tiempo dormido ÷ tiempo en cama","sleep_detail.vitals":"Constantes","sleep_detail.insight_excellent":"{pct}% de sueño profundo · una ventana de recuperación excelente.","sleep_detail.insight_solid":"{pct}% de sueño profundo · una recuperación sólida.","sleep_detail.insight_light":"{pct}% de sueño profundo · más ligero de lo habitual.","editor.energy_goal_source_label":"Objetivo de calorías desde","editor.sleep_goal_source_label":"Objetivo de sueño desde","editor.training_goal_source_label":"Objetivo de tiempo de entrenamiento desde","editor.energy_goal_label":"Objetivo diario (kcal activas)","editor.sleep_goal_label":"Objetivo de sueño (horas)","editor.training_goal_label":"Objetivo semanal (horas)","editor.show_goals_label":"Mostrar objetivos","editor.source_suunto_none":"App Suunto (sin objetivo)","editor.distance_goal_hint":"La app Suunto no tiene objetivo de distancia, así que este siempre es el tuyo.","card.daily_goals.title":"Objetivos del día","card.daily_goals.subtitle":"Pasos, calorías y sueño","empty.daily_goals.title":"Aún no hay datos de objetivos","stat.active_kcal":"Kcal activas","stat.sleep":"Sueño","stat.training_time":"Tiempo de entrenamiento","goal.of":"de {goal}","goal.energy_active_of":"{kcal} activas de {goal}","sleep_goal.label":"Objetivo de sueño","sleep_goal.short":"{value} de {goal} · faltan {missing}","sleep_goal.met":"{value} de {goal} · objetivo cumplido","sleep_trends.nights_at_goal":"Noches en objetivo","sleep_trends.avg_vs_goal":"Media vs objetivo","sleep_trends.legend_goal":"Objetivo {goal}","card.ai_insight.title":"Análisis con IA","empty.ai_insight.title":"El análisis con IA está desactivado","empty.ai_insight.subtitle":"Actívalo en la integración: Configurar -> Análisis diario con IA","empty.ai_insight.waiting":"Aún no hay análisis con IA hoy","ai_insight.generating":"Generando el análisis","ai_insight.night":"noche {night}","ai_insight.no_night":"la última noche aún no se ha sincronizado","ai_insight.no_section":"No hay datos para esta sección","ai_insight.advice":"Consejos para hoy","ai_insight.disclaimer":"No es consejo médico","ai_insight.section.sleep":"Sueño","ai_insight.section.recovery":"Recuperación","ai_insight.section.training":"Entreno","ai_insight.section.activity":"Actividad","ai_insight.section_full.sleep":"Sueño","ai_insight.section_full.recovery":"Salud y recuperación","ai_insight.section_full.training":"Entrenamiento","ai_insight.section_full.activity":"Actividad diaria","ai_insight.status.good":"Bien","ai_insight.status.ok":"OK","ai_insight.status.caution":"Precaución","ai_insight.status.rest":"Descanso","strategy.title":"Entrenamiento","strategy.none":"Sin cuenta de Suunto","strategy.none_text":"No se encontró ninguna cuenta de la integración Suunto App. Añade la integración en Ajustes > Dispositivos y servicios y recarga este panel.","strategy.section.today":"Hoy","strategy.section.ai":"Análisis con IA","strategy.section.sleep":"Sueño","strategy.section.recovery":"Recuperación","strategy.section.last_workout":"Último entrenamiento","strategy.section.load":"Carga y forma","strategy.section.week":"Esta semana","strategy.section.records":"Récords","strategy.section.history":"Historial y perfil","strategy.section.gear":"Equipo y desplazamientos","card.ai_weekly.title":"Resumen semanal con IA","empty.ai_weekly.subtitle":"Requiere ha-suunto 1.0.38 o posterior con la IA activada: Configurar -> IA","empty.ai_weekly.waiting":"Aún no hay resumen semanal con IA","ai_weekly.week":"semana {range}","ai_weekly.advice":"Plan para la próxima semana","editor.ai_report_label":"Informe","editor.ai_report_daily":"Análisis diario","editor.ai_report_weekly":"Resumen semanal","editor.ai_section_label":"Sección","editor.ai_single_label":"Mostrar solo esta sección","card.sleep_regularity.title":"Regularidad del sueño","sleep_regularity.subtitle":"Últimas 4 semanas · {nights} noches","empty.sleep_regularity.title":"Aún no hay suficientes noches","empty.sleep_regularity.subtitle":"Hace falta una semana de noches seguidas con el reloj.","sleep_regularity.bed":"Acostarse prom. {time}","sleep_regularity.wake":"Despertar prom. {time}","sleep_regularity.mid_work":"Mitad del sueño, noches dom-jue {time}","sleep_regularity.mid_free":"Mitad del sueño, noches vie/sáb {time}","band.regularity.regular":"Regular","band.regularity.fair":"Bastante regular","band.regularity.irregular":"Irregular","chip.regularity":"Regularidad {value}","chip.social_jetlag":"Jet lag social {value}","card.aerobic_decoupling.title":"Desacoplamiento aeróbico","empty.aerobic_decoupling.title":"Aún no hay un entrenamiento largo analizado","empty.aerobic_decoupling.subtitle":"Aparece tras un entrenamiento de 40+ minutos con GPS y frecuencia cardiaca.","aerobic_decoupling.analyzed":"{minutes} min analizados","aerobic_decoupling.hint":"menos del 5 % = buena base aeróbica","aerobic_decoupling.first_half":"1.ª mitad","aerobic_decoupling.second_half":"2.ª mitad","aerobic_decoupling.trend":"Últimos {count} entrenamientos analizados","band.decoupling.coupled":"Acoplado","band.decoupling.moderate":"Deriva moderada","band.decoupling.high":"Deriva alta","stat.decoupling":"Deriva de FC","card.personal_insights.title":"Lo que te funciona","personal_insights.subtitle":"De tus últimas {nights} noches","empty.personal_insights.title":"Aún no hay patrones claros","empty.personal_insights.subtitle":"Hacen falta unas semanas de datos de sueño y entrenamiento. Solo se muestran diferencias claras.","personal_insights.these_nights":"estas noches","personal_insights.the_rest":"el resto","personal_insights.nights_count":"{with} vs {without} noches","personal_insights.disclaimer":"Patrones en tus propios datos, no prueba de causa. Un hallazgo necesita al menos 4 noches o entrenamientos a cada lado.","insights.cond.late_workout":"Tras un entrenamiento que acaba después de las {time}","insights.cond.training_day":"Los días de entrenamiento","insights.cond.hard_day":"Tras tus días más duros","insights.cond.early_bed":"Cuando te acuestas antes de las {bedtime}","insights.cond.free_night":"Las noches de viernes y sábado","insights.metric.hrv":"VFC","insights.metric.resting_hr":"FC en reposo","insights.metric.sleep":"Sueño","daily_brief.your_pattern":"Tu patrón","editor.show_insight_label":"Mostrar tu patrón más fuerte","editor.look_section":"Apariencia","editor.title":"Título","editor.icon":"Icono (p. ej. mdi:star)","editor.accent_color":"Color de acento (p. ej. #e91e63 o teal)","editor.accent_hint":"El mismo color en modo claro y oscuro. Un color no válido se ignora.","editor.accent_default":"Predeterminado (ámbar)","editor.accent_pink":"Rosa","editor.accent_purple":"Morado","editor.accent_teal":"Verde azulado","editor.accent_green":"Verde","editor.accent_blue":"Azul","editor.hide_header":"Ocultar encabezado","editor.hide_icon":"Ocultar icono","editor.hide_subtitle":"Ocultar subtítulo","editor.hide_legend":"Ocultar leyenda","editor.text_size":"Tamaño del texto","text_size.normal":"Normal","text_size.large":"Grande (115%)","text_size.larger":"Más grande (130%)","text_size.largest":"Muy grande (150%)","editor.language":"Idioma","editor.language_auto":"El de Home Assistant","editor.hide_sync_warning":"Ocultar el aviso de sincronización","editor.max_items":"Número de elementos","editor.list_height":"Altura de la lista (px)","card.stress_today.title":"Estrés y recuperación","stress_today.subtitle_today":"Hoy hasta las {time}","stress_today.subtitle_waiting":"Ayer · hoy aún no se ha sincronizado","stress_today.yesterday":"Ayer","empty.stress_today.title":"Aún no hay datos de estrés","empty.stress_today.subtitle":"Necesita Suunto App (unofficial) 1.0.37 o posterior y un reloj sincronizado.","stress.state.recovering":"Recuperación","stress.state.active":"Activo","stress.state.inactive":"Inactivo","stress.state.stressed":"Estrés","insights.cond.hot_weather":"Con calor (desde {temp}°C)","insights.cond.cold_weather":"Con frío (hasta {temp}°C)","insights.metric.efficiency":"Eficiencia","insights.unit.per_beat":"m/latido","personal_insights.subtitle_days":"De tus últimas {nights} noches y {days} días de entrenamiento","personal_insights.these_workouts":"estos entrenos","personal_insights.workouts_count":"{with} vs {without} entrenamientos","personal_insights.speed_at_hr":"{with_speed} km/h a {with_hr} ppm vs {without_speed} km/h a {without_hr} ppm","sync.at":"sincronizado {time}","sync.yesterday":"sincronizado ayer {time}","chip.not_synced":"Reloj sin sincronizar desde hace {hours} h","editor.eink":"Pantalla e-ink","eink.off":"Desactivado","eink.bw":"Blanco y negro","eink.gray":"4 grises","eink.red":"Negro, blanco y rojo","eink.yellow":"Negro, blanco y amarillo","eink.color":"6 colores","editor.max_lines":"Líneas de texto máx.","card.whats_new.title":"Novedades","card.whats_new.subtitle":"Últimos {days} días","whats_new.today":"Hoy","whats_new.yesterday":"Ayer","whats_new.now":"Ahora","whats_new.empty":"Nada nuevo en los últimos {days} días","whats_new.record":"Nuevo récord: {label} {value}","whats_new.record_year":"Récord del año: {label} {value}","whats_new.record_month":"Récord del mes: {label} {value}","whats_new.best_effort":"Mejor esfuerzo {distance}: {time}","whats_new.ai_daily":"Análisis diario con IA","whats_new.ai_weekly":"Resumen semanal con IA","whats_new.gear_due":"{name}: toca mantenimiento","editor.whats_new_show":"Mostrar","whats_new.kind.workouts":"Entrenamientos","whats_new.kind.records":"Récords y mejores esfuerzos","whats_new.kind.achievements":"Logros en ruta","whats_new.kind.ai":"Informes de IA","whats_new.kind.gear":"Mantenimiento del equipo"},it:{"stat.distance":"Distanza","stat.duration":"Durata","stat.avg_speed":"Vel. media","stat.avg_pace":"Passo medio","stat.avg_hr":"FC media","stat.max_hr":"FC max","stat.training_effect":"Effetto allenamento","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Sensazione","stat.energy":"Energia","stat.time":"Tempo","stat.workouts":"Allenamenti","stat.steps":"Passi","stat.heart_rate":"Frequenza cardiaca","stat.quality":"Qualità","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"FC riposo","stat.resting_hr_delta":"FC riposo ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stato di stress","stat.recovery_window":"Tempo di recupero","stat.ctl":"CTL · forma","stat.atl":"ATL · affaticamento","stat.tsb":"TSB · forma","stat.readiness":"Prontezza","stat.recovery_balance":"Equilibrio di recupero","stat.training_suggestion":"Suggerimento di oggi","stat.volume":"Volume","stat.intensity":"Intensità","stat.consistency":"Costanza","stat.recovery":"Recupero","stat.variety":"Varietà","card.hr_zones.title":"Zone di Frequenza Cardiaca","card.hr_zones.last_workout":"Ultimo allenamento","card.sleep_readiness.title":"Sonno e Prontezza","card.sleep_readiness.subtitle_no_wake":"{duration} di sonno","card.sleep_readiness.subtitle_with_wake":"{duration} di sonno · sveglia alle {time}","card.recovery.title":"Recupero","card.training_load.title":"Carico di Allenamento","card.training_load.subtitle_fallback":"Andamento forma (CTL)","card.week_stats.title":"Questa Settimana e Totale","card.week_stats.subtitle":"Ultimi 7 giorni","card.week_stats.lifetime_title":"Totale per attività","card.today.title":"Oggi","card.today.subtitle":"In diretta dall'orologio","card.training_status.title":"Stato dell'allenamento","card.training_profile.title":"Profilo di allenamento","card.training_profile.subtitle":"Il tuo allenamento a colpo d'occhio","card.heart_rate.title":"Frequenza cardiaca","empty.last_workout.title":"Nessun allenamento recente","empty.last_workout.subtitle":"Sincronizza l'orologio con l'app Suunto per vederlo qui.","empty.hr_zones.title":"Nessun dato sulle zone","empty.hr_zones.subtitle":"Il tuo prossimo allenamento all'aperto con fascia cardio completerà questi dati.","empty.sleep_readiness.title":"Ancora nessun dato sul sonno","empty.sleep_readiness.subtitle":"Indossa l'orologio per dormire per vederlo qui.","empty.recovery.title":"Ancora nessun dato sul recupero","empty.training_load.title":"Calcolo del carico di allenamento","empty.training_load.subtitle":"Serve un po' di storico allenamenti per calcolarlo - ricontrolla dopo qualche sessione.","empty.week_stats.title":"Ancora nessuno storico allenamenti","empty.today.title":"Ancora nessun dato in tempo reale","empty.training_status.title":"Dati non ancora sufficienti","empty.training_status.subtitle":"Serve un po' di cronologia di allenamento per calcolarlo.","empty.training_profile.title":"Dati non ancora sufficienti","empty.training_profile.subtitle":"Servono più dati dai sensori per calcolare il tuo profilo.","empty.heart_rate.title":"Ancora nessun dato sulla frequenza cardiaca","empty.loading":"Caricamento...","empty.generic_error":"Impossibile caricare i dati Suunto.","error.no_device":"Nessun dispositivo Suunto trovato - l'integrazione suunto_app è configurata?","error.multiple_devices":'Trovati più dispositivi Suunto - imposta "device_id" nella configurazione della scheda.',"error.device_missing":'Il dispositivo configurato "{device}" non ha entità suunto_app.',"band.readiness.great":"Ottima","band.readiness.fair":"Discreta","band.readiness.low":"Bassa","band.recovery.well":"Ben recuperato","band.recovery.partial":"Parzialmente recuperato","band.recovery.low":"Basso recupero","band.recovery.fully":"Completamente recuperato","band.recovery.recovering":"Recupero in corso · {time} rimanenti","band.hrv.low":"HRV bassa","band.hrv.high":"HRV alta","band.hrv.balanced":"HRV bilanciata","band.form.fresh":"Fresco","band.form.neutral":"Neutro","band.form.fatigued":"Affaticato","band.form.very_fatigued":"Molto affaticato","band.acwr.safe":"Zona sicura","band.acwr.low":"Carico basso","band.acwr.high":"Carico alto - rischio di infortunio","band.suggestion.hard":"Dai il massimo","band.suggestion.moderate":"Sforzo moderato","band.suggestion.easy":"Vacci piano","band.suggestion.rest":"Giorno di riposo","chip.workout_logged_today":"Allenamento registrato oggi","chip.workout_today":"Allenamento oggi","chip.recovering":"In recupero","chip.nap":"{minutes} min di pisolino","chip.nap_earlier":"{minutes} min di pisolino (prima)","chip.workouts_30d":"{count} allenamenti negli ultimi 30 giorni","chip.acwr":"ACWR {value} · {label}","profile.summary":"Punto forte: {strong} · punto debole: {light}","chip.more_activity_one":"+{count} altra attività","chip.more_activity_other":"+{count} altre attività","chip.unusual_recovery":"Recupero insolito","chip.days_since_one":"{count} giorno dall'ultimo allenamento","chip.days_since_other":"{count} giorni dall'ultimo allenamento","chip.manually_added":"Aggiunto manualmente","chip.sleep_stale":"Nessun sonno della notte scorsa · notte del {date}","readiness.balance_only":"Solo bilancio di recupero, senza sonno","chip.no_hr":"Senza frequenza cardiaca","card.heart_rate.measured":"Misurato alle {time}","card.heart_rate.measured_ago":"Misurato {ago} · {time}","stat.energy_active_sub":"{kcal} attive","energy.total_unit":"kcal totali","energy.split":"{active} attive · {bmr} metabolismo basale","card.commute.title":"Tragitti","card.commute.subtitle_year":"Quest'anno al posto dell'auto","card.commute.subtitle_month":"Questo mese al posto dell'auto","commute.saved":"risparmiati","commute.fuel_co2":"{fuel} l di carburante · {co2} kg di CO2 in meno","stat.rides":"Tragitti","stat.days":"Giorni","stat.avg_time":"Tempo medio","commute.this_month":"Questo mese:","commute.this_year":"Quest'anno:","commute.rides_n":"{n} tragitti","empty.commute.title":"Nessun tragitto ancora","empty.commute.subtitle":"Qui compaiono gli allenamenti che Suunto segna come tragitto.","card.gear.title":"Attrezzatura","card.gear.subtitle":"Distanza e manutenzione","gear.remaining":"Restano {km}","gear.over":"Superato di {km}","chip.service":"Manutenzione","empty.gear.title":"Nessuna attrezzatura monitorata","empty.gear.subtitle":"Aggiungi attrezzatura dal menu Configura dell'integrazione.","card.form_forecast.title":"Previsione di forma","card.form_forecast.subtitle":"Se riposi da oggi","stat.tomorrow":"Domani","stat.peak_in":"Picco tra {days} g","stat.maintenance":"Mantenimento / sett.","empty.form_forecast.title":"Nessuna previsione ancora","card.daily_brief.title":"Riepilogo giornaliero","empty.daily_brief.title":"Nessun riepilogo ancora","achievement.count_one":"{count} traguardo","achievement.count_other":"{count} traguardi","achievement.rank":"Posizione #{rank} su questo percorso","label.zone":"Zona {n}","label.deep":"Profondo","label.light":"Leggero","label.rem":"REM","editor.auto_detect":"Questa scheda rileva automaticamente il tuo dispositivo Suunto - nessuna configurazione necessaria.","editor.pick_device":"Trovati più dispositivi Suunto - scegli quale deve usare questa scheda.","editor.device_label":"Dispositivo Suunto","editor.units_label":"Unità","editor.units_metric":"Metrico (km)","editor.units_imperial":"Imperiale (mi)","editor.compact_label":"Modalità compatta","editor.days_label":"Finestra tendenza (giorni)","editor.period_label":"Periodo principale","editor.period_year":"Quest'anno","editor.period_month":"Questo mese","editor.goal_source_label":"Obiettivo passi da","editor.source_suunto":"App Suunto ({value})","editor.source_suunto_default":"App Suunto (nessun obiettivo, uso {value})","editor.source_custom":"Personalizzato","editor.fuel_source_label":"Dati carburante da","editor.source_integration":"Integrazione Suunto ({litres} l/100 km, {price} al l)","editor.source_integration_unknown":"Integrazione Suunto","editor.fuel_consumption_label":"Consumo (l/100 km)","editor.fuel_price_label":"Prezzo del carburante al litro","editor.fuel_hint":"Cambia i valori dell'integrazione in Impostazioni > Dispositivi e servizi > Suunto > Configura.","card.lifetime.title":"Totali di Sempre","card.lifetime.subtitle":"Dall'inizio","stat.active_days":"Giorni attivi","empty.lifetime.title":"Ancora nessun totale","card.recent_workouts.title":"Allenamenti Recenti","empty.recent_workouts.title":"Nessun allenamento recente","card.elevation.title":"Altitudine e Salite","stat.ascent":"Salita","stat.descent":"Discesa","stat.ascent_time":"Tempo salita","stat.descent_time":"Tempo discesa","stat.min_altitude":"Altitudine min.","stat.max_altitude":"Altitudine max.","stat.ascent_rate":"Velocità di salita","empty.elevation.title":"Nessun dato sull'altitudine","empty.elevation.subtitle":"Solo gli allenamenti all'aperto con altimetro registrano questi dati.","card.location.title":"Posizione di Partenza","location.open_in_maps":"Apri in Maps","empty.location.title":"Nessun dato sulla posizione","empty.location.subtitle":"Gli allenamenti al chiuso non hanno un punto di partenza GPS.","card.fitness.title":"Forma Fisica","stat.vo2max":"VO2max","stat.estimated_vo2max":"VO2max stim.","stat.fitness_age":"Età fisica","fitness.measured":"Misurato {time} · {activity}","empty.fitness.title":"Ancora nessun dato sulla forma fisica","empty.fitness.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","empty.fitness_trend.title":"Ancora nessun dato sulla forma fisica","empty.fitness_trend.subtitle":"Suunto calcola questo solo dagli allenamenti di corsa o camminata.","card.pmc.title":"Gestione delle Prestazioni","card.pmc.subtitle":"Andamento di {days} giorni","card.recovery_trends.title":"Tendenze di Recupero","card.recovery_trends.subtitle":"Riferimento di {days} giorni","empty.recovery_trends.title":"Ancora nessun dato sulle tendenze di recupero","card.weekly_volume.title":"Volume Settimanale","card.weekly_volume.subtitle":"Ultime 12 settimane","empty.weekly_volume.title":"Ancora nessun dato sul volume settimanale","stat.average":"Media","stat.total":"Totale","card.hr_curve.title":"Curva della Frequenza Cardiaca","card.hr_curve.subtitle":"Ultime 24 ore","stat.hr_now":"Ora","stat.hr_min":"Min. di oggi","stat.hr_max":"Max. di oggi","empty.hr_curve.title":"Ancora nessun dato di FC in tempo reale","empty.hr_curve.subtitle":"Indossa e sincronizza l'orologio per vedere qui la curva di oggi.","card.sleep_trends.title":"Andamento del Sonno","card.sleep_trends.subtitle":"Ultime {days} notti","empty.sleep_trends.title":"Ancora nessun dato sull'andamento del sonno","card.weekly_goal.title":"Obiettivo Settimanale","card.weekly_goal.subtitle":"{value} di {goal} km","empty.weekly_goal.title":"Ancora nessuna distanza settimanale","editor.goal_label":"Obiettivo settimanale (km)","card.streak.title":"Serie di Attività","card.streak.subtitle":"Ultimi 14 giorni","streak.window_count_one":"{count} giorno attivo","streak.window_count_other":"{count} giorni attivi","streak.days_one":"{count} giorno di serie","streak.days_other":"{count} giorni di serie","streak.none":"Nessuna serie attiva - inizia oggi","empty.streak.title":"Ancora nessuno storico allenamenti","just_finished.title":"Ottimo lavoro!","just_finished.idle.title":"In attesa del tuo prossimo allenamento","just_finished.idle.subtitle":"Questa scheda si attiva appena l'orologio sincronizza un nuovo allenamento.","empty.just_finished.title":"Nessun allenamento recente","card.activity_trends.title":"Andamento dell'Attività","card.activity_trends.subtitle":"Ultimi {days} giorni","empty.activity_trends.title":"Ancora nessun dato sull'andamento dell'attività","card.recovery_balance_trend.title":"Andamento dell'Equilibrio di Recupero","card.recovery_balance_trend.subtitle":"Ultimi {days} giorni","empty.recovery_balance_trend.title":"Ancora nessun dato sull'andamento del recupero","card.readiness_trend.title":"Andamento della Prontezza","card.readiness_trend.subtitle":"Ultimi {days} giorni","empty.readiness_trend.title":"Ancora nessun dato sull'andamento della prontezza","stat.cadence":"Cadenza","stat.stride_length":"Lunghezza del passo","stat.pct_hrmax":"% FC max","stat.sleep_avg_hr":"FC med. sonno","stat.sleep_min_hr":"FC min. sonno","chip.bedtime":"A letto alle {time}","card.activity_calendar.title":"Calendario delle Attività","card.activity_calendar.subtitle":"Ultime 6 settimane","empty.activity_calendar.title":"Ancora nessuno storico allenamenti","activity_calendar.active_days_one":"{count} giorno attivo","activity_calendar.active_days_other":"{count} giorni attivi","card.workout_comparison.title":"Confronto Allenamenti","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Ancora non abbastanza allenamenti simili","empty.workout_comparison.subtitle":"Fai la stessa attività due volte per vedere un confronto.","stat.distance_delta":"Distanza ({delta})","stat.duration_delta":"Durata ({delta})","stat.avg_hr_delta":"FC media ({delta})","stat.pace_delta":"Passo ({delta})","card.milestones.title":"In Numeri","card.milestones.subtitle":"Da quando hai iniziato","empty.milestones.title":"Ancora nessun dato totale","stat.earth_laps":"Giri della Terra","stat.marathons":"Maratone","stat.moon_pct":"% verso la Luna","stat.burgers":"Hamburger","card.athlete_profile.title":"Personalità Sportiva","empty.athlete_profile.title":"Ancora non abbastanza dati","personality.activity.cycling":"Ciclista","personality.activity.running":"Corridore","personality.activity.trekking":"Escursionista","personality.activity.walking":"Camminatore","personality.activity.gym":"Atleta di Forza","personality.activity.swim":"Nuotatore","personality.activity.ski":"Sciatore","personality.activity.row":"Vogatore","personality.activity.other":"Multisportivo","personality.schedule.weekend":"Guerriero del Weekend","personality.schedule.weekday":"Regolare in Settimana","personality.schedule.balanced":"Programma Equilibrato","personality.time.morning":"Mattiniero","personality.time.afternoon":"Attivo di Pomeriggio","personality.time.evening":"Atleta della Sera","personality.time.night":"Nottambulo","card.pace_trend.title":"Andamento del Passo","card.pace_trend.subtitle":"{activity} · ultime {count} sessioni","empty.pace_trend.title":"Ancora non abbastanza allenamenti simili","empty.pace_trend.subtitle":"Fai la stessa attività alcune volte per vedere un andamento.","pace_trend.faster":"In miglioramento","pace_trend.slower":"In rallentamento","pace_trend.steady":"Passo stabile","card.lap_splits.title":"Tempi sul Giro","empty.lap_splits.title":"Nessun dato sui giri","empty.lap_splits.subtitle":"Non tutti gli allenamenti hanno giri - il prossimo che li avrà completerà questi dati.","stat.laps":"Giri","stat.fastest_lap":"Giro più veloce","label.lap":"Giro {n}","card.training_effect_trend.title":"Andamento dell'Effetto Allenamento","card.fitness_trend.title":"Andamento della Forma Fisica","empty.training_effect_trend.title":"Ancora nessun dato sull'effetto allenamento","achievements.badge.around_globe":"Giro del mondo","achievements.badge.century_club":"Club del Centinaio - 100 allenamenti","achievements.badge.consistency_king":"Re della Costanza - serie di 14 giorni","achievements.badge.iron_will":"Volontà di Ferro - serie di 30 giorni","achievements.badge.days_100":"100 giorni attivi","achievements.badge.distance_1000":"Club dei 1000 km","achievements.badge.distance_5000":"Club dei 5000 km","achievements.badge.elite_engine":"Motore d'élite - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal bruciate","achievements.badge.energy_1m":"1.000.000 kcal bruciate","achievements.badge.full_year":"Attivo tutto l'anno","achievements.badge.hours_100":"100 ore","achievements.badge.hours_500":"500 ore","achievements.badge.jack_of_all_trades":"Tuttofare - 5+ sport","achievements.badge.multi_sport":"Atleta multisport - 3+ sport","achievements.badge.solid_engine":"Motore solido - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ allenamenti","achievements.badge.workouts_1000":"1000 allenamenti","achievements.badge.workouts_250":"250 allenamenti","achievements.badge.workouts_500":"500 allenamenti","achievements.category.days":"Giorni attivi","achievements.category.distance":"Distanza","achievements.category.energy":"Energia","achievements.category.fitness":"Livello di forma","achievements.category.records":"Record personali","achievements.category.time":"Tempo di allenamento","achievements.category.variety":"Varietà","achievements.category.workouts":"Allenamenti registrati","card.achievements.subtitle":"{unlocked} di {total} sbloccati","card.achievements.title":"Obiettivi","achievements.next":"Prossimo: {name} ({pct}%)","class.rest":"+{pct}% altre attività","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registra qualche allenamento per iniziare a sbloccare i badge.","empty.achievements.title":"Ancora nessun obiettivo","empty.class.subtitle":"Registra qualche allenamento per rivelare la tua classe.","empty.class.title":"Dati ancora insufficienti","empty.level.subtitle":"Il tuo primo allenamento sincronizzato avvia la scalata.","empty.level.title":"Ancora nessun dato complessivo","empty.player.subtitle":"Serve un po' di storico allenamenti per calcolare le tue statistiche.","empty.player.title":"Dati ancora insufficienti","level.label":"LIVELLO","level.source":"{count} allenamenti registrati","level.subtitle":"Alimentato dal tuo carico di allenamento complessivo","level.title.grinder":"Instancabile di Resistenza","level.title.legend":"Leggenda Vivente","level.title.novice":"Recluta Fresca","level.title.veteran":"Veterano Navigato","level.xp_to_next":"{xp} XP al Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"Specialista {activity}","player.help.title":"Cosa significano","player.help.sta":"STA · Resistenza, dalla tua Forma (CTL): quanto carico di allenamento costante riesci a sostenere","player.help.pwr":"PWR · Potenza, dall'intensità media (TSS) delle tue sessioni recenti","player.help.rec":"REC · Recupero, il tuo punteggio attuale di Prontezza","player.help.con":"CON · Costanza, allenamenti registrati negli ultimi 30 giorni","player.help.end":"END · Resistenza, dal tuo VO2max stimato","player.help.frm":"FRM · Forma, dal tuo bilancio attuale di carico di allenamento (TSB)","player.help.disclaimer":"Valori euristici calcolati dai tuoi dati - non una metrica ufficiale Suunto.","player.tier.bronze":"Bronzo","player.tier.gold":"Oro","player.tier.legendary":"Leggendario","player.tier.silver":"Argento","records.climb":"Salita più impegnativa","records.distance":"Allenamento più lungo (distanza)","records.pace":"Ritmo più veloce","records.session":"Sessione più dura","records.streak":"Serie più lunga","records.streak_days_one":"{count} giorno","records.streak_days_other":"{count} giorni","records.workout":"Allenamento più lungo","class.name.cycling":"Guerriero della Resistenza","class.name.running":"Velocista","class.name.trekking":"Esploratore di Sentieri","class.name.walking":"Vagabondo","class.name.gym":"Berserker della Forza","class.name.swim":"Signore delle Maree","class.name.ski":"Corridore del Gelo","class.name.row":"Vogatore","class.name.other":"Tuttofare","class.flavor.cycling":"Costruito per sforzi lunghi e costanti, non per la velocità pura. Ogni altro sport è allenamento complementare.","class.flavor.running":"Scatto rapido e concentrato sul ritmo. La distanza è solo un mezzo.","class.flavor.trekking":"A suo agio su terreni difficili, macinando chilometri per ore.","class.flavor.walking":"Chilometri costanti e a basso impatto che si accumulano - la costanza prima dell'intensità.","class.flavor.gym":"Forza bruta prima della distanza. Le sessioni di forza vengono prima di tutto.","class.flavor.swim":"Resistenza forgiata in acqua, bracciata dopo bracciata.","class.flavor.ski":"Velocità e ritmo su neve e freddo.","class.flavor.row":"Forza ritmica, colpo dopo colpo.","class.flavor.other":"Nessuno sport domina - un mix davvero equilibrato.","card.next_milestone.title":"Prossimo Traguardo","card.next_milestone.subtitle":"Distanza totale","empty.next_milestone.title":"Ancora nessuna distanza totale","next_milestone.remaining_label":"mancanti","next_milestone.target":"a {target} km totali - {pct}% del percorso","next_milestone.workouts_one":"{count} allenamento a {target} totali","next_milestone.workouts_other":"{count} allenamenti a {target} totali","next_milestone.eta_one":"a {pace} km/settimana - circa {weeks} settimana","next_milestone.eta_other":"a {pace} km/settimana - circa {weeks} settimane","card.story.title":"La Tua Storia Suunto","card.story.subtitle":"Dal tuo primo allenamento","empty.story.title":"Ancora nessun dato totale","story.top_activity":"{activity} - la tua attività principale","story.top_activity_share":"{count} allenamenti - {pct}% della tua storia","story.record_subtitle":"Il tuo record personale assoluto","card.sleep_clock.title":"Orologio del Sonno","card.sleep_clock.subtitle":"Stanotte","empty.sleep_clock.title":"Ancora nessun dato sul sonno","empty.sleep_clock.subtitle":"Indossa l'orologio di notte per vederlo qui.","sleep_clock.quality":"{pct}% di qualità del sonno","card.sleep_rhythm.title":"Ritmo del Sonno","card.sleep_rhythm.subtitle":"Ultime 7 notti","empty.sleep_rhythm.title":"Ancora poca cronologia del sonno","empty.sleep_rhythm.subtitle":"Servono alcune notti di dati per mostrare uno schema.","sleep_rhythm.avg_bedtime":"Media addormentamento {time}","sleep_rhythm.avg_wake":"Media risveglio {time}","sleep_rhythm.spread":"Variazione di {minutes} min","sleep_rhythm.legend_normal":"Notte tipica","sleep_rhythm.legend_outlier":"{minutes}+ min di scostamento dalla media","card.route.title":"Percorso","empty.route.title":"Nessun dato sul percorso","empty.route.subtitle":"Gli allenamenti indoor non hanno una traccia GPS.","route.pace_slower":"Più lento","route.pace_faster":"Più veloce","card.month_story.title":"Questo Mese","empty.month_story.title":"Ancora nessun allenamento questo mese","story.share_month":"{count} allenamenti - {pct}% di questo mese","story.record_subtitle_month":"Il tuo record di questo mese","card.year_story.title":"Quest'Anno","empty.year_story.title":"Ancora nessun allenamento quest'anno","story.share_year":"{count} allenamenti - {pct}% di quest'anno","story.record_subtitle_year":"Il tuo record di quest'anno","card.best_efforts.title":"Migliori Prestazioni","card.best_efforts.subtitle":"{count} su {total} ottenute","empty.best_efforts.title":"Ancora nessuna migliore prestazione","empty.best_efforts.subtitle":"Registrate dagli allenamenti di corsa da ora in poi, non retroattivamente.","best_efforts.not_yet":"Non ancora ottenuto","distance.half_marathon":"Mezza Maratona","distance.marathon":"Maratona","card.steps_today.title":"Passi Oggi","card.steps_today.subtitle":"Obiettivo: {goal} passi","empty.steps_today.title":"Ancora nessun dato sui passi","editor.steps_goal_label":"Obiettivo giornaliero (passi)","steps_today.goal_pct":"{pct}% dell'obiettivo giornaliero","steps_today.vs_avg_up":"+{pct}% rispetto alla tua media di 7 giorni ({avg})","steps_today.vs_avg_down":"-{pct}% rispetto alla tua media di 7 giorni ({avg})","card.steps_trend.title":"Andamento Passi","card.steps_trend.subtitle":"Ultimi {days} giorni","empty.steps_trend.title":"Ancora nessuno storico dei passi","steps_trend.legend_met":"Obiettivo raggiunto","steps_trend.legend_below":"Sotto l'obiettivo","steps_trend.days_at_goal":"Giorni con obiettivo","card.month_records.title":"Record del Mese","card.month_records.subtitle":"{count} su {total} stabiliti questo mese","empty.month_records.title":"Ancora nessun record questo mese","empty.month_records.subtitle":"I tuoi migliori risultati di questo mese appariranno qui.","card.year_records.title":"Record dell'Anno","card.year_records.subtitle":"{count} su {total} stabiliti quest'anno","empty.year_records.title":"Ancora nessun record quest'anno","empty.year_records.subtitle":"I tuoi migliori risultati di quest'anno appariranno qui.","card.running_dynamics.title":"Dinamica della Corsa","card.running_dynamics.subtitle":"{activity} - ultimi {count} allenamenti","empty.running_dynamics.title":"Dati ancora insufficienti","empty.running_dynamics.subtitle":"Servono alcuni allenamenti di corsa recenti con dati sulla cadenza.","card.weekly_steps_goal.title":"Obiettivo Settimanale: Passi","card.weekly_steps_goal.subtitle":"{value} di {goal} passi","empty.weekly_steps_goal.title":"Ancora nessun dato sui passi","editor.weekly_steps_goal_label":"Obiettivo settimanale (passi)","card.goals_overview.title":"Panoramica Obiettivi","card.goals_overview.subtitle":"Questa settimana","empty.goals_overview.title":"Ancora nessun dato sugli obiettivi","card.week_compare.title":"Questa Settimana vs Settimana Scorsa","card.week_compare.subtitle":"Totali mobili su 7 giorni","empty.week_compare.title":"Ancora non abbastanza storico","empty.week_compare.subtitle":"Torna tra circa una settimana per un confronto.","week_compare.legend_now":"Questa settimana","week_compare.legend_prev":"Settimana scorsa","card.sleep_detail.title":"Dettaglio del Sonno","card.sleep_detail.subtitle":"Stanotte","label.awake":"Sveglio","label.sleep_other":"Altro sonno","sleep_detail.total_sleep":"sonno totale","sleep_detail.in_bed":"{duration} a letto","sleep_detail.bedtime":"A letto","sleep_detail.wake":"Sveglia","sleep_detail.stages":"Fasi del sonno","sleep_detail.efficiency":"Efficienza del sonno","sleep_detail.efficiency_sub":"Tempo di sonno ÷ tempo a letto","sleep_detail.vitals":"Parametri","sleep_detail.insight_excellent":"{pct}% di sonno profondo · un'ottima finestra di recupero.","sleep_detail.insight_solid":"{pct}% di sonno profondo · un recupero solido.","sleep_detail.insight_light":"{pct}% di sonno profondo · più leggero del solito.","editor.energy_goal_source_label":"Obiettivo calorie da","editor.sleep_goal_source_label":"Obiettivo sonno da","editor.training_goal_source_label":"Obiettivo tempo di allenamento da","editor.energy_goal_label":"Obiettivo giornaliero (kcal attive)","editor.sleep_goal_label":"Obiettivo sonno (ore)","editor.training_goal_label":"Obiettivo settimanale (ore)","editor.show_goals_label":"Mostra obiettivi","editor.source_suunto_none":"App Suunto (nessun obiettivo)","editor.distance_goal_hint":"L'app Suunto non ha un obiettivo di distanza, quindi questo è sempre il tuo.","card.daily_goals.title":"Obiettivi del giorno","card.daily_goals.subtitle":"Passi, calorie e sonno","empty.daily_goals.title":"Ancora nessun dato sugli obiettivi","stat.active_kcal":"Kcal attive","stat.sleep":"Sonno","stat.training_time":"Tempo di allenamento","goal.of":"di {goal}","goal.energy_active_of":"{kcal} attive di {goal}","sleep_goal.label":"Obiettivo sonno","sleep_goal.short":"{value} di {goal} · mancano {missing}","sleep_goal.met":"{value} di {goal} · obiettivo raggiunto","sleep_trends.nights_at_goal":"Notti a obiettivo","sleep_trends.avg_vs_goal":"Media vs obiettivo","sleep_trends.legend_goal":"Obiettivo {goal}","card.ai_insight.title":"Analisi IA","empty.ai_insight.title":"L'analisi IA è disattivata","empty.ai_insight.subtitle":"Attivala nell'integrazione: Configura -> Analisi IA giornaliera","empty.ai_insight.waiting":"Ancora nessuna analisi IA oggi","ai_insight.generating":"Analisi in corso","ai_insight.night":"notte {night}","ai_insight.no_night":"ultima notte non ancora sincronizzata","ai_insight.no_section":"Nessun dato per questa sezione","ai_insight.advice":"Consigli per oggi","ai_insight.disclaimer":"Non è un consiglio medico","ai_insight.section.sleep":"Sonno","ai_insight.section.recovery":"Recupero","ai_insight.section.training":"Allenam.","ai_insight.section.activity":"Attività","ai_insight.section_full.sleep":"Sonno","ai_insight.section_full.recovery":"Salute e recupero","ai_insight.section_full.training":"Allenamento","ai_insight.section_full.activity":"Attività giornaliera","ai_insight.status.good":"Bene","ai_insight.status.ok":"OK","ai_insight.status.caution":"Cautela","ai_insight.status.rest":"Riposo","strategy.title":"Allenamento","strategy.none":"Nessun account Suunto","strategy.none_text":"Nessun account dall'integrazione Suunto App. Aggiungi l'integrazione in Impostazioni > Dispositivi e servizi, poi ricarica questa dashboard.","strategy.section.today":"Oggi","strategy.section.ai":"Analisi IA","strategy.section.sleep":"Sonno","strategy.section.recovery":"Recupero","strategy.section.last_workout":"Ultimo allenamento","strategy.section.load":"Carico e forma","strategy.section.week":"Questa settimana","strategy.section.records":"Record","strategy.section.history":"Storico e profilo","strategy.section.gear":"Attrezzatura e tragitti","card.ai_weekly.title":"Riepilogo settimanale IA","empty.ai_weekly.subtitle":"Richiede ha-suunto 1.0.38 o successivo con l'IA attiva: Configura -> IA","empty.ai_weekly.waiting":"Ancora nessun riepilogo settimanale IA","ai_weekly.week":"settimana {range}","ai_weekly.advice":"Piano per la prossima settimana","editor.ai_report_label":"Report","editor.ai_report_daily":"Analisi giornaliera","editor.ai_report_weekly":"Riepilogo settimanale","editor.ai_section_label":"Sezione","editor.ai_single_label":"Mostra solo questa sezione","card.sleep_regularity.title":"Regolarità del sonno","sleep_regularity.subtitle":"Ultime 4 settimane · {nights} notti","empty.sleep_regularity.title":"Non ci sono ancora abbastanza notti","empty.sleep_regularity.subtitle":"Serve circa una settimana di notti consecutive con l'orologio.","sleep_regularity.bed":"A letto media {time}","sleep_regularity.wake":"Sveglia media {time}","sleep_regularity.mid_work":"Metà sonno, notti dom-gio {time}","sleep_regularity.mid_free":"Metà sonno, notti ven/sab {time}","band.regularity.regular":"Regolare","band.regularity.fair":"Abbastanza regolare","band.regularity.irregular":"Irregolare","chip.regularity":"Regolarità {value}","chip.social_jetlag":"Jet lag sociale {value}","card.aerobic_decoupling.title":"Disaccoppiamento aerobico","empty.aerobic_decoupling.title":"Nessun allenamento lungo analizzato","empty.aerobic_decoupling.subtitle":"Compare dopo un allenamento di 40+ minuti con GPS e frequenza cardiaca.","aerobic_decoupling.analyzed":"{minutes} min analizzati","aerobic_decoupling.hint":"sotto il 5 % = buona base aerobica","aerobic_decoupling.first_half":"1ª metà","aerobic_decoupling.second_half":"2ª metà","aerobic_decoupling.trend":"Ultimi {count} allenamenti analizzati","band.decoupling.coupled":"Accoppiato","band.decoupling.moderate":"Deriva moderata","band.decoupling.high":"Deriva alta","stat.decoupling":"Deriva FC","card.personal_insights.title":"Cosa funziona per te","personal_insights.subtitle":"Dalle tue ultime {nights} notti","empty.personal_insights.title":"Ancora nessuno schema chiaro","empty.personal_insights.subtitle":"Servono alcune settimane di dati su sonno e allenamento. Vengono mostrate solo differenze nette.","personal_insights.these_nights":"queste notti","personal_insights.the_rest":"le altre","personal_insights.nights_count":"{with} vs {without} notti","personal_insights.disclaimer":"Schemi nei tuoi dati, non prove di una causa. Un risultato richiede almeno 4 notti o allenamenti per lato.","insights.cond.late_workout":"Dopo un allenamento finito dopo le {time}","insights.cond.training_day":"Nei giorni di allenamento","insights.cond.hard_day":"Dopo i tuoi giorni più duri","insights.cond.early_bed":"Quando vai a letto prima delle {bedtime}","insights.cond.free_night":"Le notti di venerdì e sabato","insights.metric.hrv":"HRV","insights.metric.resting_hr":"FC a riposo","insights.metric.sleep":"Sonno","daily_brief.your_pattern":"Il tuo schema","editor.show_insight_label":"Mostra il tuo schema più forte","editor.look_section":"Aspetto","editor.title":"Titolo","editor.icon":"Icona (es. mdi:star)","editor.accent_color":"Colore di accento (es. #e91e63 o teal)","editor.accent_hint":"Lo stesso colore in modalità chiara e scura. Un colore non valido viene ignorato.","editor.accent_default":"Predefinito (ambra)","editor.accent_pink":"Rosa","editor.accent_purple":"Viola","editor.accent_teal":"Verde acqua","editor.accent_green":"Verde","editor.accent_blue":"Blu","editor.hide_header":"Nascondi intestazione","editor.hide_icon":"Nascondi icona","editor.hide_subtitle":"Nascondi sottotitolo","editor.hide_legend":"Nascondi legenda","editor.text_size":"Dimensione del testo","text_size.normal":"Normale","text_size.large":"Grande (115%)","text_size.larger":"Più grande (130%)","text_size.largest":"Molto grande (150%)","editor.language":"Lingua","editor.language_auto":"Quella di Home Assistant","editor.hide_sync_warning":"Nascondi l'avviso di sincronizzazione","editor.max_items":"Numero di elementi","editor.list_height":"Altezza dell'elenco (px)","card.stress_today.title":"Stress e recupero","stress_today.subtitle_today":"Oggi fino alle {time}","stress_today.subtitle_waiting":"Ieri · oggi non ancora sincronizzato","stress_today.yesterday":"Ieri","empty.stress_today.title":"Nessun dato sullo stress","empty.stress_today.subtitle":"Richiede Suunto App (unofficial) 1.0.37 o successiva e un orologio sincronizzato.","stress.state.recovering":"Recupero","stress.state.active":"Attivo","stress.state.inactive":"Inattivo","stress.state.stressed":"Stress","insights.cond.hot_weather":"Con il caldo (da {temp}°C)","insights.cond.cold_weather":"Con il freddo (fino a {temp}°C)","insights.metric.efficiency":"Efficienza","insights.unit.per_beat":"m/battito","personal_insights.subtitle_days":"Dalle tue ultime {nights} notti e {days} giorni di allenamento","personal_insights.these_workouts":"questi allenamenti","personal_insights.workouts_count":"{with} vs {without} allenamenti","personal_insights.speed_at_hr":"{with_speed} km/h a {with_hr} bpm vs {without_speed} km/h a {without_hr} bpm","sync.at":"sincronizzato {time}","sync.yesterday":"sincronizzato ieri {time}","chip.not_synced":"Orologio non sincronizzato da {hours} h","editor.eink":"Schermo e-ink","eink.off":"Spento","eink.bw":"Bianco e nero","eink.gray":"4 grigi","eink.red":"Nero, bianco e rosso","eink.yellow":"Nero, bianco e giallo","eink.color":"6 colori","editor.max_lines":"Righe di testo max","card.whats_new.title":"Novità","card.whats_new.subtitle":"Ultimi {days} giorni","whats_new.today":"Oggi","whats_new.yesterday":"Ieri","whats_new.now":"Ora","whats_new.empty":"Niente di nuovo negli ultimi {days} giorni","whats_new.record":"Nuovo record: {label} {value}","whats_new.record_year":"Record dell'anno: {label} {value}","whats_new.record_month":"Record del mese: {label} {value}","whats_new.best_effort":"Miglior sforzo {distance}: {time}","whats_new.ai_daily":"Analisi IA del giorno","whats_new.ai_weekly":"Riepilogo settimanale IA","whats_new.gear_due":"{name}: è ora di una manutenzione","editor.whats_new_show":"Mostra","whats_new.kind.workouts":"Allenamenti","whats_new.kind.records":"Record e migliori sforzi","whats_new.kind.achievements":"Traguardi sul percorso","whats_new.kind.ai":"Report IA","whats_new.kind.gear":"Manutenzione attrezzatura"},nl:{"stat.distance":"Afstand","stat.duration":"Duur","stat.avg_speed":"Gem. snelheid","stat.avg_pace":"Gem. tempo","stat.avg_hr":"Gem. hartslag","stat.max_hr":"Max. hartslag","stat.training_effect":"Trainingseffect","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Gevoel","stat.energy":"Energie","stat.time":"Tijd","stat.workouts":"Work-outs","stat.steps":"Stappen","stat.heart_rate":"Hartslag","stat.quality":"Kwaliteit","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Rustpols","stat.resting_hr_delta":"Rustpols ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresstoestand","stat.recovery_window":"Hersteltijd","stat.ctl":"CTL · fitheid","stat.atl":"ATL · vermoeidheid","stat.tsb":"TSB · vorm","stat.readiness":"Gereedheid","stat.recovery_balance":"Herstelbalans","stat.training_suggestion":"Advies voor vandaag","stat.volume":"Volume","stat.intensity":"Intensiteit","stat.consistency":"Consistentie","stat.recovery":"Herstel","stat.variety":"Variatie","card.hr_zones.title":"Hartslagzones","card.hr_zones.last_workout":"Laatste training","card.sleep_readiness.title":"Slaap & Gereedheid","card.sleep_readiness.subtitle_no_wake":"{duration} geslapen","card.sleep_readiness.subtitle_with_wake":"{duration} geslapen · wakker om {time}","card.recovery.title":"Herstel","card.training_load.title":"Trainingsbelasting","card.training_load.subtitle_fallback":"Fitheidstrend (CTL)","card.week_stats.title":"Deze Week & Totaal","card.week_stats.subtitle":"Laatste 7 dagen","card.week_stats.lifetime_title":"Totaal per activiteit","card.today.title":"Vandaag","card.today.subtitle":"Live vanaf je horloge","card.training_status.title":"Trainingsstatus","card.training_profile.title":"Trainingsprofiel","card.training_profile.subtitle":"Jouw training in één oogopslag","card.heart_rate.title":"Hartslag","empty.last_workout.title":"Geen recente training","empty.last_workout.subtitle":"Synchroniseer je horloge met de Suunto-app om het hier te zien.","empty.hr_zones.title":"Geen zonegegevens","empty.hr_zones.subtitle":"Je volgende buitentraining met hartslagband vult dit aan.","empty.sleep_readiness.title":"Nog geen slaapgegevens","empty.sleep_readiness.subtitle":"Draag je horloge tijdens het slapen om dit hier te zien.","empty.recovery.title":"Nog geen herstelgegevens","empty.training_load.title":"Trainingsbelasting wordt berekend","empty.training_load.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen - kijk later nog eens na een paar trainingen.","empty.week_stats.title":"Nog geen traininggeschiedenis","empty.today.title":"Nog geen live gegevens","empty.training_status.title":"Nog niet genoeg gegevens","empty.training_status.subtitle":"Heeft wat trainingsgeschiedenis nodig om te berekenen.","empty.training_profile.title":"Nog niet genoeg gegevens","empty.training_profile.subtitle":"Heeft meer sensorgegevens nodig om je profiel te berekenen.","empty.heart_rate.title":"Nog geen hartslaggegevens","empty.loading":"Laden...","empty.generic_error":"Suunto-gegevens konden niet worden geladen.","error.no_device":"Geen Suunto-apparaat gevonden - is de suunto_app-integratie ingesteld?","error.multiple_devices":'Meerdere Suunto-apparaten gevonden - stel "device_id" in de kaartconfiguratie in.',"error.device_missing":'Geconfigureerd apparaat "{device}" heeft geen suunto_app-entiteiten.',"band.readiness.great":"Uitstekend","band.readiness.fair":"Redelijk","band.readiness.low":"Laag","band.recovery.well":"Goed hersteld","band.recovery.partial":"Gedeeltelijk hersteld","band.recovery.low":"Laag herstel","band.recovery.fully":"Volledig hersteld","band.recovery.recovering":"Aan het herstellen · {time} resterend","band.hrv.low":"HRV laag","band.hrv.high":"HRV hoog","band.hrv.balanced":"HRV in balans","band.form.fresh":"Fris","band.form.neutral":"Neutraal","band.form.fatigued":"Vermoeid","band.form.very_fatigued":"Erg vermoeid","band.acwr.safe":"Veilige zone","band.acwr.low":"Lage belasting","band.acwr.high":"Hoge belasting - blessurerisico","band.suggestion.hard":"Ga ervoor","band.suggestion.moderate":"Gematigde inspanning","band.suggestion.easy":"Rustig aan","band.suggestion.rest":"Rustdag","chip.workout_logged_today":"Training vandaag geregistreerd","chip.workout_today":"Training vandaag","chip.recovering":"Herstellen","chip.nap":"{minutes} min dutje","chip.nap_earlier":"{minutes} min dutje (eerder)","chip.workouts_30d":"{count} trainingen in de laatste 30 dagen","chip.acwr":"ACWR {value} · {label}","profile.summary":"Sterkst in {strong} · zwakst in {light}","chip.more_activity_one":"+{count} andere activiteit","chip.more_activity_other":"+{count} andere activiteiten","chip.unusual_recovery":"Afwijkend herstel","chip.days_since_one":"{count} dag sinds laatste training","chip.days_since_other":"{count} dagen sinds laatste training","chip.manually_added":"Handmatig toegevoegd","chip.sleep_stale":"Geen slaap van afgelopen nacht · nacht van {date}","readiness.balance_only":"Alleen herstelbalans, zonder slaap","chip.no_hr":"Zonder hartslag","card.heart_rate.measured":"Gemeten {time}","card.heart_rate.measured_ago":"Gemeten {ago} · {time}","stat.energy_active_sub":"{kcal} actief","energy.total_unit":"kcal totaal","energy.split":"{active} actief · {bmr} BMR","card.commute.title":"Woon-werkritten","card.commute.subtitle_year":"Dit jaar in plaats van de auto","card.commute.subtitle_month":"Deze maand in plaats van de auto","commute.saved":"bespaard","commute.fuel_co2":"{fuel} l brandstof · {co2} kg minder CO2","stat.rides":"Ritten","stat.days":"Dagen","stat.avg_time":"Gem. tijd","commute.this_month":"Deze maand:","commute.this_year":"Dit jaar:","commute.rides_n":"{n} ritten","empty.commute.title":"Nog geen woon-werkritten","empty.commute.subtitle":"Trainingen die Suunto als woon-werk markeert verschijnen hier.","card.gear.title":"Materiaal","card.gear.subtitle":"Afstand en onderhoud","gear.remaining":"Nog {km}","gear.over":"{km} over","chip.service":"Onderhoud","empty.gear.title":"Nog geen materiaal gevolgd","empty.gear.subtitle":"Voeg materiaal toe via het menu Configureren van de integratie.","card.form_forecast.title":"Vormprognose","card.form_forecast.subtitle":"Als je vanaf vandaag rust","stat.tomorrow":"Morgen","stat.peak_in":"Piek over {days} d","stat.maintenance":"Fitheid houden / wk","empty.form_forecast.title":"Nog geen prognose","card.daily_brief.title":"Dagbriefing","empty.daily_brief.title":"Nog geen briefing","achievement.count_one":"{count} prestatie","achievement.count_other":"{count} prestaties","achievement.rank":"Positie #{rank} op deze route","label.zone":"Zone {n}","label.deep":"Diep","label.light":"Licht","label.rem":"REM","editor.auto_detect":"Deze kaart detecteert automatisch je Suunto-apparaat - geen configuratie nodig.","editor.pick_device":"Meerdere Suunto-apparaten gevonden - kies welke deze kaart moet gebruiken.","editor.device_label":"Suunto-apparaat","editor.units_label":"Eenheden","editor.units_metric":"Metrisch (km)","editor.units_imperial":"Imperiaal (mi)","editor.compact_label":"Compacte modus","editor.days_label":"Trendvenster (dagen)","editor.period_label":"Hoofdperiode","editor.period_year":"Dit jaar","editor.period_month":"Deze maand","editor.goal_source_label":"Stappendoel uit","editor.source_suunto":"Suunto-app ({value})","editor.source_suunto_default":"Suunto-app (geen doel, gebruik {value})","editor.source_custom":"Eigen","editor.fuel_source_label":"Brandstofgegevens uit","editor.source_integration":"Suunto-integratie ({litres} l/100 km, {price} per l)","editor.source_integration_unknown":"Suunto-integratie","editor.fuel_consumption_label":"Verbruik (l/100 km)","editor.fuel_price_label":"Brandstofprijs per liter","editor.fuel_hint":"Wijzig de waarden van de integratie via Instellingen > Apparaten en diensten > Suunto > Configureren.","card.lifetime.title":"Totalen Aller Tijden","card.lifetime.subtitle":"Sinds het begin","stat.active_days":"Actieve dagen","empty.lifetime.title":"Nog geen totalen","card.recent_workouts.title":"Recente Trainingen","empty.recent_workouts.title":"Geen recente trainingen","card.elevation.title":"Hoogtemeters & Klimmen","stat.ascent":"Stijging","stat.descent":"Daling","stat.ascent_time":"Stijgtijd","stat.descent_time":"Daaltijd","stat.min_altitude":"Min. hoogte","stat.max_altitude":"Max. hoogte","stat.ascent_rate":"Stijgsnelheid","empty.elevation.title":"Geen hoogtegegevens","empty.elevation.subtitle":"Alleen buitentrainingen met een barometer registreren dit.","card.location.title":"Startlocatie","location.open_in_maps":"Openen in Maps","empty.location.title":"Geen locatiegegevens","empty.location.subtitle":"Binnentrainingen hebben geen GPS-startpunt.","card.fitness.title":"Fitheid","stat.vo2max":"VO2max","stat.estimated_vo2max":"Gesch. VO2max","stat.fitness_age":"Fitheidsleeftijd","fitness.measured":"Gemeten {time} · {activity}","empty.fitness.title":"Nog geen fitheidsgegevens","empty.fitness.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","empty.fitness_trend.title":"Nog geen fitheidsgegevens","empty.fitness_trend.subtitle":"Suunto berekent dit alleen op basis van hardloop- of wandeltrainingen.","card.pmc.title":"Prestatiebeheer","card.pmc.subtitle":"{days}-dagen trend","card.recovery_trends.title":"Hersteltrends","card.recovery_trends.subtitle":"{days}-dagen basiswaarde","empty.recovery_trends.title":"Nog geen hersteltrendgegevens","card.weekly_volume.title":"Wekelijks Volume","card.weekly_volume.subtitle":"Laatste 12 weken","empty.weekly_volume.title":"Nog geen gegevens over wekelijks volume","stat.average":"Gemiddeld","stat.total":"Totaal","card.hr_curve.title":"Hartslagcurve","card.hr_curve.subtitle":"Laatste 24 uur","stat.hr_now":"Nu","stat.hr_min":"Min. vandaag","stat.hr_max":"Max. vandaag","empty.hr_curve.title":"Nog geen live hartslaggegevens","empty.hr_curve.subtitle":"Draag en synchroniseer je horloge om de curve van vandaag hier te zien.","card.sleep_trends.title":"Slaaptrends","card.sleep_trends.subtitle":"Laatste {days} nachten","empty.sleep_trends.title":"Nog geen slaaptrendgegevens","card.weekly_goal.title":"Weekdoel","card.weekly_goal.subtitle":"{value} van {goal} km","empty.weekly_goal.title":"Nog geen wekelijkse afstand","editor.goal_label":"Weekdoel (km)","card.streak.title":"Activiteitenreeks","card.streak.subtitle":"Laatste 14 dagen","streak.window_count_one":"{count} actieve dag","streak.window_count_other":"{count} actieve dagen","streak.days_one":"{count} dag op rij","streak.days_other":"{count} dagen op rij","streak.none":"Geen actieve reeks - kom vandaag in beweging","empty.streak.title":"Nog geen traininggeschiedenis","just_finished.title":"Goed gedaan!","just_finished.idle.title":"Wachten op je volgende training","just_finished.idle.subtitle":"Deze kaart licht op zodra je horloge een nieuwe training synchroniseert.","empty.just_finished.title":"Geen recente training","card.activity_trends.title":"Activiteitstrends","card.activity_trends.subtitle":"Laatste {days} dagen","empty.activity_trends.title":"Nog geen activiteitstrendgegevens","card.recovery_balance_trend.title":"Herstelbalanstrend","card.recovery_balance_trend.subtitle":"Laatste {days} dagen","empty.recovery_balance_trend.title":"Nog geen hersteltrendgegevens","card.readiness_trend.title":"Gereedheidstrend","card.readiness_trend.subtitle":"Laatste {days} dagen","empty.readiness_trend.title":"Nog geen gereedheidstrendgegevens","stat.cadence":"Cadans","stat.stride_length":"Paslengte","stat.pct_hrmax":"% van max. hartslag","stat.sleep_avg_hr":"Gem. slaappols","stat.sleep_min_hr":"Min. slaappols","chip.bedtime":"Naar bed {time}","card.activity_calendar.title":"Activiteitenkalender","card.activity_calendar.subtitle":"Laatste 6 weken","empty.activity_calendar.title":"Nog geen traininggeschiedenis","activity_calendar.active_days_one":"{count} actieve dag","activity_calendar.active_days_other":"{count} actieve dagen","card.workout_comparison.title":"Trainingsvergelijking","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Nog niet genoeg vergelijkbare trainingen","empty.workout_comparison.subtitle":"Doe dezelfde activiteit twee keer om een vergelijking te zien.","stat.distance_delta":"Afstand ({delta})","stat.duration_delta":"Duur ({delta})","stat.avg_hr_delta":"Gem. hartslag ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"In Cijfers","card.milestones.subtitle":"Sinds je begon","empty.milestones.title":"Nog geen totaalgegevens","stat.earth_laps":"Rondjes om de aarde","stat.marathons":"Marathons","stat.moon_pct":"% naar de maan","stat.burgers":"Hamburgers","card.athlete_profile.title":"Trainingspersoonlijkheid","empty.athlete_profile.title":"Nog niet genoeg gegevens","personality.activity.cycling":"Fietser","personality.activity.running":"Hardloper","personality.activity.trekking":"Wandelaar","personality.activity.walking":"Loper","personality.activity.gym":"Krachtsporter","personality.activity.swim":"Zwemmer","personality.activity.ski":"Skiër","personality.activity.row":"Roeier","personality.activity.other":"Multisporter","personality.schedule.weekend":"Weekendkrijger","personality.schedule.weekday":"Doordeweekse Sporter","personality.schedule.balanced":"Gebalanceerd Schema","personality.time.morning":"Vroege Vogel","personality.time.afternoon":"Middagsporter","personality.time.evening":"Avondsporter","personality.time.night":"Nachtuil","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · laatste {count} sessies","empty.pace_trend.title":"Nog niet genoeg vergelijkbare trainingen","empty.pace_trend.subtitle":"Doe dezelfde activiteit een paar keer om een trend te zien.","pace_trend.faster":"Wordt sneller","pace_trend.slower":"Wordt langzamer","pace_trend.steady":"Stabiel tempo","card.lap_splits.title":"Rondetijden","empty.lap_splits.title":"Geen rondegegevens","empty.lap_splits.subtitle":"Niet elke training heeft ronden - de volgende met ronden vult dit aan.","stat.laps":"Ronden","stat.fastest_lap":"Snelste ronde","label.lap":"Ronde {n}","card.training_effect_trend.title":"Trainingseffecttrend","card.fitness_trend.title":"Fitheidstrend","empty.training_effect_trend.title":"Nog geen trainingseffectgegevens","achievements.badge.around_globe":"Rond de wereld","achievements.badge.century_club":"Eeuwclub - 100 trainingen","achievements.badge.consistency_king":"Koning van Consistentie - reeks van 14 dagen","achievements.badge.iron_will":"IJzeren Wil - reeks van 30 dagen","achievements.badge.days_100":"100 actieve dagen","achievements.badge.distance_1000":"1000 km-club","achievements.badge.distance_5000":"5000 km-club","achievements.badge.elite_engine":"Elitemotor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal verbrand","achievements.badge.energy_1m":"1.000.000 kcal verbrand","achievements.badge.full_year":"Heel het jaar actief","achievements.badge.hours_100":"100 uur","achievements.badge.hours_500":"500 uur","achievements.badge.jack_of_all_trades":"Manusje-van-alles - 5+ sporten","achievements.badge.multi_sport":"Multisportatleet - 3+ sporten","achievements.badge.solid_engine":"Solide motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ trainingen","achievements.badge.workouts_1000":"1000 trainingen","achievements.badge.workouts_250":"250 trainingen","achievements.badge.workouts_500":"500 trainingen","achievements.category.days":"Actieve dagen","achievements.category.distance":"Afstand","achievements.category.energy":"Energie","achievements.category.fitness":"Fitnessniveau","achievements.category.records":"Persoonlijke records","achievements.category.time":"Trainingstijd","achievements.category.variety":"Variatie","achievements.category.workouts":"Geregistreerde trainingen","card.achievements.subtitle":"{unlocked} van {total} ontgrendeld","card.achievements.title":"Prestaties","achievements.next":"Volgende: {name} ({pct}%)","class.rest":"+{pct}% andere activiteiten","class.tag":"Focus: {activity}","empty.achievements.subtitle":"Registreer een paar trainingen om badges te ontgrendelen.","empty.achievements.title":"Nog geen prestaties","empty.class.subtitle":"Registreer een paar trainingen om je klasse te onthullen.","empty.class.title":"Nog niet genoeg gegevens","empty.level.subtitle":"Je eerste gesynchroniseerde training start de klim.","empty.level.title":"Nog geen totaalgegevens","empty.player.subtitle":"Heeft wat trainingsgeschiedenis nodig om je stats te berekenen.","empty.player.title":"Nog niet genoeg gegevens","level.label":"NIVEAU","level.source":"{count} trainingen geregistreerd","level.subtitle":"Aangedreven door je totale trainingsbelasting","level.title.grinder":"Uithoudingswerker","level.title.legend":"Levende Legende","level.title.novice":"Verse Rekruut","level.title.veteran":"Doorgewinterde Veteraan","level.xp_to_next":"{xp} XP tot Lvl {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-specialist","player.help.title":"Wat dit betekent","player.help.sta":"STA · Uithoudingsvermogen, uit je Fitheid (CTL): hoeveel gestage trainingsbelasting je aankunt","player.help.pwr":"PWR · Kracht, uit de gemiddelde intensiteit (TSS) van je recente trainingen","player.help.rec":"REC · Herstel, je huidige Readiness-score","player.help.con":"CON · Consistentie, trainingen van de afgelopen 30 dagen","player.help.end":"END · Uithoudingsvermogen, uit je geschatte VO2max","player.help.frm":"FRM · Vorm, uit je huidige trainingsbelastingsbalans (TSB)","player.help.disclaimer":"Heuristische waarden berekend uit je eigen data - geen officiële Suunto-metriek.","player.tier.bronze":"Brons","player.tier.gold":"Goud","player.tier.legendary":"Legendarisch","player.tier.silver":"Zilver","records.climb":"Grootste klim","records.distance":"Verste training","records.pace":"Snelste tempo","records.session":"Zwaarste sessie","records.streak":"Langste reeks","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dagen","records.workout":"Langste training","class.name.cycling":"Uithoudingskrijger","class.name.running":"Sprinter","class.name.trekking":"Padvinder","class.name.walking":"Zwerver","class.name.gym":"Krachtberserker","class.name.swim":"Getijroeper","class.name.ski":"Vorstloper","class.name.row":"Roeier","class.name.other":"Manusje-van-alles","class.flavor.cycling":"Gemaakt voor lange, gestage inspanningen in plaats van pure snelheid. Elke andere sport is aanvullende training.","class.flavor.running":"Snel weg en gericht op tempo. Afstand is slechts een middel.","class.flavor.trekking":"Thuis op ruig terrein, uren achtereen kilometers makend.","class.flavor.walking":"Gestage, schokvrije kilometers tellen op - consistentie boven intensiteit.","class.flavor.gym":"Rauwe kracht boven afstand. Krachttraining staat voorop.","class.flavor.swim":"Uithoudingsvermogen gesmeed in het water, slag voor slag.","class.flavor.ski":"Snelheid en ritme op sneeuw en kou.","class.flavor.row":"Ritmische kracht, haal voor haal.","class.flavor.other":"Geen enkele sport domineert - een echt evenwichtige mix.","card.next_milestone.title":"Volgende Mijlpaal","card.next_milestone.subtitle":"Totale afstand","empty.next_milestone.title":"Nog geen totale afstand","next_milestone.remaining_label":"te gaan","next_milestone.target":"naar {target} km totaal - {pct}% onderweg","next_milestone.workouts_one":"{count} training naar {target} totaal","next_milestone.workouts_other":"{count} trainingen naar {target} totaal","next_milestone.eta_one":"bij {pace} km/week - nog ongeveer {weeks} week","next_milestone.eta_other":"bij {pace} km/week - nog ongeveer {weeks} weken","card.story.title":"Jouw Suunto Verhaal","card.story.subtitle":"Sinds je eerste training","empty.story.title":"Nog geen totale gegevens","story.top_activity":"{activity} - jouw belangrijkste activiteit","story.top_activity_share":"{count} trainingen - {pct}% van je geschiedenis","story.record_subtitle":"Jouw record aller tijden","card.sleep_clock.title":"Slaapklok","card.sleep_clock.subtitle":"Afgelopen nacht","empty.sleep_clock.title":"Nog geen slaapgegevens","empty.sleep_clock.subtitle":"Draag je horloge 's nachts om dit hier te zien.","sleep_clock.quality":"{pct}% slaapkwaliteit","card.sleep_rhythm.title":"Slaapritme","card.sleep_rhythm.subtitle":"Laatste 7 nachten","empty.sleep_rhythm.title":"Nog niet genoeg slaapgeschiedenis","empty.sleep_rhythm.subtitle":"Heeft een paar nachten aan gegevens nodig om een patroon te tonen.","sleep_rhythm.avg_bedtime":"Gem. bedtijd {time}","sleep_rhythm.avg_wake":"Gem. wektijd {time}","sleep_rhythm.spread":"{minutes} min spreiding","sleep_rhythm.legend_normal":"Typische nacht","sleep_rhythm.legend_outlier":"{minutes}+ min afwijkend van gemiddelde","card.route.title":"Route","empty.route.title":"Geen routegegevens","empty.route.subtitle":"Indoor trainingen hebben geen GPS-track.","route.pace_slower":"Langzamer","route.pace_faster":"Sneller","card.month_story.title":"Deze Maand","empty.month_story.title":"Nog geen trainingen deze maand","story.share_month":"{count} trainingen - {pct}% van deze maand","story.record_subtitle_month":"Jouw record deze maand","card.year_story.title":"Dit Jaar","empty.year_story.title":"Nog geen trainingen dit jaar","story.share_year":"{count} trainingen - {pct}% van dit jaar","story.record_subtitle_year":"Jouw record dit jaar","card.best_efforts.title":"Beste Prestaties","card.best_efforts.subtitle":"{count} van {total} behaald","empty.best_efforts.title":"Nog geen beste prestaties","empty.best_efforts.subtitle":"Vanaf nu bijgehouden bij hardlooptrainingen, niet met terugwerkende kracht.","best_efforts.not_yet":"Nog niet behaald","distance.half_marathon":"Halve Marathon","distance.marathon":"Marathon","card.steps_today.title":"Stappen Vandaag","card.steps_today.subtitle":"Doel: {goal} stappen","empty.steps_today.title":"Nog geen stappengegevens","editor.steps_goal_label":"Dagelijks doel (stappen)","steps_today.goal_pct":"{pct}% van dagelijks doel","steps_today.vs_avg_up":"+{pct}% t.o.v. je 7-daags gemiddelde ({avg})","steps_today.vs_avg_down":"-{pct}% t.o.v. je 7-daags gemiddelde ({avg})","card.steps_trend.title":"Stappentrend","card.steps_trend.subtitle":"Laatste {days} dagen","empty.steps_trend.title":"Nog geen stappengeschiedenis","steps_trend.legend_met":"Doel behaald","steps_trend.legend_below":"Onder doel","steps_trend.days_at_goal":"Dagen met doel","card.month_records.title":"Records van de Maand","card.month_records.subtitle":"{count} van {total} behaald deze maand","empty.month_records.title":"Nog geen records deze maand","empty.month_records.subtitle":"Je persoonlijke records van deze maand verschijnen hier.","card.year_records.title":"Records van het Jaar","card.year_records.subtitle":"{count} van {total} behaald dit jaar","empty.year_records.title":"Nog geen records dit jaar","empty.year_records.subtitle":"Je persoonlijke records van dit jaar verschijnen hier.","card.running_dynamics.title":"Loopdynamiek","card.running_dynamics.subtitle":"{activity} - laatste {count} trainingen","empty.running_dynamics.title":"Nog niet genoeg gegevens","empty.running_dynamics.subtitle":"Vereist een paar recente hardlooptrainingen met cadansgegevens.","card.weekly_steps_goal.title":"Weekdoel: Stappen","card.weekly_steps_goal.subtitle":"{value} van {goal} stappen","empty.weekly_steps_goal.title":"Nog geen stapgegevens","editor.weekly_steps_goal_label":"Weekdoel (stappen)","card.goals_overview.title":"Doelenoverzicht","card.goals_overview.subtitle":"Deze week","empty.goals_overview.title":"Nog geen doelgegevens","card.week_compare.title":"Deze Week vs Vorige Week","card.week_compare.subtitle":"Voortschrijdende 7-daagse totalen","empty.week_compare.title":"Nog niet genoeg geschiedenis","empty.week_compare.subtitle":"Kom over ongeveer een week terug voor een vergelijking.","week_compare.legend_now":"Deze week","week_compare.legend_prev":"Vorige week","card.sleep_detail.title":"Slaapdetail","card.sleep_detail.subtitle":"Afgelopen nacht","label.awake":"Wakker","label.sleep_other":"Overige slaap","sleep_detail.total_sleep":"totale slaap","sleep_detail.in_bed":"{duration} in bed","sleep_detail.bedtime":"Naar bed","sleep_detail.wake":"Wakker worden","sleep_detail.stages":"Slaapfasen","sleep_detail.efficiency":"Slaapefficiëntie","sleep_detail.efficiency_sub":"Slaaptijd ÷ tijd in bed","sleep_detail.vitals":"Waarden","sleep_detail.insight_excellent":"{pct}% diepe slaap · een uitstekend hersteltraject.","sleep_detail.insight_solid":"{pct}% diepe slaap · een solide herstel.","sleep_detail.insight_light":"{pct}% diepe slaap · lichter dan gebruikelijk.","editor.energy_goal_source_label":"Caloriedoel uit","editor.sleep_goal_source_label":"Slaapdoel uit","editor.training_goal_source_label":"Trainingstijddoel uit","editor.energy_goal_label":"Dagdoel (actieve kcal)","editor.sleep_goal_label":"Slaapdoel (uren)","editor.training_goal_label":"Weekdoel (uren)","editor.show_goals_label":"Doelen tonen","editor.source_suunto_none":"Suunto-app (geen doel ingesteld)","editor.distance_goal_hint":"De Suunto-app heeft geen afstandsdoel, dus dit is altijd je eigen doel.","card.daily_goals.title":"Dagdoelen","card.daily_goals.subtitle":"Stappen, calorieën en slaap","empty.daily_goals.title":"Nog geen doelgegevens","stat.active_kcal":"Actieve kcal","stat.sleep":"Slaap","stat.training_time":"Trainingstijd","goal.of":"van {goal}","goal.energy_active_of":"{kcal} actief van {goal}","sleep_goal.label":"Slaapdoel","sleep_goal.short":"{value} van {goal} · {missing} tekort","sleep_goal.met":"{value} van {goal} · doel gehaald","sleep_trends.nights_at_goal":"Nachten op doel","sleep_trends.avg_vs_goal":"Gem. vs doel","sleep_trends.legend_goal":"Doel {goal}","card.ai_insight.title":"AI-analyse","empty.ai_insight.title":"AI-analyse staat uit","empty.ai_insight.subtitle":"Zet hem aan in de integratie: Configureren -> Dagelijkse AI-analyse","empty.ai_insight.waiting":"Vandaag nog geen AI-analyse","ai_insight.generating":"Analyse wordt gemaakt","ai_insight.night":"nacht {night}","ai_insight.no_night":"afgelopen nacht nog niet gesynchroniseerd","ai_insight.no_section":"Geen gegevens voor dit onderdeel","ai_insight.advice":"Adviezen voor vandaag","ai_insight.disclaimer":"Geen medisch advies","ai_insight.section.sleep":"Slaap","ai_insight.section.recovery":"Herstel","ai_insight.section.training":"Training","ai_insight.section.activity":"Activiteit","ai_insight.section_full.sleep":"Slaap","ai_insight.section_full.recovery":"Gezondheid en herstel","ai_insight.section_full.training":"Training","ai_insight.section_full.activity":"Dagelijkse activiteit","ai_insight.status.good":"Goed","ai_insight.status.ok":"OK","ai_insight.status.caution":"Opgepast","ai_insight.status.rest":"Rust","strategy.title":"Training","strategy.none":"Geen Suunto-account","strategy.none_text":"Geen account van de Suunto App-integratie gevonden. Voeg de integratie toe via Instellingen > Apparaten en diensten en laad dit dashboard opnieuw.","strategy.section.today":"Vandaag","strategy.section.ai":"AI-analyse","strategy.section.sleep":"Slaap","strategy.section.recovery":"Herstel","strategy.section.last_workout":"Laatste training","strategy.section.load":"Belasting en vorm","strategy.section.week":"Deze week","strategy.section.records":"Records","strategy.section.history":"Geschiedenis en profiel","strategy.section.gear":"Uitrusting en woon-werk","card.ai_weekly.title":"AI-weekoverzicht","empty.ai_weekly.subtitle":"Vereist ha-suunto 1.0.38 of nieuwer met AI ingeschakeld: Configureren -> AI","empty.ai_weekly.waiting":"Nog geen AI-weekoverzicht","ai_weekly.week":"week {range}","ai_weekly.advice":"Plan voor volgende week","editor.ai_report_label":"Rapport","editor.ai_report_daily":"Dagelijkse analyse","editor.ai_report_weekly":"Weekoverzicht","editor.ai_section_label":"Onderdeel","editor.ai_single_label":"Alleen dit onderdeel tonen","card.sleep_regularity.title":"Slaapregelmaat","sleep_regularity.subtitle":"Laatste 4 weken · {nights} nachten","empty.sleep_regularity.title":"Nog niet genoeg nachten","empty.sleep_regularity.subtitle":"Heeft ongeveer een week opeenvolgende nachten met het horloge nodig.","sleep_regularity.bed":"Gem. naar bed {time}","sleep_regularity.wake":"Gem. wakker {time}","sleep_regularity.mid_work":"Slaapmidden, nachten zo-do {time}","sleep_regularity.mid_free":"Slaapmidden, nachten vr/za {time}","band.regularity.regular":"Regelmatig","band.regularity.fair":"Redelijk regelmatig","band.regularity.irregular":"Onregelmatig","chip.regularity":"Regelmaat {value}","chip.social_jetlag":"Sociale jetlag {value}","card.aerobic_decoupling.title":"Aerobe ontkoppeling","empty.aerobic_decoupling.title":"Nog geen lange training geanalyseerd","empty.aerobic_decoupling.subtitle":"Verschijnt na een training van 40+ minuten met gps en hartslag.","aerobic_decoupling.analyzed":"{minutes} min geanalyseerd","aerobic_decoupling.hint":"onder 5 % = stevige aerobe basis","aerobic_decoupling.first_half":"1e helft","aerobic_decoupling.second_half":"2e helft","aerobic_decoupling.trend":"Laatste {count} geanalyseerde trainingen","band.decoupling.coupled":"Gekoppeld","band.decoupling.moderate":"Matige drift","band.decoupling.high":"Sterke drift","stat.decoupling":"Hartslagdrift","card.personal_insights.title":"Wat voor jou werkt","personal_insights.subtitle":"Uit je laatste {nights} nachten","empty.personal_insights.title":"Nog geen duidelijke patronen","empty.personal_insights.subtitle":"Heeft een paar weken slaap- en trainingsdata nodig. Alleen duidelijke verschillen worden getoond.","personal_insights.these_nights":"deze nachten","personal_insights.the_rest":"de rest","personal_insights.nights_count":"{with} vs {without} nachten","personal_insights.disclaimer":"Patronen in je eigen data, geen bewijs van oorzaak. Een bevinding vraagt minstens 4 nachten of trainingen aan elke kant.","insights.cond.late_workout":"Na een training die na {time} eindigt","insights.cond.training_day":"Op trainingsdagen","insights.cond.hard_day":"Na je zwaarste trainingsdagen","insights.cond.early_bed":"Als je voor {bedtime} naar bed gaat","insights.cond.free_night":"In de nachten van vrijdag en zaterdag","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Rusthartslag","insights.metric.sleep":"Slaap","daily_brief.your_pattern":"Jouw patroon","editor.show_insight_label":"Sterkste patroon tonen","editor.look_section":"Weergave","editor.title":"Titel","editor.icon":"Pictogram (bijv. mdi:star)","editor.accent_color":"Accentkleur (bijv. #e91e63 of teal)","editor.accent_hint":"Dezelfde kleur in lichte en donkere modus. Een ongeldige kleur wordt genegeerd.","editor.accent_default":"Standaard (amber)","editor.accent_pink":"Roze","editor.accent_purple":"Paars","editor.accent_teal":"Petrol","editor.accent_green":"Groen","editor.accent_blue":"Blauw","editor.hide_header":"Koptekst verbergen","editor.hide_icon":"Pictogram verbergen","editor.hide_subtitle":"Ondertitel verbergen","editor.hide_legend":"Legenda verbergen","editor.text_size":"Tekstgrootte","text_size.normal":"Normaal","text_size.large":"Groot (115%)","text_size.larger":"Groter (130%)","text_size.largest":"Grootst (150%)","editor.language":"Taal","editor.language_auto":"Die van Home Assistant","editor.hide_sync_warning":"Synchronisatiemelding verbergen","editor.max_items":"Aantal items","editor.list_height":"Lijsthoogte (px)","card.stress_today.title":"Stress en herstel","stress_today.subtitle_today":"Vandaag tot {time}","stress_today.subtitle_waiting":"Gisteren · vandaag nog niet gesynchroniseerd","stress_today.yesterday":"Gisteren","empty.stress_today.title":"Nog geen stressgegevens","empty.stress_today.subtitle":"Vereist Suunto App (unofficial) 1.0.37 of nieuwer en een gesynchroniseerd horloge.","stress.state.recovering":"Herstel","stress.state.active":"Actief","stress.state.inactive":"Inactief","stress.state.stressed":"Gestrest","insights.cond.hot_weather":"Bij hitte (vanaf {temp}°C)","insights.cond.cold_weather":"Bij kou (tot {temp}°C)","insights.metric.efficiency":"Efficiëntie","insights.unit.per_beat":"m/slag","personal_insights.subtitle_days":"Uit je laatste {nights} nachten en {days} trainingsdagen","personal_insights.these_workouts":"deze trainingen","personal_insights.workouts_count":"{with} vs {without} trainingen","personal_insights.speed_at_hr":"{with_speed} km/u bij {with_hr} bpm vs {without_speed} km/u bij {without_hr} bpm","sync.at":"gesynchroniseerd {time}","sync.yesterday":"gesynchroniseerd gisteren {time}","chip.not_synced":"Horloge al {hours} u niet gesynchroniseerd","editor.eink":"E-ink-scherm","eink.off":"Uit","eink.bw":"Zwart-wit","eink.gray":"4 grijstinten","eink.red":"Zwart, wit en rood","eink.yellow":"Zwart, wit en geel","eink.color":"6 kleuren","editor.max_lines":"Max. regels tekst","card.whats_new.title":"Wat is er nieuw","card.whats_new.subtitle":"Laatste {days} dagen","whats_new.today":"Vandaag","whats_new.yesterday":"Gisteren","whats_new.now":"Nu","whats_new.empty":"Niets nieuws in de laatste {days} dagen","whats_new.record":"Nieuw record: {label} {value}","whats_new.record_year":"Record van het jaar: {label} {value}","whats_new.record_month":"Record van de maand: {label} {value}","whats_new.best_effort":"Beste prestatie {distance}: {time}","whats_new.ai_daily":"Dagelijkse AI-analyse","whats_new.ai_weekly":"AI-weekoverzicht","whats_new.gear_due":"{name}: tijd voor onderhoud","editor.whats_new_show":"Tonen","whats_new.kind.workouts":"Trainingen","whats_new.kind.records":"Records en beste prestaties","whats_new.kind.achievements":"Prestaties op de route","whats_new.kind.ai":"AI-rapporten","whats_new.kind.gear":"Onderhoud uitrusting"},uk:{"stat.distance":"Дистанція","stat.duration":"Тривалість","stat.avg_speed":"Сер. швидкість","stat.avg_pace":"Сер. темп","stat.avg_hr":"Сер. пульс","stat.max_hr":"Макс. пульс","stat.training_effect":"Тренувальний ефект","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Самопочуття","stat.energy":"Енергія","stat.time":"Час","stat.workouts":"Тренування","stat.steps":"Кроки","stat.heart_rate":"Пульс","stat.quality":"Якість","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Пульс у спокої","stat.resting_hr_delta":"Пульс у спокої ({delta})","stat.spo2":"SpO2","stat.stress_level":"Стан стресу","stat.recovery_window":"Час відновлення","stat.ctl":"CTL · тренованість","stat.atl":"ATL · втома","stat.tsb":"TSB · форма","stat.readiness":"Готовність","stat.recovery_balance":"Баланс відновлення","stat.training_suggestion":"Рекомендація на сьогодні","stat.volume":"Обсяг","stat.intensity":"Інтенсивність","stat.consistency":"Регулярність","stat.recovery":"Відновлення","stat.variety":"Різноманітність","card.hr_zones.title":"Пульсові зони","card.hr_zones.last_workout":"Останнє тренування","card.sleep_readiness.title":"Сон і готовність","card.sleep_readiness.subtitle_no_wake":"Сон {duration}","card.sleep_readiness.subtitle_with_wake":"Сон {duration} · пробудження {time}","card.recovery.title":"Відновлення","card.training_load.title":"Тренувальне навантаження","card.training_load.subtitle_fallback":"Тренд тренованості (CTL)","card.week_stats.title":"Цей тиждень і весь час","card.week_stats.subtitle":"Останні 7 днів","card.week_stats.lifetime_title":"За весь час за видами спорту","card.today.title":"Сьогодні","card.today.subtitle":"Наживо з вашого годинника","card.training_status.title":"Тренувальний статус","card.training_profile.title":"Тренувальний профіль","card.training_profile.subtitle":"Ваші тренування з першого погляду","card.heart_rate.title":"Пульс","empty.last_workout.title":"Немає останнього тренування","empty.last_workout.subtitle":"Синхронізуйте годинник із застосунком Suunto, щоб побачити його тут.","empty.hr_zones.title":"Немає даних про зони","empty.hr_zones.subtitle":"Наступне тренування на вулиці з нагрудним пульсометром заповнить цю картку.","empty.sleep_readiness.title":"Даних про сон ще немає","empty.sleep_readiness.subtitle":"Спіть у годиннику, щоб побачити дані тут.","empty.recovery.title":"Даних про відновлення ще немає","empty.training_load.title":"Розраховуємо тренувальне навантаження","empty.training_load.subtitle":"Для розрахунку потрібна невелика історія тренувань - загляньте сюди після кількох занять.","empty.week_stats.title":"Історії тренувань ще немає","empty.today.title":"Живих даних ще немає","empty.training_status.title":"Поки що замало даних","empty.training_status.subtitle":"Для розрахунку потрібна невелика історія тренувань.","empty.training_profile.title":"Поки що замало даних","empty.training_profile.subtitle":"Для розрахунку профілю потрібні дані ще кількох сенсорів.","empty.heart_rate.title":"Живого пульсу ще немає","empty.loading":"Завантаження...","empty.generic_error":"Не вдалося завантажити дані Suunto.","error.no_device":"Пристрій Suunto не знайдено - чи налаштовано інтеграцію suunto_app?","error.multiple_devices":'Знайдено кілька пристроїв Suunto - вкажіть "device_id" у конфігурації картки.',"error.device_missing":'Налаштований пристрій "{device}" не має сутностей suunto_app.',"band.readiness.great":"Чудово","band.readiness.fair":"Нормально","band.readiness.low":"Низька","band.recovery.well":"Добре відновлено","band.recovery.partial":"Частково відновлено","band.recovery.low":"Слабке відновлення","band.recovery.fully":"Повністю відновлено","band.recovery.recovering":"Відновлення · залишилося {time}","band.hrv.low":"HRV низький","band.hrv.high":"HRV високий","band.hrv.balanced":"HRV збалансований","band.form.fresh":"Свіжість","band.form.neutral":"Нейтрально","band.form.fatigued":"Втома","band.form.very_fatigued":"Сильна втома","band.acwr.safe":"Безпечна зона","band.acwr.low":"Низьке навантаження","band.acwr.high":"Високе навантаження - ризик травми","band.suggestion.hard":"Можна викластися","band.suggestion.moderate":"Помірне зусилля","band.suggestion.easy":"Сьогодні легко","band.suggestion.rest":"День відпочинку","chip.workout_logged_today":"Сьогодні є тренування","chip.workout_today":"Тренування сьогодні","chip.recovering":"Відновлення","chip.nap":"Денний сон {minutes} хв","chip.nap_earlier":"Денний сон {minutes} хв (раніше)","chip.workouts_30d":"Тренувань за останні 30 днів: {count}","chip.acwr":"ACWR {value} · {label}","profile.summary":"Найсильніше: {strong} · найслабше: {light}","chip.more_activity_one":"+{count} вид активності","chip.more_activity_other":"+{count} видів активності","chip.unusual_recovery":"Незвичне відновлення","chip.days_since_one":"{count} день після останнього тренування","chip.days_since_other":"Днів після останнього тренування: {count}","chip.manually_added":"Додано вручну","chip.sleep_stale":"Немає сну за минулу ніч · ніч {date}","readiness.balance_only":"Лише баланс відновлення, без сну","chip.no_hr":"Без пульсу","card.heart_rate.measured":"Виміряно {time}","card.heart_rate.measured_ago":"Виміряно {ago} · {time}","stat.energy_active_sub":"{kcal} активних","energy.total_unit":"kcal загалом","energy.split":"{active} активних · {bmr} BMR","card.commute.title":"Поїздки на роботу","card.commute.subtitle_year":"Цього року замість автомобіля","card.commute.subtitle_month":"Цього місяця замість автомобіля","commute.saved":"заощаджено","commute.fuel_co2":"{fuel} l пального · на {co2} kg менше CO2","stat.rides":"Поїздки","stat.days":"Дні","stat.avg_time":"Сер. час","commute.this_month":"Цього місяця:","commute.this_year":"Цього року:","commute.rides_n":"Поїздок: {n}","empty.commute.title":"Поїздок на роботу ще немає","empty.commute.subtitle":"Тут з'являються тренування, які Suunto позначає як поїздку на роботу.","card.gear.title":"Спорядження","card.gear.subtitle":"Пробіг і обслуговування","gear.remaining":"Залишилося {km}","gear.over":"Перевищено на {km}","chip.service":"Обслуговування","empty.gear.title":"Спорядження ще не відстежується","empty.gear.subtitle":"Додайте спорядження в меню Налаштувати інтеграції.","card.form_forecast.title":"Прогноз форми","card.form_forecast.subtitle":"Якщо відпочивати від сьогодні","stat.tomorrow":"Завтра","stat.peak_in":"Пік через {days} дн.","stat.maintenance":"Утримання / тиж.","empty.form_forecast.title":"Прогнозу ще немає","card.daily_brief.title":"Підсумок дня","empty.daily_brief.title":"Підсумку ще немає","achievement.count_one":"{count} досягнення","achievement.count_other":"Досягнень: {count}","achievement.rank":"Місце #{rank} на цьому маршруті","label.zone":"Зона {n}","label.deep":"Глибокий","label.light":"Легкий","label.rem":"REM","editor.auto_detect":"Ця картка сама знаходить ваш пристрій Suunto - налаштування не потрібні.","editor.pick_device":"Знайдено кілька пристроїв Suunto - виберіть, з якого ця картка має читати дані.","editor.device_label":"Пристрій Suunto","editor.units_label":"Одиниці","editor.units_metric":"Метричні (km)","editor.units_imperial":"Імперські (mi)","editor.compact_label":"Компактний режим","editor.days_label":"Період тренду (дні)","editor.period_label":"Основний період","editor.period_year":"Цей рік","editor.period_month":"Цей місяць","editor.goal_source_label":"Ціль кроків із","editor.source_suunto":"Застосунок Suunto ({value})","editor.source_suunto_default":"Застосунок Suunto (ціль не задано, використовується {value})","editor.source_custom":"Власне значення","editor.fuel_source_label":"Дані про пальне з","editor.source_integration":"Інтеграція Suunto ({litres} l/100 km, {price} за l)","editor.source_integration_unknown":"Інтеграція Suunto","editor.fuel_consumption_label":"Витрата пального (l/100 km)","editor.fuel_price_label":"Ціна пального за літр","editor.fuel_hint":"Змініть значення інтеграції в Налаштування > Пристрої та служби > Suunto > Налаштувати.","card.lifetime.title":"Підсумки за весь час","card.lifetime.subtitle":"Від самого початку","stat.active_days":"Активні дні","empty.lifetime.title":"Даних за весь час ще немає","card.recent_workouts.title":"Останні тренування","empty.recent_workouts.title":"Немає останніх тренувань","card.elevation.title":"Висота і підйоми","stat.ascent":"Набір висоти","stat.descent":"Спуск","stat.ascent_time":"Час підйому","stat.descent_time":"Час спуску","stat.min_altitude":"Мін. висота","stat.max_altitude":"Макс. висота","stat.ascent_rate":"Швидкість підйому","empty.elevation.title":"Немає даних про висоту","empty.elevation.subtitle":"Їх записують лише тренування на вулиці з барометром.","card.location.title":"Місце старту","location.open_in_maps":"Відкрити на карті","empty.location.title":"Немає даних про місце","empty.location.subtitle":"Тренування в приміщенні не мають точки старту GPS.","card.fitness.title":"Тренованість","stat.vo2max":"VO2max","stat.estimated_vo2max":"Розрах. VO2max","stat.fitness_age":"Фітнес-вік","fitness.measured":"Виміряно {time} · {activity}","empty.fitness.title":"Даних про тренованість ще немає","empty.fitness.subtitle":"Suunto розраховує це лише з тренувань із бігу або ходьби.","empty.fitness_trend.title":"Даних про тренованість ще немає","empty.fitness_trend.subtitle":"Suunto розраховує це лише з тренувань із бігу або ходьби.","card.pmc.title":"Керування формою","card.pmc.subtitle":"Тренд за {days} дн.","card.recovery_trends.title":"Тренди відновлення","card.recovery_trends.subtitle":"Базовий рівень за {days} дн.","empty.recovery_trends.title":"Даних про тренд відновлення ще немає","card.weekly_volume.title":"Тижневий обсяг","card.weekly_volume.subtitle":"Останні 12 тижнів","empty.weekly_volume.title":"Даних про тижневий обсяг ще немає","stat.average":"Середнє","stat.total":"Разом","card.hr_curve.title":"Крива пульсу","card.hr_curve.subtitle":"Останні 24 години","stat.hr_now":"Зараз","stat.hr_min":"Мін. сьогодні","stat.hr_max":"Макс. сьогодні","empty.hr_curve.title":"Живих даних пульсу ще немає","empty.hr_curve.subtitle":"Носіть годинник і синхронізуйте його, щоб побачити сьогоднішню криву.","card.sleep_trends.title":"Тренди сну","card.sleep_trends.subtitle":"Останні ночі: {days}","empty.sleep_trends.title":"Даних про тренд сну ще немає","card.weekly_goal.title":"Тижнева ціль","card.weekly_goal.subtitle":"{value} з {goal} km","empty.weekly_goal.title":"Тижневої дистанції ще немає","editor.goal_label":"Тижнева ціль (km)","card.streak.title":"Серія активності","card.streak.subtitle":"Останні 14 днів","streak.window_count_one":"{count} активний день","streak.window_count_other":"Активних днів: {count}","streak.days_one":"Серія: {count} день","streak.days_other":"Серія: {count} дн.","streak.none":"Активної серії немає - рушайте вже сьогодні","empty.streak.title":"Історії тренувань ще немає","just_finished.title":"Чудова робота!","just_finished.idle.title":"Чекаємо на наступне тренування","just_finished.idle.subtitle":"Ця картка засвітиться одразу після того, як годинник синхронізує нове тренування.","empty.just_finished.title":"Немає останнього тренування","card.activity_trends.title":"Тренди активності","card.activity_trends.subtitle":"Останні дні: {days}","empty.activity_trends.title":"Даних про тренд активності ще немає","card.recovery_balance_trend.title":"Тренд балансу відновлення","card.recovery_balance_trend.subtitle":"Останні дні: {days}","empty.recovery_balance_trend.title":"Даних про тренд відновлення ще немає","card.readiness_trend.title":"Тренд готовності","card.readiness_trend.subtitle":"Останні дні: {days}","empty.readiness_trend.title":"Даних про тренд готовності ще немає","stat.cadence":"Каденс","stat.stride_length":"Крок","stat.pct_hrmax":"% від макс. пульсу","stat.sleep_avg_hr":"Сер. пульс уві сні","stat.sleep_min_hr":"Мін. пульс уві сні","chip.bedtime":"Відбій {time}","card.activity_calendar.title":"Календар активності","card.activity_calendar.subtitle":"Останні 6 тижнів","empty.activity_calendar.title":"Історії тренувань ще немає","activity_calendar.active_days_one":"{count} активний день","activity_calendar.active_days_other":"Активних днів: {count}","card.workout_comparison.title":"Порівняння тренувань","card.workout_comparison.vs":"проти {time}","empty.workout_comparison.title":"Поки немає схожих тренувань","empty.workout_comparison.subtitle":"Виконайте той самий вид активності двічі, щоб побачити порівняння.","stat.distance_delta":"Дистанція ({delta})","stat.duration_delta":"Тривалість ({delta})","stat.avg_hr_delta":"Сер. пульс ({delta})","stat.pace_delta":"Темп ({delta})","card.milestones.title":"У цифрах","card.milestones.subtitle":"Від самого початку","empty.milestones.title":"Даних за весь час ще немає","stat.earth_laps":"Кола навколо Землі","stat.marathons":"Марафони","stat.moon_pct":"% шляху до Місяця","stat.burgers":"Бургери","card.athlete_profile.title":"Тренувальний характер","empty.athlete_profile.title":"Поки що замало даних","personality.activity.cycling":"Велосипедист","personality.activity.running":"Бігун","personality.activity.trekking":"Турист","personality.activity.walking":"Любитель ходьби","personality.activity.gym":"Силовик","personality.activity.swim":"Плавець","personality.activity.ski":"Лижник","personality.activity.row":"Веслувальник","personality.activity.other":"Мультиспортсмен","personality.schedule.weekend":"Воїн вихідного дня","personality.schedule.weekday":"Завсідник буднів","personality.schedule.balanced":"Збалансований графік","personality.time.morning":"Ранній птах","personality.time.afternoon":"Активний удень","personality.time.evening":"Вечірній атлет","personality.time.night":"Нічна сова","card.pace_trend.title":"Тренд темпу","card.pace_trend.subtitle":"{activity} · останні заняття: {count}","empty.pace_trend.title":"Поки немає схожих тренувань","empty.pace_trend.subtitle":"Виконайте той самий вид активності кілька разів, щоб побачити тренд.","pace_trend.faster":"Стаєте швидшими","pace_trend.slower":"Стаєте повільнішими","pace_trend.steady":"Стабільно","card.lap_splits.title":"Відрізки за колами","empty.lap_splits.title":"Немає даних про кола","empty.lap_splits.subtitle":"Не кожне тренування має кола - наступне з ними заповнить цю картку.","stat.laps":"Кола","stat.fastest_lap":"Найшвидше коло","label.lap":"Коло {n}","card.training_effect_trend.title":"Тренд тренувального ефекту","card.fitness_trend.title":"Тренд тренованості","empty.training_effect_trend.title":"Даних про тренувальний ефект ще немає","achievements.badge.around_globe":"Навколо світу","achievements.badge.century_club":"Клуб сотні - 100 тренувань","achievements.badge.consistency_king":"Король регулярності - серія 14 днів","achievements.badge.iron_will":"Залізна воля - серія 30 днів","achievements.badge.days_100":"100 активних днів","achievements.badge.distance_1000":"Клуб 1000 km","achievements.badge.distance_5000":"Клуб 5000 km","achievements.badge.elite_engine":"Елітний двигун - VO2max 55+","achievements.badge.energy_100k":"Спалено 100 000 kcal","achievements.badge.energy_1m":"Спалено 1 000 000 kcal","achievements.badge.full_year":"Цілий рік в активності","achievements.badge.hours_100":"100 годин","achievements.badge.hours_500":"500 годин","achievements.badge.jack_of_all_trades":"Майстер на всі руки - 5+ видів спорту","achievements.badge.multi_sport":"Мультиспортсмен - 3+ види спорту","achievements.badge.solid_engine":"Надійний двигун - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ тренувань","achievements.badge.workouts_1000":"1000 тренувань","achievements.badge.workouts_250":"250 тренувань","achievements.badge.workouts_500":"500 тренувань","achievements.category.days":"Активні дні","achievements.category.distance":"Дистанція","achievements.category.energy":"Енергія","achievements.category.fitness":"Рівень тренованості","achievements.category.records":"Особисті рекорди","achievements.category.time":"Час тренувань","achievements.category.variety":"Різноманітність","achievements.category.workouts":"Записані тренування","card.achievements.subtitle":"Відкрито {unlocked} з {total}","card.achievements.title":"Досягнення","achievements.next":"Далі: {name} ({pct}%)","class.rest":"+{pct}% інші активності","class.tag":"Збірка з фокусом на {activity}","empty.achievements.subtitle":"Запишіть кілька тренувань, щоб почати відкривати значки.","empty.achievements.title":"Досягнень ще немає","empty.class.subtitle":"Запишіть кілька тренувань, щоб дізнатися свій клас.","empty.class.title":"Поки що замало даних","empty.level.subtitle":"Перше синхронізоване тренування почне ваш підйом.","empty.level.title":"Даних за весь час ще немає","empty.player.subtitle":"Для розрахунку ваших характеристик потрібна невелика історія тренувань.","empty.player.title":"Поки що замало даних","level.label":"РІВЕНЬ","level.source":"Записано тренувань: {count}","level.subtitle":"На основі вашого тренувального навантаження за весь час","level.title.grinder":"Витривалий трудяга","level.title.legend":"Жива легенда","level.title.novice":"Новобранець","level.title.veteran":"Досвідчений ветеран","level.xp_to_next":"{xp} XP до рівня {level}","level.xp_total":"{xp} XP","player.archetype":"Спеціаліст: {activity}","player.help.title":"Що це означає","player.help.sta":"STA · Витривалість, з вашої тренованості (CTL): яке стабільне тренувальне навантаження ви витримуєте","player.help.pwr":"PWR · Сила, із середньої інтенсивності (TSS) ваших останніх занять","player.help.rec":"REC · Відновлення, ваш поточний показник готовності","player.help.con":"CON · Регулярність, тренування за останні 30 днів","player.help.end":"END · Витривалість, з вашого розрахункового VO2max","player.help.frm":"FRM · Форма, з вашого поточного балансу тренувального стресу (TSB)","player.help.disclaimer":"Евристичні оцінки, розраховані з ваших власних даних - не офіційний показник Suunto.","player.tier.bronze":"Бронза","player.tier.gold":"Золото","player.tier.legendary":"Легенда","player.tier.silver":"Срібло","records.climb":"Найбільший підйом","records.distance":"Найдовше за дистанцією тренування","records.pace":"Найшвидший темп","records.session":"Найважче заняття","records.streak":"Найдовша серія","records.streak_days_one":"{count} день","records.streak_days_other":"{count} дн.","records.workout":"Найтриваліше тренування","class.name.cycling":"Воїн витривалості","class.name.running":"Спринтер","class.name.trekking":"Першопроходець","class.name.walking":"Мандрівник","class.name.gym":"Силовий берсерк","class.name.swim":"Повелитель хвиль","class.name.ski":"Сніговий бігун","class.name.row":"Весляр","class.name.other":"Універсал","class.flavor.cycling":"Створений для довгих рівних зусиль, а не для чистої швидкості. Усі інші види спорту - лише кросова підготовка для двигуна.","class.flavor.running":"Швидкий старт і любов до темпу. Дистанція - лише засіб.","class.flavor.trekking":"Як удома на пересіченій місцевості, годинами долає кілометри.","class.flavor.walking":"Рівні кілометри без ударного навантаження складаються докупи - регулярність понад інтенсивність.","class.flavor.gym":"Сила понад дистанцію. Силові заняття на першому місці.","class.flavor.swim":"Витривалість, загартована у воді, гребок за гребком.","class.flavor.ski":"Швидкість і ритм серед снігу та холоду.","class.flavor.row":"Ритмічна сила, гребок за гребком.","class.flavor.other":"Жоден вид спорту не домінує - справді збалансоване поєднання.","card.next_milestone.title":"Наступний рубіж","card.next_milestone.subtitle":"Дистанція за весь час","empty.next_milestone.title":"Дистанції за весь час ще немає","next_milestone.remaining_label":"залишилося","next_milestone.target":"до {target} km за весь час - пройдено {pct}%","next_milestone.workouts_one":"{count} тренування до {target} за весь час","next_milestone.workouts_other":"Тренувань до {target} за весь час: {count}","next_milestone.eta_one":"при {pace} km/тиждень - залишився приблизно {weeks} тиждень","next_milestone.eta_other":"при {pace} km/тиждень - залишилося приблизно {weeks} тиж.","card.story.title":"Ваша історія Suunto","card.story.subtitle":"Від першого тренування","empty.story.title":"Даних за весь час ще немає","story.top_activity":"{activity} - ваша основна активність","story.top_activity_share":"Тренувань: {count} - {pct}% вашої історії","story.record_subtitle":"Ваш особистий рекорд за весь час","card.sleep_clock.title":"Годинник сну","card.sleep_clock.subtitle":"Минула ніч","empty.sleep_clock.title":"Даних про сон ще немає","empty.sleep_clock.subtitle":"Спіть у годиннику, щоб побачити дані тут.","sleep_clock.quality":"Якість сну {pct}%","card.sleep_rhythm.title":"Ритм сну","card.sleep_rhythm.subtitle":"Останні 7 ночей","empty.sleep_rhythm.title":"Поки що замала історія сну","empty.sleep_rhythm.subtitle":"Щоб побачити закономірність, потрібні дані кількох ночей.","sleep_rhythm.avg_bedtime":"Сер. відбій {time}","sleep_rhythm.avg_wake":"Сер. пробудження {time}","sleep_rhythm.spread":"Розкид {minutes} хв","sleep_rhythm.legend_normal":"Типова ніч","sleep_rhythm.legend_outlier":"{minutes}+ хв від середнього","card.route.title":"Маршрут","empty.route.title":"Немає даних про маршрут","empty.route.subtitle":"Тренування в приміщенні не мають треку GPS.","route.pace_slower":"Повільніше","route.pace_faster":"Швидше","card.month_story.title":"Цей місяць","empty.month_story.title":"Цього місяця ще немає тренувань","story.share_month":"Тренувань: {count} - {pct}% цього місяця","story.record_subtitle_month":"Ваш рекорд цього місяця","card.year_story.title":"Цей рік","empty.year_story.title":"Цього року ще немає тренувань","story.share_year":"Тренувань: {count} - {pct}% цього року","story.record_subtitle_year":"Ваш рекорд цього року","card.best_efforts.title":"Найкращі результати","card.best_efforts.subtitle":"Записано {count} з {total}","empty.best_efforts.title":"Найкращих результатів ще немає","empty.best_efforts.subtitle":"Записуються з бігових тренувань відтепер, без перерахунку минулих.","best_efforts.not_yet":"Ще не записано","distance.half_marathon":"Напівмарафон","distance.marathon":"Марафон","card.steps_today.title":"Кроки сьогодні","card.steps_today.subtitle":"Ціль: {goal} кроків","empty.steps_today.title":"Даних про кроки ще немає","editor.steps_goal_label":"Денна ціль (кроки)","steps_today.goal_pct":"{pct}% денної цілі","steps_today.vs_avg_up":"+{pct}% порівняно із середнім за 7 днів ({avg})","steps_today.vs_avg_down":"-{pct}% порівняно із середнім за 7 днів ({avg})","card.steps_trend.title":"Тренд кроків","card.steps_trend.subtitle":"Останні дні: {days}","empty.steps_trend.title":"Історії кроків ще немає","steps_trend.legend_met":"Ціль досягнуто","steps_trend.legend_below":"Нижче цілі","steps_trend.days_at_goal":"Дні з досягнутою ціллю","card.month_records.title":"Рекорди цього місяця","card.month_records.subtitle":"Встановлено {count} з {total} цього місяця","empty.month_records.title":"Цього місяця ще немає рекордів","empty.month_records.subtitle":"Тут з'являться особисті рекорди цього місяця.","card.year_records.title":"Рекорди цього року","card.year_records.subtitle":"Встановлено {count} з {total} цього року","empty.year_records.title":"Цього року ще немає рекордів","empty.year_records.subtitle":"Тут з'являться особисті рекорди цього року.","card.running_dynamics.title":"Динаміка бігу","card.running_dynamics.subtitle":"{activity} - останні тренування: {count}","empty.running_dynamics.title":"Поки що замало даних","empty.running_dynamics.subtitle":"Потрібно кілька недавніх пішохідних чи бігових тренувань із даними каденсу.","card.weekly_steps_goal.title":"Тижнева ціль кроків","card.weekly_steps_goal.subtitle":"{value} з {goal} кроків","empty.weekly_steps_goal.title":"Даних про кроки ще немає","editor.weekly_steps_goal_label":"Тижнева ціль (кроки)","card.goals_overview.title":"Огляд цілей","card.goals_overview.subtitle":"Цей тиждень","empty.goals_overview.title":"Даних про цілі ще немає","card.week_compare.title":"Цей тиждень проти минулого","card.week_compare.subtitle":"Ковзні підсумки за 7 днів","empty.week_compare.title":"Поки що замала історія","empty.week_compare.subtitle":"Загляньте приблизно через тиждень, щоб побачити порівняння.","week_compare.legend_now":"Цей тиждень","week_compare.legend_prev":"Минулий тиждень","card.sleep_detail.title":"Деталі сну","card.sleep_detail.subtitle":"Минула ніч","label.awake":"Неспання","label.sleep_other":"Інший сон","sleep_detail.total_sleep":"загалом сну","sleep_detail.in_bed":"{duration} у ліжку","sleep_detail.bedtime":"Відбій","sleep_detail.wake":"Пробудження","sleep_detail.stages":"Фази сну","sleep_detail.efficiency":"Ефективність сну","sleep_detail.efficiency_sub":"Час сну ÷ час у ліжку","sleep_detail.vitals":"Життєві показники","sleep_detail.insight_excellent":"{pct}% глибокого сну · чудове вікно для відновлення.","sleep_detail.insight_solid":"{pct}% глибокого сну · добре нічне відновлення.","sleep_detail.insight_light":"{pct}% глибокого сну · легший, ніж зазвичай.","editor.energy_goal_source_label":"Ціль калорій із","editor.sleep_goal_source_label":"Ціль сну з","editor.training_goal_source_label":"Ціль часу тренувань із","editor.energy_goal_label":"Денна ціль (активні kcal)","editor.sleep_goal_label":"Ціль сну (години)","editor.training_goal_label":"Тижнева ціль (години)","editor.show_goals_label":"Показувати цілі","editor.source_suunto_none":"Застосунок Suunto (ціль не задано)","editor.distance_goal_hint":"У застосунку Suunto немає цілі дистанції, тож ця ціль завжди ваша власна.","card.daily_goals.title":"Денні цілі","card.daily_goals.subtitle":"Кроки, калорії та сон","empty.daily_goals.title":"Даних про цілі ще немає","stat.active_kcal":"Активні kcal","stat.sleep":"Сон","stat.training_time":"Час тренувань","goal.of":"з {goal}","goal.energy_active_of":"{kcal} активних з {goal}","sleep_goal.label":"Ціль сну","sleep_goal.short":"{value} з {goal} · бракує {missing}","sleep_goal.met":"{value} з {goal} · ціль досягнуто","sleep_trends.nights_at_goal":"Ночі з досягнутою ціллю","sleep_trends.avg_vs_goal":"Середнє проти цілі","sleep_trends.legend_goal":"Ціль {goal}","card.ai_insight.title":"Аналіз ШІ","empty.ai_insight.title":"Аналіз ШІ вимкнено","empty.ai_insight.subtitle":"Увімкніть його в інтеграції: Налаштувати -> Щоденний аналіз ШІ","empty.ai_insight.waiting":"Сьогодні аналізу ШІ ще немає","ai_insight.generating":"Аналіз створюється","ai_insight.night":"ніч {night}","ai_insight.no_night":"минула ніч ще не синхронізована","ai_insight.no_section":"Немає даних для цього розділу","ai_insight.advice":"Поради на сьогодні","ai_insight.disclaimer":"Не є медичною порадою","ai_insight.section.sleep":"Сон","ai_insight.section.recovery":"Відновлення","ai_insight.section.training":"Тренування","ai_insight.section.activity":"Активність","ai_insight.section_full.sleep":"Сон","ai_insight.section_full.recovery":"Здоров'я та відновлення","ai_insight.section_full.training":"Тренування","ai_insight.section_full.activity":"Денна активність","ai_insight.status.good":"Добре","ai_insight.status.ok":"OK","ai_insight.status.caution":"Обережно","ai_insight.status.rest":"Відпочинок","strategy.title":"Тренування","strategy.none":"Немає облікового запису Suunto","strategy.none_text":"Не знайдено облікового запису з інтеграції Suunto App. Додайте інтеграцію в Налаштування > Пристрої та служби, а потім перезавантажте цю панель.","strategy.section.today":"Сьогодні","strategy.section.ai":"Аналіз ШІ","strategy.section.sleep":"Сон","strategy.section.recovery":"Відновлення","strategy.section.last_workout":"Останнє тренування","strategy.section.load":"Навантаження і форма","strategy.section.week":"Цей тиждень","strategy.section.records":"Рекорди","strategy.section.history":"Історія і профіль","strategy.section.gear":"Спорядження і поїздки","card.ai_weekly.title":"Тижневий підсумок ШІ","empty.ai_weekly.subtitle":"Потрібна ha-suunto 1.0.38 або новіша з увімкненим ШІ: Налаштувати -> ШІ","empty.ai_weekly.waiting":"Тижневого підсумку ШІ ще немає","ai_weekly.week":"тиждень {range}","ai_weekly.advice":"План на наступний тиждень","editor.ai_report_label":"Звіт","editor.ai_report_daily":"Щоденний аналіз","editor.ai_report_weekly":"Тижневий підсумок","editor.ai_section_label":"Розділ","editor.ai_single_label":"Показувати лише цей розділ","card.sleep_regularity.title":"Регулярність сну","sleep_regularity.subtitle":"Останні 4 тижні · ночей: {nights}","empty.sleep_regularity.title":"Поки що замало ночей","empty.sleep_regularity.subtitle":"Потрібно приблизно тиждень ночей поспіль у годиннику.","sleep_regularity.bed":"Сер. відбій {time}","sleep_regularity.wake":"Сер. пробудження {time}","sleep_regularity.mid_work":"Середина сну, ночі нд-чт {time}","sleep_regularity.mid_free":"Середина сну, ночі пт/сб {time}","band.regularity.regular":"Регулярний","band.regularity.fair":"Досить регулярний","band.regularity.irregular":"Нерегулярний","chip.regularity":"Регулярність {value}","chip.social_jetlag":"Соціальний джетлаг {value}","card.aerobic_decoupling.title":"Аеробне роз'єднання","empty.aerobic_decoupling.title":"Ще не проаналізовано жодного довгого тренування","empty.aerobic_decoupling.subtitle":"З'являється після тренування від 40 хвилин із GPS і пульсом.","aerobic_decoupling.analyzed":"Проаналізовано {minutes} хв","aerobic_decoupling.hint":"менше 5 % = міцна аеробна база","aerobic_decoupling.first_half":"1-ша половина","aerobic_decoupling.second_half":"2-га половина","aerobic_decoupling.trend":"Останні проаналізовані тренування: {count}","band.decoupling.coupled":"Узгоджено","band.decoupling.moderate":"Помірний дрейф","band.decoupling.high":"Сильний дрейф","stat.decoupling":"Дрейф пульсу","card.personal_insights.title":"Що вам підходить","personal_insights.subtitle":"За останні ночі ({nights})","empty.personal_insights.title":"Чітких закономірностей ще немає","empty.personal_insights.subtitle":"Потрібно кілька тижнів даних про сон і тренування. Показуються лише чіткі відмінності.","personal_insights.these_nights":"ці ночі","personal_insights.the_rest":"решта","personal_insights.nights_count":"Ночі: {with} проти {without}","personal_insights.disclaimer":"Закономірності у ваших власних даних, а не доказ причини. Для висновку потрібно щонайменше 4 ночі або тренування з кожного боку.","insights.cond.late_workout":"Після тренування, що закінчується після {time}","insights.cond.training_day":"У тренувальні дні","insights.cond.hard_day":"Після ваших найважчих тренувальних днів","insights.cond.early_bed":"Коли ви лягаєте спати до {bedtime}","insights.cond.free_night":"У ночі з п'ятниці та суботи","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Пульс у спокої","insights.metric.sleep":"Сон","daily_brief.your_pattern":"Ваша закономірність","editor.show_insight_label":"Показувати вашу найсильнішу закономірність","editor.look_section":"Вигляд","editor.title":"Заголовок","editor.icon":"Іконка (наприклад, mdi:star)","editor.accent_color":"Акцентний колір (наприклад, #e91e63 або teal)","editor.accent_hint":"Той самий колір у світлій і темній темі. Неправильний колір ігнорується.","editor.accent_default":"Типовий (бурштиновий)","editor.accent_pink":"Рожевий","editor.accent_purple":"Фіолетовий","editor.accent_teal":"Бірюзовий","editor.accent_green":"Зелений","editor.accent_blue":"Синій","editor.hide_header":"Приховати заголовок","editor.hide_icon":"Приховати іконку","editor.hide_subtitle":"Приховати підзаголовок","editor.hide_legend":"Приховати легенду","editor.text_size":"Розмір тексту","text_size.normal":"Звичайний","text_size.large":"Великий (115%)","text_size.larger":"Більший (130%)","text_size.largest":"Найбільший (150%)","editor.language":"Мова","editor.language_auto":"Мова Home Assistant","editor.hide_sync_warning":"Приховати попередження про відсутність синхронізації","editor.max_items":"Кількість елементів","editor.list_height":"Висота списку (px)","card.stress_today.title":"Стрес і відновлення","stress_today.subtitle_today":"Сьогодні до {time}","stress_today.subtitle_waiting":"Учора · сьогоднішні дані ще не синхронізовано","stress_today.yesterday":"Учора","empty.stress_today.title":"Даних про стрес ще немає","empty.stress_today.subtitle":"Потрібна Suunto App (unofficial) 1.0.37 або новіша і синхронізований годинник.","stress.state.recovering":"Відновлення","stress.state.active":"Активність","stress.state.inactive":"Неактивність","stress.state.stressed":"Стрес","insights.cond.hot_weather":"У спеку ({temp}°C і вище)","insights.cond.cold_weather":"У холод ({temp}°C і нижче)","insights.metric.efficiency":"Ефективність","insights.unit.per_beat":"м/удар","personal_insights.subtitle_days":"За останні ночі ({nights}) і тренувальні дні ({days})","personal_insights.these_workouts":"ці тренування","personal_insights.workouts_count":"Тренування: {with} проти {without}","personal_insights.speed_at_hr":"{with_speed} km/h при {with_hr} bpm проти {without_speed} km/h при {without_hr} bpm","sync.at":"синхронізовано {time}","sync.yesterday":"синхронізовано вчора {time}","chip.not_synced":"Годинник не синхронізувався {hours} h","editor.eink":"Екран e-ink","eink.off":"Вимкнено","eink.bw":"Чорно-білий","eink.gray":"4 відтінки сірого","eink.red":"Чорний, білий і червоний","eink.yellow":"Чорний, білий і жовтий","eink.color":"6 кольорів","editor.max_lines":"Макс. рядків тексту","card.whats_new.title":"Що нового","card.whats_new.subtitle":"Останні {days} дн.","whats_new.today":"Сьогодні","whats_new.yesterday":"Вчора","whats_new.now":"Зараз","whats_new.empty":"Нічого нового за останні {days} дн.","whats_new.record":"Новий рекорд: {label} {value}","whats_new.record_year":"Рекорд року: {label} {value}","whats_new.record_month":"Рекорд місяця: {label} {value}","whats_new.best_effort":"Найкращий результат {distance}: {time}","whats_new.ai_daily":"Щоденний аналіз ШІ","whats_new.ai_weekly":"Тижневий підсумок ШІ","whats_new.gear_due":"{name}: час на обслуговування","editor.whats_new_show":"Показувати","whats_new.kind.workouts":"Тренування","whats_new.kind.records":"Рекорди і найкращі результати","whats_new.kind.achievements":"Досягнення на маршруті","whats_new.kind.ai":"Звіти ШІ","whats_new.kind.gear":"Обслуговування спорядження"},ru:{"stat.distance":"Дистанция","stat.duration":"Длительность","stat.avg_speed":"Ср. скорость","stat.avg_pace":"Ср. темп","stat.avg_hr":"Ср. пульс","stat.max_hr":"Макс. пульс","stat.training_effect":"Тренировочный эффект","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Самочувствие","stat.energy":"Энергия","stat.time":"Время","stat.workouts":"Тренировки","stat.steps":"Шаги","stat.heart_rate":"Пульс","stat.quality":"Качество","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Пульс в покое","stat.resting_hr_delta":"Пульс в покое ({delta})","stat.spo2":"SpO2","stat.stress_level":"Состояние стресса","stat.recovery_window":"Время восстановления","stat.ctl":"CTL · тренированность","stat.atl":"ATL · усталость","stat.tsb":"TSB · форма","stat.readiness":"Готовность","stat.recovery_balance":"Баланс восстановления","stat.training_suggestion":"Рекомендация на сегодня","stat.volume":"Объем","stat.intensity":"Интенсивность","stat.consistency":"Регулярность","stat.recovery":"Восстановление","stat.variety":"Разнообразие","card.hr_zones.title":"Пульсовые зоны","card.hr_zones.last_workout":"Последняя тренировка","card.sleep_readiness.title":"Сон и готовность","card.sleep_readiness.subtitle_no_wake":"Сон {duration}","card.sleep_readiness.subtitle_with_wake":"Сон {duration} · подъем в {time}","card.recovery.title":"Восстановление","card.training_load.title":"Тренировочная нагрузка","card.training_load.subtitle_fallback":"Тренд тренированности (CTL)","card.week_stats.title":"Неделя и все время","card.week_stats.subtitle":"Последние 7 дней","card.week_stats.lifetime_title":"За все время по видам спорта","card.today.title":"Сегодня","card.today.subtitle":"В реальном времени с ваших часов","card.training_status.title":"Тренировочный статус","card.training_profile.title":"Тренировочный профиль","card.training_profile.subtitle":"Ваши тренировки с первого взгляда","card.heart_rate.title":"Пульс","empty.last_workout.title":"Нет недавних тренировок","empty.last_workout.subtitle":"Синхронизируйте часы с приложением Suunto, чтобы увидеть ее здесь.","empty.hr_zones.title":"Нет данных по зонам","empty.hr_zones.subtitle":"Следующая тренировка на улице с нагрудным пульсометром заполнит эту карточку.","empty.sleep_readiness.title":"Данных о сне пока нет","empty.sleep_readiness.subtitle":"Спите в часах, чтобы увидеть данные здесь.","empty.recovery.title":"Данных о восстановлении пока нет","empty.training_load.title":"Собираем вашу тренировочную нагрузку","empty.training_load.subtitle":"Для расчета нужна небольшая история тренировок - загляните после нескольких занятий.","empty.week_stats.title":"Истории тренировок пока нет","empty.today.title":"Оперативных данных пока нет","empty.training_status.title":"Пока недостаточно данных","empty.training_status.subtitle":"Для расчета нужна небольшая история тренировок.","empty.training_profile.title":"Пока недостаточно данных","empty.training_profile.subtitle":"Для расчета профиля нужно, чтобы данные передавали еще несколько сенсоров.","empty.heart_rate.title":"Данных о пульсе в реальном времени пока нет","empty.loading":"Загрузка...","empty.generic_error":"Не удалось загрузить данные Suunto.","error.no_device":"Устройство Suunto не найдено - настроена ли интеграция suunto_app?","error.multiple_devices":'Найдено несколько устройств Suunto - укажите "device_id" в конфигурации карточки.',"error.device_missing":'У настроенного устройства "{device}" нет объектов suunto_app.',"band.readiness.great":"Отлично","band.readiness.fair":"Нормально","band.readiness.low":"Низкая","band.recovery.well":"Хорошо восстановлены","band.recovery.partial":"Частично восстановлены","band.recovery.low":"Слабое восстановление","band.recovery.fully":"Полностью восстановлены","band.recovery.recovering":"Восстановление · осталось {time}","band.hrv.low":"HRV низкий","band.hrv.high":"HRV высокий","band.hrv.balanced":"HRV сбалансирован","band.form.fresh":"Свежесть","band.form.neutral":"Нейтрально","band.form.fatigued":"Усталость","band.form.very_fatigued":"Сильная усталость","band.acwr.safe":"Безопасная зона","band.acwr.low":"Низкая нагрузка","band.acwr.high":"Высокая нагрузка - риск травмы","band.suggestion.hard":"Можно выложиться","band.suggestion.moderate":"Умеренная нагрузка","band.suggestion.easy":"Полегче сегодня","band.suggestion.rest":"День отдыха","chip.workout_logged_today":"Сегодня была тренировка","chip.workout_today":"Тренировка сегодня","chip.recovering":"Восстановление","chip.nap":"Дневной сон {minutes} min","chip.nap_earlier":"Дневной сон {minutes} min (ранее)","chip.workouts_30d":"Тренировок за последние 30 дней: {count}","chip.acwr":"ACWR {value} · {label}","profile.summary":"Сильнее всего: {strong} · слабее всего: {light}","chip.more_activity_one":"+{count} вид активности","chip.more_activity_other":"Еще видов активности: {count}","chip.unusual_recovery":"Необычное восстановление","chip.days_since_one":"{count} день с последней тренировки","chip.days_since_other":"{count} дн. с последней тренировки","chip.manually_added":"Добавлено вручную","chip.sleep_stale":"Нет сна за прошлую ночь · ночь {date}","readiness.balance_only":"Только баланс восстановления, без сна","chip.no_hr":"Без пульса","card.heart_rate.measured":"Измерено {time}","card.heart_rate.measured_ago":"Измерено {ago} · {time}","stat.energy_active_sub":"{kcal} активных","energy.total_unit":"kcal всего","energy.split":"{active} активных · {bmr} BMR","card.commute.title":"Поездки на работу","card.commute.subtitle_year":"В этом году вместо машины","card.commute.subtitle_month":"В этом месяце вместо машины","commute.saved":"сэкономлено","commute.fuel_co2":"{fuel} l топлива · на {co2} kg меньше CO2","stat.rides":"Поездки","stat.days":"Дни","stat.avg_time":"Ср. время","commute.this_month":"В этом месяце:","commute.this_year":"В этом году:","commute.rides_n":"Поездок: {n}","empty.commute.title":"Поездок на работу пока нет","empty.commute.subtitle":"Здесь появятся тренировки, которые Suunto отмечает как поездку на работу.","card.gear.title":"Снаряжение","card.gear.subtitle":"Пробег и обслуживание","gear.remaining":"Осталось {km}","gear.over":"Превышено на {km}","chip.service":"Обслуживание","empty.gear.title":"Снаряжение пока не отслеживается","empty.gear.subtitle":"Добавьте снаряжение в меню Настроить интеграции.","card.form_forecast.title":"Прогноз формы","card.form_forecast.subtitle":"Если отдыхать с сегодняшнего дня","stat.tomorrow":"Завтра","stat.peak_in":"Пик через {days} дн.","stat.maintenance":"Поддержание / нед.","empty.form_forecast.title":"Прогноза пока нет","card.daily_brief.title":"Сводка дня","empty.daily_brief.title":"Сводки пока нет","achievement.count_one":"{count} достижение","achievement.count_other":"Достижений: {count}","achievement.rank":"Место #{rank} на этом маршруте","label.zone":"Зона {n}","label.deep":"Глубокий","label.light":"Легкий","label.rem":"REM","editor.auto_detect":"Эта карточка сама находит ваше устройство Suunto - настраивать ничего не нужно.","editor.pick_device":"Найдено несколько устройств Suunto - выберите, какое будет читать эта карточка.","editor.device_label":"Устройство Suunto","editor.units_label":"Единицы","editor.units_metric":"Метрические (km)","editor.units_imperial":"Имперские (mi)","editor.compact_label":"Компактный режим","editor.days_label":"Окно тренда (дни)","editor.period_label":"Основной период","editor.period_year":"Этот год","editor.period_month":"Этот месяц","editor.goal_source_label":"Цель по шагам из","editor.source_suunto":"Приложение Suunto ({value})","editor.source_suunto_default":"Приложение Suunto (цель не задана, используется {value})","editor.source_custom":"Своя","editor.fuel_source_label":"Данные о топливе из","editor.source_integration":"Интеграция Suunto ({litres} l/100 km, {price} за l)","editor.source_integration_unknown":"Интеграция Suunto","editor.fuel_consumption_label":"Расход топлива (l/100 km)","editor.fuel_price_label":"Цена топлива за литр","editor.fuel_hint":"Значения интеграции меняются в Настройки > Устройства и службы > Suunto > Настроить.","card.lifetime.title":"Итоги за все время","card.lifetime.subtitle":"С самого начала","stat.active_days":"Активные дни","empty.lifetime.title":"Данных за все время пока нет","card.recent_workouts.title":"Последние тренировки","empty.recent_workouts.title":"Нет недавних тренировок","card.elevation.title":"Высота и подъемы","stat.ascent":"Подъем","stat.descent":"Спуск","stat.ascent_time":"Время подъема","stat.descent_time":"Время спуска","stat.min_altitude":"Мин. высота","stat.max_altitude":"Макс. высота","stat.ascent_rate":"Скорость подъема","empty.elevation.title":"Нет данных о высоте","empty.elevation.subtitle":"Их записывают только тренировки на улице с барометром.","card.location.title":"Место старта","location.open_in_maps":"Открыть на карте","empty.location.title":"Нет данных о местоположении","empty.location.subtitle":"У тренировок в помещении нет точки старта GPS.","card.fitness.title":"Физическая форма","stat.vo2max":"VO2max","stat.estimated_vo2max":"Расч. VO2max","stat.fitness_age":"Фитнес-возраст","fitness.measured":"Измерено {time} · {activity}","empty.fitness.title":"Данных о форме пока нет","empty.fitness.subtitle":"Suunto рассчитывает это только по бегу или ходьбе.","empty.fitness_trend.title":"Данных о форме пока нет","empty.fitness_trend.subtitle":"Suunto рассчитывает это только по бегу или ходьбе.","card.pmc.title":"Управление формой","card.pmc.subtitle":"Тренд за {days} дн.","card.recovery_trends.title":"Тренды восстановления","card.recovery_trends.subtitle":"Базовый уровень за {days} дн.","empty.recovery_trends.title":"Данных о трендах восстановления пока нет","card.weekly_volume.title":"Недельный объем","card.weekly_volume.subtitle":"Последние 12 недель","empty.weekly_volume.title":"Данных о недельном объеме пока нет","stat.average":"Среднее","stat.total":"Всего","card.hr_curve.title":"Кривая пульса","card.hr_curve.subtitle":"Последние 24 часа","stat.hr_now":"Сейчас","stat.hr_min":"Мин. сегодня","stat.hr_max":"Макс. сегодня","empty.hr_curve.title":"Данных о пульсе пока нет","empty.hr_curve.subtitle":"Носите часы и синхронизируйте их, чтобы увидеть здесь кривую за сегодня.","card.sleep_trends.title":"Тренды сна","card.sleep_trends.subtitle":"Последние ночи: {days}","empty.sleep_trends.title":"Данных о трендах сна пока нет","card.weekly_goal.title":"Недельная цель","card.weekly_goal.subtitle":"{value} из {goal} km","empty.weekly_goal.title":"Недельной дистанции пока нет","editor.goal_label":"Недельная цель (km)","card.streak.title":"Серия активности","card.streak.subtitle":"Последние 14 дней","streak.window_count_one":"{count} активный день","streak.window_count_other":"Активных дней: {count}","streak.days_one":"Серия {count} день","streak.days_other":"Серия {count} дн.","streak.none":"Активной серии нет - начните двигаться сегодня","empty.streak.title":"Истории тренировок пока нет","just_finished.title":"Отличная работа!","just_finished.idle.title":"Ждем вашу следующую тренировку","just_finished.idle.subtitle":"Карточка оживет сразу после того, как часы синхронизируют новую тренировку.","empty.just_finished.title":"Нет недавних тренировок","card.activity_trends.title":"Тренды активности","card.activity_trends.subtitle":"Последние {days} дн.","empty.activity_trends.title":"Данных о трендах активности пока нет","card.recovery_balance_trend.title":"Тренд баланса восстановления","card.recovery_balance_trend.subtitle":"Последние {days} дн.","empty.recovery_balance_trend.title":"Данных о трендах восстановления пока нет","card.readiness_trend.title":"Тренд готовности","card.readiness_trend.subtitle":"Последние {days} дн.","empty.readiness_trend.title":"Данных о трендах готовности пока нет","stat.cadence":"Каденс","stat.stride_length":"Шаг","stat.pct_hrmax":"% от макс. пульса","stat.sleep_avg_hr":"Ср. пульс во сне","stat.sleep_min_hr":"Мин. пульс во сне","chip.bedtime":"Отход ко сну {time}","card.activity_calendar.title":"Календарь активности","card.activity_calendar.subtitle":"Последние 6 недель","empty.activity_calendar.title":"Истории тренировок пока нет","activity_calendar.active_days_one":"{count} активный день","activity_calendar.active_days_other":"Активных дней: {count}","card.workout_comparison.title":"Сравнение тренировок","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Пока мало похожих тренировок","empty.workout_comparison.subtitle":"Сделайте одну и ту же активность дважды, чтобы увидеть сравнение.","stat.distance_delta":"Дистанция ({delta})","stat.duration_delta":"Длительность ({delta})","stat.avg_hr_delta":"Ср. пульс ({delta})","stat.pace_delta":"Темп ({delta})","card.milestones.title":"В цифрах","card.milestones.subtitle":"С самого начала","empty.milestones.title":"Данных за все время пока нет","stat.earth_laps":"Кругов вокруг Земли","stat.marathons":"Марафонов","stat.moon_pct":"% пути до Луны","stat.burgers":"Бургеров","card.athlete_profile.title":"Тренировочный характер","empty.athlete_profile.title":"Пока недостаточно данных","personality.activity.cycling":"Велосипедист","personality.activity.running":"Бегун","personality.activity.trekking":"Турист","personality.activity.walking":"Любитель ходьбы","personality.activity.gym":"Силовик","personality.activity.swim":"Пловец","personality.activity.ski":"Лыжник","personality.activity.row":"Гребец","personality.activity.other":"Мультиспортсмен","personality.schedule.weekend":"Воин выходного дня","personality.schedule.weekday":"Завсегдатай будней","personality.schedule.balanced":"Ровный график","personality.time.morning":"Жаворонок","personality.time.afternoon":"Дневной атлет","personality.time.evening":"Вечерний атлет","personality.time.night":"Сова","card.pace_trend.title":"Тренд темпа","card.pace_trend.subtitle":"{activity} · последние занятия: {count}","empty.pace_trend.title":"Пока мало похожих тренировок","empty.pace_trend.subtitle":"Сделайте одну и ту же активность несколько раз, чтобы увидеть тренд.","pace_trend.faster":"Становитесь быстрее","pace_trend.slower":"Становитесь медленнее","pace_trend.steady":"Стабильно","card.lap_splits.title":"Отрезки по кругам","empty.lap_splits.title":"Нет данных о кругах","empty.lap_splits.subtitle":"Не у каждой тренировки есть круги - следующая тренировка с ними заполнит эту карточку.","stat.laps":"Круги","stat.fastest_lap":"Самый быстрый круг","label.lap":"Круг {n}","card.training_effect_trend.title":"Тренд тренировочного эффекта","card.fitness_trend.title":"Тренд формы","empty.training_effect_trend.title":"Данных о тренировочном эффекте пока нет","achievements.badge.around_globe":"Вокруг света","achievements.badge.century_club":"Клуб сотни - 100 тренировок","achievements.badge.consistency_king":"Король постоянства - серия 14 дней","achievements.badge.iron_will":"Железная воля - серия 30 дней","achievements.badge.days_100":"100 активных дней","achievements.badge.distance_1000":"Клуб 1000 km","achievements.badge.distance_5000":"Клуб 5000 km","achievements.badge.elite_engine":"Элитный мотор - VO2max 55+","achievements.badge.energy_100k":"Сожжено 100 000 kcal","achievements.badge.energy_1m":"Сожжено 1 000 000 kcal","achievements.badge.full_year":"Целый год в движении","achievements.badge.hours_100":"100 часов","achievements.badge.hours_500":"500 часов","achievements.badge.jack_of_all_trades":"Мастер на все руки - 5+ видов спорта","achievements.badge.multi_sport":"Мультиспортсмен - 3+ вида спорта","achievements.badge.solid_engine":"Крепкий мотор - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ тренировок","achievements.badge.workouts_1000":"1000 тренировок","achievements.badge.workouts_250":"250 тренировок","achievements.badge.workouts_500":"500 тренировок","achievements.category.days":"Активные дни","achievements.category.distance":"Дистанция","achievements.category.energy":"Энергия","achievements.category.fitness":"Уровень формы","achievements.category.records":"Личные рекорды","achievements.category.time":"Время тренировок","achievements.category.variety":"Разнообразие","achievements.category.workouts":"Записанные тренировки","card.achievements.subtitle":"Открыто {unlocked} из {total}","card.achievements.title":"Достижения","achievements.next":"Далее: {name} ({pct}%)","class.rest":"+{pct}% других активностей","class.tag":"Упор на {activity}","empty.achievements.subtitle":"Запишите несколько тренировок, чтобы начать открывать значки.","empty.achievements.title":"Достижений пока нет","empty.class.subtitle":"Запишите несколько тренировок, чтобы узнать свой класс.","empty.class.title":"Пока недостаточно данных","empty.level.subtitle":"Первая синхронизированная тренировка начнет подъем.","empty.level.title":"Данных за все время пока нет","empty.player.subtitle":"Для расчета характеристик нужна небольшая история тренировок.","empty.player.title":"Пока недостаточно данных","level.label":"УРОВЕНЬ","level.source":"Записано тренировок: {count}","level.subtitle":"На основе вашей нагрузки за все время","level.title.grinder":"Выносливый трудяга","level.title.legend":"Живая легенда","level.title.novice":"Новобранец","level.title.veteran":"Опытный ветеран","level.xp_to_next":"{xp} XP до ур. {level}","level.xp_total":"{xp} XP","player.archetype":"Специалист: {activity}","player.help.title":"Что это значит","player.help.sta":"STA · Выносливость, по вашей тренированности (CTL): какую постоянную нагрузку вы выдерживаете","player.help.pwr":"PWR · Мощь, по средней интенсивности (TSS) ваших недавних занятий","player.help.rec":"REC · Восстановление, ваша текущая оценка готовности","player.help.con":"CON · Регулярность, тренировки за последние 30 дней","player.help.end":"END · Выносливость, по вашему расчетному VO2max","player.help.frm":"FRM · Форма, по вашему текущему балансу тренировочного стресса (TSB)","player.help.disclaimer":"Эвристические оценки по вашим собственным данным - не официальный показатель Suunto.","player.tier.bronze":"Бронза","player.tier.gold":"Золото","player.tier.legendary":"Легенда","player.tier.silver":"Серебро","records.climb":"Самый большой подъем","records.distance":"Самая длинная дистанция","records.pace":"Самый быстрый темп","records.session":"Самое тяжелое занятие","records.streak":"Самая длинная серия","records.streak_days_one":"{count} день","records.streak_days_other":"{count} дн.","records.workout":"Самая долгая тренировка","class.name.cycling":"Воин выносливости","class.name.running":"Спринтер","class.name.trekking":"Первопроходец","class.name.walking":"Странник","class.name.gym":"Силовой берсерк","class.name.swim":"Повелитель волн","class.name.ski":"Покоритель снегов","class.name.row":"Гребец","class.name.other":"Универсал","class.flavor.cycling":"Создан для долгих ровных усилий, а не для чистой скорости. Все остальные виды спорта - лишь подкачка мотора.","class.flavor.running":"Быстрый старт и любовь к темпу. Дистанция - лишь средство.","class.flavor.trekking":"Как дома на бездорожье, часами в пути.","class.flavor.walking":"Ровные километры без ударной нагрузки складываются - регулярность важнее интенсивности.","class.flavor.gym":"Сила важнее дистанции. Силовые занятия на первом месте.","class.flavor.swim":"Выносливость, закаленная в воде, гребок за гребком.","class.flavor.ski":"Скорость и ритм на снегу и морозе.","class.flavor.row":"Ритмичная мощь, гребок за гребком.","class.flavor.other":"Ни один вид спорта не преобладает - по-настоящему сбалансированный набор.","card.next_milestone.title":"Следующий рубеж","card.next_milestone.subtitle":"Дистанция за все время","empty.next_milestone.title":"Дистанции за все время пока нет","next_milestone.remaining_label":"осталось","next_milestone.target":"до {target} km за все время - пройдено {pct}%","next_milestone.workouts_one":"{count} тренировка до {target} за все время","next_milestone.workouts_other":"До {target} за все время осталось тренировок: {count}","next_milestone.eta_one":"при {pace} km/нед. - еще примерно {weeks} неделя","next_milestone.eta_other":"при {pace} km/нед. - еще примерно {weeks} нед.","card.story.title":"Ваша история Suunto","card.story.subtitle":"С первой тренировки","empty.story.title":"Данных за все время пока нет","story.top_activity":"{activity} - ваш основной вид спорта","story.top_activity_share":"Тренировок: {count} - {pct}% вашей истории","story.record_subtitle":"Ваш личный рекорд за все время","card.sleep_clock.title":"Часы сна","card.sleep_clock.subtitle":"Прошлая ночь","empty.sleep_clock.title":"Данных о сне пока нет","empty.sleep_clock.subtitle":"Спите в часах, чтобы увидеть данные здесь.","sleep_clock.quality":"Качество сна {pct}%","card.sleep_rhythm.title":"Ритм сна","card.sleep_rhythm.subtitle":"Последние 7 ночей","empty.sleep_rhythm.title":"Пока мало истории сна","empty.sleep_rhythm.subtitle":"Чтобы увидеть закономерность, нужно несколько ночей данных.","sleep_rhythm.avg_bedtime":"Ср. отход ко сну {time}","sleep_rhythm.avg_wake":"Ср. подъем {time}","sleep_rhythm.spread":"Разброс {minutes} min","sleep_rhythm.legend_normal":"Обычная ночь","sleep_rhythm.legend_outlier":"{minutes}+ min от среднего","card.route.title":"Маршрут","empty.route.title":"Нет данных о маршруте","empty.route.subtitle":"У тренировок в помещении нет трека GPS.","route.pace_slower":"Медленнее","route.pace_faster":"Быстрее","card.month_story.title":"Этот месяц","empty.month_story.title":"В этом месяце тренировок пока нет","story.share_month":"Тренировок: {count} - {pct}% этого месяца","story.record_subtitle_month":"Ваш рекорд этого месяца","card.year_story.title":"Этот год","empty.year_story.title":"В этом году тренировок пока нет","story.share_year":"Тренировок: {count} - {pct}% этого года","story.record_subtitle_year":"Ваш рекорд этого года","card.best_efforts.title":"Лучшие результаты","card.best_efforts.subtitle":"Записано {count} из {total}","empty.best_efforts.title":"Лучших результатов пока нет","empty.best_efforts.subtitle":"Записываются по беговым тренировкам с этого момента, без учета прошлых.","best_efforts.not_yet":"Еще не записано","distance.half_marathon":"Полумарафон","distance.marathon":"Марафон","card.steps_today.title":"Шаги сегодня","card.steps_today.subtitle":"Цель: {goal} шагов","empty.steps_today.title":"Данных о шагах пока нет","editor.steps_goal_label":"Дневная цель (шаги)","steps_today.goal_pct":"{pct}% дневной цели","steps_today.vs_avg_up":"+{pct}% к вашему среднему за 7 дней ({avg})","steps_today.vs_avg_down":"-{pct}% к вашему среднему за 7 дней ({avg})","card.steps_trend.title":"Тренд шагов","card.steps_trend.subtitle":"Последние {days} дн.","empty.steps_trend.title":"Истории шагов пока нет","steps_trend.legend_met":"Цель выполнена","steps_trend.legend_below":"Ниже цели","steps_trend.days_at_goal":"Дни с выполненной целью","card.month_records.title":"Рекорды месяца","card.month_records.subtitle":"Установлено {count} из {total} в этом месяце","empty.month_records.title":"В этом месяце рекордов пока нет","empty.month_records.subtitle":"Здесь появятся личные рекорды этого месяца.","card.year_records.title":"Рекорды года","card.year_records.subtitle":"Установлено {count} из {total} в этом году","empty.year_records.title":"В этом году рекордов пока нет","empty.year_records.subtitle":"Здесь появятся личные рекорды этого года.","card.running_dynamics.title":"Динамика бега","card.running_dynamics.subtitle":"{activity} - последние тренировки: {count}","empty.running_dynamics.title":"Пока недостаточно данных","empty.running_dynamics.subtitle":"Нужно несколько недавних пеших или беговых тренировок с данными каденса.","card.weekly_steps_goal.title":"Недельная цель по шагам","card.weekly_steps_goal.subtitle":"{value} из {goal} шагов","empty.weekly_steps_goal.title":"Данных о шагах пока нет","editor.weekly_steps_goal_label":"Недельная цель (шаги)","card.goals_overview.title":"Обзор целей","card.goals_overview.subtitle":"Эта неделя","empty.goals_overview.title":"Данных о целях пока нет","card.week_compare.title":"Эта неделя и прошлая","card.week_compare.subtitle":"Итоги за скользящие 7 дней","empty.week_compare.title":"Пока мало истории","empty.week_compare.subtitle":"Загляните примерно через неделю, чтобы увидеть сравнение.","week_compare.legend_now":"Эта неделя","week_compare.legend_prev":"Прошлая неделя","card.sleep_detail.title":"Подробности сна","card.sleep_detail.subtitle":"Прошлая ночь","label.awake":"Бодрствование","label.sleep_other":"Прочий сон","sleep_detail.total_sleep":"всего сна","sleep_detail.in_bed":"{duration} в постели","sleep_detail.bedtime":"Отход ко сну","sleep_detail.wake":"Подъем","sleep_detail.stages":"Фазы сна","sleep_detail.efficiency":"Эффективность сна","sleep_detail.efficiency_sub":"Время сна ÷ время в постели","sleep_detail.vitals":"Показатели","sleep_detail.insight_excellent":"{pct}% глубокого сна · отличное окно для восстановления.","sleep_detail.insight_solid":"{pct}% глубокого сна · хорошее восстановление за ночь.","sleep_detail.insight_light":"{pct}% глубокого сна · сон легче обычного.","editor.energy_goal_source_label":"Цель по калориям из","editor.sleep_goal_source_label":"Цель по сну из","editor.training_goal_source_label":"Цель по времени тренировок из","editor.energy_goal_label":"Дневная цель (активные kcal)","editor.sleep_goal_label":"Цель по сну (часы)","editor.training_goal_label":"Недельная цель (часы)","editor.show_goals_label":"Показывать цели","editor.source_suunto_none":"Приложение Suunto (цель не задана)","editor.distance_goal_hint":"В приложении Suunto нет цели по дистанции, поэтому эта цель всегда ваша собственная.","card.daily_goals.title":"Дневные цели","card.daily_goals.subtitle":"Шаги, калории и сон","empty.daily_goals.title":"Данных о целях пока нет","stat.active_kcal":"Активные kcal","stat.sleep":"Сон","stat.training_time":"Время тренировок","goal.of":"из {goal}","goal.energy_active_of":"{kcal} активных из {goal}","sleep_goal.label":"Цель по сну","sleep_goal.short":"{value} из {goal} · не хватает {missing}","sleep_goal.met":"{value} из {goal} · цель выполнена","sleep_trends.nights_at_goal":"Ночи с выполненной целью","sleep_trends.avg_vs_goal":"Среднее к цели","sleep_trends.legend_goal":"Цель {goal}","card.ai_insight.title":"Анализ ИИ","empty.ai_insight.title":"Анализ ИИ выключен","empty.ai_insight.subtitle":"Включите его в интеграции: Настроить -> Ежедневный анализ и недельная сводка ИИ","empty.ai_insight.waiting":"Анализа ИИ на сегодня пока нет","ai_insight.generating":"Создаем анализ","ai_insight.night":"ночь {night}","ai_insight.no_night":"прошлая ночь еще не синхронизирована","ai_insight.no_section":"Нет данных для этого раздела","ai_insight.advice":"Советы на сегодня","ai_insight.disclaimer":"Не медицинская консультация","ai_insight.section.sleep":"Сон","ai_insight.section.recovery":"Восстановление","ai_insight.section.training":"Тренировки","ai_insight.section.activity":"Активность","ai_insight.section_full.sleep":"Сон","ai_insight.section_full.recovery":"Здоровье и восстановление","ai_insight.section_full.training":"Тренировки","ai_insight.section_full.activity":"Дневная активность","ai_insight.status.good":"Хорошо","ai_insight.status.ok":"Норма","ai_insight.status.caution":"Осторожно","ai_insight.status.rest":"Отдых","strategy.title":"Тренировки","strategy.none":"Нет учетной записи Suunto","strategy.none_text":"Не найдена учетная запись из интеграции Suunto App. Добавьте интеграцию в Настройки > Устройства и службы, затем перезагрузите эту панель.","strategy.section.today":"Сегодня","strategy.section.ai":"Анализ ИИ","strategy.section.sleep":"Сон","strategy.section.recovery":"Восстановление","strategy.section.last_workout":"Последняя тренировка","strategy.section.load":"Нагрузка и форма","strategy.section.week":"Эта неделя","strategy.section.records":"Рекорды","strategy.section.history":"История и профиль","strategy.section.gear":"Снаряжение и поездки","card.ai_weekly.title":"Недельная сводка ИИ","empty.ai_weekly.subtitle":"Нужен ha-suunto 1.0.38 или новее с включенным ИИ: Настроить -> ИИ","empty.ai_weekly.waiting":"Недельной сводки ИИ пока нет","ai_weekly.week":"неделя {range}","ai_weekly.advice":"План на следующую неделю","editor.ai_report_label":"Отчет","editor.ai_report_daily":"Ежедневный анализ","editor.ai_report_weekly":"Недельная сводка","editor.ai_section_label":"Раздел","editor.ai_single_label":"Показывать только этот раздел","card.sleep_regularity.title":"Регулярность сна","sleep_regularity.subtitle":"Последние 4 недели · ночей: {nights}","empty.sleep_regularity.title":"Пока мало ночей","empty.sleep_regularity.subtitle":"Нужна примерно неделя ночей подряд в часах.","sleep_regularity.bed":"Ср. отход ко сну {time}","sleep_regularity.wake":"Ср. подъем {time}","sleep_regularity.mid_work":"Середина сна, ночи вс-чт {time}","sleep_regularity.mid_free":"Середина сна, ночи пт/сб {time}","band.regularity.regular":"Регулярный","band.regularity.fair":"Довольно регулярный","band.regularity.irregular":"Нерегулярный","chip.regularity":"Регулярность {value}","chip.social_jetlag":"Социальный джетлаг {value}","card.aerobic_decoupling.title":"Дрейф пульса","empty.aerobic_decoupling.title":"Длинных тренировок для анализа пока нет","empty.aerobic_decoupling.subtitle":"Появится после тренировки от 40 минут с GPS и пульсом.","aerobic_decoupling.analyzed":"Проанализировано {minutes} min","aerobic_decoupling.hint":"меньше 5 % = хорошая аэробная база","aerobic_decoupling.first_half":"1-я половина","aerobic_decoupling.second_half":"2-я половина","aerobic_decoupling.trend":"Последние проанализированные тренировки: {count}","band.decoupling.coupled":"Без дрейфа","band.decoupling.moderate":"Умеренный дрейф","band.decoupling.high":"Сильный дрейф","stat.decoupling":"Дрейф пульса","card.personal_insights.title":"Что вам помогает","personal_insights.subtitle":"По последним ночам: {nights}","empty.personal_insights.title":"Явных закономерностей пока нет","empty.personal_insights.subtitle":"Нужно несколько недель данных о сне и тренировках. Показываются только явные различия.","personal_insights.these_nights":"эти ночи","personal_insights.the_rest":"остальные","personal_insights.nights_count":"Ночи: {with} vs {without}","personal_insights.disclaimer":"Закономерности в ваших собственных данных, а не доказательство причины. Для вывода нужно минимум 4 ночи или тренировки с каждой стороны.","insights.cond.late_workout":"После тренировки с окончанием после {time}","insights.cond.training_day":"В дни тренировок","insights.cond.hard_day":"После ваших самых тяжелых тренировочных дней","insights.cond.early_bed":"При отходе ко сну до {bedtime}","insights.cond.free_night":"В ночи на субботу и воскресенье","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Пульс в покое","insights.metric.sleep":"Сон","daily_brief.your_pattern":"Ваша закономерность","editor.show_insight_label":"Показывать самую явную закономерность","editor.look_section":"Внешний вид","editor.title":"Заголовок","editor.icon":"Значок (например mdi:star)","editor.accent_color":"Цвет акцента (например #e91e63 или teal)","editor.accent_hint":"Один и тот же цвет в светлой и темной теме. Неверный цвет игнорируется.","editor.accent_default":"По умолчанию (янтарный)","editor.accent_pink":"Розовый","editor.accent_purple":"Фиолетовый","editor.accent_teal":"Бирюзовый","editor.accent_green":"Зеленый","editor.accent_blue":"Синий","editor.hide_header":"Скрыть заголовок","editor.hide_icon":"Скрыть значок","editor.hide_subtitle":"Скрыть подзаголовок","editor.hide_legend":"Скрыть легенду","editor.text_size":"Размер текста","text_size.normal":"Обычный","text_size.large":"Крупный (115%)","text_size.larger":"Крупнее (130%)","text_size.largest":"Самый крупный (150%)","editor.language":"Язык","editor.language_auto":"Как в Home Assistant","editor.hide_sync_warning":"Скрыть предупреждение об отсутствии синхронизации","editor.max_items":"Количество элементов","editor.list_height":"Высота списка (px)","card.stress_today.title":"Стресс и восстановление","stress_today.subtitle_today":"Сегодня до {time}","stress_today.subtitle_waiting":"Вчера · сегодняшние данные еще не синхронизированы","stress_today.yesterday":"Вчера","empty.stress_today.title":"Данных о стрессе пока нет","empty.stress_today.subtitle":"Нужна Suunto App (unofficial) 1.0.37 или новее и синхронизированные часы.","stress.state.recovering":"Восстановление","stress.state.active":"Активность","stress.state.inactive":"Покой","stress.state.stressed":"Стресс","insights.cond.hot_weather":"В жару ({temp}°C и выше)","insights.cond.cold_weather":"В холод ({temp}°C и ниже)","insights.metric.efficiency":"Эффективность","insights.unit.per_beat":"m/удар","personal_insights.subtitle_days":"По последним ночам ({nights}) и тренировочным дням ({days})","personal_insights.these_workouts":"эти тренировки","personal_insights.workouts_count":"Тренировки: {with} vs {without}","personal_insights.speed_at_hr":"{with_speed} km/h при {with_hr} bpm vs {without_speed} km/h при {without_hr} bpm","sync.at":"синхронизация {time}","sync.yesterday":"синхронизация вчера {time}","chip.not_synced":"Часы не синхронизировались {hours} h","editor.eink":"Экран e-ink","eink.off":"Выключено","eink.bw":"Черно-белый","eink.gray":"4 оттенка серого","eink.red":"Черный, белый и красный","eink.yellow":"Черный, белый и желтый","eink.color":"6 цветов","editor.max_lines":"Макс. строк текста","card.whats_new.title":"Что нового","card.whats_new.subtitle":"Последние {days} дн.","whats_new.today":"Сегодня","whats_new.yesterday":"Вчера","whats_new.now":"Сейчас","whats_new.empty":"Ничего нового за последние {days} дн.","whats_new.record":"Новый рекорд: {label} {value}","whats_new.record_year":"Рекорд года: {label} {value}","whats_new.record_month":"Рекорд месяца: {label} {value}","whats_new.best_effort":"Лучший результат {distance}: {time}","whats_new.ai_daily":"Ежедневный анализ ИИ","whats_new.ai_weekly":"Недельная сводка ИИ","whats_new.gear_due":"{name}: пора на обслуживание","editor.whats_new_show":"Показывать","whats_new.kind.workouts":"Тренировки","whats_new.kind.records":"Рекорды и лучшие результаты","whats_new.kind.achievements":"Достижения на маршруте","whats_new.kind.ai":"Отчеты ИИ","whats_new.kind.gear":"Обслуживание снаряжения"},fi:{"stat.distance":"Matka","stat.duration":"Kesto","stat.avg_speed":"Keskinopeus","stat.avg_pace":"Keskivauhti","stat.avg_hr":"Keskisyke","stat.max_hr":"Maksimisyke","stat.training_effect":"Harjoitusvaikutus","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Tuntemus","stat.energy":"Energia","stat.time":"Aika","stat.workouts":"Harjoitukset","stat.steps":"Askeleet","stat.heart_rate":"Syke","stat.quality":"Laatu","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Leposyke","stat.resting_hr_delta":"Leposyke ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stressitila","stat.recovery_window":"Palautumisaika","stat.ctl":"CTL · kunto","stat.atl":"ATL · väsymys","stat.tsb":"TSB · vire","stat.readiness":"Valmius","stat.recovery_balance":"Palautumistasapaino","stat.training_suggestion":"Päivän suositus","stat.volume":"Määrä","stat.intensity":"Teho","stat.consistency":"Säännöllisyys","stat.recovery":"Palautuminen","stat.variety":"Monipuolisuus","card.hr_zones.title":"Sykealueet","card.hr_zones.last_workout":"Viimeisin harjoitus","card.sleep_readiness.title":"Uni ja valmius","card.sleep_readiness.subtitle_no_wake":"{duration} unta","card.sleep_readiness.subtitle_with_wake":"{duration} unta · herätys {time}","card.recovery.title":"Palautuminen","card.training_load.title":"Harjoituskuorma","card.training_load.subtitle_fallback":"Kunnon (CTL) kehitys","card.week_stats.title":"Tämä viikko ja kaikkiaan","card.week_stats.subtitle":"Viimeiset 7 päivää","card.week_stats.lifetime_title":"Kaikkiaan lajeittain","card.today.title":"Tänään","card.today.subtitle":"Suoraan kellostasi","card.training_status.title":"Harjoitustila","card.training_profile.title":"Harjoitusprofiili","card.training_profile.subtitle":"Harjoittelusi yhdellä silmäyksellä","card.heart_rate.title":"Syke","empty.last_workout.title":"Ei viimeaikaisia harjoituksia","empty.last_workout.subtitle":"Synkronoi kello Suunto-sovellukseen, niin harjoitus näkyy täällä.","empty.hr_zones.title":"Ei sykealuetietoja","empty.hr_zones.subtitle":"Seuraava ulkoharjoituksesi sykevyön kanssa täyttää tämän.","empty.sleep_readiness.title":"Ei vielä unitietoja","empty.sleep_readiness.subtitle":"Pidä kelloa yöllä, niin unesi näkyy täällä.","empty.recovery.title":"Ei vielä palautumistietoja","empty.training_load.title":"Harjoituskuormaa lasketaan","empty.training_load.subtitle":"Laskenta vaatii hieman harjoitushistoriaa - katso uudelleen muutaman harjoituksen jälkeen.","empty.week_stats.title":"Ei vielä harjoitushistoriaa","empty.today.title":"Ei vielä reaaliaikaisia tietoja","empty.training_status.title":"Tietoja ei ole vielä tarpeeksi","empty.training_status.subtitle":"Laskenta vaatii hieman harjoitushistoriaa.","empty.training_profile.title":"Tietoja ei ole vielä tarpeeksi","empty.training_profile.subtitle":"Profiilin laskemiseen tarvitaan tietoja useammalta anturilta.","empty.heart_rate.title":"Ei vielä reaaliaikaista sykettä","empty.loading":"Ladataan...","empty.generic_error":"Suunto-tietoja ei voitu ladata.","error.no_device":"Suunto-laitetta ei löytynyt - onko suunto_app-integraatio määritetty?","error.multiple_devices":'Löytyi useita Suunto-laitteita - aseta "device_id" kortin asetuksiin.',"error.device_missing":'Määritetyllä laitteella "{device}" ei ole suunto_app-entiteettejä.',"band.readiness.great":"Erinomainen","band.readiness.fair":"Kohtalainen","band.readiness.low":"Matala","band.recovery.well":"Hyvin palautunut","band.recovery.partial":"Osittain palautunut","band.recovery.low":"Heikko palautuminen","band.recovery.fully":"Täysin palautunut","band.recovery.recovering":"Palautumassa · {time} jäljellä","band.hrv.low":"HRV matala","band.hrv.high":"HRV korkea","band.hrv.balanced":"HRV tasapainossa","band.form.fresh":"Virkeä","band.form.neutral":"Neutraali","band.form.fatigued":"Väsynyt","band.form.very_fatigued":"Erittäin väsynyt","band.acwr.safe":"Turvallinen alue","band.acwr.low":"Matala kuorma","band.acwr.high":"Korkea kuorma - loukkaantumisriski","band.suggestion.hard":"Anna mennä","band.suggestion.moderate":"Kohtalainen rasitus","band.suggestion.easy":"Ota rauhallisesti","band.suggestion.rest":"Lepopäivä","chip.workout_logged_today":"Harjoitus kirjattu tänään","chip.workout_today":"Harjoitus tänään","chip.recovering":"Palautumassa","chip.nap":"{minutes} min päiväunet","chip.nap_earlier":"{minutes} min päiväunet (aiemmin)","chip.workouts_30d":"{count} harjoitusta viimeisen 30 päivän aikana","chip.acwr":"ACWR {value} · {label}","profile.summary":"Vahvin: {strong} · kevyin: {light}","chip.more_activity_one":"+{count} muu laji","chip.more_activity_other":"+{count} muuta lajia","chip.unusual_recovery":"Poikkeava palautuminen","chip.days_since_one":"{count} päivä edellisestä harjoituksesta","chip.days_since_other":"{count} päivää edellisestä harjoituksesta","chip.manually_added":"Lisätty käsin","chip.sleep_stale":"Ei unta viime yöltä · yö {date}","readiness.balance_only":"Vain palautumistasapaino, ei unta","chip.no_hr":"Ei sykettä","card.heart_rate.measured":"Mitattu {time}","card.heart_rate.measured_ago":"Mitattu {ago} · {time}","stat.energy_active_sub":"{kcal} aktiivista","energy.total_unit":"kcal yhteensä","energy.split":"{active} aktiivista · {bmr} BMR","card.commute.title":"Työmatkat","card.commute.subtitle_year":"Tänä vuonna auton sijaan","card.commute.subtitle_month":"Tässä kuussa auton sijaan","commute.saved":"säästetty","commute.fuel_co2":"{fuel} l polttoainetta · {co2} kg vähemmän CO2:ta","stat.rides":"Matkat","stat.days":"Päivät","stat.avg_time":"Keskiaika","commute.this_month":"Tässä kuussa:","commute.this_year":"Tänä vuonna:","commute.rides_n":"{n} matkaa","empty.commute.title":"Ei vielä työmatkoja","empty.commute.subtitle":"Harjoitukset, jotka Suunto merkitsee työmatkoiksi, näkyvät täällä.","card.gear.title":"Varusteet","card.gear.subtitle":"Matka ja huolto","gear.remaining":"{km} jäljellä","gear.over":"{km} yli","chip.service":"Huolto","empty.gear.title":"Ei vielä seurattavia varusteita","empty.gear.subtitle":"Lisää varusteita integraation Määritä-valikosta.","card.form_forecast.title":"Vireennuste","card.form_forecast.subtitle":"Jos lepäät tästä päivästä alkaen","stat.tomorrow":"Huomenna","stat.peak_in":"Huippu {days} pv päästä","stat.maintenance":"Kunnon ylläpito / vk","empty.form_forecast.title":"Ei vielä ennustetta","card.daily_brief.title":"Päivän katsaus","empty.daily_brief.title":"Ei vielä katsausta","achievement.count_one":"{count} saavutus","achievement.count_other":"{count} saavutusta","achievement.rank":"Sija {rank} tällä reitillä","label.zone":"Alue {n}","label.deep":"Syvä","label.light":"Kevyt","label.rem":"REM","editor.auto_detect":"Tämä kortti tunnistaa Suunto-laitteesi automaattisesti - asetuksia ei tarvita.","editor.pick_device":"Löytyi useita Suunto-laitteita - valitse, mistä laitteesta tämä kortti lukee tiedot.","editor.device_label":"Suunto-laite","editor.units_label":"Yksiköt","editor.units_metric":"Metriset (km)","editor.units_imperial":"Brittiläiset (mi)","editor.compact_label":"Tiivis tila","editor.days_label":"Kehitysjakso (päivää)","editor.period_label":"Pääjakso","editor.period_year":"Tämä vuosi","editor.period_month":"Tämä kuukausi","editor.goal_source_label":"Askeltavoitteen lähde","editor.source_suunto":"Suunto-sovellus ({value})","editor.source_suunto_default":"Suunto-sovellus (ei tavoitetta, käytetään arvoa {value})","editor.source_custom":"Oma","editor.fuel_source_label":"Polttoainetietojen lähde","editor.source_integration":"Suunto-integraatio ({litres} l/100 km, {price} / l)","editor.source_integration_unknown":"Suunto-integraatio","editor.fuel_consumption_label":"Polttoaineenkulutus (l/100 km)","editor.fuel_price_label":"Polttoaineen litrahinta","editor.fuel_hint":"Muuta integraation arvoja kohdassa Asetukset > Laitteet ja palvelut > Suunto > Määritä.","card.lifetime.title":"Kaikkiaan","card.lifetime.subtitle":"Aloittamisestasi lähtien","stat.active_days":"Aktiiviset päivät","empty.lifetime.title":"Ei vielä kokonaistilastoja","card.recent_workouts.title":"Viimeisimmät harjoitukset","empty.recent_workouts.title":"Ei viimeaikaisia harjoituksia","card.elevation.title":"Korkeus ja nousut","stat.ascent":"Nousu","stat.descent":"Lasku","stat.ascent_time":"Nousuaika","stat.descent_time":"Laskuaika","stat.min_altitude":"Alin korkeus","stat.max_altitude":"Ylin korkeus","stat.ascent_rate":"Nousunopeus","empty.elevation.title":"Ei korkeustietoja","empty.elevation.subtitle":"Vain ulkoharjoitukset barometrilla tallentavat tämän.","card.location.title":"Aloituspaikka","location.open_in_maps":"Avaa kartassa","empty.location.title":"Ei sijaintitietoja","empty.location.subtitle":"Sisäharjoituksilla ei ole GPS-aloituspistettä.","card.fitness.title":"Kunto","stat.vo2max":"VO2max","stat.estimated_vo2max":"Arvioitu VO2max","stat.fitness_age":"Kuntoikä","fitness.measured":"Mitattu {time} · {activity}","empty.fitness.title":"Ei vielä kuntotietoja","empty.fitness.subtitle":"Suunto laskee tämän vain juoksu- tai kävelyharjoituksista.","empty.fitness_trend.title":"Ei vielä kuntotietoja","empty.fitness_trend.subtitle":"Suunto laskee tämän vain juoksu- tai kävelyharjoituksista.","card.pmc.title":"Suorituskyvyn hallinta","card.pmc.subtitle":"{days} päivän kehitys","card.recovery_trends.title":"Palautumisen kehitys","card.recovery_trends.subtitle":"{days} päivän perustaso","empty.recovery_trends.title":"Ei vielä palautumisen kehitystietoja","card.weekly_volume.title":"Viikoittainen määrä","card.weekly_volume.subtitle":"Viimeiset 12 viikkoa","empty.weekly_volume.title":"Ei vielä viikoittaisia määriä","stat.average":"Keskiarvo","stat.total":"Yhteensä","card.hr_curve.title":"Sykekäyrä","card.hr_curve.subtitle":"Viimeiset 24 tuntia","stat.hr_now":"Nyt","stat.hr_min":"Päivän alin","stat.hr_max":"Päivän ylin","empty.hr_curve.title":"Ei vielä reaaliaikaista sykettä","empty.hr_curve.subtitle":"Pidä kelloa ja synkronoi, niin päivän käyrä näkyy täällä.","card.sleep_trends.title":"Unen kehitys","card.sleep_trends.subtitle":"Viimeiset {days} yötä","empty.sleep_trends.title":"Ei vielä unen kehitystietoja","card.weekly_goal.title":"Viikkotavoite","card.weekly_goal.subtitle":"{value} / {goal} km","empty.weekly_goal.title":"Ei vielä viikon matkaa","editor.goal_label":"Viikkotavoite (km)","card.streak.title":"Aktiivisuusputki","card.streak.subtitle":"Viimeiset 14 päivää","streak.window_count_one":"{count} aktiivinen päivä","streak.window_count_other":"{count} aktiivista päivää","streak.days_one":"{count} päivän putki","streak.days_other":"{count} päivän putki","streak.none":"Ei käynnissä olevaa putkea - liikettä tänään","empty.streak.title":"Ei vielä harjoitushistoriaa","just_finished.title":"Hienoa työtä!","just_finished.idle.title":"Odotetaan seuraavaa harjoitustasi","just_finished.idle.subtitle":"Tämä syttyy heti, kun kello synkronoi uuden harjoituksen.","empty.just_finished.title":"Ei viimeaikaisia harjoituksia","card.activity_trends.title":"Aktiivisuuden kehitys","card.activity_trends.subtitle":"Viimeiset {days} päivää","empty.activity_trends.title":"Ei vielä aktiivisuuden kehitystietoja","card.recovery_balance_trend.title":"Palautumistasapainon kehitys","card.recovery_balance_trend.subtitle":"Viimeiset {days} päivää","empty.recovery_balance_trend.title":"Ei vielä palautumisen kehitystietoja","card.readiness_trend.title":"Valmiuden kehitys","card.readiness_trend.subtitle":"Viimeiset {days} päivää","empty.readiness_trend.title":"Ei vielä valmiuden kehitystietoja","stat.cadence":"Kadenssi","stat.stride_length":"Askelpituus","stat.pct_hrmax":"% maksimisykkeestä","stat.sleep_avg_hr":"Unen keskisyke","stat.sleep_min_hr":"Unen alin syke","chip.bedtime":"Nukkumaanmeno {time}","card.activity_calendar.title":"Aktiivisuuskalenteri","card.activity_calendar.subtitle":"Viimeiset 6 viikkoa","empty.activity_calendar.title":"Ei vielä harjoitushistoriaa","activity_calendar.active_days_one":"{count} aktiivinen päivä","activity_calendar.active_days_other":"{count} aktiivista päivää","card.workout_comparison.title":"Harjoitusvertailu","card.workout_comparison.vs":"vs {time}","empty.workout_comparison.title":"Vertailukelpoisia harjoituksia ei ole vielä tarpeeksi","empty.workout_comparison.subtitle":"Tee sama laji kahdesti, niin näet vertailun.","stat.distance_delta":"Matka ({delta})","stat.duration_delta":"Kesto ({delta})","stat.avg_hr_delta":"Keskisyke ({delta})","stat.pace_delta":"Vauhti ({delta})","card.milestones.title":"Lukuina","card.milestones.subtitle":"Aloittamisestasi lähtien","empty.milestones.title":"Ei vielä kokonaistilastoja","stat.earth_laps":"Maapallon kierrokset","stat.marathons":"Maratonit","stat.moon_pct":"% Kuuhun","stat.burgers":"Hampurilaiset","card.athlete_profile.title":"Harjoittelijatyyppi","empty.athlete_profile.title":"Tietoja ei ole vielä tarpeeksi","personality.activity.cycling":"Pyöräilijä","personality.activity.running":"Juoksija","personality.activity.trekking":"Vaeltaja","personality.activity.walking":"Kävelijä","personality.activity.gym":"Voimaurheilija","personality.activity.swim":"Uimari","personality.activity.ski":"Hiihtäjä","personality.activity.row":"Soutaja","personality.activity.other":"Monilajiurheilija","personality.schedule.weekend":"Viikonloppusoturi","personality.schedule.weekday":"Arkipäivien vakiokasvo","personality.schedule.balanced":"Tasainen aikatauluttaja","personality.time.morning":"Aamuvirkku","personality.time.afternoon":"Päiväliikkuja","personality.time.evening":"Iltaurheilija","personality.time.night":"Yökyöpeli","card.pace_trend.title":"Vauhdin kehitys","card.pace_trend.subtitle":"{activity} · viimeiset {count} harjoitusta","empty.pace_trend.title":"Vertailukelpoisia harjoituksia ei ole vielä tarpeeksi","empty.pace_trend.subtitle":"Tee sama laji muutaman kerran, niin näet kehityksen.","pace_trend.faster":"Nopeutumassa","pace_trend.slower":"Hidastumassa","pace_trend.steady":"Pysyy tasaisena","card.lap_splits.title":"Kierrosajat","empty.lap_splits.title":"Ei kierrostietoja","empty.lap_splits.subtitle":"Kaikissa harjoituksissa ei ole kierroksia - seuraava kierroksellinen harjoituksesi täyttää tämän.","stat.laps":"Kierrokset","stat.fastest_lap":"Nopein kierros","label.lap":"Kierros {n}","card.training_effect_trend.title":"Harjoitusvaikutuksen kehitys","card.fitness_trend.title":"Kunnon kehitys","empty.training_effect_trend.title":"Ei vielä harjoitusvaikutustietoja","achievements.badge.around_globe":"Maapallon ympäri","achievements.badge.century_club":"Satakerho - 100 harjoitusta","achievements.badge.consistency_king":"Säännöllisyyden kuningas - 14 päivän putki","achievements.badge.iron_will":"Rautainen tahto - 30 päivän putki","achievements.badge.days_100":"100 aktiivista päivää","achievements.badge.distance_1000":"1 000 km:n kerho","achievements.badge.distance_5000":"5 000 km:n kerho","achievements.badge.elite_engine":"Huippumoottori - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal kulutettu","achievements.badge.energy_1m":"1 000 000 kcal kulutettu","achievements.badge.full_year":"Koko vuosi aktiivisena","achievements.badge.hours_100":"100 tuntia","achievements.badge.hours_500":"500 tuntia","achievements.badge.jack_of_all_trades":"Jokapaikanhöylä - 5+ lajia","achievements.badge.multi_sport":"Monilajiurheilija - 3+ lajia","achievements.badge.solid_engine":"Vankka moottori - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ harjoitusta","achievements.badge.workouts_1000":"1 000 harjoitusta","achievements.badge.workouts_250":"250 harjoitusta","achievements.badge.workouts_500":"500 harjoitusta","achievements.category.days":"Aktiiviset päivät","achievements.category.distance":"Matka","achievements.category.energy":"Energia","achievements.category.fitness":"Kuntotaso","achievements.category.records":"Henkilökohtaiset ennätykset","achievements.category.time":"Harjoitusaika","achievements.category.variety":"Monipuolisuus","achievements.category.workouts":"Kirjatut harjoitukset","card.achievements.subtitle":"{unlocked} / {total} avattu","card.achievements.title":"Saavutukset","achievements.next":"Seuraava: {name} ({pct} %)","class.rest":"+{pct} % muita lajeja","class.tag":"Painotus: {activity}","empty.achievements.subtitle":"Kirjaa muutama harjoitus, niin alat avata merkkejä.","empty.achievements.title":"Ei vielä saavutuksia","empty.class.subtitle":"Kirjaa muutama harjoitus, niin hahmoluokkasi paljastuu.","empty.class.title":"Tietoja ei ole vielä tarpeeksi","empty.level.subtitle":"Ensimmäinen synkronoitu harjoituksesi aloittaa nousun.","empty.level.title":"Ei vielä kokonaistilastoja","empty.player.subtitle":"Tilastojesi laskeminen vaatii hieman harjoitushistoriaa.","empty.player.title":"Tietoja ei ole vielä tarpeeksi","level.label":"TASO","level.source":"{count} harjoitusta kirjattu","level.subtitle":"Perustuu koko harjoitushistoriasi kuormaan","level.title.grinder":"Kestävyysjyrä","level.title.legend":"Elävä legenda","level.title.novice":"Tuore tulokas","level.title.veteran":"Kokenut konkari","level.xp_to_next":"{xp} XP tasolle {level}","level.xp_total":"{xp} XP","player.archetype":"Erikoisala: {activity}","player.help.title":"Mitä nämä tarkoittavat","player.help.sta":"STA · Kestävyys, kunnosta (CTL): kuinka paljon tasaista harjoituskuormaa kestät","player.help.pwr":"PWR · Voima, viimeaikaisten harjoitustesi keskimääräisestä tehosta (TSS)","player.help.rec":"REC · Palautuminen, nykyinen valmiuslukemasi","player.help.con":"CON · Säännöllisyys, viimeisen 30 päivän aikana kirjatut harjoitukset","player.help.end":"END · Sitkeys, arvioidusta VO2maxistasi","player.help.frm":"FRM · Vire, nykyisestä harjoituskuorman tasapainostasi (TSB)","player.help.disclaimer":"Omista tiedoistasi lasketut suuntaa antavat arviot - eivät Suunnon virallisia mittareita.","player.tier.bronze":"Pronssi","player.tier.gold":"Kulta","player.tier.legendary":"Legendaarinen","player.tier.silver":"Hopea","records.climb":"Suurin nousu","records.distance":"Pisin matka","records.pace":"Nopein vauhti","records.session":"Kovin harjoitus","records.streak":"Pisin putki","records.streak_days_one":"{count} päivä","records.streak_days_other":"{count} päivää","records.workout":"Pisin harjoitus","class.name.cycling":"Kestävyyssoturi","class.name.running":"Pikajuoksija","class.name.trekking":"Polunraivaaja","class.name.walking":"Vaeltaja","class.name.gym":"Voimaberserkki","class.name.swim":"Aaltojen kutsuja","class.name.ski":"Pakkasjuoksija","class.name.row":"Soutaja","class.name.other":"Monitaituri","class.flavor.cycling":"Tehty pitkiin, tasaisiin suorituksiin ennemmin kuin puhtaaseen nopeuteen. Kaikki muut lajit ovat oheisharjoittelua moottorille.","class.flavor.running":"Nopea lähdössä ja tehty tempoon. Matka on vain keino päästä päämäärään.","class.flavor.trekking":"Kotonaan vaikeassa maastossa, taittaa matkaa tuntikausia kerrallaan.","class.flavor.walking":"Tasaiset, kevyet kilometrit kertyvät - säännöllisyys ennen tehoa.","class.flavor.gym":"Raakaa voimaa ennemmin kuin matkaa. Voimaharjoitukset ensin.","class.flavor.swim":"Vedessä taottu kestävyys, veto vedolta.","class.flavor.ski":"Vauhtia ja rytmiä lumessa ja pakkasessa.","class.flavor.row":"Rytmistä voimaa, veto kerrallaan.","class.flavor.other":"Mikään laji ei hallitse - aidosti tasapainoinen yhdistelmä.","card.next_milestone.title":"Seuraava virstanpylväs","card.next_milestone.subtitle":"Kokonaismatka","empty.next_milestone.title":"Ei vielä kokonaismatkaa","next_milestone.remaining_label":"jäljellä","next_milestone.target":"kokonaismatkaan {target} km - {pct} % tehty","next_milestone.workouts_one":"{count} harjoitus kokonaismäärään {target}","next_milestone.workouts_other":"{count} harjoitusta kokonaismäärään {target}","next_milestone.eta_one":"tahdilla {pace} km/viikko - noin {weeks} viikko jäljellä","next_milestone.eta_other":"tahdilla {pace} km/viikko - noin {weeks} viikkoa jäljellä","card.story.title":"Suunto-tarinasi","card.story.subtitle":"Ensimmäisestä harjoituksestasi lähtien","empty.story.title":"Ei vielä kokonaistilastoja","story.top_activity":"{activity} - päälajisi","story.top_activity_share":"{count} harjoitusta - {pct} % historiastasi","story.record_subtitle":"Kaikkien aikojen henkilökohtainen ennätyksesi","card.sleep_clock.title":"Unikello","card.sleep_clock.subtitle":"Viime yö","empty.sleep_clock.title":"Ei vielä unitietoja","empty.sleep_clock.subtitle":"Pidä kelloa yöllä, niin unesi näkyy täällä.","sleep_clock.quality":"Unen laatu {pct} %","card.sleep_rhythm.title":"Unirytmi","card.sleep_rhythm.subtitle":"Viimeiset 7 yötä","empty.sleep_rhythm.title":"Unihistoriaa ei ole vielä tarpeeksi","empty.sleep_rhythm.subtitle":"Kaavan näyttämiseen tarvitaan muutaman yön tiedot.","sleep_rhythm.avg_bedtime":"Nukkumaanmeno keskimäärin {time}","sleep_rhythm.avg_wake":"Herätys keskimäärin {time}","sleep_rhythm.spread":"{minutes} min hajonta","sleep_rhythm.legend_normal":"Tavallinen yö","sleep_rhythm.legend_outlier":"{minutes}+ min keskiarvosta","card.route.title":"Reitti","empty.route.title":"Ei reittitietoja","empty.route.subtitle":"Sisäharjoituksilla ei ole GPS-jälkeä.","route.pace_slower":"Hitaampi","route.pace_faster":"Nopeampi","card.month_story.title":"Tämä kuukausi","empty.month_story.title":"Ei vielä harjoituksia tässä kuussa","story.share_month":"{count} harjoitusta - {pct} % tästä kuukaudesta","story.record_subtitle_month":"Ennätyksesi tässä kuussa","card.year_story.title":"Tämä vuosi","empty.year_story.title":"Ei vielä harjoituksia tänä vuonna","story.share_year":"{count} harjoitusta - {pct} % tästä vuodesta","story.record_subtitle_year":"Ennätyksesi tänä vuonna","card.best_efforts.title":"Parhaat suoritukset","card.best_efforts.subtitle":"{count} / {total} tallennettu","empty.best_efforts.title":"Ei vielä parhaita suorituksia","empty.best_efforts.subtitle":"Tallennetaan juoksuharjoituksista tästä eteenpäin, ei takautuvasti.","best_efforts.not_yet":"Ei vielä tallennettu","distance.half_marathon":"Puolimaraton","distance.marathon":"Maraton","card.steps_today.title":"Askeleet tänään","card.steps_today.subtitle":"Tavoite: {goal} askelta","empty.steps_today.title":"Ei vielä askeltietoja","editor.steps_goal_label":"Päivätavoite (askelta)","steps_today.goal_pct":"{pct} % päivätavoitteesta","steps_today.vs_avg_up":"+{pct} % 7 päivän keskiarvoosi verrattuna ({avg})","steps_today.vs_avg_down":"-{pct} % 7 päivän keskiarvoosi verrattuna ({avg})","card.steps_trend.title":"Askelten kehitys","card.steps_trend.subtitle":"Viimeiset {days} päivää","empty.steps_trend.title":"Ei vielä askelhistoriaa","steps_trend.legend_met":"Tavoite saavutettu","steps_trend.legend_below":"Alle tavoitteen","steps_trend.days_at_goal":"Päivät tavoitteessa","card.month_records.title":"Kuukauden ennätykset","card.month_records.subtitle":"{count} / {total} tehty tässä kuussa","empty.month_records.title":"Ei vielä ennätyksiä tässä kuussa","empty.month_records.subtitle":"Tämän kuukauden parhaat tuloksesi näkyvät täällä.","card.year_records.title":"Vuoden ennätykset","card.year_records.subtitle":"{count} / {total} tehty tänä vuonna","empty.year_records.title":"Ei vielä ennätyksiä tänä vuonna","empty.year_records.subtitle":"Tämän vuoden parhaat tuloksesi näkyvät täällä.","card.running_dynamics.title":"Juoksudynamiikka","card.running_dynamics.subtitle":"{activity} - viimeiset {count} harjoitusta","empty.running_dynamics.title":"Tietoja ei ole vielä tarpeeksi","empty.running_dynamics.subtitle":"Tarvitaan muutama viimeaikainen jalkaisin tehty harjoitus kadenssitiedoilla.","card.weekly_steps_goal.title":"Viikon askeltavoite","card.weekly_steps_goal.subtitle":"{value} / {goal} askelta","empty.weekly_steps_goal.title":"Ei vielä askeltietoja","editor.weekly_steps_goal_label":"Viikkotavoite (askelta)","card.goals_overview.title":"Tavoitteet","card.goals_overview.subtitle":"Tämä viikko","empty.goals_overview.title":"Ei vielä tavoitetietoja","card.week_compare.title":"Tämä viikko vs viime viikko","card.week_compare.subtitle":"Liukuvat 7 päivän summat","empty.week_compare.title":"Historiaa ei ole vielä tarpeeksi","empty.week_compare.subtitle":"Katso uudelleen noin viikon päästä, niin näet vertailun.","week_compare.legend_now":"Tämä viikko","week_compare.legend_prev":"Viime viikko","card.sleep_detail.title":"Unen tiedot","card.sleep_detail.subtitle":"Viime yö","label.awake":"Hereillä","label.sleep_other":"Muu uni","sleep_detail.total_sleep":"uni yhteensä","sleep_detail.in_bed":"{duration} sängyssä","sleep_detail.bedtime":"Nukkumaanmeno","sleep_detail.wake":"Herätys","sleep_detail.stages":"Univaiheet","sleep_detail.efficiency":"Unen tehokkuus","sleep_detail.efficiency_sub":"Uniaika ÷ aika sängyssä","sleep_detail.vitals":"Elintoiminnot","sleep_detail.insight_excellent":"{pct} % syvää unta · erinomainen palautumisikkuna.","sleep_detail.insight_solid":"{pct} % syvää unta · hyvin palauttava yö.","sleep_detail.insight_light":"{pct} % syvää unta · tavallista kevyempi.","editor.energy_goal_source_label":"Kaloritavoitteen lähde","editor.sleep_goal_source_label":"Unitavoitteen lähde","editor.training_goal_source_label":"Harjoitusaikatavoitteen lähde","editor.energy_goal_label":"Päivätavoite (aktiiviset kcal)","editor.sleep_goal_label":"Unitavoite (tuntia)","editor.training_goal_label":"Viikkotavoite (tuntia)","editor.show_goals_label":"Näytä tavoitteet","editor.source_suunto_none":"Suunto-sovellus (ei tavoitetta)","editor.distance_goal_hint":"Suunto-sovelluksessa ei ole matkatavoitetta, joten tämä on aina oma tavoitteesi.","card.daily_goals.title":"Päivän tavoitteet","card.daily_goals.subtitle":"Askeleet, kalorit ja uni","empty.daily_goals.title":"Ei vielä tavoitetietoja","stat.active_kcal":"Aktiiviset kcal","stat.sleep":"Uni","stat.training_time":"Harjoitusaika","goal.of":"/ {goal}","goal.energy_active_of":"{kcal} aktiivista / {goal}","sleep_goal.label":"Unitavoite","sleep_goal.short":"{value} / {goal} · {missing} vajaa","sleep_goal.met":"{value} / {goal} · tavoite saavutettu","sleep_trends.nights_at_goal":"Yöt tavoitteessa","sleep_trends.avg_vs_goal":"Keskiarvo vs tavoite","sleep_trends.legend_goal":"Tavoite {goal}","card.ai_insight.title":"AI-analyysi","empty.ai_insight.title":"AI-analyysi on pois päältä","empty.ai_insight.subtitle":"Ota se käyttöön integraatiossa: Määritä -> Päivittäinen AI-analyysi","empty.ai_insight.waiting":"Ei vielä tämän päivän AI-analyysia","ai_insight.generating":"Analyysia luodaan","ai_insight.night":"yö {night}","ai_insight.no_night":"viime yötä ei ole vielä synkronoitu","ai_insight.no_section":"Ei tietoja tähän osioon","ai_insight.advice":"Päivän neuvot","ai_insight.disclaimer":"Ei lääketieteellinen neuvo","ai_insight.section.sleep":"Uni","ai_insight.section.recovery":"Palautuminen","ai_insight.section.training":"Harjoittelu","ai_insight.section.activity":"Aktiivisuus","ai_insight.section_full.sleep":"Uni","ai_insight.section_full.recovery":"Terveys ja palautuminen","ai_insight.section_full.training":"Harjoittelu","ai_insight.section_full.activity":"Päivän aktiivisuus","ai_insight.status.good":"Hyvä","ai_insight.status.ok":"OK","ai_insight.status.caution":"Varovasti","ai_insight.status.rest":"Lepo","strategy.title":"Harjoittelu","strategy.none":"Ei Suunto-tiliä","strategy.none_text":"Suunto App -integraation tiliä ei löytynyt. Lisää integraatio kohdassa Asetukset > Laitteet ja palvelut ja lataa sitten tämä kojelauta uudelleen.","strategy.section.today":"Tänään","strategy.section.ai":"AI-analyysi","strategy.section.sleep":"Uni","strategy.section.recovery":"Palautuminen","strategy.section.last_workout":"Viimeisin harjoitus","strategy.section.load":"Kuorma ja vire","strategy.section.week":"Tämä viikko","strategy.section.records":"Ennätykset","strategy.section.history":"Historia ja profiili","strategy.section.gear":"Varusteet ja työmatkat","card.ai_weekly.title":"AI-viikkoyhteenveto","empty.ai_weekly.subtitle":"Vaatii ha-suunto 1.0.38:n tai uudemman ja AI:n käyttöön: Määritä -> AI","empty.ai_weekly.waiting":"Ei vielä viikoittaista AI-yhteenvetoa","ai_weekly.week":"viikko {range}","ai_weekly.advice":"Suunnitelma ensi viikolle","editor.ai_report_label":"Raportti","editor.ai_report_daily":"Päivittäinen analyysi","editor.ai_report_weekly":"Viikkoyhteenveto","editor.ai_section_label":"Osio","editor.ai_single_label":"Näytä vain tämä osio","card.sleep_regularity.title":"Unen säännöllisyys","sleep_regularity.subtitle":"Viimeiset 4 viikkoa · {nights} yötä","empty.sleep_regularity.title":"Öitä ei ole vielä tarpeeksi","empty.sleep_regularity.subtitle":"Tarvitaan noin viikon peräkkäiset yöt kello ranteessa.","sleep_regularity.bed":"Nukkumaanmeno keskimäärin {time}","sleep_regularity.wake":"Herätys keskimäärin {time}","sleep_regularity.mid_work":"Unen keskikohta, su-to-yöt {time}","sleep_regularity.mid_free":"Unen keskikohta, pe/la-yöt {time}","band.regularity.regular":"Säännöllinen","band.regularity.fair":"Melko säännöllinen","band.regularity.irregular":"Epäsäännöllinen","chip.regularity":"Säännöllisyys {value}","chip.social_jetlag":"Sosiaalinen jetlag {value}","card.aerobic_decoupling.title":"Aerobinen irtikytkeytyminen","empty.aerobic_decoupling.title":"Pitkää harjoitusta ei ole vielä analysoitu","empty.aerobic_decoupling.subtitle":"Näkyy vähintään 40 minuutin harjoituksen jälkeen, jossa on GPS ja syke.","aerobic_decoupling.analyzed":"{minutes} min analysoitu","aerobic_decoupling.hint":"alle 5 % = vankka aerobinen pohja","aerobic_decoupling.first_half":"1. puolisko","aerobic_decoupling.second_half":"2. puolisko","aerobic_decoupling.trend":"Viimeiset {count} analysoitua harjoitusta","band.decoupling.coupled":"Kytkeytynyt","band.decoupling.moderate":"Kohtalainen ajautuma","band.decoupling.high":"Suuri ajautuma","stat.decoupling":"Sykkeen ajautuma","card.personal_insights.title":"Mikä toimii sinulle","personal_insights.subtitle":"Viimeisten {nights} yön perusteella","empty.personal_insights.title":"Ei vielä selviä kaavoja","empty.personal_insights.subtitle":"Tarvitaan muutaman viikon uni- ja harjoitustiedot. Vain selvät erot näytetään.","personal_insights.these_nights":"nämä yöt","personal_insights.the_rest":"muut","personal_insights.nights_count":"{with} vs {without} yötä","personal_insights.disclaimer":"Kaavoja omissa tiedoissasi, ei todiste syy-yhteydestä. Havainto vaatii vähintään 4 yötä tai harjoitusta kummallakin puolella.","insights.cond.late_workout":"Kun harjoitus päättyy klo {time} jälkeen","insights.cond.training_day":"Harjoituspäivinä","insights.cond.hard_day":"Kovimpien harjoituspäiviesi jälkeen","insights.cond.early_bed":"Kun menet nukkumaan ennen klo {bedtime}","insights.cond.free_night":"Perjantai- ja lauantaiöinä","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Leposyke","insights.metric.sleep":"Uni","daily_brief.your_pattern":"Kaavasi","editor.show_insight_label":"Näytä vahvin kaavasi","editor.look_section":"Ulkoasu","editor.title":"Otsikko","editor.icon":"Kuvake (esim. mdi:star)","editor.accent_color":"Korostusväri (esim. #e91e63 tai teal)","editor.accent_hint":"Sama väri vaaleassa ja tummassa tilassa. Virheellinen väri ohitetaan.","editor.accent_default":"Oletus (meripihka)","editor.accent_pink":"Pinkki","editor.accent_purple":"Violetti","editor.accent_teal":"Sinivihreä","editor.accent_green":"Vihreä","editor.accent_blue":"Sininen","editor.hide_header":"Piilota otsake","editor.hide_icon":"Piilota kuvake","editor.hide_subtitle":"Piilota alaotsikko","editor.hide_legend":"Piilota selite","editor.text_size":"Tekstin koko","text_size.normal":"Normaali","text_size.large":"Suuri (115 %)","text_size.larger":"Suurempi (130 %)","text_size.largest":"Suurin (150 %)","editor.language":"Kieli","editor.language_auto":"Home Assistantin kieli","editor.hide_sync_warning":"Piilota synkronointivaroitus","editor.max_items":"Kohteiden määrä","editor.list_height":"Luettelon korkeus (px)","card.stress_today.title":"Stressi ja palautuminen","stress_today.subtitle_today":"Tänään klo {time} asti","stress_today.subtitle_waiting":"Eilen · tätä päivää ei ole vielä synkronoitu","stress_today.yesterday":"Eilen","empty.stress_today.title":"Ei vielä stressitietoja","empty.stress_today.subtitle":"Vaatii Suunto App (epävirallinen) 1.0.37:n tai uudemman ja synkronoidun kellon.","stress.state.recovering":"Palautumassa","stress.state.active":"Aktiivinen","stress.state.inactive":"Passiivinen","stress.state.stressed":"Stressaantunut","insights.cond.hot_weather":"Helteellä ({temp} °C ja yli)","insights.cond.cold_weather":"Kylmällä ({temp} °C ja alle)","insights.metric.efficiency":"Tehokkuus","insights.unit.per_beat":"m/lyönti","personal_insights.subtitle_days":"Viimeisten {nights} yön ja {days} harjoituspäivän perusteella","personal_insights.these_workouts":"nämä harjoitukset","personal_insights.workouts_count":"{with} vs {without} harjoitusta","personal_insights.speed_at_hr":"{with_speed} km/h sykkeellä {with_hr} bpm vs {without_speed} km/h sykkeellä {without_hr} bpm","sync.at":"synkronoitu {time}","sync.yesterday":"synkronoitu eilen {time}","chip.not_synced":"Kello synkronoimatta {hours} h","editor.eink":"E-ink-näyttö","eink.off":"Pois","eink.bw":"Mustavalkoinen","eink.gray":"4 harmaan sävyä","eink.red":"Musta, valkoinen ja punainen","eink.yellow":"Musta, valkoinen ja keltainen","eink.color":"6 väriä","editor.max_lines":"Tekstirivejä enintään","card.whats_new.title":"Mitä uutta","card.whats_new.subtitle":"Viimeiset {days} päivää","whats_new.today":"Tänään","whats_new.yesterday":"Eilen","whats_new.now":"Nyt","whats_new.empty":"Ei mitään uutta viimeisen {days} päivän aikana","whats_new.record":"Uusi ennätys: {label} {value}","whats_new.record_year":"Vuoden ennätys: {label} {value}","whats_new.record_month":"Kuukauden ennätys: {label} {value}","whats_new.best_effort":"Paras suoritus {distance}: {time}","whats_new.ai_daily":"Päivittäinen AI-analyysi","whats_new.ai_weekly":"Viikoittainen AI-yhteenveto","whats_new.gear_due":"{name}: huollon aika","editor.whats_new_show":"Näytä","whats_new.kind.workouts":"Harjoitukset","whats_new.kind.records":"Ennätykset ja parhaat suoritukset","whats_new.kind.achievements":"Reittisaavutukset","whats_new.kind.ai":"AI-raportit","whats_new.kind.gear":"Varusteiden huolto"},sv:{"stat.distance":"Distans","stat.duration":"Tid","stat.avg_speed":"Medelhast.","stat.avg_pace":"Medeltempo","stat.avg_hr":"Medelpuls","stat.max_hr":"Maxpuls","stat.training_effect":"Träningseffekt","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Känsla","stat.energy":"Energi","stat.time":"Tid","stat.workouts":"Pass","stat.steps":"Steg","stat.heart_rate":"Puls","stat.quality":"Kvalitet","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Vilopuls","stat.resting_hr_delta":"Vilopuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresstillstånd","stat.recovery_window":"Återhämtningstid","stat.ctl":"CTL · kondition","stat.atl":"ATL · trötthet","stat.tsb":"TSB · form","stat.readiness":"Beredskap","stat.recovery_balance":"Återhämtningsbalans","stat.training_suggestion":"Dagens förslag","stat.volume":"Volym","stat.intensity":"Intensitet","stat.consistency":"Regelbundenhet","stat.recovery":"Återhämtning","stat.variety":"Variation","card.hr_zones.title":"Pulszoner","card.hr_zones.last_workout":"Senaste passet","card.sleep_readiness.title":"Sömn och beredskap","card.sleep_readiness.subtitle_no_wake":"{duration} sömn","card.sleep_readiness.subtitle_with_wake":"{duration} sömn · vaknade {time}","card.recovery.title":"Återhämtning","card.training_load.title":"Träningsbelastning","card.training_load.subtitle_fallback":"Trend för kondition (CTL)","card.week_stats.title":"Veckan och totalt","card.week_stats.subtitle":"Senaste 7 dagarna","card.week_stats.lifetime_title":"Totalt per aktivitet","card.today.title":"Idag","card.today.subtitle":"Live från din klocka","card.training_status.title":"Träningsstatus","card.training_profile.title":"Träningsprofil","card.training_profile.subtitle":"Din träning i korthet","card.heart_rate.title":"Puls","empty.last_workout.title":"Inget nytt pass","empty.last_workout.subtitle":"Synka klockan med Suunto-appen för att se det här.","empty.hr_zones.title":"Ingen zondata","empty.hr_zones.subtitle":"Ditt nästa utomhuspass med pulsband fyller i detta.","empty.sleep_readiness.title":"Ingen sömndata än","empty.sleep_readiness.subtitle":"Sov med klockan på för att se det här.","empty.recovery.title":"Ingen återhämtningsdata än","empty.training_load.title":"Din träningsbelastning byggs upp","empty.training_load.subtitle":"Kräver lite träningshistorik - titta igen efter några pass.","empty.week_stats.title":"Ingen träningshistorik än","empty.today.title":"Ingen livedata än","empty.training_status.title":"Inte tillräckligt med data än","empty.training_status.subtitle":"Kräver lite träningshistorik.","empty.training_profile.title":"Inte tillräckligt med data än","empty.training_profile.subtitle":"Fler sensorer måste rapportera innan din profil kan räknas fram.","empty.heart_rate.title":"Ingen livepuls än","empty.loading":"Laddar...","empty.generic_error":"Kunde inte läsa in Suunto-data.","error.no_device":"Ingen Suunto-enhet hittades - är integrationen suunto_app konfigurerad?","error.multiple_devices":'Flera Suunto-enheter hittades - ange "device_id" i kortets konfiguration.',"error.device_missing":'Den konfigurerade enheten "{device}" har inga suunto_app-entiteter.',"band.readiness.great":"Utmärkt","band.readiness.fair":"Okej","band.readiness.low":"Låg","band.recovery.well":"Väl återhämtad","band.recovery.partial":"Delvis återhämtad","band.recovery.low":"Låg återhämtning","band.recovery.fully":"Helt återhämtad","band.recovery.recovering":"Återhämtar sig · {time} kvar","band.hrv.low":"Låg HRV","band.hrv.high":"Hög HRV","band.hrv.balanced":"Balanserad HRV","band.form.fresh":"Pigg","band.form.neutral":"Neutral","band.form.fatigued":"Trött","band.form.very_fatigued":"Mycket trött","band.acwr.safe":"Säker zon","band.acwr.low":"Låg belastning","band.acwr.high":"Hög belastning - skaderisk","band.suggestion.hard":"Kör hårt","band.suggestion.moderate":"Måttlig ansträngning","band.suggestion.easy":"Ta det lugnt","band.suggestion.rest":"Vilodag","chip.workout_logged_today":"Pass loggat idag","chip.workout_today":"Träning idag","chip.recovering":"Återhämtar sig","chip.nap":"{minutes} min tupplur","chip.nap_earlier":"{minutes} min tupplur (tidigare)","chip.workouts_30d":"{count} pass de senaste 30 dagarna","chip.acwr":"ACWR {value} · {label}","profile.summary":"Starkast på {strong} · lättast på {light}","chip.more_activity_one":"+{count} aktivitetstyp till","chip.more_activity_other":"+{count} aktivitetstyper till","chip.unusual_recovery":"Ovanlig återhämtning","chip.days_since_one":"{count} dag sedan senaste pass","chip.days_since_other":"{count} dagar sedan senaste pass","chip.manually_added":"Manuellt tillagt","chip.sleep_stale":"Ingen sömn från i natt · natten {date}","readiness.balance_only":"Bara återhämtningsbalans, ingen sömn","chip.no_hr":"Ingen puls","card.heart_rate.measured":"Mätt {time}","card.heart_rate.measured_ago":"Mätt {ago} · {time}","stat.energy_active_sub":"{kcal} aktiva","energy.total_unit":"kcal totalt","energy.split":"{active} aktiva · {bmr} BMR","card.commute.title":"Pendling","card.commute.subtitle_year":"I år i stället för bilen","card.commute.subtitle_month":"Denna månad i stället för bilen","commute.saved":"sparat","commute.fuel_co2":"{fuel} l bränsle · {co2} kg mindre CO2","stat.rides":"Turer","stat.days":"Dagar","stat.avg_time":"Medeltid","commute.this_month":"Denna månad:","commute.this_year":"I år:","commute.rides_n":"{n} turer","empty.commute.title":"Ingen pendling än","empty.commute.subtitle":"Pass som Suunto märker som pendling visas här.","card.gear.title":"Utrustning","card.gear.subtitle":"Distans och service","gear.remaining":"{km} kvar","gear.over":"{km} över","chip.service":"Service","empty.gear.title":"Ingen utrustning följs än","empty.gear.subtitle":"Lägg till utrustning under integrationens meny Konfigurera.","card.form_forecast.title":"Formprognos","card.form_forecast.subtitle":"Om du vilar från idag","stat.tomorrow":"I morgon","stat.peak_in":"Topp om {days} d","stat.maintenance":"Behåll kondition / v","empty.form_forecast.title":"Ingen prognos än","card.daily_brief.title":"Dagens sammanfattning","empty.daily_brief.title":"Ingen sammanfattning än","achievement.count_one":"{count} prestation","achievement.count_other":"{count} prestationer","achievement.rank":"Plats {rank} på den här rutten","label.zone":"Zon {n}","label.deep":"Djup","label.light":"Lätt","label.rem":"REM","editor.auto_detect":"Kortet hittar din Suunto-enhet automatiskt - ingen konfiguration behövs.","editor.pick_device":"Flera Suunto-enheter hittades - välj vilken kortet ska läsa.","editor.device_label":"Suunto-enhet","editor.units_label":"Enheter","editor.units_metric":"Metriska (km)","editor.units_imperial":"Brittiska (mi)","editor.compact_label":"Kompakt läge","editor.days_label":"Trendfönster (dagar)","editor.period_label":"Huvudperiod","editor.period_year":"I år","editor.period_month":"Denna månad","editor.goal_source_label":"Stegmål från","editor.source_suunto":"Suunto-appen ({value})","editor.source_suunto_default":"Suunto-appen (inget mål satt, använder {value})","editor.source_custom":"Eget","editor.fuel_source_label":"Bränslevärden från","editor.source_integration":"Suunto-integrationen ({litres} l/100 km, {price} per l)","editor.source_integration_unknown":"Suunto-integrationen","editor.fuel_consumption_label":"Bränsleförbrukning (l/100 km)","editor.fuel_price_label":"Bränslepris per liter","editor.fuel_hint":"Ändra integrationens värden under Inställningar > Enheter och tjänster > Suunto > Konfigurera.","card.lifetime.title":"Totalt","card.lifetime.subtitle":"Sedan du började","stat.active_days":"Aktiva dagar","empty.lifetime.title":"Ingen total statistik än","card.recent_workouts.title":"Senaste träningspass","empty.recent_workouts.title":"Inga nya träningspass","card.elevation.title":"Höjd och klättring","stat.ascent":"Stigning","stat.descent":"Nedstigning","stat.ascent_time":"Stigningstid","stat.descent_time":"Nedstigningstid","stat.min_altitude":"Lägsta höjd","stat.max_altitude":"Högsta höjd","stat.ascent_rate":"Stigningstakt","empty.elevation.title":"Ingen höjddata","empty.elevation.subtitle":"Bara utomhuspass med barometer registrerar detta.","card.location.title":"Startplats","location.open_in_maps":"Öppna i Kartor","empty.location.title":"Ingen platsdata","empty.location.subtitle":"Inomhuspass har ingen GPS-startpunkt.","card.fitness.title":"Kondition","stat.vo2max":"VO2max","stat.estimated_vo2max":"Uppsk. VO2max","stat.fitness_age":"Konditionsålder","fitness.measured":"Mätt {time} · {activity}","empty.fitness.title":"Ingen konditionsdata än","empty.fitness.subtitle":"Suunto räknar ut detta bara från löp- och gångpass.","empty.fitness_trend.title":"Ingen konditionsdata än","empty.fitness_trend.subtitle":"Suunto räknar ut detta bara från löp- och gångpass.","card.pmc.title":"Belastning och form","card.pmc.subtitle":"Trend {days} dagar","card.recovery_trends.title":"Återhämtningstrender","card.recovery_trends.subtitle":"Baslinje {days} dagar","empty.recovery_trends.title":"Ingen återhämtningstrend än","card.weekly_volume.title":"Veckovolym","card.weekly_volume.subtitle":"Senaste 12 veckorna","empty.weekly_volume.title":"Ingen veckovolym än","stat.average":"Medel","stat.total":"Totalt","card.hr_curve.title":"Pulskurva","card.hr_curve.subtitle":"Senaste 24 timmarna","stat.hr_now":"Nu","stat.hr_min":"Dagens lägsta","stat.hr_max":"Dagens högsta","empty.hr_curve.title":"Ingen livepuls än","empty.hr_curve.subtitle":"Bär klockan och synka för att se dagens kurva här.","card.sleep_trends.title":"Sömntrender","card.sleep_trends.subtitle":"Senaste {days} nätterna","empty.sleep_trends.title":"Ingen sömntrend än","card.weekly_goal.title":"Veckomål","card.weekly_goal.subtitle":"{value} av {goal} km","empty.weekly_goal.title":"Ingen veckodistans än","editor.goal_label":"Veckomål (km)","card.streak.title":"Aktivitetssvit","card.streak.subtitle":"Senaste 14 dagarna","streak.window_count_one":"{count} aktiv dag","streak.window_count_other":"{count} aktiva dagar","streak.days_one":"{count} dags svit","streak.days_other":"{count} dagars svit","streak.none":"Ingen aktiv svit - kom igång idag","empty.streak.title":"Ingen träningshistorik än","just_finished.title":"Bra jobbat!","just_finished.idle.title":"Väntar på ditt nästa pass","just_finished.idle.subtitle":"Tänds direkt när klockan synkar ett nytt pass.","empty.just_finished.title":"Inget nytt pass","card.activity_trends.title":"Aktivitetstrender","card.activity_trends.subtitle":"Senaste {days} dagarna","empty.activity_trends.title":"Ingen aktivitetstrend än","card.recovery_balance_trend.title":"Trend för återhämtningsbalans","card.recovery_balance_trend.subtitle":"Senaste {days} dagarna","empty.recovery_balance_trend.title":"Ingen återhämtningstrend än","card.readiness_trend.title":"Beredskapstrend","card.readiness_trend.subtitle":"Senaste {days} dagarna","empty.readiness_trend.title":"Ingen beredskapstrend än","stat.cadence":"Kadens","stat.stride_length":"Steglängd","stat.pct_hrmax":"% av maxpuls","stat.sleep_avg_hr":"Medelpuls i sömn","stat.sleep_min_hr":"Lägsta puls i sömn","chip.bedtime":"Läggdags {time}","card.activity_calendar.title":"Aktivitetskalender","card.activity_calendar.subtitle":"Senaste 6 veckorna","empty.activity_calendar.title":"Ingen träningshistorik än","activity_calendar.active_days_one":"{count} aktiv dag","activity_calendar.active_days_other":"{count} aktiva dagar","card.workout_comparison.title":"Jämförelse av pass","card.workout_comparison.vs":"mot {time}","empty.workout_comparison.title":"Inte tillräckligt med liknande pass än","empty.workout_comparison.subtitle":"Gör samma aktivitet två gånger för att se en jämförelse.","stat.distance_delta":"Distans ({delta})","stat.duration_delta":"Tid ({delta})","stat.avg_hr_delta":"Medelpuls ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"I siffror","card.milestones.subtitle":"Sedan du började","empty.milestones.title":"Ingen total statistik än","stat.earth_laps":"Varv runt jorden","stat.marathons":"Maraton","stat.moon_pct":"% till månen","stat.burgers":"Hamburgare","card.athlete_profile.title":"Träningspersonlighet","empty.athlete_profile.title":"Inte tillräckligt med data än","personality.activity.cycling":"Cyklist","personality.activity.running":"Löpare","personality.activity.trekking":"Vandrare","personality.activity.walking":"Promenerare","personality.activity.gym":"Styrkeidrottare","personality.activity.swim":"Simmare","personality.activity.ski":"Skidåkare","personality.activity.row":"Roddare","personality.activity.other":"Mångsidig idrottare","personality.schedule.weekend":"Helgkrigare","personality.schedule.weekday":"Vardagstränare","personality.schedule.balanced":"Jämn planerare","personality.time.morning":"Morgonpigg","personality.time.afternoon":"Lunchtränare","personality.time.evening":"Kvällstränare","personality.time.night":"Nattuggla","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · senaste {count} passen","empty.pace_trend.title":"Inte tillräckligt med liknande pass än","empty.pace_trend.subtitle":"Gör samma aktivitet några gånger för att se en trend.","pace_trend.faster":"Blir snabbare","pace_trend.slower":"Blir långsammare","pace_trend.steady":"Håller jämn nivå","card.lap_splits.title":"Varvtider","empty.lap_splits.title":"Ingen varvdata","empty.lap_splits.subtitle":"Alla pass har inte varv - ditt nästa pass med varv fyller i detta.","stat.laps":"Varv","stat.fastest_lap":"Snabbaste varv","label.lap":"Varv {n}","card.training_effect_trend.title":"Trend för träningseffekt","card.fitness_trend.title":"Konditionstrend","empty.training_effect_trend.title":"Ingen träningseffektdata än","achievements.badge.around_globe":"Jorden runt","achievements.badge.century_club":"Hundraklubben - 100 pass","achievements.badge.consistency_king":"Kontinuitetskung - 14 dagars svit","achievements.badge.iron_will":"Järnvilja - 30 dagars svit","achievements.badge.days_100":"100 aktiva dagar","achievements.badge.distance_1000":"1 000 km-klubben","achievements.badge.distance_5000":"5 000 km-klubben","achievements.badge.elite_engine":"Elitmotor - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal förbrända","achievements.badge.energy_1m":"1 000 000 kcal förbrända","achievements.badge.full_year":"Aktiv ett helt år","achievements.badge.hours_100":"100 timmar","achievements.badge.hours_500":"500 timmar","achievements.badge.jack_of_all_trades":"Tusenkonstnär - 5+ sporter","achievements.badge.multi_sport":"Multisportare - 3+ sporter","achievements.badge.solid_engine":"Stabil motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ pass","achievements.badge.workouts_1000":"1 000 pass","achievements.badge.workouts_250":"250 pass","achievements.badge.workouts_500":"500 pass","achievements.category.days":"Aktiva dagar","achievements.category.distance":"Distans","achievements.category.energy":"Energi","achievements.category.fitness":"Konditionsnivå","achievements.category.records":"Personliga rekord","achievements.category.time":"Träningstid","achievements.category.variety":"Variation","achievements.category.workouts":"Loggade pass","card.achievements.subtitle":"{unlocked} av {total} upplåsta","card.achievements.title":"Utmärkelser","achievements.next":"Nästa: {name} ({pct}%)","class.rest":"+{pct}% andra aktiviteter","class.tag":"Inriktad på {activity}","empty.achievements.subtitle":"Logga några pass för att börja låsa upp märken.","empty.achievements.title":"Inga utmärkelser än","empty.class.subtitle":"Logga några pass för att avslöja din klass.","empty.class.title":"Inte tillräckligt med data än","empty.level.subtitle":"Ditt första synkade pass startar klättringen.","empty.level.title":"Ingen total statistik än","empty.player.subtitle":"Kräver lite träningshistorik för att räkna ut din statistik.","empty.player.title":"Inte tillräckligt med data än","level.label":"NIVÅ","level.source":"{count} loggade pass","level.subtitle":"Drivs av din totala träningsbelastning","level.title.grinder":"Uthållighetsslitare","level.title.legend":"Levande legend","level.title.novice":"Färsk rekryt","level.title.veteran":"Erfaren veteran","level.xp_to_next":"{xp} XP till nivå {level}","level.xp_total":"{xp} XP","player.archetype":"Specialist på {activity}","player.help.title":"Vad de betyder","player.help.sta":"STA · Stamina, från din kondition (CTL): hur mycket jämn träningsbelastning du klarar","player.help.pwr":"PWR · Kraft, från medelintensiteten (TSS) i dina senaste pass","player.help.rec":"REC · Återhämtning, ditt aktuella beredskapsvärde","player.help.con":"CON · Regelbundenhet, loggade pass de senaste 30 dagarna","player.help.end":"END · Uthållighet, från din uppskattade VO2max","player.help.frm":"FRM · Form, från din aktuella träningsbalans (TSB)","player.help.disclaimer":"Ungefärliga betyg beräknade från din egen data - inte ett officiellt Suunto-mått.","player.tier.bronze":"Brons","player.tier.gold":"Guld","player.tier.legendary":"Legendarisk","player.tier.silver":"Silver","records.climb":"Största stigning","records.distance":"Längsta distans","records.pace":"Snabbaste tempo","records.session":"Tuffaste pass","records.streak":"Längsta svit","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dagar","records.workout":"Längsta pass","class.name.cycling":"Uthållighetskrigare","class.name.running":"Sprinter","class.name.trekking":"Stigfinnare","class.name.walking":"Vandringsman","class.name.gym":"Styrkebärsärk","class.name.swim":"Vågbetvingare","class.name.ski":"Frostlöpare","class.name.row":"Roddare","class.name.other":"Allroundare","class.flavor.cycling":"Byggd för långa, jämna insatser snarare än ren fart. Varje annan sport är alternativträning för motorn.","class.flavor.running":"Snabb från start och byggd för tempo. Distansen är ett medel, inte ett mål.","class.flavor.trekking":"Hemma i ojämn terräng, i rörelse i timmar i sträck.","class.flavor.walking":"Jämna, skonsamma kilometer blir många - regelbundenhet före intensitet.","class.flavor.gym":"Ren kraft före distans. Styrkepassen kommer först.","class.flavor.swim":"Uthållighet smidd i vattnet, tag för tag.","class.flavor.ski":"Fart och rytm över snö och kyla.","class.flavor.row":"Rytmisk kraft, ett drag i taget.","class.flavor.other":"Ingen enskild sport dominerar - en verkligt balanserad mix.","card.next_milestone.title":"Nästa milstolpe","card.next_milestone.subtitle":"Total distans","empty.next_milestone.title":"Ingen total distans än","next_milestone.remaining_label":"kvar","next_milestone.target":"till {target} km totalt - {pct}% klart","next_milestone.workouts_one":"{count} pass kvar till {target} totalt","next_milestone.workouts_other":"{count} pass kvar till {target} totalt","next_milestone.eta_one":"med {pace} km/vecka - ungefär {weeks} vecka kvar","next_milestone.eta_other":"med {pace} km/vecka - ungefär {weeks} veckor kvar","card.story.title":"Din Suunto-historia","card.story.subtitle":"Sedan ditt första pass","empty.story.title":"Ingen total statistik än","story.top_activity":"{activity} - din huvudaktivitet","story.top_activity_share":"{count} pass - {pct}% av din historik","story.record_subtitle":"Ditt personliga rekord genom tiderna","card.sleep_clock.title":"Sömnklocka","card.sleep_clock.subtitle":"I natt","empty.sleep_clock.title":"Ingen sömndata än","empty.sleep_clock.subtitle":"Sov med klockan på för att se det här.","sleep_clock.quality":"{pct}% sömnkvalitet","card.sleep_rhythm.title":"Sömnrytm","card.sleep_rhythm.subtitle":"Senaste 7 nätterna","empty.sleep_rhythm.title":"Inte tillräckligt med sömnhistorik än","empty.sleep_rhythm.subtitle":"Kräver några nätters data för att visa ett mönster.","sleep_rhythm.avg_bedtime":"Snitt läggdags {time}","sleep_rhythm.avg_wake":"Snitt uppvaknande {time}","sleep_rhythm.spread":"{minutes} min spridning","sleep_rhythm.legend_normal":"Typisk natt","sleep_rhythm.legend_outlier":"{minutes}+ min från snittet","card.route.title":"Rutt","empty.route.title":"Ingen ruttdata","empty.route.subtitle":"Inomhuspass har inget GPS-spår.","route.pace_slower":"Långsammare","route.pace_faster":"Snabbare","card.month_story.title":"Denna månad","empty.month_story.title":"Inga pass än denna månad","story.share_month":"{count} pass - {pct}% av denna månad","story.record_subtitle_month":"Ditt rekord denna månad","card.year_story.title":"I år","empty.year_story.title":"Inga pass än i år","story.share_year":"{count} pass - {pct}% av i år","story.record_subtitle_year":"Ditt rekord i år","card.best_efforts.title":"Bästa insatser","card.best_efforts.subtitle":"{count} av {total} registrerade","empty.best_efforts.title":"Inga bästa insatser än","empty.best_efforts.subtitle":"Registreras från löppass framöver, inte bakåt i tiden.","best_efforts.not_yet":"Inte registrerat än","distance.half_marathon":"Halvmaraton","distance.marathon":"Maraton","card.steps_today.title":"Steg idag","card.steps_today.subtitle":"Mål: {goal} steg","empty.steps_today.title":"Ingen stegdata än","editor.steps_goal_label":"Dagsmål (steg)","steps_today.goal_pct":"{pct}% av dagsmålet","steps_today.vs_avg_up":"+{pct}% mot ditt 7-dagarssnitt ({avg})","steps_today.vs_avg_down":"-{pct}% mot ditt 7-dagarssnitt ({avg})","card.steps_trend.title":"Stegtrend","card.steps_trend.subtitle":"Senaste {days} dagarna","empty.steps_trend.title":"Ingen steghistorik än","steps_trend.legend_met":"Mål nått","steps_trend.legend_below":"Under målet","steps_trend.days_at_goal":"Dagar med nått mål","card.month_records.title":"Månadens rekord","card.month_records.subtitle":"{count} av {total} satta denna månad","empty.month_records.title":"Inga rekord än denna månad","empty.month_records.subtitle":"Personbästan för denna månad visas här.","card.year_records.title":"Årets rekord","card.year_records.subtitle":"{count} av {total} satta i år","empty.year_records.title":"Inga rekord än i år","empty.year_records.subtitle":"Personbästan för i år visas här.","card.running_dynamics.title":"Löpdynamik","card.running_dynamics.subtitle":"{activity} - senaste {count} passen","empty.running_dynamics.title":"Inte tillräckligt med data än","empty.running_dynamics.subtitle":"Kräver några färska löp- eller gångpass med kadensdata.","card.weekly_steps_goal.title":"Veckomål för steg","card.weekly_steps_goal.subtitle":"{value} av {goal} steg","empty.weekly_steps_goal.title":"Ingen stegdata än","editor.weekly_steps_goal_label":"Veckomål (steg)","card.goals_overview.title":"Måloversikt","card.goals_overview.subtitle":"Denna vecka","empty.goals_overview.title":"Ingen måldata än","card.week_compare.title":"Denna vecka mot förra","card.week_compare.subtitle":"Rullande 7-dagarssummor","empty.week_compare.title":"Inte tillräckligt med historik än","empty.week_compare.subtitle":"Titta igen om ungefär en vecka för en jämförelse.","week_compare.legend_now":"Denna vecka","week_compare.legend_prev":"Förra veckan","card.sleep_detail.title":"Sömndetaljer","card.sleep_detail.subtitle":"I natt","label.awake":"Vaken","label.sleep_other":"Övrig sömn","sleep_detail.total_sleep":"total sömn","sleep_detail.in_bed":"{duration} i sängen","sleep_detail.bedtime":"Läggdags","sleep_detail.wake":"Uppvaknande","sleep_detail.stages":"Sömnstadier","sleep_detail.efficiency":"Sömneffektivitet","sleep_detail.efficiency_sub":"Tid sovande ÷ tid i sängen","sleep_detail.vitals":"Vitalvärden","sleep_detail.insight_excellent":"{pct}% djupsömn · ett utmärkt återhämtningsfönster.","sleep_detail.insight_solid":"{pct}% djupsömn · en stabil natts återhämtning.","sleep_detail.insight_light":"{pct}% djupsömn · lättare än vanligt.","editor.energy_goal_source_label":"Kalorimål från","editor.sleep_goal_source_label":"Sömnmål från","editor.training_goal_source_label":"Mål för träningstid från","editor.energy_goal_label":"Dagsmål (aktiva kcal)","editor.sleep_goal_label":"Sömnmål (timmar)","editor.training_goal_label":"Veckomål (timmar)","editor.show_goals_label":"Visa mål","editor.source_suunto_none":"Suunto-appen (inget mål satt)","editor.distance_goal_hint":"Suunto-appen har inget distansmål, så det här är alltid ditt eget.","card.daily_goals.title":"Dagliga mål","card.daily_goals.subtitle":"Steg, kalorier och sömn","empty.daily_goals.title":"Ingen måldata än","stat.active_kcal":"Aktiva kcal","stat.sleep":"Sömn","stat.training_time":"Träningstid","goal.of":"av {goal}","goal.energy_active_of":"{kcal} aktiva av {goal}","sleep_goal.label":"Sömnmål","sleep_goal.short":"{value} av {goal} · {missing} saknas","sleep_goal.met":"{value} av {goal} · mål nått","sleep_trends.nights_at_goal":"Nätter med nått mål","sleep_trends.avg_vs_goal":"Snitt mot mål","sleep_trends.legend_goal":"Mål {goal}","card.ai_insight.title":"AI-insikt","empty.ai_insight.title":"AI-insikten är avstängd","empty.ai_insight.subtitle":"Slå på den i integrationen: Konfigurera -> Daglig AI-insikt","empty.ai_insight.waiting":"Ingen AI-insikt än idag","ai_insight.generating":"Analysen skapas","ai_insight.night":"natten {night}","ai_insight.no_night":"senaste natten är inte synkad än","ai_insight.no_section":"Ingen data för den här delen","ai_insight.advice":"Råd för idag","ai_insight.disclaimer":"Inte medicinsk rådgivning","ai_insight.section.sleep":"Sömn","ai_insight.section.recovery":"Återhämtning","ai_insight.section.training":"Träning","ai_insight.section.activity":"Aktivitet","ai_insight.section_full.sleep":"Sömn","ai_insight.section_full.recovery":"Hälsa och återhämtning","ai_insight.section_full.training":"Träning","ai_insight.section_full.activity":"Daglig aktivitet","ai_insight.status.good":"Bra","ai_insight.status.ok":"OK","ai_insight.status.caution":"Försiktigt","ai_insight.status.rest":"Vila","strategy.title":"Träning","strategy.none":"Inget Suunto-konto","strategy.none_text":"Inget konto från integrationen Suunto App hittades. Lägg till integrationen under Inställningar > Enheter och tjänster och ladda sedan om den här instrumentpanelen.","strategy.section.today":"Idag","strategy.section.ai":"AI-analys","strategy.section.sleep":"Sömn","strategy.section.recovery":"Återhämtning","strategy.section.last_workout":"Senaste passet","strategy.section.load":"Belastning och form","strategy.section.week":"Denna vecka","strategy.section.records":"Rekord","strategy.section.history":"Historik och profil","strategy.section.gear":"Utrustning och pendling","card.ai_weekly.title":"AI-veckosammanfattning","empty.ai_weekly.subtitle":"Kräver ha-suunto 1.0.38 eller senare med AI påslagen: Konfigurera -> AI","empty.ai_weekly.waiting":"Ingen AI-veckosammanfattning än","ai_weekly.week":"vecka {range}","ai_weekly.advice":"Plan för nästa vecka","editor.ai_report_label":"Rapport","editor.ai_report_daily":"Daglig insikt","editor.ai_report_weekly":"Veckosammanfattning","editor.ai_section_label":"Del","editor.ai_single_label":"Visa bara den här delen","card.sleep_regularity.title":"Sömnregelbundenhet","sleep_regularity.subtitle":"Senaste 4 veckorna · {nights} nätter","empty.sleep_regularity.title":"Inte tillräckligt med nätter än","empty.sleep_regularity.subtitle":"Kräver ungefär en vecka av nätter i följd med klockan på.","sleep_regularity.bed":"Snitt läggdags {time}","sleep_regularity.wake":"Snitt uppvaknande {time}","sleep_regularity.mid_work":"Mitt i sömnen, nätter sön-tors {time}","sleep_regularity.mid_free":"Mitt i sömnen, nätter fre/lör {time}","band.regularity.regular":"Regelbunden","band.regularity.fair":"Ganska regelbunden","band.regularity.irregular":"Oregelbunden","chip.regularity":"Regelbundenhet {value}","chip.social_jetlag":"Social jetlag {value}","card.aerobic_decoupling.title":"Aerob frikoppling","empty.aerobic_decoupling.title":"Inget långt pass analyserat än","empty.aerobic_decoupling.subtitle":"Visas efter ett pass på 40+ minuter med GPS och puls.","aerobic_decoupling.analyzed":"{minutes} min analyserat","aerobic_decoupling.hint":"under 5 % = stabil aerob bas","aerobic_decoupling.first_half":"1:a halvan","aerobic_decoupling.second_half":"2:a halvan","aerobic_decoupling.trend":"Senaste {count} analyserade passen","band.decoupling.coupled":"Kopplad","band.decoupling.moderate":"Måttlig drift","band.decoupling.high":"Hög drift","stat.decoupling":"Pulsdrift","card.personal_insights.title":"Det här fungerar för dig","personal_insights.subtitle":"Från dina senaste {nights} nätter","empty.personal_insights.title":"Inga tydliga mönster än","empty.personal_insights.subtitle":"Kräver några veckors sömn- och träningsdata. Bara tydliga skillnader visas.","personal_insights.these_nights":"de här nätterna","personal_insights.the_rest":"övriga","personal_insights.nights_count":"{with} mot {without} nätter","personal_insights.disclaimer":"Mönster i din egen data, inte bevis på orsak. Ett fynd kräver minst 4 nätter eller pass på varje sida.","insights.cond.late_workout":"Efter ett pass som slutar efter {time}","insights.cond.training_day":"På träningsdagar","insights.cond.hard_day":"Efter dina tuffaste träningsdagar","insights.cond.early_bed":"När du lägger dig före {bedtime}","insights.cond.free_night":"På fredags- och lördagsnätter","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Vilopuls","insights.metric.sleep":"Sömn","daily_brief.your_pattern":"Ditt mönster","editor.show_insight_label":"Visa ditt starkaste mönster","editor.look_section":"Utseende","editor.title":"Rubrik","editor.icon":"Ikon (t.ex. mdi:star)","editor.accent_color":"Accentfärg (t.ex. #e91e63 eller teal)","editor.accent_hint":"Samma färg i ljust och mörkt läge. En ogiltig färg ignoreras.","editor.accent_default":"Standard (bärnsten)","editor.accent_pink":"Rosa","editor.accent_purple":"Lila","editor.accent_teal":"Blågrön","editor.accent_green":"Grön","editor.accent_blue":"Blå","editor.hide_header":"Dölj rubrikrad","editor.hide_icon":"Dölj ikon","editor.hide_subtitle":"Dölj underrubrik","editor.hide_legend":"Dölj teckenförklaring","editor.text_size":"Textstorlek","text_size.normal":"Normal","text_size.large":"Stor (115%)","text_size.larger":"Större (130%)","text_size.largest":"Störst (150%)","editor.language":"Språk","editor.language_auto":"Home Assistants","editor.hide_sync_warning":"Dölj varningen om ej synkad klocka","editor.max_items":"Antal poster","editor.list_height":"Listhöjd (px)","card.stress_today.title":"Stress och återhämtning","stress_today.subtitle_today":"Idag fram till {time}","stress_today.subtitle_waiting":"Igår · idag är inte synkat än","stress_today.yesterday":"Igår","empty.stress_today.title":"Ingen stressdata än","empty.stress_today.subtitle":"Kräver Suunto App (inofficiell) 1.0.37 eller senare och en synkad klocka.","stress.state.recovering":"Återhämtning","stress.state.active":"Aktiv","stress.state.inactive":"Inaktiv","stress.state.stressed":"Stressad","insights.cond.hot_weather":"I värme ({temp}°C och varmare)","insights.cond.cold_weather":"I kyla ({temp}°C och kallare)","insights.metric.efficiency":"Effektivitet","insights.unit.per_beat":"m/slag","personal_insights.subtitle_days":"Från dina senaste {nights} nätter och {days} träningsdagar","personal_insights.these_workouts":"de här passen","personal_insights.workouts_count":"{with} mot {without} pass","personal_insights.speed_at_hr":"{with_speed} km/h vid {with_hr} bpm mot {without_speed} km/h vid {without_hr} bpm","sync.at":"synkad {time}","sync.yesterday":"synkad igår {time}","chip.not_synced":"Klockan inte synkad på {hours} h","editor.eink":"E-ink-skärm","eink.off":"Av","eink.bw":"Svartvit","eink.gray":"4 gråtoner","eink.red":"Svart, vit och röd","eink.yellow":"Svart, vit och gul","eink.color":"6 färger","editor.max_lines":"Max antal textrader","card.whats_new.title":"Nyheter","card.whats_new.subtitle":"Senaste {days} dagarna","whats_new.today":"Idag","whats_new.yesterday":"Igår","whats_new.now":"Nu","whats_new.empty":"Inget nytt de senaste {days} dagarna","whats_new.record":"Nytt rekord: {label} {value}","whats_new.record_year":"Årets rekord: {label} {value}","whats_new.record_month":"Månadens rekord: {label} {value}","whats_new.best_effort":"Bästa insats {distance}: {time}","whats_new.ai_daily":"Daglig AI-insikt","whats_new.ai_weekly":"AI-veckosammanfattning","whats_new.gear_due":"{name}: dags för service","editor.whats_new_show":"Visa","whats_new.kind.workouts":"Träningspass","whats_new.kind.records":"Rekord och bästa insatser","whats_new.kind.achievements":"Ruttprestationer","whats_new.kind.ai":"AI-rapporter","whats_new.kind.gear":"Service av utrustning"},da:{"stat.distance":"Distance","stat.duration":"Varighed","stat.avg_speed":"Gns. fart","stat.avg_pace":"Gns. tempo","stat.avg_hr":"Gns. puls","stat.max_hr":"Maks. puls","stat.training_effect":"Træningseffekt","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Følelse","stat.energy":"Energi","stat.time":"Tid","stat.workouts":"Træninger","stat.steps":"Skridt","stat.heart_rate":"Puls","stat.quality":"Kvalitet","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Hvilepuls","stat.resting_hr_delta":"Hvilepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresstilstand","stat.recovery_window":"Restitutionstid","stat.ctl":"CTL · kondition","stat.atl":"ATL · træthed","stat.tsb":"TSB · form","stat.readiness":"Parathed","stat.recovery_balance":"Restitutionsbalance","stat.training_suggestion":"Dagens forslag","stat.volume":"Volumen","stat.intensity":"Intensitet","stat.consistency":"Kontinuitet","stat.recovery":"Restitution","stat.variety":"Variation","card.hr_zones.title":"Pulszoner","card.hr_zones.last_workout":"Seneste træning","card.sleep_readiness.title":"Søvn og parathed","card.sleep_readiness.subtitle_no_wake":"{duration} søvn","card.sleep_readiness.subtitle_with_wake":"{duration} søvn · vågnede {time}","card.recovery.title":"Restitution","card.training_load.title":"Træningsbelastning","card.training_load.subtitle_fallback":"Udvikling i kondition (CTL)","card.week_stats.title":"Denne uge og livstid","card.week_stats.subtitle":"Seneste 7 dage","card.week_stats.lifetime_title":"Livstid pr. aktivitet","card.today.title":"I dag","card.today.subtitle":"Live fra dit ur","card.training_status.title":"Træningsstatus","card.training_profile.title":"Træningsprofil","card.training_profile.subtitle":"Din træning i et overblik","card.heart_rate.title":"Puls","empty.last_workout.title":"Ingen nylig træning","empty.last_workout.subtitle":"Synkronisér dit ur med Suunto-appen for at se den her.","empty.hr_zones.title":"Ingen zonedata","empty.hr_zones.subtitle":"Din næste udendørstræning med pulsbælte udfylder dette.","empty.sleep_readiness.title":"Ingen søvndata endnu","empty.sleep_readiness.subtitle":"Sov med dit ur på for at se det her.","empty.recovery.title":"Ingen restitutionsdata endnu","empty.training_load.title":"Din træningsbelastning bygges op","empty.training_load.subtitle":"Kræver lidt træningshistorik for at blive beregnet - kig forbi igen efter et par træninger.","empty.week_stats.title":"Ingen træningshistorik endnu","empty.today.title":"Ingen live-data endnu","empty.training_status.title":"Ikke nok data endnu","empty.training_status.subtitle":"Kræver lidt træningshistorik for at blive beregnet.","empty.training_profile.title":"Ikke nok data endnu","empty.training_profile.subtitle":"Kræver data fra et par sensorer mere, før din profil kan beregnes.","empty.heart_rate.title":"Ingen live-puls endnu","empty.loading":"Indlæser...","empty.generic_error":"Kunne ikke indlæse Suunto-data.","error.no_device":"Ingen Suunto-enhed fundet - er integrationen suunto_app sat op?","error.multiple_devices":'Flere Suunto-enheder fundet - angiv "device_id" i kortets konfiguration.',"error.device_missing":'Den konfigurerede enhed "{device}" har ingen suunto_app-entiteter.',"band.readiness.great":"Fremragende","band.readiness.fair":"Okay","band.readiness.low":"Lav","band.recovery.well":"Godt restitueret","band.recovery.partial":"Delvist restitueret","band.recovery.low":"Lav restitution","band.recovery.fully":"Fuldt restitueret","band.recovery.recovering":"Restituerer · {time} tilbage","band.hrv.low":"HRV lav","band.hrv.high":"HRV høj","band.hrv.balanced":"HRV balanceret","band.form.fresh":"Frisk","band.form.neutral":"Neutral","band.form.fatigued":"Træt","band.form.very_fatigued":"Meget træt","band.acwr.safe":"Sikker zone","band.acwr.low":"Lav belastning","band.acwr.high":"Høj belastning - skaderisiko","band.suggestion.hard":"Giv den gas","band.suggestion.moderate":"Moderat indsats","band.suggestion.easy":"Tag den med ro","band.suggestion.rest":"Hviledag","chip.workout_logged_today":"Træning registreret i dag","chip.workout_today":"Træning i dag","chip.recovering":"Restituerer","chip.nap":"{minutes} min lur","chip.nap_earlier":"{minutes} min lur (tidligere)","chip.workouts_30d":"{count} træninger de seneste 30 dage","chip.acwr":"ACWR {value} · {label}","profile.summary":"Stærkest i {strong} · svagest i {light}","chip.more_activity_one":"+{count} aktivitetstype mere","chip.more_activity_other":"+{count} aktivitetstyper mere","chip.unusual_recovery":"Usædvanlig restitution","chip.days_since_one":"{count} dag siden seneste træning","chip.days_since_other":"{count} dage siden seneste træning","chip.manually_added":"Tilføjet manuelt","chip.sleep_stale":"Ingen søvn fra i nat · nat {date}","readiness.balance_only":"Kun restitutionsbalance, ingen søvn","chip.no_hr":"Ingen puls","card.heart_rate.measured":"Målt {time}","card.heart_rate.measured_ago":"Målt {ago} · {time}","stat.energy_active_sub":"{kcal} aktive","energy.total_unit":"kcal i alt","energy.split":"{active} aktive · {bmr} BMR","card.commute.title":"Pendling","card.commute.subtitle_year":"I år i stedet for bilen","card.commute.subtitle_month":"Denne måned i stedet for bilen","commute.saved":"sparet","commute.fuel_co2":"{fuel} l brændstof · {co2} kg mindre CO2","stat.rides":"Ture","stat.days":"Dage","stat.avg_time":"Gns. tid","commute.this_month":"Denne måned:","commute.this_year":"I år:","commute.rides_n":"{n} ture","empty.commute.title":"Ingen pendlerture endnu","empty.commute.subtitle":"Træninger, som Suunto markerer som pendling, vises her.","card.gear.title":"Udstyr","card.gear.subtitle":"Distance og service","gear.remaining":"{km} tilbage","gear.over":"{km} over","chip.service":"Service","empty.gear.title":"Intet udstyr følges endnu","empty.gear.subtitle":"Tilføj udstyr i integrationens menu Konfigurer.","card.form_forecast.title":"Formprognose","card.form_forecast.subtitle":"Hvis du hviler fra i dag","stat.tomorrow":"I morgen","stat.peak_in":"Top om {days} d","stat.maintenance":"Hold kondition / uge","empty.form_forecast.title":"Ingen prognose endnu","card.daily_brief.title":"Dagligt overblik","empty.daily_brief.title":"Intet overblik endnu","achievement.count_one":"{count} præstation","achievement.count_other":"{count} præstationer","achievement.rank":"Placering #{rank} på denne rute","label.zone":"Zone {n}","label.deep":"Dyb","label.light":"Let","label.rem":"REM","editor.auto_detect":"Dette kort finder automatisk din Suunto-enhed - ingen konfiguration nødvendig.","editor.pick_device":"Der blev fundet flere Suunto-enheder - vælg, hvilken dette kort skal læse.","editor.device_label":"Suunto-enhed","editor.units_label":"Enheder","editor.units_metric":"Metrisk (km)","editor.units_imperial":"Imperial (mi)","editor.compact_label":"Kompakt tilstand","editor.days_label":"Trendvindue (dage)","editor.period_label":"Periode i overskriften","editor.period_year":"I år","editor.period_month":"Denne måned","editor.goal_source_label":"Skridtmål fra","editor.source_suunto":"Suunto-appen ({value})","editor.source_suunto_default":"Suunto-appen (intet mål angivet, bruger {value})","editor.source_custom":"Brugerdefineret","editor.fuel_source_label":"Brændstoftal fra","editor.source_integration":"Suunto-integrationen ({litres} l/100 km, {price} pr. l)","editor.source_integration_unknown":"Suunto-integrationen","editor.fuel_consumption_label":"Brændstofforbrug (l/100 km)","editor.fuel_price_label":"Brændstofpris pr. liter","editor.fuel_hint":"Skift integrationens værdier under Indstillinger > Enheder og tjenester > Suunto > Konfigurer.","card.lifetime.title":"Livstidstotaler","card.lifetime.subtitle":"Siden du startede","stat.active_days":"Aktive dage","empty.lifetime.title":"Ingen livstidsdata endnu","card.recent_workouts.title":"Seneste træninger","empty.recent_workouts.title":"Ingen nylige træninger","card.elevation.title":"Højde og stigning","stat.ascent":"Stigning","stat.descent":"Fald","stat.ascent_time":"Stigningstid","stat.descent_time":"Faldtid","stat.min_altitude":"Min. højde","stat.max_altitude":"Maks. højde","stat.ascent_rate":"Stigningshastighed","empty.elevation.title":"Ingen højdedata","empty.elevation.subtitle":"Kun udendørstræninger med barometer registrerer dette.","card.location.title":"Startsted","location.open_in_maps":"Åbn i Kort","empty.location.title":"Ingen positionsdata","empty.location.subtitle":"Indendørstræninger har intet GPS-startpunkt.","card.fitness.title":"Kondition","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Konditionsalder","fitness.measured":"Målt {time} · {activity}","empty.fitness.title":"Ingen konditionsdata endnu","empty.fitness.subtitle":"Suunto beregner kun dette ud fra løbe- eller gåture.","empty.fitness_trend.title":"Ingen konditionsdata endnu","empty.fitness_trend.subtitle":"Suunto beregner kun dette ud fra løbe- eller gåture.","card.pmc.title":"Præstationsstyring","card.pmc.subtitle":"{days}-dages trend","card.recovery_trends.title":"Restitutionstrends","card.recovery_trends.subtitle":"{days}-dages basislinje","empty.recovery_trends.title":"Ingen restitutionstrend endnu","card.weekly_volume.title":"Ugentlig volumen","card.weekly_volume.subtitle":"Seneste 12 uger","empty.weekly_volume.title":"Ingen data om ugentlig volumen endnu","stat.average":"Gennemsnit","stat.total":"I alt","card.hr_curve.title":"Pulskurve","card.hr_curve.subtitle":"Seneste 24 timer","stat.hr_now":"Nu","stat.hr_min":"Dagens min.","stat.hr_max":"Dagens maks.","empty.hr_curve.title":"Ingen live-pulsdata endnu","empty.hr_curve.subtitle":"Bær dit ur og synkronisér for at se dagens kurve her.","card.sleep_trends.title":"Søvntrends","card.sleep_trends.subtitle":"Seneste {days} nætter","empty.sleep_trends.title":"Ingen søvntrend endnu","card.weekly_goal.title":"Ugemål","card.weekly_goal.subtitle":"{value} af {goal} km","empty.weekly_goal.title":"Ingen ugentlig distance endnu","editor.goal_label":"Ugemål (km)","card.streak.title":"Aktivitetsstime","card.streak.subtitle":"Seneste 14 dage","streak.window_count_one":"{count} aktiv dag","streak.window_count_other":"{count} aktive dage","streak.days_one":"{count} dags stime","streak.days_other":"{count} dages stime","streak.none":"Ingen aktiv stime - kom i gang i dag","empty.streak.title":"Ingen træningshistorik endnu","just_finished.title":"Godt gået!","just_finished.idle.title":"Venter på din næste træning","just_finished.idle.subtitle":"Dette lyser op, lige efter dit ur har synkroniseret en ny.","empty.just_finished.title":"Ingen nylig træning","card.activity_trends.title":"Aktivitetstrends","card.activity_trends.subtitle":"Seneste {days} dage","empty.activity_trends.title":"Ingen aktivitetstrend endnu","card.recovery_balance_trend.title":"Trend for restitutionsbalance","card.recovery_balance_trend.subtitle":"Seneste {days} dage","empty.recovery_balance_trend.title":"Ingen restitutionstrend endnu","card.readiness_trend.title":"Trend for parathed","card.readiness_trend.subtitle":"Seneste {days} dage","empty.readiness_trend.title":"Ingen trend for parathed endnu","stat.cadence":"Kadence","stat.stride_length":"Skridtlængde","stat.pct_hrmax":"% af maks. puls","stat.sleep_avg_hr":"Gns. puls i søvn","stat.sleep_min_hr":"Min. puls i søvn","chip.bedtime":"Sengetid {time}","card.activity_calendar.title":"Aktivitetskalender","card.activity_calendar.subtitle":"Seneste 6 uger","empty.activity_calendar.title":"Ingen træningshistorik endnu","activity_calendar.active_days_one":"{count} aktiv dag","activity_calendar.active_days_other":"{count} aktive dage","card.workout_comparison.title":"Sammenligning af træninger","card.workout_comparison.vs":"mod {time}","empty.workout_comparison.title":"Ikke nok matchende træninger endnu","empty.workout_comparison.subtitle":"Lav den samme aktivitet to gange for at se en sammenligning.","stat.distance_delta":"Distance ({delta})","stat.duration_delta":"Varighed ({delta})","stat.avg_hr_delta":"Gns. puls ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"I tal","card.milestones.subtitle":"Siden du startede","empty.milestones.title":"Ingen livstidsdata endnu","stat.earth_laps":"Gange jorden rundt","stat.marathons":"Maratoner","stat.moon_pct":"% til Månen","stat.burgers":"Burgere","card.athlete_profile.title":"Træningspersonlighed","empty.athlete_profile.title":"Ikke nok data endnu","personality.activity.cycling":"Cykelrytter","personality.activity.running":"Løber","personality.activity.trekking":"Vandrer","personality.activity.walking":"Gåtursentusiast","personality.activity.gym":"Styrkeatlet","personality.activity.swim":"Svømmer","personality.activity.ski":"Skiløber","personality.activity.row":"Roer","personality.activity.other":"Multisportsatlet","personality.schedule.weekend":"Weekendkriger","personality.schedule.weekday":"Hverdagsmotionist","personality.schedule.balanced":"Balanceret planlægger","personality.time.morning":"Morgenfugl","personality.time.afternoon":"Middagsmotionist","personality.time.evening":"Aftenatlet","personality.time.night":"Natugle","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · seneste {count} træninger","empty.pace_trend.title":"Ikke nok matchende træninger endnu","empty.pace_trend.subtitle":"Lav den samme aktivitet et par gange for at se en trend.","pace_trend.faster":"Bliver hurtigere","pace_trend.slower":"Bliver langsommere","pace_trend.steady":"Holder niveauet","card.lap_splits.title":"Omgangstider","empty.lap_splits.title":"Ingen omgangsdata","empty.lap_splits.subtitle":"Ikke alle træninger har omgange - din næste træning med omgange udfylder dette.","stat.laps":"Omgange","stat.fastest_lap":"Hurtigste omgang","label.lap":"Omgang {n}","card.training_effect_trend.title":"Trend for træningseffekt","card.fitness_trend.title":"Konditionstrend","empty.training_effect_trend.title":"Ingen data om træningseffekt endnu","achievements.badge.around_globe":"Jorden rundt","achievements.badge.century_club":"Hundredeklubben - 100 træninger","achievements.badge.consistency_king":"Kontinuitetskonge - 14 dages stime","achievements.badge.iron_will":"Jernvilje - 30 dages stime","achievements.badge.days_100":"100 aktive dage","achievements.badge.distance_1000":"1.000 km-klubben","achievements.badge.distance_5000":"5.000 km-klubben","achievements.badge.elite_engine":"Elitemotor - VO2max 55+","achievements.badge.energy_100k":"100.000 kcal forbrændt","achievements.badge.energy_1m":"1.000.000 kcal forbrændt","achievements.badge.full_year":"Et helt år aktiv","achievements.badge.hours_100":"100 timer","achievements.badge.hours_500":"500 timer","achievements.badge.jack_of_all_trades":"Altmuligmand - 5+ sportsgrene","achievements.badge.multi_sport":"Multisportsatlet - 3+ sportsgrene","achievements.badge.solid_engine":"Solid motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ træninger","achievements.badge.workouts_1000":"1.000 træninger","achievements.badge.workouts_250":"250 træninger","achievements.badge.workouts_500":"500 træninger","achievements.category.days":"Aktive dage","achievements.category.distance":"Distance","achievements.category.energy":"Energi","achievements.category.fitness":"Konditionsniveau","achievements.category.records":"Personlige rekorder","achievements.category.time":"Træningstid","achievements.category.variety":"Variation","achievements.category.workouts":"Registrerede træninger","card.achievements.subtitle":"{unlocked} af {total} låst op","card.achievements.title":"Bedrifter","achievements.next":"Næste: {name} ({pct}%)","class.rest":"+{pct}% andre aktiviteter","class.tag":"Build med fokus på {activity}","empty.achievements.subtitle":"Registrér et par træninger for at begynde at låse mærker op.","empty.achievements.title":"Ingen bedrifter endnu","empty.class.subtitle":"Registrér et par træninger for at afsløre din klasse.","empty.class.title":"Ikke nok data endnu","empty.level.subtitle":"Din første synkroniserede træning starter opstigningen.","empty.level.title":"Ingen livstidsdata endnu","empty.player.subtitle":"Kræver lidt træningshistorik for at beregne dine stats.","empty.player.title":"Ikke nok data endnu","level.label":"NIVEAU","level.source":"{count} træninger registreret","level.subtitle":"Drevet af din samlede træningsbelastning","level.title.grinder":"Udholdenhedsslider","level.title.legend":"Levende legende","level.title.novice":"Ny rekrut","level.title.veteran":"Erfaren veteran","level.xp_to_next":"{xp} XP til niveau {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-specialist","player.help.title":"Hvad de betyder","player.help.sta":"STA · Stamina, ud fra din kondition (CTL): hvor meget stabil træningsbelastning du kan klare","player.help.pwr":"PWR · Kraft, ud fra den gennemsnitlige intensitet (TSS) i dine seneste træninger","player.help.rec":"REC · Restitution, din aktuelle parathedsscore","player.help.con":"CON · Kontinuitet, træninger registreret de seneste 30 dage","player.help.end":"END · Udholdenhed, ud fra din estimerede VO2max","player.help.frm":"FRM · Form, ud fra din aktuelle træningsbalance (TSB)","player.help.disclaimer":"Heuristiske vurderinger beregnet ud fra dine egne data - ikke en officiel Suunto-måling.","player.tier.bronze":"Bronze","player.tier.gold":"Guld","player.tier.legendary":"Legendarisk","player.tier.silver":"Sølv","records.climb":"Største stigning","records.distance":"Længste distance","records.pace":"Hurtigste tempo","records.session":"Hårdeste træning","records.streak":"Længste stime","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dage","records.workout":"Længste træning","class.name.cycling":"Udholdenhedskriger","class.name.running":"Sprinter","class.name.trekking":"Stifinder","class.name.walking":"Vagabond","class.name.gym":"Styrkeberserker","class.name.swim":"Bølgekalder","class.name.ski":"Frostløber","class.name.row":"Åremand","class.name.other":"Allrounder","class.flavor.cycling":"Bygget til lange, stabile indsatser frem for rå fart. Alle andre sportsgrene er krydstræning for motoren.","class.flavor.running":"Hurtig fra start og bygget til tempo. Distance er et middel til et mål.","class.flavor.trekking":"Hjemme i ujævnt terræn, hvor du tilbagelægger strækninger i timevis.","class.flavor.walking":"Stabile kilometer med lav belastning løber op - kontinuitet frem for intensitet.","class.flavor.gym":"Rå kraft frem for distance. Styrketræning kommer først.","class.flavor.swim":"Udholdenhed smedet i vandet, tag for tag.","class.flavor.ski":"Fart og rytme over sne og kulde.","class.flavor.row":"Rytmisk kraft, ét tag ad gangen.","class.flavor.other":"Ingen enkelt sport dominerer - et ægte balanceret mix.","card.next_milestone.title":"Næste milepæl","card.next_milestone.subtitle":"Samlet distance","empty.next_milestone.title":"Ingen samlet distance endnu","next_milestone.remaining_label":"tilbage","next_milestone.target":"til {target} km i alt - {pct}% nået","next_milestone.workouts_one":"{count} træning til {target} i alt","next_milestone.workouts_other":"{count} træninger til {target} i alt","next_milestone.eta_one":"med {pace} km/uge - cirka {weeks} uge tilbage","next_milestone.eta_other":"med {pace} km/uge - cirka {weeks} uger tilbage","card.story.title":"Din Suunto-historie","card.story.subtitle":"Siden din første træning","empty.story.title":"Ingen livstidsdata endnu","story.top_activity":"{activity} - din hovedaktivitet","story.top_activity_share":"{count} træninger - {pct}% af din historik","story.record_subtitle":"Din personlige rekord gennem tiden","card.sleep_clock.title":"Søvnur","card.sleep_clock.subtitle":"I nat","empty.sleep_clock.title":"Ingen søvndata endnu","empty.sleep_clock.subtitle":"Sov med dit ur på for at se det her.","sleep_clock.quality":"{pct}% søvnkvalitet","card.sleep_rhythm.title":"Søvnrytme","card.sleep_rhythm.subtitle":"Seneste 7 nætter","empty.sleep_rhythm.title":"Ikke nok søvnhistorik endnu","empty.sleep_rhythm.subtitle":"Kræver data fra et par nætter for at vise et mønster.","sleep_rhythm.avg_bedtime":"Gns. sengetid {time}","sleep_rhythm.avg_wake":"Gns. opvågning {time}","sleep_rhythm.spread":"{minutes} min spredning","sleep_rhythm.legend_normal":"Typisk nat","sleep_rhythm.legend_outlier":"{minutes}+ min fra gennemsnittet","card.route.title":"Rute","empty.route.title":"Ingen rutedata","empty.route.subtitle":"Indendørstræninger har intet GPS-spor.","route.pace_slower":"Langsommere","route.pace_faster":"Hurtigere","card.month_story.title":"Denne måned","empty.month_story.title":"Ingen træninger endnu denne måned","story.share_month":"{count} træninger - {pct}% af denne måned","story.record_subtitle_month":"Din rekord denne måned","card.year_story.title":"I år","empty.year_story.title":"Ingen træninger endnu i år","story.share_year":"{count} træninger - {pct}% af året","story.record_subtitle_year":"Din rekord i år","card.best_efforts.title":"Bedste tider","card.best_efforts.subtitle":"{count} af {total} registreret","empty.best_efforts.title":"Ingen bedste tider endnu","empty.best_efforts.subtitle":"Registreres fra løbetræninger fremover, ikke bagudrettet.","best_efforts.not_yet":"Endnu ikke registreret","distance.half_marathon":"Halvmaraton","distance.marathon":"Maraton","card.steps_today.title":"Skridt i dag","card.steps_today.subtitle":"Mål: {goal} skridt","empty.steps_today.title":"Ingen skridtdata endnu","editor.steps_goal_label":"Dagligt mål (skridt)","steps_today.goal_pct":"{pct}% af dagligt mål","steps_today.vs_avg_up":"+{pct}% i forhold til dit 7-dages gennemsnit ({avg})","steps_today.vs_avg_down":"-{pct}% i forhold til dit 7-dages gennemsnit ({avg})","card.steps_trend.title":"Skridttrend","card.steps_trend.subtitle":"Seneste {days} dage","empty.steps_trend.title":"Ingen skridthistorik endnu","steps_trend.legend_met":"Mål nået","steps_trend.legend_below":"Under mål","steps_trend.days_at_goal":"Dage med mål nået","card.month_records.title":"Månedens rekorder","card.month_records.subtitle":"{count} af {total} sat denne måned","empty.month_records.title":"Ingen rekorder endnu denne måned","empty.month_records.subtitle":"Personlige rekorder for denne måned vises her.","card.year_records.title":"Årets rekorder","card.year_records.subtitle":"{count} af {total} sat i år","empty.year_records.title":"Ingen rekorder endnu i år","empty.year_records.subtitle":"Personlige rekorder for i år vises her.","card.running_dynamics.title":"Løbedynamik","card.running_dynamics.subtitle":"{activity} - seneste {count} træninger","empty.running_dynamics.title":"Ikke nok data endnu","empty.running_dynamics.subtitle":"Kræver et par nylige træninger til fods med kadencedata.","card.weekly_steps_goal.title":"Ugentligt skridtmål","card.weekly_steps_goal.subtitle":"{value} af {goal} skridt","empty.weekly_steps_goal.title":"Ingen skridtdata endnu","editor.weekly_steps_goal_label":"Ugemål (skridt)","card.goals_overview.title":"Måloversigt","card.goals_overview.subtitle":"Denne uge","empty.goals_overview.title":"Ingen måldata endnu","card.week_compare.title":"Denne uge mod sidste uge","card.week_compare.subtitle":"Løbende 7-dages totaler","empty.week_compare.title":"Ikke nok historik endnu","empty.week_compare.subtitle":"Kig forbi igen om cirka en uge for at få en sammenligning.","week_compare.legend_now":"Denne uge","week_compare.legend_prev":"Sidste uge","card.sleep_detail.title":"Søvndetaljer","card.sleep_detail.subtitle":"I nat","label.awake":"Vågen","label.sleep_other":"Anden søvn","sleep_detail.total_sleep":"samlet søvn","sleep_detail.in_bed":"{duration} i sengen","sleep_detail.bedtime":"Sengetid","sleep_detail.wake":"Opvågning","sleep_detail.stages":"Søvnstadier","sleep_detail.efficiency":"Søvneffektivitet","sleep_detail.efficiency_sub":"Tid i søvn ÷ tid i sengen","sleep_detail.vitals":"Vitale værdier","sleep_detail.insight_excellent":"{pct}% dyb søvn · et fremragende restitutionsvindue.","sleep_detail.insight_solid":"{pct}% dyb søvn · en solid nats restitution.","sleep_detail.insight_light":"{pct}% dyb søvn · lettere end normalt.","editor.energy_goal_source_label":"Kaloriemål fra","editor.sleep_goal_source_label":"Søvnmål fra","editor.training_goal_source_label":"Mål for træningstid fra","editor.energy_goal_label":"Dagligt mål (aktive kcal)","editor.sleep_goal_label":"Søvnmål (timer)","editor.training_goal_label":"Ugemål (timer)","editor.show_goals_label":"Vis mål","editor.source_suunto_none":"Suunto-appen (intet mål angivet)","editor.distance_goal_hint":"Suunto-appen har intet distancemål, så dette er altid dit eget.","card.daily_goals.title":"Daglige mål","card.daily_goals.subtitle":"Skridt, kalorier og søvn","empty.daily_goals.title":"Ingen måldata endnu","stat.active_kcal":"Aktive kcal","stat.sleep":"Søvn","stat.training_time":"Træningstid","goal.of":"af {goal}","goal.energy_active_of":"{kcal} aktive af {goal}","sleep_goal.label":"Søvnmål","sleep_goal.short":"{value} af {goal} · {missing} for lidt","sleep_goal.met":"{value} af {goal} · mål nået","sleep_trends.nights_at_goal":"Nætter med mål nået","sleep_trends.avg_vs_goal":"Gns. mod mål","sleep_trends.legend_goal":"Mål {goal}","card.ai_insight.title":"AI-analyse","empty.ai_insight.title":"AI-analyse er slået fra","empty.ai_insight.subtitle":"Slå den til i integrationen: Konfigurer -> Daglig AI-analyse","empty.ai_insight.waiting":"Ingen AI-analyse endnu i dag","ai_insight.generating":"Genererer analysen","ai_insight.night":"nat {night}","ai_insight.no_night":"sidste nat er ikke synkroniseret endnu","ai_insight.no_section":"Ingen data for denne sektion","ai_insight.advice":"Råd for i dag","ai_insight.disclaimer":"Ikke medicinsk rådgivning","ai_insight.section.sleep":"Søvn","ai_insight.section.recovery":"Restitution","ai_insight.section.training":"Træning","ai_insight.section.activity":"Aktivitet","ai_insight.section_full.sleep":"Søvn","ai_insight.section_full.recovery":"Sundhed og restitution","ai_insight.section_full.training":"Træning","ai_insight.section_full.activity":"Daglig aktivitet","ai_insight.status.good":"Godt","ai_insight.status.ok":"OK","ai_insight.status.caution":"Forsigtig","ai_insight.status.rest":"Hvile","strategy.title":"Træning","strategy.none":"Ingen Suunto-konto","strategy.none_text":"Der blev ikke fundet nogen konto fra integrationen Suunto App. Tilføj integrationen under Indstillinger > Enheder og tjenester, og genindlæs derefter dette dashboard.","strategy.section.today":"I dag","strategy.section.ai":"AI-analyse","strategy.section.sleep":"Søvn","strategy.section.recovery":"Restitution","strategy.section.last_workout":"Seneste træning","strategy.section.load":"Belastning og form","strategy.section.week":"Denne uge","strategy.section.records":"Rekorder","strategy.section.history":"Historik og profil","strategy.section.gear":"Udstyr og pendling","card.ai_weekly.title":"Ugentlig AI-opsummering","empty.ai_weekly.subtitle":"Kræver ha-suunto 1.0.38 eller nyere med AI slået til: Konfigurer -> AI","empty.ai_weekly.waiting":"Ingen ugentlig AI-opsummering endnu","ai_weekly.week":"uge {range}","ai_weekly.advice":"Plan for næste uge","editor.ai_report_label":"Rapport","editor.ai_report_daily":"Daglig analyse","editor.ai_report_weekly":"Ugentlig opsummering","editor.ai_section_label":"Sektion","editor.ai_single_label":"Vis kun denne sektion","card.sleep_regularity.title":"Søvnregelmæssighed","sleep_regularity.subtitle":"Seneste 4 uger · {nights} nætter","empty.sleep_regularity.title":"Ikke nok nætter endnu","empty.sleep_regularity.subtitle":"Kræver omkring en uge med sammenhængende nætter med uret på.","sleep_regularity.bed":"Gns. sengetid {time}","sleep_regularity.wake":"Gns. opvågning {time}","sleep_regularity.mid_work":"Søvnens midtpunkt, nætter søn-tor {time}","sleep_regularity.mid_free":"Søvnens midtpunkt, nætter fre/lør {time}","band.regularity.regular":"Regelmæssig","band.regularity.fair":"Ret regelmæssig","band.regularity.irregular":"Uregelmæssig","chip.regularity":"Regelmæssighed {value}","chip.social_jetlag":"Social jetlag {value}","card.aerobic_decoupling.title":"Aerob afkobling","empty.aerobic_decoupling.title":"Ingen lang træning analyseret endnu","empty.aerobic_decoupling.subtitle":"Vises efter en træning på 40+ minutter med GPS og puls.","aerobic_decoupling.analyzed":"{minutes} min analyseret","aerobic_decoupling.hint":"under 5 % = solid aerob base","aerobic_decoupling.first_half":"1. halvdel","aerobic_decoupling.second_half":"2. halvdel","aerobic_decoupling.trend":"Seneste {count} analyserede træninger","band.decoupling.coupled":"Koblet","band.decoupling.moderate":"Moderat drift","band.decoupling.high":"Høj drift","stat.decoupling":"Pulsdrift","card.personal_insights.title":"Det virker for dig","personal_insights.subtitle":"Fra dine seneste {nights} nætter","empty.personal_insights.title":"Ingen tydelige mønstre endnu","empty.personal_insights.subtitle":"Kræver et par ugers søvn- og træningsdata. Kun tydelige forskelle vises.","personal_insights.these_nights":"disse nætter","personal_insights.the_rest":"resten","personal_insights.nights_count":"{with} mod {without} nætter","personal_insights.disclaimer":"Mønstre i dine egne data, ikke bevis for en årsag. Et fund kræver mindst 4 nætter eller træninger på hver side.","insights.cond.late_workout":"Efter en træning, der slutter efter {time}","insights.cond.training_day":"På træningsdage","insights.cond.hard_day":"Efter dine hårdeste træningsdage","insights.cond.early_bed":"Når du går i seng før {bedtime}","insights.cond.free_night":"I nætterne til lørdag og søndag","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Hvilepuls","insights.metric.sleep":"Søvn","daily_brief.your_pattern":"Dit mønster","editor.show_insight_label":"Vis dit stærkeste mønster","editor.look_section":"Udseende","editor.title":"Titel","editor.icon":"Ikon (f.eks. mdi:star)","editor.accent_color":"Accentfarve (f.eks. #e91e63 eller teal)","editor.accent_hint":"Samme farve i lys og mørk tilstand. En ugyldig farve ignoreres.","editor.accent_default":"Standard (rav)","editor.accent_pink":"Pink","editor.accent_purple":"Lilla","editor.accent_teal":"Blågrøn","editor.accent_green":"Grøn","editor.accent_blue":"Blå","editor.hide_header":"Skjul overskrift","editor.hide_icon":"Skjul ikon","editor.hide_subtitle":"Skjul undertitel","editor.hide_legend":"Skjul forklaring","editor.text_size":"Tekststørrelse","text_size.normal":"Normal","text_size.large":"Stor (115%)","text_size.larger":"Større (130%)","text_size.largest":"Størst (150%)","editor.language":"Sprog","editor.language_auto":"Home Assistants","editor.hide_sync_warning":"Skjul advarslen om manglende synkronisering","editor.max_items":"Antal elementer","editor.list_height":"Listehøjde (px)","card.stress_today.title":"Stress og restitution","stress_today.subtitle_today":"I dag indtil {time}","stress_today.subtitle_waiting":"I går · i dag er ikke synkroniseret endnu","stress_today.yesterday":"I går","empty.stress_today.title":"Ingen stressdata endnu","empty.stress_today.subtitle":"Kræver Suunto App (unofficial) 1.0.37 eller nyere og et synkroniseret ur.","stress.state.recovering":"Restituerer","stress.state.active":"Aktiv","stress.state.inactive":"Inaktiv","stress.state.stressed":"Stresset","insights.cond.hot_weather":"I varme ({temp}°C og derover)","insights.cond.cold_weather":"I kulde ({temp}°C og derunder)","insights.metric.efficiency":"Effektivitet","insights.unit.per_beat":"m/slag","personal_insights.subtitle_days":"Fra dine seneste {nights} nætter og {days} træningsdage","personal_insights.these_workouts":"disse træninger","personal_insights.workouts_count":"{with} mod {without} træninger","personal_insights.speed_at_hr":"{with_speed} km/t ved {with_hr} bpm mod {without_speed} km/t ved {without_hr} bpm","sync.at":"synkroniseret {time}","sync.yesterday":"synkroniseret i går {time}","chip.not_synced":"Uret ikke synkroniseret i {hours} t","editor.eink":"E-ink-skærm","eink.off":"Fra","eink.bw":"Sort og hvid","eink.gray":"4 gråtoner","eink.red":"Sort, hvid og rød","eink.yellow":"Sort, hvid og gul","eink.color":"6 farver","editor.max_lines":"Maks. antal tekstlinjer","card.whats_new.title":"Hvad er nyt","card.whats_new.subtitle":"Seneste {days} dage","whats_new.today":"I dag","whats_new.yesterday":"I går","whats_new.now":"Nu","whats_new.empty":"Intet nyt de seneste {days} dage","whats_new.record":"Ny rekord: {label} {value}","whats_new.record_year":"Årets rekord: {label} {value}","whats_new.record_month":"Månedens rekord: {label} {value}","whats_new.best_effort":"Bedste tid {distance}: {time}","whats_new.ai_daily":"Daglig AI-analyse","whats_new.ai_weekly":"Ugentlig AI-opsummering","whats_new.gear_due":"{name}: tid til service","editor.whats_new_show":"Vis","whats_new.kind.workouts":"Træninger","whats_new.kind.records":"Rekorder og bedste tider","whats_new.kind.achievements":"Ruteplaceringer","whats_new.kind.ai":"AI-rapporter","whats_new.kind.gear":"Udstyrsservice"},nb:{"stat.distance":"Distanse","stat.duration":"Varighet","stat.avg_speed":"Snittfart","stat.avg_pace":"Snittempo","stat.avg_hr":"Snittpuls","stat.max_hr":"Makspuls","stat.training_effect":"Treningseffekt","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Følelse","stat.energy":"Energi","stat.time":"Tid","stat.workouts":"Økter","stat.steps":"Skritt","stat.heart_rate":"Puls","stat.quality":"Kvalitet","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Hvilepuls","stat.resting_hr_delta":"Hvilepuls ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stresstilstand","stat.recovery_window":"Restitusjonstid","stat.ctl":"CTL · kondisjon","stat.atl":"ATL · tretthet","stat.tsb":"TSB · form","stat.readiness":"Beredskap","stat.recovery_balance":"Restitusjonsbalanse","stat.training_suggestion":"Dagens forslag","stat.volume":"Volum","stat.intensity":"Intensitet","stat.consistency":"Kontinuitet","stat.recovery":"Restitusjon","stat.variety":"Variasjon","card.hr_zones.title":"Pulssoner","card.hr_zones.last_workout":"Siste økt","card.sleep_readiness.title":"Søvn og beredskap","card.sleep_readiness.subtitle_no_wake":"{duration} søvn","card.sleep_readiness.subtitle_with_wake":"{duration} søvn · våknet {time}","card.recovery.title":"Restitusjon","card.training_load.title":"Treningsbelastning","card.training_load.subtitle_fallback":"Kondisjonstrend (CTL)","card.week_stats.title":"Denne uken og totalt","card.week_stats.subtitle":"Siste 7 dager","card.week_stats.lifetime_title":"Totalt per aktivitet","card.today.title":"I dag","card.today.subtitle":"Direkte fra klokken","card.training_status.title":"Treningsstatus","card.training_profile.title":"Treningsprofil","card.training_profile.subtitle":"Treningen din i et blikk","card.heart_rate.title":"Puls","empty.last_workout.title":"Ingen nylig økt","empty.last_workout.subtitle":"Synkroniser klokken med Suunto-appen for å se den her.","empty.hr_zones.title":"Ingen sonedata","empty.hr_zones.subtitle":"Din neste utendørsøkt med pulsbelte fyller ut dette.","empty.sleep_readiness.title":"Ingen søvndata ennå","empty.sleep_readiness.subtitle":"Sov med klokken på for å se det her.","empty.recovery.title":"Ingen restitusjonsdata ennå","empty.training_load.title":"Bygger opp treningsbelastningen din","empty.training_load.subtitle":"Trenger litt treningshistorikk for å beregnes - sjekk igjen etter noen økter.","empty.week_stats.title":"Ingen treningshistorikk ennå","empty.today.title":"Ingen live-data ennå","empty.training_status.title":"Ikke nok data ennå","empty.training_status.subtitle":"Trenger litt treningshistorikk for å beregnes.","empty.training_profile.title":"Ikke nok data ennå","empty.training_profile.subtitle":"Trenger at flere sensorer rapporterer for å beregne profilen din.","empty.heart_rate.title":"Ingen live-puls ennå","empty.loading":"Laster...","empty.generic_error":"Kunne ikke laste Suunto-data.","error.no_device":"Fant ingen Suunto-enhet - er suunto_app-integrasjonen satt opp?","error.multiple_devices":'Fant flere Suunto-enheter - angi "device_id" i kortkonfigurasjonen.',"error.device_missing":'Den konfigurerte enheten "{device}" har ingen suunto_app-entiteter.',"band.readiness.great":"Veldig bra","band.readiness.fair":"Middels","band.readiness.low":"Lav","band.recovery.well":"Godt restituert","band.recovery.partial":"Delvis restituert","band.recovery.low":"Lav restitusjon","band.recovery.fully":"Fullt restituert","band.recovery.recovering":"Restituerer · {time} igjen","band.hrv.low":"HRV lav","band.hrv.high":"HRV høy","band.hrv.balanced":"HRV balansert","band.form.fresh":"Uthvilt","band.form.neutral":"Nøytral","band.form.fatigued":"Sliten","band.form.very_fatigued":"Veldig sliten","band.acwr.safe":"Trygg sone","band.acwr.low":"Lav belastning","band.acwr.high":"Høy belastning - skaderisiko","band.suggestion.hard":"Kjør på","band.suggestion.moderate":"Moderat innsats","band.suggestion.easy":"Ta det rolig","band.suggestion.rest":"Hviledag","chip.workout_logged_today":"Økt registrert i dag","chip.workout_today":"Økt i dag","chip.recovering":"Restituerer","chip.nap":"{minutes} min lur","chip.nap_earlier":"{minutes} min lur (tidligere)","chip.workouts_30d":"{count} økter de siste 30 dagene","chip.acwr":"ACWR {value} · {label}","profile.summary":"Sterkest på {strong} · lettest på {light}","chip.more_activity_one":"+{count} aktivitetstype til","chip.more_activity_other":"+{count} aktivitetstyper til","chip.unusual_recovery":"Uvanlig restitusjon","chip.days_since_one":"{count} dag siden siste økt","chip.days_since_other":"{count} dager siden siste økt","chip.manually_added":"Lagt til manuelt","chip.sleep_stale":"Ingen søvn fra i natt · natten {date}","readiness.balance_only":"Bare restitusjonsbalanse, ingen søvn","chip.no_hr":"Ingen puls","card.heart_rate.measured":"Målt {time}","card.heart_rate.measured_ago":"Målt {ago} · {time}","stat.energy_active_sub":"{kcal} aktive","energy.total_unit":"kcal totalt","energy.split":"{active} aktive · {bmr} BMR","card.commute.title":"Pendling","card.commute.subtitle_year":"I år i stedet for bilen","card.commute.subtitle_month":"Denne måneden i stedet for bilen","commute.saved":"spart","commute.fuel_co2":"{fuel} l drivstoff · {co2} kg mindre CO2","stat.rides":"Turer","stat.days":"Dager","stat.avg_time":"Snittid","commute.this_month":"Denne måneden:","commute.this_year":"I år:","commute.rides_n":"{n} turer","empty.commute.title":"Ingen pendleturer ennå","empty.commute.subtitle":"Økter som Suunto merker som pendling, vises her.","card.gear.title":"Utstyr","card.gear.subtitle":"Distanse og service","gear.remaining":"{km} igjen","gear.over":"{km} over","chip.service":"Service","empty.gear.title":"Ikke noe utstyr fulgt ennå","empty.gear.subtitle":"Legg til utstyr under Konfigurer-menyen i integrasjonen.","card.form_forecast.title":"Formprognose","card.form_forecast.subtitle":"Hvis du hviler fra i dag","stat.tomorrow":"I morgen","stat.peak_in":"Topp om {days} d","stat.maintenance":"Hold kondisjon / uke","empty.form_forecast.title":"Ingen prognose ennå","card.daily_brief.title":"Dagsoppsummering","empty.daily_brief.title":"Ingen oppsummering ennå","achievement.count_one":"{count} prestasjon","achievement.count_other":"{count} prestasjoner","achievement.rank":"Plass #{rank} på denne ruten","label.zone":"Sone {n}","label.deep":"Dyp","label.light":"Lett","label.rem":"REM","editor.auto_detect":"Dette kortet finner Suunto-enheten din automatisk - ingen konfigurasjon nødvendig.","editor.pick_device":"Fant flere Suunto-enheter - velg hvilken dette kortet skal lese.","editor.device_label":"Suunto-enhet","editor.units_label":"Enheter","editor.units_metric":"Metrisk (km)","editor.units_imperial":"Imperisk (mi)","editor.compact_label":"Kompakt modus","editor.days_label":"Trendvindu (dager)","editor.period_label":"Hovedperiode","editor.period_year":"I år","editor.period_month":"Denne måneden","editor.goal_source_label":"Skrittmål fra","editor.source_suunto":"Suunto-appen ({value})","editor.source_suunto_default":"Suunto-appen (ikke noe mål satt, bruker {value})","editor.source_custom":"Egendefinert","editor.fuel_source_label":"Drivstofftall fra","editor.source_integration":"Suunto-integrasjonen ({litres} l/100 km, {price} per l)","editor.source_integration_unknown":"Suunto-integrasjonen","editor.fuel_consumption_label":"Drivstofforbruk (l/100 km)","editor.fuel_price_label":"Drivstoffpris per liter","editor.fuel_hint":"Endre integrasjonens verdier under Innstillinger > Enheter og tjenester > Suunto > Konfigurer.","card.lifetime.title":"Totalt","card.lifetime.subtitle":"Siden du startet","stat.active_days":"Aktive dager","empty.lifetime.title":"Ingen totaldata ennå","card.recent_workouts.title":"Siste økter","empty.recent_workouts.title":"Ingen nylige økter","card.elevation.title":"Høyde og klatring","stat.ascent":"Stigning","stat.descent":"Nedstigning","stat.ascent_time":"Stigningstid","stat.descent_time":"Nedstigningstid","stat.min_altitude":"Laveste høyde","stat.max_altitude":"Høyeste høyde","stat.ascent_rate":"Stigningshastighet","empty.elevation.title":"Ingen høydedata","empty.elevation.subtitle":"Bare utendørsøkter med barometer registrerer dette.","card.location.title":"Startsted","location.open_in_maps":"Åpne i Kart","empty.location.title":"Ingen stedsdata","empty.location.subtitle":"Innendørsøkter har ikke noe GPS-startpunkt.","card.fitness.title":"Kondisjon","stat.vo2max":"VO2max","stat.estimated_vo2max":"Est. VO2max","stat.fitness_age":"Kondisjonsalder","fitness.measured":"Målt {time} · {activity}","empty.fitness.title":"Ingen kondisjonsdata ennå","empty.fitness.subtitle":"Suunto beregner dette bare fra løpe- eller gåøkter.","empty.fitness_trend.title":"Ingen kondisjonsdata ennå","empty.fitness_trend.subtitle":"Suunto beregner dette bare fra løpe- eller gåøkter.","card.pmc.title":"Belastningsstyring","card.pmc.subtitle":"Trend over {days} dager","card.recovery_trends.title":"Restitusjonstrender","card.recovery_trends.subtitle":"Basis over {days} dager","empty.recovery_trends.title":"Ingen restitusjonstrend ennå","card.weekly_volume.title":"Ukevolum","card.weekly_volume.subtitle":"Siste 12 uker","empty.weekly_volume.title":"Ingen ukevolumdata ennå","stat.average":"Snitt","stat.total":"Totalt","card.hr_curve.title":"Pulskurve","card.hr_curve.subtitle":"Siste 24 timer","stat.hr_now":"Nå","stat.hr_min":"Dagens laveste","stat.hr_max":"Dagens høyeste","empty.hr_curve.title":"Ingen live-pulsdata ennå","empty.hr_curve.subtitle":"Bruk klokken og synkroniser for å se dagens kurve her.","card.sleep_trends.title":"Søvntrender","card.sleep_trends.subtitle":"Siste {days} netter","empty.sleep_trends.title":"Ingen søvntrend ennå","card.weekly_goal.title":"Ukemål","card.weekly_goal.subtitle":"{value} av {goal} km","empty.weekly_goal.title":"Ingen ukedistanse ennå","editor.goal_label":"Ukemål (km)","card.streak.title":"Aktivitetsrekke","card.streak.subtitle":"Siste 14 dager","streak.window_count_one":"{count} aktiv dag","streak.window_count_other":"{count} aktive dager","streak.days_one":"{count} dag på rad","streak.days_other":"{count} dager på rad","streak.none":"Ingen aktiv rekke - kom i gang i dag","empty.streak.title":"Ingen treningshistorikk ennå","just_finished.title":"Bra jobba!","just_finished.idle.title":"Venter på neste økt","just_finished.idle.subtitle":"Dette lyser opp rett etter at klokken synkroniserer en ny økt.","empty.just_finished.title":"Ingen nylig økt","card.activity_trends.title":"Aktivitetstrender","card.activity_trends.subtitle":"Siste {days} dager","empty.activity_trends.title":"Ingen aktivitetstrend ennå","card.recovery_balance_trend.title":"Trend for restitusjonsbalanse","card.recovery_balance_trend.subtitle":"Siste {days} dager","empty.recovery_balance_trend.title":"Ingen restitusjonstrend ennå","card.readiness_trend.title":"Beredskapstrend","card.readiness_trend.subtitle":"Siste {days} dager","empty.readiness_trend.title":"Ingen beredskapstrend ennå","stat.cadence":"Kadens","stat.stride_length":"Steglengde","stat.pct_hrmax":"% av makspuls","stat.sleep_avg_hr":"Snittpuls søvn","stat.sleep_min_hr":"Laveste puls søvn","chip.bedtime":"Leggetid {time}","card.activity_calendar.title":"Aktivitetskalender","card.activity_calendar.subtitle":"Siste 6 uker","empty.activity_calendar.title":"Ingen treningshistorikk ennå","activity_calendar.active_days_one":"{count} aktiv dag","activity_calendar.active_days_other":"{count} aktive dager","card.workout_comparison.title":"Øktsammenligning","card.workout_comparison.vs":"mot {time}","empty.workout_comparison.title":"Ikke nok like økter ennå","empty.workout_comparison.subtitle":"Gjør samme aktivitet to ganger for å se en sammenligning.","stat.distance_delta":"Distanse ({delta})","stat.duration_delta":"Varighet ({delta})","stat.avg_hr_delta":"Snittpuls ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"I tall","card.milestones.subtitle":"Siden du startet","empty.milestones.title":"Ingen totaldata ennå","stat.earth_laps":"Runder rundt jorden","stat.marathons":"Maratoner","stat.moon_pct":"% til månen","stat.burgers":"Burgere","card.athlete_profile.title":"Treningspersonlighet","empty.athlete_profile.title":"Ikke nok data ennå","personality.activity.cycling":"Syklist","personality.activity.running":"Løper","personality.activity.trekking":"Fjellvandrer","personality.activity.walking":"Turgåer","personality.activity.gym":"Styrkeutøver","personality.activity.swim":"Svømmer","personality.activity.ski":"Skiløper","personality.activity.row":"Roer","personality.activity.other":"Allsidig utøver","personality.schedule.weekend":"Helgekriger","personality.schedule.weekday":"Hverdagstrener","personality.schedule.balanced":"Balansert planlegger","personality.time.morning":"Morgenfugl","personality.time.afternoon":"Lunsjtrener","personality.time.evening":"Kveldsutøver","personality.time.night":"Nattugle","card.pace_trend.title":"Tempotrend","card.pace_trend.subtitle":"{activity} · siste {count} økter","empty.pace_trend.title":"Ikke nok like økter ennå","empty.pace_trend.subtitle":"Gjør samme aktivitet noen ganger for å se en trend.","pace_trend.faster":"Blir raskere","pace_trend.slower":"Blir tregere","pace_trend.steady":"Holder seg stabilt","card.lap_splits.title":"Rundetider","empty.lap_splits.title":"Ingen rundedata","empty.lap_splits.subtitle":"Ikke alle økter har runder - neste økt med runder fyller ut dette.","stat.laps":"Runder","stat.fastest_lap":"Raskeste runde","label.lap":"Runde {n}","card.training_effect_trend.title":"Treningseffekttrend","card.fitness_trend.title":"Kondisjonstrend","empty.training_effect_trend.title":"Ingen treningseffektdata ennå","achievements.badge.around_globe":"Jorden rundt","achievements.badge.century_club":"Hundreklubben - 100 økter","achievements.badge.consistency_king":"Kontinuitetskonge - 14 dager på rad","achievements.badge.iron_will":"Jernvilje - 30 dager på rad","achievements.badge.days_100":"100 aktive dager","achievements.badge.distance_1000":"1 000 km-klubben","achievements.badge.distance_5000":"5 000 km-klubben","achievements.badge.elite_engine":"Elitemotor - VO2max 55+","achievements.badge.energy_100k":"100 000 kcal forbrent","achievements.badge.energy_1m":"1 000 000 kcal forbrent","achievements.badge.full_year":"Aktiv et helt år","achievements.badge.hours_100":"100 timer","achievements.badge.hours_500":"500 timer","achievements.badge.jack_of_all_trades":"Altmuligmann - 5+ sporter","achievements.badge.multi_sport":"Multisportutøver - 3+ sporter","achievements.badge.solid_engine":"Solid motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ økter","achievements.badge.workouts_1000":"1 000 økter","achievements.badge.workouts_250":"250 økter","achievements.badge.workouts_500":"500 økter","achievements.category.days":"Aktive dager","achievements.category.distance":"Distanse","achievements.category.energy":"Energi","achievements.category.fitness":"Kondisjonsnivå","achievements.category.records":"Personlige rekorder","achievements.category.time":"Treningstid","achievements.category.variety":"Variasjon","achievements.category.workouts":"Registrerte økter","card.achievements.subtitle":"{unlocked} av {total} låst opp","card.achievements.title":"Prestasjoner","achievements.next":"Neste: {name} ({pct} %)","class.rest":"+{pct} % andre aktiviteter","class.tag":"Bygget rundt {activity}","empty.achievements.subtitle":"Registrer noen økter for å begynne å låse opp merker.","empty.achievements.title":"Ingen prestasjoner ennå","empty.class.subtitle":"Registrer noen økter for å avsløre klassen din.","empty.class.title":"Ikke nok data ennå","empty.level.subtitle":"Din første synkroniserte økt starter klatringen.","empty.level.title":"Ingen totaldata ennå","empty.player.subtitle":"Trenger litt treningshistorikk for å beregne statistikken din.","empty.player.title":"Ikke nok data ennå","level.label":"NIVÅ","level.source":"{count} økter registrert","level.subtitle":"Drevet av din totale treningsbelastning","level.title.grinder":"Utholdenhetsslitter","level.title.legend":"Levende legende","level.title.novice":"Fersk rekrutt","level.title.veteran":"Erfaren veteran","level.xp_to_next":"{xp} XP til nivå {level}","level.xp_total":"{xp} XP","player.archetype":"{activity}-spesialist","player.help.title":"Hva dette betyr","player.help.sta":"STA · Kapasitet, fra kondisjonen din (CTL): hvor mye jevn treningsbelastning du tåler","player.help.pwr":"PWR · Kraft, fra snittintensiteten (TSS) i de siste øktene dine","player.help.rec":"REC · Restitusjon, din nåværende beredskapsscore","player.help.con":"CON · Kontinuitet, økter registrert de siste 30 dagene","player.help.end":"END · Utholdenhet, fra din estimerte VO2max","player.help.frm":"FRM · Form, fra din nåværende treningsbalanse (TSB)","player.help.disclaimer":"Heuristiske vurderinger beregnet fra dine egne data - ikke en offisiell Suunto-måling.","player.tier.bronze":"Bronse","player.tier.gold":"Gull","player.tier.legendary":"Legendarisk","player.tier.silver":"Sølv","records.climb":"Største stigning","records.distance":"Lengste distanse","records.pace":"Raskeste tempo","records.session":"Hardeste økt","records.streak":"Lengste rekke","records.streak_days_one":"{count} dag","records.streak_days_other":"{count} dager","records.workout":"Lengste økt","class.name.cycling":"Utholdenhetskriger","class.name.running":"Sprinter","class.name.trekking":"Stifinner","class.name.walking":"Vandrer","class.name.gym":"Styrkeberserk","class.name.swim":"Bølgetemmer","class.name.ski":"Frostløper","class.name.row":"Årekar","class.name.other":"Allrounder","class.flavor.cycling":"Bygget for lange, jevne økter mer enn ren fart. Alle andre sporter er krysstrening for motoren.","class.flavor.running":"Rask ut av startblokken og bygget for tempo. Distanse er et middel, ikke et mål.","class.flavor.trekking":"Hjemme i ulendt terreng, på farten i timevis.","class.flavor.walking":"Rolige, skånsomme kilometer blir til mye - kontinuitet foran intensitet.","class.flavor.gym":"Rå kraft foran distanse. Styrkeøktene kommer først.","class.flavor.swim":"Utholdenhet smidd i vannet, tak for tak.","class.flavor.ski":"Fart og rytme gjennom snø og kulde.","class.flavor.row":"Rytmisk kraft, ett tak om gangen.","class.flavor.other":"Ingen enkelt sport dominerer - en virkelig balansert miks.","card.next_milestone.title":"Neste milepæl","card.next_milestone.subtitle":"Total distanse","empty.next_milestone.title":"Ingen total distanse ennå","next_milestone.remaining_label":"igjen","next_milestone.target":"til {target} km totalt - {pct} % av veien","next_milestone.workouts_one":"{count} økt til {target} totalt","next_milestone.workouts_other":"{count} økter til {target} totalt","next_milestone.eta_one":"med {pace} km/uke - omtrent {weeks} uke igjen","next_milestone.eta_other":"med {pace} km/uke - omtrent {weeks} uker igjen","card.story.title":"Din Suunto-historie","card.story.subtitle":"Siden din første økt","empty.story.title":"Ingen totaldata ennå","story.top_activity":"{activity} - hovedaktiviteten din","story.top_activity_share":"{count} økter - {pct} % av historikken din","story.record_subtitle":"Din personlige rekord gjennom tidene","card.sleep_clock.title":"Søvnklokke","card.sleep_clock.subtitle":"I natt","empty.sleep_clock.title":"Ingen søvndata ennå","empty.sleep_clock.subtitle":"Sov med klokken på for å se det her.","sleep_clock.quality":"{pct} % søvnkvalitet","card.sleep_rhythm.title":"Søvnrytme","card.sleep_rhythm.subtitle":"Siste 7 netter","empty.sleep_rhythm.title":"Ikke nok søvnhistorikk ennå","empty.sleep_rhythm.subtitle":"Trenger noen netter med data for å vise et mønster.","sleep_rhythm.avg_bedtime":"Snitt leggetid {time}","sleep_rhythm.avg_wake":"Snitt våknetid {time}","sleep_rhythm.spread":"{minutes} min spredning","sleep_rhythm.legend_normal":"Vanlig natt","sleep_rhythm.legend_outlier":"{minutes}+ min fra snittet","card.route.title":"Rute","empty.route.title":"Ingen rutedata","empty.route.subtitle":"Innendørsøkter har ikke noe GPS-spor.","route.pace_slower":"Tregere","route.pace_faster":"Raskere","card.month_story.title":"Denne måneden","empty.month_story.title":"Ingen økter ennå denne måneden","story.share_month":"{count} økter - {pct} % av denne måneden","story.record_subtitle_month":"Din rekord denne måneden","card.year_story.title":"I år","empty.year_story.title":"Ingen økter ennå i år","story.share_year":"{count} økter - {pct} % av året","story.record_subtitle_year":"Din rekord i år","card.best_efforts.title":"Beste innsats","card.best_efforts.subtitle":"{count} av {total} registrert","empty.best_efforts.title":"Ingen beste innsats ennå","empty.best_efforts.subtitle":"Registreres fra løpeøkter fremover, ikke bakover i tid.","best_efforts.not_yet":"Ikke registrert ennå","distance.half_marathon":"Halvmaraton","distance.marathon":"Maraton","card.steps_today.title":"Skritt i dag","card.steps_today.subtitle":"Mål: {goal} skritt","empty.steps_today.title":"Ingen skrittdata ennå","editor.steps_goal_label":"Dagsmål (skritt)","steps_today.goal_pct":"{pct} % av dagsmålet","steps_today.vs_avg_up":"+{pct} % mot snittet ditt for 7 dager ({avg})","steps_today.vs_avg_down":"-{pct} % mot snittet ditt for 7 dager ({avg})","card.steps_trend.title":"Skritt-trend","card.steps_trend.subtitle":"Siste {days} dager","empty.steps_trend.title":"Ingen skritthistorikk ennå","steps_trend.legend_met":"Mål nådd","steps_trend.legend_below":"Under målet","steps_trend.days_at_goal":"Dager med nådd mål","card.month_records.title":"Månedens rekorder","card.month_records.subtitle":"{count} av {total} satt denne måneden","empty.month_records.title":"Ingen rekorder ennå denne måneden","empty.month_records.subtitle":"Personlige rekorder for denne måneden vises her.","card.year_records.title":"Årets rekorder","card.year_records.subtitle":"{count} av {total} satt i år","empty.year_records.title":"Ingen rekorder ennå i år","empty.year_records.subtitle":"Personlige rekorder for i år vises her.","card.running_dynamics.title":"Løpsdynamikk","card.running_dynamics.subtitle":"{activity} - siste {count} økter","empty.running_dynamics.title":"Ikke nok data ennå","empty.running_dynamics.subtitle":"Trenger noen nylige økter til fots med kadensdata.","card.weekly_steps_goal.title":"Ukemål for skritt","card.weekly_steps_goal.subtitle":"{value} av {goal} skritt","empty.weekly_steps_goal.title":"Ingen skrittdata ennå","editor.weekly_steps_goal_label":"Ukemål (skritt)","card.goals_overview.title":"Måloversikt","card.goals_overview.subtitle":"Denne uken","empty.goals_overview.title":"Ingen måldata ennå","card.week_compare.title":"Denne uken mot forrige uke","card.week_compare.subtitle":"Rullerende 7-dagers totaler","empty.week_compare.title":"Ikke nok historikk ennå","empty.week_compare.subtitle":"Sjekk igjen om omtrent en uke for en sammenligning.","week_compare.legend_now":"Denne uken","week_compare.legend_prev":"Forrige uke","card.sleep_detail.title":"Søvndetaljer","card.sleep_detail.subtitle":"I natt","label.awake":"Våken","label.sleep_other":"Annen søvn","sleep_detail.total_sleep":"total søvn","sleep_detail.in_bed":"{duration} i sengen","sleep_detail.bedtime":"Leggetid","sleep_detail.wake":"Våknet","sleep_detail.stages":"Søvnstadier","sleep_detail.efficiency":"Søvneffektivitet","sleep_detail.efficiency_sub":"Tid i søvn ÷ tid i sengen","sleep_detail.vitals":"Vitale verdier","sleep_detail.insight_excellent":"{pct} % dyp søvn · et utmerket restitusjonsvindu.","sleep_detail.insight_solid":"{pct} % dyp søvn · en god natts restitusjon.","sleep_detail.insight_light":"{pct} % dyp søvn · lettere enn vanlig.","editor.energy_goal_source_label":"Kalorimål fra","editor.sleep_goal_source_label":"Søvnmål fra","editor.training_goal_source_label":"Treningstidsmål fra","editor.energy_goal_label":"Dagsmål (aktive kcal)","editor.sleep_goal_label":"Søvnmål (timer)","editor.training_goal_label":"Ukemål (timer)","editor.show_goals_label":"Vis mål","editor.source_suunto_none":"Suunto-appen (ikke noe mål satt)","editor.distance_goal_hint":"Suunto-appen har ikke noe distansemål, så dette er alltid ditt eget.","card.daily_goals.title":"Dagsmål","card.daily_goals.subtitle":"Skritt, kalorier og søvn","empty.daily_goals.title":"Ingen måldata ennå","stat.active_kcal":"Aktive kcal","stat.sleep":"Søvn","stat.training_time":"Treningstid","goal.of":"av {goal}","goal.energy_active_of":"{kcal} aktive av {goal}","sleep_goal.label":"Søvnmål","sleep_goal.short":"{value} av {goal} · {missing} for lite","sleep_goal.met":"{value} av {goal} · mål nådd","sleep_trends.nights_at_goal":"Netter med nådd mål","sleep_trends.avg_vs_goal":"Snitt mot mål","sleep_trends.legend_goal":"Mål {goal}","card.ai_insight.title":"AI-analyse","empty.ai_insight.title":"AI-analyse er av","empty.ai_insight.subtitle":"Slå den på i integrasjonen: Konfigurer -> Daglig AI-analyse","empty.ai_insight.waiting":"Ingen AI-analyse ennå i dag","ai_insight.generating":"Genererer analysen","ai_insight.night":"natt {night}","ai_insight.no_night":"natten er ikke synkronisert ennå","ai_insight.no_section":"Ingen data for denne delen","ai_insight.advice":"Råd for i dag","ai_insight.disclaimer":"Ikke medisinske råd","ai_insight.section.sleep":"Søvn","ai_insight.section.recovery":"Restitusjon","ai_insight.section.training":"Trening","ai_insight.section.activity":"Aktivitet","ai_insight.section_full.sleep":"Søvn","ai_insight.section_full.recovery":"Helse og restitusjon","ai_insight.section_full.training":"Trening","ai_insight.section_full.activity":"Daglig aktivitet","ai_insight.status.good":"Bra","ai_insight.status.ok":"OK","ai_insight.status.caution":"Forsiktig","ai_insight.status.rest":"Hvile","strategy.title":"Trening","strategy.none":"Ingen Suunto-konto","strategy.none_text":"Fant ingen konto fra Suunto App-integrasjonen. Legg til integrasjonen under Innstillinger > Enheter og tjenester, og last deretter inn dette dashbordet på nytt.","strategy.section.today":"I dag","strategy.section.ai":"AI-analyse","strategy.section.sleep":"Søvn","strategy.section.recovery":"Restitusjon","strategy.section.last_workout":"Siste økt","strategy.section.load":"Belastning og form","strategy.section.week":"Denne uken","strategy.section.records":"Rekorder","strategy.section.history":"Historikk og profil","strategy.section.gear":"Utstyr og pendling","card.ai_weekly.title":"AI-ukeoppsummering","empty.ai_weekly.subtitle":"Krever ha-suunto 1.0.38 eller nyere med AI slått på: Konfigurer -> AI","empty.ai_weekly.waiting":"Ingen ukentlig AI-oppsummering ennå","ai_weekly.week":"uke {range}","ai_weekly.advice":"Plan for neste uke","editor.ai_report_label":"Rapport","editor.ai_report_daily":"Daglig analyse","editor.ai_report_weekly":"Ukeoppsummering","editor.ai_section_label":"Del","editor.ai_single_label":"Vis bare denne delen","card.sleep_regularity.title":"Søvnregelmessighet","sleep_regularity.subtitle":"Siste 4 uker · {nights} netter","empty.sleep_regularity.title":"Ikke nok netter ennå","empty.sleep_regularity.subtitle":"Trenger omtrent en uke med sammenhengende netter med klokken på.","sleep_regularity.bed":"Snitt leggetid {time}","sleep_regularity.wake":"Snitt våknetid {time}","sleep_regularity.mid_work":"Midt i søvnen, netter søn-tor {time}","sleep_regularity.mid_free":"Midt i søvnen, netter fre/lør {time}","band.regularity.regular":"Regelmessig","band.regularity.fair":"Ganske regelmessig","band.regularity.irregular":"Uregelmessig","chip.regularity":"Regelmessighet {value}","chip.social_jetlag":"Sosial jetlag {value}","card.aerobic_decoupling.title":"Aerob frakobling","empty.aerobic_decoupling.title":"Ingen lang økt analysert ennå","empty.aerobic_decoupling.subtitle":"Vises etter en økt på 40+ minutter med GPS og puls.","aerobic_decoupling.analyzed":"{minutes} min analysert","aerobic_decoupling.hint":"under 5 % = solid aerob base","aerobic_decoupling.first_half":"1. halvdel","aerobic_decoupling.second_half":"2. halvdel","aerobic_decoupling.trend":"Siste {count} analyserte økter","band.decoupling.coupled":"Koblet","band.decoupling.moderate":"Moderat drift","band.decoupling.high":"Høy drift","stat.decoupling":"Pulsdrift","card.personal_insights.title":"Det som virker for deg","personal_insights.subtitle":"Fra de siste {nights} nettene","empty.personal_insights.title":"Ingen tydelige mønstre ennå","empty.personal_insights.subtitle":"Trenger noen uker med søvn- og treningsdata. Bare tydelige forskjeller vises.","personal_insights.these_nights":"disse nettene","personal_insights.the_rest":"resten","personal_insights.nights_count":"{with} mot {without} netter","personal_insights.disclaimer":"Mønstre i dine egne data, ikke bevis på årsak. Et funn krever minst 4 netter eller økter på hver side.","insights.cond.late_workout":"Etter en økt som slutter etter {time}","insights.cond.training_day":"På treningsdager","insights.cond.hard_day":"Etter de hardeste treningsdagene dine","insights.cond.early_bed":"Når du legger deg før {bedtime}","insights.cond.free_night":"På fredags- og lørdagsnetter","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Hvilepuls","insights.metric.sleep":"Søvn","daily_brief.your_pattern":"Ditt mønster","editor.show_insight_label":"Vis ditt sterkeste mønster","editor.look_section":"Utseende","editor.title":"Tittel","editor.icon":"Ikon (f.eks. mdi:star)","editor.accent_color":"Aksentfarge (f.eks. #e91e63 eller teal)","editor.accent_hint":"Samme farge i lys og mørk modus. En ugyldig farge ignoreres.","editor.accent_default":"Standard (rav)","editor.accent_pink":"Rosa","editor.accent_purple":"Lilla","editor.accent_teal":"Blågrønn","editor.accent_green":"Grønn","editor.accent_blue":"Blå","editor.hide_header":"Skjul topptekst","editor.hide_icon":"Skjul ikon","editor.hide_subtitle":"Skjul undertittel","editor.hide_legend":"Skjul forklaring","editor.text_size":"Tekststørrelse","text_size.normal":"Normal","text_size.large":"Stor (115%)","text_size.larger":"Større (130%)","text_size.largest":"Størst (150%)","editor.language":"Språk","editor.language_auto":"Fra Home Assistant","editor.hide_sync_warning":"Skjul varselet om manglende synkronisering","editor.max_items":"Antall elementer","editor.list_height":"Listehøyde (px)","card.stress_today.title":"Stress og restitusjon","stress_today.subtitle_today":"I dag frem til {time}","stress_today.subtitle_waiting":"I går · i dag er ikke synkronisert ennå","stress_today.yesterday":"I går","empty.stress_today.title":"Ingen stressdata ennå","empty.stress_today.subtitle":"Krever Suunto App (unofficial) 1.0.37 eller nyere og en synkronisert klokke.","stress.state.recovering":"Restituerer","stress.state.active":"Aktiv","stress.state.inactive":"Inaktiv","stress.state.stressed":"Stresset","insights.cond.hot_weather":"I varmen ({temp}°C og over)","insights.cond.cold_weather":"I kulda ({temp}°C og under)","insights.metric.efficiency":"Effektivitet","insights.unit.per_beat":"m/slag","personal_insights.subtitle_days":"Fra de siste {nights} nettene og {days} treningsdagene","personal_insights.these_workouts":"disse øktene","personal_insights.workouts_count":"{with} mot {without} økter","personal_insights.speed_at_hr":"{with_speed} km/t ved {with_hr} slag/min mot {without_speed} km/t ved {without_hr} slag/min","sync.at":"synkronisert {time}","sync.yesterday":"synkronisert i går {time}","chip.not_synced":"Klokken ikke synkronisert på {hours} t","editor.eink":"E-ink-skjerm","eink.off":"Av","eink.bw":"Svart-hvitt","eink.gray":"4 gråtoner","eink.red":"Svart, hvitt og rødt","eink.yellow":"Svart, hvitt og gult","eink.color":"6 farger","editor.max_lines":"Maks antall tekstlinjer","card.whats_new.title":"Hva er nytt","card.whats_new.subtitle":"Siste {days} dager","whats_new.today":"I dag","whats_new.yesterday":"I går","whats_new.now":"Nå","whats_new.empty":"Ikke noe nytt de siste {days} dagene","whats_new.record":"Ny rekord: {label} {value}","whats_new.record_year":"Årets rekord: {label} {value}","whats_new.record_month":"Månedens rekord: {label} {value}","whats_new.best_effort":"Beste innsats {distance}: {time}","whats_new.ai_daily":"Daglig AI-analyse","whats_new.ai_weekly":"Ukentlig AI-oppsummering","whats_new.gear_due":"{name}: tid for service","editor.whats_new_show":"Vis","whats_new.kind.workouts":"Økter","whats_new.kind.records":"Rekorder og beste innsats","whats_new.kind.achievements":"Ruteprestasjoner","whats_new.kind.ai":"AI-rapporter","whats_new.kind.gear":"Utstyrsservice"},cs:{"stat.distance":"Vzdálenost","stat.duration":"Délka","stat.avg_speed":"Prům. rychlost","stat.avg_pace":"Prům. tempo","stat.avg_hr":"Prům. tep","stat.max_hr":"Max. tep","stat.training_effect":"Tréninkový efekt","stat.tss":"TSS","stat.tss_met":"TSS (MET)","stat.epoc":"EPOC","stat.feeling":"Pocit","stat.energy":"Energie","stat.time":"Čas","stat.workouts":"Tréninky","stat.steps":"Kroky","stat.heart_rate":"Tep","stat.quality":"Kvalita","stat.hrv":"HRV","stat.hrv_delta":"HRV ({delta})","stat.resting_hr":"Klidový tep","stat.resting_hr_delta":"Klidový tep ({delta})","stat.spo2":"SpO2","stat.stress_level":"Stav stresu","stat.recovery_window":"Doba zotavení","stat.ctl":"CTL · kondice","stat.atl":"ATL · únava","stat.tsb":"TSB · forma","stat.readiness":"Připravenost","stat.recovery_balance":"Bilance zotavení","stat.training_suggestion":"Dnešní doporučení","stat.volume":"Objem","stat.intensity":"Intenzita","stat.consistency":"Pravidelnost","stat.recovery":"Zotavení","stat.variety":"Pestrost","card.hr_zones.title":"Tepové zóny","card.hr_zones.last_workout":"Poslední trénink","card.sleep_readiness.title":"Spánek a připravenost","card.sleep_readiness.subtitle_no_wake":"{duration} spánku","card.sleep_readiness.subtitle_with_wake":"{duration} spánku · probuzení {time}","card.recovery.title":"Zotavení","card.training_load.title":"Tréninková zátěž","card.training_load.subtitle_fallback":"Trend kondice (CTL)","card.week_stats.title":"Tento týden a celkem","card.week_stats.subtitle":"Posledních 7 dní","card.week_stats.lifetime_title":"Celkem podle aktivity","card.today.title":"Dnes","card.today.subtitle":"Živě z hodinek","card.training_status.title":"Tréninkový stav","card.training_profile.title":"Tréninkový profil","card.training_profile.subtitle":"Tvůj trénink na první pohled","card.heart_rate.title":"Tep","empty.last_workout.title":"Žádný nedávný trénink","empty.last_workout.subtitle":"Synchronizuj hodinky s aplikací Suunto a trénink se tu objeví.","empty.hr_zones.title":"Žádná data zón","empty.hr_zones.subtitle":"Vyplní to tvůj další venkovní trénink s hrudním pásem.","empty.sleep_readiness.title":"Zatím žádná data o spánku","empty.sleep_readiness.subtitle":"Spi s hodinkami a data se tu objeví.","empty.recovery.title":"Zatím žádná data o zotavení","empty.training_load.title":"Tréninková zátěž se teprve počítá","empty.training_load.subtitle":"K výpočtu je potřeba trocha historie tréninků - podívej se sem po několika trénincích.","empty.week_stats.title":"Zatím žádná historie tréninků","empty.today.title":"Zatím žádná živá data","empty.training_status.title":"Zatím málo dat","empty.training_status.subtitle":"K výpočtu je potřeba trocha tréninkové historie.","empty.training_profile.title":"Zatím málo dat","empty.training_profile.subtitle":"K výpočtu profilu musí data posílat více senzorů.","empty.heart_rate.title":"Zatím žádný živý tep","empty.loading":"Načítání...","empty.generic_error":"Data Suunto se nepodařilo načíst.","error.no_device":"Nenalezeno žádné zařízení Suunto - je integrace suunto_app nastavená?","error.multiple_devices":'Nalezeno více zařízení Suunto - nastav "device_id" v konfiguraci karty.',"error.device_missing":'Nastavené zařízení "{device}" nemá žádné entity suunto_app.',"band.readiness.great":"Výborná","band.readiness.fair":"Ucházející","band.readiness.low":"Nízká","band.recovery.well":"Dobré zotavení","band.recovery.partial":"Částečné zotavení","band.recovery.low":"Nízké zotavení","band.recovery.fully":"Úplné zotavení","band.recovery.recovering":"Zotavování · zbývá {time}","band.hrv.low":"HRV nízká","band.hrv.high":"HRV vysoká","band.hrv.balanced":"HRV vyrovnaná","band.form.fresh":"Svěží","band.form.neutral":"Neutrální","band.form.fatigued":"Únava","band.form.very_fatigued":"Velká únava","band.acwr.safe":"Bezpečná zóna","band.acwr.low":"Nízká zátěž","band.acwr.high":"Vysoká zátěž - riziko zranění","band.suggestion.hard":"Jdi do toho","band.suggestion.moderate":"Střední úsilí","band.suggestion.easy":"Dnes v klidu","band.suggestion.rest":"Den odpočinku","chip.workout_logged_today":"Dnes zaznamenán trénink","chip.workout_today":"Trénink dnes","chip.recovering":"Zotavování","chip.nap":"Zdřímnutí {minutes} min","chip.nap_earlier":"Zdřímnutí {minutes} min (dříve)","chip.workouts_30d":"Tréninky za posledních 30 dní: {count}","chip.acwr":"ACWR {value} · {label}","profile.summary":"Nejsilnější: {strong} · nejslabší: {light}","chip.more_activity_one":"+{count} další typ aktivity","chip.more_activity_other":"Další typy aktivit: +{count}","chip.unusual_recovery":"Neobvyklé zotavení","chip.days_since_one":"{count} den od posledního tréninku","chip.days_since_other":"Dny od posledního tréninku: {count}","chip.manually_added":"Přidáno ručně","chip.sleep_stale":"Žádný spánek z poslední noci · noc {date}","readiness.balance_only":"Jen bilance zotavení, bez spánku","chip.no_hr":"Bez tepu","card.heart_rate.measured":"Měřeno {time}","card.heart_rate.measured_ago":"Měřeno {ago} · {time}","stat.energy_active_sub":"{kcal} aktivně","energy.total_unit":"kcal celkem","energy.split":"{active} aktivně · {bmr} BMR","card.commute.title":"Dojíždění","card.commute.subtitle_year":"Letos místo auta","card.commute.subtitle_month":"Tento měsíc místo auta","commute.saved":"ušetřeno","commute.fuel_co2":"{fuel} l paliva · o {co2} kg CO2 méně","stat.rides":"Jízdy","stat.days":"Dny","stat.avg_time":"Prům. čas","commute.this_month":"Tento měsíc:","commute.this_year":"Letos:","commute.rides_n":"jízdy: {n}","empty.commute.title":"Zatím žádné dojíždění","empty.commute.subtitle":"Zobrazí se tu tréninky, které Suunto označí jako dojíždění.","card.gear.title":"Vybavení","card.gear.subtitle":"Vzdálenost a servis","gear.remaining":"zbývá {km}","gear.over":"{km} přes limit","chip.service":"Servis","empty.gear.title":"Zatím žádné sledované vybavení","empty.gear.subtitle":"Vybavení přidáš v nabídce Nastavit u integrace.","card.form_forecast.title":"Předpověď formy","card.form_forecast.subtitle":"Pokud od dneška odpočíváš","stat.tomorrow":"Zítra","stat.peak_in":"Vrchol za {days} d","stat.maintenance":"Udržení kondice / týd.","empty.form_forecast.title":"Zatím žádná předpověď","card.daily_brief.title":"Denní přehled","empty.daily_brief.title":"Zatím žádný přehled","achievement.count_one":"{count} úspěch","achievement.count_other":"Úspěchy: {count}","achievement.rank":"Umístění #{rank} na této trase","label.zone":"Zóna {n}","label.deep":"Hluboký","label.light":"Lehký","label.rem":"REM","editor.auto_detect":"Karta sama najde tvé zařízení Suunto - není třeba nic nastavovat.","editor.pick_device":"Bylo nalezeno více zařízení Suunto - vyber, ze kterého má karta číst.","editor.device_label":"Zařízení Suunto","editor.units_label":"Jednotky","editor.units_metric":"Metrické (km)","editor.units_imperial":"Imperiální (mi)","editor.compact_label":"Kompaktní režim","editor.days_label":"Okno trendu (dny)","editor.period_label":"Hlavní období","editor.period_year":"Letos","editor.period_month":"Tento měsíc","editor.goal_source_label":"Cíl kroků z","editor.source_suunto":"Aplikace Suunto ({value})","editor.source_suunto_default":"Aplikace Suunto (cíl nenastaven, použito {value})","editor.source_custom":"Vlastní","editor.fuel_source_label":"Údaje o palivu z","editor.source_integration":"Integrace Suunto ({litres} l/100 km, {price} za l)","editor.source_integration_unknown":"Integrace Suunto","editor.fuel_consumption_label":"Spotřeba paliva (l/100 km)","editor.fuel_price_label":"Cena paliva za litr","editor.fuel_hint":"Hodnoty integrace změníš v Nastavení > Zařízení a služby > Suunto > Nastavit.","card.lifetime.title":"Celkové součty","card.lifetime.subtitle":"Od tvého začátku","stat.active_days":"Aktivní dny","empty.lifetime.title":"Zatím žádná celková data","card.recent_workouts.title":"Nedávné tréninky","empty.recent_workouts.title":"Žádné nedávné tréninky","card.elevation.title":"Převýšení a stoupání","stat.ascent":"Stoupání","stat.descent":"Klesání","stat.ascent_time":"Čas stoupání","stat.descent_time":"Čas klesání","stat.min_altitude":"Min. výška","stat.max_altitude":"Max. výška","stat.ascent_rate":"Rychlost stoupání","empty.elevation.title":"Žádná data o převýšení","empty.elevation.subtitle":"Zaznamenávají je jen venkovní tréninky s barometrem.","card.location.title":"Místo startu","location.open_in_maps":"Otevřít v mapách","empty.location.title":"Žádná data o poloze","empty.location.subtitle":"Tréninky v hale nemají GPS bod startu.","card.fitness.title":"Kondice","stat.vo2max":"VO2max","stat.estimated_vo2max":"Odhad VO2max","stat.fitness_age":"Kondiční věk","fitness.measured":"Měřeno {time} · {activity}","empty.fitness.title":"Zatím žádná data o kondici","empty.fitness.subtitle":"Suunto to počítá jen z běhu nebo chůze.","empty.fitness_trend.title":"Zatím žádná data o kondici","empty.fitness_trend.subtitle":"Suunto to počítá jen z běhu nebo chůze.","card.pmc.title":"Řízení výkonnosti","card.pmc.subtitle":"{days}denní trend","card.recovery_trends.title":"Trendy zotavení","card.recovery_trends.subtitle":"{days}denní výchozí hodnota","empty.recovery_trends.title":"Zatím žádná data trendu zotavení","card.weekly_volume.title":"Týdenní objem","card.weekly_volume.subtitle":"Posledních 12 týdnů","empty.weekly_volume.title":"Zatím žádná data týdenního objemu","stat.average":"Průměr","stat.total":"Celkem","card.hr_curve.title":"Křivka tepu","card.hr_curve.subtitle":"Posledních 24 hodin","stat.hr_now":"Teď","stat.hr_min":"Dnešní min.","stat.hr_max":"Dnešní max.","empty.hr_curve.title":"Zatím žádná živá data tepu","empty.hr_curve.subtitle":"Nos hodinky a synchronizuj je, dnešní křivka se tu objeví.","card.sleep_trends.title":"Trendy spánku","card.sleep_trends.subtitle":"Posledních {days} nocí","empty.sleep_trends.title":"Zatím žádná data trendu spánku","card.weekly_goal.title":"Týdenní cíl","card.weekly_goal.subtitle":"{value} z {goal} km","empty.weekly_goal.title":"Zatím žádná týdenní vzdálenost","editor.goal_label":"Týdenní cíl (km)","card.streak.title":"Série aktivity","card.streak.subtitle":"Posledních 14 dní","streak.window_count_one":"{count} aktivní den","streak.window_count_other":"Aktivní dny: {count}","streak.days_one":"{count}denní série","streak.days_other":"{count}denní série","streak.none":"Žádná aktivní série - dnes se pohni","empty.streak.title":"Zatím žádná historie tréninků","just_finished.title":"Skvělá práce!","just_finished.idle.title":"Čeká se na tvůj další trénink","just_finished.idle.subtitle":"Rozsvítí se hned, jak hodinky synchronizují nový.","empty.just_finished.title":"Žádný nedávný trénink","card.activity_trends.title":"Trendy aktivity","card.activity_trends.subtitle":"Posledních {days} dní","empty.activity_trends.title":"Zatím žádná data trendu aktivity","card.recovery_balance_trend.title":"Trend bilance zotavení","card.recovery_balance_trend.subtitle":"Posledních {days} dní","empty.recovery_balance_trend.title":"Zatím žádná data trendu zotavení","card.readiness_trend.title":"Trend připravenosti","card.readiness_trend.subtitle":"Posledních {days} dní","empty.readiness_trend.title":"Zatím žádná data trendu připravenosti","stat.cadence":"Kadence","stat.stride_length":"Délka kroku","stat.pct_hrmax":"% max. tepu","stat.sleep_avg_hr":"Prům. tep ve spánku","stat.sleep_min_hr":"Min. tep ve spánku","chip.bedtime":"Ulehnutí {time}","card.activity_calendar.title":"Kalendář aktivit","card.activity_calendar.subtitle":"Posledních 6 týdnů","empty.activity_calendar.title":"Zatím žádná historie tréninků","activity_calendar.active_days_one":"{count} aktivní den","activity_calendar.active_days_other":"Aktivní dny: {count}","card.workout_comparison.title":"Porovnání tréninků","card.workout_comparison.vs":"oproti {time}","empty.workout_comparison.title":"Zatím málo podobných tréninků","empty.workout_comparison.subtitle":"Udělej stejnou aktivitu dvakrát a uvidíš porovnání.","stat.distance_delta":"Vzdálenost ({delta})","stat.duration_delta":"Délka ({delta})","stat.avg_hr_delta":"Prům. tep ({delta})","stat.pace_delta":"Tempo ({delta})","card.milestones.title":"V číslech","card.milestones.subtitle":"Od tvého začátku","empty.milestones.title":"Zatím žádná celková data","stat.earth_laps":"Obvody Země","stat.marathons":"Maratony","stat.moon_pct":"% cesty k Měsíci","stat.burgers":"Burgery","card.athlete_profile.title":"Tréninková osobnost","empty.athlete_profile.title":"Zatím málo dat","personality.activity.cycling":"Cyklista","personality.activity.running":"Běžec","personality.activity.trekking":"Turista","personality.activity.walking":"Chodec","personality.activity.gym":"Silový sportovec","personality.activity.swim":"Plavec","personality.activity.ski":"Lyžař","personality.activity.row":"Veslař","personality.activity.other":"Multisportovec","personality.schedule.weekend":"Víkendový válečník","personality.schedule.weekday":"Pravidelný ve všední dny","personality.schedule.balanced":"Vyvážený plánovač","personality.time.morning":"Ranní ptáče","personality.time.afternoon":"Polední sportovec","personality.time.evening":"Večerní sportovec","personality.time.night":"Noční sova","card.pace_trend.title":"Trend tempa","card.pace_trend.subtitle":"{activity} · poslední tréninky: {count}","empty.pace_trend.title":"Zatím málo podobných tréninků","empty.pace_trend.subtitle":"Udělej stejnou aktivitu několikrát a uvidíš trend.","pace_trend.faster":"Zrychluješ","pace_trend.slower":"Zpomaluješ","pace_trend.steady":"Tempo drží","card.lap_splits.title":"Mezičasy kol","empty.lap_splits.title":"Žádná data o kolech","empty.lap_splits.subtitle":"Ne každý trénink má kola - vyplní to tvůj další trénink s nimi.","stat.laps":"Kola","stat.fastest_lap":"Nejrychlejší kolo","label.lap":"Kolo {n}","card.training_effect_trend.title":"Trend tréninkového efektu","card.fitness_trend.title":"Trend kondice","empty.training_effect_trend.title":"Zatím žádná data tréninkového efektu","achievements.badge.around_globe":"Kolem světa","achievements.badge.century_club":"Klub stovky - 100 tréninků","achievements.badge.consistency_king":"Král pravidelnosti - 14denní série","achievements.badge.iron_will":"Železná vůle - 30denní série","achievements.badge.days_100":"100 aktivních dní","achievements.badge.distance_1000":"Klub 1 000 km","achievements.badge.distance_5000":"Klub 5 000 km","achievements.badge.elite_engine":"Elitní motor - VO2max 55+","achievements.badge.energy_100k":"Spáleno 100 000 kcal","achievements.badge.energy_1m":"Spáleno 1 000 000 kcal","achievements.badge.full_year":"Celý rok v pohybu","achievements.badge.hours_100":"100 hodin","achievements.badge.hours_500":"500 hodin","achievements.badge.jack_of_all_trades":"Všestranný - 5+ sportů","achievements.badge.multi_sport":"Multisportovec - 3+ sporty","achievements.badge.solid_engine":"Solidní motor - VO2max 40+","achievements.badge.specialist":"{activity} - 100+ tréninků","achievements.badge.workouts_1000":"1 000 tréninků","achievements.badge.workouts_250":"250 tréninků","achievements.badge.workouts_500":"500 tréninků","achievements.category.days":"Aktivní dny","achievements.category.distance":"Vzdálenost","achievements.category.energy":"Energie","achievements.category.fitness":"Úroveň kondice","achievements.category.records":"Osobní rekordy","achievements.category.time":"Čas tréninku","achievements.category.variety":"Pestrost","achievements.category.workouts":"Zaznamenané tréninky","card.achievements.subtitle":"Odemčeno {unlocked} z {total}","card.achievements.title":"Úspěchy","achievements.next":"Další: {name} ({pct} %)","class.rest":"+{pct} % jiné aktivity","class.tag":"Zaměření: {activity}","empty.achievements.subtitle":"Zaznamenej pár tréninků a začni odemykat odznaky.","empty.achievements.title":"Zatím žádné úspěchy","empty.class.subtitle":"Zaznamenej pár tréninků a odhal svou třídu.","empty.class.title":"Zatím málo dat","empty.level.subtitle":"Tvůj první synchronizovaný trénink zahájí stoupání.","empty.level.title":"Zatím žádná celková data","empty.player.subtitle":"K výpočtu statistik je potřeba trocha tréninkové historie.","empty.player.title":"Zatím málo dat","level.label":"ÚROVEŇ","level.source":"Zaznamenané tréninky: {count}","level.subtitle":"Poháněno tvou celkovou tréninkovou zátěží","level.title.grinder":"Vytrvalostní dříč","level.title.legend":"Žijící legenda","level.title.novice":"Čerstvý nováček","level.title.veteran":"Ostřílený veterán","level.xp_to_next":"{xp} XP do úrovně {level}","level.xp_total":"{xp} XP","player.archetype":"Specialista: {activity}","player.help.title":"Co to znamená","player.help.sta":"STA · Výdrž, z tvé kondice (CTL): kolik stálé tréninkové zátěže zvládneš","player.help.pwr":"PWR · Síla, z průměrné intenzity (TSS) tvých nedávných tréninků","player.help.rec":"REC · Zotavení, tvé aktuální skóre připravenosti","player.help.con":"CON · Pravidelnost, tréninky zaznamenané za posledních 30 dní","player.help.end":"END · Vytrvalost, z tvého odhadovaného VO2max","player.help.frm":"FRM · Forma, z tvé aktuální tréninkové bilance (TSB)","player.help.disclaimer":"Heuristická hodnocení spočítaná z tvých vlastních dat - nejde o oficiální metriku Suunto.","player.tier.bronze":"Bronz","player.tier.gold":"Zlato","player.tier.legendary":"Legenda","player.tier.silver":"Stříbro","records.climb":"Největší stoupání","records.distance":"Nejdelší vzdálenost","records.pace":"Nejrychlejší tempo","records.session":"Nejtěžší trénink","records.streak":"Nejdelší série","records.streak_days_one":"{count} den","records.streak_days_other":"{count} d","records.workout":"Nejdelší trénink","class.name.cycling":"Vytrvalostní válečník","class.name.running":"Sprinter","class.name.trekking":"Průkopník stezek","class.name.walking":"Poutník","class.name.gym":"Silový berserkr","class.name.swim":"Vládce přílivu","class.name.ski":"Mrazivý běžec","class.name.row":"Veslař","class.name.other":"Všeuměl","class.flavor.cycling":"Dlouhé, vyrovnané úsilí místo čisté rychlosti. Každý jiný sport je jen doplňkový trénink pro motor.","class.flavor.running":"Rychlý start a cit pro tempo. Vzdálenost je jen prostředek k cíli.","class.flavor.trekking":"Jako doma v náročném terénu, kde se kilometry ukrajují celé hodiny.","class.flavor.walking":"Klidné kilometry s nízkou zátěží se sčítají - pravidelnost před intenzitou.","class.flavor.gym":"Hrubá síla před vzdáleností. Silový trénink je na prvním místě.","class.flavor.swim":"Vytrvalost kovaná ve vodě, záběr po záběru.","class.flavor.ski":"Rychlost a rytmus na sněhu a v mrazu.","class.flavor.row":"Rytmická síla, tah za tahem.","class.flavor.other":"Žádný sport nepřevládá - opravdu vyvážený mix.","card.next_milestone.title":"Další milník","card.next_milestone.subtitle":"Celková vzdálenost","empty.next_milestone.title":"Zatím žádná celková vzdálenost","next_milestone.remaining_label":"zbývá","next_milestone.target":"do {target} km celkem - hotovo {pct} %","next_milestone.workouts_one":"{count} trénink do {target} celkem","next_milestone.workouts_other":"Tréninky do {target} celkem: {count}","next_milestone.eta_one":"při {pace} km/týden - zbývá asi {weeks} týden","next_milestone.eta_other":"při {pace} km/týden - zbývá asi {weeks} týd.","card.story.title":"Tvůj příběh Suunto","card.story.subtitle":"Od tvého prvního tréninku","empty.story.title":"Zatím žádná celková data","story.top_activity":"{activity} - tvá hlavní aktivita","story.top_activity_share":"Tréninky: {count} - {pct} % tvé historie","story.record_subtitle":"Tvůj osobní rekord všech dob","card.sleep_clock.title":"Hodiny spánku","card.sleep_clock.subtitle":"Poslední noc","empty.sleep_clock.title":"Zatím žádná data o spánku","empty.sleep_clock.subtitle":"Spi s hodinkami a data se tu objeví.","sleep_clock.quality":"Kvalita spánku {pct} %","card.sleep_rhythm.title":"Rytmus spánku","card.sleep_rhythm.subtitle":"Posledních 7 nocí","empty.sleep_rhythm.title":"Zatím málo historie spánku","empty.sleep_rhythm.subtitle":"K zobrazení vzorce je potřeba data z několika nocí.","sleep_rhythm.avg_bedtime":"Prům. ulehnutí {time}","sleep_rhythm.avg_wake":"Prům. probuzení {time}","sleep_rhythm.spread":"Rozptyl {minutes} min","sleep_rhythm.legend_normal":"Běžná noc","sleep_rhythm.legend_outlier":"{minutes}+ min od průměru","card.route.title":"Trasa","empty.route.title":"Žádná data o trase","empty.route.subtitle":"Tréninky v hale nemají GPS záznam.","route.pace_slower":"Pomaleji","route.pace_faster":"Rychleji","card.month_story.title":"Tento měsíc","empty.month_story.title":"Tento měsíc zatím žádné tréninky","story.share_month":"Tréninky: {count} - {pct} % tohoto měsíce","story.record_subtitle_month":"Tvůj rekord tohoto měsíce","card.year_story.title":"Letos","empty.year_story.title":"Letos zatím žádné tréninky","story.share_year":"Tréninky: {count} - {pct} % letošního roku","story.record_subtitle_year":"Tvůj letošní rekord","card.best_efforts.title":"Nejlepší výkony","card.best_efforts.subtitle":"Zaznamenáno {count} z {total}","empty.best_efforts.title":"Zatím žádné nejlepší výkony","empty.best_efforts.subtitle":"Zaznamenávají se z běžeckých tréninků od teď, ne zpětně.","best_efforts.not_yet":"Zatím nezaznamenáno","distance.half_marathon":"Půlmaraton","distance.marathon":"Maraton","card.steps_today.title":"Kroky dnes","card.steps_today.subtitle":"Cíl: {goal} kroků","empty.steps_today.title":"Zatím žádná data o krocích","editor.steps_goal_label":"Denní cíl (kroky)","steps_today.goal_pct":"{pct} % denního cíle","steps_today.vs_avg_up":"+{pct} % oproti tvému 7dennímu průměru ({avg})","steps_today.vs_avg_down":"-{pct} % oproti tvému 7dennímu průměru ({avg})","card.steps_trend.title":"Trend kroků","card.steps_trend.subtitle":"Posledních {days} dní","empty.steps_trend.title":"Zatím žádná historie kroků","steps_trend.legend_met":"Cíl splněn","steps_trend.legend_below":"Pod cílem","steps_trend.days_at_goal":"Dny se splněným cílem","card.month_records.title":"Rekordy tohoto měsíce","card.month_records.subtitle":"Tento měsíc vytvořeno {count} z {total}","empty.month_records.title":"Tento měsíc zatím žádné rekordy","empty.month_records.subtitle":"Tady se objeví osobní rekordy tohoto měsíce.","card.year_records.title":"Letošní rekordy","card.year_records.subtitle":"Letos vytvořeno {count} z {total}","empty.year_records.title":"Letos zatím žádné rekordy","empty.year_records.subtitle":"Tady se objeví letošní osobní rekordy.","card.running_dynamics.title":"Běžecká dynamika","card.running_dynamics.subtitle":"{activity} - poslední tréninky: {count}","empty.running_dynamics.title":"Zatím málo dat","empty.running_dynamics.subtitle":"Je potřeba pár nedávných běžeckých nebo pěších tréninků s daty o kadenci.","card.weekly_steps_goal.title":"Týdenní cíl kroků","card.weekly_steps_goal.subtitle":"{value} z {goal} kroků","empty.weekly_steps_goal.title":"Zatím žádná data o krocích","editor.weekly_steps_goal_label":"Týdenní cíl (kroky)","card.goals_overview.title":"Přehled cílů","card.goals_overview.subtitle":"Tento týden","empty.goals_overview.title":"Zatím žádná data o cílech","card.week_compare.title":"Tento týden vs minulý","card.week_compare.subtitle":"Klouzavé 7denní součty","empty.week_compare.title":"Zatím málo historie","empty.week_compare.subtitle":"Na porovnání se sem podívej zhruba za týden.","week_compare.legend_now":"Tento týden","week_compare.legend_prev":"Minulý týden","card.sleep_detail.title":"Detail spánku","card.sleep_detail.subtitle":"Poslední noc","label.awake":"Vzhůru","label.sleep_other":"Ostatní spánek","sleep_detail.total_sleep":"celkový spánek","sleep_detail.in_bed":"{duration} v posteli","sleep_detail.bedtime":"Ulehnutí","sleep_detail.wake":"Probuzení","sleep_detail.stages":"Fáze spánku","sleep_detail.efficiency":"Efektivita spánku","sleep_detail.efficiency_sub":"Čas spánku ÷ čas v posteli","sleep_detail.vitals":"Životní funkce","sleep_detail.insight_excellent":"{pct} % hlubokého spánku · výborné okno pro zotavení.","sleep_detail.insight_solid":"{pct} % hlubokého spánku · solidní noční zotavení.","sleep_detail.insight_light":"{pct} % hlubokého spánku · lehčí než obvykle.","editor.energy_goal_source_label":"Cíl kalorií z","editor.sleep_goal_source_label":"Cíl spánku z","editor.training_goal_source_label":"Cíl času tréninku z","editor.energy_goal_label":"Denní cíl (aktivní kcal)","editor.sleep_goal_label":"Cíl spánku (hodiny)","editor.training_goal_label":"Týdenní cíl (hodiny)","editor.show_goals_label":"Zobrazit cíle","editor.source_suunto_none":"Aplikace Suunto (cíl nenastaven)","editor.distance_goal_hint":"Aplikace Suunto nemá cíl vzdálenosti, tento je proto vždy tvůj vlastní.","card.daily_goals.title":"Denní cíle","card.daily_goals.subtitle":"Kroky, kalorie a spánek","empty.daily_goals.title":"Zatím žádná data o cílech","stat.active_kcal":"Aktivní kcal","stat.sleep":"Spánek","stat.training_time":"Čas tréninku","goal.of":"z {goal}","goal.energy_active_of":"{kcal} aktivně z {goal}","sleep_goal.label":"Cíl spánku","sleep_goal.short":"{value} z {goal} · chybí {missing}","sleep_goal.met":"{value} z {goal} · cíl splněn","sleep_trends.nights_at_goal":"Noci se splněným cílem","sleep_trends.avg_vs_goal":"Průměr vs cíl","sleep_trends.legend_goal":"Cíl {goal}","card.ai_insight.title":"AI analýza","empty.ai_insight.title":"AI analýza je vypnutá","empty.ai_insight.subtitle":"Zapni ji v integraci: Nastavit -> Denní AI analýza","empty.ai_insight.waiting":"Dnes zatím žádná AI analýza","ai_insight.generating":"Vytváří se analýza","ai_insight.night":"noc {night}","ai_insight.no_night":"poslední noc ještě není synchronizovaná","ai_insight.no_section":"Pro tuto část nejsou data","ai_insight.advice":"Rada na dnešek","ai_insight.disclaimer":"Nejde o lékařskou radu","ai_insight.section.sleep":"Spánek","ai_insight.section.recovery":"Zotavení","ai_insight.section.training":"Trénink","ai_insight.section.activity":"Aktivita","ai_insight.section_full.sleep":"Spánek","ai_insight.section_full.recovery":"Zdraví a zotavení","ai_insight.section_full.training":"Trénink","ai_insight.section_full.activity":"Denní aktivita","ai_insight.status.good":"Dobré","ai_insight.status.ok":"OK","ai_insight.status.caution":"Pozor","ai_insight.status.rest":"Odpočinek","strategy.title":"Trénink","strategy.none":"Žádný účet Suunto","strategy.none_text":"Nebyl nalezen žádný účet z integrace Suunto App. Přidej integraci v Nastavení > Zařízení a služby a pak tento dashboard znovu načti.","strategy.section.today":"Dnes","strategy.section.ai":"AI analýza","strategy.section.sleep":"Spánek","strategy.section.recovery":"Zotavení","strategy.section.last_workout":"Poslední trénink","strategy.section.load":"Zátěž a forma","strategy.section.week":"Tento týden","strategy.section.records":"Rekordy","strategy.section.history":"Historie a profil","strategy.section.gear":"Vybavení a dojíždění","card.ai_weekly.title":"Týdenní AI shrnutí","empty.ai_weekly.subtitle":"Vyžaduje ha-suunto 1.0.38 nebo novější se zapnutou AI: Nastavit -> AI","empty.ai_weekly.waiting":"Zatím žádné týdenní AI shrnutí","ai_weekly.week":"týden {range}","ai_weekly.advice":"Plán na příští týden","editor.ai_report_label":"Zpráva","editor.ai_report_daily":"Denní analýza","editor.ai_report_weekly":"Týdenní shrnutí","editor.ai_section_label":"Sekce","editor.ai_single_label":"Zobrazit jen tuto sekci","card.sleep_regularity.title":"Pravidelnost spánku","sleep_regularity.subtitle":"Poslední 4 týdny · noci: {nights}","empty.sleep_regularity.title":"Zatím málo nocí","empty.sleep_regularity.subtitle":"Je potřeba asi týden po sobě jdoucích nocí s hodinkami.","sleep_regularity.bed":"Prům. ulehnutí {time}","sleep_regularity.wake":"Prům. probuzení {time}","sleep_regularity.mid_work":"Střed spánku, noci Ne-Čt {time}","sleep_regularity.mid_free":"Střed spánku, noci Pá/So {time}","band.regularity.regular":"Pravidelný","band.regularity.fair":"Celkem pravidelný","band.regularity.irregular":"Nepravidelný","chip.regularity":"Pravidelnost {value}","chip.social_jetlag":"Sociální jetlag {value}","card.aerobic_decoupling.title":"Aerobní decoupling","empty.aerobic_decoupling.title":"Zatím žádný analyzovaný dlouhý trénink","empty.aerobic_decoupling.subtitle":"Objeví se po tréninku delším než 40 minut s GPS a tepem.","aerobic_decoupling.analyzed":"Analyzováno {minutes} min","aerobic_decoupling.hint":"pod 5 % = solidní aerobní základ","aerobic_decoupling.first_half":"1. polovina","aerobic_decoupling.second_half":"2. polovina","aerobic_decoupling.trend":"Poslední analyzované tréninky: {count}","band.decoupling.coupled":"Stabilní","band.decoupling.moderate":"Mírný drift","band.decoupling.high":"Vysoký drift","stat.decoupling":"Drift tepu","card.personal_insights.title":"Co ti funguje","personal_insights.subtitle":"Z posledních nocí: {nights}","empty.personal_insights.title":"Zatím žádné jasné vzorce","empty.personal_insights.subtitle":"Je potřeba pár týdnů dat o spánku a tréninku. Zobrazují se jen jasné rozdíly.","personal_insights.these_nights":"tyto noci","personal_insights.the_rest":"ostatní","personal_insights.nights_count":"noci: {with} vs {without}","personal_insights.disclaimer":"Vzorce ve tvých vlastních datech, ne důkaz příčiny. Zjištění potřebuje aspoň 4 noci nebo tréninky na každé straně.","insights.cond.late_workout":"Po tréninku končícím po {time}","insights.cond.training_day":"V tréninkové dny","insights.cond.hard_day":"Po tvých nejtěžších tréninkových dnech","insights.cond.early_bed":"Když jdeš spát před {bedtime}","insights.cond.free_night":"O pátečních a sobotních nocích","insights.metric.hrv":"HRV","insights.metric.resting_hr":"Klidový tep","insights.metric.sleep":"Spánek","daily_brief.your_pattern":"Tvůj vzorec","editor.show_insight_label":"Zobrazit tvůj nejsilnější vzorec","editor.look_section":"Vzhled","editor.title":"Název","editor.icon":"Ikona (např. mdi:star)","editor.accent_color":"Barva zvýraznění (např. #e91e63 nebo teal)","editor.accent_hint":"Stejná barva ve světlém i tmavém režimu. Neplatná barva se ignoruje.","editor.accent_default":"Výchozí (jantarová)","editor.accent_pink":"Růžová","editor.accent_purple":"Fialová","editor.accent_teal":"Tyrkysová","editor.accent_green":"Zelená","editor.accent_blue":"Modrá","editor.hide_header":"Skrýt záhlaví","editor.hide_icon":"Skrýt ikonu","editor.hide_subtitle":"Skrýt podtitulek","editor.hide_legend":"Skrýt legendu","editor.text_size":"Velikost textu","text_size.normal":"Normální","text_size.large":"Velká (115 %)","text_size.larger":"Větší (130 %)","text_size.largest":"Největší (150 %)","editor.language":"Jazyk","editor.language_auto":"Podle Home Assistantu","editor.hide_sync_warning":"Skrýt varování o chybějící synchronizaci","editor.max_items":"Počet položek","editor.list_height":"Výška seznamu (px)","card.stress_today.title":"Stres a zotavení","stress_today.subtitle_today":"Dnes do {time}","stress_today.subtitle_waiting":"Včera · dnešek ještě není synchronizovaný","stress_today.yesterday":"Včera","empty.stress_today.title":"Zatím žádná data o stresu","empty.stress_today.subtitle":"Vyžaduje Suunto App (neoficiální) 1.0.37 nebo novější a synchronizované hodinky.","stress.state.recovering":"Zotavování","stress.state.active":"Aktivní","stress.state.inactive":"Neaktivní","stress.state.stressed":"Stres","insights.cond.hot_weather":"V horku ({temp} °C a více)","insights.cond.cold_weather":"V chladu ({temp} °C a méně)","insights.metric.efficiency":"Efektivita","insights.unit.per_beat":"m/úder","personal_insights.subtitle_days":"Noci: {nights} · tréninkové dny: {days}","personal_insights.these_workouts":"tyto tréninky","personal_insights.workouts_count":"tréninky: {with} vs {without}","personal_insights.speed_at_hr":"{with_speed} km/h při {with_hr} bpm vs {without_speed} km/h při {without_hr} bpm","sync.at":"synchronizováno {time}","sync.yesterday":"synchronizováno včera {time}","chip.not_synced":"Hodinky nesynchronizovány {hours} h","editor.eink":"E-ink displej","eink.off":"Vypnuto","eink.bw":"Černobílý","eink.gray":"4 odstíny šedi","eink.red":"Černá, bílá a červená","eink.yellow":"Černá, bílá a žlutá","eink.color":"6 barev","editor.max_lines":"Max. řádků textu","card.whats_new.title":"Co je nového","card.whats_new.subtitle":"Posledních {days} dní","whats_new.today":"Dnes","whats_new.yesterday":"Včera","whats_new.now":"Teď","whats_new.empty":"Za posledních {days} dní nic nového","whats_new.record":"Nový rekord: {label} {value}","whats_new.record_year":"Rekord roku: {label} {value}","whats_new.record_month":"Rekord měsíce: {label} {value}","whats_new.best_effort":"Nejlepší výkon {distance}: {time}","whats_new.ai_daily":"Denní AI analýza","whats_new.ai_weekly":"Týdenní AI shrnutí","whats_new.gear_due":"{name}: čas na servis","editor.whats_new_show":"Zobrazit","whats_new.kind.workouts":"Tréninky","whats_new.kind.records":"Rekordy a nejlepší výkony","whats_new.kind.achievements":"Úspěchy na trasách","whats_new.kind.ai":"AI zprávy","whats_new.kind.gear":"Servis vybavení"}};function ke(e,t,a){let i=function(e){const t=e?.language??"en",a=t.split("-")[0]?.toLowerCase();return fe[a]??be}(e)[t]??be[t];if(a)for(const[e,t]of Object.entries(a))i=i.replace(`{${e}}`,String(t));return i}function we(e,t,a,i,s){return ke(e,1===t?a:i,{count:t,...s})}const xe="suunto_app";class Se extends Error{constructor(e,t){super(e),this.code=e,this.deviceId=t}}function $e(e){const t=new Set;for(const a of Object.values(e.entities??{}))a.platform===xe&&a.device_id&&t.add(a.device_id);return[...t]}function ze(e,t){const a=$e(e);if(t){if(!a.includes(t))throw new Se("device_missing",t);return t}if(1===a.length)return a[0];if(0===a.length)throw new Se("no_device");throw new Se("multiple_devices")}function je(e,t){const a={};for(const i of Object.values(e.entities??{}))i.device_id===t&&i.platform===xe&&i.translation_key&&(a[i.translation_key]=i.entity_id);return a}const Ae={steps:{configKey:"goal_steps",sensor:"daily_steps",attribute:"goal",fallback:1e4,step:500,unit:"",sourceLabel:"editor.goal_source_label",customLabel:"editor.steps_goal_label"},energy:{configKey:"goal_energy_kcal",sensor:"daily_energy",attribute:"goal",fallback:500,step:50,unit:"kcal",sourceLabel:"editor.energy_goal_source_label",customLabel:"editor.energy_goal_label"},sleep:{configKey:"goal_sleep_hours",sensor:"bmr",attribute:"goal_sleep_hours",fallback:8,step:.5,unit:"h",sourceLabel:"editor.sleep_goal_source_label",customLabel:"editor.sleep_goal_label"},training:{configKey:"goal_training_hours",sensor:"bmr",attribute:"goal_weekly_training_hours",fallback:5,step:.5,unit:"h",sourceLabel:"editor.training_goal_source_label",customLabel:"editor.training_goal_label"}},Te=Ae.steps.fallback;function Ce(e,t,a){if(e)try{const i=Ae[a],s=je(e,ze(e,t)),n=s[i.sensor]?e.states[s[i.sensor]]?.attributes[i.attribute]:void 0;return"number"==typeof n&&n>0?n:void 0}catch{return}}function Ne(e,t,a,i){const s=t[Ae[i].configKey];return"number"==typeof s&&s>0?s:Ce(e,a,i)}function Me(e,t,a,i){return Ne(e,t,a,i)??Ae[i].fallback}function Ee(e,t,a){const i=Ae[t].unit,s=a.toLocaleString(e.language,{maximumFractionDigits:1});return i?`${s} ${i}`:s}function De(e,t,a,i){const s=a>=i;return B`<span class="goal-in ${s?"done":""}"
    >/ ${Ee(e,t,i)}${s?B`<ha-icon icon="mdi:check"></ha-icon>`:W}</span
  >`}function Re(e){const t=Math.round(60*e),a=Math.floor(t/60),i=t%60;return 0===i?`${a} h`:`${a}:${String(i).padStart(2,"0")} h`}function Ie(e,t){return Ce(e,t,"steps")}function Pe(e,t){if(e)try{const a=je(e,ze(e,t));for(const t of["commute_year","commute_month"]){const i=a[t]?e.states[a[t]]?.attributes:void 0;if(i&&"number"==typeof i.fuel_l_per_100km&&"number"==typeof i.fuel_price_per_litre)return{litres:i.fuel_l_per_100km,price:i.fuel_price_per_litre}}}catch{}}function Ve(e,t,a,i={},s){let n=t;const r=e=>{const t=String(e.currentTarget?.value??"");t!==n&&(n=t,a(t))},o=e=>{"Enter"===e.key&&r(e)};return customElements.get("ha-input")?B`
      <ha-input
        .label=${e}
        .value=${t}
        .type=${i.type??"text"}
        .min=${i.min}
        .max=${i.max}
        .step=${i.step}
        ?without-spin-buttons=${"number"===i.type}
        @change=${r}
        @focusout=${r}
        @keydown=${o}
        >${s?B`<span slot="end">${s}</span>`:W}</ha-input
      >
    `:customElements.get("ha-textfield")?B`
      <ha-textfield
        label=${e}
        .value=${t}
        type=${i.type??"text"}
        ?no-spinner=${"number"===i.type}
        min=${i.min??""}
        max=${i.max??""}
        step=${i.step??""}
        @change=${r}
        @focusout=${r}
        @keydown=${o}
      ></ha-textfield>
      ${s?B`<span class="end-outside">${s}</span>`:W}
    `:B`
    <label class="plain">
      <span>${e}</span>
      <input
        .value=${t}
        type=${i.type??"text"}
        min=${i.min??""}
        max=${i.max??""}
        step=${i.step??""}
        @change=${r}
        @keydown=${o}
      />
      ${s?B`<span class="end-outside">${s}</span>`:W}
    </label>
  `}function He(e,t,a,i){const s=e=>{const a=function(e){const t=e.detail;if(t&&void 0!==t.value)return String(t.value);const a=e.currentTarget;return a?.value??""}(e);a&&a!==t&&i(a)};return customElements.get("ha-select")?B`
    <ha-select
      label=${e}
      .value=${t}
      .options=${a}
      naturalMenuWidth
      fixedMenuPosition
      @selected=${s}
      @closed=${e=>{e.stopPropagation(),s(e)}}
    >
      ${a.map(e=>B`<ha-list-item .value=${e.value}>${e.label}</ha-list-item>`)}
    </ha-select>
  `:B`
      <label class="plain">
        <span>${e}</span>
        <select @change=${e=>s(e)}>
          ${a.map(e=>B`<option value=${e.value} ?selected=${e.value===t}>${e.label}</option>`)}
        </select>
      </label>
    `}function Le(e,t,a){const i=e=>a(e.target.checked);return customElements.get("ha-switch")?customElements.get("ha-formfield")?B`
    <ha-formfield label=${e}>
      <ha-switch .checked=${t} @change=${i}></ha-switch>
    </ha-formfield>
  `:B`<ha-switch .checked=${t} @change=${i}>${e}</ha-switch>`:B`
      <label class="plain check">
        <input type="checkbox" .checked=${t} @change=${i} />
        <span>${e}</span>
      </label>
    `}const Fe=r`
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 4px 0;
  }
  ha-select,
  ha-input,
  ha-textfield,
  ha-device-picker {
    display: block;
    width: 100%;
  }
  .hint {
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    margin-top: -6px;
    padding: 0 2px;
  }
  .group-label {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--secondary-text-color);
  }
  hr.sep {
    border: none;
    border-top: 1px solid var(--divider-color);
    margin: 4px 0;
    width: 100%;
  }
  label.plain {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.85rem;
    color: var(--secondary-text-color);
  }
  label.plain.check {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .color-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .preview {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-inline-end: 4px;
    vertical-align: middle;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  }
  .preview.none {
    background: repeating-conic-gradient(var(--divider-color) 0 25%, transparent 0 50%) 50% / 8px 8px;
  }
  .end-outside {
    align-self: flex-end;
  }
  .swatches {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .swatch {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  }
  .swatch.selected {
    outline: 2px solid var(--primary-text-color);
    outline-offset: 2px;
  }
  .swatch:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  label.plain input:not([type="checkbox"]),
  label.plain select {
    font: inherit;
    color: var(--primary-text-color);
    background: var(--card-background-color, transparent);
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 8px 10px;
  }
`;function Oe(e,t,a,i,s){const n=Ae[a],r=Ce(e,t.device_id,a),o=t[n.configKey],l=void 0!==o,d=void 0!==r?ke(e,"editor.source_suunto",{value:Ee(e,a,r)}):i?ke(e,"editor.source_suunto_default",{value:Ee(e,a,n.fallback)}):ke(e,"editor.source_suunto_none");return B`
    ${He(ke(e,n.sourceLabel),l?"custom":"suunto",[{value:"suunto",label:d},{value:"custom",label:ke(e,"editor.source_custom")}],e=>s({...t,[n.configKey]:"custom"===e?r??n.fallback:void 0}))}
    ${l?Ve(ke(e,n.customLabel),String(o),e=>{const a=Number(e);Number.isFinite(a)&&a>0&&s({...t,[n.configKey]:a})},{type:"number",min:n.step,step:n.step}):W}
  `}function Ke(e,t,a,i){const s=Ie(e,t.device_id),n=void 0!==s?i.weekly?7*s:s:void 0,r=void 0!==t.goal_steps;return B`
    ${He(ke(e,"editor.goal_source_label"),r?"custom":"suunto",[{value:"suunto",label:void 0!==n?ke(e,"editor.source_suunto",{value:n.toLocaleString(e.language)}):ke(e,"editor.source_suunto_default",{value:i.fallback.toLocaleString(e.language)})},{value:"custom",label:ke(e,"editor.source_custom")}],e=>a({...t,goal_steps:"custom"===e?n??i.fallback:void 0}))}
    ${r?Ve(ke(e,i.label),String(t.goal_steps),e=>{const i=Number(e);Number.isFinite(i)&&i>0&&a({...t,goal_steps:i})},{type:"number",min:1,step:i.step}):W}
  `}async function Be(e,t,a,i="mean"){const s=new Date,n=new Date(s.getTime()-36e5*a),r=await e.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:s.toISOString(),statistic_ids:[t],period:"hour",types:["mean","min","max","sum"]});return(r?.[t]??[]).map(e=>({t:e.start,v:Number(e[i])})).filter(e=>Number.isFinite(e.t)&&Number.isFinite(e.v))}function qe(e){const t=[...e].sort((e,t)=>e.t-t.t),a=new Map;for(let e=1;e<t.length;e++){const i=t[e].v-t[e-1].v;if(!Number.isFinite(i)||i<0)continue;const s=new Date(t[e].t).toDateString();a.set(s,(a.get(s)??0)+i)}return[...a.entries()].map(([e,t])=>({t:new Date(e).getTime(),v:t})).sort((e,t)=>e.t-t.t)}function Ge(e){const t=new Map;for(const a of e){const e=new Date(a.t).toDateString(),i=t.get(e)??{sum:0,count:0};i.sum+=a.v,i.count+=1,t.set(e,i)}return[...t.entries()].map(([e,{sum:t,count:a}])=>({t:new Date(e).getTime(),v:t/a})).sort((e,t)=>e.t-t.t)}async function We(e,t,a){if(0===t.length)return{};const i=new Date,s=new Date(i.getTime()-864e5*a),n=await e.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${t.join(",")}&end_time=${i.toISOString()}`),r={};return t.forEach((e,t)=>{r[e]=(n[t]??[]).map(e=>({state:e.state,lastChanged:new Date(e.last_updated??e.last_changed).getTime()}))}),r}function Ue(e){if(e>=60){const t=Math.floor(e/60),a=Math.round(e%60);return{value:`${t}:${String(a).padStart(2,"0")}`,unit:"h"}}return{value:String(Math.round(e)),unit:"min"}}function Ze(e){const t=Math.round(60*e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const Je=1.609344;function Xe(e,t="metric",a=1){return"imperial"===t?{value:(e/Je).toFixed(a),unit:"mi"}:{value:e.toFixed(a),unit:"km"}}function Ye(e,t="metric",a=1){return"imperial"===t?{value:(e/Je).toFixed(a),unit:"mph"}:{value:e.toFixed(a),unit:"km/h"}}function Qe(e,t="metric"){return"imperial"===t?{value:Ze(e*Je),unit:"/mi"}:{value:Ze(e),unit:"/km"}}function et(e){const t=Math.round(e),a=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60;return a>0?`${a}:${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${i}:${String(s).padStart(2,"0")}`}function tt(e,t){return new Intl.DateTimeFormat(t,{hour:"numeric",minute:"2-digit"}).format(e)}function at(e,t){const[a,i,s]=e.split("-").map(Number);return a&&i&&s?new Intl.DateTimeFormat(t,{day:"numeric",month:"numeric"}).format(new Date(a,i-1,s)):e}function it(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function st(e,t=0){const a=Number(e.toFixed(t));return 0===a?"±0":a>0?`+${a}`:String(a)}const nt=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60]];function rt(e,t){const a=(e.getTime()-Date.now())/1e3,i=new Intl.RelativeTimeFormat(t,{numeric:"auto"});for(const[e,t]of nt)if(Math.abs(a)>=t)return i.format(Math.round(a/t),e);return i.format(Math.round(a/60),"minute")}function ot(e){if(!e)return;const t=new Date(e.state);if(Number.isNaN(t.getTime()))return;const a=Math.max(0,(Date.now()-t.getTime())/36e5);return{at:t,hoursAgo:a,stale:a>24}}function lt(e,t){const a=e?.language,i=tt(t.at,a),s=new Date,n=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);if(t.at.toDateString()===s.toDateString())return ke(e,"sync.at",{time:i});if(t.at.toDateString()===n.toDateString())return ke(e,"sync.yesterday",{time:i});return ke(e,"sync.at",{time:`${new Intl.DateTimeFormat(a,{day:"numeric",month:"numeric"}).format(t.at)} ${i}`})}function dt(e,t){return t?.stale?B`<span class="chip warn"
    ><ha-icon icon="mdi:watch-import"></ha-icon>${ke(e,"chip.not_synced",{hours:Math.floor(t.hoursAgo)})}</span
  >`:W}const ct=["gray","red","yellow","color"];function ut(e){const t=String(e??"").trim().replace(/^["']|["']$/g,"").toLowerCase();if(!["","false","off","0","no","none"].includes(t))return"grey"===t?"gray":"colour"===t?"color":ct.includes(t)?t:"bw"}const pt=r`
  :host(.eink) {
    --primary-text-color: #000;
    --secondary-text-color: #000;
    --disabled-text-color: #000;
    --divider-color: #000;
    --card-background-color: #fff;
    --ha-card-background: #fff;
    --ha-card-box-shadow: none;
    --ha-card-border-radius: 0;
    --sc-track: #fff;
    --sc-amber: #000;
    --sc-amber-bg: #fff;
    --sc-pulse: #000;
    --sc-pulse-bg: #fff;
    --sc-chip-bg: #fff;
    --sc-sev-1: #fff;
    --sc-sev-2: #000;
    --sc-sev-3: #000;
    --sc-sev-4: #000;
    --sc-sev-5: #000;
    --sc-good: #000;
    --sc-good-bg: #fff;
    --sc-warn: #000;
    --sc-warn-bg: #fff;
    --sc-bad: #000;
    --sc-bad-bg: #fff;
    --sc-zone-0: #fff;
    --sc-zone-1: #fff;
    --sc-zone-2: #000;
    --sc-zone-3: #000;
    --sc-zone-4: #000;
    --sc-zone-5: #000;
    --sc-sleep-deep: #000;
    --sc-sleep-light: #fff;
    --sc-sleep-rem: #000;
    --sc-sleep-awake: #fff;
    --sc-sleep-other: #fff;
    --sc-stress-recovering: #000;
    --sc-stress-active: #000;
    --sc-stress-inactive: #fff;
    --sc-stress-stressed: #000;
    --sc-sport-1: #000;
    --sc-sport-2: #000;
    --sc-sport-3: #000;
    --sc-sport-4: #000;
    --sc-sport-5: #000;
    --sc-sport-6: #000;
    --sc-sport-7: #000;
    --sc-sport-8: #000;
    --sc-sport-9: #000;
    --sc-sport-10: #000;
    --sc-sport-11: #000;
    --sc-sport-12: #000;
    --sc-eink-sport-1: var(--sc-sport-1);
    --sc-eink-sport-2: var(--sc-sport-2);
    --sc-eink-sport-3: var(--sc-sport-3);
    --sc-eink-sport-4: var(--sc-sport-4);
    --sc-eink-sport-5: var(--sc-sport-5);
    --sc-eink-sport-6: var(--sc-sport-6);
    --sc-eink-sport-7: var(--sc-sport-7);
    --sc-eink-sport-8: var(--sc-sport-8);
    --sc-eink-sport-9: var(--sc-sport-9);
    --sc-eink-sport-10: var(--sc-sport-10);
    --sc-eink-sport-11: var(--sc-sport-11);
    --sc-eink-sport-12: var(--sc-sport-12);
  }
  :host(.eink) *,
  :host(.eink) *::before,
  :host(.eink) *::after {
    animation: none !important;
    transition: none !important;
    filter: none !important;
    text-shadow: none !important;
    box-shadow: none !important;
    scrollbar-width: none;
  }
  :host(.eink) ha-card {
    background: #fff;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 0;
    cursor: default;
  }
  /* A wall screen can't be scrolled: lists grow, unless list_height says otherwise. */
  :host(.eink) .scroll-list,
  :host(.eink) .list {
    max-height: var(--sc-list-height, none);
    overflow: hidden;
  }
  :host(.eink) .icon-badge,
  :host(.eink) .icon-badge.pulse {
    background: #fff !important;
    color: #000 !important;
    border: 1.5px solid #000;
    box-sizing: border-box;
  }
  :host(.eink) .title {
    font-weight: 800;
  }
  :host(.eink) .chip,
  :host(.eink) .pill,
  :host(.eink) .sc-stale {
    background: #fff !important;
    color: #000 !important;
    border: 1.5px solid #000;
  }
  /* Fills: a white one still shows inside its frame; tracks are frames. */
  :host(.eink) .seg,
  :host(.eink) .dot,
  :host(.eink) .sw,
  :host(.eink) .legend-dot {
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }
  /* Adjacent black segments would merge into one block: keep a gap. */
  :host(.eink) .bar {
    gap: 2px;
  }
  :host(.eink) .bar,
  :host(.eink) .goal-bar,
  :host(.eink) .track {
    background: #fff !important;
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }
  :host(.eink) .goal-bar > span,
  :host(.eink) .track > b {
    background: #000 !important;
  }
  :host(.eink) .track > b.rest {
    background: repeating-linear-gradient(90deg, #000 0 1.5px, #fff 1.5px 5px) !important;
  }
  :host(.eink) .warning {
    background: #fff !important;
    color: #000 !important;
    border: 2px solid #000;
  }

  /* --- Palettes --- */
  :host(.eink-gray) {
    --secondary-text-color: #555;
    --sc-track: #aaa;
    --sc-sev-2: #aaa;
    --sc-sev-3: #555;
    --sc-sev-4: #555;
    --sc-zone-1: #aaa;
    --sc-zone-2: #aaa;
    --sc-zone-3: #555;
    --sc-zone-4: #555;
    --sc-sleep-light: #aaa;
    --sc-sleep-rem: #555;
    --sc-stress-recovering: #aaa;
    --sc-stress-active: #555;
    --sc-sport-2: #555;
    --sc-sport-3: #aaa;
    --sc-sport-5: #555;
    --sc-sport-6: #aaa;
    --sc-sport-8: #555;
    --sc-sport-9: #aaa;
    --sc-sport-11: #555;
    --sc-sport-12: #aaa;
  }
  /* Red only for what needs attention. */
  :host(.eink-red) {
    --sc-bad: #f00;
    --sc-sev-5: #f00;
    --sc-zone-5: #f00;
    --sc-stress-stressed: #f00;
  }
  /* Yellow only ever as a fill behind black text. */
  :host(.eink-yellow) {
    --sc-warn-bg: #ff0;
    --sc-bad-bg: #ff0;
  }
  :host(.eink-yellow) .warning {
    background: #ff0 !important;
  }
  /* Six-colour panels (black, white, red, yellow, green, blue). */
  :host(.eink-color) {
    --sc-pulse: #00f;
    --sc-good: #080;
    --sc-bad: #f00;
    --sc-warn-bg: #ff0;
    --sc-bad-bg: #ff0;
    --sc-sev-2: #00f;
    --sc-sev-3: #080;
    --sc-sev-5: #f00;
    --sc-zone-1: #00f;
    --sc-zone-2: #00f;
    --sc-zone-3: #080;
    --sc-zone-5: #f00;
    --sc-sleep-deep: #00f;
    --sc-sleep-rem: #080;
    --sc-stress-recovering: #080;
    --sc-stress-stressed: #f00;
    --sc-sport-1: #00f;
    --sc-sport-2: #f00;
    --sc-sport-3: #080;
    --sc-sport-5: #00f;
    --sc-sport-6: #f00;
    --sc-sport-7: #080;
    --sc-sport-9: #00f;
    --sc-sport-10: #f00;
    --sc-sport-11: #080;
  }
  :host(.eink-color) .warning {
    background: #ff0 !important;
  }

  /* max_lines: long text cut to a few lines (the whole text stays in the
     entity's attributes). Universal, set by SuuntoBaseCard._syncTheme. */
  :host(.max-lines) .sc-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--sc-max-lines);
    line-clamp: var(--sc-max-lines);
    overflow: hidden;
  }
`,mt={normal:1,large:1.15,larger:1.3,largest:1.5};const gt=new Set(["custom:suunto-today-card","custom:suunto-sleep-readiness-card"]);class ht extends de{constructor(){super(...arguments),this._lastRenderAt=0}get hass(){const e=this._rawHass,t=function(e){const t=(e??"").trim().toLowerCase();if(t&&"auto"!==t)return/^[a-z]{2,3}(-[a-z0-9]+)*$/.test(t)?t:void 0}(this._cardConfig?.language);if(!e||!t||t===e.language)return e;const a=this._languageView;if(a&&a.raw===e&&a.language===t)return a.view;const i={...e,language:t};if(e.locale){let a=this._localeView;a&&a.raw===e.locale&&a.language===t||(a={raw:e.locale,language:t,value:{...e.locale,language:t}},this._localeView=a),i.locale=a.value}return this._languageView={raw:e,language:t,view:i},i}set hass(e){this._rawHass=e}shouldUpdate(e){const t=this._needsRender(e);if(t){const e=this.hass;this._lastHass=e&&{entities:e.entities,devices:e.devices,states:e.states,language:e.language,locale:e.locale,themes:e.themes,darkMode:Boolean(e.themes?.darkMode)},this._lastRenderAt=Date.now()}return t}_needsRender(e){if(0===e.size)return!0;for(const t of e.keys())if("hass"!==t)return!0;const t=this._lastHass,a=this.hass;if(!t||!a)return!0;if(t.entities!==a.entities||t.devices!==a.devices||t.language!==a.language||t.locale!==a.locale||t.themes!==a.themes||t.darkMode!==Boolean(a.themes?.darkMode))return!0;if(!this._eink&&Date.now()-this._lastRenderAt>=6e4)return!0;if(t.states===a.states)return!1;const i=this._resolveEntities(),s="error"in i?function(e){return Object.values(e.entities??{}).filter(e=>e.platform===xe).map(e=>e.entity_id)}(a):i.ids;return s.some(e=>t.states[e]!==a.states[e])}get _cardConfig(){return this._config}_syncTheme(){const e=this._cardConfig,t=this._einkMode(e);this._eink=t;const a=Boolean(this.hass?.themes?.darkMode)&&!t;this.classList.toggle("dark",a),this.classList.toggle("eink",Boolean(t));for(const e of ct)this.classList.toggle(`eink-${e}`,t===e);const i=e?.max_lines,s="number"==typeof i&&i>0;this.classList.toggle("max-lines",s),s?this.style.setProperty("--sc-max-lines",String(Math.round(i))):this.style.removeProperty("--sc-max-lines"),this.classList.toggle("compact",Boolean(e?.compact)),this.classList.toggle("hide-header",Boolean(e?.hide_header)),this.classList.toggle("hide-icon",Boolean(e?.hide_icon)),this.classList.toggle("hide-subtitle",Boolean(e?.hide_subtitle)),this.classList.toggle("hide-legend",Boolean(e?.hide_legend)),this._syncAccent(t?void 0:e?.accent_color,a);const n=e?.list_height;n&&n>0?this.style.setProperty("--sc-list-height",`${n}px`):this.style.removeProperty("--sc-list-height");const r=function(e){if(void 0===e||""===e)return;const t="number"==typeof e?e:mt[e]??Number.parseFloat(e);return!Number.isFinite(t)||t<=0?void 0:Math.min(2,Math.max(.75,t))}(e?.text_size);r?this.style.setProperty("--sc-scale",String(r)):this.style.removeProperty("--sc-scale")}updated(e){super.updated(e),this._syncStaleStrip()}_syncStaleStrip(){const e=this.renderRoot,t=e.querySelector(".sc-stale"),a=this._staleText(),i=e.querySelector(".header");if(!a||!i)return void t?.remove();const s=t??document.createElement("div");if(t||(s.className="sc-stale",s.setAttribute("role","status")),s.dataset.text!==a.join("|")){s.dataset.text=a.join("|");const e=document.createElement("ha-icon");e.setAttribute("icon","mdi:watch-import");const t=document.createElement("b");t.textContent=a[0];const i=document.createElement("span");i.textContent=` · ${a[1]}`,s.replaceChildren(e,t,i)}s.previousElementSibling!==i&&i.after(s)}_staleText(){const e=this._cardConfig;if(!this.hass||!e||e.hide_sync_warning||gt.has(e.type))return null;const t=this._resolveEntities();if("error"in t)return null;const a=t.map.last_sync,i=ot(a?this.hass.states[a]:void 0);return i?.stale?[ke(this.hass,"chip.not_synced",{hours:Math.floor(i.hoursAgo)}),lt(this.hass,i)]:null}_syncAccent(e,t){const a=["--sc-amber","--sc-amber-bg","--sc-pulse","--sc-pulse-bg"],i=e?.trim();if(!i||"undefined"!=typeof CSS&&!CSS.supports("color",i)){for(const e of a)this.style.removeProperty(e);return}const s=`color-mix(in srgb, ${i} ${t?18:14}%, transparent)`;this.style.setProperty("--sc-amber",i),this.style.setProperty("--sc-pulse",i),this.style.setProperty("--sc-amber-bg",s),this.style.setProperty("--sc-pulse-bg",s)}_einkMode(e){return ut(void 0!==e?.eink?e.eink:getComputedStyle(this).getPropertyValue("--suunto-cards-eink"))}_title(e){return this._cardConfig?.title?.trim()||e}_cap(e){const t=this._cardConfig?.max_items;return void 0!==t&&t>0?e.slice(0,t):[...e]}_icon(e){return this._cardConfig?.icon?.trim()||e}_resolveEntities(){const e=this.hass;if(!e)return{error:this._message("mdi:alert-circle-outline",ke(e,"empty.loading"))};const t=this._resolvedCache;if(t&&t.entities===e.entities&&t.devices===e.devices&&t.deviceId===this._configuredDeviceId&&"map"in t.result)return t.result;let a;try{const t=ze(e,this._configuredDeviceId),i=Object.values(e.entities??{}).filter(e=>e.device_id===t&&e.platform===xe).map(e=>e.entity_id);a={map:je(e,t),ids:i}}catch(e){return{error:this._message("mdi:alert-circle-outline",this._configErrorMessage(e))}}return this._resolvedCache={entities:e.entities,devices:e.devices,deviceId:this._configuredDeviceId,result:a},a}_configErrorMessage(e){return e instanceof Se?"device_missing"===e.code?ke(this.hass,"error.device_missing",{device:e.deviceId??""}):"multiple_devices"===e.code?ke(this.hass,"error.multiple_devices"):ke(this.hass,"error.no_device"):ke(this.hass,"empty.generic_error")}_message(e,t,a){return B`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${e}></ha-icon>
          <div class="t1">${t}</div>
          ${a?B`<div class="t2">${a}</div>`:W}
        </div>
      </ha-card>
    `}}e([ge({attribute:!1})],ht.prototype,"hass",null);const _t=r`
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
    --sc-sleep-awake: #c9a35a;
    --sc-sleep-other: #aab4bc;
    /* The watch's four stress states (Suunto app "Resources"). */
    --sc-stress-recovering: #4c9a6a;
    --sc-stress-active: #e0a63e;
    --sc-stress-inactive: #b9c4cc;
    --sc-stress-stressed: #c73e3e;
    /* One colour per sport, the same in every card (utils/sports.ts). */
    --sc-sport-1: #2e7e9e;
    --sc-sport-2: #d98a1d;
    --sc-sport-3: #4c9a6a;
    --sc-sport-4: #8e6cc4;
    --sc-sport-5: #c75b8e;
    --sc-sport-6: #3d5a80;
    --sc-sport-7: #c0623a;
    --sc-sport-8: #7a8f2e;
    --sc-sport-9: #a8505a;
    --sc-sport-10: #2f9c95;
    --sc-sport-11: #9c7a3c;
    --sc-sport-12: #6b7785;
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
    --sc-sleep-awake: #d9b876;
    --sc-sleep-other: #56636e;
    --sc-stress-recovering: #5db47f;
    --sc-stress-active: #f0954f;
    --sc-stress-inactive: #56636e;
    --sc-stress-stressed: #e05a5a;
    --sc-sport-1: #6fc3e8;
    --sc-sport-2: #f5b44e;
    --sc-sport-3: #5db47f;
    --sc-sport-4: #b89ce0;
    --sc-sport-5: #e88bb7;
    --sc-sport-6: #7fa3d4;
    --sc-sport-7: #ec8a5e;
    --sc-sport-8: #b3c45a;
    --sc-sport-9: #e07c86;
    --sc-sport-10: #5fcfc6;
    --sc-sport-11: #d6b26a;
    --sc-sport-12: #9aa7b4;
  }
`,yt=r`
  /* Text size: the universal \`text_size\` option sets --sc-scale inline on
     the host (SuuntoBaseCard._syncTheme); otherwise a theme variable
     \`suunto-cards-scale\` sets it for every card at once. \`zoom\` scales
     text, icons, charts and spacing together, and the content reflows into
     the card's width. */
  :host {
    --sc-scale: var(--suunto-cards-scale, 1);
  }
  ha-card {
    zoom: var(--sc-scale);
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
    background: var(--sc-track, var(--divider-color));
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
    max-height: var(--sc-list-height, 320px);
    overflow-y: auto;
  }

  /* Universal options (SuuntoBaseCard._syncTheme toggles these host classes). */
  :host(.hide-header) .header {
    display: none;
  }
  :host(.hide-icon) .header .icon-badge {
    display: none;
  }
  :host(.hide-subtitle) .header .subtitle {
    display: none;
  }
  :host(.hide-legend) .legend,
  :host(.hide-legend) .chart-legend,
  :host(.hide-legend) .stage-legend,
  :host(.hide-legend) .pace-legend {
    display: none;
  }
  :host(.compact) ha-card {
    padding: 10px 12px;
    gap: 8px;
  }
  :host(.compact) .header {
    gap: 10px;
  }
  :host(.compact) .header .icon-badge {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    --mdc-icon-size: 18px;
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
  /* A goal inline after the value (suunto-goals.ts goalInline). */
  .stat-value .goal-in {
    font-size: 0.68rem;
    font-weight: 500;
    color: var(--secondary-text-color);
    white-space: nowrap;
    margin-left: 3px;
  }
  .stat-value .goal-in.done {
    color: var(--sc-good);
  }
  .stat-value .goal-in ha-icon {
    --mdc-icon-size: 12px;
    margin-left: 2px;
    vertical-align: -1px;
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

  /* Progress toward a goal: a "of 8,000" line and a thin bar under a stat. */
  .goal-sub {
    font-size: 0.68rem;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
  }
  .goal-bar {
    height: 4px;
    border-radius: 2px;
    background: var(--sc-track, var(--divider-color));
    overflow: hidden;
    margin-top: 3px;
  }
  .goal-bar.thick {
    height: 8px;
    border-radius: 4px;
    margin-top: 0;
  }
  .goal-bar span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--sc-amber);
  }
  .goal-bar.done span {
    background: var(--sc-good);
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
  .sc-stale {
    display: block;
    background: var(--sc-warn-bg);
    color: var(--sc-warn);
    border: 1px solid color-mix(in srgb, var(--sc-warn) 35%, transparent);
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 0.78rem;
    line-height: 1.3;
  }
  .sc-stale b {
    font-weight: 500;
  }
  .sc-stale span {
    color: var(--primary-text-color);
    opacity: 0.8;
  }
  .sc-stale ha-icon {
    --mdc-icon-size: 15px;
    vertical-align: -3px;
    margin-right: 5px;
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

  ${pt}
`,vt=new Set(["unknown","unavailable",""]);function bt(e,t,a){if(a)try{return new Intl.NumberFormat(t,{style:"currency",currency:a,maximumFractionDigits:0}).format(e)}catch{}return Math.round(e).toLocaleString(t)}let ft=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-commute-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=this._config.units??"metric",s="month"===this._config.period?"month":"year",n="year"===s?"month":"year",r=e=>{const i=t[`commute_${e}`]?a.states[t[`commute_${e}`]]:void 0;if(!i||vt.has(i.state))return;const s=i.attributes,n=e=>"number"==typeof e?e:void 0;return{km:Number(i.state),rides:n(s.rides)??0,days:n(s.days)??0,avgMin:n(s.avg_duration_min),fuel:n(s.fuel_saved_l)??0,money:n(s.money_saved)??0,co2:n(s.co2_saved_kg)??0}},o="number"==typeof this._config.fuel_l_per_100km?this._config.fuel_l_per_100km:void 0,l="number"==typeof this._config.fuel_price?this._config.fuel_price:void 0,d=e=>{if(!e||void 0===o&&void 0===l)return e;const t=Pe(a,this._configuredDeviceId),i=o??t?.litres??7,s=l??t?.price??6.5,n=e.km*i/100;return{...e,fuel:n,money:n*s,co2:2.31*n}},c=d(r(s));if(!c||0===c.rides)return this._message("mdi:bike-fast",ke(a,"empty.commute.title"),ke(a,"empty.commute.subtitle"));const u=d(r(n)),p=a.config?.currency,m=e=>{const t=Xe(e,i,0);return{value:Number(t.value).toLocaleString(a.language),unit:t.unit}},g=m(c.km);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:bike-fast")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.commute.title"))}</div>
            <div class="subtitle">${ke(a,`card.commute.subtitle_${s}`)}</div>
          </div>
        </div>

        <div>
          <div class="hero">
            <span class="hero-num">${bt(c.money,a.language,p)}</span>
            <span class="hero-unit">${ke(a,"commute.saved")}</span>
          </div>
          <div class="hero-sub">
            ${ke(a,"commute.fuel_co2",{fuel:c.fuel.toLocaleString(a.language,{maximumFractionDigits:1}),co2:Math.round(c.co2).toLocaleString(a.language)})}
          </div>
        </div>

        <div class="stats">
          ${this._stat(g.value,g.unit,ke(a,"stat.distance"))}
          ${this._stat(c.rides.toLocaleString(a.language),"",ke(a,"stat.rides"))}
          ${this._stat(c.days.toLocaleString(a.language),"",ke(a,"stat.days"))}
          ${void 0!==c.avgMin?this._stat(String(Math.round(c.avgMin)),"min",ke(a,"stat.avg_time")):W}
        </div>

        ${u&&u.rides>0?(()=>{const e=m(u.km);return B`
                <div class="other-row">
                  <span>${ke(a,`commute.this_${n}`)}</span>
                  <strong>${e.value} ${e.unit}</strong>
                  <span>·</span>
                  <strong>${ke(a,"commute.rides_n",{n:u.rides})}</strong>
                  <span>·</span>
                  <strong>${bt(u.money,a.language,p)}</strong>
                </div>
              `})():W}
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ft.styles=[_t,yt,r`
      .hero {
        display: flex;
        align-items: baseline;
        gap: 6px;
        flex-wrap: wrap;
      }
      .hero-num {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        color: var(--sc-good);
      }
      .hero-unit {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .other-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 10px;
        background: var(--sc-chip-bg);
        border-radius: 9px;
        padding: 9px 12px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .other-row strong {
        color: var(--primary-text-color);
        font-weight: 600;
      }
    `],e([he()],ft.prototype,"_config",void 0),ft=e([ue("suunto-commute-card")],ft);const kt=new Set(["unknown","unavailable",""]),wt=["sleep","recovery","training","activity"],xt={sleep:"mdi:power-sleep",recovery:"mdi:heart-pulse",training:"mdi:chart-line",activity:"mdi:walk"},St={good:{fg:"var(--sc-good)",bg:"var(--sc-good-bg)"},ok:{fg:"var(--sc-pulse)",bg:"var(--sc-pulse-bg)"},caution:{fg:"var(--sc-warn)",bg:"var(--sc-warn-bg)"},rest:{fg:"var(--sc-bad)",bg:"var(--sc-bad-bg)"}},$t={fg:"var(--secondary-text-color)",bg:"var(--sc-chip-bg)"};let zt=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-ai-insight-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id,this._tab=wt.includes(e.section)?e.section:"weekly"===e.report?"training":"sleep"}get _weekly(){return"weekly"===this._config?.report}getCardSize(){return 7}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const t=this.hass,a=this._weekly,i=a?"mdi:calendar-star":"mdi:creation",s=e.map[a?"ai_weekly_summary":"ai_insight"],n=s?t.states[s]:void 0;if(!n)return this._message(i,ke(t,"empty.ai_insight.title"),ke(t,a?"empty.ai_weekly.subtitle":"empty.ai_insight.subtitle"));const r=n.attributes,o=kt.has(n.state)?void 0:n.state;if(!o)return this._message(i,ke(t,r.generating?"ai_insight.generating":a?"empty.ai_weekly.waiting":"empty.ai_insight.waiting"),r.error?String(r.error):void 0);const l="string"==typeof r.status?r.status:void 0,d=r.sections??{},c=Array.isArray(r.advice)?r.advice:[],u="string"==typeof r.warning&&r.warning?r.warning:void 0,p="string"==typeof r.summary&&r.summary?r.summary:void 0,m=Object.keys(d).length>0,g=!0===this._config.single_section,h=this._tab??(a?"training":"sleep"),_=l&&St[l]||void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon(g?xt[h]:i)}></ha-icon></div>
          <div class="title-block">
            <div class="title">
              ${this._title(ke(t,g?`ai_insight.section_full.${h}`:a?"card.ai_weekly.title":"card.ai_insight.title"))}
            </div>
            <div class="subtitle">${this._subtitle(r)}</div>
          </div>
          ${!g&&_?B`<span class="pill" style="color:${_.fg};background:${_.bg}"
                >${ke(t,`ai_insight.status.${l}`)}</span
              >`:W}
        </div>
        ${g?W:B`<div class="headline sc-clamp">${o}</div>`}
        ${u&&!g?B`<div class="warning"><ha-icon icon="mdi:alert"></ha-icon><div class="sc-clamp">${u}</div></div>`:W}
        ${m?B`
              ${g?W:this._tabs(d,h)}
              ${this._panel(h,d[h],g)}
            `:p?B`<div class="prose">${this._paragraphs(p)}</div>`:W}
        ${c.length&&!g?B`
              <div class="advice">
                <div class="label">${ke(t,a?"ai_weekly.advice":"ai_insight.advice")}</div>
                <ol>
                  ${c.map(e=>B`<li><span class="sc-clamp">${e}</span></li>`)}
                </ol>
              </div>
            `:W}
        <div class="foot">
          <span>${r.generating?ke(t,"ai_insight.generating"):""}</span>
          <span>${ke(t,"ai_insight.disclaimer")}</span>
        </div>
      </ha-card>
    `}_subtitle(e){const t=this.hass,a=[],i="string"==typeof e.generated_at?new Date(e.generated_at):void 0;if(i&&!Number.isNaN(i.getTime())){const e=i.toDateString()===(new Date).toDateString();a.push(new Intl.DateTimeFormat(t.language,{...e?{}:{day:"numeric",month:"short"},hour:"2-digit",minute:"2-digit"}).format(i))}if(this._weekly){const i="string"==typeof e.week_start?new Date(`${e.week_start}T12:00:00`):void 0,s="string"==typeof e.for_date?new Date(`${e.for_date}T12:00:00`):void 0;if(i&&s&&!Number.isNaN(i.getTime())&&!Number.isNaN(s.getTime())){const e=new Intl.DateTimeFormat(t.language,{day:"numeric",month:"numeric"});a.push(ke(t,"ai_weekly.week",{range:`${e.format(i)}-${e.format(s)}`}))}}else if("string"!=typeof e.sleep_night||e.sleep_stale)e.sleep_stale&&a.push(ke(t,"ai_insight.no_night"));else{const i=new Date(`${e.sleep_night}T12:00:00`);if(!Number.isNaN(i.getTime())){const e=new Date(i.getTime()+864e5),s=new Intl.DateTimeFormat(t.language,{day:"numeric",month:"numeric"});a.push(ke(t,"ai_insight.night",{night:`${s.format(i)}-${s.format(e)}`}))}}return a.join(" · ")}_tabs(e,t){const a=this.hass;return B`
      <div class="tabs" role="tablist">
        ${wt.map(i=>{const s=e[i]?.status&&St[e[i].status]||$t;return B`
            <button
              class="tab"
              type="button"
              role="tab"
              aria-selected=${i===t?"true":"false"}
              @click=${()=>this._tab=i}
            >
              <span class="dot" style="background:${s.fg}"></span>
              <span class="tab-label">${ke(a,`ai_insight.section.${i}`)}</span>
            </button>
          `})}
      </div>
    `}_panel(e,t,a){const i=this.hass;if(!t?.text)return B`<div class="panel"><div class="empty">${ke(i,"ai_insight.no_section")}</div></div>`;const s=t.status&&St[t.status]||$t;return B`
      <div class="panel" role="tabpanel">
        <div class="sec-head">
          ${a?W:B`<div class="sec-icon" style="color:${s.fg};background:${s.bg}">
                <ha-icon icon=${xt[e]}></ha-icon>
              </div>`}
          <span class="sec-name">${a?"":ke(i,`ai_insight.section_full.${e}`)}</span>
          ${t.status?B`<span class="sec-status" style="color:${s.fg}"
                >${ke(i,`ai_insight.status.${t.status}`)}</span
              >`:W}
        </div>
        <div class="prose">${this._paragraphs(t.text)}</div>
      </div>
    `}_paragraphs(e){return e.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>B`<p class="sc-clamp">${e}</p>`)}};zt.styles=[_t,yt,r`
      .pill {
        font-size: 0.74rem;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 999px;
        white-space: nowrap;
      }
      .headline {
        font-size: 1.05rem;
        line-height: 1.45;
        font-weight: 500;
        text-wrap: pretty;
      }
      .warning {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        background: var(--sc-bad-bg);
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 0.88rem;
        line-height: 1.45;
      }
      .warning ha-icon {
        color: var(--sc-bad);
        --mdc-icon-size: 18px;
        flex: none;
      }
      .tabs {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 4px;
        background: var(--sc-chip-bg);
        border-radius: 10px;
        padding: 4px;
      }
      .tab {
        font: inherit;
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: none;
        border: 0;
        border-radius: 7px;
        padding: 7px 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        min-width: 0;
      }
      .tab:focus-visible {
        outline: 2px solid var(--sc-pulse);
        outline-offset: 1px;
      }
      .tab[aria-selected="true"] {
        background: var(--card-background-color, var(--ha-card-background, #fff));
        color: var(--primary-text-color);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .tab-label {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .panel {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .sec-head {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .sec-icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
      .sec-icon ha-icon {
        --mdc-icon-size: 16px;
      }
      .sec-name {
        flex: 1;
        font-weight: 600;
        font-size: 0.92rem;
      }
      .sec-status {
        font-size: 0.74rem;
        font-weight: 700;
      }
      .prose {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .prose p {
        margin: 0;
        font-size: 0.88rem;
        line-height: 1.55;
        text-wrap: pretty;
      }
      .empty {
        font-size: 0.88rem;
        color: var(--secondary-text-color);
      }
      .advice .label {
        font-size: 0.74rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        font-weight: 700;
        margin-bottom: 6px;
      }
      .advice ol {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
        counter-reset: advice;
      }
      .advice li {
        counter-increment: advice;
        display: flex;
        gap: 10px;
        font-size: 0.88rem;
        line-height: 1.45;
      }
      .advice li::before {
        content: counter(advice);
        flex: none;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
        font-size: 0.72rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
      }
      .foot {
        font-size: 0.74rem;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],e([he()],zt.prototype,"_config",void 0),e([he()],zt.prototype,"_tab",void 0),zt=e([ue("suunto-ai-insight-card")],zt);const jt=e=>`custom:suunto-${e}-card`,At=new Set(["class","level","player"].map(jt)),Tt=new Set(["recent-workouts"].map(jt)),Ct=new Set(["activity-trends","fitness-trend","pmc","recovery-balance-trend","recovery-trends","route","running-dynamics","sleep-clock","sleep-detail","sleep-readiness","sleep-regularity","sleep-rhythm","sleep-trends","steps-trend","training-effect-trend","week-compare"].map(jt)),Nt=new Set(["recent-workouts","personal-insights","gear","whats-new"].map(jt)),Mt=new Set(["ai-insight","personal-insights","daily-brief"].map(jt)),Et=new Set(["recent-workouts","lap-splits","achievements","whats-new"].map(jt)),Dt={[jt("activity-trends")]:14,[jt("fitness-trend")]:90,[jt("pmc")]:90,[jt("readiness-trend")]:30,[jt("recovery-balance-trend")]:14,[jt("recovery-trends")]:30,[jt("sleep-trends")]:30,[jt("steps-trend")]:14,[jt("training-effect-trend")]:30,[jt("training-load")]:30,[jt("whats-new")]:14},Rt=[7,14,30,60,90,180];function It(e,t){const a={...e,...t};for(const[e,i]of Object.entries(t))void 0===i&&delete a[e];return a}function Pt(e,t,a,i,s,n,r){return Ve(s,void 0!==t[i]?String(t[i]):"",e=>{const s=Number.parseInt(e,10),o=Number.isNaN(s)?void 0:Math.min(r,Math.max(n,s));o!==t[i]&&a(It(t,{[i]:o}))},{type:"number",min:n,max:r,step:1})}function Vt(e,t,a){return $e(e).length<=1?B`<div class="hint">${ke(e,"editor.auto_detect")}</div>`:B`
    <ha-device-picker
      .hass=${e}
      .value=${t.device_id??""}
      .label=${ke(e,"editor.device_label")}
      @value-changed=${e=>a(It(t,{device_id:e.detail.value||void 0}))}
    ></ha-device-picker>
    <div class="hint">${ke(e,"editor.pick_device")}</div>
  `}function Ht(e,t,a){return He(ke(e,"editor.units_label"),t.units??"metric",[{value:"metric",label:ke(e,"editor.units_metric")},{value:"imperial",label:ke(e,"editor.units_imperial")}],e=>a(It(t,{units:"imperial"===e?"imperial":"metric"})))}function Lt(e,t,a){return At.has(t.type)?W:Ve(ke(e,"editor.title"),t.title??"",e=>a(It(t,{title:e.trim()||void 0})))}function Ft(e,t,a){const i=t.type,s=Dt[i],n=void 0!==s?[...new Set([...Rt,s])].sort((e,t)=>e-t):[];return B`
    ${void 0!==s?He(ke(e,"editor.days_label"),String(t.days??s),n.map(e=>({value:String(e),label:String(e)})),e=>{const i=Number(e);a(It(t,{days:i===s?void 0:i}))}):W}
    ${Nt.has(i)?Pt(0,t,a,"max_items",ke(e,"editor.max_items"),1,50):W}
    ${Mt.has(i)?Pt(0,t,a,"max_lines",ke(e,"editor.max_lines"),1,20):W}
    ${Et.has(i)?Pt(0,t,a,"list_height",ke(e,"editor.list_height"),120,1200):W}
    ${i===jt("whats-new")?function(e,t,a){const i=Array.isArray(t.show)&&t.show.length?t.show:[...Ot];return B`
    <div class="group-label">${ke(e,"editor.whats_new_show")}</div>
    ${Ot.map(s=>Le(ke(e,`whats_new.kind.${s}`),i.includes(s),e=>{const n=Ot.filter(t=>t===s?e:i.includes(t));a(It(t,{show:n.length!==Ot.length&&n.length?n:void 0}))}))}
  `}(e,t,a):W}
    ${Ct.has(i)?Le(ke(e,"editor.hide_legend"),Boolean(t.hide_legend),e=>a(It(t,{hide_legend:e||void 0}))):W}
  `}const Ot=["workouts","records","achievements","ai","gear"];const Kt=[{color:"#d98a1d",label:"editor.accent_default"},{color:"#e91e63",label:"editor.accent_pink"},{color:"#7e57c2",label:"editor.accent_purple"},{color:"#009688",label:"editor.accent_teal"},{color:"#43a047",label:"editor.accent_green"},{color:"#1e88e5",label:"editor.accent_blue"}];const Bt=[{value:"en",label:"English"},{value:"pl",label:"Polski"},{value:"de",label:"Deutsch"},{value:"fr",label:"Français"},{value:"es",label:"Español"},{value:"it",label:"Italiano"},{value:"nl",label:"Nederlands"},{value:"pt",label:"Português"},{value:"uk",label:"Українська"},{value:"ru",label:"Русский"},{value:"fi",label:"Suomi"},{value:"sv",label:"Svenska"},{value:"da",label:"Dansk"},{value:"nb",label:"Norsk bokmål"},{value:"cs",label:"Čeština"}],qt=[{value:"off",label:"eink.off"},{value:"bw",label:"eink.bw"},{value:"gray",label:"eink.gray"},{value:"red",label:"eink.red"},{value:"yellow",label:"eink.yellow"},{value:"color",label:"eink.color"}],Gt=[{value:"normal",label:"text_size.normal"},{value:"large",label:"text_size.large"},{value:"larger",label:"text_size.larger"},{value:"largest",label:"text_size.largest"}];function Wt(e,t,a){const i=t.type,s=!At.has(i),n=(e,i)=>Le(i,Boolean(t[e]),i=>a(It(t,{[e]:i||void 0})));return B`
    <hr class="sep" />
    <div class="group-label">${ke(e,"editor.look_section")}</div>
    ${s?Ve(ke(e,"editor.icon"),t.icon??"",e=>a(It(t,{icon:e.trim()||void 0}))):W}
    ${function(e,t,a){const i=t.accent_color??"",s=""!==i&&"undefined"!=typeof CSS&&CSS.supports("color",i);return B`
    <div class="color-field">
      ${Ve(ke(e,"editor.accent_color"),i,e=>a(It(t,{accent_color:e.trim()||void 0})),{},B`<span class="preview ${s?"":"none"}" style=${s?`background:${i}`:""}></span>`)}
      <div class="swatches">
        ${Kt.map((s,n)=>{const r=0===n?!i:i.toLowerCase()===s.color;return B`<button
            type="button"
            class="swatch ${r?"selected":""}"
            style="background:${s.color}"
            title=${ke(e,s.label)}
            aria-label=${ke(e,s.label)}
            @click=${()=>a(It(t,{accent_color:0===n?void 0:s.color}))}
          ></button>`})}
      </div>
      <div class="hint">${ke(e,"editor.accent_hint")}</div>
    </div>
  `}(e,t,a)}
    ${He(ke(e,"editor.text_size"),"string"==typeof t.text_size?t.text_size:"normal",Gt.map(t=>({value:t.value,label:ke(e,t.label)})),e=>a(It(t,{text_size:"normal"===e?void 0:e})))}
    ${He(ke(e,"editor.language"),t.language??"auto",[{value:"auto",label:ke(e,"editor.language_auto")},...Bt],e=>a(It(t,{language:"auto"===e?void 0:e})))}
    ${He(ke(e,"editor.eink"),ut(t.eink)??"off",qt.map(t=>({value:t.value,label:ke(e,t.label)})),e=>a(It(t,{eink:"off"===e?void 0:e})))}
    ${s?n("hide_header",ke(e,"editor.hide_header")):W}
    ${s?n("hide_icon",ke(e,"editor.hide_icon")):W}
    ${s&&!Tt.has(i)?n("hide_subtitle",ke(e,"editor.hide_subtitle")):W}
    ${s?n("compact",ke(e,"editor.compact_label")):W}
    ${s?n("hide_sync_warning",ke(e,"editor.hide_sync_warning")):W}
  `}const Ut=new Set(["custom:suunto-last-workout-card","custom:suunto-last-workout-tile-card","custom:suunto-lifetime-card","custom:suunto-week-stats-card","custom:suunto-week-compare-card","custom:suunto-commute-card","custom:suunto-gear-card","custom:suunto-aerobic-decoupling-card"]),Zt=new Set(["custom:suunto-commute-card"]),Jt={"custom:suunto-daily-goals-card":{kinds:["steps","energy","sleep"],fallback:!0},"custom:suunto-today-card":{kinds:["steps","energy"],toggle:!0},"custom:suunto-sleep-readiness-card":{kinds:["sleep"],toggle:!0},"custom:suunto-sleep-trends-card":{kinds:["sleep"]},"custom:suunto-week-stats-card":{kinds:["training"],toggle:!0}};let Xt=class extends de{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=this.hass,t=this._config,a=t.type,i=e=>this._emit(e),s=e=>this._emit(It(t,e)),n=Jt[a];return B`
      <div class="form">
        ${Vt(e,t,i)}
        ${Lt(e,t,i)}
        ${Zt.has(a)?He(ke(e,"editor.period_label"),"month"===t.period?"month":"year",[{value:"year",label:ke(e,"editor.period_year")},{value:"month",label:ke(e,"editor.period_month")}],e=>s({period:"month"===e?"month":void 0})):W}
        ${Zt.has(a)?this._fuelFields(e,t):W}
        ${n?B`
              ${n.toggle?Le(ke(e,"editor.show_goals_label"),!1!==t.show_goals,e=>s({show_goals:!!e&&void 0})):W}
              ${!1===t.show_goals&&n.toggle?W:n.kinds.map(a=>Oe(e,t,a,n.fallback??!1,i))}
            `:W}
        ${Ut.has(a)?Ht(e,t,i):W}
        ${"custom:suunto-ai-insight-card"===a?B`
              ${He(ke(e,"editor.ai_report_label"),String(t.report??"daily"),[{value:"daily",label:ke(e,"editor.ai_report_daily")},{value:"weekly",label:ke(e,"editor.ai_report_weekly")}],e=>s({report:"weekly"===e?"weekly":void 0,section:void 0}))}
              ${He(ke(e,"editor.ai_section_label"),String(t.section??("weekly"===t.report?"training":"sleep")),wt.map(t=>({value:t,label:ke(e,`ai_insight.section_full.${t}`)})),e=>s({section:e===("weekly"===t.report?"training":"sleep")?void 0:e}))}
              ${Le(ke(e,"editor.ai_single_label"),!0===t.single_section,e=>s({single_section:e||void 0}))}
            `:W}
        ${"custom:suunto-daily-brief-card"===a?Le(ke(e,"editor.show_insight_label"),!0===t.show_insight,e=>s({show_insight:e||void 0})):W}
        ${Ft(e,t,i)}
        ${Wt(e,t,i)}
      </div>
    `}_fuelFields(e,t){const a=Pe(e,t.device_id),i=void 0!==t.fuel_l_per_100km||void 0!==t.fuel_price;return B`
      ${He(ke(e,"editor.fuel_source_label"),i?"custom":"suunto",[{value:"suunto",label:a?ke(e,"editor.source_integration",{litres:a.litres.toLocaleString(e.language),price:a.price.toLocaleString(e.language)}):ke(e,"editor.source_integration_unknown")},{value:"custom",label:ke(e,"editor.source_custom")}],e=>this._emit("custom"===e?{...t,fuel_l_per_100km:a?.litres??7,fuel_price:a?.price??6.5}:It(t,{fuel_l_per_100km:void 0,fuel_price:void 0})))}
      ${i?B`
            ${Ve(ke(e,"editor.fuel_consumption_label"),String(t.fuel_l_per_100km??a?.litres??7),e=>{const a=Number(e);Number.isFinite(a)&&a>0&&this._emit({...t,fuel_l_per_100km:a})},{type:"number",min:.1,step:.1})}
            ${Ve(ke(e,"editor.fuel_price_label"),String(t.fuel_price??a?.price??6.5),e=>{const a=Number(e);Number.isFinite(a)&&a>=0&&this._emit({...t,fuel_price:a})},{type:"number",min:0,step:.01})}
          `:B`<div class="hint">${ke(e,"editor.fuel_hint")}</div>`}
    `}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}};Xt.styles=Fe,e([ge({attribute:!1})],Xt.prototype,"hass",void 0),e([he()],Xt.prototype,"_config",void 0),Xt=e([ue("suunto-device-editor")],Xt);const Yt=[{key:"today",icon:"mdi:calendar-today",cards:["daily-brief","sleep-readiness","recovery","today","whats-new","daily-goals","last-workout"]},{key:"ai",icon:"mdi:creation",cards:[["ai-insight","ai"],["ai-insight","ai_weekly",{report:"weekly"}],"personal-insights"]},{key:"sleep",icon:"mdi:power-sleep",cards:["sleep-clock","sleep-detail","sleep-rhythm","sleep-regularity","sleep-trends"]},{key:"recovery",icon:"mdi:battery-heart-variant",cards:["stress-today","readiness-trend","recovery-trends","recovery-balance-trend","heart-rate","hr-curve"]},{key:"last_workout",icon:"mdi:run-fast",cards:["just-finished","route","elevation","lap-splits","hr-zones","aerobic-decoupling","workout-comparison","recent-workouts"]},{key:"load",icon:"mdi:chart-bell-curve-cumulative",cards:["training-load","pmc","form-forecast","training-status","training-effect-trend","pace-trend",["running-dynamics","running"],"fitness","fitness-trend"]},{key:"week",icon:"mdi:calendar-week",cards:["week-compare","weekly-volume","weekly-goal","goals-overview","week-stats","steps-today","steps-trend","weekly-steps-goal","activity-trends"]},{key:"records",icon:"mdi:trophy-outline",cards:["best-efforts","month-records","year-records","achievements","streak","milestones","next-milestone"]},{key:"history",icon:"mdi:book-open-variant",cards:["month-story","year-story","story","lifetime","activity-calendar","training-profile","athlete-profile","level","class","player"]},{key:"gear",icon:"mdi:bicycle",cards:[["gear","gear"],["commute","commute"],"location"]}];function Qt(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"L").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"suunto"}function ea(e,t){const a=e.devices?.[t];return a?.name_by_user||a?.name||"Suunto"}class ta extends HTMLElement{static async generate(e,t){const a=$e(t),i=e.devices?.length?e.devices.filter(e=>a.includes(e)):[...a].sort((e,a)=>ea(t,e).localeCompare(ea(t,a))),s=ke(t,"strategy.title");if(0===i.length)return{title:s,views:[{title:ke(t,"strategy.none"),type:"sections",sections:[{type:"grid",cards:[{type:"markdown",content:`## ${ke(t,"strategy.none")}\n\n${ke(t,"strategy.none_text")}`}]}]}]};const n=new Set((e.hide??[]).map(e=>String(e).replace(/^custom:suunto-|-card$/g,""))),r=i.length>1,o={};void 0!==e.text_size&&(o.text_size=e.text_size),e.language&&(o.language=e.language),void 0!==e.eink&&(o.eink=e.eink);const l=new Set,d=i.map(e=>{const a=function(e,t){const a=je(e,t),i=t=>a[t]?e.states[a[t]]:void 0,s=new Set;a.ai_insight&&s.add("ai"),a.ai_weekly_summary&&s.add("ai_weekly");const n=i("workouts_recent")?.attributes?.workouts;Array.isArray(n)&&n.some(e=>e&&null!=e.cadence_spm)&&s.add("running");for(const e of["commute_year","commute_month"]){const t=Number(i(e)?.state);Number.isFinite(t)&&t>0&&s.add("commute")}for(const a of Object.values(e.entities??{})){if(a.device_id!==t)continue;const i=e.states[a.entity_id]?.attributes;if(i&&"interval_km"in i){s.add("gear");break}}return s}(t,e),i=ea(t,e);let d=Qt(i);for(let e=2;l.has(d);e++)d=`${Qt(i)}-${e}`;l.add(d);const c=Yt.map(({key:i,icon:s,cards:l})=>{const d=[];for(const t of l){const[i,s,l]="string"==typeof t?[t,void 0,void 0]:t;n.has(i)||s&&!a.has(s)||d.push({type:`custom:suunto-${i}-card`,...r?{device_id:e}:{},...l??{},...o,grid_options:{columns:12}})}if(d.length)return{type:"grid",cards:[{type:"heading",heading:ke(t,`strategy.section.${i}`),icon:s},...d]}}).filter(Boolean);return{title:r?i:s,path:d,icon:"mdi:watch",type:"sections",max_columns:3,sections:c}});return{title:s,views:d}}}customElements.define("ll-strategy-dashboard-suunto",ta);const aa=window;function ia(e){return B`
    <div class="bar">
      ${e.map(e=>B`<div
            class="seg"
            style="flex-grow:${e.flexGrow};background:${e.colorVar}"
            title=${e.title??""}
          ></div>`)}
    </div>
  `}function sa(e,t,a=64,i=6){const s=Math.max(0,Math.min(100,e)),n=(a-i)/2,r=2*Math.PI*n,o=a/2;return B`
    <svg width=${a} height=${a} viewBox="0 0 ${a} ${a}" class="ring">
      <circle
        cx=${o}
        cy=${o}
        r=${n}
        fill="none"
        stroke="var(--sc-track, var(--divider-color))"
        stroke-width=${i}
      ></circle>
      <circle
        cx=${o}
        cy=${o}
        r=${n}
        fill="none"
        stroke=${t}
        stroke-width=${i}
        stroke-linecap="round"
        stroke-dasharray=${r}
        stroke-dashoffset=${r-s/100*r}
        transform="rotate(-90 ${o} ${o})"
      ></circle>
    </svg>
  `}function na(e,t,a=300,i=56){if(e.length<2)return W;const s=e.map(e=>e.v),n=Math.min(...s),r=Math.max(...s)-n||1,o=.12*i,l=i-2*o,d=a/(e.length-1),c=e.map((e,t)=>[t*d,o+l-(e.v-n)/r*l]),u=c.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),p=`${u} L${a},${i} L0,${i} Z`,[m,g]=c[c.length-1];return B`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      <path d=${p} fill=${t} fill-opacity="0.14" stroke="none"></path>
      <path d=${u} fill="none" stroke=${t} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx=${m} cy=${g} r="3" fill=${t}></circle>
    </svg>
  `}function ra(e){const t=e.map(e=>e.v),a=Math.min(...t);return{min:a,span:Math.max(...t)-a||1}}function oa(e,t=300,a=70,i=!0){const s=e.filter(e=>e.points.length>=2);if(0===s.length)return W;const n=.1*a,r=a-2*n,o=i?ra(s.flatMap(e=>e.points)):void 0,l=s.map(e=>{const{min:a,span:i}=o??ra(e.points),s=t/(e.points.length-1),l=e.points.map((e,t)=>[t*s,n+r-(e.v-a)/i*r]),d=l.map(([e,t],a)=>`${0===a?"M":"L"}${e.toFixed(1)},${t.toFixed(1)}`).join(" "),[c,u]=l[l.length-1];return q`
      <path
        d=${d}
        fill="none"
        stroke=${e.colorVar}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx=${c} cy=${u} r="3" fill=${e.colorVar}></circle>
    `});return B`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="none" class="sparkline">
      ${l}
    </svg>
  `}function la(e,t=300,a=160){if(e.length<2)return W;const i=e.reduce((e,t)=>e+t.lat,0)/e.length*(Math.PI/180),s=Math.cos(i)||1,n=e.map(e=>e.lon*s),r=e.map(e=>-e.lat),o=Math.min(...n),l=Math.min(...r),d=Math.max(...n)-o||1e-6,c=Math.max(...r)-l||1e-6,u=t-28,p=a-28,m=Math.min(u/d,p/c),g=14+(u-d*m)/2,h=14+(p-c*m)/2,_=e=>[g+(e.lon*s-o)*m,h+(-e.lat-l)*m],y=e.map(e=>e.speedKmh),v=Math.min(...y),b=Math.max(...y),f=e.slice(1).map((t,a)=>{const[i,s]=_(e[a]),[n,r]=_(t),o=function(e,t,a){const i=a-t;if(i<.5)return"var(--sc-amber)";const s=(e-t)/i;return`var(--sc-sev-${Math.min(5,Math.max(1,Math.ceil(5*s)||1))})`}(t.speedKmh,v,b);return q`<line x1=${i.toFixed(1)} y1=${s.toFixed(1)} x2=${n.toFixed(1)} y2=${r.toFixed(1)} stroke=${o} stroke-width="4" stroke-linecap="round"></line>`}),[k,w]=_(e[0]),[x,S]=_(e[e.length-1]);return B`
    <svg viewBox="0 0 ${t} ${a}" preserveAspectRatio="xMidYMid meet" class="route-schematic">
      ${f}
      <circle cx=${k} cy=${w} r="5.5" fill="var(--sc-good)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
      <circle cx=${x} cy=${S} r="5.5" fill="var(--sc-bad)" stroke="var(--card-background-color)" stroke-width="1.5"></circle>
    </svg>
  `}function da(e,t,a=300,i=70,s){if(0===e.length)return W;const n=Math.max(...e.map(e=>e.value),s??0,1e-4),r=void 0!==s?i-s/n*i+.5:void 0,o=(a-4*(e.length-1))/e.length,l=e.map((e,a)=>{const s=Math.max(e.value/n*i,2);return q`
      <rect x=${a*(o+4)} y=${i-s} width=${o} height=${s} rx="2" fill=${e.colorVar??t}>
        <title>${e.label??e.value}</title>
      </rect>
    `});return B`
    <svg viewBox="0 0 ${a} ${i}" preserveAspectRatio="none" class="sparkline">
      ${l}
      ${void 0!==r?q`<line x1="0" x2=${a} y1=${r} y2=${r} stroke="var(--secondary-text-color)" stroke-width="1" stroke-dasharray="4 3" vector-effect="non-scaling-stroke"></line>`:W}
    </svg>
  `}aa.customStrategies=aa.customStrategies??[],aa.customStrategies.push({type:"suunto",name:"Suunto",description:"A ready-made training dashboard from the Suunto App integration: today, AI analysis, sleep, recovery, training and progress.",documentationURL:"https://github.com/MichalZaniewicz/ha-suunto-cards#ready-made-dashboard",strategyType:"dashboard"});const ca=new Set(["unknown","unavailable",""]),ua=50;let pa=class extends ht{static getConfigElement(){return document.createElement("suunto-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-goal-card",goal_km:ua}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||ca.has(i.state))return this._message("mdi:target",ke(a,"empty.weekly_goal.title"));const n=this._config.goal_km??ua,r=Number(i.state),o=n>0?r/n*100:0,l=o>=100?"var(--sc-good)":"var(--sc-amber)";return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:target")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.weekly_goal.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.weekly_goal.subtitle",{value:r.toFixed(1),goal:n.toFixed(0)})}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${sa(o,l,64,7)}
            <div class="ring-value" style="color:${l}">${Math.round(o)}%</div>
          </div>
        </div>
      </ha-card>
    `}};pa.styles=[_t,yt,r`
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
    `],e([he()],pa.prototype,"_config",void 0),pa=e([ue("suunto-weekly-goal-card")],pa);let ma=class extends de{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=this.hass,t=this._config,a=e=>this._emit(e);return B`
      <div class="form">
        ${Vt(e,t,a)}
        ${Lt(e,t,a)}
        ${Ve(ke(e,"editor.goal_label"),String(t.goal_km??ua),e=>{const i=Number(e);a({...t,goal_km:Number.isFinite(i)&&i>0?i:void 0})},{type:"number",min:1,step:1})}
        ${Ft(e,t,a)}
        ${Wt(e,t,a)}
      </div>
    `}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}};ma.styles=Fe,e([ge({attribute:!1})],ma.prototype,"hass",void 0),e([he()],ma.prototype,"_config",void 0),ma=e([ue("suunto-goal-editor")],ma);const ga=new Set(["unknown","unavailable",""]);let ha=class extends ht{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-steps-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{const e=qe(await Be(this.hass,"suunto_app:steps",192,"sum")),t=(new Date).toDateString(),a=e.filter(e=>new Date(e.t).toDateString()!==t),i=a.slice(-7);this._weekAverage=i.length?i.reduce((e,t)=>e+t.v,0)/i.length:void 0}catch{this._weekAverage=void 0}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps");if(!s||ga.has(s.state))return this._message("mdi:shoe-print",ke(a,"empty.steps_today.title"));const n=this._config.goal_steps??Ie(a,this._configuredDeviceId)??Te,r=Number(s.state),o=n>0?r/n*100:0,l=o>=100?"var(--sc-good)":"var(--sc-amber)",d=i("daily_total_energy"),c=i("daily_energy"),u=d&&!ga.has(d.state)?Number(d.state):void 0,p=c&&!ga.has(c.state)?Number(c.state):void 0,m=void 0!==u&&void 0!==p?Math.max(u-p,0):void 0,g=this._weekAverage&&this._weekAverage>0?(r-this._weekAverage)/this._weekAverage*100:void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:shoe-print")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.steps_today.title"))}</div>
            <div class="subtitle">${ke(a,"card.steps_today.subtitle",{goal:n.toLocaleString(a.language)})}</div>
          </div>
        </div>

        <div class="hero-row">
          <div>
            <div class="hero-num">
              ${Math.round(r).toLocaleString(a.language)}<span class="unit">${ke(a,"stat.steps")}</span>
            </div>
            <div class="hero-sub">${ke(a,"steps_today.goal_pct",{pct:Math.round(o)})}</div>
          </div>
          <div class="ring-wrap">
            ${sa(o,l,76,7)}
            <div class="ring-value" style="color:${l}">${Math.round(o)}%</div>
          </div>
        </div>

        ${void 0!==u&&void 0!==p&&void 0!==m?B`
              <div class="energy-row">
                <div class="icon-badge tiny"><ha-icon icon="mdi:fire"></ha-icon></div>
                <div class="split">
                  <div class="split-top">
                    <span
                      ><strong>${Math.round(u).toLocaleString(a.language)}</strong>
                      ${ke(a,"energy.total_unit")}</span
                    >
                    <span
                      >${ke(a,"energy.split",{active:Math.round(p).toLocaleString(a.language),bmr:Math.round(m).toLocaleString(a.language)})}</span
                    >
                  </div>
                  <div class="split-bar">
                    <span style="flex:${p};background:var(--sc-amber)"></span>
                    <span class="bmr" style="flex:${m}"></span>
                  </div>
                </div>
              </div>
            `:W}

        ${void 0!==g?B`
              <div class="avg-chip ${g>=0?"up":""}">
                <ha-icon icon=${g>=0?"mdi:trending-up":"mdi:trending-down"}></ha-icon>
                <span>
                  ${ke(a,g>=0?"steps_today.vs_avg_up":"steps_today.vs_avg_down",{pct:Math.abs(Math.round(g)),avg:Math.round(this._weekAverage??0).toLocaleString(a.language)})}
                </span>
              </div>
            `:W}
      </ha-card>
    `}};ha.styles=[_t,yt,r`
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
      .energy-row {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .split {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .split-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
        gap: 2px 8px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .split-top strong {
        font-size: 1rem;
        color: var(--primary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .split-bar {
        display: flex;
        height: 6px;
        border-radius: 3px;
        overflow: hidden;
        background: var(--sc-track, var(--divider-color));
      }
      .split-bar .bmr {
        background: var(--secondary-text-color);
        opacity: 0.35;
      }
      .avg-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],ha.prototype,"_config",void 0),e([he()],ha.prototype,"_weekAverage",void 0),ha=e([ue("suunto-steps-today-card")],ha);let _a=class extends de{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=this.hass,t=this._config,a=e=>this._emit(e);return B`
      <div class="form">
        ${Vt(e,t,a)}
        ${Lt(e,t,a)}
        ${Ke(e,t,a,{weekly:!1,fallback:Te,label:"editor.steps_goal_label",step:500})}
        ${Ft(e,t,a)}
        ${Wt(e,t,a)}
      </div>
    `}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}};_a.styles=Fe,e([ge({attribute:!1})],_a.prototype,"hass",void 0),e([he()],_a.prototype,"_config",void 0),_a=e([ue("suunto-steps-goal-editor")],_a);const ya=new Set(["unknown","unavailable",""]),va=7e4;let ba=class extends ht{static getConfigElement(){return document.createElement("suunto-weekly-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-steps-goal-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_steps"]?a.states[t[s]]:void 0;var s;if(!i||ya.has(i.state))return this._message("mdi:target",ke(a,"empty.weekly_steps_goal.title"));const n=Ie(a,this._configuredDeviceId),r=this._config.goal_steps??(n?7*n:void 0)??va,o=Number(i.state),l=r>0?o/r*100:0,d=l>=100?"var(--sc-good)":"var(--sc-amber)";return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:target")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.weekly_steps_goal.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.weekly_steps_goal.subtitle",{value:Math.round(o).toLocaleString(a.language),goal:r.toLocaleString(a.language)})}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${sa(l,d,64,7)}
            <div class="ring-value" style="color:${d}">${Math.round(l)}%</div>
          </div>
        </div>
      </ha-card>
    `}};ba.styles=[_t,yt,r`
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
    `],e([he()],ba.prototype,"_config",void 0),ba=e([ue("suunto-weekly-steps-goal-card")],ba);let fa=class extends de{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=this.hass,t=this._config,a=e=>this._emit(e);return B`
      <div class="form">
        ${Vt(e,t,a)}
        ${Lt(e,t,a)}
        ${Ke(e,t,a,{weekly:!0,fallback:va,label:"editor.weekly_steps_goal_label",step:1e3})}
        ${Ft(e,t,a)}
        ${Wt(e,t,a)}
      </div>
    `}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}};fa.styles=Fe,e([ge({attribute:!1})],fa.prototype,"hass",void 0),e([he()],fa.prototype,"_config",void 0),fa=e([ue("suunto-weekly-steps-goal-editor")],fa);let ka=class extends de{setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return W;const e=this.hass,t=this._config,a=e=>this._emit(e);return B`
      <div class="form">
        ${Vt(e,t,a)}
        ${Lt(e,t,a)}
        ${Ve(ke(e,"editor.goal_label"),String(t.goal_km??ua),e=>{const i=Number(e);a({...t,goal_km:Number.isFinite(i)&&i>0?i:void 0})},{type:"number",min:1,step:1})}
        <div class="hint">${ke(e,"editor.distance_goal_hint")}</div>
        ${Ke(e,t,a,{weekly:!0,fallback:va,label:"editor.weekly_steps_goal_label",step:1e3})}
        ${Oe(e,t,"training",!1,a)}
        ${Ht(e,t,a)}
        ${Ft(e,t,a)}
        ${Wt(e,t,a)}
      </div>
    `}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}};function wa(e,t,a){if(Array.isArray(t)&&t.length){const e=t[0];if("string"==typeof e)return e;if(e&&"object"==typeof e){const t=e,a=t.name??t.title??t.type;if("string"==typeof a)return a}}return we(e,a,"achievement.count_one","achievement.count_other")}ka.styles=Fe,e([ge({attribute:!1})],ka.prototype,"hass",void 0),e([he()],ka.prototype,"_config",void 0),ka=e([ue("suunto-goals-overview-editor")],ka);const xa={palette:{},colors:{}};function Sa(e,t){const a=t.lifetime_by_activity,i=a?e?.states[a]?.attributes:void 0;if(!i)return xa;const s=i.sport_palette,n=i.sport_colors;return{palette:s&&"object"==typeof s?s:{},colors:n&&"object"==typeof n?n:{}}}function $a(e,t){const a=t??"",i=e.palette[a],s="number"==typeof i&&i>=1&&i<=12?i:function(e){let t=0;for(const a of e)t=31*t+a.charCodeAt(0)>>>0;return t%12+1}(a),n=e.colors[a];return r=n,Boolean(r)&&("undefined"==typeof CSS||CSS.supports("color",r))?`var(--sc-eink-sport-${s}, ${n})`:`var(--sc-sport-${s})`;var r}function za(e){return`color:${e};background:color-mix(in srgb, ${e} 18%, transparent)`}const ja=[[/cycl|bik/i,"mdi:bike"],[/run/i,"mdi:run"],[/trek|hik/i,"mdi:hiking"],[/walk/i,"mdi:walk"],[/gym|strength|weight/i,"mdi:dumbbell"],[/swim/i,"mdi:swim"],[/ski/i,"mdi:ski"],[/row/i,"mdi:rowing"]];function Aa(e){if(e)for(const[t,a]of ja)if(t.test(e))return a;return"mdi:run-fast"}const Ta={"01":"mdi:weather-sunny","02":"mdi:weather-partly-cloudy","03":"mdi:weather-cloudy","04":"mdi:weather-cloudy","09":"mdi:weather-pouring",10:"mdi:weather-rainy",11:"mdi:weather-lightning",13:"mdi:weather-snowy",50:"mdi:weather-fog"};function Ca(e,t){return t>=80?{cls:"good",colorVar:"var(--sc-good)",label:ke(e,"band.regularity.regular")}:t>=60?{cls:"warn",colorVar:"var(--sc-warn)",label:ke(e,"band.regularity.fair")}:{cls:"bad",colorVar:"var(--sc-bad)",label:ke(e,"band.regularity.irregular")}}function Na(e,t){return t<5?{cls:"good",colorVar:"var(--sc-good)",label:ke(e,"band.decoupling.coupled")}:t<=10?{cls:"warn",colorVar:"var(--sc-warn)",label:ke(e,"band.decoupling.moderate")}:{cls:"bad",colorVar:"var(--sc-bad)",label:ke(e,"band.decoupling.high")}}function Ma(e){const t=/^(\d{1,2}):(\d{2})$/.exec(e);if(!t)return;const a=new Date;return a.setHours(Number(t[1]),Number(t[2]),0,0),a}function Ea(e,t){if("string"!=typeof e)return;const a=Ma(e);return a?tt(a,t):void 0}function Da(e){const t=Math.round(e);return`${t>0?"+":t<0?"-":""}${Math.abs(t)} min`}const Ra=["late_workout","training_day","hard_day","early_bed","free_night","hot_weather","cold_weather"],Ia=["hrv","resting_hr","sleep","efficiency"],Pa={late_workout:"mdi:weather-night",training_day:"mdi:dumbbell",hard_day:"mdi:fire",early_bed:"mdi:bed-clock",free_night:"mdi:calendar-weekend",hot_weather:"mdi:weather-sunny",cold_weather:"mdi:snowflake"};function Va(e){return Array.isArray(e)?e.filter(e=>!!e&&"object"==typeof e&&Ra.includes(e.condition)&&Ia.includes(e.metric)&&"number"==typeof e.with&&"number"==typeof e.without&&"number"==typeof e.diff_pct):[]}function Ha(e,t){const a=function(e,t){const a=Ma("20:00");return ke(e,`insights.cond.${t.condition}`,{time:a?tt(a,e?.language):"20:00",bedtime:Ea(t.threshold,e?.language)??t.threshold??"",temp:t.threshold_c??""})}(e,t);return t.activity?`${a} · ${t.activity}`:a}function La(e,t,a){return"sleep"===t.metric?`${a.toFixed(1)} h`:"efficiency"===t.metric?`${a.toFixed(2)} ${ke(e,"insights.unit.per_beat")}`:`${Math.round(a)} ${"hrv"===t.metric?"ms":"bpm"}`}function Fa(e,t){const a=Math.round(t.diff_pct);return`${function(e,t){return ke(e,`insights.metric.${t.metric}`)}(e,t)} ${a>0?"+":a<0?"−":""}${Math.abs(a)}%`}const Oa=new Set(["unknown","unavailable",""]);let Ka=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=Sa(this.hass,t),i=this.hass,s=e=>t[e]?i.states[t[e]]:void 0,n=this._config.units??"metric",r=this._config.compact??!1,o=s("last_activity");if(!o||Oa.has(o.state))return this._message("mdi:calendar-blank-outline",ke(i,"empty.last_workout.title"),ke(i,"empty.last_workout.subtitle"));const l=s("last_workout_start"),d=s("last_distance"),c=s("last_duration"),u=s("last_avg_hr"),p=s("last_max_hr"),m=s("last_avg_pace"),g=s("last_avg_speed"),h=s("last_pte"),_=s("last_epoc"),y=s("last_feeling"),v=s("last_tss"),b=s("last_cal_per_km"),f=s("last_cadence"),k=s("last_pct_hrmax"),w=s("last_stride"),x=s("last_workout_weather"),S=s("last_workout_tags"),$=s("last_workout_achievements"),z=d&&!Oa.has(d.state)?Number(d.state):void 0,j=c&&!Oa.has(c.state)?Ue(Number(c.state)):void 0,A=m&&!Oa.has(m.state)?Number(m.state):void 0,T=g&&!Oa.has(g.state)?Number(g.state):void 0,C=void 0===A&&void 0!==T,N=!1===v?.attributes.has_hr,M=N||!u||Oa.has(u.state)?void 0:Number(u.state),E=N||!p||Oa.has(p.state)?void 0:Number(p.state),D=y&&!Oa.has(y.state)?Number(y.state):void 0,R=h&&!Oa.has(h.state)?Number(h.state):void 0,I=$&&!Oa.has($.state)?Number($.state):0,P=w&&!Oa.has(w.state)?Number(w.state):void 0,V=v&&!Oa.has(v.state)?Number(v.state):void 0,H=N||!v||Oa.has(v.state)||"number"!=typeof v.attributes.tss_met?void 0:v.attributes.tss_met,L=!0===S?.attributes.is_manually_added,F=_&&!Oa.has(_.state)?Number(_.state):void 0,O=b&&!Oa.has(b.state)?Number(b.state):void 0,K=f&&!Oa.has(f.state)?Number(f.state):void 0,q=s("aerobic_decoupling"),G=q&&l&&!Oa.has(q.state)&&Number.isFinite(Number(q.state))&&"string"==typeof q.attributes.start_time&&new Date(q.attributes.start_time).getTime()===new Date(l.state).getTime()?Number(q.state):void 0,U=N||!k||Oa.has(k.state)?void 0:Number(k.state);return B`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge" style=${this._cardConfig?.accent_color?"":za($a(a,o.state))}>
            <ha-icon .icon=${this._icon(Aa(o.state))}></ha-icon>
          </div>
          <div class="title-block">
            <div class="title activity">${this._title(o.state)}</div>
            <div class="subtitle">
              ${l?B`${rt(new Date(l.state),i.language)} ·
                  ${tt(new Date(l.state),i.language)}`:""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${void 0!==z?(()=>{const e=Xe(z/1e3,n);return this._stat(e.value,e.unit,ke(i,"stat.distance"))})():W}
          ${j?this._stat(j.value,j.unit,ke(i,"stat.duration")):W}
          ${void 0!==A?(()=>{const e=Qe(A,n);return this._stat(e.value,e.unit,ke(i,"stat.avg_pace"))})():C?(()=>{const e=Ye(T,n);return this._stat(e.value,e.unit,ke(i,"stat.avg_speed"))})():W}
          ${void 0!==M?this._stat(String(Math.round(M)),"bpm",ke(i,"stat.avg_hr"),!0):W}
          ${void 0!==E?this._stat(String(Math.round(E)),"bpm",ke(i,"stat.max_hr"),!0):W}
          ${void 0!==R?B`
                <div class="stat">
                  <div class="stat-value">${R.toFixed(1)}</div>
                  <div class="stat-label">${ke(i,"stat.training_effect")}</div>
                  <div class="severity">
                    ${[1,2,3,4,5].map(e=>B`<i class=${e<=Math.round(R)?`on s${e}`:""}></i>`)}
                  </div>
                </div>
              `:W}
        </div>

        ${r||void 0===V&&void 0===H&&void 0===F&&void 0===D&&void 0===O&&void 0===K&&void 0===U&&void 0===P&&void 0===G?W:B`
              <hr />
              <div class="secondary">
                ${void 0!==V?this._secondary(String(Math.round(V)),ke(i,N?"stat.tss_met":"stat.tss")):W}
                ${void 0!==H?this._secondary(String(Math.round(H)),ke(i,"stat.tss_met")):W}
                ${void 0!==F?this._secondary(F.toFixed(1),ke(i,"stat.epoc")):W}
                ${void 0!==D?B`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1,2,3,4,5].map(e=>B`<i class=${e<=D?"on":""}></i>`)}
                        </div>
                        <div class="sec-label">${ke(i,"stat.feeling")}</div>
                      </div>
                    `:W}
                ${void 0!==O?this._secondary(`${Math.round(O)}`,ke(i,"stat.energy"),"kcal/km"):W}
                ${void 0!==K?this._secondary(String(Math.round(K)),ke(i,"stat.cadence"),"rpm"):W}
                ${void 0!==U?this._secondary(String(Math.round(U)),ke(i,"stat.pct_hrmax"),"%"):W}
                ${void 0!==P?this._secondary(P.toFixed(2),ke(i,"stat.stride_length"),"m"):W}
                ${void 0!==G?B`
                      <div class="sec-item">
                        <div class="sec-value" style="color:${Na(i,G).colorVar}">
                          ${G.toFixed(1)} <span class="sec-unit">%</span>
                        </div>
                        <div class="sec-label">${ke(i,"stat.decoupling")}</div>
                      </div>
                    `:W}
              </div>
            `}
        ${r||!x||Oa.has(x.state)?W:B`
              <div class="weather">
                <ha-icon .icon=${function(e){const t=e?.slice(0,2);return t&&Ta[t]||"mdi:weather-cloudy"}(x.attributes.icon_code)}></ha-icon>
                <strong>${x.state}°C</strong>
                ${x.attributes.condition?B`<span class="sep">·</span><span class="cond">${x.attributes.condition}</span>`:W}
                ${void 0!==x.attributes.wind_speed_kmh?B`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(x.attributes.wind_speed_kmh)} km/h</span>
                    `:W}
              </div>
            `}
        ${!r&&(S&&!Oa.has(S.state)||I>0||L||N)?B`
              <div class="footer">
                ${S&&!Oa.has(S.state)?B`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${S.state}</span>`:W}
                ${N?B`<span class="chip"><ha-icon icon="mdi:heart-off-outline"></ha-icon>${ke(i,"chip.no_hr")}</span>`:W}
                ${L?B`<span class="chip"><ha-icon icon="mdi:pencil-outline"></ha-icon>${ke(i,"chip.manually_added")}</span>`:W}
                ${I>0?B`
                      <span
                        class="chip accent"
                        title=${$?.attributes.route_ranking?ke(i,"achievement.rank",{rank:$.attributes.route_ranking}):""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${wa(i,$?.attributes.achievements,I)}
                      </span>
                    `:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a,i=!1){return B`
      <div class="stat ${i?"hr":""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}_secondary(e,t,a){return B`
      <div class="sec-item">
        <div class="sec-value">${e}${a?B` <span class="sec-unit">${a}</span>`:W}</div>
        <div class="sec-label">${t}</div>
      </div>
    `}_openMoreInfo(e){e&&ve(this,"hass-more-info",{entityId:e})}};Ka.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Ka.prototype,"_config",void 0),Ka=e([ue("suunto-last-workout-card")],Ka);const Ba=e=>`var(--sc-zone-${e})`;let qa=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-zones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=[];for(let e=0;e<=5;e++){const s=t[`last_zone${e}`],n=s?a.states[s]:void 0;n&&!Number.isNaN(Number(n.state))&&i.push({n:e,minutes:Number(n.state),lower:n.attributes.lower_limit_bpm,upper:n.attributes.upper_limit_bpm})}const s=i.reduce((e,t)=>e+t.minutes,0);if(0===i.length||s<=0)return this._message("mdi:heart-pulse",ke(a,"empty.hr_zones.title"),ke(a,"empty.hr_zones.subtitle"));const n=t.last_workout_start,r=n?a.states[n]:void 0,o=ke(a,"card.hr_zones.last_workout");return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:heart-pulse")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.hr_zones.title"))}</div>
            <div class="subtitle">
              ${r?`${o} · ${rt(new Date(r.state),a.language)}`:o}
            </div>
          </div>
        </div>

        ${ia(i.map(e=>({flexGrow:e.minutes,colorVar:Ba(e.n),title:ke(a,"label.zone",{n:e.n})})))}

        <div class="rows">
          ${i.map(e=>{const t=Ue(e.minutes),i=Math.round(e.minutes/s*100);return B`
              <div class="row">
                <i class="dot" style="background:${Ba(e.n)}"></i>
                <span class="zone-label">${ke(a,"label.zone",{n:e.n})}</span>
                <span class="bpm">${n=e.lower,r=e.upper,void 0!==n&&void 0!==r?`${n}-${r} bpm`:void 0!==n?`${n}+ bpm`:void 0!==r?`<${r} bpm`:""}</span>
                <span class="time">${t.value} ${t.unit}</span>
                <span class="pct">${i}%</span>
              </div>
            `;var n,r})}
        </div>
      </ha-card>
    `}};qa.styles=[_t,yt,r`
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
    `],e([he()],qa.prototype,"_config",void 0),qa=e([ue("suunto-hr-zones-card")],qa);const Ga=new Set(["unknown","unavailable",""]);function Wa(e){if(!e||Ga.has(e.state))return 0;const t=Number(e.state);return Number.isFinite(t)&&t>0?t:0}function Ua(e){if(!e||Ga.has(e.state))return;const t=new Date(e.state).getTime();return Number.isNaN(t)?void 0:t}function Za(e,t){const a=t("sleep_duration");if(!a||Ga.has(a.state))return;const i=Number(a.state);if(!Number.isFinite(i)||i<=0)return;const s=60*i,n=Ua(t("sleep_time")),r=Ua(t("wake_time")),o=void 0!==n&&void 0!==r&&r>n?(r-n)/6e4:void 0,l=void 0!==o?Math.max(0,o-s):void 0,d=Wa(t("sleep_deep")),c=Wa(t("sleep_light")),u=Wa(t("sleep_rem")),p=Math.max(0,s-d-c-u),m=[{minutes:d,colorVar:"var(--sc-sleep-deep)",title:ke(e,"label.deep")},{minutes:c,colorVar:"var(--sc-sleep-light)",title:ke(e,"label.light")},{minutes:u,colorVar:"var(--sc-sleep-rem)",title:ke(e,"label.rem")},{minutes:p>=1?p:0,colorVar:"var(--sc-sleep-other)",title:ke(e,"label.sleep_other")},{minutes:l??0,colorVar:"var(--sc-sleep-awake)",title:ke(e,"label.awake")}].filter(e=>e.minutes>=1);return{sleepMin:s,bedMs:n,wakeMs:r,inBedMin:o,awakeMin:l,stages:m}}const Ja=new Set(["unknown","unavailable",""]);let Xa=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-readiness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=this._config.compact??!1,n=i("sleep_duration");if(!n||Ja.has(n.state))return this._message("mdi:sleep",ke(a,"empty.sleep_readiness.title"),ke(a,"empty.sleep_readiness.subtitle"));const r=i("wake_time"),o=i("sleep_quality"),l=i("sleep_spo2"),d=i("sleep_hrv"),c=i("hrv_baseline"),u=i("hrv_status"),p=i("resting_hr"),m=i("resting_hr_baseline"),g=i("readiness"),h=i("nap_duration"),_=i("sleep_avg_hr"),y=i("sleep_min_hr"),v=i("sleep_time"),b=i("unusual_recovery"),f=g&&!Ja.has(g.state)?Number(g.state):void 0,k=void 0!==f?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:ke(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:ke(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:ke(e,"band.readiness.low")}}(a,f):void 0,w=d&&c&&!Ja.has(c.state)?Number(d.state)-Number(c.state):void 0,x=p&&m&&!Ja.has(m.state)?Number(p.state)-Number(m.state):void 0,S=Za(a,i)?.stages??[],$=Ue(60*Number(n.state)),z=h&&!Ja.has(h.state)?Number(h.state):void 0,j=!!h?.attributes.date&&it(new Date(h.attributes.date)),A={duration:`${$.value} ${$.unit}`},T=!0===n.attributes.stale&&"string"==typeof n.attributes.night?n.attributes.night:void 0,C=!0===g?.attributes.sleep_stale,N=ot(i("last_sync")),M=Number(n.state),E=s||!1===this._config.show_goals?void 0:Ne(a,this._config,this._configuredDeviceId,"sleep");return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:sleep")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.sleep_readiness.title"))}</div>
            <div class="subtitle">
              ${r?ke(a,"card.sleep_readiness.subtitle_with_wake",{...A,time:tt(new Date(r.state),a.language)}):ke(a,"card.sleep_readiness.subtitle_no_wake",A)}
            </div>
          </div>
        </div>

        ${T||N?.stale?B`<div class="footer">
              ${T?B`<span class="chip warn"
                    ><ha-icon icon="mdi:alert-outline"></ha-icon>${ke(a,"chip.sleep_stale",{date:at(T,a.language)})}</span
                  >`:W}
              ${dt(a,N)}
            </div>`:W}

        ${void 0!==E?B`
              <div class="goal-row ${T?"stale":""}">
                <div class="goal-top">
                  <span>${ke(a,"sleep_goal.label")}</span>
                  <span>
                    ${M>=E?ke(a,"sleep_goal.met",{value:Re(M),goal:Re(E)}):ke(a,"sleep_goal.short",{value:Re(M),goal:Re(E),missing:Re(E-M)})}
                  </span>
                </div>
                ${function(e,t,a=!1){const i=t>0?Math.max(0,Math.min(100,e/t*100)):0;return B`
    <div class="goal-bar ${a?"thick":""} ${e>=t?"done":""}">
      <span style="width:${i}%"></span>
    </div>
  `}(M,E,!0)}
              </div>
            `:W}

        ${void 0!==f&&k?B`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${sa(f,k.colorVar,60,6)}
                  <div class="ring-value" style="color:${k.colorVar}">${Math.round(f)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${ke(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${k.colorVar}">${k.label}</div>
                  ${C?B`<div class="readiness-note">${ke(a,"readiness.balance_only")}</div>`:W}
                </div>
              </div>
            `:W}

        <div class="stats ${T?"stale":""}">
          ${o?this._stat(String(Math.round(Number(o.state))),"%",ke(a,"stat.quality")):W}
          ${d?this._stat(String(Math.round(Number(d.state))),"ms",void 0!==w?ke(a,"stat.hrv_delta",{delta:st(w)}):ke(a,"stat.hrv"),void 0!==w?w>=0?"good":"bad":void 0):W}
          ${p?this._stat(String(Math.round(Number(p.state))),"bpm",void 0!==x?ke(a,"stat.resting_hr_delta",{delta:st(x)}):ke(a,"stat.resting_hr"),void 0!==x?x<=0?"good":"bad":void 0):W}
          ${!s&&l?this._stat(String(Math.round(Number(l.state))),"%",ke(a,"stat.spo2")):W}
          ${!s&&_?this._stat(String(Math.round(Number(_.state))),"bpm",ke(a,"stat.sleep_avg_hr"),"hr"):W}
          ${!s&&y?this._stat(String(Math.round(Number(y.state))),"bpm",ke(a,"stat.sleep_min_hr"),"hr"):W}
        </div>

        ${!s&&S.length?B`
              <div class="stages ${T?"stale":""}">
                ${ia(S.map(e=>({flexGrow:e.minutes,colorVar:e.colorVar,title:e.title})))}
                <div class="stage-legend">
                  ${S.map(e=>{const t=Ue(e.minutes);return B`
                      <span class="legend-item">
                        <i class="dot" style="background:${e.colorVar}"></i>${e.title} &middot;
                        ${t.value}${"h"===t.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:W}

        ${!s&&(u&&!Ja.has(u.state)||z||v&&!Ja.has(v.state)||"on"===b?.state)?B`
              <div class="footer">
                ${"on"===b?.state?B`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${ke(a,"chip.unusual_recovery")}</span>`:W}
                ${u&&!Ja.has(u.state)?(()=>{const e=function(e,t){return"low"===t?{colorVar:"var(--sc-warn)",label:ke(e,"band.hrv.low")}:"high"===t?{colorVar:"var(--sc-pulse)",label:ke(e,"band.hrv.high")}:{colorVar:"var(--sc-good)",label:ke(e,"band.hrv.balanced")}}(a,u.state);return B`<span class="chip" style="color:${e.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${e.label}</span
                      >`})():W}
                ${z?B`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${ke(a,j?"chip.nap":"chip.nap_earlier",{minutes:z})}
                    </span>`:W}
                ${v&&!Ja.has(v.state)?B`<span class="chip">
                      <ha-icon icon="mdi:bed-clock"></ha-icon>${ke(a,"chip.bedtime",{time:tt(new Date(v.state),a.language)})}
                    </span>`:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a,i){return B`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Xa.styles=[_t,yt,r`
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
      .readiness-note {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }
      /* Numbers from an out-of-date night: still shown, but not passed off as today's. */
      .stats.stale,
      .stages.stale,
      .goal-row.stale {
        opacity: 0.5;
      }
      .goal-row {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .goal-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2px 8px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
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
    `],e([he()],Xa.prototype,"_config",void 0),Xa=e([ue("suunto-sleep-readiness-card")],Xa);const Ya=["recovering","active","inactive","stressed"],Qa={1:"recovering",2:"active",3:"inactive",4:"stressed"};function ei(e){return`var(--sc-stress-${e})`}function ti(e,t){return ke(e,`stress.state.${t}`)}function ai(e){if(!e)return;const t=e.attributes.state_name;return"string"==typeof t&&Ya.includes(t)?t:Qa[String(Math.round(Number(e.state)))]}function ii(e){if(!e||"object"!=typeof e)return;const t=e,a={};let i=0;for(const e of Ya){const s=Number(t[`${e}_minutes`]);a[e]=Number.isFinite(s)&&s>0?s:0,i+=a[e]}return i?{date:"string"==typeof t.date?t.date:void 0,samples:Number(t.samples)||0,minutes:a}:void 0}const si=new Set(["unknown","unavailable",""]);let ni=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||si.has(s.state))return this._message("mdi:battery-heart-variant",ke(a,"empty.recovery.title"));const n=i("is_recovering"),r=i("recovery_until"),o=i("recovery_time"),l=ai(i("stress_state")),d=i("workout_today"),c=i("unusual_recovery"),u=Number(s.state),p=function(e,t){return t>=60?{colorVar:"var(--sc-good)",label:ke(e,"band.recovery.well")}:t>=30?{colorVar:"var(--sc-warn)",label:ke(e,"band.recovery.partial")}:{colorVar:"var(--sc-bad)",label:ke(e,"band.recovery.low")}}(a,u),m="on"===n?.state;let g=ke(a,"band.recovery.fully");if(m&&r&&!si.has(r.state)){const e=new Date(r.state).getTime()-Date.now();if(e>0){const t=Ue(e/6e4);g=ke(a,"band.recovery.recovering",{time:`${t.value} ${t.unit}`})}}return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:battery-heart-variant")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.recovery.title"))}</div>
            <div class="subtitle">${g}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${sa(u,p.colorVar,60,6)}
            <div class="ring-value" style="color:${p.colorVar}">${Math.round(u)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${ke(a,"stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${p.colorVar}">${p.label}</div>
          </div>
        </div>

        ${l||o?B`
              <div class="stats">
                ${l?B`
                      <div class="stat">
                        <div class="stat-value stress">
                          <span class="dot" style="background:${ei(l)}"></span>${ti(a,l)}
                        </div>
                        <div class="stat-label">${ke(a,"stat.stress_level")}</div>
                      </div>
                    `:W}
                ${o&&!si.has(o.state)?this._stat(Number(o.state).toFixed(1),"h",ke(a,"stat.recovery_window")):W}
              </div>
            `:W}
        ${"on"===d?.state||"on"===c?.state?B`
              <div class="footer">
                ${"on"===d?.state?B`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${ke(a,"chip.workout_logged_today")}</span>`:W}
                ${"on"===c?.state?B`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${ke(a,"chip.unusual_recovery")}</span>`:W}
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};ni.styles=[_t,yt,r`
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
      .stat-value.stress {
        align-items: center;
        gap: 6px;
      }
    `],e([he()],ni.prototype,"_config",void 0),ni=e([ue("suunto-recovery-card")],ni);const ri=new Set(["unknown","unavailable",""]);let oi=class extends ht{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-load-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.fitness_ctl;if(!t)return;const a=this._config?.days??30,i=`${t}:${a}`,s=Date.now();if(!(i===this._historyEntityId&&s-this._historyFetchedAt<6e5)){this._historyEntityId=i,this._historyFetchedAt=s;try{this._history=await Be(this.hass,t,24*a,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||ri.has(s.state))return this._message("mdi:arm-flex",ke(a,"empty.training_load.title"),ke(a,"empty.training_load.subtitle"));const n=i("fatigue_atl"),r=i("form_tsb"),o=i("acwr"),l=r&&!ri.has(r.state)?Number(r.state):void 0,d=void 0!==l?function(e,t){return t>5?{colorVar:"var(--sc-good)",label:ke(e,"band.form.fresh")}:t<-20?{colorVar:"var(--sc-bad)",label:ke(e,"band.form.very_fatigued")}:t<-5?{colorVar:"var(--sc-warn)",label:ke(e,"band.form.fatigued")}:{colorVar:"var(--sc-pulse)",label:ke(e,"band.form.neutral")}}(a,l):void 0,c=o&&!ri.has(o.state)?Number(o.state):void 0,u=void 0!==c?function(e,t){return t>1.3?{colorVar:"var(--sc-bad)",label:ke(e,"band.acwr.high")}:t<.8?{colorVar:"var(--sc-warn)",label:ke(e,"band.acwr.low")}:{colorVar:"var(--sc-good)",label:ke(e,"band.acwr.safe")}}(a,c):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:arm-flex")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.training_load.title"))}</div>
            <div class="subtitle">${d?d.label:ke(a,"card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${na(this._history,"var(--sc-amber)")}

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),ke(a,"stat.ctl"))}
          ${n?this._stat(Number(n.state).toFixed(0),ke(a,"stat.atl")):W}
          ${void 0!==l?this._stat(st(l,1),ke(a,"stat.tsb"),d?.colorVar):W}
        </div>

        ${void 0!==c&&u?B`
              <div class="footer">
                <span class="chip" style="color:${u.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${ke(a,"chip.acwr",{value:c.toFixed(2),label:u.label})}
                </span>
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value" style=${a?`color:${a}`:""}>${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};oi.styles=[_t,yt,r`
      .footer {
        display: flex;
      }
    `],e([he()],oi.prototype,"_config",void 0),e([he()],oi.prototype,"_history",void 0),oi=e([ue("suunto-training-load-card")],oi);const li=new Set(["unknown","unavailable",""]);let di=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-stats-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=Sa(this.hass,t),i=this.hass,s=e=>t[e]?i.states[t[e]]:void 0,n=s("weekly_distance"),r=s("weekly_time"),o=s("workouts_7d"),l=s("workouts_30d"),d=s("lifetime_by_activity");if(!n&&!d)return this._message("mdi:calendar-week",ke(i,"empty.week_stats.title"));const c=(d?.attributes.activities??[]).slice().sort((e,t)=>t.distance_km-e.distance_km),u=c.slice(0,5),p=c.length-u.length,m=this._config.units??"metric",g=!1!==this._config.show_goals?Ne(i,this._config,this._configuredDeviceId,"training"):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:calendar-week")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(i,"card.week_stats.title"))}</div>
            <div class="subtitle">${ke(i,"card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${n||r||o?B`
              <div class="stats">
                ${n&&!li.has(n.state)?(()=>{const e=Xe(Number(n.state),m);return this._stat(e.value,e.unit,ke(i,"stat.distance"))})():W}
                ${r&&!li.has(r.state)?B`
                      <div class="stat">
                        <div class="stat-value">
                          ${Number(r.state).toFixed(1)}${void 0!==g?De(i,"training",Number(r.state),g):B`<span class="unit">h</span>`}
                        </div>
                        <div class="stat-label">${ke(i,"stat.time")}</div>
                      </div>
                    `:W}
                ${o&&!li.has(o.state)?this._stat(o.state,"",ke(i,"stat.workouts")):W}
              </div>
            `:W}

        ${u.length?B`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${ke(i,"card.week_stats.lifetime_title")}</div>
                ${ia(u.map(e=>({flexGrow:e.distance_km,colorVar:$a(a,e.activity),title:e.activity})))}
                <div class="rows">
                  ${u.map(e=>{const t=$a(a,e.activity);return B`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style=${za(t)}
                        >
                          <ha-icon .icon=${Aa(e.activity)}></ha-icon>
                        </div>
                        <span class="name">${e.activity}</span>
                        <span class="count">${e.workouts}×</span>
                        <span class="dist">${(()=>{const t=Xe(e.distance_km,m,0);return`${t.value} ${t.unit}`})()}</span>
                      </div>
                    `})}
                  ${p>0?B`<div class="row muted">
                        ${we(i,p,"chip.more_activity_one","chip.more_activity_other")}
                      </div>`:W}
                </div>
              </div>
            `:W}
        ${l&&!li.has(l.state)?B`<div class="footer"><span class="chip">${ke(i,"chip.workouts_30d",{count:l.state})}</span></div>`:W}
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};di.styles=[_t,yt,r`
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
    `],e([he()],di.prototype,"_config",void 0),di=e([ue("suunto-week-stats-card")],di);const ci=new Set(["unknown","unavailable",""]);let ui=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps"),n=i("daily_energy"),r=i("daily_total_energy"),o=r&&!ci.has(r.state)?Number(r.state):void 0,l=i("current_hr"),d=i("workout_today"),c=i("is_recovering"),u=i("training_suggestion"),p=i("days_since_last_workout"),m=ot(i("last_sync"));if(!s&&!n&&!l)return this._message("mdi:pulse",ke(a,"empty.today.title"));const g=s&&!ci.has(s.state)?Number(s.state):void 0,h=n&&!ci.has(n.state)?Number(n.state):void 0,_=!1!==this._config.show_goals,y=_?Ne(a,this._config,this._configuredDeviceId,"steps"):void 0,v=_?Ne(a,this._config,this._configuredDeviceId,"energy"):void 0,b=l&&!ci.has(l.state)?Math.round(Number(l.state)):void 0,f=u&&!ci.has(u.state)?u.state:void 0,k=f?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:ke(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:ke(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:ke(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:ke(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,f):void 0,w=p&&!ci.has(p.state)?Number(p.state):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:pulse")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.today.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.today.subtitle")}${m?` · ${lt(a,m)}`:""}
            </div>
          </div>
        </div>

        <div class="stats">
          ${void 0!==g?B`
                <div class="stat">
                  <div class="stat-value">
                    ${g.toLocaleString(a.language)}${void 0!==y?De(a,"steps",g,y):W}
                  </div>
                  <div class="stat-label">${ke(a,"stat.steps")}</div>
                </div>
              `:W}
          ${void 0!==o?B`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(o).toLocaleString(a.language)}<span class="unit">kcal</span>
                  </div>
                  <div class="stat-label">${ke(a,"stat.energy")}</div>
                  ${void 0!==h?B`<div class="stat-sub">
                        ${void 0!==v?ke(a,"goal.energy_active_of",{kcal:Math.round(h).toLocaleString(a.language),goal:v.toLocaleString(a.language)}):ke(a,"stat.energy_active_sub",{kcal:Math.round(h).toLocaleString(a.language)})}
                      </div>`:W}
                </div>
              `:void 0!==h?B`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(h).toLocaleString(a.language)}${void 0!==v?De(a,"energy",h,v):B`<span class="unit">kcal</span>`}
                  </div>
                  <div class="stat-label">${ke(a,"stat.energy")}</div>
                </div>
              `:W}
          ${void 0!==b?B`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${b}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${ke(a,"stat.heart_rate")}</div>
                </div>
              `:W}
        </div>

        ${m?.stale||"on"===d?.state||"on"===c?.state||k||void 0!==w&&w>0?B`
              <div class="footer">
                ${dt(a,m)}
                ${"on"===d?.state?B`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${ke(a,"chip.workout_today")}</span>`:W}
                ${"on"===c?.state?B`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${ke(a,"chip.recovering")}</span>`:W}
                ${k?B`<span class="chip" style="color:${k.colorVar}"
                      ><ha-icon icon="${k.icon}"></ha-icon>${k.label}</span
                    >`:W}
                ${void 0!==w&&w>0?B`<span class="chip"
                      ><ha-icon icon="mdi:calendar-clock-outline"></ha-icon>${we(a,w,"chip.days_since_one","chip.days_since_other")}</span
                    >`:W}
              </div>
            `:W}
      </ha-card>
    `}};ui.styles=[_t,yt,r`
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
      .stat-sub {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
    `],e([he()],ui.prototype,"_config",void 0),ui=e([ue("suunto-today-card")],ui);const pi=new Set(["unknown","unavailable",""]);let mi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lifetime-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance"),n=i("lifetime_time"),r=i("lifetime_energy"),o=i("lifetime_workouts"),l=i("lifetime_days");return!s||pi.has(s.state)?this._message("mdi:trophy-variant",ke(a,"empty.lifetime.title")):B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:trophy-variant")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.lifetime.title"))}</div>
            <div class="subtitle">${ke(a,"card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${(()=>{const e=Xe(Number(s.state),this._config.units??"metric",0);return this._stat(e.value,e.unit,ke(a,"stat.distance"))})()}
          ${n?this._stat(Number(n.state).toFixed(0),"h",ke(a,"stat.time")):W}
          ${r?this._stat(Math.round(Number(r.state)).toLocaleString(a.language),"kcal",ke(a,"stat.energy")):W}
          ${o?this._stat(o.state,"",ke(a,"stat.workouts")):W}
          ${l?this._stat(l.state,"",ke(a,"stat.active_days")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};mi.styles=[_t,yt,r`
    `],e([he()],mi.prototype,"_config",void 0),mi=e([ue("suunto-lifetime-card")],mi);let gi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recent-workouts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=Sa(this.hass,t),i=this.hass,s=t.workouts_recent,n=s?i.states[s]:void 0,r=this._cap(n?.attributes.workouts??[]);return n&&0!==r.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:format-list-bulleted")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(i,"card.recent_workouts.title"))}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${r.map(e=>{const t=null!==e.duration_min?Ue(e.duration_min):void 0;return B`
              <div class="workout-row">
                <div class="icon-badge tiny" style=${za($a(a,e.activity))}>
                  <ha-icon .icon=${Aa(e.activity)}></ha-icon>
                </div>
                <div class="name-block">
                  <div class="name">${e.activity??"-"}</div>
                  <div class="date">
                    ${e.start?rt(new Date(e.start),i.language):""}
                  </div>
                </div>
                <div class="row-stats">
                  ${null!==e.distance_km?B`<span>${e.distance_km} km</span>`:W}
                  ${null!==e.distance_km&&t?B`<span class="sep">·</span>`:W}
                  ${t?B`<span>${t.value} ${t.unit}</span>`:W}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:format-list-bulleted",ke(i,"empty.recent_workouts.title"))}};gi.styles=[_t,yt,r`
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
    `],e([he()],gi.prototype,"_config",void 0),gi=e([ue("suunto-recent-workouts-card")],gi);const hi=new Set(["unknown","unavailable",""]);let _i=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-elevation-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_ascent"),n=i("last_descent");if((!s||hi.has(s.state))&&(!n||hi.has(n.state)))return this._message("mdi:image-filter-hdr",ke(a,"empty.elevation.title"),ke(a,"empty.elevation.subtitle"));const r=i("last_ascent_time"),o=i("last_descent_time"),l=i("last_min_altitude"),d=i("last_max_altitude"),c=i("last_ascent_rate"),u=i("last_workout_start");return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:image-filter-hdr")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.elevation.title"))}</div>
            <div class="subtitle">
              ${u?`${ke(a,"card.hr_zones.last_workout")} · ${rt(new Date(u.state),a.language)}`:ke(a,"card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats">
          ${s&&!hi.has(s.state)?this._stat(Math.round(Number(s.state)).toString(),"m",ke(a,"stat.ascent")):W}
          ${n&&!hi.has(n.state)?this._stat(Math.round(Number(n.state)).toString(),"m",ke(a,"stat.descent")):W}
          ${r&&!hi.has(r.state)?(()=>{const e=Ue(Number(r.state));return this._stat(e.value,e.unit,ke(a,"stat.ascent_time"))})():W}
          ${o&&!hi.has(o.state)?(()=>{const e=Ue(Number(o.state));return this._stat(e.value,e.unit,ke(a,"stat.descent_time"))})():W}
          ${l&&!hi.has(l.state)?this._stat(Math.round(Number(l.state)).toString(),"m",ke(a,"stat.min_altitude")):W}
          ${d&&!hi.has(d.state)?this._stat(Math.round(Number(d.state)).toString(),"m",ke(a,"stat.max_altitude")):W}
        </div>

        ${c&&!hi.has(c.state)?B`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${ke(a,"stat.ascent_rate")}: ${Math.round(Number(c.state))} m/h
                </span>
              </div>
            `:W}
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};_i.styles=[_t,yt,r`
      .footer {
        display: flex;
      }
    `],e([he()],_i.prototype,"_config",void 0),_i=e([ue("suunto-elevation-card")],_i);const yi=new Set(["unknown","unavailable",""]);let vi=class extends ht{constructor(){super(...arguments),this._mapLoading=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-location-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),n=s?.attributes.latitude,r=s?.attributes.longitude,o=t.last_workout_location;if(!s||yi.has(s.state)||void 0===n||void 0===r)return this._message("mdi:map-marker",ke(a,"empty.location.title"),ke(a,"empty.location.subtitle"));const l=i("last_activity"),d=i("last_workout_start"),c=`https://www.google.com/maps?q=${n},${r}`,u=Aa(l?.state);return o&&this._ensureMapElement(o,u),this._mapEl&&(this._mapEl.hass=a),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:map-marker")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.location.title"))}</div>
            <div class="subtitle">
              ${l?B`${l.state}`:W}
              ${l&&d?B`<span class="sep">·</span>`:W}
              ${d?rt(new Date(d.state),a.language):W}
            </div>
          </div>
        </div>

        ${this._mapEl&&this._mapKey===`${o}:${u}`?B`<div class="map-wrap">${this._mapEl}</div>`:W}

        <div class="footer-row">
          <div class="coords">${Number(n).toFixed(5)}, ${Number(r).toFixed(5)}</div>
          <a class="chip accent link" href=${c} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${ke(a,"location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `}async _ensureMapElement(e,t){const a=`${e}:${t}`;if(this._mapEl&&this._mapKey===a||this._mapLoading)return;const i={type:"map",auto_fit:!0,default_zoom:14,aspect_ratio:"16:9",entities:[{entity:e,icon:t}]},s=window.loadCardHelpers;if(!s){if(!customElements.get("hui-map-card"))return;try{const e=document.createElement("hui-map-card");e.setConfig(i),this._mapKey=a,this._mapEl=e}catch{}return}this._mapLoading=!0;try{const e=(await s()).createCardElement(i);this._mapKey=a,this._mapEl=e}catch{}finally{this._mapLoading=!1}}};vi.styles=[_t,yt,r`
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
    `],e([he()],vi.prototype,"_config",void 0),e([he()],vi.prototype,"_mapEl",void 0),vi=e([ue("suunto-location-card")],vi);const bi=new Set(["unknown","unavailable",""]);let fi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("vo2max");if(!s||bi.has(s.state))return this._message("mdi:lungs",ke(a,"empty.fitness.title"),ke(a,"empty.fitness.subtitle"));const n=i("estimated_vo2max"),r=i("fitness_age"),o=s.attributes.measured_at,l=s.attributes.measured_from;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:lungs")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.fitness.title"))}</div>
            <div class="subtitle">
              ${o?ke(a,"fitness.measured",{time:rt(new Date(o),a.language),activity:l??""}):W}
            </div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",ke(a,"stat.vo2max"))}
          ${n&&!bi.has(n.state)?this._stat(Number(n.state).toFixed(1),"ml/kg/min",ke(a,"stat.estimated_vo2max")):W}
          ${r&&!bi.has(r.state)?this._stat(String(Math.round(Number(r.state))),"",ke(a,"stat.fitness_age")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};fi.styles=[_t,yt,r`
    `],e([he()],fi.prototype,"_config",void 0),fi=e([ue("suunto-fitness-card")],fi);const ki=new Set(["unknown","unavailable",""]);let wi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-last-workout-tile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 1}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=Sa(this.hass,t),i=this.hass,s=e=>t[e]?i.states[t[e]]:void 0,n=s("last_activity");if(!n||ki.has(n.state))return this._message("mdi:calendar-blank-outline",ke(i,"empty.last_workout.title"));const r=s("last_workout_start"),o=s("last_distance"),l=s("last_duration"),d=s("last_avg_hr"),c=s("last_avg_pace"),u=s("last_avg_speed"),p=this._config.units??"metric",m=[];if(o&&!ki.has(o.state)){const e=Xe(Number(o.state)/1e3,p);m.push(B`${e.value} ${e.unit}`)}if(l&&!ki.has(l.state)){const e=Ue(Number(l.state));m.push(B`${e.value} ${e.unit}`)}if(c&&!ki.has(c.state)){const e=Qe(Number(c.state),p);m.push(B`${e.value}${e.unit}`)}else if(u&&!ki.has(u.state)){const e=Ye(Number(u.state),p);m.push(B`${e.value} ${e.unit}`)}return d&&!ki.has(d.state)&&m.push(B`${Math.round(Number(d.state))} bpm`),B`
      <ha-card @click=${()=>this._openMoreInfo(t.last_activity)}>
        <div class="header">
          <div class="icon-badge" style=${this._cardConfig?.accent_color?"":za($a(a,n.state))}>
            <ha-icon .icon=${this._icon(Aa(n.state))}></ha-icon>
          </div>
          <div class="title-block">
            <div class="title activity">${this._title(n.state)}</div>
            <div class="subtitle">${r?rt(new Date(r.state),i.language):""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${m.length?B`
              <div class="compact-stats">
                ${m.map((e,t)=>B`${t>0?B`<span class="sep">·</span>`:W}${e}`)}
              </div>
            `:W}
      </ha-card>
    `}_openMoreInfo(e){e&&ve(this,"hass-more-info",{entityId:e})}};wi.styles=[_t,yt,r`
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
    `],e([he()],wi.prototype,"_config",void 0),wi=e([ue("suunto-last-workout-tile-card")],wi);const xi=new Set(["unknown","unavailable",""]);let Si=class extends ht{constructor(){super(...arguments),this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pmc-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.fitness_ctl;if(!a)return;const i=t.fatigue_atl,s=t.form_tsb,n=[a,i,s].filter(e=>Boolean(e)),r=this._config?.days??90,o=`${n.join(",")}:${r}`,l=Date.now();if(!(o===this._historyKey&&l-this._historyFetchedAt<6e5)){this._historyKey=o,this._historyFetchedAt=l;try{const e=this.hass,[t,n,o]=await Promise.all([Be(e,a,24*r,"mean"),i?Be(e,i,24*r,"mean"):Promise.resolve([]),s?Be(e,s,24*r,"mean"):Promise.resolve([])]);this._ctlHistory=t,this._atlHistory=n,this._tsbHistory=o}catch{this._ctlHistory=[],this._atlHistory=[],this._tsbHistory=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl");if(!s||xi.has(s.state))return this._message("mdi:chart-timeline-variant",ke(a,"empty.training_load.title"),ke(a,"empty.training_load.subtitle"));const n=i("fatigue_atl"),r=i("form_tsb"),o=[{points:this._ctlHistory,colorVar:"var(--sc-pulse)"}];return this._atlHistory.length&&o.push({points:this._atlHistory,colorVar:"var(--sc-bad)"}),this._tsbHistory.length&&o.push({points:this._tsbHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:chart-timeline-variant")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.pmc.title"))}</div>
            <div class="subtitle">${ke(a,"card.pmc.subtitle",{days:this._config?.days??90})}</div>
          </div>
        </div>

        ${oa(o,300,80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${ke(a,"stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.tsb")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(0),ke(a,"stat.ctl"))}
          ${n&&!xi.has(n.state)?this._stat(Number(n.state).toFixed(0),ke(a,"stat.atl")):W}
          ${r&&!xi.has(r.state)?this._stat(st(Number(r.state),1),ke(a,"stat.tsb")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Si.styles=[_t,yt,r`
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
    `],e([he()],Si.prototype,"_config",void 0),e([he()],Si.prototype,"_ctlHistory",void 0),e([he()],Si.prototype,"_atlHistory",void 0),e([he()],Si.prototype,"_tsbHistory",void 0),Si=e([ue("suunto-pmc-card")],Si);const $i=new Set(["unknown","unavailable",""]);let zi=class extends ht{constructor(){super(...arguments),this._rhrHistory=[],this._hrvHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.resting_hr,i=t.sleep_hrv;if(!a&&!i)return;const s=this._config?.days??30,n=`${[a,i].filter(e=>Boolean(e)).join(",")}:${s}`,r=Date.now();if(!(n===this._historyKey&&r-this._historyFetchedAt<6e5)){this._historyKey=n,this._historyFetchedAt=r;try{const e=this.hass,[t,n]=await Promise.all([a?Be(e,a,24*s,"mean"):Promise.resolve([]),i?Be(e,i,24*s,"mean"):Promise.resolve([])]);this._rhrHistory=t,this._hrvHistory=n}catch{this._rhrHistory=[],this._hrvHistory=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("resting_hr"),n=i("sleep_hrv"),r=s&&!$i.has(s.state),o=n&&!$i.has(n.state);if(!r&&!o)return this._message("mdi:heart-pulse",ke(a,"empty.recovery_trends.title"));const l=i("resting_hr_baseline"),d=i("hrv_baseline"),c=r&&l&&!$i.has(l.state)?Number(s.state)-Number(l.state):void 0,u=o&&d&&!$i.has(d.state)?Number(n.state)-Number(d.state):void 0,p=[];return this._rhrHistory.length&&p.push({points:this._rhrHistory,colorVar:"var(--sc-pulse)"}),this._hrvHistory.length&&p.push({points:this._hrvHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:heart-pulse")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.recovery_trends.title"))}</div>
            <div class="subtitle">${ke(a,"card.recovery_trends.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${oa(p,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.hrv")}</span>
        </div>

        <div class="stats">
          ${r?this._stat(String(Math.round(Number(s.state))),"bpm",void 0!==c?ke(a,"stat.resting_hr_delta",{delta:st(c)}):ke(a,"stat.resting_hr"),void 0!==c?c<=0?"good":"bad":void 0):W}
          ${o?this._stat(String(Math.round(Number(n.state))),"ms",void 0!==u?ke(a,"stat.hrv_delta",{delta:st(u)}):ke(a,"stat.hrv"),void 0!==u?u>=0?"good":"bad":void 0):W}
        </div>
      </ha-card>
    `}_stat(e,t,a,i){return B`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};zi.styles=[_t,yt,r`
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
    `],e([he()],zi.prototype,"_config",void 0),e([he()],zi.prototype,"_rhrHistory",void 0),e([he()],zi.prototype,"_hrvHistory",void 0),zi=e([ue("suunto-recovery-trends-card")],zi);const ji=new Set(["unknown","unavailable",""]);let Ai=class extends ht{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-weekly-volume-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const t=e.map.weekly_distance;if(!t)return;const a=Date.now();if(!(t===this._historyEntityId&&a-this._historyFetchedAt<6e5)){this._historyEntityId=t,this._historyFetchedAt=a;try{this._history=await Be(this.hass,t,2016,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="weekly_distance"]?a.states[t[s]]:void 0;var s;if(!i||ji.has(i.state))return this._message("mdi:chart-bar",ke(a,"empty.weekly_volume.title"));const n=function(e,t){const a=[...e].sort((e,t)=>e.t-t.t),i=Date.now(),s=[];for(let e=t-1;e>=0;e--){const t=i-7*e*864e5,n=t-6048e5,r=a.filter(e=>e.t>n&&e.t<=t),o=r[r.length-1];s.push({value:o?o.v:0,weekEndMs:t})}return s}(this._history,12),r=n.map(e=>({value:e.value,label:`${new Date(e.weekEndMs).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${e.value.toFixed(1)} km`})),o=n.reduce((e,t)=>e+t.value,0),l=o/12;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:chart-bar")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.weekly_volume.title"))}</div>
            <div class="subtitle">${ke(a,"card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${da(r,"var(--sc-amber)",300,80)}

        <div class="stats">
          ${this._stat(Number(i.state).toFixed(1),"km",ke(a,"stat.distance"))}
          ${this._stat(l.toFixed(1),"km",ke(a,"stat.average"))}
          ${this._stat(o.toFixed(0),"km",ke(a,"stat.total"))}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ai.styles=[_t,yt,r`
    `],e([he()],Ai.prototype,"_config",void 0),e([he()],Ai.prototype,"_history",void 0),Ai=e([ue("suunto-weekly-volume-card")],Ai);const Ti=new Set(["unknown","unavailable",""]);let Ci=class extends ht{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-hr-curve-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._configuredDeviceId??"auto",t=Date.now();if(!(e===this._historyKey&&t-this._historyFetchedAt<6e5)){this._historyKey=e,this._historyFetchedAt=t;try{this._history=await Be(this.hass,"suunto_app:hr",26,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="current_hr"]?a.states[t[s]]:void 0;var s;if(!i||Ti.has(i.state))return this._message("mdi:chart-bell-curve",ke(a,"empty.hr_curve.title"),ke(a,"empty.hr_curve.subtitle"));const n=this._history.map(e=>e.v),r=n.length?Math.min(...n):void 0,o=n.length?Math.max(...n):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-bell-curve")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.hr_curve.title"))}</div>
            <div class="subtitle">${ke(a,"card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${na(this._history,"var(--sc-pulse)")}

        <div class="stats">
          ${this._stat(String(Math.round(Number(i.state))),"bpm",ke(a,"stat.hr_now"))}
          ${void 0!==r?this._stat(String(Math.round(r)),"bpm",ke(a,"stat.hr_min")):W}
          ${void 0!==o?this._stat(String(Math.round(o)),"bpm",ke(a,"stat.hr_max")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat hr">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ci.styles=[_t,yt,r`
    `],e([he()],Ci.prototype,"_config",void 0),e([he()],Ci.prototype,"_history",void 0),Ci=e([ue("suunto-hr-curve-card")],Ci);const Ni=new Set(["unknown","unavailable",""]);let Mi=class extends ht{constructor(){super(...arguments),this._durationHistory=[],this._qualityHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??30,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:sleep_duration",i,"mean"),Be(this.hass,"suunto_app:sleep_quality",i,"mean")]);this._durationHistory=e,this._qualityHistory=t}catch{this._durationHistory=[],this._qualityHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||Ni.has(s.state))return this._message("mdi:power-sleep",ke(a,"empty.sleep_trends.title"));const n=i("sleep_quality"),r=[];this._durationHistory.length&&r.push({points:this._durationHistory,colorVar:"var(--sc-pulse)"}),this._qualityHistory.length&&r.push({points:this._qualityHistory,colorVar:"var(--sc-amber)"});const o=Ue(60*Number(s.state)),l=Ne(a,this._config,this._configuredDeviceId,"sleep"),d=this._durationHistory,c=void 0!==l?d.filter(e=>e.v>=l).length:0,u=void 0!==l&&d.length?Math.round(60*(d.reduce((e,t)=>e+t.v,0)/d.length-l)):0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:power-sleep")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.sleep_trends.title"))}</div>
            <div class="subtitle">${ke(a,"card.sleep_trends.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${void 0!==l&&d.length?B`
              ${da(d.map(e=>({value:e.v,colorVar:e.v>=l?"var(--sc-good)":"var(--sc-amber)",label:`${new Date(e.t).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${Re(e.v)}`})),"var(--sc-amber)",300,80,l)}
              <div class="chart-legend">
                <span class="legend-item"><i class="dot" style="background:var(--sc-good)"></i>${ke(a,"steps_trend.legend_met")}</span>
                <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"steps_trend.legend_below")}</span>
                <span class="legend-item"><i class="dash"></i>${ke(a,"sleep_trends.legend_goal",{goal:Re(l)})}</span>
              </div>
            `:B`
              ${oa(r,300,80,!1)}
              <div class="chart-legend">
                <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.duration")}</span>
                <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.quality")}</span>
              </div>
            `}

        <div class="stats">
          ${this._stat(`${o.value} ${o.unit}`,ke(a,"stat.duration"))}
          ${n&&!Ni.has(n.state)?this._stat(`${Math.round(Number(n.state))}%`,ke(a,"stat.quality")):W}
          ${void 0!==l&&d.length?B`
                ${this._stat(`${c} / ${d.length}`,ke(a,"sleep_trends.nights_at_goal"))}
                ${this._stat(`${u>0?"+":""}${u} min`,ke(a,"sleep_trends.avg_vs_goal"))}
              `:W}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Mi.styles=[_t,yt,r`
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
      .dash {
        width: 12px;
        border-top: 1px dashed var(--secondary-text-color);
        display: block;
        flex: none;
      }
    `],e([he()],Mi.prototype,"_config",void 0),e([he()],Mi.prototype,"_durationHistory",void 0),e([he()],Mi.prototype,"_qualityHistory",void 0),Mi=e([ue("suunto-sleep-trends-card")],Mi);const Ei=new Set(["unknown","unavailable",""]);let Di=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-streak-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.current_streak?a.states[t.current_streak]:void 0,s=t.workouts_recent?a.states[t.workouts_recent]:void 0,n=s?.attributes.workouts??[];if(!i||Ei.has(i.state)||!s||0===n.length)return this._message("mdi:fire",ke(a,"empty.streak.title"));const r=Number(i.state),o=function(e){return new Set(e.map(e=>e.start).filter(e=>Boolean(e)).map(e=>new Date(e).toDateString()))}(n),l=[];let d=0;const c=new Date;c.setDate(c.getDate()-13);for(let e=0;e<14;e++){const e=o.has(c.toDateString());e&&d++,l.push(B`<span
          class="dot"
          style="background:${e?"var(--sc-amber)":"var(--sc-track, var(--divider-color))"}"
        ></span>`),c.setDate(c.getDate()+1)}return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:fire")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.streak.title"))}</div>
            <div class="subtitle">${ke(a,"card.streak.subtitle")}</div>
          </div>
        </div>

        <div class="streak-row">
          <div class="streak-value">${r}</div>
          <div class="streak-label">
            ${r>0?we(a,r,"streak.days_one","streak.days_other"):ke(a,"streak.none")}
          </div>
        </div>

        <div class="week-dots">${l}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${we(a,d,"streak.window_count_one","streak.window_count_other")}
          </span>
        </div>
      </ha-card>
    `}};Di.styles=[_t,yt,r`
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
    `],e([he()],Di.prototype,"_config",void 0),Di=e([ue("suunto-streak-card")],Di);const Ri=new Set(["unknown","unavailable",""]);let Ii=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-just-finished-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_activity"),n=i("last_workout_start");if(!s||Ri.has(s.state)||!n)return this._message("mdi:party-popper",ke(a,"empty.just_finished.title"));const r=new Date(n.last_changed),o=Date.now()-r.getTime();if(!(Number.isFinite(o)&&o>=0&&o<216e5))return this._message("mdi:party-popper",ke(a,"just_finished.idle.title"),ke(a,"just_finished.idle.subtitle"));const l=i("last_distance"),d=i("last_duration"),c=i("last_avg_hr"),u=i("last_tss"),p=l&&!Ri.has(l.state)?Number(l.state):void 0,m=d&&!Ri.has(d.state)?Ue(Number(d.state)):void 0,g=c&&!Ri.has(c.state)?Number(c.state):void 0,h=u&&!Ri.has(u.state)?Number(u.state):void 0;return B`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon .icon=${this._icon("mdi:party-popper")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"just_finished.title"))}</div>
            <div class="subtitle">
              <span class="activity">${s.state}</span> · ${rt(r,a.language)}
            </div>
          </div>
        </div>

        <div class="stats">
          ${void 0!==p?this._stat((p/1e3).toFixed(1),"km",ke(a,"stat.distance")):W}
          ${m?this._stat(m.value,m.unit,ke(a,"stat.duration")):W}
          ${void 0!==g?this._stat(String(Math.round(g)),"bpm",ke(a,"stat.avg_hr")):W}
          ${void 0!==h?this._stat(h.toFixed(0),"",ke(a,"stat.tss")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Ii.styles=[_t,yt,r`
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
    `],e([he()],Ii.prototype,"_config",void 0),Ii=e([ue("suunto-just-finished-card")],Ii);const Pi=new Set(["unknown","unavailable",""]);let Vi=class extends ht{constructor(){super(...arguments),this._stepsHistory=[],this._energyHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-trends-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??14,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:steps",i,"sum"),Be(this.hass,"suunto_app:energy",i,"sum")]);this._stepsHistory=qe(e),this._energyHistory=qe(t)}catch{this._stepsHistory=[],this._energyHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("daily_steps");if(!s||Pi.has(s.state))return this._message("mdi:shoe-print",ke(a,"empty.activity_trends.title"));const n=i("daily_energy"),r=[];return this._stepsHistory.length&&r.push({points:this._stepsHistory,colorVar:"var(--sc-pulse)"}),this._energyHistory.length&&r.push({points:this._energyHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:shoe-print")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.activity_trends.title"))}</div>
            <div class="subtitle">${ke(a,"card.activity_trends.subtitle",{days:this._config?.days??14})}</div>
          </div>
        </div>

        ${oa(r,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.steps")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.energy")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(s.state)).toLocaleString(a.language),ke(a,"stat.steps"))}
          ${n&&!Pi.has(n.state)?this._stat(`${Math.round(Number(n.state))} kcal`,ke(a,"stat.energy")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Vi.styles=[_t,yt,r`
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
    `],e([he()],Vi.prototype,"_config",void 0),e([he()],Vi.prototype,"_stepsHistory",void 0),e([he()],Vi.prototype,"_energyHistory",void 0),Vi=e([ue("suunto-activity-trends-card")],Vi);const Hi=new Set(["unknown","unavailable",""]);let Li=class extends ht{constructor(){super(...arguments),this._balanceHistory=[],this._stressHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-recovery-balance-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??14,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:recovery_balance",i,"mean"),Be(this.hass,"suunto_app:stress",i,"mean")]);this._balanceHistory=Ge(e),this._stressHistory=Ge(t)}catch{this._balanceHistory=[],this._stressHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("recovery_balance");if(!s||Hi.has(s.state))return this._message("mdi:heart-flash",ke(a,"empty.recovery_balance_trend.title"));const n=ai(i("stress_state")),r=[];return this._balanceHistory.length&&r.push({points:this._balanceHistory,colorVar:"var(--sc-pulse)"}),this._stressHistory.length&&r.push({points:this._stressHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:heart-flash")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.recovery_balance_trend.title"))}</div>
            <div class="subtitle">${ke(a,"card.recovery_balance_trend.subtitle",{days:this._config?.days??14})}</div>
          </div>
        </div>

        ${oa(r,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.recovery_balance")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.stress_level")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${Math.round(Number(s.state))}%`,ke(a,"stat.recovery_balance"))}
          ${n?this._stat(ti(a,n),ke(a,"stat.stress_level")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Li.styles=[_t,yt,r`
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
    `],e([he()],Li.prototype,"_config",void 0),e([he()],Li.prototype,"_balanceHistory",void 0),e([he()],Li.prototype,"_stressHistory",void 0),Li=e([ue("suunto-recovery-balance-trend-card")],Li);const Fi=new Set(["unknown","unavailable",""]);let Oi=class extends ht{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-readiness-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??30,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(!(t===this._historyKey&&a-this._historyFetchedAt<6e5)){this._historyKey=t,this._historyFetchedAt=a;try{this._history=await Be(this.hass,"suunto_app:readiness",24*e,"mean")}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="readiness"]?a.states[t[s]]:void 0;var s;if(!i||Fi.has(i.state))return this._message("mdi:gauge",ke(a,"empty.readiness_trend.title"));const n=Number(i.state),r=function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:ke(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:ke(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:ke(e,"band.readiness.low")}}(a,n);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:gauge")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.readiness_trend.title"))}</div>
            <div class="subtitle">${ke(a,"card.readiness_trend.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${na(this._history,r.colorVar)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value" style="color:${r.colorVar}">${Math.round(n)}</div>
            <div class="stat-label">${r.label}</div>
          </div>
        </div>
      </ha-card>
    `}};Oi.styles=[_t,yt,r`
      .stat-value {
        font-size: 1.4rem;
      }
    `],e([he()],Oi.prototype,"_config",void 0),e([he()],Oi.prototype,"_history",void 0),Oi=e([ue("suunto-readiness-trend-card")],Oi);function Ki(e){return e<=0?0:1===e?1:2===e?2:3}let Bi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-activity-calendar-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,n=s?.attributes.workouts??[];if(!s||0===n.length)return this._message("mdi:calendar-month",ke(a,"empty.activity_calendar.title"));const r=function(e){const t=new Map;for(const a of e){if(!a.start)continue;const e=new Date(a.start).toDateString();t.set(e,(t.get(e)??0)+1)}return t}(n),o=Sa(a,t),l=function(e){const t=new Map;for(const a of e){if(!a.start||!a.activity)continue;const e=new Date(a.start).toDateString(),i=a.duration_min??0,s=t.get(e);(!s||i>s.minutes)&&t.set(e,{sport:a.activity,minutes:i})}return new Map([...t].map(([e,t])=>[e,t.sport]))}(n),d=new Date,c=(d.getDay()+6)%7,u=new Date(d);u.setDate(d.getDate()-c-35);let p=0;const m=[],g=new Date(u);for(let e=0;e<42;e++){const e=r.get(g.toDateString())??0;e>0&&p++;const t=Ki(e),i=l.get(g.toDateString());m.push(B`<span
          class="cell level-${t}"
          title=${i?`${g.toLocaleDateString(a.language)}, ${i}`:g.toLocaleDateString(a.language)}
          >${i?B`<i class="sport-dot" style="background:${$a(o,i)}"></i>`:W}</span
        >`),g.setDate(g.getDate()+1)}return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:calendar-month")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.activity_calendar.title"))}</div>
            <div class="subtitle">${ke(a,"card.activity_calendar.subtitle")}</div>
          </div>
        </div>

        <div class="cal-grid">${m}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${we(a,p,"activity_calendar.active_days_one","activity_calendar.active_days_other")}
          </span>
        </div>
      </ha-card>
    `}};function qi(e){const t=Math.round(60*e);if(0===t)return"±0:00";const a=t>0?"+":"-",i=Math.abs(t);return`${a}${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}Bi.styles=[_t,yt,r`
      .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }
      .cell {
        position: relative;
        aspect-ratio: 1;
        border-radius: 3px;
        background: var(--sc-track, var(--divider-color));
        display: block;
      }
      /* The day's main sport (its longest workout), in the sport's own colour. */
      .sport-dot {
        position: absolute;
        left: 50%;
        bottom: 18%;
        width: 26%;
        aspect-ratio: 1;
        transform: translateX(-50%);
        border-radius: 50%;
        box-shadow: 0 0 0 1.5px var(--card-background-color, #fff);
      }
      :host(.eink) .sport-dot {
        display: none;
      }
      :host(.eink) .cell.level-0 {
        outline: 1px solid #000;
        outline-offset: -1px;
      }
      .cell.level-1 {
        background: color-mix(in srgb, var(--sc-amber) 35%, var(--sc-track, var(--divider-color)));
      }
      .cell.level-2 {
        background: color-mix(in srgb, var(--sc-amber) 65%, var(--sc-track, var(--divider-color)));
      }
      .cell.level-3 {
        background: var(--sc-amber);
      }
      .footer {
        display: flex;
      }
    `],e([he()],Bi.prototype,"_config",void 0),Bi=e([ue("suunto-activity-calendar-card")],Bi);let Gi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-workout-comparison-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=Sa(this.hass,t),i=this.hass,s=t.workouts_recent,n=s?i.states[s]:void 0,r=n?.attributes.workouts??[],o=n?function(e){const t=e[0];if(!t?.activity)return;const a=e.slice(1).find(e=>e.activity===t.activity);return a?{current:t,previous:a}:void 0}(r):void 0;if(!o)return this._message("mdi:compare",ke(i,"empty.workout_comparison.title"),ke(i,"empty.workout_comparison.subtitle"));const{current:l,previous:d}=o,c=null!==l.distance_km&&null!==d.distance_km?l.distance_km-d.distance_km:void 0,u=null!==l.duration_min&&null!==d.duration_min?l.duration_min-d.duration_min:void 0,p=null!==l.avg_hr&&null!==d.avg_hr?l.avg_hr-d.avg_hr:void 0,m=l.distance_km&&l.duration_min?l.duration_min/l.distance_km:void 0,g=d.distance_km&&d.duration_min?d.duration_min/d.distance_km:void 0,h=void 0!==m&&void 0!==g?m-g:void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge" style=${this._cardConfig?.accent_color?"":za($a(a,l.activity))}>
            <ha-icon .icon=${this._icon(Aa(l.activity))}></ha-icon>
          </div>
          <div class="title-block">
            <div class="title">${this._title(ke(i,"card.workout_comparison.title"))}</div>
            <div class="subtitle">
              <span class="activity">${l.activity}</span> ·
              ${ke(i,"card.workout_comparison.vs",{time:d.start?rt(new Date(d.start),i.language):""})}
            </div>
          </div>
        </div>

        <div class="stats">
          ${null!==l.distance_km?this._stat(l.distance_km.toFixed(1),"km",void 0!==c?ke(i,"stat.distance_delta",{delta:st(c,1)}):ke(i,"stat.distance")):W}
          ${null!==l.duration_min?(()=>{const e=Ue(l.duration_min);return this._stat(e.value,e.unit,void 0!==u?ke(i,"stat.duration_delta",{delta:st(u,0)+" min"}):ke(i,"stat.duration"))})():W}
          ${null!==l.avg_hr?this._stat(String(Math.round(l.avg_hr)),"bpm",void 0!==p?ke(i,"stat.avg_hr_delta",{delta:st(p,0)}):ke(i,"stat.avg_hr")):W}
          ${void 0!==m?this._stat(`${Math.floor(m)}:${String(Math.round(m%1*60)).padStart(2,"0")}`,"/km",void 0!==h?ke(i,"stat.pace_delta",{delta:qi(h)}):ke(i,"stat.avg_pace")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};Gi.styles=[_t,yt,r`
      .activity {
        text-transform: capitalize;
      }
      /* These 4 stats are fixed once a comparison pair exists (all derived
         from the same two records) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([he()],Gi.prototype,"_config",void 0),Gi=e([ue("suunto-workout-comparison-card")],Gi);const Wi=new Set(["unknown","unavailable",""]);let Ui=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-milestones-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||Wi.has(s.state))return this._message("mdi:earth",ke(a,"empty.milestones.title"));const n=i("lifetime_energy"),r=Number(s.state),o=r/40075,l=r/42.195,d=r/384400*100,c=n&&!Wi.has(n.state)?Number(n.state)/550:void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:earth")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.milestones.title"))}</div>
            <div class="subtitle">${ke(a,"card.milestones.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(o.toFixed(2),ke(a,"stat.earth_laps"))}
          ${this._stat(l.toFixed(0),ke(a,"stat.marathons"))}
          ${this._stat(`${d.toFixed(1)}%`,ke(a,"stat.moon_pct"))}
          ${void 0!==c?this._stat(c.toFixed(0),ke(a,"stat.burgers")):W}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};Ui.styles=[_t,yt,r`
      /* 4 stats always arrive together (same lifetime snapshot) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `],e([he()],Ui.prototype,"_config",void 0),Ui=e([ue("suunto-milestones-card")],Ui);const Zi=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];let Ji=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-athlete-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.lifetime_by_activity,s=i?a.states[i]:void 0,n=s?.attributes.activities??[],r=t.workouts_recent,o=r?a.states[r]:void 0,l=o?.attributes.workouts??[];if(0===n.length||0===l.length)return this._message("mdi:account-star",ke(a,"empty.athlete_profile.title"));const d=[...n].sort((e,t)=>t.workouts-e.workouts)[0].activity,c=function(e){for(const[t,a]of Zi)if(t.test(e))return a;return"personality.activity.other"}(d),u=function(e){const t=e.filter(e=>Boolean(e.start)),a=t.filter(e=>{const t=new Date(e.start).getDay();return 0===t||6===t}).length,i=a/t.length;return i>=.6?"personality.schedule.weekend":i<=.25?"personality.schedule.weekday":"personality.schedule.balanced"}(l),p=function(e){const t={morning:0,afternoon:0,evening:0,night:0};for(const a of e){if(!a.start)continue;const e=new Date(a.start).getHours();e>=5&&e<12?t.morning++:e>=12&&e<18?t.afternoon++:e>=18&&e<23?t.evening++:t.night++}const a=Object.entries(t).sort((e,t)=>t[1]-e[1])[0][0];return{morning:{key:"personality.time.morning",icon:"mdi:weather-sunset-up"},afternoon:{key:"personality.time.afternoon",icon:"mdi:weather-sunny"},evening:{key:"personality.time.evening",icon:"mdi:weather-sunset"},night:{key:"personality.time.night",icon:"mdi:weather-night"}}[a]}(l);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:account-star")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.athlete_profile.title"))}</div>
            <div class="subtitle">
              ${ke(a,c)} · ${ke(a,u)} · ${ke(a,p.key)}
            </div>
          </div>
        </div>

        <div class="traits">
          <span class="chip accent"><ha-icon .icon=${Aa(d)}></ha-icon>${ke(a,c)}</span>
          <span class="chip accent"><ha-icon icon="mdi:calendar-weekend"></ha-icon>${ke(a,u)}</span>
          <span class="chip accent"><ha-icon .icon=${p.icon}></ha-icon>${ke(a,p.key)}</span>
        </div>
      </ha-card>
    `}};Ji.styles=[_t,yt,r`
      .traits {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],e([he()],Ji.prototype,"_config",void 0),Ji=e([ue("suunto-athlete-profile-card")],Ji);let Xi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-pace-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,n=s?.attributes.workouts??[],r=s?function(e){const t=e[0]?.activity;if(!t)return;const a=e.filter(e=>e.activity===t&&e.start&&e.distance_km&&e.duration_min).map(e=>({t:new Date(e.start).getTime(),v:e.duration_min/e.distance_km})).sort((e,t)=>e.t-t.t);if(a.length<2)return;const i=Math.ceil(a.length/2),s=a.slice(0,i),n=a.slice(i).length?a.slice(i):a.slice(-1),r=e=>e.reduce((e,t)=>e+t.v,0)/e.length,o=r(s),l=(r(n)-o)/o,d=l<-.03?"faster":l>.03?"slower":"steady";return{activity:t,points:a,latestPace:a[a.length-1].v,direction:d}}(n):void 0;if(!r)return this._message("mdi:speedometer",ke(a,"empty.pace_trend.title"),ke(a,"empty.pace_trend.subtitle"));const o="faster"===r.direction?{colorVar:"var(--sc-good)",label:ke(a,"pace_trend.faster")}:"slower"===r.direction?{colorVar:"var(--sc-warn)",label:ke(a,"pace_trend.slower")}:{colorVar:"var(--sc-pulse)",label:ke(a,"pace_trend.steady")};return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon(Aa(r.activity))}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.pace_trend.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.pace_trend.subtitle",{activity:r.activity,count:r.points.length})}
            </div>
          </div>
        </div>

        ${na(r.points,o.colorVar)}

        <div class="footer">
          <div class="stat">
            <div class="stat-value">${Ze(r.latestPace)}<span class="unit">/km</span></div>
            <div class="stat-label">${ke(a,"stat.avg_pace")}</div>
          </div>
          <span class="chip" style="color:${o.colorVar}">${o.label}</span>
        </div>
      </ha-card>
    `}};Xi.styles=[_t,yt,r`
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
    `],e([he()],Xi.prototype,"_config",void 0),Xi=e([ue("suunto-pace-trend-card")],Xi);let Yi=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-lap-splits-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.last_workout_laps,s=i?a.states[i]:void 0,n=s?.attributes.laps??[];if(!s||0===n.length)return this._message("mdi:flag-checkered",ke(a,"empty.lap_splits.title"),ke(a,"empty.lap_splits.subtitle"));const r=function(e){const t=e.map((e,t)=>({i:t,pace:e.pace_min_km})).filter(e=>null!==e.pace&&e.pace>0);return t.length>0?t.reduce((e,t)=>t.pace<e.pace?t:e).i:e.reduce((t,a,i)=>a.duration_minutes<e[t].duration_minutes?i:t,0)}(n),o=null!==n[r].pace_min_km&&n[r].pace_min_km>0?`${Ze(n[r].pace_min_km)}/km`:(()=>{const e=Ue(n[r].duration_minutes);return`${e.value} ${e.unit}`})(),l=n.map((e,t)=>{const i=Ue(e.duration_minutes),s=ke(a,"label.lap",{n:e.lap});return{value:e.duration_minutes,label:e.pace_min_km&&e.pace_min_km>0?`${s} · ${Ze(e.pace_min_km)}/km`:`${s} · ${i.value}${i.unit}`,colorVar:t===r?"var(--sc-good)":void 0}}),d=t.last_workout_start,c=d?a.states[d]:void 0,u=ke(a,"card.hr_zones.last_workout");return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:flag-checkered")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.lap_splits.title"))}</div>
            <div class="subtitle">
              ${c?`${u} · ${rt(new Date(c.state),a.language)}`:u}
            </div>
          </div>
        </div>

        ${da(l,"var(--sc-pulse)",300,70)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${n.length}</div>
            <div class="stat-label">${ke(a,"stat.laps")}</div>
          </div>
          <div class="stat good">
            <div class="stat-value">${o}</div>
            <div class="stat-label">${ke(a,"stat.fastest_lap")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${n.map((e,t)=>{const a=Ue(e.duration_minutes);return B`
              <div class="lap-row">
                <div class="lap-number ${t===r?"fastest":""}">${e.lap}</div>
                <div class="lap-meta">
                  ${null!==e.distance_km?B`<span>${e.distance_km.toFixed(2)} km</span><span class="sep">·</span>`:W}
                  <span>${a.value} ${a.unit}</span>
                </div>
                <div class="lap-value">
                  ${null!==e.pace_min_km&&e.pace_min_km>0?B`${Ze(e.pace_min_km)}<span class="unit">/km</span>`:B`${a.value}<span class="unit">${a.unit}</span>`}
                </div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};Yi.styles=[_t,yt,r`
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
    `],e([he()],Yi.prototype,"_config",void 0),Yi=e([ue("suunto-lap-splits-card")],Yi);const Qi=new Set(["unknown","unavailable",""]);let es=class extends ht{constructor(){super(...arguments),this._pteHistory=[],this._epocHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-effect-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??30,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:pte",i,"mean"),Be(this.hass,"suunto_app:epoc",i,"mean")]);this._pteHistory=e,this._epocHistory=t}catch{this._pteHistory=[],this._epocHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_pte");if(!s||Qi.has(s.state))return this._message("mdi:lightning-bolt",ke(a,"empty.training_effect_trend.title"));const n=i("last_epoc"),r=[];return this._pteHistory.length&&r.push({points:this._pteHistory,colorVar:"var(--sc-pulse)"}),this._epocHistory.length&&r.push({points:this._epocHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:lightning-bolt")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.training_effect_trend.title"))}</div>
            <div class="subtitle">${ke(a,"card.readiness_trend.subtitle",{days:this._config?.days??30})}</div>
          </div>
        </div>

        ${oa(r,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.training_effect")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.epoc")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),ke(a,"stat.training_effect"))}
          ${n&&!Qi.has(n.state)?this._stat(Number(n.state).toFixed(0),ke(a,"stat.epoc"),"ml/kg"):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${a?B`<span class="unit">${a}</span>`:W}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};es.styles=[_t,yt,r`
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
    `],e([he()],es.prototype,"_config",void 0),e([he()],es.prototype,"_pteHistory",void 0),e([he()],es.prototype,"_epocHistory",void 0),es=e([ue("suunto-training-effect-trend-card")],es);const ts=new Set(["unknown","unavailable",""]);let as=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-status-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("readiness"),n=i("training_suggestion"),r=i("unusual_recovery"),o=s&&!ts.has(s.state)?Number(s.state):void 0,l=n&&!ts.has(n.state)?n.state:void 0;if(void 0===o&&void 0===l)return this._message("mdi:compass-outline",ke(a,"empty.training_status.title"),ke(a,"empty.training_status.subtitle"));const d=void 0!==o?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:ke(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:ke(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:ke(e,"band.readiness.low")}}(a,o):void 0,c=void 0!==l?function(e,t){switch(t){case"hard":return{colorVar:"var(--sc-good)",label:ke(e,"band.suggestion.hard"),icon:"mdi:fire"};case"moderate":return{colorVar:"var(--sc-pulse)",label:ke(e,"band.suggestion.moderate"),icon:"mdi:walk"};case"easy":return{colorVar:"var(--sc-warn)",label:ke(e,"band.suggestion.easy"),icon:"mdi:leaf"};default:return{colorVar:"var(--sc-bad)",label:ke(e,"band.suggestion.rest"),icon:"mdi:bed-clock"}}}(a,l):void 0,u="on"===r?.state;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:compass-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.training_status.title"))}</div>
            <div class="subtitle">${c?.label??d?.label??""}</div>
          </div>
        </div>

        ${u?B`<div class="alert"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${ke(a,"chip.unusual_recovery")}</div>`:W}

        ${c?B`
              <div class="suggestion-row">
                <div class="suggestion-badge" style="background:${c.colorVar}22; color:${c.colorVar}">
                  <ha-icon icon="${c.icon}"></ha-icon>
                </div>
                <div class="suggestion-text">
                  <div class="suggestion-label">${ke(a,"stat.training_suggestion")}</div>
                  <div class="suggestion-value" style="color:${c.colorVar}">${c.label}</div>
                </div>
              </div>
            `:W}

        ${void 0!==o&&d?B`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${sa(o,d.colorVar,52,6)}
                  <div class="ring-value" style="color:${d.colorVar}">${Math.round(o)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${ke(a,"stat.readiness")}</div>
                  <div class="readiness-band" style="color:${d.colorVar}">${d.label}</div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};as.styles=[_t,yt,r`
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
    `],e([he()],as.prototype,"_config",void 0),as=e([ue("suunto-training-status-card")],as);const is=new Set(["unknown","unavailable",""]);function ss(e){return Math.max(0,Math.min(100,e))}function ns(e,t,a,i){const s=(i-90)*Math.PI/180;return[e+a*Math.cos(s),t+a*Math.sin(s)]}let rs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-training-profile-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),n=i("lifetime_distance"),r=i("lifetime_days"),o=i("acwr"),l=i("workouts_7d"),d=i("readiness"),c=i("workouts_recent"),u=c?.attributes.workouts??[],p=[s,o,l,d].some(e=>e&&!is.has(e.state));if(!p&&0===u.length)return this._message("mdi:radar",ke(a,"empty.training_profile.title"),ke(a,"empty.training_profile.subtitle"));const m=e=>e&&!is.has(e.state)?Number(e.state):0,g=m(n),h=m(r),_=h>0?g/h*7:0,y=_>0?ss(m(s)/(1.4*_)*100):0,v=ss(m(o)/1.5*100),b=ss(m(l)/7*100),f=ss(m(d)),k=new Set(u.map(e=>e.activity).filter(Boolean)).size,w=ss(k/5*100),x=[{label:ke(a,"stat.volume"),value:y},{label:ke(a,"stat.intensity"),value:v},{label:ke(a,"stat.consistency"),value:b},{label:ke(a,"stat.recovery"),value:f},{label:ke(a,"stat.variety"),value:w}],S=[...x].sort((e,t)=>t.value-e.value)[0],$=[...x].sort((e,t)=>e.value-t.value)[0],z=130,j=128,A=360/x.length,T=[.25,.5,.75,1].map(e=>{const t=x.map((t,a)=>ns(z,j,84*e,A*a).join(",")).join(" ");return q`<polygon class="radar-grid" points=${t}></polygon>`}),C=x.map((e,t)=>{const[a,i]=ns(z,j,84,A*t);return q`<line class="radar-axis" x1=${z} y1=${j} x2=${a} y2=${i}></line>`}),N=x.map((e,t)=>ns(z,j,84*e.value/100,A*t)),M=q`<polygon class="radar-fill" points=${N.map(e=>e.join(",")).join(" ")}></polygon>`,E=N.map(([e,t])=>q`<circle class="radar-vertex" cx=${e} cy=${t} r="3.2"></circle>`),D=x.map((e,t)=>{const a=A*t,[i,s]=ns(z,j,104.16,a);let n="middle";return a>10&&a<170&&(n="start"),a>190&&a<350&&(n="end"),q`
        <text class="radar-label" x=${i} y=${s-5} text-anchor=${n}>${e.label}</text>
        <text class="radar-value" x=${i} y=${s+7} text-anchor=${n}>${Math.round(e.value)}</text>
      `});return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:radar")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.training_profile.title"))}</div>
            <div class="subtitle">${ke(a,"card.training_profile.subtitle")}</div>
          </div>
        </div>

        <div class="radar-wrap">
          <svg class="radar-svg" viewBox="0 0 260 260">
            ${T}${C}${M}${E}${D}
          </svg>
        </div>

        <div class="radar-summary">
          ${ke(a,"profile.summary",{strong:S.label,light:$.label})}
        </div>
      </ha-card>
    `}};rs.styles=[_t,yt,r`
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
    `],e([he()],rs.prototype,"_config",void 0),rs=e([ue("suunto-training-profile-card")],rs);const os=new Set(["unknown","unavailable",""]),ls=100,ds=[[0,0],[26,0],[32,-3],[38,0],[44,0],[47,5],[50,-22],[53,8],[56,-2],[60,0],[66,0],[70,-5],[74,0],[100,0]],cs=300;let us=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-heart-rate-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.current_hr?a.states[t.current_hr]:void 0;if(!i||os.has(i.state))return this._message("mdi:heart-pulse",ke(a,"empty.heart_rate.title"));const s=Math.round(Number(i.state)),n=60/s,r="string"==typeof i.attributes.measured_at?new Date(i.attributes.measured_at):void 0,o=r&&!Number.isNaN(r.getTime())?Date.now()-r.getTime()>9e5?ke(a,"card.heart_rate.measured_ago",{ago:rt(r,a.language),time:tt(r,a.language)}):ke(a,"card.heart_rate.measured",{time:tt(r,a.language)}):void 0,l=[];for(let e=0;e<=cs;e+=10)l.push(q`<line class="hr-grid-line ${e%50==0?"major":""}" x1=${e} y1="0" x2=${e} y2=${64}></line>`);for(let e=0;e<=64;e+=10)l.push(q`<line class="hr-grid-line ${e%50==0?"major":""}" x1="0" y1=${e} x2=${cs} y2=${e}></line>`);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge hr-icon-badge">
            <ha-icon class="hr-beat" style="animation-duration:${n}s" .icon=${this._icon("mdi:heart")}></ha-icon>
          </div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.heart_rate.title"))}</div>
            ${o?B`<div class="subtitle">${o}</div>`:W}
          </div>
        </div>

        <div class="hr-strip-wrap">
          <svg class="hr-strip" viewBox="0 0 ${cs} ${64}" preserveAspectRatio="none">
            ${l}
            <path
              class="hr-trace hr-scroll"
              d=${function(){const e=[];for(let t=Math.floor(-1)*ls;t<=400;t+=ls)for(const[a,i]of ds)e.push(`${t+a},${32+i}`);return"M"+e.join(" L")}()}
              style="animation-duration:${n}s; --drift-distance:-${ls}px"
            ></path>
            <text class="hr-corner-value" x="6" y="58">${s} bpm</text>
          </svg>
        </div>
      </ha-card>
    `}};us.styles=[_t,yt,r`
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
    `],e([he()],us.prototype,"_config",void 0),us=e([ue("suunto-heart-rate-card")],us);const ps=new Set(["unknown","unavailable",""]),ms=[[/cycl|bik/i,"personality.activity.cycling"],[/run/i,"personality.activity.running"],[/trek|hik/i,"personality.activity.trekking"],[/walk/i,"personality.activity.walking"],[/gym|strength|weight/i,"personality.activity.gym"],[/swim/i,"personality.activity.swim"],[/ski/i,"personality.activity.ski"],[/row/i,"personality.activity.row"]];function gs(e){if(e)for(const[t,a]of ms)if(t.test(e))return a;return"personality.activity.other"}function hs(e){return Math.max(0,Math.min(99,Math.round(e)))}let _s=class extends ht{constructor(){super(...arguments),this._showHelp=!1}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-player-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("fitness_ctl"),n=i("readiness"),r=i("workouts_30d"),o=i("form_tsb"),l=i("estimated_vo2max")??i("vo2max"),d=i("workouts_recent"),c=i("lifetime_by_activity"),u=[s,n,r].some(e=>e&&!ps.has(e.state));if(!u)return this._message("mdi:cards",ke(a,"empty.player.title"),ke(a,"empty.player.subtitle"));const p=e=>e&&!ps.has(e.state)?Number(e.state):0,m=d?.attributes.workouts??[],g=m.map(e=>e.tss).filter(e=>"number"==typeof e),h=g.length?g.reduce((e,t)=>e+t,0)/g.length:0,_=[{code:"STA",value:hs(p(s)/100*99),helpKey:"player.help.sta"},{code:"PWR",value:hs(h/150*99),helpKey:"player.help.pwr"},{code:"REC",value:hs(p(n)),helpKey:"player.help.rec"},{code:"CON",value:hs(p(r)/20*99),helpKey:"player.help.con"},{code:"END",value:hs((p(l)-20)/40*99),helpKey:"player.help.end"},{code:"FRM",value:hs((p(o)+30)/50*99),helpKey:"player.help.frm"}],y=hs(_.reduce((e,t)=>e+t.value,0)/_.length),v=function(e){return e>=85?{key:"player.tier.legendary",colorVar:"var(--player-legendary)"}:e>=70?{key:"player.tier.gold",colorVar:"var(--player-gold)"}:e>=50?{key:"player.tier.silver",colorVar:"var(--player-silver)"}:{key:"player.tier.bronze",colorVar:"var(--player-bronze)"}}(y),b=[...c?.attributes.activities??[]].sort((e,t)=>t.workouts-e.workouts)[0],f=b?.activity??m[0]?.activity;let k="";try{const e=ze(a,this._configuredDeviceId);k=a.devices?.[e]?.name_by_user||a.devices?.[e]?.name||""}catch{}return B`
      <ha-card class="static player-card" style="--tier-color:${v.colorVar}">
        <div class="pc-top">
          <div class="pc-rating">
            <div class="num">${y}</div>
            <div class="tier">${ke(a,v.key)}</div>
          </div>
          <div class="pc-top-right">
            <button
              class="pc-help-btn"
              aria-label=${ke(a,"player.help.title")}
              @click=${()=>{this._showHelp=!this._showHelp}}
            >
              <ha-icon icon="mdi:help-circle-outline"></ha-icon>
            </button>
            <div class="pc-badge">
              <span class="dot"><ha-icon .icon=${Aa(f)}></ha-icon></span>
              ${f??""}
            </div>
          </div>
        </div>

        <div class="pc-avatar-wrap">
          <div class="pc-avatar"><ha-icon .icon=${Aa(f)}></ha-icon></div>
        </div>
        ${k?B`<div class="pc-name">${k}</div>`:W}
        <div class="pc-archetype">${ke(a,"player.archetype",{activity:ke(a,gs(f))})}</div>

        <div class="pc-stats">
          ${_.map(e=>B`
              <div class="pc-stat">
                <span class="k">${e.code}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${e.value}%"></div></div>
                <span class="v">${e.value}</span>
              </div>
            `)}
        </div>

        ${this._showHelp?B`
              <div
                class="pc-help-overlay"
                @click=${()=>{this._showHelp=!1}}
              >
                <div class="pc-help-title">${ke(a,"player.help.title")}</div>
                ${_.map(e=>{const[t,i]=ke(a,e.helpKey).split(" · ");return B`<div class="pc-help-row"><b>${t}</b> · ${i}</div>`})}
                <div class="pc-help-disclaimer">${ke(a,"player.help.disclaimer")}</div>
              </div>
            `:W}
      </ha-card>
    `}};_s.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
        overflow: hidden;
      }
      .pc-stat .bar-fill {
        height: 100%;
        border-radius: 2px;
        background: var(--tier-color);
      }
    `],e([he()],_s.prototype,"_config",void 0),e([he()],_s.prototype,"_showHelp",void 0),_s=e([ue("suunto-player-card")],_s);const ys=new Set(["unknown","unavailable",""]);function vs(e,t){const a=a=>t[a]?e.states[t[a]]:void 0,i=a("lifetime_workouts"),s=a("lifetime_distance");if(!i&&!s)return null;const n=a("lifetime_time"),r=a("lifetime_days"),o=a("lifetime_energy"),l=a("lifetime_by_activity"),d=a("estimated_vo2max")??a("vo2max"),c=a("training_records"),u=(p=e.language,e=>Math.round(e).toLocaleString(p));var p;const m=function(e){return t=>`${Math.round(t).toLocaleString(e)} km`}(e.language),g=e=>e&&!ys.has(e.state)?Number(e.state):0,h=l?.attributes.activities??[],_=h.filter(e=>e.workouts>0).length,y=[...h].sort((e,t)=>t.workouts-e.workouts)[0],v=c&&!ys.has(c.state)?Number(c.state):0,b=g(i),f=g(s),k=g(n),w=g(r),x=g(o),S=g(d),$=[{headingKey:"achievements.category.workouts",badges:[{icon:"💯",nameKey:"achievements.badge.century_club",unlocked:b>=100,current:b,target:100,format:u},{icon:"🎖️",nameKey:"achievements.badge.workouts_250",unlocked:b>=250,current:b,target:250,format:u},{icon:"🏅",nameKey:"achievements.badge.workouts_500",unlocked:b>=500,current:b,target:500,format:u},{icon:"👑",nameKey:"achievements.badge.workouts_1000",unlocked:b>=1e3,current:b,target:1e3,format:u}]},{headingKey:"achievements.category.distance",badges:[{icon:"🚴",nameKey:"achievements.badge.distance_1000",unlocked:f>=1e3,current:f,target:1e3,format:m},{icon:"🗺️",nameKey:"achievements.badge.distance_5000",unlocked:f>=5e3,current:f,target:5e3,format:m},{icon:"🌍",nameKey:"achievements.badge.around_globe",unlocked:f>=40075,current:f,target:40075,format:m}]},{headingKey:"achievements.category.time",badges:[{icon:"⏱️",nameKey:"achievements.badge.hours_100",unlocked:k>=100,current:k,target:100,format:u},{icon:"⌛",nameKey:"achievements.badge.hours_500",unlocked:k>=500,current:k,target:500,format:u}]},{headingKey:"achievements.category.days",badges:[{icon:"📅",nameKey:"achievements.badge.days_100",unlocked:w>=100,current:w,target:100,format:u},{icon:"🗓️",nameKey:"achievements.badge.full_year",unlocked:w>=365,current:w,target:365,format:u}]},{headingKey:"achievements.category.energy",badges:[{icon:"🔥",nameKey:"achievements.badge.energy_100k",unlocked:x>=1e5,current:x,target:1e5,format:u},{icon:"☄️",nameKey:"achievements.badge.energy_1m",unlocked:x>=1e6,current:x,target:1e6,format:u}]},{headingKey:"achievements.category.variety",badges:[{icon:"🎽",nameKey:"achievements.badge.multi_sport",unlocked:_>=3,current:_,target:3,format:u},{icon:"🧭",nameKey:"achievements.badge.jack_of_all_trades",unlocked:_>=5,current:_,target:5,format:u},...y?[{icon:"⭐",nameKey:"achievements.badge.specialist",nameVars:{activity:y.activity},unlocked:y.workouts>=100,current:y.workouts,target:100,format:u}]:[]]},{headingKey:"achievements.category.fitness",badges:[{icon:"💪",nameKey:"achievements.badge.solid_engine",unlocked:S>=40,current:S,target:40,format:u},{icon:"⚡",nameKey:"achievements.badge.elite_engine",unlocked:S>=55,current:S,target:55,format:u},{icon:"🔥",nameKey:"achievements.badge.consistency_king",unlocked:v>=14,current:v,target:14,format:u},{icon:"🛡️",nameKey:"achievements.badge.iron_will",unlocked:v>=30,current:v,target:30,format:u}]}],z=$.flatMap(e=>e.badges);return{groups:$,allBadges:z,unlockedCount:z.filter(e=>e.unlocked).length}}function bs(e,t,a="training_records"){const i=t[a]?e.states[t[a]]:void 0,s=i&&!ys.has(i.state)?Number(i.state):0,n=i?.attributes??{};return[{icon:"🔥",labelKey:"records.streak",entry:s>0?{value:s}:void 0,render:t=>we(e,t.value,"records.streak_days_one","records.streak_days_other")},{icon:"⚡",labelKey:"records.pace",entry:n.fastest_pace_min_km,render:e=>`${Ze(e.value)} /km`},{icon:"🏔️",labelKey:"records.climb",entry:n.biggest_climb_m,render:e=>`${Math.round(e.value)} m`},{icon:"⏳",labelKey:"records.workout",entry:n.longest_workout_min,render:e=>{const t=Ue(e.value);return`${t.value} ${t.unit}`}},{icon:"📏",labelKey:"records.distance",entry:n.farthest_workout_km,render:e=>`${e.value} km`},{icon:"🥵",labelKey:"records.session",entry:n.hardest_workout_tss,render:e=>`${e.value} TSS`}]}let fs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-achievements-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 6}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=vs(a,t);if(!i)return this._message("mdi:trophy-outline",ke(a,"empty.achievements.title"),ke(a,"empty.achievements.subtitle"));const{groups:s,allBadges:n,unlockedCount:r}=i,o=bs(a,t);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:trophy-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.achievements.title"))}</div>
            <div class="subtitle">${ke(a,"card.achievements.subtitle",{unlocked:r,total:n.length})}</div>
          </div>
        </div>

        <div class="ach-list">
          ${s.map(e=>e.badges.length?B`
                  ${function(e,t){return B`<div class="cat">${ke(e,t)}</div>`}(a,e.headingKey)}
                  ${e.badges.map(e=>this._badgeRow(a,e))}
                `:W)}
          ${o.some(e=>e.entry)?B`
                <div class="cat">${ke(a,"achievements.category.records")}</div>
                ${o.filter(e=>e.entry).map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
              `:W}
        </div>
      </ha-card>
    `}_badgeRow(e,t){const a=Math.max(0,Math.min(100,t.current/t.target*100));return B`
      <div class="arow ${t.unlocked?"unlocked":"locked"}">
        <div class="ic">${t.icon}</div>
        <div class="info">
          <div class="name">${ke(e,t.nameKey,t.nameVars)}</div>
          ${t.unlocked?W:B`
                <div class="prog-track"><div class="prog-fill" style="width:${a}%"></div></div>
                <div class="prog-text">${t.format(t.current)} / ${t.format(t.target)}</div>
              `}
        </div>
        ${t.unlocked?B`<div class="check">✓</div>`:W}
      </div>
    `}_recordRow(e,t,a,i,s){const n=i.start_time?rt(new Date(i.start_time),e.language):void 0;return B`
      <div class="arow record">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${ke(e,a)}</div>
          <div class="prog-text">
            ${i.activity?`${i.activity} · `:""}${n??""}
          </div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};fs.styles=[_t,yt,r`
      .ach-list {
        max-height: var(--sc-list-height, 480px);
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],fs.prototype,"_config",void 0),fs=e([ue("suunto-achievements-card")],fs);const ks={"achievements.badge.century_club":"100","achievements.badge.workouts_250":"250","achievements.badge.workouts_500":"500","achievements.badge.workouts_1000":"1000","achievements.badge.distance_1000":"1000 km","achievements.badge.distance_5000":"5000 km","achievements.badge.around_globe":"Globe","achievements.badge.hours_100":"100 h","achievements.badge.hours_500":"500 h","achievements.badge.days_100":"100 d","achievements.badge.full_year":"365 d","achievements.badge.energy_100k":"100k","achievements.badge.energy_1m":"1M","achievements.badge.multi_sport":"3+","achievements.badge.jack_of_all_trades":"5+","achievements.badge.specialist":"100+","achievements.badge.solid_engine":"VO2 40+","achievements.badge.elite_engine":"VO2 55+","achievements.badge.consistency_king":"14d","achievements.badge.iron_will":"30d"};let ws=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-achievements-compact-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=vs(a,t);if(!i)return this._message("mdi:trophy-outline",ke(a,"empty.achievements.title"),ke(a,"empty.achievements.subtitle"));const{allBadges:s,unlockedCount:n}=i,r=s.length?Math.round(n/s.length*100):0,o=[...s].filter(e=>!e.unlocked).sort((e,t)=>t.current/t.target-e.current/e.target)[0],l=2*Math.PI*16,d=l*(1-r/100);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:trophy-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.achievements.title"))}</div>
            <div class="subtitle">${ke(a,"card.achievements.subtitle",{unlocked:n,total:s.length})}</div>
          </div>
          <div class="ring-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r=${16} class="ring-track"></circle>
              <circle cx="20" cy="20" r=${16} class="ring-fill" stroke-dasharray=${l} stroke-dashoffset=${d}></circle>
            </svg>
            <div class="ring-pct">${r}%</div>
          </div>
        </div>

        <div class="badge-grid">${s.map(e=>this._badge(a,e))}</div>

        ${o?B`
              <div class="footer">
                <span class="chip">
                  <span class="bi">${o.icon}</span>
                  ${ke(a,"achievements.next",{name:ke(a,o.nameKey,o.nameVars),pct:Math.round(o.current/o.target*100)})}
                </span>
              </div>
            `:W}
      </ha-card>
    `}_badge(e,t){return B`
      <div class="badge ${t.unlocked?"unlocked":"locked"}" title=${ke(e,t.nameKey,t.nameVars)}>
        ${t.unlocked?W:B`<span class="lock-pin">🔒</span>`}
        <span class="bi">${t.icon}</span>
        <span class="bl">${ks[t.nameKey]??ke(e,t.nameKey,t.nameVars)}</span>
      </div>
    `}};ws.styles=[_t,yt,r`
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
    `],e([he()],ws.prototype,"_config",void 0),ws=e([ue("suunto-achievements-compact-card")],ws);const xs=new Set(["unknown","unavailable",""]);function Ss(e){return 500*e*e}let $s=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-level-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_energy"),n=i("lifetime_workouts");if(!s||xs.has(s.state))return this._message("mdi:trophy-award",ke(a,"empty.level.title"),ke(a,"empty.level.subtitle"));const r=n&&!xs.has(n.state)?Number(n.state):0,o=Math.round(Number(s.state)/10),l=function(e){return Math.floor(Math.sqrt(e/500))}(o),d=Ss(l),c=Ss(l+1),u=Math.max(0,Math.min(1,(o-d)/(c-d))),p=c-o,m=2*Math.PI*56;return B`
      <ha-card class="static level-card">
        <div class="lvl-ring-wrap">
          <svg width="128" height="128" viewBox="0 0 128 128">
            ${q`<circle cx="64" cy="64" r=${56} class="ring-track"></circle>`}
            ${q`<circle cx="64" cy="64" r=${56} class="ring-fill" stroke-dasharray=${m} stroke-dashoffset=${m*(1-u)}></circle>`}
          </svg>
          <div class="lvl-center">
            <div class="n">${l}</div>
            <div class="l">${ke(a,"level.label")}</div>
          </div>
        </div>
        <div class="lvl-title">${ke(a,function(e){return e>=500?"level.title.legend":e>=200?"level.title.veteran":e>=50?"level.title.grinder":"level.title.novice"}(r))}</div>
        <div class="lvl-sub">${ke(a,"level.subtitle")}</div>
        <div class="xp-bar-wrap">
          <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${100*u}%"></div></div>
          <div class="xp-labels">
            <span>${ke(a,"level.xp_total",{xp:o.toLocaleString(a.language)})}</span>
            <span>${ke(a,"level.xp_to_next",{xp:p.toLocaleString(a.language),level:l+1})}</span>
          </div>
        </div>
        <div class="lvl-source">${ke(a,"level.source",{count:r.toLocaleString(a.language)})}</div>
      </ha-card>
    `}};$s.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],$s.prototype,"_config",void 0),$s=e([ue("suunto-level-card")],$s);const zs=[[/cycl|bik/i,"cycling"],[/run/i,"running"],[/trek|hik/i,"trekking"],[/walk/i,"walking"],[/gym|strength|weight/i,"gym"],[/swim/i,"swim"],[/ski/i,"ski"],[/row/i,"row"]];const js={cycling:"var(--sc-pulse)",running:"var(--sc-bad)",trekking:"var(--sc-good)",walking:"var(--sc-zone-1)",gym:"var(--sc-zone-4)",swim:"var(--sc-sleep-light)",ski:"var(--sc-sleep-deep)",row:"var(--sc-sleep-rem)",other:"var(--sc-amber)"},As=["var(--sc-pulse)","var(--sc-amber)","var(--sc-good)","var(--sc-sleep-rem)","var(--sc-zone-4)","var(--sc-sleep-deep)"];let Ts=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-class-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="lifetime_by_activity"]?a.states[t[s]]:void 0;var s;const n=i?.attributes.activities??[],r=n.reduce((e,t)=>e+t.workouts,0);if(!i||0===r)return this._message("mdi:sword-cross",ke(a,"empty.class.title"),ke(a,"empty.class.subtitle"));const o=[...n].sort((e,t)=>t.workouts-e.workouts).filter(e=>e.workouts>0),l=o[0],d=function(e){if(e)for(const[t,a]of zs)if(t.test(e))return a;return"other"}(l?.activity),c=js[d],u=o.slice(0,5),p=o.slice(5).reduce((e,t)=>e+t.workouts,0);return B`
      <ha-card class="static" style="--class-accent:${c}">
        <div class="class-emblem"><ha-icon .icon=${Aa(l?.activity)}></ha-icon></div>
        <div class="class-name">${ke(a,`class.name.${d}`)}</div>
        <div class="class-tag">${ke(a,"class.tag",{activity:l?.activity??""})}</div>
        <div class="class-flavor">${ke(a,`class.flavor.${d}`)}</div>
        <div class="class-build">
          ${u.map((e,t)=>{const a=Math.round(e.workouts/r*100);return B`
              <div class="cb-row">
                <span class="cn">${e.activity}</span>
                <div class="ct"><div class="cf" style="width:${a}%;background:${0===t?c:As[t%As.length]}"></div></div>
                <span class="cp">${a}%</span>
              </div>
            `})}
          ${p>0?B`<div class="cb-rest">${ke(a,"class.rest",{pct:Math.round(p/r*100)})}</div>`:W}
        </div>
      </ha-card>
    `}};Ts.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Ts.prototype,"_config",void 0),Ts=e([ue("suunto-class-card")],Ts);const Cs=new Set(["unknown","unavailable",""]);let Ns=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-next-milestone-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||Cs.has(s.state))return this._message("mdi:flag-checkered",ke(a,"empty.next_milestone.title"));const n=Number(s.state),r=function(e){const t=e<1e4?1e3:5e3;return(Math.floor(e/t)+1)*t}(n),o=r-n,l=n/r*100,d=i("lifetime_workouts"),c=d&&!Cs.has(d.state)?Number(d.state):void 0,u=void 0!==c?function(e){const t=e<500?50:100;return(Math.floor(e/t)+1)*t}(c):void 0,p=void 0!==c&&void 0!==u?u-c:void 0,m=i("weekly_distance"),g=m&&!Cs.has(m.state)?Number(m.state):void 0,h=g&&g>0?Math.max(1,Math.ceil(o/g)):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:flag-checkered")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.next_milestone.title"))}</div>
            <div class="subtitle">${ke(a,"card.next_milestone.subtitle")}</div>
          </div>
        </div>

        <div class="milestone-row">
          <div class="ring-wrap">
            ${sa(l,"var(--sc-amber)",96,9)}
            <div class="ring-center">
              <div class="big">${Math.round(o).toLocaleString(a.language)}<span class="unit">km</span></div>
              <div class="small">${ke(a,"next_milestone.remaining_label")}</div>
            </div>
          </div>
          <div class="milestone-side">
            <div class="milestone-target">
              ${ke(a,"next_milestone.target",{target:r.toLocaleString(a.language),pct:l.toFixed(0)})}
            </div>
            ${void 0!==p&&void 0!==u?B`
                  <div class="sub-milestone">
                    <ha-icon icon="mdi:trophy-outline"></ha-icon>
                    <div class="txt">
                      ${we(a,p,"next_milestone.workouts_one","next_milestone.workouts_other",{target:u})}
                    </div>
                  </div>
                `:W}
            ${void 0!==h&&void 0!==g?B`
                  <div class="chip accent">
                    <ha-icon icon="mdi:trending-up"></ha-icon>
                    ${we(a,h,"next_milestone.eta_one","next_milestone.eta_other",{pace:g.toFixed(0),weeks:h})}
                  </div>
                `:W}
          </div>
        </div>
      </ha-card>
    `}};Ns.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Ns.prototype,"_config",void 0),Ns=e([ue("suunto-next-milestone-card")],Ns);const Ms=new Set(["unknown","unavailable",""]);let Es=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("lifetime_distance");if(!s||Ms.has(s.state))return this._message("mdi:book-open-page-variant",ke(a,"empty.story.title"));const n=i("lifetime_time"),r=i("lifetime_workouts"),o=i("lifetime_days"),l=i("lifetime_by_activity"),d=[...l?.attributes.activities??[]].sort((e,t)=>t.workouts-e.workouts)[0],c=r&&!Ms.has(r.state)?Number(r.state):void 0,u=d&&c?Math.round(d.workouts/c*100):void 0,p=i("training_records"),m=p&&!Ms.has(p.state)?Number(p.state):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:book-open-page-variant")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.story.title"))}</div>
            <div class="subtitle">${ke(a,"card.story.subtitle")}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${ke(a,"stat.distance")}</div>
          </div>
          ${n&&!Ms.has(n.state)?B`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(n.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${ke(a,"stat.time")}</div>
                </div>
              `:W}
          ${void 0!==c?B`
                <div class="story-tile">
                  <div class="num">${c.toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.workouts")}</div>
                </div>
              `:W}
          ${o&&!Ms.has(o.state)?B`
                <div class="story-tile">
                  <div class="num">${Number(o.state).toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.active_days")}</div>
                </div>
              `:W}
        </div>

        ${d?B`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${ke(a,"story.top_activity",{activity:d.activity})}</div>
                  <div class="t2">
                    ${void 0!==u?ke(a,"story.top_activity_share",{count:d.workouts,pct:u}):W}
                  </div>
                </div>
              </div>
            `:W}
        ${void 0!==m?B`
              <div class="story-block">
                <ha-icon icon="mdi:trophy-variant"></ha-icon>
                <div>
                  <div class="t1">
                    ${ke(a,"records.streak")}:
                    ${we(a,m,"records.streak_days_one","records.streak_days_other",{count:m})}
                  </div>
                  <div class="t2">${ke(a,"story.record_subtitle")}</div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};Es.styles=[_t,yt,r`
      .story-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .story-tile {
        background: var(--sc-track, var(--divider-color));
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Es.prototype,"_config",void 0),Es=e([ue("suunto-story-card")],Es);const Ds=new Set(["unknown","unavailable",""]),Rs=208,Is=104,Ps=78;function Vs(e,t){const a=e*Math.PI/180;return[Is+t*Math.sin(a),Is-t*Math.cos(a)]}let Hs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-clock-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=Za(a,i);if(!s||void 0===s.wakeMs)return this._message("mdi:sleep",ke(a,"empty.sleep_clock.title"),ke(a,"empty.sleep_clock.subtitle"));const n=new Date(s.wakeMs),r=s.inBedMin??s.sleepMin,o=new Date(s.wakeMs-6e4*r),l=(60*o.getHours()+o.getMinutes())/1440*360,d=r/1440*360,c=s.stages.reduce((e,t)=>e+t.minutes,0);let u=l;const p=s.stages.map(e=>{const t=e.minutes/c*d,a=function(e,t){const[a,i]=Vs(e,Ps),[s,n]=Vs(t,Ps),r=t-e>180?1:0;return`M ${a.toFixed(2)} ${i.toFixed(2)} A 78 78 0 ${r} 1 ${s.toFixed(2)} ${n.toFixed(2)}`}(u,u+t);return u+=t,{d:a,colorVar:e.colorVar}}),m=i("sleep_quality"),g=m&&!Ds.has(m.state)?Math.round(Number(m.state)):void 0,h=Ue(s.sleepMin),_=i("sleep_duration"),y=Vs(l,96),v=Vs(l+d,96),b=[l,l+d];return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:sleep")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.sleep_clock.title"))}</div>
            <div class="subtitle">${ke(a,"card.sleep_clock.subtitle")}</div>
          </div>
        </div>

        ${!0===_?.attributes.stale&&"string"==typeof _.attributes.night?B`<div style="display:flex;flex-wrap:wrap">
              <span class="chip warn"
                ><ha-icon icon="mdi:alert-outline"></ha-icon>${ke(a,"chip.sleep_stale",{date:at(_.attributes.night,a.language)})}</span
              >
            </div>`:W}

        <div class="clock-wrap">
          <svg viewBox="0 0 ${Rs} ${Rs}">
            <circle cx=${Is} cy=${Is} r=${Ps} fill="none" stroke="var(--divider-color)" stroke-width=${15} />
            ${p.map(e=>q`<path d=${e.d} fill="none" stroke=${e.colorVar} stroke-width=${15} />`)}
            ${[0,90,180,270].map(e=>{const[t,a]=Vs(e,80),[i,s]=Vs(e,86);return q`<line x1=${t.toFixed(1)} y1=${a.toFixed(1)} x2=${i.toFixed(1)} y2=${s.toFixed(1)} stroke="var(--secondary-text-color)" stroke-width="1.5" />`})}
            ${[{angle:0,label:"0"},{angle:90,label:"6"},{angle:180,label:"12"},{angle:270,label:"18"}].filter(({angle:e})=>(e=>b.every(t=>Math.abs(((t-e)%360+540)%360-180)>=14))(e)).map(({angle:e,label:t})=>{const[a,i]=Vs(e,100);return q`<text x=${a.toFixed(1)} y=${i.toFixed(1)} text-anchor="middle" dominant-baseline="middle" font-size="10" fill="var(--secondary-text-color)">${t}</text>`})}
          </svg>
          <div class="clock-center">
            <div class="big">${h.value}<span class="unit">${h.unit}</span></div>
            ${void 0!==g?B`<div class="small">${ke(a,"sleep_clock.quality",{pct:g})}</div>`:W}
          </div>
          <div class="clock-tag" style="left:${y[0].toFixed(0)}px;top:${y[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${tt(o,a.language)}
          </div>
          <div class="clock-tag" style="left:${v[0].toFixed(0)}px;top:${v[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${tt(n,a.language)}
          </div>
        </div>

        <div class="legend">
          ${s.stages.map(e=>{const t=Ue(e.minutes);return B`<span class="legend-item"
              ><i class="dot" style="background:${e.colorVar}"></i>${e.title} &middot; ${t.value}${"h"===t.unit?"h":"m"}</span
            >`})}
        </div>
      </ha-card>
    `}};Hs.styles=[_t,yt,r`
      .clock-wrap {
        position: relative;
        width: ${Rs}px;
        height: ${Rs}px;
        margin: 0 auto;
      }
      .clock-wrap svg {
        width: ${Rs}px;
        height: ${Rs}px;
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
    `],e([he()],Hs.prototype,"_config",void 0),Hs=e([ue("suunto-sleep-clock-card")],Hs);const Ls=new Set(["unknown","unavailable",""]),Fs=960;function Os(e){return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`}function Ks(e){const t=new Map;for(const a of e){if(Ls.has(a.state))continue;const e=Os(new Date(a.lastChanged)),i=t.get(e);(!i||a.lastChanged>i.lastChanged)&&t.set(e,a)}return t}function Bs(e){const t=60*(e.getHours()-20)+e.getMinutes();return t<0?t+1440:t}let qs=class extends ht{constructor(){super(...arguments),this._nights=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-rhythm-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.wake_time,i=t.sleep_duration;if(!a||!i)return;const s=`${a},${i}`,n=Date.now();if(!(s===this._historyKey&&n-this._historyFetchedAt<18e5)){this._historyKey=s,this._historyFetchedAt=n;try{const e=this.hass,t=await We(e,[a,i],9);this._nights=this._buildNights(t[a]??[],t[i]??[])}catch{this._nights=[]}}}_buildNights(e,t){const a=Ks(e),i=Ks(t),s=[];for(const[e,t]of a){const a=i.get(e);if(!a)continue;const n=new Date(t.state),r=Number(a.state);Number.isNaN(n.getTime())||!Number.isFinite(r)||r<=0||s.push({wake:n,bedtime:new Date(n.getTime()-36e5*r)})}return s.sort((e,t)=>e.bedtime.getTime()-t.bedtime.getTime()),s.slice(-7)}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const t=this.hass,a=e.map.sleep_regularity?t.states[e.map.sleep_regularity]:void 0,i=a&&!Ls.has(a.state)&&Number.isFinite(Number(a.state))?Math.round(Number(a.state)):void 0,s=e.map.social_jetlag?t.states[e.map.social_jetlag]:void 0,n=s&&!Ls.has(s.state)&&Number.isFinite(Number(s.state))?Number(s.state):void 0;if(this._nights.length<2)return this._message("mdi:chart-timeline-variant",ke(t,"empty.sleep_rhythm.title"),ke(t,"empty.sleep_rhythm.subtitle"));const r=this._nights.map(e=>Bs(e.bedtime)),o=r.reduce((e,t)=>e+t,0)/r.length,l=r.reduce((e,t)=>e+(t-o)**2,0)/r.length,d=Math.round(Math.sqrt(l)),c=this._nights.reduce((e,t)=>e+(60*t.wake.getHours()+t.wake.getMinutes()),0)/this._nights.length,u=(1200+o)%1440,p=e=>{const t=new Date;return t.setHours(0,0,0,0),t.setMinutes(Math.round(e)),t};return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-timeline-variant")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(t,"card.sleep_rhythm.title"))}</div>
            <div class="subtitle">${ke(t,"card.sleep_rhythm.subtitle")}</div>
          </div>
        </div>

        <div class="rhythm-chart">
          ${this._nights.map(e=>{const a=Bs(e.bedtime),i=Bs(e.wake)-a,s=a/Fs*100,n=(i<0?i+1440:i)/Fs*100,r=Math.abs(a-o)>30;return B`
              <div class="rhythm-row">
                <div class="rhythm-day">${(e=>new Intl.DateTimeFormat(t.language,{weekday:"short"}).format(e))(e.bedtime)}</div>
                <div class="rhythm-track">
                  <div class="rhythm-avgline" style="left:${o/Fs*100}%"></div>
                  <div class="rhythm-bar ${r?"late":""}" style="left:${s}%;width:${n}%"></div>
                </div>
              </div>
            `})}
          <div class="rhythm-axis">
            ${Array.from({length:9},(e,t)=>2*t).map(e=>B`<span style="left:${60*e/Fs*100}%">${(20+e)%24}</span>`)}
          </div>
        </div>

        <div class="rhythm-stats">
          <span class="chip">${ke(t,"sleep_rhythm.avg_bedtime",{time:tt(p(u),t.language)})}</span>
          <span class="chip">${ke(t,"sleep_rhythm.avg_wake",{time:tt(p(c),t.language)})}</span>
          <span class="chip accent">${ke(t,"sleep_rhythm.spread",{minutes:d})}</span>
          ${void 0!==i?B`<span class="chip ${Ca(t,i).cls}"
                >${ke(t,"chip.regularity",{value:i})}</span
              >`:W}
          ${void 0!==n?B`<span class="chip accent">${ke(t,"chip.social_jetlag",{value:Da(n)})}</span>`:W}
        </div>

        <div class="legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(t,"sleep_rhythm.legend_normal")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(t,"sleep_rhythm.legend_outlier",{minutes:30})}</span>
        </div>
      </ha-card>
    `}};qs.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],qs.prototype,"_config",void 0),e([he()],qs.prototype,"_nights",void 0),qs=e([ue("suunto-sleep-rhythm-card")],qs);const Gs=new Set(["unknown","unavailable",""]);let Ws=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-route-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("last_workout_location"),n=s?.attributes.route,r=(n??[]).map(([e,t,a])=>({lat:e,lon:t,speedKmh:a}));if(!s||Gs.has(s.state)||r.length<2)return this._message("mdi:map-marker-path",ke(a,"empty.route.title"),ke(a,"empty.route.subtitle"));const o=i("last_activity"),l=i("last_workout_start"),d=i("last_distance"),c=i("last_duration"),u=i("last_avg_pace"),p=d&&!Gs.has(d.state)?d:void 0,m=c&&!Gs.has(c.state)?c:void 0,g=u&&!Gs.has(u.state)?u:void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:map-marker-path")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.route.title"))}</div>
            <div class="subtitle">
              ${o?B`${o.state}`:W}
              ${o&&l?B`<span class="sep">·</span>`:W}
              ${l?rt(new Date(l.state),a.language):W}
            </div>
          </div>
        </div>

        <div class="route-frame">${la(r)}</div>

        <div class="pace-legend">
          <span class="end-label">${ke(a,"route.pace_slower")}</span>
          <span class="bar"></span>
          <span class="end-label">${ke(a,"route.pace_faster")}</span>
        </div>

        <div class="stats">
          ${p?B`<div class="stat">
                <div class="stat-label">${ke(a,"stat.distance")}</div>
                <div class="stat-value">${(Number(p.state)/1e3).toFixed(1)}<span class="unit">km</span></div>
              </div>`:W}
          ${m?(()=>{const e=Ue(Number(m.state));return B`<div class="stat">
                  <div class="stat-label">${ke(a,"stat.duration")}</div>
                  <div class="stat-value">${e.value}<span class="unit">${e.unit}</span></div>
                </div>`})():W}
          ${g?B`<div class="stat">
                <div class="stat-label">${ke(a,"stat.avg_pace")}</div>
                <div class="stat-value">${Ze(Number(g.state))}<span class="unit">/km</span></div>
              </div>`:W}
        </div>
      </ha-card>
    `}};Ws.styles=[_t,yt,r`
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
    `],e([he()],Ws.prototype,"_config",void 0),Ws=e([ue("suunto-route-card")],Ws);const Us=new Set(["unknown","unavailable",""]);let Zs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-month-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("month_distance");if(!s||Us.has(s.state))return this._message("mdi:calendar-month",ke(a,"empty.month_story.title"));const n=i("month_time"),r=i("month_energy"),o=i("month_workouts"),l=i("month_active_days"),d=o?.attributes.main_activity,c=o?.attributes.main_activity_workouts,u=o?.attributes.main_activity_pct,p=o&&!Us.has(o.state)?Number(o.state):void 0,m=i("training_records_month"),g=m&&!Us.has(m.state)?Number(m.state):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:calendar-month")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.month_story.title"))}</div>
            <div class="subtitle">${(new Date).toLocaleDateString(a.language,{month:"long",year:"numeric"})}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${ke(a,"stat.distance")}</div>
          </div>
          ${n&&!Us.has(n.state)?B`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(n.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${ke(a,"stat.time")}</div>
                </div>
              `:W}
          ${r&&!Us.has(r.state)?B`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(r.state)).toLocaleString(a.language)}<span class="unit">kcal</span></div>
                  <div class="lab">${ke(a,"stat.energy")}</div>
                </div>
              `:W}
          ${void 0!==p?B`
                <div class="story-tile">
                  <div class="num">${p.toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.workouts")}</div>
                </div>
              `:W}
          ${l&&!Us.has(l.state)?B`
                <div class="story-tile">
                  <div class="num">${Number(l.state).toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.active_days")}</div>
                </div>
              `:W}
        </div>

        ${d?B`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${ke(a,"story.top_activity",{activity:d})}</div>
                  <div class="t2">
                    ${void 0!==c&&void 0!==u?ke(a,"story.share_month",{count:c,pct:u}):W}
                  </div>
                </div>
              </div>
            `:W}
        ${void 0!==g?B`
              <div class="story-block">
                <ha-icon icon="mdi:trophy"></ha-icon>
                <div>
                  <div class="t1">
                    ${ke(a,"records.streak")}:
                    ${we(a,g,"records.streak_days_one","records.streak_days_other",{count:g})}
                  </div>
                  <div class="t2">${ke(a,"story.record_subtitle_month")}</div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};Zs.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Zs.prototype,"_config",void 0),Zs=e([ue("suunto-month-story-card")],Zs);const Js=new Set(["unknown","unavailable",""]);let Xs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-year-story-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("year_distance");if(!s||Js.has(s.state))return this._message("mdi:calendar-star",ke(a,"empty.year_story.title"));const n=i("year_time"),r=i("year_energy"),o=i("year_workouts"),l=i("year_active_days"),d=o?.attributes.main_activity,c=o?.attributes.main_activity_workouts,u=o?.attributes.main_activity_pct,p=o&&!Js.has(o.state)?Number(o.state):void 0,m=i("training_records_year"),g=m&&!Js.has(m.state)?Number(m.state):void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:calendar-star")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.year_story.title"))}</div>
            <div class="subtitle">${(new Date).toLocaleDateString(a.language,{year:"numeric"})}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(s.state).toLocaleString(a.language)}<span class="unit">km</span></div>
            <div class="lab">${ke(a,"stat.distance")}</div>
          </div>
          ${n&&!Js.has(n.state)?B`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(n.state)).toLocaleString(a.language)}<span class="unit">h</span></div>
                  <div class="lab">${ke(a,"stat.time")}</div>
                </div>
              `:W}
          ${r&&!Js.has(r.state)?B`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(r.state)).toLocaleString(a.language)}<span class="unit">kcal</span></div>
                  <div class="lab">${ke(a,"stat.energy")}</div>
                </div>
              `:W}
          ${void 0!==p?B`
                <div class="story-tile">
                  <div class="num">${p.toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.workouts")}</div>
                </div>
              `:W}
          ${l&&!Js.has(l.state)?B`
                <div class="story-tile">
                  <div class="num">${Number(l.state).toLocaleString(a.language)}</div>
                  <div class="lab">${ke(a,"stat.active_days")}</div>
                </div>
              `:W}
        </div>

        ${d?B`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${ke(a,"story.top_activity",{activity:d})}</div>
                  <div class="t2">
                    ${void 0!==c&&void 0!==u?ke(a,"story.share_year",{count:c,pct:u}):W}
                  </div>
                </div>
              </div>
            `:W}
        ${void 0!==g?B`
              <div class="story-block">
                <ha-icon icon="mdi:trophy-variant"></ha-icon>
                <div>
                  <div class="t1">
                    ${ke(a,"records.streak")}:
                    ${we(a,g,"records.streak_days_one","records.streak_days_other",{count:g})}
                  </div>
                  <div class="t2">${ke(a,"story.record_subtitle_year")}</div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};Xs.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Xs.prototype,"_config",void 0),Xs=e([ue("suunto-year-story-card")],Xs);const Ys=[{key:"1k",km:1,label:"1K"},{key:"5k",km:5,label:"5K"},{key:"10k",km:10,label:"10K"},{key:"half_marathon",km:21.0975,label:{translationKey:"distance.half_marathon"}},{key:"marathon",km:42.195,label:{translationKey:"distance.marathon"}}];let Qs=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-best-efforts-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.best_efforts?a.states[t.best_efforts]:void 0;if(!i)return this._message("mdi:speedometer",ke(a,"empty.best_efforts.title"),ke(a,"empty.best_efforts.subtitle"));const s=Number(i.state)||0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:speedometer")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.best_efforts.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.best_efforts.subtitle",{count:s,total:Ys.length})}
            </div>
          </div>
        </div>

        <div class="effort-list">
          ${Ys.map(e=>{const t=i.attributes[`${e.key}_seconds`],s="string"==typeof e.label?e.label:ke(a,e.label.translationKey);if(!t)return B`
                <div class="effort-row empty">
                  <div class="effort-dist">${s}</div>
                  <div class="effort-main">
                    <div class="effort-time">&mdash;:&mdash;&mdash;</div>
                    <div class="effort-meta">${ke(a,"best_efforts.not_yet")}</div>
                  </div>
                  <div class="effort-pace">&mdash;<span class="u">/km</span></div>
                </div>
              `;const n=t.value/60/e.km;return B`
              <div class="effort-row">
                <div class="effort-dist">${s}</div>
                <div class="effort-main">
                  <div class="effort-time">${et(t.value)}</div>
                  <div class="effort-meta">
                    ${t.activity??""}
                    ${t.activity&&t.start_time?B`<span class="sep">·</span>`:W}
                    ${t.start_time?rt(new Date(t.start_time),a.language):W}
                  </div>
                </div>
                <div class="effort-pace">${Ze(n)}<span class="u">/km</span></div>
              </div>
            `})}
        </div>
      </ha-card>
    `}};Qs.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],Qs.prototype,"_config",void 0),Qs=e([ue("suunto-best-efforts-card")],Qs);const en=new Set(["unknown","unavailable",""]);let tn=class extends ht{constructor(){super(...arguments),this._history=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-steps-goal-editor")}static getStubConfig(){return{type:"custom:suunto-steps-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??14,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(!(t===this._historyKey&&a-this._historyFetchedAt<6e5)){this._historyKey=t,this._historyFetchedAt=a;try{this._history=qe(await Be(this.hass,"suunto_app:steps",24*e,"sum"))}catch{this._history=[]}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t[s="daily_steps"]?a.states[t[s]]:void 0;var s;if(!i||en.has(i.state))return this._message("mdi:chart-bar",ke(a,"empty.steps_trend.title"));const n=this._config.goal_steps??Ie(a,this._configuredDeviceId)??Te,r=this._history.map(e=>({value:e.v,colorVar:e.v>=n?"var(--sc-good)":"var(--sc-amber)",label:`${new Date(e.t).toLocaleDateString(a.language,{month:"short",day:"numeric"})} · ${Math.round(e.v).toLocaleString(a.language)}`})),o=this._history.filter(e=>e.v>=n).length,l=this._history.length?this._history.reduce((e,t)=>e+t.v,0)/this._history.length:0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:chart-bar")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.steps_trend.title"))}</div>
            <div class="subtitle">${ke(a,"card.steps_trend.subtitle",{days:this._config?.days??14})}</div>
          </div>
        </div>

        ${da(r,"var(--sc-amber)",300,80)}

        <div class="chart-legend">
          <span><i class="dot" style="background:var(--sc-good)"></i>${ke(a,"steps_trend.legend_met")}</span>
          <span><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"steps_trend.legend_below")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(i.state)).toLocaleString(a.language),ke(a,"stat.steps"))}
          ${this._stat(Math.round(l).toLocaleString(a.language),ke(a,"stat.average"))}
          ${this._stat(String(o),ke(a,"steps_trend.days_at_goal"))}
        </div>
      </ha-card>
    `}_stat(e,t){return B`
      <div class="stat">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${t}</div>
      </div>
    `}};tn.styles=[_t,yt,r`
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
    `],e([he()],tn.prototype,"_config",void 0),e([he()],tn.prototype,"_history",void 0),tn=e([ue("suunto-steps-trend-card")],tn);let an=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-month-records-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=bs(a,t,"training_records_month").filter(e=>e.entry);return i.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:medal-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.month_records.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.month_records.subtitle",{count:i.length,total:6})}
            </div>
          </div>
        </div>

        <div class="rec-list">
          ${i.map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
        </div>
      </ha-card>
    `:this._message("mdi:medal-outline",ke(a,"empty.month_records.title"),ke(a,"empty.month_records.subtitle"))}_recordRow(e,t,a,i,s){const n=i.start_time?rt(new Date(i.start_time),e.language):void 0;return B`
      <div class="rrow">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${ke(e,a)}</div>
          <div class="meta">${i.activity?`${i.activity} · `:""}${n??""}</div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};an.styles=[_t,yt,r`
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
    `],e([he()],an.prototype,"_config",void 0),an=e([ue("suunto-month-records-card")],an);let sn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-year-records-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=bs(a,t,"training_records_year").filter(e=>e.entry);return i.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:trophy-award")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.year_records.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.year_records.subtitle",{count:i.length,total:6})}
            </div>
          </div>
        </div>

        <div class="rec-list">
          ${i.map(e=>this._recordRow(a,e.icon,e.labelKey,e.entry,e.render))}
        </div>
      </ha-card>
    `:this._message("mdi:trophy-award",ke(a,"empty.year_records.title"),ke(a,"empty.year_records.subtitle"))}_recordRow(e,t,a,i,s){const n=i.start_time?rt(new Date(i.start_time),e.language):void 0;return B`
      <div class="rrow">
        <div class="ic">${t}</div>
        <div class="info">
          <div class="name">${ke(e,a)}</div>
          <div class="meta">${i.activity?`${i.activity} · `:""}${n??""}</div>
        </div>
        <div class="rec-value">${s(i)}</div>
      </div>
    `}};sn.styles=[_t,yt,r`
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
    `],e([he()],sn.prototype,"_config",void 0),sn=e([ue("suunto-year-records-card")],sn);let nn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-running-dynamics-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.workouts_recent,s=i?a.states[i]:void 0,n=s?.attributes.workouts??[],r=s?function(e){const t=e[0]?.activity;if(!t)return;const a=e.filter(e=>e.activity===t&&e.start&&null!=e.cadence_spm&&null!=e.stride_length_m).map(e=>({t:new Date(e.start).getTime(),cadence:e.cadence_spm,stride:e.stride_length_m})).sort((e,t)=>e.t-t.t);return a.length<2?void 0:{activity:t,cadencePoints:a.map(e=>({t:e.t,v:e.cadence})),stridePoints:a.map(e=>({t:e.t,v:e.stride})),latestCadence:a[a.length-1].cadence,latestStride:a[a.length-1].stride}}(n):void 0;if(!r)return this._message("mdi:run",ke(a,"empty.running_dynamics.title"),ke(a,"empty.running_dynamics.subtitle"));const o=[{points:r.cadencePoints,colorVar:"var(--sc-pulse)"},{points:r.stridePoints,colorVar:"var(--sc-amber)"}];return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon(Aa(r.activity))}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.running_dynamics.title"))}</div>
            <div class="subtitle">
              ${ke(a,"card.running_dynamics.subtitle",{activity:r.activity,count:r.cadencePoints.length})}
            </div>
          </div>
        </div>

        ${oa(o,300,80,!1)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.cadence")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.stride_length")}</span>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${Math.round(r.latestCadence)}<span class="unit">spm</span></div>
            <div class="stat-label">${ke(a,"stat.cadence")}</div>
          </div>
          <div class="stat">
            <div class="stat-value">${r.latestStride.toFixed(2)}<span class="unit">m</span></div>
            <div class="stat-label">${ke(a,"stat.stride_length")}</div>
          </div>
        </div>
      </ha-card>
    `}};nn.styles=[_t,yt,r`
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
    `],e([he()],nn.prototype,"_config",void 0),nn=e([ue("suunto-running-dynamics-card")],nn);const rn=new Set(["unknown","unavailable",""]);let on=class extends ht{static getConfigElement(){return document.createElement("suunto-goals-overview-editor")}static getStubConfig(){return{type:"custom:suunto-goals-overview-card",goal_km:ua}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),n=i("weekly_steps"),r=this._config.units??"metric",o=[];if(s&&!rn.has(s.state)){const e=this._config.goal_km??ua,t=Number(s.state),i=Xe(t,r),n=Xe(e,r,0);o.push({key:"distance",icon:"mdi:map-marker-distance",label:ke(a,"stat.distance"),value:t,goal:e,valueLabel:`${i.value} / ${n.value} ${n.unit}`})}if(n&&!rn.has(n.state)){const e=Ie(a,this._configuredDeviceId),t=this._config.goal_steps??(e?7*e:void 0)??va,i=Number(n.state);o.push({key:"steps",icon:"mdi:shoe-print",label:ke(a,"stat.steps"),value:i,goal:t,valueLabel:`${Math.round(i).toLocaleString(a.language)} / ${t.toLocaleString(a.language)}`})}const l=i("weekly_time"),d=Ne(a,this._config,this._configuredDeviceId,"training");if(void 0!==d&&l&&!rn.has(l.state)){const e=Number(l.state);o.push({key:"training",icon:"mdi:timer-outline",label:ke(a,"stat.training_time"),value:e,goal:d,valueLabel:`${e.toLocaleString(a.language,{maximumFractionDigits:1})} / ${Ee(a,"training",d)}`})}return o.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:target")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.goals_overview.title"))}</div>
            <div class="subtitle">${ke(a,"card.goals_overview.subtitle")}</div>
          </div>
        </div>

        <div class="goals-row">
          ${o.map(e=>{const t=e.goal>0?e.value/e.goal*100:0,a=t>=100?"var(--sc-good)":"var(--sc-amber)";return B`
              <div class="goal">
                <div class="ring-wrap">
                  ${sa(t,a,84,8)}
                  <div class="ring-pct" style="color:${a}">${Math.round(t)}%</div>
                </div>
                <div class="goal-label"><ha-icon icon=${e.icon}></ha-icon>${e.label}</div>
                <div class="goal-value">${e.valueLabel}</div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:target",ke(a,"empty.goals_overview.title"))}};on.styles=[_t,yt,r`
      .goals-row {
        display: flex;
        gap: 12px;
      }
      .goal {
        flex: 1;
        min-width: 0;
        text-align: center;
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
    `],e([he()],on.prototype,"_config",void 0),on=e([ue("suunto-goals-overview-card")],on);const ln=new Set(["unknown","unavailable",""]);function dn(e,t){let a;for(const i of e)ln.has(i.state)||i.lastChanged>t||(!a||i.lastChanged>a.lastChanged)&&(a=i);return a?Number(a.state):void 0}let cn=class extends ht{constructor(){super(...arguments),this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-week-compare-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){const e=this._resolveEntities();if("error"in e||!this.hass)return;const{map:t}=e,a=t.weekly_distance,i=t.weekly_time,s=t.workouts_7d;if(!a&&!i&&!s)return;const n=[a,i,s].filter(e=>Boolean(e)),r=n.join(","),o=Date.now();if(!(r===this._historyKey&&o-this._historyFetchedAt<18e5)){this._historyKey=r,this._historyFetchedAt=o;try{const e=this.hass,t=await We(e,n,9),r=o-6048e5;this._prevDistance=a?dn(t[a]??[],r):void 0,this._prevTime=i?dn(t[i]??[],r):void 0,this._prevWorkouts=s?dn(t[s]??[],r):void 0}catch{this._prevDistance=void 0,this._prevTime=void 0,this._prevWorkouts=void 0}}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("weekly_distance"),n=i("weekly_time"),r=i("workouts_7d"),o=this._config.units??"metric",l=[];if(s&&!ln.has(s.state)&&void 0!==this._prevDistance){const e=Number(s.state),t=Xe(e,o),i=Xe(this._prevDistance,o);l.push({key:"distance",label:ke(a,"stat.distance"),now:e,prev:this._prevDistance,formatNow:`${t.value} ${t.unit}`,formatPrev:`${i.value} ${i.unit}`,formatDelta:this._pctDelta(e,this._prevDistance)})}if(n&&!ln.has(n.state)&&void 0!==this._prevTime){const e=Number(n.state);l.push({key:"time",label:ke(a,"stat.time"),now:e,prev:this._prevTime,formatNow:`${e.toFixed(1)} h`,formatPrev:`${this._prevTime.toFixed(1)} h`,formatDelta:this._pctDelta(e,this._prevTime)})}if(r&&!ln.has(r.state)&&void 0!==this._prevWorkouts){const e=Number(r.state);l.push({key:"workouts",label:ke(a,"stat.workouts"),now:e,prev:this._prevWorkouts,formatNow:String(e),formatPrev:String(this._prevWorkouts),formatDelta:this._absDelta(e,this._prevWorkouts)})}return l.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:calendar-sync")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.week_compare.title"))}</div>
            <div class="subtitle">${ke(a,"card.week_compare.subtitle")}</div>
          </div>
        </div>

        <div class="rows">
          ${l.map(e=>{const t=Math.max(e.now,e.prev,1e-4),a=e.now/t*100,i=e.prev/t*100,s=e.now>e.prev?"good":e.now<e.prev?"bad":"";return B`
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
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"week_compare.legend_now")}</span>
          <span class="legend-item"><i class="dot muted"></i>${ke(a,"week_compare.legend_prev")}</span>
        </div>
      </ha-card>
    `:this._message("mdi:calendar-sync",ke(a,"empty.week_compare.title"),ke(a,"empty.week_compare.subtitle"))}_pctDelta(e,t){if(t<=0)return e>0?"+100%":"±0%";const a=Math.round((e-t)/t*100);return 0===a?"±0%":a>0?`+${a}%`:`${a}%`}_absDelta(e,t){const a=Math.round(e-t);return 0===a?"±0":a>0?`+${a}`:String(a)}};cn.styles=[_t,yt,r`
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
        background: var(--sc-track, var(--divider-color));
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
    `],e([he()],cn.prototype,"_config",void 0),e([he()],cn.prototype,"_prevDistance",void 0),e([he()],cn.prototype,"_prevTime",void 0),e([he()],cn.prototype,"_prevWorkouts",void 0),cn=e([ue("suunto-week-compare-card")],cn);const un=new Set(["unknown","unavailable",""]);let pn=class extends ht{constructor(){super(...arguments),this._vo2maxHistory=[],this._estimatedHistory=[],this._historyFetchedAt=0}static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-fitness-trend-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&this._config&&this._maybeFetchHistory()}async _maybeFetchHistory(){if(!this.hass)return;const e=this._config?.days??90,t=`${this._configuredDeviceId??"auto"}:${e}`,a=Date.now();if(t===this._historyKey&&a-this._historyFetchedAt<6e5)return;this._historyKey=t,this._historyFetchedAt=a;const i=24*e;try{const[e,t]=await Promise.all([Be(this.hass,"suunto_app:vo2max",i,"mean"),Be(this.hass,"suunto_app:estimated_vo2max",i,"mean")]);this._vo2maxHistory=e,this._estimatedHistory=t}catch{this._vo2maxHistory=[],this._estimatedHistory=[]}}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("vo2max");if(!s||un.has(s.state))return this._message("mdi:lungs",ke(a,"empty.fitness_trend.title"),ke(a,"empty.fitness_trend.subtitle"));const n=i("estimated_vo2max"),r=i("fitness_age"),o=[];return this._vo2maxHistory.length&&o.push({points:this._vo2maxHistory,colorVar:"var(--sc-pulse)"}),this._estimatedHistory.length&&o.push({points:this._estimatedHistory,colorVar:"var(--sc-amber)"}),B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:lungs")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.fitness_trend.title"))}</div>
            <div class="subtitle">${ke(a,"card.pmc.subtitle",{days:this._config?.days??90})}</div>
          </div>
        </div>

        ${oa(o,300,80,!0)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${ke(a,"stat.vo2max")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${ke(a,"stat.estimated_vo2max")}</span>
        </div>

        <hr />
        <div class="stats">
          ${this._stat(Number(s.state).toFixed(1),"ml/kg/min",ke(a,"stat.vo2max"))}
          ${n&&!un.has(n.state)?this._stat(Number(n.state).toFixed(1),"ml/kg/min",ke(a,"stat.estimated_vo2max")):W}
          ${r&&!un.has(r.state)?this._stat(String(Math.round(Number(r.state))),"",ke(a,"stat.fitness_age")):W}
        </div>
      </ha-card>
    `}_stat(e,t,a){return B`
      <div class="stat">
        <div class="stat-value">${e}${t?B`<span class="unit">${t}</span>`:W}</div>
        <div class="stat-label">${a}</div>
      </div>
    `}};pn.styles=[_t,yt,r`
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
    `],e([he()],pn.prototype,"_config",void 0),e([he()],pn.prototype,"_vo2maxHistory",void 0),e([he()],pn.prototype,"_estimatedHistory",void 0),pn=e([ue("suunto-fitness-trend-card")],pn);const mn=new Set(["unknown","unavailable",""]);let gn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-detail-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 7}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=e=>t[e]?a.states[t[e]]:void 0,s=i("sleep_duration");if(!s||mn.has(s.state))return this._message("mdi:sleep",ke(a,"empty.sleep_readiness.title"),ke(a,"empty.sleep_readiness.subtitle"));const n=i("sleep_deep"),r=i("sleep_quality"),o=i("sleep_spo2"),l=i("sleep_avg_hr"),d=i("sleep_min_hr"),c=i("sleep_hrv"),u=i("hrv_baseline"),p=i("resting_hr"),m=i("resting_hr_baseline"),g=i("readiness"),h=i("nap_duration"),_=i("unusual_recovery"),y=Za(a,i),v=y?.sleepMin??0,b=Ue(v),f=y?.bedMs,k=y?.wakeMs,w=y?.inBedMin,x=y?.stages??[],S=void 0!==w&&w>0?Math.min(100,Math.max(0,v/w*100)):void 0,$=g&&!mn.has(g.state)?Number(g.state):void 0,z=void 0!==$?function(e,t){return t>=70?{colorVar:"var(--sc-good)",label:ke(e,"band.readiness.great")}:t>=40?{colorVar:"var(--sc-warn)",label:ke(e,"band.readiness.fair")}:{colorVar:"var(--sc-bad)",label:ke(e,"band.readiness.low")}}(a,$):void 0,j=c&&u&&!mn.has(u.state)?Number(c.state)-Number(u.state):void 0,A=p&&m&&!mn.has(m.state)?Number(p.state)-Number(m.state):void 0,T=n&&!mn.has(n.state)&&v>0?Number(n.state)/v*100:void 0,C=h&&!mn.has(h.state)?Number(h.state):void 0,N=!!h?.attributes.date&&it(new Date(h.attributes.date));return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:sleep")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.sleep_detail.title"))}</div>
            <div class="subtitle">${ke(a,"card.sleep_detail.subtitle")}</div>
          </div>
          ${void 0!==$&&z?B`
                <div class="readiness-pill" title=${ke(a,"stat.readiness")}>
                  <span class="readiness-dot" style="background:${z.colorVar}"></span>
                  <span class="rv">${Math.round($)}</span>
                  <span class="rl" style="color:${z.colorVar}">${z.label}</span>
                </div>
              `:W}
        </div>

        ${!0===s.attributes.stale&&"string"==typeof s.attributes.night?B`<div style="display:flex;flex-wrap:wrap">
              <span class="chip warn"
                ><ha-icon icon="mdi:alert-outline"></ha-icon>${ke(a,"chip.sleep_stale",{date:at(s.attributes.night,a.language)})}</span
              >
            </div>`:W}

        <div class="hero">
          <div class="hero-value">${b.value}<span class="unit">${b.unit}</span></div>
          <div class="hero-label">${ke(a,"sleep_detail.total_sleep")}</div>
          ${void 0!==T?B`<div class="hero-insight">${function(e,t){const a=String(Math.round(t));return ke(e,t>=20?"sleep_detail.insight_excellent":t>=12?"sleep_detail.insight_solid":"sleep_detail.insight_light",{pct:a})}(a,T)}</div>`:W}
        </div>

        ${void 0!==f&&void 0!==k?B`
              <div class="timing">
                <div class="timing-point">
                  <div class="tp-icon"><ha-icon icon="mdi:bed-clock"></ha-icon>${ke(a,"sleep_detail.bedtime")}</div>
                  <div class="tp-time">${tt(new Date(f),a.language)}</div>
                </div>
                <div class="timing-line">
                  ${void 0!==w?(()=>{const e=Ue(w);return B`<span class="tl-chip"
                          >${ke(a,"sleep_detail.in_bed",{duration:`${e.value} ${e.unit}`})}</span
                        >`})():W}
                </div>
                <div class="timing-point wake">
                  <div class="tp-icon">${ke(a,"sleep_detail.wake")}<ha-icon icon="mdi:weather-sunset-up"></ha-icon></div>
                  <div class="tp-time">${tt(new Date(k),a.language)}</div>
                </div>
              </div>
            `:W}

        ${x.length?B`
              <div class="stages">
                <span class="section-label">${ke(a,"sleep_detail.stages")}</span>
                ${ia(x.map(e=>({flexGrow:e.minutes,colorVar:e.colorVar,title:e.title})))}
                <div class="stage-legend">
                  ${x.map(e=>{const t=Ue(e.minutes);return B`
                      <span class="legend-item">
                        <i class="dot" style="background:${e.colorVar}"></i>${e.title} &middot;
                        ${t.value}${"h"===t.unit?"h":"m"}
                      </span>
                    `})}
                </div>
              </div>
            `:W}

        ${void 0!==S?B`
              <hr />
              <div class="efficiency-row">
                <div class="eff-ring-wrap">
                  ${sa(S,(M=S,M>=90?"var(--sc-good)":M>=75?"var(--sc-warn)":"var(--sc-bad)"),58,6)}
                  <div class="eff-ring-value">${Math.round(S)}%</div>
                </div>
                <div class="eff-text">
                  <div class="eff-title">${ke(a,"sleep_detail.efficiency")}</div>
                  <div class="eff-sub">${ke(a,"sleep_detail.efficiency_sub")}</div>
                </div>
              </div>
            `:W}

        <div>
          <span class="section-label">${ke(a,"sleep_detail.vitals")}</span>
          <div class="stats">
            ${r?this._stat(String(Math.round(Number(r.state))),"%",ke(a,"stat.quality")):W}
            ${l?this._stat(String(Math.round(Number(l.state))),"bpm",ke(a,"stat.sleep_avg_hr"),"hr"):W}
            ${d?this._stat(String(Math.round(Number(d.state))),"bpm",ke(a,"stat.sleep_min_hr"),"hr"):W}
            ${o?this._stat(String(Math.round(Number(o.state))),"%",ke(a,"stat.spo2")):W}
            ${c?this._stat(String(Math.round(Number(c.state))),"ms",void 0!==j?ke(a,"stat.hrv_delta",{delta:st(j)}):ke(a,"stat.hrv"),void 0!==j?j>=0?"good":"bad":void 0):W}
            ${p?this._stat(String(Math.round(Number(p.state))),"bpm",void 0!==A?ke(a,"stat.resting_hr_delta",{delta:st(A)}):ke(a,"stat.resting_hr"),void 0!==A?A<=0?"good":"bad":void 0):W}
          </div>
        </div>

        ${C||"on"===_?.state?B`
              <div class="footer">
                ${"on"===_?.state?B`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${ke(a,"chip.unusual_recovery")}</span>`:W}
                ${C?B`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${ke(a,N?"chip.nap":"chip.nap_earlier",{minutes:C})}
                    </span>`:W}
              </div>
            `:W}
      </ha-card>
    `;var M}_stat(e,t,a,i){return B`
      <div class="stat ${i??""}">
        <div class="stat-value">${e}<span class="unit">${t}</span></div>
        <div class="stat-label">${a}</div>
      </div>
    `}};function hn(e,t){const a=e.states[t],i=e.entities?.[t]?.device_id,s=i?e.devices?.[i]:void 0,n=s?.name_by_user||s?.name||"",r=String(a?.attributes.friendly_name??t);return n&&r.startsWith(`${n} `)?r.slice(n.length+1):r}gn.styles=[_t,yt,r`
      .header {
        position: relative;
      }
      .readiness-pill {
        flex: none;
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--sc-chip-bg);
        border-radius: 999px;
        padding: 5px 10px 5px 8px;
        align-self: flex-start;
      }
      .readiness-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex: none;
      }
      .readiness-pill .rv {
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-pill .rl {
        font-size: 0.68rem;
        font-weight: 600;
      }

      .section-label {
        display: block;
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .hero {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .hero-value {
        font-size: 2.1rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 6px;
      }
      .hero-value .unit {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-label {
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }
      .hero-insight {
        font-size: 0.84rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .timing {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .timing-point {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .timing-point.wake {
        text-align: right;
        align-items: flex-end;
      }
      .tp-icon {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--secondary-text-color);
      }
      .tp-icon ha-icon {
        --mdc-icon-size: 14px;
      }
      .timing-point.wake .tp-icon {
        flex-direction: row-reverse;
      }
      .tp-time {
        font-size: 0.98rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .timing-line {
        position: relative;
        height: 2px;
        background: var(--sc-track, var(--divider-color));
        border-radius: 2px;
      }
      .tl-chip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 999px;
        padding: 3px 9px;
        font-size: 0.64rem;
        font-weight: 600;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .stages {
        display: flex;
        flex-direction: column;
        gap: 9px;
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

      .efficiency-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .eff-ring-wrap {
        position: relative;
        width: 58px;
        height: 58px;
        flex: none;
      }
      .eff-ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .eff-title {
        font-size: 0.9rem;
        font-weight: 600;
      }
      .eff-sub {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
        margin-top: 1px;
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `],e([he()],gn.prototype,"_config",void 0),gn=e([ue("suunto-sleep-detail-card")],gn);const _n=new Set(["unknown","unavailable",""]);let yn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-gear-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 3}_rows(e){const t=this.hass,a=[];for(const i of Object.values(t.entities??{})){if(i.device_id!==e||i.platform!==xe||i.translation_key)continue;const s=t.states[i.entity_id];if(!s||!("interval_km"in s.attributes)||_n.has(s.state))continue;const n=Number(s.state);if(!Number.isFinite(n))continue;const r="number"==typeof s.attributes.interval_km&&s.attributes.interval_km>0?s.attributes.interval_km:void 0;a.push({name:hn(t,i.entity_id),activity:"string"==typeof s.attributes.activity?s.attributes.activity:void 0,km:n,interval:r,ratio:r?n/r:void 0})}return a.sort((e,t)=>(t.ratio??-1)-(e.ratio??-1))}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const t=this.hass,a=this._config.units??"metric",i=this._cap(this._rows(ze(t,this._configuredDeviceId)));if(0===i.length)return this._message("mdi:wrench-clock",ke(t,"empty.gear.title"),ke(t,"empty.gear.subtitle"));const s=e=>{const i=Xe(e,a,0);return{value:Number(i.value).toLocaleString(t.language),unit:i.unit}};return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:wrench-clock")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(t,"card.gear.title"))}</div>
            <div class="subtitle">${ke(t,"card.gear.subtitle")}</div>
          </div>
        </div>

        <div class="gear-list">
          ${i.map(e=>{const a=s(e.km),i=void 0!==e.ratio&&e.ratio>=1,n=void 0===e.ratio?"":i?"var(--sc-bad)":e.ratio>=.75?"var(--sc-warn)":"var(--sc-good)",r=void 0!==e.interval?s(Math.abs(e.interval-e.km)):void 0;return B`
              <div class="gear">
                <div class="gear-top">
                  <div class="gear-name">
                    ${e.name}${e.activity?B`<small>${e.activity}</small>`:W}
                    ${i?B`<span class="chip bad due">${ke(t,"chip.service")}</span>`:W}
                  </div>
                  <div class="gear-km">
                    <strong>${a.value}</strong>${void 0!==e.interval?B` / ${s(e.interval).value}`:W}
                    ${a.unit}
                  </div>
                </div>
                ${void 0!==e.ratio&&r?B`
                      <div class="gbar">
                        <span style="width:${Math.min(100*e.ratio,100)}%;background:${n}"></span>
                      </div>
                      <div class="gear-foot">
                        <span
                          >${ke(t,i?"gear.over":"gear.remaining",{km:`${r.value} ${r.unit}`})}</span
                        >
                        <span>${Math.round(100*e.ratio)}%</span>
                      </div>
                    `:W}
              </div>
            `})}
        </div>
      </ha-card>
    `}};yn.styles=[_t,yt,r`
      .gear-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .gear {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .gear-top {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .gear-name {
        font-size: 0.92rem;
        font-weight: 600;
        min-width: 0;
      }
      .gear-name small {
        font-weight: 400;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
        margin-left: 6px;
      }
      .chip.due {
        margin-left: 8px;
        padding: 2px 8px;
      }
      .gear-km {
        font-size: 0.8rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .gear-km strong {
        color: var(--primary-text-color);
      }
      .gbar {
        height: 8px;
        border-radius: 4px;
        background: var(--sc-track, var(--divider-color));
        overflow: hidden;
      }
      .gbar span {
        display: block;
        height: 100%;
        border-radius: 4px;
      }
      .gear-foot {
        display: flex;
        justify-content: space-between;
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `],e([he()],yn.prototype,"_config",void 0),yn=e([ue("suunto-gear-card")],yn);const vn=new Set(["unknown","unavailable",""]),bn=120,fn=28,kn=8,wn=12,xn=20;let Sn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-form-forecast-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.form_forecast?a.states[t.form_forecast]:void 0,s=Array.isArray(i?.attributes.series)?i.attributes.series.map(e=>e?.tsb).filter(e=>"number"==typeof e):[];if(!i||vn.has(i.state)||s.length<2)return this._message("mdi:chart-timeline-variant-shimmer",ke(a,"empty.form_forecast.title"));const n=Number(i.state),r="number"==typeof i.attributes.peak_tsb?i.attributes.peak_tsb:Math.max(...s),o=s.indexOf(Math.max(...s)),l="number"==typeof i.attributes.days_to_peak?i.attributes.days_to_peak:o+1,d="number"==typeof i.attributes.maintenance_tss_week?i.attributes.maintenance_tss_week:void 0,c=r>=0?"var(--sc-good)":"var(--sc-warn)",u=r>=0?"var(--sc-good-bg)":"var(--sc-warn-bg)",p=10*Math.floor(Math.min(...s,0)/10),m=Math.max(10*Math.ceil(Math.max(...s,0)/10),p+10),g=e=>fn+e/(s.length-1)*(320-fn-kn),h=e=>wn+(m-e)/(m-p)*(bn-wn-xn),_=s.map((e,t)=>`${0===t?"M":"L"}${g(t).toFixed(1)} ${h(e).toFixed(1)}`).join(" "),y=h(Math.max(p,0)),v=`${_} L${g(s.length-1).toFixed(1)} ${y.toFixed(1)} L${g(0).toFixed(1)} ${y.toFixed(1)} Z`,b=[p,(p+m)/2,m],f=[0,7,14,21,s.length-1].filter((e,t,a)=>e<s.length&&a.indexOf(e)===t);return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-timeline-variant-shimmer")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.form_forecast.title"))}</div>
            <div class="subtitle">${ke(a,"card.form_forecast.subtitle")}</div>
          </div>
        </div>

        <svg class="chart" viewBox="0 0 ${320} ${bn}" role="img" aria-label=${ke(a,"card.form_forecast.title")}>
          ${b.map(e=>q`
              <line class="grid" x1=${fn} x2=${320-kn} y1=${h(e)} y2=${h(e)}></line>
              <text class="axis" x=${fn-5} y=${h(e)+3} text-anchor="end">${st(e)}</text>
            `)}
          <path d=${v} fill=${u} stroke="none"></path>
          <path d=${_} fill="none" stroke=${c} stroke-width="2" stroke-linejoin="round"></path>
          <line
            x1=${g(o)}
            x2=${g(o)}
            y1=${h(s[o])}
            y2=${bn-xn}
            stroke=${c}
            stroke-width="1"
            stroke-dasharray="3 3"
          ></line>
          <circle cx=${g(o)} cy=${h(s[o])} r="4" fill=${c}></circle>
          <circle class="start" cx=${g(0)} cy=${h(s[0])} r="3" stroke=${c} stroke-width="2"></circle>
          ${f.map(e=>q`<text class="axis" x=${g(e)} y=${115} text-anchor=${e===s.length-1?"end":0===e?"start":"middle"}>+${e+1} d</text>`)}
        </svg>

        <div class="stats">
          <div class="stat ${n>=0?"good":"bad"}">
            <div class="stat-value">${st(n)}</div>
            <div class="stat-label">${ke(a,"stat.tomorrow")}</div>
          </div>
          <div class="stat ${r>=0?"good":"bad"}">
            <div class="stat-value">${st(r)}</div>
            <div class="stat-label">${ke(a,"stat.peak_in",{days:l})}</div>
          </div>
          ${void 0!==d?B`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(d).toLocaleString(a.language)}<span class="unit">TSS</span>
                  </div>
                  <div class="stat-label">${ke(a,"stat.maintenance")}</div>
                </div>
              `:W}
        </div>
      </ha-card>
    `}};Sn.styles=[_t,yt,r`
      .chart {
        width: 100%;
        height: auto;
        display: block;
      }
      .chart .grid {
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .chart .axis {
        font-size: 10px;
        fill: var(--secondary-text-color);
      }
      .chart .start {
        fill: var(--ha-card-background, var(--card-background-color, #fff));
      }
    `],e([he()],Sn.prototype,"_config",void 0),Sn=e([ue("suunto-form-forecast-card")],Sn);const $n=new Set(["unknown","unavailable",""]),zn={hard:"var(--sc-good)",moderate:"var(--sc-pulse)",easy:"var(--sc-warn)",rest:"var(--sc-bad)"};let jn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-daily-brief-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.daily_brief?a.states[t.daily_brief]:void 0;if(!i||$n.has(i.state))return this._message("mdi:text-box-check-outline",ke(a,"empty.daily_brief.title"));const s=t.training_suggestion?a.states[t.training_suggestion]?.state:void 0,n=s?zn[s]:void 0,r=i.state.lastIndexOf(": "),o=r>0?i.state.slice(0,r+1):i.state,l=r>0?i.state.slice(r+2):"",d=this._config.show_insight&&t.personal_insights?Va(a.states[t.personal_insights]?.attributes.insights)[0]:void 0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:text-box-check-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.daily_brief.title"))}</div>
            <div class="subtitle">
              ${new Intl.DateTimeFormat(a.language,{weekday:"long",day:"numeric",month:"long"}).format(new Date)}
            </div>
          </div>
        </div>
        <div class="brief sc-clamp">
          ${o}
          ${l?B`<span class="advice" style=${n?`color:${n}`:""}>${l}</span>`:W}
        </div>
        ${d?B`
              <div class="pattern">
                <ha-icon icon="mdi:lightbulb-on-outline"></ha-icon>
                <div>
                  <div class="pattern-label">${ke(a,"daily_brief.your_pattern")}</div>
                  <div>${function(e,t){return`${Ha(e,t)}: ${Fa(e,t)} (${La(e,t,t.with)} vs ${La(e,t,t.without)})`}(a,d)}</div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};jn.styles=[_t,yt,r`
      .brief {
        font-size: 1.05rem;
        line-height: 1.45;
        font-weight: 500;
        text-wrap: pretty;
      }
      .advice {
        font-weight: 700;
      }
      .pattern {
        display: flex;
        gap: 8px;
        align-items: flex-start;
        font-size: 0.82rem;
        line-height: 1.4;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 10px;
      }
      .pattern ha-icon {
        --mdc-icon-size: 18px;
        color: var(--sc-amber);
        flex: none;
      }
      .pattern-label {
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--sc-amber);
      }
    `],e([he()],jn.prototype,"_config",void 0),jn=e([ue("suunto-daily-brief-card")],jn);const An=new Set(["unknown","unavailable",""]);let Tn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-daily-goals-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 2}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=this._config,s=this._configuredDeviceId,n=e=>{const i=t[e]?a.states[t[e]]:void 0;return i&&!An.has(i.state)?Number(i.state):void 0},r=[],o=n("daily_steps");if(void 0!==o){const e=Me(a,i,s,"steps");r.push({key:"steps",icon:"mdi:shoe-print",label:ke(a,"stat.steps"),value:o,goal:e,valueLabel:`${Math.round(o).toLocaleString(a.language)} / ${Ee(a,"steps",e)}`})}const l=n("daily_energy");if(void 0!==l){const e=Me(a,i,s,"energy");r.push({key:"energy",icon:"mdi:fire",label:ke(a,"stat.active_kcal"),value:l,goal:e,valueLabel:`${Math.round(l).toLocaleString(a.language)} / ${e.toLocaleString(a.language)}`})}const d=n("sleep_duration");if(void 0!==d){const e=Me(a,i,s,"sleep");r.push({key:"sleep",icon:"mdi:sleep",label:ke(a,"stat.sleep"),value:d,goal:e,valueLabel:`${Re(d)} / ${Re(e)}`})}return r.length?B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:target")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.daily_goals.title"))}</div>
            <div class="subtitle">${ke(a,"card.daily_goals.subtitle")}</div>
          </div>
        </div>

        <div class="goals-row">
          ${r.map(e=>{const t=e.goal>0?e.value/e.goal*100:0,a=t>=100?"var(--sc-good)":"var(--sc-amber)";return B`
              <div class="goal">
                <div class="ring-wrap">
                  ${sa(t,a,84,8)}
                  <div class="ring-pct" style="color:${a}">${Math.round(t)}%</div>
                </div>
                <div class="goal-label"><ha-icon icon=${e.icon}></ha-icon>${e.label}</div>
                <div class="goal-value">${e.valueLabel}</div>
              </div>
            `})}
        </div>
      </ha-card>
    `:this._message("mdi:target",ke(a,"empty.daily_goals.title"))}};Tn.styles=[_t,yt,r`
      .goals-row {
        display: flex;
        gap: 12px;
      }
      .goal {
        flex: 1;
        min-width: 0;
        text-align: center;
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
    `],e([he()],Tn.prototype,"_config",void 0),Tn=e([ue("suunto-daily-goals-card")],Tn);const Cn=new Set(["unknown","unavailable",""]),Nn=960;function Mn(e){if("string"!=typeof e)return;const t=/^(\d{1,2}):(\d{2})$/.exec(e);if(!t)return;let a=60*Number(t[1])+Number(t[2])-1200;return a<0&&(a+=1440),Math.min(100,Math.max(0,a/Nn*100))}const En=e=>Math.min(100,Math.max(0,e));let Dn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-sleep-regularity-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.sleep_regularity?a.states[t.sleep_regularity]:void 0;if(!i||Cn.has(i.state)||!Number.isFinite(Number(i.state)))return this._message("mdi:bed-clock",ke(a,"empty.sleep_regularity.title"),ke(a,"empty.sleep_regularity.subtitle"));const s=Math.round(Number(i.state)),n=Ca(a,s),r=i.attributes,o=t.social_jetlag?a.states[t.social_jetlag]:void 0,l=o&&!Cn.has(o.state)&&Number.isFinite(Number(o.state))?Number(o.state):void 0,d=void 0!==l?Mn(o?.attributes.work_midpoint):void 0,c=void 0!==l?Mn(o?.attributes.free_midpoint):void 0,u=Mn(r.avg_bedtime),p=Mn(r.avg_wake_time),m="number"==typeof r.bedtime_sd_min?r.bedtime_sd_min:void 0,g="number"==typeof r.wake_time_sd_min?r.wake_time_sd_min:void 0,h=e=>e/Nn*100,_=a.language;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:bed-clock")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.sleep_regularity.title"))}</div>
            <div class="subtitle">
              ${ke(a,"sleep_regularity.subtitle",{nights:Number(r.nights)||0})}
            </div>
          </div>
        </div>

        <div class="hero">
          <div class="big">${s}</div>
          <span class="chip ${n.cls}">${n.label}</span>
        </div>

        <div class="scale-wrap">
          <div class="scale">
            <i style="width:60%;background:var(--sc-bad-bg)"></i>
            <i style="width:20%;background:var(--sc-warn-bg)"></i>
            <i style="width:20%;background:var(--sc-good-bg)"></i>
          </div>
          <div class="marker" style="left:${En(s)}%"></div>
          <div class="ticks">
            <span style="left:0;transform:none">0</span>
            <span style="left:60%">60</span>
            <span style="left:80%">80</span>
            <span style="left:100%;transform:translateX(-100%)">100</span>
          </div>
        </div>

        ${void 0!==u&&void 0!==p&&p>u?B`
              <div>
                <div class="timeline">
                  <div class="track"></div>
                  <!-- Spread (1 SD) is drawn only outside the sleep bar, so it never shows through it. -->
                  <div class="sleep" style="left:${u}%;width:${p-u}%"></div>
                  ${void 0!==m?B`<div
                        class="whisker"
                        style="left:${En(u-h(m))}%;width:${u-En(u-h(m))}%"
                      ></div>`:W}
                  ${void 0!==g?B`<div
                        class="whisker"
                        style="left:${p}%;width:${En(p+h(g))-p}%"
                      ></div>`:W}
                  ${void 0!==d&&void 0!==c?B`
                        <div
                          class="gap"
                          style="left:${Math.min(d,c)}%;width:${Math.abs(c-d)}%"
                        ></div>
                        <div class="mid work" style="left:${d}%"></div>
                        <div class="mid free" style="left:${c}%"></div>
                      `:W}
                </div>
                <div class="axis">
                  ${Array.from({length:9},(e,t)=>2*t).map(e=>B`<span style="left:${60*e/Nn*100}%"
                        >${String((20+e)%24).padStart(2,"0")}</span
                      >`)}
                </div>
              </div>
            `:W}

        <div class="chips">
          ${r.avg_bedtime?B`<span class="chip"
                >${ke(a,"sleep_regularity.bed",{time:Ea(r.avg_bedtime,_)??""})}${void 0!==m?B` ±${m} min`:W}</span
              >`:W}
          ${r.avg_wake_time?B`<span class="chip"
                >${ke(a,"sleep_regularity.wake",{time:Ea(r.avg_wake_time,_)??""})}${void 0!==g?B` ±${g} min`:W}</span
              >`:W}
          ${void 0!==l?B`<span class="chip accent"
                >${ke(a,"chip.social_jetlag",{value:Da(l)})}</span
              >`:W}
        </div>

        ${void 0!==d&&void 0!==c?B`
              <div class="legend">
                <span
                  ><i style="background:var(--sc-sleep-deep)"></i>${ke(a,"sleep_regularity.mid_work",{time:Ea(o?.attributes.work_midpoint,_)??""})}</span
                >
                <span
                  ><i style="background:var(--sc-amber)"></i>${ke(a,"sleep_regularity.mid_free",{time:Ea(o?.attributes.free_midpoint,_)??""})}</span
                >
              </div>
            `:W}
      </ha-card>
    `}};Dn.styles=[_t,yt,r`
      .hero {
        display: flex;
        align-items: flex-end;
        gap: 12px;
        flex-wrap: wrap;
      }
      .big {
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .scale-wrap {
        position: relative;
        padding-top: 12px;
      }
      .scale {
        display: flex;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
      }
      .scale i {
        display: block;
        height: 100%;
      }
      .marker {
        position: absolute;
        top: 0;
        width: 2px;
        height: 22px;
        border-radius: 1px;
        background: var(--primary-text-color);
        transform: translateX(-1px);
      }
      .ticks,
      .axis {
        position: relative;
        height: 14px;
        margin-top: 4px;
        font-size: 0.64rem;
        color: var(--secondary-text-color);
      }
      .ticks span,
      .axis span {
        position: absolute;
        transform: translateX(-50%);
      }
      .axis span:first-child {
        transform: none;
      }
      .axis span:last-child {
        transform: translateX(-100%);
      }
      .timeline {
        position: relative;
        height: 54px;
      }
      .track,
      .sleep {
        position: absolute;
        top: 18px;
        height: 16px;
        border-radius: 4px;
      }
      .track {
        left: 0;
        right: 0;
        background: var(--sc-track, var(--divider-color));
      }
      .sleep {
        background: var(--sc-sleep-light);
      }
      .whisker {
        position: absolute;
        top: 24px;
        height: 4px;
        border-radius: 2px;
        background: var(--sc-sleep-light);
        opacity: 0.45;
      }
      .mid {
        position: absolute;
        top: 10px;
        width: 3px;
        height: 32px;
        border-radius: 2px;
        transform: translateX(-1.5px);
      }
      .mid.work {
        background: var(--sc-sleep-deep);
      }
      .mid.free {
        background: var(--sc-amber);
      }
      .gap {
        position: absolute;
        top: 0;
        height: 8px;
        border: 1.5px solid var(--sc-amber);
        border-bottom: none;
        border-radius: 3px 3px 0 0;
        box-sizing: border-box;
      }
      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .legend {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .legend i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 2px;
        margin-right: 5px;
        vertical-align: -1px;
      }
    `],e([he()],Dn.prototype,"_config",void 0),Dn=e([ue("suunto-sleep-regularity-card")],Dn);const Rn=new Set(["unknown","unavailable",""]);let In=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-aerobic-decoupling-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=this._config.units??"metric",s=t.aerobic_decoupling?a.states[t.aerobic_decoupling]:void 0;if(!s||Rn.has(s.state)||!Number.isFinite(Number(s.state)))return this._message("mdi:heart-flash",ke(a,"empty.aerobic_decoupling.title"),ke(a,"empty.aerobic_decoupling.subtitle"));const n=Number(s.state),r=Na(a,n),o=s.attributes,l=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0,d=l(o.first_half_speed_kmh),c=l(o.second_half_speed_kmh),u=l(o.first_half_hr),p=l(o.second_half_hr),m=Math.max(d??0,c??0)||1,g=Math.max(u??0,p??0)||1,h="string"==typeof o.start_time?new Date(o.start_time):void 0,_=["string"==typeof o.activity?o.activity:void 0,h&&!Number.isNaN(h.getTime())?new Intl.DateTimeFormat(a.language,{weekday:"short",day:"numeric",month:"short"}).format(h):void 0,void 0!==l(o.analyzed_minutes)?ke(a,"aerobic_decoupling.analyzed",{minutes:Math.round(l(o.analyzed_minutes))}):void 0].filter(Boolean).join(" · "),y=(Array.isArray(o.history)?o.history:[]).filter(e=>e&&"number"==typeof e.decoupling_pct).slice().reverse(),v=Math.max(12,...y.map(e=>e.decoupling_pct+1)),b=(e,t,a,i,s,n)=>void 0===t||void 0===a?W:B`
            <span class="row-label">${e}</span>
            ${[t,a].map(e=>B`<div class="hbar">
                <span>${n(e)}</span>
                <div class="track"><b style="width:${e/i*100}%;background:${s}"></b></div>
              </div>`)}
          `;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:heart-flash")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.aerobic_decoupling.title"))}</div>
            <div class="subtitle">${_}</div>
          </div>
        </div>

        <div class="hero">
          <div class="big">${n.toFixed(1)}<small>%</small></div>
          <span class="chip ${r.cls}">${r.label}</span>
          <span class="hint">${ke(a,"aerobic_decoupling.hint")}</span>
        </div>

        ${void 0!==d||void 0!==u?B`
              <div class="halves">
                <span></span>
                <span class="col-head">${ke(a,"aerobic_decoupling.first_half")}</span>
                <span class="col-head">${ke(a,"aerobic_decoupling.second_half")}</span>
                ${b(ke(a,"stat.avg_speed"),d,c,m,"var(--sc-pulse)",e=>{const t=Ye(e,i);return`${t.value} ${t.unit}`})}
                ${b(ke(a,"stat.avg_hr"),u,p,g,"var(--sc-amber)",e=>`${Math.round(e)} bpm`)}
              </div>
            `:W}

        ${y.length>1?B`
              <div>
                <div class="caption">${ke(a,"aerobic_decoupling.trend",{count:y.length})}</div>
                <div class="trend">
                  ${y.map((e,t)=>{const i=e.decoupling_pct,s=Math.max(2,Math.max(0,i)/v*70),n=[e.activity,e.start_time?new Date(e.start_time).toLocaleDateString(a.language):void 0,`${i.toFixed(1)}%`].filter(Boolean).join(" · ");return B`<b
                      title=${n}
                      style="height:${s}px;background:${Na(a,i).colorVar};opacity:${t===y.length-1?1:.55}"
                    ></b>`})}
                  <div class="threshold" style="bottom:${5/v*70}px">
                    <span>${5} %</span>
                  </div>
                </div>
              </div>
            `:W}
      </ha-card>
    `}};In.styles=[_t,yt,r`
      .hero {
        display: flex;
        align-items: flex-end;
        gap: 12px;
        flex-wrap: wrap;
      }
      .big {
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .big small {
        font-size: 1rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 2px;
      }
      .hint {
        margin-left: auto;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .halves {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        gap: 8px 12px;
        align-items: center;
        font-size: 0.78rem;
      }
      .col-head {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .row-label,
      .caption {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .caption {
        margin-bottom: 4px;
      }
      .hbar {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }
      .hbar .track {
        height: 8px;
        border-radius: 4px;
        background: var(--sc-track, var(--divider-color));
        overflow: hidden;
      }
      .hbar b {
        display: block;
        height: 100%;
        border-radius: 4px;
      }
      .hbar span {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .trend {
        position: relative;
        height: ${70}px;
        display: flex;
        align-items: flex-end;
        gap: 5px;
      }
      .trend b {
        flex: 1;
        min-width: 0;
        border-radius: 3px 3px 0 0;
      }
      .threshold {
        position: absolute;
        left: 0;
        right: 0;
        border-top: 1.5px dashed var(--secondary-text-color);
        opacity: 0.6;
        pointer-events: none;
      }
      .threshold span {
        position: absolute;
        right: 0;
        top: -15px;
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
    `],e([he()],In.prototype,"_config",void 0),In=e([ue("suunto-aerobic-decoupling-card")],In);let Pn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-personal-insights-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 5}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.personal_insights?a.states[t.personal_insights]:void 0,s=this._cap(Va(i?.attributes.insights));if(!s.length)return this._message("mdi:lightbulb-on-outline",ke(a,"empty.personal_insights.title"),ke(a,"empty.personal_insights.subtitle"));const n=Number(i?.attributes.nights)||0,r=Number(i?.attributes.training_days)||0;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:lightbulb-on-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.personal_insights.title"))}</div>
            <div class="subtitle">
              ${r?ke(a,"personal_insights.subtitle_days",{nights:n,days:r}):ke(a,"personal_insights.subtitle",{nights:n})}
            </div>
          </div>
        </div>

        <div class="list">
          ${s.map(e=>{const t=Math.max(e.with,e.without)||1,i=e.favorable?"good":"bad",s=function(e){return"efficiency"===e.metric}(e);return B`
              <div class="row">
                <div class="icon-badge tiny pulse"><ha-icon .icon=${function(e){return Pa[e.condition]??"mdi:lightbulb-on-outline"}(e)}></ha-icon></div>
                <div class="cond sc-clamp">${Ha(a,e)}</div>
                <span class="chip ${i}">${Fa(a,e)}</span>
                <div class="vals ${s?"wide":""}">
                  <div class="cmp">
                    <em>${ke(a,s?"personal_insights.these_workouts":"personal_insights.these_nights")}</em>
                    <div class="track"><b style="width:${e.with/t*100}%;background:var(--sc-${i})"></b></div>
                    <span>${La(a,e,e.with)}</span>
                  </div>
                  <div class="cmp">
                    <em>${ke(a,"personal_insights.the_rest")}</em>
                    <div class="track"><b class="rest" style="width:${e.without/t*100}%"></b></div>
                    <span>${La(a,e,e.without)}</span>
                  </div>
                  ${s&&void 0!==e.with_speed_kmh&&void 0!==e.without_speed_kmh?B`<div class="count">
                        ${ke(a,"personal_insights.speed_at_hr",{with_speed:e.with_speed_kmh,with_hr:e.with_hr??"-",without_speed:e.without_speed_kmh,without_hr:e.without_hr??"-"})}
                      </div>`:W}
                  <div class="count">
                    ${ke(a,s?"personal_insights.workouts_count":"personal_insights.nights_count",{with:e.n_with,without:e.n_without})}
                  </div>
                </div>
              </div>
            `})}
        </div>

        <div class="foot">${ke(a,"personal_insights.disclaimer")}</div>
      </ha-card>
    `}};Pn.styles=[_t,yt,r`
      .list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .row {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        gap: 4px 10px;
        align-items: start;
      }
      .cond {
        font-size: 0.84rem;
        font-weight: 500;
        line-height: 1.3;
        min-width: 0;
      }
      .vals {
        grid-column: 2 / 4;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .cmp {
        display: grid;
        grid-template-columns: 74px 1fr 52px;
        align-items: center;
        gap: 8px;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      /* "2.82 m/beat" needs a wider value column than "7.6 h". */
      .vals.wide .cmp {
        grid-template-columns: 90px 1fr 92px;
      }
      .cmp em {
        font-style: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cmp .track {
        min-width: 0;
      }
      .cmp b {
        display: block;
        height: 6px;
        border-radius: 3px;
      }
      .cmp b.rest {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
      .cmp span {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        text-align: right;
      }
      .count {
        font-size: 0.64rem;
        color: var(--secondary-text-color);
        opacity: 0.8;
      }
      .foot {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 10px;
      }
    `],e([he()],Pn.prototype,"_config",void 0),Pn=e([ue("suunto-personal-insights-card")],Pn);let Vn=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-stress-today-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 4}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t}=e,a=this.hass,i=t.stress_today?a.states[t.stress_today]:void 0,s=ii(i?.attributes),n=ii(i?.attributes.yesterday);if(!s&&!n)return this._message("mdi:chart-donut",ke(a,"empty.stress_today.title"),ke(a,"empty.stress_today.subtitle"));const r=s?this._until(s):void 0,o=s?ke(a,"stress_today.subtitle_today",{time:r?tt(r,a.language):""}):ke(a,"stress_today.subtitle_waiting"),l=s??n;return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-donut")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(a,"card.stress_today.title"))}</div>
            <div class="subtitle">${o}</div>
          </div>
        </div>

        ${this._bar(l)}
        <div class="legend">
          ${Ya.map(e=>{const t=Ue(l.minutes[e]);return B`
              <div class="lg">
                <span class="dot" style="background:${ei(e)}"></span>
                <div class="lg-text">
                  <span class="stat-value">${t.value}<span class="unit">${t.unit}</span></span>
                  <span class="stat-label">${ti(a,e)}</span>
                </div>
              </div>
            `})}
        </div>

        ${s&&n?B`
              <hr />
              <div class="yday">
                <span>${ke(a,"stress_today.yesterday")}</span>
                ${this._bar(n,!0)}
                <span class="txt">${this._summary(n)}</span>
              </div>
            `:W}
      </ha-card>
    `}_until(e){if(!e.date)return;const[t,a,i]=e.date.split("-").map(Number);if(!t||!a||!i)return;const s=Ya.reduce((t,a)=>t+e.minutes[a],0);return new Date(t,a-1,i,0,s)}_bar(e,t=!1){const a=Ya.reduce((t,a)=>t+e.minutes[a],0);return B`
      <div class="bar day ${t?"thin":""}">
        ${Ya.filter(t=>e.minutes[t]>0).map(t=>B`<div class="seg" style="flex:${e.minutes[t]} 0 0;background:${ei(t)}"></div>`)}
        ${a<1440?B`<div style="flex:${1440-a} 0 0"></div>`:W}
      </div>
    `}_summary(e){const t=this.hass;return["stressed","recovering","active"].map(a=>{const i=Ue(e.minutes[a]);return`${ti(t,a)} ${i.value} ${i.unit}`}).join(" · ")}};Vn.styles=[_t,yt,r`
      .bar.day {
        gap: 2px;
      }
      .bar.thin {
        height: 6px;
        border-radius: 3px;
      }
      .legend {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 10px 14px;
      }
      .lg {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .lg-text {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .yday {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 6px 10px;
        align-items: center;
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .yday .txt {
        grid-column: 2;
        font-variant-numeric: tabular-nums;
      }
    `],e([he()],Vn.prototype,"_config",void 0),Vn=e([ue("suunto-stress-today-card")],Vn);const Hn=new Set(["unknown","unavailable",""]),Ln=[{key:"1k",label:"1K"},{key:"5k",label:"5K"},{key:"10k",label:"10K"},{key:"half_marathon",label:"distance.half_marathon"},{key:"marathon",label:"distance.marathon"}];function Fn(e){if("string"!=typeof e||!e)return null;const t=new Date(e);return Number.isNaN(t.getTime())?null:t}let On=class extends ht{static getConfigElement(){return document.createElement("suunto-device-editor")}static getStubConfig(){return{type:"custom:suunto-whats-new-card"}}setConfig(e){this._config=e,this._configuredDeviceId=e.device_id}getCardSize(){return 6}_shown(e){const t=this._config?.show;return!Array.isArray(t)||0===t.length||t.includes(e)}render(){if(!this._config||!this.hass)return W;this._syncTheme();const e=this._resolveEntities();if("error"in e)return e.error;const{map:t,ids:a}=e,i=this.hass,s=this._config.days&&this._config.days>0?this._config.days:14,n=new Date;n.setHours(0,0,0,0),n.setDate(n.getDate()-(s-1));const r=this._cap(this._items(i,t,a,Sa(i,t)).filter(e=>null===e.time||e.time>=n).sort((e,t)=>(t.time?.getTime()??1/0)-(e.time?.getTime()??1/0)));return B`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:timeline-clock-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(ke(i,"card.whats_new.title"))}</div>
            <div class="subtitle">${ke(i,"card.whats_new.subtitle",{days:s})}</div>
          </div>
        </div>
        ${r.length?B`<div class="scroll-list timeline">${this._rows(i,r)}</div>`:B`<div class="none">${ke(i,"whats_new.empty",{days:s})}</div>`}
      </ha-card>
    `}_rows(e,t){const a=[];let i;for(const s of t){const t=this._dayLabel(e,s.time);t!==i&&(a.push(B`<div class="day">${t}</div>`),i=t);const n="sport"===s.tone&&s.color?za(s.color):"";a.push(B`
        <div
          class="item ${s.entityId?"link":""}"
          role=${s.entityId?"button":"listitem"}
          tabindex=${s.entityId?"0":"-1"}
          @click=${()=>this._open(s.entityId)}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||this._open(s.entityId)}}
        >
          <div class="icon-badge tiny ${s.tone}" style=${n}><ha-icon .icon=${s.icon}></ha-icon></div>
          <div class="text">
            <div class="what">${s.title}</div>
            ${s.detail?B`<div class="detail">${s.detail}</div>`:W}
          </div>
          <div class="when">${s.time?tt(s.time,e.language):""}</div>
        </div>
      `)}return a}_open(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_dayLabel(e,t){if(!t)return ke(e,"whats_new.now");const a=new Date;a.setHours(0,0,0,0);const i=new Date(t);i.setHours(0,0,0,0);const s=Math.round((a.getTime()-i.getTime())/864e5);return 0===s?ke(e,"whats_new.today"):1===s?ke(e,"whats_new.yesterday"):t.toLocaleDateString(e.language,{weekday:"long",day:"numeric",month:"long"})}_items(e,t,a,i){const s=[],n=t.workouts_recent,r=(n?e.states[n]?.attributes.workouts:void 0)??[];for(const t of r){const a=Fn(t.start);if(!a)continue;if(this._shown("workouts")){const e=[];if(t.duration_min){const a=Ue(t.duration_min);e.push(`${a.value} ${a.unit}`)}t.tss&&e.push(`TSS ${Math.round(t.tss)}`),t.pte&&e.push(`PTE ${t.pte}`),s.push({time:a,kind:"workouts",icon:Aa(t.activity),tone:"sport",color:$a(i,t.activity),title:[t.activity??"-",t.distance_km?`${t.distance_km} km`:""].filter(Boolean).join(", "),detail:e.join(" · ")||void 0,entityId:n})}const r=Array.isArray(t.achievements)?t.achievements:[];this._shown("achievements")&&r.length&&s.push({time:a,kind:"achievements",icon:"mdi:trophy",tone:"record",title:wa(e,r,r.length),detail:[t.activity,t.route_ranking?ke(e,"achievement.rank",{rank:t.route_ranking}):void 0].filter(Boolean).join(" · "),entityId:n})}if(this._shown("records")){const a=new Set,i=[["training_records","whats_new.record"],["training_records_year","whats_new.record_year"],["training_records_month","whats_new.record_month"]];for(const[n,r]of i)for(const i of bs(e,t,n)){const o=Fn(i.entry?.start_time);if(!i.entry||!o)continue;const l=`${i.labelKey}|${i.entry.start_time}`;a.has(l)||(a.add(l),s.push({time:o,kind:"records",icon:"mdi:trophy-outline",tone:"record",title:ke(e,r,{label:ke(e,i.labelKey),value:i.render(i.entry)}),detail:i.entry.activity,entityId:t[n]}))}const n=t.best_efforts,r=n?e.states[n]?.attributes:void 0;for(const t of Ln){const a=r?.[`${t.key}_seconds`],i=Fn(a?.start_time);if(!a?.value||!i)continue;const o=t.label.includes(".")?ke(e,t.label):t.label;s.push({time:i,kind:"records",icon:"mdi:speedometer",tone:"record",title:ke(e,"whats_new.best_effort",{distance:o,time:et(a.value)}),detail:a.activity,entityId:n})}}if(this._shown("ai"))for(const[a,i]of[["ai_insight","whats_new.ai_daily"],["ai_weekly_summary","whats_new.ai_weekly"]]){const n=t[a],r=n?e.states[n]:void 0,o=Fn(r?.attributes.generated_at);r&&o&&!Hn.has(r.state)&&s.push({time:o,kind:"ai",icon:"mdi:creation",tone:"ai",title:ke(e,i),detail:r.state,entityId:n})}if(this._shown("gear"))for(const t of a){const a=e.states[t];a&&!0===a.attributes.service_due&&s.push({time:null,kind:"gear",icon:"mdi:wrench-clock",tone:"alert",title:ke(e,"whats_new.gear_due",{name:hn(e,t)}),detail:`${Math.round(Number(a.state))} km`,entityId:t})}return s}};On.styles=[_t,yt,r`
      .timeline {
        gap: 2px;
      }
      .day {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }
      .day:first-child {
        margin-top: 0;
      }
      .item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 6px 0;
        border-bottom: 1px solid var(--divider-color);
      }
      .item:last-child {
        border-bottom: 0;
      }
      .item.link {
        cursor: pointer;
      }
      .item.link:focus-visible {
        outline: 2px solid var(--sc-pulse);
        outline-offset: 2px;
      }
      .icon-badge.record {
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
      }
      .icon-badge.ai {
        background: var(--sc-pulse-bg);
        color: var(--sc-pulse);
      }
      .icon-badge.alert {
        background: var(--sc-bad-bg);
        color: var(--sc-bad);
      }
      .text {
        min-width: 0;
      }
      .what {
        font-size: 0.88rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .detail {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .when {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .none {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
      }
    `],e([he()],On.prototype,"_config",void 0),On=e([ue("suunto-whats-new-card")],On),window.customCards=window.customCards||[],window.customCards.push({type:"suunto-last-workout-card",name:"Suunto - Last Workout",description:"Summary of your most recent Suunto workout: distance, HR, training effect, weather and achievements.",preview:!0},{type:"suunto-hr-zones-card",name:"Suunto - Heart Rate Zones",description:"Time spent in each heart-rate zone during your last workout, with bpm thresholds.",preview:!0},{type:"suunto-sleep-readiness-card",name:"Suunto - Sleep & Readiness",description:"Last night's sleep stages, HRV/resting HR vs. baseline, and today's readiness score.",preview:!0},{type:"suunto-recovery-card",name:"Suunto - Recovery",description:"Recovery balance, countdown until fully recovered, and current stress level.",preview:!0},{type:"suunto-training-load-card",name:"Suunto - Training Load",description:"Fitness/fatigue/form (CTL/ATL/TSB) with a 30-day trend line and acute:chronic workload ratio.",preview:!0},{type:"suunto-week-stats-card",name:"Suunto - Week & Lifetime",description:"This week's volume plus a lifetime breakdown by activity.",preview:!0},{type:"suunto-today-card",name:"Suunto - Today",description:"Live steps, energy and heart rate snapshot for today.",preview:!0},{type:"suunto-lifetime-card",name:"Suunto - Lifetime Totals",description:"Total distance, time, energy, workouts and active days since you started.",preview:!0},{type:"suunto-recent-workouts-card",name:"Suunto - Recent Workouts",description:"A scrollable log of your last 15 workouts - activity, distance and duration.",preview:!0},{type:"suunto-elevation-card",name:"Suunto - Elevation & Climbing",description:"Ascent, descent, climb/descend times, min/max altitude and ascent rate for your last workout.",preview:!0},{type:"suunto-location-card",name:"Suunto - Start Location",description:"Where your last workout started, with a one-tap link to open it in Maps.",preview:!0},{type:"suunto-fitness-card",name:"Suunto - Fitness",description:"VO2max, estimated VO2max and fitness age, with when they were last measured.",preview:!0},{type:"suunto-last-workout-tile-card",name:"Suunto - Last Workout (compact)",description:"A single-row summary of your last workout, for denser dashboards.",preview:!0},{type:"suunto-pmc-card",name:"Suunto - Performance Management",description:"CTL/ATL/TSB plotted together over 90 days - the classic fitness/fatigue/form chart.",preview:!0},{type:"suunto-recovery-trends-card",name:"Suunto - Recovery Trends",description:"Resting heart rate and HRV trend lines over 30 days, each against its own baseline.",preview:!0},{type:"suunto-weekly-volume-card",name:"Suunto - Weekly Volume",description:"A 12-week bar chart of your training distance, with the average and total.",preview:!0},{type:"suunto-hr-curve-card",name:"Suunto - Heart Rate Curve",description:"Today's 24/7 heart rate curve, from your watch's continuous heart rate tracking.",preview:!0},{type:"suunto-sleep-trends-card",name:"Suunto - Sleep Trends",description:"Sleep duration and quality over the last 30 nights.",preview:!0},{type:"suunto-weekly-goal-card",name:"Suunto - Weekly Goal",description:"This week's distance against a target you set.",preview:!0},{type:"suunto-streak-card",name:"Suunto - Activity Streak",description:"How many consecutive days you've been active.",preview:!0},{type:"suunto-just-finished-card",name:"Suunto - Just Finished",description:"Lights up right after your watch syncs a new workout, then goes quiet again.",preview:!0},{type:"suunto-activity-trends-card",name:"Suunto - Activity Trends",description:"Daily steps and energy over the last 14 days.",preview:!0},{type:"suunto-recovery-balance-trend-card",name:"Suunto - Recovery Balance Trend",description:"Recovery balance and stress level over the last 14 days.",preview:!0},{type:"suunto-readiness-trend-card",name:"Suunto - Readiness Trend",description:"Your readiness score over the last 30 days.",preview:!0},{type:"suunto-activity-calendar-card",name:"Suunto - Activity Calendar",description:"A GitHub-style heatmap of your active days over the last 6 weeks.",preview:!0},{type:"suunto-workout-comparison-card",name:"Suunto - Workout Comparison",description:"Your last workout vs the previous one of the same activity, side by side.",preview:!0},{type:"suunto-milestones-card",name:"Suunto - By The Numbers",description:"Your lifetime distance and energy converted into fun equivalents.",preview:!0},{type:"suunto-athlete-profile-card",name:"Suunto - Training Personality",description:"Your dominant sport, schedule pattern and time-of-day, computed from your history.",preview:!0},{type:"suunto-pace-trend-card",name:"Suunto - Pace Trend",description:"Whether your pace is improving over your recent same-activity workouts.",preview:!0},{type:"suunto-lap-splits-card",name:"Suunto - Lap Splits",description:"Per-lap duration, distance and pace from your last workout, with the fastest lap highlighted.",preview:!0},{type:"suunto-training-effect-trend-card",name:"Suunto - Training Effect Trend",description:"Peak training effect and peak EPOC over the last 30 days.",preview:!0},{type:"suunto-training-status-card",name:"Suunto - Training Status",description:"Today's training suggestion and readiness in one place, with an unusual-recovery warning.",preview:!0},{type:"suunto-training-profile-card",name:"Suunto - Training Profile",description:"A five-axis radar of volume, intensity, consistency, recovery and variety, at a glance.",preview:!0},{type:"suunto-heart-rate-card",name:"Suunto - Heart Rate",description:"A clinical-monitor-style ECG trace, its beat paced by your actual current heart rate.",preview:!0},{type:"suunto-player-card",name:"Suunto - Player Card",description:"A FIFA-style trading card: an overall rating, tier and 6 stat bars computed from your training data.",preview:!0},{type:"suunto-achievements-card",name:"Suunto - Achievements",description:"20 unlockable badges plus your all-time personal records - fastest pace, biggest climb and more.",preview:!0},{type:"suunto-achievements-compact-card",name:"Suunto - Achievements (compact)",description:"The same 20 badges as a dense icon grid - no progress bars or category headers, fits without scrolling.",preview:!0},{type:"suunto-level-card",name:"Suunto - Level & XP",description:"A game-style level and XP bar powered by your lifetime training load.",preview:!0},{type:"suunto-class-card",name:"Suunto - Class",description:"An RPG character class derived from your training mix, with the build breakdown behind it.",preview:!0},{type:"suunto-next-milestone-card",name:"Suunto - Next Milestone",description:"A countdown to your next round-number lifetime distance, plus a workout-count milestone and pace-based ETA.",preview:!0},{type:"suunto-story-card",name:"Suunto - Your Suunto Story",description:"A lifetime retrospective: totals, your main activity, and your longest streak in one narrative card.",preview:!0},{type:"suunto-sleep-clock-card",name:"Suunto - Sleep Clock",description:"Last night's sleep as a 24h clock dial, from bedtime to wake, split into deep/light/REM.",preview:!0},{type:"suunto-sleep-rhythm-card",name:"Suunto - Sleep Rhythm",description:"Your last 7 nights' bedtime and wake time on a shared axis - how regular your sleep schedule really is.",preview:!0},{type:"suunto-route-card",name:"Suunto - Route",description:"Your last workout's route as a line colored by pace, from a warm fast segment to a cool slow one.",preview:!0},{type:"suunto-month-story-card",name:"Suunto - This Month",description:"Distance, time, workouts and active days for the current calendar month, plus your main activity and streak.",preview:!0},{type:"suunto-year-story-card",name:"Suunto - This Year",description:"The same totals as This Month, scoped to the current calendar year - a running year in review.",preview:!0},{type:"suunto-best-efforts-card",name:"Suunto - Best Efforts",description:"Your fastest 1K, 5K, 10K, half marathon and marathon efforts, tracked from running workouts.",preview:!0},{type:"suunto-steps-today-card",name:"Suunto - Steps Today",description:"Today's steps against a daily goal you set, with a ring and a comparison to your own 7-day average.",preview:!0},{type:"suunto-steps-trend-card",name:"Suunto - Steps Trend",description:"Daily steps over the last 14 days as a bar chart, colored by whether each day hit your goal.",preview:!0},{type:"suunto-month-records-card",name:"Suunto - Month Records",description:"This month's personal bests - fastest pace, biggest climb, longest workout and more.",preview:!0},{type:"suunto-year-records-card",name:"Suunto - Year Records",description:"This year's personal bests - the same records as Month Records, scoped to the calendar year.",preview:!0},{type:"suunto-running-dynamics-card",name:"Suunto - Running Dynamics",description:"Cadence and stride length across your recent same-activity workouts.",preview:!0},{type:"suunto-weekly-steps-goal-card",name:"Suunto - Weekly Steps Goal",description:"Your rolling 7-day step total against a weekly target you set.",preview:!0},{type:"suunto-goals-overview-card",name:"Suunto - Goals Overview",description:"Your weekly distance, step and training-time goals as rings in one card.",preview:!0},{type:"suunto-week-compare-card",name:"Suunto - Week Compare",description:"This week's distance, time and workouts against last week's.",preview:!0},{type:"suunto-fitness-trend-card",name:"Suunto - Fitness Trend",description:"VO2max and estimated VO2max over the last 90 days.",preview:!0},{type:"suunto-sleep-detail-card",name:"Suunto - Sleep Detail",description:"A single-night deep-dive: time awake in bed, sleep efficiency, and every sleep vital in one glanceable card.",preview:!0},{type:"suunto-commute-card",name:"Suunto - Commutes",description:"Money, fuel and CO2 saved by commuting under your own power, this year and this month.",preview:!0},{type:"suunto-gear-card",name:"Suunto - Gear",description:"Distance on your chain, tyres or shoes against each one's service interval.",preview:!0},{type:"suunto-form-forecast-card",name:"Suunto - Form Forecast",description:"Your form over the next four weeks if you rest from today, with the day it would peak.",preview:!0},{type:"suunto-daily-brief-card",name:"Suunto - Daily Brief",description:"One sentence for today: sleep, HRV, readiness, form and what kind of session fits.",preview:!0},{type:"suunto-ai-insight-card",name:"Suunto - AI Insight",description:"The daily AI review of your sleep, recovery, training and activity, one tab per section with its own status.",preview:!0},{type:"suunto-daily-goals-card",name:"Suunto - Daily Goals",description:"Today's steps, active calories and last night's sleep as three rings against your goals.",preview:!0},{type:"suunto-sleep-regularity-card",name:"Suunto - Sleep Regularity",description:"How steady your sleep schedule is: Sleep Regularity Index, average bed and wake times, and social jetlag.",preview:!0},{type:"suunto-aerobic-decoupling-card",name:"Suunto - Aerobic Decoupling",description:"Heart-rate drift against speed between the halves of your latest long workout, with a trend of recent ones.",preview:!0},{type:"suunto-personal-insights-card",name:"Suunto - What Works For You",description:"The clearest patterns in your own data: what goes with better or worse HRV, resting HR and sleep, and how heat and cold change your efficiency.",preview:!0},{type:"suunto-stress-today-card",name:"Suunto - Stress & Recovery",description:"Minutes recovering, active, inactive and stressed today and yesterday, like the Resources chart in the Suunto app.",preview:!0},{type:"suunto-whats-new-card",name:"Suunto - What's New",description:"One timeline of what happened lately: workouts, records, best efforts, route achievements, AI reports and gear due for a service.",preview:!0}),console.info("%c SUUNTO-CARDS %c 68 cards loaded","color: #fff; background: #d98a1d; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 6px;","color: #d98a1d; background: transparent; font-weight: 500;");
