const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const TEST_CASE = input[0];

  for (let i = 0; i < TEST_CASE; i++) {
    const totalRank = input[i * 2 + 1];
    const ranks = input[i * 2 + 2].split(" ").map(Number);

    console.log(executeCrossCountry(ranks));
  }

  function executeCrossCountry(ranks) {
    const team = new Map();

    ranks.forEach((rank) => {
      const value = team.get(rank) || 0;

      team.set(rank, value + 1);
    });

    for (const [teamName, teamNumber] of team) {
      if (teamNumber < 6) {
        team.delete(teamName);
      }
    }

    const filteredRanks = ranks.filter((rank) => team.has(rank));

    const result = new Map();

    filteredRanks.forEach((rank, index) => {
      const ary = result.get(rank) || [];
      ary.push(index + 1);

      result.set(rank, ary);
    });

    const sum = new Map();

    for (const [key, value] of result) {
      const resultSum = value.reduce((acc, cur, idx) => {
        if (idx < 4) {
          return acc + cur;
        }

        return acc;
      }, 0);

      sum.set(key, resultSum);
    }

    const min = Math.min(...sum.values());

    const resultTeam = [...sum.entries()]
      .filter(([_, score]) => score === min)
      .map(([name]) => name);

    if (resultTeam.length === 1) {
      return resultTeam[0];
    }

    let winner = resultTeam[0];
    let minFifth = result.get(winner)[4];

    for (let i = 1; i < resultTeam.length; i++) {
      const name = resultTeam[i];
      const fifth = result.get(name)[4];

      if (fifth < minFifth) {
        winner = name;
        minFifth = fifth;
      }
    }

    return winner;
  }
}

solution(input);

/**
 * 요구사항 정리
 * 한 팀은 6명으로 구성 /
 * 상위 4명의 점수 합산 /
 * 가장 낮은 점수를 얻는 팀이 우승 /
 * 6명의 주자가 참가하지 못한 팀은 점수 계산에서 제외 /
 * 동점의 경우 다섯 번째 주자가 가장 빨리 들어온 팀이 우승
 *
 * 1. ranks 배열을 순회하면서 각 팀의 인원들 명수 파악 ->  { 1: 3명, 2: 4명 ... }
 *
 * 2. 팀이 6명이 되지 않는 경우 점수 계산에세 제외 -> 주어진 팀 번호 배열에서 제외 ( index + 1 은 그대로 점수가 된다 )
 *
 * 3. 남은 팀의 상위 4명의 점수 합산 -> { 1: [1, 4, 6, 7] }
 *
 */
