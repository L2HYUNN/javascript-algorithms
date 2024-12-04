const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const lab = input.slice(1).map((row) => row.split(" ").map(Number));
  const DIRECTION = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let result = 0;

  DFS(0);

  function countSafeArea(lab) {
    const queue = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (lab[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < DIRECTION.length; i++) {
        const nx = x + DIRECTION[i][0];
        const ny = y + DIRECTION[i][1];

        if (0 <= nx && nx < N && 0 <= ny && ny < M && lab[nx][ny] === 0) {
          lab[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    return lab.flat().reduce((acc, cur) => {
      if (cur === 0) {
        return (acc += 1);
      }

      return acc;
    }, 0);
  }

  function DFS(count) {
    if (count === 3) {
      const copiedLab = lab.map((row) => [...row]);
      const safeAreaCount = countSafeArea(copiedLab);

      result = Math.max(result, safeAreaCount);
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (lab[i][j] === 0) {
          lab[i][j] = 1;
          DFS(count + 1);
          lab[i][j] = 0;
        }
      }
    }
  }

  return result;
}

console.log(solution(input));

/**
 * 빈칸에 바이러스가 모두 퍼져있다고 가정
 *
 * 기둥 3개를 빈 칸들에 위치시키면서 전체 탐색
 *
 * 기둥 3개가 전부 배치된 모든 경우의 수의 연구실을 만든다
 *
 * 여기서 안전구역의 수를 계산하고 가장 큰 경우를 반환한다.
 */
