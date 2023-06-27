const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function compare(number1, number2) {
  if (number1 > number2) return ">";
  if (number1 < number2) return "<";
  return "==";
}

function solution(input) {
  const [A, B] = input.split(" ").map(Number);
  return compare(A, B);
}

console.log(solution(input));
