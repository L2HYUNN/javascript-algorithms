const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [totalFloor, curFloor, targetFloor, Up, Down] = input[0]
    .split(" ")
    .map(Number);

  const visited = Array(totalFloor + 1).fill(false);

  return BFS();

  function BFS() {
    if (curFloor === targetFloor) {
      return 0;
    }

    const queue = [];
    queue.push([curFloor, 0]);
    visited[curFloor] = true;

    while (queue.length) {
      const [currentFloor, count] = queue.shift();

      if (currentFloor === targetFloor) {
        return count;
      }

      const upFloor = currentFloor + Up;

      if (upFloor <= totalFloor && !visited[upFloor]) {
        queue.push([upFloor, count + 1]);
        visited[upFloor] = true;
      }

      const downFloor = currentFloor - Down;

      if (downFloor > 0 && !visited[downFloor]) {
        queue.push([downFloor, count + 1]);
        visited[downFloor] = true;
      }
    }

    return "use the stairs";
  }
}

console.log(solution(input));
