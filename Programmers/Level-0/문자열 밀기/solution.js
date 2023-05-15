function solution(A, B) {
  if (A === B) return 0;

  let newString = A;

  for (let i = A.length - 1; i > 0; i--) {
    newString = A.slice(i) + A.slice(0, i);
    if (newString === B) return A.length - i;
  }

  return -1;
}

/**
 * 문자열을 밀어서 만들 수 있는 최대 케이스 length-1
 * 최대 케이스까지 반복문을 진행하여 만든 문자열과 두번째 문자열을 비교
 * hello
 * ohell 1
 * lohel 2
 * llohe 3
 * elloh 4
 */

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
