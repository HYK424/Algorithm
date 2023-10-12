//링크 : https://www.acmicpc.net/problem/13335
// const fs = require('fs');
// const path = require('path');
// const scriptDirectory = __dirname;
// const inputPath = path.join(scriptDirectory, 'input.txt');

const readline = require('readline');
const rl = readline.createInterface({
  input:  process.stdin, //fs.createReadStream(inputPath),
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
  const [_cnt, len, weight] = input[0].split(' ');
  const cars = input[1].split(' ').map(Number);
  let bridgeArr = Array(parseInt(len)).fill(0);
  let answer = 0;
  let sum = 0;
  while (bridgeArr.length) {
    sum -= bridgeArr.shift();
    if (cars.length) {
      if (sum + cars[0] <= weight) {
        sum += cars[0];
        bridgeArr.push(cars.shift());
      } else {
        bridgeArr.push(0);
      }
    }
    answer++;
  }
  return answer;
}
