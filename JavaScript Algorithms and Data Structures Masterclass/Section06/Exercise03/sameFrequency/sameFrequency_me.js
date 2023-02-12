/**
 * @description
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 *
 * Sample Input:
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */
function sameFrequency(num1, num2) {
  const first = num1.toString();
  const second = num2.toString();

  if (first.length !== second.length) return false;

  const firstFrequencyCounter = {};
  const secondFrequencyCounter = {};

  for (let num of first) {
    firstFrequencyCounter[num] = (firstFrequencyCounter[num] || 0) + 1;
  }

  for (let num of second) {
    secondFrequencyCounter[num] = (secondFrequencyCounter[num] || 0) + 1;
  }

  for (let key in firstFrequencyCounter) {
    if (firstFrequencyCounter[key] !== secondFrequencyCounter[key])
      return false;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));
