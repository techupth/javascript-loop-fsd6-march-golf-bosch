// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
const findMin = (scores) => (minScore = Math.min(...scores));

findMin(scores);

console.log(minScore);
