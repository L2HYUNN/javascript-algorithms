const possibleBabblingList = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = 0;

  babbling.forEach((ba) => {
    let possibleBabblingLength = 0;

    possibleBabblingList.forEach((poBa) => {
      const baIndexOfPoBa = ba.indexOf(poBa);

      if (baIndexOfPoBa !== -1) {
        possibleBabblingLength += poBa.length;
      }
    });

    if (ba.length === possibleBabblingLength) answer++;
  });

  return answer;
}
