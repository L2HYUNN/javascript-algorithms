function solution(my_string, n) {
  var answer = "";
  my_string.split("").forEach((string) => {
    for (var i = 0; i < n; i++) {
      answer += string;
    }
  });
  return answer;
}

console.log(solution("hello", 3));
