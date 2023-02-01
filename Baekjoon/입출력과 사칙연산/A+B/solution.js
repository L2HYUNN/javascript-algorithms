const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
