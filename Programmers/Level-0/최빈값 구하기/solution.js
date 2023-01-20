const array = [1, 2, 2, 2, 3, 4, 4, 5];

function solution(array) {
  var answer = 0;
  var store = {};

  if (array.length === 1) return array[0];

  array.forEach((number) => {
    return store[number] ? store[number]++ : (store[number] = 1);
  });

  const values = Object.values(store);
  const maxValue = Math.max.apply(null, values);

  const checkDuplicateValueArray = values.filter((value) => {
    return value === maxValue;
  });
  if (checkDuplicateValueArray.length > 1) return -1;

  const maxValueIndex = values.findIndex((element) => element === maxValue);
  answer = +Object.keys(store)[maxValueIndex];

  return answer;
}

console.log(solution(array));
