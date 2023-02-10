function maxSubarraySum(arr, num) {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
