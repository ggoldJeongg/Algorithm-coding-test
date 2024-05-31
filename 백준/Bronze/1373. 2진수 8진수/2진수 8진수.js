const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let binary = input;
let answer = [];

while (binary.length % 3 !== 0) {
    binary = '0' + binary;
}

for (let i = 0; i < binary.length; i += 3) {
    let chunk = binary.substring(i, i + 3);
    let octal = parseInt(chunk, 2).toString(8);
    answer.push(octal);
}

console.log(answer.join(''));