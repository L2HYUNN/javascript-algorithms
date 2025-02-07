const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const switchNumber = Number(input[0]);
  const switchStatus = input[1].split(" ").map(Number);
  const studentNumber = Number(input[2]);
  const studentStatus = input
    .slice(3)
    .map((status) => status.split(" ").map(Number));

  function changeSwitchStatus(switchStatus, location) {
    if (switchStatus[location] === 0) {
      return (switchStatus[location] = 1);
    }

    if (switchStatus[location] === 1) {
      return (switchStatus[location] = 0);
    }
  }

  for (let i = 0; i < studentNumber; i++) {
    const [gender, receivedNumber] = studentStatus[i];

    if (gender === 1) {
      for (let j = receivedNumber - 1; j < switchNumber; j++) {
        if ((j + 1) % receivedNumber === 0) {
          changeSwitchStatus(switchStatus, j);
        }
      }
    }

    if (gender === 2) {
      changeSwitchStatus(switchStatus, receivedNumber - 1);

      let prevIndex = receivedNumber - 2;
      let nextIndex = receivedNumber;

      while (prevIndex >= 0 && nextIndex < switchNumber) {
        const prevNumber = switchStatus[prevIndex];
        const nextNumber = switchStatus[nextIndex];

        if (prevNumber === nextNumber) {
          changeSwitchStatus(switchStatus, prevIndex);
          changeSwitchStatus(switchStatus, nextIndex);
          prevIndex--;
          nextIndex++;
        } else {
          break;
        }
      }
    }
  }

  let result = [];
  for (let i = 0; i < switchStatus.length; i++) {
    result.push(switchStatus[i]);

    // 20개씩 출력 후 `result` 초기화
    if ((i + 1) % 20 === 0 || i === switchStatus.length - 1) {
      console.log(result.join(" "));
      result = [];
    }
  }

  return switchStatus;
}

solution(input);
