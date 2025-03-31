function solution(symbols) {
  let count = 0;

  for (const aSymbol of symbols) {
    aSymbol === "(" ? count++ : count--;

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}
