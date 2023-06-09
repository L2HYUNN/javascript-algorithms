// https://gigibean.tistory.com/27
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function getTwoFive(n) {
  let five = 0;
  let two = 0;

  for (let i = 2; i <= n; i *= 2) {
    two += parseInt(n / i);
  }
  for (let i = 5; i <= n; i *= 5) {
    five += parseInt(n / i);
  }
  return [two, five];
}

function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  const [nt, nf] = getTwoFive(n);
  const [mt, mf] = getTwoFive(m);
  const [nmt, nmf] = getTwoFive(n - m);
  const two = nt - mt - nmt;
  const five = nf - mf - nmf;
  return Math.min(two, five);
}

console.log(solution(input));
