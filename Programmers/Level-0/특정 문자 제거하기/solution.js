function solution(my_string, letter) {
  var my_string_array = my_string.split("");

  while (true) {
    var index = my_string_array.findIndex((element) => element === letter);
    if (index === -1) break;

    my_string_array.splice(index, 1);
  }

  return my_string_array.join("");
}

console.log(solution("BCBdbe", "B"));
