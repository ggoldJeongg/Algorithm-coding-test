let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split("\n");

let [N, X] = data[0].split(" ").map(Number);
let dayVisitors = data[1].split(" ").map(Number);

function findMaxVisitors(N, X, dayVisitors) {
    let maxVisitors = 0;
    let currentVisitors = 0;
    let maxPeriods = 0;

    for (let i = 0; i < X; i++) {
        currentVisitors += dayVisitors[i];
    }
    maxVisitors = currentVisitors;
    maxPeriods = 1;

    for (let i = X; i < N; i++) {
        currentVisitors += dayVisitors[i] - dayVisitors[i - X];
        if (currentVisitors > maxVisitors) {
            maxVisitors = currentVisitors;
            maxPeriods = 1;
        } else if (currentVisitors === maxVisitors) {
            maxPeriods++;
        }
    }

    if (maxVisitors === 0) {
        console.log("SAD");
    } else {
        console.log(maxVisitors);
        console.log(maxPeriods);
    }
}

findMaxVisitors(N, X, dayVisitors);
