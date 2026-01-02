function maximumProductOfTwoElements(nums) {
  let max = -1;
  let smax = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      smax = max;
      max = nums[i];
    } else if (nums[i] > smax) {
      smax = nums[i];
    }
  }
  return (max - 1) * (smax - 1);
}
console.log(maximumProductOfTwoElements([3, 4, 5, 2]));
console.log(maximumProductOfTwoElements([1, 5, 4, 5]));
console.log(maximumProductOfTwoElements([3, 7]));
