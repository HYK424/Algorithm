//링크 : https://www.acmicpc.net/problem/1920
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
  let [baseLen, baseArr, searchLen, searchArr] = input;
  (baseLen = Number(baseLen)), (searchLen = Number(searchLen));
  (baseArr = baseArr
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)),
    (searchArr = searchArr.split(' ').map(Number));
  let answer = [];

  function binarySearch(val) {
    let lt = 0,
      rt = baseLen - 1;

    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      if (baseArr[mid] > val) {
        rt = mid - 1;
      } else if (baseArr[mid] < val) {
        lt = mid + 1;
      } else {
        return 1;
      }
    }
    return 0;
  }

  answer = searchArr.map((val) => binarySearch(val)).join('\n');

  return answer;
}

// 참고) 첫 시도 시 단순한 숫자 오름차순을 위해 sort함수를 그대로 사용했으나 문제 틀림.
// sort() => sort(a,b=>a-b)로 수정 후 통과
