//링크 : https://www.acmicpc.net/problem/1072
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
  input.push(...line.split(' ').map(Number));
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});

function getPercent(wins, range) {
  return Math.floor((wins * 100) / range);
}

function solution(input) {
  const [range, wins] = input;
  let lt = 1,
    rt = 1e9,
    mid = 0,
    stand = getPercent(wins, range),
    answer = -1;
  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    if (getPercent(wins + mid, range + mid) != stand) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

// 참고) 기존에는 Math.floor((wins / range) * 100) 를 사용했으나 틀림.
// 나누기 후 100을 곱하면 두 자리 정수 이하가 잘린 채 백분율이 계산되기 때문(부정확함)
// Math.floor((wins * 100) / range) 로 수정하여 먼저 100을 곱해버리고 나누기 진행.

// 1e9는 10의 9승을 나타냄 = 1,000,000,000을 간결하게 표현한 것.
