function solution(k, tangerine) {
  const total = new Map();
  let result = 0;

  for (const t of tangerine) {
    const prevTotal = total.get(t) || [t, 0];
    total.set(t, [prevTotal[0], prevTotal[1] + 1]);
  }

  const values = [...total.values()];
  values.sort((a, b) => {
    return b[1] - a[1];
  });
  values.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  });

  for (const value of values) {
    const [orange, orangeTotal] = value;

    k -= orangeTotal;
    result++;

    if (k <= 0) {
      return result;
    }
  }
}
