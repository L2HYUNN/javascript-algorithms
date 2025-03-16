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

  const maxHeight = Math.max(...map.flat()); // 배열의 최대값 찾기
  let result = 1; // 최소 안전 영역 1개 이상

  for (let h = 0; h <= maxHeight; h++) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let localMax = 0;

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (!visited[x][y] && map[x][y] > h) {
          bfs(x, y, visited, h);
          localMax++;
        }
      }
    }

    result = Math.max(result, localMax);
  }

  return result;

  function bfs(x, y, visited, height) {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = curX + dir[i][0];
        const nextY = curY + dir[i][1];

        if (
          nextX >= 0 &&
          nextX < N &&
          nextY >= 0 &&
          nextY < N &&
          !visited[nextX][nextY] &&
          map[nextX][nextY] > height
        ) {
          queue.push([nextX, nextY]);
          visited[nextX][nextY] = true; // 큐에 넣을 때 방문 처리
        }
      }
    }
  }
}

console.log(solution(input));
