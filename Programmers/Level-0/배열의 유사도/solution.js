function solution(s1, s2) {
  var answer = s1.filter((x) => s2.includes(x));
  return answer.length;
}
