function isAnswer(n) {
  var divisors = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
    if (divisors.length > 2) return true;
  }
  return false;
}

function solution(n) {
  var answer = 0;

  for (var i = 1; i <= n; i++) {
    if (isAnswer(i)) answer++;
  }

  return answer;
}
