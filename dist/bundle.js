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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_style_scss__);


// page state

const views = ["About", "Portfolio", "Blog"];
let currentView = "About";

// html elements

let viewSurfaceTxt = document.getElementById('currentView');
let leftArrow = document.getElementsByClassName('arrow__left')[0];
let rightArrow = document.getElementsByClassName('arrow__right')[0];
let contentLayers = document.getElementsByClassName('layer__content');
let globalHeader = document.getElementsByClassName('nav__global')[0];
let globalNavItems = globalHeader.getElementsByClassName('nav-item');

// event listeners

leftArrow.addEventListener('click', changeView);
rightArrow.addEventListener('click', changeView);

for(let navIndex = 0; navIndex < globalNavItems.length; navIndex++){
    globalNavItems[navIndex].addEventListener('click', changeView);
};


// side-effect functions

function selectCurrentView() {
    let hiddenLayers = document.getElementsByClassName('layer--hidden');
    let bioLayer = document.getElementsByClassName('layer__bio')[0];
    let portfolioLayer = document.getElementsByClassName('layer__portfolio')[0];
    // remove nav-item--selected from all nav items
    for(let i = 0; i < globalNavItems.length; i++){
        globalNavItems[i].classList.remove('nav-item--selected');
    }
    if (getCurrentView().currentViewIndex === 0){
        // remove hidden: all
        if (hiddenLayers.length) {
            for(let i = 0; i < hiddenLayers.length; i++){
                hiddenLayers[i].classList.remove('layer--hidden');
            }
        }
        // add selectedView to bio nav item
        globalNavItems[0].classList.add('nav-item--selected');
    } else if (getCurrentView().currentViewIndex === 1) {
        // remove hidden: portfolio - hide bio
        if (!bioLayer.classList.contains('layer--hidden')){
            bioLayer.classList.add('layer--hidden');
        }
        if (portfolioLayer.classList.contains('layer--hidden')){
            portfolioLayer.classList.remove('layer--hidden');
        }
        // add selectedView to portfolio nav item
        globalNavItems[1].classList.add('nav-item--selected');
    } else if (getCurrentView().currentViewIndex === 2) {
        // hide portfolio - remove hidden: bio
        if (bioLayer.classList.contains('layer--hidden')){
            bioLayer.classList.remove('layer--hidden');
        }
        if (!portfolioLayer.classList.contains('layer--hidden')){
            portfolioLayer.classList.add('layer--hidden');
        }
        // add selectedView to blog nav item
        globalNavItems[2].classList.add('nav-item--selected');
    }
    
}

function surfaceView() {
    selectCurrentView();
    viewSurfaceTxt.innerText = getCurrentView().currentView;
}

// ui var consumption

function getCurrentView (){
    return {currentView, currentViewIndex: views.indexOf(currentView)};
}

function changeView (event){
    if(event.target.classList.contains('arrow')){
        if (event.target === leftArrow){
            if(getCurrentView().currentViewIndex === 0){
                currentView = views[2];
            } else {
                currentView = views[getCurrentView().currentViewIndex - 1];
            }
        }
        if (event.target === rightArrow){
            if(getCurrentView().currentViewIndex === 2){
                currentView = views[0];
            } else {
                currentView = views[getCurrentView().currentViewIndex + 1];
            }
        }
    }
    else if (event.target.classList.contains('nav-item')){
        currentView = event.target.innerText;
    }
    surfaceView();
}

// manual run

//surfaceView();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);