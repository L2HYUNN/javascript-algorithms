const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function getTruckOnBridge(bridge) {
  return bridge.reduce((acc, cur) => {
    if (cur) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function solution(input) {
  const [n, w, L] = input[0].split(" ").map(Number);
  const trucks = input[1].split(" ").map(Number);
  const bridge = Array.from({ length: w }, () => 0);

  let time = 0;
  let totalTruckWeight = 0;

  while (trucks.length > 0) {
    const popedTruckWeight = bridge.shift();
    totalTruckWeight -= popedTruckWeight;

    const truckWeight = trucks[0];

    if (
      totalTruckWeight + truckWeight <= L &&
      getTruckOnBridge(bridge) + 1 <= w
    ) {
      const truck = trucks.shift();
      bridge.push(truck);
      totalTruckWeight += truck;
    } else {
      bridge.push(0);
    }

    time++;
  }

  while (getTruckOnBridge(bridge) > 0) {
    bridge.shift();
    time++;
  }

  return time;
}

console.log(solution(input));
