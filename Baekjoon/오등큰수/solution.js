const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = +input.shift();
  const numbers = input[0].split(" ").map(Number);

  const FA = {};
  const stack = Array(length).fill(-1);
  const index = [];

  numbers.forEach((n) => {
    FA[n] = (FA[n] || 0) + 1;
  });

  numbers.forEach((n, idx) => {
    while (index.length && FA[numbers[index[index.length - 1]]] < FA[n]) {
      stack[index.pop()] = n;
    }
    index.push(idx);
  });

  return stack.join(" ");
}

console.log(solution(input));
