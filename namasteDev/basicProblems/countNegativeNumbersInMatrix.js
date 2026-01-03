function countNegativeNumbersInMatrix(grid) {
  let count = 0;
  grid.forEach((arr) => {
    arr.forEach((value) => {
      if (value < 0) {
        count++;
      }
    });
  });
  return count;
}

console.log(
  countNegativeNumbersInMatrix([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegativeNumbersInMatrix([
    [3, 2],
    [1, 0],
  ])
);
