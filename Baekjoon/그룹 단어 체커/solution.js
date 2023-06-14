const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

function solution(input) {
  let answer = 0;

  input.forEach((string) => {
    const duplicationChecker = {};
    const stringArray = string.split("");

    for (let i = 0; i < stringArray.length; i++) {
      if (
        stringArray[i - 1] !== stringArray[i] &&
        duplicationChecker[stringArray[i]]
      )
        break;

      duplicationChecker[stringArray[i]] = true;

      if (i === stringArray.length - 1) answer++;
    }
  });

  return answer;
}

console.log(solution(input));
