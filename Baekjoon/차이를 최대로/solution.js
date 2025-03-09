const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const isUsed = new Array(N).fill(false);

  const maxNumbers = [];
  const array = [];

  backtrack();

  function backtrack() {
    if (array.length === N) {
      maxNumbers.push(calculate(array));

      return;
    }

    for (let i = 0; i < N; i++) {
      if (!isUsed[i]) {
        array.push(numbers[i]);
        isUsed[i] = true;
        backtrack();
        array.pop();
        isUsed[i] = false;
      }
    }

    return;
  }

  function calculate(array) {
    let sum = 0;

    for (let i = 2; i <= array.length; i++) {
      sum += Math.abs(array[i - 2] - array[i - 1]);
    }

    return sum;
  }

  return Math.max(...maxNumbers);
}

console.log(solution(input));
