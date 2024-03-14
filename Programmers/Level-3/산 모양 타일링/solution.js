function solution(n, tops) {
  const a = new Array(n + 1).fill(0);
  const b = new Array(n + 1).fill(0);

  const MOD = 10007;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      b[0] = 1;
    }

    a[i + 1] = a[i] + b[i];

    if (tops[i] === 1) {
      b[i + 1] = 2 * a[i] + 3 * b[i];
    }

    if (tops[i] === 0) {
      b[i + 1] = a[i] + 2 * b[i];
    }

    a[i + 1] %= MOD;
    b[i + 1] %= MOD;
  }

  return (a[n] + b[n]) % MOD;
}
