function search(arr, val) {
  let minPointer = 0;
  let maxPointer = arr.length - 1;

  while (minPointer <= maxPointer) {
    let midPointer = Math.floor((maxPointer + minPointer) / 2);

    if (arr[midPointer] < val) {
      minPointer = midPointer + 1;
    } else if (arr[midPointer] > val) {
      maxPointer = midPointer - 1;
    } else {
      return midPointer;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
