const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().split("\n")[0];

function solution(input) {
  const splitedInput = input.split("");
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const answer = [];

  for (let i = 0; i < splitedInput.length; i++) {
    if (splitedInput[i] === " " || !isNaN(+splitedInput[i])) {
      answer.push(splitedInput[i]);
      continue;
    }

    const index = alphabets.indexOf(splitedInput[i].toLowerCase());
    const hashedIndex = (index + 13) % 26;

    if (splitedInput[i] === splitedInput[i].toUpperCase()) {
      answer.push(alphabets[hashedIndex].toUpperCase());
      continue;
    }

    answer.push(alphabets[hashedIndex]);
  }

  return answer.join("");
}

console.log(solution(input));
