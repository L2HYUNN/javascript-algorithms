function solution(my_str, n) {
  return Array(Math.ceil(my_str.length / n))
    .fill("")
    .map((v, i) => my_str.slice(0 + i * n, n + i * n));
}
