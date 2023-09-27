//링크 : https://www.acmicpc.net/problem/10799
// const fs = require('fs');
// const path = require('path');
// const scriptDirectory = __dirname;
// const inputPath = path.join(scriptDirectory, 'input.txt');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //fs.createReadStream(inputPath),
  output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
  input += line;
}).on('close', function () {
  solution(input);
  process.exit();
});
function solution(input) {
  let answer = 0;
  let stack = [];
  for (let x = 0; x < input.length; x++) {
    if (input[x] === ')') {
      stack.pop();
      if (input[x - 1] === ')') {
        answer += 1;
      } else {
        answer += stack.length;
      }
    } else {
      stack.push(input[x]);
    }
  }

  console.log(answer);
}
