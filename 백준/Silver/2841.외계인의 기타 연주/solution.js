//링크 : https://www.acmicpc.net/problem/2841
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
  input.push(line.split(' ').map((val) => Number(val)));
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const map = new Map();
  let cnt = 0;

  for (let i = 1; i < input.length; i++) {
    const key = input[i][0];
    const newNum = input[i][1];
    if (!map.has(key)) {
      map.set(key, []);
      map.get(key).push(newNum);
      cnt++;
    }
    let lastNum = map.get(key)[map.get(key).length - 1];

    if (lastNum < newNum) {
      map.get(key).push(newNum);
      cnt++;
    } else if (lastNum > newNum) {
      while (1) {
        lastNum = map.get(key)[map.get(key).length - 1];
        if (lastNum === newNum) {
          break;
        } else if (!lastNum || lastNum < newNum) {
          map.get(key).push(newNum);
          cnt++;
          break;
        }
        map.get(key).pop();
        cnt++;
      }
    }
  }
  console.log(cnt);
}
