const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map((n) => parseInt(n));

  const arr = Array.from({ length: N }, () => 0).map((_, index) => index + 1);

  const result = permutation(arr, M).map((permutation) => {
    return permutation.join(" ");
  });

  return result.join("\n");

  function permutation(arr, k) {
    const result = [];
    backtrack([]);

    return result;

    function backtrack(path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (path.includes(arr[i])) {
          continue;
        }

        path.push(arr[i]);
        backtrack(path);
        path.pop();
      }
    }
  }
}

console.log(solution(input));
