let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T1 = BigInt(input[0]);
let T2 = BigInt(input[2]);
let T = input[1].trim();
let answer = "";

if(T == '*'){
    answer = T1 * T2
}else if (T == '+'){
    answer = T1 + T2
}
console.log(answer)
