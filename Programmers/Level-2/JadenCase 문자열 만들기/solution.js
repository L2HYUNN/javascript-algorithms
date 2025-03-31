function solution(s) {
  const words = s.split(" ");
  const result = [];

  for (const word of words) {
    const combination = [];

    for (let i = 0; i < word.length; i++) {
      if (i === 0 && word[i] == Number(word[i])) {
        combination.push(word[i]);
      } else if (i === 0) {
        combination.push(word[i].toUpperCase());
      } else {
        combination.push(word[i].toLowerCase());
      }
    }

    result.push(combination.join(""));
  }

  return result.join(" ");
}
