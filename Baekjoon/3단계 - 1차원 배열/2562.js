const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [];
for(i=0; i<input.length; i++){
    arr.push(input[i])
}

let max = Math.max(...arr.map(Number))
let maxValue = max

let index = arr.findIndex(item => item.includes(max))+1
console.log(maxValue + "\n" + index)