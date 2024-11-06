const accountId = 14432
let accountEmail = "mrpengu@gmail.com"
var accountPassword = "1234"
accountCity = "Aurangabad"
let accountState;

// accountId = 3 // not allowed

accountEmail = "mrmengu@h.com"
accountPassword = "4567"
accountCity = "Bangalore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
