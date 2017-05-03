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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 数组的解构赋值

console.log('数组的解构赋值');
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

console.log('');
console.log('不完全解构');
var _ref4 = [1, 2, 3],
    ux = _ref4[0],
    uy = _ref4[1];

console.log(ux, uy); // 1 2

var ua = 1,
    _ref5 = [2, 3],
    ub = _ref5[0],
    ud = 4;

console.log(ua + ',' + ub + ',' + ud); // 1 2 4

// 对象的解构赋值
console.log('');
console.log('对象的解构赋值');
var _o_foo$o_bar = { o_foo: 'aaa', o_bar: 'bbb' },
    o_foo = _o_foo$o_bar.o_foo,
    o_bar = _o_foo$o_bar.o_bar;

console.log(o_foo, o_bar); // aaa bbb

var _o_foo2$o_bar = { o_foo2: "aaa", o_bar2: "bbb" },
    o_bar2 = _o_foo2$o_bar.o_bar2,
    o_foo2 = _o_foo2$o_bar.o_foo2;

console.log(o_foo, o_bar); // aaa bbb

var _o_foo2$o_bar2 = { o_foo2: "aaa", o_bar2: "bbb" },
    o_baz = _o_foo2$o_bar2.o_baz;

console.log(o_baz); // undefined

// 字符串的解构赋值
console.log('');
console.log('字符串的解构赋值');

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    sa = _hello2[0],
    sb = _hello2[1],
    sc = _hello2[2],
    sd = _hello2[3],
    se = _hello2[4];

console.log(sa, sb, sc, sd, se); // h e l l o

var _hello3 = 'hello',
    len = _hello3.length;

console.log(len); // 5

// 数值和布尔值的解构赋值

console.log('');
console.log('数值和布尔值的解构赋值');
var _ = 123,
    num = _.toString;

console.log(num === Number.prototype.toString); // true

var _true = true,
    str = _true.toString;

console.log(str === Boolean.prototype.toString); // true

// 函数参数的解构赋值
console.log('');
console.log('函数参数的解构赋值');
function add(_ref6) {
  var _ref7 = _slicedToArray(_ref6, 2),
      x = _ref7[0],
      y = _ref7[1];

  return x + y;
}

console.log(add([1, 2])); // 3

/***/ })
/******/ ]);