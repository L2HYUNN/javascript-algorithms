// RangeError: Maximum call stack size exceeded
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function factorial(number) {
  return number ? BigInt(BigInt(number) * BigInt(factorial(number - 1))) : 1;
}

function combination(n, m) {
  return factorial(n) / (factorial(n - m) * factorial(m));
}

function solution(input) {
  const [n, m] = input.split(" ");
  return combination(+n, +m);
}

console.log(solution(input));
