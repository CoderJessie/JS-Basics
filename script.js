let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilida';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.142;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Ogbondah';
console.log(lastName);
/*
/////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

comparison operator
console.log(now - 1991 > now - 2018);

mathematical operator
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x=y=10, x=10
console.log(x, y);

parenthesis operator
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Marks's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean varible 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.98 m tall.
John weights 85 kg and is 1.76 m tall.

GOOD LUCK

//1ST SOLUTION

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
console.log(markBMI, johnBMI);
let markHigherBMI = true;
console.log(markBMI > johnBMI);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const mark2BMI = massMark2 / heightMark2 ** 2;
const john2BMI = massJohn2 / heightJohn2 ** 2;
console.log(mark2BMI, john2BMI);
let markHigherBMI2 = true;
console.log(mark2BMI > john2BMI);
*/
//////TO BULKY
////////OR

//2ND SOLUTION
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

//Strings and template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = '2037';

const jonas =
	"I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('Strings with \n\
multiple \n\
lines');

console.log(`Strings with
multiple
lines`);

////IF-ELSE STATEMENTS
const age = 15;

if (age >= 18) {
	console.log('Sarah can start driving license');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
*/
////////////////////////
//Coding Challenge #2
/*
Use the BMI example from the Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 

GOOD LUCK
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark, BMIJohn);
// if (BMIMark > BMIJohn) {
// 	console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
// 	console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }
