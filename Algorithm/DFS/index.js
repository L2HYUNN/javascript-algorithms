/**
 * # DFS
 * DFS(Depth-First-Search)는 깊이 우선 탐색이라고 부른다.
 * DFS는 이름에서 알 수 있듯이 깊은 부분을 우선으로 탐색하는 알고리즘이다.
 *
 * DFS를 이용하면 노드의 한 방향으로 깊게 탐색을 이어가다 더 이상 탐색할 노드가 없을 때,
 * 기존 노드로 되돌아와 다시 진행하는 방식으로 탐색을 이어갈 수 있다.
 *
 * DFS는 다음의 두 가지 방법을 이용하여 구현할 수 있다.
 *
 * 1. 재귀
 * 2. 스택 (반복문)
 */

/**
 * ## 재귀를 이용한 DFS (Recursive DFS)
 *
 * 동작 방식
 * 1. 방문 여부 기록을 위한 visited 배열을 생성한다, visted 배열은 false로 초기화한다.
 * 2. 노드를 방문할 때마다 해당 노드의 visted 배열 값을 true로 변경한다.
 * 3. 해당 노드(v)와 연결된 노드 중에 방문하지 않은 노드(node)이 있다면 방문하지 않은 노드(node)를
 *    시작점으로 하여 DFS를 다시 시작한다.
 */

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(6).fill(false);

function recursiveDFS(graph, v, visited) {
  visited[v] = true;

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
}

recursiveDFS(graph, 0, visited);
// 0 1 5 2 4 3

/**
 * ## 스택을 이용한 DFS(Iterative DFS)
 *
 * 동작 방식
 * 1. 스택에 시작 노드를 push 한다.
 * 2. 스택에서 노드를 pop하고 해당 노드(v)가 방문하지 않은 노드라면 방문처리 한다.
 * 3. 노드(v)와 연결된 노드 중에서 방문하지 않은 노드(node)가 있다면 stack에 push 한다.
 * 4. 스택의 길이가 0이 될 때까지 2, 3번 과정을 반복한다.
 */

function iterativeDFS(graph, v, visited) {
  const stack = [];
  stack.push(v);

  while (stack.length) {
    let v = stack.pop();

    if (!visited[v]) {
      visited[v] = true;

      for (let node of graph[v]) {
        if (!visited[node]) {
          iterativeDFS(graph, node, visited);
        }
      }
    }
  }
}

iterativeDFS(graph, 0, visited);
// 0 4 3 2 5 1

// stack을 이용했기 때문에 Recursive DFS 달리 역순으로 방문하였다.
// 문제에 따라 필요하다면 낮은 순서부터 처리되도록 구현하자.

/**
 * ## 스택을 사용한 DFS의 문제점
 * 자바스크립트에서 재귀를 이용한 DFS의 경우 재귀의 최대 깊이를 설정할 수 없다.
 * 따라서 이러한 문제를 해결하기 위해서는 스택을 이용한 DFS를 이용해야만 한다.
 *
 * Iterative DFS는 Recursive DFS와 달리 **부모 노드로 되돌아가는 로직** 이 존재하지 않는다.
 * 따라서 이러한 동작을 위해서는 Iterative DFS가 부모 노드로 돌아가는 로직을 추가해야만 한다.
 */

/**
 * ## 개선된 Iterative DFS
 * 부모 노드를 stack에 함께 표시해주는 방법을 이용하여 Iterative DFS를 개선할 수 있다.
 */

function improvedIterativeDFS(graph, visited) {
  const stack = [[0, null]];

  while (stack.length) {
    let [cur, parent] = stack.pop();

    if (visited[cur]) {
      continue;
    }

    stack.push([cur, parent]);

    visited[cur] = true;

    for (let node of graph[cur]) {
      if (!visited[node]) {
        stack.push([node, cur]);
      }
    }
  }
}

/**
 * ## DFS의 시간 복잡도
 * 노드의 수가 N, 간선의 수가 E인 그래프에서
 * 그래프가 인접 리스트로 표현되어 있다면 O(N + E)
 * 그래프가 인접 행렬로 표현되어 있다면 O(N^2)이다.
 *
 * 따라서 간선의 수가 적은 희소 그래프인 경우
 * 인접 리스트가 인접 행렬보다 시간적으로 유리하다.
 */

// 참고 https://chamdom.blog/dfs-using-js/
