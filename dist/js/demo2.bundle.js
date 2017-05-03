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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 数组的解构赋值

var a = 1,
    b = 2,
    c = 3;

console.log(a + ',' + b + ',' + c); // 1, 2, 3

var foo = 1,
    bar = 2,
    baz = 3;

console.log(foo + ',' + bar + ',' + baz); // 1, 2, 3

var _ref = ['foo', 'bar', 'baz'],
    third = _ref[2];

console.log(third); // baz

var _ref2 = [1, 2, 3],
    x = _ref2[0],
    y = _ref2[2];

console.log(x, y); // 1, 3

var head = 1,
    tail = [2, 3, 4];

console.log(head, tail); // 1, [2, 3, 4]

var _ref3 = ['a'],
    d = _ref3[0],
    e = _ref3[1],
    f = _ref3.slice(2);

console.log(d + ',' + e + ',' + f); // a, undefined, []

// 不完全解构

var _ref4 = [1, 2, 3],
    ux = _ref4[0],
    uy = _ref4[1];

console.log(ux, uy); // 1 2

var ua = 1,
    _ref5 = [2, 3],
    ub = _ref5[0],
    ud = 4;

console.log(ua + ',' + ub + ',' + ud); // 1 2 4

/***/ })
/******/ ]);