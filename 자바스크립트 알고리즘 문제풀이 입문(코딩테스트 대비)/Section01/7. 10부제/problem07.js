function solution(day, arr) {
  let result = 0;
  arr.forEach((num) => {
    if (num % 10 === day) result++;
  });

  return result;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
