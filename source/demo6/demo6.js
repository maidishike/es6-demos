// Promise对象

console.log('基本用法');
var promise = new Promise(function(resolve, reject){
  // some codes ...
  if (true) {
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(function(value) {
    // success
}, function(error) {
  // failure
});

function timeout (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(1000).then((value) => {
  console.log(value);
});

// Promise新建后就会立即执行。

console.log('\r\nPromise新建后就会立即执行。');
let promise2 = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});
promise2.then(function() {
  console.log('Resolved');
});
console.log('Hi');
// 执行结果与顺序： Promise Hi Resolved

// 异步加载图片的例子
function loadImageAsync (url) {
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('could not load image at' + url))
    }
    image.src = url;
    console.log(image);
    document.body.appendChild(image);
  });
}
loadImageAsync('http://static.mukewang.com/static/img/common/logo.png?t=2.3')
