const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const locations = input[1].split(" ").map(Number);
  const budget = Number(input[2]);

  const neededBudget = locations.reduce((acc, cur) => acc + cur, 0);

  if (neededBudget < budget) {
    return Math.max(...locations);
  }

  let left = 0;
  let right = Math.max(...locations);
  let answer = 0;

  while (left <= right) {
    let selectedBudget = Math.floor((left + right) / 2);

    let result = 0;

    for (let i = 0; i < N; i++) {
      if (locations[i] <= selectedBudget) {
        result += locations[i];
      } else {
        result += selectedBudget;
      }
    }

    if (result <= budget) {
      answer = selectedBudget;
      left = selectedBudget + 1;
    } else {
      right = selectedBudget - 1;
    }
  }

  return answer;
}

console.log(solution(input));
