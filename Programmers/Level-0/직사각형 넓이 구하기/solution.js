function solution(dots) {
  const all_x = dots.map((v) => v[0]);
  const all_y = dots.map((v) => v[1]);

  const new_x = [...new Set(all_x)];
  const new_y = [...new Set(all_y)];

  const diff_x = Math.abs(new_x[0] - new_x[1]);
  const diff_y = Math.abs(new_y[0] - new_y[1]);

  return diff_x * diff_y;
}
