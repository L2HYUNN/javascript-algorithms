const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const answer = [input];
  const splitedInput = input.split("");

  for (let i = 0; i < input.length - 1; i++) {
    splitedInput.shift();
    answer.push(splitedInput.join(""));
  }

  answer.sort();

  return answer.join("\n");
}

console.log(solution(input));
