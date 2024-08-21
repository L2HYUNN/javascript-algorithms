const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = +input[0];
  const cases = [];
  let one = [];

  for (let i = 1; i <= N * 3; i++) {
    one.push(input[i]);

    if (i !== 1 && i % 3 === 0) {
      cases.push(one);
      one = [];
    }
  }

  const direction = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const result = cases.map((one) => {
    const [L, current, target] = one;
    const visited = Array.from({ length: +L }, () => Array(+L).fill(0));

    const result = BFS(+L, current, target, visited);

    return result;
  });

  function BFS(L, current, target, visited) {
    const queue = [];
    const [targetX, targetY] = target.split(" ").map((str) => +str);
    const [x, y] = current.split(" ").map((str) => +str);

    queue.push([x, y, 0]);

    let index = 0;
    while (queue.length > index) {
      const [x, y, count] = queue[index++];

      if (visited[y][x] === 1) {
        continue;
      }

      if (x === targetX && y === targetY) {
        return count;
      }

      visited[y][x] = 1;

      for (let i = 0; i < 8; i++) {
        const nx = x + direction[i][0];
        const ny = y + direction[i][1];

        if (0 <= nx && nx < L && 0 <= ny && ny < L) {
          if (visited[ny][nx] === 0) {
            queue.push([nx, ny, count + 1]);
          }
        }
      }
    }
  }

  return result.join("\n");
}

console.log(solution(input));
