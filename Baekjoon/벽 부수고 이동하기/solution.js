const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((row) => row.split("").map(Number));
  const dir = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  const wall = [[0, 0]];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) {
        wall.push([i, j]);
      }
    }
  }

  const result = [];

  for (let i = 0; i < wall.length; i++) {
    const removingWall = wall[i];
    map[removingWall[0]][removingWall[1]] = 0;

    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    result.push(bfs(0, 0, 1, visited, map));

    map[removingWall[0]][removingWall[1]] = 1;
  }

  function bfs(x, y, z, visited, map) {
    const cur = [x, y, z];
    visited[x][y] = true;

    const queue = [];
    queue.push(cur);

    while (queue.length) {
      const current = queue.shift();

      if (current[0] === N - 1 && current[1] === M - 1) {
        return current[2];
      }

      for (let i = 0; i < 4; i++) {
        const next = [current[0] + dir[i][0], current[1] + dir[i][1]];

        if (
          0 <= next[0] &&
          next[0] < N &&
          0 <= next[1] &&
          next[1] < M &&
          !visited[next[0]][next[1]] &&
          !map[next[0]][next[1]]
        ) {
          visited[next[0]][next[1]] = true;
          queue.push([next[0], next[1], current[2] + 1]);
        }
      }
    }

    return -1;
  }

  const filtered = result.filter((r) => r !== -1);

  return filtered.length > 0 ? Math.max(...filtered) : -1;
}

console.log(solution(input));
