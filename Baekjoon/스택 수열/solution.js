const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

function solution(input) {
  const length = input.shift();
  const stack = [];
  const nums = Array(+length)
    .fill(0)
    .map((_, idx) => idx + 1);
  const answer = [];

  for (let i = 0; i < length; i++) {
    while (input[i] >= nums[0]) {
      stack.push(nums.shift());
      answer.push("+");
    }

    if (+input[i] !== stack.pop()) return console.log("NO");

    answer.push("-");
  }

  return console.log(answer.join("\n"));
}

solution(inputData);

/**
 * [4, 3, 6, 8, 7, 5, 2, 1]
 *
 * 숫자 모임 [1, 2, 3, 4, 5, 6, 7, 8]
 * 스택 []
 * 정답 []
 *
 * 4까지 스택 채우기, 기준 숫자 4
 * [5, 6, 7, 8]
 * [1, 2, 3, 4]
 * []
 *
 * 4와 3은 기준 숫자 4보다 작기 때문에 stack에서 pop한다.
 * [5, 6, 7, 8]
 * [1, 2, 3]
 * [4]
 *
 * ..
 * [5, 6, 7, 8]
 * [1, 2]
 * [4, 3]
 *
 * 기준 숫자 6을 새로 설정하고, 6까지 스택을 채운다.
 * [7, 8]
 * [1, 2, 5, 6]
 * [4, 3]
 *
 * 6은 기준 숫자 6보다 작기 때문에 stack에서 pop한다.
 * [7, 8]
 * [1, 2, 5]
 * [4, 3, 6]
 *
 * 기준 숫자 8을 새로 설정하고 8까지 스택을 채운다
 * []
 * [1, 2, 5, 7, 8]
 * [4, 3, 6]
 *
 * 8은 기준 숫자 8보다 작기 때문에 stack에서 pop한다.
 * []
 * [1, 2, 5, 7]
 * [4, 3, 6, 8]
 *
 * [1, 2, 5, 3, 4]
 * [1, 2, 3, 4, 5]
 *
 * [2, 3, 4, 5]
 * [1]
 * [1]
 *
 * [3, 4, 5]
 * []
 * [1, 2]
 *
 * []
 * [3, 4, 5]
 * [1, 2]
 * [1, 2, 5, 4, 3]
 *
 *
 *
 *      / 1 2 3 4
 * 4 3  / 1 2
 * 4 3 /  1 2 5 6
 * 4 3 6 / 1 2 5
 * 4 3 6 / 1 2 5 7 8
 *
 * 1 2 3 4
 *
 *
 *
 */
