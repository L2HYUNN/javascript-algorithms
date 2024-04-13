const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const coins = [];
  let money = K;

  for (let i = 1; i < input.length; i++) {
    coins.push(Number(input[i]));
  }

  let coin = 0;
  for (let j = input.length - 1; j >= 0; j--) {
    if (money === 0) {
      break;
    }

    if (money >= coins[j]) {
      coin += Math.floor(money / coins[j]);
      money = money % coins[j];
    }
  }

  return coin;
}

console.log(solution(input));
