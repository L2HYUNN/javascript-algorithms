function solution(survey, choices) {
  // 성격 유형
  const PERSONALITIES = ["RT", "CF", "JM", "AN"];

  // 성격 유형 점수
  const PERSONALITY_SCORE = [3, 2, 1, 0, 1, 2, 3];

  // 퍈의를 위해 미리 정답을 사전순으로 정해주자.
  const answer = ["R", "C", "J", "A"];

  // survey에 따른 성격 유형 점수를 확인하기 위한 객체
  const totalPesonalityScore = {};

  // 계산된 성격 유형 점수를 위한 객체
  const calculatedPesonalityScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    // totalPesonalityScore에 정보가 존재하지 않을시 [0, 0] 로 초기화
    if (!totalPesonalityScore[survey[i]]) {
      totalPesonalityScore[survey[i]] = [0, 0];
    }

    // 비동의시 왼쪽 캐릭터 유형에 점수를 더한다.
    if (choices[i] < 4) {
      totalPesonalityScore[survey[i]][0] += PERSONALITY_SCORE[choices[i] - 1];
      continue;
    }

    // 동의시 오른쪽 캐릭터 유형에 점수를 더한다.
    if (choices[i] > 4) {
      totalPesonalityScore[survey[i]][1] += PERSONALITY_SCORE[choices[i] - 1];
      continue;
    }
  }
  // totalPesonalityScore를 순회하면서 각 성격 유형 점수의 합계를 계산하자.
  for (let score in totalPesonalityScore) {
    const [leftPesonality, rightPersonality] = [score[0], score[1]];
    const [leftPesonalityScore, rightPersonalityScore] = [
      totalPesonalityScore[score][0],
      totalPesonalityScore[score][1],
    ];

    calculatedPesonalityScore[leftPesonality] += leftPesonalityScore;
    calculatedPesonalityScore[rightPersonality] += rightPersonalityScore;
  }
  // 성격 유형에 따라 계산된 점수를 토대로 성격 유형을 결정한다.
  PERSONALITIES.forEach((personality, index) => {
    const [left, right] = [personality[0], personality[1]];

    if (calculatedPesonalityScore[left] > calculatedPesonalityScore[right]) {
      answer[index] = left;
    }

    if (calculatedPesonalityScore[left] < calculatedPesonalityScore[right]) {
      answer[index] = right;
    }
  });

  return answer.reduce((acc, cur) => acc + cur, "");
}

/**
1. 4가지 지표에 따른 점수를 계산한다.

2. 지표에서 높은 점수를 받은 성격 유형을 결정한다.

const PESONALITIES = ["RT", "CF", "JM", "AN"]

const totalPesonalityScore = {
"AN": [0, 0],
"NA": [0, 0],
... 
}

totalPesonalityScore["AN"][0] + totalPesonalityScore["NA"][1] = A's total Score 
totalPesonalityScore["AN"][1] + totalPesonalityScore["NA"][0] = N's total Score

N, A total score를 비교하여 더 큰 쪽을 성격 유형으로 선택

동일 점수 시 사전순으로 빠른순 정렬해야한다.

"AN": [0, 0],
"NA": [0, 0],

choices[i] === 3 -> 모르겠음의 경우 점수는 0점

choices[i] > 3 -> 동의 survey[i][1] 유형 선택


totalPesonalityScore 를 순회하며

"AN": [0, 0]

const calculatedPesonalityScore = {
  "R": 0,
  "T": 0,
  "C": 0,
  "F": 0,
  "J": 0,
  "M": 0,
  "A": 0,
  "N": 0,
}

[{"R": 0, "T": 0}, ...]


*/

/**
survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나
[비동의, 동의]

survey[i]의 첫 번째 캐릭터는 i+1번 질문의 

비동의 관련 선택지를 선택하면 받는 성격 유형

survey[i]의 두 번째 캐릭터는 i+1번 질문의 

동의 관련 선택지를 선택하면 받는 성격 유형

choices[i]는 검사자가 선택한 i+1번째 질문의 선택지를 의미합니다. (매우 비동의 1~7 매우 동의)

매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
동의나 비동의 선택지를 선택하면 2점을 얻습니다.
약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
모르겠음 선택지를 선택하면 점수를 얻지 않습니다.
*/
