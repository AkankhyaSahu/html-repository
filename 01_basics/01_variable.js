const accountId = 123456
let accountEmail = "akankhya@gmail.com"
var accoundPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed to change the conastant

accountEmail = "twinkle@gmail.com"
accountPassword = "12121"
accountCity = "Noida"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

 console.table([accountId, accountEmail, accoundPassword, accountCity, accountState])
