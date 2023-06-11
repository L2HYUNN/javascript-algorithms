const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

function createGCD(a, b) {
  return b === 0 ? a : createGCD(b, a % b);
}

function solution(input) {
  const answer = [];

  input.forEach((numbers) => {
    const tempNumbers = numbers.split(" ").map(Number);

    let sum = 0;

    for (let i = 1; i < tempNumbers.length - 1; i++) {
      for (let j = i + 1; j < tempNumbers.length; j++) {
        sum += createGCD(tempNumbers[i], tempNumbers[j]);
      }
    }

    answer.push(sum);
  });
  return answer.join("\n");
}

console.log(solution(input));
