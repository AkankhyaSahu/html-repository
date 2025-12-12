const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[0]);

const myHearos = ["ironman","spiderman"]

// Array methods

myArray.push(6)
console.log(myArray); 
myArray.pop() //remove last number
myArray.unshift(9) //add to first position

console.log(myArray.includes(9)); //false
console.log(myArray.indexOf(9)); //-1 (false)

const newArray = myArray.join()
console.log(myArray); // [0, 1, 2, 3, 4, 5]
console.log(newArray); // 0, 1, 2, 3, 4, 5

//slice, splice
console.log("A", myArray);
const myn1 = myArray.slice(1, 3)
console.log(myn)
