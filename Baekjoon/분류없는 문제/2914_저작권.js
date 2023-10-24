let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

let input = fs.readFileSync(filePath).toString().split(' ');
let n = Number(input[0])
let m = Number(input[1])
let answer = n*(m-1) + 1
console.log(answer)