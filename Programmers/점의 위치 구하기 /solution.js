function solution(dot) {
  var x = dot[0] > 0 ? [1, 4] : [2, 3];
  var y = dot[1] > 0 ? [1, 2] : [3, 4];

  return x.filter((item) => item === y[0]).length > 0
    ? y[0]
    : x.filter((item) => item === y[1]).length > 0
    ? y[1]
    : 0;
}
