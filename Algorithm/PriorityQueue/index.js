/**
 * # Priority Queue (우선순위 큐)
 * 우선순위 큐(Priority Queue)는 각 요소가 특정 우선순위를 가지고 있어서
 * 요소의 추가나 삭제 시 우선순위에 따라 처리되는 자료구조입니다.
 *
 * 우선순위 큐는 배열과 힙(Heap)을 이용하여 구현할 수 있습니다.
 */

/**
 * ## 배열을 이용한 우선순위 큐
 * 배열을 이용한 우선순위 큐는 배열을 사용하여 요소를 지정하고, 우선순위에 따라 정렬된 상태로 유지합니다.
 * 새로운 요소를 추가할 때마다 배열을 순회하며 올바른 위치에 삽입합니다.
 *
 * 장점
 * - 간단한 구현에 적합합니다.
 * - 작은 크기의 데이터셋에서는 괜찮은 성능을 보일 수 있습니다.
 *
 * 단점
 * - 삽입 연산의 시간 복잡도가 O(n)으로, 배열의 크기에 따라 성능이 저하될 수 있습니다.
 * - 삭제 연산 역시 O(n)으로, 가장 우선순위가 높은 요소를 찾고 배열을 재정렬해야 합니다.
 */

// PriorityQueueArray 클래스 정의
class PriorityQueueArray {
  // 생성자: 우선순위 큐의 초기 상태를 설정
  constructor() {
    // items 배열은 큐의 요소들을 저장하는데 사용됩니다.
    this.items = [];
  }

  // 요소를 큐에 추가하는 메서드
  enqueue(element, priority) {
    // 새로운 요소를 생성하고 우선순위를 지정합니다.
    const queueElement = { element, priority };
    // 추가 여부를 나타내는 변수
    let added = false;

    // 배열을 순회하면서 우선순위에 따라 요소를 삽입합니다.
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        // 우선순위가 높은 경우 해당 위치에 요소를 삽입
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    // 배열을 순회하며 삽입하지 않은 경우, 배열의 끝에 요소를 추가
    if (!added) {
      this.items.push(queueElement);
    }
  }

  // 가장 우선순위가 높은 요소를 큐에서 제거하고 반환하는 메서드
  dequeue() {
    // 큐가 비어있는 경우 null 반환
    return this.isEmpty() ? null : this.items.shift().element;
  }

  // 큐의 맨 앞에 있는 요소를 반환하는 메서드 (제거하지 않음)
  front() {
    // 큐가 비어있는 경우 null 반환
    return this.isEmpty() ? null : this.items[0].element;
  }

  // 큐가 비어있는지 여부를 반환하는 메서드
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐에 있는 요소의 개수를 반환하는 메서드
  size() {
    return this.items.length;
  }
}

// 예시
const priorityQueue = new PriorityQueueArray();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

// 예시 출력
console.log(priorityQueue.front()); // 출력: 'Task 2'
console.log(priorityQueue.dequeue()); // 출력: 'Task 2'
console.log(priorityQueue.size()); // 출력: 2

/**
 * ## 힙을 이용한 우선순위 큐
 * 힙을 이용한 우선순위 큐는 이진 힙(Binary Heap)을 사용하여 구현합니다.
 * 삽입, 삭제 연산은 특정한 규칙에 따라 노드를 추가하거나 제거하므로 시간 복잡도가 향상됩니다.
 *
 * 장점
 * - 삽입, 삭제 연산의 시간 복잡도가 O(logN)으로 상대적으로 빠릅니다.
 * - 큰 크기의 데이터셋에서도 효율적으로 동작합니다.
 *
 * 단점
 * - 코드가 조금 더 복잡하며, 힙 구조를 유지하기 위한 추가적인 작업이 필요합니다.
 * - 특히, 일반 배열에 비해 상대적으로 메모리 소모량이 높습니다.
 */

// PriorityQueueHeap 클래스 정의
class PriorityQueueHeap {
  // 생성자: 힙을 표현할 배열을 초기화
  constructor() {
    this.heap = [];
  }

  // 우선순위 큐에 요소를 추가하는 메서드
  enqueue(element, priority) {
    // 새로운 요소를 생성하고 우선순위를 지정
    const queueElement = { element, priority };
    // 힙에 요소를 추가하고 추가된 요소를 올바른 위치로 이동시킴
    this.heap.push(queueElement);
    this.heapifyUp();
  }

  // 우선순위 큐에서 가장 높은 우선순위를 가진 요소를 제거하고 반환하는 메서드
  dequeue() {
    // 우선순위 큐가 비어있는 경우 null 반환
    if (this.isEmpty()) {
      return null;
    }

    // 가장 높은 우선순위를 가진 요소를 저장
    const highestPriorityElement = this.heap[0].element;
    // 마지막 요소를 가져와 루트로 이동시켜 힙 속성을 유지
    const last = this.heap.pop();

    // 힙이 비어있지 않은 경우
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    // 가장 높은 우선순위를 가진 요소 반환
    return highestPriorityElement;
  }

  // 힙 속성을 유지하며 요소를 올바른 위치로 이동시키는 메서드 (삽입 시 사용)
  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      // 현재 노드의 부모 노드 인덱스 계산
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      // 현재 노드의 우선순위가 부모 노드보다 작으면 교환
      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // 힙 속성을 유지하며 요소를 올바른 위치로 이동시키는 메서드 (삭제 시 사용)
  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      // 현재 노드의 왼쪽 자식과 오른쪽 자식의 인덱스 계산
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let highestPriorityIndex = currentIndex;

      // 왼쪽 자식이 현재 노드보다 우선순위가 높으면 해당 인덱스 저장
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].priority <
          this.heap[highestPriorityIndex].priority
      ) {
        highestPriorityIndex = leftChildIndex;
      }

      // 오른쪽 자식이 현재 노드나 왼쪽 자식보다 우선순위가 높으면 해당 인덱스 저장
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].priority <
          this.heap[highestPriorityIndex].priority
      ) {
        highestPriorityIndex = rightChildIndex;
      }

      // 현재 노드의 우선순위가 자식 노드보다 높으면 교환
      if (highestPriorityIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[highestPriorityIndex]] = [
          this.heap[highestPriorityIndex],
          this.heap[currentIndex],
        ];
        currentIndex = highestPriorityIndex;
      } else {
        break;
      }
    }
  }

  // 우선순위 큐가 비어있는지 확인하는 메서드
  isEmpty() {
    return this.heap.length === 0;
  }
}

// 예시
const priorityQueueHeap = new PriorityQueueHeap();
priorityQueueHeap.enqueue("Task 1", 3);
priorityQueueHeap.enqueue("Task 2", 1);
priorityQueueHeap.enqueue("Task 3", 2);

// 예시 출력
console.log(priorityQueueHeap.dequeue()); // 출력: 'Task 2'
console.log(priorityQueueHeap.isEmpty()); // 출력: false
