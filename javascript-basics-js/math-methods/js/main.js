// Math methods and properties

// Returns the value of PI
console.log(Math.PI);

// Returns the integer portion of a number and truncates any decimals
console.log(Math.trunc(Math.PI));

// Returns the value of the number rounded to the nearest integer
console.log(Math.round(Math.PI));

// Returns the value of the number always rounded up, no matter the decimal
console.log(Math.ceil(Math.PI));

// Returns the value of the number always rounded down, no matter the decimal
console.log(Math.floor(Math.PI));

// Base number to the power of exponent
console.log(Math.pow(2, 4));

console.log(Math.min(2, 5, 7));
console.log(Math.max(2, 5, 7));

// Provides a pseudo-random number from 0 to 1 (includes 0 but not the integer 1)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Generate a random number from 1 to 10
// Math.floor() instead of Math.ceil(), as Math.ceil() using has a chance of returning 0
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);