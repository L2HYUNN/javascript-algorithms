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

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(2).fill(false))
  );

  return bfs(0, 0, 1, visited, map);

  function bfs(x, y, z, visited, map) {
    const cur = [x, y, 0, z];
    visited[x][y][0] = true;

    const queue = [];
    queue.push(cur);

    while (queue.length) {
      const current = queue.shift();

      if (current[0] === N - 1 && current[1] === M - 1) {
        return current[3];
      }

      for (let i = 0; i < 4; i++) {
        const next = [current[0] + dir[i][0], current[1] + dir[i][1]];

        if (0 <= next[0] && next[0] < N && 0 <= next[1] && next[1] < M) {
          if (
            map[next[0]][next[1]] === 0 &&
            !visited[next[0]][next[1]][current[2]]
          ) {
            visited[next[0]][next[1]][current[2]] = true;
            queue.push([next[0], next[1], current[2], current[3] + 1]);
          } else if (
            map[next[0]][next[1]] === 1 &&
            current[2] === 0 &&
            !visited[next[0]][next[1]][1]
          ) {
            visited[next[0]][next[1]][1] = true;
            queue.push([next[0], next[1], 1, current[3] + 1]);
          }
        }
      }
    }

    return -1;
  }
}

console.log(solution(input));
