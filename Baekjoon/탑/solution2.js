const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const tops = input[1].split(" ").map(Number);
  const stack = [];
  const result = [];

  for (let i = 0; i < N; i++) {
    const current = tops[i];

    while (stack.length && tops[stack[stack.length - 1]] < current) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(0);
    } else {
      result.push(stack[stack.length - 1] + 1);
    }

    stack.push(i);
  }

  return result.join(" ");
}

console.log(solution(input));
