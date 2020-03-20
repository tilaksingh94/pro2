module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("LRFU");


/***/ }),

/***/ "LRFU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  return __jsx("div", null, __jsx("div", {
    class: "site-blocks-cover inner-page-cover overlay bg-dark",
    style: {
      "background-image": "url(images/hero_1.jpg)"
    },
    "data-aos": "fade",
    "data-stellar-background-ratio": "0.5"
  }, __jsx("div", {
    class: "container"
  }, __jsx("div", {
    class: "row align-items-center justify-content-center text-center"
  }, __jsx("div", {
    class: "col-md-10"
  }, __jsx("div", {
    class: "row justify-content-center mb-1"
  }, __jsx("div", {
    class: "col-md-10 text-center"
  }, __jsx("h1", {
    "data-aos": "fade-up"
  }, "  GYM ", __jsx("span", {
    class: "typed-words"
  }, "At Nearby You"), "  "))))))), __jsx("div", {
    class: "site-section bg-light"
  }, __jsx("div", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-6 mb-5"
  }, __jsx("form", {
    action: "#",
    class: "p-5 bg-white",
    style: {
      "margin-top": "-150px"
    }
  }, __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-6 mb-3 mb-md-0"
  }, __jsx("label", {
    class: "text-black",
    for: "fname"
  }, "First Name"), __jsx("input", {
    type: "text",
    id: "fname",
    class: "form-control"
  })), __jsx("div", {
    class: "col-md-6"
  }, __jsx("label", {
    class: "text-black",
    for: "lname"
  }, "Last Name"), __jsx("input", {
    type: "text",
    id: "lname",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("label", {
    class: "text-black",
    for: "email"
  }, "Email"), __jsx("input", {
    type: "email",
    id: "email",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("label", {
    class: "text-black",
    for: "pass1"
  }, "Password"), __jsx("input", {
    type: "password",
    id: "pass1",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("label", {
    class: "text-black",
    for: "pass2"
  }, "Re-type Password"), __jsx("input", {
    type: "password",
    id: "pass2",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("input", {
    type: "submit",
    value: "Sign Up",
    class: "btn btn-primary btn-md text-white"
  }))))), __jsx("div", {
    class: "col-md-6 mb-5"
  }, __jsx("form", {
    action: "#",
    class: "p-5 bg-white",
    style: {
      "margin-top": "-150px"
    }
  }, __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("label", {
    class: "text-black",
    for: "email"
  }, "Email"), __jsx("input", {
    type: "email",
    id: "email2",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("label", {
    class: "text-black",
    for: "pass1"
  }, "Password"), __jsx("input", {
    type: "password",
    id: "pass3",
    class: "form-control"
  }))), __jsx("div", {
    class: "row form-group"
  }, __jsx("div", {
    class: "col-md-12"
  }, __jsx("input", {
    type: "submit",
    value: "Log In",
    class: "btn btn-primary btn-md text-white"
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });