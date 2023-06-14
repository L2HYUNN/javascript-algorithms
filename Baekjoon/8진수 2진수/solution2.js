const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

// 시간 초과
function solution(input) {
  const numbers = input.split("").map(Number);

  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i], 8).toString(2).split("").map(Number);

    while (number.length !== 3) {
      number.unshift(0);
    }

    answer.push(...number);
  }

  while (!answer[0]) {
    answer.shift();
  }

  return answer.join("");
}

console.log(solution(input));
