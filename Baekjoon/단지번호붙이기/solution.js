const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const map = input.slice(1).map((line) => line.split("").map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(0));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const result = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        result.push(BFS(i, j));
      }
    }
  }

  function BFS(x, y) {
    let size = 0;
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      const [curX, curY] = queue.shift();
      size++;

      for (let i = 0; i < dir.length; i++) {
        const nx = curX + dir[i][0];
        const ny = curY + dir[i][1];

        if (
          0 <= nx &&
          nx < N &&
          0 <= ny &&
          ny < N &&
          !visited[nx][ny] &&
          map[nx][ny] === 1
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }

    return size;
  }

  result.sort((a, b) => a - b);

  return [result.length, ...result].join("\n");
}

console.log(solution(input));
