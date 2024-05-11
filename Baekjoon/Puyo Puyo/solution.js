const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let map = input.map((row) => row.split(""));
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let isBomb = true;
  let count = 0;

  while (isBomb) {
    const newMap = bombPuyo(map, direction);

    if (isSameMap(map, newMap)) {
      break;
    }

    map = newMap;
  }

  return count;

  function bombPuyo(map, direction) {
    const droppedPuyoMap = getDroppedPuyoMap(map);

    const row = droppedPuyoMap.length;
    const column = droppedPuyoMap[0].length;

    const visited = makeVisited(droppedPuyoMap);
    let isBomb = false;

    for (let r = row - 1; r > 0; r--) {
      if (isEmptyLine(droppedPuyoMap[r])) {
        break;
      }

      for (let c = 0; c < column; c++) {
        if (droppedPuyoMap[r][c] !== "." && !visited[r][c]) {
          const positions = [];

          findPuyoStreamDFS(
            droppedPuyoMap,
            visited,
            [r, c],
            direction,
            positions
          );

          if (positions.length >= 4) {
            removePuyoStream(droppedPuyoMap, positions);
            isBomb = true;
          }
        }
      }
    }

    if (isBomb) {
      count++;
    }

    return droppedPuyoMap;
  }
}

function isSameMap(map, otherMap) {
  const row = map.length;
  const column = map[0].length;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (map[r][c] !== otherMap[r][c]) {
        return false;
      }
    }
  }

  return true;
}

function removePuyoStream(map, positions) {
  positions.forEach(([row, column]) => {
    map[row][column] = ".";
  });
}

function findPuyoStreamDFS(
  map,
  visited,
  currentPosition,
  direction,
  positions
) {
  const row = map.length;
  const column = map[0].length;

  const [currentRow, currentColumn] = currentPosition;
  const currentColor = map[currentRow][currentColumn];

  visited[currentRow][currentColumn] = true;
  positions.push(currentPosition);

  if (currentColor === ".") {
    return;
  }

  for (let i = 0; i < direction.length; i++) {
    const [nextRow, nextColumn] = [
      currentRow + direction[i][0],
      currentColumn + direction[i][1],
    ];

    if (
      nextRow < 0 ||
      nextRow >= row ||
      nextColumn < 0 ||
      nextColumn >= column
    ) {
      continue;
    }

    const nextColor = map[nextRow][nextColumn];

    if (nextColor === currentColor && !visited[nextRow][nextColumn]) {
      findPuyoStreamDFS(
        map,
        visited,
        [nextRow, nextColumn],
        direction,
        positions
      );
    }
  }
}

function makeVisited(map) {
  const row = map.length;
  const column = map[0].length;

  return (result = Array.from({ length: row }, () =>
    new Array(column).fill(false)
  ));
}

function isEmptyLine(line) {
  return line.every((block) => block === ".");
}

function getDroppedPuyoMap(map) {
  const droppedMap = dropPuyo(switchRowAndColumn(map));

  return switchRowAndColumn(droppedMap);
}

function dropPuyo(map) {
  const row = map.length;
  const column = map[0].length;

  const result = [];

  for (let r = 0; r < row; r++) {
    const line = [];

    for (let c = column - 1; c > 0; c--) {
      if (map[r][c] !== ".") {
        line.push(map[r][c]);
      }
    }

    while (line.length < column) {
      line.push(".");
    }

    result.push(line.reverse());
  }

  return result;
}

function switchRowAndColumn(map) {
  const row = map.length;
  const column = map[0].length;

  const result = Array.from({ length: column }, () => new Array(row));

  for (let c = 0; c < column; c++) {
    for (let r = 0; r < row; r++) {
      result[c][r] = map[r][c];
    }
  }

  return result;
}

console.log(solution(input));
