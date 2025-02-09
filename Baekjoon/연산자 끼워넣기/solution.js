const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const operatorNumber = input[2].split(" ").map(Number);
  const combination = [];
  const arr = [];

  function backtrack(index) {
    if (index === N - 1) {
      combination.push([...arr]);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (operatorNumber[i] > 0) {
        arr.push(i);
        operatorNumber[i]--;
        backtrack(index + 1);
        arr.pop();
        operatorNumber[i]++;
      }
    }
  }

  function calculate(numbers, operator) {
    const [prev, next] = numbers;

    if (operator === 0) {
      return prev + next;
    }

    if (operator === 1) {
      return prev - next;
    }

    if (operator === 2) {
      return prev * next;
    }

    if (operator === 3) {
      return parseInt(prev / next);
    }
  }

  function calculateResult(numbers, combination) {
    const result = [];

    for (let i = 0; i < combination.length; i++) {
      let sum = calculate([numbers[0], numbers[1]], combination[i][0]);

      for (let j = 2; j < numbers.length; j++) {
        sum = calculate([sum, numbers[j]], combination[i][j - 1]);
      }

      result.push(sum);
    }

    return result;
  }

  backtrack(0);

  const resultNumbers = calculateResult(numbers, combination);

  const max = Math.max(...resultNumbers);
  const min = Math.min(...resultNumbers);

  return [max ? max : 0, min ? min : 0].join("\n");
}

console.log(solution(input));
