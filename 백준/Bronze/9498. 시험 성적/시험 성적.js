var fs = require("fs");
var score = fs.readFileSync("/dev/stdin").toString().split(" ");
var scoreNumber = Number(score[0]);

if (scoreNumber >= 90 && scoreNumber <= 100) {
  console.log("A");
} else if (scoreNumber >= 80 && scoreNumber <= 89) {
  console.log("B");
} else if (scoreNumber >= 70 && scoreNumber <= 79) {
  console.log("C");
} else if (scoreNumber >= 60 && scoreNumber <= 69) {
  console.log("D");
} else {
  console.log("F");
}