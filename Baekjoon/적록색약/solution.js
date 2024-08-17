const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = +input[0];
  const grid = input.slice(1).map((row) => row.split(""));
  let visited = Array.from({ length: N }, () => Array(N).fill(0));
  const colors = ["R", "G", "B"];
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const locations = colors.map((color) => findColorLocations(grid, color));
  const result = [0, 0];

  locations.forEach((location, index) => {
    for (const colorLocation of location) {
      if (visited[colorLocation[1]][colorLocation[0]] === 1) {
        continue;
      }

      DFS(visited, grid, colorLocation, colors[index]);
      result[0]++;
    }
  });

  visited = Array.from({ length: N }, () => Array(N).fill(0));

  const RG = locations[0].concat(locations[1]);
  const B = locations[2];

  const RGLocations = [RG, B];

  RGLocations.forEach((location, index) => {
    for (const colorLocation of location) {
      if (visited[colorLocation[1]][colorLocation[0]] === 1) {
        continue;
      }

      RGDFS(visited, grid, colorLocation, index);
      result[1]++;
    }
  });

  function DFS(visited, grid, location, color) {
    const [x, y] = location;
    visited[y][x] = 1;

    for (let i = 0; i < direction.length; i++) {
      const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]];

      if (0 <= nextX && nextX < N && 0 <= nextY && nextY < N) {
        if (grid[nextY][nextX] === color && visited[nextY][nextX] === 0) {
          DFS(visited, grid, [nextX, nextY], color);
        }
      }
    }
  }

  function RGDFS(visited, grid, location, index) {
    const [x, y] = location;
    visited[y][x] = 1;

    for (let i = 0; i < direction.length; i++) {
      const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]];

      if (0 <= nextX && nextX < N && 0 <= nextY && nextY < N) {
        if (index === 0) {
          if (
            (grid[nextY][nextX] === "R" || grid[nextY][nextX] === "G") &&
            visited[nextY][nextX] === 0
          ) {
            RGDFS(visited, grid, [nextX, nextY], index);
          }
        }

        if (index === 1) {
          if (grid[nextY][nextX] === "B" && visited[nextY][nextX] === 0) {
            RGDFS(visited, grid, [nextX, nextY], index);
          }
        }
      }
    }
  }

  function findColorLocations(grid, color) {
    const result = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === color) {
          result.push([j, i]);
        }
      }
    }

    return result;
  }

  return result.join("\n");
}

console.log(solution(input));
