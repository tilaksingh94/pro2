module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Er8+");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Er8+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_config_api_AuthorizedGet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a1wn");
/* harmony import */ var _components_config_api_AuthorizedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TMcN");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Register_step_1 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      entityType: [],
      entity_type_id_fk: '',
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.UpdateFunction = this.UpdateFunction.bind(this);
  }

  handleChange(event) {
    this.setState({
      entity_type_id_fk: event.target.value
    });
  }

  UpdateFunction() {
    this.setState({
      loading: true
    });

    if (this.state.entity_type_id_fk !== "") {
      const DataSend = {
        entity_type_id_fk: this.state.entity_type_id_fk
      };
      Object(_components_config_api_AuthorizedPost__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('UpdateUserDetails', 'POST', DataSend).then(result => {
        let responseJson = result;

        if (responseJson.success) {
          if (responseJson.data.entity_type_id_fk == 3) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/dashboard');
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/register/steps');
          }
        }
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  async componentDidMount() {
    Object(_components_config_api_AuthorizedGet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('entity-type').then(result => {
      this.setState({
        entityType: result.data
      });
    });
  }

  render() {
    console.log(this.state.entity_type_id_fk);
    const {
      entityType
    } = this.state;
    let entityTypeOption = '';

    if (entityType) {
      entityTypeOption = Object.entries(entityType).map(([key, value]) => __jsx("label", {
        className: "radio_button_container col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-4 "
      }, __jsx("div", {
        className: "popular-category h-100 "
      }, value.name, __jsx("input", {
        type: "radio",
        name: "entity_type_id_fk" // checked={this.state.entity_type_id_fk === value.id}
        ,
        onChange: this.handleChange,
        value: value.id
      }), __jsx("span", {
        className: "checkmark"
      }))));
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
      spinning: this.state.loading,
      size: "large"
    }, __jsx("div", null, __jsx("div", {
      className: "site-blocks-cover inner-page-cover overlay bg-dark",
      "data-aos": "fade",
      "data-stellar-background-ratio": "0.5"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center justify-content-center text-center"
    }, __jsx("div", {
      className: "col-md-10 "
    }, __jsx("div", {
      className: "row"
    }, entityTypeOption), __jsx("div", {
      className: "row "
    }, __jsx("div", {
      className: "col-md-12 pull-right text-right"
    }, __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "large",
      loading: this.state.loading,
      onClick: this.UpdateFunction
    }, " Continue ")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register_step_1);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "TMcN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedPost; });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XrO7");

async function AuthorizedPost(type, MethodName, userData) {
  return new Promise((resolve, reject) => {
    fetch(Object(_BaseUrl__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), {
      method: MethodName,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(response => response.json()).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "XrO7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL = type => {
  return 'http://127.0.0.1:5050/api/' + type;
};

/* harmony default export */ __webpack_exports__["a"] = (URL);

/***/ }),

/***/ "a1wn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedGet; });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XrO7");

async function AuthorizedGet(type, data = 'GET') {
  return new Promise((resolve, reject) => {
    fetch(Object(_BaseUrl__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), {
      method: data,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });