const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const log = {};

  for (let i = 1; i < n + 1; i++) {
    const [name, status] = input[i].split(" ");

    if (status === "enter") {
      log[name] = "enter";
      continue;
    }

    if (status === "leave") {
      log[name] = "leave";
      continue;
    }
  }

  const result = [];

  for (const name in log) {
    if (log[name] === "enter") {
      result.push(name);
    }
  }

  result.sort().reverse();

  return result.join("\n");
}

console.log(solution(input));
