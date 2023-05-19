const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

// 시간 초과
function solution(input) {
  const str = input.shift();
  const length = input.shift();

  const stack = str.split("");
  const tempStack = [];

  let cursor = str.length;

  const behavior = {
    L: () => {
      if (cursor > 0) cursor--;
    },
    D: () => {
      if (cursor < str.length) cursor++;
    },
    B: () => {
      if (cursor === 0) return;

      const popNum = stack.length - cursor;

      // 커서까지 값들 pop, 임시 스택에 push
      for (let i = 0; i < popNum; i++) {
        const poppedNum = stack.pop();
        tempStack.push(poppedNum);
      }

      stack.pop(); // 커서 왼쪽의 값 제거

      // 임시 스택에 있는 값 pop, 원본 스택에 push
      for (let j = 0; j < popNum; j++) {
        const poppedNum = tempStack.pop();
        stack.push(poppedNum);
      }

      cursor--; // 커서 위치 재조정
    },
    P: (w) => {
      const popNum = stack.length - cursor;

      // 커서까지 값들 pop, 임시 스택에 push
      for (let i = 0; i < popNum; i++) {
        const poppedNum = stack.pop();
        tempStack.push(poppedNum);
      }

      stack.push(w);

      // 임시 스택에 있는 값 pop, 원본 스택에 push
      for (let j = 0; j < popNum; j++) {
        const poppedNum = tempStack.pop();
        stack.push(poppedNum);
      }

      cursor++;
    },
  };

  input.forEach((i) => {
    const order = i.split(" ")[0];
    const word = i.split(" ")[1];

    order === "P" ? behavior[order](word) : behavior[order]();
  });

  return console.log(stack.join(""));
}

solution(inputData);

/**
 * Array.prototype.splice 사용시 시간초과가 발생하였다.
 * Array 사용으로 인한 문제로 보인다.
 *
 * 따라서 더욱 효율적인 자료구조를 사용해야만 한다.
 * Stack을 이용해보자.
 *
 * [a, b, c ,d]
 * []
 *
 * cursor:
 * (시작)0 1 2 3 4(끝)
 *
 * P $: $값을 추가하기 위한 로직
 * cursor가 1이고 여기에 e라는 값을 추가하려 한다면,
 * [a, b, c, d]
 * []
 *
 * arr.length - cursor -> 4 - 1 = 3 만큼 stack.pop()을 수행한다.
 * pop한 값은 다시 사용해야하기 때문에 임시 stack에 넣어준다.
 * [a]
 * [d, c, b]
 *
 * 해당 값(e)를 stack.push() 해준다.
 * [a, e]
 * [d, c, b]
 *
 * 임시 스택에 있는 값들을 stack.pop()하고 다시 원본 stack에 push 해주자.
 * cursor를 하나 올려준다. (cursor++;)
 * [a, e, b, c, d]
 * []
 *
 * B: 커서 왼쪽에 있는 문자를 삭제한다.
 * [a, b, c, d]
 * []
 *
 * cursor가 1이고 B라는 커맨드를 실행하기를 원할때
 * arr.length - cursor => 4 -1 = 3 만큼 stack.pop()을 수행한다.
 * pop한 값은 다시 사용해야하기 때문에 임시 stack에 넣어준다.
 * [a]
 * [d, c, b]
 *
 * cursor 1번 왼쪽에 있는 문자를 삭제해준다 (stack.pop())
 * cursor를 하나 줄여준다. (cursor--;)
 * []
 * [d, c, b]
 *
 * 임시 스택에 있는 값들을 Pop하고 다시 원본 스택에 Push 해주자.
 * [b, c, d]
 * []
 *
 *
 */
