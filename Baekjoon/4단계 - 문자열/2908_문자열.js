let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().split(' ');
let a = input[0].slice();
let b = input[1].slice();
let resulta = [];
let resultb = [];

for(i=1; i<=3; i++){
    resulta.push(a.substring(i-1, i))
    resultb.push(b.substring(i-1, i))
}
let arev = [];
let brev = [];

for(i=2; i>=0; i--){
    arev.push(resulta[i])
    brev.push(resultb[i])
}

if(arev.join("") > brev.join("")){
    console.log(arev.join(""))
}else{
    console.log(brev.join(""))
}

// 내가 짠 코드는 이런건데 이걸 줄인 코드는 

// const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

// a_reverse = a.split("").reverse().join("")
// b_reverse = b.split("").reverse().join("")

// if(a_reverse > b_reverse) {
//     console.log(a_reverse)
// } else {
//     console.log(b_reverse)
// }