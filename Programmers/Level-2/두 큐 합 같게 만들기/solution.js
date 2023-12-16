function solution(queue1, queue2) {
  let [sum1, sum2] = [
    queue1.reduce((acc, cur) => acc + cur, 0),
    queue2.reduce((acc, cur) => acc + cur, 0),
  ];

  const half = (sum1 + sum2) / 2;

  const queue = [...queue1, ...queue2];

  let queue1Pointer = 0;
  let queue2Pointer = queue1.length;

  for (let counter = 0; counter < queue1.length * 3; counter++) {
    if (sum1 === half) {
      return counter;
    }

    if (sum1 > half) {
      sum1 -= queue[queue1Pointer % queue.length];
      queue1Pointer++;
      continue;
    }

    if (sum1 < half) {
      sum1 += queue[queue2Pointer % queue.length];
      queue2Pointer++;
    }
  }

  return -1;
}
