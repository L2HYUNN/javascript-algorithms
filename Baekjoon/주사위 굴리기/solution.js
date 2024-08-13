const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let [N, M, x, y, K] = input[0].split(" ").map((str) => +str);
  const map = input.slice(1, N + 1).map((str) => str.split(" ").map((s) => +s));
  const instructions = input[input.length - 1].split(" ").map((str) => +str);
  const DIRECTION = {
    EAST: 1,
    WEST: 2,
    NORTH: 3,
    SOUTH: 4,
  };
  const dice = [0, 0, 0, 0, 0, 0, 0];

  instructions.forEach((instruction) => {
    const top = moveDice(instruction);

    if (top !== undefined) {
      console.log(top);
    }
  });

  function update() {
    // 지도, 주사위 업데이트
    if (map[x][y] === 0) {
      map[x][y] = dice[6];
      return dice[1];
    }

    if (map[x][y] > 0) {
      dice[6] = map[x][y];
      map[x][y] = 0;
      return dice[1];
    }
  }

  function moveDice(direction) {
    // 동쪽으로 이동
    if (direction === DIRECTION.EAST) {
      if (0 <= y && y < M - 1) {
        const prevDice = [...dice];

        // 주사위 굴리기
        dice[4] = prevDice[6];
        dice[1] = prevDice[4];
        dice[3] = prevDice[1];
        dice[6] = prevDice[3];

        // 주사위 좌표 업데이트
        y++;

        // 지도, 주사위 업데이트
        return update();
      }
    }

    // 서쪽으로 이동
    if (direction === DIRECTION.WEST) {
      if (0 < y && y <= M - 1) {
        const prevDice = [...dice];

        // 주사위 굴리기
        dice[4] = prevDice[1];
        dice[1] = prevDice[3];
        dice[3] = prevDice[6];
        dice[6] = prevDice[4];

        //주사위 좌표 업데이트
        y--;

        // 지도, 주사위 업데이트
        return update();
      }
    }

    // 북쪽으로 이동
    if (direction === DIRECTION.NORTH) {
      if (0 < x && x <= N - 1) {
        const prevDice = [...dice];

        // 주사위 굴리기
        dice[2] = prevDice[1];
        dice[1] = prevDice[5];
        dice[5] = prevDice[6];
        dice[6] = prevDice[2];

        // 주사위 좌표 업데이트
        x--;

        // 지도, 주사위 업데이트
        return update();
      }
    }

    if (direction === DIRECTION.SOUTH) {
      if (0 <= x && x < N - 1) {
        const prevDice = [...dice];

        // 주사위 굴리기
        dice[2] = prevDice[6];
        dice[1] = prevDice[2];
        dice[5] = prevDice[1];
        dice[6] = prevDice[5];

        // 주사위 좌표 업데이트
        x++;

        // 지도, 주사위 업데이트
        return update();
      }
    }
  }

  /**
   * 주사위를 오른쪽으로 굴릴 때
   *   2           2
   * 4 1 3 ->    6 4 1
   *   5           5
   *   6           3
   *
   * 주사위를 왼쪽으로 굴릴 때
   *   2           2
   * 4 1 3 ->    1 3 6
   *   5           5
   *   6           4
   *
   * 주사위를 위로 굴릴 때
   *   2           1
   * 4 1 3 ->    4 5 3
   *   5           6
   *   6           2
   *
   * 주사위를 아래로 굴릴 때
   *   2           6
   * 4 1 3 ->    4 2 3
   *   5           1
   *   6           5
   *
   *
   * const col = [2, 1, 5, 6];
   * const row = [6, 4, 1, 3];
   */
}

solution(input);
