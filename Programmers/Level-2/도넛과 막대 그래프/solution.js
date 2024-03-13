function solution(edges) {
  const answer = new Array(4).fill(0);
  const graph = new Map();

  edges.forEach(([from, to]) => {
    if (!graph.has(from)) {
      graph.set(from, [0, 0]);
    }

    if (!graph.has(to)) {
      graph.set(to, [0, 0]);
    }

    graph.get(from)[0]++;
    graph.get(to)[1]++;
  });

  let totalGraphNumber = 0;
  // 생성한 정점
  for (const [vertex, edge] of graph) {
    if (edge[0] >= 2 && edge[1] === 0) {
      answer[0] = vertex;
      totalGraphNumber += edge[0];
      graph.delete(vertex);
      break;
    }
  }
  // 생성한 정점의 간선 삭제
  edges.forEach(([from, to]) => {
    if (from === answer[0]) {
      graph.get(to)[1]--;
    }
  });
  // 막대 모양 그래프
  for (const [vertex, edge] of graph) {
    if (edge[0] === 0) {
      answer[2]++;
      totalGraphNumber--;
      graph.delete(vertex);
    }
  }
  // 8자 모양 그래프
  for (const [vertex, edge] of graph) {
    if (edge[0] === 2 && edge[1] === 2) {
      answer[3]++;
      totalGraphNumber--;
      graph.delete(vertex);
    }
  }

  // 도넛 모양 그래프
  answer[1] = totalGraphNumber;

  return answer;
}
