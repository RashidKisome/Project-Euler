/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.  
 
 https://projecteuler.net/problem=540

 */

let specialPythagoreanTriplet = (targetValue) => {
  let a;
  let b;
  // first thing we will do is go through all the values that a could be
  for (a = 1; a < targetValue - 2; a++) {
    for (b = a + 1; b < targetValue - 2; b++) {
      let cSquared = Math.pow(a, 2) + Math.pow(b, 2);
      let c = Math.sqrt(cSquared);
      if (Number.isInteger(c) && a + b + c === targetValue) {
        let product = a * b * c;
        console.log("a is " + a);
        console.log("c is " + b);
        console.log("c is " + c);
        return product;
      }
    }
  }
};

console.log("result is " + specialPythagoreanTriplet(24));
