//링크 : https://www.acmicpc.net/problem/10845
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
  const range = input[0];
  let queue = [];
  let answer = [];
  for (let i = 1; i <= range; i++) {
    if (input[i].includes('push')) {
      queue.push(input[i].slice(5));
    } else if (input[i].includes('pop')) {
      let num = queue.shift();
      answer.push(num ? num : -1);
    } else if (input[i].includes('size')) {
      answer.push(queue.length);
    } else if (input[i].includes('empty')) {
      answer.push(queue.length ? 0 : 1);
    } else if (input[i].includes('front')) {
      answer.push(queue.length ? queue[0] : -1);
    } else if (input[i].includes('back')) {
      answer.push(queue.length ? queue[queue.length - 1] : -1);
    }
  }
  return answer.join('\n');
}
