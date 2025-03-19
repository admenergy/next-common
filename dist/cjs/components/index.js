/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 85:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _ErrorMessage = __webpack_require__(463);
Object.keys(_ErrorMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ErrorMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorMessage[key];
    }
  });
});
var _PageLoadingIndicator = __webpack_require__(454);
Object.keys(_PageLoadingIndicator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PageLoadingIndicator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PageLoadingIndicator[key];
    }
  });
});

/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PageLoadingIndicator = PageLoadingIndicator;
var _material = __webpack_require__(85);
var _react = _interopRequireDefault(__webpack_require__(953));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: styles.centerAlignOuter
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: styles.centerAlignInner
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: styles.centerAlignContent
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 128
  }))));
}

/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ErrorMessage = ErrorMessage;
var _react = _interopRequireDefault(__webpack_require__(953));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/_react["default"].createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else if (error !== null && error !== void 0 && error.message) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/_react["default"].createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, friendly);
  }
}

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("react");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(446);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;