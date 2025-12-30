// function fibonacciNumber(n){
//     if(n <= 2) return 1;
//     return fibonacciNumber(n-2) + fibonacciNumber(n-1)
// }

function fibonacciNumber(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacciNumber(2));
console.log(fibonacciNumber(3));
console.log(fibonacciNumber(4));
