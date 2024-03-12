function solution(friends, gifts) {
  const TOTAL_GIFT_INFO = {};

  friends.forEach((friend) => {
    const GIFT_INFO = {
      giftForOther: 0,
      giftForMe: 0,
      giftIndex: 0,
    };

    TOTAL_GIFT_INFO[friend] = GIFT_INFO;
  });
  // 준 선물, 받은 선물
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");

    TOTAL_GIFT_INFO[giver]["giftForOther"]++;
    TOTAL_GIFT_INFO[receiver]["giftForMe"]++;
  });
  // 선물 지수
  friends.forEach((friend) => {
    TOTAL_GIFT_INFO[friend]["giftIndex"] =
      TOTAL_GIFT_INFO[friend]["giftForOther"] -
      TOTAL_GIFT_INFO[friend]["giftForMe"];
  });
  // 서로 주고 받은 선물 관계
  const GIFT_INFO_EACH_OTHER = {};

  function friendDFS(target) {
    const curIndex = friends.indexOf(target);

    friends.forEach((friend) => {
      if (target !== friend) {
        GIFT_INFO_EACH_OTHER[`${target} ${friend}`] = 0;
      }
    });

    if (curIndex === friends.length - 1) return;

    friendDFS(friends[curIndex + 1]);
  }

  friendDFS(friends[0]);

  gifts.forEach((gift) => {
    GIFT_INFO_EACH_OTHER[gift]++;
  });
  // 결과
  const result = {};

  friends.forEach((friend) => {
    result[friend] = 0;
  });
  // 메인 비교 로직
  Object.keys(GIFT_INFO_EACH_OTHER).some((friendExchangeInfo) => {
    if (GIFT_INFO_EACH_OTHER[friendExchangeInfo] === false) return false;

    const [giver, receiver] = friendExchangeInfo.split(" ");
    const reverseFriendExchangeInfo = [receiver, giver].join(" ");

    const giverGiftNumber = GIFT_INFO_EACH_OTHER[friendExchangeInfo];
    const receiverGiftNumber = GIFT_INFO_EACH_OTHER[reverseFriendExchangeInfo];

    GIFT_INFO_EACH_OTHER[friendExchangeInfo] = false;
    GIFT_INFO_EACH_OTHER[reverseFriendExchangeInfo] = false;

    if (giverGiftNumber > receiverGiftNumber) {
      result[giver]++;
      return false;
    }

    if (giverGiftNumber < receiverGiftNumber) {
      result[receiver]++;
      return false;
    }

    if (
      TOTAL_GIFT_INFO[giver]["giftIndex"] >
      TOTAL_GIFT_INFO[receiver]["giftIndex"]
    ) {
      result[giver]++;
      return false;
    }

    if (
      TOTAL_GIFT_INFO[giver]["giftIndex"] <
      TOTAL_GIFT_INFO[receiver]["giftIndex"]
    ) {
      result[receiver]++;
      return false;
    }

    return false;
  });

  const answer = Math.max(...Object.values(result));

  return answer;
}

/*
-- 문제 --
case1 | 두 사람 사이에 선물을 주고받은 기록이 있다.
더 많은 선물을 준 사람이 선물을 하나 받는다.

case2 | 두 사람 사이에 기록이 없거나 주고 받는 수가 같다.
선물 지수가 높은 사람이 선물을 하나 받는다.

선물지수 = 이번 달까지 친구들에게 준 선물 - 받은 선물

위와 같은 경우를 종합하여 이번 달 까지의 선물 갯수 계산

result = 다음 달 선물을 가장 많이 받을 친구가 받을 선물의 수

-- 변수 --
친구들의 이름을 담은 1차원 문자열 배열 friends

이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts가 매개변수로 주어집니다.

이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return


만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.

Think
구해야 하는 것
(이름)이 준 선물의 수, (이름)이 받은 선물의 수, 선물 지수
두 사람 사이의 선물 교환 수,

pesudo code
const GIFT_INFO = {
    "giftForOther": number,
    "giftForMe" : number,
    "giftIndex": number
}

const TOTAL_GIFT_INFO = {
    "muzi": GIFT_INFO,
    ...
}

const PERSONAL_GIFT_INFO = {
    "muzi": {
        "ryan": nunmber,
        ...
    }
}


const giftForOther (이름)이 준 선물의 수,
const giftForMe (이름)이 받은 선물의 수,

gifts.forEach((giver 선물을 준 사람, receiver 선물을 받은 사람) => {
    if(!TOTAL_GIFT_INFO[giver]["giftForOther"]) {
        TOTAL_GIFT_INFO[giver]["giftForOther"] = 0;
    }
    TOTAL_GIFT_INFO[giver]["giftForOther"]++;


    if(!TOTAL_GIFT_INFO[receiver]["giftForMe"]) {
        TOTAL_GIFT_INFO[receiver]["giftForMe"] = 0;
    }
    TOTAL_GIFT_INFO[receiver]["giftForMe"]++;
})

friends.forEach((friend) => {

})





*/
