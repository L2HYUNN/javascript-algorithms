function countUniqueValues(arr) {
  const uniqueValues = [...new Set(arr)];
  return uniqueValues.length;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
