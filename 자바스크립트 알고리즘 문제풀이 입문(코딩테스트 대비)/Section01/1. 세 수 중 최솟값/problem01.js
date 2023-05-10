function solution(a, b, c) {
  var numbers = [a, b, c];
  var min = 100;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

console.log(solution(6, 5, 11));
