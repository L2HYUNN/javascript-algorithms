const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

// 시간 초과
function solution(input) {
  const str = input.shift();
  const strArr = str.split("");
  const length = input.shift();
  let cursor = str.length;

  const behavior = {
    L: () => {
      if (cursor > 0) cursor--;
    },
    D: () => {
      if (cursor < str.length) cursor++;
    },
    B: () => {
      if (cursor === 0) return;

      strArr.splice(cursor - 1, 1);
      cursor--;
    },
    P: (w) => {
      strArr.splice(cursor, 0, w);
      cursor++;
    },
  };

  input.forEach((i) => {
    const order = i.split(" ")[0];
    const word = i.split(" ")[1];

    order === "P" ? behavior[order](word) : behavior[order]();
  });

  return console.log(strArr.join(""));
}

solution(inputData);

/**
 * 커서가 들어갈 수 있는 위치
 * abcd
 *   0   1   2   3
 * V a V b V c V d V  ( length + 1 )
 * 0   1   2   3   4
 *
 * cursor = 3;
 *
 *   0   1   2
 * V a V b V d V
 * 0   1   2   3
 *
 * cursor = 2;
 *
 * abc 2
 * ac
 */
