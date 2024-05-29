var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var A = Number(input[0]);
var B = Number(input[1]);

function findDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function greatestCommonDivisor(A, B) {
  let divisorsA = findDivisors(A);
  let divisorsB = findDivisors(B);
  
  let commonDivisors = divisorsA.filter(value => divisorsB.includes(value));
  
  return Math.max(...commonDivisors);
}

function leastCommonMultiple(A, B) {
  let gcd = greatestCommonDivisor(A, B);
  return (A * B) / gcd;
}

console.log(greatestCommonDivisor(A, B));
console.log(leastCommonMultiple(A, B));
