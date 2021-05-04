/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/base/AppComponent.ts":
/*!*************************************!*\
  !*** ./src/js/base/AppComponent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.entry = "data-pipejs";
    }
    AppComponent.prototype.getTriggerElements = function () {
        return document.querySelectorAll("[" + this.entry + "=" + this.id + "]");
    };
    return AppComponent;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);


/***/ }),

/***/ "./src/js/components/accordion.ts":
/*!****************************************!*\
  !*** ./src/js/components/accordion.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ "./src/js/components/agreement.ts":
/*!****************************************!*\
  !*** ./src/js/components/agreement.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agreement);


/***/ }),

/***/ "./src/js/components/appearance.ts":
/*!*****************************************!*\
  !*** ./src/js/components/appearance.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

var Appearance = /** @class */ (function (_super) {
    __extends(Appearance, _super);
    function Appearance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "appearance";
        return _this;
    }
    Appearance.prototype.initialize = function () {
        var triggerElements = this.getTriggerElements();
        var htmlTag = document.querySelector("html");
        triggerElements.forEach(function (triggerElement) {
            triggerElement.addEventListener("click", function (e) {
                e.preventDefault();
                if (htmlTag.classList.contains("dark")) {
                    htmlTag.classList.remove("dark");
                }
                else {
                    htmlTag.classList.add("dark");
                }
            });
        });
    };
    return Appearance;
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appearance);


/***/ }),

/***/ "./src/js/components/loading.ts":
/*!**************************************!*\
  !*** ./src/js/components/loading.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./src/js/components/modal.ts":
/*!************************************!*\
  !*** ./src/js/components/modal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./src/js/components/navbar-toggle.ts":
/*!********************************************!*\
  !*** ./src/js/components/navbar-toggle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarToggle);


/***/ }),

/***/ "./src/js/components/see_more.ts":
/*!***************************************!*\
  !*** ./src/js/components/see_more.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeeMore);


/***/ }),

/***/ "./src/js/components/snackbar.ts":
/*!***************************************!*\
  !*** ./src/js/components/snackbar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snackbar);


/***/ }),

/***/ "./src/js/components/stretch_textarea.ts":
/*!***********************************************!*\
  !*** ./src/js/components/stretch_textarea.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StretchTextarea);


/***/ }),

/***/ "./src/js/components/tab.ts":
/*!**********************************!*\
  !*** ./src/js/components/tab.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextCounter);


/***/ }),

/***/ "./src/js/components/to_scroll.ts":
/*!****************************************!*\
  !*** ./src/js/components/to_scroll.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToScroll);


/***/ }),

/***/ "./src/js/components/toggle.ts":
/*!*************************************!*\
  !*** ./src/js/components/toggle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}(_base_AppComponent__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/pipe.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.ts");
/* harmony import */ var _components_agreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/agreement */ "./src/js/components/agreement.ts");
/* harmony import */ var _components_appearance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appearance */ "./src/js/components/appearance.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading */ "./src/js/components/loading.ts");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts");
/* harmony import */ var _components_navbar_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar-toggle */ "./src/js/components/navbar-toggle.ts");
/* harmony import */ var _components_to_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/to_scroll */ "./src/js/components/to_scroll.ts");
/* harmony import */ var _components_see_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/see_more */ "./src/js/components/see_more.ts");
/* harmony import */ var _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stretch_textarea */ "./src/js/components/stretch_textarea.ts");
/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/snackbar */ "./src/js/components/snackbar.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.ts");
/* harmony import */ var _components_text_counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/text_counter */ "./src/js/components/text_counter.ts");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.ts");













(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__.default()).initialize();
(new _components_agreement__WEBPACK_IMPORTED_MODULE_1__.default()).initialize();
(new _components_appearance__WEBPACK_IMPORTED_MODULE_2__.default()).initialize();
(new _components_loading__WEBPACK_IMPORTED_MODULE_3__.default()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_4__.default()).initialize();
(new _components_navbar_toggle__WEBPACK_IMPORTED_MODULE_5__.default()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_6__.default()).initialize();
(new _components_see_more__WEBPACK_IMPORTED_MODULE_7__.default()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_8__.default()).initialize();
(new _components_snackbar__WEBPACK_IMPORTED_MODULE_9__.default()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_10__.default()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_11__.default()).initialize();
(new _components_toggle__WEBPACK_IMPORTED_MODULE_12__.default()).initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2Jhc2UvQXBwQ29tcG9uZW50LnRzIiwid2VicGFjazovL3BpcGUvLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vcGlwZS8uL3NyYy9qcy9jb21wb25lbnRzL2FncmVlbWVudC50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwZWFyYW5jZS50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vcGlwZS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmJhci10b2dnbGUudHMiLCJ3ZWJwYWNrOi8vcGlwZS8uL3NyYy9qcy9jb21wb25lbnRzL3NlZV9tb3JlLnRzIiwid2VicGFjazovL3BpcGUvLi9zcmMvanMvY29tcG9uZW50cy9zbmFja2Jhci50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RyZXRjaF90ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLnRzIiwid2VicGFjazovL3BpcGUvLi9zcmMvanMvY29tcG9uZW50cy90ZXh0X2NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vcGlwZS8uL3NyYy9qcy9jb21wb25lbnRzL3RvX3Njcm9sbC50cyIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLnRzIiwid2VicGFjazovL3BpcGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGlwZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGlwZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpcGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waXBlLy4vc3JjL2pzL3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBRVcsVUFBSyxHQUFXLGFBQWEsQ0FBQztJQUt6QyxDQUFDO0lBSFUseUNBQWtCLEdBQTVCO1FBQ0MsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxFQUFFLE1BQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRixtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUCtDO0FBR2hEO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNkJDO1FBNUJVLFFBQUUsR0FBVyxXQUFXLENBQUM7UUFDM0IsaUJBQVcsR0FBVyx5QkFBeUIsQ0FBQzs7SUEyQnpELENBQUM7SUF6Qk8sOEJBQVUsR0FBakI7UUFBQSxpQkFjQztRQWJBLElBQU0sZUFBZSxHQUE0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUzRSxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFPO1lBQzlCLElBQU0sTUFBTSxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoRSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsRSxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQzNCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBQztvQkFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxDQUFDO2FBQ0g7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBSyxHQUFMLFVBQU0sYUFBMEIsRUFB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VSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxJQUFJLDhEQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLENBQUMsSUFBSSwwREFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUkseURBQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDN0IsQ0FBQyxJQUFJLGlFQUFlLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3JDLENBQUMsSUFBSSx5REFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixDQUFDLElBQUkscURBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsQ0FBQyxJQUFJLDhEQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2pDLENBQUMsSUFBSSx3REFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJwaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmc7XG5cdHByb3RlY3RlZCBlbnRyeTogc3RyaW5nID0gXCJkYXRhLXBpcGVqc1wiO1xuXG5cdHByb3RlY3RlZCBnZXRUcmlnZ2VyRWxlbWVudHMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLmVudHJ5fT0ke3RoaXMuaWR9XWApO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcImFjY29yZGlvblwiO1xuXHRwcml2YXRlIGFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcInBpcGVqcy1hY2NvcmRpb24tYWN0aXZlXCI7XG5cblx0cHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdHJpZ2dlckVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHRoaXMuZ2V0VHJpZ2dlckVsZW1lbnRzKCk7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmNsaWNrKHRhcmdldEVsZW1lbnQsIHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNsaWNrKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhY3RpdmVDbGFzczogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSkge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmVlbWVudCBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJhZ3JlZW1lbnRcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXHRcdFx0Y29uc3QgdGFyZ2V0Q2hlY2tib3hlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0cmlnZ2VyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcblxuXHRcdFx0aWYgKHRhcmdldEJ1dHRvbiAhPT0gbnVsbCAmJiB0YXJnZXRDaGVja2JveGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGVzdG9yZS1jaGVja2JveGVzXCIsIHRhcmdldENoZWNrYm94ZXMubGVuZ3RoLnRvU3RyaW5nKCkpO1xuXG5cdFx0XHRcdHRhcmdldENoZWNrYm94ZXMuZm9yRWFjaCgodGFyZ2V0Q2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiKSk7XG5cdFx0XHRcdFx0XHR0YXJnZXRDaGVja2JveC5jaGVja2VkID8gY291bnQtLSA6IGNvdW50Kys7XG5cblx0XHRcdFx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1waXBlc3RvcmUtY2hlY2tib3hlc1wiLCBjb3VudC50b1N0cmluZygpKTtcblxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVhcmFuY2UgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwiYXBwZWFyYW5jZVwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXHRcdGNvbnN0IGh0bWxUYWc6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG5cblx0XHR0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaCgodHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRpZiAoaHRtbFRhZy5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKSB7XG5cdFx0XHRcdFx0XHRodG1sVGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRodG1sVGFnLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcImxvYWRpbmdcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldDogc3RyaW5nID0gdHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHR0cmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJtb2RhbFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgbW9kYWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpKTtcblxuXHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFRyaWdnZXJcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQ2xvc2VyIGFjdGlvbnNcblx0XHRcdFx0Y29uc3QgY2xvc2VBY3Rpb25TZWxlY3RvcnM6IEFycmF5PHN0cmluZz4gPSBbXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX292ZXJsYXlcIixcblx0XHRcdFx0XHRcIi5wcC1tb2RhbF9fY2xvc2VcIixcblx0XHRcdFx0XHRcIi5wcC1tb2RhbF9fY29udGVudHNfX2Nsb3NlXCIsXG5cdFx0XHRcdFx0XCIucHAtbW9kYWxfX2Nsb3NlLWFjdGlvblwiLFxuXHRcdFx0XHRdO1xuXHRcdFx0XHRjbG9zZUFjdGlvblNlbGVjdG9ycy5mb3JFYWNoKChjbG9zZUFjdGlvblNlbGVjdG9yOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjbG9zZUVsZW1lbnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKGNsb3NlQWN0aW9uU2VsZWN0b3IpO1xuXHRcdFx0XHRcdGlmIChjbG9zZUVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhclRvZ2dsZSBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJuYXZiYXItdG9nZ2xlXCI7XG5cdHByb3RlY3RlZCBlbnRyeTogc3RyaW5nID0gXCJkYXRhLXBpcGVqc1wiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2goKHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXBOYW1lOiBzdHJpbmcgPSB0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbmF2YmFyLWdyb3VwXCIpO1xuXHRcdFx0Y29uc3QgZ3JvdXBFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1waXBlLW5hdmJhci1ncm91cD0ke2dyb3VwTmFtZX1dYCk7XG5cblx0XHRcdGlmIChncm91cEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHRyaWdnZXJFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBwLW5hdmJhcl9fdG9nZ2xlX19vcGVuXCIpKSB7XG5cdFx0XHRcdFx0XHRncm91cEVsZW1lbnRzLmZvckVhY2goKGdyb3VwRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGdyb3VwRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcblx0XHRcdFx0XHRcdHRyaWdnZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Z3JvdXBFbGVtZW50cy5mb3JFYWNoKChncm91cEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChncm91cEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtbmF2YmFyX190b2dnbGVfX29wZW5cIikpIHtcblx0XHRcdFx0XHRcdFx0XHRncm91cEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGdyb3VwRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZU1vcmUgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic2VlLW1vcmVcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpKTtcblx0XHRcdGlmICh0YXJnZXRFbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC1oaWRkZW5cIik7XG5cdFx0XHRcdFx0dHJpZ2dlckVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25hY2tiYXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwic25hY2tiYXJcIjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblx0XHRcdGNvbnN0IGhpZGRlblRpbWU6IG51bWJlciA9IHBhcnNlSW50KHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLWhpZGRlbi10aW1lXCIpKTtcblxuXHRcdFx0aWYgKHRhcmdldEVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cblx0XHRcdFx0XHRpZiAoaXNGaW5pdGUoaGlkZGVuVGltZSkpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC1zbmFja2Jhci0tYWN0aXZlXCIpO1xuXHRcdFx0XHRcdFx0fSwgaGlkZGVuVGltZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50Q2xvc2VyID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcblx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnRDbG9zZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50Q2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXNuYWNrYmFyLS1hY3RpdmVcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSBleHRlbmRzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudEludGVyZmFjZSB7XG5cdHByb3RlY3RlZCBpZDogc3RyaW5nID0gXCJ0ZXh0YXJlYS1leHBhbmRlZFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhWyR7dGhpcy5lbnRyeX09JHt0aGlzLmlkfV1gKTtcblx0XHRpZiAodGV4dGFyZWFzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRleHRhcmVhcy5mb3JFYWNoKCh0ZXh0YXJlYSkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4cGFuZGVkVGV4dGFyZWEodGV4dGFyZWEpO1xuXHRcdFx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiB0aGlzLmV4cGFuZGVkVGV4dGFyZWEoZS50YXJnZXQpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZGVkVGV4dGFyZWEodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFt0YXJnZXQuc2Nyb2xsSGVpZ2h0LCBcInB4XCJdLmpvaW4oXCJcIik7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGFiXCI7XG5cdHByaXZhdGUgdGFiczogQXJyYXk8VGFiQ29udGFpbmVyPiA9IFtdO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRhYnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0cHJpdmF0ZSByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgdGFiSXRlbXM6IEFycmF5PGFueT47XG5cdHByaXZhdGUgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgbWVudUl0ZW1TZWxlY3Rvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHRhYjogSFRNTEVsZW1lbnQpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gdGFiO1xuXHRcdHRoaXMudGFiSXRlbXMgPSBbXTtcblxuXHRcdGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHAtdGFiXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYl9fbWVudSBsaVwiO1xuXHRcdH0gZWxzZSBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYi1ib3JkZXJcIikpIHtcblx0XHRcdHRoaXMuYWN0aXZlQ2xhc3NOYW1lID0gXCJwcC10YWItYm9yZGVyX19tZW51X19hY3RpdmVcIjtcblx0XHRcdHRoaXMubWVudUl0ZW1TZWxlY3RvciA9IFwiLnBwLXRhYi1ib3JkZXJfX21lbnUgbGlcIjtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGUoYWN0aXZlSXRlbUlEKSB7XG5cdFx0dGhpcy50YWJJdGVtcy5mb3JFYWNoKCh0YWJJdGVtKSA9PiB7XG5cdFx0XHRpZiAodGFiSXRlbS5pZCA9PT0gYWN0aXZlSXRlbUlEKSB7XG5cdFx0XHRcdHRhYkl0ZW0ubWVudS5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdFx0dGFiSXRlbS5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHRhYkl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBDb2xsZWN0XG5cdFx0Y29uc3QgbWVudUl0ZW1zID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubWVudUl0ZW1TZWxlY3Rvcik7XG5cdFx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLnRhYkl0ZW1zLnB1c2goe1xuXHRcdFx0XHRpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygxOCkuc2xpY2UoLTgpLFxuXHRcdFx0XHRtZW51OiBpdGVtLFxuXHRcdFx0XHRjb250ZW50OiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoKDxIVE1MQW5jaG9yRWxlbWVudD5pdGVtLmZpcnN0RWxlbWVudENoaWxkKS5oYXNoKSxcblx0XHRcdFx0dmlzaWJsZTogaXRlbS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5hY3RpdmVDbGFzc05hbWUpXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBFdmVudEhhbmRsZXJcblx0XHRsZXQgYWN0aXZlSUQgPSBudWxsO1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0ubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoaXRlbS5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGl0ZW0udmlzaWJsZSkge1xuXHRcdFx0XHRhY3RpdmVJRCA9IGl0ZW0uaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsIHNldHVwXG5cdFx0dGhpcy50b2dnbGUoYWN0aXZlSUQpO1xuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCIuLi9iYXNlL0FwcENvbXBvbmVudFwiO1xuaW1wb3J0IENvbXBvbmVudEludGVyZmFjZSBmcm9tIFwiLi4vYmFzZS9Db21wb25lbnRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyXCI7XG5cdHByaXZhdGUgaWRTdHJpY3Q6IHN0cmluZyA9IFwidGV4dC1jb3VudGVyLXN0cmljdFwiO1xuXG5cdGRpc3BsYXlDb3VudGVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGxlbmd0aDogbnVtYmVyLCBtaW5MZW5ndGg6IG51bWJlciwgbWF4TGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAobWluTGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1pbmZvXCIpO1xuXG5cdFx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0taW5mb1wiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobWF4TGVuZ3RoID4gMCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cblx0XHRcdGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJwcC10ZXh0LS1kYW5nZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmlubmVyVGV4dCA9IGxlbmd0aC50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0Q2hhcmFjdGVyTGVuZ3RoKG1vZGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0aWYgKG1vZGUgPT09IFwic3RyaWN0XCIpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHJcXG58XFxufFxcc3zjgIAvZywnJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdGJpbmRFdmVudCh0ZXh0Rm9ybTogSFRNTEVsZW1lbnQsIG1vZGU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IGtleXVwRXZlbnQgPSBuZXcgRXZlbnQoXCJrZXl1cFwiKTtcblx0XHRjb25zdCBpZDogc3RyaW5nID0gdGV4dEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG5cdFx0aWYgKGNvdW50ZXIgIT09IG51bGwpIHtcblx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0dGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD5lLnRhcmdldDtcblx0XHRcdFx0Y29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmdldENoYXJhY3Rlckxlbmd0aChtb2RlLCB0YXJnZXRFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0Y29uc3QgbWluQ2hhcjogbnVtYmVyID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWluXCIpKSA/PyAwO1xuXHRcdFx0XHRjb25zdCBtYXhDaGFyOiBudW1iZXIgPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1tYXhcIikpID8/IDA7XG5cdFx0XHRcdHRoaXMuZGlzcGxheUNvdW50ZXIoY291bnRlciwgbGVuZ3RoLCBtaW5DaGFyLCBtYXhDaGFyKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHR0ZXh0Rm9ybS5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qgbm9ybWFsRm9ybXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0bm9ybWFsRm9ybXMuZm9yRWFjaChub3JtYWxGb3JtID0+IHRoaXMuYmluZEV2ZW50KG5vcm1hbEZvcm0sIFwibm9ybWFsXCIpKTtcblxuXHRcdGNvbnN0IHN0cmljdEZvcm1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApXG5cdFx0c3RyaWN0Rm9ybXMuZm9yRWFjaChzdHJpY3RGb3JtID0+IHRoaXMuYmluZEV2ZW50KHN0cmljdEZvcm0sIFwic3RyaWN0XCIpKTtcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiLi4vYmFzZS9BcHBDb21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRJbnRlcmZhY2UgZnJvbSBcIi4uL2Jhc2UvQ29tcG9uZW50SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvU2Nyb2xsIGV4dGVuZHMgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50SW50ZXJmYWNlIHtcblx0cHJvdGVjdGVkIGlkOiBzdHJpbmcgPSBcInNjcm9sbFwiO1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRyaWdnZXJFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSB0aGlzLmdldFRyaWdnZXJFbGVtZW50cygpO1xuXG5cdFx0dHJpZ2dlckVsZW1lbnRzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdGNvbnN0IGJsb2NrID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtdGFyZ2V0XCIpIHx8IFwic3RhcnRcIjtcblxuXHRcdFx0aWYgKGhyZWYgIT09IG51bGwgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5cdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZGVzdGluYXRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRibG9jazogXCJzdGFydFwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIi4uL2Jhc2UvQXBwQ29tcG9uZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50SW50ZXJmYWNlIGZyb20gXCIuLi9iYXNlL0NvbXBvbmVudEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnRJbnRlcmZhY2Uge1xuXHRwcm90ZWN0ZWQgaWQ6IHN0cmluZyA9IFwidG9nZ2xlXCI7XG5cblx0cHJpdmF0ZSBzZXRCdXR0b25MYWJlbCh0cmlnZ2VyOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChsYWJlbCAhPT0gbnVsbCkge1xuXHRcdFx0dHJpZ2dlci5pbm5lclRleHQgPSBsYWJlbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCB0cmlnZ2VyRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gdGhpcy5nZXRUcmlnZ2VyRWxlbWVudHMoKTtcblxuXHRcdHRyaWdnZXJFbGVtZW50cy5mb3JFYWNoKCh0cmlnZ2VyOiBIVE1MRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG5cdFx0XHRjb25zdCBjbG9zZUxhYmVsOiBzdHJpbmcgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS1jbG9zZS1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IG9wZW5MYWJlbDogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtb3Blbi1sYWJlbFwiKTtcblx0XHRcdGNvbnN0IGhpZGRlbkNsYXNzTmFtZTogc3RyaW5nID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtaGlkZGVuLWNsYXNzLW5hbWVcIik7XG5cblx0XHRcdGlmICh0YXJnZXRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRhcmdldEVsZW1lbnRzLmZvckVhY2goKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhpZGRlbkNsYXNzTmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGhpZGRlbkNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuQ2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChoaWRkZW5DbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldEJ1dHRvbkxhYmVsKHRyaWdnZXIsIGNsb3NlTGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QnV0dG9uTGFiZWwodHJpZ2dlciwgb3BlbkxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5pbXBvcnQgQWdyZWVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvYWdyZWVtZW50XCI7XG5pbXBvcnQgQXBwZWFyYW5jZSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcGVhcmFuY2VcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCBOYXZiYXJUb2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXItdG9nZ2xlXCI7XG5pbXBvcnQgVG9TY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy90b19zY3JvbGxcIjtcbmltcG9ydCBTZWVNb3JlIGZyb20gXCIuL2NvbXBvbmVudHMvc2VlX21vcmVcIjtcbmltcG9ydCBTdHJldGNoVGV4dGFyZWEgZnJvbSBcIi4vY29tcG9uZW50cy9zdHJldGNoX3RleHRhcmVhXCI7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9zbmFja2JhclwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYlwiO1xuaW1wb3J0IFRleHRDb3VudGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dF9jb3VudGVyXCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvdG9nZ2xlXCI7XG5cbihuZXcgQWNjb3JkaW9uKCkpLmluaXRpYWxpemUoKTtcbihuZXcgQWdyZWVtZW50KCkpLmluaXRpYWxpemUoKTtcbihuZXcgQXBwZWFyYW5jZSgpKS5pbml0aWFsaXplKCk7XG4obmV3IExvYWRpbmcoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBNb2RhbCgpKS5pbml0aWFsaXplKCk7XG4obmV3IE5hdmJhclRvZ2dsZSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFRvU2Nyb2xsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgU2VlTW9yZSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFN0cmV0Y2hUZXh0YXJlYSgpKS5pbml0aWFsaXplKCk7XG4obmV3IFNuYWNrYmFyKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGFiKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVGV4dENvdW50ZXIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUb2dnbGUoKSkuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==