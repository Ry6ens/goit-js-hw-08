!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,O=Math.max,m=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function b(e){return c=e,f=setTimeout(S,t),s?g(e):u}function _(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=p();if(_(e))return A(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function A(e){return f=void 0,v&&r?g(e):(r=i=void 0,u)}function C(){var e=p(),n=_(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return b(l);if(d)return f=setTimeout(S,t),g(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?O(T(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),C.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},C.flush=function(){return void 0===f?u:A(p())},C}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var b={form:document.querySelector(".feedback-form"),CONTACT_FORM_LOCAL_STORAGE_KEY:"feedback-form-state",userData:{}};b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(b.CONTACT_FORM_LOCAL_STORAGE_KEY))),localStorage.removeItem(b.CONTACT_FORM_LOCAL_STORAGE_KEY),e.currentTarget.reset()}));b.form.addEventListener("input",n((function(e){var t=e.target;console.log(t);var n=t.value,r=t.name;b.userData[r]=n,localStorage.setItem(b.CONTACT_FORM_LOCAL_STORAGE_KEY,JSON.stringify(b.userData))}),500)),function(){var e=JSON.parse(localStorage.getItem(b.CONTACT_FORM_LOCAL_STORAGE_KEY));if(null===e)return;var t=b.form.elements;for(var n in e)e.hasOwnProperty(n)&&(t[n].value=e[n])}()}();
//# sourceMappingURL=03-feedback.16ef59ed.js.map