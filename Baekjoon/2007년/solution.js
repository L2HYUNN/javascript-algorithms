const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split(" ");

const inputMonth = inputData[0];
const inputDay = inputData[1];

const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayEnglish = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

let daySumOfMonth = 0;

for (let i = 0; i < inputMonth - 1; i++) {
  daySumOfMonth += dayOfMonth[i];
}
daySumOfMonth += inputDay - 1;

function DayCalculator(daySumOfMonth) {
  const day = daySumOfMonth % 7;
  return day; // 2007.01.01 Monday(1)
}

const DayOfMonth = DayCalculator(daySumOfMonth);
console.log(dayEnglish[DayOfMonth]);
