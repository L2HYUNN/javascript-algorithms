function solution(sides) {
  sides.sort((a, b) => a - b);

  const number = sides[1] - sides[0];
  const number_length = Array(sides[1] - number)
    .fill(number + 1)
    .map((v, i) => v + i).length;

  const number2 = sides[1] + sides[0];
  const number2_length = Array(number2 - sides[1] - 1)
    .fill(sides[1] + 1)
    .map((v, i) => v + i).length;

  return number_length + number2_length;
}
