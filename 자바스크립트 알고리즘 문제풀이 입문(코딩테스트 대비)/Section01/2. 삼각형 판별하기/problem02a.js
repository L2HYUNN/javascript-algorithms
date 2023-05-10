function solution(a, b, c) {
  let answer = "YES",
    max = 0,
    rest = 0;

  if (a < b) max = b;
  else max = a;
  if (b < c) max = c;
  else max = b;

  if (max !== a) rest += a;
  if (max !== b) rest += b;
  if (max !== c) rest += c;

  if (max > rest) return (answer = "NO");

  return answer;
}

console.log(solution(13, 29, 17));
