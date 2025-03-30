function solution(s) {
  const number = s.split(" ").map(Number);

  return [Math.min(...number), Math.max(...number)].join(" ");
}
