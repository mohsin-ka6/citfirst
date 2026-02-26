let name = "Hassan";
let age = 20;
let isStudent = true;

console.log(`My name is ${name}. I am ${age} years old. Student: ${isStudent}`);


let myString = "Hello";
let myNumber = 25;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(typeof myString);     
console.log(typeof myNumber);     
console.log(typeof myBoolean);    
console.log(typeof myUndefined);  
console.log(typeof myNull);       



let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);


let celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;

console.log(`Celsius: ${celsius}`);
console.log(`Fahrenheit: ${fahrenheit}`);

let number = 8;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}


let ageCheck = 17;

if (ageCheck >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let tableNumber = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


function greet() {
    console.log("This Is Elon Musk");
}

greet();

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
