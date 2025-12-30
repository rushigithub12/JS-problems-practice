// function powerOfTwo(n){
//     if(n<=0) return false;
//     if(n==1) return true;
//     let count = 0;
//     let x = n;
//     while(x > 1){
//         x = Math.floor(x / 2);
//         count++;
//     }
//     return Math.pow(2, count) === n;
// }

function powerOfTwo(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }
  return n === 1;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));
