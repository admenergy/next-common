import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE__mui_material_c999aba1__ from "@mui/material";
/******/ var __webpack_modules__ = ({

/***/ 649:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
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
var external_react_ = __webpack_require__(649);
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
    return /*#__PURE__*/external_react_["default"].createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/external_react_["default"].createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/external_react_["default"].createElement("div", null, /*#__PURE__*/external_react_["default"].createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else if (error !== null && error !== void 0 && error.message) {
    return /*#__PURE__*/external_react_["default"].createElement("div", {
      style: {
        display: "flex",
        flexFlow: "column"
      }
    }, /*#__PURE__*/external_react_["default"].createElement("b", null, friendly), (error === null || error === void 0 ? void 0 : error.message) && /*#__PURE__*/external_react_["default"].createElement("div", null, /*#__PURE__*/external_react_["default"].createElement("pre", null, error === null || error === void 0 ? void 0 : error.message)));
  } else {
    return /*#__PURE__*/external_react_["default"].createElement(external_react_["default"].Fragment, null, friendly);
  }
}
;// external "@mui/material"
const material_namespaceObject = __WEBPACK_EXTERNAL_MODULE__mui_material_c999aba1__;
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
  return /*#__PURE__*/external_react_["default"].createElement(material_namespaceObject.Box, {
    sx: styles.centerAlignOuter
  }, /*#__PURE__*/external_react_["default"].createElement(material_namespaceObject.Box, {
    sx: styles.centerAlignInner
  }, /*#__PURE__*/external_react_["default"].createElement(material_namespaceObject.Box, {
    sx: styles.centerAlignContent
  }, /*#__PURE__*/external_react_["default"].createElement(material_namespaceObject.CircularProgress, {
    size: 128
  }))));
}
;// ./app/components/index.ts


var __webpack_exports__ErrorMessage = __webpack_exports__.ErrorMessage;
var __webpack_exports__PageLoadingIndicator = __webpack_exports__.PageLoadingIndicator;
export { __webpack_exports__ErrorMessage as ErrorMessage, __webpack_exports__PageLoadingIndicator as PageLoadingIndicator };
