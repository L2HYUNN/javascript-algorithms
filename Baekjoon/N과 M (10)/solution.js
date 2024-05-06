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

  const strCombination = combination(numbers, M).map((el) => el.join(" "));

  return [...new Set(strCombination)].join("\n");

  function combination(numbers, k) {
    const result = [];

    backtrack(0, []);

    return result;

    function backtrack(start, path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = start; i < numbers.length; i++) {
        if (used[i]) {
          continue;
        }
        path.push(numbers[i]);
        used[i] = true;
        backtrack(i + 1, path);
        path.pop();
        used[i] = false;
      }
    }
  }
}

console.log(solution(input));
