function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
