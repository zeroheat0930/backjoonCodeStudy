let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let croatiaWordCount = 0;

for (let i = 0; i < input.length; i++) {
  let nowWord = input[i];
  let rightWord = input[i + 1];
  let liftWord = input[i - 1];
  let rrWord = input[i + 2];

  if (nowWord === "c") {
    if (rightWord === "=" || rightWord === "-") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "d") {
    if (rightWord === "-") {
      croatiaWordCount--;
    }
    if (rightWord === "z" && rrWord === "=") {
      croatiaWordCount -= 2;
    }
  }

  if (nowWord === "l" || nowWord === "n") {
    if (rightWord === "j") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "s") {
    if (rightWord === "=") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "z") {
    if (liftWord !== "d" && rightWord === "=") {
      croatiaWordCount--;
    }
  }

  croatiaWordCount++;
}

console.log(croatiaWordCount);

// 쉽게쓰는방법
// const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// let T = n.shift();

// const arr = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

// arr.forEach(element => T = T.replace(element, "1"));

// console.log(T.length);