const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

// https://gobae.tistory.com/23
// https://kimbangg.tistory.com/194

function solution(input) {
  const str = input.shift();
  const length = input.shift();

  const lStack = str.split("");
  const rStack = [];

  const behavior = {
    L: () => {
      if (lStack.length === 0) return;

      rStack.push(lStack.pop());
    },
    D: () => {
      if (rStack.length === 0) return;

      lStack.push(rStack.pop());
    },
    B: () => {
      if (lStack.length === 0) return;

      lStack.pop();
    },
    P: (w) => {
      lStack.push(w);
    },
  };

  input.forEach((i) => {
    const order = i.split(" ")[0];
    const word = i.split(" ")[1];

    order === "P" ? behavior[order](word) : behavior[order]();
  });

  while (rStack.length > 0) {
    lStack.push(rStack.pop());
  }

  return console.log(lStack.join(""));
}

solution(inputData);

/**
 * abcd
 *
 * L
 * abc / d
 *
 * L
 * ab / dc
 *
 * D
 * abc / d
 */
