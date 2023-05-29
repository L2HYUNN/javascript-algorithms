const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

function solution(input) {
  const calcurator = ["+", "-", "*", "/"];
  const expression = input.shift().split("");
  const matching = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: "",
  };

  input.forEach((i, idx) => {
    matching[Object.keys(matching)[idx]] = i;
  });

  const nums = [];

  for (let i = 0; i < expression.length; i++) {
    if (!calcurator.includes(expression[i]))
      nums.push(+matching[expression[i]]);
    else {
      const second = nums.pop();
      const first = nums.pop();
      switch (expression[i]) {
        case "+":
          nums.push(first + second);
          break;
        case "-":
          nums.push(first - second);
          break;
        case "*":
          nums.push(first * second);
          break;
        case "/":
          nums.push(first / second);
          break;
      }
    }
  }

  return nums[0].toFixed(2);
}

console.log(solution(input));
