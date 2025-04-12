function solution(s) {
  const arr = s.split("");

  const start = ["[", "{", "("];
  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    arr.push(arr.shift());

    const stack = [];
    let isValid = true;

    for (let j = 0; j < arr.length; j++) {
      const current = arr[j];

      if (start.includes(current)) {
        stack.push(current);
      } else {
        if (stack.length === 0 || stack.pop() !== pairs[current]) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) {
      count++;
    }
  }

  return count;
}
