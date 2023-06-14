const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

// 시간 초과
function createBinaryNumber(number) {
  let targetNumber = number;

  const result = [];

  while (targetNumber) {
    result.push(targetNumber % 2);
    targetNumber = Math.floor(targetNumber / 2);
  }

  result.reverse();

  while (result.length !== 3) {
    result.unshift(0);
  }

  return result;
}

function solution(input) {
  const numbers = input.split("").map(Number);

  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    answer.push(...createBinaryNumber(numbers[i]));
  }

  while (!answer[0]) {
    answer.shift();
  }

  return answer.join("");
}

console.log(solution(input));
