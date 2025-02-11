const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const [prevPerson, nextPerson] = input[1].split(" ").map(Number);
  const relations = input.slice(3).map((i) => i.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);

  for (const [parent, child] of relations) {
    graph[parent].push(child);
    graph[child].push(parent);
  }

  const result = bfs(prevPerson, nextPerson);

  return result;

  function bfs(start, end) {
    const queue = [[start, 0]];
    visited[start] = true;

    while (queue.length > 0) {
      const [relation, relationNumber] = queue.shift();

      if (relation === end) {
        return relationNumber;
      }

      for (const neighbor of graph[relation]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push([neighbor, relationNumber + 1]);
        }
      }
    }

    return -1;
  }
}

console.log(solution(input));
