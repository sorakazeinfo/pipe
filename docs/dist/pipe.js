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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUuanMiXSwibmFtZXMiOlsiTW9kYWwiLCJpZCIsImFjdGl2ZUNsYXNzIiwidHJpZ2dlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJtb2RhbFRyaWdnZXJzIiwiYnV0dG9uIiwibW9kYWwiLCJkaXNwbGF5Iiwib3ZlcmxheSIsIm92ZXJsYXlDbG9zZSIsImNvbnRlbnRDbG9zZSIsIlN0cmV0Y2hUZXh0YXJlYSIsInRleHRhcmVhcyIsInRleHRhcmVhIiwiZXhwYW5kZWRUZXh0YXJlYSIsImhlaWdodCIsImpvaW4iLCJUYWIiLCJ0YWJzIiwidGFiIiwicHVzaCIsIlRhYkNvbnRhaW5lciIsImluaXRpYWxpemUiLCJyb290RWxlbWVudCIsInRhYkl0ZW1zIiwiaXRlbUVsZW1lbnRzIiwiY29udGVudEVsZW1lbnRzIiwiYWN0aXZlSXRlbUlEIiwidGFiSXRlbSIsIm1lbnUiLCJjb250ZW50IiwidmlzaWJsZSIsIm1lbnVJdGVtcyIsIml0ZW0iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsImZpcnN0RWxlbWVudENoaWxkIiwiaGFzaCIsImFjdGl2ZUlEIiwidG9nZ2xlIiwiVGV4dENvdW50ZXIiLCJpZFN0cmljdCIsImtleXVwRXZlbnQiLCJFdmVudCIsInRleHRGb3JtcyIsInRleHRGb3JtIiwiY291bnRlciIsIm1heENoYXIiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidmFsdWUiLCJpbm5lclRleHQiLCJkaXNwYXRjaEV2ZW50IiwiY3VycmVudENoYXJDb3VudCIsInJlcGxhY2UiLCJUb1Njcm9sbCIsInNjcm9sbFRyaWdnZXJzIiwiaHJlZiIsImJsb2NrIiwiZGVzdGluYXRpb25FbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQWNjb3JkaW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUFDQyxJQUFJb0IsZ0VBQUosRUFBRCxDQUFvQnBCLFVBQXBCLEciLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BpcGUuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcImFjY29yZGlvblwiO1xuXHRcdHRoaXMuYWN0aXZlQ2xhc3MgPSBcInBpcGVqcy1hY2NvcmRpb24tYWN0aXZlXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cblx0XHRpZiAodHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0XHRcdGlmICh0YXJnZXQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzKSkge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcIm1vZGFsXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAobW9kYWxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRtb2RhbFRyaWdnZXJzLmZvckVhY2goYnV0dG9uID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAobW9kYWwgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUcmlnZ2VyXG5cdFx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gT3ZlcmxheVxuXHRcdFx0XHRcdGNvbnN0IG92ZXJsYXkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19vdmVybGF5XCIpO1xuXHRcdFx0XHRcdGlmIChvdmVybGF5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2Vcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jbG9zZVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheUNsb3NlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRvdmVybGF5Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDbG9zZSBpbiBjb250ZW50c1xuXHRcdFx0XHRcdGNvbnN0IGNvbnRlbnRDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX2NvbnRlbnRzX19jbG9zZVwiKTtcblx0XHRcdFx0XHRpZiAoY29udGVudENsb3NlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb250ZW50Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZXRjaFRleHRhcmVhIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dGFyZWEtZXhwYW5kZWRcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRhYlwiO1xuXHRcdHRoaXMudGFicyA9IFtdO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKHRhYiA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRjb25zdHJ1Y3Rvcih0YWIpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gdGFiO1xuXHRcdHRoaXMudGFiSXRlbXMgPSBbXTtcblxuXHRcdHRoaXMuaXRlbUVsZW1lbnRzID0gW107XG5cdFx0dGhpcy5jb250ZW50RWxlbWVudHMgPSBbXTtcblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goZnVuY3Rpb24odGFiSXRlbSkge1xuXHRcdFx0aWYgKHRhYkl0ZW0uaWQgPT09IGFjdGl2ZUl0ZW1JRCkge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LmFkZChcInBwLXRhYl9fbWVudV9fYWN0aXZlXCIpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGFiX19tZW51X19hY3RpdmVcIik7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBDb2xsZWN0XG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBwLXRhYl9fbWVudSBsaVwiKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLmZpcnN0RWxlbWVudENoaWxkLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYl9fbWVudV9fYWN0aXZlXCIpXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBFdmVudEhhbmRsZXJcblx0XHRsZXQgYWN0aXZlSUQgPSBudWxsO1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0ubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoaXRlbS5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGl0ZW0udmlzaWJsZSkge1xuXHRcdFx0XHRhY3RpdmVJRCA9IGl0ZW0uaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsIHNldHVwXG5cdFx0dGhpcy50b2dnbGUoYWN0aXZlSUQpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q291bnRlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRleHQtY291bnRlclwiO1xuXHRcdHRoaXMuaWRTdHJpY3QgPSBcInRleHQtY291bnRlci1zdHJpY3RcIlxuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEV2ZW50KFwia2V5dXBcIik7XG5cblx0XHQvLyBOb3JtYWxcblx0XHRsZXQgdGV4dEZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRleHRGb3Jtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0Rm9ybXMuZm9yRWFjaCh0ZXh0Rm9ybSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChjb3VudGVyICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVGV4dCBGb3JtXG5cdFx0XHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGNvbnN0IG1heENoYXIgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWF4XCIpKTtcblxuXHRcdFx0XHRcdFx0aWYgKE51bWJlci5pc05hTihtYXhDaGFyKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IG1heENoYXIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y291bnRlci5pbm5lclRleHQgPSBlLnRhcmdldC52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gU3RyaWN0XG5cdFx0dGV4dEZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZFN0cmljdH1dYCk7XG5cdFx0aWYgKHRleHRGb3Jtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0Rm9ybXMuZm9yRWFjaCh0ZXh0Rm9ybSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChjb3VudGVyICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVGV4dCBGb3JtXG5cdFx0XHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRDaGFyQ291bnQgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdFx0XHRcdFx0Y29uc3QgbWF4Q2hhciA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpO1xuXG5cdFx0XHRcdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG1heENoYXIpID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudENoYXJDb3VudCA+IG1heENoYXIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gY3VycmVudENoYXJDb3VudDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuaW5uZXJUZXh0ID0gY3VycmVudENoYXJDb3VudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwic2Nyb2xsXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHNjcm9sbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHNjcm9sbFRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHNjcm9sbFRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRcdGNvbnN0IGhyZWYgID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdFx0XHRjb25zdCBibG9jayA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKSB8fCBcInN0YXJ0XCI7XG5cblx0XHRcdFx0aWYgKGhyZWYgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZGVzdGluYXRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRcdGJlaGF2aW9yOiBcInNtb290aFwiLFxuXHRcdFx0XHRcdFx0YmxvY2s6IGJsb2NrXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IFRvU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvdG9fc2Nyb2xsXCI7XG5pbXBvcnQgU3RyZXRjaFRleHRhcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYVwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYlwiO1xuaW1wb3J0IFRleHRDb3VudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyXCI7XG5cbihuZXcgQWNjb3JkaW9uKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb1Njcm9sbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFN0cmV0Y2hUZXh0YXJlYSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRhYigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRleHRDb3VudGVyKCkpLmluaXRpYWxpemUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=