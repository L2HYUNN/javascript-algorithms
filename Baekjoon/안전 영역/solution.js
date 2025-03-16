const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const map = input.slice(1).map((row) => row.split(" ").map(Number));
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const max = findMax(map);
  const localResult = [];

  for (let i = 0; i < max; i++) {
    const localMap = Array.from({ length: N }, () => Array(N).fill(0));
    const visited = Array.from({ length: N }, () => Array(N).fill(0));

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (map[x][y] <= i) {
          localMap[x][y] = 1;
        }
      }
    }

    let localMax = 0;

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (!visited[x][y] && !localMap[x][y]) {
          bfs([x, y], visited, localMap);
          localMax++;
        }
      }
    }

    localResult.push(localMax);
  }

  return Math.max(...localResult);

  function bfs(point, visited, localMap) {
    const [x, y] = point;
    const queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = cur[0] + dir[i][0];
        const nextY = cur[1] + dir[i][1];

        if (
          0 <= nextX &&
          nextX < N &&
          0 <= nextY &&
          nextY < N &&
          !visited[nextX][nextY] &&
          !localMap[nextX][nextY]
        ) {
          queue.push([nextX, nextY]);
          visited[nextX][nextY] = 1;
        }
      }
    }
  }

  function findMax(map) {
    let max = 0;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (max < map[i][j]) {
          max = map[i][j];
        }
      }
    }

    return max;
  }
}

console.log(solution(input));
