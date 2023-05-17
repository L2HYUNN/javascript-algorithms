function solution(dots) {
  const answer = 0;
  const dx = [];
  const dy = [];
  const dydx = [];

  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      dx.push(Math.abs(dots[i][0] - dots[j][0]));
      dy.push(Math.abs(dots[i][1] - dots[j][1]));
    }
  }

  for (let k = 0; k < dx.length; k++) {
    dydx.push(dy[k] / dx[k]);
  }

  for (let l = 0; l < dydx.length; l++) {
    if (dydx[l] === dydx[dydx.length - 1 - l]) return 1;
  }

  return 0;
}

/**
[a-b, a-c, a-d, b-c, b-d, c-d]

a-b, c-d
a-c, b-d
a-d, b-c
*/
