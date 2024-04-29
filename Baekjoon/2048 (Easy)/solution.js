const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const board = [];

  for (let i = 1; i <= N; i++) {
    board.push(input[i].split(" ").map(Number));
  }

  const DIRECTION = Object.freeze({
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
  });

  let max = 0;

  function blockDFS(board, depth) {
    if (depth === 5) {
      board.forEach((line) => {
        max = Math.max(max, ...line);
      });

      return;
    }

    for (const dir in DIRECTION) {
      const copiedBoard = copyBoard(board);
      pushBlock(DIRECTION[dir], copiedBoard);
      blockDFS(copiedBoard, depth + 1);
    }
  }

  blockDFS(board, 0);

  return max;
}

function copyBoard(board) {
  const result = [];

  board.forEach((line) => {
    result.push([...line]);
  });

  return result;
}

function pushBlock(direction, board) {
  const row = board.length;
  const column = board[0].length;

  if (direction === "left") {
    for (let r = 0; r < row; r++) {
      const line = [];

      for (let c = 0; c < column; c++) {
        if (board[r][c] !== 0) {
          line.push(board[r][c]);
          board[r][c] = 0;
        }
      }

      if (line.length > 0) {
        const result = combineBlock(line);

        for (let i = 0; i < result.length; i++) {
          board[r][i] = result[i];
        }
      }
    }
  }

  if (direction === "right") {
    for (let r = 0; r < row; r++) {
      const line = [];

      for (let c = column - 1; c >= 0; c--) {
        if (board[r][c] !== 0) {
          line.push(board[r][c]);
          board[r][c] = 0;
        }
      }

      if (line.length > 0) {
        const result = combineBlock(line);

        for (let i = 0; i < result.length; i++) {
          board[r][column - 1 - i] = result[i];
        }
      }
    }
  }

  if (direction === "top") {
    for (let c = 0; c < column; c++) {
      const line = [];

      for (let r = 0; r < row; r++) {
        if (board[r][c] !== 0) {
          line.push(board[r][c]);
          board[r][c] = 0;
        }
      }

      if (line.length > 0) {
        const result = combineBlock(line);

        for (let i = 0; i < result.length; i++) {
          board[i][c] = result[i];
        }
      }
    }
  }

  if (direction === "bottom") {
    for (let c = 0; c < column; c++) {
      const line = [];

      for (let r = row - 1; r >= 0; r--) {
        if (board[r][c] !== 0) {
          line.push(board[r][c]);
          board[r][c] = 0;
        }
      }

      if (line.length > 0) {
        const result = combineBlock(line);

        for (let i = 0; i < result.length; i++) {
          board[row - 1 - i][c] = result[i];
        }
      }
    }
  }

  return board;
}

function combineBlock(line) {
  const result = [];

  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] === 0) continue;

    if (line[i] === line[i + 1]) {
      result.push(line[i] * 2);
      line[i + 1] = 0;
    } else {
      result.push(line[i]);
    }
  }

  if (line[line.length - 1] !== 0) {
    result.push(line[line.length - 1]);
  }

  return result;
}

console.log(solution(input));
