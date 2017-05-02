/* let与const */

function test1 () {
  if(true){
    let a = 10;
    var b = 1;
  }
  console.log(a); // ReferenceError: a is not defined.
  console.log(b); // 1
}

// test1();

function test2 () {
  for (let i = 0; i < 10; i++) {}
  console.log(i); //ReferenceError: i is not defined

  for (var j = 0; j < 10; j++) {}
  console.log(j); // 10
}

// test2();

function test3 () {
  var a = [];
  // 如果使用var - =0; 那么a[6]()输出 10
  for (let i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 6
}

// test3();

function test4 () {
  for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
  }
}
test4();

// ES6 的块级作用域

function test5() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

test5();

function f() { console.log('I am outside!'); }

(function () {
  if (true) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
