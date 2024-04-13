const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);

  return combination(N, M)
    .map((el) => el.join(" "))
    .reduce((acc, cur) => acc + "\n" + cur);

  function combination(n, k) {
    const result = [];

    backtrack(1, []);

    return result;

    function backtrack(start, path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i, path);
        path.pop();
      }
    }
  }
}

console.log(solution(input));
