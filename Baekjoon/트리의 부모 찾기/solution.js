const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const relations = input.slice(1).map((i) => i.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);

  relations.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const parents = Array(N + 1).fill(0);
  parents[1] = -1;

  bfs();

  function bfs() {
    const queue = [1];

    while (queue.length) {
      const current = queue.shift();

      for (const next of graph[current]) {
        if (parents[next] === 0) {
          parents[next] = current;
          queue.push(next);
        }
      }
    }
  }

  return parents.slice(2).join("\n");
}

console.log(solution(input));
