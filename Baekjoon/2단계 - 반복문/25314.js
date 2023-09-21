let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var c = a/4
var d = "long "
var e = d.repeat(c)
var g = e + "int"
console.log(g);