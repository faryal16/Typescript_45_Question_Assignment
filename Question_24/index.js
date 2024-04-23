"use strict";
// Q # 24 More Conditional Tests:
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
let country = "Pakistan";
console.log("is country is equal to 'Pakistan'?.");
console.log(country === "Pakistan"); // true
let city = "Karachi";
console.log("\nis city is not equal to 'Karachi'?.");
console.log(city != "Karachi"); //false
//Tests using the lower case function
let book = "ENGLISH";
console.log("\n is English  is equal to english after written in 'lowercase'?");
console.log(book.toLowerCase() === "english"); //true
let bike = "HONDA";
console.log("\nis honda is not equal to honda after converting in 'lowercase'?");
console.log(bike.toLowerCase() != "honda"); // false
//Numerical tests involving equality and inequality,
//greater than and less than, greater than or equal to, and less than or equal to
// variable define
let num1 = 10;
let num2 = 10;
//equality
console.log("\n is 10 is not equal to 10?");
console.log(num1 == num2);
//in equality
console.log("\n is 10 is not equal to 10?");
console.log(num1 != num2);
//greater than 
console.log("\n is 10 is graterthan 8?");
console.log(num1 > 5);
//lessthan
console.log("\n is 10 is lessthan 9?");
console.log(num1 < 3);
//greaterthan or equal to
let age = 18;
console.log("\nif age is greater than or equalto 18 , you are mature..");
console.log(age >= 18); //true
// lessthan or equal to
console.log("\nif age is lessthan or equal to 18, you are teenager.. ");
console.log(age <= 16); //false
//Tests using "and" and "or" operators
let a = 10;
let b = 20;
let c = 5;
console.log("\n both are equal?");
console.log((a < b) && (a > 5)); //true
console.log("\n are they not equal");
console.log((a > b) && (b > c)); //false
console.log("\n are theses true?");
console.log((a < b) || (b > c)); //true
console.log("\n these are false?");
console.log((b < a) || (55 < b)); //false
//Test whether an item is in a array
let subject = [" Math", "English", "Urdu", "Science"];
console.log("\n is Urdu is include in this array?");
console.log(subject.includes("Urdu"));
console.log("\n is physics is include in this array?");
console.log(subject.includes("physics"));
// Test whether an item is not in a array
let room = ["Cupboard", "bed", "chair", "table"];
console.log("\nis bed is includes in this array?");
console.log(room.includes("bed"));
console.log("\nis dressing is includes in this array?");
console.log(room.includes("dressing"));
