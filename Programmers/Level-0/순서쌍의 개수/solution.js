function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, index) => v + index)
    .filter((v) => n % v === 0).length;
}
