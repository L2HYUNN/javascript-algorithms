function solution(array, n) {
  var abs = array.map((v) => Math.abs(n - v));
  var abs_index = abs.findIndex((v) => v === Math.min(...abs));
  return array[abs_index];
}

console.log(solution([3, 10, 12, 28], 20));
console.log(solution([1], 1));
