const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n")[0];

function solution(input) {
  const N = +input.split(" ")[0];
  const K = +input.split(" ")[1];

  const answer = [];
  const queue = Array(N)
    .fill(0)
    .map((_, idx) => idx + 1);

  let count = 1;
  while (queue.length) {
    const shiftItem = queue.shift();
    if (count % K === 0) {
      answer.push(shiftItem);
    } else {
      queue.push(shiftItem);
    }
    count++;
  }

  return console.log(`<${answer.join(", ")}>`);
}

solution(inputData);
