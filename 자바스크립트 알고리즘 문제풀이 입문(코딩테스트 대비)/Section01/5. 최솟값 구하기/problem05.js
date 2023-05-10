function solution(arr) {
  let min = arr[0];
  arr.forEach((num) => {
    if (num < min) min = num;
  });
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
