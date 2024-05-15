const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  const maze = input.slice(1).map((row) => row.split(""));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let jihun = [];
  let fire = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (maze[i][j] === "J") jihun.push([i, j]);
      if (maze[i][j] === "F") fire.push([i, j]);
    }
  }

  return BFS();

  function BFS() {
    let time = 0;

    while (jihun.length) {
      time++;

      const fireQueue = [];

      for (let [x, y] of fire) {
        for (let i = 0; i < 4; i++) {
          const nx = x + direction[i][0];
          const ny = y + direction[i][1];

          if (!isIn(nx, ny)) {
            continue;
          }

          if (maze[nx][ny] === "." || maze[nx][ny] === "J") {
            maze[nx][ny] = "F";
            fireQueue.push([nx, ny]);
          }
        }
      }

      fire = [...fireQueue];

      const jihunQueue = [];

      for (let [x, y] of jihun) {
        for (let i = 0; i < 4; i++) {
          const nx = x + direction[i][0];
          const ny = y + direction[i][1];

          if (!isIn(nx, ny)) {
            return time;
          }

          if (maze[nx][ny] === ".") {
            maze[nx][ny] = "J";
            jihunQueue.push([nx, ny]);
          }
        }
      }

      jihun = [...jihunQueue];
    }

    return "IMPOSSIBLE";
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < R && 0 <= ny && ny < C;
  }
}

console.log(solution(input));
