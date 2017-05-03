// 模板字符串

console.log('模板字符串');
let name = 'Bob', time = 'today';
let str = `Hello ${name}, how are you ${time}`;
console.log(str); // Hello Bob, how are you today

let x = 1, y = 2;
console.log(`${x} + ${y} = ${x + y}`); // 1 + 2 = 3
console.log(`${x} + ${y * 2} = ${x + y * 2}`); // 1 + 4 = 5

var obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`); // 3

function fn () {
  return 'Hello World';
}
console.log(`${fn()}`); // Hello World

// 变量place没有声明
console.log('');
console.log('变量place没有声明');
// var msg = `Hello, ${place}`;
// console.log(msg); // 报错 ReferenceError: place is not defined

console.log(`Hello ${'World'}`); // Hello World

let data = ['a', 'b', 'c', 'd', 'e'];
let template = `
  <ul>
    <% for(var i = 0, len = data.length; i < len; i++) { %>
      <li><%= data[i] %></li>
    <% } %>
  </ul>`;
document.getElementById('app').innerHTML =  compile(template);
