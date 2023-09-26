let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let caseCount = Number(input[0]);
let result = '';
for(i=1; i<=caseCount; i++){
    let count = Number(input[i].split(' ')[0]);  // 각 케이스 당 문자 반복 횟수 (R)
    let cases = input[i].split(' ')[1];  // 케이스 문자열 분리

    for (let j = 0; j < cases.length; j++) {
        for (let k = 0; k < count; k++) {
          result += cases[j];
        }
      }
      result += '\n';
}
console.log(result)