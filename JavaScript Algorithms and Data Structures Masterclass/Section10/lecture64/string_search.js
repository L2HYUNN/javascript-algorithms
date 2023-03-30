/**
 * @description
 * 긴 문자열에 있는 문자 하나와 짧은 문자열에 있는 문자 하나를 서로 비교해가며 match 여부를 확인한다.
 *
 * @param {string} long
 * @param {string} short
 *
 * @returns {string} matchedStringCounter
 */
function stringSearch(long, short) {
  let matchedStringCounter = 0;
  let shortPointer = 0;

  for (let i = 0; i < long.length; i++) {
    long[i] === short[shortPointer] ? shortPointer++ : (shortPointer = 0);

    if (shortPointer === short.length - 1) matchedStringCounter++;
  }

  return matchedStringCounter;
}

console.log(stringSearch("stringringgrin", "rin"));
console.log(stringSearch("lorie loled", "lol"));
console.log(stringSearch("lorie loled", "abc"));
