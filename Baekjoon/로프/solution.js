const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const ropes = [];

  for (let i = 1; i <= N; i++) {
    ropes.push(Number(input[i]));
  }

  ropes.sort((a, b) => b - a);

  const list = [];

  for (let i = 0; i < N; i++) {
    list.push(ropes[i] * (i + 1));
  }

  return Math.max(...list);
}

console.log(solution(input));
