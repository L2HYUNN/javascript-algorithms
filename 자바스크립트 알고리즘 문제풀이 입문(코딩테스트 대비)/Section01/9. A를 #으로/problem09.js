function solution(str) {
  return str
    .split("")
    .map((s) => {
      if (s === "A") return "#";
      else return s;
    })
    .join("");
}

let str = "BANANA";
console.log(solution(str));
