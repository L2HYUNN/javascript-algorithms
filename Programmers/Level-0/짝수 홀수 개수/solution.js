function solution(num_list) {
  var result = [0, 0];
  num_list.forEach((number) => (number % 2 === 0 ? result[0]++ : result[1]++));

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
