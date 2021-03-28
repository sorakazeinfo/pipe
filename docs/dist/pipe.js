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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

/***/ "./src/js/components/navbar-toggle.ts":
/*!********************************************!*\
  !*** ./src/js/components/navbar-toggle.ts ***!
  \********************************************/
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NavbarToggle = /** @class */ (function (_super) {
    __extends(NavbarToggle, _super);
    function NavbarToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "navbar-toggle";
        _this.entry = "data-pipejs";
        return _this;
    }
    NavbarToggle.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (triggerElement) {
            var groupName = triggerElement.getAttribute("data-pipe-navbar-group");
            var groupElements = document.querySelectorAll("[data-pipe-navbar-group=" + groupName + "]");
            if (groupElements.length > 0) {
                triggerElement.addEventListener("click", function (e) {
                    e.preventDefault();
                    if (triggerElement.classList.contains("pp-navbar__toggle__open")) {
                        groupElements.forEach(function (groupElement) { return groupElement.style.display = "block"; });
                        triggerElement.style.display = "none";
                    }
                    else {
                        groupElements.forEach(function (groupElement) {
                            if (groupElement.classList.contains("pp-navbar__toggle__open")) {
                                groupElement.style.display = "block";
                            }
                            else {
                                groupElement.style.display = "none";
                            }
                        });
                    }
                });
            }
        });
    };
    return NavbarToggle;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (NavbarToggle);


/***/ }),

/***/ "./src/js/components/see_more.ts":
/*!***************************************!*\
  !*** ./src/js/components/see_more.ts ***!
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SeeMore = /** @class */ (function (_super) {
    __extends(SeeMore, _super);
    function SeeMore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "see-more";
        return _this;
    }
    SeeMore.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        triggerElements.forEach(function (triggerElement) {
            var targetElement = document.querySelector(triggerElement.getAttribute("data-pipe-target"));
            if (targetElement !== null) {
                triggerElement.addEventListener("click", function (e) {
                    e.preventDefault();
                    targetElement.style.display = "";
                    targetElement.classList.remove("pp-hidden");
                    triggerElement.remove();
                });
            }
        });
    };
    return SeeMore;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SeeMore);


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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToScroll = /** @class */ (function (_super) {
    __extends(ToScroll, _super);
    function ToScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "scroll";
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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
/* harmony import */ var _components_navbar_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar-toggle */ "./src/js/components/navbar-toggle.ts");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.ts");
/* harmony import */ var _components_see_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/see_more */ "./src/js/components/see_more.ts");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.ts");
/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/snackbar */ "./src/js/components/snackbar.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.ts");












(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_agreement__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_navbar_toggle__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();
(new _components_see_more__WEBPACK_IMPORTED_MODULE_6__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_7__["default"]()).initialize();
(new _components_snackbar__WEBPACK_IMPORTED_MODULE_8__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_9__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_10__["default"]()).initialize();
(new _components_toggle__WEBPACK_IMPORTED_MODULE_11__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZ3JlZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9uYXZiYXItdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NlZV9tb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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Q1Y7QUFDaUI7QUFDWDtBQUV6QyxDQUFDLElBQUksNkRBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDL0IsQ0FBQyxJQUFJLDZEQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQy9CLENBQUMsSUFBSSwyREFBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM3QixDQUFDLElBQUkseURBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxJQUFJLGlFQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLENBQUMsSUFBSSw2REFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUksNERBQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDN0IsQ0FBQyxJQUFJLG9FQUFlLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3JDLENBQUMsSUFBSSw0REFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUksdURBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsQ0FBQyxJQUFJLGlFQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2pDLENBQUMsSUFBSSwyREFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJwaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvcGlwZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nO1xuXHRwcm90ZWN0ZWQgZW50cnk6IHN0cmluZyA9IFwiZGF0YS1waXBlanNcIjtcblxuXHRwcm90ZWN0ZWQgZ2V0VHJpZ2dlckVsZW1lbnRzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy5lbnRyeX09JHt0aGlzLmlkfV1gKTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJhY2NvcmRpb25cIjtcblx0cHJpdmF0ZSBhY3RpdmVDbGFzczogc3RyaW5nID0gXCJwaXBlanMtYWNjb3JkaW9uLWFjdGl2ZVwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXQ6IHN0cmluZyA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHRpZiAodGFyZ2V0RWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5jbGljayh0YXJnZXRFbGVtZW50LCB0aGlzLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjbGljayh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgYWN0aXZlQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ3JlZW1lbnQgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwiYWdyZWVtZW50XCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlcjogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRcdGNvbnN0IHRhcmdldENoZWNrYm94ZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdHJpZ2dlci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik7XG5cblx0XHRcdGlmICh0YXJnZXRCdXR0b24gIT09IG51bGwgJiYgdGFyZ2V0Q2hlY2tib3hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiLCB0YXJnZXRDaGVja2JveGVzLmxlbmd0aC50b1N0cmluZygpKTtcblxuXHRcdFx0XHR0YXJnZXRDaGVja2JveGVzLmZvckVhY2goKHRhcmdldENoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0dGFyZ2V0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGNvdW50OiBudW1iZXIgPSBwYXJzZUludCh0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZXN0b3JlLWNoZWNrYm94ZXNcIikpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0Q2hlY2tib3guY2hlY2tlZCA/IGNvdW50LS0gOiBjb3VudCsrO1xuXG5cdFx0XHRcdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtcGlwZXN0b3JlLWNoZWNrYm94ZXNcIiwgY291bnQudG9TdHJpbmcoKSk7XG5cblx0XHRcdFx0XHRcdGlmIChjb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcImxvYWRpbmdcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHR0cmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJtb2RhbFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgbW9kYWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpKTtcblxuXHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQ2xvc2VyIGFjdGlvbnNcblx0XHRcdFx0Y29uc3QgY2xvc2VBY3Rpb25TZWxlY3RvcnM6IEFycmF5PHN0cmluZz4gPSBbXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX292ZXJsYXlcIixcblx0XHRcdFx0XHRcIi5wcC1tb2RhbF9fY2xvc2VcIixcblx0XHRcdFx0XHRcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIsXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX2Nsb3NlLWFjdGlvblwiLFxuXHRcdFx0XHRdO1xuXHRcdFx0XHRjbG9zZUFjdGlvblNlbGVjdG9ycy5mb3JFYWNoKChjbG9zZUFjdGlvblNlbGVjdG9yOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjbG9zZUVsZW1lbnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKGNsb3NlQWN0aW9uU2VsZWN0b3IpO1xuXHRcdFx0XHRcdGlmIChjbG9zZUVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhclRvZ2dsZSBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJuYXZiYXItdG9nZ2xlXCI7XG5cdHByb3RlY3RlZCBlbnRyeTogc3RyaW5nID0gXCJkYXRhLXBpcGVqc1wiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXBOYW1lOiBzdHJpbmcgPSB0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbmF2YmFyLWdyb3VwXCIpO1xuXHRcdFx0Y29uc3QgZ3JvdXBFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlLW5hdmJhci1ncm91cD0ke2dyb3VwTmFtZX1dYCk7XG5cblx0XHRcdGlmIChncm91cEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHRyaWdnZXJFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBwLW5hdmJhcl9fdG9nZ2xlX19vcGVuXCIpKSB7XG5cdFx0XHRcdFx0XHRncm91cEVsZW1lbnRzLmZvckVhY2goKGdyb3VwRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGdyb3VwRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcblx0XHRcdFx0XHRcdHRyaWdnZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Z3JvdXBFbGVtZW50cy5mb3JFYWNoKChncm91cEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChncm91cEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtbmF2YmFyX190b2dnbGVfX29wZW5cIikpIHtcblx0XHRcdFx0XHRcdFx0XHRncm91cEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGdyb3VwRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZU1vcmUgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic2VlLW1vcmVcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpKTtcblx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC1oaWRkZW5cIik7XG5cdFx0XHRcdFx0dHJpZ2dlckVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25hY2tiYXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic25hY2tiYXJcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRcdGNvbnN0IGhpZGRlblRpbWU6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLWhpZGRlbi10aW1lXCIpKTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cblx0XHRcdFx0XHRpZiAoaXNGaW5pdGUoaGlkZGVuVGltZSkpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC1zbmFja2Jhci0tYWN0aXZlXCIpO1xuXHRcdFx0XHRcdFx0fSwgaGlkZGVuVGltZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50Q2xvc2VyID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnRDbG9zZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50Q2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJ0ZXh0YXJlYS1leHBhbmRlZFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhWyR7dGhpcy5lbnRyeX09JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGFiXCI7XG5cdHByaXZhdGUgdGFiczogQXJyYXk8VGFiQ29udGFpbmVyPiA9IFtdO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRhYnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0cHJpdmF0ZSByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgdGFiSXRlbXM6IEFycmF5PGFueT47XG5cdHByaXZhdGUgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgbWVudUl0ZW1TZWxlY3Rvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHRhYjogSFRNTEVsZW1lbnQpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gdGFiO1xuXHRcdHRoaXMudGFiSXRlbXMgPSBbXTtcblxuXHRcdGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYl9fbWVudSBsaVwiO1xuXHRcdH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYi1ib3JkZXJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWItYm9yZGVyX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYi1ib3JkZXJfX21lbnUgbGlcIjtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGUoYWN0aXZlSXRlbUlEKSB7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKCh0YWJJdGVtKSA9PiB7XG5cdFx0XHRpZiAodGFiSXRlbS5pZCA9PT0gYWN0aXZlSXRlbUlEKSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBDb2xsZWN0XG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubWVudUl0ZW1TZWxlY3Rvcik7XG5cdFx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLnRhYkl0ZW1zLnB1c2goe1xuXHRcdFx0XHRpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygxOCkuc2xpY2UoLTgpLFxuXHRcdFx0XHRtZW51OiBpdGVtLFxuXHRcdFx0XHRjb250ZW50OiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoKDxIVE1MQW5jaG9yRWxlbWVudD5pdGVtLmZpcnN0RWxlbWVudENoaWxkKS5oYXNoKSxcblx0XHRcdFx0dmlzaWJsZTogaXRlbS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5hY3RpdmVDbGFzc05hbWUpXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBFdmVudEhhbmRsZXJcblx0XHRsZXQgYWN0aXZlSUQgPSBudWxsO1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0ubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoaXRlbS5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGl0ZW0udmlzaWJsZSkge1xuXHRcdFx0XHRhY3RpdmVJRCA9IGl0ZW0uaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsIHNldHVwXG5cdFx0dGhpcy50b2dnbGUoYWN0aXZlSUQpO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyXCI7XG5cdHByaXZhdGUgaWRTdHJpY3Q6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiO1xuXG5cdGRpc3BsYXlDb3VudGVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGxlbmd0aDogbnVtYmVyLCBtaW5MZW5ndGg6IG51bWJlciwgbWF4TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAobWluTGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1pbmZvXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0taW5mb1wiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobWF4TGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cblx0XHRcdGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmlubmVyVGV4dCA9IGxlbmd0aC50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0Q2hhcmFjdGVyTGVuZ3RoKG1vZGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0aWYgKG1vZGUgPT09IFwic3RyaWN0XCIpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdGJpbmRFdmVudCh0ZXh0Rm9ybTogSFRNTEVsZW1lbnQsIG1vZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblx0XHRjb25zdCBpZDogc3RyaW5nID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD5lLnRhcmdldDtcblx0XHRcdFx0Y29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmdldENoYXJhY3Rlckxlbmd0aChtb2RlLCB0YXJnZXRFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgbWluQ2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWluXCIpKSA/PyAwO1xuXHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpID8/IDA7XG5cdFx0XHRcdHRoaXMuZGlzcGxheUNvdW50ZXIoY291bnRlciwgbGVuZ3RoLCBtaW5DaGFyLCBtYXhDaGFyKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgbm9ybWFsRm9ybXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0bm9ybWFsRm9ybXMuZm9yRWFjaChub3JtYWxGb3JtID0+IHRoaXMuYmluZEV2ZW50KG5vcm1hbEZvcm0sIFwibm9ybWFsXCIpKTtcblxuXHRcdGNvbnN0IHN0cmljdEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApXG5cdFx0c3RyaWN0Rm9ybXMuZm9yRWFjaChzdHJpY3RGb3JtID0+IHRoaXMuYmluZEV2ZW50KHN0cmljdEZvcm0sIFwic3RyaWN0XCIpKTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcInNjcm9sbFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0aWYgKGhyZWYgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5cdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZGVzdGluYXRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRibG9jazogXCJzdGFydFwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidG9nZ2xlXCI7XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25MYWJlbCh0cmlnZ2VyOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChsYWJlbCAhPT0gbnVsbCkge1xuXHRcdFx0dHJpZ2dlci5pbm5lclRleHQgPSBsYWJlbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG5cdFx0XHRjb25zdCBjbG9zZUxhYmVsOiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1jbG9zZS1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IG9wZW5MYWJlbDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtb3Blbi1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IGhpZGRlbkNsYXNzTmFtZTogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtaGlkZGVuLWNsYXNzLW5hbWVcIik7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRhcmdldEVsZW1lbnRzLmZvckVhY2goKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhpZGRlbkNsYXNzTmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGhpZGRlbkNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuQ2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChoaWRkZW5DbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IEFncmVlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2FncmVlbWVudFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IE5hdmJhclRvZ2dsZSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci10b2dnbGVcIjtcbmltcG9ydCBUb1Njcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3RvX3Njcm9sbFwiO1xuaW1wb3J0IFNlZU1vcmUgZnJvbSBcIi4vY29tcG9uZW50cy9zZWVfbW9yZVwiO1xuaW1wb3J0IFN0cmV0Y2hUZXh0YXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWFcIjtcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiLi9jb21wb25lbnRzL3NuYWNrYmFyXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL2NvbXBvbmVudHMvdGFiXCI7XG5pbXBvcnQgVGV4dENvdW50ZXIgZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0X2NvdW50ZXJcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy90b2dnbGVcIjtcblxuKG5ldyBBY2NvcmRpb24oKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBBZ3JlZW1lbnQoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBMb2FkaW5nKCkpLmluaXRpYWxpemUoKTtcbihuZXcgTW9kYWwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBOYXZiYXJUb2dnbGUoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb1Njcm9sbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IFNlZU1vcmUoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTdHJldGNoVGV4dGFyZWEoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTbmFja2JhcigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRhYigpKS5pbml0aWFsaXplKCk7XG4obmV3IFRleHRDb3VudGVyKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVG9nZ2xlKCkpLmluaXRpYWxpemUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=