const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => []);

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(N).fill(false);

  let result = 0;

  function dfs(node, depth) {
    if (depth === 4) {
      result = 1;

      return;
    }

    visited[node] = true;

    for (const next of graph[node]) {
      if (!visited[next]) {
        dfs(next, depth + 1);
      }
    }

    visited[node] = false;
  }

  for (let i = 0; i < N; i++) {
    if (result === 1) {
      break;
    }

    dfs(i, 0);
  }

  return result;
}

console.log(solution(input));
