function solution(a, b, c) {
  let numbers = [a, b, c];
  let min = 100;
  numbers.forEach((n) => {
    if (n < min) min = n;
  });
  return min;
}

console.log(solution(6, 10, 15));
