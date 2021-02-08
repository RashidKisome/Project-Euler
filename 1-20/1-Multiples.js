/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */

// function multiplesOf3and5() {
//   return true;
// }

// multiplesOf3and5(1000);

let multiplesOf3and5 = (number) => {
  // create a sum variable and initialize to zero
  let sum = 0;
  let i;
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      // if i is a multiple of 3 or 5, both test will pass
      sum = sum + i; // add sum to i
    }
  }

  return sum;
};

console.log(multiplesOf3and5(1000));

// fiboEvenSum(34) should return 44.
// fiboEvenSum(1000) should return 798
// fiboEvenSum(100000) should return 60696.
