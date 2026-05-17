const str = "Watch Thapa Technical Javascript course on youtube";

function longestWordInString(str) {
  if (str.trim().length === 0) {
    return false;
  }
  let words = str.split(" ");

  return words.reduce((acc, cur) => (cur.length > acc.length ? cur : acc), "");
}

console.log(longestWordInString(str));
