const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, L] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((row) => row.split(" ").map(Number));
  let result = 0;

  function canPass(line) {
    const used = Array(N).fill(false);

    for (let i = 0; i < N - 1; i++) {
      const diff = line[i + 1] - line[i];

      if (diff === 0) continue;

      // 높이 차이가 1 이상인 경우
      if (Math.abs(diff) > 1) return false;

      // 올라가는 경사로를 놓는 경우
      if (diff === 1) {
        for (let j = 0; j < L; j++) {
          if (i - j < 0 || used[i - j] || line[i] !== line[i - j]) {
            return false;
          }
          used[i - j] = true;
        }
      }

      // 내려가는 경사로를 놓는 경우
      if (diff === -1) {
        for (let j = 1; j <= L; j++) {
          if (i + j >= N || used[i + j] || line[i + 1] !== line[i + j]) {
            return false;
          }
          used[i + j] = true;
        }
      }
    }

    return true;
  }

  // 행 확인
  for (let i = 0; i < N; i++) {
    if (canPass(map[i])) result++;
  }

  // 열 확인
  for (let i = 0; i < N; i++) {
    const column = map.map((row) => row[i]);
    if (canPass(column)) result++;
  }

  return result;
}

console.log(solution(input));
