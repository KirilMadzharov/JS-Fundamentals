// Used to represent textual data
// ▪ Each symbol occupies a position in the String
// ▪ The first element is at index 0, the next at index 1, and
// so on
// ▪ The length of a String is the number of elements in it


let name = 'George';
console.log(name[0]); // 'G'


"Strings Are Immutable"


// Unlike in languages like C, JavaScript strings
// are immutable
//
// ▪ This means that once a string is created,
//     it is not possible to modify it

let name = 'George';
name[0] = 'P';
console.log(name) // 'George'


"String Interpolation"

// ▪ In JS we can use template literals. These are string
// literals that allow embedded expressions

let name = 'Rick';
let age = 18;
console.log(`${name} = ${age}`);
// 'Rick = 18'

