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

var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "accordion";
        _this.activeClass = "pipejs-accordion-active";
        return _this;
    }
    Accordion.prototype.initialize = function () {
        var _this = this;
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (trigger) {
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

var Agreement = /** @class */ (function (_super) {
    __extends(Agreement, _super);
    function Agreement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "agreement";
        return _this;
    }
    Agreement.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (trigger) {
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
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

var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "modal";
        return _this;
    }
    Modal.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (triggerElement) {
            var modal = document.querySelector(triggerElement.getAttribute("data-pipe-target"));
            if (modal !== null) {
                // Trigger
                triggerElement.addEventListener("click", function (e) {
                    e.preventDefault();
                    modal.style.display = "block";
                });
                // Closer actions
                var closeActionSelectors = [
                    ".pp-modal__overlay",
                    ".pp-modal__close",
                    ".pp-modal__contents__close",
                    ".pp-modal__close-action",
                ];
                closeActionSelectors.forEach(function (closeActionSelector) {
                    var closeElement = modal.querySelector(closeActionSelector);
                    if (closeElement !== null) {
                        closeElement.addEventListener("click", function (e) {
                            e.preventDefault();
                            modal.style.display = "none";
                        });
                    }
                });
            }
        });
    };
    return Modal;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./src/js/components/snackbar.ts":
/*!***************************************!*\
  !*** ./src/js/components/snackbar.ts ***!
  \***************************************/
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

var Snackbar = /** @class */ (function (_super) {
    __extends(Snackbar, _super);
    function Snackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "snackbar";
        return _this;
    }
    Snackbar.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (trigger) {
            var target = trigger.getAttribute("data-pipe-target");
            var targetElement = document.querySelector(target);
            var hiddenTime = parseInt(trigger.getAttribute("data-pipe-hidden-time"));
            if (targetElement !== null) {
                trigger.addEventListener("click", function (e) {
                    e.preventDefault();
                    targetElement.classList.add("pp-snackbar--active");
                    if (isFinite(hiddenTime)) {
                        setTimeout(function () {
                            targetElement.classList.remove("pp-snackbar--active");
                        }, hiddenTime);
                    }
                });
                var targetElementCloser = targetElement.querySelector("a");
                if (targetElementCloser !== null) {
                    targetElementCloser.addEventListener("click", function (e) {
                        e.preventDefault();
                        targetElement.classList.remove("pp-snackbar--active");
                    });
                }
            }
        });
    };
    return Snackbar;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Snackbar);


/***/ }),

/***/ "./src/js/components/stretch_textarea.ts":
/*!***********************************************!*\
  !*** ./src/js/components/stretch_textarea.ts ***!
  \***********************************************/
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

var StretchTextarea = /** @class */ (function (_super) {
    __extends(StretchTextarea, _super);
    function StretchTextarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "textarea-expanded";
        return _this;
    }
    StretchTextarea.prototype.initialize = function () {
        var _this = this;
        var textareas = document.querySelectorAll("textarea[" + this.entry + "=" + this.id + "]");
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "tab";
        _this.tabs = [];
        return _this;
    }
    Tab.prototype.initialize = function () {
        var _this = this;
        var tabs = this.getTriggerElements();
        if (tabs.length > 0) {
            tabs.forEach(function (tab) {
                _this.tabs.push(new TabContainer(tab));
            });
            this.tabs.forEach(function (tab) { return tab.initialize(); });
        }
    };
    return Tab;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

var TextCounter = /** @class */ (function (_super) {
    __extends(TextCounter, _super);
    function TextCounter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "text-counter";
        _this.idStrict = "text-counter-strict";
        return _this;
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

var ToScroll = /** @class */ (function (_super) {
    __extends(ToScroll, _super);
    function ToScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "scroll_";
        return _this;
    }
    ToScroll.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (trigger) {
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
    };
    return ToScroll;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    function Toggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "toggle";
        return _this;
    }
    Toggle.prototype.setButtonLabel = function (trigger, label) {
        if (label !== null) {
            trigger.innerText = label;
        }
    };
    Toggle.prototype.initialize = function () {
        var _this = this;
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (trigger) {
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
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
/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/snackbar */ "./src/js/components/snackbar.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.ts");










(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_agreement__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();
(new _components_snackbar__WEBPACK_IMPORTED_MODULE_6__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_7__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_8__["default"]()).initialize();
(new _components_toggle__WEBPACK_IMPORTED_MODULE_9__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZ3JlZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90ZXh0X2NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9fc2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDWDtBQUV6QyxDQUFDLElBQUksNkRBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxJQUFJLDZEQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQy9CLENBQUMsSUFBSSwyREFBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM3QixDQUFDLElBQUkseURBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxJQUFJLDZEQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzlCLENBQUMsSUFBSSxvRUFBZSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNyQyxDQUFDLElBQUksNERBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxJQUFJLHVEQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pCLENBQUMsSUFBSSxnRUFBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNqQyxDQUFDLElBQUksMERBQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoicGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BpcGUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZztcblx0cHJvdGVjdGVkIGVudHJ5OiBzdHJpbmcgPSBcImRhdGEtcGlwZWpzXCI7XG5cblx0cHJvdGVjdGVkIGdldFRyaWdnZXJFbGVtZW50cygpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuZW50cnl9PSR7dGhpcy5pZH1dYCk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwiYWNjb3JkaW9uXCI7XG5cdHByaXZhdGUgYWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwicGlwZWpzLWFjY29yZGlvbi1hY3RpdmVcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuY2xpY2sodGFyZ2V0RWxlbWVudCwgdGhpcy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xpY2sodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGFjdGl2ZUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdyZWVtZW50IGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcImFncmVlbWVudFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cdFx0XHRjb25zdCB0YXJnZXRDaGVja2JveGVzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRyaWdnZXIucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuXG5cdFx0XHRpZiAodGFyZ2V0QnV0dG9uICE9PSBudWxsICYmIHRhcmdldENoZWNrYm94ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtcGlwZXN0b3JlLWNoZWNrYm94ZXNcIiwgdGFyZ2V0Q2hlY2tib3hlcy5sZW5ndGgudG9TdHJpbmcoKSk7XG5cblx0XHRcdFx0dGFyZ2V0Q2hlY2tib3hlcy5mb3JFYWNoKCh0YXJnZXRDaGVja2JveDogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHRhcmdldENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGxldCBjb3VudDogbnVtYmVyID0gcGFyc2VJbnQodHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGVzdG9yZS1jaGVja2JveGVzXCIpKTtcblx0XHRcdFx0XHRcdHRhcmdldENoZWNrYm94LmNoZWNrZWQgPyBjb3VudC0tIDogY291bnQrKztcblxuXHRcdFx0XHRcdFx0dHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGVzdG9yZS1jaGVja2JveGVzXCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuXG5cdFx0XHRcdFx0XHRpZiAoY291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJsb2FkaW5nXCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuXHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwibW9kYWxcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IG1vZGFsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKSk7XG5cblx0XHRcdGlmIChtb2RhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBUcmlnZ2VyXG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIENsb3NlciBhY3Rpb25zXG5cdFx0XHRcdGNvbnN0IGNsb3NlQWN0aW9uU2VsZWN0b3JzOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdFx0XHRcdFwiLnBwLW1vZGFsX19vdmVybGF5XCIsXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX2Nsb3NlXCIsXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX2NvbnRlbnRzX19jbG9zZVwiLFxuXHRcdFx0XHRcdFwiLnBwLW1vZGFsX19jbG9zZS1hY3Rpb25cIixcblx0XHRcdFx0XTtcblx0XHRcdFx0Y2xvc2VBY3Rpb25TZWxlY3RvcnMuZm9yRWFjaCgoY2xvc2VBY3Rpb25TZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2xvc2VFbGVtZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcihjbG9zZUFjdGlvblNlbGVjdG9yKTtcblx0XHRcdFx0XHRpZiAoY2xvc2VFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFja2JhciBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJzbmFja2JhclwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXHRcdFx0Y29uc3QgaGlkZGVuVGltZTogbnVtYmVyID0gcGFyc2VJbnQodHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtaGlkZGVuLXRpbWVcIikpO1xuXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHAtc25hY2tiYXItLWFjdGl2ZVwiKTtcblxuXHRcdFx0XHRcdGlmIChpc0Zpbml0ZShoaWRkZW5UaW1lKSkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cdFx0XHRcdFx0XHR9LCBoaWRkZW5UaW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnRDbG9zZXIgPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuXHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudENsb3NlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnRDbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHAtc25hY2tiYXItLWFjdGl2ZVwiKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZXRjaFRleHRhcmVhIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcInRleHRhcmVhLWV4cGFuZGVkXCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGV4dGFyZWFbJHt0aGlzLmVudHJ5fT0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0YXJlYXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dGFyZWFzLmZvckVhY2goKHRleHRhcmVhKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kZWRUZXh0YXJlYSh0ZXh0YXJlYSk7XG5cdFx0XHRcdHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IHRoaXMuZXhwYW5kZWRUZXh0YXJlYShlLnRhcmdldCkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kZWRUZXh0YXJlYSh0YXJnZXQpIHtcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gW3RhcmdldC5zY3JvbGxIZWlnaHQsIFwicHhcIl0uam9pbihcIlwiKTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJ0YWJcIjtcblx0cHJpdmF0ZSB0YWJzOiBBcnJheTxUYWJDb250YWluZXI+ID0gW107XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdGFiczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0aWYgKHRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWI6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMudGFicy5wdXNoKG5ldyBUYWJDb250YWluZXIodGFiKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pbml0aWFsaXplKCkpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUYWJDb250YWluZXIge1xuXHRwcml2YXRlIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSB0YWJJdGVtczogQXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBhY3RpdmVDbGFzc05hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBtZW51SXRlbVNlbGVjdG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGFiOiBIVE1MRWxlbWVudCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSB0YWI7XG5cdFx0dGhpcy50YWJJdGVtcyA9IFtdO1xuXG5cdFx0aWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiX19tZW51IGxpXCI7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiLWJvcmRlclwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYi1ib3JkZXJfX21lbnVfX2FjdGl2ZVwiO1xuXHRcdFx0dGhpcy5tZW51SXRlbVNlbGVjdG9yID0gXCIucHAtdGFiLWJvcmRlcl9fbWVudSBsaVwiO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZShhY3RpdmVJdGVtSUQpIHtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goKHRhYkl0ZW0pID0+IHtcblx0XHRcdGlmICh0YWJJdGVtLmlkID09PSBhY3RpdmVJdGVtSUQpIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0dGFiSXRlbS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vIENvbGxlY3Rcblx0XHRjb25zdCBtZW51SXRlbXMgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5tZW51SXRlbVNlbGVjdG9yKTtcblx0XHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdHRoaXMudGFiSXRlbXMucHVzaCh7XG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgtOCksXG5cdFx0XHRcdG1lbnU6IGl0ZW0sXG5cdFx0XHRcdGNvbnRlbnQ6IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcigoPEhUTUxBbmNob3JFbGVtZW50Pml0ZW0uZmlyc3RFbGVtZW50Q2hpbGQpLmhhc2gpLFxuXHRcdFx0XHR2aXNpYmxlOiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmFjdGl2ZUNsYXNzTmFtZSlcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQWRkIEV2ZW50SGFuZGxlclxuXHRcdGxldCBhY3RpdmVJRCA9IG51bGw7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXRlbS52aXNpYmxlKSB7XG5cdFx0XHRcdGFjdGl2ZUlEID0gaXRlbS5pZDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWwgc2V0dXBcblx0XHR0aGlzLnRvZ2dsZShhY3RpdmVJRCk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q291bnRlciBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJ0ZXh0LWNvdW50ZXJcIjtcblx0cHJpdmF0ZSBpZFN0cmljdDogc3RyaW5nID0gXCJ0ZXh0LWNvdW50ZXItc3RyaWN0XCI7XG5cblx0ZGlzcGxheUNvdW50ZXIodGFyZ2V0OiBIVE1MRWxlbWVudCwgbGVuZ3RoOiBudW1iZXIsIG1pbkxlbmd0aDogbnVtYmVyLCBtYXhMZW5ndGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmIChtaW5MZW5ndGggPiAwKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWluZm9cIik7XG5cblx0XHRcdGlmIChsZW5ndGggPCBtaW5MZW5ndGgpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1pbmZvXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtYXhMZW5ndGggPiAwKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblxuXHRcdFx0aWYgKGxlbmd0aCA+IG1heExlbmd0aCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0YXJnZXQuaW5uZXJUZXh0ID0gbGVuZ3RoLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRnZXRDaGFyYWN0ZXJMZW5ndGgobW9kZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRpZiAobW9kZSA9PT0gXCJzdHJpY3RcIikge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcclxcbnxcXG58XFxzfOOAgC9nLCcnKS5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cdFx0fVxuXHR9XG5cblx0YmluZEV2ZW50KHRleHRGb3JtOiBIVE1MRWxlbWVudCwgbW9kZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3Qga2V5dXBFdmVudCA9IG5ldyBFdmVudChcImtleXVwXCIpO1xuXHRcdGNvbnN0IGlkOiBzdHJpbmcgPSB0ZXh0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdGNvbnN0IGNvdW50ZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gVGV4dCBGb3JtXG5cdFx0XHR0ZXh0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudCA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PmUudGFyZ2V0O1xuXHRcdFx0XHRjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuZ2V0Q2hhcmFjdGVyTGVuZ3RoKG1vZGUsIHRhcmdldEVsZW1lbnQudmFsdWUpO1xuXHRcdFx0XHRjb25zdCBtaW5DaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1taW5cIikpID8/IDA7XG5cdFx0XHRcdGNvbnN0IG1heENoYXI6IG51bWJlciA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1heFwiKSkgPz8gMDtcblx0XHRcdFx0dGhpcy5kaXNwbGF5Q291bnRlcihjb3VudGVyLCBsZW5ndGgsIG1pbkNoYXIsIG1heENoYXIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEV2ZW50IFRyaWdnZXJcblx0XHRcdHRleHRGb3JtLmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudCk7XG5cdFx0fVxuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBub3JtYWxGb3JtczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlanM9JHt0aGlzLmlkfV1gKTtcblx0XHRub3JtYWxGb3Jtcy5mb3JFYWNoKG5vcm1hbEZvcm0gPT4gdGhpcy5iaW5kRXZlbnQobm9ybWFsRm9ybSwgXCJub3JtYWxcIikpO1xuXG5cdFx0Y29uc3Qgc3RyaWN0Rm9ybXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZFN0cmljdH1dYClcblx0XHRzdHJpY3RGb3Jtcy5mb3JFYWNoKHN0cmljdEZvcm0gPT4gdGhpcy5iaW5kRXZlbnQoc3RyaWN0Rm9ybSwgXCJzdHJpY3RcIikpO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9TY3JvbGwgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic2Nyb2xsX1wiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0aWYgKGhyZWYgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5cdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZGVzdGluYXRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRibG9jazogXCJzdGFydFwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidG9nZ2xlXCI7XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25MYWJlbCh0cmlnZ2VyOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChsYWJlbCAhPT0gbnVsbCkge1xuXHRcdFx0dHJpZ2dlci5pbm5lclRleHQgPSBsYWJlbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG5cdFx0XHRjb25zdCBjbG9zZUxhYmVsOiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1jbG9zZS1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IG9wZW5MYWJlbDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtb3Blbi1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IGhpZGRlbkNsYXNzTmFtZTogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtaGlkZGVuLWNsYXNzLW5hbWVcIik7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRhcmdldEVsZW1lbnRzLmZvckVhY2goKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhpZGRlbkNsYXNzTmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGhpZGRlbkNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuQ2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChoaWRkZW5DbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IEFncmVlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2FncmVlbWVudFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IFRvU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvdG9fc2Nyb2xsXCI7XG5pbXBvcnQgU3RyZXRjaFRleHRhcmVhIGZyb20gXCIuL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYVwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc25hY2tiYXJcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4vY29tcG9uZW50cy90YWJcIjtcbmltcG9ydCBUZXh0Q291bnRlciBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRfY291bnRlclwiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9jb21wb25lbnRzL3RvZ2dsZVwiO1xuXG4obmV3IEFjY29yZGlvbigpKS5pbml0aWFsaXplKCk7XG4obmV3IEFncmVlbWVudCgpKS5pbml0aWFsaXplKCk7XG4obmV3IExvYWRpbmcoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBNb2RhbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvU2Nyb2xsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU3RyZXRjaFRleHRhcmVhKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU25hY2tiYXIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUYWIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUZXh0Q291bnRlcigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvZ2dsZSgpKS5pbml0aWFsaXplKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9