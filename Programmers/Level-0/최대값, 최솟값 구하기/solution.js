const arr = [1, 2, 3, 4, 5];

function solution(arr) {
  var min, max;
  /**
   * Math.max(1,3,5)와 같이 사용하면 수들의 최대값을 구할 수 있다.
   * 하지만 보통 숫자의 나열 대신 Array를 사용하기 때문에 Array를 숫자들의 묶음으로 변경할 수 있는 방법이 필요하다.
   *
   * Function.prototype.apply() 메소드를 사용하는 방법과
   * Spread Operator(전개 연산자)를 사용하는 방법을 통해 Array의 최대값을 찾아보자.
   * /
  
  /**
   * 1. Function.prototype.apply()
   * 함수를 호출 할때 일반적으로 함수명(파라미터)의 형식으로 호출하지만, 함수의 apply() 메소드를 호출해서 함수를 호출할 수도 있다.
   * apply(함수에서 사용할 this객체, 호출하는 함수로 전달할 파라미터) 형식으로 사용
   */
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);

  /**
   * 2. Spread Operator(전개 연산자)
   * ES6 문법으로 ...를 통해 배열의 원소들을 꺼낼 수 있다.
   * 가독성 측면에서 이 방법이 위 방법보다 좋아보인다.
   */
  max = Math.max(...arr);
  min = Math.min(...arr);

  return [max, min];

  // 참고: https://programmingsummaries.tistory.com/108
}

console.log(solution(arr));
