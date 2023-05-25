class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let compareNode = this.root;
    while (compareNode) {
      if (compareNode.value < newNode.value) {
        if (!compareNode.right) {
          compareNode.right = newNode;
          return this;
        }
        compareNode = compareNode.right;
      } else {
        if (!compareNode.left) {
          compareNode.left = newNode;
          return this;
        }
        compareNode = compareNode.left;
      }
    }
  }
}

// 주어진 코드는 이진 검색 트리의 `insert` 메서드를 구현하고 있습니다. 해당 로직을 한 줄씩 살펴보면서 검증해보겠습니다.

// 1. `insert` 메서드는 새로운 값을 받아서 `Node` 클래스의 인스턴스인 `newNode`를 생성합니다.
// 2. 이진 검색 트리가 비어있는 경우, 즉 `root`가 `null`인 경우, `newNode`를 `root`로 지정하고 메서드를 종료합니다.
// 3. 이진 검색 트리가 비어있지 않은 경우, `compareNode` 변수를 `root`로 초기화합니다. 이 변수는 삽입할 위치를 찾기 위해 사용됩니다.
// 4. `compareNode`가 존재하는 동안 다음 작업을 반복합니다.
// 5. 현재 노드의 값(`compareNode.value`)과 삽입할 값(`newNode.value`)을 비교합니다.
// 6. 현재 노드의 값이 삽입할 값보다 작은 경우, 오른쪽 자식 노드(`compareNode.right`)가 존재하는지 확인합니다.
//    - 오른쪽 자식 노드가 없는 경우, 새로운 노드를 오른쪽 자식으로 지정하고 메서드를 종료합니다.
//    - 오른쪽 자식 노드가 있는 경우, 오른쪽 자식 노드를 현재 노드로 지정하여 다음 반복을 진행합니다.
// 7. 현재 노드의 값이 삽입할 값보다 크거나 같은 경우, 왼쪽 자식 노드(`compareNode.left`)가 존재하는지 확인합니다.
//    - 왼쪽 자식 노드가 없는 경우, 새로운 노드를 왼쪽 자식으로 지정하고 메서드를 종료합니다.
//    - 왼쪽 자식 노드가 있는 경우, 왼쪽 자식 노드를 현재 노드로 지정하여 다음 반복을 진행합니다.

// 주어진 코드는 이진 검색 트리의 삽입 로직을 올바르게 구현하고 있습니다.
