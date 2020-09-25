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

/***/ "./src/js/components/agreement.ts":
/*!****************************************!*\
  !*** ./src/js/components/agreement.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Agreement = /** @class */ (function () {
    function Agreement() {
        this.id = "agreement";
    }
    Agreement.prototype.initialize = function () {
        var triggers = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        triggers.forEach(function (trigger) {
            var target = trigger.getAttribute("data-pipe-target");
            var targetButton = document.querySelector(target);
            var targetCheckboxes = trigger.querySelectorAll("input[type=checkbox]");
            if (targetButton !== null && targetCheckboxes.length > 0) {
                trigger.setAttribute("data-pipestore-checkboxes", targetCheckboxes.length.toString());
                targetCheckboxes.forEach(function (targetCheckbox) {
                    targetCheckbox.addEventListener("click", function (e) {
                        var count = parseInt(trigger.getAttribute("data-pipestore-checkboxes"));
                        targetCheckbox.checked ? count-- : count++;
                        trigger.setAttribute("data-pipestore-checkboxes", count.toString());
                        if (count === 0) {
                            targetButton.removeAttribute("disabled");
                        }
                        else {
                            targetButton.setAttribute("disabled", "disabled");
                        }
                    });
                });
            }
        });
    };
    return Agreement;
}());
/* harmony default export */ __webpack_exports__["default"] = (Agreement);


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

/***/ "./src/js/components/toggle.ts":
/*!*************************************!*\
  !*** ./src/js/components/toggle.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Toggle = /** @class */ (function () {
    function Toggle() {
        this.id = "toggle";
    }
    Toggle.prototype.setButtonLabel = function (trigger, label) {
        if (label !== null) {
            trigger.innerText = label;
        }
    };
    Toggle.prototype.initialize = function () {
        var _this = this;
        var triggers = document.querySelectorAll("[data-pipejs=" + this.id + "]");
        triggers.forEach(function (trigger) {
            var target = trigger.getAttribute("data-pipe-target");
            var targetElements = document.querySelectorAll(target);
            var closeLabel = trigger.getAttribute("data-pipe-close-label");
            var openLabel = trigger.getAttribute("data-pipe-open-label");
            var hiddenClassName = trigger.getAttribute("data-pipe-hidden-class-name");
            if (targetElements.length > 0) {
                targetElements.forEach(function (targetElement) {
                    if (hiddenClassName !== null) {
                        trigger.addEventListener("click", function (e) {
                            e.preventDefault();
                            if (targetElement.classList.contains(hiddenClassName)) {
                                targetElement.classList.remove(hiddenClassName);
                                _this.setButtonLabel(trigger, closeLabel);
                            }
                            else {
                                targetElement.classList.add(hiddenClassName);
                                _this.setButtonLabel(trigger, openLabel);
                            }
                        });
                    }
                    else {
                        trigger.addEventListener("click", function (e) {
                            e.preventDefault();
                            if (targetElement.style.display === "none") {
                                targetElement.style.display = "";
                                _this.setButtonLabel(trigger, closeLabel);
                            }
                            else {
                                targetElement.style.display = "none";
                                _this.setButtonLabel(trigger, openLabel);
                            }
                        });
                    }
                });
            }
        });
    };
    return Toggle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Toggle);


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
/* harmony import */ var _components_agreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/agreement */ "./src/js/components/agreement.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loading */ "./src/js/components/loading.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.ts");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.ts");









(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_agreement__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_6__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_7__["default"]()).initialize();
(new _components_toggle__WEBPACK_IMPORTED_MODULE_8__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZ3JlZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90ZXh0X2NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9fc2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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LE9BQU8sR0FBRyxNQUFNLENBQUM7Z0NBQ3JDLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzZCQUN4Qzt3QkFDRixDQUFDLENBQUMsQ0FBQztxQkFDSDtnQkFDRixDQUFDLENBQUMsQ0FBQzthQUNIO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0E7QUFDSjtBQUNKO0FBQ087QUFDYztBQUN6QjtBQUNpQjtBQUNYO0FBRXpDLENBQUMsSUFBSSw2REFBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMvQixDQUFDLElBQUksNkRBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxJQUFJLDJEQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdCLENBQUMsSUFBSSx5REFBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMzQixDQUFDLElBQUksNkRBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxJQUFJLG9FQUFlLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3JDLENBQUMsSUFBSSx1REFBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QixDQUFDLElBQUksZ0VBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDakMsQ0FBQyxJQUFJLDBEQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6InBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9waXBlLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmc7XG5cdHByb3RlY3RlZCBlbnRyeTogc3RyaW5nID0gXCJkYXRhLXBpcGVqc1wiO1xuXG5cdHByb3RlY3RlZCBnZXRUcmlnZ2VyRWxlbWVudHMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLmVudHJ5fT0ke3RoaXMuaWR9XWApO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cdHByaXZhdGUgYWN0aXZlQ2xhc3M6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJhY2NvcmRpb25cIjtcblx0XHR0aGlzLmFjdGl2ZUNsYXNzID0gXCJwaXBlanMtYWNjb3JkaW9uLWFjdGl2ZVwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0cmlnZ2VyczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblxuXHRcdHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5jbGljayh0YXJnZXRFbGVtZW50LCB0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjbGljayh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgYWN0aXZlQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmVlbWVudCB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZyA9IFwiYWdyZWVtZW50XCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlcnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cblx0XHR0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0Q2hlY2tib3hlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0cmlnZ2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcblxuXHRcdFx0aWYgKHRhcmdldEJ1dHRvbiAhPT0gbnVsbCAmJiB0YXJnZXRDaGVja2JveGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGVzdG9yZS1jaGVja2JveGVzXCIsIHRhcmdldENoZWNrYm94ZXMubGVuZ3RoLnRvU3RyaW5nKCkpO1xuXG5cdFx0XHRcdHRhcmdldENoZWNrYm94ZXMuZm9yRWFjaCgodGFyZ2V0Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiKSk7XG5cdFx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5jaGVja2VkID8gY291bnQtLSA6IGNvdW50Kys7XG5cblx0XHRcdFx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiLCBjb3VudC50b1N0cmluZygpKTtcblxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEFwcENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pZCA9IFwibG9hZGluZ1wiO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBPdmVybGF5XG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX292ZXJsYXlcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDbG9zZVxuXHRcdFx0XHRcdGNvbnN0IG92ZXJsYXlDbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucHAtbW9kYWxfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChvdmVybGF5Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlIGluIGNvbnRlbnRzXG5cdFx0XHRcdFx0Y29uc3QgY29udGVudENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIpO1xuXHRcdFx0XHRcdGlmIChjb250ZW50Q2xvc2UgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlIEFjdGlvblxuXHRcdFx0XHRcdGNvbnN0IGNsb3NlQWN0aW9uID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2UtYWN0aW9uXCIpO1xuXHRcdFx0XHRcdGlmIChjbG9zZUFjdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y2xvc2VBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJldGNoVGV4dGFyZWEge1xuXHRwcml2YXRlIGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dGFyZWEtZXhwYW5kZWRcIjtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZztcblx0cHJpdmF0ZSB0YWJzOiBBcnJheTxUYWJDb250YWluZXI+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRhYlwiO1xuXHRcdHRoaXMudGFicyA9IFtdO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRwcml2YXRlIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSB0YWJJdGVtczogQXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBhY3RpdmVDbGFzc05hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBtZW51SXRlbVNlbGVjdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGFiOiBIVE1MRWxlbWVudCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSB0YWI7XG5cdFx0dGhpcy50YWJJdGVtcyA9IFtdO1xuXG5cdFx0aWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiX19tZW51IGxpXCI7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiLWJvcmRlclwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYi1ib3JkZXJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiLWJvcmRlcl9fbWVudSBsaVwiO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0pID0+IHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vIENvbGxlY3Rcblx0XHRjb25zdCBtZW51SXRlbXMgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5tZW51SXRlbVNlbGVjdG9yKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcigoPEhUTUxBbmNob3JFbGVtZW50Pml0ZW0uZmlyc3RFbGVtZW50Q2hpbGQpLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzTmFtZSlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIEV2ZW50SGFuZGxlclxuXHRcdGxldCBhY3RpdmVJRCA9IG51bGw7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXRlbS52aXNpYmxlKSB7XG5cdFx0XHRcdGFjdGl2ZUlEID0gaXRlbS5pZDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWwgc2V0dXBcblx0XHR0aGlzLnRvZ2dsZShhY3RpdmVJRCk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb3VudGVyIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXHRwcml2YXRlIGlkU3RyaWN0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IFwidGV4dC1jb3VudGVyXCI7XG5cdFx0dGhpcy5pZFN0cmljdCA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiXG5cdH1cblxuXHRkaXNwbGF5Q291bnRlcih0YXJnZXQ6IEhUTUxFbGVtZW50LCBsZW5ndGg6IG51bWJlciwgbWluTGVuZ3RoOiBudW1iZXIsIG1heExlbmd0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKG1pbkxlbmd0aCA+IDApIHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0taW5mb1wiKTtcblxuXHRcdFx0aWYgKGxlbmd0aCA8IG1pbkxlbmd0aCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWluZm9cIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1heExlbmd0aCA+IDApIHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRhcmdldC5pbm5lclRleHQgPSBsZW5ndGgudG9TdHJpbmcoKTtcblx0fVxuXG5cdGdldENoYXJhY3Rlckxlbmd0aChtb2RlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdGlmIChtb2RlID09PSBcInN0cmljdFwiKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aDtcblx0XHR9XG5cdH1cblxuXHRiaW5kRXZlbnQodGV4dEZvcm06IEhUTUxFbGVtZW50LCBtb2RlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEV2ZW50KFwia2V5dXBcIik7XG5cdFx0Y29uc3QgaWQ6IHN0cmluZyA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0Y29uc3QgY291bnRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdGlmIChjb3VudGVyICE9PSBudWxsKSB7XG5cdFx0XHQvLyBUZXh0IEZvcm1cblx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZS50YXJnZXQ7XG5cdFx0XHRcdGNvbnN0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5nZXRDaGFyYWN0ZXJMZW5ndGgobW9kZSwgdGFyZ2V0RWxlbWVudC52YWx1ZSk7XG5cdFx0XHRcdGNvbnN0IG1pbkNoYXI6IG51bWJlciA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1pblwiKSkgPz8gMDtcblx0XHRcdFx0Y29uc3QgbWF4Q2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWF4XCIpKSA/PyAwO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlDb3VudGVyKGNvdW50ZXIsIGxlbmd0aCwgbWluQ2hhciwgbWF4Q2hhcik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IG5vcm1hbEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdG5vcm1hbEZvcm1zLmZvckVhY2gobm9ybWFsRm9ybSA9PiB0aGlzLmJpbmRFdmVudChub3JtYWxGb3JtLCBcIm5vcm1hbFwiKSk7XG5cblx0XHRjb25zdCBzdHJpY3RGb3JtczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkU3RyaWN0fV1gKVxuXHRcdHN0cmljdEZvcm1zLmZvckVhY2goc3RyaWN0Rm9ybSA9PiB0aGlzLmJpbmRFdmVudChzdHJpY3RGb3JtLCBcInN0cmljdFwiKSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIHtcblx0cHJpdmF0ZSBpZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInNjcm9sbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBzY3JvbGxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChzY3JvbGxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY3JvbGxUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIikgfHwgXCJzdGFydFwiO1xuXG5cdFx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRcdGJsb2NrOiBcInN0YXJ0XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XG5cdHByaXZhdGUgaWQ6IHN0cmluZyA9IFwidG9nZ2xlXCI7XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25MYWJlbCh0cmlnZ2VyOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChsYWJlbCAhPT0gbnVsbCkge1xuXHRcdFx0dHJpZ2dlci5pbm5lclRleHQgPSBsYWJlbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblxuXHRcdHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KTtcblx0XHRcdGNvbnN0IGNsb3NlTGFiZWw6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLWNsb3NlLWxhYmVsXCIpO1xuXHRcdFx0Y29uc3Qgb3BlbkxhYmVsOiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1vcGVuLWxhYmVsXCIpO1xuXHRcdFx0Y29uc3QgaGlkZGVuQ2xhc3NOYW1lOiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1oaWRkZW4tY2xhc3MtbmFtZVwiKTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGFyZ2V0RWxlbWVudHMuZm9yRWFjaCgodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRpZiAoaGlkZGVuQ2xhc3NOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoaGlkZGVuQ2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgY2xvc2VMYWJlbCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGhpZGRlbkNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRCdXR0b25MYWJlbCh0cmlnZ2VyLCBvcGVuTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgY2xvc2VMYWJlbCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRCdXR0b25MYWJlbCh0cmlnZ2VyLCBvcGVuTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5pbXBvcnQgQWdyZWVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvYWdyZWVtZW50XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgVG9TY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy90b19zY3JvbGxcIjtcbmltcG9ydCBTdHJldGNoVGV4dGFyZWEgZnJvbSBcIi4vY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvdGFiXCI7XG5pbXBvcnQgVGV4dENvdW50ZXIgZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0X2NvdW50ZXJcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy90b2dnbGVcIjtcblxuKG5ldyBBY2NvcmRpb24oKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBBZ3JlZW1lbnQoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBMb2FkaW5nKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb1Njcm9sbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFN0cmV0Y2hUZXh0YXJlYSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRhYigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRleHRDb3VudGVyKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVG9nZ2xlKCkpLmluaXRpYWxpemUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=