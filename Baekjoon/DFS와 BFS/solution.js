const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m, v] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

  const graph = Array.from({ length: n + 1 }, () => []);

  const dfsVisited = Array.from({ length: n + 1 }, () => false);
  const bfsVisited = Array.from({ length: n + 1 }, () => false);

  const dfsResult = [];
  const bfsResult = [];

  // 인접 리스트 그래프 생성
  input.forEach((el) => {
    const [a, b] = el.split(" ").map((n) => parseInt(n));

    if (!graph[a].includes(b)) {
      graph[a].push(b);
    }

    if (!graph[b].includes(a)) {
      graph[b].push(a);
    }
  });
  // 정점 번호가 작은 것부터 방문하기 위해 정렬
  graph.forEach((ary) => ary.sort((a, b) => a - b));

  // DFS
  DFS(graph, v, dfsVisited, dfsResult);
  // BFS
  BFS(graph, v, bfsVisited, bfsResult);

  return dfsResult.join(" ") + "\n" + bfsResult.join(" ");
}

function DFS(graph, v, visited, result) {
  result.push(v);
  visited[v] = true;

  for (node of graph[v]) {
    if (!visited[node]) {
      DFS(graph, node, visited, result);
    }
  }
}

function BFS(graph, start, visited, result) {
  const queue = [];

  queue.push(start);
  result.push(start);
  visited[start] = true;

  while (queue.length) {
    const v = queue.shift();

    for (node of graph[v]) {
      if (!visited[node]) {
        queue.push(node);
        result.push(node);
        visited[node] = true;
      }
    }
  }
}

console.log(solution(input));
