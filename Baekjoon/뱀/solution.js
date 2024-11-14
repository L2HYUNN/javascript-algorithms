const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const K = Number(input[1]);
  const appleLocations = input.slice(2, K + 2);
  const L = Number(input[K + 2]);
  const directionChangeInfo = input.slice(K + 3).reduce((acc, cur) => {
    const info = cur.split(" ");

    return { ...acc, [Number(info[0]) + 1]: info[1] };
  }, {});
  const board = Array.from({ length: N }, () => new Array(N).fill(0));
  const direction = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // top
  ];

  appleLocations.forEach((appleLocation) => {
    const [y, x] = appleLocation
      .split(" ")
      .map((location) => Number(location) - 1);

    board[y][x] = 1;
  });

  let currentSnakeDirection = 0;
  let snakeDirection = direction[currentSnakeDirection];
  const currentPosition = [0, 0];
  const tailLocations = [[0, 0]];
  let count = 0;

  function isLocationChange(count, directionChange) {
    const directionChangeCounts = Object.keys(directionChange).map(Number);

    return directionChangeCounts.includes(count);
  }

  function selectDirection(changingDirection, currentSnakeDirection) {
    let newPosition = currentSnakeDirection;

    if (changingDirection === "L") {
      newPosition = currentSnakeDirection + 3;
    }

    if (changingDirection === "D") {
      newPosition = currentSnakeDirection + 1;
    }

    return newPosition % 4;
  }

  while (true) {
    count += 1;

    if (isLocationChange(count, directionChangeInfo)) {
      const changingDirection = directionChangeInfo[count];
      currentSnakeDirection = selectDirection(
        changingDirection,
        currentSnakeDirection
      );
      snakeDirection = direction[currentSnakeDirection];
    }

    const curX = currentPosition[1];
    const curY = currentPosition[0];

    const nextX = curX + snakeDirection[1];
    const nextY = curY + snakeDirection[0];

    if (!(0 <= nextX && nextX < N && 0 <= nextY && nextY < N)) break;

    if (board[nextY][nextX] === 2) break;

    if (board[nextY][nextX] === 0) {
      const [removedY, removedX] = tailLocations.shift();
      board[removedY][removedX] = 0;

      tailLocations.push([nextY, nextX]);
      board[nextY][nextX] = 2;
    }

    if (board[nextY][nextX] === 1) {
      tailLocations.push([nextY, nextX]);
      board[nextY][nextX] = 2;
    }

    currentPosition[1] = nextX;
    currentPosition[0] = nextY;
  }

  return count;
}

console.log(solution(input));
