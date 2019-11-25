// create empty fabric square
// loop over claims
// mark claimed area in fabric
// count how many time area is claimed
// return count of claims > 1

const fabric = {};


const fs = require('fs');
const day03Input = fs.readFileSync('day-03-input.txt').toString().split(/\n|\r\n/).join(', ');

const claims1 = day03Input.split(', ');
const claimObjects = claims1.map(claim => {
  const [id, x, y, width, height] = claim.split(/@|,|:|x/)

  return {
    id: id.trim(),
    x: +x,
    y: +y,
    width: +width,
    height: +height,
  };
})

// console.log(claimObjects);
for (claim of claimObjects) {

  // console.log(claim);
  for (let x = claim.x; x < claim.x + claim.width; x += 1) {
    // console.log(x);
    for (let y = claim.y; y < claim.y + claim.height; y += 1) {
      // console.log(fabric[974]);
      fabric[`${x},${y}`] = (fabric[`${x},${y}`] || 0) + 1;
    }
  }
}


// console.log(Object.keys(fabric).length);

const overlapCount = Object.entries(fabric).filter(([key, value]) => value > 1).length;

// console.log(overlapCount); // 101196

module.exports.solvePuzzle1 = solvePuzzle1 = (claims) => {
  return;
}


grid = Object.create(null);
const claims = Object.create(null);

for (const line of claims1) {
  [num, at, one, two] = line.split(' ');
  [left, top] = one.slice(0, -1).split(',').map(x => Number(x));
  [width, height] = two.split('x').map(x => Number(x));
  claims[num] = true;

  for (let x = left; x < left + width; x++) {
    for (let y = top; y < top + height; y++) {
      if (grid[`${ x }, ${ y }`]) {
        claims[grid[`${ x }, ${ y }`]] = false;
        claims[num] = false;
      } grid[`${ x }, ${ y }`] = num;
    }
  }
}
// console.log(Object.entries(claims).filter(v => v[1]));
