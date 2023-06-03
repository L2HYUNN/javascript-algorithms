const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  input.forEach((string) => {
    if (string === "") return console.log("");

    const answer = new Array(4).fill(0);
    const splitedString = string.split("");

    const lowerCase = string.toLowerCase();
    lowerCase.split("").forEach((s, i) => {
      if (s === " " || !isNaN(+s)) return;
      if (s === splitedString[i]) answer[0]++;
    });

    const upperCase = string.toUpperCase();
    upperCase.split("").forEach((s, i) => {
      if (s === " " || !isNaN(+s)) return;
      if (s === splitedString[i]) answer[1]++;
    });

    splitedString.forEach((s) => {
      if (s === " ") return answer[3]++;
      if (!isNaN(+s)) answer[2]++;
    });

    console.log(answer.join(" "));
  });
}

solution(input);
