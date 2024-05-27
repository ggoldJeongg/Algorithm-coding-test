var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 데이터를 문자열로 가져와 줄바꿈을 기준으로 나누기

let N = Number(input[0]); // 첫 번째 줄을 숫자로 변환하여 N에 저장
let string = input[1]; // 두 번째 줄에서 문자열을 가져와 string에 저장

let answer = 0; // 정답을 저장할 변수 초기화

for (let x of string) { 
    answer += Number(x); // 문자열의 각 문자를 숫자로 변환하여 더하기
}

console.log(answer);