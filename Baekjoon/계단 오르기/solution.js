const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const stairsNumber = Number(input[0]);
  const stairs = [];

  stairs.push(0);

  for (let i = 1; i < stairsNumber + 1; i++) {
    stairs.push(Number(input[i]));
  }

  const DP = Array.from({ length: stairsNumber + 1 }, () => 0);

  DP[1] = stairs[1];
  DP[2] = stairs[1] + stairs[2];
  DP[3] = Math.max(stairs[1] + stairs[3], stairs[2] + stairs[3]);

  for (let i = 4; i < stairsNumber + 1; i++) {
    DP[i] = Math.max(
      DP[i - 3] + stairs[i - 1] + stairs[i],
      DP[i - 2] + stairs[i]
    );
  }

  return DP[stairsNumber];
}

console.log(solution(input));
