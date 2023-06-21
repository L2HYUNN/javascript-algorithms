const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const Direction = Object.freeze({
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
});

// 시간 초과
function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const [r, c, d] = input.shift().split(" ").map(Number);
  const room = input.map((v) => v.split(" ").map(Number));
  // const room = Array.from(Array(N), () => new Array(M));

  // input.forEach((i, indexN) => {
  //   i.split(" ")
  //     .map(Number)
  //     .forEach((n, indexM) => {
  //       room[indexN][indexM] = n;
  //     });
  // });

  let robotLocation = [r, c, d];
  let stop = false;
  let answer = 0;

  while (!stop) {
    if (room[robotLocation[0]][robotLocation[1]] === 0) {
      room[robotLocation[0]][robotLocation[1]] = 2;
      answer++;
    }
    if (
      (room[robotLocation[0] + 1][robotLocation[1]] === 2 ||
        room[robotLocation[0] + 1][robotLocation[1]] === 1) &&
      (room[robotLocation[0]][robotLocation[1] + 1] === 2 ||
        room[robotLocation[0]][robotLocation[1] + 1] === 1) &&
      (room[robotLocation[0] - 1][robotLocation[1]] === 2 ||
        room[robotLocation[0] - 1][robotLocation[1]] === 1) &&
      (room[robotLocation[0]][robotLocation[1] - 1] === 2 ||
        room[robotLocation[0]][robotLocation[1] - 1] === 1)
    ) {
      if (robotLocation[2] === Direction.NORTH) {
        if (room[robotLocation[0] + 1][robotLocation[1]] === 2) {
          robotLocation[0] = robotLocation[0] + 1;
          continue;
        }
        if (room[robotLocation[0] - 1][robotLocation[1]] === 1) {
          stop = true;
          break;
        }
      }
      if (robotLocation[2] === Direction.EAST) {
        if (room[robotLocation[0]][robotLocation[1] - 1] === 2) {
          robotLocation[1] = robotLocation[1] - 1;
          continue;
        }
        if (room[robotLocation[0]][robotLocation[1] - 1] === 1) {
          stop = true;
          break;
        }
      }
      if (robotLocation[2] === Direction.SOUTH) {
        if (room[robotLocation[0] - 1][robotLocation[1]] === 2) {
          robotLocation[0] = robotLocation[0] - 1;
          continue;
        }
        if (room[robotLocation[0] + 1][robotLocation[1]] === 1) {
          stop = true;
          break;
        }
      }
      if (robotLocation[2] === Direction.WEST) {
        if (room[robotLocation[0]][robotLocation[1] + 1] === 2) {
          robotLocation[1] = robotLocation[1] + 1;
          continue;
        }
        if (room[robotLocation[0]][robotLocation[1] + 1] === 1) {
          stop = true;
          break;
        }
      }
    } else {
      if (robotLocation[2] === Direction.NORTH) {
        robotLocation[2] = Direction.WEST;
        if (room[robotLocation[0]][robotLocation[1] - 1] === 0) {
          robotLocation[1] = robotLocation[1] - 1;
          continue;
        }
      } else if (robotLocation[2] === Direction.EAST) {
        robotLocation[2] = Direction.NORTH;
        if (room[robotLocation[0] - 1][robotLocation[1]] === 0) {
          robotLocation[0] = robotLocation[0] - 1;
          continue;
        }
      } else if (robotLocation[2] === Direction.SOUTH) {
        robotLocation[2] = Direction.EAST;
        if (room[robotLocation[0]][robotLocation[1] + 1] === 0) {
          robotLocation[1] = robotLocation[1] + 1;
          continue;
        }
      } else if (robotLocation[2] === Direction.WEST) {
        robotLocation[2] = Direction.SOUTH;
        if (room[robotLocation[0] + 1][robotLocation[1]] === 0) {
          robotLocation[0] = robotLocation[0] + 1;
          continue;
        }
      }
    }
  }

  return answer;
}

console.log(solution(input));
