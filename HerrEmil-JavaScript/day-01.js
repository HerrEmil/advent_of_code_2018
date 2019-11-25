const fs = require('fs');

sumAll = (digits) => {
  return digits.split(', ').map(s => +s).reduce((a, c) => a + c, 0);
}

firstRepeatedPosition = (digits) => {
  const arr = digits.split(', ');

  const seen = {};
  let frequency = 0;
  seen[frequency] = true;

  while (true) {
    for (const delta of arr) {
      frequency += Number(delta);
      if (seen[frequency]) {
        return frequency;
      }
      seen[frequency] = true;
    }
  }
}

const day01Input = fs.readFileSync('day-01-input.txt').toString().split(/\n|\r\n/).join(', ');
// console.log(sumAll(day01Input));
// console.log(firstRepeatedPosition(day01Input));

module.exports.solvePuzzle1 = solvePuzzle1 = (digits) => {
  return sumAll(digits, 1);
}

module.exports.solvePuzzle2 = solvePuzzle2 = (digits) => {
  return firstRepeatedPosition(digits);
}
