function solution(numbers) {
  const result = [];

  // numbers를 순회하며 이진트리 가능 여부를 조사
  numbers.forEach((number) => {
    // 주어진 10진수를 2진수로 변경후 조건 체크를 위해 배열로 만든다.
    let binary = number.toString(2).toString();

    // 이진 포화 트리를 만족하기 위해 필요한 0의 개수를 구한다.
    const currentNode = binary.length;
    // 이진 트리의 높이 log2(노드의 수 + 1)
    const treeHeight = Math.ceil(Math.log2(currentNode + 1));
    // 이진 트리의 총 노드의 수 2^(높이) - 1
    const totalNode = 2 ** treeHeight - 1;

    // 부족한 노드의 갯수만큼 더미 노드를 추가 한다.
    binary = "0".repeat(totalNode - currentNode) + binary;

    if (checkTree(binary, binary[Math.floor(binary.length / 2)])) {
      result.push(1);
    } else {
      result.push(0);
    }
  });
  // 이진 포화 트리를 만족하는지 확인하기 위한 함수
  function checkTree(tree, parent) {
    // 부모 노드가 존재하지 않는데 자식 노드가 존재하는 경우
    if (parent === "0" && tree.indexOf("1") !== -1) {
      return false;
    }
    // 모든 트리를 확인했을때 문제가 없으면 true를 반환
    if (tree.length === 0) {
      return true;
    }
    // 부모 노드의 인덱스
    const parentIndex = Math.floor(tree.length / 2);

    const leftTree = tree.slice(0, parentIndex);
    const rightTree = tree.slice(parentIndex + 1);

    return (
      checkTree(leftTree, leftTree[Math.floor(leftTree.length / 2)]) &&
      checkTree(rightTree, rightTree[Math.floor(rightTree.length / 2)])
    );
  }

  return result;
}

/**
주어진 숫자를 먼저 2진수로 변환시켜야 한다.

7의 경우 111

42의 경우 0101010

포화 이진트리는 항상 홀수개의 노드 수를 만족해야 한다.

2진수를 만들었을때 숫자의 갯수가 짝수인 경우 맨 앞에 0을 하나 붙일 수 있다.

-> 짝수개의 2진수는 포화 이진트리를 만족할 수 없다.

부모 노드가 0인 경우 이진트리로 표현할 수 없다.

왼쪽부터 첫 번쨰 노드를 0번이라고 할 때 홀수번째 노드는 항상 부모 노드이다.

홀수번째 부모 노드가 더미 노드라면 이진 트리를 표현할 수 없다.

----- 

이진 포화 노드를 만드는 과정에서 문제가 있었던 거 같다.

010뿐 아니라 000일때 또한 생각해주어야한다.

기본적으로 2진수 변환을 수행할때 앞에 0이 존재할 수 없다.

따라서 
*/
