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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* let与const */

function test1() {
  if (true) {
    var _a = 10;
    var b = 1;
  }
  console.log(a); // ReferenceError: a is not defined.
  console.log(b); // 1
}

// test1();

function test2() {
  for (var _i = 0; _i < 10; _i++) {}
  console.log(i); //ReferenceError: i is not defined

  for (var j = 0; j < 10; j++) {}
  console.log(j); // 10
}

// test2();

function test3() {
  var a = [];
  // 如果使用var - =0; 那么a[6]()输出 10

  var _loop = function _loop(_i2) {
    a[_i2] = function () {
      console.log(_i2);
    };
  };

  for (var _i2 = 0; _i2 < 10; _i2++) {
    _loop(_i2);
  }
  a[6](); // 6
}

// test3();

function test4() {
  for (var _i3 = 0; _i3 < 3; _i3++) {
    var _i4 = 'abc';
    console.log(_i4);
  }
}
test4();

// ES6 的块级作用域

function test5() {
  var n = 5;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}

test5();

function f() {
  console.log('I am outside!');
}

(function () {
  if (true) {
    // 重复声明一次函数f
    var _f = function _f() {
      console.log('I am inside!');
    };
  }

  f();
})();

/***/ })
/******/ ]);