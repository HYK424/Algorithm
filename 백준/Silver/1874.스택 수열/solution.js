//링크 : https://www.acmicpc.net/problem/1874
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
  solution(input);
  process.exit();
});

function solution(input) {
  let len = input[0];
  let stack = [];
  let tmpArr = [];
  let maxNum = 1;
  let lastNum = 0;
  const up = '+',
    down = '-';
  for (let i = 1; i <= len; i++) {
    for (let j = maxNum; j <= input[i]; j++) {
      stack.push(up);
      tmpArr.push(j);
      maxNum += 1;
    }
    if (tmpArr[tmpArr.length - 1] == input[i]) {
      stack.push(down);
      tmpArr.pop();
    } else {
      stack = ['NO'];
      break;
    }
  }
  console.log(stack.join('\n'));
}
//예상답: + + + + - - + + - + + - - - - -
