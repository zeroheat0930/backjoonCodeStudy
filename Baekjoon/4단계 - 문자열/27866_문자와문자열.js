const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

var a = input[0].substring(input[1]-1,input[1])
console.log(a)