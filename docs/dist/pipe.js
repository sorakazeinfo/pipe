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
        triggerElements.forEach(function (button) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZ3JlZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90ZXh0X2NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9fc2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUUsQ0FBQztBQUM5QixDQUFDLElBQUksb0VBQWUsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDckMsQ0FBQyxJQUFJLDREQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzlCLENBQUMsSUFBSSx1REFBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QixDQUFDLElBQUksZ0VBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDakMsQ0FBQyxJQUFJLDBEQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6InBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9waXBlLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmc7XG5cdHByb3RlY3RlZCBlbnRyeTogc3RyaW5nID0gXCJkYXRhLXBpcGVqc1wiO1xuXG5cdHByb3RlY3RlZCBnZXRUcmlnZ2VyRWxlbWVudHMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLmVudHJ5fT0ke3RoaXMuaWR9XWApO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcImFjY29yZGlvblwiO1xuXHRwcml2YXRlIGFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcInBpcGVqcy1hY2NvcmRpb24tYWN0aXZlXCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmNsaWNrKHRhcmdldEVsZW1lbnQsIHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNsaWNrKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhY3RpdmVDbGFzczogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSkge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmVlbWVudCBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJhZ3JlZW1lbnRcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0Q2hlY2tib3hlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0cmlnZ2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcblxuXHRcdFx0aWYgKHRhcmdldEJ1dHRvbiAhPT0gbnVsbCAmJiB0YXJnZXRDaGVja2JveGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGVzdG9yZS1jaGVja2JveGVzXCIsIHRhcmdldENoZWNrYm94ZXMubGVuZ3RoLnRvU3RyaW5nKCkpO1xuXG5cdFx0XHRcdHRhcmdldENoZWNrYm94ZXMuZm9yRWFjaCgodGFyZ2V0Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiKSk7XG5cdFx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5jaGVja2VkID8gY291bnQtLSA6IGNvdW50Kys7XG5cblx0XHRcdFx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiLCBjb3VudC50b1N0cmluZygpKTtcblxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwibG9hZGluZ1wiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cblx0XHRcdHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0XHR0cmlnZ2VyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcIm1vZGFsXCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaChidXR0b24gPT4ge1xuXHRcdFx0Y29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IG1vZGFsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0XHRpZiAobW9kYWwgIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gT3ZlcmxheVxuXHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0aWYgKG92ZXJsYXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDbG9zZVxuXHRcdFx0XHRjb25zdCBvdmVybGF5Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jbG9zZVwiKTtcblx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdG92ZXJsYXlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0Y29uc3QgY29udGVudENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIpO1xuXHRcdFx0XHRpZiAoY29udGVudENsb3NlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDbG9zZSBBY3Rpb25cblx0XHRcdFx0Y29uc3QgY2xvc2VBY3Rpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jbG9zZS1hY3Rpb25cIik7XG5cdFx0XHRcdGlmIChjbG9zZUFjdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNsb3NlQWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25hY2tiYXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic25hY2tiYXJcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRcdGNvbnN0IGhpZGRlblRpbWU6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLWhpZGRlbi10aW1lXCIpKTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cblx0XHRcdFx0XHRpZiAoaXNGaW5pdGUoaGlkZGVuVGltZSkpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC1zbmFja2Jhci0tYWN0aXZlXCIpO1xuXHRcdFx0XHRcdFx0fSwgaGlkZGVuVGltZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50Q2xvc2VyID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnRDbG9zZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50Q2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJ0ZXh0YXJlYS1leHBhbmRlZFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhWyR7dGhpcy5lbnRyeX09JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGFiXCI7XG5cdHByaXZhdGUgdGFiczogQXJyYXk8VGFiQ29udGFpbmVyPiA9IFtdO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRhYnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0cHJpdmF0ZSByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgdGFiSXRlbXM6IEFycmF5PGFueT47XG5cdHByaXZhdGUgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgbWVudUl0ZW1TZWxlY3Rvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHRhYjogSFRNTEVsZW1lbnQpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gdGFiO1xuXHRcdHRoaXMudGFiSXRlbXMgPSBbXTtcblxuXHRcdGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYl9fbWVudSBsaVwiO1xuXHRcdH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYi1ib3JkZXJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWItYm9yZGVyX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYi1ib3JkZXJfX21lbnUgbGlcIjtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGUoYWN0aXZlSXRlbUlEKSB7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKCh0YWJJdGVtKSA9PiB7XG5cdFx0XHRpZiAodGFiSXRlbS5pZCA9PT0gYWN0aXZlSXRlbUlEKSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBDb2xsZWN0XG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubWVudUl0ZW1TZWxlY3Rvcik7XG5cdFx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLnRhYkl0ZW1zLnB1c2goe1xuXHRcdFx0XHRpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygxOCkuc2xpY2UoLTgpLFxuXHRcdFx0XHRtZW51OiBpdGVtLFxuXHRcdFx0XHRjb250ZW50OiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoKDxIVE1MQW5jaG9yRWxlbWVudD5pdGVtLmZpcnN0RWxlbWVudENoaWxkKS5oYXNoKSxcblx0XHRcdFx0dmlzaWJsZTogaXRlbS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5hY3RpdmVDbGFzc05hbWUpXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBFdmVudEhhbmRsZXJcblx0XHRsZXQgYWN0aXZlSUQgPSBudWxsO1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0ubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoaXRlbS5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGl0ZW0udmlzaWJsZSkge1xuXHRcdFx0XHRhY3RpdmVJRCA9IGl0ZW0uaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsIHNldHVwXG5cdFx0dGhpcy50b2dnbGUoYWN0aXZlSUQpO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyXCI7XG5cdHByaXZhdGUgaWRTdHJpY3Q6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiO1xuXG5cdGRpc3BsYXlDb3VudGVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGxlbmd0aDogbnVtYmVyLCBtaW5MZW5ndGg6IG51bWJlciwgbWF4TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAobWluTGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1pbmZvXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0taW5mb1wiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobWF4TGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cblx0XHRcdGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmlubmVyVGV4dCA9IGxlbmd0aC50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0Q2hhcmFjdGVyTGVuZ3RoKG1vZGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0aWYgKG1vZGUgPT09IFwic3RyaWN0XCIpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdGJpbmRFdmVudCh0ZXh0Rm9ybTogSFRNTEVsZW1lbnQsIG1vZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblx0XHRjb25zdCBpZDogc3RyaW5nID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD5lLnRhcmdldDtcblx0XHRcdFx0Y29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmdldENoYXJhY3Rlckxlbmd0aChtb2RlLCB0YXJnZXRFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgbWluQ2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWluXCIpKSA/PyAwO1xuXHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpID8/IDA7XG5cdFx0XHRcdHRoaXMuZGlzcGxheUNvdW50ZXIoY291bnRlciwgbGVuZ3RoLCBtaW5DaGFyLCBtYXhDaGFyKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgbm9ybWFsRm9ybXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0bm9ybWFsRm9ybXMuZm9yRWFjaChub3JtYWxGb3JtID0+IHRoaXMuYmluZEV2ZW50KG5vcm1hbEZvcm0sIFwibm9ybWFsXCIpKTtcblxuXHRcdGNvbnN0IHN0cmljdEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApXG5cdFx0c3RyaWN0Rm9ybXMuZm9yRWFjaChzdHJpY3RGb3JtID0+IHRoaXMuYmluZEV2ZW50KHN0cmljdEZvcm0sIFwic3RyaWN0XCIpKTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcInNjcm9sbF9cIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgaHJlZiAgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0XHRjb25zdCBibG9jayA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKSB8fCBcInN0YXJ0XCI7XG5cblx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXG5cdFx0XHRcdFx0YmxvY2s6IFwic3RhcnRcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcInRvZ2dsZVwiO1xuXG5cdHByaXZhdGUgc2V0QnV0dG9uTGFiZWwodHJpZ2dlcjogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAobGFiZWwgIT09IG51bGwpIHtcblx0XHRcdHRyaWdnZXIuaW5uZXJUZXh0ID0gbGFiZWw7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlcjogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXHRcdFx0Y29uc3QgY2xvc2VMYWJlbDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtY2xvc2UtbGFiZWxcIik7XG5cdFx0XHRjb25zdCBvcGVuTGFiZWw6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW9wZW4tbGFiZWxcIik7XG5cdFx0XHRjb25zdCBoaWRkZW5DbGFzc05hbWU6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLWhpZGRlbi1jbGFzcy1uYW1lXCIpO1xuXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0YXJnZXRFbGVtZW50cy5mb3JFYWNoKCh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChoaWRkZW5DbGFzc05hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhoaWRkZW5DbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRCdXR0b25MYWJlbCh0cmlnZ2VyLCBjbG9zZUxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoaGlkZGVuQ2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIG9wZW5MYWJlbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRCdXR0b25MYWJlbCh0cmlnZ2VyLCBjbG9zZUxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIG9wZW5MYWJlbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCBBZ3JlZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9hZ3JlZW1lbnRcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCBUb1Njcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3RvX3Njcm9sbFwiO1xuaW1wb3J0IFN0cmV0Y2hUZXh0YXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWFcIjtcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiLi9jb21wb25lbnRzL3NuYWNrYmFyXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvdGFiXCI7XG5pbXBvcnQgVGV4dENvdW50ZXIgZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0X2NvdW50ZXJcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy90b2dnbGVcIjtcblxuKG5ldyBBY2NvcmRpb24oKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBBZ3JlZW1lbnQoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBMb2FkaW5nKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb1Njcm9sbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFN0cmV0Y2hUZXh0YXJlYSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFNuYWNrYmFyKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGFiKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGV4dENvdW50ZXIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb2dnbGUoKSkuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==