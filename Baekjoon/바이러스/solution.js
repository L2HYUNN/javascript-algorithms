const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const computerNumber = Number(input[0]);
  const computerPairNumber = Number(input[1]);

  const graph = Array.from({ length: computerNumber + 1 }, () => []);
  const visited = Array.from({ length: computerNumber + 1 }, () => false);

  for (let i = 2; i < computerPairNumber + 2; i++) {
    const [left, right] = input[i].split(" ").map(Number);

    graph[left].push(right);
    graph[right].push(left);
  }

  DFS(graph, 1, visited);

  return visited.reduce((acc, cur, idx) => {
    if (idx === 1) {
      return acc;
    }

    if (cur) {
      return acc + 1;
    }

    return acc;
  }, 0);

  function DFS(graph, v, visited) {
    for (const node of graph[v]) {
      if (visited[node] === false) {
        visited[node] = true;
        DFS(graph, node, visited);
      }
    }
  }
}

console.log(solution(input));
