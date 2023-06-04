const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const [a, b, c] = input.split(" ").map(Number);
  const answer = [];

  answer.push((a + b) % c);
  answer.push(((a % c) + (b % c)) % c);
  answer.push((a * b) % c);
  answer.push(((a % c) * (b % c)) % c);

  return answer.join("\n");
}

console.log(solution(input));
