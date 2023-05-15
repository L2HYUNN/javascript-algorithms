function solution(polynomial) {
  let sumOfX = 0;
  let sumOfNum = 0;

  polynomial
    .split(" ")
    .join("")
    .split("+")
    .forEach((port) => {
      if (port.includes("x") && port.length >= 2) sumOfX += +port.slice(0, -1);
      if (port.includes("x") && port.length === 1) sumOfX++;
      if (!port.includes("x")) sumOfNum += +port;
    });

  if (sumOfX && sumOfNum) {
    return sumOfX === 1 ? `x + ${sumOfNum}` : `${sumOfX}x + ${sumOfNum}`;
  } else if (sumOfX) {
    return sumOfX === 1 ? "x" : `${sumOfX}x`;
  } else {
    return `${sumOfNum}`;
  }
}

console.log(solution("13x + 7 + 40x + 99"));
console.log(solution("x + x + x"));
console.log(solution("x"));
console.log(solution("7"));
