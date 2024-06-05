const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const expression = input[1];
const values = input.slice(2, 2 + N).map(Number);

const operandValues = {};
for (let i = 0; i < N; i++) {
  operandValues[String.fromCharCode(65 + i)] = values[i];
}

const stack = [];

for (const char of expression) {
  if (char >= 'A' && char <= 'Z') {
    stack.push(operandValues[char]);
  } else {
    const b = stack.pop();
    const a = stack.pop();
    let result;
    switch (char) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        throw new Error('Invalid operator');
    }
    stack.push(result);
  }
}

const finalResult = stack.pop();
console.log(finalResult.toFixed(2));
