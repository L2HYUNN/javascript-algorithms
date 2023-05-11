function getServiceChicken(coupon) {
  return Math.floor(coupon / 10);
}

function getRestServiceCoupon(coupon) {
  return coupon % 10;
}

function solution(chicken) {
  let serviceCoupon = chicken;
  let serviceChicken = 0;

  while (serviceCoupon >= 10) {
    serviceChicken += getServiceChicken(serviceCoupon);
    serviceCoupon =
      getServiceChicken(serviceCoupon) + getRestServiceCoupon(serviceCoupon);
  }

  return serviceChicken;
}

console.log(solution(1081));
console.log(solution(1999));

/**
 * 치킨 1마리 = 쿠폰 1장
 * 쿠폰 10장 = 치킨 1 마리
 *
 * 1999마리
 * 쿠폰 1999장 -> 199마리 -> 199 + 9 남은 쿠폰
 * 쿠폰 208장 -> 20마리 -> 20 + 8 남은 쿠폰
 * 쿠폰 28장 -> 2마리 -> 2 + 8 남은 쿠폰
 * 쿠폰 10장 -> 1마리 -> 1 + 0 남은 쿠폰
 *
 */
