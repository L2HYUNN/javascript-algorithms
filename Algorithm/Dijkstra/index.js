/**
 * # Dijkstra
 * 다익스트라 알고리즘 (Djikstra Algorithm)이란 그래프에서 최단 경로를 찾는 알고리즘이다.
 *
 * 다익스트라 알고리즘은 시작 노드에서 각 노드까지의 최단 경로를 찾아주며, 음의 가중치를 가지는 간선이 없을 떄에만 사용 가능하다.
 * 다익스트라 알고리즘은 "탐욕적인(greedy)" 방식을 사용하여 최적의 해를 찾는다.
 */

/**
 * ## Dijkstra Algorithm 구현 과정
 * 1. 시작 정점을 설정하고, 시작 정점의 거리 값을 0으로 설정한다. 시작 정점을 제외한 모든 정점의 거리 값을 무한대로 설정한다.
 * 2. 현재까지 방문하지 않은 정점 중에서 출발점에서 가장 가까운 정점을 선택한다.
 * 3. 해당 정점의 이웃 정점에 대해서, 출발점에서 해당 이웃 정점까지의 거리를 계산한다.
 * 4. 계산된 거리가 해당 이웃 정점의 현재 거리 값보다 작다면, 해당 이웃 정점의 거리 값을 갱신한다.
 * 5. 모든 정점을 방문할 때까지 위 과정을 반복한다.
 */

/**
 * ## Dijkstra Algorithm 구현
 * 여기서는 다익스트라 알고리즘 (Djikstra Algorithm)을 구현하기 위해 최소힙(우선순위 큐)을 사용한다.
 *
 * **우선순위 큐(Priority Queue)** 를 사용하면 더욱 빠르게 구현할 수 있다.
 *
 * 큐에서 뽑힌 정점은 해당 정점에서부터 가장 짧은 거리로 도달할 수 있는 정점 중 가장 가까운 정점이기 때문에
 * 이후의 경로는 해당 정점을 거쳐갈 필요가 없다.
 */

// Graph 클래스 정의
class Graph {
  constructor() {
    // 그래프의 노드와 간선 정보를 저장하는 데이터 구조
    this.nodes = [];
    this.edges = {};
  }

  // 그래프에 노드를 추가하는 메서드
  addNode(node) {
    // 노드 배열에 새로운 노드를 추가
    this.nodes.push(node);
    // 해당 노드에 연결된 간선을 저장할 배열 초기화
    this.edges[node] = [];
  }

  // 두 노드 간에 간선을 추가하는 메서드
  addEdge(node1, node2, weight) {
    // 양방향 간선으로 추가 (무방향 그래프)
    this.edges[node1].push({ node: node2, weight });
    this.edges[node2].push({ node: node1, weight });
  }

  // 다익스트라 알고리즘을 이용하여 최단 경로 정보를 계산하는 메서드
  dijkstra(startNode) {
    // 초기화
    const distances = {};
    const visited = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    // 모든 노드의 최단 거리를 무한대로 초기화
    this.nodes.forEach((node) => {
      distances[node] = Infinity;
      // 방문 여부 초기화
      visited[node] = false;
      // 이전 노드 초기화
      previous[node] = null;
    });

    // 시작 노드의 최단 거리를 0으로 설정
    distances[startNode] = 0;
    // 시작 노드를 우선순위 큐에 추가
    priorityQueue.enqueue(startNode, 0);

    // 우선순위 큐가 비어있을 때까지 반복
    while (!priorityQueue.isEmpty()) {
      // 우선순위 큐에서 우선순위가 가장 높은 노드를 꺼냄
      const currentNode = priorityQueue.dequeue().element;
      // 해당 노드를 방문했다고 표시
      visited[currentNode] = true;

      // 현재 노드에 연결된 모든 이웃 노드에 대해 처리
      this.edges[currentNode].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          // 현재 노드를 거쳐서 이웃 노드에 도달하는 거리 계산
          const newDistance = distances[currentNode] + neighbor.weight;

          // 새로 계산한 거리가 기존 거리보다 짧으면 업데이트
          if (newDistance < distances[neighbor.node]) {
            distances[neighbor.node] = newDistance;
            // 이전 노드 정보 업데이트
            previous[neighbor.node] = currentNode;
            // 우선순위 큐에 이웃 노드를 추가 (거리를 우선순위로 함)
            priorityQueue.enqueue(neighbor.node, newDistance);
          }
        }
      });
    }

    // 최단 경로 정보를 반환
    return { distances, previous };
  }

  // 시작 노드에서 목표 노드까지의 최단 경로를 계산하는 메서드
  getShortestPath(startNode, endNode) {
    const { distances, previous } = this.dijkstra(startNode);
    const path = [];
    let currentNode = endNode;

    // 목표 노드에서 시작 노드까지 역으로 최단 경로 추적
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    // 최단 경로를 반환
    return path;
  }
}

// PriorityQueue 클래스 정의
class PriorityQueue {
  constructor() {
    // 우선순위 큐를 배열로 구현
    this.items = [];
  }

  // 요소를 큐에 추가하는 메서드
  enqueue(element, priority) {
    // 새로운 요소를 생성하고 우선순위를 지정
    const queueElement = { element, priority };
    let added = false;

    // 우선순위에 따라 올바른 위치에 요소를 삽입
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    // 삽입되지 않은 경우 배열의 끝에 요소 추가
    if (!added) {
      this.items.push(queueElement);
    }
  }

  // 가장 우선순위가 높은 요소를 큐에서 제거하고 반환하는 메서드
  dequeue() {
    // 큐가 비어있는 경우 null 반환
    return this.isEmpty() ? null : this.items.shift();
  }

  // 큐가 비어있는지 여부를 반환하는 메서드
  isEmpty() {
    return this.items.length === 0;
  }
}

// 예시
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

// 시작 노드 'A'에서 목표 노드 'E'까지의 최단 경로 출력
console.log(graph.getShortestPath("A", "E")); // 출력: [ 'A', 'C', 'D', 'E' ]
