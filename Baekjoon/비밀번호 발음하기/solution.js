const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.pop();
  const passwords = input;
  const VOWEL = ["a", "e", "i", "o", "u"];

  function isVowel(password) {
    return VOWEL.some((vowel) =>
      password.split("").some((word) => word === vowel)
    );
  }

  function isContinuous(password) {
    const splitdPassword = [...password.split("")];
    let continuousHistory = [splitdPassword.shift()];

    return splitdPassword.some((word) => {
      if (
        continuousHistory[0] === word &&
        continuousHistory[0] !== "e" &&
        continuousHistory[0] !== "o"
      ) {
        continuousHistory.push(word);
      } else {
        continuousHistory = [];
        continuousHistory.push(word);
      }

      if (continuousHistory.length === 2) {
        return true;
      } else {
        return false;
      }
    });
  }

  function isVowelContinuous(password) {
    const splitdPassword = [...password.split("")];
    let continuousHistory = [splitdPassword.shift()];

    return splitdPassword.some((word) => {
      if (
        VOWEL.some((vowel) => vowel === word) &&
        VOWEL.some(
          (vowel) => vowel === continuousHistory[continuousHistory.length - 1]
        )
      ) {
        continuousHistory.push(word);
      } else {
        continuousHistory = [];
        continuousHistory.push(word);
      }

      if (continuousHistory.length === 3) {
        return true;
      } else {
        return false;
      }
    });
  }

  function isConsonantContinuous(password) {
    const splitdPassword = [...password.split("")];
    let continuousHistory = [splitdPassword.shift()];

    return splitdPassword.some((word) => {
      if (
        !VOWEL.some((vowel) => vowel === word) &&
        !VOWEL.some(
          (vowel) => vowel === continuousHistory[continuousHistory.length - 1]
        )
      ) {
        continuousHistory.push(word);
      } else {
        continuousHistory = [];
        continuousHistory.push(word);
      }

      if (continuousHistory.length === 3) {
        return true;
      } else {
        return false;
      }
    });
  }

  const acceptablePassword = passwords.filter((password) => {
    return (
      isVowel(password) &&
      !isContinuous(password) &&
      !isVowelContinuous(password) &&
      !isConsonantContinuous(password)
    );
  });

  return passwords
    .map((password) =>
      acceptablePassword.includes(password)
        ? `<${password}> is acceptable.`
        : `<${password}> is not acceptable.`
    )
    .join("\n");
}

console.log(solution(input));
