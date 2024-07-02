let fs = require("fs");
let data = fs.readFileSync("/dev/stdin").toString().split("\n");

let input = data[0].split(" ").map(Number);
let N = input[0];
let M = input[1];
let cardNumbers = data[1].split(" ").map(Number);

let cardSum = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let currentSum = cardNumbers[i] + cardNumbers[j] + cardNumbers[k];
      if (currentSum <= M && currentSum > cardSum) {
        cardSum = currentSum;
      }
    }
  }
}

console.log(cardSum);