let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const prime = Array(N + 1).fill(true);
prime[0] = prime[1] = false;

let count = 0;
let KthRemoveNumber = null;

for (let P = 2; P <= N; P++) {
  if (prime[P]) {
    for (let j = P; j <= N; j += P) {
      if(prime[j]) {
       prime[j] = false;
       count++;
       if (count === K) {
         KthRemoveNumber = j;
         break;
        }
      }
    }
  }
  if (KthRemoveNumber !== null) break;
}

console.log(KthRemoveNumber);