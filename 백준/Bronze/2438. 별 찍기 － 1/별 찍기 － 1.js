let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let i = 1; i <= N; i ++){
  let stars = '';
  for (let j = 0; j < i; j++){
    stars += '*';
  }
  console.log(stars);
}
  