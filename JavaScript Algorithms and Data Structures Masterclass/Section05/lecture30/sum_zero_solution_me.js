function sumZero(arr) {
  const sumZeroCounter = {};
  const answer = [];

  arr.forEach((v) => {
    const absValue = Math.abs(v);
    sumZeroCounter[absValue] = (sumZeroCounter[absValue] || 0) + 1;
  });

  const asc_key = Object.keys(sumZeroCounter).sort((a, b) => b - a);

  for (let key of asc_key) {
    if (sumZeroCounter[key] === 2) {
      answer.push(-key);
      answer.push(+key);
      break;
    }
  }

  return answer;
}

function solution() {
  return sumZero([-4, -3, -2, -1, 0, 1, 2, -4]);
}

console.log(solution());
