const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

const inputData_A_array = inputData[0].split("");
const inputData_B_array = inputData[1].split("");
const new_array = [];

if (inputData[0].length !== inputData[1].length) {
}

const result = inputData_A_array.reduce((acc, cur, idx) => {
  if (cur !== inputData_B_array[idx]) return acc + 1;
  return acc;
}, 0);

console.log(result);
