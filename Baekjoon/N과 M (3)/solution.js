const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  return permutation(N, M)
    .map((el) => el.join(" "))
    .reduce((acc, cur) => acc + "\n" + cur);

  function permutation(n, k) {
    const result = [];

    backtrack([]);

    return result;

    function backtrack(path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = 1; i <= n; i++) {
        path.push(i);
        backtrack(path);
        path.pop();
      }
    }
  }
}

console.log(solution(input));
