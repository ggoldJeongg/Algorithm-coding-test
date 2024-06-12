const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = Number(input[0]); 
let sanggeunCards = input[1].split(" ").map(Number);
let M = Number(input[2]);
let queries = input[3].split(" ").map(Number); 

let cardCount = new Map();

for (let card of sanggeunCards) {
    if (cardCount.has(card)) {
        cardCount.set(card, cardCount.get(card) + 1);
    } else {
        cardCount.set(card, 1);
    }
}

let result = [];
for (let query of queries) {
    if (cardCount.has(query)) {
        result.push(cardCount.get(query));
    } else {
        result.push(0);
    }
}

console.log(result.join(" "));