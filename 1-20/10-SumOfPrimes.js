/* 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

// The algorithm we are going to use is called " Sieve Of Eratothenes"
// https://www.geeksforgeeks.org/sieve-of-eratosthenes/

let primeSummation = () => {
  let sum = 0;

  let arrayToSum = [0, 0];
  let i;
  for (i = 2; i < n; i++) {
    // we'll go through all the indexes between 2 and n
    arrayToSum.push(i);
  }
  for (i = 2; i < n; i++) {
    if (arrayToSum[i] != 0) {
      // check that it has not been crossed out already

      let j;
      for (j = 2 * i; j < n; j += i) {
        // each time we will increment by i which is 2, then set whatever that index is to 0
        arrayToSum[j] = 0;
      }
    }
  }

  for (i = 0; i < arrayToSum.length; i++) {
    if (arrayToSum[i] != 0) {
      //   console.log("added prime" + arrayToSum[i] + ", sum is now" + sum)
    }
    sum = sum + arrayToSum[i];
  }

  return sum;
};

console.log("Result is " + primeSummation(100));

// primeSummation(2001) should return 277050.
// primeSummation(17) should return 41.
