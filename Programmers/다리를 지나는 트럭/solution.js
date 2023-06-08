function solution(bridgeLength, weight, truckWeight) {
  const bridge = new Array(bridgeLength).fill(0);

  let answer = 0;
  let sumOfTruckWeightOnBridge = 0;

  while (truckWeight.length) {
    answer++;
    sumOfTruckWeightOnBridge -= bridge.shift();

    if (sumOfTruckWeightOnBridge + truckWeight[0] > weight) {
      bridge.push(0);
    } else {
      const movedTruck = truckWeight.shift();
      bridge.push(movedTruck);
      sumOfTruckWeightOnBridge += movedTruck;
    }
  }

  return answer + bridgeLength;
}
