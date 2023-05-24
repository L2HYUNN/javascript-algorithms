const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

class Queue {
  constructor() {
    this.store = [];
  }
  push(val) {
    this.store.push(val);
  }
  pop() {
    if (this.store.length === 0) return -1;
    return this.store.shift();
  }
  size() {
    return this.store.length;
  }
  empty() {
    return this.size() ? 0 : 1;
  }
  front() {
    if (this.empty()) return -1;
    return this.store[0];
  }
  back() {
    if (this.empty()) return -1;
    return this.store[this.store.length - 1];
  }
}

inputData.shift();

function solution(input) {
  const queue = new Queue();
  const answer = [];

  input.forEach((i) => {
    const order = i.split(" ")[0];
    const value = i.split(" ")[1];

    switch (order) {
      case "push":
        queue.push(value);
        break;
      case "pop":
        answer.push(queue.pop());
        break;
      case "size":
        answer.push(queue.size());
        break;
      case "empty":
        answer.push(queue.empty());
        break;
      case "front":
        answer.push(queue.front());
        break;
      case "back":
        answer.push(queue.back());
        break;
    }
  });

  return console.log(answer.join("\n"));
}

solution(inputData);
