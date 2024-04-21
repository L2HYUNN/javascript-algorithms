const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 시간 초과
function solution(input) {
  const N = Number(input[0]);
  const tops = input[1].split(" ").map(Number);
  const result = [];

  while (tops.length) {
    const currentIndex = tops.length - 1;
    const currentTop = tops.pop();

    let flag = false;

    for (let i = currentIndex - 1; i >= 0; i--) {
      if (currentTop <= tops[i]) {
        result.push(i + 1);
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push(0);
    }
  }

  return result.reverse().join(" ");
}

console.log(solution(input));
