//링크 : https://www.acmicpc.net/problem/2805
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
  let [baseLen, treeArr] = input;
  let height = Number(baseLen.split(' ')[1]);
  treeArr = treeArr
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let lt = 1,
    rt = Math.max(...treeArr),
    sum = 0;
  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    sum = 0;
    for (let tree of treeArr) {
      if (mid < tree) sum += tree - mid;
    }
    if (sum < height) rt = mid - 1;
    else lt = mid + 1;
  }

  return rt;
}

// 참고) 이분탐색으로 기준에 맞는 최소값, 최대값 구하는 문제는 두 개의 포인터 중 하나를 결과로 제출한다.
// 여기서 lt와 rt를 계속 조절하며 최적의 높이를 찾는다.
