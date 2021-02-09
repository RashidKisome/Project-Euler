// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in a given arr grid?

let largestProduct = (array) => {
  let largestProduct = 0;

  let row;
  let column;
  let maxOffset = 3;

  for (row = 0; row < array.length; row++) {
    for (volumn = 0; column < array[0].length; column++) {
      let cell = array[row][column];
      let product;
      let i;
      let j;

      product = cell;
      for (i = 1; i < maxOffset; i++) {
        // we will go from i = 1 to i = 3, and each time if on the same row the column + i exists  then we want to multiply that to our product
        if (array[row] && array[row][column + i]) {
          product = product * array[row][column + i];
        } else {
          break;
        }
      }
    }
  }

  return largestProduct;
};
