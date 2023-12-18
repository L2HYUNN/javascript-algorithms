function solution(N, road, K) {
  // 거리 계산을 위한 배열 / index 0는 사용하지 않는다.
  const distances = Array(N + 1).fill(Infinity);
  // 그래프를 위한 배열
  const graph = Array.from({ length: N + 1 }, () => []);
  // 인접 리스트 방식을 이용해 그래프를 표현한다.
  for (let [a, b, c] of road) {
    // 연결된 리스트, 거리를 객체로 표현한다.
    graph[a].push({ to: b, dist: c });
    graph[b].push({ to: a, dist: c });
  }
  // 경로 확인을 위한 큐
  const queue = [{ to: 1, dist: 0 }];
  // 1번 노드는 항상 거리가 0이다.
  distances[1] = 0;

  while (queue.length) {
    const { to } = queue.pop();
    // 해당 노드와 연결된 다른 노드를 확인해 가장 짧은 경로를 계산한다.
    graph[to].forEach((next) => {
      // 지금 까지의 거리 + 다음 노드의 거리
      const newDistance = distances[to] + next.dist;
      // 새로운 노드의 거리가 기존 다음 노드의 거리보다 더 짧다면 교체한다.
      if (newDistance < distances[next.to]) {
        distances[next.to] = newDistance;
        queue.push(next);
      }
    });
  }
  // 반복문을 마치고 나면 distances에는 해당 노드까지의 가장 짧은 거리가 저장되어 있다.
  // 배달 가능 시간(거리) K 보다 짧은 시간(거리)을 가진 마을(노드)의 수를 반환한다.
  return distances.filter((distance) => distance <= K).length;
}

/**
마을의 개수 N
각 마을을 연결하는 도로의 정보 road [현재 마을, 다음 마을, 걸리는 시간]
음식 배달이 가능한 시간 K

1번 마을에서 각 마을로 음식 배달을 나간다.

1번 마을에서 각 마을까지의 최소 거리를 구하고 이 거리(시간)이 배달 가능한 시간보다 작은지 확인

기본적으로 다익스트라 알고리즘울 이용할 수 있다.
*/
