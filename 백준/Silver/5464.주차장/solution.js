//링크 : https://www.acmicpc.net/problem/5464
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
  const range = input[0].split(' ');
  const FeeEndPoint1 = parseInt(range[0]) + 1;
  const FeeEndPoint2 = parseInt(range[1]);
  const spaceFee = input.slice(1, FeeEndPoint1);
  const carFee = input.slice(FeeEndPoint1, FeeEndPoint1 + FeeEndPoint2);
  const carArr = input.slice(FeeEndPoint1 + FeeEndPoint2);
  let answer = 0;
  let queue = Array(spaceFee.length).fill(0);
  let wait = [];

  for (let i of carArr) {
    let isFull = true;
    if (i > 0) {
      for (let idx = 0; idx < queue.length; idx++) {
        if (queue[idx] === 0) {
          queue[idx] = i;
          isFull = false;
          break;
        }
      }
      if (isFull) wait.push(i);
    } else {
      for (let idx = 0; idx < queue.length; idx++) {
        let car = Math.abs(i);
        if (queue[idx] == car) {
          queue[idx] = 0;
          answer += spaceFee[idx] * carFee[car - 1];
          if (wait.length) {
            queue[idx] = wait.shift();
          }
        }
      }
    }
  }
  if (wait.length) {
    for (let idx = 0; idx < queue.length; idx++) {
      answer += spaceFee[idx] * carFee[Number(queue[idx]) - 1];
    }
  }

  return answer;
}
