// Logical operators https://javascript.info/logical-operators

// || (OR)

// Single condition:
//let hour = 9;
//
//if (hour < 10 || hour > 17) {
//    alert( 'The office is closed.' );
//}

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert( 'The office is closed.' );
// }

// Why (OR) is different than classic boolean-only OR: it gets the first truthy value from a list of variables or expressions.

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // If all variables were falsy, "Anonymous" would show up.

// Short-circuit evaluation: (OR) processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

// true || alert("not printed");
// false || alert("printed");


// && (AND)

// In classical programming, AND returns true if both operands are truthy and false otherwise.
// && finds the first falsy value.

// let andHour = 12;
// let andMinute = 30;

// if (andHour == 12 && andMinute == 30) {
//   alert( 'The time is 12:30' );
// }

// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// if the first operand is falsy, AND returns it. The second operand is ignored.
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// Passing multiple values:

// alert( 1 && 2 && null && 3 );

// ! (NOT)
// Syntax: result = !value;
// Accepts a single argument and 
// (1) converts to boolean (true/false) and
// (2) returns the inverse value.

// double NOT !! converts a value to boolean type;

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// Check the range between


// My attempt:
let age = 12;
if (age < 14 || age > 90) {
    alert(`Age \(${age}\) is not between 14 and 90.`)
}

// Solution:

if (age >= 14 && age <= 90) {
    alert(`Age \(${age}\) is not between 14 and 90.`)
}

// Check the range outside

// My first answer to the above works!!

let age2 = 14;
if (!(age2 >= 14 && age <= 90)) {
    alert(`Age \(${age2}\) is not between 14 and 90 inclusively.`)
}
else {
    alert(`Age \(${age2}\) is between 14 and 90 inclusively.`)
}

// "if" - which of these alerts are going to execute?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' ); // -1 && 0 = 0, i.e. falsy. && returns true if both operands are truthy and false otherwise. 0 = false, of course.

