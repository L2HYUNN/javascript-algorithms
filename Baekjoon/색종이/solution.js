const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const SIZE = 100;

function solution(input) {
  const length = input.shift();
  const whitePaper = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
  const coloredPapers = input.map((value) => value.split(" ").map(Number));

  let answer = 0;

  coloredPapers.forEach(([horizontal, vertical]) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        whitePaper[horizontal + i][vertical + j] = 1;
      }
    }
  });

  for (let i = 0; i < whitePaper.length; i++) {
    for (let j = 0; j < whitePaper.length; j++) {
      if (whitePaper[i][j]) answer++;
    }
  }

  return answer;
}

console.log(solution(input));
