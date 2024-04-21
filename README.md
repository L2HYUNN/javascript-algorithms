# JavaScript Study

자바스크립트를 이용한 알고리즘과 데이터 구조를 공부하며 작성한 코드를 기록합니다.

## List

- JavaScript Algorithms and Data Structures Masterclass
- 자바스크립트 알고리즘 문제풀이 입문(코딩테스트 대비)
- Programmers
- Baekjoon

## Handbook

### 이중 배열

```js
let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
let arr2 = Array.from({ length: n }, () => Array(n).fill(0));
let arr3 = Array.from(Array(length), () => Array(n).fill(0));
```

- [가장 많이 받은 선물](https://github.com/L2HYUNN/javascript-algorithms/tree/main/Programmers/Level-1/%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EB%B0%9B%EC%9D%80%20%EC%84%A0%EB%AC%BC)

### 조합

```js
function combination(arr, k) {
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
```

### 중복 조합

```js
function duplicateCombination(arr, k) {
  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i, path);
      path.pop();
    }
  }

  const result = [];
  backtrack(0, []);

  return result;
}
```

### 순열

```js
function permutation(arr, k) {
  function backtrack(path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (path.includes(arr[i])) continue;
      path.push(arr[i]);
      backtrack(path);
      path.pop();
    }
  }

  const result = [];
  backtrack([]);

  return result;
}
```

### 중복 순열

```js
function duplicatePermutation(arr, k) {
  function backtrack(path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path);
      path.pop();
    }
  }

  const result = [];
  backtrack([]);

  return result;
}
```

### 이진 탐색
```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  
        } else if (arr[mid] < target) {
            left = mid + 1;  
        } else {
            right = mid - 1;  
        }
    }

    return -1;  
}

```

### 문자 정렬
```js
// 문자열 오름차순 정렬
strArray.sort();

// 문자열 내림차순 정렬
strArray.sort().reverse();

// 숫자 오름차순 정렬
numArray.sort((a, b) => a - b);

// 숫자 내림차순 정렬
numArray.sort((a, b) => b - a);
```