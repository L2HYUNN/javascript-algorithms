const possibleBabblingList = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = 0;

  babbling.forEach((ba) => {
    let copiedBa = ba;

    possibleBabblingList.forEach((poBa) => {
      const baIndexOfPoBa = copiedBa.indexOf(poBa);

      if (baIndexOfPoBa !== -1) {
        copiedBa = copiedBa.replace(poBa, "1");
      }
    });

    if (!isNaN(+copiedBa)) answer++;
  });

  return answer;
}

console.log(solution(["eyma"]));

// console.log("aya".slice(0,3));

/**
String.prototype.indexOf()로 해당 문자 시작 인덱스 찾기
해당 문자 길이 이용하여 원본 string에서 splice.

각 문자열에서 해당 문자열이 최대 한 번씩만 존재하기 때문에 한 번씩만 확인해주면된다.
a
y
e
w
o
m
*/
