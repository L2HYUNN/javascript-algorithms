const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

class Stack {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  push(val) {
    this.array.push(val);
    this.size++;
  }
  pop() {
    if (this.size === 0) return -1;
    this.size--;
    return this.array.pop();
  }
  empty() {
    return this.size === 0 ? 1 : 0;
  }
  top() {
    if (this.size === 0) return -1;
    return this.array[this.size - 1];
  }
}

function solution(inputData) {
  const stack = new Stack();
  const answer = [];

  inputData.shift();

  inputData.forEach((input) => {
    const splitedInput = input.split(" ");
    const order = splitedInput[0];
    const number = splitedInput[1];

    switch (order) {
      case "push":
        stack.push(number);
        break;
      case "pop":
        answer.push(stack.pop());
        break;
      case "size":
        answer.push(stack.size);
        break;
      case "empty":
        answer.push(stack.empty());
        break;
      case "top":
        answer.push(stack.top());
        break;
    }
  });

  console.log(answer.join("\n"));
  return;
}

solution(inputData);
