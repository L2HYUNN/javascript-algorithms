const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    const [k, ...numbers] = input[i].split(" ").map(Number);

    if (k === 0) {
      break;
    }

    const comb = [];
    const arr = [];

    backtrack(numbers, arr, comb, 0, 0);

    const result = comb.map((aComb) => aComb.join(" "));

    console.log(result.join("\n"));

    if (i !== input.length - 2) {
      console.log();
    }
  }

  function backtrack(numbers, arr, comb, index, start) {
    if (index === 6) {
      comb.push([...arr]);
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      arr.push(numbers[i]);
      backtrack(numbers, arr, comb, index + 1, i + 1);
      arr.pop();
    }
  }
}

solution(input);
