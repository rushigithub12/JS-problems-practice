function isNumberPalindrome(n) {
  if (n < 0) return false;
  let x = n;
  let reversed = 0;
  while (x > 0) {
    let rem = Math.floor(x % 10);
    x = Math.floor(x / 10);
    reversed = reversed * 10 + rem;
  }
  return reversed === n;
}

console.log(isNumberPalindrome(121));
console.log(isNumberPalindrome(-121));
