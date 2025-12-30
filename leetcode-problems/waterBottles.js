function waterBottles(numBottles, numExchange) {
  let x = numBottles;
  let sum = numBottles;
  while (x > 1) {
    let q = Math.floor(x / numExchange);
    let r = Math.floor(x % numExchange);
    sum += q;
    x = q + r;
    if (x < numExchange) {
      break;
    }
  }
  return sum;
}
console.log(waterBottles(9, 3));
console.log(waterBottles(15, 4));
console.log(waterBottles(12, 4));
