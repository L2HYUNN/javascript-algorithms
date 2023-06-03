// https://leylaoriduck.tistory.com/488
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var result = "";
for (var i in input) {
  if (input[i] === "") continue;
  var answer = [0, 0, 0, 0];
  var splited = input[i].split("");
  for (var j in splited) {
    if (splited[j] >= "a" && splited[j] <= "z") {
      answer[0]++;
    } else if (splited[j] >= "A" && splited[j] <= "Z") {
      answer[1]++;
    } else if (splited[j] >= "0" && splited[j] <= "9") {
      answer[2]++;
    } else if (splited[j] === " ") {
      answer[3]++;
    }
  }
  result += answer.join(" ") + "\n";
}
console.log(result.trim());
