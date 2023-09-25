let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

let z = input[0].split('')
var a = ['A','B','C']
var b = ['D','E','F']
var c = ['G','H','I']
var d = ['J','K','L']
var e = ['M','N','O']
var f = ['P','Q','R','S']
var g = ['T','U','V']
var h = ['W','X','Y','Z']

let result = 0

for(i=0; i<z.length; i++){
    if(a.includes(z[i])){
        result += 3
    }else if (b.includes(z[i])){
        result += 4
    }else if (c.includes(z[i])){
        result += 5
    }else if (d.includes(z[i])){
        result += 6
    }else if (e.includes(z[i])){
        result += 7
    }else if (f.includes(z[i])){
        result += 8
    }else if (g.includes(z[i])){
        result += 9
    }else{
        h.includes(z[i]) ? (result += 10) : null;
    }
}
console.log(result)

// 다른사람풀이
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let phone = {
// 	2: "ABC",
// 	3: "DEF",
// 	4: "GHI",
// 	5: "JKL",
// 	6: "MNO",
// 	7: "PQRS",
// 	8: "TUV",
// 	9: "WXYZ",
// };
// let result = 0;

// for (let i = 0; i < input.length; i++) {
// 	for (let j = 2; j <= 9; j++) {
// 		if (phone[j].includes(input[i])) {
// 			result += j + 1;
// 			break;
// 		}
// 	}
// }

// console.log(result);