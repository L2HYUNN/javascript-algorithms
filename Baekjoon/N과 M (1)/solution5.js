const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const isUsed = new Array(N).fill(false);
  const result = [];
  const arr = [];

  backtrack(0);

  return result.map((aResult) => aResult.join(" ")).join("\n");

  function backtrack(index) {
    if (index === M) {
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!isUsed[i]) {
        arr.push(i + 1);
        isUsed[i] = true;
        backtrack(index + 1);
        arr.pop();
        isUsed[i] = false;
      }
    }
  }
}

console.log(solution(input));
