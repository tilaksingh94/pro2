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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oRYO");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Bs8X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandling; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ErrorHandling(message, errorData, type = 'error') {
  const errors = [];

  if (errorData) {
    const errorDatas = Object.entries(errorData).map(([key, value]) => {
      return errors.push(__jsx("li", null, key, " : ", value.toString()));
    });
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    message: message,
    description: errors,
    type: type,
    showIcon: true
  });
}

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "JcgI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/include/Header.js

var __jsx = external_react_default.a.createElement;

function Header() {
  return __jsx("div", {
    className: "site-wrap"
  }, __jsx("div", {
    className: "site-mobile-menu"
  }, __jsx("div", {
    className: "site-mobile-menu-header"
  }, __jsx("div", {
    className: "site-mobile-menu-close mt-3"
  }, __jsx("span", {
    className: "icon-close2 js-menu-toggle"
  }))), __jsx("div", {
    className: "site-mobile-menu-body"
  }, __jsx("ul", {
    className: "site-nav-wrap"
  }, __jsx("li", {
    className: "active"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("span", null, "Home")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/login"
  }, __jsx("a", null, __jsx("span", null, "Get Started")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/about"
  }, __jsx("a", null, __jsx("span", null, "About")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/contact"
  }, __jsx("a", null, __jsx("span", null, "Contact"))))))), __jsx("header", {
    className: "site-navbar ",
    sticky: "top",
    role: "banner"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-11 col-xl-2"
  }, __jsx("h1", {
    className: "mb-0 site-logo"
  }, __jsx("a", {
    href: "index.html",
    className: "text-white h2 mb-0"
  }, "Browse"))), __jsx("div", {
    className: "col-12 col-md-10 d-none d-xl-block"
  }, __jsx("nav", {
    className: "site-navigation position-relative text-right",
    role: "navigation"
  }, __jsx("ul", {
    className: "site-menu js-clone-nav mr-auto d-none d-lg-block"
  }, __jsx("li", {
    className: "active"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("span", null, "Home")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/login"
  }, __jsx("a", null, __jsx("span", null, "Get Started")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/about"
  }, __jsx("a", null, __jsx("span", null, "About")))), __jsx("li", null, __jsx(link_default.a, {
    href: "/contact"
  }, __jsx("a", null, __jsx("span", null, "Contact"))))))), __jsx("div", {
    className: "d-inline-block d-xl-none ml-md-0 mr-auto py-3",
    style: {
      position: "relative",
      top: "3px"
    }
  }, __jsx("a", {
    href: "#",
    className: "site-menu-toggle js-menu-toggle text-white"
  }, __jsx("span", {
    className: "icon-menu h3"
  })))))));
}
// CONCATENATED MODULE: ./components/include/Layout.js

var Layout_jsx = external_react_default.a.createElement;

function Layout(props) {
  return Layout_jsx("div", null, Layout_jsx(Header, null), props.children);
}

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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "XrO7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL = type => {
  return 'http://127.0.0.1:5050/api/' + type;
};

/* harmony default export */ __webpack_exports__["a"] = (URL);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oRYO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ steps_App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/include/Layout.js + 1 modules
var Layout = __webpack_require__("JcgI");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: ./components/config/api/AuthorizedPost.js
var AuthorizedPost = __webpack_require__("TMcN");

// EXTERNAL MODULE: ./components/config/api/ErrorHandling.js
var ErrorHandling = __webpack_require__("Bs8X");

// CONCATENATED MODULE: ./components/register/basic.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class basic_BasicDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const DataSend = {
            name: values.name,
            startup_on: values.startup_on.format('YYYY-MM-DD')
          };
          this.setState({
            loading: true
          });
          Object(AuthorizedPost["a" /* default */])('entity', 'POST', DataSend).then(result => {
            let responseJson = result;

            if (responseJson.success) {
              this.setState({
                redirectToReferrer: true,
                loading: false,
                ServerMessage: responseJson.message,
                ServerMessageType: 'success'
              });
              localStorage.setItem('entity_id_fk', responseJson.data.id);
              localStorage.setItem('profile_stage', '1');
              window.location.reload(false);
            } else if (responseJson.success == false) {
              this.setState({
                loading: false,
                ServerMessage: responseJson.message,
                ServerValidation: responseJson.data
              });
            }
          });
        }
      });
    });

    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null
    };
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 4
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 12
        }
      }
    };
    const {
      getFieldDecorator
    } = this.props.form;
    let errors = '';

    if (this.state.ServerMessage) {
      errors = Object(ErrorHandling["a" /* default */])(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    return __jsx("div", null, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-6 offset-md-2"
    }, errors, __jsx("br", null))), __jsx(external_antd_["Form"], _extends({
      onSubmit: this.handleSubmit
    }, formItemLayout, {
      className: "basic-details-form"
    }), __jsx(external_antd_["Form"].Item, {
      label: "Name"
    }, getFieldDecorator('name', {
      rules: [{
        required: true,
        message: 'Please input your name!'
      }]
    })(__jsx(external_antd_["Input"], {
      size: "large",
      prefix: __jsx(external_antd_["Icon"], {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Name"
    }))), __jsx(external_antd_["Form"].Item, {
      label: "Startup On"
    }, getFieldDecorator('startup_on', {
      rules: [{
        type: 'object',
        required: true,
        message: 'Please select Startup Date!'
      }]
    })(__jsx(external_antd_["DatePicker"], {
      size: "large"
    }))), __jsx(external_antd_["Form"].Item, {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 20,
          offset: 4
        }
      }
    }, __jsx(external_antd_["Button"], {
      type: "primary",
      size: "default",
      loading: this.state.loading,
      htmlType: "submit",
      className: "login-form-button"
    }, "Save"))));
  }

}

const BasicDetailsForm = external_antd_["Form"].create({
  name: 'basic_details'
})(basic_BasicDetails);
/* harmony default export */ var basic = (BasicDetailsForm);
// EXTERNAL MODULE: ./components/config/api/AuthorizedGet.js
var AuthorizedGet = __webpack_require__("a1wn");

// CONCATENATED MODULE: ./components/register/location.js
var location_jsx = external_react_default.a.createElement;

function location_extends() { location_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return location_extends.apply(this, arguments); }

function location_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  Option
} = external_antd_["Select"];

class location_LocationDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    location_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({
            loading: true
          });
          const DataSend = {
            entity_id_fk: localStorage.getItem('entity_id_fk'),
            phone_number: values.phone_number,
            pincode: values.pincode,
            address: values.address,
            state_city: values.state_city
          }; //console.log(DataSend);

          Object(AuthorizedPost["a" /* default */])('entity-location', 'POST', DataSend).then(result => {
            let responseJson = result;

            if (responseJson.success) {
              this.setState({
                redirectToReferrer: true,
                loading: false,
                ServerMessage: responseJson.message,
                ServerMessageType: 'success'
              });
              localStorage.setItem('profile_stage', '2');
              window.location.reload(false);
            } else if (responseJson.success == false) {
              this.setState({
                loading: false,
                ServerMessage: responseJson.message,
                ServerValidation: responseJson.data
              });
            }
          });
        }
      });
    });

    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null,
      StateList: []
    };
  }

  componentDidMount() {
    Object(AuthorizedGet["a" /* default */])('state_and_city').then(result => {
      this.setState({
        StateList: result.data
      });
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 4
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 12
        }
      }
    };
    const {
      getFieldDecorator
    } = this.props.form;
    let errors = '';

    if (this.state.ServerMessage) {
      errors = Object(ErrorHandling["a" /* default */])(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91'
    })(location_jsx(external_antd_["Select"], {
      style: {
        width: 70
      }
    }, location_jsx(Option, {
      value: "91"
    }, "+91")));
    return location_jsx("div", null, location_jsx("div", {
      className: "row"
    }, location_jsx("div", {
      className: "col-md-8 offset-md-2"
    }, errors, location_jsx("br", null))), location_jsx(external_antd_["Form"], location_extends({
      onSubmit: this.handleSubmit
    }, formItemLayout, {
      className: "location-details-form"
    }), location_jsx(external_antd_["Form"].Item, {
      label: "Address"
    }, getFieldDecorator('address', {
      rules: [{
        required: true,
        message: 'Please input your Address!'
      }]
    })(location_jsx(external_antd_["Input"], {
      size: "large",
      prefix: location_jsx(external_antd_["Icon"], {
        type: "shop",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Address"
    }))), location_jsx(external_antd_["Form"].Item, {
      label: "Phone Number"
    }, getFieldDecorator('phone_number', {
      rules: [{
        required: true,
        message: 'Please input your phone number!'
      }]
    })(location_jsx(external_antd_["Input"], {
      size: "large",
      addonBefore: prefixSelector
    }))), location_jsx(external_antd_["Form"].Item, {
      label: "Pincode"
    }, getFieldDecorator('pincode', {
      rules: [{
        required: true,
        message: 'Please input your pincode!'
      }]
    })(location_jsx(external_antd_["Input"], {
      size: "large",
      placeholder: "Pincode",
      style: {
        width: '120px'
      }
    }))), location_jsx(external_antd_["Form"].Item, {
      label: "State/City"
    }, getFieldDecorator('state_city', {
      rules: [{
        required: true,
        message: 'Please input your State/City!'
      }]
    })(location_jsx(external_antd_["Cascader"], {
      size: "large",
      options: this.state.StateList,
      placeholder: "Please select state/city"
    }))), location_jsx(external_antd_["Form"].Item, {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 20,
          offset: 4
        }
      }
    }, location_jsx(external_antd_["Button"], {
      type: "primary",
      size: "default",
      loading: this.state.loading,
      htmlType: "submit",
      className: "login-form-button"
    }, "Save"))));
  }

}

const LocationDetailsForm = external_antd_["Form"].create({
  name: 'location_details'
})(location_LocationDetails);
/* harmony default export */ var register_location = (LocationDetailsForm);
// CONCATENATED MODULE: ./components/register/workout.js
var workout_jsx = external_react_default.a.createElement;

function workout_extends() { workout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return workout_extends.apply(this, arguments); }

function workout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  Option: workout_Option
} = external_antd_["Select"];

class workout_WorkoutDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    workout_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const DataSend = {
            services: values.services,
            onlyServices: true
          };
          this.setState({
            loading: true
          });
          let url = 'entity/' + localStorage.getItem('entity_id_fk');
          Object(AuthorizedPost["a" /* default */])(url, 'PUT', DataSend).then(result => {
            let responseJson = result;

            if (responseJson.success) {
              this.setState({
                redirectToReferrer: true,
                loading: false,
                ServerMessage: responseJson.message,
                ServerMessageType: 'success'
              });
              localStorage.setItem('profile_stage', '3');
              window.location.reload(false);
            } else if (responseJson.success == false) {
              this.setState({
                loading: false,
                ServerMessage: responseJson.message,
                ServerValidation: responseJson.data
              });
            }
          });
        }
      });
    });

    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false,
      startup_on: null,
      WorkOutList: []
    };
  }

  componentDidMount() {
    Object(AuthorizedGet["a" /* default */])('entity-services').then(result => {
      this.setState({
        WorkOutList: result.data
      });
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 3
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 18
        }
      }
    };
    const {
      getFieldDecorator
    } = this.props.form;
    let errors = '';

    if (this.state.ServerMessage) {
      errors = Object(ErrorHandling["a" /* default */])(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    const children = [];
    Object.entries(this.state.WorkOutList).map(([key, value]) => children.push(workout_jsx(workout_Option, {
      key: value.id
    }, value.name)));
    return workout_jsx("div", null, workout_jsx("div", {
      className: "row"
    }, workout_jsx("div", {
      className: "col-md-8 offset-md-2"
    }, errors, workout_jsx("br", null))), workout_jsx(external_antd_["Form"], workout_extends({
      onSubmit: this.handleSubmit
    }, formItemLayout, {
      className: "location-details-form"
    }), workout_jsx(external_antd_["Form"].Item, {
      label: "Available"
    }, getFieldDecorator('services', {
      rules: [{
        required: true,
        message: 'Please input your State/City!'
      }]
    })(workout_jsx(external_antd_["Select"], {
      mode: "multiple",
      size: "large",
      placeholder: "Please select"
    }, children))), workout_jsx(external_antd_["Form"].Item, {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 20,
          offset: 4
        }
      }
    }, workout_jsx(external_antd_["Button"], {
      type: "primary",
      size: "default",
      loading: this.state.loading,
      htmlType: "submit",
      className: "login-form-button"
    }, "Save"))));
  }

}

const WorkoutDetailsForm = external_antd_["Form"].create({
  name: 'location_details'
})(workout_WorkoutDetails);
/* harmony default export */ var workout = (WorkoutDetailsForm);
// CONCATENATED MODULE: ./components/register/time.js
var time_jsx = external_react_default.a.createElement;

function time_extends() { time_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return time_extends.apply(this, arguments); }

function time_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class time_TimeDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    time_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({
            loading: true
          });
          values['entity_id_fk'] = localStorage.getItem('entity_id_fk');
          values['sunday_start'] = this.timeFormate(values['sunday_start']);
          values['sunday_end'] = this.timeFormate(values['sunday_end']);
          values['monday_start'] = this.timeFormate(values['monday_start']);
          values['monday_end'] = this.timeFormate(values['monday_end']);
          values['tuesday_start'] = this.timeFormate(values['tuesday_start']);
          values['tuesday_end'] = this.timeFormate(values['tuesday_end']);
          values['wednesday_start'] = this.timeFormate(values['wednesday_start']);
          values['wednesday_end'] = this.timeFormate(values['wednesday_end']);
          values['thursday_start'] = this.timeFormate(values['thursday_start']);
          values['thursday_end'] = this.timeFormate(values['thursday_end']);
          values['friday_start'] = this.timeFormate(values['friday_start']);
          values['friday_end'] = this.timeFormate(values['friday_end']);
          values['saturday_start'] = this.timeFormate(values['saturday_start']);
          values['saturday_end'] = this.timeFormate(values['saturday_end']);
          console.log(values);
          Object(AuthorizedPost["a" /* default */])('entity-hours', 'POST', values).then(result => {
            let responseJson = result;

            if (responseJson.success) {
              this.setState({
                redirectToReferrer: true,
                loading: false,
                ServerMessage: responseJson.message,
                ServerMessageType: 'success'
              });
              localStorage.setItem('profile_stage', '4');
              window.location.reload(false);
            } else if (responseJson.success == false) {
              this.setState({
                loading: false,
                ServerMessage: responseJson.message,
                ServerValidation: responseJson.data
              });
            }
          });
        }
      });
    });

    this.state = {
      ServerValidation: [],
      ServerMessage: '',
      ServerMessageType: 'error',
      loading: false
    };
  }

  timeFormate(hoursVar) {
    if (hoursVar != "" && hoursVar != null) {
      return hoursVar.format('HH:mm:ss');
    } else {
      return null;
    }
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 12
        },
        sm: {
          span: 12
        }
      },
      wrapperCol: {
        xs: {
          span: 12
        },
        sm: {
          span: 12
        }
      }
    };
    const {
      getFieldDecorator
    } = this.props.form;
    let errors = '';

    if (this.state.ServerMessage) {
      errors = Object(ErrorHandling["a" /* default */])(this.state.ServerMessage, this.state.ServerValidation, this.state.ServerMessageType);
    }

    return time_jsx("div", null, time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-8 offset-md-2"
    }, errors, time_jsx("br", null))), time_jsx(external_antd_["Form"], time_extends({
      onSubmit: this.handleSubmit
    }, formItemLayout, {
      className: "location-details-form"
    }), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Monday"
    }, getFieldDecorator('monday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('monday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('monday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Tuesday"
    }, getFieldDecorator('tuesday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('tuesday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('tuesday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Wednesday"
    }, getFieldDecorator('wednesday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('wednesday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('wednesday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Thursday"
    }, getFieldDecorator('thursday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('thursday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('thursday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Friday"
    }, getFieldDecorator('friday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('friday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('friday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Saturday"
    }, getFieldDecorator('saturday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('saturday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('saturday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx("div", {
      className: "row"
    }, time_jsx("div", {
      className: "col-md-3"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Sunday"
    }, getFieldDecorator('sunday')(time_jsx(external_antd_["Switch"], {
      checkedChildren: time_jsx(external_antd_["Icon"], {
        type: "check"
      }),
      unCheckedChildren: time_jsx(external_antd_["Icon"], {
        type: "close"
      })
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "Start Time"
    }, getFieldDecorator('sunday_start')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    })))), time_jsx("div", {
      className: "col-md-4"
    }, time_jsx(external_antd_["Form"].Item, {
      label: "End Time"
    }, getFieldDecorator('sunday_end')(time_jsx(external_antd_["TimePicker"], {
      use12Hours: true,
      format: "h:mm A"
    }))))), time_jsx(external_antd_["Form"].Item, {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 20,
          offset: 4
        }
      }
    }, time_jsx(external_antd_["Button"], {
      type: "primary",
      size: "default",
      loading: this.state.loading,
      htmlType: "submit",
      className: "login-form-button"
    }, "Save"))));
  }

}

const TimeDetailsForm = external_antd_["Form"].create({
  name: 'location_details'
})(time_TimeDetails);
/* harmony default export */ var time = (TimeDetailsForm);
// CONCATENATED MODULE: ./components/register/steps_route.js
var steps_route_jsx = external_react_default.a.createElement;







function steps_route(props) {
  const {
    Step
  } = external_antd_["Steps"];
  var current = Number(props.profile_stage);
  const steps = [{
    title: 'Basic Details',
    content: current == 0 ? steps_route_jsx(basic, null) : steps_route_jsx(external_antd_["Result"], {
      status: "success",
      title: "Basic Details Done"
    }),
    icon: steps_route_jsx(external_antd_["Icon"], {
      type: "shop"
    })
  }, {
    title: 'Location',
    content: current == 1 ? steps_route_jsx(register_location, null) : steps_route_jsx(external_antd_["Result"], {
      status: "success",
      title: "Location Done"
    }),
    icon: steps_route_jsx(external_antd_["Icon"], {
      type: "environment"
    })
  }, {
    title: 'Set Workout',
    content: current == 2 ? steps_route_jsx(workout, null) : steps_route_jsx(external_antd_["Result"], {
      status: "success",
      title: "Done"
    }),
    icon: steps_route_jsx(external_antd_["Icon"], {
      type: "solution"
    })
  }, {
    title: 'Timing',
    content: current == 3 ? steps_route_jsx(time, null) : steps_route_jsx(external_antd_["Result"], {
      status: "success",
      title: "Completed proccess. Thank You"
    }),
    icon: steps_route_jsx(external_antd_["Icon"], {
      type: "clock-circle"
    })
  }];
  return steps_route_jsx("div", null, steps_route_jsx(external_antd_["Steps"], {
    current: current
  }, steps.map(item => steps_route_jsx(Step, {
    key: item.title,
    title: item.title,
    icon: item.icon
  }))), steps_route_jsx("div", {
    className: "steps-content p-5"
  }, steps_route_jsx("div", {
    className: "row"
  }, steps_route_jsx("div", {
    className: "col-md-12"
  }, steps[current].content))));
}
// CONCATENATED MODULE: ./pages/register/steps.js
var steps_jsx = external_react_default.a.createElement;




class steps_App extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_stage: null,
      steps: []
    };
  }

  async componentDidMount() {
    this.setState({
      profile_stage: Number(localStorage.getItem('profile_stage'))
    });
  }

  next() {
    const profile_stage = this.state.profile_stage + 1;
    this.setState({
      profile_stage
    });
  }

  prev() {
    const profile_stage = this.state.profile_stage - 1;
    this.setState({
      profile_stage
    });
  }

  render() {
    const {
      profile_stage,
      steps
    } = this.state;

    if (this.state.profile_stage == 4) {
      router_default.a.push('/dashboard');
    }

    return steps_jsx(Layout["a" /* default */], null, steps_jsx("div", {
      className: "site-blocks-cover inner-page-cover overlay bg-dark",
      "data-aos": "fade",
      "data-stellar-background-ratio": "0.5"
    }, steps_jsx("div", {
      className: "container"
    }, steps_jsx("div", {
      className: "row align-items-center justify-content-center text-center"
    }, steps_jsx("div", {
      className: "col-md-10"
    }, steps_jsx("div", {
      className: "row justify-content-center mb-1"
    }, steps_jsx("div", {
      className: "col-md-10 "
    }, steps_jsx("h2", {
      "data-aos": "fade-up",
      className: "text-white"
    }, "Complete your profile"))))))), steps_jsx("div", {
      className: "site-section bg-light"
    }, steps_jsx("div", {
      className: "container"
    }, steps_jsx("div", {
      className: "row"
    }, steps_jsx("div", {
      className: "col-md-10 offset-md-1 p-5 bg-white mt-10 shadow rounded",
      style: {
        "margin-top": "-200px"
      }
    }, steps_jsx(steps_route, {
      profile_stage: profile_stage
    }))))));
  }

}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ })

/******/ });