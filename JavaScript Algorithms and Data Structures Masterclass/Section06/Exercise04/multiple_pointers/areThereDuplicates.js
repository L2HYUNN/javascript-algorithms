function areThereDuplicates(...args) {
  // 함수에서 인자를 받을 때 ...args
  // -> 스프레드 용법을 사용하여 배열의 형태로 받아 사용할 수 있다.
  // -> arguments 객체를 사용할시 배열 형태의 객체를 사용해야한다.
  args.sort((a, b) => a > b);

  let first = 0;
  let second = 1;

  while (second < args.length) {
    if (args[first] === args[second]) return true;
    first++;
    second++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 4, 5, 5));
