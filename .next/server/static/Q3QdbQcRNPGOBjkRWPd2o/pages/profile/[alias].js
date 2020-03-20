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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yk5C");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ }),

/***/ "szam":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_img-bdb4c9d05aa13e60ac9675554bde690a.jpg";

/***/ }),

/***/ "yk5C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_config_api_AuthorizedGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a1wn");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var banner_img = __webpack_require__("szam");



const AliasConst = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return router.query;
};

class Profile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      alias: AliasConst,
      loading: true,
      imageUrl: null,
      name: null
    };
  }

  async componentDidMount() {
    const alias = this.state.alias;
    const url = 'search-result/' + alias;
    this.setState({
      loading: true
    });
    Object(_components_config_api_AuthorizedGet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(url, 'POST').then(result => {
      this.setState({
        loading: false // items: result.data[0],
        // imageUrl: result.data[0].image['img'],
        // name: result.data[0].name,

      });
    });
  }

  render() {
    const {
      imageUrl,
      alias,
      name
    } = this.state;
    return __jsx("div", null, __jsx("div", {
      style: {
        backgroundImage: 'url(' + banner_img + ')'
      },
      className: "site-blocks-cover inner-page-cover overlay bg-dark",
      "data-aos": "fade",
      "data-stellar-background-ratio": "0.5"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center justify-content-center text-center"
    }, __jsx("div", {
      className: "col-md-3 col-5 col-sm-5 offset-md-9 offset-sm-6  offset-2 mt-13"
    }, __jsx("div", {
      className: "card display_img"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
      spinning: this.state.loading
    }, __jsx("img", {
      className: "card-img-top",
      src: imageUrl,
      alt: name
    }), __jsx("div", {
      className: "card-body text-center"
    }, __jsx("h4", {
      className: "text-dark mb-3"
    }, name)))))))), __jsx("div", {
      className: "site-section"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-8 pt-4 order-md-1 order-sm-1 order-1"
    }, __jsx("div", {
      className: "row justify-content-center mb-5"
    }, __jsx("div", {
      className: "col-md-7 text-center border-primary"
    }, __jsx("h2", {
      className: "font-weight-light text-primary"
    }, "Popular Categories ", __jsx(AliasConst, null)), __jsx("p", {
      className: "color-black-opacity-5"
    }, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))), __jsx("div", {
      className: "row align-items-stretch"
    }, __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-hotel"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Hotels"), __jsx("span", {
      className: "number"
    }, "4,89"))), __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-microphone"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Events"), __jsx("span", {
      className: "number"
    }, "482"))), __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-flower"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Spa"), __jsx("span", {
      className: "number"
    }, "194"))), __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-restaurant"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Stores"), __jsx("span", {
      className: "number"
    }, "1,472"))), __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-cutlery"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Restaurants"), __jsx("span", {
      className: "number"
    }, "439"))), __jsx("div", {
      className: "col-6 col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2"
    }, __jsx("a", {
      href: "#",
      className: "popular-category h-100"
    }, __jsx("span", {
      className: "icon mb-3"
    }, __jsx("span", {
      className: "flaticon-bike"
    })), __jsx("span", {
      className: "caption mb-2 d-block"
    }, "Other"), __jsx("span", {
      className: "number"
    }, "692"))))), __jsx("div", {
      className: "col-md-4  order-md-12 order-sm-12 order-sm-12"
    }, __jsx("div", {
      className: "row"
    }))))));
  }

}

/***/ })

/******/ });