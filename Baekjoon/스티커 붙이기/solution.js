const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M, K] = input[0].split(" ").map((n) => parseInt(n));

  const notebook = Array.from({ length: N }, () => Array(M).fill(0));

  const stickerInfo = [];

  let index = 1;

  while (input.length !== index) {
    const size = input[index].split(" ").map((n) => parseInt(n));
    let sticker = [];

    for (let i = 0; i < size[0]; i++) {
      sticker.push(input[index + i + 1].split(" ").map((n) => parseInt(n)));
    }

    stickerInfo.push(sticker);

    index += size[0] + 1;
  }

  stickerInfo.forEach((sticker) => {
    let placed = false;

    for (let rotation = 0; rotation < 4 && !placed; rotation++) {
      const [row, col] = [sticker.length, sticker[0].length];

      for (let r = 0; r <= N - row && !placed; r++) {
        for (let c = 0; c <= M - col && !placed; c++) {
          if (canAttatch([r, c], notebook, sticker)) {
            attatchSticker([r, c], notebook, sticker);
            placed = true;
          }
        }
      }

      if (!placed) {
        sticker = rotate(sticker);
      }
    }
  });

  return calculateAttatchedSticker(notebook);
}

function canAttatch(location, notebook, sticker) {
  const [notebookRow, notebookCol] = [notebook.length, notebook[0].length];
  const [stickerRow, stickerCol] = [sticker.length, sticker[0].length];

  for (let r = 0; r < stickerRow; r++) {
    for (let c = 0; c < stickerCol; c++) {
      if (sticker[r][c] === 1) {
        if (
          location[0] + r >= notebookRow ||
          location[1] + c >= notebookCol ||
          notebook[location[0] + r][location[1] + c] === 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
}

function attatchSticker(location, notebook, sticker) {
  const [row, col] = [sticker.length, sticker[0].length];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (sticker[r][c] === 1) {
        notebook[location[0] + r][location[1] + c] = 1;
      }
    }
  }
}

function rotate(sticker) {
  const [row, col] = [sticker.length, sticker[0].length];

  const result = Array.from({ length: col }, () => Array(row).fill(0));

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      result[c][row - 1 - r] = sticker[r][c];
    }
  }

  return result;
}

function calculateAttatchedSticker(notebook) {
  let result = 0;

  const [row, col] = [notebook.length, notebook[0].length];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (notebook[r][c] === 1) {
        result++;
      }
    }
  }

  return result;
}

console.log(solution(input));
