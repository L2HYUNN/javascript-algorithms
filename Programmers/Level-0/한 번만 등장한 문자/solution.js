function solution(s) {
  return s
    .split("")
    .filter((v) => s.split(v).length === 2)
    .sort()
    .join("");
}

console.log(solution("hello"));
