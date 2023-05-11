function getGCD(a, b) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
}

function getPrimeFactor(num) {
  const result = [];

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }

  return result;
}

function solution(a, b) {
  if (a % b === 0) return 1;

  const gcd = getGCD(a, b);
  const primeFactor = getPrimeFactor(b / gcd);
  const InfiniteDecimalCondition = primeFactor.every(
    (num) => num % 2 === 0 || num % 5 === 0
  );

  return InfiniteDecimalCondition ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
console.log(solution(12, 36));
