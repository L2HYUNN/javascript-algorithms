const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const inputArray = Array.from(input);
  let answer = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === "c" && inputArray[i + 1] === "=") {
      answer++;
      i++;
    } else if (inputArray[i] === "c" && inputArray[i + 1] === "-") {
      answer++;
      i++;
    } else if (
      inputArray[i] === "d" &&
      inputArray[i + 1] === "z" &&
      inputArray[i + 2] === "="
    ) {
      answer++;
      i += 2;
    } else if (inputArray[i] === "d" && inputArray[i + 1] === "-") {
      answer++;
      i++;
    } else if (inputArray[i] === "l" && inputArray[i + 1] === "j") {
      answer++;
      i++;
    } else if (inputArray[i] === "n" && inputArray[i + 1] === "j") {
      answer++;
      i++;
    } else if (inputArray[i] === "s" && inputArray[i + 1] === "=") {
      answer++;
      i++;
    } else if (inputArray[i] === "z" && inputArray[i + 1] === "=") {
      answer++;
      i++;
    } else answer++;
  }

  return answer;
}

console.log(solution(input));
