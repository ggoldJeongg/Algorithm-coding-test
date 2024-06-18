let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(data[0].split(" ")[0]);
let K = Number(data[0].split(" ")[1]);

let value = [];

for (let i = 1; i <= N; i++) {
  value.push(Number(data[i]));
}

let count = 0;

for (let i = N - 1; i >= 0; i--) {
  count += parseInt(K / value[i]);
  K %= value[i];
}

console.log(count);