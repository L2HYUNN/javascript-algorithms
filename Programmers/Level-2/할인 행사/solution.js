function solution(want, number, discount) {
  const baguni = want.reduce((acc, cur, idx) => {
    acc[cur] = number[idx];

    return acc;
  }, {});

  const CERTIFICATION_DAY = 10;

  let result = 0;

  for (let i = 0; i < discount.length - CERTIFICATION_DAY + 1; i++) {
    const discountSlice = discount.slice(i, i + CERTIFICATION_DAY);

    if (!want.every((el) => discountSlice.includes(el))) {
      continue;
    }

    const localBaguni = discountSlice.reduce((acc, cur) => {
      acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);

      return acc;
    }, {});

    if (want.every((name) => baguni[name] <= localBaguni[name])) {
      result++;
    }
  }

  return result;
}
