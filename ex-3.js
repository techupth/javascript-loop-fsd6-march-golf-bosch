// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let index = 0; index < scores.length; index++) {
  minScore = Math.min(...scores);
}
console.log(minScore);
