const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const board = input.slice(1).map((row) => [...row]);

  const maxInRow = (r) => {
    let max = 1;
    let count = 1;

    for (let c = 1; c < N; c++) {
      if (board[r][c] === board[r][c - 1]) count++;
      else count = 1;

      if (count > max) max = count;
    }

    return max;
  };

  const maxInCol = (c) => {
    let max = 1;
    let count = 1;

    for (let r = 1; r < N; r++) {
      if (board[r][c] === board[r - 1][c]) count++;
      else count = 1;

      if (count > max) max = count;
    }

    return max;
  };

  const swap = (r1, c1, r2, c2) => {
    [board[r1][c1], board[r2][c2]] = [board[r2][c2], board[r1][c1]];
  };

  let result = 1;

  // 스왑 없이 기본 최대값
  for (let i = 0; i < N; i++) {
    result = Math.max(result, maxInRow(i), maxInCol(i));
  }

  // 가로 스왑: (i,j) <-> (i,j+1)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (board[i][j] === board[i][j + 1]) continue;

      swap(i, j, i, j + 1);
      result = Math.max(result, maxInRow(i), maxInCol(j), maxInCol(j + 1));
      swap(i, j, i, j + 1);
    }
  }

  // 세로 스왑: (i,j) <-> (i+1,j)
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === board[i + 1][j]) continue;

      swap(i, j, i + 1, j);
      result = Math.max(result, maxInRow(i), maxInRow(i + 1), maxInCol(j));
      swap(i, j, i + 1, j);
    }
  }

  return result;
}

console.log(solution(input));
