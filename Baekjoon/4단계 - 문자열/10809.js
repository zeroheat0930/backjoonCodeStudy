let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";


let input = fs.readFileSync(filePath).toString()
const result = [];

for (let i = 97; i <= 122; i++) { //아스키 코드 'a' 97, 'z' 122
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));