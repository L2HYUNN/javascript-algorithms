function swap(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr) {
  const start = 0;

  let pivotIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(pivot([4, 1, 2, 8, 5, 7, 6, 3]));
