const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const words = input.slice(1);

  const noDuplicatedWords = [...new Set(words)];
  noDuplicatedWords.sort();

  const wordsMap = new Map();
  const result = [];

  noDuplicatedWords.forEach((word) => {
    wordsMap.set(word, [0, 0]);
  });

  words.forEach((word) => {
    const wordMap = wordsMap.get(word);
    wordsMap.set(word, [wordMap[0] + 1, word.length]);
  });

  for (const [word, wordMap] of wordsMap) {
    if (wordMap[1] >= M) {
      result.push({ word, location: wordMap[0], length: wordMap[1] });
    }
  }

  result.sort((a, b) => {
    return b.location - a.location;
  });

  result.sort((a, b) => {
    if (a.location === b.location) {
      return b.length - a.length;
    }
  });

  result.sort((a, b) => {
    if (a.location === b.location && a.length === b.length) {
      return a.word - b.word;
    }
  });

  return result.map((el) => el.word).join("\n");
}

console.log(solution(input));
