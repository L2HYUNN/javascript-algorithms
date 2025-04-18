const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, X] = input[0].split(" ").map(Number);
  const visitedNumber = input[1].split(" ").map(Number);

  let result = 0;
  let sum = [];

  const firstSum = visitedNumber.slice(0, X);
  sum.push(firstSum.reduce((acc, cur) => acc + cur, 0));

  let pointer = 0;

  for (let i = 1; i < N - X + 1; i++) {
    sum.push(sum[i - 1] - visitedNumber[pointer] + visitedNumber[pointer + X]);

    pointer++;
  }

  result = Math.max(...sum);
  count = sum.reduce((acc, cur) => {
    if (cur === result) {
      return acc + 1;
    }

    return acc;
  }, 0);

  if (result === 0) {
    return "SAD";
  }

  return [result, count].join("\n");
}

console.log(solution(input));
