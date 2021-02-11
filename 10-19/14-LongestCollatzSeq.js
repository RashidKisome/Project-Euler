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

let longestCollatzSequence = (limit) => {
  let longestSequence = 1;
  let longestValue = 1;

  let startValue;
  for (startValue = 2; startValue < limit; startValue++) {
    let numberOfterms = 1;
    let currentTerm = startValue;

    while (currentTerm != 1) {
      if (currentTerm % 2 === 0) {
        currentTerm / 2;
      } else {
        currentTerm = 3 * currentTerm + 1;
      }
      numberOfterms = numberOfterms + 1;
    }

    if (numberOfterms > longestCollatzSequence) {
      console.log("Number of terms for " + startValue + "is " + numberOfterms);
      longestSequence = numberOfterms;
      longestValue = startValue;
    }
  }
  return longestValue;
};

console.log("Result is " + longestCollatzSequence(5847));

// longestCollatzSequence(5847) should return 3711.
// longestCollatzSequence(100000) should return 77031.
