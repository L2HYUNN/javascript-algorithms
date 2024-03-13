function solution(friends, gifts) {
  const friendIndex = {};

  friends.forEach((friend, index) => {
    friendIndex[friend] = index;
  });

  const friendLength = friends.length;

  const giftExchangeInfo = Array.from(Array(friendLength), () =>
    new Array(friendLength).fill(0),
  );

  const giftIndex = new Array(friendLength).fill(0);

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");

    const giverIndex = friendIndex[giver];
    const receiverIndex = friendIndex[receiver];

    giftExchangeInfo[giverIndex][receiverIndex]++;

    giftIndex[giverIndex]++;
    giftIndex[receiverIndex]--;
  });

  const nextMonthGiftInfo = new Array(friendLength).fill(0);

  for (let i = 0; i < giftExchangeInfo.length; i++) {
    for (let j = 0; j < giftExchangeInfo.length; j++) {
      if (i === j) continue;

      if (giftExchangeInfo[i][j] > giftExchangeInfo[j][i]) {
        nextMonthGiftInfo[i]++;
        continue;
      }

      if (
        giftExchangeInfo[i][j] === giftExchangeInfo[j][i] &&
        giftIndex[i] > giftIndex[j]
      ) {
        nextMonthGiftInfo[i]++;
        continue;
      }
    }
  }

  return Math.max(...nextMonthGiftInfo);
}
