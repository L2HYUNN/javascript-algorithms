function solution(today, terms, privacies) {
  // 결과 배열
  const result = [];
  
  // 날짜 비교를 위해 today를 년, 월, 일로 이루어진 배열로 만든다.
  const [todayYear, todayMonth, todayDay] = today.split(".").map((el) => +el);
  
  // terms 배열을 순회하며 terms 객체를 새로 생성한다.
  const TERMS = {};

  terms.forEach((term) => {
      const [termName, termDate] = term.split(" ");
      TERMS[termName] = +termDate;
  })
  
  // privacies 배열을 순회해야한다.
  privacies.forEach((privacy, index) => {
      // 개인정보 수집 일자와 약관 종류를 분류한다.
      const [privacyDate, privacyTermName] = privacy.split(" ");
      // 개인정보 수집 일자를 년, 월, 일로 분류한다.
      const [privacyYear, privacyMonth, privacyDay] = privacyDate.split(".").map((el) => +el);
      
      // 보관 가능 날짜 계산하기
      let calculatedYear = privacyYear;
      let calculatedMonth = privacyMonth + TERMS[privacyTermName];
      let calculatedDay = privacyDay;
      
      if(Math.floor(calculatedMonth / 12) > 0) {
          calculatedYear += Math.floor(calculatedMonth / 12);
          
          if(calculatedMonth % 12 === 0) {
              calculatedMonth = 12;
              
              if(Math.floor(calculatedMonth / 12) === 1) {
                  calculatedYear--;
              }
          } else {
              calculatedMonth = calculatedMonth % 12;
          }
      }
  
      // 오늘 날짜가 보관 가능 날짜보다 큰 경우 파기해야할 정보이다.
      if(todayYear > calculatedYear 
         || (todayYear === calculatedYear && todayMonth > calculatedMonth)
        || (todayYear === calculatedYear && todayMonth === calculatedMonth && todayDay >= calculatedDay)) {
          result.push(index + 1);
      } 
  
  })
  
  return result;
}

/**
today = 오늘 날짜
terms = ["약관 종류, 유효기간"]
privacies = ["개인정보 수집 일자, 약관 종류"] 


privacies 배열을 순회해야한다.

약관 종류를 살펴보고 terms에서 종류에 맞는 유효기간 개월 수를 확인한다.

개인정보 수집 일자에서 유효기간 만큼을 더해 보관 가능한 개인정보 날짜를 계산한다.

오늘 날짜와 비교하여 만약 오늘 날짜가 보관 가능 날짜를 넘었다면 파기해야할 개인정보에 추가한다.

제가 비슷하게 풀었는데
확인해보니 12월일때, 12월보다 큰데 12로 나눴을때 나머지가 0인 경우가 누락되었어요

*/