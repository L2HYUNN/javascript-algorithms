const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const cards = Array.from({ length: N }, (_, i) => i + 1);

  let index = 0;

  for (let i = 0; i < N - 1; i++) {
    cards.push(cards[++index]);
    index++;
  }

  return cards[cards.length - 1];
}

console.log(solution(input));
