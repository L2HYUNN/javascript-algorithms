function solution(s) {
  const result = [0, 0];

  while (s !== "1") {
    let prevS = s;
    let afterS = "";

    for (const word of s) {
      if (word === "1") {
        afterS += "1";
      }
    }

    result[1] += Math.abs(prevS.length - afterS.length);
    s = afterS.length.toString(2);
    result[0]++;
  }

  return result;
}
