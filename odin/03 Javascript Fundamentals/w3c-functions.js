// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

const myArray = ['lambs', 'stoats', 'carp', 'anchovies', 'orangutans' ,'breakfast cereals', 'fruit bats', 'la...'];
const madeAString = myArray.join(', and ');
console.log("And the people did feast upon the " + madeAString);

// Default parameters

function favoriteColor(color = "Blue") {
    console.log(`What is your favorite color? ${color}!`);
};

favoriteColor();
// Override default (Blue)
favoriteColor("Blue. No! Yellowwwwwwwwww")

// Anonymous functions

// For example, let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. This function expects you to pass it (at least) two parameters:
// 1. the name of the event to listen for, which in this case is keydown
// 2. a function to run when the event happens.
// When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed.

// (The code below won't run because textBox is not defined.)

// function logKey(event) {
//    console.log(`You pressed "${event.key}".`);
//  }
//  
//  textBox.addEventListener('keydown', logKey);
  