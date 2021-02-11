/* 

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above one million.


https://en.wikipedia.org/wiki/Collatz_conjecture
https://projecteuler.net/problem=14

*/

/* Solution Function */
let longestCollatzSequence = (limit) => {
  /* Stores the length of the longest sequence found so far,
        and it's starting value */
  let longestSequence = 1;
  let longestValue = 1;

  /* Go through each possible starting value from 2 to the limit */
  let startValue;
  for (startValue = 2; startValue < limit; startValue++) {
    /* Keep track of the number of terms for this start value */
    let numberOfTerms = 1;
    let currentTerm = startValue;

    /* Build the chain until we reach 1, incrementing the number of terms */
    while (currentTerm != 1) {
      if (currentTerm % 2 === 0) {
        currentTerm = currentTerm / 2;
      } else {
        currentTerm = 3 * currentTerm + 1;
      }
      numberOfTerms = numberOfTerms + 1;
    }

    /* If chain is longer than longest found so far, update longest */
    if (numberOfTerms > longestSequence) {
      console.log("Number of terms for " + startValue + " is " + numberOfTerms);
      longestSequence = numberOfTerms;
      longestValue = startValue;
    }
  }

  /* Return the starting value of the longest chain */
  return longestValue;
};

/* Check Solution */
console.log("Result is " + longestCollatzSequence(1000000));

// longestCollatzSequence(5847) should return 3711.
// longestCollatzSequence(100000) should return 77031.
