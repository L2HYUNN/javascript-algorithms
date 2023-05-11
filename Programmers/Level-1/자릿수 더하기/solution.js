function solution(n) {
  var answer = 0;

  String(n)
    .split("")
    .forEach((n) => (answer += +n));

  return answer;
}
