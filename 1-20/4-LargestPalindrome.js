/*  
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
https://projecteuler.net/problem=4
*/

// function to check if the given value is a palindrome
// it will just take a string backwards and check if its the same backwards and forward
let isPalindrome = (string) => {
  // create the backwards version of whatever was passed in
  let backwardString = string.split("").reverse().join("");

  if (string === backwardString) {
    return true;
  }
  return false;
};

// this will go through all the combinations of numbers in that given range, multiply them together, if the result is a palindrome and larger than our largest product found so far, it will update our largest product
let largestPalindromeProduct = (numberOfDigits) => {
  // set up a varible to track this
  let largestProduct = 0;

  // the first thing we want to do is generate a range of numbers, that we are going to try and multiply the numbers between...for example 2 digits would be 10 -99 and so on...
  let i;
  let j;

  let startValueString = "1";
  for (i = 1; i < numberOfDigits; i++) {
    startValueString = startValueString + "0"; // this adds the appropriate number of zeros
  }
  let finishValueString = startValueString + "0";

  let startValue = parseInt(startValueString);
  let finishValue = parseInt(finishValueString) - 1;

  for (i = startValue; i <= finishValue - 1; i++) {
    // this will iterate from 10...10, 11,12,13...or 100,101
    for (j = startValue + 1; j <= finishValue; j++) {
      // whatever i & j are, they will be two unique values that we can multiply together
      let product = i * j;
      if (isPalindrome(product.toString()) && product > largestProduct) {
        largestProduct = product;
      }
    }
  }

  return largestProduct;
};

console.log("result is" + largestPalindromeProduct(2));

// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.
