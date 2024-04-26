const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  numbers.sort((a, b) => a - b);

  return duplicatedCombination(numbers, M)
    .map((list) => list.join(" "))
    .join("\n");

  function duplicatedCombination(numbers, k) {
    const result = [];

    backtrack(0, []);

    return result;

    function backtrack(start, path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = start; i < numbers.length; i++) {
        path.push(numbers[i]);
        backtrack(i, path);
        path.pop();
      }
    }
  }
}

console.log(solution(input));
