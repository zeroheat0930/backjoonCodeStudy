const infos = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item=>item.split(' '));

let sum = 0;
let total = 0;

const table = {
	"A+": 4.5, A0: 4.0,
	"B+": 3.5, B0: 3.0,
	"C+": 2.5, C0: 2.0,
	"D+": 1.5, D0: 1.0,
	F: 0.0
} // key-value 로 저장해둔평점

for(let [sub, score, grade] of infos) {
   
    let num = 0;
    
   if(grade==='P') {
        continue;
    } // p일 경우 빼고 계산
    sum += Number(score)*table[grade] // 학점에 따라서 key 값으로 table에서 빼와서 계산
    total += Number(score); // total 값 저장
} 
console.log(sum/total); // 전공과목별 학점*평점을 총점으로 나누어 출력

// 내가 짠 코드
// let fs = require("fs");
// let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let count = input.length;
// let totalCredit = 0;
// let weightedSum = 0;

// for(let i=0; i<count; i++){
//     let [_, credit, grade] = input[i].trim().split(" ");
//     grade = grade.replace('\r', ''); // '\r' 제거

//     let point;
//     switch (grade){
//         case 'A+':
//           point = 4.5;
//           break;
//         case 'A0':
//           point = 4.0;
//           break;
//         case 'B+':
//           point = 3.5;
//           break;
//         case 'B0':
//           point = 3.0;
//           break;
//         case 'C+':
//           point= 2.5
//           break
//         case 'C0':
//            point=2.0
//            break
//         case 'D+': 
//             point=1.5 
//             break 
//         case 'D0': 
//             point=1.0 
//             break 
//          case 'F':  
//              point= 0  
//              break  
//          default:  
//              continue // P일 경우 계산에서 제외   
//      }   
//      weightedSum += Number(credit) *point; //학점에 따른 점수계산    
//      totalCredit += Number(credit); //총학점계산     
// }   

// console.log((weightedSum/totalCredit).toFixed(6)); //평균계산 후 출력  