function isIncludeNumThree(num) {
  return String(num).includes("3");
}

function isMultipleOfThree(num) {
  return num % 3 === 0;
}

function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    answer++;

    while (true) {
      if (isIncludeNumThree(answer) || isMultipleOfThree(answer)) {
        answer++;
        continue;
      }
      break;
    }
  }

  return answer;
}

console.log(solution(10));
console.log(solution(15));
console.log(solution(40));

/**
 * 1 2
 *  */
