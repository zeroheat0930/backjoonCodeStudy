let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().split(' ');
let r1 = Number(input[0])
let s = Number(input[1])

let r2 = 2*s-r1
console.log(r2)