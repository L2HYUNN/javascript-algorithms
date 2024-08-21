const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N, H] = input[0].split(" ").map((str) => +str);
  const box = input.slice(1).map((str) => str.split(" ").map((str) => +str));
  const totalBox = Array.from({ length: H }, () => box);
  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dz = [0, 0, 0, 0, -1, 1];
  const queue = [];

  let unripeTomato = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (totalBox[i][j][k] === 0) {
          unripeTomato++;
        }

        if (totalBox[i][j][k] === 1) {
          queue.push([i, j, k, 0]);
        }
      }
    }
  }

  let idx = 0;
  let result = 0;
  while (queue.length > idx) {
    const [z, x, y, day] = queue[idx++];

    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (
        0 <= nz &&
        nz < H &&
        0 <= ny &&
        ny < M &&
        0 <= nx &&
        nx < N &&
        totalBox[nz][nx][ny]
      ) {
        totalBox[nz][nx][ny] = 1;
        queue.push([nz, nx, ny, day + 1]);
        unripeTomato--;
      }
    }
    result = day;
  }

  return unripeTomato ? -1 : result;
}

console.log(solution(input));
