// const assert = require('assert');
// const puzzle = require('./day-01');

// describe('Day 01, Puzzle 1 tests', () => {
//   it('should produce sum 3 given input "+1, -2, +3, +1"', () => {
//     assert.equal(puzzle.solvePuzzle1('+1, -2, +3, +1'), 3);
//   });

//   it('should produce sum 3 given input "+1, +1, +1"', () => {
//     assert.equal(puzzle.solvePuzzle1('+1, +1, +1'), 3);
//   });

//   it('should produce sum 0 given input "+1, +1, -2"', () => {
//     assert.equal(puzzle.solvePuzzle1('+1, +1, -2'), 0);
//   });

//   it('should produce sum -6 given input "-1, -2, -3"', () => {
//     assert.equal(puzzle.solvePuzzle1('-1, -2, -3'), -6);
//   });
// });

// describe('Day 01, Puzzle 2 tests', () => {
//   it('should produce sum 2 given input "+1, -2, +3, +1"', () => {
//     assert.equal(puzzle.solvePuzzle2('+1, -2, +3, +1'), 2);
//   });

//   it('should produce sum 0 given input "+1, -1"', () => {
//     assert.equal(puzzle.solvePuzzle2('+1, -1'), 0);
//   });

//   it('should produce sum 10 given input "+3, +3, +4, -2, -4"', () => {
//     assert.equal(puzzle.solvePuzzle2('+3, +3, +4, -2, -4'), 10);
//   });

//   it('should produce sum 5 given input "-6, +3, +8, +5, -6"', () => {
//     assert.equal(puzzle.solvePuzzle2('-6, +3, +8, +5, -6'), 5);
//   });

//   it('should produce sum 14 given input "+7, +7, -2, -7, -4"', () => {
//     assert.equal(puzzle.solvePuzzle2('+7, +7, -2, -7, -4'), 14);
//   });
// });