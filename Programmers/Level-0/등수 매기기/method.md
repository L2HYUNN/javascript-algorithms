In JavaScript, both the `indexOf()` and `findIndex()` methods are used to search for elements in an array. However, they have some differences in terms of their functionality and usage.

1. `indexOf()`: This method is used to find the first occurrence of a specified element within an array. It returns the index of the element if it is found, or -1 if the element is not present in the array.

   ```javascript
   const fruits = ['apple', 'banana', 'orange', 'apple'];
   console.log(fruits.indexOf('orange'));  // Output: 2
   console.log(fruits.indexOf('grape'));   // Output: -1
   ```

   In the example above, `indexOf()` is used to find the index of the first occurrence of 'orange' in the `fruits` array, which is 2. If 'grape' is not found in the array, `-1` is returned.

2. `findIndex()`: This method is used to find the index of the first element in an array that satisfies a provided testing function. It returns the index of the element if it meets the condition, or -1 if no element satisfies the condition.

   ```javascript
   const numbers = [10, 20, 30, 40];
   const index = numbers.findIndex(num => num > 25);
   console.log(index);  // Output: 2
   ```

   In the example above, `findIndex()` is used to find the index of the first number in the `numbers` array that is greater than 25. Since the element at index 2 (30) satisfies the condition, the output is 2.

To summarize, `indexOf()` is used to find the index of a specific element in an array, while `findIndex()` is used to find the index of the first element that satisfies a given condition.