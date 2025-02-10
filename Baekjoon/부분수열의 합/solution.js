const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let result = 0;
  const arr = [];

  function backtrack(index, start, end) {
    if (index === end) {
      const sum = arr.reduce((acc, cur) => acc + cur, 0);

      if (sum === S) {
        result++;
      }
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      arr.push(numbers[i]);
      backtrack(index + 1, i + 1, end);
      arr.pop();
    }
  }

  for (let i = 1; i < numbers.length + 1; i++) {
    backtrack(0, 0, i);
  }

  return result;
}

console.log(solution(input));
