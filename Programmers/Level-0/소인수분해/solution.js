function solution(n) {
  const array = [];
  let number = n;

  for (let i = 2; i <= n; i++) {
    if (number % i === 0) {
      array.push(i);
      number = number / i;
      i--;
    }
  }

  return [...new Set(array)];
}
