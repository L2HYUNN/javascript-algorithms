/**
 * @description
 * binarySearch를 구현하기 위해서는 어떻게 해야할까?
 *
 * 전제는 배열이 정렬되어 있다는 것이다. (sorted array)
 * 정렬되어있는 배열의 중간지점을 찾는다. (find center value of array)
 *
 * 1. 중간 값(mid)과 비교하여 target이 크다면 중간값 오른쪽에 target이 존재한다.
 * 2. 중간 값(mid)과 비교하여 target이 작다면 중간값 왼쪽에 target이 존재한다.
 *
 * 1의 경우 firstIndex를 mid+1로 설정한다.
 * 2의 경우 lastIndex를 mid-1로 설정한다.
 *
 * 위의 과정을 반복하여 binarySearch를 구현하자.
 *
 * @param {array} arr
 * @param {number} target
 *
 * @returns {number}
 */
function binarySearch(arr, target) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let midIndex = Math.floor(lastIndex / 2);

  while (arr[midIndex] !== target && firstIndex <= lastIndex) {
    if (arr[midIndex] < target) firstIndex = midIndex + 1;
    if (arr[midIndex] > target) lastIndex = midIndex - 1;

    midIndex = Math.floor((firstIndex + lastIndex) / 2);
  }

  return arr[midIndex] === target ? midIndex : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
