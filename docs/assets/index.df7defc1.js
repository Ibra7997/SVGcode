import{f as e,e as t,a as n,o as r,s as a,c as o,p as i,b as s,d as c,g as l,h as u,v as d}from"./vendor.e3820820.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},g=document.querySelector("canvas"),h=document.querySelector(".details"),f=document.querySelector(".posterize"),v=document.querySelector("[for=posterize]"),y=document.querySelector(".color"),w=document.querySelector("[for=color]"),b=document.querySelector(".monochrome"),x=document.querySelector("[for=monochrome]"),L=document.querySelector(".consider-dpr"),E=document.querySelector('[for="consider-dpr"]'),S=document.querySelector(".optimize-curves"),O=document.querySelector('[for="optimize-curves"]'),k=document.querySelector("img"),M=document.querySelector(".reset-all"),j=document.querySelector(".open"),$=document.querySelector(".save"),T=document.querySelector(".copy"),P=document.querySelector(".paste"),N=document.querySelector("output"),C=document.querySelector(".debug"),q=document.querySelector("progress"),R=document.querySelector(".toast"),I=document.documentElement,z=document.querySelector("details.main"),U=document.querySelector("summary"),A=window.devicePixelRatio;const _=["en","de"],D=["en-US","de-DE"];const B=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=_[0],this.defaultLocale=D[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,r=null]=null==(e=navigator.language)?void 0:e.split("-");r&&(r=r.toUpperCase()),n&&_.includes(n)||(n=_[0]);const a={language:n,locale:r};return localStorage.setItem("language",JSON.stringify(a)),a}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale;this.translations=(await function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.d8d32229.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${e}${t?`-${t}`:""}.js`).catch((()=>function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.d8d32229.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${this.defaultLocale}.js`)))).default}t(e){return this.translations[e]}};let H=0,V=0,W=1,F={};const G=e=>(e.preventDefault(),!1),X=e=>{const t=N.querySelector("svg");if(t){for(let t=0;t<Q.length;t++)if(e.pointerId===Q[t].pointerId){Q[t]=e;break}if(2===Q.length){const e=Math.abs(Q[0].clientX-Q[1].clientX);Z>0&&(e>Z&&(W*=.995,K(W)),e<Z&&(W*=1.005,K(W))),Z=e}else if(1===Q.length){const n=Math.floor(e.offsetX-H),r=Math.floor(e.offsetY-V);t.setAttribute("viewBox",`${-1*n} ${-1*r} ${F.width} ${F.height}`)}}};N.addEventListener("pointerdown",(e=>{N.querySelector("svg")&&(Q.push(e),N.addEventListener("dragstart",G),J(),H=Math.floor(e.offsetX+F.x),V=Math.floor(e.offsetY+F.y),N.addEventListener("pointermove",X),N.style.cursor="grabbing")}));const Y=e=>{N.removeEventListener("pointermove",X),N.removeEventListener("dragstart",G),ee(e),Q.length<2&&(Z=-1),J(),N.style.cursor="grab"};N.addEventListener("pointerup",(e=>{Y(e)})),N.addEventListener("pointercancel",(e=>{Y(e)})),N.addEventListener("pointerleave",(e=>{Y(e)}));const J=()=>{const e=N.querySelector("svg");if(!e)return;const t=e.getAttribute("viewBox"),[n,r,a,o]=t.split(" ");F.x=Number(n),F.y=Number(r),F.width=Number(a),F.height=Number(o)},K=e=>{const t=N.querySelector("svg");if(!t)return;We(`${B.t("zoom")}: ${(1/e).toFixed(1)}×`,2e3),void 0===F.width&&J();const n=Math.ceil(F.width*e),r=Math.ceil(F.height*e);if(n<=0||r<=0)return;const a=Math.floor(F.x+(F.width-n)/2),o=Math.floor(F.y+(F.height-r)/2);t.setAttribute("viewBox",`${a} ${o} ${n} ${r}`)};N.addEventListener("wheel",(e=>{e.preventDefault(),W=Math.max(.1,Math.min(W*(1+.005*e.deltaY),10)),K(W)}));const Q=[];let Z=-1;const ee=e=>{for(let t=0;t<Q.length;t++)if(Q[t].pointerId===e.pointerId){Q.splice(t,1);break}},te=()=>{H=0,V=0,W=1,F={}},ne=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...r)}),t)}};
/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}(e,t)||le(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||le(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){if(e){if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(e,t):void 0}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function de(e){var t,n,r=e.sizes.shift(),a=Math.max(Math.ceil(r[0]),1),o=Math.max(Math.ceil(r[1]),1),i=[a-1,o-1,1,1],s=Date.now(),c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;c?(t=new OffscreenCanvas(1,1),n=new OffscreenCanvas(a,o)):((t=document.createElement("canvas")).width=1,t.height=1,(n=document.createElement("canvas")).width=a,n.height=o);var l=t.getContext("2d"),u=n.getContext("2d");u&&(u.fillRect.apply(u,i),l.drawImage(n,a-1,o-1,1,1,0,0,1,1));var d=l&&0!==l.getImageData(0,0,1,1).data[3],m=Date.now()-s;return c?(postMessage({width:a,height:o,benchmark:m,isTestPass:d}),!d&&e.sizes.length&&de(e)):d?e.onSuccess(a,o,m):(e.onError(a,o,m),e.sizes.length&&de(e)),d}var me=["onError","onSuccess"],pe={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},ge={};function he(e){var t=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=ie(e,me),s=null;if(!t)return!1;if(e.useWorker&&n){var c="\n            var canvasTest = ".concat(de.toString(),";\n            onmessage = function(e) {\n                canvasTest(e.data);\n            };\n        "),l=new Blob([c],{type:"application/javascript"}),u=URL.createObjectURL(l);s=new Worker(u),URL.revokeObjectURL(u),s.onmessage=function(e){var t=e.data,n=t.width,a=t.height,o=t.benchmark;t.isTestPass?(ge[r].onSuccess(n,a,o),delete ge[r]):ge[r].onError(n,a,o)}}return e.usePromise?new Promise((function(t,n){var c=ae(ae({},e),{},{onError:function(t,r,o){var i;if(0===e.sizes.length)i=!0;else{var s=se(e.sizes.slice(-1),1),c=se(s[0],2),l=c[0],u=c[1];i=t===l&&r===u}a(t,r,o),i&&n({width:t,height:r,benchmark:o})},onSuccess:function(e,n,r){o(e,n,r),t({width:e,height:n,benchmark:r})}});if(s){var l=c.onError,u=c.onSuccess;ge[r]={onError:l,onSuccess:u},s.postMessage(i)}else de(c)})):s?(ge[r]={onError:a,onSuccess:o},void s.postMessage(i)):de(e)}var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ae(ae({},pe),e);return t.sizes=ce(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),he(t)};const ve=g.getContext("2d",{desynchronized:!0});ve.scale(A,A),ve.imageSmoothingEnabled=!0;const ye=()=>{const e=Number(Ie[je.scale].value)/100;return{width:Math.ceil(A*k.naturalWidth*e),height:Math.ceil(A*k.naturalHeight*e)}},we=()=>{let e=""+(f.checked?`url('${(()=>{const e=e=>{const t=Number(e.value),n=[];for(let r=0;r<=t;r++)n[r]=(1/t*r).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(Ie[Me.red])}" />\n          <feFuncG type="discrete" tableValues="${e(Ie[Me.green])}" />\n          <feFuncB type="discrete" tableValues="${e(Ie[Me.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(Ie[Me.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(Te)){const r=Ie[t];n.initial!==Number(r.value)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e.trim()||"none"};const be=new function(){return new Worker("/assets/monochromeworker.a07b995d.js",{type:"module"})};const xe=new function(){return new Worker("/assets/colorworker.6b60ebaa.js",{type:"module"})},Le={};const Ee=(e,t,n)=>{e&&(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),N.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],n.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${n.x} ${n.y} ${n.width} ${n.height}"`)),N.classList.remove("color"),N.classList.remove("monochrome"),N.classList.add(t),N.innerHTML=e,We(`${B.t("svgSize")}: ${e.length} ${B.t("bytes")}`,3e3))},Se=async(e={})=>{N.innerHTML="",N.classList.remove("color","monochrome"),Le.current&&(clearInterval(Le.current),Le.current=null);let t=N.querySelector("img");t||(t=document.createElement("img"),t.classList.add("spinner"),t.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),N.append(t)),t.style.display="block";const n=(()=>{let{width:e,height:t}=ye();const n=L.checked?A:1;let r=1;for(;!fe({width:e,height:t});)e=Math.floor(e/2),t=Math.floor(t/2),r/=2;return g.width=e,g.height=t,ve.clearRect(0,0,e,t),ve.filter=we(),ve.drawImage(k,0,0,n*k.naturalWidth*r,n*k.naturalHeight*r,0,0,e,t),ve.getImageData(0,0,e,t)})();if(y.checked){const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},q.value=0,q.style.visibility="visible";let r="",a="",o="",i=0;Le.current&&(clearInterval(Le.current),Le.current=null),Le.current=setInterval((()=>{const e=`${r}${o}${a}`;e.length!==i&&(N.innerHTML=e,i=e.length)}),500);const s=new MessageChannel;s.port1.onmessage=({data:e})=>{const t=Math.floor(e.processed/e.total*100);if(q.value=t,e.svg){r||(r=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),F.width&&(r=r.replace(/viewBox="([^"]+)"/,`viewBox="${F.x} ${F.y} ${F.width} ${F.height}"`)));const t=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2");o+=t}e.processed===e.total&&(clearInterval(Le.current),Le.current=null,s.port1.close(),q.value=0,q.style.visibility="hidden")};const c={minPathSegments:Number(Ie[$e.minPathLenght].value),turdsize:Number(Ie[$e.turdsize].value),alphamax:Number(Ie[$e.alphamax].value),turnpolicy:Number(Ie[$e.turnpolicy].value),opttolerance:Number(Ie[$e.opttolerance].value),opticurve:S.checked?1:0};xe.postMessage({imageData:e,params:c},[n.port2,s.port2])})))(n);Ee(t,"color",e)}else{const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)};const r={turdsize:Number(Ie[$e.turdsize].value),alphamax:Number(Ie[$e.alphamax].value),turnpolicy:Number(Ie[$e.turnpolicy].value),opttolerance:Number(Ie[$e.opttolerance].value),opticurve:S.checked?1:0};be.postMessage({imageData:e,params:r},[n.port2])})))(n);Ee(t,"monochrome",e)}t.style.display="none"};const Oe=new function(){return new Worker("/assets/svgoworker.b2e746cf.js",{type:"module"})},ke=async e=>new Promise((t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},Oe.postMessage({svg:e,originalViewBox:N.dataset.originalViewBox},[n.port2])}));j.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);k.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),k.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),I.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&I.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),I.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(k.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),k.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),k.src=e}}})),$.addEventListener("click",(async()=>{try{let e=N.innerHTML,r=null;t&&(r=await showSaveFilePicker({types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),e=await ke(e);const a=new Blob([e],{type:"image/svg+xml"});await n(a,{fileName:"",description:"SVG file"},r)}catch(e){console.error(e.name,e.message)}})),P.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const r=URL.createObjectURL(n);return void(k.src=r)}})),T.addEventListener("click",(async()=>{let e=N.innerHTML;try{navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise((async t=>{e=await ke(e),t(new Blob([e],{type:"text/plain"}))})),"image/svg+xml":new Promise((async t=>{e=await ke(e),t(new Blob([e],{type:"image/svg+xml"}))}))})])}catch{e=await ke(e);const t=new Blob([e],{type:"text/plain"}),n=new Blob([e],{type:"image/svg+xml"});navigator.clipboard.write([new ClipboardItem({[n.type]:n,[t.type]:t})])}}));const Me={red:"red",green:"green",blue:"blue",alpha:"alpha"},je={scale:"scale"},$e={minPathLenght:"minPathSegments",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},Te={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},Pe={[Me.red]:{unit:"steps",initial:5,min:1,max:20},[Me.green]:{unit:"steps",initial:5,min:1,max:20},[Me.blue]:{unit:"steps",initial:5,min:1,max:20},[Me.alpha]:{unit:"steps",initial:1,min:1,max:10}},Ne={[je.scale]:{unit:"%",initial:100,min:1,max:200}},Ce={[$e.turdsize]:{unit:"pixels",initial:2,min:0,max:50},[$e.alphamax]:{unit:"",initial:1,min:0,max:1.3334},[$e.turnpolicy]:{unit:"steps",initial:4,min:0,max:6},[$e.opttolerance]:{unit:"",initial:.2,min:0,max:1},[$e.minPathLenght]:{unit:"segments",initial:0,min:0,max:30}},qe=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:u}],Re=[Object.entries(Ce),Object.entries(Pe),Object.entries(Ne),Object.entries(Te)],Ie={},ze={},Ue={},Ae=(e,t)=>{const n=B.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},_e=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},De=(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=B.t(e)||e,c.for=e;const l=document.createElement("span");ze[e]=l,l.textContent=Ae(r,i);const u=document.createElement("input");Ie[e]=u,u.id=e,u.type="range",u.class=e,r&&(u.dataset.unit=r),""===r&&(u.step=.01),u.min=a,u.max=o,u.value=i,u.addEventListener("input",(()=>{l.textContent=Ae(r,u.value)})),Object.keys(Me).includes(e)||Object.keys($e).includes(e),u.addEventListener("change",ne((async()=>{J(),await Se(F)}),250));const d=document.createElement("button");d.type="button",d.textContent=B.t("reset"),d.addEventListener("click",(async()=>{u.value=i,l.textContent=Ae(r,i),u.dispatchEvent(new Event("change"))})),c.append(l),s.append(c);const m=document.createElement("div");s.append(m),m.append(u),m.append(d),n.append(s)};f.addEventListener("change",(async()=>{const e=!f.checked;Object.keys(Me).forEach((t=>{Ie[t].disabled=e})),J(),await Se(F)})),y.addEventListener("change",(async()=>{J(),await Se(F)})),b.addEventListener("change",(async()=>{J(),await Se(F)})),L.addEventListener("change",(async()=>{J(),await Se(F)})),S.addEventListener("change",(async()=>{Ie.opttolerance.disabled=!S.checked,J(),await Se(F)}));const Be=async()=>{await B.getTranslations(),He();const e=window.matchMedia("(max-width: 400px)"),t=()=>{e.matches?z.open=!1:z.open=!0};t(),e.addEventListener("change",t),Re.forEach(((e,t)=>{const{name:n,icon:r}=qe[t],a=((e,t)=>{const n=document.createElement("details");Ue[e]=n;const r=document.createElement("summary"),a=_e(t);return r.append(a),r.append(document.createTextNode(B.t(e))),n.append(r),n})(n,r);t<2&&(a.open=!0),"colorChannels"===n?Ue.colorChannels.append(f.parentNode):"svgOptions"===n?(Ue.svgOptions.append(y.parentNode),Ue.svgOptions.append(b.parentNode)):"imageSize"===n&&Ue.imageSize.append(L.parentNode);for(const[o,i]of e)"opttolerance"===o&&Ue.svgOptions.append(S.parentNode),De(o,i,a);h.append(a)})),h.append(M.parentNode),k.addEventListener("load",(()=>{k.width=k.naturalWidth,k.height=k.naturalHeight,setTimeout((async()=>{te(),await Se()}),200)})),k.complete&&k.dispatchEvent(new Event("load"))},He=()=>{M.textContent=B.t("resetAll"),v.textContent=B.t("posterizeInputImage"),w.textContent=B.t("colorSVG"),x.textContent=B.t("monochromeSVG"),E.textContent=B.t("considerDPR"),O.textContent=B.t("opticurve"),j.innerHTML="",j.append(_e(r)),j.append(document.createTextNode(B.t("openImage"))),$.innerHTML="",$.append(_e(a)),$.append(document.createTextNode(B.t("saveSVG"))),T.innerHTML="",T.append(_e(o)),T.append(document.createTextNode(B.t("copySVG"))),P.innerHTML="",P.append(_e(i)),P.append(document.createTextNode(B.t("pasteImage"))),I.dataset.dropText=B.t("dropFileHere"),U.innerHTML="",U.append(_e(s)),U.append(document.createTextNode(B.t("tweak")))};M.addEventListener("click",(async()=>{const e=(e,t,n)=>{Ie[e].value=n,ze[e].textContent=Ae(t,n)};Re.forEach((t=>{for(const[n,r]of t)e(n,r.unit,r.initial)})),te(),await Se()})),C.addEventListener("click",(()=>{g.classList.toggle("debug"),q.classList.toggle("debug")}));let Ve=null;const We=(e,t=5e3)=>{R.innerHTML=e,R.hidden=!1,Ve&&clearTimeout(Ve),Ve=setTimeout((()=>{R.hidden=!0,R.textContent=""}),t)};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",ne((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250)),"launchQueue"in window&&p((()=>import("./filehandling.a7b7ad84.js")),["assets/filehandling.a7b7ad84.js","assets/vendor.e3820820.js"]),(async()=>{Be();(function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;return"serviceWorker"in navigator&&(i=new d("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==r||r()})),i.register({immediate:t}).then((e=>{null==a||a(e)})).catch((e=>{null==o||o(e)}))),async(e=!0)=>{}})({onOfflineReady(){We(B.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{k as i};