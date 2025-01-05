const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const result = [];
  const arr = [];
  const visited = Array(N).fill(false);

  function combination(start) {
    if (arr.length === M) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < N; i++) {
      if (!visited[i]) {
        arr.push(i + 1);
        visited[i] = true;
        combination(i + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  }

  combination(0);

  return result.map((row) => row.join(" ")).join("\n");
}

console.log(solution(input));
