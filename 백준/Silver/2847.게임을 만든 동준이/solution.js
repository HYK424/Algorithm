//링크 : https://www.acmicpc.net/problem/2847
const fs = require('fs');
const path = require('path');
const scriptDirectory = __dirname;
const inputPath = path.join(scriptDirectory, 'input.txt');

const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream(inputPath),
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});

function solution(input) {
  const len = input[0];
  let scoresArr = [];
  let score = 0;
  for (let i = 1; i <= len; i++) {
    scoresArr.push(input[i]);
  }
  scoresArr = scoresArr.reverse();

  for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] <= scoresArr[i + 1]) {
      score += scoresArr[i + 1] - scoresArr[i] + 1;
      scoresArr[i + 1] -= scoresArr[i + 1] - scoresArr[i] + 1;
    }
  }
  return score;
}
