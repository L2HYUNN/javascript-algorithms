const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = Array.from({ length: N }, () => []);
  const houseLocations = [];
  const chickenLocations = [];

  for (let i = 1; i < N + 1; i++) {
    map[i - 1] = input[i].split(" ").map(Number);
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (map[r][c] === 1) {
        houseLocations.push([r, c]);
      }

      if (map[r][c] === 2) {
        chickenLocations.push([r, c]);
      }
    }
  }

  const chickenCombination = selectChickenCombination(chickenLocations, M);

  let result = Number.MAX_SAFE_INTEGER;

  chickenCombination.forEach((chickenLocations) => {
    const chickenDistances = calculateChickenDistances(
      houseLocations,
      chickenLocations
    );

    result = Math.min(
      chickenDistances.reduce((acc, cur) => acc + cur, 0),
      result
    );
  });

  return result;
}

function calculateChickenDistances(houseLocations, chickenLocations) {
  const chickenDistances = [];

  for (const houseLocation of houseLocations) {
    chickenDistances.push(
      selectChickenDistance(houseLocation, chickenLocations)
    );
  }

  return chickenDistances;
}

function selectChickenDistance(houseLocation, chickenLocations) {
  let chickenDistance = Number.MAX_SAFE_INTEGER;

  for (const chickenLocation of chickenLocations) {
    chickenDistance = Math.min(
      chickenDistance,
      calculateChickenDistance(houseLocation, chickenLocation)
    );
  }

  return chickenDistance;
}

function calculateChickenDistance(houseLocation, chickenLocation) {
  const [houseLocationRow, houseLocationColumn] = houseLocation;
  const [chickenLocationRow, chickenLocationColumn] = chickenLocation;

  return (
    Math.abs(houseLocationRow - chickenLocationRow) +
    Math.abs(houseLocationColumn - chickenLocationColumn)
  );
}

function selectChickenCombination(chickenLocations, M) {
  const result = [];

  backtrack(0, []);

  return result;

  function backtrack(start, path) {
    if (path.length === M) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < chickenLocations.length; i++) {
      path.push(chickenLocations[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
}

console.log(solution(input));
