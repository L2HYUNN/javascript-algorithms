function solution(n) {
  let result = 0;
  let sum = 0;
  let start = 1;
  let point = 1;

  while (start <= n) {
    sum += point;

    if (sum === n) {
      start++;
      result++;
      point = start;
      sum = 0;

      continue;
    } else if (sum > n) {
      start++;
      point = start;
      sum = 0;

      continue;
    }

    point++;
  }

  return result;
}
