function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  let deliverySum = deliveries.reduce((acc, cur) => acc + cur, 0);
  let pickupSum = pickups.reduce((acc, cur) => acc + cur, 0);

  while (deliverySum !== 0 || pickupSum !== 0) {
    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i] === 0) {
        deliveries.pop();
      } else {
        break;
      }
    }

    for (let i = pickups.length - 1; i >= 0; i--) {
      if (pickups[i] === 0) {
        pickups.pop();
      } else {
        break;
      }
    }

    let delivery = 0;
    let deliveryCapability = cap;

    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i] >= deliveryCapability) {
        deliveries[i] -= deliveryCapability;
        delivery += deliveryCapability;
        break;
      } else {
        deliveryCapability -= deliveries[i];
        delivery += deliveries[i];
        deliveries[i] = 0;
      }
    }

    deliverySum -= delivery;

    let pickup = 0;
    let pickupCapability = cap;

    for (let i = pickups.length - 1; i >= 0; i--) {
      if (pickups[i] >= pickupCapability) {
        pickups[i] -= pickupCapability;
        pickup += pickupCapability;
        break;
      } else {
        pickupCapability -= pickups[i];
        pickup += pickups[i];
        pickups[i] = 0;
      }
    }

    pickupSum -= pickup;

    let distance = Math.max(deliveries.length, pickups.length);

    answer += distance * 2;
  }

  return answer;
}
