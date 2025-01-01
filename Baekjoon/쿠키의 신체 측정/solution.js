const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const cookieMap = input.slice(1).map((row) => row.split(""));
  const locationOfHeart = [];
  const lengthOfArms = [0, 0];
  let lengthOfWaist = 0;
  const lengthOfLegs = [0, 0];

  // heart
  for (let i = 0; i < N; i++) {
    if (locationOfHeart.length === 2) {
      break;
    }

    for (let j = 0; j < N; j++) {
      if (cookieMap[i][j] === "*") {
        locationOfHeart.push(i + 1, j);
        break;
      }
    }
  }

  // left Arm
  for (let i = 0; i < locationOfHeart[1]; i++) {
    if (cookieMap[locationOfHeart[0]][i] === "*") {
      lengthOfArms[0] += 1;
    }
  }

  // right Arm
  for (let i = locationOfHeart[1] + 1; i < N; i++) {
    if (cookieMap[locationOfHeart[0]][i] === "*") {
      lengthOfArms[1] += 1;
    }
  }

  // waist
  for (let i = locationOfHeart[0] + 1; i < N; i++) {
    if (cookieMap[i][locationOfHeart[1]] === "*") {
      lengthOfWaist += 1;
    }
  }

  // left legs
  for (let i = locationOfHeart[0] + lengthOfWaist + 1; i < N; i++) {
    if (cookieMap[i][locationOfHeart[1] - 1] === "*") {
      lengthOfLegs[0] += 1;
    }
  }

  // right legs
  for (let i = locationOfHeart[0] + lengthOfWaist + 1; i < N; i++) {
    if (cookieMap[i][locationOfHeart[1] + 1] === "*") {
      lengthOfLegs[1] += 1;
    }
  }

  return (
    locationOfHeart.map((el) => el + 1).join(" ") +
    "\n" +
    [...lengthOfArms, lengthOfWaist, ...lengthOfLegs].join(" ")
  );
}

console.log(solution(input));
