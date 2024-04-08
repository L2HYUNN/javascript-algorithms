const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el));

  const paper = input.map((line) => line.split(" ").map((el) => parseInt(el)));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  function DFS(paper, x, y, visited, direction) {
    localArea++;
    visited[y][x] = true;

    for (const dir of direction) {
      const [dx, dy] = dir;
      const nextX = x + dx;
      const nextY = y + dy;

      if (
        0 <= nextX &&
        nextX < m &&
        0 <= nextY &&
        nextY < n &&
        paper[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        DFS(paper, nextX, nextY, visited, direction);
      }
    }
  }

  let painting = 0;
  let maxArea = 0;
  let localArea = 0;

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (paper[i][j] && !visited[i][j]) {
        localArea = 0;
        DFS(paper, j, i, visited, direction);
        maxArea = Math.max(maxArea, localArea);
        painting++;
      }
    }
  }

  return painting + "\n" + maxArea;
}

console.log(solution(input));
