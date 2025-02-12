const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const queries = input.slice(2).map((line) => line.split(" ").map(Number));

  // 누적 합 배열 생성
  const prefixSum = new Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
  }

  const result = [];
  for (let [i, j] of queries) {
    result.push(prefixSum[j] - prefixSum[i - 1]);
  }

  console.log(result.join("\n"));
}

solution(input);
