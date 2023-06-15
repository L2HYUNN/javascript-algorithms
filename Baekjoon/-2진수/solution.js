const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function getMinusBinaryNumber(number) {
  const answer = [];
  let remainder;

  while (number / -2 !== 0) {
    remainder = number % -2;

    if (remainder === -1 || remainder === 1) {
      number = Math.floor(number / -2) + 1;
      answer.push(1);
    }

    if (remainder === 0) {
      number = Math.floor(number / -2);
      answer.push(0);
    }
  }

  return answer.reverse();
}

function solution(input) {
  if (Number(input) === 0) return 0;

  return getMinusBinaryNumber(Number(input)).join("");
}

console.log(solution(input));
