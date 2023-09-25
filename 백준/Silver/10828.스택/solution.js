//링크 : https://www.acmicpc.net/problem/10828
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
let list = [];

rl.on('line', function (line) {
  input.push(line); // 입력받은 여러줄, line
  // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
}).on('close', function () {
  solution(input); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
function solution(input) {
  const cnt = input[0];
  let stack = [];
  let answer = [];
  for (let i = 1; i <= cnt; i++) {
    if (input[i].includes('push')) {
      stack.push(input[i].slice(5));
    } else if (input[i].includes('pop')) {
      let num = stack.pop();
      answer.push(num ? num : -1);
    } else if (input[i].includes('size')) {
      answer.push(stack.length);
    } else if (input[i].includes('empty')) {
      answer.push(stack.length ? 0 : 1);
    } else if (input[i].includes('top')) {
      answer.push(stack[stack.length - 1] ? stack[stack.length - 1] : -1);
    }
  }
  console.log(answer.join('\n'));
}

// 참고) 반복문 실행될 때마다 콘솔 출력을 하면 시간초과가 발생.
// 모든 작업이 끝난 후 한 번에 콘솔 출력할 것.
