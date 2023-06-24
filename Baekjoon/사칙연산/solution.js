const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const [A, B] = input.split(" ").map(Number);
  const answer = [A + B, A - B, A * B, Math.floor(A / B), A % B];
  return answer.join("\n");
}

console.log(solution(input));
