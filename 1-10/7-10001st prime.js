/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

let nthPrime = (n) => {
  // main function of this algorithm is basically coming up with a way of generating prime numbers

  let count = 0;
  let candidateValue = 2; // the value we change each time to check if its a prime number
  let latestPrime = 2; // the latest prime number that we have generated

  while (count < n) {
    let isPrime = true;

    let i;
    for (i = 2; i < candidateValue; i++) {
      // divide it by all numbers between 2 and itself
      if (candidateValue % i === 0) {
        isPrime = false;
        break;
      }
    }

    // if its still prime after the for loop
    if (isPrime) {
      latestPrime = candidateValue;
      count = count + 1;
    }
    if (candidateValue === 2) {
      candidateValue = 3;
    } else {
      candidateValue = candidateValue + 2; // move on to the next odd number
    }
  }
  return latestPrime;
};

console.log("Resutl is " + nthPrime(10));

// nthPrime(1000) should return 7919.
// nthPrime(100) should return 541.
