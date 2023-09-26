let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

let input = fs.readFileSync(filePath).toString().split(' ')
let str = input.toString();
result = str.charCodeAt(0);

console.log(result);