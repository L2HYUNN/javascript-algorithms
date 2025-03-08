const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const matrix = input.slice(1).map((row) => row.split(" ").map(Number));

  const isUsed = new Array(N).fill(false);
  const cases = [];
  const ary = [];
  let minCost = Number.MAX_SAFE_INTEGER;

  backtrack();

  for (const aCase of cases) {
    const cost = travel(aCase);
    if (cost > 0) {
      minCost = Math.min(minCost, cost);
    }
  }

  function backtrack() {
    if (ary.length === N) {
      cases.push([...ary]); // 모든 도시를 방문한 경우 저장
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
  }

  function travel(aCase) {
    let sum = 0;

    for (let i = 0; i < N - 1; i++) {
      const start = aCase[i];
      const destination = aCase[i + 1];

      if (matrix[start][destination] === 0) {
        return 0; // 이동 불가능한 경우 즉시 종료
      }
      sum += matrix[start][destination];
    }

    // 마지막 도시에서 출발 도시로 돌아오는 비용 추가
    const lastCity = aCase[N - 1];
    const startCity = aCase[0];

    if (matrix[lastCity][startCity] === 0) {
      return 0;
    }
    sum += matrix[lastCity][startCity];

    return sum;
  }

  return minCost;
}

console.log(solution(input));
