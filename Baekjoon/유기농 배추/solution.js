const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const T = +input[0];
  const cases = input.slice(1);

  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let casesIndex = 0;

  const { maps, visitedList, locations, conditions } = makeTestCaseMaps(cases);

  const answer = [];

  for (let i = 0; i < maps.length; i++) {
    let result = 0;
    for (let j = 0; j < locations[i].length; j++) {
      if (visitedList[i][locations[i][j][1]][locations[i][j][0]] === 1) {
        continue;
      }

      DFS(maps[i], visitedList[i], locations[i][j], conditions[i]);
      result++;
    }
    answer.push(result);
  }

  function DFS(map, visited, location, condition) {
    const [M, N] = condition;
    const [x, y] = location;

    visited[y][x] = 1;

    for (let i = 0; i < direction.length; i++) {
      const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]];

      if (0 <= nextX && nextX < M && 0 <= nextY && nextY < N) {
        if (visited[nextY][nextX] === 0 && map[nextY][nextX] === 1) {
          DFS(map, visited, [nextX, nextY], condition);
        }
      }
    }
  }

  function makeTestCaseMaps(cases) {
    const maps = [];
    const visitedList = [];
    const locations = [];
    const conditions = [];

    for (let i = 0; i < T; i++) {
      const [M, N, K] = cases[casesIndex].split(" ").map((str) => +str);

      const map = Array.from({ length: N }, () => Array(M).fill(0));
      const visited = Array.from({ length: N }, () => Array(M).fill(0));
      const location = [];

      visitedList.push(visited);

      for (let j = 0; j < K; j++) {
        const [x, y] = cases[casesIndex + j + 1].split(" ").map((str) => +str);

        location.push([x, y]);

        map[y][x] = 1;
      }

      conditions.push([M, N, K]);

      locations.push(location);

      maps.push(map);

      casesIndex += K + 1;
    }

    return { maps, visitedList, locations, conditions };
  }

  return answer.join("\n");
}

console.log(solution(input));
