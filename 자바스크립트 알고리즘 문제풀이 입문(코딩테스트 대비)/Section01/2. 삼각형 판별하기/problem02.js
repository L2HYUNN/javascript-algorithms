function solution(a, b, c) {
  let answer = "YES",
    max = 0,
    rest = 0;

  const numbers = [a, b, c];

  numbers.forEach((number) => {
    if (number > max) max = number;
  });

  numbers.forEach((number) => {
    if (number !== max) rest += number;
  });

  if (max > rest) answer = "NO";

  return answer;
}

console.log(solution(13, 40, 17));
