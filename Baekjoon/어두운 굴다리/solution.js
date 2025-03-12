const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const locations = input[2].split(" ").map(Number);

  let left = 1;
  let right = N;
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prev = 0;
    let isCovered = true;

    // 첫 번째 가로등이 비출 수 없는 범위가 있는지 확인
    if (locations[0] - mid > 0) {
      isCovered = false;
    }

    for (let i = 0; i < M; i++) {
      if (prev < locations[i] - mid) {
        isCovered = false;
        break;
      }
      prev = locations[i] + mid;
    }

    // 마지막 가로등이 N까지 도달하는지 확인
    if (prev < N) {
      isCovered = false;
    }

    if (isCovered) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(input));
