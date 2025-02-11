const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function generateCombinations(arr, start, combination, result) {
  if (combination.length === 6) {
    result.push(combination.join(" "));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    generateCombinations(arr, i + 1, [...combination, arr[i]], result);
  }
}

function solution(input) {
  let output = [];
  for (const line of input) {
    const nums = line.split(" ").map(Number);
    if (nums[0] === 0) break;
    const k = nums[0];
    const S = nums.slice(1, k + 1);
    const result = [];
    generateCombinations(S, 0, [], result);
    output.push(result.join("\n"));
  }
  return output.join("\n\n");
}

console.log(solution(input));
