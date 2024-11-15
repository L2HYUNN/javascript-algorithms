const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const costs = input.slice(1).map((value) => value.split(" ").map(Number));
  const DP = Array.from({ length: N }, () => new Array(3).fill(0));

  DP[0][0] = costs[0][0];
  DP[0][1] = costs[0][1];
  DP[0][2] = costs[0][2];

  for (let i = 1; i < N; i++) {
    DP[i][0] = costs[i][0] + Math.min(DP[i - 1][1], DP[i - 1][2]);
    DP[i][1] = costs[i][1] + Math.min(DP[i - 1][0], DP[i - 1][2]);
    DP[i][2] = costs[i][2] + Math.min(DP[i - 1][0], DP[i - 1][1]);
  }

  return Math.min(DP[N - 1][0], DP[N - 1][1], DP[N - 1][2]);
}

console.log(solution(input));
