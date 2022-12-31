const string = "The revolution will not be televised.";

console.log(string);

const button = document.querySelector("button");
function greet() {
    const name = prompt("What is your name?");
    alert("Hello " + `${name}, nice to see you!`);
}

button.addEventListener("click", greet);

const nameNumVsStrings = "Front ";
const number = 242;
console.log(`${nameNumVsStrings}${number}`);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. 
I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// Equivalent in normal string (double quotes)

const outputNormalString = "I like the song. \nI gave it a score of 90%.";
console.log(outputNormalString);

let txt = "Hello!";
txt = txt.toUpperCase();
console.log(txt);

// Length

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(`The length of the string is ${length}.`);

// JavaScript String slice()

let sliceText = "Apple, Banana, Kiwi";
let slicePart = sliceText.slice(7, 13);
console.log(slicePart);

// JavaScript String substring()

let substringStr = "Apple, Banana, Kiwi";
let substringPart = substringStr.substring(-4);
console.log(substringPart);

// JavaScript String replace()

let replaceText = "Please visit Microsoft and Microsoft!"; // only replaces first instance
let newReplaceText = replaceText.replace("Microsoft", "W3Schools"); 
// to ignore case, instead of "Microsoft," use /MICROSOFT/i (no quotation marks)
console.log(replaceText);
console.log(newReplaceText);

// replace() only replaces first instance
// - to replace all matches, use a regular expression with a /g flag appended, e.g. /Microsoft/g ... OR...

// JavaScript String ReplaceAll
textReplaceAll = "Cats, Cats, and Dogs";
newTextReplaceAll = textReplaceAll.replaceAll("Cats","Dogs");
console.log(newTextReplaceAll);

// More Methods: https://www.w3schools.com/js/js_string_methods.asp