/**
 * @description
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 *
 * Examples:
 *
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * Your solution MUST have AT LEAST the following complexities:
 *
 * Time Complexity - O(N + M)
 *
 * Space Complexity - O(1)
 */
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  let firstStringPointer = 0;
  let secondStringPointer = 0;

  while (
    firstStringPointer < str1.length &&
    secondStringPointer < str2.length
  ) {
    if (str1[firstStringPointer] === str2[secondStringPointer])
      firstStringPointer++;
    else secondStringPointer++;
  }

  return firstStringPointer === str1.length ? true : false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
