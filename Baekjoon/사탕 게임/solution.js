const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const rows = input.slice(1, input.length);
  const matrix = Array.from({ length: N }, () => new Array(N).fill(0));

  // fill matrix
  for (let i = 0; i < N; i++) {
    const rowArray = rows[i].split("");
    for (let j = 0; j < N; j++) {
      matrix[i][j] = rowArray[j];
    }
  }

  // calculate max
  const calculateMax = (matrix) => {
    let max = 1;

    // row
    for (let i = 0; i < N; i++) {
      let localMax = 1;
      let currentValue;

      for (let j = 0; j < N; j++) {
        if (j === 0) {
          currentValue = matrix[i][j];
          continue;
        }

        if (currentValue !== matrix[i][j]) {
          max = Math.max(max, localMax);
          currentValue = matrix[i][j];
          localMax = 1;
          continue;
        }

        localMax++;
      }
      max = Math.max(max, localMax);
    }

    // column
    for (let i = 0; i < N; i++) {
      let localMax = 1;
      let currentValue;

      for (let j = 0; j < N; j++) {
        if (j === 0) {
          currentValue = matrix[j][i];
          continue;
        }

        if (currentValue !== matrix[j][i]) {
          currentValue = matrix[j][i];
          max = Math.max(max, localMax);
          localMax = 1;
          continue;
        }

        localMax++;
      }
      max = Math.max(max, localMax);
    }

    return max;
  };

  let result = 1;

  // calculate result
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (matrix[i][j] !== matrix[i][j + 1]) {
        const currentValue = matrix[i][j];
        matrix[i][j] = matrix[i][j + 1];
        matrix[i][j + 1] = currentValue;

        const max = calculateMax(matrix);
        result = Math.max(max, result);

        matrix[i][j + 1] = matrix[i][j];
        matrix[i][j] = currentValue;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (matrix[j][i] !== matrix[j + 1][i]) {
        const currentValue = matrix[j][i];
        matrix[j][i] = matrix[j + 1][i];
        matrix[j + 1][i] = currentValue;

        const max = calculateMax(matrix);
        result = Math.max(max, result);

        matrix[j + 1][i] = matrix[j][i];
        matrix[j][i] = currentValue;
      }
    }
  }

  return result;
}

console.log(solution(input));
