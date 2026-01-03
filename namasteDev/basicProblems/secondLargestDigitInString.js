// function secondLargestDigitInString(s) {
//   let max = -1;
//   let smax = -1;
//   let arr = [];
//   let arr1 = [];

//   for (let i = 0; i < s.length; i++) {
//     if (Number(s[i]) === 0 || Number(s[i])) {
//       arr.push(Number(s[i]));
//     }
//   }

//   arr.forEach((value) => {
//     if (!arr1.includes(value)) {
//       arr1.push(value);
//     }
//   });

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > max) {
//       smax = max;
//       max = arr1[i];
//     } else if (smax !== max && arr1[i] > smax) {
//       smax = arr1[i];
//     }
//   }
//   return smax;
// }

function secondLargestDigitInString(s) {
  let max = -1;
  let smax = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch >= "0" && ch <= "9") {
      const digit = ch - "0";
      if (digit > max) {
        smax = max;
        max = digit;
      } else if (digit < max && digit > smax) {
        smax = digit;
      }
    }
  }
  return smax;
}

console.log(secondLargestDigitInString("dfa12321afd"));
console.log(secondLargestDigitInString("abc1111"));
console.log(secondLargestDigitInString("ck077"));
