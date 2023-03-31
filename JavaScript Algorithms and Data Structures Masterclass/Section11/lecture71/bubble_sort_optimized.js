/**
 * @description
 * 버블 정렬을 최적화 해보자.
 *
 * 버블 정렬은 반복문이 실행되면서 인접해 있는 값들 하나 하나를 비교 한다.
 * 결과적으로 한 번의 반복으로 가장 큰 값이 우측으로 이동하게 된다.
 *
 * 정렬 과정중에 만약 먼저 정렬이 끝난다면?
 * 그럼에도 버블 정렬 알고리즘은 배열의 길이만큼 비교 연산을 실행한다.
 *
 * 따라서 우리는 정렬이 끝난 때를 캐치하여 버블 정렬 알고리즘을 먼저 종료시킬 수 있다.
 *
 * @param {array} arr
 */
function bubbleSort(arr) {
  let arrayCopy = [...arr];

  for (let i = arr.length; i > 0; i--) {
    let isSorted = true;

    for (let j = 0; j < i - 1; j++) {
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        arrayCopy = swap(arrayCopy, j, j + 1);
        isSorted = false;
      }
    }

    if (isSorted) break;
  }

  return arrayCopy;
}

function swap(arr, idx1, idx2) {
  const arrayCopy = [...arr];
  const temp = arrayCopy[idx2];
  arrayCopy[idx2] = arrayCopy[idx1];
  arrayCopy[idx1] = temp;

  return arrayCopy;
}

console.log(bubbleSort([5, 15, 2, 17, 9, 10]));
