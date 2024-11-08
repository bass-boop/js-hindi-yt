//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt (callback)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// in symbol outputis different but input we have put is same
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// array
const heroes = ["mr pengu", "mr mengu", "mr tengu"] 

// object (values in curly braces{} is object)
let myObj = {
    name:"mr pengu",
    age: 60,
}

// store function as variable
const myFunction = function(){
    console.log("Hello world");
    
}


// know type of datatype using typeof
console.log(typeof myFunction);
// return of myFunction is called as object function in output it display as function




// IMP For interview (put in notes) -------------->
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++ 2 - MEMORY ++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "mrpengudotcom"

let anothername = myYoutubename
anothername = "chaiaurpenguin"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "mrpengu.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mrmengu.com"

console.log(userOne.email);
console.log(userTwo.email);




