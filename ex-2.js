// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
const findSum = (numbers) => {
  total = numbers.reduce((a, b) => a + b);
};

findSum(numbers);

console.log(total);
