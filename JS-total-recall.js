/** I Variables & Datatypes
 * 
 * A. Q + A
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it? =============== PLANNING BEFORE STARTING TO CODE
What percentage of time should be spent 
thinking about how you're going to solve a problem 
vs actually typing in code to solve it? ====================== 20X80
 */

let q = 5;    //  declare and assigna variable 
q = 10; // change the value of a variable
let x = q; //assign an existing variable to a new variable
console.log(q+x);
console.log("===========================================================");

/**
 * B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. 
Then, write an expression that takes the string "Hello, my name is " 
and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
 */

let firstVariable;
firstVariable = "Hello World";
console.log(firstVariable);
firstVariable = 21;
let secondVariable = firstVariable;
secondVariable = "By-by World";
console.log(firstVariable); // should be 21
console.log(secondVariable);
let yourName = 'Olga';
// console.log(`Hello, my name is ${yourName}`)
let expression = 'Hello, my name is ' + yourName
console.log(expression);
console.log("===========================================================");

/**
 * C. Booleans
Using the provided variable definitions, replace the blanks so that 
all log statements print true in the console. 
Answers should be all be valid JS syntax and not weird things 
that don't make sense but happen to print true to the console
 */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a * b);
console.log(c % d);
console.log('Name' + ' is the important part of our identity, so use your ' + 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!false || false)
console.log(e && 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
console.log("===========================================================");

/**
 * D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit
 */

let animal;
animal = 'sheep';
if (animal === 'cow') {
    console.log('mooooo');
} else {console.log("Hey! You're not a cow.")}
console.log("===========================================================");


/**
 * E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", 
if the age is 16 years or older, 
or, 
if the age is younger than 16, a message should print "Sorry, you're too young."
 */

let age;
if (age > 16) {
    console.log('Here are the keys!');
} else {
    console.log("Sorry, you're too young.!");
}
age = 5;
console.log("===========================================================");

/** II. Loops
 * 
 * A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000
 */

// for ( let i = 0; i <=10; i++) {
//     console.log(i)
// }
// for ( let i = 10; i <=400; i++) {
//     console.log(i)
// }
for ( let i = 12; i <=40; i+=3) {
    console.log(i);
}
console.log("===========================================================");

/**
 * B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 */

for ( let i = 1; i <= 10; i++) { 
    if (i % 2 === 0) {
        console.log(i + "<-- is an even number");
    } else {
    console.log(i)
}
}
console.log("======sorry, 100 is too long, I checked - it works same way :)=========");

/**
 * C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
For numbers divisible by both three and five, be sure your code prints both messages
 */

for ( let i = 1; i <= 100; i++) { 
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log(`I found a ${i}. High five! Three is a crowd`);
    } else if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }
}
console.log("===========================================================");

/**
 * D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. 
Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
 */

let bank_account = 0;
for (i = 1; i <= 10; i ++) {
    bank_account = bank_account + i;
}
console.log('$' + bank_account);

let bonus = 0;
for (i = 1; i <= 100; i ++) {
    bonus = bonus + i;
}
bonus = bonus * 2;
console.log('$' + bonus);
console.log("===========================================================");

/**
 * III. Arrays & Control flow
 * A. Talk about it:
What are the things in an array called? ========================  "elements" or "items"
Do Arrays guarantee those things will be in order? ============= yes
What real-life thing could you model with an array? ============ shopping lists, student grades, calendar events
 */

/**
 * B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
 */

const quotes = ['Hit the road, Jack', 'Tired with all this for restful death I cry', 'Be the change you wish to see in the world'];
console.log(quotes);
console.log("===========================================================");

/**
 * C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

 */

const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];
randomThings[2] = 'World';
console.log(randomThings);
console.log("===========================================================");

/**
 * D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array
 */

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
const thirdElement = ourClass[2]; //access the 3rd element of the array
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);
console.log("===========================================================");

/**
 * E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

 */

const myArray = [5, 10, 500, 20];
//Add the string "Aegon"to the end of the array. 
myArray.push('Aegon');
console.log(myArray);
// Add another string of your choice to the end of the array.
myArray.push('Targaryen');
console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray);
console.log("===========================================================");

/**
 * F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.
 */

const integer = 3;

if (integer < 100) {
    console.log("little number");
  } else {
    console.log("big number");
  }
  console.log("===========================================================");

  /**
   * G. Monkey in the Middle
Write an if ... else if ... else statement:

console.log()little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
   */

const number = 7;

if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}
console.log("===========================================================");

/**
 * H. What's in Your Closet?
 * 
 */

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);


  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// *Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

// * In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

// * Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);

// *Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ', ' + thomsCloset[1][0] + ' and ' + thomsCloset[2][0]);

//* Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1]);
console.log("===========================================================");

/**
 * IV. Functions


A. printGreeting
Do you think you could write a function called 
printGreeting with a parameter name that returns 
a greeting with the argument interpolated into the greeting?
Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, 
because you've already done it. If you've done the problem twice, 
read entire problems carefully before doing them from now on.
 */

function printGreeting(nameInput) {
    return "Hello there, " + nameInput + "!";
}
console.log(printGreeting("Slimer"));
console.log("===========================================================");

/**
 * B. printCool
Write a function printCool that accepts one parameter, name as an argument. 
The function should print the name and a message saying that that person is cool.

console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
 */

function printCool(name) {
    return "Captain " + name + " is cool";
}
console.log(printCool("Reynolds"));
console.log("===========================================================");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
    const volume = Math.pow(num, 3); // calculate volume using Math.pow() method
    return volume;
  }
  
console.log(calculateCube(5));
console.log("===========================================================");

// D. isVowel
// Write a function isVowel that takes a character 
// (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise. The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. 
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(char) {
    let lowercaseChar = char.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(lowercaseChar);
}

console.log(isVowel("E"));
console.log("===========================================================");

/**
 * E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). 
The function should return an array of numbers where each number is the length of the corresponding string.
 */

function getTwoLengths(str1, str2) {
    const length = [str1.length, str2.length]; 
    return length;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));
