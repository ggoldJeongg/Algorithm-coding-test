let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = BigInt(data[0]);
let roadDistance = data[1].split(" ").map(BigInt);
let oilPrice = data[2].split(" ").map(BigInt);

let isAllPricesOne = oilPrice.every(price => price === 1n);

let totalCost = 0n;

if (isAllPricesOne) {
    totalCost = roadDistance.reduce((acc, cur) => acc + cur, 0n);
} else {
    let minPrice = oilPrice[0];
    for (let i = 0n; i < N - 1n; i++) {
        if (oilPrice[i] < minPrice) {
            minPrice = oilPrice[i];
        }
        totalCost += minPrice * roadDistance[i];
    }
}

console.log(totalCost.toString());
