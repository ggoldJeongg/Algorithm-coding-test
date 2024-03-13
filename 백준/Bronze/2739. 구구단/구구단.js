let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let M = 1; M <=9; M++){
  let result = N * M;
  console.log(`${N} * ${M} = ${result}`);
}
