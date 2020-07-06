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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pipe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.id = "accordion";
    this.activeClass = "pipejs-accordion-active";
  }

  _createClass(Modal, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var triggers = document.querySelectorAll("[data-pipejs=".concat(this.id, "]"));

      if (triggers.length > 0) {
        triggers.forEach(function (trigger) {
          trigger.addEventListener("click", function (e) {
            e.preventDefault();
            var target = trigger.getAttribute("data-pipe-target");

            if (target !== null) {
              var targetElement = document.querySelector(target);

              if (targetElement.classList.contains(_this.activeClass)) {
                targetElement.classList.remove(_this.activeClass);
                targetElement.style.maxHeight = 0;
              } else {
                targetElement.classList.add(_this.activeClass);
                targetElement.style.maxHeight = targetElement.scrollHeight + "px";
              }
            }
          });
        });
      }
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.id = "modal";
  }

  _createClass(Modal, [{
    key: "initialize",
    value: function initialize() {
      var modalTriggers = document.querySelectorAll("[data-pipejs=".concat(this.id, "]"));

      if (modalTriggers.length > 0) {
        modalTriggers.forEach(function (button) {
          var id = button.getAttribute("data-pipe-target");
          var modal = document.querySelector(id);

          if (modal !== null) {
            // Trigger
            button.addEventListener("click", function (e) {
              e.preventDefault();
              modal.style.display = "block";
            }); // Overlay

            var overlay = modal.querySelector(".pp-modal__overlay");

            if (overlay !== null) {
              overlay.addEventListener("click", function (e) {
                e.preventDefault();
                modal.style.display = "none";
              });
            } // Close


            var overlayClose = modal.querySelector(".pp-modal__close");

            if (overlayClose !== null) {
              overlayClose.addEventListener("click", function (e) {
                e.preventDefault();
                modal.style.display = "none";
              });
            } // Close in contents


            var contentClose = modal.querySelector(".pp-modal__contents__close");

            if (contentClose !== null) {
              contentClose.addEventListener("click", function (e) {
                e.preventDefault();
                modal.style.display = "none";
              });
            }
          }
        });
      }
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/js/components/stretch_textarea.js":
/*!***********************************************!*\
  !*** ./src/js/components/stretch_textarea.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StretchTextarea; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StretchTextarea = /*#__PURE__*/function () {
  function StretchTextarea() {
    _classCallCheck(this, StretchTextarea);

    this.id = "textarea-expanded";
  }

  _createClass(StretchTextarea, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var textareas = document.querySelectorAll("textarea[data-pipejs=".concat(this.id, "]"));

      if (textareas.length > 0) {
        textareas.forEach(function (textarea) {
          _this.expandedTextarea(textarea);

          textarea.addEventListener("input", function (e) {
            return _this.expandedTextarea(e.target);
          });
        });
      }
    }
  }, {
    key: "expandedTextarea",
    value: function expandedTextarea(target) {
      target.style.height = [target.scrollHeight, "px"].join("");
    }
  }]);

  return StretchTextarea;
}();



/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tab = /*#__PURE__*/function () {
  function Tab() {
    _classCallCheck(this, Tab);

    this.id = "tab";
    this.tabs = [];
  }

  _createClass(Tab, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var tabs = document.querySelectorAll("[data-pipejs=".concat(this.id, "]"));

      if (tabs.length > 0) {
        tabs.forEach(function (tab) {
          _this.tabs.push(new TabContainer(tab));
        });
        this.tabs.forEach(function (tab) {
          return tab.initialize();
        });
      }
    }
  }]);

  return Tab;
}();



var TabContainer = /*#__PURE__*/function () {
  function TabContainer(tab) {
    _classCallCheck(this, TabContainer);

    this.rootElement = tab;
    this.tabItems = [];
    this.itemElements = [];
    this.contentElements = [];

    if (tab.classList.contains("pp-tab")) {
      this.activeClassName = "pp-tab__menu__active";
      this.menuItemSelector = ".pp-tab__menu li";
    } else if (tab.classList.contains("pp-tab-border")) {
      this.activeClassName = "pp-tab-border__menu__active";
      this.menuItemSelector = ".pp-tab-border__menu li";
    }
  }

  _createClass(TabContainer, [{
    key: "toggle",
    value: function toggle(activeItemID) {
      var _this2 = this;

      this.tabItems.forEach(function (tabItem) {
        if (tabItem.id === activeItemID) {
          tabItem.menu.classList.add(_this2.activeClassName);
          tabItem.content.style.display = "block";
          tabItem.visible = true;
        } else {
          tabItem.menu.classList.remove(_this2.activeClassName);
          tabItem.content.style.display = "none";
          tabItem.visible = false;
        }
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this3 = this;

      // Collect
      var menuItems = this.rootElement.querySelectorAll(this.menuItemSelector);
      menuItems.forEach(function (item) {
        _this3.tabItems.push({
          id: Math.random().toString(18).slice(-8),
          menu: item,
          content: _this3.rootElement.querySelector(item.firstElementChild.hash),
          visible: item.classList.contains(_this3.activeClassName)
        });
      }); // Add EventHandler

      var activeID = null;
      this.tabItems.forEach(function (item) {
        item.menu.addEventListener("click", function (e) {
          e.preventDefault();

          _this3.toggle(item.id);
        });

        if (item.visible) {
          activeID = item.id;
        }
      }); // Initial setup

      this.toggle(activeID);
    }
  }]);

  return TabContainer;
}();

/***/ }),

/***/ "./src/js/components/text_counter.js":
/*!*******************************************!*\
  !*** ./src/js/components/text_counter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextCounter = /*#__PURE__*/function () {
  function TextCounter() {
    _classCallCheck(this, TextCounter);

    this.id = "text-counter";
    this.idStrict = "text-counter-strict";
  }

  _createClass(TextCounter, [{
    key: "initialize",
    value: function initialize() {
      var keyupEvent = new Event("keyup"); // Normal

      var textForms = document.querySelectorAll("[data-pipejs=".concat(this.id, "]"));

      if (textForms.length > 0) {
        textForms.forEach(function (textForm) {
          var id = textForm.getAttribute("data-pipe-target");
          var counter = document.querySelector(id);

          if (counter !== null) {
            // Text Form
            textForm.addEventListener("keyup", function (e) {
              e.preventDefault();
              var maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

              if (Number.isNaN(maxChar) === false) {
                if (e.target.value.length > maxChar) {
                  counter.firstElementChild.classList.add("pp-text--danger");
                } else {
                  counter.firstElementChild.classList.remove("pp-text--danger");
                }

                counter.firstElementChild.innerText = e.target.value.length;
              } else {
                counter.innerText = e.target.value.length;
              }
            }); // Event Trigger

            textForm.dispatchEvent(keyupEvent);
          }
        });
      } // Strict


      textForms = document.querySelectorAll("[data-pipejs=".concat(this.idStrict, "]"));

      if (textForms.length > 0) {
        textForms.forEach(function (textForm) {
          var id = textForm.getAttribute("data-pipe-target");
          var counter = document.querySelector(id);

          if (counter !== null) {
            // Text Form
            textForm.addEventListener("keyup", function (e) {
              e.preventDefault();
              var currentCharCount = e.target.value.replace(/\r\n|\n|\s|　/g, '').length;
              var maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

              if (Number.isNaN(maxChar) === false) {
                if (currentCharCount > maxChar) {
                  counter.firstElementChild.classList.add("pp-text--danger");
                } else {
                  counter.firstElementChild.classList.remove("pp-text--danger");
                }

                counter.firstElementChild.innerText = currentCharCount;
              } else {
                counter.innerText = currentCharCount;
              }
            }); // Event Trigger

            textForm.dispatchEvent(keyupEvent);
          }
        });
      }
    }
  }]);

  return TextCounter;
}();



/***/ }),

/***/ "./src/js/components/to_scroll.js":
/*!****************************************!*\
  !*** ./src/js/components/to_scroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToScroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToScroll = /*#__PURE__*/function () {
  function ToScroll() {
    _classCallCheck(this, ToScroll);

    this.id = "scroll";
  }

  _createClass(ToScroll, [{
    key: "initialize",
    value: function initialize() {
      var scrollTriggers = document.querySelectorAll("[data-pipejs=".concat(this.id, "]"));

      if (scrollTriggers.length > 0) {
        scrollTriggers.forEach(function (trigger) {
          var href = trigger.getAttribute("href");
          var block = trigger.getAttribute("data-pipe-target") || "start";

          if (href !== null && document.querySelector(href) === null) {
            return;
          }

          var destinationElement = document.querySelector(href) || document.getElementsByTagName("body")[0];
          trigger.addEventListener("click", function (e) {
            e.preventDefault();
            destinationElement.scrollIntoView({
              behavior: "smooth",
              block: block
            });
          });
        });
      }
    }
  }]);

  return ToScroll;
}();



/***/ }),

/***/ "./src/js/pipe.js":
/*!************************!*\
  !*** ./src/js/pipe.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.js");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.js");






new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]().initialize();
new _components_modal__WEBPACK_IMPORTED_MODULE_1__["default"]().initialize();
new _components_to_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]().initialize();
new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_3__["default"]().initialize();
new _components_tab__WEBPACK_IMPORTED_MODULE_4__["default"]().initialize();
new _components_text_counter__WEBPACK_IMPORTED_MODULE_5__["default"]().initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUuanMiXSwibmFtZXMiOlsiTW9kYWwiLCJpZCIsImFjdGl2ZUNsYXNzIiwidHJpZ2dlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJtb2RhbFRyaWdnZXJzIiwiYnV0dG9uIiwibW9kYWwiLCJkaXNwbGF5Iiwib3ZlcmxheSIsIm92ZXJsYXlDbG9zZSIsImNvbnRlbnRDbG9zZSIsIlN0cmV0Y2hUZXh0YXJlYSIsInRleHRhcmVhcyIsInRleHRhcmVhIiwiZXhwYW5kZWRUZXh0YXJlYSIsImhlaWdodCIsImpvaW4iLCJUYWIiLCJ0YWJzIiwidGFiIiwicHVzaCIsIlRhYkNvbnRhaW5lciIsImluaXRpYWxpemUiLCJyb290RWxlbWVudCIsInRhYkl0ZW1zIiwiaXRlbUVsZW1lbnRzIiwiY29udGVudEVsZW1lbnRzIiwiYWN0aXZlQ2xhc3NOYW1lIiwibWVudUl0ZW1TZWxlY3RvciIsImFjdGl2ZUl0ZW1JRCIsInRhYkl0ZW0iLCJtZW51IiwiY29udGVudCIsInZpc2libGUiLCJtZW51SXRlbXMiLCJpdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImhhc2giLCJhY3RpdmVJRCIsInRvZ2dsZSIsIlRleHRDb3VudGVyIiwiaWRTdHJpY3QiLCJrZXl1cEV2ZW50IiwiRXZlbnQiLCJ0ZXh0Rm9ybXMiLCJ0ZXh0Rm9ybSIsImNvdW50ZXIiLCJtYXhDaGFyIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInZhbHVlIiwiaW5uZXJUZXh0IiwiZGlzcGF0Y2hFdmVudCIsImN1cnJlbnRDaGFyQ291bnQiLCJyZXBsYWNlIiwiVG9TY3JvbGwiLCJzY3JvbGxUcmlnZ2VycyIsImhyZWYiLCJibG9jayIsImRlc3RpbmF0aW9uRWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkFjY29yZGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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LHNCQUFRLEVBQUUsUUFEdUI7QUFFakNKLG1CQUFLLEVBQUVBO0FBRjBCLGFBQWxDO0FBSUEsV0FORDtBQU9BLFNBakJEO0FBa0JBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDLElBQUlLLDZEQUFKLEVBQUQsQ0FBa0I5QyxVQUFsQjtBQUNDLElBQUl6Qyx5REFBSixFQUFELENBQWN5QyxVQUFkO0FBQ0MsSUFBSXNDLDZEQUFKLEVBQUQsQ0FBaUJ0QyxVQUFqQjtBQUNDLElBQUlYLG9FQUFKLEVBQUQsQ0FBd0JXLFVBQXhCO0FBQ0MsSUFBSUwsdURBQUosRUFBRCxDQUFZSyxVQUFaO0FBQ0MsSUFBSXNCLGdFQUFKLEVBQUQsQ0FBb0J0QixVQUFwQixHIiwiZmlsZSI6InBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9waXBlLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJhY2NvcmRpb25cIjtcblx0XHR0aGlzLmFjdGl2ZUNsYXNzID0gXCJwaXBlanMtYWNjb3JkaW9uLWFjdGl2ZVwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXG5cdFx0aWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5hY3RpdmVDbGFzcykpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJsYXlcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlXG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheUNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0XHRjb25zdCBjb250ZW50Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jb250ZW50c19fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnRDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRleHRhcmVhLWV4cGFuZGVkXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0YXJlYXMuZm9yRWFjaCgodGV4dGFyZWEpID0+IHtcblx0XHRcdFx0dGhpcy5leHBhbmRlZFRleHRhcmVhKHRleHRhcmVhKTtcblx0XHRcdFx0dGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gdGhpcy5leHBhbmRlZFRleHRhcmVhKGUudGFyZ2V0KSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRleHBhbmRlZFRleHRhcmVhKHRhcmdldCkge1xuXHRcdHRhcmdldC5zdHlsZS5oZWlnaHQgPSBbdGFyZ2V0LnNjcm9sbEhlaWdodCwgXCJweFwiXS5qb2luKFwiXCIpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0YWJcIjtcblx0XHR0aGlzLnRhYnMgPSBbXTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IodGFiKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IHRhYjtcblx0XHR0aGlzLnRhYkl0ZW1zID0gW107XG5cblx0XHR0aGlzLml0ZW1FbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuY29udGVudEVsZW1lbnRzID0gW107XG5cblx0XHRpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYlwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWJfX21lbnUgbGlcIjtcblx0XHR9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWItYm9yZGVyXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiLWJvcmRlcl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWItYm9yZGVyX19tZW51IGxpXCI7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKGFjdGl2ZUl0ZW1JRCkge1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaCgodGFiSXRlbSkgPT4ge1xuXHRcdFx0aWYgKHRhYkl0ZW0uaWQgPT09IGFjdGl2ZUl0ZW1JRCkge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly8gQ29sbGVjdFxuXHRcdGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm1lbnVJdGVtU2VsZWN0b3IpO1xuXHRcdG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy50YWJJdGVtcy5wdXNoKHtcblx0XHRcdFx0aWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTgpLnNsaWNlKC04KSxcblx0XHRcdFx0bWVudTogaXRlbSxcblx0XHRcdFx0Y29udGVudDogdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuaGFzaCksXG5cdFx0XHRcdHZpc2libGU6IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgRXZlbnRIYW5kbGVyXG5cdFx0bGV0IGFjdGl2ZUlEID0gbnVsbDtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChpdGVtLnZpc2libGUpIHtcblx0XHRcdFx0YWN0aXZlSUQgPSBpdGVtLmlkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gSW5pdGlhbCBzZXR1cFxuXHRcdHRoaXMudG9nZ2xlKGFjdGl2ZUlEKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0LWNvdW50ZXJcIjtcblx0XHR0aGlzLmlkU3RyaWN0ID0gXCJ0ZXh0LWNvdW50ZXItc3RyaWN0XCJcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qga2V5dXBFdmVudCA9IG5ldyBFdmVudChcImtleXVwXCIpO1xuXG5cdFx0Ly8gTm9ybWFsXG5cdFx0bGV0IHRleHRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0Rm9ybXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dEZvcm1zLmZvckVhY2godGV4dEZvcm0gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXhDaGFyID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1heFwiKSk7XG5cblx0XHRcdFx0XHRcdGlmIChOdW1iZXIuaXNOYU4obWF4Q2hhcikgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiBtYXhDaGFyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0XHRcdHRleHRGb3JtLmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFN0cmljdFxuXHRcdHRleHRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApO1xuXHRcdGlmICh0ZXh0Rm9ybXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dEZvcm1zLmZvckVhY2godGV4dEZvcm0gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50Q2hhckNvdW50ID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblx0XHRcdFx0XHRcdGNvbnN0IG1heENoYXIgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWF4XCIpKTtcblxuXHRcdFx0XHRcdFx0aWYgKE51bWJlci5pc05hTihtYXhDaGFyKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRDaGFyQ291bnQgPiBtYXhDaGFyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGN1cnJlbnRDaGFyQ291bnQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmlubmVyVGV4dCA9IGN1cnJlbnRDaGFyQ291bnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb1Njcm9sbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInNjcm9sbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBzY3JvbGxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChzY3JvbGxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY3JvbGxUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIikgfHwgXCJzdGFydFwiO1xuXG5cdFx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRcdGJsb2NrOiBibG9ja1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCBUb1Njcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3RvX3Njcm9sbFwiO1xuaW1wb3J0IFN0cmV0Y2hUZXh0YXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWFcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4vY29tcG9uZW50cy90YWJcIjtcbmltcG9ydCBUZXh0Q291bnRlciBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRfY291bnRlclwiO1xuXG4obmV3IEFjY29yZGlvbigpKS5pbml0aWFsaXplKCk7XG4obmV3IE1vZGFsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVG9TY3JvbGwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTdHJldGNoVGV4dGFyZWEoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUYWIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUZXh0Q291bnRlcigpKS5pbml0aWFsaXplKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9