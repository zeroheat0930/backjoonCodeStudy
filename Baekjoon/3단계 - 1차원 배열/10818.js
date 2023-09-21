const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let newArr = input[1];

let Ab = newArr.split(" ").map(Number); 
var a = Math.min(...Ab)
var b = Math.max(...Ab)
console.log(a+ " " + b)