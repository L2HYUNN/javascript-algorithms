const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n")[0];

function solution(input) {
  const strArr = input.split(" ");
  const result = [];
  let isTag = false;

  strArr.forEach((word) => {
    const aWord = word.split("");
    const stack = [];
    const answer = [];

    aWord.forEach((w) => {
      if (w === "<") {
        isTag = true;

        while (stack.length) {
          answer.push(stack.pop());
        }
      }

      if (isTag) answer.push(w);
      else stack.push(w);

      if (w === ">") {
        isTag = false;
      }
    });

    while (stack.length) {
      answer.push(stack.pop());
    }

    result.push(answer.join(""));
  });

  return console.log(result.join(" "));
}

solution(inputData);

/**
 * 태그를 어떻게 처리할지?
 * 태그는 뒤집지 않는다.
 */
