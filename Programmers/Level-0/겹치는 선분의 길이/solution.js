function solution(lines) {
  const lineCollections = new Array(200).fill(0);

  lines.forEach((line) => {
    for (let i = line[0]; i < line[1]; i++) {
      lineCollections[i + 100]++;
    }
  });

  let answer = 0;

  lineCollections.forEach((line) => {
    if (line > 1) answer++;
  });

  return answer;
}
