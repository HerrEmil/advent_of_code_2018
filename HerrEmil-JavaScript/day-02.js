const fs = require('fs');

module.exports.twosAndThrees = twosAndThrees = (id) => {
  const sorted = id.split('').sort();

  var map = {};
  sorted.forEach(a => {
    if (map[a]) {
      map[a] += 1;
    } else {
      map[a] = 1;
    }
  });

  const filtered = Object.keys(map)
    .filter(key => map[key] === 2 || map[key] === 3)
    .reduce((res, key) => (res[key] = map[key], res), {});

  return filtered;
};

const hasTwo = obj => {
  return Object.entries(obj).filter(([key, value]) => value === 2).length;
};

const hasThree = obj => {
  return Object.entries(obj).filter(([key, value]) => value === 3).length;
};

const day02Input = fs.readFileSync('day-02-input.txt').toString().split(/\n|\r\n/).join(', ');

module.exports.solveDay1Puzzle1 = solveDay1Puzzle1 = (digits) => {
  // console.log(digits);
  const split = digits.split(', ').map(id => twosAndThrees(id));
  // console.log(split);

  const twos = split.filter(obj => hasTwo(obj)).length;
  const threes = split.filter(obj => hasThree(obj)).length;
  // console.log(twos);
  // console.log(threes);

  return twos * threes;
}

// console.log(solveDay1Puzzle1(day02Input)); // 5368

module.exports.solvePuzzle2 = solvePuzzle2 = (digits) => {
  let arr = digits.split(', ');

  // loop over all IDs
  for (let i = 0; i < arr.length; i++) {
    // for each ID, loop over all IDs again
    for (let j = i + 1; j < arr.length; j++) {
      // compare each character in both IDs, count mismatches
      const charsI = [...arr[i]];
      const charsJ = [...arr[j]]
      let diff = charsI.reduce((a, c, i) => a + (c === charsJ[i] ? 0 : 1), 0)

      // If only one mismatch is found between both IDs
      if (diff === 1) {
        // return mutual characters of two IDs
        // console.log(arr[i])
        // console.log(arr[j])
        return '';
      }
    }
  }
}

solvePuzzle2(day02Input); //cvgywxqubnuaefmsljdrpfzyi

module.exports.differByOne = differByOne = (s1, s2) => {

};



// for (let item of boxIDs) {
//   let lettersA = item.split('');
//   for (let i = boxIDs.indexOf(item) + 1; i < boxIDs.length; ++i) {


//     let diff = [];
//     let lettersB = boxIDs[i].split('');

//     for (let l = 0; l < lettersA.length; ++l) {
//       if (lettersA[l] !== lettersB[l]) {
//         if (diff.push(lettersA[l]) >= 2) break;
//       }
//     } if (diff.length === 1) {
//       result[1] = item.replace(diff[0], '');
//       break;
//     }



//   }
// }

