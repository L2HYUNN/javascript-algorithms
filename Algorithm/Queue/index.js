/**
 * # Queue
 * 큐(Queue)는 선입선출(FIFO: First-In First-Out) 구조를 가지는 자료구조이다.
 *
 * 큐는 뒤(rear)에서 데이터가 삽입되고 앞(front)에서 데이터가 하나씩 제거되는 구조로 되어 있다.
 * 큐에서 데이터의 삽입이 일어나는 곳을 후단(rear), 데이터의 삭제가 일어나는 곳을 전단(front)라고 한다.
 *
 * 큐가 필요한 상황은 다음과 같이 생각할 수 있다.
 * - 데이터를 순서대로 처리해야 할 필요가 있는 상황
 * - 데이터를 한 곳에서 다른 한 곳으로 이동시키려고 할
 */

/**
 * ## 자바스크립트에서의 큐(Queue)
 * 자바와 파이썬같은 언어는 내장 라이브러리에서 큐를 지원하고 있다.
 * 하지만 자바스크립트는 내장 라이브러리로 지원되지 않기 때문에 큐를 사용하기 위해서는 따로 구현해야 할 필요가 있다.
 *
 * 우리는 class 문법을 사용하여 큐를 구현해볼 것이다.
 *
 * 자바스크립트의 배열(Array)를 이용하면 큐를 어느정도 구현할 수 있지만
 * 요소의 삭제(shift) 과정에서 배열의 재정렬이 필요하기 때문에 시간 복잡도가 증가하는 문제가 있다.
 *
 * 따라서 시간 복잡도를 고려해야하는 경우 큐(Queue)를 직접 구현해야 할 필요가 있다.
 */

// 큐(Queue)의 구현
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

class OptimizedQueue {
  constructor() {
    this.store = {}; // Stores the queue elements
    this.front = 0; // Pointer to the front of the queue
    this.rear = 0; // Pointer to the rear of the queue
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(value) {
    this.store[this.rear] = value;
    this.rear++;
    return true;
  }

  dequeue() {
    if (this.size() === 0) {
      return undefined; // Return undefined if the queue is empty
    }

    const value = this.store[this.front];
    delete this.store[this.front];
    this.front++;

    // Reset pointers if the queue is empty
    if (this.size() === 0) {
      this.front = 0;
      this.rear = 0;
    }

    return value;
  }
}
