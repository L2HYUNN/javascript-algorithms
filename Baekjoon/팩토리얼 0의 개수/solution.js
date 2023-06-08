// https://byseop.com/post/@10ba744d-086b-4e8d-a82b-324977b2ac57
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function factorial(number) {
  if (number === 0) return 1;

  return BigInt(BigInt(number) * BigInt(factorial(number - 1)));
}

function solution(input) {
  const sum = factorial(+input);
  let answer = 0;

  for (let number of sum.toString().split("").reverse()) {
    if (+number !== 0) break;
    answer++;
  }

  return answer;
}

console.log(solution(input));
