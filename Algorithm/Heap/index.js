/**
 * # Heap
 * 힙(Heap)은 특정한 규칙을 가진 이진 트리 형태의 자료구조로, 주로 우선순위 큐를 구현하는 데 사용된다.
 *
 * 힙은 각 노드가 특정한 순서나 우선순위를 가지며, 부모 노드와 자식 노드 간의 관계가 정의되어 있다.
 *
 * 이진 힙은 보통 최대 힙(Max Heap)과 최소 힙(Min Heap)으로 나뉜다.
 */

/**
 * ## 최대 힙(Max Heap)과 최소 힙(Min Heap)
 * 최대 힙(Max Heap):
 * - 각 노드의 값은 그 자식 노드의 값보다 크거나 같아야 한다.
 * - 루트 노드가 가장 큰 값을 가진다.
 *
 * 최소 힙(Min Heap):
 * - 각 노드의 값은 그 자식 노드의 값보다 작거나 같아야 한다.
 * - 루트 노드가 가장 작은 값을 가진다.
 */

/**
 * ## Heap의 구현
 * 힙은 배열을 이용하여 완전 이진 트리 형태로 구현한다.
 * 힙의 경우 보통의 완전 이진 트리와 다르게 반정렬 상태(느슨한 정렬 상태)를 유지한다.
 *
 * 배열을 사용할때 편의를 위해 index 0번을 사용하지 않는 방법을 이용하여 힙을 구현해볼 것이다.
 *
 * class Heap {
 *  constructor() {
 *    this.heap = [null]; // 첫 원소 사용 X
 *  }
 * }
 *
 * 이때 힙의 부모와 자식 간에 다음과 같은 관계가 성립한다.
 *
 * - 왼쪽 자식의 index = 부모 index * 2
 * - 오른쪽 자식의 index = (부모 index * 2) + 1
 * - 부모의 index = Math.floor(자식의 인덱스 / 2);
 */

/**
 * ## Heap의 insert
 * 1. 마지막 노드에 값을 push 한다.
 * 2. 재귀나 반복문을 통해 부모 노드와 값을 비교하면서 위치 교환을 실행하여 정렬한다.
 *
 * 우리는 여기서 최소힙을 구현하였을때의 방법을 살펴볼 것이다.
 * (최대힙의 경우 반대 과정을 통해 구현할 수 있다.)
 */

// 최소힙을 이용한 Heap의 push 메소드
class Heap {
  constructor() {
    this.heap = [null]; // 첫 원소는 사용 X
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    // 최소합으로 힙을 구현하고 있으므로, 부모 노드가 제일 작은 값을 가져야 한다.
    // 즉, 부모 노드가 현재 노드보다 큰 지 확인하고 재정렬을 반복한다.
    while (
      currentIndex > 1 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      // 구조분해 할당을 이용해 부모와 자식의 위치를 변경한다.
      // 추후 swap 함수로 따로 분리한다.
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
}

/**
 * ## Heap의 delete
 * 1. 최소힙, 최대힙과 상관없이 루트 노드를 먼저 삭제한다.
 * 2. 배열에 제일 마지막에 있는 노드를 새로운 루트 노드로 설정한다.
 * 3. 루트 노드부터 재정렬을 실행한다.
 */

class Heap {
  constructor() {
    this.heap = [null];
  }

  pop() {
    // 배열의 Index 0을 제외하므로 root는 heap[1]이다.
    const min = this.heap[1];
    // heap의 길이가 2보다 작거나 같다면 기본 heap 상태로 초기화 한다.
    if (this.heap.length <= 2) {
      this.heap = [null];

      return min;
    }
    // heap의 마지막 요소를 root에 위치시킨다.
    this.heap[1] = this.heap.pop();
    // heap 재정렬을 위한 index 설정
    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;
    // 왼쪽 자식이 없다면 오른쪽 자식도 존재하지 않는 루트만 있는 상태이다.
    if (!this.heap[leftIndex]) {
      return min;
    }
    // 위의 조건이 있기 때문에 오른쪽 자식이 없다면 왼쪽 자식 하나만 있다는 것을 의미한다.
    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[currentIndex]) {
        [this.heap[leftIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[leftIndex],
        ];
      }

      return min;
    }
    // 왼쪽, 오른쪽 자식이 모두 있는 경우
    // 현재 노드와 크기를 비교하여 정렬을 실행한다.
    while (
      this.heap[leftIndex] < this.heap[currentIndex] ||
      this.heap[rightIndex] < this.heap[currentIndex]
    ) {
      // 왼쪽, 오른쪽 중에 가장 작은 노드와 위치를 변경한다.
      const minIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;

      [this.heap[minIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[minIndex],
      ];

      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return min;
  }
}

// 전체 코드
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(left, right) {
    [this.heap[left], this.heap[right]] = [this.heap[right], this.heap[left]];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) {
      this.heap = [null];

      return min;
    }

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    if (!this.heap[leftIndex]) {
      return min;
    }

    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[currentIndex]) {
        this.swap(leftIndex, currentIndex);
      }

      return min;
    }

    while (
      this.heap[leftIndex] < this.heap[currentIndex] ||
      this.heap[rightIndex] < this.heap[currentIndex]
    ) {
      const minIndex =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;

      this.swap(minIndex, currentIndex);

      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return min;
  }
}
