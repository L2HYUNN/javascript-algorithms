const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const number = Number(input[0]);
  const isUsed = new Array(number).fill(false);

  const array = [];

  backtrack();

  function backtrack() {
    if (array.length === number) {
      console.log(array.join(" "));

      return;
    }

    for (let i = 0; i < number; i++) {
      if (!isUsed[i]) {
        array.push(i + 1);
        isUsed[i] = true;
        backtrack();
        array.pop();
        isUsed[i] = false;
      }
    }
  }

  return;
}

solution(input);
