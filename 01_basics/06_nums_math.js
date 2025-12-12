const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance); 

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9
//const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //123

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10.00.000


//+++++++++++++++++++++++MATHS+++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,2,5)); //2

console.log(Math.random()); //between 0-1
console.log(Math.random(Math.random()*10) + 1); //for ludo, add 1 for avoiding 0

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))  + min)











