//To keep datatypes in memory and access it
//1. Primitive 2. Non primitive

// Primitive (call by value)
// String, Number, Boolean, null, undefined, Symbo, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 1234567888n


// Non-Primitve or Refernce
// Array, Objects, Functions
const heros = ["ironman", "spiderman"]

let myObj = {
    name: "akank",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);


//*JS is statically typed or dynamically typed?


//+++++++++++++++++++++++++++++++++++++++++++
//TYPES OF MEMORY

// Stack (Primitve), Heap (Non-Primitive)

let myHomename = "Akank"
let anothername = myHomename
anothername = "twinkle"
console.log(myHomename); 
console.log(anothername);
//Akank
//twinkle

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "akank@google.com"
console.log(ServiceWorkerContainer.email);
console.log(userTwo.email);

