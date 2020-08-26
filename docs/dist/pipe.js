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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pipe.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/accordion.ts":
/*!****************************************!*\
  !*** ./src/js/components/accordion.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Accordion = /** @class */ (function () {
    function Accordion() {
        this.id = "accordion";
        this.activeClass = "pipejs-accordion-active";
    }
    Accordion.prototype.initialize = function () {
        var _this = this;
        var triggers = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        if (triggers.length > 0) {
            triggers.forEach(function (trigger) {
                trigger.addEventListener("click", function (e) {
                    e.preventDefault();
                    var target = trigger.getAttribute("data-pipe-target");
                    if (target !== null) {
                        var targetElement = document.querySelector(target);
                        if (targetElement.classList.contains(_this.activeClass)) {
                            targetElement.classList.remove(_this.activeClass);
                            targetElement.style.maxHeight = "0";
                        }
                        else {
                            targetElement.classList.add(_this.activeClass);
                            targetElement.style.maxHeight = targetElement.scrollHeight + "px";
                        }
                    }
                });
            });
        }
    };
    return Accordion;
}());
/* harmony default export */ __webpack_exports__["default"] = (Accordion);


/***/ }),

/***/ "./src/js/components/modal.ts":
/*!************************************!*\
  !*** ./src/js/components/modal.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Modal = /** @class */ (function () {
    function Modal() {
        this.id = "modal";
    }
    Modal.prototype.initialize = function () {
        var modalTriggers = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        if (modalTriggers.length > 0) {
            modalTriggers.forEach(function (button) {
                var id = button.getAttribute("data-pipe-target");
                var modal = document.querySelector(id);
                if (modal !== null) {
                    // Trigger
                    button.addEventListener("click", function (e) {
                        e.preventDefault();
                        modal.style.display = "block";
                    });
                    // Overlay
                    var overlay = modal.querySelector(".pp-modal__overlay");
                    if (overlay !== null) {
                        overlay.addEventListener("click", function (e) {
                            e.preventDefault();
                            modal.style.display = "none";
                        });
                    }
                    // Close
                    var overlayClose = modal.querySelector(".pp-modal__close");
                    if (overlayClose !== null) {
                        overlayClose.addEventListener("click", function (e) {
                            e.preventDefault();
                            modal.style.display = "none";
                        });
                    }
                    // Close in contents
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
    };
    return Modal;
}());
/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./src/js/components/stretch_textarea.ts":
/*!***********************************************!*\
  !*** ./src/js/components/stretch_textarea.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StretchTextarea = /** @class */ (function () {
    function StretchTextarea() {
        this.id = "textarea-expanded";
    }
    StretchTextarea.prototype.initialize = function () {
        var _this = this;
        var textareas = document.querySelectorAll("textarea[data-pipejs=" + this.id + "]");
        if (textareas.length > 0) {
            textareas.forEach(function (textarea) {
                _this.expandedTextarea(textarea);
                textarea.addEventListener("input", function (e) { return _this.expandedTextarea(e.target); });
            });
        }
    };
    StretchTextarea.prototype.expandedTextarea = function (target) {
        target.style.height = [target.scrollHeight, "px"].join("");
    };
    return StretchTextarea;
}());
/* harmony default export */ __webpack_exports__["default"] = (StretchTextarea);


/***/ }),

/***/ "./src/js/components/tab.ts":
/*!**********************************!*\
  !*** ./src/js/components/tab.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Tab = /** @class */ (function () {
    function Tab() {
        this.id = "tab";
        this.tabs = [];
    }
    Tab.prototype.initialize = function () {
        var _this = this;
        var tabs = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        if (tabs.length > 0) {
            tabs.forEach(function (tab) {
                _this.tabs.push(new TabContainer(tab));
            });
            this.tabs.forEach(function (tab) { return tab.initialize(); });
        }
    };
    return Tab;
}());
/* harmony default export */ __webpack_exports__["default"] = (Tab);
var TabContainer = /** @class */ (function () {
    function TabContainer(tab) {
        this.rootElement = tab;
        this.tabItems = [];
        if (tab.classList.contains("pp-tab")) {
            this.activeClassName = "pp-tab__menu__active";
            this.menuItemSelector = ".pp-tab__menu li";
        }
        else if (tab.classList.contains("pp-tab-border")) {
            this.activeClassName = "pp-tab-border__menu__active";
            this.menuItemSelector = ".pp-tab-border__menu li";
        }
    }
    TabContainer.prototype.toggle = function (activeItemID) {
        var _this = this;
        this.tabItems.forEach(function (tabItem) {
            if (tabItem.id === activeItemID) {
                tabItem.menu.classList.add(_this.activeClassName);
                tabItem.content.style.display = "block";
                tabItem.visible = true;
            }
            else {
                tabItem.menu.classList.remove(_this.activeClassName);
                tabItem.content.style.display = "none";
                tabItem.visible = false;
            }
        });
    };
    TabContainer.prototype.initialize = function () {
        var _this = this;
        // Collect
        var menuItems = this.rootElement.querySelectorAll(this.menuItemSelector);
        menuItems.forEach(function (item) {
            _this.tabItems.push({
                id: Math.random().toString(18).slice(-8),
                menu: item,
                content: _this.rootElement.querySelector(item.firstElementChild.hash),
                visible: item.classList.contains(_this.activeClassName)
            });
        });
        // Add EventHandler
        var activeID = null;
        this.tabItems.forEach(function (item) {
            item.menu.addEventListener("click", function (e) {
                e.preventDefault();
                _this.toggle(item.id);
            });
            if (item.visible) {
                activeID = item.id;
            }
        });
        // Initial setup
        this.toggle(activeID);
    };
    return TabContainer;
}());


/***/ }),

/***/ "./src/js/components/text_counter.ts":
/*!*******************************************!*\
  !*** ./src/js/components/text_counter.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextCounter = /** @class */ (function () {
    function TextCounter() {
        this.id = "text-counter";
        this.idStrict = "text-counter-strict";
    }
    TextCounter.prototype.initialize = function () {
        var keyupEvent = new Event("keyup");
        // Normal
        var textForms = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        if (textForms.length > 0) {
            textForms.forEach(function (textForm) {
                var id = textForm.getAttribute("data-pipe-target");
                var counter = document.querySelector(id);
                if (counter !== null) {
                    // Text Form
                    textForm.addEventListener("keyup", function (e) {
                        e.preventDefault();
                        var targetElement = e.target;
                        var maxChar = parseInt(targetElement.getAttribute("data-pipe-max"));
                        var counterFirstElementChild = counter.firstElementChild;
                        if (isNaN(maxChar) === false) {
                            if (targetElement.value.length > maxChar) {
                                counterFirstElementChild.classList.add("pp-text--danger");
                            }
                            else {
                                counterFirstElementChild.classList.remove("pp-text--danger");
                            }
                            counterFirstElementChild.innerText = targetElement.value.length.toString();
                        }
                        else {
                            counter.innerText = targetElement.value.length.toString();
                        }
                    });
                    // Event Trigger
                    textForm.dispatchEvent(keyupEvent);
                }
            });
        }
        // Strict
        textForms = document.querySelectorAll("[data-pipejs=" + this.idStrict + "]");
        if (textForms.length > 0) {
            textForms.forEach(function (textForm) {
                var id = textForm.getAttribute("data-pipe-target");
                var counter = document.querySelector(id);
                if (counter !== null) {
                    // Text Form
                    textForm.addEventListener("keyup", function (e) {
                        e.preventDefault();
                        var targetElement = e.target;
                        var maxChar = parseInt(targetElement.getAttribute("data-pipe-max"));
                        var counterFirstElementChild = counter.firstElementChild;
                        var currentCharCount = targetElement.value.replace(/\r\n|\n|\s|　/g, '').length;
                        if (isNaN(maxChar) === false) {
                            if (currentCharCount > maxChar) {
                                counterFirstElementChild.classList.add("pp-text--danger");
                            }
                            else {
                                counterFirstElementChild.classList.remove("pp-text--danger");
                            }
                            counterFirstElementChild.innerText = currentCharCount.toString();
                        }
                        else {
                            counter.innerText = currentCharCount.toString();
                        }
                    });
                    // Event Trigger
                    textForm.dispatchEvent(keyupEvent);
                }
            });
        }
    };
    return TextCounter;
}());
/* harmony default export */ __webpack_exports__["default"] = (TextCounter);


/***/ }),

/***/ "./src/js/components/to_scroll.ts":
/*!****************************************!*\
  !*** ./src/js/components/to_scroll.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ToScroll = /** @class */ (function () {
    function ToScroll() {
        this.id = "scroll";
    }
    ToScroll.prototype.initialize = function () {
        var scrollTriggers = document.querySelectorAll("[data-pipejs=" + this.id + "]");
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
                        block: "start"
                    });
                });
            });
        }
    };
    return ToScroll;
}());
/* harmony default export */ __webpack_exports__["default"] = (ToScroll);


/***/ }),

/***/ "./src/js/pipe.ts":
/*!************************!*\
  !*** ./src/js/pipe.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.ts");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");






(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0lBSUM7UUFDQyxJQUFJ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QUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixrQkFBa0IsQ0FBQyxjQUFjLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixLQUFLLEVBQUUsT0FBTztxQkFDZCxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNSO0FBQ087QUFDYztBQUN6QjtBQUNpQjtBQUVwRCxDQUFDLElBQUksNkRBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxJQUFJLHlEQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzNCLENBQUMsSUFBSSw2REFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUksb0VBQWUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDckMsQ0FBQyxJQUFJLHVEQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pCLENBQUMsSUFBSSxnRUFBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJwaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvcGlwZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblx0cHJpdmF0ZSBhY3RpdmVDbGFzczogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcImFjY29yZGlvblwiO1xuXHRcdHRoaXMuYWN0aXZlQ2xhc3MgPSBcInBpcGVqcy1hY2NvcmRpb24tYWN0aXZlXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRyaWdnZXJzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXG5cdFx0aWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYWN0aXZlQ2xhc3MpKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBPdmVybGF5XG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX292ZXJsYXlcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDbG9zZVxuXHRcdFx0XHRcdGNvbnN0IG92ZXJsYXlDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChvdmVybGF5Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlIGluIGNvbnRlbnRzXG5cdFx0XHRcdFx0Y29uc3QgY29udGVudENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChjb250ZW50Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJldGNoVGV4dGFyZWEge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dGFyZWEtZXhwYW5kZWRcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblx0cHJpdmF0ZSB0YWJzOiBBcnJheTxUYWJDb250YWluZXI+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRhYlwiO1xuXHRcdHRoaXMudGFicyA9IFtdO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRwcml2YXRlIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSB0YWJJdGVtczogQXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBhY3RpdmVDbGFzc05hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBtZW51SXRlbVNlbGVjdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGFiOiBIVE1MRWxlbWVudCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSB0YWI7XG5cdFx0dGhpcy50YWJJdGVtcyA9IFtdO1xuXG5cdFx0aWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiX19tZW51IGxpXCI7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiLWJvcmRlclwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYi1ib3JkZXJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiLWJvcmRlcl9fbWVudSBsaVwiO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0pID0+IHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vIENvbGxlY3Rcblx0XHRjb25zdCBtZW51SXRlbXMgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5tZW51SXRlbVNlbGVjdG9yKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcigoPEhUTUxBbmNob3JFbGVtZW50Pml0ZW0uZmlyc3RFbGVtZW50Q2hpbGQpLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzTmFtZSlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIEV2ZW50SGFuZGxlclxuXHRcdGxldCBhY3RpdmVJRCA9IG51bGw7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXRlbS52aXNpYmxlKSB7XG5cdFx0XHRcdGFjdGl2ZUlEID0gaXRlbS5pZDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWwgc2V0dXBcblx0XHR0aGlzLnRvZ2dsZShhY3RpdmVJRCk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb3VudGVyIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXHRwcml2YXRlIGlkU3RyaWN0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dC1jb3VudGVyXCI7XG5cdFx0dGhpcy5pZFN0cmljdCA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiXG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblxuXHRcdC8vIE5vcm1hbFxuXHRcdGxldCB0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY291bnRlckZpcnN0RWxlbWVudENoaWxkOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jb3VudGVyLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNOYU4obWF4Q2hhcikgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aCA+IG1heENoYXIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gdGFyZ2V0RWxlbWVudC52YWx1ZS5sZW5ndGgudG9TdHJpbmcoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuaW5uZXJUZXh0ID0gdGFyZ2V0RWxlbWVudC52YWx1ZS5sZW5ndGgudG9TdHJpbmcoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBTdHJpY3Rcblx0XHR0ZXh0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKTtcblx0XHRpZiAodGV4dEZvcm1zLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRGb3Jtcy5mb3JFYWNoKHRleHRGb3JtID0+IHtcblx0XHRcdFx0Y29uc3QgaWQ6IHN0cmluZyA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY291bnRlckZpcnN0RWxlbWVudENoaWxkOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jb3VudGVyLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudENoYXJDb3VudCA9IHRhcmdldEVsZW1lbnQudmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0aWYgKGlzTmFOKG1heENoYXIpID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudENoYXJDb3VudCA+IG1heENoYXIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyRmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gY3VycmVudENoYXJDb3VudC50b1N0cmluZygpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y291bnRlci5pbm5lclRleHQgPSBjdXJyZW50Q2hhckNvdW50LnRvU3RyaW5nKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb1Njcm9sbCB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJzY3JvbGxcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgc2Nyb2xsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAoc2Nyb2xsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0c2Nyb2xsVHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdFx0Y29uc3QgaHJlZiAgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gbnVsbCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZGVzdGluYXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRkZXN0aW5hdGlvbkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXG5cdFx0XHRcdFx0XHRibG9jazogXCJzdGFydFwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IFRvU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvdG9fc2Nyb2xsXCI7XG5pbXBvcnQgU3RyZXRjaFRleHRhcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYVwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYlwiO1xuaW1wb3J0IFRleHRDb3VudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyXCI7XG5cbihuZXcgQWNjb3JkaW9uKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb1Njcm9sbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFN0cmV0Y2hUZXh0YXJlYSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRhYigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRleHRDb3VudGVyKCkpLmluaXRpYWxpemUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=