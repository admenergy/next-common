(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@mui/material"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@mui/material"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/next-common"] = factory(require("react"), require("@mui/material"));
	else
		root["@admenergy/next-common"] = factory(root["react"], root["@mui/material"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__155__, __WEBPACK_EXTERNAL_MODULE__823__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 823:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__823__;

/***/ }),

/***/ 155:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

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
;// ./src/components/ErrorMessage.tsx

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
;// ./src/components/PageLoadingIndicator.tsx


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
;// ./src/components/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});