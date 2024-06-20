let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = Number(data[0]);
let roadDistance = data[1].split(" ").map(Number);
let oilPrice = data[2].split(" ").map(Number);

let totalCost = 0;
let minPrice = oilPrice[0];

for (let i = 0; i < N -1; i++) {
  if (oilPrice[i] < minPrice) {
    minPrice = oilPrice[i];
  }
  totalCost += minPrice *roadDistance[i];
}
console.log(totalCost);
