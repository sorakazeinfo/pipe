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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QUMsVUFBVSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxJQUFJLDJEQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdCLENBQUMsSUFBSSx5REFBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMzQixDQUFDLElBQUksNkRBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxJQUFJLG9FQUFlLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3JDLENBQUMsSUFBSSx1REFBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QixDQUFDLElBQUksZ0VBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BpcGUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZztcblx0cHJvdGVjdGVkIGVudHJ5OiBzdHJpbmcgPSBcImRhdGEtcGlwZWpzXCI7XG5cblx0cHJvdGVjdGVkIGdldFRyaWdnZXJFbGVtZW50cygpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuZW50cnl9PSR7dGhpcy5pZH1dYCk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblx0cHJpdmF0ZSBhY3RpdmVDbGFzczogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcImFjY29yZGlvblwiO1xuXHRcdHRoaXMuYWN0aXZlQ2xhc3MgPSBcInBpcGVqcy1hY2NvcmRpb24tYWN0aXZlXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRyaWdnZXJzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXG5cdFx0dHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmNsaWNrKHRhcmdldEVsZW1lbnQsIHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNsaWNrKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhY3RpdmVDbGFzczogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSkge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEFwcENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pZCA9IFwibG9hZGluZ1wiO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBPdmVybGF5XG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX292ZXJsYXlcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDbG9zZVxuXHRcdFx0XHRcdGNvbnN0IG92ZXJsYXlDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChvdmVybGF5Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlIGluIGNvbnRlbnRzXG5cdFx0XHRcdFx0Y29uc3QgY29udGVudENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChjb250ZW50Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJldGNoVGV4dGFyZWEge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dGFyZWEtZXhwYW5kZWRcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblx0cHJpdmF0ZSB0YWJzOiBBcnJheTxUYWJDb250YWluZXI+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRhYlwiO1xuXHRcdHRoaXMudGFicyA9IFtdO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRwcml2YXRlIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSB0YWJJdGVtczogQXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBhY3RpdmVDbGFzc05hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBtZW51SXRlbVNlbGVjdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGFiOiBIVE1MRWxlbWVudCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSB0YWI7XG5cdFx0dGhpcy50YWJJdGVtcyA9IFtdO1xuXG5cdFx0aWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiX19tZW51IGxpXCI7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiLWJvcmRlclwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYi1ib3JkZXJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiLWJvcmRlcl9fbWVudSBsaVwiO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0pID0+IHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vIENvbGxlY3Rcblx0XHRjb25zdCBtZW51SXRlbXMgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5tZW51SXRlbVNlbGVjdG9yKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcigoPEhUTUxBbmNob3JFbGVtZW50Pml0ZW0uZmlyc3RFbGVtZW50Q2hpbGQpLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzTmFtZSlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIEV2ZW50SGFuZGxlclxuXHRcdGxldCBhY3RpdmVJRCA9IG51bGw7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXRlbS52aXNpYmxlKSB7XG5cdFx0XHRcdGFjdGl2ZUlEID0gaXRlbS5pZDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWwgc2V0dXBcblx0XHR0aGlzLnRvZ2dsZShhY3RpdmVJRCk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb3VudGVyIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXHRwcml2YXRlIGlkU3RyaWN0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dC1jb3VudGVyXCI7XG5cdFx0dGhpcy5pZFN0cmljdCA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiXG5cdH1cblxuXHRkaXNwbGF5Q291bnRlcih0YXJnZXQ6IEhUTUxFbGVtZW50LCBsZW5ndGg6IG51bWJlciwgbWluTGVuZ3RoOiBudW1iZXIsIG1heExlbmd0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1pbkxlbmd0aCA+IDApIHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0taW5mb1wiKTtcblxuXHRcdFx0aWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWluZm9cIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1heExlbmd0aCA+IDApIHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRhcmdldC5pbm5lclRleHQgPSBsZW5ndGgudG9TdHJpbmcoKTtcblx0fVxuXG5cdGdldENoYXJhY3Rlckxlbmd0aChtb2RlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdGlmIChtb2RlID09PSBcInN0cmljdFwiKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aDtcblx0XHR9XG5cdH1cblxuXHRiaW5kRXZlbnQodGV4dEZvcm06IEhUTUxFbGVtZW50LCBtb2RlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEV2ZW50KFwia2V5dXBcIik7XG5cdFx0Y29uc3QgaWQ6IHN0cmluZyA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0Y29uc3QgY291bnRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdGlmIChjb3VudGVyICE9PSBudWxsKSB7XG5cdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZS50YXJnZXQ7XG5cdFx0XHRcdGNvbnN0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5nZXRDaGFyYWN0ZXJMZW5ndGgobW9kZSwgdGFyZ2V0RWxlbWVudC52YWx1ZSk7XG5cdFx0XHRcdGNvbnN0IG1pbkNoYXI6IG51bWJlciA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1pblwiKSkgPz8gMDtcblx0XHRcdFx0Y29uc3QgbWF4Q2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWF4XCIpKSA/PyAwO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlDb3VudGVyKGNvdW50ZXIsIGxlbmd0aCwgbWluQ2hhciwgbWF4Q2hhcik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IG5vcm1hbEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdG5vcm1hbEZvcm1zLmZvckVhY2gobm9ybWFsRm9ybSA9PiB0aGlzLmJpbmRFdmVudChub3JtYWxGb3JtLCBcIm5vcm1hbFwiKSk7XG5cblx0XHRjb25zdCBzdHJpY3RGb3JtczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKVxuXHRcdHN0cmljdEZvcm1zLmZvckVhY2goc3RyaWN0Rm9ybSA9PiB0aGlzLmJpbmRFdmVudChzdHJpY3RGb3JtLCBcInN0cmljdFwiKSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInNjcm9sbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBzY3JvbGxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChzY3JvbGxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY3JvbGxUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIikgfHwgXCJzdGFydFwiO1xuXG5cdFx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRcdGJsb2NrOiBcInN0YXJ0XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCBUb1Njcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3RvX3Njcm9sbFwiO1xuaW1wb3J0IFN0cmV0Y2hUZXh0YXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWFcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4vY29tcG9uZW50cy90YWJcIjtcbmltcG9ydCBUZXh0Q291bnRlciBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRfY291bnRlclwiO1xuXG4obmV3IEFjY29yZGlvbigpKS5pbml0aWFsaXplKCk7XG4obmV3IExvYWRpbmcoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBNb2RhbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvU2Nyb2xsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU3RyZXRjaFRleHRhcmVhKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGFiKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGV4dENvdW50ZXIoKSkuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==