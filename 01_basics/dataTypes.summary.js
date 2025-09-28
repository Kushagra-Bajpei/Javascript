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

// const bigNumber = 1234567890123456789012345678901234567890n;  // This type of large no. we will store in bigint and you can add n at last so automatically it will convert to bigint



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

// Note => In JS if we check data type of myFunction it will show as function but function is we called an object function
//  in JS, all non primitive data types are objects so in last i want to say that in JS everything data type is object except primitive data types
// only function return we will call object function






// ++++++++++++++++++++++++++++++++ Stack and Heap memory concept ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)
// Something to remember

let myYoutubename = "Ravi Sharma";

let anothername = myYoutubename;
anothername = "Code aur code";

console.log(myYoutubename);
console.log(anothername);

// Note => In primitive data types, actual value is stored in stack memory and when we copy that value 
// to another variable then a new copy is created in stack memory and if we change the value of another variable
// then it will not affect the original variable value because both variables have their own copy in stack memory , so copy 
// will change.



// Note => In non primitive data types, actual value is stored in heap memory and in stack memory a reference is stored
// when we copy that value to another variable then a new reference is created in stack memory which point to same 
// location in heap memory and if we change the value of another variable then it will affect the original variable value 
// because both variables are pointing to same location in heap memory , so copy will change

let userOne = {
  email: "user@google.com",
  upi: "user@upi",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);



// stack ke andar jab bhi koi check lenge then uska copy milega
// heap ke andar jab bhi koi check lenge then uska reference milega, we will do changes and updation in original value always

