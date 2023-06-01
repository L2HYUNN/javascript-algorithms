const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const answer = new Array(26).fill(0);
input.forEach((s) => answer[alphabet.indexOf(s)]++);
console.log(answer.join(" "));
