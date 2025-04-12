function solution(n) {
  const DP = Array.from({ length: n + 1 }, () => 0);
  DP[1] = 1;

  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i - 1] + 1, DP[i / 2]);
    } else {
      DP[i] = DP[i - 1] + 1;
    }
  }

  return DP[n];
}
