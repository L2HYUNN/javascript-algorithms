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
  const direction = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  let minResult = Infinity;

  // Initialize cube layers as 5x5 matrices
  for (let i = 0; i < splitedInput.length; i += 5) {
    originalLayers.push(splitedInput.slice(i, i + 5));
  }

  // DFS to generate all layer orders
  function permuteLayers(layers, used, depth, order) {
    if (depth === 5) {
      tryAllRotations(order);
      return;
    }
    for (let i = 0; i < 5; i++) {
      if (!used[i]) {
        used[i] = true;
        order[depth] = layers[i];
        permuteLayers(layers, used, depth + 1, order);
        used[i] = false;
      }
    }
  }

  // Try all rotations for each layer order
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

  // BFS to find shortest path from (0, 0, 0) to (4, 4, 4)
  function BFS(cube) {
    if (cube[0][0][0] === 0 || cube[4][4][4] === 0) return -1;

    const queue = [[0, 0, 0, 0]]; // z, y, x, count
    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => Array(5).fill(false))
    );
    visited[0][0][0] = true;

    while (queue.length > 0) {
      const [curZ, curY, curX, count] = queue.shift();

      if (curZ === 4 && curY === 4 && curX === 4) {
        return count;
      }

      for (const [dz, dy, dx] of direction) {
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

  // Start DFS to generate all layer orders
  permuteLayers(originalLayers, Array(5).fill(false), 0, Array(5));
  return minResult === Infinity ? -1 : minResult;
}

console.log(solution(input));
