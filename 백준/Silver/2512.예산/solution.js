//링크 : https://www.acmicpc.net/problem/2512
// const fs = require('fs');
// const path = require('path');
// const scriptDirectory = __dirname;
// const inputPath = path.join(scriptDirectory, 'input.txt');

const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream(inputPath),
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
  let [arrLen, budget, max] = input;
  budget = budget
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  arrLen = Number(arrLen);
  max = Number(max);

  let lt = 1,
    rt = Math.max(...budget),
    sum = 0;
  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    sum = 0;
    for (let money of budget) {
      if (mid < money) sum += mid;
      else sum += money;
    }
    if (sum < max) lt = mid + 1;
    else if (sum > max) rt = mid - 1;
    else {
      rt = mid;
      break;
    }
  }

  return rt;
}
