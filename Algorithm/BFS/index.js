/**
 * # BFS
 * BFS(Breath First Search)는 너비 우선 탐색이라고 부른다.
 * BFS는 시작 노드로부터 가까운 노드를 먼저 방문하고 멀리 떨어져 있는 노드를 나중에 방문하는 탐색 방법이다.
 *
 * DFS가 최대한 멀리 떨어져 있는 노드를 우선으로 탐색한다면
 * BFS는 그 반대로 가장 가까운 노드를 우선으로 탐색한다고 볼 수 있다.
 *
 * BFS를 구현하기 위해서는 선입선출 방식의 자료구조인 큐(Queue)를 사용하는 것이 일반적이다.
 *
 * 다른 언어와 달리 자바스크립트는 큐와 관련된 객체가 내장되어 있지 않기 때문에,
 * 직접 큐 자료구조를 구현할 필요가 있다.
 */

// 큐 (Queue)
class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    }

    return this.rear - this.front + 1;
  }

  enqueue(value) {
    if (this.size() === 0) {
      this.store["0"] = value;

      return true;
    }

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

/**
 * ## BFS 동작 방식
 * 1. 탐색 시작 노드를 큐에 삽입하고 방문 처리한다.
 * 2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.
 * 3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
 */

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(6).fill(false);
BFS(graph, 0, visited);
// 0 1 2 4 5 3

function BFS(graph, start, visited) {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;

  while (queue.size()) {
    const v = queue.dequeue();
    console.log(v);

    for (const node of graph[v]) {
      if (!visited[node]) {
        queue.enqueue(node);
        visited[node] = true;
      }
    }
  }
}
