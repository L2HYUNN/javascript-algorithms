function solution(s) {
  const answer = [];
  s.split(" ").forEach((v) => {
    if (v === "Z") {
      answer.pop();
    } else {
      answer.push(v);
    }
  });

  // reduce 사용시 빈 배열의 경우 초기값을 넘겨주지 않으면 에러가 발생할 수 있다.
  return answer.reduce((acc, cur) => +acc + +cur, 0);
}
