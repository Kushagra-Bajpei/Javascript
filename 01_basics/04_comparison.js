// console.log("2" > 1);   => true
// console.log("02" > 1);  => true

console.log(null > 0);
console.log(null == 0);      // Note => lines 4 5 6 8 9 10 we will avoid these type of conversion
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// in 8 9 10 it will give false value

// ===  => Triple equals => checks value and data type both
// ==   => Double equals => checks value only

console.log("2" === 2);


// Note => There is an equality check == and comparison check >, <, >=, <= work differently for null and undefined.
// Note
// Comparisons convert null to a number, treating it as 0.
// So, null > 0 is false, but null >= 0 is true.