//링크 : https://www.acmicpc.net/problem/3986
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
  let stack = [];
  let cnt = 0;
  for (let i = 1; i <= input[0]; i++) {
    for (let j of input[i]) {
      if (j === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(j);
      }
    }
    if (stack.length === 0) cnt++;
    stack = [];
  }
  console.log(cnt);
}
