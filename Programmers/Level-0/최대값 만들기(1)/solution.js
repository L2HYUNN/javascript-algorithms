function solution(numbers) {
  numbers.sort((a, b) => a - b);

  var number = numbers.length;
  answer = numbers[number - 1] * numbers[number - 2];

  return answer;
}

console.log(solution([1, 5, 4, 3, 2]));
