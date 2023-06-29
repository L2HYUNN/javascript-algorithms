const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function sumOfNumber(number) {
  let result = 0;

  Array.from(Array(number)).forEach((_, index) => (result += index + 1));

  return result;
}

function solution(input) {
  const n = Number(input);
  return sumOfNumber(n);
}

console.log(solution(input));
