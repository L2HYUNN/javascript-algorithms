function solution(keyinput, board) {
  var answer = [0, 0];
  var x_max = (board[0] - 1) / 2;
  var y_max = (board[1] - 1) / 2;

  keyinput.forEach((input) => {
    switch (input) {
      case "left":
        if (answer[0] === -x_max) break;
        answer[0]--;
        break;
      case "right":
        if (answer[0] === x_max) break;
        answer[0]++;
        break;
      case "up":
        if (answer[1] === y_max) break;
        answer[1]++;
        break;
      case "down":
        if (answer[1] === -y_max) break;
        answer[1]--;
      default:
        break;
    }
  });

  return answer;
}
