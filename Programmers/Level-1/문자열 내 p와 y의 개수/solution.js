function solution(s) {
  var answer = true;

  let numOfP = 0;
  let numOfY = 0;

  s.toLowerCase()
    .split("")
    .forEach((str) => {
      if (str === "p") numOfP++;
      if (str === "y") numOfY++;
    });

  answer = numOfP === numOfY;

  if (numOfP === 0 && numOfY === 0) answer = true;

  return answer;
}
