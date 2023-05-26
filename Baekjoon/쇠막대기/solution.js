const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");
// const dir = '/dev/stdin';

const inputData = fs.readFileSync(dir).toString().trim().split("\n");

function solution(input) {
  const brackets = input[0].split("");
  let prevBracket = brackets[0];

  const razorFirstIndex = [];
  const razorLastIndex = [];

  brackets.forEach((currentBracket, index) => {
    if (prevBracket === "(" && currentBracket === ")") {
      razorFirstIndex.push(index - 1);
      razorLastIndex.push(index);
    }

    prevBracket = currentBracket;
  });

  const sticks = [];
  const stickStart = [];

  brackets.forEach((currentBracket, index) => {
    if (currentBracket === "(" && !razorFirstIndex.includes(index)) {
      stickStart.push(index);
    }

    if (currentBracket === ")" && !razorLastIndex.includes(index)) {
      sticks.push([stickStart.pop(), index]);
    }
  });

  let answer = 0;

  sticks.forEach((stick) => {
    let totalRazor = 0;
    razorFirstIndex.forEach((razor) => {
      if (stick[0] < razor && razor < stick[1]) totalRazor++;
    });
    answer += totalRazor + 1;
  });

  return console.log(answer);
}

solution(inputData);

/**
 * 01 234 56 78 9  10 1112 13   1415  1617  18 1920 21
 * () ((( () () )  (   ()   )    ()    ))   (  ()   )
 *      --------   ---------
 *     --------------------------------
 *    ----------------------------------
 * () -> Razor
 *
 * (())
 *
 * 쇠막대기 하나에 레이저가 몇개 존재하는가?
 *
 * 잘려진 쇠막대기 = 한 막대기에 포함된 레이저의 수 + 1 ;
 *
 * () 가 바로 나오는 경우 레이저로 판단
 * () 가 바로 나오지 않는 경우 막대기를 만든다.
 * (  -> 막대기의 시작, 레이저가 아니라면 반드시 하나의 쇠 막대기를 만든다.
 *
 * [start, end] -> index를 이용하여 막대기 조사.
 * razor의 index가 막대기 index 사이에 있다면 포함하는 레이저의 수 +1
 *
 * 막대기를 어떻게 조사하는가?
 *
 * ( -> 바로 ) 를 만나지 않는다면 막대기 start 스택에 집어넣자.
 * const stickStart = [2, 3, 4. 10, 18];
 *
 * 바로 닫히지 않은 )의 경우 막대기의 end가 될 수 있다.
 * const stickEnd = [9, 13, 16, 17, 21];
 *
 * 한 번에 전부 다 넣는 것이 아니라 넣으면서 가장 짧은 stick을 만들게 하면 된다
 *
 * 가장 먼저 나오는 예시를 생각해보면
 *
 * const stickStart = [2, 3, 4] -> 아직 ')'를 만나지 못했기 때문에
 * const stickEnd = [9] -> 처음으로 ')'를 만나고 이때 가장 짧은 stick을 만들 수 있다.
 * [4, 9]
 *
 *
 */
