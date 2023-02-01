var solution = (n) =>
  Number(
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reduce((t, s, i) => t.replaceAll(s, i), n)
  );
