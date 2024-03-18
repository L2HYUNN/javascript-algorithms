function solution(coin, cards) {
  const cardsLength = cards.length;
  const memo = new Array(cardsLength / 2 + 1).fill(0);

  const putCard = (card, ary) => {
    if (card > cardsLength / 2) {
      ary[cardsLength + 1 - card] += 1;
      return;
    }

    ary[card] += 1;
    return;
  };

  const updateAble = (card, memo, initial, able) => {
    const num = card > cardsLength / 2 ? cardsLength + 1 - card : card;

    if (memo[num] === 2) {
      able.push([num, 2 - initial[num]]);
    }

    able.sort((a, b) => b[1] - a[1]);
  };

  for (let i = 0; i < cardsLength / 3; i++) {
    putCard(cards[i], memo);
  }

  let round = 1;

  const initialMemo = [...memo];
  const able = [];

  for (let i = 1; i < memo.length; i++) {
    if (memo[i] === 2) {
      able.push([i, 0]);
    }
  }

  for (let i = cardsLength / 3; i < cardsLength; i += 2) {
    putCard(cards[i], memo);
    putCard(cards[i + 1], memo);

    updateAble(cards[i], memo, initialMemo, able);
    updateAble(cards[i + 1], memo, initialMemo, able);

    if (!able.length) {
      return round;
    }

    coin -= able.pop()[1];

    if (coin < 0) {
      return round;
    }

    round++;
  }

  return round;
}
