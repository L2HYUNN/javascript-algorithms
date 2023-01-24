function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => {
      if (n % (idx + 1) === 0) return idx + 1;
    })
    .filter((v) => v);
}

console.log(solution(5));
