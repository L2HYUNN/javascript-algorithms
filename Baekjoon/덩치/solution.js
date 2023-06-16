const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = input.shift();
  const humans = [];
  const answer = new Array(+length).fill(1);

  input.forEach((i) => humans.push(i.split(" ").map(Number)));

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (humans[i][0] < humans[j][0] && humans[i][1] < humans[j][1])
        answer[i]++;

      if (humans[i][0] > humans[j][0] && humans[i][1] > humans[j][1])
        answer[j]++;
    }
  }

  return answer.join(" ");
}

console.log(solution(input));
