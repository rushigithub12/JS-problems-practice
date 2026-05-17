//sort array without using sort()

function sortArray(arr) {
  let result = arr;

  for (let i = 0; i < result.length - 1; i++) {
    let mindIndex = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[mindIndex]) {
        mindIndex = j;
      }
      [result[i], result[mindIndex]] = [result[mindIndex], result[i]];
    }

    return {result, arr};
  }
}
console.log(sortArray([3, 1, 4, 2]));
