function solution(array) {
  array.sort((a, b) => a - b); // TODO: sort 함수 더 정확히 공부하기
  var answer = array[parseInt(array.length / 2)];
  return answer;
}
