function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var a={select:document.querySelector(".js-breed-select"),loader:document.querySelector(".js-loader-text"),errorMessage:document.querySelector(".js-text-error")},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var r=l.default(e,t,"get");return s.default(e,r)};var l=u(n("fExtF")),s=u(n("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,r){c.default(e,t),t.set(e,r)};var f,c=(f=n("7K24o"))&&f.__esModule?f:{default:f};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){var o=v.default(e,t,"set");return h.default(e,o,r),r};var v=_(n("fExtF")),h=_(n("3LGG3"));function _(e){return e&&e.__esModule?e:{default:e}}var w=new WeakMap,y=new WeakMap;function b(e){const t=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");a.select.insertAdjacentHTML("beforeend",t)}(new class{fetchBreeds(){const t=new URLSearchParams({api_key:e(i)(this,w)});return fetch(`${e(i)(this,y)}breeds?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){e(d)(this,w,{writable:!0,value:void 0}),e(d)(this,y,{writable:!0,value:void 0}),e(p)(this,w,"live_gUyKMIPXYlwzs67KbUZ11vjeXdPwKjUV4J7bV3JMCjqyz4pvxI3vRy4gbyMof5Jn"),e(p)(this,y,"https://api.thecatapi.com/v1/")}}).fetchBreeds().then((e=>{b(e),a.loader.classList.add("is-hidden")})).catch(a.errorMessage.classList.remove("is-hidden")),console.log(a);
//# sourceMappingURL=index.2747f97f.js.map
