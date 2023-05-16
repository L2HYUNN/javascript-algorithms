function solution(board) {
  const length = board.length;
  const targets = [];
  let answer = length * length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        targets.push([i, j]);
        answer--;
      }
    }
  }

  if (answer === 0) return 0;

  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [1, 1, 1, 0, 0, -1, -1, -1];

  targets.forEach((target) => {
    for (let k = 0; k < 8; k++) {
      const targetX = target[0] + dx[k];
      const targetY = target[1] + dy[k];

      if (
        targetX >= 0 &&
        targetY >= 0 &&
        targetX < length &&
        targetY < length &&
        board[targetX][targetY] === 0
      ) {
        board[targetX][targetY] = 1;
        answer--;
      }
    }
  });

  return answer;
}
