"What is a Data Type?"
//
// ▪ A data type is a classification that specifies what type of operations can be
// applied to it and the way values of that type are stored
//
//
// ▪ After ECMAScript 2015 there are seven primitive
// data types:
//
//     ▪ Seven primitive:
//
//     1. Boolean
// 2. null
// 3. undefined
// 4. Number
// 5. String
// 6. Symbol
// 7. BigInt
//
// and Objects (including Functions and Arrays)


let number = 10; // Number
let person = {name: 'George', age: 25}; // Object
let array = [1, 2, 3]; // Array
let isTrue = true; // Boolean
let name = 'George'; // String
let empty = null; // null
let unknown = undefined; // undefined



"Dynamic Typing"

// ▪ Variables in JavaScript are not directly associated
// with any particular value type
//
// ▪ Any variable can be assigned (and re-assigned)
// values of all types


"Variable Declaration and Scope"

// You will see var used in old examples
// ▪ Using var to declare variables is a legacy technique
// ▪ Since ES2015 variables are declared using let
// ▪ var introduces function scope hoisting
// ▪ ThereWill be discussed in the next slide
// ▪ Is no good reason to ever use var!


"Variable Declaration"

// ▪ var – use function scope –
// can be accessed anywhere in
// the function, including
// outside the initial block

{
    var x = 2;
}
console.log(x); // 2


// let – use block scope – when
// declared inside a block {} can
// NOT be accessed from outside
// the block


{
    let x = 2;
}
console.log(x); // Error


"Variables Scope"


// The scope of a variable is the region of the program in which it
// is defined
//
// ▪ Global Scope – Global variables can be accessed from
// anywhere in a JavaScript function

var carName = "Volvo";

// Code here can use carName

function myFunction() {

// Code here can also use carName
}


// Function Scope – Local variables can only be accessed from
// inside the function where they are declared


function myFunction() {
    var carName = "Volvo";
// Only here code CAN use carName
}


// ▪ Block Scope - Variables declared inside a block {} can not be
// accessed from outside the block

{
    let x = 2;
} // x can NOT be used here


"Naming Variables"

// Variable names are case sensitive
// ▪ Variable names must begin with a letter or underscore
// (_) character

// firstName, report, config, fontSize, maxSpeed

// Variable names can't be one of JavaScript's reserved
// words like:

    break, const, interface, typeof, true etc.


