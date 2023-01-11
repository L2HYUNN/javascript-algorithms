// LCM(Lowest Common Multiple)
function getLCM(num1, num2) {
  let lcm = 1;

  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      break;
    }
    lcm++;
  }

  return lcm;
}

function solution() {
  var num1 = 4,
    num2 = 6;

  return getLCM(num1, num2);
}

console.log(solution());
