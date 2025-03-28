const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const distance = input[1].split(" ").map((el) => BigInt(el));
  const price = input[2].split(" ").map((el) => BigInt(el));

  let result = 0n;
  let minPrice = price[0];

  for (let i = 0; i < N - 1; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    }
    result += minPrice * distance[i];
  }

  return String(result);
}

console.log(solution(input));
