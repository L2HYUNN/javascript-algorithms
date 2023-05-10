function getDigit(num, place) {
  const stringifiedNum = Math.abs(num).toString();
  return Number(stringifiedNum[stringifiedNum.length - (place + 1)]);
}

console.log(getDigit(123456, 0));
console.log(getDigit(123456, 1));
console.log(getDigit(123456, 2));
console.log(getDigit(123456, 3));
console.log(getDigit(123456, 4));
console.log(getDigit(123456, 5));
console.log(getDigit(-123456, 5));

function digitCount(num) {
  return Math.abs(num).toString().length;
}

console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));
console.log(digitCount(-314));

function mostDigits(nums) {
  let mostDigit = 0;

  nums.forEach((num) => {
    const digit = digitCount(num);
    if (mostDigit < digit) mostDigit = digit;
  });

  return mostDigit;
}

console.log(mostDigits([23, 567, 89, 122343245, 90]));
