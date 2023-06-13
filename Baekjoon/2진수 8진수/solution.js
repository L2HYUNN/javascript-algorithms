const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const numbers = input.split("").map(Number);
  let answer = [];

  while (numbers.length % 3) {
    numbers.unshift(0);
  }

  let sum = 0;
  let exponent = 2;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) sum += Math.pow(2, exponent);
    exponent--;

    if (exponent === -1) {
      answer.push(sum);

      sum = 0;
      exponent = 2;
    }
  }

  return answer.join("");
}

console.log(solution(input));
