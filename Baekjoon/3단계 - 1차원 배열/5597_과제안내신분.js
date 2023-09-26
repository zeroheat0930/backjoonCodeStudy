const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let allArr = Array.from({length: 30}, (_, i) => i + 1); // 출석번호 1부터 30까지 생성

let missingNumbers = allArr.filter(item => !input.includes(item));

console.log(missingNumbers.sort((a,b) => a - b).join('\n'));