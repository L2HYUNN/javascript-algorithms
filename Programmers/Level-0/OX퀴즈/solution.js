function solution(quiz) {
  return quiz.map((q) => {
    let tempMinus = q.split(" - ");
    let tempPlus = q.split(" + ");
    let num1, num2, result;

    if (tempMinus.length === 2) {
      let tempResult = tempMinus[1].split(" = ");
      num1 = +tempMinus[0];
      num2 = +tempResult[0];
      result = +tempResult[1];

      return num1 - num2 === result ? "O" : "X";
    }

    if (tempPlus.length === 2) {
      let tempResult = tempPlus[1].split(" = ");
      num1 = +tempPlus[0];
      num2 = +tempResult[0];
      result = +tempResult[1];

      return num1 + num2 === result ? "O" : "X";
    }
  });
}
