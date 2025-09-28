let score = "33abc";

// console.log(typeof score);    // string
// console.log(typeof(score));   // string

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);       // number
// console.log(valueInNumber);             // NaN




// Some other examples In case of number conversion
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// "abc" => NaN





let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// In case of boolean conversion, following values are considered as false or true
// 0 => false; 1 => true
// "" => false; 
// "abc" => true
// null => false
// undefined => false
// " " => true
// [] => true
// {} => true


let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);





// **********************************  Operations  **********************************

let value = 3;
let negValue = -value;
// console.log(negValue); 

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello ";
let str2 = "Kushagra";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);  // "12"
// console.log(1 + "2");  // "12"
// console.log("1" + 2 + 2);  // "122"
// console.log(1 + 2 + "2");  // "32"  => line 73 and 74 is not correct way

// console.log( (3 + 2) * 2 % 3 );

// console.log(+true);  // 1
// console.log(true+);  // error
// console.log(+"");    // 0
// console.log(+null);  // 0
// console.log(+undefined); // NaN
// console.log(+ "33abc");  // NaN
// console.log(+ "33");     // 33

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; // ++gameCounter => both always return same value
console.log(gameCounter);  

