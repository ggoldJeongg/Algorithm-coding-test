const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = parseInt(input[0]);
const numbers = input.slice(1, k + 1).map(Number);

function calculateSum(k, numbers) {
    let stack = [];

    for (let i = 0; i < k; i++) {
        let num = numbers[i];
        if (num === 0) {
            stack.pop();
        } else {
            stack.push(num);
        }
    }

    let sum = stack.reduce((acc, cur) => acc + cur, 0);
    return sum;
}

console.log(calculateSum(k, numbers));
