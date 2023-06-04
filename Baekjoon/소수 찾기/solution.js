const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(input) {
  let answer = 0;

  input[0]
    .split(" ")
    .map(Number)
    .forEach((number) => {
      if (isPrime(number)) answer++;
    });

  return answer;
}

console.log(solution(input));
