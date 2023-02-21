function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([], 5));
console.log(linearSearch([1, 2, 3, 4, 5], 5));
