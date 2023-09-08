// There are three ways to declare a variable

// 1. var: Variable (outdated, ignore completely)
// 2. let: Works similar to var in global scope but is better in function & block scope
// 3. const: Used for constants.

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

// console.log(age); //This will throw an error since age hasn't been initialized yet.

let age = 23;

console.log(age);

let email;


//Re-assigning Variables|

age = 31;

console.log(age);

email = "JohnDoe@gmail.com"
console.log(email)

const person = {
    name: "John",
    age: "32"
};

//Now here you cannot directly do person = Alice since you'll be changing the variable.

person.name = "Alice";

//This works because you're changing the property or value of a key in the variable.

person.email = "JohnDoe@gmail.com"; //You can also add on to the variable.

console.log(person);

//Also, when you declare a const, it needs to have a value.

// const phoneNumber; This will throw an error.

