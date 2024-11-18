const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.pop();

  return input
    .map((value) => {
      const spaces = value.split(" ").map(Number);
      spaces.sort((a, b) => b - a);

      if (spaces[0] >= spaces[1] + spaces[2]) {
        return "Invalid";
      } else if (
        spaces[0] === spaces[1] &&
        spaces[0] === spaces[2] &&
        spaces[1] === spaces[2]
      ) {
        return "Equilateral";
      } else if (
        spaces[0] !== spaces[1] &&
        spaces[1] !== spaces[2] &&
        spaces[0] !== spaces[2]
      ) {
        return "Scalene";
      } else {
        return "Isosceles";
      }
    })
    .join("\n");
}

console.log(solution(input));
