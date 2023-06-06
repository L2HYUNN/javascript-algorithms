const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const [m, n] = input.split(" ").map(Number);
  const numbers = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers
    .map((value, index) => (value && index >= m ? index : 0))
    .filter((v) => v)
    .join("\n");
}

console.log(solution(input));
