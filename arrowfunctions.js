// Task 1 
// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
// Simple arrow function
const greet = (name) =>  { 
    return `Hello, ${name}!`;
}
console.log(greet("Mohammed")); // Calling function 



// Task 2 
// Write a simple arrow function that takes two parameters and returns their sum.
const number = (num1, num2) => {
    return num1 + num2;
}
console.log(number(5, 5)); // Calling function 


// Task 3 
// Write a simple arrow function that squares a number.
const squared = (number) => {
    return number **2;
}
console.log(squared(5)); // Calling function 



// Challenge using iteration methods 
const arrayOfnumbers = (numbers) => {
    const squared = numbers.map(number => number **2);
    return squared;
}
console.log(arrayOfnumbers([2, 4, 6, 8, 10])); // Calling function 
