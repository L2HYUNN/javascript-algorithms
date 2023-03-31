/**
 * @description
 * 선택 정렬을 구현해보자.
 *
 * 선택 정렬의 포인트는 최솟값을 구하는 것이다.
 * 각 요소들을 비교하여 최솟값을 배열의 맨 앞에 배치시키자.
 *
 * @param {array} arr
 */
function selectionSort(arr) {
  let arrayCopy = [...arr];

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arrayCopy.length; j++) {
      if (arrayCopy[j] < arrayCopy[min]) min = j;
    }

    arrayCopy = swap(arrayCopy, i, min);
  }

  return arrayCopy;
}

function swap(arr, idx1, idx2) {
  const arrCopy = [...arr];
  const temp = arrCopy[idx1];

  arrCopy[idx1] = arrCopy[idx2];
  arrCopy[idx2] = temp;

  return arrCopy;
}

console.log(selectionSort([5, 15, 10, 3, 27, 35]));
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
