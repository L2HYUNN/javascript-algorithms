const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  const map = new Array(R);

  class Queue {
    constructor() {
      this.store = {}; // 데이터를 저장하는 객체
      this.front = 0; // 첫 번째 데이터를 가리키는 포인터
      this.rear = 0; // 마지막 데이터를 가리키는 포인터
    }

    size() {
      // 큐에 데이터가 존재하지 않는 경우
      if (this.store[this.rear] === undefined) {
        return 0;
      }
      // 큐에 데이터가 존재하는 경우
      return this.rear - this.front + 1;
    }

    enqueue(value) {
      // 큐에 데이터가 존재하지 않는 경우
      if (this.size() === 0) {
        this.store["0"] = value;

        return true;
      }
      // 큐에 데이터가 존재하는 경우
      this.rear++;
      this.store[this.rear] = value;

      return true;
    }

    dequeue() {
      let temp = this.store[this.front];

      delete this.store[this.front];

      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;

        return temp;
      }

      this.front++;

      return temp;
    }
  }

  for (let r = 0; r < R; r++) {
    map[r] = input[r + 1].split("");
  }

  const targetLocation = [];
  const fireLocations = [];

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (map[r][c] === "J") {
        targetLocation.push(r);
        targetLocation.push(c);
      }

      if (map[r][c] === "F") {
        fireLocations.push([r, c]);
      }
    }
  }

  const direction = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const visited = Array.from({ length: R }, () => new Array(C).fill(false));
  const fireMap = Array.from({ length: R }, () =>
    new Array(C).fill(Number.MAX_SAFE_INTEGER)
  );

  fireBFS(map, fireLocations, fireMap);

  return BFS(map, targetLocation, visited);

  function fireBFS(graph, fires, visited) {
    const queue = new Queue();

    fires.forEach((fire) => {
      const [r, c] = fire;
      queue.enqueue([r, c, 0]);
      visited[r][c] = 0;
    });

    while (queue.size()) {
      const current = queue.dequeue();

      for (let i = 0; i < direction.length; i++) {
        const [nextRow, nextColumn] = [
          current[0] + direction[i][0],
          current[1] + direction[i][1],
        ];

        if (
          nextRow < 0 ||
          nextRow >= R ||
          nextColumn < 0 ||
          nextColumn >= C ||
          graph[nextRow][nextColumn] === "#" ||
          visited[nextRow][nextColumn] <= current[2]
        ) {
          continue;
        }

        visited[nextRow][nextColumn] = current[2] + 1;
        queue.enqueue([nextRow, nextColumn, current[2] + 1]);
      }
    }
  }

  function BFS(graph, v, visited) {
    const queue = new Queue();

    const [r, c] = v;
    queue.enqueue([r, c, 0]);
    visited[r][c] = true;

    while (queue.size()) {
      const current = queue.dequeue();

      if (
        current[0] === 0 ||
        current[0] === R - 1 ||
        current[1] === 0 ||
        current[1] === C - 1
      ) {
        return current[2] + 1;
      }

      for (let i = 0; i < direction.length; i++) {
        const [nextRow, nextColumn] = [
          current[0] + direction[i][0],
          current[1] + direction[i][1],
        ];

        if (
          nextRow < 0 ||
          nextRow >= R ||
          nextColumn < 0 ||
          nextColumn >= C ||
          graph[nextRow][nextColumn] === "#" ||
          visited[nextRow][nextColumn] ||
          fireMap[nextRow][nextColumn] <= current[2]
        ) {
          continue;
        }

        visited[nextRow][nextColumn] = true;
        queue.enqueue([nextRow, nextColumn, current[2] + 1]);
      }
    }

    return "IMPOSSIBLE";
  }
}

console.log(solution(input));
