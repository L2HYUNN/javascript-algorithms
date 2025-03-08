const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const matrix = input.slice(1).map((row) => row.split(" ").map(Number));

  const isUsed = new Array(N).fill(false);

  const ary = [];
  const costs = [];

  backtrack();

  return Math.min(...costs);

  function backtrack() {
    if (ary.length === N) {
      costs.push(travel(ary));

      return;
    }

    for (let i = 0; i < N; i++) {
      if (!isUsed[i]) {
        ary.push(i);
        isUsed[i] = true;
        backtrack();
        ary.pop();
        isUsed[i] = false;
      }
    }

    return;
  }

  function travel(aCase) {
    const startCity = aCase[0];
    const lastCity = aCase[N - 1];

    if (matrix[lastCity][startCity] === 0) {
      return Number.MAX_SAFE_INTEGER;
    }

    let sum = 0;

    for (let i = 0; i < N - 1; i++) {
      const start = aCase[i];
      const destination = aCase[i + 1];

      if (matrix[start][destination] === 0) {
        return Number.MAX_SAFE_INTEGER;
      }

      sum += matrix[start][destination];
    }

    sum += matrix[lastCity][startCity];

    return sum;
  }
}

console.log(solution(input));
