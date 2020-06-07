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
          var counter = document.querySelector(id);

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
          var counter = document.querySelector(id);

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
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.js");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.js");





new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]().initialize();
new _components_to_scroll__WEBPACK_IMPORTED_MODULE_1__["default"]().initialize();
new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_2__["default"]().initialize();
new _components_tab__WEBPACK_IMPORTED_MODULE_3__["default"]().initialize();
new _components_text_counter__WEBPACK_IMPORTED_MODULE_4__["default"]().initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RvX3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGlwZS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsImlkIiwibW9kYWxUcmlnZ2VycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJidXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3ZlcmxheSIsIm92ZXJsYXlDbG9zZSIsImNvbnRlbnRDbG9zZSIsIlN0cmV0Y2hUZXh0YXJlYSIsInRleHRhcmVhcyIsInRleHRhcmVhIiwiZXhwYW5kZWRUZXh0YXJlYSIsInRhcmdldCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImpvaW4iLCJUYWIiLCJ0YWJzIiwidGFiIiwicHVzaCIsIlRhYkNvbnRhaW5lciIsImluaXRpYWxpemUiLCJyb290RWxlbWVudCIsInRhYkl0ZW1zIiwiaXRlbUVsZW1lbnRzIiwiY29udGVudEVsZW1lbnRzIiwiYWN0aXZlSXRlbUlEIiwidGFiSXRlbSIsIm1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250ZW50IiwidmlzaWJsZSIsInJlbW92ZSIsIm1lbnVJdGVtcyIsIml0ZW0iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsImZpcnN0RWxlbWVudENoaWxkIiwiaGFzaCIsImNvbnRhaW5zIiwiYWN0aXZlSUQiLCJ0b2dnbGUiLCJUZXh0Q291bnRlciIsImlkU3RyaWN0Iiwia2V5dXBFdmVudCIsIkV2ZW50IiwidGV4dEZvcm1zIiwidGV4dEZvcm0iLCJjb3VudGVyIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwicmVwbGFjZSIsIlRvU2Nyb2xsIiwic2Nyb2xsVHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaHJlZiIsImJsb2NrIiwiZGVzdGluYXRpb25FbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxLO0FBQ3BCLG1CQUFjO0FBQUE7O0FBQ2IsU0FBS0MsRUFBTCxHQUFVLE9BQVY7QUFDQTs7OztpQ0FFWTtBQUNaLFVBQU1DLGFBQWEsR0FB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cUIsa0JBQXJCLEtBQTRDLE9BQTFEOztBQUVBLGNBQUk4RCxJQUFJLEtBQUssSUFBVCxJQUFpQm5FLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QjRELElBQXZCLE1BQWlDLElBQXRELEVBQTREO0FBQzNEO0FBQ0E7O0FBRUQsY0FBTUUsa0JBQWtCLEdBQUdyRSxRQUFRLENBQUNPLGFBQVQsQ0FBdUI0RCxJQUF2QixLQUFnQ25FLFFBQVEsQ0FBQ3NFLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTNEO0FBRUFKLGlCQUFPLENBQUMxRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDN0NBLGFBQUMsQ0FBQ0MsY0FBRjtBQUNBMkQsOEJBQWtCLENBQUNFLGNBQW5CLENBQWtDO0FBQ2pDQyxzQkFBUSxFQUFFLFFBRHVCO0FBRWpDSixtQkFBSyxFQUFFQTtBQUYwQixhQUFsQztBQUlBLFdBTkQ7QUFPQSxTQWpCRDtBQWtCQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDLElBQUl2RSx5REFBSixFQUFELENBQWNnQyxVQUFkO0FBQ0MsSUFBSW1DLDZEQUFKLEVBQUQsQ0FBaUJuQyxVQUFqQjtBQUNDLElBQUliLG9FQUFKLEVBQUQsQ0FBd0JhLFVBQXhCO0FBQ0MsSUFBSUwsdURBQUosRUFBRCxDQUFZSyxVQUFaO0FBQ0MsSUFBSXdCLGdFQUFKLEVBQUQsQ0FBb0J4QixVQUFwQixHIiwiZmlsZSI6InBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9waXBlLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJsYXlcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlXG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheUNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0XHRjb25zdCBjb250ZW50Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jb250ZW50c19fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnRDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRleHRhcmVhLWV4cGFuZGVkXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0YXJlYXMuZm9yRWFjaCgodGV4dGFyZWEpID0+IHtcblx0XHRcdFx0dGhpcy5leHBhbmRlZFRleHRhcmVhKHRleHRhcmVhKTtcblx0XHRcdFx0dGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gdGhpcy5leHBhbmRlZFRleHRhcmVhKGUudGFyZ2V0KSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRleHBhbmRlZFRleHRhcmVhKHRhcmdldCkge1xuXHRcdHRhcmdldC5zdHlsZS5oZWlnaHQgPSBbdGFyZ2V0LnNjcm9sbEhlaWdodCwgXCJweFwiXS5qb2luKFwiXCIpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0YWJcIjtcblx0XHR0aGlzLnRhYnMgPSBbXTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IodGFiKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IHRhYjtcblx0XHR0aGlzLnRhYkl0ZW1zID0gW107XG5cblx0XHR0aGlzLml0ZW1FbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuY29udGVudEVsZW1lbnRzID0gW107XG5cdH1cblxuXHR0b2dnbGUoYWN0aXZlSXRlbUlEKSB7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHRhYkl0ZW0pIHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQoXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRhYl9fbWVudV9fYWN0aXZlXCIpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly8gQ29sbGVjdFxuXHRcdGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcC10YWJfX21lbnUgbGlcIik7XG5cdFx0bWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLnRhYkl0ZW1zLnB1c2goe1xuXHRcdFx0XHRpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygxOCkuc2xpY2UoLTgpLFxuXHRcdFx0XHRtZW51OiBpdGVtLFxuXHRcdFx0XHRjb250ZW50OiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5oYXNoKSxcblx0XHRcdFx0dmlzaWJsZTogaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgRXZlbnRIYW5kbGVyXG5cdFx0bGV0IGFjdGl2ZUlEID0gbnVsbDtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChpdGVtLnZpc2libGUpIHtcblx0XHRcdFx0YWN0aXZlSUQgPSBpdGVtLmlkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gSW5pdGlhbCBzZXR1cFxuXHRcdHRoaXMudG9nZ2xlKGFjdGl2ZUlEKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0LWNvdW50ZXJcIjtcblx0XHR0aGlzLmlkU3RyaWN0ID0gXCJ0ZXh0LWNvdW50ZXItc3RyaWN0XCJcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qga2V5dXBFdmVudCA9IG5ldyBFdmVudChcImtleXVwXCIpO1xuXG5cdFx0Ly8gTm9ybWFsXG5cdFx0bGV0IHRleHRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0Rm9ybXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dEZvcm1zLmZvckVhY2godGV4dEZvcm0gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb3VudGVyLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBTdHJpY3Rcblx0XHR0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0ZXh0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y291bnRlci5pbm5lclRleHQgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0XHRcdHRleHRGb3JtLmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9TY3JvbGwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJzY3JvbGxcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgc2Nyb2xsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAoc2Nyb2xsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0c2Nyb2xsVHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdFx0Y29uc3QgaHJlZiAgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRkZXN0aW5hdGlvbkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXG5cdFx0XHRcdFx0XHRibG9jazogYmxvY2tcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgVG9TY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy90b19zY3JvbGxcIjtcbmltcG9ydCBTdHJldGNoVGV4dGFyZWEgZnJvbSBcIi4vY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvdGFiXCI7XG5pbXBvcnQgVGV4dENvdW50ZXIgZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0X2NvdW50ZXJcIjtcblxuKG5ldyBNb2RhbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvU2Nyb2xsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU3RyZXRjaFRleHRhcmVhKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGFiKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGV4dENvdW50ZXIoKSkuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==