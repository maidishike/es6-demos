// Symbol数据类型

console.log('Symbol数据类型');
let symbol = Symbol();
console.log(typeof symbol); // symbol

var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1, s2); // Symbol(foo) Symbol(bar)
console.log(s1.toString(), s2.toString()); // Symbol(foo) Symbol(bar)

// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

// 作为属性名的 Symbol

console.log('');
console.log('作为属性名的 Symbol');

var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

console.log(a[mySymbol]); // Hello!

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};
console.log(a[mySymbol]); // Hello!

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
console.log(a[mySymbol]); // Hello!


// Symbol 值作为对象属性名时，不能用点运算符
console.log('');
console.log('Symbol 值作为对象属性名时，不能用点运算符');

var mySymbol = Symbol();
var a = {};

a.mySymbol = 'Hello!';
console.log(a[mySymbol]); // undefined
console.log(a['mySymbol']); // "Hello!"
