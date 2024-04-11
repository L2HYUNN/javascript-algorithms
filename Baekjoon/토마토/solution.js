const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

  const box = input.map((line) => line.split(" ").map((n) => parseInt(n)));

  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const tomato = findTomato(N, M, box);

  function BFS(tomato, box) {
    const queue = [];

    queue.push(...tomato);

    let index = 0;
    while (queue.length !== index) {
      const location = queue[index];

      for (let i = 0; i < direction.length; i++) {
        const nextX = location[1] + direction[i][0];
        const nextY = location[0] + direction[i][1];

        if (nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) {
          continue;
        }

        if (box[location[0]][location[1]] && box[nextY][nextX] === 0) {
          queue.push([nextY, nextX]);
          box[nextY][nextX] = box[location[0]][location[1]] + 1;
        }
      }

      index++;
    }
  }

  BFS(tomato, box);

  const result = getResult(N, M, box) - 1;

  return result;
}

function findTomato(N, M, box) {
  let result = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

function getResult(N, M, box) {
  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        return 0;
      }

      if (box[i][j] > max) {
        max = box[i][j];
      }
    }
  }

  return max;
}

console.log(solution(input));
