function computeSum(targetNum) {
  let total = 0;
  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }
  return total;
}

function computeProduct(targetNum) {
  let total = 1;
  for (let num = 1; num <= targetNum; num += 1){
    total *= num;
  }
  return total;
}

let rlSync = require('readline-sync');

console.log('Enter an integer greater than 0: ');
let number = parseInt(rlSync.prompt(),10);

console.log('Type \'s\' to compute the sum or type \'p\' to compute the product of the number range');
let operation = rlSync.prompt();

if (operation === 's') {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
} else {
  console.log('Unknown operation.');
}