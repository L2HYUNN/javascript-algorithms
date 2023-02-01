function solution(spell, dic) {
  const string = spell.sort().join("");
  return dic.map((v) => v.split("").sort().join("")).find((v) => v === string)
    ? 1
    : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "sop", "qixm", "adio", "soo"]));
