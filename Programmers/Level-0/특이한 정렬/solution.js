function getDistance(a, b) {
  return Math.abs(a - b);
}

function solution(numlist, n) {
  numlist.sort((a, b) => b - a);

  const answer = [];
  const distanceList = numlist.map((num) => getDistance(num, n));

  while (numlist.length) {
    const minDistance = Math.min(...distanceList);
    const minDistanceIdx = distanceList.indexOf(minDistance);

    answer.push(numlist[minDistanceIdx]);

    numlist.splice(minDistanceIdx, 1);
    distanceList.splice(minDistanceIdx, 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));

/**
 * numlist의 값과 n의 거리를 구하는 함수
 * 거리를 비교하여 새로운 정렬을 만드는 로직
 *
 * [1, 2, 3, 4, 5, 6]
 * [3, 2, 1 ,0 ,1, 2]
 *
 * [1, 2, 3, 5 ,6]
 * [3, 2 ,1 ,1 ,2]
 *
 * [6, 5, 4, 3, 2, 1]
 * [2, 1, 0, 1, 2, 3]
 *
 * [6, 5, 3, 2, 1]
 * [2, 1, 1, 2, 3]
 *
 */
