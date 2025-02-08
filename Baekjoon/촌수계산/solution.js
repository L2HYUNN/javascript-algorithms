const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "/test.txt");
const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const totalPeopleNumber = Number(input[0]);
  const [start, target] = input[1].split(" ").map(Number);
  const relationNumber = Number(input[2]);
  const relation = input.slice(3).map((rel) => rel.split(" ").map(Number));

  const graph = Array.from({ length: totalPeopleNumber + 1 }, () => []);

  for (const [parent, child] of relation) {
    graph[parent].push(child);
    graph[child].push(parent);
  }

  function bfs(start, target) {
    const queue = [[start, 0]];
    const visited = Array(totalPeopleNumber + 1).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
      const [current, depth] = queue.shift();

      if (current === target) {
        return depth;
      }

      for (const neighbor of graph[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, depth + 1]);
        }
      }
    }

    return -1;
  }

  return bfs(start, target);
}

console.log(solution(input));
