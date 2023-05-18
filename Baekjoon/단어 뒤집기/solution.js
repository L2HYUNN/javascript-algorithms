const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

inputData.shift();

function solution(inputData) {
  const answer = [];

  inputData.forEach((input) => {
    const temp = [];

    input.split(" ").forEach((word) => {
      if (word.length === 1) {
        temp.push(word);
      } else {
        const newWord = word.split("").reverse().join("");
        temp.push(newWord);
      }
    });

    answer.push(temp.join(" "));
  });

  console.log(answer.join("\n"));
}

solution(inputData);
