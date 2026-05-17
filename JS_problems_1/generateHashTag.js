const str = "my name is thapa technical";

function generateHashTag(str) {
  if (str.length > 280 || str.trim().length == 0) {
    return false;
  }

  let words = str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  return `#${words}`;
}
console.log(generateHashTag(str));
