const accountId = 12345;
let accountEmail = "kushagra@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState; // undefined

// accountId = 2 // Not allowed


accountEmail = "hc@hc.com"; 
accountPassword = "67890";
accountCity = "Noida";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
