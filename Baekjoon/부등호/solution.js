const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const k = Number(input[0]);
  const sign = input[1].split(" ");
  const isUsed = Array.from({ length: 10 }, () => false);

  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let maxString;
  let minString;

  const array = [];

  backtrack(0);

  function backtrack(index) {
    if (index === k + 1) {
      const string = array.join("");
      const number = Number(string);

      if (max < number) {
        max = number;
        maxString = string;
      }

      if (min > number) {
        min = number;
        minString = string;
      }

      return;
    }

    for (let i = 0; i < 10; i++) {
      if (!isUsed[i]) {
        if (
          array.length > 0 &&
          sign[array.length - 1] === "<" &&
          !(array[array.length - 1] < i)
        ) {
          continue;
        } else if (
          array.length > 0 &&
          sign[array.length - 1] === ">" &&
          !(array[array.length - 1] > i)
        ) {
          continue;
        }

        array.push(i);
        isUsed[i] = true;
        backtrack(index + 1);
        array.pop();
        isUsed[i] = false;
      }
    }
  }

  return [maxString, minString].join("\n");
}

console.log(solution(input));
