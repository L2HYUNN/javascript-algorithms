// https://jaekwan.tistory.com/193
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);

class Node {
  constructor(x, y, d) {
    this.next = null;
    this.x = x;
    this.y = y;
    this.d = d;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  length() {
    return this.size;
  }
  push(x, y, d) {
    let node = new Node(x, y, d);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  pop() {
    let temp = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
}
function sol(r, c, d, map, v, map2) {
  let answer = 0;

  //북:0 동:1 남:2 서:3
  //북 서 남 동 으로 돌려야함.
  let dx = [0, -1, 0, 1];
  let dy = [-1, 0, 1, 0];

  if (d === 0) d = 0;
  else if (d === 1) d = 3;
  else if (d === 2) d = 2;
  else if (d === 3) d = 1;

  let q = new Queue();
  q.push(c, r, d);
  v[r][c] = true;
  map2[r][c] = 4;
  answer++;

  while (q.length()) {
    let cur = q.pop();
    let [cx, cy, cd] = [cur.x, cur.y, cur.d];

    let cnt = 1;
    while (1) {
      // 왼쪽으로 회전한다.
      let nextX = cx + dx[(cd + cnt) % 4];
      let nextY = cy + dy[(cd + cnt) % 4];

      // 다음 진행 경로가 범위 안에 있을때.
      if (
        nextX >= 0 &&
        nextX < M &&
        nextY >= 0 &&
        nextY < N &&
        map[nextY][nextX] === 0 &&
        !v[nextY][nextX]
      ) {
        q.push(nextX, nextY, (cd + cnt) % 4); // 다음 진행방향.
        v[nextY][nextX] = true;
        map2[nextY][nextX] = 4;
        answer++;
        break;
      }
      if (cnt >= 4) {
        // 2-b 실행.
        // 뒷 방향 좌표.
        nextX = cx + dx[(cd + 2) % 4];
        nextY = cy + dy[(cd + 2) % 4];
        if (map[nextY][nextX] === 1) {
          // 정지.
          map2[nextY][nextX] = 9;
          return answer;
        } else {
          q.push(nextX, nextY, cd); // 뒤로 한 칸 후진한다.
          break;
        }
      }
      cnt++;
    }
  }

  return answer;
}
function main() {
  let v = new Array(N).fill(null).map((_) => new Array(M).fill(false));
  let map = input
    .slice(2)
    .map((_) => _.toString().trim().split(" ").map(Number));
  let map2 = input
    .slice(2)
    .map((_) => _.toString().trim().split(" ").map(Number));
  const [r, c, d] = input[1].split(" ").map(Number); // r=y,c=x,방향. (y,x,d);

  console.log(sol(r, c, d, map, v, map2));
}
main();
