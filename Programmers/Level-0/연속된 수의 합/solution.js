function solution(num, total) {
  let sum;
  let counter = -10;

  if (num === 1) return [total];

  while (sum !== total) {
    const result = Array(num)
      .fill(counter)
      .map((num, idx) => num + idx);

    sum = result.reduce((acc, cur) => acc + cur);

    if (sum === total) return result;

    counter++;
  }
}

console.log(solution(3, 0));
