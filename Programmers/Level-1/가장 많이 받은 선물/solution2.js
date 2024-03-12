function solution(friends, gifts) {
  const length = friends.length;
  const giftPoints = new Array(length).fill(0);
  const index = {};
  const record = [];
  const points = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    record[i] = new Array(length).fill(0);
    index[friends[i]] = i;
  }
  for (const gift of gifts) {
    const [giver, taker] = gift.split(" ");
    record[index[giver]][index[taker]] += 1;
    giftPoints[index[giver]] += 1;
    giftPoints[index[taker]] -= 1;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (record[i][j] > record[j][i]) {
        points[i] += 1;
      } else if (record[i][j] === record[j][i]) {
        if (giftPoints[i] > giftPoints[j]) {
          points[i] += 1;
        }
      }
    }
  }
  return Math.max(...points);
}
