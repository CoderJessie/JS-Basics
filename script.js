/*let js = 'amazing';
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

//////TO BULKY
////////OR

//2ND SOLUTION
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
/*
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

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
	console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
	console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //subtraction operator
console.log('23' * '2'); //multiplication operator
console.log('23' / '2'); //division operator
console.log('23' > '18'); //logical operator

let n = '1' + 1;
n = n - 1;
console.log(n);

//Truthy and Falsy values
//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
	console.log("Don't spend it all!");
} else {
	console.log('You should get a job!');
}

let height = 0;
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}

//EQUALITY OPERATORS
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
	//'23' == 23, use ===
	console.log('Cool 23 is an amazing number!');
} else if (favourite === 7) {
	console.log('7 is also a cool number');
} else if (favourite === 9) {
	console.log('9 is also a cool number');
} else {
	console.log('Number is not 23 or 7 or 9');
}
//Different operator
if (favourite !== 23) {
	//do not use !=
	console.log('Why not 23?');
}

//Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //&& means 'and'
console.log(hasDriversLicense || hasGoodVision); //|| means 'or'
console.log(!hasDriversLicense); //! means 'not'

//if (shouldDrive) {
//	console.log('Sarah is able to drive!');
// } else {
//	console.log('Someone else should drive...');
// }
const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive...');
}
*/

/////////////////////////////////////////////
// Coding Challenge  #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96,108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 196

GOOD LUCK
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
// 	console.log('Team Dolphins win!');
// } else if (scoreDolphins < scoreKoalas) {
// 	console.log('Team Koalas win!');
// } else if (scoreDolphins === scoreKoalas) {
// 	console.log('Both teams have a tie!');
// } else {
// 	console.log('There is no winner!');
// }

//Bonus 1
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log('Team Dolphins win!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	console.log('Team Koalas win!');
} else if (
	scoreDolphins === scoreKoalas &&
	scoreDolphins >= 100 &&
	scoreKoalas >= 100
) {
	console.log('Both teams have a tie!');
} else {
	console.log('There is no winner!');
}
