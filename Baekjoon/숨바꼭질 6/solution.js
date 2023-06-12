const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function createGCD(a, b) {
  return b === 0 ? a : createGCD(b, a % b);
}

function solution(input) {
  const [n, s] = input[0].split(" ").map(Number);

  if (n === 1) return Math.abs(s - Number(input[1]));

  const locations = input[1].split(" ").map(Number);

  let answer = createGCD(
    Math.abs(s - locations[0]),
    Math.abs(s - locations[1])
  );

  for (let i = 2; i < locations.length; i++) {
    answer = createGCD(answer, Math.abs(s - locations[i]));
  }

  return answer;
}

console.log(solution(input));
