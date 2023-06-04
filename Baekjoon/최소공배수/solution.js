const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function createGCD(a, b) {
  return b === 0 ? a : createGCD(b, a % b);
}

function createLCM(a, b) {
  return (a * b) / createGCD(a, b);
}

input.shift();

function solution(input) {
  const answer = [];

  input.forEach((i) => {
    const [a, b] = i.split(" ").map(Number);
    answer.push(createLCM(a, b));
  });

  return answer.join("\n");
}

console.log(solution(input));
