const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const map = input.slice(1).map((row) => row.split(" ").map(Number));
  const combinations = [];
  const arr = [];
  const visited = Array(N).fill(false);

  function combination(start) {
    if (arr.length === N / 2) {
      combinations.push([...arr]);
      return;
    }

    for (let i = start; i < N; i++) {
      if (!visited[i]) {
        arr.push(i + 1);
        visited[i] = true;
        combination(i + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  }

  combination(0);

  let diffOfAbility = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < combinations.length / 2; i++) {
    const startTeam = combinations[i];
    const linkTeam = Array.from({ length: N }, (_, index) => index + 1).filter(
      (item) => !startTeam.includes(item)
    );

    function backtrack(team) {
      const arr = [];
      const result = [];
      const visited = Array.from({ length: N }, () => false);

      function permutate(start, team) {
        if (arr.length === 2) {
          result.push([...arr]);
          return;
        }

        for (let i = 0; i < team.length; i++) {
          if (!visited[team[i] - 1]) {
            arr.push(team[i]);
            visited[team[i] - 1] = true;
            permutate(start + 1, team);
            arr.pop();
            visited[team[i] - 1] = false;
          }
        }
      }

      permutate(0, team);

      return result;
    }

    const startList = backtrack(startTeam);
    const linkList = backtrack(linkTeam);

    const startAbility = startList.reduce((acc, cur) => {
      return acc + map[cur[0] - 1][cur[1] - 1];
    }, 0);

    const linkAbility = linkList.reduce((acc, cur) => {
      return acc + map[cur[0] - 1][cur[1] - 1];
    }, 0);

    diffOfAbility = Math.min(
      diffOfAbility,
      Math.abs(startAbility - linkAbility)
    );
  }

  return diffOfAbility;
}

console.log(solution(input));
