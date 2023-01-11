// GCD(Greatest Common Divisor)
function getGCD(num1, num2) {
  let gcd = 1;

  for (i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
}

function solution() {
  var num1 = 4,
    num2 = 2;

  return getGCD(num1, num2);
}

console.log(solution());
