const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = +input[0];
let newArr = input[1]
let find = +input[2];

let Ab = newArr.split(" ")
let rt = Ab.filter(number => number == find)
console.log(rt.length)
