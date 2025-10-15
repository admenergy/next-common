(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@mui/material"), require("notistack"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@mui/material", "notistack", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/next-common"] = factory(require("react"), require("@mui/material"), require("notistack"), require("lodash"));
	else
		root["@admenergy/next-common"] = factory(root["react"], root["@mui/material"], root["notistack"], root["lodash"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__155__, __WEBPACK_EXTERNAL_MODULE__823__, __WEBPACK_EXTERNAL_MODULE__988__, __WEBPACK_EXTERNAL_MODULE__154__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 154:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ }),

/***/ 155:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

/***/ }),

/***/ 245:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(154));
	else // removed by dead control flow
{}
})(this, (__WEBPACK_EXTERNAL_MODULE__154__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 85:
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_642__) => {

__nested_webpack_require_642__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_642__.d(__nested_webpack_exports__, {
/* harmony export */   AccessDeniedError: () => (/* binding */ AccessDeniedError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   UnauthorizedError: () => (/* binding */ UnauthorizedError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Unauthorized Error
 *
 * A request did not provide the required authentication.
 *
 * @extends Error
 */
var UnauthorizedError = /*#__PURE__*/function (_Error) {
  /**
   * Create an UnauthorizedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function UnauthorizedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[401] Unauthorized. Please sign in and try again.";
    _classCallCheck(this, UnauthorizedError);
    return _callSuper(this, UnauthorizedError, [message]);
  }
  _inherits(UnauthorizedError, _Error);
  return _createClass(UnauthorizedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Access Denied Error
 *
 * The authenticated user does not have permissions for the request.
 *
 * @extends Error
 */
var AccessDeniedError = /*#__PURE__*/function (_Error2) {
  /**
   * Create an AccessDeniedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function AccessDeniedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[403] Access Denied. You do not have permission to access this resource.";
    _classCallCheck(this, AccessDeniedError);
    return _callSuper(this, AccessDeniedError, [message]);
  }
  _inherits(AccessDeniedError, _Error2);
  return _createClass(AccessDeniedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Not Found Error
 *
 * The requested resource was not found.
 *
 * @extends Error
 */
var NotFoundError = /*#__PURE__*/function (_Error3) {
  /**
   * Create a NotFoundError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function NotFoundError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[404] Not Found.";
    _classCallCheck(this, NotFoundError);
    return _callSuper(this, NotFoundError, [message]);
  }
  _inherits(NotFoundError, _Error3);
  return _createClass(NotFoundError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ 154:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_7364__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_7364__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_7364__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_7364__.o(definition, key) && !__nested_webpack_require_7364__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_7364__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_7364__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_7364__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_7364__.d(__nested_webpack_exports__, {
  decodeQueryString: () => (/* reexport */ decodeQueryString),
  encodeForm: () => (/* reexport */ encodeForm),
  encodeQueryString: () => (/* reexport */ encodeQueryString),
  fetchJSON: () => (/* reexport */ fetchJSON),
  sget: () => (/* reexport */ sget),
  sset: () => (/* reexport */ sset)
});

;// ./app/client/decodeQueryString.ts
/**
 * Decodes a query string into an object. Starting "?" are auto-trimmed. Empty pair values are omitted.
 *
 * @param str - The query string to decode.
 *
 * @returns An object containing key-value pairs from the query string.
 *
 * @throws {TypeError} If the parameter types are bad.
 *
 * @example
 * const query = decodeQueryString("?foo=bar");
 * -> { foo: "bar" }
 */
function decodeQueryString(str) {
  var query = {};
  if (typeof str !== "string") {
    throw new TypeError("decodeQueryString(str) : 'str' must be a string.");
  }
  if (!str) return {};
  if (str.charAt(0) === "?") str = str.substring(1);
  if (!str.length) return {};
  str.split("&").forEach(function (str) {
    var pair = str.split("=");
    if (2 < pair.length) {
      throw new Error("Query string is not well-formed");
    }
    var k = decodeURIComponent(pair[0]);
    var v = decodeURIComponent(pair[1]);
    if (v) query[String(k)] = v;
  });
  return query;
}
;// ./app/client/encodeForm.ts
/**
 * @todo Not done. Needs to support: checkbox, radio, select
 *
 * Encode HTML Form
 *
 * Encodes a Form element as a plain JavaScript object
 *
 * @param {HTMLFormElement}  form  Form to encode the values of.
 * @returns {Object}  Object containing the `{ name: value }`
 *
 * @example
 * onSubmit = event => {
 *   event.preventDefault();
 *   console.log(encodeForm(event.target));
 * }
 */
function encodeForm(htmlFormElement) {
  var ret = {};
  var valueOfElement = function valueOfElement(element) {
    var type = element.getAttribute("type");
    var asNum;
    var value;
    switch (element.tagName) {
      case "INPUT":
        switch (type) {
          case "number":
            asNum = Number(element.value);
            return isNaN(asNum) ? NaN : asNum;
          case "checkbox":
            return element.checked;
          default:
            return element.value;
        }
      case "TEXTAREA":
        return element.value;
      case "SELECT":
        {
          // WONT FIX: Multi not supported.
          var selectElement = element;
          if (~selectElement.selectedIndex) {
            return selectElement.options[selectElement.selectedIndex].value;
          } else {
            return "";
          }
        }
      default:
        value = element.getAttribute("data-value");
        return typeof value === "string" ? JSON.parse(value) : "";
    }
  };
  htmlFormElement.querySelectorAll("[name]").forEach(function (element) {
    var name = element.getAttribute("name");
    if (!name) return; // only if name has content

    var arrayMode = false;
    var checkboxLike = element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio");
    var value = valueOfElement(element);
    if (checkboxLike) {
      arrayMode = true;
      value = element.value;
    }
    if (arrayMode) {
      if (typeof ret[name] === "undefined") ret[name] = [];
      if (!Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn("[SKIP] Data was set to store an array, but encountered a non-array element: ".concat(element.tagName, "[name=").concat(name, "]") + (element.tagName === "INPUT" ? "[type=".concat(element.type, "]") : ""));
        return;
      }
      ret[name].push(value);
    } else {
      if (Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn("Data was set to store a string, but encountered an array element: ".concat(element.tagName, "[name=").concat(name, "]") + (element.tagName === "INPUT" ? "[type=".concat(element.type, "]") : ""));
        return;
      }
      ret[name] = value;
    }
  });
  return ret;
}
;// ./app/client/encodeQueryString.ts
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Encodes an object into a query string or returns a string as is.
 *
 * @param data - The object to encode into a query string.
 * @param url - Optional URL to append the query string to.
 *
 * @returns The encoded query string or the original string if `data` is not an object.
 *
 * @throws {TypeError} If the parameter types are bad.
 *
 * @example
 * const url = encodeQueryString({ foo: "bar" }, "https://example.com");
 * -> "https://example.com?foo=bar"
 */
function encodeQueryString(data, url) {
  if (_typeof(data) !== "object" || data === null) {
    throw new TypeError("encodeQueryString(data, url?) : 'data' must be an object.");
  }
  if (url !== undefined && typeof url !== "string") {
    throw new TypeError("encodeQueryString(data, url?) : 'url' is optional, but must be a string.");
  }
  var query = Object.entries(data).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return value !== undefined && value !== null;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  }).join("&");
  if (url) {
    return "".concat(url, "?").concat(query);
  } else {
    return query;
  }
}
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __nested_webpack_require_7364__(154);
// EXTERNAL MODULE: ./app/ErrorTypes/index.ts
var ErrorTypes = __nested_webpack_require_7364__(85);
;// ./app/client/fetchJSON.ts
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = fetchJSON_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function fetchJSON_slicedToArray(r, e) { return fetchJSON_arrayWithHoles(r) || fetchJSON_iterableToArrayLimit(r, e) || fetchJSON_unsupportedIterableToArray(r, e) || fetchJSON_nonIterableRest(); }
function fetchJSON_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function fetchJSON_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return fetchJSON_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? fetchJSON_arrayLikeToArray(r, a) : void 0; } }
function fetchJSON_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function fetchJSON_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function fetchJSON_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function fetchJSON_typeof(o) { "@babel/helpers - typeof"; return fetchJSON_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, fetchJSON_typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Fetch [GET|POST] JSON.
 * Formats a fetch call to send & accept JSON.
 * Sets the method to POST if JSON data is provided.
 *
 * @param url The URL to fetch.
 * @param data Optional JSON data to send.
 * @param options Optional fetch options.
 *
 * @returns A Promise resolving to the JSON response.
 *
 * @throws {TypeError} If the parameter types are bad.
 * @throws {UnauthorizedError} If the response status is 401.
 * @throws {AccessDeniedError} If the response status is 403.
 * @throws {Error} If the response status is not 200-299.
 * @throws {Error} If the response is not JSON.
 *
 * @example
 * const data = await fetchJSON(`/api/session/login`, { email, password });
 * -> { success: true, message: "Login successful." }
 */
function fetchJSON(_x, _x2) {
  return _fetchJSON.apply(this, arguments);
}
function _fetchJSON() {
  _fetchJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, data) {
    var options,
      asForm,
      fetchData,
      formData,
      res,
      json,
      _json$message,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          if (!(typeof url !== "string")) {
            _context.n = 1;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'url' must be a string.");
        case 1:
          if (!(data !== undefined && (fetchJSON_typeof(data) !== "object" || data === null))) {
            _context.n = 2;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'data' is optional, but must be an object.");
        case 2:
          if (!(options !== undefined && (fetchJSON_typeof(options) !== "object" || options === null))) {
            _context.n = 3;
            break;
          }
          throw new TypeError("fetchJSON(url, data?, options?) : 'options' is optional, but must be an object.");
        case 3:
          asForm = !!options.form;
          if (asForm) {
            fetchData = (0,external_lodash_.merge)({
              method: "post"
            }, options);
          } else {
            fetchData = (0,external_lodash_.merge)({
              method: typeof data === "undefined" ? "get" : "post",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              }
            }, options);
          }
          if (asForm && data) {
            formData = new FormData();
            Object.entries(data).forEach(function (_ref) {
              var _ref2 = fetchJSON_slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              if (value instanceof FileList || Array.isArray(value)) {
                var _iterator = _createForOfIteratorHelper(value),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var v = _step.value;
                    formData.append(key, v);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                formData.append(key, value);
              }
            });
            fetchData.body = formData;
          } else {
            if (data !== undefined) {
              fetchData.body = JSON.stringify(data);
            }
          }
          _context.n = 4;
          return fetch(url, fetchData);
        case 4:
          res = _context.v;
          _context.p = 5;
          _context.n = 6;
          return res.clone().json();
        case 6:
          json = _context.v;
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          return _context.a(2, res.text().then(function (unexpectedText) {
            if (res.status === 401) {
              throw new ErrorTypes.UnauthorizedError(unexpectedText);
            }
            if (res.status === 403) {
              throw new ErrorTypes.AccessDeniedError(unexpectedText);
            }
            console.error(_t);
            throw new Error("[".concat(res.status, "] Unexpected non-json response: ") + unexpectedText);
          }));
        case 8:
          if (!(200 <= res.status && res.status < 300)) {
            _context.n = 9;
            break;
          }
          return _context.a(2, json);
        case 9:
          if (!(res.status === 401)) {
            _context.n = 10;
            break;
          }
          console.log("🐙 fetchJSON 401", json.message);
          throw new ErrorTypes.UnauthorizedError(json.message);
        case 10:
          if (!(res.status === 403)) {
            _context.n = 11;
            break;
          }
          console.log("🐙 fetchJSON 403", json.message);
          throw new ErrorTypes.AccessDeniedError(json.message);
        case 11:
          console.log("🐙 fetchJSON error", json.message);
          throw new Error((_json$message = json.message) !== null && _json$message !== void 0 ? _json$message : JSON.stringify(json));
        case 12:
          return _context.a(2);
      }
    }, _callee, null, [[5, 7]]);
  }));
  return _fetchJSON.apply(this, arguments);
}
;// ./app/client/sget.ts
/**
 * Get from storage as JSON
 *
 * @param key - The key to retrieve.
 * @param defaultValue - The default value to return if the key is not found.
 * @param storage - The storage object to retrieve the value from, defaults to localStorage.
 *
 * @returns The JSON.parsed value for the key, or the default value if not found.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sget("foo", 42);
 * -> 42
 */
function sget(key, defaultValue) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  if (!(storage instanceof Storage)) {
    throw new TypeError("sget(key, defaultValue, storage) : 'storage' must be a Storage object.");
  }
  if (typeof key !== "string") {
    throw new TypeError("sget(key, defaultValue, storage) : 'key' must be a string.");
  }
  var stored = storage.getItem(key);
  if (stored === null) return defaultValue;
  return JSON.parse(stored);
}
;// ./app/client/sset.ts
/**
 * Set to Storage as JSON
 *
 * @param key - The key to set.
 * @param value - The value to set. Will be stringified as JSON.
 * @param storage - The storage object to set the value in, defaults to localStorage.
 *
 * @returns The value that was set.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sset("foo", 42);
 * -> 42
 */
function sset(key, value) {
  var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  if (!(storage instanceof Storage)) {
    throw new TypeError("sset(key, value, storage) : 'storage' must be a Storage object.");
  }
  if (typeof key !== "string") {
    throw new TypeError("sset(key, value, storage) : 'key' must be a string.");
  }
  storage.setItem(key, JSON.stringify(value));
  return value;
}
;// ./app/client/index.ts






/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UseFetchProvider: () => (/* reexport */ UseFetchProvider),
  useBetterSnackbar: () => (/* reexport */ useBetterSnackbar),
  useFetch: () => (/* reexport */ useFetch),
  useLoadingCallback: () => (/* reexport */ useLoadingCallback)
});

// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(988);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./app/components/index.ts + 2 modules
var components = __webpack_require__(728);
;// ./app/hooks/useBetterSnackbar.tsx



function useBetterSnackbar() {
  var _useSnackbar = (0,external_notistack_.useSnackbar)(),
    enqueueSnackbar = _useSnackbar.enqueueSnackbar;
  var successSnack = (0,external_react_.useCallback)(function (message) {
    enqueueSnackbar(message, {
      variant: "success"
    });
  }, [enqueueSnackbar]);
  var errorSnack = (0,external_react_.useCallback)(function (messageOrError) {
    var message;
    var error;
    if (messageOrError instanceof Error) {
      error = messageOrError;
      message = messageOrError.message;
    } else {
      message = messageOrError;
      error = new Error(message);
    }
    enqueueSnackbar(/*#__PURE__*/external_react_default().createElement(components.ErrorMessage, {
      friendly: message,
      error: error
    }), {
      variant: "error"
    });
  }, [enqueueSnackbar]);
  return {
    successSnack: successSnack,
    errorSnack: errorSnack
  };
}
// EXTERNAL MODULE: ./node_modules/js-common/dist/js/client/index.js
var client = __webpack_require__(245);
;// ./app/hooks/RequestCoalescer.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Defines the strategy for handling multiple requests during coalescing
 */

/**
 * Options for the RequestCoalescer
 */

/**
 * Internal state for the coalescer
 */

/**
 * RequestCoalescer provides request coalescing mechanisms for batching operations.
 * All items are processed in a single execution lane regardless of their keys.
 *
 * It's particularly useful for handling API requests that arrive in bursts,
 * such as form field updates or search queries.
 */
var RequestCoalescer = /*#__PURE__*/function () {
  function RequestCoalescer(options) {
    _classCallCheck(this, RequestCoalescer);
    _defineProperty(this, "disposed", false);
    this.options = options;
    // Initialize state
    this.state = {
      userBuffer: [],
      executionBuffer: [],
      isExecuting: false,
      abortPromise: null
    };
  }

  /**
   * Add an item to be processed
   * @param item The item to add
   */
  return _createClass(RequestCoalescer, [{
    key: "add",
    value: (function () {
      var _add = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(item) {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!this.disposed) {
                _context.n = 1;
                break;
              }
              console.warn("\u26A0\uFE0F RequestCoalescer.add() called on disposed instance - ignoring");
              return _context.a(2);
            case 1:
              // Add item to user buffer
              this.state.userBuffer.push(item);

              // Handle different modes
              _t = this.options.mode;
              _context.n = _t === "first" ? 2 : _t === "first-strict" ? 4 : _t === "last" ? 6 : _t === "batch" ? 8 : 10;
              break;
            case 2:
              if (!this.state.isExecuting) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              // Execute immediately
              this.executeEffect();
              return _context.a(3, 10);
            case 4:
              if (!this.state.isExecuting) {
                _context.n = 5;
                break;
              }
              throw new Error("Request coalescer is already executing. Cannot add new items in 'first-strict' mode.");
            case 5:
              // Execute immediately
              this.executeEffect();
              return _context.a(3, 10);
            case 6:
              if (!(this.state.isExecuting && this.state.abortPromise)) {
                _context.n = 7;
                break;
              }
              _context.n = 7;
              return this.state.abortPromise;
            case 7:
              // Clear user buffer except for the last item
              if (this.state.userBuffer.length > 1) {
                this.state.userBuffer = [this.state.userBuffer[this.state.userBuffer.length - 1]];
              }
              this.executeEffect();
              return _context.a(3, 10);
            case 8:
              if (!this.state.isExecuting) {
                _context.n = 9;
                break;
              }
              return _context.a(2);
            case 9:
              // Execute immediately
              this.executeEffect();
              return _context.a(3, 10);
            case 10:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
    /**
     * Cancel any pending operations
     */
    )
  }, {
    key: "cancel",
    value: function cancel() {
      // Clear user buffer
      this.state.userBuffer = [];
      // Note: Actual request cancellation is handled by abort controller
      // in the calling code
    }

    /**
     * Clean up all resources used by the coalescer
     */
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.disposed) {
        return;
      }
      this.disposed = true;
      this.cancel();
    }

    /**
     * Execute the effect with the current buffer
     */
  }, {
    key: "executeEffect",
    value: (function () {
      var _executeEffect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this = this;
        var itemsToProcess, combined, _t2, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(this.state.userBuffer.length === 0)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              this.state.isExecuting = true;

              // Move items from user buffer to execution buffer
              this.state.executionBuffer = _toConsumableArray(this.state.userBuffer);
              this.state.userBuffer = [];

              // Determine which items to process based on mode
              _t2 = this.options.mode;
              _context2.n = _t2 === "first" ? 2 : _t2 === "first-strict" ? 2 : _t2 === "last" ? 3 : _t2 === "batch" ? 4 : 4;
              break;
            case 2:
              itemsToProcess = [this.state.executionBuffer[0]];
              return _context2.a(3, 5);
            case 3:
              itemsToProcess = [this.state.executionBuffer[this.state.executionBuffer.length - 1]];
              return _context2.a(3, 5);
            case 4:
              itemsToProcess = _toConsumableArray(this.state.executionBuffer);
              return _context2.a(3, 5);
            case 5:
              _context2.p = 5;
              if (!(this.options.combine && itemsToProcess.length > 1)) {
                _context2.n = 7;
                break;
              }
              combined = this.options.combine(itemsToProcess);
              _context2.n = 6;
              return this.options.effect([combined]);
            case 6:
              _context2.n = 8;
              break;
            case 7:
              _context2.n = 8;
              return this.options.effect(itemsToProcess);
            case 8:
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t3 = _context2.v;
              console.error("Error executing effect:", _t3);
            case 10:
              _context2.p = 10;
              // Clear execution buffer after processing
              this.state.executionBuffer = [];

              // For batch mode, if new items arrived during execution, process them
              if (this.options.mode === "batch" && this.state.userBuffer.length > 0) {
                // Schedule next batch on next tick
                queueMicrotask(function () {
                  return _this.executeEffect();
                });
              } else {
                this.state.isExecuting = false;
              }
              return _context2.f(10);
            case 11:
              return _context2.a(2);
          }
        }, _callee2, this, [[5, 9, 10, 11]]);
      }));
      function executeEffect() {
        return _executeEffect.apply(this, arguments);
      }
      return executeEffect;
    }())
  }]);
}();
;// ./app/hooks/useFetch.tsx
function useFetch_typeof(o) { "@babel/helpers - typeof"; return useFetch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, useFetch_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || useFetch_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useFetch_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return useFetch_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? useFetch_arrayLikeToArray(r, a) : void 0; } }
function useFetch_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function useFetch_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return useFetch_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (useFetch_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, useFetch_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, useFetch_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), useFetch_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", useFetch_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), useFetch_regeneratorDefine2(u), useFetch_regeneratorDefine2(u, o, "Generator"), useFetch_regeneratorDefine2(u, n, function () { return this; }), useFetch_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (useFetch_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function useFetch_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } useFetch_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { useFetch_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, useFetch_regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { useFetch_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useFetch_defineProperty(e, r, t) { return (r = useFetch_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function useFetch_toPropertyKey(t) { var i = useFetch_toPrimitive(t, "string"); return "symbol" == useFetch_typeof(i) ? i : i + ""; }
function useFetch_toPrimitive(t, r) { if ("object" != useFetch_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != useFetch_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function useFetch_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function useFetch_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { useFetch_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { useFetch_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var UseFetcherContext = /*#__PURE__*/(0,external_react_.createContext)({
  fetchAuth: void 0
});

/**
 * A custom React hook that uses `fetchAuth` / `fetchJSON` to make API calls and wraps around `useLoadingCallback`.
 *
 * @param paramsCallback - A callback function that returns an object containing the URL, data, and options for the fetch call.
 * @param watchList - Watch list like with regular useCallback.
 *
 * @prop fetchAuth? - This must be passed in the <FetchProvider value={{ fetchAuth }} />.
 *
 * @returns A hook containing: fetch function, loading state, Error, and cancel function.
 *
 * @throws TypeError If the parameter types are bad.
 * @throws UnauthorizedError If the response status is 401.
 * @throws AccessDeniedError If the response status is 403.
 * @throws TooManyRequestsError If the response status is 429.
 * @throws Error If the response status is not 200-299.
 * @throws Error If the response is not JSON.
 *
 * @example
 * const [fetchData, loading, error, cancel] = useFetch(() => ({ url: `/api/session/login`, data: { email, password } }), [email, password]);
 * -> fetchData: Function, loading: boolean, error: Error, cancel: Function
 */
function useFetch(paramsCallback, watchList) {
  var _useContext = (0,external_react_.useContext)(UseFetcherContext),
    fetchAuth = _useContext.fetchAuth;
  var _useBetterSnackbar = useBetterSnackbar(),
    errorSnack = _useBetterSnackbar.errorSnack;
  var paramsRef = (0,external_react_.useRef)(paramsCallback());
  // Update ref on every render to capture latest params
  paramsRef.current = paramsCallback();
  var abortControllerRef = (0,external_react_.useRef)(null);
  var coalescerRef = (0,external_react_.useRef)(null);

  // Create coalescer only once
  (0,external_react_.useEffect)(function () {
    if (!coalescerRef.current) {
      var mode = paramsRef.current.mode || "last";
      if (mode === "batch" && !paramsRef.current.combine) {
        throw new Error("combine function required when mode is 'batch'");
      }

      // Capture values at creation time
      var capturedFetchAuth = fetchAuth;
      var capturedErrorSnack = errorSnack;
      var capturedCombine = paramsRef.current.combine;
      coalescerRef.current = new RequestCoalescer({
        mode: mode,
        combine: capturedCombine,
        effect: function () {
          var _effect = useFetch_asyncToGenerator(/*#__PURE__*/useFetch_regenerator().m(function _callee(items) {
            var itemToProcess, abortResolve, abortPromise, _itemToProcess$auth, auth, f, options, data, _t, _t2, _t3;
            return useFetch_regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  setLoading(true);
                  setError(undefined);
                  _context.p = 1;
                  // For batch mode, we expect a single combined item
                  // For other modes, we process the items according to the mode
                  itemToProcess = items[0]; // Get the first item to process
                  _t = itemToProcess.validate;
                  if (!_t) {
                    _context.n = 3;
                    break;
                  }
                  _context.n = 2;
                  return itemToProcess.validate();
                case 2:
                  _t = !_context.v;
                case 3:
                  if (!_t) {
                    _context.n = 4;
                    break;
                  }
                  return _context.a(2);
                case 4:
                  // Create abort promise for tracking cancellation
                  abortResolve = null;
                  abortPromise = new Promise(function (resolve) {
                    abortResolve = resolve;
                  }); // Store abort promise in coalescer state
                  if (coalescerRef.current) {
                    coalescerRef.current.state.abortPromise = abortPromise;
                  }

                  // Cancel any existing request
                  if (!abortControllerRef.current) {
                    _context.n = 5;
                    break;
                  }
                  abortControllerRef.current.abort();
                  // Wait a tick for abort to propagate
                  _context.n = 5;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 0);
                  });
                case 5:
                  // Create new AbortController for this request
                  abortControllerRef.current = new AbortController();
                  _context.p = 6;
                  auth = (_itemToProcess$auth = itemToProcess.auth) !== null && _itemToProcess$auth !== void 0 ? _itemToProcess$auth : true;
                  f = auth ? capturedFetchAuth : client.fetchJSON;
                  if (f) {
                    _context.n = 7;
                    break;
                  }
                  throw new Error("No fetchAuth function provided.");
                case 7:
                  // Merge options with AbortSignal
                  options = _objectSpread(_objectSpread({}, itemToProcess.options), {}, {
                    signal: abortControllerRef.current.signal
                  });
                  _context.n = 8;
                  return f(itemToProcess.url, itemToProcess.data, options);
                case 8:
                  data = _context.v;
                  if (!itemToProcess.ok) {
                    _context.n = 9;
                    break;
                  }
                  _context.n = 9;
                  return itemToProcess.ok(data);
                case 9:
                  return _context.a(2, data);
                case 10:
                  _context.p = 10;
                  _t2 = _context.v;
                  if (!(_t2 instanceof Error && _t2.name === "AbortError")) {
                    _context.n = 11;
                    break;
                  }
                  return _context.a(2);
                case 11:
                  if (!itemToProcess.error) {
                    _context.n = 13;
                    break;
                  }
                  _context.n = 12;
                  return itemToProcess.error(_t2);
                case 12:
                  _context.n = 14;
                  break;
                case 13:
                  capturedErrorSnack(_t2);
                case 14:
                  throw _t2;
                case 15:
                  _context.p = 15;
                  abortControllerRef.current = null;
                  if (abortResolve) abortResolve();
                  return _context.f(15);
                case 16:
                  _context.n = 18;
                  break;
                case 17:
                  _context.p = 17;
                  _t3 = _context.v;
                  if (_t3 instanceof Error && _t3.name !== "AbortError") {
                    setError(_t3 instanceof Error ? _t3 : new Error(String(_t3)));
                  }
                  throw _t3;
                case 18:
                  _context.p = 18;
                  setLoading(false);
                  return _context.f(18);
                case 19:
                  return _context.a(2);
              }
            }, _callee, null, [[6, 10, 15, 16], [1, 17, 18, 19]]);
          }));
          function effect(_x) {
            return _effect.apply(this, arguments);
          }
          return effect;
        }()
      });
    }

    // Only dispose on component unmount
    return function () {
      if (coalescerRef.current) {
        coalescerRef.current.dispose();
        coalescerRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var cancel = function cancel() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (coalescerRef.current) {
      coalescerRef.current.cancel();
    }
  };
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var fetchCallback = (0,external_react_.useCallback)(/*#__PURE__*/useFetch_asyncToGenerator(/*#__PURE__*/useFetch_regenerator().m(function _callee2() {
    var currentParams, _t4;
    return useFetch_regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (coalescerRef.current) {
            _context2.n = 1;
            break;
          }
          throw new Error("RequestCoalescer not initialized");
        case 1:
          currentParams = paramsRef.current;
          _context2.p = 2;
          _context2.n = 3;
          return coalescerRef.current.add(currentParams);
        case 3:
          _context2.n = 7;
          break;
        case 4:
          _context2.p = 4;
          _t4 = _context2.v;
          // Handle first-strict mode errors
          setError(_t4 instanceof Error ? _t4 : new Error(String(_t4)));
          if (!currentParams.error) {
            _context2.n = 6;
            break;
          }
          _context2.n = 5;
          return currentParams.error(_t4);
        case 5:
          _context2.n = 7;
          break;
        case 6:
          errorSnack(_t4);
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4]]);
  })), [errorSnack]);
  return [fetchCallback, loading, error, cancel];
}
function UseFetchProvider(_ref2) {
  var children = _ref2.children,
    fetchAuth = _ref2.fetchAuth;
  return /*#__PURE__*/external_react_default().createElement(UseFetcherContext.Provider, {
    value: {
      fetchAuth: fetchAuth
    }
  }, children);
}
;// ./app/hooks/useLoadingCallback.tsx
function useLoadingCallback_toConsumableArray(r) { return useLoadingCallback_arrayWithoutHoles(r) || useLoadingCallback_iterableToArray(r) || useLoadingCallback_unsupportedIterableToArray(r) || useLoadingCallback_nonIterableSpread(); }
function useLoadingCallback_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useLoadingCallback_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function useLoadingCallback_arrayWithoutHoles(r) { if (Array.isArray(r)) return useLoadingCallback_arrayLikeToArray(r); }
function useLoadingCallback_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return useLoadingCallback_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (useLoadingCallback_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, useLoadingCallback_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, useLoadingCallback_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), useLoadingCallback_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", useLoadingCallback_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), useLoadingCallback_regeneratorDefine2(u), useLoadingCallback_regeneratorDefine2(u, o, "Generator"), useLoadingCallback_regeneratorDefine2(u, n, function () { return this; }), useLoadingCallback_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (useLoadingCallback_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function useLoadingCallback_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } useLoadingCallback_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { useLoadingCallback_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, useLoadingCallback_regeneratorDefine2(e, r, n, t); }
function useLoadingCallback_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function useLoadingCallback_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { useLoadingCallback_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { useLoadingCallback_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function useLoadingCallback_slicedToArray(r, e) { return useLoadingCallback_arrayWithHoles(r) || useLoadingCallback_iterableToArrayLimit(r, e) || useLoadingCallback_unsupportedIterableToArray(r, e) || useLoadingCallback_nonIterableRest(); }
function useLoadingCallback_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useLoadingCallback_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return useLoadingCallback_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? useLoadingCallback_arrayLikeToArray(r, a) : void 0; } }
function useLoadingCallback_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function useLoadingCallback_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function useLoadingCallback_arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var DEV = "production" !== "production";

/**
 * A wrapper for `useCallback` that provides a loading state and error Snackbars.
 *
 * @param callback - The callback function.
 * @param watchList - Watch list like with regular useCallback.
 *
 * @returns A hook containing: wrapped callback, loading state, and Error.
 */
function useLoadingCallback(callback, watchList) {
  if (DEV) {
    if (typeof callback !== "function") {
      throw new TypeError("useLoadingCallback(callback, watchList) : 'callback' must be a function.");
    }
    if (!Array.isArray(watchList)) {
      throw new TypeError("useLoadingCallback(callback, watchList) : 'watchList' must be an array.");
    }
  }
  var _useBetterSnackbar = useBetterSnackbar(),
    errorSnack = _useBetterSnackbar.errorSnack;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = useLoadingCallback_slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)(null),
    _useState4 = useLoadingCallback_slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var wrappedCallback = (0,external_react_.useCallback)(/*#__PURE__*/useLoadingCallback_asyncToGenerator(/*#__PURE__*/useLoadingCallback_regenerator().m(function _callee() {
    var result,
      errorInstance,
      _args = arguments,
      _t;
    return useLoadingCallback_regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          setLoading(true);
          _context.p = 1;
          _context.n = 2;
          return callback.apply(void 0, _args);
        case 2:
          result = _context.v;
          setError(null);
          return _context.a(2, result);
        case 3:
          _context.p = 3;
          _t = _context.v;
          errorInstance = _t instanceof Error ? _t : new Error(String(_t));
          errorSnack(errorInstance);
          setError(errorInstance);
        case 4:
          _context.p = 4;
          setLoading(false);
          return _context.f(4);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3, 4, 5]]);
  })), // eslint-disable-next-line react-hooks/exhaustive-deps
  [errorSnack].concat(useLoadingCallback_toConsumableArray(watchList)));
  return [wrappedCallback, loading, error];
}
;// ./app/hooks/index.ts




/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorMessage: () => (/* reexport */ ErrorMessage),
  PageLoadingIndicator: () => (/* reexport */ PageLoadingIndicator)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// ./app/components/ErrorMessage.tsx

/**
 * A user-friendly error message.
 *
 * @example
 * <ErrorMessage friendly="Oops! Something went wrong." error={new Error("Detailed error message")} />
 */
function ErrorMessage(_ref) {
  var friendly = _ref.friendly,
    error = _ref.error;
  if (error instanceof Error) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/external_react_default().createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else if (error !== null && error !== void 0 && error.message) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/external_react_default().createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else {
    return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, friendly);
  }
}
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(823);
;// ./app/components/PageLoadingIndicator.tsx


var styles = {
  centerAlignOuter: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexFlow: "column"
  },
  centerAlignInner: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    textAlign: "center"
  },
  centerAlignContent: {
    "& > *": {
      textAlign: "initial"
    }
  },
  panelRoot: {
    maxWidth: "600px"
  }
};

/**
 * Represents a component that displays a loading indicator.
 * This component is designed to be centered on the page and shows a circular progress indicator.
 *
 * @returns A React element that renders a loading indicator.
 * @example
 * ```tsx
 * <PageLoadingIndicator />
 * ```
 */
function PageLoadingIndicator() {
  return /*#__PURE__*/external_react_default().createElement(material_.Box, {
    sx: styles.centerAlignOuter
  }, /*#__PURE__*/external_react_default().createElement(material_.Box, {
    sx: styles.centerAlignInner
  }, /*#__PURE__*/external_react_default().createElement(material_.Box, {
    sx: styles.centerAlignContent
  }, /*#__PURE__*/external_react_default().createElement(material_.CircularProgress, {
    size: 128
  }))));
}
;// ./app/components/index.ts



/***/ }),

/***/ 823:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__823__;

/***/ }),

/***/ 988:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__988__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport module object */ _components__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   hooks: () => (/* reexport module object */ _hooks__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(728);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});