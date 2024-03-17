function solution(dice) {
  let answer = [];
  let max = 0;

  const diceLength = dice.length;
  const array = new Array(diceLength).fill(0).map((a, i) => i);
  const combinations = getCombinations(diceLength / 2, array);

  combinations.forEach((combination) => {
    const otherCombination = array.filter(
      (number) => !combination.includes(number),
    );

    const sumA = getSumList(dice, combination);
    const sumB = getSumList(dice, otherCombination).sort((a, b) => a - b);

    let count = 0;

    sumA.forEach((sum) => {
      count += getVictoryCount(sum, sumB);
    });

    if (count > max) {
      answer = combination;
      max = count;
    }
  });

  return answer.map((number) => number + 1);

  function getCombinations(L, array) {
    if (L === 1) {
      return array.map((a) => [a]);
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
      const rest = array.slice(i + 1);
      const comb = getCombinations(L - 1, rest);
      const attach = comb.map((c) => [array[i], ...c]);

      result.push(...attach);
    }

    return result;
  }

  function getSumList(dice, combination) {
    let cur = [...dice[combination[0]]];

    for (let i = 1; i < combination.length; i++) {
      const acc = [];

      for (let j = 0; j < cur.length; j++) {
        for (let k = 0; k < 6; k++) {
          acc.push(dice[combination[i]][k] + cur[j]);
        }
      }

      cur = acc;
    }

    return cur;
  }

  function getVictoryCount(sum, sumList) {
    let left = 0;
    let right = sumList.length - 1;

    if (sum > sumList[right]) {
      return right + 1;
    }

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (sum > sumList[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return right;
  }
}
function solution(dice) {
  let answer = [];
  let max = 0;

  const diceLength = dice.length;
  const array = new Array(diceLength).fill(0).map((a, i) => i);
  const combinations = getCombinations(diceLength / 2, array);

  combinations.forEach((combination) => {
    const otherCombination = array.filter(
      (number) => !combination.includes(number),
    );

    const sumA = getSumList(dice, combination);
    const sumB = getSumList(dice, otherCombination).sort((a, b) => a - b);

    let count = 0;

    sumA.forEach((sum) => {
      count += getVictoryCount(sum, sumB);
    });

    if (count > max) {
      answer = combination;
      max = count;
    }
  });

  return answer.map((number) => number + 1);

  function getCombinations(L, array) {
    if (L === 1) {
      return array.map((a) => [a]);
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
      const rest = array.slice(i + 1);
      const comb = getCombinations(L - 1, rest);
      const attach = comb.map((c) => [array[i], ...c]);

      result.push(...attach);
    }

    return result;
  }

  function getSumList(dice, combination) {
    let cur = [...dice[combination[0]]];

    for (let i = 1; i < combination.length; i++) {
      const acc = [];

      for (let j = 0; j < cur.length; j++) {
        for (let k = 0; k < 6; k++) {
          acc.push(dice[combination[i]][k] + cur[j]);
        }
      }

      cur = acc;
    }

    return cur;
  }

  function getVictoryCount(sum, sumList) {
    let left = 0;
    let right = sumList.length - 1;

    if (sum > sumList[right]) {
      return right + 1;
    }

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (sum > sumList[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return right;
  }
}
