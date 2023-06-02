const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const inputList = input.split("");
  const alphabetList = "abcdefghijklmnopqrstuvwxyz";
  const answer = new Array(26).fill(-1);

  inputList.forEach((i, index) => {
    if (answer[alphabetList.indexOf(i)] === -1)
      answer[alphabetList.indexOf(i)] = index;
  });

  return answer.join(" ");
}

console.log(solution(input));
