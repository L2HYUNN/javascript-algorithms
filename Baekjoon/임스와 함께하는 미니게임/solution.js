const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, game] = input[0].split(" ");
  const players = [...new Set(input.slice(1))];
  const GAME_INFO = {
    Y: "1",
    F: "2",
    O: "3",
  };

  return Math.floor(players.length / GAME_INFO[game]);
}

console.log(solution(input));

/**
 * 2, 3, 4
 * 임스는 반드시 참여하므로 각 게임에 필요한 인원은 1, 2, 3 이다.
 */
