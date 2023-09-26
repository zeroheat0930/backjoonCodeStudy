let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim();
var a = input.split("").reverse().join("")
if(input === a){
    console.log("1")
}else{
    console.log("0")
}
