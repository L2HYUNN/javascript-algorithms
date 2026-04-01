const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [E, S, M] = input[0].split(" ").map(Number);

  let y = E;
  while ((y - 1) % 28 + 1 !== S || (y - 1) % 19 + 1 !== M) {
    y += 15;
  }

  return y;
}

console.log(solution(input));
