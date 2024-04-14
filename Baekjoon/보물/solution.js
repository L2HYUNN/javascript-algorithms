const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let min = 0;

  for (let i = 0; i < N; i++) {
    min += A[i] * B[i];
  }

  return min;
}

console.log(solution(input));
