const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M, x, y, K] = input[0].split(" ").map((str) => +str);
  const map = input.slice(1, N + 1);
  const instruction = input[input.length - 1].split(" ").map((str) => +str);

  /**
   * 주사위를 오른쪽 왼쪽으로 움직일 때
   * 변하는 값: 주사위의 좌우
   *   2             2
   * 4 1 3 ->      6 4 1
   *   5             5
   *   6             3
   *
   * const col = [2, 1, 5, 6];
   * const row = [6, 4, 1, 3];
   */

  // return input;
}

console.log(solution(input));
