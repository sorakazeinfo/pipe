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

/***/ "./src/js/base/AppComponent.ts":
/*!*************************************!*\
  !*** ./src/js/base/AppComponent.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.entry = "data-pipejs";
    }
    AppComponent.prototype.getTriggerElements = function () {
        return document.querySelectorAll("[" + this.entry + "=" + this.id + "]");
    };
    return AppComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (AppComponent);


/***/ }),

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
        triggers.forEach(function (trigger) {
            var target = trigger.getAttribute("data-pipe-target");
            var targetElement = document.querySelector(target);
            if (targetElement !== null) {
                trigger.addEventListener("click", function (e) {
                    e.preventDefault();
                    _this.click(targetElement, _this.activeClass);
                });
            }
        });
    };
    Accordion.prototype.click = function (targetElement, activeClass) {
        if (targetElement.classList.contains(activeClass)) {
            targetElement.classList.remove(activeClass);
            targetElement.style.maxHeight = "0";
        }
        else {
            targetElement.classList.add(activeClass);
            targetElement.style.maxHeight = targetElement.scrollHeight + "px";
        }
    };
    return Accordion;
}());
/* harmony default export */ __webpack_exports__["default"] = (Accordion);


/***/ }),

/***/ "./src/js/components/loading.ts":
/*!**************************************!*\
  !*** ./src/js/components/loading.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_AppComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/AppComponent */ "./src/js/base/AppComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.id = "loading";
        return _this;
    }
    Loading.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (triggerElement) {
            var target = triggerElement.getAttribute("data-pipe-target");
            var targetElement = document.querySelector(target);
            triggerElement.addEventListener("click", function (e) {
                triggerElement.style.display = "none";
                targetElement.style.display = "";
            });
        });
    };
    return Loading;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Loading);


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
                    // Close Action
                    var closeAction = modal.querySelector(".pp-modal__close-action");
                    if (closeAction !== null) {
                        closeAction.addEventListener("click", function (e) {
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
    TextCounter.prototype.displayCounter = function (target, length, minLength, maxLength) {
        if (minLength > 0) {
            target.classList.remove("pp-text--info");
            if (length < minLength) {
                target.classList.add("pp-text--info");
            }
        }
        if (maxLength > 0) {
            target.classList.remove("pp-text--danger");
            if (length > maxLength) {
                target.classList.add("pp-text--danger");
            }
        }
        target.innerText = length.toString();
    };
    TextCounter.prototype.getCharacterLength = function (mode, value) {
        if (mode === "strict") {
            return value.replace(/\r\n|\n|\s|　/g, '').length;
        }
        else {
            return value.length;
        }
    };
    TextCounter.prototype.bindEvent = function (textForm, mode) {
        var _this = this;
        var keyupEvent = new Event("keyup");
        var id = textForm.getAttribute("data-pipe-target");
        var counter = document.querySelector(id);
        if (counter !== null) {
            // Text Form
            textForm.addEventListener("keyup", function (e) {
                var _a, _b;
                e.preventDefault();
                var targetElement = e.target;
                var length = _this.getCharacterLength(mode, targetElement.value);
                var minChar = (_a = parseInt(targetElement.getAttribute("data-pipe-min"))) !== null && _a !== void 0 ? _a : 0;
                var maxChar = (_b = parseInt(targetElement.getAttribute("data-pipe-max"))) !== null && _b !== void 0 ? _b : 0;
                _this.displayCounter(counter, length, minChar, maxChar);
            });
            // Event Trigger
            textForm.dispatchEvent(keyupEvent);
        }
    };
    TextCounter.prototype.initialize = function () {
        var _this = this;
        var normalForms = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        normalForms.forEach(function (normalForm) { return _this.bindEvent(normalForm, "normal"); });
        var strictForms = document.querySelectorAll("[data-pipejs=" + this.idStrict + "]");
        strictForms.forEach(function (strictForm) { return _this.bindEvent(strictForm, "strict"); });
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
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading */ "./src/js/components/loading.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.ts");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");







(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_loading__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_6__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QyxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLE9BQU87cUJBQ2QsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM5QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNKO0FBQ0o7QUFDTztBQUNjO0FBQ3pCO0FBQ2lCO0FBRXBELENBQUMsSUFBSSw2REFBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMvQixDQUFDLElBQUksMkRBQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDN0IsQ0FBQyxJQUFJLHlEQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzNCLENBQUMsSUFBSSw2REFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUksb0VBQWUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDckMsQ0FBQyxJQUFJLHVEQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pCLENBQUMsSUFBSSxnRUFBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJwaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvcGlwZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nO1xuXHRwcm90ZWN0ZWQgZW50cnk6IHN0cmluZyA9IFwiZGF0YS1waXBlanNcIjtcblxuXHRwcm90ZWN0ZWQgZ2V0VHJpZ2dlckVsZW1lbnRzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy5lbnRyeX09JHt0aGlzLmlkfV1gKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXHRwcml2YXRlIGFjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwiYWNjb3JkaW9uXCI7XG5cdFx0dGhpcy5hY3RpdmVDbGFzcyA9IFwicGlwZWpzLWFjY29yZGlvbi1hY3RpdmVcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdHJpZ2dlcnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cblx0XHR0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuY2xpY2sodGFyZ2V0RWxlbWVudCwgdGhpcy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xpY2sodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGFjdGl2ZUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQXBwQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmlkID0gXCJsb2FkaW5nXCI7XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHR0cmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcIm1vZGFsXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAobW9kYWxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRtb2RhbFRyaWdnZXJzLmZvckVhY2goYnV0dG9uID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0Y29uc3QgbW9kYWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJsYXlcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlXG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheUNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0XHRjb25zdCBjb250ZW50Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jb250ZW50c19fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnRDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgQWN0aW9uXG5cdFx0XHRcdFx0Y29uc3QgY2xvc2VBY3Rpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jbG9zZS1hY3Rpb25cIik7XG5cdFx0XHRcdFx0aWYgKGNsb3NlQWN0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjbG9zZUFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0YXJlYS1leHBhbmRlZFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB0ZXh0YXJlYVtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dGFyZWFzLmZvckVhY2goKHRleHRhcmVhKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kZWRUZXh0YXJlYSh0ZXh0YXJlYSk7XG5cdFx0XHRcdHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IHRoaXMuZXhwYW5kZWRUZXh0YXJlYShlLnRhcmdldCkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kZWRUZXh0YXJlYSh0YXJnZXQpIHtcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gW3RhcmdldC5zY3JvbGxIZWlnaHQsIFwicHhcIl0uam9pbihcIlwiKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXHRwcml2YXRlIHRhYnM6IEFycmF5PFRhYkNvbnRhaW5lcj47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGFiXCI7XG5cdFx0dGhpcy50YWJzID0gW107XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGFicy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYjogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdFx0dGhpcy50YWJzLnB1c2gobmV3IFRhYkNvbnRhaW5lcih0YWIpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmluaXRpYWxpemUoKSk7XG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIFRhYkNvbnRhaW5lciB7XG5cdHByaXZhdGUgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRwcml2YXRlIHRhYkl0ZW1zOiBBcnJheTxhbnk+O1xuXHRwcml2YXRlIGFjdGl2ZUNsYXNzTmFtZTogc3RyaW5nO1xuXHRwcml2YXRlIG1lbnVJdGVtU2VsZWN0b3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0YWI6IEhUTUxFbGVtZW50KSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IHRhYjtcblx0XHR0aGlzLnRhYkl0ZW1zID0gW107XG5cblx0XHRpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYlwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWJfX21lbnUgbGlcIjtcblx0XHR9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWItYm9yZGVyXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiLWJvcmRlcl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWItYm9yZGVyX19tZW51IGxpXCI7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKGFjdGl2ZUl0ZW1JRCkge1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaCgodGFiSXRlbSkgPT4ge1xuXHRcdFx0aWYgKHRhYkl0ZW0uaWQgPT09IGFjdGl2ZUl0ZW1JRCkge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly8gQ29sbGVjdFxuXHRcdGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm1lbnVJdGVtU2VsZWN0b3IpO1xuXHRcdG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0dGhpcy50YWJJdGVtcy5wdXNoKHtcblx0XHRcdFx0aWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTgpLnNsaWNlKC04KSxcblx0XHRcdFx0bWVudTogaXRlbSxcblx0XHRcdFx0Y29udGVudDogdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKCg8SFRNTEFuY2hvckVsZW1lbnQ+aXRlbS5maXJzdEVsZW1lbnRDaGlsZCkuaGFzaCksXG5cdFx0XHRcdHZpc2libGU6IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgRXZlbnRIYW5kbGVyXG5cdFx0bGV0IGFjdGl2ZUlEID0gbnVsbDtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChpdGVtLnZpc2libGUpIHtcblx0XHRcdFx0YWN0aXZlSUQgPSBpdGVtLmlkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gSW5pdGlhbCBzZXR1cFxuXHRcdHRoaXMudG9nZ2xlKGFjdGl2ZUlEKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cdHByaXZhdGUgaWRTdHJpY3Q6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0LWNvdW50ZXJcIjtcblx0XHR0aGlzLmlkU3RyaWN0ID0gXCJ0ZXh0LWNvdW50ZXItc3RyaWN0XCJcblx0fVxuXG5cdGRpc3BsYXlDb3VudGVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGxlbmd0aDogbnVtYmVyLCBtaW5MZW5ndGg6IG51bWJlciwgbWF4TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAobWluTGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1pbmZvXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0taW5mb1wiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobWF4TGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cblx0XHRcdGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmlubmVyVGV4dCA9IGxlbmd0aC50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0Q2hhcmFjdGVyTGVuZ3RoKG1vZGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0aWYgKG1vZGUgPT09IFwic3RyaWN0XCIpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdGJpbmRFdmVudCh0ZXh0Rm9ybTogSFRNTEVsZW1lbnQsIG1vZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblx0XHRjb25zdCBpZDogc3RyaW5nID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD5lLnRhcmdldDtcblx0XHRcdFx0Y29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmdldENoYXJhY3Rlckxlbmd0aChtb2RlLCB0YXJnZXRFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgbWluQ2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWluXCIpKSA/PyAwO1xuXHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpID8/IDA7XG5cdFx0XHRcdHRoaXMuZGlzcGxheUNvdW50ZXIoY291bnRlciwgbGVuZ3RoLCBtaW5DaGFyLCBtYXhDaGFyKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgbm9ybWFsRm9ybXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0bm9ybWFsRm9ybXMuZm9yRWFjaChub3JtYWxGb3JtID0+IHRoaXMuYmluZEV2ZW50KG5vcm1hbEZvcm0sIFwibm9ybWFsXCIpKTtcblxuXHRcdGNvbnN0IHN0cmljdEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApXG5cdFx0c3RyaWN0Rm9ybXMuZm9yRWFjaChzdHJpY3RGb3JtID0+IHRoaXMuYmluZEV2ZW50KHN0cmljdEZvcm0sIFwic3RyaWN0XCIpKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9TY3JvbGwge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwic2Nyb2xsXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHNjcm9sbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHNjcm9sbFRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHNjcm9sbFRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRcdGNvbnN0IGhyZWYgID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdFx0XHRjb25zdCBibG9jayA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKSB8fCBcInN0YXJ0XCI7XG5cblx0XHRcdFx0aWYgKGhyZWYgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZGVzdGluYXRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRcdGJlaGF2aW9yOiBcInNtb290aFwiLFxuXHRcdFx0XHRcdFx0YmxvY2s6IFwic3RhcnRcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IFRvU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvdG9fc2Nyb2xsXCI7XG5pbXBvcnQgU3RyZXRjaFRleHRhcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYVwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYlwiO1xuaW1wb3J0IFRleHRDb3VudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyXCI7XG5cbihuZXcgQWNjb3JkaW9uKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTG9hZGluZygpKS5pbml0aWFsaXplKCk7XG4obmV3IE1vZGFsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVG9TY3JvbGwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTdHJldGNoVGV4dGFyZWEoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUYWIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUZXh0Q291bnRlcigpKS5pbml0aWFsaXplKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9