const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  const used = Array.from({ length: N }, () => false);

  numbers.sort((a, b) => a - b);

  const strPermutation = permutation(numbers, M).map((line) => line.join(" "));

  return [...new Set(strPermutation)].join("\n");

  function permutation(numbers, k) {
    const result = [];

    backtrack([]);

    return result;

    function backtrack(path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = 0; i < N; i++) {
        if (used[i]) {
          continue;
        }
        path.push(numbers[i]);
        used[i] = true;
        backtrack(path);
        path.pop();
        used[i] = false;
      }
    }
  }
}

console.log(solution(input));
