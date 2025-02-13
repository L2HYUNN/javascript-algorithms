const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = parseInt(input[0]);
  const dp = new Array(N + 1).fill(0);
  const path = new Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    path[i] = i - 1;

    if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
      dp[i] = dp[i / 2] + 1;
      path[i] = i / 2;
    }

    if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
      dp[i] = dp[i / 3] + 1;
      path[i] = i / 3;
    }
  }

  console.log(dp[N]);

  const result = [];

  for (let i = N; i !== 0; i = path[i]) {
    result.push(i);
  }

  return result.join(" ");
}

console.log(solution(input));
