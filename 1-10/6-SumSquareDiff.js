/* 
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

// We are gonna have to create a value for the sum of all the square
// And we are also gonna have to create a value for the whole sum squared
// Then just take them away from each other

let sumSquareDifference = (n) => {
  let squaredSum = 0;
  let sum = 0;

  let i;
  for (i = 1; i <= n; i++) {
    // we are going to iterate through all the numbers from 1 to n
    sum = sum + i; // it will add the numbers to the sum while iterating

    squaredSum = squaredSum + Math.pow(i, 2); // square the number, this will also be added to the squared sum
  }
  console.log("sum of each number squared");
  // we square the sum to get the whole sum squared
  let sumSquared = Math.pow(sum, 2);
  // the we return the difference between them
  return sumSquared - squaredSum;
};

console.log("result " + sumSquareDifference(10));

// sumSquareDifference(20) should return 41230.
// sumSquareDifference(10) should return 2640.
