/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

var _vanillaLazyload = __webpack_require__(2);

var _vanillaLazyload2 = _interopRequireDefault(_vanillaLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lazyLoadInstance = new _vanillaLazyload2.default({
    elements_selector: ".lazy-image"
});

// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"src",i(t,e.data_src)),t.load()}},b=function(t,e){var n,o,r=e._settings,a=t.tagName,s=m[a];if(s)return s(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=i(t,e.data_src),o=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,i=e?r.callback_loaded:r.callback_error,s=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(s,r.class_loading),h(s,a),d(i,s),f(n,-1)},I=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},k=["IMG","IFRAME","VIDEO"],A=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},L=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){A(t,e),L(t)},n),l(t,o))},z=function(t,e,n){var o=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),h(t,o.class_loading)),b(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t),d(o.callback_set,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?x(t,e):A(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&L(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=["IMG","IFRAME"],C=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return M.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=C(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==N.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),z(t,n))}),this._elements=C(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){A(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(M,window.lazyLoadOptions),M});
//# sourceMappingURL=lazyload.min.js.map


/***/ })
/******/ ]);