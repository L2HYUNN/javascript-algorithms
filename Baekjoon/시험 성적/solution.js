const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function calculateExamResult(score) {
  if (score >= 90) return "A";
  if (80 <= score && score < 90) return "B";
  if (70 <= score && score < 80) return "C";
  if (60 <= score && score < 70) return "D";
  return "F";
}

function solution(input) {
  return calculateExamResult(Number(input));
}

console.log(solution(input));
