//[11559] Puyo Puyo 2020.02.01 토 23:00
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
const line = require("fs").readFileSync(filePath, "utf8");

let data = line.trim().split("\n");

const puyo = [[], [], [], [], [], []];

/*

R은 빨강, G는 초록, B는 파랑, P는 보라, Y는 노랑

[12 x 6]
RRYGG.
RRYG..
.YG...
.Y....
......
]
->
[6 x 12]
[ 
  ['R', 'R', '.', '.','.', '.', '.', '.','.', '.', '.', '.'],
  ['R', 'R', 'Y', 'Y','.', '.', '.', '.','.', '.', '.', '.'],
  ...
]
*/

for (let i = data.length - 1; i >= 0; i--) {
  const value = data[i].trim().split("");
  for (let j = 0; j <= 5; j++) {
    puyo[j].push(value[j]);
  }
}

console.log(puyo);

let rtnCnt = 0;

while (true) {
  const chk = [];
  puyo.forEach((v, i) => {
    chk[i] = Array(12).fill(-1);
  });

  let BfsfourOverCnt = 0;

  //뿌요탐색
  for (let i = 0; i < puyo.length; i++) {
    for (let j = 0; j < 12; j++) {
      if (puyo[i][j] !== "." && chk[i][j] === -1) {
        const rtnArr = Bfs(i, j, chk);
        if (rtnArr.length >= 4) {
          //터트리기!
          rtnArr.forEach((v) => {
            const { x, y } = v;
            puyo[x][y] = ".";
          });
          BfsfourOverCnt++;
        }
      }
    }
  }
  //뿌요터진게 있으면 뿌요 이동처리
  if (BfsfourOverCnt > 0) {
    //연쇄 카운트 업
    rtnCnt++;
    //뿌요 무브
    movePuyo();
  } else {
    //터트릴게없는 경우
    console.log(rtnCnt);
    process.exit(0);
  }
}

//같은 뿌요 찾기
function Bfs(i, j, chk) {
  const queue = [{ x: i, y: j }];
  const alphabet = puyo[i][j];
  chk[i][j] = 1;
  const xAxis = [0, 0, 1, -1];
  const yAxis = [1, -1, 0, 0];

  let rtnArr = [{ x: i, y: j }];

  while (queue.length > 0) {
    const { x, y } = queue.shift();
    for (let k = 0; k <= 3; k++) {
      const xX = x + xAxis[k];
      const yY = y + yAxis[k];

      if (xX >= 0 && xX < 6 && yY >= 0 && yY < 12) {
        if (puyo[xX][yY] === alphabet && chk[xX][yY] === -1) {
          queue.push({ x: xX, y: yY });
          rtnArr.push({ x: xX, y: yY });
          chk[xX][yY] = 1;
        }
      }
    }
  }
  return rtnArr;
}

//뿌요 옮기기
function movePuyo() {
  for (let i = 0; i < puyo.length; i++) {
    const movedPuyo = Array(12).fill(".");

    const tempArr = [];
    for (let j = 0; j < 12; j++) {
      if (puyo[i][j] !== ".") {
        tempArr.push(puyo[i][j]);
      }
    }
    tempArr.forEach((v, i) => {
      movedPuyo[i] = v;
    });
    puyo[i] = movedPuyo;
  }
}
