const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const [N, K] = input.split(" ").map(Number);
  const queue = new Array(N).fill(0).map((_, index) => index + 1);
  const answer = [];

  let count = 0;
  while (queue.length) {
    count++;
    if (count === K) {
      answer.push(queue.shift());
      count = 0;
    } else {
      queue.push(queue.shift());
    }
  }

  return `<${answer.join(", ")}>`;
}

console.log(solution(input));
