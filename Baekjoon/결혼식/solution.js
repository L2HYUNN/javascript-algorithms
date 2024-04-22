const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const m = Number(input[1]);

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);

  for (let i = 2; i < m + 2; i++) {
    const [left, right] = input[i].split(" ").map(Number);

    graph[left].push(right);
    graph[right].push(left);
  }

  let depth = 0;

  BFS(graph, 1, visited, depth);

  return visited.reduce((acc, cur, idx) => {
    if (idx === 1) {
      return acc;
    }

    if (cur) {
      return acc + 1;
    }

    return acc;
  }, 0);

  function BFS(graph, start, visited, depth) {
    const queue = [];
    queue.push([start, depth]);

    while (queue.length) {
      const [v, d] = queue.shift();

      if (d < 2) {
        for (const node of graph[v]) {
          if (!visited[node]) {
            visited[node] = true;
            queue.push([node, d + 1]);
          }
        }
      }
    }
  }
}

console.log(solution(input));
