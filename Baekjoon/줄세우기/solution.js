const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const P = parseInt(input[0], 10);
  const cases = input.slice(1);

  return cases
    .map((item) => {
      const numbers = item.split(" ").map(Number);
      const index = numbers[0];
      const restNumbers = numbers.slice(1);

      const lines = [];
      let count = 0;

      restNumbers.forEach((current) => {
        let position = lines.length;

        // 삽입 위치를 탐색
        for (let i = 0; i < lines.length; i++) {
          if (lines[i] > current) {
            position = i;
            break;
          }
        }

        // 뒤로 물러난 횟수 추가
        count += lines.length - position;

        // 삽입
        lines.splice(position, 0, current);
      });

      return `${index} ${count}`;
    })
    .join("\n");
}

console.log(solution(input));
