const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = input[0];
let newArr = input[1];

let a = +total.split(" ")[1]


let Ab = newArr.split(" ")
let rt = Ab.filter(number => +number < a)
console.log(rt.join(' '))