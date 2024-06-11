let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let pokemonNameToNumber = new Map();
let pokemonNumberToName = new Map();

for (let i = 1; i <= N; i++) {
  let pokemonName = input[i];
  pokemonNameToNumber.set(pokemonName, i);
  pokemonNumberToName.set(i, pokemonName);
}

let result = [];

for (let i = N +1; i < N + 1 + M; i++) {
  let query = input[i];
  if (isNaN(query)) {
    result.push(pokemonNameToNumber.get(query));
  } else {
     result.push(pokemonNumberToName.get(Number(query)));
  }
}

console.log(result.join("\n"));