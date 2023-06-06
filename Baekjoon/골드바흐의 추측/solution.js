const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const numberInput = input.map(Number);
  numberInput.pop();

  const numbers = new Array(1000000 + 1).fill(true).fill(false, 0, 2);
  const primeNumbers = [];
  const answer = [];

  for (let i = 2; i * i <= 1000000; i++) {
    if (numbers[i]) {
      primeNumbers.push(i);
      for (let j = i * i; j <= 1000000; j += i) {
        numbers[j] = false;
      }
    }
  }

  numberInput.forEach((number) => {
    const lowPrimeNumber = primeNumbers.find(
      (primeNumber) => numbers[number - primeNumber]
    );

    if (lowPrimeNumber) {
      const highPrimeNumber = number - lowPrimeNumber;
      answer.push(`${number} = ${lowPrimeNumber} + ${highPrimeNumber}`);
    } else {
      answer.push("Goldbach's conjecture is wrong.");
    }
  });

  return answer.join("\n");
}

console.log(solution(input));
