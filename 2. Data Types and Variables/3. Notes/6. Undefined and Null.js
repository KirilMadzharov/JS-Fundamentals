// A variable without a value has the value undefined.
//     The typeof is also undefined
//
// let car; // Value is undefined, type is undefined
//
// ▪ A variable can be emptied, by setting the value to
// undefined. The type will also be undefined
//
// let car = undefined;
// // Value is undefined, type is undefined



// Null is "nothing". It is supposed to be something that
// doesn't exist.
//
// ▪ The typeof null is an object


let person = {
    firstName:"John",
    lastName:"Doe",
    age:50
};
person = null;
console.log(person); // null
console.log(typeof(person)); // object


"Null and Undefined"


// Null is an assigned value. It means nothing
//
// ▪ Undefined typically means a variable has been declared but not
// defined yet
//
// ▪ Null and Undefined are falsy values
//
// ▪ Undefined and Null are equal in value but different in type:
//
// null !== undefined // true
// null == undefined // true

