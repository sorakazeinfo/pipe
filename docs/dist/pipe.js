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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
	constructor() {
		this.id = "accordion";
		this.activeClass = "pipejs-accordion-active";
	}

	initialize() {
		const triggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);

		if (triggers.length > 0) {
			triggers.forEach(trigger => {
				trigger.addEventListener("click", e => {
					e.preventDefault();

					const target = trigger.getAttribute("data-pipe-target");
					if (target !== null) {
						const targetElement = document.querySelector(target);

						if (targetElement.classList.contains(this.activeClass)) {
							targetElement.classList.remove(this.activeClass);
							targetElement.style.maxHeight = 0;
						} else {
							targetElement.classList.add(this.activeClass);
							targetElement.style.maxHeight = targetElement.scrollHeight + "px";
						}
					}
				});
			});
		}
	}
}


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
class Modal {
	constructor() {
		this.id = "modal";
	}

	initialize() {
		const modalTriggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (modalTriggers.length > 0) {
			modalTriggers.forEach(button => {
				const id = button.getAttribute("data-pipe-target");
				const modal = document.querySelector(id);

				if (modal !== null) {
					// Trigger
					button.addEventListener("click", function(e) {
						e.preventDefault();
						modal.style.display = "block";
					});

					// Overlay
					const overlay = modal.querySelector(".pp-modal__overlay");
					if (overlay !== null) {
						overlay.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}

					// Close
					const overlayClose = modal.querySelector(".pp-modal__close");
					if (overlayClose !== null) {
						overlayClose.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}

					// Close in contents
					const contentClose = modal.querySelector(".pp-modal__contents__close");
					if (contentClose !== null) {
						contentClose.addEventListener("click", function(e) {
							e.preventDefault();
							modal.style.display = "none";
						});
					}
				}
			});
		}
	}
}


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
class StretchTextarea {
	constructor() {
		this.id = "textarea-expanded";
	}

	initialize() {
		const textareas = document.querySelectorAll(`textarea[data-pipejs=${this.id}]`);
		if (textareas.length > 0) {
			textareas.forEach((textarea) => {
				this.expandedTextarea(textarea);
				textarea.addEventListener("input", e => this.expandedTextarea(e.target));
			});
		}
	}

	expandedTextarea(target) {
		target.style.height = [target.scrollHeight, "px"].join("");
	}
}


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
class Tab {
	constructor() {
		this.id = "tab";
		this.tabs = [];
	}

	initialize() {
		const tabs = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (tabs.length > 0) {
			tabs.forEach(tab => {
				this.tabs.push(new TabContainer(tab));
			});

			this.tabs.forEach(tab => tab.initialize());
		}
	}
}

class TabContainer {
	constructor(tab) {
		this.rootElement = tab;
		this.tabItems = [];

		this.itemElements = [];
		this.contentElements = [];

		if (tab.classList.contains("pp-tab")) {
			this.activeClassName = "pp-tab__menu__active";
			this.menuItemSelector = ".pp-tab__menu li";
		} else if (tab.classList.contains("pp-tab-border")) {
			this.activeClassName = "pp-tab-border__menu__active";
			this.menuItemSelector = ".pp-tab-border__menu li";
		}
	}

	toggle(activeItemID) {
		this.tabItems.forEach((tabItem) => {
			if (tabItem.id === activeItemID) {
				tabItem.menu.classList.add(this.activeClassName);
				tabItem.content.style.display = "block";
				tabItem.visible = true;
			} else {
				tabItem.menu.classList.remove(this.activeClassName);
				tabItem.content.style.display = "none";
				tabItem.visible = false;
			}
		});
	}

	initialize() {
		// Collect
		const menuItems = this.rootElement.querySelectorAll(this.menuItemSelector);
		menuItems.forEach(item => {
			this.tabItems.push({
				id: Math.random().toString(18).slice(-8),
				menu: item,
				content: this.rootElement.querySelector(item.firstElementChild.hash),
				visible: item.classList.contains(this.activeClassName)
			});
		});

		// Add EventHandler
		let activeID = null;
		this.tabItems.forEach(item => {
			item.menu.addEventListener("click", e => {
				e.preventDefault();
				this.toggle(item.id);
			});

			if (item.visible) {
				activeID = item.id;
			}
		});

		// Initial setup
		this.toggle(activeID);
	}
}


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
class TextCounter {
	constructor() {
		this.id = "text-counter";
		this.idStrict = "text-counter-strict"
	}

	initialize() {
		const keyupEvent = new Event("keyup");

		// Normal
		let textForms = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (textForms.length > 0) {
			textForms.forEach(textForm => {
				const id = textForm.getAttribute("data-pipe-target");
				const counter = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						const maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

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
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}

		// Strict
		textForms = document.querySelectorAll(`[data-pipejs=${this.idStrict}]`);
		if (textForms.length > 0) {
			textForms.forEach(textForm => {
				const id = textForm.getAttribute("data-pipe-target");
				const counter = document.querySelector(id);

				if (counter !== null) {
					// Text Form
					textForm.addEventListener("keyup", function(e) {
						e.preventDefault();
						const currentCharCount = e.target.value.replace(/\r\n|\n|\s|　/g,'').length;
						const maxChar = parseInt(e.target.getAttribute("data-pipe-max"));

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
					});

					// Event Trigger
					textForm.dispatchEvent(keyupEvent);
				}
			});
		}
	}
}


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
class ToScroll {
	constructor() {
		this.id = "scroll";
	}

	initialize() {
		const scrollTriggers = document.querySelectorAll(`[data-pipejs=${this.id}]`);
		if (scrollTriggers.length > 0) {
			scrollTriggers.forEach(trigger => {
				const href  = trigger.getAttribute("href");
				const block = trigger.getAttribute("data-pipe-target") || "start";

				if (href !== null && document.querySelector(href) === null) {
					return;
				}

				const destinationElement = document.querySelector(href) || document.getElementsByTagName("body")[0];

				trigger.addEventListener("click", function(e) {
					e.preventDefault();
					destinationElement.scrollIntoView({
						behavior: "smooth",
						block: block
					});
				});
			});
		}
	}
}


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







(new _components_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]()).initialize();
(new _components_modal__WEBPACK_IMPORTED_MODULE_1__["default"]()).initialize();
(new _components_to_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]()).initialize();
(new _components_stretch_textarea__WEBPACK_IMPORTED_MODULE_3__["default"]()).initialize();
(new _components_tab__WEBPACK_IMPORTED_MODULE_4__["default"]()).initialize();
(new _components_text_counter__WEBPACK_IMPORTED_MODULE_5__["default"]()).initialize();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RleHRfY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b19zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpcGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNB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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BpcGUuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJhY2NvcmRpb25cIjtcblx0XHR0aGlzLmFjdGl2ZUNsYXNzID0gXCJwaXBlanMtYWNjb3JkaW9uLWFjdGl2ZVwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXG5cdFx0aWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG5cdFx0XHRcdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLXRhcmdldFwiKTtcblx0XHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5hY3RpdmVDbGFzcykpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJtb2RhbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKG1vZGFsVHJpZ2dlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0bW9kYWxUcmlnZ2Vycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gVHJpZ2dlclxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJsYXlcblx0XHRcdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fb3ZlcmxheVwiKTtcblx0XHRcdFx0XHRpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENsb3NlXG5cdFx0XHRcdFx0Y29uc3Qgb3ZlcmxheUNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wcC1tb2RhbF9fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKG92ZXJsYXlDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0b3ZlcmxheUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2xvc2UgaW4gY29udGVudHNcblx0XHRcdFx0XHRjb25zdCBjb250ZW50Q2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBwLW1vZGFsX19jb250ZW50c19fY2xvc2VcIik7XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnRDbG9zZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29udGVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmV0Y2hUZXh0YXJlYSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInRleHRhcmVhLWV4cGFuZGVkXCI7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdGNvbnN0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHRleHRhcmVhW2RhdGEtcGlwZWpzPSR7dGhpcy5pZH1dYCk7XG5cdFx0aWYgKHRleHRhcmVhcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0ZXh0YXJlYXMuZm9yRWFjaCgodGV4dGFyZWEpID0+IHtcblx0XHRcdFx0dGhpcy5leHBhbmRlZFRleHRhcmVhKHRleHRhcmVhKTtcblx0XHRcdFx0dGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gdGhpcy5leHBhbmRlZFRleHRhcmVhKGUudGFyZ2V0KSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRleHBhbmRlZFRleHRhcmVhKHRhcmdldCkge1xuXHRcdHRhcmdldC5zdHlsZS5oZWlnaHQgPSBbdGFyZ2V0LnNjcm9sbEhlaWdodCwgXCJweFwiXS5qb2luKFwiXCIpO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0YWJcIjtcblx0XHR0aGlzLnRhYnMgPSBbXTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0YWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0XHR0aGlzLnRhYnMucHVzaChuZXcgVGFiQ29udGFpbmVyKHRhYikpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuaW5pdGlhbGl6ZSgpKTtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgVGFiQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IodGFiKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IHRhYjtcblx0XHR0aGlzLnRhYkl0ZW1zID0gW107XG5cblx0XHR0aGlzLml0ZW1FbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuY29udGVudEVsZW1lbnRzID0gW107XG5cblx0XHRpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcInBwLXRhYlwiKSkge1xuXHRcdFx0dGhpcy5hY3RpdmVDbGFzc05hbWUgPSBcInBwLXRhYl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWJfX21lbnUgbGlcIjtcblx0XHR9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcC10YWItYm9yZGVyXCIpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IFwicHAtdGFiLWJvcmRlcl9fbWVudV9fYWN0aXZlXCI7XG5cdFx0XHR0aGlzLm1lbnVJdGVtU2VsZWN0b3IgPSBcIi5wcC10YWItYm9yZGVyX19tZW51IGxpXCI7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlKGFjdGl2ZUl0ZW1JRCkge1xuXHRcdHRoaXMudGFiSXRlbXMuZm9yRWFjaCgodGFiSXRlbSkgPT4ge1xuXHRcdFx0aWYgKHRhYkl0ZW0uaWQgPT09IGFjdGl2ZUl0ZW1JRCkge1xuXHRcdFx0XHR0YWJJdGVtLm1lbnUuY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRcdHRhYkl0ZW0uY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFiSXRlbS5tZW51LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzc05hbWUpO1xuXHRcdFx0XHR0YWJJdGVtLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR0YWJJdGVtLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly8gQ29sbGVjdFxuXHRcdGNvbnN0IG1lbnVJdGVtcyA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm1lbnVJdGVtU2VsZWN0b3IpO1xuXHRcdG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy50YWJJdGVtcy5wdXNoKHtcblx0XHRcdFx0aWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTgpLnNsaWNlKC04KSxcblx0XHRcdFx0bWVudTogaXRlbSxcblx0XHRcdFx0Y29udGVudDogdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuaGFzaCksXG5cdFx0XHRcdHZpc2libGU6IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuYWN0aXZlQ2xhc3NOYW1lKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgRXZlbnRIYW5kbGVyXG5cdFx0bGV0IGFjdGl2ZUlEID0gbnVsbDtcblx0XHR0aGlzLnRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChpdGVtLnZpc2libGUpIHtcblx0XHRcdFx0YWN0aXZlSUQgPSBpdGVtLmlkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gSW5pdGlhbCBzZXR1cFxuXHRcdHRoaXMudG9nZ2xlKGFjdGl2ZUlEKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENvdW50ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gXCJ0ZXh0LWNvdW50ZXJcIjtcblx0XHR0aGlzLmlkU3RyaWN0ID0gXCJ0ZXh0LWNvdW50ZXItc3RyaWN0XCJcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc3Qga2V5dXBFdmVudCA9IG5ldyBFdmVudChcImtleXVwXCIpO1xuXG5cdFx0Ly8gTm9ybWFsXG5cdFx0bGV0IHRleHRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmICh0ZXh0Rm9ybXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dEZvcm1zLmZvckVhY2godGV4dEZvcm0gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXhDaGFyID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1waXBlLW1heFwiKSk7XG5cblx0XHRcdFx0XHRcdGlmIChOdW1iZXIuaXNOYU4obWF4Q2hhcikgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiBtYXhDaGFyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvdW50ZXIuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gRXZlbnQgVHJpZ2dlclxuXHRcdFx0XHRcdHRleHRGb3JtLmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFN0cmljdFxuXHRcdHRleHRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWRTdHJpY3R9XWApO1xuXHRcdGlmICh0ZXh0Rm9ybXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGV4dEZvcm1zLmZvckVhY2godGV4dEZvcm0gPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRleHRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuXHRcdFx0XHRpZiAoY291bnRlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFRleHQgRm9ybVxuXHRcdFx0XHRcdHRleHRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50Q2hhckNvdW50ID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxyXFxufFxcbnxcXHN844CAL2csJycpLmxlbmd0aDtcblx0XHRcdFx0XHRcdGNvbnN0IG1heENoYXIgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBpcGUtbWF4XCIpKTtcblxuXHRcdFx0XHRcdFx0aWYgKE51bWJlci5pc05hTihtYXhDaGFyKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRDaGFyQ291bnQgPiBtYXhDaGFyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y291bnRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwicHAtdGV4dC0tZGFuZ2VyXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInBwLXRleHQtLWRhbmdlclwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA9IGN1cnJlbnRDaGFyQ291bnQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb3VudGVyLmlubmVyVGV4dCA9IGN1cnJlbnRDaGFyQ291bnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBFdmVudCBUcmlnZ2VyXG5cdFx0XHRcdFx0dGV4dEZvcm0uZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb1Njcm9sbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaWQgPSBcInNjcm9sbFwiO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHRjb25zdCBzY3JvbGxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBpcGVqcz0ke3RoaXMuaWR9XWApO1xuXHRcdGlmIChzY3JvbGxUcmlnZ2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY3JvbGxUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBocmVmICA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtcGlwZS10YXJnZXRcIikgfHwgXCJzdGFydFwiO1xuXG5cdFx0XHRcdGlmIChocmVmICE9PSBudWxsICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuXHRcdFx0XHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGRlc3RpbmF0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIixcblx0XHRcdFx0XHRcdGJsb2NrOiBibG9ja1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2FjY29yZGlvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCBUb1Njcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3RvX3Njcm9sbFwiO1xuaW1wb3J0IFN0cmV0Y2hUZXh0YXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL3N0cmV0Y2hfdGV4dGFyZWFcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4vY29tcG9uZW50cy90YWJcIjtcbmltcG9ydCBUZXh0Q291bnRlciBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRfY291bnRlclwiO1xuXG4obmV3IEFjY29yZGlvbigpKS5pbml0aWFsaXplKCk7XG4obmV3IE1vZGFsKCkpLmluaXRpYWxpemUoKTtcbihuZXcgVG9TY3JvbGwoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBTdHJldGNoVGV4dGFyZWEoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUYWIoKSkuaW5pdGlhbGl6ZSgpO1xuKG5ldyBUZXh0Q291bnRlcigpKS5pbml0aWFsaXplKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9