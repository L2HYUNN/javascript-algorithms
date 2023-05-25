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
      if (compareNode.value === newNode.value) return undefined;

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
  find(val) {
    if (!this.root) return false;

    let foundNode = this.root;

    while (foundNode) {
      if (foundNode.value === val) return true;

      if (foundNode.value < val) {
        if (foundNode.right.value === val) return true;
        foundNode = foundNode.right;
      } else {
        if (foundNode.left.value === val) return true;
        foundNode = foundNode.left;
      }
    }

    return false;
  }
}

// 주어진 코드는 이진 검색 트리의 `find` 메서드를 구현하고 있습니다. 해당 로직을 한 줄씩 살펴보면서 검증해보겠습니다.

// 1. `find` 메서드는 찾을 값을 받아서, 이진 검색 트리에 해당 값이 존재하는지 확인합니다.
// 2. 이진 검색 트리가 비어있는 경우, 즉 `root`가 `null`인 경우, `false`를 반환합니다.
// 3. 이진 검색 트리가 비어있지 않은 경우, `foundNode` 변수를 `root`로 초기화합니다. 이 변수는 값을 찾기 위해 사용됩니다.
// 4. `foundNode`가 존재하는 동안 다음 작업을 반복합니다.
// 5. 현재 노드의 값(`foundNode.value`)과 찾을 값(`val`)을 비교합니다.
// 6. 현재 노드의 값이 찾을 값과 일치하는 경우, `true`를 반환합니다.
// 7. 현재 노드의 값이 찾을 값보다 작은 경우, 오른쪽 자식 노드(`foundNode.right`)가 존재하는지 확인합니다.
//    - 오른쪽 자식 노드의 값이 찾을 값과 일치하는 경우, `true`를 반환합니다.
//    - 오른쪽 자식 노드의 값이 찾을 값과 일치하지 않는 경우, 오른쪽 자식 노드를 현재 노드로 지정하여 다음 반복을 진행합니다.
// 8. 현재 노드의 값이 찾을 값보다 큰 경우, 왼쪽 자식 노드(`foundNode.left`)가 존재하는지 확인합니다.
//    - 왼쪽 자식 노드의 값이 찾을 값과 일치하는 경우, `true`를 반환합니다.
//    - 왼쪽 자식 노드의 값이 찾을 값과 일치하지 않는 경우, 왼쪽 자식 노드를 현재 노드로 지정하여 다음 반복을 진행합니다.
// 9. 모든 반복이 종료되었음에도 값이 찾아지지 않은 경우, `false`를 반환합니다.

// 주어진 코드는 이진 검색 트리의 `find` 메서드를 올바르게 구현하고 있습니다.
