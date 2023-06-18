const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = Number(input.shift());

  let n, m;
  const answer = [];

  input.forEach((value, index) => {
    const queue = [];

    if (index % 2 === 0) {
      [n, m] = value.split(" ").map(Number);
    } else {
      queue.push(...value.split(" ").map(Number));

      let targetIndex = m;
      let order = 1;

      while (true) {
        let maxImportance = Math.max(...queue);

        if (queue[0] < maxImportance) {
          queue.push(queue.shift());
          targetIndex--;
          if (targetIndex === -1) targetIndex = queue.length - 1;
        } else {
          queue.shift();
          targetIndex--;
          if (targetIndex === -1) break;
          order++;
        }
      }

      answer.push(order);
    }
  });
  return answer.join("\n");
}

console.log(solution(input));

/**
 * 6 0
 * 1 1 9 1 1 1
 *
 * 0번째 추적해야함
 * 1 9 1 1 1
 *
 * 인덱스 추적하다가 인덱스와 동일한 중요도의 넘버가 빠지면 반복문 탈출
 *
 */
