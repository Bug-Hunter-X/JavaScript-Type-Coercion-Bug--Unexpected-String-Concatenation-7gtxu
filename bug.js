function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  return foo(x, y);
}

console.log(bar()); //30

function bar2() {
  let x = '10';
  let y = '20';
  return foo(x, y);
}
console.log(bar2()); //'1020'