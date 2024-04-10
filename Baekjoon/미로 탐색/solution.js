const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

  const map = input.map((line) => {
    return line.split("").map((n) => parseInt(n));
  });

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  function BFS(graph, start, visited) {
    const [n, m] = start;
    const queue = [];

    visited[n][m] = true;
    queue.push(start);

    while (queue.length) {
      const [n, m] = queue.shift();

      for (let i = 0; i < direction.length; i++) {
        const [dx, dy] = direction[i];
        const nextX = m + dx;
        const nextY = n + dy;

        if (nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) {
          continue;
        }

        if (graph[nextY][nextX] && !visited[nextY][nextX]) {
          queue.push([nextY, nextX]);
          visited[n][m] = true;
          graph[nextY][nextX] = graph[n][m] + 1;
        }
      }
    }
  }

  BFS(map, [0, 0], visited);

  return map[N - 1][M - 1];
}

console.log(solution(input));
