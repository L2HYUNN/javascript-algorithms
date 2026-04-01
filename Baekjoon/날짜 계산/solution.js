const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const numberInput = input[0].split(" ").map(Number);

  const checkEnd = (arr) => {
    return arr.every((a) => a === 1);
  };

  let result = 1;

  while (!checkEnd(numberInput)) {
    numberInput.forEach((num, idx) => {
      numberInput[idx] = num - 1;
      if (idx === 0 && numberInput[idx] === 0) {
        numberInput[idx] = 15;
      }

      if (idx === 1 && numberInput[idx] === 0) {
        numberInput[idx] = 28;
      }

      if (idx === 2 && numberInput[idx] === 0) {
        numberInput[idx] = 19;
      }
    });

    result++;
  }

  return result;
}

console.log(solution(input));

/**
 * 3 숫자 모두 0이 될때까지 1씩 뺄셈 반복
 *
 * 1씩 뺄셈을 통해 1년을 추가한다.
 *
 * 각각의 년도가 0이될때 모든 년도가 0이 아니라면 최대값으로 초기화 시킨다
 */
