const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, newScore, P] = input[0].split(" ").map(Number);
  let rank = N !== 0 ? input[1].split(" ").map(Number) : [];

  if (N === 0) {
    return 1; // 랭킹이 비어있으면 첫 번째 등수
  }

  if (rank.length === P && newScore <= rank[rank.length - 1]) {
    return -1; // 랭킹이 가득 차 있고, 새로운 점수가 최하위 점수보다 낮거나 같다면 등재 불가
  }

  // 새로운 점수가 들어갈 위치 찾기
  let position = 1;
  for (let i = 0; i < rank.length; i++) {
    if (newScore < rank[i]) {
      position++;
    } else {
      break;
    }
  }

  return position;
}

console.log(solution(input));
