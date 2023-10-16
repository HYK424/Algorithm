//링크 : https://www.acmicpc.net/problem/2852
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

function convertTime(time) {
  const min = `${Math.floor(time / 60)}`.padStart(2, '0'),
    sec = `${Math.floor(time % 60)}`.padStart(2, '0');

  return `${min}:${sec}`;
}

function convertSec(time) {
  let replacedTime = Number(time.replace(':', ''));
  const convertedSec = Math.floor(replacedTime / 100) * 60 + (replacedTime % 100);

  return convertedSec;
}

function solution(input) {
  const len = input[0];
  let answer = Array(2).fill(0);
  let cnt1 = 0,
    cnt2 = 0,
    board = [];

  for (let i = 1; i <= len; i++) {
    let teamNum = input[i].slice(0, 1);
    let scoredTime = convertSec(input[i].slice(2));
    if (teamNum == 1) {
      cnt1++;
    } else {
      cnt2++;
    }
    if (cnt1 > cnt2) {
      board.push([1, scoredTime]);
    } else if (cnt1 == cnt2) {
      board.push([0, scoredTime]);
    } else if (cnt1 < cnt2) {
      board.push([2, scoredTime]);
    }
  }
  board.push([99, 2880]);

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] != 0) {
      if (board[i + 1]) {
        answer[board[i][0] - 1] += board[i + 1][1] - board[i][1];
      }
    }
  }

  return answer.map((val) => convertTime(val)).join('\n');
}

// 참고) 시간 계산을 원활히 하기 위해 주어진 시간을 초로 변경 후 계산.
// 승무패에 따라 1,0,2 로 분류하여 배열에 모두 저장. 이후 해당 배열을 순회하면서 0을 만나기 전까지의 시간을 누적(무승부에서는 누적X).
// padStart함수를 사용해 출력되는 시간을 mm:ss 형식으로 변환한다.
