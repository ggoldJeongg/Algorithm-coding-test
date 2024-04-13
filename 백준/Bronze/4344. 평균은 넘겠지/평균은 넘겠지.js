let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);

for(let t = 1; t <= testCases; t++) {
    let data = input[t].split(' ').map(Number);
    let n = data[0];
    let summary = 0;
    for(let i = 1; i <= n; i++) {
        summary += data[i];
    }

let average = summary / n;
let aboveAverageStudent = 0;
    for (let i = 1; i <= n; i++){
        if (data[i] > average) 
            aboveAverageStudent += 1;
        }

let percentageAboveAverage = (aboveAverageStudent / n * 100).toFixed(3);
    console.log(`${percentageAboveAverage}%`);
}