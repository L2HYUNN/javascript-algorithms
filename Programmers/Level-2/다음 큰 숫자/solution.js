function solution(n) {
  let result = n + 1;
  const binaryNumberLength = n
    .toString(2)
    .split("")
    .map(Number)
    .filter(Boolean).length;

  while (result) {
    const resultBinaryNumberLength = result
      .toString(2)
      .split("")
      .map(Number)
      .filter(Boolean).length;

    if (binaryNumberLength === resultBinaryNumberLength) {
      return result;
    }

    result++;
  }
}
