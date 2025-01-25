const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N, K] = input[0].split(" ").map(Number);
  const ractangle = input
    .slice(1)
    .map((aRactangle) => aRactangle.split(" ").map(Number));
  const map = Array.from({ length: M }, () => Array(N).fill(0));
  const visited = Array.from({ length: M }, () => Array(N).fill(0));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const result = [];

  ractangle.forEach(([x1, y1, x2, y2]) => {
    for (let row = y1; row < y2; row++) {
      for (let col = x1; col < x2; col++) {
        map[row][col] = 1;
      }
    }
  });

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && map[i][j] === 0) {
        result.push(DFS([i, j]));
      }
    }
  }

  function DFS(location) {
    let size = 1;
    visited[location[0]][location[1]] = 1;

    for (let [dx, dy] of dir) {
      const nx = location[0] + dx;
      const ny = location[1] + dy;

      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        map[nx][ny] === 0
      ) {
        size += DFS([nx, ny]);
      }
    }

    return size;
  }

  result.sort((a, b) => a - b);

  return [result.length, result.join(" ")].join("\n");
}

console.log(solution(input));
