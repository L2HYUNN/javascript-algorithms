/**
 * 가장 큰 두 값을 찾아서 곱하세요~
 * sort를 이용해서 큰값부터 작은값으로 정렬하고
 * 인덱스가 0인 값과 1인 값을 곱합니다.
 * 그런데 말입니다.
 * -값 곱하기 -값일경우 정렬에서 가장 작은 값이지만
 * 곱하면 가장 큰수일수도 있습니다.
 *
 * 마지막 인덱스 값과 마지막 전의 인덱스 값을 곱한 값이 큰지
 * 인덱스가 0인 값과 1인 값의 곱이 큰지 비교하고
 * 큰 값(Math.max())을 리턴합니다.
 */
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
