var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

function mostFrequentAlphabet(word) {
    let frequency = new Array(26).fill(0);
    
    word = word.toUpperCase();
    
    for (let char of word) {
        if (char >= 'A' && char <= 'Z') {
            let index = char.charCodeAt(0) - 65;
            frequency[index]++;
        }
    }
    
    let maxFreq = 0;
    let maxChar = '?';
    let maxCount = 0;
    
    for (let i = 0; i < 26; i++) {
        if (frequency[i] > maxFreq) {
            maxFreq = frequency[i];
            maxChar = String.fromCharCode(i + 65);
            maxCount = 1;
        } else if (frequency[i] === maxFreq) {
            maxCount++;
        }
    }
    
    if (maxCount > 1) {
        maxChar = '?';
    }
    console.log(maxChar);
}
mostFrequentAlphabet(input);