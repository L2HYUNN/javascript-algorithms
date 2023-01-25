function solution(my_string) {
  var answer = 0;
  my_string
    .split(/[a-zA-Z]/g)
    .forEach((v) => (v ? (answer += +v) : (answer += 0)));

  return answer;
}

console.log(solution("1a2b3c4d123Z"));
