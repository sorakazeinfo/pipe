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
          var modal = document.getElementById(id);

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

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    this.id = "scroll";
  }

  _createClass(Scroll, [{
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

  return Scroll;
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
  }

  _createClass(TabContainer, [{
    key: "toggle",
    value: function toggle(activeItemID) {
      this.tabItems.forEach(function (tabItem) {
        if (tabItem.id === activeItemID) {
          tabItem.menu.classList.add("pp-tab__menu__active");
          tabItem.content.style.display = "block";
          tabItem.visible = true;
        } else {
          tabItem.menu.classList.remove("pp-tab__menu__active");
          tabItem.content.style.display = "none";
          tabItem.visible = false;
        }
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      // Collect
      var menuItems = this.rootElement.querySelectorAll(".pp-tab__menu li");
      menuItems.forEach(function (item) {
        _this2.tabItems.push({
          id: Math.random().toString(18).slice(-8),
          menu: item,
          content: _this2.rootElement.querySelector(item.firstElementChild.hash),
          visible: item.classList.contains("pp-tab__menu__active")
        });
      }); // Add EventHandler

      var activeID = null;
      this.tabItems.forEach(function (item) {
        item.menu.addEventListener("click", function (e) {
          e.preventDefault();

          _this2.toggle(item.id);
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
          var counter = document.getElementById(id);

          if (counter !== null) {
            // Text Form
            textForm.addEventListener("keyup", function (e) {
              e.preventDefault();
              counter.innerText = e.target.value.length;
            }); // Event Trigger

            textForm.dispatchEvent(keyupEvent);
          }
        });
      } // Strict


      textForms = document.querySelectorAll("[data-pipejs=".concat(this.idStrict, "]"));

      if (textForms.length > 0) {
        textForms.forEach(function (textForm) {
          var id = textForm.getAttribute("data-pipe-target");
          var counter = document.getElementById(id);

          if (counter !== null) {
            // Text Form
            textForm.addEventListener("keyup", function (e) {
              e.preventDefault();
              counter.innerText = e.target.value.replace(/\r\n|\n|\s|　/g, '').length;
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

/***/ "./src/js/pipe.js":
/*!************************!*\
  !*** ./src/js/pipe.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "./src/js/components/scroll.js");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.js");





new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]().initialize();
new _components_scroll__WEBPACK_IMPORTED_MODULE_1__["default"]().initialize();
new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_2__["default"]().initialize();
new _components_tab__WEBPACK_IMPORTED_MODULE_3__["default"]().initialize();
new _components_text_counter__WEBPACK_IMPORTED_MODULE_4__["default"]().initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGlwZS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsImlkIiwibW9kYWxUcmlnZ2VycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJidXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJsYXkiLCJxdWVyeVNlbGVjdG9yIiwib3ZlcmxheUNsb3NlIiwiY29udGVudENsb3NlIiwiU2Nyb2xsIiwic2Nyb2xsVHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaHJlZiIsImJsb2NrIiwiZGVzdGluYXRpb25FbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiU3RyZXRjaFRleHRhcmVhIiwidGV4dGFyZWFzIiwidGV4dGFyZWEiLCJleHBhbmRlZFRleHRhcmVhIiwidGFyZ2V0IiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwiam9pbiIsIlRhYiIsInRhYnMiLCJ0YWIiLCJwdXNoIiwiVGFiQ29udGFpbmVyIiwiaW5pdGlhbGl6ZSIsInJvb3RFbGVtZW50IiwidGFiSXRlbXMiLCJpdGVtRWxlbWVudHMiLCJjb250ZW50RWxlbWVudHMiLCJhY3RpdmVJdGVtSUQiLCJ0YWJJdGVtIiwibWVudSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRlbnQiLCJ2aXNpYmxlIiwicmVtb3ZlIiwibWVudUl0ZW1zIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJoYXNoIiwiY29udGFpbnMiLCJhY3RpdmVJRCIsInRvZ2dsZSIsIlRleHRDb3VudGVyIiwiaWRTdHJpY3QiLCJrZXl1cEV2ZW50IiwiRXZlbnQiLCJ0ZXh0Rm9ybXMiLCJ0ZXh0Rm9ybSIsImNvdW50ZXIiLCJpbm5lclRleHQiLCJ2YWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxLO0FBQ3BCLG1CQUFjO0FBQUE7O0FBQ2IsU0FBS0MsRUFBTCxHQUFVLE9BQVY7QUFDQTs7OztpQ0FFWTtBQUNaLFVBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCx3QkFBMEMsS0FBS0gsRUFBL0MsT0FBdEI7O0FBQ0EsVUFBSUMsYUFBYSxDQUFDRyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCSCxxQkFBYSxDQUFDSSxPQUFkLENBQXNCLFVBQUFDLE1BQU0sRUFBSTtBQUMvQixjQUFNTixFQUFFLEdBQUdNLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixrQkFBcEIsQ0FBWDtBQUNBLGNBQU1DLEtBQUssR0FBR04sUUFBUSxDQUFDTyxjQUFULENBQXdCVCxFQUF4QixDQUFkOztBQUVBLGNBQUlRLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ25CO0FBQ0FGLGtCQUFNLENBQUNJLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNDLENBQVQsRUFBWTtBQUM1Q0EsZUFBQyxDQUFDQyxjQUFGO0FBQ0FKLG1CQUFLLENBQUNLLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixPQUF0QjtBQUNBLGFBSEQsRUFGbUIsQ0FPbkI7O0FBQ0EsZ0JBQU1DLE9BQU8sR0FBR1AsS0FBSyxDQUFDUSxhQUFOLENBQW9CLG9CQUFwQixDQUFoQjs7QUFDQSxnQkFBSUQsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3JCQSxxQkFBTyxDQUFDTCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDN0NBLGlCQUFDLENBQUNDLGNBQUY7QUFDQUoscUJBQUssQ0FBQ0ssS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0EsZUFIRDtBQUlBLGFBZGtCLENBZ0JuQjs7O0FBQ0EsZ0JBQU1HLFlBQVksR0FBR1QsS0FBSyxDQUFDUSxhQUFOLENBQW9CLGtCQUFwQixDQUFyQjs7QUFDQSxnQkFBSUMsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQzFCQSwwQkFBWSxDQUFDUCxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFTQyxDQUFULEVBQVk7QUFDbERBLGlCQUFDLENBQUNDLGNBQUY7QUFDQUoscUJBQUssQ0FBQ0ssS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0EsZUFIRDtBQUlBLGFBdkJrQixDQXlCbkI7OztBQUNBLGdCQUFNSSxZQUFZLEdBQUdWLEtBQUssQ0FBQ1EsYUFBTixDQUFvQiw0QkFBcEIsQ0FBckI7O0FBQ0EsZ0JBQUlFLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUMxQkEsMEJBQVksQ0FBQ1IsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ2xEQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FKLHFCQUFLLENBQUNLLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBLGVBSEQ7QUFJQTtBQUNEO0FBQ0QsU0F0Q0Q7QUF1Q0E7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoRG1CSyxNO0FBQ3BCLG9CQUFjO0FBQUE7O0FBQ2IsU0FBS25CLEVBQUwsR0FBVSxRQUFWO0FBQ0E7Ozs7aUNBRVk7QUFDWixVQUFNb0IsY0FBYyxHQUFHbEIsUUFBUSxDQUFDQyxnQkFBVCx3QkFBMEMsS0FBS0gsRUFBL0MsT0FBdkI7O0FBQ0EsVUFBSW9CLGNBQWMsQ0FBQ2hCLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDOUJnQixzQkFBYyxDQUFDZixPQUFmLENBQXVCLFVBQUFnQixPQUFPLEVBQUk7QUFDakMsY0FBTUMsSUFBSSxHQUFJRCxPQUFPLENBQUNkLFlBQVIsQ0FBcUIsTUFBckIsQ0FBZDtBQUNBLGNBQU1nQixLQUFLLEdBQUdGLE9BQU8sQ0FBQ2QsWUFBUixDQUFxQixrQkFBckIsS0FBNEMsT0FBMUQ7O0FBRUEsY0FBSWUsSUFBSSxLQUFLLElBQVQsSUFBaUJwQixRQUFRLENBQUNjLGFBQVQsQ0FBdUJNLElBQXZCLE1BQWlDLElBQXRELEVBQTREO0FBQzNEO0FBQ0E7O0FBRUQsY0FBTUUsa0JBQWtCLEdBQUd0QixRQUFRLENBQUNjLGFBQVQsQ0FBdUJNLElBQXZCLEtBQWdDcEIsUUFBUSxDQUFDdUIsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBM0Q7QUFFQUosaUJBQU8sQ0FBQ1gsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzdDQSxhQUFDLENBQUNDLGNBQUY7QUFDQVksOEJBQWtCLENBQUNFLGNBQW5CLENBQWtDO0FBQ2pDQyxzQkFBUSxFQUFFLFFBRHVCO0FBRWpDSixtQkFBSyxFQUFFQTtBQUYwQixhQUFsQztBQUlBLFdBTkQ7QUFPQSxTQWpCRDtBQWtCQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNCbUJLLGU7QUFDcEIsNkJBQWM7QUFBQTs7QUFDYixTQUFLNUIsRUFBTCxHQUFVLG1CQUFWO0FBQ0E7Ozs7aUNBRVk7QUFBQTs7QUFDWixVQUFNNkIsU0FBUyxHQUFHM0IsUUFBUSxDQUFDQyxnQkFBVCxnQ0FBa0QsS0FBS0gsRUFBdkQsT0FBbEI7O0FBQ0EsVUFBSTZCLFNBQVMsQ0FBQ3pCLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJ5QixpQkFBUyxDQUFDeEIsT0FBVixDQUFrQixVQUFDeUIsUUFBRCxFQUFjO0FBQy9CLGVBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0JELFFBQXRCOztBQUNBQSxrQkFBUSxDQUFDcEIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsQ0FBQztBQUFBLG1CQUFJLEtBQUksQ0FBQ29CLGdCQUFMLENBQXNCcEIsQ0FBQyxDQUFDcUIsTUFBeEIsQ0FBSjtBQUFBLFdBQXBDO0FBQ0EsU0FIRDtBQUlBO0FBQ0Q7OztxQ0FFZ0JBLE0sRUFBUTtBQUN4QkEsWUFBTSxDQUFDbkIsS0FBUCxDQUFhb0IsTUFBYixHQUFzQixDQUFDRCxNQUFNLENBQUNFLFlBQVIsRUFBc0IsSUFBdEIsRUFBNEJDLElBQTVCLENBQWlDLEVBQWpDLENBQXRCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakJtQkMsRztBQUNwQixpQkFBYztBQUFBOztBQUNiLFNBQUtwQyxFQUFMLEdBQVUsS0FBVjtBQUNBLFNBQUtxQyxJQUFMLEdBQVksRUFBWjtBQUNBOzs7O2lDQUVZO0FBQUE7O0FBQ1osVUFBTUEsSUFBSSxHQUFHbkMsUUFBUSxDQUFDQyxnQkFBVCx3QkFBMEMsS0FBS0gsRUFBL0MsT0FBYjs7QUFDQSxVQUFJcUMsSUFBSSxDQUFDakMsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ3BCaUMsWUFBSSxDQUFDaEMsT0FBTCxDQUFhLFVBQUFpQyxHQUFHLEVBQUk7QUFDbkIsZUFBSSxDQUFDRCxJQUFMLENBQVVFLElBQVYsQ0FBZSxJQUFJQyxZQUFKLENBQWlCRixHQUFqQixDQUFmO0FBQ0EsU0FGRDtBQUlBLGFBQUtELElBQUwsQ0FBVWhDLE9BQVYsQ0FBa0IsVUFBQWlDLEdBQUc7QUFBQSxpQkFBSUEsR0FBRyxDQUFDRyxVQUFKLEVBQUo7QUFBQSxTQUFyQjtBQUNBO0FBQ0Q7Ozs7Ozs7O0lBR0lELFk7QUFDTCx3QkFBWUYsR0FBWixFQUFpQjtBQUFBOztBQUNoQixTQUFLSSxXQUFMLEdBQW1CSixHQUFuQjtBQUNBLFNBQUtLLFFBQUwsR0FBZ0IsRUFBaEI7QUFFQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUNBOzs7OzJCQUVNQyxZLEVBQWM7QUFDcEIsV0FBS0gsUUFBTCxDQUFjdEMsT0FBZCxDQUFzQixVQUFTMEMsT0FBVCxFQUFrQjtBQUN2QyxZQUFJQSxPQUFPLENBQUMvQyxFQUFSLEtBQWU4QyxZQUFuQixFQUFpQztBQUNoQ0MsaUJBQU8sQ0FBQ0MsSUFBUixDQUFhQyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixzQkFBM0I7QUFDQUgsaUJBQU8sQ0FBQ0ksT0FBUixDQUFnQnRDLEtBQWhCLENBQXNCQyxPQUF0QixHQUFnQyxPQUFoQztBQUNBaUMsaUJBQU8sQ0FBQ0ssT0FBUixHQUFrQixJQUFsQjtBQUNBLFNBSkQsTUFJTztBQUNOTCxpQkFBTyxDQUFDQyxJQUFSLENBQWFDLFNBQWIsQ0FBdUJJLE1BQXZCLENBQThCLHNCQUE5QjtBQUNBTixpQkFBTyxDQUFDSSxPQUFSLENBQWdCdEMsS0FBaEIsQ0FBc0JDLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0FpQyxpQkFBTyxDQUFDSyxPQUFSLEdBQWtCLEtBQWxCO0FBQ0E7QUFDRCxPQVZEO0FBV0E7OztpQ0FFWTtBQUFBOztBQUNaO0FBQ0EsVUFBTUUsU0FBUyxHQUFHLEtBQUtaLFdBQUwsQ0FBaUJ2QyxnQkFBakIsQ0FBa0Msa0JBQWxDLENBQWxCO0FBQ0FtRCxlQUFTLENBQUNqRCxPQUFWLENBQWtCLFVBQUFrRCxJQUFJLEVBQUk7QUFDekIsY0FBSSxDQUFDWixRQUFMLENBQWNKLElBQWQsQ0FBbUI7QUFDbEJ2QyxZQUFFLEVBQUV3RCxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsS0FBM0IsQ0FBaUMsQ0FBQyxDQUFsQyxDQURjO0FBRWxCWCxjQUFJLEVBQUVPLElBRlk7QUFHbEJKLGlCQUFPLEVBQUUsTUFBSSxDQUFDVCxXQUFMLENBQWlCMUIsYUFBakIsQ0FBK0J1QyxJQUFJLENBQUNLLGlCQUFMLENBQXVCQyxJQUF0RCxDQUhTO0FBSWxCVCxpQkFBTyxFQUFFRyxJQUFJLENBQUNOLFNBQUwsQ0FBZWEsUUFBZixDQUF3QixzQkFBeEI7QUFKUyxTQUFuQjtBQU1BLE9BUEQsRUFIWSxDQVlaOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsV0FBS3BCLFFBQUwsQ0FBY3RDLE9BQWQsQ0FBc0IsVUFBQWtELElBQUksRUFBSTtBQUM3QkEsWUFBSSxDQUFDUCxJQUFMLENBQVV0QyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFBQyxDQUFDLEVBQUk7QUFDeENBLFdBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxnQkFBSSxDQUFDb0QsTUFBTCxDQUFZVCxJQUFJLENBQUN2RCxFQUFqQjtBQUNBLFNBSEQ7O0FBS0EsWUFBSXVELElBQUksQ0FBQ0gsT0FBVCxFQUFrQjtBQUNqQlcsa0JBQVEsR0FBR1IsSUFBSSxDQUFDdkQsRUFBaEI7QUFDQTtBQUNELE9BVEQsRUFkWSxDQXlCWjs7QUFDQSxXQUFLZ0UsTUFBTCxDQUFZRCxRQUFaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3BFbUJFLFc7QUFDcEIseUJBQWM7QUFBQTs7QUFDYixTQUFLakUsRUFBTCxHQUFVLGNBQVY7QUFDQSxTQUFLa0UsUUFBTCxHQUFnQixxQkFBaEI7QUFDQTs7OztpQ0FFWTtBQUNaLFVBQU1DLFVBQVUsR0FBRyxJQUFJQyxLQUFKLENBQVUsT0FBVixDQUFuQixDQURZLENBR1o7O0FBQ0EsVUFBSUMsU0FBUyxHQUFHbkUsUUFBUSxDQUFDQyxnQkFBVCx3QkFBMEMsS0FBS0gsRUFBL0MsT0FBaEI7O0FBQ0EsVUFBSXFFLFNBQVMsQ0FBQ2pFLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJpRSxpQkFBUyxDQUFDaEUsT0FBVixDQUFrQixVQUFBaUUsUUFBUSxFQUFJO0FBQzdCLGNBQU10RSxFQUFFLEdBQUdzRSxRQUFRLENBQUMvRCxZQUFULENBQXNCLGtCQUF0QixDQUFYO0FBQ0EsY0FBTWdFLE9BQU8sR0FBR3JFLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QlQsRUFBeEIsQ0FBaEI7O0FBRUEsY0FBSXVFLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNyQjtBQUNBRCxvQkFBUSxDQUFDNUQsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzlDQSxlQUFDLENBQUNDLGNBQUY7QUFDQTJELHFCQUFPLENBQUNDLFNBQVIsR0FBb0I3RCxDQUFDLENBQUNxQixNQUFGLENBQVN5QyxLQUFULENBQWVyRSxNQUFuQztBQUNBLGFBSEQsRUFGcUIsQ0FPckI7O0FBQ0FrRSxvQkFBUSxDQUFDSSxhQUFULENBQXVCUCxVQUF2QjtBQUNBO0FBQ0QsU0FkRDtBQWVBLE9BckJXLENBdUJaOzs7QUFDQUUsZUFBUyxHQUFHbkUsUUFBUSxDQUFDQyxnQkFBVCx3QkFBMEMsS0FBSytELFFBQS9DLE9BQVo7O0FBQ0EsVUFBSUcsU0FBUyxDQUFDakUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN6QmlFLGlCQUFTLENBQUNoRSxPQUFWLENBQWtCLFVBQUFpRSxRQUFRLEVBQUk7QUFDN0IsY0FBTXRFLEVBQUUsR0FBR3NFLFFBQVEsQ0FBQy9ELFlBQVQsQ0FBc0Isa0JBQXRCLENBQVg7QUFDQSxjQUFNZ0UsT0FBTyxHQUFHckUsUUFBUSxDQUFDTyxjQUFULENBQXdCVCxFQUF4QixDQUFoQjs7QUFFQSxjQUFJdUUsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3JCO0FBQ0FELG9CQUFRLENBQUM1RCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxDQUFULEVBQVk7QUFDOUNBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBMkQscUJBQU8sQ0FBQ0MsU0FBUixHQUFvQjdELENBQUMsQ0FBQ3FCLE1BQUYsQ0FBU3lDLEtBQVQsQ0FBZUUsT0FBZixDQUF1QixlQUF2QixFQUF1QyxFQUF2QyxFQUEyQ3ZFLE1BQS9EO0FBQ0EsYUFIRCxFQUZxQixDQU9yQjs7QUFDQWtFLG9CQUFRLENBQUNJLGFBQVQsQ0FBdUJQLFVBQXZCO0FBQ0E7QUFDRCxTQWREO0FBZUE7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJcEUseURBQUosRUFBRCxDQUFjMEMsVUFBZDtBQUNDLElBQUl0QiwwREFBSixFQUFELENBQWVzQixVQUFmO0FBQ0MsSUFBSWIsb0VBQUosRUFBRCxDQUF3QmEsVUFBeEI7QUFDQyxJQUFJTCx1REFBSixFQUFELENBQVlLLFVBQVo7QUFDQyxJQUFJd0IsZ0VBQUosRUFBRCxDQUFvQnhCLFVBQXBCLEciLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BpcGUuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcIm1vZGFsXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAobW9kYWxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRtb2RhbFRyaWdnZXJzLmZvckVhY2goYnV0dG9uID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJsYXlcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlXG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheUNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0XHRjb25zdCBjb250ZW50Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jb250ZW50c19fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnRDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInNjcm9sbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBzY3JvbGxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChzY3JvbGxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY3JvbGxUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIikgfHwgXCJzdGFydFwiO1xuXG5cdFx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRcdGJsb2NrOiBibG9ja1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZXRjaFRleHRhcmVhIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dGFyZWEtZXhwYW5kZWRcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRhYlwiO1xuXHRcdHRoaXMudGFicyA9IFtdO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKHRhYiA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRjb25zdHJ1Y3Rvcih0YWIpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gdGFiO1xuXHRcdHRoaXMudGFiSXRlbXMgPSBbXTtcblxuXHRcdHRoaXMuaXRlbUVsZW1lbnRzID0gW107XG5cdFx0dGhpcy5jb250ZW50RWxlbWVudHMgPSBbXTtcblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goZnVuY3Rpb24odGFiSXRlbSkge1xuXHRcdFx0aWYgKHRhYkl0ZW0uaWQgPT09IGFjdGl2ZUl0ZW1JRCkge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LmFkZChcInBwLXRhYl9fbWVudV9fYWN0aXZlXCIpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGFiX19tZW51X19hY3RpdmVcIik7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBDb2xsZWN0XG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBwLXRhYl9fbWVudSBsaVwiKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLmZpcnN0RWxlbWVudENoaWxkLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYl9fbWVudV9fYWN0aXZlXCIpXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBFdmVudEhhbmRsZXJcblx0XHRsZXQgYWN0aXZlSUQgPSBudWxsO1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0ubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoaXRlbS5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGl0ZW0udmlzaWJsZSkge1xuXHRcdFx0XHRhY3RpdmVJRCA9IGl0ZW0uaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsIHNldHVwXG5cdFx0dGhpcy50b2dnbGUoYWN0aXZlSUQpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q291bnRlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRleHQtY291bnRlclwiO1xuXHRcdHRoaXMuaWRTdHJpY3QgPSBcInRleHQtY291bnRlci1zdHJpY3RcIlxuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEV2ZW50KFwia2V5dXBcIik7XG5cblx0XHQvLyBOb3JtYWxcblx0XHRsZXQgdGV4dEZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRleHRGb3Jtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0Rm9ybXMuZm9yRWFjaCh0ZXh0Rm9ybSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb3VudGVyLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBTdHJpY3Rcblx0XHR0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0ZXh0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5cdFx0XHRcdGlmIChjb3VudGVyICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVGV4dCBGb3JtXG5cdFx0XHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGNvdW50ZXIuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsXCI7XG5pbXBvcnQgU3RyZXRjaFRleHRhcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYVwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYlwiO1xuaW1wb3J0IFRleHRDb3VudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyXCI7XG5cbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTY3JvbGwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTdHJldGNoVGV4dGFyZWEoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUYWIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUZXh0Q291bnRlcigpKS5pbml0aWFsaXplKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9