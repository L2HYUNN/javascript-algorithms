const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const P = input[1].split(" ").map(Number);

  P.sort((a, b) => a - b);

  const accumulate = [];

  accumulate.push(P[0]);

  P.reduce((acc, cur) => {
    accumulate.push(acc + cur);
    return acc + cur;
  });

  return accumulate.reduce((acc, cur) => acc + cur);
}

console.log(solution(input));
