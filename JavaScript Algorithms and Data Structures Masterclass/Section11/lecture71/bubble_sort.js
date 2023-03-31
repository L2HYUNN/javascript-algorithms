/**
 * @description
 * 버블 정렬을 구현해보자.
 *
 * 함수형 사고방식을 적용해보자.
 * arr를 직접 변경하는 부수효과를 없애야 한다.
 *
 * @param {array} arr
 */
function bubbleSort(arr) {
  let arrayCopy = [...arr];

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        arrayCopy = swap(arrayCopy, j, j + 1);
      }
    }
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
