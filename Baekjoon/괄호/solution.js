const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

inputData.shift();

function solution(input) {
  let answer = [];

  input.forEach((line) => {
    let open = 0;
    let close = 0;
    let fire = false;

    line.split("").forEach((ps) => {
      if (ps === "(") open++;
      if (ps === ")") close++;

      if (open < close) fire = true;
    });

    const result = open === close && !fire ? "YES" : "NO";
    answer.push(result);
  });

  console.log(answer.join("\n"));
}

solution(inputData);

/**
 * openNumber, closeNumber
 * Example, (())()
 * openNumber 1, closeNumber 0 (
 * openNumber 2, closeNumber 0 ((
 * openNumber 2, closeNumber 1 (()
 * openNumber 2, closeNumber 2 (())
 * openNumber 2, closeNumber 2 (())
 * openNumber 3, closeNumber 2 (())(
 * openNumber 3, closeNumber 3 (())()
 *
 * 괄호가 성공적으로 닫히는지 확인해야함
 */
