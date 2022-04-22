let readlineSync = require('readline-sync');

console.log('What is the bill? ');
let bill = readlineSync.prompt();
bill = parseInt(bill,10);

console.log('What is the tip percentage? ');
let tip_percent = readlineSync.prompt();
tip_percent = parseInt(tip_percent,10)/100;

let tip_total = bill * tip_percent;
let total = bill + tip_total;

console.log(`The tip is ${tip_total}`);
console.log(`The total is ${total}`);