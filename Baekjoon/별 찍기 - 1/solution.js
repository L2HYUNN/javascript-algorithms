const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function makeStars(number) {
  const result = [];

  Array.from(Array(number)).forEach((_, index) => {
    let stars = "";

    Array.from(Array(index + 1)).forEach(() => {
      stars += "*";
    });

    result.push(stars);
  });

  return result;
}

function solution(input) {
  const N = Number(input);
  return makeStars(N).join("\n");
}

console.log(solution(input));
