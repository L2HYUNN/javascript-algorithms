const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array.from({ length: N + 1 }, () => false);

  for (let i = 1; i <= M; i++) {
    const [left, right] = input[i].split(" ").map(Number);

    graph[left].push(right);
    graph[right].push(left);
  }

  let count = 0;

  for (let i = 1; i < N + 1; i++) {
    if (visited[i]) {
      continue;
    }

    DFS(graph, i, visited);
    count++;
  }

  return count;

  function DFS(graph, v, visited) {
    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        DFS(graph, graph[v][i], visited);
      }
    }
  }
}

console.log(solution(input));
