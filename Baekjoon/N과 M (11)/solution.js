const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  numbers.sort((a, b) => a - b);

  return [
    ...new Set(
      duplicatedPermutation(numbers, M).map((items) => items.join(" "))
    ),
  ].join("\n");

  function duplicatedPermutation(numbers, k) {
    const result = [];

    backtrack([]);

    return result;

    function backtrack(path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = 0; i < numbers.length; i++) {
        path.push(numbers[i]);
        backtrack(path);
        path.pop();
      }
    }
  }
}

console.log(solution(input));
