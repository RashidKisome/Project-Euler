// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

let largestPrimeFactor = (number) => {
  // 1. The algorithm: We are going to divide the number by 2 as much as possible
  // 2. Then divide by the smallest odd number possible each time untll quotient is 1
  let latestDivisor = 2; // first number we will try to divide by
  let quotient = number; // to keep track of the track of the division

  while (quotient % 2 === 0) {
    // while quotient can be divided by 2
    latestDivisor = 2;
    quotient = quotient / 2; // keep dividing by 2
  }
  let divisor = 3; // We are working through all the odd numbers and we want to start with 3
  while (quotient > 1) {
    if (quotient % divisor === 0) {
      quotient = quotient / divisor;
      latestDivisor = divisor; // we want to make sure that latestDivisor is set to current divisor
    }
    divisor = divisor + 2; // first we will start off with 3 then 5... then 7 and so
  }

  return latestDivisor;
};

console.log(" result is " + largestPrimeFactor(13195));

// argestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857.
// largestPrimeFactor(8) should return 2.
