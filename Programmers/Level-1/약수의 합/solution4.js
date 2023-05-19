function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}
