//Section 1: Basic Rules and Data Types
//Exercise 1
let thisIsANewVariable = 10;

if (thisIsANewVariable === 10) {
    // code block
}
//Exercise 2
let myString = 'Brandon Dutt';
let mtFloatNumber = 3.14;
let isActive = true;

//Exercise 3
let currentScore = 95; // Stores the current score of the user

//Exercise 4
console.log('100' == 100);
console.log('100' === 100);

//Section 2: Conditonals and Control Flow

//Exercise 5
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

//Exercise 6
let userAge = 16;
if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
//Exercise 7
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process ");
}

//Exercise 8
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Exercise 9
for (let i = 0; i <10; i++) {
    if (i === 7) {
        break;  
    }
    console.log(i);
}

//Exercise 10
let counter = 10;
do {
    console.log("Running once");
} while(false);

//Section 3 Functions and Data Structures

//Exercise 11
function calculateArea(width, height) {
    return width * height;
}
let reusltArea = calculateArea(5, 10);
console.log(resultArea);

//Exercise 12
 let fruitList =['Apple', 'Banana'];
 fruitList.push('Grape');
 fruitList.shift();
 console.log(fruitList.indexOf('Banana'));

//Exercise 13
let originalData =;
let clonedData = originalData.slice();
console.log(clonedData);

//Exercise 14
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

//Exercise 15
let dog = new Animal ("Canine", "Woof");
let cat = new Animal ("Feline", "Meow");

let animalArray= [dog, cat];
console.log(animalArray);