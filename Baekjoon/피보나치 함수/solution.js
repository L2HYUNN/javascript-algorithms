const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const cases = input.slice(1).map(Number);
  const maxN = Math.max(...cases);
  const dp = new Array(maxN).fill(0);

  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= maxN; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  for (const aCase of cases) {
    console.log(dp[aCase].join(" "));
  }
}

solution(input);
