function solution(keyinput, board) {
  let key = { right: [1, 0], up: [0, 1], down: [0, -1], left: [-1, 0] };

  let rslt = keyinput
    .map((v) => key[v])
    .reduce(
      (a, b) => {
        if (
          Math.abs(a[0] + b[0]) > board[0] / 2 ||
          Math.abs(a[1] + b[1]) > board[1] / 2
        )
          return [a[0], a[1]];

        return [a[0] + b[0], a[1] + b[1]];
      },
      [0, 0]
    );

  return rslt;
}
