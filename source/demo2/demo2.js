// 数组的解构赋值

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

let [ux, uy] = [1, 2, 3];
console.log(ux, uy); // 1 2

let [ua, [ub], ud] = [1, [2, 3], 4];
console.log(ua + ',' + ub + ',' + ud); // 1 2 4
