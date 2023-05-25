const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

class Deque {
  constructor() {
    this.array = [];
  }
  pushFront(val) {
    this.array.unshift(val);
  }
  pushBack(val) {
    this.array.push(val);
  }
  popFront() {
    if (!this.array.length) return -1;
    return this.array.shift();
  }
  popBack() {
    if (!this.array.length) return -1;
    return this.array.pop();
  }
  size() {
    return this.array.length;
  }
  empty() {
    return this.array.length ? 0 : 1;
  }
  front() {
    if (!this.array.length) return -1;
    return this.array[0];
  }
  back() {
    if (!this.array.length) return -1;
    return this.array[this.array.length - 1];
  }
}

inputData.shift();

function solution(input) {
  const answer = [];
  const deque = new Deque();

  input.forEach((i) => {
    const order = i.split(" ")[0];
    const number = i.split(" ")[1];

    switch (order) {
      case "push_front":
        deque.pushFront(number);
        break;
      case "push_back":
        deque.pushBack(number);
        break;
      case "pop_front":
        answer.push(deque.popFront());
        break;
      case "pop_back":
        answer.push(deque.popBack());
        break;
      case "size":
        answer.push(deque.size());
        break;
      case "empty":
        answer.push(deque.empty());
        break;
      case "front":
        answer.push(deque.front());
        break;
      case "back":
        answer.push(deque.back());
        break;
      default:
        break;
    }
  });

  return console.log(answer.join("\n"));
}

solution(inputData);
