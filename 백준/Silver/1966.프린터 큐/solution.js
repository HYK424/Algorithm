//링크 : https://www.acmicpc.net/problem/1966
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
  let answer = [];
  let idx = 0;
  for (let i = 1; i < input.length; i++) {
    if (i % 2 > 0) {
      idx = Number(input[i].split(' ')[1]);
    } else {
      let arr = input[i].split(' ').map(Number);
      let max = Math.max(...arr);
      let cnt = 0;
      const check = arr[idx];
      while (1) {
        let val = arr.shift();
        idx--;
        if (val < max) {
          arr.push(val);
          if (idx < 0) {
            idx = arr.length - 1;
          }
        } else if (val === max) {
          if (val === check && idx < 0) {
            answer.push(cnt + 1);
            break;
          }
          max = Math.max(...arr);
          cnt++;
        }
      }
    }
  }
  return answer.join('\n');
}
