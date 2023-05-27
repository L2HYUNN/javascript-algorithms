const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

// https://junghyeonsu.tistory.com/218
function solution(input) {
  const array = input[0].split(" ").map(Number);
  const index = [];

  for (let i = 0; i < array.length; i++) {
    while (index.length && array[index[index.length - 1]] < array[i]) {
      array[index.pop()] = array[i];
    }
    index.push(i);
  }

  while (index.length) {
    array[index.pop()] = -1;
  }

  return array.join(" ");
}

console.log(solution(input));
