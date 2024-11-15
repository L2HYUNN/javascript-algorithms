const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [H, W, N, M] = input[0].split(" ").map(Number);

  const row = Math.ceil(H / (N + 1));
  const column = Math.ceil(W / (M + 1));

  return row * column;
}

console.log(solution(input));
