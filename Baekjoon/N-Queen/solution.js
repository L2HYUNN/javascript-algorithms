const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = parseInt(input[0]);

  const used1 = Array.from({ length: N }, () => false);
  const used2 = Array.from({ length: 2 * N - 1 }, () => false);
  const used3 = Array.from({ length: 2 * N - 1 }, () => false);

  let count = 0;

  function backtrack(index) {
    if (index === N) {
      count++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (used1[i] || used2[i + index] || used3[index - i + N - 1]) {
        continue;
      }

      used1[i] = true;
      used2[i + index] = true;
      used3[index - i + N - 1] = true;

      backtrack(index + 1);

      used1[i] = false;
      used2[i + index] = false;
      used3[index - i + N - 1] = false;
    }
  }

  backtrack(0);

  return count;
}

console.log(solution(input));
