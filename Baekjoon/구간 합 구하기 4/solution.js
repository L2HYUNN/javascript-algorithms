const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  const cases = input.slice(2).map((aCase) => aCase.split(" ").map(Number));
  const dp = new Array(N + 1).fill(0);
  dp[1] = numbers[0];

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + numbers[i - 1];
  }

  const result = [];

  for (const aCase of cases) {
    const [i, j] = aCase;

    result.push(dp[j] - dp[i] + numbers[i - 1]);
  }

  return result.join("\n");
}

console.log(solution(input));
