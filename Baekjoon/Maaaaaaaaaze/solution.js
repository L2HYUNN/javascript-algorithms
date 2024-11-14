const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function rotateRectangle(rectangle) {
  const n = rectangle.length;
  const rotatedRectangle = Array.from({ length: n }, () =>
    new Array(n).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedRectangle[j][n - 1 - i] = rectangle[i][j];
    }
  }

  return rotatedRectangle;
}

function solution(input) {
  const splitedInput = input.map((line) => line.split(" ").map(Number));
  const originalLayers = [];
  const startPoint = [0, 0, 0];
  const endPoint = [4, 4, 4];
  const directions = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  let minResult = Infinity;

  for (let i = 0; i < splitedInput.length; i += 5) {
    originalLayers.push(splitedInput.slice(i, i + 5));
  }

  function permute(arr, depth = 0) {
    if (depth === 5) {
      tryAllRotations(arr);
      return;
    }
    for (let i = depth; i < 5; i++) {
      [arr[depth], arr[i]] = [arr[i], arr[depth]];
      permute(arr, depth + 1);
      [arr[depth], arr[i]] = [arr[i], arr[depth]];
    }
  }

  function tryAllRotations(layers) {
    const rotatedLayers = Array.from({ length: 5 }, () => []);

    function dfs(depth) {
      if (depth === 5) {
        const cube = rotatedLayers.map((layer) => layer.map((row) => [...row]));
        const result = BFS(cube);
        if (result !== -1) minResult = Math.min(minResult, result);
        return;
      }
      for (let i = 0; i < 4; i++) {
        rotatedLayers[depth] = layers[depth];
        layers[depth] = rotateRectangle(layers[depth]);
        dfs(depth + 1);
      }
    }
    dfs(0);
  }

  function BFS(cube) {
    if (cube[0][0][0] === 0 || cube[4][4][4] === 0) return -1;

    const queue = [[...startPoint, 0]];
    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => Array(5).fill(false))
    );
    visited[0][0][0] = true;

    while (queue.length > 0) {
      const [curZ, curY, curX, count] = queue.shift();

      if (
        curZ === endPoint[0] &&
        curY === endPoint[1] &&
        curX === endPoint[2]
      ) {
        return count;
      }

      for (const [dz, dy, dx] of directions) {
        const newZ = curZ + dz;
        const newY = curY + dy;
        const newX = curX + dx;

        if (
          newZ >= 0 &&
          newZ < 5 &&
          newY >= 0 &&
          newY < 5 &&
          newX >= 0 &&
          newX < 5 &&
          cube[newZ][newY][newX] === 1 &&
          !visited[newZ][newY][newX]
        ) {
          visited[newZ][newY][newX] = true;
          queue.push([newZ, newY, newX, count + 1]);
        }
      }
    }
    return -1;
  }

  permute(originalLayers);
  return minResult === Infinity ? -1 : minResult;
}

console.log(solution(input));
