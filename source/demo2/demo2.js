// 数组的解构赋值

console.log('数组的解构赋值');
let [a, b, c] = [1, 2, 3];
console.log(a + ',' + b + ',' + c); // 1, 2, 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo + ',' + bar + ',' + baz); // 1, 2, 3

let [ , , third] = ['foo', 'bar', 'baz'];
console.log(third); // baz

let [x, , y] = [1, 2, 3];
console.log(x, y); // 1, 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1, [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d + ',' + e + ',' + f); // a, undefined, []

// 不完全解构

console.log('');
console.log('不完全解构');
let [ux, uy] = [1, 2, 3];
console.log(ux, uy); // 1 2

let [ua, [ub], ud] = [1, [2, 3], 4];
console.log(ua + ',' + ub + ',' + ud); // 1 2 4

// 对象的解构赋值
console.log('');
console.log('对象的解构赋值');
let {o_foo, o_bar} = {o_foo: 'aaa', o_bar: 'bbb'};
console.log(o_foo, o_bar); // aaa bbb

let {o_bar2, o_foo2 } = { o_foo2: "aaa", o_bar2: "bbb" };
console.log(o_foo, o_bar); // aaa bbb

let {o_baz} = { o_foo2: "aaa", o_bar2: "bbb" };
console.log(o_baz); // undefined

// 字符串的解构赋值
console.log('');
console.log('字符串的解构赋值');
const [sa, sb, sc, sd, se] = 'hello';
console.log(sa, sb, sc, sd, se); // h e l l o

let {length : len} = 'hello';
console.log(len); // 5

// 数值和布尔值的解构赋值

console.log('');
console.log('数值和布尔值的解构赋值');
let {toString: num} = 123;
console.log(num === Number.prototype.toString); // true

let {toString: str} = true;
console.log(str === Boolean.prototype.toString); // true

// 函数参数的解构赋值
console.log('');
console.log('函数参数的解构赋值');
function add([x, y]){
  return x + y;
}

console.log(add([1, 2])); // 3
