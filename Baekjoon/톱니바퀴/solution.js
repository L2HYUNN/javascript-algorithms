const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const GEARS = input
    .slice(0, 4)
    .map((gear) => gear.split("").map((str) => +str));

  const totalRotate = input[4];
  const instructions = input
    .slice(5)
    .map((instruction) => instruction.split(" ").map((str) => +str));

  instructions.forEach(([gear, direction]) => {
    const rotating = [];

    const visited = [false, false, false, false];

    findRotatingGear([gear - 1, direction], GEARS, rotating, visited);

    rotating.forEach(([gear, direction]) => {
      const currentGear = GEARS[gear];
      const newGear = rotate(currentGear, direction);
      GEARS[gear] = newGear;
    });
  });

  const result = GEARS.reduce((acc, cur, idx) => {
    if (cur[0] === 1) {
      if (idx === 0) {
        return acc + 1;
      } else if (idx === 1) {
        return acc + 2;
      } else if (idx === 2) {
        return acc + 4;
      } else {
        return acc + 8;
      }
    } else {
      return acc;
    }
  }, 0);

  function rotate(gear, direction) {
    let newGear = [];

    if (direction === 1) {
      const last = gear.pop();
      newGear = [last, ...gear];
    }

    if (direction === -1) {
      const first = gear.shift();
      newGear = [...gear, first];
    }

    return newGear;
  }

  function findRotatingGear(instruction, gears, rotating, visited) {
    const [gear, direction] = instruction;

    if (visited[gear]) {
      return;
    }

    rotating.push(instruction);

    visited[gear] = true;

    const currentGear = gears[gear];
    const [currentGearLeftTouched, currentGearRightTouched] = [
      currentGear[6],
      currentGear[2],
    ];

    if (gear - 1 >= 0) {
      const prevGear = gears[gear - 1];
      const [prevGearLeftTouched, prevGearRightTouched] = [
        prevGear[6],
        prevGear[2],
      ];

      if (prevGearRightTouched !== currentGearLeftTouched) {
        const prevInstruction = [gear - 1, -direction];
        findRotatingGear(prevInstruction, gears, rotating, visited);
      }
    }

    if (gear + 1 < 4) {
      const nextGear = gears[gear + 1];
      const [nextGearLeftTouched, nextGearRightTouched] = [
        nextGear[6],
        nextGear[2],
      ];

      if (currentGearRightTouched !== nextGearLeftTouched) {
        const nextInstruction = [gear + 1, -direction];
        findRotatingGear(nextInstruction, gears, rotating, visited);
      }
    }

    return;
  }

  return result;
}

console.log(solution(input));
