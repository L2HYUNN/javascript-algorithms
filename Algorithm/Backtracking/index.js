/*
# 백트랙킹
- 백트랙킹은 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 시점에서 후보를 포기하는 방법

# 백트랙킹과 깊이 우선 탐색
- 백트랙킹은 깊이 우선 탐색과 유사하다.
- 백트랙킹은 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 시점에서 후보를 포기하는 방법이다.
- 깊이 우선 탐색은 모든 노드를 방문하면서 탐색하는 알고리즘이다.

# 백트랙킹의 구현
- 백트랙킹은 보통 재귀 함수를 이용해서 구현한다.
- 재귀 함수를 이용해서 해결책의 후보를 구축하다가 가능성이 없다고 판단되는 시점에서는 즉시 이전 단계로 돌아가서 다른 해결책의 후보를 구축한다.
*/

// 조합
// Recursive
function recursiveCombination(arr, selectNum) {
  let result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = recursiveCombination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);

    result.push(...combineFix);
  });

  return result;
}
// Recursive 2
function combinations(arr, k) {
  if (k === 0 || arr.length < k) return [[]];
  if (arr.length === k) return [arr];

  const [first, ...rest] = arr;
  const withFirst = combinations(rest, k - 1).map((c) => [first, ...c]);
  const withoutFirst = combinations(rest, k);

  return [...withFirst, ...withoutFirst];
}

// backtracking
function backtrakingCombination(arr, k) {
  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  const result = [];
  backtrack(0, []);

  return result;
}

// bitwise
function bitwiseCombination(arr, k) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < 1 << n; i++) {
    if (countBits(i) === k) {
      result.push(arr.filter((_, idx) => i & (1 << idx)));
    }
  }

  return result;
}

function countBits(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

// bitwise 2
function bitwiseCombination2(arr, k) {
  let result = [];
  let subsets = 1 << arr.length;
  for (let i = 0; i < subsets; i++) {
    let subset = [];
    for (let j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    if (subset.length === k) {
      result.push(subset);
    }
  }
  return result;
}

// 중복 조합
function duplicateCombination(arr, k) {
  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i, path); // Not i + 1 because we can reuse the same element
      path.pop();
    }
  }

  const result = [];
  backtrack(0, []);

  return result;
}

// 순열
function permutations(arr) {
  function backtrack(path) {
    if (path.length === arr.length) {
      result.push([...path]);
      return;
    }

    arr.forEach((item) => {
      if (!path.includes(item)) {
        path.push(item);
        backtrack(path);
        path.pop();
      }
    });
  }

  const result = [];
  backtrack([]);
  return result;
}

// 중복 순열
function duplicatePermutations(arr, k) {
  function backtrack(path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    arr.forEach((item) => {
      path.push(item);
      backtrack(path);
      path.pop();
    });
  }

  const result = [];
  backtrack([]);
  return result;
}
