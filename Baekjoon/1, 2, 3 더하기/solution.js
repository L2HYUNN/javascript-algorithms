const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = +input.shift();
  const numbers = input.map((number) => parseInt(number));

  const answer = [];

  numbers.forEach((number) => {
    const DP = new Array(number + 1).fill(0);

    DP[1] = 1;
    DP[2] = 2;
    DP[3] = 4;

    for (let i = 4; i <= number; i++) {
      DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
    }

    answer.push(DP[number]);
  });

  return answer.join("\n");
}

console.log(solution(input));
