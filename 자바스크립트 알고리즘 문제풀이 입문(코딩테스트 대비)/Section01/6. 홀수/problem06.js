function solution(arr) {
  const oddArr = arr.filter((num) => num % 2 === 1);
  const sum = oddArr.reduce((acc, cur) => acc + cur);
  const min = Math.min(...oddArr);
  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
