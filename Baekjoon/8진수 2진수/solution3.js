const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const numbers = input.split("").map(Number);

  let answer = "";

  if (numbers.length === 1 && numbers[0] === 0) return "0";

  for (let i = 0; i < numbers.length; i++) {
    let number = parseInt(numbers[i], 8).toString(2);

    while (number.length !== 3) {
      number = "0" + number;
    }

    answer += number;
  }

  while (answer[0] === "0") {
    answer = answer.slice(1);
  }

  return answer;
}

console.log(solution(input));
