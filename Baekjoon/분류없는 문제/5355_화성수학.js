let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = Number(input[0]);
for(let i=1; i<=T; i++){ 
    let numStr = input[i];
    let answer = parseFloat(numStr);
    
    for(let j=numStr.indexOf(' ')+1; j<numStr.length; j++){ 
        if(numStr[j]=="@"){
            answer *= 3;
        }else if(numStr[j]=="%"){
            answer += 5;
        }else if(numStr[j]=="#"){
            answer -= 7;
        }
    }
    
    console.log(answer.toFixed(2));
}
