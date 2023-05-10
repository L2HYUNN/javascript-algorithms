function getDigit(num, place) {
  const stringifiedNum = num.toString();
  return Number(stringifiedNum[stringifiedNum.length - (place + 1)]);
}

console.log(getDigit(123456, 0));
console.log(getDigit(123456, 1));
console.log(getDigit(123456, 2));
console.log(getDigit(123456, 3));
console.log(getDigit(123456, 4));
console.log(getDigit(123456, 5));

function digitCount(num) {
  return num.toString().length;
}

console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));
