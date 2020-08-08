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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion = /*#__PURE__*/function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    this.id = "accordion";
    this.activeClass = "pipejs-accordion-active";
  }

  _createClass(Accordion, [{
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

  return Accordion;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiaWQiLCJhY3RpdmVDbGFzcyIsInRyaWdnZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwibWF4SGVpZ2h0IiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwiTW9kYWwiLCJtb2RhbFRyaWdnZXJzIiwiYnV0dG9uIiwibW9kYWwiLCJkaXNwbGF5Iiwib3ZlcmxheSIsIm92ZXJsYXlDbG9zZSIsImNvbnRlbnRDbG9zZSIsIlN0cmV0Y2hUZXh0YXJlYSIsInRleHRhcmVhcyIsInRleHRhcmVhIiwiZXhwYW5kZWRUZXh0YXJlYSIsImhlaWdodCIsImpvaW4iLCJUYWIiLCJ0YWJzIiwidGFiIiwicHVzaCIsIlRhYkNvbnRhaW5lciIsImluaXRpYWxpemUiLCJyb290RWxlbWVudCIsInRhYkl0ZW1zIiwiaXRlbUVsZW1lbnRzIiwiY29udGVudEVsZW1lbnRzIiwiYWN0aXZlQ2xhc3NOYW1lIiwibWVudUl0ZW1TZWxlY3RvciIsImFjdGl2ZUl0ZW1JRCIsInRhYkl0ZW0iLCJtZW51IiwiY29udGVudCIsInZpc2libGUiLCJtZW51SXRlbXMiLCJpdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImhhc2giLCJhY3RpdmVJRCIsInRvZ2dsZSIsIlRleHRDb3VudGVyIiwiaWRTdHJpY3QiLCJrZXl1cEV2ZW50IiwiRXZlbnQiLCJ0ZXh0Rm9ybXMiLCJ0ZXh0Rm9ybSIsImNvdW50ZXIiLCJtYXhDaGFyIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInZhbHVlIiwiaW5uZXJUZXh0IiwiZGlzcGF0Y2hFdmVudCIsImN1cnJlbnRDaGFyQ291bnQiLCJyZXBsYWNlIiwiVG9TY3JvbGwiLCJzY3JvbGxUcmlnZ2VycyIsImhyZWYiLCJibG9jayIsImRlc3RpbmF0aW9uRWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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Q0Msc0JBQVEsRUFBRSxRQUR1QjtBQUVqQ0osbUJBQUssRUFBRUE7QUFGMEIsYUFBbEM7QUFJQSxXQU5EO0FBT0EsU0FqQkQ7QUFrQkE7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsSUFBSW5GLDZEQUFKLEVBQUQsQ0FBa0IwQyxVQUFsQjtBQUNDLElBQUluQix5REFBSixFQUFELENBQWNtQixVQUFkO0FBQ0MsSUFBSXNDLDZEQUFKLEVBQUQsQ0FBaUJ0QyxVQUFqQjtBQUNDLElBQUlYLG9FQUFKLEVBQUQsQ0FBd0JXLFVBQXhCO0FBQ0MsSUFBSUwsdURBQUosRUFBRCxDQUFZSyxVQUFaO0FBQ0MsSUFBSXNCLGdFQUFKLEVBQUQsQ0FBb0J0QixVQUFwQixHIiwiZmlsZSI6InBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9waXBlLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwiYWNjb3JkaW9uXCI7XG5cdFx0dGhpcy5hY3RpdmVDbGFzcyA9IFwicGlwZWpzLWFjY29yZGlvbi1hY3RpdmVcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblxuXHRcdGlmICh0cmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdFx0aWYgKHRhcmdldCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYWN0aXZlQ2xhc3MpKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwibW9kYWxcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgbW9kYWxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChtb2RhbFRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdG1vZGFsVHJpZ2dlcnMuZm9yRWFjaChidXR0b24gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBPdmVybGF5XG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX292ZXJsYXlcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDbG9zZVxuXHRcdFx0XHRcdGNvbnN0IG92ZXJsYXlDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChvdmVybGF5Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlIGluIGNvbnRlbnRzXG5cdFx0XHRcdFx0Y29uc3QgY29udGVudENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChjb250ZW50Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJldGNoVGV4dGFyZWEge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0YXJlYS1leHBhbmRlZFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0ZXh0YXJlYVtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dGFyZWFzLmZvckVhY2goKHRleHRhcmVhKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kZWRUZXh0YXJlYSh0ZXh0YXJlYSk7XG5cdFx0XHRcdHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IHRoaXMuZXhwYW5kZWRUZXh0YXJlYShlLnRhcmdldCkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kZWRUZXh0YXJlYSh0YXJnZXQpIHtcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gW3RhcmdldC5zY3JvbGxIZWlnaHQsIFwicHhcIl0uam9pbihcIlwiKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGFiXCI7XG5cdFx0dGhpcy50YWJzID0gW107XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGFicy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWJzLmZvckVhY2godGFiID0+IHtcblx0XHRcdFx0dGhpcy50YWJzLnB1c2gobmV3IFRhYkNvbnRhaW5lcih0YWIpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmluaXRpYWxpemUoKSk7XG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIFRhYkNvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yKHRhYikge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSB0YWI7XG5cdFx0dGhpcy50YWJJdGVtcyA9IFtdO1xuXG5cdFx0dGhpcy5pdGVtRWxlbWVudHMgPSBbXTtcblx0XHR0aGlzLmNvbnRlbnRFbGVtZW50cyA9IFtdO1xuXG5cdFx0aWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiX19tZW51IGxpXCI7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiLWJvcmRlclwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYi1ib3JkZXJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiLWJvcmRlcl9fbWVudSBsaVwiO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0pID0+IHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vIENvbGxlY3Rcblx0XHRjb25zdCBtZW51SXRlbXMgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5tZW51SXRlbVNlbGVjdG9yKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLmZpcnN0RWxlbWVudENoaWxkLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzTmFtZSlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIEV2ZW50SGFuZGxlclxuXHRcdGxldCBhY3RpdmVJRCA9IG51bGw7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXRlbS52aXNpYmxlKSB7XG5cdFx0XHRcdGFjdGl2ZUlEID0gaXRlbS5pZDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWwgc2V0dXBcblx0XHR0aGlzLnRvZ2dsZShhY3RpdmVJRCk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb3VudGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dC1jb3VudGVyXCI7XG5cdFx0dGhpcy5pZFN0cmljdCA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiXG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblxuXHRcdC8vIE5vcm1hbFxuXHRcdGxldCB0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0ZXh0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbWF4Q2hhciA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpO1xuXG5cdFx0XHRcdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG1heENoYXIpID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gbWF4Q2hhcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQgPSBlLnRhcmdldC52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBTdHJpY3Rcblx0XHR0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0ZXh0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudENoYXJDb3VudCA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcclxcbnxcXG58XFxzfOOAgC9nLCcnKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXhDaGFyID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1heFwiKSk7XG5cblx0XHRcdFx0XHRcdGlmIChOdW1iZXIuaXNOYU4obWF4Q2hhcikgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50Q2hhckNvdW50ID4gbWF4Q2hhcikge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQgPSBjdXJyZW50Q2hhckNvdW50O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y291bnRlci5pbm5lclRleHQgPSBjdXJyZW50Q2hhckNvdW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0XHRcdHRleHRGb3JtLmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9TY3JvbGwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJzY3JvbGxcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgc2Nyb2xsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAoc2Nyb2xsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0c2Nyb2xsVHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdFx0Y29uc3QgaHJlZiAgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRkZXN0aW5hdGlvbkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXG5cdFx0XHRcdFx0XHRibG9jazogYmxvY2tcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgVG9TY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy90b19zY3JvbGxcIjtcbmltcG9ydCBTdHJldGNoVGV4dGFyZWEgZnJvbSBcIi4vY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvdGFiXCI7XG5pbXBvcnQgVGV4dENvdW50ZXIgZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0X2NvdW50ZXJcIjtcblxuKG5ldyBBY2NvcmRpb24oKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBNb2RhbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvU2Nyb2xsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU3RyZXRjaFRleHRhcmVhKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGFiKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGV4dENvdW50ZXIoKSkuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==