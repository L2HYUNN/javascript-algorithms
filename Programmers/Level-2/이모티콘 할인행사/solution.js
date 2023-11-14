function solution(users, emoticons) {
  const saleRate = [10, 20, 30, 40];

  const cases = [];

  const arr = [];

  const result = [0, 0];

  function saleDFS(depth = 0) {
    if (depth === emoticons.length) {
      cases.push([...arr]);
      return;
    }

    for (let i = 0; i < saleRate.length; i++) {
      arr[depth] = saleRate[i];
      saleDFS(depth + 1);
    }
  }

  saleDFS();

  cases.forEach((curCase) => {
    let emoticonPlus = 0;
    let totalPrice = 0;

    users.forEach((user) => {
      const [buyRate, buyPrice] = user;

      let sumPrice = 0;
      let emoticonPlusFlag = false;

      emoticons.every((emoticon, emoticonIdx) => {
        if (curCase[emoticonIdx] >= buyRate) {
          sumPrice += (emoticon * (100 - curCase[emoticonIdx])) / 100;
        }

        if (sumPrice >= buyPrice) {
          emoticonPlusFlag = true;
          return false;
        }

        return true;
      });

      if (emoticonPlusFlag) {
        emoticonPlus++;
      } else {
        totalPrice += sumPrice;
      }
    });

    if (emoticonPlus > result[0]) {
      result[0] = emoticonPlus;
      result[1] = totalPrice;
    } else if (result[0] === emoticonPlus && totalPrice > result[1]) {
      result[1] = totalPrice;
    }
  });

  return result;
}

const USERS = [
  [40, 10000],
  [25, 10000],
];

const EMOTICONS = [7000, 9000];

solution(USERS, EMOTICONS);
