function solution(n, words) {
  const result = [0, 0];
  const dict = new Map();

  for (let i = 0; i < words.length; i++) {
    if (
      i !== words.length - 1 &&
      words[i][words[i].length - 1] !== words[i + 1][0]
    ) {
      result[0] = ((i + 1) % n) + 1;
      result[1] = Math.ceil((i + 2) / n);
      return result;
    }

    dict.set(words[i], true);

    if (i !== words.length - 1 && dict.has(words[i + 1])) {
      result[0] = ((i + 1) % n) + 1;
      result[1] = Math.ceil((i + 2) / n);
      return result;
    }
  }

  return [0, 0];
}
