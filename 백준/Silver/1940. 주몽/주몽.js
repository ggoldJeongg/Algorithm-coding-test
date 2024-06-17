let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = Number(data[0]);
let M = Number(data[1]);
let numbers = data[2].split(" ").map(Number);

let cnt = 0;
let start = 0;
let end = N - 1;

numbers.sort((a, b) => a - b);

while (start < end) {
  let sum = numbers[start] + numbers[end];
  if (sum === M) {
    cnt += 1;
    start += 1;
    end -= 1;
  } else if (sum < M) {
    start += 1;
  } else {
    end -= 1;
  }
}

console.log(cnt);