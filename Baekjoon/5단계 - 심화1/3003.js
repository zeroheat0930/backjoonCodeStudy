let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

let chess = ['1','1','2','2','2','8']
let result = []

for(i=0; i<=5; i++){
    result.push(chess[i] - input[i])
}
console.log(result.join(" "))