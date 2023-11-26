// CTRL+K CTRL+, to fold text. CTRL+K CTRL+. to unfold text.

// Numbers
const myNumber = 42;
const myFloat = 42.01;
const myString = "42";
const myStringTemp = "42.123asf";

// Returns the int 42
console.log(myNumber);
// Return the float 42.01
console.log(myFloat);
// Returns the string 42
console.log(myString);

// Returns false
console.log(myNumber === myFloat);
// Return false
console.log(myNumber === myString);

// Returns 45
console.log(Number(myString) + 3);
// Returns true
console.log(Number(myString) === myNumber);
// Returns NaN (not a number)
console.log(Number("Alex"));
// Returns NaN (not a number)
console.log(Number(undefined));
//Returns 1
console.log(Number(true));

// Number methods
// The Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myString));

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myString));
// Returns 42.123 (it removes all non numeric characters)
console.log(Number.parseFloat(myStringTemp));

// The toFixed() method formats a number acoording to how many decimal points you provide as a parameter. This method returns string data, not number data.
console.log(Number.parseFloat(myFloat).toFixed(2));

console.log(Number.parseInt(myString));

console.log(typeof myFloat.toString());

// The Number.isNaN() method determines whether the passed value is NaN and its type is Number.
console.log(Number("Alex"));
console.log(Number.isNaN("Alex"));

// The global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Alex"));


