function solution(users, emoticons) {
  const SALE_RATES = [10, 20, 30, 40];

  const cases = [];

  const arr = [];

  const result = [0, 0];

  function saleDFS(depth = 0) {
    if (depth === emoticons.length) {
      cases.push([...arr]);
      return;
    }

    for (let i = 0; i < SALE_RATES.length; i++) {
      arr[depth] = SALE_RATES[i];
      saleDFS(depth + 1);
    }
  }

  saleDFS();

  cases.forEach((curCase) => {
    let emoticonPlus = 0;
    let totalEmoticonPrice = 0;

    users.forEach(([userSaleRate, userPrice]) => {
      let userTotalEmoticonPrice = 0;

      emoticons.every((emoticon, emoticonIndex) => {
        const saleEmoticon =
          emoticon - Math.floor((emoticon * curCase[emoticonIndex]) / 100);

        if (curCase[emoticonIndex] >= userSaleRate) {
          userTotalEmoticonPrice += saleEmoticon;
        }

        if (userTotalEmoticonPrice >= userPrice) {
          userTotalEmoticonPrice = 0;
          emoticonPlus++;
          return false;
        }

        return true;
      });

      totalEmoticonPrice += userTotalEmoticonPrice;
    });

    if (
      emoticonPlus > result[0] ||
      (emoticonPlus === result[0] && totalEmoticonPrice > result[1])
    ) {
      result[0] = emoticonPlus;
      result[1] = totalEmoticonPrice;
    }
  });

  return result;
}
