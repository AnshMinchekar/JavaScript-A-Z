// Primitive Data Types

// 1. String
// 2. Number
// 3. Boolean
// 4. Null 
// 5. Undefined
// 5. Symbol
// 6. BigInt 

// Stored directly in stack

//Reference Types (Objects)

// 1. Object Literals
// 2. Arrays
// 3. Functions

//store in the heap and accessed by reference.

const firstName = "John"
console.log(typeof firstName);

const age = 23;
console.log(typeof age);

const address = null;
console.log(typeof address); //This will return as an object but it is a mistake.

const phoneNumber = undefined;
console.log(typeof phoneNumber);

const person = {
    name: "John",
    age: 23
};

console.log(typeof person);

