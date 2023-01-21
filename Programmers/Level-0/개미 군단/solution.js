function solution(hp) {
  var answer = 0;
  var hp2 = 0;

  if (hp % 5 === 0) return Math.floor(hp / 5);
  answer += Math.floor(hp / 5);
  hp2 = Math.floor(hp % 5);

  if (hp2 % 3 === 0) return answer + Math.floor(hp2 / 3);
  answer += Math.floor(hp2 / 3);
  hp2 = Math.floor(hp2 % 3);

  return (answer += hp2);
}

console.log(solution(23));
