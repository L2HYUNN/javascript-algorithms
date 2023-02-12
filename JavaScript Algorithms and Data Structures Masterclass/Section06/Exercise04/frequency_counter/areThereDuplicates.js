/**
 * @description
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * Examples:
 *
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 * Restrictions:
 *
 * Time - O(n)
 *
 * Space - O(n)
 *
 * Bonus:
 *
 * Time - O(n log n)
 *
 * Space - O(1)
 */
function areThereDuplicates() {
  if (arguments.length === 0) return false;

  const duplicatesCounter = {};

  // arguments는 객체이며 iterable 속성이 없기 때문에 for ...in 구문을 사용해야하는가?
  // for (let arg in arguments) {
  //   duplicatesCounter[arguments[arg]] =
  //     (duplicatesCounter[arguments[arg]] || 0) + 1;
  // }
  for (let arg of arguments) {
    duplicatesCounter[arg] = (duplicatesCounter[arg] ?? 0) + 1;
  }

  for (let key in duplicatesCounter) {
    if (duplicatesCounter[key] >= 2) return true;
  }

  return false;
}

console.log(areThereDuplicates("a", "b", "a"));
