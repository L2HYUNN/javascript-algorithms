const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const stack = [];
  const answer = [];
  const inputArray = input.split("");

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= "A" && inputArray[i] <= "Z") {
      answer.push(inputArray[i]);
    } else if (inputArray[i] === "(") {
      stack.push(inputArray[i]);
    } else if (inputArray[i] === "*" || inputArray[i] === "/") {
      while (
        stack.length > 0 &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      ) {
        answer.push(stack.pop());
      }
      stack.push(inputArray[i]);
    } else if (inputArray[i] === "+" || inputArray[i] === "-") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        answer.push(stack.pop());
      }
      stack.push(inputArray[i]);
    } else if (inputArray[i] === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        answer.push(stack.pop());
      }
      stack.pop();
    }
  }

  while (stack.length > 0) {
    answer.push(stack.pop());
  }

  return answer.join("");
}

console.log(solution(input));
