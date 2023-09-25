let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(input[i].substring(0, 1) + input[i].substring(input[i].length - 1, input[i].length));
}


// 내가 짠 코드도 맞는 코드인데 이 사이트는 인식을 이상하게해서 이해를 못함
// 내가짠코드
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split('\r\n');
// 
// var a = input[0]
// var b = [];
// 
// for(i=1; i<=a; i++){
//     b.push(input[i].substring(0, 1) + input[i].substring(input[i].length, input[i].length-1))
// }
// console.log(b.join("\n"))