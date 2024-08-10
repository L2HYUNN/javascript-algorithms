const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const totalBuilding = input[0];
  const buildingHeight = input.slice(1).map((element) => +element);

  let answer = 0;
  const stack = [];

  for (const currentBuildingHeight of buildingHeight) {
    while (stack.length > 0) {
      if (stack[stack.length - 1] <= currentBuildingHeight) {
        stack.pop();
      } else {
        break;
      }
    }

    answer += stack.length;
    stack.push(currentBuildingHeight);
  }

  return answer;
}

console.log(solution(input));
