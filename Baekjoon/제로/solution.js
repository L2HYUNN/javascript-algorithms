const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = Number(input.shift());
  const numbers = input.map(Number);
  const stack = [];

  numbers.forEach((number) => {
    number ? stack.push(number) : stack.pop(number);
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
