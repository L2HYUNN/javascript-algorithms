// https://leylaoriduck.tistory.com/509
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().trim();
var answer = "";
while (inputs.length >= 3) {
  answer = parseInt(inputs.slice(inputs.length - 3), 2).toString(8) + answer;
  inputs = inputs.slice(0, inputs.length - 3);
}
console.log(
  inputs ? (answer = parseInt(inputs, 2).toString(8) + answer) : answer
);
