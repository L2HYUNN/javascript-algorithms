const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

// 시간 초과
function solution(input) {
  const array = input[0].split(" ").map(Number);
  const answer = [];

  for (let i = 0; i < array.length - 1; i++) {
    let temp = -1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[j];
        break;
      }
    }
    answer.push(temp);
  }

  answer.push(-1);

  return answer.join(" ");
}

console.log(solution(input));
