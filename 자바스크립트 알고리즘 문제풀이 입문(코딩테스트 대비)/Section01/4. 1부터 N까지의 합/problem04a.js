function solution(n) {
  return Array(n)
    .fill(0)
    .reduce((acc, _, idx) => {
      return acc + idx + 1;
    }, 0);
}

console.log(solution(6));
console.log(solution(10));
