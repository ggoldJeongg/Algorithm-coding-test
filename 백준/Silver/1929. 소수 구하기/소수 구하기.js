const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

const prime = Array(N + 1).fill(true);
prime[0] = prime[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
    if (prime[i]) {
        for (let j = i * i; j <= N; j += i) {
            prime[j] = false;
        }
    }
}

const results = [];

for (let i = M; i <= N; i++) {
    if (prime[i]) {
        results.push(i);
    }
}

console.log(results.join('\n'));
