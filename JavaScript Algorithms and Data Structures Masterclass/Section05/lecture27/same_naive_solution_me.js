function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const new_arr = arr1.map((v) => v ** 2);

  arr2.sort((a, b) => a - b);
  new_arr.sort((a, b) => a - b);

  return new_arr.every((v, i) => arr2[i] === v);
}

console.log(same([1, 2, 3, 2], [9, 9, 1, 4]));
