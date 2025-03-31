const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const flowers = input.slice(1).map((flower) => {
    const [startMonth, startDay, endMonth, endDay] = flower
      .split(" ")
      .map(Number);
    return { start: startMonth * 100 + startDay, end: endMonth * 100 + endDay };
  });

  flowers.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start;
    }

    return b.end - a.end;
  });

  const start = 301;
  const end = 1130;

  let count = 0;
  let currentEnd = start;
  let index = 0;

  while (currentEnd <= end) {
    let maxEnd = currentEnd;

    while (index < N && flowers[index].start <= currentEnd) {
      if (flowers[index].end > maxEnd) {
        maxEnd = flowers[index].end;
      }

      index++;
    }

    if (maxEnd === currentEnd) {
      return 0;
    }

    currentEnd = maxEnd;
    count++;
  }

  return count;
}

console.log(solution(input));
