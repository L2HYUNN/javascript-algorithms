function permute(nums) {
  const result = [];
  const permutation = [];
  const used = Array.from({ length: nums.length }, () => false);

  function backtrack() {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      permutation.push(nums[i]);

      backtrack();

      permutation.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}

const numbers = [1, 2, 3];
const allPermutations = permute(numbers);
console.log(allPermutations);
