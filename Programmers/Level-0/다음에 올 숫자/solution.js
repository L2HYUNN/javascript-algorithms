function solution(common) {
  let tempOne, tempTwo;

  tempOne = common[1] - common[0];
  tempTwo = common[2] - common[1];

  if (tempOne === tempTwo) return common[common.length - 1] + tempOne;

  tempOne = common[1] / common[0];
  tempTwo = common[2] / common[1];

  if (tempOne === tempTwo) return common[common.length - 1] * tempOne;
}
