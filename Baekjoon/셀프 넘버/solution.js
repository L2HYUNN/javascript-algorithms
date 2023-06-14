const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const MAX_NUMBER = 10000;

function createAddedNumber(number) {
  let answer = number;

  for (let n of number.toString()) {
    answer += Number(n);
  }

  return answer;
}

function solution(input) {
  const numbers = new Array(MAX_NUMBER).fill(1);

  for (let i = 0; i <= MAX_NUMBER; i++) {
    if (createAddedNumber(i) <= MAX_NUMBER)
      numbers[createAddedNumber(i) - 1] = 0;
  }

  const answer = numbers
    .map((value, index) => {
      if (value) return index + 1;
    })
    .filter((v) => v);

  return answer.join("\n");
}

console.log(solution(input));
