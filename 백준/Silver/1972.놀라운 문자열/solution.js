//링크 : https://www.acmicpc.net/problem/1972
// const fs = require('fs');
// const path = require('path');
// const scriptDirectory = __dirname;
// const inputPath = path.join(scriptDirectory, 'input.txt');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //fs.createReadStream(inputPath),
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});

function checkSuprising(str) {
  let arr = str.split('');
  let n = arr.length - 2 <= 0 ? 0 : arr.length - 2;
  let map = new Map();
  for (let i = 0; i <= n; i++) {
    let j = i;
    let idx = 0;
    let base = [];
    while (arr[idx + j + 1]) {
      base.push(arr[idx] + arr[idx + j + 1]);
      idx++;
    }
    map.set(i, base);
  }

  return map;
}

function checkSize(mapArr) {
  let answer = [];
  let isSame = true;
  for (let map of mapArr) {
    for (let j = 0; j < map.size; j++) {
      let set = new Set(map.get(j));
      if (set.size != map.get(j).length) {
        isSame = false;
        break;
      }
    }
    if (isSame) {
      answer.push(' is surprising.');
    } else {
      answer.push(' is NOT surprising.');
    }
    isSame = true;
  }
  return answer;
}

function solution(input) {
  let mapArr = [];
  let checkedArr = [];
  let answer = [];
  for (let i of input) {
    if (i === '*') break;
    answer.push(i);
    mapArr.push(checkSuprising(i));
  }

  checkedArr = checkSize(mapArr);

  return answer
    .map((val, idx) => {
      return val + checkedArr[idx];
    })
    .join('\n');
}

// 참고) 위의 식은 map과 set을 같이 썼고, 배열도 3개나 사용했다.
// set만을 사용하여 훨씬 효율적으로 문제를 푸는 방법도 있다.
// function solution(input) {
//   let questions = [];
//   for (let i of input) {
//     if (i === '*') break;
//     questions.push(i);
//   }

//   const checkSuprise = (str) => {
//     const len = str.length;
//     for (let i = 1; i <= len - 1; i++) {
//       const set = new Set();
//       for (let j = 0; j < len - i; j++) {
//         const subStr = `${str[j]}${str[j + i]}`;
//         if (set.has(subStr)) return false;
//         set.add(subStr);
//       }
//     }

//     return true;
//   };

//   const result = [];
//   for (const question of questions) {
//     const checked = checkSuprise(question);
//     result.push(`${question} is ${checked ? '' : 'NOT '}surprising.`);
//   }

//   return result.join('\n');
// }
