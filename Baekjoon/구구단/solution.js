const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function multiplier(number) {
  const result = [];

  for (let i = 1; i < 10; i++) {
    result.push(`${number} * ${i} = ${number * i}`);
  }

  return result;
}

function solution(input) {
  return multiplier(Number(input)).join("\n");
}

console.log(solution(input));
