const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);

  const conference = [];

  for (let i = 1; i <= N; i++) {
    conference.push(input[i].split(" ").map(Number));
  }

  conference.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let count = 0;
  let lastEndTime = -1;

  for (let i = 0; i < conference.length; i++) {
    if (conference[i][0] >= lastEndTime) {
      lastEndTime = conference[i][1];
      count++;
    }
  }

  return count;
}

console.log(solution(input));
