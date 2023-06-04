const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function createGCD(a, b) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
}

function createLCM(a, b) {
  let lcm = 1;

  while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
      break;
    }
    lcm++;
  }

  return lcm;
}

function solution(input) {
  const [a, b] = input.split(" ").map(Number);
  const answer = [];

  answer.push(createGCD(a, b));
  answer.push(createLCM(a, b));

  return answer.join("\n");
}

console.log(solution(input));
