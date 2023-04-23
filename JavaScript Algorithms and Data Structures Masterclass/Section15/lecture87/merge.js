function merge(arr1, arr2) {
  let result = [];
  let firstArrPointer = 0;
  let secondArrPointer = 0;

  while (arr1.length > firstArrPointer && arr2.length > secondArrPointer) {
    if (arr1[firstArrPointer] > arr2[secondArrPointer]) {
      result = [...result, arr2[secondArrPointer]];
      secondArrPointer++;
    } else {
      result = [...result, arr1[firstArrPointer]];
      firstArrPointer++;
    }
  }

  while (arr1.length > firstArrPointer) {
    result = [...result, arr1[firstArrPointer]];
    firstArrPointer++;
  }

  while (arr2.length > secondArrPointer) {
    result = [...result, arr2[secondArrPointer]];
    secondArrPointer++;
  }

  return result;
}

console.log(merge([100, 200], [1, 2, 3, 5, 6]));
