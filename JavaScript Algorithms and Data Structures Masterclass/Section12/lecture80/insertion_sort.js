/**
 * @description
 * 삽입 정렬을 구현해보자.
 *
 * 삽입 정렬은 기준 element 좌우를 나누어 정렬을 실행한다.
 * 좌측은 항상 정렬되어있는 배열이다. target element를 결정하고 좌측에서 적절한 위치를 찾아 옮기자.
 *
 * @param {array} arr
 */
function insertionSort(arr) {
  let targetValue;

  for (let i = 1; i < arr.length; i++) {
    targetValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > targetValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = targetValue;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
