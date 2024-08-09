const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const gears = input.slice(0, 4).map((gear) => gear.split("").map(Number));
  const K = Number(input[4]);
  const rotateMethod = input
    .slice(5, 5 + K)
    .map((method) => method.split(" ").map(Number));

  console.log(gears[2]);

  console.log(rotateGear(gears[2], -1));

  rotateMethod.forEach((method) => {
    return;
  });
}

// 12시 방향부터 시계방향으로 기어 정보가 주어진다.
// 1번 기어의 묶여있는 번호는 2(우)번이다.
// 2번 기어의 묶여있는 번호는 2(우), 6(좌)이다.
// 3번 기어의 묶여있는 번호는 2(우), 6(좌)이다.
// 4번 기어의 묶여있는 번호는 6(좌) 이다.

function process(gears, method) {
  const [number, direction] = method;

  const coupledGear = isCoupledGear(gears);

  const extraRotate = [];

  if (number === 1) {
    if (coupledGear[0]) {
      extraRotate.push(2);
    }
  }

  if (number === 3) {
    if (coupledGear[1]) {
      extraRotate.push(2);
      if (coupledGear[0]) {
        extraRotate.push(1);
      }
    }

    if (coupledGear[2]) {
      extraRotate.push(4);
    }

    rotateGear(gears[number - 1], direction);
  }
}

function rotateGear(gear, direction) {
  if (direction === 1) {
    return [gear[gear.length], ...gear.slice(0, gear.length - 1)];
  }

  if (direction === -1) {
    return [...gear.slice(1), gear[0]];
  }
}

function isCoupledGear(gears) {
  const result = [];

  for (let i = 0; i < gears.length - 1; i++) {
    if (gears[i][2] !== gears[i + 1][6]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution(input));
