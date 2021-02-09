let smallestMult = (largestDivisor) => {
  let solution;
  let potentialSolution = largestDivisor;
  let unsolved = true; // in order to execute a while loop, and stop that while loop once we find a solution

  while (unsolved === true) {
    let currentDivisor;
    for (
      currentDivisor = 1;
      currentDivisor <= largestDivisor;
      currentDivisor++
    ) {
      if (potentialSolution % currentDivisor !== 0) {
        break; // we will try dividing potential solutions between all values
      } else {
        if (currentDivisor === largestDivisor) {
          // this will only run if it manages to run successful
          solution = potentialSolution;
          unsolved = false;
        }
      }
    }
    potentialSolution = potentialSolution + 1;
  }

  return solution;
};

console.log("Result is " + smallestMult(5));

// smallestMult(13) should return 360360.
// smallestMult(10) should return 2520.
