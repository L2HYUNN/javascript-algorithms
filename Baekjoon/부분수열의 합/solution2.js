const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  let result = 0;

  function backtrack(index, sum) {
    if (index >= N) {
      return;
    }

    sum += numbers[index];

    // 크기가 1 이상인 경우에만 합이 S인지 확인
    if (sum === S) {
      result++;
    }

    // 현재 원소를 포함한 상태에서 다음 원소 선택
    backtrack(index + 1, sum);

    // 현재 원소를 포함하지 않은 상태에서 다음 원소 선택
    backtrack(index + 1, sum - numbers[index]);
  }

  backtrack(0, 0);

  return result;
}

console.log(solution(input));
