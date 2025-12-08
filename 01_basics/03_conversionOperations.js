let score = "33"

// const {score} = req.body dont know the datatype of score
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
 // NaN not a number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanISLoggedIn = Boolean(isLoggedIn)
//console.log(booleanISLoggedIn);

// 1 => ture; 0 => false
// "" => false
// "akankh" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//*************operations****** */

let value = 3
let negValue = -value
//console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power
// console.log(2/2);
// console.log(2%3); remainder

let str1 = "hello"
let str2 = " akan"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(+true); 1
// console.log(+""); 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; //postfix , prefix
console.log(gameCounter); //101