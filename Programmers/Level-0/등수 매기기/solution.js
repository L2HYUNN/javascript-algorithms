function getAverageScore(score) {
  return score.map((score) => (score[0] + score[1]) / 2);
}

function getSortedAverageScore(average) {
  const tempAverage = [...average];
  return tempAverage.sort((a, b) => b - a);
}

function solution(score) {
  const average = getAverageScore(score);
  const sortedAverage = getSortedAverageScore(average);
  const result = [];

  // findIndex 대신 Object를 이용하면 시간 복잡도를 개선할 수 있을 거 같다.
  // findIndex와 유사한 indexOf 메소드도  Check 해두자.
  average.forEach((avg) => {
    const sortedIndex = sortedAverage.findIndex(
      (sortedAvg) => sortedAvg === avg
    );
    result.push(sortedIndex + 1);
  });

  return result;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
