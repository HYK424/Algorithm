//링크 : https://www.acmicpc.net/problem/1773
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
  const [cnt, sky] = input[0].split(' ');
  let divideList = [];
  for (let i = 1; i <= cnt; i++) divideList.push(parseInt(input[i]));
  let answer = 0;
  let tmp = 0;
  for (let i = 1; i <= sky; i++) {
    tmp = 0;
    for (let divideNum of divideList) {
      if (i % divideNum === 0) tmp++;
    }
    tmp >= 1 ? answer++ : answer;
  }

  return answer;
}
