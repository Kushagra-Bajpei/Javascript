// Primitive

// 7 types : string, number, bigint, boolean, undefined, symbol, null

const score = 100; // number
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); 

// const bigNumber = 1234567890123456789012345678901234567890n;


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
  name: "Ravi",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
}

console.log(typeof bigNumber);     // undefined 
console.log(typeof outsideTemp);   // object
console.log(typeof scoreValue);    // number
console.log(typeof anotherId);   // symbol