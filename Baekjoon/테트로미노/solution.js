const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const board = Array.from({ length: N }, () => new Array(M).fill(0));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const boardNumbers = input.slice(1);

  boardNumbers.forEach((lineNumbers, i) => {
    const numbers = lineNumbers.split(" ").map(Number);
    numbers.forEach((number, j) => {
      board[i][j] = number;
    });
  });

  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let total = 0;

  function DFS(x, y, sum, depth) {
    if (depth === 4) {
      total = Math.max(total, sum);

      return;
    }

    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < N && 0 <= ny && ny < M && !visited[nx][ny]) {
        if (depth === 2) {
          visited[nx][ny] = true;
          DFS(x, y, sum + board[nx][ny], depth + 1);
          visited[nx][ny] = false;
        }

        visited[nx][ny] = true;
        DFS(nx, ny, sum + board[nx][ny], depth + 1);
        visited[nx][ny] = false;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      DFS(i, j, board[i][j], 1);
      visited[i][j] = false;
    }
  }

  return total;
}

console.log(solution(input));
