const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, K] = input[0].split(" ").map((str) => +str);
  const visited = Array.from({ length: 100000 + 1 }, () => 0);

  class Queue {
    constructor() {
      this.queue = {};
      this.front = 0;
      this.rear = 0;
    }

    size() {
      return this.rear - this.front;
    }

    enqueue(value) {
      this.queue[this.rear] = value;
      this.rear++;
      return true;
    }

    dequeue() {
      if (this.size() === 0) {
        return undefined;
      }

      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;

      if (this.size() === 0) {
        this.front = 0;
        this.rear = 0;
      }

      return value;
    }
  }

  const result = BFS();

  function BFS() {
    const queue = new Queue();

    queue.enqueue([N, 0]);

    visited[N] = 1;

    while (queue.size()) {
      const [current, time] = queue.dequeue();

      if (current === K) {
        return time;
      }

      for (const next of [current - 1, current + 1, 2 * current]) {
        if (!visited[next] && next >= 0 && next <= 100000) {
          visited[next] = 1;
          queue.enqueue([next, time + 1]);
        }
      }
    }
  }

  return result;
}

/**
 * 1초 마다 아래의 3가지 중 한 가지의 방식으로 이동
 * X-1, X+1, 2X
 *
 * 즉 이동횟수가 가장 적은 방법이 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 된다.
 * -> BFS를 통해 가장 빠른 시간을 계산할 수 있다.
 *
 */

console.log(solution(input));
