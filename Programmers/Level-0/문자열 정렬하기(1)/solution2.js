function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
