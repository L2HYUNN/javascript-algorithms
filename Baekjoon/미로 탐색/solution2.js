const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nm, ...arr] = input;
const [n, m] = nm.split(" ").map((v) => +v);
const graph = arr.map((v1) => v1.split("").map((v2) => +v2));

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const bfs = (graph, sx, sy) => {
  const q = [];
  q.push([sx, sy]);
  visited[sx][sy] = true;

  while (q.length !== 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + direction[i][0];
      const ny = y + direction[i][1];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (!visited[nx][ny] && graph[nx][ny]) {
        q.push([nx, ny]);
        visited[nx][ny] = true;
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }
};

function solution(n, m, graph) {
  bfs(graph, 0, 0);
  return graph[n - 1][m - 1];
}

console.log(solution(n, m, graph));
