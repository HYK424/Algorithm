//링크 : https://www.acmicpc.net/problem/2493
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

function solution(input) {
  const range = parseInt(input[0]);
  const topArr = input[1].split(' ').map(Number);
  const answer = [];
  const stack = [];

  for (let i = 0; i < range; i++) {
    //반복문의 조건으로 현재 비교할 topArr[index]와 topArr[topArr의 최신 인덱스-1]를 비교한다.
    //topArr[index]보다 값이 커야 탑이 수신할 수 있다. 해당하는 index를 만날 때까지 pop을 한다.
    //stack 배열이 모두 pop이 되어도 반복문이 끝난 후에는 현재 값의 index를 다시 stack에 push한다.
    //즉, 이전에 pop된 것들은 현재 index의 값보댜 작은 수였다는 것이 보장된다.
    while (stack.length > 0 && topArr[i] >= topArr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      answer.push(0);
    } else {
    //answer에 저장되는 값은 인덱스 번호가 아니라 순번이므로 stack에 저장된 index+1 을 한 후 answer에 추가.
      answer.push(stack[stack.length - 1] + 1);
    }
    //반복문이 끝나고 반드시 stack에는 topArr의 최신 인덱스를 저장.
    //이후 매번 최신 인덱스 vs 최신 인덱스 -1 의 값을 비교하게 된다.
    stack.push(i);
  }
  //answer배열의 모든 값들이 0으로 이루어져 있으면 0을 반환해야 한다.
  if (
    !answer.reduce((pre, cal) => {
      return pre + cal;
    }, 0)
  )
    return 0;
  return answer.join(' ');
}

// 기존 제출)
// 문제는 풀었으나 시간 초과가 떴던 풀이법
// 시간 초과 이유: topArr의 index가 늘어날 때마다 스택 배열도 같이 늘어난다.
//반복문 실행 때마다 stack배열에 topArr[index-1]의 값을 저장하기 때문. 
// function solution(range, topArr) {
//   let answer = [];
//   let stack = [];
//   for (let i = 0; i < range; i++) {
//     stack.push(topArr[i]);
//     for (let stackIdx = i - 1; stackIdx >= 0; stackIdx--) {
//       if (stack[stackIdx] >= topArr[i]) {
//         answer.push(stackIdx + 1);
//         break;
//       }
//     }
//     if (answer.length <= i) {
//       answer.push(0);
//     }
//   }
//   if (
//     !answer.reduce((pre, cal) => {
//       return pre + cal;
//     }, 0)
//   )
//     return 0;
//   console.log(answer.join(' '));
// }

